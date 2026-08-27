import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,n,o as r,t as i}from"./jsx-runtime-CJi9uaNB.js";import{t as a}from"./songAiKnowledge-CIkN1ZwA.js";import{d as o,f as s,l as c,n as ee,p as l}from"./index-CbNTxoaW.js";var u=e(r()),d=[{id:1,name:`Динофроз`,file:l,type:`base`},{id:126,name:`Monody`,file:s,type:`base`},{id:285,name:`Unity`,file:o,type:`base`}],te=new Set(d.map(e=>e.file)),f=e=>!!e&&te.has(e),ne=`bg-audio-cache`,re=()=>{if(typeof window>`u`)return[];try{let e=window.localStorage.getItem(`bg_music_soft_deleted_ids`);return e?JSON.parse(e):[]}catch{return[]}},ie=(e=[])=>{if(!(typeof window>`u`))try{window.localStorage.setItem(`bg_music_soft_deleted_ids`,JSON.stringify(Array.from(new Set(e))))}catch{}},p=i(),m=n`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,h=n`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,g=n`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,_=n`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`,ae=t.div`
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
  animation: ${e=>e.$isClosing?g:`none`} 0.5s ease-out
    forwards;
`,oe=t.div`
  background: ${e=>e.$isDarkMode?`#050505cf`:`#ffffffd3`};
  color: ${e=>e.$isDarkMode?`white`:`#0b0b0b`};
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
  animation: ${e=>e.$isClosing?h:m} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,se=t.div`
  display: flex;
  gap: 3px;
  border-bottom: 1px solid ${e=>e.$isDarkMode?`rgba(255,255,255,0.1)`:`rgba(0,0,0,0.1)`};
  padding-bottom: 6px;
`,v=t.button`
  background: ${e=>e.$active?`#ffb36c`:`transparent`};
  color: ${e=>e.$active?`#2a2a2a`:e.$isDarkMode?`white`:`#2a2a2a`};
  border: 2px solid ${e=>e.$active?`#ffb36c`:e.$isDarkMode?`rgba(255,255,255,0.2)`:`rgba(0,0,0,0.2)`};
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
`,ce=t.button`
  position: absolute;
  top: -10px;
  right: 3px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #ff7b00;
  &:hover {
    color: ${e=>e.$isDarkMode?`#fff`:`#000`};
  }
`,le=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`,y=t.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,b=t.div`
  padding: 2px;
  background: ${e=>e.$isDarkMode?`rgba(0,0,0,0.2)`:`rgba(0,0,0,0.04)`};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;t.label`
  font-size: 12px;
  color: #ffb36c;
  font-weight: bold;
  display: block;
`;var x=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.05)`};
  border-radius: 7px;
  label {
    font-size: 13px;
    color: ${e=>e.$isDarkMode?`rgb(255, 255, 255)`:`rgb(0, 0, 0)`};
  }
`,ue=t.div`
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
`,S=t.div`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
  padding: 4px 0;
  border-bottom: 1px solid
    ${e=>e.$isDarkMode?`rgba(255,255,255,0.05)`:`rgba(0,0,0,0.05)`};
  &:last-child {
    border-bottom: none;
  }
`,de=n`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`,fe=t.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
  height: 14px;
  margin-left: 8px;
`,C=t.div`
  width: 2px;
  background: #ffb36c;
  border-radius: 1px;
  animation: ${de} ${e=>e.$dur}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
`,w=()=>(0,p.jsxs)(fe,{children:[(0,p.jsx)(C,{$dur:.6,$delay:0}),(0,p.jsx)(C,{$dur:.8,$delay:.2}),(0,p.jsx)(C,{$dur:.7,$delay:.1})]}),pe=t.span`
  font-size: 12px;
  color: ${e=>e.$error?`#ff4d4d`:e.$isDarkMode?`#f9f9f9`:`#030303`};
  min-width: 30px;
  text-align: right;
`,T=t.div`
  position: relative;
  width: 34px;
  height: 20px;
  background: ${e=>e.$active?`#ffb36c`:`#555`};
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
    left: ${e=>e.$active?`16px`:`2px`};
    transition: 0.3s;
  }
