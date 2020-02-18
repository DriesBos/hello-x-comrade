<template>
  <section v-editable="blok" class="content-Contact">
    <markdown-item :input="blok.text" />
    <form name="contact" method="POST" data-netlify="true">
      <!-- <input type="hidden" name="form-name" value="ask-question" /> -->
      <input class="hovered" type="text" name="name" placeholder="name" />
      <input class="hovered" type="text" name="email" placeholder="email" />
      <input class="hovered" type="text" name="message" placeholder="message" />
      <div class="button-Send">
        <input class="hovered" type="submit" name="submit" value="send" />
        <!-- prettier-ignore -->
        <div
          class="button-Send_Arrow hovered"
          v-html="require('~/assets/images/arrow-right.svg?include')"
        />
      </div>
    </form>
    <nuxt-link to="/" tag="div" class="close hovered">
      <!-- prettier-ignore -->
      <div class="close-Icon" v-html="require('~/assets/images/close.svg?include')" />
      <p>close</p>
    </nuxt-link>
  </section>
</template>

<script>
import JQuery from "jquery"
let $ = JQuery

export default {
  props: {
    blok: Object
  },
  mounted() {
    $(".hovered").on("mouseover", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
  },
  destroyed() {
    $(".hovered").off("mouseover", this.changeCursor)
    $(".hovered").off("mouseleave", this.removeChangeCursor)
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
  },
  head() {
    return {
      title: this.blok.metadata.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.blok.metadata.description
        }
      ]
    }
  }
}
</script>
