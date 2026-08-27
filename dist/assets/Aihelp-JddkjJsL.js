import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,o as r,t as i}from"./jsx-runtime-CJi9uaNB.js";import{t as a}from"./localforage-CgxtEHGc.js";import{t as ee}from"./dist-DUs_8A6T.js";import{t as o}from"./ri-0LgUC5Po.js";import{J as s,i as c,r as l,t as te}from"./index-CbNTxoaW.js";var u=e(r()),d=e(a()),ne=e(s()),f=i(),re=t.div`
  display: flex;
  flex-direction: column;
  height: 570px;
  max-width: 1200px;
  width: 100%;
  margin: 10px auto 0;
  padding: 0 5px;
  gap: 5px;
  z-index: 100;
  position: relative;
  overflow-y: auto;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    border 0.4s ease,
    border-radius 0.4s ease,
    padding 0.4s ease;
  ${e=>e.$isStickyBgMode?n`
          background: ${e.$isDarkMode?`rgba(0,0,0,0.6)`:`rgba(255,255,255,0.6)`};
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid
            ${e.$isDarkMode?`rgba(255,255,255,0.12)`:`rgba(0,0,0,0.12)`};
          padding: 10px;
        `:n`
          background: transparent;
        `}
`,ie=t.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${e=>e.$isDarkMode?`#ffffff`:`#111111`};
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
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
`,ae=t.div`
  flex-shrink: 0;
  padding: 5px;
  background: ${e=>e.$isStickyBgMode?e.$isDarkMode?`rgba(10, 10, 20, 0.82)`:`rgba(255, 249, 230, 0.88)`:e.$isDarkMode?`rgba(12, 12, 12, 0.67)`:`#fff9e6`};
  backdrop-filter: ${e=>e.$isStickyBgMode?`blur(8px)`:`none`};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?`blur(8px)`:`none`};
  border: 1px solid orange;
  border-radius: 8px;
  z-index: 100;
  position: relative;
  color: ${e=>e.$isDarkMode?`white`:`black`};
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease;
`,oe=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?`white`:`black`};

  ${e=>e.$isStickyBgMode?n`
          background: ${e.$isDarkMode?`rgba(15,15,25,0.45)`:`rgba(255,255,255,0.6)`};
          padding: 6px;
          border-radius: 6px;
        `:``}

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    min-width: 160px;
  }

  input[type="radio"] {
    margin-right: 8px;
    accent-color: orange;
  }

  input[type="password"] {
    flex: 1;
    min-width: 200px;
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid ${e=>e.$hasError?`red`:`#ccc`};
    background: ${e=>e.$isDarkMode?`#222`:`#fff`};
    color: ${e=>e.$isDarkMode?`white`:`black`};
    font-size: 12px;
  }
`,se=t.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    text-decoration: underline;
  }
`,ce=t.div`
  display: flex;
  gap: 8px;
  margin-top: 5px;
  border-top: 1px dashed rgba(128, 128, 128, 0.3);
  padding-top: 10px;
  flex-wrap: wrap;
`,p=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
`,le=t.div`
  font-size: 11px;
  font-weight: 700;
  color: orange;
`,m=t.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,ue=t.button`
  border: 1px solid orange;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 11px;
  cursor: pointer;
  background: ${e=>e.$active?`orange`:`transparent`};
  color: ${e=>e.$active?`#000`:e.$isDarkMode?`white`:`black`};
  font-weight: ${e=>e.$active?`700`:`500`};
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-1px);
  }
`,de=t.span`
  color: ${e=>e.$active?`#000`:e.$isDarkMode?`white`:`black`};
