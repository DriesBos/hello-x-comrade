<template>
  <div class="content">
    <section class="content-Work">
      <ul>
        <!-- prettier-ignore -->
        <li
          v-for="post in stories"
          :id="post.content.id"
          :key="post.content.id"
          :class="post.content.id"
        >
          <nuxt-link class="hovered" :to="post.full_slug">
            <h1>
              {{ post.content.title }}
              <span class="mobile">/</span>
            </h1>
            <p class="desktop">/{{ post.content.year }}</p>
          </nuxt-link>
          <picture class="image">
            <source
              type="image/webp"
              :srcset="post.content.cover_image | transformImage('1400x0/filters:format(webp)')"
            />
            <source
              type="image/png"
              :srcset="post.content.cover_image | transformImage( '1400x0/filters:format(png)')"
            />
            <img loading="lazy" :data-src="post.content.cover_image | transformImage('1400x0')" />
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
  scrollToTop: true,
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
      stories: { content: {} }
    }
  },
  mounted() {
    $(".hovered").on("mouseover", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
  },
  methods: {
    changeCursor() {
      let $cursor = $(".cursor")
      $cursor.addClass("hovers-container")
    },
    removeChangeCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("hovers-container")
    }
  }
}
</script>
