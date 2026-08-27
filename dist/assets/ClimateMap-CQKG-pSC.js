import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,n as r,o as i,t as a}from"./jsx-runtime-CJi9uaNB.js";import{t as o}from"./localforage-CgxtEHGc.js";import{t as ee}from"./dist-DUs_8A6T.js";var s=e(i()),c=e(o()),l=a(),u=r`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,te=t.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${e=>e.$isDarkMode?`#ffffff`:`#111111`};
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 10px;
  transition: all 0.3s ease;
  z-index: 100;
  ${e=>e.$isStickyBgMode?n`
          background: ${e.$isDarkMode?`rgba(15, 15, 25, 0.75)`:`rgba(255, 255, 255, 0.75)`};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${e.$isDarkMode?`rgba(255, 255, 255, 0.15)`:`rgba(0, 0, 0, 0.15)`};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:n`
          background: ${e.$isDarkMode?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.05)`};
          border: 1px solid
            ${e.$isDarkMode?`rgba(255, 255, 255, 0.1)`:`rgba(0, 0, 0, 0.1)`};
        `}
`,ne=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,re=t.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 8;
  min-height: 360px;
  margin: 0 auto;
  border-radius: ${e=>e.$isFullscreen?`0`:`24px`};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${e=>e.$isFullscreen?`none`:`1px solid rgba(255, 255, 255, 0.15)`};
  background: #1a1a1a;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
`,d=t.div`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(18, 18, 28, 0.75);
  padding: 10px;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 767px) {
    top: 56px;
    opacity: ${e=>e.$isOpen?`1`:`0`};
    transform: ${e=>e.$isOpen?`translateY(0) scale(1)`:`translateY(-10px) scale(0.95)`};
    pointer-events: ${e=>e.$isOpen?`auto`:`none`};
  }
`,ie=t.button`
  display: none;
  
  @media (max-width: 767px) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 20;
    background: rgba(18, 18, 28, 0.85);
    color: #ffb36c;
    border: 1px solid rgba(255, 179, 108, 0.4);
    padding: 8px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.25s ease;

    &:hover {
      background: rgba(18, 18, 28, 0.95);
      border-color: rgba(255, 179, 108, 0.8);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`,f=t.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${e=>e.$isReady?`auto`:`none`};
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$isLoading?`0`:`1`};
`,p=t.div`
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
    animation: ${u} 2s linear infinite;
    font-size: 30px;
    margin-bottom: 10px;
  }
`,m=t.button`
  background: ${e=>e.$active?`linear-gradient(135deg, #00c6ff, #0072ff)`:`rgba(255, 255, 255, 0.08)`};
  color: #ffffff;
  border: 1px solid
    ${e=>e.$active?`rgba(0, 198, 255, 0.6)`:`rgba(255, 255, 255, 0.15)`};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${e=>e.$active?`0 4px 12px rgba(0, 114, 255, 0.3)`:`none`};

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
`,ae=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,h=t.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,oe=t.button`
  flex: 1;
  background: ${e=>e.$filled?`linear-gradient(135deg, rgba(0,198,255,0.15), rgba(0,114,255,0.15))`:`rgba(255,255,255,0.04)`};
  border: 1px solid ${e=>e.$filled?`rgba(0,198,255,0.4)`:`rgba(255,255,255,0.12)`};
  border-radius: 8px;
  color: ${e=>e.$filled?`#7fd6ff`:`rgba(255,255,255,0.4)`};
  font-size: 11px;
  padding: 5px 7px;
  cursor: ${e=>e.$filled?`pointer`:`default`};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s;
  &:hover {
    ${e=>e.$filled&&`background: linear-gradient(135deg, rgba(0,198,255,0.28), rgba(0,114,255,0.28));
       border-color: rgba(0,198,255,0.7);`}
  }
`,g=t.button`
  background: none;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 7px;
  color: rgba(255,255,255,0.6);
  font-size: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover {
    background: rgba(255,255,255,0.1);
    color: #fff;
    border-color: rgba(255,255,255,0.4);
  }
`,se=t.input`
  flex: 1;
  padding: 4px 7px;
  border-radius: 6px;
  border: 1px solid rgba(0,198,255,0.4);
  background: rgba(0,0,0,0.4);
  color: white;
  font-size: 11px;
  outline: none;
  &::placeholder { color: rgba(255,255,255,0.4); }
`,_=t.div`
  font-size: 10px;
  color: rgba(255,255,255,0.45);
  text-align: center;
  margin-top: 2px;
`,v=t.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,ce=t.input`
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
`,le=t.div`
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
`,ue=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,de=t.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,y=t.div`
  display: flex;
  gap: 6px;
