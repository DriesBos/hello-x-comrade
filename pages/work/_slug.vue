<template>
  <div class="content">
    <!-- prettier-ignore -->
    <section id="worksingle-Page" class="content-Worksingle">
      <div id="worksingle-Text" class="content-Worksingle_Text">
        <h1>{{ story.content.title }}</h1>
        <markdown-item :input="story.content.text" />
      </div>
      <!-- prettier-ignore -->
      <div id="worksingle-Slider" class="content-Worksingle_Slider slider-blok">
        <client-only>
          <vue-carousel-item class="horizontal" :images="story.content.images" />
          <vue-carousel-item class="vertical" :images="story.content.images_mobile" />
        </client-only>
      </div>
    </section>
    <nuxt-link to="/work" tag="div" class="close hovered">
      <!-- prettier-ignore -->
      <div class="close-Icon" v-html="require('~/assets/images/close.svg?include')" />
      <p>close</p>
    </nuxt-link>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import JQuery from "jquery"
let $ = JQuery

export default {
  mixins: [storyblokLivePreview],
  scrollToTop: true,
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published"
    let endpoint = `cdn/stories/work/${context.params.slug}`

    return context.app.$storyapi
      .get(endpoint, {
        version: version
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
      story: { content: {} }
    }
  },
  mounted() {
    this.measureHeight()
    this.removeChangeCursor()
    window.addEventListener("resize", this.measureHeight)
    window.addEventListener("scroll", this.getSlideshowPosition)
    document.addEventListener("keydown", this.backOnEscape)
    $(".hovered").on("mouseenter", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
    // console.log("WORK SLUG", this.story)
  },
  destroyed() {
    window.removeEventListener("resize", this.measureHeight)
    window.removeEventListener("scroll", this.getSlideshowPosition)
    document.removeEventListener("keydown", this.backOnEscape)
    $(".hovered").off("mouseenter", this.changeCursor)
    $(".hovered").off("mouseleave", this.removeChangeCursor)
  },
  methods: {
    backOnEscape(event) {
      if (event.keyCode === 27) {
        let $cursor = $(".cursor")
        $cursor.removeClass("cursor-Prev")
        $cursor.removeClass("cursor-Next")
        this.$router.go(-1)
      }
    },
    measureHeight() {
      const element = document.getElementById("worksingle-Text")
      const image = document.getElementById("worksingle-Slider")
      const height = element.offsetHeight
      // console.log("MEASUREHEIGHT", element, image, height)
      image.style.marginTop = `${height}px`
    },
    changeCursor() {
      let $cursor = $(".cursor")
      $cursor.addClass("hovers-container")
      $cursor.removeClass("cursor-Prev")
      $cursor.removeClass("cursor-Next")
    },
    removeChangeCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("hovers-container")
    }
  },
  head() {
    return {
      title: this.story.content.metadata.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.story.content.metadata.description
        }
      ]
    }
  }
}
</script>
