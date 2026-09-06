import{o as q}from"./rolldown-runtime-BNNRdYrd.js";import{Fn as te,In as o,Mn as ge,Nn as he,Tn as fe,Xn as be,Zn as me,dn as ye}from"./vendor-react-DaUcAjuS.js";var r=q(me()),we=q(be()),H=q(ge()),e=fe(),ve=he`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,ke=o.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${n=>n.$isDarkMode?"#ffffff":"#111111"};
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 10px;
  transition: all 0.3s ease;
  z-index: 100;
  ${n=>n.$isStickyBgMode?te`
          background: ${n.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${n.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:te`
          background: ${n.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${n.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,je=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Me=o.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 6.6;
  min-height: 430px;
  margin: 0 auto;
  border-radius: ${n=>n.$isFullscreen?"0":"24px"};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${n=>n.$isFullscreen?"none":"1px solid rgba(255, 255, 255, 0.15)"};
  background: #1a1a1a;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
`,Se=o.div`
  display: none;
`,$e=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin: 0 5px 5px;
  padding: 11px 16px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 12px;
  background: rgba(18, 18, 28, 0.88);
  color: #ffb36c;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
`,Pe=o.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background: rgba(5, 8, 14, 0.14);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`,Ce=o.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  background: rgba(23, 37, 71, 0.74);
  color: white;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
`,ze=o.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;

  h2 {
    margin: 0;
    font-size: 19px;
  }

  p {
    margin: 4px 0 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 12px;
  }
`,f=o.button`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3px 12px;
  width: 100%;
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.07);
  color: white;
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: rgba(255, 179, 108, 0.65);
    background: rgba(255, 179, 108, 0.14);
  }

  strong {
    font-size: 13px;
  }

  span {
    grid-column: 1;
    color: rgba(255, 255, 255, 0.62);
    font-size: 11px;
    line-height: 1.35;
  }

  kbd {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    padding: 4px 7px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: #ffcf9e;
    font-size: 10px;
    white-space: nowrap;
  }
`,Le=o.button`
  width: 60px;
  font-size: 41px;
  border-radius: 10px;
  background: transparent;
  top: 8px;
  right: 10px;
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`,N=o.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${n=>n.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${n=>n.$isLoading?"0":"1"};
`,re=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  pointer-events: none;

  .spinner {
    display: inline-block;
    animation: ${ve} 2s linear infinite;
    font-size: 30px;
    margin-bottom: 10px;
  }
`,l=o.button`
  background: ${n=>n.$active?"linear-gradient(135deg, #00c6ff, #0072ff)":"rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  border: 1px solid
    ${n=>n.$active?"rgba(0, 198, 255, 0.6)":"rgba(255, 255, 255, 0.15)"};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${n=>n.$active?"0 4px 12px rgba(0, 114, 255, 0.3)":"none"};

  &:hover {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 114, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,ne=o.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,ie=o.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Ee=o.div`
  position: fixed;
  z-index: 2200;
  display: flex;
  flex-direction: column;
  background: rgba(10, 15, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  user-select: none;
`,Ie=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,De=o.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,Fe=o.div`
  display: flex;
  gap: 6px;
`,_e=o.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,We=o.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(255, 255, 255, 0.35) 50%
  );
`,Re=({isDarkMode:n,isStickyBgMode:oe})=>{const[b,T]=(0,r.useState)(48.379),[m,B]=(0,r.useState)(31.165),[y,ae]=(0,r.useState)(5),[j,M]=(0,r.useState)(!1),[K,F]=(0,r.useState)(!1),[S,_]=(0,r.useState)(""),[w,G]=(0,r.useState)(!1),[U,se]=(0,r.useState)(""),[v,$]=(0,r.useState)(!0),[d,le]=(0,r.useState)("wind"),[u,k]=(0,r.useState)(!1),[P,de]=(0,r.useState)(!1),[g,c]=(0,r.useState)(!1),[x,J]=(0,r.useState)(null),[h,C]=(0,r.useState)("ventusky"),[z,ce]=(0,r.useState)(()=>typeof window>"u"?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[L,pe]=(0,r.useState)({width:320,height:220}),Q=(0,r.useRef)(null),V=(0,r.useRef)(null),E=(0,r.useRef)(null),I=(0,r.useRef)(null);(0,r.useEffect)(()=>{const t=()=>{de(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",t),()=>{document.removeEventListener("fullscreenchange",t)}},[]),(0,r.useEffect)(()=>{(async()=>{try{const i=await H.default.getItem("gemini_api_key");i&&se(i);const a=await H.default.getItem("pinned_map_location");a&&(T(a.lat),B(a.lon),ae(a.zoom),a.overlay&&le(a.overlay))}catch(i){console.error("Error loading map data:",i)}})()},[]);const Z=async t=>{t&&t.stopPropagation();try{await H.default.setItem("pinned_map_location",{lat:b,lon:m,zoom:y,overlay:d}),alert("Локацію закріплено! Вона завантажиться при наступному вході.")}catch(i){console.error("Error pinning location:",i)}},W=async()=>{if(window.documentPictureInPicture)try{const t=await window.documentPictureInPicture.requestWindow({width:400,height:300});t.document.body.style.margin="0",t.document.body.style.overflow="hidden",t.document.body.style.background="#1a1a1a",t.addEventListener("pagehide",()=>{J(null),c(!1)}),J(t),c(!0)}catch(t){console.error("PiP API failed:",t),c(!0)}else c(!0)},ee=async t=>{if(t?.preventDefault(),!(!S.trim()||w)){if(!U){alert("API-ключ Gemini не знайдено. Будь ласка, додайте його в налаштуваннях ШІ.");return}G(!0);try{const i=new ye(U).getGenerativeModel({model:"gemini-2.5-flash"}),a=`Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. 
      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.
      Запит: ${S}`;let s=(await(await i.generateContent(a)).response).text().trim();s.startsWith("```json")?s=s.replace(/```json/g,"").replace(/```/g,"").trim():s.startsWith("```")&&(s=s.replace(/```/g,"").trim());const p=JSON.parse(s);Number.isFinite(p.lat)&&Number.isFinite(p.lon)&&(T(p.lat),B(p.lon),_(""),M(!1),k(!0))}catch(i){console.error("AI Search error:",i),alert("Не вдалося знайти локацію. Спробуйте змінити запит.")}finally{G(!1)}}};(0,r.useEffect)(()=>{const t=a=>{if(E.current){const{startX:s,startY:p,originX:O,originY:R}=E.current,X=Math.max(8,Math.min(window.innerWidth-120,O+a.clientX-s)),Y=Math.max(8,Math.min(window.innerHeight-80,R+a.clientY-p));ce({x:X,y:Y})}if(I.current){const{startX:s,startY:p,width:O,height:R}=I.current,X=Math.max(260,Math.min(window.innerWidth-24,O+a.clientX-s)),Y=Math.max(200,Math.min(window.innerHeight-24,R+a.clientY-p));pe({width:X,height:Y})}},i=()=>{E.current=null,I.current=null};return window.addEventListener("mousemove",t),window.addEventListener("mouseup",i),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)}},[]);const D=(t=Q)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():t.current?.requestFullscreen&&t.current.requestFullscreen()};(0,r.useEffect)(()=>{const t=i=>{if(!["INPUT","TEXTAREA","SELECT"].includes(i.target.tagName)&&i.shiftKey&&i.ctrlKey)switch(i.key.toLowerCase()){case"m":i.preventDefault(),k(a=>!a);break;case"f":i.preventDefault(),D();break;case"p":i.preventDefault(),g?x?x.close():c(!1):W();break;case"w":i.preventDefault(),C(a=>a==="windy"?"ventusky":"windy");break;case"s":i.preventDefault(),M(a=>!a)}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[g,x]);const ue=t=>{t.target.closest("button")||(t.preventDefault(),E.current={startX:t.clientX,startY:t.clientY,originX:z.x,originY:z.y})},xe=t=>{t.preventDefault(),t.stopPropagation(),I.current={startX:t.clientX,startY:t.clientY,width:L.width,height:L.height}},A=(0,r.useMemo)(()=>{if(h==="windy")return`https://embed.windy.com/embed2.html?lat=${b}&lon=${m}&zoom=${y}&level=surface&overlay=${d}&menu=&message=true&marker=`;let t=d;return d==="rain"&&(t="rain-3h"),d==="temp"&&(t="temperature"),d==="clouds"&&(t="cloud-cover"),`https://www.ventusky.com/?p=${b};${m};${y}&l=${t}`},[h,b,m,y,d]);return(0,r.useEffect)(()=>{$(!0)},[h,b,m,y,d]),(0,e.jsxs)(je,{children:[(0,e.jsx)(ke,{$isDarkMode:n,$isStickyBgMode:oe,children:"Кліматична мапа"}),(0,e.jsx)($e,{type:"button",onClick:()=>F(!0),"aria-label":"Відкрити налаштування Стихії",children:"⚙ Налаштування Стихії"}),(0,e.jsxs)(Me,{ref:Q,$isFullscreen:P,onClick:()=>!u&&k(!0),children:[(0,e.jsxs)(Se,{$isOpen:K,children:[j&&(0,e.jsxs)(ne,{onSubmit:ee,children:[(0,e.jsx)(ie,{value:S,onChange:t=>_(t.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,e.jsx)(l,{type:"submit",$active:!0,disabled:w,onClick:t=>t.stopPropagation(),children:w?"Шукаю...":"Знайти"})]}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),M(!j)},children:"ШІ Пошук"}),(0,e.jsx)(l,{onClick:Z,children:"Закріпити"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),C("ventusky")},$active:h==="ventusky",children:"Джерело: Ventusky"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),C("windy")},$active:h==="windy",children:"Джерело: Windy"}),(0,e.jsx)("div",{style:{height:"1px",background:"rgba(255,255,255,0.2)",margin:"4px 0"}}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),k(!u)},style:{border:u?"1px solid #ff4d4d":"1px solid skyblue"},children:u?"Деактивувати":"Активувати"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),D()},children:P?"Згорнути":"На весь екран"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),g?x?x.close():c(!1):W()},children:g?"Закрити міні-плеєр":"Міні-плеєр"})]}),K&&(0,e.jsx)(Pe,{onClick:()=>F(!1),children:(0,e.jsxs)(Ce,{onClick:t=>t.stopPropagation(),children:[(0,e.jsxs)(ze,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:"Налаштування Стихії"}),(0,e.jsx)("p",{children:"Керуйте картою та її джерелом"})]}),(0,e.jsx)(Le,{type:"button",onClick:()=>F(!1),children:"×"})]}),j&&(0,e.jsxs)(ne,{onSubmit:ee,children:[(0,e.jsx)(ie,{value:S,onChange:t=>_(t.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,e.jsx)(l,{type:"submit",$active:!0,disabled:w,children:w?"Шукаю...":"Знайти"})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>M(!j),children:[(0,e.jsx)("strong",{children:"ШІ-пошук локації"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + S"}),(0,e.jsx)("span",{children:"Знайти місто або місце за допомогою ШІ та перемістити карту."})]}),(0,e.jsxs)(f,{type:"button",onClick:Z,children:[(0,e.jsx)("strong",{children:"Закріпити локацію"}),(0,e.jsx)("kbd",{children:"Без комбінації"}),(0,e.jsx)("span",{children:"Зберегти поточні координати, масштаб і шар для наступного входу."})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>C(t=>t==="windy"?"ventusky":"windy"),children:[(0,e.jsxs)("strong",{children:["Змінити джерело: ",h==="windy"?"Windy":"Ventusky"]}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + W"}),(0,e.jsx)("span",{children:"Перемикатися між двома погодними сервісами для перегляду карти."})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>k(!u),children:[(0,e.jsx)("strong",{children:u?"Деактивувати карту":"Активувати карту"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + M"}),(0,e.jsx)("span",{children:"Увімкнути або вимкнути взаємодію з картою та її iframe."})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>D(),children:[(0,e.jsx)("strong",{children:P?"Згорнути карту":"Відкрити на весь екран"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + F"}),(0,e.jsx)("span",{children:"Розгорнути карту на весь екран пристрою або повернути звичайний вигляд."})]}),(0,e.jsxs)(f,{type:"button",onClick:W,children:[(0,e.jsx)("strong",{children:"Міні-плеєр карти"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + P"}),(0,e.jsx)("span",{children:"Винести карту в окреме плаваюче вікно для паралельної роботи."})]})]})}),g?(0,e.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:"Закрийте міні-плеєр щоб повернути карту"}):(0,e.jsxs)(e.Fragment,{children:[v&&(0,e.jsx)(re,{children:(0,e.jsx)("p",{children:"Завантаження..."})}),(0,e.jsx)(N,{title:"Weather Map",src:A,$isLoading:v,$isReady:u,onLoad:()=>$(!1),allowFullScreen:!0})]})]}),x?(0,we.createPortal)((0,e.jsx)(N,{title:"Weather Map (PiP)",src:A,$isLoading:v,$isReady:!0,onLoad:()=>$(!1),allowFullScreen:!0,style:{width:"100%",height:"100vh"}}),x.document.body):g&&(0,e.jsxs)(Ee,{ref:V,onDoubleClick:()=>c(!1),style:{left:z.x,top:z.y,width:L.width,height:L.height},children:[(0,e.jsxs)(Ie,{onMouseDown:ue,children:[(0,e.jsx)(De,{children:"Міні-карта • подвійний клік — назад"}),(0,e.jsxs)(Fe,{children:[(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),D(V)},children:P?"Згорнути":"⛶"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),c(!1)},children:"✕"})]})]}),(0,e.jsxs)(_e,{children:[v&&(0,e.jsxs)(re,{children:[(0,e.jsx)("div",{className:"spinner",children:"🌀"}),(0,e.jsx)("p",{children:"Завантаження..."})]}),(0,e.jsx)(N,{title:"Weather Map Mini",src:A,$isLoading:v,$isReady:!0,onLoad:()=>$(!1),allowFullScreen:!0}),(0,e.jsx)(We,{onMouseDown:xe})]})]})]})};export{Re as default};

//# sourceMappingURL=ClimateMap-CcwZZbec.js.map