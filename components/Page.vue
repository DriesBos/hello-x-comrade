<template>
  <section v-editable="blok">
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </section>
</template>

<script>
export default {
  props: ["blok"]
}
</script>
