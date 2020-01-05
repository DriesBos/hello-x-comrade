<template>
  <div v-editable="blok">
    <markdown-item :input="blok.text" />
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="message" />
      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
export default {
  props: ["blok"]
}
</script>
