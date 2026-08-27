import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,n as r,o as i,t as a}from"./jsx-runtime-CJi9uaNB.js";import{t as o}from"./UserSearchModal-D1m6Bcbf.js";import{t as s}from"./mechannic-rMQciRlD.js";import{t as c}from"./ultra-vip-turkeys-DymvCPeH.js";import{H as l}from"./index-CbNTxoaW.js";import u from"./VipModal-DnKkGMmx.js";var d=e(i()),f=`/assets/shop-C1MYYDqY.webp`,p=a(),m=r`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,h=r`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,g=r`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,_=r`
  0% { box-shadow: 0 0 0 0 rgba(255, 108, 108, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 108, 108, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 108, 108, 0); }
`,v=r`
  from { opacity: 0; }
  to { opacity: 1; }
`,y=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 2000;
  padding: 10px;
`,b=t.div`
  background-color: #3a1a1a;
  color: #fff;
  width: 90%;
  max-width: 850px;
  max-height: 95vh;
  padding: 9px;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${e=>e.$isClosing?h:m} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }

  @media (min-width: 1900px) {
    max-width: 1300px;
    padding: 20px;
  }
`,x=t.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  color: #ff6c6c;
  font-size: 36px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1) rotate(90deg);
    color: #fff;
  }
  @media (max-width: 768px) {
    top: 10px;
    font-size: 19px;
    right: 10px;
  }
  @media (min-width: 1900px) {
    font-size: 45px;
    top: 20px;
    right: 25px;
  }
`,S=t.button`
  position: absolute;
  top: 10px;
  left: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 20;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  .icon {
    font-size: 32px;
    line-height: 1;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  .text {
    font-size: 10px;
    color: #ff6c6c;
    margin-top: 4px;
    font-weight: bold;
    text-align: center;
    max-width: 90px;
    line-height: 1.2;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 1900px) {
    top: 20px;
    left: 25px;
    .icon {
      font-size: 45px;
    }
    .text {
      font-size: 14px;
      max-width: 140px;
    }
  }
`,C=t.h2`
  color: #ff6c6c;
  letter-spacing: 2px;
  margin-bottom: 25px;
  margin-left: 60%;
  font-size: 13px;
  @media (min-width: 720px) {
    font-size: 24px;
    text-align: center;
    margin-left: 0px;
  }
  @media (min-width: 1900px) {
    font-size: 36px;
    margin-bottom: 40px;
    letter-spacing: 5px;
  }
`,w=t.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: linear-gradient(135deg, #ffb36c 0%, #ff6c6c 100%);
  color: #3a1a1a;
  padding: 3px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 900;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 1900px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`,T=t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1900px) {
    gap: 30px;
    margin-bottom: 40px;
  }
`,E=t.div`
  position: relative;
  background: #2a121215;
  border: 1px solid #ff6c6c;
  border-radius: 15px;
  padding: ${e=>e.$isCharacter?`10px 10px 90px`:`10px`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  min-height: 160px;
  animation: ${e=>e.$isSpecial?_:`none`} 2s infinite;
  transition: 0.3s;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${e=>e.$bgImage});
    background-size: cover;
    background-position: center;
    opacity: ${e=>e.$isCharacter?1:.25};
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  ${e=>e.$isSub&&n`
      &::before {
        opacity: ${e=>e.$activeImg===`turkeys`?.4:0};
        background-image: url(${`/assets/collectors-edition-KJsxYufX.webp`});
        transition: opacity 1.5s ease-in-out;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${`data:image/webp;base64,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`});
        background-size: cover;
        background-position: center;
        opacity: ${e=>e.$activeImg===`ultra`?.4:0};
        z-index: -1;
        transition: opacity 1.5s ease-in-out;
      }
    `}
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    &::before,
    &::after {
      opacity: ${e=>e.$isSub?.6:.4};
    }
  }

  @media (min-width: 1900px) {
    padding: 25px;
    gap: 20px;
    min-height: 350px;
  }
