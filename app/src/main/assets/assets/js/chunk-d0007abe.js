(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0007abe"],{"2ad0":function(t,e,n){},"2d89":function(t,e,n){"use strict";n("c537")},4312:function(t,e,n){},"4eb5":function(t,e,n){var r=n("6981"),o={autoSetContainer:!1,appendToBody:!0},a={install:function(t){var e="3."===t.version.slice(0,2)?t.config.globalProperties:t.prototype;e.$clipboardConfig=o,e.$copyText=function(t,e){return new Promise((function(n,a){var i=document.createElement("button"),s=new r(i,{text:function(){return t},action:function(){return"copy"},container:"object"===typeof e?e:document.body});s.on("success",(function(t){s.destroy(),n(t)})),s.on("error",(function(t){s.destroy(),a(t)})),o.appendToBody&&document.body.appendChild(i),i.click(),o.appendToBody&&document.body.removeChild(i)}))},t.directive("clipboard",{bind:function(t,e,n){if("success"===e.arg)t._vClipboard_success=e.value;else if("error"===e.arg)t._vClipboard_error=e.value;else{var a=new r(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:o.autoSetContainer?t:void 0});a.on("success",(function(e){var n=t._vClipboard_success;n&&n(e)})),a.on("error",(function(e){var n=t._vClipboard_error;n&&n(e)})),t._vClipboard=a}},update:function(t,e){"success"===e.arg?t._vClipboard_success=e.value:"error"===e.arg?t._vClipboard_error=e.value:(t._vClipboard.text=function(){return e.value},t._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){t._vClipboard&&("success"===e.arg?delete t._vClipboard_success:"error"===e.arg?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard))}})},config:o};t.exports=a},"59e6":function(t,e,n){"use strict";n("88cf")},"61c8":function(t,e,n){},6981:function(t,e,n){
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e,n){t.exports=n()}(0,(function(){return e={686:function(t,e,n){"use strict";n.d(e,{default:function(){return m}});e=n(279);var r=n.n(e),o=(e=n(370),n.n(e)),a=(e=n(817),n.n(e));function i(t){try{return document.execCommand(t)}catch(t){return}}var s=function(t){return t=a()(t),i("cut"),t},c=function(t){var e,n,r,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},s="";return"string"==typeof t?(e=t,n="rtl"===document.documentElement.getAttribute("dir"),(r=document.createElement("textarea")).style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[n?"right":"left"]="-9999px",n=window.pageYOffset||document.documentElement.scrollTop,r.style.top="".concat(n,"px"),r.setAttribute("readonly",""),r.value=e,r=r,o.container.appendChild(r),s=a()(r),i("copy"),r.remove()):(s=a()(t),i("copy")),s};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container;e=t.target,t=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==u(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?c(t,{container:r}):e?"cut"===n?s(e):c(e,{container:r}):void 0};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var t,r=h(e);return t=n?(t=h(this).constructor,Reflect.construct(r,arguments,t)):r.apply(this,arguments),r=this,!(t=t)||"object"!==f(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):t}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){if(t="data-clipboard-".concat(t),e.hasAttribute(t))return e.getAttribute(t)}var m=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(i,r());var t,e,n,a=v(i);function i(t,e){var n;return function(t){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this),(n=a.call(this)).resolveOptions(e),n.listenClick(t),n}return t=i,n=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return c(t,e)}},{key:"cut",value:function(t){return s(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e=(t="string"==typeof t?[t]:t,!!document.queryCommandSupported);return t.forEach((function(t){e=e&&!!document.queryCommandSupported(t)})),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=o()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy";t=l({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:n,text:t,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){if(t=b("target",t),t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(t.prototype,e),n&&d(t,n),i}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var r=n(828);function o(t,e,n,o,a){var i=function(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,i,a),{destroy:function(){t.removeEventListener(n,i,a)}}}t.exports=function(t,e,n,r,a){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,a)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return u=e,l=n,(c=t).addEventListener(u,l),{destroy:function(){c.removeEventListener(u,l)}};if(r.nodeList(t))return a=t,i=e,s=n,Array.prototype.forEach.call(a,(function(t){t.addEventListener(i,s)})),{destroy:function(){Array.prototype.forEach.call(a,(function(t){t.removeEventListener(i,s)}))}};if(r.string(t))return t=t,e=e,n=n,o(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var a,i,s,c,u,l}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var a=0,i=r.length;a<i;a++)r[a].fn!==e&&r[a].fn._!==e&&o.push(r[a]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},n={},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t(686).default;function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}var e,n}))},"88cf":function(t,e,n){},"8e41":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"headNav",attrs:{id:"head_nav"}},[n("nav",{ref:"headerNav",style:{backgroundColor:t.bgc||"#fff"}},[n("status-bar"),n("div",{ref:"homeHeadRef",staticClass:"h_content flex-b-center ph15"},[t._t("nav-left"),t.title?n("span",{staticClass:"center"},[t._v(t._s(t.title))]):t._e(),t._t("nav-right")],2)],1),n("div",{ref:"homePlaceholderRef",staticClass:"placeholder_box"}),n("status-bar")],1)},o=[],a=n("b08c"),i={name:"headNav",components:{StatusBar:a["a"]},props:{title:{},bgc:{}},data:function(){return{height:0}},mounted:function(){this.height=this.$el.offsetHeight}},s=i,c=(n("59e6"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,"ee14c836",null);e["a"]=u.exports},"92c3":function(t,e,n){"use strict";n("61c8")},9608:function(t,e,n){"use strict";n("4312")},"99ff":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{on:{click:t.back}})},o=[],a={name:"back",props:["backAction"],methods:{back:function(){this.$emit("click")}}},i=a,s=(n("c0e5"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,"077e7a4a",null);e["a"]=c.exports},"9db6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tsf-dld-wpp"},[n("navigation-bar",{attrs:{title:t.$t("transfer.sj")+t.$t("common.download")}}),n("div",{staticClass:"tsf-dld-con"},[n("div",{staticClass:"tsf-dld-inf"},[n("div",{staticClass:"tsf-link-wpp"},[n("div",{staticClass:"tsf-link-con"},[n("h4",{staticClass:"tsf-cell-tt"},[t._v(t._s(t.$t("transfer.xzTips")))]),n("div",{staticClass:"tsf-code-wpp flex-v-c flex-c"},[n("div",{staticClass:"tsf-code-con"},[t.transferData?n("div",{staticClass:"tsf-code flex-b-center"},[n("i",{staticClass:"flex-1"},[t._v(t._s(t.transferData.number))]),n("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.transferData.number,expression:"transferData.number",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"tsf-copy"},[t._v(" "+t._s(t.$t("invite.fz")+t.$t("user.zym"))+" ")])]):t._e()])]),n("p",{staticClass:"tsf-tips"},[t._v(t._s(t.$t("transfer.zymTips")))]),n("div",{staticClass:"tsf-lk omit"},[t.transferData?n("span",{on:{click:function(e){return t._clientTools.openBrowser(t.transferData.url)}}},[t._v(t._s(t.$t("transfer.lj"))+"："+t._s(t.transferData.url)+" ")]):t._e()])]),n("div",{staticClass:"tsf-mtd-wpp"},[n("div",{staticClass:"tsf-mtd-tt"},[n("span",[t._v(t._s(t.$t("transfer.zy"))+"流程")])]),n("div",{staticClass:"tsf-mth-1"},[t._m(0),t._m(1),n("div",{staticClass:"tsf-sug-wpp"},[n("ul",t._l(t.trasferMethodOne,(function(e,r){return n("li",{key:"m_o_"+r},[n("div",{staticClass:"tsf-sug flex"},[n("span",{staticClass:"flex-1"},[t._v(t._s(e))])])])})),0)]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.transferData&&t.transferData.img1,expression:"transferData && transferData.img1"}],attrs:{src:t.transferData&&t.transferData.img1,alt:""}})]),n("div",{staticClass:"tsf-mth-2"},[t._m(2),t._m(3),n("div",{staticClass:"tsf-sug-wpp"},[n("ul",t._l(t.trasferMethodTwo,(function(e,r){return n("li",{key:"m_t_"+r},[n("div",{staticClass:"tsf-sug flex"},[n("span",{staticClass:"flex-1"},[t._v(t._s(e))])])])})),0)]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.transferData&&t.transferData.img2,expression:"transferData && transferData.img2"}],attrs:{src:t.transferData&&t.transferData.img2,alt:""}})])])])])])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tsf-line-wpp flex-v-c flex-c"},[n("div",{staticClass:"tsf-line-con flex-b-center"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tsf-tt-wpp flex-v-c flex-c"},[n("div",{staticClass:"tsf-mth-tt flex-b-center"},[n("span",[t._v("方法")]),n("i",[t._v("1")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tsf-line-wpp flex-v-c flex-c"},[n("div",{staticClass:"tsf-line-con flex-b-center"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tsf-tt-wpp flex-v-c flex-c"},[n("div",{staticClass:"tsf-mth-tt flex-b-center"},[n("span",[t._v("方法")]),n("i",[t._v("2")])])])}],a=n("2b0e"),i=n("4eb5"),s=n.n(i),c=n("8e41"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"headNav",staticClass:"head_nav"},[n("nav",{ref:"headerNav",staticClass:"b_bottom",class:t.className,style:t.bgc&&{backgroundColor:t.bgc||"#fff"}},[n("status-bar"),n("div",{ref:"headerCon",staticClass:"h_content ph15",class:t.hideBack?"flex-v-c":"flex-b-center"},[t._t("navLt"),t.hideBack||t.$slots.navLt?t._e():n("back",{on:{click:t.backMethods}}),n("span",{staticClass:"omit title"},[t._v(t._s(t.title))]),t.subTitle?n("b",{on:{click:t.subTitleAction}},[t._v(t._s(t.subTitle))]):t._e(),t._t("subtitle")],2),t._t("add-content")],2),n("div",{ref:"placeholderBox",staticClass:"placeholder_box"}),t._t("add-content-pl")],2)},l=[],f=n("b08c"),d=n("99ff"),p={name:"navigationBar",components:{Back:d["a"],StatusBar:f["a"]},props:["title","bgc","subTitle","backAction","className","subAction","hideBack"],data:function(){return{height:0}},mounted:function(){var t=this.$refs.placeholderBox;t&&(t.style.height=this.$refs.headerNav.getBoundingClientRect().height+"px"),this.height=this.$el.offsetHeight},methods:{subTitleAction:function(){this.subAction&&this.subAction()},backMethods:function(){console.log(this.backAction),this.backAction?(console.log("backAction"),this.backAction()):this._clientTools.commandByClient("clientBack")}}},v=p,h=(n("9608"),n("2877")),b=Object(h["a"])(v,u,l,!1,null,"3cbbbeec",null),m=b.exports;a["a"].use(s.a),s.a.config.autoSetContainer=!0;var y={name:"transferDownload",components:{NavigationBar:m,HeadNav:c["a"]},data:function(){return{transferData:null,trasferMethodOne:[this.$t("transfer.fzzym"),this.$t("transfer.xz"),this.$t("transfer.tcsr")],trasferMethodTwo:[this.$t("transfer.fzzym"),this.$t("transfer.xz"),this.$t("transfer.xbsr")]}},created:function(){var t=this;this.onLoad(),window.refreshData=window.pullRefresh=function(){t.onLoad()}},methods:{onCopy:function(){this._clientTools.toast(this.$t("invite.fz")+"成功")},onError:function(){this._clientTools.toast(this.$t("invite.fz")+this.$t("invite.sb"))},onLoad:function(){var t=this;this.$_GET("transfer/transfer_guide").then((function(e){t._clientTools.commandByClient("endRefresh","transfer/download"),console.log(e);var n=e.data;1===+n.status?t.transferData=n.data:t._clientTools.toast(n.message)}))["catch"]((function(){t._clientTools.commandByClient("endRefresh","transfer/download")}))}}},g=y,_=(n("2d89"),Object(h["a"])(g,r,o,!1,null,"06154f72",null));e["default"]=_.exports},b08c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"statusBar",attrs:{id:"statusBar"}})},o=[],a={name:"statusBar",mounted:function(){}},i=a,s=(n("92c3"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,"3fcc79ee",null);e["a"]=c.exports},c0e5:function(t,e,n){"use strict";n("2ad0")},c537:function(t,e,n){}}]);