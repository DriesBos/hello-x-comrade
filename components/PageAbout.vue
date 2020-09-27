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
            <markdown-item :input="blok.blok_3_text" />
            <span>&nbsp;/&nbsp;</span>
            <nuxt-link to="/contact" tag="a" class="hovered">Contact</nuxt-link>
          </div>
        </div>
        <div class="blok blok-five">
          <h1>colophon</h1>
          <div class="content-About_Contactblok">
            <p>Site developed by&nbsp;</p>
            <a
              href="https://www.driesbos.com"
              target="_blank"
              title="Site developed by Dries Bos"
              rel="noreferrer"
              class="hovered"
              >Dries Bos</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  props: {
    blok: Object
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  head() {
    return {
      title: this.blok.metadata.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.blok.metadata.description
        }
      ]
    }
  }
}
</script>
