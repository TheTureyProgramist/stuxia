import{o as Ke}from"./rolldown-runtime-BNNRdYrd.js";import{In as l,Nn as C,P as Pe,Tn as Ge,Zn as Je}from"./vendor-react-DaUcAjuS.js";import{t as Ye}from"./songAiKnowledge-DWostAuJ.js";import{a as Te,o as He,r as ae,s as Qe}from"./index-COMhzmak.js";var p=Ke(Je()),j=[{id:1,name:"Динофроз",file:Qe,type:"base"},{id:126,name:"Monody",file:He,type:"base"},{id:285,name:"Unity",file:Te,type:"base"}],Xe=new Set(j.map(t=>t.file)),re=t=>!!t&&Xe.has(t),oe="bg-audio-cache",Ze=()=>{if(typeof window>"u")return[];try{const t=window.localStorage.getItem("bg_music_soft_deleted_ids");return t?JSON.parse(t):[]}catch{return[]}},Ve=(t=[])=>{if(!(typeof window>"u"))try{window.localStorage.setItem("bg_music_soft_deleted_ids",JSON.stringify(Array.from(new Set(t))))}catch{}},n=Ge(),Be=C`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,ei=C`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,ii=C`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,ni=C`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`,ti=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: ${t=>t.$isClosing?ii:"none"} 0.5s ease-out
    forwards;
`,ai=l.div`
  background: ${t=>t.$isDarkMode?"#050505cf":"#ffffffd3"};
  color: ${t=>t.$isDarkMode?"white":"#0b0b0b"};
  padding: 12px;
  border-radius: 12px;
  width: 95%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(16px);
  border: 2px solid #ffb36c;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${t=>t.$isClosing?ei:Be} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,ri=l.div`
  display: flex;
  gap: 3px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  padding-bottom: 6px;
`,le=l.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#2a2a2a":t.$isDarkMode?"white":"#2a2a2a"};
  border: 2px solid ${t=>t.$active?"#ffb36c":t.$isDarkMode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"};
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
  }
`,oi=l.button`
  position: absolute;
  top: -10px;
  right: 3px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #ff7b00;
  &:hover {
    color: ${t=>t.$isDarkMode?"#fff":"#000"};
  }
`,li=l.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`,de=l.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,se=l.div`
  padding: 2px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.2)":"rgba(0,0,0,0.04)"};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;l.label`
  font-size: 12px;
  color: #ffb36c;
  font-weight: bold;
  display: block;
