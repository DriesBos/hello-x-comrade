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
