(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{350:function(t,e,n){"use strict";e.a={mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(e){"input"==e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):e.slugChanged||window.location.reload()}))}}},351:function(t,e,n){"use strict";var r=n(12),o=n(352)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(120)("find")},352:function(t,e,n){var r=n(49),o=n(119),c=n(50),d=n(35),f=n(353);t.exports=function(t,e){var n=1==t,l=2==t,m=3==t,h=4==t,v=6==t,_=5==t||v,y=e||f;return function(e,f,C){for(var w,k,x=c(e),j=o(x),A=r(f,C,3),D=d(j.length),I=0,W=n?y(e,D):l?y(e,0):void 0;D>I;I++)if((_||I in j)&&(k=A(w=j[I],I,x),t))if(n)W[I]=k;else if(k)switch(t){case 3:return!0;case 5:return w;case 6:return I;case 2:W.push(w)}else if(h)return!1;return v?-1:m||h?h:W}}},353:function(t,e,n){var r=n(354);t.exports=function(t,e){return new(r(t))(e)}},354:function(t,e,n){var r=n(15),o=n(190),c=n(3)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},355:function(t,e,n){"use strict";n.r(e);n(351);var r=n(350),o=n(28),c=n.n(o).a,d={mixins:[r.a],asyncData:function(t){return t.app.$storyapi.get("cdn/stories/",{version:"draft",starts_with:"work"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content form api"}))}))},data:function(){return{stories:{content:{}},projects:{},metadata:{},metatitle:"",metadescription:""}},mounted:function(){window.scrollTo(0,0),this.arrayLoop(this.stories),this.assignData(),c(".hovered").on("mouseover",this.changeCursor),c(".hovered").on("mouseleave",this.removeChangeCursor)},methods:{arrayLoop:function(t){this.projects=t.filter((function(t){if("page-project"===t.content.component)return!0})),this.metadata=t.find((function(t){if("page-work"===t.content.component)return!0}))},changeCursor:function(){c(".cursor").addClass("hovers-container")},removeChangeCursor:function(){c(".cursor").removeClass("hovers-container")},assignData:function(){this.metatitle=this.metadata.content.metadata.title,this.metadescription=this.metadata.content.metadata.description}},head:function(){return{title:this.metatitle,meta:[{hid:"description",name:"description",content:this.metadescription}]}}},f=n(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("section",{staticClass:"content-Work"},[n("ul",{staticClass:"hovered"},t._l(t.projects,(function(e){return n("li",{key:e.content.id,class:e.content.id,attrs:{id:e.content.id}},[n("nuxt-link",{staticClass:"hovered",attrs:{to:e.full_slug}},[n("h1",[t._v("\n            "+t._s(e.content.title)+"\n            "),n("span",{staticClass:"content-Work_Slash"},[t._v("/")])]),t._v(" "),n("p",{staticClass:"content-Work_Year"},[t._v(" /"+t._s(e.content.year)+" ")])]),t._v(" "),n("picture",{staticClass:"image"},[n("source",{attrs:{type:"image/webp",srcset:t._f("transformImage")(e.content.cover_image,"1400x0/filters:format(webp)")}}),t._v(" "),n("source",{attrs:{type:"image/png",srcset:t._f("transformImage")(e.content.cover_image,"1400x0/filters:format(png)")}}),t._v(" "),n("img",{attrs:{loading:"lazy","data-src":t._f("transformImage")(e.content.cover_image,"1400x0")}})])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);