`,fe=t.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  padding: 3px;
  border-radius: 8px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 10px;
  }
`,pe=t.div`
  align-self: ${e=>e.$isBot?`flex-start`:`flex-end`};
  max-width: 80%;
  background: ${e=>e.$isBot?e.$isDarkMode?`rgba(30, 30, 40, 0.85)`:`rgba(240,240,240,0.92)`:`rgba(0,0,0,0.82)`};
  backdrop-filter: ${e=>e.$isStickyBgMode?`blur(6px)`:`none`};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?`blur(6px)`:`none`};
  color: ${e=>e.$isBot?e.$isDarkMode?`white`:`black`:`white`};
  border: 1px solid
    ${e=>e.$isBot?e.$isDarkMode?`rgba(255,255,255,0.3)`:`rgba(0,0,0,0.2)`:`rgba(255,255,255,0.3)`};
  padding: 4px;
  border-radius: 10px;
  position: relative;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  pre {
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
`,me=t.button`
  position: absolute;
  top: 5px;
  right: -35px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  padding: 2px 5px;
  border-radius: 4px;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`,he=t.div`
  color: #ff4d4d;
  background: rgba(255, 77, 77, 0.1);
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`,ge=t.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${e=>e.$isDarkMode?`#ffffff`:`#000000`};
  border-radius: 8px;
  background: ${e=>e.$isDarkMode?`rgba(0,0,0,0.85)`:`rgba(255,255,255,0.85)`};
  backdrop-filter: ${e=>e.$isStickyBgMode?`blur(8px)`:`none`};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?`blur(8px)`:`none`};
  transition:
    background 0.4s ease,
    border-color 0.2s;
  &:focus-within {
    border-color: orange;
  }
`,_e=t.textarea`
  width: 100%;
  border: none;
  background: transparent;
  padding: 12px;
  border-radius: 8px 8px 0 0;
  color: ${e=>e.$isDarkMode?`white`:`black`};
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: auto;
  min-height: 50px;
`,ve=t.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 10px 10px;
  gap: 8px;
`,h=t.button`
  color: ${e=>e.$isDarkMode?`#000000`:`#ffffff`};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`,ye=t.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
`,be=t.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$isDarkMode?`#333`:`#eee`};
  border-radius: 5px;
  border: 1px solid orange;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,xe=t.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,Se=t.div`
  flex-shrink: 0;
  font-size: 12px;
  color: orange;
`,Ce=t.div`
  width: 100%;
  font-size: 10px;
  color: orange;
`,we=t.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.93);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 20px;
`,Te=t.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 22px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,Ee=t.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,De=t.img`
  max-width: 90vw;
  max-height: 75vh;
  border-radius: 8px;
  object-fit: contain;
`,Oe=t.video`
  max-width: 90vw;
  max-height: 65vh;
  border-radius: 8px;
  background: #000;
`,ke=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Ae=t.div`
  font-size: 80px;
  line-height: 1;
`,je=t.div`
  display: flex;
  align-items: center;
  gap: 3px;
  height: 40px;
`,Me=t.div`
  width: 4px;
  border-radius: 2px;
  background: orange;
  height: ${e=>e.$h}%;
  opacity: ${e=>e.$playing?1:.4};
  animation: ${e=>e.$playing?`wavePulse ${e.$dur}s ease-in-out infinite alternate`:`none`};
  @keyframes wavePulse {
    from {
      height: ${e=>e.$h}%;
    }
    to {
      height: ${e=>Math.min(100,e.$h+40)}%;
    }
  }
`,g=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,_=t.button`
  background: orange;
  border: none;
  color: #000;
  font-size: 22px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #ffb300;
  }
`,v=t.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  &:hover {
    height: 8px;
  }
  transition: height 0.15s;
`,y=t.div`
  height: 100%;
  background: orange;
  border-radius: 3px;
  pointer-events: none;
`,b=t.div`
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,x=t.div`
  display: flex;
  gap: 6px;
`,S=t.button`
  border: 1px solid ${e=>e.$active?`orange`:`rgba(255,255,255,0.2)`};
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  background: ${e=>e.$active?`orange`:`transparent`};
  color: ${e=>e.$active?`#000`:`white`};
  font-weight: ${e=>e.$active?`700`:`400`};
  &:hover {
    border-color: orange;
  }
`,Ne=t.audio`
  display: none;
