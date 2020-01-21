<template>
  <div class="slider-Container">
    <div v-for="image in images" :key="image.filename" class="image-Slider">
      <img :src="`https:${image.filename}`" class="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderItem",
  props: {
    images: {}
  }
}
</script>

<style lang="sass">
.slider-Container
  position: relative
  z-index: 995
  height: 100%
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
// .image-Slider_Close
//   position: absolute
//   top: 0
//   left: 0
// .image-Slider_Nav
//   display: block
//   position: fixed
//   z-index: 999
//   top: 50%
//   transform: translateY(-50%)
//   cursor: pointer
// .image-Slider_Nav, .image-Slider_Close
//   img
//     background: rgba(255,255,255,0.5)
//     -webkit-backdrop-filter: saturate(180%) blur(2px)
//     backdrop-filter: saturate(180%) blur(2px)
// .image-Slider_Prev
//   left: 0
// .image-Slider_Next
//   right: 0
// .slider-enter-active, .slider-leave-active
//   transition: all .2s ease
// .slider-enter, .slider-leave-to
//   opacity: 0
</style>
