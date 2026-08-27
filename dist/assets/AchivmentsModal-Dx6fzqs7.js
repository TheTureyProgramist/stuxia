import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,n as r,o as i,t as a}from"./jsx-runtime-CJi9uaNB.js";import{t as o}from"./localforage-CgxtEHGc.js";import{H as s}from"./index-CbNTxoaW.js";var c=e(i()),l=e(o()),u=a(),d=r`
  from { opacity: 0; }
  to { opacity: 1; }
`,f=r`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,p=r`
  from { opacity: 1; }
  to { opacity: 0; }
`,m=r`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,h=r`
  0% {
    opacity: 0;
    transform: scale(1.3); 
    filter: blur(10px);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1); 
    filter: blur(0);
  }
`,g=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(3px);
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${e=>e.isClosing?p:d} 0.3s ease-out
    forwards;
`,_=t.div`
  background: #093500;
  color: #2eb813;
  padding: 5px;
  width: 95%;
  max-width: 750px;
  max-height: 95vh;
  border: 2px solid #2eb813;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${e=>e.isClosing?n`
          ${m} 0.3s ease-in forwards
        `:n`
          ${f} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
        `};
`,v=t.div`
  overflow-y: auto;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #051a00;
  }
  &::-webkit-scrollbar-thumb {
    background: #2eb813;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  scrollbar-width: thin;
  scrollbar-color: #2eb813 #051a00;
`,y=t.div`
  display: ${e=>e.$isActive?`flex`:`none`};
  flex-direction: column;
  gap: 12px;
  animation: ${d} 0.5s ease-in-out;
`,b=t.div`
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #a2ff6c;
  border-bottom: 1px solid rgba(162, 255, 108, 0.3);
  padding-bottom: 8px;
  margin-bottom: 3px;
  font-weight: 900;
  opacity: 0;
  animation: ${h} 0.6s ease-out forwards;
  ${({$delay:e})=>n`
    animation-delay: ${e||`0.2s`};
  `}
`,x=t.div`
  display: flex;
  align-items: center;
  background: rgba(162, 255, 108, 0.05);
  gap: 5px;
  border: 1px solid #a2ff6c;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  animation: ${h} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:e})=>n`
    animation-delay: ${.3+e*.05}s;
  `}
  cursor: ${e=>e.$isTurkey?`pointer`:`default`};

  &:hover {
    background: rgba(162, 255, 108, 0.15);
    transform: translateX(5px) scale(1.01);
    box-shadow: 0 0 15px rgba(46, 184, 19, 0.2);
  }
`,S=t.img`
  width: 70px;
  height: 50px;
  object-fit: cover;
  border: 1px solid #2eb813;
  background: #051a00;
`,C=t.h3`
  margin: 0;
  font-size: 15px;
  color: #ffb36c;
`,w=t.p`
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.8;
  color: #a2ff6c;
`,T=t.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #2eb813;
  z-index: 10;
  transition: all 0.3s;
  &:hover {
    color: #a2ff6c;
    transform: rotate(90deg) scale(1.2);
  }
`,E=t.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 22px;
  letter-spacing: 2px;
  color: #a2ff6c;
`,D=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
`,O=t.button`
  background: ${e=>e.$active?`#a2ff6c`:`rgba(162, 255, 108, 0.1)`};
  color: ${e=>e.$active?`#093500`:`#a2ff6c`};
  border: 1px solid #a2ff6c;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  transition: all 0.3s;
  &:hover {
    background: #a2ff6c;
    color: #093500;
  }
`,k=({onClose:e})=>{let[t,n]=(0,c.useState)(!1),[r,i]=(0,c.useState)(0),[a,o]=(0,c.useState)(`idle`);(0,c.useEffect)(()=>{(async()=>{let e=await l.default.getItem(`turkeyStudioStatus`);e&&o(e)})()},[]);let d=()=>{n(!0),setTimeout(()=>e(),300)},f=c.useMemo(()=>[{title:`🎮 Секрети`,items:[{name:`Натяки прийняті`,goal:`Ціль: Відкрийти 3 розділи колекції.`,img:s}]},{title:`👥 Соціальні та Активність`,items:[{name:`Дюна`,goal:`Ціль: Використовуйте кліматичну карту.`,img:s}]},{title:`🛠 Технічні та Налаштування`,items:[{name:`Ви зараз виконуєте це afk :(  ?`,goal:`Ціль: Читайте угоду користувача(навчання) більше 2хв!`,img:s}]},{title:`🎵 Медіа та Контент`,items:[{name:`Дубль 2`,goal:`Ціль: Прослухайте двічі мелодію, через автоповтор.`,img:s}]},{title:`🕵️ Секретні та Особливі`,items:[{name:`Віч-на-віч`,goal:`Ціль: Ви його, зустрінете рано чи пізно.`,img:s}]}].map(e=>{if(e.title.includes(`Соціальні`)){let t=[...e.items],n=t.findIndex(e=>e.name===`TheTurkeyStudio`);if(n!==-1){let e=t.splice(n,1)[0];a===`completed`?t.push(e):t.unshift(e)}return{...e,items:t}}return e}),[a]),p=async()=>{window.open(`https://www.facebook.com/groups/33984901414490236/?notif_id=1770630384341499&notif_t=group_milestone&ref=notif`,`_blank`),await l.default.setItem(`turkeyStudioStatus`,`completed`),o(`completed`)};return(0,u.jsx)(g,{isClosing:t,onClick:d,children:(0,u.jsxs)(_,{isClosing:t,onClick:e=>e.stopPropagation(),children:[(0,u.jsx)(T,{onClick:d,children:`×`}),(0,u.jsx)(E,{children:`Досягнення`}),(0,u.jsx)(D,{children:f.map((e,t)=>(0,u.jsx)(O,{$active:r===t,onClick:()=>i(t),children:e.title.split(` `)[0]},t))}),(0,u.jsx)(v,{children:f.map((e,t)=>(0,u.jsxs)(y,{$isActive:r===t,children:[(0,u.jsx)(b,{$delay:`${.2+t*.4}s`,children:e.title}),e.items.map((e,n)=>(0,u.jsxs)(x,{$index:t*10+n,$isTurkey:e.name===`TheTurkeyStudio`,onClick:e.name===`TheTurkeyStudio`?p:void 0,children:[(0,u.jsx)(S,{src:e.img,alt:e.name}),(0,u.jsxs)(`div`,{style:{flexGrow:1},children:[(0,u.jsx)(C,{children:e.name}),(0,u.jsx)(w,{children:e.goal})]})]},n))]},t))})]})})};export{k as default};