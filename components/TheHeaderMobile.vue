<template>
  <header class="header header-Mobile">
    <!-- prettier-ignore -->
    <transition name="headerMobileContent">
      <nav v-if="showHeaderMobile" class="header-Mobile_Content" @click="toggleMobileHeader">
        <ul>
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
      </nav>
    </transition>
    <!-- prettier-ignore -->
    <ul class="header-Mobile_Toggle hovered">
      <transition name="headerMobileToggle" mode="out-in">
        <li v-if="showHeader === false" key="back">
          <nuxt-link to="/work" tag="span">close</nuxt-link>
        </li>
        <li
          v-else-if="showHeader === true && showHeaderMobile === true"
          key="close"
          @click="toggleMobileHeader"
        >close</li>
        <li v-else key="open" @click="toggleMobileHeader">menu</li>
      </transition>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      showHeaderMobile: false,
      showHeader: true
    }
  },
  watch: {
    $route() {
      if (this.$route.name === "work-slug") {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  mounted() {
    this.routeCheck()
  },
  methods: {
    toggleMobileHeader() {
      return (this.showHeaderMobile = !this.showHeaderMobile)
    },
    routeCheck() {
      if (this.$route.name === "work-slug") {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  }
}
</script>