`,fe=t.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,pe=t.div`
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
`,b=({isDarkMode:e,isStickyBgMode:t})=>{let[n,r]=(0,s.useState)(48.379),[i,a]=(0,s.useState)(31.165),[o,u]=(0,s.useState)(5),[b,x]=(0,s.useState)(!1),[S,me]=(0,s.useState)(!1),[C,w]=(0,s.useState)(``),[T,E]=(0,s.useState)(!1),[D,he]=(0,s.useState)(``),[O,k]=(0,s.useState)(!0),[A,j]=(0,s.useState)(`wind`),[M,N]=(0,s.useState)(!1),[P,F]=(0,s.useState)(!1),[I,L]=(0,s.useState)(!1),[R,ge]=(0,s.useState)(()=>typeof window>`u`?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[z,_e]=(0,s.useState)({width:320,height:220}),B=(0,s.useRef)(null),V=(0,s.useRef)(null),H=(0,s.useRef)(null),U=(0,s.useRef)(null),[W,G]=(0,s.useState)([null,null,null]),[K,ve]=(0,s.useState)(!1),[q,J]=(0,s.useState)(null),[Y,X]=(0,s.useState)(``);(0,s.useEffect)(()=>{let e=()=>{F(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),()=>{document.removeEventListener(`fullscreenchange`,e)}},[]),(0,s.useEffect)(()=>{(async()=>{try{let e=await c.default.getItem(`gemini_api_key`);e&&he(e);let t=await c.default.getItem(`pinned_map_location`);t&&(r(t.lat),a(t.lon),u(t.zoom),t.overlay&&j(t.overlay));let n=await c.default.getItem(`map_presets`);n&&G(n)}catch(e){console.error(`Error loading map data:`,e)}})()},[]);let ye=async e=>{e.stopPropagation();try{await c.default.setItem(`pinned_map_location`,{lat:n,lon:i,zoom:o,overlay:A}),alert(`Локацію закріплено! Вона завантажиться при наступному вході.`)}catch(e){console.error(`Error pinning location:`,e)}},Z=async e=>{let t=Y.trim()||`Пресет ${e+1}`,r=[...W];r[e]={name:t,lat:n,lon:i,zoom:o,overlay:A},G(r),await c.default.setItem(`map_presets`,r),J(null),X(``)},be=e=>{e&&(r(e.lat),a(e.lon),u(e.zoom),j(e.overlay),k(!0))},xe=async(e,t)=>{e.stopPropagation();let n=[...W];n[t]=null,G(n),await c.default.setItem(`map_presets`,n),q?.index===t&&J(null)},Se=async e=>{if(e?.preventDefault(),!(!C.trim()||T)){if(!D){alert(`API-ключ Gemini не знайдено. Будь ласка, додайте його в налаштуваннях ШІ.`);return}E(!0);try{let e=new ee(D).getGenerativeModel({model:`gemini-2.5-flash`}),t=`Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. 
      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.
      Запит: ${C}`,n=(await(await e.generateContent(t)).response).text().trim();n.startsWith("```json")?n=n.replace(/```json/g,``).replace(/```/g,``).trim():n.startsWith("```")&&(n=n.replace(/```/g,``).trim());let i=JSON.parse(n);Number.isFinite(i.lat)&&Number.isFinite(i.lon)&&(r(i.lat),a(i.lon),w(``),x(!1),N(!0))}catch(e){console.error(`AI Search error:`,e),alert(`Не вдалося знайти локацію. Спробуйте змінити запит.`)}finally{E(!1)}}};(0,s.useEffect)(()=>{let e=e=>{if(H.current){let{startX:t,startY:n,originX:r,originY:i}=H.current,a=Math.max(8,Math.min(window.innerWidth-120,r+e.clientX-t)),o=Math.max(8,Math.min(window.innerHeight-80,i+e.clientY-n));ge({x:a,y:o})}if(U.current){let{startX:t,startY:n,width:r,height:i}=U.current,a=Math.max(260,Math.min(window.innerWidth-24,r+e.clientX-t)),o=Math.max(200,Math.min(window.innerHeight-24,i+e.clientY-n));_e({width:a,height:o})}},t=()=>{H.current=null,U.current=null};return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseup`,t),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseup`,t)}},[]);let Q=(e=B)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.current?.requestFullscreen&&e.current.requestFullscreen()},Ce=e=>{e.target.closest(`button`)||(e.preventDefault(),H.current={startX:e.clientX,startY:e.clientY,originX:R.x,originY:R.y})},we=e=>{e.preventDefault(),e.stopPropagation(),U.current={startX:e.clientX,startY:e.clientY,width:z.width,height:z.height}},$=(0,s.useMemo)(()=>`https://embed.windy.com/embed2.html?lat=${n}&lon=${i}&zoom=${o}&level=surface&overlay=${A}&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`,[n,i,o,A]);return(0,l.jsxs)(ne,{children:[(0,l.jsx)(te,{$isDarkMode:e,$isStickyBgMode:t,children:`Кліматична мапа`}),!I&&(0,l.jsxs)(re,{ref:B,$isFullscreen:P,onClick:()=>!M&&N(!0),children:[(0,l.jsx)(ie,{onClick:e=>{e.stopPropagation(),me(!S)},children:S?`✕ Закрити`:`⚙ Налаштування Стихії`}),(0,l.jsxs)(d,{$isOpen:S,children:[b&&(0,l.jsxs)(v,{onSubmit:Se,children:[(0,l.jsx)(ce,{value:C,onChange:e=>w(e.target.value),placeholder:`Місто, село...`,autoFocus:!0}),(0,l.jsx)(m,{type:`submit`,$active:!0,disabled:T,onClick:e=>e.stopPropagation(),children:T?`Шукаю...`:`Знайти`})]}),(0,l.jsx)(m,{onClick:e=>{e.stopPropagation(),x(!b)},children:`ШІ Пошук`}),(0,l.jsx)(m,{onClick:ye,children:`Закріпити`}),(0,l.jsx)(`div`,{style:{height:`1px`,background:`rgba(255,255,255,0.2)`,margin:`4px 0`}}),(0,l.jsx)(m,{onClick:e=>{e.stopPropagation(),ve(!K)},$active:K,children:`🗂 Пресети`}),K&&(0,l.jsxs)(ae,{onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)(_,{children:[`Поточний режим: `,(0,l.jsx)(`strong`,{style:{color:`#7fd6ff`},children:A})]}),W.map((e,t)=>(0,l.jsxs)(`div`,{children:[q?.index===t?(0,l.jsxs)(h,{children:[(0,l.jsx)(se,{autoFocus:!0,placeholder:`Назва пресету ${t+1}`,value:Y,onChange:e=>X(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Z(t),e.key===`Escape`&&J(null)}}),(0,l.jsx)(g,{onClick:()=>Z(t),title:`Зберегти`,children:`✓`}),(0,l.jsx)(g,{onClick:()=>J(null),title:`Скасувати`,children:`✕`})]}):(0,l.jsxs)(h,{children:[(0,l.jsx)(oe,{$filled:!!e,onClick:()=>be(e),title:e?`Завантажити: ${e.name}\n${e.overlay} · zoom ${e.zoom}`:`Порожній слот`,children:e?`${e.name}`:`— слот ${t+1} —`}),(0,l.jsx)(g,{onClick:()=>{J({index:t}),X(e?.name||``)},title:`Зберегти поточний вигляд в цей слот`,children:`💾`}),e&&(0,l.jsx)(g,{onClick:e=>xe(e,t),title:`Видалити пресет`,style:{color:`#ff7b7b`},children:`✕`})]}),e&&(0,l.jsxs)(_,{children:[e.overlay,` · zoom `,e.zoom]})]},t))]}),(0,l.jsx)(`div`,{style:{height:`1px`,background:`rgba(255,255,255,0.2)`,margin:`4px 0`}}),(0,l.jsx)(m,{onClick:e=>{e.stopPropagation(),N(!M)},style:{border:M?`1px solid #ff4d4d`:`1px solid skyblue`},children:M?`Деактивувати`:`Активувати`}),(0,l.jsx)(m,{onClick:e=>{e.stopPropagation(),Q()},children:P?`Згорнути`:`На весь екран`}),(0,l.jsx)(m,{onClick:e=>{e.stopPropagation(),L(!0)},children:`Міні-плеєр`})]}),O&&(0,l.jsx)(p,{children:(0,l.jsx)(`p`,{children:`Завантаження...`})}),(0,l.jsx)(f,{title:`Windy Live Weather Map`,src:$,$isLoading:O,$isReady:M,onLoad:()=>k(!1),allowFullScreen:!0})]}),I&&(0,l.jsxs)(le,{ref:V,onDoubleClick:()=>L(!1),style:{left:R.x,top:R.y,width:z.width,height:z.height},children:[(0,l.jsxs)(ue,{onMouseDown:Ce,children:[(0,l.jsx)(de,{children:`Міні-карта • подвійний клік — назад`}),(0,l.jsxs)(y,{children:[(0,l.jsx)(m,{onClick:e=>{e.stopPropagation(),Q(V)},children:P?`Згорнути`:`⛶`}),(0,l.jsx)(m,{onClick:e=>{e.stopPropagation(),L(!1)},children:`✕`})]})]}),(0,l.jsxs)(fe,{children:[O&&(0,l.jsxs)(p,{children:[(0,l.jsx)(`div`,{className:`spinner`,children:`🌀`}),(0,l.jsx)(`p`,{children:`Завантаження...`})]}),(0,l.jsx)(f,{title:`Windy Live Weather Map`,src:$,$isLoading:O,$isReady:M,onLoad:()=>k(!1),allowFullScreen:!0}),(0,l.jsx)(pe,{onMouseDown:we})]})]})]})};export{b as default};