const tones = ["blue", "violet", "teal", "green", "rose", "amber", "cyan", "indigo"];
const HOST_TONE = "violet";
const orderedSlotAngles = [-90, 90, 0, 180, -45, 135, 45, -135];
const uiCopy = {
  ja: {
    groups: "グループ",
    addGroup: "グループを追加",
    addMembers: "メンバー追加",
    pairByCode: "コードでペア",
    pairFromRadar: "レーダーからペア",
    directChat: "個別チャット",
    pairOrAdd: "レーダーからペアするか、グループを追加",
    connected: "接続中",
    offline: "IMAP未接続",
    hostSetup: "ホスト設定",
    connectOnce: "IMAPを一度だけ接続",
    saveUnlock: "保存して解除",
    groupSettings: "グループ設定",
    editGroup: "グループを編集",
    groupName: "グループ名",
    expiry: "期限",
    expiry7Days: "7日間",
    expiry14Days: "14日間",
    expiry30Days: "30日間",
    done: "完了",
    pairByCodeButton: "コードでペア",
    addMembersHelp: "メンバーを追加",
    device: "台",
    devices: "台",
    member: "人",
    members: "人",
    removeGroup: "グループを削除",
    noDevices: "オンラインの端末がありません",
    thisDevice: "この端末",
    sameDevice: "同一デバイス",
    nearbyNetwork: "同じWi-Fi",
    remotePeer: "遠隔",
    pairCode: "ペアコード",
    roomCode: "ルームコード",
    groupCode: "グループコード",
    hostLabel: "ホスト",
    nearby: "近くの端末",
    connectedLabel: "接続中",
    addMembersLabel: "メンバーを追加",
    addButton: "追加",
    selectedLabel: "選択中",
    close: "閉じる",
    rename: "名前を変更",
    delete: "削除",
    addMore: "さらに追加",
    pairByCodeHint: "コードでペア",
    pairByCodeAdd: "ペアコードで追加",
    dragHereToAdd: "ここにドラッグして追加",
    hostedHere: "IMAPに保存",
    expiryNotice: "メッセージとファイルの保存期限は14日間です",
    today: "今日",
    pairWithOneDevice: "1台と共有",
    createGroupRoom: "グループルームを作成",
    addGroupButton: "グループを追加",
    editGroupButton: "グループを編集",
    copyCode: "コードをコピー",
    refreshCode: "コードを更新",
    deleteGroupConfirm: "グループ\"{name}\"を削除してよろしいですか?",
    noRoomSelected: "ルーム未選択",
    codeLabel: "コード",
    typeMessage: "メッセージを入力...",
    newMessage: "新しいメッセージ",
    imapServer: "IMAPサーバー",
    email: "メールアドレス",
    appPassword: "アプリパスワード",
    pinForDevice: "この端末のPIN",
    deviceNamePrompt: "端末名",
    displayNamePrompt: "この端末での表示名",
    enterPairCode: "ペアコードを入力",
    pairSubmit: "ペアする",
    pairDialogHint: "コードでペア",
    pairOwnCodeError: "自分のペアコードは入力できません。相手の端末に表示されているコードを入力してください。",
    pairCodeNotFound: "そのペアコードの端末が見つかりません。相手もOurDropを開いているか確認してください。",
    unpair: "ペア解除",
    unpairConfirm: "「{name}」とのペアを解除しますか？",
    renameSelfTitle: "端末名を変更",
    renameSave: "保存",
    renameEmptyError: "名前を入力してください",
    fileOpen: "開く",
    fileSave: "保存",
    fileReceived: "受信済み",
    fileSent: "送信済み",
    fileSending: "送信中",
    fileFailed: "送信失敗",
    messageSending: "送信中",
    messageFailed: "送信できませんでした",
    untitledFile: "名称未設定",
    messageCopied: "コピーしました",
    incomingMessage: "{name}: {preview}",
    enableNotifications: "通知を許可",
    notificationsOn: "通知オン",
    notificationsBlocked: "ブラウザの設定で OurDrop の通知を許可してください。",
    notificationsUnsupported: "このブラウザでは通知を使えません。",
    shareMessage: "共有",
    copyMessage: "コピー"
  },
  en: {
    groups: "Groups",
    addGroup: "Add Group",
    addMembers: "Add members",
    pairByCode: "Pair by code",
    pairFromRadar: "Pair from radar",
    directChat: "Direct chat",
    pairOrAdd: "Pair from radar or add a group",
    connected: "Connected",
    offline: "IMAP Offline",
    hostSetup: "Host setup",
    connectOnce: "Connect IMAP once",
    saveUnlock: "Save and unlock",
    groupSettings: "Group settings",
    editGroup: "Edit group",
    groupName: "Group name",
    expiry: "Expiry",
    expiry7Days: "7 days",
    expiry14Days: "14 days",
    expiry30Days: "30 days",
    done: "Done",
    pairByCodeButton: "Pair by code",
    addMembersHelp: "Add members",
    device: "device",
    devices: "devices",
    member: "member",
    members: "members",
    removeGroup: "Delete group",
    noDevices: "No devices online",
    thisDevice: "This device",
    sameDevice: "Same Device",
    nearbyNetwork: "Same Wi-Fi",
    remotePeer: "Remote",
    pairCode: "Pair code",
    roomCode: "Room code",
    groupCode: "Group code",
    hostLabel: "Host",
    nearby: "Nearby",
    connectedLabel: "Connected",
    addMembersLabel: "Add members",
    addButton: "Add",
    selectedLabel: "selected",
    close: "Close",
    rename: "Rename",
    delete: "Delete",
    addMore: "Add more",
    pairByCodeHint: "Pair by code",
    pairByCodeAdd: "Add by pair code",
    dragHereToAdd: "Drag here to add",
    hostedHere: "Stored in IMAP",
    expiryNotice: "Messages and files are kept for 14 days",
    today: "Today",
    pairWithOneDevice: "Share with one device",
    createGroupRoom: "Create a group room",
    addGroupButton: "Add Group",
    editGroupButton: "Edit group",
    copyCode: "Copy code",
    refreshCode: "Refresh code",
    deleteGroupConfirm: "Delete group \"{name}\"?",
    noRoomSelected: "No room selected",
    codeLabel: "Code",
    typeMessage: "Type a message...",
    newMessage: "New message",
    imapServer: "IMAP server",
    email: "Email",
    appPassword: "App password",
    pinForDevice: "PIN for this device",
    deviceNamePrompt: "Device name",
    displayNamePrompt: "Display name on this device",
    enterPairCode: "Enter pair code",
    pairSubmit: "Pair",
    pairDialogHint: "Pair by code",
    pairOwnCodeError: "You cannot use your own pair code. Enter the code shown on the other device.",
    pairCodeNotFound: "No device with that pair code is online. Make sure the other device has OurDrop open.",
    unpair: "Unpair",
    unpairConfirm: "Remove pairing with \"{name}\"?",
    renameSelfTitle: "Rename this device",
    renameSave: "Save",
    renameEmptyError: "Enter a name",
    fileOpen: "Open",
    fileSave: "Save",
    fileReceived: "Received",
    fileSent: "Sent",
    fileSending: "Sending",
    fileFailed: "Failed",
    messageSending: "Sending",
    messageFailed: "Could not send",
    untitledFile: "Untitled file",
    messageCopied: "Copied",
    incomingMessage: "{name}: {preview}",
    enableNotifications: "Enable notifications",
    notificationsOn: "Notifications on",
    notificationsBlocked: "Allow notifications for OurDrop in your browser settings.",
    notificationsUnsupported: "Notifications are not supported in this browser.",
    shareMessage: "Share",
    copyMessage: "Copy"
  },
  zh: {
    groups: "群组",
    addGroup: "新增群组",
    addMembers: "添加成员",
    pairByCode: "代码配对",
    pairFromRadar: "从雷达配对",
    directChat: "一对一聊天",
    pairOrAdd: "从雷达配对或新增群组",
    connected: "已连接",
    offline: "IMAP未连接",
    hostSetup: "主机设置",
    connectOnce: "仅需连接一次 IMAP",
    saveUnlock: "保存并解锁",
    groupSettings: "群组设置",
    editGroup: "编辑群组",
    groupName: "群组名称",
    expiry: "有效期",
    expiry7Days: "7天",
    expiry14Days: "14天",
    expiry30Days: "30天",
    done: "完成",
    pairByCodeButton: "代码配对",
    addMembersHelp: "添加成员",
    device: "台设备",
    devices: "台设备",
    member: "人",
    members: "人",
    removeGroup: "删除群组",
    noDevices: "没有在线设备",
    thisDevice: "本设备",
    sameDevice: "同一设备",
    nearbyNetwork: "同一Wi-Fi",
    remotePeer: "远程",
    pairCode: "配对码",
    roomCode: "房间码",
    groupCode: "群组码",
    hostLabel: "主机",
    nearby: "附近",
    connectedLabel: "已连接",
    addMembersLabel: "添加成员",
    addButton: "添加",
    selectedLabel: "已选择",
    close: "关闭",
    rename: "重命名",
    delete: "删除",
    addMore: "继续添加",
    pairByCodeHint: "代码配对",
    pairByCodeAdd: "通过配对码添加",
    dragHereToAdd: "拖到这里添加",
    hostedHere: "存储在 IMAP 中",
    expiryNotice: "消息和文件的保存期限为14天",
    today: "今天",
    pairWithOneDevice: "与一台设备共享",
    createGroupRoom: "创建群组房间",
    addGroupButton: "新增群组",
    editGroupButton: "编辑群组",
    copyCode: "复制代码",
    refreshCode: "刷新代码",
    deleteGroupConfirm: "确定删除群组“{name}”吗？",
    noRoomSelected: "未选择房间",
    codeLabel: "代码",
    typeMessage: "输入消息...",
    newMessage: "新消息",
    imapServer: "IMAP 服务器",
    email: "邮箱",
    appPassword: "应用密码",
    pinForDevice: "此设备 PIN",
    deviceNamePrompt: "设备名称",
    displayNamePrompt: "此设备上的显示名称",
    enterPairCode: "输入配对码",
    pairSubmit: "配对",
    pairDialogHint: "代码配对",
    pairOwnCodeError: "不能输入自己的配对码。请输入对方设备上显示的代码。",
    pairCodeNotFound: "找不到该配对码的设备。请确认对方也打开了 OurDrop。",
    unpair: "解除配对",
    unpairConfirm: "确定解除与“{name}”的配对吗？",
    renameSelfTitle: "更改设备名称",
    renameSave: "保存",
    renameEmptyError: "请输入名称",
    fileOpen: "打开",
    fileSave: "保存",
    fileReceived: "已接收",
    fileSent: "已发送",
    fileSending: "发送中",
    fileFailed: "发送失败",
    messageSending: "发送中",
    messageFailed: "无法发送",
    untitledFile: "未命名文件",
    messageCopied: "已复制",
    incomingMessage: "{name}：{preview}",
    enableNotifications: "允许通知",
    notificationsOn: "通知已开启",
    notificationsBlocked: "请在浏览器设置中允许 OurDrop 的通知。",
    notificationsUnsupported: "此浏览器不支持通知。",
    shareMessage: "分享",
    copyMessage: "复制"
  }
};
const languageOrder = ["ja", "en", "zh"];
const EDIT_ICON_HTML = '<span class="edit-icon" aria-hidden="true"></span>';
const DELETE_ICON_HTML = '<span class="delete-icon" aria-hidden="true"></span>';

function randomId() {
  if (typeof crypto?.randomUUID === "function") {
    return crypto.randomUUID();
  }
  if (typeof crypto?.getRandomValues === "function") {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const rand = Math.floor(Math.random() * 16);
    const value = char === "x" ? rand : (rand & 0x3) | 0x8;
    return value.toString(16);
  });
}

const instanceId = randomId();
const tabChannel = "BroadcastChannel" in window ? new BroadcastChannel("ourdrop-tabs") : null;
const usesPhpBackend = /(^|\.)ourdrop\.tomippe\.jp$/i.test(location.hostname);
/** 起動時の IMAP 接続ダイアログ。false で非表示（true に戻せば復活） */
const IMAP_LOGIN_PROMPT_ENABLED = false;
const appStorageKey = "ourdrop-app-state";
const SELF_STORAGE_KEY = "ourdrop-self";
const peerCacheKey = "ourdrop-paired-peers";
const contactInboxKey = "ourdrop-contact-inbox";
const PEER_HEARD_ONLINE_MS = 5 * 60 * 1000;
const STRANGER_OFFLINE_HIDE_MS = 30_000;
const LOCAL_MESSAGE_LIMIT = 80;
const LOCAL_MESSAGE_LIMIT_STEPS = [80, 40, 20, 10, 5, 0];
const customAliasKey = "ourdrop-custom-aliases";
const seenMessageIds = new Set();
let duplicateTabDetected = false;
let releaseIdentityLock = null;
const persistedApp = loadAppState();
let pollCursor = Number(persistedApp.pollCursor || 0);
let pollTimer = null;
let pollInFlight = false;
let eventSource = null;
let sseConnected = false;
let sseReconnectTimer = null;
let lastPresenceSignature = "";
let presenceHasSynced = false;
let pairPlusSyncCount = null;
let currentLanguage = loadLanguage();
const offlineSince = new Map();
const strangerHideTimers = new Map();

const self = loadSelf();
const aliases = loadAliases();
const customAliasIds = loadCustomAliasIds();
for (const id of Object.keys(aliases)) {
  customAliasIds.add(id);
}
const clients = new Map();
const roomMessages = new Map((persistedApp.rooms || []).filter(Array.isArray).map(([roomId, messages]) => [roomId, Array.isArray(messages) ? messages : []]));
const unreadRooms = new Map((persistedApp.unreadRooms || []).filter(Array.isArray).map(([roomId, count]) => [roomId, Number(count) || 0]));
const readReceipts = new Map((persistedApp.readReceipts || []).filter(Array.isArray).map(([roomId, messageId]) => [roomId, String(messageId || "")]));
const groups = loadGroups(persistedApp.groups || []);
const state = {
  activeMode: persistedApp.active?.activeMode || "idle",
  activeRoom: persistedApp.active?.activeRoom || "No room selected",
  roomId: persistedApp.active?.roomId || "",
  activeMembers: Array.isArray(persistedApp.active?.activeMembers) && persistedApp.active.activeMembers.length ? persistedApp.active.activeMembers : [self.id],
  messages: [],
  chatOpen: false,
  connected: false
};
state.messages = state.roomId ? messagesForRoom(state.roomId) : [];
if (state.activeMode === "group" && currentGroup()) {
  state.activeMembers = groupMembers();
}
initReadStateFromStorage();

const els = {
  groupList: document.querySelector("#groupList"),
  builderList: document.querySelector("#builderList"),
  radar: document.querySelector("#radar"),
  builderChips: document.querySelector("#builderChips"),
  builderCount: document.querySelector("#builderCount"),
  builderSelectedLabel: document.querySelector("#builderSelectedLabel"),
  topMemberCount: document.querySelector("#topMemberCount"),
  roomMemberLabel: document.querySelector("#roomMemberLabel"),
  appShell: document.querySelector(".app-shell"),
  messageLog: document.querySelector("#messageLog"),
  chatScroll: document.querySelector(".chat-scroll"),
  composer: document.querySelector("#composer"),
  messageInput: document.querySelector("#messageInput"),
  fileInput: document.querySelector("#fileInput"),
  attachButton: document.querySelector("#attachButton"),
  loginDialog: document.querySelector("#loginDialog"),
  loginForm: document.querySelector("#loginForm"),
  hostButton: document.querySelector("#hostButton"),
  pinButton: document.querySelector("#pinButton"),
  hostStatus: document.querySelector("#hostStatus"),
  selfName: document.querySelector("#selfName"),
  hostNodeName: document.querySelector("#hostNodeName"),
  hostNodeInfo: document.querySelector("#hostNodeInfo"),
  hostNodeLabel: document.querySelector("#hostNodeLabel"),
  hostNodeIcon: document.querySelector("#hostNodeIcon"),
  hostNode: document.querySelector("#hostNode"),
  pairByCodeNode: document.querySelector("#pairByCodeNode"),
  pairDialog: document.querySelector("#pairDialog"),
  pairForm: document.querySelector("#pairForm"),
  pairCodeInput: document.querySelector("#pairCodeInput"),
  pairDialogError: document.querySelector("#pairDialogError"),
  closePair: document.querySelector("#closePair"),
  submitPair: document.querySelector("#submitPair"),
  renameDialog: document.querySelector("#renameDialog"),
  renameForm: document.querySelector("#renameForm"),
  renameDialogHint: document.querySelector("#renameDialogHint"),
  renameDialogTitle: document.querySelector("#renameDialogTitle"),
  renameDialogError: document.querySelector("#renameDialogError"),
  renameInput: document.querySelector("#renameInput"),
  renameInputLabel: document.querySelector("#renameInputLabel"),
  closeRename: document.querySelector("#closeRename"),
  submitRename: document.querySelector("#submitRename"),
  renameChatTarget: document.querySelector("#renameChatTarget"),
  unpairChatTarget: document.querySelector("#unpairChatTarget"),
  editGroupChatTarget: document.querySelector("#editGroupChatTarget"),
  groupDialog: document.querySelector("#groupDialog"),
  closeGroup: document.querySelector("#closeGroup"),
  confirmGroup: document.querySelector("#confirmGroup"),
  activeRoomTitle: document.querySelector("#activeRoomTitle"),
  expiryValue: document.querySelector("#expiryValue"),
  regeneratePairCode: document.querySelector("#regeneratePairCode"),
  enableNotifications: document.querySelector("#enableNotifications"),
  roomCode: document.querySelector("#roomCode"),
  addGroup: document.querySelector("#addGroup"),
  groupNameInput: document.querySelector("#groupNameInput"),
  expirySelect: document.querySelector("#expirySelect"),
  pairFromList: document.querySelector("#pairFromList"),
  closeChat: document.querySelector("#closeChat")
};

function readSelfStorage() {
  try {
    const fromLocal = JSON.parse(localStorage.getItem(SELF_STORAGE_KEY) || "null");
    if (fromLocal?.id) return fromLocal;
  } catch {
    // ignore invalid local storage
  }

  try {
    const fromSession = JSON.parse(sessionStorage.getItem(SELF_STORAGE_KEY) || "null");
    if (fromSession?.id) {
      localStorage.setItem(SELF_STORAGE_KEY, JSON.stringify(fromSession));
      sessionStorage.removeItem(SELF_STORAGE_KEY);
      return fromSession;
    }
  } catch {
    // ignore invalid session storage
  }

  return null;
}

function loadSelf() {
  const saved = readSelfStorage();
  if (saved?.id) {
    saved.type = normalizePlatform();
    saved.app = detectApp();
    saved.tone = HOST_TONE;
    if (!saved.name || ["This Mac", "Windows PC", "Browser", "Phone", "iPhone", "iPad", "Android"].includes(saved.name)) {
      saved.name = randomNickname();
    }
    localStorage.setItem(SELF_STORAGE_KEY, JSON.stringify(saved));
    return saved;
  }

  const generated = freshSelfIdentity();
  localStorage.setItem(SELF_STORAGE_KEY, JSON.stringify(generated));
  return generated;
}

