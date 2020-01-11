<template>
  <div class="dynamic-text" v-editable="blok">
    <markdown-item :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: ["blok"]
}
</script>
