(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{414:function(t,e,r){var content=r(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("c414de22",content,!0,{sourceMap:!1})},415:function(t,e,r){var content=r(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("0e10306d",content,!0,{sourceMap:!1})},416:function(t,e,r){"use strict";var n=r(9),o=r(14).a+"/pickups";e.a={createNewPickup:function(t,e,r){return t.$post(o,e,Object(n.a)(r))},getPickup:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;return t.$get(o+"?"+e,Object(n.a)(r))},getPickupsDetails:function(t,e,r){return t.$get("".concat(o,"/").concat(r),Object(n.a)(e))},updatePickupById:function(t,e,r){return t.$put("".concat(o,"/").concat(e.id),e,Object(n.a)(r))},deletePickupById:function(t,e,r){return t.$delete("".concat(o,"/").concat(e.id),Object(n.a)(r))}}},417:function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return v})),r.d(e,"c",(function(){return m})),r.d(e,"e",(function(){return y})),r.d(e,"d",(function(){return _})),r.d(e,"f",(function(){return k}));r(7),r(5),r(4),r(3),r(6),r(21);var n=r(0);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={tdClass:"td",thClass:"th"},d={tdClass:"td-lg cursor-pointer",thClass:"th"},f={tdClass:"td-lg",thClass:"th"},h=[c({key:"pickup_invoice",label:"Pickup-ID"},l,{sortable:!0}),c({key:"is_pickuped",label:"Status"},l,{sortable:!0}),c({key:"branch",label:"Branch"},l,{formatter:function(t,e,r){return r.sender_associate.label},sortable:!0}),c({key:"created_at",label:"Created at"},l,{sortable:!0}),c({key:"pickup_date",label:"Pickup at"},l),{key:"note",label:"Note",tdClass:"td maxTd cursor-pointer",thClass:"th maxTh"},c({key:"action",label:"Action"},l)];var v=function(a,b,t){return"branch"===t&&a.sender_associate.label<b.sender_associate.label},m=[c({key:"voucher_no",label:"Voucher No"},d),c({key:"receiver.name",label:"Customer"},d),c({key:"receiver.phone",label:"Phone"},d),{key:"receiver.address",label:"Address at",tdClass:"td-lg maxTd cursor-pointer",thClass:"th maxTh"},c({key:"remark",label:"Note",formatter:w},d),c({key:"total_item_price",label:"Parcel Price",formatter:C},d),c({key:"to",label:"To",formatter:x},d),c({key:"payment_type.name_mm",label:"Payment Status"},d),c({key:"total_delivery_amount",label:"Delivery Amount",formatter:C},d),c({key:"action",label:"Action",formatter:function(t,e,r){return r.id}},d)],y=[c({key:"return_sheet_invoice",label:"Return Sheet"},d,{sortable:!0}),c({key:"qty",label:"Vouchers"},d,{sortable:!0}),c({key:"merchant.name",label:"Branch"},d,{sortable:!0}),c({key:"is_returned",label:"Status"},d,{sortable:!0}),c({key:"created_at",label:"Return Date"},d,{sortable:!0})],_=[c({key:"voucher_no",label:"Voucher"},f,{sortable:!0}),c({key:"pickup.pickup_invoice",label:"Pickup"},f,{sortable:!0}),c({key:"return_fee",label:"Return Fees"},f,{sortable:!0}),c({key:"return_type",label:"Return Type"},f,{sortable:!0}),c({key:"receiver.name",label:"Customer"},f,{sortable:!0}),c({key:"receiver.phone",label:"Phone"},f,{sortable:!0}),c({key:"receiver.address",label:"Address"},f,{sortable:!0}),c({key:"to",label:"To",formatter:x},f),c({key:"total_item_price",label:"Parcel Price",formatter:C},f,{sortable:!0}),c({key:"payment_type.name_mm",label:"Payment Type"},f,{sortable:!0}),{key:"return_sheet_voucher_note",label:"Note",formatter:w,tdClass:"td-lg maxTd cursor-pointer",thClass:"th maxTh",sortable:!0},{key:"total_delivery_amount",label:"Delivery Amount",formatter:C,sortable:!0,tdClass:"td-lg text-right",thClass:"th"}],k=[c({key:"voucher_no",label:"Voucher No"},f),c({key:"receiver.name",label:"Customer"},f),c({key:"receiver.phone",label:"Phone"},f),c({key:"receiver_city.name",label:"City"},f),c({key:"receiver_zone.name",label:"Zone"},f),c({key:"pickup.pickup_date",label:"Pickuped Date",formatter:O},f),c({key:"delivered_date",label:"Delivered/Return Date",formatter:O},f),c({key:"payment_type.name_mm",label:"Payment Type"},f),c({key:"delivery_status.status",label:"Delivery Status"},f),c({key:"total_delivery_amount",label:" Amount",formatter:C},f)];function x(t,e,r){return"".concat(r.receiver_city.name," - ").concat(r.receiver_zone?r.receiver_zone.name:"")}function w(t,e,r){return t||"---Empty---"}function C(t,e,r){return"".concat(t," Kyats")}function O(t){return t||"-- / -- / --"}},418:function(t,e,r){"use strict";var n={props:{isLoading:{required:!0,type:Boolean},title:{type:String,default:"Welcome To Marathon Myanmar"}}},o=(r(421),r(10)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.isLoading?e("div",{staticClass:"LoadingContainer"},[e("div",{staticClass:"LoadingSize"},[e("BikeLoading"),this._v(" "),e("span",{staticClass:"text-primary LoadingText"},[this._v("\n      "+this._s(this.title)+"\n      "),e("span",{staticClass:"DotContainer"},[e("TripleDotLoading")],1)])],1)]):this._e()}),[],!1,null,null,null);e.a=component.exports},419:function(t,e,r){"use strict";r(34);var n=r(12),o=r(9),c=r(14).a+"/dashboard",l=function(t,e){return t.$get("".concat(c),Object(o.a)(e))},d=r(416);r.d(e,"e",(function(){return f})),r.d(e,"g",(function(){return h})),r.d(e,"f",(function(){return v})),r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return y})),r.d(e,"d",(function(){return _})),r.d(e,"c",(function(){return k}));var f=function(t){var e=t.store.state.auth.jwt,r=t.app.$axios;return l(r,e,(new Date).toISOString().substr(0,10))},h=function(t){var e=t.$store.state.auth.jwt,r=t.$axios;return l(r,e,(new Date).toISOString().substr(0,10))},v=function(t){return t.store.state.auth.user[0]},m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.clearAuth,n=e.$router,t.next=3,r();case 3:n.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.selectedBranch,n=e.$axios,o=e.$store.state.auth.jwt,c={merchant_associate_id:r},t.next=5,d.a.createNewPickup(n,c,o);case 5:return data=t.sent,t.abrupt("return",data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.$store.state.auth.jwt,o="page=".concat(e.current_page),t.next=5,d.a.getPickup(r,o,n);case 5:return data=t.sent,t.abrupt("return",data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,o=e.$store.state.auth.jwt,c={id:r},t.next=5,d.a.deletePickupById(n,c,o);case 5:return data=t.sent,t.abrupt("return",data);case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},420:function(t,e,r){var content=r(434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("61b118d2",content,!0,{sourceMap:!1})},421:function(t,e,r){"use strict";var n=r(414);r.n(n).a},422:function(t,e,r){(e=r(23)(!1)).push([t.i,".LoadingContainer{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:3;background-color:#fff;display:-webkit-box;display:flex}.LoadingContainer>.LoadingSize{width:300px;height:300px;margin:100px auto 0;text-align:center;font-size:2em}.LoadingText{display:inline-block;-webkit-animation:tremble 5.55556s linear -5.52778s infinite normal forwards running;animation:tremble 5.55556s linear -5.52778s infinite normal forwards running}.DotContainer{width:30px;display:inline-block;top:5px;position:relative}",""]),t.exports=e},426:function(t,e,r){"use strict";var n={props:{dashboardData:{required:!0,type:Object}}},o=(r(428),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("ul",{staticClass:"list-group list-group-flush"},[r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/dashboard"}},[t._v("\n        Dashboard\n      ")])],1),t._v(" "),r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/pickup"}},[t._v("\n        Pickup"),r("label",{staticClass:"badge badge-primary float-right"},[t._v(t._s(t.dashboardData.total_pickups_count))])])],1),t._v(" "),r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/return_sheet"}},[t._v("\n        Return Sheets"),r("label",{staticClass:"badge badge-primary float-right"},[t._v(t._s(t.dashboardData.total_return_vouchers))])])],1),t._v(" "),r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/all_vouchers"}},[t._v("\n        All Vouchers"),r("label",{staticClass:"badge badge-primary float-right"},[t._v(t._s(t.dashboardData.total_vouchers_count))])])],1)])])}),[],!1,null,"f404e71a",null);e.a=component.exports},428:function(t,e,r){"use strict";var n=r(415);r.n(n).a},429:function(t,e,r){(e=r(23)(!1)).push([t.i,".side_link[data-v-f404e71a]{background-color:transparent;display:block;padding:.75rem 1.25rem;text-decoration:none;color:#000}.side_link[data-v-f404e71a]:hover{background-color:#eaeaea;color:#0f60d0!important}",""]),t.exports=e},431:function(t,e,r){"use strict";var n={props:{userData:{required:!0,type:Object}},data:function(){return{imgSrc:"/img/Marathon%20Express%20Logo.png"}}},o=(r(433),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile"},[r("h6",[t._v("Profile")]),t._v(" "),r("div",{staticClass:"card card-border-radius mb-4"},[r("div",{staticClass:"CustomImage border-bottom-0"},[r("img",{staticClass:"img-fluid w-75",attrs:{src:t.imgSrc}})]),t._v(" "),r("div",{staticClass:"card-body border-top-0"},[r("p",{staticClass:"card-title text-center"},[t._v("\n        Welcome\n      ")]),t._v(" "),r("h4",{staticClass:"card-text text-center"},[t._v("\n        "+t._s(t.userData.name)+"\n      ")]),r("br")])])])}),[],!1,null,"0ba5180a",null);e.a=component.exports},433:function(t,e,r){"use strict";var n=r(420);r.n(n).a},434:function(t,e,r){(e=r(23)(!1)).push([t.i,".CustomImage[data-v-0ba5180a]{background:#fff;border-bottom:1px solid #ddd;height:150px;width:100%;text-align:center;border-radius:.25rem;margin-top:20px}.CustomImage>img[data-v-0ba5180a]{width:auto;height:100%;-o-object-fit:contain;object-fit:contain;margin:0 auto;display:inline-block}.card-border-radius[data-v-0ba5180a]{border-radius:5px!important}",""]),t.exports=e},446:function(t,e,r){var content=r(517);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("740c9874",content,!0,{sourceMap:!1})},461:function(t,e,r){"use strict";var n=r(9),o=r(14).a+"/return_sheets",c=function(t,e,r){return t.$get("".concat(o,"?").concat(e),Object(n.a)(r))},l=function(t,e,r){return t.$get("".concat(o,"/").concat(r),Object(n.a)(e))};r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return f}));var d=function(t){var e=t.$axios,r=t.$store.state.auth.jwt,n="page=".concat(t.current_page);return c(e,n,r)},f=function(t){var e=t.store.state.auth.jwt,r=t.app.$axios,n=t.params.id;return l(r,e,n)}},516:function(t,e,r){"use strict";var n=r(446);r.n(n).a},517:function(t,e,r){(e=r(23)(!1)).push([t.i,".DashboardContainer{padding:1rem;max-width:1400px}.Loading{opacity:.75}",""]),t.exports=e},547:function(t,e,r){"use strict";r.r(e);r(7),r(5),r(4),r(3),r(6);var n,o=r(0),c=(r(34),r(12)),l=r(60),d=r(419),f=r(431),h=r(426),v=r(461),m=r(417),y={data:function(){return{isLoading:!0,isEmpty:!0,sheets:[],tableHeaders:m.e,current_page:1,total_sheets:0}},watch:{current_page:function(t,e){t&&this.fetchData()}},beforeMount:function(){this.fetchData()},methods:{fetchData:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e,data,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Object(v.a)(this);case 3:e=t.sent,data=e.data,meta=e.meta,this.sheets=data,this.current_page=meta.current_page,this.total_sheets=meta.total,this.isEmpty=!data.length,this.isLoading=!1;case 11:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},_=r(10),k=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-table",{attrs:{fields:t.tableHeaders,items:t.sheets,bordered:!1,"head-variant":"dark",busy:t.isLoading,"current-page":t.current_page,"per-page":0,responsive:""},scopedSlots:t._u([{key:"table-busy",fn:function(){return[r("TableRowLoading")]},proxy:!0},{key:"cell(return_sheet_invoice)",fn:function(data){return[r("NuxtLink",{attrs:{to:"/return_sheet/"+data.item.id}},[t._v("\n        "+t._s(data.value)+"\n      ")])]}},{key:"cell(is_returned)",fn:function(data){return[r("span",{class:data.value?"text-success":"text-warning"},[t._v("\n        "+t._s(data.value?"Receive":"Pending")+"\n      ")])]}},{key:"cell(created_at)",fn:function(data){return[r("CreatedAtCell",{attrs:{data:data}})]}}])}),t._v(" "),r("EmptyRow",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&t.isEmpty,expression:"!isLoading && isEmpty"}],staticClass:"mb-3"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&!t.isEmpty,expression:"!isLoading && !isEmpty"}],staticClass:"col-6 text-align-right"},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.total_sheets,"per-page":25,align:"fill",size:"sm"},model:{value:t.current_page,callback:function(e){t.current_page=e},expression:"current_page"}})],1)])],1)}),[],!1,null,null,null).exports,x=r(418);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C,O={middleware:["isAuth"],components:{DashboardLeftAside:f.a,DashboardSerchingAside:h.a,Loading:x.a,ReturnSheetTable:k},data:function(){return{isLoading:!1}},asyncData:(C=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d.f)(e);case 3:return r=t.sent,t.next=6,Object(d.e)(e);case 6:return n=t.sent,t.abrupt("return",{dashboardData:n,userData:r});case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",{isError:!0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),function(t){return C.apply(this,arguments)}),beforeMount:function(){this.isError&&Object(d.a)(this)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({clearAuth:"auth/clearAuth"}))},j=(r(516),Object(_.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid DashboardContainer"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2"},[r("DashboardLeftAside",{attrs:{userData:t.userData}}),t._v(" "),r("DashboardSerchingAside",{attrs:{dashboardData:t.dashboardData}})],1),t._v(" "),r("div",{staticClass:"col-md-10"},[r("h6",[t._v("Return Sheets")]),t._v(" "),r("div",{staticClass:"Dashboard_Table_Container"},[r("ReturnSheetTable")],1),t._v(" "),r("div",{staticClass:"Loading"},[r("Loading",{attrs:{isLoading:t.isLoading,title:"Loading"}})],1)])])])}),[],!1,null,null,null));e.default=j.exports}}]);