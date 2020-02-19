<template>
  <div>
    <client-only>
      <carousel
        ref="vueCarouselItem"
        class="carousel-Container"
        :per-page="1"
        :mouse-drag="false"
        :pagination-enabled="false"
        :speed="190"
      >
        <!-- prettier-ignore -->
        <slide v-for="(image, index) in images" :key="index" class="carousel-Slide">
          <picture>
            <source
              type="image/webp"
              :srcset="
                transformImage(image.filename, '2880x0/filters:format(webp)')
              "
            />
            <source
              type="image/png"
              :srcset="
                transformImage(image.filename, '2880x0/filters:format(png)')
              "
            />
            <img :src="transformImage(image.filename, '2880x0')" :alt="image.name" />
          </picture>
        </slide>
      </carousel>
    </client-only>
    <div class="carousel-Navigation">
      <a
        class="carousel-Nav carousel-Nav_Prev"
        :class="{ active: iconPrev }"
        @click="slideCarousel('prev')"
      />
      <a
        class="carousel-Nav carousel-Nav_Next"
        :class="{ active: iconNext }"
        @click="slideCarousel('next')"
      />
    </div>
    <div class="carousel-Mobile_Navigation">
      <a
        class="carousel-Mobile_Nav carousel-Mobile_Nav_Prev"
        :class="{ active: iconPrev }"
        @click="slideCarousel('prev')"
      >
        <img src="~/assets/images/arrow-medium.svg" />
      </a>
      <a
        class="carousel-Mobile_Nav carousel-Mobile_Nav_Next"
        :class="{ active: iconNext }"
        @click="slideCarousel('next')"
      >
        <img src="~/assets/images/arrow-medium.svg" />
      </a>
    </div>
  </div>
</template>

<script>
// SIZES WORK LIST: 1668, 1440, 1280, 960, 800, 690
// WIDTHS DESK: 2880/1440, 2560/1280, 1920/960, 1366/683
// WIDTHS TABLET: 1668/834, 1280/640, 1024/512, 800/400
// Widths Mobile: 900, 640,

import JQuery from "jquery"
let $ = JQuery

export default {
  name: "VueCarouselItem",
  props: {
    images: Array
  },
  data() {
    return {
      iconPrev: false,
      iconNext: true
    }
  },
  mounted() {
    $(".carousel-Nav_Prev").on("mouseenter", this.changeCursorToPrev)
    $(".carousel-Nav_Next").on("mouseenter", this.changeCursorToNext)
    $(".carousel-Nav_Prev").on("mouseleave", this.removeCursor)
    $(".carousel-Nav_Next").on("mouseleave", this.removeCursor)
    document.addEventListener("click", this.iconChange)
    document.addEventListener("touchstart", this.iconChange)
    document.addEventListener("touchmove", this.iconChange)
    document.addEventListener("keydown", this.keyNavigation)
  },
  destroyed() {
    $(".carousel-Nav_Prev").off("mouseenter", this.changeCursorToPrev)
    $(".carousel-Nav_Next").off("mouseenter", this.changeCursorToNext)
    $(".carousel-Nav_Prev").off("mouseleave", this.removeCursor)
    $(".carousel-Nav_Next").off("mouseleave", this.removeCursor)
    document.removeEventListener("click", this.iconChange)
    document.removeEventListener("touchstart", this.iconChange)
    document.removeEventListener("touchmove", this.iconChange)
    document.removeEventListener("keydown", this.keyNavigation)
  },
  methods: {
    keyNavigation(event) {
      if (event.keyCode === 39) {
        this.slideCarousel("next")
      } else if (event.keyCode === 37) {
        this.slideCarousel("prev")
      }
    },
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""

      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    },
    iconChange() {
      const carousel = this.$refs["vueCarouselItem"]
      const currentPage = carousel.currentPage
      const pageCount = carousel.pageCount
      if (currentPage == 0) {
        this.iconPrev = false
      } else {
        this.iconPrev = true
      }
      if (currentPage < pageCount - 1) {
        this.iconNext = true
      } else {
        this.iconNext = false
      }
    },
    slideCarousel(value) {
      const carousel = this.$refs["vueCarouselItem"]
      const currentPage = carousel.currentPage
      const pageCount = carousel.pageCount
      if (value == "prev") {
        if (currentPage != 0) {
          carousel.goToPage(currentPage - 1)
        }
      } else {
        if (currentPage < pageCount - 1) {
          carousel.goToPage(currentPage + 1)
        }
      }
    },
    changeCursorToPrev() {
      let $cursor = $(".cursor")
      $cursor.addClass("cursor-Prev")
      $cursor.removeClass("cursor-Next")
    },
    changeCursorToNext() {
      let $cursor = $(".cursor")
      $cursor.addClass("cursor-Next")
      $cursor.removeClass("cursor-Prev")
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
    picture, img
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
    opacity: 0
    transition: opacity .19s ease
    z-index: +1
    &_Prev
      left: 0
      display: none
      &.active
        display: block
    &_Next
      right: 0
      display: none
      &.active
        display: block
  &-Mobile
    &_Navigation
      position: absolute
      left: var(--side-padding)
      top: 50%
      right: var(--side-padding)
      flex-wrap: nowrap
      transform: translateY(-50%)
      mix-blend-mode: difference
      display: none
      z-index: +1
      @media ( hover: none )
        display: flex
      a
        width: 50vw
        img
          height: 1em
      a:last-child
        text-align: right
        img
          transform: rotate(180deg)
      img
        padding-left: env(safe-area-inset-left)
        padding-right: env(safe-area-inset-right)
    &_Nav_Prev, &_Nav_Next
      opacity: 0
      transition: opacity .19s ease
      &.active
        opacity: 1
</style>
