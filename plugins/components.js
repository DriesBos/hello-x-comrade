import Vue from "vue"
import Page from "~/components/Page.vue"
import PageAbout from "~/components/PageAbout.vue"
import PageSynchronize from "~/components/PageSynchronize.vue"
import PageContact from "~/components/PageContact.vue"
import DynamicText from "~/components/DynamicText.vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import SliderItem from "~/components/SliderItem.vue"
import VueCarouselItem from "~/components/VueCarouselItem.vue"

Vue.component("blok-page", Page)
Vue.component("blok-page-about", PageAbout)
Vue.component("blok-page-synchronize", PageSynchronize)
Vue.component("blok-page-contact", PageContact)
Vue.component("blok-dynamic-text", DynamicText)
Vue.component("markdown-item", MarkdownItem)
Vue.component("slider", SliderItem)
Vue.component("vue-carousel-item", VueCarouselItem)
