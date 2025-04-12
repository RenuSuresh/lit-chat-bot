function t(t,e,s,i){var o,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,s,n):o(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window,d=h.trustedTypes,c=d?d.emptyScript:"",p=h.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g},v="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=m){var i;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:u).toAttribute(e,s.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:u;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;f[v]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.3");const $=window,b=$.trustedTypes,_=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,C="?"+A,w=`<${C}>`,S=document,E=()=>S.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,k="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,O=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,R=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),D=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),j=new WeakMap,z=S.createTreeWalker(S,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}const q=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":"",n=I;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===I?"!--"===l[1]?n=P:void 0!==l[1]?n=U:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=null!=o?o:I,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?O:'"'===l[3]?N:H):n===N||n===H?n=O:n===P||n===U?n=I:(n=O,o=void 0);const c=n===O&&t[e+1].startsWith("/>")?" ":"";r+=n===I?s+w:h>=0?(i.push(a),s.slice(0,h)+x+s.slice(h)+A+c):s+A+(-2===h?(i.push(void 0),e):c)}return[V(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class F{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,h]=q(t,e);if(this.el=F.createElement(l,s),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=z.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(x)||e.startsWith(A)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+x).split(A),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?G:"@"===e[1]?Q:Y})}else a.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(R.test(i.tagName)){const t=i.textContent.split(A),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),z.nextNode(),a.push({type:2,index:++o});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function W(t,e,s=t,i){var o,r,n,a;if(e===D)return e;let l=void 0!==i?null===(o=s._$Co)||void 0===o?void 0:o[i]:s._$Cl;const h=T(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(n=(a=s)._$Co)&&void 0!==n?n:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);z.currentNode=o;let r=z.nextNode(),n=0,a=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new K(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this._$AV.push(e),l=i[++a]}n!==(null==l?void 0:l.index)&&(r=z.nextNode(),n++)}return z.currentNode=S,o}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class K{constructor(t,e,s,i){var o;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),T(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(V(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(s);else{const t=new J(o,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new F(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new K(this.k(E()),this.k(E()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,s,i,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=W(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=W(this,i[s+n],e,n),a===D&&(a=this._$AH[n]),r||(r=!T(a)||a!==this._$AH[n]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!i&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const Z=b?b.emptyScript:"";class G extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends Y{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=W(this,t,e,0))&&void 0!==s?s:L)===D)return;const i=this._$AH,o=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const et=$.litHtmlPolyfillSupport;null==et||et(F,K),(null!==(y=$.litHtmlVersions)&&void 0!==y?y:$.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,it;class ot extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,o;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new K(e.insertBefore(E(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}ot.finalized=!0,ot._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:ot});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:ot}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function lt(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):at(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ht(t){return lt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;class ct extends Error{constructor(t,e,s){super(e),this.status=t,this.details=s,this.name="HttpError"}}class pt{constructor(t={}){this.requestTimeout=1e4,this.requestInterceptors=[],this.cache=new Map,this.cacheTTL=3e5,this.baseUrl=t.baseUrl||"https://easybot.private.dataplatform.link/",this.token=t.token||"app-YX12rgf0CVRSXdtd4txQNOjy"}static getInstance(t){return pt.instance||(pt.instance=new pt(t)),pt.instance}setToken(t){this.token=t}addRequestInterceptor(t){this.requestInterceptors.push(t)}applyInterceptors(t){return this.requestInterceptors.reduce(((t,e)=>e(t)),t)}async get(t,e){if((null==e?void 0:e.cache)&&this.cache.has(t)){const e=this.cache.get(t);if(Date.now()-e.timestamp<this.cacheTTL)return e.data}const s=new AbortController,i=setTimeout((()=>s.abort()),(null==e?void 0:e.timeout)||this.requestTimeout);try{let i={signal:s.signal,headers:{Authorization:`Bearer ${this.token}`}};i=this.applyInterceptors(i);const o=await fetch(`${this.baseUrl}${t}`,i),r=await this.handleResponse(o);return(null==e?void 0:e.cache)&&this.cache.set(t,{data:r,timestamp:Date.now()}),r}catch(t){if(t instanceof DOMException&&"AbortError"===t.name)throw new ct(408,"Request timeout");throw t}finally{clearTimeout(i)}}async post(t,e,s){const i=new AbortController,o=setTimeout((()=>i.abort()),(null==s?void 0:s.timeout)||this.requestTimeout);try{let o={method:"POST",signal:i.signal,headers:Object.assign({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},null==s?void 0:s.headers),body:JSON.stringify(e)};o=this.applyInterceptors(o);const r=await fetch(`${this.baseUrl}${t}`,o);return this.handleResponse(r)}catch(t){if(t instanceof DOMException&&"AbortError"===t.name)throw new ct(408,"Request timeout");throw t}finally{clearTimeout(o)}}async handleResponse(t){if(!t.ok){const e=await t.json().catch((()=>({status:t.status,statusText:t.statusText})));throw new ct(t.status,e.message||t.statusText,e.errors||void 0)}return t.json()}}const ut=pt.getInstance();const gt=new class{constructor(){this.basePath="v1/chat-messages"}async sendMessage({body:t,message:e,conversationId:s,headers:i}){return await ut.post(`${this.basePath}`,{inputs:t.inputs,query:e,response_mode:"blocking",conversation_id:s||void 0,user:t.user},{headers:i})}},mt=n`
	.header {
		background-color: var(--header-bg-color);
		padding: 8px;
		display: flex;
	}

	.chat-title-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: calc(100% - 24px);
	}

	.chat-title {
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		color: var(--header-title-color);
	}

	.chat-subtitle {
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: var(--header-subtitle-color);
	}
`,vt=n`
	:host {
		display: block;
		font-family: var(--font-family);
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
`;let ft=class extends ot{constructor(){super(...arguments),this.closeChatIcon=""}handleCloseChat(){var t;null===(t=this.onCloseChat)||void 0===t||t.call(this)}render(){return B`
			<div class="header">
				<img
					src=${this.closeChatIcon}
					alt="close"
					width="24"
					height="24"
					@click=${this.handleCloseChat}
				/>
				<div class="chat-title-container">
					<h2 class="chat-title">Chat with Easybot</h2>
					<p class="chat-subtitle">Get help 24/7</p>
				</div>
			</div>
		`}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function yt(t,e,s){return t?e():null==s?void 0:s()}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ft.styles=[vt,mt],t([lt({type:String})],ft.prototype,"closeChatIcon",void 0),t([lt({attribute:!1})],ft.prototype,"onCloseChat",void 0),ft=t([nt("chat-header")],ft);const $t=2;class bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _t extends bt{constructor(t){if(super(t),this.et=L,t.type!==$t)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||null==t)return this.ft=void 0,this.et=t;if(t===D)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}_t.directiveName="unsafeHTML",_t.resultType=1;const xt=(t=>(...e)=>({_$litDirective$:t,values:e}))(_t),At=n`
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
`;let Ct=class extends ot{constructor(){super(...arguments),this.timestamp=""}get displayTimestamp(){return new Intl.DateTimeFormat(navigator.language,{hour:"2-digit",minute:"2-digit"}).format(this.date)}render(){return B`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">Today • ${this.displayTimestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`}};Ct.styles=[vt,At],t([lt({type:String})],Ct.prototype,"timestamp",void 0),t([lt({type:Date})],Ct.prototype,"date",void 0),Ct=t([nt("timestamp-divider")],Ct);const wt=n`
	.chat-container {
		background-color: var(--message-container-bg-color);
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
		border-radius: 2px 16px 16px 16px;
		border-width: 1px;
		border: 1px solid var(--bot-msg-border-color);
		padding: 12px;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: var(--bot-msg-text-color);
		background-color: var(--bot-msg-bg-color);
		width: calc(100% - 100px);
	}

	.user-message {
		border-radius: 16px 2px 16px 16px;
		border-width: 1px;
		padding: 12px;
		border: 1px solid var(--user-msg-border-color);
		background-color: var(--user-msg-bg-color);
		color: var(--user-msg-text-color);
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		width: calc(100% - 100px);
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
`;let St=class extends ot{constructor(){super(...arguments),this.isNewConversation=!0,this.messages=[],this.loading=!1,this.botImage="https://assets.pharmeasy.in/web-assets/images/image_chatbot.png"}render(){return B`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${this.messages.map((t=>this.renderMessage(t)))}
				${this.renderLoadingIndicator()}
			</div>
		`}renderTimestampDivider(){return yt(this.isNewConversation,(()=>B`
				<timestamp-divider
					.date=${new Date}
					.showFullDate=${!0}
				></timestamp-divider>
			`))}renderMessage(t){return yt("bot"===t.sender,(()=>B`
				<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">${xt(t.text)}</div>
					</div>
					<div class="bot-timestamp">${t.time}</div>
				</div>
			`),(()=>B`
				<div class="user-message-container">
					<div class="user-message-content">
						<div class="user-message">${t.text}</div>
					</div>
					<div class="user-timestamp">${t.time}</div>
				</div>
			`))}renderLoadingIndicator(){return this.loading?B`<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">
							<loading-dots></loading-dots>
						</div>
					</div>
			  </div>`:null}};St.styles=[vt,wt],t([ht()],St.prototype,"isNewConversation",void 0),t([lt({type:Array})],St.prototype,"messages",void 0),t([lt({type:Boolean})],St.prototype,"loading",void 0),t([lt({type:String})],St.prototype,"botImage",void 0),St=t([nt("chat-message-list")],St);const Et=n`
	.input-area {
		display: flex;
		padding: 16px;
		background-color: #ffffff;
		position: sticky;
		bottom: 0;
		background-color: var(--input-background-color);
		box-shadow: 0px 0px 4px 0px #0000000f;
		border-top: 1px solid var(--border-color);
		gap: 12px;
		align-items: center;
	}

	.chat-input {
		flex-grow: 1;
		padding: 16px;
		border: 1px solid var(--border-color);
		border-width: 1px;
		border-radius: 16px;

		outline: none;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: var(--input-text-color);
	}

	.chat-input::placeholder {
		color: var(--placeholder-text-color);
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
`;let Tt=class extends ot{constructor(){super(...arguments),this.inputValue="",this.sendMsgEnableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg",this.sendMsgDisableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg"}render(){return B`
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
					<img src=${this.sendMsgEnableImage} width="40" height="40" />
				</button>
			</div>
		`}handleInput(t){this.inputValue=t.target.value}handleKeyPress(t){"Enter"===t.key&&this.inputValue.trim()&&this.emitSendMessage()}handleSendClick(){this.emitSendMessage()}emitSendMessage(){this.dispatchEvent(new CustomEvent("send-message",{detail:{text:this.inputValue},bubbles:!0,composed:!0})),this.inputValue=""}};Tt.styles=[vt,Et],t([ht()],Tt.prototype,"inputValue",void 0),t([lt({type:String})],Tt.prototype,"sendMsgEnableImage",void 0),t([lt({type:String})],Tt.prototype,"sendMsgDisableImage",void 0),Tt=t([nt("chat-input")],Tt);const Mt=n`
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
		background-color: var(--loader-color);
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
			transform: translateY(-10px);
		}
	}
`;let kt=class extends ot{render(){return B`
			<div class="loader">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		`}};kt.styles=Mt,kt=t([nt("loading-dots")],kt);let It=class extends ot{constructor(){super(),this.botImage="",this.sendMsgEnableImage="",this.sendMsgDisableImage="",this.closeChatIcon="https://assets.pharmeasy.in/web-assets/images/ic_close.svg",this.showCloseButton=!1,this.buttonLabel="Close",this.theme={fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"},this.isLoading=!1,this.chatbotData={},this.messages=[{sender:"bot",text:"Hi Manthan, I am easybot. I am here to help you with your concern",time:this.getCurrentTime()},{sender:"user",text:"Hi Manthan, I am easybot. I am here to help you with your concern",time:this.getCurrentTime()}],this.conversationId="",this._handlePageClose=()=>{var t;null===(t=this.onCloseChat)||void 0===t||t.call(this)},this.chatbotData=JSON.parse(sessionStorage.getItem("chatbotData")||"{}")}async handleSendMessage(t){this.isLoading=!0;const e=t.detail.text;this.addMessage({sender:"user",text:e,time:this.getCurrentTime()});try{const t=await gt.sendMessage({body:this.chatbotData.chatAPI.body,message:e,conversationId:this.conversationId});this.conversationId=t.conversation_id;const s=JSON.parse(t.answer).assistantLastMessage||"Sorry, I encountered an error. Please try again.";this.addMessage({sender:"bot",text:s,time:this.getCurrentTime()})}catch(t){this.addMessage({sender:"bot",text:"Sorry, I encountered an error. Please try again.",time:this.getCurrentTime()})}finally{this.isLoading=!1}}addMessage(t){this.messages=[...this.messages,t],this.requestUpdate(),this.scrollToBottom()}async scrollToBottom(){await this.updateComplete;const t=this.shadowRoot;if(!t)return;const e=t.querySelector("chat-message-list");if(!e)return;const s=e.shadowRoot;if(!s)return;const i=s.querySelector(".chat-container");i&&(i.scrollTo({top:i.scrollHeight,behavior:"smooth"}),i.scrollTop=i.scrollHeight)}getCurrentTime(){return(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}render(){return B`
			<style>
				:host {
					--font-family: ${this.theme.fontFamily};
					--header-bg-color: ${this.theme.headerBgColor};
					--header-title-color: ${this.theme.headerTitleColor};
					--header-subtitle-color: ${this.theme.headerSubtitleColor};

					--message-bg-color: ${this.theme.messageContainerBgColor};
					--loader-color: ${this.theme.loaderColor};

					--input-background-color: ${this.theme.inputBackgroundColor};
					--input-border-color: ${this.theme.inputBorderColor};
					--placeholder-text-color: ${this.theme.placeholderTextColor};
					--input-text-color: ${this.theme.inputTextColor};

					--bot-msg-bg-color: ${this.theme.botMsgBgColor};
					--bot-msg-border-color: ${this.theme.botMsgBorderColor};
					--bot-msg-text-color: ${this.theme.botMsgTextColor};

					--user-msg-bg-color: ${this.theme.userMsgBgColor};
					--user-msg-text-color: ${this.theme.userMsgTextColor};
					--user-msg-border-color: ${this.theme.userMsgBorderColor};
				}
			</style>
			<chat-header
				.closeChatIcon=${this.closeChatIcon}
				.onCloseChat=${this._handlePageClose}
			></chat-header>
			<chat-message-list
				.messages=${this.messages}
				.loading=${this.isLoading}
				.botImage=${this.botImage}
			></chat-message-list>
			<chat-input @send-message=${this.handleSendMessage}></chat-input>
		`}};It.styles=[vt],t([lt({type:Object})],It.prototype,"apiBody",void 0),t([lt({type:String})],It.prototype,"botImage",void 0),t([lt({type:String})],It.prototype,"sendMsgEnableImage",void 0),t([lt({type:String})],It.prototype,"sendMsgDisableImage",void 0),t([lt({type:String})],It.prototype,"closeChatIcon",void 0),t([lt({attribute:!1})],It.prototype,"onCloseChat",void 0),t([lt({type:Boolean,attribute:"show-close-button"})],It.prototype,"showCloseButton",void 0),t([lt({type:String,attribute:"button-label"})],It.prototype,"buttonLabel",void 0),t([lt({type:Object})],It.prototype,"theme",void 0),t([ht()],It.prototype,"isLoading",void 0),t([ht()],It.prototype,"chatbotData",void 0),t([ht()],It.prototype,"messages",void 0),t([ht()],It.prototype,"conversationId",void 0),It=t([nt("ai-chat")],It);export{It as AIChat};
//# sourceMappingURL=ai-chat.esm.js.map
