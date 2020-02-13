<template>
  <div>
    <NoSsr>
      <carousel
        ref="vueCarouselItem"
        class="carousel-Container"
        :per-page="1"
        :minSwipeDistance="8"
        :mouse-drag="true"
        :paginationEnabled="false"
        :speed="160"
      >
        <slide
          class="carousel-Slide"
          v-for="(image, index) in images"
          :key="index"
        >
          <img :src="image.filename" :alt="image.name" />
        </slide>
      </carousel>
      <div class="carousel-Navigation">
        <a
          class="carousel-Nav carousel-Nav_Prev"
          @click="SlideCarousel('prev')"
        />
        <a
          class="carousel-Nav carousel-Nav_Next"
          @click="SlideCarousel('next')"
        />
      </div>
    </NoSsr>
  </div>
</template>

<script>
export default {
  name: "VueCarouselItem",
  props: {
    images: Array
  },
  methods: {
    SlideCarousel(value) {
      const carousel = this.$refs["vueCarouselItem"]
      const currentPage = carousel.currentPage
      const pageCount = carousel.pageCount
      if (value == "prev") {
        currentPage != 0
          ? carousel.goToPage(currentPage - 1)
          : carousel.goToPage(pageCount - 1)
      } else {
        currentPage < pageCount - 1
          ? carousel.goToPage(currentPage + 1)
          : carousel.goToPage(0)
      }
    }
  }
}
</script>

<style lang="sass">
.carousel
  &-Container
    position: relative
    height: 100%
    .VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide
      position: relative
      height: 100% !important // Override dep default
  &-Slide
    img
      width: 100%
      height: 100%
      max-width: 100%
      max-height: 100%
      object-fit: cover
      object-position: center center
  &-Nav
    position: absolute
    top: 0
    bottom: 0
    width: 50vw
    &_Prev
      left: 0
    &_Next
      right: 0
    @media ( hover: none )
      display: none
</style>
