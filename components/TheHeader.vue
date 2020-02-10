<template>
  <header class="header header-Desktop">
    <nav>
      <!-- prettier-ignore -->
      <ul>
        <nuxt-link class="hovered" to="/work" tag="li">Work</nuxt-link>
        <nuxt-link class="hovered" to="/about" tag="li">About</nuxt-link>
        <nuxt-link class="hovered" to="/services" tag="li">Services</nuxt-link>
        <nuxt-link class="hovered" to="/synchronize" tag="li">Synchronize</nuxt-link>
        <nuxt-link class="hovered" to="/contact" tag="li">Contact</nuxt-link>
      </ul>
      <!-- prettier-ignore -->
      <nuxt-link class="hovered" to="/" tag="div">
        <div class="svg logo" v-html="require('~/assets/images/logo.svg?include')" />
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>
