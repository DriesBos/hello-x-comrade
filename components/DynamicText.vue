<template>
  <div v-editable="blok" class="dynamic-Text">
    <markdown-item :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.dynamic-Text
  padding-left: var(--side-padding)
  padding-right: var(--side-padding)
</style>
