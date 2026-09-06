import{o as O}from"./rolldown-runtime-BNNRdYrd.js";import{Fn as l,In as n,Mn as J,Nn as k,Tn as Q,Zn as V,at as X}from"./vendor-react-DaUcAjuS.js";import{f as ee,n as re,u as te}from"./index-COMhzmak.js";import{t as oe}from"./KatSceneModal--LPaSDxk.js";var f=O(V()),M=O(J()),r=Q(),ae=k`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,ne=k`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,ie=k`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,$=k`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,se=l`
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
  animation: ${$} 5s ease infinite;
`;n.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: bold;
  ${se}
  margin-left: 5px;
  display: inline-block;
`;var le=n.div`
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
  animation: ${t=>t.$isClosing?ie:"none"} 0.5s ease-out
    forwards;
`,de=n.div`
  background: ${t=>t.$isDarkMode?"#2c2c2c":"white"};
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#000000"};
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
  border: 1px solid ${t=>t.$isDarkMode?"#555":"#ddd"};
  animation: ${t=>t.$isClosing?ne:ae} 0.5s ease-out
    forwards;
  @media (min-width: 768px) {
    max-width: 700px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`,G=n.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 250px;
  @media (min-width: 768px) {
    flex: 1;
  }
`,ce=n.button`
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
`,fe=n.h3`
  text-align: center;
  margin: 0;
  font-weight: 900;
  color: ${t=>t.$isDarkMode?"#fff":"#000000"};
  width: 100%;
`,w=n.input`
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${t=>t.$isDarkMode?"#fff":"#000"}; /* Fix transparent text */
  background: ${t=>t.$isDarkMode?"#333":"#fff"};
  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`,pe=n(w)`
  font-weight: bold;
  caret-color: black;

  ${t=>{const d=t.$color?.includes("linear-gradient"),g=t.$color?.includes("270deg");return d?l`
        background: ${t.$color};
        color: #fff;
        ${g?l`
                background-size: 400% 400%;
                animation: ${$} 5s ease infinite;
              `:l`
                background-size: 100% 100%;
                animation: none;
              `}
      `:l`
        color: ${t.$color||"black"};
        background: transparent;
      `}}
`,S=n.select`
  padding: 3px;
  border: 1px solid #000;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  background: white;
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  background: ${t=>t.$isDarkMode?"#333":"#fff"};
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`,ue=n.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
`,ge=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${t=>t.$isDarkMode?"#ccc":"#555"};
`,xe=n.span`
  color: ${t=>(t.$isDarkMode,"#ffb36c")};
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`,he=n.div`
  width: 34px;
  height: 34px;
  min-width: 60px;
  min-height: 60px;
  flex-shrink: 0;
  border-radius: 50%;
  padding: 3px;
  background: ${t=>t.$isSelected?t.$borderColor:"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ${t=>{const d=t.$borderColor?.includes("270deg");if(t.$isSelected&&t.$borderColor?.includes("linear-gradient"))return d?l`
            background-size: 400% 400%;
            animation: ${$} 5s ease infinite;
          `:l`
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
`,be=n.div`
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
`,N=n.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,P=n.div`
  font-size: 12px;
  font-weight: bold;
  color: grey;
`,B=n.div`
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
`,T=n.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${t=>t.$color};
  cursor: pointer;
  border: 2px solid ${t=>t.$isSelected?"#000":"transparent"};
  box-shadow: ${t=>t.$isSelected?"0 0 5px rgba(0,0,0,0.5)":"0 0 2px rgba(0,0,0,0.2)"};

  ${t=>{const d=t.$color?.includes("270deg");if(t.$color?.includes("linear-gradient"))return d?l`
            background-size: 400% 400%;
            animation: ${$} 5s ease infinite;
          `:l`
            background-size: 100% 100%;
            animation: none;
          `}}
`,me=n.button`
  background: #ffb36c;
  color: ${t=>t.$isDarkMode?"#000":"black"};
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
`,ve=n.div`
  display: flex;
  gap: 5px;
`,we=n.button`
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
`,Y=[{name:"Сірий",value:"grey"},{name:"Помаранчевий",value:"orange"},{name:"Фіолетовий",value:"purple"},{name:"Червоний",value:"red"},{name:"Веселковий Анімований",value:"linear-gradient(270deg, #ff7eb3, #ff758c, #7afcff, #feffb7, #58e2c2)"},{name:"Голубий",value:"#00e1ff"},{name:"Синій",value:"blue"},{name:"Веселковий Статичний",value:"linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)"}],De=({onClose:t,onRegister:d,availableAvatars:g=[]})=>{const[a,p]=(0,f.useState)({account:"",firstName:"",password:"",confirmPassword:"",avatarIndex:0,textColor:"grey",borderColor:"grey"}),v=(e=>{if(!e)return{width:"0%",color:"transparent",label:""};let o=0;return e.length>=6&&(o+=1),e.length>=8&&(o+=1),(/[A-Z]/.test(e)||/[a-z]/.test(e))&&(o+=1),/\d/.test(e)&&(o+=1),/[^A-Za-z0-9]/.test(e)&&(o+=1),o<=1?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:o<=2?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(a.password),[i,y]=(0,f.useState)({day:"",month:"",year:""}),[C,R]=(0,f.useState)(!1),[z,I]=(0,f.useState)(!1),[_,c]=(0,f.useState)(""),[A,E]=(0,f.useState)(!1),[q]=(0,f.useState)(!1),{isDarkMode:s}={isDarkMode:!1},j=e=>{e&&e.stopPropagation(),E(!0),setTimeout(()=>{t()},500)},L=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],U=Array.from({length:new Date().getFullYear()-1909+1},(e,o)=>1909+o).reverse(),W=Array.from({length:31},(e,o)=>o+1),D=(0,f.useMemo)(()=>{const{day:e,month:o,year:u}=i;if(!e||!o||!u)return!1;const x=parseInt(e),h=parseInt(o),m=parseInt(u),b=new Date(m,h-1,x);return b.getFullYear()!==m||b.getMonth()!==h-1||b.getDate()!==x},[i]),Z=(e,o,u)=>{const x=new Date,h=new Date(u,o-1,e);let m=x.getFullYear()-h.getFullYear();const b=x.getMonth()-h.getMonth();return(b<0||b===0&&x.getDate()<h.getDate())&&m--,m},K=async()=>{if(!a.account||!a.firstName||!a.password||!i.day||!i.month||!i.year)return c("Заповніть всі поля!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.account))return c("Невірний формат Gmail!");if(D)return c("Такої дати не існує!");if(a.password!==a.confirmPassword)return c("Паролі не співпадають!");if(!C)return c("Прийміть угоду!");if(Z(parseInt(i.day),parseInt(i.month),parseInt(i.year))<13)return c("Реєстрація дозволена лише з 13 років!");const e=await M.default.getItem("registered_user");if(e&&e.account===a.account)return c("Акаунт з таким Gmail вже існує!");await F()},H=async e=>{e.preventDefault(),e.stopPropagation();try{const o=(await X(te,ee)).user,u={uid:o.uid,id:o.uid,account:o.email||"",firstName:o.displayName||o.email||"Користувач",password:"",avatar:o.photoURL||(g.length?g[a.avatarIndex]:""),textColor:a.textColor||"grey",borderColor:a.borderColor||"grey",birthDate:"2000-01-01"};await M.default.setItem("registered_user",u),d(u),j(e)}catch(o){console.error("Google Auth Error:",o),c("Помилка Google: "+(o.message||o.toString()))}},F=async()=>{const e={account:a.account,firstName:a.firstName,password:a.password,avatar:g[a.avatarIndex],textColor:a.textColor,borderColor:a.borderColor,birthDate:`${i.year}-${i.month.padStart(2,"0")}-${i.day.padStart(2,"0")}`};await M.default.setItem("registered_user",e),d(e)};return(0,r.jsx)(r.Fragment,{children:q?(0,r.jsx)(oe,{onClose:F}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(le,{$isClosing:A,onClick:j,children:(0,r.jsxs)(de,{$isClosing:A,onClick:e=>e.stopPropagation(),$isDarkMode:s,children:[(0,r.jsx)(ce,{onClick:j,children:"×"}),(0,r.jsx)(fe,{$isDarkMode:s,children:"Реєстрація"}),(0,r.jsxs)(G,{children:[(0,r.jsx)(w,{type:"email",placeholder:"Gmail",onChange:e=>p({...a,account:e.target.value}),$isDarkMode:s}),(0,r.jsx)(pe,{$color:a.textColor,style:a.textColor?.includes("linear-gradient")?{color:"#fff"}:{color:a.textColor},placeholder:"Ім'я та прізвище",value:a.firstName,onChange:e=>p({...a,firstName:e.target.value}),$isDarkMode:s}),(0,r.jsxs)(ue,{children:[(0,r.jsxs)(S,{value:i.day,onChange:e=>y({...i,day:e.target.value}),$isDarkMode:s,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"День"}),W.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)(S,{value:i.month,onChange:e=>y({...i,month:e.target.value}),$isDarkMode:s,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Місяць"}),L.map((e,o)=>(0,r.jsx)("option",{value:o+1,children:e},o))]}),(0,r.jsxs)(S,{value:i.year,onChange:e=>y({...i,year:e.target.value}),$isDarkMode:s,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Рік"}),U.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]})]}),D&&(0,r.jsx)("div",{style:{color:"red",fontSize:"11px",textAlign:"center",marginTop:"-10px"},children:"Такої дати не існує!"}),(0,r.jsx)(w,{name:"signup-password-field",type:"password",placeholder:"Пароль",onChange:e=>p({...a,password:e.target.value}),style:{marginBottom:a.password?"4px":"8px"},$isDarkMode:s,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),a.password&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{background:"rgba(0,0,0,0.1)",height:"6px",borderRadius:"3px",width:"100%",marginTop:"-2px",marginBottom:"2px",overflow:"hidden"},children:(0,r.jsx)("div",{style:{height:"100%",borderRadius:"3px",backgroundColor:v.color,width:v.width,transition:"width 0.3s ease, background-color 0.3s ease"}})}),(0,r.jsxs)("span",{style:{fontSize:"11px",fontWeight:"bold",color:v.color,alignSelf:"flex-end",marginBottom:"8px"},children:["Надійність: ",v.label]})]}),(0,r.jsx)(w,{name:"signup-confirm-password-field",type:"password",placeholder:"Підтвердіть пароль",onChange:e=>p({...a,confirmPassword:e.target.value}),$isDarkMode:s,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),(0,r.jsxs)(ge,{$isDarkMode:s,children:[(0,r.jsx)("input",{type:"checkbox",checked:C,onChange:e=>R(e.target.checked)}),(0,r.jsxs)("label",{children:["Я погоджуюсь з"," ",(0,r.jsx)(xe,{$isDarkMode:s,onClick:()=>I(!0),children:"Угодою"})]})]}),(0,r.jsxs)(ve,{children:[(0,r.jsx)(me,{onClick:K,disabled:!C||D,$isDarkMode:s,children:"Зареєструватися"}),(0,r.jsx)(we,{type:"button",onClick:H,children:"🔑 Google Вхід"})]})]}),(0,r.jsxs)(G,{style:{display:"none"},children:[(0,r.jsxs)(N,{children:[(0,r.jsx)(P,{$isDarkMode:s,children:"Оберіть колір тексту"}),(0,r.jsx)(B,{children:Y.map((e,o)=>(0,r.jsx)(T,{$color:e.value,$isSelected:a.textColor===e.value,title:e.name,onClick:()=>p({...a,textColor:e.value})},o))})]}),(0,r.jsxs)(N,{children:[(0,r.jsx)(P,{$isDarkMode:s,children:"Оберіть колір рамки аватара"}),(0,r.jsx)(B,{children:Y.map((e,o)=>(0,r.jsx)(T,{$color:e.value,$isSelected:a.borderColor===e.value,title:e.name,onClick:()=>p({...a,borderColor:e.value})},o))})]}),(0,r.jsx)("div",{style:{fontSize:"11px",fontWeight:"bold",color:s?"#ccc":"grey"},children:"Оберіть аватар."}),(0,r.jsx)(be,{children:g.map((e,o)=>(0,r.jsx)(he,{$isSelected:a.avatarIndex===o,$borderColor:a.borderColor,onClick:()=>p({...a,avatarIndex:o}),children:(0,r.jsx)("img",{src:typeof e=="string"?e:e?.default||e,alt:`avatar-${o}`})},o))}),_&&(0,r.jsx)("div",{style:{color:"red",fontSize:"12px",textAlign:"center"},children:_})]})]})}),z&&(0,r.jsx)(re,{isOpen:z,onClose:()=>I(!1)})]})})};export{De as default};

//# sourceMappingURL=Modal-BBeOrjW-.js.map