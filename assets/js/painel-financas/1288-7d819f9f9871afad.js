(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1288],{5601:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(1024);n(2265);let o=r._(n(4795));function i(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){let n=o.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let l=r.loader;return n({...r,loader:()=>null!=l?l().then(i):Promise.resolve(i(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6005:function(e,t,n){"use strict";function r(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return r}}),n(6491)},4795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let r=n(1024)._(n(2265)),o=n(6005),i=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,i=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),l=t.ssr?r.default.Fragment:o.NoSSR,u=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:i},r.default.createElement(l,null,r.default.createElement(u,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:u.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(5250)},4033:function(e,t,n){e.exports=n(5313)},2862:function(){(function(){var e,t,n,r,o,i=function(e,t){return function(){return e.apply(t,arguments)}},l=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return -1};t=function(){function e(){}return e.prototype.extend=function(e,t){var n,r;for(n in t)r=t[n],null==e[n]&&(e[n]=r);return e},e.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},e.prototype.createEvent=function(e,t,n,r){var o;return null==t&&(t=!1),null==n&&(n=!1),null==r&&(r=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,r):null!=document.createEventObject?(o=document.createEventObject()).eventType=e:o.eventName=e,o},e.prototype.emitEvent=function(e,t){return null!=e.dispatchEvent?e.dispatchEvent(t):t in(null!=e)?e[t]():"on"+t in(null!=e)?e["on"+t]():void 0},e.prototype.addEvent=function(e,t,n){return null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n},e.prototype.removeEvent=function(e,t,n){return null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]},e.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},e}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function e(){this.keys=[],this.values=[]}return e.prototype.get=function(e){var t,n,r,o;for(o=this.keys,t=n=0,r=o.length;n<r;t=++n)if(o[t]===e)return this.values[t]},e.prototype.set=function(e,t){var n,r,o,i;for(i=this.keys,n=r=0,o=i.length;r<o;n=++r)if(i[n]===e){this.values[n]=t;return}return this.keys.push(e),this.values.push(t)},e}()),e=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(e=function(){function e(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return e.notSupported=!0,e.prototype.observe=function(){},e}()),r=this.getComputedStyle||function(e,t){return this.getPropertyValue=function(t){var n;return"float"===t&&(t="styleFloat"),o.test(t)&&t.replace(o,function(e,t){return t.toUpperCase()}),(null!=(n=e.currentStyle)?n[t]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(e){null==e&&(e={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.resetAnimation=i(this.resetAnimation,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults),null!=e.scrollContainer&&(this.config.scrollContainer=document.querySelector(e.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var e;return this.element=window.document.documentElement,"interactive"===(e=document.readyState)||"complete"===e?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var t,n,r,o,i;if(this.stopped=!1,this.boxes=(function(){var e,n,r,o;for(e=0,r=this.element.querySelectorAll("."+this.config.boxClass),o=[],n=r.length;e<n;e++)t=r[e],o.push(t);return o}).call(this),this.all=(function(){var e,n,r,o;for(e=0,r=this.boxes,o=[],n=r.length;e<n;e++)t=r[e],o.push(t);return o}).call(this),this.boxes.length){if(this.disabled())this.resetStyle();else for(n=0,r=(o=this.boxes).length;n<r;n++)t=o[n],this.applyStyle(t,!0)}if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new e((i=this,function(e){var t,n,r,o,l;for(t=0,l=[],n=e.length;t<n;t++)o=e[t],l.push((function(){var e,t,n,i;for(e=0,n=o.addedNodes||[],i=[],t=n.length;e<t;e++)r=n[e],i.push(this.doSync(r));return i}).call(i));return l})).observe(document.body,{childList:!0,subtree:!0})},o.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},o.prototype.sync=function(t){if(e.notSupported)return this.doSync(this.element)},o.prototype.doSync=function(e){var t,n,r,o,i;if(null==e&&(e=this.element),1===e.nodeType){for(n=0,o=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),i=[],r=o.length;n<r;n++)t=o[n],0>l.call(this.all,t)?(this.boxes.push(t),this.all.push(t),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(t,!0),i.push(this.scrolled=!0)):i.push(void 0);return i}},o.prototype.show=function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),this.util().emitEvent(e,this.wowEvent),this.util().addEvent(e,"animationend",this.resetAnimation),this.util().addEvent(e,"oanimationend",this.resetAnimation),this.util().addEvent(e,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(e,"MSAnimationEnd",this.resetAnimation),e},o.prototype.applyStyle=function(e,t){var n,r,o,i;return r=e.getAttribute("data-wow-duration"),n=e.getAttribute("data-wow-delay"),o=e.getAttribute("data-wow-iteration"),this.animate((i=this,function(){return i.customStyle(e,t,r,n,o)}))},o.prototype.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},o.prototype.resetStyle=function(){var e,t,n,r,o;for(t=0,r=this.boxes,o=[],n=r.length;t<n;t++)e=r[t],o.push(e.style.visibility="visible");return o},o.prototype.resetAnimation=function(e){var t;if(e.type.toLowerCase().indexOf("animationend")>=0)return(t=e.target||e.srcElement).className=t.className.replace(this.config.animateClass,"").trim()},o.prototype.customStyle=function(e,t,n,r,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),r&&this.vendorSet(e.style,{animationDelay:r}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(e,t){var n,r,o,i;for(n in r=[],t)o=t[n],e[""+n]=o,r.push((function(){var t,r,l,u;for(t=0,l=this.vendors,u=[],r=l.length;t<r;t++)i=l[t],u.push(e[""+i+n.charAt(0).toUpperCase()+n.substr(1)]=o);return u}).call(this));return r},o.prototype.vendorCSS=function(e,t){var n,o,i,l,u,a;for(n=0,l=(u=r(e)).getPropertyCSSValue(t),o=(i=this.vendors).length;n<o;n++)a=i[n],l=l||u.getPropertyCSSValue("-"+a+"-"+t);return l},o.prototype.animationName=function(e){var t;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=r(e).getPropertyValue("animation-name")}return"none"===t?"":t},o.prototype.cacheAnimationName=function(e){return this.animationNameCache.set(e,this.animationName(e))},o.prototype.cachedAnimationName=function(e){return this.animationNameCache.get(e)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var e;if(this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var t,n,r,o;for(t=0,r=this.boxes,o=[],n=r.length;t<n;t++)if(e=r[t]){if(this.isVisible(e)){this.show(e);continue}o.push(e)}return o}).call(this),!(this.boxes.length||this.config.live)))return this.stop()},o.prototype.offsetTop=function(e){for(var t;void 0===e.offsetTop;)e=e.parentNode;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},o.prototype.isVisible=function(e){var t,n,r,o,i;return n=e.getAttribute("data-wow-offset")||this.config.offset,o=(i=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,t=(r=this.offsetTop(e))+e.clientHeight,r<=o&&t>=i},o.prototype.util=function(){return null!=this._util?this._util:this._util=new t},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this)},9281:function(e,t,n){"use strict";n.d(t,{v:function(){return eE}});var r,o,i,l,u,a,s,c,d,f,p,m,h,v,y=n(2265),g=n.t(y,2);function b(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b),r}function E(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var w=((r=w||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),S=((o=S||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function x({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l}){let u=O(t,e);if(i)return I(u,n,r,l);let a=null!=o?o:0;if(2&a){let{static:e=!1,...t}=u;if(e)return I(t,n,r,l)}if(1&a){let{unmount:e=!0,...t}=u;return b(e?0:1,{0:()=>null,1:()=>I({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return I(u,n,r,l)}function I(e,t={},n,r){let{as:o=n,children:i,refName:l="ref",...u}=C(e,["unmount","static"]),a=void 0!==e.ref?{[l]:e.ref}:{},s="function"==typeof i?i(t):i;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(o===y.Fragment&&Object.keys(P(u)).length>0){if(!(0,y.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=s.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>E(null==e?void 0:e.className(...t),u.className):E(null==e?void 0:e.className,u.className);return(0,y.cloneElement)(s,Object.assign({},O(s.props,P(C(u,["ref"]))),c,a,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,a.ref),t?{className:t}:{}))}return(0,y.createElement)(o,Object.assign({},C(u,["ref"]),o!==y.Fragment&&a,o!==y.Fragment&&c),s)}function O(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function N(e){var t;return Object.assign((0,y.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function P(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function C(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}function M(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){var n;let r={current:!0};return n=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=M();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function A(){let[e]=(0,y.useState)(M);return(0,y.useEffect)(()=>()=>e.dispose(),[e]),e}var F=Object.defineProperty,R=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t,n)=>(R(e,"symbol"!=typeof t?t+"":t,n),n);class _{constructor(){T(this,"current",this.detect()),T(this,"handoffState","pending"),T(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let k=new _,D=(e,t)=>{k.isServer?(0,y.useEffect)(e,t):(0,y.useLayoutEffect)(e,t)};function L(e){let t=(0,y.useRef)(e);return D(()=>{t.current=e},[e]),t}let j=function(e){let t=L(e);return y.useCallback((...e)=>t.current(...e),[t])},H=Symbol();function U(...e){let t=(0,y.useRef)(e);(0,y.useEffect)(()=>{t.current=e},[e]);let n=j(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[H]))?void 0:n}let q=null!=(v=y.useId)?v:function(){let e=function(){let e;let t=(e="undefined"==typeof document,(0,g.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=y.useState(k.isHandoffComplete);return n&&!1===k.isHandoffComplete&&r(!1),y.useEffect(()=>{!0!==n&&r(!0)},[n]),y.useEffect(()=>k.handoff(),[]),!t&&n}(),[t,n]=y.useState(e?()=>k.nextId():null);return D(()=>{null===t&&n(k.nextId())},[t]),null!=t?""+t:void 0};var W=((i=W||{}).Space=" ",i.Enter="Enter",i.Escape="Escape",i.Backspace="Backspace",i.Delete="Delete",i.ArrowLeft="ArrowLeft",i.ArrowUp="ArrowUp",i.ArrowRight="ArrowRight",i.ArrowDown="ArrowDown",i.Home="Home",i.End="End",i.PageUp="PageUp",i.PageDown="PageDown",i.Tab="Tab",i),V=((l=V||{})[l.First=0]="First",l[l.Previous=1]="Previous",l[l.Next=2]="Next",l[l.Last=3]="Last",l[l.Specific=4]="Specific",l[l.Nothing=5]="Nothing",l);function B(e){return k.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let $=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var K=((u=K||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),z=((a=z||{})[a.Error=0]="Error",a[a.Overflow=1]="Overflow",a[a.Success=2]="Success",a[a.Underflow=3]="Underflow",a),Q=((s=Q||{})[s.Previous=-1]="Previous",s[s.Next=1]="Next",s);function G(e=document.body){return null==e?[]:Array.from(e.querySelectorAll($)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var Y=((c=Y||{})[c.Strict=0]="Strict",c[c.Loose=1]="Loose",c);function X(e,t=0){var n;return e!==(null==(n=B(e))?void 0:n.body)&&b(t,{0:()=>e.matches($),1(){let t=e;for(;null!==t;){if(t.matches($))return!0;t=t.parentElement}return!1}})}function J(e){let t=B(e);M().nextFrame(()=>{t&&!X(t.activeElement,0)&&(null==e||e.focus({preventScroll:!0}))})}var Z=((d=Z||{})[d.Keyboard=0]="Keyboard",d[d.Mouse=1]="Mouse",d);function ee(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function et(e,t,n){let r=L(t);(0,y.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let en=(0,y.createContext)(null);en.displayName="OpenClosedContext";var er=((f=er||{})[f.Open=1]="Open",f[f.Closed=2]="Closed",f[f.Closing=4]="Closing",f[f.Opening=8]="Opening",f);function eo({value:e,children:t}){return y.createElement(en.Provider,{value:e},t)}function ei(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function el(e){return[e.screenX,e.screenY]}let eu=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ea(e){var t,n;let r=null!=(t=e.innerText)?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let i=!1;for(let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),i=!0;let l=i?null!=(n=o.innerText)?n:"":r;return eu.test(l)&&(l=l.replace(eu,"")),l}var es=((p=es||{})[p.Open=0]="Open",p[p.Closed=1]="Closed",p),ec=((m=ec||{})[m.Pointer=0]="Pointer",m[m.Other=1]="Other",m),ed=((h=ed||{})[h.OpenMenu=0]="OpenMenu",h[h.CloseMenu=1]="CloseMenu",h[h.GoToItem=2]="GoToItem",h[h.Search=3]="Search",h[h.ClearSearch=4]="ClearSearch",h[h.RegisterItem=5]="RegisterItem",h[h.UnregisterItem=6]="UnregisterItem",h);function ef(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=ee(t(e.items.slice()),e=>e.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return -1===o&&(o=null),{items:r,activeItemIndex:o}}let ep={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var n;let r=ef(e),o=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===o||!(r.length-n-1>=o))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=o)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?r:i}(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled}),i=o?e.items.indexOf(o):-1;return -1===i||i===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=ef(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=ef(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},em=(0,y.createContext)(null);function eh(e){let t=(0,y.useContext)(em);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eh),t}return t}function ev(e,t){return b(t.type,ep,e,t)}em.displayName="MenuContext";let ey=y.Fragment,eg=w.RenderStrategy|w.Static,eb=y.Fragment,eE=Object.assign(N(function(e,t){let{__demoMode:n=!1,...r}=e,o=(0,y.useReducer)(ev,{__demoMode:n,menuState:n?0:1,buttonRef:(0,y.createRef)(),itemsRef:(0,y.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:l,buttonRef:u},a]=o,s=U(t);!function(e,t,n=!0){var r;let o,i=(0,y.useRef)(!1);function l(n,r){if(!i.current||n.defaultPrevented)return;let o=r(n);if(null!==o&&o.getRootNode().contains(o)&&o.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(o)||n.composed&&n.composedPath().includes(e))return}return X(o,Y.Loose)||-1===o.tabIndex||n.preventDefault(),t(n,o)}}(0,y.useEffect)(()=>{requestAnimationFrame(()=>{i.current=n})},[n]);let u=(0,y.useRef)(null);et("pointerdown",e=>{var t,n;i.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),et("mousedown",e=>{var t,n;i.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),et("click",e=>{u.current&&(l(e,()=>u.current),u.current=null)},!0),et("touchend",e=>l(e,()=>e.target instanceof HTMLElement?e.target:null),!0),r="blur",o=L(e=>l(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null)),(0,y.useEffect)(()=>{function e(e){o.current(e)}return window.addEventListener(r,e,!0),()=>window.removeEventListener(r,e,!0)},[r,!0])}([u,l],(e,t)=>{var n;a({type:1}),X(t,Y.Loose)||(e.preventDefault(),null==(n=u.current)||n.focus())},0===i);let c=j(()=>{a({type:1})}),d=(0,y.useMemo)(()=>({open:0===i,close:c}),[i,c]);return y.createElement(em.Provider,{value:o},y.createElement(eo,{value:b(i,{0:er.Open,1:er.Closed})},x({ourProps:{ref:s},theirProps:r,slot:d,defaultTag:ey,name:"Menu"})))}),{Button:N(function(e,t){var n;let r=q(),{id:o=`headlessui-menu-button-${r}`,...i}=e,[l,u]=eh("Menu.Button"),a=U(l.buttonRef,t),s=A(),c=j(e=>{switch(e.key){case W.Space:case W.Enter:case W.ArrowDown:e.preventDefault(),e.stopPropagation(),u({type:0}),s.nextFrame(()=>u({type:2,focus:V.First}));break;case W.ArrowUp:e.preventDefault(),e.stopPropagation(),u({type:0}),s.nextFrame(()=>u({type:2,focus:V.Last}))}}),d=j(e=>{e.key===W.Space&&e.preventDefault()}),f=j(t=>{if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(t.currentTarget))return t.preventDefault();e.disabled||(0===l.menuState?(u({type:1}),s.nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),u({type:0})))}),p=(0,y.useMemo)(()=>({open:0===l.menuState}),[l]);return x({ourProps:{ref:a,id:o,type:function(e,t){let[n,r]=(0,y.useState)(()=>ei(e));return D(()=>{r(ei(e))},[e.type,e.as]),D(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,l.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=l.itemsRef.current)?void 0:n.id,"aria-expanded":0===l.menuState,onKeyDown:c,onKeyUp:d,onClick:f},theirProps:i,slot:p,defaultTag:"button",name:"Menu.Button"})}),Items:N(function(e,t){var n,r;let o=q(),{id:i=`headlessui-menu-items-${o}`,...l}=e,[u,a]=eh("Menu.Items"),s=U(u.itemsRef,t),c=function(...e){return(0,y.useMemo)(()=>B(...e),[...e])}(u.itemsRef),d=A(),f=(0,y.useContext)(en),p=null!==f?(f&er.Open)===er.Open:0===u.menuState;(0,y.useEffect)(()=>{let e=u.itemsRef.current;e&&0===u.menuState&&e!==(null==c?void 0:c.activeElement)&&e.focus({preventScroll:!0})},[u.menuState,u.itemsRef,c]),function({container:e,accept:t,walk:n,enabled:r=!0}){let o=(0,y.useRef)(t),i=(0,y.useRef)(n);(0,y.useEffect)(()=>{o.current=t,i.current=n},[t,n]),D(()=>{if(!e||!r)return;let t=B(e);if(!t)return;let n=o.current,l=i.current,u=Object.assign(e=>n(e),{acceptNode:n}),a=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;a.nextNode();)l(a.currentNode)},[e,r,o,i])}({container:u.itemsRef.current,enabled:0===u.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let m=j(e=>{var t,n;switch(d.dispose(),e.key){case W.Space:if(""!==u.searchQuery)return e.preventDefault(),e.stopPropagation(),a({type:3,value:e.key});case W.Enter:if(e.preventDefault(),e.stopPropagation(),a({type:1}),null!==u.activeItemIndex){let{dataRef:e}=u.items[u.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}J(u.buttonRef.current);break;case W.ArrowDown:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:V.Next});case W.ArrowUp:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:V.Previous});case W.Home:case W.PageUp:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:V.First});case W.End:case W.PageDown:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:V.Last});case W.Escape:e.preventDefault(),e.stopPropagation(),a({type:1}),M().nextFrame(()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case W.Tab:e.preventDefault(),e.stopPropagation(),a({type:1}),M().nextFrame(()=>{var t,n;t=u.buttonRef.current,n=e.shiftKey?K.Previous:K.Next,function(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var i,l,u;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?ee(e):e:G(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,h;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(h=s[e])||h.focus(f),p+=c}while(h!==a.activeElement);6&t&&null!=(u=null==(l=null==(i=h)?void 0:i.matches)?void 0:l.call(i,"textarea,input"))&&u&&h.select()}(G(),n,{relativeTo:t})});break;default:1===e.key.length&&(a({type:3,value:e.key}),d.setTimeout(()=>a({type:4}),350))}}),h=j(e=>{e.key===W.Space&&e.preventDefault()}),v=(0,y.useMemo)(()=>({open:0===u.menuState}),[u]);return x({ourProps:{"aria-activedescendant":null===u.activeItemIndex||null==(n=u.items[u.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=u.buttonRef.current)?void 0:r.id,id:i,onKeyDown:m,onKeyUp:h,role:"menu",tabIndex:0,ref:s},theirProps:l,slot:v,defaultTag:"div",features:eg,visible:p,name:"Menu.Items"})}),Item:N(function(e,t){let n,r,o,i=q(),{id:l=`headlessui-menu-item-${i}`,disabled:u=!1,...a}=e,[s,c]=eh("Menu.Item"),d=null!==s.activeItemIndex&&s.items[s.activeItemIndex].id===l,f=(0,y.useRef)(null),p=U(t,f);D(()=>{if(s.__demoMode||0!==s.menuState||!d||0===s.activationTrigger)return;let e=M();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=f.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[s.__demoMode,f,d,s.menuState,s.activationTrigger,s.activeItemIndex]);let m=(n=(0,y.useRef)(""),r=(0,y.useRef)(""),j(()=>{let e=f.current;if(!e)return"";let t=e.innerText;if(n.current===t)return r.current;let o=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():ea(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return ea(e).trim()})(e).trim().toLowerCase();return n.current=t,r.current=o,o})),h=(0,y.useRef)({disabled:u,domRef:f,get textValue(){return m()}});D(()=>{h.current.disabled=u},[h,u]),D(()=>(c({type:5,id:l,dataRef:h}),()=>c({type:6,id:l})),[h,l]);let v=j(()=>{c({type:1})}),g=j(e=>{if(u)return e.preventDefault();c({type:1}),J(s.buttonRef.current)}),b=j(()=>{if(u)return c({type:2,focus:V.Nothing});c({type:2,focus:V.Specific,id:l})}),E=(o=(0,y.useRef)([-1,-1]),{wasMoved(e){let t=el(e);return(o.current[0]!==t[0]||o.current[1]!==t[1])&&(o.current=t,!0)},update(e){o.current=el(e)}}),w=j(e=>E.update(e)),S=j(e=>{E.wasMoved(e)&&(u||d||c({type:2,focus:V.Specific,id:l,trigger:0}))}),I=j(e=>{E.wasMoved(e)&&(u||d&&c({type:2,focus:V.Nothing}))}),O=(0,y.useMemo)(()=>({active:d,disabled:u,close:v}),[d,u,v]);return x({ourProps:{id:l,ref:p,role:"menuitem",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,disabled:void 0,onClick:g,onFocus:b,onPointerEnter:w,onMouseEnter:w,onPointerMove:S,onMouseMove:S,onPointerLeave:I,onMouseLeave:I},theirProps:a,slot:O,defaultTag:eb,name:"Menu.Item"})})})}}]);