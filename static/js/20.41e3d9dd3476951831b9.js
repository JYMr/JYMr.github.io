webpackJsonp([20],{"+De7":function(e,t,r){"use strict";var n=r("AA3o"),o=r.n(n),i=r("xSur"),a=r.n(i),l=r("LJJC"),s=new(function(){function e(){o()(this,e)}return a()(e,[{key:"getRole",value:function(e){return Object(l.c)("/merchant/supplier/role/list",e).then(function(e){return e})}},{key:"insertRole",value:function(e){return Object(l.c)("/merchant/supplier/role/insert",e).then(function(e){return e})}},{key:"editRole",value:function(e){return Object(l.c)("/merchant/supplier/role/update",e).then(function(e){return e})}},{key:"getRolePermissionByLogin",value:function(e){return Object(l.c)("/merchant/supplier/role/getRolePermissionByLogin",e).then(function(e){return e})}},{key:"getRolePermissionByRoleid",value:function(e){return Object(l.c)("/merchant/supplier/role/getRolePermissionByRoleid/"+e).then(function(e){return e})}},{key:"updateRolePermission",value:function(e){return Object(l.c)("/merchant/supplier/role/updateRolePermission",e).then(function(e){return e})}},{key:"getuserlist",value:function(){return Object(l.c)("/merchant/supplier/user/list").then(function(e){return e})}},{key:"insertuser",value:function(e){return Object(l.c)("/merchant/supplier/user/insert",e).then(function(e){return e})}},{key:"updateuser",value:function(e){return Object(l.c)("/merchant/supplier/user/update",e).then(function(e){return e})}},{key:"resetPassword",value:function(e){return Object(l.c)("/merchant/supplier/user/resetPassword/"+e).then(function(e){return e})}},{key:"freeze",value:function(e){return Object(l.c)("/merchant/supplier/user/freeze/"+e).then(function(e){return e})}},{key:"unfreeze",value:function(e){return Object(l.c)("/merchant/supplier/user/unfreeze/"+e).then(function(e){return e})}}]),e}());t.a=s},g0Fb:function(e,t){},mOGb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("4YfN"),o=r.n(n),i=r("KPSb"),a=r.n(i),l=r("+De7"),s=r("w3CS"),c={props:{visible:{type:Boolean,required:!0,value:!1},user:{value:{}}},data:function(){return{title:"新增用户",dialogVisible:!1,editMode:!1,Roleform:{merchantUserName:"",merchantAccount:"",merchantPassword:"",merchantSupplierRoleid:"",merchantMobile:"",merchantStatus:0},RoleList:[],validator:s.a}},methods:{getRoleList:function(){var e=this;l.a.getRole().then(function(t){e.RoleList=t})},initData:function(){var e=this;setTimeout(function(){if(e.$refs.Roleform.resetFields(),e.editMode=!1,e.getRoleList(),void 0!==e.user.merchant_id){var t=e.user,r=t.merchant_id,n=t.merchant_user_name,o=t.merchant_account,i=t.merchant_mobile,a=t.merchant_status,l=t.role_id;e.Roleform={merchantUserName:n,merchantAccount:o,merchantSupplierRoleid:l,merchantMobile:i,merchantStatus:a,merchantId:r},e.editMode=!0}},0)},insertUser:function(){var e=this;this.$refs.Roleform.validate().then(function(t){if(t){var r=e.Roleform,n=r.merchantPassword;n=a()("#"+n),l.a.insertuser(o()({},r,{merchantPassword:n})).then(function(t){e.$message.success("保存成功"),e.dialogVisible=!1,e.$emit("saveEvent")})}}).catch(function(){})},editRole:function(){var e=this;this.$refs.Roleform.validate().then(function(t){t&&l.a.updateuser(e.Roleform).then(function(t){e.$message.success("保存成功"),e.dialogVisible=!1,e.$emit("saveEvent")})}).catch(function(){})},savesole:function(){this.editMode?this.editRole():this.insertUser()}},watch:{editMode:function(e,t){this.title=e?"编辑用户":"新增用户"},visible:function(e,t){this.dialogVisible=e},dialogVisible:function(e,t){e||this.$emit("update:visible",e)}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t},open:e.initData}},[r("el-form",{ref:"Roleform",attrs:{model:e.Roleform,"label-width":"80px"}},[r("el-row",[r("el-col",{attrs:{span:16,offset:4}},[r("el-form-item",{attrs:{label:"用户姓名",prop:"merchantUserName",rules:[{required:!0,message:"请输入用户姓名",trigger:"blur"}]}},[r("el-input",{model:{value:e.Roleform.merchantUserName,callback:function(t){e.$set(e.Roleform,"merchantUserName",t)},expression:"Roleform.merchantUserName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户账号",prop:"merchantAccount",rules:[{required:!0,message:"请输入用户账号",trigger:"blur"}]}},[r("el-input",{model:{value:e.Roleform.merchantAccount,callback:function(t){e.$set(e.Roleform,"merchantAccount",t)},expression:"Roleform.merchantAccount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"选择角色",prop:"merchantSupplierRoleid",rules:[{required:!0,message:"请选择角色",trigger:"change"}]}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.Roleform.merchantSupplierRoleid,callback:function(t){e.$set(e.Roleform,"merchantSupplierRoleid",t)},expression:"Roleform.merchantSupplierRoleid"}},e._l(e.RoleList,function(e,t){return r("el-option",{key:"RoleItem_"+t,attrs:{label:e.roleName,value:e.roleId}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"merchantMobile",rules:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:e.validator.phone,trigger:"blur"}]}},[r("el-input",{model:{value:e.Roleform.merchantMobile,callback:function(t){e.$set(e.Roleform,"merchantMobile",t)},expression:"Roleform.merchantMobile"}})],1),e._v(" "),e.editMode?e._e():r("el-form-item",{attrs:{label:"商户密码",prop:"merchantPassword",rules:[{required:!0,message:"请输入商户密码",trigger:"blur"},{validator:e.validator.password,trigger:"blur"}]}},[r("el-input",{attrs:{type:"password"},model:{value:e.Roleform.merchantPassword,callback:function(t){e.$set(e.Roleform,"merchantPassword",t)},expression:"Roleform.merchantPassword"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否启用",prop:"merchantStatus"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.Roleform.merchantStatus,callback:function(t){e.$set(e.Roleform,"merchantStatus",t)},expression:"Roleform.merchantStatus"}})],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.savesole}},[e._v("确 定")])],1)],1)},staticRenderFns:[]},m={data:function(){return{form:{},userlistData:[],visible:!1,user:"",loading:!1}},mounted:function(){this.getUserList()},methods:{getUserList:function(){var e=this;this.loading=!0,l.a.getuserlist().then(function(t){e.loading=!1,e.userlistData=t}).catch(function(){e.loading=!1})},resetPassword:function(e){var t=this;this.$confirm("是否重置该账户密码?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.a.resetPassword(e).then(function(e){t.$message.success("重置密码成功，默认密码为: 123456"),t.getUserList()})}).catch(function(){})},freezeUser:function(e){var t=this;this.$confirm("是否禁用账号该账户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.a.freeze(e).then(function(e){t.$message.success("冻结成功"),t.getUserList()})}).catch(function(){})},unfreezeUser:function(e){var t=this;this.$confirm("是否启用账号该账户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.a.unfreeze(e).then(function(e){t.$message.success("解冻成功"),t.getUserList()})}).catch(function(){})},ShowAddMemberDialog:function(e){this.user=e,this.visible=!0}},components:{AddMember:r("vSla")(c,u,!1,null,null,null).exports}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("AutoBreadcrumb"),e._v(" "),r("div",{staticClass:"Member content-box"},[r("el-row",[r("el-col",{attrs:{lg:24}},[r("el-button-group",[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.ShowAddMemberDialog}},[e._v("新增用户")])],1)],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.userlistData,border:""}},[r("el-table-column",{attrs:{label:"用户账号",prop:"merchant_account"}}),e._v(" "),r("el-table-column",{attrs:{label:"用户姓名",prop:"merchant_user_name"}}),e._v(" "),r("el-table-column",{attrs:{label:"手机号码",prop:"merchant_mobile"}}),e._v(" "),r("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),e._v(" "),r("el-table-column",{attrs:{label:"是否启用",prop:"merchant_status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.merchant_status,callback:function(r){e.$set(t.row,"merchant_status",r)},expression:"scope.row.merchant_status"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",prop:"merchant_create_time"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("formatDate")(t.row.merchant_create_time))+"\n                ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-dropdown",{attrs:{"split-button":"",type:"primary",size:"mini"},on:{click:function(r){for(var n=arguments.length,o=Array(n);n--;)o[n]=arguments[n];e.ShowAddMemberDialog.apply(void 0,[t.row].concat(o))}}},[e._v("\n                        编辑\n                        "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[1==t.row.merchant_status?r("div",{on:{click:function(r){e.freezeUser(t.row.merchant_id)}}},[e._v("禁用账号")]):e._e(),e._v(" "),0==t.row.merchant_status?r("div",{on:{click:function(r){e.unfreezeUser(t.row.merchant_id)}}},[e._v("启用账号")]):e._e()]),e._v(" "),r("el-dropdown-item",[r("div",{on:{click:function(r){e.resetPassword(t.row.merchant_id)}}},[e._v("重置密码")])])],1)],1)]}}])})],1)],1),e._v(" "),r("AddMember",{attrs:{visible:e.visible,user:e.user},on:{"update:visible":function(t){e.visible=t},saveEvent:e.getUserList}})],1)},staticRenderFns:[]};var d=r("vSla")(m,f,!1,function(e){r("g0Fb")},null,null);t.default=d.exports}});