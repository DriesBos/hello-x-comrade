<template>
  <header class="header">
    <nav class="header-Desktop">
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
    <nav class="header-Mobile">
      <!-- prettier-ignore -->
      <transition name="headerMobileContent">
        <ul v-if="showHeaderMobile" class="header-Mobile_Content" @click="toggleMobileHeader">
          <nuxt-link class="hovered" to="/" tag="li">
            <h1>Home</h1>
          </nuxt-link>
          <nuxt-link class="hovered" to="/work" tag="li">
            <h1>Work</h1>
          </nuxt-link>
          <nuxt-link class="hovered" to="/about" tag="li">
            <h1>About</h1>
          </nuxt-link>
          <nuxt-link class="hovered" to="/services" tag="li">
            <h1>Services</h1>
          </nuxt-link>
          <nuxt-link class="hovered" to="/synchronize" tag="li">
            <h1>Synchronize</h1>
          </nuxt-link>
          <nuxt-link class="hovered" to="/contact" tag="li">
            <h1>Contact</h1>
          </nuxt-link>
        </ul>
      </transition>
      <!-- prettier-ignore -->
      <ul class="header-Mobile_Toggle">
        <transition name="headerMobileToggle" mode="out-in">
          <li v-if="showHeaderMobile" key="close" @click="toggleMobileHeader">close</li>
          <li key="open" else @click="toggleMobileHeader">menu</li>
        </transition>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      showHeaderMobile: false
    }
  },
  methods: {
    toggleMobileHeader() {
      return (this.showHeaderMobile = !this.showHeaderMobile)
    }
  }
}
</script>
