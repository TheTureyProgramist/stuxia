import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,n,o as r,t as i}from"./jsx-runtime-CJi9uaNB.js";import{t as a}from"./localforage-CgxtEHGc.js";import{F as o,g as s,v as c}from"./index-CbNTxoaW.js";var l=e(r()),u=e(a()),d=i(),f=n`
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,p=n`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,m=n`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,h=t.div`
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
  animation: ${e=>e.$isClosing?m:`none`} 0.5s ease-out
    forwards;
`,g=t.form`
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
  animation: ${e=>e.$isClosing?p:f} 0.45s
    cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
`,_=t.input`
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,v=t.button`
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
`,y=t.button`
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
`,b=t.button`
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
`,x=t.h3`
  font-weight: 900;
  color: black;
`,S=({onClose:e,onLogin:t})=>{let[n,r]=(0,l.useState)(``),[i,a]=(0,l.useState)(``),[f,p]=(0,l.useState)(``),[m,S]=(0,l.useState)(!1),C=t=>{t&&t.stopPropagation(),S(!0),setTimeout(()=>{e()},500)};return(0,d.jsx)(h,{$isClosing:m,onClick:C,children:(0,d.jsxs)(g,{$isClosing:m,onClick:e=>e.stopPropagation(),onSubmit:async e=>{e.preventDefault();let r=await u.default.getItem(`active_user`),a=await u.default.getItem(`registered_user`),o=r||a;o&&o.account===n&&o.password===i?(t(o),C()):p(`Невірний Gmail або пароль!`)},autoComplete:`off`,children:[(0,d.jsx)(b,{onClick:C,children:`×`}),(0,d.jsx)(x,{style:{textAlign:`center`},children:`Вхід`}),(0,d.jsx)(`div`,{style:{textAlign:`center`,fontSize:13,color:`#444`,marginTop:-6},children:`Використайте Gmail або натисніть «Увійти з Google»`}),(0,d.jsx)(_,{name:`local-email-input`,type:`email`,placeholder:`Ваш Gmail (наприклад: you@gmail.com)`,value:n,onChange:e=>r(e.target.value),autoComplete:`off`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"data-form-type":`other`,"data-lpignore":`true`,required:!0}),(0,d.jsx)(_,{name:`local-password-input`,type:`password`,placeholder:`Пароль (локальний акаунт)`,value:i,onChange:e=>a(e.target.value),autoComplete:`off`,"data-form-type":`other`,"data-lpignore":`true`,required:!0}),f&&(0,d.jsx)(`div`,{style:{color:`#9b2c2c`,fontSize:`13px`,textAlign:`center`,background:`rgba(255,77,77,0.06)`,padding:`8px`,borderRadius:8},children:f}),(0,d.jsx)(v,{type:`submit`,children:`🔒 Увійти`}),(0,d.jsx)(`div`,{style:{textAlign:`center`,margin:`6px 0`,fontSize:`13px`,color:`#666`},children:`АБО`}),(0,d.jsx)(y,{type:`button`,onClick:async e=>{e.preventDefault(),e.stopPropagation();try{let e=(await o(s,c)).user,n={uid:e.uid,id:e.uid,account:e.email||``,firstName:e.displayName||e.email||`Користувач`,avatar:e.photoURL||``,email:e.email||``};await u.default.setItem(`active_user`,n),t(n),C()}catch(e){console.error(`Google Login Error:`,e),p(`Помилка Google: `+(e.message||e.toString()))}},children:`🔑 Увійти з Google`})]})})};export{S as default};