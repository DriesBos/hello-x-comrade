<template>
  <div class="content">
    <section class="content-work textBlock">
      <ul class="list-projects_images desktop">
        <!-- prettier-ignore -->
        <li v-for="post in stories" :id="post.content.id" :key="post.content.id">
          <nuxt-link :to="post.full_slug" tag="div">
            <!-- <picture class="image">
          <source type="image/webp" :srcset="post.content.cover_image | transformImage('1400x0/filters:format(webp)')">
          <source type="image/png" :srcset="post.content.cover_image | transformImage( '1400x0/filters:format(png)')">
          <img loading="lazy" :data-src="post.content.cover_image | transformImage('1400x0')" />
            </picture>-->
          </nuxt-link>
        </li>
      </ul>
      <ul class="list-projects_textual">
        <!-- prettier-ignore -->
        <li v-for="post in stories" :id="post.content.id" :key="post.content.id">
          <nuxt-link :to="post.full_slug" tag="div" class="text">
            <h2>
              {{ post.content.title }}
              <span class="mobile">/</span>
            </h2>
            <p class="desktop">/{{ post.content.year }}</p>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

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
      stories: { content: {} }
    }
  },
  mounted() {
    // console.log(this.stories)
  }
}
</script>
