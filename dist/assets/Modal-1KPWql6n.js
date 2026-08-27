import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,n as r,o as i,t as a}from"./jsx-runtime-CJi9uaNB.js";import{t as o}from"./UserSearchModal-D1m6Bcbf.js";import{t as s}from"./localforage-CgxtEHGc.js";import{F as c,g as l,v as u}from"./index-CbNTxoaW.js";import{t as d}from"./KatSceneModal-BBzHJSzY.js";var f=e(i()),p=e(s()),m=a(),h=r`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,g=r`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,_=r`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,v=r`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,y=n`
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
  animation: ${v} 5s ease infinite;
`;t.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: bold;
  ${y}
  margin-left: 5px;
  display: inline-block;
`;var b=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 1000;
  animation: ${e=>e.$isClosing?_:`none`} 0.5s ease-out
    forwards;
`,x=t.div`
  background: ${e=>e.$isDarkMode?`#2c2c2c`:`white`};
  color: ${e=>e.$isDarkMode?`#f0f0f0`:`#000000`};
  padding: 3px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${e=>e.$isDarkMode?`#555`:`#ddd`};
  animation: ${e=>e.$isClosing?g:h} 0.5s ease-out
    forwards;
  @media (min-width: 768px) {
    max-width: 700px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`,S=t.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 250px;
  @media (min-width: 768px) {
    flex: 1;
  }
`,C=t.button`
  position: absolute;
  top: -4px;
  right: 5px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: #000000;
  &:hover {
    color: #ffb36c;
  }
`,w=t.h3`
  text-align: center;
  margin: 0;
  font-weight: 900;
  color: ${e=>e.$isDarkMode?`#fff`:`#000000`};
  width: 100%;
`,T=t.input`
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?`#fff`:`#000`}; /* Fix transparent text */
  background: ${e=>e.$isDarkMode?`#333`:`#fff`};
  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`,E=t(T)`
  font-weight: bold;
  caret-color: black;

  ${e=>{let t=e.$color?.includes(`linear-gradient`),r=e.$color?.includes(`270deg`);return t?n`
        background: ${e.$color};
        color: #fff;
        ${r?n`
                background-size: 400% 400%;
                animation: ${v} 5s ease infinite;
              `:n`
                background-size: 100% 100%;
                animation: none;
              `}
      `:n`
        color: ${e.$color||`black`};
        background: transparent;
      `}}
`,D=t.select`
  padding: 3px;
  border: 1px solid #000;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  background: white;
  color: ${e=>e.$isDarkMode?`#fff`:`#000`};
  background: ${e=>e.$isDarkMode?`#333`:`#fff`};
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`,O=t.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
`,k=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.$isDarkMode?`#ccc`:`#555`};
`,A=t.span`
  color: ${e=>(e.$isDarkMode,`#ffb36c`)};
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`,ee=t.div`
  width: 34px;
  height: 34px;
  min-width: 60px;
  min-height: 60px;
  flex-shrink: 0;
  border-radius: 50%;
  padding: 3px;
  background: ${e=>e.$isSelected?e.$borderColor:`transparent`};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ${e=>{let t=e.$borderColor?.includes(`270deg`);if(e.$isSelected&&e.$borderColor?.includes(`linear-gradient`))return t?n`
            background-size: 400% 400%;
            animation: ${v} 5s ease infinite;
          `:n`
            background-size: 100% 100%;
            animation: none;
          `}}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }
`,j=t.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  padding: 5px 2px;
  min-height: 45px;
  align-items: center;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,M=t.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,N=t.div`
  font-size: 12px;
  font-weight: bold;
  color: grey;
`,P=t.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 5px 2px;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,F=t.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${e=>e.$color};
  cursor: pointer;
  border: 2px solid ${e=>e.$isSelected?`#000`:`transparent`};
  box-shadow: ${e=>e.$isSelected?`0 0 5px rgba(0,0,0,0.5)`:`0 0 2px rgba(0,0,0,0.2)`};

  ${e=>{let t=e.$color?.includes(`270deg`);if(e.$color?.includes(`linear-gradient`))return t?n`
            background-size: 400% 400%;
            animation: ${v} 5s ease infinite;
          `:n`
            background-size: 100% 100%;
            animation: none;
          `}}
`,I=t.button`
  background: #ffb36c;
  color: ${e=>e.$isDarkMode?`#000`:`black`};
  font-weight: bold;
  padding: 1px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  width: 100%;
  @media (min-width: 768px) {
    grid-column: 1 / -1;
  }
`,L=t.div`
  display: flex;
  gap: 5px;
`,R=t.button`
  background: #4285f4;
  color: white;
  font-weight: bold;
  padding: 4px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  font-size: 16px;
  &:hover {
    background: #3367d6;
  }
