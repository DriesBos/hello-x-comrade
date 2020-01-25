<template>
  <header>
    <nav class="desktop">
      <ul>
        <nuxt-link class="hovered" to="/work" tag="li">Work</nuxt-link>
        <nuxt-link class="hovered" to="/about" tag="li">About</nuxt-link>
        <nuxt-link class="hovered" to="/services" tag="li">Services</nuxt-link>
        <nuxt-link class="hovered" to="/synchronize" tag="li"
          >Synchronize</nuxt-link
        >
        <nuxt-link class="hovered" to="/contact" tag="li">Contact</nuxt-link>
      </ul>
    </nav>
    <nav class="mobile">
      <ul>
        <li>menu</li>
      </ul>
    </nav>
    <nuxt-link class="hovered" to="/" tag="div">
      <!-- prettier-ignore -->
      <div class="svg logo" v-html="require('~/assets/images/logo.svg?include')" />
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>