function freshSelfIdentity(previousName = "") {
  const isPhone = /iPhone|Android|Mobile/i.test(navigator.userAgent);
  const id = randomId();
  let name = randomNickname();
  for (let attempt = 0; attempt < 8 && name === previousName; attempt += 1) {
    name = randomNickname();
  }
  return {
    id,
    name,
    type: normalizePlatform(),
    app: detectApp(),
    form: isPhone ? "phone" : "laptop",
    tone: toneForPeerId(id),
    pairCode: ""
  };
}

function toneForId(id, reserved = []) {
  const source = String(id || "");
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 31 + source.charCodeAt(index)) >>> 0;
  }
  const pool = reserved.length ? tones.filter((tone) => !reserved.includes(tone)) : tones;
  if (!pool.length) return tones[hash % tones.length];
  return pool[hash % pool.length];
}

function toneForPeerId(id) {
  return toneForId(id, [HOST_TONE]);
}

function clientTone(client) {
  return toneForPeerId(client?.id || "");
}

function setupTabIdentityChannel() {
  if (!tabChannel) return;
  tabChannel.addEventListener("message", (event) => {
    const message = event.data || {};
    if (message.instanceId === instanceId) return;

    if (message.type === "probe" && message.clientId === self.id) {
      tabChannel.postMessage({
        type: "claim",
        clientId: self.id,
        instanceId
      });
      return;
    }

    if (message.type === "claim" && message.clientId === self.id) {
      duplicateTabDetected = true;
    }
  });
}

async function splitDuplicateTabIfNeeded() {
  const duplicate = await hasLiveDuplicateTab();
  if (!duplicate) return;

  const nextSelf = freshSelfIdentity(self.name);
  Object.assign(self, nextSelf);
  saveSelf();
  clients.clear();
  roomMessages.clear();
  unreadRooms.clear();
  seenMessageIds.clear();
  readReceipts.clear();
  state.activeMode = "idle";
  state.activeRoom = "No room selected";
  state.roomId = "";
  state.activeMembers = [self.id];
  state.messages = [];
  state.chatOpen = false;
  renderSelf();
  renderPresence();
  renderMessages();
  renderRoomMeta();
  persistAppState();
  await holdIdentityLock(self.id);
}

async function hasLiveDuplicateTab() {
  const lockAcquired = await holdIdentityLock(self.id);
  if (lockAcquired !== null) return !lockAcquired;
  if (!tabChannel) return false;

  duplicateTabDetected = false;
  tabChannel.postMessage({
    type: "probe",
    clientId: self.id,
    instanceId
  });
  await new Promise((resolve) => window.setTimeout(resolve, 180));
  return duplicateTabDetected;
}

async function holdIdentityLock(clientId) {
  if (!("locks" in navigator)) return null;
  if (releaseIdentityLock) {
    releaseIdentityLock();
    releaseIdentityLock = null;
  }

  try {
    return await new Promise((resolve) => {
      navigator.locks.request(`ourdrop-client:${clientId}`, { ifAvailable: true, mode: "exclusive" }, async (lock) => {
        if (!lock) {
          resolve(false);
          return;
        }
        resolve(true);
        await new Promise((release) => {
          releaseIdentityLock = release;
        });
      });
    });
  } catch (error) {
    console.warn(error);
    return null;
  }
}

