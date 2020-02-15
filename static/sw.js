importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/10cc4fe09a9d10a0ffc7.js",
    "revision": "dca2d00fccb0725ade134cfa0db088aa"
  },
  {
    "url": "/_nuxt/64ae0d85aa16670760d4.js",
    "revision": "2984254ccaeef69ea5e9dcc170d94911"
  },
  {
    "url": "/_nuxt/805bc6e8f597acd53c36.js",
    "revision": "3aa3e15d700d29a2f1a843c7b62371ea"
  },
  {
    "url": "/_nuxt/873f178005267899fb01.js",
    "revision": "35dcb883dc4273a208295f1522388be5"
  },
  {
    "url": "/_nuxt/b57299ef5107636648bc.js",
    "revision": "09563cf478260f7f998eb704c13f1917"
  },
  {
    "url": "/_nuxt/c6202b3cec20d0970e05.js",
    "revision": "bc17703ef194eca8d61141740cc4b7e6"
  },
  {
    "url": "/_nuxt/f08a2212e3ec8b0b454a.js",
    "revision": "99505f64328abe989eaf8679a9b73490"
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
