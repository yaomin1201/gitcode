(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60158aa6"],{"59e6":function(t,s,e){"use strict";e("88cf")},"61c8":function(t,s,e){},8034:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tsf-wpp"},[e("head-nav",{attrs:{title:t.transferAccount?"原"+t.$t("common.zhhu")+"信息":t.$t("common.k")+"始"+t.$t("transfer.zy")}}),e("div",{staticClass:"tsf-con"},[t.transferAccount?e("div",{staticClass:"tsf-cfm-wpp"},[t.transferAccount.uid?e("div",{staticClass:"tsf-cfm-con"},[e("ul",{staticClass:"ul_b_border ph20"},[e("li",{staticClass:"tsf-cell"},[t._v(" ID: "+t._s(t.transferAccount.uid)+" ")]),e("li",{staticClass:"tsf-cell"},[t._v(" 名字: "+t._s(t.transferAccount.name)+" ")]),e("li",{staticClass:"tsf-cell"},[t._v(" "+t._s(t.$t("common.coin"))+": "+t._s(t.transferAccount.money)+" ")]),e("li",{staticClass:"tsf-cell"},[t._v(" VIP: "+t._s(t.transferAccount.end_time)+"到期 ")])])]):t._e(),t.transferAccount.uid?e("div",{staticClass:"tsf-cfm-btns"},[e("span",{staticClass:"btn-theme",on:{click:t.confirmTransfer}},[t._v(t._s(t.$t("common.sure")))]),e("p",{staticClass:"tsf-con-sv",on:{click:function(s){return t._clientTools.openUrl("kefu.do")}}},[t._v(t._s(t.$t("common.lxi"))+"客服")])]):t._e()]):e("div",{staticClass:"tsf-ipt-wpp"},[e("div",{staticClass:"tsf-ipt"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:t.$t("transfer.sr")+t.$t("user.zym")},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}})]),e("div",{staticClass:"tsf-cfm-btns"},[e("span",{staticClass:"btn-theme",on:{click:t.validateTransfer}},[t._v(t._s(t.$t("common.sure")))])])])])],1)},a=[],c=e("8e41"),r={name:"transfer",components:{HeadNav:c["a"]},data:function(){return{code:this.$route.query.code,transferAccount:null,transferLimited:!1}},created:function(){this.code&&(this.transferAccount={},this.validateTransfer())},methods:{confirmTransfer:function(){var t=this;this.transferLimited||(this.transferLimited=!0,console.log("confirm"),this.$_POST("/transfer/transfer",{number:this.code}).then((function(s){t.transferLimited=!1;var e=s.data;t._clientTools.toast(e.message),1===+e.status&&t._clientTools.commandByClient("bottomNavigation",3)}))["catch"]((function(){t.transferLimited=!1})))},validateTransfer:function(){var t=this;this.code&&0!==this.code.length?this.$_POST("transfer/takeOver",{number:this.code}).then((function(s){var e=s.data;1===e.status?(t.transferAccount=e.data,console.log(t.transferAccount)):(t.transferAccount=null,t._clientTools.toast(e.message))})):this._clientTools.toast(this.$t("user.zym")+"不可"+this.$t("common.w")+"空")}}},i=r,o=(e("e437"),e("2877")),l=Object(o["a"])(i,n,a,!1,null,"64041f22",null);s["default"]=l.exports},"88cf":function(t,s,e){},"8e41":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"headNav",attrs:{id:"head_nav"}},[e("nav",{ref:"headerNav",style:{backgroundColor:t.bgc||"#fff"}},[e("status-bar"),e("div",{ref:"homeHeadRef",staticClass:"h_content flex-b-center ph15"},[t._t("nav-left"),t.title?e("span",{staticClass:"center"},[t._v(t._s(t.title))]):t._e(),t._t("nav-right")],2)],1),e("div",{ref:"homePlaceholderRef",staticClass:"placeholder_box"}),e("status-bar")],1)},a=[],c=e("b08c"),r={name:"headNav",components:{StatusBar:c["a"]},props:{title:{},bgc:{}},data:function(){return{height:0}},mounted:function(){this.height=this.$el.offsetHeight}},i=r,o=(e("59e6"),e("2877")),l=Object(o["a"])(i,n,a,!1,null,"ee14c836",null);s["a"]=l.exports},"92c3":function(t,s,e){"use strict";e("61c8")},b08c:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"statusBar",attrs:{id:"statusBar"}})},a=[],c={name:"statusBar",mounted:function(){}},r=c,i=(e("92c3"),e("2877")),o=Object(i["a"])(r,n,a,!1,null,"3fcc79ee",null);s["a"]=o.exports},e437:function(t,s,e){"use strict";e("e708")},e708:function(t,s,e){}}]);