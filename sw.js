const CACHE_VERSION = "0.8.97";
const CACHE_NAME = `ourdrop-static-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  "./",
  `./styles.css?v=${CACHE_VERSION}`,
  `./app.js?v=${CACHE_VERSION}`,
  "./manifest.webmanifest",
  "./favicon.ico",
  "./favicon.svg",
  "./favicon-16.png",
  "./favicon-32.png",
  "./apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/logo-mark.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.filter((name) => name.startsWith("ourdrop-static-") && name !== CACHE_NAME).map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request, { cache: "no-store" }).catch(async () => {
        const cached = await caches.match("./");
        return cached || caches.match("/index.html");
      })
    );
    return;
  }

  if (url.pathname.endsWith("/api.php") || url.pathname.endsWith("/sw.js") || url.pathname.endsWith("/manifest.webmanifest")) {
    event.respondWith(fetch(request, { cache: "no-store" }));
    return;
  }

  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => null);
      return cached || network || new Response("", { status: 504 });
    })()
  );
});
