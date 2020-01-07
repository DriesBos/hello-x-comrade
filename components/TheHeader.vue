<template>
  <header>
    <nav>
      <ul>
        <nuxt-link to="/work" tag="li">Work</nuxt-link>
        <nuxt-link to="/about" tag="li">About</nuxt-link>
        <nuxt-link to="/services" tag="li">Services</nuxt-link>
        <nuxt-link to="/synchronize" tag="li">Synchronize</nuxt-link>
        <nuxt-link to="/contact" tag="li">Contact</nuxt-link>
      </ul>
    </nav>
    <nuxt-link to="/" tag="div" class="logo">
      <div v-html="require('~/assets/images/logo.svg?include')" />
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>
