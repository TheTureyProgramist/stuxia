import{i as e,o as t,t as n}from"./rolldown-runtime-C0FnF6B9.js";import{a as r,i,o as a,t as o}from"./jsx-runtime-CJi9uaNB.js";import{n as s,t as c}from"./proxy-CcI6wC3-.js";import{t as l}from"./localforage-CgxtEHGc.js";import{t as u}from"./iconBase-xloHpk6U.js";import{I as d}from"./miaandme-DOn-Kpwu.js";import{L as f,a as p}from"./index-CbNTxoaW.js";var m=t(a()),h=t(l());function g(e){return u({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`8`,cy:`9`,r:`2`},child:[]},{tag:`path`,attr:{d:`m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2`},child:[]},{tag:`path`,attr:{d:`M8 21h8`},child:[]},{tag:`path`,attr:{d:`M12 17v4`},child:[]}]})(e)}var _=Object.defineProperty,v=(e,t)=>{let n={};for(var r in e)_(n,r,{get:e[r],enumerable:!0});return t||_(n,Symbol.toStringTag,{value:`Module`}),n};function y(e){return y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},y(e)}function b(e){var t=function(e,t){if(y(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(y(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}(e,`string`);return y(t)==`symbol`?t:t+``}function x(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=class{constructor(){x(this,`browserShadowBlurConstant`,1),x(this,`DPI`,96),x(this,`devicePixelRatio`,typeof window<`u`?window.devicePixelRatio:1),x(this,`perfLimitSizeTotal`,2097152),x(this,`maxCacheSideLimit`,4096),x(this,`minCacheSideLimit`,256),x(this,`disableStyleCopyPaste`,!1),x(this,`enableGLFiltering`,!0),x(this,`textureSize`,4096),x(this,`forceGLPutImageData`,!1),x(this,`cachesBoundsOfCurve`,!1),x(this,`fontPaths`,{}),x(this,`NUM_FRACTION_DIGITS`,4)}},C=new class extends S{constructor(e){super(),this.configure(e)}configure(e={}){Object.assign(this,e)}addFonts(e={}){this.fontPaths={...this.fontPaths,...e}}removeFonts(e=[]){e.forEach(e=>{delete this.fontPaths[e]})}clearFonts(){this.fontPaths={}}restoreDefaults(e){let t=new S,n=e?.reduce((e,n)=>(e[n]=t[n],e),{})||t;this.configure(n)}},w=(e,...t)=>console[e](`fabric`,...t),T=class extends Error{constructor(e,t){super(`fabric: ${e}`,t)}},E=class extends T{constructor(e){super(`${e} 'options.signal' is in 'aborted' state`)}},D=class{},O=class extends D{testPrecision(e,t){let n=`precision ${t} float;\nvoid main(){}`,r=e.createShader(e.FRAGMENT_SHADER);return!!r&&(e.shaderSource(r,n),e.compileShader(r),!!e.getShaderParameter(r,e.COMPILE_STATUS))}queryWebGL(e){let t=e.getContext(`webgl`);t&&(this.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE),this.GLPrecision=[`highp`,`mediump`,`lowp`].find(e=>this.testPrecision(t,e)),t.getExtension(`WEBGL_lose_context`).loseContext(),w(`log`,`WebGL: max texture size ${this.maxTextureSize}`))}isSupported(e){return!!this.maxTextureSize&&this.maxTextureSize>=e}},k={},A,j=()=>A||={document,window,isTouchSupported:`ontouchstart`in window||`ontouchstart`in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new O,dispose(){},copyPasteData:k},M=()=>j().document,N=()=>j().window,P=()=>Math.max(C.devicePixelRatio??N().devicePixelRatio,1),F=new class{constructor(){x(this,`boundsOfCurveCache`,{}),this.charWidthsCache=new Map}getFontCache({fontFamily:e,fontStyle:t,fontWeight:n}){e=e.toLowerCase();let r=this.charWidthsCache;r.has(e)||r.set(e,new Map);let i=r.get(e),a=`${t.toLowerCase()}_${(n+``).toLowerCase()}`;return i.has(a)||i.set(a,new Map),i.get(a)}clearFontCache(e){e?this.charWidthsCache.delete((e||``).toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(e){let{perfLimitSizeTotal:t}=C,n=Math.sqrt(t*e);return[Math.floor(n),Math.floor(t/n)]}},I=`7.4.0`;function L(){}var R=Math.PI/2,ee=Math.PI/4,z=2*Math.PI,te=Math.PI/180,B=Object.freeze([1,0,0,1,0,0]),V=`center`,ne=`left`,re=`bottom`,ie=`right`,ae=`none`,oe=/\r?\n/,se=`moving`,ce=`scaling`,le=`rotating`,ue=`rotate`,de=`skewing`,fe=`resizing`,pe=`modifyPoly`,me=`changed`,he=`scale`,H=`scaleX`,ge=`scaleY`,_e=`skewX`,ve=`skewY`,U=`fill`,ye=`stroke`,W=`modified`,G=`normal`,be=`json`,K=new class{constructor(){this[be]=new Map,this.svg=new Map}has(e){return this[be].has(e)}getClass(e){let t=this[be].get(e);if(!t)throw new T(`No class registered for ${e}`);return t}setClass(e,t){t?this[be].set(t,e):(this[be].set(e.type,e),this[be].set(e.type.toLowerCase(),e))}getSVGClass(e){return this.svg.get(e)}setSVGClass(e,t){this.svg.set(t??e.type.toLowerCase(),e)}},xe=new class extends Array{remove(e){let t=this.indexOf(e);t>-1&&this.splice(t,1)}cancelAll(){let e=this.splice(0);return e.forEach(e=>e.abort()),e}cancelByCanvas(e){if(!e)return[];let t=this.filter(t=>t.target===e||typeof t.target==`object`&&t.target?.canvas===e);return t.forEach(e=>e.abort()),t}cancelByTarget(e){if(!e)return[];let t=this.filter(t=>t.target===e);return t.forEach(e=>e.abort()),t}},Se=class{constructor(){x(this,`__eventListeners`,{})}on(e,t){if(this.__eventListeners||={},typeof e==`object`)return Object.entries(e).forEach(([e,t])=>{this.on(e,t)}),()=>this.off(e);if(t){let n=e;return this.__eventListeners[n]||(this.__eventListeners[n]=[]),this.__eventListeners[n].push(t),()=>this.off(n,t)}return()=>!1}once(e,t){if(typeof e==`object`){let t=[];return Object.entries(e).forEach(([e,n])=>{t.push(this.once(e,n))}),()=>t.forEach(e=>e())}if(t){let n=this.on(e,function(...e){t.call(this,...e),n()});return n}return()=>!1}_removeEventListener(e,t){if(this.__eventListeners[e]){if(t){let n=this.__eventListeners[e],r=n.indexOf(t);r>-1&&n.splice(r,1)}else this.__eventListeners[e]=[]}}off(e,t){if(this.__eventListeners){if(e===void 0)for(let e in this.__eventListeners)this._removeEventListener(e);else typeof e==`object`?Object.entries(e).forEach(([e,t])=>{this._removeEventListener(e,t)}):this._removeEventListener(e,t)}}fire(e,t){if(!this.__eventListeners)return;let n=this.__eventListeners[e]?.concat();if(n)for(let e=0;e<n.length;e++)n[e].call(this,t||{})}},Ce=(e,t)=>{let n=e.indexOf(t);return n!==-1&&e.splice(n,1),e},we=e=>{if(e===0)return 1;switch(Math.abs(e)/R){case 1:case 3:return 0;case 2:return-1}return Math.cos(e)},Te=e=>{if(e===0)return 0;let t=e/R,n=Math.sign(e);switch(t){case 1:return n;case 2:return 0;case 3:return-n}return Math.sin(e)},q=class e{constructor(e=0,t=0){typeof e==`object`?(this.x=e.x,this.y=e.y):(this.x=e,this.y=t)}add(t){return new e(this.x+t.x,this.y+t.y)}addEquals(e){return this.x+=e.x,this.y+=e.y,this}scalarAdd(t){return new e(this.x+t,this.y+t)}scalarAddEquals(e){return this.x+=e,this.y+=e,this}subtract(t){return new e(this.x-t.x,this.y-t.y)}subtractEquals(e){return this.x-=e.x,this.y-=e.y,this}scalarSubtract(t){return new e(this.x-t,this.y-t)}scalarSubtractEquals(e){return this.x-=e,this.y-=e,this}multiply(t){return new e(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new e(this.x*t,this.y*t)}scalarMultiplyEquals(e){return this.x*=e,this.y*=e,this}divide(t){return new e(this.x/t.x,this.y/t.y)}scalarDivide(t){return new e(this.x/t,this.y/t)}scalarDivideEquals(e){return this.x/=e,this.y/=e,this}eq(e){return this.x===e.x&&this.y===e.y}lt(e){return this.x<e.x&&this.y<e.y}lte(e){return this.x<=e.x&&this.y<=e.y}gt(e){return this.x>e.x&&this.y>e.y}gte(e){return this.x>=e.x&&this.y>=e.y}lerp(t,n=.5){return n=Math.max(Math.min(1,n),0),new e(this.x+(t.x-this.x)*n,this.y+(t.y-this.y)*n)}distanceFrom(e){let t=this.x-e.x,n=this.y-e.y;return Math.sqrt(t*t+n*n)}midPointFrom(e){return this.lerp(e)}min(t){return new e(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new e(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return`${this.x},${this.y}`}setXY(e,t){return this.x=e,this.y=t,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setFromPoint(e){return this.x=e.x,this.y=e.y,this}swap(e){let t=this.x,n=this.y;this.x=e.x,this.y=e.y,e.x=t,e.y=n}clone(){return new e(this.x,this.y)}rotate(t,n=Ee){let r=Te(t),i=we(t),a=this.subtract(n);return new e(a.x*i-a.y*r,a.x*r+a.y*i).add(n)}transform(t,n=!1){return new e(t[0]*this.x+t[2]*this.y+(n?0:t[4]),t[1]*this.x+t[3]*this.y+(n?0:t[5]))}},Ee=new q(0,0),De=e=>!!e&&Array.isArray(e._objects);function Oe(e){class t extends e{constructor(...e){super(...e),x(this,`_objects`,[])}_onObjectAdded(e){}_onObjectRemoved(e){}_onStackOrderChanged(e){}add(...e){let t=this._objects.push(...e);return e.forEach(e=>this._onObjectAdded(e)),t}insertAt(e,...t){return this._objects.splice(e,0,...t),t.forEach(e=>this._onObjectAdded(e)),this._objects.length}remove(...e){let t=this._objects,n=[];return e.forEach(e=>{let r=t.indexOf(e);r!==-1&&(t.splice(r,1),n.push(e),this._onObjectRemoved(e))}),n}forEachObject(e){this.getObjects().forEach((t,n,r)=>e(t,n,r))}getObjects(...e){return e.length===0?[...this._objects]:this._objects.filter(t=>t.isType(...e))}item(e){return this._objects[e]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(e,n){return!!this._objects.includes(e)||!!n&&this._objects.some(n=>n instanceof t&&n.contains(e,!0))}complexity(){return this._objects.reduce((e,t)=>e+=t.complexity?t.complexity():0,0)}sendObjectToBack(e){return!(!e||e===this._objects[0])&&(Ce(this._objects,e),this._objects.unshift(e),this._onStackOrderChanged(e),!0)}bringObjectToFront(e){return!(!e||e===this._objects[this._objects.length-1])&&(Ce(this._objects,e),this._objects.push(e),this._onStackOrderChanged(e),!0)}sendObjectBackwards(e,t){if(!e)return!1;let n=this._objects.indexOf(e);if(n!==0){let r=this.findNewLowerIndex(e,n,t);return Ce(this._objects,e),this._objects.splice(r,0,e),this._onStackOrderChanged(e),!0}return!1}bringObjectForward(e,t){if(!e)return!1;let n=this._objects.indexOf(e);if(n!==this._objects.length-1){let r=this.findNewUpperIndex(e,n,t);return Ce(this._objects,e),this._objects.splice(r,0,e),this._onStackOrderChanged(e),!0}return!1}moveObjectTo(e,t){return e!==this._objects[t]&&(Ce(this._objects,e),this._objects.splice(t,0,e),this._onStackOrderChanged(e),!0)}findNewLowerIndex(e,t,n){let r;if(n){r=t;for(let n=t-1;n>=0;--n)if(e.isOverlapping(this._objects[n])){r=n;break}}else r=t-1;return r}findNewUpperIndex(e,t,n){let r;if(n){r=t;for(let n=t+1;n<this._objects.length;++n)if(e.isOverlapping(this._objects[n])){r=n;break}}else r=t+1;return r}collectObjects({left:e,top:t,width:n,height:r},{includeIntersecting:i=!0}={}){let a=[],o=new q(e,t),s=o.add(new q(n,r));for(let e=this._objects.length-1;e>=0;e--){let t=this._objects[e];t.selectable&&t.visible&&(i&&t.intersectsWithRect(o,s)||t.isContainedWithinRect(o,s)||i&&t.containsPoint(o)||i&&t.containsPoint(s))&&a.push(t)}return a}}return t}var ke=class extends Se{_setOptions(e={}){for(let t in e)this.set(t,e[t])}_setObject(e){for(let t in e)this._set(t,e[t])}set(e,t){return typeof e==`object`?this._setObject(e):this._set(e,t),this}_set(e,t){this[e]=t}toggle(e){let t=this.get(e);return typeof t==`boolean`&&this.set(e,!t),this}get(e){return this[e]}};function Ae(e){return N().requestAnimationFrame(e)}function je(e){return N().cancelAnimationFrame(e)}var Me=0,Ne=()=>Me++,Pe=()=>{let e=M().createElement(`canvas`);if(!e||e.getContext===void 0)throw new T("Failed to create `canvas` element");return e},Fe=()=>M().createElement(`img`),Ie=e=>{var t;let n=Le(e);return(t=n.getContext(`2d`))==null||t.drawImage(e,0,0),n},Le=e=>{let t=Pe();return t.width=e.width,t.height=e.height,t},Re=(e,t,n)=>e.toDataURL(`image/${t}`,n),ze=(e,t,n)=>new Promise((r,i)=>{e.toBlob(r,`image/${t}`,n)}),Be=e=>e*te,Ve=e=>e/te,He=e=>e.every((e,t)=>e===B[t]),Ue=(e,t,n)=>new q(e).transform(t,n),We=e=>{let t=1/(e[0]*e[3]-e[1]*e[2]),n=[t*e[3],-t*e[1],-t*e[2],t*e[0],0,0],{x:r,y:i}=new q(e[4],e[5]).transform(n,!0);return n[4]=-r,n[5]=-i,n},Ge=(e,t,n)=>[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],n?0:e[0]*t[4]+e[2]*t[5]+e[4],n?0:e[1]*t[4]+e[3]*t[5]+e[5]],Ke=(e,t)=>e.reduceRight((e,n)=>n&&e?Ge(n,e,t):n||e,void 0)||B.concat(),qe=([e,t])=>Math.atan2(t,e),Je=([e,t])=>Math.sqrt(e*e+t*t),Ye=([,,e,t])=>Math.sqrt(e*e+t*t),Xe=e=>{let t=qe(e),n=e[0]**2+e[1]**2,r=Math.sqrt(n),i=(e[0]*e[3]-e[2]*e[1])/r,a=Math.atan2(e[0]*e[2]+e[1]*e[3],n);return{angle:Ve(t),scaleX:r,scaleY:i,skewX:Ve(a),skewY:0,translateX:e[4]||0,translateY:e[5]||0}},Ze=(e,t=0)=>[1,0,0,1,e,t];function Qe({angle:e=0}={},{x:t=0,y:n=0}={}){let r=Be(e),i=we(r),a=Te(r);return[i,a,-a,i,t?t-(i*t-a*n):0,n?n-(a*t+i*n):0]}var $e=(e,t=e)=>[e,0,0,t,0,0],et=e=>Math.tan(Be(e)),tt=e=>[1,0,et(e),1,0,0],nt=e=>[1,et(e),0,1,0,0],rt=({scaleX:e=1,scaleY:t=1,flipX:n=!1,flipY:r=!1,skewX:i=0,skewY:a=0})=>{let o=$e(n?-e:e,r?-t:t);return i&&(o=Ge(o,tt(i),!0)),a&&(o=Ge(o,nt(a),!0)),o},it=e=>{let{translateX:t=0,translateY:n=0,angle:r=0}=e,i=Ze(t,n);r&&(i=Ge(i,Qe({angle:r})));let a=rt(e);return He(a)||(i=Ge(i,a)),i},at=(e,{signal:t,crossOrigin:n=null}={})=>new Promise(function(r,i){if(t&&t.aborted)return i(new E(`loadImage`));let a=Fe(),o;t&&(o=function(e){a.src=``,i(e)},t.addEventListener(`abort`,o,{once:!0}));let s=function(){a.onload=a.onerror=null,o&&t?.removeEventListener(`abort`,o),r(a)};e?(a.onload=s,a.onerror=function(){o&&t?.removeEventListener(`abort`,o),i(new T(`Error loading ${a.src}`))},n&&(a.crossOrigin=n),a.src=e):s()}),ot=(e,{signal:t,reviver:n=L}={})=>new Promise((r,i)=>{let a=[];t&&t.addEventListener(`abort`,i,{once:!0}),Promise.allSettled(e.map(e=>K.getClass(e.type).fromObject(e,{signal:t}))).then(async t=>{for(let[r,i]of t.entries())if(i.status===`fulfilled`&&(await n(e[r],i.value),a.push(i.value)),i.status===`rejected`){let t=await n(e[r],void 0,i.reason);t&&a.push(t)}r(a)}).catch(e=>{a.forEach(e=>{e.dispose&&e.dispose()}),i(e)}).finally(()=>{t&&t.removeEventListener(`abort`,i)})}),st=(e,{signal:t}={})=>new Promise((n,r)=>{let i=[];t&&t.addEventListener(`abort`,r,{once:!0});let a=Object.values(e).map(e=>e&&e.type&&K.has(e.type)?ot([e],{signal:t}).then(([e])=>(i.push(e),e)):e),o=Object.keys(e);Promise.all(a).then(e=>e.reduce((e,t,n)=>(e[o[n]]=t,e),{})).then(n).catch(e=>{i.forEach(e=>{e.dispose&&e.dispose()}),r(e)}).finally(()=>{t&&t.removeEventListener(`abort`,r)})}),ct=(e,t=[])=>t.reduce((t,n)=>(n in e&&(t[n]=e[n]),t),{}),lt=(e,t)=>Object.keys(e).reduce((n,r)=>(t(e[r],r,e)&&(n[r]=e[r]),n),{}),ut=(e,t)=>parseFloat(Number(e).toFixed(t)),dt=e=>`matrix(`+e.map(e=>ut(e,C.NUM_FRACTION_DIGITS)).join(` `)+`)`,ft=e=>!!e&&e.toLive!==void 0,pt=e=>!!e&&typeof e.toObject==`function`,mt=e=>!!e&&e.offsetX!==void 0&&`source`in e,ht=e=>!!e&&`multiSelectionStacking`in e;function gt(e){let t=e&&_t(e),n=0,r=0;if(!e||!t)return{left:n,top:r};let i=e,a=t.documentElement,o=t.body||{scrollLeft:0,scrollTop:0};for(;i&&(i.parentNode||i.host)&&(i=i.parentNode||i.host,i===t?(n=o.scrollLeft||a.scrollLeft||0,r=o.scrollTop||a.scrollTop||0):(n+=i.scrollLeft||0,r+=i.scrollTop||0),i.nodeType!==1||i.style.position!==`fixed`););return{left:n,top:r}}var _t=e=>e.ownerDocument||null,vt=e=>e.ownerDocument?.defaultView||null,yt=(e,t,{width:n,height:r},i=1)=>{e.width=n,e.height=r,i>1&&(e.setAttribute(`width`,(n*i).toString()),e.setAttribute(`height`,(r*i).toString()),t.scale(i,i))},bt=(e,{width:t,height:n})=>{t&&(e.style.width=typeof t==`number`?`${t}px`:t),n&&(e.style.height=typeof n==`number`?`${n}px`:n)};function xt(e){return e.onselectstart!==void 0&&(e.onselectstart=()=>!1),e.style.userSelect=ae,e}var St=class{constructor(e){x(this,`_originalCanvasStyle`,void 0),x(this,`lower`,void 0);let t=this.createLowerCanvas(e);this.lower={el:t,ctx:t.getContext(`2d`)}}createLowerCanvas(e){let t=(n=e)&&n.getContext!==void 0?e:e&&M().getElementById(e)||Pe();var n;if(t.hasAttribute(`data-fabric`))throw new T(`Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?`);return this._originalCanvasStyle=t.style.cssText,t.setAttribute(`data-fabric`,`main`),t.classList.add(`lower-canvas`),t}cleanupDOM({width:e,height:t}){let{el:n}=this.lower;n.classList.remove(`lower-canvas`),n.removeAttribute(`data-fabric`),n.setAttribute(`width`,`${e}`),n.setAttribute(`height`,`${t}`),n.style.cssText=this._originalCanvasStyle||``,this._originalCanvasStyle=void 0}setDimensions(e,t){let{el:n,ctx:r}=this.lower;yt(n,r,e,t)}setCSSDimensions(e){bt(this.lower.el,e)}calcOffset(){return function(e){let t=e&&_t(e),n={left:0,top:0};if(!t)return n;let r=vt(e)?.getComputedStyle(e,null)||{};n.left+=parseInt(r.borderLeftWidth,10)||0,n.top+=parseInt(r.borderTopWidth,10)||0,n.left+=parseInt(r.paddingLeft,10)||0,n.top+=parseInt(r.paddingTop,10)||0;let i={left:0,top:0},a=t.documentElement;e.getBoundingClientRect!==void 0&&(i=e.getBoundingClientRect());let o=gt(e);return{left:i.left+o.left-(a.clientLeft||0)+n.left,top:i.top+o.top-(a.clientTop||0)+n.top}}(this.lower.el)}dispose(){j().dispose(this.lower.el),delete this.lower}},Ct={backgroundVpt:!0,backgroundColor:``,overlayVpt:!0,overlayColor:``,includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...B],patternQuality:`best`},wt=v({capitalize:()=>Tt,escapeXml:()=>Et,graphemeSplit:()=>Ot}),Tt=(e,t=!1)=>`${e.charAt(0).toUpperCase()}${t?e.slice(1):e.slice(1).toLowerCase()}`,Et=e=>e.toString().replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),Dt,Ot=e=>{if(Dt||Dt||(Dt=`Intl`in N()&&`Segmenter`in Intl&&new Intl.Segmenter(void 0,{granularity:`grapheme`})),Dt){let t=Dt.segment(e);return Array.from(t).map(({segment:e})=>e)}return kt(e)},kt=e=>{let t=[];for(let n,r=0;r<e.length;r++)!1!==(n=At(e,r))&&t.push(n);return t},At=(e,t)=>{let n=e.charCodeAt(t);if(isNaN(n))return``;if(n<55296||n>57343)return e.charAt(t);if(55296<=n&&n<=56319){if(e.length<=t+1)throw`High surrogate without following low surrogate`;let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw`High surrogate without following low surrogate`;return e.charAt(t)+e.charAt(t+1)}if(t===0)throw`Low surrogate without preceding high surrogate`;let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw`Low surrogate without preceding high surrogate`;return!1},jt=class e extends Oe(ke){get lowerCanvasEl(){return this.elements.lower?.el}get contextContainer(){return this.elements.lower?.ctx}static getDefaults(){return e.ownDefaults}constructor(e,t={}){super(),Object.assign(this,this.constructor.getDefaults()),this.set(t),this.initElements(e),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(e){this.elements=new St(e)}add(...e){let t=super.add(...e);return e.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}insertAt(e,...t){let n=super.insertAt(e,...t);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),n}remove(...e){let t=super.remove(...e);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}_onObjectAdded(e){e.canvas&&e.canvas!==this&&(w(`warn`,`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),e.canvas.remove(e)),e._set(`canvas`,this),e.setCoords(),this.fire(`object:added`,{target:e}),e.fire(`added`,{target:this})}_onObjectRemoved(e){e._set(`canvas`,void 0),this.fire(`object:removed`,{target:e}),e.fire(`removed`,{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?P():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}_setDimensionsImpl(e,{cssOnly:t=!1,backstoreOnly:n=!1}={}){if(!t){let t={width:this.width,height:this.height,...e};this.elements.setDimensions(t,this.getRetinaScaling()),this.hasLostContext=!0,this.width=t.width,this.height=t.height}n||this.elements.setCSSDimensions(e),this.calcOffset()}setDimensions(e,t){this._setDimensionsImpl(e,t),t&&t.cssOnly||this.requestRenderAll()}getZoom(){return Je(this.viewportTransform)}setViewportTransform(e){this.viewportTransform=e,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(e,t){let n=e,r=[...this.viewportTransform],i=Ue(e,We(r));r[0]=t,r[3]=t;let a=Ue(i,r);r[4]+=n.x-a.x,r[5]+=n.y-a.y,this.setViewportTransform(r)}setZoom(e){this.zoomToPoint(new q(0,0),e)}absolutePan(e){let t=[...this.viewportTransform];return t[4]=-e.x,t[5]=-e.y,this.setViewportTransform(t)}relativePan(e){return this.absolutePan(new q(-e.x-this.viewportTransform[4],-e.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(e){e.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor=``,this.overlayColor=``,this.clearContext(this.getContext()),this.fire(`canvas:cleared`),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=Ae(()=>this.renderAndReset()))}calcViewportBoundaries(){let e=this.width,t=this.height,n=We(this.viewportTransform),r=Ue({x:0,y:0},n),i=Ue({x:e,y:t},n),a=r.min(i),o=r.max(i);return this.vptCoords={tl:a,tr:new q(o.x,a.y),bl:new q(a.x,o.y),br:o}}cancelRequestedRender(){this.nextRenderHandle&&=(je(this.nextRenderHandle),0)}drawControls(e){}renderCanvas(e,t){if(this.destroyed)return;let n=this.viewportTransform,r=this.clipPath;this.calcViewportBoundaries(),this.clearContext(e),e.imageSmoothingEnabled=this.imageSmoothingEnabled,e.patternQuality=this.patternQuality,this.fire(`before:render`,{ctx:e}),this._renderBackground(e),e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(e,t),e.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(e),r&&(r._set(`canvas`,this),r.shouldCache(),r._transformDone=!0,r.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(e,r)),this._renderOverlay(e),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(e),this.fire(`after:render`,{ctx:e}),this.__cleanupTask&&=(this.__cleanupTask(),void 0)}drawClipPathOnCanvas(e,t){let n=this.viewportTransform;e.save(),e.transform(...n),e.globalCompositeOperation=`destination-in`,t.transform(e),e.scale(1/t.zoomX,1/t.zoomY),e.drawImage(t._cacheCanvas,-t.cacheTranslationX,-t.cacheTranslationY),e.restore()}_renderObjects(e,t){for(let n=0,r=t.length;n<r;++n)t[n]&&t[n].render(e)}_renderBackgroundOrOverlay(e,t){let n=this[`${t}Color`],r=this[`${t}Image`],i=this.viewportTransform,a=this[`${t}Vpt`];if(!n&&!r)return;let o=ft(n);if(n){if(e.save(),e.beginPath(),e.moveTo(0,0),e.lineTo(this.width,0),e.lineTo(this.width,this.height),e.lineTo(0,this.height),e.closePath(),e.fillStyle=o?n.toLive(e):n,a&&e.transform(...i),o){e.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let t=n.gradientTransform||n.patternTransform;t&&e.transform(...t)}e.fill(),e.restore()}if(r){e.save();let{skipOffscreen:t}=this;this.skipOffscreen=a,a&&e.transform(...i),r.render(e),this.skipOffscreen=t,e.restore()}}_renderBackground(e){this._renderBackgroundOrOverlay(e,`background`)}_renderOverlay(e){this._renderBackgroundOrOverlay(e,`overlay`)}getCenterPoint(){return new q(this.width/2,this.height/2)}centerObjectH(e){return this._centerObject(e,new q(this.getCenterPoint().x,e.getCenterPoint().y))}centerObjectV(e){return this._centerObject(e,new q(e.getCenterPoint().x,this.getCenterPoint().y))}centerObject(e){return this._centerObject(e,this.getCenterPoint())}viewportCenterObject(e){return this._centerObject(e,this.getVpCenter())}viewportCenterObjectH(e){return this._centerObject(e,new q(this.getVpCenter().x,e.getCenterPoint().y))}viewportCenterObjectV(e){return this._centerObject(e,new q(e.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return Ue(this.getCenterPoint(),We(this.viewportTransform))}_centerObject(e,t){e.setXY(t,V,V),e.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(e){return this.toDatalessObject(e)}toObject(e){return this._toObjectMethod(`toObject`,e)}toJSON(){return this.toObject()}toDatalessObject(e){return this._toObjectMethod(`toDatalessObject`,e)}_toObjectMethod(e,t){let n=this.clipPath,r=n&&!n.excludeFromExport?this._toObject(n,e,t):null;return{version:I,...ct(this,t),objects:this._objects.filter(e=>!e.excludeFromExport).map(n=>this._toObject(n,e,t)),...this.__serializeBgOverlay(e,t),...r?{clipPath:r}:null}}_toObject(e,t,n){let r;this.includeDefaultValues||(r=e.includeDefaultValues,e.includeDefaultValues=!1);let i=e[t](n);return this.includeDefaultValues||(e.includeDefaultValues=!!r),i}__serializeBgOverlay(e,t){let n={},r=this.backgroundImage,i=this.overlayImage,a=this.backgroundColor,o=this.overlayColor;return ft(a)?a.excludeFromExport||(n.background=a.toObject(t)):a&&(n.background=a),ft(o)?o.excludeFromExport||(n.overlay=o.toObject(t)):o&&(n.overlay=o),r&&!r.excludeFromExport&&(n.backgroundImage=this._toObject(r,e,t)),i&&!i.excludeFromExport&&(n.overlayImage=this._toObject(i,e,t)),n}toSVG(e={},t){e.reviver=t;let n=[];return this._setSVGPreamble(n,e),this._setSVGHeader(n,e),this.clipPath&&n.push(`<g clip-path="url(#${Et(this.clipPath.clipPathId??``)})" >\n`),this._setSVGBgOverlayColor(n,`background`),this._setSVGBgOverlayImage(n,`backgroundImage`,t),this._setSVGObjects(n,t),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,`overlay`),this._setSVGBgOverlayImage(n,`overlayImage`,t),n.push(`</svg>`),n.join(``)}_setSVGPreamble(e,t){t.suppressPreamble||e.push(`<?xml version="1.0" encoding="`,t.encoding||`UTF-8`,`" standalone="no" ?>
`,`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" `,`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(e,t){let n=t.width||`${this.width}`,r=t.height||`${this.height}`,i=C.NUM_FRACTION_DIGITS,a=t.viewBox,o;if(a)o=`viewBox="${a.x} ${a.y} ${a.width} ${a.height}" `;else if(this.svgViewportTransformation){let e=this.viewportTransform;o=`viewBox="${ut(-e[4]/e[0],i)} ${ut(-e[5]/e[3],i)} ${ut(this.width/e[0],i)} ${ut(this.height/e[3],i)}" `}else o=`viewBox="0 0 ${this.width} ${this.height}" `;e.push(`<svg `,`xmlns="http://www.w3.org/2000/svg" `,`xmlns:xlink="http://www.w3.org/1999/xlink" `,`version="1.1" `,`width="`,n,`" `,`height="`,r,`" `,o,`xml:space="preserve">
`,`<desc>Created with Fabric.js `,I,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(t),`</defs>
`)}createSVGClipPathMarkup(e){let t=this.clipPath;return t?(t.clipPathId=`CLIPPATH_${Ne()}`,`<clipPath id="${t.clipPathId}" >\n${t.toClipPathSVG(e.reviver)}</clipPath>\n`):``}createSVGRefElementsMarkup(){return[`background`,`overlay`].map(e=>{let t=this[`${e}Color`];if(ft(t)){let n=this[`${e}Vpt`],r=this.viewportTransform,i={isType:()=>!1,width:this.width/(n?r[0]:1),height:this.height/(n?r[3]:1)};return t.toSVG(i,{additionalTransform:n?dt(r):``})}}).join(``)}createSVGFontFacesMarkup(){let e=[],t={},n=C.fontPaths;this._objects.forEach(function t(n){e.push(n),De(n)&&n._objects.forEach(t)}),e.forEach(e=>{if(!(r=e)||typeof r._renderText!=`function`)return;var r;let{styles:i,fontFamily:a}=e;!t[a]&&n[a]&&(t[a]=!0,i&&Object.values(i).forEach(e=>{Object.values(e).forEach(({fontFamily:e=``})=>{!t[e]&&n[e]&&(t[e]=!0)})}))});let r=Object.keys(t).map(e=>`\t\t@font-face {\n\t\t\tfont-family: '${e}';\n\t\t\tsrc: url('${n[e]}');\n\t\t}\n`).join(``);return r?`\t<style type="text/css"><![CDATA[\n${r}]]></style>\n`:``}_setSVGObjects(e,t){this.forEachObject(n=>{n.excludeFromExport||this._setSVGObject(e,n,t)})}_setSVGObject(e,t,n){e.push(t.toSVG(n))}_setSVGBgOverlayImage(e,t,n){let r=this[t];r&&!r.excludeFromExport&&r.toSVG&&e.push(r.toSVG(n))}_setSVGBgOverlayColor(e,t){let n=this[`${t}Color`];if(n){if(ft(n)){let r=n.repeat||``,i=this.width,a=this.height,o=this[`${t}Vpt`]?dt(We(this.viewportTransform)):``;e.push(`<rect transform="${o} translate(${i/2},${a/2})" x="${n.offsetX-i/2}" y="${n.offsetY-a/2}" width="${r!==`repeat-y`&&r!==`no-repeat`||!mt(n)?i:n.source.width}" height="${r!==`repeat-x`&&r!==`no-repeat`||!mt(n)?a:n.source.height}" fill="url(#SVGID_${n.id})"></rect>\n`)}else e.push(`<rect x="0" y="0" width="100%" height="100%" `,`fill="`,n,`"`,`></rect>
`)}}loadFromJSON(e,t,{signal:n}={}){if(!e)return Promise.reject(new T("`json` is undefined"));let{objects:r=[],...i}=typeof e==`string`?JSON.parse(e):e,{backgroundImage:a,background:o,overlayImage:s,overlay:c,clipPath:l}=i,u=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([ot(r,{reviver:t,signal:n}),st({backgroundImage:a,backgroundColor:o,overlayImage:s,overlayColor:c,clipPath:l},{signal:n})]).then(([e,t])=>(this.clear(),this.add(...e),this.set(i),this.set(t),this.renderOnAddRemove=u,this))}clone(e){let t=this.toObject(e);return this.cloneWithoutData().loadFromJSON(t)}cloneWithoutData(){let e=Le(this);return new this.constructor(e)}toDataURL(e={}){let{format:t=`png`,quality:n=1,multiplier:r=1,enableRetinaScaling:i=!1}=e,a=r*(i?this.getRetinaScaling():1);return Re(this.toCanvasElement(a,e),t,n)}toBlob(e={}){let{format:t=`png`,quality:n=1,multiplier:r=1,enableRetinaScaling:i=!1}=e,a=r*(i?this.getRetinaScaling():1);return ze(this.toCanvasElement(a,e),t,n)}toCanvasElement(e=1,{width:t,height:n,left:r,top:i,filter:a}={}){let o=(t||this.width)*e,s=(n||this.height)*e,c=this.getZoom(),l=this.width,u=this.height,d=this.skipControlsDrawing,f=c*e,p=this.viewportTransform,m=[f,0,0,f,(p[4]-(r||0))*e,(p[5]-(i||0))*e],h=this.enableRetinaScaling,g=Le({width:o,height:s}),_=a?this._objects.filter(e=>a(e)):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=m,this.width=o,this.height=s,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(g.getContext(`2d`),_),this.viewportTransform=p,this.width=l,this.height=u,this.calcViewportBoundaries(),this.enableRetinaScaling=h,this.skipControlsDrawing=d,g}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),xe.cancelByCanvas(this),this.disposed=!0,new Promise((e,t)=>{let n=()=>{this.destroy(),e(!0)};n.kill=t,this.__cleanupTask&&this.__cleanupTask.kill(`aborted`),this.destroyed?e(!1):this.nextRenderHandle?this.__cleanupTask=n:n()})}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject(e=>e.dispose()),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return`#<Canvas (${this.complexity()}): { objects: ${this._objects.length} }>`}};x(jt,`ownDefaults`,Ct);var Mt=[`touchstart`,`touchmove`,`touchend`],Nt=e=>{let t=gt(e.target),n=function(e){let t=e.changedTouches;return t&&t[0]?t[0]:e}(e);return new q(n.clientX+t.left,n.clientY+t.top)},Pt=e=>Mt.includes(e.type)||e.pointerType===`touch`,Ft=e=>{e.preventDefault(),e.stopPropagation()},It=e=>{let t=0,n=0,r=0,i=0;for(let a=0,o=e.length;a<o;a++){let{x:o,y:s}=e[a];(o>r||!a)&&(r=o),(o<t||!a)&&(t=o),(s>i||!a)&&(i=s),(s<n||!a)&&(n=s)}return{left:t,top:n,width:r-t,height:i-n}},Lt=(e,t)=>{zt(e,Ge(We(t),e.calcOwnMatrix()))},Rt=(e,t)=>zt(e,Ge(t,e.calcOwnMatrix())),zt=(e,t)=>{let{translateX:n,translateY:r,scaleX:i,scaleY:a,...o}=Xe(t),s=new q(n,r);e.flipX=!1,e.flipY=!1,Object.assign(e,o),e.set({scaleX:i,scaleY:a}),e.setPositionByOrigin(s,V,V)},Bt=e=>{e.scaleX=1,e.scaleY=1,e.skewX=0,e.skewY=0,e.flipX=!1,e.flipY=!1,e.rotate(0)},Vt=e=>({scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,angle:e.angle,left:e.left,flipX:e.flipX,flipY:e.flipY,top:e.top}),Ht=(e,t,n)=>{let r=e/2,i=t/2,a=It([new q(-r,-i),new q(r,-i),new q(-r,i),new q(r,i)].map(e=>e.transform(n)));return new q(a.width,a.height)},Ut=(e=B,t=B)=>Ge(We(t),e),Wt=(e,t=B,n=B)=>e.transform(Ut(t,n)),Gt=(e,t=B,n=B)=>e.transform(Ut(t,n),!0),Kt=(e,t,n)=>{let r=Ut(t,n);return zt(e,Ge(r,e.calcOwnMatrix())),r},qt={left:-.5,top:-.5,center:0,bottom:.5,right:.5},Jt=e=>typeof e==`string`?qt[e]:e-.5,Yt=new q(1,0),Xt=new q,Zt=(e,t)=>e.rotate(t),Qt=(e,t)=>new q(t).subtract(e),$t=e=>e.distanceFrom(Xt),en=(e,t)=>Math.atan2(an(e,t),on(e,t)),tn=e=>en(Yt,e),nn=e=>e.eq(Xt)?e:e.scalarDivide($t(e)),rn=(e,t=!0)=>nn(new q(-e.y,e.x).scalarMultiply(t?1:-1)),an=(e,t)=>e.x*t.y-e.y*t.x,on=(e,t)=>e.x*t.x+e.y*t.y,sn=(e,t,n)=>{if(e.eq(t)||e.eq(n))return!0;let r=an(t,n),i=an(t,e),a=an(n,e);return r>=0?i>=0&&a<=0:!(i<=0&&a>=0)},cn=`not-allowed`;function ln(e){return Jt(e.originX)===Jt(`center`)&&Jt(e.originY)===Jt(`center`)}function un(e){return .5-Jt(e)}var dn=(e,t)=>e[t],fn=(e,t,n,r)=>({e,transform:t,pointer:new q(n,r)});function pn(e,t,n){let r=n,i=tn(Qt(Wt(e.getCenterPoint(),e.canvas.viewportTransform,void 0),r))+z;return Math.round(i%z/ee)}function mn({target:e,corner:t},n,r,i,a){let o=e.controls[t],s=e.canvas?.getZoom()||1,c=e.padding/s,l=function(e,t,n,r){let i=e.getRelativeCenterPoint(),a=n!==void 0&&r!==void 0?e.translateToGivenOrigin(i,V,V,n,r):new q(e.left,e.top);return(e.angle?t.rotate(-Be(e.angle),i):t).subtract(a)}(e,new q(i,a),n,r);return l.x>=c&&(l.x-=c),l.x<=-c&&(l.x+=c),l.y>=c&&(l.y-=c),l.y<=c&&(l.y+=c),l.x-=o.offsetX,l.y-=o.offsetY,l}var hn=new RegExp(String.raw`[\0-\x1F\x7F;<>\\]|\/\*|\*\/|url\s*\(|expression\s*\(|(?:java|vb)script\s*:|data\s*:|@import\b`,`iu`),gn=e=>typeof e==`string`&&e.trim().length>0&&!hn.test(e),_n=(e,t=``)=>{let n=Number(e);return Number.isFinite(n)?`${n}`:t},vn=(e,t=``)=>typeof e==`string`&&gn(e)?e:t,yn=e=>e.replace(/\s+/g,` `),bn={aliceblue:`#F0F8FF`,antiquewhite:`#FAEBD7`,aqua:`#0FF`,aquamarine:`#7FFFD4`,azure:`#F0FFFF`,beige:`#F5F5DC`,bisque:`#FFE4C4`,black:`#000`,blanchedalmond:`#FFEBCD`,blue:`#00F`,blueviolet:`#8A2BE2`,brown:`#A52A2A`,burlywood:`#DEB887`,cadetblue:`#5F9EA0`,chartreuse:`#7FFF00`,chocolate:`#D2691E`,coral:`#FF7F50`,cornflowerblue:`#6495ED`,cornsilk:`#FFF8DC`,crimson:`#DC143C`,cyan:`#0FF`,darkblue:`#00008B`,darkcyan:`#008B8B`,darkgoldenrod:`#B8860B`,darkgray:`#A9A9A9`,darkgrey:`#A9A9A9`,darkgreen:`#006400`,darkkhaki:`#BDB76B`,darkmagenta:`#8B008B`,darkolivegreen:`#556B2F`,darkorange:`#FF8C00`,darkorchid:`#9932CC`,darkred:`#8B0000`,darksalmon:`#E9967A`,darkseagreen:`#8FBC8F`,darkslateblue:`#483D8B`,darkslategray:`#2F4F4F`,darkslategrey:`#2F4F4F`,darkturquoise:`#00CED1`,darkviolet:`#9400D3`,deeppink:`#FF1493`,deepskyblue:`#00BFFF`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1E90FF`,firebrick:`#B22222`,floralwhite:`#FFFAF0`,forestgreen:`#228B22`,fuchsia:`#F0F`,gainsboro:`#DCDCDC`,ghostwhite:`#F8F8FF`,gold:`#FFD700`,goldenrod:`#DAA520`,gray:`#808080`,grey:`#808080`,green:`#008000`,greenyellow:`#ADFF2F`,honeydew:`#F0FFF0`,hotpink:`#FF69B4`,indianred:`#CD5C5C`,indigo:`#4B0082`,ivory:`#FFFFF0`,khaki:`#F0E68C`,lavender:`#E6E6FA`,lavenderblush:`#FFF0F5`,lawngreen:`#7CFC00`,lemonchiffon:`#FFFACD`,lightblue:`#ADD8E6`,lightcoral:`#F08080`,lightcyan:`#E0FFFF`,lightgoldenrodyellow:`#FAFAD2`,lightgray:`#D3D3D3`,lightgrey:`#D3D3D3`,lightgreen:`#90EE90`,lightpink:`#FFB6C1`,lightsalmon:`#FFA07A`,lightseagreen:`#20B2AA`,lightskyblue:`#87CEFA`,lightslategray:`#789`,lightslategrey:`#789`,lightsteelblue:`#B0C4DE`,lightyellow:`#FFFFE0`,lime:`#0F0`,limegreen:`#32CD32`,linen:`#FAF0E6`,magenta:`#F0F`,maroon:`#800000`,mediumaquamarine:`#66CDAA`,mediumblue:`#0000CD`,mediumorchid:`#BA55D3`,mediumpurple:`#9370DB`,mediumseagreen:`#3CB371`,mediumslateblue:`#7B68EE`,mediumspringgreen:`#00FA9A`,mediumturquoise:`#48D1CC`,mediumvioletred:`#C71585`,midnightblue:`#191970`,mintcream:`#F5FFFA`,mistyrose:`#FFE4E1`,moccasin:`#FFE4B5`,navajowhite:`#FFDEAD`,navy:`#000080`,oldlace:`#FDF5E6`,olive:`#808000`,olivedrab:`#6B8E23`,orange:`#FFA500`,orangered:`#FF4500`,orchid:`#DA70D6`,palegoldenrod:`#EEE8AA`,palegreen:`#98FB98`,paleturquoise:`#AFEEEE`,palevioletred:`#DB7093`,papayawhip:`#FFEFD5`,peachpuff:`#FFDAB9`,peru:`#CD853F`,pink:`#FFC0CB`,plum:`#DDA0DD`,powderblue:`#B0E0E6`,purple:`#800080`,rebeccapurple:`#639`,red:`#F00`,rosybrown:`#BC8F8F`,royalblue:`#4169E1`,saddlebrown:`#8B4513`,salmon:`#FA8072`,sandybrown:`#F4A460`,seagreen:`#2E8B57`,seashell:`#FFF5EE`,sienna:`#A0522D`,silver:`#C0C0C0`,skyblue:`#87CEEB`,slateblue:`#6A5ACD`,slategray:`#708090`,slategrey:`#708090`,snow:`#FFFAFA`,springgreen:`#00FF7F`,steelblue:`#4682B4`,tan:`#D2B48C`,teal:`#008080`,thistle:`#D8BFD8`,tomato:`#FF6347`,turquoise:`#40E0D0`,violet:`#EE82EE`,wheat:`#F5DEB3`,white:`#FFF`,whitesmoke:`#F5F5F5`,yellow:`#FF0`,yellowgreen:`#9ACD32`},xn=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e),Sn=(e,t,n,r)=>{e/=255,t/=255,n/=255;let i=Math.max(e,t,n),a=Math.min(e,t,n),o,s,c=(i+a)/2;if(i===a)o=s=0;else{let r=i-a;switch(s=c>.5?r/(2-i-a):r/(i+a),i){case e:o=(t-n)/r+(t<n?6:0);break;case t:o=(n-e)/r+2;break;case n:o=(e-t)/r+4}o/=6}return[Math.round(360*o),Math.round(100*s),Math.round(100*c),r]},Cn=(e=`1`)=>parseFloat(e)/(e.endsWith(`%`)?100:1),wn=e=>Math.min(Math.round(e),255).toString(16).toUpperCase().padStart(2,`0`),Tn=([e,t,n,r=1])=>{let i=Math.round(.3*e+.59*t+.11*n);return[i,i,i,r]},En=class e{constructor(t){if(x(this,`isUnrecognised`,!1),t){if(t instanceof e)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,r,i=1]=t;this.setSource([e,n,r,i])}else this.setSource(this._tryParsingColor(t))}else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in bn&&(t=bn[t]),t===`transparent`?[255,255,255,0]:e.sourceFromHex(t)||e.sourceFromRgb(t)||e.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(e){this._source=e}toRgb(){let[e,t,n]=this.getSource();return`rgb(${e},${t},${n})`}toRgba(){return`rgba(${this.getSource().join(`,`)})`}toHsl(){let[e,t,n]=Sn(...this.getSource());return`hsl(${e},${t}%,${n}%)`}toHsla(){let[e,t,n,r]=Sn(...this.getSource());return`hsla(${e},${t}%,${n}%,${r})`}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[e,t,n,r]=this.getSource();return`${wn(e)}${wn(t)}${wn(n)}${wn(Math.round(255*r))}`}getAlpha(){return this.getSource()[3]}setAlpha(e){return this._source[3]=e,this}toGrayscale(){return this.setSource(Tn(this.getSource())),this}toBlackWhite(e){let[t,,,n]=Tn(this.getSource()),r=t<(e||127)?0:255;return this.setSource([r,r,r,n]),this}overlayWith(t){t instanceof e||(t=new e(t));let n=this.getSource(),r=t.getSource(),[i,a,o]=n.map((e,t)=>Math.round(.5*e+.5*r[t]));return this.setSource([i,a,o,n[3]]),this}static fromRgb(t){return e.fromRgba(t)}static fromRgba(t){return new e(e.sourceFromRgb(t))}static sourceFromRgb(e){let t=yn(e).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(t){let[e,n,r]=t.slice(1,4).map(e=>{let t=parseFloat(e);return e.endsWith(`%`)?Math.round(2.55*t):t});return[e,n,r,Cn(t[4])]}}static fromHsl(t){return e.fromHsla(t)}static fromHsla(t){return new e(e.sourceFromHsl(t))}static sourceFromHsl(t){let n=yn(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!n)return;let r=(e.parseAngletoDegrees(n[1])%360+360)%360/360,i=parseFloat(n[2])/100,a=parseFloat(n[3])/100,o,s,c;if(i===0)o=s=c=a;else{let e=a<=.5?a*(i+1):a+i-a*i,t=2*a-e;o=xn(t,e,r+1/3),s=xn(t,e,r),c=xn(t,e,r-1/3)}return[Math.round(255*o),Math.round(255*s),Math.round(255*c),Cn(n[4])]}static fromHex(t){return new e(e.sourceFromHex(t))}static sourceFromHex(e){if(e.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let t=e.slice(e.indexOf(`#`)+1),n;n=t.length<=4?t.split(``).map(e=>e+e):t.match(/.{2}/g);let[r,i,a,o=255]=n.map(e=>parseInt(e,16));return[r,i,a,o/255]}}static parseAngletoDegrees(e){let t=e.toLowerCase(),n=parseFloat(t);return t.includes(`rad`)?Ve(n):t.includes(`turn`)?360*n:n}},Dn=e=>{let t=[`instantiated_by_use`,`style`,`id`,`class`];switch(e){case`linearGradient`:return t.concat([`x1`,`y1`,`x2`,`y2`,`gradientUnits`,`gradientTransform`]);case`radialGradient`:return t.concat([`gradientUnits`,`gradientTransform`,`cx`,`cy`,`r`,`fx`,`fy`,`fr`]);case`stop`:return t.concat([`offset`,`stop-color`,`stop-opacity`])}return t},On=(e,t=16)=>{let n=/\D{0,2}$/.exec(e),r=parseFloat(e),i=C.DPI;switch(n?.[0]){case`mm`:return r*i/25.4;case`cm`:return r*i/2.54;case`in`:return r*i;case`pt`:return r*i/72;case`pc`:return r*i/72*12;case`em`:return r*t;default:return r}},kn=e=>{let[t,n]=e.trim().split(` `),[r,i]=(a=t)&&a!==`none`?[a.slice(1,4),a.slice(5,8)]:a===`none`?[a,a]:[`Mid`,`Mid`];var a;return{meetOrSlice:n||`meet`,alignX:r,alignY:i}},An=(e,t,n=!0)=>{let r,i;if(t){if(t.toLive)r=`url(#SVGID_${Et(t.id)})`;else{let e=String(t);if(gn(e)){let t=new En(e),n=t.getAlpha();r=t.toRgb(),n!==1&&(i=n.toString())}else r=new En(`black`).toRgb()}}else r=`none`;return n?`${e}: ${r}; ${i?`${e}-opacity: ${i}; `:``}`:`${e}="${r}" ${i?`${e}-opacity="${i}" `:``}`},jn=class{getSvgStyles(e){let t=this.fillRule==null?`nonzero`:vn(this.fillRule),n=this.strokeWidth==null?`0`:_n(this.strokeWidth),r=this.strokeDashArray==null?ae:this.strokeDashArray.every(e=>Number.isFinite(Number(e)))?this.strokeDashArray.join(` `):``,i=this.strokeDashOffset==null?`0`:_n(this.strokeDashOffset),a=this.strokeLineCap==null?`butt`:vn(this.strokeLineCap),o=this.strokeLineJoin==null?`miter`:vn(this.strokeLineJoin),s=this.strokeMiterLimit==null?`4`:_n(this.strokeMiterLimit),c=this.opacity==null?`1`:_n(this.opacity),l=this.visible?``:` visibility: hidden;`,u=e?``:this.getSvgFilter(),d=An(U,this.fill);return[An(ye,this.stroke),n?`stroke-width: ${n}; `:``,r?`stroke-dasharray: ${r}; `:``,a?`stroke-linecap: ${a}; `:``,i?`stroke-dashoffset: ${i}; `:``,o?`stroke-linejoin: ${o}; `:``,s?`stroke-miterlimit: ${s}; `:``,d,t?`fill-rule: ${t}; `:``,c?`opacity: ${c};`:``,u,l].map(e=>Et(e)).join(``)}getSvgFilter(){return this.shadow?`filter: url(#SVGID_${Et(this.shadow.id)});`:``}getSvgCommons(){return[this.id?`id="${Et(String(this.id))}" `:``,this.clipPath?`clip-path="url(#${Et(this.clipPath.clipPathId)})" `:``].join(``)}getSvgTransform(e,t=``){return`transform="${dt(e?this.calcTransformMatrix():this.calcOwnMatrix())}${t}" `}_toSVG(e){return[``]}toSVG(e){return this._createBaseSVGMarkup(this._toSVG(e),{reviver:e})}toClipPathSVG(e){return`	`+this._createBaseClipPathSVGMarkup(this._toSVG(e),{reviver:e})}_createBaseClipPathSVGMarkup(e,{reviver:t,additionalTransform:n=``}={}){let r=[this.getSvgTransform(!0,n),this.getSvgCommons()].join(``),i=e.indexOf(`COMMON_PARTS`);return e[i]=r,t?t(e.join(``)):e.join(``)}_createBaseSVGMarkup(e,{noStyle:t,reviver:n,withShadow:r,additionalTransform:i}={}){let a=t?``:`style="${this.getSvgStyles()}" `,o=r?`style="${this.getSvgFilter()}" `:``,s=this.clipPath,c=this.strokeUniform?`vector-effect="non-scaling-stroke" `:``,l=s&&s.absolutePositioned,u=this.stroke,d=this.fill,f=this.shadow,p=[],m=e.indexOf(`COMMON_PARTS`),h;return s&&(s.clipPathId=`CLIPPATH_${Ne()}`,h=`<clipPath id="${s.clipPathId}" >\n${s.toClipPathSVG(n)}</clipPath>\n`),l&&p.push(`<g `,o,this.getSvgCommons(),` >
`),p.push(`<g `,this.getSvgTransform(!1),l?``:o+this.getSvgCommons(),` >
`),e[m]=[a,c,t?``:this.addPaintOrder(),` `,i?`transform="${i}" `:``].join(``),ft(d)&&p.push(d.toSVG(this)),ft(u)&&p.push(u.toSVG(this)),f&&p.push(f.toSVG(this)),s&&p.push(h),p.push(e.join(``)),p.push(`</g>
`),l&&p.push(`</g>
`),n?n(p.join(``)):p.join(``)}addPaintOrder(){return this.paintFirst===`fill`?``:` paint-order="${Et(this.paintFirst)}" `}};function Mn(e){return RegExp(`^(`+e.join(`|`)+`)\\b`,`i`)}var Nn=`textDecorationThickness`,Pn=`textDecorationColor`,Fn=[`fontSize`,`fontWeight`,`fontFamily`,`fontStyle`],In=[`underline`,`overline`,`linethrough`],Ln=[...Fn,`lineHeight`,`text`,`charSpacing`,`textAlign`,`styles`,`path`,`pathStartOffset`,`pathSide`,`pathAlign`],Rn=[...Ln,...In,`textBackgroundColor`,`direction`,Nn,Pn],zn=[...Fn,...In,ye,`strokeWidth`,U,`deltaY`,`textBackgroundColor`,Nn,Pn],Bn={_reNewline:oe,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:G,fontFamily:`Times New Roman`,underline:!1,overline:!1,linethrough:!1,textAlign:ne,fontStyle:G,lineHeight:1.16,textBackgroundColor:``,stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:ne,pathAlign:`baseline`,charSpacing:0,deltaY:0,direction:`ltr`,CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[Nn]:66.667},Vn=`justify`,Hn=String.raw`[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?`,Un=String.raw`(?:\s*,?\s+|\s*,\s*)`,Wn=RegExp(`(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(`+Hn+`(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|`+Hn+`))?\\s+(.*)`),Gn={cx:ne,x:ne,r:`radius`,cy:`top`,y:`top`,display:`visible`,visibility:`visible`,transform:`transformMatrix`,"fill-opacity":`fillOpacity`,"fill-rule":`fillRule`,"font-family":`fontFamily`,"font-size":`fontSize`,"font-style":`fontStyle`,"font-weight":`fontWeight`,"letter-spacing":`charSpacing`,"paint-order":`paintFirst`,"stroke-dasharray":`strokeDashArray`,"stroke-dashoffset":`strokeDashOffset`,"stroke-linecap":`strokeLineCap`,"stroke-linejoin":`strokeLineJoin`,"stroke-miterlimit":`strokeMiterLimit`,"stroke-opacity":`strokeOpacity`,"stroke-width":`strokeWidth`,"text-decoration":`textDecoration`,"text-anchor":`textAnchor`,opacity:`opacity`,"clip-path":`clipPath`,"clip-rule":`clipRule`,"vector-effect":`strokeUniform`,"image-rendering":`imageSmoothing`,"text-decoration-thickness":Nn,"text-decoration-color":Pn},Kn=`font-size`,qn=`clip-path`;Mn([`path`,`circle`,`polygon`,`polyline`,`ellipse`,`rect`,`line`,`image`,`text`]),Mn([`symbol`,`image`,`marker`,`pattern`,`view`,`svg`]);var Jn=Mn([`symbol`,`g`,`a`,`svg`,`clipPath`,`defs`]);new RegExp(String.raw`^\s*(${Hn})${Un}(${Hn})${Un}(${Hn})${Un}(${Hn})\s*$`);var Yn=`(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?`,Xn=RegExp(`(?:\\s|^)`+Yn+Yn+`(`+Hn+`?(?:px)?)?(?:\\s?|$)(?:$|\\s)`),Zn=class e{constructor(t={}){let n=typeof t==`string`?e.parseShadow(t):t;Object.assign(this,e.ownDefaults,n),this.id=Ne()}static parseShadow(e){let t=e.trim(),[,n=0,r=0,i=0]=(Xn.exec(t)||[]).map(e=>parseFloat(e)||0);return{color:(t.replace(Xn,``)||`rgb(0,0,0)`).trim(),offsetX:n,offsetY:r,blur:i}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join(`px `)}toSVG(e){let t=Zt(new q(this.offsetX,this.offsetY),Be(-e.angle)),n=C.NUM_FRACTION_DIGITS,r=new En(this.color),i=40,a=40;return e.width&&e.height&&(i=100*ut((Math.abs(t.x)+this.blur)/e.width,n)+20,a=100*ut((Math.abs(t.y)+this.blur)/e.height,n)+20),e.flipX&&(t.x*=-1),e.flipY&&(t.y*=-1),`<filter id="SVGID_${Et(this.id)}" y="-${a}%" height="${100+2*a}%" x="-${i}%" width="${100+2*i}%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="${ut(this.blur?this.blur/2:0,n)}"></feGaussianBlur>\n\t<feOffset dx="${ut(t.x,n)}" dy="${ut(t.y,n)}" result="oBlur" ></feOffset>\n\t<feFlood flood-color="${r.toRgb()}" flood-opacity="${r.getAlpha()}"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n`}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},n=e.ownDefaults;return this.includeDefaultValues?t:lt(t,(e,t)=>e!==n[t])}static async fromObject(e){return new this(e)}};x(Zn,`ownDefaults`,{color:`rgb(0,0,0)`,blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),x(Zn,`type`,`shadow`),K.setClass(Zn,`shadow`);var Qn=(e,t,n)=>Math.max(e,Math.min(t,n)),$n=[`top`,ne,H,ge,`flipX`,`flipY`,`originX`,`originY`,`angle`,`opacity`,`globalCompositeOperation`,`shadow`,`visible`,_e,ve],er=[U,ye,`strokeWidth`,`strokeDashArray`,`width`,`height`,`paintFirst`,`strokeUniform`,`strokeLineCap`,`strokeDashOffset`,`strokeLineJoin`,`strokeMiterLimit`,`backgroundColor`,`clipPath`],tr={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:V,originY:V,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:U,fill:`rgb(0,0,0)`,fillRule:`nonzero`,stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:`butt`,strokeLineJoin:`miter`,strokeMiterLimit:4,globalCompositeOperation:`source-over`,backgroundColor:``,shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},nr=v({defaultEasing:()=>ar,easeInBack:()=>Dr,easeInBounce:()=>jr,easeInCirc:()=>xr,easeInCubic:()=>or,easeInElastic:()=>wr,easeInExpo:()=>vr,easeInOutBack:()=>kr,easeInOutBounce:()=>Mr,easeInOutCirc:()=>Cr,easeInOutCubic:()=>cr,easeInOutElastic:()=>Er,easeInOutExpo:()=>br,easeInOutQuad:()=>Fr,easeInOutQuart:()=>dr,easeInOutQuint:()=>mr,easeInOutSine:()=>_r,easeInQuad:()=>Nr,easeInQuart:()=>lr,easeInQuint:()=>fr,easeInSine:()=>hr,easeOutBack:()=>Or,easeOutBounce:()=>Ar,easeOutCirc:()=>Sr,easeOutCubic:()=>sr,easeOutElastic:()=>Tr,easeOutExpo:()=>yr,easeOutQuad:()=>Pr,easeOutQuart:()=>ur,easeOutQuint:()=>pr,easeOutSine:()=>gr}),rr=(e,t,n,r)=>(e<Math.abs(t)?(e=t,r=n/4):r=t===0&&e===0?n/z*Math.asin(1):n/z*Math.asin(t/e),{a:e,c:t,p:n,s:r}),ir=(e,t,n,r,i)=>e*2**(10*--r)*Math.sin((r*i-t)*z/n),ar=(e,t,n,r)=>-n*Math.cos(e/r*R)+n+t,or=(e,t,n,r)=>n*(e/r)**3+t,sr=(e,t,n,r)=>n*((e/r-1)**3+1)+t,cr=(e,t,n,r)=>(e/=r/2)<1?n/2*e**3+t:n/2*((e-2)**3+2)+t,lr=(e,t,n,r)=>n*(e/=r)*e**3+t,ur=(e,t,n,r)=>-n*((e=e/r-1)*e**3-1)+t,dr=(e,t,n,r)=>(e/=r/2)<1?n/2*e**4+t:-n/2*((e-=2)*e**3-2)+t,fr=(e,t,n,r)=>n*(e/r)**5+t,pr=(e,t,n,r)=>n*((e/r-1)**5+1)+t,mr=(e,t,n,r)=>(e/=r/2)<1?n/2*e**5+t:n/2*((e-2)**5+2)+t,hr=(e,t,n,r)=>-n*Math.cos(e/r*R)+n+t,gr=(e,t,n,r)=>n*Math.sin(e/r*R)+t,_r=(e,t,n,r)=>-n/2*(Math.cos(Math.PI*e/r)-1)+t,vr=(e,t,n,r)=>e===0?t:n*2**(10*(e/r-1))+t,yr=(e,t,n,r)=>e===r?t+n:n*-(2**(-10*e/r)+1)+t,br=(e,t,n,r)=>e===0?t:e===r?t+n:(e/=r/2)<1?n/2*2**(10*(e-1))+t:n/2*-(2**(-10*(e-1))+2)+t,xr=(e,t,n,r)=>-n*(Math.sqrt(1-(e/=r)*e)-1)+t,Sr=(e,t,n,r)=>n*Math.sqrt(1-(e=e/r-1)*e)+t,Cr=(e,t,n,r)=>(e/=r/2)<1?-n/2*(Math.sqrt(1-e**2)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t,wr=(e,t,n,r)=>{let i=n,a=0;if(e===0)return t;if((e/=r)===1)return t+n;a||=.3*r;let{a:o,s,p:c}=rr(i,n,a,1.70158);return-ir(o,s,c,e,r)+t},Tr=(e,t,n,r)=>{let i=n,a=0;if(e===0)return t;if((e/=r)===1)return t+n;a||=.3*r;let{a:o,s,p:c,c:l}=rr(i,n,a,1.70158);return o*2**(-10*e)*Math.sin((e*r-s)*z/c)+l+t},Er=(e,t,n,r)=>{let i=n,a=0;if(e===0)return t;if((e/=r/2)==2)return t+n;a||=.3*1.5*r;let{a:o,s,p:c,c:l}=rr(i,n,a,1.70158);return e<1?-.5*ir(o,s,c,e,r)+t:o*2**(-10*--e)*Math.sin((e*r-s)*z/c)*.5+l+t},Dr=(e,t,n,r,i=1.70158)=>n*(e/=r)*e*((i+1)*e-i)+t,Or=(e,t,n,r,i=1.70158)=>n*((e=e/r-1)*e*((i+1)*e+i)+1)+t,kr=(e,t,n,r,i=1.70158)=>(e/=r/2)<1?n/2*(e*e*((1+(i*=1.525))*e-i))+t:n/2*((e-=2)*e*((1+(i*=1.525))*e+i)+2)+t,Ar=(e,t,n,r)=>(e/=r)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t,jr=(e,t,n,r)=>n-Ar(r-e,0,n,r)+t,Mr=(e,t,n,r)=>e<r/2?.5*jr(2*e,0,n,r)+t:.5*Ar(2*e-r,0,n,r)+.5*n+t,Nr=(e,t,n,r)=>n*(e/=r)*e+t,Pr=(e,t,n,r)=>-n*(e/=r)*(e-2)+t,Fr=(e,t,n,r)=>(e/=r/2)<1?n/2*e**2+t:-n/2*(--e*(e-2)-1)+t,Ir=()=>!1,Lr=class{constructor({startValue:e,byValue:t,duration:n=500,delay:r=0,easing:i=ar,onStart:a=L,onChange:o=L,onComplete:s=L,abort:c=Ir,target:l}){x(this,`_state`,`pending`),x(this,`durationProgress`,0),x(this,`valueProgress`,0),this.tick=this.tick.bind(this),this.duration=n,this.delay=r,this.easing=i,this._onStart=a,this._onChange=o,this._onComplete=s,this._abort=c,this.target=l,this.startValue=e,this.byValue=t,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state===`aborted`||this._state===`completed`}start(){let e=e=>{this._state===`pending`&&(this.startTime=e||+new Date,this._state=`running`,this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?this.timeout=N().setTimeout(()=>Ae(e),this.delay):Ae(e)}tick(e){let t=(e||+new Date)-this.startTime,n=Math.min(t,this.duration);this.durationProgress=n/this.duration;let{value:r,valueProgress:i}=this.calculate(n);this.value=Object.freeze(r),this.valueProgress=i,this._state!==`aborted`&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state=`aborted`,this.unregister()):t>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state=`completed`,this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister(),this.timeout=null):(this._onChange(this.value,this.valueProgress,this.durationProgress),Ae(this.tick)))}register(){xe.push(this)}unregister(){xe.remove(this)}abort(){this._state=`aborted`,this.unregister(),this.timeout&&N().clearTimeout(this.timeout)}},Rr=class extends Lr{constructor({startValue:e=0,endValue:t=100,...n}){super({...n,startValue:e,byValue:t-e})}calculate(e){let t=this.easing(e,this.startValue,this.byValue,this.duration);return{value:t,valueProgress:Math.abs((t-this.startValue)/this.byValue)}}},zr=class extends Lr{constructor({startValue:e=[0],endValue:t=[100],...n}){super({...n,startValue:e,byValue:t.map((t,n)=>t-e[n])})}calculate(e){let t=this.startValue.map((t,n)=>this.easing(e,t,this.byValue[n],this.duration,n));return{value:t,valueProgress:Math.abs((t[0]-this.startValue[0])/this.byValue[0])}}},Br=(e,t,n,r)=>t+n*(1-Math.cos(e/r*R)),Vr=e=>e&&((t,n,r)=>e(new En(t).toRgba(),n,r)),Hr=class extends Lr{constructor({startValue:e,endValue:t,easing:n=Br,onChange:r,onComplete:i,abort:a,...o}){let s=new En(e).getSource(),c=new En(t).getSource();super({...o,startValue:s,byValue:c.map((e,t)=>e-s[t]),easing:n,onChange:Vr(r),onComplete:Vr(i),abort:Vr(a)})}calculate(e){let[t,n,r,i]=this.startValue.map((t,n)=>this.easing(e,t,this.byValue[n],this.duration,n)),a=[...[t,n,r].map(Math.round),Qn(0,i,1)];return{value:a,valueProgress:a.map((e,t)=>this.byValue[t]===0?0:Math.abs((e-this.startValue[t])/this.byValue[t])).find(e=>e!==0)||0}}};function Ur(e){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(e)?new zr(e):new Rr(e);return t.start(),t}function Wr(e){let t=new Hr(e);return t.start(),t}var Gr=class e{constructor(e){this.status=e,this.points=[]}includes(e){return this.points.some(t=>t.eq(e))}append(...e){return this.points=this.points.concat(e.filter(e=>!this.includes(e))),this}static isPointContained(e,t,n,r=!1){if(t.eq(n))return e.eq(t);if(t.x===n.x)return e.x===t.x&&(r||e.y>=Math.min(t.y,n.y)&&e.y<=Math.max(t.y,n.y));if(t.y===n.y)return e.y===t.y&&(r||e.x>=Math.min(t.x,n.x)&&e.x<=Math.max(t.x,n.x));{let i=Qt(t,n),a=Qt(t,e).divide(i);return r?Math.abs(a.x)===Math.abs(a.y):a.x===a.y&&a.x>=0&&a.x<=1}}static isPointInPolygon(e,t){let n=new q(e).setX(Math.min(e.x-1,...t.map(e=>e.x))),r=0;for(let i=0;i<t.length;i++){let a=this.intersectSegmentSegment(t[i],t[(i+1)%t.length],e,n);if(a.includes(e))return!0;r+=Number(a.status===`Intersection`)}return r%2==1}static intersectLineLine(t,n,r,i,a=!0,o=!0){let s=n.x-t.x,c=n.y-t.y,l=i.x-r.x,u=i.y-r.y,d=t.x-r.x,f=t.y-r.y,p=l*f-u*d,m=s*f-c*d,h=u*s-l*c;if(h!==0){let n=p/h,r=m/h;return(a||0<=n&&n<=1)&&(o||0<=r&&r<=1)?new e(`Intersection`).append(new q(t.x+n*s,t.y+n*c)):new e}return new e(p===0||m===0?a||o||e.isPointContained(t,r,i)||e.isPointContained(n,r,i)||e.isPointContained(r,t,n)||e.isPointContained(i,t,n)?`Coincident`:void 0:`Parallel`)}static intersectSegmentLine(t,n,r,i){return e.intersectLineLine(t,n,r,i,!1,!0)}static intersectSegmentSegment(t,n,r,i){return e.intersectLineLine(t,n,r,i,!1,!1)}static intersectLinePolygon(t,n,r,i=!0){let a=new e,o=r.length;for(let s,c,l,u=0;u<o;u++){if(s=r[u],c=r[(u+1)%o],l=e.intersectLineLine(t,n,s,c,i,!1),l.status===`Coincident`)return l;a.append(...l.points)}return a.points.length>0&&(a.status=`Intersection`),a}static intersectSegmentPolygon(t,n,r){return e.intersectLinePolygon(t,n,r,!1)}static intersectPolygonPolygon(t,n){let r=new e,i=t.length,a=[];for(let o=0;o<i;o++){let s=t[o],c=t[(o+1)%i],l=e.intersectSegmentPolygon(s,c,n);l.status===`Coincident`?(a.push(l),r.append(s,c)):r.append(...l.points)}return a.length>0&&a.length===t.length?new e(`Coincident`):(r.points.length>0&&(r.status=`Intersection`),r)}static intersectPolygonRectangle(t,n,r){let i=n.min(r),a=n.max(r),o=new q(a.x,i.y),s=new q(i.x,a.y);return e.intersectPolygonPolygon(t,[i,o,a,s])}},Kr=class extends ke{getX(){return this.getXY().x}setX(e){this.setXY(this.getXY().setX(e))}getY(){return this.getXY().y}setY(e){this.setXY(this.getXY().setY(e))}getRelativeX(){return this.left}setRelativeX(e){this.left=e}getRelativeY(){return this.top}setRelativeY(e){this.top=e}getXY(){let e=this.getRelativeXY();return this.group?Ue(e,this.group.calcTransformMatrix()):e}setXY(e,t,n){this.group&&(e=Ue(e,We(this.group.calcTransformMatrix()))),this.setRelativeXY(e,t,n)}getRelativeXY(){return new q(this.left,this.top)}setRelativeXY(e,t=this.originX,n=this.originY){this.setPositionByOrigin(e,t,n)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:e,tr:t,br:n,bl:r}=this.aCoords||=this.calcACoords(),i=[e,t,n,r];if(this.group){let e=this.group.calcTransformMatrix();return i.map(t=>Ue(t,e))}return i}intersectsWithRect(e,t){return Gr.intersectPolygonRectangle(this.getCoords(),e,t).status===`Intersection`}intersectsWithObject(e){let t=Gr.intersectPolygonPolygon(this.getCoords(),e.getCoords());return t.status===`Intersection`||t.status===`Coincident`||e.isContainedWithinObject(this)||this.isContainedWithinObject(e)}isContainedWithinObject(e){return this.getCoords().every(t=>e.containsPoint(t))}isContainedWithinRect(e,t){let{left:n,top:r,width:i,height:a}=this.getBoundingRect();return n>=e.x&&n+i<=t.x&&r>=e.y&&r+a<=t.y}isOverlapping(e){return this.intersectsWithObject(e)||this.isContainedWithinObject(e)||e.isContainedWithinObject(this)}containsPoint(e){return Gr.isPointInPolygon(e,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:e,br:t}=this.canvas.vptCoords;return!!this.getCoords().some(n=>n.x<=t.x&&n.x>=e.x&&n.y<=t.y&&n.y>=e.y)||!!this.intersectsWithRect(e,t)||this.containsPoint(e.midPointFrom(t))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:e,br:t}=this.canvas.vptCoords;return!!this.intersectsWithRect(e,t)||this.getCoords().every(n=>(n.x>=t.x||n.x<=e.x)&&(n.y>=t.y||n.y<=e.y))&&this.containsPoint(e.midPointFrom(t))}getBoundingRect(){return It(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(e){this._set(H,e),this._set(ge,e),this.setCoords()}scaleToWidth(e){let t=this.getBoundingRect().width/this.getScaledWidth();return this.scale(e/this.width/t)}scaleToHeight(e){let t=this.getBoundingRect().height/this.getScaledHeight();return this.scale(e/this.height/t)}getCanvasRetinaScaling(){return this.canvas?.getRetinaScaling()||1}getTotalAngle(){return this.group?Ve(qe(this.calcTransformMatrix())):this.angle}getViewportTransform(){return this.canvas?.viewportTransform||B.concat()}calcACoords(){let e=Qe({angle:this.angle}),{x:t,y:n}=this.getRelativeCenterPoint(),r=Ge(Ze(t,n),e),i=this._getTransformedDimensions(),a=i.x/2,o=i.y/2;return{tl:Ue({x:-a,y:-o},r),tr:Ue({x:a,y:-o},r),bl:Ue({x:-a,y:o},r),br:Ue({x:a,y:o},r)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(e=!1){let t=[];return!e&&this.group&&(t=this.group.transformMatrixKey(e)),t.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,Jt(this.originX),Jt(this.originY)),t}calcTransformMatrix(e=!1){let t=this.calcOwnMatrix();if(e||!this.group)return t;let n=this.transformMatrixKey(e),r=this.matrixCache;return r&&r.key.every((e,t)=>e===n[t])?r.value:(this.group&&(t=Ge(this.group.calcTransformMatrix(!1),t)),this.matrixCache={key:n,value:t},t)}calcOwnMatrix(){let e=this.transformMatrixKey(!0),t=this.ownMatrixCache;if(t&&t.key.every((t,n)=>t===e[n]))return t.value;let n=this.getRelativeCenterPoint(),r=it({angle:this.angle,translateX:n.x,translateY:n.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY});return this.ownMatrixCache={key:e,value:r},r}_getNonTransformedDimensions(){return new q(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(e){let t=this.canvas?.viewportTransform,n=this._getTransformedDimensions(e);return t?n.multiply(new q(Je(t),Ye(t))).scalarAdd(2*this.padding):n.scalarAdd(2*this.padding)}_getTransformedDimensions(e={}){let t={scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth,...e},n=t.strokeWidth,r=n,i=0;this.strokeUniform&&(r=0,i=n);let a=t.width+r,o=t.height+r,s;return s=t.skewX===0&&t.skewY===0?new q(a*t.scaleX,o*t.scaleY):Ht(a,o,rt(t)),s.scalarAdd(i)}translateToGivenOrigin(e,t,n,r,i){let a=e.x,o=e.y,s=Jt(r)-Jt(t),c=Jt(i)-Jt(n);if(s||c){let e=this._getTransformedDimensions();a+=s*e.x,o+=c*e.y}return new q(a,o)}translateToCenterPoint(e,t,n){if(t===`center`&&n===`center`)return e;let r=this.translateToGivenOrigin(e,t,n,V,V);return this.angle?r.rotate(Be(this.angle),e):r}translateToOriginPoint(e,t,n){let r=this.translateToGivenOrigin(e,V,V,t,n);return this.angle?r.rotate(Be(this.angle),e):r}getCenterPoint(){let e=this.getRelativeCenterPoint();return this.group?Ue(e,this.group.calcTransformMatrix()):e}getRelativeCenterPoint(){return this.translateToCenterPoint(new q(this.left,this.top),this.originX,this.originY)}getPointByOrigin(e,t){return this.getPositionByOrigin(e,t)}getPositionByOrigin(e,t){return this.translateToOriginPoint(this.getRelativeCenterPoint(),e,t)}setPositionByOrigin(e,t,n){let r=this.translateToCenterPoint(e,t,n),i=this.translateToOriginPoint(r,this.originX,this.originY);this.set({left:i.x,top:i.y})}_getLeftTopCoords(){return this.getPositionByOrigin(ne,`top`)}positionByLeftTop(e){return this.setPositionByOrigin(e,ne,`top`)}},qr=class e extends Kr{static getDefaults(){return e.ownDefaults}get type(){let e=this.constructor.type;return e===`FabricObject`?`object`:e.toLowerCase()}set type(e){w(`warn`,`Setting type has no effect`,e)}constructor(t){super(),x(this,`_cacheContext`,null),Object.assign(this,e.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=Pe(),this._cacheContext=this._cacheCanvas.getContext(`2d`),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(e){let t=e.width,n=e.height,r=C.maxCacheSideLimit,i=C.minCacheSideLimit;if(t<=r&&n<=r&&t*n<=C.perfLimitSizeTotal)return t<i&&(e.width=i),n<i&&(e.height=i),e;let a=t/n,[o,s]=F.limitDimsByArea(a),c=Qn(i,o,r),l=Qn(i,s,r);return t>c&&(e.zoomX/=t/c,e.width=c,e.capped=!0),n>l&&(e.zoomY/=n/l,e.height=l,e.capped=!0),e}_getCacheCanvasDimensions(){let e=this.getTotalObjectScaling(),t=this._getTransformedDimensions({skewX:0,skewY:0}),n=t.x*e.x/this.scaleX,r=t.y*e.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(r+2),zoomX:e.x,zoomY:e.y,x:n,y:r}}_updateCacheCanvas(){let e=this._cacheCanvas,t=this._cacheContext,{width:n,height:r,zoomX:i,zoomY:a,x:o,y:s}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==e.width||r!==e.height,l=this.zoomX!==i||this.zoomY!==a;if(!e||!t)return!1;if(c||l){n!==e.width||r!==e.height?(e.width=n,e.height=r):(t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.width,e.height));let c=o/2,l=s/2;return this.cacheTranslationX=Math.round(e.width/2-c)+c,this.cacheTranslationY=Math.round(e.height/2-l)+l,t.translate(this.cacheTranslationX,this.cacheTranslationY),t.scale(i,a),this.zoomX=i,this.zoomY=a,!0}return!1}setOptions(e={}){this._setOptions(e)}transform(e){let t=this.group&&!this.group._transformDone||this.group&&this.canvas&&e===this.canvas.contextTop,n=this.calcTransformMatrix(!t);e.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new q(Math.abs(this.scaleX),Math.abs(this.scaleY));let e=Xe(this.calcTransformMatrix());return new q(Math.abs(e.scaleX),Math.abs(e.scaleY))}getTotalObjectScaling(){let e=this.getObjectScaling();if(this.canvas){let t=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return e.scalarMultiply(t*n)}return e}getObjectOpacity(){let e=this.opacity;return this.group&&(e*=this.group.getObjectOpacity()),e}_constrainScale(e){return Math.abs(e)<this.minScaleLimit?e<0?-this.minScaleLimit:this.minScaleLimit:e===0?1e-4:e}_set(e,t){e!==`scaleX`&&e!==`scaleY`||(t=this._constrainScale(t)),e===`scaleX`&&t<0?(this.flipX=!this.flipX,t*=-1):e===`scaleY`&&t<0?(this.flipY=!this.flipY,t*=-1):e!==`shadow`||!t||t instanceof Zn||(t=new Zn(t));let n=this[e]!==t;return this[e]=t,n&&this.constructor.cacheProperties.includes(e)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(e))&&this.parent._set(`dirty`,!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(e){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(e.save(),this._setupCompositeOperation(e),this.drawSelectionBackground(e),this.transform(e),this._setOpacity(e),this._setShadow(e),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(e)):(this._removeCacheCanvas(),this.drawObject(e,!1,{}),this.dirty=!1),e.restore())}drawSelectionBackground(e){}renderCache(e){if(e||={},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:t,zoomY:n,cacheTranslationX:r,cacheTranslationY:i}=this,{width:a,height:o}=this._cacheCanvas;this.drawObject(this._cacheContext,e.forClipping,{zoomX:t,zoomY:n,cacheTranslationX:r,cacheTranslationY:i,width:a,height:o,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return!!this.stroke&&this.stroke!==`transparent`&&this.strokeWidth!==0}hasFill(){return!!this.fill&&this.fill!==`transparent`}needsItsOwnCache(){return!!(this.paintFirst===`stroke`&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(e,t,n){e.save(),e.globalCompositeOperation=t.inverted?`destination-out`:`destination-in`,e.setTransform(1,0,0,1,0,0),e.drawImage(n,0,0),e.restore()}drawObject(e,t,n){let r=this.fill,i=this.stroke;t?(this.fill=`black`,this.stroke=``,this._setClippingProperties(e)):this._renderBackground(e),this.fire(`before:render`,{ctx:e}),this._render(e),this._drawClipPath(e,this.clipPath,n),this.fill=r,this.stroke=i}createClipPathLayer(e,t){let n=Le(t),r=n.getContext(`2d`);if(r.translate(t.cacheTranslationX,t.cacheTranslationY),r.scale(t.zoomX,t.zoomY),e._cacheCanvas=n,t.parentClipPaths.forEach(e=>{e.transform(r)}),t.parentClipPaths.push(e),e.absolutePositioned){let e=We(this.calcTransformMatrix());r.transform(e[0],e[1],e[2],e[3],e[4],e[5])}return e.transform(r),e.drawObject(r,!0,t),n}_drawClipPath(e,t,n){if(!t)return;t._transformDone=!0;let r=this.createClipPathLayer(t,n);this.drawClipPathOnCache(e,t,r)}drawCacheOnCanvas(e){e.scale(1/this.zoomX,1/this.zoomY),e.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(e=!1){if(this.isNotVisible())return!1;let t=this._cacheCanvas,n=this._cacheContext;return!(!t||!n||e||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(t&&n&&!e&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,t.width,t.height),n.restore()),!0)}_renderBackground(e){if(!this.backgroundColor)return;let t=this._getNonTransformedDimensions();e.fillStyle=this.backgroundColor,e.fillRect(-t.x/2,-t.y/2,t.x,t.y),this._removeShadow(e)}_setOpacity(e){this.group&&!this.group._transformDone?e.globalAlpha=this.getObjectOpacity():e.globalAlpha*=this.opacity}_setStrokeStyles(e,t){let n=t.stroke;n&&(e.lineWidth=t.strokeWidth,e.lineCap=t.strokeLineCap,e.lineDashOffset=t.strokeDashOffset,e.lineJoin=t.strokeLineJoin,e.miterLimit=t.strokeMiterLimit,ft(n)?n.gradientUnits===`percentage`||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(e,n):(e.strokeStyle=n.toLive(e),this._applyPatternGradientTransform(e,n)):e.strokeStyle=t.stroke)}_setFillStyles(e,{fill:t}){t&&(ft(t)?(e.fillStyle=t.toLive(e),this._applyPatternGradientTransform(e,t)):e.fillStyle=t)}_setClippingProperties(e){e.globalAlpha=1,e.strokeStyle=`transparent`,e.fillStyle=`#000000`}_setLineDash(e,t){t&&t.length!==0&&e.setLineDash(t)}_setShadow(e){if(!this.shadow)return;let t=this.shadow,n=this.canvas,r=this.getCanvasRetinaScaling(),[i,,,a]=n?.viewportTransform||B,o=i*r,s=a*r,c=t.nonScaling?new q(1,1):this.getObjectScaling();e.shadowColor=t.color,e.shadowBlur=t.blur*C.browserShadowBlurConstant*(o+s)*(c.x+c.y)/4,e.shadowOffsetX=t.offsetX*o*c.x,e.shadowOffsetY=t.offsetY*s*c.y}_removeShadow(e){this.shadow&&(e.shadowColor=``,e.shadowBlur=e.shadowOffsetX=e.shadowOffsetY=0)}_applyPatternGradientTransform(e,t){if(!ft(t))return{offsetX:0,offsetY:0};let n=t.gradientTransform||t.patternTransform,r=-this.width/2+t.offsetX||0,i=-this.height/2+t.offsetY||0;return t.gradientUnits===`percentage`?e.transform(this.width,0,0,this.height,r,i):e.transform(1,0,0,1,r,i),n&&e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:r,offsetY:i}}_renderPaintInOrder(e){this.paintFirst===`stroke`?(this._renderStroke(e),this._renderFill(e)):(this._renderFill(e),this._renderStroke(e))}_render(e){}_renderFill(e){this.fill&&(e.save(),this._setFillStyles(e,this),this.fillRule===`evenodd`?e.fill(`evenodd`):e.fill(),e.restore())}_renderStroke(e){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e),e.save(),this.strokeUniform){let t=this.getObjectScaling();e.scale(1/t.x,1/t.y)}this._setLineDash(e,this.strokeDashArray),this._setStrokeStyles(e,this),e.stroke(),e.restore()}}_applyPatternForTransformedGradient(e,t){let n=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),i=n.x/this.scaleX/r,a=n.y/this.scaleY/r,o=Le({width:Math.ceil(i),height:Math.ceil(a)}),s=o.getContext(`2d`);s&&(s.beginPath(),s.moveTo(0,0),s.lineTo(i,0),s.lineTo(i,a),s.lineTo(0,a),s.closePath(),s.translate(i/2,a/2),s.scale(n.zoomX/this.scaleX/r,n.zoomY/this.scaleY/r),this._applyPatternGradientTransform(s,t),s.fillStyle=t.toLive(e),s.fill(),e.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),e.scale(r*this.scaleX/n.zoomX,r*this.scaleY/n.zoomY),e.strokeStyle=s.createPattern(o,`no-repeat`)??``)}_findCenterFromElement(){return new q(this.left+this.width/2,this.top+this.height/2)}clone(e){let t=this.toObject(e);return this.constructor.fromObject(t)}cloneAsImage(e){let t=this.toCanvasElement(e);return new(K.getClass(`image`))(t)}toCanvasElement(e={}){let t=Vt(this),n=this.group,r=this.shadow,i=Math.abs,a=e.enableRetinaScaling?P():1,o=(e.multiplier||1)*a,s=e.canvasProvider||(e=>new jt(e,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,e.withoutTransform&&Bt(this),e.withoutShadow&&(this.shadow=null),e.viewportTransform&&Kt(this,this.getViewportTransform()),this.setCoords();let c=Pe(),l=this.getBoundingRect(),u=this.shadow,d=new q;if(u){let e=u.blur,t=u.nonScaling?new q(1,1):this.getObjectScaling();d.x=2*Math.round(i(u.offsetX)+e)*i(t.x),d.y=2*Math.round(i(u.offsetY)+e)*i(t.y)}let f=l.width+d.x,p=l.height+d.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let m=s(c);e.format===`jpeg`&&(m.backgroundColor=`#fff`),this.setPositionByOrigin(new q(m.width/2,m.height/2),V,V);let h=this.canvas;m._objects=[this],this.set(`canvas`,m),this.setCoords();let g=m.toCanvasElement(o||1,e);return this.set(`canvas`,h),this.shadow=r,n&&(this.group=n),this.set(t),this.setCoords(),m._objects=[],m.destroy(),g}toDataURL(e={}){return Re(this.toCanvasElement(e),e.format||`png`,e.quality||1)}toBlob(e={}){return ze(this.toCanvasElement(e),e.format||`png`,e.quality||1)}isType(...e){return e.includes(this.constructor.type)||e.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(e){let{centeredRotation:t,originX:n,originY:r}=this;if(t){let{x:e,y:t}=this.getRelativeCenterPoint();this.originX=V,this.originY=V,this.left=e,this.top=t}if(this.set(`angle`,e),t){let{x:e,y:t}=this.getPositionByOrigin(n,r);this.left=e,this.top=t,this.originX=n,this.originY=r}}setOnGroup(){}_setupCompositeOperation(e){this.globalCompositeOperation&&(e.globalCompositeOperation=this.globalCompositeOperation)}dispose(){xe.cancelByTarget(this),this.off(),this._set(`canvas`,void 0),this._cacheCanvas&&j().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(e,t){return Object.entries(e).reduce((e,[n,r])=>(e[n]=this._animate(n,r,t),e),{})}_animate(e,t,n={}){let r=e.split(`.`),i=this.constructor.colorProperties.includes(r[r.length-1]),{abort:a,startValue:o,onChange:s,onComplete:c}=n,l={...n,target:this,startValue:o??r.reduce((e,t)=>e[t],this),endValue:t,abort:a?.bind(this),onChange:(e,t,n)=>{r.reduce((t,n,i)=>(i===r.length-1&&(t[n]=e),t[n]),this),s&&s(e,t,n)},onComplete:(e,t,n)=>{this.setCoords(),c&&c(e,t,n)}};return i?Wr(l):Ur(l)}isDescendantOf(e){let{parent:t,group:n}=this;return t===e||n===e||!!t&&t.isDescendantOf(e)||!!n&&n!==t&&n.isDescendantOf(e)}getAncestors(){let e=[],t=this;do t=t.parent,t&&e.push(t);while(t);return e}findCommonAncestors(e){if(this===e)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let t=this.getAncestors(),n=e.getAncestors();if(t.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[e,...n.slice(0,n.length-1)],common:[this]};for(let r,i=0;i<t.length;i++){if(r=t[i],r===e)return{fork:[this,...t.slice(0,i)],otherFork:[],common:t.slice(i)};for(let a=0;a<n.length;a++){if(this===n[a])return{fork:[],otherFork:[e,...n.slice(0,a)],common:[this,...t]};if(r===n[a])return{fork:[this,...t.slice(0,i)],otherFork:[e,...n.slice(0,a)],common:t.slice(i)}}}return{fork:[this,...t],otherFork:[e,...n],common:[]}}hasCommonAncestors(e){let t=this.findCommonAncestors(e);return t&&!!t.common.length}isInFrontOf(e){if(this===e)return;let t=this.findCommonAncestors(e);if(t.fork.includes(e))return!0;if(t.otherFork.includes(this))return!1;let n=t.common[0]||this.canvas;if(!n)return;let r=t.fork.pop(),i=t.otherFork.pop(),a=n._objects.indexOf(r),o=n._objects.indexOf(i);return a>-1&&a>o}toObject(t=[]){let n=t.concat(e.customProperties,this.constructor.customProperties||[]),r,i=C.NUM_FRACTION_DIGITS,{clipPath:a,fill:o,stroke:s,shadow:c,strokeDashArray:l,left:u,top:d,originX:f,originY:p,width:m,height:h,strokeWidth:g,strokeLineCap:_,strokeDashOffset:v,strokeLineJoin:y,strokeUniform:b,strokeMiterLimit:x,scaleX:S,scaleY:w,angle:T,flipX:E,flipY:D,opacity:O,visible:k,backgroundColor:A,fillRule:j,paintFirst:M,globalCompositeOperation:N,skewX:P,skewY:F}=this;a&&!a.excludeFromExport&&(r=a.toObject(n.concat(`inverted`,`absolutePositioned`)));let L=e=>ut(e,i),R={...ct(this,n),type:this.constructor.type,version:I,originX:f,originY:p,left:L(u),top:L(d),width:L(m),height:L(h),fill:pt(o)?o.toObject():o,stroke:pt(s)?s.toObject():s,strokeWidth:L(g),strokeDashArray:l&&l.concat(),strokeLineCap:_,strokeDashOffset:v,strokeLineJoin:y,strokeUniform:b,strokeMiterLimit:L(x),scaleX:L(S),scaleY:L(w),angle:L(T),flipX:E,flipY:D,opacity:L(O),shadow:c&&c.toObject(),visible:k,backgroundColor:A,fillRule:j,paintFirst:M,globalCompositeOperation:N,skewX:L(P),skewY:L(F),...r?{clipPath:r}:null};return this.includeDefaultValues?R:this._removeDefaultValues(R)}toDatalessObject(e){return this.toObject(e)}_removeDefaultValues(e){let t=this.constructor.getDefaults(),n=Object.keys(t).length>0?t:Object.getPrototypeOf(this);return lt(e,(e,t)=>{if(t===`left`||t===`top`||t===`type`)return!0;let r=n[t];return e!==r&&!(Array.isArray(e)&&Array.isArray(r)&&e.length===0&&r.length===0)})}toString(){return`#<${this.constructor.type}>`}static _fromObject({type:e,...t},{extraParam:n,...r}={}){return st(t,r).then(e=>n?(delete e[n],new this(t[n],e)):new this(e))}static fromObject(e,t){return this._fromObject(e,t)}};x(qr,`stateProperties`,$n),x(qr,`cacheProperties`,er),x(qr,`ownDefaults`,tr),x(qr,`type`,`FabricObject`),x(qr,`colorProperties`,[U,ye,`backgroundColor`]),x(qr,`customProperties`,[]),K.setClass(qr),K.setClass(qr,`object`);var Jr=(e,t)=>{var n;let{transform:{target:r}}=t;(n=r.canvas)==null||n.fire(`object:${e}`,{...t,target:r}),r.fire(e,t)},Yr=(e,t,n)=>(r,i,a,o)=>{let s=t(r,i,a,o);return s&&Jr(e,{...fn(r,i,a,o),...n}),s};function Xr(e){return(t,n,r,i)=>{let{target:a,originX:o,originY:s}=n,c=a.getPositionByOrigin(o,s),l=e(t,n,r,i);return a.setPositionByOrigin(c,n.originX,n.originY),l}}var Zr=(e,t,n,r)=>(i,a,o,s)=>{let c=mn(a,a.originX,a.originY,o,s)[n],l=Jt(a[t]);if(l===0||l>0&&c<0||l<0&&c>0){let{target:t}=a,n=t.strokeWidth/(t.strokeUniform?t[r]:1),i=ln(a)?2:1,o=t[e],s=Math.abs(c*i/t[r])-n;return t.set(e,Math.max(s,1)),o!==t[e]}return!1},Qr=Zr(`width`,`originX`,`x`,`scaleX`),$r=Zr(`height`,`originY`,`y`,`scaleY`),ei=Yr(fe,Xr(Qr)),ti=Yr(fe,Xr($r));function ni(e,t,n,r,i){e.save();let{stroke:a,xSize:o,ySize:s,opName:c}=this.commonRenderProps(e,t,n,i,r),l=o;o>s?e.scale(1,s/o):s>o&&(l=s,e.scale(o/s,1)),e.beginPath(),e.arc(0,0,l/2,0,z,!1),e[c](),a&&e.stroke(),e.restore()}function ri(e,t,n,r,i){e.save();let{stroke:a,xSize:o,ySize:s,opName:c}=this.commonRenderProps(e,t,n,i,r),l=o/2,u=s/2;e[`${c}Rect`](-l,-u,o,s),a&&e.strokeRect(-l,-u,o,s),e.restore()}var ii=class{constructor(e){x(this,`visible`,!0),x(this,`actionName`,he),x(this,`angle`,0),x(this,`x`,0),x(this,`y`,0),x(this,`offsetX`,0),x(this,`offsetY`,0),x(this,`sizeX`,0),x(this,`sizeY`,0),x(this,`touchSizeX`,0),x(this,`touchSizeY`,0),x(this,`cursorStyle`,`crosshair`),x(this,`withConnection`,!1),Object.assign(this,e)}getTransformAnchorPoint(){return this.transformAnchorPoint??new q(.5-this.x,.5-this.y)}shouldActivate(e,t,n,{tl:r,tr:i,br:a,bl:o}){return t.canvas?.getActiveObject()===t&&t.isControlVisible(e)&&Gr.isPointInPolygon(n,[r,i,a,o])}getActionHandler(e,t,n){return this.actionHandler}getMouseDownHandler(e,t,n){return this.mouseDownHandler}getMouseUpHandler(e,t,n){return this.mouseUpHandler}cursorStyleHandler(e,t,n,r){return t.cursorStyle}getActionName(e,t,n){return t.actionName}getVisibility(e,t){return e._controlsVisibility?.[t]??this.visible}setVisibility(e,t,n){this.visible=e}positionHandler(e,t,n,r){return new q(this.x*e.x+this.offsetX,this.y*e.y+this.offsetY).transform(t)}calcCornerCoords(e,t,n,r,i,a){let o=Ke([Ze(n,r),Qe({angle:e}),$e((i?this.touchSizeX:this.sizeX)||t,(i?this.touchSizeY:this.sizeY)||t)]);return{tl:new q(-.5,-.5).transform(o),tr:new q(.5,-.5).transform(o),br:new q(.5,.5).transform(o),bl:new q(-.5,.5).transform(o)}}commonRenderProps(e,t,n,r,i={}){let{cornerSize:a,cornerColor:o,transparentCorners:s,cornerStrokeColor:c}=i,l=a||r.cornerSize,u=this.sizeX||l,d=this.sizeY||l,f=s===void 0?r.transparentCorners:s,p=f?ye:U,m=c||r.cornerStrokeColor,h=!f&&!!m;return e.fillStyle=o||r.cornerColor||``,e.strokeStyle=m||``,e.translate(t,n),e.rotate(Be(r.getTotalAngle())),{stroke:h,xSize:u,ySize:d,transparentCorners:f,opName:p}}render(e,t,n,r,i){((r||={}).cornerStyle||i.cornerStyle)===`circle`?ni.call(this,e,t,n,r,i):ri.call(this,e,t,n,r,i)}},ai=(e,t,n)=>n.lockRotation?cn:t.cursorStyle,oi=Yr(le,Xr((e,{target:t,ex:n,ey:r,theta:i,originX:a,originY:o},s,c)=>{let l=t.getPositionByOrigin(a,o);if(dn(t,`lockRotation`))return!1;let u=Math.atan2(r-l.y,n-l.x),d=Ve(Math.atan2(c-l.y,s-l.x)-u+i);if(t.snapAngle&&t.snapAngle>0){let e=t.snapAngle,n=t.snapThreshold||e,r=Math.ceil(d/e)*e,i=Math.floor(d/e)*e;Math.abs(d-i)<n?d=i:Math.abs(d-r)<n&&(d=r)}d<0&&(d=360+d),d%=360;let f=t.angle!==d;return t.angle=d,f}));function si(e,t){let n=t.canvas,r=e[n.uniScaleKey];return n.uniformScaling&&!r||!n.uniformScaling&&r}function ci(e,t,n){let r=dn(e,`lockScalingX`),i=dn(e,`lockScalingY`);if(r&&i||!t&&(r||i)&&n||r&&t===`x`||i&&t===`y`)return!0;let{width:a,height:o,strokeWidth:s}=e;return a===0&&s===0&&t!==`y`||o===0&&s===0&&t!==`x`}var li=[`e`,`se`,`s`,`sw`,`w`,`nw`,`n`,`ne`,`e`],ui=(e,t,n,r)=>{let i=si(e,n);return ci(n,t.x!==0&&t.y===0?`x`:t.x===0&&t.y!==0?`y`:``,i)?cn:`${li[pn(n,0,r)]}-resize`};function di(e,t,n,r,i={}){let a=t.target,o=i.by,s=si(e,a),c,l,u,d,f,p;if(ci(a,o,s))return!1;if(t.gestureScale)l=t.scaleX*t.gestureScale,u=t.scaleY*t.gestureScale;else{if(c=mn(t,t.originX,t.originY,n,r),f=o===`y`?1:Math.sign(c.x||t.signX||1),p=o===`x`?1:Math.sign(c.y||t.signY||1),t.signX||=f,t.signY||=p,dn(a,`lockScalingFlip`)&&(t.signX!==f||t.signY!==p))return!1;if(d=a._getTransformedDimensions(),s&&!o){let e=Math.abs(c.x)+Math.abs(c.y),{original:n}=t,r=e/(Math.abs(d.x*n.scaleX/a.scaleX)+Math.abs(d.y*n.scaleY/a.scaleY));l=n.scaleX*r,u=n.scaleY*r}else l=Math.abs(c.x*a.scaleX/d.x),u=Math.abs(c.y*a.scaleY/d.y);ln(t)&&(l*=2,u*=2),t.signX!==f&&o!==`y`&&(t.originX=un(t.originX),l*=-1,t.signX=f),t.signY!==p&&o!==`x`&&(t.originY=un(t.originY),u*=-1,t.signY=p)}let m=a.scaleX,h=a.scaleY;return o?(o===`x`&&a.set(`scaleX`,l),o===`y`&&a.set(`scaleY`,u)):(!dn(a,`lockScalingX`)&&a.set(`scaleX`,l),!dn(a,`lockScalingY`)&&a.set(`scaleY`,u)),m!==a.scaleX||h!==a.scaleY}var fi=Yr(ce,Xr((e,t,n,r)=>di(e,t,n,r))),pi=Yr(ce,Xr((e,t,n,r)=>di(e,t,n,r,{by:`x`}))),mi=Yr(ce,Xr((e,t,n,r)=>di(e,t,n,r,{by:`y`}))),hi={x:{counterAxis:`y`,scale:H,skew:_e,lockSkewing:`lockSkewingX`,origin:`originX`,flip:`flipX`},y:{counterAxis:`x`,scale:ge,skew:ve,lockSkewing:`lockSkewingY`,origin:`originY`,flip:`flipY`}},gi=[`ns`,`nesw`,`ew`,`nwse`],_i=(e,t,n,r)=>t.x!==0&&dn(n,`lockSkewingY`)||t.y!==0&&dn(n,`lockSkewingX`)?cn:`${gi[pn(n,0,r)%4]}-resize`;function vi(e,t,n,r,i){let{target:a}=n,{counterAxis:o,origin:s,lockSkewing:c,skew:l,flip:u}=hi[e];if(dn(a,c))return!1;let{origin:d,flip:f}=hi[o],p=Jt(n[d])*(a[f]?-1:1),m=-Math.sign(p)*(a[u]?-1:1),h=-(a[l]===0&&mn(n,`center`,`center`,r,i)[e]>0||a[l]>0?1:-1)*m*.5+.5;return Yr(de,Xr((t,n,r,i)=>function(e,{target:t,ex:n,ey:r,skewingSide:i,...a},o){let{skew:s}=hi[e],c=o.subtract(new q(n,r)).divide(new q(t.scaleX,t.scaleY))[e],l=t[s],u=a[s],d=Math.tan(Be(u)),f=e===`y`?t._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:t._getTransformedDimensions({scaleX:1,scaleY:1}).y,p=2*c*i/Math.max(f,1)+d,m=Ve(Math.atan(p));t.set(s,m);let h=l!==t[s];if(h&&e===`y`){let{skewX:e,scaleX:n}=t,r=t._getTransformedDimensions({skewY:l}),i=t._getTransformedDimensions(),a=e===0?1:r.x/i.x;a!==1&&t.set(`scaleX`,a*n)}return h}(e,n,new q(r,i))))(t,{...n,[s]:h,skewingSide:m},r,i)}var yi=(e,t,n,r)=>vi(`x`,e,t,n,r),bi=(e,t,n,r)=>vi(`y`,e,t,n,r);function xi(e,t){return e[t.canvas.altActionKey]}var Si=(e,t,n)=>{let r=xi(e,n);return t.x===0?r?_e:ge:t.y===0?r?ve:H:``},Ci=(e,t,n,r)=>xi(e,n)?_i(0,t,n,r):ui(e,t,n,r),wi=(e,t,n,r)=>xi(e,t.target)?bi(e,t,n,r):pi(e,t,n,r),Ti=(e,t,n,r)=>xi(e,t.target)?yi(e,t,n,r):mi(e,t,n,r),Ei=()=>({ml:new ii({x:-.5,y:0,cursorStyleHandler:Ci,actionHandler:wi,getActionName:Si}),mr:new ii({x:.5,y:0,cursorStyleHandler:Ci,actionHandler:wi,getActionName:Si}),mb:new ii({x:0,y:.5,cursorStyleHandler:Ci,actionHandler:Ti,getActionName:Si}),mt:new ii({x:0,y:-.5,cursorStyleHandler:Ci,actionHandler:Ti,getActionName:Si}),tl:new ii({x:-.5,y:-.5,cursorStyleHandler:ui,actionHandler:fi}),tr:new ii({x:.5,y:-.5,cursorStyleHandler:ui,actionHandler:fi}),bl:new ii({x:-.5,y:.5,cursorStyleHandler:ui,actionHandler:fi}),br:new ii({x:.5,y:.5,cursorStyleHandler:ui,actionHandler:fi}),mtr:new ii({x:0,y:-.5,actionHandler:oi,cursorStyleHandler:ai,offsetY:-40,withConnection:!0,actionName:ue})}),Di=()=>({mr:new ii({x:.5,y:0,actionHandler:ei,cursorStyleHandler:Ci,actionName:fe}),ml:new ii({x:-.5,y:0,actionHandler:ei,cursorStyleHandler:Ci,actionName:fe})}),Oi=()=>({...Ei(),...Di()}),ki=class e extends qr{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t){super(),Object.assign(this,this.constructor.createControls(),e.ownDefaults),this.setOptions(t)}static createControls(){return{controls:Ei()}}_updateCacheCanvas(){let e=this.canvas;if(this.noScaleCache&&e&&e._currentTransform){let t=e._currentTransform,n=t.target,r=t.action;if(this===n&&r&&r.startsWith(`scale`))return!1}return super._updateCacheCanvas()}getActiveControl(){let e=this.__corner;return e?{key:e,control:this.controls[e],coord:this.oCoords[e]}:void 0}findControl(e,t=!1){if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let r=n.length-1;r>=0;r--){let[i,a]=n[r],o=this.controls[i];if(o.shouldActivate(i,this,e,t?a.touchCorner:a.corner))return this.__corner=i,{key:i,control:o,coord:this.oCoords[i]}}}calcOCoords(){let e=this.getViewportTransform(),t=Je(e),n=Ye(e),r=this.getCenterPoint(),i=Ge(Ge(e,Ge(Ze(r.x,r.y),Qe({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}))),[1/t,0,0,1/n,0,0]),a=this.group?Xe(this.calcTransformMatrix()):void 0;a&&(a.scaleX=Math.abs(a.scaleX),a.scaleY=Math.abs(a.scaleY));let o=this._calculateCurrentDimensions(a),s={};return this.forEachControl((e,t)=>{let n=e.positionHandler(o,i,this,e);s[t]=Object.assign(n,this._calcCornerCoords(e,n))}),s}_calcCornerCoords(e,t){let n=this.getTotalAngle();return{corner:e.calcCornerCoords(n,this.cornerSize,t.x,t.y,!1,this),touchCorner:e.calcCornerCoords(n,this.touchCornerSize,t.x,t.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(e){for(let t in this.controls)e(this.controls[t],t,this)}drawSelectionBackground(e){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;e.save();let t=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),r=this.getViewportTransform();e.translate(t.x,t.y),e.scale(1/r[0],1/r[3]),e.rotate(Be(this.angle)),e.fillStyle=this.selectionBackgroundColor,e.fillRect(-n.x/2,-n.y/2,n.x,n.y),e.restore()}strokeBorders(e,t){e.strokeRect(-t.x/2,-t.y/2,t.x,t.y)}_drawBorders(e,t,n={}){let r={hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray,...n};e.save(),e.strokeStyle=r.borderColor,this._setLineDash(e,r.borderDashArray),this.strokeBorders(e,t),r.hasControls&&this.drawControlsConnectingLines(e,t),e.restore()}_renderControls(e,t={}){let{hasBorders:n,hasControls:r}=this,i={hasBorders:n,hasControls:r,...t},a=this.getViewportTransform(),o=i.hasBorders,s=i.hasControls,c=Xe(Ge(a,this.calcTransformMatrix()));e.save(),e.translate(c.translateX,c.translateY),e.lineWidth=this.borderScaleFactor,this.group===this.parent&&(e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(c.angle-=180);let l=qe(a);e.rotate(this.group?Be(c.angle):Be(this.angle)+l),o&&this.drawBorders(e,c,t),s&&this.drawControls(e,t),e.restore()}drawBorders(e,t,n){let r;if(n&&n.forActiveSelection||this.group){let e=Ht(this.width,this.height,rt(t)),n=this.isStrokeAccountedForInDimensions()?Ee:(this.strokeUniform?new q().scalarAdd(this.canvas?this.canvas.getZoom():1):new q(t.scaleX,t.scaleY)).scalarMultiply(this.strokeWidth);r=e.add(n).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else r=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(e,r,n)}drawControlsConnectingLines(e,t){let n=!1;e.beginPath(),this.forEachControl((r,i)=>{r.withConnection&&r.getVisibility(this,i)&&(n=!0,e.moveTo(r.x*t.x,r.y*t.y),e.lineTo(r.x*t.x+r.offsetX,r.y*t.y+r.offsetY))}),n&&e.stroke()}drawControls(e,t={}){e.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:r,cornerDashArray:i,cornerColor:a}=this,o={cornerStrokeColor:r,cornerDashArray:i,cornerColor:a,...t};e.setTransform(n,0,0,n,0,0),e.strokeStyle=e.fillStyle=o.cornerColor,this.transparentCorners||(e.strokeStyle=o.cornerStrokeColor),this._setLineDash(e,o.cornerDashArray),this.forEachControl((t,n)=>{if(t.getVisibility(this,n)){let r=this.oCoords[n];t.render(e,r.x,r.y,o,this)}}),e.restore()}isControlVisible(e){return this.controls[e]&&this.controls[e].getVisibility(this,e)}setControlVisible(e,t){this._controlsVisibility||={},this._controlsVisibility[e]=t}setControlsVisibility(e={}){Object.entries(e).forEach(([e,t])=>this.setControlVisible(e,t))}clearContextTop(e){if(!this.canvas)return;let t=this.canvas.contextTop;if(!t)return;let n=this.canvas.viewportTransform;t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(t);let r=this.width+4,i=this.height+4;return t.clearRect(-r/2,-i/2,r,i),e||t.restore(),t}onDeselect(e){return!1}onSelect(e){return!1}shouldStartDragging(e){return!1}onDragStart(e){return!1}canDrop(e){return!1}renderDragSourceEffect(e){}renderDropTargetEffect(e){}};function Ai(e,t){return t.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(n=>{n!==`constructor`&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n)||Object.create(null))})}),e}x(ki,`ownDefaults`,{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:`rgb(178,204,255)`,cornerStrokeColor:``,cornerStyle:`rect`,cornerDashArray:null,hasControls:!0,borderColor:`rgb(178,204,255)`,borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:``,selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:`down`,hoverCursor:null,moveCursor:null});var ji=class extends ki{};Ai(ji,[jn]),K.setClass(ji),K.setClass(ji,`object`);var Mi=(e,t,n,r)=>{let i=2*(r=Math.round(r))+1,{data:a}=e.getImageData(t-r,n-r,i,i);for(let e=3;e<a.length;e+=4)if(a[e]>0)return!1;return!0},Ni=class{constructor(e){this.options=e,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new q(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new q(1/this.options.scaleX,1/this.options.scaleY):new q(1,1)}createSideVector(e,t){let n=Qt(e,t);return this.options.strokeUniform?n.multiply(this.scale):n}projectOrthogonally(e,t,n){return this.applySkew(e.add(this.calcOrthogonalProjection(e,t,n)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(e){let t=new q(e);return t.y+=t.x*Math.tan(Be(this.options.skewY)),t.x+=t.y*Math.tan(Be(this.options.skewX)),t}scaleUnitVector(e,t){return e.multiply(this.strokeUniformScalar).scalarMultiply(t)}},Pi=new q,Fi=class e extends Ni{static getOrthogonalRotationFactor(e,t){let n=t?en(e,t):tn(e);return Math.abs(n)<R?-1:1}constructor(e,t,n,r){super(r),x(this,`AB`,void 0),x(this,`AC`,void 0),x(this,`alpha`,void 0),x(this,`bisector`,void 0),this.A=new q(e),this.B=new q(t),this.C=new q(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=en(this.AB,this.AC),this.bisector=nn(Zt(this.AB.eq(Pi)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,n,r=this.strokeProjectionMagnitude){let i=rn(this.createSideVector(t,n)),a=e.getOrthogonalRotationFactor(i,this.bisector);return this.scaleUnitVector(i,r*a)}projectBevel(){let e=[];return(this.alpha%z===0?[this.B]:[this.B,this.C]).forEach(t=>{e.push(this.projectOrthogonally(this.A,t)),e.push(this.projectOrthogonally(this.A,t,-this.strokeProjectionMagnitude))}),e}projectMiter(){let e=[],t=Math.abs(this.alpha),n=1/Math.sin(t/2),r=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),i=this.options.strokeUniform?$t(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return $t(r)/this.strokeProjectionMagnitude<=i&&e.push(this.applySkew(this.A.add(r))),e.push(...this.projectBevel()),e}projectRoundNoSkew(t,n){let r=[],i=new q(e.getOrthogonalRotationFactor(this.bisector),e.getOrthogonalRotationFactor(new q(this.bisector.y,this.bisector.x)));return[new q(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),new q(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)].forEach(e=>{sn(e,t,n)&&r.push(this.A.add(e))}),r}projectRoundWithSkew(e,t){let n=[],{skewX:r,skewY:i,scaleX:a,scaleY:o,strokeUniform:s}=this.options,c=new q(Math.tan(Be(r)),Math.tan(Be(i))),l=this.strokeProjectionMagnitude,u=s?l/o/Math.sqrt(1/o**2+1/a**2*c.y**2):l/Math.sqrt(1+c.y**2),d=new q(Math.sqrt(Math.max(l**2-u**2,0)),u),f=s?l/Math.sqrt(1+c.x**2*(1/o)**2/(1/a+1/a*c.x*c.y)**2):l/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new q(f,Math.sqrt(Math.max(l**2-f**2,0)));return[p,p.scalarMultiply(-1),d,d.scalarMultiply(-1)].map(e=>this.applySkew(s?e.multiply(this.strokeUniformScalar):e)).forEach(r=>{sn(r,e,t)&&n.push(this.applySkew(this.A).add(r))}),n}projectRound(){let e=[];e.push(...this.projectBevel());let t=this.alpha%z===0,n=this.applySkew(this.A),r=e[t?0:2].subtract(n),i=e[+!!t].subtract(n),a=an(r,t?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)))>0,o=a?r:i,s=a?i:r;return this.isSkewed()?e.push(...this.projectRoundWithSkew(o,s)):e.push(...this.projectRoundNoSkew(o,s)),e}projectPoints(){switch(this.options.strokeLineJoin){case`miter`:return this.projectMiter();case`round`:return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map(e=>({originPoint:this.A,projectedPoint:e,angle:this.alpha,bisector:this.bisector}))}},Ii=class extends Ni{constructor(e,t,n){super(n),this.A=new q(e),this.T=new q(t)}calcOrthogonalProjection(e,t,n=this.strokeProjectionMagnitude){let r=this.createSideVector(e,t);return this.scaleUnitVector(rn(r),n)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let e=[];if(!this.isSkewed()&&this.A.eq(this.T)){let t=new q(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);e.push(this.applySkew(this.A.add(t)),this.applySkew(this.A.subtract(t)))}else e.push(...new Fi(this.A,this.T,this.T,this.options).projectRound());return e}projectSquare(){let e=[];if(this.A.eq(this.T)){let t=new q(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);e.push(this.A.add(t),this.A.subtract(t))}else{let t=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),n=this.scaleUnitVector(nn(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),r=this.A.add(n);e.push(r.add(t),r.subtract(t))}return e.map(e=>this.applySkew(e))}projectPoints(){switch(this.options.strokeLineCap){case`round`:return this.projectRound();case`square`:return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map(e=>({originPoint:this.A,projectedPoint:e}))}},Li=(e,t,n=!1)=>{let r=[];if(e.length===0)return r;let i=e.reduce((e,t)=>(e[e.length-1].eq(t)||e.push(new q(t)),e),[new q(e[0])]);if(i.length===1)n=!0;else if(!n){let e=i[0],t=((e,t)=>{for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1})(i,t=>!t.eq(e));i.splice(t+1)}return i.forEach((e,i,a)=>{let o,s;i===0?(s=a[1],o=n?e:a[a.length-1]):i===a.length-1?(o=a[i-1],s=n?e:a[0]):(o=a[i-1],s=a[i+1]),n&&a.length===1?r.push(...new Ii(e,e,t).project()):!n||i!==0&&i!==a.length-1?r.push(...new Fi(e,o,s,t).project()):r.push(...new Ii(e,i===0?s:o,t).project())}),r},Ri=e=>{let t={};return Object.keys(e).forEach(n=>{t[n]={},Object.keys(e[n]).forEach(r=>{t[n][r]={...e[n][r]}})}),t},zi=(e,t,n=!1)=>e.fill!==t.fill||e.stroke!==t.stroke||e.strokeWidth!==t.strokeWidth||e.fontSize!==t.fontSize||e.fontFamily!==t.fontFamily||e.fontWeight!==t.fontWeight||e.fontStyle!==t.fontStyle||e.textDecorationThickness!==t.textDecorationThickness||e.textDecorationColor!==t.textDecorationColor||e.textBackgroundColor!==t.textBackgroundColor||e.deltaY!==t.deltaY||n&&(e.overline!==t.overline||e.underline!==t.underline||e.linethrough!==t.linethrough),Bi=(e,t)=>{let n=t.split(`
`),r=[],i=-1,a={};e=Ri(e);for(let t=0;t<n.length;t++){let o=Ot(n[t]);if(e[t])for(let n=0;n<o.length;n++){i++;let o=e[t][n];o&&Object.keys(o).length>0&&(zi(a,o,!0)?r.push({start:i,end:i+1,style:o}):r[r.length-1].end++),a=o||{}}else i+=o.length,a={}}return r},Vi=(e,t)=>{if(!Array.isArray(e))return Ri(e);let n=t.split(oe),r={},i=-1,a=0;for(let t=0;t<n.length;t++){let o=Ot(n[t]);for(let n=0;n<o.length;n++)i++,e[a]&&e[a].start<=i&&i<e[a].end&&(r[t]=r[t]||{},r[t][n]={...e[a].style},i===e[a].end-1&&a++)}return r},Hi=[`display`,`transform`,U,`fill-opacity`,`fill-rule`,`opacity`,ye,`stroke-dasharray`,`stroke-linecap`,`stroke-dashoffset`,`stroke-linejoin`,`stroke-miterlimit`,`stroke-opacity`,`stroke-width`,`id`,`paint-order`,`vector-effect`,`instantiated_by_use`,`clip-path`];function Ui(e,t){let n=e.nodeName,r=e.getAttribute(`class`),i=e.getAttribute(`id`),a=`(?![a-zA-Z\\-]+)`,o;if(o=RegExp(`^`+n,`i`),t=t.replace(o,``),i&&t.length&&(o=RegExp(`#`+i+a,`i`),t=t.replace(o,``)),r&&t.length){let e=r.split(` `);for(let n=e.length;n--;)o=RegExp(`\\.`+e[n]+a,`i`),t=t.replace(o,``)}return t.length===0}function Wi(e,t){let n=!0,r=Ui(e,t.pop());return r&&t.length&&(n=function(e,t){let n,r=!0;for(;e.parentElement&&e.parentElement.nodeType===1&&t.length;)r&&(n=t.pop()),r=Ui(e=e.parentElement,n);return t.length===0}(e,t)),r&&n&&t.length===0}function Gi(e,t={}){let n={};for(let r in t)Wi(e,r.split(` `))&&(n={...n,...t[r]});return n}var Ki=e=>Gn[e]??e,qi=RegExp(`(${Hn})`,`gi`),Ji=`(${Hn})`,Yi=String.raw`(skewX)\(${Ji}\)`,Xi=String.raw`(skewY)\(${Ji}\)`,Zi=String.raw`(rotate)\(${Ji}(?: ${Ji} ${Ji})?\)`,Qi=String.raw`(scale)\(${Ji}(?: ${Ji})?\)`,$i=String.raw`(translate)\(${Ji}(?: ${Ji})?\)`,ea=`(?:${String.raw`(matrix)\(${Ji} ${Ji} ${Ji} ${Ji} ${Ji} ${Ji}\)`}|${$i}|${Zi}|${Qi}|${Yi}|${Xi})`,ta=`(?:${ea}*)`,na=String.raw`^\s*(?:${ta}?)\s*$`,ra=new RegExp(na),ia=new RegExp(ea),aa=new RegExp(ea,`g`);function oa(e){let t=[];if(!(e=(e=>yn(e.replace(qi,` $1 `).replace(/,/gi,` `)))(e).replace(/\s*([()])\s*/gi,`$1`))||e&&!ra.test(e))return[...B];for(let n of e.matchAll(aa)){let e=ia.exec(n[0]);if(!e)continue;let r=B,[,i,...a]=e.filter(e=>!!e),[o,s,c,l,u,d]=a.map(e=>parseFloat(e));switch(i){case`translate`:r=Ze(o,s);break;case ue:r=Qe({angle:o},{x:s,y:c});break;case he:r=$e(o,s);break;case _e:r=tt(o);break;case ve:r=nt(o);break;case`matrix`:r=[o,s,c,l,u,d]}t.push(r)}return Ke(t)}function sa(e,t,n,r){let i=Array.isArray(t),a,o=t;if(e!==`fill`&&e!==`stroke`||t!==`none`){if(e===`strokeUniform`)return t===`non-scaling-stroke`;if(e===`strokeDashArray`)o=t===`none`?null:t.replace(/,/g,` `).split(/\s+/).map(parseFloat);else if(e===`transformMatrix`)o=n&&n.transformMatrix?Ge(n.transformMatrix,oa(t)):oa(t);else if(e===`visible`)o=t!==`none`&&t!==`hidden`,n&&!1===n.visible&&(o=!1);else if(e===`opacity`)o=parseFloat(t),n&&n.opacity!==void 0&&(o*=n.opacity);else if(e===`textAnchor`)o=t===`start`?ne:t===`end`?ie:V;else if(e===`charSpacing`||e===`textDecorationThickness`)a=On(t,r)/r*1e3;else if(e===`paintFirst`){let e=t.indexOf(U),n=t.indexOf(ye);o=U,(e>-1&&n>-1&&n<e||e===-1&&n>-1)&&(o=ye)}else{if(e===`href`||e===`xlink:href`||e===`font`||e===`id`)return t;if(e===`imageSmoothing`)return t===`optimizeQuality`;a=i?t.map(On):On(t,r)}}else o=``;return!i&&isNaN(a)?o:a}function ca(e,t){e.replace(/;\s*$/,``).split(`;`).forEach(e=>{if(!e)return;let[n,r]=e.split(`:`);t[n.trim().toLowerCase()]=r.trim()})}function la(e){let t={},n=e.getAttribute(`style`);return n&&(typeof n==`string`?ca(n,t):function(e,t){Object.entries(e).forEach(([e,n])=>{n!==void 0&&(t[e.toLowerCase()]=n)})}(n,t)),t}var ua={stroke:`strokeOpacity`,fill:`fillOpacity`};function da(e,t,n){if(!e)return{};let r,i={},a=16;e.parentNode&&Jn.test(e.parentNode.nodeName)&&(i=da(e.parentElement,t,n),i.fontSize&&(r=a=On(i.fontSize)));let o={...t.reduce((t,n)=>{let r=e.getAttribute(n);return r&&(t[n]=r),t},{}),...Gi(e,n),...la(e)};o[`clip-path`]&&e.setAttribute(qn,o[qn]),o[`font-size`]&&(r=On(o[Kn],a),o[Kn]=`${r}`);let s={};for(let e in o){let t=Ki(e);s[t]=sa(t,o[e],i,r)}s&&s.font&&function(e,t){let n=e.match(Wn);if(!n)return;let r=n[1],i=n[3],a=n[4],o=n[5],s=n[6];r&&(t.fontStyle=r),i&&(t.fontWeight=isNaN(parseFloat(i))?i:parseFloat(i)),a&&(t.fontSize=On(a)),s&&(t.fontFamily=s),o&&(t.lineHeight=o===`normal`?1:o)}(s.font,s);let c={...i,...s};return Jn.test(e.nodeName)?c:function(e){let t=ji.getDefaults();return Object.entries(ua).forEach(([n,r])=>{if(e[r]===void 0||e[n]===``)return;if(e[n]===void 0){if(!t[n])return;e[n]=t[n]}if(e[n].indexOf(`url(`)===0)return;let i=new En(e[n]);e[n]=i.setAlpha(ut(i.getAlpha()*e[r],2)).toRgba()}),e}(c)}var fa=[`rx`,`ry`],pa=class e extends ji{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t){super(),Object.assign(this,e.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:e,ry:t}=this;e&&!t?this.ry=e:t&&!e&&(this.rx=t)}_render(e){let{width:t,height:n}=this,r=-t/2,i=-n/2,a=this.rx?Math.min(this.rx,t/2):0,o=this.ry?Math.min(this.ry,n/2):0,s=a!==0||o!==0;e.beginPath(),e.moveTo(r+a,i),e.lineTo(r+t-a,i),s&&e.bezierCurveTo(r+t-.4477152502*a,i,r+t,i+.4477152502*o,r+t,i+o),e.lineTo(r+t,i+n-o),s&&e.bezierCurveTo(r+t,i+n-.4477152502*o,r+t-.4477152502*a,i+n,r+t-a,i+n),e.lineTo(r+a,i+n),s&&e.bezierCurveTo(r+.4477152502*a,i+n,r,i+n-.4477152502*o,r,i+n-o),e.lineTo(r,i+o),s&&e.bezierCurveTo(r,i+.4477152502*o,r+.4477152502*a,i,r+a,i),e.closePath(),this._renderPaintInOrder(e)}toObject(e=[]){return super.toObject([...fa,...e])}_toSVG(){let{width:e,height:t,rx:n,ry:r}=this;return[`<rect `,`COMMON_PARTS`,`x="${-e/2}" y="${-t/2}" rx="${Et(n)}" ry="${Et(r)}" width="${Et(e)}" height="${Et(t)}" />\n`]}static async fromElement(e,t,n){let{left:r=0,top:i=0,width:a=0,height:o=0,visible:s=!0,...c}=da(e,this.ATTRIBUTE_NAMES,n);return new this({...t,...c,left:r,top:i,width:a,height:o,visible:!!(s&&a&&o)})}};x(pa,`type`,`Rect`),x(pa,`cacheProperties`,[...er,...fa]),x(pa,`ownDefaults`,{rx:0,ry:0}),x(pa,`ATTRIBUTE_NAMES`,[...Hi,`x`,`y`,`rx`,`ry`,`width`,`height`]),K.setClass(pa),K.setSVGClass(pa);var ma=`initialization`,ha=`added`,ga=(e,t)=>{let{strokeUniform:n,strokeWidth:r,width:i,height:a,group:o}=t,s=o&&o!==e?Ut(o.calcTransformMatrix(),e.calcTransformMatrix()):null,c=s?t.getRelativeCenterPoint().transform(s):t.getRelativeCenterPoint(),l=!t.isStrokeAccountedForInDimensions(),u=n&&l?Gt(new q(r,r),void 0,e.calcTransformMatrix()):Ee,d=!n&&l?r:0,f=Ht(i+d,a+d,Ke([s,t.calcOwnMatrix()],!0)).add(u).scalarDivide(2);return[c.subtract(f),c.add(f)]},_a=class{calcLayoutResult(e,t){if(this.shouldPerformLayout(e))return this.calcBoundingBox(t,e)}shouldPerformLayout({type:e,prevStrategy:t,strategy:n}){return e===`initialization`||e===`imperative`||!!t&&n!==t}shouldLayoutClipPath({type:e,target:{clipPath:t}}){return e!==`initialization`&&t&&!t.absolutePositioned}getInitialSize(e,t){return t.size}calcBoundingBox(e,t){let{type:n,target:r}=t;if(n===`imperative`&&t.overrides)return t.overrides;if(e.length===0)return;let{left:i,top:a,width:o,height:s}=It(e.map(e=>ga(r,e)).reduce((e,t)=>e.concat(t),[])),c=new q(o,s),l=new q(i,a).add(c.scalarDivide(2));if(n===`initialization`){let e=this.getInitialSize(t,{size:c,center:l});return{center:l,relativeCorrection:new q(0,0),size:e}}return{center:l.transform(r.calcOwnMatrix()),size:c}}};x(_a,`type`,`strategy`);var va=class extends _a{shouldPerformLayout(e){return!0}};x(va,`type`,`fit-content`),K.setClass(va);var ya=`layoutManager`,ba=class{constructor(e=new va){x(this,`strategy`,void 0),this.strategy=e,this._subscriptions=new Map}performLayout(e){let t={bubbles:!0,strategy:this.strategy,...e,prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}};this.onBeforeLayout(t);let n=this.getLayoutResult(t);n&&this.commitLayout(t,n),this.onAfterLayout(t,n),this._prevLayoutStrategy=t.strategy}attachHandlers(e,t){let{target:n}=t;return[W,se,fe,le,ce,de,me,pe,`modifyPath`].map(t=>e.on(t,e=>this.performLayout(t===`modified`?{type:`object_modified`,trigger:t,e,target:n}:{type:`object_modifying`,trigger:t,e,target:n})))}subscribe(e,t){this.unsubscribe(e,t);let n=this.attachHandlers(e,t);this._subscriptions.set(e,n)}unsubscribe(e,t){(this._subscriptions.get(e)||[]).forEach(e=>e()),this._subscriptions.delete(e)}unsubscribeTargets(e){e.targets.forEach(t=>this.unsubscribe(t,e))}subscribeTargets(e){e.targets.forEach(t=>this.subscribe(t,e))}onBeforeLayout(e){let{target:t,type:n}=e,{canvas:r}=t;if(n===`initialization`||n===`added`?this.subscribeTargets(e):n===`removed`&&this.unsubscribeTargets(e),t.fire(`layout:before`,{context:e}),r&&r.fire(`object:layout:before`,{target:t,context:e}),n===`imperative`&&e.deep){let{strategy:n,...r}=e;t.forEachObject(e=>e.layoutManager&&e.layoutManager.performLayout({...r,bubbles:!1,target:e}))}}getLayoutResult(e){let{target:t,strategy:n,type:r}=e,i=n.calcLayoutResult(e,t.getObjects());if(!i)return;let a=r===`initialization`?new q:t.getRelativeCenterPoint(),{center:o,correction:s=new q,relativeCorrection:c=new q}=i;return{result:i,prevCenter:a,nextCenter:o,offset:a.subtract(o).add(s).transform(r===`initialization`?B:We(t.calcOwnMatrix()),!0).add(c)}}commitLayout(e,t){let{target:n}=e,{result:{size:r},nextCenter:i}=t;n.set({width:r.x,height:r.y}),this.layoutObjects(e,t),e.type===`initialization`?n.set({left:e.x??i.x+r.x*Jt(n.originX),top:e.y??i.y+r.y*Jt(n.originY)}):(n.setPositionByOrigin(i,V,V),n.setCoords(),n.set(`dirty`,!0))}layoutObjects(e,t){let{target:n}=e;n.forEachObject(r=>{r.group===n&&this.layoutObject(e,t,r)}),e.strategy.shouldLayoutClipPath(e)&&this.layoutObject(e,t,n.clipPath)}layoutObject(e,{offset:t},n){n.set({left:n.left+t.x,top:n.top+t.y})}onAfterLayout(e,t){let{target:n,strategy:r,bubbles:i,prevStrategy:a,...o}=e,{canvas:s}=n;n.fire(`layout:after`,{context:e,result:t}),s&&s.fire(`object:layout:after`,{context:e,result:t,target:n});let c=n.parent;i&&c!=null&&c.layoutManager&&((o.path||=[]).push(n),c.layoutManager.performLayout({...o,target:c})),n.set(`dirty`,!0)}dispose(){let{_subscriptions:e}=this;e.forEach(e=>e.forEach(e=>e())),e.clear()}toObject(){return{type:ya,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};K.setClass(ba,ya);var xa=class extends ba{performLayout(){}},Sa=class e extends Oe(ji){static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t=[],n={}){super(),x(this,`_activeObjects`,[]),x(this,`__objectSelectionTracker`,void 0),x(this,`__objectSelectionDisposer`,void 0),Object.assign(this,e.ownDefaults),this.setOptions(n),this.groupInit(t,n)}groupInit(e,t){this._objects=[...e],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject(e=>{this.enterGroup(e,!1)}),this.layoutManager=t.layoutManager??new ba,this.layoutManager.performLayout({type:ma,target:this,targets:[...e],x:t.left,y:t.top})}canEnterGroup(e){return e===this||this.isDescendantOf(e)?(w(`error`,`Group: circular object trees are not supported, this call has no effect`),!1):this._objects.indexOf(e)===-1||(w(`error`,`Group: duplicate objects are not supported inside group, this call has no effect`),!1)}_filterObjectsBeforeEnteringGroup(e){return e.filter((e,t,n)=>this.canEnterGroup(e)&&n.indexOf(e)===t)}add(...e){let t=this._filterObjectsBeforeEnteringGroup(e),n=super.add(...t);return this._onAfterObjectsChange(ha,t),n}insertAt(e,...t){let n=this._filterObjectsBeforeEnteringGroup(t),r=super.insertAt(e,...n);return this._onAfterObjectsChange(ha,n),r}remove(...e){let t=super.remove(...e);return this._onAfterObjectsChange(`removed`,t),t}_onObjectAdded(e){this.enterGroup(e,!0),this.fire(`object:added`,{target:e}),e.fire(`added`,{target:this})}_onObjectRemoved(e,t){this.exitGroup(e,t),this.fire(`object:removed`,{target:e}),e.fire(`removed`,{target:this})}_onAfterObjectsChange(e,t){this.layoutManager.performLayout({type:e,targets:t,target:this})}_onStackOrderChanged(){this._set(`dirty`,!0)}_set(e,t){let n=this[e];return super._set(e,t),e===`canvas`&&n!==t&&(this._objects||[]).forEach(n=>{n._set(e,t)}),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(e,{target:t}){let n=this._activeObjects;if(e)n.push(t),this._set(`dirty`,!0);else if(n.length>0){let e=n.indexOf(t);e>-1&&(n.splice(e,1),this._set(`dirty`,!0))}}_watchObject(e,t){e&&this._watchObject(!1,t),e?(t.on(`selected`,this.__objectSelectionTracker),t.on(`deselected`,this.__objectSelectionDisposer)):(t.off(`selected`,this.__objectSelectionTracker),t.off(`deselected`,this.__objectSelectionDisposer))}enterGroup(e,t){e.group&&e.group.remove(e),e._set(`parent`,this),this._enterGroup(e,t)}_enterGroup(e,t){t&&zt(e,Ge(We(this.calcTransformMatrix()),e.calcTransformMatrix())),this._shouldSetNestedCoords()&&e.setCoords(),e._set(`group`,this),e._set(`canvas`,this.canvas),this._watchObject(!0,e);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===e||e.isDescendantOf(n))&&this._activeObjects.push(e)}exitGroup(e,t){this._exitGroup(e,t),e._set(`parent`,void 0),e._set(`canvas`,void 0)}_exitGroup(e,t){e._set(`group`,void 0),t||(zt(e,Ge(this.calcTransformMatrix(),e.calcTransformMatrix())),e.setCoords()),this._watchObject(!1,e);let n=this._activeObjects.length>0?this._activeObjects.indexOf(e):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let e=ji.prototype.shouldCache.call(this);if(e){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return e}willDrawShadow(){if(super.willDrawShadow())return!0;for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(e,t,n){this._renderBackground(e);for(let t=0;t<this._objects.length;t++){var r;let n=this._objects[t];(r=this.canvas)!=null&&r.preserveObjectStacking&&n.group!==this?(e.save(),e.transform(...We(this.calcTransformMatrix())),n.render(e),e.restore()):n.group===this&&n.render(e)}this._drawClipPath(e,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject(e=>e.setCoords())}triggerLayout(e={}){this.layoutManager.performLayout({target:this,type:`imperative`,...e})}render(e){this._transformDone=!0,super.render(e),this._transformDone=!1}__serializeObjects(e,t){let n=this.includeDefaultValues;return this._objects.filter(function(e){return!e.excludeFromExport}).map(function(r){let i=r.includeDefaultValues;r.includeDefaultValues=n;let a=r[e||`toObject`](t);return r.includeDefaultValues=i,a})}toObject(e=[]){let t=this.layoutManager.toObject();return{...super.toObject([`subTargetCheck`,`interactive`,...e]),...t.strategy!==`fit-content`||this.includeDefaultValues?{layoutManager:t}:{},objects:this.__serializeObjects(`toObject`,e)}}toString(){return`#<Group: (${this.complexity()})>`}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject(e=>{this._watchObject(!1,e),e.dispose()}),super.dispose()}_createSVGBgRect(e){if(!this.backgroundColor)return``;let t=pa.prototype._toSVG.call(this),n=t.indexOf(`COMMON_PARTS`);t[n]=`for="group" `;let r=t.join(``);return e?e(r):r}_toSVG(e){let t=[`<g `,`COMMON_PARTS`,` >
`],n=this._createSVGBgRect(e);n&&t.push(`		`,n);for(let n=0;n<this._objects.length;n++)t.push(`		`,this._objects[n].toSVG(e));return t.push(`</g>
`),t}getSvgStyles(){let e=this.opacity!==void 0&&this.opacity!==1?`opacity: ${Et(this.opacity)};`:``,t=this.visible?``:` visibility: hidden;`;return[e,this.getSvgFilter(),t].join(``)}toClipPathSVG(e){let t=[],n=this._createSVGBgRect(e);n&&t.push(`	`,n);for(let n=0;n<this._objects.length;n++)t.push(`	`,this._objects[n].toClipPathSVG(e));return this._createBaseClipPathSVGMarkup(t,{reviver:e})}static fromObject({type:e,objects:t=[],layoutManager:n,...r},i){return Promise.all([ot(t,i),st(r,i)]).then(([e,t])=>{let i=new this(e,{...r,...t,layoutManager:new xa});return i.layoutManager=n?new(K.getClass(n.type))(new(K.getClass(n.strategy))):new ba,i.layoutManager.subscribeTargets({type:ma,target:i,targets:i.getObjects()}),i.setCoords(),i})}};x(Sa,`type`,`Group`),x(Sa,`ownDefaults`,{strokeWidth:0,subTargetCheck:!1,interactive:!1}),K.setClass(Sa);var Ca=(e,t)=>e&&e.length===1?e[0]:new Sa(e,t),wa=(e,t)=>Math.min(t.width/e.width,t.height/e.height),Ta=(e,t)=>Math.max(t.width/e.width,t.height/e.height),Ea=`\\s*,?\\s*`,Da=`${Ea}(${Hn})`,Oa=`${Da}${Da}${Da}${Ea}([01])${Ea}([01])${Da}${Da}`,ka={m:`l`,M:`L`},Aa=(e,t,n,r,i,a,o,s,c,l,u)=>{let d=we(e),f=Te(e),p=we(t),m=Te(t),h=n*i*p-r*a*m+o,g=r*i*p+n*a*m+s;return[`C`,l+c*(-n*i*f-r*a*d),u+c*(-r*i*f+n*a*d),h+c*(n*i*m+r*a*p),g+c*(r*i*m-n*a*p),h,g]},ja=(e,t,n,r)=>{let i=Math.atan2(t,e),a=Math.atan2(r,n);return a>=i?a-i:2*Math.PI-(i-a)};function Ma(e,t,n,r,i,a,o,s){let c;if(C.cachesBoundsOfCurve&&(c=[...arguments].join(),F.boundsOfCurveCache[c]))return F.boundsOfCurveCache[c];let l=Math.sqrt,u=Math.abs,d=[],f=[[0,0],[0,0]],p=6*e-12*n+6*i,m=-3*e+9*n-9*i+3*o,h=3*n-3*e;for(let e=0;e<2;++e){if(e>0&&(p=6*t-12*r+6*a,m=-3*t+9*r-9*a+3*s,h=3*r-3*t),u(m)<1e-12){if(u(p)<1e-12)continue;let e=-h/p;0<e&&e<1&&d.push(e);continue}let n=p*p-4*h*m;if(n<0)continue;let i=l(n),o=(-p+i)/(2*m);0<o&&o<1&&d.push(o);let c=(-p-i)/(2*m);0<c&&c<1&&d.push(c)}let g=d.length,_=g,v=Ia(e,t,n,r,i,a,o,s);for(;g--;){let{x:e,y:t}=v(d[g]);f[0][g]=e,f[1][g]=t}f[0][_]=e,f[1][_]=t,f[0][_+1]=o,f[1][_+1]=s;let y=[new q(Math.min(...f[0]),Math.min(...f[1])),new q(Math.max(...f[0]),Math.max(...f[1]))];return C.cachesBoundsOfCurve&&(F.boundsOfCurveCache[c]=y),y}var Na=(e,t,[n,r,i,a,o,s,c,l])=>{let u=((e,t,n,r,i,a,o)=>{if(n===0||r===0)return[];let s=0,c=0,l=0,u=Math.PI,d=o*te,f=Te(d),p=we(d),m=.5*(-p*e-f*t),h=.5*(-p*t+f*e),g=n**2,_=r**2,v=h**2,y=m**2,b=g*_-g*v-_*y,x=Math.abs(n),S=Math.abs(r);if(b<0){let e=Math.sqrt(1-b/(g*_));x*=e,S*=e}else l=(i===a?-1:1)*Math.sqrt(b/(g*v+_*y));let C=l*x*h/S,w=-l*S*m/x,T=p*C-f*w+.5*e,E=f*C+p*w+.5*t,D=ja(1,0,(m-C)/x,(h-w)/S),O=ja((m-C)/x,(h-w)/S,(-m-C)/x,(-h-w)/S);a===0&&O>0?O-=2*u:a===1&&O<0&&(O+=2*u);let k=Math.ceil(Math.abs(O/u*2)),A=[],j=O/k,M=8/3*Math.sin(j/4)*Math.sin(j/4)/Math.sin(j/2),N=D+j;for(let e=0;e<k;e++)A[e]=Aa(D,N,p,f,x,S,T,E,M,s,c),s=A[e][5],c=A[e][6],D=N,N+=j;return A})(c-e,l-t,r,i,o,s,a);for(let n=0,r=u.length;n<r;n++)u[n][1]+=e,u[n][2]+=t,u[n][3]+=e,u[n][4]+=t,u[n][5]+=e,u[n][6]+=t;return u},Pa=e=>{let t=0,n=0,r=0,i=0,a=[],o,s=0,c=0;for(let l of e){let e=[...l],u;switch(e[0]){case`l`:e[1]+=t,e[2]+=n;case`L`:t=e[1],n=e[2],u=[`L`,t,n];break;case`h`:e[1]+=t;case`H`:t=e[1],u=[`L`,t,n];break;case`v`:e[1]+=n;case`V`:n=e[1],u=[`L`,t,n];break;case`m`:e[1]+=t,e[2]+=n;case`M`:t=e[1],n=e[2],r=e[1],i=e[2],u=[`M`,t,n];break;case`c`:e[1]+=t,e[2]+=n,e[3]+=t,e[4]+=n,e[5]+=t,e[6]+=n;case`C`:s=e[3],c=e[4],t=e[5],n=e[6],u=[`C`,e[1],e[2],s,c,t,n];break;case`s`:e[1]+=t,e[2]+=n,e[3]+=t,e[4]+=n;case`S`:o===`C`?(s=2*t-s,c=2*n-c):(s=t,c=n),t=e[3],n=e[4],u=[`C`,s,c,e[1],e[2],t,n],s=u[3],c=u[4];break;case`q`:e[1]+=t,e[2]+=n,e[3]+=t,e[4]+=n;case`Q`:s=e[1],c=e[2],t=e[3],n=e[4],u=[`Q`,s,c,t,n];break;case`t`:e[1]+=t,e[2]+=n;case`T`:o===`Q`?(s=2*t-s,c=2*n-c):(s=t,c=n),t=e[1],n=e[2],u=[`Q`,s,c,t,n];break;case`a`:e[6]+=t,e[7]+=n;case`A`:Na(t,n,e).forEach(e=>a.push(e)),t=e[6],n=e[7];break;case`z`:case`Z`:t=r,n=i,u=[`Z`]}u?(a.push(u),o=u[0]):o=``}return a},Fa=(e,t,n,r)=>Math.sqrt((n-e)**2+(r-t)**2),Ia=(e,t,n,r,i,a,o,s)=>c=>{let l=c**3,u=(e=>3*e**2*(1-e))(c),d=(e=>3*e*(1-e)**2)(c),f=(e=>(1-e)**3)(c);return new q(o*l+i*u+n*d+e*f,s*l+a*u+r*d+t*f)},La=e=>e**2,Ra=e=>2*e*(1-e),za=e=>(1-e)**2,Ba=(e,t,n,r,i,a,o,s)=>c=>{let l=La(c),u=Ra(c),d=za(c),f=3*(d*(n-e)+u*(i-n)+l*(o-i)),p=3*(d*(r-t)+u*(a-r)+l*(s-a));return Math.atan2(p,f)},Va=(e,t,n,r,i,a)=>o=>{let s=La(o),c=Ra(o),l=za(o);return new q(i*s+n*c+e*l,a*s+r*c+t*l)},Ha=(e,t,n,r,i,a)=>o=>{let s=1-o,c=2*(s*(n-e)+o*(i-n)),l=2*(s*(r-t)+o*(a-r));return Math.atan2(l,c)},Ua=(e,t,n)=>{let r=new q(t,n),i=0;for(let t=1;t<=100;t+=1){let n=e(t/100);i+=Fa(r.x,r.y,n.x,n.y),r=n}return i},Wa=(e,t)=>{let n,r=0,i=0,a={x:e.x,y:e.y},o={...a},s=.01,c=0,l=e.iterator,u=e.angleFinder;for(;i<t&&s>1e-4;)o=l(r),c=r,n=Fa(a.x,a.y,o.x,o.y),n+i>t?(r-=s,s/=2):(a=o,r+=s,i+=n);return{...o,angle:u(c)}},Ga=e=>{let t,n,r=0,i=0,a=0,o=0,s=0,c=[];for(let l of e){let e={x:i,y:a,command:l[0],length:0};switch(l[0]){case`M`:n=e,n.x=o=i=l[1],n.y=s=a=l[2];break;case`L`:n=e,n.length=Fa(i,a,l[1],l[2]),i=l[1],a=l[2];break;case`C`:t=Ia(i,a,l[1],l[2],l[3],l[4],l[5],l[6]),n=e,n.iterator=t,n.angleFinder=Ba(i,a,l[1],l[2],l[3],l[4],l[5],l[6]),n.length=Ua(t,i,a),i=l[5],a=l[6];break;case`Q`:t=Va(i,a,l[1],l[2],l[3],l[4]),n=e,n.iterator=t,n.angleFinder=Ha(i,a,l[1],l[2],l[3],l[4]),n.length=Ua(t,i,a),i=l[3],a=l[4];break;case`Z`:n=e,n.destX=o,n.destY=s,n.length=Fa(i,a,o,s),i=o,a=s}r+=n.length,c.push(n)}return c.push({length:r,x:i,y:a}),c},Ka=(e,t,n=Ga(e))=>{let r=0;for(;t-n[r].length>0&&r<n.length-2;)t-=n[r].length,r++;let i=n[r],a=t/i.length,o=e[r];switch(i.command){case`M`:return{x:i.x,y:i.y,angle:0};case`Z`:return{...new q(i.x,i.y).lerp(new q(i.destX,i.destY),a),angle:Math.atan2(i.destY-i.y,i.destX-i.x)};case`L`:return{...new q(i.x,i.y).lerp(new q(o[1],o[2]),a),angle:Math.atan2(o[2]-i.y,o[1]-i.x)};case`C`:case`Q`:return Wa(i,t)}},qa=RegExp(`[mzlhvcsqta][^mzlhvcsqta]*`,`gi`),Ja=new RegExp(Oa,`g`),Ya=new RegExp(Hn,`gi`),Xa={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},Za=e=>{let t=[],n=e.match(qa)??[];for(let e of n){let n=e[0];if(n===`z`||n===`Z`){t.push([n]);continue}let r=Xa[n.toLowerCase()],i=[];if(n===`a`||n===`A`){let t;for(Ja.lastIndex=0;t=Ja.exec(e);)i.push(...t.slice(1))}else i=e.match(Ya)||[];for(let e=0;e<i.length;e+=r){let a=Array(r),o=ka[n];a[0]=e>0&&o?o:n;for(let t=0;t<r;t++)a[t+1]=parseFloat(i[e+t]);t.push(a)}}return t},Qa=(e,t=0)=>{let n=new q(e[0]),r=new q(e[1]),i=1,a=0,o=[],s=e.length,c=s>2,l;for(c&&(i=e[2].x<r.x?-1:e[2].x===r.x?0:1,a=e[2].y<r.y?-1:e[2].y===r.y?0:1),o.push([`M`,n.x-i*t,n.y-a*t]),l=1;l<s;l++){if(!n.eq(r)){let e=n.midPointFrom(r);o.push([`Q`,n.x,n.y,e.x,e.y])}n=e[l],l+1<e.length&&(r=e[l+1])}return c&&(i=n.x>e[l-2].x?1:n.x===e[l-2].x?0:-1,a=n.y>e[l-2].y?1:n.y===e[l-2].y?0:-1),o.push([`L`,n.x+i*t,n.y+a*t]),o},$a=(e,t,n)=>(n&&(t=Ge(t,[1,0,0,1,-n.x,-n.y])),e.map(e=>{let n=[...e];for(let r=1;r<e.length-1;r+=2){let{x:i,y:a}=Ue({x:e[r],y:e[r+1]},t);n[r]=i,n[r+1]=a}return n})),eo=(e,t)=>{let n=2*Math.PI/e,r=-R;e%2==0&&(r+=n/2);let i=Array(e+1);for(let a=0;a<e;a++){let e=a*n+r,{x:o,y:s}=new q(we(e),Te(e)).scalarMultiply(t);i[a]=[a===0?`M`:`L`,o,s]}return i[e]=[`Z`],i},to=(e,t)=>e.map(e=>e.map((e,n)=>n===0||t===void 0?e:ut(e,t)).join(` `)).join(` `),no=(e,t)=>{let n=e,r=t;n.inverted&&!r.inverted&&(n=t,r=e),Kt(r,r.group?.calcTransformMatrix(),n.calcTransformMatrix());let i=n.inverted&&r.inverted;return i&&(n.inverted=r.inverted=!1),new Sa([n],{clipPath:r,inverted:i})},ro=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,io=(e,t)=>{let n=e._findCenterFromElement();e.transformMatrix&&((e=>{if(e.transformMatrix){let{scaleX:t,scaleY:n,angle:r,skewX:i}=Xe(e.transformMatrix);e.flipX=!1,e.flipY=!1,e.set(H,t),e.set(ge,n),e.angle=r,e.skewX=i,e.skewY=0}})(e),n=n.transform(e.transformMatrix)),delete e.transformMatrix,t&&(e.scaleX*=t.scaleX,e.scaleY*=t.scaleY,e.cropX=t.cropX,e.cropY=t.cropY,n.x+=t.offsetLeft,n.y+=t.offsetTop,e.width=t.width,e.height=t.height),e.setPositionByOrigin(n,V,V)};v({addTransformToObject:()=>Rt,animate:()=>Ur,animateColor:()=>Wr,applyTransformToObject:()=>zt,calcAngleBetweenVectors:()=>en,calcDimensionsMatrix:()=>rt,calcPlaneChangeMatrix:()=>Ut,calcVectorRotation:()=>tn,cancelAnimFrame:()=>je,capValue:()=>Qn,composeMatrix:()=>it,copyCanvasElement:()=>Ie,cos:()=>we,createCanvasElement:()=>Pe,createImage:()=>Fe,createRotateMatrix:()=>Qe,createScaleMatrix:()=>$e,createSkewXMatrix:()=>tt,createSkewYMatrix:()=>nt,createTranslateMatrix:()=>Ze,createVector:()=>Qt,crossProduct:()=>an,degreesToRadians:()=>Be,dotProduct:()=>on,ease:()=>nr,enlivenObjectEnlivables:()=>st,enlivenObjects:()=>ot,findScaleToCover:()=>Ta,findScaleToFit:()=>wa,getBoundsOfCurve:()=>Ma,getOrthonormalVector:()=>rn,getPathSegmentsInfo:()=>Ga,getPointOnPath:()=>Ka,getPointer:()=>Nt,getRandomInt:()=>ro,getRegularPolygonPath:()=>eo,getSmoothPathFromPoints:()=>Qa,getSvgAttributes:()=>Dn,getUnitVector:()=>nn,groupSVGElements:()=>Ca,hasStyleChanged:()=>zi,invertTransform:()=>We,isBetweenVectors:()=>sn,isIdentityMatrix:()=>He,isTouchEvent:()=>Pt,isTransparent:()=>Mi,joinPath:()=>to,loadImage:()=>at,magnitude:()=>$t,makeBoundingBoxFromPoints:()=>It,makePathSimpler:()=>Pa,matrixToSVG:()=>dt,mergeClipPaths:()=>no,multiplyTransformMatrices:()=>Ge,multiplyTransformMatrixArray:()=>Ke,parsePath:()=>Za,parsePreserveAspectRatioAttribute:()=>kn,parseUnit:()=>On,pick:()=>ct,projectStrokeOnPoints:()=>Li,qrDecompose:()=>Xe,radiansToDegrees:()=>Ve,removeFromArray:()=>Ce,removeTransformFromObject:()=>Lt,removeTransformMatrixForSvgParsing:()=>io,requestAnimFrame:()=>Ae,resetObjectTransform:()=>Bt,rotateVector:()=>Zt,saveObjectTransform:()=>Vt,sendObjectToPlane:()=>Kt,sendPointToPlane:()=>Wt,sendVectorToPlane:()=>Gt,sin:()=>Te,sizeAfterTransform:()=>Ht,string:()=>wt,stylesFromArray:()=>Vi,stylesToArray:()=>Bi,toBlob:()=>ze,toDataURL:()=>Re,toFixed:()=>ut,transformPath:()=>$a,transformPoint:()=>Ue});function ao(e,t){let n=e.style;n&&Object.entries(t).forEach(([e,t])=>n.setProperty(e,t))}var oo=class extends St{constructor(e,{allowTouchScrolling:t=!1,containerClass:n=``}={}){super(e),x(this,`upper`,void 0),x(this,`container`,void 0);let{el:r}=this.lower,i=this.createUpperCanvas();this.upper={el:i,ctx:i.getContext(`2d`)},this.applyCanvasStyle(r,{allowTouchScrolling:t}),this.applyCanvasStyle(i,{allowTouchScrolling:t,styles:{position:`absolute`,left:`0`,top:`0`}});let a=this.createContainerElement();a.classList.add(n),r.parentNode&&r.parentNode.replaceChild(a,r),a.append(r,i),this.container=a}createUpperCanvas(){let{el:e}=this.lower,t=Pe();return t.className=e.className,t.classList.remove(`lower-canvas`),t.classList.add(`upper-canvas`),t.setAttribute(`data-fabric`,`top`),t.style.cssText=e.style.cssText,t.setAttribute(`draggable`,`true`),t}createContainerElement(){let e=M().createElement(`div`);return e.setAttribute(`data-fabric`,`wrapper`),ao(e,{position:`relative`}),xt(e),e}applyCanvasStyle(e,t){let{styles:n,allowTouchScrolling:r}=t;ao(e,{...n,"touch-action":r?`manipulation`:ae}),xt(e)}setDimensions(e,t){super.setDimensions(e,t);let{el:n,ctx:r}=this.upper;yt(n,r,e,t)}setCSSDimensions(e){super.setCSSDimensions(e),bt(this.upper.el,e),bt(this.container,e)}cleanupDOM(e){let t=this.container,{el:n}=this.lower,{el:r}=this.upper;super.cleanupDOM(e),t.removeChild(r),t.removeChild(n),t.parentNode&&t.parentNode.replaceChild(n,t)}dispose(){super.dispose(),j().dispose(this.upper.el),delete this.upper,delete this.container}},so=(e,t,n,r)=>{let{target:i,offsetX:a,offsetY:o}=t,s=n-a,c=r-o,l=!dn(i,`lockMovementX`)&&i.left!==s,u=!dn(i,`lockMovementY`)&&i.top!==c;return l&&i.set(`left`,s),u&&i.set(`top`,c),(l||u)&&Jr(se,fn(e,t,n,r)),l||u},co=pe,lo=e=>function(t,n,r){let{points:i,pathOffset:a}=r;return new q(i[e]).subtract(a).transform(Ge(r.getViewportTransform(),r.calcTransformMatrix()))},uo=(e,t,n,r)=>{let{target:i,pointIndex:a}=t,o=i,s=Wt(new q(n,r),void 0,o.calcOwnMatrix());return o.points[a]=s.add(o.pathOffset),o.setDimensions(),o.set(`dirty`,!0),!0},fo=(e,t)=>function(n,r,i,a){let o=r.target,s=new q(o.points[(e>0?e:o.points.length)-1]),c=s.subtract(o.pathOffset).transform(o.calcOwnMatrix()),l=t(n,{...r,pointIndex:e},i,a),u=s.subtract(o.pathOffset).transform(o.calcOwnMatrix()).subtract(c);return o.left-=u.x,o.top-=u.y,l},po=e=>Yr(co,fo(e,uo));function mo(e,t={}){let n={};for(let r=0;r<(typeof e==`number`?e:e.points.length);r++)n[`p${r}`]=new ii({actionName:co,positionHandler:lo(r),actionHandler:po(r),...t});return n}var ho=(e,t,n)=>{let{path:r,pathOffset:i}=e,a=r[t];return new q(a[n]-i.x,a[n+1]-i.y).transform(Ge(e.getViewportTransform(),e.calcTransformMatrix()))};function go(e,t,n){let{commandIndex:r,pointIndex:i}=this;return ho(n,r,i)}function _o(e,t,n,r){let{target:i}=t,{commandIndex:a,pointIndex:o}=this,s=((e,t,n,r,i)=>{let{path:a,pathOffset:o}=e,s=a[(r>0?r:a.length)-1],c=new q(s[i],s[i+1]),l=c.subtract(o).transform(e.calcOwnMatrix()),u=Wt(new q(t,n),void 0,e.calcOwnMatrix());a[r][i]=u.x+o.x,a[r][i+1]=u.y+o.y,e.setDimensions();let d=c.subtract(e.pathOffset).transform(e.calcOwnMatrix()).subtract(l);return e.left-=d.x,e.top-=d.y,e.set(`dirty`,!0),!0})(i,n,r,a,o);return s&&Jr(this.actionName,{...fn(e,t,n,r),commandIndex:a,pointIndex:o}),s}var vo=class extends ii{constructor(e){super(e)}render(e,t,n,r,i){let a={...r,cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill};super.render(e,t,n,a,i)}},yo=class extends vo{constructor(e){super(e)}render(e,t,n,r,i){let{path:a}=i,{commandIndex:o,pointIndex:s,connectToCommandIndex:c,connectToPointIndex:l}=this;e.save(),e.strokeStyle=this.controlStroke,this.connectionDashArray&&e.setLineDash(this.connectionDashArray);let[u]=a[o],d=ho(i,c,l);if(u===`Q`){let r=ho(i,o,s+2);e.moveTo(r.x,r.y),e.lineTo(t,n)}else e.moveTo(t,n);e.lineTo(d.x,d.y),e.stroke(),e.restore(),super.render(e,t,n,r,i)}},bo=(e,t,n,r,i,a)=>new(n?yo:vo)({commandIndex:e,pointIndex:t,actionName:`modifyPath`,positionHandler:go,actionHandler:_o,connectToCommandIndex:i,connectToPointIndex:a,...r,...n?r.controlPointStyle:r.pointStyle});function xo(e,t={}){let n={},r=`M`;return e.path.forEach((e,i)=>{let a=e[0];switch(a!==`Z`&&(n[`c_${i}_${a}`]=bo(i,e.length-2,!1,t)),a){case`C`:n[`c_${i}_C_CP_1`]=bo(i,1,!0,t,i-1,(e=>e===`C`?5:e===`Q`?3:1)(r)),n[`c_${i}_C_CP_2`]=bo(i,3,!0,t,i,5);break;case`Q`:n[`c_${i}_Q_CP_1`]=bo(i,1,!0,t,i,3)}r=a}),n}v({changeHeight:()=>ti,changeObjectHeight:()=>$r,changeObjectWidth:()=>Qr,changeWidth:()=>ei,createObjectDefaultControls:()=>Ei,createPathControls:()=>xo,createPolyActionHandler:()=>po,createPolyControls:()=>mo,createPolyPositionHandler:()=>lo,createResizeControls:()=>Di,createTextboxDefaultControls:()=>Oi,dragHandler:()=>so,factoryPolyActionHandler:()=>fo,getLocalPoint:()=>mn,polyActionHandler:()=>uo,renderCircleControl:()=>ni,renderSquareControl:()=>ri,rotationStyleHandler:()=>ai,rotationWithSnapping:()=>oi,scaleCursorStyleHandler:()=>ui,scaleOrSkewActionName:()=>Si,scaleSkewCursorStyleHandler:()=>Ci,scalingEqually:()=>fi,scalingX:()=>pi,scalingXOrSkewingY:()=>wi,scalingY:()=>mi,scalingYOrSkewingX:()=>Ti,skewCursorStyleHandler:()=>_i,skewHandlerX:()=>yi,skewHandlerY:()=>bi,wrapWithFireEvent:()=>Yr,wrapWithFixedAnchor:()=>Xr});var So=class e extends jt{constructor(...e){super(...e),x(this,`_hoveredTargets`,[]),x(this,`_currentTransform`,null),x(this,`_groupSelector`,null),x(this,`contextTopDirty`,!1)}static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}get upperCanvasEl(){return this.elements.upper?.el}get contextTop(){return this.elements.upper?.ctx}get wrapperEl(){return this.elements.container}initElements(e){this.elements=new oo(e,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(e){this._objectsToRender=void 0,super._onObjectAdded(e)}_onObjectRemoved(e){this._objectsToRender=void 0,e===this._activeObject&&(this.fire(`before:selection:cleared`,{deselected:[e]}),this._discardActiveObject(),this.fire(`selection:cleared`,{deselected:[e]}),e.fire(`deselected`,{target:e})),e===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(e)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let e=this._activeObject;return!this.preserveObjectStacking&&e?this._objects.filter(t=>!t.group&&t!==e).concat(e):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&=(this.renderTopLayer(this.contextTop),!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(e){e.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(e),this.contextTopDirty=!0),e.restore()}renderTop(){let e=this.contextTop;this.clearContext(e),this.renderTopLayer(e),this.fire(`after:render`,{ctx:e})}setTargetFindTolerance(e){e=Math.round(e),this.targetFindTolerance=e;let t=this.getRetinaScaling(),n=Math.ceil((2*e+1)*t);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(t,t)}isTargetTransparent(e,t,n){let r=this.targetFindTolerance,i=this.pixelFindContext;this.clearContext(i),i.save(),i.translate(-t+r,-n+r),i.transform(...this.viewportTransform);let a=e.selectionBackgroundColor;e.selectionBackgroundColor=``,e.render(i),e.selectionBackgroundColor=a,i.restore();let o=Math.round(r*this.getRetinaScaling());return Mi(i,o,o,o)}_isSelectionKeyPressed(e){let t=this.selectionKey;return!!t&&(Array.isArray(t)?!!t.find(t=>!!t&&!0===e[t]):e[t])}_shouldClearSelection(e,t){let n=this.getActiveObjects(),r=this._activeObject;return!!(!t||t&&r&&n.length>1&&n.indexOf(t)===-1&&r!==t&&!this._isSelectionKeyPressed(e)||t&&!t.evented||t&&!t.selectable&&r&&r!==t)}_shouldCenterTransform(e,t,n){if(!e)return;let r;return t===`scale`||t===`scaleX`||t===`scaleY`||t===`resizing`?r=this.centeredScaling||e.centeredScaling:t===`rotate`&&(r=this.centeredRotation||e.centeredRotation),r?!n:n}_getOriginFromCorner(e,t){let n=t?e.controls[t].getTransformAnchorPoint():{x:e.originX,y:e.originY};return t?([`ml`,`tl`,`bl`].includes(t)?n.x=ie:[`mr`,`tr`,`br`].includes(t)&&(n.x=ne),[`tl`,`mt`,`tr`].includes(t)?n.y=re:[`bl`,`mb`,`br`].includes(t)&&(n.y=`top`),n):n}_setupCurrentTransform(e,t,n){let r=t.group?Wt(this.getScenePoint(e),void 0,t.group.calcTransformMatrix()):this.getScenePoint(e),{key:i=``,control:a}=t.getActiveControl()||{},o=n&&a?a.getActionHandler(e,t,a)?.bind(a):so,s=((e,t,n,r)=>{if(!t||!e)return`drag`;let i=r.controls[t];return i.getActionName(n,i,r)})(n,i,e,t),c=e[this.centeredKey],l=this._shouldCenterTransform(t,s,c)?{x:V,y:V}:this._getOriginFromCorner(t,i),{scaleX:u,scaleY:d,skewX:f,skewY:p,left:m,top:h,angle:g,width:_,height:v,cropX:y,cropY:b}=t,x={target:t,action:s,actionHandler:o,actionPerformed:!1,corner:i,scaleX:u,scaleY:d,skewX:f,skewY:p,offsetX:r.x-m,offsetY:r.y-h,originX:l.x,originY:l.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:Be(g),width:_,height:v,shiftKey:e.shiftKey,altKey:c,original:{...Vt(t),originX:l.x,originY:l.y,cropX:y,cropY:b}};this._currentTransform=x,this.fire(`before:transform`,{e,transform:x})}setCursor(e){this.upperCanvasEl.style.cursor=e}_drawSelection(e){let{x:t,y:n,deltaX:r,deltaY:i}=this._groupSelector,a=new q(t,n).transform(this.viewportTransform),o=new q(t+r,n+i).transform(this.viewportTransform),s=this.selectionLineWidth/2,c=Math.min(a.x,o.x),l=Math.min(a.y,o.y),u=Math.max(a.x,o.x),d=Math.max(a.y,o.y);this.selectionColor&&(e.fillStyle=this.selectionColor,e.fillRect(c,l,u-c,d-l)),this.selectionLineWidth&&this.selectionBorderColor&&(e.lineWidth=this.selectionLineWidth,e.strokeStyle=this.selectionBorderColor,c+=s,l+=s,u-=s,d-=s,ji.prototype._setLineDash.call(this,e,this.selectionDashArray),e.strokeRect(c,l,u-c,d-l))}findTarget(e){if(this._targetInfo)return this._targetInfo;if(this.skipTargetFind)return{subTargets:[],currentSubTargets:[]};let t=this.getScenePoint(e),n=this._activeObject,r=this.getActiveObjects(),i=this.searchPossibleTargets(this._objects,t),{subTargets:a,container:o,target:s}=i,c={...i,currentSubTargets:a,currentContainer:o,currentTarget:s};if(!n)return c;let l={...this.searchPossibleTargets([n],t),currentSubTargets:a,currentContainer:o,currentTarget:s};return n.findControl(this.getViewportPoint(e),Pt(e))?{...l,target:n}:l.target&&(r.length>1||!this.preserveObjectStacking||this.preserveObjectStacking&&e[this.altSelectionKey])?l:c}_pointIsInObjectSelectionArea(e,t){let n=e.getCoords(),r=this.getZoom(),i=e.padding/r;if(i){let[e,t,r,a]=n,o=Math.atan2(t.y-e.y,t.x-e.x),s=we(o)*i,c=Te(o)*i,l=s+c,u=s-c;n=[new q(e.x-u,e.y-l),new q(t.x+l,t.y-u),new q(r.x+u,r.y+l),new q(a.x-l,a.y+u)]}return Gr.isPointInPolygon(t,n)}_checkTarget(e,t){if(e&&e.visible&&e.evented&&this._pointIsInObjectSelectionArea(e,t)){if(!this.perPixelTargetFind&&!e.perPixelTargetFind||e.isEditing)return!0;{let n=t.transform(this.viewportTransform);if(!this.isTargetTransparent(e,n.x,n.y))return!0}}return!1}_searchPossibleTargets(e,t,n){let r=e.length;for(;r--;){let i=e[r];if(this._checkTarget(i,t)){if(De(i)&&i.subTargetCheck){let{target:e}=this._searchPossibleTargets(i._objects,t,n);e&&n.push(e)}return{target:i,subTargets:n}}}return{subTargets:[]}}searchPossibleTargets(e,t){let n=this._searchPossibleTargets(e,t,[]);n.container=n.target;let{container:r,subTargets:i}=n;if(r&&De(r)&&r.interactive&&i[0]){for(let e=i.length-1;e>0;e--){let t=i[e];if(!De(t)||!t.interactive)return n.target=t,n}return n.target=i[0],n}return n}getViewportPoint(e){return this._viewportPoint?this._viewportPoint:this._getPointerImpl(e,!0)}getScenePoint(e){return this._scenePoint?this._scenePoint:this._getPointerImpl(e)}_getPointerImpl(e,t=!1){let n=this.upperCanvasEl,r=n.getBoundingClientRect(),i=Nt(e),a=r.width||0,o=r.height||0;a&&o||(`top`in r&&`bottom`in r&&(o=Math.abs(r.top-r.bottom)),`right`in r&&`left`in r&&(a=Math.abs(r.right-r.left))),this.calcOffset(),i.x-=this._offset.left,i.y-=this._offset.top,t||(i=Wt(i,void 0,this.viewportTransform));let s=this.getRetinaScaling();s!==1&&(i.x/=s,i.y/=s);let c=a===0||o===0?new q(1,1):new q(n.width/a,n.height/o);return i.multiply(c)}_setDimensionsImpl(e,t){this._resetTransformEventData(),super._setDimensionsImpl(e,t),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=Pe(),this.pixelFindContext=this.pixelFindCanvasEl.getContext(`2d`,{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let e=this._activeObject;return ht(e)?e.getObjects():e?[e]:[]}_fireSelectionEvents(e,t){let n=!1,r=!1,i=this.getActiveObjects(),a=[],o=[];e.forEach(e=>{i.includes(e)||(n=!0,e.fire(`deselected`,{e:t,target:e}),o.push(e))}),i.forEach(r=>{e.includes(r)||(n=!0,r.fire(`selected`,{e:t,target:r}),a.push(r))}),e.length>0&&i.length>0?(r=!0,n&&this.fire(`selection:updated`,{e:t,selected:a,deselected:o})):i.length>0?(r=!0,this.fire(`selection:created`,{e:t,selected:a})):e.length>0&&(r=!0,this.fire(`selection:cleared`,{e:t,deselected:o})),r&&(this._objectsToRender=void 0)}setActiveObject(e,t){let n=this.getActiveObjects(),r=this._setActiveObject(e,t);return this._fireSelectionEvents(n,t),r}_setActiveObject(e,t){let n=this._activeObject;return n!==e&&!(!this._discardActiveObject(t,e)&&this._activeObject)&&!e.onSelect({e:t})&&(this._activeObject=e,ht(e)&&n!==e&&e.set(`canvas`,this),e.setCoords(),!0)}_discardActiveObject(e,t){let n=this._activeObject;return!!n&&!n.onDeselect({e,object:t})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(e),ht(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(e){let t=this.getActiveObjects(),n=this.getActiveObject();t.length&&this.fire(`before:selection:cleared`,{e,deselected:[n]});let r=this._discardActiveObject(e);return this._fireSelectionEvents(t,e),r}endCurrentTransform(e){let t=this._currentTransform;this._finalizeCurrentTransform(e),t&&t.target&&(t.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(e){let t=this._currentTransform,n=t.target,r={e,target:n,transform:t,action:t.action};n._scaling&&=!1,n.setCoords(),t.actionPerformed&&(this.fire(`object:modified`,r),n.fire(W,r))}setViewportTransform(e){super.setViewportTransform(e);let t=this._activeObject;t&&t.setCoords()}destroy(){let e=this._activeObject;ht(e)&&(e.removeAll(),e.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(e){let t=this._activeObject;t&&t._renderControls(e)}_toObject(e,t,n){let r=this._realizeGroupTransformOnObject(e),i=super._toObject(e,t,n);return e.set(r),i}_realizeGroupTransformOnObject(e){let{group:t}=e;if(t&&ht(t)&&this._activeObject===t){let n=ct(e,[`angle`,`flipX`,`flipY`,ne,H,ge,_e,ve,`top`]);return Rt(e,t.calcOwnMatrix()),n}return{}}_setSVGObject(e,t,n){let r=this._realizeGroupTransformOnObject(t);super._setSVGObject(e,t,n),t.set(r)}};x(So,`ownDefaults`,{uniformScaling:!0,uniScaleKey:`shiftKey`,centeredScaling:!1,centeredRotation:!1,centeredKey:`altKey`,altActionKey:`shiftKey`,selection:!0,selectionKey:`shiftKey`,selectionColor:`rgba(100, 100, 255, 0.3)`,selectionDashArray:[],selectionBorderColor:`rgba(255, 255, 255, 0.3)`,selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:`move`,moveCursor:`move`,defaultCursor:`default`,freeDrawingCursor:`crosshair`,notAllowedCursor:`not-allowed`,perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!0,fireRightClick:!0,fireMiddleClick:!0,enablePointerEvents:!1,containerClass:`canvas-container`,preserveObjectStacking:!0});var Co=class{constructor(e){x(this,`targets`,[]),x(this,`__disposer`,void 0);let t=()=>{let{hiddenTextarea:t}=e.getActiveObject()||{};t&&t.focus()},n=e.upperCanvasEl;n.addEventListener(`click`,t),this.__disposer=()=>n.removeEventListener(`click`,t)}exitTextEditing(){this.target=void 0,this.targets.forEach(e=>{e.isEditing&&e.exitEditing()})}add(e){this.targets.push(e)}remove(e){this.unregister(e),Ce(this.targets,e)}register(e){this.target=e}unregister(e){e===this.target&&(this.target=void 0)}onMouseMove(e){var t;(t=this.target)!=null&&t.isEditing&&this.target.updateSelectionOnMouseMove(e)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},wo={passive:!1},To=(e,t)=>({viewportPoint:e.getViewportPoint(t),scenePoint:e.getScenePoint(t)}),Eo=(e,...t)=>e.addEventListener(...t),Do=(e,...t)=>e.removeEventListener(...t),Oo={mouse:{in:`over`,out:`out`,targetIn:`mouseover`,targetOut:`mouseout`,canvasIn:`mouse:over`,canvasOut:`mouse:out`},drag:{in:`enter`,out:`leave`,targetIn:`dragenter`,targetOut:`dragleave`,canvasIn:`drag:enter`,canvasOut:`drag:leave`}},ko=class extends So{constructor(e,t={}){super(e,t),x(this,`_isClick`,void 0),x(this,`textEditingManager`,new Co(this)),[`_onMouseDown`,`_onTouchStart`,`_onMouseMove`,`_onMouseUp`,`_onTouchEnd`,`_onResize`,`_onMouseWheel`,`_onMouseOut`,`_onMouseEnter`,`_onContextMenu`,`_onClick`,`_onDragStart`,`_onDragEnd`,`_onDragProgress`,`_onDragOver`,`_onDragEnter`,`_onDragLeave`,`_onDrop`].forEach(e=>{this[e]=this[e].bind(this)}),this.addOrRemove(Eo)}_getEventPrefix(){return this.enablePointerEvents?`pointer`:`mouse`}addOrRemove(e,t=!1){let n=this.upperCanvasEl,r=this._getEventPrefix();e(vt(n),`resize`,this._onResize),e(n,r+`down`,this._onMouseDown),e(n,`${r}move`,this._onMouseMove,wo),e(n,`${r}out`,this._onMouseOut),e(n,`${r}enter`,this._onMouseEnter),e(n,`wheel`,this._onMouseWheel,{passive:!1}),e(n,`contextmenu`,this._onContextMenu),t||(e(n,`click`,this._onClick),e(n,`dblclick`,this._onClick)),e(n,`dragstart`,this._onDragStart),e(n,`dragend`,this._onDragEnd),e(n,`dragover`,this._onDragOver),e(n,`dragenter`,this._onDragEnter),e(n,`dragleave`,this._onDragLeave),e(n,`drop`,this._onDrop),this.enablePointerEvents||e(n,`touchstart`,this._onTouchStart,wo)}removeListeners(){this.addOrRemove(Do);let e=this._getEventPrefix(),t=_t(this.upperCanvasEl);Do(t,`${e}up`,this._onMouseUp),Do(t,`touchend`,this._onTouchEnd,wo),Do(t,`${e}move`,this._onMouseMove,wo),Do(t,`touchmove`,this._onMouseMove,wo),clearTimeout(this._willAddMouseDown)}_onMouseWheel(e){this._cacheTransformEventData(e),this._handleEvent(e,`wheel`),this._resetTransformEventData()}_onMouseOut(e){let t=this._hoveredTarget,n={e,...To(this,e)};this.fire(`mouse:out`,{...n,target:t}),this._hoveredTarget=void 0,t&&t.fire(`mouseout`,{...n}),this._hoveredTargets.forEach(e=>{this.fire(`mouse:out`,{...n,target:e}),e&&e.fire(`mouseout`,{...n})}),this._hoveredTargets=[]}_onMouseEnter(e){let{target:t}=this.findTarget(e);this._currentTransform||t||(this.fire(`mouse:over`,{e,...To(this,e)}),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(e){this._isClick=!1;let t=this.getActiveObject();if(t&&t.onDragStart(e)){this._dragSource=t;let n={e,target:t};this.fire(`dragstart`,n),t.fire(`dragstart`,n),Eo(this.upperCanvasEl,`drag`,this._onDragProgress);return}Ft(e)}_renderDragEffects(e,t,n){let r=!1,i=this._dropTarget;i&&i!==t&&i!==n&&(i.clearContextTop(),r=!0),t?.clearContextTop(),n!==t&&n?.clearContextTop();let a=this.contextTop;a.save(),a.transform(...this.viewportTransform),t&&(a.save(),t.transform(a),t.renderDragSourceEffect(e),a.restore(),r=!0),n&&(a.save(),n.transform(a),n.renderDropTargetEffect(e),a.restore(),r=!0),a.restore(),r&&(this.contextTopDirty=!0)}_onDragEnd(e){let{currentSubTargets:t}=this.findTarget(e),n=!!e.dataTransfer&&e.dataTransfer.dropEffect!==`none`,r=n?this._activeObject:void 0,i={e,target:this._dragSource,subTargets:t,dragSource:this._dragSource,didDrop:n,dropTarget:r};Do(this.upperCanvasEl,`drag`,this._onDragProgress),this.fire(`dragend`,i),this._dragSource&&this._dragSource.fire(`dragend`,i),delete this._dragSource,this._onMouseUp(e)}_onDragProgress(e){let t={e,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire(`drag`,t),this._dragSource&&this._dragSource.fire(`drag`,t)}_onDragOver(e){let t=`dragover`,{currentContainer:n,currentSubTargets:r}=this.findTarget(e),i=this._dragSource,a={e,target:n,subTargets:r,dragSource:i,canDrop:!1,dropTarget:void 0},o;this.fire(t,a),this._fireEnterLeaveEvents(e,n,a),n&&(n.canDrop(e)&&(o=n),n.fire(t,a));for(let n=0;n<r.length;n++){let i=r[n];i.canDrop(e)&&(o=i),i.fire(t,a)}this._renderDragEffects(e,i,o),this._dropTarget=o}_onDragEnter(e){let{currentContainer:t,currentSubTargets:n}=this.findTarget(e),r={e,target:t,subTargets:n,dragSource:this._dragSource};this.fire(`dragenter`,r),this._fireEnterLeaveEvents(e,t,r)}_onDragLeave(e){let{currentSubTargets:t}=this.findTarget(e),n={e,target:this._draggedoverTarget,subTargets:t,dragSource:this._dragSource};this.fire(`dragleave`,n),this._fireEnterLeaveEvents(e,void 0,n),this._renderDragEffects(e,this._dragSource),this._dropTarget=void 0,this._hoveredTargets=[]}_onDrop(e){let{currentContainer:t,currentSubTargets:n}=this.findTarget(e),r=this._basicEventHandler(`drop:before`,{e,target:t,subTargets:n,dragSource:this._dragSource,...To(this,e)});r.didDrop=!1,r.dropTarget=void 0,this._basicEventHandler(`drop`,r),this.fire(`drop:after`,r)}_onContextMenu(e){let{target:t,subTargets:n}=this.findTarget(e),r=this._basicEventHandler(`contextmenu:before`,{e,target:t,subTargets:n});return this.stopContextMenu&&Ft(e),this._basicEventHandler(`contextmenu`,r),!1}_onClick(e){let t=e.detail;t>3||t<2||(this._cacheTransformEventData(e),t==2&&e.type===`dblclick`&&this._handleEvent(e,`dblclick`),t==3&&this._handleEvent(e,`tripleclick`),this._resetTransformEventData())}fireEventFromPointerEvent(e,t,n,r={}){this._cacheTransformEventData(e);let{target:i,subTargets:a}=this.findTarget(e),o={e,target:i,subTargets:a,...To(this,e),transform:this._currentTransform,...r};this.fire(t,o),i&&i.fire(n,o);for(let e=0;e<a.length;e++)a[e]!==i&&a[e].fire(n,o);this._resetTransformEventData()}getPointerId(e){let t=e.changedTouches;return t?t[0]&&t[0].identifier:this.enablePointerEvents?e.pointerId:-1}_isMainEvent(e){return!0===e.isPrimary||!1!==e.isPrimary&&(e.type===`touchend`&&e.touches.length===0||!e.changedTouches||e.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(e){this._cacheTransformEventData(e);let t=!this.allowTouchScrolling,n=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(e)),this.__onMouseDown(e);let{target:r}=this.findTarget(e);(this.isDrawingMode||n&&r===n)&&(t=!0),t&&e.preventDefault();let i=this.upperCanvasEl,a=this._getEventPrefix(),o=_t(i);Eo(o,`touchend`,this._onTouchEnd,wo),t&&Eo(o,`touchmove`,this._onMouseMove,wo),Do(i,`${a}down`,this._onMouseDown),this._resetTransformEventData()}_onMouseDown(e){this._cacheTransformEventData(e),this.__onMouseDown(e);let t=this.upperCanvasEl,n=this._getEventPrefix();Do(t,`${n}move`,this._onMouseMove,wo);let r=_t(t);Eo(r,`${n}up`,this._onMouseUp),Eo(r,`${n}move`,this._onMouseMove,wo),this._resetTransformEventData()}_onTouchEnd(e){if(e.touches.length>0)return;this._cacheTransformEventData(e),this.__onMouseUp(e),this._resetTransformEventData(),delete this.mainTouchId;let t=this._getEventPrefix(),n=_t(this.upperCanvasEl);Do(n,`touchend`,this._onTouchEnd,wo),Do(n,`touchmove`,this._onMouseMove,wo),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout(()=>{Eo(this.upperCanvasEl,`${t}down`,this._onMouseDown),this._willAddMouseDown=0},400)}_onMouseUp(e){this._cacheTransformEventData(e),this.__onMouseUp(e);let t=this.upperCanvasEl,n=this._getEventPrefix();if(this._isMainEvent(e)){let e=_t(this.upperCanvasEl);Do(e,`${n}up`,this._onMouseUp),Do(e,`${n}move`,this._onMouseMove,wo),Eo(t,`${n}move`,this._onMouseMove,wo)}this._resetTransformEventData()}_onMouseMove(e){this._cacheTransformEventData(e);let t=this.getActiveObject();!this.allowTouchScrolling&&(!t||!t.shouldStartDragging(e))&&e.preventDefault&&e.preventDefault(),this.__onMouseMove(e),this._resetTransformEventData()}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(e){let t=this.getActiveObject();return!!t!=!!e||t&&e&&t!==e}__onMouseUp(e){var t;this._handleEvent(e,`up:before`);let n=this._currentTransform,r=this._isClick,{target:i}=this.findTarget(e),{button:a}=e;if(a)return void((this.fireMiddleClick&&a===1||this.fireRightClick&&a===2)&&this._handleEvent(e,`up`));if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(e);if(!this._isMainEvent(e))return;let o,s,c=!1;if(n&&(this._finalizeCurrentTransform(e),c=n.actionPerformed),!r){let t=i===this._activeObject;this.handleSelection(e),c||=this._shouldRender(i)||!t&&i===this._activeObject}if(i){let{key:t,control:r}=i.findControl(this.getViewportPoint(e),Pt(e))||{};if(s=t,i.selectable&&i!==this._activeObject&&i.activeOn===`up`)this.setActiveObject(i,e),c=!0;else if(r){let t=r.getMouseUpHandler(e,i,r);t&&(o=this.getScenePoint(e),t.call(r,e,n,o.x,o.y))}i.isMoving=!1}if(n&&(n.target!==i||n.corner!==s)){let t=n.target&&n.target.controls[n.corner],r=t&&t.getMouseUpHandler(e,n.target,t);o||=this.getScenePoint(e),r&&r.call(t,e,n,o.x,o.y)}this._setCursorFromEvent(e,i),this._handleEvent(e,`up`),this._groupSelector=null,this._currentTransform=null,i&&(i.__corner=void 0),c?this.requestRenderAll():r||(t=this._activeObject)!=null&&t.isEditing||this.renderTop()}_basicEventHandler(e,t){let{target:n,subTargets:r=[]}=t;this.fire(e,t),n&&n.fire(e,t);for(let i=0;i<r.length;i++)r[i]!==n&&r[i].fire(e,t);return t}_handleEvent(e,t,n){let{target:r,subTargets:i}=this.findTarget(e),a={e,target:r,subTargets:i,...To(this,e),transform:this._currentTransform,...t===`down:before`||t===`down`?n:{}};t!==`up:before`&&t!==`up`||(a.isClick=this._isClick),this.fire(`mouse:${t}`,a),r&&r.fire(`mouse${t}`,a);for(let e=0;e<i.length;e++)i[e]!==r&&i[e].fire(`mouse${t}`,a)}_onMouseDownInDrawingMode(e){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(e),this.requestRenderAll());let t=this.getScenePoint(e);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(t,{e,pointer:t}),this._handleEvent(e,`down`,{alreadySelected:!1})}_onMouseMoveInDrawingMode(e){if(this._isCurrentlyDrawing){let t=this.getScenePoint(e);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(t,{e,pointer:t})}this.setCursor(this.freeDrawingCursor),this._handleEvent(e,`move`)}_onMouseUpInDrawingMode(e){let t=this.getScenePoint(e);this._isCurrentlyDrawing=this.freeDrawingBrush?!!this.freeDrawingBrush.onMouseUp({e,pointer:t}):!1,this._handleEvent(e,`up`)}__onMouseDown(e){this._isClick=!0,this._handleEvent(e,`down:before`);let{target:t}=this.findTarget(e),n=!!t&&t===this._activeObject,{button:r}=e;if(r)return void((this.fireMiddleClick&&r===1||this.fireRightClick&&r===2)&&this._handleEvent(e,`down`,{alreadySelected:n}));if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(e);if(!this._isMainEvent(e)||this._currentTransform)return;let i=this._shouldRender(t),a=!1;if(this.handleMultiSelection(e,t)?(t=this._activeObject,a=!0,i=!0):this._shouldClearSelection(e,t)&&this.discardActiveObject(e),this.selection&&(!t||!t.selectable&&!t.isEditing&&t!==this._activeObject)){let t=this.getScenePoint(e);this._groupSelector={x:t.x,y:t.y,deltaY:0,deltaX:0}}if(n=!!t&&t===this._activeObject,t){t.selectable&&t.activeOn===`down`&&this.setActiveObject(t,e);let r=t.findControl(this.getViewportPoint(e),Pt(e));if(t===this._activeObject&&(r||!a)){this._setupCurrentTransform(e,t,n);let i=r?r.control:void 0,a=this.getScenePoint(e),o=i&&i.getMouseDownHandler(e,t,i);o&&o.call(i,e,this._currentTransform,a.x,a.y)}}i&&(this._objectsToRender=void 0),this._handleEvent(e,`down`,{alreadySelected:n}),i&&this.requestRenderAll()}_resetTransformEventData(){this._targetInfo=this._viewportPoint=this._scenePoint=void 0}_cacheTransformEventData(e){this._resetTransformEventData(),this._viewportPoint=this.getViewportPoint(e),this._scenePoint=Wt(this._viewportPoint,void 0,this.viewportTransform),this._targetInfo=this.findTarget(e),this._currentTransform&&(this._targetInfo.target=this._currentTransform.target)}__onMouseMove(e){if(this._isClick=!1,this._handleEvent(e,`move:before`),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(e);if(!this._isMainEvent(e))return;let t=this._groupSelector;if(t){let n=this.getScenePoint(e);t.deltaX=n.x-t.x,t.deltaY=n.y-t.y,this.renderTop()}else if(this._currentTransform)this._transformObject(e);else{let{target:t}=this.findTarget(e);this._setCursorFromEvent(e,t),this._fireOverOutEvents(e,t)}this.textEditingManager.onMouseMove(e),this._handleEvent(e,`move`)}_fireOverOutEvents(e,t){let{_hoveredTarget:n,_hoveredTargets:r}=this,{subTargets:i,currentTarget:a}=this.findTarget(e),o=Math.max(r.length,i.length);this.fireSyntheticInOutEvents(`mouse`,{e,target:t,oldTarget:n,actualTarget:a,oldActualTarget:this._hoveredActualTarget,fireCanvas:!0});for(let a=0;a<o;a++)i[a]===t||r[a]&&r[a]===n||this.fireSyntheticInOutEvents(`mouse`,{e,target:i[a],oldTarget:r[a]});this._hoveredActualTarget=a,this._hoveredTarget=t,this._hoveredTargets=i}_fireEnterLeaveEvents(e,t,n){let r=this._draggedoverTarget,i=this._hoveredTargets,{subTargets:a}=this.findTarget(e),o=Math.max(i.length,a.length);this.fireSyntheticInOutEvents(`drag`,{...n,target:t,oldTarget:r,fireCanvas:!0});for(let e=0;e<o;e++)this.fireSyntheticInOutEvents(`drag`,{...n,target:a[e],oldTarget:i[e]});this._draggedoverTarget=t}fireSyntheticInOutEvents(e,{target:t,oldTarget:n,actualTarget:r,oldActualTarget:i,fireCanvas:a,e:o,...s}){let{targetIn:c,targetOut:l,canvasIn:u,canvasOut:d}=Oo[e],f=n!==t,p=i!==r,m=t&&f,h=r&&p,g=n&&f,_=i&&p,v={...s,e:o,...To(this,o)},y={...v,target:n,nextTarget:t,actualTarget:i,nextActualTarget:r};(g||_)&&a&&this.fire(d,y),g&&n.fire(l,y),_&&n!==i&&i.fire(l,y);let b={...v,target:t,previousTarget:n,actualTarget:r,previousActualTarget:i};(m||h)&&a&&this.fire(u,b),m&&t.fire(c,b),h&&r!==t&&r.fire(c,b)}_transformObject(e){let t=this.getScenePoint(e),n=this._currentTransform,r=n.target,i=r.group?Wt(t,void 0,r.group.calcTransformMatrix()):t;n.shiftKey=e.shiftKey,n.altKey=!!this.centeredKey&&e[this.centeredKey],this._performTransformAction(e,n,i),n.actionPerformed&&this.requestRenderAll()}_performTransformAction(e,t,n){let{action:r,actionHandler:i,target:a}=t,o=!!i&&i(e,t,n.x,n.y);o&&a.setCoords(),r===`drag`&&o&&(t.target.isMoving=!0,this.setCursor(t.target.moveCursor||this.moveCursor)),t.actionPerformed=t.actionPerformed||o}_setCursorFromEvent(e,t){if(!t)return void this.setCursor(this.defaultCursor);let n=t.hoverCursor||this.hoverCursor,r=ht(this._activeObject)?this._activeObject:null,i=(!r||t.group!==r)&&t.findControl(this.getViewportPoint(e));if(i){let{control:n,coord:r}=i;this.setCursor(n.cursorStyleHandler(e,n,t,r))}else{if(t.subTargetCheck){let{subTargets:t}=this.findTarget(e);t.concat().reverse().forEach(e=>{n=e.hoverCursor||n})}this.setCursor(n)}}handleMultiSelection(e,t){let n=this._activeObject,r=ht(n);if(n&&this._isSelectionKeyPressed(e)&&this.selection&&t&&t.selectable&&(n!==t||r)&&(r||!t.isDescendantOf(n)&&!n.isDescendantOf(t))&&!t.onSelect({e})&&!n.getActiveControl()){if(r){let r=n.getObjects(),i=[];if(t===n){let n=this.getScenePoint(e),a=this.searchPossibleTargets(r,n);if(a.target?(t=a.target,i=a.subTargets):(a=this.searchPossibleTargets(this._objects,n),t=a.target,i=a.subTargets),!t||!t.selectable)return!1}t.group===n?(n.remove(t),this._hoveredTarget=t,this._hoveredTargets=i,n.size()===1&&this._setActiveObject(n.item(0),e)):(n.multiSelectAdd(t),this._hoveredTarget=n,this._hoveredTargets=i),this._fireSelectionEvents(r,e)}else{n.isEditing&&n.exitEditing();let r=new(K.getClass(`ActiveSelection`))([],{canvas:this});r.multiSelectAdd(n,t),this._hoveredTarget=r,this._setActiveObject(r,e),this._fireSelectionEvents([n],e)}return!0}return!1}handleSelection(e){if(!this.selection||!this._groupSelector)return!1;let{x:t,y:n,deltaX:r,deltaY:i}=this._groupSelector,a=new q(t,n),o=a.add(new q(r,i)),s=a.min(o),c=a.max(o).subtract(s),l=this.collectObjects({left:s.x,top:s.y,width:c.x,height:c.y},{includeIntersecting:!this.selectionFullyContained}),u=a.eq(o)?l[0]?[l[0]]:[]:l.length>1?l.filter(t=>!t.onSelect({e})).reverse():l;if(u.length===1)this.setActiveObject(u[0],e);else if(u.length>1){let t=K.getClass(`ActiveSelection`);this.setActiveObject(new t(u,{canvas:this}),e)}return this._groupSelector=null,!0}toCanvasElement(e=1,t){let{upper:n}=this.elements;n.ctx=void 0;let r=super.toCanvasElement(e,t);return n.ctx=n.el.getContext(`2d`),r}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},Ao={x1:0,y1:0,x2:0,y2:0},jo={...Ao,r1:0,r2:0},Mo=(e,t)=>isNaN(e)&&typeof t==`number`?t:e;function No(e){return e&&/%$/.test(e)&&Number.isFinite(parseFloat(e))}function Po(e,t){return Qn(0,Mo(typeof e==`number`?e:typeof e==`string`?parseFloat(e)/(No(e)?100:1):NaN,t),1)}var Fo=/\s*;\s*/,Io=/\s*:\s*/;function Lo(e,t){let n,r,i=e.getAttribute(`style`);if(i){let e=i.split(Fo);e[e.length-1]===``&&e.pop();for(let t=e.length;t--;){let[i,a]=e[t].split(Io).map(e=>e.trim());i===`stop-color`?n=a:i===`stop-opacity`&&(r=a)}}n=n||e.getAttribute(`stop-color`)||`rgb(0,0,0)`,r=Mo(parseFloat(r||e.getAttribute(`stop-opacity`)||``),1);let a=new En(n);return a.setAlpha(a.getAlpha()*r*t),{offset:Po(e.getAttribute(`offset`),0),color:a.toRgba()}}function Ro(e,t){let n=[],r=e.getElementsByTagName(`stop`),i=Po(t,1);for(let e=r.length;e--;)n.push(Lo(r[e],i));return n}function zo(e){return e.nodeName===`linearGradient`||e.nodeName===`LINEARGRADIENT`?`linear`:`radial`}function Bo(e){return e.getAttribute(`gradientUnits`)===`userSpaceOnUse`?`pixels`:`percentage`}function Vo(e,t){return e.getAttribute(t)}function Ho(e,t){return function(e,{width:t,height:n,gradientUnits:r}){let i;return Object.entries(e).reduce((e,[a,o])=>{if(o===`Infinity`)i=1;else if(o===`-Infinity`)i=0;else{let e=typeof o==`string`;i=e?parseFloat(o):o,e&&No(o)&&(i*=.01,r===`pixels`&&(a!==`x1`&&a!==`x2`&&a!==`r2`||(i*=t),a!==`y1`&&a!==`y2`||(i*=n)))}return e[a]=i,e},{})}(zo(e)===`linear`?function(e){return{x1:Vo(e,`x1`)||0,y1:Vo(e,`y1`)||0,x2:Vo(e,`x2`)||`100%`,y2:Vo(e,`y2`)||0}}(e):function(e){return{x1:Vo(e,`fx`)||Vo(e,`cx`)||`50%`,y1:Vo(e,`fy`)||Vo(e,`cy`)||`50%`,r1:0,x2:Vo(e,`cx`)||`50%`,y2:Vo(e,`cy`)||`50%`,r2:Vo(e,`r`)||`50%`}}(e),{...t,gradientUnits:Bo(e)})}var Uo=class{constructor(e){let{type:t=`linear`,gradientUnits:n=`pixels`,coords:r={},colorStops:i=[],offsetX:a=0,offsetY:o=0,gradientTransform:s,id:c}=e||{};Object.assign(this,{type:t,gradientUnits:n,coords:{...t===`radial`?jo:Ao,...r},colorStops:i,offsetX:a,offsetY:o,gradientTransform:s,id:c?`${c}_${Ne()}`:Ne()})}addColorStop(e){for(let t in e)this.colorStops.push({offset:parseFloat(t),color:e[t]});return this}toObject(e){return{...ct(this,e),type:this.type,coords:{...this.coords},colorStops:this.colorStops.map(e=>({...e})),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0}}toSVG(e,{additionalTransform:t}={}){let n=[],r=this.gradientTransform?this.gradientTransform.concat():B.concat(),i=this.gradientUnits===`pixels`?`userSpaceOnUse`:`objectBoundingBox`,a=this.colorStops.map(e=>({...e})).sort((e,t)=>e.offset-t.offset),o=-this.offsetX,s=-this.offsetY;var c;i===`objectBoundingBox`?(o/=e.width,s/=e.height):(o+=e.width/2,s+=e.height/2),(c=e)&&typeof c._renderPathCommands==`function`&&this.gradientUnits!==`percentage`&&(o-=e.pathOffset.x,s-=e.pathOffset.y),r[4]-=o,r[5]-=s;let l=[`id="SVGID_${Et(String(this.id))}"`,`gradientUnits="${i}"`,`gradientTransform="${t?t+` `:``}${dt(r)}"`,``].join(` `),u=e=>parseFloat(String(e));if(this.type===`linear`){let{x1:e,y1:t,x2:r,y2:i}=this.coords,a=u(e),o=u(t),s=u(r),c=u(i);n.push(`<linearGradient `,l,` x1="`,a,`" y1="`,o,`" x2="`,s,`" y2="`,c,`">
`)}else if(this.type===`radial`){let{x1:e,y1:t,x2:r,y2:i,r1:o,r2:s}=this.coords,c=u(e),d=u(t),f=u(r),p=u(i),m=u(o),h=u(s),g=m>h;n.push(`<radialGradient `,l,` cx="`,g?c:f,`" cy="`,g?d:p,`" r="`,g?m:h,`" fx="`,g?f:c,`" fy="`,g?p:d,`">
`),g&&(a.reverse(),a.forEach(e=>{e.offset=1-e.offset}));let _=Math.min(m,h);if(_>0){let e=_/Math.max(m,h);a.forEach(t=>{t.offset+=e*(1-t.offset)})}}return a.forEach(({color:e,offset:t})=>{let r=String(e),i=gn(r)?r:new En(r).toRgba();n.push(`<stop offset="${100*t}%" style="stop-color:${Et(i)};"/>\n`)}),n.push(this.type===`linear`?`</linearGradient>`:`</radialGradient>`,`
`),n.join(``)}toLive(e){let{x1:t,y1:n,x2:r,y2:i,r1:a,r2:o}=this.coords,s=this.type===`linear`?e.createLinearGradient(t,n,r,i):e.createRadialGradient(t,n,a,r,i,o);return this.colorStops.forEach(({color:e,offset:t})=>{s.addColorStop(t,e)}),s}static async fromObject(e){let{colorStops:t,gradientTransform:n}=e;return new this({...e,colorStops:t?t.map(e=>({...e})):void 0,gradientTransform:n?[...n]:void 0})}static fromElement(e,t,n){let r=Bo(e),i=t._findCenterFromElement();return new this({id:e.getAttribute(`id`)||void 0,type:zo(e),coords:Ho(e,{width:n.viewBoxWidth||n.width,height:n.viewBoxHeight||n.height}),colorStops:Ro(e,n.opacity),gradientUnits:r,gradientTransform:oa(e.getAttribute(`gradientTransform`)||``),...r===`pixels`?{offsetX:t.width/2-i.x,offsetY:t.height/2-i.y}:{offsetX:0,offsetY:0}})}};x(Uo,`type`,`Gradient`),K.setClass(Uo,`gradient`),K.setClass(Uo,`linear`),K.setClass(Uo,`radial`);var Wo=class{get type(){return`pattern`}set type(e){w(`warn`,`Setting type has no effect`,e)}constructor(e){x(this,`repeat`,`repeat`),x(this,`offsetX`,0),x(this,`offsetY`,0),x(this,`crossOrigin`,``),this.id=Ne(),Object.assign(this,e)}isImageSource(){return!!this.source&&typeof this.source.src==`string`}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():``}toLive(e){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?e.createPattern(this.source,this.repeat):null}toObject(e=[]){let{repeat:t,crossOrigin:n}=this;return{...ct(this,e),type:`pattern`,source:this.sourceToString(),repeat:t,crossOrigin:n,offsetX:ut(this.offsetX,C.NUM_FRACTION_DIGITS),offsetY:ut(this.offsetY,C.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null}}toSVG({width:e,height:t}){let{source:n,repeat:r,id:i}=this,a=Mo(this.offsetX/e,0),o=Mo(this.offsetY/t,0),s=r===`repeat-y`||r===`no-repeat`?1+Math.abs(a||0):Mo(n.width/e,0),c=r===`repeat-x`||r===`no-repeat`?1+Math.abs(o||0):Mo(n.height/t,0);return[`<pattern id="SVGID_${Et(i)}" x="${a}" y="${o}" width="${s}" height="${c}">`,`<image x="0" y="0" width="${n.width}" height="${n.height}" xlink:href="${Et(this.sourceToString())}"></image>`,`</pattern>`,``].join(`
`)}static async fromObject({type:e,source:t,patternTransform:n,...r},i){let a=await at(t,{...i,crossOrigin:r.crossOrigin});return new this({...r,patternTransform:n&&n.slice(0),source:a})}};x(Wo,`type`,`Pattern`),K.setClass(Wo),K.setClass(Wo,`pattern`);var Go=class e extends ji{constructor(t,{path:n,left:r,top:i,...a}={}){super(),Object.assign(this,e.ownDefaults),this.setOptions(a),this._setPath(t||[],!0),typeof r==`number`&&this.set(`left`,r),typeof i==`number`&&this.set(`top`,i)}_setPath(e,t){this.path=Pa(Array.isArray(e)?e:Za(e)),this.setBoundingBox(t)}_findCenterFromElement(){let e=this._calcBoundsFromPath();return new q(e.left+e.width/2,e.top+e.height/2)}_renderPathCommands(e){let t=-this.pathOffset.x,n=-this.pathOffset.y;e.beginPath();for(let r of this.path)switch(r[0]){case`L`:e.lineTo(r[1]+t,r[2]+n);break;case`M`:e.moveTo(r[1]+t,r[2]+n);break;case`C`:e.bezierCurveTo(r[1]+t,r[2]+n,r[3]+t,r[4]+n,r[5]+t,r[6]+n);break;case`Q`:e.quadraticCurveTo(r[1]+t,r[2]+n,r[3]+t,r[4]+n);break;case`Z`:e.closePath()}}_render(e){this._renderPathCommands(e),this._renderPaintInOrder(e)}toString(){return`#<Path (${this.complexity()}): { "top": ${this.top}, "left": ${this.left} }>`}toObject(e=[]){return{...super.toObject(e),path:this.path.map(e=>e.slice())}}toDatalessObject(e=[]){let t=this.toObject(e);return this.sourcePath&&(delete t.path,t.sourcePath=this.sourcePath),t}_toSVG(){return[`<path `,`COMMON_PARTS`,`d="${to(this.path,C.NUM_FRACTION_DIGITS)}" stroke-linecap="round" />\n`]}_getOffsetTransform(){let e=C.NUM_FRACTION_DIGITS;return` translate(${ut(-this.pathOffset.x,e)}, ${ut(-this.pathOffset.y,e)})`}toClipPathSVG(e){let t=this._getOffsetTransform();return`	`+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:e,additionalTransform:t})}toSVG(e){let t=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:e,additionalTransform:t})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(e){let{width:t,height:n,pathOffset:r}=this._calcDimensions();this.set({width:t,height:n,pathOffset:r}),e&&this.setPositionByOrigin(r,`center`,`center`)}_calcBoundsFromPath(){let e=[],t=0,n=0,r=0,i=0;for(let a of this.path)switch(a[0]){case`L`:r=a[1],i=a[2],e.push({x:t,y:n},{x:r,y:i});break;case`M`:r=a[1],i=a[2],t=r,n=i;break;case`C`:e.push(...Ma(r,i,a[1],a[2],a[3],a[4],a[5],a[6])),r=a[5],i=a[6];break;case`Q`:e.push(...Ma(r,i,a[1],a[2],a[1],a[2],a[3],a[4])),r=a[3],i=a[4];break;case`Z`:r=t,i=n}return It(e)}_calcDimensions(){let e=this._calcBoundsFromPath();return{...e,pathOffset:new q(e.left+e.width/2,e.top+e.height/2)}}static fromObject(e){return this._fromObject(e,{extraParam:`path`})}static async fromElement(e,t,n){let{d:r,...i}=da(e,this.ATTRIBUTE_NAMES,n);return new this(r,{...i,...t,left:void 0,top:void 0})}};x(Go,`type`,`Path`),x(Go,`cacheProperties`,[...er,`path`,`fillRule`]),x(Go,`ATTRIBUTE_NAMES`,[...Hi,`d`]),K.setClass(Go),K.setSVGClass(Go);var Ko=[`radius`,`startAngle`,`endAngle`,`counterClockwise`],qo=class e extends ji{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t){super(),Object.assign(this,e.ownDefaults),this.setOptions(t)}_set(e,t){return super._set(e,t),e===`radius`&&this.setRadius(t),this}_render(e){e.beginPath(),e.arc(0,0,this.radius,Be(this.startAngle),Be(this.endAngle),this.counterClockwise),this._renderPaintInOrder(e)}getRadiusX(){return this.get(`radius`)*this.get(H)}getRadiusY(){return this.get(`radius`)*this.get(ge)}setRadius(e){this.radius=e,this.set({width:2*e,height:2*e})}toObject(e=[]){return super.toObject([...Ko,...e])}_toSVG(){let{radius:e,startAngle:t,endAngle:n}=this,r=(n-t)%360;if(r===0)return[`<circle `,`COMMON_PARTS`,`cx="0" cy="0" `,`r="`,`${Et(e)}`,`" />
`];{let i=Be(t),a=Be(n),o=we(i)*e,s=Te(i)*e,c=we(a)*e,l=Te(a)*e;return[`<path d="M ${o} ${s} A ${e} ${e} 0 ${+(r>180)} ${+!this.counterClockwise} ${c} ${l}" `,`COMMON_PARTS`,` />
`]}}static async fromElement(e,t,n){let{left:r=0,top:i=0,radius:a=0,...o}=da(e,this.ATTRIBUTE_NAMES,n);return new this({...o,radius:a,left:r-a,top:i-a})}static fromObject(e){return super._fromObject(e)}};x(qo,`type`,`Circle`),x(qo,`cacheProperties`,[...er,...Ko]),x(qo,`ownDefaults`,{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),x(qo,`ATTRIBUTE_NAMES`,[`cx`,`cy`,`r`,...Hi]),K.setClass(qo),K.setSVGClass(qo);var Jo=[`x1`,`x2`,`y1`,`y2`],Yo=class e extends ji{constructor([t,n,r,i]=[0,0,0,0],a={}){super(),Object.assign(this,e.ownDefaults),this.setOptions(a),this.x1=t,this.x2=r,this.y1=n,this.y2=i,this._setWidthHeight();let{left:o,top:s}=a;typeof o==`number`&&this.set(`left`,o),typeof s==`number`&&this.set(`top`,s)}_setWidthHeight(){let{x1:e,y1:t,x2:n,y2:r}=this;this.width=Math.abs(n-e),this.height=Math.abs(r-t);let{left:i,top:a,width:o,height:s}=It([{x:e,y:t},{x:n,y:r}]),c=new q(i+o/2,a+s/2);this.setPositionByOrigin(c,V,V)}_set(e,t){return super._set(e,t),Jo.includes(e)&&this._setWidthHeight(),this}_render(e){e.beginPath();let t=this.calcLinePoints();e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.lineWidth=this.strokeWidth;let n=e.strokeStyle;e.strokeStyle=ft(this.stroke)?this.stroke.toLive(e):this.stroke??e.fillStyle,this.stroke&&this._renderStroke(e),e.strokeStyle=n}_findCenterFromElement(){return new q((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(e=[]){return{...super.toObject(e),...this.calcLinePoints()}}_getNonTransformedDimensions(){let e=super._getNonTransformedDimensions();return this.strokeLineCap===`butt`&&(this.width===0&&(e.y-=this.strokeWidth),this.height===0&&(e.x-=this.strokeWidth)),e}calcLinePoints(){let{x1:e,x2:t,y1:n,y2:r,width:i,height:a}=this,o=e<=t?-.5:.5,s=n<=r?-.5:.5;return{x1:o*i,x2:o*-i,y1:s*a,y2:s*-a}}_toSVG(){let{x1:e,x2:t,y1:n,y2:r}=this.calcLinePoints();return[`<line `,`COMMON_PARTS`,`x1="${e}" y1="${n}" x2="${t}" y2="${r}" />\n`]}static async fromElement(e,t,n){let{x1:r=0,y1:i=0,x2:a=0,y2:o=0,...s}=da(e,this.ATTRIBUTE_NAMES,n);return new this([r,i,a,o],s)}static fromObject({x1:e,y1:t,x2:n,y2:r,...i}){return this._fromObject({...i,points:[e,t,n,r]},{extraParam:`points`})}};x(Yo,`type`,`Line`),x(Yo,`cacheProperties`,[...er,...Jo]),x(Yo,`ATTRIBUTE_NAMES`,Hi.concat(Jo)),K.setClass(Yo),K.setSVGClass(Yo);var Xo=class e extends ji{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t){super(),Object.assign(this,e.ownDefaults),this.setOptions(t)}_render(e){let t=this.width/2,n=this.height/2;e.beginPath(),e.moveTo(-t,n),e.lineTo(0,-n),e.lineTo(t,n),e.closePath(),this._renderPaintInOrder(e)}_toSVG(){let e=this.width/2,t=this.height/2;return[`<polygon `,`COMMON_PARTS`,`points="`,`${-e} ${t},0 ${-t},${e} ${t}`,`" />`]}};x(Xo,`type`,`Triangle`),x(Xo,`ownDefaults`,{width:100,height:100}),K.setClass(Xo),K.setSVGClass(Xo);var Zo=[`rx`,`ry`],Qo=class e extends ji{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t){super(),Object.assign(this,e.ownDefaults),this.setOptions(t)}_set(e,t){switch(super._set(e,t),e){case`rx`:this.rx=t,this.set(`width`,2*t);break;case`ry`:this.ry=t,this.set(`height`,2*t)}return this}getRx(){return this.get(`rx`)*this.get(H)}getRy(){return this.get(`ry`)*this.get(ge)}toObject(e=[]){return super.toObject([...Zo,...e])}_toSVG(){return[`<ellipse `,`COMMON_PARTS`,`cx="0" cy="0" rx="${Et(this.rx)}" ry="${Et(this.ry)}" />\n`]}_render(e){e.beginPath(),e.save(),e.transform(1,0,0,this.ry/this.rx,0,0),e.arc(0,0,this.rx,0,z,!1),e.restore(),this._renderPaintInOrder(e)}static async fromElement(e,t,n){let r=da(e,this.ATTRIBUTE_NAMES,n);return r.left=(r.left||0)-r.rx,r.top=(r.top||0)-r.ry,new this(r)}};x(Qo,`type`,`Ellipse`),x(Qo,`cacheProperties`,[...er,...Zo]),x(Qo,`ownDefaults`,{rx:0,ry:0}),x(Qo,`ATTRIBUTE_NAMES`,[...Hi,`cx`,`cy`,`rx`,`ry`]),K.setClass(Qo),K.setSVGClass(Qo);var $o={exactBoundingBox:!1},es=class e extends ji{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t=[],n={}){super(),x(this,`strokeDiff`,void 0),Object.assign(this,e.ownDefaults),this.setOptions(n),this.points=t;let{left:r,top:i}=n;this.initialized=!0,this.setBoundingBox(!0),typeof r==`number`&&this.set(`left`,r),typeof i==`number`&&this.set(`top`,i)}isOpen(){return!0}_projectStrokeOnPoints(e){return Li(this.points,e,this.isOpen())}_calcDimensions(e){e={scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth,...e||{}};let t=this.exactBoundingBox?this._projectStrokeOnPoints(e).map(e=>e.projectedPoint):this.points;if(t.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new q,strokeOffset:new q,strokeDiff:new q};let n=It(t),r=rt({...e,scaleX:1,scaleY:1}),i=It(this.points.map(e=>Ue(e,r,!0))),a=new q(this.scaleX,this.scaleY),o=n.left+n.width/2,s=n.top+n.height/2;return this.exactBoundingBox&&(o-=s*Math.tan(Be(this.skewX)),s-=o*Math.tan(Be(this.skewY))),{...n,pathOffset:new q(o,s),strokeOffset:new q(i.left,i.top).subtract(new q(n.left,n.top)).multiply(a),strokeDiff:new q(n.width,n.height).subtract(new q(i.width,i.height)).multiply(a)}}_findCenterFromElement(){let e=It(this.points);return new q(e.left+e.width/2,e.top+e.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(e){let{left:t,top:n,width:r,height:i,pathOffset:a,strokeOffset:o,strokeDiff:s}=this._calcDimensions();this.set({width:r,height:i,pathOffset:a,strokeOffset:o,strokeDiff:s}),e&&this.setPositionByOrigin(new q(t+r/2,n+i/2),`center`,`center`)}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new q(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(e={}){if(this.exactBoundingBox){let t;if(Object.keys(e).some(e=>this.strokeUniform||this.constructor.layoutProperties.includes(e))){let{width:n,height:r}=this._calcDimensions(e);t=new q(e.width??n,e.height??r)}else t=new q(e.width??this.width,e.height??this.height);return t.multiply(new q(e.scaleX||this.scaleX,e.scaleY||this.scaleY))}return super._getTransformedDimensions(e)}_set(e,t){let n=this.initialized&&this[e]!==t,r=super._set(e,t);return this.exactBoundingBox&&n&&((e===`scaleX`||e===`scaleY`)&&this.strokeUniform&&this.constructor.layoutProperties.includes(`strokeUniform`)||this.constructor.layoutProperties.includes(e))&&this.setDimensions(),r}toObject(e=[]){return{...super.toObject(e),points:this.points.map(({x:e,y:t})=>({x:e,y:t}))}}_toSVG(){let e=this.pathOffset.x,t=this.pathOffset.y,n=C.NUM_FRACTION_DIGITS,r=this.points.map(({x:r,y:i})=>`${ut(r-e,n)},${ut(i-t,n)}`).join(` `);return[`<${Et(this.constructor.type).toLowerCase()} `,`COMMON_PARTS`,`points="${r}" />\n`]}_render(e){let t=this.points.length,n=this.pathOffset.x,r=this.pathOffset.y;if(t&&!isNaN(this.points[t-1].y)){e.beginPath(),e.moveTo(this.points[0].x-n,this.points[0].y-r);for(let i=0;i<t;i++){let t=this.points[i];e.lineTo(t.x-n,t.y-r)}!this.isOpen()&&e.closePath(),this._renderPaintInOrder(e)}}complexity(){return this.points.length}static async fromElement(e,t,n){let r=function(e){if(!e)return[];let t=e.replace(/,/g,` `).trim().split(/\s+/),n=[];for(let e=0;e<t.length;e+=2)n.push({x:parseFloat(t[e]),y:parseFloat(t[e+1])});return n}(e.getAttribute(`points`)),{left:i,top:a,...o}=da(e,this.ATTRIBUTE_NAMES,n);return new this(r,{...o,...t})}static fromObject(e){return this._fromObject(e,{extraParam:`points`})}};x(es,`ownDefaults`,$o),x(es,`type`,`Polyline`),x(es,`layoutProperties`,[_e,ve,`strokeLineCap`,`strokeLineJoin`,`strokeMiterLimit`,`strokeWidth`,`strokeUniform`,`points`]),x(es,`cacheProperties`,[...er,`points`]),x(es,`ATTRIBUTE_NAMES`,[...Hi]),K.setClass(es),K.setSVGClass(es);var ts=class extends es{isOpen(){return!1}};x(ts,`ownDefaults`,$o),x(ts,`type`,`Polygon`),K.setClass(ts),K.setSVGClass(ts);var ns=class extends ji{isEmptyStyles(e){if(!this.styles||e!==void 0&&!this.styles[e])return!0;let t=e===void 0?this.styles:{line:this.styles[e]};for(let e in t)for(let n in t[e])for(let r in t[e][n])return!1;return!0}styleHas(e,t){if(!this.styles||t!==void 0&&!this.styles[t])return!1;let n=t===void 0?this.styles:{0:this.styles[t]};for(let t in n)for(let r in n[t])if(n[t][r][e]!==void 0)return!0;return!1}cleanStyle(e){if(!this.styles)return!1;let t=this.styles,n,r,i=0,a=!0,o=0;for(let o in t){n=0;for(let s in t[o]){let c=t[o][s]||{};i++,c[e]===void 0?a=!1:(r?c[e]!==r&&(a=!1):r=c[e],c[e]===this[e]&&delete c[e]),Object.keys(c).length===0?delete t[o][s]:n++}n===0&&delete t[o]}for(let e=0;e<this._textLines.length;e++)o+=this._textLines[e].length;a&&i===o&&(this[e]=r,this.removeStyle(e))}removeStyle(e){if(!this.styles)return;let t=this.styles,n,r,i;for(r in t){for(i in n=t[r],n)delete n[i][e],Object.keys(n[i]).length===0&&delete n[i];Object.keys(n).length===0&&delete t[r]}}_extendStyles(e,t){let{lineIndex:n,charIndex:r}=this.get2DCursorLocation(e);this._getLineStyle(n)||this._setLineStyle(n);let i=lt({...this._getStyleDeclaration(n,r),...t},e=>e!==void 0);this._setStyleDeclaration(n,r,i)}getSelectionStyles(e,t,n){let r=[];for(let i=e;i<(t||e);i++)r.push(this.getStyleAtPosition(i,n));return r}getStyleAtPosition(e,t){let{lineIndex:n,charIndex:r}=this.get2DCursorLocation(e);return t?this.getCompleteStyleDeclaration(n,r):this._getStyleDeclaration(n,r)}setSelectionStyles(e,t,n){for(let r=t;r<(n||t);r++)this._extendStyles(r,e);this._forceClearCache=!0}_getStyleDeclaration(e,t){var n;let r=this.styles&&this.styles[e];return r&&(n=r[t])!=null?n:{}}getCompleteStyleDeclaration(e,t){return{...ct(this,this.constructor._styleProperties),...this._getStyleDeclaration(e,t)}}_setStyleDeclaration(e,t,n){this.styles[e][t]=n}_deleteStyleDeclaration(e,t){delete this.styles[e][t]}_getLineStyle(e){return!!this.styles[e]}_setLineStyle(e){this.styles[e]={}}_deleteLineStyle(e){delete this.styles[e]}};x(ns,`_styleProperties`,zn);var rs=/  +/g,is=/"/g;function as(e,t,n,r,i){return`\t\t${((e,{left:t,top:n,width:r,height:i},a=C.NUM_FRACTION_DIGITS)=>{let o=An(U,e,!1),[s,c,l,u]=[t,n,r,i].map(e=>ut(e,a));return`<rect ${o} x="${s}" y="${c}" width="${l}" height="${u}"></rect>`})(e,{left:t,top:n,width:r,height:i})}\n`}var os,ss=class e extends ns{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t,n){super(),x(this,`__charBounds`,[]),Object.assign(this,e.ownDefaults),this.setOptions(n),this.styles||={},this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let e=this.path;e&&(e.segmentsInfo=Ga(e.path))}_splitText(){let e=this._splitTextIntoLines(this.text);return this.textLines=e.lines,this._textLines=e.graphemeLines,this._unwrappedTextLines=e._unwrappedLines,this._text=e.graphemeText,e}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes(`justify`)&&this.enlargeSpaces()}enlargeSpaces(){let e,t,n,r,i,a,o;for(let s=0,c=this._textLines.length;s<c;s++)if((this.textAlign===`justify`||s!==c-1&&!this.isEndOfWrapping(s))&&(r=0,i=this._textLines[s],t=this.getLineWidth(s),t<this.width&&(o=this.textLines[s].match(this._reSpacesAndTabs)))){n=o.length,e=(this.width-t)/n;for(let t=0;t<=i.length;t++)a=this.__charBounds[s][t],this._reSpaceAndTab.test(i[t])?(a.width+=e,a.kernedWidth+=e,a.left+=r,r+=e):a.left+=r}}isEndOfWrapping(e){return e===this._textLines.length-1}missingNewlineOffset(e){return 1}get2DCursorLocation(e,t){let n=t?this._unwrappedTextLines:this._textLines,r;for(r=0;r<n.length;r++){if(e<=n[r].length)return{lineIndex:r,charIndex:e};e-=n[r].length+this.missingNewlineOffset(r,t)}return{lineIndex:r-1,charIndex:n[r-1].length<e?n[r-1].length:e}}toString(){return`#<Text (${this.complexity()}): { "text": "${this.text}", "fontFamily": "${this.fontFamily}" }>`}_getCacheCanvasDimensions(){let e=super._getCacheCanvasDimensions(),t=this.fontSize;return e.width+=t*e.zoomX,e.height+=t*e.zoomY,e}_render(e){let t=this.path;t&&!t.isNotVisible()&&t._render(e),this._setTextStyles(e),this._renderTextLinesBackground(e),this._renderTextDecoration(e,`underline`),this._renderText(e),this._renderTextDecoration(e,`overline`),this._renderTextDecoration(e,`linethrough`)}_renderText(e){this.paintFirst===`stroke`?(this._renderTextStroke(e),this._renderTextFill(e)):(this._renderTextFill(e),this._renderTextStroke(e))}_setTextStyles(e,t,n){if(e.textBaseline=`alphabetic`,this.path)switch(this.pathAlign){case V:e.textBaseline=`middle`;break;case`ascender`:e.textBaseline=`top`;break;case`descender`:e.textBaseline=re}e.font=this._getFontDeclaration(t,n)}calcTextWidth(){let e=this.getLineWidth(0);for(let t=1,n=this._textLines.length;t<n;t++){let n=this.getLineWidth(t);n>e&&(e=n)}return e}_renderTextLine(e,t,n,r,i,a){this._renderChars(e,t,n,r,i,a)}_renderTextLinesBackground(e){if(!this.textBackgroundColor&&!this.styleHas(`textBackgroundColor`))return;let t=e.fillStyle,n=this._getLeftOffset(),r=this._getTopOffset();for(let t=0,i=this._textLines.length;t<i;t++){let i=this.getHeightOfLine(t);if(!this.textBackgroundColor&&!this.styleHas(`textBackgroundColor`,t)){r+=i;continue}let a=this._textLines[t].length,o=this._getLineLeftOffset(t),s,c,l=0,u=0,d=this.getValueOfPropertyAt(t,0,`textBackgroundColor`),f=this.getHeightOfLineImpl(t);for(let i=0;i<a;i++){let a=this.__charBounds[t][i];c=this.getValueOfPropertyAt(t,i,`textBackgroundColor`),this.path?(e.save(),e.translate(a.renderLeft,a.renderTop),e.rotate(a.angle),e.fillStyle=c,c&&e.fillRect(-a.width/2,-f*(1-this._fontSizeFraction),a.width,f),e.restore()):c===d?l+=a.kernedWidth:(s=n+o+u,this.direction===`rtl`&&(s=this.width-s-l),e.fillStyle=d,d&&e.fillRect(s,r,l,f),u=a.left,l=a.width,d=c)}c&&!this.path&&(s=n+o+u,this.direction===`rtl`&&(s=this.width-s-l),e.fillStyle=c,e.fillRect(s,r,l,f)),r+=i}e.fillStyle=t,this._removeShadow(e)}_measureChar(e,t,n,r){let i=F.getFontCache(t),a=this._getFontDeclaration(t),o=n?n+e:e,s=n&&a===this._getFontDeclaration(r),c=t.fontSize/this.CACHE_FONT_SIZE,l,u,d,f;if(n&&i.has(n)&&(d=i.get(n)),i.has(e)&&(f=l=i.get(e)),s&&i.has(o)&&(u=i.get(o),f=u-d),l===void 0||d===void 0||u===void 0){let r=(os||=Le({width:0,height:0}).getContext(`2d`),os);this._setTextStyles(r,t,!0),l===void 0&&(f=l=r.measureText(e).width,i.set(e,l)),d===void 0&&s&&n&&(d=r.measureText(n).width,i.set(n,d)),s&&u===void 0&&(u=r.measureText(o).width,i.set(o,u),f=u-d)}return{width:l*c,kernedWidth:f*c}}getHeightOfChar(e,t){return this.getValueOfPropertyAt(e,t,`fontSize`)}measureLine(e){let t=this._measureLine(e);return this.charSpacing!==0&&(t.width-=this._getWidthOfCharSpacing()),t.width<0&&(t.width=0),t}_measureLine(e){let t,n,r=0,i=this.pathSide===ie,a=this.path,o=this._textLines[e],s=o.length,c=Array(s);this.__charBounds[e]=c;for(let i=0;i<s;i++){let a=o[i];n=this._getGraphemeBox(a,e,i,t),c[i]=n,r+=n.kernedWidth,t=a}if(c[s]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},a&&a.segmentsInfo){let e=0,t=a.segmentsInfo[a.segmentsInfo.length-1].length;switch(this.textAlign){case ne:e=i?t-r:0;break;case V:e=(t-r)/2;break;case ie:e=i?0:t-r}e+=this.pathStartOffset*(i?-1:1);for(let r=i?s-1:0;i?r>=0:r<s;i?r--:r++)n=c[r],e>t?e%=t:e<0&&(e+=t),this._setGraphemeOnPath(e,n),e+=n.kernedWidth}return{width:r,numOfSpaces:0}}_setGraphemeOnPath(e,t){let n=e+t.kernedWidth/2,r=this.path,i=Ka(r.path,n,r.segmentsInfo);t.renderLeft=i.x-r.pathOffset.x,t.renderTop=i.y-r.pathOffset.y,t.angle=i.angle+(this.pathSide===`right`?Math.PI:0)}_getGraphemeBox(e,t,n,r,i){let a=this.getCompleteStyleDeclaration(t,n),o=r?this.getCompleteStyleDeclaration(t,n-1):{},s=this._measureChar(e,a,r,o),c,l=s.kernedWidth,u=s.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),u+=c,l+=c);let d={width:u,left:0,height:a.fontSize,kernedWidth:l,deltaY:a.deltaY};if(n>0&&!i){let e=this.__charBounds[t][n-1];d.left=e.left+e.width+s.kernedWidth-s.width}return d}getHeightOfLineImpl(e){let t=this.__lineHeights;if(t[e])return t[e];let n=this.getHeightOfChar(e,0);for(let t=1,r=this._textLines[e].length;t<r;t++)n=Math.max(this.getHeightOfChar(e,t),n);return t[e]=n*this._fontSizeMult}getHeightOfLine(e){return this.getHeightOfLineImpl(e)*this.lineHeight}calcTextHeight(){let e=0;for(let t=0,n=this._textLines.length;t<n;t++)e+=t===n-1?this.getHeightOfLineImpl(t):this.getHeightOfLine(t);return e}_getLeftOffset(){return this.direction===`ltr`?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(e,t){e.save();let n=0,r=this._getLeftOffset(),i=this._getTopOffset();for(let a=0,o=this._textLines.length;a<o;a++)this._renderTextLine(t,e,this._textLines[a],r+this._getLineLeftOffset(a),i+n+this.getHeightOfLineImpl(a),a),n+=this.getHeightOfLine(a);e.restore()}_renderTextFill(e){(this.fill||this.styleHas(`fill`))&&this._renderTextCommon(e,`fillText`)}_renderTextStroke(e){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e),e.save(),this._setLineDash(e,this.strokeDashArray),e.beginPath(),this._renderTextCommon(e,`strokeText`),e.closePath(),e.restore())}_renderChars(e,t,n,r,i,a){let o=this.textAlign.includes(Vn),s=this.path,c=!o&&this.charSpacing===0&&this.isEmptyStyles(a)&&!s,l=this.direction===`ltr`,u=this.direction===`ltr`?1:-1,d=t.direction,f,p,m,h,g,_=``,v=0;if(t.save(),d!==this.direction&&(t.canvas.setAttribute(`dir`,l?`ltr`:`rtl`),t.direction=l?`ltr`:`rtl`,t.textAlign=l?ne:ie),i-=this.getHeightOfLineImpl(a)*this._fontSizeFraction,c)return this._renderChar(e,t,a,0,n.join(``),r,i),void t.restore();for(let c=0,l=n.length-1;c<=l;c++)h=c===l||this.charSpacing||s,_+=n[c],m=this.__charBounds[a][c],v===0?(r+=u*(m.kernedWidth-m.width),v+=m.width):v+=m.kernedWidth,o&&!h&&this._reSpaceAndTab.test(n[c])&&(h=!0),h||=(f||=this.getCompleteStyleDeclaration(a,c),p=this.getCompleteStyleDeclaration(a,c+1),zi(f,p,!1)),h&&(s?(t.save(),t.translate(m.renderLeft,m.renderTop),t.rotate(m.angle),this._renderChar(e,t,a,c,_,-v/2,0),t.restore()):(g=r,this._renderChar(e,t,a,c,_,g,i)),_=``,f=p,r+=u*v,v=0);t.restore()}_applyPatternGradientTransformText(e){let t=this.width+this.strokeWidth,n=this.height+this.strokeWidth,r=Le({width:t,height:n}),i=r.getContext(`2d`);return r.width=t,r.height=n,i.beginPath(),i.moveTo(0,0),i.lineTo(t,0),i.lineTo(t,n),i.lineTo(0,n),i.closePath(),i.translate(t/2,n/2),i.fillStyle=e.toLive(i),this._applyPatternGradientTransform(i,e),i.fill(),i.createPattern(r,`no-repeat`)}handleFiller(e,t,n){let r,i;return ft(n)?n.gradientUnits===`percentage`||n.gradientTransform||n.patternTransform?(r=-this.width/2,i=-this.height/2,e.translate(r,i),e[t]=this._applyPatternGradientTransformText(n),{offsetX:r,offsetY:i}):(e[t]=n.toLive(e),this._applyPatternGradientTransform(e,n)):(e[t]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(e,{stroke:t,strokeWidth:n}){return e.lineWidth=n,e.lineCap=this.strokeLineCap,e.lineDashOffset=this.strokeDashOffset,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,this.handleFiller(e,`strokeStyle`,t)}_setFillStyles(e,{fill:t}){return this.handleFiller(e,`fillStyle`,t)}_renderChar(e,t,n,r,i,a,o){let s=this._getStyleDeclaration(n,r),c=this.getCompleteStyleDeclaration(n,r),l=e===`fillText`&&c.fill,u=e===`strokeText`&&c.stroke&&c.strokeWidth;if(u||l){if(t.save(),t.font=this._getFontDeclaration(c),s.textBackgroundColor&&this._removeShadow(t),s.deltaY&&(o+=s.deltaY),l){let e=this._setFillStyles(t,c);t.fillText(i,a-e.offsetX,o-e.offsetY)}if(u){let e=this._setStrokeStyles(t,c);t.strokeText(i,a-e.offsetX,o-e.offsetY)}t.restore()}}setSuperscript(e,t){this._setScript(e,t,this.superscript)}setSubscript(e,t){this._setScript(e,t,this.subscript)}_setScript(e,t,n){let r=this.get2DCursorLocation(e,!0),i=this.getValueOfPropertyAt(r.lineIndex,r.charIndex,`fontSize`),a=this.getValueOfPropertyAt(r.lineIndex,r.charIndex,`deltaY`),o={fontSize:i*n.size,deltaY:a+i*n.baseline};this.setSelectionStyles(o,e,t)}_getLineLeftOffset(e){let t=this.getLineWidth(e),n=this.width-t,r=this.textAlign,i=this.direction,a=this.isEndOfWrapping(e),o=0;return r===`justify`||r===`justify-center`&&!a||r===`justify-right`&&!a||r===`justify-left`&&!a?0:(r===`center`&&(o=n/2),r===`right`&&(o=n),r===`justify-center`&&(o=n/2),r===`justify-right`&&(o=n),i===`rtl`&&(r===`right`||r===`justify-right`?o=0:r===`left`||r===`justify-left`?o=-n:r!==`center`&&r!==`justify-center`||(o=-n/2)),o)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(e){if(this.__lineWidths[e]!==void 0)return this.__lineWidths[e];let{width:t}=this.measureLine(e);return this.__lineWidths[e]=t,t}_getWidthOfCharSpacing(){return this.charSpacing===0?0:this.fontSize*this.charSpacing/1e3}getValueOfPropertyAt(e,t,n){return this._getStyleDeclaration(e,t)[n]??this[n]}_renderTextDecoration(e,t){if(!this[t]&&!this.styleHas(t))return;let n=this._getTopOffset(),r=this._getLeftOffset(),i=this.path,a=this._getWidthOfCharSpacing(),o=t===`linethrough`?.5:+(t===`overline`),s=this.offsets[t];for(let c=0,l=this._textLines.length;c<l;c++){let l=this.getHeightOfLine(c);if(!this[t]&&!this.styleHas(t,c)){n+=l;continue}let u=this._textLines[c],d=l/this.lineHeight,f=this._getLineLeftOffset(c),p,m=0,h=0,g=this.getValueOfPropertyAt(c,0,t),_=this.getValueOfPropertyAt(c,0,U),v=this.getValueOfPropertyAt(c,0,`textDecorationColor`)||_,y=this.getValueOfPropertyAt(c,0,Nn),b=g,x=v,S=y,C=n+d*(1-this._fontSizeFraction),w=this.getHeightOfChar(c,0),T=this.getValueOfPropertyAt(c,0,`deltaY`);for(let n=0,a=u.length;n<a;n++){let a=this.__charBounds[c][n];b=this.getValueOfPropertyAt(c,n,t),p=this.getValueOfPropertyAt(c,n,U),x=this.getValueOfPropertyAt(c,n,`textDecorationColor`)||p,S=this.getValueOfPropertyAt(c,n,Nn);let l=this.getHeightOfChar(c,n),u=this.getValueOfPropertyAt(c,n,`deltaY`);if(i&&b&&p){let t=this.fontSize*S/1e3;e.save(),e.fillStyle=x,e.translate(a.renderLeft,a.renderTop),e.rotate(a.angle),e.fillRect(-a.kernedWidth/2,s*l+u-o*t,a.kernedWidth,t),e.restore()}else if((b!==g||p!==_||x!==v||l!==w||S!==y||u!==T)&&h>0){let t=this.fontSize*y/1e3,n=r+f+m;this.direction===`rtl`&&(n=this.width-n-h),g&&v&&y&&(e.fillStyle=v,e.fillRect(n,C+s*w+T-o*t,h,t)),m=a.left,h=a.width,g=b,v=x,y=S,_=p,w=l,T=u}else h+=a.kernedWidth}let E=r+f+m;this.direction===`rtl`&&(E=this.width-E-h),e.fillStyle=x;let D=this.fontSize*S/1e3;b&&x&&S&&e.fillRect(E,C+s*w+T-o*D,h-a,D),n+=l}this._removeShadow(e)}_getFontDeclaration({fontFamily:t=this.fontFamily,fontStyle:n=this.fontStyle,fontWeight:r=this.fontWeight,fontSize:i=this.fontSize}={},a){let o=t.includes(`'`)||t.includes(`"`)||t.includes(`,`)||e.genericFonts.includes(t.toLowerCase())?t:`"${t}"`;return[n,r,`${a?this.CACHE_FONT_SIZE:i}px`,o].join(` `)}render(e){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(e)))}graphemeSplit(e){return Ot(e)}_splitTextIntoLines(e){let t=e.split(this._reNewline),n=Array(t.length),r=[`
`],i=[];for(let e=0;e<t.length;e++)n[e]=this.graphemeSplit(t[e]),i=i.concat(n[e],r);return i.pop(),{_unwrappedLines:n,lines:t,graphemeText:i,graphemeLines:n}}toObject(e=[]){return{...super.toObject([...Rn,...e]),styles:Bi(this.styles,this.text),...this.path?{path:this.path.toObject()}:{}}}set(e,t){let{textLayoutProperties:n}=this.constructor;super.set(e,t);let r=!1,i=!1;if(typeof e==`object`)for(let t in e)t===`path`&&this.setPathInfo(),r||=n.includes(t),i||=t===`path`;else r=n.includes(e),i=e===`path`;return i&&this.setPathInfo(),r&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,n,r){let i=da(t,e.ATTRIBUTE_NAMES,r),{textAnchor:a=ne,textDecoration:o=``,dx:s=0,dy:c=0,top:l=0,left:u=0,fontSize:d=16,strokeWidth:f=1,...p}={...n,...i},m=new this(yn(t.textContent||``).trim(),{left:u+s,top:l+c,underline:o.includes(`underline`),overline:o.includes(`overline`),linethrough:o.includes(`line-through`),strokeWidth:0,fontSize:d,...p}),h=m.getScaledHeight()/m.height,g=((m.height+m.strokeWidth)*m.lineHeight-m.height)*h,_=m.getScaledHeight()+g,v=0;return a===`center`&&(v=m.getScaledWidth()/2),a===`right`&&(v=m.getScaledWidth()),m.set({left:m.left-v,top:m.top-(_-m.fontSize*(.07+m._fontSizeFraction))/m.lineHeight,strokeWidth:f}),m}static fromObject(e){return this._fromObject({...e,styles:Vi(e.styles||{},e.text)},{extraParam:`text`})}};x(ss,`textLayoutProperties`,Ln),x(ss,`cacheProperties`,[...er,...Rn]),x(ss,`ownDefaults`,Bn),x(ss,`type`,`Text`),x(ss,`genericFonts`,[`serif`,`sans-serif`,`monospace`,`cursive`,`fantasy`,`system-ui`,`ui-serif`,`ui-sans-serif`,`ui-monospace`,`ui-rounded`,`math`,`emoji`,`fangsong`]),x(ss,`ATTRIBUTE_NAMES`,Hi.concat(`x`,`y`,`dx`,`dy`,`font-family`,`font-style`,`font-weight`,`font-size`,`letter-spacing`,`text-decoration`,`text-decoration-thickness`,`text-decoration-color`,`text-anchor`)),Ai(ss,[class extends jn{_toSVG(){let e=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(e.textTop,e.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(e){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:e,noStyle:!0,withShadow:!0}),n=this.path;return n?t+n._createBaseSVGMarkup(n._toSVG(),{reviver:e,withShadow:!0,additionalTransform:dt(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg({textBgRects:e,textSpans:t}){let n=this.getSvgTextDecoration(this);return[e.join(``),`		<text xml:space="preserve" `,`font-family="${Et(this.fontFamily.replace(is,`'`))}" `,`font-size="${Et(this.fontSize)}" `,this.fontStyle?`font-style="${Et(this.fontStyle)}" `:``,this.fontWeight?`font-weight="${Et(this.fontWeight)}" `:``,n?`text-decoration="${n}" `:``,this.direction===`rtl`?`direction="rtl" `:``,`style="`,this.getSvgStyles(!0),`"`,this.addPaintOrder(),` >`,t.join(``),`</text>
`]}_getSVGTextAndBg(e,t){let n=[],r=[],i,a=e;this.backgroundColor&&r.push(as(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let e=0,o=this._textLines.length;e<o;e++)i=this._getLineLeftOffset(e),this.direction===`rtl`&&(i+=this.width),(this.textBackgroundColor||this.styleHas(`textBackgroundColor`,e))&&this._setSVGTextLineBg(r,e,t+i,a),this._setSVGTextLineText(n,e,t+i,a),a+=this.getHeightOfLine(e);return{textSpans:n,textBgRects:r}}_createTextCharSpan(e,t,n,r,i){let a=C.NUM_FRACTION_DIGITS,o=this.getSvgSpanStyles(t,e!==e.trim()||!!e.match(rs)),s=o?`style="${o}"`:``,c=t.deltaY,l=c?` dy="${ut(c,a)}" `:``,{angle:u,renderLeft:d,renderTop:f,width:p}=i,m=``;if(d!==void 0){let e=p/2;u&&(m=` rotate="${ut(Ve(u),a)}"`);let t=Qe({angle:Ve(u)});t[4]=d,t[5]=f;let i=new q(-e,0).transform(t);n=i.x,r=i.y}return`<tspan x="${ut(n,a)}" y="${ut(r,a)}" ${l}${m}${s}>${Et(e)}</tspan>`}_setSVGTextLineText(e,t,n,r){let i=this.getHeightOfLine(t),a=this.textAlign.includes(Vn),o=this._textLines[t],s,c,l,u,d,f=``,p=0;r+=i*(1-this._fontSizeFraction)/this.lineHeight;for(let i=0,m=o.length-1;i<=m;i++)d=i===m||this.charSpacing||this.path,f+=o[i],l=this.__charBounds[t][i],p===0?(n+=l.kernedWidth-l.width,p+=l.width):p+=l.kernedWidth,a&&!d&&this._reSpaceAndTab.test(o[i])&&(d=!0),d||=(s||=this.getCompleteStyleDeclaration(t,i),c=this.getCompleteStyleDeclaration(t,i+1),zi(s,c,!0)),d&&(u=this._getStyleDeclaration(t,i),e.push(this._createTextCharSpan(f,u,n,r,l)),f=``,s=c,this.direction===`rtl`?n-=p:n+=p,p=0)}_setSVGTextLineBg(e,t,n,r){let i=this._textLines[t],a=this.getHeightOfLine(t)/this.lineHeight,o,s=0,c=0,l=this.getValueOfPropertyAt(t,0,`textBackgroundColor`);for(let u=0;u<i.length;u++){let{left:i,width:d,kernedWidth:f}=this.__charBounds[t][u];o=this.getValueOfPropertyAt(t,u,`textBackgroundColor`),o===l?s+=f:(l&&e.push(as(l,n+c,r,s,a)),c=i,s=d,l=o)}o&&e.push(as(l,n+c,r,s,a))}getSvgStyles(e){let t=gn(this.textDecorationColor)?` text-decoration-color: ${Et(this[Pn])};`:``;return`${super.getSvgStyles(e)} text-decoration-thickness: ${ut(this.textDecorationThickness*this.getObjectScaling().y/10,C.NUM_FRACTION_DIGITS)}%;${t} white-space: pre;`}getSvgSpanStyles(e,t){let{fontFamily:n,strokeWidth:r,stroke:i,fill:a,fontSize:o,fontStyle:s,fontWeight:c,textDecorationThickness:l,textDecorationColor:u,linethrough:d,overline:f,underline:p}=e,m=this.getSvgTextDecoration({underline:p??this.underline,overline:f??this.overline,linethrough:d??this.linethrough}),h=l||this.textDecorationThickness,g=u||this.textDecorationColor,_=_n(r),v=vn(n),y=_n(o),b=vn(s),x=_n(c)||vn(c),S=vn(g);return[i?An(ye,i):``,_?`stroke-width: ${Et(_)}; `:``,v?`font-family: ${v.includes(`'`)||v.includes(`"`)?Et(v):`'${Et(v)}'`}; `:``,y?`font-size: ${Et(y)}px; `:``,b?`font-style: ${Et(b)}; `:``,x?`font-weight: ${Et(x)}; `:``,m?`text-decoration: ${m}; text-decoration-thickness: ${ut(h*this.getObjectScaling().y/10,C.NUM_FRACTION_DIGITS)}%;${S?` text-decoration-color: ${Et(S)};`:``} `:``,a?An(U,a):``,t?`white-space: pre; `:``].join(``)}getSvgTextDecoration(e){return[`overline`,`underline`,`line-through`].filter(t=>e[t.replace(`-`,``)]).join(` `)}}]),K.setClass(ss),K.setSVGClass(ss);var cs=class{constructor(e){x(this,`target`,void 0),x(this,`__mouseDownInPlace`,!1),x(this,`__dragStartFired`,!1),x(this,`__isDraggingOver`,!1),x(this,`__dragStartSelection`,void 0),x(this,`__dragImageDisposer`,void 0),x(this,`_dispose`,void 0),this.target=e;let t=[this.target.on(`dragenter`,this.dragEnterHandler.bind(this)),this.target.on(`dragover`,this.dragOverHandler.bind(this)),this.target.on(`dragleave`,this.dragLeaveHandler.bind(this)),this.target.on(`dragend`,this.dragEndHandler.bind(this)),this.target.on(`drop`,this.dropHandler.bind(this))];this._dispose=()=>{t.forEach(e=>e()),this._dispose=void 0}}isPointerOverSelection(e){let t=this.target,n=t.getSelectionStartFromPointer(e);return t.isEditing&&n>=t.selectionStart&&n<=t.selectionEnd&&t.selectionStart<t.selectionEnd}start(e){return this.__mouseDownInPlace=this.isPointerOverSelection(e)}isActive(){return this.__mouseDownInPlace}end(e){let t=this.isActive();return t&&!this.__dragStartFired&&(this.target.setCursorByClick(e),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,t}getDragStartSelection(){return this.__dragStartSelection}setDragImage(e,{selectionStart:t,selectionEnd:n}){var r;let i=this.target,a=i.canvas,o=new q(i.flipX?-1:1,i.flipY?-1:1),s=i._getCursorBoundaries(t),c=new q(s.left+s.leftOffset,s.top+s.topOffset).multiply(o).transform(i.calcTransformMatrix()),l=a.getScenePoint(e).subtract(c),u=i.getCanvasRetinaScaling(),d=i.getBoundingRect(),f=c.subtract(new q(d.left,d.top)),p=a.viewportTransform,m=f.add(l).transform(p,!0),h=i.backgroundColor,g=Ri(i.styles);i.backgroundColor=``;let _={stroke:`transparent`,fill:`transparent`,textBackgroundColor:`transparent`};i.setSelectionStyles(_,0,t),i.setSelectionStyles(_,n,i.text.length),i.dirty=!0;let v=i.toCanvasElement({enableRetinaScaling:a.enableRetinaScaling,viewportTransform:!0});i.backgroundColor=h,i.styles=g,i.dirty=!0,ao(v,{position:`fixed`,left:-v.width+`px`,border:ae,width:v.width/u+`px`,height:v.height/u+`px`}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{v.remove()},_t(e.target||this.target.hiddenTextarea).body.appendChild(v),(r=e.dataTransfer)==null||r.setDragImage(v,m.x,m.y)}onDragStart(e){this.__dragStartFired=!0;let t=this.target,n=this.isActive();if(n&&e.dataTransfer){let n=this.__dragStartSelection={selectionStart:t.selectionStart,selectionEnd:t.selectionEnd},r=t._text.slice(n.selectionStart,n.selectionEnd).join(``),i={text:t.text,value:r,...n};e.dataTransfer.setData(`text/plain`,r),e.dataTransfer.setData(`application/fabric`,JSON.stringify({value:r,styles:t.getSelectionStyles(n.selectionStart,n.selectionEnd,!0)})),e.dataTransfer.effectAllowed=`copyMove`,this.setDragImage(e,i)}return t.abortCursorAnimation(),n}canDrop(e){if(this.target.editable&&!this.target.getActiveControl()&&!e.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let t=this.target.getSelectionStartFromPointer(e),n=this.__dragStartSelection;return t<n.selectionStart||t>n.selectionEnd}return!0}return!1}targetCanDrop(e){return this.target.canDrop(e)}dragEnterHandler({e}){let t=this.targetCanDrop(e);!this.__isDraggingOver&&t&&(this.__isDraggingOver=!0)}dragOverHandler(e){let{e:t}=e,n=this.targetCanDrop(t);!this.__isDraggingOver&&n?this.__isDraggingOver=!0:this.__isDraggingOver&&!n&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(t.preventDefault(),e.canDrop=!0,e.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(e){let{e:t}=e,n=t.defaultPrevented;this.__isDraggingOver=!1,t.preventDefault();let r=t.dataTransfer?.getData(`text/plain`);if(r&&!n){let n=this.target,i=n.canvas,a=n.getSelectionStartFromPointer(t),{styles:o}=t.dataTransfer.types.includes(`application/fabric`)?JSON.parse(t.dataTransfer.getData(`application/fabric`)):{},s=r[Math.max(0,r.length-1)];if(this.__dragStartSelection){let e=this.__dragStartSelection.selectionStart,t=this.__dragStartSelection.selectionEnd;a>e&&a<=t?a=e:a>t&&(a-=t-e),n.removeChars(e,t),delete this.__dragStartSelection}n._reNewline.test(s)&&(n._reNewline.test(n._text[a])||a===n._text.length)&&(r=r.trimEnd()),e.didDrop=!0,e.dropTarget=n,n.insertChars(r,o,a),i.setActiveObject(n),n.enterEditing(t),n.selectionStart=Math.min(a+0,n._text.length),n.selectionEnd=Math.min(n.selectionStart+r.length,n._text.length),n.hiddenTextarea.value=n.text,n._updateTextarea(),n.hiddenTextarea.focus(),n.fire(me,{index:a+0,action:`drop`}),i.fire(`text:changed`,{target:n}),i.contextTopDirty=!0,i.requestRenderAll()}}dragEndHandler({e}){if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){let t=this.target,n=this.target.canvas,{selectionStart:r,selectionEnd:i}=this.__dragStartSelection,a=e.dataTransfer?.dropEffect||`none`;a===`none`?(t.selectionStart=r,t.selectionEnd=i,t._updateTextarea(),t.hiddenTextarea.focus()):(t.clearContextTop(),a===`move`&&(t.removeChars(r,i),t.selectionStart=t.selectionEnd=r,t.hiddenTextarea&&(t.hiddenTextarea.value=t.text),t._updateTextarea(),t.fire(me,{index:r,action:`dragend`}),n.fire(`text:changed`,{target:t}),n.requestRenderAll()),t.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},ls=/[ \n\.,;!\?\-]/,us=class extends ss{constructor(...e){super(...e),x(this,`_currentCursorOpacity`,1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(e){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(e)}_animateCursor({toValue:e,duration:t,delay:n,onComplete:r}){return Ur({startValue:this._currentCursorOpacity,endValue:e,duration:t,delay:n,onComplete:r,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:e=>{this._currentCursorOpacity=e,this.renderCursorOrSelection()}})}_tick(e){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(e||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var e;(e=this._currentTickCompleteState)==null||e.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(e){this.abortCursorAnimation(),this._tick(e?0:this.cursorDelay)}abortCursorAnimation(){let e=!1;[this._currentTickState,this._currentTickCompleteState].forEach(t=>{t&&!t.isDone()&&(e=!0,t.abort())}),this._currentCursorOpacity=1,e&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some(e=>!e||e.isDone())&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join(``)}findWordBoundaryLeft(e){let t=0,n=e-1;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)t++,n--;for(;/\S/.test(this._text[n])&&n>-1;)t++,n--;return e-t}findWordBoundaryRight(e){let t=0,n=e;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)t++,n++;for(;/\S/.test(this._text[n])&&n<this._text.length;)t++,n++;return e+t}findLineBoundaryLeft(e){let t=0,n=e-1;for(;!/\n/.test(this._text[n])&&n>-1;)t++,n--;return e-t}findLineBoundaryRight(e){let t=0,n=e;for(;!/\n/.test(this._text[n])&&n<this._text.length;)t++,n++;return e+t}searchWordBoundary(e,t){let n=this._text,r=e>0&&this._reSpace.test(n[e])&&(t===-1||!oe.test(n[e-1]))?e-1:e,i=n[r];for(;r>0&&r<n.length&&!ls.test(i);)r+=t,i=n[r];return t===-1&&ls.test(i)&&r++,r}selectWord(e){e??=this.selectionStart;let t=this.searchWordBoundary(e,-1),n=Math.max(t,this.searchWordBoundary(e,1));this.selectionStart=t,this.selectionEnd=n,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(e){e??=this.selectionStart;let t=this.findLineBoundaryLeft(e),n=this.findLineBoundaryRight(e);this.selectionStart=t,this.selectionEnd=n,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(e){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire(`editing:entered`,e?{e}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire(`text:editing:entered`,{target:this,e}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(e){if(this.getActiveControl())return;let t=this.hiddenTextarea;_t(t).activeElement!==t&&t.focus();let n=this.getSelectionStartFromPointer(e),r=this.selectionStart,i=this.selectionEnd;(n===this.__selectionStartOnMouseDown&&r!==i||r!==n&&i!==n)&&(n>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=n):(this.selectionStart=n,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===r&&this.selectionEnd===i||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor=`text`,this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor=`text`),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(e,t,n){let r=n.slice(0,e),i=this.graphemeSplit(r).length;if(e===t)return{selectionStart:i,selectionEnd:i};let a=n.slice(e,t);return{selectionStart:i,selectionEnd:i+this.graphemeSplit(a).length}}fromGraphemeToStringSelection(e,t,n){let r=n.slice(0,e).join(``).length;return e===t?{selectionStart:r,selectionEnd:r}:{selectionStart:r,selectionEnd:r+n.slice(e,t).join(``).length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let e=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=e.selectionStart,this.hiddenTextarea.selectionEnd=e.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){let{hiddenTextarea:e,direction:t,textAlign:n,inCompositionMode:r}=this;if(!e)return;let i=n===`justify`?t===`ltr`?ne:ie:n.replace(`justify-`,``),a=this.getPositionByOrigin(i,`top`);this.cursorOffsetCache={},this.text=e.value,this.set(`dirty`,!0),this.initDimensions(),this.setPositionByOrigin(a,i,`top`),this.setCoords();let o=this.fromStringToGraphemeSelection(e.selectionStart,e.selectionEnd,e.value);this.selectionEnd=this.selectionStart=o.selectionEnd,r||(this.selectionStart=o.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let e=this._calcTextareaPosition();this.hiddenTextarea.style.left=e.left,this.hiddenTextarea.style.top=e.top}}_calcTextareaPosition(){if(!this.canvas)return{left:`1px`,top:`1px`};let e=this.inCompositionMode?this.compositionStart:this.selectionStart,t=this._getCursorBoundaries(e),n=this.get2DCursorLocation(e),r=n.lineIndex,i=n.charIndex,a=this.getValueOfPropertyAt(r,i,`fontSize`)*this.lineHeight,o=t.leftOffset,s=this.getCanvasRetinaScaling(),c=this.canvas.upperCanvasEl,l=c.width/s,u=c.height/s,d=l-a,f=u-a,p=new q(t.left+o,t.top+t.topOffset+a).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new q(c.clientWidth/l,c.clientHeight/u));return p.x<0&&(p.x=0),p.x>d&&(p.x=d),p.y<0&&(p.y=0),p.y>f&&(p.y=f),p.x+=this.canvas._offset.left,p.y+=this.canvas._offset.top,{left:`${p.x}px`,top:`${p.y}px`,fontSize:`${a}px`,charHeight:a}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}exitEditingImpl(){let e=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,e&&(e.blur&&e.blur(),e.parentNode&&e.parentNode.removeChild(e)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let e=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire(`editing:exited`),e&&this.fire(`modified`),this.canvas&&(this.canvas.fire(`text:editing:exited`,{target:this}),e&&this.canvas.fire(`object:modified`,{target:this})),this}_removeExtraneousStyles(){for(let e in this.styles)this._textLines[e]||delete this.styles[e]}removeStyleFromTo(e,t){let{lineIndex:n,charIndex:r}=this.get2DCursorLocation(e,!0),{lineIndex:i,charIndex:a}=this.get2DCursorLocation(t,!0);if(n!==i){if(this.styles[n])for(let e=r;e<this._unwrappedTextLines[n].length;e++)delete this.styles[n][e];if(this.styles[i])for(let e=a;e<this._unwrappedTextLines[i].length;e++){let t=this.styles[i][e];t&&(this.styles[n]||(this.styles[n]={}),this.styles[n][r+e-a]=t)}for(let e=n+1;e<=i;e++)delete this.styles[e];this.shiftLineStyles(i,n-i)}else if(this.styles[n]){let e=this.styles[n],t=a-r;for(let t=r;t<a;t++)delete e[t];for(let r in this.styles[n]){let n=parseInt(r,10);n>=a&&(e[n-t]=e[r],delete e[r])}}}shiftLineStyles(e,t){let n=Object.assign({},this.styles);for(let r in this.styles){let i=parseInt(r,10);i>e&&(this.styles[i+t]=n[i],n[i-t]||delete this.styles[i])}}insertNewlineStyleObject(e,t,n,r){let i={},a=this._unwrappedTextLines[e].length,o=a===t,s=!1;n||=1,this.shiftLineStyles(e,n);let c=this.styles[e]?this.styles[e][t===0?t:t-1]:void 0;for(let n in this.styles[e]){let r=parseInt(n,10);r>=t&&(s=!0,i[r-t]=this.styles[e][n],o&&t===0||delete this.styles[e][n])}let l=!1;for(s&&!o&&(this.styles[e+n]=i,l=!0),(l||a>t)&&n--;n>0;)r&&r[n-1]?this.styles[e+n]={0:{...r[n-1]}}:c?this.styles[e+n]={0:{...c}}:delete this.styles[e+n],n--;this._forceClearCache=!0}insertCharStyleObject(e,t,n,r){this.styles||={};let i=this.styles[e],a=i?{...i}:{};n||=1;for(let e in a){let r=parseInt(e,10);r>=t&&(i[r+n]=a[r],a[r-n]||delete i[r])}if(this._forceClearCache=!0,r){for(;n--;)Object.keys(r[n]).length&&(this.styles[e]||(this.styles[e]={}),this.styles[e][t+n]={...r[n]});return}if(!i)return;let o=i[t?t-1:1];for(;o&&n--;)this.styles[e][t+n]={...o}}insertNewStyleBlock(e,t,n){let r=this.get2DCursorLocation(t,!0),i=[0],a,o=0;for(let t=0;t<e.length;t++)e[t]===`
`?(o++,i[o]=0):i[o]++;for(i[0]>0&&(this.insertCharStyleObject(r.lineIndex,r.charIndex,i[0],n),n&&=n.slice(i[0]+1)),o&&this.insertNewlineStyleObject(r.lineIndex,r.charIndex+i[0],o),a=1;a<o;a++)i[a]>0?this.insertCharStyleObject(r.lineIndex+a,0,i[a],n):n&&this.styles[r.lineIndex+a]&&n[0]&&(this.styles[r.lineIndex+a][0]=n[0]),n&&=n.slice(i[a]+1);i[a]>0&&this.insertCharStyleObject(r.lineIndex+a,0,i[a],n)}removeChars(e,t=e+1){this.removeStyleFromTo(e,t),this._text.splice(e,t-e),this.text=this._text.join(``),this.set(`dirty`,!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(e,t,n,r=n){r>n&&this.removeStyleFromTo(n,r);let i=this.graphemeSplit(e);this.insertNewStyleBlock(i,n,t),this._text=[...this._text.slice(0,n),...i,...this._text.slice(r)],this.text=this._text.join(``),this.set(`dirty`,!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(e,t,n){n<=e?(t===e?this._selectionDirection=ne:this._selectionDirection===`right`&&(this._selectionDirection=ne,this.selectionEnd=e),this.selectionStart=n):n>e&&n<t?this._selectionDirection===`right`?this.selectionEnd=n:this.selectionStart=n:(t===e?this._selectionDirection=ie:this._selectionDirection===`left`&&(this._selectionDirection=ie,this.selectionStart=t),this.selectionEnd=n)}},ds=class extends us{initHiddenTextarea(){let e=this.canvas&&_t(this.canvas.getElement())||M(),t=e.createElement(`textarea`);Object.entries({autocapitalize:`off`,autocorrect:`off`,autocomplete:`off`,spellcheck:`false`,"data-fabric":`textarea`,wrap:`off`,name:`fabricTextarea`}).map(([e,n])=>t.setAttribute(e,n));let{top:n,left:r,fontSize:i}=this._calcTextareaPosition();t.style.cssText=`position: absolute; top: ${n}; left: ${r}; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ${i};`,(this.hiddenTextareaContainer||e.body).appendChild(t),Object.entries({blur:`blur`,keydown:`onKeyDown`,keyup:`onKeyUp`,input:`onInput`,copy:`copy`,cut:`copy`,paste:`paste`,compositionstart:`onCompositionStart`,compositionupdate:`onCompositionUpdate`,compositionend:`onCompositionEnd`}).map(([e,n])=>t.addEventListener(e,this[n].bind(this))),this.hiddenTextarea=t}blur(){this.abortCursorAnimation()}onKeyDown(e){if(!this.isEditing)return;let t=this.direction===`rtl`?this.keysMapRtl:this.keysMap;if(e.keyCode in t)this[t[e.keyCode]](e);else{if(!(e.keyCode in this.ctrlKeysMapDown)||!e.ctrlKey&&!e.metaKey)return;this[this.ctrlKeysMapDown[e.keyCode]](e)}e.stopImmediatePropagation(),e.preventDefault(),e.keyCode>=33&&e.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(e){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:e.keyCode in this.ctrlKeysMapUp&&(e.ctrlKey||e.metaKey)&&(this[this.ctrlKeysMapUp[e.keyCode]](e),e.stopImmediatePropagation(),e.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(e){let t=this.fromPaste,{value:n,selectionStart:r,selectionEnd:i}=this.hiddenTextarea;if(this.fromPaste=!1,e&&e.stopPropagation(),!this.isEditing)return;let a=()=>{this.updateFromTextArea(),this.fire(me),this.canvas&&(this.canvas.fire(`text:changed`,{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value===``)return this.styles={},void a();let o=this._splitTextIntoLines(n).graphemeText,s=this._text.length,c=o.length,l=this.selectionStart,u=this.selectionEnd,d=l!==u,f,p,m,h,g=c-s,_=this.fromStringToGraphemeSelection(r,i,n),v=l>_.selectionStart;d?(p=this._text.slice(l,u),g+=u-l):c<s&&(p=v?this._text.slice(u+g,u):this._text.slice(l,l-g));let y=o.slice(_.selectionEnd-g,_.selectionEnd);if(p&&p.length&&(y.length&&(f=this.getSelectionStyles(l,l+1,!1),f=y.map(()=>f[0])),d?(m=l,h=u):v?(m=u-p.length,h=u):(m=u,h=u+p.length),this.removeStyleFromTo(m,h)),y.length){let{copyPasteData:e}=j();t&&y.join(``)===e.copiedText&&!C.disableStyleCopyPaste&&(f=e.copiedTextStyle),this.insertNewStyleBlock(y,l,f)}a()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate({target:e}){let{selectionStart:t,selectionEnd:n}=e;this.compositionStart=t,this.compositionEnd=n,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:e}=j();e.copiedText=this.getSelectedText(),e.copiedTextStyle=C.disableStyleCopyPaste?void 0:this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(e,t){let n,r=this._getLineLeftOffset(e);return t>0&&(n=this.__charBounds[e][t-1],r+=n.left+n.width),r}getDownCursorOffset(e,t){let n=this._getSelectionForOffset(e,t),r=this.get2DCursorLocation(n),i=r.lineIndex;if(i===this._textLines.length-1||e.metaKey||e.keyCode===34)return this._text.length-n;let a=r.charIndex,o=this._getWidthBeforeCursor(i,a),s=this._getIndexOnLine(i+1,o);return this._textLines[i].slice(a).length+s+1+this.missingNewlineOffset(i)}_getSelectionForOffset(e,t){return e.shiftKey&&this.selectionStart!==this.selectionEnd&&t?this.selectionEnd:this.selectionStart}getUpCursorOffset(e,t){let n=this._getSelectionForOffset(e,t),r=this.get2DCursorLocation(n),i=r.lineIndex;if(i===0||e.metaKey||e.keyCode===33)return-n;let a=r.charIndex,o=this._getWidthBeforeCursor(i,a),s=this._getIndexOnLine(i-1,o),c=this._textLines[i].slice(0,a),l=this.missingNewlineOffset(i-1);return-this._textLines[i-1].length+s-c.length+(1-l)}_getIndexOnLine(e,t){let n=this._textLines[e],r,i,a=this._getLineLeftOffset(e),o=0;for(let s=0,c=n.length;s<c;s++)if(r=this.__charBounds[e][s].width,a+=r,a>t){i=!0;let e=a-r,n=a,c=Math.abs(e-t);o=Math.abs(n-t)<c?s:s-1;break}return i||(o=n.length-1),o}moveCursorDown(e){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown(`Down`,e)}moveCursorUp(e){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown(`Up`,e)}_moveCursorUpOrDown(e,t){let n=this[`get${e}CursorOffset`](t,this._selectionDirection===ie);if(t.shiftKey?this.moveCursorWithShift(n):this.moveCursorWithoutShift(n),n!==0){let e=this.text.length;this.selectionStart=Qn(0,this.selectionStart,e),this.selectionEnd=Qn(0,this.selectionEnd,e),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(e){let t=this._selectionDirection===`left`?this.selectionStart+e:this.selectionEnd+e;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,t),e!==0}moveCursorWithoutShift(e){return e<0?(this.selectionStart+=e,this.selectionEnd=this.selectionStart):(this.selectionEnd+=e,this.selectionStart=this.selectionEnd),e!==0}moveCursorLeft(e){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight(`Left`,e)}_move(e,t,n){let r;if(e.altKey)r=this[`findWordBoundary${n}`](this[t]);else{if(!e.metaKey&&e.keyCode!==35&&e.keyCode!==36)return this[t]+=n===`Left`?-1:1,!0;r=this[`findLineBoundary${n}`](this[t])}return r!==void 0&&this[t]!==r&&(this[t]=r,!0)}_moveLeft(e,t){return this._move(e,t,`Left`)}_moveRight(e,t){return this._move(e,t,`Right`)}moveCursorLeftWithoutShift(e){let t=!0;return this._selectionDirection=ne,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(t=this._moveLeft(e,`selectionStart`)),this.selectionEnd=this.selectionStart,t}moveCursorLeftWithShift(e){return this._selectionDirection===`right`&&this.selectionStart!==this.selectionEnd?this._moveLeft(e,`selectionEnd`):this.selectionStart===0?void 0:(this._selectionDirection=ne,this._moveLeft(e,`selectionStart`))}moveCursorRight(e){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight(`Right`,e)}_moveCursorLeftOrRight(e,t){let n=`moveCursor${e}${t.shiftKey?`WithShift`:`WithoutShift`}`;this._currentCursorOpacity=1,this[n](t)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(e){return this._selectionDirection===`left`&&this.selectionStart!==this.selectionEnd?this._moveRight(e,`selectionStart`):this.selectionEnd===this._text.length?void 0:(this._selectionDirection=ie,this._moveRight(e,`selectionEnd`))}moveCursorRightWithoutShift(e){let t=!0;return this._selectionDirection=ie,this.selectionStart===this.selectionEnd?(t=this._moveRight(e,`selectionStart`),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,t}},fs=e=>!!e.button,ps=class extends ds{constructor(...e){super(...e),x(this,`draggableTextDelegate`,void 0)}initBehavior(){this.on(`mousedown`,this._mouseDownHandler),this.on(`mouseup`,this.mouseUpHandler),this.on(`mousedblclick`,this.doubleClickHandler),this.on(`mousetripleclick`,this.tripleClickHandler),this.draggableTextDelegate=new cs(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(e){return this.draggableTextDelegate.onDragStart(e)}canDrop(e){return this.draggableTextDelegate.canDrop(e)}doubleClickHandler(e){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(e.e)),this.renderCursorOrSelection())}tripleClickHandler(e){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(e.e)),this.renderCursorOrSelection())}_mouseDownHandler({e,alreadySelected:t}){this.canvas&&this.editable&&!fs(e)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(e)||(this.canvas.textEditingManager.register(this),t&&(this.inCompositionMode=!1,this.setCursorByClick(e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||=t||this.isEditing))}mouseUpHandler({e,transform:t}){let n=this.draggableTextDelegate.end(e);if(this.canvas){this.canvas.textEditingManager.unregister(this);let e=this.canvas._activeObject;if(e&&e!==this)return}!this.editable||this.group&&!this.group.interactive||t&&t.actionPerformed||fs(e)||n||this.selected&&!this.getActiveControl()&&(this.enterEditing(e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(e){let t=this.getSelectionStartFromPointer(e),n=this.selectionStart,r=this.selectionEnd;e.shiftKey?this.setSelectionStartEndWithShift(n,r,t):(this.selectionStart=t,this.selectionEnd=t),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(e){let t=this.canvas.getScenePoint(e).transform(We(this.calcTransformMatrix())).add(new q(-this._getLeftOffset(),-this._getTopOffset())),n=0,r=0,i=0;for(let e=0;e<this._textLines.length&&n<=t.y;e++)n+=this.getHeightOfLine(e),i=e,e>0&&(r+=this._textLines[e-1].length+this.missingNewlineOffset(e-1));let a=Math.abs(this._getLineLeftOffset(i)),o=this._textLines[i].length,s=this.__charBounds[i];for(let e=0;e<o;e++){let n=a+s[e].kernedWidth;if(t.x<=n){Math.abs(t.x-n)<=Math.abs(t.x-a)&&r++;break}a=n,r++}return Math.min(this.flipX?o-r:r,this._text.length)}},ms=`moveCursorUp`,hs=`moveCursorDown`,gs=`moveCursorLeft`,_s=`moveCursorRight`,vs=`exitEditing`,ys=(e,t)=>{let n=t.getRetinaScaling();e.setTransform(n,0,0,n,0,0);let r=t.viewportTransform;e.transform(r[0],r[1],r[2],r[3],r[4],r[5])},bs={selectionStart:0,selectionEnd:0,selectionColor:`rgba(17,119,255,0.3)`,isEditing:!1,editable:!0,editingBorderColor:`rgba(102,153,255,0.25)`,cursorWidth:2,cursorColor:``,cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:vs,27:vs,33:ms,34:hs,35:_s,36:gs,37:gs,38:ms,39:_s,40:hs},keysMapRtl:{9:vs,27:vs,33:ms,34:hs,35:gs,36:_s,37:_s,38:ms,39:gs,40:hs},ctrlKeysMapDown:{65:`cmdAll`},ctrlKeysMapUp:{67:`copy`,88:`cut`},_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1},xs=class e extends ps{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}get type(){let e=super.type;return e===`itext`?`i-text`:e}constructor(t,n){super(t,{...e.ownDefaults,...n}),this.initBehavior()}_set(e,t){return this.isEditing&&this._savedProps&&e in this._savedProps?(this._savedProps[e]=t,this):(e===`canvas`&&(this.canvas instanceof ko&&this.canvas.textEditingManager.remove(this),t instanceof ko&&t.textEditingManager.add(this)),super._set(e,t))}setSelectionStart(e){e=Math.max(e,0),this._updateAndFire(`selectionStart`,e)}setSelectionEnd(e){e=Math.min(e,this.text.length),this._updateAndFire(`selectionEnd`,e)}_updateAndFire(e,t){this[e]!==t&&(this._fireSelectionChanged(),this[e]=t),this._updateTextarea()}_fireSelectionChanged(){this.fire(`selection:changed`),this.canvas&&this.canvas.fire(`text:selection:changed`,{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(e=this.selectionStart||0,t=this.selectionEnd,n){return super.getSelectionStyles(e,t,n)}setSelectionStyles(e,t=this.selectionStart||0,n=this.selectionEnd){return super.setSelectionStyles(e,t,n)}get2DCursorLocation(e=this.selectionStart,t){return super.get2DCursorLocation(e,t)}render(e){super.render(e),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(e){let t=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(e);return this.isEditing=t,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let e=this.clearContextTop(!0);if(!e)return;let t=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),r=n.length>0,i,a=e;if(r){i=Le(e.canvas),a=i.getContext(`2d`),ys(a,this.canvas);let t=this.calcTransformMatrix();a.transform(t[0],t[1],t[2],t[3],t[4],t[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(a,t):this.renderCursor(a,t),r)for(let t of n){let n=t.clipPath,r=Le(e.canvas),i=r.getContext(`2d`);if(ys(i,this.canvas),!n.absolutePositioned){let e=t.calcTransformMatrix();i.transform(e[0],e[1],e[2],e[3],e[4],e[5])}n.transform(i),n.drawObject(i,!0,{}),this.drawClipPathOnCache(a,n,r)}r&&(e.setTransform(1,0,0,1,0,0),e.drawImage(i,0,0)),this.canvas.contextTopDirty=!0,e.restore()}findAncestorsWithClipPath(){let e=[],t=this;for(;t;)t.clipPath&&e.push(t),t=t.parent;return e}_getCursorBoundaries(e=this.selectionStart,t){let n=this._getLeftOffset(),r=this._getTopOffset(),i=this._getCursorBoundariesOffsets(e,t);return{left:n,top:r,leftOffset:i.left,topOffset:i.top}}_getCursorBoundariesOffsets(e,t){return t?this.__getCursorBoundariesOffsets(e):this.cursorOffsetCache&&`top`in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(e)}__getCursorBoundariesOffsets(e){let t=0,n=0,{charIndex:r,lineIndex:i}=this.get2DCursorLocation(e),{textAlign:a,direction:o}=this;for(let e=0;e<i;e++)t+=this.getHeightOfLine(e);let s=this._getLineLeftOffset(i),c=this.__charBounds[i][r];c&&(n=c.left),this.charSpacing!==0&&r===this._textLines[i].length&&(n-=this._getWidthOfCharSpacing());let l=s+(n>0?n:0);return o===`rtl`&&(a===`right`||a===`justify`||a===`justify-right`?l*=-1:a===`left`||a===`justify-left`?l=s-(n>0?n:0):a!==`center`&&a!==`justify-center`||(l=s-(n>0?n:0))),{top:t,left:l}}renderCursorAt(e){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(e,!0),e)}renderCursor(e,t){this._renderCursor(e,t,this.selectionStart)}getCursorRenderingData(e=this.selectionStart,t=this._getCursorBoundaries(e)){let n=this.get2DCursorLocation(e),r=n.lineIndex,i=n.charIndex>0?n.charIndex-1:0,a=this.getValueOfPropertyAt(r,i,`fontSize`),o=this.getObjectScaling().x*this.canvas.getZoom(),s=this.cursorWidth/o,c=this.getValueOfPropertyAt(r,i,`deltaY`),l=t.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(r)/this.lineHeight-a*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(r,i,`fill`),opacity:this._currentCursorOpacity,left:t.left+t.leftOffset-s/2,top:l+t.top+c,width:s,height:a}}_renderCursor(e,t,n){let{color:r,opacity:i,left:a,top:o,width:s,height:c}=this.getCursorRenderingData(n,t);e.fillStyle=r,e.globalAlpha=i,e.fillRect(a,o,s,c)}renderSelection(e,t){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(e,n,t)}renderDragSourceEffect(){let e=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,e,this._getCursorBoundaries(e.selectionStart,!0))}renderDropTargetEffect(e){let t=this.getSelectionStartFromPointer(e);this.renderCursorAt(t)}_renderSelection(e,t,n){let{textAlign:r,direction:i}=this,a=t.selectionStart,o=t.selectionEnd,s=r.includes(Vn),c=this.get2DCursorLocation(a),l=this.get2DCursorLocation(o),u=c.lineIndex,d=l.lineIndex,f=c.charIndex<0?0:c.charIndex,p=l.charIndex<0?0:l.charIndex;for(let t=u;t<=d;t++){let a=this._getLineLeftOffset(t)||0,o=this.getHeightOfLine(t),c=0,l=0;if(t===u&&(c=this.__charBounds[u][f].left),t>=u&&t<d)l=s&&!this.isEndOfWrapping(t)?this.width:this.getLineWidth(t)||5;else if(t===d){if(p===0)l=this.__charBounds[d][p].left;else{let e=this._getWidthOfCharSpacing();l=this.__charBounds[d][p-1].left+this.__charBounds[d][p-1].width-e}}let m=o;(this.lineHeight<1||t===d&&this.lineHeight>1)&&(o/=this.lineHeight);let h=n.left+a+c,g=o,_=0,v=l-c;this.inCompositionMode?(e.fillStyle=this.compositionColor||`black`,g=1,_=o):e.fillStyle=this.selectionColor,i===`rtl`&&(r===`right`||r===`justify`||r===`justify-right`?h=this.width-h-v:r===`left`||r===`justify-left`?h=n.left+a-l:r!==`center`&&r!==`justify-center`||(h=n.left+a-l)),e.fillRect(h,n.top+n.topOffset+_,v,g),n.topOffset+=m}}getCurrentCharFontSize(){let e=this._getCurrentCharIndex();return this.getValueOfPropertyAt(e.l,e.c,`fontSize`)}getCurrentCharColor(){let e=this._getCurrentCharIndex();return this.getValueOfPropertyAt(e.l,e.c,U)}_getCurrentCharIndex(){let e=this.get2DCursorLocation(this.selectionStart,!0),t=e.charIndex>0?e.charIndex-1:0;return{l:e.lineIndex,c:t}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};x(xs,`ownDefaults`,bs),x(xs,`type`,`IText`),K.setClass(xs),K.setClass(xs,`i-text`);var Ss=class e extends xs{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t,n){super(t,{...e.ownDefaults,...n})}static createControls(){return{controls:Oi()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set(`width`,this.dynamicMinWidth),this.textAlign.includes(`justify`)&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(e){let t=0,n=0,r=0,i={};for(let a=0;a<e.graphemeLines.length;a++)e.graphemeText[r]===`
`&&a>0?(n=0,r++,t++):!this.splitByGrapheme&&this._reSpaceAndTab.test(e.graphemeText[r])&&a>0&&(n++,r++),i[a]={line:t,offset:n},r+=e.graphemeLines[a].length,n+=e.graphemeLines[a].length;return i}styleHas(e,t){if(this._styleMap&&!this.isWrapping){let e=this._styleMap[t];e&&(t=e.line)}return super.styleHas(e,t)}isEmptyStyles(e){if(!this.styles)return!0;let t,n,r=0,i=!1,a=this._styleMap[e],o=this._styleMap[e+1];a&&(e=a.line,r=a.offset),o&&(t=o.line,i=t===e,n=o.offset);let s=e===void 0?this.styles:{line:this.styles[e]};for(let e in s)for(let t in s[e]){let a=parseInt(t,10);if(a>=r&&(!i||a<n))for(let n in s[e][t])return!1}return!0}_getStyleDeclaration(e,t){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];if(!n)return{};e=n.line,t=n.offset+t}return super._getStyleDeclaration(e,t)}_setStyleDeclaration(e,t,n){let r=this._styleMap[e];super._setStyleDeclaration(r.line,r.offset+t,n)}_deleteStyleDeclaration(e,t){let n=this._styleMap[e];super._deleteStyleDeclaration(n.line,n.offset+t)}_getLineStyle(e){let t=this._styleMap[e];return!!this.styles[t.line]}_setLineStyle(e){let t=this._styleMap[e];super._setLineStyle(t.line)}_wrapText(e,t){this.isWrapping=!0;let n=this.getGraphemeDataForRender(e),r=[];for(let e=0;e<n.wordsData.length;e++)r.push(...this._wrapLine(e,t,n));return this.isWrapping=!1,r}getGraphemeDataForRender(e){let t=this.splitByGrapheme,n=t?``:` `,r=0;return{wordsData:e.map((e,i)=>{let a=0,o=t?this.graphemeSplit(e):this.wordSplit(e);return o.length===0?[{word:[],width:0}]:o.map(e=>{let o=t?[e]:this.graphemeSplit(e),s=this._measureWord(o,i,a);return r=Math.max(s,r),a+=o.length+n.length,{word:o,width:s}})}),largestWordWidth:r}}_measureWord(e,t,n=0){let r,i=0;for(let a=0,o=e.length;a<o;a++)i+=this._getGraphemeBox(e[a],t,a+n,r,!0).kernedWidth,r=e[a];return i}wordSplit(e){return e.split(this._wordJoiners)}_wrapLine(e,t,{largestWordWidth:n,wordsData:r},i=0){let a=this._getWidthOfCharSpacing(),o=this.splitByGrapheme,s=[],c=o?``:` `,l=0,u=[],d=0,f=0,p=!0;t-=i;let m=Math.max(t,n,this.dynamicMinWidth),h=r[e],g;for(g=0;g<h.length;g++){let{word:t,width:n}=h[g];d+=t.length,l+=f+n-a,l>m&&!p?(s.push(u),u=[],l=n,p=!0):l+=a,p||o||u.push(c),u=u.concat(t),f=o?0:this._measureWord([c],e,d),d++,p=!1}return g&&s.push(u),n+i>this.dynamicMinWidth&&(this.dynamicMinWidth=n-a+i),s}isEndOfWrapping(e){return!this._styleMap[e+1]||this._styleMap[e+1].line!==this._styleMap[e].line}missingNewlineOffset(e,t){return this.splitByGrapheme&&!t?+!!this.isEndOfWrapping(e):1}_splitTextIntoLines(e){let t=super._splitTextIntoLines(e),n=this._wrapText(t.lines,this.width),r=Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e].join(``);return t.lines=r,t.graphemeLines=n,t}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let e=new Map;for(let t in this._styleMap){let n=parseInt(t,10);if(this._textLines[n]){let n=this._styleMap[t].line;e.set(`${n}`,!0)}}for(let t in this.styles)e.has(t)||delete this.styles[t]}toObject(e=[]){return super.toObject([`minWidth`,`splitByGrapheme`,...e])}};x(Ss,`type`,`Textbox`),x(Ss,`textLayoutProperties`,[...xs.textLayoutProperties,`width`]),x(Ss,`ownDefaults`,{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),K.setClass(Ss);var Cs=class extends _a{shouldPerformLayout(e){return!!e.target.clipPath&&super.shouldPerformLayout(e)}shouldLayoutClipPath(){return!1}calcLayoutResult(e,t){let{target:n}=e,{clipPath:r,group:i}=n;if(!r||!this.shouldPerformLayout(e))return;let{width:a,height:o}=It(ga(n,r)),s=new q(a,o);if(r.absolutePositioned)return{center:Wt(r.getRelativeCenterPoint(),void 0,i?i.calcTransformMatrix():void 0),size:s};{let i=r.getRelativeCenterPoint().transform(n.calcOwnMatrix(),!0);if(this.shouldPerformLayout(e)){let{center:n=new q,correction:r=new q}=this.calcBoundingBox(t,e)||{};return{center:n.add(i),correction:r.subtract(i),size:s}}return{center:n.getRelativeCenterPoint().add(i),size:s}}}};x(Cs,`type`,`clip-path`),K.setClass(Cs);var ws=class extends _a{getInitialSize({target:e},{size:t}){return new q(e.width||t.x,e.height||t.y)}};x(ws,`type`,`fixed`),K.setClass(ws);var Ts=class extends ba{subscribeTargets(e){let t=e.target;e.targets.reduce((e,t)=>(t.parent&&e.add(t.parent),e),new Set).forEach(e=>{e.layoutManager.subscribeTargets({target:e,targets:[t]})})}unsubscribeTargets(e){let t=e.target,n=t.getObjects();e.targets.reduce((e,t)=>(t.parent&&e.add(t.parent),e),new Set).forEach(e=>{!n.some(t=>t.parent===e)&&e.layoutManager.unsubscribeTargets({target:e,targets:[t]})})}},Es=class e extends Sa{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t=[],n={}){super(),Object.assign(this,e.ownDefaults),this.setOptions(n);let{left:r,top:i,layoutManager:a}=n;this.groupInit(t,{left:r,top:i,layoutManager:a??new Ts})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(...e){this.multiSelectionStacking===`selection-order`?this.add(...e):e.forEach(e=>{let t=this._objects.findIndex(t=>t.isInFrontOf(e)),n=t===-1?this.size():t;this.insertAt(n,e)})}canEnterGroup(e){return this.getObjects().some(t=>t.isDescendantOf(e)||e.isDescendantOf(t))?(w(`error`,`ActiveSelection: circular object trees are not supported, this call has no effect`),!1):super.canEnterGroup(e)}enterGroup(e,t){e.parent&&e.parent===e.group?e.parent._exitGroup(e):e.group&&e.parent!==e.group&&e.group.remove(e),this._enterGroup(e,t)}exitGroup(e,t){this._exitGroup(e,t),e.parent&&e.parent._enterGroup(e,!0)}_onAfterObjectsChange(e,t){super._onAfterObjectsChange(e,t);let n=new Set;t.forEach(e=>{let{parent:t}=e;t&&n.add(t)}),e===`removed`?n.forEach(e=>{e._onAfterObjectsChange(ha,t)}):n.forEach(e=>{e._set(`dirty`,!0)})}onDeselect(){return this.removeAll(),!1}toString(){return`#<ActiveSelection: (${this.complexity()})>`}shouldCache(){return!1}isOnACache(){return!1}_renderControls(e,t,n){e.save(),e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let r={hasControls:!1,...n,forActiveSelection:!0};for(let t=0;t<this._objects.length;t++)this._objects[t]._renderControls(e,r);super._renderControls(e,t),e.restore()}};x(Es,`type`,`ActiveSelection`),x(Es,`ownDefaults`,{multiSelectionStacking:`canvas-stacking`}),K.setClass(Es),K.setClass(Es,`activeSelection`);var Ds=class{constructor(){x(this,`resources`,{})}applyFilters(e,t,n,r,i){let a=i.getContext(`2d`,{willReadFrequently:!0,desynchronized:!0});if(!a)return;a.drawImage(t,0,0,n,r);let o={sourceWidth:n,sourceHeight:r,imageData:a.getImageData(0,0,n,r),originalEl:t,originalImageData:a.getImageData(0,0,n,r),canvasEl:i,ctx:a,filterBackend:this};e.forEach(e=>{e.applyTo(o)});let{imageData:s}=o;return s.width===n&&s.height===r||(i.width=s.width,i.height=s.height),a.putImageData(s,0,0),o}},Os=class{constructor({tileSize:e=C.textureSize}={}){x(this,`aPosition`,new Float32Array([0,0,0,1,1,0,1,1])),x(this,`resources`,{}),this.tileSize=e,this.setupGLContext(e,e),this.captureGPUInfo()}setupGLContext(e,t){this.dispose(),this.createWebGLCanvas(e,t)}createWebGLCanvas(e,t){let n=Le({width:e,height:t}),r=n.getContext(`webgl`,{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});r&&(r.clearColor(0,0,0,0),this.canvas=n,this.gl=r)}applyFilters(e,t,n,r,i,a){let o=this.gl,s=i.getContext(`2d`);if(!o||!s)return;let c;a&&(c=this.getCachedTexture(a,t));let l={originalWidth:t.width||t.naturalWidth||0,originalHeight:t.height||t.naturalHeight||0,sourceWidth:n,sourceHeight:r,destinationWidth:n,destinationHeight:r,context:o,sourceTexture:this.createTexture(o,n,r,c?void 0:t),targetTexture:this.createTexture(o,n,r),originalTexture:c||this.createTexture(o,n,r,c?void 0:t),passes:e.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:i},u=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,u),e.forEach(e=>{e&&e.applyTo(l)}),function(e){let t=e.targetCanvas,n=t.width,r=t.height,i=e.destinationWidth,a=e.destinationHeight;n===i&&r===a||(t.width=i,t.height=a)}(l),this.copyGLTo2D(o,l),o.bindTexture(o.TEXTURE_2D,null),o.deleteTexture(l.sourceTexture),o.deleteTexture(l.targetTexture),o.deleteFramebuffer(u),s.setTransform(1,0,0,1,0,0),l}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(e,t,n,r,i){let{NEAREST:a,TEXTURE_2D:o,RGBA:s,UNSIGNED_BYTE:c,CLAMP_TO_EDGE:l,TEXTURE_MAG_FILTER:u,TEXTURE_MIN_FILTER:d,TEXTURE_WRAP_S:f,TEXTURE_WRAP_T:p}=e,m=e.createTexture();return e.bindTexture(o,m),e.texParameteri(o,u,i||a),e.texParameteri(o,d,i||a),e.texParameteri(o,f,l),e.texParameteri(o,p,l),r?e.texImage2D(o,0,s,s,c,r):e.texImage2D(o,0,s,t,n,0,s,c,null),m}getCachedTexture(e,t,n){let{textureCache:r}=this;if(r[e])return r[e];{let i=this.createTexture(this.gl,t.width,t.height,t,n);return i&&(r[e]=i),i}}evictCachesForKey(e){this.textureCache[e]&&(this.gl.deleteTexture(this.textureCache[e]),delete this.textureCache[e])}copyGLTo2D(e,t){let n=e.canvas,r=t.targetCanvas,i=r.getContext(`2d`);if(!i)return;i.translate(0,r.height),i.scale(1,-1);let a=n.height-r.height;i.drawImage(n,0,a,r.width,r.height,0,0,r.width,r.height)}copyGLTo2DPutImageData(e,t){let n=t.targetCanvas.getContext(`2d`),r=t.destinationWidth,i=t.destinationHeight,a=r*i*4;if(!n)return;let o=new Uint8Array(this.imageBuffer,0,a),s=new Uint8ClampedArray(this.imageBuffer,0,a);e.readPixels(0,0,r,i,e.RGBA,e.UNSIGNED_BYTE,o);let c=new ImageData(s,r,i);n.putImageData(c,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let e=this.gl,t={renderer:``,vendor:``};if(!e)return t;let n=e.getExtension(`WEBGL_debug_renderer_info`);if(n){let r=e.getParameter(n.UNMASKED_RENDERER_WEBGL),i=e.getParameter(n.UNMASKED_VENDOR_WEBGL);r&&(t.renderer=r.toLowerCase()),i&&(t.vendor=i.toLowerCase())}return this.gpuInfo=t,t}},ks;function As(){let{WebGLProbe:e}=j();return e.queryWebGL(Pe()),C.enableGLFiltering&&e.isSupported(C.textureSize)?new Os({tileSize:C.textureSize}):new Ds}function js(e=!0){return!ks&&e&&(ks=As()),ks}var Ms=[`cropX`,`cropY`],Ns=class e extends ji{static getDefaults(){return{...super.getDefaults(),...e.ownDefaults}}constructor(t,n){super(),x(this,`_lastScaleX`,1),x(this,`_lastScaleY`,1),x(this,`_filterScalingX`,1),x(this,`_filterScalingY`,1),this.filters=[],Object.assign(this,e.ownDefaults),this.setOptions(n),this.cacheKey=`texture${Ne()}`,this.setElement(typeof t==`string`?(this.canvas&&_t(this.canvas.getElement())||M()).getElementById(t):t,n)}getElement(){return this._element}setElement(e,t={}){this.removeTexture(this.cacheKey),this.removeTexture(`${this.cacheKey}_filtered`),this._element=e,this._originalElement=e,this._setWidthHeight(t),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(e){let t=js(!1);t instanceof Os&&t.evictCachesForKey(e)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture(`${this.cacheKey}_filtered`),this._cacheContext=null,[`_originalElement`,`_element`,`_filteredEl`,`_cacheCanvas`].forEach(e=>{let t=this[e];t&&j().dispose(t),this[e]=void 0})}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let e=this.getElement();return e?{width:e.naturalWidth||e.width,height:e.naturalHeight||e.height}:{width:0,height:0}}_stroke(e){if(!this.stroke||this.strokeWidth===0)return;let t=this.width/2,n=this.height/2;e.beginPath(),e.moveTo(-t,-n),e.lineTo(t,-n),e.lineTo(t,n),e.lineTo(-t,n),e.lineTo(-t,-n),e.closePath()}toObject(e=[]){let t=[];return this.filters.forEach(e=>{e&&t.push(e.toObject())}),{...super.toObject([...Ms,...e]),src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:t,...this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{}}}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let e=[],t=this._element,n=-this.width/2,r=-this.height/2,i=[],a=[],o=``,s=``;if(!t)return[];if(this.hasCrop()){let e=Ne();i.push(`<clipPath id="imageCrop_`+e+`">
`,`	<rect x="`+n+`" y="`+r+`" width="`+Et(this.width)+`" height="`+Et(this.height)+`" />
`,`</clipPath>
`),o=` clip-path="url(#imageCrop_`+e+`)" `}if(this.imageSmoothing||(s=` image-rendering="optimizeSpeed"`),e.push(`	<image `,`COMMON_PARTS`,`xlink:href="${Et(this.getSrc(!0))}" x="${n-this.cropX}" y="${r-this.cropY}" width="${t.width||t.naturalWidth}" height="${t.height||t.naturalHeight}"${s}${o}></image>\n`),this.stroke||this.strokeDashArray){let e=this.fill;this.fill=null,a=[`\t<rect x="${n}" y="${r}" width="${Et(this.width)}" height="${Et(this.height)}" style="${this.getSvgStyles()}" />\n`],this.fill=e}return i=this.paintFirst===`fill`?i.concat(e,a):i.concat(a,e),i}getSrc(e){let t=e?this._element:this._originalElement;return t?t.toDataURL?t.toDataURL():this.srcFromAttribute?t.getAttribute(`src`)||``:t.src:this.src||``}getSvgSrc(e){return this.getSrc(e)}setSrc(e,{crossOrigin:t,signal:n}={}){return at(e,{crossOrigin:t,signal:n}).then(e=>{t!==void 0&&this.set({crossOrigin:t}),this.setElement(e)})}toString(){return`#<Image: { src: "${this.getSrc()}" }>`}applyResizeFilters(){let e=this.resizeFilter,t=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),r=n.x,i=n.y,a=this._filteredEl||this._originalElement;if(this.group&&this.set(`dirty`,!0),!e||r>t&&i>t)return this._element=a,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=r,void(this._lastScaleY=i);let o=Le(a),{width:s,height:c}=a;this._element=o,this._lastScaleX=e.scaleX=r,this._lastScaleY=e.scaleY=i,js().applyFilters([e],a,s,c,this._element),this._filterScalingX=o.width/this._originalElement.width,this._filterScalingY=o.height/this._originalElement.height}applyFilters(e=this.filters||[]){if(e=e.filter(e=>e&&!e.isNeutralState()),this.set(`dirty`,!0),this.removeTexture(`${this.cacheKey}_filtered`),e.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let t=this._originalElement,n=t.naturalWidth||t.width,r=t.naturalHeight||t.height;if(this._element===this._originalElement){let e=Le({width:n,height:r});this._element=e,this._filteredEl=e}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext(`2d`).clearRect(0,0,n,r),this._lastScaleX=1,this._lastScaleY=1);js().applyFilters(e,this._originalElement,n,r,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(e){e.imageSmoothingEnabled=this.imageSmoothing,!0!==this.isMoving&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(e),this._renderPaintInOrder(e)}drawCacheOnCanvas(e){e.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(e)}shouldCache(){return this.needsItsOwnCache()}_renderFill(e){let t=this._element;if(!t)return;let n=this._filterScalingX,r=this._filterScalingY,i=this.width,a=this.height,o=Math.max(this.cropX,0),s=Math.max(this.cropY,0),c=t.naturalWidth||t.width,l=t.naturalHeight||t.height,u=o*n,d=s*r,f=Math.min(i*n,c-u),p=Math.min(a*r,l-d),m=-i/2,h=-a/2,g=Math.min(i,c/n-o),_=Math.min(a,l/r-s);t&&e.drawImage(t,u,d,f,p,m,h,g,_)}_needsResize(){let e=this.getTotalObjectScaling();return e.x!==this._lastScaleX||e.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight({width:e,height:t}={}){let n=this.getOriginalSize();this.width=e||n.width,this.height=t||n.height}parsePreserveAspectRatioAttribute(){let e=kn(this.preserveAspectRatio||``),t=this.width,n=this.height,r={width:t,height:n},i,a=this._element.width,o=this._element.height,s=1,c=1,l=0,u=0,d=0,f=0;return!e||e.alignX===`none`&&e.alignY===`none`?(s=t/a,c=n/o):(e.meetOrSlice===`meet`&&(s=c=wa(this._element,r),i=(t-a*s)/2,e.alignX===`Min`&&(l=-i),e.alignX===`Max`&&(l=i),i=(n-o*c)/2,e.alignY===`Min`&&(u=-i),e.alignY===`Max`&&(u=i)),e.meetOrSlice===`slice`&&(s=c=Ta(this._element,r),i=a-t/s,e.alignX===`Mid`&&(d=i/2),e.alignX===`Max`&&(d=i),i=o-n/c,e.alignY===`Mid`&&(f=i/2),e.alignY===`Max`&&(f=i),a=t/s,o=n/c)),{width:a,height:o,scaleX:s,scaleY:c,offsetLeft:l,offsetTop:u,cropX:d,cropY:f}}static fromObject({filters:e,resizeFilter:t,src:n,crossOrigin:r,type:i,...a},o){return Promise.all([at(n,{...o,crossOrigin:r}),e&&ot(e,o),t?ot([t],o):[],st(a,o)]).then(([e,t=[],[r],i={}])=>new this(e,{...a,src:n,filters:t,resizeFilter:r,...i}))}static fromURL(e,{crossOrigin:t=null,signal:n}={},r){return at(e,{crossOrigin:t,signal:n}).then(e=>new this(e,r))}static async fromElement(e,t={},n){let r=da(e,this.ATTRIBUTE_NAMES,n);return this.fromURL(r[`xlink:href`]||r.href,t,r).catch(e=>(w(`log`,`Unable to parse Image`,e),null))}};x(Ns,`type`,`Image`),x(Ns,`cacheProperties`,[...er,...Ms]),x(Ns,`ownDefaults`,{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),x(Ns,`ATTRIBUTE_NAMES`,[...Hi,`x`,`y`,`width`,`height`,`preserveAspectRatio`,`xlink:href`,`href`,`crossOrigin`,`image-rendering`]),K.setClass(Ns),K.setSVGClass(Ns),Mn([`pattern`,`defs`,`symbol`,`metadata`,`clipPath`,`mask`,`desc`]);var Ps=e=>e.webgl!==void 0,Fs=`precision highp float`,Is=`\n    ${Fs};\n    varying vec2 vTexCoord;\n    uniform sampler2D uTexture;\n    void main() {\n      gl_FragColor = texture2D(uTexture, vTexCoord);\n    }`,Ls=new RegExp(Fs,`g`),Rs=class{get type(){return this.constructor.type}constructor({type:e,...t}={}){Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return Is}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(e,t=this.getFragmentSource(),n=this.getVertexSource()){let{WebGLProbe:{GLPrecision:r=`highp`}}=j();r!==`highp`&&(t=t.replace(Ls,Fs.replace(`highp`,r)));let i=e.createShader(e.VERTEX_SHADER),a=e.createShader(e.FRAGMENT_SHADER),o=e.createProgram();if(!i||!a||!o)throw new T(`Vertex, fragment shader or program creation error`);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw new T(`Vertex shader compile error for ${this.type}: ${e.getShaderInfoLog(i)}`);if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS))throw new T(`Fragment shader compile error for ${this.type}: ${e.getShaderInfoLog(a)}`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS))throw new T(`Shader link error for "${this.type}" ${e.getProgramInfoLog(o)}`);let s=this.getUniformLocations(e,o)||{};return s.uStepW=e.getUniformLocation(o,`uStepW`),s.uStepH=e.getUniformLocation(o,`uStepH`),{program:o,attributeLocations:this.getAttributeLocations(e,o),uniformLocations:s}}getAttributeLocations(e,t){return{aPosition:e.getAttribLocation(t,`aPosition`)}}getUniformLocations(e,t){let n=this.constructor.uniformLocations,r={};for(let i=0;i<n.length;i++)r[n[i]]=e.getUniformLocation(t,n[i]);return r}sendAttributeData(e,t,n){let r=t.aPosition,i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW)}_setupFrameBuffer(e){let t=e.context;if(e.passes>1){let n=e.destinationWidth,r=e.destinationHeight;e.sourceWidth===n&&e.sourceHeight===r||(t.deleteTexture(e.targetTexture),e.targetTexture=e.filterBackend.createTexture(t,n,r)),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.targetTexture,0)}else t.bindFramebuffer(t.FRAMEBUFFER,null),t.finish()}_swapTextures(e){e.passes--,e.pass++;let t=e.targetTexture;e.targetTexture=e.sourceTexture,e.sourceTexture=t}isNeutralState(e){return!1}applyTo(e){Ps(e)?(this._setupFrameBuffer(e),this.applyToWebGL(e),this._swapTextures(e)):this.applyTo2d(e)}applyTo2d(e){}getCacheKey(){return this.type}retrieveShader(e){let t=this.getCacheKey();return e.programCache[t]||(e.programCache[t]=this.createProgram(e.context)),e.programCache[t]}applyToWebGL(e){let t=e.context,n=this.retrieveShader(e);e.pass===0&&e.originalTexture?t.bindTexture(t.TEXTURE_2D,e.originalTexture):t.bindTexture(t.TEXTURE_2D,e.sourceTexture),t.useProgram(n.program),this.sendAttributeData(t,n.attributeLocations,e.aPosition),t.uniform1f(n.uniformLocations.uStepW,1/e.sourceWidth),t.uniform1f(n.uniformLocations.uStepH,1/e.sourceHeight),this.sendUniformData(t,n.uniformLocations),t.viewport(0,0,e.destinationWidth,e.destinationHeight),t.drawArrays(t.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(e,t,n){e.activeTexture(n),e.bindTexture(e.TEXTURE_2D,t),e.activeTexture(e.TEXTURE0)}unbindAdditionalTexture(e,t){e.activeTexture(t),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE0)}sendUniformData(e,t){}createHelpLayer(e){if(!e.helpLayer){let{sourceWidth:t,sourceHeight:n}=e;e.helpLayer=Le({width:t,height:n})}}toObject(){let e=Object.keys(this.constructor.defaults||{});return{type:this.type,...e.reduce((e,t)=>(e[t]=this[t],e),{})}}toJSON(){return this.toObject()}static async fromObject({type:e,...t},n){return new this(t)}};x(Rs,`type`,`BaseFilter`),x(Rs,`uniformLocations`,[]);var zs={multiply:`gl_FragColor.rgb *= uColor.rgb;
`,screen:`gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,add:`gl_FragColor.rgb += uColor.rgb;
`,difference:`gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,subtract:`gl_FragColor.rgb -= uColor.rgb;
`,lighten:`gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,darken:`gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,exclusion:`gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,overlay:`
    if (uColor.r < 0.5) {
      gl_FragColor.r *= 2.0 * uColor.r;
    } else {
      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
    }
    if (uColor.g < 0.5) {
      gl_FragColor.g *= 2.0 * uColor.g;
    } else {
      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
    }
    if (uColor.b < 0.5) {
      gl_FragColor.b *= 2.0 * uColor.b;
    } else {
      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
    }
    `,tint:`
    gl_FragColor.rgb *= (1.0 - uColor.a);
    gl_FragColor.rgb += uColor.rgb;
    `},Bs=class extends Rs{getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return`\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec4 uColor;\n      varying vec2 vTexCoord;\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        gl_FragColor = color;\n        if (color.a > 0.0) {\n          ${zs[this.mode]}\n        }\n      }\n      `}applyTo2d({imageData:{data:e}}){let t=new En(this.color).getSource(),n=this.alpha,r=t[0]*n,i=t[1]*n,a=t[2]*n,o=1-n;for(let t=0;t<e.length;t+=4){let n=e[t],s=e[t+1],c=e[t+2],l,u,d;switch(this.mode){case`multiply`:l=n*r/255,u=s*i/255,d=c*a/255;break;case`screen`:l=255-(255-n)*(255-r)/255,u=255-(255-s)*(255-i)/255,d=255-(255-c)*(255-a)/255;break;case`add`:l=n+r,u=s+i,d=c+a;break;case`difference`:l=Math.abs(n-r),u=Math.abs(s-i),d=Math.abs(c-a);break;case`subtract`:l=n-r,u=s-i,d=c-a;break;case`darken`:l=Math.min(n,r),u=Math.min(s,i),d=Math.min(c,a);break;case`lighten`:l=Math.max(n,r),u=Math.max(s,i),d=Math.max(c,a);break;case`overlay`:l=r<128?2*n*r/255:255-2*(255-n)*(255-r)/255,u=i<128?2*s*i/255:255-2*(255-s)*(255-i)/255,d=a<128?2*c*a/255:255-2*(255-c)*(255-a)/255;break;case`exclusion`:l=r+n-2*r*n/255,u=i+s-2*i*s/255,d=a+c-2*a*c/255;break;case`tint`:l=r+n*o,u=i+s*o,d=a+c*o}e[t]=l,e[t+1]=u,e[t+2]=d}}sendUniformData(e,t){let n=new En(this.color).getSource();n[0]=this.alpha*n[0]/255,n[1]=this.alpha*n[1]/255,n[2]=this.alpha*n[2]/255,n[3]=this.alpha,e.uniform4fv(t.uColor,n)}};x(Bs,`defaults`,{color:`#F95C63`,mode:`multiply`,alpha:1}),x(Bs,`type`,`BlendColor`),x(Bs,`uniformLocations`,[`uColor`]),K.setClass(Bs);var Vs={multiply:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.rgba *= color2.rgba;
      gl_FragColor = color;
    }
    `,mask:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.a = color2.a;
      gl_FragColor = color;
    }
    `},Hs=class extends Rs{getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return Vs[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(e){let t=e.context,n=this.createTexture(e.filterBackend,this.image);this.bindAdditionalTexture(t,n,t.TEXTURE1),super.applyToWebGL(e),this.unbindAdditionalTexture(t,t.TEXTURE1)}createTexture(e,t){return e.getCachedTexture(t.cacheKey,t.getElement())}calculateMatrix(){let e=this.image,{width:t,height:n}=e.getElement();return[1/e.scaleX,0,0,0,1/e.scaleY,0,-e.left/t,-e.top/n,1]}applyTo2d({imageData:{data:e,width:t,height:n},filterBackend:{resources:r}}){let i=this.image;r.blendImage||=Pe();let a=r.blendImage,o=a.getContext(`2d`);a.width!==t||a.height!==n?(a.width=t,a.height=n):o.clearRect(0,0,t,n),o.setTransform(i.scaleX,0,0,i.scaleY,i.left,i.top),o.drawImage(i.getElement(),0,0,t,n);let s=o.getImageData(0,0,t,n).data;for(let t=0;t<e.length;t+=4){let n=e[t],r=e[t+1],i=e[t+2],a=e[t+3],o=s[t],c=s[t+1],l=s[t+2],u=s[t+3];switch(this.mode){case`multiply`:e[t]=n*o/255,e[t+1]=r*c/255,e[t+2]=i*l/255,e[t+3]=a*u/255;break;case`mask`:e[t+3]=u}}}sendUniformData(e,t){let n=this.calculateMatrix();e.uniform1i(t.uImage,1),e.uniformMatrix3fv(t.uTransformMatrix,!1,n)}toObject(){return{...super.toObject(),image:this.image&&this.image.toObject()}}static async fromObject({type:e,image:t,...n},r){return Ns.fromObject(t,r).then(e=>new this({...n,image:e}))}};x(Hs,`type`,`BlendImage`),x(Hs,`defaults`,{mode:`multiply`,alpha:1}),x(Hs,`uniformLocations`,[`uTransformMatrix`,`uImage`]),K.setClass(Hs);var Us=class extends Rs{getFragmentSource(){return`
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uDelta;
    varying vec2 vTexCoord;
    const float nSamples = 15.0;
    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
    float random(vec3 scale) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
    }
    void main() {
      vec4 color = vec4(0.0);
      float totalC = 0.0;
      float totalA = 0.0;
      float offset = random(v3offset);
      for (float t = -nSamples; t <= nSamples; t++) {
        float percent = (t + offset - 0.5) / nSamples;
        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);
        float weight = 1.0 - abs(percent);
        float alpha = weight * sample.a;
        color.rgb += sample.rgb * alpha;
        color.a += alpha;
        totalA += weight;
        totalC += alpha;
      }
      gl_FragColor.rgb = color.rgb / totalC;
      gl_FragColor.a = color.a / totalA;
    }
  `}applyTo(e){Ps(e)?(this.aspectRatio=e.sourceWidth/e.sourceHeight,e.passes++,this._setupFrameBuffer(e),this.horizontal=!0,this.applyToWebGL(e),this._swapTextures(e),this._setupFrameBuffer(e),this.horizontal=!1,this.applyToWebGL(e),this._swapTextures(e)):this.applyTo2d(e)}applyTo2d({imageData:{data:e,width:t,height:n}}){this.aspectRatio=t/n,this.horizontal=!0;let r=this.getBlurValue()*t,i=new Uint8ClampedArray(e),a=4*t;for(let t=0;t<e.length;t+=4){let n=0,o=0,s=0,c=0,l=0,u=t-t%a,d=u+a;for(let i=-14;i<15;i++){let a=i/15,f=4*Math.floor(r*a),p=1-Math.abs(a),m=t+f;m<u?m=u:m>d&&(m=d);let h=e[m+3]*p;n+=e[m]*h,o+=e[m+1]*h,s+=e[m+2]*h,c+=h,l+=p}i[t]=n/c,i[t+1]=o/c,i[t+2]=s/c,i[t+3]=c/l}this.horizontal=!1,r=this.getBlurValue()*n;for(let t=0;t<i.length;t+=4){let n=0,o=0,s=0,c=0,l=0,u=t%a,d=i.length-a+u;for(let e=-14;e<15;e++){let f=e/15,p=Math.floor(r*f)*a,m=1-Math.abs(f),h=t+p;h<u?h=u:h>d&&(h=d);let g=i[h+3]*m;n+=i[h]*g,o+=i[h+1]*g,s+=i[h+2]*g,c+=g,l+=m}e[t]=n/c,e[t+1]=o/c,e[t+2]=s/c,e[t+3]=c/l}}sendUniformData(e,t){let n=this.chooseRightDelta();e.uniform2fv(t.uDelta,n)}isNeutralState(){return this.blur===0}getBlurValue(){let e=1,{horizontal:t,aspectRatio:n}=this;return t?n>1&&(e=1/n):n<1&&(e=n),e*this.blur*.12}chooseRightDelta(){let e=this.getBlurValue();return this.horizontal?[e,0]:[0,e]}};x(Us,`type`,`Blur`),x(Us,`defaults`,{blur:0}),x(Us,`uniformLocations`,[`uDelta`]),K.setClass(Us);var Ws=class extends Rs{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:e}}){let t=Math.round(255*this.brightness);for(let n=0;n<e.length;n+=4)e[n]+=t,e[n+1]+=t,e[n+2]+=t}isNeutralState(){return this.brightness===0}sendUniformData(e,t){e.uniform1f(t.uBrightness,this.brightness)}};x(Ws,`type`,`Brightness`),x(Ws,`defaults`,{brightness:0}),x(Ws,`uniformLocations`,[`uBrightness`]),K.setClass(Ws);var Gs={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},Ks=class extends Rs{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  varying vec2 vTexCoord;
  uniform mat4 uColorMatrix;
  uniform vec4 uConstants;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color *= uColorMatrix;
    color += uConstants;
    gl_FragColor = color;
  }`}applyTo2d(e){let t=e.imageData.data,n=this.matrix,r=this.colorsOnly;for(let e=0;e<t.length;e+=4){let i=t[e],a=t[e+1],o=t[e+2];if(t[e]=i*n[0]+a*n[1]+o*n[2]+255*n[4],t[e+1]=i*n[5]+a*n[6]+o*n[7]+255*n[9],t[e+2]=i*n[10]+a*n[11]+o*n[12]+255*n[14],!r){let r=t[e+3];t[e]+=r*n[3],t[e+1]+=r*n[8],t[e+2]+=r*n[13],t[e+3]=i*n[15]+a*n[16]+o*n[17]+r*n[18]+255*n[19]}}}sendUniformData(e,t){let n=this.matrix,r=[n[0],n[1],n[2],n[3],n[5],n[6],n[7],n[8],n[10],n[11],n[12],n[13],n[15],n[16],n[17],n[18]],i=[n[4],n[9],n[14],n[19]];e.uniformMatrix4fv(t.uColorMatrix,!1,r),e.uniform4fv(t.uConstants,i)}toObject(){return{...super.toObject(),matrix:[...this.matrix]}}};function qs(e,t){var n;let r=(x(n=class extends Ks{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},`type`,e),x(n,`defaults`,{colorsOnly:!1,matrix:t}),n);return K.setClass(r,e),r}x(Ks,`type`,`ColorMatrix`),x(Ks,`defaults`,Gs),x(Ks,`uniformLocations`,[`uColorMatrix`,`uConstants`]),K.setClass(Ks);var Js=qs(`Brownie`,[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),Ys=qs(`Vintage`,[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),Xs=qs(`Kodachrome`,[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),Zs=qs(`Technicolor`,[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),Qs=qs(`Polaroid`,[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),$s=qs(`Sepia`,[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),ec=qs(`BlackWhite`,[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),tc=class extends Rs{constructor(e={}){super(e),this.subFilters=e.subFilters||[]}applyTo(e){Ps(e)&&(e.passes+=this.subFilters.length-1),this.subFilters.forEach(t=>{t.applyTo(e)})}toObject(){return{type:this.type,subFilters:this.subFilters.map(e=>e.toObject())}}isNeutralState(){return!this.subFilters.some(e=>!e.isNeutralState())}static fromObject(e,t){return Promise.all((e.subFilters||[]).map(e=>K.getClass(e.type).fromObject(e,t))).then(e=>new this({subFilters:e}))}};x(tc,`type`,`Composed`),K.setClass(tc);var nc=class extends Rs{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d({imageData:{data:e}}){let t=Math.floor(255*this.contrast),n=259*(t+255)/(255*(259-t));for(let t=0;t<e.length;t+=4)e[t]=n*(e[t]-128)+128,e[t+1]=n*(e[t+1]-128)+128,e[t+2]=n*(e[t+2]-128)+128}sendUniformData(e,t){e.uniform1f(t.uContrast,this.contrast)}};x(nc,`type`,`Contrast`),x(nc,`defaults`,{contrast:0}),x(nc,`uniformLocations`,[`uContrast`]),K.setClass(nc);var rc={Convolute_3_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_3_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_5_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_5_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_7_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_7_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_9_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_9_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `},ic=class extends Rs{getCacheKey(){return`${this.type}_${Math.sqrt(this.matrix.length)}_${+!!this.opaque}`}getFragmentSource(){return rc[this.getCacheKey()]}applyTo2d(e){let t=e.imageData,n=t.data,r=this.matrix,i=Math.round(Math.sqrt(r.length)),a=Math.floor(i/2),o=t.width,s=t.height,c=e.ctx.createImageData(o,s),l=c.data,u=+!!this.opaque,d,f,p,m,h,g,_,v,y,b,x,S,C;for(x=0;x<s;x++)for(b=0;b<o;b++){for(h=4*(x*o+b),d=0,f=0,p=0,m=0,C=0;C<i;C++)for(S=0;S<i;S++)_=x+C-a,g=b+S-a,_<0||_>=s||g<0||g>=o||(v=4*(_*o+g),y=r[C*i+S],d+=n[v]*y,f+=n[v+1]*y,p+=n[v+2]*y,u||(m+=n[v+3]*y));l[h]=d,l[h+1]=f,l[h+2]=p,l[h+3]=u?n[h+3]:m}e.imageData=c}sendUniformData(e,t){e.uniform1fv(t.uMatrix,this.matrix)}toObject(){return{...super.toObject(),opaque:this.opaque,matrix:[...this.matrix]}}};x(ic,`type`,`Convolute`),x(ic,`defaults`,{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),x(ic,`uniformLocations`,[`uMatrix`,`uOpaque`,`uHalfSize`,`uSize`]),K.setClass(ic);var ac=`Gamma`,oc=class extends Rs{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec3 uGamma;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    vec3 correction = (1.0 / uGamma);
    color.r = pow(color.r, correction.r);
    color.g = pow(color.g, correction.g);
    color.b = pow(color.b, correction.b);
    gl_FragColor = color;
    gl_FragColor.rgb *= color.a;
  }
`}constructor(e={}){super(e),this.gamma=e.gamma||this.constructor.defaults.gamma.concat()}applyTo2d({imageData:{data:e}}){let t=this.gamma,n=1/t[0],r=1/t[1],i=1/t[2];this.rgbValues||={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)};let a=this.rgbValues;for(let e=0;e<256;e++)a.r[e]=255*(e/255)**n,a.g[e]=255*(e/255)**r,a.b[e]=255*(e/255)**i;for(let t=0;t<e.length;t+=4)e[t]=a.r[e[t]],e[t+1]=a.g[e[t+1]],e[t+2]=a.b[e[t+2]]}sendUniformData(e,t){e.uniform3fv(t.uGamma,this.gamma)}isNeutralState(){let{gamma:e}=this;return e[0]===1&&e[1]===1&&e[2]===1}toObject(){return{type:ac,gamma:this.gamma.concat()}}};x(oc,`type`,ac),x(oc,`defaults`,{gamma:[1,1,1]}),x(oc,`uniformLocations`,[`uGamma`]),K.setClass(oc);var sc={average:`
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      float average = (color.r + color.b + color.g) / 3.0;
      gl_FragColor = vec4(average, average, average, color.a);
    }
    `,lightness:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `,luminosity:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `},cc=class extends Rs{applyTo2d({imageData:{data:e}}){for(let t,n=0;n<e.length;n+=4){let r=e[n],i=e[n+1],a=e[n+2];switch(this.mode){case`average`:t=(r+i+a)/3;break;case`lightness`:t=(Math.min(r,i,a)+Math.max(r,i,a))/2;break;case`luminosity`:t=.21*r+.72*i+.07*a}e[n+2]=e[n+1]=e[n]=t}}getCacheKey(){return`${this.type}_${this.mode}`}getFragmentSource(){return sc[this.mode]}sendUniformData(e,t){e.uniform1i(t.uMode,1)}isNeutralState(){return!1}};x(cc,`type`,`Grayscale`),x(cc,`defaults`,{mode:`average`}),x(cc,`uniformLocations`,[`uMode`]),K.setClass(cc);var lc={...Gs,rotation:0},uc=class extends Ks{calculateMatrix(){let e=this.rotation*Math.PI,t=we(e),n=Te(e),r=1/3,i=Math.sqrt(r)*n,a=1-t;this.matrix=[t+a/3,r*a-i,r*a+i,0,0,r*a+i,t+r*a,r*a-i,0,0,r*a-i,r*a+i,t+r*a,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(e){this.calculateMatrix(),super.applyTo(e)}toObject(){return{type:this.type,rotation:this.rotation}}};x(uc,`type`,`HueRotation`),x(uc,`defaults`,lc),K.setClass(uc);var dc=class extends Rs{applyTo2d({imageData:{data:e}}){for(let t=0;t<e.length;t+=4)e[t]=255-e[t],e[t+1]=255-e[t+1],e[t+2]=255-e[t+2],this.alpha&&(e[t+3]=255-e[t+3])}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform int uInvert;
  uniform int uAlpha;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    if (uInvert == 1) {
      if (uAlpha == 1) {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);
      } else {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
      }
    } else {
      gl_FragColor = color;
    }
  }
`}isNeutralState(){return!this.invert}sendUniformData(e,t){e.uniform1i(t.uInvert,Number(this.invert)),e.uniform1i(t.uAlpha,Number(this.alpha))}};x(dc,`type`,`Invert`),x(dc,`defaults`,{alpha:!1,invert:!0}),x(dc,`uniformLocations`,[`uInvert`,`uAlpha`]),K.setClass(dc);var fc=class extends Rs{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uStepH;
  uniform float uNoise;
  uniform float uSeed;
  varying vec2 vTexCoord;
  float rand(vec2 co, float seed, float vScale) {
    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
  }
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:e}}){let t=this.noise;for(let n=0;n<e.length;n+=4){let r=(.5-Math.random())*t;e[n]+=r,e[n+1]+=r,e[n+2]+=r}}sendUniformData(e,t){e.uniform1f(t.uNoise,this.noise/255),e.uniform1f(t.uSeed,Math.random())}isNeutralState(){return this.noise===0}};x(fc,`type`,`Noise`),x(fc,`defaults`,{noise:0}),x(fc,`uniformLocations`,[`uNoise`,`uSeed`]),K.setClass(fc);var pc=class extends Rs{applyTo2d({imageData:{data:e,width:t,height:n}}){for(let r=0;r<n;r+=this.blocksize)for(let i=0;i<t;i+=this.blocksize){let a=4*r*t+4*i,o=e[a],s=e[a+1],c=e[a+2],l=e[a+3];for(let a=r;a<Math.min(r+this.blocksize,n);a++)for(let n=i;n<Math.min(i+this.blocksize,t);n++){let r=4*a*t+4*n;e[r]=o,e[r+1]=s,e[r+2]=c,e[r+3]=l}}}isNeutralState(){return this.blocksize===1}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBlocksize;
  uniform float uStepW;
  uniform float uStepH;
  varying vec2 vTexCoord;
  void main() {
    float blockW = uBlocksize * uStepW;
    float blockH = uBlocksize * uStepH;
    int posX = int(vTexCoord.x / blockW);
    int posY = int(vTexCoord.y / blockH);
    float fposX = float(posX);
    float fposY = float(posY);
    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
    vec4 color = texture2D(uTexture, squareCoords);
    gl_FragColor = color;
  }
`}sendUniformData(e,t){e.uniform1f(t.uBlocksize,this.blocksize)}};x(pc,`type`,`Pixelate`),x(pc,`defaults`,{blocksize:4}),x(pc,`uniformLocations`,[`uBlocksize`]),K.setClass(pc);var mc=class extends Rs{getFragmentSource(){return`
precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord);
  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
    gl_FragColor.a = 0.0;
  }
}
`}applyTo2d({imageData:{data:e}}){let t=255*this.distance,n=new En(this.color).getSource(),r=[n[0]-t,n[1]-t,n[2]-t],i=[n[0]+t,n[1]+t,n[2]+t];for(let t=0;t<e.length;t+=4){let n=e[t],a=e[t+1],o=e[t+2];n>r[0]&&a>r[1]&&o>r[2]&&n<i[0]&&a<i[1]&&o<i[2]&&(e[t+3]=0)}}sendUniformData(e,t){let n=new En(this.color).getSource(),r=this.distance,i=[0+n[0]/255-r,0+n[1]/255-r,0+n[2]/255-r,1],a=[n[0]/255+r,n[1]/255+r,n[2]/255+r,1];e.uniform4fv(t.uLow,i),e.uniform4fv(t.uHigh,a)}};x(mc,`type`,`RemoveColor`),x(mc,`defaults`,{color:`#FFFFFF`,distance:.02,useAlpha:!1}),x(mc,`uniformLocations`,[`uLow`,`uHigh`]),K.setClass(mc);var hc=class extends Rs{sendUniformData(e,t){e.uniform2fv(t.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),e.uniform1fv(t.uTaps,this.taps)}getFilterWindow(){let e=this.tempScale;return Math.ceil(this.lanczosLobes/e)}getCacheKey(){let e=this.getFilterWindow();return`${this.type}_${e}`}getFragmentSource(){let e=this.getFilterWindow();return this.generateShader(e)}getTaps(){let e=this.lanczosCreate(this.lanczosLobes),t=this.tempScale,n=this.getFilterWindow(),r=Array(n);for(let i=1;i<=n;i++)r[i-1]=e(i*t);return r}generateShader(e){let t=Array(e);for(let n=1;n<=e;n++)t[n-1]=`${n}.0 * uDelta`;return`\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec2 uDelta;\n      varying vec2 vTexCoord;\n      uniform float uTaps[${e}];\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        float sum = 1.0;\n        ${t.map((e,t)=>`\n              color += texture2D(uTexture, vTexCoord + ${e}) * uTaps[${t}] + texture2D(uTexture, vTexCoord - ${e}) * uTaps[${t}];\n              sum += 2.0 * uTaps[${t}];\n            `).join(`
`)}\n        gl_FragColor = color / sum;\n      }\n    `}applyToForWebgl(e){e.passes++,this.width=e.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=e.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),e.destinationWidth=this.dW,super.applyTo(e),e.sourceWidth=e.destinationWidth,this.height=e.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),e.destinationHeight=this.dH,super.applyTo(e),e.sourceHeight=e.destinationHeight}applyTo(e){Ps(e)?this.applyToForWebgl(e):this.applyTo2d(e)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(e){return t=>{if(t>=e||t<=-e)return 0;if(t<1.1920929e-7&&t>-1.1920929e-7)return 1;let n=(t*=Math.PI)/e;return Math.sin(t)/t*Math.sin(n)/n}}applyTo2d(e){let t=e.imageData,n=this.scaleX,r=this.scaleY;this.rcpScaleX=1/n,this.rcpScaleY=1/r;let i=t.width,a=t.height,o=Math.round(i*n),s=Math.round(a*r),c;c=this.resizeType===`sliceHack`?this.sliceByTwo(e,i,a,o,s):this.resizeType===`hermite`?this.hermiteFastResize(e,i,a,o,s):this.resizeType===`bilinear`?this.bilinearFiltering(e,i,a,o,s):this.resizeType===`lanczos`?this.lanczosResize(e,i,a,o,s):new ImageData(o,s),e.imageData=c}sliceByTwo(e,t,n,r,i){let a=e.imageData,o=.5,s=!1,c=!1,l=t*o,u=n*o,d=e.filterBackend.resources,f=0,p=0,m=t,h=0;d.sliceByTwo||=Pe();let g=d.sliceByTwo;(g.width<1.5*t||g.height<n)&&(g.width=1.5*t,g.height=n);let _=g.getContext(`2d`);for(_.clearRect(0,0,1.5*t,n),_.putImageData(a,0,0),r=Math.floor(r),i=Math.floor(i);!s||!c;)t=l,n=u,r<Math.floor(l*o)?l=Math.floor(l*o):(l=r,s=!0),i<Math.floor(u*o)?u=Math.floor(u*o):(u=i,c=!0),_.drawImage(g,f,p,t,n,m,h,l,u),f=m,p=h,h+=u;return _.getImageData(f,p,r,i)}lanczosResize(e,t,n,r,i){let a=e.imageData.data,o=e.ctx.createImageData(r,i),s=o.data,c=this.lanczosCreate(this.lanczosLobes),l=this.rcpScaleX,u=this.rcpScaleY,d=2/this.rcpScaleX,f=2/this.rcpScaleY,p=Math.ceil(l*this.lanczosLobes/2),m=Math.ceil(u*this.lanczosLobes/2),h={},g={x:0,y:0},_={x:0,y:0};return function e(v){let y,b,x,S,C,w,T,E,D,O,k;for(g.x=(v+.5)*l,_.x=Math.floor(g.x),y=0;y<i;y++){for(g.y=(y+.5)*u,_.y=Math.floor(g.y),C=0,w=0,T=0,E=0,D=0,b=_.x-p;b<=_.x+p;b++)if(!(b<0||b>=t)){O=Math.floor(1e3*Math.abs(b-g.x)),h[O]||(h[O]={});for(let e=_.y-m;e<=_.y+m;e++)e<0||e>=n||(k=Math.floor(1e3*Math.abs(e-g.y)),h[O][k]||(h[O][k]=c(Math.sqrt((O*d)**2+(k*f)**2)/1e3)),x=h[O][k],x>0&&(S=4*(e*t+b),C+=x,w+=x*a[S],T+=x*a[S+1],E+=x*a[S+2],D+=x*a[S+3]))}S=4*(y*r+v),s[S]=w/C,s[S+1]=T/C,s[S+2]=E/C,s[S+3]=D/C}return++v<r?e(v):o}(0)}bilinearFiltering(e,t,n,r,i){let a,o,s,c,l,u,d,f,p,m,h,g,_,v=0,y=this.rcpScaleX,b=this.rcpScaleY,x=4*(t-1),S=e.imageData.data,C=e.ctx.createImageData(r,i),w=C.data;for(d=0;d<i;d++)for(f=0;f<r;f++)for(l=Math.floor(y*f),u=Math.floor(b*d),p=y*f-l,m=b*d-u,_=4*(u*t+l),h=0;h<4;h++)a=S[_+h],o=S[_+4+h],s=S[_+x+h],c=S[_+x+4+h],g=a*(1-p)*(1-m)+o*p*(1-m)+s*m*(1-p)+c*p*m,w[v++]=g;return C}hermiteFastResize(e,t,n,r,i){let a=this.rcpScaleX,o=this.rcpScaleY,s=Math.ceil(a/2),c=Math.ceil(o/2),l=e.imageData.data,u=e.ctx.createImageData(r,i),d=u.data;for(let e=0;e<i;e++)for(let n=0;n<r;n++){let i=4*(n+e*r),u,f=0,p=0,m=0,h=0,g=0,_=0,v=(e+.5)*o;for(let r=Math.floor(e*o);r<(e+1)*o;r++){let e=Math.abs(v-(r+.5))/c,i=(n+.5)*a,o=e*e;for(let e=Math.floor(n*a);e<(n+1)*a;e++){let n=Math.abs(i-(e+.5))/s,a=Math.sqrt(o+n*n);a>1&&a<-1||(u=2*a*a*a-3*a*a+1,u>0&&(n=4*(e+r*t),_+=u*l[n+3],p+=u,l[n+3]<255&&(u=u*l[n+3]/250),m+=u*l[n],h+=u*l[n+1],g+=u*l[n+2],f+=u))}}d[i]=m/f,d[i+1]=h/f,d[i+2]=g/f,d[i+3]=_/p}return u}};x(hc,`type`,`Resize`),x(hc,`defaults`,{resizeType:`hermite`,scaleX:1,scaleY:1,lanczosLobes:3}),x(hc,`uniformLocations`,[`uDelta`,`uTaps`]),K.setClass(hc);var gc=class extends Rs{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uSaturation;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float rgMax = max(color.r, color.g);
    float rgbMax = max(rgMax, color.b);
    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:e}}){let t=-this.saturation;for(let n=0;n<e.length;n+=4){let r=e[n],i=e[n+1],a=e[n+2],o=Math.max(r,i,a);e[n]+=o===r?0:(o-r)*t,e[n+1]+=o===i?0:(o-i)*t,e[n+2]+=o===a?0:(o-a)*t}}sendUniformData(e,t){e.uniform1f(t.uSaturation,-this.saturation)}isNeutralState(){return this.saturation===0}};x(gc,`type`,`Saturation`),x(gc,`defaults`,{saturation:0}),x(gc,`uniformLocations`,[`uSaturation`]),K.setClass(gc);var _c=class extends Rs{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVibrance;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float max = max(color.r, max(color.g, color.b));
    float avg = (color.r + color.g + color.b) / 3.0;
    float amt = (abs(max - avg) * 2.0) * uVibrance;
    color.r += max != color.r ? (max - color.r) * amt : 0.00;
    color.g += max != color.g ? (max - color.g) * amt : 0.00;
    color.b += max != color.b ? (max - color.b) * amt : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d({imageData:{data:e}}){let t=-this.vibrance;for(let n=0;n<e.length;n+=4){let r=e[n],i=e[n+1],a=e[n+2],o=Math.max(r,i,a),s=(r+i+a)/3,c=2*Math.abs(o-s)/255*t;e[n]+=o===r?0:(o-r)*c,e[n+1]+=o===i?0:(o-i)*c,e[n+2]+=o===a?0:(o-a)*c}}sendUniformData(e,t){e.uniform1f(t.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};x(_c,`type`,`Vibrance`),x(_c,`defaults`,{vibrance:0}),x(_c,`uniformLocations`,[`uVibrance`]),K.setClass(_c);var vc=v({BaseFilter:()=>Rs,BlackWhite:()=>ec,BlendColor:()=>Bs,BlendImage:()=>Hs,Blur:()=>Us,Brightness:()=>Ws,Brownie:()=>Js,ColorMatrix:()=>Ks,Composed:()=>tc,Contrast:()=>nc,Convolute:()=>ic,Gamma:()=>oc,Grayscale:()=>cc,HueRotation:()=>uc,Invert:()=>dc,Kodachrome:()=>Xs,Noise:()=>fc,Pixelate:()=>pc,Polaroid:()=>Qs,RemoveColor:()=>mc,Resize:()=>hc,Saturation:()=>gc,Sepia:()=>$s,Technicolor:()=>Zs,Vibrance:()=>_c,Vintage:()=>Ys}),yc={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bc={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xc=1e3,Sc=1001,Cc=1002,wc=1003,Tc=1004,Ec=1005,Dc=1006,Oc=1007,kc=1008,Ac=1009,jc=1010,Mc=1011,Nc=1012,Pc=1013,Fc=1014,Ic=1015,Lc=1016,Rc=1017,zc=1018,Bc=1020,Vc=35902,Hc=35899,Uc=1021,Wc=1022,Gc=1023,Kc=1026,qc=1027,Jc=1028,Yc=1029,Xc=1030,Zc=1031,Qc=1033,$c=33776,el=33777,tl=33778,nl=33779,rl=35840,il=35841,al=35842,ol=35843,sl=36196,cl=37492,ll=37496,ul=37488,dl=37489,fl=37490,pl=37491,ml=37808,hl=37809,gl=37810,_l=37811,vl=37812,yl=37813,bl=37814,xl=37815,Sl=37816,Cl=37817,wl=37818,Tl=37819,El=37820,Dl=37821,Ol=36492,kl=36494,Al=36495,jl=36283,Ml=36284,Nl=36285,Pl=36286,Fl=2300,Il=2301,Ll=2302,Rl=2303,zl=2400,Bl=2401,Vl=2402,Hl=3200,Ul=`srgb`,Wl=`srgb-linear`,Gl=`linear`,Kl=`srgb`,ql=7680,Jl=35044,Yl=2e3;function Xl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Zl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ql(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $l(){let e=Ql(`canvas`);return e.style.display=`block`,e}var eu={};function tu(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nu(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function J(...e){e=nu(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Y(...e){e=nu(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ru(...e){let t=e.join(` `);t in eu||(eu[t]=!0,J(...e))}function iu(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var au={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ou=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},su=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),cu=1234567,lu=Math.PI/180,uu=180/Math.PI;function du(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(su[e&255]+su[e>>8&255]+su[e>>16&255]+su[e>>24&255]+`-`+su[t&255]+su[t>>8&255]+`-`+su[t>>16&15|64]+su[t>>24&255]+`-`+su[n&63|128]+su[n>>8&255]+`-`+su[n>>16&255]+su[n>>24&255]+su[r&255]+su[r>>8&255]+su[r>>16&255]+su[r>>24&255]).toLowerCase()}function fu(e,t,n){return Math.max(t,Math.min(n,e))}function pu(e,t){return(e%t+t)%t}function mu(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function hu(e,t,n){return e===t?0:(n-e)/(t-e)}function gu(e,t,n){return(1-n)*e+n*t}function _u(e,t,n,r){return gu(e,t,1-Math.exp(-n*r))}function vu(e,t=1){return t-Math.abs(pu(e,t*2)-t)}function yu(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function bu(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xu(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Su(e,t){return e+Math.random()*(t-e)}function Cu(e){return e*(.5-Math.random())}function wu(e){e!==void 0&&(cu=e);let t=cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tu(e){return e*lu}function Eu(e){return e*uu}function Du(e){return!(e&e-1)&&e!==0}function Ou(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ku(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Au(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:J(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ju(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Mu(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Nu={DEG2RAD:lu,RAD2DEG:uu,generateUUID:du,clamp:fu,euclideanModulo:pu,mapLinear:mu,inverseLerp:hu,lerp:gu,damp:_u,pingpong:vu,smoothstep:yu,smootherstep:bu,randInt:xu,randFloat:Su,randFloatSpread:Cu,seededRandom:wu,degToRad:Tu,radToDeg:Eu,isPowerOfTwo:Du,ceilPowerOfTwo:Ou,floorPowerOfTwo:ku,setQuaternionFromProperEuler:Au,normalize:Mu,denormalize:ju},X=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=fu(this.x,e.x,t.x),this.y=fu(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=fu(this.x,e,t),this.y=fu(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fu(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pu=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:J(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fu(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=fu(this.x,e.x,t.x),this.y=fu(this.y,e.y,t.y),this.z=fu(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=fu(this.x,e,t),this.y=fu(this.y,e,t),this.z=fu(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fu(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fu=new Z,Iu=new Pu,Lu=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ru(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return ru(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return ru(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ru=new Lu,zu=new Lu().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new Lu().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){let e={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Uu(e.r),e.g=Uu(e.g),e.b=Uu(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Wu(e.r),e.g=Wu(e.g),e.b=Wu(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Gl:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ru(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ru(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Wl]:{primaries:t,whitePoint:r,transfer:Gl,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ul},outputColorSpaceConfig:{drawingBufferColorSpace:Ul}},[Ul]:{primaries:t,whitePoint:r,transfer:Kl,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ul}}}),e}var Hu=Vu();function Uu(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Wu(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Gu,Ku=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gu===void 0&&(Gu=Ql(`canvas`)),Gu.width=e.width,Gu.height=e.height;let t=Gu.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Gu}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ql(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Uu(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Uu(t[e]/255)*255):t[e]=Uu(t[e]);return{data:t,width:e.width,height:e.height}}return J(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},qu=0,Ju=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=du(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Yu(r[t].image)):e.push(Yu(r[t]))}else e=Yu(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Yu(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ku.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(J(`Texture: Unable to serialize Texture.`),{})}var Xu=0,Zu=new Z,Qu=class e extends ou{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Sc,i=Sc,a=Dc,o=kc,s=Gc,c=Ac,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=du(),this.name=``,this.source=new Ju(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lu,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){J(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){J(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xc:e.x-=Math.floor(e.x);break;case Sc:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case xc:e.y-=Math.floor(e.y);break;case Sc:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qu.DEFAULT_IMAGE=null,Qu.DEFAULT_MAPPING=300,Qu.DEFAULT_ANISOTROPY=1;var $u=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=fu(this.x,e.x,t.x),this.y=fu(this.y,e.y,t.y),this.z=fu(this.z,e.z,t.z),this.w=fu(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=fu(this.x,e,t),this.y=fu(this.y,e,t),this.z=fu(this.z,e,t),this.w=fu(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ed=class extends ou{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dc,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $u(0,0,e,t),this.scissorTest=!1,this.viewport=new $u(0,0,e,t),this.textures=[];let r=new Qu({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dc,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ju(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},td=class extends ed{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nd=class extends Qu{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wc,this.minFilter=wc,this.wrapR=Sc,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},rd=class extends Qu{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wc,this.minFilter=wc,this.wrapR=Sc,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},id=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ad.setFromMatrixColumn(e,0).length(),i=1/ad.setFromMatrixColumn(e,1).length(),a=1/ad.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sd,e,cd)}lookAt(e,t,n){let r=this.elements;return dd.subVectors(e,t),dd.lengthSq()===0&&(dd.z=1),dd.normalize(),ld.crossVectors(n,dd),ld.lengthSq()===0&&(Math.abs(n.z)===1?dd.x+=1e-4:dd.z+=1e-4,dd.normalize(),ld.crossVectors(n,dd)),ld.normalize(),ud.crossVectors(dd,ld),r[0]=ld.x,r[4]=ud.x,r[8]=dd.x,r[1]=ld.y,r[5]=ud.y,r[9]=dd.y,r[2]=ld.z,r[6]=ud.z,r[10]=dd.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ad.set(r[0],r[1],r[2]).length(),o=ad.set(r[4],r[5],r[6]).length(),s=ad.set(r[8],r[9],r[10]).length();i<0&&(a=-a),od.copy(this);let c=1/a,l=1/o,u=1/s;return od.elements[0]*=c,od.elements[1]*=c,od.elements[2]*=c,od.elements[4]*=l,od.elements[5]*=l,od.elements[6]*=l,od.elements[8]*=u,od.elements[9]*=u,od.elements[10]*=u,t.setFromRotationMatrix(od),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Yl,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Yl,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ad=new Z,od=new id,sd=new Z(0,0,0),cd=new Z(1,1,1),ld=new Z,ud=new Z,dd=new Z,fd=new id,pd=new Pu,md=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(fu(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-fu(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(fu(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-fu(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(fu(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-fu(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:J(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};md.DEFAULT_ORDER=`XYZ`;var hd=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},gd=0,_d=new Z,vd=new Pu,yd=new id,bd=new Z,xd=new Z,Sd=new Z,Cd=new Pu,wd=new Z(1,0,0),Td=new Z(0,1,0),Ed=new Z(0,0,1),Dd={type:`added`},Od={type:`removed`},kd={type:`childadded`,child:null},Ad={type:`childremoved`,child:null},jd=class e extends ou{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=du(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new md,r=new Pu,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new id},normalMatrix:{value:new Lu}}),this.matrix=new id,this.matrixWorld=new id,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vd.setFromAxisAngle(e,t),this.quaternion.multiply(vd),this}rotateOnWorldAxis(e,t){return vd.setFromAxisAngle(e,t),this.quaternion.premultiply(vd),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yd.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bd.copy(e):bd.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xd.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yd.lookAt(xd,bd,this.up):yd.lookAt(bd,xd,this.up),this.quaternion.setFromRotationMatrix(yd),r&&(yd.extractRotation(r.matrixWorld),vd.setFromRotationMatrix(yd),this.quaternion.premultiply(vd.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Y(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dd),kd.child=e,this.dispatchEvent(kd),kd.child=null):Y(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Od),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yd.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yd.multiply(e.parent.matrixWorld)),e.applyMatrix4(yd),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dd),kd.child=e,this.dispatchEvent(kd),kd.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xd,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xd,Cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};jd.DEFAULT_UP=new Z(0,1,0),jd.DEFAULT_MATRIX_AUTO_UPDATE=!0,jd.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Md=class extends jd{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Nd={type:`move`},Pd=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Md,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Md,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Md,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Md;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Id={h:0,s:0,l:0},Ld={h:0,s:0,l:0};function Rd(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var zd=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ul){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hu.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Hu.workingColorSpace){return this.r=e,this.g=t,this.b=n,Hu.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Hu.workingColorSpace){if(e=pu(e,1),t=fu(t,0,1),n=fu(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Rd(i,r,e+1/3),this.g=Rd(i,r,e),this.b=Rd(i,r,e-1/3)}return Hu.colorSpaceToWorking(this,r),this}setStyle(e,t=Ul){function n(t){t!==void 0&&parseFloat(t)<1&&J(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:J(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);J(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ul){let n=Fd[e.toLowerCase()];return n===void 0?J(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Uu(e.r),this.g=Uu(e.g),this.b=Uu(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ul){return Hu.workingToColorSpace(Bd.copy(this),e),Math.round(fu(Bd.r*255,0,255))*65536+Math.round(fu(Bd.g*255,0,255))*256+Math.round(fu(Bd.b*255,0,255))}getHexString(e=Ul){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Hu.workingColorSpace){Hu.workingToColorSpace(Bd.copy(this),t);let n=Bd.r,r=Bd.g,i=Bd.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Hu.workingColorSpace){return Hu.workingToColorSpace(Bd.copy(this),t),e.r=Bd.r,e.g=Bd.g,e.b=Bd.b,e}getStyle(e=Ul){Hu.workingToColorSpace(Bd.copy(this),e);let t=Bd.r,n=Bd.g,r=Bd.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Id),this.setHSL(Id.h+e,Id.s+t,Id.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Id),e.getHSL(Ld);let n=gu(Id.h,Ld.h,t),r=gu(Id.s,Ld.s,t),i=gu(Id.l,Ld.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bd=new zd;zd.NAMES=Fd;var Vd=class extends jd{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new md,this.environmentIntensity=1,this.environmentRotation=new md,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hd=new Z,Ud=new Z,Wd=new Z,Gd=new Z,Kd=new Z,qd=new Z,Jd=new Z,Yd=new Z,Xd=new Z,Zd=new Z,Qd=new $u,$d=new $u,ef=new $u,tf=class e{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Hd.subVectors(e,t),r.cross(Hd);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Hd.subVectors(r,t),Ud.subVectors(n,t),Wd.subVectors(e,t);let a=Hd.dot(Hd),o=Hd.dot(Ud),s=Hd.dot(Wd),c=Ud.dot(Ud),l=Ud.dot(Wd),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gd)!==null&&Gd.x>=0&&Gd.y>=0&&Gd.x+Gd.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Gd)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Gd.x),s.addScaledVector(a,Gd.y),s.addScaledVector(o,Gd.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Qd.setScalar(0),$d.setScalar(0),ef.setScalar(0),Qd.fromBufferAttribute(e,t),$d.fromBufferAttribute(e,n),ef.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qd,i.x),a.addScaledVector($d,i.y),a.addScaledVector(ef,i.z),a}static isFrontFacing(e,t,n,r){return Hd.subVectors(n,t),Ud.subVectors(e,t),Hd.cross(Ud).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hd.subVectors(this.c,this.b),Ud.subVectors(this.a,this.b),Hd.cross(Ud).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Kd.subVectors(r,n),qd.subVectors(i,n),Yd.subVectors(e,n);let s=Kd.dot(Yd),c=qd.dot(Yd);if(s<=0&&c<=0)return t.copy(n);Xd.subVectors(e,r);let l=Kd.dot(Xd),u=qd.dot(Xd);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Kd,a);Zd.subVectors(e,i);let f=Kd.dot(Zd),p=qd.dot(Zd);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(qd,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Jd.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Jd,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Kd,a).addScaledVector(qd,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nf=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(af.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(af.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=af.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,af):af.fromBufferAttribute(r,t),af.applyMatrix4(e.matrixWorld),this.expandByPoint(af);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),of.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),of.copy(e.boundingBox)),of.applyMatrix4(e.matrixWorld),this.union(of)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,af),af.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pf),mf.subVectors(this.max,pf),sf.subVectors(e.a,pf),cf.subVectors(e.b,pf),lf.subVectors(e.c,pf),uf.subVectors(cf,sf),df.subVectors(lf,cf),ff.subVectors(sf,lf);let t=[0,-uf.z,uf.y,0,-df.z,df.y,0,-ff.z,ff.y,uf.z,0,-uf.x,df.z,0,-df.x,ff.z,0,-ff.x,-uf.y,uf.x,0,-df.y,df.x,0,-ff.y,ff.x,0];return!_f(t,sf,cf,lf,mf)||(t=[1,0,0,0,1,0,0,0,1],!_f(t,sf,cf,lf,mf))?!1:(hf.crossVectors(uf,df),t=[hf.x,hf.y,hf.z],_f(t,sf,cf,lf,mf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,af).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(af).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rf[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rf[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rf[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rf[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rf[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rf[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rf[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rf[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rf),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rf=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],af=new Z,of=new nf,sf=new Z,cf=new Z,lf=new Z,uf=new Z,df=new Z,ff=new Z,pf=new Z,mf=new Z,hf=new Z,gf=new Z;function _f(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){gf.fromArray(e,a);let o=i.x*Math.abs(gf.x)+i.y*Math.abs(gf.y)+i.z*Math.abs(gf.z),s=t.dot(gf),c=n.dot(gf),l=r.dot(gf);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var vf=new Z,yf=new X,bf=0,xf=class extends ou{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=Ic,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yf.fromBufferAttribute(this,t),yf.applyMatrix3(e),this.setXY(t,yf.x,yf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vf.fromBufferAttribute(this,t),vf.applyMatrix3(e),this.setXYZ(t,vf.x,vf.y,vf.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vf.fromBufferAttribute(this,t),vf.applyMatrix4(e),this.setXYZ(t,vf.x,vf.y,vf.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vf.fromBufferAttribute(this,t),vf.applyNormalMatrix(e),this.setXYZ(t,vf.x,vf.y,vf.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vf.fromBufferAttribute(this,t),vf.transformDirection(e),this.setXYZ(t,vf.x,vf.y,vf.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ju(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mu(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ju(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mu(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ju(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mu(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ju(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mu(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ju(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mu(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mu(t,this.array),n=Mu(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mu(t,this.array),n=Mu(n,this.array),r=Mu(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Mu(t,this.array),n=Mu(n,this.array),r=Mu(r,this.array),i=Mu(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Sf=class extends xf{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Cf=class extends xf{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wf=class extends xf{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tf=new nf,Ef=new Z,Df=new Z,Of=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Tf.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ef.subVectors(e,this.center);let t=Ef.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ef,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ef.copy(e.center).add(Df)),this.expandByPoint(Ef.copy(e.center).sub(Df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kf=0,Af=new id,jf=new jd,Mf=new Z,Nf=new nf,Pf=new nf,Ff=new Z,If=class e extends ou{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=du(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xl(e)?Cf:Sf)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Lu().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Af.makeRotationFromQuaternion(e),this.applyMatrix4(Af),this}rotateX(e){return Af.makeRotationX(e),this.applyMatrix4(Af),this}rotateY(e){return Af.makeRotationY(e),this.applyMatrix4(Af),this}rotateZ(e){return Af.makeRotationZ(e),this.applyMatrix4(Af),this}translate(e,t,n){return Af.makeTranslation(e,t,n),this.applyMatrix4(Af),this}scale(e,t,n){return Af.makeScale(e,t,n),this.applyMatrix4(Af),this}lookAt(e){return jf.lookAt(e),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mf).negate(),this.translate(Mf.x,Mf.y,Mf.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new wf(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&J(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nf);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Y(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Nf.setFromBufferAttribute(n),this.morphTargetsRelative?(Ff.addVectors(this.boundingBox.min,Nf.min),this.boundingBox.expandByPoint(Ff),Ff.addVectors(this.boundingBox.max,Nf.max),this.boundingBox.expandByPoint(Ff)):(this.boundingBox.expandByPoint(Nf.min),this.boundingBox.expandByPoint(Nf.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Y(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Of);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Y(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(Nf.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pf.setFromBufferAttribute(n),this.morphTargetsRelative?(Ff.addVectors(Nf.min,Pf.min),Nf.expandByPoint(Ff),Ff.addVectors(Nf.max,Pf.max),Nf.expandByPoint(Ff)):(Nf.expandByPoint(Pf.min),Nf.expandByPoint(Pf.max))}Nf.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ff.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ff));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ff.fromBufferAttribute(a,t),o&&(Mf.fromBufferAttribute(e,t),Ff.add(Mf)),r=Math.max(r,n.distanceToSquared(Ff))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Y(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Y(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new xf(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Z,s[e]=new Z;let c=new Z,l=new Z,u=new Z,d=new X,f=new X,p=new X,m=new Z,h=new Z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Z,y=new Z,b=new Z,x=new Z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new xf(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ff.fromBufferAttribute(e,t),Ff.normalize(),e.setXYZ(t,Ff.x,Ff.y,Ff.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new xf(a,r,i)}if(this.index===null)return J(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Lf=0,Rf=class extends ou{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=du(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zd(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ql,this.stencilZFail=ql,this.stencilZPass=ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){J(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){J(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new zd().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new X().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zf=new Z,Bf=new Z,Vf=new Z,Hf=new Z,Uf=new Z,Wf=new Z,Gf=new Z,Kf=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zf)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zf.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zf.copy(this.origin).addScaledVector(this.direction,t),zf.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bf.copy(e).add(t).multiplyScalar(.5),Vf.copy(t).sub(e).normalize(),Hf.copy(this.origin).sub(Bf);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Vf),o=Hf.dot(this.direction),s=-Hf.dot(Vf),c=Hf.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bf).addScaledVector(Vf,d),f}intersectSphere(e,t){zf.subVectors(e.center,this.origin);let n=zf.dot(this.direction),r=zf.dot(zf)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zf)!==null}intersectTriangle(e,t,n,r,i){Uf.subVectors(t,e),Wf.subVectors(n,e),Gf.crossVectors(Uf,Wf);let a=this.direction.dot(Gf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hf.subVectors(this.origin,e);let s=o*this.direction.dot(Wf.crossVectors(Hf,Wf));if(s<0)return null;let c=o*this.direction.dot(Uf.cross(Hf));if(c<0||s+c>a)return null;let l=-o*Hf.dot(Gf);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qf=class extends Rf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new zd(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new md,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jf=new id,Yf=new Kf,Xf=new Of,Zf=new Z,Qf=new Z,$f=new Z,ep=new Z,tp=new Z,np=new Z,rp=new Z,ip=new Z,ap=class extends jd{constructor(e=new If,t=new qf){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){np.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(tp.fromBufferAttribute(s,e),a?np.addScaledVector(tp,r):np.addScaledVector(tp.sub(t),r))}t.add(np)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xf.copy(n.boundingSphere),Xf.applyMatrix4(i),Yf.copy(e.ray).recast(e.near),!(Xf.containsPoint(Yf.origin)===!1&&(Yf.intersectSphere(Xf,Zf)===null||Yf.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Jf.copy(i).invert(),Yf.copy(e.ray).applyMatrix4(Jf),(n.boundingBox===null||Yf.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Yf)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=sp(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=sp(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=sp(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=sp(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function op(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ip.copy(s),ip.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ip);return l<n.near||l>n.far?null:{distance:l,point:ip.clone(),object:e}}function sp(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Qf),e.getVertexPosition(c,$f),e.getVertexPosition(l,ep);let u=op(e,t,n,r,Qf,$f,ep,rp);if(u){let e=new Z;tf.getBarycoord(rp,Qf,$f,ep,e),i&&(u.uv=tf.getInterpolatedAttribute(i,s,c,l,e,new X)),a&&(u.uv1=tf.getInterpolatedAttribute(a,s,c,l,e,new X)),o&&(u.normal=tf.getInterpolatedAttribute(o,s,c,l,e,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Z,materialIndex:0};tf.getNormal(Qf,$f,ep,t.normal),u.face=t,u.barycoord=e}return u}var cp=class extends Qu{constructor(e=null,t=1,n=1,r,i,a,o,s,c=wc,l=wc,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lp=new Z,up=new Z,dp=new Lu,fp=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=lp.subVectors(n,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(lp),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dp.getNormalMatrix(e),r=this.coplanarPoint(lp).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pp=new Of,mp=new X(.5,.5),hp=new Z,gp=class{constructor(e=new fp,t=new fp,n=new fp,r=new fp,i=new fp,a=new fp){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yl,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pp.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pp.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pp)}intersectsSprite(e){return pp.center.set(0,0,0),pp.radius=.7071067811865476+mp.distanceTo(e.center),pp.applyMatrix4(e.matrixWorld),this.intersectsSphere(pp)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(hp.x=r.normal.x>0?e.max.x:e.min.x,hp.y=r.normal.y>0?e.max.y:e.min.y,hp.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hp)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_p=class extends Qu{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vp=class extends Qu{constructor(e,t,n=Fc,r,i,a,o=wc,s=wc,c,l=Kc,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yp=class extends vp{constructor(e,t=Fc,n=301,r,i,a=wc,o=wc,s,c=Kc){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bp=class extends Qu{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xp=class e extends If{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new wf(c,3)),this.setAttribute(`normal`,new wf(l,3)),this.setAttribute(`uv`,new wf(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Sp=class e extends If{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new wf(p,3)),this.setAttribute(`normal`,new wf(m,3)),this.setAttribute(`uv`,new wf(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Cp(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Tp(i))i.isRenderTargetTexture?(J(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Tp(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function wp(e){let t={};for(let n=0;n<e.length;n++){let r=Cp(e[n]);for(let e in r)t[e]=r[e]}return t}function Tp(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ep(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Dp(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Hu.workingColorSpace}var Op={clone:Cp,merge:wp},kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jp=class extends Rf{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cp(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new zd().setHex(r.value);break;case`v2`:this.uniforms[n].value=new X().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new $u().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Lu().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new id().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mp=class extends jp{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Np=class extends Rf{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new zd(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zd(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new md,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pp=class extends Rf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fp=class extends Rf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ip(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Lp=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Rp=class extends Lp{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:i=e,o=2*t-n;break;case Vl:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Bl:a=e,s=2*n-t;break;case Vl:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},zp=class extends Lp{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Bp=class extends Lp{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vp=class extends Lp{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Hp=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ip(t,this.TimeBufferType),this.values=Ip(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ip(e.times,Array),values:Ip(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fl:t=this.InterpolantFactoryMethodDiscrete;break;case Il:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break;case Rl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return J(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fl;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return Ll;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Y(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Y(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Y(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Y(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Zl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Y(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ll,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hp.prototype.ValueTypeName=``,Hp.prototype.TimeBufferType=Float32Array,Hp.prototype.ValueBufferType=Float32Array,Hp.prototype.DefaultInterpolation=Il;var Up=class extends Hp{constructor(e,t,n){super(e,t,n)}};Up.prototype.ValueTypeName=`bool`,Up.prototype.ValueBufferType=Array,Up.prototype.DefaultInterpolation=Fl,Up.prototype.InterpolantFactoryMethodLinear=void 0,Up.prototype.InterpolantFactoryMethodSmooth=void 0;var Wp=class extends Hp{constructor(e,t,n,r){super(e,t,n,r)}};Wp.prototype.ValueTypeName=`color`;var Gp=class extends Hp{constructor(e,t,n,r){super(e,t,n,r)}};Gp.prototype.ValueTypeName=`number`;var Kp=class extends Lp{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Pu.slerpFlat(i,0,a,c-o,a,c,s);return i}},qp=class extends Hp{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Kp(this.times,this.values,this.getValueSize(),e)}};qp.prototype.ValueTypeName=`quaternion`,qp.prototype.InterpolantFactoryMethodSmooth=void 0;var Jp=class extends Hp{constructor(e,t,n){super(e,t,n)}};Jp.prototype.ValueTypeName=`string`,Jp.prototype.ValueBufferType=Array,Jp.prototype.DefaultInterpolation=Fl,Jp.prototype.InterpolantFactoryMethodLinear=void 0,Jp.prototype.InterpolantFactoryMethodSmooth=void 0;var Yp=class extends Hp{constructor(e,t,n,r){super(e,t,n,r)}};Yp.prototype.ValueTypeName=`vector`;var Xp=class extends jd{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new zd(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zp=new id,Qp=new Z,$p=new Z,em=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=Ac,this.map=null,this.mapPass=null,this.matrix=new id,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new $u(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qp),$p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($p),t.updateMatrixWorld(),Zp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zp,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tm=new Z,nm=new Pu,rm=new Z,im=class extends jd{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new id,this.projectionMatrix=new id,this.projectionMatrixInverse=new id,this.coordinateSystem=Yl,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tm,nm,rm),rm.x===1&&rm.y===1&&rm.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tm,nm,rm.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tm,nm,rm),rm.x===1&&rm.y===1&&rm.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tm,nm,rm.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},am=new Z,om=new X,sm=new X,cm=class extends im{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=uu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uu*2*Math.atan(Math.tan(lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){am.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(am.x,am.y).multiplyScalar(-e/am.z),am.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(am.x,am.y).multiplyScalar(-e/am.z)}getViewSize(e,t){return this.getViewBounds(e,om,sm),t.subVectors(sm,om)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lm=class extends im{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},um=class extends em{constructor(){super(new lm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dm=class extends Xp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(jd.DEFAULT_UP),this.updateMatrix(),this.target=new jd,this.shadow=new um}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fm=class extends Xp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},pm=-90,mm=1,hm=class extends jd{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new cm(pm,mm,e,t);r.layers=this.layers,this.add(r);let i=new cm(pm,mm,e,t);i.layers=this.layers,this.add(i);let a=new cm(pm,mm,e,t);a.layers=this.layers,this.add(a);let o=new cm(pm,mm,e,t);o.layers=this.layers,this.add(o);let s=new cm(pm,mm,e,t);s.layers=this.layers,this.add(s);let c=new cm(pm,mm,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gm=class extends cm{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_m=`\\[\\]\\.:\\/`,vm=RegExp(`[\\[\\]\\.:\\/]`,`g`),ym=`[^\\[\\]\\.:\\/]`,bm=`[^`+_m.replace(`\\.`,``)+`]`,xm=`((?:WC+[\\/:])*)`.replace(`WC`,ym),Sm=`(WCOD+)?`.replace(`WCOD`,bm),Cm=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ym),wm=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ym),Tm=RegExp(`^`+xm+Sm+Cm+wm+`$`),Em=[`material`,`materials`,`bones`,`map`],Dm=class{constructor(e,t,n){let r=n||Om.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Om=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(vm,``)}static parseTrackName(e){let t=Tm.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Em.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){J(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Y(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Y(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Y(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Y(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Y(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Y(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Y(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Y(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Y(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Y(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Om.Composite=Dm,Om.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Om.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Om.prototype.GetterByBindingType=[Om.prototype._getValue_direct,Om.prototype._getValue_array,Om.prototype._getValue_arrayElement,Om.prototype._getValue_toArray],Om.prototype.SetterByBindingTypeAndVersioning=[[Om.prototype._setValue_direct,Om.prototype._setValue_direct_setNeedsUpdate,Om.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Om.prototype._setValue_array,Om.prototype._setValue_array_setNeedsUpdate,Om.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Om.prototype._setValue_arrayElement,Om.prototype._setValue_arrayElement_setNeedsUpdate,Om.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Om.prototype._setValue_fromArray,Om.prototype._setValue_fromArray_setNeedsUpdate,Om.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var km=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=fu(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(fu(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Am=class extends ou{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){J(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function jm(e,t,n,r){let i=Mm(r);switch(n){case Uc:return e*t;case Jc:return e*t/i.components*i.byteLength;case Yc:return e*t/i.components*i.byteLength;case Xc:return e*t*2/i.components*i.byteLength;case Zc:return e*t*2/i.components*i.byteLength;case Wc:return e*t*3/i.components*i.byteLength;case Gc:return e*t*4/i.components*i.byteLength;case Qc:return e*t*4/i.components*i.byteLength;case $c:case el:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case tl:case nl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case il:case ol:return Math.max(e,16)*Math.max(t,8)/4;case rl:case al:return Math.max(e,8)*Math.max(t,8)/2;case sl:case cl:case ul:case dl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ll:case fl:case pl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ol:case kl:case Al:return Math.ceil(e/4)*Math.ceil(t/4)*16;case jl:case Ml:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Nl:case Pl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Mm(e){switch(e){case Ac:case jc:return{byteLength:1,components:1};case Nc:case Mc:case Lc:return{byteLength:2,components:1};case Rc:case zc:return{byteLength:2,components:4};case Fc:case Pc:case Ic:return{byteLength:4,components:1};case Vc:case Hc:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?J(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Nm(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Pm(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Fm={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new zd(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lu},alphaMap:{value:null},alphaMapTransform:{value:new Lu},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lu}},envmap:{envMap:{value:null},envMapRotation:{value:new Lu},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lu}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lu}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lu},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lu},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lu},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lu}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lu}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lu}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zd(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new zd(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lu},alphaTest:{value:0},uvTransform:{value:new Lu}},sprite:{diffuse:{value:new zd(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lu},alphaMap:{value:null},alphaMapTransform:{value:new Lu},alphaTest:{value:0}}},Im={basic:{uniforms:wp([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Fm.meshbasic_vert,fragmentShader:Fm.meshbasic_frag},lambert:{uniforms:wp([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new zd(0)},envMapIntensity:{value:1}}]),vertexShader:Fm.meshlambert_vert,fragmentShader:Fm.meshlambert_frag},phong:{uniforms:wp([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new zd(0)},specular:{value:new zd(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fm.meshphong_vert,fragmentShader:Fm.meshphong_frag},standard:{uniforms:wp([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new zd(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fm.meshphysical_vert,fragmentShader:Fm.meshphysical_frag},toon:{uniforms:wp([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new zd(0)}}]),vertexShader:Fm.meshtoon_vert,fragmentShader:Fm.meshtoon_frag},matcap:{uniforms:wp([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Fm.meshmatcap_vert,fragmentShader:Fm.meshmatcap_frag},points:{uniforms:wp([Q.points,Q.fog]),vertexShader:Fm.points_vert,fragmentShader:Fm.points_frag},dashed:{uniforms:wp([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fm.linedashed_vert,fragmentShader:Fm.linedashed_frag},depth:{uniforms:wp([Q.common,Q.displacementmap]),vertexShader:Fm.depth_vert,fragmentShader:Fm.depth_frag},normal:{uniforms:wp([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Fm.meshnormal_vert,fragmentShader:Fm.meshnormal_frag},sprite:{uniforms:wp([Q.sprite,Q.fog]),vertexShader:Fm.sprite_vert,fragmentShader:Fm.sprite_frag},background:{uniforms:{uvTransform:{value:new Lu},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fm.background_vert,fragmentShader:Fm.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lu}},vertexShader:Fm.backgroundCube_vert,fragmentShader:Fm.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fm.cube_vert,fragmentShader:Fm.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fm.equirect_vert,fragmentShader:Fm.equirect_frag},distance:{uniforms:wp([Q.common,Q.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fm.distance_vert,fragmentShader:Fm.distance_frag},shadow:{uniforms:wp([Q.lights,Q.fog,{color:{value:new zd(0)},opacity:{value:1}}]),vertexShader:Fm.shadow_vert,fragmentShader:Fm.shadow_frag}};Im.physical={uniforms:wp([Im.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lu},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lu},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lu},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lu},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lu},sheen:{value:0},sheenColor:{value:new zd(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lu},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lu},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lu},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lu},attenuationDistance:{value:0},attenuationColor:{value:new zd(0)},specularColor:{value:new zd(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lu},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lu},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lu}}]),vertexShader:Fm.meshphysical_vert,fragmentShader:Fm.meshphysical_frag};var Lm={r:0,b:0,g:0},Rm=new id,zm=new Lu;zm.set(-1,0,0,0,1,0,0,0,1);function Bm(e,t,n,r,i,a){let o=new zd(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ap(new xp(1,1,1),new jp({name:`BackgroundCubeMaterial`,uniforms:Cp(Im.backgroundCube.uniforms),vertexShader:Im.backgroundCube.vertexShader,fragmentShader:Im.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zm),l.material.toneMapped=Hu.getTransfer(i.colorSpace)!==Kl,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ap(new Sp(2,2),new jp({name:`BackgroundMaterial`,uniforms:Cp(Im.background.uniforms),vertexShader:Im.background.vertexShader,fragmentShader:Im.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Hu.getTransfer(i.colorSpace)!==Kl,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Lm,Dp(e)),n.buffers.color.setClear(Lm.r,Lm.g,Lm.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Vm(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Hm(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Um(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(J(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&J(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Wm(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fp,s=new Lu,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Gm=4,Km=[.125,.215,.35,.446,.526,.582],qm=20,Jm=256,Ym=new lm,Xm=new zd,Zm=null,Qm=0,$m=0,eh=!1,th=new Z,nh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=th}=i;Zm=this._renderer.getRenderTarget(),Qm=this._renderer.getActiveCubeFace(),$m=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zm,Qm,$m),this._renderer.xr.enabled=eh,e.scissorTest=!1,ah(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zm=this._renderer.getRenderTarget(),Qm=this._renderer.getActiveCubeFace(),$m=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dc,minFilter:Dc,generateMipmaps:!1,type:Lc,format:Gc,colorSpace:Wl,depthBuffer:!1},r=ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rh(r)),this._blurMaterial=sh(r,e,t),this._ggxMaterial=oh(r,e,t)}return r}_compileMaterial(e){let t=new ap(new If,e);this._renderer.compile(t,Ym)}_sceneToCubeUV(e,t,n,r,i){let a=new cm(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Xm),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ap(new xp,new qf({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Xm),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ah(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ah(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ym)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Gm?n-d+Gm:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ah(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ym),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ah(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ym)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Y(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):qm;m>qm&&J(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qm}`);let h=[],g=0;for(let e=0;e<qm;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];ah(t,3*v*(r>_-Gm?r-_+Gm:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ym)}};function rh(e){let t=[],n=[],r=[],i=e,a=e-Gm+1+Km.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Gm?s=Km[o-e+Gm-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new If;h.setAttribute(`position`,new xf(f,3)),h.setAttribute(`uv`,new xf(p,2)),h.setAttribute(`faceIndex`,new xf(m,1)),r.push(new ap(h,null)),i>Gm&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ih(e,t,n){let r=new td(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ah(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function oh(e,t,n){return new jp({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Jm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sh(e,t,n){let r=new Float32Array(qm),i=new Z(0,1,0);return new jp({name:`SphericalGaussianBlur`,defines:{n:qm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ch(){return new jp({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lh(){return new jp({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var dh=class extends td{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _p(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xp(5,5,5),i=new jp({name:`CubemapFromEquirect`,uniforms:Cp(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ap(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Dc),new hm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function fh(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new dh(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new nh(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new nh(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ph(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ru(`WebGLRenderer: `+e+` extension not supported.`),t}}}function mh(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Cf:Sf)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function hh(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function gh(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Y(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function _h(e,t,n){let r=new WeakMap,i=new $u;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new nd(h,p,m,u);g.type=Ic,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new X(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function vh(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var yh={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function bh(e,t,n,r,i,a){let o=new td(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new vp(t,n):void 0}),s=new td(t,n,{type:Lc,depthBuffer:!1,stencilBuffer:!1}),c=new If;c.setAttribute(`position`,new wf([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new wf([0,2,0,0,2,0],2));let l=new Mp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ap(c,l),d=new lm(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Hu.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=yh[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var xh=new Qu,Sh=new vp(1,1),Ch=new nd,wh=new rd,Th=new _p,Eh=[],Dh=[],Oh=new Float32Array(16),kh=new Float32Array(9),Ah=new Float32Array(4);function jh(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Eh[i];if(a===void 0&&(a=new Float32Array(i),Eh[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Mh(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Nh(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ph(e,t){let n=Dh[t];n===void 0&&(n=new Int32Array(t),Dh[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Fh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ih(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mh(n,t))return;e.uniform2fv(this.addr,t),Nh(n,t)}}function Lh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mh(n,t))return;e.uniform3fv(this.addr,t),Nh(n,t)}}function Rh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mh(n,t))return;e.uniform4fv(this.addr,t),Nh(n,t)}}function zh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mh(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Nh(n,t)}else{if(Mh(n,r))return;Ah.set(r),e.uniformMatrix2fv(this.addr,!1,Ah),Nh(n,r)}}function Bh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mh(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Nh(n,t)}else{if(Mh(n,r))return;kh.set(r),e.uniformMatrix3fv(this.addr,!1,kh),Nh(n,r)}}function Vh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mh(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Nh(n,t)}else{if(Mh(n,r))return;Oh.set(r),e.uniformMatrix4fv(this.addr,!1,Oh),Nh(n,r)}}function Hh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Uh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mh(n,t))return;e.uniform2iv(this.addr,t),Nh(n,t)}}function Wh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mh(n,t))return;e.uniform3iv(this.addr,t),Nh(n,t)}}function Gh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mh(n,t))return;e.uniform4iv(this.addr,t),Nh(n,t)}}function Kh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function qh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mh(n,t))return;e.uniform2uiv(this.addr,t),Nh(n,t)}}function Jh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mh(n,t))return;e.uniform3uiv(this.addr,t),Nh(n,t)}}function Yh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mh(n,t))return;e.uniform4uiv(this.addr,t),Nh(n,t)}}function Xh(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Sh.compareFunction=n.isReversedDepthBuffer()?518:515,a=Sh):a=xh,n.setTexture2D(t||a,i)}function Zh(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||wh,i)}function Qh(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Th,i)}function $h(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ch,i)}function eg(e){switch(e){case 5126:return Fh;case 35664:return Ih;case 35665:return Lh;case 35666:return Rh;case 35674:return zh;case 35675:return Bh;case 35676:return Vh;case 5124:case 35670:return Hh;case 35667:case 35671:return Uh;case 35668:case 35672:return Wh;case 35669:case 35673:return Gh;case 5125:return Kh;case 36294:return qh;case 36295:return Jh;case 36296:return Yh;case 35678:case 36198:case 36298:case 36306:case 35682:return Xh;case 35679:case 36299:case 36307:return Zh;case 35680:case 36300:case 36308:case 36293:return Qh;case 36289:case 36303:case 36311:case 36292:return $h}}function tg(e,t){e.uniform1fv(this.addr,t)}function ng(e,t){let n=jh(t,this.size,2);e.uniform2fv(this.addr,n)}function rg(e,t){let n=jh(t,this.size,3);e.uniform3fv(this.addr,n)}function ig(e,t){let n=jh(t,this.size,4);e.uniform4fv(this.addr,n)}function ag(e,t){let n=jh(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function og(e,t){let n=jh(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function sg(e,t){let n=jh(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function cg(e,t){e.uniform1iv(this.addr,t)}function lg(e,t){e.uniform2iv(this.addr,t)}function ug(e,t){e.uniform3iv(this.addr,t)}function dg(e,t){e.uniform4iv(this.addr,t)}function fg(e,t){e.uniform1uiv(this.addr,t)}function pg(e,t){e.uniform2uiv(this.addr,t)}function mg(e,t){e.uniform3uiv(this.addr,t)}function hg(e,t){e.uniform4uiv(this.addr,t)}function gg(e,t,n){let r=this.cache,i=t.length,a=Ph(n,i);Mh(r,a)||(e.uniform1iv(this.addr,a),Nh(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Sh:xh;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function _g(e,t,n){let r=this.cache,i=t.length,a=Ph(n,i);Mh(r,a)||(e.uniform1iv(this.addr,a),Nh(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||wh,a[e])}function vg(e,t,n){let r=this.cache,i=t.length,a=Ph(n,i);Mh(r,a)||(e.uniform1iv(this.addr,a),Nh(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Th,a[e])}function yg(e,t,n){let r=this.cache,i=t.length,a=Ph(n,i);Mh(r,a)||(e.uniform1iv(this.addr,a),Nh(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ch,a[e])}function bg(e){switch(e){case 5126:return tg;case 35664:return ng;case 35665:return rg;case 35666:return ig;case 35674:return ag;case 35675:return og;case 35676:return sg;case 5124:case 35670:return cg;case 35667:case 35671:return lg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return yg}}var xg=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}},Sg=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}},Cg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},wg=/(\w+)(\])?(\[|\.)?/g;function Tg(e,t){e.seq.push(t),e.map[t.id]=t}function Eg(e,t,n){let r=e.name,i=r.length;for(wg.lastIndex=0;;){let a=wg.exec(r),o=wg.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Tg(n,l===void 0?new xg(s,e,t):new Sg(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Cg(s),Tg(n,e)),n=e}}}var Dg=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Eg(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Og(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var kg=37297,Ag=0;function jg(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Mg=new Lu;function Ng(e){Hu._getMatrix(Mg,Hu.workingColorSpace,e);let t=`mat3( ${Mg.elements.map(e=>e.toFixed(4))} )`;switch(Hu.getTransfer(e)){case Gl:return[t,`LinearTransferOETF`];case Kl:return[t,`sRGBTransferOETF`];default:return J(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Pg(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+jg(e.getShaderSource(t),r)}return i}function Fg(e,t){let n=Ng(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ig={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Lg(e,t){let n=Ig[t];return n===void 0?(J(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Rg=new Z;function zg(){return Hu.getLuminanceCoefficients(Rg),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Rg.x.toFixed(4)}, ${Rg.y.toFixed(4)}, ${Rg.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Bg(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ug).join(`
`)}function Vg(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Hg(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ug(e){return e!==``}function Wg(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qg(e){return e.replace(Kg,Yg)}var Jg=new Map;function Yg(e,t){let n=Fm[t];if(n===void 0){let e=Jg.get(t);if(e!==void 0)n=Fm[e],J(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return qg(n)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(e){return e.replace(Xg,Qg)}function Qg(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function $g(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var e_={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function t_(e){return e_[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var n_={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function r_(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:n_[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var i_={302:`ENVMAP_MODE_REFRACTION`};function a_(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:i_[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var o_={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function s_(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:o_[e.combine]||`ENVMAP_BLENDING_NONE`}function c_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function l_(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=t_(n),l=r_(n),u=a_(n),d=s_(n),f=c_(n),p=Bg(n),m=Vg(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ug).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ug).join(`
`),_.length>0&&(_+=`
`)):(g=[$g(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ug).join(`
`),_=[$g(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Fm.tonemapping_pars_fragment,n.toneMapping===0?``:Lg(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Fm.colorspace_pars_fragment,Fg(`linearToOutputTexel`,n.outputColorSpace),zg(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ug).join(`
`)),o=qg(o),o=Wg(o,n),o=Gg(o,n),s=qg(s),s=Wg(s,n),s=Gg(s,n),o=Zg(o),s=Zg(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Og(i,i.VERTEX_SHADER,y),S=Og(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Pg(i,x,`vertex`),n=Pg(i,S,`fragment`);Y(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):J(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Dg(i,h),T=Hg(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,kg)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var u_=0,d_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new f_(e),t.set(e,n)),n}},f_=class{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}};function p_(e){return e===1030||e===37490||e===36285}function m_(e,t,n,r,i,a){let o=new hd,s=new d_,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&J(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Im[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,R=!!i.aoMap,ee=!!i.lightMap,z=!!i.bumpMap&&i.wireframe===!1,te=!!i.normalMap,B=!!i.displacementMap,V=!!i.emissiveMap,ne=!!i.metalnessMap,re=!!i.roughnessMap,ie=i.anisotropy>0,ae=i.clearcoat>0,oe=i.dispersion>0,se=i.iridescence>0,ce=i.sheen>0,le=i.transmission>0,ue=ie&&!!i.anisotropyMap,de=ae&&!!i.clearcoatMap,fe=ae&&!!i.clearcoatNormalMap,pe=ae&&!!i.clearcoatRoughnessMap,me=se&&!!i.iridescenceMap,he=se&&!!i.iridescenceThicknessMap,H=ce&&!!i.sheenColorMap,ge=ce&&!!i.sheenRoughnessMap,_e=!!i.specularMap,ve=!!i.specularColorMap,U=!!i.specularIntensityMap,ye=le&&!!i.transmissionMap,W=le&&!!i.thicknessMap,G=!!i.gradientMap,be=!!i.alphaMap,K=i.alphaTest>0,xe=!!i.alphaHash,Se=!!i.extensions,Ce=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let we={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Hu.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:z,normalMap:te,displacementMap:B,emissiveMap:V,normalMapObjectSpace:te&&i.normalMapType===1,normalMapTangentSpace:te&&i.normalMapType===0,packedNormalMap:te&&i.normalMapType===0&&p_(i.normalMap.format),metalnessMap:ne,roughnessMap:re,anisotropy:ie,anisotropyMap:ue,clearcoat:ae,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,dispersion:oe,iridescence:se,iridescenceMap:me,iridescenceThicknessMap:he,sheen:ce,sheenColorMap:H,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:ve,specularIntensityMap:U,transmission:le,transmissionMap:ye,thicknessMap:W,gradientMap:G,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:be,alphaTest:K,alphaHash:xe,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:R&&m(i.aoMap.channel),lightMapUv:ee&&m(i.lightMap.channel),bumpMapUv:z&&m(i.bumpMap.channel),normalMapUv:te&&m(i.normalMap.channel),displacementMapUv:B&&m(i.displacementMap.channel),emissiveMapUv:V&&m(i.emissiveMap.channel),metalnessMapUv:ne&&m(i.metalnessMap.channel),roughnessMapUv:re&&m(i.roughnessMap.channel),anisotropyMapUv:ue&&m(i.anisotropyMap.channel),clearcoatMapUv:de&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:H&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(i.sheenRoughnessMap.channel),specularMapUv:_e&&m(i.specularMap.channel),specularColorMapUv:ve&&m(i.specularColorMap.channel),specularIntensityMapUv:U&&m(i.specularIntensityMap.channel),transmissionMapUv:ye&&m(i.transmissionMap.channel),thicknessMapUv:W&&m(i.thicknessMap.channel),alphaMapUv:be&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(te||ie),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||be),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&te===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Hu.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:V&&i.emissiveMap.isVideoTexture===!0&&Hu.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Se&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Se&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Im[t];n=Op.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new l_(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function h_(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function g_(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function __(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function v_(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||g_),r.length>1&&r.sort(t||__),i.length>1&&i.sort(t||__),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function y_(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new v_,e.set(t,[i])):n>=r.length?(i=new v_,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function b_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Z,color:new zd};break;case`SpotLight`:n={position:new Z,direction:new Z,color:new zd,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Z,color:new zd,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Z,skyColor:new zd,groundColor:new zd};break;case`RectAreaLight`:n={color:new zd,position:new Z,halfWidth:new Z,halfHeight:new Z}}return e[t.id]=n,n}}}function x_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var S_=0;function C_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function w_(e){let t=new b_,n=x_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Z);let i=new Z,a=new id,o=new id;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(C_);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=S_++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function T_(e){let t=new w_(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function E_(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new T_(e),t.set(n,[a])):r>=i.length?(a=new T_(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k_=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],A_=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],j_=new id,M_=new Z,N_=new Z;function P_(e,t,n){let r=new gp,i=new X,a=new X,o=new $u,s=new Pp,c=new Fp,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new jp({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:D_,fragmentShader:O_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new If;m.setAttribute(`position`,new xf(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ap(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(J(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){J(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){J(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new td(i.x,i.y,{format:Xc,type:Lc,minFilter:Dc,magFilter:Dc,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new vp(i.x,i.y,Ic),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Kc,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=wc,d.map.depthTexture.magFilter=wc}else l.isPointLight?(d.map=new dh(i.x),d.map.depthTexture=new yp(i.x,Fc)):(d.map=new td(i.x,i.y),d.map.depthTexture=new vp(i.x,i.y,Fc)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Kc,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Dc,d.map.depthTexture.magFilter=Dc):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=wc,d.map.depthTexture.magFilter=wc);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),M_.setFromMatrixPosition(l.matrixWorld),e.position.copy(M_),N_.copy(e.position),N_.add(k_[t]),e.up.copy(A_[t]),e.lookAt(N_),e.updateMatrixWorld(),n.makeTranslation(-M_.x,-M_.y,-M_.z),j_.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(j_,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new td(i.x,i.y,{format:Xc,type:Lc})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function F_(e,t){function n(){let t=!1,n=new $u,r=null,i=new $u(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ne(e.DEPTH_TEST):re(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=au[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ne(e.STENCIL_TEST):re(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new zd(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),z=new $u().fromArray(R),te=new $u().fromArray(ee);function B(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let V={};V[e.TEXTURE_2D]=B(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=B(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=B(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=B(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ne(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),ne(e.CULL_FACE),le(0);function ne(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function re(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(re(e.BLEND),g=!1);return}if(g===!1&&(ne(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Y(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Y(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Y(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Y(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ue(t,n){t.side===2?re(e.CULL_FACE):ne(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ne(e.SAMPLE_ALPHA_TO_COVERAGE):re(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?re(e.CULL_FACE):(ne(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function pe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function me(t,n,r){t?(ne(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):re(e.POLYGON_OFFSET_FILL)}function he(t){t?ne(e.SCISSOR_TEST):re(e.SCISSOR_TEST)}function H(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ge(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||V[t]),i.type=t,i.texture=n)}function _e(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ve(){try{e.compressedTexImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function ye(){try{e.texSubImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function W(){try{e.texSubImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function be(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function K(){try{e.texStorage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function xe(){try{e.texStorage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function Se(){try{e.texImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function Ce(){try{e.texImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function we(t){return d[t]===void 0?e.getParameter(t):d[t]}function Te(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function q(t){z.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))}function Ee(t){te.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),te.copy(t))}function De(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Oe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new zd(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,z.set(0,0,e.canvas.width,e.canvas.height),te.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ne,disable:re,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:H,bindTexture:ge,unbindTexture:_e,compressedTexImage2D:ve,compressedTexImage3D:U,texImage2D:Se,texImage3D:Ce,pixelStorei:Te,getParameter:we,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:K,texStorage3D:xe,texSubImage2D:ye,texSubImage3D:W,compressedTexSubImage2D:G,compressedTexSubImage3D:be,scissor:q,viewport:Ee,reset:ke}}function I_(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new X,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Ql(`canvas`)}function g(e,t,n){let r=1,i=ve(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),J(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&J(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];J(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||J(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Gl:Hu.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,J(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&J(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&ge(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)J(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)J(`WebGLRenderer: Texture marked for update but image is incomplete`);else{re(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){re(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){re(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ie(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let R={[xc]:e.REPEAT,[Sc]:e.CLAMP_TO_EDGE,[Cc]:e.MIRRORED_REPEAT},ee={[wc]:e.NEAREST,[Tc]:e.NEAREST_MIPMAP_NEAREST,[Ec]:e.NEAREST_MIPMAP_LINEAR,[Dc]:e.LINEAR,[Oc]:e.LINEAR_MIPMAP_NEAREST,[kc]:e.LINEAR_MIPMAP_LINEAR},z={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function te(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&J(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,R[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,R[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,R[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ee[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ee[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,z[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function B(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function V(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ne(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=V(n.start,r.width,4),c=V(t.start,r.width,4);n.start<=i+1&&a===c&&V(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function re(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=B(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Hu.getPrimaries(Hu.workingColorSpace),r=o.colorSpace===``?null:Hu.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=_e(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);te(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===qc,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ne(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=jm(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=jm(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=ve(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=ve(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ie(t,o,s){if(o.image.length!==6)return;let c=B(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Hu.getPrimaries(Hu.workingColorSpace),r=o.colorSpace===``?null:Hu.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=_e(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);te(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ve(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,he(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,he(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,he(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);H(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,he(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,he(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function se(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),te(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=he(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?se(i.__webglFramebuffer[0],t,0):se(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),oe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),oe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(t,n,i){let a=r.get(t);n!==void 0&&ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ce(t)}function ue(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&H(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=he(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),oe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),te(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),te(c,a),ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),te(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ce(t)}function de(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let fe=[],pe=[];function me(t){if(t.samples>0){if(H(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(fe.length=0,pe.length=0,fe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(fe.push(l),pe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function he(e){return Math.min(i.maxSamples,e.samples)}function H(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ge(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function _e(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Hu.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&J(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Y(`WebGLTextures: Unsupported texture color space:`,n)),t}function ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function L_(e,t){function n(n,r=``){let i,a=Hu.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,B_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new bp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jp({vertexShader:R_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ap(new Sp(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},V_=class extends ou{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new B_,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new X,C=null,w=new cm;w.viewport=new $u;let T=new cm;T.viewport=new $u;let E=[w,T],D=new gm,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Pd,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Pd,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Pd,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&J(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&J(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?qc:Kc,a=_.stencil?Bc:Fc);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new td(d.textureWidth,d.textureHeight,{format:Gc,type:Ac,depthTexture:new vp(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new td(f.framebufferWidth,f.framebufferHeight,{format:Gc,type:Ac,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new Z,P=new Z;function F(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;I(D,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?F(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),L(e,D,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=uu*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let R=null;function ee(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new cm,o.layers.enable(n),o.viewport=new $u,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new bp,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let z=new Nm;z.setAnimationLoop(ee),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},H_=new id,U_=new Lu;U_.set(-1,0,0,0,1,0,0,0,1);function W_(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Dp(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(U_),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function G_(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Y(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?J(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):J(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),q_=null;function J_(){return q_===null&&(q_=new cp(K_,16,16,Xc,Lc),q_.name=`DFG_LUT`,q_.minFilter=Dc,q_.magFilter=Dc,q_.wrapS=Sc,q_.wrapT=Sc,q_.generateMipmaps=!1,q_.needsUpdate=!0),q_}var Y_=class{constructor(e={}){let{canvas:t=$l(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ac}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Qc,Zc,Yc]),g=new Set([Ac,Fc,Nc,Bc,Rc,zc]),_=new Uint32Array(4),v=new Int32Array(4),y=new Z,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Ul;let j=0,M=0,N=null,P=-1,F=null,I=new $u,L=new $u,R=null,ee=new zd(0),z=0,te=t.width,B=t.height,V=1,ne=null,re=null,ie=new $u(0,0,te,B),ae=new $u(0,0,te,B),oe=!1,se=new gp,ce=!1,le=!1,ue=new id,de=new Z,fe=new $u,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function he(){return N===null?V:1}let H=n;function ge(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),H===null){let t=`webgl2`;if(H=ge(t,e),H===null)throw ge(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw Y(`WebGLRenderer: `+e.message),e}let _e,ve,U,ye,W,G,be,K,xe,Se,Ce,we,Te,q,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe;function Fe(){_e=new ph(H),_e.init(),Me=new L_(H,_e),ve=new Um(H,_e,e,Me),U=new F_(H,_e),ve.reversedDepthBuffer&&d&&U.buffers.depth.setReversed(!0),O=H.createFramebuffer(),k=H.createFramebuffer(),A=H.createFramebuffer(),ye=new gh(H),W=new h_,G=new I_(H,_e,U,W,ve,Me,ye),be=new fh(T),K=new Pm(H),Ne=new Vm(H,K),xe=new mh(H,K,ye,Ne),Se=new vh(H,xe,K,Ne,ye),ke=new _h(H,ve,G),Ee=new Wm(W),Ce=new m_(T,be,_e,ve,Ne,Ee),we=new W_(T,W),Te=new y_,q=new E_(_e),Oe=new Bm(T,be,U,Se,p,s),De=new P_(T,Se,ve),Pe=new G_(H,ye,ve,U),Ae=new Hm(H,_e,ye),je=new hh(H,_e,ye),ye.programs=Ce.programs,T.capabilities=ve,T.extensions=_e,T.properties=W,T.renderLists=Te,T.shadowMap=De,T.state=U,T.info=ye}Fe(),m!==1009&&(w=new bh(m,t.width,t.height,o,r,i));let Ie=new V_(T,H);this.xr=Ie,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=_e.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=_e.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(e){e!==void 0&&(V=e,this.setSize(te,B,!1))},this.getSize=function(e){return e.set(te,B)},this.setSize=function(e,n,r=!0){if(Ie.isPresenting){J(`WebGLRenderer: Can't change size while VR device is presenting.`);return}te=e,B=n,t.width=Math.floor(e*V),t.height=Math.floor(n*V),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(te*V,B*V).floor()},this.setDrawingBufferSize=function(e,n,r){te=e,B=n,V=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){Y(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){J(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),U.viewport(I.copy(ie).multiplyScalar(V).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),U.scissor(L.copy(ae).multiplyScalar(V).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){U.setScissorTest(oe=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){re=e},this.getClearColor=function(e){return e.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Oe.getClearColor(),r=Oe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,H.clearBufferuiv(H.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,H.clearBufferiv(H.COLOR,0,v))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),Oe.dispose(),Te.dispose(),q.dispose(),W.dispose(),be.dispose(),Se.dispose(),Ne.dispose(),Pe.dispose(),Ce.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ke),Ie.removeEventListener(`sessionend`,qe),Je.stop()};function Le(e){e.preventDefault(),tu(`WebGLRenderer: Context Lost.`),E=!0}function Re(){tu(`WebGLRenderer: Context Restored.`),E=!1;let e=ye.autoReset,t=De.enabled,n=De.autoUpdate,r=De.needsUpdate,i=De.type;Fe(),ye.autoReset=e,De.enabled=t,De.autoUpdate=n,De.needsUpdate=r,De.type=i}function ze(e){Y(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),W.remove(e)}function He(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){Ce.releaseProgram(e)}),e.isShaderMaterial&&Ce.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=it(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=xe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ne.setup(i,r,s,n,c);let h,g=Ae;if(c!==null&&(h=K.get(c),g=je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*he()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*he()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh){if(_e.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?K.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,n),e.side=0,e.needsUpdate=!0,et(e,t,n),e.side=2):et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=q.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ue(a,n,e),r.add(a)}else Ue(t,n,e),r.add(t)}}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){W.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}_e.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function Ge(e){We&&We(e)}function Ke(){Je.stop()}function qe(){Je.start()}let Je=new Nm;Je.setAnimationLoop(Ge),typeof self<`u`&&Je.setContext(self),this.setAnimationLoop=function(e){We=e,Ie.setAnimationLoop(e),e===null?Je.stop():Je.start()},Ie.addEventListener(`sessionstart`,Ke),Ie.addEventListener(`sessionend`,qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Y(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ie.enabled===!0&&Ie.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=q.get(e,C.length),x.init(t),x.state.textureUnits=G.getTextureUnits(),C.push(x),ue.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(ue,Yl,t.reversedDepth),le=this.localClippingEnabled,ce=Ee.init(this.clippingPlanes,le),b=Te.get(e,S.length),b.init(),S.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Ye(e,t,-1/0,T.sortObjects)}Ye(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(ne,re,t.reversedDepth),me=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,me&&Oe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Ee.beginShadows();let i=x.state.shadowsArray;if(De.render(i,e,t),ce===!0&&Ee.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ze(n,r,e,a)}me&&Oe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Xe(b,e,n,n.viewport)}}else r.length>0&&Ze(n,r,e,t),me&&Oe.render(e),Xe(b,e,t)}N!==null&&M===0&&(G.updateMultisampleRenderTarget(N),G.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ne.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],G.setTextureUnits(x.state.textureUnits),ce===!0&&Ee.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Ye(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&fe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ue);let t=Se.update(e),i=e.material;i.visible&&b.push(e,t,i,n,fe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=Se.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),fe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),fe.copy(e.boundingSphere.center)),fe.applyMatrix4(e.matrixWorld).applyMatrix4(ue)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,fe.z,o)}}else i.visible&&b.push(e,t,i,n,fe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ye(i[e],t,n,r)}function Xe(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ce===!0&&Ee.setGlobalState(T.clippingPlanes,n),r&&U.viewport(I.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Ze(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=_e.has(`EXT_color_buffer_half_float`)||_e.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new td(1,1,{generateMipmaps:!0,type:e?Lc:Ac,minFilter:kc,samples:Math.max(4,ve.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Hu.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ee),z=T.getClearAlpha(),z<1&&T.setClearColor(16777215,.5),T.clear(),me&&Oe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ce===!0&&Ee.setGlobalState(T.clippingPlanes,r),Qe(e,n,r),G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a),_e.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,$e(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ee,z),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&$e(o,t,n,s,l,c)}}function $e(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=pe);let r=W.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ce.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ce.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return nt(e,s),d}else s.uniforms=Ce.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ce.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ee.uniform),nt(e,s),r.needsLights=ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Dg.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function it(e,t,n,r,i){t.isScene!==!0&&(t=pe),G.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Hu.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=W.get(r),y=x.state.lights;if(ce===!0&&(le===!0||e!==F)){let t=e===F&&r.id===P;Ee.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ee.numPlanes||v.numIntersection!==Ee.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=et(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(U.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=rt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(H,`projectionMatrix`,e.projectionMatrix),O.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(H,de.setFromMatrixPosition(e.matrixWorld)),ve.logarithmicDepthBuffer&&O.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,G),y.state.spotShadowMap.length>0&&O.setValue(H,`spotShadowMap`,y.state.spotShadowMap,G),y.state.pointShadowMap.length>0&&O.setValue(H,`pointShadowMap`,y.state.pointShadowMap,G)),i.isSkinnedMesh){O.setOptional(H,i,`bindMatrix`),O.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(H,`boneTexture`,e.boneTexture,G))}i.isBatchedMesh&&(O.setOptional(H,i,`batchingTexture`),O.setValue(H,`batchingTexture`,i._matricesTexture,G),O.setOptional(H,i,`batchingIdTexture`),O.setValue(H,`batchingIdTexture`,i._indirectTexture,G),O.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(H,`batchingColorTexture`,i._colorsTexture,G));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&ke.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=J_()),w){if(O.setValue(H,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&at(k,E),a&&r.fog===!0&&we.refreshFogUniforms(k,a),we.refreshMaterialUniforms(k,r,V,B,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Dg.upload(H,tt(v),k,G)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Dg.upload(H,tt(v),k,G),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(H,`center`,i.center),O.setValue(H,`modelViewMatrix`,i.modelViewMatrix),O.setValue(H,`normalMatrix`,i.normalMatrix),O.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Pe.update(n,S),Pe.bind(n,S)}}return S}function at(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=W.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=W.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest,U.viewport(I),U.scissor(L),U.setScissorTest(R),P=-1;return}if(o.__webglFramebuffer===void 0)G.setupRenderTarget(e);else if(o.__hasExternalTextures)G.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);G.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&G.useMultisampledRTT(e)===!1?W.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest}else I.copy(ie).multiplyScalar(V).floor(),L.copy(ae).multiplyScalar(V).floor(),R=oe;if(n!==0&&(r=O),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(I),U.scissor(L),U.setScissorTest(R),i){let r=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=W.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}P=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!ve.textureFormatReadable(c)){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ve.textureTypeReadable(l)){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,Me.convert(c),Me.convert(l),a)}finally{let e=N===null?null:W.get(N).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!ve.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ve.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,Me.convert(l),Me.convert(u),0);let f=N===null?null:W.get(N).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,f);let p=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await iu(H,p,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.deleteBuffer(d),H.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;G.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Me.convert(t.format),_=Me.convert(t.type),v;t.isData3DTexture?(G.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(G.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(G.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,k),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&G.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?G.setTextureCube(e,0):e.isData3DTexture?G.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?G.setTexture2DArray(e,0):G.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,U.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Yl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Hu._getDrawingBufferColorSpace(e),t.unpackColorSpace=Hu._getUnpackColorSpace()}},X_={type:`change`},Z_={type:`start`},Q_={type:`end`},$_=new Kf,ev=new fp,tv=Math.cos(70*Nu.DEG2RAD),nv=new Z,rv=2*Math.PI,iv={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},av=1e-6,ov=class extends Am{constructor(e,t=null){super(e,t),this.state=iv.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:yc.ROTATE,MIDDLE:yc.DOLLY,RIGHT:yc.PAN},this.touches={ONE:bc.ROTATE,TWO:bc.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Pu,this._lastTargetPosition=new Z,this._quat=new Pu().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new km,this._sphericalDelta=new km,this._scale=1,this._panOffset=new Z,this._rotateStart=new X,this._rotateEnd=new X,this._rotateDelta=new X,this._panStart=new X,this._panEnd=new X,this._panDelta=new X,this._dollyStart=new X,this._dollyEnd=new X,this._dollyDelta=new X,this._dollyDirection=new Z,this._mouse=new X,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cv.bind(this),this._onPointerDown=sv.bind(this),this._onPointerUp=lv.bind(this),this._onContextMenu=gv.bind(this),this._onMouseWheel=fv.bind(this),this._onKeyDown=pv.bind(this),this._onTouchStart=mv.bind(this),this._onTouchMove=hv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=dv.bind(this),this._interceptControlDown=_v.bind(this),this._interceptControlUp=vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(X_),this.update(),this.state=iv.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;nv.copy(t).sub(this.target),nv.applyQuaternion(this._quat),this._spherical.setFromVector3(nv),this.autoRotate&&this.state===iv.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=rv:n>Math.PI&&(n-=rv),r<-Math.PI?r+=rv:r>Math.PI&&(r-=rv),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(nv.setFromSpherical(this._spherical),nv.applyQuaternion(this._quatInverse),t.copy(this.target).add(nv),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=nv.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new Z(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new Z(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=nv.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):($_.origin.copy(this.object.position),$_.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($_.direction))<tv?this.object.lookAt(this.target):(ev.setFromNormalAndCoplanarPoint(this.object.up,this.target),$_.intersectPlane(ev,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>av||8*(1-this._lastQuaternion.dot(this.object.quaternion))>av||this._lastTargetPosition.distanceToSquared(this.target)>av?(this.dispatchEvent(X_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?rv/60/60*this.autoRotateSpeed:rv/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nv.setFromMatrixColumn(t,0),nv.multiplyScalar(-e),this._panOffset.add(nv)}_panUp(e,t){this.screenSpacePanning===!0?nv.setFromMatrixColumn(t,1):(nv.setFromMatrixColumn(t,0),nv.crossVectors(this.object.up,nv)),nv.multiplyScalar(e),this._panOffset.add(nv)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;nv.copy(r).sub(this.target);let i=nv.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rv*this._rotateDelta.x/t.clientHeight),this._rotateUp(rv*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rv*this._rotateDelta.x/t.clientHeight),this._rotateUp(rv*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new X,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function sv(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function cv(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function lv(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Q_),this.state=iv.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function uv(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yc.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=iv.DOLLY;break;case yc.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=iv.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=iv.ROTATE}break;case yc.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=iv.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=iv.PAN}break;default:this.state=iv.NONE}this.state!==iv.NONE&&this.dispatchEvent(Z_)}function dv(e){switch(this.state){case iv.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case iv.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case iv.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function fv(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===iv.NONE&&(e.preventDefault(),this.dispatchEvent(Z_),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Q_))}function pv(e){this.enabled!==!1&&this._handleKeyDown(e)}function mv(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case bc.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=iv.TOUCH_ROTATE;break;case bc.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=iv.TOUCH_PAN;break;default:this.state=iv.NONE}break;case 2:switch(this.touches.TWO){case bc.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=iv.TOUCH_DOLLY_PAN;break;case bc.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=iv.TOUCH_DOLLY_ROTATE;break;default:this.state=iv.NONE}break;default:this.state=iv.NONE}this.state!==iv.NONE&&this.dispatchEvent(Z_)}function hv(e){switch(this._trackPointer(e),this.state){case iv.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case iv.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case iv.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case iv.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=iv.NONE}}function gv(e){this.enabled!==!1&&e.preventDefault()}function _v(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function vv(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function yv(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new If,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=bv(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=bv(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function bv(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new xf(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var xv=t(n(((t,n)=>{(function(e){typeof t==`object`&&n!==void 0?n.exports=e():typeof define==`function`&&define.amd?define([],e):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=e()})(function(){return function t(n,r,i){function a(s,c){if(!r[s]){if(!n[s]){var l=typeof e==`function`&&e;if(!c&&l)return l(s,!0);if(o)return o(s,!0);var u=Error(`Cannot find module '`+s+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=r[s]={exports:{}};n[s][0].call(d.exports,function(e){var t=n[s][1][e];return a(t||e)},d,d.exports,t,n,r,i)}return r[s].exports}for(var o=typeof e==`function`&&e,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.1`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){return typeof e==`string`?`string`:Object.prototype.toString.call(e)===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&e instanceof Uint8Array?`uint8array`:r.arraybuffer&&e instanceof ArrayBuffer?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(e))!==-1)&&typeof FileReader<`u`?new o.Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,s.input=typeof e==`string`?a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?new Uint8Array(e):e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.result=this.options.to===`string`?this.chunks.join(``):i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,p.input=typeof e==`string`?a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?new Uint8Array(e):e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.result=this.options.to===`string`?this.chunks.join(``):i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function N(e){return(e<<1)-(4<e?9:0)}function P(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function I(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function L(e,t){e.pending_buf[e.pending++]=t}function R(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function ee(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function z(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function te(e,t){for(var n,r;;){if(e.lookahead<T){if(z(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=ee(e,n)),e.match_length>=C){if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask}else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function B(e,t){for(var n,r,i;;){if(e.lookahead<T){if(z(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=ee(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(I(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&I(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function V(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function ne(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),P(this.dyn_ltree),P(this.dyn_dtree),P(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),P(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),P(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function re(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function ie(e){var t=re(e);return t===d&&function(e){e.window_size=2*e.w_size,P(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function ae(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new ne;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,ie(e)}r=[new V(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(z(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,I(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(I(e,!1),e.strm.avail_out),O)}),new V(4,4,8,4,te),new V(4,5,16,8,te),new V(4,6,32,32,te),new V(4,4,16,16,B),new V(8,16,32,32,B),new V(8,16,128,128,B),new V(8,32,128,256,B),new V(32,128,258,1024,B),new V(32,258,258,4096,B)],n.deflateInit=function(e,t){return ae(e,t,g,15,8,0)},n.deflateInit2=ae,n.deflateReset=ie,n.deflateResetKeep=re,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E){if(i.wrap===2)e.adler=0,L(i,31),L(i,139),L(i,8),i.gzhead?(L(i,+!!i.gzhead.text+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),L(i,255&i.gzhead.time),L(i,i.gzhead.time>>8&255),L(i,i.gzhead.time>>16&255),L(i,i.gzhead.time>>24&255),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(L(i,255&i.gzhead.extra.length),L(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(L(i,0),L(i,0),L(i,0),L(i,0),L(i,0),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,R(i,p),i.strstart!==0&&(R(i,e.adler>>>16),R(i,65535&e.adler)),e.adler=1}}if(i.status===69){if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending!==i.pending_buf_size));)L(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73}if(i.status===73){if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91}if(i.status===91){if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103}if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(e),i.pending+2<=i.pending_buf_size&&(L(i,255&e.adler),L(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(F(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&N(t)<=N(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(z(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(z(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(P(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),F(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(L(i,255&e.adler),L(i,e.adler>>8&255),L(i,e.adler>>16&255),L(i,e.adler>>24&255),L(i,255&e.total_in),L(i,e.total_in>>8&255),L(i,e.total_in>>16&255),L(i,e.total_in>>24&255)):(R(i,e.adler>>>16),R(i,65535&e.adler)),F(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(P(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,z(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,z(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,N,P,F,I,L,R,ee=0,z=new r.Buf8(4),te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,I=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){z[n.check=0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,F=8+(15&(b>>>=4)),n.wbits===0)n.wbits=F;else if(F>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<F,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,z[2]=b>>>16&255,z[3]=b>>>24&255,n.check=a(n.check,z,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(F=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,F)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.name+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.comment+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[te[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[te[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,L={bits:n.lenbits},I=s(0,n.lens,0,19,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(ee=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&ee,!((k=ee>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(R=k+2;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}F=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(R=k+3;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(R=k+7;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=F}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,L={bits:n.lenbits},I=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,L={bits:n.distbits},I=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,L),n.distbits=L.bits,I){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(ee=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&ee,!((k=ee>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,N=A,P=j;A=(ee=n.lencode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&ee,!(M+(k=ee>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(ee=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&ee,!((k=ee>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,N=A,P=j;A=(ee=n.distcode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&ee,!(M+(k=ee>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&I===u&&(I=-5),I)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,N=null,P=0,F=new r.Buf16(16),I=new r.Buf16(16),L=null,R=0;for(C=0;C<=15;C++)F[C]=0;for(w=0;w<c;w++)F[t[n+w]]++;for(D=S,E=15;1<=E&&F[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&F[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=F[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(I[1]=0,C=1;C<15;C++)I[C+1]=I[C]+F[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[I[t[n+w]]++]=w);if(v=e===0?(N=L=d,19):e===1?(N=i,P-=257,L=a,R-=257,256):(N=o,L=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=L[R+d[w]],N[P+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--F[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=F[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,N=Array(d);function P(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function I(e){return e<256?D[e]:D[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function R(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function ee(e,t,n){R(e,n[2*t],n[2*t+1])}function z(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function te(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=z(a[s]++,s))}}function B(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function V(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ne(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function re(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&ne(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!ne(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function ie(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?ee(e,i,t):(ee(e,(a=O[i])+l+1,t),(o=x[a])!==0&&R(e,i-=k[a],o),ee(e,a=I(--r),n),(o=S[a])!==0&&R(e,r-=N[a],o)),s<e.last_lit;);ee(e,_,t)}function ae(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)re(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],re(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,re(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),te(a,l,e.bl_count)}function oe(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function se(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;ee(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(ee(e,y,e.bl_tree),R(e,s-3,3)):(ee(e,b,e.bl_tree),R(e,s-11,7)):(i!==a&&(ee(e,i,e.bl_tree),s--),ee(e,v,e.bl_tree),R(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(N);var ce=!1;function le(e,t,n,i){R(e,(s<<1)+ +!!i,3),function(e,t,n,i){V(e),i&&(L(e,n),L(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){ce||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(N[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(N[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(te(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=z(e,5);A=new P(T,x,l+1,u,m),j=new P(E,S,0,d,m),M=new P([],C,0,f,g)}(),!0),e.l_desc=new F(e.dyn_ltree,A),e.d_desc=new F(e.dyn_dtree,j),e.bl_desc=new F(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,B(e)},n._tr_stored_block=le,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),ae(e,e.l_desc),ae(e,e.d_desc),c=function(e){var t;for(oe(e,e.dyn_ltree,e.l_desc.max_code),oe(e,e.dyn_dtree,e.d_desc.max_code),ae(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?le(e,t,n,r):e.strategy===4||s===o?(R(e,2+ +!!r,3),ie(e,T,E)):(R(e,4+ +!!r,3),function(e,t,n,r){var i;for(R(e,t-257,5),R(e,n-1,5),R(e,r-4,4),i=0;i<r;i++)R(e,e.bl_tree[2*w[i]+1],3);se(e,e.dyn_ltree,t-1),se(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),ie(e,e.dyn_ltree,e.dyn_dtree)),B(e),r&&V(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*I(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){R(e,2,3),ee(e,_,T),function(e){e.bi_valid===16?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})}))());function Sv(e){return u({tag:`svg`,attr:{version:`1.1`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{d:`M9 4l-2-2h-7v13h16v-11h-7zM8 13.5l-3.5-3.5h2.5v-4h2v4h2.5l-3.5 3.5z`},child:[]}]})(e)}var $=o(),Cv=e=>{if(e instanceof Blob)return!0;if(typeof e==`object`&&e){let t=e.type||e.mimeType||``;return typeof t==`string`&&t.includes(`video/`)?!0:Cv(e.src||e.url||``)}if(typeof e!=`string`)return!1;let t=e.toLowerCase();return/\.(mp4|webm|ogg|ogv|mov|avi|mkv|3gp)(\?|$)/.test(t)||t.startsWith(`data:video/`)||t.startsWith(`blob:video/`)||t.includes(`/video/`)},wv=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Tv=r.div`
  font-size: 22px;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  padding: 10px 24px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${e=>e.$isDarkMode?`white`:`black`};
  margin-bottom: 15px;
  ${e=>e.$isStickyBgMode?i`
           background: ${e.$isDarkMode?`rgba(15, 15, 25, 0.75)`:`rgba(255, 255, 255, 0.75)`};
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border: 1px solid
             ${e.$isDarkMode?`rgba(255, 255, 255, 0.15)`:`rgba(0, 0, 0, 0.15)`};
           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
         `:i`
           background: ${e.$isDarkMode?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.05)`};
           border: 1px solid
             ${e.$isDarkMode?`rgba(255, 255, 255, 0.1)`:`rgba(0, 0, 0, 0.1)`};
         `}
`,Ev=r.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 40px;
  width: 100%;
  padding: 0 12px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  position: relative;
  z-index: 100;
  scroll-padding-left: 12px;
  scroll-padding-right: 12px;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`,Dv=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex: 0 0 auto;
  &:hover {
    transform: scale(1.05);
  }
`,Ov=r.div`
  position: relative;
  z-index: 100;
  width: 191px;
  height: 130px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`,kv=r.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${e=>+!!e.$isActive};
  transition: opacity 1s ease-in-out;
`,Av=r.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  font-size: 10px;
  padding: 5px 0;
  font-weight: 600;
  text-transform: capitalize;
  z-index: 2;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`,jv=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 16px 0;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: 1000;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`,Mv=r.div`
  background: ${e=>e.$isDarkMode?`#1e1e1e`:`#f9f9f9`};
  padding: 5px;
  border-radius: 20px;
  width: min(90%, 1200px);
  max-width: 1200px;
  margin: 0 auto 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 0;
`,Nv=r.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  color: ${e=>e.$isDarkMode?`white`:`black`};
  cursor: pointer;
  &:hover {
    color: #ffb36c;
  }
`,Pv=r.h2`
  color: ${e=>e.$isDarkMode?`white`:`black`};
  text-align: center;
  font-size: 20px;
  margin-bottom: 5px;
  text-transform: capitalize;
`,Fv=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  width: 100%;
  max-width: 100%;
`,Iv=r(c.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
`,Lv=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`,Rv=r.div`
  position: relative;
  width: 270px;
  height: 170px;
  border-radius: 15px;
  overflow: hidden;

  &:hover .image-overlay {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }
`,zv=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 12px;
  padding: 8px 5px;
  font-weight: bold;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,Bv=r.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  display: flex;
  gap: 2px;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;

  @media (hover: none) {
    opacity: 1;
    transform: translateY(0);
  }
`,Vv=r.button`
  background: #000000;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  min-width: 48px;
  height: 32px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: #00539b;
  }
`,Hv=r.div`
  color: ${e=>e.$isDarkMode?`#ccc`:`#555`};
  margin-top: 10px;
`,Uv=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 10px;
  width: 100%;
`,Wv=r.input`
  padding: 6px 13px;
  border-radius: 25px;
  border: 1px solid ${e=>e.$isDarkMode?`#444`:`#ccc`};
  background: ${e=>e.$isDarkMode?`#333`:`#fff`};
  color: ${e=>e.$isDarkMode?`white`:`black`};
  width: 100%;
  max-width: 900px;
  flex: 1;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`,Gv=r(Vv)`
  padding: 6px 12px;
  width: auto;
  background: "#ffffff00";
`,Kv=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`,qv=r.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
`,Jv=r.div`
  display: flex;
  margin-bottom: 10px;
`,Yv=r.button`
  padding: 5px 15px;
  border-radius: 15px;
  border: 1px solid #ffb36c;
  background: ${e=>e.$active?`#ffb36c`:`transparent`};
  color: ${e=>e.$active?`black`:e.$isDarkMode?`white`:`black`};
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
  font-weight: 600;
`,Xv=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`,Zv=r.div`
  border: 2px solid #ffb36c;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  canvas {
    max-width: 100%;
  }
  position: relative;
`,Qv=r(c.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,$v=r.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  font-size: 40px;
  padding: 20px;
  cursor: pointer;
  z-index: 2010;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  ${e=>e.$left?`left: 20px;`:`right: 20px;`}
`,ey=r.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`,ty=r.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  border: 1px solid rgba(255, 179, 108, 0.3);
  border-radius: 5px;
`,ny=`FanArtDB`,ry=`Drafts`,iy=async e=>{let t=indexedDB.open(ny,1);t.onupgradeneeded=e=>e.target.result.createObjectStore(ry),t.onsuccess=t=>{t.target.result.transaction(ry,`readwrite`).objectStore(ry).put(e,`currentDraft`)}},ay=()=>new Promise(e=>{let t=indexedDB.open(ny,1);t.onupgradeneeded=e=>e.target.result.createObjectStore(ry),t.onsuccess=t=>{let n=t.target.result.transaction(ry,`readonly`).objectStore(ry).get(`currentDraft`);n.onsuccess=()=>e(n.result)}}),oy=r.div`
  font-size: 11px;
  color: ${e=>e.$isDarkMode?`#ddd`:`#444`};
  text-align: left;
  width: 100%;
`,sy=({src:e})=>{let t=(0,m.useRef)(null);return(0,m.useEffect)(()=>{if(!e||!t.current)return;let n=document.createElement(`video`);n.src=typeof e==`string`?e:URL.createObjectURL(e),n.crossOrigin=`anonymous`,n.muted=!0,n.preload=`metadata`;let r=e instanceof Blob?n.src:null,i=()=>{r&&URL.revokeObjectURL(r)};return n.onloadedmetadata=()=>{n.currentTime=1},n.onseeked=()=>{t.current&&(t.current.getContext(`2d`).drawImage(n,0,0,270,170),i())},n.onerror=i,i},[e]),(0,$.jsx)(`canvas`,{ref:t,width:270,height:170,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}})},cy=({onAddImage:e,isDarkMode:t,startCooldown:n,isCooldown:r,cooldownTime:i})=>{let a=(0,m.useRef)(null),[o,s]=(0,m.useState)(null),[c,l]=(0,m.useState)(`#ffb36c`),[u,d]=(0,m.useState)(5),[f,p]=(0,m.useState)(!0),[h,g]=(0,m.useState)(`sans-serif`),[_,v]=(0,m.useState)({r:1,g:1,b:1,a:1});(0,m.useEffect)(()=>{if(!a.current)return;let e=new ko(a.current,{width:window.innerWidth<768?300:600,height:400,backgroundColor:`#ffffff`,isDrawingMode:!0});ay().then(t=>{t&&e.loadFromJSON(t).then(()=>e.renderAll())});let t=setInterval(()=>{iy(e.toJSON())},5e3);return s(e),()=>{clearInterval(t),e.dispose()}},[]),(0,m.useEffect)(()=>{!o||!o.freeDrawingBrush||(o.freeDrawingBrush.color=c,o.freeDrawingBrush.width=parseInt(u,10),o.isDrawingMode=f)},[o,c,u,f]);let y=()=>{if(!o)return;let e=new xs(`Ваш текст`,{left:100,top:100,fontFamily:h,fill:c});o.add(e),o.setActiveObject(e),o.renderAll()},b=()=>{let e=o.getActiveObject();if(!e)return alert(`Спочатку виберіть об'єкт (фото) для обрізки`);let t=e.getBoundingRect(),n=o.toDataURL({left:t.left,top:t.top,width:t.width,height:t.height,format:`png`});Ns.fromURL(n).then(e=>{o.clear(),o.setDimensions({width:t.width,height:t.height}),o.setBackgroundColor(`#fff`),o.add(e),o.renderAll()})},x=e=>{let t=o.getActiveObject();if(!(!t||t.type!==`image`)){if(t.filters=[],e===`grayscale`&&t.filters.push(new vc.Grayscale),e===`invert`&&t.filters.push(new vc.Invert),e===`contrast`&&t.filters.push(new vc.Contrast({contrast:.5})),e===`rgba`){let e=[_.r,0,0,0,0,0,_.g,0,0,0,0,0,_.b,0,0,0,0,0,_.a,0];t.filters.push(new vc.ColorMatrix({matrix:e}))}t.applyFilters(),o.renderAll()}};return(0,$.jsxs)(Xv,{children:[(0,$.jsxs)(ey,{children:[(0,$.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`5px`,alignItems:`center`},children:[(0,$.jsx)(`span`,{style:{fontSize:`11px`,color:t?`white`:`black`},children:`📁 Файл:`}),(0,$.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>{let t=e.target.files[0];if(!t||!o)return;let n=new FileReader;n.onload=e=>{Ns.fromURL(e.target.result).then(e=>{e.scaleToWidth(o.width*.8),o.add(e),o.centerObject(e),o.setActiveObject(e),o.renderAll()})},n.readAsDataURL(t)},style:{fontSize:`10px`,width:`150px`}})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`5px`,alignItems:`center`},children:[(0,$.jsx)(`span`,{style:{fontSize:`11px`,color:t?`white`:`black`},children:`🎨 Колір:`}),(0,$.jsx)(`input`,{type:`color`,value:c,onChange:e=>l(e.target.value)})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`5px`,alignItems:`center`},children:[(0,$.jsxs)(`span`,{style:{fontSize:`11px`,color:t?`white`:`black`},children:[`📏 Товщина: `,u]}),(0,$.jsx)(`input`,{type:`range`,min:`1`,max:`50`,value:u,onChange:e=>d(e.target.value)})]}),(0,$.jsxs)(ty,{children:[(0,$.jsx)(`span`,{style:{fontSize:`10px`,color:t?`white`:`black`},children:`Шрифт:`}),(0,$.jsxs)(`select`,{value:h,onChange:e=>g(e.target.value),children:[(0,$.jsx)(`option`,{value:`sans-serif`,children:`Sans-serif`}),(0,$.jsx)(`option`,{value:`serif`,children:`Serif`}),(0,$.jsx)(`option`,{value:`monospace`,children:`Monospace`}),(0,$.jsx)(`option`,{value:`cursive`,children:`Cursive`})]}),(0,$.jsx)(Vv,{onClick:y,style:{padding:`3px 10px`,fontSize:`10px`},children:`➕ Текст`})]}),(0,$.jsxs)(ty,{children:[(0,$.jsx)(`span`,{style:{fontSize:`10px`,color:t?`white`:`black`},children:`Фільтри:`}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`3px`},children:[(0,$.jsx)(Vv,{onClick:()=>x(`grayscale`),style:{padding:`3px`,fontSize:`10px`},children:`B&W`}),(0,$.jsx)(Vv,{onClick:()=>x(`invert`),style:{padding:`3px`,fontSize:`10px`},children:`Neg`}),(0,$.jsx)(Vv,{onClick:()=>x(`rgba`),style:{padding:`3px`,fontSize:`10px`},children:`RGBA`})]}),(0,$.jsx)(`input`,{type:`number`,step:`0.1`,value:_.r,onChange:e=>v({..._,r:parseFloat(e.target.value)}),style:{width:`40px`,fontSize:`10px`},title:`R`})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`5px`,alignItems:`flex-end`},children:[(0,$.jsx)(Vv,{onClick:()=>p(!f),style:{padding:`8px 15px`,fontSize:`12px`},children:f?`🖐️ Вибір`:`✏️ Малювати`}),(0,$.jsx)(Vv,{onClick:b,style:{padding:`8px 15px`,fontSize:`12px`,background:`#2196f3`,color:`#fff`},children:`✂️ Обрізати`}),(0,$.jsx)(Vv,{onClick:()=>o.clear().set(`backgroundColor`,`#fff`).renderAll(),style:{padding:`8px 15px`,fontSize:`12px`},children:`🗑️ Очистити`}),(0,$.jsx)(Vv,{onClick:()=>window.open(`https://jspaint.app`,`_blank`),style:{padding:`8px 15px`,fontSize:`12px`,background:`#4caf50`},children:`🚀 JSPaint`}),(0,$.jsx)(Vv,{onClick:()=>{if(!o)return;let t=o.toDataURL({format:`jpeg`,quality:.6});e({id:`local-`+Date.now(),previewURL:t,largeImageURL:t,tags:`Власний арт`,name:`Власний малюнок`,source:`local`}),n()},disabled:r,style:{padding:`8px 15px`,fontSize:`12px`},children:r?`${i}с`:`💾 Зберегти`})]})]}),(0,$.jsx)(Zv,{children:(0,$.jsx)(`canvas`,{ref:a})})]})},ly=({isDarkMode:e,isStickyBgMode:t,user:n,onOpenRegister:r,setHeroBg:i,setCustomHeroBgs:a})=>{let[o,l]=(0,m.useState)([]),[u,_]=(0,m.useState)(!1),[v,y]=(0,m.useState)(``),[b,x]=(0,m.useState)([]),[S,C]=(0,m.useState)(`idle`),[w,T]=(0,m.useState)(1),[E,D]=(0,m.useState)(`pixabay`),[O,k]=(0,m.useState)(`search`),[A,j]=(0,m.useState)(12),[M,N]=(0,m.useState)(!1),[P,F]=(0,m.useState)(0),[I,L]=(0,m.useState)(null),[R,ee]=(0,m.useState)(null),[z,te]=(0,m.useState)(null),[B,V]=(0,m.useState)(``),[ne,re]=(0,m.useState)(``),[ie,ae]=(0,m.useState)(5),[oe,se]=(0,m.useState)([]),[ce,le]=(0,m.useState)(!1),[ue,de]=(0,m.useState)(null),fe=(0,m.useRef)(null),pe=(0,m.useRef)(null),me=(0,m.useRef)(null),he=(0,m.useRef)(null),H=(0,m.useRef)(null),ge=(0,m.useRef)(null),_e=(0,m.useRef)(null),ve=[...f,...o],U=(e=[])=>e;(0,m.useEffect)(()=>{(async()=>{try{let e=await h.default.getItem(`fanart_custom_images`);e&&l(e)}catch(e){console.error(`Failed to load custom images:`,e)}finally{_(!0)}})()},[]),(0,m.useEffect)(()=>{u&&h.default.setItem(`fanart_custom_images`,o)},[o,u]);let[ye,W]=(0,m.useState)(0),[G,be]=(0,m.useState)(null),K=[`Дракони`,`Тварини`,`Локації`,`Фентезі`,`Хоррор`,`Аркада`,`Майбутне`,`ваші картинки`];(0,m.useEffect)(()=>{let e=setInterval(()=>{W(e=>e+1)},1e3);return()=>clearInterval(e)},[]);let xe=G?U(ve.filter(e=>e.category===G)):[];(0,m.useEffect)(()=>(G||R!==null||I!==null||z||ue?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[G,R,I,z,ue]);let Se=(0,m.useCallback)(e=>{I!==null&&(e.key===`Escape`&&L(null),e.key===`ArrowRight`&&L(e=>(e+1)%xe.length),e.key===`ArrowLeft`&&L(e=>(e-1+xe.length)%xe.length))},[I,xe.length]);(0,m.useEffect)(()=>(window.addEventListener(`keydown`,Se),()=>window.removeEventListener(`keydown`,Se)),[Se]);let Ce=()=>{j(e=>e+12)},we=e=>{if(!n){r();return}let t=document.createElement(`a`);t.href=e,t.download=`fanart.jpg`,t.click()},Te=e=>{if(!n){r();return}let t=`
      <html>
        <head>
          <title>Print Fan Art</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: #fff; color: #000; text-align: center; }
            img { max-width: 100%; max-height: 90vh; display: block; margin: 0 auto; }
          </style>
        </head>
        <body>
          <img src="${e}" alt="Fan art" />
        </body>
      </html>
    `,i=document.createElement(`iframe`);i.style.position=`fixed`,i.style.right=`0`,i.style.bottom=`0`,i.style.width=`0`,i.style.height=`0`,i.style.border=`0`,i.style.opacity=`0`,i.srcdoc=t,document.body.appendChild(i),i.onload=()=>{try{i.contentWindow.focus(),i.contentWindow.print()}catch(e){console.error(`Print failed:`,e)}finally{setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},800)}}},q=async(e,t)=>{let n=new Image;if(n.crossOrigin=`anonymous`,n.src=e,await new Promise((e,t)=>{n.onload=e,n.onerror=t}),n.naturalWidth===0||n.naturalHeight===0)throw Error(`Image has no dimensions`);let r=document.createElement(`canvas`);r.width=140,r.height=100;let i=r.getContext(`2d`);i.drawImage(n,0,0,140,100);let a=i.getImageData(0,0,140,100).data,o=.35,s=4/140,c=3/100,l=[],u=new xp(4.08,3.08,o),d=new id().makeTranslation(0,0,-.35/2);u.applyMatrix4(d);let f=[];for(let e=0;e<u.attributes.position.count;e++)f.push(.5,.5,.5);u.setAttribute(`color`,new wf(f,3)),l.push(u);let p=new xp(s,c,1);for(let e=0;e<100;e++)for(let t=0;t<140;t++){let n=(e*140+t)*4,r=a[n]||0,i=a[n+1]||0,u=a[n+2]||0;if((a[n+3]||0)<128)continue;let d=o+(1-(r+i+u)/765)*.4,f=p.clone();f.scale(1,1,d);let m=t*s-2+s/2,h=-(e*c)+1.5-c/2,g=d/2-o;f.translate(m,h,g);let _=r/255,v=i/255,y=u/255,b=[];for(let e=0;e<f.attributes.position.count;e++)b.push(_,v,y);f.setAttribute(`color`,new wf(b,3)),l.push(f)}let m=new ap(yv(l,!1),new Np({vertexColors:!0,roughness:.7,metalness:.02})),h=new Md;return h.add(m),{group:h,title:t}},Ee=(0,m.useCallback)(async e=>{let t=null;if(e.traverse(e=>{e.isMesh&&e.geometry&&(t=e.geometry)}),!t)throw Error(`No geometry found for 3MF export`);let n=t.attributes.position,r=t.attributes.color,i=t.getIndex();if(!i){let e=[];for(let t=0;t<n.count;t++)e.push(t);t.setIndex(e),i=t.getIndex()}let a=new Map,o=[],s=[];for(let e=0;e<i.count;e+=3){let t=i.getX(e),n=i.getX(e+1),c=i.getX(e+2),l=Math.round(r.getX(t)*255),u=Math.round(r.getY(t)*255),d=Math.round(r.getZ(t)*255),f=`#${l.toString(16).padStart(2,`0`)}${u.toString(16).padStart(2,`0`)}${d.toString(16).padStart(2,`0`)}FF`.toUpperCase(),p=a.get(f);p===void 0&&(p=o.length,a.set(f,p),o.push(f)),s.push(`<triangle v1="${t}" v2="${n}" v3="${c}" pid="1" p1="${p}"/>`)}let c=[];for(let e=0;e<n.count;e++)c.push(`<vertex x="${n.getX(e).toFixed(5)}" y="${n.getY(e).toFixed(5)}" z="${n.getZ(e).toFixed(5)}"/>`);let l=`<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02">
  <resources>
    <m:colorgroup id="1">
      ${o.map(e=>`<color color="${e}"/>`).join(`
          `)}
    </m:colorgroup>
    <object id="2" type="model">
      <mesh>
        <vertices>
          ${c.join(`
          `)}
        </vertices>
        <triangles>
          ${s.join(`
          `)}
        </triangles>
      </mesh>
    </object>
  </resources>
  <build>
    <item objectid="2"/>
  </build>
</model>`,u=new xv.default;return u.file(`[Content_Types].xml`,`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/>
</Types>`),u.folder(`_rels`).file(`.rels`,`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Target="/3D/3dmodel.model" Id="rel-1" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>`),u.folder(`3D`).file(`3dmodel.model`,l),await u.generateAsync({type:`blob`,compression:`DEFLATE`})},[]),De=async(e,t)=>{if(!n){r();return}let i=t?.name||t?.title||`Фанарт`;ee({imgSrc:e,title:i})},Oe=(0,m.useCallback)(async()=>{if(R?.imgSrc)try{let{group:e}=await q(R.imgSrc,R.title),t=await Ee(e),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`${R.title.replace(/[^a-zA-Z0-9._-]+/g,`_`)||`fanart`}.3mf`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(n),4e3)}catch(e){console.error(`3D export failed:`,e),alert(`Не вдалося згенерувати 3MF. Спробуйте інше зображення.`)}},[R,Ee]);(0,m.useEffect)(()=>{if(!R?.imgSrc||!fe.current)return;let e=fe.current,t=new Y_({antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(e.clientWidth,e.clientHeight),e.innerHTML=``,e.appendChild(t.domElement);let n=new Vd;n.background=new zd(987414);let r=new cm(35,e.clientWidth/e.clientHeight,.1,100);r.position.set(0,0,6);let i=new fm(16777215,.9),a=new dm(16777215,1.3);a.position.set(3,4,6),n.add(i,a);let o=new ov(r,t.domElement);o.enableDamping=!0,o.enablePan=!1,o.minDistance=3,o.maxDistance=12,(async()=>{try{let{group:e}=await q(R.imgSrc,R.title);e.rotation.x=-.35,e.rotation.y=.4,n.add(e),me.current=n,he.current=r,H.current=o,pe.current=t,_e.current=e}catch(e){console.error(`Preview setup failed:`,e)}})();let s=()=>{ge.current=requestAnimationFrame(s),_e.current&&(_e.current.rotation.y+=.005),o.update(),t.render(n,r)};s();let c=()=>{let n=e.clientWidth,i=e.clientHeight;t.setSize(n,i),r.aspect=n/i,r.updateProjectionMatrix()};return window.addEventListener(`resize`,c),()=>{window.removeEventListener(`resize`,c),ge.current&&cancelAnimationFrame(ge.current),o.dispose(),t.dispose(),e&&(e.innerHTML=``),pe.current=null,me.current=null,he.current=null,H.current=null,_e.current=null}},[R?.imgSrc,R?.title]),(0,m.useEffect)(()=>{let e=localStorage.getItem(`fanart_cooldown_end`);if(e){let t=e-Date.now();t>0?(N(!0),F(Math.ceil(t/1e3))):localStorage.removeItem(`fanart_cooldown_end`)}},[]),(0,m.useEffect)(()=>{if(!M)return;let e;return P>0?e=setTimeout(()=>{F(e=>e-1)},1e3):(N(!1),h.default.removeItem(`fanart_cooldown_end`)),()=>clearTimeout(e)},[M,P]);let ke=async()=>{let e=Date.now()+4e4;await h.default.setItem(`fanart_cooldown_end`,e),N(!0),F(40)},Ae=async e=>{if(!e||e.length<3)return e;try{return(await(await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(e)}`)).json())[0].map(e=>e[0]).join(``)}catch(t){return console.error(`Translation error:`,t),e}},je=async()=>{if(v.trim()){C(`loading`),x([]);try{if(E===`pixabay`){let e=await fetch(`https://pixabay.com/api/?key=50977795-feb18de71b048a02e0c824e54&q=${encodeURIComponent(v)}&image_type=photo&per_page=12&lang=ru&page=1`);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);let t=await e.json();t.hits&&t.hits.length>0?(x(t.hits.map(e=>({id:e.id,previewURL:e.previewURL,largeImageURL:e.largeImageURL,tags:e.tags,name:e.tags,source:`pixabay`}))),T(1),C(`idle`)):C(`no-results`)}else{let e=await Ae(v),t=await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(e)}`);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let n=(await t.json()).filter(e=>e.show&&e.show.image);if(n.length===0){C(`no-results`);return}let r=await Promise.all(n.slice(0,10).map(async e=>{let t=await fetch(`https://api.tvmaze.com/shows/${e.show.id}/cast`),n=t.ok?await t.json():[];return{id:e.show.id,name:e.show.name,previewURL:e.show.image.medium,largeImageURL:e.show.image.original,summary:e.show.summary?.replace(/<[^>]*>?/gm,``),cast:n.slice(0,4).map(e=>e.person.name).join(`, `),url:e.show.url,source:`tvmaze`}}));x(r),C(`idle`)}}catch(e){console.error(`Error searching:`,e),C(`error`)}finally{await ke()}}},Me=async()=>{if(E!==`pixabay`||!v.trim()||M)return;C(`loading`);let e=w+1;try{let t=await fetch(`https://pixabay.com/api/?key=50977795-feb18de71b048a02e0c824e54&q=${encodeURIComponent(v)}&image_type=photo&per_page=12&lang=ru&page=${e}`);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let n=await t.json();if(n.hits&&n.hits.length>0){let t=n.hits.map(e=>({id:e.id,previewURL:e.previewURL,largeImageURL:e.largeImageURL,tags:e.tags,source:`pixabay`}));x(e=>[...e,...t]),T(e),C(`idle`)}else alert(`Більше зображень не знайдено.`),C(`idle`)}catch(e){console.error(`Error loading more from Pixabay:`,e),C(`error`)}finally{await ke()}},Ne=e=>{if(o.length>=3)return alert(`Можна додати не більше 3 картинок.`);if(o.some(t=>t.id===e.id))return alert(`Це зображення вже додано.`);let t={id:e.id,src:e.previewURL,largeSrc:e.largeImageURL||e.previewURL,category:`ваші картинки`,summary:e.summary,cast:e.cast,title:e.name,url:e.url};l([...o,t])},Pe=(0,m.useCallback)(async()=>{if(!z?.src)return;let e=parseFloat(B)||z.start||0,t=parseFloat(ne);if(isNaN(t)||t<=e){alert(`Кінець має бути пізніше за початок`);return}let n=Math.min(Math.max(1,parseInt(ie)||1),20);le(!0);try{let r=document.createElement(`video`);r.src=z.src,r.crossOrigin=`anonymous`,r.muted=!0,r.preload=`metadata`,await new Promise((e,t)=>{r.onloadedmetadata=e,r.onerror=t,setTimeout(e,5e3)});let i=document.createElement(`canvas`);i.width=270,i.height=170;let a=i.getContext(`2d`),o=[],s=n===1?0:(t-e)/(n-1);for(let t=0;t<n;t++){let n=e+t*s;await new Promise(e=>{r.currentTime=n,r.onseeked=()=>{a.drawImage(r,0,0,i.width,i.height);let s=i.toDataURL(`image/jpeg`,.8);o.push({id:`frame-${Date.now()}-${t}`,src:s,largeSrc:s,category:z.category||`ваші картинки`,name:`${z.name} — ${n.toFixed(1)}с`,author:z.author||``,source:z.source||``}),e()}})}se(o)}catch(e){console.error(`Помилка витягування кадрів:`,e),alert(`Не вдалося витягнути кадри. Спробуйте інше відео.`)}finally{le(!1)}},[z,B,ne,ie]),Fe=e=>{if(o.length>=3)return alert(`Можна додати не більше 3 картинок.`);o.some(t=>t.id===e.id)||l(t=>[...t,e])},Ie=()=>{let e=3-o.length;if(e<=0)return alert(`Можна додати не більше 3 картинок.`);let t=oe.filter(e=>!o.some(t=>t.id===e.id)).slice(0,e);l(e=>[...e,...t])},Le=e=>{be(e),j(12)},Re=()=>{be(null)},ze=e=>{l(t=>t.filter(t=>t.id!==e))};return(0,$.jsxs)(wv,{children:[(0,$.jsx)(Tv,{$isStickyBgMode:t,$isDarkMode:e,children:`Друкарня`}),(0,$.jsx)(Ev,{children:K.map(e=>{let t=ve.filter(t=>t.category===e);if(t.length===0&&e!==`ваші картинки`)return null;let n=t.length>0?t:[{src:d,category:`ваші картинки`}],r=n.filter(e=>!Cv(e.src)),i=r.length>0?r:n;return(0,$.jsx)(Dv,{onClick:()=>Le(e),children:(0,$.jsxs)(Ov,{children:[i.map((t,n)=>{let r=n===ye%i.length;return(0,$.jsx)(kv,{src:t.src,alt:e,$isActive:r},n)}),(0,$.jsx)(Av,{children:e})]})},e)})}),G&&(0,$.jsx)(jv,{onClick:Re,children:(0,$.jsxs)(Mv,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,$.jsx)(Nv,{$isDarkMode:e,onClick:Re,children:`×`}),(0,$.jsxs)(Pv,{$isDarkMode:e,children:[`Плейлист: `,G]}),G===`ваші картинки`&&(0,$.jsxs)(Uv,{children:[(0,$.jsx)(`p`,{style:{color:e?`#ccc`:`#555`,marginBottom:`10px`,fontSize:`13px`,textAlign:`center`},children:`Створіть свій шедевр або знайдіть готовий (макс. 3)`}),(0,$.jsxs)(Jv,{children:[(0,$.jsx)(Yv,{$isDarkMode:e,$active:O===`search`,onClick:()=>k(`search`),children:`🔍 Пошук`}),(0,$.jsx)(Yv,{$isDarkMode:e,$active:O===`editor`,onClick:()=>k(`editor`),children:`🎨 Редактор та Файли`})]}),O===`search`?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Jv,{children:[(0,$.jsx)(Yv,{$isDarkMode:e,$active:E===`pixabay`,onClick:()=>D(`pixabay`),children:`🖼 Pixabay`}),(0,$.jsx)(Yv,{$isDarkMode:e,$active:E===`tvmaze`,onClick:()=>D(`tvmaze`),children:`🎬 TVMaze (Кіно)`})]}),(0,$.jsxs)(Jv,{children:[(0,$.jsx)(Wv,{$isDarkMode:e,type:`text`,placeholder:`Пошук зображень. Англійською вводьте.`,value:v,onChange:e=>y(e.target.value),onKeyDown:e=>e.key===`Enter`&&je()}),(0,$.jsx)(Gv,{type:`button`,onClick:je,disabled:M,children:M?`Зачекайте ${P}с`:`Знайти`})]}),S===`loading`&&(0,$.jsx)(Hv,{$isDarkMode:e,children:`Завантаження...`}),S===`no-results`&&(0,$.jsx)(Hv,{$isDarkMode:e,children:`Зображень за вашим запитом не знайдено.`}),S===`error`&&(0,$.jsx)(Hv,{$isDarkMode:e,children:`Помилка пошуку. Спробуйте пізніше.`}),b.length>0&&E===`pixabay`&&(0,$.jsx)(Gv,{type:`button`,onClick:Me,disabled:M,style:{marginTop:`10px`},children:M?`Зачекайте ${P}с`:`Завантажити ще`}),b.length>0&&(0,$.jsx)(Kv,{children:b.map(e=>(0,$.jsxs)(qv,{onClick:()=>Ne(e),children:[(0,$.jsx)(Lv,{src:e.previewURL,alt:e.name||e.tags,style:{width:`100px`,height:`100px`}}),(0,$.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`rgba(0,0,0,0.6)`,color:`#fff`,fontSize:`10px`,textAlign:`center`,padding:`2px`},children:`+ Додати`})]},e.id))})]}):(0,$.jsx)(cy,{onAddImage:Ne,isDarkMode:e,startCooldown:ke,isCooldown:M,cooldownTime:P})]}),(0,$.jsx)(Fv,{children:(0,$.jsx)(s,{children:U(ve.filter(e=>e.category===G)).slice(0,A).map((t,n)=>(0,$.jsxs)(Iv,{layout:!0,initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.5,y:50},transition:{duration:.3},children:[(0,$.jsxs)(Rv,{children:[(0,$.jsx)(Lv,{src:Cv(t.src)?``:t.src,alt:`Fan art - ${t.category}`,title:t.name||t.title||`Фанарт`,onClick:()=>L(n),style:{cursor:`zoom-in`,display:Cv(t.src)?`none`:`block`}}),Cv(t.src)&&(0,$.jsx)(sy,{src:t.src}),(0,$.jsxs)(zv,{className:`image-overlay`,children:[t.author&&(0,$.jsx)(`div`,{children:t.author}),t.source&&(0,$.jsx)(`div`,{style:{fontSize:`10px`,fontWeight:`normal`},children:t.source}),(0,$.jsx)(`div`,{children:t.name||t.title||`Арт`})]}),(0,$.jsxs)(Bv,{className:`image-overlay`,children:[Cv(t.src)&&(0,$.jsx)(Vv,{onClick:e=>{e.stopPropagation(),se([]),V(String(t.start??0)),re(String(t.end??``)),ae(5),te(t)},title:`Дістати кадри`,children:`🎥`}),t.description&&(0,$.jsx)(Vv,{onClick:e=>{e.stopPropagation(),de({name:t.name,text:t.description})},title:`Опис картини`,style:{background:`#1a3a5c`},children:`?`}),(0,$.jsx)(Vv,{onClick:()=>we(t.src),title:`Скачати`,children:(0,$.jsx)(Sv,{})}),(0,$.jsx)(Vv,{onClick:e=>{e.stopPropagation(),Te(t.src)},title:`Роздрукувати`,children:(0,$.jsx)(p,{})}),(0,$.jsx)(Vv,{onClick:e=>{e.stopPropagation(),De(t.src,t)},title:`3D-друк (плоский друк, тверда картина)`,children:`3D`}),(0,$.jsx)(Vv,{onClick:e=>{e.stopPropagation(),i(t.src),a(e=>e.some(e=>e.src===t.src)?e:[{src:t.src,name:t.title||`Фанарт`},...e])},title:`Встановити на шпалери`,style:{color:`white`},children:(0,$.jsx)(g,{})}),G===`ваші картинки`&&(0,$.jsx)(Vv,{onClick:()=>ze(t.id),title:`Видалити`,style:{background:`#ff6961`},children:`🗑️`})]})]}),t.summary&&(0,$.jsxs)(oy,{$isDarkMode:e,children:[(0,$.jsx)(`p`,{style:{fontWeight:`bold`,margin:`0 0 5px 0`},children:t.title}),(0,$.jsxs)(`p`,{style:{display:`-webkit-box`,WebkitLineClamp:3,WebkitBoxOrient:`vertical`,overflow:`hidden`,margin:0},children:[(0,$.jsx)(`b`,{children:`Сюжет:`}),` `,t.summary]}),(0,$.jsxs)(`p`,{style:{margin:`5px 0 0 0`},children:[(0,$.jsx)(`b`,{children:`Актори:`}),` `,t.cast||`Не вказано`]}),t.url&&(0,$.jsx)(`a`,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,style:{color:`#ffb36c`,fontSize:`10px`,textDecoration:`underline`,display:`block`,marginTop:`5px`},children:`Оригінальний сайт`})]})]},t.id||t.src))})}),xe.length>A&&(0,$.jsx)(Vv,{onClick:Ce,style:{marginTop:`20px`,width:`auto`},children:`Завантажити ще`})]})}),R&&(0,$.jsx)(`div`,{onClick:()=>ee(null),style:{position:`fixed`,inset:0,background:`rgba(0, 0, 0, 0.88)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:20,zIndex:2e3},children:(0,$.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{width:`min(100%, 980px)`,background:`#121212`,border:`1px solid #ffb36c`,borderRadius:18,padding:16,color:`white`,display:`flex`,flexDirection:`column`,gap:12},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,$.jsxs)(`h3`,{style:{margin:0},children:[`3D-preview: `,R.title]}),(0,$.jsx)(`button`,{onClick:()=>ee(null),style:{background:`transparent`,border:`none`,color:`white`,fontSize:24,cursor:`pointer`},children:`×`})]}),(0,$.jsx)(`div`,{ref:fe,style:{width:`100%`,height:`min(65vh, 520px)`,borderRadius:12,overflow:`hidden`,background:`linear-gradient(135deg, #1b1b1b, #080808)`,border:`1px solid rgba(255, 179, 108, 0.3)`}}),(0,$.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:10,justifyContent:`center`},children:[(0,$.jsx)(`button`,{onClick:Oe,style:{background:`#ffb36c`,color:`#111`,border:`none`,borderRadius:999,padding:`8px 14px`,fontWeight:700,cursor:`pointer`},children:`⬇️ Завантажити 3MF (з кольорами)`}),(0,$.jsx)(`button`,{onClick:()=>ee(null),style:{background:`#ffb36c`,color:`#111`,border:`none`,borderRadius:999,padding:`8px 14px`,fontWeight:700,cursor:`pointer`},children:`Закрити`})]})]})}),z&&(0,$.jsx)(`div`,{onClick:()=>te(null),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.88)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16,zIndex:2100},children:(0,$.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{background:`#111`,border:`1px solid #ffb36c`,borderRadius:16,padding:18,width:`min(100%, 700px)`,color:`#fff`,display:`flex`,flexDirection:`column`,gap:12,maxHeight:`90vh`,overflowY:`auto`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,$.jsxs)(`h3`,{style:{margin:0,color:`#ffb36c`},children:[`🎥 `,z.name]}),(0,$.jsx)(`button`,{onClick:()=>{te(null),se([])},style:{background:`transparent`,border:`none`,color:`#fff`,fontSize:22,cursor:`pointer`},children:`×`})]}),(0,$.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:10},children:[(0,$.jsxs)(`label`,{style:{fontSize:12},children:[`Початок (сек)`,(0,$.jsx)(`input`,{type:`number`,min:`0`,step:`0.5`,value:B,onChange:e=>V(e.target.value),style:{width:`100%`,marginTop:4,padding:`4px 8px`,borderRadius:6,background:`#222`,border:`1px solid #ffb36c`,color:`#fff`}})]}),(0,$.jsxs)(`label`,{style:{fontSize:12},children:[`Кінець (сек, > початок)`,(0,$.jsx)(`input`,{type:`number`,min:`0`,step:`0.5`,value:ne,onChange:e=>re(e.target.value),style:{width:`100%`,marginTop:4,padding:`4px 8px`,borderRadius:6,background:`#222`,border:`1px solid #ffb36c`,color:`#fff`}})]}),(0,$.jsxs)(`label`,{style:{fontSize:12},children:[`Кількість кадрів (1-20)`,(0,$.jsx)(`input`,{type:`number`,min:`1`,max:`20`,value:ie,onChange:e=>ae(e.target.value),style:{width:`100%`,marginTop:4,padding:`4px 8px`,borderRadius:6,background:`#222`,border:`1px solid #ffb36c`,color:`#fff`}})]})]}),(0,$.jsx)(`button`,{onClick:Pe,disabled:ce,style:{background:`#ffb36c`,color:`#111`,border:`none`,borderRadius:8,padding:`8px 18px`,fontWeight:700,cursor:`pointer`,fontSize:14},children:ce?`Завантажують...`:`📥 Дістати кадри`}),oe.length>0&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,$.jsxs)(`span`,{style:{fontSize:13,color:`#ffb36c`},children:[`Дістало кадрів: `,oe.length]}),(0,$.jsx)(`button`,{onClick:Ie,style:{background:`#2196f3`,color:`#fff`,border:`none`,borderRadius:6,padding:`5px 12px`,fontWeight:700,cursor:`pointer`,fontSize:12},children:`+ Додати всі`})]}),(0,$.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:oe.map((e,t)=>(0,$.jsxs)(`div`,{style:{position:`relative`,borderRadius:8,overflow:`hidden`,cursor:`pointer`},onClick:()=>Fe(e),children:[(0,$.jsx)(`img`,{src:e.src,alt:`Кадр ${t+1}`,style:{width:135,height:85,objectFit:`cover`,display:`block`}}),(0,$.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`rgba(0,0,0,0.6)`,fontSize:10,color:`#fff`,textAlign:`center`,padding:2},children:`+ Додати`})]},t))})]})]})}),ue&&(0,$.jsx)(`div`,{onClick:()=>de(null),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.85)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,$.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{background:`#111`,border:`2px solid #ffb36c`,borderRadius:`14px`,width:`90%`,maxWidth:`900px`,height:`80vh`,maxHeight:`650px`,color:`#fff`,position:`relative`,overflow:`hidden`,display:`flex`,flexDirection:`column`,boxShadow:`0 20px 50px rgba(0,0,0,0.9)`},children:[Cv(ue.src)?(0,$.jsx)(`video`,{src:ue.src,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`cover`,zIndex:1}}):(0,$.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url(${ue.src})`,backgroundSize:`cover`,backgroundPosition:`center`,zIndex:1}}),(0,$.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)`,zIndex:2}}),(0,$.jsxs)(`div`,{style:{position:`relative`,zIndex:3,display:`flex`,flexDirection:`column`,height:`100%`,boxSizing:`border-box`,padding:`30px`,justifyContent:`space-between`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,width:`100%`},children:[(0,$.jsxs)(`h3`,{style:{color:`#ffb36c`,margin:0,fontSize:`24px`,fontWeight:`bold`,textShadow:`0 2px 4px rgba(0,0,0,0.9)`},children:[`🖼️ `,ue.name]}),(0,$.jsx)(`button`,{onClick:()=>de(null),style:{background:`rgba(0,0,0,0.6)`,border:`1px solid rgba(255,255,255,0.3)`,borderRadius:`50%`,width:`36px`,height:`36px`,color:`#fff`,fontSize:`20px`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`all 0.2s`},onMouseEnter:e=>{e.currentTarget.style.background=`rgba(255,0,0,0.7)`,e.currentTarget.style.borderColor=`red`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(0,0,0,0.6)`,e.currentTarget.style.borderColor=`rgba(255,255,255,0.3)`},children:`×`})]}),(0,$.jsx)(`div`,{style:{flex:1,overflowY:`auto`,margin:`20px 0`,paddingRight:`10px`},children:(0,$.jsx)(`p`,{style:{lineHeight:1.8,whiteSpace:`pre-wrap`,fontSize:`15px`,margin:0,textShadow:`0 2px 10px rgba(0,0,0,0.95)`,color:`#f5f5f5`,background:`rgba(0,0,0,0.4)`,padding:`15px`,borderRadius:`8px`,backdropFilter:`blur(2px)`},children:ue.text})}),(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,width:`100%`},children:[(0,$.jsxs)(`div`,{style:{background:`rgba(0, 0, 0, 0.75)`,padding:`8px 16px`,borderRadius:`8px`,fontSize:`13px`,border:`1px solid rgba(255, 179, 108, 0.4)`,color:`#ffb36c`,fontWeight:`bold`,textShadow:`0 1px 2px rgba(0,0,0,0.6)`},children:[`👤 Автор: `,ue.author||`Невідомий`]}),ue.source&&(0,$.jsxs)(`div`,{style:{background:`rgba(0, 0, 0, 0.75)`,padding:`8px 16px`,borderRadius:`8px`,fontSize:`13px`,border:`1px solid rgba(255, 179, 108, 0.4)`,color:`#ffb36c`,fontWeight:`bold`,textShadow:`0 1px 2px rgba(0,0,0,0.6)`},children:[`🔗 Джерело: `,ue.source]})]})]})]})}),(0,$.jsx)(s,{children:I!==null&&(0,$.jsxs)(Qv,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>L(null),children:[(0,$.jsx)(Nv,{style:{color:`white`,zIndex:2020},onClick:()=>L(null),children:`×`}),(0,$.jsx)($v,{$left:!0,onClick:e=>{e.stopPropagation(),L(e=>(e-1+xe.length)%xe.length)},children:`❮`}),(0,$.jsx)(c.img,{src:xe[I].largeSrc||xe[I].src,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},onClick:e=>e.stopPropagation()},I),(0,$.jsx)($v,{onClick:e=>{e.stopPropagation(),L(e=>(e+1)%xe.length)},children:`❯`})]})})]})};export{ly as default};