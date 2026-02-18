(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uu={exports:{}},Fi={},cu={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function T1(){if(qp)return me;qp=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,T={};function D(S,L,Y){this.props=S,this.context=L,this.refs=T,this.updater=Y||E}D.prototype.isReactComponent={},D.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},D.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function _(){}_.prototype=D.prototype;function O(S,L,Y){this.props=S,this.context=L,this.refs=T,this.updater=Y||E}var V=O.prototype=new _;V.constructor=O,R(V,D.prototype),V.isPureReactComponent=!0;var W=Array.isArray,$=Object.prototype.hasOwnProperty,U={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function J(S,L,Y){var ee,ie={},ae=null,re=null;if(L!=null)for(ee in L.ref!==void 0&&(re=L.ref),L.key!==void 0&&(ae=""+L.key),L)$.call(L,ee)&&!K.hasOwnProperty(ee)&&(ie[ee]=L[ee]);var le=arguments.length-2;if(le===1)ie.children=Y;else if(1<le){for(var he=Array(le),Le=0;Le<le;Le++)he[Le]=arguments[Le+2];ie.children=he}if(S&&S.defaultProps)for(ee in le=S.defaultProps,le)ie[ee]===void 0&&(ie[ee]=le[ee]);return{$$typeof:e,type:S,key:ae,ref:re,props:ie,_owner:U.current}}function ve(S,L){return{$$typeof:e,type:S.type,key:L,ref:S.ref,props:S.props,_owner:S._owner}}function Ce(S){return typeof S=="object"&&S!==null&&S.$$typeof===e}function Be(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return L[Y]})}var Ye=/\/+/g;function Ee(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Be(""+S.key):L.toString(36)}function Ue(S,L,Y,ee,ie){var ae=typeof S;(ae==="undefined"||ae==="boolean")&&(S=null);var re=!1;if(S===null)re=!0;else switch(ae){case"string":case"number":re=!0;break;case"object":switch(S.$$typeof){case e:case r:re=!0}}if(re)return re=S,ie=ie(re),S=ee===""?"."+Ee(re,0):ee,W(ie)?(Y="",S!=null&&(Y=S.replace(Ye,"$&/")+"/"),Ue(ie,L,Y,"",function(Le){return Le})):ie!=null&&(Ce(ie)&&(ie=ve(ie,Y+(!ie.key||re&&re.key===ie.key?"":(""+ie.key).replace(Ye,"$&/")+"/")+S)),L.push(ie)),1;if(re=0,ee=ee===""?".":ee+":",W(S))for(var le=0;le<S.length;le++){ae=S[le];var he=ee+Ee(ae,le);re+=Ue(ae,L,Y,he,ie)}else if(he=x(S),typeof he=="function")for(S=he.call(S),le=0;!(ae=S.next()).done;)ae=ae.value,he=ee+Ee(ae,le++),re+=Ue(ae,L,Y,he,ie);else if(ae==="object")throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return re}function qe(S,L,Y){if(S==null)return S;var ee=[],ie=0;return Ue(S,ee,"","",function(ae){return L.call(Y,ae,ie++)}),ee}function ye(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var ce={current:null},B={transition:null},Q={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:U};function j(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:qe,forEach:function(S,L,Y){qe(S,function(){L.apply(this,arguments)},Y)},count:function(S){var L=0;return qe(S,function(){L++}),L},toArray:function(S){return qe(S,function(L){return L})||[]},only:function(S){if(!Ce(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},me.Component=D,me.Fragment=i,me.Profiler=l,me.PureComponent=O,me.StrictMode=s,me.Suspense=p,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,me.act=j,me.cloneElement=function(S,L,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=R({},S.props),ie=S.key,ae=S.ref,re=S._owner;if(L!=null){if(L.ref!==void 0&&(ae=L.ref,re=U.current),L.key!==void 0&&(ie=""+L.key),S.type&&S.type.defaultProps)var le=S.type.defaultProps;for(he in L)$.call(L,he)&&!K.hasOwnProperty(he)&&(ee[he]=L[he]===void 0&&le!==void 0?le[he]:L[he])}var he=arguments.length-2;if(he===1)ee.children=Y;else if(1<he){le=Array(he);for(var Le=0;Le<he;Le++)le[Le]=arguments[Le+2];ee.children=le}return{$$typeof:e,type:S.type,key:ie,ref:ae,props:ee,_owner:re}},me.createContext=function(S){return S={$$typeof:f,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},me.createElement=J,me.createFactory=function(S){var L=J.bind(null,S);return L.type=S,L},me.createRef=function(){return{current:null}},me.forwardRef=function(S){return{$$typeof:h,render:S}},me.isValidElement=Ce,me.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:ye}},me.memo=function(S,L){return{$$typeof:m,type:S,compare:L===void 0?null:L}},me.startTransition=function(S){var L=B.transition;B.transition={};try{S()}finally{B.transition=L}},me.unstable_act=j,me.useCallback=function(S,L){return ce.current.useCallback(S,L)},me.useContext=function(S){return ce.current.useContext(S)},me.useDebugValue=function(){},me.useDeferredValue=function(S){return ce.current.useDeferredValue(S)},me.useEffect=function(S,L){return ce.current.useEffect(S,L)},me.useId=function(){return ce.current.useId()},me.useImperativeHandle=function(S,L,Y){return ce.current.useImperativeHandle(S,L,Y)},me.useInsertionEffect=function(S,L){return ce.current.useInsertionEffect(S,L)},me.useLayoutEffect=function(S,L){return ce.current.useLayoutEffect(S,L)},me.useMemo=function(S,L){return ce.current.useMemo(S,L)},me.useReducer=function(S,L,Y){return ce.current.useReducer(S,L,Y)},me.useRef=function(S){return ce.current.useRef(S)},me.useState=function(S){return ce.current.useState(S)},me.useSyncExternalStore=function(S,L,Y){return ce.current.useSyncExternalStore(S,L,Y)},me.useTransition=function(){return ce.current.useTransition()},me.version="18.3.1",me}var Jp;function hc(){return Jp||(Jp=1,cu.exports=T1()),cu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function E1(){if(Zp)return Fi;Zp=1;var e=hc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(h,p,m){var y,v={},x=null,E=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(E=p.ref);for(y in p)s.call(p,y)&&!c.hasOwnProperty(y)&&(v[y]=p[y]);if(h&&h.defaultProps)for(y in p=h.defaultProps,p)v[y]===void 0&&(v[y]=p[y]);return{$$typeof:r,type:h,key:x,ref:E,props:v,_owner:l.current}}return Fi.Fragment=i,Fi.jsx=f,Fi.jsxs=f,Fi}var eh;function b1(){return eh||(eh=1,uu.exports=E1()),uu.exports}var C=b1(),G=hc();const ge=pc(G);var Ps={},du={exports:{}},Pt={},fu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function A1(){return th||(th=1,function(e){function r(B,Q){var j=B.length;B.push(Q);e:for(;0<j;){var S=j-1>>>1,L=B[S];if(0<l(L,Q))B[S]=Q,B[j]=L,j=S;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Q=B[0],j=B.pop();if(j!==Q){B[0]=j;e:for(var S=0,L=B.length,Y=L>>>1;S<Y;){var ee=2*(S+1)-1,ie=B[ee],ae=ee+1,re=B[ae];if(0>l(ie,j))ae<L&&0>l(re,ie)?(B[S]=re,B[ae]=j,S=ae):(B[S]=ie,B[ee]=j,S=ee);else if(ae<L&&0>l(re,j))B[S]=re,B[ae]=j,S=ae;else break e}}return Q}function l(B,Q){var j=B.sortIndex-Q.sortIndex;return j!==0?j:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();e.unstable_now=function(){return f.now()-h}}var p=[],m=[],y=1,v=null,x=3,E=!1,R=!1,T=!1,D=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(B){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=B)s(m),Q.sortIndex=Q.expirationTime,r(p,Q);else break;Q=i(m)}}function W(B){if(T=!1,V(B),!R)if(i(p)!==null)R=!0,ye($);else{var Q=i(m);Q!==null&&ce(W,Q.startTime-B)}}function $(B,Q){R=!1,T&&(T=!1,_(J),J=-1),E=!0;var j=x;try{for(V(Q),v=i(p);v!==null&&(!(v.expirationTime>Q)||B&&!Be());){var S=v.callback;if(typeof S=="function"){v.callback=null,x=v.priorityLevel;var L=S(v.expirationTime<=Q);Q=e.unstable_now(),typeof L=="function"?v.callback=L:v===i(p)&&s(p),V(Q)}else s(p);v=i(p)}if(v!==null)var Y=!0;else{var ee=i(m);ee!==null&&ce(W,ee.startTime-Q),Y=!1}return Y}finally{v=null,x=j,E=!1}}var U=!1,K=null,J=-1,ve=5,Ce=-1;function Be(){return!(e.unstable_now()-Ce<ve)}function Ye(){if(K!==null){var B=e.unstable_now();Ce=B;var Q=!0;try{Q=K(!0,B)}finally{Q?Ee():(U=!1,K=null)}}else U=!1}var Ee;if(typeof O=="function")Ee=function(){O(Ye)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,qe=Ue.port2;Ue.port1.onmessage=Ye,Ee=function(){qe.postMessage(null)}}else Ee=function(){D(Ye,0)};function ye(B){K=B,U||(U=!0,Ee())}function ce(B,Q){J=D(function(){B(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){R||E||(R=!0,ye($))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return i(p)},e.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var j=x;x=Q;try{return B()}finally{x=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=x;x=B;try{return Q()}finally{x=j}},e.unstable_scheduleCallback=function(B,Q,j){var S=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?S+j:S):j=S,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,B={id:y++,callback:Q,priorityLevel:B,startTime:j,expirationTime:L,sortIndex:-1},j>S?(B.sortIndex=j,r(m,B),i(p)===null&&B===i(m)&&(T?(_(J),J=-1):T=!0,ce(W,j-S))):(B.sortIndex=L,r(p,B),R||E||(R=!0,ye($))),B},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(B){var Q=x;return function(){var j=x;x=Q;try{return B.apply(this,arguments)}finally{x=j}}}}(pu)),pu}var nh;function j1(){return nh||(nh=1,fu.exports=A1()),fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function R1(){if(rh)return Pt;rh=1;var e=hc(),r=j1();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(t,n){f(t,n),f(t+"Capture",n)}function f(t,n){for(l[t]=n,t=0;t<n.length;t++)s.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function x(t){return p.call(v,t)?!0:p.call(y,t)?!1:m.test(t)?v[t]=!0:(y[t]=!0,!1)}function E(t,n,o,a){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,n,o,a){if(n===null||typeof n>"u"||E(t,n,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function T(t,n,o,a,u,d,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=d,this.removeEmptyString=g}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){D[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];D[n]=new T(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){D[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){D[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){D[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){D[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){D[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){D[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){D[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function O(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(_,O);D[n]=new T(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(_,O);D[n]=new T(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(_,O);D[n]=new T(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){D[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),D.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){D[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function V(t,n,o,a){var u=D.hasOwnProperty(n)?D[n]:null;(u!==null?u.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(R(n,o,u,a)&&(o=null),a||u===null?x(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,a=u.attributeNamespace,o===null?t.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,a?t.setAttributeNS(a,n,o):t.setAttribute(n,o))))}var W=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),U=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Be=Symbol.for("react.context"),Ye=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,S;function L(t){if(S===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);S=n&&n[1]||""}return`
`+S+t}var Y=!1;function ee(t,n){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(M){var a=M}Reflect.construct(t,[],n)}else{try{n.call()}catch(M){a=M}t.call(n.prototype)}else{try{throw Error()}catch(M){a=M}t()}}catch(M){if(M&&a&&typeof M.stack=="string"){for(var u=M.stack.split(`
`),d=a.stack.split(`
`),g=u.length-1,w=d.length-1;1<=g&&0<=w&&u[g]!==d[w];)w--;for(;1<=g&&0<=w;g--,w--)if(u[g]!==d[w]){if(g!==1||w!==1)do if(g--,w--,0>w||u[g]!==d[w]){var k=`
`+u[g].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=g&&0<=w);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?L(t):""}function ie(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case U:return"Portal";case ve:return"Profiler";case J:return"StrictMode";case Ee:return"Suspense";case Ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Be:return(t.displayName||"Context")+".Consumer";case Ce:return(t._context.displayName||"Context")+".Provider";case Ye:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qe:return n=t.displayName||null,n!==null?n:ae(t.type)||"Memo";case ye:n=t._payload,t=t._init;try{return ae(t(n))}catch{}}return null}function re(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(n);case 8:return n===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function he(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Le(t){var n=he(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),a=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Se(t){t._valueTracker||(t._valueTracker=Le(t))}function st(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),a="";return t&&(a=he(t)?t.checked?"true":"false":t.value),t=a,t!==o?(n.setValue(t),!0):!1}function Bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ga(t,n){var o=n.checked;return j({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function rd(t,n){var o=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;o=le(n.value!=null?n.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function id(t,n){n=n.checked,n!=null&&V(t,"checked",n,!1)}function ya(t,n){id(t,n);var o=le(n.value),a=n.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?va(t,n.type,o):n.hasOwnProperty("defaultValue")&&va(t,n.type,le(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function od(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function va(t,n,o){(n!=="number"||Bn(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ni=Array.isArray;function pr(t,n,o,a){if(t=t.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=n.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&a&&(t[o].defaultSelected=!0)}else{for(o=""+le(o),n=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function xa(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return j({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sd(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(ni(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:le(o)}}function ad(t,n){var o=le(n.value),a=le(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function ld(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function ud(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?ud(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,cd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,a,u){MSApp.execUnsafeLocalFunction(function(){return t(n,o,a,u)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function ri(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ry=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(t){Ry.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),ii[n]=ii[t]})});function dd(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||ii.hasOwnProperty(t)&&ii[t]?(""+n).trim():n+"px"}function fd(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var a=o.indexOf("--")===0,u=dd(o,n[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,u):t[o]=u}}var Ly=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sa(t,n){if(n){if(Ly[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ka(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Pa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ta=null,hr=null,mr=null;function pd(t){if(t=Ei(t)){if(typeof Ta!="function")throw Error(i(280));var n=t.stateNode;n&&(n=No(n),Ta(t.stateNode,t.type,n))}}function hd(t){hr?mr?mr.push(t):mr=[t]:hr=t}function md(){if(hr){var t=hr,n=mr;if(mr=hr=null,pd(t),n)for(t=0;t<n.length;t++)pd(n[t])}}function gd(t,n){return t(n)}function yd(){}var Ea=!1;function vd(t,n,o){if(Ea)return t(n,o);Ea=!0;try{return gd(t,n,o)}finally{Ea=!1,(hr!==null||mr!==null)&&(yd(),md())}}function oi(t,n){var o=t.stateNode;if(o===null)return null;var a=No(o);if(a===null)return null;o=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var ba=!1;if(h)try{var si={};Object.defineProperty(si,"passive",{get:function(){ba=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{ba=!1}function My(t,n,o,a,u,d,g,w,k){var M=Array.prototype.slice.call(arguments,3);try{n.apply(o,M)}catch(N){this.onError(N)}}var ai=!1,yo=null,vo=!1,Aa=null,Dy={onError:function(t){ai=!0,yo=t}};function _y(t,n,o,a,u,d,g,w,k){ai=!1,yo=null,My.apply(Dy,arguments)}function Iy(t,n,o,a,u,d,g,w,k){if(_y.apply(this,arguments),ai){if(ai){var M=yo;ai=!1,yo=null}else throw Error(i(198));vo||(vo=!0,Aa=M)}}function Un(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function xd(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function wd(t){if(Un(t)!==t)throw Error(i(188))}function Oy(t){var n=t.alternate;if(!n){if(n=Un(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,a=n;;){var u=o.return;if(u===null)break;var d=u.alternate;if(d===null){if(a=u.return,a!==null){o=a;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===o)return wd(u),t;if(d===a)return wd(u),n;d=d.sibling}throw Error(i(188))}if(o.return!==a.return)o=u,a=d;else{for(var g=!1,w=u.child;w;){if(w===o){g=!0,o=u,a=d;break}if(w===a){g=!0,a=u,o=d;break}w=w.sibling}if(!g){for(w=d.child;w;){if(w===o){g=!0,o=d,a=u;break}if(w===a){g=!0,a=d,o=u;break}w=w.sibling}if(!g)throw Error(i(189))}}if(o.alternate!==a)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function Sd(t){return t=Oy(t),t!==null?kd(t):null}function kd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=kd(t);if(n!==null)return n;t=t.sibling}return null}var Cd=r.unstable_scheduleCallback,Pd=r.unstable_cancelCallback,Vy=r.unstable_shouldYield,zy=r.unstable_requestPaint,ze=r.unstable_now,Ny=r.unstable_getCurrentPriorityLevel,ja=r.unstable_ImmediatePriority,Td=r.unstable_UserBlockingPriority,xo=r.unstable_NormalPriority,$y=r.unstable_LowPriority,Ed=r.unstable_IdlePriority,wo=null,Qt=null;function Fy(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(wo,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Wy,By=Math.log,Uy=Math.LN2;function Wy(t){return t>>>=0,t===0?32:31-(By(t)/Uy|0)|0}var So=64,ko=4194304;function li(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Co(t,n){var o=t.pendingLanes;if(o===0)return 0;var a=0,u=t.suspendedLanes,d=t.pingedLanes,g=o&268435455;if(g!==0){var w=g&~u;w!==0?a=li(w):(d&=g,d!==0&&(a=li(d)))}else g=o&~u,g!==0?a=li(g):d!==0&&(a=li(d));if(a===0)return 0;if(n!==0&&n!==a&&!(n&u)&&(u=a&-a,d=n&-n,u>=d||u===16&&(d&4194240)!==0))return n;if(a&4&&(a|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=a;0<n;)o=31-Nt(n),u=1<<o,a|=t[o],n&=~u;return a}function Hy(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(t,n){for(var o=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes;0<d;){var g=31-Nt(d),w=1<<g,k=u[g];k===-1?(!(w&o)||w&a)&&(u[g]=Hy(w,n)):k<=n&&(t.expiredLanes|=w),d&=~w}}function Ra(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bd(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function La(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function ui(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Nt(n),t[n]=o}function Gy(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Nt(o),d=1<<u;n[u]=0,a[u]=-1,t[u]=-1,o&=~d}}function Ma(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var a=31-Nt(o),u=1<<a;u&n|t[a]&n&&(t[a]|=n),o&=~u}}var Te=0;function Ad(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jd,Da,Rd,Ld,Md,_a=!1,Po=[],yn=null,vn=null,xn=null,ci=new Map,di=new Map,wn=[],Yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(t,n){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ci.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(n.pointerId)}}function fi(t,n,o,a,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:o,eventSystemFlags:a,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ei(n),n!==null&&Da(n)),t):(t.eventSystemFlags|=a,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Qy(t,n,o,a,u){switch(n){case"focusin":return yn=fi(yn,t,n,o,a,u),!0;case"dragenter":return vn=fi(vn,t,n,o,a,u),!0;case"mouseover":return xn=fi(xn,t,n,o,a,u),!0;case"pointerover":var d=u.pointerId;return ci.set(d,fi(ci.get(d)||null,t,n,o,a,u)),!0;case"gotpointercapture":return d=u.pointerId,di.set(d,fi(di.get(d)||null,t,n,o,a,u)),!0}return!1}function _d(t){var n=Wn(t.target);if(n!==null){var o=Un(n);if(o!==null){if(n=o.tag,n===13){if(n=xd(o),n!==null){t.blockedOn=n,Md(t.priority,function(){Rd(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function To(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=Oa(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Ca=a,o.target.dispatchEvent(a),Ca=null}else return n=Ei(o),n!==null&&Da(n),t.blockedOn=o,!1;n.shift()}return!0}function Id(t,n,o){To(t)&&o.delete(n)}function Xy(){_a=!1,yn!==null&&To(yn)&&(yn=null),vn!==null&&To(vn)&&(vn=null),xn!==null&&To(xn)&&(xn=null),ci.forEach(Id),di.forEach(Id)}function pi(t,n){t.blockedOn===n&&(t.blockedOn=null,_a||(_a=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Xy)))}function hi(t){function n(u){return pi(u,t)}if(0<Po.length){pi(Po[0],t);for(var o=1;o<Po.length;o++){var a=Po[o];a.blockedOn===t&&(a.blockedOn=null)}}for(yn!==null&&pi(yn,t),vn!==null&&pi(vn,t),xn!==null&&pi(xn,t),ci.forEach(n),di.forEach(n),o=0;o<wn.length;o++)a=wn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<wn.length&&(o=wn[0],o.blockedOn===null);)_d(o),o.blockedOn===null&&wn.shift()}var gr=W.ReactCurrentBatchConfig,Eo=!0;function qy(t,n,o,a){var u=Te,d=gr.transition;gr.transition=null;try{Te=1,Ia(t,n,o,a)}finally{Te=u,gr.transition=d}}function Jy(t,n,o,a){var u=Te,d=gr.transition;gr.transition=null;try{Te=4,Ia(t,n,o,a)}finally{Te=u,gr.transition=d}}function Ia(t,n,o,a){if(Eo){var u=Oa(t,n,o,a);if(u===null)Za(t,n,a,bo,o),Dd(t,a);else if(Qy(u,t,n,o,a))a.stopPropagation();else if(Dd(t,a),n&4&&-1<Yy.indexOf(t)){for(;u!==null;){var d=Ei(u);if(d!==null&&jd(d),d=Oa(t,n,o,a),d===null&&Za(t,n,a,bo,o),d===u)break;u=d}u!==null&&a.stopPropagation()}else Za(t,n,a,null,o)}}var bo=null;function Oa(t,n,o,a){if(bo=null,t=Pa(a),t=Wn(t),t!==null)if(n=Un(t),n===null)t=null;else if(o=n.tag,o===13){if(t=xd(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return bo=t,null}function Od(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ny()){case ja:return 1;case Td:return 4;case xo:case $y:return 16;case Ed:return 536870912;default:return 16}default:return 16}}var Sn=null,Va=null,Ao=null;function Vd(){if(Ao)return Ao;var t,n=Va,o=n.length,a,u="value"in Sn?Sn.value:Sn.textContent,d=u.length;for(t=0;t<o&&n[t]===u[t];t++);var g=o-t;for(a=1;a<=g&&n[o-a]===u[d-a];a++);return Ao=u.slice(t,1<a?1-a:void 0)}function jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ro(){return!0}function zd(){return!1}function Tt(t){function n(o,a,u,d,g){this._reactName=o,this._targetInst=u,this.type=a,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ro:zd,this.isPropagationStopped=zd,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Tt(yr),mi=j({},yr,{view:0,detail:0}),Zy=Tt(mi),Na,$a,gi,Lo=j({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ba,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(Na=t.screenX-gi.screenX,$a=t.screenY-gi.screenY):$a=Na=0,gi=t),Na)},movementY:function(t){return"movementY"in t?t.movementY:$a}}),Nd=Tt(Lo),ev=j({},Lo,{dataTransfer:0}),tv=Tt(ev),nv=j({},mi,{relatedTarget:0}),Fa=Tt(nv),rv=j({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),iv=Tt(rv),ov=j({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sv=Tt(ov),av=j({},yr,{data:0}),$d=Tt(av),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=cv[t])?!!n[t]:!1}function Ba(){return dv}var fv=j({},mi,{key:function(t){if(t.key){var n=lv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ba,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pv=Tt(fv),hv=j({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=Tt(hv),mv=j({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ba}),gv=Tt(mv),yv=j({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=Tt(yv),xv=j({},Lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Tt(xv),Sv=[9,13,27,32],Ua=h&&"CompositionEvent"in window,yi=null;h&&"documentMode"in document&&(yi=document.documentMode);var kv=h&&"TextEvent"in window&&!yi,Bd=h&&(!Ua||yi&&8<yi&&11>=yi),Ud=" ",Wd=!1;function Hd(t,n){switch(t){case"keyup":return Sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vr=!1;function Cv(t,n){switch(t){case"compositionend":return Kd(n);case"keypress":return n.which!==32?null:(Wd=!0,Ud);case"textInput":return t=n.data,t===Ud&&Wd?null:t;default:return null}}function Pv(t,n){if(vr)return t==="compositionend"||!Ua&&Hd(t,n)?(t=Vd(),Ao=Va=Sn=null,vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bd&&n.locale!=="ko"?null:n.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tv[t.type]:n==="textarea"}function Yd(t,n,o,a){hd(a),n=Oo(n,"onChange"),0<n.length&&(o=new za("onChange","change",null,o,a),t.push({event:o,listeners:n}))}var vi=null,xi=null;function Ev(t){pf(t,0)}function Mo(t){var n=Cr(t);if(st(n))return t}function bv(t,n){if(t==="change")return n}var Qd=!1;if(h){var Wa;if(h){var Ha="oninput"in document;if(!Ha){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),Ha=typeof Xd.oninput=="function"}Wa=Ha}else Wa=!1;Qd=Wa&&(!document.documentMode||9<document.documentMode)}function qd(){vi&&(vi.detachEvent("onpropertychange",Jd),xi=vi=null)}function Jd(t){if(t.propertyName==="value"&&Mo(xi)){var n=[];Yd(n,xi,t,Pa(t)),vd(Ev,n)}}function Av(t,n,o){t==="focusin"?(qd(),vi=n,xi=o,vi.attachEvent("onpropertychange",Jd)):t==="focusout"&&qd()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mo(xi)}function Rv(t,n){if(t==="click")return Mo(n)}function Lv(t,n){if(t==="input"||t==="change")return Mo(n)}function Mv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $t=typeof Object.is=="function"?Object.is:Mv;function wi(t,n){if($t(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),a=Object.keys(n);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var u=o[a];if(!p.call(n,u)||!$t(t[u],n[u]))return!1}return!0}function Zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ef(t,n){var o=Zd(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=n&&a>=n)return{node:o,offset:n-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zd(o)}}function tf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function nf(){for(var t=window,n=Bn();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=Bn(t.document)}return n}function Ka(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Dv(t){var n=nf(),o=t.focusedElem,a=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&tf(o.ownerDocument.documentElement,o)){if(a!==null&&Ka(o)){if(n=a.start,t=a.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,d=Math.min(a.start,u);a=a.end===void 0?d:Math.min(a.end,u),!t.extend&&d>a&&(u=a,a=d,d=u),u=ef(o,d);var g=ef(o,a);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),d>a?(t.addRange(n),t.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _v=h&&"documentMode"in document&&11>=document.documentMode,xr=null,Ga=null,Si=null,Ya=!1;function rf(t,n,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ya||xr==null||xr!==Bn(a)||(a=xr,"selectionStart"in a&&Ka(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Si&&wi(Si,a)||(Si=a,a=Oo(Ga,"onSelect"),0<a.length&&(n=new za("onSelect","select",null,n,o),t.push({event:n,listeners:a}),n.target=xr)))}function Do(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var wr={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Qa={},of={};h&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function _o(t){if(Qa[t])return Qa[t];if(!wr[t])return t;var n=wr[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in of)return Qa[t]=n[o];return t}var sf=_o("animationend"),af=_o("animationiteration"),lf=_o("animationstart"),uf=_o("transitionend"),cf=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,n){cf.set(t,n),c(n,[t])}for(var Xa=0;Xa<df.length;Xa++){var qa=df[Xa],Iv=qa.toLowerCase(),Ov=qa[0].toUpperCase()+qa.slice(1);kn(Iv,"on"+Ov)}kn(sf,"onAnimationEnd"),kn(af,"onAnimationIteration"),kn(lf,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(uf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function ff(t,n,o){var a=t.type||"unknown-event";t.currentTarget=o,Iy(a,n,void 0,t),t.currentTarget=null}function pf(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],u=a.event;a=a.listeners;e:{var d=void 0;if(n)for(var g=a.length-1;0<=g;g--){var w=a[g],k=w.instance,M=w.currentTarget;if(w=w.listener,k!==d&&u.isPropagationStopped())break e;ff(u,w,M),d=k}else for(g=0;g<a.length;g++){if(w=a[g],k=w.instance,M=w.currentTarget,w=w.listener,k!==d&&u.isPropagationStopped())break e;ff(u,w,M),d=k}}}if(vo)throw t=Aa,vo=!1,Aa=null,t}function Ae(t,n){var o=n[ol];o===void 0&&(o=n[ol]=new Set);var a=t+"__bubble";o.has(a)||(hf(n,t,2,!1),o.add(a))}function Ja(t,n,o){var a=0;n&&(a|=4),hf(o,t,a,n)}var Io="_reactListening"+Math.random().toString(36).slice(2);function Ci(t){if(!t[Io]){t[Io]=!0,s.forEach(function(o){o!=="selectionchange"&&(Vv.has(o)||Ja(o,!1,t),Ja(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Io]||(n[Io]=!0,Ja("selectionchange",!1,n))}}function hf(t,n,o,a){switch(Od(n)){case 1:var u=qy;break;case 4:u=Jy;break;default:u=Ia}o=u.bind(null,n,o,t),u=void 0,!ba||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(n,o,{capture:!0,passive:u}):t.addEventListener(n,o,!0):u!==void 0?t.addEventListener(n,o,{passive:u}):t.addEventListener(n,o,!1)}function Za(t,n,o,a,u){var d=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var w=a.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(g===4)for(g=a.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;w!==null;){if(g=Wn(w),g===null)return;if(k=g.tag,k===5||k===6){a=d=g;continue e}w=w.parentNode}}a=a.return}vd(function(){var M=d,N=Pa(o),F=[];e:{var z=cf.get(t);if(z!==void 0){var X=za,Z=t;switch(t){case"keypress":if(jo(o)===0)break e;case"keydown":case"keyup":X=pv;break;case"focusin":Z="focus",X=Fa;break;case"focusout":Z="blur",X=Fa;break;case"beforeblur":case"afterblur":X=Fa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=gv;break;case sf:case af:case lf:X=iv;break;case uf:X=vv;break;case"scroll":X=Zy;break;case"wheel":X=wv;break;case"copy":case"cut":case"paste":X=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Fd}var te=(n&4)!==0,Ne=!te&&t==="scroll",b=te?z!==null?z+"Capture":null:z;te=[];for(var P=M,A;P!==null;){A=P;var H=A.stateNode;if(A.tag===5&&H!==null&&(A=H,b!==null&&(H=oi(P,b),H!=null&&te.push(Pi(P,H,A)))),Ne)break;P=P.return}0<te.length&&(z=new X(z,Z,null,o,N),F.push({event:z,listeners:te}))}}if(!(n&7)){e:{if(z=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",z&&o!==Ca&&(Z=o.relatedTarget||o.fromElement)&&(Wn(Z)||Z[sn]))break e;if((X||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,X?(Z=o.relatedTarget||o.toElement,X=M,Z=Z?Wn(Z):null,Z!==null&&(Ne=Un(Z),Z!==Ne||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(X=null,Z=M),X!==Z)){if(te=Nd,H="onMouseLeave",b="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(te=Fd,H="onPointerLeave",b="onPointerEnter",P="pointer"),Ne=X==null?z:Cr(X),A=Z==null?z:Cr(Z),z=new te(H,P+"leave",X,o,N),z.target=Ne,z.relatedTarget=A,H=null,Wn(N)===M&&(te=new te(b,P+"enter",Z,o,N),te.target=A,te.relatedTarget=Ne,H=te),Ne=H,X&&Z)t:{for(te=X,b=Z,P=0,A=te;A;A=Sr(A))P++;for(A=0,H=b;H;H=Sr(H))A++;for(;0<P-A;)te=Sr(te),P--;for(;0<A-P;)b=Sr(b),A--;for(;P--;){if(te===b||b!==null&&te===b.alternate)break t;te=Sr(te),b=Sr(b)}te=null}else te=null;X!==null&&mf(F,z,X,te,!1),Z!==null&&Ne!==null&&mf(F,Ne,Z,te,!0)}}e:{if(z=M?Cr(M):window,X=z.nodeName&&z.nodeName.toLowerCase(),X==="select"||X==="input"&&z.type==="file")var ne=bv;else if(Gd(z))if(Qd)ne=Lv;else{ne=jv;var oe=Av}else(X=z.nodeName)&&X.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(ne=Rv);if(ne&&(ne=ne(t,M))){Yd(F,ne,o,N);break e}oe&&oe(t,z,M),t==="focusout"&&(oe=z._wrapperState)&&oe.controlled&&z.type==="number"&&va(z,"number",z.value)}switch(oe=M?Cr(M):window,t){case"focusin":(Gd(oe)||oe.contentEditable==="true")&&(xr=oe,Ga=M,Si=null);break;case"focusout":Si=Ga=xr=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,rf(F,o,N);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":rf(F,o,N)}var se;if(Ua)e:{switch(t){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else vr?Hd(t,o)&&(de="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Bd&&o.locale!=="ko"&&(vr||de!=="onCompositionStart"?de==="onCompositionEnd"&&vr&&(se=Vd()):(Sn=N,Va="value"in Sn?Sn.value:Sn.textContent,vr=!0)),oe=Oo(M,de),0<oe.length&&(de=new $d(de,t,null,o,N),F.push({event:de,listeners:oe}),se?de.data=se:(se=Kd(o),se!==null&&(de.data=se)))),(se=kv?Cv(t,o):Pv(t,o))&&(M=Oo(M,"onBeforeInput"),0<M.length&&(N=new $d("onBeforeInput","beforeinput",null,o,N),F.push({event:N,listeners:M}),N.data=se))}pf(F,n)})}function Pi(t,n,o){return{instance:t,listener:n,currentTarget:o}}function Oo(t,n){for(var o=n+"Capture",a=[];t!==null;){var u=t,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=oi(t,o),d!=null&&a.unshift(Pi(t,d,u)),d=oi(t,n),d!=null&&a.push(Pi(t,d,u))),t=t.return}return a}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mf(t,n,o,a,u){for(var d=n._reactName,g=[];o!==null&&o!==a;){var w=o,k=w.alternate,M=w.stateNode;if(k!==null&&k===a)break;w.tag===5&&M!==null&&(w=M,u?(k=oi(o,d),k!=null&&g.unshift(Pi(o,k,w))):u||(k=oi(o,d),k!=null&&g.push(Pi(o,k,w)))),o=o.return}g.length!==0&&t.push({event:n,listeners:g})}var zv=/\r\n?/g,Nv=/\u0000|\uFFFD/g;function gf(t){return(typeof t=="string"?t:""+t).replace(zv,`
`).replace(Nv,"")}function Vo(t,n,o){if(n=gf(n),gf(t)!==n&&o)throw Error(i(425))}function zo(){}var el=null,tl=null;function nl(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rl=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(t){return yf.resolve(null).then(t).catch(Bv)}:rl;function Bv(t){setTimeout(function(){throw t})}function il(t,n){var o=n,a=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(a===0){t.removeChild(u),hi(n);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=u}while(o);hi(n)}function Cn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function vf(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+kr,Ti="__reactProps$"+kr,sn="__reactContainer$"+kr,ol="__reactEvents$"+kr,Uv="__reactListeners$"+kr,Wv="__reactHandles$"+kr;function Wn(t){var n=t[Xt];if(n)return n;for(var o=t.parentNode;o;){if(n=o[sn]||o[Xt]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=vf(t);t!==null;){if(o=t[Xt])return o;t=vf(t)}return n}t=o,o=t.parentNode}return null}function Ei(t){return t=t[Xt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function No(t){return t[Ti]||null}var sl=[],Pr=-1;function Pn(t){return{current:t}}function je(t){0>Pr||(t.current=sl[Pr],sl[Pr]=null,Pr--)}function be(t,n){Pr++,sl[Pr]=t.current,t.current=n}var Tn={},at=Pn(Tn),xt=Pn(!1),Hn=Tn;function Tr(t,n){var o=t.type.contextTypes;if(!o)return Tn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in o)u[d]=n[d];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function wt(t){return t=t.childContextTypes,t!=null}function $o(){je(xt),je(at)}function xf(t,n,o){if(at.current!==Tn)throw Error(i(168));be(at,n),be(xt,o)}function wf(t,n,o){var a=t.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var u in a)if(!(u in n))throw Error(i(108,re(t)||"Unknown",u));return j({},o,a)}function Fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tn,Hn=at.current,be(at,t),be(xt,xt.current),!0}function Sf(t,n,o){var a=t.stateNode;if(!a)throw Error(i(169));o?(t=wf(t,n,Hn),a.__reactInternalMemoizedMergedChildContext=t,je(xt),je(at),be(at,t)):je(xt),be(xt,o)}var an=null,Bo=!1,al=!1;function kf(t){an===null?an=[t]:an.push(t)}function Hv(t){Bo=!0,kf(t)}function En(){if(!al&&an!==null){al=!0;var t=0,n=Te;try{var o=an;for(Te=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}an=null,Bo=!1}catch(u){throw an!==null&&(an=an.slice(t+1)),Cd(ja,En),u}finally{Te=n,al=!1}}return null}var Er=[],br=0,Uo=null,Wo=0,Rt=[],Lt=0,Kn=null,ln=1,un="";function Gn(t,n){Er[br++]=Wo,Er[br++]=Uo,Uo=t,Wo=n}function Cf(t,n,o){Rt[Lt++]=ln,Rt[Lt++]=un,Rt[Lt++]=Kn,Kn=t;var a=ln;t=un;var u=32-Nt(a)-1;a&=~(1<<u),o+=1;var d=32-Nt(n)+u;if(30<d){var g=u-u%5;d=(a&(1<<g)-1).toString(32),a>>=g,u-=g,ln=1<<32-Nt(n)+u|o<<u|a,un=d+t}else ln=1<<d|o<<u|a,un=t}function ll(t){t.return!==null&&(Gn(t,1),Cf(t,1,0))}function ul(t){for(;t===Uo;)Uo=Er[--br],Er[br]=null,Wo=Er[--br],Er[br]=null;for(;t===Kn;)Kn=Rt[--Lt],Rt[Lt]=null,un=Rt[--Lt],Rt[Lt]=null,ln=Rt[--Lt],Rt[Lt]=null}var Et=null,bt=null,Me=!1,Ft=null;function Pf(t,n){var o=It(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function Tf(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Et=t,bt=Cn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Et=t,bt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Kn!==null?{id:ln,overflow:un}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=It(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,Et=t,bt=null,!0):!1;default:return!1}}function cl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dl(t){if(Me){var n=bt;if(n){var o=n;if(!Tf(t,n)){if(cl(t))throw Error(i(418));n=Cn(o.nextSibling);var a=Et;n&&Tf(t,n)?Pf(a,o):(t.flags=t.flags&-4097|2,Me=!1,Et=t)}}else{if(cl(t))throw Error(i(418));t.flags=t.flags&-4097|2,Me=!1,Et=t}}}function Ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Ho(t){if(t!==Et)return!1;if(!Me)return Ef(t),Me=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!nl(t.type,t.memoizedProps)),n&&(n=bt)){if(cl(t))throw bf(),Error(i(418));for(;n;)Pf(t,n),n=Cn(n.nextSibling)}if(Ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){bt=Cn(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}bt=null}}else bt=Et?Cn(t.stateNode.nextSibling):null;return!0}function bf(){for(var t=bt;t;)t=Cn(t.nextSibling)}function Ar(){bt=Et=null,Me=!1}function fl(t){Ft===null?Ft=[t]:Ft.push(t)}var Kv=W.ReactCurrentBatchConfig;function bi(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var a=o.stateNode}if(!a)throw Error(i(147,t));var u=a,d=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===d?n.ref:(n=function(g){var w=u.refs;g===null?delete w[d]:w[d]=g},n._stringRef=d,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function Ko(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Af(t){var n=t._init;return n(t._payload)}function jf(t){function n(b,P){if(t){var A=b.deletions;A===null?(b.deletions=[P],b.flags|=16):A.push(P)}}function o(b,P){if(!t)return null;for(;P!==null;)n(b,P),P=P.sibling;return null}function a(b,P){for(b=new Map;P!==null;)P.key!==null?b.set(P.key,P):b.set(P.index,P),P=P.sibling;return b}function u(b,P){return b=_n(b,P),b.index=0,b.sibling=null,b}function d(b,P,A){return b.index=A,t?(A=b.alternate,A!==null?(A=A.index,A<P?(b.flags|=2,P):A):(b.flags|=2,P)):(b.flags|=1048576,P)}function g(b){return t&&b.alternate===null&&(b.flags|=2),b}function w(b,P,A,H){return P===null||P.tag!==6?(P=ru(A,b.mode,H),P.return=b,P):(P=u(P,A),P.return=b,P)}function k(b,P,A,H){var ne=A.type;return ne===K?N(b,P,A.props.children,H,A.key):P!==null&&(P.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ye&&Af(ne)===P.type)?(H=u(P,A.props),H.ref=bi(b,P,A),H.return=b,H):(H=gs(A.type,A.key,A.props,null,b.mode,H),H.ref=bi(b,P,A),H.return=b,H)}function M(b,P,A,H){return P===null||P.tag!==4||P.stateNode.containerInfo!==A.containerInfo||P.stateNode.implementation!==A.implementation?(P=iu(A,b.mode,H),P.return=b,P):(P=u(P,A.children||[]),P.return=b,P)}function N(b,P,A,H,ne){return P===null||P.tag!==7?(P=tr(A,b.mode,H,ne),P.return=b,P):(P=u(P,A),P.return=b,P)}function F(b,P,A){if(typeof P=="string"&&P!==""||typeof P=="number")return P=ru(""+P,b.mode,A),P.return=b,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case $:return A=gs(P.type,P.key,P.props,null,b.mode,A),A.ref=bi(b,null,P),A.return=b,A;case U:return P=iu(P,b.mode,A),P.return=b,P;case ye:var H=P._init;return F(b,H(P._payload),A)}if(ni(P)||Q(P))return P=tr(P,b.mode,A,null),P.return=b,P;Ko(b,P)}return null}function z(b,P,A,H){var ne=P!==null?P.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return ne!==null?null:w(b,P,""+A,H);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case $:return A.key===ne?k(b,P,A,H):null;case U:return A.key===ne?M(b,P,A,H):null;case ye:return ne=A._init,z(b,P,ne(A._payload),H)}if(ni(A)||Q(A))return ne!==null?null:N(b,P,A,H,null);Ko(b,A)}return null}function X(b,P,A,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return b=b.get(A)||null,w(P,b,""+H,ne);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case $:return b=b.get(H.key===null?A:H.key)||null,k(P,b,H,ne);case U:return b=b.get(H.key===null?A:H.key)||null,M(P,b,H,ne);case ye:var oe=H._init;return X(b,P,A,oe(H._payload),ne)}if(ni(H)||Q(H))return b=b.get(A)||null,N(P,b,H,ne,null);Ko(P,H)}return null}function Z(b,P,A,H){for(var ne=null,oe=null,se=P,de=P=0,et=null;se!==null&&de<A.length;de++){se.index>de?(et=se,se=null):et=se.sibling;var we=z(b,se,A[de],H);if(we===null){se===null&&(se=et);break}t&&se&&we.alternate===null&&n(b,se),P=d(we,P,de),oe===null?ne=we:oe.sibling=we,oe=we,se=et}if(de===A.length)return o(b,se),Me&&Gn(b,de),ne;if(se===null){for(;de<A.length;de++)se=F(b,A[de],H),se!==null&&(P=d(se,P,de),oe===null?ne=se:oe.sibling=se,oe=se);return Me&&Gn(b,de),ne}for(se=a(b,se);de<A.length;de++)et=X(se,b,de,A[de],H),et!==null&&(t&&et.alternate!==null&&se.delete(et.key===null?de:et.key),P=d(et,P,de),oe===null?ne=et:oe.sibling=et,oe=et);return t&&se.forEach(function(In){return n(b,In)}),Me&&Gn(b,de),ne}function te(b,P,A,H){var ne=Q(A);if(typeof ne!="function")throw Error(i(150));if(A=ne.call(A),A==null)throw Error(i(151));for(var oe=ne=null,se=P,de=P=0,et=null,we=A.next();se!==null&&!we.done;de++,we=A.next()){se.index>de?(et=se,se=null):et=se.sibling;var In=z(b,se,we.value,H);if(In===null){se===null&&(se=et);break}t&&se&&In.alternate===null&&n(b,se),P=d(In,P,de),oe===null?ne=In:oe.sibling=In,oe=In,se=et}if(we.done)return o(b,se),Me&&Gn(b,de),ne;if(se===null){for(;!we.done;de++,we=A.next())we=F(b,we.value,H),we!==null&&(P=d(we,P,de),oe===null?ne=we:oe.sibling=we,oe=we);return Me&&Gn(b,de),ne}for(se=a(b,se);!we.done;de++,we=A.next())we=X(se,b,de,we.value,H),we!==null&&(t&&we.alternate!==null&&se.delete(we.key===null?de:we.key),P=d(we,P,de),oe===null?ne=we:oe.sibling=we,oe=we);return t&&se.forEach(function(P1){return n(b,P1)}),Me&&Gn(b,de),ne}function Ne(b,P,A,H){if(typeof A=="object"&&A!==null&&A.type===K&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case $:e:{for(var ne=A.key,oe=P;oe!==null;){if(oe.key===ne){if(ne=A.type,ne===K){if(oe.tag===7){o(b,oe.sibling),P=u(oe,A.props.children),P.return=b,b=P;break e}}else if(oe.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ye&&Af(ne)===oe.type){o(b,oe.sibling),P=u(oe,A.props),P.ref=bi(b,oe,A),P.return=b,b=P;break e}o(b,oe);break}else n(b,oe);oe=oe.sibling}A.type===K?(P=tr(A.props.children,b.mode,H,A.key),P.return=b,b=P):(H=gs(A.type,A.key,A.props,null,b.mode,H),H.ref=bi(b,P,A),H.return=b,b=H)}return g(b);case U:e:{for(oe=A.key;P!==null;){if(P.key===oe)if(P.tag===4&&P.stateNode.containerInfo===A.containerInfo&&P.stateNode.implementation===A.implementation){o(b,P.sibling),P=u(P,A.children||[]),P.return=b,b=P;break e}else{o(b,P);break}else n(b,P);P=P.sibling}P=iu(A,b.mode,H),P.return=b,b=P}return g(b);case ye:return oe=A._init,Ne(b,P,oe(A._payload),H)}if(ni(A))return Z(b,P,A,H);if(Q(A))return te(b,P,A,H);Ko(b,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,P!==null&&P.tag===6?(o(b,P.sibling),P=u(P,A),P.return=b,b=P):(o(b,P),P=ru(A,b.mode,H),P.return=b,b=P),g(b)):o(b,P)}return Ne}var jr=jf(!0),Rf=jf(!1),Go=Pn(null),Yo=null,Rr=null,pl=null;function hl(){pl=Rr=Yo=null}function ml(t){var n=Go.current;je(Go),t._currentValue=n}function gl(t,n,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),t===o)break;t=t.return}}function Lr(t,n){Yo=t,pl=Rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(St=!0),t.firstContext=null)}function Mt(t){var n=t._currentValue;if(pl!==t)if(t={context:t,memoizedValue:n,next:null},Rr===null){if(Yo===null)throw Error(i(308));Rr=t,Yo.dependencies={lanes:0,firstContext:t}}else Rr=Rr.next=t;return n}var Yn=null;function yl(t){Yn===null?Yn=[t]:Yn.push(t)}function Lf(t,n,o,a){var u=n.interleaved;return u===null?(o.next=o,yl(n)):(o.next=u.next,u.next=o),n.interleaved=o,cn(t,a)}function cn(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function vl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function An(t,n,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,xe&2){var u=a.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n,cn(t,o)}return u=a.interleaved,u===null?(n.next=n,yl(a)):(n.next=u.next,u.next=n),a.interleaved=n,cn(t,o)}function Qo(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var a=n.lanes;a&=t.pendingLanes,o|=a,n.lanes=o,Ma(t,o)}}function Df(t,n){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var u=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};d===null?u=d=g:d=d.next=g,o=o.next}while(o!==null);d===null?u=d=n:d=d.next=n}else u=d=n;o={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function Xo(t,n,o,a){var u=t.updateQueue;bn=!1;var d=u.firstBaseUpdate,g=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,M=k.next;k.next=null,g===null?d=M:g.next=M,g=k;var N=t.alternate;N!==null&&(N=N.updateQueue,w=N.lastBaseUpdate,w!==g&&(w===null?N.firstBaseUpdate=M:w.next=M,N.lastBaseUpdate=k))}if(d!==null){var F=u.baseState;g=0,N=M=k=null,w=d;do{var z=w.lane,X=w.eventTime;if((a&z)===z){N!==null&&(N=N.next={eventTime:X,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var Z=t,te=w;switch(z=n,X=o,te.tag){case 1:if(Z=te.payload,typeof Z=="function"){F=Z.call(X,F,z);break e}F=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=te.payload,z=typeof Z=="function"?Z.call(X,F,z):Z,z==null)break e;F=j({},F,z);break e;case 2:bn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,z=u.effects,z===null?u.effects=[w]:z.push(w))}else X={eventTime:X,lane:z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},N===null?(M=N=X,k=F):N=N.next=X,g|=z;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;z=w,w=z.next,z.next=null,u.lastBaseUpdate=z,u.shared.pending=null}}while(!0);if(N===null&&(k=F),u.baseState=k,u.firstBaseUpdate=M,u.lastBaseUpdate=N,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else d===null&&(u.shared.lanes=0);qn|=g,t.lanes=g,t.memoizedState=F}}function _f(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var a=t[n],u=a.callback;if(u!==null){if(a.callback=null,a=o,typeof u!="function")throw Error(i(191,u));u.call(a)}}}var Ai={},qt=Pn(Ai),ji=Pn(Ai),Ri=Pn(Ai);function Qn(t){if(t===Ai)throw Error(i(174));return t}function xl(t,n){switch(be(Ri,n),be(ji,t),be(qt,Ai),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:wa(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=wa(n,t)}je(qt),be(qt,n)}function Mr(){je(qt),je(ji),je(Ri)}function If(t){Qn(Ri.current);var n=Qn(qt.current),o=wa(n,t.type);n!==o&&(be(ji,t),be(qt,o))}function wl(t){ji.current===t&&(je(qt),je(ji))}var De=Pn(0);function qo(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sl=[];function kl(){for(var t=0;t<Sl.length;t++)Sl[t]._workInProgressVersionPrimary=null;Sl.length=0}var Jo=W.ReactCurrentDispatcher,Cl=W.ReactCurrentBatchConfig,Xn=0,_e=null,Qe=null,Je=null,Zo=!1,Li=!1,Mi=0,Gv=0;function lt(){throw Error(i(321))}function Pl(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!$t(t[o],n[o]))return!1;return!0}function Tl(t,n,o,a,u,d){if(Xn=d,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Jo.current=t===null||t.memoizedState===null?qv:Jv,t=o(a,u),Li){d=0;do{if(Li=!1,Mi=0,25<=d)throw Error(i(301));d+=1,Je=Qe=null,n.updateQueue=null,Jo.current=Zv,t=o(a,u)}while(Li)}if(Jo.current=ns,n=Qe!==null&&Qe.next!==null,Xn=0,Je=Qe=_e=null,Zo=!1,n)throw Error(i(300));return t}function El(){var t=Mi!==0;return Mi=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?_e.memoizedState=Je=t:Je=Je.next=t,Je}function Dt(){if(Qe===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=Je===null?_e.memoizedState:Je.next;if(n!==null)Je=n,Qe=t;else{if(t===null)throw Error(i(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Je===null?_e.memoizedState=Je=t:Je=Je.next=t}return Je}function Di(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=Dt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var a=Qe,u=a.baseQueue,d=o.pending;if(d!==null){if(u!==null){var g=u.next;u.next=d.next,d.next=g}a.baseQueue=u=d,o.pending=null}if(u!==null){d=u.next,a=a.baseState;var w=g=null,k=null,M=d;do{var N=M.lane;if((Xn&N)===N)k!==null&&(k=k.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),a=M.hasEagerState?M.eagerState:t(a,M.action);else{var F={lane:N,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};k===null?(w=k=F,g=a):k=k.next=F,_e.lanes|=N,qn|=N}M=M.next}while(M!==null&&M!==d);k===null?g=a:k.next=w,$t(a,n.memoizedState)||(St=!0),n.memoizedState=a,n.baseState=g,n.baseQueue=k,o.lastRenderedState=a}if(t=o.interleaved,t!==null){u=t;do d=u.lane,_e.lanes|=d,qn|=d,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Al(t){var n=Dt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var a=o.dispatch,u=o.pending,d=n.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do d=t(d,g.action),g=g.next;while(g!==u);$t(d,n.memoizedState)||(St=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),o.lastRenderedState=d}return[d,a]}function Of(){}function Vf(t,n){var o=_e,a=Dt(),u=n(),d=!$t(a.memoizedState,u);if(d&&(a.memoizedState=u,St=!0),a=a.queue,jl($f.bind(null,o,a,t),[t]),a.getSnapshot!==n||d||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,_i(9,Nf.bind(null,o,a,u,n),void 0,null),Ze===null)throw Error(i(349));Xn&30||zf(o,n,u)}return u}function zf(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function Nf(t,n,o,a){n.value=o,n.getSnapshot=a,Ff(n)&&Bf(t)}function $f(t,n,o){return o(function(){Ff(n)&&Bf(t)})}function Ff(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!$t(t,o)}catch{return!0}}function Bf(t){var n=cn(t,1);n!==null&&Ht(n,t,1,-1)}function Uf(t){var n=Jt();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:t},n.queue=t,t=t.dispatch=Xv.bind(null,_e,t),[n.memoizedState,t]}function _i(t,n,o,a){return t={tag:t,create:n,destroy:o,deps:a,next:null},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,n.lastEffect=t)),t}function Wf(){return Dt().memoizedState}function es(t,n,o,a){var u=Jt();_e.flags|=t,u.memoizedState=_i(1|n,o,void 0,a===void 0?null:a)}function ts(t,n,o,a){var u=Dt();a=a===void 0?null:a;var d=void 0;if(Qe!==null){var g=Qe.memoizedState;if(d=g.destroy,a!==null&&Pl(a,g.deps)){u.memoizedState=_i(n,o,d,a);return}}_e.flags|=t,u.memoizedState=_i(1|n,o,d,a)}function Hf(t,n){return es(8390656,8,t,n)}function jl(t,n){return ts(2048,8,t,n)}function Kf(t,n){return ts(4,2,t,n)}function Gf(t,n){return ts(4,4,t,n)}function Yf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qf(t,n,o){return o=o!=null?o.concat([t]):null,ts(4,4,Yf.bind(null,n,t),o)}function Rl(){}function Xf(t,n){var o=Dt();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&Pl(n,a[1])?a[0]:(o.memoizedState=[t,n],t)}function qf(t,n){var o=Dt();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&Pl(n,a[1])?a[0]:(t=t(),o.memoizedState=[t,n],t)}function Jf(t,n,o){return Xn&21?($t(o,n)||(o=bd(),_e.lanes|=o,qn|=o,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=o)}function Yv(t,n){var o=Te;Te=o!==0&&4>o?o:4,t(!0);var a=Cl.transition;Cl.transition={};try{t(!1),n()}finally{Te=o,Cl.transition=a}}function Zf(){return Dt().memoizedState}function Qv(t,n,o){var a=Mn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},ep(t))tp(n,o);else if(o=Lf(t,n,o,a),o!==null){var u=ht();Ht(o,t,a,u),np(o,n,a)}}function Xv(t,n,o){var a=Mn(t),u={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(t))tp(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var g=n.lastRenderedState,w=d(g,o);if(u.hasEagerState=!0,u.eagerState=w,$t(w,g)){var k=n.interleaved;k===null?(u.next=u,yl(n)):(u.next=k.next,k.next=u),n.interleaved=u;return}}catch{}finally{}o=Lf(t,n,u,a),o!==null&&(u=ht(),Ht(o,t,a,u),np(o,n,a))}}function ep(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function tp(t,n){Li=Zo=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function np(t,n,o){if(o&4194240){var a=n.lanes;a&=t.pendingLanes,o|=a,n.lanes=o,Ma(t,o)}}var ns={readContext:Mt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},qv={readContext:Mt,useCallback:function(t,n){return Jt().memoizedState=[t,n===void 0?null:n],t},useContext:Mt,useEffect:Hf,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,es(4194308,4,Yf.bind(null,n,t),o)},useLayoutEffect:function(t,n){return es(4194308,4,t,n)},useInsertionEffect:function(t,n){return es(4,2,t,n)},useMemo:function(t,n){var o=Jt();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var a=Jt();return n=o!==void 0?o(n):n,a.memoizedState=a.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Qv.bind(null,_e,t),[a.memoizedState,t]},useRef:function(t){var n=Jt();return t={current:t},n.memoizedState=t},useState:Uf,useDebugValue:Rl,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Uf(!1),n=t[0];return t=Yv.bind(null,t[1]),Jt().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var a=_e,u=Jt();if(Me){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),Ze===null)throw Error(i(349));Xn&30||zf(a,n,o)}u.memoizedState=o;var d={value:o,getSnapshot:n};return u.queue=d,Hf($f.bind(null,a,d,t),[t]),a.flags|=2048,_i(9,Nf.bind(null,a,d,o,n),void 0,null),o},useId:function(){var t=Jt(),n=Ze.identifierPrefix;if(Me){var o=un,a=ln;o=(a&~(1<<32-Nt(a)-1)).toString(32)+o,n=":"+n+"R"+o,o=Mi++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=Gv++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},Jv={readContext:Mt,useCallback:Xf,useContext:Mt,useEffect:jl,useImperativeHandle:Qf,useInsertionEffect:Kf,useLayoutEffect:Gf,useMemo:qf,useReducer:bl,useRef:Wf,useState:function(){return bl(Di)},useDebugValue:Rl,useDeferredValue:function(t){var n=Dt();return Jf(n,Qe.memoizedState,t)},useTransition:function(){var t=bl(Di)[0],n=Dt().memoizedState;return[t,n]},useMutableSource:Of,useSyncExternalStore:Vf,useId:Zf,unstable_isNewReconciler:!1},Zv={readContext:Mt,useCallback:Xf,useContext:Mt,useEffect:jl,useImperativeHandle:Qf,useInsertionEffect:Kf,useLayoutEffect:Gf,useMemo:qf,useReducer:Al,useRef:Wf,useState:function(){return Al(Di)},useDebugValue:Rl,useDeferredValue:function(t){var n=Dt();return Qe===null?n.memoizedState=t:Jf(n,Qe.memoizedState,t)},useTransition:function(){var t=Al(Di)[0],n=Dt().memoizedState;return[t,n]},useMutableSource:Of,useSyncExternalStore:Vf,useId:Zf,unstable_isNewReconciler:!1};function Bt(t,n){if(t&&t.defaultProps){n=j({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function Ll(t,n,o,a){n=t.memoizedState,o=o(a,n),o=o==null?n:j({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var rs={isMounted:function(t){return(t=t._reactInternals)?Un(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var a=ht(),u=Mn(t),d=dn(a,u);d.payload=n,o!=null&&(d.callback=o),n=An(t,d,u),n!==null&&(Ht(n,t,u,a),Qo(n,t,u))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var a=ht(),u=Mn(t),d=dn(a,u);d.tag=1,d.payload=n,o!=null&&(d.callback=o),n=An(t,d,u),n!==null&&(Ht(n,t,u,a),Qo(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=ht(),a=Mn(t),u=dn(o,a);u.tag=2,n!=null&&(u.callback=n),n=An(t,u,a),n!==null&&(Ht(n,t,a,o),Qo(n,t,a))}};function rp(t,n,o,a,u,d,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,d,g):n.prototype&&n.prototype.isPureReactComponent?!wi(o,a)||!wi(u,d):!0}function ip(t,n,o){var a=!1,u=Tn,d=n.contextType;return typeof d=="object"&&d!==null?d=Mt(d):(u=wt(n)?Hn:at.current,a=n.contextTypes,d=(a=a!=null)?Tr(t,u):Tn),n=new n(o,d),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=rs,t.stateNode=n,n._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=d),n}function op(t,n,o,a){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,a),n.state!==t&&rs.enqueueReplaceState(n,n.state,null)}function Ml(t,n,o,a){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},vl(t);var d=n.contextType;typeof d=="object"&&d!==null?u.context=Mt(d):(d=wt(n)?Hn:at.current,u.context=Tr(t,d)),u.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ll(t,n,d,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&rs.enqueueReplaceState(u,u.state,null),Xo(t,o,u,a),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Dr(t,n){try{var o="",a=n;do o+=ie(a),a=a.return;while(a);var u=o}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:t,source:n,stack:u,digest:null}}function Dl(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function _l(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var e1=typeof WeakMap=="function"?WeakMap:Map;function sp(t,n,o){o=dn(-1,o),o.tag=3,o.payload={element:null};var a=n.value;return o.callback=function(){cs||(cs=!0,Ql=a),_l(t,n)},o}function ap(t,n,o){o=dn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;o.payload=function(){return a(u)},o.callback=function(){_l(t,n)}}var d=t.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(o.callback=function(){_l(t,n),typeof a!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),o}function lp(t,n,o){var a=t.pingCache;if(a===null){a=t.pingCache=new e1;var u=new Set;a.set(n,u)}else u=a.get(n),u===void 0&&(u=new Set,a.set(n,u));u.has(o)||(u.add(o),t=h1.bind(null,t,n,o),n.then(t,t))}function up(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function cp(t,n,o,a,u){return t.mode&1?(t.flags|=65536,t.lanes=u,t):(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=dn(-1,1),n.tag=2,An(o,n,1))),o.lanes|=1),t)}var t1=W.ReactCurrentOwner,St=!1;function pt(t,n,o,a){n.child=t===null?Rf(n,null,o,a):jr(n,t.child,o,a)}function dp(t,n,o,a,u){o=o.render;var d=n.ref;return Lr(n,u),a=Tl(t,n,o,a,d,u),o=El(),t!==null&&!St?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,fn(t,n,u)):(Me&&o&&ll(n),n.flags|=1,pt(t,n,a,u),n.child)}function fp(t,n,o,a,u){if(t===null){var d=o.type;return typeof d=="function"&&!nu(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=d,pp(t,n,d,a,u)):(t=gs(o.type,null,a,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!(t.lanes&u)){var g=d.memoizedProps;if(o=o.compare,o=o!==null?o:wi,o(g,a)&&t.ref===n.ref)return fn(t,n,u)}return n.flags|=1,t=_n(d,a),t.ref=n.ref,t.return=n,n.child=t}function pp(t,n,o,a,u){if(t!==null){var d=t.memoizedProps;if(wi(d,a)&&t.ref===n.ref)if(St=!1,n.pendingProps=a=d,(t.lanes&u)!==0)t.flags&131072&&(St=!0);else return n.lanes=t.lanes,fn(t,n,u)}return Il(t,n,o,a,u)}function hp(t,n,o){var a=n.pendingProps,u=a.children,d=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Ir,At),At|=o;else{if(!(o&1073741824))return t=d!==null?d.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,be(Ir,At),At|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:o,be(Ir,At),At|=a}else d!==null?(a=d.baseLanes|o,n.memoizedState=null):a=o,be(Ir,At),At|=a;return pt(t,n,u,o),n.child}function mp(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Il(t,n,o,a,u){var d=wt(o)?Hn:at.current;return d=Tr(n,d),Lr(n,u),o=Tl(t,n,o,a,d,u),a=El(),t!==null&&!St?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,fn(t,n,u)):(Me&&a&&ll(n),n.flags|=1,pt(t,n,o,u),n.child)}function gp(t,n,o,a,u){if(wt(o)){var d=!0;Fo(n)}else d=!1;if(Lr(n,u),n.stateNode===null)os(t,n),ip(n,o,a),Ml(n,o,a,u),a=!0;else if(t===null){var g=n.stateNode,w=n.memoizedProps;g.props=w;var k=g.context,M=o.contextType;typeof M=="object"&&M!==null?M=Mt(M):(M=wt(o)?Hn:at.current,M=Tr(n,M));var N=o.getDerivedStateFromProps,F=typeof N=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==a||k!==M)&&op(n,g,a,M),bn=!1;var z=n.memoizedState;g.state=z,Xo(n,a,g,u),k=n.memoizedState,w!==a||z!==k||xt.current||bn?(typeof N=="function"&&(Ll(n,o,N,a),k=n.memoizedState),(w=bn||rp(n,o,w,a,z,k,M))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=k),g.props=a,g.state=k,g.context=M,a=w):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{g=n.stateNode,Mf(t,n),w=n.memoizedProps,M=n.type===n.elementType?w:Bt(n.type,w),g.props=M,F=n.pendingProps,z=g.context,k=o.contextType,typeof k=="object"&&k!==null?k=Mt(k):(k=wt(o)?Hn:at.current,k=Tr(n,k));var X=o.getDerivedStateFromProps;(N=typeof X=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==F||z!==k)&&op(n,g,a,k),bn=!1,z=n.memoizedState,g.state=z,Xo(n,a,g,u);var Z=n.memoizedState;w!==F||z!==Z||xt.current||bn?(typeof X=="function"&&(Ll(n,o,X,a),Z=n.memoizedState),(M=bn||rp(n,o,M,a,z,Z,k)||!1)?(N||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,Z,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,Z,k)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=Z),g.props=a,g.state=Z,g.context=k,a=M):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=1024),a=!1)}return Ol(t,n,o,a,d,u)}function Ol(t,n,o,a,u,d){mp(t,n);var g=(n.flags&128)!==0;if(!a&&!g)return u&&Sf(n,o,!1),fn(t,n,d);a=n.stateNode,t1.current=n;var w=g&&typeof o.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,t!==null&&g?(n.child=jr(n,t.child,null,d),n.child=jr(n,null,w,d)):pt(t,n,w,d),n.memoizedState=a.state,u&&Sf(n,o,!0),n.child}function yp(t){var n=t.stateNode;n.pendingContext?xf(t,n.pendingContext,n.pendingContext!==n.context):n.context&&xf(t,n.context,!1),xl(t,n.containerInfo)}function vp(t,n,o,a,u){return Ar(),fl(u),n.flags|=256,pt(t,n,o,a),n.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function zl(t){return{baseLanes:t,cachePool:null,transitions:null}}function xp(t,n,o){var a=n.pendingProps,u=De.current,d=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(u&2)!==0),w?(d=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),be(De,u&1),t===null)return dl(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(g=a.children,t=a.fallback,d?(a=n.mode,d=n.child,g={mode:"hidden",children:g},!(a&1)&&d!==null?(d.childLanes=0,d.pendingProps=g):d=ys(g,a,0,null),t=tr(t,a,o,null),d.return=n,t.return=n,d.sibling=t,n.child=d,n.child.memoizedState=zl(o),n.memoizedState=Vl,t):Nl(n,g));if(u=t.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return n1(t,n,g,a,w,u,o);if(d){d=a.fallback,g=n.mode,u=t.child,w=u.sibling;var k={mode:"hidden",children:a.children};return!(g&1)&&n.child!==u?(a=n.child,a.childLanes=0,a.pendingProps=k,n.deletions=null):(a=_n(u,k),a.subtreeFlags=u.subtreeFlags&14680064),w!==null?d=_n(w,d):(d=tr(d,g,o,null),d.flags|=2),d.return=n,a.return=n,a.sibling=d,n.child=a,a=d,d=n.child,g=t.child.memoizedState,g=g===null?zl(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=t.childLanes&~o,n.memoizedState=Vl,a}return d=t.child,t=d.sibling,a=_n(d,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=o),a.return=n,a.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=a,n.memoizedState=null,a}function Nl(t,n){return n=ys({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function is(t,n,o,a){return a!==null&&fl(a),jr(n,t.child,null,o),t=Nl(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function n1(t,n,o,a,u,d,g){if(o)return n.flags&256?(n.flags&=-257,a=Dl(Error(i(422))),is(t,n,g,a)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(d=a.fallback,u=n.mode,a=ys({mode:"visible",children:a.children},u,0,null),d=tr(d,u,g,null),d.flags|=2,a.return=n,d.return=n,a.sibling=d,n.child=a,n.mode&1&&jr(n,t.child,null,g),n.child.memoizedState=zl(g),n.memoizedState=Vl,d);if(!(n.mode&1))return is(t,n,g,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var w=a.dgst;return a=w,d=Error(i(419)),a=Dl(d,a,void 0),is(t,n,g,a)}if(w=(g&t.childLanes)!==0,St||w){if(a=Ze,a!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(a.suspendedLanes|g)?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,cn(t,u),Ht(a,t,u,-1))}return tu(),a=Dl(Error(i(421))),is(t,n,g,a)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=m1.bind(null,t),u._reactRetry=n,null):(t=d.treeContext,bt=Cn(u.nextSibling),Et=n,Me=!0,Ft=null,t!==null&&(Rt[Lt++]=ln,Rt[Lt++]=un,Rt[Lt++]=Kn,ln=t.id,un=t.overflow,Kn=n),n=Nl(n,a.children),n.flags|=4096,n)}function wp(t,n,o){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n),gl(t.return,n,o)}function $l(t,n,o,a,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=o,d.tailMode=u)}function Sp(t,n,o){var a=n.pendingProps,u=a.revealOrder,d=a.tail;if(pt(t,n,a.children,o),a=De.current,a&2)a=a&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,o,n);else if(t.tag===19)wp(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(be(De,a),!(n.mode&1))n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)t=o.alternate,t!==null&&qo(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),$l(n,!1,u,o,d);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&qo(t)===null){n.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}$l(n,!0,o,null,d);break;case"together":$l(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function os(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function fn(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),qn|=n.lanes,!(o&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=_n(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=_n(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function r1(t,n,o){switch(n.tag){case 3:yp(n),Ar();break;case 5:If(n);break;case 1:wt(n.type)&&Fo(n);break;case 4:xl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,u=n.memoizedProps.value;be(Go,a._currentValue),a._currentValue=u;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(be(De,De.current&1),n.flags|=128,null):o&n.child.childLanes?xp(t,n,o):(be(De,De.current&1),t=fn(t,n,o),t!==null?t.sibling:null);be(De,De.current&1);break;case 19:if(a=(o&n.childLanes)!==0,t.flags&128){if(a)return Sp(t,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(De,De.current),a)break;return null;case 22:case 23:return n.lanes=0,hp(t,n,o)}return fn(t,n,o)}var kp,Fl,Cp,Pp;kp=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Fl=function(){},Cp=function(t,n,o,a){var u=t.memoizedProps;if(u!==a){t=n.stateNode,Qn(qt.current);var d=null;switch(o){case"input":u=ga(t,u),a=ga(t,a),d=[];break;case"select":u=j({},u,{value:void 0}),a=j({},a,{value:void 0}),d=[];break;case"textarea":u=xa(t,u),a=xa(t,a),d=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=zo)}Sa(o,a);var g;o=null;for(M in u)if(!a.hasOwnProperty(M)&&u.hasOwnProperty(M)&&u[M]!=null)if(M==="style"){var w=u[M];for(g in w)w.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(l.hasOwnProperty(M)?d||(d=[]):(d=d||[]).push(M,null));for(M in a){var k=a[M];if(w=u!=null?u[M]:void 0,a.hasOwnProperty(M)&&k!==w&&(k!=null||w!=null))if(M==="style")if(w){for(g in w)!w.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in k)k.hasOwnProperty(g)&&w[g]!==k[g]&&(o||(o={}),o[g]=k[g])}else o||(d||(d=[]),d.push(M,o)),o=k;else M==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(d=d||[]).push(M,k)):M==="children"?typeof k!="string"&&typeof k!="number"||(d=d||[]).push(M,""+k):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(l.hasOwnProperty(M)?(k!=null&&M==="onScroll"&&Ae("scroll",t),d||w===k||(d=[])):(d=d||[]).push(M,k))}o&&(d=d||[]).push("style",o);var M=d;(n.updateQueue=M)&&(n.flags|=4)}},Pp=function(t,n,o,a){o!==a&&(n.flags|=4)};function Ii(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ut(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(n)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=o,n}function i1(t,n,o){var a=n.pendingProps;switch(ul(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(n),null;case 1:return wt(n.type)&&$o(),ut(n),null;case 3:return a=n.stateNode,Mr(),je(xt),je(at),kl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ho(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ft!==null&&(Jl(Ft),Ft=null))),Fl(t,n),ut(n),null;case 5:wl(n);var u=Qn(Ri.current);if(o=n.type,t!==null&&n.stateNode!=null)Cp(t,n,o,a,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(i(166));return ut(n),null}if(t=Qn(qt.current),Ho(n)){a=n.stateNode,o=n.type;var d=n.memoizedProps;switch(a[Xt]=n,a[Ti]=d,t=(n.mode&1)!==0,o){case"dialog":Ae("cancel",a),Ae("close",a);break;case"iframe":case"object":case"embed":Ae("load",a);break;case"video":case"audio":for(u=0;u<ki.length;u++)Ae(ki[u],a);break;case"source":Ae("error",a);break;case"img":case"image":case"link":Ae("error",a),Ae("load",a);break;case"details":Ae("toggle",a);break;case"input":rd(a,d),Ae("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Ae("invalid",a);break;case"textarea":sd(a,d),Ae("invalid",a)}Sa(o,d),u=null;for(var g in d)if(d.hasOwnProperty(g)){var w=d[g];g==="children"?typeof w=="string"?a.textContent!==w&&(d.suppressHydrationWarning!==!0&&Vo(a.textContent,w,t),u=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&Vo(a.textContent,w,t),u=["children",""+w]):l.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Ae("scroll",a)}switch(o){case"input":Se(a),od(a,d,!0);break;case"textarea":Se(a),ld(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=zo)}a=u,n.updateQueue=a,a!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ud(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=g.createElement(o,{is:a.is}):(t=g.createElement(o),o==="select"&&(g=t,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):t=g.createElementNS(t,o),t[Xt]=n,t[Ti]=a,kp(t,n,!1,!1),n.stateNode=t;e:{switch(g=ka(o,a),o){case"dialog":Ae("cancel",t),Ae("close",t),u=a;break;case"iframe":case"object":case"embed":Ae("load",t),u=a;break;case"video":case"audio":for(u=0;u<ki.length;u++)Ae(ki[u],t);u=a;break;case"source":Ae("error",t),u=a;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),u=a;break;case"details":Ae("toggle",t),u=a;break;case"input":rd(t,a),u=ga(t,a),Ae("invalid",t);break;case"option":u=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},u=j({},a,{value:void 0}),Ae("invalid",t);break;case"textarea":sd(t,a),u=xa(t,a),Ae("invalid",t);break;default:u=a}Sa(o,u),w=u;for(d in w)if(w.hasOwnProperty(d)){var k=w[d];d==="style"?fd(t,k):d==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&cd(t,k)):d==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ri(t,k):typeof k=="number"&&ri(t,""+k):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?k!=null&&d==="onScroll"&&Ae("scroll",t):k!=null&&V(t,d,k,g))}switch(o){case"input":Se(t),od(t,a,!1);break;case"textarea":Se(t),ld(t);break;case"option":a.value!=null&&t.setAttribute("value",""+le(a.value));break;case"select":t.multiple=!!a.multiple,d=a.value,d!=null?pr(t,!!a.multiple,d,!1):a.defaultValue!=null&&pr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=zo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ut(n),null;case 6:if(t&&n.stateNode!=null)Pp(t,n,t.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(i(166));if(o=Qn(Ri.current),Qn(qt.current),Ho(n)){if(a=n.stateNode,o=n.memoizedProps,a[Xt]=n,(d=a.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:Vo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(a.nodeValue,o,(t.mode&1)!==0)}d&&(n.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Xt]=n,n.stateNode=a}return ut(n),null;case 13:if(je(De),a=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&bt!==null&&n.mode&1&&!(n.flags&128))bf(),Ar(),n.flags|=98560,d=!1;else if(d=Ho(n),a!==null&&a.dehydrated!==null){if(t===null){if(!d)throw Error(i(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Xt]=n}else Ar(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ut(n),d=!1}else Ft!==null&&(Jl(Ft),Ft=null),d=!0;if(!d)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(t===null||De.current&1?Xe===0&&(Xe=3):tu())),n.updateQueue!==null&&(n.flags|=4),ut(n),null);case 4:return Mr(),Fl(t,n),t===null&&Ci(n.stateNode.containerInfo),ut(n),null;case 10:return ml(n.type._context),ut(n),null;case 17:return wt(n.type)&&$o(),ut(n),null;case 19:if(je(De),d=n.memoizedState,d===null)return ut(n),null;if(a=(n.flags&128)!==0,g=d.rendering,g===null)if(a)Ii(d,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(g=qo(t),g!==null){for(n.flags|=128,Ii(d,!1),a=g.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=o,o=n.child;o!==null;)d=o,t=a,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=t,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,t=g.dependencies,d.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return be(De,De.current&1|2),n.child}t=t.sibling}d.tail!==null&&ze()>Or&&(n.flags|=128,a=!0,Ii(d,!1),n.lanes=4194304)}else{if(!a)if(t=qo(g),t!==null){if(n.flags|=128,a=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Ii(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Me)return ut(n),null}else 2*ze()-d.renderingStartTime>Or&&o!==1073741824&&(n.flags|=128,a=!0,Ii(d,!1),n.lanes=4194304);d.isBackwards?(g.sibling=n.child,n.child=g):(o=d.last,o!==null?o.sibling=g:n.child=g,d.last=g)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=ze(),n.sibling=null,o=De.current,be(De,a?o&1|2:o&1),n):(ut(n),null);case 22:case 23:return eu(),a=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?At&1073741824&&(ut(n),n.subtreeFlags&6&&(n.flags|=8192)):ut(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function o1(t,n){switch(ul(n),n.tag){case 1:return wt(n.type)&&$o(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Mr(),je(xt),je(at),kl(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return wl(n),null;case 13:if(je(De),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return je(De),null;case 4:return Mr(),null;case 10:return ml(n.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var ss=!1,ct=!1,s1=typeof WeakSet=="function"?WeakSet:Set,q=null;function _r(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Oe(t,n,a)}else o.current=null}function Bl(t,n,o){try{o()}catch(a){Oe(t,n,a)}}var Tp=!1;function a1(t,n){if(el=Eo,t=nf(),Ka(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var u=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var g=0,w=-1,k=-1,M=0,N=0,F=t,z=null;t:for(;;){for(var X;F!==o||u!==0&&F.nodeType!==3||(w=g+u),F!==d||a!==0&&F.nodeType!==3||(k=g+a),F.nodeType===3&&(g+=F.nodeValue.length),(X=F.firstChild)!==null;)z=F,F=X;for(;;){if(F===t)break t;if(z===o&&++M===u&&(w=g),z===d&&++N===a&&(k=g),(X=F.nextSibling)!==null)break;F=z,z=F.parentNode}F=X}o=w===-1||k===-1?null:{start:w,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(tl={focusedElem:t,selectionRange:o},Eo=!1,q=n;q!==null;)if(n=q,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,q=t;else for(;q!==null;){n=q;try{var Z=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var te=Z.memoizedProps,Ne=Z.memoizedState,b=n.stateNode,P=b.getSnapshotBeforeUpdate(n.elementType===n.type?te:Bt(n.type,te),Ne);b.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var A=n.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(H){Oe(n,n.return,H)}if(t=n.sibling,t!==null){t.return=n.return,q=t;break}q=n.return}return Z=Tp,Tp=!1,Z}function Oi(t,n,o){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&t)===t){var d=u.destroy;u.destroy=void 0,d!==void 0&&Bl(n,o,d)}u=u.next}while(u!==a)}}function as(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==n)}}function Ul(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function Ep(t){var n=t.alternate;n!==null&&(t.alternate=null,Ep(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Xt],delete n[Ti],delete n[ol],delete n[Uv],delete n[Wv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wl(t,n,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=zo));else if(a!==4&&(t=t.child,t!==null))for(Wl(t,n,o),t=t.sibling;t!==null;)Wl(t,n,o),t=t.sibling}function Hl(t,n,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Hl(t,n,o),t=t.sibling;t!==null;)Hl(t,n,o),t=t.sibling}var it=null,Ut=!1;function jn(t,n,o){for(o=o.child;o!==null;)jp(t,n,o),o=o.sibling}function jp(t,n,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(wo,o)}catch{}switch(o.tag){case 5:ct||_r(o,n);case 6:var a=it,u=Ut;it=null,jn(t,n,o),it=a,Ut=u,it!==null&&(Ut?(t=it,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):it.removeChild(o.stateNode));break;case 18:it!==null&&(Ut?(t=it,o=o.stateNode,t.nodeType===8?il(t.parentNode,o):t.nodeType===1&&il(t,o),hi(t)):il(it,o.stateNode));break;case 4:a=it,u=Ut,it=o.stateNode.containerInfo,Ut=!0,jn(t,n,o),it=a,Ut=u;break;case 0:case 11:case 14:case 15:if(!ct&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var d=u,g=d.destroy;d=d.tag,g!==void 0&&(d&2||d&4)&&Bl(o,n,g),u=u.next}while(u!==a)}jn(t,n,o);break;case 1:if(!ct&&(_r(o,n),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(w){Oe(o,n,w)}jn(t,n,o);break;case 21:jn(t,n,o);break;case 22:o.mode&1?(ct=(a=ct)||o.memoizedState!==null,jn(t,n,o),ct=a):jn(t,n,o);break;default:jn(t,n,o)}}function Rp(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new s1),n.forEach(function(a){var u=g1.bind(null,t,a);o.has(a)||(o.add(a),a.then(u,u))})}}function Wt(t,n){var o=n.deletions;if(o!==null)for(var a=0;a<o.length;a++){var u=o[a];try{var d=t,g=n,w=g;e:for(;w!==null;){switch(w.tag){case 5:it=w.stateNode,Ut=!1;break e;case 3:it=w.stateNode.containerInfo,Ut=!0;break e;case 4:it=w.stateNode.containerInfo,Ut=!0;break e}w=w.return}if(it===null)throw Error(i(160));jp(d,g,u),it=null,Ut=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(M){Oe(u,n,M)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lp(n,t),n=n.sibling}function Lp(t,n){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(n,t),Zt(t),a&4){try{Oi(3,t,t.return),as(3,t)}catch(te){Oe(t,t.return,te)}try{Oi(5,t,t.return)}catch(te){Oe(t,t.return,te)}}break;case 1:Wt(n,t),Zt(t),a&512&&o!==null&&_r(o,o.return);break;case 5:if(Wt(n,t),Zt(t),a&512&&o!==null&&_r(o,o.return),t.flags&32){var u=t.stateNode;try{ri(u,"")}catch(te){Oe(t,t.return,te)}}if(a&4&&(u=t.stateNode,u!=null)){var d=t.memoizedProps,g=o!==null?o.memoizedProps:d,w=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&id(u,d),ka(w,g);var M=ka(w,d);for(g=0;g<k.length;g+=2){var N=k[g],F=k[g+1];N==="style"?fd(u,F):N==="dangerouslySetInnerHTML"?cd(u,F):N==="children"?ri(u,F):V(u,N,F,M)}switch(w){case"input":ya(u,d);break;case"textarea":ad(u,d);break;case"select":var z=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var X=d.value;X!=null?pr(u,!!d.multiple,X,!1):z!==!!d.multiple&&(d.defaultValue!=null?pr(u,!!d.multiple,d.defaultValue,!0):pr(u,!!d.multiple,d.multiple?[]:"",!1))}u[Ti]=d}catch(te){Oe(t,t.return,te)}}break;case 6:if(Wt(n,t),Zt(t),a&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,d=t.memoizedProps;try{u.nodeValue=d}catch(te){Oe(t,t.return,te)}}break;case 3:if(Wt(n,t),Zt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{hi(n.containerInfo)}catch(te){Oe(t,t.return,te)}break;case 4:Wt(n,t),Zt(t);break;case 13:Wt(n,t),Zt(t),u=t.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(Yl=ze())),a&4&&Rp(t);break;case 22:if(N=o!==null&&o.memoizedState!==null,t.mode&1?(ct=(M=ct)||N,Wt(n,t),ct=M):Wt(n,t),Zt(t),a&8192){if(M=t.memoizedState!==null,(t.stateNode.isHidden=M)&&!N&&t.mode&1)for(q=t,N=t.child;N!==null;){for(F=q=N;q!==null;){switch(z=q,X=z.child,z.tag){case 0:case 11:case 14:case 15:Oi(4,z,z.return);break;case 1:_r(z,z.return);var Z=z.stateNode;if(typeof Z.componentWillUnmount=="function"){a=z,o=z.return;try{n=a,Z.props=n.memoizedProps,Z.state=n.memoizedState,Z.componentWillUnmount()}catch(te){Oe(a,o,te)}}break;case 5:_r(z,z.return);break;case 22:if(z.memoizedState!==null){_p(F);continue}}X!==null?(X.return=z,q=X):_p(F)}N=N.sibling}e:for(N=null,F=t;;){if(F.tag===5){if(N===null){N=F;try{u=F.stateNode,M?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=F.stateNode,k=F.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=dd("display",g))}catch(te){Oe(t,t.return,te)}}}else if(F.tag===6){if(N===null)try{F.stateNode.nodeValue=M?"":F.memoizedProps}catch(te){Oe(t,t.return,te)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===t)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===t)break e;for(;F.sibling===null;){if(F.return===null||F.return===t)break e;N===F&&(N=null),F=F.return}N===F&&(N=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Wt(n,t),Zt(t),a&4&&Rp(t);break;case 21:break;default:Wt(n,t),Zt(t)}}function Zt(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var a=o;break e}o=o.return}throw Error(i(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(ri(u,""),a.flags&=-33);var d=Ap(t);Hl(t,d,u);break;case 3:case 4:var g=a.stateNode.containerInfo,w=Ap(t);Wl(t,w,g);break;default:throw Error(i(161))}}catch(k){Oe(t,t.return,k)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function l1(t,n,o){q=t,Mp(t)}function Mp(t,n,o){for(var a=(t.mode&1)!==0;q!==null;){var u=q,d=u.child;if(u.tag===22&&a){var g=u.memoizedState!==null||ss;if(!g){var w=u.alternate,k=w!==null&&w.memoizedState!==null||ct;w=ss;var M=ct;if(ss=g,(ct=k)&&!M)for(q=u;q!==null;)g=q,k=g.child,g.tag===22&&g.memoizedState!==null?Ip(u):k!==null?(k.return=g,q=k):Ip(u);for(;d!==null;)q=d,Mp(d),d=d.sibling;q=u,ss=w,ct=M}Dp(t)}else u.subtreeFlags&8772&&d!==null?(d.return=u,q=d):Dp(t)}}function Dp(t){for(;q!==null;){var n=q;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ct||as(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!ct)if(o===null)a.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Bt(n.type,o.memoizedProps);a.componentDidUpdate(u,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=n.updateQueue;d!==null&&_f(n,d,a);break;case 3:var g=n.updateQueue;if(g!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}_f(n,g,o)}break;case 5:var w=n.stateNode;if(o===null&&n.flags&4){o=w;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var M=n.alternate;if(M!==null){var N=M.memoizedState;if(N!==null){var F=N.dehydrated;F!==null&&hi(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}ct||n.flags&512&&Ul(n)}catch(z){Oe(n,n.return,z)}}if(n===t){q=null;break}if(o=n.sibling,o!==null){o.return=n.return,q=o;break}q=n.return}}function _p(t){for(;q!==null;){var n=q;if(n===t){q=null;break}var o=n.sibling;if(o!==null){o.return=n.return,q=o;break}q=n.return}}function Ip(t){for(;q!==null;){var n=q;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{as(4,n)}catch(k){Oe(n,o,k)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var u=n.return;try{a.componentDidMount()}catch(k){Oe(n,u,k)}}var d=n.return;try{Ul(n)}catch(k){Oe(n,d,k)}break;case 5:var g=n.return;try{Ul(n)}catch(k){Oe(n,g,k)}}}catch(k){Oe(n,n.return,k)}if(n===t){q=null;break}var w=n.sibling;if(w!==null){w.return=n.return,q=w;break}q=n.return}}var u1=Math.ceil,ls=W.ReactCurrentDispatcher,Kl=W.ReactCurrentOwner,_t=W.ReactCurrentBatchConfig,xe=0,Ze=null,We=null,ot=0,At=0,Ir=Pn(0),Xe=0,Vi=null,qn=0,us=0,Gl=0,zi=null,kt=null,Yl=0,Or=1/0,pn=null,cs=!1,Ql=null,Rn=null,ds=!1,Ln=null,fs=0,Ni=0,Xl=null,ps=-1,hs=0;function ht(){return xe&6?ze():ps!==-1?ps:ps=ze()}function Mn(t){return t.mode&1?xe&2&&ot!==0?ot&-ot:Kv.transition!==null?(hs===0&&(hs=bd()),hs):(t=Te,t!==0||(t=window.event,t=t===void 0?16:Od(t.type)),t):1}function Ht(t,n,o,a){if(50<Ni)throw Ni=0,Xl=null,Error(i(185));ui(t,o,a),(!(xe&2)||t!==Ze)&&(t===Ze&&(!(xe&2)&&(us|=o),Xe===4&&Dn(t,ot)),Ct(t,a),o===1&&xe===0&&!(n.mode&1)&&(Or=ze()+500,Bo&&En()))}function Ct(t,n){var o=t.callbackNode;Ky(t,n);var a=Co(t,t===Ze?ot:0);if(a===0)o!==null&&Pd(o),t.callbackNode=null,t.callbackPriority=0;else if(n=a&-a,t.callbackPriority!==n){if(o!=null&&Pd(o),n===1)t.tag===0?Hv(Vp.bind(null,t)):kf(Vp.bind(null,t)),Fv(function(){!(xe&6)&&En()}),o=null;else{switch(Ad(a)){case 1:o=ja;break;case 4:o=Td;break;case 16:o=xo;break;case 536870912:o=Ed;break;default:o=xo}o=Hp(o,Op.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function Op(t,n){if(ps=-1,hs=0,xe&6)throw Error(i(327));var o=t.callbackNode;if(Vr()&&t.callbackNode!==o)return null;var a=Co(t,t===Ze?ot:0);if(a===0)return null;if(a&30||a&t.expiredLanes||n)n=ms(t,a);else{n=a;var u=xe;xe|=2;var d=Np();(Ze!==t||ot!==n)&&(pn=null,Or=ze()+500,Zn(t,n));do try{f1();break}catch(w){zp(t,w)}while(!0);hl(),ls.current=d,xe=u,We!==null?n=0:(Ze=null,ot=0,n=Xe)}if(n!==0){if(n===2&&(u=Ra(t),u!==0&&(a=u,n=ql(t,u))),n===1)throw o=Vi,Zn(t,0),Dn(t,a),Ct(t,ze()),o;if(n===6)Dn(t,a);else{if(u=t.current.alternate,!(a&30)&&!c1(u)&&(n=ms(t,a),n===2&&(d=Ra(t),d!==0&&(a=d,n=ql(t,d))),n===1))throw o=Vi,Zn(t,0),Dn(t,a),Ct(t,ze()),o;switch(t.finishedWork=u,t.finishedLanes=a,n){case 0:case 1:throw Error(i(345));case 2:er(t,kt,pn);break;case 3:if(Dn(t,a),(a&130023424)===a&&(n=Yl+500-ze(),10<n)){if(Co(t,0)!==0)break;if(u=t.suspendedLanes,(u&a)!==a){ht(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=rl(er.bind(null,t,kt,pn),n);break}er(t,kt,pn);break;case 4:if(Dn(t,a),(a&4194240)===a)break;for(n=t.eventTimes,u=-1;0<a;){var g=31-Nt(a);d=1<<g,g=n[g],g>u&&(u=g),a&=~d}if(a=u,a=ze()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*u1(a/1960))-a,10<a){t.timeoutHandle=rl(er.bind(null,t,kt,pn),a);break}er(t,kt,pn);break;case 5:er(t,kt,pn);break;default:throw Error(i(329))}}}return Ct(t,ze()),t.callbackNode===o?Op.bind(null,t):null}function ql(t,n){var o=zi;return t.current.memoizedState.isDehydrated&&(Zn(t,n).flags|=256),t=ms(t,n),t!==2&&(n=kt,kt=o,n!==null&&Jl(n)),t}function Jl(t){kt===null?kt=t:kt.push.apply(kt,t)}function c1(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var u=o[a],d=u.getSnapshot;u=u.value;try{if(!$t(d(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dn(t,n){for(n&=~Gl,n&=~us,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-Nt(n),a=1<<o;t[o]=-1,n&=~a}}function Vp(t){if(xe&6)throw Error(i(327));Vr();var n=Co(t,0);if(!(n&1))return Ct(t,ze()),null;var o=ms(t,n);if(t.tag!==0&&o===2){var a=Ra(t);a!==0&&(n=a,o=ql(t,a))}if(o===1)throw o=Vi,Zn(t,0),Dn(t,n),Ct(t,ze()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,er(t,kt,pn),Ct(t,ze()),null}function Zl(t,n){var o=xe;xe|=1;try{return t(n)}finally{xe=o,xe===0&&(Or=ze()+500,Bo&&En())}}function Jn(t){Ln!==null&&Ln.tag===0&&!(xe&6)&&Vr();var n=xe;xe|=1;var o=_t.transition,a=Te;try{if(_t.transition=null,Te=1,t)return t()}finally{Te=a,_t.transition=o,xe=n,!(xe&6)&&En()}}function eu(){At=Ir.current,je(Ir)}function Zn(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,$v(o)),We!==null)for(o=We.return;o!==null;){var a=o;switch(ul(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&$o();break;case 3:Mr(),je(xt),je(at),kl();break;case 5:wl(a);break;case 4:Mr();break;case 13:je(De);break;case 19:je(De);break;case 10:ml(a.type._context);break;case 22:case 23:eu()}o=o.return}if(Ze=t,We=t=_n(t.current,null),ot=At=n,Xe=0,Vi=null,Gl=us=qn=0,kt=zi=null,Yn!==null){for(n=0;n<Yn.length;n++)if(o=Yn[n],a=o.interleaved,a!==null){o.interleaved=null;var u=a.next,d=o.pending;if(d!==null){var g=d.next;d.next=u,a.next=g}o.pending=a}Yn=null}return t}function zp(t,n){do{var o=We;try{if(hl(),Jo.current=ns,Zo){for(var a=_e.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}Zo=!1}if(Xn=0,Je=Qe=_e=null,Li=!1,Mi=0,Kl.current=null,o===null||o.return===null){Xe=1,Vi=n,We=null;break}e:{var d=t,g=o.return,w=o,k=n;if(n=ot,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var M=k,N=w,F=N.tag;if(!(N.mode&1)&&(F===0||F===11||F===15)){var z=N.alternate;z?(N.updateQueue=z.updateQueue,N.memoizedState=z.memoizedState,N.lanes=z.lanes):(N.updateQueue=null,N.memoizedState=null)}var X=up(g);if(X!==null){X.flags&=-257,cp(X,g,w,d,n),X.mode&1&&lp(d,M,n),n=X,k=M;var Z=n.updateQueue;if(Z===null){var te=new Set;te.add(k),n.updateQueue=te}else Z.add(k);break e}else{if(!(n&1)){lp(d,M,n),tu();break e}k=Error(i(426))}}else if(Me&&w.mode&1){var Ne=up(g);if(Ne!==null){!(Ne.flags&65536)&&(Ne.flags|=256),cp(Ne,g,w,d,n),fl(Dr(k,w));break e}}d=k=Dr(k,w),Xe!==4&&(Xe=2),zi===null?zi=[d]:zi.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,n&=-n,d.lanes|=n;var b=sp(d,k,n);Df(d,b);break e;case 1:w=k;var P=d.type,A=d.stateNode;if(!(d.flags&128)&&(typeof P.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Rn===null||!Rn.has(A)))){d.flags|=65536,n&=-n,d.lanes|=n;var H=ap(d,w,n);Df(d,H);break e}}d=d.return}while(d!==null)}Fp(o)}catch(ne){n=ne,We===o&&o!==null&&(We=o=o.return);continue}break}while(!0)}function Np(){var t=ls.current;return ls.current=ns,t===null?ns:t}function tu(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),Ze===null||!(qn&268435455)&&!(us&268435455)||Dn(Ze,ot)}function ms(t,n){var o=xe;xe|=2;var a=Np();(Ze!==t||ot!==n)&&(pn=null,Zn(t,n));do try{d1();break}catch(u){zp(t,u)}while(!0);if(hl(),xe=o,ls.current=a,We!==null)throw Error(i(261));return Ze=null,ot=0,Xe}function d1(){for(;We!==null;)$p(We)}function f1(){for(;We!==null&&!Vy();)$p(We)}function $p(t){var n=Wp(t.alternate,t,At);t.memoizedProps=t.pendingProps,n===null?Fp(t):We=n,Kl.current=null}function Fp(t){var n=t;do{var o=n.alternate;if(t=n.return,n.flags&32768){if(o=o1(o,n),o!==null){o.flags&=32767,We=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,We=null;return}}else if(o=i1(o,n,At),o!==null){We=o;return}if(n=n.sibling,n!==null){We=n;return}We=n=t}while(n!==null);Xe===0&&(Xe=5)}function er(t,n,o){var a=Te,u=_t.transition;try{_t.transition=null,Te=1,p1(t,n,o,a)}finally{_t.transition=u,Te=a}return null}function p1(t,n,o,a){do Vr();while(Ln!==null);if(xe&6)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var d=o.lanes|o.childLanes;if(Gy(t,d),t===Ze&&(We=Ze=null,ot=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ds||(ds=!0,Hp(xo,function(){return Vr(),null})),d=(o.flags&15990)!==0,o.subtreeFlags&15990||d){d=_t.transition,_t.transition=null;var g=Te;Te=1;var w=xe;xe|=4,Kl.current=null,a1(t,o),Lp(o,t),Dv(tl),Eo=!!el,tl=el=null,t.current=o,l1(o),zy(),xe=w,Te=g,_t.transition=d}else t.current=o;if(ds&&(ds=!1,Ln=t,fs=u),d=t.pendingLanes,d===0&&(Rn=null),Fy(o.stateNode),Ct(t,ze()),n!==null)for(a=t.onRecoverableError,o=0;o<n.length;o++)u=n[o],a(u.value,{componentStack:u.stack,digest:u.digest});if(cs)throw cs=!1,t=Ql,Ql=null,t;return fs&1&&t.tag!==0&&Vr(),d=t.pendingLanes,d&1?t===Xl?Ni++:(Ni=0,Xl=t):Ni=0,En(),null}function Vr(){if(Ln!==null){var t=Ad(fs),n=_t.transition,o=Te;try{if(_t.transition=null,Te=16>t?16:t,Ln===null)var a=!1;else{if(t=Ln,Ln=null,fs=0,xe&6)throw Error(i(331));var u=xe;for(xe|=4,q=t.current;q!==null;){var d=q,g=d.child;if(q.flags&16){var w=d.deletions;if(w!==null){for(var k=0;k<w.length;k++){var M=w[k];for(q=M;q!==null;){var N=q;switch(N.tag){case 0:case 11:case 15:Oi(8,N,d)}var F=N.child;if(F!==null)F.return=N,q=F;else for(;q!==null;){N=q;var z=N.sibling,X=N.return;if(Ep(N),N===M){q=null;break}if(z!==null){z.return=X,q=z;break}q=X}}}var Z=d.alternate;if(Z!==null){var te=Z.child;if(te!==null){Z.child=null;do{var Ne=te.sibling;te.sibling=null,te=Ne}while(te!==null)}}q=d}}if(d.subtreeFlags&2064&&g!==null)g.return=d,q=g;else e:for(;q!==null;){if(d=q,d.flags&2048)switch(d.tag){case 0:case 11:case 15:Oi(9,d,d.return)}var b=d.sibling;if(b!==null){b.return=d.return,q=b;break e}q=d.return}}var P=t.current;for(q=P;q!==null;){g=q;var A=g.child;if(g.subtreeFlags&2064&&A!==null)A.return=g,q=A;else e:for(g=P;q!==null;){if(w=q,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:as(9,w)}}catch(ne){Oe(w,w.return,ne)}if(w===g){q=null;break e}var H=w.sibling;if(H!==null){H.return=w.return,q=H;break e}q=w.return}}if(xe=u,En(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(wo,t)}catch{}a=!0}return a}finally{Te=o,_t.transition=n}}return!1}function Bp(t,n,o){n=Dr(o,n),n=sp(t,n,1),t=An(t,n,1),n=ht(),t!==null&&(ui(t,1,n),Ct(t,n))}function Oe(t,n,o){if(t.tag===3)Bp(t,t,o);else for(;n!==null;){if(n.tag===3){Bp(n,t,o);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rn===null||!Rn.has(a))){t=Dr(o,t),t=ap(n,t,1),n=An(n,t,1),t=ht(),n!==null&&(ui(n,1,t),Ct(n,t));break}}n=n.return}}function h1(t,n,o){var a=t.pingCache;a!==null&&a.delete(n),n=ht(),t.pingedLanes|=t.suspendedLanes&o,Ze===t&&(ot&o)===o&&(Xe===4||Xe===3&&(ot&130023424)===ot&&500>ze()-Yl?Zn(t,0):Gl|=o),Ct(t,n)}function Up(t,n){n===0&&(t.mode&1?(n=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):n=1);var o=ht();t=cn(t,n),t!==null&&(ui(t,n,o),Ct(t,o))}function m1(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),Up(t,o)}function g1(t,n){var o=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(n),Up(t,o)}var Wp;Wp=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||xt.current)St=!0;else{if(!(t.lanes&o)&&!(n.flags&128))return St=!1,r1(t,n,o);St=!!(t.flags&131072)}else St=!1,Me&&n.flags&1048576&&Cf(n,Wo,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;os(t,n),t=n.pendingProps;var u=Tr(n,at.current);Lr(n,o),u=Tl(null,n,a,t,u,o);var d=El();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,wt(a)?(d=!0,Fo(n)):d=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,vl(n),u.updater=rs,n.stateNode=u,u._reactInternals=n,Ml(n,a,t,o),n=Ol(null,n,a,!0,d,o)):(n.tag=0,Me&&d&&ll(n),pt(null,n,u,o),n=n.child),n;case 16:a=n.elementType;e:{switch(os(t,n),t=n.pendingProps,u=a._init,a=u(a._payload),n.type=a,u=n.tag=v1(a),t=Bt(a,t),u){case 0:n=Il(null,n,a,t,o);break e;case 1:n=gp(null,n,a,t,o);break e;case 11:n=dp(null,n,a,t,o);break e;case 14:n=fp(null,n,a,Bt(a.type,t),o);break e}throw Error(i(306,a,""))}return n;case 0:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),Il(t,n,a,u,o);case 1:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),gp(t,n,a,u,o);case 3:e:{if(yp(n),t===null)throw Error(i(387));a=n.pendingProps,d=n.memoizedState,u=d.element,Mf(t,n),Xo(n,a,null,o);var g=n.memoizedState;if(a=g.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){u=Dr(Error(i(423)),n),n=vp(t,n,a,o,u);break e}else if(a!==u){u=Dr(Error(i(424)),n),n=vp(t,n,a,o,u);break e}else for(bt=Cn(n.stateNode.containerInfo.firstChild),Et=n,Me=!0,Ft=null,o=Rf(n,null,a,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ar(),a===u){n=fn(t,n,o);break e}pt(t,n,a,o)}n=n.child}return n;case 5:return If(n),t===null&&dl(n),a=n.type,u=n.pendingProps,d=t!==null?t.memoizedProps:null,g=u.children,nl(a,u)?g=null:d!==null&&nl(a,d)&&(n.flags|=32),mp(t,n),pt(t,n,g,o),n.child;case 6:return t===null&&dl(n),null;case 13:return xp(t,n,o);case 4:return xl(n,n.stateNode.containerInfo),a=n.pendingProps,t===null?n.child=jr(n,null,a,o):pt(t,n,a,o),n.child;case 11:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),dp(t,n,a,u,o);case 7:return pt(t,n,n.pendingProps,o),n.child;case 8:return pt(t,n,n.pendingProps.children,o),n.child;case 12:return pt(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(a=n.type._context,u=n.pendingProps,d=n.memoizedProps,g=u.value,be(Go,a._currentValue),a._currentValue=g,d!==null)if($t(d.value,g)){if(d.children===u.children&&!xt.current){n=fn(t,n,o);break e}}else for(d=n.child,d!==null&&(d.return=n);d!==null;){var w=d.dependencies;if(w!==null){g=d.child;for(var k=w.firstContext;k!==null;){if(k.context===a){if(d.tag===1){k=dn(-1,o&-o),k.tag=2;var M=d.updateQueue;if(M!==null){M=M.shared;var N=M.pending;N===null?k.next=k:(k.next=N.next,N.next=k),M.pending=k}}d.lanes|=o,k=d.alternate,k!==null&&(k.lanes|=o),gl(d.return,o,n),w.lanes|=o;break}k=k.next}}else if(d.tag===10)g=d.type===n.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(i(341));g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),gl(g,o,n),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===n){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}pt(t,n,u.children,o),n=n.child}return n;case 9:return u=n.type,a=n.pendingProps.children,Lr(n,o),u=Mt(u),a=a(u),n.flags|=1,pt(t,n,a,o),n.child;case 14:return a=n.type,u=Bt(a,n.pendingProps),u=Bt(a.type,u),fp(t,n,a,u,o);case 15:return pp(t,n,n.type,n.pendingProps,o);case 17:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Bt(a,u),os(t,n),n.tag=1,wt(a)?(t=!0,Fo(n)):t=!1,Lr(n,o),ip(n,a,u),Ml(n,a,u,o),Ol(null,n,a,!0,t,o);case 19:return Sp(t,n,o);case 22:return hp(t,n,o)}throw Error(i(156,n.tag))};function Hp(t,n){return Cd(t,n)}function y1(t,n,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,n,o,a){return new y1(t,n,o,a)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v1(t){if(typeof t=="function")return nu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ye)return 11;if(t===qe)return 14}return 2}function _n(t,n){var o=t.alternate;return o===null?(o=It(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function gs(t,n,o,a,u,d){var g=2;if(a=t,typeof t=="function")nu(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case K:return tr(o.children,u,d,n);case J:g=8,u|=8;break;case ve:return t=It(12,o,n,u|2),t.elementType=ve,t.lanes=d,t;case Ee:return t=It(13,o,n,u),t.elementType=Ee,t.lanes=d,t;case Ue:return t=It(19,o,n,u),t.elementType=Ue,t.lanes=d,t;case ce:return ys(o,u,d,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ce:g=10;break e;case Be:g=9;break e;case Ye:g=11;break e;case qe:g=14;break e;case ye:g=16,a=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=It(g,o,n,u),n.elementType=t,n.type=a,n.lanes=d,n}function tr(t,n,o,a){return t=It(7,t,a,n),t.lanes=o,t}function ys(t,n,o,a){return t=It(22,t,a,n),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function ru(t,n,o){return t=It(6,t,null,n),t.lanes=o,t}function iu(t,n,o){return n=It(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function x1(t,n,o,a,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ou(t,n,o,a,u,d,g,w,k){return t=new x1(t,n,o,w,k),n===1?(n=1,d===!0&&(n|=8)):n=0,d=It(3,null,null,n),t.current=d,d.stateNode=t,d.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vl(d),t}function w1(t,n,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:a==null?null:""+a,children:t,containerInfo:n,implementation:o}}function Kp(t){if(!t)return Tn;t=t._reactInternals;e:{if(Un(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(wt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(wt(o))return wf(t,o,n)}return n}function Gp(t,n,o,a,u,d,g,w,k){return t=ou(o,a,!0,t,u,d,g,w,k),t.context=Kp(null),o=t.current,a=ht(),u=Mn(o),d=dn(a,u),d.callback=n??null,An(o,d,u),t.current.lanes=u,ui(t,u,a),Ct(t,a),t}function vs(t,n,o,a){var u=n.current,d=ht(),g=Mn(u);return o=Kp(o),n.context===null?n.context=o:n.pendingContext=o,n=dn(d,g),n.payload={element:t},a=a===void 0?null:a,a!==null&&(n.callback=a),t=An(u,n,g),t!==null&&(Ht(t,u,g,d),Qo(t,u,g)),g}function xs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function su(t,n){Yp(t,n),(t=t.alternate)&&Yp(t,n)}var Qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function au(t){this._internalRoot=t}ws.prototype.render=au.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));vs(t,n,null,null)},ws.prototype.unmount=au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jn(function(){vs(null,t,null,null)}),n[sn]=null}};function ws(t){this._internalRoot=t}ws.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ld();t={blockedOn:null,target:t,priority:n};for(var o=0;o<wn.length&&n!==0&&n<wn[o].priority;o++);wn.splice(o,0,t),o===0&&_d(t)}};function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ss(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function S1(t,n,o,a,u){if(u){if(typeof a=="function"){var d=a;a=function(){var M=xs(g);d.call(M)}}var g=Gp(n,a,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=g,t[sn]=g.current,Ci(t.nodeType===8?t.parentNode:t),Jn(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof a=="function"){var w=a;a=function(){var M=xs(k);w.call(M)}}var k=ou(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=k,t[sn]=k.current,Ci(t.nodeType===8?t.parentNode:t),Jn(function(){vs(n,k,o,a)}),k}function ks(t,n,o,a,u){var d=o._reactRootContainer;if(d){var g=d;if(typeof u=="function"){var w=u;u=function(){var k=xs(g);w.call(k)}}vs(n,g,t,u)}else g=S1(o,n,t,u,a);return xs(g)}jd=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=li(n.pendingLanes);o!==0&&(Ma(n,o|1),Ct(n,ze()),!(xe&6)&&(Or=ze()+500,En()))}break;case 13:Jn(function(){var a=cn(t,1);if(a!==null){var u=ht();Ht(a,t,1,u)}}),su(t,1)}},Da=function(t){if(t.tag===13){var n=cn(t,134217728);if(n!==null){var o=ht();Ht(n,t,134217728,o)}su(t,134217728)}},Rd=function(t){if(t.tag===13){var n=Mn(t),o=cn(t,n);if(o!==null){var a=ht();Ht(o,t,n,a)}su(t,n)}},Ld=function(){return Te},Md=function(t,n){var o=Te;try{return Te=t,n()}finally{Te=o}},Ta=function(t,n,o){switch(n){case"input":if(ya(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var a=o[n];if(a!==t&&a.form===t.form){var u=No(a);if(!u)throw Error(i(90));st(a),ya(a,u)}}}break;case"textarea":ad(t,o);break;case"select":n=o.value,n!=null&&pr(t,!!o.multiple,n,!1)}},gd=Zl,yd=Jn;var k1={usingClientEntryPoint:!1,Events:[Ei,Cr,No,hd,md,Zl]},$i={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C1={bundleType:$i.bundleType,version:$i.version,rendererPackageName:$i.rendererPackageName,rendererConfig:$i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sd(t),t===null?null:t.stateNode},findFiberByHostInstance:$i.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{wo=Cs.inject(C1),Qt=Cs}catch{}}return Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k1,Pt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(n))throw Error(i(200));return w1(t,n,null,o)},Pt.createRoot=function(t,n){if(!lu(t))throw Error(i(299));var o=!1,a="",u=Qp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=ou(t,1,!1,null,null,o,!1,a,u),t[sn]=n.current,Ci(t.nodeType===8?t.parentNode:t),new au(n)},Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Sd(n),t=t===null?null:t.stateNode,t},Pt.flushSync=function(t){return Jn(t)},Pt.hydrate=function(t,n,o){if(!Ss(n))throw Error(i(200));return ks(null,t,n,!0,o)},Pt.hydrateRoot=function(t,n,o){if(!lu(t))throw Error(i(405));var a=o!=null&&o.hydratedSources||null,u=!1,d="",g=Qp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),n=Gp(n,null,t,1,o??null,u,!1,d,g),t[sn]=n.current,Ci(t),a)for(t=0;t<a.length;t++)o=a[t],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new ws(n)},Pt.render=function(t,n,o){if(!Ss(n))throw Error(i(200));return ks(null,t,n,!1,o)},Pt.unmountComponentAtNode=function(t){if(!Ss(t))throw Error(i(40));return t._reactRootContainer?(Jn(function(){ks(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1},Pt.unstable_batchedUpdates=Zl,Pt.unstable_renderSubtreeIntoContainer=function(t,n,o,a){if(!Ss(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return ks(t,n,o,!1,a)},Pt.version="18.3.1-next-f1338f8080-20240426",Pt}var ih;function L1(){if(ih)return du.exports;ih=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),du.exports=R1(),du.exports}var oh;function M1(){if(oh)return Ps;oh=1;var e=L1();return Ps.createRoot=e.createRoot,Ps.hydrateRoot=e.hydrateRoot,Ps}var D1=M1();const _1=pc(D1);var rt=function(){return rt=Object.assign||function(r){for(var i,s=1,l=arguments.length;s<l;s++){i=arguments[s];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(r[c]=i[c])}return r},rt.apply(this,arguments)};function ro(e,r,i){if(i||arguments.length===2)for(var s=0,l=r.length,c;s<l;s++)(c||!(s in r))&&(c||(c=Array.prototype.slice.call(r,0,s)),c[s]=r[s]);return e.concat(c||Array.prototype.slice.call(r))}var Re="-ms-",Xi="-moz-",Pe="-webkit-",vg="comm",na="rule",mc="decl",I1="@import",xg="@keyframes",O1="@layer",wg=Math.abs,gc=String.fromCharCode,zu=Object.assign;function V1(e,r){return nt(e,0)^45?(((r<<2^nt(e,0))<<2^nt(e,1))<<2^nt(e,2))<<2^nt(e,3):0}function Sg(e){return e.trim()}function hn(e,r){return(e=r.exec(e))?e[0]:e}function pe(e,r,i){return e.replace(r,i)}function Ms(e,r,i){return e.indexOf(r,i)}function nt(e,r){return e.charCodeAt(r)|0}function Kr(e,r,i){return e.slice(r,i)}function en(e){return e.length}function kg(e){return e.length}function Ki(e,r){return r.push(e),e}function z1(e,r){return e.map(r).join("")}function sh(e,r){return e.filter(function(i){return!hn(i,r)})}var ra=1,Gr=1,Cg=0,zt=0,He=0,Jr="";function ia(e,r,i,s,l,c,f,h){return{value:e,root:r,parent:i,type:s,props:l,children:c,line:ra,column:Gr,length:f,return:"",siblings:h}}function On(e,r){return zu(ia("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function zr(e){for(;e.root;)e=On(e.root,{children:[e]});Ki(e,e.siblings)}function N1(){return He}function $1(){return He=zt>0?nt(Jr,--zt):0,Gr--,He===10&&(Gr=1,ra--),He}function Gt(){return He=zt<Cg?nt(Jr,zt++):0,Gr++,He===10&&(Gr=1,ra++),He}function ar(){return nt(Jr,zt)}function Ds(){return zt}function oa(e,r){return Kr(Jr,e,r)}function Nu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F1(e){return ra=Gr=1,Cg=en(Jr=e),zt=0,[]}function B1(e){return Jr="",e}function hu(e){return Sg(oa(zt-1,$u(e===91?e+2:e===40?e+1:e)))}function U1(e){for(;(He=ar())&&He<33;)Gt();return Nu(e)>2||Nu(He)>3?"":" "}function W1(e,r){for(;--r&&Gt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return oa(e,Ds()+(r<6&&ar()==32&&Gt()==32))}function $u(e){for(;Gt();)switch(He){case e:return zt;case 34:case 39:e!==34&&e!==39&&$u(He);break;case 40:e===41&&$u(e);break;case 92:Gt();break}return zt}function H1(e,r){for(;Gt()&&e+He!==57;)if(e+He===84&&ar()===47)break;return"/*"+oa(r,zt-1)+"*"+gc(e===47?e:Gt())}function K1(e){for(;!Nu(ar());)Gt();return oa(e,zt)}function G1(e){return B1(_s("",null,null,null,[""],e=F1(e),0,[0],e))}function _s(e,r,i,s,l,c,f,h,p){for(var m=0,y=0,v=f,x=0,E=0,R=0,T=1,D=1,_=1,O=0,V="",W=l,$=c,U=s,K=V;D;)switch(R=O,O=Gt()){case 40:if(R!=108&&nt(K,v-1)==58){Ms(K+=pe(hu(O),"&","&\f"),"&\f",wg(m?h[m-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:K+=hu(O);break;case 9:case 10:case 13:case 32:K+=U1(R);break;case 92:K+=W1(Ds()-1,7);continue;case 47:switch(ar()){case 42:case 47:Ki(Y1(H1(Gt(),Ds()),r,i,p),p);break;default:K+="/"}break;case 123*T:h[m++]=en(K)*_;case 125*T:case 59:case 0:switch(O){case 0:case 125:D=0;case 59+y:_==-1&&(K=pe(K,/\f/g,"")),E>0&&en(K)-v&&Ki(E>32?lh(K+";",s,i,v-1,p):lh(pe(K," ","")+";",s,i,v-2,p),p);break;case 59:K+=";";default:if(Ki(U=ah(K,r,i,m,y,l,h,V,W=[],$=[],v,c),c),O===123)if(y===0)_s(K,r,U,U,W,c,v,h,$);else switch(x===99&&nt(K,3)===110?100:x){case 100:case 108:case 109:case 115:_s(e,U,U,s&&Ki(ah(e,U,U,0,0,l,h,V,l,W=[],v,$),$),l,$,v,h,s?W:$);break;default:_s(K,U,U,U,[""],$,0,h,$)}}m=y=E=0,T=_=1,V=K="",v=f;break;case 58:v=1+en(K),E=R;default:if(T<1){if(O==123)--T;else if(O==125&&T++==0&&$1()==125)continue}switch(K+=gc(O),O*T){case 38:_=y>0?1:(K+="\f",-1);break;case 44:h[m++]=(en(K)-1)*_,_=1;break;case 64:ar()===45&&(K+=hu(Gt())),x=ar(),y=v=en(V=K+=K1(Ds())),O++;break;case 45:R===45&&en(K)==2&&(T=0)}}return c}function ah(e,r,i,s,l,c,f,h,p,m,y,v){for(var x=l-1,E=l===0?c:[""],R=kg(E),T=0,D=0,_=0;T<s;++T)for(var O=0,V=Kr(e,x+1,x=wg(D=f[T])),W=e;O<R;++O)(W=Sg(D>0?E[O]+" "+V:pe(V,/&\f/g,E[O])))&&(p[_++]=W);return ia(e,r,i,l===0?na:h,p,m,y,v)}function Y1(e,r,i,s){return ia(e,r,i,vg,gc(N1()),Kr(e,2,-2),0,s)}function lh(e,r,i,s,l){return ia(e,r,i,mc,Kr(e,0,s),Kr(e,s+1,-1),s,l)}function Pg(e,r,i){switch(V1(e,r)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+e+e;case 4789:return Xi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+Xi+e+Re+e+e;case 5936:switch(nt(e,r+11)){case 114:return Pe+e+Re+pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+Re+pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+Re+pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pe+e+Re+e+e;case 6165:return Pe+e+Re+"flex-"+e+e;case 5187:return Pe+e+pe(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return Pe+e+Re+"flex-item-"+pe(e,/flex-|-self/g,"")+(hn(e,/flex-|baseline/)?"":Re+"grid-row-"+pe(e,/flex-|-self/g,""))+e;case 4675:return Pe+e+Re+"flex-line-pack"+pe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pe+e+Re+pe(e,"shrink","negative")+e;case 5292:return Pe+e+Re+pe(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+pe(e,"-grow","")+Pe+e+Re+pe(e,"grow","positive")+e;case 4554:return Pe+pe(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return pe(pe(pe(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return pe(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return pe(pe(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+e+e;case 4200:if(!hn(e,/flex-|baseline/))return Re+"grid-column-align"+Kr(e,r)+e;break;case 2592:case 3360:return Re+pe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return r=l,hn(s.props,/grid-\w+-end/)})?~Ms(e+(i=i[r].value),"span",0)?e:Re+pe(e,"-start","")+e+Re+"grid-row-span:"+(~Ms(i,"span",0)?hn(i,/\d+/):+hn(i,/\d+/)-+hn(e,/\d+/))+";":Re+pe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return hn(s.props,/grid-\w+-start/)})?e:Re+pe(pe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return pe(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(e)-1-r>6)switch(nt(e,r+1)){case 109:if(nt(e,r+4)!==45)break;case 102:return pe(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+Xi+(nt(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Ms(e,"stretch",0)?Pg(pe(e,"stretch","fill-available"),r,i)+e:e}break;case 5152:case 5920:return pe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,c,f,h,p,m){return Re+l+":"+c+m+(f?Re+l+"-span:"+(h?p:+p-+c)+m:"")+e});case 4949:if(nt(e,r+6)===121)return pe(e,":",":"+Pe)+e;break;case 6444:switch(nt(e,nt(e,14)===45?18:11)){case 120:return pe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(nt(e,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Re+"$2box$3")+e;case 100:return pe(e,":",":"+Re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(e,"scroll-","scroll-snap-")+e}return e}function Us(e,r){for(var i="",s=0;s<e.length;s++)i+=r(e[s],s,e,r)||"";return i}function Q1(e,r,i,s){switch(e.type){case O1:if(e.children.length)break;case I1:case mc:return e.return=e.return||e.value;case vg:return"";case xg:return e.return=e.value+"{"+Us(e.children,s)+"}";case na:if(!en(e.value=e.props.join(",")))return""}return en(i=Us(e.children,s))?e.return=e.value+"{"+i+"}":""}function X1(e){var r=kg(e);return function(i,s,l,c){for(var f="",h=0;h<r;h++)f+=e[h](i,s,l,c)||"";return f}}function q1(e){return function(r){r.root||(r=r.return)&&e(r)}}function J1(e,r,i,s){if(e.length>-1&&!e.return)switch(e.type){case mc:e.return=Pg(e.value,e.length,i);return;case xg:return Us([On(e,{value:pe(e.value,"@","@"+Pe)})],s);case na:if(e.length)return z1(i=e.props,function(l){switch(hn(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zr(On(e,{props:[pe(l,/:(read-\w+)/,":"+Xi+"$1")]})),zr(On(e,{props:[l]})),zu(e,{props:sh(i,s)});break;case"::placeholder":zr(On(e,{props:[pe(l,/:(plac\w+)/,":"+Pe+"input-$1")]})),zr(On(e,{props:[pe(l,/:(plac\w+)/,":"+Xi+"$1")]})),zr(On(e,{props:[pe(l,/:(plac\w+)/,Re+"input-$1")]})),zr(On(e,{props:[l]})),zu(e,{props:sh(i,s)});break}return""})}}var Z1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jt={},Yr=typeof process<"u"&&jt!==void 0&&(jt.REACT_APP_SC_ATTR||jt.SC_ATTR)||"data-styled",Tg="active",Eg="data-styled-version",sa="6.1.14",yc=`/*!sc*/
`,Ws=typeof window<"u"&&"HTMLElement"in window,ex=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jt!==void 0&&jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jt.REACT_APP_SC_DISABLE_SPEEDY!==""?jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jt!==void 0&&jt.SC_DISABLE_SPEEDY!==void 0&&jt.SC_DISABLE_SPEEDY!==""&&jt.SC_DISABLE_SPEEDY!=="false"&&jt.SC_DISABLE_SPEEDY),tx={},aa=Object.freeze([]),Qr=Object.freeze({});function bg(e,r,i){return i===void 0&&(i=Qr),e.theme!==i.theme&&e.theme||r||i.theme}var Ag=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rx=/(^-|-$)/g;function uh(e){return e.replace(nx,"-").replace(rx,"")}var ix=/(a)(d)/gi,Ts=52,ch=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fu(e){var r,i="";for(r=Math.abs(e);r>Ts;r=r/Ts|0)i=ch(r%Ts)+i;return(ch(r%Ts)+i).replace(ix,"$1-$2")}var mu,jg=5381,$r=function(e,r){for(var i=r.length;i;)e=33*e^r.charCodeAt(--i);return e},Rg=function(e){return $r(jg,e)};function Lg(e){return Fu(Rg(e)>>>0)}function ox(e){return e.displayName||e.name||"Component"}function gu(e){return typeof e=="string"&&!0}var Mg=typeof Symbol=="function"&&Symbol.for,Dg=Mg?Symbol.for("react.memo"):60115,sx=Mg?Symbol.for("react.forward_ref"):60112,ax={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ux=((mu={})[sx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mu[Dg]=_g,mu);function dh(e){return("type"in(r=e)&&r.type.$$typeof)===Dg?_g:"$$typeof"in e?ux[e.$$typeof]:ax;var r}var cx=Object.defineProperty,dx=Object.getOwnPropertyNames,fh=Object.getOwnPropertySymbols,fx=Object.getOwnPropertyDescriptor,px=Object.getPrototypeOf,ph=Object.prototype;function Ig(e,r,i){if(typeof r!="string"){if(ph){var s=px(r);s&&s!==ph&&Ig(e,s,i)}var l=dx(r);fh&&(l=l.concat(fh(r)));for(var c=dh(e),f=dh(r),h=0;h<l.length;++h){var p=l[h];if(!(p in lx||i&&i[p]||f&&p in f||c&&p in c)){var m=fx(r,p);try{cx(e,p,m)}catch{}}}}return e}function ur(e){return typeof e=="function"}function vc(e){return typeof e=="object"&&"styledComponentId"in e}function or(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function Bu(e,r){if(e.length===0)return"";for(var i=e[0],s=1;s<e.length;s++)i+=e[s];return i}function io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Uu(e,r,i){if(i===void 0&&(i=!1),!i&&!io(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)e[s]=Uu(e[s],r[s]);else if(io(r))for(var s in r)e[s]=Uu(e[s],r[s]);return e}function xc(e,r){Object.defineProperty(e,"toString",{value:r})}function cr(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var hx=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return e.prototype.indexOfGroup=function(r){for(var i=0,s=0;s<r;s++)i+=this.groupSizes[s];return i},e.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,c=l;r>=c;)if((c<<=1)<0)throw cr(16,"".concat(r));this.groupSizes=new Uint32Array(c),this.groupSizes.set(s),this.length=c;for(var f=l;f<c;f++)this.groupSizes[f]=0}for(var h=this.indexOfGroup(r+1),p=(f=0,i.length);f<p;f++)this.tag.insertRule(h,i[f])&&(this.groupSizes[r]++,h++)},e.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],s=this.indexOfGroup(r),l=s+i;this.groupSizes[r]=0;for(var c=s;c<l;c++)this.tag.deleteRule(s)}},e.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var s=this.groupSizes[r],l=this.indexOfGroup(r),c=l+s,f=l;f<c;f++)i+="".concat(this.tag.getRule(f)).concat(yc);return i},e}(),Is=new Map,Hs=new Map,Os=1,Es=function(e){if(Is.has(e))return Is.get(e);for(;Hs.has(Os);)Os++;var r=Os++;return Is.set(e,r),Hs.set(r,e),r},mx=function(e,r){Os=r+1,Is.set(e,r),Hs.set(r,e)},gx="style[".concat(Yr,"][").concat(Eg,'="').concat(sa,'"]'),yx=new RegExp("^".concat(Yr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vx=function(e,r,i){for(var s,l=i.split(","),c=0,f=l.length;c<f;c++)(s=l[c])&&e.registerName(r,s)},xx=function(e,r){for(var i,s=((i=r.textContent)!==null&&i!==void 0?i:"").split(yc),l=[],c=0,f=s.length;c<f;c++){var h=s[c].trim();if(h){var p=h.match(yx);if(p){var m=0|parseInt(p[1],10),y=p[2];m!==0&&(mx(y,m),vx(e,y,p[3]),e.getTag().insertRules(m,l)),l.length=0}else l.push(h)}}},hh=function(e){for(var r=document.querySelectorAll(gx),i=0,s=r.length;i<s;i++){var l=r[i];l&&l.getAttribute(Yr)!==Tg&&(xx(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function wx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Og=function(e){var r=document.head,i=e||r,s=document.createElement("style"),l=function(h){var p=Array.from(h.querySelectorAll("style[".concat(Yr,"]")));return p[p.length-1]}(i),c=l!==void 0?l.nextSibling:null;s.setAttribute(Yr,Tg),s.setAttribute(Eg,sa);var f=wx();return f&&s.setAttribute("nonce",f),i.insertBefore(s,c),s},Sx=function(){function e(r){this.element=Og(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,l=0,c=s.length;l<c;l++){var f=s[l];if(f.ownerNode===i)return f}throw cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},e}(),kx=function(){function e(r){this.element=Og(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var s=document.createTextNode(i);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Cx=function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),mh=Ws,Px={isServer:!Ws,useCSSOMInjection:!ex},Ks=function(){function e(r,i,s){r===void 0&&(r=Qr),i===void 0&&(i={});var l=this;this.options=rt(rt({},Px),r),this.gs=i,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Ws&&mh&&(mh=!1,hh(this)),xc(this,function(){return function(c){for(var f=c.getTag(),h=f.length,p="",m=function(v){var x=function(_){return Hs.get(_)}(v);if(x===void 0)return"continue";var E=c.names.get(x),R=f.getGroup(v);if(E===void 0||!E.size||R.length===0)return"continue";var T="".concat(Yr,".g").concat(v,'[id="').concat(x,'"]'),D="";E!==void 0&&E.forEach(function(_){_.length>0&&(D+="".concat(_,","))}),p+="".concat(R).concat(T,'{content:"').concat(D,'"}').concat(yc)},y=0;y<h;y++)m(y);return p}(l)})}return e.registerId=function(r){return Es(r)},e.prototype.rehydrate=function(){!this.server&&Ws&&hh(this)},e.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new e(rt(rt({},this.options),r),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var s=i.useCSSOMInjection,l=i.target;return i.isServer?new Cx(l):s?new Sx(l):new kx(l)}(this.options),new hx(r)));var r},e.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},e.prototype.registerName=function(r,i){if(Es(r),this.names.has(r))this.names.get(r).add(i);else{var s=new Set;s.add(i),this.names.set(r,s)}},e.prototype.insertRules=function(r,i,s){this.registerName(r,i),this.getTag().insertRules(Es(r),s)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(Es(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Tx=/&/g,Ex=/^\s*\/\/.*$/gm;function Vg(e,r){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Vg(i.children,r)),i})}function bx(e){var r,i,s,l=Qr,c=l.options,f=c===void 0?Qr:c,h=l.plugins,p=h===void 0?aa:h,m=function(x,E,R){return R.startsWith(i)&&R.endsWith(i)&&R.replaceAll(i,"").length>0?".".concat(r):x},y=p.slice();y.push(function(x){x.type===na&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Tx,i).replace(s,m))}),f.prefix&&y.push(J1),y.push(Q1);var v=function(x,E,R,T){E===void 0&&(E=""),R===void 0&&(R=""),T===void 0&&(T="&"),r=T,i=E,s=new RegExp("\\".concat(i,"\\b"),"g");var D=x.replace(Ex,""),_=G1(R||E?"".concat(R," ").concat(E," { ").concat(D," }"):D);f.namespace&&(_=Vg(_,f.namespace));var O=[];return Us(_,X1(y.concat(q1(function(V){return O.push(V)})))),O};return v.hash=p.length?p.reduce(function(x,E){return E.name||cr(15),$r(x,E.name)},jg).toString():"",v}var Ax=new Ks,Wu=bx(),zg=ge.createContext({shouldForwardProp:void 0,styleSheet:Ax,stylis:Wu});zg.Consumer;ge.createContext(void 0);function Hu(){return G.useContext(zg)}var jx=function(){function e(r,i){var s=this;this.inject=function(l,c){c===void 0&&(c=Wu);var f=s.name+c.hash;l.hasNameForId(s.id,f)||l.insertRules(s.id,f,c(s.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,xc(this,function(){throw cr(12,String(s.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=Wu),this.name+r.hash},e}(),Rx=function(e){return e>="A"&&e<="Z"};function gh(e){for(var r="",i=0;i<e.length;i++){var s=e[i];if(i===1&&s==="-"&&e[0]==="-")return e;Rx(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var Ng=function(e){return e==null||e===!1||e===""},$g=function(e){var r,i,s=[];for(var l in e){var c=e[l];e.hasOwnProperty(l)&&!Ng(c)&&(Array.isArray(c)&&c.isCss||ur(c)?s.push("".concat(gh(l),":"),c,";"):io(c)?s.push.apply(s,ro(ro(["".concat(l," {")],$g(c),!1),["}"],!1)):s.push("".concat(gh(l),": ").concat((r=l,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in Z1||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return s};function Nn(e,r,i,s){if(Ng(e))return[];if(vc(e))return[".".concat(e.styledComponentId)];if(ur(e)){if(!ur(c=e)||c.prototype&&c.prototype.isReactComponent||!r)return[e];var l=e(r);return Nn(l,r,i,s)}var c;return e instanceof jx?i?(e.inject(i,s),[e.getName(s)]):[e]:io(e)?$g(e):Array.isArray(e)?Array.prototype.concat.apply(aa,e.map(function(f){return Nn(f,r,i,s)})):[e.toString()]}function Fg(e){for(var r=0;r<e.length;r+=1){var i=e[r];if(ur(i)&&!vc(i))return!1}return!0}var Lx=Rg(sa),Mx=function(){function e(r,i,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Fg(r),this.componentId=i,this.baseHash=$r(Lx,i),this.baseStyle=s,Ks.registerId(i)}return e.prototype.generateAndInjectStyles=function(r,i,s){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))l=or(l,this.staticRulesId);else{var c=Bu(Nn(this.rules,r,i,s)),f=Fu($r(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var h=s(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,h)}l=or(l,f),this.staticRulesId=f}else{for(var p=$r(this.baseHash,s.hash),m="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")m+=v;else if(v){var x=Bu(Nn(v,r,i,s));p=$r(p,x+y),m+=x}}if(m){var E=Fu(p>>>0);i.hasNameForId(this.componentId,E)||i.insertRules(this.componentId,E,s(m,".".concat(E),void 0,this.componentId)),l=or(l,E)}}return l},e}(),oo=ge.createContext(void 0);oo.Consumer;function Dx(e){var r=ge.useContext(oo),i=G.useMemo(function(){return function(s,l){if(!s)throw cr(14);if(ur(s)){var c=s(l);return c}if(Array.isArray(s)||typeof s!="object")throw cr(8);return l?rt(rt({},l),s):s}(e.theme,r)},[e.theme,r]);return e.children?ge.createElement(oo.Provider,{value:i},e.children):null}var yu={};function _x(e,r,i){var s=vc(e),l=e,c=!gu(e),f=r.attrs,h=f===void 0?aa:f,p=r.componentId,m=p===void 0?function(W,$){var U=typeof W!="string"?"sc":uh(W);yu[U]=(yu[U]||0)+1;var K="".concat(U,"-").concat(Lg(sa+U+yu[U]));return $?"".concat($,"-").concat(K):K}(r.displayName,r.parentComponentId):p,y=r.displayName,v=y===void 0?function(W){return gu(W)?"styled.".concat(W):"Styled(".concat(ox(W),")")}(e):y,x=r.displayName&&r.componentId?"".concat(uh(r.displayName),"-").concat(r.componentId):r.componentId||m,E=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h,R=r.shouldForwardProp;if(s&&l.shouldForwardProp){var T=l.shouldForwardProp;if(r.shouldForwardProp){var D=r.shouldForwardProp;R=function(W,$){return T(W,$)&&D(W,$)}}else R=T}var _=new Mx(i,x,s?l.componentStyle:void 0);function O(W,$){return function(U,K,J){var ve=U.attrs,Ce=U.componentStyle,Be=U.defaultProps,Ye=U.foldedComponentIds,Ee=U.styledComponentId,Ue=U.target,qe=ge.useContext(oo),ye=Hu(),ce=U.shouldForwardProp||ye.shouldForwardProp,B=bg(K,qe,Be)||Qr,Q=function(ie,ae,re){for(var le,he=rt(rt({},ae),{className:void 0,theme:re}),Le=0;Le<ie.length;Le+=1){var Se=ur(le=ie[Le])?le(he):le;for(var st in Se)he[st]=st==="className"?or(he[st],Se[st]):st==="style"?rt(rt({},he[st]),Se[st]):Se[st]}return ae.className&&(he.className=or(he.className,ae.className)),he}(ve,K,B),j=Q.as||Ue,S={};for(var L in Q)Q[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&Q.theme===B||(L==="forwardedAs"?S.as=Q.forwardedAs:ce&&!ce(L,j)||(S[L]=Q[L]));var Y=function(ie,ae){var re=Hu(),le=ie.generateAndInjectStyles(ae,re.styleSheet,re.stylis);return le}(Ce,Q),ee=or(Ye,Ee);return Y&&(ee+=" "+Y),Q.className&&(ee+=" "+Q.className),S[gu(j)&&!Ag.has(j)?"class":"className"]=ee,J&&(S.ref=J),G.createElement(j,S)}(V,W,$)}O.displayName=v;var V=ge.forwardRef(O);return V.attrs=E,V.componentStyle=_,V.displayName=v,V.shouldForwardProp=R,V.foldedComponentIds=s?or(l.foldedComponentIds,l.styledComponentId):"",V.styledComponentId=x,V.target=s?l.target:e,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=s?function($){for(var U=[],K=1;K<arguments.length;K++)U[K-1]=arguments[K];for(var J=0,ve=U;J<ve.length;J++)Uu($,ve[J],!0);return $}({},l.defaultProps,W):W}}),xc(V,function(){return".".concat(V.styledComponentId)}),c&&Ig(V,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function yh(e,r){for(var i=[e[0]],s=0,l=r.length;s<l;s+=1)i.push(r[s],e[s+1]);return i}var vh=function(e){return Object.assign(e,{isCss:!0})};function Bg(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(ur(e)||io(e))return vh(Nn(yh(aa,ro([e],r,!0))));var s=e;return r.length===0&&s.length===1&&typeof s[0]=="string"?Nn(s):vh(Nn(yh(s,r)))}function Ku(e,r,i){if(i===void 0&&(i=Qr),!r)throw cr(1,r);var s=function(l){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return e(r,i,Bg.apply(void 0,ro([l],c,!1)))};return s.attrs=function(l){return Ku(e,r,rt(rt({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},s.withConfig=function(l){return Ku(e,r,rt(rt({},i),l))},s}var Ug=function(e){return Ku(_x,e)},I=Ug;Ag.forEach(function(e){I[e]=Ug(e)});var Ix=function(){function e(r,i){this.rules=r,this.componentId=i,this.isStatic=Fg(r),Ks.registerId(this.componentId+1)}return e.prototype.createStyles=function(r,i,s,l){var c=l(Bu(Nn(this.rules,i,s,l)),""),f=this.componentId+r;s.insertRules(f,f,c)},e.prototype.removeStyles=function(r,i){i.clearRules(this.componentId+r)},e.prototype.renderStyles=function(r,i,s,l){r>2&&Ks.registerId(this.componentId+r),this.removeStyles(r,s),this.createStyles(r,i,s,l)},e}();function Ox(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var s=Bg.apply(void 0,ro([e],r,!1)),l="sc-global-".concat(Lg(JSON.stringify(s))),c=new Ix(s,l),f=function(p){var m=Hu(),y=ge.useContext(oo),v=ge.useRef(m.styleSheet.allocateGSInstance(l)).current;return m.styleSheet.server&&h(v,p,m.styleSheet,y,m.stylis),ge.useLayoutEffect(function(){if(!m.styleSheet.server)return h(v,p,m.styleSheet,y,m.stylis),function(){return c.removeStyles(v,m.styleSheet)}},[v,p,m.styleSheet,y,m.stylis]),null};function h(p,m,y,v,x){if(c.isStatic)c.renderStyles(p,tx,y,x);else{var E=rt(rt({},m),{theme:bg(m,v,f.defaultProps)});c.renderStyles(p,E,y,x)}}return ge.memo(f)}var Wg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xh=ge.createContext&&ge.createContext(Wg),Vx=["attr","size","title"];function zx(e,r){if(e==null)return{};var i=Nx(e,r),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)s=c[l],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}function Nx(e,r){if(e==null)return{};var i={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(r.indexOf(s)>=0)continue;i[s]=e[s]}return i}function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},Gs.apply(this,arguments)}function wh(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,s)}return i}function Ys(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?wh(Object(i),!0).forEach(function(s){$x(e,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):wh(Object(i)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))})}return e}function $x(e,r,i){return r=Fx(r),r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function Fx(e){var r=Bx(e,"string");return typeof r=="symbol"?r:r+""}function Bx(e,r){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var s=i.call(e,r||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Hg(e){return e&&e.map((r,i)=>ge.createElement(r.tag,Ys({key:i},r.attr),Hg(r.child)))}function vt(e){return r=>ge.createElement(Ux,Gs({attr:Ys({},e.attr)},r),Hg(e.child))}function Ux(e){var r=i=>{var{attr:s,size:l,title:c}=e,f=zx(e,Vx),h=l||i.size||"1em",p;return i.className&&(p=i.className),e.className&&(p=(p?p+" ":"")+e.className),ge.createElement("svg",Gs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,f,{className:p,style:Ys(Ys({color:e.color||i.color},i.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&ge.createElement("title",null,c),e.children)};return xh!==void 0?ge.createElement(xh.Consumer,null,i=>r(i)):r(Wg)}function Wx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(e)}function Hx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function Kx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function Gx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(e)}function Yx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}function Qx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(e)}function Xx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function qx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(e)}function Jx(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function Sh(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function Kg(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}const wc=G.createContext({});function Zr(e){const r=G.useRef(null);return r.current===null&&(r.current=e()),r.current}const la=G.createContext(null),ua=G.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Zx extends G.Component{getSnapshotBeforeUpdate(r){const i=this.props.childRef.current;if(i&&r.isPresent&&!this.props.isPresent){const s=i.offsetParent,l=s instanceof HTMLElement&&s.offsetWidth||0,c=this.props.sizeRef.current;c.height=i.offsetHeight||0,c.width=i.offsetWidth||0,c.top=i.offsetTop,c.left=i.offsetLeft,c.right=l-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ew({children:e,isPresent:r,anchorX:i}){const s=G.useId(),l=G.useRef(null),c=G.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=G.useContext(ua);return G.useInsertionEffect(()=>{const{width:h,height:p,top:m,left:y,right:v}=c.current;if(r||!l.current||!h||!p)return;const x=i==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=s;const E=document.createElement("style");return f&&(E.nonce=f),document.head.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${x}px !important;
            top: ${m}px !important;
          }
        `),()=>{document.head.removeChild(E)}},[r]),C.jsx(Zx,{isPresent:r,childRef:l,sizeRef:c,children:G.cloneElement(e,{ref:l})})}const tw=({children:e,initial:r,isPresent:i,onExitComplete:s,custom:l,presenceAffectsLayout:c,mode:f,anchorX:h})=>{const p=Zr(nw),m=G.useId(),y=G.useCallback(x=>{p.set(x,!0);for(const E of p.values())if(!E)return;s&&s()},[p,s]),v=G.useMemo(()=>({id:m,initial:r,isPresent:i,custom:l,onExitComplete:y,register:x=>(p.set(x,!1),()=>p.delete(x))}),c?[Math.random(),y]:[i,y]);return G.useMemo(()=>{p.forEach((x,E)=>p.set(E,!1))},[i]),G.useEffect(()=>{!i&&!p.size&&s&&s()},[i]),f==="popLayout"&&(e=C.jsx(ew,{isPresent:i,anchorX:h,children:e})),C.jsx(la.Provider,{value:v,children:e})};function nw(){return new Map}function Gg(e=!0){const r=G.useContext(la);if(r===null)return[!0,null];const{isPresent:i,onExitComplete:s,register:l}=r,c=G.useId();G.useEffect(()=>{e&&l(c)},[e]);const f=G.useCallback(()=>e&&s&&s(c),[c,s,e]);return!i&&s?[!1,f]:[!0]}const bs=e=>e.key||"";function kh(e){const r=[];return G.Children.forEach(e,i=>{G.isValidElement(i)&&r.push(i)}),r}const Sc=typeof window<"u",ca=Sc?G.useLayoutEffect:G.useEffect,kc=({children:e,custom:r,initial:i=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:c="sync",propagate:f=!1,anchorX:h="left"})=>{const[p,m]=Gg(f),y=G.useMemo(()=>kh(e),[e]),v=f&&!p?[]:y.map(bs),x=G.useRef(!0),E=G.useRef(y),R=Zr(()=>new Map),[T,D]=G.useState(y),[_,O]=G.useState(y);ca(()=>{x.current=!1,E.current=y;for(let $=0;$<_.length;$++){const U=bs(_[$]);v.includes(U)?R.delete(U):R.get(U)!==!0&&R.set(U,!1)}},[_,v.length,v.join("-")]);const V=[];if(y!==T){let $=[...y];for(let U=0;U<_.length;U++){const K=_[U],J=bs(K);v.includes(J)||($.splice(U,0,K),V.push(K))}c==="wait"&&V.length&&($=V),O(kh($)),D(y);return}const{forceRender:W}=G.useContext(wc);return C.jsx(C.Fragment,{children:_.map($=>{const U=bs($),K=f&&!p?!1:y===_||v.includes(U),J=()=>{if(R.has(U))R.set(U,!0);else return;let ve=!0;R.forEach(Ce=>{Ce||(ve=!1)}),ve&&(W==null||W(),O(E.current),f&&(m==null||m()),s&&s())};return C.jsx(tw,{isPresent:K,initial:!x.current||i?void 0:!1,custom:K?void 0:r,presenceAffectsLayout:l,mode:c,onExitComplete:K?void 0:J,anchorX:h,children:$},U)})})},yt=e=>e;let rw=yt,Gu=yt;function Cc(e){let r;return()=>(r===void 0&&(r=e()),r)}const dr=(e,r,i)=>{const s=r-e;return s===0?1:(i-e)/s},mn=e=>e*1e3,gn=e=>e/1e3,iw={skipAnimations:!1,useManualTiming:!1};function ow(e){let r=new Set,i=new Set,s=!1,l=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function h(m){c.has(m)&&(p.schedule(m),e()),m(f)}const p={schedule:(m,y=!1,v=!1)=>{const E=v&&s?r:i;return y&&c.add(m),E.has(m)||E.add(m),m},cancel:m=>{i.delete(m),c.delete(m)},process:m=>{if(f=m,s){l=!0;return}s=!0,[r,i]=[i,r],r.forEach(h),r.clear(),s=!1,l&&(l=!1,p.process(m))}};return p}const As=["read","resolveKeyframes","update","preRender","render","postRender"],sw=40;function Yg(e,r){let i=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,f=As.reduce((_,O)=>(_[O]=ow(c),_),{}),{read:h,resolveKeyframes:p,update:m,preRender:y,render:v,postRender:x}=f,E=()=>{const _=performance.now();i=!1,l.delta=s?1e3/60:Math.max(Math.min(_-l.timestamp,sw),1),l.timestamp=_,l.isProcessing=!0,h.process(l),p.process(l),m.process(l),y.process(l),v.process(l),x.process(l),l.isProcessing=!1,i&&r&&(s=!1,e(E))},R=()=>{i=!0,s=!0,l.isProcessing||e(E)};return{schedule:As.reduce((_,O)=>{const V=f[O];return _[O]=(W,$=!1,U=!1)=>(i||R(),V.schedule(W,$,U)),_},{}),cancel:_=>{for(let O=0;O<As.length;O++)f[As[O]].cancel(_)},state:l,steps:f}}const{schedule:ke,cancel:Yt,state:tt,steps:vu}=Yg(typeof requestAnimationFrame<"u"?requestAnimationFrame:yt,!0),Qg=G.createContext({strict:!1}),Ch={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xr={};for(const e in Ch)Xr[e]={isEnabled:r=>Ch[e].some(i=>!!r[i])};function aw(e){for(const r in e)Xr[r]={...Xr[r],...e[r]}}const lw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Qs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||lw.has(e)}let Xg=e=>!Qs(e);function uw(e){e&&(Xg=r=>r.startsWith("on")?!Qs(r):e(r))}try{uw(require("@emotion/is-prop-valid").default)}catch{}function cw(e,r,i){const s={};for(const l in e)l==="values"&&typeof e.values=="object"||(Xg(l)||i===!0&&Qs(l)||!r&&!Qs(l)||e.draggable&&l.startsWith("onDrag"))&&(s[l]=e[l]);return s}function dw(e){if(typeof Proxy>"u")return e;const r=new Map,i=(...s)=>e(...s);return new Proxy(i,{get:(s,l)=>l==="create"?e:(r.has(l)||r.set(l,e(l)),r.get(l))})}const da=G.createContext({});function so(e){return typeof e=="string"||Array.isArray(e)}function fa(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Pc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tc=["initial",...Pc];function pa(e){return fa(e.animate)||Tc.some(r=>so(e[r]))}function qg(e){return!!(pa(e)||e.variants)}function fw(e,r){if(pa(e)){const{initial:i,animate:s}=e;return{initial:i===!1||so(i)?i:void 0,animate:so(s)?s:void 0}}return e.inherit!==!1?r:{}}function pw(e){const{initial:r,animate:i}=fw(e,G.useContext(da));return G.useMemo(()=>({initial:r,animate:i}),[Ph(r),Ph(i)])}function Ph(e){return Array.isArray(e)?e.join(" "):e}const hw=Symbol.for("motionComponentSymbol");function Fr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function mw(e,r,i){return G.useCallback(s=>{s&&e.onMount&&e.onMount(s),r&&(s?r.mount(s):r.unmount()),i&&(typeof i=="function"?i(s):Fr(i)&&(i.current=s))},[r])}const Ec=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gw="framerAppearId",Jg="data-"+Ec(gw),{schedule:bc,cancel:z5}=Yg(queueMicrotask,!1),Zg=G.createContext({});function yw(e,r,i,s,l){var c,f;const{visualElement:h}=G.useContext(da),p=G.useContext(Qg),m=G.useContext(la),y=G.useContext(ua).reducedMotion,v=G.useRef(null);s=s||p.renderer,!v.current&&s&&(v.current=s(e,{visualState:r,parent:h,props:i,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:y}));const x=v.current,E=G.useContext(Zg);x&&!x.projection&&l&&(x.type==="html"||x.type==="svg")&&vw(v.current,i,l,E);const R=G.useRef(!1);G.useInsertionEffect(()=>{x&&R.current&&x.update(i,m)});const T=i[Jg],D=G.useRef(!!T&&!(!((c=window.MotionHandoffIsComplete)===null||c===void 0)&&c.call(window,T))&&((f=window.MotionHasOptimisedAnimation)===null||f===void 0?void 0:f.call(window,T)));return ca(()=>{x&&(R.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),bc.render(x.render),D.current&&x.animationState&&x.animationState.animateChanges())}),G.useEffect(()=>{x&&(!D.current&&x.animationState&&x.animationState.animateChanges(),D.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window,T)}),D.current=!1))}),x}function vw(e,r,i,s){const{layoutId:l,layout:c,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:m}=r;e.projection=new i(e.latestValues,r["data-framer-portal-id"]?void 0:e0(e.parent)),e.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!f||h&&Fr(h),visualElement:e,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:m})}function e0(e){if(e)return e.options.allowProjection!==!1?e.projection:e0(e.parent)}function xw({preloadedFeatures:e,createVisualElement:r,useRender:i,useVisualState:s,Component:l}){var c,f;e&&aw(e);function h(m,y){let v;const x={...G.useContext(ua),...m,layoutId:ww(m)},{isStatic:E}=x,R=pw(m),T=s(m,E);if(!E&&Sc){Sw();const D=kw(x);v=D.MeasureLayout,R.visualElement=yw(l,T,x,r,D.ProjectionNode)}return C.jsxs(da.Provider,{value:R,children:[v&&R.visualElement?C.jsx(v,{visualElement:R.visualElement,...x}):null,i(l,m,mw(T,R.visualElement,y),T,E,R.visualElement)]})}h.displayName=`motion.${typeof l=="string"?l:`create(${(f=(c=l.displayName)!==null&&c!==void 0?c:l.name)!==null&&f!==void 0?f:""})`}`;const p=G.forwardRef(h);return p[hw]=l,p}function ww({layoutId:e}){const r=G.useContext(wc).id;return r&&e!==void 0?r+"-"+e:e}function Sw(e,r){G.useContext(Qg).strict}function kw(e){const{drag:r,layout:i}=Xr;if(!r&&!i)return{};const s={...r,...i};return{MeasureLayout:r!=null&&r.isEnabled(e)||i!=null&&i.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Cw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ac(e){return typeof e!="string"||e.includes("-")?!1:!!(Cw.indexOf(e)>-1||/[A-Z]/u.test(e))}function Th(e){const r=[{},{}];return e==null||e.values.forEach((i,s)=>{r[0][s]=i.get(),r[1][s]=i.getVelocity()}),r}function jc(e,r,i,s){if(typeof r=="function"){const[l,c]=Th(s);r=r(i!==void 0?i:e.custom,l,c)}if(typeof r=="string"&&(r=e.variants&&e.variants[r]),typeof r=="function"){const[l,c]=Th(s);r=r(i!==void 0?i:e.custom,l,c)}return r}const Yu=e=>Array.isArray(e),Pw=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Tw=e=>Yu(e)?e[e.length-1]||0:e,ft=e=>!!(e&&e.getVelocity);function Vs(e){const r=ft(e)?e.get():e;return Pw(r)?r.toValue():r}function Ew({scrapeMotionValuesFromProps:e,createRenderState:r,onUpdate:i},s,l,c){const f={latestValues:bw(s,l,c,e),renderState:r()};return i&&(f.onMount=h=>i({props:s,current:h,...f}),f.onUpdate=h=>i(h)),f}const t0=e=>(r,i)=>{const s=G.useContext(da),l=G.useContext(la),c=()=>Ew(e,r,s,l);return i?c():Zr(c)};function bw(e,r,i,s){const l={},c=s(e,{});for(const x in c)l[x]=Vs(c[x]);let{initial:f,animate:h}=e;const p=pa(e),m=qg(e);r&&m&&!p&&e.inherit!==!1&&(f===void 0&&(f=r.initial),h===void 0&&(h=r.animate));let y=i?i.initial===!1:!1;y=y||f===!1;const v=y?h:f;if(v&&typeof v!="boolean"&&!fa(v)){const x=Array.isArray(v)?v:[v];for(let E=0;E<x.length;E++){const R=jc(e,x[E]);if(R){const{transitionEnd:T,transition:D,..._}=R;for(const O in _){let V=_[O];if(Array.isArray(V)){const W=y?V.length-1:0;V=V[W]}V!==null&&(l[O]=V)}for(const O in T)l[O]=T[O]}}}return l}const ei=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fr=new Set(ei),n0=e=>r=>typeof r=="string"&&r.startsWith(e),Rc=n0("--"),Aw=n0("var(--"),Lc=e=>Aw(e)?jw.test(e.split("/*")[0].trim()):!1,jw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,r0=(e,r)=>r&&typeof e=="number"?r.transform(e):e,on=(e,r,i)=>i>r?r:i<e?e:i,ti={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ao={...ti,transform:e=>on(0,1,e)},js={...ti,default:1},fo=e=>({test:r=>typeof r=="string"&&r.endsWith(e)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${e}`}),Vn=fo("deg"),nn=fo("%"),ue=fo("px"),Rw=fo("vh"),Lw=fo("vw"),Eh={...nn,parse:e=>nn.parse(e)/100,transform:e=>nn.transform(e*100)},Mw={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,radius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,backgroundPositionX:ue,backgroundPositionY:ue},Dw={rotate:Vn,rotateX:Vn,rotateY:Vn,rotateZ:Vn,scale:js,scaleX:js,scaleY:js,scaleZ:js,skew:Vn,skewX:Vn,skewY:Vn,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:ao,originX:Eh,originY:Eh,originZ:ue},bh={...ti,transform:Math.round},Mc={...Mw,...Dw,zIndex:bh,size:ue,fillOpacity:ao,strokeOpacity:ao,numOctaves:bh},_w={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Iw=ei.length;function Ow(e,r,i){let s="",l=!0;for(let c=0;c<Iw;c++){const f=ei[c],h=e[f];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(f.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||i){const m=r0(h,Mc[f]);if(!p){l=!1;const y=_w[f]||f;s+=`${y}(${m}) `}i&&(r[f]=m)}}return s=s.trim(),i?s=i(r,l?"":s):l&&(s="none"),s}function Dc(e,r,i){const{style:s,vars:l,transformOrigin:c}=e;let f=!1,h=!1;for(const p in r){const m=r[p];if(fr.has(p)){f=!0;continue}else if(Rc(p)){l[p]=m;continue}else{const y=r0(m,Mc[p]);p.startsWith("origin")?(h=!0,c[p]=y):s[p]=y}}if(r.transform||(f||i?s.transform=Ow(r,e.transform,i):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:m="50%",originZ:y=0}=c;s.transformOrigin=`${p} ${m} ${y}`}}const Vw={offset:"stroke-dashoffset",array:"stroke-dasharray"},zw={offset:"strokeDashoffset",array:"strokeDasharray"};function Nw(e,r,i=1,s=0,l=!0){e.pathLength=1;const c=l?Vw:zw;e[c.offset]=ue.transform(-s);const f=ue.transform(r),h=ue.transform(i);e[c.array]=`${f} ${h}`}function Ah(e,r,i){return typeof e=="string"?e:ue.transform(r+i*e)}function $w(e,r,i){const s=Ah(r,e.x,e.width),l=Ah(i,e.y,e.height);return`${s} ${l}`}function _c(e,{attrX:r,attrY:i,attrScale:s,originX:l,originY:c,pathLength:f,pathSpacing:h=1,pathOffset:p=0,...m},y,v){if(Dc(e,m,v),y){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:E,dimensions:R}=e;x.transform&&(R&&(E.transform=x.transform),delete x.transform),R&&(l!==void 0||c!==void 0||E.transform)&&(E.transformOrigin=$w(R,l!==void 0?l:.5,c!==void 0?c:.5)),r!==void 0&&(x.x=r),i!==void 0&&(x.y=i),s!==void 0&&(x.scale=s),f!==void 0&&Nw(x,f,h,p,!1)}const Ic=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),i0=()=>({...Ic(),attrs:{}}),Oc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function o0(e,{style:r,vars:i},s,l){Object.assign(e.style,r,l&&l.getProjectionStyles(s));for(const c in i)e.style.setProperty(c,i[c])}const s0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function a0(e,r,i,s){o0(e,r,void 0,s);for(const l in r.attrs)e.setAttribute(s0.has(l)?l:Ec(l),r.attrs[l])}const lo={};function Fw(e){for(const r in e)lo[r]=e[r],Rc(r)&&(lo[r].isCSSVariable=!0)}function l0(e,{layout:r,layoutId:i}){return fr.has(e)||e.startsWith("origin")||(r||i!==void 0)&&(!!lo[e]||e==="opacity")}function Vc(e,r,i){var s;const{style:l}=e,c={};for(const f in l)(ft(l[f])||r.style&&ft(r.style[f])||l0(f,e)||((s=i==null?void 0:i.getValue(f))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(c[f]=l[f]);return c}function u0(e,r,i){const s=Vc(e,r,i);for(const l in e)if(ft(e[l])||ft(r[l])){const c=ei.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[c]=e[l]}return s}function Bw(e,r){try{r.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}const jh=["x","y","width","height","cx","cy","r"],Uw={useVisualState:t0({scrapeMotionValuesFromProps:u0,createRenderState:i0,onUpdate:({props:e,prevProps:r,current:i,renderState:s,latestValues:l})=>{if(!i)return;let c=!!e.drag;if(!c){for(const h in l)if(fr.has(h)){c=!0;break}}if(!c)return;let f=!r;if(r)for(let h=0;h<jh.length;h++){const p=jh[h];e[p]!==r[p]&&(f=!0)}f&&ke.read(()=>{Bw(i,s),ke.render(()=>{_c(s,l,Oc(i.tagName),e.transformTemplate),a0(i,s)})})}})},Ww={useVisualState:t0({scrapeMotionValuesFromProps:Vc,createRenderState:Ic})};function c0(e,r,i){for(const s in r)!ft(r[s])&&!l0(s,i)&&(e[s]=r[s])}function Hw({transformTemplate:e},r){return G.useMemo(()=>{const i=Ic();return Dc(i,r,e),Object.assign({},i.vars,i.style)},[r])}function Kw(e,r){const i=e.style||{},s={};return c0(s,i,e),Object.assign(s,Hw(e,r)),s}function Gw(e,r){const i={},s=Kw(e,r);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=s,i}function Yw(e,r,i,s){const l=G.useMemo(()=>{const c=i0();return _c(c,r,Oc(s),e.transformTemplate),{...c.attrs,style:{...c.style}}},[r]);if(e.style){const c={};c0(c,e.style,e),l.style={...c,...l.style}}return l}function Qw(e=!1){return(i,s,l,{latestValues:c},f)=>{const p=(Ac(i)?Yw:Gw)(s,c,f,i),m=cw(s,typeof i=="string",e),y=i!==G.Fragment?{...m,...p,ref:l}:{},{children:v}=s,x=G.useMemo(()=>ft(v)?v.get():v,[v]);return G.createElement(i,{...y,children:x})}}function Xw(e,r){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...Ac(s)?Uw:Ww,preloadedFeatures:e,useRender:Qw(l),createVisualElement:r,Component:s};return xw(f)}}function d0(e,r){if(!Array.isArray(r))return!1;const i=r.length;if(i!==e.length)return!1;for(let s=0;s<i;s++)if(r[s]!==e[s])return!1;return!0}function ha(e,r,i){const s=e.getProps();return jc(s,r,i!==void 0?i:s.custom,e)}const f0=Cc(()=>window.ScrollTimeline!==void 0);class qw{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>"finished"in r?r.finished:r))}getAll(r){return this.animations[0][r]}setAll(r,i){for(let s=0;s<this.animations.length;s++)this.animations[s][r]=i}attachTimeline(r,i){const s=this.animations.map(l=>{if(f0()&&l.attachTimeline)return l.attachTimeline(r);if(typeof i=="function")return i(l)});return()=>{s.forEach((l,c)=>{l&&l(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get startTime(){return this.getAll("startTime")}get duration(){let r=0;for(let i=0;i<this.animations.length;i++)r=Math.max(r,this.animations[i].duration);return r}runAll(r){this.animations.forEach(i=>i[r]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Jw extends qw{then(r,i){return Promise.all(this.animations).then(r).catch(i)}}function zc(e,r){return e?e[r]||e.default||e:void 0}const Qu=2e4;function p0(e){let r=0;const i=50;let s=e.next(r);for(;!s.done&&r<Qu;)r+=i,s=e.next(r);return r>=Qu?1/0:r}function Nc(e){return typeof e=="function"}function Rh(e,r){e.timeline=r,e.onfinish=null}const $c=e=>Array.isArray(e)&&typeof e[0]=="number",Zw={linearEasing:void 0};function eS(e,r){const i=Cc(e);return()=>{var s;return(s=Zw[r])!==null&&s!==void 0?s:i()}}const Xs=eS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),h0=(e,r,i=10)=>{let s="";const l=Math.max(Math.round(r/i),2);for(let c=0;c<l;c++)s+=e(dr(0,l-1,c))+", ";return`linear(${s.substring(0,s.length-2)})`};function m0(e){return!!(typeof e=="function"&&Xs()||!e||typeof e=="string"&&(e in Xu||Xs())||$c(e)||Array.isArray(e)&&e.every(m0))}const Gi=([e,r,i,s])=>`cubic-bezier(${e}, ${r}, ${i}, ${s})`,Xu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Gi([0,.65,.55,1]),circOut:Gi([.55,0,1,.45]),backIn:Gi([.31,.01,.66,-.59]),backOut:Gi([.33,1.53,.69,.99])};function g0(e,r){if(e)return typeof e=="function"&&Xs()?h0(e,r):$c(e)?Gi(e):Array.isArray(e)?e.map(i=>g0(i,r)||Xu.easeOut):Xu[e]}const Kt={x:!1,y:!1};function y0(){return Kt.x||Kt.y}function v0(e,r,i){var s;if(e instanceof Element)return[e];if(typeof e=="string"){let l=document;const c=(s=void 0)!==null&&s!==void 0?s:l.querySelectorAll(e);return c?Array.from(c):[]}return Array.from(e)}function x0(e,r){const i=v0(e),s=new AbortController,l={passive:!0,...r,signal:s.signal};return[i,l,()=>s.abort()]}function Lh(e){return!(e.pointerType==="touch"||y0())}function tS(e,r,i={}){const[s,l,c]=x0(e,i),f=h=>{if(!Lh(h))return;const{target:p}=h,m=r(p,h);if(typeof m!="function"||!p)return;const y=v=>{Lh(v)&&(m(v),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,l)};return s.forEach(h=>{h.addEventListener("pointerenter",f,l)}),c}const w0=(e,r)=>r?e===r?!0:w0(e,r.parentElement):!1,Fc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,nS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rS(e){return nS.has(e.tagName)||e.tabIndex!==-1}const Yi=new WeakSet;function Mh(e){return r=>{r.key==="Enter"&&e(r)}}function xu(e,r){e.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const iS=(e,r)=>{const i=e.currentTarget;if(!i)return;const s=Mh(()=>{if(Yi.has(i))return;xu(i,"down");const l=Mh(()=>{xu(i,"up")}),c=()=>xu(i,"cancel");i.addEventListener("keyup",l,r),i.addEventListener("blur",c,r)});i.addEventListener("keydown",s,r),i.addEventListener("blur",()=>i.removeEventListener("keydown",s),r)};function Dh(e){return Fc(e)&&!y0()}function oS(e,r,i={}){const[s,l,c]=x0(e,i),f=h=>{const p=h.currentTarget;if(!Dh(h)||Yi.has(p))return;Yi.add(p);const m=r(p,h),y=(E,R)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),!(!Dh(E)||!Yi.has(p))&&(Yi.delete(p),typeof m=="function"&&m(E,{success:R}))},v=E=>{y(E,i.useGlobalTarget||w0(p,E.target))},x=E=>{y(E,!1)};window.addEventListener("pointerup",v,l),window.addEventListener("pointercancel",x,l)};return s.forEach(h=>{!rS(h)&&h.getAttribute("tabindex")===null&&(h.tabIndex=0),(i.useGlobalTarget?window:h).addEventListener("pointerdown",f,l),h.addEventListener("focus",m=>iS(m,l),l)}),c}function sS(e){return e==="x"||e==="y"?Kt[e]?null:(Kt[e]=!0,()=>{Kt[e]=!1}):Kt.x||Kt.y?null:(Kt.x=Kt.y=!0,()=>{Kt.x=Kt.y=!1})}const S0=new Set(["width","height","top","left","right","bottom",...ei]);let zs;function aS(){zs=void 0}const rn={now:()=>(zs===void 0&&rn.set(tt.isProcessing||iw.useManualTiming?tt.timestamp:performance.now()),zs),set:e=>{zs=e,queueMicrotask(aS)}};function Bc(e,r){e.indexOf(r)===-1&&e.push(r)}function Uc(e,r){const i=e.indexOf(r);i>-1&&e.splice(i,1)}class Wc{constructor(){this.subscriptions=[]}add(r){return Bc(this.subscriptions,r),()=>Uc(this.subscriptions,r)}notify(r,i,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,i,s);else for(let c=0;c<l;c++){const f=this.subscriptions[c];f&&f(r,i,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Hc(e,r){return r?e*(1e3/r):0}const _h=30,lS=e=>!isNaN(parseFloat(e)),qi={current:void 0};class uS{constructor(r,i={}){this.version="12.0.6",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{const c=rn.now();this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(r),this.owner=i.owner}setCurrent(r){this.current=r,this.updatedAt=rn.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=lS(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,i){this.events[r]||(this.events[r]=new Wc);const s=this.events[r].add(i);return r==="change"?()=>{s(),ke.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,i){this.passiveEffect=r,this.stopPassiveEffect=i}set(r,i=!0){!i||!this.passiveEffect?this.updateAndNotify(r,i):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,i,s){this.set(i),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-s}jump(r,i=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return qi.current&&qi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const r=rn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>_h)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,_h);return Hc(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(r){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=r(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tn(e,r){return new uS(e,r)}function cS(e,r,i){e.hasValue(r)?e.getValue(r).set(i):e.addValue(r,tn(i))}function dS(e,r){const i=ha(e,r);let{transitionEnd:s={},transition:l={},...c}=i||{};c={...c,...s};for(const f in c){const h=Tw(c[f]);cS(e,f,h)}}function fS(e){return!!(ft(e)&&e.add)}function qu(e,r){const i=e.getValue("willChange");if(fS(i))return i.add(r)}function k0(e){return e.props[Jg]}const C0=(e,r,i)=>(((1-3*i+3*r)*e+(3*i-6*r))*e+3*r)*e,pS=1e-7,hS=12;function mS(e,r,i,s,l){let c,f,h=0;do f=r+(i-r)/2,c=C0(f,s,l)-e,c>0?i=f:r=f;while(Math.abs(c)>pS&&++h<hS);return f}function po(e,r,i,s){if(e===r&&i===s)return yt;const l=c=>mS(c,0,1,e,i);return c=>c===0||c===1?c:C0(l(c),r,s)}const P0=e=>r=>r<=.5?e(2*r)/2:(2-e(2*(1-r)))/2,T0=e=>r=>1-e(1-r),E0=po(.33,1.53,.69,.99),Kc=T0(E0),b0=P0(Kc),A0=e=>(e*=2)<1?.5*Kc(e):.5*(2-Math.pow(2,-10*(e-1))),Gc=e=>1-Math.sin(Math.acos(e)),j0=T0(Gc),R0=P0(Gc),L0=e=>/^0[^.\s]+$/u.test(e);function gS(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||L0(e):!0}const Ji=e=>Math.round(e*1e5)/1e5,Yc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yS(e){return e==null}const vS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qc=(e,r)=>i=>!!(typeof i=="string"&&vS.test(i)&&i.startsWith(e)||r&&!yS(i)&&Object.prototype.hasOwnProperty.call(i,r)),M0=(e,r,i)=>s=>{if(typeof s!="string")return s;const[l,c,f,h]=s.match(Yc);return{[e]:parseFloat(l),[r]:parseFloat(c),[i]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},xS=e=>on(0,255,e),wu={...ti,transform:e=>Math.round(xS(e))},sr={test:Qc("rgb","red"),parse:M0("red","green","blue"),transform:({red:e,green:r,blue:i,alpha:s=1})=>"rgba("+wu.transform(e)+", "+wu.transform(r)+", "+wu.transform(i)+", "+Ji(ao.transform(s))+")"};function wS(e){let r="",i="",s="",l="";return e.length>5?(r=e.substring(1,3),i=e.substring(3,5),s=e.substring(5,7),l=e.substring(7,9)):(r=e.substring(1,2),i=e.substring(2,3),s=e.substring(3,4),l=e.substring(4,5),r+=r,i+=i,s+=s,l+=l),{red:parseInt(r,16),green:parseInt(i,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const Ju={test:Qc("#"),parse:wS,transform:sr.transform},Br={test:Qc("hsl","hue"),parse:M0("hue","saturation","lightness"),transform:({hue:e,saturation:r,lightness:i,alpha:s=1})=>"hsla("+Math.round(e)+", "+nn.transform(Ji(r))+", "+nn.transform(Ji(i))+", "+Ji(ao.transform(s))+")"},dt={test:e=>sr.test(e)||Ju.test(e)||Br.test(e),parse:e=>sr.test(e)?sr.parse(e):Br.test(e)?Br.parse(e):Ju.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?sr.transform(e):Br.transform(e)},SS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function kS(e){var r,i;return isNaN(e)&&typeof e=="string"&&(((r=e.match(Yc))===null||r===void 0?void 0:r.length)||0)+(((i=e.match(SS))===null||i===void 0?void 0:i.length)||0)>0}const D0="number",_0="color",CS="var",PS="var(",Ih="${}",TS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function uo(e){const r=e.toString(),i=[],s={color:[],number:[],var:[]},l=[];let c=0;const h=r.replace(TS,p=>(dt.test(p)?(s.color.push(c),l.push(_0),i.push(dt.parse(p))):p.startsWith(PS)?(s.var.push(c),l.push(CS),i.push(p)):(s.number.push(c),l.push(D0),i.push(parseFloat(p))),++c,Ih)).split(Ih);return{values:i,split:h,indexes:s,types:l}}function I0(e){return uo(e).values}function O0(e){const{split:r,types:i}=uo(e),s=r.length;return l=>{let c="";for(let f=0;f<s;f++)if(c+=r[f],l[f]!==void 0){const h=i[f];h===D0?c+=Ji(l[f]):h===_0?c+=dt.transform(l[f]):c+=l[f]}return c}}const ES=e=>typeof e=="number"?0:e;function bS(e){const r=I0(e);return O0(e)(r.map(ES))}const $n={test:kS,parse:I0,createTransformer:O0,getAnimatableNone:bS},AS=new Set(["brightness","contrast","saturate","opacity"]);function jS(e){const[r,i]=e.slice(0,-1).split("(");if(r==="drop-shadow")return e;const[s]=i.match(Yc)||[];if(!s)return e;const l=i.replace(s,"");let c=AS.has(r)?1:0;return s!==i&&(c*=100),r+"("+c+l+")"}const RS=/\b([a-z-]*)\(.*?\)/gu,Zu={...$n,getAnimatableNone:e=>{const r=e.match(RS);return r?r.map(jS).join(" "):e}},LS={...Mc,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:Zu,WebkitFilter:Zu},Xc=e=>LS[e];function V0(e,r){let i=Xc(e);return i!==Zu&&(i=$n),i.getAnimatableNone?i.getAnimatableNone(r):void 0}const MS=new Set(["auto","none","0"]);function DS(e,r,i){let s=0,l;for(;s<e.length&&!l;){const c=e[s];typeof c=="string"&&!MS.has(c)&&uo(c).values.length&&(l=e[s]),s++}if(l&&i)for(const c of r)e[c]=V0(i,l)}const Oh=e=>e===ti||e===ue,Vh=(e,r)=>parseFloat(e.split(", ")[r]),zh=(e,r)=>(i,{transform:s})=>{if(s==="none"||!s)return 0;const l=s.match(/^matrix3d\((.+)\)$/u);if(l)return Vh(l[1],r);{const c=s.match(/^matrix\((.+)\)$/u);return c?Vh(c[1],e):0}},_S=new Set(["x","y","z"]),IS=ei.filter(e=>!_S.has(e));function OS(e){const r=[];return IS.forEach(i=>{const s=e.getValue(i);s!==void 0&&(r.push([i,s.get()]),s.set(i.startsWith("scale")?1:0))}),r}const qr={width:({x:e},{paddingLeft:r="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(r)-parseFloat(i),height:({y:e},{paddingTop:r="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(r)-parseFloat(i),top:(e,{top:r})=>parseFloat(r),left:(e,{left:r})=>parseFloat(r),bottom:({y:e},{top:r})=>parseFloat(r)+(e.max-e.min),right:({x:e},{left:r})=>parseFloat(r)+(e.max-e.min),x:zh(4,13),y:zh(5,14)};qr.translateX=qr.x;qr.translateY=qr.y;const lr=new Set;let ec=!1,tc=!1;function z0(){if(tc){const e=Array.from(lr).filter(s=>s.needsMeasurement),r=new Set(e.map(s=>s.element)),i=new Map;r.forEach(s=>{const l=OS(s);l.length&&(i.set(s,l),s.render())}),e.forEach(s=>s.measureInitialState()),r.forEach(s=>{s.render();const l=i.get(s);l&&l.forEach(([c,f])=>{var h;(h=s.getValue(c))===null||h===void 0||h.set(f)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}tc=!1,ec=!1,lr.forEach(e=>e.complete()),lr.clear()}function N0(){lr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(tc=!0)})}function VS(){N0(),z0()}class qc{constructor(r,i,s,l,c,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...r],this.onComplete=i,this.name=s,this.motionValue=l,this.element=c,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(lr.add(this),ec||(ec=!0,ke.read(N0),ke.resolveKeyframes(z0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:i,element:s,motionValue:l}=this;for(let c=0;c<r.length;c++)if(r[c]===null)if(c===0){const f=l==null?void 0:l.get(),h=r[r.length-1];if(f!==void 0)r[0]=f;else if(s&&i){const p=s.readValue(i,h);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=h),l&&f===void 0&&l.set(r[0])}else r[c]=r[c-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),lr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,lr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const $0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),zS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function NS(e){const r=zS.exec(e);if(!r)return[,];const[,i,s,l]=r;return[`--${i??s}`,l]}function F0(e,r,i=1){const[s,l]=NS(e);if(!s)return;const c=window.getComputedStyle(r).getPropertyValue(s);if(c){const f=c.trim();return $0(f)?parseFloat(f):f}return Lc(l)?F0(l,r,i+1):l}const B0=e=>r=>r.test(e),$S={test:e=>e==="auto",parse:e=>e},U0=[ti,ue,nn,Vn,Lw,Rw,$S],Nh=e=>U0.find(B0(e));class W0 extends qc{constructor(r,i,s,l,c){super(r,i,s,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:i,name:s}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<r.length;p++){let m=r[p];if(typeof m=="string"&&(m=m.trim(),Lc(m))){const y=F0(m,i.current);y!==void 0&&(r[p]=y),p===r.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!S0.has(s)||r.length!==2)return;const[l,c]=r,f=Nh(l),h=Nh(c);if(f!==h)if(Oh(f)&&Oh(h))for(let p=0;p<r.length;p++){const m=r[p];typeof m=="string"&&(r[p]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:i}=this,s=[];for(let l=0;l<r.length;l++)gS(r[l])&&s.push(l);s.length&&DS(r,s,i)}measureInitialState(){const{element:r,unresolvedKeyframes:i,name:s}=this;if(!r||!r.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=qr[s](r.measureViewportBox(),window.getComputedStyle(r.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&r.getValue(s,l).jump(l,!1)}measureEndState(){var r;const{element:i,name:s,unresolvedKeyframes:l}=this;if(!i||!i.current)return;const c=i.getValue(s);c&&c.jump(this.measuredOrigin,!1);const f=l.length-1,h=l[f];l[f]=qr[s](i.measureViewportBox(),window.getComputedStyle(i.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((r=this.removedTransforms)===null||r===void 0)&&r.length&&this.removedTransforms.forEach(([p,m])=>{i.getValue(p).set(m)}),this.resolveNoneKeyframes()}}const $h=(e,r)=>r==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($n.test(e)||e==="0")&&!e.startsWith("url("));function FS(e){const r=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==r)return!0}function BS(e,r,i,s){const l=e[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const c=e[e.length-1],f=$h(l,r),h=$h(c,r);return!f||!h?!1:FS(e)||(i==="spring"||Nc(i))&&s}const US=e=>e!==null;function ma(e,{repeat:r,repeatType:i="loop"},s){const l=e.filter(US),c=r&&i!=="loop"&&r%2===1?0:l.length-1;return!c||s===void 0?l[c]:s}const WS=40;class H0{constructor({autoplay:r=!0,delay:i=0,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:f="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=rn.now(),this.options={autoplay:r,delay:i,type:s,repeat:l,repeatDelay:c,repeatType:f,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>WS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&VS(),this._resolved}onKeyframesResolved(r,i){this.resolvedAt=rn.now(),this.hasAttemptedResolve=!0;const{name:s,type:l,velocity:c,delay:f,onComplete:h,onUpdate:p,isGenerator:m}=this.options;if(!m&&!BS(r,s,l,c))if(f)this.options.duration=0;else{p&&p(ma(r,this.options,i)),h&&h(),this.resolveFinishedPromise();return}const y=this.initPlayback(r,i);y!==!1&&(this._resolved={keyframes:r,finalKeyframe:i,...y},this.onPostResolved())}onPostResolved(){}then(r,i){return this.currentFinishedPromise.then(r,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(r=>{this.resolveFinishedPromise=r})}}const Ie=(e,r,i)=>e+(r-e)*i;function Su(e,r,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(r-e)*6*i:i<1/2?r:i<2/3?e+(r-e)*(2/3-i)*6:e}function HS({hue:e,saturation:r,lightness:i,alpha:s}){e/=360,r/=100,i/=100;let l=0,c=0,f=0;if(!r)l=c=f=i;else{const h=i<.5?i*(1+r):i+r-i*r,p=2*i-h;l=Su(p,h,e+1/3),c=Su(p,h,e),f=Su(p,h,e-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(f*255),alpha:s}}function qs(e,r){return i=>i>0?r:e}const ku=(e,r,i)=>{const s=e*e,l=i*(r*r-s)+s;return l<0?0:Math.sqrt(l)},KS=[Ju,sr,Br],GS=e=>KS.find(r=>r.test(e));function Fh(e){const r=GS(e);if(!r)return!1;let i=r.parse(e);return r===Br&&(i=HS(i)),i}const Bh=(e,r)=>{const i=Fh(e),s=Fh(r);if(!i||!s)return qs(e,r);const l={...i};return c=>(l.red=ku(i.red,s.red,c),l.green=ku(i.green,s.green,c),l.blue=ku(i.blue,s.blue,c),l.alpha=Ie(i.alpha,s.alpha,c),sr.transform(l))},YS=(e,r)=>i=>r(e(i)),ho=(...e)=>e.reduce(YS),nc=new Set(["none","hidden"]);function QS(e,r){return nc.has(e)?i=>i<=0?e:r:i=>i>=1?r:e}function XS(e,r){return i=>Ie(e,r,i)}function Jc(e){return typeof e=="number"?XS:typeof e=="string"?Lc(e)?qs:dt.test(e)?Bh:ZS:Array.isArray(e)?K0:typeof e=="object"?dt.test(e)?Bh:qS:qs}function K0(e,r){const i=[...e],s=i.length,l=e.map((c,f)=>Jc(c)(c,r[f]));return c=>{for(let f=0;f<s;f++)i[f]=l[f](c);return i}}function qS(e,r){const i={...e,...r},s={};for(const l in i)e[l]!==void 0&&r[l]!==void 0&&(s[l]=Jc(e[l])(e[l],r[l]));return l=>{for(const c in s)i[c]=s[c](l);return i}}function JS(e,r){var i;const s=[],l={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const f=r.types[c],h=e.indexes[f][l[f]],p=(i=e.values[h])!==null&&i!==void 0?i:0;s[c]=p,l[f]++}return s}const ZS=(e,r)=>{const i=$n.createTransformer(r),s=uo(e),l=uo(r);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?nc.has(e)&&!l.values.length||nc.has(r)&&!s.values.length?QS(e,r):ho(K0(JS(s,l),l.values),i):qs(e,r)};function G0(e,r,i){return typeof e=="number"&&typeof r=="number"&&typeof i=="number"?Ie(e,r,i):Jc(e)(e,r)}const ek=5;function Y0(e,r,i){const s=Math.max(r-ek,0);return Hc(i-e(s),r-s)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Uh=.001;function tk({duration:e=Ve.duration,bounce:r=Ve.bounce,velocity:i=Ve.velocity,mass:s=Ve.mass}){let l,c,f=1-r;f=on(Ve.minDamping,Ve.maxDamping,f),e=on(Ve.minDuration,Ve.maxDuration,gn(e)),f<1?(l=m=>{const y=m*f,v=y*e,x=y-i,E=rc(m,f),R=Math.exp(-v);return Uh-x/E*R},c=m=>{const v=m*f*e,x=v*i+i,E=Math.pow(f,2)*Math.pow(m,2)*e,R=Math.exp(-v),T=rc(Math.pow(m,2),f);return(-l(m)+Uh>0?-1:1)*((x-E)*R)/T}):(l=m=>{const y=Math.exp(-m*e),v=(m-i)*e+1;return-.001+y*v},c=m=>{const y=Math.exp(-m*e),v=(i-m)*(e*e);return y*v});const h=5/e,p=rk(l,c,h);if(e=mn(e),isNaN(p))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:e};{const m=Math.pow(p,2)*s;return{stiffness:m,damping:f*2*Math.sqrt(s*m),duration:e}}}const nk=12;function rk(e,r,i){let s=i;for(let l=1;l<nk;l++)s=s-e(s)/r(s);return s}function rc(e,r){return e*Math.sqrt(1-r*r)}const ik=["duration","bounce"],ok=["stiffness","damping","mass"];function Wh(e,r){return r.some(i=>e[i]!==void 0)}function sk(e){let r={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...e};if(!Wh(e,ok)&&Wh(e,ik))if(e.visualDuration){const i=e.visualDuration,s=2*Math.PI/(i*1.2),l=s*s,c=2*on(.05,1,1-(e.bounce||0))*Math.sqrt(l);r={...r,mass:Ve.mass,stiffness:l,damping:c}}else{const i=tk(e);r={...r,...i,mass:Ve.mass},r.isResolvedFromDuration=!0}return r}function Q0(e=Ve.visualDuration,r=Ve.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:r}:e;let{restSpeed:s,restDelta:l}=i;const c=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],h={done:!1,value:c},{stiffness:p,damping:m,mass:y,duration:v,velocity:x,isResolvedFromDuration:E}=sk({...i,velocity:-gn(i.velocity||0)}),R=x||0,T=m/(2*Math.sqrt(p*y)),D=f-c,_=gn(Math.sqrt(p/y)),O=Math.abs(D)<5;s||(s=O?Ve.restSpeed.granular:Ve.restSpeed.default),l||(l=O?Ve.restDelta.granular:Ve.restDelta.default);let V;if(T<1){const $=rc(_,T);V=U=>{const K=Math.exp(-T*_*U);return f-K*((R+T*_*D)/$*Math.sin($*U)+D*Math.cos($*U))}}else if(T===1)V=$=>f-Math.exp(-_*$)*(D+(R+_*D)*$);else{const $=_*Math.sqrt(T*T-1);V=U=>{const K=Math.exp(-T*_*U),J=Math.min($*U,300);return f-K*((R+T*_*D)*Math.sinh(J)+$*D*Math.cosh(J))/$}}const W={calculatedDuration:E&&v||null,next:$=>{const U=V($);if(E)h.done=$>=v;else{let K=0;T<1&&(K=$===0?mn(R):Y0(V,$,U));const J=Math.abs(K)<=s,ve=Math.abs(f-U)<=l;h.done=J&&ve}return h.value=h.done?f:U,h},toString:()=>{const $=Math.min(p0(W),Qu),U=h0(K=>W.next($*K).value,$,30);return $+"ms "+U}};return W}function Hh({keyframes:e,velocity:r=0,power:i=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:f,min:h,max:p,restDelta:m=.5,restSpeed:y}){const v=e[0],x={done:!1,value:v},E=J=>h!==void 0&&J<h||p!==void 0&&J>p,R=J=>h===void 0?p:p===void 0||Math.abs(h-J)<Math.abs(p-J)?h:p;let T=i*r;const D=v+T,_=f===void 0?D:f(D);_!==D&&(T=_-v);const O=J=>-T*Math.exp(-J/s),V=J=>_+O(J),W=J=>{const ve=O(J),Ce=V(J);x.done=Math.abs(ve)<=m,x.value=x.done?_:Ce};let $,U;const K=J=>{E(x.value)&&($=J,U=Q0({keyframes:[x.value,R(x.value)],velocity:Y0(V,J,x.value),damping:l,stiffness:c,restDelta:m,restSpeed:y}))};return K(0),{calculatedDuration:null,next:J=>{let ve=!1;return!U&&$===void 0&&(ve=!0,W(J),K(J)),$!==void 0&&J>=$?U.next(J-$):(!ve&&W(J),x)}}}const ak=po(.42,0,1,1),lk=po(0,0,.58,1),X0=po(.42,0,.58,1),uk=e=>Array.isArray(e)&&typeof e[0]!="number",Kh={linear:yt,easeIn:ak,easeInOut:X0,easeOut:lk,circIn:Gc,circInOut:R0,circOut:j0,backIn:Kc,backInOut:b0,backOut:E0,anticipate:A0},Gh=e=>{if($c(e)){Gu(e.length===4);const[r,i,s,l]=e;return po(r,i,s,l)}else if(typeof e=="string")return Gu(Kh[e]!==void 0),Kh[e];return e};function ck(e,r,i){const s=[],l=i||G0,c=e.length-1;for(let f=0;f<c;f++){let h=l(e[f],e[f+1]);if(r){const p=Array.isArray(r)?r[f]||yt:r;h=ho(p,h)}s.push(h)}return s}function Zc(e,r,{clamp:i=!0,ease:s,mixer:l}={}){const c=e.length;if(Gu(c===r.length),c===1)return()=>r[0];if(c===2&&r[0]===r[1])return()=>r[1];const f=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),r=[...r].reverse());const h=ck(r,s,l),p=h.length,m=y=>{if(f&&y<e[0])return r[0];let v=0;if(p>1)for(;v<e.length-2&&!(y<e[v+1]);v++);const x=dr(e[v],e[v+1],y);return h[v](x)};return i?y=>m(on(e[0],e[c-1],y)):m}function dk(e,r){const i=e[e.length-1];for(let s=1;s<=r;s++){const l=dr(0,r,s);e.push(Ie(i,1,l))}}function q0(e){const r=[0];return dk(r,e.length-1),r}function fk(e,r){return e.map(i=>i*r)}function pk(e,r){return e.map(()=>r||X0).splice(0,e.length-1)}function Js({duration:e=300,keyframes:r,times:i,ease:s="easeInOut"}){const l=uk(s)?s.map(Gh):Gh(s),c={done:!1,value:r[0]},f=fk(i&&i.length===r.length?i:q0(r),e),h=Zc(f,r,{ease:Array.isArray(l)?l:pk(r,l)});return{calculatedDuration:e,next:p=>(c.value=h(p),c.done=p>=e,c)}}const hk=e=>{const r=({timestamp:i})=>e(i);return{start:()=>ke.update(r,!0),stop:()=>Yt(r),now:()=>tt.isProcessing?tt.timestamp:rn.now()}},mk={decay:Hh,inertia:Hh,tween:Js,keyframes:Js,spring:Q0},gk=e=>e/100;class ed extends H0{constructor(r){super(r),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:i,motionValue:s,element:l,keyframes:c}=this.options,f=(l==null?void 0:l.KeyframeResolver)||qc,h=(p,m)=>this.onKeyframesResolved(p,m);this.resolver=new f(c,h,i,s,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(r){const{type:i="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:c,velocity:f=0}=this.options,h=Nc(i)?i:mk[i]||Js;let p,m;h!==Js&&typeof r[0]!="number"&&(p=ho(gk,G0(r[0],r[1])),r=[0,100]);const y=h({...this.options,keyframes:r});c==="mirror"&&(m=h({...this.options,keyframes:[...r].reverse(),velocity:-f})),y.calculatedDuration===null&&(y.calculatedDuration=p0(y));const{calculatedDuration:v}=y,x=v+l,E=x*(s+1)-l;return{generator:y,mirroredGenerator:m,mapPercentToKeyframes:p,calculatedDuration:v,resolvedDuration:x,totalDuration:E}}onPostResolved(){const{autoplay:r=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!r?this.pause():this.state=this.pendingPlayState}tick(r,i=!1){const{resolved:s}=this;if(!s){const{keyframes:J}=this.options;return{done:!0,value:J[J.length-1]}}const{finalKeyframe:l,generator:c,mirroredGenerator:f,mapPercentToKeyframes:h,keyframes:p,calculatedDuration:m,totalDuration:y,resolvedDuration:v}=s;if(this.startTime===null)return c.next(0);const{delay:x,repeat:E,repeatType:R,repeatDelay:T,onUpdate:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-y/this.speed,this.startTime)),i?this.currentTime=r:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(r-this.startTime)*this.speed;const _=this.currentTime-x*(this.speed>=0?1:-1),O=this.speed>=0?_<0:_>y;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=y);let V=this.currentTime,W=c;if(E){const J=Math.min(this.currentTime,y)/v;let ve=Math.floor(J),Ce=J%1;!Ce&&J>=1&&(Ce=1),Ce===1&&ve--,ve=Math.min(ve,E+1),!!(ve%2)&&(R==="reverse"?(Ce=1-Ce,T&&(Ce-=T/v)):R==="mirror"&&(W=f)),V=on(0,1,Ce)*v}const $=O?{done:!1,value:p[0]}:W.next(V);h&&($.value=h($.value));let{done:U}=$;!O&&m!==null&&(U=this.speed>=0?this.currentTime>=y:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&U);return K&&l!==void 0&&($.value=ma(p,this.options,l)),D&&D($.value),K&&this.finish(),$}get duration(){const{resolved:r}=this;return r?gn(r.calculatedDuration):0}get time(){return gn(this.currentTime)}set time(r){r=mn(r),this.currentTime=r,this.holdTime!==null||this.speed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.speed)}get speed(){return this.playbackSpeed}set speed(r){const i=this.playbackSpeed!==r;this.playbackSpeed=r,i&&(this.time=gn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:r=hk,onPlay:i,startTime:s}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),i&&i();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var r;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(r=this.currentTime)!==null&&r!==void 0?r:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:r}=this.options;r&&r()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}}const yk=new Set(["opacity","clipPath","filter","transform"]);function vk(e,r,i,{delay:s=0,duration:l=300,repeat:c=0,repeatType:f="loop",ease:h="easeInOut",times:p}={}){const m={[r]:i};p&&(m.offset=p);const y=g0(h,l);return Array.isArray(y)&&(m.easing=y),e.animate(m,{delay:s,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal"})}const xk=Cc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Zs=10,wk=2e4;function Sk(e){return Nc(e.type)||e.type==="spring"||!m0(e.ease)}function kk(e,r){const i=new ed({...r,keyframes:e,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:e[0]};const l=[];let c=0;for(;!s.done&&c<wk;)s=i.sample(c),l.push(s.value),c+=Zs;return{times:void 0,keyframes:l,duration:c-Zs,ease:"linear"}}const J0={anticipate:A0,backInOut:b0,circInOut:R0};function Ck(e){return e in J0}class Yh extends H0{constructor(r){super(r);const{name:i,motionValue:s,element:l,keyframes:c}=this.options;this.resolver=new W0(c,(f,h)=>this.onKeyframesResolved(f,h),i,s,l),this.resolver.scheduleResolve()}initPlayback(r,i){let{duration:s=300,times:l,ease:c,type:f,motionValue:h,name:p,startTime:m}=this.options;if(!h.owner||!h.owner.current)return!1;if(typeof c=="string"&&Xs()&&Ck(c)&&(c=J0[c]),Sk(this.options)){const{onComplete:v,onUpdate:x,motionValue:E,element:R,...T}=this.options,D=kk(r,T);r=D.keyframes,r.length===1&&(r[1]=r[0]),s=D.duration,l=D.times,c=D.ease,f="keyframes"}const y=vk(h.owner.current,p,r,{...this.options,duration:s,times:l,ease:c});return y.startTime=m??this.calcStartTime(),this.pendingTimeline?(Rh(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:v}=this.options;h.set(ma(r,this.options,i)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:s,times:l,type:f,ease:c,keyframes:r}}get duration(){const{resolved:r}=this;if(!r)return 0;const{duration:i}=r;return gn(i)}get time(){const{resolved:r}=this;if(!r)return 0;const{animation:i}=r;return gn(i.currentTime||0)}set time(r){const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.currentTime=mn(r)}get speed(){const{resolved:r}=this;if(!r)return 1;const{animation:i}=r;return i.playbackRate}set speed(r){const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.playbackRate=r}get state(){const{resolved:r}=this;if(!r)return"idle";const{animation:i}=r;return i.playState}get startTime(){const{resolved:r}=this;if(!r)return null;const{animation:i}=r;return i.startTime}attachTimeline(r){if(!this._resolved)this.pendingTimeline=r;else{const{resolved:i}=this;if(!i)return yt;const{animation:s}=i;Rh(s,r)}return yt}play(){if(this.isStopped)return;const{resolved:r}=this;if(!r)return;const{animation:i}=r;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:r}=this;if(!r)return;const{animation:i}=r;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:r}=this;if(!r)return;const{animation:i,keyframes:s,duration:l,type:c,ease:f,times:h}=r;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:y,onComplete:v,element:x,...E}=this.options,R=new ed({...E,keyframes:s,duration:l,type:c,ease:f,times:h,isGenerator:!0}),T=mn(this.time);m.setWithVelocity(R.sample(T-Zs).value,R.sample(T).value,Zs)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:r}=this;r&&r.animation.finish()}cancel(){const{resolved:r}=this;r&&r.animation.cancel()}static supports(r){const{motionValue:i,name:s,repeatDelay:l,repeatType:c,damping:f,type:h}=r;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=i.owner.getProps();return xk()&&s&&yk.has(s)&&!p&&!m&&!l&&c!=="mirror"&&f!==0&&h!=="inertia"}}const Pk={type:"spring",stiffness:500,damping:25,restSpeed:10},Tk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ek={type:"keyframes",duration:.8},bk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ak=(e,{keyframes:r})=>r.length>2?Ek:fr.has(e)?e.startsWith("scale")?Tk(r[1]):Pk:bk;function jk({when:e,delay:r,delayChildren:i,staggerChildren:s,staggerDirection:l,repeat:c,repeatType:f,repeatDelay:h,from:p,elapsed:m,...y}){return!!Object.keys(y).length}const td=(e,r,i,s={},l,c)=>f=>{const h=zc(s,e)||{},p=h.delay||s.delay||0;let{elapsed:m=0}=s;m=m-mn(p);let y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:r.getVelocity(),...h,delay:-m,onUpdate:x=>{r.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:e,motionValue:r,element:c?void 0:l};jk(h)||(y={...y,...Ak(e,y)}),y.duration&&(y.duration=mn(y.duration)),y.repeatDelay&&(y.repeatDelay=mn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),v&&!c&&r.get()!==void 0){const x=ma(y.keyframes,h);if(x!==void 0)return ke.update(()=>{y.onUpdate(x),y.onComplete()}),new Jw([])}return!c&&Yh.supports(y)?new Yh(y):new ed(y)};function Rk({protectedKeys:e,needsAnimating:r},i){const s=e.hasOwnProperty(i)&&r[i]!==!0;return r[i]=!1,s}function Z0(e,r,{delay:i=0,transitionOverride:s,type:l}={}){var c;let{transition:f=e.getDefaultTransition(),transitionEnd:h,...p}=r;s&&(f=s);const m=[],y=l&&e.animationState&&e.animationState.getState()[l];for(const v in p){const x=e.getValue(v,(c=e.latestValues[v])!==null&&c!==void 0?c:null),E=p[v];if(E===void 0||y&&Rk(y,v))continue;const R={delay:i,...zc(f||{},v)};let T=!1;if(window.MotionHandoffAnimation){const _=k0(e);if(_){const O=window.MotionHandoffAnimation(_,v,ke);O!==null&&(R.startTime=O,T=!0)}}qu(e,v),x.start(td(v,x,E,e.shouldReduceMotion&&S0.has(v)?{type:!1}:R,e,T));const D=x.animation;D&&m.push(D)}return h&&Promise.all(m).then(()=>{ke.update(()=>{h&&dS(e,h)})}),m}function ic(e,r,i={}){var s;const l=ha(e,r,i.type==="exit"?(s=e.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=l||{};i.transitionOverride&&(c=i.transitionOverride);const f=l?()=>Promise.all(Z0(e,l,i)):()=>Promise.resolve(),h=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=c;return Lk(e,r,y+m,v,x,i)}:()=>Promise.resolve(),{when:p}=c;if(p){const[m,y]=p==="beforeChildren"?[f,h]:[h,f];return m().then(()=>y())}else return Promise.all([f(),h(i.delay)])}function Lk(e,r,i=0,s=0,l=1,c){const f=[],h=(e.variantChildren.size-1)*s,p=l===1?(m=0)=>m*s:(m=0)=>h-m*s;return Array.from(e.variantChildren).sort(Mk).forEach((m,y)=>{m.notify("AnimationStart",r),f.push(ic(m,r,{...c,delay:i+p(y)}).then(()=>m.notify("AnimationComplete",r)))}),Promise.all(f)}function Mk(e,r){return e.sortNodePosition(r)}function Dk(e,r,i={}){e.notify("AnimationStart",r);let s;if(Array.isArray(r)){const l=r.map(c=>ic(e,c,i));s=Promise.all(l)}else if(typeof r=="string")s=ic(e,r,i);else{const l=typeof r=="function"?ha(e,r,i.custom):r;s=Promise.all(Z0(e,l,i))}return s.then(()=>{e.notify("AnimationComplete",r)})}const _k=Tc.length;function ey(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?ey(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const r={};for(let i=0;i<_k;i++){const s=Tc[i],l=e.props[s];(so(l)||l===!1)&&(r[s]=l)}return r}const Ik=[...Pc].reverse(),Ok=Pc.length;function Vk(e){return r=>Promise.all(r.map(({animation:i,options:s})=>Dk(e,i,s)))}function zk(e){let r=Vk(e),i=Qh(),s=!0;const l=p=>(m,y)=>{var v;const x=ha(e,y,p==="exit"?(v=e.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(x){const{transition:E,transitionEnd:R,...T}=x;m={...m,...T,...R}}return m};function c(p){r=p(e)}function f(p){const{props:m}=e,y=ey(e.parent)||{},v=[],x=new Set;let E={},R=1/0;for(let D=0;D<Ok;D++){const _=Ik[D],O=i[_],V=m[_]!==void 0?m[_]:y[_],W=so(V),$=_===p?O.isActive:null;$===!1&&(R=D);let U=V===y[_]&&V!==m[_]&&W;if(U&&s&&e.manuallyAnimateOnMount&&(U=!1),O.protectedKeys={...E},!O.isActive&&$===null||!V&&!O.prevProp||fa(V)||typeof V=="boolean")continue;const K=Nk(O.prevProp,V);let J=K||_===p&&O.isActive&&!U&&W||D>R&&W,ve=!1;const Ce=Array.isArray(V)?V:[V];let Be=Ce.reduce(l(_),{});$===!1&&(Be={});const{prevResolvedValues:Ye={}}=O,Ee={...Ye,...Be},Ue=ce=>{J=!0,x.has(ce)&&(ve=!0,x.delete(ce)),O.needsAnimating[ce]=!0;const B=e.getValue(ce);B&&(B.liveStyle=!1)};for(const ce in Ee){const B=Be[ce],Q=Ye[ce];if(E.hasOwnProperty(ce))continue;let j=!1;Yu(B)&&Yu(Q)?j=!d0(B,Q):j=B!==Q,j?B!=null?Ue(ce):x.add(ce):B!==void 0&&x.has(ce)?Ue(ce):O.protectedKeys[ce]=!0}O.prevProp=V,O.prevResolvedValues=Be,O.isActive&&(E={...E,...Be}),s&&e.blockInitialAnimation&&(J=!1),J&&(!(U&&K)||ve)&&v.push(...Ce.map(ce=>({animation:ce,options:{type:_}})))}if(x.size){const D={};x.forEach(_=>{const O=e.getBaseTarget(_),V=e.getValue(_);V&&(V.liveStyle=!0),D[_]=O??null}),v.push({animation:D})}let T=!!v.length;return s&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(T=!1),s=!1,T?r(v):Promise.resolve()}function h(p,m){var y;if(i[p].isActive===m)return Promise.resolve();(y=e.variantChildren)===null||y===void 0||y.forEach(x=>{var E;return(E=x.animationState)===null||E===void 0?void 0:E.setActive(p,m)}),i[p].isActive=m;const v=f(p);for(const x in i)i[x].protectedKeys={};return v}return{animateChanges:f,setActive:h,setAnimateFunction:c,getState:()=>i,reset:()=>{i=Qh(),s=!0}}}function Nk(e,r){return typeof r=="string"?r!==e:Array.isArray(r)?!d0(r,e):!1}function nr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Qh(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class Fn{constructor(r){this.isMounted=!1,this.node=r}update(){}}class $k extends Fn{constructor(r){super(r),r.animationState||(r.animationState=zk(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();fa(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:i}=this.node.prevProps||{};r!==i&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)===null||r===void 0||r.call(this)}}let Fk=0;class Bk extends Fn{constructor(){super(...arguments),this.id=Fk++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===s)return;const l=this.node.animationState.setActive("exit",!r);i&&!r&&l.then(()=>i(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const Uk={animation:{Feature:$k},exit:{Feature:Bk}};function co(e,r,i,s={passive:!0}){return e.addEventListener(r,i,s),()=>e.removeEventListener(r,i)}function mo(e){return{point:{x:e.pageX,y:e.pageY}}}const Wk=e=>r=>Fc(r)&&e(r,mo(r));function Zi(e,r,i,s){return co(e,r,Wk(i),s)}const Xh=(e,r)=>Math.abs(e-r);function Hk(e,r){const i=Xh(e.x,r.x),s=Xh(e.y,r.y);return Math.sqrt(i**2+s**2)}class ty{constructor(r,i,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:c=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Pu(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,E=Hk(v.offset,{x:0,y:0})>=3;if(!x&&!E)return;const{point:R}=v,{timestamp:T}=tt;this.history.push({...R,timestamp:T});const{onStart:D,onMove:_}=this.handlers;x||(D&&D(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Cu(x,this.transformPagePoint),ke.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:E,onSessionEnd:R,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=Pu(v.type==="pointercancel"?this.lastMoveEventInfo:Cu(x,this.transformPagePoint),this.history);this.startEvent&&E&&E(v,D),R&&R(v,D)},!Fc(r))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=s,this.contextWindow=l||window;const f=mo(r),h=Cu(f,this.transformPagePoint),{point:p}=h,{timestamp:m}=tt;this.history=[{...p,timestamp:m}];const{onSessionStart:y}=i;y&&y(r,Pu(h,this.history)),this.removeListeners=ho(Zi(this.contextWindow,"pointermove",this.handlePointerMove),Zi(this.contextWindow,"pointerup",this.handlePointerUp),Zi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Yt(this.updatePoint)}}function Cu(e,r){return r?{point:r(e.point)}:e}function qh(e,r){return{x:e.x-r.x,y:e.y-r.y}}function Pu({point:e},r){return{point:e,delta:qh(e,ny(r)),offset:qh(e,Kk(r)),velocity:Gk(r,.1)}}function Kk(e){return e[0]}function ny(e){return e[e.length-1]}function Gk(e,r){if(e.length<2)return{x:0,y:0};let i=e.length-1,s=null;const l=ny(e);for(;i>=0&&(s=e[i],!(l.timestamp-s.timestamp>mn(r)));)i--;if(!s)return{x:0,y:0};const c=gn(l.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const f={x:(l.x-s.x)/c,y:(l.y-s.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}const ry=1e-4,Yk=1-ry,Qk=1+ry,iy=.01,Xk=0-iy,qk=0+iy;function gt(e){return e.max-e.min}function Jk(e,r,i){return Math.abs(e-r)<=i}function Jh(e,r,i,s=.5){e.origin=s,e.originPoint=Ie(r.min,r.max,e.origin),e.scale=gt(i)/gt(r),e.translate=Ie(i.min,i.max,e.origin)-e.originPoint,(e.scale>=Yk&&e.scale<=Qk||isNaN(e.scale))&&(e.scale=1),(e.translate>=Xk&&e.translate<=qk||isNaN(e.translate))&&(e.translate=0)}function eo(e,r,i,s){Jh(e.x,r.x,i.x,s?s.originX:void 0),Jh(e.y,r.y,i.y,s?s.originY:void 0)}function Zh(e,r,i){e.min=i.min+r.min,e.max=e.min+gt(r)}function Zk(e,r,i){Zh(e.x,r.x,i.x),Zh(e.y,r.y,i.y)}function em(e,r,i){e.min=r.min-i.min,e.max=e.min+gt(r)}function to(e,r,i){em(e.x,r.x,i.x),em(e.y,r.y,i.y)}function e2(e,{min:r,max:i},s){return r!==void 0&&e<r?e=s?Ie(r,e,s.min):Math.max(e,r):i!==void 0&&e>i&&(e=s?Ie(i,e,s.max):Math.min(e,i)),e}function tm(e,r,i){return{min:r!==void 0?e.min+r:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function t2(e,{top:r,left:i,bottom:s,right:l}){return{x:tm(e.x,i,l),y:tm(e.y,r,s)}}function nm(e,r){let i=r.min-e.min,s=r.max-e.max;return r.max-r.min<e.max-e.min&&([i,s]=[s,i]),{min:i,max:s}}function n2(e,r){return{x:nm(e.x,r.x),y:nm(e.y,r.y)}}function r2(e,r){let i=.5;const s=gt(e),l=gt(r);return l>s?i=dr(r.min,r.max-s,e.min):s>l&&(i=dr(e.min,e.max-l,r.min)),on(0,1,i)}function i2(e,r){const i={};return r.min!==void 0&&(i.min=r.min-e.min),r.max!==void 0&&(i.max=r.max-e.min),i}const oc=.35;function o2(e=oc){return e===!1?e=0:e===!0&&(e=oc),{x:rm(e,"left","right"),y:rm(e,"top","bottom")}}function rm(e,r,i){return{min:im(e,r),max:im(e,i)}}function im(e,r){return typeof e=="number"?e:e[r]||0}const om=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ur=()=>({x:om(),y:om()}),sm=()=>({min:0,max:0}),Fe=()=>({x:sm(),y:sm()});function Vt(e){return[e("x"),e("y")]}function oy({top:e,left:r,right:i,bottom:s}){return{x:{min:r,max:i},y:{min:e,max:s}}}function s2({x:e,y:r}){return{top:r.min,right:e.max,bottom:r.max,left:e.min}}function a2(e,r){if(!r)return e;const i=r({x:e.left,y:e.top}),s=r({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:s.y,right:s.x}}function Tu(e){return e===void 0||e===1}function sc({scale:e,scaleX:r,scaleY:i}){return!Tu(e)||!Tu(r)||!Tu(i)}function rr(e){return sc(e)||sy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function sy(e){return am(e.x)||am(e.y)}function am(e){return e&&e!=="0%"}function ea(e,r,i){const s=e-i,l=r*s;return i+l}function lm(e,r,i,s,l){return l!==void 0&&(e=ea(e,l,s)),ea(e,i,s)+r}function ac(e,r=0,i=1,s,l){e.min=lm(e.min,r,i,s,l),e.max=lm(e.max,r,i,s,l)}function ay(e,{x:r,y:i}){ac(e.x,r.translate,r.scale,r.originPoint),ac(e.y,i.translate,i.scale,i.originPoint)}const um=.999999999999,cm=1.0000000000001;function l2(e,r,i,s=!1){const l=i.length;if(!l)return;r.x=r.y=1;let c,f;for(let h=0;h<l;h++){c=i[h],f=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Hr(e,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(r.x*=f.x.scale,r.y*=f.y.scale,ay(e,f)),s&&rr(c.latestValues)&&Hr(e,c.latestValues))}r.x<cm&&r.x>um&&(r.x=1),r.y<cm&&r.y>um&&(r.y=1)}function Wr(e,r){e.min=e.min+r,e.max=e.max+r}function dm(e,r,i,s,l=.5){const c=Ie(e.min,e.max,l);ac(e,r,i,c,s)}function Hr(e,r){dm(e.x,r.x,r.scaleX,r.scale,r.originX),dm(e.y,r.y,r.scaleY,r.scale,r.originY)}function ly(e,r){return oy(a2(e.getBoundingClientRect(),r))}function u2(e,r,i){const s=ly(e,i),{scroll:l}=r;return l&&(Wr(s.x,l.offset.x),Wr(s.y,l.offset.y)),s}const uy=({current:e})=>e?e.ownerDocument.defaultView:null,c2=new WeakMap;class d2{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Fe(),this.visualElement=r}start(r,{snapToCursor:i=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(mo(y).point)},c=(y,v)=>{const{drag:x,dragPropagation:E,onDragStart:R}=this.getProps();if(x&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=sS(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vt(D=>{let _=this.getAxisMotionValue(D).get()||0;if(nn.test(_)){const{projection:O}=this.visualElement;if(O&&O.layout){const V=O.layout.layoutBox[D];V&&(_=gt(V)*(parseFloat(_)/100))}}this.originPoint[D]=_}),R&&ke.postRender(()=>R(y,v)),qu(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},f=(y,v)=>{const{dragPropagation:x,dragDirectionLock:E,onDirectionLock:R,onDrag:T}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:D}=v;if(E&&this.currentDirection===null){this.currentDirection=f2(D),this.currentDirection!==null&&R&&R(this.currentDirection);return}this.updateAxis("x",v.point,D),this.updateAxis("y",v.point,D),this.visualElement.render(),T&&T(y,v)},h=(y,v)=>this.stop(y,v),p=()=>Vt(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new ty(r,{onSessionStart:l,onStart:c,onMove:f,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:uy(this.visualElement)})}stop(r,i){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=i;this.startAnimation(l);const{onDragEnd:c}=this.getProps();c&&ke.postRender(()=>c(r,i))}cancel(){this.isDragging=!1;const{projection:r,animationState:i}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(r,i,s){const{drag:l}=this.getProps();if(!s||!Rs(r,l,this.currentDirection))return;const c=this.getAxisMotionValue(r);let f=this.originPoint[r]+s[r];this.constraints&&this.constraints[r]&&(f=e2(f,this.constraints[r],this.elastic[r])),c.set(f)}resolveConstraints(){var r;const{dragConstraints:i,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,c=this.constraints;i&&Fr(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&l?this.constraints=t2(l.layoutBox,i):this.constraints=!1,this.elastic=o2(s),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Vt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=i2(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:i}=this.getProps();if(!r||!Fr(r))return!1;const s=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=u2(s,l.root,this.visualElement.getTransformPagePoint());let f=n2(l.layout.layoutBox,c);if(i){const h=i(s2(f));this.hasMutatedConstraints=!!h,h&&(f=oy(h))}return f}startAnimation(r){const{drag:i,dragMomentum:s,dragElastic:l,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},m=Vt(y=>{if(!Rs(y,i,this.currentDirection))return;let v=p[y]||{};f&&(v={min:0,max:0});const x=l?200:1e6,E=l?40:1e7,R={type:"inertia",velocity:s?r[y]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(y,R)});return Promise.all(m).then(h)}startAxisValueAnimation(r,i){const s=this.getAxisMotionValue(r);return qu(this.visualElement,r),s.start(td(r,s,0,i,this.visualElement,!1))}stopAnimation(){Vt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Vt(r=>{var i;return(i=this.getAxisMotionValue(r).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(r){var i;return(i=this.getAxisMotionValue(r).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(r){const i=`_drag${r.toUpperCase()}`,s=this.visualElement.getProps(),l=s[i];return l||this.visualElement.getValue(r,(s.initial?s.initial[r]:void 0)||0)}snapToCursor(r){Vt(i=>{const{drag:s}=this.getProps();if(!Rs(i,s,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(i);if(l&&l.layout){const{min:f,max:h}=l.layout.layoutBox[i];c.set(r[i]-Ie(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:i}=this.getProps(),{projection:s}=this.visualElement;if(!Fr(i)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Vt(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();l[f]=r2({min:p,max:p},this.constraints[f])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Vt(f=>{if(!Rs(f,r,null))return;const h=this.getAxisMotionValue(f),{min:p,max:m}=this.constraints[f];h.set(Ie(p,m,l[f]))})}addListeners(){if(!this.visualElement.current)return;c2.set(this.visualElement,this);const r=this.visualElement.current,i=Zi(r,"pointerdown",p=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Fr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),ke.read(s);const f=co(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(Vt(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=p[y].translate,v.set(v.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),i(),c(),h&&h()}}getProps(){const r=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:f=oc,dragMomentum:h=!0}=r;return{...r,drag:i,dragDirectionLock:s,dragPropagation:l,dragConstraints:c,dragElastic:f,dragMomentum:h}}}function Rs(e,r,i){return(r===!0||r===e)&&(i===null||i===e)}function f2(e,r=10){let i=null;return Math.abs(e.y)>r?i="y":Math.abs(e.x)>r&&(i="x"),i}class p2 extends Fn{constructor(r){super(r),this.removeGroupControls=yt,this.removeListeners=yt,this.controls=new d2(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yt}unmount(){this.removeGroupControls(),this.removeListeners()}}const fm=e=>(r,i)=>{e&&ke.postRender(()=>e(r,i))};class h2 extends Fn{constructor(){super(...arguments),this.removePointerDownListener=yt}onPointerDown(r){this.session=new ty(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uy(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:i,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:fm(r),onStart:fm(i),onMove:s,onEnd:(c,f)=>{delete this.session,l&&ke.postRender(()=>l(c,f))}}}mount(){this.removePointerDownListener=Zi(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ns={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function pm(e,r){return r.max===r.min?0:e/(r.max-r.min)*100}const Bi={correct:(e,r)=>{if(!r.target)return e;if(typeof e=="string")if(ue.test(e))e=parseFloat(e);else return e;const i=pm(e,r.target.x),s=pm(e,r.target.y);return`${i}% ${s}%`}},m2={correct:(e,{treeScale:r,projectionDelta:i})=>{const s=e,l=$n.parse(e);if(l.length>5)return s;const c=$n.createTransformer(e),f=typeof l[0]!="number"?1:0,h=i.x.scale*r.x,p=i.y.scale*r.y;l[0+f]/=h,l[1+f]/=p;const m=Ie(h,p,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),c(l)}};class g2 extends G.Component{componentDidMount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:s,layoutId:l}=this.props,{projection:c}=r;Fw(y2),c&&(i.group&&i.group.add(c),s&&s.register&&l&&s.register(c),c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Ns.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:i,visualElement:s,drag:l,isPresent:c}=this.props,f=s.projection;return f&&(f.isPresent=c,l||r.layoutDependency!==i||i===void 0?f.willUpdate():this.safeToRemove(),r.isPresent!==c&&(c?f.promote():f.relegate()||ke.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),bc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:s}=this.props,{projection:l}=r;l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function cy(e){const[r,i]=Gg(),s=G.useContext(wc);return C.jsx(g2,{...e,layoutGroup:s,switchLayoutGroup:G.useContext(Zg),isPresent:r,safeToRemove:i})}const y2={borderRadius:{...Bi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bi,borderTopRightRadius:Bi,borderBottomLeftRadius:Bi,borderBottomRightRadius:Bi,boxShadow:m2};function v2(e,r,i){const s=ft(e)?e:tn(e);return s.start(td("",s,r,i)),s.animation}function x2(e){return e instanceof SVGElement&&e.tagName!=="svg"}const w2=(e,r)=>e.depth-r.depth;class S2{constructor(){this.children=[],this.isDirty=!1}add(r){Bc(this.children,r),this.isDirty=!0}remove(r){Uc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(w2),this.isDirty=!1,this.children.forEach(r)}}function k2(e,r){const i=rn.now(),s=({timestamp:l})=>{const c=l-i;c>=r&&(Yt(s),e(c-r))};return ke.read(s,!0),()=>Yt(s)}const dy=["TopLeft","TopRight","BottomLeft","BottomRight"],C2=dy.length,hm=e=>typeof e=="string"?parseFloat(e):e,mm=e=>typeof e=="number"||ue.test(e);function P2(e,r,i,s,l,c){l?(e.opacity=Ie(0,i.opacity!==void 0?i.opacity:1,T2(s)),e.opacityExit=Ie(r.opacity!==void 0?r.opacity:1,0,E2(s))):c&&(e.opacity=Ie(r.opacity!==void 0?r.opacity:1,i.opacity!==void 0?i.opacity:1,s));for(let f=0;f<C2;f++){const h=`border${dy[f]}Radius`;let p=gm(r,h),m=gm(i,h);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||mm(p)===mm(m)?(e[h]=Math.max(Ie(hm(p),hm(m),s),0),(nn.test(m)||nn.test(p))&&(e[h]+="%")):e[h]=m}(r.rotate||i.rotate)&&(e.rotate=Ie(r.rotate||0,i.rotate||0,s))}function gm(e,r){return e[r]!==void 0?e[r]:e.borderRadius}const T2=fy(0,.5,j0),E2=fy(.5,.95,yt);function fy(e,r,i){return s=>s<e?0:s>r?1:i(dr(e,r,s))}function ym(e,r){e.min=r.min,e.max=r.max}function Ot(e,r){ym(e.x,r.x),ym(e.y,r.y)}function vm(e,r){e.translate=r.translate,e.scale=r.scale,e.originPoint=r.originPoint,e.origin=r.origin}function xm(e,r,i,s,l){return e-=r,e=ea(e,1/i,s),l!==void 0&&(e=ea(e,1/l,s)),e}function b2(e,r=0,i=1,s=.5,l,c=e,f=e){if(nn.test(r)&&(r=parseFloat(r),r=Ie(f.min,f.max,r/100)-f.min),typeof r!="number")return;let h=Ie(c.min,c.max,s);e===c&&(h-=r),e.min=xm(e.min,r,i,h,l),e.max=xm(e.max,r,i,h,l)}function wm(e,r,[i,s,l],c,f){b2(e,r[i],r[s],r[l],r.scale,c,f)}const A2=["x","scaleX","originX"],j2=["y","scaleY","originY"];function Sm(e,r,i,s){wm(e.x,r,A2,i?i.x:void 0,s?s.x:void 0),wm(e.y,r,j2,i?i.y:void 0,s?s.y:void 0)}function km(e){return e.translate===0&&e.scale===1}function py(e){return km(e.x)&&km(e.y)}function Cm(e,r){return e.min===r.min&&e.max===r.max}function R2(e,r){return Cm(e.x,r.x)&&Cm(e.y,r.y)}function Pm(e,r){return Math.round(e.min)===Math.round(r.min)&&Math.round(e.max)===Math.round(r.max)}function hy(e,r){return Pm(e.x,r.x)&&Pm(e.y,r.y)}function Tm(e){return gt(e.x)/gt(e.y)}function Em(e,r){return e.translate===r.translate&&e.scale===r.scale&&e.originPoint===r.originPoint}class L2{constructor(){this.members=[]}add(r){Bc(this.members,r),r.scheduleRender()}remove(r){if(Uc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(r){const i=this.members.findIndex(l=>r===l);if(i===0)return!1;let s;for(let l=i;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(r,i){const s=this.lead;if(r!==s&&(this.prevLead=s,this.lead=r,r.show(),s)){s.instance&&s.scheduleRender(),r.scheduleRender(),r.resumeFrom=s,i&&(r.resumeFrom.preserveOpacity=!0),s.snapshot&&(r.snapshot=s.snapshot,r.snapshot.latestValues=s.animationValues||s.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:l}=r.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:i,resumingFrom:s}=r;i.onExitComplete&&i.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function M2(e,r,i){let s="";const l=e.x.translate/r.x,c=e.y.translate/r.y,f=(i==null?void 0:i.z)||0;if((l||c||f)&&(s=`translate3d(${l}px, ${c}px, ${f}px) `),(r.x!==1||r.y!==1)&&(s+=`scale(${1/r.x}, ${1/r.y}) `),i){const{transformPerspective:m,rotate:y,rotateX:v,rotateY:x,skewX:E,skewY:R}=i;m&&(s=`perspective(${m}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),E&&(s+=`skewX(${E}deg) `),R&&(s+=`skewY(${R}deg) `)}const h=e.x.scale*r.x,p=e.y.scale*r.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const ir={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Qi=typeof window<"u"&&window.MotionDebug!==void 0,Eu=["","X","Y","Z"],D2={visibility:"hidden"},bm=1e3;let _2=0;function bu(e,r,i,s){const{latestValues:l}=r;l[e]&&(i[e]=l[e],r.setStaticValue(e,0),s&&(s[e]=0))}function my(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:r}=e.options;if(!r)return;const i=k0(r);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:c}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",ke,!(l||c))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&my(s)}function gy({attachResizeListener:e,defaultParent:r,measureScroll:i,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},h=r==null?void 0:r()){this.id=_2++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Qi&&(ir.totalNodes=ir.resolvedTargetDeltas=ir.recalculatedProjection=0),this.nodes.forEach(V2),this.nodes.forEach(B2),this.nodes.forEach(U2),this.nodes.forEach(z2),Qi&&window.MotionDebug.record(ir)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new S2)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Wc),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=x2(f),this.instance=f;const{layoutId:p,layout:m,visualElement:y}=this.options;if(y&&!y.current&&y.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(m||p)&&(this.isLayoutDirty=!0),e){let v;const x=()=>this.root.updateBlockedByResize=!1;e(f,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=k2(x,250),Ns.hasAnimatedSinceResize&&(Ns.hasAnimatedSinceResize=!1,this.nodes.forEach(jm))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&y&&(p||m)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:E,layout:R})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||y.getDefaultTransition()||Y2,{onLayoutAnimationStart:D,onLayoutAnimationComplete:_}=y.getProps(),O=!this.targetLayout||!hy(this.targetLayout,R),V=!x&&E;if(this.options.layoutRoot||this.resumeFrom||V||x&&(O||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,V);const W={...zc(T,"layout"),onPlay:D,onComplete:_};(y.shouldReduceMotion||this.options.layoutRoot)&&(W.delay=0,W.type=!1),this.startAnimation(W)}else x||jm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=R})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(W2),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&my(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Am);return}this.isUpdating||this.nodes.forEach($2),this.isUpdating=!1,this.nodes.forEach(F2),this.nodes.forEach(I2),this.nodes.forEach(O2),this.clearAllSnapshots();const h=rn.now();tt.delta=on(0,1e3/60,h-tt.timestamp),tt.timestamp=h,tt.isProcessing=!0,vu.update.process(tt),vu.preRender.process(tt),vu.render.process(tt),tt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(N2),this.sharedNodes.forEach(H2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!gt(this.snapshot.measuredBox.x)&&!gt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!py(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;f&&(h||rr(this.latestValues)||y)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),Q2(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:h}=this.options;if(!h)return Fe();const p=h.measureViewportBox();if(!(((f=this.scroll)===null||f===void 0?void 0:f.wasRoot)||this.path.some(X2))){const{scroll:y}=this.root;y&&(Wr(p.x,y.offset.x),Wr(p.y,y.offset.y))}return p}removeElementScroll(f){var h;const p=Fe();if(Ot(p,f),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return p;for(let m=0;m<this.path.length;m++){const y=this.path[m],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&Ot(p,f),Wr(p.x,v.offset.x),Wr(p.y,v.offset.y))}return p}applyTransform(f,h=!1){const p=Fe();Ot(p,f);for(let m=0;m<this.path.length;m++){const y=this.path[m];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Hr(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),rr(y.latestValues)&&Hr(p,y.latestValues)}return rr(this.latestValues)&&Hr(p,this.latestValues),p}removeTransform(f){const h=Fe();Ot(h,f);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!rr(m.latestValues))continue;sc(m.latestValues)&&m.updateSnapshot();const y=Fe(),v=m.measurePageBox();Ot(y,v),Sm(h,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return rr(this.latestValues)&&Sm(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var h;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!(!this.layout||!(v||x))){if(this.resolvedRelativeTargetAt=tt.timestamp,!this.targetDelta&&!this.relativeTarget){const E=this.getClosestProjectingParent();E&&E.layout&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),to(this.relativeTargetOrigin,this.layout.layoutBox,E.layout.layoutBox),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Fe(),this.targetWithTransforms=Fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Zk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ot(this.target,this.layout.layoutBox),ay(this.target,this.targetDelta)):Ot(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const E=this.getClosestProjectingParent();E&&!!E.resumingFrom==!!this.resumingFrom&&!E.options.layoutScroll&&E.target&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),to(this.relativeTargetOrigin,this.target,E.target),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Qi&&ir.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||sc(this.parent.latestValues)||sy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var f;const h=this.getLead(),p=!!this.resumingFrom||this!==h;let m=!0;if((this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===tt.timestamp&&(m=!1),m)return;const{layout:y,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||v))return;Ot(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,E=this.treeScale.y;l2(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Fe());const{target:R}=h;if(!R){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vm(this.prevProjectionDelta.x,this.projectionDelta.x),vm(this.prevProjectionDelta.y,this.projectionDelta.y)),eo(this.projectionDelta,this.layoutCorrected,R,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==E||!Em(this.projectionDelta.x,this.prevProjectionDelta.x)||!Em(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",R)),Qi&&ir.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ur(),this.projectionDelta=Ur(),this.projectionDeltaWithTransform=Ur()}setAnimationOrigin(f,h=!1){const p=this.snapshot,m=p?p.latestValues:{},y={...this.latestValues},v=Ur();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const x=Fe(),E=p?p.source:void 0,R=this.layout?this.layout.source:void 0,T=E!==R,D=this.getStack(),_=!D||D.members.length<=1,O=!!(T&&!_&&this.options.crossfade===!0&&!this.path.some(G2));this.animationProgress=0;let V;this.mixTargetDelta=W=>{const $=W/1e3;Rm(v.x,f.x,$),Rm(v.y,f.y,$),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(to(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),K2(this.relativeTarget,this.relativeTargetOrigin,x,$),V&&R2(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=Fe()),Ot(V,this.relativeTarget)),T&&(this.animationValues=y,P2(y,m,this.latestValues,$,O,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ke.update(()=>{Ns.hasAnimatedSinceResize=!0,this.currentAnimation=v2(0,bm,{...f,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(bm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:m,latestValues:y}=f;if(!(!h||!p||!m)){if(this!==f&&this.layout&&m&&yy(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||Fe();const v=gt(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+v;const x=gt(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+x}Ot(h,p),Hr(h,y),eo(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new L2),this.sharedNodes.get(f).add(h);const m=h.options.initialPromotionConfig;h.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var f;const{layoutId:h}=this.options;return h?((f=this.getStack())===null||f===void 0?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:h}=this.options;return h?(f=this.getStack())===null||f===void 0?void 0:f.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const m={};p.z&&bu("z",f,m,this.animationValues);for(let y=0;y<Eu.length;y++)bu(`rotate${Eu[y]}`,f,m,this.animationValues),bu(`skew${Eu[y]}`,f,m,this.animationValues);f.render();for(const y in m)f.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);f.scheduleRender()}getProjectionStyles(f){var h,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return D2;const m={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=Vs(f==null?void 0:f.pointerEvents)||"",m.transform=y?y(this.latestValues,""):"none",m;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Vs(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!rr(this.latestValues)&&(T.transform=y?y({},""):"none",this.hasProjected=!1),T}const x=v.animationValues||v.latestValues;this.applyTransformsToTarget(),m.transform=M2(this.projectionDeltaWithTransform,this.treeScale,x),y&&(m.transform=y(x,m.transform));const{x:E,y:R}=this.projectionDelta;m.transformOrigin=`${E.origin*100}% ${R.origin*100}% 0`,v.animationValues?m.opacity=v===this?(p=(h=x.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:m.opacity=v===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const T in lo){if(x[T]===void 0)continue;const{correct:D,applyTo:_,isCSSVariable:O}=lo[T],V=m.transform==="none"?x[T]:D(x[T],v);if(_){const W=_.length;for(let $=0;$<W;$++)m[_[$]]=V}else O?this.options.visualElement.renderState.vars[T]=V:m[T]=V}return this.options.layoutId&&(m.pointerEvents=v===this?Vs(f==null?void 0:f.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var h;return(h=f.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(Am),this.root.sharedNodes.clear()}}}function I2(e){e.updateLayout()}function O2(e){var r;const i=((r=e.resumeFrom)===null||r===void 0?void 0:r.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=e.layout,{animationType:c}=e.options,f=i.source!==e.layout.source;c==="size"?Vt(v=>{const x=f?i.measuredBox[v]:i.layoutBox[v],E=gt(x);x.min=s[v].min,x.max=x.min+E}):yy(c,i.layoutBox,s)&&Vt(v=>{const x=f?i.measuredBox[v]:i.layoutBox[v],E=gt(s[v]);x.max=x.min+E,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+E)});const h=Ur();eo(h,s,i.layoutBox);const p=Ur();f?eo(p,e.applyTransform(l,!0),i.measuredBox):eo(p,s,i.layoutBox);const m=!py(h);let y=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:E}=v;if(x&&E){const R=Fe();to(R,i.layoutBox,x.layoutBox);const T=Fe();to(T,s,E.layoutBox),hy(R,T)||(y=!0),v.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=R,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:m,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:s}=e.options;s&&s()}e.options.transition=void 0}function V2(e){Qi&&ir.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function z2(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function N2(e){e.clearSnapshot()}function Am(e){e.clearMeasurements()}function $2(e){e.isLayoutDirty=!1}function F2(e){const{visualElement:r}=e.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),e.resetTransform()}function jm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function B2(e){e.resolveTargetDelta()}function U2(e){e.calcProjection()}function W2(e){e.resetSkewAndRotation()}function H2(e){e.removeLeadSnapshot()}function Rm(e,r,i){e.translate=Ie(r.translate,0,i),e.scale=Ie(r.scale,1,i),e.origin=r.origin,e.originPoint=r.originPoint}function Lm(e,r,i,s){e.min=Ie(r.min,i.min,s),e.max=Ie(r.max,i.max,s)}function K2(e,r,i,s){Lm(e.x,r.x,i.x,s),Lm(e.y,r.y,i.y,s)}function G2(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Y2={duration:.45,ease:[.4,0,.1,1]},Mm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Dm=Mm("applewebkit/")&&!Mm("chrome/")?Math.round:yt;function _m(e){e.min=Dm(e.min),e.max=Dm(e.max)}function Q2(e){_m(e.x),_m(e.y)}function yy(e,r,i){return e==="position"||e==="preserve-aspect"&&!Jk(Tm(r),Tm(i),.2)}function X2(e){var r;return e!==e.root&&((r=e.scroll)===null||r===void 0?void 0:r.wasRoot)}const q2=gy({attachResizeListener:(e,r)=>co(e,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Au={current:void 0},vy=gy({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Au.current){const e=new q2({});e.mount(window),e.setOptions({layoutScroll:!0}),Au.current=e}return Au.current},resetTransform:(e,r)=>{e.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),J2={pan:{Feature:h2},drag:{Feature:p2,ProjectionNode:vy,MeasureLayout:cy}};function Im(e,r,i){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,c=s[l];c&&ke.postRender(()=>c(r,mo(r)))}class Z2 extends Fn{mount(){const{current:r}=this.node;r&&(this.unmount=tS(r,(i,s)=>(Im(this.node,s,"Start"),l=>Im(this.node,l,"End"))))}unmount(){}}class eC extends Fn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ho(co(this.node.current,"focus",()=>this.onFocus()),co(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Om(e,r,i){const{props:s}=e;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),c=s[l];c&&ke.postRender(()=>c(r,mo(r)))}class tC extends Fn{mount(){const{current:r}=this.node;r&&(this.unmount=oS(r,(i,s)=>(Om(this.node,s,"Start"),(l,{success:c})=>Om(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const lc=new WeakMap,ju=new WeakMap,nC=e=>{const r=lc.get(e.target);r&&r(e)},rC=e=>{e.forEach(nC)};function iC({root:e,...r}){const i=e||document;ju.has(i)||ju.set(i,{});const s=ju.get(i),l=JSON.stringify(r);return s[l]||(s[l]=new IntersectionObserver(rC,{root:e,...r})),s[l]}function oC(e,r,i){const s=iC(r);return lc.set(e,i),s.observe(e),()=>{lc.delete(e),s.unobserve(e)}}const sC={some:0,all:1};class aC extends Fn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:i,margin:s,amount:l="some",once:c}=r,f={root:i?i.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:sC[l]},h=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,c&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),x=m?y:v;x&&x(p)};return oC(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:i}=this.node;["amount","margin","root"].some(lC(r,i))&&this.startObserver()}unmount(){}}function lC({viewport:e={}},{viewport:r={}}={}){return i=>e[i]!==r[i]}const uC={inView:{Feature:aC},tap:{Feature:tC},focus:{Feature:eC},hover:{Feature:Z2}},cC={layout:{ProjectionNode:vy,MeasureLayout:cy}},uc={current:null},xy={current:!1};function dC(){if(xy.current=!0,!!Sc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),r=()=>uc.current=e.matches;e.addListener(r),r()}else uc.current=!1}const fC=[...U0,dt,$n],pC=e=>fC.find(B0(e)),Vm=new WeakMap;function hC(e,r,i){for(const s in r){const l=r[s],c=i[s];if(ft(l))e.addValue(s,l);else if(ft(c))e.addValue(s,tn(l,{owner:e}));else if(c!==l)if(e.hasValue(s)){const f=e.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=e.getStaticValue(s);e.addValue(s,tn(f!==void 0?f:l,{owner:e}))}}for(const s in i)r[s]===void 0&&e.removeValue(s);return r}const zm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class mC{scrapeMotionValuesFromProps(r,i,s){return{}}constructor({parent:r,props:i,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:c,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=rn.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,ke.render(this.render,!1,!0))};const{latestValues:p,renderState:m,onUpdate:y}=f;this.onUpdate=y,this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=m,this.parent=r,this.props=i,this.presenceContext=s,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=pa(i),this.isVariantNode=qg(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const E in x){const R=x[E];p[E]!==void 0&&ft(R)&&R.set(p[E],!1)}}mount(r){this.current=r,Vm.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),xy.current||dC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:uc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Vm.delete(this.current),this.projection&&this.projection.unmount(),Yt(this.notifyUpdate),Yt(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const i=this.features[r];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(r,i){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const s=fr.has(r),l=i.on("change",h=>{this.latestValues[r]=h,this.props.onUpdate&&ke.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),c=i.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,r,i)),this.valueSubscriptions.set(r,()=>{l(),c(),f&&f(),i.owner&&i.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in Xr){const i=Xr[r];if(!i)continue;const{isEnabled:s,Feature:l}=i;if(!this.features[r]&&l&&s(this.props)&&(this.features[r]=new l(this)),this.features[r]){const c=this.features[r];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Fe()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,i){this.latestValues[r]=i}update(r,i){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let s=0;s<zm.length;s++){const l=zm[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,f=r[c];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=hC(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(r),()=>i.variantChildren.delete(r)}addValue(r,i){const s=this.values.get(r);i!==s&&(s&&this.removeValue(r),this.bindToMotionValue(r,i),this.values.set(r,i),this.latestValues[r]=i.get())}removeValue(r){this.values.delete(r);const i=this.valueSubscriptions.get(r);i&&(i(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,i){if(this.props.values&&this.props.values[r])return this.props.values[r];let s=this.values.get(r);return s===void 0&&i!==void 0&&(s=tn(i===null?void 0:i,{owner:this}),this.addValue(r,s)),s}readValue(r,i){var s;let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(s=this.getBaseTargetFromProps(this.props,r))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&($0(l)||L0(l))?l=parseFloat(l):!pC(l)&&$n.test(i)&&(l=V0(r,i)),this.setBaseTarget(r,ft(l)?l.get():l)),ft(l)?l.get():l}setBaseTarget(r,i){this.baseTarget[r]=i}getBaseTarget(r){var i;const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const f=jc(this.props,s,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);f&&(l=f[r])}if(s&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!ft(c)?c:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,i){return this.events[r]||(this.events[r]=new Wc),this.events[r].add(i)}notify(r,...i){this.events[r]&&this.events[r].notify(...i)}}class wy extends mC{constructor(){super(...arguments),this.KeyframeResolver=W0}sortInstanceNodePosition(r,i){return r.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(r,i){return r.style?r.style[i]:void 0}removeValueFromRenderState(r,{vars:i,style:s}){delete i[r],delete s[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;ft(r)&&(this.childSubscription=r.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function gC(e){return window.getComputedStyle(e)}class yC extends wy{constructor(){super(...arguments),this.type="html",this.renderInstance=o0}readValueFromInstance(r,i){if(fr.has(i)){const s=Xc(i);return s&&s.default||0}else{const s=gC(r),l=(Rc(i)?s.getPropertyValue(i):s[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(r,{transformPagePoint:i}){return ly(r,i)}build(r,i,s){Dc(r,i,s.transformTemplate)}scrapeMotionValuesFromProps(r,i,s){return Vc(r,i,s)}}class vC extends wy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Fe}getBaseTargetFromProps(r,i){return r[i]}readValueFromInstance(r,i){if(fr.has(i)){const s=Xc(i);return s&&s.default||0}return i=s0.has(i)?i:Ec(i),r.getAttribute(i)}scrapeMotionValuesFromProps(r,i,s){return u0(r,i,s)}build(r,i,s){_c(r,i,this.isSVGTag,s.transformTemplate)}renderInstance(r,i,s,l){a0(r,i,s,l)}mount(r){this.isSVGTag=Oc(r.tagName),super.mount(r)}}const xC=(e,r)=>Ac(e)?new vC(r):new yC(r,{allowProjection:e!==G.Fragment}),wC=Xw({...Uk,...uC,...J2,...cC},xC),fe=dw(wC);function Sy(e,r){let i;const s=()=>{const{currentTime:l}=r,f=(l===null?0:l.value)/100;i!==f&&e(f),i=f};return ke.update(s,!0),()=>Yt(s)}const $s=new WeakMap;let zn;function SC(e,r){if(r){const{inlineSize:i,blockSize:s}=r[0];return{width:i,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function kC({target:e,contentRect:r,borderBoxSize:i}){var s;(s=$s.get(e))===null||s===void 0||s.forEach(l=>{l({target:e,contentSize:r,get size(){return SC(e,i)}})})}function CC(e){e.forEach(kC)}function PC(){typeof ResizeObserver>"u"||(zn=new ResizeObserver(CC))}function TC(e,r){zn||PC();const i=v0(e);return i.forEach(s=>{let l=$s.get(s);l||(l=new Set,$s.set(s,l)),l.add(r),zn==null||zn.observe(s)}),()=>{i.forEach(s=>{const l=$s.get(s);l==null||l.delete(r),l!=null&&l.size||zn==null||zn.unobserve(s)})}}const Fs=new Set;let no;function EC(){no=()=>{const e={width:window.innerWidth,height:window.innerHeight},r={target:window,size:e,contentSize:e};Fs.forEach(i=>i(r))},window.addEventListener("resize",no)}function bC(e){return Fs.add(e),no||EC(),()=>{Fs.delete(e),!Fs.size&&no&&(no=void 0)}}function AC(e,r){return typeof e=="function"?bC(e):TC(e,r)}const jC=50,Nm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),RC=()=>({time:0,x:Nm(),y:Nm()}),LC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function $m(e,r,i,s){const l=i[r],{length:c,position:f}=LC[r],h=l.current,p=i.time;l.current=e[`scroll${f}`],l.scrollLength=e[`scroll${c}`]-e[`client${c}`],l.offset.length=0,l.offset[0]=0,l.offset[1]=l.scrollLength,l.progress=dr(0,l.scrollLength,l.current);const m=s-p;l.velocity=m>jC?0:Hc(l.current-h,m)}function MC(e,r,i){$m(e,"x",r,i),$m(e,"y",r,i),r.time=i}function DC(e,r){const i={x:0,y:0};let s=e;for(;s&&s!==r;)if(s instanceof HTMLElement)i.x+=s.offsetLeft,i.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const l=s.getBoundingClientRect();s=s.parentElement;const c=s.getBoundingClientRect();i.x+=l.left-c.left,i.y+=l.top-c.top}else if(s instanceof SVGGraphicsElement){const{x:l,y:c}=s.getBBox();i.x+=l,i.y+=c;let f=null,h=s.parentNode;for(;!f;)h.tagName==="svg"&&(f=h),h=s.parentNode;s=f}else break;return i}const cc={start:0,center:.5,end:1};function Fm(e,r,i=0){let s=0;if(e in cc&&(e=cc[e]),typeof e=="string"){const l=parseFloat(e);e.endsWith("px")?s=l:e.endsWith("%")?e=l/100:e.endsWith("vw")?s=l/100*document.documentElement.clientWidth:e.endsWith("vh")?s=l/100*document.documentElement.clientHeight:e=l}return typeof e=="number"&&(s=r*e),i+s}const _C=[0,0];function IC(e,r,i,s){let l=Array.isArray(e)?e:_C,c=0,f=0;return typeof e=="number"?l=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?l=e.split(" "):l=[e,cc[e]?e:"0"]),c=Fm(l[0],i,s),f=Fm(l[1],r),c-f}const OC={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},VC={x:0,y:0};function zC(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function NC(e,r,i){const{offset:s=OC.All}=i,{target:l=e,axis:c="y"}=i,f=c==="y"?"height":"width",h=l!==e?DC(l,e):VC,p=l===e?{width:e.scrollWidth,height:e.scrollHeight}:zC(l),m={width:e.clientWidth,height:e.clientHeight};r[c].offset.length=0;let y=!r[c].interpolate;const v=s.length;for(let x=0;x<v;x++){const E=IC(s[x],m[f],p[f],h[c]);!y&&E!==r[c].interpolatorOffsets[x]&&(y=!0),r[c].offset[x]=E}y&&(r[c].interpolate=Zc(r[c].offset,q0(s),{clamp:!1}),r[c].interpolatorOffsets=[...r[c].offset]),r[c].progress=on(0,1,r[c].interpolate(r[c].current))}function $C(e,r=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,r!==e){let s=r;for(;s&&s!==e;)i.x.targetOffset+=s.offsetLeft,i.y.targetOffset+=s.offsetTop,s=s.offsetParent}i.x.targetLength=r===e?r.scrollWidth:r.clientWidth,i.y.targetLength=r===e?r.scrollHeight:r.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}function FC(e,r,i,s={}){return{measure:()=>$C(e,s.target,i),update:l=>{MC(e,i,l),(s.offset||s.target)&&NC(e,i,s)},notify:()=>r(i)}}const Ui=new WeakMap,Bm=new WeakMap,Ru=new WeakMap,Um=e=>e===document.documentElement?window:e;function nd(e,{container:r=document.documentElement,...i}={}){let s=Ru.get(r);s||(s=new Set,Ru.set(r,s));const l=RC(),c=FC(r,e,l,i);if(s.add(c),!Ui.has(r)){const h=()=>{for(const x of s)x.measure()},p=()=>{for(const x of s)x.update(tt.timestamp)},m=()=>{for(const x of s)x.notify()},y=()=>{ke.read(h,!1,!0),ke.read(p,!1,!0),ke.update(m,!1,!0)};Ui.set(r,y);const v=Um(r);window.addEventListener("resize",y,{passive:!0}),r!==document.documentElement&&Bm.set(r,AC(r,y)),v.addEventListener("scroll",y,{passive:!0})}const f=Ui.get(r);return ke.read(f,!1,!0),()=>{var h;Yt(f);const p=Ru.get(r);if(!p||(p.delete(c),p.size))return;const m=Ui.get(r);Ui.delete(r),m&&(Um(r).removeEventListener("scroll",m),(h=Bm.get(r))===null||h===void 0||h(),window.removeEventListener("resize",m))}}function BC({source:e,container:r,axis:i="y"}){e&&(r=e);const s={value:0},l=nd(c=>{s.value=c[i].progress*100},{container:r,axis:i});return{currentTime:s,cancel:l}}const Lu=new Map;function ky({source:e,container:r=document.documentElement,axis:i="y"}={}){e&&(r=e),Lu.has(r)||Lu.set(r,{});const s=Lu.get(r);return s[i]||(s[i]=f0()?new ScrollTimeline({source:r,axis:i}):BC({source:r,axis:i})),s[i]}function UC(e){return e.length===2}function Cy(e){return e&&(e.target||e.offset)}function WC(e,r){return UC(e)||Cy(r)?nd(i=>{e(i[r.axis].progress,i)},r):Sy(e,ky(r))}function HC(e,r){if(e.flatten(),Cy(r))return e.pause(),nd(i=>{e.time=e.duration*i[r.axis].progress},r);{const i=ky(r);return e.attachTimeline?e.attachTimeline(i,s=>(s.pause(),Sy(l=>{s.time=s.duration*l},i))):yt}}function KC(e,{axis:r="y",...i}={}){const s={axis:r,...i};return typeof e=="function"?WC(e,s):HC(e,s)}function Wm(e,r){rw(!!(!r||r.current))}const GC=()=>({scrollX:tn(0),scrollY:tn(0),scrollXProgress:tn(0),scrollYProgress:tn(0)});function YC({container:e,target:r,layoutEffect:i=!0,...s}={}){const l=Zr(GC);return(i?ca:G.useEffect)(()=>(Wm("target",r),Wm("container",e),KC((f,{x:h,y:p})=>{l.scrollX.set(h.current),l.scrollXProgress.set(h.progress),l.scrollY.set(p.current),l.scrollYProgress.set(p.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(r==null?void 0:r.current)||void 0})),[e,r,JSON.stringify(s.offset)]),l}function QC(e){const r=Zr(()=>tn(e)),{isStatic:i}=G.useContext(ua);if(i){const[,s]=G.useState(e);G.useEffect(()=>r.on("change",s),[])}return r}function Py(e,r){const i=QC(r()),s=()=>i.set(r());return s(),ca(()=>{const l=()=>ke.preRender(s,!1,!0),c=e.map(f=>f.on("change",l));return()=>{c.forEach(f=>f()),Yt(s)}}),i}const XC=e=>e&&typeof e=="object"&&e.mix,qC=e=>XC(e)?e.mix:void 0;function JC(...e){const r=!Array.isArray(e[0]),i=r?0:-1,s=e[0+i],l=e[1+i],c=e[2+i],f=e[3+i],h=Zc(l,c,{mixer:qC(c[0]),...f});return r?h(s):h}function ZC(e){qi.current=[],e();const r=Py(qi.current,e);return qi.current=void 0,r}function eP(e,r,i,s){if(typeof e=="function")return ZC(e);const l=typeof r=="function"?r:JC(r,i,s);return Array.isArray(e)?Hm(e,l):Hm([e],([c])=>l(c))}function Hm(e,r){const i=Zr(()=>[]);return Py(e,()=>{i.length=0;const s=e.length;for(let l=0;l<s;l++)i[l]=e[l].get();return r(i)})}const tP=I.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  height: 80px;
  background: ${({scrolled:e,theme:r})=>e?`${r.colors.background}dd`:r.colors.background};
  backdrop-filter: blur(10px);
  box-shadow: ${({scrolled:e,theme:r})=>e?r.shadows.header:"none"};
  z-index: 999;
  transition: all 0.3s ease;
`,nP=I(fe.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.accent};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accentHover};
  }
`,rP=I.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: ${({theme:e})=>e.colors.text};
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
      background: ${({theme:e})=>e.colors.accent};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({theme:e})=>e.colors.accent};
      
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,iP=I.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text};
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }

  @media (max-width: 768px) {
    display: block;
  }
`,oP=I(fe.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: ${({theme:e})=>e.colors.mobileMenuBg};
  backdrop-filter: blur(10px);
  box-shadow: ${({theme:e})=>e.shadows.modal};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`,sP=I.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text};
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,Wi=I.a`
  color: ${({theme:e})=>e.colors.text};
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.75rem 0;
  transition: color 0.3s ease;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,aP=I(fe.div)`
  position: fixed;
  inset: 0;
  background: ${({theme:e})=>e.colors.overlay};
  z-index: 999;
  backdrop-filter: blur(2px);
`;function lP(){const[e,r]=G.useState(!1),[i,s]=G.useState(!1);G.useEffect(()=>{const f=()=>{s(window.scrollY>50)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const l=f=>{const h=document.getElementById(f);if(h){const y=h.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:y,behavior:"smooth"})}r(!1)},c={hidden:{x:"100%"},visible:{x:0},exit:{x:"100%"}};return C.jsxs(C.Fragment,{children:[C.jsxs(tP,{scrolled:i,children:[C.jsx(nP,{onClick:()=>l("hero"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"KI"}),C.jsxs(rP,{children:[C.jsx("a",{onClick:()=>l("hero"),children:"Home"}),C.jsx("a",{onClick:()=>l("about"),children:"About"}),C.jsx("a",{onClick:()=>l("experience"),children:"Experience"}),C.jsx("a",{onClick:()=>l("projects"),children:"Projects"}),C.jsx("a",{onClick:()=>l("contact"),children:"Contact"})]}),C.jsx(iP,{onClick:()=>r(!0),children:C.jsx(Jx,{})})]}),C.jsx(kc,{children:e&&C.jsxs(C.Fragment,{children:[C.jsx(aP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>r(!1)}),C.jsxs(oP,{initial:"hidden",animate:"visible",exit:"exit",variants:c,transition:{type:"spring",stiffness:300,damping:30},children:[C.jsx(sP,{onClick:()=>r(!1),children:C.jsx(Kg,{})}),C.jsx(Wi,{onClick:()=>l("hero"),children:"Home"}),C.jsx(Wi,{onClick:()=>l("about"),children:"About"}),C.jsx(Wi,{onClick:()=>l("experience"),children:"Experience"}),C.jsx(Wi,{onClick:()=>l("projects"),children:"Projects"}),C.jsx(Wi,{onClick:()=>l("contact"),children:"Contact"})]})]})})]})}const uP="/assets/shopkojiro-FO7Q1OH5.png",cP=I.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  background: radial-gradient(circle at 20% 40%, rgba(50, 30, 120, 0.18), transparent 60%), #0b0e2a;

  text-align: center;
  color: ${({theme:e})=>e.colors.text};
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
`,dP=I(fe.div)`
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
`,fP=I(fe.div)`
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
`,pP=I.div`
  position: relative;
  z-index: 1;
  filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.5));
`,hP=I.img`
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
`,mP=I(fe.div)`
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
`,gP=I(fe.p)`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`,yP=I(fe.h1)`
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
`,vP=I(fe.h2)`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,xP=I(fe.p)`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.textSecondary};
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
`,wP=I(fe.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.accent};
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.background};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(139, 92, 246, 0.3);
  }
`,SP={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},Nr={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,-.05,.01,.99]}}},kP=()=>C.jsx(cP,{id:"hero",children:C.jsxs(dP,{variants:SP,initial:"hidden",animate:"visible",children:[C.jsx(fP,{variants:Nr,children:C.jsx(pP,{children:C.jsx(hP,{src:uP,alt:"Khayrullo Isomiddinov"})})}),C.jsxs(mP,{children:[C.jsx(gP,{variants:Nr,children:"Hi, my name is"}),C.jsx(yP,{variants:Nr,children:"Khayrullo Isomiddinov."}),C.jsx(vP,{variants:Nr,children:"and I love building stuff."}),C.jsx(xP,{variants:Nr,children:"I'm a student of Computer Science at ELTE, and I am crazy about backend development, databases, and solving complex challenges."}),C.jsx(wP,{variants:Nr,href:"#projects",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View My Work"})]})]})}),CP=I.section`
  padding: 3rem 1rem;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  overflow: hidden;

  /* Modern gradient background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      ${({theme:e})=>e.colors.accent}08 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      ${({theme:e})=>e.colors.accent}05 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
  }

  /* Animated grid pattern */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(${({theme:e})=>e.colors.accent}03 1px, transparent 1px),
      linear-gradient(90deg, ${({theme:e})=>e.colors.accent}03 1px, transparent 1px);
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
`,PP=I.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`,TP=I(fe.h2)`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.text} 0%,
    ${({theme:e})=>e.colors.accent} 100%
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
`,EP=I(fe.div)`
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({theme:e})=>e.colors.accent}40,
    ${({theme:e})=>e.colors.accent},
    ${({theme:e})=>e.colors.accent}40,
    transparent
  );
  width: 120px;
  margin: 0 auto 3rem;
  border-radius: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 50%;
    box-shadow: 0 0 20px ${({theme:e})=>e.colors.accent}80;
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 4px;
  }
`,bP=I.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 3rem;
  }
`,AP=I.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`,jP=I(fe.div)`
  padding: 2rem 1.5rem;
  background: ${({theme:e})=>`linear-gradient(135deg, ${e.colors.cardBg}F0 0%, ${e.colors.cardBg}D0 100%)`};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({theme:e})=>e.colors.border}40;
  border-left: 4px solid ${({theme:e})=>e.colors.accent};
  border-radius: 16px;
  line-height: 1.9;
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px ${({theme:e})=>e.colors.border}20,
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.colors.accent},
      ${({theme:e})=>e.colors.accentHover}
    );
    transition: width 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.15),
      0 0 0 1px ${({theme:e})=>e.colors.border}40,
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 40px ${({theme:e})=>e.colors.accent}20;
  }

  p {
    margin-bottom: 1.5rem;
    font-weight: 400;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({theme:e})=>e.colors.accent};
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
`,RP=I(fe.div)`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.cardBg}F8 0%,
    ${({theme:e})=>e.colors.cardBg}E8 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({theme:e})=>e.colors.border}50;
  border-left: 4px solid ${({theme:e})=>e.colors.accent};
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 0 0 1px ${({theme:e})=>e.colors.border}20;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      ${({theme:e})=>e.colors.accent}10 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.12),
      0 0 60px ${({theme:e})=>e.colors.accent}15;
    border-color: ${({theme:e})=>e.colors.accent}80;

    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,LP=I.h4`
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.accent},
    ${({theme:e})=>e.colors.accentHover}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.colors.accent},
      transparent
    );
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,MP=I.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;
  position: relative;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,DP=I(fe.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`,Km=I(fe.div)`
  margin-bottom: 0;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.cardBg}F0 0%,
    ${({theme:e})=>e.colors.cardBg}D0 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({theme:e})=>e.colors.border}40;
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px ${({theme:e})=>e.colors.border}20;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${({theme:e})=>e.colors.border}60;
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.15),
      0 0 0 1px ${({theme:e})=>e.colors.border}40;
  }
`,Ty=I(fe.button)`
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.colors.accent},
      ${({theme:e})=>e.colors.accentHover}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    background: ${({theme:e})=>e.colors.cardBg}40;
  }

  @media (min-width: 768px) {
    padding: 1.75rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`,Gm=I.h3`
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.text} 0%,
    ${({theme:e})=>e.colors.accent} 100%
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
`,_P=I(fe.div)`
  color: ${({theme:e})=>e.colors.accent};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.accent}15;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${Ty}:hover & {
    background: ${({theme:e})=>e.colors.accent}25;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    width: 28px;
    height: 28px;
  }
`,IP=I(fe.div)`
  overflow: hidden;
`,OP=I.div`
  padding: 0 1.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem 1rem;
  }
`,VP=I.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-style: italic;
  padding: 0.75rem 1rem;
  background: ${({theme:e})=>e.colors.cardBg}80;
  border-left: 3px solid ${({theme:e})=>e.colors.accent}60;
  border-radius: 8px;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`,zP=I(fe.div)`
  margin-bottom: 1.25rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`,NP=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
`,$P=I.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.95rem;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,FP=I(fe.span)`
  font-weight: 700;
  color: ${({theme:e})=>e.colors.accent};
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  background: ${({theme:e})=>e.colors.accent}15;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.accent}30;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,BP=I.div`
  width: 100%;
  height: 8px;
  background: ${({theme:e})=>e.colors.cardBg};
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border}30;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`,UP=I(fe.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.accent},
    ${({theme:e})=>e.colors.accentHover},
    ${({theme:e})=>e.colors.accent}
  );
  background-size: 200% 100%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 10px ${({theme:e})=>e.colors.accent}40,
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &::after {
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
`,WP=I.div`
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
`,HP=I(fe.span)`
  padding: 0.7rem 1rem;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.cardBg}F8 0%,
    ${({theme:e})=>e.colors.cardBg}E8 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1.5px solid ${({theme:e})=>e.colors.border}40;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      ${({theme:e})=>e.colors.accent}20,
      transparent
    );
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    border-radius: 50%;
  }

  &:hover,
  &:active {
    border-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.accent};
    transform: translateY(-3px);
    box-shadow: 
      0 8px 24px ${({theme:e})=>e.colors.accent}20,
      0 0 0 2px ${({theme:e})=>e.colors.accent}10;

    &::before {
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
`;I(fe.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
    transform: translateX(5px);
  }
`;I.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.95rem;
`;I.span`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: ${({theme:e,level:r})=>r==="C2"?`${e.colors.accent}25`:r==="C1"?`${e.colors.accent}20`:r==="B2"?`${e.colors.accent}15`:`${e.colors.accent}10`};
  color: ${({theme:e})=>e.colors.accent};
  border: 1px solid ${({theme:e,level:r})=>r==="C2"?e.colors.accent:r==="C1"?`${e.colors.accent}80`:r==="B2"?`${e.colors.accent}60`:`${e.colors.accent}40`};
`;const KP=[{name:"Python",level:95},{name:"Java",level:80},{name:"JavaScript",level:70},{name:"C#",level:65},{name:"C",level:60},{name:"PHP",level:58},{name:"ADA",level:35}],GP=[{name:"React",level:88},{name:"FastAPI",level:85},{name:"Node.js",level:72},{name:"Laravel",level:55}],YP=[{name:"SQL (Databases)",level:92},{name:"Linux",level:92},{name:"Operating Systems",level:90}],QP=[{name:"Git",level:93},{name:"REST APIs",level:90},{name:"OOP Design Patterns",level:87},{name:"Docker",level:55}],XP=["Leadership","Team Collaboration","Critical Thinking","Problem-Solving","Adaptability","Time Management","Communication","Project Management"],qP=()=>{const{scrollYProgress:e}=YC(),r=eP(e,[0,.3,.7,1],[1,1,.8,.6]),[i,s]=G.useState({programming:!0,frameworks:!1,databases:!1,devTools:!1}),l=T=>{s(D=>({...D,[T]:!D[T]}))},c={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},f={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:[.6,-.05,.01,.99]}}},h={hidden:{opacity:0,y:-30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},p={hidden:{opacity:0,scaleX:0},visible:{opacity:1,scaleX:1,transition:{duration:.8,delay:.3,ease:[.6,-.05,.01,.99]}}},m={hidden:{width:0},visible:T=>({width:`${T}%`,transition:{duration:1,delay:.2,ease:[.6,-.05,.01,.99]}})},y={hidden:{opacity:0,scale:0},visible:T=>({opacity:1,scale:1,transition:{duration:.5,delay:.5,ease:[.34,1.56,.64,1]}})},v={hidden:{opacity:0,scale:.8},visible:T=>({opacity:1,scale:1,transition:{duration:.4,delay:T*.05,ease:[.34,1.56,.64,1]}}),hover:{scale:1.05,transition:{duration:.2}}},x={open:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:[.6,-.05,.01,.99]},opacity:{duration:.3,delay:.1}}},closed:{height:0,opacity:0,transition:{height:{duration:.4,ease:[.6,-.05,.01,.99]},opacity:{duration:.2}}}},E={open:{rotate:180},closed:{rotate:0}},R=(T,D,_=null,O)=>{const V=i[O];return C.jsxs(Km,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},variants:f,children:[C.jsxs(Ty,{onClick:()=>l(O),whileHover:{scale:1.01},whileTap:{scale:.99},children:[C.jsx(Gm,{children:T}),C.jsx(_P,{variants:E,animate:V?"open":"closed",transition:{duration:.3,ease:[.6,-.05,.01,.99]},children:C.jsx(Kx,{})})]}),C.jsx(kc,{initial:!1,children:V&&C.jsx(IP,{initial:"closed",animate:"open",exit:"closed",variants:x,children:C.jsxs(OP,{children:[_&&C.jsx(VP,{as:fe.p,variants:f,children:_}),D.map((W,$)=>C.jsxs(zP,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-30px"},custom:$,children:[C.jsxs(NP,{children:[C.jsx($P,{children:W.name}),C.jsxs(FP,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!0},custom:W.level,children:[W.level,"%"]})]}),C.jsx(BP,{children:C.jsx(UP,{custom:W.level,variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0}})})]},$))]})})})]})};return C.jsx(CP,{id:"about",style:{opacity:r},children:C.jsxs(PP,{children:[C.jsx(TP,{variants:h,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:"About Me"}),C.jsx(EP,{variants:p,initial:"hidden",whileInView:"visible",viewport:{once:!0}}),C.jsxs(bP,{as:fe.div,variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[C.jsxs(AP,{children:[C.jsxs(jP,{variants:f,whileHover:{scale:1.02,transition:{duration:.3}},children:[C.jsx("p",{children:"Hey there, thanks for checking out my portfolio!"}),C.jsx("p",{children:"Now that you are here, let me tell you a little bit about me. I am a student of computer science, and I am currently trying to break into the tech industry. I am doing so by thoroughly learning about databases, backend development (mainly using python FastAPI), as well as grasping the foundations of networking and configuration. I am taking CCNA prep courses in order to achieve it."}),C.jsx("p",{children:"As a lifelong learner, I like to be proactive, and spend as much time as possible on self improvement and skills acquisition. I mostly find myself enjoying my time tinkering with databases and the ways to optimize queries, learning in-depth about distributed systems, as well as trying to constantly improve my grades."}),C.jsx("p",{children:"Currently I am working on my thesis which focuses on building a real-time study-group event platform. I'm developing a FastAPI backend with clean models, proper indexing, and reliable state handling, and a React frontend that supports real-time chat through WebSockets. I use a vector-clock system to keep message ordering consistent even when clients lag or reconnect. The project covers event scheduling, role management, caching, and timezone correctness. I treat it like a production system, not a school assignment, to show I can design and ship a full-stack app end to end."})]}),C.jsxs(RP,{variants:f,whileHover:{scale:1.02,transition:{duration:.3}},children:[C.jsx(LP,{children:"What I'm Looking For"}),C.jsx(MP,{children:"I'm searching for internship / junior opportunities to work on challenging projects and collaborate with talented teams. May it be a development role, system design, or problem-solving, I'm ready to bring my skills to the table!"})]}),C.jsxs(Km,{as:fe.div,variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},children:[C.jsx(Gm,{as:fe.h3,variants:f,children:"Soft Skills"}),C.jsx(WP,{children:XP.map((T,D)=>C.jsx(HP,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!0},whileHover:"hover",whileTap:{scale:.95},custom:D,children:T},D))})]})]}),C.jsxs(DP,{variants:f,children:[R("Programming Languages",KP,"Percentage represents knowledge depth and practical experience level.","programming"),R("Frameworks & Libraries",GP,null,"frameworks"),R("Databases & Systems",YP,null,"databases"),R("Development Tools",QP,null,"devTools")]})]})]})})},JP=I.section`
  padding: 4rem 2rem;
  background-color: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  min-height: 50vh;
  position: relative;
  width: 100%;
  display: block;
`,ZP=I.div`
  max-width: 1000px;
  margin: 0 auto;
`,eT=I(fe.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${({theme:e})=>e.colors.text};

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`,tT=I.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({theme:e})=>e.colors.accent}, transparent);
  width: 100px;
  margin: 0.75rem auto 2.5rem;
`,nT=I.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, ${({theme:e})=>e.colors.accent}, ${({theme:e})=>e.colors.accentHover}, transparent);
  }

  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`,rT=I(fe.div)`
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
    background: ${({theme:e})=>e.colors.accent};
    border: 3px solid ${({theme:e})=>e.colors.background};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.accent};
  }

  @media (min-width: 768px) {
    padding-left: 2.5rem;
    
    &::before {
      left: -2.25rem;
    }
  }
`,iT=I.div`
  background: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
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
    background: ${({theme:e})=>e.colors.accent};
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
    transform: translateX(5px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);

    &::before {
      transform: scaleY(1);
    }
  }
`,oT=I.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,sT=I.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({theme:e})=>e.colors.accent};
  }
`,aT=I.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.accent};
  margin: 0;
`,lT=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ym=I.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.9rem;
  }
`,uT=I.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`,cT=I.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,dT=I.li`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({theme:e})=>e.colors.accent};
    font-size: 1rem;
  }
`,fT=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,pT=I.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: ${({theme:e})=>e.colors.accent}15;
  color: ${({theme:e})=>e.colors.accent};
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.accent}30;
`,hT=[{title:"Object-Oriented Programming Instructor",company:"Eötvös Loránd Tudományegyetem",location:"Budapest, Hungary",period:"2025 - Present",description:"Teaching Java OOP to undergraduates (labs + lectures).",responsibilities:[" Explaining core concepts: encapsulation, inheritance, polymorphism, interfaces"," Designing weekly assignments + practical coding exercises"," Mentoring students on clean code, debugging, and problem-solving"," Coordinating with the department to ensure course quality and academic standards"," Grading students on Neptun platform."],technologies:["React","Python","FastAPI","JavaScript","SQL","Git"]},{title:"Web Development Intern",company:"LimeLight",location:"Oslo, Norway",period:"2025, Sep - 2025, Dec",description:" Worked on frontend features using React.",responsibilities:[" Built reusable components, handled state management, and integrated REST APIs."," Fixed UI bugs, improved page load times, and refactored legacy code into cleaner, modular structures."," Shipped features under short deadlines without breaking existing pages."],technologies:["Java","Python","C","C#","Algorithms","Data Structures"]}],mT=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},r={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.5,ease:[.6,-.05,.01,.99]}}};return C.jsx(JP,{id:"experience",children:C.jsxs(ZP,{children:[C.jsx(eT,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Experience"}),C.jsx(tT,{}),C.jsx(nT,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:hT.map((i,s)=>C.jsx(rT,{variants:r,children:C.jsxs(iT,{children:[C.jsx(oT,{children:C.jsxs("div",{children:[C.jsxs(sT,{children:[C.jsx(Wx,{}),i.title]}),C.jsx(aT,{children:i.company})]})}),C.jsxs(lT,{children:[C.jsxs(Ym,{children:[C.jsx(Hx,{}),i.period]}),C.jsxs(Ym,{children:[C.jsx(qx,{}),i.location]})]}),C.jsx(uT,{children:i.description}),C.jsx(cT,{children:i.responsibilities.map((l,c)=>C.jsx(dT,{children:l},c))}),C.jsx(fT,{children:i.technologies.map((l,c)=>C.jsx(pT,{children:l},c))})]})},s))})]})})},gT=I.section`
  padding: 3rem 2rem;
  background-color: ${({theme:e})=>e.colors.backgroundSecondary};
  color: ${({theme:e})=>e.colors.text};
  min-height: 100vh;
`,yT=I.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`,vT=I(fe.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`,xT=I(fe.p)`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,wT=I.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({theme:e})=>e.colors.accent}, transparent);
  width: 100px;
  margin: 1rem auto 3rem;
`,Qm=I(fe.div)`
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
`,dc=I(fe.div)`
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
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow:
      0 12px 28px rgba(0,0,0,0.45),
      0 22px 50px rgba(0,0,0,0.55);
  }
`,Xm=I.div`
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
    background: url('${e=>e.imageUrl||""}') center/cover;
    opacity: 1;
    transition: transform 0.4s ease;
  }

  /* smooth zoom on hover */
  ${dc}:hover &::before {
    transform: scale(1.08);
  }
`;I.div`
  font-size: 3rem;
  color: ${({theme:e})=>e.colors.accent};
  opacity: 0.5;
`;const qm=I.div`
  padding: 1.5rem;
`,Jm=I.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({theme:e})=>e.colors.text};
`,Zm=I.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Mu=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Hi=I.span`
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  background: ${({theme:e})=>e.colors.accent}15;
  color: ${({theme:e})=>e.colors.accent};
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.accent}30;
`;I.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;I.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`;const eg=I.button`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.accent};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.background};
  }
`,ST=I(fe.div)`
  position: fixed;
  inset: 0;
  background: ${({theme:e})=>e.colors.overlay};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(4px);
`,kT=I(fe.div)`
  background: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({theme:e})=>e.shadows.modal};
`,CT=I.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text};
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
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.background};
    border-color: ${({theme:e})=>e.colors.accent};
  }
`,PT=I.div`
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
    background: url('${e=>e.imageUrl||""}') center/cover;
    opacity: ${e=>e.imageUrl?.4:0};
  }
`,TT=I.div`
  padding: 2rem;
`,ET=I.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text};
`,bT=I.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`,AT=I.div`
  margin-bottom: 2rem;
`,jT=I.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text};
`,RT=I.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Ey=I.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.background};
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
  }
`,LT=I(Ey)`
  background: transparent;
  border: 2px solid ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.accent};

  &:hover {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.background};
  }
`,MT=[{id:1,title:"PeerPrep",description:"PeerPrep is a full-stack study-group platform built with FastAPI on the backend and React on the frontend. It lets users create and join study events, chat in real time, and improve their event descriptions and cover images with integrated AI. The system uses WebSockets for messaging and applies vector clock synchronization to keep messages in causal order across clients. It includes JWT authentication with Argon2 hashing, an XP and streak-based gamification engine, and a responsive interface built with TailwindCSS. Performance is improved with caching, lazy loading, optimistic updates, and GZip compression. The backend uses SQLModel with a normalized SQLite schema and follows a modular service-based architecture. The project demonstrates skills in backend engineering with FastAPI, frontend development with React, real-time communication, distributed system concepts, OpenAI API integration, authentication and security, API design, caching strategies, and production-grade error handling.",longDescription:"PeerPrep is a full-stack study-group platform built with FastAPI on the backend and React on the frontend. It lets users create and join study events, chat in real time, and improve their event descriptions and cover images with integrated AI. The system uses WebSockets for messaging and applies vector clock synchronization to keep messages in causal order across clients. It includes JWT authentication with Argon2 hashing, an XP and streak-based gamification engine, and a responsive interface built with TailwindCSS. Performance is improved with caching, lazy loading, optimistic updates, and GZip compression. The backend uses SQLModel with a normalized SQLite schema and follows a modular service-based architecture. The project demonstrates skills in backend engineering with FastAPI, frontend development with React, real-time communication, distributed system concepts, OpenAI API integration, authentication and security, API design, caching strategies, and production-grade error handling.",repoLink:"https://github.com/khayrullo-isomiddinov/PeerPrep",liveLink:"https://github.com/khayrullo-isomiddinov/PeerPrep",techStack:["FastAPI","SQLModel","SQLite","WebSockets","JWT Auth","React 19","WebSockets with vector-clock synchronization","OpenAI API","CORS rules"],imageUrl:new URL("/assets/peerprep-KJj7ipUP.png",import.meta.url).href},{id:2,title:"Polaris LMS",description:"Learning Management System (LMS) is a full-stack web application built with Laravel that handles course and assignment management for teachers and students. Teachers can create subjects, add assignments with deadlines and point values, and grade student submissions with feedback. Students can enroll in subjects, view assignments, and submit their work. The system includes authentication, profile management, and role-based dashboards. The interface is responsive and styled with Tailwind CSS. It uses Laravel 12, PHP 8.2+, Laravel Breeze, SQLite, Blade, and Tailwind. The project demonstrates full-stack PHP development, database modeling with Eloquent ORM, REST routing, role-based access control, form validation, and secure authentication.",longDescription:"Learning Management System (LMS) is a full-stack web application built with Laravel that handles course and assignment management for teachers and students. Teachers can create subjects, add assignments with deadlines and point values, and grade student submissions with feedback. Students can enroll in subjects, view assignments, and submit their work. The system includes authentication, profile management, and role-based dashboards. The project demonstrates full-stack PHP development, database modeling with Eloquent ORM, REST routing, role-based access control, form validation, and secure authentication.",repoLink:"https://github.com/khayrullo-isomiddinov/polarisLMS",liveLink:"https://github.com/khayrullo-isomiddinov/polarisLMS",techStack:["Laravel 12","PHP 8","Blade Template","SQLite","MVC Architecture","Composer"],imageUrl:new URL("/assets/polaris-DChxeNmz.png",import.meta.url).href},{id:3,title:"Booklovers-Hub",description:"Booklovers-Hub is a web application built with Laravel and Blade templating that offers a social platform for readers. Users can create accounts, follow or unfollow other users, share books, leave reviews, and build their own virtual book collections. The system supports user profiles, book records, reviews, social connections, and book sharing — enabling a community-driven reading experience. Built with PHP and Laravel, it uses relational database architecture, secure authentication and authorization, and a responsive UI for smooth user interaction. The project demonstrates full-stack web development, database modeling, user-management logic, social-feature implementation, and skill with Laravel ecosystem.",longDescription:"Booklovers-Hub is a web application built with Laravel and Blade templating that offers a social platform for readers. Users can create accounts, follow or unfollow other users, share books, leave reviews, and build their own virtual book collections. The system supports user profiles, book records, reviews, social connections, and book sharing — enabling a community-driven reading experience. Built with PHP and Laravel, it uses relational database architecture, secure authentication and authorization, and a responsive UI for smooth user interaction. The project demonstrates full-stack web development, database modeling, user-management logic, social-feature implementation, and skill with Laravel ecosystem.",repoLink:"https://github.com/khayrullo-isomiddinov/booklovers-hub",liveLink:"https://github.com/khayrullo-isomiddinov/booklovers-hub",techStack:["PHP","MySQL","HTML","CSS","JavaScript"],imageUrl:new URL("/assets/books-BNoMqmgj.jpeg",import.meta.url).href},{id:4,title:"Stargate Game",description:"An engaging, multiplayer grid-based game designed to enhance my web development skills, where players embark on a strategic quest to locate and collect scattered debris fragments.",longDescription:"Stargate Game is a multiplayer web-based game that combines strategy and exploration. Players navigate through a grid-based world, searching for debris fragments while competing with other players. The game features real-time multiplayer functionality, dynamic game mechanics, and an engaging user interface. Built to showcase advanced web development skills, this project demonstrates proficiency in frontend frameworks, real-time communication, and game development principles.",repoLink:"https://github.com/khayrullo-isomiddinov/Stargate-Game",liveLink:"https://6797fbbf6daef38935426e97--gentle-frangollo-fbc645.netlify.app/",techStack:["HTML"," CSS","JavaScript"],imageUrl:new URL("/assets/gate-DBrqDCSW.jpeg",import.meta.url).href},{id:5,title:"Comment Remover",description:"A VSCode extension to remove comments. Supports JavaScript, TypeScript, Python, C, C++, PHP, and Java. Streamline your code cleanup process with this powerful developer tool.",longDescription:"Comment Remover is a Visual Studio Code extension designed to help developers quickly clean up their code by removing comments. The extension supports multiple programming languages including JavaScript, TypeScript, Python, C, C++, PHP, and Java. It features intelligent comment detection, batch processing capabilities, and customizable options for different comment styles. This tool has been downloaded by thousands of developers and has received positive feedback for its reliability and ease of use.",repoLink:"https://github.com/khayrullo-isomiddinov/comment-remover-vscode-ext",liveLink:"https://marketplace.visualstudio.com/items?itemName=KhayrulloIsomiddinov.khayrullo-comment-remover&ssr=false#review-details",techStack:["TypeScript","VSCode API","Node.js"],imageUrl:new URL("/assets/vscode-BpL3paWo.png",import.meta.url).href},{id:6,title:"MoodLens: AI Therapist",description:"MoodLens is an AI-powered augmented reality (AR) application designed to analyze emotional states and enhance well-being. Using facial recognition, voice analysis, and interactive AR therapy, MoodLens provides real-time insights and tools for emotional balance.",longDescription:"MoodLens is an AI-powered augmented reality (AR) application designed to analyze emotional states and enhance well-being. Using facial recognition, voice analysis, and interactive AR therapy, MoodLens provides real-time insights and tools for emotional balance.",repoLink:"https://github.com/khayrullo-isomiddinov/mood-lens",liveLink:"https://khayrullo-isomiddinov.github.io/mood-lens/",techStack:["React","Node.js"],imageUrl:new URL("/assets/moodlens-7-5bzlVi.png",import.meta.url).href}],DT=I.button`
  padding: 0.6rem 1.2rem;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.accent};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 2rem auto 0;
  display: block;
  width: fit-content;

  &:hover {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.background};
  }
`,_T=[{id:101,title:"Knights Game",description:"A Java Swing application implementing a “Knight Tournament” strategy game on an NxN grid. Two white and two black knights move in legal chess knight patterns, painting tiles with their color. The goal is to form four connected painted tiles in a line. Includes full turn-based logic, win detection, move validation, and a resizable GUI with interactive board controls.",longDescription:"A Java Swing application implementing a “Knight Tournament” strategy game on an NxN grid. Two white and two black knights move in legal chess knight patterns, painting tiles with their color. The goal is to form four connected painted tiles in a line. Includes full turn-based logic, win detection, move validation, and a resizable GUI with interactive board controls.",repoLink:"https://github.com/khayrullo-isomiddinov",liveLink:"#",techStack:["Java OOP","Swing GUI programming","Event-driven design","State management"],imageUrl:new URL("/assets/java-BjVkgpIc.png",import.meta.url).href}],IT=()=>{const[e,r]=G.useState(null),[i,s]=G.useState(!1),l=m=>{r(m),document.body.style.overflow="hidden"},c=()=>{r(null),document.body.style.overflow="unset"},f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.6,-.05,.01,.99]}}},p={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.3,ease:[.6,-.05,.01,.99]}},exit:{opacity:0,scale:.9,transition:{duration:.2}}};return C.jsxs(gT,{id:"projects",children:[C.jsxs(yT,{children:[C.jsx(vT,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Featured Projects"}),C.jsx(xT,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Here are some of my recent projects. Click on any project to learn more."}),C.jsx(wT,{}),C.jsx(Qm,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"0px"},children:MT.map(m=>C.jsxs(dc,{variants:h,onClick:()=>l(m),whileHover:{scale:1.02},whileTap:{scale:.98},children:[C.jsx(Xm,{imageUrl:m.imageUrl}),C.jsxs(qm,{children:[C.jsx(Jm,{children:m.title}),C.jsx(Zm,{children:m.description}),C.jsxs(Mu,{children:[m.techStack.slice(0,3).map((y,v)=>C.jsx(Hi,{children:y},v)),m.techStack.length>3&&C.jsxs(Hi,{children:["+",m.techStack.length-3," more"]})]}),C.jsx(eg,{children:"View Details"})]})]},m.id))}),C.jsx(DT,{onClick:()=>s(!i),children:i?"Hide Minor Projects":"View Minor Projects"}),i&&C.jsx(Qm,{variants:f,initial:"hidden",whileInView:"visible",viewport:{once:!0},style:{marginTop:"2rem"},children:_T.map(m=>C.jsxs(dc,{variants:h,onClick:()=>l(m),whileHover:{scale:1.02},whileTap:{scale:.98},children:[C.jsx(Xm,{imageUrl:m.imageUrl}),C.jsxs(qm,{children:[C.jsx(Jm,{children:m.title}),C.jsx(Zm,{children:m.description}),C.jsxs(Mu,{children:[m.techStack.slice(0,3).map((y,v)=>C.jsx(Hi,{children:y},v)),m.techStack.length>3&&C.jsxs(Hi,{children:["+",m.techStack.length-3," more"]})]}),C.jsx(eg,{children:"View Details"})]})]},m.id))})]}),C.jsx(kc,{children:e&&C.jsx(ST,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:c,children:C.jsxs(kT,{variants:p,initial:"hidden",animate:"visible",exit:"exit",onClick:m=>m.stopPropagation(),children:[C.jsx(CT,{onClick:c,children:C.jsx(Kg,{size:20})}),C.jsx(PT,{imageUrl:e.imageUrl}),C.jsxs(TT,{children:[C.jsx(ET,{children:e.title}),C.jsx(bT,{children:e.longDescription}),C.jsxs(AT,{children:[C.jsx(jT,{children:"Technologies Used"}),C.jsx(Mu,{children:e.techStack.map((m,y)=>C.jsx(Hi,{children:m},y))})]}),C.jsxs(RT,{children:[e.liveLink&&C.jsxs(Ey,{href:e.liveLink,target:"_blank",rel:"noreferrer",children:[C.jsx(Yx,{size:18}),"View Live"]}),e.repoLink&&C.jsxs(LT,{href:e.repoLink,target:"_blank",rel:"noreferrer",children:[C.jsx(Qx,{size:18}),"View Code"]})]})]})]})})})]})};var Du={exports:{}},_u,tg;function OT(){if(tg)return _u;tg=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return _u=e,_u}var Iu,ng;function VT(){if(ng)return Iu;ng=1;var e=OT();function r(){}function i(){}return i.resetWarningCache=r,Iu=function(){function s(f,h,p,m,y,v){if(v!==e){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}s.isRequired=s;function l(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:r};return c.PropTypes=c,c},Iu}var rg;function zT(){return rg||(rg=1,Du.exports=VT()()),Du.exports}var NT=zT();const $e=pc(NT);function ig(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,s)}return i}function og(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?ig(Object(i),!0).forEach(function(s){by(e,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ig(Object(i)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))})}return e}function Bs(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Bs=function(r){return typeof r}:Bs=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Bs(e)}function by(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function $T(e,r){return FT(e)||BT(e,r)||UT(e,r)||WT()}function FT(e){if(Array.isArray(e))return e}function BT(e,r){var i=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(i!=null){var s=[],l=!0,c=!1,f,h;try{for(i=i.call(e);!(l=(f=i.next()).done)&&(s.push(f.value),!(r&&s.length===r));l=!0);}catch(p){c=!0,h=p}finally{try{!l&&i.return!=null&&i.return()}finally{if(c)throw h}}return s}}function UT(e,r){if(e){if(typeof e=="string")return sg(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return sg(e,r)}}function sg(e,r){(r==null||r>e.length)&&(r=e.length);for(var i=0,s=new Array(r);i<r;i++)s[i]=e[i];return s}function WT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var HT=function(r){var i=ge.useRef(r);return ge.useEffect(function(){i.current=r},[r]),i.current},ta=function(r){return r!==null&&Bs(r)==="object"},ag="[object Object]",KT=function e(r,i){if(!ta(r)||!ta(i))return r===i;var s=Array.isArray(r),l=Array.isArray(i);if(s!==l)return!1;var c=Object.prototype.toString.call(r)===ag,f=Object.prototype.toString.call(i)===ag;if(c!==f)return!1;if(!c&&!s)return r===i;var h=Object.keys(r),p=Object.keys(i);if(h.length!==p.length)return!1;for(var m={},y=0;y<h.length;y+=1)m[h[y]]=!0;for(var v=0;v<p.length;v+=1)m[p[v]]=!0;var x=Object.keys(m);if(x.length!==h.length)return!1;var E=r,R=i,T=function(_){return e(E[_],R[_])};return x.every(T)},GT=function(r,i,s){return ta(r)?Object.keys(r).reduce(function(l,c){var f=!ta(i)||!KT(r[c],i[c]);return s.includes(c)?(f&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),l):f?og(og({},l||{}),{},by({},c,r[c])):l},null):null},Ay=ge.createContext(null);Ay.displayName="ElementsContext";var YT=function(r,i){if(!r)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(i," in an <Elements> provider."));return r},jy=ge.createContext(null);jy.displayName="CartElementContext";var QT=function(r,i){if(!r)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(i," in an <Elements> provider."));return r};$e.any,$e.object;var lg=function(r){var i=ge.useContext(Ay);return YT(i,r)},ug=function(r){var i=ge.useContext(jy);return QT(i,r)};$e.func.isRequired;var mt=function(r,i,s){var l=!!s,c=ge.useRef(s);ge.useEffect(function(){c.current=s},[s]),ge.useEffect(function(){if(!l||!r)return function(){};var f=function(){c.current&&c.current.apply(c,arguments)};return r.on(i,f),function(){r.off(i,f)}},[l,i,r,c])},XT=function(r){return r.charAt(0).toUpperCase()+r.slice(1)},Ke=function(r,i){var s="".concat(XT(r),"Element"),l=function(p){var m=p.id,y=p.className,v=p.options,x=v===void 0?{}:v,E=p.onBlur,R=p.onFocus,T=p.onReady,D=p.onChange,_=p.onEscape,O=p.onClick,V=p.onLoadError,W=p.onLoaderStart,$=p.onNetworksChange,U=p.onCheckout,K=p.onLineItemClick,J=p.onConfirm,ve=p.onCancel,Ce=p.onShippingAddressChange,Be=p.onShippingRateChange,Ye=lg("mounts <".concat(s,">")),Ee=Ye.elements,Ue=ge.useState(null),qe=$T(Ue,2),ye=qe[0],ce=qe[1],B=ge.useRef(null),Q=ge.useRef(null),j=ug("mounts <".concat(s,">")),S=j.setCart,L=j.setCartState;mt(ye,"blur",E),mt(ye,"focus",R),mt(ye,"escape",_),mt(ye,"click",O),mt(ye,"loaderror",V),mt(ye,"loaderstart",W),mt(ye,"networkschange",$),mt(ye,"lineitemclick",K),mt(ye,"confirm",J),mt(ye,"cancel",ve),mt(ye,"shippingaddresschange",Ce),mt(ye,"shippingratechange",Be);var Y;r==="cart"?Y=function(le){L(le),T&&T(le)}:T&&(r==="payButton"?Y=T:Y=function(){T(ye)}),mt(ye,"ready",Y);var ee=r==="cart"?function(re){L(re),D&&D(re)}:D;mt(ye,"change",ee);var ie=r==="cart"?function(re){L(re),U&&U(re)}:U;mt(ye,"checkout",ie),ge.useLayoutEffect(function(){if(B.current===null&&Ee&&Q.current!==null){var re=Ee.create(r,x);r==="cart"&&S&&S(re),B.current=re,ce(re),re.mount(Q.current)}},[Ee,x,S]);var ae=HT(x);return ge.useEffect(function(){if(B.current){var re=GT(x,ae,["paymentRequest"]);re&&B.current.update(re)}},[x,ae]),ge.useLayoutEffect(function(){return function(){B.current&&(B.current.destroy(),B.current=null)}},[]),ge.createElement("div",{id:m,className:y,ref:Q})},c=function(p){lg("mounts <".concat(s,">")),ug("mounts <".concat(s,">"));var m=p.id,y=p.className;return ge.createElement("div",{id:m,className:y})},f=i?c:l;return f.propTypes={id:$e.string,className:$e.string,onChange:$e.func,onBlur:$e.func,onFocus:$e.func,onReady:$e.func,onEscape:$e.func,onClick:$e.func,onLoadError:$e.func,onLoaderStart:$e.func,onNetworksChange:$e.func,onCheckout:$e.func,onLineItemClick:$e.func,onConfirm:$e.func,onCancel:$e.func,onShippingAddressChange:$e.func,onShippingRateChange:$e.func,options:$e.object},f.displayName=s,f.__elementType=r,f},Ge=typeof window>"u";Ke("auBankAccount",Ge);var qT=Ke("card",Ge);Ke("cardNumber",Ge);Ke("cardExpiry",Ge);Ke("cardCvc",Ge);Ke("fpxBank",Ge);Ke("iban",Ge);Ke("idealBank",Ge);Ke("p24Bank",Ge);Ke("epsBank",Ge);Ke("payment",Ge);Ke("payButton",Ge);Ke("paymentRequestButton",Ge);Ke("linkAuthentication",Ge);Ke("address",Ge);Ke("shippingAddress",Ge);Ke("cart",Ge);Ke("paymentMethodMessaging",Ge);Ke("affirmMessage",Ge);Ke("afterpayClearpayMessage",Ge);var Ou,cg;function JT(){if(cg)return Ou;cg=1;var e=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,l=(j,S)=>{for(var L in S)e(j,L,{get:S[L],enumerable:!0})},c=(j,S,L,Y)=>{if(typeof S=="object"||typeof S=="function")for(let ee of i(S))!s.call(j,ee)&&ee!==L&&e(j,ee,{get:()=>S[ee],enumerable:!(Y=r(S,ee))||Y.enumerable});return j},f=j=>c(e({},"__esModule",{value:!0}),j),h=(j,S,L)=>new Promise((Y,ee)=>{var ie=le=>{try{re(L.next(le))}catch(he){ee(he)}},ae=le=>{try{re(L.throw(le))}catch(he){ee(he)}},re=le=>le.done?Y(le.value):Promise.resolve(le.value).then(ie,ae);re((L=L.apply(j,S)).next())}),p={};l(p,{SubmissionError:()=>W,appendExtraData:()=>Ee,createClient:()=>ce,getDefaultClient:()=>B,isSubmissionError:()=>V}),Ou=f(p);var m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function v(j){j=String(j);for(var S,L,Y,ee,ie="",ae=0,re=j.length%3;ae<j.length;){if((L=j.charCodeAt(ae++))>255||(Y=j.charCodeAt(ae++))>255||(ee=j.charCodeAt(ae++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");S=L<<16|Y<<8|ee,ie+=m.charAt(S>>18&63)+m.charAt(S>>12&63)+m.charAt(S>>6&63)+m.charAt(S&63)}return re?ie.slice(0,re-3)+"===".substring(re):ie}function x(j){if(j=String(j).replace(/[\t\n\f\r ]+/g,""),!y.test(j))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");j+="==".slice(2-(j.length&3));for(var S,L="",Y,ee,ie=0;ie<j.length;)S=m.indexOf(j.charAt(ie++))<<18|m.indexOf(j.charAt(ie++))<<12|(Y=m.indexOf(j.charAt(ie++)))<<6|(ee=m.indexOf(j.charAt(ie++))),L+=Y===64?String.fromCharCode(S>>16&255):ee===64?String.fromCharCode(S>>16&255,S>>8&255):String.fromCharCode(S>>16&255,S>>8&255,S&255);return L}var E=()=>navigator.webdriver||!!document.documentElement.getAttribute(x("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,R=class{constructor(){this.loadedAt=Date.now(),this.webdriver=E()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},T=class{constructor(j){this.kind="success",this.next=j.next}};function D(j){return"next"in j&&typeof j.next=="string"}var _=class{constructor(j,S){this.paymentIntentClientSecret=j,this.resubmitKey=S,this.kind="stripePluginPending"}};function O(j){if("stripe"in j&&"resubmitKey"in j&&typeof j.resubmitKey=="string"){let{stripe:S}=j;return typeof S=="object"&&S!=null&&"paymentIntentClientSecret"in S&&typeof S.paymentIntentClientSecret=="string"}return!1}function V(j){return j.kind==="error"}var W=class{constructor(...j){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var S;for(let L of j){if(!L.field){this.formErrors.push({code:L.code&&$(L.code)?L.code:"UNSPECIFIED",message:L.message});continue}let Y=(S=this.fieldErrors.get(L.field))!=null?S:[];Y.push({code:L.code&&K(L.code)?L.code:"UNSPECIFIED",message:L.message}),this.fieldErrors.set(L.field,Y)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(j){var S;return(S=this.fieldErrors.get(j))!=null?S:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function $(j){return j in U}var U={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function K(j){return j in J}var J={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function ve(j){return"errors"in j&&Array.isArray(j.errors)&&j.errors.every(S=>typeof S.message=="string")||"error"in j&&typeof j.error=="string"}var Ce="3.0.1",Be=j=>v(JSON.stringify(j)),Ye=j=>{let S=`@formspree/core@${Ce}`;return j?`${j} ${S}`:S};function Ee(j,S,L){j instanceof FormData?j.append(S,L):j[S]=L}function Ue(j){return j!==null&&typeof j=="object"}var qe=class{constructor(j={}){this.project=j.project,this.stripe=j.stripe,typeof window<"u"&&(this.session=new R)}submitForm(j,S){return h(this,arguments,function*(L,Y,ee={}){let ie=ee.endpoint||"https://formspree.io",ae=this.project?`${ie}/p/${this.project}/f/${L}`:`${ie}/f/${L}`,re={Accept:"application/json","Formspree-Client":Ye(ee.clientName)};this.session&&(re["Formspree-Session-Data"]=Be(this.session.data())),Y instanceof FormData||(re["Content-Type"]="application/json");function le(Le){return h(this,null,function*(){try{let Se=yield(yield fetch(ae,{method:"POST",mode:"cors",body:Le instanceof FormData?Le:JSON.stringify(Le),headers:re})).json();if(Ue(Se)){if(ve(Se))return Array.isArray(Se.errors)?new W(...Se.errors):new W({message:Se.error});if(O(Se))return new _(Se.stripe.paymentIntentClientSecret,Se.resubmitKey);if(D(Se))return new T({next:Se.next})}return new W({message:"Unexpected response format"})}catch(Se){let st=Se instanceof Error?Se.message:`Unknown error while posting to Formspree: ${JSON.stringify(Se)}`;return new W({message:st})}})}if(this.stripe&&ee.createPaymentMethod){let Le=yield ee.createPaymentMethod();if(Le.error)return new W({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});Ee(Y,"paymentMethod",Le.paymentMethod.id);let Se=yield le(Y);if(Se.kind==="error")return Se;if(Se.kind==="stripePluginPending"){let st=yield this.stripe.handleCardAction(Se.paymentIntentClientSecret);if(st.error)return new W({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});Y instanceof FormData?Y.delete("paymentMethod"):delete Y.paymentMethod,Ee(Y,"paymentIntent",st.paymentIntent.id),Ee(Y,"resubmitKey",Se.resubmitKey);let Bn=yield le(Y);return ye(Bn),Bn}return Se}let he=yield le(Y);return ye(he),he})}};function ye(j){let{kind:S}=j;if(S!=="success"&&S!=="error")throw new Error(`Unexpected submission result (kind: ${S})`)}var ce=j=>new qe(j),B=()=>(Q||(Q=ce()),Q),Q;return Ou}var fc=JT(),Ls={},dg;function ZT(){if(dg)return Ls;dg=1,Object.defineProperty(Ls,"__esModule",{value:!0});function e(R){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(T){return typeof T}:e=function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},e(R)}var r="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,s="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=function(){for(var T=document.querySelectorAll('script[src^="'.concat(r,'"]')),D=0;D<T.length;D++){var _=T[D];if(i.test(_.src))return _}return null},c=function(T){var D=T&&!T.advancedFraudSignals?"?advancedFraudSignals=false":"",_=document.createElement("script");_.src="".concat(r).concat(D);var O=document.head||document.body;if(!O)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return O.appendChild(_),_},f=function(T,D){!T||!T._registerWrapper||T._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:D})},h=null,p=function(T){return h!==null||(h=new Promise(function(D,_){if(typeof window>"u"||typeof document>"u"){D(null);return}if(window.Stripe&&T&&console.warn(s),window.Stripe){D(window.Stripe);return}try{var O=l();O&&T?console.warn(s):O||(O=c(T)),O.addEventListener("load",function(){window.Stripe?D(window.Stripe):_(new Error("Stripe.js not available"))}),O.addEventListener("error",function(){_(new Error("Failed to load Stripe.js"))})}catch(V){_(V);return}})),h},m=function(T,D,_){if(T===null)return null;var O=T.apply(void 0,D);return f(O,_),O},y=function(T){var D=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(T),`
`);if(T===null||e(T)!=="object")throw new Error(D);if(Object.keys(T).length===1&&typeof T.advancedFraudSignals=="boolean")return T;throw new Error(D)},v,x=!1,E=function(){for(var T=arguments.length,D=new Array(T),_=0;_<T;_++)D[_]=arguments[_];x=!0;var O=Date.now();return p(v).then(function(V){return m(V,D,O)})};return E.setLoadParameters=function(R){if(x&&v){var T=y(R),D=Object.keys(T),_=D.reduce(function(O,V){var W;return O&&R[V]===((W=v)===null||W===void 0?void 0:W[V])},!0);if(_)return}if(x)throw new Error("You cannot change load parameters after calling loadStripe");v=y(R)},Ls.loadStripe=E,Ls}var Vu,fg;function e5(){return fg||(fg=1,Vu=ZT()),Vu}e5();function pg(e){let{prefix:r,field:i,errors:s,...l}=e;if(s==null)return null;let c=i?s.getFieldErrors(i):s.getFormErrors();return c.length===0?null:ge.createElement("div",{...l},r?`${r} `:null,c.map(f=>f.message).join(", "))}var t5=ge.createContext(null);function n5(){return G.useContext(t5)??{client:fc.getDefaultClient()}}var r5="2.5.1",i5=`@formspree/react@${r5}`;function o5(e,r={}){let i=n5(),{client:s=i.client,extraData:l,onError:c,onSuccess:f,origin:h}=r,{stripe:p}=s,m=G.useMemo(()=>p==null?void 0:p.elements().getElement(qT),[p]);return async function(y){let v=s5(y)?a5(y):y;if(typeof l=="object")for(let[E,R]of Object.entries(l)){let T;typeof R=="function"?T=await R():T=R,T!==void 0&&fc.appendExtraData(v,E,T)}let x=await s.submitForm(e,v,{endpoint:h,clientName:i5,createPaymentMethod:p&&m?()=>p.createPaymentMethod({type:"card",card:m,billing_details:l5(v)}):void 0});fc.isSubmissionError(x)?c==null||c(x):f==null||f(x)}}function s5(e){return"preventDefault"in e&&typeof e.preventDefault=="function"}function a5(e){e.preventDefault();let r=e.currentTarget;if(r.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(r)}function l5(e){let r={address:u5(e)};for(let i of["name","email","phone"]){let s=e instanceof FormData?e.get(i):e[i];s&&typeof s=="string"&&(r[i]=s)}return r}function u5(e){let r={};for(let[i,s]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let l=e instanceof FormData?e.get(i):e[i];l&&typeof l=="string"&&(r[s]=l)}return r}function c5(e,r={}){let[i,s]=G.useState(null),[l,c]=G.useState(null),[f,h]=G.useState(!1),[p,m]=G.useState(!1),y=o5(e,{client:r.client,extraData:r.data,onError(v){s(v),h(!1),m(!1)},onSuccess(v){s(null),c(v),h(!1),m(!0)},origin:r.endpoint});return[{errors:i,result:l,submitting:f,succeeded:p},async function(v){h(!0),await y(v)},function(){s(null),c(null),h(!1),m(!1)}]}const hg=I.section`
  scroll-margin-top: 80px;
  padding: 3rem 2rem;
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  overflow: hidden;
`,mg=I.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,d5=I(fe.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.text}, ${({theme:e})=>e.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,f5=I(fe.p)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
`,p5=I.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({theme:e})=>e.colors.accent}, transparent);
  width: 100px;
  margin: 0 auto 1.5rem;
`,h5=I(fe.form)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({theme:e})=>e.colors.cardBg};
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
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
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.accent}, ${({theme:e})=>e.colors.accentHover});
  }
`,gg=I.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  position: relative;
`,yg=I.label`
  color: ${({theme:e})=>e.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,m5=I.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.95rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.accent}15,
                0 4px 12px ${({theme:e})=>e.colors.accent}20;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
    opacity: 0.6;
  }
`,g5=I.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.3s ease;
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.accent}15,
                0 4px 12px ${({theme:e})=>e.colors.accent}20;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
    opacity: 0.6;
  }
`,y5=I(fe.button)`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.accent}, ${({theme:e})=>e.colors.accentHover});
  color: ${({theme:e})=>e.colors.background};
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
`,v5=I(fe.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
  background: ${({theme:e})=>e.colors.cardBg};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,x5=I.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.accent}, ${({theme:e})=>e.colors.accentHover});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({theme:e})=>e.colors.background};
  margin-bottom: 0.5rem;
`,w5=I.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: 0.25rem;
`,S5=I.p`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  max-width: 450px;
`;I.div`
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;const k5=()=>{const[e,r]=c5("mdkaewvz");return e.succeeded?C.jsx(hg,{id:"contact",children:C.jsx(mg,{children:C.jsxs(v5,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},children:[C.jsx(x5,{children:"✓"}),C.jsx(w5,{children:"Message Sent!"}),C.jsx(S5,{children:"I've received your message and will get back to you as soon as possible. Looking forward to connecting with you!"})]})})}):C.jsx(hg,{id:"contact",children:C.jsxs(mg,{children:[C.jsx(d5,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Get In Touch"}),C.jsx(f5,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"Whether you want to discuss a project, collaborate, or just say hello, feel free to drop a message. I'll get back to you as soon as I can!"}),C.jsx(p5,{}),C.jsxs(h5,{onSubmit:r,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[C.jsxs(gg,{children:[C.jsxs(yg,{htmlFor:"email",children:[C.jsx(Xx,{size:16}),"Email Address"]}),C.jsx(m5,{id:"email",type:"email",name:"email",placeholder:"your.email@example.com",required:!0}),C.jsx(pg,{prefix:"Email",field:"email",errors:e.errors})]}),C.jsxs(gg,{children:[C.jsxs(yg,{htmlFor:"message",children:[C.jsx(Sh,{size:16}),"Message"]}),C.jsx(g5,{id:"message",name:"message",placeholder:"Tell me about your project, idea, or just say hello...",required:!0}),C.jsx(pg,{prefix:"Message",field:"message",errors:e.errors})]}),C.jsxs(y5,{type:"submit",disabled:e.submitting,whileHover:{scale:1.02},whileTap:{scale:.98},children:[C.jsx(Sh,{size:18}),e.submitting?"Sending...":"Send Message"]})]})]})})};function C5(e){return vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function P5(e){return vt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function T5(e){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function E5(e){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}const b5=I.footer`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  color: ${({theme:e})=>e.colors.textSecondary};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({theme:e})=>e.colors.accent}40, transparent);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 2rem;
  }
`,A5=I.div`
  display: flex;
  align-items: center;
`,j5=I.div`
  display: flex;
  align-items: center;
`,R5=I.div`
  display: flex;
  align-items: center;
`,L5=I.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;
  opacity: 0.8;
`,M5=I.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({theme:e})=>e.colors.textSecondary};
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
      color: ${({theme:e})=>e.colors.accent};
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`,D5=I(fe.a)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({theme:e})=>e.colors.background};
  border: 1px solid ${({theme:e})=>e.colors.border};
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.accent};
    background: ${({theme:e})=>e.colors.accent}15;
    transform: translateY(-1px);
  }
`,_5=()=>C.jsxs(b5,{children:[C.jsx(A5,{children:C.jsxs(L5,{children:["© ",new Date().getFullYear()," Khayrullo Isomiddinov"]})}),C.jsx(j5,{children:C.jsxs(M5,{children:[C.jsx(fe.a,{href:"https://github.com/khayrullo-isomiddinov",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(P5,{})}),C.jsx(fe.a,{href:"https://www.linkedin.com/in/khayrullo-isomiddinov/",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(E5,{})}),C.jsx(fe.a,{href:"https://www.facebook.com/profile.php?id=100080260460705",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(C5,{})}),C.jsx(fe.a,{href:"https://instagram.com/khayrulloismdnv",target:"_blank",rel:"noreferrer",whileHover:{scale:1.15},whileTap:{scale:.9},children:C.jsx(T5,{})})]})}),C.jsx(R5,{children:C.jsxs(D5,{href:"/CV.pdf",download:"HarryResume.pdf",whileHover:{scale:1.05},whileTap:{scale:.96},children:[C.jsx(Gx,{size:14}),"Download CV"]})})]}),I5=()=>C.jsxs(C.Fragment,{children:[C.jsx(lP,{}),C.jsx(kP,{}),C.jsx(qP,{}),C.jsx(mT,{}),C.jsx(IT,{}),C.jsx(k5,{}),C.jsx(_5,{})]}),O5={colors:{background:"#0f0f23",backgroundSecondary:"#1a1a2e",text:"#e4e4e7",textSecondary:"#a1a1aa",accent:"#8b5cf6",accentHover:"#7c3aed",border:"#27272a",shadow:"#000000",mobileMenuBg:"rgba(15, 15, 35, 0.98)",mobileMenuText:"#e4e4e7",overlay:"rgba(0, 0, 0, 0.75)",cardBg:"#1a1a2e",cardHover:"#252538"},fontSizes:{xs:"0.8rem",sm:"1rem",md:"1.2rem",lg:"1.5rem",xl:"2rem","2xl":"3rem"},transitions:{default:"all 0.3s ease-in-out",hover:"color 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out"},shadows:{card:"0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",hover:"0 10px 15px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2)",header:"0 1px 3px rgba(0, 0, 0, 0.4)",modal:"0 25px 50px -12px rgba(0, 0, 0, 0.5)"},animations:{fadeIn:"fadeIn 0.8s ease-out forwards",glow:"glow 1.5s ease-in-out infinite",pulse:"pulse 2s infinite ease-in-out"},breakpoints:{xs:"320px",sm:"480px",md:"768px",lg:"1024px",xl:"1280px"}},V5=Ox`
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
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    scroll-behavior: smooth;
    transition: background var(--transition-speed) var(--easing), color var(--transition-speed) var(--easing);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom text selection */
  ::selection {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.background};
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 10px;
  }

  /* Global Link Styles */
  a {
    color: ${({theme:e})=>e.colors.accent};
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
    background-color: ${({theme:e})=>e.colors.accent};
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
    color: ${({theme:e})=>e.colors.text};
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
    0% { box-shadow: 0 0 5px ${({theme:e})=>e.colors.accent}; }
    50% { box-shadow: 0 0 20px ${({theme:e})=>e.colors.accent}; }
    100% { box-shadow: 0 0 5px ${({theme:e})=>e.colors.accent}; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;_1.createRoot(document.getElementById("root")).render(C.jsx(ge.StrictMode,{children:C.jsxs(Dx,{theme:O5,children:[C.jsx(V5,{}),C.jsx(I5,{})]})}));
