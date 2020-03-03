importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c668e2cc06acd346edc.js",
    "revision": "0438b50d363af18706baba04f3c6a2a8"
  },
  {
    "url": "/_nuxt/0f3dc5ea18084b9b623d.js",
    "revision": "59530b72b7b610116415b872477befcc"
  },
  {
    "url": "/_nuxt/1a40278e2148551fa301.js",
    "revision": "e70152c48e48718912a6a4ac22245b32"
  },
  {
    "url": "/_nuxt/5a3b3c0aa7d764056d2b.js",
    "revision": "35c3795abb387d445e52059cb55580e3"
  },
  {
    "url": "/_nuxt/99ac7c8b1c1963c34ae1.js",
    "revision": "0730a53ef8397b3b97984ad00d2af444"
  },
  {
    "url": "/_nuxt/a1537674a5d935242116.js",
    "revision": "7de4b09760b5325247a5d7d6ab78e4bc"
  },
  {
    "url": "/_nuxt/d83afeadbba6461aa262.js",
    "revision": "f1e4194bdaf9e1cd2206fc9ab219c241"
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
