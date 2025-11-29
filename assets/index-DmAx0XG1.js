(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function o(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=o(l);fetch(l.href,d)}})();function tc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eu={exports:{}},$i={},tu={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function e1(){if($p)return me;$p=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,b={};function _(S,L,Y){this.props=S,this.context=L,this.refs=b,this.updater=Y||T}_.prototype.isReactComponent={},_.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},_.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function D(){}D.prototype=_.prototype;function O(S,L,Y){this.props=S,this.context=L,this.refs=b,this.updater=Y||T}var V=O.prototype=new D;V.constructor=O,j(V,_.prototype),V.isPureReactComponent=!0;var H=Array.isArray,F=Object.prototype.hasOwnProperty,U={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function Z(S,L,Y){var ee,ie={},ae=null,re=null;if(L!=null)for(ee in L.ref!==void 0&&(re=L.ref),L.key!==void 0&&(ae=""+L.key),L)F.call(L,ee)&&!K.hasOwnProperty(ee)&&(ie[ee]=L[ee]);var le=arguments.length-2;if(le===1)ie.children=Y;else if(1<le){for(var he=Array(le),Le=0;Le<le;Le++)he[Le]=arguments[Le+2];ie.children=he}if(S&&S.defaultProps)for(ee in le=S.defaultProps,le)ie[ee]===void 0&&(ie[ee]=le[ee]);return{$$typeof:t,type:S,key:ae,ref:re,props:ie,_owner:U.current}}function ve(S,L){return{$$typeof:t,type:S.type,key:L,ref:S.ref,props:S.props,_owner:S._owner}}function ke(S){return typeof S=="object"&&S!==null&&S.$$typeof===t}function Be(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return L[Y]})}var Ye=/\/+/g;function Te(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Be(""+S.key):L.toString(36)}function Ue(S,L,Y,ee,ie){var ae=typeof S;(ae==="undefined"||ae==="boolean")&&(S=null);var re=!1;if(S===null)re=!0;else switch(ae){case"string":case"number":re=!0;break;case"object":switch(S.$$typeof){case t:case r:re=!0}}if(re)return re=S,ie=ie(re),S=ee===""?"."+Te(re,0):ee,H(ie)?(Y="",S!=null&&(Y=S.replace(Ye,"$&/")+"/"),Ue(ie,L,Y,"",function(Le){return Le})):ie!=null&&(ke(ie)&&(ie=ve(ie,Y+(!ie.key||re&&re.key===ie.key?"":(""+ie.key).replace(Ye,"$&/")+"/")+S)),L.push(ie)),1;if(re=0,ee=ee===""?".":ee+":",H(S))for(var le=0;le<S.length;le++){ae=S[le];var he=ee+Te(ae,le);re+=Ue(ae,L,Y,he,ie)}else if(he=x(S),typeof he=="function")for(S=he.call(S),le=0;!(ae=S.next()).done;)ae=ae.value,he=ee+Te(ae,le++),re+=Ue(ae,L,Y,he,ie);else if(ae==="object")throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return re}function qe(S,L,Y){if(S==null)return S;var ee=[],ie=0;return Ue(S,ee,"","",function(ae){return L.call(Y,ae,ie++)}),ee}function ye(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var de={current:null},B={transition:null},Q={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:B,ReactCurrentOwner:U};function R(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:qe,forEach:function(S,L,Y){qe(S,function(){L.apply(this,arguments)},Y)},count:function(S){var L=0;return qe(S,function(){L++}),L},toArray:function(S){return qe(S,function(L){return L})||[]},only:function(S){if(!ke(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},me.Component=_,me.Fragment=o,me.Profiler=l,me.PureComponent=O,me.StrictMode=s,me.Suspense=p,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,me.act=R,me.cloneElement=function(S,L,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=j({},S.props),ie=S.key,ae=S.ref,re=S._owner;if(L!=null){if(L.ref!==void 0&&(ae=L.ref,re=U.current),L.key!==void 0&&(ie=""+L.key),S.type&&S.type.defaultProps)var le=S.type.defaultProps;for(he in L)F.call(L,he)&&!K.hasOwnProperty(he)&&(ee[he]=L[he]===void 0&&le!==void 0?le[he]:L[he])}var he=arguments.length-2;if(he===1)ee.children=Y;else if(1<he){le=Array(he);for(var Le=0;Le<he;Le++)le[Le]=arguments[Le+2];ee.children=le}return{$$typeof:t,type:S.type,key:ie,ref:ae,props:ee,_owner:re}},me.createContext=function(S){return S={$$typeof:f,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:d,_context:S},S.Consumer=S},me.createElement=Z,me.createFactory=function(S){var L=Z.bind(null,S);return L.type=S,L},me.createRef=function(){return{current:null}},me.forwardRef=function(S){return{$$typeof:h,render:S}},me.isValidElement=ke,me.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:ye}},me.memo=function(S,L){return{$$typeof:g,type:S,compare:L===void 0?null:L}},me.startTransition=function(S){var L=B.transition;B.transition={};try{S()}finally{B.transition=L}},me.unstable_act=R,me.useCallback=function(S,L){return de.current.useCallback(S,L)},me.useContext=function(S){return de.current.useContext(S)},me.useDebugValue=function(){},me.useDeferredValue=function(S){return de.current.useDeferredValue(S)},me.useEffect=function(S,L){return de.current.useEffect(S,L)},me.useId=function(){return de.current.useId()},me.useImperativeHandle=function(S,L,Y){return de.current.useImperativeHandle(S,L,Y)},me.useInsertionEffect=function(S,L){return de.current.useInsertionEffect(S,L)},me.useLayoutEffect=function(S,L){return de.current.useLayoutEffect(S,L)},me.useMemo=function(S,L){return de.current.useMemo(S,L)},me.useReducer=function(S,L,Y){return de.current.useReducer(S,L,Y)},me.useRef=function(S){return de.current.useRef(S)},me.useState=function(S){return de.current.useState(S)},me.useSyncExternalStore=function(S,L,Y){return de.current.useSyncExternalStore(S,L,Y)},me.useTransition=function(){return de.current.useTransition()},me.version="18.3.1",me}var Np;function nc(){return Np||(Np=1,tu.exports=e1()),tu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function t1(){if(zp)return $i;zp=1;var t=nc(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(h,p,g){var y,v={},x=null,T=null;g!==void 0&&(x=""+g),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(T=p.ref);for(y in p)s.call(p,y)&&!d.hasOwnProperty(y)&&(v[y]=p[y]);if(h&&h.defaultProps)for(y in p=h.defaultProps,p)v[y]===void 0&&(v[y]=p[y]);return{$$typeof:r,type:h,key:x,ref:T,props:v,_owner:l.current}}return $i.Fragment=o,$i.jsx=f,$i.jsxs=f,$i}var Fp;function n1(){return Fp||(Fp=1,eu.exports=t1()),eu.exports}var C=n1(),G=nc();const ge=tc(G);var xs={},nu={exports:{}},Ct={},ru={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function r1(){return Bp||(Bp=1,function(t){function r(B,Q){var R=B.length;B.push(Q);e:for(;0<R;){var S=R-1>>>1,L=B[S];if(0<l(L,Q))B[S]=Q,B[R]=L,R=S;else break e}}function o(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Q=B[0],R=B.pop();if(R!==Q){B[0]=R;e:for(var S=0,L=B.length,Y=L>>>1;S<Y;){var ee=2*(S+1)-1,ie=B[ee],ae=ee+1,re=B[ae];if(0>l(ie,R))ae<L&&0>l(re,ie)?(B[S]=re,B[ae]=R,S=ae):(B[S]=ie,B[ee]=R,S=ee);else if(ae<L&&0>l(re,R))B[S]=re,B[ae]=R,S=ae;else break e}}return Q}function l(B,Q){var R=B.sortIndex-Q.sortIndex;return R!==0?R:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();t.unstable_now=function(){return f.now()-h}}var p=[],g=[],y=1,v=null,x=3,T=!1,j=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(B){for(var Q=o(g);Q!==null;){if(Q.callback===null)s(g);else if(Q.startTime<=B)s(g),Q.sortIndex=Q.expirationTime,r(p,Q);else break;Q=o(g)}}function H(B){if(b=!1,V(B),!j)if(o(p)!==null)j=!0,ye(F);else{var Q=o(g);Q!==null&&de(H,Q.startTime-B)}}function F(B,Q){j=!1,b&&(b=!1,D(Z),Z=-1),T=!0;var R=x;try{for(V(Q),v=o(p);v!==null&&(!(v.expirationTime>Q)||B&&!Be());){var S=v.callback;if(typeof S=="function"){v.callback=null,x=v.priorityLevel;var L=S(v.expirationTime<=Q);Q=t.unstable_now(),typeof L=="function"?v.callback=L:v===o(p)&&s(p),V(Q)}else s(p);v=o(p)}if(v!==null)var Y=!0;else{var ee=o(g);ee!==null&&de(H,ee.startTime-Q),Y=!1}return Y}finally{v=null,x=R,T=!1}}var U=!1,K=null,Z=-1,ve=5,ke=-1;function Be(){return!(t.unstable_now()-ke<ve)}function Ye(){if(K!==null){var B=t.unstable_now();ke=B;var Q=!0;try{Q=K(!0,B)}finally{Q?Te():(U=!1,K=null)}}else U=!1}var Te;if(typeof O=="function")Te=function(){O(Ye)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,qe=Ue.port2;Ue.port1.onmessage=Ye,Te=function(){qe.postMessage(null)}}else Te=function(){_(Ye,0)};function ye(B){K=B,U||(U=!0,Te())}function de(B,Q){Z=_(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){j||T||(j=!0,ye(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return o(p)},t.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var R=x;x=Q;try{return B()}finally{x=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var R=x;x=B;try{return Q()}finally{x=R}},t.unstable_scheduleCallback=function(B,Q,R){var S=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?S+R:S):R=S,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=R+L,B={id:y++,callback:Q,priorityLevel:B,startTime:R,expirationTime:L,sortIndex:-1},R>S?(B.sortIndex=R,r(g,B),o(p)===null&&B===o(g)&&(b?(D(Z),Z=-1):b=!0,de(H,R-S))):(B.sortIndex=L,r(p,B),j||T||(j=!0,ye(F))),B},t.unstable_shouldYield=Be,t.unstable_wrapCallback=function(B){var Q=x;return function(){var R=x;x=Q;try{return B.apply(this,arguments)}finally{x=R}}}}(iu)),iu}var Up;function i1(){return Up||(Up=1,ru.exports=r1()),ru.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function o1(){if(Wp)return Ct;Wp=1;var t=nc(),r=i1();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(l[e]=n,e=0;e<n.length;e++)s.add(n[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function x(e){return p.call(v,e)?!0:p.call(y,e)?!1:g.test(e)?v[e]=!0:(y[e]=!0,!1)}function T(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,i,a){if(n===null||typeof n>"u"||T(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function b(e,n,i,a,u,c,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=c,this.removeEmptyString=m}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];_[n]=new b(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(D,O);_[n]=new b(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(D,O);_[n]=new b(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(D,O);_[n]=new b(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function V(e,n,i,a){var u=_.hasOwnProperty(n)?_[n]:null;(u!==null?u.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,i,u,a)&&(i=null),a||u===null?x(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(n=u.attributeName,a=u.attributeNamespace,i===null?e.removeAttribute(n):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var H=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),U=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),Be=Symbol.for("react.context"),Ye=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),B=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,S;function L(e){if(S===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);S=n&&n[1]||""}return`
`+S+e}var Y=!1;function ee(e,n){if(!e||Y)return"";Y=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(M){var a=M}Reflect.construct(e,[],n)}else{try{n.call()}catch(M){a=M}e.call(n.prototype)}else{try{throw Error()}catch(M){a=M}e()}}catch(M){if(M&&a&&typeof M.stack=="string"){for(var u=M.stack.split(`
`),c=a.stack.split(`
`),m=u.length-1,w=c.length-1;1<=m&&0<=w&&u[m]!==c[w];)w--;for(;1<=m&&0<=w;m--,w--)if(u[m]!==c[w]){if(m!==1||w!==1)do if(m--,w--,0>w||u[m]!==c[w]){var k=`
`+u[m].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=m&&0<=w);break}}}finally{Y=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?L(e):""}function ie(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case U:return"Portal";case ve:return"Profiler";case Z:return"StrictMode";case Te:return"Suspense";case Ue:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Be:return(e.displayName||"Context")+".Consumer";case ke:return(e._context.displayName||"Context")+".Provider";case Ye:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qe:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case ye:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}function re(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(n);case 8:return n===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Le(e){var n=he(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(m){a=""+m,c.call(this,m)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=Le(e))}function st(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=he(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function aa(e,n){var i=n.checked;return R({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Wc(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=le(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hc(e,n){n=n.checked,n!=null&&V(e,"checked",n,!1)}function la(e,n){Hc(e,n);var i=le(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ua(e,n.type,i):n.hasOwnProperty("defaultValue")&&ua(e,n.type,le(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Kc(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function ua(e,n,i){(n!=="number"||zn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Jr=Array.isArray;function cr(e,n,i,a){if(e=e.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=n.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&a&&(e[i].defaultSelected=!0)}else{for(i=""+le(i),n=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,a&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ca(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return R({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gc(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(o(92));if(Jr(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:le(i)}}function Yc(e,n){var i=le(n.value),a=le(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function Qc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Xc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,u){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,u)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ei(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oy=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){oy.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ti[n]=ti[e]})});function Zc(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||ti.hasOwnProperty(e)&&ti[e]?(""+n).trim():n+"px"}function Jc(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,u=Zc(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,u):e[i]=u}}var sy=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,n){if(n){if(sy[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function pa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,dr=null,fr=null;function ed(e){if(e=Ci(e)){if(typeof ga!="function")throw Error(o(280));var n=e.stateNode;n&&(n=_o(n),ga(e.stateNode,e.type,n))}}function td(e){dr?fr?fr.push(e):fr=[e]:dr=e}function nd(){if(dr){var e=dr,n=fr;if(fr=dr=null,ed(e),n)for(e=0;e<n.length;e++)ed(n[e])}}function rd(e,n){return e(n)}function id(){}var ya=!1;function od(e,n,i){if(ya)return e(n,i);ya=!0;try{return rd(e,n,i)}finally{ya=!1,(dr!==null||fr!==null)&&(id(),nd())}}function ni(e,n){var i=e.stateNode;if(i===null)return null;var a=_o(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var va=!1;if(h)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){va=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{va=!1}function ay(e,n,i,a,u,c,m,w,k){var M=Array.prototype.slice.call(arguments,3);try{n.apply(i,M)}catch(N){this.onError(N)}}var ii=!1,fo=null,po=!1,xa=null,ly={onError:function(e){ii=!0,fo=e}};function uy(e,n,i,a,u,c,m,w,k){ii=!1,fo=null,ay.apply(ly,arguments)}function cy(e,n,i,a,u,c,m,w,k){if(uy.apply(this,arguments),ii){if(ii){var M=fo;ii=!1,fo=null}else throw Error(o(198));po||(po=!0,xa=M)}}function Fn(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function sd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ad(e){if(Fn(e)!==e)throw Error(o(188))}function dy(e){var n=e.alternate;if(!n){if(n=Fn(e),n===null)throw Error(o(188));return n!==e?null:e}for(var i=e,a=n;;){var u=i.return;if(u===null)break;var c=u.alternate;if(c===null){if(a=u.return,a!==null){i=a;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===i)return ad(u),e;if(c===a)return ad(u),n;c=c.sibling}throw Error(o(188))}if(i.return!==a.return)i=u,a=c;else{for(var m=!1,w=u.child;w;){if(w===i){m=!0,i=u,a=c;break}if(w===a){m=!0,a=u,i=c;break}w=w.sibling}if(!m){for(w=c.child;w;){if(w===i){m=!0,i=c,a=u;break}if(w===a){m=!0,a=c,i=u;break}w=w.sibling}if(!m)throw Error(o(189))}}if(i.alternate!==a)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:n}function ld(e){return e=dy(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ud(e);if(n!==null)return n;e=e.sibling}return null}var cd=r.unstable_scheduleCallback,dd=r.unstable_cancelCallback,fy=r.unstable_shouldYield,py=r.unstable_requestPaint,$e=r.unstable_now,hy=r.unstable_getCurrentPriorityLevel,wa=r.unstable_ImmediatePriority,fd=r.unstable_UserBlockingPriority,ho=r.unstable_NormalPriority,my=r.unstable_LowPriority,pd=r.unstable_IdlePriority,mo=null,Yt=null;function gy(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:xy,yy=Math.log,vy=Math.LN2;function xy(e){return e>>>=0,e===0?32:31-(yy(e)/vy|0)|0}var go=64,yo=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,u=e.suspendedLanes,c=e.pingedLanes,m=i&268435455;if(m!==0){var w=m&~u;w!==0?a=oi(w):(c&=m,c!==0&&(a=oi(c)))}else m=i&~u,m!==0?a=oi(m):c!==0&&(a=oi(c));if(a===0)return 0;if(n!==0&&n!==a&&!(n&u)&&(u=a&-a,c=n&-n,u>=c||u===16&&(c&4194240)!==0))return n;if(a&4&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-Nt(n),u=1<<i,a|=e[i],n&=~u;return a}function wy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes;0<c;){var m=31-Nt(c),w=1<<m,k=u[m];k===-1?(!(w&i)||w&a)&&(u[m]=wy(w,n)):k<=n&&(e.expiredLanes|=w),c&=~w}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hd(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function ka(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function si(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Nt(n),e[n]=i}function ky(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-Nt(i),c=1<<u;n[u]=0,a[u]=-1,e[u]=-1,i&=~c}}function Ca(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-Nt(i),u=1<<a;u&n|e[a]&n&&(e[a]|=n),i&=~u}}var Pe=0;function md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gd,Pa,yd,vd,xd,Ta=!1,xo=[],mn=null,gn=null,yn=null,ai=new Map,li=new Map,vn=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(e,n){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":ai.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(n.pointerId)}}function ui(e,n,i,a,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:c,targetContainers:[u]},n!==null&&(n=Ci(n),n!==null&&Pa(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Py(e,n,i,a,u){switch(n){case"focusin":return mn=ui(mn,e,n,i,a,u),!0;case"dragenter":return gn=ui(gn,e,n,i,a,u),!0;case"mouseover":return yn=ui(yn,e,n,i,a,u),!0;case"pointerover":var c=u.pointerId;return ai.set(c,ui(ai.get(c)||null,e,n,i,a,u)),!0;case"gotpointercapture":return c=u.pointerId,li.set(c,ui(li.get(c)||null,e,n,i,a,u)),!0}return!1}function Sd(e){var n=Bn(e.target);if(n!==null){var i=Fn(n);if(i!==null){if(n=i.tag,n===13){if(n=sd(i),n!==null){e.blockedOn=n,xd(e.priority,function(){yd(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Ea(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);ha=a,i.target.dispatchEvent(a),ha=null}else return n=Ci(i),n!==null&&Pa(n),e.blockedOn=i,!1;n.shift()}return!0}function kd(e,n,i){wo(e)&&i.delete(n)}function Ty(){Ta=!1,mn!==null&&wo(mn)&&(mn=null),gn!==null&&wo(gn)&&(gn=null),yn!==null&&wo(yn)&&(yn=null),ai.forEach(kd),li.forEach(kd)}function ci(e,n){e.blockedOn===n&&(e.blockedOn=null,Ta||(Ta=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ty)))}function di(e){function n(u){return ci(u,e)}if(0<xo.length){ci(xo[0],e);for(var i=1;i<xo.length;i++){var a=xo[i];a.blockedOn===e&&(a.blockedOn=null)}}for(mn!==null&&ci(mn,e),gn!==null&&ci(gn,e),yn!==null&&ci(yn,e),ai.forEach(n),li.forEach(n),i=0;i<vn.length;i++)a=vn[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<vn.length&&(i=vn[0],i.blockedOn===null);)Sd(i),i.blockedOn===null&&vn.shift()}var pr=H.ReactCurrentBatchConfig,So=!0;function by(e,n,i,a){var u=Pe,c=pr.transition;pr.transition=null;try{Pe=1,ba(e,n,i,a)}finally{Pe=u,pr.transition=c}}function Ey(e,n,i,a){var u=Pe,c=pr.transition;pr.transition=null;try{Pe=4,ba(e,n,i,a)}finally{Pe=u,pr.transition=c}}function ba(e,n,i,a){if(So){var u=Ea(e,n,i,a);if(u===null)Wa(e,n,a,ko,i),wd(e,a);else if(Py(u,e,n,i,a))a.stopPropagation();else if(wd(e,a),n&4&&-1<Cy.indexOf(e)){for(;u!==null;){var c=Ci(u);if(c!==null&&gd(c),c=Ea(e,n,i,a),c===null&&Wa(e,n,a,ko,i),c===u)break;u=c}u!==null&&a.stopPropagation()}else Wa(e,n,a,null,i)}}var ko=null;function Ea(e,n,i,a){if(ko=null,e=ma(a),e=Bn(e),e!==null)if(n=Fn(e),n===null)e=null;else if(i=n.tag,i===13){if(e=sd(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ko=e,null}function Cd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hy()){case wa:return 1;case fd:return 4;case ho:case my:return 16;case pd:return 536870912;default:return 16}default:return 16}}var xn=null,Aa=null,Co=null;function Pd(){if(Co)return Co;var e,n=Aa,i=n.length,a,u="value"in xn?xn.value:xn.textContent,c=u.length;for(e=0;e<i&&n[e]===u[e];e++);var m=i-e;for(a=1;a<=m&&n[i-a]===u[c-a];a++);return Co=u.slice(e,1<a?1-a:void 0)}function Po(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Td(){return!1}function Pt(e){function n(i,a,u,c,m){this._reactName=i,this._targetInst=u,this.type=a,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(i=e[w],this[w]=i?i(c):c[w]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?To:Td,this.isPropagationStopped=Td,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),n}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=Pt(hr),fi=R({},hr,{view:0,detail:0}),Ay=Pt(fi),Ra,La,pi,bo=R({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(Ra=e.screenX-pi.screenX,La=e.screenY-pi.screenY):La=Ra=0,pi=e),Ra)},movementY:function(e){return"movementY"in e?e.movementY:La}}),bd=Pt(bo),jy=R({},bo,{dataTransfer:0}),Ry=Pt(jy),Ly=R({},fi,{relatedTarget:0}),Ma=Pt(Ly),My=R({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dy=Pt(My),_y=R({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iy=Pt(_y),Oy=R({},hr,{data:0}),Ed=Pt(Oy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ny[e])?!!n[e]:!1}function Da(){return zy}var Fy=R({},fi,{key:function(e){if(e.key){var n=Vy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),By=Pt(Fy),Uy=R({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=Pt(Uy),Wy=R({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Hy=Pt(Wy),Ky=R({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=Pt(Ky),Yy=R({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qy=Pt(Yy),Xy=[9,13,27,32],_a=h&&"CompositionEvent"in window,hi=null;h&&"documentMode"in document&&(hi=document.documentMode);var qy=h&&"TextEvent"in window&&!hi,jd=h&&(!_a||hi&&8<hi&&11>=hi),Rd=" ",Ld=!1;function Md(e,n){switch(e){case"keyup":return Xy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function Zy(e,n){switch(e){case"compositionend":return Dd(n);case"keypress":return n.which!==32?null:(Ld=!0,Rd);case"textInput":return e=n.data,e===Rd&&Ld?null:e;default:return null}}function Jy(e,n){if(mr)return e==="compositionend"||!_a&&Md(e,n)?(e=Pd(),Co=Aa=xn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jd&&n.locale!=="ko"?null:n.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ev[e.type]:n==="textarea"}function Id(e,n,i,a){td(a),n=Lo(n,"onChange"),0<n.length&&(i=new ja("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var mi=null,gi=null;function tv(e){Jd(e,0)}function Eo(e){var n=wr(e);if(st(n))return e}function nv(e,n){if(e==="change")return n}var Od=!1;if(h){var Ia;if(h){var Oa="oninput"in document;if(!Oa){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Oa=typeof Vd.oninput=="function"}Ia=Oa}else Ia=!1;Od=Ia&&(!document.documentMode||9<document.documentMode)}function $d(){mi&&(mi.detachEvent("onpropertychange",Nd),gi=mi=null)}function Nd(e){if(e.propertyName==="value"&&Eo(gi)){var n=[];Id(n,gi,e,ma(e)),od(tv,n)}}function rv(e,n,i){e==="focusin"?($d(),mi=n,gi=i,mi.attachEvent("onpropertychange",Nd)):e==="focusout"&&$d()}function iv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(gi)}function ov(e,n){if(e==="click")return Eo(n)}function sv(e,n){if(e==="input"||e==="change")return Eo(n)}function av(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zt=typeof Object.is=="function"?Object.is:av;function yi(e,n){if(zt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var u=i[a];if(!p.call(n,u)||!zt(e[u],n[u]))return!1}return!0}function zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var i=zd(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=zd(i)}}function Bd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ud(){for(var e=window,n=zn();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=zn(e.document)}return n}function Va(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function lv(e){var n=Ud(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Bd(i.ownerDocument.documentElement,i)){if(a!==null&&Va(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,c=Math.min(a.start,u);a=a.end===void 0?c:Math.min(a.end,u),!e.extend&&c>a&&(u=a,a=c,c=u),u=Fd(i,c);var m=Fd(i,a);u&&m&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),c>a?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uv=h&&"documentMode"in document&&11>=document.documentMode,gr=null,$a=null,vi=null,Na=!1;function Wd(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Na||gr==null||gr!==zn(a)||(a=gr,"selectionStart"in a&&Va(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vi&&yi(vi,a)||(vi=a,a=Lo($a,"onSelect"),0<a.length&&(n=new ja("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=gr)))}function Ao(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var yr={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},za={},Hd={};h&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function jo(e){if(za[e])return za[e];if(!yr[e])return e;var n=yr[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Hd)return za[e]=n[i];return e}var Kd=jo("animationend"),Gd=jo("animationiteration"),Yd=jo("animationstart"),Qd=jo("transitionend"),Xd=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){Xd.set(e,n),d(n,[e])}for(var Fa=0;Fa<qd.length;Fa++){var Ba=qd[Fa],cv=Ba.toLowerCase(),dv=Ba[0].toUpperCase()+Ba.slice(1);wn(cv,"on"+dv)}wn(Kd,"onAnimationEnd"),wn(Gd,"onAnimationIteration"),wn(Yd,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Qd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function Zd(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,cy(a,n,void 0,e),e.currentTarget=null}function Jd(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],u=a.event;a=a.listeners;e:{var c=void 0;if(n)for(var m=a.length-1;0<=m;m--){var w=a[m],k=w.instance,M=w.currentTarget;if(w=w.listener,k!==c&&u.isPropagationStopped())break e;Zd(u,w,M),c=k}else for(m=0;m<a.length;m++){if(w=a[m],k=w.instance,M=w.currentTarget,w=w.listener,k!==c&&u.isPropagationStopped())break e;Zd(u,w,M),c=k}}}if(po)throw e=xa,po=!1,xa=null,e}function Ee(e,n){var i=n[Xa];i===void 0&&(i=n[Xa]=new Set);var a=e+"__bubble";i.has(a)||(ef(n,e,2,!1),i.add(a))}function Ua(e,n,i){var a=0;n&&(a|=4),ef(i,e,a,n)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[Ro]){e[Ro]=!0,s.forEach(function(i){i!=="selectionchange"&&(fv.has(i)||Ua(i,!1,e),Ua(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ro]||(n[Ro]=!0,Ua("selectionchange",!1,n))}}function ef(e,n,i,a){switch(Cd(n)){case 1:var u=by;break;case 4:u=Ey;break;default:u=ba}i=u.bind(null,n,i,e),u=void 0,!va||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),a?u!==void 0?e.addEventListener(n,i,{capture:!0,passive:u}):e.addEventListener(n,i,!0):u!==void 0?e.addEventListener(n,i,{passive:u}):e.addEventListener(n,i,!1)}function Wa(e,n,i,a,u){var c=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var w=a.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(m===4)for(m=a.return;m!==null;){var k=m.tag;if((k===3||k===4)&&(k=m.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;m=m.return}for(;w!==null;){if(m=Bn(w),m===null)return;if(k=m.tag,k===5||k===6){a=c=m;continue e}w=w.parentNode}}a=a.return}od(function(){var M=c,N=ma(i),z=[];e:{var $=Xd.get(e);if($!==void 0){var X=ja,J=e;switch(e){case"keypress":if(Po(i)===0)break e;case"keydown":case"keyup":X=By;break;case"focusin":J="focus",X=Ma;break;case"focusout":J="blur",X=Ma;break;case"beforeblur":case"afterblur":X=Ma;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Hy;break;case Kd:case Gd:case Yd:X=Dy;break;case Qd:X=Gy;break;case"scroll":X=Ay;break;case"wheel":X=Qy;break;case"copy":case"cut":case"paste":X=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Ad}var te=(n&4)!==0,Ne=!te&&e==="scroll",E=te?$!==null?$+"Capture":null:$;te=[];for(var P=M,A;P!==null;){A=P;var W=A.stateNode;if(A.tag===5&&W!==null&&(A=W,E!==null&&(W=ni(P,E),W!=null&&te.push(Si(P,W,A)))),Ne)break;P=P.return}0<te.length&&($=new X($,J,null,i,N),z.push({event:$,listeners:te}))}}if(!(n&7)){e:{if($=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",$&&i!==ha&&(J=i.relatedTarget||i.fromElement)&&(Bn(J)||J[nn]))break e;if((X||$)&&($=N.window===N?N:($=N.ownerDocument)?$.defaultView||$.parentWindow:window,X?(J=i.relatedTarget||i.toElement,X=M,J=J?Bn(J):null,J!==null&&(Ne=Fn(J),J!==Ne||J.tag!==5&&J.tag!==6)&&(J=null)):(X=null,J=M),X!==J)){if(te=bd,W="onMouseLeave",E="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ad,W="onPointerLeave",E="onPointerEnter",P="pointer"),Ne=X==null?$:wr(X),A=J==null?$:wr(J),$=new te(W,P+"leave",X,i,N),$.target=Ne,$.relatedTarget=A,W=null,Bn(N)===M&&(te=new te(E,P+"enter",J,i,N),te.target=A,te.relatedTarget=Ne,W=te),Ne=W,X&&J)t:{for(te=X,E=J,P=0,A=te;A;A=vr(A))P++;for(A=0,W=E;W;W=vr(W))A++;for(;0<P-A;)te=vr(te),P--;for(;0<A-P;)E=vr(E),A--;for(;P--;){if(te===E||E!==null&&te===E.alternate)break t;te=vr(te),E=vr(E)}te=null}else te=null;X!==null&&tf(z,$,X,te,!1),J!==null&&Ne!==null&&tf(z,Ne,J,te,!0)}}e:{if($=M?wr(M):window,X=$.nodeName&&$.nodeName.toLowerCase(),X==="select"||X==="input"&&$.type==="file")var ne=nv;else if(_d($))if(Od)ne=sv;else{ne=iv;var oe=rv}else(X=$.nodeName)&&X.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(ne=ov);if(ne&&(ne=ne(e,M))){Id(z,ne,i,N);break e}oe&&oe(e,$,M),e==="focusout"&&(oe=$._wrapperState)&&oe.controlled&&$.type==="number"&&ua($,"number",$.value)}switch(oe=M?wr(M):window,e){case"focusin":(_d(oe)||oe.contentEditable==="true")&&(gr=oe,$a=M,vi=null);break;case"focusout":vi=$a=gr=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,Wd(z,i,N);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Wd(z,i,N)}var se;if(_a)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else mr?Md(e,i)&&(fe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(fe="onCompositionStart");fe&&(jd&&i.locale!=="ko"&&(mr||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&mr&&(se=Pd()):(xn=N,Aa="value"in xn?xn.value:xn.textContent,mr=!0)),oe=Lo(M,fe),0<oe.length&&(fe=new Ed(fe,e,null,i,N),z.push({event:fe,listeners:oe}),se?fe.data=se:(se=Dd(i),se!==null&&(fe.data=se)))),(se=qy?Zy(e,i):Jy(e,i))&&(M=Lo(M,"onBeforeInput"),0<M.length&&(N=new Ed("onBeforeInput","beforeinput",null,i,N),z.push({event:N,listeners:M}),N.data=se))}Jd(z,n)})}function Si(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Lo(e,n){for(var i=n+"Capture",a=[];e!==null;){var u=e,c=u.stateNode;u.tag===5&&c!==null&&(u=c,c=ni(e,i),c!=null&&a.unshift(Si(e,c,u)),c=ni(e,n),c!=null&&a.push(Si(e,c,u))),e=e.return}return a}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tf(e,n,i,a,u){for(var c=n._reactName,m=[];i!==null&&i!==a;){var w=i,k=w.alternate,M=w.stateNode;if(k!==null&&k===a)break;w.tag===5&&M!==null&&(w=M,u?(k=ni(i,c),k!=null&&m.unshift(Si(i,k,w))):u||(k=ni(i,c),k!=null&&m.push(Si(i,k,w)))),i=i.return}m.length!==0&&e.push({event:n,listeners:m})}var pv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function nf(e){return(typeof e=="string"?e:""+e).replace(pv,`
`).replace(hv,"")}function Mo(e,n,i){if(n=nf(n),nf(e)!==n&&i)throw Error(o(425))}function Do(){}var Ha=null,Ka=null;function Ga(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(e){return rf.resolve(null).then(e).catch(yv)}:Ya;function yv(e){setTimeout(function(){throw e})}function Qa(e,n){var i=n,a=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(a===0){e.removeChild(u),di(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=u}while(i);di(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function of(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Qt="__reactFiber$"+xr,ki="__reactProps$"+xr,nn="__reactContainer$"+xr,Xa="__reactEvents$"+xr,vv="__reactListeners$"+xr,xv="__reactHandles$"+xr;function Bn(e){var n=e[Qt];if(n)return n;for(var i=e.parentNode;i;){if(n=i[nn]||i[Qt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=of(e);e!==null;){if(i=e[Qt])return i;e=of(e)}return n}e=i,i=e.parentNode}return null}function Ci(e){return e=e[Qt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function _o(e){return e[ki]||null}var qa=[],Sr=-1;function kn(e){return{current:e}}function Ae(e){0>Sr||(e.current=qa[Sr],qa[Sr]=null,Sr--)}function be(e,n){Sr++,qa[Sr]=e.current,e.current=n}var Cn={},at=kn(Cn),vt=kn(!1),Un=Cn;function kr(e,n){var i=e.type.contextTypes;if(!i)return Cn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var u={},c;for(c in i)u[c]=n[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function xt(e){return e=e.childContextTypes,e!=null}function Io(){Ae(vt),Ae(at)}function sf(e,n,i){if(at.current!==Cn)throw Error(o(168));be(at,n),be(vt,i)}function af(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var u in a)if(!(u in n))throw Error(o(108,re(e)||"Unknown",u));return R({},i,a)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Un=at.current,be(at,e),be(vt,vt.current),!0}function lf(e,n,i){var a=e.stateNode;if(!a)throw Error(o(169));i?(e=af(e,n,Un),a.__reactInternalMemoizedMergedChildContext=e,Ae(vt),Ae(at),be(at,e)):Ae(vt),be(vt,i)}var rn=null,Vo=!1,Za=!1;function uf(e){rn===null?rn=[e]:rn.push(e)}function wv(e){Vo=!0,uf(e)}function Pn(){if(!Za&&rn!==null){Za=!0;var e=0,n=Pe;try{var i=rn;for(Pe=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}rn=null,Vo=!1}catch(u){throw rn!==null&&(rn=rn.slice(e+1)),cd(wa,Pn),u}finally{Pe=n,Za=!1}}return null}var Cr=[],Pr=0,$o=null,No=0,Rt=[],Lt=0,Wn=null,on=1,sn="";function Hn(e,n){Cr[Pr++]=No,Cr[Pr++]=$o,$o=e,No=n}function cf(e,n,i){Rt[Lt++]=on,Rt[Lt++]=sn,Rt[Lt++]=Wn,Wn=e;var a=on;e=sn;var u=32-Nt(a)-1;a&=~(1<<u),i+=1;var c=32-Nt(n)+u;if(30<c){var m=u-u%5;c=(a&(1<<m)-1).toString(32),a>>=m,u-=m,on=1<<32-Nt(n)+u|i<<u|a,sn=c+e}else on=1<<c|i<<u|a,sn=e}function Ja(e){e.return!==null&&(Hn(e,1),cf(e,1,0))}function el(e){for(;e===$o;)$o=Cr[--Pr],Cr[Pr]=null,No=Cr[--Pr],Cr[Pr]=null;for(;e===Wn;)Wn=Rt[--Lt],Rt[Lt]=null,sn=Rt[--Lt],Rt[Lt]=null,on=Rt[--Lt],Rt[Lt]=null}var Tt=null,bt=null,Me=!1,Ft=null;function df(e,n){var i=It(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function ff(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Tt=e,bt=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Tt=e,bt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Wn!==null?{id:on,overflow:sn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=It(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Tt=e,bt=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(Me){var n=bt;if(n){var i=n;if(!ff(e,n)){if(tl(e))throw Error(o(418));n=Sn(i.nextSibling);var a=Tt;n&&ff(e,n)?df(a,i):(e.flags=e.flags&-4097|2,Me=!1,Tt=e)}}else{if(tl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Me=!1,Tt=e}}}function pf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function zo(e){if(e!==Tt)return!1;if(!Me)return pf(e),Me=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ga(e.type,e.memoizedProps)),n&&(n=bt)){if(tl(e))throw hf(),Error(o(418));for(;n;)df(e,n),n=Sn(n.nextSibling)}if(pf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){bt=Sn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}bt=null}}else bt=Tt?Sn(e.stateNode.nextSibling):null;return!0}function hf(){for(var e=bt;e;)e=Sn(e.nextSibling)}function Tr(){bt=Tt=null,Me=!1}function rl(e){Ft===null?Ft=[e]:Ft.push(e)}var Sv=H.ReactCurrentBatchConfig;function Pi(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var a=i.stateNode}if(!a)throw Error(o(147,e));var u=a,c=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===c?n.ref:(n=function(m){var w=u.refs;m===null?delete w[c]:w[c]=m},n._stringRef=c,n)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Fo(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function mf(e){var n=e._init;return n(e._payload)}function gf(e){function n(E,P){if(e){var A=E.deletions;A===null?(E.deletions=[P],E.flags|=16):A.push(P)}}function i(E,P){if(!e)return null;for(;P!==null;)n(E,P),P=P.sibling;return null}function a(E,P){for(E=new Map;P!==null;)P.key!==null?E.set(P.key,P):E.set(P.index,P),P=P.sibling;return E}function u(E,P){return E=Mn(E,P),E.index=0,E.sibling=null,E}function c(E,P,A){return E.index=A,e?(A=E.alternate,A!==null?(A=A.index,A<P?(E.flags|=2,P):A):(E.flags|=2,P)):(E.flags|=1048576,P)}function m(E){return e&&E.alternate===null&&(E.flags|=2),E}function w(E,P,A,W){return P===null||P.tag!==6?(P=Yl(A,E.mode,W),P.return=E,P):(P=u(P,A),P.return=E,P)}function k(E,P,A,W){var ne=A.type;return ne===K?N(E,P,A.props.children,W,A.key):P!==null&&(P.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ye&&mf(ne)===P.type)?(W=u(P,A.props),W.ref=Pi(E,P,A),W.return=E,W):(W=ds(A.type,A.key,A.props,null,E.mode,W),W.ref=Pi(E,P,A),W.return=E,W)}function M(E,P,A,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==A.containerInfo||P.stateNode.implementation!==A.implementation?(P=Ql(A,E.mode,W),P.return=E,P):(P=u(P,A.children||[]),P.return=E,P)}function N(E,P,A,W,ne){return P===null||P.tag!==7?(P=Jn(A,E.mode,W,ne),P.return=E,P):(P=u(P,A),P.return=E,P)}function z(E,P,A){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Yl(""+P,E.mode,A),P.return=E,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case F:return A=ds(P.type,P.key,P.props,null,E.mode,A),A.ref=Pi(E,null,P),A.return=E,A;case U:return P=Ql(P,E.mode,A),P.return=E,P;case ye:var W=P._init;return z(E,W(P._payload),A)}if(Jr(P)||Q(P))return P=Jn(P,E.mode,A,null),P.return=E,P;Fo(E,P)}return null}function $(E,P,A,W){var ne=P!==null?P.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return ne!==null?null:w(E,P,""+A,W);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case F:return A.key===ne?k(E,P,A,W):null;case U:return A.key===ne?M(E,P,A,W):null;case ye:return ne=A._init,$(E,P,ne(A._payload),W)}if(Jr(A)||Q(A))return ne!==null?null:N(E,P,A,W,null);Fo(E,A)}return null}function X(E,P,A,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return E=E.get(A)||null,w(P,E,""+W,ne);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case F:return E=E.get(W.key===null?A:W.key)||null,k(P,E,W,ne);case U:return E=E.get(W.key===null?A:W.key)||null,M(P,E,W,ne);case ye:var oe=W._init;return X(E,P,A,oe(W._payload),ne)}if(Jr(W)||Q(W))return E=E.get(A)||null,N(P,E,W,ne,null);Fo(P,W)}return null}function J(E,P,A,W){for(var ne=null,oe=null,se=P,fe=P=0,et=null;se!==null&&fe<A.length;fe++){se.index>fe?(et=se,se=null):et=se.sibling;var we=$(E,se,A[fe],W);if(we===null){se===null&&(se=et);break}e&&se&&we.alternate===null&&n(E,se),P=c(we,P,fe),oe===null?ne=we:oe.sibling=we,oe=we,se=et}if(fe===A.length)return i(E,se),Me&&Hn(E,fe),ne;if(se===null){for(;fe<A.length;fe++)se=z(E,A[fe],W),se!==null&&(P=c(se,P,fe),oe===null?ne=se:oe.sibling=se,oe=se);return Me&&Hn(E,fe),ne}for(se=a(E,se);fe<A.length;fe++)et=X(se,E,fe,A[fe],W),et!==null&&(e&&et.alternate!==null&&se.delete(et.key===null?fe:et.key),P=c(et,P,fe),oe===null?ne=et:oe.sibling=et,oe=et);return e&&se.forEach(function(Dn){return n(E,Dn)}),Me&&Hn(E,fe),ne}function te(E,P,A,W){var ne=Q(A);if(typeof ne!="function")throw Error(o(150));if(A=ne.call(A),A==null)throw Error(o(151));for(var oe=ne=null,se=P,fe=P=0,et=null,we=A.next();se!==null&&!we.done;fe++,we=A.next()){se.index>fe?(et=se,se=null):et=se.sibling;var Dn=$(E,se,we.value,W);if(Dn===null){se===null&&(se=et);break}e&&se&&Dn.alternate===null&&n(E,se),P=c(Dn,P,fe),oe===null?ne=Dn:oe.sibling=Dn,oe=Dn,se=et}if(we.done)return i(E,se),Me&&Hn(E,fe),ne;if(se===null){for(;!we.done;fe++,we=A.next())we=z(E,we.value,W),we!==null&&(P=c(we,P,fe),oe===null?ne=we:oe.sibling=we,oe=we);return Me&&Hn(E,fe),ne}for(se=a(E,se);!we.done;fe++,we=A.next())we=X(se,E,fe,we.value,W),we!==null&&(e&&we.alternate!==null&&se.delete(we.key===null?fe:we.key),P=c(we,P,fe),oe===null?ne=we:oe.sibling=we,oe=we);return e&&se.forEach(function(Jv){return n(E,Jv)}),Me&&Hn(E,fe),ne}function Ne(E,P,A,W){if(typeof A=="object"&&A!==null&&A.type===K&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case F:e:{for(var ne=A.key,oe=P;oe!==null;){if(oe.key===ne){if(ne=A.type,ne===K){if(oe.tag===7){i(E,oe.sibling),P=u(oe,A.props.children),P.return=E,E=P;break e}}else if(oe.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ye&&mf(ne)===oe.type){i(E,oe.sibling),P=u(oe,A.props),P.ref=Pi(E,oe,A),P.return=E,E=P;break e}i(E,oe);break}else n(E,oe);oe=oe.sibling}A.type===K?(P=Jn(A.props.children,E.mode,W,A.key),P.return=E,E=P):(W=ds(A.type,A.key,A.props,null,E.mode,W),W.ref=Pi(E,P,A),W.return=E,E=W)}return m(E);case U:e:{for(oe=A.key;P!==null;){if(P.key===oe)if(P.tag===4&&P.stateNode.containerInfo===A.containerInfo&&P.stateNode.implementation===A.implementation){i(E,P.sibling),P=u(P,A.children||[]),P.return=E,E=P;break e}else{i(E,P);break}else n(E,P);P=P.sibling}P=Ql(A,E.mode,W),P.return=E,E=P}return m(E);case ye:return oe=A._init,Ne(E,P,oe(A._payload),W)}if(Jr(A))return J(E,P,A,W);if(Q(A))return te(E,P,A,W);Fo(E,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,P!==null&&P.tag===6?(i(E,P.sibling),P=u(P,A),P.return=E,E=P):(i(E,P),P=Yl(A,E.mode,W),P.return=E,E=P),m(E)):i(E,P)}return Ne}var br=gf(!0),yf=gf(!1),Bo=kn(null),Uo=null,Er=null,il=null;function ol(){il=Er=Uo=null}function sl(e){var n=Bo.current;Ae(Bo),e._currentValue=n}function al(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function Ar(e,n){Uo=e,il=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(wt=!0),e.firstContext=null)}function Mt(e){var n=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:n,next:null},Er===null){if(Uo===null)throw Error(o(308));Er=e,Uo.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return n}var Kn=null;function ll(e){Kn===null?Kn=[e]:Kn.push(e)}function vf(e,n,i,a){var u=n.interleaved;return u===null?(i.next=i,ll(n)):(i.next=u.next,u.next=i),n.interleaved=i,an(e,a)}function an(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Tn=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,xe&2){var u=a.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n,an(e,i)}return u=a.interleaved,u===null?(n.next=n,ll(a)):(n.next=u.next,u.next=n),a.interleaved=n,an(e,i)}function Wo(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Ca(e,i)}}function wf(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var u=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};c===null?u=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?u=c=n:c=c.next=n}else u=c=n;i={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Ho(e,n,i,a){var u=e.updateQueue;Tn=!1;var c=u.firstBaseUpdate,m=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,M=k.next;k.next=null,m===null?c=M:m.next=M,m=k;var N=e.alternate;N!==null&&(N=N.updateQueue,w=N.lastBaseUpdate,w!==m&&(w===null?N.firstBaseUpdate=M:w.next=M,N.lastBaseUpdate=k))}if(c!==null){var z=u.baseState;m=0,N=M=k=null,w=c;do{var $=w.lane,X=w.eventTime;if((a&$)===$){N!==null&&(N=N.next={eventTime:X,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var J=e,te=w;switch($=n,X=i,te.tag){case 1:if(J=te.payload,typeof J=="function"){z=J.call(X,z,$);break e}z=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,$=typeof J=="function"?J.call(X,z,$):J,$==null)break e;z=R({},z,$);break e;case 2:Tn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,$=u.effects,$===null?u.effects=[w]:$.push(w))}else X={eventTime:X,lane:$,tag:w.tag,payload:w.payload,callback:w.callback,next:null},N===null?(M=N=X,k=z):N=N.next=X,m|=$;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;$=w,w=$.next,$.next=null,u.lastBaseUpdate=$,u.shared.pending=null}}while(!0);if(N===null&&(k=z),u.baseState=k,u.firstBaseUpdate=M,u.lastBaseUpdate=N,n=u.shared.interleaved,n!==null){u=n;do m|=u.lane,u=u.next;while(u!==n)}else c===null&&(u.shared.lanes=0);Qn|=m,e.lanes=m,e.memoizedState=z}}function Sf(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],u=a.callback;if(u!==null){if(a.callback=null,a=i,typeof u!="function")throw Error(o(191,u));u.call(a)}}}var Ti={},Xt=kn(Ti),bi=kn(Ti),Ei=kn(Ti);function Gn(e){if(e===Ti)throw Error(o(174));return e}function cl(e,n){switch(be(Ei,n),be(bi,e),be(Xt,Ti),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:da(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=da(n,e)}Ae(Xt),be(Xt,n)}function jr(){Ae(Xt),Ae(bi),Ae(Ei)}function kf(e){Gn(Ei.current);var n=Gn(Xt.current),i=da(n,e.type);n!==i&&(be(bi,e),be(Xt,i))}function dl(e){bi.current===e&&(Ae(Xt),Ae(bi))}var De=kn(0);function Ko(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fl=[];function pl(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var Go=H.ReactCurrentDispatcher,hl=H.ReactCurrentBatchConfig,Yn=0,_e=null,Qe=null,Ze=null,Yo=!1,Ai=!1,ji=0,kv=0;function lt(){throw Error(o(321))}function ml(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!zt(e[i],n[i]))return!1;return!0}function gl(e,n,i,a,u,c){if(Yn=c,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Go.current=e===null||e.memoizedState===null?bv:Ev,e=i(a,u),Ai){c=0;do{if(Ai=!1,ji=0,25<=c)throw Error(o(301));c+=1,Ze=Qe=null,n.updateQueue=null,Go.current=Av,e=i(a,u)}while(Ai)}if(Go.current=qo,n=Qe!==null&&Qe.next!==null,Yn=0,Ze=Qe=_e=null,Yo=!1,n)throw Error(o(300));return e}function yl(){var e=ji!==0;return ji=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?_e.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Dt(){if(Qe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var n=Ze===null?_e.memoizedState:Ze.next;if(n!==null)Ze=n,Qe=e;else{if(e===null)throw Error(o(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?_e.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Ri(e,n){return typeof n=="function"?n(e):n}function vl(e){var n=Dt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=Qe,u=a.baseQueue,c=i.pending;if(c!==null){if(u!==null){var m=u.next;u.next=c.next,c.next=m}a.baseQueue=u=c,i.pending=null}if(u!==null){c=u.next,a=a.baseState;var w=m=null,k=null,M=c;do{var N=M.lane;if((Yn&N)===N)k!==null&&(k=k.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),a=M.hasEagerState?M.eagerState:e(a,M.action);else{var z={lane:N,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};k===null?(w=k=z,m=a):k=k.next=z,_e.lanes|=N,Qn|=N}M=M.next}while(M!==null&&M!==c);k===null?m=a:k.next=w,zt(a,n.memoizedState)||(wt=!0),n.memoizedState=a,n.baseState=m,n.baseQueue=k,i.lastRenderedState=a}if(e=i.interleaved,e!==null){u=e;do c=u.lane,_e.lanes|=c,Qn|=c,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function xl(e){var n=Dt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=i.dispatch,u=i.pending,c=n.memoizedState;if(u!==null){i.pending=null;var m=u=u.next;do c=e(c,m.action),m=m.next;while(m!==u);zt(c,n.memoizedState)||(wt=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,a]}function Cf(){}function Pf(e,n){var i=_e,a=Dt(),u=n(),c=!zt(a.memoizedState,u);if(c&&(a.memoizedState=u,wt=!0),a=a.queue,wl(Ef.bind(null,i,a,e),[e]),a.getSnapshot!==n||c||Ze!==null&&Ze.memoizedState.tag&1){if(i.flags|=2048,Li(9,bf.bind(null,i,a,u,n),void 0,null),Je===null)throw Error(o(349));Yn&30||Tf(i,n,u)}return u}function Tf(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function bf(e,n,i,a){n.value=i,n.getSnapshot=a,Af(n)&&jf(e)}function Ef(e,n,i){return i(function(){Af(n)&&jf(e)})}function Af(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!zt(e,i)}catch{return!0}}function jf(e){var n=an(e,1);n!==null&&Ht(n,e,1,-1)}function Rf(e){var n=qt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},n.queue=e,e=e.dispatch=Tv.bind(null,_e,e),[n.memoizedState,e]}function Li(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function Lf(){return Dt().memoizedState}function Qo(e,n,i,a){var u=qt();_e.flags|=e,u.memoizedState=Li(1|n,i,void 0,a===void 0?null:a)}function Xo(e,n,i,a){var u=Dt();a=a===void 0?null:a;var c=void 0;if(Qe!==null){var m=Qe.memoizedState;if(c=m.destroy,a!==null&&ml(a,m.deps)){u.memoizedState=Li(n,i,c,a);return}}_e.flags|=e,u.memoizedState=Li(1|n,i,c,a)}function Mf(e,n){return Qo(8390656,8,e,n)}function wl(e,n){return Xo(2048,8,e,n)}function Df(e,n){return Xo(4,2,e,n)}function _f(e,n){return Xo(4,4,e,n)}function If(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Of(e,n,i){return i=i!=null?i.concat([e]):null,Xo(4,4,If.bind(null,n,e),i)}function Sl(){}function Vf(e,n){var i=Dt();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&ml(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function $f(e,n){var i=Dt();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&ml(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function Nf(e,n,i){return Yn&21?(zt(i,n)||(i=hd(),_e.lanes|=i,Qn|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=i)}function Cv(e,n){var i=Pe;Pe=i!==0&&4>i?i:4,e(!0);var a=hl.transition;hl.transition={};try{e(!1),n()}finally{Pe=i,hl.transition=a}}function zf(){return Dt().memoizedState}function Pv(e,n,i){var a=Rn(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Ff(e))Bf(n,i);else if(i=vf(e,n,i,a),i!==null){var u=ht();Ht(i,e,a,u),Uf(i,n,a)}}function Tv(e,n,i){var a=Rn(e),u={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ff(e))Bf(n,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,w=c(m,i);if(u.hasEagerState=!0,u.eagerState=w,zt(w,m)){var k=n.interleaved;k===null?(u.next=u,ll(n)):(u.next=k.next,k.next=u),n.interleaved=u;return}}catch{}finally{}i=vf(e,n,u,a),i!==null&&(u=ht(),Ht(i,e,a,u),Uf(i,n,a))}}function Ff(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Bf(e,n){Ai=Yo=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Uf(e,n,i){if(i&4194240){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Ca(e,i)}}var qo={readContext:Mt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},bv={readContext:Mt,useCallback:function(e,n){return qt().memoizedState=[e,n===void 0?null:n],e},useContext:Mt,useEffect:Mf,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Qo(4194308,4,If.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Qo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Qo(4,2,e,n)},useMemo:function(e,n){var i=qt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=qt();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Pv.bind(null,_e,e),[a.memoizedState,e]},useRef:function(e){var n=qt();return e={current:e},n.memoizedState=e},useState:Rf,useDebugValue:Sl,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=Rf(!1),n=e[0];return e=Cv.bind(null,e[1]),qt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=_e,u=qt();if(Me){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),Je===null)throw Error(o(349));Yn&30||Tf(a,n,i)}u.memoizedState=i;var c={value:i,getSnapshot:n};return u.queue=c,Mf(Ef.bind(null,a,c,e),[e]),a.flags|=2048,Li(9,bf.bind(null,a,c,i,n),void 0,null),i},useId:function(){var e=qt(),n=Je.identifierPrefix;if(Me){var i=sn,a=on;i=(a&~(1<<32-Nt(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=ji++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=kv++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ev={readContext:Mt,useCallback:Vf,useContext:Mt,useEffect:wl,useImperativeHandle:Of,useInsertionEffect:Df,useLayoutEffect:_f,useMemo:$f,useReducer:vl,useRef:Lf,useState:function(){return vl(Ri)},useDebugValue:Sl,useDeferredValue:function(e){var n=Dt();return Nf(n,Qe.memoizedState,e)},useTransition:function(){var e=vl(Ri)[0],n=Dt().memoizedState;return[e,n]},useMutableSource:Cf,useSyncExternalStore:Pf,useId:zf,unstable_isNewReconciler:!1},Av={readContext:Mt,useCallback:Vf,useContext:Mt,useEffect:wl,useImperativeHandle:Of,useInsertionEffect:Df,useLayoutEffect:_f,useMemo:$f,useReducer:xl,useRef:Lf,useState:function(){return xl(Ri)},useDebugValue:Sl,useDeferredValue:function(e){var n=Dt();return Qe===null?n.memoizedState=e:Nf(n,Qe.memoizedState,e)},useTransition:function(){var e=xl(Ri)[0],n=Dt().memoizedState;return[e,n]},useMutableSource:Cf,useSyncExternalStore:Pf,useId:zf,unstable_isNewReconciler:!1};function Bt(e,n){if(e&&e.defaultProps){n=R({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function kl(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:R({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Zo={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=ht(),u=Rn(e),c=ln(a,u);c.payload=n,i!=null&&(c.callback=i),n=bn(e,c,u),n!==null&&(Ht(n,e,u,a),Wo(n,e,u))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=ht(),u=Rn(e),c=ln(a,u);c.tag=1,c.payload=n,i!=null&&(c.callback=i),n=bn(e,c,u),n!==null&&(Ht(n,e,u,a),Wo(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=ht(),a=Rn(e),u=ln(i,a);u.tag=2,n!=null&&(u.callback=n),n=bn(e,u,a),n!==null&&(Ht(n,e,a,i),Wo(n,e,a))}};function Wf(e,n,i,a,u,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,m):n.prototype&&n.prototype.isPureReactComponent?!yi(i,a)||!yi(u,c):!0}function Hf(e,n,i){var a=!1,u=Cn,c=n.contextType;return typeof c=="object"&&c!==null?c=Mt(c):(u=xt(n)?Un:at.current,a=n.contextTypes,c=(a=a!=null)?kr(e,u):Cn),n=new n(i,c),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zo,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=c),n}function Kf(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&Zo.enqueueReplaceState(n,n.state,null)}function Cl(e,n,i,a){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},ul(e);var c=n.contextType;typeof c=="object"&&c!==null?u.context=Mt(c):(c=xt(n)?Un:at.current,u.context=kr(e,c)),u.state=e.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(kl(e,n,c,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Zo.enqueueReplaceState(u,u.state,null),Ho(e,i,u,a),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,n){try{var i="",a=n;do i+=ie(a),a=a.return;while(a);var u=i}catch(c){u=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:n,stack:u,digest:null}}function Pl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Tl(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var jv=typeof WeakMap=="function"?WeakMap:Map;function Gf(e,n,i){i=ln(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){os||(os=!0,zl=a),Tl(e,n)},i}function Yf(e,n,i){i=ln(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;i.payload=function(){return a(u)},i.callback=function(){Tl(e,n)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(i.callback=function(){Tl(e,n),typeof a!="function"&&(An===null?An=new Set([this]):An.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),i}function Qf(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new jv;var u=new Set;a.set(n,u)}else u=a.get(n),u===void 0&&(u=new Set,a.set(n,u));u.has(i)||(u.add(i),e=Uv.bind(null,e,n,i),n.then(e,e))}function Xf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qf(e,n,i,a,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=ln(-1,1),n.tag=2,bn(i,n,1))),i.lanes|=1),e)}var Rv=H.ReactCurrentOwner,wt=!1;function pt(e,n,i,a){n.child=e===null?yf(n,null,i,a):br(n,e.child,i,a)}function Zf(e,n,i,a,u){i=i.render;var c=n.ref;return Ar(n,u),a=gl(e,n,i,a,c,u),i=yl(),e!==null&&!wt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,un(e,n,u)):(Me&&i&&Ja(n),n.flags|=1,pt(e,n,a,u),n.child)}function Jf(e,n,i,a,u){if(e===null){var c=i.type;return typeof c=="function"&&!Gl(c)&&c.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=c,ep(e,n,c,a,u)):(e=ds(i.type,null,a,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!(e.lanes&u)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:yi,i(m,a)&&e.ref===n.ref)return un(e,n,u)}return n.flags|=1,e=Mn(c,a),e.ref=n.ref,e.return=n,n.child=e}function ep(e,n,i,a,u){if(e!==null){var c=e.memoizedProps;if(yi(c,a)&&e.ref===n.ref)if(wt=!1,n.pendingProps=a=c,(e.lanes&u)!==0)e.flags&131072&&(wt=!0);else return n.lanes=e.lanes,un(e,n,u)}return bl(e,n,i,a,u)}function tp(e,n,i){var a=n.pendingProps,u=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Mr,Et),Et|=i;else{if(!(i&1073741824))return e=c!==null?c.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,be(Mr,Et),Et|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:i,be(Mr,Et),Et|=a}else c!==null?(a=c.baseLanes|i,n.memoizedState=null):a=i,be(Mr,Et),Et|=a;return pt(e,n,u,i),n.child}function np(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function bl(e,n,i,a,u){var c=xt(i)?Un:at.current;return c=kr(n,c),Ar(n,u),i=gl(e,n,i,a,c,u),a=yl(),e!==null&&!wt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,un(e,n,u)):(Me&&a&&Ja(n),n.flags|=1,pt(e,n,i,u),n.child)}function rp(e,n,i,a,u){if(xt(i)){var c=!0;Oo(n)}else c=!1;if(Ar(n,u),n.stateNode===null)es(e,n),Hf(n,i,a),Cl(n,i,a,u),a=!0;else if(e===null){var m=n.stateNode,w=n.memoizedProps;m.props=w;var k=m.context,M=i.contextType;typeof M=="object"&&M!==null?M=Mt(M):(M=xt(i)?Un:at.current,M=kr(n,M));var N=i.getDerivedStateFromProps,z=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function";z||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==a||k!==M)&&Kf(n,m,a,M),Tn=!1;var $=n.memoizedState;m.state=$,Ho(n,a,m,u),k=n.memoizedState,w!==a||$!==k||vt.current||Tn?(typeof N=="function"&&(kl(n,i,N,a),k=n.memoizedState),(w=Tn||Wf(n,i,w,a,$,k,M))?(z||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=k),m.props=a,m.state=k,m.context=M,a=w):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{m=n.stateNode,xf(e,n),w=n.memoizedProps,M=n.type===n.elementType?w:Bt(n.type,w),m.props=M,z=n.pendingProps,$=m.context,k=i.contextType,typeof k=="object"&&k!==null?k=Mt(k):(k=xt(i)?Un:at.current,k=kr(n,k));var X=i.getDerivedStateFromProps;(N=typeof X=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==z||$!==k)&&Kf(n,m,a,k),Tn=!1,$=n.memoizedState,m.state=$,Ho(n,a,m,u);var J=n.memoizedState;w!==z||$!==J||vt.current||Tn?(typeof X=="function"&&(kl(n,i,X,a),J=n.memoizedState),(M=Tn||Wf(n,i,M,a,$,J,k)||!1)?(N||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,J,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,J,k)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=J),m.props=a,m.state=J,m.context=k,a=M):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),a=!1)}return El(e,n,i,a,c,u)}function El(e,n,i,a,u,c){np(e,n);var m=(n.flags&128)!==0;if(!a&&!m)return u&&lf(n,i,!1),un(e,n,c);a=n.stateNode,Rv.current=n;var w=m&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&m?(n.child=br(n,e.child,null,c),n.child=br(n,null,w,c)):pt(e,n,w,c),n.memoizedState=a.state,u&&lf(n,i,!0),n.child}function ip(e){var n=e.stateNode;n.pendingContext?sf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&sf(e,n.context,!1),cl(e,n.containerInfo)}function op(e,n,i,a,u){return Tr(),rl(u),n.flags|=256,pt(e,n,i,a),n.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function sp(e,n,i){var a=n.pendingProps,u=De.current,c=!1,m=(n.flags&128)!==0,w;if((w=m)||(w=e!==null&&e.memoizedState===null?!1:(u&2)!==0),w?(c=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),be(De,u&1),e===null)return nl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(m=a.children,e=a.fallback,c?(a=n.mode,c=n.child,m={mode:"hidden",children:m},!(a&1)&&c!==null?(c.childLanes=0,c.pendingProps=m):c=fs(m,a,0,null),e=Jn(e,a,i,null),c.return=n,e.return=n,c.sibling=e,n.child=c,n.child.memoizedState=jl(i),n.memoizedState=Al,e):Rl(n,m));if(u=e.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return Lv(e,n,m,a,w,u,i);if(c){c=a.fallback,m=n.mode,u=e.child,w=u.sibling;var k={mode:"hidden",children:a.children};return!(m&1)&&n.child!==u?(a=n.child,a.childLanes=0,a.pendingProps=k,n.deletions=null):(a=Mn(u,k),a.subtreeFlags=u.subtreeFlags&14680064),w!==null?c=Mn(w,c):(c=Jn(c,m,i,null),c.flags|=2),c.return=n,a.return=n,a.sibling=c,n.child=a,a=c,c=n.child,m=e.child.memoizedState,m=m===null?jl(i):{baseLanes:m.baseLanes|i,cachePool:null,transitions:m.transitions},c.memoizedState=m,c.childLanes=e.childLanes&~i,n.memoizedState=Al,a}return c=e.child,e=c.sibling,a=Mn(c,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function Rl(e,n){return n=fs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Jo(e,n,i,a){return a!==null&&rl(a),br(n,e.child,null,i),e=Rl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lv(e,n,i,a,u,c,m){if(i)return n.flags&256?(n.flags&=-257,a=Pl(Error(o(422))),Jo(e,n,m,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(c=a.fallback,u=n.mode,a=fs({mode:"visible",children:a.children},u,0,null),c=Jn(c,u,m,null),c.flags|=2,a.return=n,c.return=n,a.sibling=c,n.child=a,n.mode&1&&br(n,e.child,null,m),n.child.memoizedState=jl(m),n.memoizedState=Al,c);if(!(n.mode&1))return Jo(e,n,m,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var w=a.dgst;return a=w,c=Error(o(419)),a=Pl(c,a,void 0),Jo(e,n,m,a)}if(w=(m&e.childLanes)!==0,wt||w){if(a=Je,a!==null){switch(m&-m){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(a.suspendedLanes|m)?0:u,u!==0&&u!==c.retryLane&&(c.retryLane=u,an(e,u),Ht(a,e,u,-1))}return Kl(),a=Pl(Error(o(421))),Jo(e,n,m,a)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=Wv.bind(null,e),u._reactRetry=n,null):(e=c.treeContext,bt=Sn(u.nextSibling),Tt=n,Me=!0,Ft=null,e!==null&&(Rt[Lt++]=on,Rt[Lt++]=sn,Rt[Lt++]=Wn,on=e.id,sn=e.overflow,Wn=n),n=Rl(n,a.children),n.flags|=4096,n)}function ap(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),al(e.return,n,i)}function Ll(e,n,i,a,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:u}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=i,c.tailMode=u)}function lp(e,n,i){var a=n.pendingProps,u=a.revealOrder,c=a.tail;if(pt(e,n,a.children,i),a=De.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ap(e,i,n);else if(e.tag===19)ap(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(be(De,a),!(n.mode&1))n.memoizedState=null;else switch(u){case"forwards":for(i=n.child,u=null;i!==null;)e=i.alternate,e!==null&&Ko(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),Ll(n,!1,u,i,c);break;case"backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ko(e)===null){n.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}Ll(n,!0,i,null,c);break;case"together":Ll(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function es(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function un(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,i=Mn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Mn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Mv(e,n,i){switch(n.tag){case 3:ip(n),Tr();break;case 5:kf(n);break;case 1:xt(n.type)&&Oo(n);break;case 4:cl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,u=n.memoizedProps.value;be(Bo,a._currentValue),a._currentValue=u;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(be(De,De.current&1),n.flags|=128,null):i&n.child.childLanes?sp(e,n,i):(be(De,De.current&1),e=un(e,n,i),e!==null?e.sibling:null);be(De,De.current&1);break;case 19:if(a=(i&n.childLanes)!==0,e.flags&128){if(a)return lp(e,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(De,De.current),a)break;return null;case 22:case 23:return n.lanes=0,tp(e,n,i)}return un(e,n,i)}var up,Ml,cp,dp;up=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ml=function(){},cp=function(e,n,i,a){var u=e.memoizedProps;if(u!==a){e=n.stateNode,Gn(Xt.current);var c=null;switch(i){case"input":u=aa(e,u),a=aa(e,a),c=[];break;case"select":u=R({},u,{value:void 0}),a=R({},a,{value:void 0}),c=[];break;case"textarea":u=ca(e,u),a=ca(e,a),c=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Do)}fa(i,a);var m;i=null;for(M in u)if(!a.hasOwnProperty(M)&&u.hasOwnProperty(M)&&u[M]!=null)if(M==="style"){var w=u[M];for(m in w)w.hasOwnProperty(m)&&(i||(i={}),i[m]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(l.hasOwnProperty(M)?c||(c=[]):(c=c||[]).push(M,null));for(M in a){var k=a[M];if(w=u!=null?u[M]:void 0,a.hasOwnProperty(M)&&k!==w&&(k!=null||w!=null))if(M==="style")if(w){for(m in w)!w.hasOwnProperty(m)||k&&k.hasOwnProperty(m)||(i||(i={}),i[m]="");for(m in k)k.hasOwnProperty(m)&&w[m]!==k[m]&&(i||(i={}),i[m]=k[m])}else i||(c||(c=[]),c.push(M,i)),i=k;else M==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(c=c||[]).push(M,k)):M==="children"?typeof k!="string"&&typeof k!="number"||(c=c||[]).push(M,""+k):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(l.hasOwnProperty(M)?(k!=null&&M==="onScroll"&&Ee("scroll",e),c||w===k||(c=[])):(c=c||[]).push(M,k))}i&&(c=c||[]).push("style",i);var M=c;(n.updateQueue=M)&&(n.flags|=4)}},dp=function(e,n,i,a){i!==a&&(n.flags|=4)};function Mi(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ut(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function Dv(e,n,i){var a=n.pendingProps;switch(el(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(n),null;case 1:return xt(n.type)&&Io(),ut(n),null;case 3:return a=n.stateNode,jr(),Ae(vt),Ae(at),pl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ft!==null&&(Ul(Ft),Ft=null))),Ml(e,n),ut(n),null;case 5:dl(n);var u=Gn(Ei.current);if(i=n.type,e!==null&&n.stateNode!=null)cp(e,n,i,a,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(o(166));return ut(n),null}if(e=Gn(Xt.current),zo(n)){a=n.stateNode,i=n.type;var c=n.memoizedProps;switch(a[Qt]=n,a[ki]=c,e=(n.mode&1)!==0,i){case"dialog":Ee("cancel",a),Ee("close",a);break;case"iframe":case"object":case"embed":Ee("load",a);break;case"video":case"audio":for(u=0;u<xi.length;u++)Ee(xi[u],a);break;case"source":Ee("error",a);break;case"img":case"image":case"link":Ee("error",a),Ee("load",a);break;case"details":Ee("toggle",a);break;case"input":Wc(a,c),Ee("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},Ee("invalid",a);break;case"textarea":Gc(a,c),Ee("invalid",a)}fa(i,c),u=null;for(var m in c)if(c.hasOwnProperty(m)){var w=c[m];m==="children"?typeof w=="string"?a.textContent!==w&&(c.suppressHydrationWarning!==!0&&Mo(a.textContent,w,e),u=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(c.suppressHydrationWarning!==!0&&Mo(a.textContent,w,e),u=["children",""+w]):l.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&Ee("scroll",a)}switch(i){case"input":Se(a),Kc(a,c,!0);break;case"textarea":Se(a),Qc(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=Do)}a=u,n.updateQueue=a,a!==null&&(n.flags|=4)}else{m=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xc(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=m.createElement(i,{is:a.is}):(e=m.createElement(i),i==="select"&&(m=e,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):e=m.createElementNS(e,i),e[Qt]=n,e[ki]=a,up(e,n,!1,!1),n.stateNode=e;e:{switch(m=pa(i,a),i){case"dialog":Ee("cancel",e),Ee("close",e),u=a;break;case"iframe":case"object":case"embed":Ee("load",e),u=a;break;case"video":case"audio":for(u=0;u<xi.length;u++)Ee(xi[u],e);u=a;break;case"source":Ee("error",e),u=a;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),u=a;break;case"details":Ee("toggle",e),u=a;break;case"input":Wc(e,a),u=aa(e,a),Ee("invalid",e);break;case"option":u=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},u=R({},a,{value:void 0}),Ee("invalid",e);break;case"textarea":Gc(e,a),u=ca(e,a),Ee("invalid",e);break;default:u=a}fa(i,u),w=u;for(c in w)if(w.hasOwnProperty(c)){var k=w[c];c==="style"?Jc(e,k):c==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qc(e,k)):c==="children"?typeof k=="string"?(i!=="textarea"||k!=="")&&ei(e,k):typeof k=="number"&&ei(e,""+k):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(l.hasOwnProperty(c)?k!=null&&c==="onScroll"&&Ee("scroll",e):k!=null&&V(e,c,k,m))}switch(i){case"input":Se(e),Kc(e,a,!1);break;case"textarea":Se(e),Qc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+le(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?cr(e,!!a.multiple,c,!1):a.defaultValue!=null&&cr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Do)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ut(n),null;case 6:if(e&&n.stateNode!=null)dp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(i=Gn(Ei.current),Gn(Xt.current),zo(n)){if(a=n.stateNode,i=n.memoizedProps,a[Qt]=n,(c=a.nodeValue!==i)&&(e=Tt,e!==null))switch(e.tag){case 3:Mo(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(a.nodeValue,i,(e.mode&1)!==0)}c&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Qt]=n,n.stateNode=a}return ut(n),null;case 13:if(Ae(De),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&bt!==null&&n.mode&1&&!(n.flags&128))hf(),Tr(),n.flags|=98560,c=!1;else if(c=zo(n),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Qt]=n}else Tr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ut(n),c=!1}else Ft!==null&&(Ul(Ft),Ft=null),c=!0;if(!c)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||De.current&1?Xe===0&&(Xe=3):Kl())),n.updateQueue!==null&&(n.flags|=4),ut(n),null);case 4:return jr(),Ml(e,n),e===null&&wi(n.stateNode.containerInfo),ut(n),null;case 10:return sl(n.type._context),ut(n),null;case 17:return xt(n.type)&&Io(),ut(n),null;case 19:if(Ae(De),c=n.memoizedState,c===null)return ut(n),null;if(a=(n.flags&128)!==0,m=c.rendering,m===null)if(a)Mi(c,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(m=Ko(e),m!==null){for(n.flags|=128,Mi(c,!1),a=m.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)c=i,e=a,c.flags&=14680066,m=c.alternate,m===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=m.childLanes,c.lanes=m.lanes,c.child=m.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=m.memoizedProps,c.memoizedState=m.memoizedState,c.updateQueue=m.updateQueue,c.type=m.type,e=m.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return be(De,De.current&1|2),n.child}e=e.sibling}c.tail!==null&&$e()>Dr&&(n.flags|=128,a=!0,Mi(c,!1),n.lanes=4194304)}else{if(!a)if(e=Ko(m),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Mi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Me)return ut(n),null}else 2*$e()-c.renderingStartTime>Dr&&i!==1073741824&&(n.flags|=128,a=!0,Mi(c,!1),n.lanes=4194304);c.isBackwards?(m.sibling=n.child,n.child=m):(i=c.last,i!==null?i.sibling=m:n.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=$e(),n.sibling=null,i=De.current,be(De,a?i&1|2:i&1),n):(ut(n),null);case 22:case 23:return Hl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Et&1073741824&&(ut(n),n.subtreeFlags&6&&(n.flags|=8192)):ut(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function _v(e,n){switch(el(n),n.tag){case 1:return xt(n.type)&&Io(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return jr(),Ae(vt),Ae(at),pl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return dl(n),null;case 13:if(Ae(De),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ae(De),null;case 4:return jr(),null;case 10:return sl(n.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var ts=!1,ct=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,q=null;function Lr(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){Oe(e,n,a)}else i.current=null}function Dl(e,n,i){try{i()}catch(a){Oe(e,n,a)}}var fp=!1;function Ov(e,n){if(Ha=So,e=Ud(),Va(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var u=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var m=0,w=-1,k=-1,M=0,N=0,z=e,$=null;t:for(;;){for(var X;z!==i||u!==0&&z.nodeType!==3||(w=m+u),z!==c||a!==0&&z.nodeType!==3||(k=m+a),z.nodeType===3&&(m+=z.nodeValue.length),(X=z.firstChild)!==null;)$=z,z=X;for(;;){if(z===e)break t;if($===i&&++M===u&&(w=m),$===c&&++N===a&&(k=m),(X=z.nextSibling)!==null)break;z=$,$=z.parentNode}z=X}i=w===-1||k===-1?null:{start:w,end:k}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ka={focusedElem:e,selectionRange:i},So=!1,q=n;q!==null;)if(n=q,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,q=e;else for(;q!==null;){n=q;try{var J=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var te=J.memoizedProps,Ne=J.memoizedState,E=n.stateNode,P=E.getSnapshotBeforeUpdate(n.elementType===n.type?te:Bt(n.type,te),Ne);E.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var A=n.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(W){Oe(n,n.return,W)}if(e=n.sibling,e!==null){e.return=n.return,q=e;break}q=n.return}return J=fp,fp=!1,J}function Di(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&e)===e){var c=u.destroy;u.destroy=void 0,c!==void 0&&Dl(n,i,c)}u=u.next}while(u!==a)}}function ns(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function _l(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function pp(e){var n=e.alternate;n!==null&&(e.alternate=null,pp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qt],delete n[ki],delete n[Xa],delete n[vv],delete n[xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hp(e){return e.tag===5||e.tag===3||e.tag===4}function mp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Do));else if(a!==4&&(e=e.child,e!==null))for(Il(e,n,i),e=e.sibling;e!==null;)Il(e,n,i),e=e.sibling}function Ol(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ol(e,n,i),e=e.sibling;e!==null;)Ol(e,n,i),e=e.sibling}var rt=null,Ut=!1;function En(e,n,i){for(i=i.child;i!==null;)gp(e,n,i),i=i.sibling}function gp(e,n,i){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(mo,i)}catch{}switch(i.tag){case 5:ct||Lr(i,n);case 6:var a=rt,u=Ut;rt=null,En(e,n,i),rt=a,Ut=u,rt!==null&&(Ut?(e=rt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):rt.removeChild(i.stateNode));break;case 18:rt!==null&&(Ut?(e=rt,i=i.stateNode,e.nodeType===8?Qa(e.parentNode,i):e.nodeType===1&&Qa(e,i),di(e)):Qa(rt,i.stateNode));break;case 4:a=rt,u=Ut,rt=i.stateNode.containerInfo,Ut=!0,En(e,n,i),rt=a,Ut=u;break;case 0:case 11:case 14:case 15:if(!ct&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var c=u,m=c.destroy;c=c.tag,m!==void 0&&(c&2||c&4)&&Dl(i,n,m),u=u.next}while(u!==a)}En(e,n,i);break;case 1:if(!ct&&(Lr(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(w){Oe(i,n,w)}En(e,n,i);break;case 21:En(e,n,i);break;case 22:i.mode&1?(ct=(a=ct)||i.memoizedState!==null,En(e,n,i),ct=a):En(e,n,i);break;default:En(e,n,i)}}function yp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Iv),n.forEach(function(a){var u=Hv.bind(null,e,a);i.has(a)||(i.add(a),a.then(u,u))})}}function Wt(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];try{var c=e,m=n,w=m;e:for(;w!==null;){switch(w.tag){case 5:rt=w.stateNode,Ut=!1;break e;case 3:rt=w.stateNode.containerInfo,Ut=!0;break e;case 4:rt=w.stateNode.containerInfo,Ut=!0;break e}w=w.return}if(rt===null)throw Error(o(160));gp(c,m,u),rt=null,Ut=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(M){Oe(u,n,M)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vp(n,e),n=n.sibling}function vp(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(n,e),Zt(e),a&4){try{Di(3,e,e.return),ns(3,e)}catch(te){Oe(e,e.return,te)}try{Di(5,e,e.return)}catch(te){Oe(e,e.return,te)}}break;case 1:Wt(n,e),Zt(e),a&512&&i!==null&&Lr(i,i.return);break;case 5:if(Wt(n,e),Zt(e),a&512&&i!==null&&Lr(i,i.return),e.flags&32){var u=e.stateNode;try{ei(u,"")}catch(te){Oe(e,e.return,te)}}if(a&4&&(u=e.stateNode,u!=null)){var c=e.memoizedProps,m=i!==null?i.memoizedProps:c,w=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{w==="input"&&c.type==="radio"&&c.name!=null&&Hc(u,c),pa(w,m);var M=pa(w,c);for(m=0;m<k.length;m+=2){var N=k[m],z=k[m+1];N==="style"?Jc(u,z):N==="dangerouslySetInnerHTML"?qc(u,z):N==="children"?ei(u,z):V(u,N,z,M)}switch(w){case"input":la(u,c);break;case"textarea":Yc(u,c);break;case"select":var $=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!c.multiple;var X=c.value;X!=null?cr(u,!!c.multiple,X,!1):$!==!!c.multiple&&(c.defaultValue!=null?cr(u,!!c.multiple,c.defaultValue,!0):cr(u,!!c.multiple,c.multiple?[]:"",!1))}u[ki]=c}catch(te){Oe(e,e.return,te)}}break;case 6:if(Wt(n,e),Zt(e),a&4){if(e.stateNode===null)throw Error(o(162));u=e.stateNode,c=e.memoizedProps;try{u.nodeValue=c}catch(te){Oe(e,e.return,te)}}break;case 3:if(Wt(n,e),Zt(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{di(n.containerInfo)}catch(te){Oe(e,e.return,te)}break;case 4:Wt(n,e),Zt(e);break;case 13:Wt(n,e),Zt(e),u=e.child,u.flags&8192&&(c=u.memoizedState!==null,u.stateNode.isHidden=c,!c||u.alternate!==null&&u.alternate.memoizedState!==null||(Nl=$e())),a&4&&yp(e);break;case 22:if(N=i!==null&&i.memoizedState!==null,e.mode&1?(ct=(M=ct)||N,Wt(n,e),ct=M):Wt(n,e),Zt(e),a&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!N&&e.mode&1)for(q=e,N=e.child;N!==null;){for(z=q=N;q!==null;){switch($=q,X=$.child,$.tag){case 0:case 11:case 14:case 15:Di(4,$,$.return);break;case 1:Lr($,$.return);var J=$.stateNode;if(typeof J.componentWillUnmount=="function"){a=$,i=$.return;try{n=a,J.props=n.memoizedProps,J.state=n.memoizedState,J.componentWillUnmount()}catch(te){Oe(a,i,te)}}break;case 5:Lr($,$.return);break;case 22:if($.memoizedState!==null){Sp(z);continue}}X!==null?(X.return=$,q=X):Sp(z)}N=N.sibling}e:for(N=null,z=e;;){if(z.tag===5){if(N===null){N=z;try{u=z.stateNode,M?(c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(w=z.stateNode,k=z.memoizedProps.style,m=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=Zc("display",m))}catch(te){Oe(e,e.return,te)}}}else if(z.tag===6){if(N===null)try{z.stateNode.nodeValue=M?"":z.memoizedProps}catch(te){Oe(e,e.return,te)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;N===z&&(N=null),z=z.return}N===z&&(N=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Wt(n,e),Zt(e),a&4&&yp(e);break;case 21:break;default:Wt(n,e),Zt(e)}}function Zt(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(hp(i)){var a=i;break e}i=i.return}throw Error(o(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(ei(u,""),a.flags&=-33);var c=mp(e);Ol(e,c,u);break;case 3:case 4:var m=a.stateNode.containerInfo,w=mp(e);Il(e,w,m);break;default:throw Error(o(161))}}catch(k){Oe(e,e.return,k)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vv(e,n,i){q=e,xp(e)}function xp(e,n,i){for(var a=(e.mode&1)!==0;q!==null;){var u=q,c=u.child;if(u.tag===22&&a){var m=u.memoizedState!==null||ts;if(!m){var w=u.alternate,k=w!==null&&w.memoizedState!==null||ct;w=ts;var M=ct;if(ts=m,(ct=k)&&!M)for(q=u;q!==null;)m=q,k=m.child,m.tag===22&&m.memoizedState!==null?kp(u):k!==null?(k.return=m,q=k):kp(u);for(;c!==null;)q=c,xp(c),c=c.sibling;q=u,ts=w,ct=M}wp(e)}else u.subtreeFlags&8772&&c!==null?(c.return=u,q=c):wp(e)}}function wp(e){for(;q!==null;){var n=q;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ct||ns(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!ct)if(i===null)a.componentDidMount();else{var u=n.elementType===n.type?i.memoizedProps:Bt(n.type,i.memoizedProps);a.componentDidUpdate(u,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=n.updateQueue;c!==null&&Sf(n,c,a);break;case 3:var m=n.updateQueue;if(m!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Sf(n,m,i)}break;case 5:var w=n.stateNode;if(i===null&&n.flags&4){i=w;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&i.focus();break;case"img":k.src&&(i.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var M=n.alternate;if(M!==null){var N=M.memoizedState;if(N!==null){var z=N.dehydrated;z!==null&&di(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}ct||n.flags&512&&_l(n)}catch($){Oe(n,n.return,$)}}if(n===e){q=null;break}if(i=n.sibling,i!==null){i.return=n.return,q=i;break}q=n.return}}function Sp(e){for(;q!==null;){var n=q;if(n===e){q=null;break}var i=n.sibling;if(i!==null){i.return=n.return,q=i;break}q=n.return}}function kp(e){for(;q!==null;){var n=q;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{ns(4,n)}catch(k){Oe(n,i,k)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var u=n.return;try{a.componentDidMount()}catch(k){Oe(n,u,k)}}var c=n.return;try{_l(n)}catch(k){Oe(n,c,k)}break;case 5:var m=n.return;try{_l(n)}catch(k){Oe(n,m,k)}}}catch(k){Oe(n,n.return,k)}if(n===e){q=null;break}var w=n.sibling;if(w!==null){w.return=n.return,q=w;break}q=n.return}}var $v=Math.ceil,rs=H.ReactCurrentDispatcher,Vl=H.ReactCurrentOwner,_t=H.ReactCurrentBatchConfig,xe=0,Je=null,We=null,it=0,Et=0,Mr=kn(0),Xe=0,_i=null,Qn=0,is=0,$l=0,Ii=null,St=null,Nl=0,Dr=1/0,cn=null,os=!1,zl=null,An=null,ss=!1,jn=null,as=0,Oi=0,Fl=null,ls=-1,us=0;function ht(){return xe&6?$e():ls!==-1?ls:ls=$e()}function Rn(e){return e.mode&1?xe&2&&it!==0?it&-it:Sv.transition!==null?(us===0&&(us=hd()),us):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:Cd(e.type)),e):1}function Ht(e,n,i,a){if(50<Oi)throw Oi=0,Fl=null,Error(o(185));si(e,i,a),(!(xe&2)||e!==Je)&&(e===Je&&(!(xe&2)&&(is|=i),Xe===4&&Ln(e,it)),kt(e,a),i===1&&xe===0&&!(n.mode&1)&&(Dr=$e()+500,Vo&&Pn()))}function kt(e,n){var i=e.callbackNode;Sy(e,n);var a=vo(e,e===Je?it:0);if(a===0)i!==null&&dd(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&dd(i),n===1)e.tag===0?wv(Pp.bind(null,e)):uf(Pp.bind(null,e)),gv(function(){!(xe&6)&&Pn()}),i=null;else{switch(md(a)){case 1:i=wa;break;case 4:i=fd;break;case 16:i=ho;break;case 536870912:i=pd;break;default:i=ho}i=Mp(i,Cp.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Cp(e,n){if(ls=-1,us=0,xe&6)throw Error(o(327));var i=e.callbackNode;if(_r()&&e.callbackNode!==i)return null;var a=vo(e,e===Je?it:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=cs(e,a);else{n=a;var u=xe;xe|=2;var c=bp();(Je!==e||it!==n)&&(cn=null,Dr=$e()+500,qn(e,n));do try{Fv();break}catch(w){Tp(e,w)}while(!0);ol(),rs.current=c,xe=u,We!==null?n=0:(Je=null,it=0,n=Xe)}if(n!==0){if(n===2&&(u=Sa(e),u!==0&&(a=u,n=Bl(e,u))),n===1)throw i=_i,qn(e,0),Ln(e,a),kt(e,$e()),i;if(n===6)Ln(e,a);else{if(u=e.current.alternate,!(a&30)&&!Nv(u)&&(n=cs(e,a),n===2&&(c=Sa(e),c!==0&&(a=c,n=Bl(e,c))),n===1))throw i=_i,qn(e,0),Ln(e,a),kt(e,$e()),i;switch(e.finishedWork=u,e.finishedLanes=a,n){case 0:case 1:throw Error(o(345));case 2:Zn(e,St,cn);break;case 3:if(Ln(e,a),(a&130023424)===a&&(n=Nl+500-$e(),10<n)){if(vo(e,0)!==0)break;if(u=e.suspendedLanes,(u&a)!==a){ht(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Ya(Zn.bind(null,e,St,cn),n);break}Zn(e,St,cn);break;case 4:if(Ln(e,a),(a&4194240)===a)break;for(n=e.eventTimes,u=-1;0<a;){var m=31-Nt(a);c=1<<m,m=n[m],m>u&&(u=m),a&=~c}if(a=u,a=$e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*$v(a/1960))-a,10<a){e.timeoutHandle=Ya(Zn.bind(null,e,St,cn),a);break}Zn(e,St,cn);break;case 5:Zn(e,St,cn);break;default:throw Error(o(329))}}}return kt(e,$e()),e.callbackNode===i?Cp.bind(null,e):null}function Bl(e,n){var i=Ii;return e.current.memoizedState.isDehydrated&&(qn(e,n).flags|=256),e=cs(e,n),e!==2&&(n=St,St=i,n!==null&&Ul(n)),e}function Ul(e){St===null?St=e:St.push.apply(St,e)}function Nv(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var u=i[a],c=u.getSnapshot;u=u.value;try{if(!zt(c(),u))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ln(e,n){for(n&=~$l,n&=~is,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;e[i]=-1,n&=~a}}function Pp(e){if(xe&6)throw Error(o(327));_r();var n=vo(e,0);if(!(n&1))return kt(e,$e()),null;var i=cs(e,n);if(e.tag!==0&&i===2){var a=Sa(e);a!==0&&(n=a,i=Bl(e,a))}if(i===1)throw i=_i,qn(e,0),Ln(e,n),kt(e,$e()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,St,cn),kt(e,$e()),null}function Wl(e,n){var i=xe;xe|=1;try{return e(n)}finally{xe=i,xe===0&&(Dr=$e()+500,Vo&&Pn())}}function Xn(e){jn!==null&&jn.tag===0&&!(xe&6)&&_r();var n=xe;xe|=1;var i=_t.transition,a=Pe;try{if(_t.transition=null,Pe=1,e)return e()}finally{Pe=a,_t.transition=i,xe=n,!(xe&6)&&Pn()}}function Hl(){Et=Mr.current,Ae(Mr)}function qn(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,mv(i)),We!==null)for(i=We.return;i!==null;){var a=i;switch(el(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Io();break;case 3:jr(),Ae(vt),Ae(at),pl();break;case 5:dl(a);break;case 4:jr();break;case 13:Ae(De);break;case 19:Ae(De);break;case 10:sl(a.type._context);break;case 22:case 23:Hl()}i=i.return}if(Je=e,We=e=Mn(e.current,null),it=Et=n,Xe=0,_i=null,$l=is=Qn=0,St=Ii=null,Kn!==null){for(n=0;n<Kn.length;n++)if(i=Kn[n],a=i.interleaved,a!==null){i.interleaved=null;var u=a.next,c=i.pending;if(c!==null){var m=c.next;c.next=u,a.next=m}i.pending=a}Kn=null}return e}function Tp(e,n){do{var i=We;try{if(ol(),Go.current=qo,Yo){for(var a=_e.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}Yo=!1}if(Yn=0,Ze=Qe=_e=null,Ai=!1,ji=0,Vl.current=null,i===null||i.return===null){Xe=1,_i=n,We=null;break}e:{var c=e,m=i.return,w=i,k=n;if(n=it,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var M=k,N=w,z=N.tag;if(!(N.mode&1)&&(z===0||z===11||z===15)){var $=N.alternate;$?(N.updateQueue=$.updateQueue,N.memoizedState=$.memoizedState,N.lanes=$.lanes):(N.updateQueue=null,N.memoizedState=null)}var X=Xf(m);if(X!==null){X.flags&=-257,qf(X,m,w,c,n),X.mode&1&&Qf(c,M,n),n=X,k=M;var J=n.updateQueue;if(J===null){var te=new Set;te.add(k),n.updateQueue=te}else J.add(k);break e}else{if(!(n&1)){Qf(c,M,n),Kl();break e}k=Error(o(426))}}else if(Me&&w.mode&1){var Ne=Xf(m);if(Ne!==null){!(Ne.flags&65536)&&(Ne.flags|=256),qf(Ne,m,w,c,n),rl(Rr(k,w));break e}}c=k=Rr(k,w),Xe!==4&&(Xe=2),Ii===null?Ii=[c]:Ii.push(c),c=m;do{switch(c.tag){case 3:c.flags|=65536,n&=-n,c.lanes|=n;var E=Gf(c,k,n);wf(c,E);break e;case 1:w=k;var P=c.type,A=c.stateNode;if(!(c.flags&128)&&(typeof P.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(An===null||!An.has(A)))){c.flags|=65536,n&=-n,c.lanes|=n;var W=Yf(c,w,n);wf(c,W);break e}}c=c.return}while(c!==null)}Ap(i)}catch(ne){n=ne,We===i&&i!==null&&(We=i=i.return);continue}break}while(!0)}function bp(){var e=rs.current;return rs.current=qo,e===null?qo:e}function Kl(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),Je===null||!(Qn&268435455)&&!(is&268435455)||Ln(Je,it)}function cs(e,n){var i=xe;xe|=2;var a=bp();(Je!==e||it!==n)&&(cn=null,qn(e,n));do try{zv();break}catch(u){Tp(e,u)}while(!0);if(ol(),xe=i,rs.current=a,We!==null)throw Error(o(261));return Je=null,it=0,Xe}function zv(){for(;We!==null;)Ep(We)}function Fv(){for(;We!==null&&!fy();)Ep(We)}function Ep(e){var n=Lp(e.alternate,e,Et);e.memoizedProps=e.pendingProps,n===null?Ap(e):We=n,Vl.current=null}function Ap(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=_v(i,n),i!==null){i.flags&=32767,We=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,We=null;return}}else if(i=Dv(i,n,Et),i!==null){We=i;return}if(n=n.sibling,n!==null){We=n;return}We=n=e}while(n!==null);Xe===0&&(Xe=5)}function Zn(e,n,i){var a=Pe,u=_t.transition;try{_t.transition=null,Pe=1,Bv(e,n,i,a)}finally{_t.transition=u,Pe=a}return null}function Bv(e,n,i,a){do _r();while(jn!==null);if(xe&6)throw Error(o(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=i.lanes|i.childLanes;if(ky(e,c),e===Je&&(We=Je=null,it=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ss||(ss=!0,Mp(ho,function(){return _r(),null})),c=(i.flags&15990)!==0,i.subtreeFlags&15990||c){c=_t.transition,_t.transition=null;var m=Pe;Pe=1;var w=xe;xe|=4,Vl.current=null,Ov(e,i),vp(i,e),lv(Ka),So=!!Ha,Ka=Ha=null,e.current=i,Vv(i),py(),xe=w,Pe=m,_t.transition=c}else e.current=i;if(ss&&(ss=!1,jn=e,as=u),c=e.pendingLanes,c===0&&(An=null),gy(i.stateNode),kt(e,$e()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)u=n[i],a(u.value,{componentStack:u.stack,digest:u.digest});if(os)throw os=!1,e=zl,zl=null,e;return as&1&&e.tag!==0&&_r(),c=e.pendingLanes,c&1?e===Fl?Oi++:(Oi=0,Fl=e):Oi=0,Pn(),null}function _r(){if(jn!==null){var e=md(as),n=_t.transition,i=Pe;try{if(_t.transition=null,Pe=16>e?16:e,jn===null)var a=!1;else{if(e=jn,jn=null,as=0,xe&6)throw Error(o(331));var u=xe;for(xe|=4,q=e.current;q!==null;){var c=q,m=c.child;if(q.flags&16){var w=c.deletions;if(w!==null){for(var k=0;k<w.length;k++){var M=w[k];for(q=M;q!==null;){var N=q;switch(N.tag){case 0:case 11:case 15:Di(8,N,c)}var z=N.child;if(z!==null)z.return=N,q=z;else for(;q!==null;){N=q;var $=N.sibling,X=N.return;if(pp(N),N===M){q=null;break}if($!==null){$.return=X,q=$;break}q=X}}}var J=c.alternate;if(J!==null){var te=J.child;if(te!==null){J.child=null;do{var Ne=te.sibling;te.sibling=null,te=Ne}while(te!==null)}}q=c}}if(c.subtreeFlags&2064&&m!==null)m.return=c,q=m;else e:for(;q!==null;){if(c=q,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Di(9,c,c.return)}var E=c.sibling;if(E!==null){E.return=c.return,q=E;break e}q=c.return}}var P=e.current;for(q=P;q!==null;){m=q;var A=m.child;if(m.subtreeFlags&2064&&A!==null)A.return=m,q=A;else e:for(m=P;q!==null;){if(w=q,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:ns(9,w)}}catch(ne){Oe(w,w.return,ne)}if(w===m){q=null;break e}var W=w.sibling;if(W!==null){W.return=w.return,q=W;break e}q=w.return}}if(xe=u,Pn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(mo,e)}catch{}a=!0}return a}finally{Pe=i,_t.transition=n}}return!1}function jp(e,n,i){n=Rr(i,n),n=Gf(e,n,1),e=bn(e,n,1),n=ht(),e!==null&&(si(e,1,n),kt(e,n))}function Oe(e,n,i){if(e.tag===3)jp(e,e,i);else for(;n!==null;){if(n.tag===3){jp(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(An===null||!An.has(a))){e=Rr(i,e),e=Yf(n,e,1),n=bn(n,e,1),e=ht(),n!==null&&(si(n,1,e),kt(n,e));break}}n=n.return}}function Uv(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=ht(),e.pingedLanes|=e.suspendedLanes&i,Je===e&&(it&i)===i&&(Xe===4||Xe===3&&(it&130023424)===it&&500>$e()-Nl?qn(e,0):$l|=i),kt(e,n)}function Rp(e,n){n===0&&(e.mode&1?(n=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):n=1);var i=ht();e=an(e,n),e!==null&&(si(e,n,i),kt(e,i))}function Wv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Rp(e,i)}function Hv(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(n),Rp(e,i)}var Lp;Lp=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||vt.current)wt=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return wt=!1,Mv(e,n,i);wt=!!(e.flags&131072)}else wt=!1,Me&&n.flags&1048576&&cf(n,No,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;es(e,n),e=n.pendingProps;var u=kr(n,at.current);Ar(n,i),u=gl(null,n,a,e,u,i);var c=yl();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xt(a)?(c=!0,Oo(n)):c=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,ul(n),u.updater=Zo,n.stateNode=u,u._reactInternals=n,Cl(n,a,e,i),n=El(null,n,a,!0,c,i)):(n.tag=0,Me&&c&&Ja(n),pt(null,n,u,i),n=n.child),n;case 16:a=n.elementType;e:{switch(es(e,n),e=n.pendingProps,u=a._init,a=u(a._payload),n.type=a,u=n.tag=Gv(a),e=Bt(a,e),u){case 0:n=bl(null,n,a,e,i);break e;case 1:n=rp(null,n,a,e,i);break e;case 11:n=Zf(null,n,a,e,i);break e;case 14:n=Jf(null,n,a,Bt(a.type,e),i);break e}throw Error(o(306,a,""))}return n;case 0:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),bl(e,n,a,u,i);case 1:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),rp(e,n,a,u,i);case 3:e:{if(ip(n),e===null)throw Error(o(387));a=n.pendingProps,c=n.memoizedState,u=c.element,xf(e,n),Ho(n,a,null,i);var m=n.memoizedState;if(a=m.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){u=Rr(Error(o(423)),n),n=op(e,n,a,i,u);break e}else if(a!==u){u=Rr(Error(o(424)),n),n=op(e,n,a,i,u);break e}else for(bt=Sn(n.stateNode.containerInfo.firstChild),Tt=n,Me=!0,Ft=null,i=yf(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Tr(),a===u){n=un(e,n,i);break e}pt(e,n,a,i)}n=n.child}return n;case 5:return kf(n),e===null&&nl(n),a=n.type,u=n.pendingProps,c=e!==null?e.memoizedProps:null,m=u.children,Ga(a,u)?m=null:c!==null&&Ga(a,c)&&(n.flags|=32),np(e,n),pt(e,n,m,i),n.child;case 6:return e===null&&nl(n),null;case 13:return sp(e,n,i);case 4:return cl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=br(n,null,a,i):pt(e,n,a,i),n.child;case 11:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),Zf(e,n,a,u,i);case 7:return pt(e,n,n.pendingProps,i),n.child;case 8:return pt(e,n,n.pendingProps.children,i),n.child;case 12:return pt(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,u=n.pendingProps,c=n.memoizedProps,m=u.value,be(Bo,a._currentValue),a._currentValue=m,c!==null)if(zt(c.value,m)){if(c.children===u.children&&!vt.current){n=un(e,n,i);break e}}else for(c=n.child,c!==null&&(c.return=n);c!==null;){var w=c.dependencies;if(w!==null){m=c.child;for(var k=w.firstContext;k!==null;){if(k.context===a){if(c.tag===1){k=ln(-1,i&-i),k.tag=2;var M=c.updateQueue;if(M!==null){M=M.shared;var N=M.pending;N===null?k.next=k:(k.next=N.next,N.next=k),M.pending=k}}c.lanes|=i,k=c.alternate,k!==null&&(k.lanes|=i),al(c.return,i,n),w.lanes|=i;break}k=k.next}}else if(c.tag===10)m=c.type===n.type?null:c.child;else if(c.tag===18){if(m=c.return,m===null)throw Error(o(341));m.lanes|=i,w=m.alternate,w!==null&&(w.lanes|=i),al(m,i,n),m=c.sibling}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===n){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}pt(e,n,u.children,i),n=n.child}return n;case 9:return u=n.type,a=n.pendingProps.children,Ar(n,i),u=Mt(u),a=a(u),n.flags|=1,pt(e,n,a,i),n.child;case 14:return a=n.type,u=Bt(a,n.pendingProps),u=Bt(a.type,u),Jf(e,n,a,u,i);case 15:return ep(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),es(e,n),n.tag=1,xt(a)?(e=!0,Oo(n)):e=!1,Ar(n,i),Hf(n,a,u),Cl(n,a,u,i),El(null,n,a,!0,e,i);case 19:return lp(e,n,i);case 22:return tp(e,n,i)}throw Error(o(156,n.tag))};function Mp(e,n){return cd(e,n)}function Kv(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,n,i,a){return new Kv(e,n,i,a)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gv(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ye)return 11;if(e===qe)return 14}return 2}function Mn(e,n){var i=e.alternate;return i===null?(i=It(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function ds(e,n,i,a,u,c){var m=2;if(a=e,typeof e=="function")Gl(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case K:return Jn(i.children,u,c,n);case Z:m=8,u|=8;break;case ve:return e=It(12,i,n,u|2),e.elementType=ve,e.lanes=c,e;case Te:return e=It(13,i,n,u),e.elementType=Te,e.lanes=c,e;case Ue:return e=It(19,i,n,u),e.elementType=Ue,e.lanes=c,e;case de:return fs(i,u,c,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:m=10;break e;case Be:m=9;break e;case Ye:m=11;break e;case qe:m=14;break e;case ye:m=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=It(m,i,n,u),n.elementType=e,n.type=a,n.lanes=c,n}function Jn(e,n,i,a){return e=It(7,e,a,n),e.lanes=i,e}function fs(e,n,i,a){return e=It(22,e,a,n),e.elementType=de,e.lanes=i,e.stateNode={isHidden:!1},e}function Yl(e,n,i){return e=It(6,e,null,n),e.lanes=i,e}function Ql(e,n,i){return n=It(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yv(e,n,i,a,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Xl(e,n,i,a,u,c,m,w,k){return e=new Yv(e,n,i,w,k),n===1?(n=1,c===!0&&(n|=8)):n=0,c=It(3,null,null,n),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ul(c),e}function Qv(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function Dp(e){if(!e)return Cn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(xt(i))return af(e,i,n)}return n}function _p(e,n,i,a,u,c,m,w,k){return e=Xl(i,a,!0,e,u,c,m,w,k),e.context=Dp(null),i=e.current,a=ht(),u=Rn(i),c=ln(a,u),c.callback=n??null,bn(i,c,u),e.current.lanes=u,si(e,u,a),kt(e,a),e}function ps(e,n,i,a){var u=n.current,c=ht(),m=Rn(u);return i=Dp(i),n.context===null?n.context=i:n.pendingContext=i,n=ln(c,m),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=bn(u,n,m),e!==null&&(Ht(e,u,m,c),Wo(e,u,m)),m}function hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ip(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function ql(e,n){Ip(e,n),(e=e.alternate)&&Ip(e,n)}var Op=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}ms.prototype.render=Zl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));ps(e,n,null,null)},ms.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xn(function(){ps(null,e,null,null)}),n[nn]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var n=vd();e={blockedOn:null,target:e,priority:n};for(var i=0;i<vn.length&&n!==0&&n<vn[i].priority;i++);vn.splice(i,0,e),i===0&&Sd(e)}};function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function Xv(e,n,i,a,u){if(u){if(typeof a=="function"){var c=a;a=function(){var M=hs(m);c.call(M)}}var m=_p(n,a,e,0,null,!1,!1,"",Vp);return e._reactRootContainer=m,e[nn]=m.current,wi(e.nodeType===8?e.parentNode:e),Xn(),m}for(;u=e.lastChild;)e.removeChild(u);if(typeof a=="function"){var w=a;a=function(){var M=hs(k);w.call(M)}}var k=Xl(e,0,!1,null,null,!1,!1,"",Vp);return e._reactRootContainer=k,e[nn]=k.current,wi(e.nodeType===8?e.parentNode:e),Xn(function(){ps(n,k,i,a)}),k}function ys(e,n,i,a,u){var c=i._reactRootContainer;if(c){var m=c;if(typeof u=="function"){var w=u;u=function(){var k=hs(m);w.call(k)}}ps(n,m,e,u)}else m=Xv(i,n,e,u,a);return hs(m)}gd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=oi(n.pendingLanes);i!==0&&(Ca(n,i|1),kt(n,$e()),!(xe&6)&&(Dr=$e()+500,Pn()))}break;case 13:Xn(function(){var a=an(e,1);if(a!==null){var u=ht();Ht(a,e,1,u)}}),ql(e,1)}},Pa=function(e){if(e.tag===13){var n=an(e,134217728);if(n!==null){var i=ht();Ht(n,e,134217728,i)}ql(e,134217728)}},yd=function(e){if(e.tag===13){var n=Rn(e),i=an(e,n);if(i!==null){var a=ht();Ht(i,e,n,a)}ql(e,n)}},vd=function(){return Pe},xd=function(e,n){var i=Pe;try{return Pe=e,n()}finally{Pe=i}},ga=function(e,n,i){switch(n){case"input":if(la(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var u=_o(a);if(!u)throw Error(o(90));st(a),la(a,u)}}}break;case"textarea":Yc(e,i);break;case"select":n=i.value,n!=null&&cr(e,!!i.multiple,n,!1)}},rd=Wl,id=Xn;var qv={usingClientEntryPoint:!1,Events:[Ci,wr,_o,td,nd,Wl]},Vi={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zv={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ld(e),e===null?null:e.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{mo=vs.inject(Zv),Yt=vs}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv,Ct.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jl(n))throw Error(o(200));return Qv(e,n,null,i)},Ct.createRoot=function(e,n){if(!Jl(e))throw Error(o(299));var i=!1,a="",u=Op;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Xl(e,1,!1,null,null,i,!1,a,u),e[nn]=n.current,wi(e.nodeType===8?e.parentNode:e),new Zl(n)},Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ld(n),e=e===null?null:e.stateNode,e},Ct.flushSync=function(e){return Xn(e)},Ct.hydrate=function(e,n,i){if(!gs(n))throw Error(o(200));return ys(null,e,n,!0,i)},Ct.hydrateRoot=function(e,n,i){if(!Jl(e))throw Error(o(405));var a=i!=null&&i.hydratedSources||null,u=!1,c="",m=Op;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),n=_p(n,null,e,1,i??null,u,!1,c,m),e[nn]=n.current,wi(e),a)for(e=0;e<a.length;e++)i=a[e],u=i._getVersion,u=u(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,u]:n.mutableSourceEagerHydrationData.push(i,u);return new ms(n)},Ct.render=function(e,n,i){if(!gs(n))throw Error(o(200));return ys(null,e,n,!1,i)},Ct.unmountComponentAtNode=function(e){if(!gs(e))throw Error(o(40));return e._reactRootContainer?(Xn(function(){ys(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1},Ct.unstable_batchedUpdates=Wl,Ct.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!gs(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ys(e,n,i,!1,a)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Hp;function s1(){if(Hp)return nu.exports;Hp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),nu.exports=o1(),nu.exports}var Kp;function a1(){if(Kp)return xs;Kp=1;var t=s1();return xs.createRoot=t.createRoot,xs.hydrateRoot=t.hydrateRoot,xs}var l1=a1();const u1=tc(l1);var nt=function(){return nt=Object.assign||function(r){for(var o,s=1,l=arguments.length;s<l;s++){o=arguments[s];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(r[d]=o[d])}return r},nt.apply(this,arguments)};function qi(t,r,o){if(o||arguments.length===2)for(var s=0,l=r.length,d;s<l;s++)(d||!(s in r))&&(d||(d=Array.prototype.slice.call(r,0,s)),d[s]=r[s]);return t.concat(d||Array.prototype.slice.call(r))}var je="-ms-",Ki="-moz-",Ce="-webkit-",Zm="comm",Qs="rule",rc="decl",c1="@import",Jm="@keyframes",d1="@layer",eg=Math.abs,ic=String.fromCharCode,Eu=Object.assign;function f1(t,r){return tt(t,0)^45?(((r<<2^tt(t,0))<<2^tt(t,1))<<2^tt(t,2))<<2^tt(t,3):0}function tg(t){return t.trim()}function dn(t,r){return(t=r.exec(t))?t[0]:t}function pe(t,r,o){return t.replace(r,o)}function Es(t,r,o){return t.indexOf(r,o)}function tt(t,r){return t.charCodeAt(r)|0}function Ur(t,r,o){return t.slice(r,o)}function Jt(t){return t.length}function ng(t){return t.length}function Bi(t,r){return r.push(t),t}function p1(t,r){return t.map(r).join("")}function Gp(t,r){return t.filter(function(o){return!dn(o,r)})}var Xs=1,Wr=1,rg=0,$t=0,He=0,Xr="";function qs(t,r,o,s,l,d,f,h){return{value:t,root:r,parent:o,type:s,props:l,children:d,line:Xs,column:Wr,length:f,return:"",siblings:h}}function _n(t,r){return Eu(qs("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},r)}function Ir(t){for(;t.root;)t=_n(t.root,{children:[t]});Bi(t,t.siblings)}function h1(){return He}function m1(){return He=$t>0?tt(Xr,--$t):0,Wr--,He===10&&(Wr=1,Xs--),He}function Gt(){return He=$t<rg?tt(Xr,$t++):0,Wr++,He===10&&(Wr=1,Xs++),He}function or(){return tt(Xr,$t)}function As(){return $t}function Zs(t,r){return Ur(Xr,t,r)}function Au(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g1(t){return Xs=Wr=1,rg=Jt(Xr=t),$t=0,[]}function y1(t){return Xr="",t}function ou(t){return tg(Zs($t-1,ju(t===91?t+2:t===40?t+1:t)))}function v1(t){for(;(He=or())&&He<33;)Gt();return Au(t)>2||Au(He)>3?"":" "}function x1(t,r){for(;--r&&Gt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Zs(t,As()+(r<6&&or()==32&&Gt()==32))}function ju(t){for(;Gt();)switch(He){case t:return $t;case 34:case 39:t!==34&&t!==39&&ju(He);break;case 40:t===41&&ju(t);break;case 92:Gt();break}return $t}function w1(t,r){for(;Gt()&&t+He!==57;)if(t+He===84&&or()===47)break;return"/*"+Zs(r,$t-1)+"*"+ic(t===47?t:Gt())}function S1(t){for(;!Au(or());)Gt();return Zs(t,$t)}function k1(t){return y1(js("",null,null,null,[""],t=g1(t),0,[0],t))}function js(t,r,o,s,l,d,f,h,p){for(var g=0,y=0,v=f,x=0,T=0,j=0,b=1,_=1,D=1,O=0,V="",H=l,F=d,U=s,K=V;_;)switch(j=O,O=Gt()){case 40:if(j!=108&&tt(K,v-1)==58){Es(K+=pe(ou(O),"&","&\f"),"&\f",eg(g?h[g-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:K+=ou(O);break;case 9:case 10:case 13:case 32:K+=v1(j);break;case 92:K+=x1(As()-1,7);continue;case 47:switch(or()){case 42:case 47:Bi(C1(w1(Gt(),As()),r,o,p),p);break;default:K+="/"}break;case 123*b:h[g++]=Jt(K)*D;case 125*b:case 59:case 0:switch(O){case 0:case 125:_=0;case 59+y:D==-1&&(K=pe(K,/\f/g,"")),T>0&&Jt(K)-v&&Bi(T>32?Qp(K+";",s,o,v-1,p):Qp(pe(K," ","")+";",s,o,v-2,p),p);break;case 59:K+=";";default:if(Bi(U=Yp(K,r,o,g,y,l,h,V,H=[],F=[],v,d),d),O===123)if(y===0)js(K,r,U,U,H,d,v,h,F);else switch(x===99&&tt(K,3)===110?100:x){case 100:case 108:case 109:case 115:js(t,U,U,s&&Bi(Yp(t,U,U,0,0,l,h,V,l,H=[],v,F),F),l,F,v,h,s?H:F);break;default:js(K,U,U,U,[""],F,0,h,F)}}g=y=T=0,b=D=1,V=K="",v=f;break;case 58:v=1+Jt(K),T=j;default:if(b<1){if(O==123)--b;else if(O==125&&b++==0&&m1()==125)continue}switch(K+=ic(O),O*b){case 38:D=y>0?1:(K+="\f",-1);break;case 44:h[g++]=(Jt(K)-1)*D,D=1;break;case 64:or()===45&&(K+=ou(Gt())),x=or(),y=v=Jt(V=K+=S1(As())),O++;break;case 45:j===45&&Jt(K)==2&&(b=0)}}return d}function Yp(t,r,o,s,l,d,f,h,p,g,y,v){for(var x=l-1,T=l===0?d:[""],j=ng(T),b=0,_=0,D=0;b<s;++b)for(var O=0,V=Ur(t,x+1,x=eg(_=f[b])),H=t;O<j;++O)(H=tg(_>0?T[O]+" "+V:pe(V,/&\f/g,T[O])))&&(p[D++]=H);return qs(t,r,o,l===0?Qs:h,p,g,y,v)}function C1(t,r,o,s){return qs(t,r,o,Zm,ic(h1()),Ur(t,2,-2),0,s)}function Qp(t,r,o,s,l){return qs(t,r,o,rc,Ur(t,0,s),Ur(t,s+1,-1),s,l)}function ig(t,r,o){switch(f1(t,r)){case 5103:return Ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+t+t;case 4789:return Ki+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+t+Ki+t+je+t+t;case 5936:switch(tt(t,r+11)){case 114:return Ce+t+je+pe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ce+t+je+pe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ce+t+je+pe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ce+t+je+t+t;case 6165:return Ce+t+je+"flex-"+t+t;case 5187:return Ce+t+pe(t,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+je+"flex-$1$2")+t;case 5443:return Ce+t+je+"flex-item-"+pe(t,/flex-|-self/g,"")+(dn(t,/flex-|baseline/)?"":je+"grid-row-"+pe(t,/flex-|-self/g,""))+t;case 4675:return Ce+t+je+"flex-line-pack"+pe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ce+t+je+pe(t,"shrink","negative")+t;case 5292:return Ce+t+je+pe(t,"basis","preferred-size")+t;case 6060:return Ce+"box-"+pe(t,"-grow","")+Ce+t+je+pe(t,"grow","positive")+t;case 4554:return Ce+pe(t,/([^-])(transform)/g,"$1"+Ce+"$2")+t;case 6187:return pe(pe(pe(t,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),t,"")+t;case 5495:case 3959:return pe(t,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return pe(pe(t,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+t+t;case 4200:if(!dn(t,/flex-|baseline/))return je+"grid-column-align"+Ur(t,r)+t;break;case 2592:case 3360:return je+pe(t,"template-","")+t;case 4384:case 3616:return o&&o.some(function(s,l){return r=l,dn(s.props,/grid-\w+-end/)})?~Es(t+(o=o[r].value),"span",0)?t:je+pe(t,"-start","")+t+je+"grid-row-span:"+(~Es(o,"span",0)?dn(o,/\d+/):+dn(o,/\d+/)-+dn(t,/\d+/))+";":je+pe(t,"-start","")+t;case 4896:case 4128:return o&&o.some(function(s){return dn(s.props,/grid-\w+-start/)})?t:je+pe(pe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return pe(t,/(.+)-inline(.+)/,Ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(t)-1-r>6)switch(tt(t,r+1)){case 109:if(tt(t,r+4)!==45)break;case 102:return pe(t,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Ki+(tt(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~Es(t,"stretch",0)?ig(pe(t,"stretch","fill-available"),r,o)+t:t}break;case 5152:case 5920:return pe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,f,h,p,g){return je+l+":"+d+g+(f?je+l+"-span:"+(h?p:+p-+d)+g:"")+t});case 4949:if(tt(t,r+6)===121)return pe(t,":",":"+Ce)+t;break;case 6444:switch(tt(t,tt(t,14)===45?18:11)){case 120:return pe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(tt(t,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+je+"$2box$3")+t;case 100:return pe(t,":",":"+je)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(t,"scroll-","scroll-snap-")+t}return t}function Os(t,r){for(var o="",s=0;s<t.length;s++)o+=r(t[s],s,t,r)||"";return o}function P1(t,r,o,s){switch(t.type){case d1:if(t.children.length)break;case c1:case rc:return t.return=t.return||t.value;case Zm:return"";case Jm:return t.return=t.value+"{"+Os(t.children,s)+"}";case Qs:if(!Jt(t.value=t.props.join(",")))return""}return Jt(o=Os(t.children,s))?t.return=t.value+"{"+o+"}":""}function T1(t){var r=ng(t);return function(o,s,l,d){for(var f="",h=0;h<r;h++)f+=t[h](o,s,l,d)||"";return f}}function b1(t){return function(r){r.root||(r=r.return)&&t(r)}}function E1(t,r,o,s){if(t.length>-1&&!t.return)switch(t.type){case rc:t.return=ig(t.value,t.length,o);return;case Jm:return Os([_n(t,{value:pe(t.value,"@","@"+Ce)})],s);case Qs:if(t.length)return p1(o=t.props,function(l){switch(dn(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ir(_n(t,{props:[pe(l,/:(read-\w+)/,":"+Ki+"$1")]})),Ir(_n(t,{props:[l]})),Eu(t,{props:Gp(o,s)});break;case"::placeholder":Ir(_n(t,{props:[pe(l,/:(plac\w+)/,":"+Ce+"input-$1")]})),Ir(_n(t,{props:[pe(l,/:(plac\w+)/,":"+Ki+"$1")]})),Ir(_n(t,{props:[pe(l,/:(plac\w+)/,je+"input-$1")]})),Ir(_n(t,{props:[l]})),Eu(t,{props:Gp(o,s)});break}return""})}}var A1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},Hr=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",og="active",sg="data-styled-version",Js="6.1.14",oc=`/*!sc*/
`,Vs=typeof window<"u"&&"HTMLElement"in window,j1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),R1={},ea=Object.freeze([]),Kr=Object.freeze({});function ag(t,r,o){return o===void 0&&(o=Kr),t.theme!==o.theme&&t.theme||r||o.theme}var lg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),L1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M1=/(^-|-$)/g;function Xp(t){return t.replace(L1,"-").replace(M1,"")}var D1=/(a)(d)/gi,ws=52,qp=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ru(t){var r,o="";for(r=Math.abs(t);r>ws;r=r/ws|0)o=qp(r%ws)+o;return(qp(r%ws)+o).replace(D1,"$1-$2")}var su,ug=5381,Vr=function(t,r){for(var o=r.length;o;)t=33*t^r.charCodeAt(--o);return t},cg=function(t){return Vr(ug,t)};function dg(t){return Ru(cg(t)>>>0)}function _1(t){return t.displayName||t.name||"Component"}function au(t){return typeof t=="string"&&!0}var fg=typeof Symbol=="function"&&Symbol.for,pg=fg?Symbol.for("react.memo"):60115,I1=fg?Symbol.for("react.forward_ref"):60112,O1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$1=((su={})[I1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},su[pg]=hg,su);function Zp(t){return("type"in(r=t)&&r.type.$$typeof)===pg?hg:"$$typeof"in t?$1[t.$$typeof]:O1;var r}var N1=Object.defineProperty,z1=Object.getOwnPropertyNames,Jp=Object.getOwnPropertySymbols,F1=Object.getOwnPropertyDescriptor,B1=Object.getPrototypeOf,eh=Object.prototype;function mg(t,r,o){if(typeof r!="string"){if(eh){var s=B1(r);s&&s!==eh&&mg(t,s,o)}var l=z1(r);Jp&&(l=l.concat(Jp(r)));for(var d=Zp(t),f=Zp(r),h=0;h<l.length;++h){var p=l[h];if(!(p in V1||o&&o[p]||f&&p in f||d&&p in d)){var g=F1(r,p);try{N1(t,p,g)}catch{}}}}return t}function ar(t){return typeof t=="function"}function sc(t){return typeof t=="object"&&"styledComponentId"in t}function rr(t,r){return t&&r?"".concat(t," ").concat(r):t||r||""}function Lu(t,r){if(t.length===0)return"";for(var o=t[0],s=1;s<t.length;s++)o+=t[s];return o}function Zi(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Mu(t,r,o){if(o===void 0&&(o=!1),!o&&!Zi(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)t[s]=Mu(t[s],r[s]);else if(Zi(r))for(var s in r)t[s]=Mu(t[s],r[s]);return t}function ac(t,r){Object.defineProperty(t,"toString",{value:r})}function lr(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var U1=function(){function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return t.prototype.indexOfGroup=function(r){for(var o=0,s=0;s<r;s++)o+=this.groupSizes[s];return o},t.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,d=l;r>=d;)if((d<<=1)<0)throw lr(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var f=l;f<d;f++)this.groupSizes[f]=0}for(var h=this.indexOfGroup(r+1),p=(f=0,o.length);f<p;f++)this.tag.insertRule(h,o[f])&&(this.groupSizes[r]++,h++)},t.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],s=this.indexOfGroup(r),l=s+o;this.groupSizes[r]=0;for(var d=s;d<l;d++)this.tag.deleteRule(s)}},t.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var s=this.groupSizes[r],l=this.indexOfGroup(r),d=l+s,f=l;f<d;f++)o+="".concat(this.tag.getRule(f)).concat(oc);return o},t}(),Rs=new Map,$s=new Map,Ls=1,Ss=function(t){if(Rs.has(t))return Rs.get(t);for(;$s.has(Ls);)Ls++;var r=Ls++;return Rs.set(t,r),$s.set(r,t),r},W1=function(t,r){Ls=r+1,Rs.set(t,r),$s.set(r,t)},H1="style[".concat(Hr,"][").concat(sg,'="').concat(Js,'"]'),K1=new RegExp("^".concat(Hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),G1=function(t,r,o){for(var s,l=o.split(","),d=0,f=l.length;d<f;d++)(s=l[d])&&t.registerName(r,s)},Y1=function(t,r){for(var o,s=((o=r.textContent)!==null&&o!==void 0?o:"").split(oc),l=[],d=0,f=s.length;d<f;d++){var h=s[d].trim();if(h){var p=h.match(K1);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(W1(y,g),G1(t,y,p[3]),t.getTag().insertRules(g,l)),l.length=0}else l.push(h)}}},th=function(t){for(var r=document.querySelectorAll(H1),o=0,s=r.length;o<s;o++){var l=r[o];l&&l.getAttribute(Hr)!==og&&(Y1(t,l),l.parentNode&&l.parentNode.removeChild(l))}};function Q1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gg=function(t){var r=document.head,o=t||r,s=document.createElement("style"),l=function(h){var p=Array.from(h.querySelectorAll("style[".concat(Hr,"]")));return p[p.length-1]}(o),d=l!==void 0?l.nextSibling:null;s.setAttribute(Hr,og),s.setAttribute(sg,Js);var f=Q1();return f&&s.setAttribute("nonce",f),o.insertBefore(s,d),s},X1=function(){function t(r){this.element=gg(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,l=0,d=s.length;l<d;l++){var f=s[l];if(f.ownerNode===o)return f}throw lr(17)}(this.element),this.length=0}return t.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},t}(),q1=function(){function t(r){this.element=gg(r),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),Z1=function(){function t(r){this.rules=[],this.length=0}return t.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},t.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),nh=Vs,J1={isServer:!Vs,useCSSOMInjection:!j1},Ns=function(){function t(r,o,s){r===void 0&&(r=Kr),o===void 0&&(o={});var l=this;this.options=nt(nt({},J1),r),this.gs=o,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Vs&&nh&&(nh=!1,th(this)),ac(this,function(){return function(d){for(var f=d.getTag(),h=f.length,p="",g=function(v){var x=function(D){return $s.get(D)}(v);if(x===void 0)return"continue";var T=d.names.get(x),j=f.getGroup(v);if(T===void 0||!T.size||j.length===0)return"continue";var b="".concat(Hr,".g").concat(v,'[id="').concat(x,'"]'),_="";T!==void 0&&T.forEach(function(D){D.length>0&&(_+="".concat(D,","))}),p+="".concat(j).concat(b,'{content:"').concat(_,'"}').concat(oc)},y=0;y<h;y++)g(y);return p}(l)})}return t.registerId=function(r){return Ss(r)},t.prototype.rehydrate=function(){!this.server&&Vs&&th(this)},t.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new t(nt(nt({},this.options),r),this.gs,o&&this.names||void 0)},t.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var s=o.useCSSOMInjection,l=o.target;return o.isServer?new Z1(l):s?new X1(l):new q1(l)}(this.options),new U1(r)));var r},t.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},t.prototype.registerName=function(r,o){if(Ss(r),this.names.has(r))this.names.get(r).add(o);else{var s=new Set;s.add(o),this.names.set(r,s)}},t.prototype.insertRules=function(r,o,s){this.registerName(r,o),this.getTag().insertRules(Ss(r),s)},t.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.prototype.clearRules=function(r){this.getTag().clearGroup(Ss(r)),this.clearNames(r)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ex=/&/g,tx=/^\s*\/\/.*$/gm;function yg(t,r){return t.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=yg(o.children,r)),o})}function nx(t){var r,o,s,l=Kr,d=l.options,f=d===void 0?Kr:d,h=l.plugins,p=h===void 0?ea:h,g=function(x,T,j){return j.startsWith(o)&&j.endsWith(o)&&j.replaceAll(o,"").length>0?".".concat(r):x},y=p.slice();y.push(function(x){x.type===Qs&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(ex,o).replace(s,g))}),f.prefix&&y.push(E1),y.push(P1);var v=function(x,T,j,b){T===void 0&&(T=""),j===void 0&&(j=""),b===void 0&&(b="&"),r=b,o=T,s=new RegExp("\\".concat(o,"\\b"),"g");var _=x.replace(tx,""),D=k1(j||T?"".concat(j," ").concat(T," { ").concat(_," }"):_);f.namespace&&(D=yg(D,f.namespace));var O=[];return Os(D,T1(y.concat(b1(function(V){return O.push(V)})))),O};return v.hash=p.length?p.reduce(function(x,T){return T.name||lr(15),Vr(x,T.name)},ug).toString():"",v}var rx=new Ns,Du=nx(),vg=ge.createContext({shouldForwardProp:void 0,styleSheet:rx,stylis:Du});vg.Consumer;ge.createContext(void 0);function _u(){return G.useContext(vg)}var ix=function(){function t(r,o){var s=this;this.inject=function(l,d){d===void 0&&(d=Du);var f=s.name+d.hash;l.hasNameForId(s.id,f)||l.insertRules(s.id,f,d(s.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,ac(this,function(){throw lr(12,String(s.name))})}return t.prototype.getName=function(r){return r===void 0&&(r=Du),this.name+r.hash},t}(),ox=function(t){return t>="A"&&t<="Z"};function rh(t){for(var r="",o=0;o<t.length;o++){var s=t[o];if(o===1&&s==="-"&&t[0]==="-")return t;ox(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var xg=function(t){return t==null||t===!1||t===""},wg=function(t){var r,o,s=[];for(var l in t){var d=t[l];t.hasOwnProperty(l)&&!xg(d)&&(Array.isArray(d)&&d.isCss||ar(d)?s.push("".concat(rh(l),":"),d,";"):Zi(d)?s.push.apply(s,qi(qi(["".concat(l," {")],wg(d),!1),["}"],!1)):s.push("".concat(rh(l),": ").concat((r=l,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in A1||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function On(t,r,o,s){if(xg(t))return[];if(sc(t))return[".".concat(t.styledComponentId)];if(ar(t)){if(!ar(d=t)||d.prototype&&d.prototype.isReactComponent||!r)return[t];var l=t(r);return On(l,r,o,s)}var d;return t instanceof ix?o?(t.inject(o,s),[t.getName(s)]):[t]:Zi(t)?wg(t):Array.isArray(t)?Array.prototype.concat.apply(ea,t.map(function(f){return On(f,r,o,s)})):[t.toString()]}function Sg(t){for(var r=0;r<t.length;r+=1){var o=t[r];if(ar(o)&&!sc(o))return!1}return!0}var sx=cg(Js),ax=function(){function t(r,o,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Sg(r),this.componentId=o,this.baseHash=Vr(sx,o),this.baseStyle=s,Ns.registerId(o)}return t.prototype.generateAndInjectStyles=function(r,o,s){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))l=rr(l,this.staticRulesId);else{var d=Lu(On(this.rules,r,o,s)),f=Ru(Vr(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,f)){var h=s(d,".".concat(f),void 0,this.componentId);o.insertRules(this.componentId,f,h)}l=rr(l,f),this.staticRulesId=f}else{for(var p=Vr(this.baseHash,s.hash),g="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")g+=v;else if(v){var x=Lu(On(v,r,o,s));p=Vr(p,x+y),g+=x}}if(g){var T=Ru(p>>>0);o.hasNameForId(this.componentId,T)||o.insertRules(this.componentId,T,s(g,".".concat(T),void 0,this.componentId)),l=rr(l,T)}}return l},t}(),Ji=ge.createContext(void 0);Ji.Consumer;function lx(t){var r=ge.useContext(Ji),o=G.useMemo(function(){return function(s,l){if(!s)throw lr(14);if(ar(s)){var d=s(l);return d}if(Array.isArray(s)||typeof s!="object")throw lr(8);return l?nt(nt({},l),s):s}(t.theme,r)},[t.theme,r]);return t.children?ge.createElement(Ji.Provider,{value:o},t.children):null}var lu={};function ux(t,r,o){var s=sc(t),l=t,d=!au(t),f=r.attrs,h=f===void 0?ea:f,p=r.componentId,g=p===void 0?function(H,F){var U=typeof H!="string"?"sc":Xp(H);lu[U]=(lu[U]||0)+1;var K="".concat(U,"-").concat(dg(Js+U+lu[U]));return F?"".concat(F,"-").concat(K):K}(r.displayName,r.parentComponentId):p,y=r.displayName,v=y===void 0?function(H){return au(H)?"styled.".concat(H):"Styled(".concat(_1(H),")")}(t):y,x=r.displayName&&r.componentId?"".concat(Xp(r.displayName),"-").concat(r.componentId):r.componentId||g,T=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h,j=r.shouldForwardProp;if(s&&l.shouldForwardProp){var b=l.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;j=function(H,F){return b(H,F)&&_(H,F)}}else j=b}var D=new ax(o,x,s?l.componentStyle:void 0);function O(H,F){return function(U,K,Z){var ve=U.attrs,ke=U.componentStyle,Be=U.defaultProps,Ye=U.foldedComponentIds,Te=U.styledComponentId,Ue=U.target,qe=ge.useContext(Ji),ye=_u(),de=U.shouldForwardProp||ye.shouldForwardProp,B=ag(K,qe,Be)||Kr,Q=function(ie,ae,re){for(var le,he=nt(nt({},ae),{className:void 0,theme:re}),Le=0;Le<ie.length;Le+=1){var Se=ar(le=ie[Le])?le(he):le;for(var st in Se)he[st]=st==="className"?rr(he[st],Se[st]):st==="style"?nt(nt({},he[st]),Se[st]):Se[st]}return ae.className&&(he.className=rr(he.className,ae.className)),he}(ve,K,B),R=Q.as||Ue,S={};for(var L in Q)Q[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&Q.theme===B||(L==="forwardedAs"?S.as=Q.forwardedAs:de&&!de(L,R)||(S[L]=Q[L]));var Y=function(ie,ae){var re=_u(),le=ie.generateAndInjectStyles(ae,re.styleSheet,re.stylis);return le}(ke,Q),ee=rr(Ye,Te);return Y&&(ee+=" "+Y),Q.className&&(ee+=" "+Q.className),S[au(R)&&!lg.has(R)?"class":"className"]=ee,Z&&(S.ref=Z),G.createElement(R,S)}(V,H,F)}O.displayName=v;var V=ge.forwardRef(O);return V.attrs=T,V.componentStyle=D,V.displayName=v,V.shouldForwardProp=j,V.foldedComponentIds=s?rr(l.foldedComponentIds,l.styledComponentId):"",V.styledComponentId=x,V.target=s?l.target:t,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(H){this._foldedDefaultProps=s?function(F){for(var U=[],K=1;K<arguments.length;K++)U[K-1]=arguments[K];for(var Z=0,ve=U;Z<ve.length;Z++)Mu(F,ve[Z],!0);return F}({},l.defaultProps,H):H}}),ac(V,function(){return".".concat(V.styledComponentId)}),d&&mg(V,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function ih(t,r){for(var o=[t[0]],s=0,l=r.length;s<l;s+=1)o.push(r[s],t[s+1]);return o}var oh=function(t){return Object.assign(t,{isCss:!0})};function kg(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(ar(t)||Zi(t))return oh(On(ih(ea,qi([t],r,!0))));var s=t;return r.length===0&&s.length===1&&typeof s[0]=="string"?On(s):oh(On(ih(s,r)))}function Iu(t,r,o){if(o===void 0&&(o=Kr),!r)throw lr(1,r);var s=function(l){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return t(r,o,kg.apply(void 0,qi([l],d,!1)))};return s.attrs=function(l){return Iu(t,r,nt(nt({},o),{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},s.withConfig=function(l){return Iu(t,r,nt(nt({},o),l))},s}var Cg=function(t){return Iu(ux,t)},I=Cg;lg.forEach(function(t){I[t]=Cg(t)});var cx=function(){function t(r,o){this.rules=r,this.componentId=o,this.isStatic=Sg(r),Ns.registerId(this.componentId+1)}return t.prototype.createStyles=function(r,o,s,l){var d=l(Lu(On(this.rules,o,s,l)),""),f=this.componentId+r;s.insertRules(f,f,d)},t.prototype.removeStyles=function(r,o){o.clearRules(this.componentId+r)},t.prototype.renderStyles=function(r,o,s,l){r>2&&Ns.registerId(this.componentId+r),this.removeStyles(r,s),this.createStyles(r,o,s,l)},t}();function dx(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var s=kg.apply(void 0,qi([t],r,!1)),l="sc-global-".concat(dg(JSON.stringify(s))),d=new cx(s,l),f=function(p){var g=_u(),y=ge.useContext(Ji),v=ge.useRef(g.styleSheet.allocateGSInstance(l)).current;return g.styleSheet.server&&h(v,p,g.styleSheet,y,g.stylis),ge.useLayoutEffect(function(){if(!g.styleSheet.server)return h(v,p,g.styleSheet,y,g.stylis),function(){return d.removeStyles(v,g.styleSheet)}},[v,p,g.styleSheet,y,g.stylis]),null};function h(p,g,y,v,x){if(d.isStatic)d.renderStyles(p,R1,y,x);else{var T=nt(nt({},g),{theme:ag(g,v,f.defaultProps)});d.renderStyles(p,T,y,x)}}return ge.memo(f)}var Pg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sh=ge.createContext&&ge.createContext(Pg),fx=["attr","size","title"];function px(t,r){if(t==null)return{};var o=hx(t,r),s,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(l=0;l<d.length;l++)s=d[l],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function hx(t,r){if(t==null)return{};var o={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(r.indexOf(s)>=0)continue;o[s]=t[s]}return o}function zs(){return zs=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},zs.apply(this,arguments)}function ah(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),o.push.apply(o,s)}return o}function Fs(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?ah(Object(o),!0).forEach(function(s){mx(t,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ah(Object(o)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))})}return t}function mx(t,r,o){return r=gx(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function gx(t){var r=yx(t,"string");return typeof r=="symbol"?r:r+""}function yx(t,r){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var s=o.call(t,r||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Tg(t){return t&&t.map((r,o)=>ge.createElement(r.tag,Fs({key:o},r.attr),Tg(r.child)))}function yt(t){return r=>ge.createElement(vx,zs({attr:Fs({},t.attr)},r),Tg(t.child))}function vx(t){var r=o=>{var{attr:s,size:l,title:d}=t,f=px(t,fx),h=l||o.size||"1em",p;return o.className&&(p=o.className),t.className&&(p=(p?p+" ":"")+t.className),ge.createElement("svg",zs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,f,{className:p,style:Fs(Fs({color:t.color||o.color},o.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&ge.createElement("title",null,d),t.children)};return sh!==void 0?ge.createElement(sh.Consumer,null,o=>r(o)):r(Pg)}function xx(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(t)}function wx(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(t)}function Sx(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(t)}function kx(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(t)}function Cx(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(t)}function Px(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(t)}function Tx(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function bx(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}function Ex(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(t)}function lh(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(t)}function bg(t){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}const lc=G.createContext({});function uc(t){const r=G.useRef(null);return r.current===null&&(r.current=t()),r.current}const ta=G.createContext(null),cc=G.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Ax extends G.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent){const s=o.offsetParent,l=s instanceof HTMLElement&&s.offsetWidth||0,d=this.props.sizeRef.current;d.height=o.offsetHeight||0,d.width=o.offsetWidth||0,d.top=o.offsetTop,d.left=o.offsetLeft,d.right=l-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function jx({children:t,isPresent:r,anchorX:o}){const s=G.useId(),l=G.useRef(null),d=G.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=G.useContext(cc);return G.useInsertionEffect(()=>{const{width:h,height:p,top:g,left:y,right:v}=d.current;if(r||!l.current||!h||!p)return;const x=o==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=s;const T=document.createElement("style");return f&&(T.nonce=f),document.head.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${x}px !important;
            top: ${g}px !important;
          }
        `),()=>{document.head.removeChild(T)}},[r]),C.jsx(Ax,{isPresent:r,childRef:l,sizeRef:d,children:G.cloneElement(t,{ref:l})})}const Rx=({children:t,initial:r,isPresent:o,onExitComplete:s,custom:l,presenceAffectsLayout:d,mode:f,anchorX:h})=>{const p=uc(Lx),g=G.useId(),y=G.useCallback(x=>{p.set(x,!0);for(const T of p.values())if(!T)return;s&&s()},[p,s]),v=G.useMemo(()=>({id:g,initial:r,isPresent:o,custom:l,onExitComplete:y,register:x=>(p.set(x,!1),()=>p.delete(x))}),d?[Math.random(),y]:[o,y]);return G.useMemo(()=>{p.forEach((x,T)=>p.set(T,!1))},[o]),G.useEffect(()=>{!o&&!p.size&&s&&s()},[o]),f==="popLayout"&&(t=C.jsx(jx,{isPresent:o,anchorX:h,children:t})),C.jsx(ta.Provider,{value:v,children:t})};function Lx(){return new Map}function Eg(t=!0){const r=G.useContext(ta);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:l}=r,d=G.useId();G.useEffect(()=>{t&&l(d)},[t]);const f=G.useCallback(()=>t&&s&&s(d),[d,s,t]);return!o&&s?[!1,f]:[!0]}const ks=t=>t.key||"";function uh(t){const r=[];return G.Children.forEach(t,o=>{G.isValidElement(o)&&r.push(o)}),r}const dc=typeof window<"u",Ag=dc?G.useLayoutEffect:G.useEffect,fc=({children:t,custom:r,initial:o=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:d="sync",propagate:f=!1,anchorX:h="left"})=>{const[p,g]=Eg(f),y=G.useMemo(()=>uh(t),[t]),v=f&&!p?[]:y.map(ks),x=G.useRef(!0),T=G.useRef(y),j=uc(()=>new Map),[b,_]=G.useState(y),[D,O]=G.useState(y);Ag(()=>{x.current=!1,T.current=y;for(let F=0;F<D.length;F++){const U=ks(D[F]);v.includes(U)?j.delete(U):j.get(U)!==!0&&j.set(U,!1)}},[D,v.length,v.join("-")]);const V=[];if(y!==b){let F=[...y];for(let U=0;U<D.length;U++){const K=D[U],Z=ks(K);v.includes(Z)||(F.splice(U,0,K),V.push(K))}d==="wait"&&V.length&&(F=V),O(uh(F)),_(y);return}const{forceRender:H}=G.useContext(lc);return C.jsx(C.Fragment,{children:D.map(F=>{const U=ks(F),K=f&&!p?!1:y===D||v.includes(U),Z=()=>{if(j.has(U))j.set(U,!0);else return;let ve=!0;j.forEach(ke=>{ke||(ve=!1)}),ve&&(H==null||H(),O(T.current),f&&(g==null||g()),s&&s())};return C.jsx(Rx,{isPresent:K,initial:!x.current||o?void 0:!1,custom:K?void 0:r,presenceAffectsLayout:l,mode:d,onExitComplete:K?void 0:Z,anchorX:h,children:F},U)})})},jt=t=>t;let Ou=jt;function pc(t){let r;return()=>(r===void 0&&(r=t()),r)}const Gr=(t,r,o)=>{const s=r-t;return s===0?1:(o-t)/s},fn=t=>t*1e3,pn=t=>t/1e3,Mx={skipAnimations:!1,useManualTiming:!1};function Dx(t){let r=new Set,o=new Set,s=!1,l=!1;const d=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function h(g){d.has(g)&&(p.schedule(g),t()),g(f)}const p={schedule:(g,y=!1,v=!1)=>{const T=v&&s?r:o;return y&&d.add(g),T.has(g)||T.add(g),g},cancel:g=>{o.delete(g),d.delete(g)},process:g=>{if(f=g,s){l=!0;return}s=!0,[r,o]=[o,r],r.forEach(h),r.clear(),s=!1,l&&(l=!1,p.process(g))}};return p}const Cs=["read","resolveKeyframes","update","preRender","render","postRender"],_x=40;function jg(t,r){let o=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},d=()=>o=!0,f=Cs.reduce((D,O)=>(D[O]=Dx(d),D),{}),{read:h,resolveKeyframes:p,update:g,preRender:y,render:v,postRender:x}=f,T=()=>{const D=performance.now();o=!1,l.delta=s?1e3/60:Math.max(Math.min(D-l.timestamp,_x),1),l.timestamp=D,l.isProcessing=!0,h.process(l),p.process(l),g.process(l),y.process(l),v.process(l),x.process(l),l.isProcessing=!1,o&&r&&(s=!1,t(T))},j=()=>{o=!0,s=!0,l.isProcessing||t(T)};return{schedule:Cs.reduce((D,O)=>{const V=f[O];return D[O]=(H,F=!1,U=!1)=>(o||j(),V.schedule(H,F,U)),D},{}),cancel:D=>{for(let O=0;O<Cs.length;O++)f[Cs[O]].cancel(D)},state:l,steps:f}}const{schedule:Re,cancel:Vn,state:ot,steps:uu}=jg(typeof requestAnimationFrame<"u"?requestAnimationFrame:jt,!0),Rg=G.createContext({strict:!1}),ch={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yr={};for(const t in ch)Yr[t]={isEnabled:r=>ch[t].some(o=>!!r[o])};function Ix(t){for(const r in t)Yr[r]={...Yr[r],...t[r]}}const Ox=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bs(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ox.has(t)}let Lg=t=>!Bs(t);function Vx(t){t&&(Lg=r=>r.startsWith("on")?!Bs(r):t(r))}try{Vx(require("@emotion/is-prop-valid").default)}catch{}function $x(t,r,o){const s={};for(const l in t)l==="values"&&typeof t.values=="object"||(Lg(l)||o===!0&&Bs(l)||!r&&!Bs(l)||t.draggable&&l.startsWith("onDrag"))&&(s[l]=t[l]);return s}function Nx(t){if(typeof Proxy>"u")return t;const r=new Map,o=(...s)=>t(...s);return new Proxy(o,{get:(s,l)=>l==="create"?t:(r.has(l)||r.set(l,t(l)),r.get(l))})}const na=G.createContext({});function eo(t){return typeof t=="string"||Array.isArray(t)}function ra(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const hc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],mc=["initial",...hc];function ia(t){return ra(t.animate)||mc.some(r=>eo(t[r]))}function Mg(t){return!!(ia(t)||t.variants)}function zx(t,r){if(ia(t)){const{initial:o,animate:s}=t;return{initial:o===!1||eo(o)?o:void 0,animate:eo(s)?s:void 0}}return t.inherit!==!1?r:{}}function Fx(t){const{initial:r,animate:o}=zx(t,G.useContext(na));return G.useMemo(()=>({initial:r,animate:o}),[dh(r),dh(o)])}function dh(t){return Array.isArray(t)?t.join(" "):t}const Bx=Symbol.for("motionComponentSymbol");function $r(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Ux(t,r,o){return G.useCallback(s=>{s&&t.onMount&&t.onMount(s),r&&(s?r.mount(s):r.unmount()),o&&(typeof o=="function"?o(s):$r(o)&&(o.current=s))},[r])}const gc=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Wx="framerAppearId",Dg="data-"+gc(Wx),{schedule:yc,cancel:O5}=jg(queueMicrotask,!1),_g=G.createContext({});function Hx(t,r,o,s,l){var d,f;const{visualElement:h}=G.useContext(na),p=G.useContext(Rg),g=G.useContext(ta),y=G.useContext(cc).reducedMotion,v=G.useRef(null);s=s||p.renderer,!v.current&&s&&(v.current=s(t,{visualState:r,parent:h,props:o,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:y}));const x=v.current,T=G.useContext(_g);x&&!x.projection&&l&&(x.type==="html"||x.type==="svg")&&Kx(v.current,o,l,T);const j=G.useRef(!1);G.useInsertionEffect(()=>{x&&j.current&&x.update(o,g)});const b=o[Dg],_=G.useRef(!!b&&!(!((d=window.MotionHandoffIsComplete)===null||d===void 0)&&d.call(window,b))&&((f=window.MotionHasOptimisedAnimation)===null||f===void 0?void 0:f.call(window,b)));return Ag(()=>{x&&(j.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),yc.render(x.render),_.current&&x.animationState&&x.animationState.animateChanges())}),G.useEffect(()=>{x&&(!_.current&&x.animationState&&x.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{var D;(D=window.MotionHandoffMarkAsComplete)===null||D===void 0||D.call(window,b)}),_.current=!1))}),x}function Kx(t,r,o,s){const{layoutId:l,layout:d,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:g}=r;t.projection=new o(t.latestValues,r["data-framer-portal-id"]?void 0:Ig(t.parent)),t.projection.setOptions({layoutId:l,layout:d,alwaysMeasureLayout:!!f||h&&$r(h),visualElement:t,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:g})}function Ig(t){if(t)return t.options.allowProjection!==!1?t.projection:Ig(t.parent)}function Gx({preloadedFeatures:t,createVisualElement:r,useRender:o,useVisualState:s,Component:l}){var d,f;t&&Ix(t);function h(g,y){let v;const x={...G.useContext(cc),...g,layoutId:Yx(g)},{isStatic:T}=x,j=Fx(g),b=s(g,T);if(!T&&dc){Qx();const _=Xx(x);v=_.MeasureLayout,j.visualElement=Hx(l,b,x,r,_.ProjectionNode)}return C.jsxs(na.Provider,{value:j,children:[v&&j.visualElement?C.jsx(v,{visualElement:j.visualElement,...x}):null,o(l,g,Ux(b,j.visualElement,y),b,T,j.visualElement)]})}h.displayName=`motion.${typeof l=="string"?l:`create(${(f=(d=l.displayName)!==null&&d!==void 0?d:l.name)!==null&&f!==void 0?f:""})`}`;const p=G.forwardRef(h);return p[Bx]=l,p}function Yx({layoutId:t}){const r=G.useContext(lc).id;return r&&t!==void 0?r+"-"+t:t}function Qx(t,r){G.useContext(Rg).strict}function Xx(t){const{drag:r,layout:o}=Yr;if(!r&&!o)return{};const s={...r,...o};return{MeasureLayout:r!=null&&r.isEnabled(t)||o!=null&&o.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const qx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vc(t){return typeof t!="string"||t.includes("-")?!1:!!(qx.indexOf(t)>-1||/[A-Z]/u.test(t))}function fh(t){const r=[{},{}];return t==null||t.values.forEach((o,s)=>{r[0][s]=o.get(),r[1][s]=o.getVelocity()}),r}function xc(t,r,o,s){if(typeof r=="function"){const[l,d]=fh(s);r=r(o!==void 0?o:t.custom,l,d)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[l,d]=fh(s);r=r(o!==void 0?o:t.custom,l,d)}return r}const Vu=t=>Array.isArray(t),Zx=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Jx=t=>Vu(t)?t[t.length-1]||0:t,ft=t=>!!(t&&t.getVelocity);function Ms(t){const r=ft(t)?t.get():t;return Zx(r)?r.toValue():r}function ew({scrapeMotionValuesFromProps:t,createRenderState:r,onUpdate:o},s,l,d){const f={latestValues:tw(s,l,d,t),renderState:r()};return o&&(f.onMount=h=>o({props:s,current:h,...f}),f.onUpdate=h=>o(h)),f}const Og=t=>(r,o)=>{const s=G.useContext(na),l=G.useContext(ta),d=()=>ew(t,r,s,l);return o?d():uc(d)};function tw(t,r,o,s){const l={},d=s(t,{});for(const x in d)l[x]=Ms(d[x]);let{initial:f,animate:h}=t;const p=ia(t),g=Mg(t);r&&g&&!p&&t.inherit!==!1&&(f===void 0&&(f=r.initial),h===void 0&&(h=r.animate));let y=o?o.initial===!1:!1;y=y||f===!1;const v=y?h:f;if(v&&typeof v!="boolean"&&!ra(v)){const x=Array.isArray(v)?v:[v];for(let T=0;T<x.length;T++){const j=xc(t,x[T]);if(j){const{transitionEnd:b,transition:_,...D}=j;for(const O in D){let V=D[O];if(Array.isArray(V)){const H=y?V.length-1:0;V=V[H]}V!==null&&(l[O]=V)}for(const O in b)l[O]=b[O]}}}return l}const qr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ur=new Set(qr),Vg=t=>r=>typeof r=="string"&&r.startsWith(t),wc=Vg("--"),nw=Vg("var(--"),Sc=t=>nw(t)?rw.test(t.split("/*")[0].trim()):!1,rw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$g=(t,r)=>r&&typeof t=="number"?r.transform(t):t,hn=(t,r,o)=>o>r?r:o<t?t:o,Zr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},to={...Zr,transform:t=>hn(0,1,t)},Ps={...Zr,default:1},so=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),In=so("deg"),en=so("%"),ue=so("px"),iw=so("vh"),ow=so("vw"),ph={...en,parse:t=>en.parse(t)/100,transform:t=>en.transform(t*100)},sw={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,radius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,backgroundPositionX:ue,backgroundPositionY:ue},aw={rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:Ps,scaleX:Ps,scaleY:Ps,scaleZ:Ps,skew:In,skewX:In,skewY:In,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:to,originX:ph,originY:ph,originZ:ue},hh={...Zr,transform:Math.round},kc={...sw,...aw,zIndex:hh,size:ue,fillOpacity:to,strokeOpacity:to,numOctaves:hh},lw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},uw=qr.length;function cw(t,r,o){let s="",l=!0;for(let d=0;d<uw;d++){const f=qr[d],h=t[f];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(f.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||o){const g=$g(h,kc[f]);if(!p){l=!1;const y=lw[f]||f;s+=`${y}(${g}) `}o&&(r[f]=g)}}return s=s.trim(),o?s=o(r,l?"":s):l&&(s="none"),s}function Cc(t,r,o){const{style:s,vars:l,transformOrigin:d}=t;let f=!1,h=!1;for(const p in r){const g=r[p];if(ur.has(p)){f=!0;continue}else if(wc(p)){l[p]=g;continue}else{const y=$g(g,kc[p]);p.startsWith("origin")?(h=!0,d[p]=y):s[p]=y}}if(r.transform||(f||o?s.transform=cw(r,t.transform,o):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=d;s.transformOrigin=`${p} ${g} ${y}`}}const dw={offset:"stroke-dashoffset",array:"stroke-dasharray"},fw={offset:"strokeDashoffset",array:"strokeDasharray"};function pw(t,r,o=1,s=0,l=!0){t.pathLength=1;const d=l?dw:fw;t[d.offset]=ue.transform(-s);const f=ue.transform(r),h=ue.transform(o);t[d.array]=`${f} ${h}`}function mh(t,r,o){return typeof t=="string"?t:ue.transform(r+o*t)}function hw(t,r,o){const s=mh(r,t.x,t.width),l=mh(o,t.y,t.height);return`${s} ${l}`}function Pc(t,{attrX:r,attrY:o,attrScale:s,originX:l,originY:d,pathLength:f,pathSpacing:h=1,pathOffset:p=0,...g},y,v){if(Cc(t,g,v),y){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:T,dimensions:j}=t;x.transform&&(j&&(T.transform=x.transform),delete x.transform),j&&(l!==void 0||d!==void 0||T.transform)&&(T.transformOrigin=hw(j,l!==void 0?l:.5,d!==void 0?d:.5)),r!==void 0&&(x.x=r),o!==void 0&&(x.y=o),s!==void 0&&(x.scale=s),f!==void 0&&pw(x,f,h,p,!1)}const Tc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ng=()=>({...Tc(),attrs:{}}),bc=t=>typeof t=="string"&&t.toLowerCase()==="svg";function zg(t,{style:r,vars:o},s,l){Object.assign(t.style,r,l&&l.getProjectionStyles(s));for(const d in o)t.style.setProperty(d,o[d])}const Fg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bg(t,r,o,s){zg(t,r,void 0,s);for(const l in r.attrs)t.setAttribute(Fg.has(l)?l:gc(l),r.attrs[l])}const no={};function mw(t){for(const r in t)no[r]=t[r],wc(r)&&(no[r].isCSSVariable=!0)}function Ug(t,{layout:r,layoutId:o}){return ur.has(t)||t.startsWith("origin")||(r||o!==void 0)&&(!!no[t]||t==="opacity")}function Ec(t,r,o){var s;const{style:l}=t,d={};for(const f in l)(ft(l[f])||r.style&&ft(r.style[f])||Ug(f,t)||((s=o==null?void 0:o.getValue(f))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(d[f]=l[f]);return d}function Wg(t,r,o){const s=Ec(t,r,o);for(const l in t)if(ft(t[l])||ft(r[l])){const d=qr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[d]=t[l]}return s}function gw(t,r){try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}const gh=["x","y","width","height","cx","cy","r"],yw={useVisualState:Og({scrapeMotionValuesFromProps:Wg,createRenderState:Ng,onUpdate:({props:t,prevProps:r,current:o,renderState:s,latestValues:l})=>{if(!o)return;let d=!!t.drag;if(!d){for(const h in l)if(ur.has(h)){d=!0;break}}if(!d)return;let f=!r;if(r)for(let h=0;h<gh.length;h++){const p=gh[h];t[p]!==r[p]&&(f=!0)}f&&Re.read(()=>{gw(o,s),Re.render(()=>{Pc(s,l,bc(o.tagName),t.transformTemplate),Bg(o,s)})})}})},vw={useVisualState:Og({scrapeMotionValuesFromProps:Ec,createRenderState:Tc})};function Hg(t,r,o){for(const s in r)!ft(r[s])&&!Ug(s,o)&&(t[s]=r[s])}function xw({transformTemplate:t},r){return G.useMemo(()=>{const o=Tc();return Cc(o,r,t),Object.assign({},o.vars,o.style)},[r])}function ww(t,r){const o=t.style||{},s={};return Hg(s,o,t),Object.assign(s,xw(t,r)),s}function Sw(t,r){const o={},s=ww(t,r);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=s,o}function kw(t,r,o,s){const l=G.useMemo(()=>{const d=Ng();return Pc(d,r,bc(s),t.transformTemplate),{...d.attrs,style:{...d.style}}},[r]);if(t.style){const d={};Hg(d,t.style,t),l.style={...d,...l.style}}return l}function Cw(t=!1){return(o,s,l,{latestValues:d},f)=>{const p=(vc(o)?kw:Sw)(s,d,f,o),g=$x(s,typeof o=="string",t),y=o!==G.Fragment?{...g,...p,ref:l}:{},{children:v}=s,x=G.useMemo(()=>ft(v)?v.get():v,[v]);return G.createElement(o,{...y,children:x})}}function Pw(t,r){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...vc(s)?yw:vw,preloadedFeatures:t,useRender:Cw(l),createVisualElement:r,Component:s};return Gx(f)}}function Kg(t,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==t.length)return!1;for(let s=0;s<o;s++)if(r[s]!==t[s])return!1;return!0}function oa(t,r,o){const s=t.getProps();return xc(s,r,o!==void 0?o:s.custom,t)}const Tw=pc(()=>window.ScrollTimeline!==void 0);class bw{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>"finished"in r?r.finished:r))}getAll(r){return this.animations[0][r]}setAll(r,o){for(let s=0;s<this.animations.length;s++)this.animations[s][r]=o}attachTimeline(r,o){const s=this.animations.map(l=>{if(Tw()&&l.attachTimeline)return l.attachTimeline(r);if(typeof o=="function")return o(l)});return()=>{s.forEach((l,d)=>{l&&l(),this.animations[d].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get startTime(){return this.getAll("startTime")}get duration(){let r=0;for(let o=0;o<this.animations.length;o++)r=Math.max(r,this.animations[o].duration);return r}runAll(r){this.animations.forEach(o=>o[r]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Ew extends bw{then(r,o){return Promise.all(this.animations).then(r).catch(o)}}function Ac(t,r){return t?t[r]||t.default||t:void 0}const $u=2e4;function Gg(t){let r=0;const o=50;let s=t.next(r);for(;!s.done&&r<$u;)r+=o,s=t.next(r);return r>=$u?1/0:r}function jc(t){return typeof t=="function"}function yh(t,r){t.timeline=r,t.onfinish=null}const Rc=t=>Array.isArray(t)&&typeof t[0]=="number",Aw={linearEasing:void 0};function jw(t,r){const o=pc(t);return()=>{var s;return(s=Aw[r])!==null&&s!==void 0?s:o()}}const Us=jw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yg=(t,r,o=10)=>{let s="";const l=Math.max(Math.round(r/o),2);for(let d=0;d<l;d++)s+=t(Gr(0,l-1,d))+", ";return`linear(${s.substring(0,s.length-2)})`};function Qg(t){return!!(typeof t=="function"&&Us()||!t||typeof t=="string"&&(t in Nu||Us())||Rc(t)||Array.isArray(t)&&t.every(Qg))}const Ui=([t,r,o,s])=>`cubic-bezier(${t}, ${r}, ${o}, ${s})`,Nu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ui([0,.65,.55,1]),circOut:Ui([.55,0,1,.45]),backIn:Ui([.31,.01,.66,-.59]),backOut:Ui([.33,1.53,.69,.99])};function Xg(t,r){if(t)return typeof t=="function"&&Us()?Yg(t,r):Rc(t)?Ui(t):Array.isArray(t)?t.map(o=>Xg(o,r)||Nu.easeOut):Nu[t]}const Kt={x:!1,y:!1};function qg(){return Kt.x||Kt.y}function Rw(t,r,o){var s;if(t instanceof Element)return[t];if(typeof t=="string"){let l=document;const d=(s=void 0)!==null&&s!==void 0?s:l.querySelectorAll(t);return d?Array.from(d):[]}return Array.from(t)}function Zg(t,r){const o=Rw(t),s=new AbortController,l={passive:!0,...r,signal:s.signal};return[o,l,()=>s.abort()]}function vh(t){return!(t.pointerType==="touch"||qg())}function Lw(t,r,o={}){const[s,l,d]=Zg(t,o),f=h=>{if(!vh(h))return;const{target:p}=h,g=r(p,h);if(typeof g!="function"||!p)return;const y=v=>{vh(v)&&(g(v),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,l)};return s.forEach(h=>{h.addEventListener("pointerenter",f,l)}),d}const Jg=(t,r)=>r?t===r?!0:Jg(t,r.parentElement):!1,Lc=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Mw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Dw(t){return Mw.has(t.tagName)||t.tabIndex!==-1}const Wi=new WeakSet;function xh(t){return r=>{r.key==="Enter"&&t(r)}}function cu(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const _w=(t,r)=>{const o=t.currentTarget;if(!o)return;const s=xh(()=>{if(Wi.has(o))return;cu(o,"down");const l=xh(()=>{cu(o,"up")}),d=()=>cu(o,"cancel");o.addEventListener("keyup",l,r),o.addEventListener("blur",d,r)});o.addEventListener("keydown",s,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),r)};function wh(t){return Lc(t)&&!qg()}function Iw(t,r,o={}){const[s,l,d]=Zg(t,o),f=h=>{const p=h.currentTarget;if(!wh(h)||Wi.has(p))return;Wi.add(p);const g=r(p,h),y=(T,j)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),!(!wh(T)||!Wi.has(p))&&(Wi.delete(p),typeof g=="function"&&g(T,{success:j}))},v=T=>{y(T,o.useGlobalTarget||Jg(p,T.target))},x=T=>{y(T,!1)};window.addEventListener("pointerup",v,l),window.addEventListener("pointercancel",x,l)};return s.forEach(h=>{!Dw(h)&&h.getAttribute("tabindex")===null&&(h.tabIndex=0),(o.useGlobalTarget?window:h).addEventListener("pointerdown",f,l),h.addEventListener("focus",g=>_w(g,l),l)}),d}function Ow(t){return t==="x"||t==="y"?Kt[t]?null:(Kt[t]=!0,()=>{Kt[t]=!1}):Kt.x||Kt.y?null:(Kt.x=Kt.y=!0,()=>{Kt.x=Kt.y=!1})}const e0=new Set(["width","height","top","left","right","bottom",...qr]);let Ds;function Vw(){Ds=void 0}const tn={now:()=>(Ds===void 0&&tn.set(ot.isProcessing||Mx.useManualTiming?ot.timestamp:performance.now()),Ds),set:t=>{Ds=t,queueMicrotask(Vw)}};function Mc(t,r){t.indexOf(r)===-1&&t.push(r)}function Dc(t,r){const o=t.indexOf(r);o>-1&&t.splice(o,1)}class _c{constructor(){this.subscriptions=[]}add(r){return Mc(this.subscriptions,r),()=>Dc(this.subscriptions,r)}notify(r,o,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,o,s);else for(let d=0;d<l;d++){const f=this.subscriptions[d];f&&f(r,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function t0(t,r){return r?t*(1e3/r):0}const Sh=30,$w=t=>!isNaN(parseFloat(t));class Nw{constructor(r,o={}){this.version="12.0.6",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{const d=tn.now();this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=tn.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=$w(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new _c);const s=this.events[r].add(o);return r==="change"?()=>{s(),Re.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r,o=!0){!o||!this.passiveEffect?this.updateAndNotify(r,o):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-s}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=tn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Sh)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Sh);return t0(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ro(t,r){return new Nw(t,r)}function zw(t,r,o){t.hasValue(r)?t.getValue(r).set(o):t.addValue(r,ro(o))}function Fw(t,r){const o=oa(t,r);let{transitionEnd:s={},transition:l={},...d}=o||{};d={...d,...s};for(const f in d){const h=Jx(d[f]);zw(t,f,h)}}function Bw(t){return!!(ft(t)&&t.add)}function zu(t,r){const o=t.getValue("willChange");if(Bw(o))return o.add(r)}function n0(t){return t.props[Dg]}const r0=(t,r,o)=>(((1-3*o+3*r)*t+(3*o-6*r))*t+3*r)*t,Uw=1e-7,Ww=12;function Hw(t,r,o,s,l){let d,f,h=0;do f=r+(o-r)/2,d=r0(f,s,l)-t,d>0?o=f:r=f;while(Math.abs(d)>Uw&&++h<Ww);return f}function ao(t,r,o,s){if(t===r&&o===s)return jt;const l=d=>Hw(d,0,1,t,o);return d=>d===0||d===1?d:r0(l(d),r,s)}const i0=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,o0=t=>r=>1-t(1-r),s0=ao(.33,1.53,.69,.99),Ic=o0(s0),a0=i0(Ic),l0=t=>(t*=2)<1?.5*Ic(t):.5*(2-Math.pow(2,-10*(t-1))),Oc=t=>1-Math.sin(Math.acos(t)),u0=o0(Oc),c0=i0(Oc),d0=t=>/^0[^.\s]+$/u.test(t);function Kw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||d0(t):!0}const Gi=t=>Math.round(t*1e5)/1e5,Vc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Gw(t){return t==null}const Yw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$c=(t,r)=>o=>!!(typeof o=="string"&&Yw.test(o)&&o.startsWith(t)||r&&!Gw(o)&&Object.prototype.hasOwnProperty.call(o,r)),f0=(t,r,o)=>s=>{if(typeof s!="string")return s;const[l,d,f,h]=s.match(Vc);return{[t]:parseFloat(l),[r]:parseFloat(d),[o]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},Qw=t=>hn(0,255,t),du={...Zr,transform:t=>Math.round(Qw(t))},ir={test:$c("rgb","red"),parse:f0("red","green","blue"),transform:({red:t,green:r,blue:o,alpha:s=1})=>"rgba("+du.transform(t)+", "+du.transform(r)+", "+du.transform(o)+", "+Gi(to.transform(s))+")"};function Xw(t){let r="",o="",s="",l="";return t.length>5?(r=t.substring(1,3),o=t.substring(3,5),s=t.substring(5,7),l=t.substring(7,9)):(r=t.substring(1,2),o=t.substring(2,3),s=t.substring(3,4),l=t.substring(4,5),r+=r,o+=o,s+=s,l+=l),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const Fu={test:$c("#"),parse:Xw,transform:ir.transform},Nr={test:$c("hsl","hue"),parse:f0("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:o,alpha:s=1})=>"hsla("+Math.round(t)+", "+en.transform(Gi(r))+", "+en.transform(Gi(o))+", "+Gi(to.transform(s))+")"},dt={test:t=>ir.test(t)||Fu.test(t)||Nr.test(t),parse:t=>ir.test(t)?ir.parse(t):Nr.test(t)?Nr.parse(t):Fu.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ir.transform(t):Nr.transform(t)},qw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Zw(t){var r,o;return isNaN(t)&&typeof t=="string"&&(((r=t.match(Vc))===null||r===void 0?void 0:r.length)||0)+(((o=t.match(qw))===null||o===void 0?void 0:o.length)||0)>0}const p0="number",h0="color",Jw="var",eS="var(",kh="${}",tS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function io(t){const r=t.toString(),o=[],s={color:[],number:[],var:[]},l=[];let d=0;const h=r.replace(tS,p=>(dt.test(p)?(s.color.push(d),l.push(h0),o.push(dt.parse(p))):p.startsWith(eS)?(s.var.push(d),l.push(Jw),o.push(p)):(s.number.push(d),l.push(p0),o.push(parseFloat(p))),++d,kh)).split(kh);return{values:o,split:h,indexes:s,types:l}}function m0(t){return io(t).values}function g0(t){const{split:r,types:o}=io(t),s=r.length;return l=>{let d="";for(let f=0;f<s;f++)if(d+=r[f],l[f]!==void 0){const h=o[f];h===p0?d+=Gi(l[f]):h===h0?d+=dt.transform(l[f]):d+=l[f]}return d}}const nS=t=>typeof t=="number"?0:t;function rS(t){const r=m0(t);return g0(t)(r.map(nS))}const $n={test:Zw,parse:m0,createTransformer:g0,getAnimatableNone:rS},iS=new Set(["brightness","contrast","saturate","opacity"]);function oS(t){const[r,o]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[s]=o.match(Vc)||[];if(!s)return t;const l=o.replace(s,"");let d=iS.has(r)?1:0;return s!==o&&(d*=100),r+"("+d+l+")"}const sS=/\b([a-z-]*)\(.*?\)/gu,Bu={...$n,getAnimatableNone:t=>{const r=t.match(sS);return r?r.map(oS).join(" "):t}},aS={...kc,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:Bu,WebkitFilter:Bu},Nc=t=>aS[t];function y0(t,r){let o=Nc(t);return o!==Bu&&(o=$n),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const lS=new Set(["auto","none","0"]);function uS(t,r,o){let s=0,l;for(;s<t.length&&!l;){const d=t[s];typeof d=="string"&&!lS.has(d)&&io(d).values.length&&(l=t[s]),s++}if(l&&o)for(const d of r)t[d]=y0(o,l)}const Ch=t=>t===Zr||t===ue,Ph=(t,r)=>parseFloat(t.split(", ")[r]),Th=(t,r)=>(o,{transform:s})=>{if(s==="none"||!s)return 0;const l=s.match(/^matrix3d\((.+)\)$/u);if(l)return Ph(l[1],r);{const d=s.match(/^matrix\((.+)\)$/u);return d?Ph(d[1],t):0}},cS=new Set(["x","y","z"]),dS=qr.filter(t=>!cS.has(t));function fS(t){const r=[];return dS.forEach(o=>{const s=t.getValue(o);s!==void 0&&(r.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),r}const Qr={width:({x:t},{paddingLeft:r="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),height:({y:t},{paddingTop:r="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:Th(4,13),y:Th(5,14)};Qr.translateX=Qr.x;Qr.translateY=Qr.y;const sr=new Set;let Uu=!1,Wu=!1;function v0(){if(Wu){const t=Array.from(sr).filter(s=>s.needsMeasurement),r=new Set(t.map(s=>s.element)),o=new Map;r.forEach(s=>{const l=fS(s);l.length&&(o.set(s,l),s.render())}),t.forEach(s=>s.measureInitialState()),r.forEach(s=>{s.render();const l=o.get(s);l&&l.forEach(([d,f])=>{var h;(h=s.getValue(d))===null||h===void 0||h.set(f)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Wu=!1,Uu=!1,sr.forEach(t=>t.complete()),sr.clear()}function x0(){sr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Wu=!0)})}function pS(){x0(),v0()}class zc{constructor(r,o,s,l,d,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=s,this.motionValue=l,this.element=d,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(sr.add(this),Uu||(Uu=!0,Re.read(x0),Re.resolveKeyframes(v0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:s,motionValue:l}=this;for(let d=0;d<r.length;d++)if(r[d]===null)if(d===0){const f=l==null?void 0:l.get(),h=r[r.length-1];if(f!==void 0)r[0]=f;else if(s&&o){const p=s.readValue(o,h);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=h),l&&f===void 0&&l.set(r[0])}else r[d]=r[d-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),sr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,sr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const w0=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),hS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function mS(t){const r=hS.exec(t);if(!r)return[,];const[,o,s,l]=r;return[`--${o??s}`,l]}function S0(t,r,o=1){const[s,l]=mS(t);if(!s)return;const d=window.getComputedStyle(r).getPropertyValue(s);if(d){const f=d.trim();return w0(f)?parseFloat(f):f}return Sc(l)?S0(l,r,o+1):l}const k0=t=>r=>r.test(t),gS={test:t=>t==="auto",parse:t=>t},C0=[Zr,ue,en,In,ow,iw,gS],bh=t=>C0.find(k0(t));class P0 extends zc{constructor(r,o,s,l,d){super(r,o,s,l,d,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let p=0;p<r.length;p++){let g=r[p];if(typeof g=="string"&&(g=g.trim(),Sc(g))){const y=S0(g,o.current);y!==void 0&&(r[p]=y),p===r.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!e0.has(s)||r.length!==2)return;const[l,d]=r,f=bh(l),h=bh(d);if(f!==h)if(Ch(f)&&Ch(h))for(let p=0;p<r.length;p++){const g=r[p];typeof g=="string"&&(r[p]=parseFloat(g))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,s=[];for(let l=0;l<r.length;l++)Kw(r[l])&&s.push(l);s.length&&uS(r,s,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:s}=this;if(!r||!r.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qr[s](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const l=o[o.length-1];l!==void 0&&r.getValue(s,l).jump(l,!1)}measureEndState(){var r;const{element:o,name:s,unresolvedKeyframes:l}=this;if(!o||!o.current)return;const d=o.getValue(s);d&&d.jump(this.measuredOrigin,!1);const f=l.length-1,h=l[f];l[f]=Qr[s](o.measureViewportBox(),window.getComputedStyle(o.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((r=this.removedTransforms)===null||r===void 0)&&r.length&&this.removedTransforms.forEach(([p,g])=>{o.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const Eh=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&($n.test(t)||t==="0")&&!t.startsWith("url("));function yS(t){const r=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==r)return!0}function vS(t,r,o,s){const l=t[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const d=t[t.length-1],f=Eh(l,r),h=Eh(d,r);return!f||!h?!1:yS(t)||(o==="spring"||jc(o))&&s}const xS=t=>t!==null;function sa(t,{repeat:r,repeatType:o="loop"},s){const l=t.filter(xS),d=r&&o!=="loop"&&r%2===1?0:l.length-1;return!d||s===void 0?l[d]:s}const wS=40;class T0{constructor({autoplay:r=!0,delay:o=0,type:s="keyframes",repeat:l=0,repeatDelay:d=0,repeatType:f="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=tn.now(),this.options={autoplay:r,delay:o,type:s,repeat:l,repeatDelay:d,repeatType:f,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>wS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&pS(),this._resolved}onKeyframesResolved(r,o){this.resolvedAt=tn.now(),this.hasAttemptedResolve=!0;const{name:s,type:l,velocity:d,delay:f,onComplete:h,onUpdate:p,isGenerator:g}=this.options;if(!g&&!vS(r,s,l,d))if(f)this.options.duration=0;else{p&&p(sa(r,this.options,o)),h&&h(),this.resolveFinishedPromise();return}const y=this.initPlayback(r,o);y!==!1&&(this._resolved={keyframes:r,finalKeyframe:o,...y},this.onPostResolved())}onPostResolved(){}then(r,o){return this.currentFinishedPromise.then(r,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(r=>{this.resolveFinishedPromise=r})}}const Ie=(t,r,o)=>t+(r-t)*o;function fu(t,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(r-t)*6*o:o<1/2?r:o<2/3?t+(r-t)*(2/3-o)*6:t}function SS({hue:t,saturation:r,lightness:o,alpha:s}){t/=360,r/=100,o/=100;let l=0,d=0,f=0;if(!r)l=d=f=o;else{const h=o<.5?o*(1+r):o+r-o*r,p=2*o-h;l=fu(p,h,t+1/3),d=fu(p,h,t),f=fu(p,h,t-1/3)}return{red:Math.round(l*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function Ws(t,r){return o=>o>0?r:t}const pu=(t,r,o)=>{const s=t*t,l=o*(r*r-s)+s;return l<0?0:Math.sqrt(l)},kS=[Fu,ir,Nr],CS=t=>kS.find(r=>r.test(t));function Ah(t){const r=CS(t);if(!r)return!1;let o=r.parse(t);return r===Nr&&(o=SS(o)),o}const jh=(t,r)=>{const o=Ah(t),s=Ah(r);if(!o||!s)return Ws(t,r);const l={...o};return d=>(l.red=pu(o.red,s.red,d),l.green=pu(o.green,s.green,d),l.blue=pu(o.blue,s.blue,d),l.alpha=Ie(o.alpha,s.alpha,d),ir.transform(l))},PS=(t,r)=>o=>r(t(o)),lo=(...t)=>t.reduce(PS),Hu=new Set(["none","hidden"]);function TS(t,r){return Hu.has(t)?o=>o<=0?t:r:o=>o>=1?r:t}function bS(t,r){return o=>Ie(t,r,o)}function Fc(t){return typeof t=="number"?bS:typeof t=="string"?Sc(t)?Ws:dt.test(t)?jh:jS:Array.isArray(t)?b0:typeof t=="object"?dt.test(t)?jh:ES:Ws}function b0(t,r){const o=[...t],s=o.length,l=t.map((d,f)=>Fc(d)(d,r[f]));return d=>{for(let f=0;f<s;f++)o[f]=l[f](d);return o}}function ES(t,r){const o={...t,...r},s={};for(const l in o)t[l]!==void 0&&r[l]!==void 0&&(s[l]=Fc(t[l])(t[l],r[l]));return l=>{for(const d in s)o[d]=s[d](l);return o}}function AS(t,r){var o;const s=[],l={color:0,var:0,number:0};for(let d=0;d<r.values.length;d++){const f=r.types[d],h=t.indexes[f][l[f]],p=(o=t.values[h])!==null&&o!==void 0?o:0;s[d]=p,l[f]++}return s}const jS=(t,r)=>{const o=$n.createTransformer(r),s=io(t),l=io(r);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?Hu.has(t)&&!l.values.length||Hu.has(r)&&!s.values.length?TS(t,r):lo(b0(AS(s,l),l.values),o):Ws(t,r)};function E0(t,r,o){return typeof t=="number"&&typeof r=="number"&&typeof o=="number"?Ie(t,r,o):Fc(t)(t,r)}const RS=5;function A0(t,r,o){const s=Math.max(r-RS,0);return t0(o-t(s),r-s)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Rh=.001;function LS({duration:t=Ve.duration,bounce:r=Ve.bounce,velocity:o=Ve.velocity,mass:s=Ve.mass}){let l,d,f=1-r;f=hn(Ve.minDamping,Ve.maxDamping,f),t=hn(Ve.minDuration,Ve.maxDuration,pn(t)),f<1?(l=g=>{const y=g*f,v=y*t,x=y-o,T=Ku(g,f),j=Math.exp(-v);return Rh-x/T*j},d=g=>{const v=g*f*t,x=v*o+o,T=Math.pow(f,2)*Math.pow(g,2)*t,j=Math.exp(-v),b=Ku(Math.pow(g,2),f);return(-l(g)+Rh>0?-1:1)*((x-T)*j)/b}):(l=g=>{const y=Math.exp(-g*t),v=(g-o)*t+1;return-.001+y*v},d=g=>{const y=Math.exp(-g*t),v=(o-g)*(t*t);return y*v});const h=5/t,p=DS(l,d,h);if(t=fn(t),isNaN(p))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:t};{const g=Math.pow(p,2)*s;return{stiffness:g,damping:f*2*Math.sqrt(s*g),duration:t}}}const MS=12;function DS(t,r,o){let s=o;for(let l=1;l<MS;l++)s=s-t(s)/r(s);return s}function Ku(t,r){return t*Math.sqrt(1-r*r)}const _S=["duration","bounce"],IS=["stiffness","damping","mass"];function Lh(t,r){return r.some(o=>t[o]!==void 0)}function OS(t){let r={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...t};if(!Lh(t,IS)&&Lh(t,_S))if(t.visualDuration){const o=t.visualDuration,s=2*Math.PI/(o*1.2),l=s*s,d=2*hn(.05,1,1-(t.bounce||0))*Math.sqrt(l);r={...r,mass:Ve.mass,stiffness:l,damping:d}}else{const o=LS(t);r={...r,...o,mass:Ve.mass},r.isResolvedFromDuration=!0}return r}function j0(t=Ve.visualDuration,r=Ve.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:s,restDelta:l}=o;const d=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],h={done:!1,value:d},{stiffness:p,damping:g,mass:y,duration:v,velocity:x,isResolvedFromDuration:T}=OS({...o,velocity:-pn(o.velocity||0)}),j=x||0,b=g/(2*Math.sqrt(p*y)),_=f-d,D=pn(Math.sqrt(p/y)),O=Math.abs(_)<5;s||(s=O?Ve.restSpeed.granular:Ve.restSpeed.default),l||(l=O?Ve.restDelta.granular:Ve.restDelta.default);let V;if(b<1){const F=Ku(D,b);V=U=>{const K=Math.exp(-b*D*U);return f-K*((j+b*D*_)/F*Math.sin(F*U)+_*Math.cos(F*U))}}else if(b===1)V=F=>f-Math.exp(-D*F)*(_+(j+D*_)*F);else{const F=D*Math.sqrt(b*b-1);V=U=>{const K=Math.exp(-b*D*U),Z=Math.min(F*U,300);return f-K*((j+b*D*_)*Math.sinh(Z)+F*_*Math.cosh(Z))/F}}const H={calculatedDuration:T&&v||null,next:F=>{const U=V(F);if(T)h.done=F>=v;else{let K=0;b<1&&(K=F===0?fn(j):A0(V,F,U));const Z=Math.abs(K)<=s,ve=Math.abs(f-U)<=l;h.done=Z&&ve}return h.value=h.done?f:U,h},toString:()=>{const F=Math.min(Gg(H),$u),U=Yg(K=>H.next(F*K).value,F,30);return F+"ms "+U}};return H}function Mh({keyframes:t,velocity:r=0,power:o=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:d=500,modifyTarget:f,min:h,max:p,restDelta:g=.5,restSpeed:y}){const v=t[0],x={done:!1,value:v},T=Z=>h!==void 0&&Z<h||p!==void 0&&Z>p,j=Z=>h===void 0?p:p===void 0||Math.abs(h-Z)<Math.abs(p-Z)?h:p;let b=o*r;const _=v+b,D=f===void 0?_:f(_);D!==_&&(b=D-v);const O=Z=>-b*Math.exp(-Z/s),V=Z=>D+O(Z),H=Z=>{const ve=O(Z),ke=V(Z);x.done=Math.abs(ve)<=g,x.value=x.done?D:ke};let F,U;const K=Z=>{T(x.value)&&(F=Z,U=j0({keyframes:[x.value,j(x.value)],velocity:A0(V,Z,x.value),damping:l,stiffness:d,restDelta:g,restSpeed:y}))};return K(0),{calculatedDuration:null,next:Z=>{let ve=!1;return!U&&F===void 0&&(ve=!0,H(Z),K(Z)),F!==void 0&&Z>=F?U.next(Z-F):(!ve&&H(Z),x)}}}const VS=ao(.42,0,1,1),$S=ao(0,0,.58,1),R0=ao(.42,0,.58,1),NS=t=>Array.isArray(t)&&typeof t[0]!="number",Dh={linear:jt,easeIn:VS,easeInOut:R0,easeOut:$S,circIn:Oc,circInOut:c0,circOut:u0,backIn:Ic,backInOut:a0,backOut:s0,anticipate:l0},_h=t=>{if(Rc(t)){Ou(t.length===4);const[r,o,s,l]=t;return ao(r,o,s,l)}else if(typeof t=="string")return Ou(Dh[t]!==void 0),Dh[t];return t};function zS(t,r,o){const s=[],l=o||E0,d=t.length-1;for(let f=0;f<d;f++){let h=l(t[f],t[f+1]);if(r){const p=Array.isArray(r)?r[f]||jt:r;h=lo(p,h)}s.push(h)}return s}function FS(t,r,{clamp:o=!0,ease:s,mixer:l}={}){const d=t.length;if(Ou(d===r.length),d===1)return()=>r[0];if(d===2&&r[0]===r[1])return()=>r[1];const f=t[0]===t[1];t[0]>t[d-1]&&(t=[...t].reverse(),r=[...r].reverse());const h=zS(r,s,l),p=h.length,g=y=>{if(f&&y<t[0])return r[0];let v=0;if(p>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const x=Gr(t[v],t[v+1],y);return h[v](x)};return o?y=>g(hn(t[0],t[d-1],y)):g}function BS(t,r){const o=t[t.length-1];for(let s=1;s<=r;s++){const l=Gr(0,r,s);t.push(Ie(o,1,l))}}function US(t){const r=[0];return BS(r,t.length-1),r}function WS(t,r){return t.map(o=>o*r)}function HS(t,r){return t.map(()=>r||R0).splice(0,t.length-1)}function Hs({duration:t=300,keyframes:r,times:o,ease:s="easeInOut"}){const l=NS(s)?s.map(_h):_h(s),d={done:!1,value:r[0]},f=WS(o&&o.length===r.length?o:US(r),t),h=FS(f,r,{ease:Array.isArray(l)?l:HS(r,l)});return{calculatedDuration:t,next:p=>(d.value=h(p),d.done=p>=t,d)}}const KS=t=>{const r=({timestamp:o})=>t(o);return{start:()=>Re.update(r,!0),stop:()=>Vn(r),now:()=>ot.isProcessing?ot.timestamp:tn.now()}},GS={decay:Mh,inertia:Mh,tween:Hs,keyframes:Hs,spring:j0},YS=t=>t/100;class Bc extends T0{constructor(r){super(r),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:o,motionValue:s,element:l,keyframes:d}=this.options,f=(l==null?void 0:l.KeyframeResolver)||zc,h=(p,g)=>this.onKeyframesResolved(p,g);this.resolver=new f(d,h,o,s,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(r){const{type:o="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:d,velocity:f=0}=this.options,h=jc(o)?o:GS[o]||Hs;let p,g;h!==Hs&&typeof r[0]!="number"&&(p=lo(YS,E0(r[0],r[1])),r=[0,100]);const y=h({...this.options,keyframes:r});d==="mirror"&&(g=h({...this.options,keyframes:[...r].reverse(),velocity:-f})),y.calculatedDuration===null&&(y.calculatedDuration=Gg(y));const{calculatedDuration:v}=y,x=v+l,T=x*(s+1)-l;return{generator:y,mirroredGenerator:g,mapPercentToKeyframes:p,calculatedDuration:v,resolvedDuration:x,totalDuration:T}}onPostResolved(){const{autoplay:r=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!r?this.pause():this.state=this.pendingPlayState}tick(r,o=!1){const{resolved:s}=this;if(!s){const{keyframes:Z}=this.options;return{done:!0,value:Z[Z.length-1]}}const{finalKeyframe:l,generator:d,mirroredGenerator:f,mapPercentToKeyframes:h,keyframes:p,calculatedDuration:g,totalDuration:y,resolvedDuration:v}=s;if(this.startTime===null)return d.next(0);const{delay:x,repeat:T,repeatType:j,repeatDelay:b,onUpdate:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-y/this.speed,this.startTime)),o?this.currentTime=r:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(r-this.startTime)*this.speed;const D=this.currentTime-x*(this.speed>=0?1:-1),O=this.speed>=0?D<0:D>y;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=y);let V=this.currentTime,H=d;if(T){const Z=Math.min(this.currentTime,y)/v;let ve=Math.floor(Z),ke=Z%1;!ke&&Z>=1&&(ke=1),ke===1&&ve--,ve=Math.min(ve,T+1),!!(ve%2)&&(j==="reverse"?(ke=1-ke,b&&(ke-=b/v)):j==="mirror"&&(H=f)),V=hn(0,1,ke)*v}const F=O?{done:!1,value:p[0]}:H.next(V);h&&(F.value=h(F.value));let{done:U}=F;!O&&g!==null&&(U=this.speed>=0?this.currentTime>=y:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&U);return K&&l!==void 0&&(F.value=sa(p,this.options,l)),_&&_(F.value),K&&this.finish(),F}get duration(){const{resolved:r}=this;return r?pn(r.calculatedDuration):0}get time(){return pn(this.currentTime)}set time(r){r=fn(r),this.currentTime=r,this.holdTime!==null||this.speed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.speed)}get speed(){return this.playbackSpeed}set speed(r){const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=pn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:r=KS,onPlay:o,startTime:s}=this.options;this.driver||(this.driver=r(d=>this.tick(d))),o&&o();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var r;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(r=this.currentTime)!==null&&r!==void 0?r:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:r}=this.options;r&&r()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}}const QS=new Set(["opacity","clipPath","filter","transform"]);function XS(t,r,o,{delay:s=0,duration:l=300,repeat:d=0,repeatType:f="loop",ease:h="easeInOut",times:p}={}){const g={[r]:o};p&&(g.offset=p);const y=Xg(h,l);return Array.isArray(y)&&(g.easing=y),t.animate(g,{delay:s,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"})}const qS=pc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ks=10,ZS=2e4;function JS(t){return jc(t.type)||t.type==="spring"||!Qg(t.ease)}function ek(t,r){const o=new Bc({...r,keyframes:t,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:t[0]};const l=[];let d=0;for(;!s.done&&d<ZS;)s=o.sample(d),l.push(s.value),d+=Ks;return{times:void 0,keyframes:l,duration:d-Ks,ease:"linear"}}const L0={anticipate:l0,backInOut:a0,circInOut:c0};function tk(t){return t in L0}class Ih extends T0{constructor(r){super(r);const{name:o,motionValue:s,element:l,keyframes:d}=this.options;this.resolver=new P0(d,(f,h)=>this.onKeyframesResolved(f,h),o,s,l),this.resolver.scheduleResolve()}initPlayback(r,o){let{duration:s=300,times:l,ease:d,type:f,motionValue:h,name:p,startTime:g}=this.options;if(!h.owner||!h.owner.current)return!1;if(typeof d=="string"&&Us()&&tk(d)&&(d=L0[d]),JS(this.options)){const{onComplete:v,onUpdate:x,motionValue:T,element:j,...b}=this.options,_=ek(r,b);r=_.keyframes,r.length===1&&(r[1]=r[0]),s=_.duration,l=_.times,d=_.ease,f="keyframes"}const y=XS(h.owner.current,p,r,{...this.options,duration:s,times:l,ease:d});return y.startTime=g??this.calcStartTime(),this.pendingTimeline?(yh(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:v}=this.options;h.set(sa(r,this.options,o)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:s,times:l,type:f,ease:d,keyframes:r}}get duration(){const{resolved:r}=this;if(!r)return 0;const{duration:o}=r;return pn(o)}get time(){const{resolved:r}=this;if(!r)return 0;const{animation:o}=r;return pn(o.currentTime||0)}set time(r){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.currentTime=fn(r)}get speed(){const{resolved:r}=this;if(!r)return 1;const{animation:o}=r;return o.playbackRate}set speed(r){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.playbackRate=r}get state(){const{resolved:r}=this;if(!r)return"idle";const{animation:o}=r;return o.playState}get startTime(){const{resolved:r}=this;if(!r)return null;const{animation:o}=r;return o.startTime}attachTimeline(r){if(!this._resolved)this.pendingTimeline=r;else{const{resolved:o}=this;if(!o)return jt;const{animation:s}=o;yh(s,r)}return jt}play(){if(this.isStopped)return;const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:r}=this;if(!r)return;const{animation:o,keyframes:s,duration:l,type:d,ease:f,times:h}=r;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:g,onUpdate:y,onComplete:v,element:x,...T}=this.options,j=new Bc({...T,keyframes:s,duration:l,type:d,ease:f,times:h,isGenerator:!0}),b=fn(this.time);g.setWithVelocity(j.sample(b-Ks).value,j.sample(b).value,Ks)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:r}=this;r&&r.animation.finish()}cancel(){const{resolved:r}=this;r&&r.animation.cancel()}static supports(r){const{motionValue:o,name:s,repeatDelay:l,repeatType:d,damping:f,type:h}=r;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=o.owner.getProps();return qS()&&s&&QS.has(s)&&!p&&!g&&!l&&d!=="mirror"&&f!==0&&h!=="inertia"}}const nk={type:"spring",stiffness:500,damping:25,restSpeed:10},rk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),ik={type:"keyframes",duration:.8},ok={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},sk=(t,{keyframes:r})=>r.length>2?ik:ur.has(t)?t.startsWith("scale")?rk(r[1]):nk:ok;function ak({when:t,delay:r,delayChildren:o,staggerChildren:s,staggerDirection:l,repeat:d,repeatType:f,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const Uc=(t,r,o,s={},l,d)=>f=>{const h=Ac(s,t)||{},p=h.delay||s.delay||0;let{elapsed:g=0}=s;g=g-fn(p);let y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...h,delay:-g,onUpdate:x=>{r.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:t,motionValue:r,element:d?void 0:l};ak(h)||(y={...y,...sk(t,y)}),y.duration&&(y.duration=fn(y.duration)),y.repeatDelay&&(y.repeatDelay=fn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),v&&!d&&r.get()!==void 0){const x=sa(y.keyframes,h);if(x!==void 0)return Re.update(()=>{y.onUpdate(x),y.onComplete()}),new Ew([])}return!d&&Ih.supports(y)?new Ih(y):new Bc(y)};function lk({protectedKeys:t,needsAnimating:r},o){const s=t.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,s}function M0(t,r,{delay:o=0,transitionOverride:s,type:l}={}){var d;let{transition:f=t.getDefaultTransition(),transitionEnd:h,...p}=r;s&&(f=s);const g=[],y=l&&t.animationState&&t.animationState.getState()[l];for(const v in p){const x=t.getValue(v,(d=t.latestValues[v])!==null&&d!==void 0?d:null),T=p[v];if(T===void 0||y&&lk(y,v))continue;const j={delay:o,...Ac(f||{},v)};let b=!1;if(window.MotionHandoffAnimation){const D=n0(t);if(D){const O=window.MotionHandoffAnimation(D,v,Re);O!==null&&(j.startTime=O,b=!0)}}zu(t,v),x.start(Uc(v,x,T,t.shouldReduceMotion&&e0.has(v)?{type:!1}:j,t,b));const _=x.animation;_&&g.push(_)}return h&&Promise.all(g).then(()=>{Re.update(()=>{h&&Fw(t,h)})}),g}function Gu(t,r,o={}){var s;const l=oa(t,r,o.type==="exit"?(s=t.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:d=t.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(d=o.transitionOverride);const f=l?()=>Promise.all(M0(t,l,o)):()=>Promise.resolve(),h=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=d;return uk(t,r,y+g,v,x,o)}:()=>Promise.resolve(),{when:p}=d;if(p){const[g,y]=p==="beforeChildren"?[f,h]:[h,f];return g().then(()=>y())}else return Promise.all([f(),h(o.delay)])}function uk(t,r,o=0,s=0,l=1,d){const f=[],h=(t.variantChildren.size-1)*s,p=l===1?(g=0)=>g*s:(g=0)=>h-g*s;return Array.from(t.variantChildren).sort(ck).forEach((g,y)=>{g.notify("AnimationStart",r),f.push(Gu(g,r,{...d,delay:o+p(y)}).then(()=>g.notify("AnimationComplete",r)))}),Promise.all(f)}function ck(t,r){return t.sortNodePosition(r)}function dk(t,r,o={}){t.notify("AnimationStart",r);let s;if(Array.isArray(r)){const l=r.map(d=>Gu(t,d,o));s=Promise.all(l)}else if(typeof r=="string")s=Gu(t,r,o);else{const l=typeof r=="function"?oa(t,r,o.custom):r;s=Promise.all(M0(t,l,o))}return s.then(()=>{t.notify("AnimationComplete",r)})}const fk=mc.length;function D0(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?D0(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const r={};for(let o=0;o<fk;o++){const s=mc[o],l=t.props[s];(eo(l)||l===!1)&&(r[s]=l)}return r}const pk=[...hc].reverse(),hk=hc.length;function mk(t){return r=>Promise.all(r.map(({animation:o,options:s})=>dk(t,o,s)))}function gk(t){let r=mk(t),o=Oh(),s=!0;const l=p=>(g,y)=>{var v;const x=oa(t,y,p==="exit"?(v=t.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(x){const{transition:T,transitionEnd:j,...b}=x;g={...g,...b,...j}}return g};function d(p){r=p(t)}function f(p){const{props:g}=t,y=D0(t.parent)||{},v=[],x=new Set;let T={},j=1/0;for(let _=0;_<hk;_++){const D=pk[_],O=o[D],V=g[D]!==void 0?g[D]:y[D],H=eo(V),F=D===p?O.isActive:null;F===!1&&(j=_);let U=V===y[D]&&V!==g[D]&&H;if(U&&s&&t.manuallyAnimateOnMount&&(U=!1),O.protectedKeys={...T},!O.isActive&&F===null||!V&&!O.prevProp||ra(V)||typeof V=="boolean")continue;const K=yk(O.prevProp,V);let Z=K||D===p&&O.isActive&&!U&&H||_>j&&H,ve=!1;const ke=Array.isArray(V)?V:[V];let Be=ke.reduce(l(D),{});F===!1&&(Be={});const{prevResolvedValues:Ye={}}=O,Te={...Ye,...Be},Ue=de=>{Z=!0,x.has(de)&&(ve=!0,x.delete(de)),O.needsAnimating[de]=!0;const B=t.getValue(de);B&&(B.liveStyle=!1)};for(const de in Te){const B=Be[de],Q=Ye[de];if(T.hasOwnProperty(de))continue;let R=!1;Vu(B)&&Vu(Q)?R=!Kg(B,Q):R=B!==Q,R?B!=null?Ue(de):x.add(de):B!==void 0&&x.has(de)?Ue(de):O.protectedKeys[de]=!0}O.prevProp=V,O.prevResolvedValues=Be,O.isActive&&(T={...T,...Be}),s&&t.blockInitialAnimation&&(Z=!1),Z&&(!(U&&K)||ve)&&v.push(...ke.map(de=>({animation:de,options:{type:D}})))}if(x.size){const _={};x.forEach(D=>{const O=t.getBaseTarget(D),V=t.getValue(D);V&&(V.liveStyle=!0),_[D]=O??null}),v.push({animation:_})}let b=!!v.length;return s&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(b=!1),s=!1,b?r(v):Promise.resolve()}function h(p,g){var y;if(o[p].isActive===g)return Promise.resolve();(y=t.variantChildren)===null||y===void 0||y.forEach(x=>{var T;return(T=x.animationState)===null||T===void 0?void 0:T.setActive(p,g)}),o[p].isActive=g;const v=f(p);for(const x in o)o[x].protectedKeys={};return v}return{animateChanges:f,setActive:h,setAnimateFunction:d,getState:()=>o,reset:()=>{o=Oh(),s=!0}}}function yk(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!Kg(r,t):!1}function er(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Oh(){return{animate:er(!0),whileInView:er(),whileHover:er(),whileTap:er(),whileDrag:er(),whileFocus:er(),exit:er()}}class Nn{constructor(r){this.isMounted=!1,this.node=r}update(){}}class vk extends Nn{constructor(r){super(r),r.animationState||(r.animationState=gk(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();ra(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)===null||r===void 0||r.call(this)}}let xk=0;class wk extends Nn{constructor(){super(...arguments),this.id=xk++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===s)return;const l=this.node.animationState.setActive("exit",!r);o&&!r&&l.then(()=>o(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const Sk={animation:{Feature:vk},exit:{Feature:wk}};function oo(t,r,o,s={passive:!0}){return t.addEventListener(r,o,s),()=>t.removeEventListener(r,o)}function uo(t){return{point:{x:t.pageX,y:t.pageY}}}const kk=t=>r=>Lc(r)&&t(r,uo(r));function Yi(t,r,o,s){return oo(t,r,kk(o),s)}const Vh=(t,r)=>Math.abs(t-r);function Ck(t,r){const o=Vh(t.x,r.x),s=Vh(t.y,r.y);return Math.sqrt(o**2+s**2)}class _0{constructor(r,o,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:d=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=mu(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,T=Ck(v.offset,{x:0,y:0})>=3;if(!x&&!T)return;const{point:j}=v,{timestamp:b}=ot;this.history.push({...j,timestamp:b});const{onStart:_,onMove:D}=this.handlers;x||(_&&_(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=hu(x,this.transformPagePoint),Re.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:T,onSessionEnd:j,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=mu(v.type==="pointercancel"?this.lastMoveEventInfo:hu(x,this.transformPagePoint),this.history);this.startEvent&&T&&T(v,_),j&&j(v,_)},!Lc(r))return;this.dragSnapToOrigin=d,this.handlers=o,this.transformPagePoint=s,this.contextWindow=l||window;const f=uo(r),h=hu(f,this.transformPagePoint),{point:p}=h,{timestamp:g}=ot;this.history=[{...p,timestamp:g}];const{onSessionStart:y}=o;y&&y(r,mu(h,this.history)),this.removeListeners=lo(Yi(this.contextWindow,"pointermove",this.handlePointerMove),Yi(this.contextWindow,"pointerup",this.handlePointerUp),Yi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Vn(this.updatePoint)}}function hu(t,r){return r?{point:r(t.point)}:t}function $h(t,r){return{x:t.x-r.x,y:t.y-r.y}}function mu({point:t},r){return{point:t,delta:$h(t,I0(r)),offset:$h(t,Pk(r)),velocity:Tk(r,.1)}}function Pk(t){return t[0]}function I0(t){return t[t.length-1]}function Tk(t,r){if(t.length<2)return{x:0,y:0};let o=t.length-1,s=null;const l=I0(t);for(;o>=0&&(s=t[o],!(l.timestamp-s.timestamp>fn(r)));)o--;if(!s)return{x:0,y:0};const d=pn(l.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(l.x-s.x)/d,y:(l.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}const O0=1e-4,bk=1-O0,Ek=1+O0,V0=.01,Ak=0-V0,jk=0+V0;function gt(t){return t.max-t.min}function Rk(t,r,o){return Math.abs(t-r)<=o}function Nh(t,r,o,s=.5){t.origin=s,t.originPoint=Ie(r.min,r.max,t.origin),t.scale=gt(o)/gt(r),t.translate=Ie(o.min,o.max,t.origin)-t.originPoint,(t.scale>=bk&&t.scale<=Ek||isNaN(t.scale))&&(t.scale=1),(t.translate>=Ak&&t.translate<=jk||isNaN(t.translate))&&(t.translate=0)}function Qi(t,r,o,s){Nh(t.x,r.x,o.x,s?s.originX:void 0),Nh(t.y,r.y,o.y,s?s.originY:void 0)}function zh(t,r,o){t.min=o.min+r.min,t.max=t.min+gt(r)}function Lk(t,r,o){zh(t.x,r.x,o.x),zh(t.y,r.y,o.y)}function Fh(t,r,o){t.min=r.min-o.min,t.max=t.min+gt(r)}function Xi(t,r,o){Fh(t.x,r.x,o.x),Fh(t.y,r.y,o.y)}function Mk(t,{min:r,max:o},s){return r!==void 0&&t<r?t=s?Ie(r,t,s.min):Math.max(t,r):o!==void 0&&t>o&&(t=s?Ie(o,t,s.max):Math.min(t,o)),t}function Bh(t,r,o){return{min:r!==void 0?t.min+r:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function Dk(t,{top:r,left:o,bottom:s,right:l}){return{x:Bh(t.x,o,l),y:Bh(t.y,r,s)}}function Uh(t,r){let o=r.min-t.min,s=r.max-t.max;return r.max-r.min<t.max-t.min&&([o,s]=[s,o]),{min:o,max:s}}function _k(t,r){return{x:Uh(t.x,r.x),y:Uh(t.y,r.y)}}function Ik(t,r){let o=.5;const s=gt(t),l=gt(r);return l>s?o=Gr(r.min,r.max-s,t.min):s>l&&(o=Gr(t.min,t.max-l,r.min)),hn(0,1,o)}function Ok(t,r){const o={};return r.min!==void 0&&(o.min=r.min-t.min),r.max!==void 0&&(o.max=r.max-t.min),o}const Yu=.35;function Vk(t=Yu){return t===!1?t=0:t===!0&&(t=Yu),{x:Wh(t,"left","right"),y:Wh(t,"top","bottom")}}function Wh(t,r,o){return{min:Hh(t,r),max:Hh(t,o)}}function Hh(t,r){return typeof t=="number"?t:t[r]||0}const Kh=()=>({translate:0,scale:1,origin:0,originPoint:0}),zr=()=>({x:Kh(),y:Kh()}),Gh=()=>({min:0,max:0}),Fe=()=>({x:Gh(),y:Gh()});function Vt(t){return[t("x"),t("y")]}function $0({top:t,left:r,right:o,bottom:s}){return{x:{min:r,max:o},y:{min:t,max:s}}}function $k({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function Nk(t,r){if(!r)return t;const o=r({x:t.left,y:t.top}),s=r({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}function gu(t){return t===void 0||t===1}function Qu({scale:t,scaleX:r,scaleY:o}){return!gu(t)||!gu(r)||!gu(o)}function tr(t){return Qu(t)||N0(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function N0(t){return Yh(t.x)||Yh(t.y)}function Yh(t){return t&&t!=="0%"}function Gs(t,r,o){const s=t-o,l=r*s;return o+l}function Qh(t,r,o,s,l){return l!==void 0&&(t=Gs(t,l,s)),Gs(t,o,s)+r}function Xu(t,r=0,o=1,s,l){t.min=Qh(t.min,r,o,s,l),t.max=Qh(t.max,r,o,s,l)}function z0(t,{x:r,y:o}){Xu(t.x,r.translate,r.scale,r.originPoint),Xu(t.y,o.translate,o.scale,o.originPoint)}const Xh=.999999999999,qh=1.0000000000001;function zk(t,r,o,s=!1){const l=o.length;if(!l)return;r.x=r.y=1;let d,f;for(let h=0;h<l;h++){d=o[h],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Br(t,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(r.x*=f.x.scale,r.y*=f.y.scale,z0(t,f)),s&&tr(d.latestValues)&&Br(t,d.latestValues))}r.x<qh&&r.x>Xh&&(r.x=1),r.y<qh&&r.y>Xh&&(r.y=1)}function Fr(t,r){t.min=t.min+r,t.max=t.max+r}function Zh(t,r,o,s,l=.5){const d=Ie(t.min,t.max,l);Xu(t,r,o,d,s)}function Br(t,r){Zh(t.x,r.x,r.scaleX,r.scale,r.originX),Zh(t.y,r.y,r.scaleY,r.scale,r.originY)}function F0(t,r){return $0(Nk(t.getBoundingClientRect(),r))}function Fk(t,r,o){const s=F0(t,o),{scroll:l}=r;return l&&(Fr(s.x,l.offset.x),Fr(s.y,l.offset.y)),s}const B0=({current:t})=>t?t.ownerDocument.defaultView:null,Bk=new WeakMap;class Uk{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Fe(),this.visualElement=r}start(r,{snapToCursor:o=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(uo(y).point)},d=(y,v)=>{const{drag:x,dragPropagation:T,onDragStart:j}=this.getProps();if(x&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ow(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vt(_=>{let D=this.getAxisMotionValue(_).get()||0;if(en.test(D)){const{projection:O}=this.visualElement;if(O&&O.layout){const V=O.layout.layoutBox[_];V&&(D=gt(V)*(parseFloat(D)/100))}}this.originPoint[_]=D}),j&&Re.postRender(()=>j(y,v)),zu(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},f=(y,v)=>{const{dragPropagation:x,dragDirectionLock:T,onDirectionLock:j,onDrag:b}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:_}=v;if(T&&this.currentDirection===null){this.currentDirection=Wk(_),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",v.point,_),this.updateAxis("y",v.point,_),this.visualElement.render(),b&&b(y,v)},h=(y,v)=>this.stop(y,v),p=()=>Vt(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new _0(r,{onSessionStart:l,onStart:d,onMove:f,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:B0(this.visualElement)})}stop(r,o){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=o;this.startAnimation(l);const{onDragEnd:d}=this.getProps();d&&Re.postRender(()=>d(r,o))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(r,o,s){const{drag:l}=this.getProps();if(!s||!Ts(r,l,this.currentDirection))return;const d=this.getAxisMotionValue(r);let f=this.originPoint[r]+s[r];this.constraints&&this.constraints[r]&&(f=Mk(f,this.constraints[r],this.elastic[r])),d.set(f)}resolveConstraints(){var r;const{dragConstraints:o,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,d=this.constraints;o&&$r(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&l?this.constraints=Dk(l.layoutBox,o):this.constraints=!1,this.elastic=Vk(s),d!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Vt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=Ok(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!$r(r))return!1;const s=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const d=Fk(s,l.root,this.visualElement.getTransformPagePoint());let f=_k(l.layout.layoutBox,d);if(o){const h=o($k(f));this.hasMutatedConstraints=!!h,h&&(f=$0(h))}return f}startAnimation(r){const{drag:o,dragMomentum:s,dragElastic:l,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Vt(y=>{if(!Ts(y,o,this.currentDirection))return;let v=p[y]||{};f&&(v={min:0,max:0});const x=l?200:1e6,T=l?40:1e7,j={type:"inertia",velocity:s?r[y]:0,bounceStiffness:x,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...d,...v};return this.startAxisValueAnimation(y,j)});return Promise.all(g).then(h)}startAxisValueAnimation(r,o){const s=this.getAxisMotionValue(r);return zu(this.visualElement,r),s.start(Uc(r,s,0,o,this.visualElement,!1))}stopAnimation(){Vt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Vt(r=>{var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(r){var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,s=this.visualElement.getProps(),l=s[o];return l||this.visualElement.getValue(r,(s.initial?s.initial[r]:void 0)||0)}snapToCursor(r){Vt(o=>{const{drag:s}=this.getProps();if(!Ts(o,s,this.currentDirection))return;const{projection:l}=this.visualElement,d=this.getAxisMotionValue(o);if(l&&l.layout){const{min:f,max:h}=l.layout.layoutBox[o];d.set(r[o]-Ie(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!$r(o)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Vt(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();l[f]=Ik({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Vt(f=>{if(!Ts(f,r,null))return;const h=this.getAxisMotionValue(f),{min:p,max:g}=this.constraints[f];h.set(Ie(p,g,l[f]))})}addListeners(){if(!this.visualElement.current)return;Bk.set(this.visualElement,this);const r=this.visualElement.current,o=Yi(r,"pointerdown",p=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();$r(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,d=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Re.read(s);const f=oo(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(Vt(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=p[y].translate,v.set(v.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),o(),d(),h&&h()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:d=!1,dragElastic:f=Yu,dragMomentum:h=!0}=r;return{...r,drag:o,dragDirectionLock:s,dragPropagation:l,dragConstraints:d,dragElastic:f,dragMomentum:h}}}function Ts(t,r,o){return(r===!0||r===t)&&(o===null||o===t)}function Wk(t,r=10){let o=null;return Math.abs(t.y)>r?o="y":Math.abs(t.x)>r&&(o="x"),o}class Hk extends Nn{constructor(r){super(r),this.removeGroupControls=jt,this.removeListeners=jt,this.controls=new Uk(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Jh=t=>(r,o)=>{t&&Re.postRender(()=>t(r,o))};class Kk extends Nn{constructor(){super(...arguments),this.removePointerDownListener=jt}onPointerDown(r){this.session=new _0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:B0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:Jh(r),onStart:Jh(o),onMove:s,onEnd:(d,f)=>{delete this.session,l&&Re.postRender(()=>l(d,f))}}}mount(){this.removePointerDownListener=Yi(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const _s={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function em(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const Ni={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(ue.test(t))t=parseFloat(t);else return t;const o=em(t,r.target.x),s=em(t,r.target.y);return`${o}% ${s}%`}},Gk={correct:(t,{treeScale:r,projectionDelta:o})=>{const s=t,l=$n.parse(t);if(l.length>5)return s;const d=$n.createTransformer(t),f=typeof l[0]!="number"?1:0,h=o.x.scale*r.x,p=o.y.scale*r.y;l[0+f]/=h,l[1+f]/=p;const g=Ie(h,p,.5);return typeof l[2+f]=="number"&&(l[2+f]/=g),typeof l[3+f]=="number"&&(l[3+f]/=g),d(l)}};class Yk extends G.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:s,layoutId:l}=this.props,{projection:d}=r;mw(Qk),d&&(o.group&&o.group.add(d),s&&s.register&&l&&s.register(d),d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),_s.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:s,drag:l,isPresent:d}=this.props,f=s.projection;return f&&(f.isPresent=d,l||r.layoutDependency!==o||o===void 0?f.willUpdate():this.safeToRemove(),r.isPresent!==d&&(d?f.promote():f.relegate()||Re.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),yc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:l}=r;l&&(l.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function U0(t){const[r,o]=Eg(),s=G.useContext(lc);return C.jsx(Yk,{...t,layoutGroup:s,switchLayoutGroup:G.useContext(_g),isPresent:r,safeToRemove:o})}const Qk={borderRadius:{...Ni,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ni,borderTopRightRadius:Ni,borderBottomLeftRadius:Ni,borderBottomRightRadius:Ni,boxShadow:Gk};function Xk(t,r,o){const s=ft(t)?t:ro(t);return s.start(Uc("",s,r,o)),s.animation}function qk(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Zk=(t,r)=>t.depth-r.depth;class Jk{constructor(){this.children=[],this.isDirty=!1}add(r){Mc(this.children,r),this.isDirty=!0}remove(r){Dc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Zk),this.isDirty=!1,this.children.forEach(r)}}function e2(t,r){const o=tn.now(),s=({timestamp:l})=>{const d=l-o;d>=r&&(Vn(s),t(d-r))};return Re.read(s,!0),()=>Vn(s)}const W0=["TopLeft","TopRight","BottomLeft","BottomRight"],t2=W0.length,tm=t=>typeof t=="string"?parseFloat(t):t,nm=t=>typeof t=="number"||ue.test(t);function n2(t,r,o,s,l,d){l?(t.opacity=Ie(0,o.opacity!==void 0?o.opacity:1,r2(s)),t.opacityExit=Ie(r.opacity!==void 0?r.opacity:1,0,i2(s))):d&&(t.opacity=Ie(r.opacity!==void 0?r.opacity:1,o.opacity!==void 0?o.opacity:1,s));for(let f=0;f<t2;f++){const h=`border${W0[f]}Radius`;let p=rm(r,h),g=rm(o,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||nm(p)===nm(g)?(t[h]=Math.max(Ie(tm(p),tm(g),s),0),(en.test(g)||en.test(p))&&(t[h]+="%")):t[h]=g}(r.rotate||o.rotate)&&(t.rotate=Ie(r.rotate||0,o.rotate||0,s))}function rm(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const r2=H0(0,.5,u0),i2=H0(.5,.95,jt);function H0(t,r,o){return s=>s<t?0:s>r?1:o(Gr(t,r,s))}function im(t,r){t.min=r.min,t.max=r.max}function Ot(t,r){im(t.x,r.x),im(t.y,r.y)}function om(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}function sm(t,r,o,s,l){return t-=r,t=Gs(t,1/o,s),l!==void 0&&(t=Gs(t,1/l,s)),t}function o2(t,r=0,o=1,s=.5,l,d=t,f=t){if(en.test(r)&&(r=parseFloat(r),r=Ie(f.min,f.max,r/100)-f.min),typeof r!="number")return;let h=Ie(d.min,d.max,s);t===d&&(h-=r),t.min=sm(t.min,r,o,h,l),t.max=sm(t.max,r,o,h,l)}function am(t,r,[o,s,l],d,f){o2(t,r[o],r[s],r[l],r.scale,d,f)}const s2=["x","scaleX","originX"],a2=["y","scaleY","originY"];function lm(t,r,o,s){am(t.x,r,s2,o?o.x:void 0,s?s.x:void 0),am(t.y,r,a2,o?o.y:void 0,s?s.y:void 0)}function um(t){return t.translate===0&&t.scale===1}function K0(t){return um(t.x)&&um(t.y)}function cm(t,r){return t.min===r.min&&t.max===r.max}function l2(t,r){return cm(t.x,r.x)&&cm(t.y,r.y)}function dm(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function G0(t,r){return dm(t.x,r.x)&&dm(t.y,r.y)}function fm(t){return gt(t.x)/gt(t.y)}function pm(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}class u2{constructor(){this.members=[]}add(r){Mc(this.members,r),r.scheduleRender()}remove(r){if(Dc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){const o=this.members.findIndex(l=>r===l);if(o===0)return!1;let s;for(let l=o;l>=0;l--){const d=this.members[l];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(r,o){const s=this.lead;if(r!==s&&(this.prevLead=s,this.lead=r,r.show(),s)){s.instance&&s.scheduleRender(),r.scheduleRender(),r.resumeFrom=s,o&&(r.resumeFrom.preserveOpacity=!0),s.snapshot&&(r.snapshot=s.snapshot,r.snapshot.latestValues=s.animationValues||s.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:l}=r.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:o,resumingFrom:s}=r;o.onExitComplete&&o.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function c2(t,r,o){let s="";const l=t.x.translate/r.x,d=t.y.translate/r.y,f=(o==null?void 0:o.z)||0;if((l||d||f)&&(s=`translate3d(${l}px, ${d}px, ${f}px) `),(r.x!==1||r.y!==1)&&(s+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:g,rotate:y,rotateX:v,rotateY:x,skewX:T,skewY:j}=o;g&&(s=`perspective(${g}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),T&&(s+=`skewX(${T}deg) `),j&&(s+=`skewY(${j}deg) `)}const h=t.x.scale*r.x,p=t.y.scale*r.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const nr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Hi=typeof window<"u"&&window.MotionDebug!==void 0,yu=["","X","Y","Z"],d2={visibility:"hidden"},hm=1e3;let f2=0;function vu(t,r,o,s){const{latestValues:l}=r;l[t]&&(o[t]=l[t],r.setStaticValue(t,0),s&&(s[t]=0))}function Y0(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const o=n0(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:l,layoutId:d}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",Re,!(l||d))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&Y0(s)}function Q0({attachResizeListener:t,defaultParent:r,measureScroll:o,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},h=r==null?void 0:r()){this.id=f2++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Hi&&(nr.totalNodes=nr.resolvedTargetDeltas=nr.recalculatedProjection=0),this.nodes.forEach(m2),this.nodes.forEach(w2),this.nodes.forEach(S2),this.nodes.forEach(g2),Hi&&window.MotionDebug.record(nr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jk)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new _c),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=qk(f),this.instance=f;const{layoutId:p,layout:g,visualElement:y}=this.options;if(y&&!y.current&&y.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(g||p)&&(this.isLayoutDirty=!0),t){let v;const x=()=>this.root.updateBlockedByResize=!1;t(f,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=e2(x,250),_s.hasAnimatedSinceResize&&(_s.hasAnimatedSinceResize=!1,this.nodes.forEach(gm))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&y&&(p||g)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:T,layout:j})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||y.getDefaultTransition()||b2,{onLayoutAnimationStart:_,onLayoutAnimationComplete:D}=y.getProps(),O=!this.targetLayout||!G0(this.targetLayout,j),V=!x&&T;if(this.options.layoutRoot||this.resumeFrom||V||x&&(O||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,V);const H={...Ac(b,"layout"),onPlay:_,onComplete:D};(y.shouldReduceMotion||this.options.layoutRoot)&&(H.delay=0,H.type=!1),this.startAnimation(H)}else x||gm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Vn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(k2),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Y0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(mm);return}this.isUpdating||this.nodes.forEach(v2),this.isUpdating=!1,this.nodes.forEach(x2),this.nodes.forEach(p2),this.nodes.forEach(h2),this.clearAllSnapshots();const h=tn.now();ot.delta=hn(0,1e3/60,h-ot.timestamp),ot.timestamp=h,ot.isProcessing=!0,uu.update.process(ot),uu.preRender.process(ot),uu.render.process(ot),ot.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,yc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(y2),this.sharedNodes.forEach(C2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!gt(this.snapshot.measuredBox.x)&&!gt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!K0(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&(h||tr(this.latestValues)||y)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),E2(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:h}=this.options;if(!h)return Fe();const p=h.measureViewportBox();if(!(((f=this.scroll)===null||f===void 0?void 0:f.wasRoot)||this.path.some(A2))){const{scroll:y}=this.root;y&&(Fr(p.x,y.offset.x),Fr(p.y,y.offset.y))}return p}removeElementScroll(f){var h;const p=Fe();if(Ot(p,f),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return p;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&Ot(p,f),Fr(p.x,v.offset.x),Fr(p.y,v.offset.y))}return p}applyTransform(f,h=!1){const p=Fe();Ot(p,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Br(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),tr(y.latestValues)&&Br(p,y.latestValues)}return tr(this.latestValues)&&Br(p,this.latestValues),p}removeTransform(f){const h=Fe();Ot(h,f);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!tr(g.latestValues))continue;Qu(g.latestValues)&&g.updateSnapshot();const y=Fe(),v=g.measurePageBox();Ot(y,v),lm(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return tr(this.latestValues)&&lm(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ot.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var h;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==p;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!(!this.layout||!(v||x))){if(this.resolvedRelativeTargetAt=ot.timestamp,!this.targetDelta&&!this.relativeTarget){const T=this.getClosestProjectingParent();T&&T.layout&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),Xi(this.relativeTargetOrigin,this.layout.layoutBox,T.layout.layoutBox),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Fe(),this.targetWithTransforms=Fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Lk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ot(this.target,this.layout.layoutBox),z0(this.target,this.targetDelta)):Ot(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const T=this.getClosestProjectingParent();T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),Xi(this.relativeTargetOrigin,this.target,T.target),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Hi&&nr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Qu(this.parent.latestValues)||N0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var f;const h=this.getLead(),p=!!this.resumingFrom||this!==h;let g=!0;if((this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty)&&(g=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===ot.timestamp&&(g=!1),g)return;const{layout:y,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||v))return;Ot(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,T=this.treeScale.y;zk(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Fe());const{target:j}=h;if(!j){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(om(this.prevProjectionDelta.x,this.projectionDelta.x),om(this.prevProjectionDelta.y,this.projectionDelta.y)),Qi(this.projectionDelta,this.layoutCorrected,j,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==T||!pm(this.projectionDelta.x,this.prevProjectionDelta.x)||!pm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j)),Hi&&nr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zr(),this.projectionDelta=zr(),this.projectionDeltaWithTransform=zr()}setAnimationOrigin(f,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},v=zr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const x=Fe(),T=p?p.source:void 0,j=this.layout?this.layout.source:void 0,b=T!==j,_=this.getStack(),D=!_||_.members.length<=1,O=!!(b&&!D&&this.options.crossfade===!0&&!this.path.some(T2));this.animationProgress=0;let V;this.mixTargetDelta=H=>{const F=H/1e3;ym(v.x,f.x,F),ym(v.y,f.y,F),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xi(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),P2(this.relativeTarget,this.relativeTargetOrigin,x,F),V&&l2(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=Fe()),Ot(V,this.relativeTarget)),b&&(this.animationValues=y,n2(y,g,this.latestValues,F,O,D)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Vn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Re.update(()=>{_s.hasAnimatedSinceResize=!0,this.currentAnimation=Xk(0,hm,{...f,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=f;if(!(!h||!p||!g)){if(this!==f&&this.layout&&g&&X0(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Fe();const v=gt(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+v;const x=gt(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+x}Ot(h,p),Br(h,y),Qi(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new u2),this.sharedNodes.get(f).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var f;const{layoutId:h}=this.options;return h?((f=this.getStack())===null||f===void 0?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:h}=this.options;return h?(f=this.getStack())===null||f===void 0?void 0:f.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&vu("z",f,g,this.animationValues);for(let y=0;y<yu.length;y++)vu(`rotate${yu[y]}`,f,g,this.animationValues),vu(`skew${yu[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}getProjectionStyles(f){var h,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return d2;const g={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=Ms(f==null?void 0:f.pointerEvents)||"",g.transform=y?y(this.latestValues,""):"none",g;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Ms(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!tr(this.latestValues)&&(b.transform=y?y({},""):"none",this.hasProjected=!1),b}const x=v.animationValues||v.latestValues;this.applyTransformsToTarget(),g.transform=c2(this.projectionDeltaWithTransform,this.treeScale,x),y&&(g.transform=y(x,g.transform));const{x:T,y:j}=this.projectionDelta;g.transformOrigin=`${T.origin*100}% ${j.origin*100}% 0`,v.animationValues?g.opacity=v===this?(p=(h=x.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:g.opacity=v===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const b in no){if(x[b]===void 0)continue;const{correct:_,applyTo:D,isCSSVariable:O}=no[b],V=g.transform==="none"?x[b]:_(x[b],v);if(D){const H=D.length;for(let F=0;F<H;F++)g[D[F]]=V}else O?this.options.visualElement.renderState.vars[b]=V:g[b]=V}return this.options.layoutId&&(g.pointerEvents=v===this?Ms(f==null?void 0:f.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var h;return(h=f.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(mm),this.root.sharedNodes.clear()}}}function p2(t){t.updateLayout()}function h2(t){var r;const o=((r=t.resumeFrom)===null||r===void 0?void 0:r.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&o&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=t.layout,{animationType:d}=t.options,f=o.source!==t.layout.source;d==="size"?Vt(v=>{const x=f?o.measuredBox[v]:o.layoutBox[v],T=gt(x);x.min=s[v].min,x.max=x.min+T}):X0(d,o.layoutBox,s)&&Vt(v=>{const x=f?o.measuredBox[v]:o.layoutBox[v],T=gt(s[v]);x.max=x.min+T,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+T)});const h=zr();Qi(h,s,o.layoutBox);const p=zr();f?Qi(p,t.applyTransform(l,!0),o.measuredBox):Qi(p,s,o.layoutBox);const g=!K0(h);let y=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:T}=v;if(x&&T){const j=Fe();Xi(j,o.layoutBox,x.layoutBox);const b=Fe();Xi(b,s,T.layoutBox),G0(j,b)||(y=!0),v.options.layoutRoot&&(t.relativeTarget=b,t.relativeTargetOrigin=j,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:o,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function m2(t){Hi&&nr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function g2(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function y2(t){t.clearSnapshot()}function mm(t){t.clearMeasurements()}function v2(t){t.isLayoutDirty=!1}function x2(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function gm(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function w2(t){t.resolveTargetDelta()}function S2(t){t.calcProjection()}function k2(t){t.resetSkewAndRotation()}function C2(t){t.removeLeadSnapshot()}function ym(t,r,o){t.translate=Ie(r.translate,0,o),t.scale=Ie(r.scale,1,o),t.origin=r.origin,t.originPoint=r.originPoint}function vm(t,r,o,s){t.min=Ie(r.min,o.min,s),t.max=Ie(r.max,o.max,s)}function P2(t,r,o,s){vm(t.x,r.x,o.x,s),vm(t.y,r.y,o.y,s)}function T2(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const b2={duration:.45,ease:[.4,0,.1,1]},xm=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),wm=xm("applewebkit/")&&!xm("chrome/")?Math.round:jt;function Sm(t){t.min=wm(t.min),t.max=wm(t.max)}function E2(t){Sm(t.x),Sm(t.y)}function X0(t,r,o){return t==="position"||t==="preserve-aspect"&&!Rk(fm(r),fm(o),.2)}function A2(t){var r;return t!==t.root&&((r=t.scroll)===null||r===void 0?void 0:r.wasRoot)}const j2=Q0({attachResizeListener:(t,r)=>oo(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),xu={current:void 0},q0=Q0({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xu.current){const t=new j2({});t.mount(window),t.setOptions({layoutScroll:!0}),xu.current=t}return xu.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),R2={pan:{Feature:Kk},drag:{Feature:Hk,ProjectionNode:q0,MeasureLayout:U0}};function km(t,r,o){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",o==="Start");const l="onHover"+o,d=s[l];d&&Re.postRender(()=>d(r,uo(r)))}class L2 extends Nn{mount(){const{current:r}=this.node;r&&(this.unmount=Lw(r,(o,s)=>(km(this.node,s,"Start"),l=>km(this.node,l,"End"))))}unmount(){}}class M2 extends Nn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=lo(oo(this.node.current,"focus",()=>this.onFocus()),oo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Cm(t,r,o){const{props:s}=t;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",o==="Start");const l="onTap"+(o==="End"?"":o),d=s[l];d&&Re.postRender(()=>d(r,uo(r)))}class D2 extends Nn{mount(){const{current:r}=this.node;r&&(this.unmount=Iw(r,(o,s)=>(Cm(this.node,s,"Start"),(l,{success:d})=>Cm(this.node,l,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const qu=new WeakMap,wu=new WeakMap,_2=t=>{const r=qu.get(t.target);r&&r(t)},I2=t=>{t.forEach(_2)};function O2({root:t,...r}){const o=t||document;wu.has(o)||wu.set(o,{});const s=wu.get(o),l=JSON.stringify(r);return s[l]||(s[l]=new IntersectionObserver(I2,{root:t,...r})),s[l]}function V2(t,r,o){const s=O2(r);return qu.set(t,o),s.observe(t),()=>{qu.delete(t),s.unobserve(t)}}const $2={some:0,all:1};class N2 extends Nn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:s,amount:l="some",once:d}=r,f={root:o?o.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:$2[l]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,d&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),x=g?y:v;x&&x(p)};return V2(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(z2(r,o))&&this.startObserver()}unmount(){}}function z2({viewport:t={}},{viewport:r={}}={}){return o=>t[o]!==r[o]}const F2={inView:{Feature:N2},tap:{Feature:D2},focus:{Feature:M2},hover:{Feature:L2}},B2={layout:{ProjectionNode:q0,MeasureLayout:U0}},Zu={current:null},Z0={current:!1};function U2(){if(Z0.current=!0,!!dc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>Zu.current=t.matches;t.addListener(r),r()}else Zu.current=!1}const W2=[...C0,dt,$n],H2=t=>W2.find(k0(t)),Pm=new WeakMap;function K2(t,r,o){for(const s in r){const l=r[s],d=o[s];if(ft(l))t.addValue(s,l);else if(ft(d))t.addValue(s,ro(l,{owner:t}));else if(d!==l)if(t.hasValue(s)){const f=t.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=t.getStaticValue(s);t.addValue(s,ro(f!==void 0?f:l,{owner:t}))}}for(const s in o)r[s]===void 0&&t.removeValue(s);return r}const Tm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class G2{scrapeMotionValuesFromProps(r,o,s){return{}}constructor({parent:r,props:o,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:d,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=zc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=tn.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Re.render(this.render,!1,!0))};const{latestValues:p,renderState:g,onUpdate:y}=f;this.onUpdate=y,this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=g,this.parent=r,this.props=o,this.presenceContext=s,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!d,this.isControllingVariants=ia(o),this.isVariantNode=Mg(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const T in x){const j=x[T];p[T]!==void 0&&ft(j)&&j.set(p[T],!1)}}mount(r){this.current=r,Pm.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,s)=>this.bindToMotionValue(s,o)),Z0.current||U2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Pm.delete(this.current),this.projection&&this.projection.unmount(),Vn(this.notifyUpdate),Vn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(r,o){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const s=ur.has(r),l=o.on("change",h=>{this.latestValues[r]=h,this.props.onUpdate&&Re.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),d=o.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{l(),d(),f&&f(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in Yr){const o=Yr[r];if(!o)continue;const{isEnabled:s,Feature:l}=o;if(!this.features[r]&&l&&s(this.props)&&(this.features[r]=new l(this)),this.features[r]){const d=this.features[r];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Fe()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<Tm.length;s++){const l=Tm[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const d="on"+l,f=r[d];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=K2(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const s=this.values.get(r);o!==s&&(s&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let s=this.values.get(r);return s===void 0&&o!==void 0&&(s=ro(o===null?void 0:o,{owner:this}),this.addValue(r,s)),s}readValue(r,o){var s;let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(s=this.getBaseTargetFromProps(this.props,r))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(w0(l)||d0(l))?l=parseFloat(l):!H2(l)&&$n.test(o)&&(l=y0(r,o)),this.setBaseTarget(r,ft(l)?l.get():l)),ft(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var o;const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const f=xc(this.props,s,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);f&&(l=f[r])}if(s&&l!==void 0)return l;const d=this.getBaseTargetFromProps(this.props,r);return d!==void 0&&!ft(d)?d:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new _c),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}}class J0 extends G2{constructor(){super(...arguments),this.KeyframeResolver=P0}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){return r.style?r.style[o]:void 0}removeValueFromRenderState(r,{vars:o,style:s}){delete o[r],delete s[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;ft(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function Y2(t){return window.getComputedStyle(t)}class Q2 extends J0{constructor(){super(...arguments),this.type="html",this.renderInstance=zg}readValueFromInstance(r,o){if(ur.has(o)){const s=Nc(o);return s&&s.default||0}else{const s=Y2(r),l=(wc(o)?s.getPropertyValue(o):s[o])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(r,{transformPagePoint:o}){return F0(r,o)}build(r,o,s){Cc(r,o,s.transformTemplate)}scrapeMotionValuesFromProps(r,o,s){return Ec(r,o,s)}}class X2 extends J0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Fe}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(ur.has(o)){const s=Nc(o);return s&&s.default||0}return o=Fg.has(o)?o:gc(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,s){return Wg(r,o,s)}build(r,o,s){Pc(r,o,this.isSVGTag,s.transformTemplate)}renderInstance(r,o,s,l){Bg(r,o,s,l)}mount(r){this.isSVGTag=bc(r.tagName),super.mount(r)}}const q2=(t,r)=>vc(t)?new X2(r):new Q2(r,{allowProjection:t!==G.Fragment}),Z2=Pw({...Sk,...F2,...R2,...B2},q2),ce=Nx(Z2),J2=I.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  height: 80px;
  background: ${({$scrolled:t,theme:r})=>t?`${r.colors.background}dd`:r.colors.background};
  backdrop-filter: blur(10px);
  box-shadow: ${({scrolled:t,theme:r})=>t?r.shadows.header:"none"};
  z-index: 999;
  transition: all 0.3s ease;
`,eC=I(ce.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.accent};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:t})=>t.colors.accentHover};
  }
`,tC=I.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: ${({theme:t})=>t.colors.text};
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({theme:t})=>t.colors.accent};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({theme:t})=>t.colors.accent};
      
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,nC=I.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme:t})=>t.colors.text};
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:t})=>t.colors.accent};
  }

  @media (max-width: 768px) {
    display: block;
  }
`,rC=I(ce.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: ${({theme:t})=>t.colors.mobileMenuBg};
  backdrop-filter: blur(10px);
  box-shadow: ${({theme:t})=>t.shadows.modal};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`,iC=I.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme:t})=>t.colors.text};
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:t})=>t.colors.accent};
  }
`,zi=I.a`
  color: ${({theme:t})=>t.colors.text};
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.75rem 0;
  transition: color 0.3s ease;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};

  &:hover {
    color: ${({theme:t})=>t.colors.accent};
  }
`,oC=I(ce.div)`
  position: fixed;
  inset: 0;
  background: ${({theme:t})=>t.colors.overlay};
  z-index: 999;
  backdrop-filter: blur(2px);
`;function sC(){const[t,r]=G.useState(!1),[o,s]=G.useState(!1);G.useEffect(()=>{const f=()=>{s(window.scrollY>50)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const l=f=>{const h=document.getElementById(f);if(h){const y=h.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:y,behavior:"smooth"})}r(!1)},d={hidden:{x:"100%"},visible:{x:0},exit:{x:"100%"}};return C.jsxs(C.Fragment,{children:[C.jsxs(J2,{$scrolled:o,children:[C.jsx(eC,{onClick:()=>l("hero"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"KI"}),C.jsxs(tC,{children:[C.jsx("a",{onClick:()=>l("hero"),children:"Home"}),C.jsx("a",{onClick:()=>l("about"),children:"About"}),C.jsx("a",{onClick:()=>l("experience"),children:"Experience"}),C.jsx("a",{onClick:()=>l("projects"),children:"Projects"}),C.jsx("a",{onClick:()=>l("contact"),children:"Contact"})]}),C.jsx(nC,{onClick:()=>r(!0),children:C.jsx(Ex,{})})]}),C.jsx(fc,{children:t&&C.jsxs(C.Fragment,{children:[C.jsx(oC,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>r(!1)}),C.jsxs(rC,{initial:"hidden",animate:"visible",exit:"exit",variants:d,transition:{type:"spring",stiffness:300,damping:30},children:[C.jsx(iC,{onClick:()=>r(!1),children:C.jsx(bg,{})}),C.jsx(zi,{onClick:()=>l("hero"),children:"Home"}),C.jsx(zi,{onClick:()=>l("about"),children:"About"}),C.jsx(zi,{onClick:()=>l("experience"),children:"Experience"}),C.jsx(zi,{onClick:()=>l("projects"),children:"Projects"}),C.jsx(zi,{onClick:()=>l("contact"),children:"Contact"})]})]})})]})}const aC="/assets/shopkojiro-C2K1Kieu.webp",lC=I.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  background: radial-gradient(circle at 20% 40%, rgba(50, 30, 120, 0.18), transparent 60%), #0b0e2a;

  text-align: center;
  color: ${({theme:t})=>t.colors.text};
  overflow: hidden;

  @media (max-width: 767px) {
    padding: 5rem 1rem 2rem;
    min-height: auto;
    justify-content: flex-start;
    padding-top: 6rem;
  }

  @media (max-width: 480px) {
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
`,uC=I(ce.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  z-index: 1;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
    text-align: left;
    height: 100vh;
    gap: 2rem;
  }
`,cC=I(ce.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;

  /* Ambient glow behind the photo for natural blending */
  &::before {
    content: "";
    position: absolute;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(140, 94, 255, 0.25) 0%,
      rgba(140, 94, 255, 0.15) 30%,
      rgba(50, 30, 120, 0.1) 50%,
      transparent 70%
    );
    filter: blur(50px);
    top: 52%;
    left: 55%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: glowPulse 4s ease-in-out infinite;
  }

  /* Soft ambient overlay for edge blending */
  &::after {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 40%,
      rgba(11, 14, 42, 0.3) 70%,
      rgba(11, 14, 42, 0.6) 100%
    );
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0.5rem;
    max-height: 40vh;
    min-height: 280px;

    &::before {
      width: 280px;
      height: 280px;
      top: 50%;
      left: 50%;
      filter: blur(35px);
    }

    &::after {
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
    }
  }

  @media (max-width: 480px) {
    max-height: 35vh;
    min-height: 240px;

    &::before {
      width: 220px;
      height: 220px;
      filter: blur(30px);
    }
  }

  @media (max-width: 360px) {
    max-height: 30vh;
    min-height: 200px;

    &::before {
      width: 180px;
      height: 180px;
    }
  }
`,dC=I.div`
  position: relative;
  z-index: 1;
  filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.5));
`,fC=I.img`
  width: 82%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;

  /* Natural blending with background - soft edges */
  filter: 
    drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.6))
    drop-shadow(0px 0px 30px rgba(139, 92, 246, 0.2))
    brightness(0.98)
    contrast(1.03);
  
  /* Soft edge blending for natural integration */
  -webkit-mask-image: radial-gradient(
    ellipse 85% 90% at 50% 50%,
    black 65%,
    rgba(0, 0, 0, 0.8) 80%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 85% 90% at 50% 50%,
    black 65%,
    rgba(0, 0, 0, 0.8) 80%,
    transparent 100%
  );

  margin-top: -4rem;
  margin-left: 3.5rem;

  /* Smooth hover effect */
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-4px);
    filter: 
      drop-shadow(0px 25px 50px rgba(0, 0, 0, 0.7))
      drop-shadow(0px 0px 40px rgba(139, 92, 246, 0.3))
      brightness(1.02)
      contrast(1.05);
  }

  @media (max-width: 767px) {
    width: 60%;
    max-width: 300px;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
    filter: 
      drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.5))
      drop-shadow(0px 0px 20px rgba(139, 92, 246, 0.15))
      brightness(0.98)
      contrast(1.03);
    
    -webkit-mask-image: radial-gradient(
      ellipse 80% 85% at 50% 50%,
      black 60%,
      rgba(0, 0, 0, 0.75) 75%,
      transparent 100%
    );
    mask-image: radial-gradient(
      ellipse 80% 85% at 50% 50%,
      black 60%,
      rgba(0, 0, 0, 0.75) 75%,
      transparent 100%
    );

    &:hover {
      filter: 
        drop-shadow(0px 18px 40px rgba(0, 0, 0, 0.6))
        drop-shadow(0px 0px 25px rgba(139, 92, 246, 0.2))
        brightness(1.02)
        contrast(1.05);
    }
  }

  @media (max-width: 480px) {
    width: 55%;
    max-width: 250px;
  }

  @media (max-width: 360px) {
    width: 50%;
    max-width: 220px;
  }
`,pC=I(ce.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  z-index: 1;

  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    padding: 3rem;
  }
`,hC=I(ce.p)`
  font-size: 1.1rem;
  color: ${({theme:t})=>t.colors.accent};
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`,mC=I(ce.h1)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`,gC=I(ce.h2)`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({theme:t})=>t.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,yC=I(ce.p)`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({theme:t})=>t.colors.textSecondary};
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media (min-width: 768px) {
    margin: 0;
    text-align: left;
  }
`,vC=I(ce.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid ${({theme:t})=>t.colors.accent};
  color: ${({theme:t})=>t.colors.accent};
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.background};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(139, 92, 246, 0.3);
  }
`,xC={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},Or={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,-.05,.01,.99]}}},wC=()=>C.jsx(lC,{id:"hero",children:C.jsxs(uC,{variants:xC,initial:"hidden",animate:"visible",children:[C.jsx(cC,{variants:Or,children:C.jsx(dC,{children:C.jsx(fC,{src:aC,alt:"Khayrullo Isomiddinov"})})}),C.jsxs(pC,{children:[C.jsx(hC,{variants:Or,children:"Hi, my name is"}),C.jsx(mC,{variants:Or,children:"Khayrullo Isomiddinov"}),C.jsx(gC,{variants:Or,children:"Spring Boot & Angular Full-Stack Developer"}),C.jsx(yC,{variants:Or,children:"I'm a student of Computer Science at ELTE, and I am crazy about backend development, databases, and solving complex challenges."}),C.jsx(vC,{variants:Or,href:"#projects",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View My Work"})]})]})}),SC=I.section`
  contain: paint;
  will-change: opacity, transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  padding: 3rem 1rem;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  color: ${({theme:t})=>t.colors.text};
  position: relative;
  overflow: hidden;

  /* Modern gradient background */
  &::before {
    will-change: opacity;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      ${({theme:t})=>t.colors.accent}08 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      ${({theme:t})=>t.colors.accent}05 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
  }

  /* Animated grid pattern */
  &::after {
  will-change: opacity;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(${({theme:t})=>t.colors.accent}03 1px, transparent 1px),
      linear-gradient(90deg, ${({theme:t})=>t.colors.accent}03 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 2rem;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,kC=I.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`,CC=I(ce.h2)`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.text} 0%,
    ${({theme:t})=>t.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  position: relative;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,PC=I(ce.div)`
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({theme:t})=>t.colors.accent}40,
    ${({theme:t})=>t.colors.accent},
    ${({theme:t})=>t.colors.accent}40,
    transparent
  );
  width: 120px;
  margin: 0 auto 3rem;
  border-radius: 2px;
  position: relative;

  &::before {
  will-change: opacity;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${({theme:t})=>t.colors.accent};
    border-radius: 50%;
    box-shadow: 0 0 20px ${({theme:t})=>t.colors.accent}80;
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 4px;
  }
`,TC=I.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 3rem;
  }
`,bC=I.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`,EC=I(ce.div)`
  padding: 2rem 1.5rem;
  background: ${({theme:t})=>`linear-gradient(135deg, ${t.colors.cardBg}F0 0%, ${t.colors.cardBg}D0 100%)`};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({theme:t})=>t.colors.border}40;
  border-left: 4px solid ${({theme:t})=>t.colors.accent};
  border-radius: 16px;
  line-height: 1.9;
  font-size: 1rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px ${({theme:t})=>t.colors.border}20,
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
  will-change: opacity;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({theme:t})=>t.colors.accent},
      ${({theme:t})=>t.colors.accentHover}
    );
    transition: width 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.15),
      0 0 0 1px ${({theme:t})=>t.colors.border}40,
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 40px ${({theme:t})=>t.colors.accent}20;
  }

  p {
    margin-bottom: 1.5rem;
    font-weight: 400;
    position: relative;
    padding-left: 1rem;

    &::before {
    will-change: opacity;
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({theme:t})=>t.colors.accent};
      font-size: 1.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
    font-size: 1.05rem;
  }
`,AC=I(ce.div)`
  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.cardBg}F8 0%,
    ${({theme:t})=>t.colors.cardBg}E8 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({theme:t})=>t.colors.border}50;
  border-left: 4px solid ${({theme:t})=>t.colors.accent};
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 0 0 1px ${({theme:t})=>t.colors.border}20;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
  will-change: opacity;
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      ${({theme:t})=>t.colors.accent}10 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.12),
      0 0 60px ${({theme:t})=>t.colors.accent}15;
    border-color: ${({theme:t})=>t.colors.accent}80;

    &::before {
    will-change: opacity;
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,jC=I.h4`
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.accent},
    ${({theme:t})=>t.colors.accentHover}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
  will-change: opacity;
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({theme:t})=>t.colors.accent},
      transparent
    );
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,RC=I.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({theme:t})=>t.colors.textSecondary};
  margin: 0;
  position: relative;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,LC=I(ce.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`,bm=I(ce.div)`
  margin-bottom: 0;
  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.cardBg}F0 0%,
    ${({theme:t})=>t.colors.cardBg}D0 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({theme:t})=>t.colors.border}40;
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px ${({theme:t})=>t.colors.border}20;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${({theme:t})=>t.colors.border}60;
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.15),
      0 0 0 1px ${({theme:t})=>t.colors.border}40;
  }
`,ey=I(ce.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
  will-change: opacity;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({theme:t})=>t.colors.accent},
      ${({theme:t})=>t.colors.accentHover}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    background: ${({theme:t})=>t.colors.cardBg}40;
  }

  @media (min-width: 768px) {
    padding: 1.75rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`,Em=I.h3`
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.text} 0%,
    ${({theme:t})=>t.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: -0.3px;
  margin: 0;
  flex: 1;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`,MC=I(ce.div)`
  color: ${({theme:t})=>t.colors.accent};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({theme:t})=>t.colors.accent}15;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${ey}:hover & {
    background: ${({theme:t})=>t.colors.accent}25;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    width: 28px;
    height: 28px;
  }
`,DC=I(ce.div)`
  overflow: hidden;
`,_C=I.div`
  padding: 0 1.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem 1rem;
  }
`,IC=I.p`
  font-size: 0.85rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-style: italic;
  padding: 0.75rem 1rem;
  background: ${({theme:t})=>t.colors.cardBg}80;
  border-left: 3px solid ${({theme:t})=>t.colors.accent}60;
  border-radius: 8px;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`,OC=I(ce.div)`
  margin-bottom: 1.25rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`,VC=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
`,$C=I.span`
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text};
  font-size: 0.95rem;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,NC=I(ce.span)`
  font-weight: 700;
  color: ${({theme:t})=>t.colors.accent};
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  background: ${({theme:t})=>t.colors.accent}15;
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t.colors.accent}30;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,zC=I.div`
  width: 100%;
  height: 8px;
  background: ${({theme:t})=>t.colors.cardBg};
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({theme:t})=>t.colors.border}30;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`,FC=I(ce.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({theme:t})=>t.colors.accent},
    ${({theme:t})=>t.colors.accentHover},
    ${({theme:t})=>t.colors.accent}
  );
  background-size: 200% 100%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 10px ${({theme:t})=>t.colors.accent}40,
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &::after {
  will-change: opacity;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,BC=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.6rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`,UC=I(ce.span)`
  padding: 0.7rem 1rem;
  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.cardBg}F8 0%,
    ${({theme:t})=>t.colors.cardBg}E8 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1.5px solid ${({theme:t})=>t.colors.border}40;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.text};
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
  will-change: opacity;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      ${({theme:t})=>t.colors.accent}20,
      transparent
    );
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    border-radius: 50%;
  }

  &:hover,
  &:active {
    border-color: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.accent};
    transform: translateY(-3px);
    box-shadow: 
      0 8px 24px ${({theme:t})=>t.colors.accent}20,
      0 0 0 2px ${({theme:t})=>t.colors.accent}10;

    &::before {
    will-change: opacity;
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.85rem;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 0.85rem 1.2rem;
    font-size: 0.9rem;
  }
`;I.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;I(ce.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${({theme:t})=>t.colors.cardBg};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:t})=>t.colors.accent};
    transform: translateX(5px);
  }
`;I.span`
  font-weight: 500;
  color: ${({theme:t})=>t.colors.text};
  font-size: 0.95rem;
`;I.span`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: ${({theme:t,level:r})=>r==="C2"?`${t.colors.accent}25`:r==="C1"?`${t.colors.accent}20`:r==="B2"?`${t.colors.accent}15`:`${t.colors.accent}10`};
  color: ${({theme:t})=>t.colors.accent};
  border: 1px solid ${({theme:t,level:r})=>r==="C2"?t.colors.accent:r==="C1"?`${t.colors.accent}80`:r==="B2"?`${t.colors.accent}60`:`${t.colors.accent}40`};
`;const WC=[{name:"Python",level:95},{name:"Java",level:80},{name:"JavaScript",level:70},{name:"C#",level:65},{name:"C",level:60},{name:"PHP",level:58},{name:"ADA",level:35}],HC=[{name:"Angular",level:95},{name:"React",level:90},{name:"Spring Boot",level:90},{name:"FastAPI",level:85},{name:"Node.js",level:72},{name:"Laravel",level:55}],KC=[{name:"SQL (Databases)",level:92},{name:"Linux",level:92},{name:"Operating Systems",level:90}],GC=[{name:"Git",level:93},{name:"REST APIs",level:90},{name:"OOP Design Patterns",level:87},{name:"Docker",level:55}],YC=["Leadership","Team Collaboration","Critical Thinking","Problem-Solving","Adaptability","Time Management","Communication","Project Management"],QC=()=>{const[t,r]=G.useState({programming:!0,frameworks:!1,databases:!1,devTools:!1}),o=T=>{r(j=>({...j,[T]:!j[T]}))},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{staggerChildren:.1,delayChildren:.2}}},l={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:[.6,-.05,.01,.99]}}},d={hidden:{opacity:0,y:-30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},f={hidden:{opacity:0,scaleX:0},visible:{opacity:1,scaleX:1,transition:{duration:.8,delay:.3,ease:[.6,-.05,.01,.99]}}},h={hidden:{width:0},visible:T=>({width:`${T}%`,transition:{duration:1,delay:.2,ease:[.6,-.05,.01,.99]}})},p={hidden:{opacity:0,scale:0},visible:T=>({opacity:1,scale:1,transition:{duration:.5,delay:.5,ease:[.34,1.56,.64,1]}})},g={hidden:{opacity:0,scale:.8},visible:T=>({opacity:1,scale:1,transition:{duration:.4,delay:T*.05,ease:[.34,1.56,.64,1]}}),hover:{scale:1.05,transition:{duration:.2}}},y={open:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:[.6,-.05,.01,.99]},opacity:{duration:.3,delay:.1}}},closed:{height:0,opacity:0,transition:{height:{duration:.4,ease:[.6,-.05,.01,.99]},opacity:{duration:.2}}}},v={open:{rotate:180},closed:{rotate:0}},x=(T,j,b=null,_)=>{const D=t[_];return C.jsxs(bm,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},variants:l,children:[C.jsxs(ey,{onClick:()=>o(_),whileHover:{scale:1.01},whileTap:{scale:.99},children:[C.jsx(Em,{children:T}),C.jsx(MC,{variants:v,animate:D?"open":"closed",transition:{duration:.3,ease:[.6,-.05,.01,.99]},children:C.jsx(Sx,{})})]}),C.jsx(fc,{initial:!1,children:D&&C.jsx(DC,{initial:"closed",animate:"open",exit:"closed",variants:y,children:C.jsxs(_C,{children:[b&&C.jsx(IC,{as:ce.p,variants:l,children:b}),j.map((O,V)=>C.jsxs(OC,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-30px"},custom:V,children:[C.jsxs(VC,{children:[C.jsx($C,{children:O.name}),C.jsxs(NC,{variants:p,initial:"hidden",animate:D?"visible":"hidden",custom:O.level,children:[O.level,"%"]})]}),C.jsx(zC,{children:C.jsx(FC,{custom:O.level,variants:h,initial:"hidden",animate:D?"visible":"hidden"})})]},V))]})})})]})};return C.jsx(SC,{id:"about",children:C.jsxs(kC,{children:[C.jsx(CC,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:"About Me"}),C.jsx(PC,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"}}),C.jsxs(TC,{as:ce.div,variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[C.jsxs(bC,{children:[C.jsxs(EC,{variants:l,whileHover:{scale:1.02,transition:{duration:.3}},children:[C.jsx("p",{children:"Hey there, thanks for checking out my portfolio!"}),C.jsx("p",{children:"Now that you are here, let me tell you a little bit about me. I am a student of computer science, and I am currently trying to break into the tech industry. I am doing so by thoroughly learning about databases, backend development (mainly using python FastAPI), as well as grasping the foundations of networking and configuration. I am taking CCNA prep courses in order to achieve it."}),C.jsx("p",{children:"As a lifelong learner, I like to be proactive, and spend as much time as possible on self improvement and skills acquisition. I mostly find myself enjoying my time tinkering with databases and the ways to optimize queries, learning in-depth about distributed systems, as well as trying to constantly improve my grades."}),C.jsx("p",{children:"Currently I am working on my thesis which focuses on building a real-time study-group event platform. I'm developing a FastAPI backend with clean models, proper indexing, and reliable state handling, and a React frontend that supports real-time chat through WebSockets. I use a vector-clock system to keep message ordering consistent even when clients lag or reconnect. The project covers event scheduling, role management, caching, and timezone correctness. I treat it like a production system, not a school assignment, to show I can design and ship a full-stack app end to end. Outside my thesis work, most of my time right now goes into leveling up my production-ready skills. I am actively learning Angular and Spring Boot, diving into their ecosystems to understand how real enterprise apps are structured. I use Maven daily while experimenting with proper build pipelines, and I containerize everything with Docker to keep my environments clean and deployment-ready. These tools are my current focus because I want to operate at the level companies expect from engineers who understand modern backend, frontend, and DevOps workflows."})]}),C.jsxs(AC,{variants:l,whileHover:{scale:1.02,transition:{duration:.3}},children:[C.jsx(jC,{children:"What I'm Looking For"}),C.jsx(RC,{children:"I'm searching for internship / junior opportunities to work on challenging projects and collaborate with talented teams. May it be a development role, system design, or problem-solving, I'm ready to bring my skills to the table!"})]}),C.jsxs(bm,{as:ce.div,variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},children:[C.jsx(Em,{as:ce.h3,variants:l,children:"Soft Skills"}),C.jsx(BC,{children:YC.map((T,j)=>C.jsx(UC,{variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},whileHover:"hover",whileTap:{scale:.95},custom:j,children:T},j))})]})]}),C.jsxs(LC,{variants:l,children:[x("Programming Languages",WC,"Percentage represents knowledge depth and practical experience level.","programming"),x("Frameworks & Libraries",HC,null,"frameworks"),x("Databases & Systems",KC,null,"databases"),x("Development Tools",GC,null,"devTools")]})]})]})})},XC=I.section`
  padding: 4rem 2rem;
  background-color: ${({theme:t})=>t.colors.background};
  color: ${({theme:t})=>t.colors.text};
  min-height: 50vh;
  position: relative;
  width: 100%;
  display: block;
`,qC=I.div`
  max-width: 1000px;
  margin: 0 auto;
`,ZC=I(ce.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${({theme:t})=>t.colors.text};

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`,JC=I.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({theme:t})=>t.colors.accent}, transparent);
  width: 100px;
  margin: 0.75rem auto 2.5rem;
`,eP=I(ce.div)`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, ${({theme:t})=>t.colors.accent}, ${({theme:t})=>t.colors.accentHover}, transparent);
  }

  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`,tP=I(ce.div)`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -1.75rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({theme:t})=>t.colors.accent};
    border: 3px solid ${({theme:t})=>t.colors.background};
    box-shadow: 0 0 0 2px ${({theme:t})=>t.colors.accent};
  }

  @media (min-width: 768px) {
    padding-left: 2.5rem;
    
    &::before {
      left: -2.25rem;
    }
  }
`,nP=I.div`
  background: ${({theme:t})=>t.colors.cardBg};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({theme:t})=>t.colors.accent};
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({theme:t})=>t.colors.accent};
    transform: translateX(5px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);

    &::before {
      transform: scaleY(1);
    }
  }
`,rP=I.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,iP=I.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({theme:t})=>t.colors.accent};
  }
`,oP=I.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.accent};
  margin: 0;
`,sP=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({theme:t})=>t.colors.textSecondary};
`,Am=I.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.9rem;
  }
`,aP=I.p`
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`,lP=I.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,uP=I.li`
  color: ${({theme:t})=>t.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({theme:t})=>t.colors.accent};
    font-size: 1rem;
  }
`,cP=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:t})=>t.colors.border};
`,dP=I.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: ${({theme:t})=>t.colors.accent}15;
  color: ${({theme:t})=>t.colors.accent};
  border-radius: 4px;
  border: 1px solid ${({theme:t})=>t.colors.accent}30;
`,fP=[{title:"Object-Oriented Programming Instructor",company:"Eötvös Loránd Tudományegyetem",location:"Budapest, Hungary",period:"2025 - Present",description:"Teaching Java OOP to undergraduates (labs + lectures).",responsibilities:[" Explaining core concepts: encapsulation, inheritance, polymorphism, interfaces"," Designing weekly assignments + practical coding exercises"," Mentoring students on clean code, debugging, and problem-solving"," Coordinating with the department to ensure course quality and academic standards"," Grading students on Neptun platform."],technologies:["React","Python","FastAPI","JavaScript","SQL","Git"]},{title:"Web Development Intern",company:"LimeLight",location:"Oslo, Norway",period:"2025, Sep - 2025, Dec",description:" Worked on frontend features using React.",responsibilities:[" Built reusable components, handled state management, and integrated REST APIs."," Fixed UI bugs, improved page load times, and refactored legacy code into cleaner, modular structures."," Shipped features under short deadlines without breaking existing pages."],technologies:["Java","Python","C","C#","Algorithms","Data Structures"]}],pP=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},r={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.5,ease:[.6,-.05,.01,.99]}}};return C.jsx(XC,{id:"experience",children:C.jsxs(qC,{children:[C.jsx(ZC,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Experience"}),C.jsx(JC,{}),C.jsx(eP,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:fP.map((o,s)=>C.jsx(tP,{variants:r,children:C.jsxs(nP,{children:[C.jsx(rP,{children:C.jsxs("div",{children:[C.jsxs(iP,{children:[C.jsx(xx,{}),o.title]}),C.jsx(oP,{children:o.company})]})}),C.jsxs(sP,{children:[C.jsxs(Am,{children:[C.jsx(wx,{}),o.period]}),C.jsxs(Am,{children:[C.jsx(bx,{}),o.location]})]}),C.jsx(aP,{children:o.description}),C.jsx(lP,{children:o.responsibilities.map((l,d)=>C.jsx(uP,{children:l},d))}),C.jsx(cP,{children:o.technologies.map((l,d)=>C.jsx(dP,{children:l},d))})]})},s))})]})})},hP=I.section`
  padding: 3rem 2rem;
  background-color: ${({theme:t})=>t.colors.backgroundSecondary};
  color: ${({theme:t})=>t.colors.text};
  min-height: 100vh;
`,mP=I.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`,gP=I(ce.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({theme:t})=>t.colors.text};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`,yP=I(ce.p)`
  text-align: center;
  color: ${({theme:t})=>t.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,vP=I.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({theme:t})=>t.colors.accent}, transparent);
  width: 100px;
  margin: 1rem auto 3rem;
`,jm=I(ce.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ju=I(ce.div)`
  background: linear-gradient(145deg, #1a1a1f, #121216);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.28s ease;

  box-shadow:
    0 8px 20px rgba(0,0,0,0.35),
    0 16px 40px rgba(0,0,0,0.45);

  &:hover {
    transform: translateY(-12px) scale(1.03);
    border-color: ${({theme:t})=>t.colors.accent};
    box-shadow:
      0 12px 28px rgba(0,0,0,0.45),
      0 22px 50px rgba(0,0,0,0.55);
  }
`,Rm=I.div`
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url('${t=>t.$imageUrl||""}') center/cover;

    opacity: 1;
    transition: transform 0.4s ease;
  }

  /* smooth zoom on hover */
  ${Ju}:hover &::before {
    transform: scale(1.08);
  }
`;I.div`
  font-size: 3rem;
  color: ${({theme:t})=>t.colors.accent};
  opacity: 0.5;
`;const Lm=I.div`
  padding: 1.5rem;
`,Mm=I.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({theme:t})=>t.colors.text};
`,Dm=I.p`
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Su=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Fi=I.span`
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  background: ${({theme:t})=>t.colors.accent}15;
  color: ${({theme:t})=>t.colors.accent};
  border-radius: 4px;
  border: 1px solid ${({theme:t})=>t.colors.accent}30;
`;I.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;I.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:t})=>t.colors.accent};
  }
`;const _m=I.button`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1px solid ${({theme:t})=>t.colors.accent};
  color: ${({theme:t})=>t.colors.accent};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.background};
  }
`,xP=I(ce.div)`
  position: fixed;
  inset: 0;
  background: ${({theme:t})=>t.colors.overlay};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(4px);
`,wP=I(ce.div)`
  background: ${({theme:t})=>t.colors.cardBg};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({theme:t})=>t.shadows.modal};
`,SP=I.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({theme:t})=>t.colors.cardBg};
  border: 1px solid ${({theme:t})=>t.colors.border};
  color: ${({theme:t})=>t.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.background};
    border-color: ${({theme:t})=>t.colors.accent};
  }
`,kP=I.div`
  width: 100%;
  height: 300px;
  background: null;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: ${t=>t.$imageUrl?.4:0};
background: url('${t=>t.$imageUrl||""}') center/cover;

  }
`,CP=I.div`
  padding: 2rem;
`,PP=I.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({theme:t})=>t.colors.text};
`,TP=I.p`
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`,bP=I.div`
  margin-bottom: 2rem;
`,EP=I.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({theme:t})=>t.colors.text};
`,AP=I.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,ty=I.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({theme:t})=>t.colors.accent};
  color: ${({theme:t})=>t.colors.background};
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({theme:t})=>t.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
  }
`,jP=I(ty)`
  background: transparent;
  border: 2px solid ${({theme:t})=>t.colors.accent};
  color: ${({theme:t})=>t.colors.accent};

  &:hover {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.background};
  }
`,RP=[{id:1,title:"PeerPrep",description:"PeerPrep is a full-stack study-group platform built with FastAPI on the backend and React on the frontend. It lets users create and join study events, chat in real time, and improve their event descriptions and cover images with integrated AI. The system uses WebSockets for messaging and applies vector clock synchronization to keep messages in causal order across clients. It includes JWT authentication with Argon2 hashing, an XP and streak-based gamification engine, and a responsive interface built with TailwindCSS. Performance is improved with caching, lazy loading, optimistic updates, and GZip compression. The backend uses SQLModel with a normalized SQLite schema and follows a modular service-based architecture. The project demonstrates skills in backend engineering with FastAPI, frontend development with React, real-time communication, distributed system concepts, OpenAI API integration, authentication and security, API design, caching strategies, and production-grade error handling.",longDescription:"PeerPrep is a full-stack study-group platform built with FastAPI on the backend and React on the frontend. It lets users create and join study events, chat in real time, and improve their event descriptions and cover images with integrated AI. The system uses WebSockets for messaging and applies vector clock synchronization to keep messages in causal order across clients. It includes JWT authentication with Argon2 hashing, an XP and streak-based gamification engine, and a responsive interface built with TailwindCSS. Performance is improved with caching, lazy loading, optimistic updates, and GZip compression. The backend uses SQLModel with a normalized SQLite schema and follows a modular service-based architecture. The project demonstrates skills in backend engineering with FastAPI, frontend development with React, real-time communication, distributed system concepts, OpenAI API integration, authentication and security, API design, caching strategies, and production-grade error handling.",repoLink:"https://github.com/khayrullo-isomiddinov/PeerPrep",liveLink:"https://github.com/khayrullo-isomiddinov/PeerPrep",techStack:["FastAPI","SQLModel","SQLite","WebSockets","JWT Auth","React 19","WebSockets with vector-clock synchronization","OpenAI API","CORS rules"],imageUrl:new URL("/assets/peerprep-DpTdI_Oe.webp",import.meta.url).href},{id:2,title:"Polaris LMS",description:"Learning Management System (LMS) is a full-stack web application built with Laravel that handles course and assignment management for teachers and students. Teachers can create subjects, add assignments with deadlines and point values, and grade student submissions with feedback. Students can enroll in subjects, view assignments, and submit their work. The system includes authentication, profile management, and role-based dashboards. The interface is responsive and styled with Tailwind CSS. It uses Laravel 12, PHP 8.2+, Laravel Breeze, SQLite, Blade, and Tailwind. The project demonstrates full-stack PHP development, database modeling with Eloquent ORM, REST routing, role-based access control, form validation, and secure authentication.",longDescription:"Learning Management System (LMS) is a full-stack web application built with Laravel that handles course and assignment management for teachers and students. Teachers can create subjects, add assignments with deadlines and point values, and grade student submissions with feedback. Students can enroll in subjects, view assignments, and submit their work. The system includes authentication, profile management, and role-based dashboards. The project demonstrates full-stack PHP development, database modeling with Eloquent ORM, REST routing, role-based access control, form validation, and secure authentication.",repoLink:"https://github.com/khayrullo-isomiddinov/polarisLMS",liveLink:"https://github.com/khayrullo-isomiddinov/polarisLMS",techStack:["Laravel 12","PHP 8","Blade Template","SQLite","MVC Architecture","Composer"],imageUrl:new URL("/assets/polaris-QeVXKL1R.webp",import.meta.url).href},{id:3,title:"Booklovers-Hub",description:"Booklovers-Hub is a web application built with Laravel and Blade templating that offers a social platform for readers. Users can create accounts, follow or unfollow other users, share books, leave reviews, and build their own virtual book collections. The system supports user profiles, book records, reviews, social connections, and book sharing — enabling a community-driven reading experience. Built with PHP and Laravel, it uses relational database architecture, secure authentication and authorization, and a responsive UI for smooth user interaction. The project demonstrates full-stack web development, database modeling, user-management logic, social-feature implementation, and skill with Laravel ecosystem.",longDescription:"Booklovers-Hub is a web application built with Laravel and Blade templating that offers a social platform for readers. Users can create accounts, follow or unfollow other users, share books, leave reviews, and build their own virtual book collections. The system supports user profiles, book records, reviews, social connections, and book sharing — enabling a community-driven reading experience. Built with PHP and Laravel, it uses relational database architecture, secure authentication and authorization, and a responsive UI for smooth user interaction. The project demonstrates full-stack web development, database modeling, user-management logic, social-feature implementation, and skill with Laravel ecosystem.",repoLink:"https://github.com/khayrullo-isomiddinov/booklovers-hub",liveLink:"https://github.com/khayrullo-isomiddinov/booklovers-hub",techStack:["PHP","MySQL","HTML","CSS","JavaScript"],imageUrl:new URL("/assets/books-D7j07CDa.webp",import.meta.url).href},{id:4,title:"Stargate Game",description:"An engaging, multiplayer grid-based game designed to enhance my web development skills, where players embark on a strategic quest to locate and collect scattered debris fragments.",longDescription:"Stargate Game is a multiplayer web-based game that combines strategy and exploration. Players navigate through a grid-based world, searching for debris fragments while competing with other players. The game features real-time multiplayer functionality, dynamic game mechanics, and an engaging user interface. Built to showcase advanced web development skills, this project demonstrates proficiency in frontend frameworks, real-time communication, and game development principles.",repoLink:"https://github.com/khayrullo-isomiddinov/Stargate-Game",liveLink:"https://6797fbbf6daef38935426e97--gentle-frangollo-fbc645.netlify.app/",techStack:["HTML"," CSS","JavaScript"],imageUrl:new URL("/assets/gate-8jAZuy7g.webp",import.meta.url).href},{id:5,title:"Comment Remover",description:"A VSCode extension to remove comments. Supports JavaScript, TypeScript, Python, C, C++, PHP, and Java. Streamline your code cleanup process with this powerful developer tool.",longDescription:"Comment Remover is a Visual Studio Code extension designed to help developers quickly clean up their code by removing comments. The extension supports multiple programming languages including JavaScript, TypeScript, Python, C, C++, PHP, and Java. It features intelligent comment detection, batch processing capabilities, and customizable options for different comment styles. This tool has been downloaded by thousands of developers and has received positive feedback for its reliability and ease of use.",repoLink:"https://github.com/khayrullo-isomiddinov/comment-remover-vscode-ext",liveLink:"https://marketplace.visualstudio.com/items?itemName=KhayrulloIsomiddinov.khayrullo-comment-remover&ssr=false#review-details",techStack:["TypeScript","VSCode API","Node.js"],imageUrl:new URL("/assets/vscode-B3grwhrQ.webp",import.meta.url).href},{id:6,title:"MoodLens: AI Therapist",description:"MoodLens is an AI-powered augmented reality (AR) application designed to analyze emotional states and enhance well-being. Using facial recognition, voice analysis, and interactive AR therapy, MoodLens provides real-time insights and tools for emotional balance.",longDescription:"MoodLens is an AI-powered augmented reality (AR) application designed to analyze emotional states and enhance well-being. Using facial recognition, voice analysis, and interactive AR therapy, MoodLens provides real-time insights and tools for emotional balance.",repoLink:"https://github.com/khayrullo-isomiddinov/mood-lens",liveLink:"https://khayrullo-isomiddinov.github.io/mood-lens/",techStack:["React","Node.js"],imageUrl:new URL("/assets/moodlens-Lv4Ls4NP.webp",import.meta.url).href}],LP=I.button`
  padding: 0.6rem 1.2rem;
  background: transparent;
  border: 1px solid ${({theme:t})=>t.colors.accent};
  color: ${({theme:t})=>t.colors.accent};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 2rem auto 0;
  display: block;
  width: fit-content;

  &:hover {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.background};
  }
`,MP=[{id:101,title:"Knights Game",description:"A Java Swing application implementing a “Knight Tournament” strategy game on an NxN grid. Two white and two black knights move in legal chess knight patterns, painting tiles with their color. The goal is to form four connected painted tiles in a line. Includes full turn-based logic, win detection, move validation, and a resizable GUI with interactive board controls.",longDescription:"A Java Swing application implementing a “Knight Tournament” strategy game on an NxN grid. Two white and two black knights move in legal chess knight patterns, painting tiles with their color. The goal is to form four connected painted tiles in a line. Includes full turn-based logic, win detection, move validation, and a resizable GUI with interactive board controls.",repoLink:"https://github.com/khayrullo-isomiddinov",liveLink:"#",techStack:["Java OOP","Swing GUI programming","Event-driven design","State management"],imageUrl:new URL("/assets/java-BPKbiFFT.webp",import.meta.url).href}],DP=()=>{const[t,r]=G.useState(null),[o,s]=G.useState(!1),l=g=>{r(g),document.body.style.overflow="hidden"},d=()=>{r(null),document.body.style.overflow="unset"},f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.6,-.05,.01,.99]}}},p={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.3,ease:[.6,-.05,.01,.99]}},exit:{opacity:0,scale:.9,transition:{duration:.2}}};return C.jsxs(hP,{id:"projects",children:[C.jsxs(mP,{children:[C.jsx(gP,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Featured Projects"}),C.jsx(yP,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Here are some of my recent projects. Click on any project to learn more."}),C.jsx(vP,{}),C.jsx(jm,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"0px"},children:RP.map(g=>C.jsxs(Ju,{variants:h,onClick:()=>l(g),whileHover:{scale:1.02},whileTap:{scale:.98},children:[C.jsx(Rm,{$imageUrl:g.imageUrl}),C.jsxs(Lm,{children:[C.jsx(Mm,{children:g.title}),C.jsx(Dm,{children:g.description}),C.jsxs(Su,{children:[g.techStack.slice(0,3).map((y,v)=>C.jsx(Fi,{children:y},v)),g.techStack.length>3&&C.jsxs(Fi,{children:["+",g.techStack.length-3," more"]})]}),C.jsx(_m,{children:"View Details"})]})]},g.id))}),C.jsx(LP,{onClick:()=>s(!o),children:o?"Hide Minor Projects":"View Minor Projects"}),o&&C.jsx(jm,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0},style:{marginTop:"2rem"},children:MP.map(g=>C.jsxs(Ju,{variants:h,onClick:()=>l(g),whileHover:{scale:1.02},whileTap:{scale:.98},children:[C.jsx(Rm,{imageUrl:g.imageUrl}),C.jsxs(Lm,{children:[C.jsx(Mm,{children:g.title}),C.jsx(Dm,{children:g.description}),C.jsxs(Su,{children:[g.techStack.slice(0,3).map((y,v)=>C.jsx(Fi,{children:y},v)),g.techStack.length>3&&C.jsxs(Fi,{children:["+",g.techStack.length-3," more"]})]}),C.jsx(_m,{children:"View Details"})]})]},g.id))})]}),C.jsx(fc,{children:t&&C.jsx(xP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:d,children:C.jsxs(wP,{variants:p,initial:"hidden",animate:"visible",exit:"exit",onClick:g=>g.stopPropagation(),children:[C.jsx(SP,{onClick:d,children:C.jsx(bg,{size:20})}),C.jsx(kP,{$imageUrl:t.imageUrl}),C.jsxs(CP,{children:[C.jsx(PP,{children:t.title}),C.jsx(TP,{children:t.longDescription}),C.jsxs(bP,{children:[C.jsx(EP,{children:"Technologies Used"}),C.jsx(Su,{children:t.techStack.map((g,y)=>C.jsx(Fi,{children:g},y))})]}),C.jsxs(AP,{children:[t.liveLink&&C.jsxs(ty,{href:t.liveLink,target:"_blank",rel:"noreferrer",children:[C.jsx(Cx,{size:18}),"View Live"]}),t.repoLink&&C.jsxs(jP,{href:t.repoLink,target:"_blank",rel:"noreferrer",children:[C.jsx(Px,{size:18}),"View Code"]})]})]})]})})})]})};var ku={exports:{}},Cu,Im;function _P(){if(Im)return Cu;Im=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Cu=t,Cu}var Pu,Om;function IP(){if(Om)return Pu;Om=1;var t=_P();function r(){}function o(){}return o.resetWarningCache=r,Pu=function(){function s(f,h,p,g,y,v){if(v!==t){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}s.isRequired=s;function l(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:o,resetWarningCache:r};return d.PropTypes=d,d},Pu}var Vm;function OP(){return Vm||(Vm=1,ku.exports=IP()()),ku.exports}var VP=OP();const ze=tc(VP);function $m(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),o.push.apply(o,s)}return o}function Nm(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?$m(Object(o),!0).forEach(function(s){ny(t,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):$m(Object(o)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))})}return t}function Is(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Is=function(r){return typeof r}:Is=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Is(t)}function ny(t,r,o){return r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function $P(t,r){return NP(t)||zP(t,r)||FP(t,r)||BP()}function NP(t){if(Array.isArray(t))return t}function zP(t,r){var o=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(o!=null){var s=[],l=!0,d=!1,f,h;try{for(o=o.call(t);!(l=(f=o.next()).done)&&(s.push(f.value),!(r&&s.length===r));l=!0);}catch(p){d=!0,h=p}finally{try{!l&&o.return!=null&&o.return()}finally{if(d)throw h}}return s}}function FP(t,r){if(t){if(typeof t=="string")return zm(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return zm(t,r)}}function zm(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,s=new Array(r);o<r;o++)s[o]=t[o];return s}function BP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var UP=function(r){var o=ge.useRef(r);return ge.useEffect(function(){o.current=r},[r]),o.current},Ys=function(r){return r!==null&&Is(r)==="object"},Fm="[object Object]",WP=function t(r,o){if(!Ys(r)||!Ys(o))return r===o;var s=Array.isArray(r),l=Array.isArray(o);if(s!==l)return!1;var d=Object.prototype.toString.call(r)===Fm,f=Object.prototype.toString.call(o)===Fm;if(d!==f)return!1;if(!d&&!s)return r===o;var h=Object.keys(r),p=Object.keys(o);if(h.length!==p.length)return!1;for(var g={},y=0;y<h.length;y+=1)g[h[y]]=!0;for(var v=0;v<p.length;v+=1)g[p[v]]=!0;var x=Object.keys(g);if(x.length!==h.length)return!1;var T=r,j=o,b=function(D){return t(T[D],j[D])};return x.every(b)},HP=function(r,o,s){return Ys(r)?Object.keys(r).reduce(function(l,d){var f=!Ys(o)||!WP(r[d],o[d]);return s.includes(d)?(f&&console.warn("Unsupported prop change: options.".concat(d," is not a mutable property.")),l):f?Nm(Nm({},l||{}),{},ny({},d,r[d])):l},null):null},ry=ge.createContext(null);ry.displayName="ElementsContext";var KP=function(r,o){if(!r)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(o," in an <Elements> provider."));return r},iy=ge.createContext(null);iy.displayName="CartElementContext";var GP=function(r,o){if(!r)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(o," in an <Elements> provider."));return r};ze.any,ze.object;var Bm=function(r){var o=ge.useContext(ry);return KP(o,r)},Um=function(r){var o=ge.useContext(iy);return GP(o,r)};ze.func.isRequired;var mt=function(r,o,s){var l=!!s,d=ge.useRef(s);ge.useEffect(function(){d.current=s},[s]),ge.useEffect(function(){if(!l||!r)return function(){};var f=function(){d.current&&d.current.apply(d,arguments)};return r.on(o,f),function(){r.off(o,f)}},[l,o,r,d])},YP=function(r){return r.charAt(0).toUpperCase()+r.slice(1)},Ke=function(r,o){var s="".concat(YP(r),"Element"),l=function(p){var g=p.id,y=p.className,v=p.options,x=v===void 0?{}:v,T=p.onBlur,j=p.onFocus,b=p.onReady,_=p.onChange,D=p.onEscape,O=p.onClick,V=p.onLoadError,H=p.onLoaderStart,F=p.onNetworksChange,U=p.onCheckout,K=p.onLineItemClick,Z=p.onConfirm,ve=p.onCancel,ke=p.onShippingAddressChange,Be=p.onShippingRateChange,Ye=Bm("mounts <".concat(s,">")),Te=Ye.elements,Ue=ge.useState(null),qe=$P(Ue,2),ye=qe[0],de=qe[1],B=ge.useRef(null),Q=ge.useRef(null),R=Um("mounts <".concat(s,">")),S=R.setCart,L=R.setCartState;mt(ye,"blur",T),mt(ye,"focus",j),mt(ye,"escape",D),mt(ye,"click",O),mt(ye,"loaderror",V),mt(ye,"loaderstart",H),mt(ye,"networkschange",F),mt(ye,"lineitemclick",K),mt(ye,"confirm",Z),mt(ye,"cancel",ve),mt(ye,"shippingaddresschange",ke),mt(ye,"shippingratechange",Be);var Y;r==="cart"?Y=function(le){L(le),b&&b(le)}:b&&(r==="payButton"?Y=b:Y=function(){b(ye)}),mt(ye,"ready",Y);var ee=r==="cart"?function(re){L(re),_&&_(re)}:_;mt(ye,"change",ee);var ie=r==="cart"?function(re){L(re),U&&U(re)}:U;mt(ye,"checkout",ie),ge.useLayoutEffect(function(){if(B.current===null&&Te&&Q.current!==null){var re=Te.create(r,x);r==="cart"&&S&&S(re),B.current=re,de(re),re.mount(Q.current)}},[Te,x,S]);var ae=UP(x);return ge.useEffect(function(){if(B.current){var re=HP(x,ae,["paymentRequest"]);re&&B.current.update(re)}},[x,ae]),ge.useLayoutEffect(function(){return function(){B.current&&(B.current.destroy(),B.current=null)}},[]),ge.createElement("div",{id:g,className:y,ref:Q})},d=function(p){Bm("mounts <".concat(s,">")),Um("mounts <".concat(s,">"));var g=p.id,y=p.className;return ge.createElement("div",{id:g,className:y})},f=o?d:l;return f.propTypes={id:ze.string,className:ze.string,onChange:ze.func,onBlur:ze.func,onFocus:ze.func,onReady:ze.func,onEscape:ze.func,onClick:ze.func,onLoadError:ze.func,onLoaderStart:ze.func,onNetworksChange:ze.func,onCheckout:ze.func,onLineItemClick:ze.func,onConfirm:ze.func,onCancel:ze.func,onShippingAddressChange:ze.func,onShippingRateChange:ze.func,options:ze.object},f.displayName=s,f.__elementType=r,f},Ge=typeof window>"u";Ke("auBankAccount",Ge);var QP=Ke("card",Ge);Ke("cardNumber",Ge);Ke("cardExpiry",Ge);Ke("cardCvc",Ge);Ke("fpxBank",Ge);Ke("iban",Ge);Ke("idealBank",Ge);Ke("p24Bank",Ge);Ke("epsBank",Ge);Ke("payment",Ge);Ke("payButton",Ge);Ke("paymentRequestButton",Ge);Ke("linkAuthentication",Ge);Ke("address",Ge);Ke("shippingAddress",Ge);Ke("cart",Ge);Ke("paymentMethodMessaging",Ge);Ke("affirmMessage",Ge);Ke("afterpayClearpayMessage",Ge);var Tu,Wm;function XP(){if(Wm)return Tu;Wm=1;var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,l=(R,S)=>{for(var L in S)t(R,L,{get:S[L],enumerable:!0})},d=(R,S,L,Y)=>{if(typeof S=="object"||typeof S=="function")for(let ee of o(S))!s.call(R,ee)&&ee!==L&&t(R,ee,{get:()=>S[ee],enumerable:!(Y=r(S,ee))||Y.enumerable});return R},f=R=>d(t({},"__esModule",{value:!0}),R),h=(R,S,L)=>new Promise((Y,ee)=>{var ie=le=>{try{re(L.next(le))}catch(he){ee(he)}},ae=le=>{try{re(L.throw(le))}catch(he){ee(he)}},re=le=>le.done?Y(le.value):Promise.resolve(le.value).then(ie,ae);re((L=L.apply(R,S)).next())}),p={};l(p,{SubmissionError:()=>H,appendExtraData:()=>Te,createClient:()=>de,getDefaultClient:()=>B,isSubmissionError:()=>V}),Tu=f(p);var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function v(R){R=String(R);for(var S,L,Y,ee,ie="",ae=0,re=R.length%3;ae<R.length;){if((L=R.charCodeAt(ae++))>255||(Y=R.charCodeAt(ae++))>255||(ee=R.charCodeAt(ae++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");S=L<<16|Y<<8|ee,ie+=g.charAt(S>>18&63)+g.charAt(S>>12&63)+g.charAt(S>>6&63)+g.charAt(S&63)}return re?ie.slice(0,re-3)+"===".substring(re):ie}function x(R){if(R=String(R).replace(/[\t\n\f\r ]+/g,""),!y.test(R))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");R+="==".slice(2-(R.length&3));for(var S,L="",Y,ee,ie=0;ie<R.length;)S=g.indexOf(R.charAt(ie++))<<18|g.indexOf(R.charAt(ie++))<<12|(Y=g.indexOf(R.charAt(ie++)))<<6|(ee=g.indexOf(R.charAt(ie++))),L+=Y===64?String.fromCharCode(S>>16&255):ee===64?String.fromCharCode(S>>16&255,S>>8&255):String.fromCharCode(S>>16&255,S>>8&255,S&255);return L}var T=()=>navigator.webdriver||!!document.documentElement.getAttribute(x("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,j=class{constructor(){this.loadedAt=Date.now(),this.webdriver=T()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},b=class{constructor(R){this.kind="success",this.next=R.next}};function _(R){return"next"in R&&typeof R.next=="string"}var D=class{constructor(R,S){this.paymentIntentClientSecret=R,this.resubmitKey=S,this.kind="stripePluginPending"}};function O(R){if("stripe"in R&&"resubmitKey"in R&&typeof R.resubmitKey=="string"){let{stripe:S}=R;return typeof S=="object"&&S!=null&&"paymentIntentClientSecret"in S&&typeof S.paymentIntentClientSecret=="string"}return!1}function V(R){return R.kind==="error"}var H=class{constructor(...R){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var S;for(let L of R){if(!L.field){this.formErrors.push({code:L.code&&F(L.code)?L.code:"UNSPECIFIED",message:L.message});continue}let Y=(S=this.fieldErrors.get(L.field))!=null?S:[];Y.push({code:L.code&&K(L.code)?L.code:"UNSPECIFIED",message:L.message}),this.fieldErrors.set(L.field,Y)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(R){var S;return(S=this.fieldErrors.get(R))!=null?S:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function F(R){return R in U}var U={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function K(R){return R in Z}var Z={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function ve(R){return"errors"in R&&Array.isArray(R.errors)&&R.errors.every(S=>typeof S.message=="string")||"error"in R&&typeof R.error=="string"}var ke="3.0.1",Be=R=>v(JSON.stringify(R)),Ye=R=>{let S=`@formspree/core@${ke}`;return R?`${R} ${S}`:S};function Te(R,S,L){R instanceof FormData?R.append(S,L):R[S]=L}function Ue(R){return R!==null&&typeof R=="object"}var qe=class{constructor(R={}){this.project=R.project,this.stripe=R.stripe,typeof window<"u"&&(this.session=new j)}submitForm(R,S){return h(this,arguments,function*(L,Y,ee={}){let ie=ee.endpoint||"https://formspree.io",ae=this.project?`${ie}/p/${this.project}/f/${L}`:`${ie}/f/${L}`,re={Accept:"application/json","Formspree-Client":Ye(ee.clientName)};this.session&&(re["Formspree-Session-Data"]=Be(this.session.data())),Y instanceof FormData||(re["Content-Type"]="application/json");function le(Le){return h(this,null,function*(){try{let Se=yield(yield fetch(ae,{method:"POST",mode:"cors",body:Le instanceof FormData?Le:JSON.stringify(Le),headers:re})).json();if(Ue(Se)){if(ve(Se))return Array.isArray(Se.errors)?new H(...Se.errors):new H({message:Se.error});if(O(Se))return new D(Se.stripe.paymentIntentClientSecret,Se.resubmitKey);if(_(Se))return new b({next:Se.next})}return new H({message:"Unexpected response format"})}catch(Se){let st=Se instanceof Error?Se.message:`Unknown error while posting to Formspree: ${JSON.stringify(Se)}`;return new H({message:st})}})}if(this.stripe&&ee.createPaymentMethod){let Le=yield ee.createPaymentMethod();if(Le.error)return new H({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});Te(Y,"paymentMethod",Le.paymentMethod.id);let Se=yield le(Y);if(Se.kind==="error")return Se;if(Se.kind==="stripePluginPending"){let st=yield this.stripe.handleCardAction(Se.paymentIntentClientSecret);if(st.error)return new H({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});Y instanceof FormData?Y.delete("paymentMethod"):delete Y.paymentMethod,Te(Y,"paymentIntent",st.paymentIntent.id),Te(Y,"resubmitKey",Se.resubmitKey);let zn=yield le(Y);return ye(zn),zn}return Se}let he=yield le(Y);return ye(he),he})}};function ye(R){let{kind:S}=R;if(S!=="success"&&S!=="error")throw new Error(`Unexpected submission result (kind: ${S})`)}var de=R=>new qe(R),B=()=>(Q||(Q=de()),Q),Q;return Tu}var ec=XP(),bs={},Hm;function qP(){if(Hm)return bs;Hm=1,Object.defineProperty(bs,"__esModule",{value:!0});function t(j){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(b){return typeof b}:t=function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},t(j)}var r="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,s="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=function(){for(var b=document.querySelectorAll('script[src^="'.concat(r,'"]')),_=0;_<b.length;_++){var D=b[_];if(o.test(D.src))return D}return null},d=function(b){var _=b&&!b.advancedFraudSignals?"?advancedFraudSignals=false":"",D=document.createElement("script");D.src="".concat(r).concat(_);var O=document.head||document.body;if(!O)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return O.appendChild(D),D},f=function(b,_){!b||!b._registerWrapper||b._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:_})},h=null,p=function(b){return h!==null||(h=new Promise(function(_,D){if(typeof window>"u"||typeof document>"u"){_(null);return}if(window.Stripe&&b&&console.warn(s),window.Stripe){_(window.Stripe);return}try{var O=l();O&&b?console.warn(s):O||(O=d(b)),O.addEventListener("load",function(){window.Stripe?_(window.Stripe):D(new Error("Stripe.js not available"))}),O.addEventListener("error",function(){D(new Error("Failed to load Stripe.js"))})}catch(V){D(V);return}})),h},g=function(b,_,D){if(b===null)return null;var O=b.apply(void 0,_);return f(O,D),O},y=function(b){var _=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(b),`
`);if(b===null||t(b)!=="object")throw new Error(_);if(Object.keys(b).length===1&&typeof b.advancedFraudSignals=="boolean")return b;throw new Error(_)},v,x=!1,T=function(){for(var b=arguments.length,_=new Array(b),D=0;D<b;D++)_[D]=arguments[D];x=!0;var O=Date.now();return p(v).then(function(V){return g(V,_,O)})};return T.setLoadParameters=function(j){if(x&&v){var b=y(j),_=Object.keys(b),D=_.reduce(function(O,V){var H;return O&&j[V]===((H=v)===null||H===void 0?void 0:H[V])},!0);if(D)return}if(x)throw new Error("You cannot change load parameters after calling loadStripe");v=y(j)},bs.loadStripe=T,bs}var bu,Km;function ZP(){return Km||(Km=1,bu=qP()),bu}ZP();function Gm(t){let{prefix:r,field:o,errors:s,...l}=t;if(s==null)return null;let d=o?s.getFieldErrors(o):s.getFormErrors();return d.length===0?null:ge.createElement("div",{...l},r?`${r} `:null,d.map(f=>f.message).join(", "))}var JP=ge.createContext(null);function e5(){return G.useContext(JP)??{client:ec.getDefaultClient()}}var t5="2.5.1",n5=`@formspree/react@${t5}`;function r5(t,r={}){let o=e5(),{client:s=o.client,extraData:l,onError:d,onSuccess:f,origin:h}=r,{stripe:p}=s,g=G.useMemo(()=>p==null?void 0:p.elements().getElement(QP),[p]);return async function(y){let v=i5(y)?o5(y):y;if(typeof l=="object")for(let[T,j]of Object.entries(l)){let b;typeof j=="function"?b=await j():b=j,b!==void 0&&ec.appendExtraData(v,T,b)}let x=await s.submitForm(t,v,{endpoint:h,clientName:n5,createPaymentMethod:p&&g?()=>p.createPaymentMethod({type:"card",card:g,billing_details:s5(v)}):void 0});ec.isSubmissionError(x)?d==null||d(x):f==null||f(x)}}function i5(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function o5(t){t.preventDefault();let r=t.currentTarget;if(r.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(r)}function s5(t){let r={address:a5(t)};for(let o of["name","email","phone"]){let s=t instanceof FormData?t.get(o):t[o];s&&typeof s=="string"&&(r[o]=s)}return r}function a5(t){let r={};for(let[o,s]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let l=t instanceof FormData?t.get(o):t[o];l&&typeof l=="string"&&(r[s]=l)}return r}function l5(t,r={}){let[o,s]=G.useState(null),[l,d]=G.useState(null),[f,h]=G.useState(!1),[p,g]=G.useState(!1),y=r5(t,{client:r.client,extraData:r.data,onError(v){s(v),h(!1),g(!1)},onSuccess(v){s(null),d(v),h(!1),g(!0)},origin:r.endpoint});return[{errors:o,result:l,submitting:f,succeeded:p},async function(v){h(!0),await y(v)},function(){s(null),d(null),h(!1),g(!1)}]}const Ym=I.section`
  scroll-margin-top: 80px;
  padding: 3rem 2rem;
  text-align: center;
  background-color: ${({theme:t})=>t.colors.background};
  color: ${({theme:t})=>t.colors.text};
  position: relative;
  overflow: hidden;
`,Qm=I.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,u5=I(ce.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({theme:t})=>t.colors.text};
  background: linear-gradient(135deg, ${({theme:t})=>t.colors.text}, ${({theme:t})=>t.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,c5=I(ce.p)`
  color: ${({theme:t})=>t.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
`,d5=I.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({theme:t})=>t.colors.accent}, transparent);
  width: 100px;
  margin: 0 auto 1.5rem;
`,f5=I(ce.form)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({theme:t})=>t.colors.cardBg};
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t.colors.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({theme:t})=>t.colors.accent}, ${({theme:t})=>t.colors.accentHover});
  }
`,Xm=I.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  position: relative;
`,qm=I.label`
  color: ${({theme:t})=>t.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,p5=I.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({theme:t})=>t.colors.border};
  border-radius: 8px;
  background: ${({theme:t})=>t.colors.background};
  color: ${({theme:t})=>t.colors.text};
  font-size: 0.95rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.accent};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.accent}15,
                0 4px 12px ${({theme:t})=>t.colors.accent}20;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${({theme:t})=>t.colors.textSecondary};
    opacity: 0.6;
  }
`,h5=I.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({theme:t})=>t.colors.border};
  border-radius: 8px;
  background: ${({theme:t})=>t.colors.background};
  color: ${({theme:t})=>t.colors.text};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.3s ease;
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.accent};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.accent}15,
                0 4px 12px ${({theme:t})=>t.colors.accent}20;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${({theme:t})=>t.colors.textSecondary};
    opacity: 0.6;
  }
`,m5=I(ce.button)`
  background: linear-gradient(135deg, ${({theme:t})=>t.colors.accent}, ${({theme:t})=>t.colors.accentHover});
  color: ${({theme:t})=>t.colors.background};
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,g5=I(ce.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
  background: ${({theme:t})=>t.colors.cardBg};
  border-radius: 16px;
  border: 1px solid ${({theme:t})=>t.colors.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,y5=I.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({theme:t})=>t.colors.accent}, ${({theme:t})=>t.colors.accentHover});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({theme:t})=>t.colors.background};
  margin-bottom: 0.5rem;
`,v5=I.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.accent};
  margin-bottom: 0.25rem;
`,x5=I.p`
  font-size: 0.95rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.6;
  max-width: 450px;
`;I.div`
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;const w5=()=>{const[t,r]=l5("mdkaewvz");return t.succeeded?C.jsx(Ym,{id:"contact",children:C.jsx(Qm,{children:C.jsxs(g5,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},children:[C.jsx(y5,{children:"✓"}),C.jsx(v5,{children:"Message Sent!"}),C.jsx(x5,{children:"I've received your message and will get back to you as soon as possible. Looking forward to connecting with you!"})]})})}):C.jsx(Ym,{id:"contact",children:C.jsxs(Qm,{children:[C.jsx(u5,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Get In Touch"}),C.jsx(c5,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Whether you want to discuss a project, collaborate, or just say hello, feel free to drop a message. I'll get back to you as soon as I can!"}),C.jsx(d5,{}),C.jsxs(f5,{onSubmit:r,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[C.jsxs(Xm,{children:[C.jsxs(qm,{htmlFor:"email",children:[C.jsx(Tx,{size:16}),"Email Address"]}),C.jsx(p5,{id:"email",type:"email",name:"email",placeholder:"your.email@example.com",required:!0}),C.jsx(Gm,{prefix:"Email",field:"email",errors:t.errors})]}),C.jsxs(Xm,{children:[C.jsxs(qm,{htmlFor:"message",children:[C.jsx(lh,{size:16}),"Message"]}),C.jsx(h5,{id:"message",name:"message",placeholder:"Tell me about your project, idea, or just say hello...",required:!0}),C.jsx(Gm,{prefix:"Message",field:"message",errors:t.errors})]}),C.jsxs(m5,{type:"submit",disabled:t.submitting,whileHover:{scale:1.02},whileTap:{scale:.98},children:[C.jsx(lh,{size:18}),t.submitting?"Sending...":"Send Message"]})]})]})})};function S5(t){return yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(t)}function k5(t){return yt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function C5(t){return yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function P5(t){return yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}const T5=I.footer`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  color: ${({theme:t})=>t.colors.textSecondary};
  border-top: 1px solid ${({theme:t})=>t.colors.border};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({theme:t})=>t.colors.accent}40, transparent);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 2rem;
  }
`,b5=I.div`
  display: flex;
  align-items: center;
`,E5=I.div`
  display: flex;
  align-items: center;
`,A5=I.div`
  display: flex;
  align-items: center;
`,j5=I.p`
  font-size: 0.85rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  margin: 0;
  opacity: 0.8;
`,R5=I.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({theme:t})=>t.colors.textSecondary};
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    opacity: 0.8;

    &:hover {
      color: ${({theme:t})=>t.colors.accent};
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`,L5=I(ce.a)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({theme:t})=>t.colors.background};
  border: 1px solid ${({theme:t})=>t.colors.border};
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({theme:t})=>t.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.accent};
    background: ${({theme:t})=>t.colors.accent}15;
    transform: translateY(-1px);
  }
`,M5=()=>C.jsxs(T5,{children:[C.jsx(b5,{children:C.jsxs(j5,{children:["© ",new Date().getFullYear()," Khayrullo Isomiddinov"]})}),C.jsx(E5,{children:C.jsxs(R5,{children:[C.jsx(ce.a,{href:"https://github.com/khayrullo-isomiddinov",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(k5,{})}),C.jsx(ce.a,{href:"https://www.linkedin.com/in/khayrullo-isomiddinov",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(P5,{})}),C.jsx(ce.a,{href:"https://www.facebook.com/profile.php?id=100080260460705",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(S5,{})}),C.jsx(ce.a,{href:"https://instagram.com/khayrulloismdnv",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(C5,{})})]})}),C.jsx(A5,{children:C.jsxs(L5,{href:"/resume.pdf",download:"HarryResume.pdf",whileHover:{scale:1.05},whileTap:{scale:.96},children:[C.jsx(kx,{size:14}),"Download CV"]})})]}),D5=()=>C.jsxs(C.Fragment,{children:[C.jsx(sC,{}),C.jsx(wC,{}),C.jsx(QC,{}),C.jsx(pP,{}),C.jsx(DP,{}),C.jsx(w5,{}),C.jsx(M5,{})]}),_5={colors:{background:"#0f0f23",backgroundSecondary:"#1a1a2e",text:"#e4e4e7",textSecondary:"#a1a1aa",accent:"#8b5cf6",accentHover:"#7c3aed",border:"#27272a",shadow:"#000000",mobileMenuBg:"rgba(15, 15, 35, 0.98)",mobileMenuText:"#e4e4e7",overlay:"rgba(0, 0, 0, 0.75)",cardBg:"#1a1a2e",cardHover:"#252538"},fontSizes:{xs:"0.8rem",sm:"1rem",md:"1.2rem",lg:"1.5rem",xl:"2rem","2xl":"3rem"},transitions:{default:"all 0.3s ease-in-out",hover:"color 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out"},shadows:{card:"0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",hover:"0 10px 15px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2)",header:"0 1px 3px rgba(0, 0, 0, 0.4)",modal:"0 25px 50px -12px rgba(0, 0, 0, 0.5)"},animations:{fadeIn:"fadeIn 0.8s ease-out forwards",glow:"glow 1.5s ease-in-out infinite",pulse:"pulse 2s infinite ease-in-out"},breakpoints:{xs:"320px",sm:"480px",md:"768px",lg:"1024px",xl:"1280px"}},I5=dx`
  /* CSS Variables for extra flexibility */
  :root {
    --transition-speed: 0.3s;
    --easing: cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Reset and box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base typography & smooth rendering */
  html, body {
    font-family: 'Inter', sans-serif;
    background: ${({theme:t})=>t.colors.background};
    color: ${({theme:t})=>t.colors.text};
    scroll-behavior: smooth;
    transition: background var(--transition-speed) var(--easing), color var(--transition-speed) var(--easing);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom text selection */
  ::selection {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.background};
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({theme:t})=>t.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme:t})=>t.colors.accent};
    border-radius: 10px;
  }

  /* Global Link Styles */
  a {
    color: ${({theme:t})=>t.colors.accent};
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: color var(--transition-speed) var(--easing);
  }
  a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${({theme:t})=>t.colors.accent};
    transition: width var(--transition-speed) var(--easing);
  }
  a:hover::after {
    width: 100%;
  }

  /* Buttons - styled in components, but base reset */
  button {
    font-family: inherit;
  }

  /* Headings with text-shadow and letter-spacing */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: ${({theme:t})=>t.colors.text};
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    letter-spacing: 1px;
  }

  /* Utility classes */
  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  /* Keyframe Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes glow {
    0% { box-shadow: 0 0 5px ${({theme:t})=>t.colors.accent}; }
    50% { box-shadow: 0 0 20px ${({theme:t})=>t.colors.accent}; }
    100% { box-shadow: 0 0 5px ${({theme:t})=>t.colors.accent}; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;u1.createRoot(document.getElementById("root")).render(C.jsx(ge.StrictMode,{children:C.jsxs(lx,{theme:_5,children:[C.jsx(I5,{}),C.jsx(D5,{})]})}));
