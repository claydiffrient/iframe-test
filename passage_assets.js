(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l,m=this||self;function aa(){}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ca(a){return Object.prototype.hasOwnProperty.call(a,r)&&a[r]||(a[r]=++da)}function ea(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(r);try{delete a[r]}catch(b){}}var r="closure_uid_"+(1E9*Math.random()>>>0),da=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ha;return v.apply(null,arguments)}
function ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function x(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function z(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;if("object"===typeof Reflect&&Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;0<=h;h--)if(g=a[h])f=(3>e?g(f):3<e?g(b,c,f):g(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function A(a,b){if("object"===typeof Reflect&&Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,b)};function ja(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{const b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}x(B,Error);B.prototype.name="CustomError";var ka=class{constructor(a,b){this.Qb=100;this.Hb=a;this.Vb=b;this.ua=0;this.ra=null}get(){let a;0<this.ua?(this.ua--,a=this.ra,this.ra=a.next,a.next=null):a=this.Hb();return a}put(a){this.Vb(a);this.ua<this.Qb&&(this.ua++,a.next=this.ra,this.ra=a)}};class la{constructor(){this.za=this.U=null}add(a,b){const c=ma.get();c.set(a,b);this.za?this.za.next=c:this.U=c;this.za=c}remove(){let a=null;this.U&&(a=this.U,this.U=this.U.next,this.U||(this.za=null),a.next=null);return a}}var ma=new ka(()=>new na,a=>a.reset());class na{constructor(){this.next=this.scope=this.Ma=null}set(a,b){this.Ma=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.Ma=null}};function oa(a,b){return Array.prototype.some.call(a,b,void 0)};var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function qa(a,b){return a<b?-1:a>b?1:0};var ra;a:{const a=m.navigator;if(a){const b=a.userAgent;if(b){ra=b;break a}}ra=""}let C=ra;function D(a){return-1!=C.indexOf(a)};function sa(a){sa[" "](a);return a}sa[" "]=aa;var ta=D("Opera"),ua=D("Trident")||D("MSIE"),va=D("Edge"),wa=D("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),xa=-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge"),ya;
a:{var za="",Aa=function(){if(wa)return/rv:([^\);]+)(\)|;)/.exec(C);if(va)return/Edge\/([\d\.]+)/.exec(C);if(ua)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(C);if(xa)return/WebKit\/(\S+)/.exec(C);if(ta)return/(?:Version)[ \/]?(\S+)/.exec(C)}();Aa&&(za=Aa?Aa[1]:"");if(ua){var Ba,Ca=m.document;Ba=Ca?Ca.documentMode:void 0;if(null!=Ba&&Ba>parseFloat(za)){ya=String(Ba);break a}}ya=za};function Da(a,b,c){const d={};for(const e in a)d[e]=b.call(c,a[e],e,a);return d}const Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fa(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<Ea.length;f++)c=Ea[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Ga(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};var Ha;
function Ia(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=Ga();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=v(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,
!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.gb;c.gb=null;e()}};return function(e){d.next={gb:e};d=d.next;b.port2.postMessage(0)}}return function(e){m.setTimeout(e,0)}};function Ja(a){m.setTimeout(()=>{throw a;},0)};function Ka(a,b){La||Ma();Na||(La(),Na=!0);Oa.add(a,b)}var La;function Ma(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);La=function(){a.then(Pa)}}else La=function(){var b=Pa;"function"!==typeof m.setImmediate||m.Window&&m.Window.prototype&&!D("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Ha||(Ha=Ia()),Ha(b)):m.setImmediate(b)}}var Na=!1,Oa=new la;function Pa(){for(var a;a=Oa.remove();){try{a.Ma.call(a.scope)}catch(b){Ja(b)}ma.put(a)}Na=!1};function E(a){this.o=F;this.A=void 0;this.O=this.B=this.i=null;this.pa=this.Ka=!1;if(a!=aa)try{var b=this;a.call(void 0,function(c){G(b,Qa,c)},function(c){G(b,H,c)})}catch(c){G(this,H,c)}}var F=0,Qa=2,H=3;function Ra(){this.next=this.context=this.S=this.ca=this.H=null;this.ma=!1}Ra.prototype.reset=function(){this.context=this.S=this.ca=this.H=null;this.ma=!1};var Sa=new ka(function(){return new Ra},function(a){a.reset()});function Ta(a,b,c){var d=Sa.get();d.ca=a;d.S=b;d.context=c;return d}
E.prototype.then=function(a,b,c){return Ua(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};E.prototype.$goog_Thenable=!0;E.prototype.cancel=function(a){if(this.o==F){var b=new Va(a);Ka(function(){Wa(this,b)},this)}};function Wa(a,b){if(a.o==F)if(a.i){var c=a.i;if(c.B){for(var d=0,e=null,f=null,g=c.B;g&&(g.ma||(d++,g.H==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.o==F&&1==d?Wa(c,b):(f?(d=f,d.next==c.O&&(c.O=d),d.next=d.next.next):Xa(c),Ya(c,e,H,b)))}a.i=null}else G(a,H,b)}
function Za(a,b){a.B||a.o!=Qa&&a.o!=H||$a(a);a.O?a.O.next=b:a.B=b;a.O=b}function Ua(a,b,c,d){var e=Ta(null,null,null);e.H=new E(function(f,g){e.ca=b?function(h){try{var k=b.call(d,h);f(k)}catch(u){g(u)}}:f;e.S=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Va?g(h):f(k)}catch(u){g(u)}}:g});e.H.i=a;Za(a,e);return e.H}E.prototype.$b=function(a){this.o=F;G(this,Qa,a)};E.prototype.ac=function(a){this.o=F;G(this,H,a)};
function G(a,b,c){if(a.o==F){a===c&&(b=H,c=new TypeError("Promise cannot resolve to itself"));a.o=1;a:{var d=c,e=a.$b,f=a.ac;if(d instanceof E){Za(d,Ta(e||aa,f||null,a));var g=!0}else if(ja(d))d.then(e,f,a),g=!0;else{if(q(d))try{var h=d.then;if("function"===typeof h){ab(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.A=c,a.o=b,a.i=null,$a(a),b!=H||c instanceof Va||bb(a,c))}}
function ab(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function $a(a){a.Ka||(a.Ka=!0,Ka(a.Lb,a))}function Xa(a){var b=null;a.B&&(b=a.B,a.B=b.next,b.next=null);a.B||(a.O=null);return b}E.prototype.Lb=function(){for(var a;a=Xa(this);)Ya(this,a,this.o,this.A);this.Ka=!1};
function Ya(a,b,c,d){if(c==H&&b.S&&!b.ma)for(;a&&a.pa;a=a.i)a.pa=!1;if(b.H)b.H.i=null,cb(b,c,d);else try{b.ma?b.ca.call(b.context):cb(b,c,d)}catch(e){db.call(null,e)}Sa.put(b)}function cb(a,b,c){b==Qa?a.ca.call(a.context,c):a.S&&a.S.call(a.context,c)}function bb(a,b){a.pa=!0;Ka(function(){a.pa&&db.call(null,b)})}var db=Ja;function Va(a){B.call(this,a)}x(Va,B);Va.prototype.name="cancel";function eb(a){a&&"function"==typeof a.lb&&a.lb()};function I(){0!=fb&&(gb[ca(this)]=this);this.Z=this.Z;this.R=this.R}var fb=0,gb={};I.prototype.Z=!1;I.prototype.lb=function(){if(!this.Z&&(this.Z=!0,this.m(),0!=fb)){var a=ca(this);if(0!=fb&&this.R&&0<this.R.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete gb[a]}};I.prototype.m=function(){if(this.R)for(;this.R.length;)this.R.shift()()};function hb(a){function b(f,g){var h=g+"  ";try{if(void 0===f)c.push("undefined");else if(null===f)c.push("NULL");else if("string"===typeof f)c.push('"'+f.replace(/\n/g,"\n"+g)+'"');else if("function"===typeof f)c.push(String(f).replace(/\n/g,"\n"+g));else if(q(f)){f[r]||d.push(f);var k=ca(f);if(e[k])c.push("*** reference loop detected (id="+k+") ***");else{e[k]=!0;c.push("{");for(var u in f)"function"!==typeof f[u]&&(c.push("\n"),c.push(h),c.push(u+" = "),b(f[u],h));c.push("\n"+g+"}");delete e[k]}}else c.push(f)}catch(y){c.push("*** "+
y+" ***")}}var c=[],d=[],e={};b(a,"");for(a=0;a<d.length;a++)ea(d[a])};function J(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.ea=!1}J.prototype.stopPropagation=function(){this.ea=!0};J.prototype.preventDefault=function(){this.defaultPrevented=!0};var ib=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{m.addEventListener("test",aa,b),m.removeEventListener("test",aa,b)}catch(c){}return a}();function K(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.J=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=
b;if(b=a.relatedTarget){if(wa){a:{try{sa(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.offsetX=xa||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=xa||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:jb[a.pointerType]||"";this.state=a.state;this.J=a;a.defaultPrevented&&K.C.preventDefault.call(this)}}
x(K,J);var jb={2:"touch",3:"pen",4:"mouse"};K.prototype.stopPropagation=function(){K.C.stopPropagation.call(this);this.J.stopPropagation?this.J.stopPropagation():this.J.cancelBubble=!0};K.prototype.preventDefault=function(){K.C.preventDefault.call(this);var a=this.J;a.preventDefault?a.preventDefault():a.returnValue=!1};var kb="closure_listenable_"+(1E6*Math.random()|0);var lb=0;function mb(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qa=e;this.key=++lb;this.fa=this.na=!1}function nb(a){a.fa=!0;a.listener=null;a.proxy=null;a.src=null;a.qa=null};function L(a){this.src=a;this.h={};this.ia=0}L.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.h[f];a||(a=this.h[f]=[],this.ia++);var g=ob(a,b,d,e);-1<g?(b=a[g],c||(b.na=!1)):(b=new mb(b,this.src,f,!!d,e),b.na=c,a.push(b));return b};L.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.h))return!1;var e=this.h[a];b=ob(e,b,c,d);return-1<b?(nb(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.h[a],this.ia--),!0):!1};
function pb(a,b){var c=b.type;if(c in a.h){var d=a.h[c],e=Array.prototype.indexOf.call(d,b,void 0),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(nb(b),0==a.h[c].length&&(delete a.h[c],a.ia--))}}L.prototype.Na=function(a,b,c,d){a=this.h[a.toString()];var e=-1;a&&(e=ob(a,b,c,d));return-1<e?a[e]:null};function ob(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.fa&&f.listener==b&&f.capture==!!c&&f.qa==d)return e}return-1};var qb="closure_lm_"+(1E6*Math.random()|0),rb={},sb=0;function tb(a,b,c,d,e){if(d&&d.once)return ub(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)tb(a,b[f],c,d,e);return null}c=vb(c);return a&&a[kb]?a.v.add(String(b),c,!1,q(d)?!!d.capture:!!d,e):wb(a,b,c,!1,d,e)}
function wb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,h=xb(a);h||(a[qb]=h=new L(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=yb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ib||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(zb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");sb++;return c}
function yb(){function a(c){return b.call(a.src,a.listener,c)}const b=Ab;return a}function ub(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)ub(a,b[f],c,d,e);return null}c=vb(c);return a&&a[kb]?a.v.add(String(b),c,!0,q(d)?!!d.capture:!!d,e):wb(a,b,c,!0,d,e)}function Bb(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Bb(a,b[f],c,d,e);else d=q(d)?!!d.capture:!!d,c=vb(c),a&&a[kb]?a.v.remove(String(b),c,d,e):a&&(a=xb(a))&&(b=a.Na(b,c,d,e))&&Cb(b)}
function Cb(a){if("number"!==typeof a&&a&&!a.fa){var b=a.src;if(b&&b[kb])pb(b.v,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(zb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);sb--;(c=xb(b))?(pb(c,a),0==c.ia&&(c.src=null,b[qb]=null)):nb(a)}}}function zb(a){return a in rb?rb[a]:rb[a]="on"+a}function Ab(a,b){if(a.fa)a=!0;else{b=new K(b,this);var c=a.listener,d=a.qa||a.src;a.na&&Cb(a);a=c.call(d,b)}return a}
function xb(a){a=a[qb];return a instanceof L?a:null}var Db="__closure_events_fn_"+(1E9*Math.random()>>>0);function vb(a){if("function"===typeof a)return a;a[Db]||(a[Db]=function(b){return a.handleEvent(b)});return a[Db]};function M(){I.call(this);this.v=new L(this);this.Fb=this;this.Ra=null}x(M,I);M.prototype[kb]=!0;l=M.prototype;l.addEventListener=function(a,b,c,d){tb(this,a,b,c,d)};l.removeEventListener=function(a,b,c,d){Bb(this,a,b,c,d)};
l.dispatchEvent=function(a){var b,c=this.Ra;if(c)for(b=[];c;c=c.Ra)b.push(c);c=this.Fb;var d=a.type||a;if("string"===typeof a)a=new J(a,c);else if(a instanceof J)a.target=a.target||c;else{var e=a;a=new J(d,c);Fa(a,e)}e=!0;if(b)for(var f=b.length-1;!a.ea&&0<=f;f--){var g=a.currentTarget=b[f];e=Eb(g,d,!0,a)&&e}a.ea||(g=a.currentTarget=c,e=Eb(g,d,!0,a)&&e,a.ea||(e=Eb(g,d,!1,a)&&e));if(b)for(f=0;!a.ea&&f<b.length;f++)g=a.currentTarget=b[f],e=Eb(g,d,!1,a)&&e;return e};
l.m=function(){M.C.m.call(this);if(this.v){var a=this.v,b=0,c;for(c in a.h){for(var d=a.h[c],e=0;e<d.length;e++)++b,nb(d[e]);delete a.h[c];a.ia--}}this.Ra=null};function Eb(a,b,c,d){b=a.v.h[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.fa&&g.capture==c){var h=g.listener,k=g.qa||g.src;g.na&&pb(a.v,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}l.Na=function(a,b,c,d){return this.v.Na(String(a),b,c,d)};function Fb(a,b){M.call(this);this.ta=a||1;this.ha=b||m;this.fb=v(this.Zb,this);this.tb=Date.now()}x(Fb,M);l=Fb.prototype;l.enabled=!1;l.s=null;l.setInterval=function(a){this.ta=a;this.s&&this.enabled?(this.stop(),this.start()):this.s&&this.stop()};l.Zb=function(){if(this.enabled){var a=Date.now()-this.tb;0<a&&a<.8*this.ta?this.s=this.ha.setTimeout(this.fb,this.ta-a):(this.s&&(this.ha.clearTimeout(this.s),this.s=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.s||(this.s=this.ha.setTimeout(this.fb,this.ta),this.tb=Date.now())};l.stop=function(){this.enabled=!1;this.s&&(this.ha.clearTimeout(this.s),this.s=null)};l.m=function(){Fb.C.m.call(this);this.stop();delete this.ha};/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
function N(a){this.wa=[];this.vb=a;this.jb=null;this.aa=this.P=!1;this.A=void 0;this.Wa=this.Gb=this.Ga=!1;this.xa=0;this.i=null;this.Ha=0}N.prototype.cancel=function(a){if(this.P)this.A instanceof N&&this.A.cancel();else{if(this.i){const b=this.i;delete this.i;a?b.cancel(a):(a=b,a.Ha--,0>=a.Ha&&a.cancel())}this.vb?this.vb.call(this.jb,this):this.Wa=!0;this.P||(a=new Gb(this),Hb(this),Ib(this,!1,a))}};N.prototype.hb=function(a,b){this.Ga=!1;Ib(this,a,b)};
function Ib(a,b,c){a.P=!0;a.A=c;a.aa=!b;Jb(a)}function Hb(a){if(a.P){if(!a.Wa)throw new Kb(a);a.Wa=!1}}N.prototype.j=function(a){Hb(this);Ib(this,!0,a)};function Lb(a,b){Mb(a,b,null,void 0)}function Mb(a,b,c,d){a.wa.push([b,c,d]);a.P&&Jb(a)}N.prototype.then=function(a,b,c){let d,e;const f=new E(function(g,h){e=g;d=h});Mb(this,e,function(g){g instanceof Gb?f.cancel():d(g)});return f.then(a,b,c)};N.prototype.$goog_Thenable=!0;
function Nb(a){return oa(a.wa,function(b){return"function"===typeof b[1]})}
function Jb(a){if(a.xa&&a.P&&Nb(a)){var b=a.xa,c=Ob[b];c&&(m.clearTimeout(c.sa),delete Ob[b]);a.xa=0}a.i&&(a.i.Ha--,delete a.i);b=a.A;for(var d=c=!1;a.wa.length&&!a.Ga;){var e=a.wa.shift(),f=e[0];const h=e[1];e=e[2];if(f=a.aa?h:f)try{var g=f.call(e||a.jb,b);void 0!==g&&(a.aa=a.aa&&(g==b||g instanceof Error),a.A=b=g);if(ja(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.Ga=!0}catch(k){b=k,a.aa=!0,Nb(a)||(c=!0)}}a.A=b;d&&(g=v(a.hb,a,!0),d=v(a.hb,a,!1),b instanceof N?(Mb(b,g,d),b.Gb=
!0):b.then(g,d));c&&(b=new Pb(b),Ob[b.sa]=b,a.xa=b.sa)}function Qb(){const a=new N;var b=Error("Invalid origin");Hb(a);Ib(a,!1,b);return a}function Kb(){B.call(this)}x(Kb,B);Kb.prototype.message="Deferred has already fired";Kb.prototype.name="AlreadyCalledError";function Gb(){B.call(this)}x(Gb,B);Gb.prototype.message="Deferred was canceled";Gb.prototype.name="CanceledError";function Pb(a){this.sa=m.setTimeout(v(this.Yb,this),0);this.Kb=a}
Pb.prototype.Yb=function(){delete Ob[this.sa];throw this.Kb;};var Ob={};var Rb=m.JSON.stringify;function O(){I.call(this);this.Va={}}x(O,I);O.prototype.connect=function(a){a&&a()};O.prototype.isConnected=function(){return!0};O.prototype.Sa=function(a,b,c){this.Va[a]={j:b,ub:!!c}};O.prototype.m=function(){O.C.m.call(this);delete this.Va;delete this.kb};function P(a){I.call(this);this.Ja=a}x(P,I);l=P.prototype;l.cancel=function(){this.Ja.cancel()};l.connect=function(a){a&&a()};l.isConnected=function(){return!0};l.Sa=function(a,b,c){Lb(this.Ja,function(d){d.Sa(a,b,c)})};l.send=function(a,b){Lb(this.Ja,function(c){c.send(a,b)})};l.m=function(){this.cancel();P.C.m.call(this)};function Sb(a){O.call(this);this.K=a;this.Rb=tb(this.K,"message",this.Jb,!1,this)}x(Sb,O);function Tb(a,b){if("*"==b)return new P(Qb());const c=new Fb(50),d=ia(eb,c),e=new N(d);Mb(e,d,d,void 0);c.start();tb(c,"tick",function(){function f(){g.port1.removeEventListener("message",f,!0);c.Z||e.j(new Sb(g.port1))}const g=new MessageChannel;g.port1.start();g.port1.addEventListener("message",f,!0);const h={};h[Ub]=!0;a.postMessage(h,b,[g.port2])});return new P(e)}
function Vb(a){if("*"==a)return new P(Qb());const b=new N,c=tb(window,"message",function(d){d=d.J;const e=d.data;q(e)&&e[Ub]&&window.parent==d.source&&a==d.origin&&(d=d.ports[0],d.postMessage({}),d.start(),b.j(new Sb(d)),Cb(c))});return new P(b)}var Ub="--goog.messaging.PortChannel",Wb;
if(Wb=xa){let a=0;const b=pa(String(ya)).split("."),c=pa("533").split("."),d=Math.max(b.length,c.length);for(let e=0;0==a&&e<d;e++){let f=b[e]||"",g=c[e]||"";do{const h=/(\d*)(\D*)(.*)/.exec(f)||["","","",""],k=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==h[0].length&&0==k[0].length)break;a=qa(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||qa(0==h[2].length,0==k[2].length)||qa(h[2],k[2]);f=h[3];g=k[3]}while(0==a)}Wb=0>a}var Xb=Wb;l=Sb.prototype;
l.send=function(a,b){const c=[];b=this.La(c,b);a={serviceName:a,payload:b};a[Ub]=!0;Xb&&(a=Rb(a));this.K.postMessage(a,c)};
l.Jb=function(a){a=a.J;var b=a.data;if(Xb)try{b=JSON.parse(b)}catch(e){return}var c;if(c=q(b)&&b[Ub])c=b,"serviceName"in c?"payload"in c?c=!0:(hb(c),c=!1):(hb(c),c=!1);if(c){c=b.serviceName;b=b.payload;var d=this.Va[c];if(c=d?d:this.kb?{j:ia(this.kb,c),ub:q(b)}:null){a:{a=this.Qa(a.ports||[],b);if((d=c.ub)&&"string"===typeof a)try{b=JSON.parse(a);break a}catch(e){b=null;break a}else if(!d&&"string"!==typeof a){b=Rb(a);break a}b=a}null!=b&&c.j(b)}}};
l.La=function(a,b){return b&&"[object MessagePort]"==Object.prototype.toString.call(b)?(a.push(b),{_port:{type:"real",index:a.length-1}}):Array.isArray(b)?b.map(v(this.La,this,a)):b&&b.constructor==Object?Da(b,function(c,d){c=this.La(a,c);return"_port"==d?{type:"escaped",val:c}:c},this):b};l.Qa=function(a,b){return Array.isArray(b)?b.map(v(this.Qa,this,a)):b&&b.constructor==Object?b._port&&"real"==b._port.type?a[b._port.index]:Da(b,function(c,d){return this.Qa(a,"_port"==d?c.val:c)},this):b};
l.m=function(){Cb(this.Rb);"[object MessagePort]"==Object.prototype.toString.call(this.K)?this.K.close():"[object Worker]"==Object.prototype.toString.call(this.K)&&this.K.terminate();delete this.K;Sb.C.m.call(this)};var $b=class{constructor(a,{target:b,dc:c,j:d,lc:e}){this.Fa=this.Ea=!1;this.j=()=>!0;Yb(this.Da=a,this);this.cb=null===b?b:null!==b&&void 0!==b?b:this.Da;this.Eb=c;this.Ea=null!==e&&void 0!==e?e:this.Ea;this.j=null!==d&&void 0!==d?d:this.j;window.ResizeObserver?this.la=new ResizeObserver(f=>{this.value=this.j(f,this.la);Zb(this.Da)}):console.warn("ResizeController error: browser does not support ResizeObserver.")}qb(){this.cb&&this.observe(this.cb)}Ob(){this.disconnect()}async Pb(){!this.Ea&&this.Fa&&
(this.value=this.j([],this.la));this.Fa=!1}observe(a){this.la.observe(a,this.Eb);this.Fa=!0;Zb(this.Da)}disconnect(){this.la.disconnect()}};/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var ac=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;const bc=Symbol(),cc=new Map;
var dc=class{constructor(a){this._$cssResult$=!0;if(bc!==bc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a}get styleSheet(){let a=cc.get(this.cssText);ac&&void 0===a&&(cc.set(this.cssText,a=new CSSStyleSheet),a.replaceSync(this.cssText));return a}toString(){return this.cssText}},ec=(a,...b)=>{b=1===a.length?a[0]:b.reduce((c,d,e)=>{if(!0===d._$cssResult$)d=d.cssText;else if("number"!==typeof d)throw Error("Value passed to 'css' function must be a 'css' function result: "+
`${d}. Use 'unsafeCSS' to pass non-literal values, but take care `+"to ensure page security.");return c+d+a[e+1]},a[0]);return new dc(b)},fc=(a,b)=>{ac?a.adoptedStyleSheets=b.map(c=>c instanceof CSSStyleSheet?c:c.styleSheet):b.forEach(c=>{const d=document.createElement("style"),e=window.litNonce;void 0!==e&&d.setAttribute("nonce",e);d.textContent=c.cssText;a.appendChild(d)})},gc=ac?a=>a:a=>{if(a instanceof CSSStyleSheet){let b="";for(const c of a.cssRules)b+=c.cssText;a=new dc("string"===typeof b?
b:String(b))}return a};/*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var hc;const ic=window.trustedTypes,jc=ic?ic.emptyScript:"",kc=window.reactiveElementPolyfillSupport;var lc={zb(a,b){switch(b){case Boolean:a=a?jc:null;break;case Object:case Array:a=null==a?a:JSON.stringify(a)}return a},pb(a,b){let c=a;switch(b){case Boolean:c=null!==a;break;case Number:c=null===a?null:Number(a);break;case Object:case Array:try{c=JSON.parse(a)}catch(d){c=null}}return c}},mc=(a,b)=>b!==a&&(b===b||a===a);const nc={eb:!0,type:String,ib:lc,yb:!1,Nb:mc};
function Yb(a,b){var c,d;(null!==(c=a.W)&&void 0!==c?c:a.W=[]).push(b);void 0!==a.va&&a.isConnected&&(null===(d=b.qb)||void 0===d?void 0:d.call(b))}function Zb(a,b,c,d){let e=!0;void 0!==b&&(d=d||a.constructor.I.get(b)||nc,(d.Nb||mc)(a[b],c)?(a.ja.has(b)||a.ja.set(b,c),!0===d.yb&&a.L!==b&&(void 0===a.X&&(a.X=new Map),a.X.set(b,d))):e=!1);!a.ba&&e&&(a.$a=oc(a))}
function pc(a){var b;a.$a=new Promise(c=>a.nb=c);a.ja=new Map;qc(a);Zb(a);null===(b=a.constructor.bc)||void 0===b?void 0:b.forEach(c=>c(a))}
function rc(a){if(!a.hasOwnProperty("finalized")){a.finalized=!0;var b=Object.getPrototypeOf(a);rc(b);a.I=new Map(b.I);a.Ya=new Map;if(a.hasOwnProperty("properties")){b=a.jc;const d=[...Object.getOwnPropertyNames(b),...Object.getOwnPropertySymbols(b)];for(var c of d)sc(a,c,b[c])}b=a.Xb;c=[];if(Array.isArray(b)){b=new Set(b.flat(Infinity).reverse());for(const d of b)c.unshift(gc(d))}else void 0!==b&&c.push(gc(b));a.mb=c}}
function tc(a,b){b=b.eb;return!1===b?void 0:"string"===typeof b?b:"string"===typeof a?a.toLowerCase():void 0}function uc(a,b,c){return{get(){return this[b]},set(d){const e=this[a];this[b]=d;Zb(this,a,e,c)},configurable:!0,enumerable:!0}}function sc(a,b,c=nc){c.state&&(c.eb=!1);rc(a);a.I.set(b,c);c.ic||a.prototype.hasOwnProperty(b)||(c=uc(b,"symbol"===typeof b?Symbol():`__${b}`,c),void 0!==c&&Object.defineProperty(a.prototype,b,c))}
function qc(a){a.constructor.I.forEach((b,c)=>{a.hasOwnProperty(c)&&(a.ka.set(c,a[c]),delete a[c])})}function vc(a,b,c,d=nc){var e,f;const g=tc(b,d);if(void 0!==g&&!0===d.yb){const h=(null!==(f=null===(e=d.ib)||void 0===e?void 0:e.zb)&&void 0!==f?f:lc.zb)(c,d.type);a.L=b;null==h?a.removeAttribute(g):a.setAttribute(g,h);a.L=null}}async function oc(a){a.ba=!0;try{await a.$a}catch(c){Promise.reject(c)}const b=xc(a);null!=b&&await b;return!a.ba}
function xc(a){var b;if(a.ba){void 0;a.ka&&(a.ka.forEach((e,f)=>a[f]=e),a.ka=void 0);var c=!1,d=a.ja;try{c=!0,null===(b=a.W)||void 0===b?void 0:b.forEach(e=>{var f;return null===(f=e.hc)||void 0===f?void 0:f.call(e)}),a.update(d)}catch(e){throw c=!1,yc(a),e;}c&&zc(a,d)}}function yc(a){a.ja=new Map;a.ba=!1}function zc(a,b){var c;null===(c=a.W)||void 0===c?void 0:c.forEach(d=>{var e;return null===(e=d.Pb)||void 0===e?void 0:e.call(d)});a.Oa||(a.Oa=!0,a.ob());a.Bb(b)}
var Q=class extends HTMLElement{constructor(){super();this.ka=new Map;this.Oa=this.ba=!1;this.L=null;pc(this)}static get observedAttributes(){rc(this);const a=[];this.I.forEach((b,c)=>{b=tc(c,b);void 0!==b&&(this.Ya.set(b,c),a.push(b))});return a}Ia(){var a;const b=null!==(a=this.shadowRoot)&&void 0!==a?a:this.attachShadow(this.constructor.Wb);fc(b,this.constructor.mb);return b}connectedCallback(){var a;void 0===this.va&&(this.va=this.Ia());this.nb(!0);null===(a=this.W)||void 0===a?void 0:a.forEach(b=>
{var c;return null===(c=b.qb)||void 0===c?void 0:c.call(b)})}nb(){}disconnectedCallback(){var a;null===(a=this.W)||void 0===a?void 0:a.forEach(b=>{var c;return null===(c=b.Ob)||void 0===c?void 0:c.call(b)})}attributeChangedCallback(a,b,c){var d,e,f;b=this.constructor;a=b.Ya.get(a);if(void 0!==a&&this.L!==a){b=b.I.get(a)||nc;const g=b.ib,h=null!==(f=null!==(e=null===(d=g)||void 0===d?void 0:d.pb)&&void 0!==e?e:"function"===typeof g?g:null)&&void 0!==f?f:lc.pb;this.L=a;this[a]=h(c,b.type);this.L=null}}update(){void 0!==
this.X&&(this.X.forEach((a,b)=>vc(this,b,this[b],a)),this.X=void 0);yc(this)}Bb(){}ob(){}};Q.finalized=!0;Q.I=new Map;Q.mb=[];Q.Wb={mode:"open"};null===kc||void 0===kc?void 0:kc({ReactiveElement:Q});(null!==(hc=globalThis.reactiveElementVersions)&&void 0!==hc?hc:globalThis.reactiveElementVersions=[]).push("1.3.2");var Ac,Bc,Cc;
const R=(null===(Ac=window.ShadyDOM)||void 0===Ac?0:Ac.inUse)&&!0===(null===(Bc=window.ShadyDOM)||void 0===Bc?void 0:Bc.noPatch)?window.ShadyDOM.wrap:a=>a,S=globalThis.trustedTypes,Dc=S?S.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ec=a=>a,Fc=()=>Ec,U=`lit$${String(Math.random()).slice(9)}$`,Gc="?"+U,Hc=`<${Gc}>`,V=document,Ic=a=>null===a||"object"!=typeof a&&"function"!=typeof a,Jc=Array.isArray,Kc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lc=/--\x3e/g,Mc=/>/g,W=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),
Nc=/'/g,Oc=/"/g,Pc=/^(?:script|style|textarea|title)$/i;var Qc=(a=>(b,...c)=>({_$litType$:a,l:b,values:c}))(1),X=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing");const Rc=new WeakMap,Sc=V.createTreeWalker(V,129,null,!1);
class Tc{constructor({l:a,_$litType$:b},c){this.xb=[];let d=0,e=0;const f=a.length-1,g=this.xb;var h=a.length-1,k=[];let u=2===b?"<svg>":"",y,n=Kc;for(let w=0;w<h;w++){const ba=a[w];let T=-1,wc;var p=0;let t;for(;p<ba.length;){n.lastIndex=p;t=n.exec(ba);if(null===t)break;p=n.lastIndex;n===Kc?"!--"===t[1]?n=Lc:void 0!==t[1]?n=Mc:void 0!==t[2]?(Pc.test(t[2])&&(y=new RegExp(`</${t[2]}`,"g")),n=W):void 0!==t[3]&&(n=W):n===W?">"===t[0]?(n=null!==y&&void 0!==y?y:Kc,T=-1):void 0===t[1]?T=-2:(T=n.lastIndex-
t[2].length,wc=t[1],n=void 0===t[3]?W:'"'===t[3]?Oc:Nc):n===Oc||n===Nc?n=W:n===Lc||n===Mc?n=Kc:(n=W,y=void 0)}p=n===W&&a[w+1].startsWith("/>")?" ":"";u+=n===Kc?ba+Hc:0<=T?(k.push(wc),ba.slice(0,T)+"$lit$"+ba.slice(T))+U+p:ba+U+(-2===T?(k.push(void 0),w):p)}h=u+(a[h]||"<?>")+(2===b?"</svg>":"");if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");a=[void 0!==Dc?Dc.createHTML(h):h,k];const [ld,md]=a;this.$=Tc.createElement(ld,c);Sc.currentNode=this.$.content;
2===b&&(b=this.$.content,c=b.firstChild,c.remove(),b.append(...c.childNodes));for(;null!==(b=Sc.nextNode())&&g.length<f;){if(1===b.nodeType){if(b.hasAttributes()){c=[];for(const w of b.getAttributeNames())if(w.endsWith("$lit$")||w.startsWith(U))k=md[e++],c.push(w),void 0!==k?(a=b.getAttribute(k.toLowerCase()+"$lit$").split(U),k=/([.?@])?(.*)/.exec(k),g.push({type:1,index:d,name:k[2],l:a,Ib:"."===k[1]?Uc:"?"===k[1]?Vc:"@"===k[1]?Wc:Xc})):g.push({type:6,index:d});for(const w of c)b.removeAttribute(w)}if(Pc.test(b.tagName)&&
(c=b.textContent.split(U),a=c.length-1,0<a)){b.textContent=S?S.emptyScript:"";for(k=0;k<a;k++)b.append(c[k],V.createComment("")),Sc.nextNode(),g.push({type:2,index:++d});b.append(c[a],V.createComment(""))}}else if(8===b.nodeType)if(b.data===Gc)g.push({type:2,index:d});else for(c=-1;-1!==(c=b.data.indexOf(U,c+1));)g.push({type:7,index:d}),c+=U.length-1;d++}void 0}static createElement(a){const b=V.createElement("template");b.innerHTML=a;return b}}
function Yc(a,b,c=a,d){var e,f,g;if(b===X)return b;let h=void 0!==d?null===(e=c.Za)||void 0===e?void 0:e[d]:c.Db;e=Ic(b)?void 0:b._$litDirective$;(null===h||void 0===h?void 0:h.constructor)!==e&&(null===(f=null===h||void 0===h?void 0:h._$notifyDirectiveConnectionChanged)||void 0===f?void 0:f.call(h,!1),void 0===e?h=void 0:(h=new e(a),h.D=c),void 0!==d?(null!==(g=c.Za)&&void 0!==g?g:c.Za=[])[d]=h:c.Db=h);void 0!==h&&(b=Yc(a,h.update(a,b.values),h,d));return b}
function Zc(a,b){let c=0;for(const d of a.ab)void 0!==d&&(void 0,void 0!==d.l?(d.F(b,d,c),c+=d.l.length-2):d.F(b[c])),c++}class $c{constructor(a,b){this.ab=[];this.Xa=a;this.D=b}get parentNode(){return this.D.parentNode}}function ad(a,b=R(a.V).nextSibling,c){var d;for(null===(d=a.Cb)||void 0===d?void 0:d.call(a,!1,!0,c);b&&b!==a.Aa;)c=R(b).nextSibling,R(b).remove(),b=c}
function bd(a,b){if(a.g!==Y&&Ic(a.g)){var c=R(a.V).nextSibling;void 0===a.N&&(a.N=Ec);b=a.N(b);void 0;c.data=b}else c=document.createTextNode(""),cd(a,c),void 0===a.N&&(a.N=Ec),b=a.N(b),void 0,c.data=b;a.g=b}function cd(a,b){var c;if(a.g!==b){ad(a);if(Fc!==Fc){const d=null===(c=a.V.parentNode)||void 0===c?void 0:c.nodeName;if("STYLE"===d||"SCRIPT"===d)throw Error("Forbidden");}void 0;a.g=dd(a,b)}}function dd(a,b,c=a.Aa){return R(R(a.V).parentNode).insertBefore(b,c)}
function ed(a,b){var c;void 0===a.D&&(null===(c=a.Cb)||void 0===c?void 0:c.call(a,b))}
class fd{constructor(a,b,c,d){this.type=2;this.g=Y;this.V=a;this.Aa=b;this.D=c;this.options=d;this.N=void 0}get parentNode(){let a=R(this.V).parentNode;const b=this.D;void 0!==b&&11===a.nodeType&&(a=b.parentNode);return a}F(a,b=this){a=Yc(this,a,b);if(Ic(a))a===Y||null==a||""===a?(this.g!==Y&&(void 0,ad(this)),this.g=Y):a!==this.g&&a!==X&&bd(this,a);else if(void 0!==a._$litType$){var c;const {values:h,_$litType$:k}=a;if("number"===typeof k){var d=a;var e=Rc.get(d.l);void 0===e&&Rc.set(d.l,e=new Tc(d));
d=e}else d=(void 0===k.$&&(k.$=Tc.createElement(k.fc,this.options)),k);if((null===(c=this.g)||void 0===c?void 0:c.Xa)===d)void 0,Zc(this.g,h);else{c=new $c(d,this);var f;d=c;e=this.options;var g;const {$:{content:u},xb:y}=d.Xa;a=(null!==(g=null===e||void 0===e?void 0:e.ec)&&void 0!==g?g:V).importNode(u,!0);Sc.currentNode=a;g=Sc.nextNode();let n=b=0,p=y[0];for(;void 0!==p;)b===p.index&&(2===p.type?f=new fd(g,g.nextSibling,d,e):1===p.type?f=new p.Ib(g,p.name,p.l,d,e):6===p.type&&(f=new gd(g,d,e)),d.ab.push(f),
p=y[++n]),b!==(null===p||void 0===p?void 0:p.index)&&(g=Sc.nextNode(),b++);f=a;void 0;Zc(c,h);void 0;cd(this,f);this.g=c}}else if(void 0!==a.nodeType)cd(this,a);else if(Jc(a)||"function"===typeof(null===a||void 0===a?void 0:a[Symbol.iterator])){f=a;Jc(this.g)||(this.g=[],ad(this));g=this.g;c=0;for(e of f)c===g.length?g.push(d=new fd(dd(this,V.createComment("")),dd(this,V.createComment("")),this,this.options)):d=g[c],d.F(e),c++;c<g.length&&(ad(this,d&&R(d.Aa).nextSibling,c),g.length=c)}else bd(this,
a)}}
class Xc{constructor(a,b,c,d,e){this.type=1;this.g=Y;this.element=a;this.name=b;this.D=d;this.options=e;2<c.length||""!==c[0]||""!==c[1]?(this.g=Array(c.length-1).fill(new String),this.l=c):this.g=Y;this.M=void 0}get tagName(){return this.element.tagName}F(a,b=this,c){const d=this.l;let e=!1;if(void 0===d){if(a=Yc(this,a,b,0),e=!Ic(a)||a!==this.g&&a!==X)this.g=a}else{const f=a;a=d[0];let g,h;for(g=0;g<d.length-1;g++)h=Yc(this,f[c+g],b,g),h===X&&(h=this.g[g]),e||(e=!Ic(h)||h!==this.g[g]),h===Y?a=Y:
a!==Y&&(a+=(null!==h&&void 0!==h?h:"")+d[g+1]),this.g[g]=h}e&&this.Ca(a)}Ca(a){a===Y?R(this.element).removeAttribute(this.name):(void 0===this.M&&(this.M=Ec),a=this.M(null!==a&&void 0!==a?a:""),void 0,R(this.element).setAttribute(this.name,null!==a&&void 0!==a?a:""))}}class Uc extends Xc{constructor(){super(...arguments);this.type=3}Ca(a){void 0===this.M&&(this.M=Ec);a=this.M(a);void 0;this.element[this.name]=a===Y?void 0:a}}const hd=S?S.emptyScript:"";
class Vc extends Xc{constructor(){super(...arguments);this.type=4}Ca(a){void 0;a&&a!==Y?R(this.element).setAttribute(this.name,hd):R(this.element).removeAttribute(this.name)}}
class Wc extends Xc{constructor(a,b,c,d,e){super(a,b,c,d,e);this.type=5}F(a,b=this){var c;a=null!==(c=Yc(this,a,b,0))&&void 0!==c?c:Y;if(a!==X){b=this.g;c=a===Y&&b!==Y||a.capture!==b.capture||a.once!==b.once||a.passive!==b.passive;var d=a!==Y&&(b===Y||c);void 0;c&&this.element.removeEventListener(this.name,this,b);d&&this.element.addEventListener(this.name,this,a);this.g=a}}handleEvent(a){var b,c;"function"===typeof this.g?this.g.call(null!==(c=null===(b=this.options)||void 0===b?void 0:b.host)&&
void 0!==c?c:this.element,a):this.g.handleEvent(a)}}class gd{constructor(a,b,c){this.element=a;this.type=6;this.D=b;this.options=c}F(a){void 0;Yc(this,a)}}const id=window.litHtmlPolyfillSupport;null===id||void 0===id?void 0:id(Tc,fd);(null!==(Cc=globalThis.litHtmlVersions)&&void 0!==Cc?Cc:globalThis.litHtmlVersions=[]).push("2.2.5");var jd,kd,nd=class extends Q{constructor(){super(...arguments);this.Ua={host:this};this.Ba=void 0}Ia(){var a,b;const c=super.Ia();null!==(a=(b=this.Ua).Ta)&&void 0!==a?a:b.Ta=c.firstChild;return c}update(a){const b=this.ga();this.Oa||(this.Ua.isConnected=this.isConnected);super.update(a);a=this.va;var c=this.Ua,d,e;const f=null!==(d=null===c||void 0===c?void 0:c.Ta)&&void 0!==d?d:a;d=f._$litPart$;void 0;void 0===d&&(d=null!==(e=null===c||void 0===c?void 0:c.Ta)&&void 0!==e?e:null,f._$litPart$=d=new fd(a.insertBefore(V.createComment(""),
d),d,void 0,null!==c&&void 0!==c?c:{}));d.F(b);void 0;this.Ba=d}connectedCallback(){var a;super.connectedCallback();null===(a=this.Ba)||void 0===a?void 0:ed(a,!0)}disconnectedCallback(){var a;super.disconnectedCallback();null===(a=this.Ba)||void 0===a?void 0:ed(a,!1)}ga(){return X}};nd.finalized=!0;nd._$litElement$=!0;null===(jd=globalThis.litElementHydrateSupport)||void 0===jd?void 0:jd.call(globalThis,{LitElement:nd});const od=globalThis.litElementPolyfillSupport;null===od||void 0===od?void 0:od({LitElement:nd});
(null!==(kd=globalThis.litElementVersions)&&void 0!==kd?kd:globalThis.litElementVersions=[]).push("3.2.0");const pd=(a,b)=>({kind:b.kind,elements:b.elements,oa(c){window.customElements.define(a,c)}});const qd=(a,b)=>"method"!==b.kind||!b.Y||"value"in b.Y?{kind:"field",key:Symbol(),placement:"own",Y:{},Tb:b.key,rb(){"function"===typeof b.rb&&(this[b.key]=b.rb.call(this))},oa(c){sc(c,b.key,a)}}:Object.assign(Object.assign({},b),{oa(c){sc(c,b.key,a)}});function rd(a){return(b,c)=>{void 0!==c?(sc(b.constructor,c,a),b=void 0):b=qd(a,b);return b}};var sd=({oa:a,Y:b})=>(c,d)=>{if(void 0!==d){var e=c.constructor;void 0!==b&&Object.defineProperty(c,d,b(d));null===a||void 0===a?void 0:a(e,d)}else{const f=null!==(e=c.Tb)&&void 0!==e?e:c.key;c=void 0!=b?{kind:"method",placement:"prototype",key:f,Y:b(c.key)}:Object.assign(Object.assign({},c),{key:f});void 0!=a&&(c.oa=function(g){a(g,f)});return c}};/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var td;const ud=null!=(null===(td=window.HTMLSlotElement)||void 0===td?void 0:td.prototype.assignedElements)?(a,b)=>a.assignedElements(b):(a,b)=>a.assignedNodes(b).filter(c=>c.nodeType===Node.ELEMENT_NODE);/*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var vd=class{update(a,b){return this.ga(...b)}};/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
class wd extends vd{constructor(a){var b;super();if(1!==a.type||"class"!==a.name||2<(null===(b=a.l)||void 0===b?void 0:b.length))throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");}ga(a){return" "+Object.keys(a).filter(b=>a[b]).join(" ")+" "}update(a,[b]){var c,d;if(void 0===this.G){this.G=new Set;void 0!==a.l&&(this.bb=new Set(a.l.join(" ").split(/\s/).filter(f=>""!==f)));for(const f in b)!b[f]||(null===(c=this.bb)||void 0===c?0:c.has(f))||
this.G.add(f);return this.ga(b)}const e=a.element.classList;this.G.forEach(f=>{f in b||(e.remove(f),this.G.delete(f))});for(const f in b)a=!!b[f],a===this.G.has(f)||null!==(d=this.bb)&&void 0!==d&&d.has(f)||(a?(e.add(f),this.G.add(f)):(e.remove(f),this.G.delete(f)));return X}}var xd=(a=>(...b)=>({_$litDirective$:a,values:b}))(wd);function yd(a,b,c){return a?b():null===c||void 0===c?void 0:c()};Symbol.for("");window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");function zd(){}zd.sb=void 0;zd.Mb=function(){zd.sb||(zd.sb=new zd)};zd.Mb();var Z=class extends nd{constructor(){super(...arguments);this.placement="start";this.label="Passage";this.ya=50;this.u=!0;this.wb=200;this.T=56;new $b(this,{j:a=>{for(let b of a)b.borderBoxSize&&0<b.borderBoxSize.length&&(this.wb=a=b.borderBoxSize[0].inlineSize,this.placement=600<=a?"start":"top")}})}get width(){return this.ya}set width(a){if(0>a||100<a)throw Error("Width must be a value in the range 0-100");this.ya=a;Zb(this)}Ab(){this.u=!this.u}ob(){if(this.da){this.T=this.da[0].clientHeight+56;
this.style.setProperty("--height",`${this.T}px`);var a=this.da.find(b=>"iframe"===b.tagName);a&&this.iframeOrigin&&(a=a.contentWindow)&&(this.Sb=Tb(a,this.iframeOrigin),this.Sb.Sa("derivita.passages",b=>{if(this.Pa=Number.parseInt(b))this.T=this.Pa;this.style.setProperty("--height",`${b}px`);debugger}))}this.Ub=this.placement;"start"===this.placement&&this.style.setProperty("--width",`${this.ya}%`)}Bb(a){this.da&&a.has("placement")&&"top"===this.Ub&&(this.T=this.Pa||this.da[0].clientHeight+56);switch(this.placement){case "top":this.style.removeProperty("--height");
break;case "start":this.style.setProperty("--height",`${this.T}px`),this.style.setProperty("--width",`${this.ya}%`)}}ga(){const a="top"===this.placement,b=xd({open:this.u,closed:!this.u,drawer:!0,horizontal:a}),c=xd({"drawer-container":!0,horizontal:a});return Qc`
      <div class=${c}>
        <div
          class=${b}
          style="${yd(a,()=>ec`
                min-width: ${this.wb-33}px;
              `,()=>ec`
                height: ${this.T}px;
              `)}">
          <div class="icon_area">
            ${this.u||a?Qc`<div class="label">${this.label}</div>`:null}
            ${"top"===this.placement?Qc` <mdl-icon
        name=${this.u?"unfold_less":"unfold_more"}
        label=${this.u?"Collapse":"Expand"}
        @click=${this.Ab}></mdl-icon>`:Qc` <mdl-icon
      name=${this.u?"first_page":"last_page"}
      label=${this.u?"Collapse":"Expand"}
      @click=${this.Ab}></mdl-icon>`}
          </div>
          <div class="contents">
            <slot name="passage"></slot>
          </div>
        </div>
        <slot name="surround"></slot>
      </div>
    `}};Z.Xb=ec`
    :host {
      display: block;
      height: var(--height, '200px');
    }

    * {
      box-sizing: border-box;
    }

    .drawer-container {
      display: flex;
      gap: 18px;
    }

    .drawer-container.horizontal {
      flex-direction: column;
    }

    .drawer {
      background-color: #f5f5f5;
      height: 100%;
      display: block;
      border-right: 1px solid rgba(0, 0, 0, 0.12);
      transition: all 0.3s;
    }

    .drawer.horizontal {
      height: ${56}px;
      width: 100%;
      margin-right: 0px;
      margin-bottom: 24px;
    }

    .open {
      width: var(--width, '50%');
      height: 100%;
    }

    .contents {
      visibility: hidden;
      font-size: 16px;
      color: rgb(51, 51, 51);
      padding: 24px 16px 24px 24px;
      height: calc(100% - ${56}px);
    }

    .open .contents {
      visibility: visible;
    }

    .closed {
      width: ${56}px;
      height: 100%;
    }

    .icon_area {
      width: 100%;
      height: ${56}px;
      text-align: right;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .open .icon_area {
      justify-content: space-between;
    }

    .icon_area .label {
      padding-left: 24px;
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }

    .horizontal.open {
      height: 100%;
    }

    .horizontal.open contents {
      height: 100%;
    }

    .horizontal.closed contents {
      height: 0;
    }

    .horizontal .icon_area {
      justify-content: space-between;
    }

    slot[name='surround']::slotted(*) {
      flex: 1;
    }

    mdl-icon button {
      height: ${56}px;
      width: ${56}px;
      border: none;
      cursor: pointer;
      transition: width 0.3s;
      background-color: inherit;
    }

    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-smoothing: antialiased;
      opacity: 0.7;
    }
  `;z([rd({type:String}),A("design:type",String)],Z.prototype,"placement",void 0);z([rd({type:String}),A("design:type",String)],Z.prototype,"label",void 0);z([rd({type:Number}),A("design:type",Number),A("design:paramtypes",[Number])],Z.prototype,"width",null);z([rd({type:String}),A("design:type",String)],Z.prototype,"iframeOrigin",void 0);z([rd(Object.assign(Object.assign({},void 0),{state:!0})),A("design:type",Boolean)],Z.prototype,"u",void 0);
z([function(a){const {slot:b,kc:c}=null!==a&&void 0!==a?a:{};return sd({Y:()=>({get(){var d;const e=`slot${b?`[name=${b}]`:":not([name])"}`,f=null===(d=this.va)||void 0===d?void 0:d.querySelector(e);d=null!=f?ud(f,a):[];return c?d.filter(g=>g.matches(c)):d},enumerable:!0,configurable:!0})})}({slot:"passage"}),A("design:type",Array)],Z.prototype,"da",void 0);Z=z([(a=>b=>{"function"===typeof b?window.customElements.define(a,b):b=pd(a,b);return b})("d-drawer")],Z);if(window.parent!==window){const a=(new URL(window.location.href)).searchParams.get("parentOrigin");if(a){const b=Vb(a);document.addEventListener("DOMContentLoaded",()=>{(new ResizeObserver(()=>{const c=Math.round(document.documentElement.getBoundingClientRect().height);b.send("derivita.passages",{height:c})})).observe(document.body)})}};}).call(this); //# sourceMappingURL=passage_assets.js.map
