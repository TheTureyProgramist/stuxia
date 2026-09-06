import{o as d}from"./rolldown-runtime-BNNRdYrd.js";import{In as t,Nn as a,Tn as c,Zn as p}from"./vendor-react-DaUcAjuS.js";import{g as x,w as f,y as g}from"./index-COMhzmak.js";var b=d(p()),n="/assets/dog-CQtbme_R.webp",u="/assets/shop-C1MYYDqY.webp",o=c(),h=a`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,m=a`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;a`
  0% { box-shadow: 0 0 0 0 rgba(255, 108, 108, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 108, 108, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 108, 108, 0); }
`;var v=a`
  from { opacity: 0; }
  to { opacity: 1; }
`,w=t.div`
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
`,k=t.div`
  background-color: #3a1a1a;
  color: #fff;
  width: 95%;
  max-width: 1200px;
  max-height: 95vh;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${r=>r.$isClosing?m:h} 0.5s ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`,y=t.button`
  position: absolute;
  top: -10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #ff6c6c;
  font-size: 36px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`,C=t.h2`
  color: #fdfdfd;
  letter-spacing: 2px;
  font-size: 25px;
  text-align: center;
`,j=t.div`
  display: flex;
  flex-direction: column;
`,_=t.div`
  position: relative;
  border-top: 1px solid #ff6c6c;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 10px;
  min-height: 90px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;
  overflow: hidden;
  background-image: url(${r=>r.$bgImage});
  background-size: cover;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover {
    box-shadow: -5px 8px 15px rgba(0, 0, 0, 0.4);
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.5); 
  }
  > * {
    position: relative;
    z-index: 2;
  }
`,z=t.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  gap: 6px;
`,T=t.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.3;
  color: #eaeaea;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`,Y=t.div`
  max-width: 350px;
`,$=t.a`
  padding: 5px 12px;
  background: #9000ff;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);

  &:hover {
    background: #930090;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`,I=t.div`
  color: #f8f1c6;
  font-size: 12px;
  font-style: italic;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 10px;
  border-radius: 6px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`,U=t.div`
  animation: ${v} 0.4s ease-out;
`,q=({onClose:r})=>{const[s,l]=(0,b.useState)(!1),i=()=>{l(!0),setTimeout(r,500)};return(0,o.jsx)(w,{onClick:i,children:(0,o.jsxs)(k,{$isClosing:s,onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(y,{onClick:i,children:"×"}),(0,o.jsx)(C,{children:"Замок Доміно"}),(0,o.jsx)(U,{children:(0,o.jsx)(j,{children:[{id:"domino",count:"",img:u,isCharacter:!0},{id:"uanimals",count:"Допомога тваринам",img:n,buttonText:"Підтримати UAnimals",linkUrl:"https://uanimals.org/"},{id:"ecoaction",count:"Захист природи",img:f,buttonText:"Підтримати Екодію",linkUrl:"https://ecoaction.org.ua/"},{id:"ifaw",count:"Міжнародний порятунок тварин",img:g,buttonText:"Підтримати IFAW",linkUrl:"https://www.ifaw.org/"},{id:"greenpeace",count:"Захист планети",img:x,buttonText:"Підтримати Greenpeace",linkUrl:"https://www.greenpeace.org/international/"},{id:"happypaw",count:"Притулки для тварин",img:n,buttonText:"Підтримати Happy Paw",linkUrl:"https://happypaw.ua/"}].map(e=>(0,o.jsx)(_,{$isSpecial:e.special,$bgImage:e.img,children:(0,o.jsxs)(z,{children:[e.count&&(0,o.jsx)(T,{children:e.count}),(0,o.jsx)(Y,{children:e.isCharacter?(0,o.jsx)(I,{children:"Мене звати Доміно, я люблю давне кіно. Підтримай фонди будь ласка!"}):(0,o.jsx)($,{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer",children:e.buttonText})})]})},e.id))})})]})})};export{q as default};

//# sourceMappingURL=ShopModal-Bthlp7W_.js.map