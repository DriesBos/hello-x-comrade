(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(t,o,e){"use strict";e.r(o);var n={asyncData:function(t){var o=!1;(t.query._storyblok||t.isDev||"undefined"!=typeof window&&window.localStorage.getItem("_storyblok_draft_mode"))&&("undefined"!=typeof window&&(window.localStorage.setItem("_storyblok_draft_mode","1"),window.location==window.parent.location&&window.localStorage.removeItem("_storyblok_draft_mode")),o=!0);var e=o?"draft":"published",path="/"==t.route.path?"home":t.route.path;return function(t){var o=t.api,e=t.cacheVersion,n=t.errorCallback,r=t.version,path=t.path;return o.get("cdn/stories/".concat(path),{version:r,cv:e}).then((function(t){return t.data})).catch((function(t){t.response?(console.error(t.response.data),n({statusCode:t.response.status,message:t.response.data})):(console.error(t),n({statusCode:404,message:"Failed to receive content form api"}))}))}({version:e,api:t.app.$storyapi,cacheVersion:t.store.state.cacheVersion,errorCallback:t.error,path:path})},data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(o){"input"==o.action?o.story.id===t.story.id&&(t.story.content=o.story.content):o.slugChanged||window.location.reload()}))}},r=e(2),component=Object(r.a)(n,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"content"},[this.story.content.component?o(this._f("dashify")(this.story.content.component),{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);o.default=component.exports}}]);