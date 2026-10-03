<?php
declare(strict_types=1);

date_default_timezone_set('Asia/Tokyo');
mb_internal_encoding('UTF-8');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');

const CLIENT_OFFLINE_MS = 8000;
const CLIENT_TTL_MS = 90000;
const PEER_CLIENT_TTL_MS = 86400000;
const MESSAGE_TTL_MS = 1209600000;
const MAX_MESSAGES = 500;
const MAX_BODY_BYTES = 12582912;

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function request_body(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') {
        return [];
    }
    if (strlen($raw) > MAX_BODY_BYTES) {
        respond(413, ['ok' => false, 'error' => 'Request body too large.']);
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        respond(400, ['ok' => false, 'error' => 'Invalid JSON body.']);
    }
    return $data;
}

function now_ms(): int
{
    return (int) floor(microtime(true) * 1000);
}

function random_id(): string
{
    return bin2hex(random_bytes(16));
}

function data_directory(): string
{
    $preferred = dirname(__DIR__, 2) . '/ourdrop-data';
    if (is_dir($preferred) || @mkdir($preferred, 0700, true)) {
        return $preferred;
    }

    $fallback = __DIR__ . '/.ourdrop-data';
    if (!is_dir($fallback) && !@mkdir($fallback, 0700, true)) {
        respond(500, ['ok' => false, 'error' => 'Could not create data directory.']);
    }
    return $fallback;
}

function default_state(): array
{
    return [
        'clients' => [],
        'messages' => [],
        'sequence' => 0,
        'peerLinks' => [],
        'groups' => [],
        'contactHints' => [],
        'suppressedContacts' => [],
    ];
}

