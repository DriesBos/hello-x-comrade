import Vue from "vue"
import Page from "~/components/Page.vue"
import PageAbout from "~/components/PageAbout.vue"
import PageContact from "~/components/PageContact.vue"
import Grid from "~/components/Grid.vue"
import DynamicText from "~/components/DynamicText.vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import SliderItem from "~/components/SliderItem.vue"

Vue.component("blok-page", Page)
Vue.component("blok-page-about", PageAbout)
Vue.component("blok-page-contact", PageContact)
Vue.component("blok-grid", Grid)
Vue.component("blok-dynamic-text", DynamicText)
Vue.component("markdown-item", MarkdownItem)
Vue.component("slider", SliderItem)
