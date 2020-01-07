<template>
  <section v-editable="blok">
    <markdown-item :input="blok.main_text" />
    <h1>{{ blok.blok_1_title }}</h1>
    <markdown-item :input="blok.blok_1_text" />
    <h1>{{ blok.blok_2_title }}</h1>
    <markdown-item :input="blok.blok_2_text" />
    <h1>{{ blok.blok_3_title }}</h1>
    <markdown-item :input="blok.blok_3_text" />
  </section>
</template>

<script>
export default {
  props: ["blok"]
}
</script>
