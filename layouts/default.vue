<template>
  <main>
    <the-header />
    <nuxt />
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue"

export default {
  components: {
    "the-header": TheHeader
  }
}
</script>
