<template>
  <header class="header header-Toggle">
    <!-- prettier-ignore -->
    <ul class="header-Mobile_Toggle hovered">
      <transition name="headerMobileToggle" mode="out-in">
        <li v-if="showToggle === false" key="back">
          <nuxt-link to="/work" tag="span">close</nuxt-link>
        </li>
        <li v-if="toggled" key="close" @click="onClick()">close</li>
        <li v-else key="open" @click="onClick()">menu</li>
      </transition>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    toggled: Boolean
  },
  data() {
    return {
      showToggle: true
    }
  },
  watch: {
    $route() {
      if (this.$route.name === "work-slug") {
        this.showToggle = false
      } else {
        this.showToggle = true
      }
    }
  },
  mounted() {
    this.routeCheck()
  },
  methods: {
    onClick() {
      this.$emit("clicked")
    },
    routeCheck() {
      if (this.$route.name === "work-slug") {
        this.showToggle = false
      } else {
        this.showToggle = true
      }
    }
  }
}
</script>