`,z=[{name:`Сірий`,value:`grey`},{name:`Помаранчевий`,value:`orange`},{name:`Фіолетовий`,value:`purple`},{name:`Червоний`,value:`red`},{name:`Веселковий Анімований`,value:`linear-gradient(270deg, #ff7eb3, #ff758c, #7afcff, #feffb7, #58e2c2)`},{name:`Голубий`,value:`#00e1ff`},{name:`Синій`,value:`blue`},{name:`Веселковий Статичний`,value:`linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)`}],B=({onClose:e,onRegister:t,availableAvatars:n=[]})=>{let[r,i]=(0,f.useState)({account:``,firstName:``,password:``,confirmPassword:``,avatarIndex:0,textColor:`grey`,borderColor:`grey`}),a=(e=>{if(!e)return{width:`0%`,color:`transparent`,label:``};let t=0;return e.length>=6&&(t+=1),e.length>=8&&(t+=1),(/[A-Z]/.test(e)||/[a-z]/.test(e))&&(t+=1),/\d/.test(e)&&(t+=1),/[^A-Za-z0-9]/.test(e)&&(t+=1),t<=1?{width:`33%`,color:`#ff4d4d`,label:`Слабкий`}:t<=2?{width:`66%`,color:`#ffb36c`,label:`Середній`}:{width:`100%`,color:`#4caf50`,label:`Надійний`}})(r.password),[s,h]=(0,f.useState)({day:``,month:``,year:``}),[g,_]=(0,f.useState)(!1),[v,y]=(0,f.useState)(!1),[B,V]=(0,f.useState)(``),[H,U]=(0,f.useState)(!1),[W]=(0,f.useState)(!1),{isDarkMode:G}={isDarkMode:!1},K=t=>{t&&t.stopPropagation(),U(!0),setTimeout(()=>{e()},500)},q=[`Січень`,`Лютий`,`Березень`,`Квітень`,`Травень`,`Червень`,`Липень`,`Серпень`,`Вересень`,`Жовтень`,`Листопад`,`Грудень`],J=Array.from({length:new Date().getFullYear()-1909+1},(e,t)=>1909+t).reverse(),Y=Array.from({length:31},(e,t)=>t+1),X=(0,f.useMemo)(()=>{let{day:e,month:t,year:n}=s;if(!e||!t||!n)return!1;let r=parseInt(e),i=parseInt(t),a=parseInt(n),o=new Date(a,i-1,r);return o.getFullYear()!==a||o.getMonth()!==i-1||o.getDate()!==r},[s]),Z=(e,t,n)=>{let r=new Date,i=new Date(n,t-1,e),a=r.getFullYear()-i.getFullYear(),o=r.getMonth()-i.getMonth();return(o<0||o===0&&r.getDate()<i.getDate())&&a--,a},Q=async()=>{if(!r.account||!r.firstName||!r.password||!s.day||!s.month||!s.year)return V(`Заповніть всі поля!`);if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.account))return V(`Невірний формат Gmail!`);if(X)return V(`Такої дати не існує!`);if(r.password!==r.confirmPassword)return V(`Паролі не співпадають!`);if(!g)return V(`Прийміть угоду!`);if(Z(parseInt(s.day),parseInt(s.month),parseInt(s.year))<13)return V(`Реєстрація дозволена лише з 13 років!`);let e=await p.default.getItem(`registered_user`);if(e&&e.account===r.account)return V(`Акаунт з таким Gmail вже існує!`);await $()},te=async e=>{e.preventDefault(),e.stopPropagation();try{let i=(await c(l,u)).user,a={uid:i.uid,id:i.uid,account:i.email||``,firstName:i.displayName||i.email||`Користувач`,password:``,avatar:i.photoURL||(n.length?n[r.avatarIndex]:``),textColor:r.textColor||`grey`,borderColor:r.borderColor||`grey`,birthDate:`2000-01-01`};await p.default.setItem(`registered_user`,a),t(a),K(e)}catch(e){console.error(`Google Auth Error:`,e),V(`Помилка Google: `+(e.message||e.toString()))}},$=async()=>{let e={account:r.account,firstName:r.firstName,password:r.password,avatar:n[r.avatarIndex],textColor:r.textColor,borderColor:r.borderColor,birthDate:`${s.year}-${s.month.padStart(2,`0`)}-${s.day.padStart(2,`0`)}`};await p.default.setItem(`registered_user`,e),t(e)};return(0,m.jsx)(m.Fragment,{children:W?(0,m.jsx)(d,{onClose:$}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{$isClosing:H,onClick:K,children:(0,m.jsxs)(x,{$isClosing:H,onClick:e=>e.stopPropagation(),$isDarkMode:G,children:[(0,m.jsx)(C,{onClick:K,children:`×`}),(0,m.jsx)(w,{$isDarkMode:G,children:`Реєстрація`}),(0,m.jsxs)(S,{children:[(0,m.jsx)(T,{type:`email`,placeholder:`Gmail`,onChange:e=>i({...r,account:e.target.value}),$isDarkMode:G}),(0,m.jsx)(E,{$color:r.textColor,style:r.textColor?.includes(`linear-gradient`)?{color:`#fff`}:{color:r.textColor},placeholder:`Ім'я та прізвище`,value:r.firstName,onChange:e=>i({...r,firstName:e.target.value}),$isDarkMode:G}),(0,m.jsxs)(O,{children:[(0,m.jsxs)(D,{value:s.day,onChange:e=>h({...s,day:e.target.value}),$isDarkMode:G,children:[(0,m.jsx)(`option`,{value:``,disabled:!0,children:`День`}),Y.map(e=>(0,m.jsx)(`option`,{value:e,children:e},e))]}),(0,m.jsxs)(D,{value:s.month,onChange:e=>h({...s,month:e.target.value}),$isDarkMode:G,children:[(0,m.jsx)(`option`,{value:``,disabled:!0,children:`Місяць`}),q.map((e,t)=>(0,m.jsx)(`option`,{value:t+1,children:e},t))]}),(0,m.jsxs)(D,{value:s.year,onChange:e=>h({...s,year:e.target.value}),$isDarkMode:G,children:[(0,m.jsx)(`option`,{value:``,disabled:!0,children:`Рік`}),J.map(e=>(0,m.jsx)(`option`,{value:e,children:e},e))]})]}),X&&(0,m.jsx)(`div`,{style:{color:`red`,fontSize:`11px`,textAlign:`center`,marginTop:`-10px`},children:`Такої дати не існує!`}),(0,m.jsx)(T,{name:`signup-password-field`,type:`password`,placeholder:`Пароль`,onChange:e=>i({...r,password:e.target.value}),style:{marginBottom:r.password?`4px`:`8px`},$isDarkMode:G,autoComplete:`new-password`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"data-form-type":`other`,"data-lpignore":`true`}),r.password&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{style:{background:`rgba(0,0,0,0.1)`,height:`6px`,borderRadius:`3px`,width:`100%`,marginTop:`-2px`,marginBottom:`2px`,overflow:`hidden`},children:(0,m.jsx)(`div`,{style:{height:`100%`,borderRadius:`3px`,backgroundColor:a.color,width:a.width,transition:`width 0.3s ease, background-color 0.3s ease`}})}),(0,m.jsxs)(`span`,{style:{fontSize:`11px`,fontWeight:`bold`,color:a.color,alignSelf:`flex-end`,marginBottom:`8px`},children:[`Надійність: `,a.label]})]}),(0,m.jsx)(T,{name:`signup-confirm-password-field`,type:`password`,placeholder:`Підтвердіть пароль`,onChange:e=>i({...r,confirmPassword:e.target.value}),$isDarkMode:G,autoComplete:`new-password`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"data-form-type":`other`,"data-lpignore":`true`}),(0,m.jsxs)(k,{$isDarkMode:G,children:[(0,m.jsx)(`input`,{type:`checkbox`,checked:g,onChange:e=>_(e.target.checked)}),(0,m.jsxs)(`label`,{children:[`Я погоджуюсь з`,` `,(0,m.jsx)(A,{$isDarkMode:G,onClick:()=>y(!0),children:`Угодою`})]})]}),(0,m.jsxs)(L,{children:[(0,m.jsx)(I,{onClick:Q,disabled:!g||X,$isDarkMode:G,children:`Зареєструватися`}),(0,m.jsx)(R,{type:`button`,onClick:te,children:`🔑 Google Вхід`})]})]}),(0,m.jsxs)(S,{style:{display:`none`},children:[(0,m.jsxs)(M,{children:[(0,m.jsx)(N,{$isDarkMode:G,children:`Оберіть колір тексту`}),(0,m.jsx)(P,{children:z.map((e,t)=>(0,m.jsx)(F,{$color:e.value,$isSelected:r.textColor===e.value,title:e.name,onClick:()=>i({...r,textColor:e.value})},t))})]}),(0,m.jsxs)(M,{children:[(0,m.jsx)(N,{$isDarkMode:G,children:`Оберіть колір рамки аватара`}),(0,m.jsx)(P,{children:z.map((e,t)=>(0,m.jsx)(F,{$color:e.value,$isSelected:r.borderColor===e.value,title:e.name,onClick:()=>i({...r,borderColor:e.value})},t))})]}),(0,m.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:`bold`,color:G?`#ccc`:`grey`},children:`Оберіть аватар.`}),(0,m.jsx)(j,{children:n.map((e,t)=>(0,m.jsx)(ee,{$isSelected:r.avatarIndex===t,$borderColor:r.borderColor,onClick:()=>i({...r,avatarIndex:t}),children:(0,m.jsx)(`img`,{src:typeof e==`string`?e:e?.default||e,alt:`avatar-${t}`})},t))}),B&&(0,m.jsx)(`div`,{style:{color:`red`,fontSize:`12px`,textAlign:`center`},children:B})]})]})}),v&&(0,m.jsx)(o,{isOpen:v,onClose:()=>y(!1)})]})})};export{B as default};