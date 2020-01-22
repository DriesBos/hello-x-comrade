<template>
  <main>
    <the-header :class="{ toggle: showHeader, close: showClose }" />
    <nuxt />
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue"

export default {
  components: {
    "the-header": TheHeader
  },
  data() {
    return {
      showHeader: true,
      showClose: false,
      lastScrollPosition: 0
    }
  },
  watch: {
    $route() {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path === "/contact" || this.$route.name === "work-slug") {
        return (this.showHeader = false)
      } else {
        return (this.showHeader = true)
      }
    }
  },
  methods: {
    onScroll() {
      // https://medium.com/@Taha_Shashtari/hide-navbar-on-scroll-down-in-vue-fb85acbdddfe
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return
      }
      if (this.$route.path === "/contact" || this.$route.name === "work-slug")
        return (this.showHeader = false)
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>
