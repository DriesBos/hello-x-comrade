<template>
  <div class="content">
    <section class="content-Work">
      <ul class="hovered">
        <!-- prettier-ignore -->
        <li
          v-for="post in projects"
          :id="post.content.id"
          :key="post.content.id"
          :class="post.content.id"
        >
          <nuxt-link class="hovered" :to="post.full_slug">
            <h1>
              {{ post.content.title }}
              <span class="content-Work_Slash">/</span>
            </h1>
            <p class="content-Work_Year">&nbsp;/{{ post.content.year }}&nbsp;</p>
          </nuxt-link>
          <!-- View variables.sass for srcset widths source -->
          <picture class="image">
            <img
              :srcset="`${transformImage(post.content.cover_image, '1668x0/filters:format(jpg):quality(65)')} 1668w, ${transformImage(post.content.cover_image, '1440x0/filters:format(jpg):quality(65)')} 1440w, ${transformImage(post.content.cover_image, '1280x0/filters:format(jpg):quality(65)')} 1280w, ${transformImage(post.content.cover_image, '960x0/filters:format(jpg):quality(65)')} 960w, ${transformImage(post.content.cover_image, '800x0/filters:format(jpg):quality(65)')} 800w, ${transformImage(post.content.cover_image, '690x0/filters:format(jpg):quality(65)')} 690w`"
              sizes="(max-width: 1025px) 50vw, (min-width: 1025px) 100vw"
              :data-src="post.content.cover_image | transformImage('1668x0/filters:format(jpg):quality(65)')"
              alt="Project image"
            />
          </picture>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import JQuery from "jquery"
let $ = JQuery

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published"
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: version,
        starts_with: "work"
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
      stories: { content: {} },
      projects: {},
      metadata: {},
      metatitle: "",
      metadescription: ""
    }
  },
  mounted() {
    // console.log(this.projects[0])
    window.scrollTo(0, 0)
    this.arrayLoop(this.stories)
    this.assignData()
    $(".hovered").on("mouseenter", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
  },
  destroyed() {
    $(".hovered").off("mouseenter", this.changeCursor)
    $(".hovered").off("mouseleave", this.removeChangeCursor)
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""

      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    },
    arrayLoop(array) {
      this.projects = array.filter(function(el) {
        if (el.content.component === "page-project") {
          return true
        }
      })
      this.metadata = array.find(function(el) {
        if (el.content.component === "page-work") {
          return true
        }
      })
    },
    changeCursor() {
      let $cursor = $(".cursor")
      $cursor.addClass("hovers-container")
    },
    removeChangeCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("hovers-container")
    },
    assignData() {
      this.metatitle = this.metadata.content.metadata.title
      this.metadescription = this.metadata.content.metadata.description
    }
  },
  head() {
    return {
      title: this.metatitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metadescription
        }
      ]
    }
  }
}
</script>
