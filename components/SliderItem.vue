<template>
  <div class="slider-Container">
    <!-- prettier-ignore -->
    <div v-for="(image, i) in images" :key="image.name" class="image-Slider">
      <!-- <img :data-src="currentImage | resize('1680x0')" @click="next" class="image" /> -->
      <p>{{ image[i] }} TEST</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderItem",
  props: {
    images: Array
  },
  mounted() {
    console.log("IMAGES", this.images)
  }
}
</script>