`,ee=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);
`,te=t.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ne=t.div`
  font-size: 15px;
  color: #ff6c6c;
  font-weight: 900;
  @media (min-width: 1900px) {
    font-size: 20px;
  }
`,D=t.div`
  font-weight: bold;
  font-size: 18px;
  @media (min-width: 1900px) {
    font-size: 24px;
  }
`,O=t.button`
  width: 100%;
  padding: 2px;
  background: #ff6c6c;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;
  z-index: 2;

  .old-price {
    text-decoration: line-through;
    font-size: 11px;
    opacity: 0.8;
  }

  span {
    font-size: 14px;
  }

  &:hover {
    background: #ff8585;
  }

  &:active {
    transform: scale(0.95);
  }
`,k=t.div`
  margin-top: 5px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 1px dashed #ff6c6c;
`,A=t.h3`
  color: #ff6c6c;
  font-size: 18px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(255, 108, 108, 0.2);
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`,j=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,M=t.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,N=t.li`
  font-size: 13px;
  margin-bottom: 5px;
  color: #e0e0e0;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 10px;
  line-height: 1.5;

  .price {
    color: #ff6c6c;
    font-weight: bold;
    background: rgba(255, 108, 108, 0.1);
    padding: 4px 10px;
    border-radius: 6px;
    white-space: nowrap;
    align-self: flex-start;
  }
`,P=t.span`
  font-weight: bold;
  font-size: inherit;
  background: linear-gradient(
    to right,
    #ff7eb3,
    #ff758c,
    #7afcff,
    #feffb7,
    #58e2c2,
    #ff7eb3
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${g} 3s linear infinite;
`,F=t.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 3px;
  background: rgba(0, 0, 0, 0.45);
  color: #f8f1c6;
  font-size: 10px;
  line-height: 1.4;
  text-align: center;
  backdrop-filter: blur(6px);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 3;
