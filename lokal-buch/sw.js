// Alter Service Worker wird ersetzt und meldet sich ab (App ist umgezogen nach finestbydean.ch)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://finestbydean.ch/' + new URL(c.url).search);
})()));
