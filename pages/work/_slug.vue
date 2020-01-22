<template>
  <div class="content">
    <section class="content-worksingle">
      <div class="text-blok textBlock">
        <p>{{ story.content.text }}</p>
        <h2>{{ story.content.title }}</h2>
      </div>
      <div class="slider-blok" :class="{ active: toggleSlider }">
        <slider :images="story.content.images" />
      </div>
    </section>
    <nuxt-link to="/work" tag="div">
      <div
        class="svg close"
        v-html="require('~/assets/images/close.svg?include')"
      />
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
    window.addEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (currentScrollPosition > 300) {
        return (this.toggleSlider = true)
      } else {
        return (this.toggleSlider = false)
      }
    }
  }
}
</script>
