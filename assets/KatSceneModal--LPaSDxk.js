import{o as E}from"./rolldown-runtime-BNNRdYrd.js";import{In as n,Nn as b,Tn as S,Zn as k}from"./vendor-react-DaUcAjuS.js";import{E as T,m as j}from"./index-COMhzmak.js";var r=E(k()),_="/assets/silent-CYwH4UpB.mp3",a=S(),l=[{duration:5500,text:"Я не хочу багато користувачів, але я хочу людей, які з радістю використовуватимуть мій сайт для різних цілей."},{duration:3500,text:"Надати вам чудову погоду — наш обов'язок."},{duration:4500,text:"Політика — це фактор, який ми не підтримуємо і який ви не побачите..."},{duration:4e3,text:"Різноманітна та захоплива музика, яку можна додавати та шукати."},{duration:3500,text:"Пишіть, підказуйте, що зробити для вас :)"},{duration:7e3,text:"Ми зробимо красиву оселю з вашим принтером, картинами з Pixabay, нашими сюжетними історіями та моментами з ігор і фільмів."},{duration:4e3,text:"Налаштуйте сайт під себе. Можливостей для персоналізації дуже багато!"},{duration:5500,text:"Колись я не думав, що це може дійти до такого масштабу, проте фантазія робить дива :)"},{duration:8500,text:"Велика подяка: API-сайтам, інструментам Firebase, npm-плагінам, які допомогли при створенні Стихії. Малятко ТВ, Mondo TV, Пікселю за гарні роки дитинства. І найголовніше — сім'ї та близьким."},{duration:4500,text:"Окрема подяка: всім, хто дивиться ці титри та загалом користується сайтом."}],h=[{title:"Динофроз",author:"Mondo TV"},{title:"No No No, Monody, Unity, Hunger",author:"TheFatRat"},{title:"Dragonora, Asium, Factorium",author:"SayGames - MyLittleUniverse (Estoty)"},{title:"Electrodynamix, Clubstep, Theory of Everything, Theory of Everything II",author:"DJ-Nate"},{title:"Fingerbang (Fingerdash), Deadlocked",author:"Geometry Dash"},{title:"Болотна крамниця, Звуки індиків і ще кілька",author:"Авторська робота"}],x=j.filter(i=>i.src&&!i.src.endsWith(".mp4")),M=b`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`,v=b`
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`,C=n.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,$=n.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
`,z=n.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заповнює весь екран без бічних смуг та зсувів */
  animation: ${M} 0.8s ease-in-out forwards;
`,A=n.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  font-size: 12px;
  padding: 8px 14px;
  border: 1px solid rgba(148, 255, 250, 0.5);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.75);
  color: #94fffa;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(148, 255, 250, 0.2);
  }
`,D=n.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  z-index: 5;
  width: min(90%, 900px);
  padding: 12px 18px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  animation: ${v} 0.6s ease-out forwards;
`,m=n.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(148, 255, 250, 0.3);
  padding: 10px 22px;
  border-radius: 20px;
  color: #94fffa;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-align: center;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  animation: ${v} 0.5s ease-out forwards;

  span {
    color: #fff;
    font-weight: bold;
  }
`,F=n.audio`
  display: none;
`,N=({onClose:i})=>{const p=(0,r.useRef)(null),[e,f]=(0,r.useState)("text"),[s,y]=(0,r.useState)(0),[g,w]=(0,r.useState)(0),[u,I]=(0,r.useState)(0);(0,r.useEffect)(()=>{const t=p.current;return t&&(t.volume=.5,t.play().catch(()=>{})),()=>{t&&(t.pause(),t.currentTime=0)}},[]),(0,r.useEffect)(()=>{if(e!=="text")return;const t=setTimeout(()=>{s<l.length-1?y(o=>o+1):f("music")},l[s].duration);return()=>clearTimeout(t)},[s,e]),(0,r.useEffect)(()=>{if(e!=="music")return;const t=setInterval(()=>{w(o=>o<h.length-1?o+1:(f("gallery"),o))},3e3);return()=>clearInterval(t)},[e]),(0,r.useEffect)(()=>{if(e!=="gallery"||x.length===0)return;const t=setInterval(()=>{I(o=>(o+1)%x.length)},4e3);return()=>clearInterval(t)},[e]),(0,r.useEffect)(()=>{const t=o=>{o.key==="Escape"&&i()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[i]);const d=x[u],c=h[g];return(0,a.jsx)(C,{children:(0,a.jsxs)($,{children:[(0,a.jsx)(z,{src:e==="gallery"?d?.src:T,alt:"Stuxia Showcase"},e==="gallery"?`gallery-${u}`:"hero-bg"),(0,a.jsx)(A,{type:"button",onClick:i,children:"Пропустити"}),e==="text"&&l[s]?.text&&(0,a.jsx)(D,{children:l[s].text},`caption-${s}`),e==="music"&&c&&(0,a.jsxs)(m,{children:["Музичний саундтрек: ",(0,a.jsx)("span",{children:c.title})," — ",c.author]},`music-${g}`),e==="gallery"&&d&&(0,a.jsxs)(m,{children:["Зображення на сайті: ",(0,a.jsx)("span",{children:d.name})," ",d.author?`— ${d.author}`:""]},`gallery-${u}`),(0,a.jsx)(F,{ref:p,src:_,loop:!0})]})})};export{N as t};

//# sourceMappingURL=KatSceneModal--LPaSDxk.js.map