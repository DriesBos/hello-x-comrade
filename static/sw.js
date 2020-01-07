importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/32612b87620079f30a68.js",
    "revision": "02afe2aa5f8cb2cf66fc09d85b6d31cc"
  },
  {
    "url": "/_nuxt/386e8a1bf77b24c1761d.js",
    "revision": "167bb5786fb93a6525d2e1a4bcb30d94"
  },
  {
    "url": "/_nuxt/50ca581a192aae84e7a1.js",
    "revision": "c83d4020b365982b8bd83d92867499d3"
  },
  {
    "url": "/_nuxt/54fa697459163ed134ab.js",
    "revision": "7ce21a6e5f8f6f8375083560a298d749"
  },
  {
    "url": "/_nuxt/62df07fd11af49973031.js",
    "revision": "8385b4bdb970fa6bc8136fe99c7ded06"
  },
  {
    "url": "/_nuxt/6be5585f32729e582166.js",
    "revision": "bfb5d76ed9982018950724f33abdb3bf"
  },
  {
    "url": "/_nuxt/83f93309d5e9d63fb49b.js",
    "revision": "e73a3dbb5b7745a66995a96e3001d735"
  },
  {
    "url": "/_nuxt/91bb32b0a9d156708e1a.js",
    "revision": "76a7d8f2c1dd6974e6a4f3edf82423d6"
  },
  {
    "url": "/_nuxt/a0c93f3b9a520d156a99.js",
    "revision": "30ae53a9697757bfce90fd2906962daf"
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
