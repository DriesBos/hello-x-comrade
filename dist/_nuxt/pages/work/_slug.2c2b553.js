(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{499:function(e,t,o){"use strict";t.a={mounted:function(){var e=this;this.$storybridge.on(["input","published","change"],(function(t){"input"==t.action?t.story.id===e.story.id&&(e.story.content=t.story.content):t.slugChanged||window.location.reload()}))}}},501:function(e,t,o){"use strict";o.r(t);var n=o(499),r=o(63),c=o.n(r).a,d={mixins:[n.a],scrollToTop:!0,asyncData:function(e){var t=e.query._storyblok||e.isDev?"draft":"published",o="cdn/stories/work/".concat(e.params.slug);return e.app.$storyapi.get(o,{version:t}).then((function(e){return e.data})).catch((function(t){t.response?(console.error(t.response.data),e.error({statusCode:t.response.status,message:t.response.data})):(console.error(t),e.error({statusCode:404,message:"Failed to receive content form api"}))}))},data:function(){return{story:{content:{}}}},mounted:function(){this.measureHeight(),this.removeChangeCursor(),window.addEventListener("resize",this.measureHeight),window.addEventListener("scroll",this.getSlideshowPosition),document.addEventListener("keydown",this.backOnEscape),c(".hovered").on("mouseenter",this.changeCursor),c(".hovered").on("mouseleave",this.removeChangeCursor)},destroyed:function(){window.removeEventListener("resize",this.measureHeight),window.removeEventListener("scroll",this.getSlideshowPosition),document.removeEventListener("keydown",this.backOnEscape),c(".hovered").off("mouseenter",this.changeCursor),c(".hovered").off("mouseleave",this.removeChangeCursor)},methods:{backOnEscape:function(e){if(27===e.keyCode){var t=c(".cursor");t.removeClass("cursor-Prev"),t.removeClass("cursor-Next"),this.$router.go(-1)}},measureHeight:function(){var element=document.getElementById("worksingle-Text"),image=document.getElementById("worksingle-Slider"),e=element.offsetHeight;image.style.marginTop="".concat(e,"px")},changeCursor:function(){var e=c(".cursor");e.addClass("hovers-container"),e.removeClass("cursor-Prev"),e.removeClass("cursor-Next")},removeChangeCursor:function(){c(".cursor").removeClass("hovers-container")}},head:function(){return{title:this.story.content.metadata.title,meta:[{hid:"description",name:"description",content:this.story.content.metadata.description}]}}},l=o(3),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("section",{staticClass:"content-Worksingle",attrs:{id:"worksingle-Page"}},[n("div",{staticClass:"content-Worksingle_Text",attrs:{id:"worksingle-Text"}},[n("h1",[e._v(e._s(e.story.content.title))]),e._v(" "),n("markdown-item",{attrs:{input:e.story.content.text}})],1),e._v(" "),n("no-ssr",[n("div",{staticClass:"content-Worksingle_Slider slider-blok",attrs:{id:"worksingle-Slider"}},[n("vue-carousel-item",{staticClass:"horizontal",attrs:{images:e.story.content.images}}),e._v(" "),n("vue-carousel-item",{staticClass:"vertical",attrs:{images:e.story.content.images_mobile}})],1)])],1),e._v(" "),n("nuxt-link",{staticClass:"close hovered",attrs:{to:"/work",tag:"div"}},[n("div",{staticClass:"close-Icon",domProps:{innerHTML:e._s(o(248))}}),e._v(" "),n("p",[e._v("close")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);