import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,n as r,o as i,t as a}from"./jsx-runtime-CJi9uaNB.js";import{a as o,i as ee,t as te}from"./UserSearchModal-D1m6Bcbf.js";import{M as ne,g as s,v as re}from"./index-CbNTxoaW.js";import{t as ie}from"./KatSceneModal-BBzHJSzY.js";var c=e(i()),l=a(),u=r`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,d=r`
  0% {
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,f=r`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,p=r`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,ae=r`
  0%   { transform: translateY(0);   opacity: 1; }
  40%  { transform: translateY(-60px) scale(0.93); opacity: 0.6; }
  100% { transform: translateY(0);   opacity: 1; }
`,m=r`
  0%   { transform: translateY(0);   opacity: 1; }
  40%  { transform: translateY(60px) scale(0.93); opacity: 0.6; }
  100% { transform: translateY(0);   opacity: 1; }
`,h=r`
  0%   { transform: translateX(60px); opacity: 0; }
  100% { transform: translateX(0);    opacity: 1; }
`,g=r`
  0%   { transform: translateX(-60px); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
`;t.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: bold;
  background: linear-gradient(
    270deg,
    #ff7eb3,
    #ff758c,
    #7afcff,
    #feffb7,
    #58e2c2
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${p} 5s ease infinite;
  display: inline-block;
  margin-left: 5px;
`;var oe=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(3px);
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${e=>e.$isClosing?f:`none`} 0.5s ease-out
    forwards;
`,se=t.div`
  background: ${e=>e.$isDarkMode?`#2e1d30`:`#d3b0d3`};
  color: ${e=>e.$isDarkMode?`#ffffff`:`inherit`};
  border: 2px solid #a929ff;
  border-radius: 10px;
  width: 90%;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${e=>e.$isClosing?d:u} 0.5s ease-out
    forwards;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.$isDarkMode?`#5e3e61`:`#a981a9`};
    border-radius: 10px;
  }
`,ce=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  margin-top: -40px;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,le=t.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 4px;
    position: sticky;
    top: 0;
    z-index: 20;
    background: #8300c9;
    padding: 5px 8px;
    border-radius: 8px;
    margin-bottom: 6px;
    flex-wrap: wrap;
  }
`,_=t.button`
  padding: 4px 10px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$active?`#ffb36c`:`rgba(255,255,255,0.3)`};
  background: ${e=>e.$active?`#ffb36c`:`transparent`};
  color: ${e=>e.$active?`#000`:`#fff`};
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
`,ue=t.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid ${e=>e.$active?`#ffb36c`:`rgba(255,255,255,0.4)`};
  background: ${e=>e.$active?`#ffb36c`:`transparent`};
  color: ${e=>e.$active?`#000`:`#fff`};
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
`,de=t.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  animation: ${e=>e.$dir===`left`?h:g} 0.3s ease forwards;
`,fe=t.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
`,pe=t.button`
  position: absolute;
  top: -7px;
  right: 2px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: ${e=>e.$isDarkMode?`#ffffff`:`#000000`};
  &:hover {
    color: #00e1ff;
  }
`,v=t.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  background: ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.1)`:`rgba(129, 39, 255, 0.4)`};
  border-radius: 6px;
  border: 2px solid #a70080;
    ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.15)`:`rgba(255, 255, 255, 0.5)`};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  min-width: 0;
  color: ${e=>e.$isDarkMode?`#ffffff`:`inherit`};
`,me=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
`,y=t.input`
  padding: 6px;
  border: 2px solid #000000;
  border-radius: 5px;
  font-size: 13px;
  width: 100%;
  background: transparent;
  color: ${e=>e.$isDarkMode?`#ffffff`:`black`};
  box-sizing: border-box;
  &::placeholder {
    color: ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.6)`:`#000000`};
    font-style: italic;
    font-weight: 900;
    font-size: 13px;
    opacity: 1;
  }
`,he=t.div`
  position: sticky;
  bottom: 0;
  z-index: 10;
  background: #8300c9;
  padding: 1px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,ge=t(y)`
  caret-color: black;
  font-weight: bold;
  ${e=>{let t=e.$textColor||`inherit`,r=t.includes(`linear`),i=t.includes(`270deg`);return r?n`
        background: ${t};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        ${i&&n`
            background-size: 400% 400%;
            animation: ${p} 5s ease infinite;
          `}
      `:n`
        color: ${t};
        background: transparent;
        -webkit-background-clip: none;
        -webkit-text-fill-color: currentcolor;
      `}}
`,b=t.select`
  padding: 4px;
  border: 2px solid
    ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.3)`:`#000000`};
  background: transparent;
  color: ${e=>e.$isDarkMode?`#ffffff`:`black`};
  border-radius: 5px;
  flex: 1;
  font-weight: 900;
  font-size: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`,_e=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`,x=t.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?`#ffffff`:`black`};

