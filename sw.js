const VERSION = '1';
const CACHE = 'cfp-v' + VERSION;
const FILES = ['/cf-palm/', '/cf-palm/index.html', '/cf-palm/manifest.json', '/cf-palm/logo.jpg'];

// Install: cache files, then activate immediately
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

// Activate: clean old caches, take over all pages, notify
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim()).then(() =>
      // Tell all open pages to refresh
      clients.matchAll({ type: 'window' }).then(clients =>
        clients.forEach(client => client.postMessage({ type: 'UPDATE' }))
      )
    )
  );
});

// Fetch: network first, fallback to cache
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Cache the fresh response
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
