webpackJsonp([1],{0:function(t,a){},"1e2F":function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i=(n("bA7O"),n("1e2F"),{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",{attrs:{id:"header-nav"}},[a("nav",[a("ul",[a("li",[a("router-link",{attrs:{to:"/vallila"}},[this._v(" Vallila")])],1),this._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[this._v("Pitäjänmäki")])],1)])])]),this._v(" "),a("router-view")],1)},staticRenderFns:[]});var s=n("VU/8")({name:"app"},i,!1,function(t){n("uI2K")},null,null).exports,r=n("/ocq"),l={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container-fluid"},[n("header",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("marquee",{staticClass:"wow"},[n("h1",[t._v("Pitäjänmäen lounasravintolat")])])],1)]),t._v(" "),t._m(0),t._v(" "),n("main",{staticClass:"row"},t._l(t.menus,function(a,e){return n("article",{staticClass:"col col-12 col-sm-6 col-lg-4"},[n("div",{staticClass:"card"},[n("h3",[t._v(t._s(a.name))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(a.html)}})])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("small",[this._v("Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti. Virheitä sattuu.")])])}]};var o=n("VU/8")({data:function(){return{menus:[],restaurants:["taste","valimotie9","variantti","kanttiini","blancco","factory"]}},beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.restaurants.forEach(function(a){var n="/";n="/pitskulounas/",t.$http.get(n+"static/crawled/"+a+".json").then(function(n){t.menus.push({html:n.data.html,name:a})})})}}},l,!1,function(t){n("iSiE")},"data-v-2d2e239d",null).exports,c=n("y3TV"),u=n.n(c),v={data:function(){return{lunchMenus:[],restaurants:["antell-vaaksy","africanpots","alice","harju8","kellohalli","rocks","rupla","sture4"]}},beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.restaurants.forEach(function(a){var n="/";n="/pitskulounas/";t.$http.get(n+"static/crawled/"+a+".json").then(function(n){var e=u()(n.data,"[0].content",""),i=Array.isArray(e)?e.join("<br>"):e;t.lunchMenus.push({html:""+t.sanitizeTxt(i),name:a})})})},sanitizeTxt:function(t){var a=(new Date).getDay(),n={1:"Maanantai",2:"Tiistai",3:"Keskiviikko",4:"Torstai",5:"Perjantai",6:"Lauantai"},e=new RegExp(n[a],"i"),i=t.split(e);return(t=u()(i,"[1]")?"<p><strong>"+n[a]+"</strong></p>"+i[1]:t).replace(/\d+\.\d+\.?/g,"").replace(/\s+–\s+/g,"<br>").replace(/\)\s?([A-Z])/g,")<br>$1").replace(/\s\s+/g," ").replace(/(<br>\n?)+/g,"<br>").replace(/(<br>\s?<br>)+/g,"<br>").replace(/(<\/p>\s+?<br>\s+?\n?)/g,"</p>")}}},h={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container-fluid"},[n("header",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("marquee",{staticClass:"wow"},[n("h1",[t._v("Vallilan lounasravintolat")])])],1)]),t._v(" "),t._m(0),t._v(" "),n("main",{staticClass:"row"},t._l(t.lunchMenus,function(a,e){return n("article",{staticClass:"col col-12 col-sm-6 col-lg-4"},[n("div",{staticClass:"card"},[n("h3",[t._v(t._s(a.name))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(a.html)}})])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("small",[this._v("Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti. Virheitä sattuu.")])])}]},d=n("VU/8")(v,h,!1,null,null,null).exports;e.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"HelloWorld",component:o},{path:"/vallila",name:"Vallila",component:d}]}),f=n("8+8L");e.a.use(f.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:p,template:"<App/>",components:{App:s}})},bA7O:function(t,a){},iSiE:function(t,a){},uI2K:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.bcb923b168e81ac92fd1.js.map