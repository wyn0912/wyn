webpackJsonp([4],{33:function(t,e,a){"use strict";function i(t){a(53)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(40),n=a(55),o=a(6),d=i,l=o(r.a,n.a,!1,d,"data-v-945616e8",null);e.default=l.exports},40:function(t,e,a){"use strict";var i=a(1),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e.a={name:"detail",data:function(){return{id:"全部"}},computed:r({},Object(i.c)({detail:function(t){return t.detail.detail},year:function(t){return t.detail.year},list:function(t){return t.detail.list},yearList:function(t){return t.detail.yearList}})),methods:r({},Object(i.b)({getDeatilList:"detail/getDeatilList",getYear:"detail/getYear"}),{clickType:function(t,e){this.id=e,this.getYear(e)}}),mounted:function(t){this.getDeatilList(this.$route.query.id)}}},53:function(t,e,a){var i=a(54);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(5)("52f21ea1",i,!0,{})},54:function(t,e,a){e=t.exports=a(4)(!1),e.push([t.i,"a[data-v-945616e8]{text-decoration:none;color:#fff}.detail[data-v-945616e8]{width:100%;height:100%;background:#f4f4f4}.car[data-v-945616e8]{width:100%;height:100%}.detail .car img[data-v-945616e8]{display:block;width:100%;height:4.76rem}.detail_price[data-v-945616e8]{width:100%;padding:.36rem .2rem .3rem;display:flex;box-sizing:border-box;justify-content:space-between;align-items:center;background:#fff;margin-bottom:.2rem}.detail_price .left[data-v-945616e8]{width:49%}.detail_price button[data-v-945616e8]{flex:1}.detail_price .left .pri[data-v-945616e8]{font-size:.36rem;color:red;font-weight:500}.detail_price .left .guide[data-v-945616e8]{font-size:.28rem;color:#ccc;font-weight:500}.detail_price button[data-v-945616e8]{width:100%;height:.8rem;color:#fff;border:none;background:#00afff;font-size:.36rem;border-radius:.1rem}.year[data-v-945616e8]{width:100%;background:#fff;padding:.2rem;display:flex;box-sizing:border-box;font-size:.34rem}.year li[data-v-945616e8]{padding-right:.46rem}.year .active[data-v-945616e8]{color:#00afff}.year-con[data-v-945616e8]{padding-bottom:1rem}.year-content .data[data-v-945616e8]{width:100%;height:100%}.year-content .data>p[data-v-945616e8]{padding:0 .2rem;height:.5rem;line-height:.5rem;font-size:.26rem;color:#999;background:#f4f4f4}.year-content .data>ul[data-v-945616e8]{width:100%}.year-content .data>ul li[data-v-945616e8]{background:#fff;padding:0 .2rem;border-bottom:.18rem solid #f4f4f4}.year-content .data>ul>li>p[data-v-945616e8]:first-child{font-size:.3rem;padding:.1rem 0;color:#3d3d3d}.year-content .data>ul>li>p[data-v-945616e8]:nth-child(2){height:.4rem;line-height:.4rem;font-size:.26rem;color:#999}.year-content .data>ul>li>p[data-v-945616e8]:nth-child(3){display:flex;justify-content:flex-end;align-items:center}.year-content .data>ul>li>p:nth-child(3)>span[data-v-945616e8]:first-child{font-size:.26rem;color:#333}.year-content .data>ul>li>p:nth-child(3)>span[data-v-945616e8]:nth-child(2){font-size:.3rem;color:red;margin-left:.2rem}.year-content .data>ul>li button[data-v-945616e8]{width:100%;background:none;color:#00afff;text-align:center;border:none;border-top:1px solid #eee;font-size:.32rem;height:.8rem}.bottom[data-v-945616e8]{width:100%;position:fixed;left:0;bottom:0;height:1rem;background:#3aacff}.bottom a>p[data-v-945616e8]:first-child{font-size:.32rem;color:#fff;text-align:center;margin-top:.18rem;font-weight:500}.bottom a>p[data-v-945616e8]:nth-child(2){font-size:.24rem;color:#fff;text-align:center;font-weight:500}",""])},55:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"car"},[a("router-link",{attrs:{to:{path:"/picture",query:{SerialID:t.detail.SerialID}}}},[a("img",{attrs:{src:t.detail.CoverPhoto,alt:""}})]),t._v(" "),a("div",{staticClass:"detail_price"},[a("div",{staticClass:"left"},[a("p",{staticClass:"pri"},[t._v(t._s(t.detail.market_attribute&&t.detail.market_attribute.dealer_price))]),t._v(" "),a("h6",{staticClass:"guide"},[t._v("指导价"+t._s(t.detail.market_attribute&&t.detail.market_attribute.official_refer_price))])]),t._v(" "),a("button",[a("router-link",{attrs:{to:{path:"/Quotation",query:{id:t.detail.BottomEntranceLink.slice(-6)}}}},[t._v(t._s(t.detail.BottomEntranceTitle)+"\n        ")])],1)]),t._v(" "),a("div",{staticClass:"year-con"},[a("ul",{staticClass:"year"},t._l(t.year,function(e,i){return a("li",{key:i,class:t.id==e?"active":"",on:{click:function(a){t.clickType(i,e)}}},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"year-content"},t._l(t.yearList,function(e,i){return a("div",{key:i,staticClass:"data"},[a("p",[t._v(t._s(i))]),t._v(" "),a("ul",t._l(e,function(e,i){return a("li",{key:i},[a("p",[t._v(t._s(e.market_attribute.year)+"款 "+t._s(e.car_name))]),t._v(" "),a("p",[t._v(t._s(e.horse_power)+"马力"+t._s(e.gear_num)+"档"+t._s(e.trans_type))]),t._v(" "),a("p",[a("span",[t._v("\n                  指导价"+t._s(e.market_attribute.official_refer_price)+"\n                ")]),t._v(" "),a("span",[t._v("\n                  "+t._s(e.market_attribute.dealer_price_min)+"起\n                ")])]),t._v(" "),a("router-link",{attrs:{to:{path:"/Quotation",query:{id:t.detail.BottomEntranceLink.slice(-6)}}}},[a("button",[t._v(t._s(t.detail.BottomEntranceTitle))])])],1)}))])}))])],1),t._v(" "),a("div",{staticClass:"bottom"},[a("router-link",{attrs:{to:{path:"/Quotation",query:{id:t.detail.BottomEntranceLink.slice(-6)}}}},[a("p",[t._v(t._s(t.detail.BottomEntranceTitle))]),t._v(" "),a("p",[t._v("本地经销商为你报价")])])],1)])},r=[],n={render:i,staticRenderFns:r};e.a=n}});
//# sourceMappingURL=4.build.js.map