<template>
  <div class="slider-Container" @click="increment">
    <transition-group>
      <!-- prettier-ignore -->
      <div v-for="number in [index]" :key="number" class="image-Slider">
        <picture class="image">
          <source
            type="image/webp"
            :srcset="currentImage | transformImage('1680x0/filters:format(webp)')"
          />
          <source
            type="image/png"
            :srcset="currentImage | transformImage( '1680x0/filters:format(png)')"
          />
          <img loading="lazy" :data-src="currentImage | transformImage('1680x0')" />
        </picture>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "SliderItem",
  props: {
    images: Array
  },
  data() {
    return {
      index: 0
    }
  },
  computed: {
    currentImage: function() {
      return this.getCurrentImage()
    }
  },
  mounted() {},
  methods: {
    increment() {
      if (this.index >= this.images.length - 1) {
        this.index = 0
      } else {
        this.index += 1
      }
      console.log("INCREMENT", this.index, this.currentImage)
    },
    decrement() {
      if (this.index > 0) {
        this.index -= 1
      } else {
        this.index = this.images.length - 1
      }
    },
    getCurrentImage() {
      return this.images[this.index].filename
    }
  }
}
</script>

<style lang="sass">
.slider-Container
  position: relative
  z-index: 995
  height: 100%
  cursor: pointer
.image-Slider
  display: flex
  justify-content: center
  align-items: center
  // position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  .image
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
    img
      max-width: 100%
      max-height: 100%
.slider-enter-active, .slider-leave-active
  transition: all 2s ease
.slider-enter, .slider-leave-to
  opacity: 0
</style>
