<template>
  <div class="slider-Container" @click="next">
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
    <!-- prettier-ignore -->
    <div class="slider-Navigation">
      <a v-if="imageCount > 1" @click="previous" class="slider-Nav slider-Nav_Prev">
        <div class="icon arrow-small" v-html="require('~/assets/images/arrow-small.svg?include')" />
      </a>
      <a v-if="imageCount > 1" @click="next" class="slider-Nav slider-Nav_Next">
        <div class="icon arrow-small" v-html="require('~/assets/images/arrow-small.svg?include')" />
      </a>
    </div>
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
    },
    imageCount: function() {
      return this.images.filter(image => image).length
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
    next: function() {
      this.increment()
      while (!this.getCurrentImage()) {
        this.increment()
      }
    },
    previous: function() {
      this.decrement()
      while (!this.getCurrentImage()) {
        this.decrement()
      }
    },
    getCurrentImage() {
      return this.images[this.index].filename
    }
  }
}
</script>

<style lang="sass">
.slider
  &-Container
    position: relative
    z-index: 995
    height: 100%
    cursor: pointer
  &-Nav
    position: absolute
    padding: var(--spacing-two)
    top: 50%
    transform: translateY(-50%)
    &_Prev
      left: 0
    &_Next
      right: 0
      svg
        transform: rotate(180deg)


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