`,I=t.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  z-index: 0;
`,L=t.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 3000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  animation: ${v} 0.3s ease-out;
`,R=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,z=t.div`
  background: #2a1212;
  border: 1px solid #ff6c6c;
  border-radius: 12px;
  position: relative;
  aspect-ratio: 1;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  font-size: 11px;
  font-weight: bold;
  background-image: url(${e=>e.$img});
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`,B=t.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #ff6c6c;
  color: white;
  font-size: 8px;
  padding: 2px 5px;
  border-radius: 4px;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,V=[`Мене звати Доміно, я люблю ностальгічне кіно(Титанік, Матриця - чудові фільми, але є один який лише я бачив... ЙІ чому його ніде немає? Ех не пам'ятаю назву)`,`Жодних новин про політику. Це традиція! (Його рід, як і ворони, мав гарну пам'ять і прихід Колумба, зробив індиків популярними на весь світ, але вони не хочуть бути стравою для людей :( Тому він не любить тему політики.`,`О привіт, погода ж чудова? Але ж поганої не буває? Вірно?(І що його змотивувало, на погоду?)`,`Пірати Карибського моря. Б-р-р, ми воду не любимо. Але за ідею на якусь відсилку у сайті, дякую.`,`Чому ми маємо кнопку друку. Касети ж стали щойно можними, а друковані книги, це вже історія. Але ж ми любимо історію, тому і кнопка тут.`,`Ми любимо музику, але не любимо коли її слухають без нас. Тому ми зробили кнопку музики, щоб ви могли слухати її разом з нами.`,`Чому ми не дали ШІ на нашому сайті ім'я Домініц(Добрий - як Доміно, а Ніц... - Ніцерон? Ні навряд чи це цікаво)`,`Чому всі хочуть фільми жахів? Ех, по ходу через сюжет, але ж у нас і так є Марта.`,`Кейт: Де ж мій новий артефакт з фільму Інтерстеллар? Доміно: Слухай у нас кліент(До вас): сходиш у підвал. Якщо світло заблимає, і картини почорніють сховайся, це жарт. (За спиною Кейт: Доміно, я хочу кліента який вийде живим з замку, а не залишиться там як картина)`],H=[`Знову ти? Я вже почав сумувати за тобою... (Цікаво ви вийшли і зайлши, просто, щоб побачити цю фразу)`,`Кейт швидко бігає, але вона моя по долі... Але ти не бігай, бо я тебе знайду(Чи може хтось інший... Загадковим голосом)`,`Тихо, ти був в підвалі? Бо там одна картина жива, і хоче зробити з чорних квадратів, портрет когось, хто туди ходить!(Цю картину звати Марта)`,`Туди-сюди, ти точно не був в підвалі замку? (Пробачте, скрімера ми не покажемо :)`],U=`Доміно: Люблю коли ти підтримуєш мене, але не забудь про інші фонди, бо вони теж важливі! (Ну дійсно, сайт погоди, повинен мати лінки які підтримають екологію)`,W=e=>e[Math.floor(Math.random()*e.length)],G=(e,t)=>Array.from({length:t},()=>W(e)),K=t.div`
  animation: ${v} 0.4s ease-out;
`,q=({onClose:e})=>{let[t,n]=(0,d.useState)(!1),[r,i]=(0,d.useState)(`turkeys`),[a,m]=(0,d.useState)(!1),[h,g]=(0,d.useState)(!1),[_,v]=(0,d.useState)([]),[q,J]=(0,d.useState)(!1),[Y,X]=(0,d.useState)(!1),[re,Z]=(0,d.useState)(!1),[ie,Q]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=setInterval(()=>{i(e=>e===`turkeys`?`ultra`:`turkeys`)},6e3);return()=>clearInterval(e)},[]),(0,d.useEffect)(()=>{let e=(window.__shopModalOpenCount||0)+1;window.__shopModalOpenCount=e,v(e>=3?G(H,1):[W(V)]);let t=setTimeout(()=>J(!0),2e4);return()=>clearTimeout(t)},[]);let ae=Array.from({length:25},(e,t)=>({id:t,title:`Сезонна нагорода ${t+1}`,label:[`моя робота`,`жахи`,`різновид`][t%3],img:f})),$=()=>{n(!0),setTimeout(e,500)},oe=[{name:`Доміно`,count:`Власник магазину`,img:f,isCharacter:!0},{name:`Спонсорський`,img:s,count:`Ви поліпшите Стихію! Та дасте знати, що я роблю це не надарма! Дякую! Без:`,buttonText:`Будь-яка ціна`,badge:`Підтримайте мене`},{name:`Підписка`,count:`Стихія+ та Стихія Ultra`,img:null,special:!0,buttonText:`Розблокувати`,badge:`Преміум`,isSub:!0},{name:`Сезонний: Сонцестояння`,count:500,img:s,buttonText:`24.99грн`,badge:`Раз/сезон`},{name:`Бундючий`,count:1e3,img:c,buttonText:`14.99грн`,badge:`∞ в лімітах`},{name:`Ніцероновий`,count:2e3,img:l,special:!0,oldPrice:`30.00грн`,buttonText:`19.99грн`,badge:`-30%! Найвигідніший, Раз/3доби`}];return a?(0,p.jsx)(u,{onClose:()=>m(!1)}):(0,p.jsxs)(y,{onClick:$,children:[(0,p.jsxs)(b,{$isClosing:t,onClick:e=>e.stopPropagation(),children:[(0,p.jsx)(x,{onClick:$,children:`×`}),(0,p.jsxs)(S,{onClick:()=>g(!h),children:[(0,p.jsx)(`span`,{className:`icon`,children:h?`🎫`:`🧧`}),(0,p.jsx)(`span`,{className:`text`,children:h?`Повернутись до наборів`:`Джерела отримання та витрат`})]}),(0,p.jsx)(C,{children:`Магазин Доміно`}),h?(0,p.jsx)(K,{children:(0,p.jsx)(k,{children:(0,p.jsxs)(j,{children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(A,{children:`🎫 Як витратити:`}),(0,p.jsxs)(M,{children:[(0,p.jsxs)(N,{children:[(0,p.jsx)(`span`,{children:`Створення, видалення погодної картки(окремо за кожний процес). Зміни в налаштуваннях. 1 безкоштовна/тиждень. Доступ до JPS/доба.`}),(0,p.jsx)(`span`,{className:`price`,children:`2 🧧`})]}),(0,p.jsxs)(N,{children:[(0,p.jsxs)(`span`,{children:[`3 Спец-аватари, кольори імені та автару (випадково в ціні). Поліпшіть з `,(0,p.jsx)(P,{children:`Підписками`}),`.`]}),(0,p.jsx)(`span`,{className:`price`,children:`20-40 🧧`})]}),(0,p.jsxs)(N,{children:[(0,p.jsxs)(`span`,{children:[`Запит до ШІ (спроби за 🧧, далі 🧧 + гроші). Прискорення перезарядки кнопок(регулюється к-сть) 1 🧧 = -10с. Поліпшіть з `,(0,p.jsx)(P,{children:`Підписками`}),`.`]}),(0,p.jsx)(`span`,{className:`price`,children:`8 🧧`})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(A,{children:`🎁 Як отримати:`}),(0,p.jsxs)(M,{children:[(0,p.jsxs)(N,{children:[(0,p.jsxs)(`span`,{children:[`Щоденний безкоштовнй бонус за вхід(10), проходження головоломки(залежить від важкості, і типу головоломки). Поліпшіть `,(0,p.jsx)(P,{children:`Підписками`}),`.`]}),(0,p.jsx)(`span`,{className:`price`,children:`1-10 🧧`})]}),(0,p.jsxs)(N,{children:[(0,p.jsxs)(`span`,{children:[`🏆 Поліпшіть з`,(0,p.jsx)(P,{children:`Підписками`}),`.`]}),(0,p.jsx)(`span`,{className:`price`,children:`20-40 🧧`})]}),(0,p.jsxs)(N,{children:[(0,p.jsxs)(`span`,{children:[`Стартовий набір, усі зібрані аватари(колекція їх обводок), стилі імені. Поліпшіть з`,` `,(0,p.jsx)(P,{children:`Підписками`}),`. Джекпот з шансом 20%(можливий на початку доби). Покращіть`,` `,(0,p.jsx)(P,{children:`Підписками`}),`.`]}),(0,p.jsx)(`span`,{className:`price`,children:`+40 🧧`})]})]})]})]})})},`info`):(0,p.jsx)(K,{children:(0,p.jsx)(T,{children:oe.map(e=>(0,p.jsxs)(E,{$isSpecial:e.special,$bgImage:e.img,$isSub:e.isSub,$isCharacter:e.isCharacter,$activeImg:r,onClick:()=>{e.isCharacter&&Z(!0),e.name.includes(`Сезонний`)&&Q(!0)},style:{cursor:e.isCharacter||e.name.includes(`Сезонний`)?`pointer`:`default`},children:[e.isCharacter&&re&&(0,p.jsx)(I,{src:`/assets/shop-CjzVirJw.mp4`,autoPlay:!0,onEnded:()=>Z(!1),onClick:e=>{e.stopPropagation(),Z(!1)}}),e.badge&&(0,p.jsx)(w,{children:e.badge}),(0,p.jsx)(ee,{children:(0,p.jsxs)(te,{children:[(0,p.jsx)(ne,{children:e.name}),(0,p.jsx)(D,{children:e.isSub?e.count:`${e.count} 🧧`})]})}),e.isCharacter&&(_.length>0||q)&&(0,p.jsxs)(F,{children:[_.map((e,t)=>(0,p.jsx)(`span`,{children:e},t)),q&&(0,p.jsx)(`span`,{style:{color:`#ff6c6c`,fontWeight:`bold`,marginTop:`4px`},children:U})]}),(0,p.jsxs)(O,{onClick:()=>e.isSub&&m(!0),children:[e.oldPrice&&(0,p.jsx)(`span`,{className:`old-price`,children:e.oldPrice}),(0,p.jsx)(`span`,{children:e.buttonText})]})]},e.name))})},`packs`),(0,p.jsx)(`div`,{style:{textAlign:`center`,marginTop:`20px`,fontSize:`12px`,color:`#ff5e5e`,fontStyle:`italic`,lineHeight:`1.6`,opacity:.9,cursor:`pointer`},onClick:()=>X(!0),children:`Усі примітки, розміщені в навчанні, кнопка ? вгорі, як і питання про внутрішньоігрові валюти. Натисніть тут!`})]}),Y&&(0,p.jsx)(o,{isOpen:Y,onClose:()=>X(!1)}),ie&&(0,p.jsxs)(L,{children:[(0,p.jsx)(x,{onClick:()=>Q(!1),children:`×`}),(0,p.jsx)(C,{style:{marginTop:`40px`},children:`Сезон Сонцестояння: Колекція`}),(0,p.jsx)(R,{children:ae.map(e=>(0,p.jsxs)(z,{$img:e.img,children:[(0,p.jsx)(B,{children:e.label}),(0,p.jsx)(`span`,{style:{textShadow:`0 2px 4px black`},children:e.title})]},e.id))}),(0,p.jsx)(`div`,{style:{textAlign:`center`,marginTop:`30px`},children:(0,p.jsx)(O,{style:{maxWidth:`200px`,margin:`0 auto`},onClick:()=>Q(!1),children:(0,p.jsx)(`span`,{children:`Закрити колекцію`})})})]})]})};export{q as default};