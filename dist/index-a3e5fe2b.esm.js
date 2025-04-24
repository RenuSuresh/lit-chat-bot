function t(t,e,s,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)if(r=t[a])n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n;return o>3&&n&&Object.defineProperty(e,s,n),n}typeof SuppressedError==="function"?SuppressedError:function(t,e,s){var i=new Error(s);return i.name="SuppressedError",i.error=t,i.suppressed=e,i};const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,i),a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(s,t,i)},l=(t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}))},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;var c;const d=window,p=d.trustedTypes,u=p?p.emptyScript:"",g=d.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v},b="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=f){var i;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:m).toAttribute(e,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:m;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y[b]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:y}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.3");var x;const C=window,$=C.trustedTypes,w=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,S="?"+k,A=`<${S}>`,E=document,T=()=>E.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,B=t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),O="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,R=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,U=/"/g,H=/^(?:script|style|textarea|title)$/i,z=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),j=z(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,Y=E.createTreeWalker(E,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":"",r=P;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===P?"!--"===l[1]?r=N:void 0!==l[1]?r=L:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=R):void 0!==l[3]&&(r=R):r===R?">"===l[0]?(r=null!=o?o:P,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?R:'"'===l[3]?U:D):r===U||r===D?r=R:r===N||r===L?r=P:(r=R,o=void 0);const d=r===R&&t[e+1].startsWith("/>")?" ":"";n+=r===P?s+A:h>=0?(i.push(a),s.slice(0,h)+_+s.slice(h)+k+d):s+k+(-2===h?(i.push(void 0),e):d)}return[W(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=J(t,e);if(this.el=K.createElement(l,s),Y.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=Y.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(_)||e.startsWith(k)){const s=h[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+_).split(k),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?st:"@"===e[1]?it:Q})}else a.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(H.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=$?$.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),Y.nextNode(),a.push({type:2,index:++o});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===S)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=E.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){var o,n,r,a;if(e===F)return e;let l=void 0!==i?null===(o=s._$Co)||void 0===o?void 0:o[i]:s._$Cl;const h=I(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(r=(a=s)._$Co)&&void 0!==r?r:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(s,!0);Y.currentNode=o;let n=Y.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Z(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new ot(n,this,t)),this._$AV.push(e),l=i[++a]}r!==(null==l?void 0:l.index)&&(n=Y.nextNode(),r++)}return Y.currentNode=E,o}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{constructor(t,e,s,i){var o;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):B(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(W(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(s);else{const t=new X(o,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Z(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,s,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=G(this,i[s+r],e,r),a===F&&(a=this._$AH[r]),n||(n=!I(a)||a!==this._$AH[r]),a===q?t=q:t!==q&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const et=$?$.emptyScript:"";class st extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class it extends Q{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=G(this,t,e,0))&&void 0!==s?s:q)===F)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=C.litHtmlPolyfillSupport;null==nt||nt(K,Z),(null!==(x=C.litHtmlVersions)&&void 0!==x?x:C.litHtmlVersions=[]).push("2.8.0");const rt=(t,e,s)=>{var i,o;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Z(e.insertBefore(T(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r};var at,lt;class ht extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}ht.finalized=!0,ht._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ht});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:ht});(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.3");const dt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e);const pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}},ut=(t,e,s)=>{e.constructor.createProperty(s,t)};function gt(t){return(e,s)=>void 0!==s?ut(t,e,s):pt(t,e)}function mt(t){return gt({...t,state:!0})}var vt;null!=(null===(vt=window.HTMLSlotElement)||void 0===vt?void 0:vt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));const ft=a`
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
`;const bt={BOT:"https://assets.pharmeasy.in/web-assets/images/image_chatbot.png",SEND_MESSAGE_ENABLE:"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg",SEND_MESSAGE_DISABLE:"https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disable.svg",CLOSE_CHAT:"https://assets.pharmeasy.in/web-assets/images/ic_close.svg",PHONE:"https://assets.pharmeasy.in/web-assets/images/callPhoneFilledWhite.svg"};const yt={CUSTOMER_CARE_NUMBER:"1800 208 5555"};class xt{constructor(){this._context={messages:[],isLoading:false,conversationId:"",chatbotData:{chatAPI:{body:{}},customerCareNumber:""},theme:{fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"},addMessage:t=>{this._context.messages=[...this._context.messages,t];xt.notifyListeners()},setLoading:t=>{this._context.isLoading=t;xt.notifyListeners()},setConversationId:t=>{this._context.conversationId=t;xt.notifyListeners()},setChatbotData:t=>{this._context.chatbotData=t;xt.notifyListeners()},updateTheme:t=>{this._context.theme=Object.assign(Object.assign({},this._context.theme),t);xt.notifyListeners()}}}static getInstance(){if(!xt.instance)xt.instance=new xt;return xt.instance}static addListener(t){xt.listeners.add(t)}static removeListener(t){xt.listeners.delete(t)}static notifyListeners(){xt.listeners.forEach((t=>t.requestUpdate()))}get context(){return this._context}}xt.listeners=new Set;class Ct{constructor(t){this.host=t;t.addController(this);this._context=xt.getInstance().context;xt.addListener(t)}hostConnected(){}hostDisconnected(){xt.removeListener(this.host)}get context(){return this._context}}const $t=t=>{class e extends t{connectedCallback(){super.connectedCallback();this._contextProvider=new Ct(this)}disconnectedCallback(){super.disconnectedCallback();this._contextProvider=void 0}get chatContext(){if(!this._contextProvider)throw new Error("Chat context not available. Make sure the component is connected to the DOM.");return this._contextProvider.context}}return e};class wt extends Error{constructor(t,e,s){super(e);this.status=t;this.details=s;this.name="HttpError"}}class _t{constructor(t={}){this.requestTimeout=1e4;this.requestInterceptors=[];this.cache=new Map;this.cacheTTL=3e5;this.baseUrl=t.baseUrl||"https://easybot.private.dataplatform.link/";this.token=t.token||"app-YX12rgf0CVRSXdtd4txQNOjy"}static getInstance(t){if(!_t.instance)_t.instance=new _t(t);return _t.instance}setToken(t){this.token=t}addRequestInterceptor(t){this.requestInterceptors.push(t)}applyInterceptors(t){return this.requestInterceptors.reduce(((t,e)=>e(t)),t)}async get(t,e){if((e===null||e===void 0?void 0:e.cache)&&this.cache.has(t)){const e=this.cache.get(t);if(Date.now()-e.timestamp<this.cacheTTL)return e.data}const s=new AbortController;const i=setTimeout((()=>s.abort()),(e===null||e===void 0?void 0:e.timeout)||this.requestTimeout);try{let i={signal:s.signal,headers:{Authorization:`Bearer ${this.token}`}};i=this.applyInterceptors(i);const o=await fetch(`${this.baseUrl}${t}`,i);const n=await this.handleResponse(o);if(e===null||e===void 0?void 0:e.cache)this.cache.set(t,{data:n,timestamp:Date.now()});return n}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new wt(408,"Request timeout");throw t}finally{clearTimeout(i)}}async post(t,e,s){const i=new AbortController;const o=setTimeout((()=>i.abort()),(s===null||s===void 0?void 0:s.timeout)||this.requestTimeout);try{let o={method:"POST",signal:i.signal,headers:Object.assign({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},s===null||s===void 0?void 0:s.headers),body:JSON.stringify(e)};o=this.applyInterceptors(o);const n=await fetch(`${this.baseUrl}${t}`,o);return this.handleResponse(n)}catch(t){if(t instanceof DOMException&&t.name==="AbortError")throw new wt(408,"Request timeout");throw t}finally{clearTimeout(o)}}async handleResponse(t){if(!t.ok){const e=await t.json().catch((()=>({status:t.status,statusText:t.statusText})));throw new wt(t.status,e.message||t.statusText,e.errors||void 0)}return t.json()}}const kt=_t.getInstance();class St{constructor(){this.basePath="v1/chat-messages"}async sendMessage({body:t,message:e,conversationId:s,headers:i}){const o=await kt.post(`${this.basePath}`,{inputs:t.inputs,query:e,response_mode:"blocking",conversation_id:s||void 0,user:t.user},{headers:i});return o}async submitFeedback({rating:t,conversationId:e}){await kt.post(`${this.basePath}/feedback`,{rating:t,conversation_id:e})}}const At=new St;const Et=a`
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
`;let Tt=class t extends ht{constructor(){super(...arguments);this.closeChatIcon=""}handleCloseChat(){var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)}render(){return j`
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
		`}};Tt.styles=[ft,Et];t([gt({type:String})],Tt.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],Tt.prototype,"onCloseChat",void 0);Tt=t([dt("chat-header")],Tt);var It=Object.freeze({__proto__:null,get ChatHeader(){return Tt}});function Mt(t,e,s){return t?e():null==s?void 0:s()}const Bt=a`
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
			rgba(181, 205, 247, 0.15) 0.68%,
			rgba(178, 202, 231, 0.5) 97.3%
		);
	}