function randomNickname() {
  const adjectives = [
    "Amber", "Brave", "Calm", "Clever", "Cozy", "Dapper", "Electric", "Gentle",
    "Happy", "Lucky", "Mellow", "Neon", "Nimble", "Quiet", "Rapid", "Silver",
    "Sunny", "Tiny", "Velvet", "Witty"
  ];
  const nouns = [
    "Anchor", "Beacon", "Comet", "Drift", "Echo", "Harbor", "Lantern", "Maple",
    "Orbit", "Pebble", "Pixel", "Rocket", "Signal", "Sprout", "Stone", "Summit",
    "Thread", "Wave", "Widget", "Zip"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
}

function normalizePlatform(platform = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || "Web") {
  if (/iPhone/i.test(navigator.userAgent)) return "iPhone";
  if (/iPad/i.test(navigator.userAgent)) return "iPad";
  if (/Android/i.test(navigator.userAgent)) return "Android";
  if (/Mac/i.test(platform)) return "Mac";
  if (/Win/i.test(platform)) return "Windows";
  if (/Linux/i.test(platform)) return "Linux";
  return "Web";
}

function detectApp() {
  const ua = navigator.userAgent;
  if (/Brave/i.test(ua)) return "Brave";
  if (/Edg\//i.test(ua)) return "Edge";
  if (/OPR\//i.test(ua)) return "Opera";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/CriOS\//i.test(ua)) return "Chrome";
  if (/Chrome\//i.test(ua) || /Chromium\//i.test(ua)) return "Chrome";
  if (/Safari\//i.test(ua)) return "Safari";
  if (/FBAN|FBAV|Instagram|Line\//i.test(ua) || /\bwv\b|WebView/i.test(ua)) return "In-app Browser";
  return "Browser";
}

function clientArray() {
  return [...clients.values()].sort((a, b) => a.joinedAt - b.joinedAt);
}

function clientById(id) {
  if (id === self.id) return self;
  return clients.get(id);
}

function loadAliases() {
  try {
    const saved = JSON.parse(localStorage.getItem("ourdrop-aliases") || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function loadCustomAliasIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(customAliasKey) || "[]");
    return new Set(Array.isArray(saved) ? saved.filter(Boolean) : []);
  } catch {
    return new Set();
  }
}

function saveCustomAliasIds() {
  localStorage.setItem(customAliasKey, JSON.stringify([...customAliasIds]));
}

function hasCustomAlias(clientId) {
  return customAliasIds.has(clientId) && Boolean(aliases[clientId]);
}

function loadAppState() {
  try {
    const saved = JSON.parse(localStorage.getItem(appStorageKey) || "null");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function loadGroups(savedGroups = []) {
  if (!Array.isArray(savedGroups)) return [];
  return savedGroups
    .map((group) => {
      if (!group || typeof group !== "object") return null;
      const id = String(group.id || `group:${randomId()}`);
      const messages = roomMessages.get(id) || [];
      roomMessages.set(id, messages);
      return {
        id,
        code: String(group.code || randomCode()),
        name: String(group.name || `Group ${group.code || randomCode()}`),
        expiry: String(group.expiry || "14 days"),
        ownerId: String(group.ownerId || ""),
        memberIds: new Set(Array.isArray(group.memberIds) ? group.memberIds : []),
        messages,
        createdAt: Number(group.createdAt || Date.now()),
        _serverVersion: Number(group.version || group.updatedAt || 0)
      };
    })
    .filter(Boolean);
}

function cloneMessageForStorage(message) {
  if (!message || typeof message !== "object") return message;
  const stored = { ...message };
  if (stored.file && typeof stored.file === "object") {
    stored.file = { ...stored.file };
    if (stored.file.dataUrl) {
      delete stored.file.dataUrl;
      stored.file.dataStoredLocally = false;
    }
  }
  return stored;
}

function storedRoomEntries(messageLimit = LOCAL_MESSAGE_LIMIT) {
  return [...roomMessages.entries()].map(([roomId, messages]) => [
    roomId,
    (Array.isArray(messages) ? messages : []).slice(-messageLimit).map(cloneMessageForStorage)
  ]);
}

function appStatePayload({ includeRooms = true, messageLimit = LOCAL_MESSAGE_LIMIT } = {}) {
  return {
    active: {
      activeMode: state.activeMode,
      activeRoom: state.activeRoom,
      roomId: state.roomId,
      activeMembers: state.activeMembers
    },
    groups: groups.map((group) => ({
      id: group.id,
      code: group.code,
      name: group.name,
      expiry: group.expiry,
      ownerId: group.ownerId || "",
      memberIds: [...group.memberIds],
      createdAt: group.createdAt
    })),
    rooms: includeRooms ? storedRoomEntries(messageLimit) : [],
    unreadRooms: [...unreadRooms.entries()],
    readReceipts: [...readReceipts.entries()],
    pollCursor
  };
}

function persistAppState() {
  for (const messageLimit of LOCAL_MESSAGE_LIMIT_STEPS) {
    try {
      localStorage.setItem(appStorageKey, JSON.stringify(appStatePayload({
        includeRooms: messageLimit > 0,
        messageLimit
      })));
      return;
    } catch (error) {
      if (error?.name !== "QuotaExceededError") throw error;
    }
  }

  try {
    localStorage.setItem(appStorageKey, JSON.stringify(appStatePayload({ includeRooms: false })));
  } catch (error) {
    console.warn(error);
  }
}

function loadPeerCache() {
  try {
    const saved = JSON.parse(localStorage.getItem(peerCacheKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function savePeerCache(entries) {
  localStorage.setItem(peerCacheKey, JSON.stringify(entries.slice(-40)));
}

function forgetPeer(clientId) {
  if (!clientId) return;
  savePeerCache(loadPeerCache().filter((entry) => entry.id !== clientId));
}

function loadContactInbox() {
  try {
    const saved = JSON.parse(localStorage.getItem(contactInboxKey) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveContactInbox(inbox) {
  localStorage.setItem(contactInboxKey, JSON.stringify(inbox));
}

function suppressContact(clientId) {
  if (!clientId) return;
  forgetPeer(clientId);
  const inbox = loadContactInbox();
  delete inbox[clientId];
  saveContactInbox(inbox);
}

function recordIncomingContact(message) {
  const senderId = message?.from;
  if (!senderId || senderId === self.id) return null;

  const inbox = loadContactInbox();
  const previous = inbox[senderId] || loadPeerCache().find((entry) => entry.id === senderId);
  const contact = {
    id: senderId,
    name: message.fromName || previous?.name || "Browser",
    type: previous?.type || "",
    app: previous?.app || "",
    form: previous?.form || "laptop",
    tone: previous?.tone || toneForPeerId(senderId),
    rememberedAt: previous?.rememberedAt || previous?.lastHeardAt || Date.now(),
    lastHeardAt: Date.now()
  };
  inbox[senderId] = contact;
  saveContactInbox(inbox);
  rememberPeer(contact, { heard: true });
  return contact;
}

function rememberPeer(client, { heard = false } = {}) {
  if (!client?.id || client.id === self.id) return;
  const previous = loadPeerCache().find((entry) => entry.id === client.id);
  const next = loadPeerCache().filter((entry) => entry.id !== client.id);
  next.push({
    id: client.id,
    name: client.name || previous?.name || "Browser",
    type: client.type || previous?.type || "",
    app: client.app || previous?.app || "",
    form: client.form || previous?.form || "laptop",
    tone: client.tone || previous?.tone || toneForPeerId(client.id),
    rememberedAt: previous?.rememberedAt || Date.now(),
    lastHeardAt: heard ? Date.now() : (previous?.lastHeardAt || 0)
  });
  savePeerCache(next);
}


function clientFromPeerCache(cached) {
  return {
    id: cached.id,
    name: cached.name,
    type: cached.type,
    app: cached.app,
    form: cached.form,
    tone: cached.tone || toneForPeerId(cached.id),
    pairCode: "",
    joinedAt: cached.rememberedAt || 0,
    online: false,
    presence: "offline",
    sameDevice: false,
    sameNetwork: false,
    peered: true,
    messageContact: true
  };
}

function peerRecentlyHeard(clientId) {
  const cached = loadPeerCache().find((entry) => entry.id === clientId);
  return Boolean(cached?.lastHeardAt && Date.now() - cached.lastHeardAt < PEER_HEARD_ONLINE_MS);
}

function ensureSenderVisible(message) {
  const senderId = message?.from;
  if (!senderId || senderId === self.id) return false;

  const contact = recordIncomingContact(message);
  const existing = clients.get(senderId);
  if (existing) {
    clients.set(senderId, {
      ...existing,
      name: contact?.name || message.fromName || existing.name,
      online: false,
      presence: "offline",
      messageContact: true,
      peered: true
    });
    lastPresenceSignature = "";
    refreshClientPositions();
    renderPresence();
    return true;
  }

  const restored = clientFromPeerCache(contact || {
    id: senderId,
    name: message.fromName || "Browser",
    type: "",
    app: "",
    form: "laptop",
    tone: toneForPeerId(senderId),
    rememberedAt: Date.now(),
    lastHeardAt: Date.now()
  });
  const index = clients.size;
  clients.set(senderId, {
    ...restored,
    tone: clientTone(restored),
    presence: "offline",
    messageContact: true,
    peered: true,
    pos: positionFor(index)
  });
  lastPresenceSignature = "";
  refreshClientPositions();
  renderPresence();
  return true;
}

function syncPeerCacheFromServer(client) {
  if (!client?.id || client.id === self.id) return;
  if (!client.peered) {
    if (client.messageContact || peerRecentlyHeard(client.id)) {
      rememberPeer(client, { heard: Boolean(client.messageContact || peerRecentlyHeard(client.id)) });
      return;
    }
    forgetPeer(client.id);
    return;
  }
  const cache = loadPeerCache();
  const index = cache.findIndex((entry) => entry.id === client.id);
  if (index === -1) {
    if (client.peered) rememberPeer(client);
    return;
  }
  cache[index] = {
    ...cache[index],
    name: client.name,
    type: client.type,
    app: client.app,
    form: client.form,
    tone: client.tone || cache[index].tone || toneForPeerId(client.id)
  };
  savePeerCache(cache);
}

function pollSelfProfile() {
  return {
    name: self.name,
    type: self.type,
    app: self.app,
    form: self.form,
    active: isSelfActive()
  };
}

function isSelfActive() {
  return !document.hidden && document.hasFocus();
}

function clientPresenceFromServer(client) {
  if (client.presence === "active" || client.presence === "idle" || client.presence === "offline") {
    return client.presence;
  }
  if (client.online === false) return "offline";
  return client.active === false ? "idle" : "active";
}

function hasInteractionHistory(client) {
  if (client.serverPeered || client.peered || client.messageContact) return true;
  for (const messages of roomMessages.values()) {
    if (messages.some((message) => message.from === client.id || (Array.isArray(message.to) && message.to.includes(client.id)))) {
      return true;
    }
  }
  return false;
}

function shouldHideStranger(client) {
  if (!client.sameNetwork || hasInteractionHistory(client) || client.presence !== "offline") return false;
  const since = offlineSince.get(client.id);
  return Boolean(since && Date.now() - since >= STRANGER_OFFLINE_HIDE_MS);
}

function trackStrangerOffline(client) {
  if (client.presence !== "offline") {
    offlineSince.delete(client.id);
    const timer = strangerHideTimers.get(client.id);
    if (timer) {
      window.clearTimeout(timer);
      strangerHideTimers.delete(client.id);
    }
    return;
  }
  if (offlineSince.has(client.id)) return;
  offlineSince.set(client.id, Date.now());
  if (!client.sameNetwork || hasInteractionHistory(client)) return;
  const timer = window.setTimeout(() => {
    strangerHideTimers.delete(client.id);
    removeHiddenStrangers();
  }, STRANGER_OFFLINE_HIDE_MS);
  strangerHideTimers.set(client.id, timer);
}

function removeHiddenStrangers() {
  let removed = false;
  for (const [id, client] of clients) {
    if (!shouldHideStranger(client)) continue;
    clients.delete(id);
    offlineSince.delete(id);
    strangerHideTimers.delete(id);
    removed = true;
  }
  if (!removed) return;
  lastPresenceSignature = "";
  refreshClientPositions();
  renderPresence();
}

function mergePresenceList(serverList) {
  const merged = new Map(serverList.map((client) => [client.id, client]));
  for (const cached of loadPeerCache()) {
    if (!cached?.id || cached.id === self.id || merged.has(cached.id)) continue;
    merged.set(cached.id, clientFromPeerCache(cached));
  }
  for (const contact of Object.values(loadContactInbox())) {
    if (!contact?.id || contact.id === self.id || merged.has(contact.id)) continue;
    merged.set(contact.id, clientFromPeerCache(contact));
  }
  return [...merged.values()].sort((a, b) => (a.joinedAt || 0) - (b.joinedAt || 0));
}

function loadLanguage() {
  const locale = navigator.languages?.[0] || navigator.language || "en";
  return languageForLocale(locale);
}

function languageForLocale(locale) {
  const normalized = String(locale || "").toLowerCase();
  if (normalized.startsWith("ja")) return "ja";
  if (normalized.startsWith("zh")) return "zh";
  return "en";
}

function setLanguage(lang) {
  if (!uiCopy[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  renderTranslations();
  renderPresence();
}

function t(key) {
  return uiCopy[currentLanguage]?.[key] || uiCopy.en[key] || key;
}

function setActiveRoomTitleText(text) {
  ensureFitTextChild(els.activeRoomTitle, "fit-text chat-room-name-text", text);
}

const EXPIRY_OPTION_KEYS = {
  "7 days": "expiry7Days",
  "14 days": "expiry14Days",
  "30 days": "expiry30Days"
};

function expiryLabel(value) {
  const key = EXPIRY_OPTION_KEYS[value];
  return key ? t(key) : value;
}

function renderExpiryOptions() {
  els.expirySelect?.querySelectorAll("option").forEach((option) => {
    const key = EXPIRY_OPTION_KEYS[option.value];
    if (key) option.textContent = t(key);
  });
}

function renderTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelector(".groups-panel .section-title span")?.replaceChildren(document.createTextNode(t("groups")));
  const addGroupLabel = document.querySelector("#addGroup .add-group-label");
  if (addGroupLabel) addGroupLabel.textContent = t("addGroupButton");
  else document.querySelector("#addGroup")?.replaceChildren(document.createTextNode(t("addGroupButton")));
  const pairNode = document.querySelector("#pairByCodeNode");
  if (pairNode) {
    pairNode.querySelector("small").textContent = t("pairByCodeAdd");
    pairNode.setAttribute("aria-label", t("pairByCodeAdd"));
    pairNode.setAttribute("title", t("pairByCodeAdd"));
  }
  document.querySelector(".login-box h2") && (document.querySelector(".login-box h2").textContent = t("connectOnce"));
  document.querySelector("#saveLogin") && (document.querySelector("#saveLogin").textContent = t("saveUnlock"));
  document.querySelector(".group-dialog .dialog-header h2") && (document.querySelector(".group-dialog .dialog-header h2").textContent = currentGroup() ? t("editGroup") : t("groupSettings"));
  document.querySelector(".member-picker-section .section-title span") && (document.querySelector(".member-picker-section .section-title span").textContent = t("addMembersLabel"));
  if (els.builderSelectedLabel) els.builderSelectedLabel.textContent = t("selectedLabel");
  document.querySelector(".top-code > span") && (document.querySelector(".top-code > span").textContent = t("pairCode"));
  syncNotificationButton();
  document.querySelector(".groups-panel .section-title span")?.setAttribute("title", t("groups"));
  document.querySelector("#closeGroup")?.setAttribute("aria-label", t("close"));
  document.querySelector("#closeLogin")?.setAttribute("aria-label", t("close"));
  document.querySelector("#closePair")?.setAttribute("aria-label", t("close"));
  document.querySelector("#closeChat")?.setAttribute("aria-label", t("close"));
  els.hostNodeLabel && (els.hostNodeLabel.textContent = t("hostLabel"));
  document.querySelector("#confirmGroup") && (document.querySelector("#confirmGroup").textContent = t("done"));
  document.querySelector("#pairFromList") && (document.querySelector("#pairFromList").textContent = t("pairByCodeAdd"));
  document.querySelector(".pair-dialog .dialog-header .muted") && (document.querySelector(".pair-dialog .dialog-header .muted").textContent = t("pairDialogHint"));
  document.querySelector(".pair-dialog .dialog-header h2") && (document.querySelector(".pair-dialog .dialog-header h2").textContent = t("enterPairCode"));
  document.querySelector("#pairCodeInput")?.previousElementSibling && (document.querySelector("#pairCodeInput").previousElementSibling.textContent = t("pairCode"));
  document.querySelector("#submitPair") && (document.querySelector("#submitPair").textContent = t("pairSubmit"));
  document.querySelector("#submitRename") && (document.querySelector("#submitRename").textContent = t("renameSave"));
  document.querySelector("#closeRename")?.setAttribute("aria-label", t("close"));
  els.renameChatTarget?.setAttribute("aria-label", t("rename"));
  els.renameChatTarget?.setAttribute("title", t("rename"));
  if (els.unpairChatTarget) els.unpairChatTarget.innerHTML = DELETE_ICON_HTML;
  els.unpairChatTarget?.setAttribute("aria-label", t("unpair"));
  els.unpairChatTarget?.setAttribute("title", t("unpair"));
  els.editGroupChatTarget?.setAttribute("aria-label", t("editGroupButton"));
  els.editGroupChatTarget?.setAttribute("title", t("editGroupButton"));
  document.querySelector(".room-meta .muted") && (document.querySelector(".room-meta .muted").textContent = t("roomCode"));
  document.querySelector(".host-status-label") && (document.querySelector(".host-status-label").textContent = t("connectedLabel"));
  if (state.activeMode === "idle") setActiveRoomTitleText(t("noRoomSelected"));
  const expiryNotice = document.querySelector(".expiry-notice");
  if (expiryNotice) expiryNotice.textContent = t("expiryNotice");
  const messageInput = document.querySelector("#messageInput");
  if (messageInput) messageInput.placeholder = t("typeMessage");
  document.querySelector(".day-divider span") && (document.querySelector(".day-divider span").textContent = t("today"));
  document.querySelector(".login-box .muted") && (document.querySelector(".login-box .muted").textContent = t("hostSetup"));
  document.querySelector(".login-box h2") && (document.querySelector(".login-box h2").textContent = t("connectOnce"));
  document.querySelector("#imapServer")?.previousElementSibling && (document.querySelector("#imapServer").previousElementSibling.textContent = t("imapServer"));
  document.querySelector("#imapEmail")?.previousElementSibling && (document.querySelector("#imapEmail").previousElementSibling.textContent = t("email"));
  document.querySelector("#imapPassword")?.previousElementSibling && (document.querySelector("#imapPassword").previousElementSibling.textContent = t("appPassword"));
  document.querySelector("#imapPin")?.previousElementSibling && (document.querySelector("#imapPin").previousElementSibling.textContent = t("pinForDevice"));
  document.querySelector(".group-dialog .dialog-header .muted") && (document.querySelector(".group-dialog .dialog-header .muted").textContent = t("groupSettings"));
  document.querySelector(".group-dialog .dialog-header h2") && (document.querySelector(".group-dialog .dialog-header h2").textContent = currentGroup() ? t("editGroup") : t("groupSettings"));
  document.querySelector("#groupNameInput")?.previousElementSibling && (document.querySelector("#groupNameInput").previousElementSibling.textContent = t("groupName"));
  document.querySelector("#expirySelect")?.previousElementSibling && (document.querySelector("#expirySelect").previousElementSibling.textContent = t("expiry"));
  renderExpiryOptions();
  document.querySelector("#saveLogin") && (document.querySelector("#saveLogin").textContent = t("saveUnlock"));
  document.querySelector("#roomMemberLabel") && (document.querySelector("#roomMemberLabel").textContent = t("pairOrAdd"));
  document.querySelectorAll(".group-edit-button").forEach((button) => {
    button.setAttribute("aria-label", t("editGroupButton"));
    button.setAttribute("title", t("editGroupButton"));
  });
  document.querySelectorAll(".group-delete-button").forEach((button) => {
    button.setAttribute("aria-label", t("delete"));
    button.setAttribute("title", t("delete"));
  });
  document.querySelectorAll(".group-picker-button").forEach((button) => {
    button.setAttribute("aria-label", t("addMembersLabel"));
  });
  document.querySelectorAll(".add-button").forEach((button) => {
    button.textContent = t("addButton");
    button.setAttribute("title", t("addButton"));
  });
  document.querySelectorAll(".rename-button").forEach((button) => {
    button.setAttribute("aria-label", t("rename"));
    button.setAttribute("title", t("rename"));
  });
  renderRoomMeta();
  renderMessages();
  setConnectionStatus(state.connected);
}

function saveAliases() {
  localStorage.setItem("ourdrop-aliases", JSON.stringify(aliases));
}

function displayName(client) {
  if (!client) return "";
  if (hasCustomAlias(client.id)) return aliases[client.id];
  return client.name || "Browser";
}

function deviceInfo(client) {
  return [client?.type, client?.app].filter(Boolean).join(" ");
}

function distanceLabel(client) {
  if (!client) return "";
  if (client.sameDevice) return t("sameDevice");
  if (client.sameNetwork) return t("nearbyNetwork");
  if (client.peered || client.messageContact) return t("remotePeer");
  return "";
}

function deviceMeta(client) {
  return [deviceInfo(client), distanceLabel(client)].filter(Boolean).join(" · ");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function randomCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function spacedCode(value) {
  return String(value).split("").join(" ");
}

function currentGroup() {
  return groups.find((group) => group.id === state.roomId) || null;
}

function activeChatClientIds() {
  if (!state.chatOpen || state.activeMode === "idle") return new Set();
  if (state.activeMode === "pair") {
    const peerId = state.activeMembers.find((id) => id !== self.id);
    return peerId ? new Set([peerId]) : new Set();
  }
  if (state.activeMode === "group") {
    const group = currentGroup();
    if (!group) return new Set();
    return new Set(groupParticipantIds(group).filter((id) => id !== self.id && clients.has(id)));
  }
  return new Set();
}

function updateActiveChatHighlights() {
  const activeIds = activeChatClientIds();
  els.radar?.querySelectorAll(".device-node").forEach((node) => {
    node.classList.toggle("chat-active", activeIds.has(node.dataset.deviceId));
  });
}

function messagesForRoom(roomId) {
  if (!roomMessages.has(roomId)) roomMessages.set(roomId, []);
  return roomMessages.get(roomId);
}

function unreadCount(roomId) {
  return unreadRooms.get(roomId) || 0;
}

function seedSeenMessageIdsFromStorage() {
  for (const messages of roomMessages.values()) {
    for (const message of messages) {
      if (message?.id) seenMessageIds.add(message.id);
    }
  }
}

function roomHasMessageId(roomId, messageId) {
  if (!roomId || !messageId) return false;
  return messagesForRoom(roomId).some((message) => message.id === messageId);
}

function inferReadReceiptsFromStorage() {
  for (const [roomId, messages] of roomMessages) {
    if (readReceipts.has(roomId) || unreadRooms.has(roomId) || !messages.length) continue;
    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i];
      if (message.fromId !== self.id && message.id) {
        readReceipts.set(roomId, message.id);
        break;
      }
    }
  }
}

function rebuildUnreadCounts(persistedUnread = new Map()) {
  unreadRooms.clear();
  for (const [roomId, messages] of roomMessages) {
    const lastReadId = readReceipts.get(roomId);
    let count = 0;
    if (lastReadId) {
      let afterRead = false;
      for (const message of messages) {
        if (message.id === lastReadId) {
          afterRead = true;
          continue;
        }
        if (afterRead && message.fromId !== self.id) count += 1;
      }
    } else if (persistedUnread.has(roomId)) {
      count = Number(persistedUnread.get(roomId)) || 0;
    } else {
      count = messages.filter((message) => message.fromId !== self.id).length;
    }
    if (count > 0) unreadRooms.set(roomId, count);
  }
}

function initReadStateFromStorage() {
  seedSeenMessageIdsFromStorage();
  const persistedUnread = new Map(unreadRooms);
  inferReadReceiptsFromStorage();
  rebuildUnreadCounts(persistedUnread);
}

function markRoomRead(roomId) {
  if (!roomId) return;
  unreadRooms.delete(roomId);
  const messages = messagesForRoom(roomId);
  for (let i = messages.length - 1; i >= 0; i--) {
    const message = messages[i];
    if (message.fromId !== self.id && message.id) {
      readReceipts.set(roomId, message.id);
      break;
    }
  }
  persistAppState();
}

function clearUnread(roomId) {
  markRoomRead(roomId);
}

function unreadForClient(clientId) {
  return unreadCount(canonicalRoomId(pairRoomId(self.id, clientId)));
}

function roomLabel(roomId, message = {}) {
  const group = groups.find((item) => item.id === roomId);
  if (group) return group.name;
  if (roomId?.startsWith("pair:")) {
    const peerId = roomId.split(":").find((id) => id && id !== "pair" && id !== self.id);
    return displayName(clientById(peerId)) || message.fromName || t("directChat");
  }
  return message.groupMeta?.name || message.fromName || t("newMessage");
}

function upsertGroupFromServer(remote) {
  if (!remote?.id?.startsWith("group:")) return null;
  const remoteVersion = Number(remote.version || remote.updatedAt || 0);
  let local = groups.find((item) => item.id === remote.id);
  if (!local) {
    local = {
      id: remote.id,
      code: String(remote.code || randomCode()),
      name: String(remote.name || `Group ${remote.code || ""}`),
      expiry: String(remote.expiry || "14 days"),
      ownerId: String(remote.ownerId || ""),
      memberIds: new Set(Array.isArray(remote.memberIds) ? remote.memberIds : []),
      messages: messagesForRoom(remote.id),
      createdAt: Number(remote.createdAt || Date.now()),
      _serverVersion: remoteVersion
    };
    groups.push(local);
    return local;
  }
  if (remoteVersion >= (local._serverVersion || 0)) {
    local.name = String(remote.name || local.name);
    local.code = String(remote.code || local.code);
    local.expiry = String(remote.expiry || local.expiry);
    local.ownerId = String(remote.ownerId || local.ownerId);
    local.memberIds = new Set(Array.isArray(remote.memberIds) ? remote.memberIds : []);
    local._serverVersion = remoteVersion;
  }
  return local;
}

function mergeGroupsFromServer(serverGroups) {
  if (!Array.isArray(serverGroups)) return;
  const remoteIds = new Set(serverGroups.map((group) => group.id));
  let changed = false;

  serverGroups.forEach((remote) => {
    const before = JSON.stringify(groups.find((item) => item.id === remote.id) || null);
    upsertGroupFromServer(remote);
    const after = JSON.stringify(groups.find((item) => item.id === remote.id) || null);
    if (before !== after) changed = true;
  });

  for (let index = groups.length - 1; index >= 0; index -= 1) {
    const local = groups[index];
    if ((local._serverVersion || 0) > 0 && !remoteIds.has(local.id)) {
      groups.splice(index, 1);
      changed = true;
    }
  }

  if (changed) {
    renderGroupList();
    renderPresence();
    persistAppState();
  }
}

function groupPayload(group) {
  return {
    id: group.id,
    name: group.name,
    code: group.code,
    expiry: group.expiry,
    ownerId: group.ownerId || self.id,
    memberIds: [...group.memberIds],
    createdAt: group.createdAt,
    version: group._serverVersion || 0
  };
}

async function syncOwnedGroupsToServer() {
  if (!self.id) return;
  for (const group of groups) {
    const ownerId = group.ownerId || self.id;
    if (ownerId !== self.id) continue;
    group.ownerId = self.id;
    await syncGroupToServer(group);
  }
}

async function syncGroupToServer(group) {
  if (!self.id || !group?.id) return;
  try {
    const result = await api("/api/group-sync", { from: self.id, group: groupPayload(group) });
    if (result.group) {
      upsertGroupFromServer(result.group);
      persistAppState();
    }
  } catch (error) {
    console.error(error);
  }
}

async function syncGroupDelete(groupId) {
  if (!self.id || !groupId) return;
  try {
    await api("/api/group-delete", { from: self.id, groupId });
  } catch (error) {
    console.error(error);
  }
}

function applyGroupMetaFromMessage(message) {
  const meta = message.groupMeta;
  if (!meta?.id?.startsWith("group:")) return null;
  const local = groups.find((item) => item.id === meta.id);
  if (!local) {
    const created = upsertGroupFromServer(meta);
    renderGroupList();
    persistAppState();
    return created;
  }
  local.name = String(meta.name || local.name);
  local.code = String(meta.code || local.code);
  local.expiry = String(meta.expiry || local.expiry);
  local.ownerId = String(meta.ownerId || local.ownerId);
  (meta.memberIds || []).forEach((id) => local.memberIds.add(id));
  renderGroupList();
  persistAppState();
  return local;
}

function ensureGroupRoom(roomId, message = {}) {
  if (!roomId?.startsWith("group:")) return null;
  applyGroupMetaFromMessage(message);
  let group = groups.find((item) => item.id === roomId);
  if (group) return group;
  group = {
    id: roomId,
    code: String(message.groupMeta?.code || randomCode()),
    name: String(message.groupMeta?.name || t("groups")),
    expiry: String(message.groupMeta?.expiry || "14 days"),
    ownerId: String(message.groupMeta?.ownerId || message.from || ""),
    memberIds: new Set([message.from, ...(message.to || [])].filter((id) => id && id !== self.id)),
    messages: messagesForRoom(roomId),
    createdAt: Number(message.groupMeta?.createdAt || Date.now()),
    _serverVersion: 0
  };
  groups.push(group);
  renderGroupList();
  persistAppState();
  return group;
}

function openRoomById(roomId, message = {}) {
  if (roomId?.startsWith("group:")) {
    const group = ensureGroupRoom(roomId, message);
    if (group) {
      openGroup(group.id);
      return;
    }
  }

  const group = groups.find((item) => item.id === roomId);
  if (group) {
    openGroup(group.id);
    return;
  }

  if (roomId?.startsWith("pair:")) {
    const peerId = roomId.split(":").find((id) => id && id !== "pair" && id !== self.id) || message.from;
    if (peerId && !clients.has(peerId) && message.from === peerId) ensureSenderVisible(message);
    if (peerId && clients.has(peerId)) openPair(peerId);
  }
}

const radarBubbles = new Map();

function messagePreview(message) {
  return message.file ? message.file.name : message.text || t("newMessage");
}

function clearBubblesForRoom(roomId) {
  for (const [senderId, entry] of radarBubbles) {
    if (entry.roomId === roomId) radarBubbles.delete(senderId);
  }
  applyNodeBubbles();
}

function clearBubbleForSender(senderId) {
  if (!senderId || !radarBubbles.delete(senderId)) return;
  applyNodeBubbles();
}

function showNodeMessageBubble(roomId, message) {
  const senderId = message.from;
  if (!senderId || senderId === self.id) return;
  radarBubbles.set(senderId, {
    roomId,
    preview: messagePreview(message),
    message
  });
  applyNodeBubbles();
}

function syncRadarRenameButtonPositions(root = els.radar) {
  if (!root || typeof root.querySelectorAll !== "function") root = els.radar;
  if (!root || isMobileLayout()) return;
  root.querySelectorAll(".device-node .node-name-line").forEach((line) => {
    const name = line.querySelector("strong");
    if (!name) return;
    const width = Math.ceil(fitVisualWidth(name.querySelector(".node-name-text") || name));
    line.style.setProperty("--name-text-width", `${width}px`);
  });
}

function queueRadarRenameButtonLayout() {
  if (isMobileLayout()) return;
  window.requestAnimationFrame(() => {
    syncRadarRenameButtonPositions();
    window.requestAnimationFrame(() => syncRadarRenameButtonPositions());
  });
}

function ensureFitTextChild(container, className, text) {
  if (!container) return null;
  let label = container.querySelector(`.${className.split(" ").join(".")}`);
  if (!label) {
    container.textContent = "";
    label = document.createElement("span");
    label.className = className;
    container.appendChild(label);
  }
  label.textContent = text;
  container.setAttribute("title", text);
  return label;
}

function measureNaturalWidth(element) {
  const style = window.getComputedStyle(element);
  const probe = document.createElement("span");
  probe.textContent = element.textContent || "";
  probe.style.cssText = [
    "position:absolute",
    "visibility:hidden",
    "pointer-events:none",
    "white-space:nowrap",
    `font:${style.font}`,
    `letter-spacing:${style.letterSpacing}`,
    `text-transform:${style.textTransform}`
  ].join(";");
  document.body.appendChild(probe);
  const width = probe.getBoundingClientRect().width;
  probe.remove();
  return width;
}

function getFitSlot(element) {
  if (element.classList.contains("chat-room-name-text")) {
    const slot = element.closest("h1");
    return { slot, available: slot?.clientWidth || 0, align: "left" };
  }
  if (element.classList.contains("group-name-text")) {
    const slot = element.closest("strong");
    return { slot, available: slot?.clientWidth || 0, align: "left" };
  }
  const slot = element.closest("strong") || element;
  const align = slot.closest(".host-node, .device-node") ? "center" : "left";
  return { slot, available: slot?.clientWidth || 0, align };
}

function fitVisualWidth(element) {
  if (!element) return 0;
  const shell = element.closest(".fit-text-shell");
  if (shell) return shell.getBoundingClientRect().width;
  if (!element.classList.contains("fit-text-scaled")) {
    return element.getBoundingClientRect().width;
  }
  const natural = parseFloat(element.style.width) || element.getBoundingClientRect().width;
  const scale = parseFloat(window.getComputedStyle(element).getPropertyValue("--fit-scale")) || 1;
  return natural * scale;
}

function resetFittedText(element) {
  if (!element) return;
  element.style.removeProperty("--fit-scale");
  element.style.removeProperty("width");
  element.style.removeProperty("margin-left");
  element.classList.remove("fit-text-scaled", "fit-text-ellipsis");
  const shell = element.parentElement;
  if (shell?.classList.contains("fit-text-shell")) {
    shell.replaceWith(element);
  }
}

function ensureFitShell(element, visualWidth) {
  if (element.parentElement?.classList.contains("fit-text-shell")) {
    element.parentElement.style.width = `${visualWidth}px`;
    return element.parentElement;
  }
  const shell = document.createElement("span");
  shell.className = "fit-text-shell";
  shell.style.width = `${visualWidth}px`;
  element.parentElement?.insertBefore(shell, element);
  shell.appendChild(element);
  return shell;
}

function fitSingleLineText(element, { minScale = 0.6 } = {}) {
  if (!element) return;
  const text = element.textContent || "";
  if (text) element.setAttribute("title", text);
  resetFittedText(element);

  const { available, align } = getFitSlot(element);
  if (!available) return;

  const natural = measureNaturalWidth(element);
  if (natural <= available + 0.5) return;

  const scale = Math.max(minScale, Math.min(1, available / natural));
  const visualWidth = natural * scale;

  if (align === "center") ensureFitShell(element, visualWidth);

  element.style.width = `${natural}px`;
  element.style.setProperty("--fit-scale", scale.toFixed(4));
  element.classList.add("fit-text-scaled");
  if (scale <= minScale + 0.0001 && natural * minScale > available + 0.5) {
    element.classList.add("fit-text-ellipsis");
  }
}

function fitVisibleNames(root = document) {
  root.querySelectorAll(".node-name-text, .group-name-text, .chat-room-name-text").forEach((element) => {
    fitSingleLineText(element);
  });
}

function queueFitVisibleNames(root = document) {
  window.requestAnimationFrame(() => {
    fitVisibleNames(root);
    window.requestAnimationFrame(() => {
      fitVisibleNames(root);
      queueRadarRenameButtonLayout();
    });
  });
}

function bindDeviceNodeInteraction(node, clientId) {
  if (node.dataset.boundOpen === "true") return;
  node.dataset.boundOpen = "true";

  const skipTarget = (target) => target.closest(".node-message-bubble, .radar-rename-button, .radar-unpair-button");

  node.addEventListener("click", (event) => {
    if (skipTarget(event.target)) {
      if (event.target.closest(".radar-rename-button")) renameClient(clientId);
      if (event.target.closest(".radar-unpair-button")) unpairClient(clientId);
      return;
    }
    if (event.pointerType === "touch") return;
    openPair(clientId);
  });

  node.addEventListener("pointerup", (event) => {
    if (event.pointerType !== "touch" || event.button !== 0) return;
    if (skipTarget(event.target)) return;
    event.preventDefault();
    openPair(clientId);
  });

  node.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (skipTarget(event.target)) return;
    event.preventDefault();
    openPair(clientId);
  });
}

function applyNodeBubbles() {
  els.radar.querySelectorAll(".device-node").forEach((node) => {
    const senderId = node.dataset.deviceId;
    node.querySelector(".node-message-bubble")?.remove();
    const entry = radarBubbles.get(senderId);
    if (!entry) return;

    const bubble = document.createElement("button");
    bubble.type = "button";
    bubble.className = "node-message-bubble";
    bubble.setAttribute("aria-label", entry.preview);
    bubble.innerHTML = `<span class="node-message-preview">${escapeHtml(entry.preview)}</span>`;
    bubble.addEventListener("click", (event) => {
      event.stopPropagation();
      clearBubbleForSender(senderId);
      openRoomById(entry.roomId, entry.message);
    });
    node.appendChild(bubble);
  });
}

function notifyIncomingMessage(message) {
  if (message.from === self.id) return;
  const roomId = canonicalRoomId(message.roomId);

  if (!document.hidden && (!state.chatOpen || state.activeMode === "idle")) {
    openRoomById(roomId, message);
    return;
  }

  unreadRooms.set(roomId, unreadCount(roomId) + 1);
  showNodeMessageBubble(roomId, message);
  renderPresence();
  persistAppState();
  showBrowserNotification(message, roomId);
}

function closeChat() {
  if (!state.chatOpen) return;
  state.chatOpen = false;
  renderShellState();
  persistAppState();
}

function renderGroupSettings() {
  const group = currentGroup();
  if (els.groupNameInput) els.groupNameInput.value = group?.name || "";
  if (els.expirySelect) els.expirySelect.value = group?.expiry || "14 days";
  renderDeviceLists();
  renderGroupSelection();
}

function deleteGroup(groupId = state.roomId) {
  const index = groups.findIndex((item) => item.id === groupId);
  if (index < 0) return;
  const group = groups[index];
  const message = t("deleteGroupConfirm").replace("{name}", group.name);
  if (!window.confirm(message)) return;
  groups.splice(index, 1);
  roomMessages.delete(groupId);
  unreadRooms.delete(groupId);
  void syncGroupDelete(groupId);
  if (state.roomId === groupId) {
    state.activeMode = "idle";
    state.activeRoom = "No room selected";
    state.roomId = "";
    state.activeMembers = [self.id];
    state.messages = [];
    state.chatOpen = false;
  }
  renderPresence();
  renderRoomMeta();
  renderMessages();
  persistAppState();
}

function setGroupSettings(group = currentGroup()) {
  if (!group) return false;
  const nextName = (els.groupNameInput?.value || "").trim().slice(0, 32);
  if (!nextName) return false;
  group.name = nextName;
  group.expiry = els.expirySelect?.value || "14 days";
  state.activeRoom = group.name;
  renderGroupSettings();
  renderGroupList();
  renderRoomMeta();
  persistAppState();
  void syncGroupToServer(group);
  return true;
}

function openGroupSettings(groupId = state.roomId) {
  const group = groups.find((item) => item.id === groupId);
  if (!group) return;
  openGroup(group.id);
  els.groupDialog.showModal();
}

function createNewGroup({ openPicker = false, select = false } = {}) {
  const code = randomCode();
  const id = `group:${randomId()}`;
  const group = {
    id,
    code,
    name: `Group ${code}`,
    expiry: "14 days",
    ownerId: self.id || "",
    memberIds: new Set(),
    messages: messagesForRoom(id),
    createdAt: Date.now(),
    _serverVersion: 0
  };
  groups.push(group);
  renderPresence();
  persistAppState();
  void syncGroupToServer(group);
  if (select || openPicker) openGroup(group.id);
  if (openPicker) els.groupDialog.showModal();
  return group;
}

function regenerateGroupCode(groupId) {
  const group = groups.find((item) => item.id === groupId);
  if (!group) return;
  let nextCode = randomCode();
  for (let attempt = 0; attempt < 10 && groups.some((item) => item.id !== groupId && item.code === nextCode); attempt += 1) {
    nextCode = randomCode();
  }
  group.code = nextCode;
  if (state.roomId === group.id) state.activeRoom = group.name;
  renderGroupList();
  renderRoomMeta();
  persistAppState();
  void syncGroupToServer(group);
}

function openGroup(groupId) {
  const group = groups.find((item) => item.id === groupId);
  if (!group) return;
  state.activeMode = "group";
  state.activeRoom = group.name;
  state.roomId = group.id;
  state.activeMembers = groupMembers(group);
  state.messages = messagesForRoom(group.id);
  group.messages = state.messages;
  state.chatOpen = true;
  clearUnread(group.id);
  clearBubblesForRoom(group.id);
  renderGroupSettings();
  renderGroupList();
  renderRoomMeta();
  renderMessages();
  loadRoomHistory();
  persistAppState();
}

function groupParticipantIds(group) {
  if (!group) return [];
  const ids = new Set(group.memberIds);
  if (group.ownerId) ids.add(group.ownerId);
  return [...ids];
}

function groupDisplayMembers(group) {
  return groupParticipantIds(group).map(clientById).filter(Boolean);
}

function orderedGroupDisplayMembers(group) {
  if (!group) return [];
  const seen = new Set();
  const ordered = [];
  const addClient = (client) => {
    if (!client || seen.has(client.id)) return;
    seen.add(client.id);
    ordered.push(client);
  };
  addClient(clientById(self.id));
  if (group.ownerId) addClient(clientById(group.ownerId));
  groupDisplayMembers(group).forEach(addClient);
  return ordered;
}

function canRemoveGroupMember(client, group) {
  if (!canManageGroupMembers(group)) return false;
  if (!group.memberIds.has(client.id)) return false;
  if (group.ownerId && group.ownerId === client.id) return false;
  if (client.id === self.id) return false;
  return true;
}

function groupMembers(group = currentGroup()) {
  if (!group) return [self.id];
  return [self.id, ...groupParticipantIds(group).filter((id) => id !== self.id && clients.has(id))];
}

function groupMessageRecipients(group = currentGroup()) {
  if (!group) return state.activeMembers.filter((id) => id !== self.id);
  return groupParticipantIds(group).filter((id) => id !== self.id);
}

function isGroupMember(clientId, group = currentGroup()) {
  if (!group) return false;
  if (group.ownerId && group.ownerId === clientId) return true;
  return group.memberIds.has(clientId);
}

function canManageGroupMembers(group) {
  return Boolean(group && (group.ownerId || self.id) === self.id);
}

function setConnectionStatus(connected) {
  state.connected = connected;
  els.hostStatus.textContent = connected ? t("connected") : t("offline");
  document.querySelector(".dot-online")?.classList.toggle("is-offline", !connected);
}

function renderShellState() {
  els.appShell.classList.toggle("has-active-room", state.activeMode !== "idle");
  els.appShell.classList.toggle("chat-open", state.chatOpen);
  els.appShell.classList.toggle("chat-mode-pair", state.activeMode === "pair" && state.chatOpen);
  els.appShell.classList.toggle("chat-mode-group", state.activeMode === "group" && state.chatOpen);
  updateActiveChatHighlights();
  updateMobileChatViewport();
  syncMainScrollLock();
}

function isAnyDialogOpen() {
  return [els.loginDialog, els.pairDialog, els.groupDialog, els.renameDialog].some((dialog) => dialog?.open);
}

function syncMainScrollLock() {
  const locked = state.chatOpen || isAnyDialogOpen();
  els.appShell?.classList.toggle("main-scroll-locked", locked);
  document.documentElement.classList.toggle("main-scroll-locked", locked);
}

const mobileChatMargin = { top: 14, side: 12, bottom: 14 };
const MOBILE_DIALOG_FOCUS_DELAY_MS = 320;

function isMobileLayout() {
  return window.matchMedia("(max-width: 780px)").matches;
}

function mobileViewportHeightPx() {
  const viewport = window.visualViewport;
  if (viewport) return Math.round(viewport.height + viewport.offsetTop);
  return window.innerHeight;
}

function settleMobileViewportHeight() {
  if (!isMobileLayout()) return;
  const height = mobileViewportHeightPx();
  document.documentElement.style.setProperty("--mobile-shell-height", `${height}px`);
  updateRadarLayoutVars();
}

function releaseMobileShellHeight() {
  document.documentElement.style.removeProperty("--mobile-shell-height");
  if (isMobileLayout()) updateRadarLayoutVars();
}

let dialogFocusTimer = null;
const dialogFocusTimers = [];

function selectInputText(input) {
  if (!input) return;
  try {
    input.select();
  } catch {
    // ignore unsupported input types
  }
  try {
    input.setSelectionRange(0, input.value.length);
  } catch {
    // ignore
  }
}

function clearDialogFocusTimers() {
  window.clearTimeout(dialogFocusTimer);
  dialogFocusTimer = null;
  while (dialogFocusTimers.length) {
    window.clearTimeout(dialogFocusTimers.pop());
  }
}

function resetRenameInputFocus() {
  const input = els.renameInput;
  if (!input) return;
  input.readOnly = false;
  input.removeAttribute("readonly");
  input.blur();
}

function clearRenameDialogViewportStyles() {
  els.renameDialog?.style.removeProperty("--rename-dialog-top");
  els.renameDialog?.style.removeProperty("--rename-dialog-left");
  els.renameDialog?.style.removeProperty("--rename-dialog-width");
  els.renameDialog?.style.removeProperty("--rename-dialog-max-height");
}

function syncRenameDialogForViewport() {
  if (!els.renameDialog?.open || !isMobileLayout() || !window.visualViewport) {
    clearRenameDialogViewportStyles();
    return;
  }

  const viewport = window.visualViewport;
  const visibleTop = Math.round(viewport.offsetTop);
  const visibleLeft = Math.round(viewport.offsetLeft);
  const visibleWidth = Math.round(viewport.width);
  const visibleHeight = Math.round(viewport.height);
  const edgePad = 14;
  const dialog = els.renameDialog;
  const dialogWidth = Math.min(420, Math.max(240, visibleWidth - edgePad * 2));
  const dialogHeight = Math.round(dialog.getBoundingClientRect().height) || 220;
  const maxHeight = Math.max(180, visibleHeight - edgePad * 2);
  const layoutHeight = Math.min(dialogHeight, maxHeight);
  const idealTop = visibleTop + Math.max(edgePad, (visibleHeight - layoutHeight) / 2);
  const maxTop = visibleTop + visibleHeight - layoutHeight - edgePad;
  const top = Math.round(Math.min(Math.max(idealTop, visibleTop + edgePad), maxTop));
  const left = visibleLeft + Math.round((visibleWidth - dialogWidth) / 2);

  dialog.style.setProperty("--rename-dialog-top", `${top}px`);
  dialog.style.setProperty("--rename-dialog-left", `${left}px`);
  dialog.style.setProperty("--rename-dialog-width", `${dialogWidth}px`);
  dialog.style.setProperty("--rename-dialog-max-height", `${maxHeight}px`);
}

function setupRenameDialogViewportSync() {
  if (setupRenameDialogViewportSync.bound) return;
  setupRenameDialogViewportSync.bound = true;

  const sync = () => syncRenameDialogForViewport();
  window.visualViewport?.addEventListener("resize", sync);
  window.visualViewport?.addEventListener("scroll", sync);
  els.renameInput?.addEventListener("focus", sync);
  els.renameInput?.addEventListener("blur", () => window.setTimeout(sync, 80));
}

function unlockMobileInputFocus(input, select) {
  input.readOnly = false;
  input.removeAttribute("readonly");
  input.focus({ preventScroll: false });
  if (select) selectInputText(input);
  window.requestAnimationFrame(() => {
    input.focus({ preventScroll: false });
    if (select) selectInputText(input);
  });
}

function scheduleDialogFocus(input, delay, select) {
  const timer = window.setTimeout(() => {
    if (!input?.isConnected) return;
    const hostDialog = input.closest("dialog");
    if (hostDialog && !hostDialog.open) return;

    if (isMobileLayout()) {
      unlockMobileInputFocus(input, select);
      return;
    }

    input.readOnly = false;
    input.focus({ preventScroll: false });
    if (select) selectInputText(input);
  }, delay);
  dialogFocusTimers.push(timer);
}

function focusDialogInput(input, { select = false, mobileDelay = MOBILE_DIALOG_FOCUS_DELAY_MS } = {}) {
  if (!input) return;
  clearDialogFocusTimers();

  if (isMobileLayout()) {
    input.readOnly = true;
    input.focus({ preventScroll: false });
    settleMobileViewportHeight();
    window.requestAnimationFrame(() => {
      settleMobileViewportHeight();
      scheduleDialogFocus(input, mobileDelay, select);
    });
    return;
  }

  dialogFocusTimer = window.setTimeout(() => {
    window.requestAnimationFrame(() => scheduleDialogFocus(input, 0, select));
  }, 0);
}

function updateMobileChatViewport() {
  const root = document.documentElement;
  if (!isMobileLayout() || !state.chatOpen || !window.visualViewport) {
    root.style.removeProperty("--chat-panel-top");
    root.style.removeProperty("--chat-panel-left");
    root.style.removeProperty("--chat-panel-right");
    root.style.removeProperty("--chat-panel-height");
    root.style.removeProperty("--chat-panel-max-height");
    return;
  }

  const viewport = window.visualViewport;
  const top = Math.round(Math.max(mobileChatMargin.top, viewport.offsetTop + mobileChatMargin.top));
  const height = Math.max(240, Math.round(viewport.height - top - mobileChatMargin.bottom));

  root.style.setProperty("--chat-panel-top", `${top}px`);
  root.style.setProperty("--chat-panel-left", `${mobileChatMargin.side}px`);
  root.style.setProperty("--chat-panel-right", `${mobileChatMargin.side}px`);
  root.style.setProperty("--chat-panel-height", `${height}px`);
  root.style.setProperty("--chat-panel-max-height", `${height}px`);

  if (document.activeElement?.matches("textarea, input, select")) {
    window.scrollTo(0, 0);
  }
}

function setupMobileChatViewport() {
  if (!window.visualViewport) return;
  const sync = () => updateMobileChatViewport();
  window.visualViewport.addEventListener("resize", sync);
  window.visualViewport.addEventListener("scroll", sync);
  window.addEventListener("resize", sync);
  els.messageInput?.addEventListener("focus", sync);
  els.messageInput?.addEventListener("blur", () => window.setTimeout(sync, 80));
}

function saveSelf() {
  const { instanceId: _instanceId, ...persistedSelf } = self;
  localStorage.setItem(SELF_STORAGE_KEY, JSON.stringify(persistedSelf));
}

function applyServerSelf(client) {
  if (!client) return;
  const preferredName = self.name;
  Object.assign(self, client);
  if (preferredName) self.name = preferredName;
  saveSelf();
}

const renameDialogState = { mode: null, clientId: null };

function showRenameError(message) {
  if (!els.renameDialogError) {
    window.alert(message);
    return;
  }
  els.renameDialogError.textContent = message;
  els.renameDialogError.hidden = false;
}

function clearRenameError() {
  if (!els.renameDialogError) return;
  els.renameDialogError.hidden = true;
  els.renameDialogError.textContent = "";
}

function openRenameDialog({ mode, clientId = null } = {}) {
  if (!els.renameDialog) return;
  renameDialogState.mode = mode;
  renameDialogState.clientId = clientId;
  clearRenameError();

  if (mode === "self") {
    els.renameDialogHint.textContent = t("hostLabel");
    els.renameDialogTitle.textContent = t("renameSelfTitle");
    els.renameInputLabel.textContent = t("deviceNamePrompt");
    els.renameInput.value = self.name;
  } else if (mode === "client" && clientId) {
    const client = clients.get(clientId);
    if (!client) return;
    els.renameDialogHint.textContent = client.name;
    els.renameDialogTitle.textContent = t("rename");
    els.renameInputLabel.textContent = t("displayNamePrompt");
    els.renameInput.value = displayName(client);
  } else {
    return;
  }

  els.renameDialog.showModal();
  resetRenameInputFocus();
  window.requestAnimationFrame(() => {
    resetRenameInputFocus();
    syncRenameDialogForViewport();
  });
  if (isMobileLayout()) {
    syncRenameDialogForViewport();
  }
}

async function applyRenameSelf(trimmed) {
  self.name = trimmed;
  saveSelf();
  renderSelf();
  try {
    const registration = await api("/api/register", { ...self, instanceId });
    applyServerSelf(registration.client);
    self.name = trimmed;
    saveSelf();
    renderSelf();
    els.roomCode.textContent = self.pairCode;
  } catch (error) {
    console.error(error);
  }
}

function applyRenameClient(clientId, trimmed) {
  const client = clients.get(clientId);
  if (!client) return;

  if (!trimmed || trimmed === client.name) {
    delete aliases[client.id];
    customAliasIds.delete(client.id);
  } else {
    aliases[client.id] = trimmed;
    customAliasIds.add(client.id);
  }

  saveAliases();
  saveCustomAliasIds();
  renderPresence();
  renderRoomMeta();
  renderMessages();
}

async function submitRenameDialog() {
  const trimmed = els.renameInput?.value.trim().slice(0, 32) || "";
  if (!trimmed) {
    showRenameError(t("renameEmptyError"));
    return;
  }

  if (renameDialogState.mode === "self") {
    await applyRenameSelf(trimmed);
  } else if (renameDialogState.mode === "client" && renameDialogState.clientId) {
    applyRenameClient(renameDialogState.clientId, trimmed);
  }

  els.renameDialog?.close();
}

function renameSelf() {
  openRenameDialog({ mode: "self" });
}

function renameClient(clientId) {
  openRenameDialog({ mode: "client", clientId });
}

async function unpairClient(clientId) {
  const client = clients.get(clientId);
  if (!client?.peered) return;
  const name = displayName(client);
  if (!window.confirm(t("unpairConfirm").replace("{name}", name))) return;

  try {
    const result = await api("/api/unpair", { from: self.id, targetId: clientId });
    suppressContact(clientId);
    if (result.clients) updatePresence(result.clients);
    else renderPresence();
    persistAppState();
    syncMainScrollLock();
  } catch (error) {
    window.alert(error.message);
  }
}

function activePairPeerId() {
  if (state.activeMode !== "pair") return null;
  return state.activeMembers.find((id) => id !== self.id) || null;
}

function updateChatHeaderButtons() {
  if (els.renameChatTarget) {
    const peerId = activePairPeerId();
    els.renameChatTarget.hidden = !peerId;
    if (peerId) {
      els.renameChatTarget.dataset.clientId = peerId;
    } else {
      delete els.renameChatTarget.dataset.clientId;
    }
  }

  if (els.editGroupChatTarget) {
    const group = state.activeMode === "group" ? currentGroup() : null;
    els.editGroupChatTarget.hidden = !group;
    if (group) {
      els.editGroupChatTarget.dataset.groupId = group.id;
    } else {
      delete els.editGroupChatTarget.dataset.groupId;
    }
  }

  if (els.unpairChatTarget) {
    const peerId = activePairPeerId();
    const peer = peerId ? clients.get(peerId) : null;
    const showUnpair = Boolean(peerId && peer?.peered);
    els.unpairChatTarget.hidden = !showUnpair;
    if (showUnpair) {
      els.unpairChatTarget.dataset.clientId = peerId;
    } else {
      delete els.unpairChatTarget.dataset.clientId;
    }
  }
}

async function api(path, body) {
  const action = path.split("/").filter(Boolean).pop();
  const endpoint = usesPhpBackend ? `api.php?action=${encodeURIComponent(action)}` : path;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  if (!response.ok || data.ok === false) throw new Error(data.error || "Request failed");
  return data;
}

async function register() {
  self.type = normalizePlatform();
  self.app = detectApp();
  const registration = await api("/api/register", { ...self, instanceId });
  applyServerSelf(registration.client);
  renderSelf();
  els.roomCode.textContent = self.pairCode;
  pollCursor = Number(registration.cursor || pollCursor);
  persistAppState();
  updatePresence(registration.clients || []);
  mergeGroupsFromServer(registration.groups || []);
  await syncOwnedGroupsToServer();

  if (!usesPhpBackend) {
    openEventStream();
  }

  startPolling();
}

function openEventStream() {
  if (sseReconnectTimer) {
    window.clearTimeout(sseReconnectTimer);
    sseReconnectTimer = null;
  }
  if (eventSource) {
    eventSource.close();
    eventSource = null;
  }
  sseConnected = false;

  const params = new URLSearchParams({ ...self, instanceId });
  eventSource = new EventSource(`/api/events?${params}`);

  eventSource.addEventListener("open", () => {
    sseConnected = true;
    setConnectionStatus(true);
  });
  eventSource.addEventListener("error", () => {
    sseConnected = false;
    setConnectionStatus(false);
    eventSource?.close();
    eventSource = null;
    if (!sseReconnectTimer) {
      sseReconnectTimer = window.setTimeout(() => {
        sseReconnectTimer = null;
        if (self.id) openEventStream();
      }, 3000);
    }
  });
  eventSource.addEventListener("hello", (event) => {
    const data = JSON.parse(event.data);
    if (data.client) {
      applyServerSelf(data.client);
      renderSelf();
      els.roomCode.textContent = self.pairCode;
    }
    updatePresence(data.clients || []);
  });
  eventSource.addEventListener("presence", (event) => {
    const data = JSON.parse(event.data);
    updatePresence(data.clients || []);
  });
  eventSource.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    appendWireMessage(message);
  });
}

function pollingDelay() {
  if (document.hidden) return usesPhpBackend ? 8_000 : 12_000;
  const peerId = activePairPeerId();
  if (peerId) {
    const peer = clients.get(peerId);
    if (peer?.peered && !peer.sameDevice) return 1_500;
  }
  if (!usesPhpBackend && sseConnected) return 4_000;
  return 2_000;
}

function schedulePoll(delay = pollingDelay()) {
  window.clearTimeout(pollTimer);
  pollTimer = window.setTimeout(pollBackend, delay);
}

function startPolling() {
  schedulePoll(0);
}

async function pollBackend() {
  if (pollInFlight || !self.id) {
    schedulePoll();
    return;
  }

  pollInFlight = true;
  let shouldSchedule = true;
  try {
    const data = await api("/api/poll", { id: self.id, cursor: pollCursor, ...pollSelfProfile() });
    if (data.client) {
      applyServerSelf(data.client);
      renderSelf();
      els.roomCode.textContent = self.pairCode;
    }
    const incomingMessages = data.messages || [];
    incomingMessages.forEach((message) => {
      if (message.from !== self.id) ensureSenderVisible(message);
    });
    updatePresence(data.clients || []);
    mergeGroupsFromServer(data.groups || []);
    incomingMessages.forEach((message) => {
      appendWireMessage(message);
    });
    pollCursor = Number(data.cursor || pollCursor);
    persistAppState();
    setConnectionStatus(true);
  } catch (error) {
    setConnectionStatus(false);
    if (error.message === "Unknown client.") {
      shouldSchedule = false;
      await register();
    } else {
      console.error(error);
    }
  } finally {
    pollInFlight = false;
    if (shouldSchedule) schedulePoll();
  }
}

document.addEventListener("visibilitychange", () => {
  schedulePoll(0);
  if (!document.hidden && !usesPhpBackend && self.id && !sseConnected) {
    openEventStream();
  }
});

window.addEventListener("focus", () => schedulePoll(0));
window.addEventListener("blur", () => schedulePoll(0));
window.addEventListener("pageshow", (event) => {
  if (!event.persisted) return;
  state.chatOpen = false;
  renderShellState();
  schedulePoll(0);
});

async function regeneratePairCode() {
  try {
    const registration = await api("/api/regenerate-pair-code", { id: self.id });
    applyServerSelf(registration.client);
    renderSelf();
    updatePresence(registration.clients || clientArray());
    renderRoomMeta();
  } catch (error) {
    window.alert(error.message);
  }
}

function updatePresence(list) {
  list.forEach((client) => syncPeerCacheFromServer(client));
  const mergedList = mergePresenceList(list);
  mergedList.forEach((client) => {
    if (client.peered || client.messageContact) {
      rememberPeer(client, { heard: Boolean(client.messageContact || peerRecentlyHeard(client.id)) });
    }
  });

  const withPresence = mergedList.map((client) => {
    const presence = clientPresenceFromServer(client);
    return {
      ...client,
      serverPeered: Boolean(client.peered),
      presence,
      online: presence !== "offline"
    };
  });

  withPresence.forEach((client) => trackStrangerOffline(client));

  const normalized = withPresence.filter((client) => !shouldHideStranger(client));

  const signature = JSON.stringify(normalized.map((client) => [
    client.id,
    client.name,
    client.type,
    client.app,
    client.presence,
    Boolean(client.sameDevice),
    Boolean(client.sameNetwork),
    Boolean(client.serverPeered),
    Boolean(client.messageContact)
  ]));
  if (signature === lastPresenceSignature) return;
  lastPresenceSignature = signature;

  clients.clear();
  normalized.forEach((client, index) => {
    const showAsPeer = Boolean(client.peered || client.messageContact);
    clients.set(client.id, {
      ...client,
      tone: clientTone(client),
      pos: positionFor(index, normalized.length),
      sameDevice: Boolean(client.sameDevice),
      sameNetwork: Boolean(client.sameNetwork),
      peered: showAsPeer,
      messageContact: Boolean(client.messageContact)
    });
  });

  if (state.activeMode === "group") {
    state.activeMembers = groupMembers();
  } else if (state.activeMode === "pair") {
    state.activeMembers = state.activeMembers.filter((id) => id === self.id || clients.has(id));
    const peerId = state.activeMembers.find((id) => id !== self.id);
    const peer = peerId ? clients.get(peerId) : null;
    if (peer) {
      state.activeRoom = peer.name;
    } else {
      state.activeMode = "idle";
      state.activeRoom = t("noRoomSelected");
      state.roomId = "";
      state.activeMembers = [self.id];
      state.messages = [];
      state.chatOpen = false;
    }
  } else {
    state.activeMembers = [self.id];
  }

  presenceHasSynced = true;
  renderPresence();
  renderRoomMeta();
  renderSelf();
}

function renderSelf() {
  els.selfName.textContent = self.name;
  els.selfName.setAttribute("title", self.name);
  ensureFitTextChild(els.hostNodeName, "fit-text node-name-text", self.name);
  if (els.hostNodeInfo) els.hostNodeInfo.textContent = deviceInfo(self);
  if (els.hostNodeLabel) els.hostNodeLabel.textContent = t("hostLabel");
  self.tone = HOST_TONE;
  els.hostNode.classList.remove(...tones.map((tone) => `tone-${tone}`));
  els.hostNode.classList.add(`tone-${HOST_TONE}`);
  els.hostNodeIcon.className = `node-icon ${self.form} tone-${HOST_TONE} ${appIconClass(self.app)}`;
  queueFitVisibleNames(els.hostNode);
}

const compactRingRadiiW = [30, 39, 47];
const desktopRingRadii = [33, 42, 45];

function readRadarPxVar(name, fallback) {
  if (!els.radar) return fallback;
  const raw = getComputedStyle(els.radar).getPropertyValue(name).trim();
  const value = parseFloat(raw);
  return Number.isFinite(value) ? value : fallback;
}

function radarCenterY() {
  if (!els.radar) return 50;
  const raw = getComputedStyle(els.radar).getPropertyValue("--radar-center-y").trim();
  const match = raw.match(/^([\d.]+)%/);
  return match ? Number(match[1]) : 50;
}

function ringScale() {
  if (!els.radar) return 1;
  const value = parseFloat(getComputedStyle(els.radar).getPropertyValue("--ring-scale"));
  return Number.isFinite(value) ? value : 1;
}

function positionFor(index) {
  const compact = window.matchMedia("(max-width: 780px)").matches;
  const ringIndex = Math.floor(index / orderedSlotAngles.length);
  const angleIndex = index % orderedSlotAngles.length;
  const angle = orderedSlotAngles[angleIndex] * Math.PI / 180;
  const scale = ringScale();
  const centerY = radarCenterY();

  if (compact && els.radar?.clientWidth && els.radar?.clientHeight) {
    const w = els.radar.clientWidth;
    const h = els.radar.clientHeight;
    const rx = compactRingRadiiW[Math.min(ringIndex, compactRingRadiiW.length - 1)] * scale;
    const ry = rx * (w / h);
    return [
      Number((50 + Math.cos(angle) * rx).toFixed(2)),
      Number((centerY + Math.sin(angle) * ry).toFixed(2))
    ];
  }

  const radius = desktopRingRadii[Math.min(ringIndex, desktopRingRadii.length - 1)] * scale;
  return [
    Number((50 + Math.cos(angle) * radius).toFixed(2)),
    Number((centerY + Math.sin(angle) * radius).toFixed(2))
  ];
}

function pairPlusPosition(total = clientArray().length) {
  return positionFor(total);
}

function updatePairPlusPosition(total = clientArray().length) {
  if (!els.pairByCodeNode || !els.radar) return;
  const plusPosition = pairPlusPosition(total);
  els.radar.style.setProperty("--pair-plus-x", `${plusPosition[0]}%`);
  els.radar.style.setProperty("--pair-plus-y", `${plusPosition[1]}%`);
  els.pairByCodeNode.style.left = `${plusPosition[0]}%`;
  els.pairByCodeNode.style.top = `${plusPosition[1]}%`;
}

function appIconClass(app = "") {
  const value = String(app).toLowerCase();
  if (value.includes("chrome")) return "app-chrome";
  if (value.includes("safari")) return "app-safari";
  if (value.includes("firefox")) return "app-firefox";
  if (value.includes("edge")) return "app-edge";
  if (value.includes("opera")) return "app-opera";
  if (value.includes("brave")) return "app-brave";
  if (value.includes("in-app") || value.includes("inapp")) return "app-inapp";
  return "app-browser";
}

function renderPresence() {
  renderDeviceLists();
  renderRadar();
  renderGroupList();
  renderGroupSelection();
}

function renderDeviceLists() {
  els.builderList.innerHTML = "";
  const list = clientArray().filter((client) => !isGroupMember(client.id));

  if (!list.length) {
    els.builderList.appendChild(emptyState(t("noDevices")));
    return;
  }

  list.forEach((client) => {
    els.builderList.appendChild(createDeviceRow(client, true));
  });
}

function emptyState(text) {
  const item = document.createElement("div");
  item.className = "empty-state";
  item.textContent = text;
  return item;
}

function createDeviceRow(client, builderMode) {
  const row = document.createElement("div");
  const name = escapeHtml(displayName(client));
  const info = escapeHtml(deviceInfo(client));
  const distance = escapeHtml(distanceLabel(client));
  const addLabel = escapeHtml(t("addButton"));
  row.setAttribute("role", "button");
  row.tabIndex = 0;
  row.className = "device-row";
  row.draggable = true;
  row.dataset.deviceId = client.id;
  row.innerHTML = `
    <span class="avatar ${client.form} tone-${clientTone(client)} ${appIconClass(client.app)}" aria-hidden="true"></span>
    <span class="device-copy">
      <strong>${name}</strong>
      <span class="device-meta">
        <span>${info}</span>
        <em>${distance}</em>
      </span>
    </span>
    <span class="device-actions">
      <button class="rename-button" type="button" aria-label="Rename ${name}" title="Rename">${EDIT_ICON_HTML}</button>
      ${client.peered ? `<button class="unpair-button" type="button" aria-label="${escapeHtml(t("unpair"))} ${name}" title="${escapeHtml(t("unpair"))}">${DELETE_ICON_HTML}</button>` : ""}
      <button class="add-button" type="button" aria-label="${addLabel} ${name}" title="${addLabel}">${addLabel}</button>
    </span>
  `;

  row.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", client.id);
  });

  row.addEventListener("click", (event) => {
    if (event.target.closest(".rename-button")) {
      renameClient(client.id);
      return;
    }
    if (event.target.closest(".unpair-button")) {
      event.preventDefault();
      event.stopPropagation();
      unpairClient(client.id);
      return;
    }
    if (builderMode || event.target.closest(".add-button")) {
      addToGroup(client.id);
      return;
    }
    openPair(client.id);
  });

  row.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openPair(client.id);
  });

  return row;
}

const RADAR_NODE_TRANSITION_MS = 240;
const RADAR_NODE_STAGGER_MS = 72;

function refreshClientPositions() {
  const list = clientArray();
  list.forEach((client, index) => {
    client.pos = positionFor(index);
  });
  els.radar?.querySelectorAll(".device-node").forEach((node) => {
    const client = clients.get(node.dataset.deviceId);
    if (!client) return;
    node.style.left = `${client.pos[0]}%`;
    node.style.top = `${client.pos[1]}%`;
  });
  updatePairPlusPosition(list.length);
}

function revealRadarEntry(node, delayMs = 0) {
  node.classList.add("is-entering");
  node.classList.remove("is-leaving");

  const reveal = () => {
    void node.offsetWidth;
    node.classList.remove("is-entering");
  };

  const run = () => requestAnimationFrame(() => requestAnimationFrame(reveal));
  if (delayMs > 0) {
    window.setTimeout(run, delayMs);
  } else {
    run();
  }
}

function dismissRadarNode(node, onDone) {
  node.classList.add("is-leaving");
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    node.removeEventListener("transitionend", onTransitionEnd);
    onDone();
  };
  const onTransitionEnd = (event) => {
    if (event.target !== node) return;
    if (event.propertyName !== "transform" && event.propertyName !== "opacity") return;
    finish();
  };
  node.addEventListener("transitionend", onTransitionEnd);
  window.setTimeout(finish, RADAR_NODE_TRANSITION_MS + 40);
}

function renderRadar() {
  const list = clientArray();
  updatePairPlusPosition(list.length);

  const existing = new Map([...els.radar.querySelectorAll(".device-node")].map((node) => [node.dataset.deviceId, node]));
  const nextIds = new Set(list.map((client) => client.id));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let newNodeIndex = 0;

  list.forEach((client) => {
    const name = escapeHtml(displayName(client));
    const info = escapeHtml(deviceInfo(client));
    const distance = escapeHtml(distanceLabel(client));
    const unread = unreadForClient(client.id);
    let node = existing.get(client.id);
    const isNew = !node;
    if (!node) node = document.createElement("div");
    node.setAttribute("role", "button");
    if (isMobileLayout()) {
      node.removeAttribute("tabindex");
    } else {
      node.tabIndex = 0;
    }
    node.className = "device-node";
    if (clientArray().length > 10) node.classList.add("dense");
    const presence = client.presence || (client.online === false ? "offline" : "active");
    node.classList.toggle("presence-active", presence === "active");
    node.classList.toggle("presence-idle", presence === "idle");
    node.classList.toggle("presence-offline", presence === "offline");
    if (activeChatClientIds().has(client.id)) node.classList.add("chat-active");
    if (isGroupMember(client.id, currentGroup())) node.classList.add("selected");
    node.dataset.deviceId = client.id;
    node.style.left = `${client.pos[0]}%`;
    node.style.top = `${client.pos[1]}%`;
    if (isNew) {
      node.innerHTML = `
        <span class="node-icon ${client.form} tone-${clientTone(client)} ${appIconClass(client.app)}" aria-hidden="true"></span>
        ${unread ? `<span class="unread-badge node-unread">${unread}</span>` : ""}
        <span class="node-name-line"><strong title="${name}"><span class="fit-text node-name-text">${name}</span></strong><button class="radar-rename-button" type="button" aria-label="Rename ${name}" title="Rename">${EDIT_ICON_HTML}</button>${client.peered ? `<button class="radar-unpair-button" type="button" aria-label="${escapeHtml(t("unpair"))} ${name}" title="${escapeHtml(t("unpair"))}">${DELETE_ICON_HTML}</button>` : ""}</span>
        <small>${info}</small>
        <em>${distance}</em>
      `;
    } else {
      node.querySelector(".node-icon").className = `node-icon ${client.form} tone-${clientTone(client)} ${appIconClass(client.app)}`;
      const unreadNode = node.querySelector(".node-unread");
      if (unread) {
        if (unreadNode) unreadNode.textContent = unread;
        else node.insertAdjacentHTML("afterbegin", `<span class="unread-badge node-unread">${unread}</span>`);
      } else {
        unreadNode?.remove();
      }
      const nameLine = node.querySelector(".node-name-line");
      const title = nameLine?.querySelector("strong");
      if (title) ensureFitTextChild(title, "fit-text node-name-text", displayName(client));
      const infoNode = node.querySelector("small");
      if (infoNode) infoNode.textContent = info;
      const distanceNode = node.querySelector("em");
      if (distanceNode) distanceNode.textContent = distance;
      const renameButton = node.querySelector(".radar-rename-button");
      if (renameButton) {
        renameButton.setAttribute("aria-label", `Rename ${name}`);
        renameButton.setAttribute("title", "Rename");
      }
      let unpairButton = node.querySelector(".radar-unpair-button");
      if (unpairButton && nameLine && unpairButton.parentElement !== nameLine) {
        unpairButton.remove();
        unpairButton = null;
      }
      if (client.peered && nameLine) {
        if (!unpairButton) {
          nameLine.insertAdjacentHTML(
            "beforeend",
            `<button class="radar-unpair-button" type="button" aria-label="${escapeHtml(t("unpair"))} ${name}" title="${escapeHtml(t("unpair"))}">${DELETE_ICON_HTML}</button>`
          );
          unpairButton = nameLine.querySelector(".radar-unpair-button");
        }
        unpairButton?.setAttribute("aria-label", `${t("unpair")} ${displayName(client)}`);
        unpairButton?.setAttribute("title", t("unpair"));
      } else {
        unpairButton?.remove();
      }
    }

    node.draggable = true;
    bindDeviceNodeInteraction(node, client.id);

    if (isNew) {
      node.classList.add("is-entering");
      node.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", client.id);
      });
      els.radar.appendChild(node);
      const delay = reducedMotion ? 0 : newNodeIndex * RADAR_NODE_STAGGER_MS;
      newNodeIndex += 1;
      revealRadarEntry(node, delay);
    } else {
      node.classList.remove("is-leaving");
      els.radar.appendChild(node);
    }
  });

  existing.forEach((node, id) => {
    if (!nextIds.has(id)) {
      clearBubbleForSender(id);
      dismissRadarNode(node, () => node.remove());
    }
  });

  if (els.pairByCodeNode && presenceHasSynced) {
    const clientCount = list.length;
    if (pairPlusSyncCount === null) {
      pairPlusSyncCount = clientCount;
      revealRadarEntry(
        els.pairByCodeNode,
        reducedMotion ? 0 : clientCount * RADAR_NODE_STAGGER_MS
      );
    } else if (clientCount !== pairPlusSyncCount) {
      pairPlusSyncCount = clientCount;
      els.pairByCodeNode.classList.remove("is-entering", "is-leaving");
    }
  }

  applyNodeBubbles();
  queueFitVisibleNames(els.radar);
}

const GROUP_CARD_TRANSITION_MS = 420;
let groupListHasRendered = false;

function groupById(groupId) {
  return groups.find((item) => item.id === groupId);
}

function renderGroupMemberList(memberList, group) {
  const members = groupDisplayMembers(group);
  memberList.innerHTML = "";
  if (members.length) {
    members.forEach((client) => memberList.appendChild(createGroupMemberChip(client, group)));
  } else {
    const hint = document.createElement("span");
    hint.className = "group-empty-hint";
    hint.textContent = t("dragHereToAdd");
    memberList.appendChild(hint);
  }
}

function refreshGroupCard(card, group) {
  const members = groupDisplayMembers(group);
  const unread = unreadCount(group.id);

  card.classList.toggle("active", state.roomId === group.id);

  const openButton = card.querySelector(".group-open-button");
  const nameStrong = openButton.querySelector("strong");
  const nameText = openButton.querySelector(".group-name-text");
  if (nameStrong) nameStrong.setAttribute("title", group.name);
  if (nameText) {
    nameText.textContent = group.name;
    nameText.setAttribute("title", group.name);
  } else if (nameStrong) {
    nameStrong.textContent = group.name;
  }
  openButton.querySelector("small").textContent = `${members.length} ${members.length === 1 ? t("device") : t("devices")}`;

  const unreadBadge = openButton.querySelector(".group-unread");
  if (unread) {
    if (unreadBadge) unreadBadge.textContent = unread;
    else openButton.insertAdjacentHTML("beforeend", `<span class="unread-badge group-unread">${unread}</span>`);
  } else {
    unreadBadge?.remove();
  }

  card.querySelector(".group-code-pill strong").textContent = group.code;
  renderGroupMemberList(card.querySelector(".group-member-list"), group);
  queueFitVisibleNames(card);
}

function bindGroupCardEvents(card) {
  if (card.dataset.bound === "true") return;
  card.dataset.bound = "true";

  const groupId = () => card.dataset.groupId;

  card.querySelector(".group-open-button").addEventListener("click", () => openGroup(groupId()));
  card.querySelector(".group-code-copy-button").addEventListener("click", async () => {
    const group = groupById(groupId());
    if (!group) return;
    try {
      await navigator.clipboard.writeText(group.code);
    } catch (error) {
      console.warn(error);
    }
  });
  card.querySelector(".group-code-refresh-button").addEventListener("click", () => regenerateGroupCode(groupId()));
  card.querySelector(".group-edit-button").addEventListener("click", () => openGroupSettings(groupId()));
  card.querySelector(".group-delete-button").addEventListener("click", () => deleteGroup(groupId()));
  card.querySelector(".group-picker-button").addEventListener("click", () => {
    openGroup(groupId());
    els.groupDialog.showModal();
  });
  setupDropTarget(card.querySelector(".group-drop-zone"), "group");
}

function syncGroupsPanelHeading() {
  const title = document.querySelector(".groups-panel .section-title");
  if (title) title.hidden = groups.length === 0;
}

function renderGroupList() {
  const animateEnter = groupListHasRendered;
  groupListHasRendered = true;
  const existing = new Map(
    [...els.groupList.querySelectorAll(".group-card:not(.group-card-leaving)")]
      .map((node) => [node.dataset.groupId, node])
  );

  groups.forEach((group) => {
    let card = existing.get(group.id);
    if (card) {
      existing.delete(group.id);
      refreshGroupCard(card, group);
      els.groupList.appendChild(card);
      return;
    }

    card = createGroupCard(group);
    if (animateEnter) {
      card.classList.add("group-card-enter");
      els.groupList.appendChild(card);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.classList.remove("group-card-enter");
        });
      });
    } else {
      els.groupList.appendChild(card);
    }
  });

  existing.forEach((node) => {
    node.classList.add("group-card-leaving");
    window.setTimeout(() => node.remove(), GROUP_CARD_TRANSITION_MS);
  });

  syncGroupsPanelHeading();
  queueFitVisibleNames(els.groupList);
}

