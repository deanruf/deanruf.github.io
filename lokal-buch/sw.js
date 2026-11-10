// Alter Service Worker wird ersetzt und meldet sich ab (App ist umgezogen nach lokal-buch.web.app)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://lokal-buch.web.app/' + new URL(c.url).search);
})()));