`,E=t.button`
  background: ${e=>e.$active?`#ffb36c`:e.$isDarkMode?`rgba(255,255,255,0.1)`:`rgba(0,0,0,0.05)`};
  color: ${e=>e.$active?`#2a2a2a`:e.$isDarkMode?`white`:`#2a2a2a`};
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
  min-width: auto;
  font-size: 11px;
  animation: ${_} 0.4s ease-out both;
  animation-delay: ${e=>e.$index%10*.05}s;
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
`,me=t.input`
  display: none;
`,D=t.button`
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
`,he=t.input`
  background: transparent;
  border: none;
  color: ${e=>e.$isDarkMode?`white`:`#010101`};
  padding: 6px;
  border-radius: 4px;
  font-size: 13px;
  flex: 1;
  box-sizing: border-box;
  min-width: 0;
  &::placeholder {
    color: ${e=>e.$isDarkMode?`white`:`#010101`};
  }
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px;
  }
`,ge=t.div`
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${e=>e.$isDarkMode?`rgba(0,0,0,0.1)`:`rgba(0,0,0,0.02)`};
  border: 1px solid #ffb36c;
  border-radius: 4px;
  padding: 3px 6px;
  @media (max-width: 480px) {
    gap: 3px;
    padding: 1px 3px;
  }
`,_e=t.button`
  background: ${e=>e.$isDarkMode?`rgba(255,179,108,0.2)`:`rgba(255,179,108,0.15)`};
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
`,ve=t.span`
  font-size: 11px;
  font-weight: bold;
  min-width: 12px;
  text-align: center;
  color: ${e=>e.$isDarkMode?`white`:`#2a2a2a`};
`,ye=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${e=>e.$isDarkMode?`rgba(255,255,255,0.1)`:`rgba(0,0,0,0.05)`};
  padding: 2px 6px;
  border-radius: 6px;

  @media (max-width: 480px) {
    gap: 2px;
    padding: 1px 4px;
    scale: 0.9;
    transform-origin: right center;
  }
`,be=t.input`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ffb36c;
  background: ${e=>e.$isDarkMode?`rgba(0,0,0,0.3)`:`#fff`};
  color: ${e=>e.$isDarkMode?`#fff`:`#333`};
  font-size: 12px;
  margin-bottom: 3px;
  outline: none;
`,xe=t.select`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${e=>e.$isDarkMode?`rgb(0, 0, 0)`:`#fff`};
  color: ${e=>e.$isDarkMode?`#fff`:`#030303`};
  font-size: 12px;
  outline: none;
  cursor: pointer;
