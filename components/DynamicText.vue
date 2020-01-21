<template>
  <div v-editable="blok" class="dynamic-text">
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
