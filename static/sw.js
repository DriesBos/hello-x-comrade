importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/083b26867ab2d77e3363.js",
    "revision": "c9d8b3b07aab3130de035d2d61c012d5"
  },
  {
    "url": "/_nuxt/171003906a3b4cf9ee12.js",
    "revision": "2210babf9695ab54256755e7c336c94d"
  },
  {
    "url": "/_nuxt/79d0804a483243b74f99.js",
    "revision": "ef19e9f8a920e623101f8366424fb4d8"
  },
  {
    "url": "/_nuxt/8531cd3325842f8755da.js",
    "revision": "d097ea92303e72f80bd8ecd50293f097"
  },
  {
    "url": "/_nuxt/873f178005267899fb01.js",
    "revision": "35dcb883dc4273a208295f1522388be5"
  },
  {
    "url": "/_nuxt/f5f63fb6232d4065f3ae.js",
    "revision": "52cc03a0513a806dec08647ddabce521"
  },
  {
    "url": "/_nuxt/f61e75991bef163fea13.js",
    "revision": "e83af5e3f1c2f04be1e199d2b3726a78"
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
