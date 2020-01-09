importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/50ca581a192aae84e7a1.js",
    "revision": "c83d4020b365982b8bd83d92867499d3"
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
    "url": "/_nuxt/7306bc653eedfb8df680.js",
    "revision": "3bc90f8ff0a8b209b166f824b3676daf"
  },
  {
    "url": "/_nuxt/7764db6e658c4cecc38a.js",
    "revision": "bb26f6d54807b13d8543c0ced472050b"
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
    "url": "/_nuxt/9e6c99f5acd9113aa83e.js",
    "revision": "820a19a53379d1a34b08bd24a1369d22"
  },
  {
    "url": "/_nuxt/eedb23424e8f1d10b18f.js",
    "revision": "b337175ea4ece7ad7a60bf60f9108cb3"
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
