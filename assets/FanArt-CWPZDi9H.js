import{o as Me}from"./rolldown-runtime-BNNRdYrd.js";import{C as Et,Cn as Fe,Fn as tt,In as l,Mn as Ut,Pt as Wt,S as _t,T as Bt,Tn as Dt,Zn as Ot,_ as Ht,a as Nt,b as pe,c as Gt,d as qt,f as Xt,g as Yt,h as Vt,i as Qt,l as Zt,m as Jt,o as Kt,p as rt,s as er,u as ot,v as tr,w as nt,wn as it,x as rr,y as or}from"./vendor-react-DaUcAjuS.js";import{b as nr,m as ir}from"./index-COMhzmak.js";var a=Me(Ot()),at=Me(Ut()),ar=Me(Nt()),t=Dt(),H=r=>{if(r instanceof Blob)return!0;if(typeof r=="object"&&r!==null){const u=r.type||r.mimeType||"";return typeof u=="string"&&u.includes("video/")?!0:H(r.src||r.url||"")}if(typeof r!="string")return!1;const p=r.toLowerCase();return/\.(mp4|webm|ogg|ogv|mov|avi|mkv|3gp)(\?|$)/.test(p)||p.startsWith("data:video/")||p.startsWith("blob:video/")||p.includes("/video/")},sr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,lr=l.div`
  font-size: 22px;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  padding: 10px 24px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${r=>r.$isDarkMode?"white":"black"};
  margin-bottom: 15px;
  ${r=>r.$isStickyBgMode?tt`
           background: ${r.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border: 1px solid
             ${r.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
         `:tt`
           background: ${r.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
           border: 1px solid
             ${r.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
         `}
`,cr=l.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 40px;
  width: 100%;
  padding: 0 12px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  position: relative;
  z-index: 100;
  scroll-padding-left: 12px;
  scroll-padding-right: 12px;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`,dr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex: 0 0 auto;
  &:hover {
    transform: scale(1.05);
  }
`,pr=l.div`
  position: relative;
  z-index: 100;
  width: 191px;
  height: 130px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`,ur=l.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${r=>r.$isActive?1:0};
  transition: opacity 1s ease-in-out;
`,xr=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  font-size: 10px;
  padding: 5px 0;
  font-weight: 600;
  text-transform: capitalize;
  z-index: 2;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`,fr=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
`,gr=l.div`
  background: ${r=>r.$isDarkMode?"#18181f":"#ffffff"};
  border: 1px solid ${r=>r.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
  padding: 20px;
  border-radius: 24px;
  width: min(95%, 1200px);
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`,hr=l.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${r=>r.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  flex-shrink: 0;
`,br=l.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #e69d52;
  }
`,st=l.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1;
  color: ${r=>r.$isDarkMode?"white":"black"};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #ff6961;
    color: white;
    border-color: #ff6961;
    transform: scale(1.1);
  }
`,mr=l.h2`
  color: ${r=>r.$isDarkMode?"white":"black"};
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  text-transform: capitalize;
`,yr=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 100%;
`,vr=l(Fe.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
`,lt=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`,wr=l.div`
  position: relative;
  width: 250px;
  height: 170px;
  border-radius: 15px;
  overflow: hidden;

  &:hover .image-overlay {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }
`,jr=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 12px;
  padding: 8px 5px;
  font-weight: bold;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,kr=l.div`
  position: absolute;
  bottom: 6px;
  left: 2%;
  transform: translateX(-50%) translateY(10px);
  width: calc(100% - 12px);
  max-width: 258px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  padding: 4px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);

  @media (hover: none) {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,b=l.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  padding: 4px 8px;
  min-width: 34px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background: #ffb36c;
    color: #111;
    border-color: #ffb36c;
    transform: scale(1.06);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Re=l.div`
  color: ${r=>r.$isDarkMode?"#ccc":"#555"};
  margin-top: 10px;
`,Cr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  width: 100%;
`;l.input`
  padding: 10px 18px;
  border-radius: 25px;
  border: 1px solid ${r=>r.$isDarkMode?"#555":"#ccc"};
  background: ${r=>r.$isDarkMode?"#2a2a35":"#fff"};
  color: ${r=>r.$isDarkMode?"white":"black"};
  width: 100%;
  max-width: 600px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: #ffb36c;
    box-shadow: 0 0 0 2px rgba(255, 179, 108, 0.2);
  }
`;var Sr=l(b)`
  padding: 8px 20px;
  width: auto;
  background: #ffb36c;
  color: #111;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  font-size: 14px;
  &:hover {
    background: #ffa040;
    color: #000;
    transform: translateY(-1px);
  }
`,$r=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`,Rr=l.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
`,ze=l.div`
  display: flex;
  gap: 8px;
  margin-bottom: 5px;
  flex-wrap: wrap;
  justify-content: center;
`,ue=l.button`
  padding: 6px 18px;
  border-radius: 20px;
  border: 1px solid #ffb36c;
  background: ${r=>r.$active?"#ffb36c":"transparent"};
  color: ${r=>r.$active?"black":r.$isDarkMode?"white":"black"};
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
  font-weight: 600;
  &:hover {
    background: ${r=>r.$active?"#ffa040":"rgba(255,179,108,0.2)"};
  }
`,zr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`,Ir=l.div`
  border: 2px solid #ffb36c;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  canvas {
    max-width: 100%;
  }
  position: relative;
`,Mr=l(Fe.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,ct=l.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  font-size: 40px;
  padding: 20px;
  cursor: pointer;
  z-index: 2010;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  ${r=>r.$left?"left: 20px;":"right: 20px;"}
`,Fr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-bottom: 15px;
`,dt=l.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Ie=l.div`
  background: ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"};
  border-radius: 14px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Tr=l.div`
  display: flex;
  background: ${r=>r.$isDarkMode?"rgba(0, 0, 0, 0.4)":"rgba(0, 0, 0, 0.08)"};
  padding: 4px;
  border-radius: 25px;
  gap: 4px;
  border: 1px solid ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"};
`,pt=l.button`
  padding: 8px 22px;
  border-radius: 20px;
  border: none;
  background: ${r=>r.$active?"#ffb36c":"transparent"};
  color: ${r=>r.$active?"#111":r.$isDarkMode?"#eee":"#333"};
  font-weight: ${r=>r.$active?"bold":"600"};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${r=>r.$active?"0 2px 8px rgba(255, 179, 108, 0.4)":"none"};
  &:hover {
    color: ${r=>r.$active?"#000":"#ffb36c"};
  }
`,Lr=l.label`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${r=>r.$isDarkMode?"white":"black"};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 179, 108, 0.2);
    border-color: #ffb36c;
  }
  input {
    display: none;
  }
`,Pr=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  input[type="color"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`,Ar=l.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${r=>r.$color};
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
`,Er=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,ut="FanArtDB",Y="Drafts",Ur=async r=>{const p=indexedDB.open(ut,1);p.onupgradeneeded=u=>u.target.result.createObjectStore(Y),p.onsuccess=u=>{u.target.result.transaction(Y,"readwrite").objectStore(Y).put(r,"currentDraft")}},Wr=()=>new Promise(r=>{const p=indexedDB.open(ut,1);p.onupgradeneeded=u=>u.target.result.createObjectStore(Y),p.onsuccess=u=>{const s=u.target.result.transaction(Y,"readonly").objectStore(Y).get("currentDraft");s.onsuccess=()=>r(s.result)}}),_r=l.div`
  font-size: 11px;
  color: ${r=>r.$isDarkMode?"#ddd":"#444"};
  text-align: left;
  width: 100%;
`,Br=({src:r})=>{const p=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!r||!p.current)return;const u=document.createElement("video");u.src=typeof r=="string"?r:URL.createObjectURL(r),u.crossOrigin="anonymous",u.muted=!0,u.preload="metadata";let s=r instanceof Blob?u.src:null;const B=()=>{s&&URL.revokeObjectURL(s)};return u.onloadedmetadata=()=>{u.currentTime=1},u.onseeked=()=>{p.current&&(p.current.getContext("2d").drawImage(u,0,0,270,170),B())},u.onerror=B,B},[r]),(0,t.jsx)("canvas",{ref:p,width:270,height:170,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},Dr=({onAddImage:r,isDarkMode:p})=>{const u=(0,a.useRef)(null),[s,B]=(0,a.useState)(null),[D,j]=(0,a.useState)("#ffb36c"),[z,ee]=(0,a.useState)(5),[O,F]=(0,a.useState)(!1),[te,V]=(0,a.useState)("sans-serif"),[T,re]=(0,a.useState)({r:1,g:1,b:1,a:1});(0,a.useEffect)(()=>{if(!u.current)return;const d=new Et(u.current,{width:window.innerWidth<768?300:600,height:400,backgroundColor:"#ffffff",isDrawingMode:!1});Wr().then(C=>{C&&d.loadFromJSON(C).then(()=>d.renderAll())});const f=setInterval(()=>{Ur(d.toJSON())},5e3);return B(d),()=>{clearInterval(f),d.dispose()}},[]),(0,a.useEffect)(()=>{s&&(s.isDrawingMode=O,O&&(s.freeDrawingBrush||(s.freeDrawingBrush=new rr(s)),s.freeDrawingBrush.color=D,s.freeDrawingBrush.width=parseInt(z,10)))},[s,D,z,O]);const k=()=>{if(!s)return;const d=new _t("Ваш текст",{left:100,top:100,fontFamily:te,fill:D});s.add(d),s.setActiveObject(d),s.renderAll()},xe=()=>{if(!s)return;const d=s.getActiveObjects();d.length>0?(d.forEach(f=>s.remove(f)),s.discardActiveObject(),s.renderAll()):alert("Виберіть об'єкт на полотні для видалення.")},oe=()=>{const d=s.getActiveObject();if(!d)return alert("Спочатку виберіть об'єкт (фото) для обрізки");const f=d.getBoundingRect(),C=s.toDataURL({left:f.left,top:f.top,width:f.width,height:f.height,format:"png"});nt.fromURL(C).then(ie=>{s.clear(),s.setDimensions({width:f.width,height:f.height}),s.setBackgroundColor("#fff"),s.add(ie),s.renderAll()})},L=d=>{const f=s.getActiveObject();if(!(!f||f.type!=="image")){if(f.filters=[],d==="grayscale"&&f.filters.push(new pe.Grayscale),d==="invert"&&f.filters.push(new pe.Invert),d==="contrast"&&f.filters.push(new pe.Contrast({contrast:.5})),d==="rgba"){const C=[T.r,0,0,0,0,0,T.g,0,0,0,0,0,T.b,0,0,0,0,0,T.a,0];f.filters.push(new pe.ColorMatrix({matrix:C}))}f.applyFilters(),s.renderAll()}},ne=d=>{const f=d.target.files[0];if(!f||!s)return;const C=new FileReader;C.onload=ie=>{nt.fromURL(ie.target.result).then(N=>{N.scaleToWidth(s.width*.8),s.add(N),s.centerObject(N),s.setActiveObject(N),s.renderAll()})},C.readAsDataURL(f)},Q=()=>{if(!s)return;const d=s.toDataURL({format:"jpeg",quality:.8});r({id:"local-"+Date.now(),previewURL:d,largeImageURL:d,tags:"Власний арт",name:"Власний малюнок",source:"local"})};return(0,t.jsxs)(zr,{children:[(0,t.jsxs)(Fr,{children:[(0,t.jsxs)(Tr,{$isDarkMode:p,children:[(0,t.jsx)(pt,{$isDarkMode:p,$active:!O,onClick:()=>F(!1),children:"🖐️ Вибір / Переміщення"}),(0,t.jsx)(pt,{$isDarkMode:p,$active:O,onClick:()=>F(!0),children:"✏️ Малювання пензлем"})]}),(0,t.jsxs)(dt,{children:[(0,t.jsxs)(Ie,{$isDarkMode:p,children:[(0,t.jsx)("span",{style:{fontSize:"12px",color:p?"#ccc":"#444",fontWeight:600},children:"🎨 Колір:"}),(0,t.jsxs)(Pr,{title:"Натисніть для вибору кольору",children:[(0,t.jsx)(Ar,{$color:D}),(0,t.jsx)("input",{type:"color",value:D,onChange:d=>j(d.target.value)})]}),(0,t.jsxs)("span",{style:{fontSize:"12px",color:p?"#ccc":"#444",fontWeight:600,marginLeft:"6px"},children:["📏 ",z,"px"]}),(0,t.jsx)("input",{type:"range",min:"1",max:"50",value:z,onChange:d=>ee(d.target.value),style:{width:"80px",cursor:"pointer"}})]}),(0,t.jsxs)(Ie,{$isDarkMode:p,children:[(0,t.jsxs)(Lr,{$isDarkMode:p,children:["📁 Завантажити фото",(0,t.jsx)("input",{type:"file",accept:"image/*",onChange:ne})]}),(0,t.jsxs)("select",{value:te,onChange:d=>V(d.target.value),style:{padding:"6px 10px",borderRadius:"8px",fontSize:"12px",background:p?"rgba(255,255,255,0.1)":"#fff",color:p?"#fff":"#000",border:"1px solid rgba(255,255,255,0.2)",outline:"none",cursor:"pointer"},children:[(0,t.jsx)("option",{value:"sans-serif",children:"Sans-serif"}),(0,t.jsx)("option",{value:"serif",children:"Serif"}),(0,t.jsx)("option",{value:"monospace",children:"Monospace"}),(0,t.jsx)("option",{value:"cursive",children:"Cursive"})]}),(0,t.jsx)(b,{onClick:k,style:{padding:"6px 14px",fontSize:"12px"},children:"➕ Текст"})]}),(0,t.jsxs)(Ie,{$isDarkMode:p,children:[(0,t.jsx)("span",{style:{fontSize:"12px",color:p?"#ccc":"#444",fontWeight:600},children:"Фільтри:"}),(0,t.jsxs)(Er,{children:[(0,t.jsx)(b,{onClick:()=>L("grayscale"),style:{padding:"4px 10px",fontSize:"11px"},children:"B&W"}),(0,t.jsx)(b,{onClick:()=>L("invert"),style:{padding:"4px 10px",fontSize:"11px"},children:"Neg"}),(0,t.jsx)(b,{onClick:()=>L("rgba"),style:{padding:"4px 10px",fontSize:"11px"},children:"RGBA"})]})]})]}),(0,t.jsxs)(dt,{children:[(0,t.jsx)(b,{onClick:xe,style:{padding:"7px 16px",fontSize:"13px",background:"rgba(229, 57, 53, 0.85)",borderColor:"#e53935",color:"#fff"},title:"Видалити виділений елемент",children:"❌ Видалити"}),(0,t.jsx)(b,{onClick:oe,style:{padding:"7px 16px",fontSize:"13px",background:"rgba(33, 150, 243, 0.85)",borderColor:"#2196f3",color:"#fff"},children:"✂️ Обрізати"}),(0,t.jsx)(b,{onClick:()=>s.clear().set("backgroundColor","#fff").renderAll(),style:{padding:"7px 16px",fontSize:"13px"},children:"🗑️ Очистити Все"}),(0,t.jsx)(b,{onClick:()=>window.open("https://jspaint.app","_blank"),style:{padding:"7px 16px",fontSize:"13px",background:"rgba(76, 175, 80, 0.85)",borderColor:"#4caf50"},children:"🚀 JSPaint"}),(0,t.jsx)(b,{onClick:Q,style:{padding:"8px 24px",fontSize:"14px",background:"#ffb36c",color:"#111",fontWeight:"bold",borderRadius:"20px",border:"none",boxShadow:"0 4px 15px rgba(255, 179, 108, 0.4)"},children:"💾 Зберегти малюнок"})]})]}),(0,t.jsx)(Ir,{children:(0,t.jsx)("canvas",{ref:u})})]})},qr=({isDarkMode:r,isStickyBgMode:p,user:u,onOpenRegister:s,setHeroBg:B,setCustomHeroBgs:D})=>{const[j,z]=(0,a.useState)([]),[ee,O]=(0,a.useState)(!1),[F,te]=(0,a.useState)(""),[V,T]=(0,a.useState)([]),[re,k]=(0,a.useState)("idle"),[xe,oe]=(0,a.useState)(1),[L,ne]=(0,a.useState)("pixabay"),[Q,d]=(0,a.useState)("search"),[f,C]=(0,a.useState)(12),[ie,N]=(0,a.useState)(!1),[Or,xt]=(0,a.useState)(0),[U,W]=(0,a.useState)(null),[v,ae]=(0,a.useState)(null),[S,fe]=(0,a.useState)(null),[ge,Te]=(0,a.useState)(""),[he,Le]=(0,a.useState)(""),[be,Pe]=(0,a.useState)(5),[se,me]=(0,a.useState)([]),[Ae,Ee]=(0,a.useState)(!1),[R,ye]=(0,a.useState)(null),ve=(0,a.useRef)(null),Ue=(0,a.useRef)(null),We=(0,a.useRef)(null),_e=(0,a.useRef)(null),Be=(0,a.useRef)(null),we=(0,a.useRef)(null),le=(0,a.useRef)(null),je=[...ir,...j],De=(e=[])=>e;(0,a.useEffect)(()=>{(async()=>{try{const o=await at.default.getItem("fanart_custom_images");o&&z(o)}catch(o){console.error("Failed to load custom images:",o)}finally{O(!0)}})()},[]),(0,a.useEffect)(()=>{ee&&at.default.setItem("fanart_custom_images",j)},[j,ee]);const[ft,gt]=(0,a.useState)(0),[P,Oe]=(0,a.useState)(null),ht=["Дракони","Тварини","Локації","Фентезі","Хоррор","Аркада","Майбутне","ваші картинки"];(0,a.useEffect)(()=>{const e=setInterval(()=>{gt(o=>o+1)},1e3);return()=>clearInterval(e)},[]);const I=P?De(je.filter(e=>e.category===P)):[];(0,a.useEffect)(()=>(P||v!==null||U!==null||S||R?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[P,v,U,S,R]);const ke=(0,a.useCallback)(e=>{U!==null&&(e.key==="Escape"&&W(null),e.key==="ArrowRight"&&W(o=>(o+1)%I.length),e.key==="ArrowLeft"&&W(o=>(o-1+I.length)%I.length))},[U,I.length]);(0,a.useEffect)(()=>(window.addEventListener("keydown",ke),()=>window.removeEventListener("keydown",ke)),[ke]);const bt=()=>{C(e=>e+12)},mt=e=>{if(!u){s();return}const o=document.createElement("a");o.href=e,o.download="fanart.jpg",o.click()},yt=e=>{if(!u){s();return}const o=`
      <html>
        <head>
          <title>Print Fan Art</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: #fff; color: #000; text-align: center; }
            img { max-width: 100%; max-height: 90vh; display: block; margin: 0 auto; }
          </style>
        </head>
        <body>
          <img src="${e}" alt="Fan art" />
        </body>
      </html>
    `,n=document.createElement("iframe");n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",n.srcdoc=o,document.body.appendChild(n),n.onload=()=>{try{n.contentWindow.focus(),n.contentWindow.print()}catch(i){console.error("Print failed:",i)}finally{setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},800)}}},He=async(e,o)=>{const n=new Image;if(n.crossOrigin="anonymous",n.src=e,await new Promise((E,X)=>{n.onload=E,n.onerror=X}),n.naturalWidth===0||n.naturalHeight===0)throw new Error("Image has no dimensions");const i=140,c=100,x=document.createElement("canvas");x.width=i,x.height=c;const h=x.getContext("2d");h.drawImage(n,0,0,i,c);const w=h.getImageData(0,0,i,c).data,y=4,$=3,m=.35,A=.4,_=y/i,g=$/c,M=y/2,Se=$/2,Z=[],G=new ot(4.08,3.08,m),$e=new Vt().makeTranslation(0,0,-.35/2);G.applyMatrix4($e);const ce=[];for(let E=0;E<G.attributes.position.count;E++)ce.push(.5,.5,.5);G.setAttribute("color",new rt(ce,3)),Z.push(G);const J=new ot(_,g,1);for(let E=0;E<c;E++)for(let X=0;X<i;X++){const de=(E*i+X)*4,Ve=w[de]||0,Qe=w[de+1]||0,Ze=w[de+2]||0;if((w[de+3]||0)<128)continue;const Je=m+(1-(Ve+Qe+Ze)/765)*A,K=J.clone();K.scale(1,1,Je);const Mt=X*_-M+_/2,Ft=-(E*g)+Se-g/2,Tt=Je/2-m;K.translate(Mt,Ft,Tt);const Lt=Ve/255,Pt=Qe/255,At=Ze/255,Ke=[];for(let et=0;et<K.attributes.position.count;et++)Ke.push(Lt,Pt,At);K.setAttribute("color",new rt(Ke,3)),Z.push(K)}const q=Kt(Z,!1),zt=new Ht({vertexColors:!0,roughness:.7,metalness:.02}),It=new Yt(q,zt),Ye=new Jt;return Ye.add(It),{group:Ye,title:o}},Ne=(0,a.useCallback)(async e=>{let o=null;if(e.traverse(g=>{g.isMesh&&g.geometry&&(o=g.geometry)}),!o)throw new Error("No geometry found for 3MF export");const n=o.attributes.position,i=o.attributes.color;let c=o.getIndex();if(!c){const g=[];for(let M=0;M<n.count;M++)g.push(M);o.setIndex(g),c=o.getIndex()}const x=new Map,h=[],w=[];for(let g=0;g<c.count;g+=3){const M=c.getX(g),Se=c.getX(g+1),Z=c.getX(g+2),G=Math.round(i.getX(M)*255),$e=Math.round(i.getY(M)*255),ce=Math.round(i.getZ(M)*255),J=`#${G.toString(16).padStart(2,"0")}${$e.toString(16).padStart(2,"0")}${ce.toString(16).padStart(2,"0")}FF`.toUpperCase();let q=x.get(J);q===void 0&&(q=h.length,x.set(J,q),h.push(J)),w.push(`<triangle v1="${M}" v2="${Se}" v3="${Z}" pid="1" p1="${q}"/>`)}const y=[];for(let g=0;g<n.count;g++)y.push(`<vertex x="${n.getX(g).toFixed(5)}" y="${n.getY(g).toFixed(5)}" z="${n.getZ(g).toFixed(5)}"/>`);const $=`<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02">
  <resources>
    <m:colorgroup id="1">
      ${h.map(g=>`<m:color color="${g}"/>`).join(`
          `)}
    </m:colorgroup>
    <object id="2" type="model">
      <mesh>
        <vertices>
          ${y.join(`
          `)}
        </vertices>
        <triangles>
          ${w.join(`
          `)}
        </triangles>
      </mesh>
    </object>
  </resources>
  <build>
    <item objectid="2"/>
  </build>
</model>`,m=`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/>
</Types>`,A=`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Target="/3D/3dmodel.model" Id="rel-1" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>`,_=new ar.default;return _.file("[Content_Types].xml",m),_.folder("_rels").file(".rels",A),_.folder("3D").file("3dmodel.model",$),await _.generateAsync({type:"blob",compression:"DEFLATE"})},[]),vt=async(e,o)=>{if(!u){s();return}const n=o?.name||o?.title||"Фанарт";ae({imgSrc:e,title:n})},wt=(0,a.useCallback)(async()=>{if(v?.imgSrc)try{const{group:e}=await He(v.imgSrc,v.title),o=await Ne(e),n=URL.createObjectURL(o),i=document.createElement("a");i.href=n,i.download=`${v.title.replace(/[^a-zA-Z0-9._-]+/g,"_")||"fanart"}.3mf`,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(n),4e3)}catch(e){console.error("3D export failed:",e),alert("Не вдалося згенерувати 3MF. Спробуйте інше зображення.")}},[v,Ne]);(0,a.useEffect)(()=>{if(!v?.imgSrc||!ve.current)return;const e=ve.current,o=new Gt({antialias:!0,alpha:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(e.clientWidth,e.clientHeight),e.innerHTML="",e.appendChild(o.domElement);const n=new or;n.background=new qt(987414);const i=new tr(35,e.clientWidth/e.clientHeight,.1,100);i.position.set(0,0,6);const c=new Zt(16777215,.9),x=new Xt(16777215,1.3);x.position.set(3,4,6),n.add(c,x);const h=new er(i,o.domElement);h.enableDamping=!0,h.enablePan=!1,h.minDistance=3,h.maxDistance=12,(async()=>{try{const{group:m}=await He(v.imgSrc,v.title);m.rotation.x=-.35,m.rotation.y=.4,n.add(m),We.current=n,_e.current=i,Be.current=h,Ue.current=o,le.current=m}catch(m){console.error("Preview setup failed:",m)}})();const y=()=>{we.current=requestAnimationFrame(y),le.current&&(le.current.rotation.y+=.005),h.update(),o.render(n,i)};y();const $=()=>{const m=e.clientWidth,A=e.clientHeight;o.setSize(m,A),i.aspect=m/A,i.updateProjectionMatrix()};return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),we.current&&cancelAnimationFrame(we.current),h.dispose(),o.dispose(),e&&(e.innerHTML=""),Ue.current=null,We.current=null,_e.current=null,Be.current=null,le.current=null}},[v?.imgSrc,v?.title]),(0,a.useEffect)(()=>{N(!1),xt(0),localStorage.removeItem("fanart_cooldown_end")},[]);const Ce=async e=>{if(!e||e.length<3)return e;try{return(await(await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(e)}`)).json())[0].map(o=>o[0]).join("")}catch(o){return console.error("Translation error:",o),e}},Ge=async()=>{if(F.trim()){k("loading"),T([]);try{if(L==="pixabay"){const e=await Ce(F),o=await fetch(`https://pixabay.com/api/?key=50977795-feb18de71b048a02e0c824e54&q=${encodeURIComponent(e)}&image_type=photo&per_page=12&page=1`);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=await o.json();n.hits&&n.hits.length>0?(T(n.hits.map(i=>({id:i.id,previewURL:i.previewURL,largeImageURL:i.largeImageURL,tags:i.tags,name:i.tags,source:"pixabay"}))),oe(1),k("idle")):k("no-results")}else{const e=await Ce(F),o=await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(e)}`);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=(await o.json()).filter(c=>c.show&&c.show.image);if(n.length===0){k("no-results");return}const i=await Promise.all(n.slice(0,10).map(async c=>{const x=await fetch(`https://api.tvmaze.com/shows/${c.show.id}/cast`),h=x.ok?await x.json():[];return{id:c.show.id,name:c.show.name,previewURL:c.show.image.medium,largeImageURL:c.show.image.original,summary:c.show.summary?.replace(/<[^>]*>?/gm,""),cast:h.slice(0,4).map(w=>w.person.name).join(", "),url:c.show.url,source:"tvmaze"}}));T(i),k("idle")}}catch(e){console.error("Error searching:",e),k("error")}}},jt=async()=>{if(L!=="pixabay"||!F.trim())return;k("loading");const e=xe+1;try{const o=await Ce(F),n=await fetch(`https://pixabay.com/api/?key=50977795-feb18de71b048a02e0c824e54&q=${encodeURIComponent(o)}&image_type=photo&per_page=12&page=${e}`);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();if(i.hits&&i.hits.length>0){const c=i.hits.map(x=>({id:x.id,previewURL:x.previewURL,largeImageURL:x.largeImageURL,tags:x.tags,source:"pixabay"}));T(x=>[...x,...c]),oe(e),k("idle")}else alert("Більше зображень не знайдено."),k("idle")}catch(o){console.error("Error loading more from Pixabay:",o),k("error")}},qe=e=>{if(j.length>=3)return alert("Можна додати не більше 3 картинок.");if(j.some(n=>n.id===e.id))return alert("Це зображення вже додано.");const o={id:e.id,src:e.previewURL,largeSrc:e.largeImageURL||e.previewURL,category:"ваші картинки",summary:e.summary,cast:e.cast,title:e.name,url:e.url};z([...j,o])},kt=(0,a.useCallback)(async()=>{if(!S?.src)return;const e=parseFloat(ge)||S.start||0,o=parseFloat(he);if(isNaN(o)||o<=e){alert("Кінець має бути пізніше за початок");return}const n=Math.min(Math.max(1,parseInt(be)||1),20);Ee(!0);try{const i=document.createElement("video");i.src=S.src,i.crossOrigin="anonymous",i.muted=!0,i.preload="metadata",await new Promise((y,$)=>{i.onloadedmetadata=y,i.onerror=$,setTimeout(y,5e3)});const c=document.createElement("canvas");c.width=270,c.height=170;const x=c.getContext("2d"),h=[],w=n===1?0:(o-e)/(n-1);for(let y=0;y<n;y++){const $=e+y*w;await new Promise(m=>{i.currentTime=$,i.onseeked=()=>{x.drawImage(i,0,0,c.width,c.height);const A=c.toDataURL("image/jpeg",.8);h.push({id:`frame-${Date.now()}-${y}`,src:A,largeSrc:A,category:S.category||"ваші картинки",name:`${S.name} — ${$.toFixed(1)}с`,author:S.author||"",source:S.source||""}),m()}})}me(h)}catch(i){console.error("Помилка витягування кадрів:",i),alert("Не вдалося витягнути кадри. Спробуйте інше відео.")}finally{Ee(!1)}},[S,ge,he,be]),Ct=e=>{if(j.length>=3)return alert("Можна додати не більше 3 картинок.");j.some(o=>o.id===e.id)||z(o=>[...o,e])},St=()=>{const e=3-j.length;if(e<=0)return alert("Можна додати не більше 3 картинок.");const o=se.filter(n=>!j.some(i=>i.id===n.id)).slice(0,e);z(n=>[...n,...o])},$t=e=>{Oe(e),C(12)},Xe=()=>{Oe(null)},Rt=e=>{z(o=>o.filter(n=>n.id!==e))};return(0,t.jsxs)(sr,{children:[(0,t.jsx)(lr,{$isStickyBgMode:p,$isDarkMode:r,children:"Друкарня"}),(0,t.jsx)(cr,{children:ht.map(e=>{const o=je.filter(x=>x.category===e);if(o.length===0&&e!=="ваші картинки")return null;const n=o.length>0?o:[{src:nr,category:"ваші картинки"}],i=n.filter(x=>!H(x.src)),c=i.length>0?i:n;return(0,t.jsx)(dr,{onClick:()=>$t(e),children:(0,t.jsxs)(pr,{children:[c.map((x,h)=>{const w=h===ft%c.length;return(0,t.jsx)(ur,{src:x.src,alt:e,$isActive:w},h)}),(0,t.jsx)(xr,{children:e})]})},e)})}),P&&(0,t.jsx)(fr,{onClick:Xe,children:(0,t.jsxs)(gr,{$isDarkMode:r,onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(hr,{$isDarkMode:r,children:[(0,t.jsxs)(mr,{$isDarkMode:r,children:["Плейлист: ",P]}),(0,t.jsx)(st,{$isDarkMode:r,onClick:Xe,children:"×"})]}),(0,t.jsxs)(br,{children:[P==="ваші картинки"&&(0,t.jsxs)(Cr,{children:[(0,t.jsx)("p",{style:{color:r?"#ccc":"#555",marginBottom:"10px",fontSize:"13px",textAlign:"center"},children:"Створіть свій шедевр або знайдіть готовий (макс. 3)"}),(0,t.jsxs)(ze,{children:[(0,t.jsx)(ue,{$isDarkMode:r,$active:Q==="search",onClick:()=>d("search"),children:"🔍 Пошук"}),(0,t.jsx)(ue,{$isDarkMode:r,$active:Q==="editor",onClick:()=>d("editor"),children:"🎨 Редактор та Файли"})]}),Q==="search"?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ze,{children:[(0,t.jsx)(ue,{$isDarkMode:r,$active:L==="pixabay",onClick:()=>ne("pixabay"),children:"🖼 Pixabay"}),(0,t.jsx)(ue,{$isDarkMode:r,$active:L==="tvmaze",onClick:()=>ne("tvmaze"),children:"🎬 TVMaze (Кіно)"})]}),(0,t.jsx)(ze,{children:(0,t.jsxs)("div",{style:{position:"relative",display:"flex",alignItems:"center",width:"100%",maxWidth:"400px"},children:[(0,t.jsx)("input",{type:"text",placeholder:"Пошук зображень.",value:F,onChange:e=>te(e.target.value),onKeyDown:e=>e.key==="Enter"&&Ge(),style:{width:"100%",padding:"10px 90px 10px 14px",borderRadius:"8px",border:`1px solid ${r?"#444":"#ccc"}`,backgroundColor:r?"#1e1e1e":"#fff",color:r?"#fff":"#000",fontSize:"14px",outline:"none"}}),(0,t.jsx)("button",{type:"button",onClick:Ge,style:{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",padding:"6px 14px",border:"none",borderRadius:"6px",backgroundColor:"#007bff",color:"#fff",fontSize:"14px",cursor:"pointer"},children:"Знайти"})]})}),re==="loading"&&(0,t.jsx)(Re,{$isDarkMode:r,children:"Завантаження..."}),re==="no-results"&&(0,t.jsx)(Re,{$isDarkMode:r,children:"Зображень за вашим запитом не знайдено."}),re==="error"&&(0,t.jsx)(Re,{$isDarkMode:r,children:"Помилка пошуку. Спробуйте пізніше."}),V.length>0&&L==="pixabay"&&(0,t.jsx)(Sr,{type:"button",onClick:jt,style:{marginTop:"10px"},children:"Завантажити ще"}),V.length>0&&(0,t.jsx)($r,{children:V.map(e=>(0,t.jsxs)(Rr,{onClick:()=>qe(e),children:[(0,t.jsx)(lt,{src:e.previewURL,alt:e.name||e.tags,style:{width:"100px",height:"100px"}}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:"10px",textAlign:"center",padding:"2px"},children:"+ Додати"})]},e.id))})]}):(0,t.jsx)(Dr,{onAddImage:qe,isDarkMode:r})]}),(0,t.jsx)(yr,{children:(0,t.jsx)(it,{children:De(je.filter(e=>e.category===P)).slice(0,f).map((e,o)=>(0,t.jsxs)(vr,{layout:!0,initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.5,y:50},transition:{duration:.3},children:[(0,t.jsxs)(wr,{children:[(0,t.jsx)(lt,{src:H(e.src)?"":e.src,alt:`Fan art - ${e.category}`,title:e.name||e.title||"Фанарт",onClick:()=>W(o),style:{cursor:"zoom-in",display:H(e.src)?"none":"block"}}),H(e.src)&&(0,t.jsx)(Br,{src:e.src}),(0,t.jsxs)(jr,{className:"image-overlay",children:[e.author&&(0,t.jsx)("div",{children:e.author}),e.source&&(0,t.jsx)("div",{style:{fontSize:"10px",fontWeight:"normal"},children:e.source}),(0,t.jsx)("div",{children:e.name||e.title||"Арт"})]}),(0,t.jsxs)(kr,{className:"image-overlay",children:[H(e.src)&&(0,t.jsx)(b,{onClick:n=>{n.stopPropagation(),me([]),Te(String(e.start??0)),Le(String(e.end??"")),Pe(5),fe(e)},title:"Дістати кадри",children:"🎥"}),e.description&&(0,t.jsx)(b,{onClick:n=>{n.stopPropagation(),ye({name:e.name,text:e.description})},title:"Опис картини",style:{background:"#1a3a5c"},children:"?"}),(0,t.jsx)(b,{onClick:()=>mt(e.src),title:"Скачати",children:(0,t.jsx)(Qt,{})}),(0,t.jsx)(b,{onClick:n=>{n.stopPropagation(),yt(e.src)},title:"Роздрукувати",children:(0,t.jsx)(Wt,{})}),(0,t.jsx)(b,{onClick:n=>{n.stopPropagation(),vt(e.src,e)},title:"3D-друк (плоский друк, тверда картина)",children:"3D"}),(0,t.jsx)(b,{onClick:n=>{n.stopPropagation(),B(e.src),D(i=>i.some(c=>c.src===e.src)?i:[{src:e.src,name:e.title||"Фанарт"},...i])},title:"Встановити на шпалери",style:{color:"white"},children:(0,t.jsx)(Bt,{})}),P==="ваші картинки"&&(0,t.jsx)(b,{onClick:()=>Rt(e.id),title:"Видалити",style:{background:"#ff6961"},children:"🗑️"})]})]}),e.summary&&(0,t.jsxs)(_r,{$isDarkMode:r,children:[(0,t.jsx)("p",{style:{fontWeight:"bold",margin:"0 0 5px 0"},children:e.title}),(0,t.jsxs)("p",{style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",margin:0},children:[(0,t.jsx)("b",{children:"Сюжет:"})," ",e.summary]}),(0,t.jsxs)("p",{style:{margin:"5px 0 0 0"},children:[(0,t.jsx)("b",{children:"Актори:"})," ",e.cast||"Не вказано"]}),e.url&&(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{color:"#ffb36c",fontSize:"10px",textDecoration:"underline",display:"block",marginTop:"5px"},children:"Оригінальний сайт"})]})]},e.id||e.src))})}),I.length>f&&(0,t.jsx)(b,{onClick:bt,style:{marginTop:"20px",width:"auto"},children:"Завантажити ще"})]})]})}),v&&(0,t.jsx)("div",{onClick:()=>ae(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,zIndex:2e3},children:(0,t.jsxs)("div",{onClick:e=>e.stopPropagation(),style:{width:"min(100%, 980px)",background:"#121212",border:"1px solid #ffb36c",borderRadius:18,padding:16,color:"white",display:"flex",flexDirection:"column",gap:12},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsxs)("h3",{style:{margin:0},children:["3D-preview: ",v.title]}),(0,t.jsx)("button",{onClick:()=>ae(null),style:{background:"transparent",border:"none",color:"white",fontSize:24,cursor:"pointer"},children:"×"})]}),(0,t.jsx)("div",{ref:ve,style:{width:"100%",height:"min(65vh, 520px)",borderRadius:12,overflow:"hidden",background:"linear-gradient(135deg, #1b1b1b, #080808)",border:"1px solid rgba(255, 179, 108, 0.3)"}}),(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"},children:[(0,t.jsx)("button",{onClick:wt,style:{background:"#ffb36c",color:"#111",border:"none",borderRadius:999,padding:"8px 14px",fontWeight:700,cursor:"pointer"},children:"⬇️ Завантажити 3MF (з кольорами)"}),(0,t.jsx)("button",{onClick:()=>ae(null),style:{background:"#ffb36c",color:"#111",border:"none",borderRadius:999,padding:"8px 14px",fontWeight:700,cursor:"pointer"},children:"Закрити"})]})]})}),S&&(0,t.jsx)("div",{onClick:()=>fe(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:2100},children:(0,t.jsxs)("div",{onClick:e=>e.stopPropagation(),style:{background:"#111",border:"1px solid #ffb36c",borderRadius:16,padding:18,width:"min(100%, 700px)",color:"#fff",display:"flex",flexDirection:"column",gap:12,maxHeight:"90vh",overflowY:"auto"},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsxs)("h3",{style:{margin:0,color:"#ffb36c"},children:["🎥 ",S.name]}),(0,t.jsx)("button",{onClick:()=>{fe(null),me([])},style:{background:"transparent",border:"none",color:"#fff",fontSize:22,cursor:"pointer"},children:"×"})]}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10},children:[(0,t.jsxs)("label",{style:{fontSize:12},children:["Початок (сек)",(0,t.jsx)("input",{type:"number",min:"0",step:"0.5",value:ge,onChange:e=>Te(e.target.value),style:{width:"100%",marginTop:4,padding:"4px 8px",borderRadius:6,background:"#222",border:"1px solid #ffb36c",color:"#fff"}})]}),(0,t.jsxs)("label",{style:{fontSize:12},children:["Кінець (сек, > початок)",(0,t.jsx)("input",{type:"number",min:"0",step:"0.5",value:he,onChange:e=>Le(e.target.value),style:{width:"100%",marginTop:4,padding:"4px 8px",borderRadius:6,background:"#222",border:"1px solid #ffb36c",color:"#fff"}})]}),(0,t.jsxs)("label",{style:{fontSize:12},children:["Кількість кадрів (1-20)",(0,t.jsx)("input",{type:"number",min:"1",max:"20",value:be,onChange:e=>Pe(e.target.value),style:{width:"100%",marginTop:4,padding:"4px 8px",borderRadius:6,background:"#222",border:"1px solid #ffb36c",color:"#fff"}})]})]}),(0,t.jsx)("button",{onClick:kt,disabled:Ae,style:{background:"#ffb36c",color:"#111",border:"none",borderRadius:8,padding:"8px 18px",fontWeight:700,cursor:"pointer",fontSize:14},children:Ae?"Завантажують...":"📥 Дістати кадри"}),se.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsxs)("span",{style:{fontSize:13,color:"#ffb36c"},children:["Дістало кадрів: ",se.length]}),(0,t.jsx)("button",{onClick:St,style:{background:"#2196f3",color:"#fff",border:"none",borderRadius:6,padding:"5px 12px",fontWeight:700,cursor:"pointer",fontSize:12},children:"+ Додати всі"})]}),(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:se.map((e,o)=>(0,t.jsxs)("div",{style:{position:"relative",borderRadius:8,overflow:"hidden",cursor:"pointer"},onClick:()=>Ct(e),children:[(0,t.jsx)("img",{src:e.src,alt:`Кадр ${o+1}`,style:{width:135,height:85,objectFit:"cover",display:"block"}}),(0,t.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.6)",fontSize:10,color:"#fff",textAlign:"center",padding:2},children:"+ Додати"})]},o))})]})]})}),R&&(0,t.jsx)("div",{onClick:()=>ye(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px"},children:(0,t.jsxs)("div",{onClick:e=>e.stopPropagation(),style:{background:"#111",border:"2px solid #ffb36c",borderRadius:"14px",width:"90%",maxWidth:"900px",height:"80vh",maxHeight:"650px",color:"#fff",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 50px rgba(0,0,0,0.9)"},children:[H(R.src)?(0,t.jsx)("video",{src:R.src,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}):(0,t.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${R.src})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:1}}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",zIndex:2}}),(0,t.jsxs)("div",{style:{position:"relative",zIndex:3,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",padding:"30px",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[(0,t.jsxs)("h3",{style:{color:"#ffb36c",margin:0,fontSize:"24px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.9)"},children:["🖼️ ",R.name]}),(0,t.jsx)("button",{onClick:()=>ye(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"36px",height:"36px",color:"#fff",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(255,0,0,0.7)",e.currentTarget.style.borderColor="red"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(0,0,0,0.6)",e.currentTarget.style.borderColor="rgba(255,255,255,0.3)"},children:"×"})]}),(0,t.jsx)("div",{style:{flex:1,overflowY:"auto",margin:"20px 0",paddingRight:"10px"},children:(0,t.jsx)("p",{style:{lineHeight:1.8,whiteSpace:"pre-wrap",fontSize:"15px",margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.95)",color:"#f5f5f5",background:"rgba(0,0,0,0.4)",padding:"15px",borderRadius:"8px",backdropFilter:"blur(2px)"},children:R.text})}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,t.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["👤 Автор: ",R.author||"Невідомий"]}),R.source&&(0,t.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["🔗 Джерело: ",R.source]})]})]})]})}),(0,t.jsx)(it,{children:U!==null&&(0,t.jsxs)(Mr,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>W(null),children:[(0,t.jsx)(st,{style:{color:"white",zIndex:2020},onClick:()=>W(null),children:"×"}),(0,t.jsx)(ct,{$left:!0,onClick:e=>{e.stopPropagation(),W(o=>(o-1+I.length)%I.length)},children:"❮"}),(0,t.jsx)(Fe.img,{src:I[U].largeSrc||I[U].src,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},onClick:e=>e.stopPropagation()},U),(0,t.jsx)(ct,{onClick:e=>{e.stopPropagation(),W(o=>(o+1)%I.length)},children:"❯"})]})})]})};export{qr as default};

//# sourceMappingURL=FanArt-CWPZDi9H.js.map