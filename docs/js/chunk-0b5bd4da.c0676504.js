(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b5bd4da"],{c0b3:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[t._m(0),e("li",[e("v-toast")],1)])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("a",{attrs:{href:"./demo/ios.html"}},[t._v("iPhone is click")])])}],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Toast")]),e("button",{on:{click:t.fnClick}},[t._v("Toas")]),e("button",{on:{click:t.fnClick}},[t._v("Toas")]),e("button",{on:{click:t.fnClick}},[t._v("Toas")]),e("button",{on:{click:t.fnClick}},[t._v("Toas")]),e("button",{on:{click:t.fnClick}},[t._v("Toas")])])},a=[],s=e("ebb4"),u=e.n(s),c=new u.a({autoClose:1}),f={name:"VToast",data:function(){return{text:"你好呀！骚年"}},methods:{fnClick:function(){c.open(this.text)}}},l=f,p=e("2877"),d=Object(p["a"])(l,i,a,!1,null,null,null),h=d.exports,v={components:{VToast:h},data:function(){return{}}},b=v,y=Object(p["a"])(b,r,o,!1,null,null,null);n["default"]=y.exports},ebb4:function(t,n,e){
/*!
 * https://github.com/bruce-ly/toast-ly 
 * Fri Oct 26 2018 15:21:07 GMT+0800 (中国标准时间)
 */
!function(n,e){t.exports=e()}(0,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=24)}([function(t,n,e){t.exports=!e(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(5),o=e(18);t.exports=e(0)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(14),o=e(15),i=e(17),a=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(8);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(10)(r,o),r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(9)(!1)).push([t.i,"#toast-ly {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    overflow: hidden;\r\n}\r\n\r\n#toast-ly.show, #toast-ly > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#toast-ly > div.animation {\r\n    -webkit-animation: show .2s forwards;\r\n            animation: show .2s forwards;\r\n}\r\n\r\n#toast-ly > div.bg {\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#toast-ly p {\r\n    padding: .4em 1em;\r\n    border-radius: 4px;\r\n}\r\n\r\n#toast-ly p.bg {\r\n    background-color: #fff;\r\n}\r\n\r\n@-webkit-keyframes show {\r\n    0% {\r\n        width: 0;\r\n        height: 0;\r\n        opacity: 0;\r\n        border-radius: 50%;\r\n    }\r\n    80% {\r\n        width: 100vmin;\r\n        height: 100vmin;\r\n        border-radius: 50%;\r\n    }\r\n    100% {\r\n        width: 100vw;\r\n        height: 100vh;\r\n        opacity: 1;\r\n        border-radius: 0;\r\n    }\r\n}\r\n\r\n@keyframes show {\r\n    0% {\r\n        width: 0;\r\n        height: 0;\r\n        opacity: 0;\r\n        border-radius: 50%;\r\n    }\r\n    80% {\r\n        width: 100vmin;\r\n        height: 100vmin;\r\n        border-radius: 50%;\r\n    }\r\n    100% {\r\n        width: 100vw;\r\n        height: 100vh;\r\n        opacity: 1;\r\n        border-radius: 0;\r\n    }\r\n}",""])},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var r={},o=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}((function(){return window&&document&&document.all&&!window.atob})),i=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var r=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}}(),a=null,s=0,u=[],c=e(11);function f(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function p(t,n){var e=i(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),u.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,e);e.insertBefore(n,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=u.indexOf(t);n>=0&&u.splice(n,1)}function h(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){return e.nc}();r&&(t.attrs.nonce=r)}return v(n,t.attrs),p(t,n),n}function v(t,n){Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])}))}function b(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var u=s++;e=a||(a=h(n)),r=m.bind(null,e,u,!1),o=m.bind(null,e,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(n,t.attrs),p(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=c(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),o=function(){d(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(n),r=function(t,n){var e=n.css,r=n.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){d(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=l(t,n);return f(e,n),function(t){for(var o=[],i=0;i<e.length;i++){var a=e[i];(s=r[a.id]).refs--,o.push(s)}for(t&&f(l(t,n),n),i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var y=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function m(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,(function(t,n){return n})).replace(/^'(.*)'$/,(function(t,n){return n}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,n,e){var r=e(13);r(r.S+r.F*!e(0),"Object",{defineProperty:e(5).f})},function(t,n,e){var r=e(1),o=e(3),i=e(4),a=e(19),s=e(22),u=function(t,n,e){var c,f,l,p,d=t&u.F,h=t&u.G,v=t&u.S,b=t&u.P,y=t&u.B,m=h?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,g=h?o:o[n]||(o[n]={}),w=g.prototype||(g.prototype={});for(c in h&&(e=n),e)l=((f=!d&&m&&void 0!==m[c])?m:e)[c],p=y&&f?s(l,r):b&&"function"==typeof l?s(Function.call,l):l,m&&a(m,c,l,t&u.U),g[c]!=l&&i(g,c,p),b&&w[c]!=l&&(w[c]=l)};r.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(0)&&!e(6)((function(){return 7!=Object.defineProperty(e(16)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(4),i=e(20),a=e(21)("src"),s=Function.toString,u=(""+s).split("toString");e(3).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,e,s){var c="function"==typeof e;c&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(c&&(i(e,a)||o(e,a,t[n]?""+t[n]:u.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(23);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.r(n),e(7),e(12);var o=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=n,this.init()}return function(t,n,e){n&&r(t.prototype,n),e&&r(t,e)}(t,[{key:"init",value:function(){var t=this;this._toast=document.createElement("div"),this._toast.id="toast-ly",this._toast.innerHTML='<div class="'.concat(this.options.boxBgClass||"bg"," ").concat(this.options.animation||"animation",'">\n                 <p class="').concat(this.options.textBgClass||"bg",'"></p>\n             </div>'),this._toast.addEventListener("click",(function(n){n.stopPropagation(),t.close()})),document.body.appendChild(this._toast),this._p=document.querySelector("#toast-ly p"),this._p.addEventListener("click",(function(t){t.stopPropagation()}))}},{key:"open",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"text";this._p.textContent=n,this._time&&clearTimeout(this._time),this._toast.classList.add("show"),this.options.autoClose&&(this._time=setTimeout((function(){t.close()}),this.options.duration||3e3))}},{key:"close",value:function(){this._toast.classList.remove("show")}}]),t}();n.default=o}]).default}))}}]);