`,ve=t.span`
  color: #ff7b00;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`,S=t.div`
  width: 50px;
  height: 60px;
  min-width: 60px;
  border-radius: 50%;
  padding: 3px;
  background: ${e=>e.$isSelected?e.$borderColor:`transparent`};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${e=>e.$isSelected&&e.$borderColor?.includes(`270deg`)&&n`
      background-size: 400% 400%;
      animation: ${p} 5s ease infinite;
    `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`,ye=t.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,C=t.div`
  display: flex;
  gap: 3px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,w=t.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${e=>e.$color};
  cursor: pointer;
  border: 2px solid ${e=>e.$isSelected?`#000`:`transparent`};
  box-shadow: ${e=>e.$isSelected?`0 0 5px rgba(0,0,0,0.5)`:`0 0 2px rgba(0,0,0,0.2)`};
  ${e=>e.$color.includes(`270deg`)&&n`
      background-size: 400% 400%;
      animation: ${p} 5s ease infinite;
    `}
`,be=t.button`
  background: #ffb36c;
  height: 30px;
  border: 5px solid ${e=>e.$isDarkMode?`transparent`:`black`};
  flex: 1;
  color: black;
 border-bottom-right-radius: 10px;
 border-top-right-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,xe=t.button`
  background: transparent;
  height: 30px;
   border-bottom-left-radius: 10px;
 border-top-left-radius: 10px;
  color: ${e=>e.$isDarkMode?`#ffffff`:`black`};
  flex: 1;
  font-weight: bold;
  border: 5px solid
    ${e=>e.$isDarkMode?`rgba(255,255,255,0.5)`:`black`};
  cursor: pointer;
`,Se=t.h3`
  font-weight: 900;
  margin-top: 0px;
  color: ${e=>e.$isDarkMode?`#ffffff`:`black`};
`,Ce=t.div`
  background: rgba(0, 0, 0, 0.1);
  height: 8px;
  border: 2px solid black;
  border-radius: 3px;
  width: 100%;
  overflow: hidden;
`,we=t.div`
  height: 100%;
  border-radius: 3px;
  background-color: ${e=>e.$color||`transparent`};
  width: ${e=>e.$width||`0%`};
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
`,Te=t.span`
  font-size: 11px;
  font-weight: bold;
  color: ${e=>e.$color};
  background: #0000009f;
  align-self: flex-end;
  margin-bottom: 2px;
  border-radius: 2px;
  
`,T=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid
    ${e=>e.disabled?e.$isDarkMode?`#0a0a0a`:`#0c0c0c`:e.$isDarkMode?`rgba(255, 255, 255, 0.3)`:`#000`};
  background: ${e=>e.disabled?`transparent`:e.$isDarkMode?`#3e2b42`:`#fff`};
  color: ${e=>e.disabled?e.$isDarkMode?`#4c4c4c`:`#5b5b5b`:e.$isDarkMode?`#fff`:`#000`};
  margin-left: 6px;
  cursor: ${e=>e.disabled?`not-allowed`:`pointer`};
  transition: all 0.2s;
  box-shadow: ${e=>e.disabled?`none`:e.$isDarkMode?`0 2px 0 rgba(255,255,255,0.2)`:`0 2px 0 #000`};

  &:hover:not(:disabled) {
    background: #ffb36c;
    color: #000;
    transform: translateY(-1px);
    box-shadow: 0 3px 0
      ${e=>e.$isDarkMode?`rgba(255,255,255,0.3)`:`#000`};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 0 0
      ${e=>e.$isDarkMode?`rgba(255,255,255,0.3)`:`#000`};
  }
`,E=t.div`
  animation: ${e=>e.$swapAnim===`up`?n`${ae} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`:e.$swapAnim===`down`?n`${m} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`:`none`};
`,Ee=t.label`
  font-size: 13px;
  font-weight: bold;
  color: ${e=>e.$isDarkMode?`#ffffff`:`black`};
`,De=t.button`
  padding: 2px;
  border-radius: 2px;
    position: absolute;
  top: 6px;
  right: 57px;
  border: 2px solid;
  ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.5)`:`#000`};
  background: transparent;
  color: ${e=>e.$isDarkMode?`#ffffff`:`black`};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 0
    ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.5)`:`#000`};

  &:hover {
    background: #ffe0b2;
    color: #000;
    transform: translateY(-1px);
    box-shadow: 0 3px 0
      ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.7)`:`#000`};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 0
      ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.7)`:`#000`};
  }
