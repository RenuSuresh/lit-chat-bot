function t(t,e,s,o){var i=arguments.length,r=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,e,s,o);else for(var a=t.length-1;a>=0;a--)if(n=t[a])r=(i<3?n(r):i>3?n(e,s,r):n(e,s))||r;return i>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError==="function"?SuppressedError:function(t,e,s){var o=new Error(s);return o.name="SuppressedError",o.error=t,o.suppressed=e,o};const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&i.set(e,t))}return t}toString(){return this.cssText}}const n=t=>new r("string"==typeof t?t:t+"",void 0,o),a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new r(s,t,o)},l=(t,o)=>{s?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((s=>{const o=document.createElement("style"),i=e.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=s.cssText,t.appendChild(o)}))},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return n(e)})(t):t;var c;const d=window,p=d.trustedTypes,u=p?p.emptyScript:"",g=d.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},f=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:f},b="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const o=this._$Ep(s,e);void 0!==o&&(this._$Ev.set(o,s),t.push(o))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,s,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(o){const i=this[t];this[e]=o,this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=v){var o;const i=this.constructor._$Ep(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==(null===(o=s.converter)||void 0===o?void 0:o.toAttribute)?s.converter:m).toAttribute(e,s.type);this._$El=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(t,e){var s;const o=this.constructor,i=o._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=o.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:m;this._$El=i,this[i]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let o=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y[b]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:y}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.3");var x;const C=window,$=C.trustedTypes,_=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,A="?"+k,E=`<${A}>`,S=document,T=()=>S.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,B=t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),O="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,N=/>/g,R=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,U=/"/g,H=/^(?:script|style|textarea|title)$/i,j=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),z=j(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,Y=S.createTreeWalker(S,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,o=[];let i,r=2===e?"<svg>":"",n=P;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(n.lastIndex=c,l=n.exec(s),null!==l);)c=n.lastIndex,n===P?"!--"===l[1]?n=L:void 0!==l[1]?n=N:void 0!==l[2]?(H.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=null!=i?i:P,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?R:'"'===l[3]?U:D):n===U||n===D?n=R:n===L||n===N?n=P:(n=R,i=void 0);const d=n===R&&t[e+1].startsWith("/>")?" ":"";r+=n===P?s+E:h>=0?(o.push(a),s.slice(0,h)+w+s.slice(h)+k+d):s+k+(-2===h?(o.push(void 0),e):d)}return[W(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),o]};class G{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,r=0;const n=t.length-1,a=this.parts,[l,h]=J(t,e);if(this.el=G.createElement(l,s),Y.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=Y.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(w)||e.startsWith(k)){const s=h[r++];if(t.push(e),void 0!==s){const t=o.getAttribute(s.toLowerCase()+w).split(k),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?st:"@"===e[1]?ot:Q})}else a.push({type:6,index:i})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let s=0;s<e;s++)o.append(t[s],T()),Y.nextNode(),a.push({type:2,index:++i});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===A)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)a.push({type:7,index:i}),t+=k.length-1}i++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,o){var i,r,n,a;if(e===F)return e;let l=void 0!==o?null===(i=s._$Co)||void 0===i?void 0:i[o]:s._$Cl;const h=I(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,o)),void 0!==o?(null!==(n=(a=s)._$Co)&&void 0!==n?n:a._$Co=[])[o]=l:s._$Cl=l),void 0!==l&&(e=K(t,l._$AS(t,e.values),l,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:o}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);Y.currentNode=i;let r=Y.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new Z(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new it(r,this,t)),this._$AV.push(e),l=o[++a]}n!==(null==l?void 0:l.index)&&(r=Y.nextNode(),n++)}return Y.currentNode=S,i}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{constructor(t,e,s,o){var i;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cp=null===(i=null==o?void 0:o.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):B(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=G.createElement(W(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(s);else{const t=new X(i,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const i of t)o===e.length?e.push(s=new Z(this.k(T()),this.k(T()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,s,o,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,o){const i=this.strings;let r=!1;if(void 0===i)t=K(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const o=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=K(this,o[s+n],e,n),a===F&&(a=this._$AH[n]),r||(r=!I(a)||a!==this._$AH[n]),a===q?t=q:t!==q&&(t+=(null!=a?a:"")+i[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const et=$?$.emptyScript:"";class st extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class ot extends Q{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=K(this,t,e,0))&&void 0!==s?s:q)===F)return;const o=this._$AH,i=t===q&&o!==q||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==q&&(o===q||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=C.litHtmlPolyfillSupport;null==rt||rt(G,Z),(null!==(x=C.litHtmlVersions)&&void 0!==x?x:C.litHtmlVersions=[]).push("2.8.0");const nt=(t,e,s)=>{var o,i;const r=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:e;let n=r._$litPart$;if(void 0===n){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;r._$litPart$=n=new Z(e.insertBefore(T(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n};var at,lt;class ht extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}ht.finalized=!0,ht._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ht});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:ht});(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.3");const dt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:o}=e;return{kind:s,elements:o,finisher(e){customElements.define(t,e)}}})(t,e);const pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}},ut=(t,e,s)=>{e.constructor.createProperty(s,t)};function gt(t){return(e,s)=>void 0!==s?ut(t,e,s):pt(t,e)}function mt(t){return gt({...t,state:!0})}var ft;null!=(null===(ft=window.HTMLSlotElement)||void 0===ft?void 0:ft.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));const vt=a`
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
`;const bt={BOT:"https://assets.pharmeasy.in/web-assets/images/image_chatbot.png",SEND_MESSAGE_ENABLE:"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg",SEND_MESSAGE_DISABLE:"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg",CLOSE_CHAT:"https://assets.pharmeasy.in/web-assets/images/ic_close.svg",PHONE:"https://assets.pharmeasy.in/web-assets/images/callPhoneFilledWhite.svg"};const yt={CUSTOMER_CARE_NUMBER:"1800 208 5555"};class xt{constructor(){this._context={messages:[],isLoading:false,conversationId:"",chatbotData:{chatAPI:{body:{}},customerCareNumber:""},theme:{fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"},addMessage:t=>{this._context.messages=[...this._context.messages,t];xt.notifyListeners()},setLoading:t=>{this._context.isLoading=t;xt.notifyListeners()},setConversationId:t=>{this._context.conversationId=t;xt.notifyListeners()},setChatbotData:t=>{this._context.chatbotData=t;xt.notifyListeners()},updateTheme:t=>{this._context.theme=Object.assign(Object.assign({},this._context.theme),t);xt.notifyListeners()}}}static getInstance(){if(!xt.instance)xt.instance=new xt;return xt.instance}static addListener(t){xt.listeners.add(t)}static removeListener(t){xt.listeners.delete(t)}static notifyListeners(){xt.listeners.forEach((t=>t.requestUpdate()))}get context(){return this._context}}xt.listeners=new Set;class Ct{constructor(t){this.host=t;t.addController(this);this._context=xt.getInstance().context;xt.addListener(t)}hostConnected(){}hostDisconnected(){xt.removeListener(this.host)}get context(){return this._context}}const $t=t=>{class e extends t{connectedCallback(){super.connectedCallback();this._contextProvider=new Ct(this)}disconnectedCallback(){super.disconnectedCallback();this._contextProvider=void 0}get chatContext(){if(!this._contextProvider)throw new Error("Chat context not available. Make sure the component is connected to the DOM.");return this._contextProvider.context}}return e};class _t extends Error{constructor(t,e,s){super(e);this.status=t;this.details=s;this.name="HttpError"}}class wt{constructor(t={}){this.requestTimeout=1e4;this.requestInterceptors=[];this.cache=new Map;this.cacheTTL=3e5;this.baseUrl=t.baseUrl||"https://easybot.private.dataplatform.link/";this.token=t.token||"app-YX12rgf0CVRSXdtd4txQNOjy"}static getInstance(t){if(!wt.instance)wt.instance=new wt(t);return wt.instance}setToken(t){this.token=t}addRequestInterceptor(t){this.requestInterceptors.push(t)}applyInterceptors(t){return this.requestInterceptors.reduce(((t,e)=>e(t)),t)}async get(t,e){if((e===null||e===void 0?void 0:e.cache)&&this.cache.has(t)){const e=this.cache.get(t);if(Date.now()-e.timestamp<this.cacheTTL)return e.data}const s=new AbortController;const o=setTimeout((()=>s.abort()),(e===null||e===void 0?void 0:e.timeout)||this.requestTimeout);try{let o={signal:s.signal,headers:{Authorization:`Bearer ${this.token}`}};o=this.applyInterceptors(o);const i=await fetch(`${this.baseUrl}${t}`,o);const r=await this.handleResponse(i);if(e===null||e===void 0?void 0:e.cache)this.cache.set(t,{data:r,timestamp:Date.now()});return r}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new _t(408,"Request timeout");throw t}finally{clearTimeout(o)}}async post(t,e,s){const o=new AbortController;const i=setTimeout((()=>o.abort()),(s===null||s===void 0?void 0:s.timeout)||this.requestTimeout);try{let i={method:"POST",signal:o.signal,headers:Object.assign({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},s===null||s===void 0?void 0:s.headers),body:JSON.stringify(e)};i=this.applyInterceptors(i);const r=await fetch(`${this.baseUrl}${t}`,i);return this.handleResponse(r)}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new _t(408,"Request timeout");throw t}finally{clearTimeout(i)}}async handleResponse(t){if(!t.ok){const e=await t.json().catch((()=>({status:t.status,statusText:t.statusText})));throw new _t(t.status,e.message||t.statusText,e.errors||void 0)}return t.json()}}const kt=wt.getInstance();class At{constructor(){this.basePath="v1/chat-messages"}async sendMessage({body:t,message:e,conversationId:s,headers:o}){const i=await kt.post(`${this.basePath}`,{inputs:t.inputs,query:e,response_mode:"blocking",conversation_id:s||void 0,user:t.user},{headers:o});return i}async submitFeedback({rating:t,conversationId:e}){await kt.post(`${this.basePath}/feedback`,{rating:t,conversation_id:e})}}const Et=new At;const St=a`
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
`;let Tt=class t extends ht{constructor(){super(...arguments);this.closeChatIcon=""}handleCloseChat(){var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)}render(){return z`
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
		`}};Tt.styles=[vt,St];t([gt({type:String})],Tt.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],Tt.prototype,"onCloseChat",void 0);Tt=t([dt("chat-header")],Tt);var It=Object.freeze({__proto__:null,get ChatHeader(){return Tt}});function Mt(t,e,s){return t?e():null==s?void 0:s()}const Bt=a`
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
`;let Ot=class t extends ht{constructor(){super(...arguments);this.timestamp=""}get displayTimestamp(){const t={hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(navigator.language,t).format(this.date)}render(){return z`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">Today • ${this.displayTimestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`}};Ot.styles=[vt,Bt];t([gt({type:String})],Ot.prototype,"timestamp",void 0);t([gt({type:Date})],Ot.prototype,"date",void 0);Ot=t([dt("timestamp-divider")],Ot);const Pt=a`
	.chat-container {
		background-color: var(--message-container-bg-color);
		padding: 0 16px;
		overflow-y: auto;
		height: calc(100vh - 146px);
	}

	.bot-message-container {
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
		max-width: calc(100% - 100px);
	}
`;var Lt;(function(t){t["INFO"]="info"})(Lt||(Lt={}));const Nt=a`
	:host {
		display: block;
		width: 100vw;
		margin-left: -16px;
		margin-right: -16px;
	}
	.chat-info-strip {
		background-color: #fff8e3;
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 12px;
		line-height: 18px;
		color: #30363c;
		text-align: center;
	}
`;let Rt=class t extends ht{constructor(){super(...arguments);this.message=""}get displayMessage(){if(this.info)return this.info.message;return this.message}render(){var t;return Mt((t=this.displayMessage)===null||t===void 0?void 0:t.trim(),(()=>z` <div class="chat-info-strip">${this.displayMessage}</div> `),(()=>z``))}};Rt.styles=[vt,Nt];t([gt({type:Object})],Rt.prototype,"info",void 0);t([gt({type:String})],Rt.prototype,"message",void 0);Rt=t([dt("chat-info-strip")],Rt);const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=t=>(...e)=>({_$litDirective$:t,values:e});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class jt extends Ht{constructor(t){if(super(t),this.et=q,t.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this.ft=void 0,this.et=t;if(t===F)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}jt.directiveName="unsafeHTML",jt.resultType=1;const zt=Ut(jt);const Ft=a`
	.bot-message-container,
	.user-message-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 24px;
	}

	.bot-message-content,
	.user-message-content {
		display: flex;
		gap: 8px;
	}

	.user-message-content {
		justify-content: flex-end;
	}

	.bot-message,
	.user-message {
		border-radius: 16px;
		padding: 12px;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		max-width: calc(100% - 100px);
	}

	.bot-message {
		border-radius: 2px 16px 16px 16px;
		border: 1px solid var(--bot-msg-border-color);
		color: var(--bot-msg-text-color);
		background-color: var(--bot-msg-bg-color);
	}

	.user-message {
		border-radius: 16px 2px 16px 16px;
		border: 1px solid var(--user-msg-border-color);
		background-color: var(--user-msg-bg-color);
		color: var(--user-msg-text-color);
	}

	.bot-timestamp,
	.user-timestamp {
		font-weight: 400;
		font-size: 10px;
		line-height: 16px;
		color: #6e787e;
	}

	.bot-timestamp {
		text-align: left;
		margin-left: 48px;
	}

	.user-timestamp {
		text-align: right;
	}
`;let qt=class t extends ht{constructor(){super(...arguments);this.botImage=""}render(){return z`
			<div class="bot-message-container">
				<div class="bot-message-content">
					<img src=${this.botImage} alt="bot" width="40" height="40" />
					<div class="bot-message">${zt(this.message.text)}</div>
				</div>
				<div class="bot-timestamp">${this.message.time}</div>
			</div>
		`}};qt.styles=[vt,Ft];t([gt({type:Object})],qt.prototype,"message",void 0);t([gt({type:String})],qt.prototype,"botImage",void 0);qt=t([dt("bot-message")],qt);let Vt=class t extends ht{render(){return z`
			<div class="user-message-container">
				<div class="user-message-content">
					<div class="user-message">${this.message.text}</div>
				</div>
				<div class="user-timestamp">${this.message.time}</div>
			</div>
		`}};Vt.styles=[vt,Ft];t([gt({type:Object})],Vt.prototype,"message",void 0);Vt=t([dt("user-message")],Vt);const Yt=a`
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
`;let Wt=class t extends ht{render(){return z`
			<div class="loader">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		`}};Wt.styles=Yt;Wt=t([dt("chat-loader")],Wt);var Jt=Object.freeze({__proto__:null,get ChatLoader(){return Wt}});let Gt=class t extends($t(ht)){constructor(){super(...arguments);this.isNewConversation=true;this.botImage=bt.BOT;this.isConversationClosed=false;this.isStartChatReached=false;this.isTransferCallReached=false;this.chatContainer=null;this.observer=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();if(this.observer)this.observer.disconnect()}firstUpdated(){var t;this.chatContainer=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(".chat-container");if(this.chatContainer&&this.observer)this.observer.observe(this.chatContainer,{childList:true,characterData:true,subtree:true});this.scrollToBottom()}updated(t){var e;super.updated(t);if(t.has("chatContext")){const s=((e=t.get("chatContext"))===null||e===void 0?void 0:e.messages)||[];const o=this.chatContext.messages;if(o.length>s.length)requestAnimationFrame((()=>{setTimeout((()=>{this.scrollToBottom()}),50)}))}if(t.has("isConversationClosed")||t.has("isStartChatReached")||t.has("isTransferCallReached"))this.scrollToBottom()}scrollToBottom(){requestAnimationFrame((()=>{if(this.chatContainer)this.chatContainer.scrollTo({top:this.chatContainer.scrollHeight,behavior:"smooth"})}))}renderTimestampDivider(){return Mt(this.isNewConversation,(()=>z`
				<timestamp-divider
					.date=${new Date}
					.showFullDate=${true}
				></timestamp-divider>
			`))}renderMessage(t){return Mt(t.sender==="bot",(()=>z`
				<bot-message .message=${t} .botImage=${this.botImage}></bot-message>
			`),(()=>z` <user-message .message=${t}></user-message> `))}renderLoadingIndicator(){return this.chatContext.isLoading?z`<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">
							<chat-loader></chat-loader>
						</div>
					</div>
			  </div>`:null}getStartChatInfo(){return{type:Lt.INFO,message:"You've reached the start of the conversation."}}getConversationCloseInfo(){return{type:Lt.INFO,message:"✅ This conversation has been closed"}}getTransferCallInfo(){return{type:Lt.INFO,message:"Transferring your call to one of our support executive"}}render(){return z`
			<div class="chat-container">
				${this.renderTimestampDivider()}
				${Mt(this.isStartChatReached,(()=>z`
						<chat-info-strip .info=${this.getStartChatInfo()}></chat-info-strip>
					`))}
				${this.chatContext.messages.map((t=>this.renderMessage(t)))}
				${this.renderLoadingIndicator()}
				${Mt(this.isConversationClosed,(()=>z`
						<chat-info-strip
							.info=${this.isTransferCallReached?this.getTransferCallInfo():this.getConversationCloseInfo()}
						></chat-info-strip>
					`))}
			</div>
		`}forceScrollToBottom(){requestAnimationFrame((()=>{setTimeout((()=>{this.scrollToBottom()}),50)}))}};Gt.styles=[vt,Pt];t([mt()],Gt.prototype,"isNewConversation",void 0);t([gt({type:String})],Gt.prototype,"botImage",void 0);t([gt({type:Boolean})],Gt.prototype,"isConversationClosed",void 0);t([gt({type:Boolean})],Gt.prototype,"isStartChatReached",void 0);t([gt({type:Boolean})],Gt.prototype,"isTransferCallReached",void 0);Gt=t([dt("chat-message-list")],Gt);const Kt=a`
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
`;let Xt=class t extends ht{constructor(){super(...arguments);this.inputValue="";this.sendMsgEnableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg";this.sendMsgDisableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg"}render(){return z`
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
		`}handleInput(t){this.inputValue=t.target.value}handleKeyPress(t){if(t.key==="Enter"&&this.inputValue.trim())this.emitSendMessage()}handleSendClick(){this.emitSendMessage()}emitSendMessage(){this.dispatchEvent(new CustomEvent("send-message",{detail:{text:this.inputValue},bubbles:true,composed:true}));this.inputValue=""}};Xt.styles=[vt,Kt];t([mt()],Xt.prototype,"inputValue",void 0);t([gt({type:String})],Xt.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],Xt.prototype,"sendMsgDisableImage",void 0);Xt=t([dt("chat-input")],Xt);let Zt=class t extends ht{constructor(){super(...arguments);this.open=false;this.isClosing=false;this.backdrop=null;this.popStateHandler=()=>{if(this.open)this.handleClose()}}connectedCallback(){super.connectedCallback();window.addEventListener("popstate",this.popStateHandler)}disconnectedCallback(){super.disconnectedCallback();this.toggleBodyOverflow(false);this.removeBackdrop();window.removeEventListener("popstate",this.popStateHandler)}updated(t){if(t.has("open")){this.toggleBodyOverflow(this.open);if(this.open){this.addBackdrop();history.pushState({drawer:true},"")}else this.removeBackdrop()}}toggleBodyOverflow(t){document.body.style.overflow=t?"hidden":""}handleClose(){this.isClosing=true;setTimeout((()=>{this.isClosing=false;this.open=false;this.dispatchEvent(new CustomEvent("close"))}),300)}addBackdrop(){if(this.backdrop)return;this.backdrop=document.createElement("div");this.backdrop.className="drawer-backdrop";this.backdrop.style.cssText=`\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(0, 0, 0, 0.5);\n            z-index: 999;\n            opacity: 0;\n            transition: opacity 0.3s ease-out;\n        `;this.backdrop.addEventListener("click",this.handleBackdropClick.bind(this));document.body.appendChild(this.backdrop);requestAnimationFrame((()=>{if(this.backdrop)this.backdrop.style.opacity="1"}))}removeBackdrop(){if(this.backdrop){this.backdrop.remove();this.backdrop=null}}handleBackdropClick(){this.handleClose()}render(){return z`
			${Mt(this.open||this.isClosing,(()=>z`
					<div class="drawer-wrapper">
						<div class="drawer-content ${this.isClosing?"closing":""}">
							<div class="close-button-wrapper">
								<button class="close-button" @click=${this.handleClose}>
									×
								</button>
							</div>
							<div class="drawer-container">
								<slot></slot>
							</div>
						</div>
					</div>
				`),(()=>z``))}
		`}};Zt.styles=a`
		:host {
			display: contents;
		}

		.drawer-wrapper {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1000;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.drawer-content {
			width: 100%;
			transform: translateY(0);
			animation: slideIn 0.3s ease-out;
		}

		.close-button-wrapper {
			position: absolute;
			top: -50px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1001;
			background: transparent;
			border-radius: 50%;
		}

		.close-button {
			width: 32px;
			height: 32px;
			background: white;
			border: none;
			border-radius: 50%;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
			color: #666;
		}

		.close-button:hover {
			transform: scale(1.05);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		}

		.drawer-container {
			background: white;
			border-radius: 24px 24px 0 0;
			padding: 24px 16px;
			box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
			position: relative;
		}

		@keyframes slideIn {
			from {
				transform: translateY(100%);
			}
			to {
				transform: translateY(0);
			}
		}

		@keyframes slideOut {
			from {
				transform: translateY(0);
			}
			to {
				transform: translateY(100%);
			}
		}

		.drawer-content.closing {
			animation: slideOut 0.3s ease-out;
		}
	`;t([gt({type:Boolean,reflect:true})],Zt.prototype,"open",void 0);t([gt({type:Boolean})],Zt.prototype,"isClosing",void 0);Zt=t([dt("base-drawer")],Zt);let Qt=class t extends ht{constructor(){super(...arguments);this.rating=0;this.submitted=true}handleSubmit(){this.submitted=true;this.dispatchEvent(new CustomEvent("submit",{detail:this.rating}))}handleStarClick(t){this.rating=t;this.dispatchEvent(new CustomEvent("rating-select",{detail:{rating:t}}))}renderThankYou(){return z`
			<div class="thank-you-container">
				<img
					src="https://assets.pharmeasy.in/web-assets/images/image_feedback_chatbot.png"
					alt="Thank you"
					class="thank-you-icon"
				/>
				<div class="thank-you-title">Thank You for feedback!</div>
				<div class="thank-you-message">
					Your feedback helps us to<br />
					improve our experience
				</div>
			</div>
		`}renderFeedbackForm(){return z`
			<div class="title">Please rate your experience with us</div>
			<div class="subtitle">
				Your feedback helps us to improve our experience
			</div>

			<div class="stars">
				${[1,2,3,4,5].map((t=>z`
						<button
							class="star ${this.rating>=t?"selected":""}"
							@click=${()=>this.handleStarClick(t)}
						>
							<svg
								width="36"
								height="34"
								viewBox="0 0 36 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.9999 1.15002L23.1499 11.5834L34.6666 13.2667L26.3333 21.3834L28.2999 32.85L17.9999 27.4334L7.69992 32.85L9.66659 21.3834L1.33325 13.2667L12.8499 11.5834L17.9999 1.15002Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					`))}
			</div>

			<button
				class="submit-button"
				@click=${this.handleSubmit}
				?disabled=${this.rating===0}
			>
				Submit Feedback
			</button>
		`}render(){return this.submitted?this.renderThankYou():this.renderFeedbackForm()}};Qt.styles=a`
		:host {
			display: block;
			text-align: center;
		}

		.title {
			font-weight: 600;
			font-size: 14px;
			line-height: 22px;
			color: #30363c;
			padding-bottom: 4px;
		}

		.subtitle {
			font-weight: 400;
			font-size: 12px;
			line-height: 18px;
			text-align: center;
			color: #4f585e;
		}

		.stars {
			display: flex;
			justify-content: center;
			gap: 8px;
			margin: 24px 0;
		}

		.star {
			width: 50px;
			height: 50px;
			background: none;
			border: none;
			cursor: pointer;
			transition: all 0.2s;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.star svg {
			width: 34px;
			height: 34px;
			fill: none;
			stroke: #8897a2;
			stroke-width: 2;
		}

		.star.selected {
			border-color: #f5b326;
		}

		.star.selected svg {
			fill: #f5b326;
			stroke: #f5b326;
		}

		.submit-button {
			width: 100%;
			background-color: #6e787e;
			border: none;
			border-radius: 8px;
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			text-align: center;
			color: #ffffff;
			font-family: var(--font-family);
			height: 40px;
		}

		.submit-button:not([disabled]) {
			opacity: 1;
			background: #10847e;
			border: 1.5px solid #10847e;
		}

		/* Thank you screen styles */
		.thank-you-container {
			text-align: center;
		}

		.thank-you-icon {
			width: 83px;
			height: 69px;
			margin-bottom: 16px;
			color: #4caf50;
		}

		.thank-you-title {
			font-weight: 700;
			font-size: 22px;
			line-height: 28px;
			text-align: center;
			color: #30363c;
			margin-bottom: 4px;
		}

		.thank-you-message {
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
			text-align: center;
			color: #30363c;
		}
	`;t([gt({type:Number})],Qt.prototype,"rating",void 0);t([gt({type:Boolean})],Qt.prototype,"submitted",void 0);Qt=t([dt("feedback-content")],Qt);let te=class t extends ht{constructor(){super(...arguments);this.open=false;this.rating=0;this.submitted=false}handleClose(){this.submitted=false;this.rating=0;this.open=false;this.dispatchEvent(new CustomEvent("close"))}handleSubmit(){this.submitted=true;this.dispatchEvent(new CustomEvent("submit",{detail:this.rating}));setTimeout((()=>{this.handleClose()}),3e3)}handleRatingSelect(t){this.rating=t.detail.rating}render(){return z`
			<base-drawer ?open=${this.open} @close=${this.handleClose}>
				<feedback-content
					.rating=${this.rating}
					.submitted=${this.submitted}
					@rating-select=${this.handleRatingSelect}
					@submit=${this.handleSubmit}
				></feedback-content>
			</base-drawer>
		`}};t([gt({type:Boolean,reflect:true})],te.prototype,"open",void 0);t([gt({type:Number})],te.prototype,"rating",void 0);t([gt({type:Boolean})],te.prototype,"submitted",void 0);te=t([dt("feedback-bottom-sheet")],te);let ee=class t extends($t(ht)){constructor(){super(...arguments);this.botImage=bt.BOT;this.sendMsgEnableImage=bt.SEND_MESSAGE_ENABLE;this.sendMsgDisableImage=bt.SEND_MESSAGE_DISABLE;this.closeChatIcon=bt.CLOSE_CHAT;this.showCloseButton=false;this.buttonLabel="Close";this.theme={fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"};this.showChatInput=true;this.showFeedbackDrawer=false;this.rating=0;this._handlePageClose=()=>{var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)}}handleEndConversation(){this.showFeedbackDrawer=true}handleRatingSelect(t){this.rating=t.detail.rating}async submitFeedback(){try{await Et.submitFeedback({rating:this.rating,conversationId:this.chatContext.conversationId});this.showFeedbackDrawer=false}catch(t){console.error("Error submitting feedback:",t)}}connectedCallback(){super.connectedCallback();this.initializeSessionStorage();this.loadComponents();this.chatContext.updateTheme(this.theme)}initializeSessionStorage(){try{const t=sessionStorage.getItem("chatbotData");if(!t){const t={chatAPI:{body:{inputs:{userId:"39783010",parentOrderId:"525744916255784960"},user:"Rakesh"},headers:{},theme:{}},customerCareNumber:""};sessionStorage.setItem("chatbotData",JSON.stringify(t));this.chatContext.setChatbotData(t)}else{const e=JSON.parse(t);this.chatContext.setChatbotData(e)}}catch(t){console.error("Error initializing session storage:",t)}}async loadComponents(){await Promise.all([this.loadHeaderComponent(),this.loadChatLoaderComponent(),this.loadTalkToAgentComponent()])}async loadHeaderComponent(){await Promise.resolve().then((function(){return It}))}async loadChatLoaderComponent(){await Promise.resolve().then((function(){return Jt}))}async loadTalkToAgentComponent(){await import("./talk-to-agent-d9b927d1.esm.js")}async handleSendMessage(t){var e;this.chatContext.setLoading(true);const s=t.detail.text;this.chatContext.addMessage({sender:"user",text:s,time:this.getCurrentTime()});const o=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("chat-message-list");if(o)o.forceScrollToBottom();try{const t=await Et.sendMessage({body:this.chatContext.chatbotData.chatAPI.body,message:s,conversationId:this.chatContext.conversationId});this.chatContext.setConversationId(t.conversation_id);const e=JSON.parse(t.answer).assistantLastMessage||"Sorry, I encountered an error. Please try again.";this.chatContext.addMessage({sender:"bot",text:e,time:this.getCurrentTime()});if(o)o.forceScrollToBottom()}catch(t){this.chatContext.addMessage({sender:"bot",text:"Sorry, I encountered an error. Please try again.",time:this.getCurrentTime()});if(o)o.forceScrollToBottom()}finally{this.chatContext.setLoading(false)}if(s.includes("no, thanks")||s.includes("no thanks")||s.includes("that's all"))this.handleEndConversation()}async scrollToBottom(){var t,e;await new Promise((t=>requestAnimationFrame(t)));const s=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("chat-message-list");if(s){const t=(e=s.shadowRoot)===null||e===void 0?void 0:e.querySelector(".chat-container");if(t)t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}}getCurrentTime(){return(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}render(){return z`
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

			<!-- Add the bottom drawer for feedback -->

			<feedback-bottom-sheet
				?open=${this.showFeedbackDrawer}
				@close=${()=>this.showFeedbackDrawer=false}
				@rating-select=${this.handleRatingSelect}
				@submit=${this.submitFeedback}
			></feedback-bottom-sheet>

			<!-- Add a button to trigger the feedback drawer -->
			<!-- <button
				class="feedback-button"
				@click=${()=>this.showFeedbackDrawer=true}
			>
				Rate Your Experience
			</button> -->
		`}};ee.styles=[vt];t([gt({type:Object})],ee.prototype,"apiBody",void 0);t([gt({type:String})],ee.prototype,"botImage",void 0);t([gt({type:String})],ee.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],ee.prototype,"sendMsgDisableImage",void 0);t([gt({type:String})],ee.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],ee.prototype,"onCloseChat",void 0);t([gt({type:Boolean,attribute:"show-close-button"})],ee.prototype,"showCloseButton",void 0);t([gt({type:String,attribute:"button-label"})],ee.prototype,"buttonLabel",void 0);t([gt({type:Object})],ee.prototype,"theme",void 0);t([mt()],ee.prototype,"showChatInput",void 0);t([mt()],ee.prototype,"showFeedbackDrawer",void 0);t([mt()],ee.prototype,"rating",void 0);ee=t([dt("ai-chat")],ee);export{ee as A,yt as D,t as _,bt as a,vt as c,dt as e,a as i,gt as n,ht as s,z as x};
