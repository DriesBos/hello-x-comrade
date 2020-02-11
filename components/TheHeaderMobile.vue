<template>
  <header class="header header-Mobile" @click="onClick()">
    <ul class="header-Mobile_Content">
      <nuxt-link to="/" tag="li">
        <h1 class="hovered">Home</h1>
      </nuxt-link>
      <nuxt-link to="/work" tag="li">
        <h1 class="hovered">Work</h1>
      </nuxt-link>
      <nuxt-link to="/about" tag="li">
        <h1 class="hovered">About</h1>
      </nuxt-link>
      <nuxt-link to="/services" tag="li">
        <h1 class="hovered">Services</h1>
      </nuxt-link>
      <nuxt-link to="/synchronize" tag="li">
        <h1 class="hovered">Synchronize</h1>
      </nuxt-link>
      <nuxt-link to="/contact" tag="li">
        <h1 class="hovered">Contact</h1>
      </nuxt-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    onClick() {
      this.$emit("clicked")
    }
  }
}
</script>