function with_state(callable $callback): array
{
    $path = data_directory() . '/state.json';
    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        respond(500, ['ok' => false, 'error' => 'Could not open state storage.']);
    }
    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        respond(503, ['ok' => false, 'error' => 'Could not lock state storage.']);
    }

    rewind($handle);
    $raw = stream_get_contents($handle);
    $state = $raw ? json_decode($raw, true) : default_state();
    if (!is_array($state)) {
        $state = default_state();
    }
    $state += default_state();

    $result = $callback($state);
    if (!is_array($result) || !isset($result['state'], $result['response'])) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(500, ['ok' => false, 'error' => 'Invalid state operation.']);
    }

    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($result['state'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    return $result['response'];
}

function prune_state(array &$state): void
{
    $now = now_ms();
    foreach ($state['clients'] as $id => $client) {
        $ttl = client_has_peers($state, $id) ? PEER_CLIENT_TTL_MS : CLIENT_TTL_MS;
        if ($now - (int) ($client['lastSeen'] ?? 0) > $ttl) {
            unset($state['clients'][$id]);
        }
    }

    $minimum = $now - MESSAGE_TTL_MS;
    $state['messages'] = array_values(array_filter(
        $state['messages'],
        static fn(array $message): bool => (int) ($message['createdAt'] ?? 0) >= $minimum
    ));
    if (count($state['messages']) > MAX_MESSAGES) {
        $state['messages'] = array_slice($state['messages'], -MAX_MESSAGES);
    }
}

function normalize_address(string $address): string
{
    if (str_starts_with($address, '::ffff:')) {
        return substr($address, 7);
    }
    return $address;
}

function is_private_or_loopback_address(string $address): bool
{
    $address = normalize_address($address);
    if ($address === '' || $address === '::1') {
        return $address === '::1';
    }
    if (str_starts_with($address, '127.')) {
        return true;
    }
    if (str_starts_with($address, '10.')) {
        return true;
    }
    if (str_starts_with($address, '192.168.')) {
        return true;
    }
    if (preg_match('/^172\.(\d+)\./', $address, $match)) {
        $second = (int) $match[1];
        return $second >= 16 && $second <= 31;
    }
    return false;
}

function is_same_device(string $viewerAddress, string $clientAddress): bool
{
    $viewerAddress = normalize_address($viewerAddress);
    $clientAddress = normalize_address($clientAddress);
    return $viewerAddress !== ''
        && $clientAddress !== ''
        && $viewerAddress === $clientAddress
        && is_private_or_loopback_address($viewerAddress);
}

function ipv4_same_subnet(string $left, string $right): bool
{
    if (!preg_match('/^(\d+)\.(\d+)\.(\d+)\./', $left, $leftMatch)) {
        return false;
    }
    if (!preg_match('/^(\d+)\.(\d+)\.(\d+)\./', $right, $rightMatch)) {
        return false;
    }

    if ($leftMatch[1] === '10' && $rightMatch[1] === '10') {
        return $leftMatch[2] === $rightMatch[2] && $leftMatch[3] === $rightMatch[3];
    }
    if ($leftMatch[1] === '192' && $leftMatch[2] === '168' && $rightMatch[1] === '192' && $rightMatch[2] === '168') {
        return $leftMatch[3] === $rightMatch[3];
    }
    if ($leftMatch[1] === '172' && $rightMatch[1] === '172') {
        $leftSecond = (int) $leftMatch[2];
        $rightSecond = (int) $rightMatch[2];
        return $leftSecond >= 16 && $leftSecond <= 31 && $leftSecond === $rightSecond && $leftMatch[3] === $rightMatch[3];
    }

    return false;
}

function ipv6_same_prefix(string $left, string $right, int $prefixBits = 64): bool
{
    $leftBin = @inet_pton($left);
    $rightBin = @inet_pton($right);
    if ($leftBin === false || $rightBin === false || strlen($leftBin) !== 16 || strlen($rightBin) !== 16) {
        return false;
    }

    $fullBytes = intdiv($prefixBits, 8);
    $remainingBits = $prefixBits % 8;
    if ($fullBytes > 0 && substr($leftBin, 0, $fullBytes) !== substr($rightBin, 0, $fullBytes)) {
        return false;
    }
    if ($remainingBits === 0) {
        return true;
    }

    $mask = (0xFF << (8 - $remainingBits)) & 0xFF;
    return ((ord($leftBin[$fullBytes]) & $mask) === (ord($rightBin[$fullBytes]) & $mask));
}

function is_same_network(string $viewerAddress, string $clientAddress): bool
{
    $viewerAddress = normalize_address($viewerAddress);
    $clientAddress = normalize_address($clientAddress);
    if ($viewerAddress === '' || $clientAddress === '') {
        return false;
    }
    if ($viewerAddress === $clientAddress) {
        return true;
    }

    $viewerPrivate = is_private_or_loopback_address($viewerAddress);
    $clientPrivate = is_private_or_loopback_address($clientAddress);
    if ($viewerPrivate && $clientPrivate) {
        return ipv4_same_subnet($viewerAddress, $clientAddress);
    }
    if (!$viewerPrivate && !$clientPrivate && !str_contains($viewerAddress, ':') && !str_contains($clientAddress, ':')) {
        return $viewerAddress === $clientAddress;
    }
    if (str_contains($viewerAddress, ':') && str_contains($clientAddress, ':')) {
        return ipv6_same_prefix($viewerAddress, $clientAddress);
    }

    return false;
}

function peer_link_key(string $leftId, string $rightId): string
{
    return $leftId <= $rightId ? "$leftId|$rightId" : "$rightId|$leftId";
}

function link_peers(array &$state, string $leftId, string $rightId): void
{
    if ($leftId === '' || $rightId === '' || $leftId === $rightId) {
        return;
    }
    $key = peer_link_key($leftId, $rightId);
    if (!in_array($key, $state['peerLinks'] ?? [], true)) {
        $state['peerLinks'][] = $key;
    }
}

function unlink_peers(array &$state, string $leftId, string $rightId): void
{
    if ($leftId === '' || $rightId === '' || $leftId === $rightId) {
        return;
    }
    $key = peer_link_key($leftId, $rightId);
    $state['peerLinks'] = array_values(array_filter(
        $state['peerLinks'] ?? [],
        static fn(string $linkKey): bool => $linkKey !== $key
    ));
}

function record_message_contacts(array &$state, array $message): void
{
    $from = (string) ($message['from'] ?? '');
    if ($from === '') {
        return;
    }
    foreach ($message['to'] ?? [] as $recipientId) {
        $recipientId = (string) $recipientId;
        if ($recipientId === '' || $recipientId === $from) {
            continue;
        }
        if (!isset($state['contactHints'][$recipientId]) || !is_array($state['contactHints'][$recipientId])) {
            $state['contactHints'][$recipientId] = [];
        }
        $state['contactHints'][$recipientId][$from] = now_ms();
        unset($state['suppressedContacts'][$recipientId][$from]);
    }
}

function suppress_contacts(array &$state, string $leftId, string $rightId): void
{
    foreach ([[$leftId, $rightId], [$rightId, $leftId]] as [$viewerId, $otherId]) {
        if (!isset($state['suppressedContacts'][$viewerId]) || !is_array($state['suppressedContacts'][$viewerId])) {
            $state['suppressedContacts'][$viewerId] = [];
        }
        $state['suppressedContacts'][$viewerId][$otherId] = true;
        unset($state['contactHints'][$viewerId][$otherId]);
    }
}

function client_has_peers(array $state, string $clientId): bool
{
    foreach ($state['peerLinks'] ?? [] as $key) {
        [$leftId, $rightId] = array_pad(explode('|', $key, 2), 2, '');
        if ($leftId === $clientId || $rightId === $clientId) {
            return true;
        }
    }
    return false;
}

function are_peers(array $state, string $leftId, string $rightId): bool
{
    if ($leftId === '' || $rightId === '' || $leftId === $rightId) {
        return false;
    }
    return in_array(peer_link_key($leftId, $rightId), $state['peerLinks'] ?? [], true);
}

function client_visible_to_viewer(array $state, array $viewer, array $client): bool
{
    if (($viewer['id'] ?? '') === ($client['id'] ?? '')) {
        return false;
    }
    if (is_same_network((string) ($viewer['address'] ?? ''), (string) ($client['address'] ?? ''))) {
        return true;
    }
    return are_peers($state, (string) $viewer['id'], (string) $client['id']);
}

function address(): string
{
    $forwarded = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
    if ($forwarded !== '') {
        return normalize_address(trim(explode(',', $forwarded)[0]));
    }
    return normalize_address((string) ($_SERVER['REMOTE_ADDR'] ?? ''));
}

function pair_code_in_use(array $clients, string $pairCode, string $ownerId = ''): bool
{
    foreach ($clients as $id => $client) {
        if ($id !== $ownerId && ($client['pairCode'] ?? '') === $pairCode) {
            return true;
        }
    }
    return false;
}

function generate_pair_code(array $clients, string $ownerId = ''): string
{
    for ($attempt = 0; $attempt < 1000; $attempt++) {
        $pairCode = (string) random_int(1000, 9999);
        if (!pair_code_in_use($clients, $pairCode, $ownerId)) {
            return $pairCode;
        }
    }
    throw new RuntimeException('Could not allocate a unique pair code.');
}

function upsert_client(array &$state, array $raw): array
{
    $id = trim((string) ($raw['id'] ?? '')) ?: random_id();
    $instanceId = (string) ($raw['instanceId'] ?? '');
    $existing = $state['clients'][$id] ?? [];
    $requested = trim((string) ($raw['pairCode'] ?? ''));
    if ($requested !== '' && !pair_code_in_use($state['clients'], $requested, $id)) {
        $pairCode = $requested;
    } elseif (!empty($existing['pairCode']) && !pair_code_in_use($state['clients'], (string) $existing['pairCode'], $id)) {
        $pairCode = (string) $existing['pairCode'];
    } else {
        $pairCode = generate_pair_code($state['clients'], $id);
    }

    $tone = (string) ($raw['tone'] ?? $existing['tone'] ?? 'blue');
    if (!in_array($tone, ['blue', 'violet', 'teal'], true)) {
        $tone = 'blue';
    }

    $client = [
        'id' => $id,
        'instanceId' => $instanceId !== '' ? $instanceId : (string) ($existing['instanceId'] ?? ''),
        'name' => mb_substr((string) ($raw['name'] ?? $existing['name'] ?? 'Browser'), 0, 32, 'UTF-8'),
        'type' => mb_substr((string) ($raw['type'] ?? $existing['type'] ?? 'Web'), 0, 32, 'UTF-8'),
        'app' => mb_substr((string) ($raw['app'] ?? $existing['app'] ?? 'Browser'), 0, 32, 'UTF-8'),
        'form' => ($raw['form'] ?? $existing['form'] ?? '') === 'phone' ? 'phone' : 'laptop',
        'tone' => $tone,
        'address' => address(),
        'pairCode' => $pairCode,
        'joinedAt' => (int) ($existing['joinedAt'] ?? now_ms()),
        'lastSeen' => now_ms(),
        'active' => array_key_exists('active', $raw) ? (bool) $raw['active'] : (bool) ($existing['active'] ?? true),
    ];
    $state['clients'][$id] = $client;
    return $client;
}

function client_is_online(array $client, int $now): bool
{
    return $now - (int) ($client['lastSeen'] ?? 0) <= CLIENT_OFFLINE_MS;
}

function client_presence(array $client, int $now): string
{
    if (!client_is_online($client, $now)) {
        return 'offline';
    }
    return !empty($client['active']) ? 'active' : 'idle';
}

function sync_client_profile(array &$state, string $id, array $body): void
{
    if (!isset($state['clients'][$id])) {
        return;
    }

    if (isset($body['name']) && is_string($body['name'])) {
        $name = trim($body['name']);
        if ($name !== '') {
            $state['clients'][$id]['name'] = mb_substr($name, 0, 32, 'UTF-8');
        }
    }
    if (isset($body['type']) && is_string($body['type'])) {
        $state['clients'][$id]['type'] = mb_substr(trim($body['type']), 0, 32, 'UTF-8');
    }
    if (isset($body['app']) && is_string($body['app'])) {
        $state['clients'][$id]['app'] = mb_substr(trim($body['app']), 0, 32, 'UTF-8');
    }
    if (array_key_exists('form', $body)) {
        $state['clients'][$id]['form'] = ($body['form'] ?? '') === 'phone' ? 'phone' : 'laptop';
    }
    if (array_key_exists('active', $body)) {
        $state['clients'][$id]['active'] = (bool) $body['active'];
    }
}

function public_clients(array $state, string $viewerId): array
{
    $viewer = $state['clients'][$viewerId] ?? null;
    if ($viewer === null) {
        return [];
    }
    $now = now_ms();
    $result = [];
    foreach ($state['clients'] as $id => $client) {
        if ($id === $viewerId || !client_visible_to_viewer($state, $viewer, $client)) {
            continue;
        }
        $presence = client_presence($client, $now);
        $result[] = [
            'id' => $client['id'],
            'name' => $client['name'],
            'type' => $client['type'],
            'app' => $client['app'],
            'form' => $client['form'],
            'tone' => $client['tone'],
            'pairCode' => $client['pairCode'],
            'joinedAt' => $client['joinedAt'],
            'online' => $presence !== 'offline',
            'presence' => $presence,
            'sameDevice' => is_same_device((string) ($viewer['address'] ?? ''), (string) ($client['address'] ?? '')),
            'sameNetwork' => is_same_network((string) ($viewer['address'] ?? ''), (string) ($client['address'] ?? '')),
            'peered' => are_peers($state, $viewerId, $id),
        ];
    }
    usort($result, static fn(array $a, array $b): int => $a['joinedAt'] <=> $b['joinedAt']);
    return $result;
}

function public_client_row(array $state, string $viewerId, array $client, array $extra = []): array
{
    $viewer = $state['clients'][$viewerId] ?? [];
    $now = now_ms();
    $presence = client_presence($client, $now);
    return array_merge([
        'id' => $client['id'],
        'name' => $client['name'],
        'type' => $client['type'],
        'app' => $client['app'],
        'form' => $client['form'],
        'tone' => $client['tone'],
        'pairCode' => $client['pairCode'],
        'joinedAt' => $client['joinedAt'],
        'online' => $presence !== 'offline',
        'presence' => $presence,
        'sameDevice' => is_same_device((string) ($viewer['address'] ?? ''), (string) ($client['address'] ?? '')),
        'sameNetwork' => is_same_network((string) ($viewer['address'] ?? ''), (string) ($client['address'] ?? '')),
        'peered' => are_peers($state, $viewerId, (string) $client['id']),
    ], $extra);
}

function public_clients_for_viewer(array $state, string $viewerId): array
{
    $clients = public_clients($state, $viewerId);
    $known = [];
    foreach ($clients as $client) {
        $known[$client['id']] = true;
    }
    $suppressed = is_array($state['suppressedContacts'][$viewerId] ?? null) ? $state['suppressedContacts'][$viewerId] : [];
    $hints = is_array($state['contactHints'][$viewerId] ?? null) ? $state['contactHints'][$viewerId] : [];
    foreach ($hints as $senderId => $timestamp) {
        $senderId = (string) $senderId;
        if ($senderId === '' || $senderId === $viewerId || isset($known[$senderId])) {
            continue;
        }
        if (isset($suppressed[$senderId])) {
            continue;
        }
        if (!isset($state['clients'][$senderId])) {
            continue;
        }
        $clients[] = public_client_row($state, $viewerId, $state['clients'][$senderId], [
            'messageContact' => true,
        ]);
        $known[$senderId] = true;
    }
    usort($clients, static fn(array $a, array $b): int => ($a['joinedAt'] ?? 0) <=> ($b['joinedAt'] ?? 0));
    return $clients;
}

function is_participant(array $message, string $clientId): bool
{
    return ($message['from'] ?? '') === $clientId || in_array($clientId, $message['to'] ?? [], true);
}

function groups_for_client(array $state, string $clientId): array
{
    $groups = [];
    foreach ($state['groups'] ?? [] as $group) {
        if (!is_array($group)) {
            continue;
        }
        $ownerId = (string) ($group['ownerId'] ?? '');
        $memberIds = is_array($group['memberIds'] ?? null) ? $group['memberIds'] : [];
        if ($clientId === $ownerId || in_array($clientId, $memberIds, true)) {
            $groups[] = $group;
        }
    }
    usort($groups, static fn(array $a, array $b): int => (int) ($a['createdAt'] ?? 0) <=> (int) ($b['createdAt'] ?? 0));
    return $groups;
}

function upsert_group(array &$state, string $from, array $payload): array
{
    $groupId = (string) ($payload['id'] ?? '');
    if ($groupId === '' || !str_starts_with($groupId, 'group:')) {
        respond(400, ['ok' => false, 'error' => 'Invalid group id.']);
    }
    if (!isset($state['clients'][$from])) {
        respond(400, ['ok' => false, 'error' => 'Unknown client.']);
    }

    $existing = is_array($state['groups'][$groupId] ?? null) ? $state['groups'][$groupId] : null;
    $ownerId = (string) ($existing['ownerId'] ?? $from);
    if ($existing !== null && $ownerId !== $from) {
        respond(403, ['ok' => false, 'error' => 'Only the group owner can update this group.']);
    }

    $memberIds = array_values(array_unique(array_map(
        'strval',
        is_array($payload['memberIds'] ?? null) ? $payload['memberIds'] : []
    )));
    $memberIds = array_values(array_filter($memberIds, static fn(string $id): bool => $id !== '' && $id !== $ownerId));

    $name = trim((string) ($payload['name'] ?? ($existing['name'] ?? 'Group')));
    if ($name === '') {
        $name = 'Group';
    }

    $group = [
        'id' => $groupId,
        'name' => mb_substr($name, 0, 64, 'UTF-8'),
        'code' => mb_substr((string) ($payload['code'] ?? ($existing['code'] ?? '')), 0, 16, 'UTF-8'),
        'expiry' => mb_substr((string) ($payload['expiry'] ?? ($existing['expiry'] ?? '14 days')), 0, 32, 'UTF-8'),
        'ownerId' => $ownerId,
        'memberIds' => $memberIds,
        'createdAt' => (int) ($existing['createdAt'] ?? ($payload['createdAt'] ?? now_ms())),
        'updatedAt' => now_ms(),
        'version' => (int) (($existing['version'] ?? 0) + 1),
    ];
    $state['groups'][$groupId] = $group;
    return $group;
}

function delete_group(array &$state, string $from, string $groupId): void
{
    if ($groupId === '' || !str_starts_with($groupId, 'group:')) {
        respond(400, ['ok' => false, 'error' => 'Invalid group id.']);
    }
    if (!isset($state['clients'][$from])) {
        respond(400, ['ok' => false, 'error' => 'Unknown client.']);
    }
    $existing = is_array($state['groups'][$groupId] ?? null) ? $state['groups'][$groupId] : null;
    if ($existing === null) {
        return;
    }
    if ((string) ($existing['ownerId'] ?? '') !== $from) {
        respond(403, ['ok' => false, 'error' => 'Only the group owner can delete this group.']);
    }
    unset($state['groups'][$groupId]);
}

$action = (string) ($_GET['action'] ?? 'health');
$body = request_body();

try {
    $response = with_state(function (array $state) use ($action, $body): array {
        prune_state($state);

        if ($action === 'health') {
            return ['state' => $state, 'response' => ['ok' => true, 'backend' => 'php-polling']];
        }

        if ($action === 'register') {
            $client = upsert_client($state, $body);
            return ['state' => $state, 'response' => [
                'ok' => true,
                'client' => $client,
                'clients' => public_clients($state, $client['id']),
                'groups' => groups_for_client($state, $client['id']),
                'cursor' => (int) $state['sequence'],
            ]];
        }

        if ($action === 'poll') {
            $id = (string) ($body['id'] ?? '');
            if (!isset($state['clients'][$id])) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 404, 'error' => 'Unknown client.']];
            }
            $state['clients'][$id]['lastSeen'] = now_ms();
            $state['clients'][$id]['address'] = address();
            sync_client_profile($state, $id, $body);
            $cursor = (int) ($body['cursor'] ?? 0);
            $messages = array_values(array_filter(
                $state['messages'],
                static fn(array $message): bool => (int) ($message['cursor'] ?? 0) > $cursor && is_participant($message, $id)
            ));
            return ['state' => $state, 'response' => [
                'ok' => true,
                'client' => $state['clients'][$id],
                'clients' => public_clients_for_viewer($state, $id),
                'groups' => groups_for_client($state, $id),
                'messages' => $messages,
                'cursor' => (int) $state['sequence'],
            ]];
        }

        if ($action === 'regenerate-pair-code') {
            $id = (string) ($body['id'] ?? '');
            if (!isset($state['clients'][$id])) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 404, 'error' => 'Unknown client.']];
            }
            $state['clients'][$id]['pairCode'] = generate_pair_code($state['clients'], $id);
            $state['clients'][$id]['lastSeen'] = now_ms();
            return ['state' => $state, 'response' => [
                'ok' => true,
                'client' => $state['clients'][$id],
                'clients' => public_clients($state, $id),
            ]];
        }

        if ($action === 'pair') {
            $from = (string) ($body['from'] ?? '');
            $pairCode = trim((string) ($body['pairCode'] ?? ''));
            if ($from === '' || !isset($state['clients'][$from])) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 400, 'error' => 'Unknown client. Reload the page and try again.']];
            }
            if ($pairCode === '') {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 400, 'error' => 'Pair code is required.']];
            }
            if (($state['clients'][$from]['pairCode'] ?? '') === $pairCode) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 422, 'error' => 'You cannot pair with your own pair code.']];
            }
            $target = null;
            foreach ($state['clients'] as $id => $client) {
                if ($id !== $from && ($client['pairCode'] ?? '') === $pairCode) {
                    $target = $client;
                    break;
                }
            }
            if ($target === null) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 422, 'error' => 'No device with that pair code is connected.']];
            }
            link_peers($state, $from, (string) $target['id']);
            $participantIds = [$from, $target['id']];
            sort($participantIds, SORT_STRING);
            $now = now_ms();
            $presence = client_presence($target, $now);
            return ['state' => $state, 'response' => [
                'ok' => true,
                'target' => [
                    'id' => $target['id'],
                    'name' => $target['name'],
                    'type' => $target['type'],
                    'app' => $target['app'],
                    'form' => $target['form'],
                    'tone' => $target['tone'],
                    'pairCode' => $target['pairCode'],
                    'joinedAt' => $target['joinedAt'],
                    'online' => $presence !== 'offline',
                    'presence' => $presence,
                    'sameDevice' => is_same_device((string) ($state['clients'][$from]['address'] ?? ''), (string) ($target['address'] ?? '')),
                    'sameNetwork' => is_same_network((string) ($state['clients'][$from]['address'] ?? ''), (string) ($target['address'] ?? '')),
                    'peered' => true,
                ],
                'roomId' => 'pair:' . implode(':', $participantIds),
            ]];
        }

        if ($action === 'unpair') {
            $from = (string) ($body['from'] ?? '');
            $targetId = (string) ($body['targetId'] ?? '');
            if ($from === '' || !isset($state['clients'][$from])) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 400, 'error' => 'Unknown client. Reload the page and try again.']];
            }
            if ($targetId === '' || !isset($state['clients'][$targetId])) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 404, 'error' => 'That device is no longer available.']];
            }
            unlink_peers($state, $from, $targetId);
            suppress_contacts($state, $from, $targetId);
            return ['state' => $state, 'response' => [
                'ok' => true,
                'clients' => public_clients_for_viewer($state, $from),
            ]];
        }

        if ($action === 'message') {
            $from = (string) ($body['from'] ?? '');
            if (!isset($state['clients'][$from])) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 400, 'error' => 'Unknown sender.']];
            }
            $state['sequence'] = (int) $state['sequence'] + 1;
            $message = [
                'id' => random_id(),
                'cursor' => $state['sequence'],
                'roomId' => (string) ($body['roomId'] ?? ''),
                'from' => $from,
                'fromName' => $state['clients'][$from]['name'],
                'to' => array_values(array_map('strval', is_array($body['to'] ?? null) ? $body['to'] : [])),
                'time' => date('H:i'),
                'text' => isset($body['text']) ? (string) $body['text'] : '',
                'file' => $body['file'] ?? null,
                'groupMeta' => is_array($body['groupMeta'] ?? null) ? $body['groupMeta'] : null,
                'createdAt' => now_ms(),
            ];
            $state['messages'][] = $message;
            record_message_contacts($state, $message);
            prune_state($state);
            return ['state' => $state, 'response' => ['ok' => true, 'message' => $message]];
        }

        if ($action === 'history') {
            $id = (string) ($body['id'] ?? '');
            $roomId = (string) ($body['roomId'] ?? '');
            $messages = array_values(array_filter(
                $state['messages'],
                static fn(array $message): bool => ($message['roomId'] ?? '') === $roomId && is_participant($message, $id)
            ));
            return ['state' => $state, 'response' => ['ok' => true, 'messages' => $messages]];
        }

        if ($action === 'group-sync') {
            $from = (string) ($body['from'] ?? '');
            $groupPayload = is_array($body['group'] ?? null) ? $body['group'] : null;
            if ($groupPayload === null) {
                return ['state' => $state, 'response' => ['ok' => false, 'status' => 400, 'error' => 'Group payload is required.']];
            }
            $group = upsert_group($state, $from, $groupPayload);
            return ['state' => $state, 'response' => ['ok' => true, 'group' => $group]];
        }

        if ($action === 'group-delete') {
            $from = (string) ($body['from'] ?? '');
            $groupId = (string) ($body['groupId'] ?? '');
            delete_group($state, $from, $groupId);
            return ['state' => $state, 'response' => ['ok' => true]];
        }

        return ['state' => $state, 'response' => ['ok' => false, 'status' => 404, 'error' => 'Unknown action.']];
    });

    $status = (int) ($response['status'] ?? 200);
    unset($response['status']);
    respond($status, $response);
} catch (Throwable $error) {
    respond(500, ['ok' => false, 'error' => $error->getMessage()]);
}
