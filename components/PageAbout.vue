<template>
  <section v-editable="blok" class="content-About">
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
          <div class="content-About_Contactblok">
            <markdown-item class="hovered" :input="blok.blok_3_text" />
            <span>&nbsp;/&nbsp;</span>
            <nuxt-link class="hovered" to="/contact" tag="a">Contact</nuxt-link>
          </div>
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
