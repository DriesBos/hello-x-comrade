<template>
  <div>
    <NoSsr>
      <carousel
        ref="vueCarouselItem"
        class="carousel-Container"
        :per-page="1"
        :mouse-drag="false"
        :paginationEnabled="false"
        :speed="190"
      >
        <slide
          class="carousel-Slide"
          v-for="(image, index) in images"
          :key="index"
        >
          <img :src="image.filename" :alt="image.name" />
        </slide>
      </carousel>
    </NoSsr>
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
    <div class="carousel-Mobile_Navigation">
      <a
        class="carousel-Mobile_Nav carousel-Mobile_Nav_Prev"
        @click="SlideCarousel('prev')"
      >
        <img src="~/assets/images/arrow-right.svg"
      /></a>
      <a
        class="carousel-Mobile_Nav carousel-Mobile_Nav_Next"
        @click="SlideCarousel('next')"
      >
        <img src="~/assets/images/arrow-right.svg"
      /></a>
    </div>
  </div>
</template>

<script>
import JQuery from "jquery"
let $ = JQuery

export default {
  name: "VueCarouselItem",
  props: {
    images: Array
  },
  mounted() {
    $(".carousel-Nav_Prev").on("mousemove", this.changeCursorToPrev)
    $(".carousel-Nav_Next").on("mousemove", this.changeCursorToNext)
    $(".carousel-Nav_Prev").on("mouseleave", this.removeCursor)
    $(".carousel-Nav_Next").on("mouseleave", this.removeCursor)
  },
  methods: {
    SlideCarousel(value) {
      const carousel = this.$refs["vueCarouselItem"]
      const currentPage = carousel.currentPage
      const pageCount = carousel.pageCount
      let $cursor = $(".cursor")
      if (value == "prev") {
        if (currentPage != 0) {
          carousel.goToPage(currentPage - 1)
        } else {
          // carousel.goToPage(currentPage + 1)
          $cursor.removeClass("cursor-Prev")
        }
      } else {
        if (currentPage < pageCount - 1) {
          carousel.goToPage(currentPage + 1)
        } else {
          // carousel.goToPage(currentPage - 1)
          $cursor.removeClass("cursor-Next")
        }
      }
    },
    changeCursorToPrev() {
      const carousel = this.$refs["vueCarouselItem"]
      const currentPage = carousel.currentPage
      let $cursor = $(".cursor")
      if (currentPage != 0) {
        $cursor.addClass("cursor-Prev")
        $cursor.removeClass("cursor-Next")
      } else {
        $cursor.removeClass("cursor-Next")
        $cursor.removeClass("cursor-Prev")
      }
    },
    changeCursorToNext() {
      const carousel = this.$refs["vueCarouselItem"]
      const currentPage = carousel.currentPage
      const pageCount = carousel.pageCount
      let $cursor = $(".cursor")
      if (currentPage < pageCount - 1) {
        $cursor.addClass("cursor-Next")
        $cursor.removeClass("cursor-Prev")
      } else {
        $cursor.removeClass("cursor-Prev")
        $cursor.removeClass("cursor-Next")
      }
    },
    removeCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("cursor-Next")
      $cursor.removeClass("cursor-Prev")
    }
  }
}
</script>

<style lang="sass">
// Non scoped to reach & override dep defaults
.carousel
  &-Container
    position: relative
    height: 100%
    background-color: black
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
  &-Mobile
    &_Navigation
      position: absolute
      left: var(--side-padding)
      bottom: var(--side-padding)
      right: var(--side-padding)
      flex-wrap: nowrap
      z-index: 999
      // transform: translateY(-50%)
      mix-blend-mode: difference
      display: none
      @media ( hover: none )
        display: flex
      a
        width: 50vw
        img
          height: 1.5em
      a:first-child
        img
          transform: rotate(180deg)
      a:last-child
        text-align: right
</style>
