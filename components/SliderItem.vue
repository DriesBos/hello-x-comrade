<template>
  <div class="slider-Container" @click="increment">
    <transition-group name="slider">
      <div
        v-for="(image, i) in images"
        :key="i"
        :image="image"
        :i="i"
        class="image-Slider"
      >
        <img :src="`https:${getCurrentImage().filename}`" class="image" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "SliderItem",
  props: {
    images: {}
  },
  data() {
    return {
      index: 0
    }
  },
  mounted() {
    // console.log(this.images[0])
  },
  methods: {
    increment() {
      if (this.index >= this.images.length - 1) {
        this.index = 0
      } else {
        this.index += 1
      }
    },
    decrement() {
      if (this.index > 0) {
        this.index -= 1
      } else {
        this.index = this.images.length - 1
      }
    },
    getCurrentImage() {
      return this.images[this.index]
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