`,Pe=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-in;
`,C=e=>e===`detailed`?{label:`Більше`,instruction:`Докладно.`}:e===`normal`?{label:`Нормально`,instruction:`Нормально.`}:{label:`Менше`,instruction:`Коротко.`},w=e=>e===`scientific`?{label:`Науково`,instruction:`Використовуй науковий стиль, чітко, з термінами і логікою.`}:e===`friendly`?{label:`Дружньо`,instruction:`Використовуй дружній, теплий і простий стиль.`}:{label:`Стандартно`,instruction:`Використовуй нейтральний стиль.`},Fe=`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
КОНЦЕПЦІЯ ПЛАТФОРМИ:
«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:
• 🌤 Погода — поточний прогноз, 24-годинний (на 7 днів), 16-денний. Кольорові попередження (🔴 зараз, 🟠 найближчі 3 дні) при екстремальних умовах (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7). Можна переглядати кілька міст одночасно.
• 🎵 Музика — плейлисти без реклами та лімітів.
• 📰 Новини — RSS-стрічки з автоматичним фільтром: відсіює насильство, політику, 18+, кримінал, релігію (крім святкових днів), казино, корупцію, секти. Можна додавати власні RSS-джерела.
• 🎨 Фан-арти — галерея різних жанрів(більшість не належить автору). Користувачі можуть завантажувати, друкувати 2д і 3д принтером роботи.
• 🗺 Карта клімату — інтерактивна кліматична карта.
• 🤖 Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.

АВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com
Вікові обмеження: 13+. Деякий контент — 14+.
Конфіденційність: платформа не збирає персональні дані.
Авторські права: пісні використовуються лише в ознайомчих цілях.

ТВОЇ ПРАВИЛА:
1. Ти знаєш усі розділи Стихії і можеш допомогти користувачу розібратись у будь-якому з них.
2. Якщо питання стосується платформи — відповідай конкретно і по суті, посилаючись на розділи та функції.
3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.
4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.
5. Відповідай українською мовою, якщо запит не на іншій мові.
6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.`,T=({isDarkMode:e,isStickyBgMode:t})=>{let[n,r]=(0,u.useState)(``),[i,a]=(0,u.useState)([]),[s,T]=(0,u.useState)(``),[Ie,Le]=(0,u.useState)(`gemini-2.5-flash`),[E,Re]=(0,u.useState)(`normal`),[D,ze]=(0,u.useState)(`friendly`),[O,k]=(0,u.useState)([]),[A,j]=(0,u.useState)(!1),[M,N]=(0,u.useState)(``),[P,F]=(0,u.useState)(``),I=(0,u.useRef)(``),[Be,L]=(0,u.useState)(0),[R,z]=(0,u.useState)(null),[Ve,He]=(0,u.useState)(!1),[B,V]=(0,u.useState)(!1),[H,U]=(0,u.useState)(null),[W,G]=(0,u.useState)(!1),[Ue,We]=(0,u.useState)(0),[Ge,Ke]=(0,u.useState)(0),[qe,Je]=(0,u.useState)(0),[K,Ye]=(0,u.useState)(1),q=(0,u.useRef)([]),J=(0,u.useRef)(null),Xe=(0,u.useRef)(null),Y=(0,u.useRef)(null),X=(0,u.useRef)(null),Z=e=>!e||isNaN(e)?`0:00`:`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`,Ze=e=>{U(e),G(!1),We(0),Je(0),Ke(0),Ye(1)},Qe=()=>{X.current&&X.current.pause(),U(null),G(!1)},Q=()=>{X.current&&(X.current.paused?X.current.play():X.current.pause())},$e=()=>{if(!X.current)return;let{currentTime:e,duration:t}=X.current;Je(e),We(t?e/t:0)},et=()=>{X.current&&(Ke(X.current.duration),X.current.playbackRate=K)},tt=e=>{let t=e.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width));X.current&&X.current.duration&&(X.current.currentTime=n*X.current.duration)},nt=e=>{Ye(e),X.current&&(X.current.playbackRate=e)},rt=e=>{r(e.target.value),J.current&&(J.current.style.height=`auto`,J.current.style.height=`${J.current.scrollHeight}px`)};(0,u.useEffect)(()=>{let e=Y.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[i]),(0,u.useEffect)(()=>{if(!P)return;let e=Y.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[P]);let it=async()=>{if(!(B||A)){V(!0),N(`Роблю скріншот...`);try{(await(0,ne.default)(document.body,{useCORS:!0,allowTaint:!0,scale:.8,logging:!1})).toBlob(e=>{if(!e)return;let t=new File([e],`screenshot.png`,{type:`image/png`}),n=URL.createObjectURL(t);q.current.push(n),k(e=>[...e,{file:t,objectURL:n}]),L(t=>t+e.size),N(`Скріншот додано — запитайте Gemini!`),setTimeout(()=>N(``),2e3)},`image/png`)}catch{N(`Помилка скріншоту`),setTimeout(()=>N(``),2e3)}finally{V(!1)}}};(0,u.useEffect)(()=>{(async()=>{let e=await d.default.getItem(`gemini_api_key`),t=await d.default.getItem(`gemini_model`),n=await d.default.getItem(`ai_help_history`);e&&T(e),t&&Le(t),n&&a(n)})()},[]),(0,u.useEffect)(()=>()=>{q.current.forEach(e=>URL.revokeObjectURL(e)),q.current=[]},[]);let at=async e=>({inlineData:{data:await new Promise(t=>{let n=new FileReader;n.onloadend=()=>t(n.result.split(`,`)[1]),n.readAsDataURL(e)}),mimeType:e.type}}),ot=()=>{q.current.forEach(e=>URL.revokeObjectURL(e)),q.current=[],k([]),L(0)},st=async e=>{T(e),await d.default.setItem(`gemini_api_key`,e)},ct=e=>{let t=Array.from(e);if(O.length+t.length>15){alert(`Ви можете прикріпити максимум 15 файлів.`);return}let n=O.reduce((e,t)=>e+t.file.size,0),r=t.reduce((e,t)=>e+t.size,0);if(n+r>104857600){alert(`Загальний розмір вибраних файлів перевищує 100МБ.`);return}let i=t.map(e=>{let t=URL.createObjectURL(e);return q.current.push(t),{file:e,objectURL:t}});L(n+r),k(e=>[...e,...i])},lt=e=>{k(t=>{let n=t[e];return n?.objectURL&&(URL.revokeObjectURL(n.objectURL),L(e=>Math.max(0,e-n.file.size)),q.current=q.current.filter(e=>e!==n.objectURL)),t.filter((t,n)=>n!==e)})},ut=async e=>{try{let t=e.objectURL||e.file&&URL.createObjectURL(e.file);if(!t)return;let n=await d.default.getItem(`custom_hero_backgrounds`)||[],r=[{src:t,name:e.file?.name||`ai-image`,author:`AiHelp`},...n.filter(e=>e.src!==t)];await d.default.setItem(`custom_hero_backgrounds`,r),await d.default.setItem(`hero_background`,t);try{window.dispatchEvent(new CustomEvent(`heroBackgroundChanged`,{detail:{src:t}}))}catch{}alert(`Картину збережено як фон. Якщо фон не змінився, перезавантажте сторінку.`)}catch(e){console.error(e),alert(`Не вдалося встановити фон.`)}},dt=e=>{navigator.clipboard.writeText(e),alert(`Скопійовано!`)},ft=async()=>{window.confirm(`Очистити історію чату?`)&&(q.current.forEach(e=>URL.revokeObjectURL(e)),q.current=[],a([]),L(0),await d.default.removeItem(`ai_help_history`))},pt=e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),$())},$=async(e=null)=>{let t=typeof e==`string`?e:n.trim();if(!t&&O.length===0||A)return;if(!s){a(e=>[...e,{text:`⚠️ Будь ласка, введіть Gemini API-ключ у панелі налаштувань.`,isBot:!0}]);return}if(t&&te(t)){a(e=>[...e,{text:`Запит містить заборонені слова або теми.`,isBot:!0}]);return}I.current=t,z(null),j(!0),F(``);let i={text:t,isBot:!1};a(e=>[...e,i]),r(``),J.current&&(J.current.style.height=`0px`,J.current.style.height=`auto`);try{N(`З'єднання з Google Gemini...`);let e=new ee(s).getGenerativeModel({model:Ie,systemInstruction:Fe}),{instruction:n}=C(E),{instruction:r}=w(D),i=[{text:`${n} ${r}\n${t}`}];for(let e of O)i.push(await at(e.file));let o=await e.generateContentStream(i),c=``;for await(let e of o.stream)c+=e.text(),F(c);let l={text:c,isBot:!0};a(e=>{let t=[...e,l];return d.default.setItem(`ai_help_history`,t.slice(-25)),t}),F(``),ot()}catch(e){F(``),z(e.message),ot()}finally{j(!1),N(``)}};return(0,f.jsxs)(re,{$isStickyBgMode:t,$isDarkMode:e,children:[(0,f.jsx)(ie,{$isDarkMode:e,$isStickyBgMode:t,children:`Допомога ШІ`}),(0,f.jsxs)(ae,{$isDarkMode:e,$isStickyBgMode:t,children:[(0,f.jsxs)(oe,{$isDarkMode:e,$isStickyBgMode:t,children:[(0,f.jsx)(`label`,{style:{minWidth:`unset`,fontWeight:600,fontSize:13},children:`Gemini API Key`}),(0,f.jsx)(`input`,{type:`password`,placeholder:`Вставте ваш Gemini API Key...`,value:s,onChange:e=>st(e.target.value),name:`ai-help-gemini-key`,autoComplete:`off`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"data-form-type":`other`,"data-lpignore":`true`}),!s&&(0,f.jsx)(se,{href:`https://aistudio.google.com/app/apikey`,target:`_blank`,rel:`noreferrer`,children:`🔗 Отримати ключ`})]}),(0,f.jsxs)(ce,{children:[(0,f.jsxs)(p,{children:[(0,f.jsx)(le,{children:`Обсяг`}),(0,f.jsx)(m,{children:[`concise`,`normal`,`detailed`].map(t=>(0,f.jsx)(ue,{type:`button`,$active:E===t,$isDarkMode:e,onClick:()=>Re(t),children:C(t).label},t))})]}),(0,f.jsxs)(p,{children:[(0,f.jsx)(le,{children:`Стиль`}),(0,f.jsx)(m,{children:[`friendly`,`standard`,`scientific`].map(t=>(0,f.jsx)(ue,{type:`button`,$active:D===t,$isDarkMode:e,onClick:()=>ze(t),children:w(t).label},t))})]})]})]}),(0,f.jsxs)(fe,{ref:Y,children:[i.map((n,r)=>(0,f.jsxs)(pe,{$isBot:n.isBot,$isDarkMode:e,$isStickyBgMode:t,children:[n.isBot&&(0,f.jsx)(me,{onClick:()=>dt(n.text),children:`📋`}),(0,f.jsx)(l,{children:n.text})]},r)),P&&(0,f.jsx)(pe,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:t,children:(0,f.jsx)(l,{children:P})}),R&&(0,f.jsxs)(he,{children:[`⚠️ Помилка: `,R,(0,f.jsx)(h,{$primary:!0,onClick:()=>$(I.current),children:`Спробувати ще раз`})]}),(0,f.jsx)(`div`,{ref:Xe})]}),M&&(0,f.jsx)(Se,{children:M}),O.length>0&&(0,f.jsxs)(ye,{children:[(0,f.jsxs)(Ce,{children:[`Загальний розмір: `,(Be/1048576).toFixed(2),` MB / 100 MB`]}),O.map((t,n)=>(0,f.jsxs)(be,{$isDarkMode:e,children:[(0,f.jsx)(Pe,{onClick:()=>Ze(t),children:t.file.type.startsWith(`video/`)?(0,f.jsx)(`video`,{src:t.objectURL}):t.file.type.startsWith(`audio/`)?(0,f.jsx)(`span`,{style:{fontSize:`28px`},children:`🎵`}):(0,f.jsx)(`img`,{src:t.objectURL,alt:`preview`})}),(0,f.jsx)(xe,{onClick:()=>lt(n),children:`✕`})]},n))]}),(0,f.jsxs)(ge,{$isDarkMode:e,$isStickyBgMode:t,onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),ct(e.dataTransfer.files)},children:[(0,f.jsx)(_e,{ref:J,placeholder:`Запитайте щось... (Enter - відправити, Shift+Enter - новий рядок)`,value:n,onChange:rt,onKeyDown:pt,rows:1,$isDarkMode:e}),(0,f.jsxs)(ve,{children:[(0,f.jsxs)(`label`,{style:{cursor:`pointer`,display:`flex`,alignItems:`center`},children:[(0,f.jsx)(`span`,{title:`Додати фото, відео, аудіо`,style:{fontSize:`23px`},children:(0,f.jsx)(c,{})}),(0,f.jsx)(`input`,{type:`file`,accept:`image/*, video/*, audio/*`,multiple:!0,hidden:!0,onChange:e=>ct(e.target.files)})]}),(0,f.jsx)(h,{onClick:it,$isDarkMode:e,title:`Показати поточну сторінку Gemini (скріншот)`,disabled:A||B,children:B?`⏳`:`📸`}),(0,f.jsx)(de,{style:{fontSize:`18px`,marginTop:`2px`},onClick:ft,title:`Видалити всі повідомлення`,$isDarkMode:e,children:(0,f.jsx)(o,{})}),(0,f.jsx)(h,{$primary:!0,disabled:A||!n.trim()&&O.length===0,onClick:$,title:`Запитати`,children:A?`...`:`➤`})]})]}),H&&(0,f.jsxs)(we,{onClick:Qe,children:[(0,f.jsx)(Te,{onClick:Qe,children:`✕`}),(0,f.jsx)(Ee,{children:H.file.name}),(0,f.jsx)(`div`,{onClick:e=>e.stopPropagation(),style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:14},children:H.file.type.startsWith(`image/`)?(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,f.jsx)(De,{src:H.objectURL,alt:H.file.name}),(0,f.jsx)(h,{$isDarkMode:e,onClick:()=>ut(H),children:`Зробити фоном`})]}):H.file.type.startsWith(`video/`)?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Oe,{ref:X,src:H.objectURL,onTimeUpdate:$e,onLoadedMetadata:et,onPlay:()=>G(!0),onPause:()=>G(!1),onEnded:()=>G(!1)}),(0,f.jsxs)(g,{children:[(0,f.jsx)(v,{onClick:tt,children:(0,f.jsx)(y,{style:{width:`${Ue*100}%`}})}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,f.jsx)(_,{onClick:Q,children:W?`⏸`:`▶`}),(0,f.jsxs)(b,{children:[Z(qe),` /`,` `,Z(Ge)]})]}),(0,f.jsx)(x,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,f.jsxs)(S,{$active:K===e,onClick:()=>nt(e),children:[e,`x`]},e))})]})]}):H.file.type.startsWith(`audio/`)?(0,f.jsxs)(ke,{children:[(0,f.jsx)(Ae,{children:`🎵`}),(0,f.jsx)(je,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((e,t)=>(0,f.jsx)(Me,{$h:e,$playing:W,$dur:(.3+t*.07).toFixed(2)},t))}),(0,f.jsx)(Ne,{ref:X,src:H.objectURL,onTimeUpdate:$e,onLoadedMetadata:et,onPlay:()=>G(!0),onPause:()=>G(!1),onEnded:()=>G(!1)}),(0,f.jsxs)(g,{children:[(0,f.jsx)(v,{onClick:tt,children:(0,f.jsx)(y,{style:{width:`${Ue*100}%`}})}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,f.jsx)(_,{onClick:Q,children:W?`⏸`:`▶`}),(0,f.jsxs)(b,{children:[Z(qe),` /`,` `,Z(Ge)]})]}),(0,f.jsx)(x,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,f.jsxs)(S,{$active:K===e,onClick:()=>nt(e),children:[e,`x`]},e))})]})]}):null})]})]})};export{T as default,C as getResponseLengthInstruction,w as getResponseStyleInstruction};