`;var u=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
  border-radius: 7px;
  label {
    font-size: 13px;
    color: ${t=>t.$isDarkMode?"rgb(255, 255, 255)":"rgb(0, 0, 0)"};
  }
`,di=l.div`
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,pe=l.div`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
  padding: 4px 0;
  border-bottom: 1px solid
    ${t=>t.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  &:last-child {
    border-bottom: none;
  }
`,si=C`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`,pi=l.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
  height: 14px;
  margin-left: 8px;
`,F=l.div`
  width: 2px;
  background: #ffb36c;
  border-radius: 1px;
  animation: ${si} ${t=>t.$dur}s ease-in-out infinite;
  animation-delay: ${t=>t.$delay}s;
`,fe=()=>(0,n.jsxs)(pi,{children:[(0,n.jsx)(F,{$dur:.6,$delay:0}),(0,n.jsx)(F,{$dur:.8,$delay:.2}),(0,n.jsx)(F,{$dur:.7,$delay:.1})]}),fi=l.span`
  font-size: 12px;
  color: ${t=>t.$error?"#ff4d4d":t.$isDarkMode?"#f9f9f9":"#030303"};
  min-width: 30px;
  text-align: right;
`,W=l.div`
  position: relative;
  width: 34px;
  height: 20px;
  background: ${t=>t.$active?"#ffb36c":"#555"};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${t=>t.$active?"16px":"2px"};
    transition: 0.3s;
  }
`,xe=l.button`
  background: ${t=>t.$active?"#ffb36c":t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"};
  color: ${t=>t.$active?"#2a2a2a":t.$isDarkMode?"white":"#2a2a2a"};
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
  min-width: auto;
  font-size: 11px;
  animation: ${ni} 0.4s ease-out both;
  animation-delay: ${t=>t.$index%10*.05}s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 6px;
    height: 20px;
  }
`,xi=l.input`
  display: none;
`,b=l.button`
  color: #2a2a2a;
  background: rgb(251, 226, 0);
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`,ci=l.input`
  background: transparent;
  border: none;
  color: ${t=>t.$isDarkMode?"white":"#010101"};
  padding: 6px;
  border-radius: 4px;
  font-size: 13px;
  flex: 1;
  box-sizing: border-box;
  min-width: 0;
  &::placeholder {
    color: ${t=>t.$isDarkMode?"white":"#010101"};
  }
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px;
  }
`,hi=l.div`
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.02)"};
  border: 1px solid #ffb36c;
  border-radius: 4px;
  padding: 3px 6px;
  @media (max-width: 480px) {
    gap: 3px;
    padding: 1px 3px;
  }
`,ce=l.button`
  background: ${t=>t.$isDarkMode?"rgba(255,179,108,0.2)":"rgba(255,179,108,0.15)"};
  border: 1px solid #ffb36c;
  color: #ffb36c;
  padding: 3px 6px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 2px 4px;
    height: 20px;
  }
`,he=l.span`
  font-size: 11px;
  font-weight: bold;
  min-width: 12px;
  text-align: center;
  color: ${t=>t.$isDarkMode?"white":"#2a2a2a"};
`,ui=l.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"};
  padding: 2px 6px;
  border-radius: 6px;

  @media (max-width: 480px) {
    gap: 2px;
    padding: 1px 4px;
    scale: 0.9;
    transform-origin: right center;
  }
`,bi=l.input`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.3)":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  font-size: 12px;
  margin-bottom: 3px;
  outline: none;
`,gi=l.select`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"rgb(0, 0, 0)":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#030303"};
  font-size: 12px;
  outline: none;
  cursor: pointer;
