import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,n,o as r,t as i}from"./jsx-runtime-CJi9uaNB.js";import{L as a,Y as o}from"./index-CbNTxoaW.js";var s=e(r()),c=`/assets/silent-CYwH4UpB.mp3`,l=i(),u=[{duration:5500,text:`Я не хочу багато користувачів, але я хочу людей, які з радістю використовуватимуть мій сайт для різних цілей.`},{duration:3500,text:`Надати вам чудову погоду — наш обов'язок.`},{duration:4500,text:`Політика — це фактор, який ми не підтримуємо і який ви не побачите...`},{duration:4e3,text:`Різноманітна та захоплива музика, яку можна додавати та шукати.`},{duration:3500,text:`Пишіть, підказуйте, що зробити для вас :)`},{duration:7e3,text:`Ми зробимо красиву оселю з вашим принтером, картинами з Pixabay, нашими сюжетними історіями та моментами з ігор і фільмів.`},{duration:4e3,text:`Налаштуйте сайт під себе. Можливостей для персоналізації дуже багато!`},{duration:5500,text:`Колись я не думав, що це може дійти до такого масштабу, проте фантазія робить дива :)`},{duration:8500,text:`Велика подяка: API-сайтам, інструментам Firebase, npm-плагінам, які допомогли при створенні Стихії. Малятко ТВ, Mondo TV, Пікселю за гарні роки дитинства. І найголовніше — сім'ї та близьким.`},{duration:4500,text:`Окрема подяка: всім, хто дивиться ці титри та загалом користується сайтом.`}],d=[{title:`Динофроз`,author:`Mondo TV`},{title:`No No No, Monody, Unity, Hunger`,author:`TheFatRat`},{title:`Dragonora, Asium, Factorium`,author:`SayGames - MyLittleUniverse (Estoty)`},{title:`Electrodynamix, Clubstep, Theory of Everything, Theory of Everything II`,author:`DJ-Nate`},{title:`Fingerbang (Fingerdash), Deadlocked`,author:`Geometry Dash`},{title:`Болотна крамниця, Звуки індиків`,author:`Авторська робота`},{title:`Faded`,author:`Alan Walker`},{title:`Вовчиця`,author:`Олег Вінник`}],f=a.filter(e=>e.src&&!e.src.endsWith(`.mp4`)),p=n`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`,m=n`
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`,h=t.div`
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
`,g=t.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
`,_=t.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заповнює весь екран без бічних смуг та зсувів */
  animation: ${p} 0.8s ease-in-out forwards;
`,v=t.button`
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
`,y=t.div`
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
  animation: ${m} 0.6s ease-out forwards;
`,b=t.div`
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
  animation: ${m} 0.5s ease-out forwards;

  span {
    color: #fff;
    font-weight: bold;
  }
`,x=t.audio`
  display: none;
`,S=({onClose:e})=>{let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(`text`),[i,a]=(0,s.useState)(0),[p,m]=(0,s.useState)(0),[S,C]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=t.current;return e&&(e.volume=.5,e.play().catch(()=>{})),()=>{e&&(e.pause(),e.currentTime=0)}},[]),(0,s.useEffect)(()=>{if(n!==`text`)return;let e=setTimeout(()=>{i<u.length-1?a(e=>e+1):r(`music`)},u[i].duration);return()=>clearTimeout(e)},[i,n]),(0,s.useEffect)(()=>{if(n!==`music`)return;let e=setInterval(()=>{m(e=>e<d.length-1?e+1:(r(`gallery`),e))},3e3);return()=>clearInterval(e)},[n]),(0,s.useEffect)(()=>{if(n!==`gallery`||f.length===0)return;let e=setInterval(()=>{C(e=>(e+1)%f.length)},4e3);return()=>clearInterval(e)},[n]),(0,s.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let w=f[S],T=d[p];return(0,l.jsx)(h,{children:(0,l.jsxs)(g,{children:[(0,l.jsx)(_,{src:n===`gallery`?w?.src:o,alt:`Stuxia Showcase`},n===`gallery`?`gallery-${S}`:`hero-bg`),(0,l.jsx)(v,{type:`button`,onClick:e,children:`Пропустити`}),n===`text`&&u[i]?.text&&(0,l.jsx)(y,{children:u[i].text},`caption-${i}`),n===`music`&&T&&(0,l.jsxs)(b,{children:[`Музичний саундтрек: `,(0,l.jsx)(`span`,{children:T.title}),` — `,T.author]},`music-${p}`),n===`gallery`&&w&&(0,l.jsxs)(b,{children:[`Зображення на сайті: `,(0,l.jsx)(`span`,{children:w.name}),` `,w.author?`— ${w.author}`:``]},`gallery-${S}`),(0,l.jsx)(x,{ref:t,src:c,loop:!0})]})})};export{S as t};