`;let Ot=class t extends ht{constructor(){super(...arguments);this.timestamp=""}get displayTimestamp(){const t={hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(navigator.language,t).format(this.date)}render(){return j`
			<div class="chat-timestamp-wrapper">
				<div class="timestamp-left-line"></div>
				<div class="timestamp">Today • ${this.displayTimestamp}</div>
				<div class="timestamp-right-line"></div>
			</div>
		`}};Ot.styles=[ft,Bt];t([gt({type:String})],Ot.prototype,"timestamp",void 0);t([gt({type:Date})],Ot.prototype,"date",void 0);Ot=t([dt("timestamp-divider")],Ot);const Pt=a`
	.chat-container {
		background-color: var(--message-container-bg-color);
		padding: 0 16px;
		overflow-y: auto;
		height: calc(100vh - var(--chat-input-height, 146px));
		max-height: calc(100vh - var(--chat-input-height, 146px));
		position: relative;
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
`;var Nt;(function(t){t["INFO"]="info"})(Nt||(Nt={}));const Lt=a`
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
`;let Rt=class t extends ht{constructor(){super(...arguments);this.message=""}get displayMessage(){if(this.info)return this.info.message;return this.message}render(){var t;return Mt((t=this.displayMessage)===null||t===void 0?void 0:t.trim(),(()=>j` <div class="chat-info-strip">${this.displayMessage}</div> `),(()=>j``))}};Rt.styles=[ft,Lt];t([gt({type:Object})],Rt.prototype,"info",void 0);t([gt({type:String})],Rt.prototype,"message",void 0);Rt=t([dt("chat-info-strip")],Rt);const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=t=>(...e)=>({_$litDirective$:t,values:e});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class zt extends Ht{constructor(t){if(super(t),this.et=q,t.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this.ft=void 0,this.et=t;if(t===F)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}zt.directiveName="unsafeHTML",zt.resultType=1;const jt=Ut(zt);const Ft=a`
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
`;let qt=class t extends ht{constructor(){super(...arguments);this.botImage=""}render(){return j`
			<div class="bot-message-container">
				<div class="bot-message-content">
					<img src=${this.botImage} alt="bot" width="40" height="40" />
					<div class="bot-message">${jt(this.message.text)}</div>
				</div>
				<div class="bot-timestamp">${this.message.time}</div>
			</div>
		`}};qt.styles=[ft,Ft];t([gt({type:Object})],qt.prototype,"message",void 0);t([gt({type:String})],qt.prototype,"botImage",void 0);qt=t([dt("bot-message")],qt);let Vt=class t extends ht{render(){return j`
			<div class="user-message-container">
				<div class="user-message-content">
					<div class="user-message">${this.message.text}</div>
				</div>
				<div class="user-timestamp">${this.message.time}</div>
			</div>
		`}};Vt.styles=[ft,Ft];t([gt({type:Object})],Vt.prototype,"message",void 0);Vt=t([dt("user-message")],Vt);const Yt=a`
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
`;let Wt=class t extends ht{render(){return j`
			<div class="loader">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		`}};Wt.styles=Yt;Wt=t([dt("chat-loader")],Wt);var Jt=Object.freeze({__proto__:null,get ChatLoader(){return Wt}});let Kt=class t extends($t(ht)){constructor(){super(...arguments);this.isNewConversation=true;this.botImage=bt.BOT;this.isConversationClosed=false;this.isStartChatReached=false;this.isTransferCallReached=false;this.chatContainer=null;this.observer=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();if(this.observer)this.observer.disconnect()}firstUpdated(){var t;this.chatContainer=(t=this.shadowRoot)===null||t===void 0?void 0:t.getElementById("chat-container");if(this.chatContainer&&this.observer)this.observer.observe(this.chatContainer,{childList:true,characterData:true,subtree:true});this.scrollToBottom()}updated(t){var e;super.updated(t);if(t.has("chatContext")){const s=((e=t.get("chatContext"))===null||e===void 0?void 0:e.messages)||[];const i=this.chatContext.messages;if(i.length>s.length)requestAnimationFrame((()=>{setTimeout((()=>{this.scrollToBottom()}),50)}))}if(t.has("isConversationClosed")||t.has("isStartChatReached")||t.has("isTransferCallReached"))this.scrollToBottom()}scrollToBottom(){requestAnimationFrame((()=>{if(this.chatContainer)this.chatContainer.scrollTo({top:this.chatContainer.scrollHeight,behavior:"smooth"})}))}renderTimestampDivider(){return Mt(this.isNewConversation,(()=>j`
				<timestamp-divider
					.date=${new Date}
					.showFullDate=${true}
				></timestamp-divider>
			`))}renderMessage(t){return Mt(t.sender==="bot",(()=>j`
				<bot-message .message=${t} .botImage=${this.botImage}></bot-message>
			`),(()=>j` <user-message .message=${t}></user-message> `))}renderLoadingIndicator(){return this.chatContext.isLoading?j`<div class="bot-message-container">
					<div class="bot-message-content">
						<img src=${this.botImage} alt="bot" width="40" height="40" />
						<div class="bot-message">
							<chat-loader></chat-loader>
						</div>
					</div>
			  </div>`:null}getStartChatInfo(){return{type:Nt.INFO,message:"You've reached the start of the conversation."}}getConversationCloseInfo(){return{type:Nt.INFO,message:"✅ This conversation has been closed"}}getTransferCallInfo(){return{type:Nt.INFO,message:"Transferring your call to one of our support executive"}}forceScrollToBottom(){requestAnimationFrame((()=>{setTimeout((()=>{this.scrollToBottom()}),50)}))}render(){return j`
			<div class="chat-container" id="chat-container">
				${this.renderTimestampDivider()}
				${Mt(this.isStartChatReached,(()=>j`
						<chat-info-strip .info=${this.getStartChatInfo()}></chat-info-strip>
					`))}
				${this.chatContext.messages.map((t=>this.renderMessage(t)))}
				${this.renderLoadingIndicator()}
				${Mt(this.isConversationClosed,(()=>j`
						<chat-info-strip
							.info=${this.isTransferCallReached?this.getTransferCallInfo():this.getConversationCloseInfo()}
						></chat-info-strip>
					`))}
			</div>
		`}};Kt.styles=[ft,Pt];t([mt()],Kt.prototype,"isNewConversation",void 0);t([gt({type:String})],Kt.prototype,"botImage",void 0);t([gt({type:Boolean})],Kt.prototype,"isConversationClosed",void 0);t([gt({type:Boolean})],Kt.prototype,"isStartChatReached",void 0);t([gt({type:Boolean})],Kt.prototype,"isTransferCallReached",void 0);Kt=t([dt("chat-message-list")],Kt);const Gt=a`
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

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}

	.input-container {
		box-sizing: border-box;
		padding: 12px;
		background-color: #ffffff;
		position: relative;
		border: 1px solid #e6ebf4;
		border-radius: 16px;
		width: 100%;
	}

	.input-group {
		position: relative;
	}

	.chat-input {
		flex-grow: 1;
		padding: 16px;
		max-width: 85%;

		outline: none;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: var(--input-text-color);

		width: 100%;
		min-height: 18px;
		max-height: 72px;
		padding: 0;
		margin: 0;
		border: none;
		outline: none;
		resize: none;
		overflow-y: auto;
		background: transparent;
		font: inherit;
		padding-right: 40px; /* Make space for character counter */
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
		cursor: not-allowed;
	}

	.char-count {
		position: absolute;
		right: 12px;
		bottom: 8px;
		font-size: 10px;
		line-height: 16px;
		color: #8897a2;
		pointer-events: none;
	}

	.char-count.limit-reached {
		color: #ff6b6b;
	}