function createGroupCard(group) {
  const card = document.createElement("section");
  const members = groupDisplayMembers(group);
  const unread = unreadCount(group.id);
  card.className = `group-card${state.roomId === group.id ? " active" : ""}`;
  card.dataset.groupId = group.id;
  card.innerHTML = `
    <div class="group-card-head">
      <button class="group-open-button" type="button">
        <span class="asset-icon group-asset-icon" aria-hidden="true"></span>
        <span><strong title="${escapeHtml(group.name)}"><span class="fit-text group-name-text">${escapeHtml(group.name)}</span></strong><small>${members.length} ${members.length === 1 ? t("device") : t("devices")}</small></span>
        ${unread ? `<span class="unread-badge group-unread">${unread}</span>` : ""}
      </button>
      <span class="group-card-actions">
        <button class="group-edit-button" type="button" aria-label="${t("editGroupButton")}" title="${t("editGroupButton")}">${EDIT_ICON_HTML}</button>
        <button class="group-delete-button" type="button" aria-label="${t("delete")}" title="${t("delete")}">${DELETE_ICON_HTML}</button>
      </span>
    </div>
    <div class="group-card-body">
      <div class="group-card-body-inner">
        <div class="group-code-row">
          <span class="group-code-label">${t("codeLabel")}</span>
          <div class="code-pill group-code-pill">
            <strong>${escapeHtml(group.code)}</strong>
            <button class="group-code-copy-button inline-icon-button" type="button" aria-label="${t("copyCode")}" title="${t("copyCode")}"><span class="copy-icon" aria-hidden="true"></span></button>
            <button class="group-code-refresh-button inline-icon-button" type="button" aria-label="${t("refreshCode")}" title="${t("refreshCode")}">↻</button>
          </div>
        </div>
        <div class="group-drop-zone">
          <div class="group-member-list"></div>
          <button class="group-picker-button" type="button" aria-label="${t("addMembersLabel")}">+</button>
        </div>
      </div>
    </div>
  `;

  renderGroupMemberList(card.querySelector(".group-member-list"), group);
  bindGroupCardEvents(card);
  return card;
}

