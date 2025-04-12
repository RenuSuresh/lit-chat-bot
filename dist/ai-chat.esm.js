function t(t,e,s,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)if(n=t[a])r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r;return o>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError==="function"?SuppressedError:function(t,e,s){var i=new Error(s);return i.name="SuppressedError",i.error=t,i.suppressed=e,i};const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const n=t=>new r("string"==typeof t?t:t+"",void 0,i),a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(s,t,i)},l=(t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}))},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return n(e)})(t):t;var d;const c=window,p=c.trustedTypes,u=p?p.emptyScript:"",g=c.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v},y="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=f){var i;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:m).toAttribute(e,s.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:m;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}$[y]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:$}),(null!==(d=c.reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.6.3");var b;const _=window,x=_.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,E="?"+w,S=`<${E}>`,T=document,M=()=>T.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,P=t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,H=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,j=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),z=j(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,W=T.createTreeWalker(T,129,null,!1);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":"",n=N;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=O:void 0!==l[1]?n=H:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=null!=o?o:N,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?R:'"'===l[3]?D:B):n===D||n===B?n=R:n===O||n===H?n=N:(n=R,o=void 0);const c=n===R&&t[e+1].startsWith("/>")?" ":"";r+=n===N?s+S:h>=0?(i.push(a),s.slice(0,h)+C+s.slice(h)+w+c):s+w+(-2===h?(i.push(void 0),e):c)}return[J(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,h]=K(t,e);if(this.el=Y.createElement(l,s),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=W.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(C)||e.startsWith(w)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+C).split(w),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?st:"@"===e[1]?it:Q})}else a.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(L.test(i.tagName)){const t=i.textContent.split(w),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),W.nextNode(),a.push({type:2,index:++o});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===E)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(w,t+1));)a.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){var o,r,n,a;if(e===V)return e;let l=void 0!==i?null===(o=s._$Co)||void 0===o?void 0:o[i]:s._$Cl;const h=I(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(n=(a=s)._$Co)&&void 0!==n?n:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=X(t,l._$AS(t,e.values),l,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(s,!0);W.currentNode=o;let r=W.nextNode(),n=0,a=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new G(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ot(r,this,t)),this._$AV.push(e),l=i[++a]}n!==(null==l?void 0:l.index)&&(r=W.nextNode(),n++)}return W.currentNode=T,o}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class G{constructor(t,e,s,i){var o;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):P(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(J(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(s);else{const t=new Z(o,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Y(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new G(this.k(M()),this.k(M()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,s,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=X(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=X(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),r||(r=!I(a)||a!==this._$AH[n]),a===q?t=q:t!==q&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const et=x?x.emptyScript:"";class st extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class it extends Q{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=X(this,t,e,0))&&void 0!==s?s:q)===V)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const rt=_.litHtmlPolyfillSupport;null==rt||rt(Y,G),(null!==(b=_.litHtmlVersions)&&void 0!==b?b:_.litHtmlVersions=[]).push("2.8.0");const nt=(t,e,s)=>{var i,o;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new G(e.insertBefore(M(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n};var at,lt;class ht extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return V}}ht.finalized=!0,ht._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ht});const dt=globalThis.litElementPolyfillSupport;null==dt||dt({LitElement:ht});(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.3");const ct=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e);const pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}},ut=(t,e,s)=>{e.constructor.createProperty(s,t)};function gt(t){return(e,s)=>void 0!==s?ut(t,e,s):pt(t,e)}function mt(t){return gt({...t,state:!0})}var vt;null!=(null===(vt=window.HTMLSlotElement)||void 0===vt?void 0:vt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));class ft extends Error{constructor(t,e,s){super(e);this.status=t;this.details=s;this.name="HttpError"}}class yt{constructor(t={}){this.requestTimeout=1e4;this.requestInterceptors=[];this.cache=new Map;this.cacheTTL=3e5;this.baseUrl=t.baseUrl||"https://easybot.private.dataplatform.link/";this.token=t.token||"app-YX12rgf0CVRSXdtd4txQNOjy"}static getInstance(t){if(!yt.instance)yt.instance=new yt(t);return yt.instance}setToken(t){this.token=t}addRequestInterceptor(t){this.requestInterceptors.push(t)}applyInterceptors(t){return this.requestInterceptors.reduce(((t,e)=>e(t)),t)}async get(t,e){if((e===null||e===void 0?void 0:e.cache)&&this.cache.has(t)){const e=this.cache.get(t);if(Date.now()-e.timestamp<this.cacheTTL)return e.data}const s=new AbortController;const i=setTimeout((()=>s.abort()),(e===null||e===void 0?void 0:e.timeout)||this.requestTimeout);try{let i={signal:s.signal,headers:{Authorization:`Bearer ${this.token}`}};i=this.applyInterceptors(i);const o=await fetch(`${this.baseUrl}${t}`,i);const r=await this.handleResponse(o);if(e===null||e===void 0?void 0:e.cache)this.cache.set(t,{data:r,timestamp:Date.now()});return r}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new ft(408,"Request timeout");throw t}finally{clearTimeout(i)}}async post(t,e,s){const i=new AbortController;const o=setTimeout((()=>i.abort()),(s===null||s===void 0?void 0:s.timeout)||this.requestTimeout);try{let o={method:"POST",signal:i.signal,headers:Object.assign({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},s===null||s===void 0?void 0:s.headers),body:JSON.stringify(e)};o=this.applyInterceptors(o);const r=await fetch(`${this.baseUrl}${t}`,o);return this.handleResponse(r)}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new ft(408,"Request timeout");throw t}finally{clearTimeout(o)}}async handleResponse(t){if(!t.ok){const e=await t.json().catch((()=>({status:t.status,statusText:t.statusText})));throw new ft(t.status,e.message||t.statusText,e.errors||void 0)}return t.json()}}const $t=yt.getInstance();class bt{constructor(){this.basePath="v1/chat-messages"}async sendMessage({body:t,message:e,conversationId:s,headers:i}){const o=await $t.post(`${this.basePath}`,{inputs:t.inputs,query:e,response_mode:"blocking",conversation_id:s||void 0,user:t.user},{headers:i});return o}}const _t=new bt;const xt=a`
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
`;const At=a`
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
`;let Ct=class t extends ht{constructor(){super(...arguments);this.closeChatIcon=""}handleCloseChat(){var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)}render(){return z`
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
		`}};Ct.styles=[At,xt];t([gt({type:String})],Ct.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],Ct.prototype,"onCloseChat",void 0);Ct=t([ct("chat-header")],Ct);function wt(t,e,s){return t?e():null==s?void 0:s()}const Et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},St=t=>(...e)=>({_$litDirective$:t,values:e});class Tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class Mt extends Tt{constructor(t){if(super(t),this.et=q,t.type!==Et.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this.ft=void 0,this.et=t;if(t===V)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Mt.directiveName="unsafeHTML",Mt.resultType=1;const It=St(Mt);const kt=a`
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
`;let Pt=class t extends ht{constructor(){super(...arguments);this.timestamp=""}get displayTimestamp(){const t={hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(navigator.language,t).format(this.date)}render(){return z`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">Today • ${this.displayTimestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`}};Pt.styles=[At,kt];t([gt({type:String})],Pt.prototype,"timestamp",void 0);t([gt({type:Date})],Pt.prototype,"date",void 0);Pt=t([ct("timestamp-divider")],Pt);const Ut=a`
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
`;let Nt=class t extends ht{constructor(){super(...arguments);this.isNewConversation=true;this.messages=[];this.loading=false;this.botImage="https://assets.pharmeasy.in/web-assets/images/image_chatbot.png"}render(){return z`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${this.messages.map((t=>this.renderMessage(t)))}
				${this.renderLoadingIndicator()}
			</div>
		`}renderTimestampDivider(){return wt(this.isNewConversation,(()=>z`
				<timestamp-divider
					.date=${new Date}
					.showFullDate=${true}
				></timestamp-divider>
			`))}renderMessage(t){return wt(t.sender==="bot",(()=>z`
				<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">${It(t.text)}</div>
					</div>
					<div class="bot-timestamp">${t.time}</div>
				</div>
			`),(()=>z`
				<div class="user-message-container">
					<div class="user-message-content">
						<div class="user-message">${t.text}</div>
					</div>
					<div class="user-timestamp">${t.time}</div>
				</div>
			`))}renderLoadingIndicator(){return this.loading?z`<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">
							<loading-dots></loading-dots>
						</div>
					</div>
			  </div>`:null}};Nt.styles=[At,Ut];t([mt()],Nt.prototype,"isNewConversation",void 0);t([gt({type:Array})],Nt.prototype,"messages",void 0);t([gt({type:Boolean})],Nt.prototype,"loading",void 0);t([gt({type:String})],Nt.prototype,"botImage",void 0);Nt=t([ct("chat-message-list")],Nt);const Ot=a`
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
`;let Ht=class t extends ht{constructor(){super(...arguments);this.inputValue="";this.sendMsgEnableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg";this.sendMsgDisableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg"}render(){return z`
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
		`}handleInput(t){this.inputValue=t.target.value}handleKeyPress(t){if(t.key==="Enter"&&this.inputValue.trim())this.emitSendMessage()}handleSendClick(){this.emitSendMessage()}emitSendMessage(){this.dispatchEvent(new CustomEvent("send-message",{detail:{text:this.inputValue},bubbles:true,composed:true}));this.inputValue=""}};Ht.styles=[At,Ot];t([mt()],Ht.prototype,"inputValue",void 0);t([gt({type:String})],Ht.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],Ht.prototype,"sendMsgDisableImage",void 0);Ht=t([ct("chat-input")],Ht);const Rt=a`
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
`;let Bt=class t extends ht{render(){return z`
			<div class="loader">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		`}};Bt.styles=Rt;Bt=t([ct("loading-dots")],Bt);let Dt=class t extends ht{constructor(){super();this.botImage="";this.sendMsgEnableImage="";this.sendMsgDisableImage="";this.closeChatIcon="https://assets.pharmeasy.in/web-assets/images/ic_close.svg";this.showCloseButton=false;this.buttonLabel="Close";this.theme={fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"};this.isLoading=false;this.chatbotData={};this.messages=[{sender:"bot",text:"Hi Manthan, I am easybot. I am here to help you with your concern",time:this.getCurrentTime()},{sender:"user",text:"Hi Manthan, I am easybot. I am here to help you with your concern",time:this.getCurrentTime()}];this.conversationId="";this._handlePageClose=()=>{var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)};this.chatbotData=JSON.parse(sessionStorage.getItem("chatbotData")||"{}")}async handleSendMessage(t){this.isLoading=true;const e=t.detail.text;this.addMessage({sender:"user",text:e,time:this.getCurrentTime()});try{const t=await _t.sendMessage({body:this.chatbotData.chatAPI.body,message:e,conversationId:this.conversationId});this.conversationId=t.conversation_id;const s=JSON.parse(t.answer).assistantLastMessage||"Sorry, I encountered an error. Please try again.";this.addMessage({sender:"bot",text:s,time:this.getCurrentTime()})}catch(t){this.addMessage({sender:"bot",text:"Sorry, I encountered an error. Please try again.",time:this.getCurrentTime()})}finally{this.isLoading=false}}addMessage(t){this.messages=[...this.messages,t];this.requestUpdate();this.scrollToBottom()}async scrollToBottom(){await this.updateComplete;const t=this.shadowRoot;if(!t)return;const e=t.querySelector("chat-message-list");if(!e)return;const s=e.shadowRoot;if(!s)return;const i=s.querySelector(".chat-container");if(!i)return;i.scrollTo({top:i.scrollHeight,behavior:"smooth"});i.scrollTop=i.scrollHeight}getCurrentTime(){return(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}render(){return z`
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
		`}};Dt.styles=[At];t([gt({type:Object})],Dt.prototype,"apiBody",void 0);t([gt({type:String})],Dt.prototype,"botImage",void 0);t([gt({type:String})],Dt.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],Dt.prototype,"sendMsgDisableImage",void 0);t([gt({type:String})],Dt.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],Dt.prototype,"onCloseChat",void 0);t([gt({type:Boolean,attribute:"show-close-button"})],Dt.prototype,"showCloseButton",void 0);t([gt({type:String,attribute:"button-label"})],Dt.prototype,"buttonLabel",void 0);t([gt({type:Object})],Dt.prototype,"theme",void 0);t([mt()],Dt.prototype,"isLoading",void 0);t([mt()],Dt.prototype,"chatbotData",void 0);t([mt()],Dt.prototype,"messages",void 0);t([mt()],Dt.prototype,"conversationId",void 0);Dt=t([ct("ai-chat")],Dt);export{Dt as AIChat};
