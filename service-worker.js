self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('fishing-planet-clone').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/logo.png',
        '/assets/fish.png',
        '/manifest.json',
        '/style.css',
        '/index.js',
        // Add other necessary assets here
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