function createGroupMemberChip(client, group) {
  const chip = document.createElement("span");
  const name = escapeHtml(displayName(client));
  chip.className = "group-member-chip";
  const canRemove = canRemoveGroupMember(client, group);
  chip.innerHTML = `
    <span class="avatar ${client.form} tone-${clientTone(client)} ${appIconClass(client.app)}" aria-hidden="true"></span>
    <strong>${name}</strong>
    ${canRemove ? `<button type="button" aria-label="${escapeHtml(t("delete"))} ${name}" title="${escapeHtml(t("delete"))}">${DELETE_ICON_HTML}</button>` : ""}
  `;
  if (canRemove) {
    chip.querySelector("button").addEventListener("click", () => {
      const target = groupById(group.id);
      if (!target) return;
      target.memberIds.delete(client.id);
      if (state.roomId === target.id) state.activeMembers = groupMembers(target);
      renderPresence();
      renderRoomMeta();
      persistAppState();
      void syncGroupToServer(target);
    });
  }
  return chip;
}

function createSelectedMemberItem(client, group) {
  const item = document.createElement("div");
  const name = escapeHtml(displayName(client));
  const info = escapeHtml(deviceInfo(client));
  const distance = escapeHtml(distanceLabel(client));
  const canRemove = canRemoveGroupMember(client, group);
  item.className = "selected-member-item";
  item.dataset.deviceId = client.id;
  item.innerHTML = `
    <span class="avatar ${client.form} tone-${clientTone(client)} ${appIconClass(client.app)}" aria-hidden="true"></span>
    <span class="device-copy">
      <strong>${name}</strong>
      <span class="device-meta">
        <span>${info}</span>
        <em>${distance}</em>
      </span>
    </span>
    ${canRemove ? `<button class="selected-remove-button" type="button" aria-label="${escapeHtml(t("delete"))} ${name}" title="${escapeHtml(t("delete"))}">${DELETE_ICON_HTML}</button>` : ""}
  `;

  item.querySelector(".selected-remove-button")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = groupById(group.id);
    if (!target) return;
    target.memberIds.delete(client.id);
    if (state.roomId === target.id) state.activeMembers = groupMembers(target);
    renderPresence();
    renderRoomMeta();
    persistAppState();
    void syncGroupToServer(target);
  });

  return item;
}