`,D=[{name:`Сірий`,value:`grey`},{name:`Фіолетовий`,value:`purple`},{name:`Червоний`,value:`red`},{name:`Веселковий`,value:`linear-gradient(45deg, red, orange, yellow, green, blue, purple)`},{name:`Анімований`,value:`linear-gradient(270deg, #ff7eb3, #ff758c, #7afcff, #feffb7, #58e2c2)`},{name:`Голубий`,value:`#00e1ff`},{name:`Синій`,value:`blue`}],O=[`name`,`birthDate`,`security`,`textColor`,`borderColor`,`avatar`,`voiceActing`,`dateDisplay`,`interfaceSettings`,`weatherLayout`,`newsLayout`],k={current:`Температура та іконка`,ai:`Підсумок ШІ`,hourly:`Годинний графік`,daily:`Прогноз на 16 днів`},Oe={title:`Заголовок`,description:`Опис`},A=({onClose:e,user:t,availableAvatars:n,onUpdate:r,weatherCardLayout:i,isDarkMode:a=!1,onUpdateLayout:u,showUpdateTimer:d,setShowUpdateTimer:f})=>{ee(),o(e=>e.calendar?.customDays||[]);let[p,ae]=(0,c.useState)({d:``,m:``,reason:``}),[m,h]=(0,c.useState)({}),[g,A]=(0,c.useState)(!1),[j,M]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let e=g?-1:1,t=j?-1:1;return e===1&&t===1?(document.documentElement.style.transform=``,document.documentElement.style.transformOrigin=``):(document.documentElement.style.transform=`scale(${e}, ${t})`,document.documentElement.style.transformOrigin=`center center`),()=>{}},[g,j]);let[N,P]=(0,c.useState)(t?.mobileViewMode||`scroll`),[F,I]=(0,c.useState)(0),[ke,Ae]=(0,c.useState)(`left`),[L,R]=(0,c.useState)({name:t?.firstName||``,day:``,month:``,year:``,oldPassword:``,newPassword:``,confirmPassword:``,avatarIndex:n.indexOf(t?.avatar)===-1?t?.avatar&&typeof t.avatar==`string`&&t.avatar.startsWith(`http`)&&n.indexOf(t.avatar)===-1?-1:0:n.indexOf(t?.avatar),textColor:t?.textColor||`grey`,borderColor:t?.borderColor||`grey`,fontFamily:t?.fontFamily||``,showSeconds:t?.showSeconds!==!1,dateDisplayMode:t?.dateDisplayMode||`both`,hour12:t?.hour12===!0,voiceActingMode:t?.voiceActingMode||`malyatko`,showUpdateTimer:d!==!1,newsAutoScroll:t?.newsAutoScroll||!1,syncMutedNews:t?.syncMutedNews||!1,gestureSensitivity:t?.gestureSensitivity??1.5,fastClicks:t?.fastClicks??!1,mobileViewMode:t?.mobileViewMode||`scroll`}),[z,B]=(0,c.useState)(!1),[V,je]=(0,c.useState)(!1),[H,U]=(0,c.useState)([...O]),[W,Me]=(0,c.useState)(t?.newsLayout||[{key:`image`,visible:!0},{key:`title`,visible:!0},{key:`description`,visible:!0}]),Ne=(0,c.useMemo)(()=>({...t}),[t]);(0,c.useEffect)(()=>{if(!t)return;let e=``,r=``,i=``;t.birthDate&&(t.birthDate.includes(`-`)?[e,r,i]=t.birthDate.split(`-`):t.birthDate.includes(`.`)&&([i,r,e]=t.birthDate.split(`.`)));let a=n.indexOf(t?.avatar)===-1?t?.avatar&&typeof t.avatar==`string`&&t.avatar.startsWith(`http`)?-1:0:n.indexOf(t?.avatar);R({name:t?.firstName||``,day:i?String(parseInt(i)):``,month:r?String(parseInt(r)):``,year:e?String(parseInt(e)):``,oldPassword:``,newPassword:``,confirmPassword:``,avatarIndex:a,textColor:t?.textColor||`grey`,borderColor:t?.borderColor||`grey`,fontFamily:t?.fontFamily||``,showSeconds:t?.showSeconds!==!1,dateDisplayMode:t?.dateDisplayMode||`both`,hour12:t?.hour12===!0,voiceActingMode:t?.voiceActingMode||`malyatko`,showUpdateTimer:d!==!1,newsAutoScroll:t?.newsAutoScroll||!1,syncMutedNews:t?.syncMutedNews||!1,gestureSensitivity:t?.gestureSensitivity??1.5,fastClicks:t?.fastClicks??!1})},[t,n,d]);let G=t=>{t&&t.stopPropagation&&t.stopPropagation(),je(!0),setTimeout(()=>e(),500)},K=e=>{e&&e.stopPropagation(),r(Ne),G()},Pe=Array.from({length:31},(e,t)=>t+1),Fe=[`Січень`,`Лютий`,`Березень`,`Квітень`,`Травень`,`Червень`,`Липень`,`Серпень`,`Вересень`,`Жовтень`,`Листопад`,`Грудень`],q=new Date().getFullYear(),Ie=Array.from({length:q-1909+1},(e,t)=>q-t),J=e=>{let i={...L,...e};R(i),e.hasOwnProperty(`showUpdateTimer`)&&f(e.showUpdateTimer),r({...t,firstName:i.name,avatar:i.avatarIndex===-1?t?.avatar:n[i.avatarIndex],birthDate:`${i.year}-${i.month.toString().padStart(2,`0`)}-${i.day.toString().padStart(2,`0`)}`,textColor:i.textColor,borderColor:i.borderColor,fontFamily:i.fontFamily,showSeconds:i.showSeconds,dateDisplayMode:i.dateDisplayMode,hour12:i.hour12,voiceActingMode:i.voiceActingMode,showUpdateTimer:i.showUpdateTimer,newsLayout:e.newsLayout||W,newsAutoScroll:e.newsAutoScroll??i.newsAutoScroll,syncMutedNews:e.syncMutedNews??i.syncMutedNews,gestureSensitivity:e.gestureSensitivity??i.gestureSensitivity,fastClicks:e.fastClicks??i.fastClicks})},Y=(0,c.useMemo)(()=>{if(!L.day||!L.month||!L.year)return!1;let e=new Date(L.year,L.month-1,L.day);return e.getFullYear()!==parseInt(L.year)||e.getMonth()!==parseInt(L.month)-1||e.getDate()!==parseInt(L.day)},[L.day,L.month,L.year]),Le=(0,c.useMemo)(()=>{let e=L.day?String(L.day).padStart(2,`0`):``,t=L.month?String(L.month).padStart(2,`0`):``,n=L.year?String(L.year):``;return!e||!t||!n||Y?``:`${e}.${t}.${n}`},[L.day,L.month,L.year,Y]),X=((e,t,n)=>{if(!e||!t||!n)return null;let r=new Date,i=new Date(n,t-1,e);if(isNaN(i.getTime()))return null;let a=r.getFullYear()-i.getFullYear(),o=r.getMonth()-i.getMonth();return(o<0||o===0&&r.getDate()<i.getDate())&&a--,a})(L.day,L.month,L.year),Z=(e=>{if(!e)return{width:`0%`,color:`transparent`,label:``};let t=0;return e.length>=6&&(t+=1),e.length>=8&&(t+=1),(/[A-Z]/.test(e)||/[a-z]/.test(e))&&(t+=1),/\d/.test(e)&&(t+=1),/[^A-Za-z0-9]/.test(e)&&(t+=1),t<=2?{width:`33%`,color:`#ff4d4d`,label:`Слабкий`}:t<=4?{width:`66%`,color:`#ffb36c`,label:`Середній`}:{width:`100%`,color:`#4caf50`,label:`Надійний`}})(L.newPassword),Re=()=>{if(Y){alert(`Введена некоректна дата!`);return}if(!L.day||!L.month||!L.year){alert(`Будь ласка, виберіть дату народження!`);return}if(L.newPassword){if(L.newPassword!==L.confirmPassword){alert(`Нові паролі не збігаються!`);return}if(L.newPassword.length<6){alert(`Пароль занадто короткий!`);return}}r({account:t?.account||L.name,firstName:L.name,avatar:L.avatarIndex===-1?t?.avatar:n[L.avatarIndex],birthDate:`${L.year}-${L.month.toString().padStart(2,`0`)}-${L.day.toString().padStart(2,`0`)}`,textColor:L.textColor,borderColor:L.borderColor,fontFamily:L.fontFamily,showSeconds:L.showSeconds,dateDisplayMode:L.dateDisplayMode,hour12:L.hour12,voiceActingMode:L.voiceActingMode,showUpdateTimer:L.showUpdateTimer,newsLayout:W,newsAutoScroll:L.newsAutoScroll,syncMutedNews:L.syncMutedNews,gestureSensitivity:L.gestureSensitivity,fastClicks:L.fastClicks,...L.newPassword?{oldPassword:L.oldPassword,newPassword:L.newPassword}:{}}),G()},ze=(e,t)=>{let n=e+t;U(t=>{let r=[...t];return n<0||n>=r.length||([r[e],r[n]]=[r[n],r[e]]),r});let r=H[e],i=H[n];r&&i&&(h(e=>({...e,[r]:t>0?`down`:`up`,[i]:t>0?`up`:`down`})),setTimeout(()=>{h(e=>{let t={...e};return delete t[r],delete t[i],t})},420))},Be=()=>{U([...O]),I(0)},Ve=(e,t)=>{let n=[...i],r=e+t;r<0||r>=n.length||([n[e],n[r]]=[n[r],n[e]],u(n))},He=e=>{let t=i.filter(e=>e.visible).length;if(i.find(t=>t.key===e).visible&&t<=1){alert(`Має бути видимим хоча б один елемент!`);return}u(i.map(t=>t.key===e?{...t,visible:!t.visible}:t))},Ue=e=>{if(e===`image`)return;let t=W.map(t=>t.key===e?{...t,visible:!t.visible}:t);Me(t),J({newsLayout:t})},[We,Ge]=(0,c.useState)(!1),Ke=()=>{Ge(!1),G()},qe=t?.avatar&&typeof t.avatar==`string`&&t.avatar.startsWith(`http`)&&n.indexOf(t.avatar)===-1,Je=!!(t?.email&&!t?.password),Ye=Math.ceil(H.length/3),Xe=e=>{Ae(e>F?`left`:`right`),I(e)},Q=(e,t,n)=>(0,l.jsxs)(me,{children:[(0,l.jsx)(Ee,{style:{fontSize:`13px`,fontWeight:`bold`},children:n}),(0,l.jsxs)(`div`,{style:{display:`flex`},children:[(0,l.jsx)(T,{disabled:t===0,onClick:()=>ze(t,-1),title:`Вище`,style:{width:`22px`,height:`22px`,fontSize:`19px`,fontWeight:900},children:`⬆`}),(0,l.jsx)(T,{disabled:t===H.length-1,onClick:()=>ze(t,1),title:`Нижче`,style:{width:`22px`,height:`22px`,fontSize:`19px`,fontWeight:900},children:`⬇`})]})]}),$=(e,r)=>e===`name`?(0,l.jsxs)(v,{children:[Q(e,r,`Ім'я`),(0,l.jsx)(ge,{$textColor:L.textColor,value:L.name,onChange:e=>R({...L,name:e.target.value})}),Q(e,r,`Колір рамки аватара`),(0,l.jsx)(C,{children:D.map((e,t)=>(0,l.jsx)(w,{$color:e.value,$isSelected:L.borderColor===e.value,title:e.name,onClick:()=>R({...L,borderColor:e.value})},t))}),(0,l.jsx)(y,{placeholder:`Власний колір (напр. rgba(255, 0, 0, 0.5) або #ff00ff)`,value:L.borderColor,onChange:e=>R({...L,borderColor:e.target.value}),style:{marginTop:`5px`}})]},`name`):e===`birthDate`?(0,l.jsxs)(v,{children:[Q(e,r,`Дата народження${X!==null&&!Y?`: ${Le} • Вік: ${X}`:``}`),(0,l.jsxs)(_e,{children:[(0,l.jsxs)(b,{value:L.day,onChange:e=>R({...L,day:e.target.value}),children:[(0,l.jsx)(`option`,{value:``,children:`День`}),Pe.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))]}),(0,l.jsxs)(b,{value:L.month,onChange:e=>R({...L,month:e.target.value}),children:[(0,l.jsx)(`option`,{value:``,children:`Місяць`}),Fe.map((e,t)=>(0,l.jsx)(`option`,{value:t+1,children:e},t))]}),(0,l.jsxs)(b,{value:L.year,onChange:e=>R({...L,year:e.target.value}),children:[(0,l.jsx)(`option`,{value:``,children:`Рік`}),Ie.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))]})]}),Y&&(0,l.jsx)(`span`,{style:{color:`red`,fontSize:`11px`},children:`Такої дати не існує!`})]},`birthDate`):e===`security`?(0,l.jsxs)(v,{children:[Q(e,r,`Безпека`),Je?(0,l.jsx)(`div`,{style:{fontSize:13,color:`#444`},children:`Google-акаунт — змінюйте пароль у налаштуваннях Google.`}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`button`,{type:`button`,onClick:async()=>{if(!s.currentUser)return alert(`Потрібно авторизуватись в системі!`);try{await ne(s.currentUser,re),alert(`Google акаунт успішно прив'язано!`)}catch(e){e.code===`auth/credential-already-in-use`?alert(`Цей Google акаунт вже прив'язаний до іншого профілю!`):e.code===`auth/cancelled-popup-request`||e.code===`auth/popup-closed-by-user`||alert(`Помилка прив'язки: `+e.message)}},style:{background:`#105fdf`,border:`2px solid black`,color:`white`,padding:`5px`,borderRadius:`5px`,fontWeight:`bold`,cursor:`pointer`,marginBottom:`3px`,fontSize:`14px`},children:`Прив'язати Google`}),(0,l.jsx)(y,{type:`password`,placeholder:`Поточний пароль`,disabled:!0,readOnly:!0,value:`********`,style:{marginBottom:`2px`,opacity:.6,cursor:`not-allowed`}}),(0,l.jsx)(y,{name:`settings-new-password`,type:`password`,placeholder:`Новий пароль`,onChange:e=>R({...L,newPassword:e.target.value}),style:{marginBottom:`4px`},autoComplete:`new-password`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"data-form-type":`other`,"data-lpignore":`true`}),L.newPassword&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ce,{children:(0,l.jsx)(we,{$width:Z.width,$color:Z.color})}),(0,l.jsxs)(Te,{$color:Z.color,children:[`Надійність: `,Z.label]})]}),(0,l.jsx)(y,{name:`settings-confirm-password`,type:`password`,placeholder:`Підтвердіть новий пароль`,onChange:e=>R({...L,confirmPassword:e.target.value}),autoComplete:`new-password`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"data-form-type":`other`,"data-lpignore":`true`})]})]},`security`):e===`textColor`?(0,l.jsxs)(v,{children:[Q(e,r,`Колір тексту`),(0,l.jsx)(C,{children:D.map((e,t)=>(0,l.jsx)(w,{$color:e.value,$isSelected:L.textColor===e.value,title:e.name,onClick:()=>R({...L,textColor:e.value})},t))}),(0,l.jsx)(y,{placeholder:`Власний колір (напр. rgba(255, 0, 0, 0.5) або #ff00ff)`,value:L.textColor,onChange:e=>R({...L,textColor:e.target.value}),style:{marginTop:`5px`}})]},`textColor`):e===`borderColor`?null:e===`avatar`?(0,l.jsxs)(v,{children:[Q(e,r,`Оберіть аватар`),(0,l.jsxs)(ye,{children:[n.map((e,t)=>(0,l.jsx)(S,{$isSelected:L.avatarIndex===t,$borderColor:L.borderColor,onClick:()=>R({...L,avatarIndex:t}),children:(0,l.jsx)(`img`,{src:e,alt:`avatar`})},t)),qe&&(0,l.jsx)(S,{$isSelected:L.avatarIndex===-1,$borderColor:L.borderColor,title:`Google аватарка`,onClick:()=>R({...L,avatarIndex:-1}),children:(0,l.jsx)(`img`,{src:t.avatar,alt:`google-avatar`})},`external`)]})]},`avatar`):e===`voiceActing`?null:e===`dateDisplay`?(0,l.jsxs)(v,{children:[Q(e,r,`Налаштування годинника`),(0,l.jsxs)(x,{children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:L.showSeconds,onChange:e=>J({showSeconds:e.target.checked})}),(0,l.jsx)(`label`,{style:{fontWeight:`900`,fontSize:`11px`},children:`Показувати секунди (17:23:17)`})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1px`},children:[(0,l.jsx)(`label`,{style:{fontSize:`12px`,fontWeight:`bold`,color:`#000`},children:`Формат часу`}),(0,l.jsxs)(b,{value:L.hour12?`12`:`24`,onChange:e=>J({hour12:e.target.value===`12`}),children:[(0,l.jsx)(`option`,{value:`24`,children:`24-годинний формат`}),(0,l.jsx)(`option`,{value:`12`,children:`12-годинний формат (AM/PM)`})]}),(0,l.jsxs)(b,{value:L.dateDisplayMode,onChange:e=>J({dateDisplayMode:e.target.value}),children:[(0,l.jsx)(`option`,{value:`both`,children:`Час та Дата (разом)`}),(0,l.jsx)(`option`,{value:`time`,children:`Тільки Час`}),(0,l.jsx)(`option`,{value:`date`,children:`Тільки Дата`})]})]})]},`dateDisplay`):e===`interfaceSettings`?(0,l.jsxs)(v,{children:[Q(e,r,`Налаштування інтерфейсу`),(0,l.jsxs)(x,{children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:L.showUpdateTimer,onChange:e=>J({showUpdateTimer:e.target.checked})}),(0,l.jsx)(`label`,{style:{fontSize:`11px`,fontWeight:900},children:`Показувати таймер оновлення погоди`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{style:{fontSize:`13px`,fontWeight:`bold`,color:`#000`},children:`Власний шрифт (Google Fonts)`}),(0,l.jsx)(y,{placeholder:`Назва шрифту (напр. Roboto, Open Sans)`,value:L.fontFamily,onChange:e=>J({fontFamily:e.target.value})})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(`label`,{style:{fontSize:`13px`,color:`#000`,fontWeight:`bold`},children:`Чутливість жестів (свайпи, слайдери)`}),(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,l.jsx)(`input`,{type:`range`,min:`0.5`,max:`3`,step:`0.1`,value:L.gestureSensitivity,onChange:e=>J({gestureSensitivity:parseFloat(e.target.value)}),style:{flex:1}}),(0,l.jsxs)(`span`,{style:{fontSize:`14px`,minWidth:`30px`,color:`#000`,fontWeight:`bold`},children:[L.gestureSensitivity,`x`]})]})]}),(0,l.jsxs)(x,{children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:L.fastClicks,onChange:e=>J({fastClicks:e.target.checked})}),(0,l.jsx)(`label`,{style:{fontWeight:900,fontSize:`11px`},children:`Швидкий відгук на кліки (без затримки)`})]}),(0,l.jsxs)(`div`,{style:{borderTop:`1px solid rgba(255,255,255,0.2)`,paddingTop:`6px`,marginTop:`4px`},children:[(0,l.jsx)(`label`,{style:{fontSize:`12px`,fontWeight:`bold`,color:`#000`,display:`block`,marginBottom:`4px`},children:`🪞 Дзеркальність сайту (скидається при перезавантаженні)`}),(0,l.jsxs)(x,{children:[(0,l.jsx)(`input`,{type:`checkbox`,id:`mirrorX`,checked:g,onChange:e=>A(e.target.checked)}),(0,l.jsx)(`label`,{htmlFor:`mirrorX`,style:{fontWeight:900,fontSize:`11px`},children:`↔️ По горизонталі (ліво↔право)`})]}),(0,l.jsxs)(x,{children:[(0,l.jsx)(`input`,{type:`checkbox`,id:`mirrorY`,checked:j,onChange:e=>M(e.target.checked)}),(0,l.jsx)(`label`,{htmlFor:`mirrorY`,style:{fontWeight:900,fontSize:`11px`},children:`↕️ По вертикалі (верх↕низ)`})]}),(g||j)&&(0,l.jsx)(`button`,{onClick:()=>{A(!1),M(!1)},style:{marginTop:`4px`,padding:`4px 10px`,background:`#ff4d4d`,color:`#fff`,border:`none`,borderRadius:`5px`,fontWeight:`bold`,fontSize:`11px`,cursor:`pointer`},children:`✖ Прибрати дзеркало`})]})]},`interfaceSettings`):e===`weatherLayout`?(0,l.jsxs)(v,{children:[Q(e,r,`Налаштування картки погоди`),(0,l.jsx)(`p`,{style:{fontSize:`11px`,fontWeight:900,color:`#000`},children:`Виберіть, які блоки відображати та в якому порядку.`}),i.filter(e=>k[e.key]).map((e,t)=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:`rgba(244, 240, 244, 0.09)`,padding:`1px`,borderRadius:`8px`,marginBottom:`4px`},children:[(0,l.jsxs)(x,{style:{flex:1},children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:e.visible,onChange:()=>He(e.key)}),(0,l.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:500},children:k[e.key]})]}),(0,l.jsxs)(`div`,{style:{display:`flex`},children:[(0,l.jsx)(T,{style:{width:`22px`,height:`22px`,fontWeight:900,fontSize:`19px`},disabled:t===0,onClick:()=>Ve(t,-1),children:`⬆`}),(0,l.jsx)(T,{style:{width:`22px`,fontWeight:900,height:`22px`,fontSize:`19px`},disabled:t===i.length-1,onClick:()=>Ve(t,1),children:`⬇`})]})]},e.key))]},`weatherLayout`):e===`newsLayout`?(0,l.jsxs)(v,{children:[Q(e,r,`Налаштування новин`),(0,l.jsx)(`p`,{style:{fontSize:`11px`,color:`#050505`,fontWeight:900},children:`Виберіть, які елементи новин відображати.`}),(0,l.jsxs)(x,{style:{marginBottom:`6px`},children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:L.syncMutedNews,onChange:e=>J({syncMutedNews:e.target.checked})}),(0,l.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:500},children:`Синхронізувати заглушені новини між пристроями`})]}),W.filter(e=>e.key!==`image`).map(e=>(0,l.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,background:`rgba(255, 255, 255, 0.12)`,padding:`3px`,borderRadius:`5px`,marginBottom:`4px`},children:(0,l.jsxs)(x,{style:{flex:1},children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:e.visible,onChange:()=>Ue(e.key)}),(0,l.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:500},children:Oe[e.key]})]})},e.key))]},`newsLayout`):null;return(0,l.jsxs)(l.Fragment,{children:[We&&(0,l.jsx)(ie,{onClose:Ke}),(0,l.jsx)(oe,{$isClosing:V,onClick:()=>G(),children:(0,l.jsxs)(se,{$isClosing:V,onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)(`div`,{style:{top:`-4px`,zIndex:10,display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`10px`,background:`violet`,position:`sticky`,flexWrap:`wrap`,gap:`10px`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(Se,{children:`Налаштування`}),(0,l.jsx)(`div`,{style:{fontSize:12,color:`#000000`,fontWeight:`900`},children:t?.email||t?.account})]}),(0,l.jsx)(De,{style:{fontSize:`9px`},onClick:Be,children:`Скинути порядок`}),(0,l.jsx)(`button`,{style:{color:`#000`,border:`none`,marginBottom:`15px`,marginRight:`28px`,fontWeight:600,fontSize:20,cursor:`pointer`},onClick:()=>Ge(!0),children:`📹︎`}),(0,l.jsx)(pe,{onClick:K,children:`×`})]}),(0,l.jsxs)(le,{children:[(0,l.jsx)(_,{$active:N===`scroll`,onClick:()=>{P(`scroll`),I(0)},children:`📜 Скрол`}),(0,l.jsx)(_,{$active:N===`carousel`,onClick:()=>{P(`carousel`),I(0)},children:`🎠 Карусель`}),N===`carousel`&&Array.from({length:Ye}).map((e,t)=>(0,l.jsx)(ue,{$active:F===t,onClick:()=>Xe(t),children:t+1},t))]}),(0,l.jsx)(ce,{children:H.map((e,t)=>{let n=$(e,t);return n?(0,l.jsx)(E,{$swapAnim:m[e]||null,children:n},e):null})}),(0,l.jsx)(fe,{children:N===`scroll`?H.map((e,t)=>{let n=$(e,t);return n?(0,l.jsx)(E,{$swapAnim:m[e]||null,children:n},`m-${e}`):null}):(0,l.jsx)(de,{$dir:ke,children:H.slice(F*3,(F+1)*3).map((e,t)=>{let n=F*3+t,r=$(e,n);return r?(0,l.jsx)(E,{$swapAnim:m[e]||null,children:r},`c-${e}`):null})},F)}),(0,l.jsxs)(he,{$isDarkMode:a,children:[(0,l.jsxs)(x,{children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:!0,readOnly:!0,style:{accentColor:`#ffb36c`}}),(0,l.jsxs)(`span`,{style:{fontWeight:`900`},children:[`Ви погодились з`,` `,(0,l.jsx)(ve,{onClick:()=>B(!0),children:`Угодою`})]})]}),(0,l.jsxs)(`div`,{style:{display:`flex`},children:[(0,l.jsx)(xe,{onClick:K,children:`Скасувати`}),(0,l.jsx)(be,{onClick:Re,disabled:Y,children:`Зберегти`})]})]})]})}),z&&(0,l.jsx)(te,{isOpen:z,onClose:()=>B(!1)})]})};export{A as default};