// Service worker sederhana agar app bisa di-install.
// Strategi "jaringan dulu": kalau online selalu ambil versi terbaru dari GitHub,
// kalau offline pakai salinan terakhir. Data Firebase tidak disentuh di sini
// (Firebase sudah punya cache offline sendiri).
const CACHE = 'pmk-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './favicon.svg', './favicon-32.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return; // Firebase & font: biarkan
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
