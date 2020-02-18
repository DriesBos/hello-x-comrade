<template>
  <section v-editable="blok" class="content-Contact">
    <markdown-item :input="blok.text" />
    <form name="contact" method="POST" data-netlify="true">
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="message" placeholder="message" />
      <div class="button-Send">
        <input type="submit" value="send" />
        <div
          class="button-Send_Arrow hovered"
          v-html="require('~/assets/images/arrow-right.svg?include')"
        />
      </div>
    </form>

    <!-- <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"/></label>
      </p>
      <p>
        <label
          >Your Role:
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label
        >
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form> -->
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
