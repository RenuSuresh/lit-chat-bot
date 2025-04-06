!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).AiChatBot={})}(this,(function(t){"use strict";function e(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,o)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var h;const d=window,c=d.trustedTypes,p=c?c.emptyScript:"",u=d.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_},f="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),o=i.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var y;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(h=d.reactiveElementVersions)&&void 0!==h?h:d.reactiveElementVersions=[]).push("1.6.3");const m=window,A=m.trustedTypes,b=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,x="?"+S,w=`<${x}>`,C=document,P=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,M=/"/g,B=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),z=new WeakMap,D=C.createTreeWalker(C,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===H?"!--"===a[1]?n=O:void 0!==a[1]?n=N:void 0!==a[2]?(B.test(a[2])&&(o=RegExp("</"+a[2],"g")),n=R):void 0!==a[3]&&(n=R):n===R?">"===a[0]?(n=null!=o?o:H,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?R:'"'===a[3]?M:I):n===M||n===I?n=R:n===O||n===N?n=H:(n=R,o=void 0);const c=n===R&&t[e+1].startsWith("/>")?" ":"";r+=n===H?i+w:h>=0?(s.push(l),i.slice(0,h)+E+i.slice(h)+S+c):i+S+(-2===h?(s.push(void 0),e):c)}return[W(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,l=this.parts,[a,h]=K(t,e);if(this.el=q.createElement(a,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(E)||e.startsWith(S)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+E).split(S),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?Y:"@"===e[1]?tt:G})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(B.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),D.nextNode(),l.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===x)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)l.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){var o,r,n,l;if(e===j)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=k(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(n=(l=i)._$Co)&&void 0!==n?n:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=J(t,a._$AS(t,e.values),a,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);D.currentNode=o;let r=D.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new F(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new et(r,this,t)),this._$AV.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(r=D.nextNode(),n++)}return D.currentNode=C,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var o;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),k(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(W(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Z(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new q(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new F(this.k(P()),this.k(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=J(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const s=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=J(this,s[i+n],e,n),l===j&&(l=this._$AH[n]),r||(r=!k(l)||l!==this._$AH[n]),l===V?t=V:t!==V&&(t+=(null!=l?l:"")+o[n+1]),this._$AH[n]=l}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const X=A?A.emptyScript:"";class Y extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class tt extends G{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=J(this,t,e,0))&&void 0!==i?i:V)===j)return;const s=this._$AH,o=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==V&&(s===V||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const it=m.litHtmlPolyfillSupport;null==it||it(q,F),(null!==(y=m.litHtmlVersions)&&void 0!==y?y:m.litHtmlVersions=[]).push("2.8.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var st,ot;class rt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new F(e.insertBefore(P(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}rt.finalized=!0,rt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:rt});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:rt}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ht(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):at(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}function dt(t){return ht({...t,state:!0})}
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;let pt=class extends rt{constructor(){super(...arguments),this.text="",this.sender="user"}render(){return L` <div class="message ${this.sender}">${this.text}</div> `}};pt.styles=l`
		:host {
			display: block;
			margin-bottom: 12px;
		}
		.message {
			max-width: 80%;
			padding: 8px 12px;
			border-radius: 18px;
			margin: 4px 0;
			word-wrap: break-word;
		}
		.user {
			background-color: #007bff;
			color: white;
			margin-left: auto;
			border-bottom-right-radius: 4px;
		}
		.bot {
			background-color: #f1f1f1;
			color: #333;
			margin-right: auto;
			border-bottom-left-radius: 4px;
		}
	`,e([ht({type:String})],pt.prototype,"text",void 0),e([ht({type:String})],pt.prototype,"sender",void 0),pt=e([lt("chat-message")],pt);const ut=l`
	:host {
		display: block;
		font-family: Arial, sans-serif;
		--primary-color: #007bff;
		--border-radius: 8px;
	}

	.chat-container {
		display: flex;
		flex-direction: column;
		height: 500px;
		max-width: 600px;
		margin: 0 auto;
		border: 1px solid #ddd;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.chat-header {
		background-color: var(--primary-color);
		color: white;
		padding: 15px;
		text-align: center;
	}

	.messages-container {
		flex: 1;
		padding: 15px;
		overflow-y: auto;
		background-color: #f9f9f9;
	}

	.loading {
		color: #666;
		font-style: italic;
		padding: 8px 0;
		text-align: center;
	}

	.input-container {
		display: flex;
		padding: 10px;
		background-color: white;
		border-top: 1px solid #ddd;
	}

	input {
		flex: 1;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: var(--border-radius);
		margin-right: 10px;
		outline: none;
	}

	input:focus {
		border-color: var(--primary-color);
	}

	button {
		padding: 10px 20px;
		background-color: var(--primary-color);
		color: white;
		border: none;
		border-radius: var(--border-radius);
		cursor: pointer;
	}

	button:hover {
		background-color: #0069d9;
	}

	button:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}
`;t.AIChatBot=class extends rt{constructor(){super(...arguments),this.apiUrl="",this.title="AI Assistant",this.placeholder="Type your message...",this._messages=[],this._inputValue="",this._isLoading=!1}render(){return L`
			<div class="chat-container">
				<div class="chat-header">
					<h2>${this.title}</h2>
				</div>

				<div class="messages-container">
					${this._messages.map((t=>L`
							<chat-message
								.text=${t.text}
								.sender=${t.sender}
							></chat-message>
						`))}
					${this._isLoading?L`<div class="loading">Bot is typing...</div>`:""}
				</div>

				<div class="input-container">
					<input
						type="text"
						.value=${this._inputValue}
						@input=${this._handleInput}
						@keydown=${this._handleKeyDown}
						placeholder=${this.placeholder}
						?disabled=${this._isLoading}
					/>
					<button
						@click=${this._sendMessage}
						?disabled=${!this._inputValue.trim()||this._isLoading}
					>
						Send
					</button>
				</div>
			</div>
		`}_handleInput(t){this._inputValue=t.target.value}_handleKeyDown(t){"Enter"===t.key&&this._inputValue.trim()&&this._sendMessage()}async _sendMessage(){const t=this._inputValue.trim();if(t){this._messages=[...this._messages,{text:t,sender:"user"}],this._inputValue="",this._isLoading=!0;try{const e=await this._getAIResponse(t);this._messages=[...this._messages,{text:e,sender:"bot"}]}catch(t){console.error("Error getting AI response:",t),this._messages=[...this._messages,{text:"Sorry, I encountered an error. Please try again.",sender:"bot"}]}finally{this._isLoading=!1}}}async _getAIResponse(t){if(!this.apiUrl)return new Promise((e=>{setTimeout((()=>{e(`This is a mock response to: "${t}"`)}),1e3)}));const e=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t})});if(!e.ok)throw new Error(`API request failed with status ${e.status}`);return(await e.json()).reply}},t.AIChatBot.styles=ut,e([ht({type:String})],t.AIChatBot.prototype,"apiUrl",void 0),e([ht({type:String})],t.AIChatBot.prototype,"title",void 0),e([ht({type:String})],t.AIChatBot.prototype,"placeholder",void 0),e([dt()],t.AIChatBot.prototype,"_messages",void 0),e([dt()],t.AIChatBot.prototype,"_inputValue",void 0),e([dt()],t.AIChatBot.prototype,"_isLoading",void 0),t.AIChatBot=e([lt("ai-chat-bot")],t.AIChatBot),Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=ai-chat-bot.js.map
