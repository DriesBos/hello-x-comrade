<template>
  <section v-editable="blok" class="content-about textBlock">
    <markdown-item :input="blok.main_text" class="blok blok-one" />
    <div class="second">
      <div class="blok blok-two">
        <h1>{{ blok.blok_1_title }}</h1>
        <markdown-item :input="blok.blok_1_text" />
      </div>
      <div class="second-two">
        <div class="blok blok-three">
          <h1>{{ blok.blok_2_title }}</h1>
          <markdown-item :input="blok.blok_2_text" />
        </div>
        <div class="blok blok-four">
          <h1>{{ blok.blok_3_title }}</h1>
          <markdown-item :input="blok.blok_3_text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
