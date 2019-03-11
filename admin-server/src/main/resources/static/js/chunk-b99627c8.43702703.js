(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b99627c8","chunk-771c23b0"],{"3ccc":function(t,n,e){var a,i;!function(r,o){a=o,i="function"===typeof a?a.call(n,e,n,t):a,void 0===i||(t.exports=i)}(0,function(t,n,e){var a=function(t,n,e,a,i,r){for(var o=0,s=["webkit","moz","ms","o"],u=0;u<s.length&&!window.requestAnimationFrame;++u)window.requestAnimationFrame=window[s[u]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[u]+"CancelAnimationFrame"]||window[s[u]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var e=(new Date).getTime(),a=Math.max(0,16-(e-o)),i=window.setTimeout(function(){t(e+a)},a);return o=e+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var l=this;for(var c in l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null},r)r.hasOwnProperty(c)&&(l.options[c]=r[c]);""===l.options.separator&&(l.options.useGrouping=!1),l.options.prefix||(l.options.prefix=""),l.options.suffix||(l.options.suffix=""),l.d="string"==typeof t?document.getElementById(t):t,l.startVal=Number(n),l.endVal=Number(e),l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.formatNumber=function(t){var n,e,a,i;if(t=t.toFixed(l.decimals),t+="",n=t.split("."),e=n[0],a=n.length>1?l.options.decimal+n[1]:"",i=/(\d+)(\d{3})/,l.options.useGrouping)for(;i.test(e);)e=e.replace(i,"$1"+l.options.separator+"$2");return l.options.prefix+e+a+l.options.suffix},l.easeOutExpo=function(t,n,e,a){return e*(1-Math.pow(2,-10*t/a))*1024/1023+n},l.easingFn=l.options.easingFn?l.options.easingFn:l.easeOutExpo,l.formattingFn=l.options.formattingFn?l.options.formattingFn:l.formatNumber,l.version=function(){return"1.7.1"},l.printValue=function(t){var n=l.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var n=t-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.startVal=n,cancelAnimationFrame(l.rAF),l.printValue(l.startVal)},l.update=function(t){cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=Number(t),l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count)},l.printValue(l.startVal)};return a})},5774:function(t,n,e){"use strict";var a=e("c98c"),i=e.n(a);i.a},7031:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",{class:t.className,style:{textAlign:"center",color:t.color,fontSize:t.countSize,fontWeight:t.countWeight}},[e("span",{attrs:{id:t.idName}},[t._v(t._s(t.startVal))]),e("span",[t._v(t._s(t.unit))])]),t._t("intro")],2)},i=[],r=(e("b06f"),e("5fa9")),o=e.n(r),s=e("3ccc"),u=e.n(s);function l(t){var n=0,e="";return t<1e3?n=t:t>=1e3&&t<1e6?(n=o()(t/1e3),e="K+"):t>=1e6&&t<1e10?(n=o()(t/1e6),e="M+"):(n=o()(t/1e9),e="B+"),{val:n,unit:e}}var c={data:function(){return{unit:"",demo:{}}},name:"countUp",props:{idName:String,className:String,startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},delay:{type:Number,default:500},options:{type:Object,default:function(){return{useEasing:!0,useGrouping:!0,separator:",",decimal:"."}}},color:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},introText:[String,Number]},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var n=l(t.endVal),e=n.val;t.unit=n.unit;var a={};t.demo=a=new u.a(t.idName,t.startVal,e,t.decimals,t.duration,t.options),a.error||a.start()},t.delay)})},watch:{endVal:function(t){var n=l(t);n.val;this.unit=n.unit}}},m=c,d=e("17cc"),f=Object(d["a"])(m,a,i,!1,null,null,null);n["default"]=f.exports},"9ce3":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Card",{attrs:{padding:0}},[e("div",{staticClass:"infor-card-con"},[e("Col",{staticClass:"infor-card-icon-con",style:{backgroundColor:t.color,color:"white"},attrs:{span:"8"}},[e("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[e("Icon",{attrs:{type:t.iconType,size:t.iconSize}})],1)],1),e("Col",{staticClass:"height-100",attrs:{span:"16"}},[e("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[e("count-up",{staticClass:"infor-card-count user-created-count",attrs:{"id-name":t.idName,"end-val":t.endVal,color:t.color,countSize:t.countSize,countWeight:t.countWeight}},[e("p",{staticClass:"infor-intro-text",attrs:{slot:"intro"},slot:"intro"},[t._v(t._s(t.introText))])])],1)],1)],1)])},i=[],r=(e("b06f"),e("7031")),o={name:"inforCard",components:{countUp:r["default"]},props:{idName:String,endVal:Number,color:String,iconType:String,introText:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},iconSize:{type:Number,default:40}}},s=o,u=(e("5774"),e("17cc")),l=Object(u["a"])(s,a,i,!1,null,null,null);n["default"]=l.exports},c98c:function(t,n,e){}}]);