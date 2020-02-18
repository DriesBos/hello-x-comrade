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
          <picture class="image">
            <source
              type="image/webp"
              :srcset="post.content.cover_image | transformImage('960x0/filters:format(webp)')"
            />
            <source
              type="image/png"
              :srcset="post.content.cover_image | transformImage( '960x0/filters:format(png)')"
            />
            <img :data-src="post.content.cover_image | transformImage('960x0')" />
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
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: "draft",
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
    window.scrollTo(0, 0)
    this.arrayLoop(this.stories)
    this.assignData()
    $(".hovered").on("mouseover", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
  },
  methods: {
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
