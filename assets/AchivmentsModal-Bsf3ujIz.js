import{o as h}from"./rolldown-runtime-BNNRdYrd.js";import{Fn as d,In as o,Mn as j,Nn as c,Tn as S,Zn as C}from"./vendor-react-DaUcAjuS.js";import{y as s}from"./index-COMhzmak.js";var l=h(C()),b=h(j()),a=S(),v=c`
  from { opacity: 0; }
  to { opacity: 1; }
`,T=c`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,_=c`
  from { opacity: 1; }
  to { opacity: 0; }
`,z=c`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,y=c`
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
`,I=o.div`
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
  animation: ${t=>t.isClosing?_:v} 0.3s ease-out
    forwards;
`,A=o.div`
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
  animation: ${t=>t.isClosing?d`
          ${z} 0.3s ease-in forwards
        `:d`
          ${T} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
        `};
`,M=o.div`
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
`,N=o.div`
  display: ${t=>t.$isActive?"flex":"none"};
  flex-direction: column;
  gap: 12px;
  animation: ${v} 0.5s ease-in-out;
`,Y=o.div`
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #a2ff6c;
  border-bottom: 1px solid rgba(162, 255, 108, 0.3);
  padding-bottom: 8px;
  margin-bottom: 3px;
  font-weight: 900;
  opacity: 0;
  animation: ${y} 0.6s ease-out forwards;
  ${({$delay:t})=>d`
    animation-delay: ${t||"0.2s"};
  `}
`,q=o.div`
  display: flex;
  align-items: center;
  background: rgba(162, 255, 108, 0.05);
  gap: 5px;
  border: 1px solid #a2ff6c;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  animation: ${y} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:t})=>d`
    animation-delay: ${.3+t*.05}s;
  `}
  cursor: ${t=>t.$isTurkey?"pointer":"default"};

  &:hover {
    background: rgba(162, 255, 108, 0.15);
    transform: translateX(5px) scale(1.01);
    box-shadow: 0 0 15px rgba(46, 184, 19, 0.2);
  }
`,E=o.img`
  width: 70px;
  height: 50px;
  object-fit: cover;
  border: 1px solid #2eb813;
  background: #051a00;
`,O=o.h3`
  margin: 0;
  font-size: 15px;
  color: #ffb36c;
`,B=o.p`
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.8;
  color: #a2ff6c;
`,G=o.button`
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
`,P=o.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 22px;
  letter-spacing: 2px;
  color: #a2ff6c;
`,F=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
`,X=o.button`
  background: ${t=>t.$active?"#a2ff6c":"rgba(162, 255, 108, 0.1)"};
  color: ${t=>t.$active?"#093500":"#a2ff6c"};
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
`,J=({onClose:t})=>{const[p,k]=(0,l.useState)(!1),[f,w]=(0,l.useState)(0),[m,u]=(0,l.useState)("idle");(0,l.useEffect)(()=>{(async()=>{const e=await b.default.getItem("turkeyStudioStatus");e&&u(e)})()},[]);const x=()=>{k(!0),setTimeout(()=>t(),300)},g=l.useMemo(()=>[{title:"🎮 Секрети",items:[{name:"Натяки прийняті",goal:"Ціль: Відкрийти 3 розділи колекції.",img:s}]},{title:"👥 Соціальні та Активність",items:[{name:"Дюна",goal:"Ціль: Використовуйте кліматичну карту.",img:s}]},{title:"🛠 Технічні та Налаштування",items:[{name:"Ви зараз виконуєте це afk :(  ?",goal:"Ціль: Читайте угоду користувача(навчання) більше 2хв!",img:s}]},{title:"🎵 Медіа та Контент",items:[{name:"Дубль 2",goal:"Ціль: Прослухайте двічі мелодію, через автоповтор.",img:s}]},{title:"🕵️ Секретні та Особливі",items:[{name:"Віч-на-віч",goal:"Ціль: Ви його, зустрінете рано чи пізно.",img:s}]}].map(r=>{if(r.title.includes("Соціальні")){let e=[...r.items];const i=e.findIndex(n=>n.name==="TheTurkeyStudio");if(i!==-1){const n=e.splice(i,1)[0];m==="completed"?e.push(n):e.unshift(n)}return{...r,items:e}}return r}),[m]),$=async()=>{window.open("https://www.facebook.com/groups/33984901414490236/?notif_id=1770630384341499&notif_t=group_milestone&ref=notif","_blank"),await b.default.setItem("turkeyStudioStatus","completed"),u("completed")};return(0,a.jsx)(I,{isClosing:p,onClick:x,children:(0,a.jsxs)(A,{isClosing:p,onClick:r=>r.stopPropagation(),children:[(0,a.jsx)(G,{onClick:x,children:"×"}),(0,a.jsx)(P,{children:"Досягнення"}),(0,a.jsx)(F,{children:g.map((r,e)=>(0,a.jsx)(X,{$active:f===e,onClick:()=>w(e),children:r.title.split(" ")[0]},e))}),(0,a.jsx)(M,{children:g.map((r,e)=>(0,a.jsxs)(N,{$isActive:f===e,children:[(0,a.jsx)(Y,{$delay:`${.2+e*.4}s`,children:r.title}),r.items.map((i,n)=>(0,a.jsxs)(q,{$index:e*10+n,$isTurkey:i.name==="TheTurkeyStudio",onClick:i.name==="TheTurkeyStudio"?$:void 0,children:[(0,a.jsx)(E,{src:i.img,alt:i.name}),(0,a.jsxs)("div",{style:{flexGrow:1},children:[(0,a.jsx)(O,{children:i.name}),(0,a.jsx)(B,{children:i.goal})]})]},n))]},e))})]})})};export{J as default};

//# sourceMappingURL=AchivmentsModal-Bsf3ujIz.js.map