function renderGroupSelection() {
  const group = currentGroup();
  const selected = group ? orderedGroupDisplayMembers(group) : [];
  els.builderCount.textContent = selected.length;
  els.builderChips.innerHTML = "";

  selected.forEach((client) => {
    els.builderChips.appendChild(createSelectedMemberItem(client, group));
  });
}

function scrollChatToBottom() {
  const scrollHost = els.chatScroll || els.messageLog;
  if (!scrollHost) return;
  scrollHost.scrollTop = scrollHost.scrollHeight;
}

function renderMessages() {
  els.messageLog.innerHTML = "";
  state.messages.forEach((message) => {
    els.messageLog.appendChild(createMessage(message));
  });
  scrollChatToBottom();
}

function renderRoomMeta() {
  setActiveRoomTitleText(currentRoomTitle());
  updateChatHeaderButtons();
  els.roomCode.textContent = self.pairCode;
  const count = state.activeMembers.length || 1;
  els.topMemberCount.textContent = count;
  if (state.activeMode === "group") {
    els.roomMemberLabel.textContent = `${count} ${count === 1 ? t("member") : t("members")}`;
  } else if (state.activeMode !== "pair") {
    els.roomMemberLabel.textContent = t("pairOrAdd");
  }
  const roomMembersRow = els.roomMemberLabel?.closest(".room-members");
  if (roomMembersRow) roomMembersRow.hidden = state.activeMode === "pair" || state.activeMode === "group";
  if (els.expiryValue) els.expiryValue.textContent = expiryLabel(currentGroup()?.expiry || "14 days");
  renderShellState();
  queueFitVisibleNames(els.activeRoomTitle.closest(".chat-header") || document);
}

function currentRoomTitle() {
  if (state.activeMode === "pair") {
    const targetId = state.activeMembers.find((id) => id !== self.id);
    return displayName(clientById(targetId)) || state.activeRoom;
  }
  if (state.activeMode === "idle") return t("noRoomSelected");
  return state.activeRoom;
}

const BUBBLE_LONG_PRESS_MS = 480;
const BUBBLE_MOVE_TOLERANCE = 12;
const MESSAGE_URL_RE = /(?:https?:\/\/|www\.)[^\s<]+/gi;

function normalizeMessageLink(raw) {
  let href = raw.replace(/[)\],;.:!?]+$/g, "");
  if (/^www\./i.test(href)) href = `https://${href}`;
  return href;
}

function fillMessageBubbleText(bubble, text) {
  if (!text) return;

  const matches = [...text.matchAll(MESSAGE_URL_RE)];
  if (!matches.length) {
    bubble.textContent = text;
    return;
  }

  let lastIndex = 0;
  matches.forEach((match) => {
    const raw = match[0];
    const index = match.index ?? 0;
    if (index > lastIndex) {
      bubble.appendChild(document.createTextNode(text.slice(lastIndex, index)));
    }

    const href = normalizeMessageLink(raw);
    const link = document.createElement("a");
    link.className = "message-link";
    link.href = href;
    link.textContent = raw;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.addEventListener("click", async (event) => {
      if (bubble.dataset.longPressMenu === "1") {
        event.preventDefault();
        delete bubble.dataset.longPressMenu;
        return;
      }
      event.stopPropagation();
      if (await writeClipboardText(href)) {
        notifyCopied(bubble);
      }
    });

    bubble.appendChild(link);
    lastIndex = index + raw.length;
  });

  if (lastIndex < text.length) {
    bubble.appendChild(document.createTextNode(text.slice(lastIndex)));
  }
}

function messageCopyText(message) {
  if (message.file) return message.file.name || t("untitledFile");
  return (message.text || "").trim();
}

async function writeClipboardText(text) {
  if (!text) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    try {
      const field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      return ok;
    } catch (fallbackError) {
      console.warn(error, fallbackError);
      return false;
    }
  }
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function imageFileToPngBlob(fileMeta) {
  if (!fileMeta?.dataUrl) return null;
  const img = await loadImageElement(fileMeta.dataUrl);
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(img, 0, 0);
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), "image/png"));
}

async function writeClipboardImage(fileMeta) {
  if (!fileMeta?.dataUrl || !isImageFile(fileMeta)) return false;
  if (!navigator.clipboard?.write || !window.ClipboardItem) return false;

  const file = dataUrlToFile(fileMeta);
  if (!file) return false;

  const mime = String(file.type || "image/png").split(";")[0];
  const attempts = [];
  if (mime.startsWith("image/")) {
    attempts.push({ [mime]: Promise.resolve(file) });
  }
  try {
    const pngBlob = await imageFileToPngBlob(fileMeta);
    if (pngBlob) attempts.push({ "image/png": Promise.resolve(pngBlob) });
  } catch (error) {
    console.warn(error);
  }

  for (const item of attempts) {
    try {
      await navigator.clipboard.write([new ClipboardItem(item)]);
      return true;
    } catch (error) {
      console.warn(error);
    }
  }
  return false;
}

async function copyMessageContent(message) {
  if (message.file?.dataUrl && isImageFile(message.file)) {
    if (await writeClipboardImage(message.file)) return true;
  }
  const text = messageCopyText(message);
  return text ? writeClipboardText(text) : false;
}

function dataUrlToFile(fileMeta) {
  if (!fileMeta?.dataUrl) return null;
  const comma = fileMeta.dataUrl.indexOf(",");
  if (comma === -1) return null;
  const mime = fileMeta.dataUrl.slice(0, comma).match(/^data:([^;,]+)/)?.[1] || fileMeta.type || "application/octet-stream";
  const binary = atob(fileMeta.dataUrl.slice(comma + 1));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new File([bytes], fileMeta.name || "ourdrop-file", { type: mime });
}

function flashBubbleCopied(bubble) {
  bubble.classList.remove("bubble-copied");
  void bubble.offsetWidth;
  bubble.classList.add("bubble-copied");
  window.setTimeout(() => bubble.classList.remove("bubble-copied"), 640);
}

let copyToastEl = null;
let copyToastTimer = null;

function ensureCopyToast() {
  if (copyToastEl) return copyToastEl;
  copyToastEl = document.createElement("div");
  copyToastEl.className = "copy-toast";
  copyToastEl.hidden = true;
  copyToastEl.setAttribute("role", "status");
  copyToastEl.setAttribute("aria-live", "polite");
  els.appShell?.appendChild(copyToastEl);
  return copyToastEl;
}

function showCopyToast() {
  const toast = ensureCopyToast();
  toast.textContent = t("messageCopied");
  toast.hidden = false;
  toast.classList.add("copy-toast-visible");
  window.clearTimeout(copyToastTimer);
  copyToastTimer = window.setTimeout(() => {
    toast.classList.remove("copy-toast-visible");
    toast.hidden = true;
  }, 1500);
}

function notifyCopied(bubble) {
  showCopyToast();
  if (bubble) flashBubbleCopied(bubble);
}

let bubbleActionMenu = null;
let bubbleActionMenuDismiss = null;

function closeBubbleActionMenu() {
  bubbleActionMenu?.remove();
  bubbleActionMenu = null;
  if (bubbleActionMenuDismiss) {
    document.removeEventListener("pointerdown", bubbleActionMenuDismiss, true);
    bubbleActionMenuDismiss = null;
  }
}

function positionBubbleActionMenu(menu, x, y) {
  const pad = 8;
  menu.style.visibility = "hidden";
  menu.style.left = "0";
  menu.style.top = "0";
  document.body.appendChild(menu);
  const rect = menu.getBoundingClientRect();
  let left = Math.min(window.innerWidth - rect.width - pad, Math.max(pad, x - rect.width / 2));
  let top = y - rect.height - 12;
  if (top < pad) top = Math.min(y + 12, window.innerHeight - rect.height - pad);
  menu.style.left = `${Math.round(left)}px`;
  menu.style.top = `${Math.round(top)}px`;
  menu.style.visibility = "";
}

