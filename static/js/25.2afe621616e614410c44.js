webpackJsonp([25],{MRso:function(e,t){},uHvF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),o=a.n(r),l=a("/BvV"),s={data:function(){return{tableData:{list:[]},searchform:{commodityId:this.$route.query.commodityId},pageVo:{pageNo:1,size:10},loading:!1}},mounted:function(){void 0!==this.searchform.commodityId&&this.getOrderList()},methods:{getOrderList:function(){var e=this;this.loading=!0;var t=o()(this.searchform,{pageVo:this.pageVo});l.a.getgoodsbuyrecord(t).then(function(t){e.tableData=t,e.loading=!1})},paginationChange:function(e){this.pageVo.pageNo=parseInt(e),this.getOrderList()},paginationSizeChange:function(e){this.pageVo={pageNo:1,size:parseInt(e)},this.getOrderList()}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("AutoBreadcrumb"),e._v(" "),a("div",{staticClass:"ProductOrderList content-box"},[a("h3",[e._v("商品ID: "+e._s(e.searchform.commodityId))]),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.searchform,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{lg:6}},[a("el-form-item",{attrs:{label:"订单ID"}},[a("el-input",{model:{value:e.searchform.orderCode,callback:function(t){e.$set(e.searchform,"orderCode",t)},expression:"searchform.orderCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:10}},[a("el-form-item",{attrs:{label:"下单时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"timestamp"},model:{value:e.searchform.orderStartTime,callback:function(t){e.$set(e.searchform,"orderStartTime",t)},expression:"searchform.orderStartTime"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","default-time":"23:59:59","value-format":"timestamp"},model:{value:e.searchform.orderEndTime,callback:function(t){e.$set(e.searchform,"orderEndTime",t)},expression:"searchform.orderEndTime"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{md:6}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getOrderList}},[e._v("搜索")])],1)],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData.list,border:""}},[a("el-table-column",{attrs:{label:"订单ID",prop:"orderCode"}}),e._v(" "),a("el-table-column",{attrs:{label:"下单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("formatDate")(t.row.createTime))+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品名称",prop:"goodsName"}}),e._v(" "),a("el-table-column",{attrs:{label:"购买价格"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("price")(t.row.buyUnitPrice))+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数量",prop:"buyNum"}}),e._v(" "),a("el-table-column",{attrs:{label:"总金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("price")(t.row.totalPrice+t.row.freight))+"\n                ")]}}])})],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next",total:Number(e.tableData.total),"current-page":e.tableData.pageNum,"page-sizes":[10,20,30,50,100],"prev-text":"上一页","next-text":"下一页"},on:{"current-change":e.paginationChange,"size-change":e.paginationSizeChange}})],1)],1)],1)},staticRenderFns:[]};var i=a("vSla")(s,n,!1,function(e){a("MRso")},null,null);t.default=i.exports}});