<template>
  <header>
    <nav class="desktop">
      <ul>
        <nuxt-link to="/work" tag="li">Work</nuxt-link>
        <nuxt-link to="/about" tag="li">About</nuxt-link>
        <nuxt-link to="/services" tag="li">Services</nuxt-link>
        <nuxt-link to="/synchronize" tag="li">Synchronize</nuxt-link>
        <nuxt-link to="/contact" tag="li">Contact</nuxt-link>
      </ul>
    </nav>
    <nav class="mobile">
      <ul>
        <li>menu</li>
      </ul>
    </nav>
    <nuxt-link to="/" tag="div">
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
