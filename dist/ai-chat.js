!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).AiChat={})}(this,(function(t){"use strict";function e(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,n)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var h;const d=window,c=d.trustedTypes,p=c?c.emptyScript:"",u=d.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},m=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:m},f="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=v){var i;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:g).toAttribute(e,s.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:g;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var $;y[f]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:y}),(null!==(h=d.reactiveElementVersions)&&void 0!==h?h:d.reactiveElementVersions=[]).push("1.6.3");const b=window,_=b.trustedTypes,A=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,E="?"+w,S=`<${E}>`,C=document,T=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,I="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,O=/>/g,H=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,R=/"/g,D=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),B=new WeakMap,V=C.createTreeWalker(C,129,null,!1);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const W=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=M;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,l=o.exec(s),null!==l);)d=o.lastIndex,o===M?"!--"===l[1]?o=U:void 0!==l[1]?o=O:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=null!=n?n:M,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?H:'"'===l[3]?R:N):o===R||o===N?o=H:o===U||o===O?o=M:(o=H,n=void 0);const c=o===H&&t[e+1].startsWith("/>")?" ":"";r+=o===M?s+S:h>=0?(i.push(a),s.slice(0,h)+x+s.slice(h)+w+c):s+w+(-2===h?(i.push(void 0),e):c)}return[q(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=W(t,e);if(this.el=J.createElement(l,s),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=V.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(x)||e.startsWith(w)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+x).split(w),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?Q:"@"===e[1]?tt:X})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(D.test(i.tagName)){const t=i.textContent.split(w),e=t.length-1;if(e>0){i.textContent=_?_.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),V.nextNode(),a.push({type:2,index:++n});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===E)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(w,t+1));)a.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){var n,r,o,a;if(e===L)return e;let l=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const h=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(a=s)._$Co)&&void 0!==o?o:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=K(t,l._$AS(t,e.values),l,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(s,!0);V.currentNode=n;let r=V.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new F(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new et(r,this,t)),this._$AV.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=V.nextNode(),o++)}return V.currentNode=C,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class F{constructor(t,e,s,i){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),k(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(q(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new Y(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new J(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new F(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,s,i,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=K(this,i[s+o],e,o),a===L&&(a=this._$AH[o]),r||(r=!k(a)||a!==this._$AH[o]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const G=_?_.emptyScript:"";class Q extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class tt extends X{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=K(this,t,e,0))&&void 0!==s?s:z)===L)return;const i=this._$AH,n=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==z&&(i===z||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=b.litHtmlPolyfillSupport;null==st||st(J,F),(null!==($=b.litHtmlVersions)&&void 0!==$?$:b.litHtmlVersions=[]).push("2.8.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var it,nt;class rt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new F(e.insertBefore(T(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}rt.finalized=!0,rt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:rt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:rt}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.3");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function ht(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):lt(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}function dt(t){return ht({...t,state:!0})}
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;class pt extends Error{constructor(t,e,s){super(e),this.status=t,this.details=s,this.name="HttpError"}}class ut{constructor(t={}){this.requestTimeout=1e4,this.requestInterceptors=[],this.cache=new Map,this.cacheTTL=3e5,this.baseUrl=t.baseUrl||"https://easybot.private.dataplatform.link/",this.token=t.token||"app-YX12rgf0CVRSXdtd4txQNOjy"}static getInstance(t){return ut.instance||(ut.instance=new ut(t)),ut.instance}setToken(t){this.token=t}addRequestInterceptor(t){this.requestInterceptors.push(t)}applyInterceptors(t){return this.requestInterceptors.reduce(((t,e)=>e(t)),t)}async get(t,e){if((null==e?void 0:e.cache)&&this.cache.has(t)){const e=this.cache.get(t);if(Date.now()-e.timestamp<this.cacheTTL)return e.data}const s=new AbortController,i=setTimeout((()=>s.abort()),(null==e?void 0:e.timeout)||this.requestTimeout);try{let i={signal:s.signal,headers:{Authorization:`Bearer ${this.token}`}};i=this.applyInterceptors(i);const n=await fetch(`${this.baseUrl}${t}`,i),r=await this.handleResponse(n);return(null==e?void 0:e.cache)&&this.cache.set(t,{data:r,timestamp:Date.now()}),r}catch(t){if(t instanceof DOMException&&"AbortError"===t.name)throw new pt(408,"Request timeout");throw t}finally{clearTimeout(i)}}async post(t,e,s){const i=new AbortController,n=setTimeout((()=>i.abort()),(null==s?void 0:s.timeout)||this.requestTimeout);try{let n={method:"POST",signal:i.signal,headers:Object.assign({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},null==s?void 0:s.headers),body:JSON.stringify(e)};n=this.applyInterceptors(n);const r=await fetch(`${this.baseUrl}${t}`,n);return this.handleResponse(r)}catch(t){if(t instanceof DOMException&&"AbortError"===t.name)throw new pt(408,"Request timeout");throw t}finally{clearTimeout(n)}}async handleResponse(t){if(!t.ok){const e=await t.json().catch((()=>({status:t.status,statusText:t.statusText})));throw new pt(t.status,e.message||t.statusText,e.errors||void 0)}return t.json()}}const gt=ut.getInstance();const mt=new class{constructor(){this.basePath="v1/chat-messages"}async sendMessage({body:t,message:e,conversationId:s,headers:i}){return await gt.post(`${this.basePath}`,{inputs:t.inputs,query:e,response_mode:"blocking",conversation_id:s||void 0,user:t.user},{headers:i})}},vt=a`
	.header {
		background-color: #3e415b;
		padding: 8px;
	}

	.chat-title {
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		color: #ffffff;
	}

	.chat-subtitle {
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: #f5f8fc;
	}
`,ft=a`
	:host {
		display: block;
		font-family: Inter, sans-serif;
		overflow: hidden;
	}

	/* OR target specific elements */
	p,
	h1,
	h2,
	h3 {
		margin-block-start: 0;
		margin-block-end: 0;
	}
`;let yt=class extends rt{render(){return j`
			<div class="header">
				<h2 class="chat-title">Chat with Easybot</h2>
				<p class="chat-subtitle">Get help 24/7</p>
			</div>
		`}};
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
function $t(t,e,s){return t?e():null==s?void 0:s()}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */yt.styles=[ft,vt],yt=e([at("chat-header")],yt);const bt=2;class _t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class At extends _t{constructor(t){if(super(t),this.et=z,t.type!==bt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||null==t)return this.ft=void 0,this.et=t;if(t===L)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}At.directiveName="unsafeHTML",At.resultType=1;const xt=(t=>(...e)=>({_$litDirective$:t,values:e}))(At),wt=a`
	.chat-timestamp-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		margin-top: 148px;
		margin-bottom: 32px;
	}

	.timestamp-left-line {
		background: linear-gradient(
			90deg,
			rgba(178, 202, 231, 0.5) 0.68%,
			rgba(181, 205, 247, 0.15) 97.3%
		);
		height: 2px;
		width: 100px;
	}

	.timestamp {
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #4f585e;
	}

	.timestamp-right-line {
		height: 2px;
		width: 100px;
		background: linear-gradient(
			90deg,
			rgba(178, 202, 231, 0.5) 0.68%,
			rgba(181, 205, 247, 0.15) 97.3%
		);
	}
`;let Et=class extends rt{constructor(){super(...arguments),this.timestamp=""}get displayTimestamp(){return new Intl.DateTimeFormat(navigator.language,{hour:"2-digit",minute:"2-digit"}).format(this.date)}render(){return j`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">Today • ${this.displayTimestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`}};Et.styles=[ft,wt],e([ht({type:String})],Et.prototype,"timestamp",void 0),e([ht({type:Date})],Et.prototype,"date",void 0),Et=e([at("timestamp-divider")],Et);const St=a`
	.chat-container {
		background-color: #ffffff;
		padding: 0 16px;
		overflow-y: auto;
		height: calc(100vh - 150px);
	}

	.bot-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

	.user-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

	.bot-message-content {
		display: flex;
		gap: 8px;
	}

	.bot-message {
		border-top-left-radius: 2px;
		border-top-right-radius: 16px;
		border-bottom-right-radius: 16px;
		border-bottom-left-radius: 16px;
		border-width: 1px;
		border: 1px solid #e6ebf4;
		padding: 12px;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #30363c;
	}

	.user-message {
		width: 146px;
		border-top-left-radius: 16px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 16px;
		border-bottom-left-radius: 16px;
		border-width: 1px;
		padding: 12px;
		border: 1px solid #b5cdf7;
		background-color: #ebf2ff;
		color: #30363c;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
	}

	.user-message-content {
		display: flex;
		gap: 8px;
		justify-content: flex-end;
	}
	.user-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

	.bot-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		text-align: left;
		margin-left: 48px;
		color: #6e787e;
	}

	.user-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		text-align: right;
		color: #6e787e;
	}
`;let Ct=class extends rt{constructor(){super(...arguments),this.isNewConversation=!0,this.messages=[],this.loading=!1}render(){return j`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${this.messages.map((t=>this.renderMessage(t)))}
				${this.renderLoadingIndicator()}
			</div>
		`}renderTimestampDivider(){return $t(this.isNewConversation,(()=>j`
				<timestamp-divider
					.date=${new Date}
					.showFullDate=${!0}
				></timestamp-divider>
			`))}renderMessage(t){return $t("bot"===t.sender,(()=>j`
				<div class="bot-message-container">
					<div class="bot-message-content">
						<img
							src="https://assets.pharmeasy.in/web-assets/images/image_chatbot.png"
							alt="bot"
							width="40"
							height="40"
						/>
						<div class="bot-message">${xt(t.text)}</div>
					</div>
					<div class="bot-timestamp">${t.time}</div>
				</div>
			`),(()=>j`
				<div class="user-message-container">
					<div class="user-message-content">
						<div class="user-message">${t.text}</div>
					</div>
					<div class="user-timestamp">${t.time}</div>
				</div>
			`))}renderLoadingIndicator(){return this.loading?j`<div class="bot-message-container">
					<div class="bot-message-content">
						<img
							src="https://assets.pharmeasy.in/web-assets/images/image_chatbot.png"
							alt="bot"
							width="40"
							height="40"
						/>
						<div class="bot-message">
							<loading-dots></loading-dots>
						</div>
					</div>
			  </div>`:null}};Ct.styles=[ft,St],e([dt()],Ct.prototype,"isNewConversation",void 0),e([ht({type:Array})],Ct.prototype,"messages",void 0),e([ht({type:Boolean})],Ct.prototype,"loading",void 0),Ct=e([at("chat-message-list")],Ct);const Tt=a`
	.input-area {
		display: flex;
		padding: 16px;
		background-color: white;
		position: sticky;
		bottom: 0;
		background-color: #ebf2ff;
		box-shadow: 0px 0px 4px 0px #0000000f;
		border-top: 1px solid #e6ebf4;
		gap: 12px;
		align-items: center;
	}

	.chat-input {
		flex-grow: 1;
		padding: 16px;
		border: 1px solid #e6ebf4;
		border-width: 1px;
		border-radius: 16px;

		outline: none;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: #8897a2;
	}

	.chat-input::placeholder {
		color: #8897a2;
	}

	.send-btn {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		display: flex;
	}

	.send-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;let kt=class extends rt{constructor(){super(...arguments),this.inputValue=""}render(){return j`
			<div class="input-area">
				<input
					type="text"
					placeholder="Type your query here"
					.value=${this.inputValue}
					@input=${this.handleInput}
					@keypress=${this.handleKeyPress}
					class="chat-input"
				/>
				<button
					@click=${this.handleSendClick}
					?disabled=${!this.inputValue.trim()}
					class="send-btn"
				>
					<img
						src="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg"
						width="40"
						height="40"
					/>
				</button>
			</div>
		`}handleInput(t){this.inputValue=t.target.value}handleKeyPress(t){"Enter"===t.key&&this.inputValue.trim()&&this.emitSendMessage()}handleSendClick(){this.emitSendMessage()}emitSendMessage(){this.dispatchEvent(new CustomEvent("send-message",{detail:{text:this.inputValue},bubbles:!0,composed:!0})),this.inputValue=""}};kt.styles=[ft,Tt],e([dt()],kt.prototype,"inputValue",void 0),kt=e([at("chat-input")],kt);const Pt=a`
	:host {
		display: inline-flex;
	}

	.loader {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dot {
		width: 4px;
		height: 4px;
		margin: 0 4px;
		border-radius: 50%;
		background-color: #3e415b; /* Change color as needed */
		animation: bounce 0.6s infinite alternate;
	}

	.dot:nth-child(2) {
		animation-delay: 0.2s;
	}

	.dot:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-10px); /* Adjust bounce height */
		}
	}
