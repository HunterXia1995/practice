(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{13:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("nav",[i("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[i("div",{staticClass:"pic"}),t._v(" "),i("div",{staticClass:"menu"},t._l(t.menu,(function(e){return i("div",{key:e.name,staticClass:"item-menu"},[i("div",{staticClass:"menu-name"},[t._v(t._s(e.name))]),t._v(" "),e.icon?i("i",{staticClass:"menu-icon el-icon-arrow-down"}):t._e()])})),0)]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"login-introduce"},[i("div",{staticClass:"title"},[t._v("Where the world builds software")]),t._v(" "),i("div",{staticClass:"content"},[t._v("\n      Millions of developers and companies build, ship, and maintain their\n      software on GitHub—the largest and most advanced development platform in\n      the world.\n    ")]),t._v(" "),i("div",{staticClass:"login-button-container"},[i("input",{staticClass:"email",attrs:{placeholder:"Email address",type:"text"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keydownConfirm(e)}}}),t._v(" "),i("button",[t._v("Sign up for GitHub")])])]),t._v(" "),i("div",{staticClass:"need-position"},[i("div",{staticClass:"menu-scroll"},[t._l(t.arr,(function(e,a){return i("div",{key:e,staticClass:"menu-scroll-item",on:{click:function(e){return t.check(a,e)}}},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),i("div",{staticClass:"line"})],2),t._v(" "),i("video",{staticClass:"side-down-video",attrs:{autoplay:!0,loop:"",muted:"",width:"100%",height:"40%"},domProps:{muted:!0}},[i("source",{attrs:{src:"src/video/75DB9F1676DD5D5A4CF8F3B9BAE98BC7.mp4",type:"video/mp4"}})])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("div",[i("div",{staticClass:"wrapper"},[i("p",{staticStyle:{color:"red"},attrs:{id:"text"}},[t._v("我把你当兄弟你却想着复制我？")]),t._v(" "),i("textarea",{attrs:{id:"input"}},[t._v("这是幕后黑手")]),t._v(" "),i("button",{on:{click:t.copyText}},[t._v("copy")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("hr"),t._v(" "),i("hr"),t._v(" "),t._m(5),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",{staticClass:"footer",staticStyle:{width:"100%",height:"50vh"}}),t._v(" "),i("div",{staticStyle:{color:"#fff"}},[t._v(t._s(t.a))]),t._v(" "),i("div",{staticStyle:{color:"#fff"}},[t._v(" "+t._s(t.b)+" ")]),t._v(" "),i("button",{on:{click:t.hunnbb}},[t._v("点一点")])])};a._withStripped=!0;var n={name:"home",data:()=>({a:1,b:2,menu:[{name:"Why GitHub?",icon:!0},{name:"Team",icon:!1},{name:"Enterprise",icon:!1},{name:"Explore",icon:!0},{name:"Marketplace",icon:!1},{name:"Priceing",icon:!0}],arr:["test1","test2","test1893012313"],currentIndex:0}),methods:{copyText(){document.getElementById("text").innerText;document.getElementById("input").select(),document.execCommand("copy"),alert("复制成功")},hunnbb(){this.a=100*this.a;for(let t=0;t<1e5;t++){}this.b=100*this.b},handleCallback(t){alert(JSON.stringify(t))},initImg(t){let e=t.querySelector("img");window.addEventListener("scroll",(function(){e.getAttribute("isLoad")||t.offsetHeight+t.offsetTop<=document.documentElement.clientHeight+document.documentElement.scrollTop&&(e.setAttribute("src",e.getAttribute("data-img")),e.addEventListener("load",(function(){e.style.display="block",e.style.top="0px"})),e.setAttribute("isLoad",!0))}))},check(t,e){let i=e.target,a=(this.$el.querySelector(".menu-scroll"),this.$el.querySelector(".line"));console.log(a),a.style.left=i.offsetLeft+"px",a.style.width=e.target.offsetWidth+"px"},keydownConfirm(t){console.log(t)}},created(){let t={name:"xcz",age:"18"};for(let e of Object.entries(t))console.log(e);console.log(function(t){let e=[],i=0,a=0,n=0;for(let s of t)")"===s?e.length>0?(e.pop(),e.length>0?i+=2:(a+=2,a+=i,n=a,i=0)):e.length>0?(a+=2,a+=i,n=a,i=0):(n=n>a?n:a,a=0,i=0):e.push(s);return n||i}("(()))())("))},mounted(){let t=this.$el.getElementsByClassName("img");for(let e of t)this.initImg(e);this.$nextTick(()=>{});new class{constructor(t){this.distance=t}scroll(){console.log(this)}init(){window.addEventListener("scroll",this.scroll.bind(this))}}(0).init()}},s=i(6),o=i.n(s),l=i(14),c={insert:"head",singleton:!1},r=(o()(l.a,c),l.a.locals,i(7)),d=Object(r.a)(n,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-container"},[e("div",{staticClass:"login"},[e("input",{staticClass:"login-input",staticStyle:{width:"240px",height:"36px"},attrs:{placeholder:"Search Github",type:"text"}}),this._v(" "),e("div",{staticClass:"ope-button sign-in"},[this._v("Sign in")]),this._v(" "),e("div",{staticClass:"ope-button sign-up"},[this._v("Sign up")]),this._v(" "),e("i",{staticClass:"el-icon-s-fold"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{staticClass:"action-img",attrs:{"data-img":"https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.jpg",isLoad:"",src:"",alt:"",srcset:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{color:"red"}},[e("img",{staticStyle:{width:"500px",height:"200px"},attrs:{src:"src/assets/test-400.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"father"},[e("span",{staticClass:"span-1"}),this._v(" "),e("span",{staticClass:"span-1"}),this._v(" "),e("span",{staticClass:"span-1"}),this._v(" "),e("span",{staticClass:"span-1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-father"},[e("div",{staticClass:"l"}),this._v(" "),e("div",{staticClass:"m"},[this._v("1231")]),this._v(" "),e("div",{staticClass:"r"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-father"},[e("div",{staticClass:"l"}),this._v(" "),e("div",{staticClass:"r"}),this._v(" "),e("div",{staticClass:"m"})])}],!1,null,"5954443c",null);d.options.__file="src/views/home/index.vue";e.default=d.exports},14:function(t,e,i){"use strict";var a=i(5),n=i.n(a),s=i(15),o=n()((function(t){return t[1]}));o.i(s.a),o.push([t.i,".home[data-v-5954443c]{padding:10px 6% 0px 6%;background:#040d21;min-height:100vh}@media screen and (max-width: 1200px){.home[data-v-5954443c]{padding-left:5px;padding-right:5px}}nav[data-v-5954443c]{padding:8px 0px;display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}.menu-icon[data-v-5954443c]{color:#c3c3c3}.pic[data-v-5954443c]{width:33.6px;height:33.6px;background:red;border-radius:16.8px}.item-menu[data-v-5954443c],.menu[data-v-5954443c]{display:flex;justify-content:flex-start;align-items:center}.el-icon-s-fold[data-v-5954443c]{display:none}@media screen and (max-width: 1020px){.menu[data-v-5954443c],.sign-in[data-v-5954443c],.login-input[data-v-5954443c]{display:none}.el-icon-s-fold[data-v-5954443c]{display:block;padding-left:20px;font-size:40px}}.item-menu[data-v-5954443c]{cursor:pointer;transition:opacity .4s;margin-left:20px}.item-menu[data-v-5954443c]:hover{opacity:.7}.login[data-v-5954443c]{display:flex;justify-content:flex-start;align-items:center}.login-container[data-v-5954443c]{float:right}.sign-up[data-v-5954443c]{border:1px solid #fff;border-radius:5px}.ope-button[data-v-5954443c]{padding:3px 5px;cursor:pointer;margin-left:10px}input[data-v-5954443c]{-web-kit-appearance:none;-moz-appearance:none;outline:0;padding-left:10px;background:#293244;border-radius:7px;border:none}input[data-v-5954443c]:focus{background:#fff}.login-introduce[data-v-5954443c]{color:#fff;padding-top:100px;width:584px}.login-introduce .title[data-v-5954443c]{font-weight:800;font-size:60px}.login-introduce .content[data-v-5954443c]{font-size:20px}.email[data-v-5954443c],button[data-v-5954443c]{height:48px}.email[data-v-5954443c]{-web-kit-appearance:none;-moz-appearance:none;outline:0;padding-left:10px;background:#fff;border-radius:7px;border:none;width:340.46px}button[data-v-5954443c]{background:#2ca34d;border:none;padding:0px 5px;border-radius:5px;outline:none;cursor:pointer}.need-position[data-v-5954443c]{width:100%;height:80vh;color:#fff}.action-img[data-v-5954443c]{width:100%;height:300px;object-fit:fill;position:absolute;top:30px;transition:all 1s linear}.img[data-v-5954443c]{width:100%;height:300px;position:relative;overflow:hidden}.menu-scroll[data-v-5954443c]{display:flex;justify-content:flex-start;border-bottom:1px solid #ff0;position:relative}.menu-scroll .menu-scroll-item[data-v-5954443c]{margin-left:15px;cursor:pointer}.menu-scroll .line[data-v-5954443c]{width:20px;height:1px;background:blue;bottom:-1px;position:absolute;left:14px;transition:left .3s linear}.father[data-v-5954443c]{display:flex;justify-content:flex-start;flex-wrap:wrap}.father span[data-v-5954443c]{width:300px;height:200px;background:red;margin-right:20px;margin-bottom:10px}span[data-v-5954443c]:nth-last-child(1){margin-right:0px}.flex-father[data-v-5954443c]{display:flex;width:100%;color:#fff}.flex-father div[data-v-5954443c]{flex-basis:100px}.flex-father .l[data-v-5954443c],.flex-father .r[data-v-5954443c]{flex-shrink:2;height:100px;background:red}.flex-father .m[data-v-5954443c]{width:100%;flex-grow:2}.float-father .l[data-v-5954443c]{float:left}.float-father .r[data-v-5954443c]{float:right}.float-father .l[data-v-5954443c],.float-father .r[data-v-5954443c]{width:100px;height:100px;background:#ff0}.float-father .m[data-v-5954443c]{width:100%;height:100px;padding:0 100px}",""]),e.a=o},15:function(t,e,i){"use strict";var a=i(5),n=i.n(a)()((function(t){return t[1]}));n.push([t.i,"@media screen and (max-width: 1200px) {\r\n  .home {\r\n    color: red;\r\n  }\r\n}",""]),e.a=n}}]);