`,Si=({sfxVolume:t=.2,setSfxVolume:ue,onClose:be,bgMusicEnabled:S,setBgMusicEnabled:ge,autoMuteBgMusic:U,setAutoMuteBgMusic:me,lockFiltersInFs:K,setLockFiltersInFs:we,bgMusicSource:g,setBgMusicSource:f,bgMusicVolume:P,setBgMusicVolume:ye,bgMusicSpeed:mi,setBgMusicSpeed:wi,customBgTracks:s,setCustomBgTracks:m,bgMusicMode:w,setBgMusicMode:$e,bgMusicShuffle:G,setBgMusicShuffle:ve,libraryBgSettings:y={},setLibraryBgSettings:J=()=>{},setActiveBgTrackId:h=()=>{},onResetBgPosition:je=()=>{},isDarkMode:o,bgAudioRef:A,bgAudioRef2:O})=>{const[Y,Ce]=(0,p.useState)(!1),[I,T]=(0,p.useState)("custom"),H=(0,p.useRef)(null),L=(0,p.useRef)(null),[_,Se]=(0,p.useState)(""),[k,_e]=(0,p.useState)("default"),[z,Q]=(0,p.useState)(()=>{if(typeof window>"u")return[];try{const e=window.localStorage.getItem("bg_music_downloaded_tracks");return e?JSON.parse(e):[]}catch{return[]}}),[D,M]=(0,p.useState)(()=>Ze()),[E,$]=(0,p.useState)({}),[X,Z]=(0,p.useState)(0),[V,ke]=(0,p.useState)(0);(0,p.useEffect)(()=>{typeof window<"u"&&(window.localStorage.setItem("bg_music_downloaded_tracks",JSON.stringify(z)),Ve(D))},[z,D]);const v=(e,a)=>{Q(i=>i.some(r=>String(r.id)===String(e)&&r.file===a)?i:[...i,{id:e,file:a,name:""}]),M(i=>i.filter(r=>String(r)!==String(e)))},ze=e=>{const a=e.file,i=re(a),r=i||z.some(x=>x.file===a&&String(x.id)===String(e.id)),d=D.includes(String(e.id));return{isBase:i,downloaded:r&&!d,softDeleted:d,available:i||r&&!d}},B=async e=>{if(!("caches"in window)){f(e.file),h(e.id),v(e.id,e.file);return}try{const a=await caches.open(oe);if(await a.match(e.file)){f(e.file),h(e.id),v(e.id,e.file),$(c=>({...c,[e.id]:100})),M(c=>c.filter(R=>String(R)!==String(e.id)));return}$(c=>({...c,[e.id]:0}));const i=await fetch(e.file);if(!i.ok)throw new Error("Fetch failed");const r=i.body?.getReader();if(!r){await a.put(e.file,i.clone()),f(e.file),h(e.id),v(e.id,e.file);return}const d=Number(i.headers.get("Content-Length"))||0;let x=0;const te=[];for(;;){const{done:c,value:R}=await r.read();if(c)break;if(te.push(R),x+=R.length,d>0){const Fe=Math.min(100,Math.round(x/d*100));$(Ue=>({...Ue,[e.id]:Fe}))}}const Ne=new Blob(te),qe=new Response(Ne,{headers:{"Content-Type":i.headers.get("Content-Type")||"audio/mpeg"}});await a.put(e.file,qe),f(e.file),h(e.id),v(e.id,e.file),$(c=>({...c,[e.id]:100}))}catch(a){console.error("Audio cache download failed:",a),f(e.file),h(e.id),v(e.id,e.file),$(i=>({...i,[e.id]:0}))}},De=async e=>{if(!re(e.file)&&window.confirm(`М'яке видалення: файл ${e.text||e.author||"трека"} залишиться в Cache API на кілька сеансів, але зникне з локального списку. Продовжити?`)&&(Q(a=>a.filter(i=>!(String(i.id)===String(e.id)&&i.file===e.file))),M(a=>a.includes(String(e.id))?a:[...a,String(e.id)]),g===e.file&&(f(j[0]?.file||"/assets/turkeys-CKqvNzQ4.mp3"),h(j[0]?.id||null)),typeof window<"u"&&"caches"in window)){const a=await caches.open(oe),i=await a.match(e.file);i&&setTimeout(async()=>{try{await a.put(e.file,new Response(i.body,{headers:i.headers}))}catch{}},0)}};(0,p.useEffect)(()=>{let e;const a=()=>{const i=A?.current,r=O?.current;let d=i;i&&r&&(!r.paused&&r.volume>=i.volume?d=r:!i.paused&&i.volume>=r.volume&&(d=i)),d&&(Z(d.currentTime||0),ke(d.duration||0)),e=requestAnimationFrame(a)};return a(),()=>cancelAnimationFrame(e)},[A,O]);const Re=e=>{const a=parseFloat(e.target.value),i=A?.current,r=O?.current;let d=i;i&&r&&(!r.paused&&r.volume>=i.volume?d=r:!i.paused&&i.volume>=r.volume&&(d=i)),d&&(d.currentTime=a,Z(a))},ee=e=>!e||isNaN(e)?"0:00":`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,We=(0,p.useMemo)(()=>{let e=Ye.map(i=>{const r=ae[i.audio]||"/assets/turkeys-CKqvNzQ4.mp3",d=ze({id:i.id,file:r,text:i.text,author:i.author});return{id:i.id,name:i.text?`${i.text} - ${i.author}`:i.author,file:r,image:ae[i.image],...d}});_&&(e=e.filter(i=>i.name.toLowerCase().includes(_.toLowerCase()))),k==="az"?e.sort((i,r)=>i.name.localeCompare(r.name,"uk")):k==="za"&&e.sort((i,r)=>r.name.localeCompare(i.name,"uk"));const a=e.filter(i=>!j.some(r=>r.id===i.id));return[...j.map(i=>({id:i.id,name:i.name,file:i.file,image:null,isBase:!0,downloaded:!0,softDeleted:!1,available:!0})),...a].slice(0,28)},[_,k,z,D,g]),N=e=>e?e.trim().split(/\s+/).filter(Boolean).length:0,Ae=e=>{L.current=e,H.current.click()},Oe=e=>{const a=Array.from({length:7},(i,r)=>(s||[])[r]||null);a[e]=null,m(a)},ie=()=>{Ce(!0),setTimeout(be,500)},Ie=e=>{const a=e.target.files[0];if(a&&L.current!==null){if(a.size>15728640){alert("Файл занадто великий! Максимум 15 МБ.");return}const i=new Audio(URL.createObjectURL(a));i.onloadedmetadata=()=>{if(i.duration>300){alert("Мелодія занадто довга! Максимум 5 хвилин."),URL.revokeObjectURL(i.src);return}const r=Array.from({length:7},(d,x)=>(s||[])[x]||null);r[L.current]={name:a.name.split(".")[0].substring(0,30),file:a,repeats:1,enabled:!0},m(r),f(a),h(null),URL.revokeObjectURL(i.src)}}},Le=(e,a)=>{if(N(a)>30){alert("Максимум 30 слів у назві!");return}const i=Array.from({length:7},(r,d)=>(s||[])[d]||null);i[e]||(i[e]={name:"",file:null,repeats:1,enabled:!0}),i[e]={...i[e],name:a},m(i)},ne=(e,a)=>{const i=Array.from({length:7},(d,x)=>(s||[])[x]||null);if(!i[e])return;const r=Math.max(1,Math.min(3,(i[e].repeats||1)+a));i[e]={...i[e],repeats:r},m(i)},Me=e=>{const a=Array.from({length:7},(i,r)=>(s||[])[r]||null);a[e]&&(a[e]={...a[e],enabled:!a[e].enabled},m(a))},q=(e,a,i)=>{if(!J)return;const r=y&&y[e]||{repeats:1,enabled:!0};J({...y,[e]:{...r,[a]:i}})},Ee=()=>{const e=w==="loop"?"order":"loop";$e(e),e==="loop"&&m(Array.from({length:7},(a,i)=>(s||[])[i]||null).map(a=>a?{...a,repeats:1,enabled:!0}:null))};return(0,n.jsx)(ti,{$isClosing:Y,onClick:ie,$isDarkMode:o,children:(0,n.jsxs)(ai,{$isClosing:Y,onClick:e=>e.stopPropagation(),$isDarkMode:o,children:[(0,n.jsx)(oi,{onClick:ie,$isDarkMode:o,children:"×"}),(0,n.jsx)("h3",{style:{textAlign:"center",fontSize:"20px",color:"#db6a00",fontWeight:"900"},children:"Інші опції"}),(0,n.jsxs)(li,{children:[(0,n.jsxs)(de,{children:[(0,n.jsxs)(ri,{$isDarkMode:o,children:[(0,n.jsx)(le,{$active:I==="custom",$isDarkMode:o,onClick:()=>T("custom"),children:"Власні (до 7 треків)"}),(0,n.jsx)(le,{$active:I==="library",$isDarkMode:o,onClick:()=>T("library"),children:"Бібліотека (24 треки)"})]}),I==="custom"?(0,n.jsxs)(se,{$isDarkMode:o,children:[(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:[0,1,2,3,4,5,6].map(e=>(0,n.jsxs)(pe,{$isDarkMode:o,children:[(0,n.jsx)("div",{style:{width:"30px",height:"30px",borderRadius:"6px",border:o?"1px solid #555":"1px solid #ccc",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px",flexShrink:0},children:(0,n.jsx)(Pe,{})}),(0,n.jsxs)(hi,{$isDarkMode:o,children:[(0,n.jsx)(ci,{$isDarkMode:o,placeholder:"Підбери назву своєї мелодії",value:s[e]?.name||"",onChange:a=>Le(e,a.target.value)}),(0,n.jsxs)(fi,{$error:N(s[e]?.name)>30,$isDarkMode:o,style:{minWidth:"35px",textAlign:"right"},children:[N(s[e]?.name),"/30"]}),(0,n.jsx)(ce,{$isDarkMode:o,onClick:()=>Ae(e),title:s[e]?"Змінити трек":"Додати трек",children:s[e]?"Зміниш?":"Додавай"}),s[e]&&(0,n.jsx)(ce,{$isDarkMode:o,onClick:()=>Oe(e),title:"Видалити трек",children:"✕"}),(0,n.jsx)(xe,{$active:g===s[e]?.file,onClick:()=>{if(!s[e]?.file){alert("Вставте трек, щоб його слухати!");return}f(s[e].file)},$isDarkMode:o,$index:e,disabled:!s[e]?.file,title:s[e]?.file?"Слухати трек":"Додайте трек спочатку",children:s[e]?.file&&g===s[e].file?S?(0,n.jsx)(fe,{}):"⏸":"▶"})]}),w==="order"&&s?.[e]&&(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",background:o?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)",padding:"2px",borderRadius:"6px"},children:[(0,n.jsx)(b,{onClick:()=>ne(e,-1),style:{padding:"2px 5px",minWidth:"20px"},children:"◀"}),(0,n.jsx)(he,{$isDarkMode:o,children:s[e]?.repeats||1}),(0,n.jsx)(b,{onClick:()=>ne(e,1),style:{padding:"2px 5px",minWidth:"20px"},children:"▶"}),(0,n.jsx)("input",{type:"checkbox",checked:s[e]?.enabled!==!1,onChange:()=>Me(e),title:"Включити в чергу"})]})]},e))}),(0,n.jsx)(xi,{type:"file",ref:H,accept:"audio/*",onChange:Ie})]}):(0,n.jsxs)(se,{$isDarkMode:o,children:[(0,n.jsx)(bi,{$isDarkMode:o,placeholder:"Пошук у бібліотеці...",value:_,onChange:e=>Se(e.target.value)}),(0,n.jsxs)(gi,{$isDarkMode:o,value:k,onChange:e=>_e(e.target.value),children:[(0,n.jsx)("option",{value:"default",children:"Те що зараз (стандартно)"}),(0,n.jsx)("option",{value:"az",children:"Алфавіт (А-Я)"}),(0,n.jsx)("option",{value:"za",children:"Алфавіт (Я-А)"})]}),(0,n.jsx)(di,{style:{width:"100%",boxSizing:"border-box"},children:We.map((e,a)=>{const i=y&&y[e.id]||{repeats:1,enabled:!0};return(0,n.jsxs)(pe,{$isDarkMode:o,style:{flexWrap:"nowrap",width:"100%",minWidth:0,boxSizing:"border-box"},children:[e.image?(0,n.jsx)("img",{src:e.image,alt:"",style:{width:"30px",height:"30px",borderRadius:"6px",objectFit:"cover",flexShrink:0}}):(0,n.jsx)("div",{style:{width:"30px",height:"30px",borderRadius:"6px",background:o?"#333":"#eee",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",flexShrink:0},children:"🎵"}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0},children:[(0,n.jsxs)(xe,{$isDarkMode:o,$active:g===e.file,onClick:()=>{e.isBase||e.downloaded||!e.softDeleted?(f(e.file),h(e.id)):B({id:e.id,file:e.file,text:e.name,author:e.name})},$index:a,style:{flex:"1 1 auto",width:"100%",maxWidth:"100%",textAlign:"left",padding:"6px 8px",display:"flex",justifyContent:"flex-start",opacity:i.enabled?1:.5,minWidth:0,overflow:"hidden"},children:[(0,n.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,minWidth:0},children:e.name}),g===e.file&&S&&(0,n.jsx)(fe,{})]}),E[e.id]>0&&E[e.id]<100&&(0,n.jsx)("div",{style:{height:"4px",background:"rgba(255,179,108,0.2)",borderRadius:"999px",overflow:"hidden",marginTop:"4px"},children:(0,n.jsx)("div",{style:{height:"100%",width:`${E[e.id]}%`,background:"#ffb36c",transition:"width 0.2s ease"}})})]}),!e.isBase&&(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:e.softDeleted||!e.downloaded&&!e.isBase?(0,n.jsx)(b,{onClick:()=>B({id:e.id,file:e.file,text:e.name,author:e.name}),style:{padding:"3px 8px",minWidth:"74px",background:"#ffb36c"},children:"Завантажити"}):(0,n.jsx)(b,{onClick:()=>De({id:e.id,file:e.file,text:e.name,author:e.name}),style:{padding:"3px 8px",minWidth:"74px",background:"#ff7b7b"},children:"Видалити"})}),w==="order"&&(0,n.jsxs)(ui,{$isDarkMode:o,children:[(0,n.jsx)(b,{onClick:()=>q(e.id,"repeats",Math.max(1,i.repeats-1)),style:{padding:"1px 4px",minWidth:"16px"},children:"◀"}),(0,n.jsx)(he,{$isDarkMode:o,children:i.repeats}),(0,n.jsx)(b,{onClick:()=>q(e.id,"repeats",Math.min(3,i.repeats+1)),style:{padding:"1px 4px",minWidth:"16px"},children:"▶"}),(0,n.jsx)("input",{type:"checkbox",checked:i.enabled,onChange:r=>q(e.id,"enabled",r.target.checked),title:"Включити в чергу"})]})]},e.id)})})]})]}),(0,n.jsxs)(de,{children:[(0,n.jsxs)(u,{$isDarkMode:o,children:[(0,n.jsx)("label",{children:"Фонова музика сайту"}),(0,n.jsx)(W,{$active:S,onClick:()=>ge(!S)})]}),(0,n.jsxs)(u,{$isDarkMode:o,children:[(0,n.jsx)("label",{children:"Режим відтворення"}),(0,n.jsx)("div",{style:{display:"flex",gap:"5px"},children:(0,n.jsx)(b,{$active:w==="loop",onClick:Ee,style:{background:w==="loop"?"#ffb36c":"#555",width:"80px"},children:w==="loop"?"Повтор":"По черзі"})})]}),(0,n.jsxs)(u,{$isDarkMode:o,children:[(0,n.jsx)("label",{children:"Випадковий порядок (Shuffle)"}),(0,n.jsx)(W,{$active:G,onClick:()=>ve(!G)})]}),(0,n.jsxs)(u,{$isDarkMode:o,children:[(0,n.jsxs)("label",{children:["Гучність музики: ",Math.round(P*100),"%"]}),(0,n.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:P,onChange:e=>ye(parseFloat(e.target.value)),style:{cursor:"pointer",accentColor:"#ffb36c",width:"100px"}})]}),(0,n.jsxs)(u,{$isDarkMode:o,children:[(0,n.jsxs)("label",{children:["Гучність звуків кнопок: ",Math.round(t*100),"%"]}),(0,n.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:t,onChange:e=>ue(parseFloat(e.target.value)),style:{cursor:"pointer",accentColor:"#ffb36c",width:"100px"}})]}),(0,n.jsxs)(u,{$isDarkMode:o,style:{flexDirection:"column",alignItems:"stretch",gap:"10px"},children:[(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)("label",{children:"Позиція музики"}),(0,n.jsxs)("div",{style:{fontSize:"12px",color:o?"#ccc":"#555"},children:[ee(X)," / ",ee(V)]})]}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,n.jsx)("input",{type:"range",min:"0",max:V||100,step:"0.1",value:X,onChange:Re,style:{flex:1,cursor:"pointer",accentColor:"#ffb36c"}}),(0,n.jsx)(b,{onClick:je,style:{fontSize:"11px",padding:"5px 10px",minWidth:"max-content"},children:"⏮ Спочатку"})]})]}),(0,n.jsxs)(u,{$isDarkMode:o,children:[(0,n.jsx)("label",{children:"Вимкнути фонову музику в плеєрі(додамо скоро)"}),(0,n.jsx)(W,{$active:U,onClick:()=>me(!U)})]}),(0,n.jsxs)(u,{$isDarkMode:o,children:[(0,n.jsx)("label",{children:"Блокувати фільтри в плеєрі"}),(0,n.jsx)(W,{$active:K,onClick:()=>we(!K)})]})]})]})]})})};export{Si as default};

//# sourceMappingURL=OtherOptionsModal-B6TJy_Ne.js.map