function showBubbleActionMenu(bubble, message, x, y) {
  closeBubbleActionMenu();
  bubble.dataset.longPressMenu = "1";

  const menu = document.createElement("div");
  menu.className = "bubble-action-menu";
  menu.setAttribute("role", "menu");

  const shareBtn = document.createElement("button");
  shareBtn.type = "button";
  shareBtn.className = "bubble-action-menu-item";
  shareBtn.textContent = t("shareMessage");
  shareBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBubbleActionMenu();
    delete bubble.dataset.longPressMenu;
    triggerShareFromGesture(message, bubble);
  });

  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "bubble-action-menu-item";
  copyBtn.textContent = t("copyMessage");
  copyBtn.addEventListener("click", async (event) => {
    event.stopPropagation();
    closeBubbleActionMenu();
    delete bubble.dataset.longPressMenu;
    if (await copyMessageContent(message)) {
      notifyCopied(bubble);
    }
  });

  menu.append(shareBtn, copyBtn);
  positionBubbleActionMenu(menu, x, y);
  bubbleActionMenu = menu;
  requestAnimationFrame(() => menu.classList.add("bubble-action-menu-open"));

  bubbleActionMenuDismiss = (event) => {
    if (menu.contains(event.target)) return;
    closeBubbleActionMenu();
    delete bubble.dataset.longPressMenu;
  };
  window.setTimeout(() => {
    document.addEventListener("pointerdown", bubbleActionMenuDismiss, true);
  }, 0);
}

function setupBubbleActionMenuDismiss() {
  els.chatScroll?.addEventListener("scroll", closeBubbleActionMenu, { passive: true });
  window.addEventListener("resize", closeBubbleActionMenu);
}

async function shareMessageContent(message) {
  const text = messageCopyText(message);
  const file = dataUrlToFile(message.file);

  if (navigator.share) {
    try {
      if (file && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: file.name });
        return;
      }
      if (text) {
        await navigator.share({ text });
        return;
      }
    } catch (error) {
      if (error?.name === "AbortError") return;
      console.warn(error);
    }
  }

  if (text && await copyMessageContent(message)) {
    return { copied: true };
  }
  return null;
}

function triggerShareFromGesture(message, bubble) {
  const text = messageCopyText(message);
  const file = dataUrlToFile(message.file);

  if (navigator.share) {
    try {
      let sharePromise = null;
      if (file && navigator.canShare?.({ files: [file] })) {
        sharePromise = navigator.share({ files: [file], title: file.name });
      } else if (text) {
        sharePromise = navigator.share({ text });
      }
      if (sharePromise) {
        sharePromise.catch((error) => {
          if (error?.name === "AbortError") return;
          console.warn(error);
        });
        return;
      }
    } catch (error) {
      console.warn(error);
    }
  }

  copyMessageContent(message).then((ok) => {
    if (ok) notifyCopied(bubble);
  });
}

function setupBubbleInteractions(bubble, message) {
  const copyText = messageCopyText(message);
  const canShareFile = Boolean(message.file?.dataUrl);
  if (!copyText && !canShareFile) return;

  bubble.classList.add("bubble-interactive");

  let pressStart = 0;
  let pressTimer = null;
  let longPressHandled = false;
  let startX = 0;
  let startY = 0;
  let moved = false;
  let activePointer = null;
  let suppressClick = false;
  let lastPressEndAt = 0;
  let pressTarget = null;

  const isFileActionTarget = (target) => target.closest(".file-action");

  const clearPressTimer = () => {
    if (pressTimer) window.clearTimeout(pressTimer);
    pressTimer = null;
  };

  const handlePressEnd = () => {
    clearPressTimer();
    const now = Date.now();
    if (now - lastPressEndAt < 280) return;
    lastPressEndAt = now;

    if (longPressHandled || bubble.dataset.longPressMenu === "1") return;

    const duration = now - pressStart;
    const isLongPress = duration >= BUBBLE_LONG_PRESS_MS && !moved;

    if (isLongPress) {
      longPressHandled = true;
      suppressClick = true;
      if (navigator.vibrate) navigator.vibrate(12);
      showBubbleActionMenu(bubble, message, startX, startY);
      return;
    }

    if (moved) return;
    if (isFileActionTarget(pressTarget)) return;
    if (pressTarget?.closest(".message-link")) return;
    if (!message.file?.dataUrl && !messageCopyText(message)) return;

    copyMessageContent(message).then((ok) => {
      if (ok) notifyCopied(bubble);
    });
  };

  const beginPress = (x, y, target) => {
    clearPressTimer();
    delete bubble.dataset.longPressMenu;
    longPressHandled = false;
    suppressClick = false;
    moved = false;
    pressStart = Date.now();
    startX = x;
    startY = y;
    pressTarget = target;
    pressTimer = window.setTimeout(() => {
      pressTimer = null;
      if (moved) return;
      longPressHandled = true;
      suppressClick = true;
      if (navigator.vibrate) navigator.vibrate(12);
      showBubbleActionMenu(bubble, message, x, y);
    }, BUBBLE_LONG_PRESS_MS);
  };

  const trackMove = (x, y) => {
    if (Math.hypot(x - startX, y - startY) > BUBBLE_MOVE_TOLERANCE) {
      moved = true;
      clearPressTimer();
    }
  };

  bubble.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.pointerType === "touch") return;
    if (isFileActionTarget(event.target)) return;

    activePointer = event.pointerId;
    beginPress(event.clientX, event.clientY, event.target);
  });

  bubble.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    if (event.pointerId !== activePointer) return;
    trackMove(event.clientX, event.clientY);
  });

  bubble.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch") return;
    if (event.pointerId !== activePointer) return;
    if (isFileActionTarget(event.target)) {
      activePointer = null;
      clearPressTimer();
      return;
    }

    activePointer = null;
    handlePressEnd();
  });

  bubble.addEventListener("pointercancel", (event) => {
    if (event.pointerType === "touch") return;
    activePointer = null;
    moved = false;
    longPressHandled = false;
    clearPressTimer();
  });

  bubble.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;
    if (isFileActionTarget(event.target)) return;
    const touch = event.touches[0];
    beginPress(touch.clientX, touch.clientY, event.target);
  }, { passive: true });

  bubble.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    trackMove(touch.clientX, touch.clientY);
  }, { passive: true });

  bubble.addEventListener("touchend", (event) => {
    if (isFileActionTarget(event.target)) {
      clearPressTimer();
      return;
    }
    handlePressEnd();
  }, { passive: true });

  bubble.addEventListener("touchcancel", () => {
    clearPressTimer();
    moved = false;
    longPressHandled = false;
  }, { passive: true });

  bubble.addEventListener("click", (event) => {
    if (!suppressClick && bubble.dataset.longPressMenu !== "1") return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  });

  bubble.addEventListener("contextmenu", (event) => {
    if (isFileActionTarget(event.target)) return;
    event.preventDefault();
    showBubbleActionMenu(bubble, message, event.clientX, event.clientY);
  });
}

function createMessage(message) {
  const item = document.createElement("article");
  item.className = `message${message.mine ? " mine" : ""}${message.status ? ` message-${message.status}` : ""}`;

  const meta = document.createElement("div");
  meta.className = "message-meta";
  const senderName = message.mine ? t("thisDevice") : displayName(clientById(message.fromId)) || message.fromName || message.from;
  meta.innerHTML = `<strong>${escapeHtml(senderName)}</strong><span>${escapeHtml(message.time)}</span>`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  if (message.file) {
    bubble.appendChild(createFileCard(message.file, { mine: message.mine }));
  } else {
    fillMessageBubbleText(bubble, message.text);
    if (message.status === "sending" || message.status === "failed") {
      bubble.appendChild(createMessageStatus(message));
    }
  }

  setupBubbleInteractions(bubble, message);

  item.append(meta, bubble);
  return item;
}

function createMessageStatus(message) {
  const status = document.createElement("span");
  status.className = "message-status";
  status.textContent = message.status === "failed" ? t("messageFailed") : t("messageSending");
  return status;
}

function createFileIcon(file) {
  const icon = document.createElement("span");
  const kind = file.kind || "generic";
  icon.className = `file-icon file-icon-${kind}`;
  icon.setAttribute("aria-hidden", "true");

  if (kind === "image" && file.dataUrl) {
    icon.style.backgroundImage = `url("${file.dataUrl}")`;
  } else {
    const label = document.createElement("span");
    label.className = "file-icon-label";
    label.textContent = kind === "pdf" ? "PDF" : (file.type || "FILE").slice(0, 4);
    icon.appendChild(label);
  }

  return icon;
}

function fileStatusLabel(status, mine = false) {
  if (status === "sending") return t("fileSending");
  if (status === "failed") return t("fileFailed");
  if (!status || status === "Received") {
    return mine ? t("fileSent") : t("fileReceived");
  }
  return status;
}

function fileMime(file) {
  if (file?.dataUrl) {
    const match = String(file.dataUrl).match(/^data:([^;,]+)/);
    if (match) return match[1].toLowerCase();
  }
  return String(file?.mime || file?.mediaType || file?.type || "").toLowerCase();
}

function fileName(file) {
  return String(file?.name || "").toLowerCase();
}

function isImageFile(file) {
  const mime = fileMime(file);
  const name = fileName(file);
  return file?.kind === "image" || mime.startsWith("image/") || /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(name);
}

function isVideoFile(file) {
  const mime = fileMime(file);
  const name = fileName(file);
  return file?.kind === "video" || mime.startsWith("video/") || /\.(mp4|mov|m4v|webm|ogv)$/i.test(name);
}

function isPreviewableFile(file) {
  return Boolean(file?.dataUrl && (isImageFile(file) || isVideoFile(file)));
}

function createFilePreview(file) {
  if (!isPreviewableFile(file)) return null;
  if (isVideoFile(file)) {
    const video = document.createElement("video");
    video.className = "file-preview file-preview-video";
    video.src = file.dataUrl;
    video.muted = true;
    video.controls = true;
    video.preload = "metadata";
    return video;
  }
  const image = document.createElement("img");
  image.className = "file-preview file-preview-image";
  image.src = file.dataUrl;
  image.alt = file.name || t("untitledFile");
  image.loading = "lazy";
  return image;
}

function createFileCard(file, { mine = false } = {}) {
  const card = document.createElement("div");
  card.className = `file-card${isPreviewableFile(file) ? " file-card-previewable" : ""}`;

  const preview = createFilePreview(file);
  if (preview) card.appendChild(preview);

  const body = document.createElement("div");
  body.className = "file-card-body";

  const details = document.createElement("div");
  details.className = "file-details";

  const name = document.createElement("strong");
  name.textContent = file.name || t("untitledFile");

  const meta = document.createElement("span");
  meta.textContent = [file.size, file.type].filter(Boolean).join(" · ");

  const footer = document.createElement("div");
  footer.className = "file-footer";

  const status = document.createElement("em");
  status.textContent = fileStatusLabel(file.status, mine);
  footer.appendChild(status);

  if (file.dataUrl) {
    const actions = document.createElement("div");
    actions.className = "file-actions";
    actions.append(
      createFileAction(file, t("fileOpen"), { open: true }),
      createFileActionSeparator(),
      createFileAction(file, t("fileSave"), { download: true })
    );
    footer.appendChild(actions);
  }

  details.append(name, meta, footer);
  body.append(createFileIcon(file), details);

  if (!file.dataUrl) {
    const done = document.createElement("i");
    done.setAttribute("aria-hidden", "true");
    done.textContent = "✓";
    body.appendChild(done);
  }

  card.appendChild(body);

  if (file.status === "sending" || Number.isFinite(file.progress)) {
    const progress = document.createElement("div");
    progress.className = "file-progress";
    progress.setAttribute("aria-hidden", "true");
    const bar = document.createElement("span");
    bar.style.width = `${Math.max(4, Math.min(100, Number(file.progress) || 8))}%`;
    progress.appendChild(bar);
    card.appendChild(progress);
  }
  return card;
}

function createFileActionSeparator() {
  const sep = document.createElement("span");
  sep.className = "file-action-sep";
  sep.setAttribute("aria-hidden", "true");
  sep.textContent = "|";
  return sep;
}

function dataUrlToBlobUrl(dataUrl) {
  if (!dataUrl || !dataUrl.startsWith("data:")) return "";
  const comma = dataUrl.indexOf(",");
  if (comma === -1) return "";
  const mime = dataUrl.slice(0, comma).match(/^data:([^;,]+)/)?.[1] || "application/octet-stream";
  const binary = atob(dataUrl.slice(comma + 1));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return URL.createObjectURL(new Blob([bytes], { type: mime }));
}

function openFile(file) {
  const url = dataUrlToBlobUrl(file?.dataUrl);
  if (!url) return;
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }
  window.setTimeout(() => URL.revokeObjectURL(url), 120_000);
}