`;let It=class extends rt{render(){return j`
			<div class="loader">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		`}};It.styles=Pt,It=e([at("loading-dots")],It),t.AIChat=class extends rt{constructor(){super(),this.isLoading=!1,this.chatbotData={},this.messages=[{sender:"bot",text:"Hi Manthan, I am easybot. I am here to help you with your concern",time:this.getCurrentTime()},{sender:"user",text:"Hi Manthan, I am easybot. I am here to help you with your concern",time:this.getCurrentTime()}],this.conversationId="4bb91e16-7a12-44ee-9b16-25c9bddeb2da",this.chatbotData=JSON.parse(sessionStorage.getItem("chatbotData")||"{}")}render(){return j`
			<chat-header></chat-header>
			<chat-message-list
				.messages=${this.messages}
				.loading=${this.isLoading}
			></chat-message-list>
			<chat-input @send-message=${this.handleSendMessage}></chat-input>
		`}async handleSendMessage(t){this.isLoading=!0;const e=t.detail.text;this.addMessage({sender:"user",text:e,time:this.getCurrentTime()});try{const t=await mt.sendMessage({body:this.chatbotData.chatAPI.body,message:e,conversationId:this.conversationId});this.conversationId=t.conversation_id;const s=JSON.parse(t.answer).assistantLastMessage||"Sorry, I encountered an error. Please try again.";this.addMessage({sender:"bot",text:s,time:this.getCurrentTime()})}catch(t){this.addMessage({sender:"bot",text:"Sorry, I encountered an error. Please try again.",time:this.getCurrentTime()})}finally{this.isLoading=!1}}addMessage(t){this.messages=[...this.messages,t],this.requestUpdate(),this.scrollToBottom()}async scrollToBottom(){await this.updateComplete;const t=this.shadowRoot;if(!t)return;const e=t.querySelector("chat-message-list");if(!e)return;const s=e.shadowRoot;if(!s)return;const i=s.querySelector(".chat-container");i&&(i.scrollTo({top:i.scrollHeight,behavior:"smooth"}),i.scrollTop=i.scrollHeight)}getCurrentTime(){return(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}},t.AIChat.styles=[ft],e([ht({type:Object})],t.AIChat.prototype,"apiBody",void 0),e([dt()],t.AIChat.prototype,"isLoading",void 0),e([dt()],t.AIChat.prototype,"chatbotData",void 0),e([dt()],t.AIChat.prototype,"messages",void 0),e([dt()],t.AIChat.prototype,"conversationId",void 0),t.AIChat=e([at("ai-chat")],t.AIChat),Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=ai-chat.js.map
