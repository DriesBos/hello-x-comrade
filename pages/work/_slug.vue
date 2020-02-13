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
        <!-- <slider
          id="worksingle-SliderWindowHorizontal"
          class="horizontal"
          :images="story.content.images"
        />
        <slider
          id="worksingle-SliderWindowVertical"
          class="vertical"
          :images="story.content.images_mobile"
        /> -->
        <vue-carousel-item :images="story.content.images" />
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
      story: { content: {} }
    }
  },
  mounted() {
    this.measureHeight()
    this.removeChangeCursor()
    window.addEventListener("resize", this.measureHeight)
    window.addEventListener("scroll", this.getSlideshowPosition)
    $(".hovered").on("mouseover", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
  },
  methods: {
    measureHeight() {
      const element = document.getElementById("worksingle-Text")
      const image = document.getElementById("worksingle-Slider")
      const height = element.offsetHeight
      image.style.marginTop = `${height}px`
    },
    changeCursor() {
      let $cursor = $(".cursor")
      $cursor.addClass("hovers-container")
    },
    removeChangeCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("hovers-container")
    }
  },
  head() {
    return {
      // title: this.story.content.metadata.title,
      // meta: [
      //   {
      //     hid: "description",
      //     name: "description",
      //     content: this.story.content.metadata.description
      //   }
      // ]
    }
  }
}
</script>