function downloadFile(file) {
  const url = dataUrlToBlobUrl(file?.dataUrl);
  if (!url) return;
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name || "ourdrop-file";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

function createFileAction(file, label, { open = false, download = false } = {}) {
  const action = document.createElement("a");
  action.className = "file-action";
  action.href = "#";
  action.textContent = label;
  action.addEventListener("click", (event) => {
    event.preventDefault();
    if (open) openFile(file);
    else if (download) downloadFile(file);
  });
  return action;
}

function appendWireMessage(message) {
  const roomId = canonicalRoomId(message.roomId || state.roomId);
  if (message.id) {
    if (seenMessageIds.has(message.id)) return;
    if (roomHasMessageId(roomId, message.id)) {
      seenMessageIds.add(message.id);
      return;
    }
    seenMessageIds.add(message.id);
  }
  const senderRestored = message.from !== self.id && ensureSenderVisible(message);
  applyGroupMetaFromMessage(message);
  const normalized = {
    id: message.id,
    from: message.from === self.id ? t("thisDevice") : message.fromName,
    fromId: message.from,
    fromName: message.fromName,
    time: message.time,
    text: message.text,
    file: message.file,
    mine: message.from === self.id
  };
  const messages = messagesForRoom(roomId);
  messages.push(normalized);
  const group = groups.find((item) => item.id === roomId);
  if (group) group.messages = messages;
  persistAppState();

  if (roomId === state.roomId && state.chatOpen) {
    state.messages = messages;
    renderMessages();
    if (message.from !== self.id) clearUnread(roomId);
    if (senderRestored) {
      renderPresence();
      applyNodeBubbles();
    }
    return;
  }

  if (senderRestored) {
    renderPresence();
  }

  notifyIncomingMessage(message);
}

function createLocalMessage({ text = "", file = null, status = "sending", progress = 8 } = {}) {
  const now = new Date();
  return {
    id: `local-${randomId()}`,
    from: t("thisDevice"),
    fromId: self.id,
    fromName: self.name,
    time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    text,
    file: file ? { ...file, status, progress } : null,
    mine: true,
    status,
    progress
  };
}

function upsertLocalMessage(roomId, message) {
  const messages = messagesForRoom(roomId);
  const index = messages.findIndex((item) => item.id === message.id);
  if (index >= 0) messages[index] = message;
  else messages.push(message);
  if (roomId === state.roomId) {
    state.messages = messages;
    renderMessages();
  }
  persistAppState();
}

function removeLocalMessage(roomId, messageId) {
  const messages = messagesForRoom(roomId);
  const index = messages.findIndex((item) => item.id === messageId);
  if (index >= 0) messages.splice(index, 1);
  if (roomId === state.roomId) {
    state.messages = messages;
    renderMessages();
  }
  persistAppState();
}

function updateLocalMessage(roomId, messageId, patch = {}) {
  const messages = messagesForRoom(roomId);
  const message = messages.find((item) => item.id === messageId);
  if (!message) return;
  Object.assign(message, patch);
  if (patch.file && message.file) Object.assign(message.file, patch.file);
  if (roomId === state.roomId) {
    state.messages = messages;
    renderMessages();
  }
  persistAppState();
}

async function loadRoomHistory() {
  if (!usesPhpBackend || !state.roomId) return;
  const roomId = state.roomId;
  try {
    const data = await api("/api/history", { id: self.id, roomId });
    if (state.roomId !== roomId) return;
    const messages = messagesForRoom(roomId);
    messages.length = 0;
    (data.messages || []).forEach((message) => {
      if (message.id) seenMessageIds.add(message.id);
      messages.push({
        id: message.id,
        from: message.from === self.id ? t("thisDevice") : message.fromName,
        fromId: message.from,
        fromName: message.fromName,
        time: message.time,
        text: message.text,
        file: message.file,
        mine: message.from === self.id
      });
    });
    state.messages = messages;
    const group = groups.find((item) => item.id === roomId);
    if (group) group.messages = messages;
    renderMessages();
    persistAppState();
  } catch (error) {
    console.error(error);
  }
}

async function addToGroup(clientId, groupId = state.roomId) {
  if (!clients.has(clientId)) return;
  let group = groupById(groupId);
  if (!group) {
    group = createNewGroup({ openPicker: false, select: true });
  }
  if (!group) return;
  if (!group.ownerId) group.ownerId = self.id;
  group.memberIds.add(clientId);
  if (state.roomId !== group.id) openGroup(group.id);
  else renderGroupSelection();
  renderPresence();
  renderRoomMeta();
  persistAppState();
  await syncGroupToServer(group);
}

function openPair(clientId) {
  const target = clients.get(clientId);
  if (!target) return;
  state.activeMode = "pair";
  state.activeRoom = target.name;
  state.roomId = pairRoomId(self.id, target.id);
  state.activeMembers = [self.id, target.id];
  state.messages = messagesForRoom(state.roomId);
  state.chatOpen = true;
  clearUnread(state.roomId);
  clearBubblesForRoom(state.roomId);
  renderGroupList();
  renderRoomMeta();
  renderMessages();
  loadRoomHistory();
  persistAppState();
}

async function pairByCode() {
  openPairDialog();
}

function openPairDialog() {
  if (!els.pairDialog) return;
  if (els.pairDialogError) {
    els.pairDialogError.hidden = true;
    els.pairDialogError.textContent = "";
  }
  if (els.pairCodeInput) {
    els.pairCodeInput.value = "";
  }
  els.pairDialog.showModal();
}

function showPairDialogError(message) {
  if (!els.pairDialogError) {
    window.alert(message);
    return;
  }
  els.pairDialogError.textContent = message;
  els.pairDialogError.hidden = false;
}

async function submitPairCode() {
  const trimmed = String(els.pairCodeInput?.value || "").trim();
  if (!trimmed) {
    showPairDialogError(t("enterPairCode"));
    return;
  }
  if (trimmed === String(self.pairCode || "")) {
    showPairDialogError(t("pairOwnCodeError"));
    return;
  }
  if (!self.id) {
    await register();
  }

  if (els.submitPair) els.submitPair.disabled = true;
  try {
    const result = await api("/api/pair", { from: self.id, pairCode: trimmed });
    const pairedClient = {
      ...result.target,
      tone: clientTone(result.target),
      pos: positionFor(clients.size, clients.size + 1),
      presence: clientPresenceFromServer(result.target),
      online: clientPresenceFromServer(result.target) !== "offline",
      sameDevice: Boolean(result.target.sameDevice),
      sameNetwork: Boolean(result.target.sameNetwork),
      serverPeered: true,
      peered: true
    };
    rememberPeer(pairedClient);
    clients.set(result.target.id, pairedClient);
    els.pairDialog?.close();
    openPair(result.target.id);
  } catch (error) {
    const message = /pair code/i.test(String(error.message))
      ? t("pairCodeNotFound")
      : error.message;
    showPairDialogError(message);
  } finally {
    if (els.submitPair) els.submitPair.disabled = false;
  }
}

function pairRoomId(a, b) {
  return ["pair", ...[a, b].sort()].join(":");
}

function canonicalRoomId(roomId) {
  if (!roomId?.startsWith("pair:")) return roomId;
  const ids = roomId.split(":").filter((id) => id && id !== "pair");
  if (ids.length >= 2) return pairRoomId(ids[0], ids[1]);
  return roomId;
}

function notificationsSupported() {
  return typeof Notification !== "undefined";
}

function notificationIconUrl() {
  return new URL("icons/icon-192.png", location.href).href;
}

function syncNotificationButton() {
  const button = els.enableNotifications;
  if (!button) return;
  if (!notificationsSupported()) {
    button.hidden = true;
    return;
  }
  button.hidden = false;
  const permission = Notification.permission;
  button.classList.toggle("is-granted", permission === "granted");
  button.classList.toggle("is-blocked", permission === "denied");
  const label = permission === "granted"
    ? t("notificationsOn")
    : permission === "denied"
      ? t("notificationsBlocked")
      : t("enableNotifications");
  button.title = label;
  button.setAttribute("aria-label", label);
  button.disabled = permission === "denied";
}

async function requestBrowserNotifications() {
  if (!notificationsSupported()) {
    window.alert(t("notificationsUnsupported"));
    return false;
  }
  if (Notification.permission === "granted") {
    syncNotificationButton();
    return true;
  }
  if (Notification.permission === "denied") {
    window.alert(t("notificationsBlocked"));
    syncNotificationButton();
    return false;
  }
  const permission = await Notification.requestPermission();
  syncNotificationButton();
  return permission === "granted";
}

let notificationPermissionPromptArmed = false;
let notificationPermissionPrompted = false;

function armNotificationPermissionPrompt() {
  if (notificationPermissionPromptArmed || !notificationsSupported() || Notification.permission !== "default") return;
  notificationPermissionPromptArmed = true;
  const requestOnce = () => {
    if (notificationPermissionPrompted || Notification.permission !== "default") return;
    notificationPermissionPrompted = true;
    void requestBrowserNotifications();
  };
  window.addEventListener("pointerdown", requestOnce, { once: true, capture: true });
  window.addEventListener("keydown", requestOnce, { once: true, capture: true });
}

function showBrowserNotification(message, roomId) {
  if (!notificationsSupported() || Notification.permission !== "granted") return false;
  if (roomId === state.roomId && state.chatOpen) return false;

  const name = message.fromName || roomLabel(roomId, message);
  const preview = messagePreview(message);
  const icon = notificationIconUrl();
  try {
    const notification = new Notification(name, {
      body: preview,
      tag: `ourdrop-${roomId}`,
      icon,
      badge: icon,
      renotify: true
    });
    notification.onclick = () => {
      window.focus();
      openRoomById(roomId, message);
      notification.close();
    };
    return true;
  } catch {
    return false;
  }
}

let incomingToastEl = null;
let incomingToastTimer = null;
let incomingToastAction = null;

function ensureIncomingToast() {
  if (incomingToastEl) return incomingToastEl;
  incomingToastEl = document.createElement("button");
  incomingToastEl.type = "button";
  incomingToastEl.className = "incoming-toast";
  incomingToastEl.hidden = true;
  incomingToastEl.setAttribute("aria-live", "polite");
  incomingToastEl.addEventListener("click", () => {
    if (typeof incomingToastAction === "function") incomingToastAction();
    hideIncomingMessageToast();
  });
  els.appShell?.appendChild(incomingToastEl);
  return incomingToastEl;
}

function hideIncomingMessageToast() {
  if (!incomingToastEl) return;
  incomingToastEl.classList.remove("incoming-toast-visible");
  incomingToastEl.hidden = true;
  incomingToastAction = null;
}

function showIncomingMessageToast(message, roomId) {
  if (roomId === state.roomId && state.chatOpen) return;
  const name = message.fromName || roomLabel(roomId, message);
  const preview = messagePreview(message);
  const toast = ensureIncomingToast();
  toast.textContent = t("incomingMessage")
    .replace("{name}", name)
    .replace("{preview}", preview);
  incomingToastAction = () => openRoomById(roomId, message);
  toast.hidden = false;
  toast.classList.add("incoming-toast-visible");
  window.clearTimeout(incomingToastTimer);
  incomingToastTimer = window.setTimeout(hideIncomingMessageToast, 5000);
}

async function startGroup() {
  if (!setGroupSettings()) {
    window.alert("Enter a group name.");
    return;
  }
  const group = currentGroup();
  if (group) {
    if (!group.ownerId) group.ownerId = self.id;
    state.activeMembers = groupMembers(group);
    state.messages = group.messages;
    await syncGroupToServer(group);
  }
  if (els.groupDialog.open) els.groupDialog.close();
  renderRoomMeta();
  renderMessages();
  renderPresence();
  persistAppState();
}

const MESSAGE_INPUT_MAX_HEIGHT = 120;

function syncMessageInputHeight() {
  const input = els.messageInput;
  if (!input) return;
  const styles = getComputedStyle(input);
  const minHeight = parseFloat(styles.minHeight) || 44;
  input.style.height = "auto";
  const next = Math.min(MESSAGE_INPUT_MAX_HEIGHT, Math.max(minHeight, input.scrollHeight));
  input.style.height = `${next}px`;
  input.style.overflowY = input.scrollHeight > MESSAGE_INPUT_MAX_HEIGHT ? "auto" : "hidden";
}

async function sendText(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const sent = await sendMessage({ text: trimmed });
  if (!sent) return;
  els.messageInput.value = "";
  syncMessageInputHeight();
}

async function sendFiles(files) {
  for (const file of files) {
    const roomId = state.roomId;
    const group = currentGroup();
    const recipients = group && roomId === group.id
      ? groupMessageRecipients(group)
      : state.activeMembers.filter((id) => id !== self.id);
    const groupMeta = group && roomId === group.id ? groupPayload(group) : null;
    const localFile = {
      name: file.name,
      size: fileSize(file.size),
      type: fileTypeLabel(file),
      status: "sending",
      progress: 4,
      kind: fileKind(file)
    };
    const localMessage = createLocalMessage({ file: localFile, status: "sending", progress: 4 });
    upsertLocalMessage(roomId, localMessage);

    try {
      const filePayload = {
        name: file.name,
        size: fileSize(file.size),
        type: fileTypeLabel(file),
        status: "sending",
        progress: 4,
        kind: fileKind(file),
        dataUrl: await readFileAsDataUrl(file, (progress) => {
          updateLocalMessage(roomId, localMessage.id, {
            progress,
            file: { progress, status: "sending" }
          });
        })
      };
      await sendMessage({ file: filePayload, localMessage, roomId, recipients, groupMeta });
    } catch (error) {
      updateLocalMessage(roomId, localMessage.id, {
        status: "failed",
        progress: 100,
        file: { status: "failed", progress: 100 }
      });
      console.error(error);
    }
  }
  els.fileInput.value = "";
}

async function sendMessage({ text = "", file = null, localMessage = null, roomId = state.roomId, recipients = null, groupMeta = null } = {}) {
  const group = currentGroup();
  recipients = recipients || (group && roomId === group.id
    ? groupMessageRecipients(group)
    : state.activeMembers.filter((id) => id !== self.id));
  if (!recipients.length) {
    window.alert("Pair or add another device first.");
    if (localMessage) removeLocalMessage(roomId, localMessage.id);
    return false;
  }

  if (!localMessage) {
    localMessage = createLocalMessage({ text, file, status: "sending", progress: file ? file.progress : 40 });
    upsertLocalMessage(roomId, localMessage);
  } else {
    updateLocalMessage(roomId, localMessage.id, {
      status: "sending",
      progress: 90,
      file: file ? { ...file, status: "sending", progress: 90 } : null
    });
  }

  const payload = {
    from: self.id,
    to: recipients,
    roomId,
    text,
    file: file ? { ...file, status: "Received", progress: 100 } : null
  };
  if (groupMeta || (group && roomId === group.id)) {
    payload.groupMeta = groupMeta || groupPayload(group);
  }

  try {
    const result = await api("/api/message", payload);
    removeLocalMessage(roomId, localMessage.id);
    if (result.message) appendWireMessage(result.message);
    return true;
  } catch (error) {
    updateLocalMessage(roomId, localMessage.id, {
      status: "failed",
      progress: 100,
      file: file ? { status: "failed", progress: 100 } : null
    });
    console.error(error);
    return false;
  }
}

function fileSize(size) {
  if (size > 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)} MB`;
  if (size > 1024) return `${Math.round(size / 1024)} KB`;
  return `${size} B`;
}

function fileKind(file) {
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) return "pdf";
  return "generic";
}

function fileTypeLabel(file) {
  const ext = file.name.split(".").pop();
  return ext ? ext.toUpperCase() : "FILE";
}

function readFileAsDataUrl(file, onProgress = null) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onprogress = (event) => {
      if (!event.lengthComputable || typeof onProgress !== "function") return;
      onProgress(Math.min(88, Math.round((event.loaded / event.total) * 88)));
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function filesFromClipboard(event) {
  const files = [];
  const seen = new Set();
  const addFile = (file) => {
    if (!file) return;
    const key = `${file.name}:${file.size}:${file.type}:${file.lastModified}`;
    if (seen.has(key)) return;
    seen.add(key);
    files.push(file);
  };

  [...(event.clipboardData?.files || [])].forEach(addFile);
  [...(event.clipboardData?.items || [])].forEach((item, index) => {
    if (item.kind !== "file") return;
    const file = item.getAsFile();
    if (!file) return;
    if (!file.name && file.type.startsWith("image/")) {
      const ext = file.type.split("/")[1] || "png";
      addFile(new File([file], `pasted-image-${index + 1}.${ext}`, { type: file.type, lastModified: Date.now() }));
      return;
    }
    addFile(file);
  });

  return files;
}

function handleMessagePaste(event) {
  const files = filesFromClipboard(event);
  if (!files.length) return;
  event.preventDefault();
  void sendFiles(files);
}

function setupDropTarget(target, mode) {
  if (!target) return;

  target.addEventListener("dragover", (event) => {
    event.preventDefault();
    target.classList.add("drag-over");
  });

  target.addEventListener("dragleave", () => {
    target.classList.remove("drag-over");
  });

  target.addEventListener("drop", (event) => {
    event.preventDefault();
    target.classList.remove("drag-over");

    const clientId = event.dataTransfer.getData("text/plain");
    if (clientId && mode === "group") {
      addToGroup(clientId, target.closest("[data-group-id]")?.dataset.groupId || target.dataset.groupId || state.roomId);
      return;
    }

    if (event.dataTransfer.files.length) {
      sendFiles(event.dataTransfer.files);
    }
  });
}

function setupAuth() {
  if (!IMAP_LOGIN_PROMPT_ENABLED) return;

  const saved = localStorage.getItem("ourdrop-host");
  if (saved) {
    els.hostStatus.textContent = t("connected");
    return;
  }
  window.setTimeout(() => els.loginDialog.showModal(), 350);
}

els.loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("ourdrop-host", "connected");
  els.hostStatus.textContent = t("connected");
  els.loginDialog?.close();
});

els.hostButton.addEventListener("click", () => {
  if (IMAP_LOGIN_PROMPT_ENABLED) {
    els.loginDialog?.showModal();
    return;
  }
  renameSelf();
});
els.hostNode.addEventListener("click", renameSelf);
els.pairByCodeNode.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  pairByCode();
});
els.pairForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitPairCode();
});
els.closePair?.addEventListener("click", () => els.pairDialog?.close());
els.renameForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitRenameDialog();
});
els.renameDialog?.addEventListener("toggle", () => {
  syncMainScrollLock();
  if (!els.renameDialog?.open) {
    clearRenameDialogViewportStyles();
    return;
  }
  syncRenameDialogForViewport();
  window.requestAnimationFrame(syncRenameDialogForViewport);
});
els.closeRename?.addEventListener("click", () => els.renameDialog?.close());
[els.loginDialog, els.pairDialog, els.groupDialog].forEach((dialog) => {
  dialog?.addEventListener("toggle", syncMainScrollLock);
});
els.pairDialog?.addEventListener("toggle", () => {
  if (!els.pairDialog?.open) {
    clearDialogFocusTimers();
    return;
  }
  focusDialogInput(els.pairCodeInput, { select: true });
});
els.renameChatTarget?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const peerId = els.renameChatTarget.dataset.clientId;
  if (peerId) renameClient(peerId);
});
els.unpairChatTarget?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const peerId = els.unpairChatTarget.dataset.clientId;
  if (peerId) unpairClient(peerId);
});
els.editGroupChatTarget?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const groupId = els.editGroupChatTarget.dataset.groupId || state.roomId;
  if (groupId) openGroupSettings(groupId);
});
els.selfName.addEventListener("click", (event) => {
  event.stopPropagation();
  renameSelf();
});
els.pinButton?.addEventListener("click", () => els.loginDialog.showModal());
els.closeGroup.addEventListener("click", () => els.groupDialog.close());
els.closeChat?.addEventListener("click", () => closeChat());
els.radar.addEventListener("click", (event) => {
  if (event.target.closest(".device-node, .host-node, .pair-plus-node, .node-message-bubble")) return;
  closeChat();
});
els.confirmGroup.addEventListener("click", startGroup);
els.attachButton.addEventListener("click", () => els.fileInput.click());
els.fileInput.addEventListener("change", () => sendFiles(els.fileInput.files));
els.regeneratePairCode?.addEventListener("click", regeneratePairCode);
els.enableNotifications?.addEventListener("click", () => {
  void requestBrowserNotifications();
});
els.addGroup.addEventListener("click", () => createNewGroup({ openPicker: false }));
els.pairFromList?.addEventListener("click", pairByCode);

window.addEventListener("languagechange", () => {
  const next = languageForLocale(navigator.languages?.[0] || navigator.language || "en");
  if (next !== currentLanguage) {
    currentLanguage = next;
    renderTranslations();
    renderPresence();
  }
});
window.addEventListener("resize", () => {
  updateRadarLayoutVars();
  renderPresence();
  queueFitVisibleNames();
});
window.addEventListener("orientationchange", () => {
  window.setTimeout(() => {
    updateRadarLayoutVars();
    renderPresence();
  }, 120);
});
els.messageInput.addEventListener("input", syncMessageInputHeight);
els.messageInput.addEventListener("paste", handleMessagePaste);
els.messageInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey || event.isComposing || event.keyCode === 229) return;
  event.preventDefault();
  els.composer.requestSubmit();
});
els.composer.addEventListener("submit", (event) => {
  event.preventDefault();
  sendText(els.messageInput.value);
});

setupDropTarget(els.chatScroll, "files");
setupDropTarget(els.messageLog, "files");
setupDropTarget(els.composer, "files");
setupMobileChatViewport();
setupRenameDialogViewportSync();
setupBubbleActionMenuDismiss();
syncMessageInputHeight();

function updateRadarLayoutVars() {
  const topbar = document.querySelector(".topbar");
  const height = topbar?.offsetHeight || 128;
  document.documentElement.style.setProperty("--mobile-topbar-height", `${height}px`);
  updateMobileChatViewport();

  if (!els.radar) return;

  const w = els.radar.clientWidth;
  const h = els.radar.clientHeight;
  if (!w || !h) return;

  const compact = window.matchMedia("(max-width: 780px)").matches;
  const topbarHeight = compact ? height : 0;
  const iconCenterY = readRadarPxVar("--node-icon-center-y", 29);
  const labelBelow = readRadarPxVar("--node-label-below", compact ? 77 : 97);
  const edgePad = readRadarPxVar("--radar-edge-pad", compact ? 20 : 24);

  const topInset = iconCenterY + edgePad + topbarHeight;
  const bottomInset = labelBelow + edgePad;
  const usableH = Math.max(120, h - topInset - bottomInset);
  const centerPx = topInset + usableH / 2;
  const centerY = (centerPx / h) * 100;

  const outerSpanPx = compact
    ? (compactRingRadiiW[compactRingRadiiW.length - 1] / 100) * w
    : (desktopRingRadii[desktopRingRadii.length - 1] / 100) * h;
  const ryMaxPx = Math.min(
    centerPx - iconCenterY - edgePad,
    h - edgePad - labelBelow - centerPx
  );
  const ringScaleValue = Math.min(1, Math.max(0.72, ryMaxPx / outerSpanPx));

  els.radar.style.setProperty("--radar-center-y", `${centerY.toFixed(2)}%`);
  els.radar.style.setProperty("--ring-scale", ringScaleValue.toFixed(3));
  queueRadarRenameButtonLayout();
}

function setupPreventMobileZoom() {
  if (!window.matchMedia("(max-width: 780px), (pointer: coarse)").matches) return;

  document.addEventListener("gesturestart", (event) => event.preventDefault(), { passive: false });
  document.addEventListener("gesturechange", (event) => event.preventDefault(), { passive: false });
  document.addEventListener("gestureend", (event) => event.preventDefault(), { passive: false });

  document.addEventListener("touchmove", (event) => {
    if (event.touches.length > 1) event.preventDefault();
  }, { passive: false });

  let lastTouchEnd = 0;
  document.addEventListener("touchend", (event) => {
    if (event.target.closest("input, textarea, select, dialog")) return;
    const now = Date.now();
    if (now - lastTouchEnd < 320) event.preventDefault();
    lastTouchEnd = now;
  }, { passive: false });
}

async function boot() {
  setupPreventMobileZoom();
  setupTabIdentityChannel();
  await splitDuplicateTabIfNeeded();
  state.chatOpen = false;
  renderTranslations();
  updateRadarLayoutVars();
  settleMobileViewportHeight();
  syncNotificationButton();
  armNotificationPermissionPrompt();
  els.roomCode.textContent = self.pairCode;
  renderGroupSettings();
  renderPresence();
  renderMessages();
  renderRoomMeta();
  syncMainScrollLock();
  setupAuth();
  await register();
  state.chatOpen = false;
  renderShellState();
  syncMainScrollLock();
  requestAnimationFrame(() => {
    updateRadarLayoutVars();
    refreshClientPositions();
  });
}

boot().catch((error) => {
  setConnectionStatus(false);
  console.error(error);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(() => {});
  });
}
