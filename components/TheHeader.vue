<template>
  <header>
    <nav>
      <ul>
        <nuxt-link to="/" tag="li">Home</nuxt-link>
        <nuxt-link to="/about" tag="li">About</nuxt-link>
        <nuxt-link to="/services" tag="li">Services</nuxt-link>
        <nuxt-link to="/synchronize" tag="li">Synchronize</nuxt-link>
        <nuxt-link to="/contact" tag="li">Contact</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>
