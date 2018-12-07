webpackJsonp([16],{ZBm7:function(e,t){},ibTC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),o=a.n(r),i=a("/BvV"),s=a("RY5C"),n={props:{tableData:{type:Object,required:!0},type:{type:Number,required:!0}},data:function(){return{agreeddialogVisible:!1,agreedform:{erpPharmacyCode:""},refuseddialogVisible:!1,refusedform:{refuseReason:""}}},methods:{showAgreed:function(e,t){this.agreedform.purchaserName=t,this.agreedform.accountId=e,this.agreeddialogVisible=!0},showRefused:function(e,t){this.refusedform.purchaserName=t,this.refusedform.accountId=e,this.refuseddialogVisible=!0},agreedopenaccount:function(){var e=this;this.$refs.agreedformDom.validate().then(function(t){if(t){var a=e.agreedform,r=a.accountId,o=a.erpPharmacyCode,s=a.remark;i.a.agreedopenaccount({accountId:r,erpPharmacyCode:o,remark:s}).then(function(t){e.$message.success("开户成功"),e.agreeddialogVisible=!1,e.$emit("reload")})}}).catch(function(){})},refusedopenaccount:function(){var e=this;this.$refs.refusedformDom.validate().then(function(t){if(t){var a=e.refusedform,r=a.accountId,o=a.refuseReason;i.a.refusedopenaccount({accountId:r,refuseReason:o}).then(function(t){e.$message.success("操作成功"),e.refuseddialogVisible=!1,e.$emit("reload")})}}).catch(function(){})},revokeopenaccount:function(e){var t=this;this.$confirm("是否撤销开户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.revokeopenaccount(e).then(function(e){t.$message.success("撤销成功"),t.$emit("reload")})}).catch(function(){})},init:function(e){var t=this;setTimeout(function(){t.$refs[e].resetFields()},0)},showcertificate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.$emit("showcertificate",{purchaserAuditId:e,purchaserName:t})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"UpShelvestable"},[a("el-table",{attrs:{data:e.tableData.list,border:""}},[a("el-table-column",{attrs:{prop:"purchaserName",label:"药店名称"}}),e._v(" "),a("el-table-column",{attrs:{label:"药店城市/地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.deliveryPCA)+e._s(t.row.deliveryAddress)+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"业务对接人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.purchaserLinkman))]),e._v(" "),a("div",[e._v(e._s(t.row.purchaserPhone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"首次下单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.row.firstOrderCreateTime))+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"开户资质"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.showcertificate(t.row.purchaserAuditId,t.row.purchaserName)}}},[e._v("查看资质")])]}}])}),e._v(" "),1==e.type?a("el-table-column",{attrs:{label:"操作",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{"split-button":"",type:"primary",size:"mini"},on:{click:function(a){e.showAgreed(t.row.accountId,t.row.purchaserName)}}},[e._v("\n                    同意开户\n                    "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("div",{on:{click:function(a){e.showRefused(t.row.accountId,t.row.purchaserName)}}},[e._v("拒绝开户")])])],1)],1)]}}])}):e._e(),e._v(" "),3==e.type?a("el-table-column",{attrs:{label:"拒绝原因"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.refuseReason)+"\n            ")]}}])}):e._e(),e._v(" "),3==e.type?a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.revokeopenaccount(t.row.accountId)}}},[e._v("撤回")])]}}])}):e._e()],1),e._v(" "),a("el-dialog",{attrs:{title:"同意开户",visible:e.agreeddialogVisible,width:"50%"},on:{"update:visible":function(t){e.agreeddialogVisible=t},open:function(t){e.init("agreedformDom")}}},[a("el-form",{ref:"agreedformDom",attrs:{model:e.agreedform,"label-width":"140px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"开户药店"}},[e._v("\n                        "+e._s(e.agreedform.purchaserName)+"\n                    ")]),e._v(" "),a("el-form-item",{attrs:{label:"开户药店编码",prop:"erpPharmacyCode",rules:{required:!0,message:"请输入药店开户编码",trigger:"blur"}}},[a("el-input",{attrs:{placeholder:"请填写ERP系统里药店编码"},model:{value:e.agreedform.erpPharmacyCode,callback:function(t){e.$set(e.agreedform,"erpPharmacyCode",t)},expression:"agreedform.erpPharmacyCode"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.agreeddialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.agreedopenaccount}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"拒绝开户",visible:e.refuseddialogVisible,width:"50%"},on:{"update:visible":function(t){e.refuseddialogVisible=t},open:function(t){e.init("refusedformDom")}}},[a("el-form",{ref:"refusedformDom",attrs:{model:e.refusedform,"label-width":"140px"}},[a("el-row",[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"开户药店"}},[e._v("\n                        "+e._s(e.refusedform.purchaserName)+"\n                    ")]),e._v(" "),a("el-form-item",{attrs:{label:"拒绝开户原因",prop:"refuseReason",rules:[{required:!0,message:"请填写拒绝原因",trigger:"blur"}]}},[a("el-input",{attrs:{placeholder:"请填写拒绝原因",type:"textarea",rows:3},model:{value:e.refusedform.refuseReason,callback:function(t){e.$set(e.refusedform,"refuseReason",t)},expression:"refusedform.refuseReason"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.refuseddialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.refusedopenaccount}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c={data:function(){return{visible:!1,loadingTab:!1,tableData:{},certificateorderData:{},searchform:{openStatus:0},pageVo:{pageNo:1,size:10}}},mounted:function(){this.getOpenList()},methods:{getOpenList:function(){var e=this;arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.searchform.openStatus;this.loadingTab=!0;var t=o()(this.searchform,{pageVo:this.pageVo});i.a.getopenAccountlist(t).then(function(t){e.loadingTab=!1,e.tableData=t})},reload:function(){this.pageVo={pageNo:1,size:10},this.getOpenList()},toggleTab:function(e){this.pageVo={pageNo:1,size:10};var t=parseInt(e.index);this.searchform.openStatus=t,this.getOpenList(t)},paginationChange:function(e){this.pageVo.pageNo=parseInt(e),this.getOpenList()},paginationSizeChange:function(e){this.pageVo={pageNo:1,size:parseInt(e)},this.getOpenList()},showcertificate:function(e){this.visible=!0,this.certificateorderData={purchaserName:e.purchaserName,purchaserAuditId:e.purchaserAuditId}}},components:{RegisteredTable:a("vSla")(n,l,!1,function(e){a("jr60")},null,null).exports,Certificate:s.a}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("AutoBreadcrumb"),e._v(" "),a("div",{staticClass:"Registered content-box"},[a("el-form",{ref:"form",attrs:{model:e.searchform,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{lg:6}},[a("el-form-item",{attrs:{label:"药店名称"}},[a("el-input",{model:{value:e.searchform.purchaserName,callback:function(t){e.$set(e.searchform,"purchaserName",t)},expression:"searchform.purchaserName"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:10}},[a("el-form-item",{attrs:{label:"首次下单时间","label-width":"120px"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始日期","value-format":"timestamp"},model:{value:e.searchform.firstOrderCreateTimeStart,callback:function(t){e.$set(e.searchform,"firstOrderCreateTimeStart",t)},expression:"searchform.firstOrderCreateTimeStart"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择结束日期","default-time":"23:59:59","value-format":"timestamp"},model:{value:e.searchform.firstOrderCreateTimeEnd,callback:function(t){e.$set(e.searchform,"firstOrderCreateTimeEnd",t)},expression:"searchform.firstOrderCreateTimeEnd"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{md:6}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getOpenList}},[e._v("搜索")])],1)],1)],1)],1),e._v(" "),a("el-tabs",{attrs:{type:"card",value:"first"},on:{"tab-click":e.toggleTab}},[a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTab,expression:"loadingTab"}],attrs:{label:"待开户",name:"first"}},[a("RegisteredTable",{attrs:{tableData:e.tableData,type:1},on:{showcertificate:e.showcertificate,reload:e.reload}})],1),e._v(" "),a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTab,expression:"loadingTab"}],attrs:{label:"已开户",name:"second",lazy:!0}},[a("RegisteredTable",{attrs:{tableData:e.tableData,type:2},on:{showcertificate:e.showcertificate,reload:e.reload}})],1),e._v(" "),a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTab,expression:"loadingTab"}],attrs:{label:"开户失败",name:"third",lazy:!0}},[a("RegisteredTable",{attrs:{tableData:e.tableData,type:3},on:{showcertificate:e.showcertificate,reload:e.reload}})],1)],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next",total:Number(e.tableData.total),"current-page":e.tableData.pageNum,"page-sizes":[10,20,30,50,100],"prev-text":"上一页","next-text":"下一页"},on:{"current-change":e.paginationChange,"size-change":e.paginationSizeChange}})],1)],1),e._v(" "),a("Certificate",{attrs:{visible:e.visible,certificateorderData:e.certificateorderData},on:{"update:visible":function(t){e.visible=t}}})],1)},staticRenderFns:[]};var u=a("vSla")(c,d,!1,function(e){a("ZBm7")},null,null);t.default=u.exports},jr60:function(e,t){}});