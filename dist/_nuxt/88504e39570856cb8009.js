(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{415:function(e,t,r){var content=r(429);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("0e10306d",content,!0,{sourceMap:!1})},416:function(e,t,r){"use strict";var n=r(9),c=r(14).a+"/pickups";t.a={createNewPickup:function(e,t,r){return e.$post(c,t,Object(n.a)(r))},getPickup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;return e.$get(c+"?"+t,Object(n.a)(r))},getPickupsDetails:function(e,t,r){return e.$get("".concat(c,"/").concat(r),Object(n.a)(t))},updatePickupById:function(e,t,r){return e.$put("".concat(c,"/").concat(t.id),t,Object(n.a)(r))},deletePickupById:function(e,t,r){return e.$delete("".concat(c,"/").concat(t.id),Object(n.a)(r))}}},417:function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return h})),r.d(t,"c",(function(){return _})),r.d(t,"e",(function(){return m})),r.d(t,"d",(function(){return y})),r.d(t,"f",(function(){return k}));r(7),r(5),r(4),r(3),r(6),r(21);var n=r(0);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={tdClass:"td",thClass:"th"},d={tdClass:"td-lg cursor-pointer",thClass:"th"},f={tdClass:"td-lg",thClass:"th"},v=[o({key:"pickup_invoice",label:"Pickup-ID"},l,{sortable:!0}),o({key:"is_pickuped",label:"Status"},l,{sortable:!0}),o({key:"branch",label:"Branch"},l,{formatter:function(e,t,r){return r.sender_associate.label},sortable:!0}),o({key:"created_at",label:"Created at"},l,{sortable:!0}),o({key:"pickup_date",label:"Pickup at"},l),{key:"note",label:"Note",tdClass:"td maxTd cursor-pointer",thClass:"th maxTh"},o({key:"action",label:"Action"},l)];var h=function(a,b,e){return"branch"===e&&a.sender_associate.label<b.sender_associate.label},_=[o({key:"voucher_no",label:"Voucher No"},d),o({key:"receiver.name",label:"Customer"},d),o({key:"receiver.phone",label:"Phone"},d),{key:"receiver.address",label:"Address at",tdClass:"td-lg maxTd cursor-pointer",thClass:"th maxTh"},o({key:"remark",label:"Note",formatter:O},d),o({key:"total_item_price",label:"Parcel Price",formatter:w},d),o({key:"to",label:"To",formatter:j},d),o({key:"payment_type.name_mm",label:"Payment Status"},d),o({key:"total_delivery_amount",label:"Delivery Amount",formatter:w},d),o({key:"action",label:"Action",formatter:function(e,t,r){return r.id}},d)],m=[o({key:"return_sheet_invoice",label:"Return Sheet"},d,{sortable:!0}),o({key:"qty",label:"Vouchers"},d,{sortable:!0}),o({key:"merchant.name",label:"Branch"},d,{sortable:!0}),o({key:"is_returned",label:"Status"},d,{sortable:!0}),o({key:"created_at",label:"Return Date"},d,{sortable:!0})],y=[o({key:"voucher_no",label:"Voucher"},f,{sortable:!0}),o({key:"pickup.pickup_invoice",label:"Pickup"},f,{sortable:!0}),o({key:"return_fee",label:"Return Fees"},f,{sortable:!0}),o({key:"return_type",label:"Return Type"},f,{sortable:!0}),o({key:"receiver.name",label:"Customer"},f,{sortable:!0}),o({key:"receiver.phone",label:"Phone"},f,{sortable:!0}),o({key:"receiver.address",label:"Address"},f,{sortable:!0}),o({key:"to",label:"To",formatter:j},f),o({key:"total_item_price",label:"Parcel Price",formatter:w},f,{sortable:!0}),o({key:"payment_type.name_mm",label:"Payment Type"},f,{sortable:!0}),{key:"return_sheet_voucher_note",label:"Note",formatter:O,tdClass:"td-lg maxTd cursor-pointer",thClass:"th maxTh",sortable:!0},{key:"total_delivery_amount",label:"Delivery Amount",formatter:w,sortable:!0,tdClass:"td-lg text-right",thClass:"th"}],k=[o({key:"voucher_no",label:"Voucher No"},f),o({key:"receiver.name",label:"Customer"},f),o({key:"receiver.phone",label:"Phone"},f),o({key:"receiver_city.name",label:"City"},f),o({key:"receiver_zone.name",label:"Zone"},f),o({key:"pickup.pickup_date",label:"Pickuped Date",formatter:x},f),o({key:"delivered_date",label:"Delivered/Return Date",formatter:x},f),o({key:"payment_type.name_mm",label:"Payment Type"},f),o({key:"delivery_status.status",label:"Delivery Status"},f),o({key:"total_delivery_amount",label:" Amount",formatter:w},f)];function j(e,t,r){return"".concat(r.receiver_city.name," - ").concat(r.receiver_zone?r.receiver_zone.name:"")}function O(e,t,r){return e||"---Empty---"}function w(e,t,r){return"".concat(e," Kyats")}function x(e){return e||"-- / -- / --"}},419:function(e,t,r){"use strict";r(34);var n=r(12),c=r(9),o=r(14).a+"/dashboard",l=function(e,t){return e.$get("".concat(o),Object(c.a)(t))},d=r(416);r.d(t,"e",(function(){return f})),r.d(t,"g",(function(){return v})),r.d(t,"f",(function(){return h})),r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return m})),r.d(t,"d",(function(){return y})),r.d(t,"c",(function(){return k}));var f=function(e){var t=e.store.state.auth.jwt,r=e.app.$axios;return l(r,t,(new Date).toISOString().substr(0,10))},v=function(e){var t=e.$store.state.auth.jwt,r=e.$axios;return l(r,t,(new Date).toISOString().substr(0,10))},h=function(e){return e.store.state.auth.user[0]},_=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.clearAuth,n=t.$router,e.next=3,r();case 3:n.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.selectedBranch,n=t.$axios,c=t.$store.state.auth.jwt,o={merchant_associate_id:r},e.next=5,d.a.createNewPickup(n,o,c);case 5:return data=e.sent,e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.$store.state.auth.jwt,c="page=".concat(t.current_page),e.next=5,d.a.getPickup(r,c,n);case 5:return data=e.sent,e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,c,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,c=t.$store.state.auth.jwt,o={id:r},e.next=5,d.a.deletePickupById(n,o,c);case 5:return data=e.sent,e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},424:function(e,t,r){"use strict";var n=r(61),c=(r(427),r(34),r(12)),o=(r(21),r(16)),l=r.n(o),d=r(416),f=r(425),v=r(9),h=r(14).a+"/customers",_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;return e.$get("".concat(h,"?").concat(t),Object(v.a)(r))};r.d(t,"e",(function(){return m})),r.d(t,"j",(function(){return y})),r.d(t,"g",(function(){return k})),r.d(t,"f",(function(){return j})),r.d(t,"l",(function(){return O})),r.d(t,"d",(function(){return w})),r.d(t,"k",(function(){return x})),r.d(t,"i",(function(){return C})),r.d(t,"b",(function(){return P})),r.d(t,"a",(function(){return $})),r.d(t,"h",(function(){return D})),r.d(t,"c",(function(){return S}));var m=function(e){var t=e.store.state.auth.jwt,r=e.app.$axios,n=e.params.id;return d.a.getPickupsDetails(r,t,n)},y=function(e,t){var r=e.$store.state.auth.jwt,n=e.data.id,c=e.$axios,o={id:n,merchant_associate_id:t};return d.a.updatePickupById(c,o,r)},k=function(e,t,meta){var r=function(e){var t=e.length?e:null;t&&t.forEach((function(e){e.global_scale_id=e.global_scale.id}));return t}(e.parcels);return{pickup_id:t.id,id:e.id,bus_station:!0===e.bus_station?1:0,sender_city_id:+meta.city.value,sender_zone_id:+meta.zone.value,receiver_id:e.receiver.id,receiver_name:e.receiver.name,receiver_phone:e.receiver.phone,receiver_address:e.receiver.address,receiver_city_id:e.receiver_city.id,receiver_zone_id:e.receiver_zone.id,payment_type_id:e.payment_type.id,call_status_id:e.call_status.id,store_status_id:e.store_status.id,total_item_price:e.total_item_price,remark:e.remark,parcels:r}},j=function(e,t,meta){return{pickup_id:t.id,id:null,bus_station:!0===e.bus_station?1:0,sender_city_id:+meta.city.value,sender_zone_id:+meta.zone.value,receiver_name:e.receiver.name,receiver_phone:e.receiver.phone,receiver_address:e.receiver.address,payment_type_id:e.payment_type.id,receiver_city_id:e.receiver_city.id,receiver_zone_id:e.receiver_zone.id,total_item_price:e.total_item_price,call_status_id:1,store_status_id:1,remark:e.remark,global_scale_id:1}},O=function(e){var t=e.receiver_name,r=e.receiver_phone,n=e.receiver_address,c=e.receiver_city_id,o=e.receiver_zone_id,l={isValid:!0,errors:[]};return t.trim()||l.errors.push("Customer (နာမည်) လိုအပ်ပါသည်။"),c||l.errors.push("City (မြို့နယ်) ရွေးရန်လိုအပ်ပါသည်။"),o||l.errors.push("Zone (ဇုန်) ရွေးရန်လိုအပ်ပါသည်။"),n.trim()||l.errors.push("Address (လိပ်စာ) လိုအပ်ပါသည်။"),r.trim()||l.errors.push("Phone (ဖုန်း) နံပါတ် လိုအပ်ပါသည်။"),isNaN(r)&&l.errors.push("Phone (ဖုန်း) မှာ နံပါတ်များသာထည့်ပါ။"),l.isValid=0===l.errors.length,l},w=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getItem("stored:cities");case 2:return t=e.sent,e.abrupt("return",t.filter((function(e){return!0===e.is_available_d2d})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e,t){var r=e.$store.state.auth.jwt,n=e.$axios;return f.a.updateVoucherById(n,t,r)},C=function(e,t){var r=e.items.findIndex((function(data){return data.id===t.id})),n=e.items[r];n.receiver.name=t.receiver.name,n.receiver.phone=t.receiver.phone,n.receiver.address=t.receiver.address,n.remark=t.remark,n.total_item_price=t.total_item_price,n.receiver_city=t.receiver_city,n.receiver_zone=t.receiver_zone,n.payment_type=t.payment_type,n.total_delivery_amount=t.total_delivery_amount},P=function(e,t){var r=e.$store.state.auth.jwt,n=e.$axios;return f.a.deleteVoucherById(n,t,r)},$=function(e,t){var r=e.$store.state.auth.jwt,n=e.$axios;return f.a.createNewVoucher(n,t,r)};var D=function(e){var t=e.$store.state.auth.jwt,r=e.$axios,n="search="+e.editObject.receiver.phone,c=console;return c.log("jwt",t),c.log("axios",r),_(r,n,t)},S=function(e,data){var t=Object(n.a)(data,1)[0];e.editObject.receiver.name=t.name,e.editObject.receiver.address=t.address,t.city&&(e.editObject.receiver_city=t.city),t.zone&&(e.editObject.receiver_zone=t.zone),e.CityToZoneKeyForceRerender++}},425:function(e,t,r){"use strict";var n=r(9),c=r(14).a+"/vouchers";t.a={updateVoucherById:function(e,t,r){return e.$put("".concat(c,"/").concat(t.id),t,Object(n.a)(r))},deleteVoucherById:function(e,t,r){return e.$delete("".concat(c,"/").concat(t),Object(n.a)(r))},createNewVoucher:function(e,t,r){return e.$post("".concat(c),t,Object(n.a)(r))},getVouchers:function(e,t,r){return e.$get("".concat(c,"?").concat(t),Object(n.a)(r))}}},426:function(e,t,r){"use strict";var n={props:{dashboardData:{required:!0,type:Object}}},c=(r(428),r(10)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("ul",{staticClass:"list-group list-group-flush"},[r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/dashboard"}},[e._v("\n        Dashboard\n      ")])],1),e._v(" "),r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/pickup"}},[e._v("\n        Pickup"),r("label",{staticClass:"badge badge-primary float-right"},[e._v(e._s(e.dashboardData.total_pickups_count))])])],1),e._v(" "),r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/return_sheet"}},[e._v("\n        Return Sheets"),r("label",{staticClass:"badge badge-primary float-right"},[e._v(e._s(e.dashboardData.total_return_vouchers))])])],1),e._v(" "),r("li",{staticClass:"list-group-item p-0"},[r("nuxt-link",{staticClass:"side_link",attrs:{to:"/all_vouchers"}},[e._v("\n        All Vouchers"),r("label",{staticClass:"badge badge-primary float-right"},[e._v(e._s(e.dashboardData.total_vouchers_count))])])],1)])])}),[],!1,null,"f404e71a",null);t.a=component.exports},427:function(e,t,r){"use strict";var n=r(22),c=r(127)(6),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),r(71)(o)},428:function(e,t,r){"use strict";var n=r(415);r.n(n).a},429:function(e,t,r){(t=r(23)(!1)).push([e.i,".side_link[data-v-f404e71a]{background-color:transparent;display:block;padding:.75rem 1.25rem;text-decoration:none;color:#000}.side_link[data-v-f404e71a]:hover{background-color:#eaeaea;color:#0f60d0!important}",""]),e.exports=t},432:function(e,t,r){var content=r(467);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("9538eb6c",content,!0,{sourceMap:!1})},466:function(e,t,r){"use strict";var n=r(432);r.n(n).a},467:function(e,t,r){(t=r(23)(!1)).push([e.i,".Loading[data-v-5f7abbad]{opacity:.75}",""]),e.exports=t},545:function(e,t,r){"use strict";r.r(t);r(7),r(5),r(4),r(3),r(6);var n=r(0),c=(r(34),r(12)),o=r(60),l=r(419),d=r(424),f=r(17),v=r(45),h=r(425);function _(){var data=Object(v.a)(["&"]);return _=function(){return data},data}var m=function(e){var t=e.store.state.auth.jwt,r=e.app.$axios;return h.a.getVouchers(r,"paginate=10",t)},y=function(e){var t=e.$store.state.auth.jwt,r=e.$axios,n=e.form?function(e){var form=e.form,t=e.paginate,r=e.meta.current_page,n=Object.keys(form).reduce((function(e,t){return form[t]?[].concat(Object(f.a)(e),["".concat(t,"=").concat(form[t])]):e}),[]).join(_());return"paginate=".concat(t,"&").concat(n,"&page=").concat(r)}(e):"paginate=".concat(e.paginate,"&page=").concat(e.meta.current_page);return h.a.getVouchers(r,n,t)};var k=r(426),j=r(417),O={props:{vouchers:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1}},data:function(){return{tableHeaders:j.f}}},w=r(10),x=Object(w.a)(O,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-table",{attrs:{fields:this.tableHeaders,items:this.vouchers,bordered:!1,"head-variant":"dark",busy:this.isLoading,responsive:""},scopedSlots:this._u([{key:"table-busy",fn:function(){return[t("TableRowLoading")]},proxy:!0}])})],1)}),[],!1,null,null,null).exports;function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var P,$,D={middleware:["isAuth"],components:{DashboardSerchingAside:k.a,AllVouchersTable:x},data:function(){return{isLoading:!1,paginate:10,form:null}},computed:{currentPage:function(){return this.meta.current_page}},watch:{currentPage:function(e){this._fetching()}},asyncData:($=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,c,data,meta;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.e)(t);case 3:return r=e.sent,e.next=6,Object(d.d)();case 6:return n=e.sent,e.next=9,m(t);case 9:return c=e.sent,data=c.data,meta=c.meta,e.abrupt("return",{dashboardData:r,allCities:n,vouchers:data,meta:meta});case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",{isError:!0});case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),function(e){return $.apply(this,arguments)}),beforeMount:function(){this.isError&&Object(l.a)(this)},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({clearAuth:"auth/clearAuth"}),{onSubmit:function(e){this.form=this._deepCopy(e),this.meta.current_page=1,this._fetching()},_deepCopy:function(e){return JSON.parse(JSON.stringify(e))},_fetching:(P=Object(c.a)(regeneratorRuntime.mark((function e(){var t,data,meta;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,y(this);case 4:t=e.sent,data=t.data,meta=t.meta,this.vouchers=data,this.meta=this._deepCopy(meta),this.isLoading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.isLoading=!1;case 15:case"end":return e.stop()}}),e,this,[[1,12]])}))),function(){return P.apply(this,arguments)})})},S=(r(466),Object(w.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"col-md-2"},[r("VoucherSearchForm",{attrs:{allCities:e.allCities,isLoading:e.isLoading},on:{onSubmit:e.onSubmit}}),e._v(" "),r("DashboardSerchingAside",{attrs:{dashboardData:e.dashboardData}})],1),e._v(" "),r("div",{staticClass:"col-md-10"},[r("h6",[e._v("Voucher List ")]),e._v(" "),r("AllVouchersTable",{attrs:{vouchers:e.vouchers,isLoading:e.isLoading}}),e._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row justify-content-end"},[r("div",{staticClass:"col-4"},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.meta.total,"per-page":e.paginate,align:"fill",size:"sm"},model:{value:e.meta.current_page,callback:function(t){e.$set(e.meta,"current_page",t)},expression:"meta.current_page"}})],1)])])],1)])])}),[],!1,null,"5f7abbad",null));t.default=S.exports}}]);