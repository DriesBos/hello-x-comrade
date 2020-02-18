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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header-Desktop
  left: 0
  mix-blend-mode: difference
  transform: translate3d(0, -101%, 0)
  transition: transform $transition-desktop
  will-change: transform
  @media screen and ( max-width: $breakpoint-tablet)
    display: none
  &.toggle
    transform: translate3d(0, 0, 0)
  nav
    display: flex
    justify-content: space-between
    align-items: flex-end
    margin-left: var(--side-padding)
    margin-right: var(--side-padding)
    padding-top: var(--spacing-two)
    padding-bottom: var(--spacing-one)
    border-bottom: var(--border-bottom)
    ul
      li
        margin-right: 2em
        display: inline-block
        @media screen and ( max-width: $breakpoint-tablet)
          margin-right: 1.6em
      li:last-child
        padding-right: 0
    .logo
      height: 2.2em
</style>
