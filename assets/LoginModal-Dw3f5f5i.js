import{o as h}from"./rolldown-runtime-BNNRdYrd.js";import{In as r,Mn as k,Nn as d,Tn as _,Zn as S,at as z}from"./vendor-react-DaUcAjuS.js";import{f as G,u as I}from"./index-COMhzmak.js";var l=h(S()),p=h(k()),o=_(),P=d`
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,U=d`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,Y=d`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,$=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 1000;
  animation: ${a=>a.$isClosing?Y:"none"} 0.5s ease-out
    forwards;
`,q=r.form`
  background: linear-gradient(135deg, #ffffff, #f7fffe);
  padding: 26px;
  border-radius: 14px;
  width: 92%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  animation: ${a=>a.$isClosing?U:P} 0.45s
    cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
`,b=r.input`
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,E=r.button`
  background: #ffb36c;
  color: #000;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 6px 12px rgba(255, 179, 108, 0.18);
  width: 100%;
  &:hover {
    transform: translateY(-1px);
  }
`,M=r.button`
  background: #4285f4;
  color: white;
  font-weight: 700;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  box-shadow: 0 6px 12px rgba(66, 133, 244, 0.18);
  &:hover {
    transform: translateY(-1px);
  }
`,A=r.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: #000000;
  &:hover {
    color: #ff7b00;
  }
`,L=r.h3`
  font-weight: 900;
  color: black;
`,O=({onClose:a,onLogin:c})=>{const[u,v]=(0,l.useState)(""),[g,y]=(0,l.useState)(""),[f,x]=(0,l.useState)(""),[m,w]=(0,l.useState)(!1),i=e=>{e&&e.stopPropagation(),w(!0),setTimeout(()=>{a()},500)},C=async e=>{e.preventDefault();const t=await p.default.getItem("active_user"),n=await p.default.getItem("registered_user"),s=t||n;s&&s.account===u&&s.password===g?(c(s),i()):x("Невірний Gmail або пароль!")},j=async e=>{e.preventDefault(),e.stopPropagation();try{const t=(await z(I,G)).user,n={uid:t.uid,id:t.uid,account:t.email||"",firstName:t.displayName||t.email||"Користувач",avatar:t.photoURL||"",email:t.email||""};await p.default.setItem("active_user",n),c(n),i()}catch(t){console.error("Google Login Error:",t),x("Помилка Google: "+(t.message||t.toString()))}};return(0,o.jsx)($,{$isClosing:m,onClick:i,children:(0,o.jsxs)(q,{$isClosing:m,onClick:e=>e.stopPropagation(),onSubmit:C,autoComplete:"off",children:[(0,o.jsx)(A,{onClick:i,children:"×"}),(0,o.jsx)(L,{style:{textAlign:"center"},children:"Вхід"}),(0,o.jsx)("div",{style:{textAlign:"center",fontSize:13,color:"#444",marginTop:-6},children:"Використайте Gmail або натисніть «Увійти з Google»"}),(0,o.jsx)(b,{name:"local-email-input",type:"email",placeholder:"Ваш Gmail (наприклад: you@gmail.com)",value:u,onChange:e=>v(e.target.value),autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true",required:!0}),(0,o.jsx)(b,{name:"local-password-input",type:"password",placeholder:"Пароль (локальний акаунт)",value:g,onChange:e=>y(e.target.value),autoComplete:"off","data-form-type":"other","data-lpignore":"true",required:!0}),f&&(0,o.jsx)("div",{style:{color:"#9b2c2c",fontSize:"13px",textAlign:"center",background:"rgba(255,77,77,0.06)",padding:"8px",borderRadius:8},children:f}),(0,o.jsx)(E,{type:"submit",children:"🔒 Увійти"}),(0,o.jsx)("div",{style:{textAlign:"center",margin:"6px 0",fontSize:"13px",color:"#666"},children:"АБО"}),(0,o.jsx)(M,{type:"button",onClick:j,children:"🔑 Увійти з Google"})]})})};export{O as default};

//# sourceMappingURL=LoginModal-Dw3f5f5i.js.map