`;const Xt=72;const Zt=200;let Qt=class t extends($t(ht)){constructor(){super(...arguments);this.inputValue="";this.charCount=0;this.sendMsgEnableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage.svg";this.sendMsgDisableImage="https://assets.pharmeasy.in/web-assets/images/icon_sendMessage_disabled.svg"}_focusInput(){var t;const e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("textarea");e===null||e===void 0?void 0:e.focus()}_handleFocus(){var t,e;(e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(".input-container"))===null||e===void 0?void 0:e.classList.add("focused")}_adjustHeight(){var t;const e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("textarea");if(!e)return;e.style.height="auto";const s=e.scrollHeight;if(s<=Xt){e.style.height=`${s}px`;e.style.overflowY="hidden"}else{e.style.height=`${Xt}px`;e.style.overflowY="auto"}}_handleInput(t){const e=t.target;if(e.value.length>Zt)e.value=e.value.slice(0,Zt);this.inputValue=e.value;this.charCount=e.value.length;this._adjustHeight()}_handleKeyPress(t){if(t.key==="Enter"&&!t.shiftKey){t.preventDefault();this.emitSendMessage()}}handleSendClick(){this.emitSendMessage()}emitSendMessage(){if(this.inputValue.trim()&&this.inputValue.length<=Zt&&!this.chatContext.isLoading){this.handleSendMessage({detail:{text:this.inputValue},bubbles:true,composed:true});this.inputValue="";this.charCount=0}}async handleSendMessage(t){var e,s;this.chatContext.setLoading(true);const i=t.detail.text;this.chatContext.addMessage({sender:"user",text:i,time:this.getCurrentTime()});const o=document.querySelector("ai-chat");const n=(e=o===null||o===void 0?void 0:o.shadowRoot)===null||e===void 0?void 0:e.querySelector("chat-message-list");if(n)n.forceScrollToBottom();const r=(s=this.shadowRoot)===null||s===void 0?void 0:s.getElementById("chat-input");if(r){r.style.height="auto";r.style.height="18px"}try{const t=await At.sendMessage({body:this.chatContext.chatbotData.chatAPI.body,message:i,conversationId:this.chatContext.conversationId});this.chatContext.setConversationId(t.conversation_id);const e=JSON.parse(t.answer).assistantLastMessage||"Sorry, I encountered an error. Please try again.";this.chatContext.addMessage({sender:"bot",text:e,time:this.getCurrentTime()});if(n)n.forceScrollToBottom()}catch(t){this.chatContext.addMessage({sender:"bot",text:"Sorry, I encountered an error. Please try again.",time:this.getCurrentTime()});if(n)n.forceScrollToBottom()}finally{this.chatContext.setLoading(false)}if(i.includes("no, thanks")||i.includes("no thanks")||i.includes("that's all"))console.log("handle end conversation>>>>")}getCurrentTime(){return(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}render(){return j`
			<div class="input-area">
				<div class="container">
					<div class="input-container" @click=${this._focusInput}>
						<textarea
							rows="1"
							.value=${this.inputValue}
							@input=${this._handleInput}
							@keydown=${this._handleKeyPress}
							@focus=${this._handleFocus}
							placeholder="Type your query here"
							class="chat-input"
							maxlength=${Zt}
							id="chat-input"
						></textarea>
						${this.charCount>0?j`
									<div
										class="char-count ${this.charCount===Zt?"limit-reached":""}"
									>
										${this.charCount}/${Zt}
									</div>
							  `:""}
					</div>
				</div>
				<button
					@click=${this.handleSendClick}
					?disabled=${!this.inputValue.trim()||this.chatContext.isLoading}
					class="send-btn"
				>
					<img
						src=${!this.inputValue.trim()||this.chatContext.isLoading?this.sendMsgDisableImage:this.sendMsgEnableImage}
						width="40"
						height="40"
					/>
				</button>
			</div>
		`}};Qt.styles=[ft,Gt];t([mt()],Qt.prototype,"inputValue",void 0);t([mt()],Qt.prototype,"charCount",void 0);t([gt({type:String})],Qt.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],Qt.prototype,"sendMsgDisableImage",void 0);Qt=t([dt("chat-input")],Qt);let te=class t extends ht{constructor(){super(...arguments);this.open=false;this.position="bottom";this.isClosing=false;this.backdrop=null;this.popStateHandler=()=>{if(this.open)this.handleClose()}}connectedCallback(){super.connectedCallback();window.addEventListener("popstate",this.popStateHandler)}disconnectedCallback(){super.disconnectedCallback();this.toggleBodyOverflow(false);this.removeBackdrop();window.removeEventListener("popstate",this.popStateHandler)}updated(t){if(t.has("open")){this.toggleBodyOverflow(this.open);if(this.open){this.addBackdrop();history.pushState({drawer:true},"")}else this.removeBackdrop()}}toggleBodyOverflow(t){document.body.style.overflow=t?"hidden":""}handleClose(){this.isClosing=true;setTimeout((()=>{this.isClosing=false;this.open=false;this.dispatchEvent(new CustomEvent("close"))}),300)}addBackdrop(){if(this.backdrop)return;this.backdrop=document.createElement("div");this.backdrop.className="drawer-backdrop";this.backdrop.style.cssText=`\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(0, 0, 0, 0.5);\n            z-index: 999;\n            opacity: 0;\n            transition: opacity 0.3s ease-out;\n        `;this.backdrop.addEventListener("click",this.handleBackdropClick.bind(this));document.body.appendChild(this.backdrop);requestAnimationFrame((()=>{if(this.backdrop)this.backdrop.style.opacity="1"}))}removeBackdrop(){if(this.backdrop){this.backdrop.remove();this.backdrop=null}}handleBackdropClick(){this.handleClose()}render(){return j`
			${Mt(this.open||this.isClosing,(()=>j`
					<div
						class="drawer-wrapper"
						position=${this.position}
						part="drawer-wrapper"
					>
						<div
							class="drawer-content ${this.isClosing?"closing":""}"
							position=${this.position}
							part="drawer-content"
						>
							<div
								class="close-button-wrapper"
								position=${this.position}
								part="close-wrapper"
							>
								<button
									class="close-button"
									@click=${this.handleClose}
									part="close-button"
								>
									×
								</button>
							</div>
							<div
								class="drawer-container"
								position=${this.position}
								part="drawer-container"
							>
								<slot></slot>
							</div>
						</div>
					</div>
				`),(()=>j``))}
		`}};te.styles=a`
		:host {
			display: contents;
		}

		.drawer-wrapper {
			position: fixed;
			z-index: 1000;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.drawer-wrapper[position="bottom"] {
			bottom: 0;
			left: 0;
			right: 0;
		}

		.drawer-wrapper[position="center"] {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: var(--drawer-width, auto);
		}

		.drawer-content {
			width: 100%;
			transform: translateY(0);
			animation: slideIn 0.3s ease-out;
		}

		.drawer-content[position="center"] {
			animation: fadeIn 0.3s ease-out;
		}

		.close-button-wrapper {
			position: absolute;
			z-index: 1001;
			background: transparent;
			border-radius: 50%;
		}

		.close-button-wrapper[position="bottom"] {
			top: -50px;
			left: 50%;
			transform: translateX(-50%);
		}

		.close-button-wrapper[position="center"] {
			top: 16px;
			right: 16px;
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
			box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
			position: relative;
		}

		.drawer-container[position="bottom"] {
			border-radius: 24px 24px 0 0;
			padding: 24px 16px;
		}

		.drawer-container[position="center"] {
			border-radius: 24px;
			max-width: 90vw;
			max-height: 90vh;
			overflow-y: auto;
			padding: 16px;
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

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: scale(0.95);
			}
			to {
				opacity: 1;
				transform: scale(1);
			}
		}

		@keyframes fadeOut {
			from {
				opacity: 1;
				transform: scale(1);
			}
			to {
				opacity: 0;
				transform: scale(0.95);
			}
		}

		.drawer-content.closing[position="bottom"] {
			animation: slideOut 0.3s ease-out;
		}

		.drawer-content.closing[position="center"] {
			animation: fadeOut 0.3s ease-out;
		}
	`;t([gt({type:Boolean,reflect:true})],te.prototype,"open",void 0);t([gt({type:String})],te.prototype,"position",void 0);t([gt({type:Boolean})],te.prototype,"isClosing",void 0);te=t([dt("base-drawer")],te);let ee=class t extends ht{constructor(){super(...arguments);this.rating=0;this.submitted=true}handleSubmit(){this.submitted=true;this.dispatchEvent(new CustomEvent("submit",{detail:this.rating}))}handleStarClick(t){this.rating=t;this.dispatchEvent(new CustomEvent("rating-select",{detail:{rating:t}}))}renderThankYou(){return j`
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
		`}renderFeedbackForm(){return j`
			<div class="title">Please rate your experience with us</div>
			<div class="subtitle">
				Your feedback helps us to improve our experience
			</div>

			<div class="stars">
				${[1,2,3,4,5].map((t=>j`
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
		`}render(){return this.submitted?this.renderThankYou():this.renderFeedbackForm()}};ee.styles=a`
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
	`;t([gt({type:Number})],ee.prototype,"rating",void 0);t([gt({type:Boolean})],ee.prototype,"submitted",void 0);ee=t([dt("feedback-content")],ee);let se=class t extends ht{constructor(){super(...arguments);this.open=false;this.rating=0;this.submitted=false}handleClose(){this.submitted=false;this.rating=0;this.open=false;this.dispatchEvent(new CustomEvent("close"))}handleSubmit(){this.submitted=true;this.dispatchEvent(new CustomEvent("submit",{detail:this.rating}));setTimeout((()=>{this.handleClose()}),3e3)}handleRatingSelect(t){this.rating=t.detail.rating}render(){return j`
			<base-drawer ?open=${this.open} @close=${this.handleClose}>
				<feedback-content
					.rating=${this.rating}
					.submitted=${this.submitted}
					@rating-select=${this.handleRatingSelect}
					@submit=${this.handleSubmit}
				></feedback-content>
			</base-drawer>
		`}};t([gt({type:Boolean,reflect:true})],se.prototype,"open",void 0);t([gt({type:Number})],se.prototype,"rating",void 0);t([gt({type:Boolean})],se.prototype,"submitted",void 0);se=t([dt("feedback-bottom-sheet")],se);let ie=class t extends ht{constructor(){super(...arguments);this.open=false;this.title="We didn't hear back from you";this.subtitle="Still there? Let us know if you need anything!";this.primaryButtonText="No, I'm fine";this.secondaryButtonText="Call support";this.inactivityTimeout=5e3;this.phoneNumber=yt.CUSTOMER_CARE_NUMBER;this.inactivityTimer=null;this.hasUserDismissed=false}connectedCallback(){super.connectedCallback();this.startInactivityTimer()}disconnectedCallback(){super.disconnectedCallback();this.clearInactivityTimer()}startInactivityTimer(){if(!this.hasUserDismissed){this.clearInactivityTimer();this.inactivityTimer=window.setTimeout((()=>{this.open=true}),this.inactivityTimeout)}}handleActivity(){if(!this.hasUserDismissed){this.open=false;this.startInactivityTimer()}}clearInactivityTimer(){if(this.inactivityTimer){window.clearTimeout(this.inactivityTimer);this.inactivityTimer=null}}handleClose(){this.open=false;this.hasUserDismissed=true;this.clearInactivityTimer();this.dispatchEvent(new CustomEvent("close"))}handlePrimaryClick(){this.open=false;this.hasUserDismissed=true;this.clearInactivityTimer()}handleSecondaryClick(){window.location.href=`tel:${this.phoneNumber}`;this.open=false;this.clearInactivityTimer()}render(){return j`
			<base-drawer
				?open=${this.open}
				position="center"
				@close=${this.handleClose}
			>
				<div class="popup-content" part="content">
					<div class="title">${this.title}</div>
					<div class="subtitle">${this.subtitle}</div>
					<div class="button-container">
						<button
							class="button secondary-button"
							@click=${this.handleSecondaryClick}
						>
							${this.secondaryButtonText}
						</button>
						<button
							class="button primary-button"
							@click=${this.handlePrimaryClick}
						>
							${this.primaryButtonText}
						</button>
					</div>
				</div>
			</base-drawer>
		`}};ie.styles=a`
		:host {
			--drawer-max-width: 320px;
		}

		base-drawer {
			--drawer-width: var(--drawer-max-width);
		}

		.popup-content {
			text-align: center;
			max-width: var(--drawer-max-width);
			margin: 0 auto;
		}

		/* Override base-drawer styles */
		:host ::part(drawer-wrapper) {
			max-width: var(--drawer-max-width);
			margin: 0 auto;
			left: 50%;
			transform: translateX(-50%);
			background: white;
			border-radius: 16px;
			box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
		}

		.title {
			color: #30363c;
			margin-bottom: 4px;
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
		}

		.subtitle {
			font-weight: 400;
			font-size: 12px;
			line-height: 18px;

			margin-bottom: 24px;
			color: #4f585e;
		}

		.button-container {
			display: flex;
			gap: 16px;
			justify-content: center;
		}

		.button {
			padding: 8px 24px;
			border-radius: 8px;
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			text-align: center;

			cursor: pointer;
			border: none;
			min-width: 140px;
			font-family: var(--font-family);
		}

		.primary-button {
			background-color: #10847e;
			color: white;
		}

		.secondary-button {
			background-color: #fff;
			color: #30363c;
			border: 1px solid #e6ebf4;
		}

		.button:hover {
			opacity: 0.9;
		}
	`;t([gt({type:Boolean})],ie.prototype,"open",void 0);t([gt({type:String})],ie.prototype,"title",void 0);t([gt({type:String})],ie.prototype,"subtitle",void 0);t([gt({type:String})],ie.prototype,"primaryButtonText",void 0);t([gt({type:String})],ie.prototype,"secondaryButtonText",void 0);t([gt({type:Number})],ie.prototype,"inactivityTimeout",void 0);t([gt({type:String})],ie.prototype,"phoneNumber",void 0);ie=t([dt("popup-drawer")],ie);let oe=class t extends($t(ht)){constructor(){super(...arguments);this.botImage=bt.BOT;this.sendMsgEnableImage=bt.SEND_MESSAGE_ENABLE;this.sendMsgDisableImage=bt.SEND_MESSAGE_DISABLE;this.closeChatIcon=bt.CLOSE_CHAT;this.showCloseButton=false;this.buttonLabel="Close";this.theme={fontFamily:"Inter, sans-serif",headerBgColor:"#3e415b",headerTitleColor:"#ffffff",headerSubtitleColor:"#f5f8fc",messageContainerBgColor:"#ffffff",loaderColor:"#3e415b",botMsgBgColor:"#ffffff",botMsgBorderColor:"#e6ebf4",botMsgTextColor:"#30363c",userMsgBgColor:"#EBF2FF",userMsgTextColor:"#30363c",userMsgBorderColor:"#B5CDF7",inputBackgroundColor:"#ebf2ff",inputBorderColor:"#e6ebf4",inputTextColor:"#30363c",placeholderTextColor:"#8897a2"};this.showChatInput=true;this.showFeedbackDrawer=false;this.rating=0;this.showInactivityPopup=false;this.inactivityTimer=null;this.INACTIVITY_TIMEOUT=5e3;this.hasUserDismissedPopup=false;this.chatInputObserver=null;this._handlePageClose=()=>{var t;(t=this.onCloseChat)===null||t===void 0?void 0:t.call(this)}}connectedCallback(){super.connectedCallback();this.initializeSessionStorage();this.loadComponents();this.chatContext.updateTheme(this.theme);this.resetInactivityTimer()}firstUpdated(){var t;const e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("chat-input");if(e){this.chatInputObserver=new ResizeObserver((t=>{for(const e of t){const t=e.contentRect.height+58;this.style.setProperty("--chat-input-height",`${t}px`)}}));this.chatInputObserver.observe(e)}}disconnectedCallback(){if(this.chatInputObserver)this.chatInputObserver.disconnect();super.disconnectedCallback();if(this.inactivityTimer)window.clearTimeout(this.inactivityTimer)}handleEndConversation(){this.showFeedbackDrawer=true}handleRatingSelect(t){this.rating=t.detail.rating}async submitFeedback(){try{await At.submitFeedback({rating:this.rating,conversationId:this.chatContext.conversationId});this.showFeedbackDrawer=false}catch(t){console.error("Error submitting feedback:",t)}}resetInactivityTimer(){if(this.inactivityTimer)window.clearTimeout(this.inactivityTimer);if(!this.hasUserDismissedPopup)this.inactivityTimer=window.setTimeout((()=>{this.showInactivityPopup=true}),this.INACTIVITY_TIMEOUT)}handleInputActivity(){if(!this.hasUserDismissedPopup){this.showInactivityPopup=false;this.resetInactivityTimer()}}initializeSessionStorage(){try{const t=sessionStorage.getItem("chatbotData");if(!t){const t={chatAPI:{body:{inputs:{userId:"39783010",parentOrderId:"525744916255784960"},user:"Rakesh"},headers:{},theme:{}},customerCareNumber:""};sessionStorage.setItem("chatbotData",JSON.stringify(t));this.chatContext.setChatbotData(t)}else{const e=JSON.parse(t);this.chatContext.setChatbotData(e)}}catch(t){console.error("Error initializing session storage:",t)}}async loadComponents(){await Promise.all([this.loadHeaderComponent(),this.loadChatLoaderComponent(),this.loadTalkToAgentComponent()])}async loadHeaderComponent(){await Promise.resolve().then((function(){return It}))}async loadChatLoaderComponent(){await Promise.resolve().then((function(){return Jt}))}async loadTalkToAgentComponent(){await import("./talk-to-agent-35be6523.esm.js")}render(){return j`
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

			${this.showChatInput?j`<chat-input @input=${this.handleInputActivity}></chat-input>`:j`<talk-to-agent
						.phoneNumber=${this.chatContext.chatbotData.customerCareNumber}
				  ></talk-to-agent>`}

			<!-- Add the bottom drawer for feedback -->

			<feedback-bottom-sheet
				?open=${this.showFeedbackDrawer}
				@close=${()=>this.showFeedbackDrawer=false}
				@rating-select=${this.handleRatingSelect}
				@submit=${this.submitFeedback}
			></feedback-bottom-sheet>

			<popup-drawer></popup-drawer>
		`}};oe.styles=[ft];t([gt({type:Object})],oe.prototype,"apiBody",void 0);t([gt({type:String})],oe.prototype,"botImage",void 0);t([gt({type:String})],oe.prototype,"sendMsgEnableImage",void 0);t([gt({type:String})],oe.prototype,"sendMsgDisableImage",void 0);t([gt({type:String})],oe.prototype,"closeChatIcon",void 0);t([gt({attribute:false})],oe.prototype,"onCloseChat",void 0);t([gt({type:Boolean,attribute:"show-close-button"})],oe.prototype,"showCloseButton",void 0);t([gt({type:String,attribute:"button-label"})],oe.prototype,"buttonLabel",void 0);t([gt({type:Object})],oe.prototype,"theme",void 0);t([mt()],oe.prototype,"showChatInput",void 0);t([mt()],oe.prototype,"showFeedbackDrawer",void 0);t([mt()],oe.prototype,"rating",void 0);t([mt()],oe.prototype,"showInactivityPopup",void 0);oe=t([dt("ai-chat")],oe);export{oe as A,yt as D,t as _,bt as a,ft as c,dt as e,a as i,gt as n,ht as s,j as x};
