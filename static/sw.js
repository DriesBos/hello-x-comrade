importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0aa655c9a524f0b8ed73.js",
    "revision": "0730a53ef8397b3b97984ad00d2af444"
  },
  {
    "url": "/_nuxt/1275f904aaf3f357bb56.js",
    "revision": "9ca824507a9c68b6a1befe68e4acc861"
  },
  {
    "url": "/_nuxt/69401e45e534d546dd9b.js",
    "revision": "f1e4194bdaf9e1cd2206fc9ab219c241"
  },
  {
    "url": "/_nuxt/b539e639146be549645b.js",
    "revision": "c329ac023e9981ec8e8856fd53cfde95"
  },
  {
    "url": "/_nuxt/dcfda56e050928708c28.js",
    "revision": "34a88a24cb47c9140c79895812b5c53a"
  },
  {
    "url": "/_nuxt/ed657854f226741cf716.js",
    "revision": "bc4cb5beac093b579b06cfcc64e929ba"
  },
  {
    "url": "/_nuxt/ff9f4cb5f98f8c5bfb69.js",
    "revision": "e70152c48e48718912a6a4ac22245b32"
  }
], {
  "cacheId": "nuxt-storyblok-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
