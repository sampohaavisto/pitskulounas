webpackJsonp([0],{0:function(t,a){},"1e2F":function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i=(n("bA7O"),n("1e2F"),{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]});var s=n("VU/8")({name:"app"},i,!1,function(t){n("uI2K")},null,null).exports,r=n("/ocq"),o={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},t._l(t.menus,function(a,e){return n("div",{staticClass:"col-12 col-md-6 col-lg-4"},[n("div",[n("h1",[t._v(t._s(a.name))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(a.html)}})])])}),0)])},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{menus:[],restaurants:["taste","valimotie9","variantti","kanttiini","blancco","factory"]}},beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.restaurants.forEach(function(a){var n="/";n="/pitskulounas/",t.$http.get(n+"static/crawled/"+a+".json").then(function(n){t.menus.push({html:n.data.html,name:a})})})}}},o,!1,function(t){n("iSiE")},"data-v-2d2e239d",null).exports,l=n("y3TV"),u=n.n(l),p={data:function(){return{lunchMenus:[],restaurants:["antell-vaaksy","africanpots","alice","harju8","kellohalli","rocks","rupla","sture4"]}},beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.restaurants.forEach(function(a){var n="/";n="/pitskulounas/";t.$http.get(n+"static/crawled/"+a+".json").then(function(n){var e=u()(n.data,"[0].content",""),i=Array.isArray(e)?e.join("<br>"):e;t.lunchMenus.push({html:""+t.sanitizeTxt(i),name:a})})})},sanitizeTxt:function(t){var a=(new Date).getDay(),n={1:"Maanantai",2:"Tiistai",3:"Keskiviikko",4:"Torstai",5:"Perjantai",6:"Lauantai"},e=new RegExp(n[a],"i"),i=(t=t.replace(/(maanantai)/i,"<p><strong>Maanantai</strong></p>").replace(/(tiistai)/i,"<p><strong>Tiistai</strong></p>").replace(/(keskiviikko)/i,"<p><strong>Keskiviikko</strong></p>").replace(/(torstai)/i,"<p><strong>Torstai</strong></p>").replace(/(perjantai)/i,"<p><strong>Perjantai</strong></p>").replace(/(lauantai)/i,"<p><strong>Lauantai</strong></p>").replace(/Ma\s/,"<p><strong>Maanantai</strong></p>").replace(/Ti\s/,"<p><strong>Tiistai</strong></p>").replace(/Ke\s/,"<p><strong>Keskiviikko</strong></p>").replace(/To\s/,"<p><strong>Torstai</strong></p>").replace(/Pe\s/,"<p><strong>Perjantai</strong></p>").replace(/La\s/,"<p><strong>Lauantai</strong></p>")).split(e);return(t=u()(i,"[1]")?"<p><strong>"+n[a]+"</strong></p>"+i[1]:t).replace(/\d+\.\d+\.?/g,"").replace(/\s+–\s+/g,"<br>").replace(/\n\n+/g,"<br>").replace(/\)\s?([A-Z])/g,")<br>$1").replace(/\s\s+/g," ")}}},v={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container-fluid"},[n("header",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("marquee",{staticClass:"wow"},[n("h1",[t._v("Vallilan lounasravintolat")])])],1)]),t._v(" "),t._m(0),t._v(" "),n("main",{staticClass:"row"},t._l(t.lunchMenus,function(a,e){return n("article",{staticClass:"col col-12 col-sm-6 col-lg-4"},[n("div",{staticClass:"card"},[n("h3",[t._v(t._s(a.name))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(a.html)}})])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("small",[this._v("Sisältö on noudettu ravintoloiden nettisivuilta automaattisesti. Virheitä sattuu.")])])}]};var d=n("VU/8")(p,v,!1,function(t){n("zyA+")},"data-v-16b5e334",null).exports;e.a.use(r.a);var f=new r.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/vallila",name:"Vallila",component:d}]}),h=n("8+8L");e.a.use(h.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:f,template:"<App/>",components:{App:s}})},bA7O:function(t,a){},iSiE:function(t,a){},uI2K:function(t,a){},"zyA+":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.3fb69a26b7ea6d24d161.js.map