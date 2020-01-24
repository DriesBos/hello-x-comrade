<template>
  <div class="content">
    <section class="content-Worksingle">
      <div id="worksingle-Text" class="content-Worksingle_Text">
        <p>{{ story.content.text }}</p>
        <h1>{{ story.content.title }}</h1>
      </div>
      <!-- prettier-ignore -->
      <div
        id="worksingle-Slider"
        class="content-Worksingle_Slider slider-blok"
        :class="{ active: toggleSlider }"
      >
        <slider :images="story.content.images" />
      </div>
    </section>
    <nuxt-link to="/work" tag="div" class="close">
      <!-- prettier-ignore -->
      <div class="close-Icon" v-html="require('~/assets/images/close.svg?include')" />
      <p>close</p>
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
  methods: {
    measureHeight() {
      const element = document.getElementById("worksingle-Text")
      const image = document.getElementById("worksingle-Slider")
      const height = element.offsetHeight
      image.style.marginTop = `${height}px`
    }
  },
  mounted() {
    this.measureHeight()
    window.addEventListener("resize", () => {
      this.measureHeight()
    })
  }
}
</script>
