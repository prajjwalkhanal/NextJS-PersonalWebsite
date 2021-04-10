/*! For license information please see _app.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},0:function(t,e,n){n("cM/9"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));var r=n("o0o1"),o=n.n(r),a=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),u=n("md7G"),s=n("foSv"),l=n("q1tI"),f=n.n(l),p=n("i8i4"),d=n.n(p),m=n("8Bbg"),v=n.n(m),h=n("8Kt/"),y=n.n(h),b=n("nOHt"),g=n.n(b),x=n("rePB"),O=n("R/WZ"),w=n("wx14"),k=n("Ff2n"),P=(n("17x9"),n("iuhU")),_=n("H2TA"),j=n("NqtD");function S(t){var e,n,r;return e=t,n=0,r=1,t=(Math.min(Math.max(n,e),r)-n)/(r-n),t=(t-=1)*t*t+1}var C=l.forwardRef((function(t,e){var n,r=t.classes,o=t.className,a=t.color,i=void 0===a?"primary":a,c=t.disableShrink,u=void 0!==c&&c,s=t.size,f=void 0===s?40:s,p=t.style,d=t.thickness,m=void 0===d?3.6:d,v=t.value,h=void 0===v?0:v,y=t.variant,b=void 0===y?"indeterminate":y,g=Object(k.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),x={},O={},_={};if("determinate"===b||"static"===b){var C=2*Math.PI*((44-m)/2);x.strokeDasharray=C.toFixed(3),_["aria-valuenow"]=Math.round(h),"static"===b?(x.strokeDashoffset="".concat(((100-h)/100*C).toFixed(3),"px"),O.transform="rotate(-90deg)"):(x.strokeDashoffset="".concat((n=(100-h)/100,n*n*C).toFixed(3),"px"),O.transform="rotate(".concat((270*S(h/70)).toFixed(3),"deg)"))}return(l.createElement("div",Object(w.a)({className:Object(P.a)(r.root,o,"inherit"!==i&&r["color".concat(Object(j.a)(i))],{indeterminate:r.indeterminate,static:r.static}[b]),style:Object(w.a)(Object(w.a)({width:f,height:f},O),p),ref:e,role:"progressbar"},_,g),l.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},l.createElement("circle",{className:Object(P.a)(r.circle,u&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[b]),style:x,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m}))))})),M=Object(_.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(C),I=n("eDSW"),D=f.a.createElement;function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var A=Object(O.a)({progress:{color:I.n,width:"6rem !important",height:"6rem !important"},wrapperDiv:{margin:"100px auto",padding:"0px",maxWidth:"360px",textAlign:"center",position:"relative",zIndex:"9999",top:"0"},iconWrapper:{display:"block"},title:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){Object(x.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},I.w,{color:"#FFFFFF"})});function B(t){var e=A();return D("div",null,D("div",{className:e.wrapperDiv},D("div",{className:e.iconWrapper},D(M,{className:e.progress})),D("h4",{className:e.title},"Loading page contents for: ",t.path)))}n("qAP/");var R=f.a.createElement;function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}g.a.events.on("routeChangeStart",(function(t){console.log("Loading: ".concat(t)),document.body.classList.add("body-page-transition"),d.a.render(R(B,{path:t}),document.getElementById("page-transition"))})),g.a.events.on("routeChangeComplete",(function(){d.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")})),g.a.events.on("routeChangeError",(function(){d.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")}));var F=function(t){Object(c.a)(n,t);var e=N(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=document.createComment("\n\n=========================================================\n* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-kit\n* Copyright 2020 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n");document.insertBefore(t,document.documentElement)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return R(f.a.Fragment,null,R(y.a,null,R("title",null,"NextJS Material Kit by Creative Tim")),R(e,n))}}],[{key:"getInitialProps",value:function(t){var e,n,r;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=t.Component,t.router,n=t.ctx,r={},!e.getInitialProps){a.next=6;break}return a.next=5,o.a.awrap(e.getInitialProps(n));case 5:r=a.sent;case 6:return a.abrupt("return",{pageProps:r});case 7:case"end":return a.stop()}}),null,null,null,Promise)}}]),n}(v.a)},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?a=!1:(p.add(l),r[s]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=a.default();function m(t){var e=t.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)}))}))}m.rewind=d.rewind,e.default=m},B5Ud:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("48fX"),i=n("tCBg"),c=n("T0f4"),u=n("vJKn");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var f=l(n("q1tI")),p=n("g/15");function d(t){var e,n,r;return u.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,u.awrap((0,p.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=p.AppInitialProps;var m=function(t){a(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return f.default.createElement(n,Object.assign({},r,o||a?{}:{url:v(e)}))}}]),n}(f.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=m,m.origGetInitialProps=d,m.getInitialProps=d},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},Ji7U:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("s4An");function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("qXWd"),i=n("48fX"),c=n("tCBg"),u=n("T0f4"),s=n("mPvQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(c){i(s,c);var u=l(s);function s(t){var o;return r(this,s),o=u.call(this,t),p&&(e.add(a(o)),n(a(o))),o}return o(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),s}(f.Component))}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},"cM/9":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");t.exports=function(t){return r(t)||o(t)||a()}},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("cDf5"),o=n.n(r),a=n("JX7q");function i(t,e){return!e||"object"!==o()(e)&&"function"!==typeof e?Object(a.a)(t):e}},o0o1:function(t,e,n){t.exports=n("ls82")},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}}},[[0,0,2,1,3,19]]]);