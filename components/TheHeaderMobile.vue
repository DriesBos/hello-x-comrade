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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header-Mobile
  top: -1px
  left: 0
  right: 0
  bottom: 0
  padding-top: var(--top-padding)
  padding-left: var(--side-padding)
  padding-right: var(--side-padding)
  padding-bottom: var(--bottom-padding)
  background-color: white
  color: black
  border-top: 1px solid white
  overflow-y: auto
  h1, h2, h3, p, a
    color: black
  ul
    position: relative
    width: 100%
    display: block
    height: 100%
    display: flex
    flex-direction: column
    li:first-child
      margin-top: auto // Pushes content down
    h1
      line-height: 1.5
      display: inline
  @media screen and ( min-width: $breakpoint-tablet)
    display: none
</style>
