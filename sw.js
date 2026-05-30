self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cfp-v1').then(cache =>
      cache.addAll(['/cf-palm/', '/cf-palm/index.html', '/cf-palm/manifest.json', '/cf-palm/logo.jpg'])
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request)
    )
  );
});
