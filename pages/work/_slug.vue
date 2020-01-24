<template>
  <div class="content">
    <section class="content-Worksingle">
      <div class="content-Worksingle_Text">
        <p>{{ story.content.text }}</p>
        <h1>{{ story.content.title }}</h1>
      </div>
      <!-- prettier-ignore -->
      <div class="content-Worksingle_Slider slider-blok" :class="{ active: toggleSlider }">
        <slider :images="story.content.images" />
      </div>
    </section>
    <nuxt-link to="/work" tag="div">
      <!-- prettier-ignore -->
      <div class="svg close" v-html="require('~/assets/images/close.svg?include')" />
    </nuxt-link>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    let endpoint = `cdn/stories/work/${context.params.slug}`

    return context.app.$storyapi
      .get(endpoint, {
        version: "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} },
      toggleSlider: false
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.measureHeight(`content-Worksingle_Text`)
    })
  },
  methods: {
    measureHeight(e) {
      const element = document.getElementsByClassName(`${e}`)
      const height = element.offsetHeight
      element.style.marginTop = `${height}px`
    }
  }
}
</script>
