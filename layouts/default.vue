<template>
  <main :class="{ light: lightTheme }">
    <the-header :class="{ toggle: showHeader, isClose: showClose }" />
    <!-- prettier-ignore -->
    <transition name="headerMobileContent">
      <the-header-mobile v-show="showHeaderMobile" @clicked="toggleHeaderMobile" />
    </transition>
    <!-- prettier-ignore -->
    <the-header-toggle :toggled="showHeaderMobile" @clicked="toggleHeaderMobile" />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <div class="cursor">
      <img class="icon-Prev" src="~/assets/images/arrow-medium.svg" />
      <img class="icon-Next" src="~/assets/images/arrow-medium.svg" />
    </div>
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue"
import TheHeaderMobile from "~/components/TheHeaderMobile.vue"
import TheHeaderToggle from "~/components/TheHeaderToggle.vue"
import gsap from "gsap"
import JQuery from "jquery"
let $ = JQuery

export default {
  components: {
    "the-header": TheHeader,
    "the-header-mobile": TheHeaderMobile,
    "the-header-toggle": TheHeaderToggle
  },
  data() {
    return {
      showHeader: true,
      showClose: false,
      showHeaderMobile: false,
      lightTheme: false,
      lastScrollPosition: 0
    }
  },
  watch: {
    $route() {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path === "/contact" || this.$route.name === "work-slug") {
        this.showHeader = false
        this.showClose = true
      } else {
        this.showHeader = true
        this.showClose = false
      }
    }
  },
  mounted() {
    this.customCursor()
    this.routeCheck()
    this.themeCheck()
    window.addEventListener("scroll", this.toggleHEaderOnScroll)
    document.addEventListener("mouseleave", this.mouseLeftDocument)
    document.addEventListener("mouseenter", this.mouseEntersDocument)
    $(".hovered").on("mouseover", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.toggleHEaderOnScroll)
    document.removeEventListener("mouseleave", this.mouseLeftDocument)
    document.removeEventListener("mouseenter", this.mouseEntersDocument)
    $(".hovered").off("mouseover", this.changeCursor)
    $(".hovered").off("mouseleave", this.removeChangeCursor)
  },
  methods: {
    toggleHeaderMobile() {
      this.showHeaderMobile = !this.showHeaderMobile
    },
    customCursor() {
      let $cursor = $(".cursor")
      function moveCursor(e) {
        gsap.to($cursor, 0.1, {
          left: e.clientX,
          top: e.clientY
        })
      }
      $(window).on("mousemove", moveCursor)
    },
    changeCursor() {
      let $cursor = $(".cursor")
      $cursor.addClass("hovers-container")
    },
    removeChangeCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("hovers-container")
    },
    toggleHEaderOnScroll() {
      // https://medium.com/@Taha_Shashtari/hide-navbar-on-scroll-down-in-vue-fb85acbdddfe
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return
      }
      if (this.$route.path === "/contact" || this.$route.name === "work-slug")
        return (this.showHeader = false)
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    mouseLeftDocument() {
      this.showHeader = false
    },
    mouseEntersDocument() {
      if (this.$route.path === "/contact" || this.$route.name === "work-slug") {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    },
    routeCheck() {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path === "/contact" || this.$route.name === "work-slug") {
        this.showHeader = false
        this.showClose = true
      } else {
        this.showHeader = true
        this.showClose = false
      }
    }
  }
}
</script>
