<template>
  <section v-editable="blok" class="content-Contact">
    <markdown-item :input="blok.text" />
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="message" />
      <div class="button-Send">
        <input type="submit" value="Send" />
        <!-- prettier-ignore -->
        <div class="button-Send_Arrow" v-html="require('~/assets/images/arrow-right.svg?include')" />
      </div>
    </form>
    <nuxt-link to="/" tag="div" class="close">
      <!-- prettier-ignore -->
      <div class="close-Icon" v-html="require('~/assets/images/close.svg?include')" />
      <p>close</p>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
