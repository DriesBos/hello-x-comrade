const pkg = require("./package")
const axios = require("axios")
require("dotenv").config()

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover"
      },
      {
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        id: "favicon",
        type: "image/png",
        sizes: "16x16",
        href: "/0.png"
      },
      { rel: "manifest", href: "/site.webmanifest" }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [
    "@/assets/styles/reset.css",
    "@/assets/styles/form-reset.css",
    "@/assets/styles/body.sass",
    "@/assets/styles/transitions.sass",
    "@/assets/styles/typography.sass",
    "@/assets/styles/variables.sass"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/components",
    "~/plugins/filters",
    { src: "~plugins/vue-carousel", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    [
      "@bazzite/nuxt-optimized-images",
      { optimizedImages: { optimizeImages: true, optimizeImagesInDev: true } }
    ],
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV === "production" // Generate new token
            ? process.env.PREVIEWKEY
            : process.env.PREVIEWKEY,
        cacheProvider: "memory"
      }
    ]
  ],
  generate: {
    fallback: true,
    routes: function(callback) {
      const token = process.env.PREVIEWKEY
      const per_page = 100
      const version = "draft"
      let cache_version = 0
      let page = 1
      // other routes that are not in Storyblok with their slug.
      let routes = ["/"] // adds home directly but with / instead of /home
      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version
          // Call first Page of the Stories
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/stories?token=${token}&version=${version}&per_page=${per_page}&page=${page}&cv=${cache_version}`
            )
            .then(res => {
              res.data.stories.forEach(story => {
                if (story.full_slug != "home") {
                  routes.push("/" + story.full_slug)
                }
              })
              // Check if there are more pages available otherwise execute callback with current routes.
              const total = res.headers.total
              const maxPage = Math.ceil(total / per_page)
              if (maxPage <= 1) {
                callback(null, routes)
                return
              }
              // Since we know the total we now can pregenerate all requests we need to get all stories
              let contentRequests = []
              for (let page = 2; page <= maxPage; page++) {
                contentRequests.push(
                  axios.get(
                    `https://api.storyblok.com/v1/cdn/stories?token=${token}&version=${version}&per_page=${per_page}&page=${page}`
                  )
                )
              }
              // Axios allows us to exectue all requests using axios.spread we will than generate our routes and execute the callback
              axios
                .all(contentRequests)
                .then(
                  axios.spread((...responses) => {
                    responses.forEach(response => {
                      response.data.stories.forEach(story => {
                        if (story.full_slug != "home") {
                          routes.push("/" + story.full_slug)
                        }
                      })
                    })
                    callback(null, routes)
                  })
                )
                .catch(callback)
            })
        })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [
    ["@nuxt/typescript-build"],
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-113897586-1"
      }
    ]
  ]
}