`,O=({sfxVolume:e=.2,setSfxVolume:t,onClose:n,bgMusicEnabled:r,setBgMusicEnabled:i,autoMuteBgMusic:o,setAutoMuteBgMusic:s,lockFiltersInFs:l,setLockFiltersInFs:te,bgMusicSource:m,setBgMusicSource:h,bgMusicVolume:g,setBgMusicVolume:_,bgMusicSpeed:de,setBgMusicSpeed:fe,customBgTracks:C,setCustomBgTracks:O,bgMusicMode:k,setBgMusicMode:Se,bgMusicShuffle:A,setBgMusicShuffle:Ce,libraryBgSettings:j={},setLibraryBgSettings:M=()=>{},setActiveBgTrackId:N=()=>{},onResetBgPosition:we=()=>{},isDarkMode:P,bgAudioRef:F,bgAudioRef2:I})=>{let[Te,Ee]=(0,u.useState)(!1),[L,R]=(0,u.useState)(`custom`),z=(0,u.useRef)(null),B=(0,u.useRef)(null),[V,De]=(0,u.useState)(``),[H,Oe]=(0,u.useState)(`default`),[U,W]=(0,u.useState)(()=>{if(typeof window>`u`)return[];try{let e=window.localStorage.getItem(`bg_music_downloaded_tracks`);return e?JSON.parse(e):[]}catch{return[]}}),[G,K]=(0,u.useState)(()=>re()),[q,J]=(0,u.useState)({}),[Y,ke]=(0,u.useState)(0),[X,Ae]=(0,u.useState)(0);(0,u.useEffect)(()=>{typeof window<`u`&&(window.localStorage.setItem(`bg_music_downloaded_tracks`,JSON.stringify(U)),ie(G))},[U,G]);let Z=(e,t)=>{W(n=>n.some(n=>String(n.id)===String(e)&&n.file===t)?n:[...n,{id:e,file:t,name:``}]),K(t=>t.filter(t=>String(t)!==String(e)))},je=e=>{let t=e.file,n=f(t),r=n||U.some(n=>n.file===t&&String(n.id)===String(e.id)),i=G.includes(String(e.id));return{isBase:n,downloaded:r&&!i,softDeleted:i,available:n||r&&!i}},Me=async e=>{if(!(`caches`in window)){h(e.file),N(e.id),Z(e.id,e.file);return}try{let t=await caches.open(ne);if(await t.match(e.file)){h(e.file),N(e.id),Z(e.id,e.file),J(t=>({...t,[e.id]:100})),K(t=>t.filter(t=>String(t)!==String(e.id)));return}J(t=>({...t,[e.id]:0}));let n=await fetch(e.file);if(!n.ok)throw Error(`Fetch failed`);let r=n.body?.getReader();if(!r){await t.put(e.file,n.clone()),h(e.file),N(e.id),Z(e.id,e.file);return}let i=Number(n.headers.get(`Content-Length`))||0,a=0,o=[];for(;;){let{done:t,value:n}=await r.read();if(t)break;if(o.push(n),a+=n.length,i>0){let t=Math.min(100,Math.round(a/i*100));J(n=>({...n,[e.id]:t}))}}let s=new Blob(o),c=new Response(s,{headers:{"Content-Type":n.headers.get(`Content-Type`)||`audio/mpeg`}});await t.put(e.file,c),h(e.file),N(e.id),Z(e.id,e.file),J(t=>({...t,[e.id]:100}))}catch(t){console.error(`Audio cache download failed:`,t),h(e.file),N(e.id),Z(e.id,e.file),J(t=>({...t,[e.id]:0}))}},Ne=async e=>{if(!f(e.file)&&window.confirm(`М'яке видалення: файл ${e.text||e.author||`трека`} залишиться в Cache API на кілька сеансів, але зникне з локального списку. Продовжити?`)&&(W(t=>t.filter(t=>String(t.id)!==String(e.id)||t.file!==e.file)),K(t=>t.includes(String(e.id))?t:[...t,String(e.id)]),m===e.file&&(h(d[0]?.file||`/assets/turkeys-CKqvNzQ4.mp3`),N(d[0]?.id||null)),typeof window<`u`&&`caches`in window)){let t=await caches.open(ne),n=await t.match(e.file);n&&setTimeout(async()=>{try{await t.put(e.file,new Response(n.body,{headers:n.headers}))}catch{}},0)}};(0,u.useEffect)(()=>{let e,t=()=>{let n=F?.current,r=I?.current,i=n;n&&r&&(!r.paused&&r.volume>=n.volume?i=r:!n.paused&&n.volume>=r.volume&&(i=n)),i&&(ke(i.currentTime||0),Ae(i.duration||0)),e=requestAnimationFrame(t)};return t(),()=>cancelAnimationFrame(e)},[F,I]);let Pe=e=>{let t=parseFloat(e.target.value),n=F?.current,r=I?.current,i=n;n&&r&&(!r.paused&&r.volume>=n.volume?i=r:!n.paused&&n.volume>=r.volume&&(i=n)),i&&(i.currentTime=t,ke(t))},Fe=e=>!e||isNaN(e)?`0:00`:`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`,Ie=(0,u.useMemo)(()=>{let e=a.map(e=>{let t=c[e.audio]||`/assets/turkeys-CKqvNzQ4.mp3`,n=je({id:e.id,file:t,text:e.text,author:e.author});return{id:e.id,name:e.text?`${e.text} - ${e.author}`:e.author,file:t,image:c[e.image],...n}});V&&(e=e.filter(e=>e.name.toLowerCase().includes(V.toLowerCase()))),H===`az`?e.sort((e,t)=>e.name.localeCompare(t.name,`uk`)):H===`za`&&e.sort((e,t)=>t.name.localeCompare(e.name,`uk`));let t=e.filter(e=>!d.some(t=>t.id===e.id));return[...d.map(e=>({id:e.id,name:e.name,file:e.file,image:null,isBase:!0,downloaded:!0,softDeleted:!1,available:!0})),...t].slice(0,28)},[V,H,U,G,m]),Q=e=>e?e.trim().split(/\s+/).filter(Boolean).length:0,Le=e=>{B.current=e,z.current.click()},Re=e=>{let t=Array.from({length:7},(e,t)=>(C||[])[t]||null);t[e]=null,O(t)},ze=()=>{Ee(!0),setTimeout(n,500)},Be=e=>{let t=e.target.files[0];if(t&&B.current!==null){if(t.size>15728640){alert(`Файл занадто великий! Максимум 15 МБ.`);return}let e=new Audio(URL.createObjectURL(t));e.onloadedmetadata=()=>{if(e.duration>300){alert(`Мелодія занадто довга! Максимум 5 хвилин.`),URL.revokeObjectURL(e.src);return}let n=Array.from({length:7},(e,t)=>(C||[])[t]||null);n[B.current]={name:t.name.split(`.`)[0].substring(0,30),file:t,repeats:1,enabled:!0},O(n),h(t),N(null),URL.revokeObjectURL(e.src)}}},Ve=(e,t)=>{if(Q(t)>30){alert(`Максимум 30 слів у назві!`);return}let n=Array.from({length:7},(e,t)=>(C||[])[t]||null);n[e]||(n[e]={name:``,file:null,repeats:1,enabled:!0}),n[e]={...n[e],name:t},O(n)},He=(e,t)=>{let n=Array.from({length:7},(e,t)=>(C||[])[t]||null);if(!n[e])return;let r=Math.max(1,Math.min(3,(n[e].repeats||1)+t));n[e]={...n[e],repeats:r},O(n)},Ue=e=>{let t=Array.from({length:7},(e,t)=>(C||[])[t]||null);t[e]&&(t[e]={...t[e],enabled:!t[e].enabled},O(t))},$=(e,t,n)=>{if(!M)return;let r=j&&j[e]||{repeats:1,enabled:!0};M({...j,[e]:{...r,[t]:n}})};return(0,p.jsx)(ae,{$isClosing:Te,onClick:ze,$isDarkMode:P,children:(0,p.jsxs)(oe,{$isClosing:Te,onClick:e=>e.stopPropagation(),$isDarkMode:P,children:[(0,p.jsx)(ce,{onClick:ze,$isDarkMode:P,children:`×`}),(0,p.jsx)(`h3`,{style:{textAlign:`center`,fontSize:`20px`,color:`#db6a00`,fontWeight:`900`},children:`Інші опції`}),(0,p.jsxs)(le,{children:[(0,p.jsxs)(y,{children:[(0,p.jsxs)(se,{$isDarkMode:P,children:[(0,p.jsx)(v,{$active:L===`custom`,$isDarkMode:P,onClick:()=>R(`custom`),children:`Власні (до 7 треків)`}),(0,p.jsx)(v,{$active:L===`library`,$isDarkMode:P,onClick:()=>R(`library`),children:`Бібліотека (24 треки)`})]}),L===`custom`?(0,p.jsxs)(b,{$isDarkMode:P,children:[(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[0,1,2,3,4,5,6].map(e=>(0,p.jsxs)(S,{$isDarkMode:P,children:[(0,p.jsx)(`div`,{style:{width:`30px`,height:`30px`,borderRadius:`6px`,border:P?`1px solid #555`:`1px solid #ccc`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`21px`,flexShrink:0},children:(0,p.jsx)(ee,{})}),(0,p.jsxs)(ge,{$isDarkMode:P,children:[(0,p.jsx)(he,{$isDarkMode:P,placeholder:`Підбери назву своєї мелодії`,value:C[e]?.name||``,onChange:t=>Ve(e,t.target.value)}),(0,p.jsxs)(pe,{$error:Q(C[e]?.name)>30,$isDarkMode:P,style:{minWidth:`35px`,textAlign:`right`},children:[Q(C[e]?.name),`/30`]}),(0,p.jsx)(_e,{$isDarkMode:P,onClick:()=>Le(e),title:C[e]?`Змінити трек`:`Додати трек`,children:C[e]?`Зміниш?`:`Додавай`}),C[e]&&(0,p.jsx)(_e,{$isDarkMode:P,onClick:()=>Re(e),title:`Видалити трек`,children:`✕`}),(0,p.jsx)(E,{$active:m===C[e]?.file,onClick:()=>{if(!C[e]?.file){alert(`Вставте трек, щоб його слухати!`);return}h(C[e].file)},$isDarkMode:P,$index:e,disabled:!C[e]?.file,title:C[e]?.file?`Слухати трек`:`Додайте трек спочатку`,children:C[e]?.file&&m===C[e].file?r?(0,p.jsx)(w,{}):`⏸`:`▶`})]}),k===`order`&&C?.[e]&&(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`4px`,background:P?`rgba(255,255,255,0.1)`:`rgba(0,0,0,0.05)`,padding:`2px`,borderRadius:`6px`},children:[(0,p.jsx)(D,{onClick:()=>He(e,-1),style:{padding:`2px 5px`,minWidth:`20px`},children:`◀`}),(0,p.jsx)(ve,{$isDarkMode:P,children:C[e]?.repeats||1}),(0,p.jsx)(D,{onClick:()=>He(e,1),style:{padding:`2px 5px`,minWidth:`20px`},children:`▶`}),(0,p.jsx)(`input`,{type:`checkbox`,checked:C[e]?.enabled!==!1,onChange:()=>Ue(e),title:`Включити в чергу`})]})]},e))}),(0,p.jsx)(me,{type:`file`,ref:z,accept:`audio/*`,onChange:Be})]}):(0,p.jsxs)(b,{$isDarkMode:P,children:[(0,p.jsx)(be,{$isDarkMode:P,placeholder:`Пошук у бібліотеці...`,value:V,onChange:e=>De(e.target.value)}),(0,p.jsxs)(xe,{$isDarkMode:P,value:H,onChange:e=>Oe(e.target.value),children:[(0,p.jsx)(`option`,{value:`default`,children:`Те що зараз (стандартно)`}),(0,p.jsx)(`option`,{value:`az`,children:`Алфавіт (А-Я)`}),(0,p.jsx)(`option`,{value:`za`,children:`Алфавіт (Я-А)`})]}),(0,p.jsx)(ue,{style:{width:`100%`,boxSizing:`border-box`},children:Ie.map((e,t)=>{let n=j&&j[e.id]||{repeats:1,enabled:!0};return(0,p.jsxs)(S,{$isDarkMode:P,style:{flexWrap:`nowrap`,width:`100%`,minWidth:0,boxSizing:`border-box`},children:[e.image?(0,p.jsx)(`img`,{src:e.image,alt:``,style:{width:`30px`,height:`30px`,borderRadius:`6px`,objectFit:`cover`,flexShrink:0}}):(0,p.jsx)(`div`,{style:{width:`30px`,height:`30px`,borderRadius:`6px`,background:P?`#333`:`#eee`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`14px`,flexShrink:0},children:`🎵`}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,flex:1,minWidth:0},children:[(0,p.jsxs)(E,{$isDarkMode:P,$active:m===e.file,onClick:()=>{e.isBase||e.downloaded||!e.softDeleted?(h(e.file),N(e.id)):Me({id:e.id,file:e.file,text:e.name,author:e.name})},$index:t,style:{flex:`1 1 auto`,width:`100%`,maxWidth:`100%`,textAlign:`left`,padding:`6px 8px`,display:`flex`,justifyContent:`flex-start`,opacity:n.enabled?1:.5,minWidth:0,overflow:`hidden`},children:[(0,p.jsx)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,flex:1,minWidth:0},children:e.name}),m===e.file&&r&&(0,p.jsx)(w,{})]}),q[e.id]>0&&q[e.id]<100&&(0,p.jsx)(`div`,{style:{height:`4px`,background:`rgba(255,179,108,0.2)`,borderRadius:`999px`,overflow:`hidden`,marginTop:`4px`},children:(0,p.jsx)(`div`,{style:{height:`100%`,width:`${q[e.id]}%`,background:`#ffb36c`,transition:`width 0.2s ease`}})})]}),!e.isBase&&(0,p.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`4px`},children:e.softDeleted||!e.downloaded&&!e.isBase?(0,p.jsx)(D,{onClick:()=>Me({id:e.id,file:e.file,text:e.name,author:e.name}),style:{padding:`3px 8px`,minWidth:`74px`,background:`#ffb36c`},children:`Завантажити`}):(0,p.jsx)(D,{onClick:()=>Ne({id:e.id,file:e.file,text:e.name,author:e.name}),style:{padding:`3px 8px`,minWidth:`74px`,background:`#ff7b7b`},children:`Видалити`})}),k===`order`&&(0,p.jsxs)(ye,{$isDarkMode:P,children:[(0,p.jsx)(D,{onClick:()=>$(e.id,`repeats`,Math.max(1,n.repeats-1)),style:{padding:`1px 4px`,minWidth:`16px`},children:`◀`}),(0,p.jsx)(ve,{$isDarkMode:P,children:n.repeats}),(0,p.jsx)(D,{onClick:()=>$(e.id,`repeats`,Math.min(3,n.repeats+1)),style:{padding:`1px 4px`,minWidth:`16px`},children:`▶`}),(0,p.jsx)(`input`,{type:`checkbox`,checked:n.enabled,onChange:t=>$(e.id,`enabled`,t.target.checked),title:`Включити в чергу`})]})]},e.id)})})]})]}),(0,p.jsxs)(y,{children:[(0,p.jsxs)(x,{$isDarkMode:P,children:[(0,p.jsx)(`label`,{children:`Фонова музика сайту`}),(0,p.jsx)(T,{$active:r,onClick:()=>i(!r)})]}),(0,p.jsxs)(x,{$isDarkMode:P,children:[(0,p.jsx)(`label`,{children:`Режим відтворення`}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`5px`},children:(0,p.jsx)(D,{$active:k===`loop`,onClick:()=>{let e=k===`loop`?`order`:`loop`;Se(e),e===`loop`&&O(Array.from({length:7},(e,t)=>(C||[])[t]||null).map(e=>e?{...e,repeats:1,enabled:!0}:null))},style:{background:k===`loop`?`#ffb36c`:`#555`,width:`80px`},children:k===`loop`?`Повтор`:`По черзі`})})]}),(0,p.jsxs)(x,{$isDarkMode:P,children:[(0,p.jsx)(`label`,{children:`Випадковий порядок (Shuffle)`}),(0,p.jsx)(T,{$active:A,onClick:()=>Ce(!A)})]}),(0,p.jsxs)(x,{$isDarkMode:P,children:[(0,p.jsxs)(`label`,{children:[`Гучність музики: `,Math.round(g*100),`%`]}),(0,p.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,value:g,onChange:e=>_(parseFloat(e.target.value)),style:{cursor:`pointer`,accentColor:`#ffb36c`,width:`100px`}})]}),(0,p.jsxs)(x,{$isDarkMode:P,children:[(0,p.jsxs)(`label`,{children:[`Гучність звуків кнопок: `,Math.round(e*100),`%`]}),(0,p.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,value:e,onChange:e=>t(parseFloat(e.target.value)),style:{cursor:`pointer`,accentColor:`#ffb36c`,width:`100px`}})]}),(0,p.jsxs)(x,{$isDarkMode:P,style:{flexDirection:`column`,alignItems:`stretch`,gap:`10px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,p.jsx)(`label`,{children:`Позиція музики`}),(0,p.jsxs)(`div`,{style:{fontSize:`12px`,color:P?`#ccc`:`#555`},children:[Fe(Y),` / `,Fe(X)]})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,p.jsx)(`input`,{type:`range`,min:`0`,max:X||100,step:`0.1`,value:Y,onChange:Pe,style:{flex:1,cursor:`pointer`,accentColor:`#ffb36c`}}),(0,p.jsx)(D,{onClick:we,style:{fontSize:`11px`,padding:`5px 10px`,minWidth:`max-content`},children:`⏮ Спочатку`})]})]}),(0,p.jsxs)(x,{$isDarkMode:P,children:[(0,p.jsx)(`label`,{children:`Вимкнути фонову музику в плеєрі(додамо скоро)`}),(0,p.jsx)(T,{$active:o,onClick:()=>s(!o)})]}),(0,p.jsxs)(x,{$isDarkMode:P,children:[(0,p.jsx)(`label`,{children:`Блокувати фільтри в плеєрі`}),(0,p.jsx)(T,{$active:l,onClick:()=>te(!l)})]})]})]})]})})};export{O as default};