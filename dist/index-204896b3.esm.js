function t(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,s,o);else for(var a=t.length-1;a>=0;a--)if(r=t[a])n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n;return i>3&&n&&Object.defineProperty(e,s,n),n}typeof SuppressedError==="function"?SuppressedError:function(t,e,s){var o=new Error(s);return o.name="SuppressedError",o.error=t,o.suppressed=e,o};const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&i.set(e,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,o),a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n(s,t,o)},l=(t,o)=>{s?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((s=>{const o=document.createElement("style"),i=e.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=s.cssText,t.appendChild(o)}))},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;var c;const d=window,p=d.trustedTypes,u=p?p.emptyScript:"",g=d.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v},b="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const o=this._$Ep(s,e);void 0!==o&&(this._$Ev.set(o,s),t.push(o))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,s,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(o){const i=this[t];this[e]=o,this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=f){var o;const i=this.constructor._$Ep(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==(null===(o=s.converter)||void 0===o?void 0:o.toAttribute)?s.converter:m).toAttribute(e,s.type);this._$El=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var s;const o=this.constructor,i=o._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=o.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:m;this._$El=i,this[i]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let o=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y[b]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:y}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.3");var $;const _=window,C=_.trustedTypes,x=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,w="?"+E,S=`<${w}>`,T=document,M=()=>T.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,P=t=>I(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),B="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,L=/>/g,U=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,j=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),z=j(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),F=new WeakMap,W=T.createTreeWalker(T,129,null,!1);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,o=[];let i,n=2===e?"<svg>":"",r=N;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===N?"!--"===l[1]?r=O:void 0!==l[1]?r=L:void 0!==l[2]?(H.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=null!=i?i:N,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?R:D):r===R||r===D?r=U:r===O||r===L?r=N:(r=U,i=void 0);const d=r===U&&t[e+1].startsWith("/>")?" ":"";n+=r===N?s+S:h>=0?(o.push(a),s.slice(0,h)+A+s.slice(h)+E+d):s+E+(-2===h?(o.push(void 0),e):d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),o]};class K{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,n=0;const r=t.length-1,a=this.parts,[l,h]=G(t,e);if(this.el=K.createElement(l,s),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=W.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(A)||e.startsWith(E)){const s=h[n++];if(t.push(e),void 0!==s){const t=o.getAttribute(s.toLowerCase()+A).split(E),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?st:"@"===e[1]?ot:Q})}else a.push({type:6,index:i})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=C?C.emptyScript:"";for(let s=0;s<e;s++)o.append(t[s],M()),W.nextNode(),a.push({type:2,index:++i});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===w)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,o){var i,n,r,a;if(e===q)return e;let l=void 0!==o?null===(i=s._$Co)||void 0===i?void 0:i[o]:s._$Cl;const h=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,o)),void 0!==o?(null!==(r=(a=s)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:s._$Cl=l),void 0!==l&&(e=X(t,l._$AS(t,e.values),l,o)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:o}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(s,!0);W.currentNode=i;let n=W.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Z(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new it(n,this,t)),this._$AV.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(n=W.nextNode(),r++)}return W.currentNode=T,i}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{constructor(t,e,s,o){var i;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cp=null===(i=null==o?void 0:o.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),k(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):P(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=K.createElement(J(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(s);else{const t=new Y(i,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}T(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const i of t)o===e.length?e.push(s=new Z(this.k(M()),this.k(M()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,s,o,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,o){const i=this.strings;let n=!1;if(void 0===i)t=X(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const o=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=X(this,o[s+r],e,r),a===q&&(a=this._$AH[r]),n||(n=!k(a)||a!==this._$AH[r]),a===V?t=V:t!==V&&(t+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}n&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const et=C?C.emptyScript:"";class st extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class ot extends Q{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=X(this,t,e,0))&&void 0!==s?s:V)===q)return;const o=this._$AH,i=t===V&&o!==V||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==V&&(o===V||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt=_.litHtmlPolyfillSupport;null==nt||nt(K,Z),(null!==($=_.litHtmlVersions)&&void 0!==$?$:_.litHtmlVersions=[]).push("2.8.0");const rt=(t,e,s)=>{var o,i;const n=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;n._$litPart$=r=new Z(e.insertBefore(M(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r};var at,lt;class ht extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return q}}ht.finalized=!0,ht._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ht});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:ht});(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.3");const dt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:o}=e;return{kind:s,elements:o,finisher(e){customElements.define(t,e)}}})(t,e);const pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}},ut=(t,e,s)=>{e.constructor.createProperty(s,t)};function gt(t){return(e,s)=>void 0!==s?ut(t,e,s):pt(t,e)}function mt(t){return gt({...t,state:!0})}var vt;null!=(null===(vt=window.HTMLSlotElement)||void 0===vt?void 0:vt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));const ft=a`
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
`;const bt={BOT:"https://assets.pharmeasy.in/web-assets/images/image_chatbot.png",SEND_MESSAGE_ENABLE:"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg",SEND_MESSAGE_DISABLE:"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg",CLOSE_CHAT:"https://assets.pharmeasy.in/web-assets/images/ic_close.svg",PHONE:"https://assets.pharmeasy.in/web-assets/images/callPhoneFilledWhite.svg"};const yt={CUSTOMER_CARE_NUMBER:"1800 208 5555"};class $t{constructor(){this._context={messages:[],isLoading:false,conversationId:"4bb91e16-7a12-44ee-9b16-25c9bddeb2da",chatbotData:{chatAPI:{body:{inputs:{user_id:"",session_id:""}}},customerCareNumber:""},theme:{fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"},addMessage:t=>{this._context.messages=[...this._context.messages,t];$t.notifyListeners()},setLoading:t=>{this._context.isLoading=t;$t.notifyListeners()},setConversationId:t=>{this._context.conversationId=t;$t.notifyListeners()},setChatbotData:t=>{this._context.chatbotData=t;$t.notifyListeners()},updateTheme:t=>{this._context.theme=Object.assign(Object.assign({},this._context.theme),t);$t.notifyListeners()}}}static getInstance(){if(!$t.instance)$t.instance=new $t;return $t.instance}static addListener(t){$t.listeners.add(t)}static removeListener(t){$t.listeners.delete(t)}static notifyListeners(){$t.listeners.forEach((t=>t.requestUpdate()))}get context(){return this._context}}$t.listeners=new Set;class _t{constructor(t){this.host=t;t.addController(this);this._context=$t.getInstance().context;$t.addListener(t)}hostConnected(){}hostDisconnected(){$t.removeListener(this.host)}get context(){return this._context}}const Ct=t=>{class e extends t{connectedCallback(){super.connectedCallback();this._contextProvider=new _t(this)}disconnectedCallback(){super.disconnectedCallback();this._contextProvider=void 0}get chatContext(){if(!this._contextProvider)throw new Error("Chat context not available. Make sure the component is connected to the DOM.");return this._contextProvider.context}}return e};class xt extends Error{constructor(t,e,s){super(e);this.status=t;this.details=s;this.name="HttpError"}}class At{constructor(t={}){this.requestTimeout=1e4;this.requestInterceptors=[];this.cache=new Map;this.cacheTTL=3e5;this.baseUrl=t.baseUrl||"https://easybot.private.dataplatform.link/";this.token=t.token||"app-YX12rgf0CVRSXdtd4txQNOjy"}static getInstance(t){if(!At.instance)At.instance=new At(t);return At.instance}setToken(t){this.token=t}addRequestInterceptor(t){this.requestInterceptors.push(t)}applyInterceptors(t){return this.requestInterceptors.reduce(((t,e)=>e(t)),t)}async get(t,e){if((e===null||e===void 0?void 0:e.cache)&&this.cache.has(t)){const e=this.cache.get(t);if(Date.now()-e.timestamp<this.cacheTTL)return e.data}const s=new AbortController;const o=setTimeout((()=>s.abort()),(e===null||e===void 0?void 0:e.timeout)||this.requestTimeout);try{let o={signal:s.signal,headers:{Authorization:`Bearer ${this.token}`}};o=this.applyInterceptors(o);const i=await fetch(`${this.baseUrl}${t}`,o);const n=await this.handleResponse(i);if(e===null||e===void 0?void 0:e.cache)this.cache.set(t,{data:n,timestamp:Date.now()});return n}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new xt(408,"Request timeout");throw t}finally{clearTimeout(o)}}async post(t,e,s){const o=new AbortController;const i=setTimeout((()=>o.abort()),(s===null||s===void 0?void 0:s.timeout)||this.requestTimeout);try{let i={method:"POST",signal:o.signal,headers:Object.assign({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},s===null||s===void 0?void 0:s.headers),body:JSON.stringify(e)};i=this.applyInterceptors(i);const n=await fetch(`${this.baseUrl}${t}`,i);return this.handleResponse(n)}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new xt(408,"Request timeout");throw t}finally{clearTimeout(i)}}async handleResponse(t){if(!t.ok){const e=await t.json().catch((()=>({status:t.status,statusText:t.statusText})));throw new xt(t.status,e.message||t.statusText,e.errors||void 0)}return t.json()}}const Et=At.getInstance();class wt{constructor(){this.basePath="v1/chat-messages"}async sendMessage({body:t,message:e,conversationId:s,headers:o}){const i=await Et.post(`${this.basePath}`,{inputs:t.inputs,query:e,response_mode:"blocking",conversation_id:s||void 0,user:t.user},{headers:o});return i}}const St=new wt;const Tt=a`
	.header {
		background-color: var(--header-bg-color);
		padding: 8px 16px;
		display: flex;
		align-items: center;
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
`;let Mt=class t extends ht{constructor(){super(...arguments);this.closeChatIcon=""}handleCloseChat(){var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)}render(){return z`
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
		`}};Mt.styles=[ft,Tt];t([gt({type:String})],Mt.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],Mt.prototype,"onCloseChat",void 0);Mt=t([dt("chat-header")],Mt);var kt=Object.freeze({__proto__:null,get ChatHeader(){return Mt}});function It(t,e,s){return t?e():null==s?void 0:s()}const Pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bt=t=>(...e)=>({_$litDirective$:t,values:e});class Nt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class Ot extends Nt{constructor(t){if(super(t),this.et=V,t.type!==Pt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this.ft=void 0,this.et=t;if(t===q)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ot.directiveName="unsafeHTML",Ot.resultType=1;const Lt=Bt(Ot);const Ut=a`
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
`;let Dt=class t extends ht{constructor(){super(...arguments);this.timestamp=""}get displayTimestamp(){const t={hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(navigator.language,t).format(this.date)}render(){return z`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">Today • ${this.displayTimestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`}};Dt.styles=[ft,Ut];t([gt({type:String})],Dt.prototype,"timestamp",void 0);t([gt({type:Date})],Dt.prototype,"date",void 0);Dt=t([dt("timestamp-divider")],Dt);const Rt=a`
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
`;let Ht=class t extends(Ct(ht)){constructor(){super(...arguments);this.isNewConversation=true;this.botImage=bt.BOT;this.chatContainer=null}connectedCallback(){super.connectedCallback()}firstUpdated(){var t;this.chatContainer=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(".chat-container");this.scrollToBottom()}updated(t){super.updated(t);if(t.has("chatContext")&&this.chatContext.messages.length>0)this.scrollToBottom()}scrollToBottom(){requestAnimationFrame((()=>{if(this.chatContainer)this.chatContainer.scrollTo({top:this.chatContainer.scrollHeight,behavior:"smooth"})}))}render(){return z`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${this.chatContext.messages.map((t=>this.renderMessage(t)))}
				${this.renderLoadingIndicator()}
			</div>
		`}renderTimestampDivider(){return It(this.isNewConversation,(()=>z`
				<timestamp-divider
					.date=${new Date}
					.showFullDate=${true}
				></timestamp-divider>
			`))}renderMessage(t){return It(t.sender==="bot",(()=>z`
				<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">${Lt(t.text)}</div>
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
			`))}renderLoadingIndicator(){return this.chatContext.isLoading?z`<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">
							<loading-dots></loading-dots>
						</div>
					</div>
			  </div>`:null}};Ht.styles=[ft,Rt];t([mt()],Ht.prototype,"isNewConversation",void 0);t([gt({type:String})],Ht.prototype,"botImage",void 0);Ht=t([dt("chat-message-list")],Ht);const jt=a`
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
`;let zt=class t extends ht{constructor(){super(...arguments);this.inputValue="";this.sendMsgEnableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg";this.sendMsgDisableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg"}render(){return z`
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
		`}handleInput(t){this.inputValue=t.target.value}handleKeyPress(t){if(t.key==="Enter"&&this.inputValue.trim())this.emitSendMessage()}handleSendClick(){this.emitSendMessage()}emitSendMessage(){this.dispatchEvent(new CustomEvent("send-message",{detail:{text:this.inputValue},bubbles:true,composed:true}));this.inputValue=""}};zt.styles=[ft,jt];t([mt()],zt.prototype,"inputValue",void 0);t([gt({type:String})],zt.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],zt.prototype,"sendMsgDisableImage",void 0);zt=t([dt("chat-input")],zt);let qt=class t extends(Ct(ht)){constructor(){super(...arguments);this.botImage=bt.BOT;this.sendMsgEnableImage=bt.SEND_MESSAGE_ENABLE;this.sendMsgDisableImage=bt.SEND_MESSAGE_DISABLE;this.closeChatIcon=bt.CLOSE_CHAT;this.showCloseButton=false;this.buttonLabel="Close";this.theme={fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"};this.showChatInput=true;this._handlePageClose=()=>{var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)}}connectedCallback(){super.connectedCallback();this.initializeSessionStorage();this.loadComponents();this.chatContext.updateTheme(this.theme)}initializeSessionStorage(){try{const t=sessionStorage.getItem("chatbotData");if(!t){const t={chatAPI:{body:{inputs:{userId:"39783010",parentOrderId:"525744916255784960"},user:"Rakesh"},headers:{},theme:{}},customerCareNumber:""};sessionStorage.setItem("chatbotData",JSON.stringify(t));this.chatContext.setChatbotData(t)}else{const e=JSON.parse(t);this.chatContext.setChatbotData(e)}}catch(t){console.error("Error initializing session storage:",t)}}async loadComponents(){await Promise.all([this.loadHeaderComponent(),this.loadChatLoaderComponent(),this.loadTalkToAgentComponent()])}async loadHeaderComponent(){await Promise.resolve().then((function(){return kt}))}async loadChatLoaderComponent(){await import("./chat-loader-a920ca29.esm.js")}async loadTalkToAgentComponent(){await import("./talk-to-agent-e93e8043.esm.js")}async handleSendMessage(t){this.chatContext.setLoading(true);const e=t.detail.text;this.chatContext.addMessage({sender:"user",text:e,time:this.getCurrentTime()});await this.scrollToBottom();try{const t=await St.sendMessage({body:this.chatContext.chatbotData.chatAPI.body,message:e,conversationId:this.chatContext.conversationId});this.chatContext.setConversationId(t.conversation_id);const s=JSON.parse(t.answer).assistantLastMessage||"Sorry, I encountered an error. Please try again.";this.chatContext.addMessage({sender:"bot",text:s,time:this.getCurrentTime()});await this.scrollToBottom()}catch(t){this.chatContext.addMessage({sender:"bot",text:"Sorry, I encountered an error. Please try again.",time:this.getCurrentTime()});await this.scrollToBottom()}finally{this.chatContext.setLoading(false)}}async scrollToBottom(){var t,e;await new Promise((t=>requestAnimationFrame(t)));const s=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("chat-message-list");if(s){const t=(e=s.shadowRoot)===null||e===void 0?void 0:e.querySelector(".chat-container");if(t)t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}}getCurrentTime(){return(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}render(){return z`
			<style>
				:host {
					--font-family: ${this.chatContext.theme.fontFamily};
					--header-bg-color: ${this.chatContext.theme.headerBgColor};
					--header-title-color: ${this.chatContext.theme.headerTitleColor};
					--header-subtitle-color: ${this.chatContext.theme.headerSubtitleColor};
					--message-bg-color: ${this.chatContext.theme.messageContainerBgColor};
					--loader-color: ${this.chatContext.theme.loaderColor};
					--input-background-color: ${this.chatContext.theme.inputBackgroundColor};
					--input-border-color: ${this.chatContext.theme.inputBorderColor};
					--placeholder-text-color: ${this.chatContext.theme.placeholderTextColor};
					--input-text-color: ${this.chatContext.theme.inputTextColor};
					--bot-msg-bg-color: ${this.chatContext.theme.botMsgBgColor};
					--bot-msg-border-color: ${this.chatContext.theme.botMsgBorderColor};
					--bot-msg-text-color: ${this.chatContext.theme.botMsgTextColor};
					--user-msg-bg-color: ${this.chatContext.theme.userMsgBgColor};
					--user-msg-text-color: ${this.chatContext.theme.userMsgTextColor};
					--user-msg-border-color: ${this.chatContext.theme.userMsgBorderColor};
				}
			</style>

			<chat-header
				.closeChatIcon=${this.closeChatIcon}
				.onCloseChat=${this._handlePageClose}
			></chat-header>

			<chat-message-list .botImage=${this.botImage}></chat-message-list>

			${this.showChatInput?z`<chat-input
						@send-message=${this.handleSendMessage}
				  ></chat-input>`:z`<talk-to-agent
						.phoneNumber=${this.chatContext.chatbotData.customerCareNumber}
				  ></talk-to-agent>`}
		`}};qt.styles=[ft];t([gt({type:Object})],qt.prototype,"apiBody",void 0);t([gt({type:String})],qt.prototype,"botImage",void 0);t([gt({type:String})],qt.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],qt.prototype,"sendMsgDisableImage",void 0);t([gt({type:String})],qt.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],qt.prototype,"onCloseChat",void 0);t([gt({type:Boolean,attribute:"show-close-button"})],qt.prototype,"showCloseButton",void 0);t([gt({type:String,attribute:"button-label"})],qt.prototype,"buttonLabel",void 0);t([gt({type:Object})],qt.prototype,"theme",void 0);t([mt()],qt.prototype,"showChatInput",void 0);qt=t([dt("ai-chat")],qt);export{qt as A,yt as D,t as _,bt as a,ft as c,dt as e,a as i,gt as n,ht as s,z as x};
