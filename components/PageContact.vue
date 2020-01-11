<template>
  <section v-editable="blok" class="content-contact">
    <markdown-item :input="blok.text" />
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="message" />
      <div class="button-send">
        <input type="submit" value="Send" />
        <!-- prettier-ignore -->
        <div class="svg arrow" v-html="require('~/assets/images/arrow-right.svg?include')" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: ["blok"]
}
</script>
