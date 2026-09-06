const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Prison-B9deyfb7.js","assets/rolldown-runtime-BNNRdYrd.js","assets/vendor-react-DaUcAjuS.js","assets/fog--rpOGuZY.js","assets/Aihelp-D1OvAQZT.js","assets/FanArt-CWPZDi9H.js","assets/ShopModal-Bthlp7W_.js","assets/AchivmentsModal-Bsf3ujIz.js","assets/ClimateMap-CcwZZbec.js","assets/MusicPhoto-B35XPCu5.js","assets/songAiKnowledge-DWostAuJ.js","assets/Modal-BBeOrjW-.js","assets/KatSceneModal--LPaSDxk.js","assets/LoginModal-Dw3f5f5i.js","assets/UserSettingsModal-BacHC5NJ.js","assets/VipModal-4eq14VNK.js","assets/WeatherDetailsModal-BFDiAKYA.js","assets/OtherOptionsModal-B6TJy_Ne.js"])))=>i.map(i=>d[i]);
import{o as za,r as Ki}from"./rolldown-runtime-BNNRdYrd.js";import{$t as Fl,A as Pl,An as ur,B as er,Bn as qr,Bt as $l,Cn as sn,Ct as Ao,D as pr,Dn as Nl,Dt as Io,E as Ol,En as Vl,Et as Bl,F as _l,Fn as Vt,Ft as Hl,Gn as Ul,Gt as Do,Hn as Kl,Ht as $a,I as Na,In as i,It as qi,Jn as Oe,Jt as ql,K as Da,Kn as Wl,Kt as ia,L as Mo,Ln as Gl,Lt as Ro,M as Jl,Mn as Yl,Mt as Zl,N as Xl,Nn as Fe,Nt as Ql,O as ed,On as Wi,Ot as td,Pn as nd,Q as ad,Qt as rd,R as Oa,Rn as od,Rt as id,Sn as sd,St as ld,Tn as dd,Tt as cd,U as ud,Un as pd,Ut as Va,V as zo,Vn as ar,Vt as fd,Wn as fr,Wt as gd,X as Lo,Xn as md,Xt as hd,Y as Eo,Yn as xd,Yt as bd,Z as An,Zn as yd,_n as wd,_t as la,an as vd,bn as kd,bt as da,ct as ca,dn as Wr,dt as ua,en as Sd,et as jd,fn as Cd,ft as pa,gn as Td,gt as fa,hn as Ad,ht as ga,in as Id,it as Dd,j as Fo,jn as Md,jt as Po,k as Rd,kn as zd,kt as sa,lt as ma,mn as Ld,mt as ha,nn as Ed,on as Fd,ot as Pd,pn as na,pt as xa,q as Ba,qn as Gi,qt as $d,rn as Nd,sn as Od,st as ba,tn as Vd,tt as Bd,un as Ji,ut as ya,vn as _d,vt as wa,wn as Qa,wt as Hd,xn as Ud,xt as Kd,yn as qd,yt as va,zn as Wd}from"./vendor-react-DaUcAjuS.js";import{t as Gr}from"./fog--rpOGuZY.js";import{t as Yi}from"./texts-Cw4jglIa.js";import{t as tr}from"./songAiKnowledge-DWostAuJ.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function r(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(l){if(l.ep)return;l.ep=!0;const d=r(l);fetch(l.href,d)}})();var a=za(yd()),Gd=za(xd()),Zi=od({name:"calendar",initialState:{customDays:[]},reducers:{addCustomDay:(t,n)=>{const{id:r,date:u,time:l,reason:d,duration:b,durationUnit:p,cardId:x}=n.payload;t.customDays.push({id:r||Date.now(),date:u,time:l||"00:00",reason:d,duration:b||1,durationUnit:p||"hours",cardId:x||"all"})},removeCustomDay:(t,n)=>{t.customDays=t.customDays.filter(r=>r.id!==n.payload)},updateCustomDay:(t,n)=>{const{date:r,reason:u}=n.payload,l=t.customDays.find(d=>d.date===r);l&&(l.reason=u)},setCustomDays:(t,n)=>{t.customDays=n.payload}}}),{addCustomDay:Xi,removeCustomDay:Jd,updateCustomDay:Ym,setCustomDays:Zm}=Zi.actions,Yd=Zi.reducer,Zd=Gl({reducer:{calendar:Yd}}),c=za(Yl()),nr="/assets/fogtwo--KsskB7I.webp",e=dd(),Xd=300,$o=["Цей сайт це реальна містика :)","Хочеш відсилку? :)","Індики схожі?","Доміно знає Д??????са?","Точно ні, він чорний, а Доміно чорно-білий :)"],No=["Доміно бажає гарної погоди :)","Кейт бажає творчого натхнення","Сутінок - не найкраще, що можете побачити...","Драконяче видання...","Марта - і картини...","Відлуння порожнечі","Де він? Хто він?","Це не те, що хотів .......","??? - Я знаю його","Він скоро повернеться"],Qd=[{r:1,c:1,delay:"0s"},{r:1,c:2,delay:"0.1s"},{r:1,c:3,delay:"0.2s"},{r:2,c:3,delay:"0.3s"},{r:3,c:3,delay:"0.4s"},{r:3,c:2,delay:"0.5s"},{r:3,c:1,delay:"0.6s"},{r:2,c:1,delay:"0.7s"}],ec=Fe`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,tc=Fe`
  0% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
  100% { opacity: 1; }
`,nc=i.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1994;
  opacity: ${t=>t.$isFadingOut?0:1};
  visibility: ${t=>t.$isFadingOut?"hidden":"visible"};
  transition:
    opacity 0.8s ease-in-out,
    visibility 0.8s ease-in-out;
  overflow: hidden;
  will-change: opacity, visibility;
`,ac=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,rc=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  animation: ${ec} 0.8s ease-out forwards;
`,oc=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
  transition: opacity 0.8s ease-in-out;
  opacity: ${t=>t.$active?1:0};
`,ic=i.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0.5vh;
  text-align: center;
`,sc=i.div`
  margin-top: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  width: 100%;
`,lc=i.div`
  position: absolute;
  top: -9px;
  left: -7px;
  z-index: 3;
  color: #fff;
  text-align: left;
`,dc=i.p`
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 10px;
  opacity: 0.9;
  margin: 0;
  font-family: "Inter", sans-serif;
`,cc=i.div`
  font-size: 13px;
  color: #00c6ff;
  line-height: 1.5;
  font-weight: 900;
  max-width: 1200px;
  font-style: italic;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.61);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  margin-top: 5px;
`,uc=i.p`
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`,pc=i.div`
  position: absolute;
  top: 22px;
  right: -1px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
`,fc=i.span`
  font-size: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: right;
  min-width: 170px;
`,gc=i.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  grid-template-rows: repeat(3, 10px);
  gap: 3px;
`,mc=i.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  animation: ${tc} 0.8s infinite linear;
  grid-row: ${t=>t.$r};
  grid-column: ${t=>t.$c};
  animation-delay: ${t=>t.$delay};
`;function hc({isLoading:t,isFadingOut:n,randomPhrase:r}){const[u,l]=(0,a.useState)("Готую новини");return(0,a.useEffect)(()=>{const d=new Image;d.src=nr},[]),(0,a.useEffect)(()=>{if(t){let d=0;const b=setInterval(()=>{d<$o.length-1&&(d++,l($o[d]))},Xd),p=No[Math.floor(Math.random()*No.length)],x=setTimeout(()=>{clearInterval(b),l(p)},2e3);return()=>{clearInterval(b),clearTimeout(x)}}},[t]),t?(0,e.jsxs)(nc,{$isFadingOut:n,children:[(0,e.jsx)(lc,{children:(0,e.jsx)(dc,{children:"v.1.0.0 | Я в Конотопі :)"})}),(0,e.jsxs)(pc,{children:[(0,e.jsx)(fc,{children:u}),(0,e.jsx)(gc,{children:Qd.map((d,b)=>(0,e.jsx)(mc,{$r:d.r,$c:d.c,$delay:d.delay},b))})]}),(0,e.jsxs)(ac,{children:[(0,e.jsx)(rc,{children:(0,e.jsx)(oc,{src:nr,$active:!0,alt:"Loading..."})}),(0,e.jsx)(ic,{children:(0,e.jsxs)(sc,{children:[(0,e.jsx)(cc,{children:r}),(0,e.jsx)(uc,{children:"2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist"})]})})]})]}):null}var xc=za(Cd()),bc=(t,n=0)=>{if(!t)return n===0?"Сьогодні":`День ${n+1}`;const r=String(t).trim(),u=new Date,l=new Date(u);l.setHours(0,0,0,0);const[d,b]=r.split(".").map(p=>Number(p));if(d&&b){const p=new Date(u.getFullYear(),b-1,d),x=Math.round((p-l)/864e5);return x===0?`${r} (Сьогодні)`:x===1?`${r} (Завтра)`:x===2?`${r} (Післязавтра)`:`${r} (${p.toLocaleDateString("uk",{weekday:"short"})})`}return r},yc=(t=[])=>{if(!Array.isArray(t)||t.length===0)return[];const n=[],r=new Map;return t.forEach((u,l)=>{const d=u?.dateLabel||u?.date||"today";r.has(d)||(r.set(d,[]),n.push({label:d,title:bc(d,n.length),items:[]})),r.get(d).push(u)}),n.forEach(u=>{u.items=r.get(u.label)||[]}),n},wc="/assets/prison-BANVSR28.mp4",vc="/assets/hiils-CwRk4ZgD.webp",kc="/assets/studi-DHg_t1il.webp",Sc="/assets/penny-BUV12nwB.webp",jc="/assets/fog-DK9Qi8VM.mp4",Cc="/assets/nicerone-DeI1ZC5d.mp4",Qi="/assets/vip-soloveyko-CtAoYgAY.webp",es="/assets/asium-B_nRztWf.webp",ts="/assets/horse-DCbtELLC.webp",ns="/assets/theorytwo-omR0ZjVQ.webp",Tc="/assets/theorytwo-COG3p5Yj.mp4",Ac="/assets/theory-DnqpX73C.mp4",as="/assets/fingerdash-DEsolxme.webp",rs="/assets/electrodynamix-lzudItwJ.webp",Ra="/assets/sirenhead-Dh1KPUjM.webp",Ic="/assets/backrooms-C_N8r861.webp",os="/assets/vip-desert-Bmmk9Qts.webp",is="/assets/deserttwo-Bpbh89pi.webp",ss="/assets/desertthree-B1yTfM-X.webp",ls="/assets/desertfour-KOc6byy4.webp",ds="/assets/desertone-CTJSVy53.webp",cs="/assets/mechannic-B4qHsIdf.webp",us="/assets/clubstep-BGgJ_grP.webp",rr="/assets/ultra-vip-turkeys--dWdDrjz.webp",ps="/assets/horsethree-CLZvl5e7.webp",Dc="/assets/horsetwo-BRmdGHMz.webp",fs="/assets/chess-DE0SQ6bR.webp",Mc="/assets/aurorahills-DmZEChm7.webp",gs="/assets/turkeytwo-DEtUfl4n.webp",ms="/assets/turkeysthree-DWkC9U9r.webp",hs="/assets/turkeysfour-B1peYkuR.webp",xs="/assets/turkeysfive-B9fezKPV.webp",bs="/assets/turkeyssix-C74RJO0D.webp",ys="/assets/turkeysone-ByUfHIKS.webp",ws="/assets/turkeysseven-C_bOyIyj.webp",vs="/assets/vip-forest-SaiZLRX8.webp",ks="/assets/asiumone-DdULW5D8.webp",Ss="/assets/asiuntwo-B0HnOhGB.webp",js="/assets/asiumthree-BHhNiv03.webp",Cs="/assets/asiumfour-CleyN5g2.webp",Ts="/assets/asiumfive-DSDp7YH4.webp",As="/assets/asiumsix-D7UysOUw.webp",Is="/assets/asiumeleven-BHmk7Yt4.webp",Ds="/assets/asiumtwelve-roupkWdg.webp",Ms="/assets/asiumseven-DFmFFiYc.webp",Rs="/assets/swamptwo-8_PhuQBm.webp",zs="/assets/swampthree-D1x5tDiJ.webp",Ls="/assets/swampfour-B10ujwoY.webp",Es="/assets/swampfive-DKN2UHLz.webp",Fs="/assets/swampsix-DzD2OZh6.webp",Ps="/assets/seampseven-aw1KjEtN.webp",$s="/assets/swampeight-Cxl2rbCa.webp",Ns="/assets/swampnine-BGdJXMuv.webp",Os="/assets/theory-BgbF1Vw-.webp",Vs="/assets/deadlocked-D6Jzwofg.webp",Bs="/assets/horrortwo-D8aEwkY_.webp",_s="/assets/horrorthree-BFEovIOX.webp",Hs="/assets/horrorfour-DmgPluVF.webp",Us="/assets/horrorfive-DTRJJLmu.webp",Jr="/assets/horror-Bwtso3fm.webp",Ks="/assets/horrorsix-FrdmNrLk.webp",qs="/assets/horrorseven-DJ2UueTc.webp",Ws="/assets/horroreight-N8Azt2Lm.webp",Yr="/assets/vip-dinofroz-C4DCnog6.webp",Gs="/assets/dinofrozthree-h3bRBpyn.webp",Js="/assets/dinofrozfour-DkpUmpno.webp",Ys="/assets/dinofrozfive-vsWApnpV.webp",Zs="/assets/dinofrozsix-B2cUeZYK.webp",Xs="/assets/dinofrozseven-r29p04F4.webp",Qs="/assets/dinofrozeight-D_wKW6F3.webp",Zr="/assets/vip-dragons-B9_gfJz_.webp",el="/assets/dinofroznine-Btp0fI_a.webp",Rc="/assets/nicerone-w6vAmYap.webp",tl="/assets/village-DaGZZK5u.webp",zc="/assets/sevendays-D9rpKRGr.mp4",Lc="/assets/vladone-D0GzLk2B.mp4",Ec="/assets/domino-B2kX1s2n.webp",Fc="/assets/shop-CjzVirJw.mp4",nl="/assets/faded-CfnCTW9-.webp",Pc="/assets/faded-B0cqhRG7.mp4",al="/assets/miaandme-BLF13Fck.webp",$c="/assets/fire-2pNCSf4p.webp",Nc="/assets/clubstep-B4vGowaQ.mp4",Oc="/assets/titanic-psUEvksY.webp",Vc="/assets/smit-Blk03HJN.webp",Bc="/assets/electrodynamix-Pgbof-vP.mp4",_c="/assets/volcano-BtJBGKCf.mp4",Hc="/assets/whiteloud-LRq9ym10.mp4",Uc="/assets/wall-BZpLy1oe.webp",Kc="/assets/slivkishow-CvTTxjt1.mp4",qc="/assets/days-BYTNHXwz.mp4",rl="/assets/dinofroz-N6zhVqvn.mp4",Ma=[{src:Ra,name:"Щось не так...",category:"Хоррор",author:"TheTurkeyStudio",description:"Навіть ті хто не знають його, починають розуміти ця вишка з сиренами, на така вже вже й не рухома..."},{src:Yi,name:"Єгипетські ієрогліфи",category:"Локації",author:"TheTurkeyStudio",description:`Ця картина має глибоку, містичну та інтроспективну атмосферу. Вона ідеально резонує з певним психологічним профілем і складом особистості:
Глибока інтроверсія та рефлексія: Цей образ обирають люди, які відновлюють енергію в тиші та самотності. Вони схильні до глибокого аналізу власних думок і почуттів, вважаючи за краще спостерігати за світом збоку, аніж бути в центрі уваги.
Філософський склад розуму: Символіка ієрогліфів символізує складність буття. Людина з таким характером не лякається невідомості — її приваблюють таємниці, пошук прихованих сенсів та роздуми над глобальними питаннями.`},{src:qc,name:"Крижана катастрофа",category:"Песимізм",author:"20th Century Fox",source:"Фільм 'Післязавтра'",start:0,end:300,description:"Тут зображено наслідки людської жадібності та безвідповідальності перед природою. Люди, які обирають цей фон, часто мають песимістичний погляд на світ і схильні до глибоких роздумів про майбутнє планети. Вони можуть відчувати тривогу щодо змін клімату та екологічних катастроф, що відображає їхню турботу про навколишнє середовище та бажання знайти рішення для збереження природи."},{src:Gr,name:"Туманний ліс",category:"Хоррор",author:"TheTurkeyStudio",description:"Це стартовий фон для всіх користувачів :) Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:jc,name:"Туманний ліс (Відео)",category:"Хоррор",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:nl,name:"Курорт",category:"Фентезі",author:"TheTurkeyStudio",description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:Pc,name:"Курорт (Відео)",category:"Фентезі",author:"TheTurkeyStudio",start:0,end:300,description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:Kc,name:"Політ Кукі у стратосферу",category:"Стихія",author:"SlivkiShow",start:0,end:78,description:"Тут показано цікавий політ на висоту 30 000 метрів! Приємного перегляду небесних краєвидів!"},{src:kc,name:"Художня студія",category:"Локації",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу творчості та натхнення. Люди, які обирають його, часто мають схильність до мистецтва та креативного самовираження. Вони можуть бути відкритими до нових ідей та люблять експериментувати з різними формами мистецтва, що відображає їхню творчу натуру."},{src:Bc,name:"Гроза (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:7,description:"Цей фон створює атмосферу енергії та динаміки. Люди, які обирають його, часто мають схильність до активного способу життя та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:vc,name:"Гори",category:"Стихія",author:"TheTurkeyStudio",description:`По секрету, я планував зробити його фоном сайту у старих версіях, до 'Туманного лісу'. 
Цей фон створює атмосферу величі та спокою. Люди, які обирають його, часто мають схильність до природи та люблять відчувати себе частиною великого світу. Вони можуть бути інтроспективними та цінувати моменти тиші та роздумів, що відображає їхню глибоку натуру.`},{src:$c,name:"Вулкан",category:"Стихія",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:_c,name:"Вулкан (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:Mc,name:"Аврора Гіллс",category:"Стихія",author:"NovaSoft Interactive",description:"Цей фон взятий з Hidden Object Adventure гри 'Aurora Hills'. Сюжет гри: Ви рейнджер парку у скромному містечку, але люди починають зникати безвісти. Посилання на гру: https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk"},{src:Fc,name:"Магазин Доміно (Відео)",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Затишна та динамічна атмосфера міського життя. Цей фон підійде тим, хто шукає натхнення у звичайних щоденних моментах, цінує теплі міські локації та комфортний ритм сучасності."},{src:wc,name:"Кришталева в'язниця",category:"Хоррор",author:"TheTurkeyStudio",start:0,end:300,description:"Загадковий і холодний фон, що випромінює застережливу красу та напругу. Він приваблює шанувальників гостросюжетних історій, психологічних загадок та атмосфери таємничої небезпеки."},{src:Ec,name:"Риболов",category:"Стихія",author:"TheTurkeyStudio",description:"Символ терпіння, витримки та спокійної спостережливості. Цей фон обирають люди, які цінують усамітнення на природі, вміють вичікувати правильний момент та шукають відпочинку від щоденної метушні."},{src:Uc,name:"Стиль лофт",category:"Локації",author:"TheTurkeyStudio",description:`Сучасний, лаконічний і стильний інтер'єр із духом свободи. Цей фон відображає прагнення до простору, практичності та естетики урбанізму, приваблюючи людей із витонченим смаком.
 Хоча це просто купа цегли :)`},{src:Hc,name:"Білий шум",category:"Стихія",author:"TheTurkeyStudio",start:0,end:300,description:"Мінімалістичний фон для повного занурення та концентрації. Він створює нейтральний простір без зайвих подразників, допомагаючи відключитися від зовнішнього хаосу та зосередитися на власних думках."},{src:Cc,name:"Імператор Ніцерон (Відео)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:`Цей фон символізує, жагу до небезпек та пригод, і цей дракон вас не зупинить! 
Через нього, мені прийшла в голову ідея, з сайтом погоди у якому купа відсилок ;) Це секретик :) `},{src:Lc,name:"Генерал Влад (Відео, сезон 1)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:"Головні герої в пастці…. Цей фон символізує жагу до свободи, і командної роботи(герої шукають план втечі…, а дракони, хочуть не допустити цього…)"},{src:tl,name:"Древніус і Даркніс",category:"Дракони",author:"highbrow",source:"Dragon Village 3",description:`Картина, прекрасна. Ідеальна для тих хто любить шукати плюси і мінуси. 
Лінк на гру:`},{src:Yr,name:"Імператор Ніцерон",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Zr,name:"Генерал Влад (2 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Gs,name:"Прев'ю мультфільму",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Js,name:"Драгемон (2 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Ys,name:"Мелтстон",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Zs,name:"Дракони (Епізод)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Xs,name:"Генерал Влад (1 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Qs,name:"Генерал Трік (1 сезон)",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:el,name:"Погляд у Рокфроз",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:as,name:"Замок Ніцерона",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:Rc,name:"Іще варіант",category:"Дракони",author:"Mondo TV",source:"м/с Динофроз"},{src:ts,name:"Кінь",category:"Стихія",author:"Генерація ШІ(Gemini)"},{src:ps,name:"Лицар",category:"Стихія",author:"Генерація ШІ(Gemini)"},{src:rr,name:"Індичка Кейт",category:"Стихія",author:"TheTurkeyStudio"},{src:ys,name:"Мале бундюче стадо",category:"Стихія",author:"TheTurkeyStudio"},{src:gs,name:"Малий, але впевнений",category:"Стихія",author:"TheTurkeyStudio"},{src:ms,name:"Дивись мені в очі!",category:"Стихія",author:"TheTurkeyStudio"},{src:hs,name:"І знову про індиків",category:"Стихія",author:"TheTurkeyStudio"},{src:xs,name:"2 Індики",category:"Стихія",author:"TheTurkeyStudio"},{src:bs,name:"Ми вже виросли!",category:"Стихія",author:"TheTurkeyStudio"},{src:ws,name:"Шукаю друга",category:"Стихія",author:"TheTurkeyStudio"},{src:Qi,name:"Соловейко",category:"Стихія",author:"TheTurkeyStudio"},{src:os,name:"Загадки пустелі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Атмосфера безкрайніх просторів та вічних таємниць. Цей фон обирають люди, схильні до самоспостереження, які вміють бачити красу в мінімалізмі й шукають відповіді на глибокі життєві питання в тиші."},{src:Ic,name:"Нескінченний коридор",category:"Хоррор",author:"TheTurkeyStudio",description:"Знайомий, але глибоко тривожний образ 'місця-порогу'. Цей фон викликає ефект 'ценонопсії' — відчуття моторошної порожнечі в місці, яке зазвичай повне людей. Симетрія заспокоює, але ледь помітний силует у темряві змушує постійно перевіряти, чи ви дійсно тут одні. Ідеально для тих, хто любить гострі відчуття та психологічні загадки. Викликає вряжання, ніби це бекрумс... Навіть мені і спокійно і тривожно дивитись на це..."},{src:ds,name:"Кораблі у пустелі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Сюрреалістичний та заворожуючий образ піщаних морів. Він відображає відчуття плину часу, замисленість та схильність шукати неординарні сенси там, де інші бачать лише пустку."},{src:is,name:"Пустельні міражі",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Образ ілюзій, мрій та вислизаючої краси. Цей фон пасує мрійливим натурам із багатою уявою, які прагнуть вийти за межі повсякденної реальності та відшукати власну істину."},{src:ss,name:"Кактуси",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Символ витривалості, непохитності та життєвої сили. Цей фон обирають люди з міцним внутрішнім стержнем, які вміють зберігати оптимізм і квітнути навіть у найсуворіших обставинах."},{src:ls,name:"Піраміда",category:"Локації",author:"Генерація ШІ (Gemini)",description:"Символ монументальності, стабільності та стародавньої мудрості. Цей образ підходить тим, хто цінує структуру, прагне до високих цілей та надихається величчю історії."},{src:Ns,name:"Озеро волі",category:"Локації",author:"TheTurkeyStudio",description:"Тиха та освіжаюча локація, що випромінює спокій та гармонію. Цей фон підійде тим, хто прагне емоційного перезавантаження, цінує внутрішню свободу та відчуття чистоти."},{src:Rs,name:"Записка",category:"Локації",author:"TheTurkeyStudio",description:"Атмосферний та інтимний сюжет, оповитий таємницею. Шанувальники цього фону зазвичай уважні до деталей, схильні до ностальгії та цінують глибокі особисті історії."},{src:Is,name:"Зимовий ліс",category:"Локації",author:"TheTurkeyStudio",description:"Атмосфера кришталевої тиші, свіжості та спокою. Цей фон обирають люди, які відновлюють сили у мовчазній споглядальності, цінують чистоту думок та затишок засніженої природи."},{src:Ds,name:"Водоспад",category:"Локації",author:"TheTurkeyStudio",description:"Джерело безперервного руху, відновлення та природної енергії. Фон пасує тим, хто шукає натхнення у динаміці життя, цінує відчуття свіжості та прагне гармонійного розвитку."},{src:vs,name:"Казковий ліс",category:"Фентезі",author:"TheTurkeyStudio",description:"Магічний простір, сповнений чарів та таємниць. Цей фон обирають мрійливі натури з багатою уявою, які вірять у дива, цінують казки та шукають натхнення у фентезійних світах."},{src:ks,name:"Під водою",category:"Фентезі",author:"TheTurkeyStudio",description:"Глибока, заспокійлива та таємнича атмосфера підводного царства. Пасує людям, які цінують тишу, плавність життя та прагнуть досліджувати приховані глибини власного внутрішнього світу."},{src:Ss,name:"Поле і сакури",category:"Фентезі",author:"TheTurkeyStudio",description:"Ніжний та естетичний пейзаж, що випромінює гармонію, цвітіння та весняне оновлення. Його обирають романтичні натури, які цінують витончену красу моменту й естетику східної культури."},{src:js,name:"Печера",category:"Фентезі",author:"TheTurkeyStudio",description:"Потаємне та захищене місце, сповнене прадавніх загадок. Підходить для допитливих інтровертів, які цінують відчуття затишку, безпеки та люблять відкривати приховані таємниці."},{src:Cs,name:"Річка з лави",category:"Фентезі",author:"TheTurkeyStudio",description:"Палка, експресивна та стихійна локація. Відображає внутрішній вогонь, сильну енергетику, рішучість та сміливість долати будь-які перешкоди на своєму шляху."},{src:Ts,name:"Спуск з гори",category:"Фентезі",author:"TheTurkeyStudio",description:"Захоплюючий краєвид та відчуття руху вперед. Цей фон приваблює цілеспрямованих людей, цінителів пригод та тих, хто любить долати нові вершини й насолоджуватися результатом."},{src:As,name:"Скарбниця + Відсилки",category:"Фентезі",author:"TheTurkeyStudio",description:"Атмосфера багатства, секретів та численних великодок. Ідеально підходить для допитливих та уважних глядачів, які люблять помічати дрібні деталі та розгадувати підтексти."},{src:Ms,name:"Японський балкон",category:"Фентезі",author:"TheTurkeyStudio",description:"Затишне та заспокійливе місце з гарним краєвидом. Створює відчуття мовчазного спокою, вечірньої рефлексії та приємної гармонії з навколишнім світом."},{src:es,name:"Японський храм",category:"Фентезі",author:"TheTurkeyStudio",description:"Оселя східної мудрості, медитативності та духовної рівноваги. Цей фон обирають люди, які прагнуть знайти внутрішній баланс, цінують традиції та спокійне споглядання."},{src:al,name:"Міа та я",category:"Фентезі",author:"Studio 100 Media, Lucky Punch, March Ent.",source:"м/с Mia and Me",description:`Цей яскравий та казковий кадр із Мією та Лірією(ім'я може відрізнятись у різних мовах мультсеріалу) у яскраво-рожевих тонах розкриває ніжний, мрійливий та натхненний психотип:
Яскрава фантазія та творче мислення: Цей образ обирають люди, які живуть багатим внутрішнім світом, люблять казкові всесвіти, вірять у дива та прагнуть додавати барв у сіру буденність.
Емпатія та гармонія з природою: Близькість до чарівних істот і казкових світів відображає добре серце, здатність глибоко співчувати та цінувати щиру дружбу.
Віра у власні перетворення: Сюжет про перехід між реальністю та магічним світом резонує з тими, хто любить змінюватися на краще, шукає свій шлях і не боїться довіряти своїй інтуїції.`},{src:Jr,name:"Бійцівська собака",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Bs,name:"Будинок з пастками",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:_s,name:"Підвал",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Hs,name:"Город зла",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Us,name:"Зіграймо!",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Ks,name:"Втеча",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:zc,name:"Касета, що вбиває",category:"Хоррор",author:"Dreamworks",source:"Фільм 'Дзвінок'",start:0,description:`Цей відеоматеріал має напружену, похмуру та містичну атмосферу, що тримає в постійному психологічному напруженні. Він ідеально резонує з певним психологічним профілем і складом особистості:
Жага до розгадування таємниць і подолання страху: Цей образ обирають люди, яких приваблює психологічна напруга, психологічний трилер та темна естетика. Вони володіють внутрішньою стійкістю та цікавістю, що змушують їх досліджувати складні й лячні теми, долати власні фобії та йти до кінця в пошуках прихованої істини.
Холодний аналітичний розум у кризових ситуаціях: Ситуація жорсткого цейтнолету (відлік семи днів) вимагає максимальної концентрації, холоднокровності та логіки. Людина з таким складом характеру не піддається сліпій паніці перед обличчям невідомого чи невідворотного — вона здатна зберігати тверезість мислення, структурувати хаос навколо себе та рішуче діяти в критичних умовах.`,end:300},{src:qs,name:"Далі невідомо...",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Ws,name:"Втеча (фінал)",category:"Хоррор",author:"Генерація ШІ(Gemini)"},{src:Ls,name:"Матка павуків",category:"Хоррор",author:"TheTurkeyStudio"},{src:Es,name:"Злі духи",category:"Хоррор",author:"TheTurkeyStudio"},{src:Ps,name:"Туман, що дивиться",category:"Хоррор",author:"TheTurkeyStudio"},{src:$s,name:"Болотний дракон",category:"Хоррор",author:"TheTurkeyStudio"},{src:Sc,name:"Пеннівайз",category:"Хоррор",author:""},{src:Vs,name:"Болото мук",category:"Хоррор",author:"TheTurkeyStudio"},{src:ns,name:"Чорна діра",category:"Локації",author:"TheTurkeyStudio"},{src:Tc,name:"Чорна діра(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300},{src:rs,name:"Гроза",category:"Стихія",author:"TheTurkeyStudio"},{src:cs,name:"Шестерні",category:"Локації",author:"TheTurkeyStudio"},{src:Nc,name:"Невідоме місце(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300},{src:us,name:"Невідоме місце",category:"Локації",description:"",author:"TheTurkeyStudio"},{src:Os,name:"Вогнище",category:"Локації",description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих.",author:"TheTurkeyStudio"},{src:Ac,name:"Вогнище(Відео)",category:"Локації",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих."},{src:fs,name:"Шахи",category:"Локації",author:"TheTurkeyStudio"},{src:zs,name:"Підказка свічки",category:"Хоррор",author:"TheTurkeyStudio"},{src:Fs,name:"Печера кристалів",category:"Хоррор",author:"TheTurkeyStudio"},{src:Oc,name:"Титанік",category:"Майбутне",author:"Paramount Pictures & 20th Century",source:"Фільм Titanic (1997)",description:"Цей фон відображає трагедію та величність історії, символізуючи людську амбіцію, крихкість життя та силу природи. Люди, які обирають цей фон, часто мають схильність до роздумів про минуле, цінують історичні події та шукають глибокі сенси у житті. Вони можуть відчувати емпатію до людських переживань та прагнуть зрозуміти уроки минулого для формування кращого майбутнього."},{src:Vc,name:"Агент Сміт",category:"Майбутне",author:"WarnerBrothers",source:"Фільм 'Матриця'",description:"Цей фон відображає складність та багатогранність сучасного світу, символізуючи боротьбу між реальністю та ілюзією. Люди, які обирають цей фон, часто мають схильність до критичного мислення, цікавляться технологіями та філософськими питаннями. Вони можуть відчувати потребу у глибокому аналізі навколишнього світу та прагнуть зрозуміти сутність людської природи."}],gr=t=>t==null?"—":["Північний","Північно-східний","Східний","Південно-східний","Південний","Південно-західний","Західний","Північно-західний"][Math.floor(t/45+.5)%8],Wc=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`,Gc=i.div`
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,_a=i.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Ha=i.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,Oo=i.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,Jc=({onClose:t,isDarkMode:n,currentCardId:r})=>{const u=qr(),l=ar(w=>w.calendar?.customDays||[]),[d,b]=(0,a.useState)(""),[p,x]=(0,a.useState)("00:00"),[f,g]=(0,a.useState)(""),[F,C]=(0,a.useState)(1),[L,P]=(0,a.useState)("hours"),[D,v]=(0,a.useState)(r),y=l.filter(w=>w.cardId==="all"||w.cardId===r),I=()=>{if(!d||!f)return alert("Заповніть дату та назву");if(f.length>30)return alert("Назва занадто довга (макс 30)");if(l.length>=3)return alert("Максимум 3 події на користувача");u(Xi({id:Date.now(),date:d,time:p,reason:f,duration:Number(F),durationUnit:L,cardId:D})),b(""),g("")};return(0,e.jsx)(Wc,{onClick:t,children:(0,e.jsxs)(Gc,{$isDarkMode:n,onClick:w=>w.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:0},children:"Встановити дати"}),(0,e.jsxs)(_a,{children:[(0,e.jsx)("label",{children:"Дата та Час початку"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(Ha,{type:"date",$isDarkMode:n,value:d,onChange:w=>b(w.target.value)}),(0,e.jsx)(Ha,{type:"time",$isDarkMode:n,value:p,onChange:w=>x(w.target.value)})]})]}),(0,e.jsxs)(_a,{children:[(0,e.jsx)("label",{children:"Тривалість"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(Ha,{type:"number",min:"1",max:"168",$isDarkMode:n,value:F,onChange:w=>C(w.target.value),style:{width:"60px"}}),(0,e.jsxs)(Oo,{$isDarkMode:n,value:L,onChange:w=>P(w.target.value),children:[(0,e.jsx)("option",{value:"hours",children:"Годин"}),(0,e.jsx)("option",{value:"days",children:"Днів"})]})]})]}),(0,e.jsxs)(_a,{children:[(0,e.jsx)("label",{children:"Застосувати для:"}),(0,e.jsxs)(Oo,{$isDarkMode:n,value:D,onChange:w=>v(w.target.value),children:[(0,e.jsx)("option",{value:"all",children:"Всіх карток"}),(0,e.jsx)("option",{value:r,children:"Цієї картки"})]})]}),(0,e.jsxs)(_a,{children:[(0,e.jsx)("label",{children:"Назва події (макс 30 симв.)"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(Ha,{type:"text",placeholder:"Наприклад: Новий Рік",$isDarkMode:n,value:f,onChange:w=>g(w.target.value),maxLength:30,style:{flex:1}}),(0,e.jsx)("button",{onClick:I,style:{background:"#ffb36c",border:"none",borderRadius:"5px",padding:"0 15px",fontWeight:"bold",cursor:"pointer"},children:"+"})]})]}),(0,e.jsx)("hr",{style:{border:"0.5px solid #444",margin:"10px 0"}}),(0,e.jsx)("h4",{style:{margin:0},children:"Наступаючі / триваючі події"}),(0,e.jsxs)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[y.length===0&&(0,e.jsx)("p",{style:{fontSize:"12px",opacity:.7},children:"Немає подій"}),y.map(w=>(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:n?"#333":"#eee",padding:"8px",borderRadius:"5px",fontSize:"12px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("b",{children:w.reason}),(0,e.jsx)("br",{}),w.date," ",w.time," (",w.duration," ",w.durationUnit==="days"?"дн":"год",")"]}),(0,e.jsx)("button",{onClick:()=>u(Jd(w.id)),style:{background:"transparent",border:"none",color:"red",cursor:"pointer"},children:(0,e.jsx)(Ji,{size:18})})]},w.id))]}),(0,e.jsx)("button",{onClick:t,style:{marginTop:"10px",background:"#444",color:"#fff",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer"},children:"Закрити"})]})})},ol=(0,a.createContext)(),Yc=({children:t})=>{const[n,r]=(0,a.useState)(!1),[u,l]=(0,a.useState)(0),[d,b]=(0,a.useState)(!1),p=(0,a.useRef)({}),x=(P,D)=>{D?p.current[P]=D:delete p.current[P]};(0,a.useEffect)(()=>{(async()=>{try{const v=new URLSearchParams(window.location.search);if(v.has("q")||v.has("city")||v.has("search")||v.has("query")||v.has("pohoda")||window.location.search.toLowerCase().includes("погода")){b(!1),r(!1);return}}catch{}const D=await c.default.getItem("domino_tutorial_prompt");(!D||Date.now()>D)&&setTimeout(()=>b(!0),2500)})()},[]);const f=async()=>{await c.default.setItem("domino_tutorial_prompt",Date.now()+2592e6),b(!1),r(!0),l(1)},g=async()=>{await c.default.setItem("domino_tutorial_prompt",Date.now()+6048e5),b(!1)},F=()=>{l(P=>P+1)},C=P=>{l(P)},L=()=>{r(!1),l(0)};return(0,e.jsx)(ol.Provider,{value:{isActive:n,setIsActive:r,currentStep:u,setCurrentStep:l,refs:p,registerRef:x,nextStep:F,jumpToStep:C,closeTutorial:L,showInitialModal:d,startTutorial:f,skipTutorialWeek:g},children:t})},La=()=>(0,a.useContext)(ol),Zc=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Un=({content:t,children:n,placement:r="bottom",isDarkMode:u=!0})=>{const[l,d]=(0,a.useState)(!1),b=(0,a.useRef)(null),{refs:p,floatingStyles:x,context:f}=ya({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:da,middleware:[wa(8),la(),va({padding:5}),fa({element:b})]}),{isMounted:g,styles:F}=ga(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),C=pa(f,{move:!1}),L=ua(f),P=ma(f),D=ha(f,{role:"tooltip"}),{getReferenceProps:v,getFloatingProps:y}=xa([C,L,P,D]);if(!t)return n;const I=u?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...v(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(ca,{children:(0,e.jsxs)(Zc,{ref:p.setFloating,$isDarkMode:u,style:{...x,...F},...y(),children:[t,(0,e.jsx)(ba,{ref:b,context:f,fill:I,stroke:"#00acb9",strokeWidth:1})]})})]})};Fe`from { opacity: 0; } to { opacity: 1; }`;var Xc=({customDays:t,cardId:n})=>{const[r,u]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{const d=setInterval(()=>u(new Date),1e3);return()=>clearInterval(d)},[]);const l=t.filter(d=>d.cardId==="all"||d.cardId===n);return l.length===0?null:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",padding:"10px",marginTop:"10px"},children:l.map(d=>{const b=new Date(`${d.date}T${d.time}:00`),p=new Date(b.getTime());d.durationUnit==="days"?p.setDate(p.getDate()+d.duration):p.setHours(p.getHours()+d.duration);const x=b-r,f=p-r;if(f<=0)return null;const g=F=>{const C=Math.floor(F/864e5),L=Math.floor(F/36e5%24),P=Math.floor(F/1e3/60%60),D=Math.floor(F/1e3%60);return`${C}дні:${String(L).padStart(2,"0")}:${String(P).padStart(2,"0")}:${String(D).padStart(2,"0")}`};return(0,e.jsxs)("div",{style:{background:"rgba(0,0,0,0.4)",color:"#00eaff",padding:"8px",borderRadius:"5px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:[d.reason,": ",x>0?`До події: ${g(x)}`:`Подія триватиме ще: ${g(f)}`]},d.id)})})},Qc=Fe`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`,eu=Fe`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,tu=Fe`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
`,nu=i.div`
  font-size: 22px;
  text-align: center;
  z-index: 100;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 24px;
  position: relative;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#000"};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
  ${t=>t.$isStickyBgMode?Vt`
          background: ${t.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${t.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:Vt`
          background: ${t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,au=i.div`
  background: ${t=>t.$isDarkMode?"#0000009e":"#f5f5f5aa"};
  position: relative;
  color: ${t=>t.$isDarkMode?"#fff":"#000000"};
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  z-index: 100;
  max-width: 310px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: ${t=>t.$isMain?"1.5px solid #004cff":"1.5px solid #00fbff"};
  transition: all 0.3s ease;
`,ru=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(0, 238, 255);
  h3 {
    margin: 0;
    font-size: 13px;
    color: ${t=>t.$isMain?"#008cff":"skyblue"};
  }
`,ou=i.div`
  display: flex;
  gap: 4px;
  button {
    background: #333;
    color: #fff;
    border: none;
    padding: 3px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      background: #555;
    }
  }
`;i.div`
  width: ${t=>t.size||"150px"};
  height: ${t=>t.size||"20px"};
  border-radius: 10px;
  font-size: ${t=>t.fontSize||"13px"};
  color: #fff;
  display: inline-flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;var iu=i.div`
  gap: 4px;
  padding: 1px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${t=>t.$image?`linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.55)), url(${t.$image}) center/cover no-repeat`:"transparent"};
`,su=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`,lu=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(5px);
`,du=i.div`
  background: #1e1e1e56;
  padding: 5px;
  border-radius: 20px;
  width: 95%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ffb36c;
  color: white;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,cu=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`,Vr=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
`,il=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`,Vo=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${t=>t.$active?"2px solid #ffb36c":"2px solid transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${Vr}, ${il} {
      opacity: 1;
    }
  }
`,Bo=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`,_o=i.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }
`,aa=i.div`
  width: ${t=>typeof t.$width=="number"?`${t.$width}px`:t.$width};
  height: ${t=>t.$height||"200px"};
`,mr={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"28px",padding:0,border:"1px solid rgba(0, 190, 235, 0.7)",borderRadius:"4px",background:"rgba(0, 0, 0, 0.35)",color:"#00bfff",cursor:"pointer"},uu=i(sn.div)`
  background: rgba(39, 27, 50, 0.74);
  border: 1px solid rgba(138, 43, 226, 0.3);
  padding: 8px;
  font-size: 12px;
  line-height: 1.5;
  color: ${t=>t.$isDarkMode?"#efefff":"#4a4a4a"};
  width: 300px;
  height: 290px;
  overflow-y: auto;
  box-sizing: border-box;
`,Ho=i.div`
  background: rgba(39, 27, 50, 0.74);
  border: 1px solid rgba(138, 43, 226, 0.3);
  padding: 8px;
  font-size: 12px;
  color: ${t=>t.$isDarkMode?"#efefff":"#4a4a4a"};
  width: 300px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
`,pu=i.div`
  display: -webkit-box;
  -webkit-line-clamp: ${t=>t.$isExpanded?"none":"5"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 11px;
  white-space: pre-line;
`,fu=i.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  padding: 4px 0 0 0;
  text-decoration: underline;
`,gu=i.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,mu=i.textarea`
  width: 100%;
  height: 60px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #8a2be2;
  font-size: 11px;
  background: ${t=>t.$isDarkMode?"#1a1a1a":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  resize: vertical;
`;i.div`
  position: absolute;
  inset: 0;
  background: ${t=>t.$isDarkMode?"rgba(30, 30, 30, 0.98)":"rgba(255, 255, 255, 0.98)"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  z-index: 999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  animation: ${Qc} 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  overflow: hidden;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.25);

  h3 {
    font-size: 1.2rem;
    color: #ffb36c;
  }
  p {
    font-size: 14px;
    margin: 5px 0;
  }
`;i.div`
  flex: 1;
  width: 100%;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;var hu=i.div`
  position: absolute;
  top: -10px;
  left: -275px;
  width: 100%;
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 5px 5px 0 0;
  display: flex;
  min-width: 309px;
  flex-direction: column;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  animation: ${t=>t.$isClosing?tu:eu} 0.2s
    ease-out forwards;
  overflow: hidden;
  max-height: 70vh;
`,xu=({user:t,card:n,isDarkMode:r,isLocationEnabled:u,isExtremeTemp:l,isExtremeWind:d,isExtremeUV:b,index:p,totalCards:x,handleRefreshCard:f,handleDeleteCard:g,handleRenameCard:F,moveWeatherCard:C,setIsLocationEnabled:L,customHolidayName:P,currentTimeString:D,layout:v,onOpenDetails:y})=>{const I=qr(),{registerRef:w}=La?.()||{registerRef:()=>{}},E=ar(s=>s.calendar?.customDays||[]),[O,_]=(0,a.useState)(!1),[Y,te]=(0,a.useState)(n.locationName),[de,ae]=(0,a.useState)(null),[B,Z]=(0,a.useState)(""),[ge,Ie]=(0,a.useState)(!1),[he,Ue]=(0,a.useState)(!0),[De,Ze]=(0,a.useState)(""),[me,$e]=(0,a.useState)("concise"),[Ce,dt]=(0,a.useState)("friendly"),[rt,ct]=(0,a.useState)(!1),[Pe,Ke]=(0,a.useState)(!1),[ot,wt]=(0,a.useState)(!1),[gt,Le]=(0,a.useState)(0),[T,$]=(0,a.useState)(n.cityImage||""),[X,ie]=(0,a.useState)("wiki"),[pe,Te]=(0,a.useState)(!1),[_e,Be]=(0,a.useState)(!1),[be,At]=(0,a.useState)(!1),qe=()=>{At(!0),setTimeout(()=>{Be(!1),At(!1)},180)},[mt,vt]=(0,a.useState)(!1),[Xe,It]=(0,a.useState)({date:"",time:"",reason:"",duration:1,durationUnit:"hours",targetCard:"all"}),[V,Q]=(0,a.useState)(!1),[re,G]=(0,a.useState)("current"),[Ee,S]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!n.isMain)return;const s=()=>Q(!0),m=()=>Q(!1);return window.addEventListener("domino-open-weather-settings",s),window.addEventListener("domino-close-weather-settings",m),()=>{window.removeEventListener("domino-open-weather-settings",s),window.removeEventListener("domino-close-weather-settings",m)}},[n.isMain]);const[M,K]=(0,a.useState)(!0),[ve,it]=(0,a.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),ut=(0,a.useRef)(null),Me=(0,a.useRef)(null),We=(0,a.useRef)(null),Rt=(0,a.useRef)(null),ht=(0,a.useRef)(null),xe=(0,a.useRef)(null),[ce,zt]=(0,a.useState)(null),[Dt,Bt]=(0,a.useState)(!1),[nt,_t]=(0,a.useState)({day:1,night:1,wind:1}),[pn,kt]=(0,a.useState)(12),en=s=>{_t(m=>({...m,[s]:m[s]===1?.3:1}))};(0,a.useEffect)(()=>{const s=()=>{if(!document.fullscreenElement){zt(null);return}requestAnimationFrame(()=>{const m=ce==="hourly"?We.current:xe.current;m?.resize(),m?.update("none")})};return document.addEventListener("fullscreenchange",s),()=>document.removeEventListener("fullscreenchange",s)},[ce]),(0,a.useEffect)(()=>{if(!ce)return;const s=setTimeout(()=>{const m=ce==="hourly"?We.current:xe.current;m?.resize(),m?.update("none")},100);return()=>clearTimeout(s)},[ce]);const oe=async(s,m)=>{if(document.fullscreenElement){await document.exitFullscreen();return}m.current?.requestFullscreen&&(zt(s),await m.current.requestFullscreen())},Ae=async(s,m=void 0,H=void 0)=>s.current?(0,xc.default)(s.current,{backgroundColor:r?"#000000":"#f5f5f5",scale:2,useCORS:!0,allowTaint:!0,windowWidth:m||window.innerWidth,windowHeight:H||window.innerHeight}):null,Qe=async(s,m)=>{Bt(!0);const H=ce===s,R=m.current;if(!R)return Bt(!1),null;let z=null,N=null;if(!H){const jt=R.getBoundingClientRect();z=R.cloneNode(!0);const Dn=R.querySelectorAll("canvas"),Mn=z.querySelectorAll("canvas");Dn.forEach((Zt,gn)=>{Mn[gn]&&Mn[gn].getContext("2d").drawImage(Zt,0,0)}),z.style.position="fixed",z.style.top=`${jt.top}px`,z.style.left=`${jt.left}px`,z.style.width=`${jt.width}px`,z.style.height=`${jt.height}px`,z.style.margin="0",z.style.zIndex="99998",z.style.pointerEvents="none",document.body.appendChild(z),N=document.createElement("div"),N.style.width=`${jt.width}px`,N.style.height=`${jt.height}px`,R.parentElement.insertBefore(N,R),zt(s),await new Promise(Zt=>setTimeout(Zt,100))}const se=R.style.cssText,ye=Math.max(R.scrollWidth,window.innerWidth,s==="hourly"?Ht:900),bt=Math.max(R.scrollHeight,window.innerHeight,600);H?R.style.cssText+=`
        width: ${ye}px !important;
        height: ${bt}px !important;
        min-height: ${bt}px !important;
        max-width: none !important;
        max-height: none !important;
      `:R.style.cssText+=`
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        width: ${ye}px !important;
        height: ${bt}px !important;
        min-height: ${bt}px !important;
        max-width: none !important;
        max-height: none !important;
        z-index: -9999 !important;
        background: ${r?"#000":"#f5f5f5"} !important;
      `,await new Promise(jt=>setTimeout(jt,100));const Yt=await Ae(m,ye,bt);return R.style.cssText=se,H||zt(null),Bt(!1),z&&(await new Promise(jt=>setTimeout(jt,100)),z.remove(),N&&N.remove()),Yt},St=async(s,m)=>{const H=await Qe(s,m);if(!H)return;const R=document.createElement("a");R.download=`${n.locationName}-${s}-chart.png`,R.href=H.toDataURL("image/png"),R.click()},ue=async(s,m)=>{const H=await Qe(s,m);if(!H)return;const R=H.toDataURL("image/png");let z=document.getElementById("chart-print-iframe");z||(z=document.createElement("iframe"),z.id="chart-print-iframe",z.style.position="fixed",z.style.width="0",z.style.height="0",z.style.border="none",z.style.top="-9999px",z.style.left="-9999px",document.body.appendChild(z));const N=z.contentWindow.document;N.open(),N.write(`
      <html><head><title>${n.locationName} - ${s}</title>
      <style>body{margin:0;text-align:center} img{max-width:100%}</style>
      </head>
      <body><img src="${R}" onload="window.focus();window.print();" /></body></html>
    `),N.close()},Re=(s,m)=>(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",flexShrink:0},children:[(0,e.jsx)(Un,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>oe(s,m),title:ce===s?"Вийти з повного екрана":"На весь екран","aria-label":ce===s?"Вийти з повного екрана":"На весь екран",style:mr,children:(0,e.jsx)(Id,{size:16})})}),(0,e.jsx)(Un,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>St(s,m),"aria-label":"Завантажити скріншот повноекранного графіка",style:mr,children:(0,e.jsx)(Ed,{size:16})})}),(0,e.jsx)(Un,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>ue(s,m),"aria-label":"Друкувати скріншот повноекранного графіка",style:mr,children:(0,e.jsx)(Od,{size:16})})})]}),Ge=s=>(0,e.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",fontSize:`${Math.max(10,pn-1)}px`,alignItems:"center"},children:s.map(m=>(0,e.jsx)(Un,{content:`Натисніть, щоб ${nt[m.key]===1?"сховати":"показати"} ${m.label.toLowerCase()}`,isDarkMode:r,children:(0,e.jsxs)("button",{type:"button",onClick:()=>en(m.key),"aria-label":`Натисніть, щоб ${nt[m.key]===1?"сховати":"показати"}`,style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 6px",border:`1px solid ${m.color}`,borderRadius:"4px",background:r?"#222":"#fff",color:m.color,cursor:"pointer",opacity:nt[m.key],fontSize:"inherit",fontWeight:"bold"},children:[(0,e.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:m.color}}),m.label]},m.key)}))}),ze=(s,m,H)=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"nowrap",marginBottom:"4px"},children:[Ge(H),Re(s,m)]});(0,a.useEffect)(()=>{if(Rt.current){const s=setTimeout(()=>{Rt.current&&(Rt.current.scrollLeft=144.44444444444446)},100);return()=>clearTimeout(s)}},[n.id,M,ve]),(0,a.useEffect)(()=>{(async()=>{const m=await c.default.getItem(`useGlobalLayout_${n.id}`);m!==null&&K(m);const H=await c.default.getItem(`localLayout_${n.id}`);H&&it(H)})()},[n.id]),(0,a.useEffect)(()=>{(async()=>{const m=await c.default.getItem(`bgMode_${n.id}`);m&&ie(m)})()},[n.id]),(0,a.useEffect)(()=>{(async()=>{const m=await c.default.getItem(`legendFontSize_${n.id}`);m&&kt(m)})()},[n.id]);const Je=s=>{ie(s),c.default.setItem(`bgMode_${n.id}`,s),Te(!1)},st=()=>{L(!u),qe()};(0,a.useEffect)(()=>{let s=!0;return(async()=>{if(X!=="wiki"){s&&$(X);return}const H=()=>Ma.find(z=>z.name==="Туманний ліс")?.src||Ma[0].src;let R=(n.locationName||n.name||"").trim();if(R==="Ваша локація"&&n.lat&&n.lon)try{const z=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${n.lat}&lon=${n.lon}&format=json&accept-language=uk`)).json();R=z.address?.city||z.address?.town||z.address?.village||z.address?.state||R}catch(z){console.warn("Reverse geocoding failed",z)}if(!R||R==="Ваша локація"){s&&$(H());return}try{const z=await(await fetch(`https://uk.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(R)}&pithumbsize=1000&format=json&origin=*`)).json(),N=Object.values(z?.query?.pages||{}).find(se=>se.thumbnail?.source)?.thumbnail?.source;N&&s?$(N):s&&$(H())}catch(z){console.warn("City image lookup failed:",z),s&&$(H())}})(),()=>{s=!1}},[n.locationName,n.lat,n.lon,n.name,X]),(0,a.useEffect)(()=>()=>{},[]),(0,a.useEffect)(()=>{Ke(!1),wt(!1)},[B]),(0,a.useEffect)(()=>{ut.current&&B&&!Pe&&ut.current.scrollHeight>ut.current.clientHeight&&wt(!0)},[B,Pe]),(0,a.useEffect)(()=>{(async()=>{const m=await c.default.getItem(`ai_enabled_${n.id}`);m!==null&&Ue(m);const H=await c.default.getItem(`ai_custom_prompt_${n.id}`);H&&Ze(H);const R=await c.default.getItem(`ai_response_length_${n.id}`);R&&$e(R);const z=await c.default.getItem(`ai_style_${n.id}`);z&&dt(z)})()},[n.id]);const lt=(0,a.useCallback)(async()=>{if(ge)return;const s=await c.default.getItem("gemini_api_key");if(!s){Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.");return}Ie(!0);try{const m=new Wr(s).getGenerativeModel({model:"gemini-3.5-flash-lite"}),H=n.current,R=n.daily16||[],z=(n.hourly||[]).slice(0,5).map(Yt=>`${Yt.time}: ${Yt.temp}, вітер ${Yt.windNum}м/с, ${Yt.iconPlaceholder}`).join("; "),N=me==="extensive"?"надай розгорнуту відповідь (кілька речень)":"згенеруй лаконічний прогноз одним реченням (макс 25 слів)",se=Ce==="scientific"?"використовуй науковий стиль":Ce==="sarcastic"?"додай дрібку сарказму та іронії":"використовуй дружній та теплий тон",ye=`${De.trim()?`Ти метеоролог-асистент. ${se}. Виконуй цю інструкцію: ${De}. Критичні попередження (якщо є) виводь на самому початку. Використовуй абзаци для розбиття тексту. Відповідь надай українською мовою.`:`Ти метеоролог-асистент. На основі наданих даних ${N}. ${se}. Згадай про комфортний одяг. КРИТИЧНІ ПОПЕРЕДЖЕННЯ (температура, вітер, УФ) став найвище. Використовуй абзаци для зручності читання. Відповідь виключно українською мовою.`}

Місто: ${n.locationName}. Поточний час на сайті: ${D}.

Поточні показники: ${H.temp}, ${H.description}, вологість ${H.humidity}, вітер ${H.wind_speed}.
Найближчі години: ${z}.
Прогноз на дні: завтра ${R[1]?.temp_day||"н/д"}, післязавтра ${R[2]?.temp_day||"н/д"}.
Тенденція на 2 тижні: 1-й тиждень ~${R[7]?.temp_day||"н/д"}, 2-й тиждень ~${R[14]?.temp_day||"н/д"}.`,bt=(await(await m.generateContent(ye)).response).text().trim();Z(bt),await c.default.setItem(`ai_weather_summary_${n.id}`,{text:bt,timestamp:Date.now()})}catch(m){console.error("Gemini Weather Error:",m)}finally{Ie(!1)}},[n,ge,De,me,Ce,D]),qt=(0,a.useCallback)(async()=>{const s=await c.default.getItem(`ai_weather_summary_${n.id}`);!s||Date.now()-s.timestamp>72e5?lt():Z(s.text)},[n.id,lt]),tn=async()=>{const s=!he;Ue(s),await c.default.setItem(`ai_enabled_${n.id}`,s),s&&!B&&qt()};(0,a.useEffect)(()=>{n.current&&n.daily16&&qt()},[n,qt]),(0,a.useEffect)(()=>{const s=m=>{m.detail?(!B||B.includes("Потрібен ключ"))&&lt():Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.")};return window.addEventListener("geminiKeyChanged",s),()=>window.removeEventListener("geminiKeyChanged",s)},[B,lt]),(0,a.useEffect)(()=>{re==="ai"&&c.default.getItem("gemini_api_key").then(s=>{s?(!B||B.includes("Потрібен ключ"))&&lt():Z("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.")})},[re,B,lt]);const[Jn,ln]=(0,a.useState)(!1),[fn,Pn]=(0,a.useState)("");(0,a.useEffect)(()=>{ln(!1)},[de]);const nn=(s,m=24,H=null,R=1)=>{let z=s;if(s&&typeof s!="string"){const ye=s.type?.name||"";ye==="FaSmog"?z="☁️":ye==="IoRainy"||ye==="LiaCloudSunRainSolid"?z="🌧️":ye==="GiSnowing"?z="❄️":ye==="IoThunderstorm"?z="⛈️":ye==="FaSun"?z="☀️":ye==="BsMoonStarsFill"?z="🌙":ye==="FaCloudMoon"?z="☁️":ye==="FaCloudMoonRain"||ye==="LiaCloudMoonRainSolid"?z="🌧️":z="☁️"}const N=document.createElement("canvas");N.width=m,N.height=m;const se=N.getContext("2d");return se.font=`${m-8}px serif`,se.textAlign="center",se.textBaseline="middle",se.fillStyle="rgba(0, 0, 0, 0.72)",se.globalAlpha=R,se.beginPath(),se.arc(m/2,m/2,m*.76,0,Math.PI*2),se.fill(),se.globalAlpha=R,se.fillStyle="#ffffff",se.fillText(z,m/2,m/2),H&&(se.fillStyle=H,se.font=`bold ${m/2}px Arial`,se.fillText("!",m-5,5)),N},In=(s,m=18,H=1)=>{const R=document.createElement("canvas"),z=m+12;R.width=z,R.height=z;const N=R.getContext("2d"),se=z/2,ye=((Number(s)||0)%360+360)%360,bt=Math.round(ye/45)*45*Math.PI/180;return N.translate(se,se),N.rotate(bt),N.fillStyle="rgba(0, 0, 0, 0.72)",N.globalAlpha=H,N.beginPath(),N.arc(0,0,z*.45,0,Math.PI*2),N.fill(),N.globalAlpha=H,N.fillStyle="#0099ff",N.strokeStyle="#ffffff",N.lineWidth=1.5,N.beginPath(),N.moveTo(0,-m*.43),N.lineTo(m*.2,m*.12),N.lineTo(m*.07,m*.08),N.lineTo(m*.07,m*.4),N.lineTo(-m*.07,m*.4),N.lineTo(-m*.07,m*.08),N.lineTo(-m*.2,m*.12),N.closePath(),N.fill(),N.stroke(),R},Wt=s=>{const m=((Number(s)||0)%360+360)%360,H=Math.round(m/45)*45;return gr(H%360)},$n=()=>{Y.trim()&&(F(n.id,Y),_(!1))},Ft=yc(n.hourly||[]),Mt=Ft[gt]?.items||[],Ht=Math.max(500,(Mt?.length||24)*35),Gt={labels:Mt?.map(s=>s.time)||[],datasets:[{label:"Температура (°C)",data:Mt?.map(s=>s.tempNum??0)||[],fill:!0,backgroundColor:"rgba(255, 179, 108, 0.2)",borderColor:"rgba(255, 179, 108, 1)",pointRadius:12,pointStyle:Mt?.map(s=>{let m=null;return(s.tempNum??0)>30?m="#ff0000":(s.tempNum??0)<-30?m="#004cff":(s.windNum??0)>10&&(m="#ff6a00"),nn(s.iconSymbol??s.iconPlaceholder??"☁️",24,m,nt.day)}),tension:.4,yAxisID:"y"},{label:"Вітер (м/с)",data:Mt?.map(s=>s.windNum??0)||[],borderColor:"rgba(0, 190, 235, 1)",backgroundColor:"rgba(0, 190, 235, 0.1)",pointRadius:6,pointBackgroundColor:Mt?.map(s=>(s.windNum??0)>10?"#ff6a00":"rgba(0, 190, 235, 1)")||[],pointStyle:Mt?.map(s=>In(s.wind_direction_10m,18,nt.wind))||[],tension:.4,yAxisID:"y1"}]},xt={"01.01":"Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)","06.01":"Богоявлення / Водохреще (новий стиль)","07.01":"Різдво Христове (старий стиль)","12.01":"1 серія 'Реальної містики'. Та вже, ціла епоха розкриття містифікацій у 12 сезонів!","14.01":"Василя / Обрізання Господнє (старий стиль)","19.01":"Богоявлення / Водохреще (старий стиль)","02.02":"Стрітення Господнє (новий стиль)","14.02":"З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!","15.02":"Стрітення Господнє (старий стиль)","08.03":"Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)","25.03":"Благовіщення Пресвятої Богородиці (новий стиль)","01.04":"Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)","07.04":"Благовіщення Пресвятої Богородиці (старий стиль)","23.04":"День святого Юрія / Георгія (новий стиль)","01.05":"День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!","02.05":"З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)","06.05":"День святого Юрія / Георгія (старий стиль)","08.05":"День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм.","09.05":"День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.","10.05":"Вознесіння Господнє (новий стиль)","27.05":"Випуск Dragon Village 3. Скачаєш? :)","29.05":"Особисте свято у цей день... Пробач, я теж маю секрети :)","10.06":"Вознесіння Господнє (старий стиль)","20.06":"Трійця / П'ятдесятниця (новий стиль)","21.06":"Просто літнє сонцестояння. Купив собі ескімо? :)","24.06":"Різдво Івана Хрестителя / Купала (новий стиль)","27.06":"Трійця / П'ятдесятниця (старий стиль)","28.06":"День Конституції України","29.06":"Святих апостолів Петра і Павла (новий стиль)","07.07":"Різдво Івана Хрестителя / Івана Купала (старий стиль)","12.07":"Святих апостолів Петра і Павла (старий стиль)","01.08":"День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(","06.08":"Преображення Господнє / Спас (новий стиль)","15.08":"Успіння Пресвятої Богородиці (новий стиль)","19.08":"Преображення Господнє / Спас (старий стиль)","24.08":"День Незалежності України","28.08":"Успіння Пресвятої Богородиці (старий стиль)","01.09":"День знань. Цей день усі ненавидять, бо термін відпустки закінчився.","08.09":"Різдво Пресвятої Богородиці (новий стиль)","11.09":"Випуск 1-ї серії м/с 'Динофроз'. Легенда...","14.09":"Воздвиження Хреста Господнього (новий стиль)","21.09":"Різдво Пресвятої Богородиці (старий стиль)","27.09":"Воздвиження Хреста Господнього (старий стиль)","01.10":"Покрова Пресвятої Богородиці та День козацтва (новий стиль)","14.10":"Покрова Пресвятої Богородиці та День козацтва (старий стиль)","27.10":"День української писемності та мови. Напиши по максимуму каліграфічний лист.","19.11":"Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)","21.11":"Введення в храм Пресвятої Богородиці (новий стиль)","30.11":"День святого Андрія Первозванного (новий стиль)","04.12":"Введення в храм Пресвятої Богородиці (старий стиль)","06.12":"День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","13.12":"День святого Андрія Первозванного (старий стиль)","19.12":"День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","25.12":"Різдво Христове (новий стиль)"},wn=s=>{const m=s.toLowerCase();return m.includes("сб")||m.includes("нд")},$t=s=>{if(!t?.birthDate||!s)return!1;const[,m,H]=t.birthDate.split("-"),[R,z]=s.split(".");return parseInt(H)===parseInt(R)&&parseInt(m)===parseInt(z)},an=(s,m,H)=>{const R=xt[s],z=wn(m),N=$t(s),se=E.find(ye=>ye.date===H);return R?{type:"holiday",color:"#ff6666",label:R+(z?" + вихідний":"")}:N?{type:"birthday",color:"#e066ff",label:"З Днем Народження! 🎉",isRainbow:!0}:se?{type:"custom",color:"#00bfff",label:se.reason}:z?{type:"weekend",color:"#ff9966",label:"вихідний"}:{type:"regular",color:null,label:""}},Lt=s=>{const m=new Date,H=new Date(s);H.setHours(0,0,0,0);const R=H.getTime()-m.getTime();if(R<=0)return null;const z=Math.floor(R/864e5),N=Math.floor(R%864e5/36e5);return z>0?`⏳ Залишилось: ${z}д ${N}г`:`⏳ Почнеться за ${N}г`},vn=(s,m,H)=>{const R=E.find(ye=>ye.date===H),z=Lt(H),N=z?` (${z})`:"";if(R)return`💙 Ваша подія: ${R.reason}${N}`;if($t(s))return`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈${N}`;const se=xt[s];return se?`✨ Вітаємо з святом: ${se}!${N}`:null},dn={labels:n.daily16?.map(s=>`${s.date}
${s.day}`)||[],datasets:[{label:"День (°C)",data:n.daily16?.map(s=>parseInt(s.temp_day))||[],borderColor:`rgba(255, 179, 108, ${nt.day})`,backgroundColor:`rgba(255, 179, 108, ${nt.day*.5})`,pointRadius:12,pointStyle:n.daily16?.map(s=>nn(s.iconSymbol??s.iconPlaceholder,24,null,nt.day)),pointBorderColor:n.daily16?.map(s=>an(s.date,s.day,s.fullDate).color||"#ffb36c"),pointBorderWidth:n.daily16?.map(s=>an(s.date,s.day,s.fullDate).color?3:2),tension:.3,yAxisID:"y"},{label:"Ніч (°C)",data:n.daily16?.map(s=>parseInt(s.temp_night))||[],borderColor:`rgba(255, 20, 147, ${nt.night})`,backgroundColor:`rgba(255, 20, 147, ${nt.night*.2})`,pointStyle:"circle",pointRadius:4,tension:.3,yAxisID:"y"},{label:"Вітер (м/с)",data:n.daily16?.map(s=>parseFloat(s.wind_speed)||0)||[],borderColor:`rgba(0, 153, 255, ${nt.wind})`,backgroundColor:`rgba(0, 153, 255, ${nt.wind*.2})`,pointStyle:n.daily16?.map(s=>In(s.wind_direction_10m,18,nt.wind)),pointRadius:6,pointBorderColor:"#ffffff",pointBorderWidth:1.5,pointBackgroundColor:n.daily16?.map(s=>parseFloat(s.wind_speed)>10?"#ff6a00":"#0099ff"),tension:.3,yAxisID:"y1"}]},et={animation:Dt?!1:void 0,responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,external:rn,callbacks:{title:s=>`⏰ Час: ${s[0].label}`,label:s=>{if(s.datasetIndex===0){const m=s.parsed.y||0;let H=`Температура: ${m}°C`,R=[];return m>30&&R.push("СПЕКА ☀️"),m<-30&&R.push("МОРОЗ ❄️"),R.length>0&&(H+=` ⚠️ ${R.join(", ")}`),H}else if(s.datasetIndex===1){const m=s.parsed.y||0;let H=` Вітер: ${m.toFixed(1)} м/с`;m>10&&(H+=" ⚠️ СИЛЬНИЙ ВІТЕР");const R=Mt?.[s.dataIndex];return R&&(H+=` | ${Wt(R.wind_direction_10m)} (${Math.round(R.wind_direction_10m||0)}°)`),H}return""},afterLabel:s=>{const m=s.dataIndex,H=Mt?.[m];return s.datasetIndex===0&&H&&(H.iconSymbol||H.iconPlaceholder)||""}}}},scales:{y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"rgba(0, 190, 235, 1)"},ticks:{color:"rgba(0, 190, 235, 1)",font:{size:10}},grid:{drawOnChartArea:!1}},x:{offset:!0,ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{display:!1}}}},Jt={...et,plugins:{...et.plugins,legend:{display:!1},tooltip:{...et.plugins.tooltip,external:rn,callbacks:{title:s=>{const m=n.daily16?.[s[0].dataIndex];if(!m)return s[0].label;const H=an(m.date,m.day,m.fullDate),R=vn(m.date,m.day,m.fullDate),z=H.label?` [${H.label}]`:"",N=s[0].label+z;return R?[R,N]:N},label:s=>{const m=s.datasetIndex===0,H=s.datasetIndex===1,R=s.datasetIndex===2;if(m)return`☀️ День: ${s.parsed.y}°C`;if(H)return`🌙 Ніч: ${s.parsed.y}°C`;if(R){const z=n.daily16?.[s.dataIndex]?.wind_direction_10m||0;return`🌬️ Вітер: ${s.parsed.y.toFixed(1)} м/с | ${Wt(z)} (${Math.round(z)}°)`}return""},afterLabel:s=>{const m=n.daily16?.[s.dataIndex];return!m||s.datasetIndex!==0?"":`
Описання: ${m.description||"—"}`}}}},scales:{...et.scales,y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"#0099ff"},ticks:{color:"#0099ff",font:{size:10}},grid:{drawOnChartArea:!1}},x:{...et.scales.x,ticks:{...et.scales.x.ticks,color:s=>{if(!n.daily16||s.index>=n.daily16.length)return r?"#aaa":"#888";const m=n.daily16[s.index];return an(m.date,m.day,m.fullDate).color||(r?"#aaa":"#888")},font:{...et.scales.x.ticks.font,weight:s=>{if(!n.daily16||s.index>=n.daily16.length)return"normal";const m=n.daily16[s.index];return an(m.date,m.day,m.fullDate).color?"bold":"normal"}}}}},onClick:(s,m)=>{if(m.length>0){const H=m[0].index,R=n.daily16[H],z=an(R.date,R.day,R.fullDate);if(z.type==="holiday"||z.type==="birthday")ae(R);else if(z.type==="custom")ae(R),Pn(z.label);else if(P.trim()){if(P.trim().length>12){alert("Назва свята занадто довга (макс. 12 символів)!");return}I(Xi({date:R.fullDate,reason:P.trim()}))}else ae(R)}}};function rn(s){const{chart:m,tooltip:H}=s,R=document.fullscreenElement,z=R||document.body;let N=z.querySelector("#chartjs-external-tooltip");if(!N){const Zt=document.getElementById("chartjs-external-tooltip");Zt&&Zt.remove(),N=document.createElement("div"),N.id="chartjs-external-tooltip",N.style.position="fixed",N.style.zIndex="2147483647",N.style.maxWidth="min(280px, calc(100vw - 24px))",N.style.boxSizing="border-box",N.style.whiteSpace="pre-line",N.style.background="rgba(15, 15, 25, 0.92)",N.style.color="#fff",N.style.borderRadius="8px",N.style.padding="8px 12px",N.style.pointerEvents="none",N.style.transition="all 0.1s ease",N.style.boxShadow="0 8px 20px rgba(0,0,0,0.4)",N.style.border="1px solid rgba(255, 179, 108, 0.4)",N.style.fontSize="12px",N.style.backdropFilter="blur(6px)",N.setAttribute("role","dialog"),z.appendChild(N)}if(H.opacity===0){N.style.opacity="0";return}if(H.body){const Zt=H.title||[],gn=H.body.map(Nt=>Nt.lines),Nn=H.afterBody||[];let Rn="";Zt.forEach(Nt=>{Rn+=`<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${Nt}</div>`}),gn.forEach(Nt=>{Rn+=`<div style="margin-bottom: 2px;">${Nt}</div>`}),Nn.forEach(Nt=>{Rn+=`<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${Nt}</div>`}),N.innerHTML=Rn}const se=m.canvas.getBoundingClientRect(),ye=N.offsetWidth,bt=N.offsetHeight,Yt=R?R.clientWidth:window.innerWidth,jt=R?R.clientHeight:window.innerHeight,Dn=Math.min(Math.max(12,se.left+H.caretX+10),Yt-ye-12),Mn=Math.min(Math.max(12,se.top+H.caretY-bt-10),jt-bt-12);N.style.opacity="1",N.style.left=`${Dn}px`,N.style.top=`${Mn}px`}return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,e.jsxs)(au,{$isMain:n.isMain,$isDarkMode:r,children:[(0,e.jsxs)(ru,{$isMain:n.isMain,style:{position:"relative",zIndex:10,background:r?"#222":"#444",borderRadius:"8px 8px 0 0"},children:[(0,e.jsxs)("div",{children:[O?(0,e.jsxs)("div",{style:{gap:"2px"},children:[(0,e.jsx)("input",{type:"text",value:Y,onChange:s=>te(s.target.value),autoFocus:!0,style:{padding:"2px 5px",fontSize:"14px",borderRadius:"4px",border:"1px solid #ff6a00",background:r?"#333":"#fff",color:r?"#fff":"#000"}}),(0,e.jsx)("button",{onClick:$n,style:{background:"green",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",padding:"2px 8px"},children:"✓"}),(0,e.jsx)("button",{onClick:()=>_(!1),style:{background:"red",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",padding:"2px 4px"},children:"✕"})]}):(0,e.jsxs)("h3",{style:{display:"flex",alignItems:"center",gap:"8px",margin:0},children:[(0,e.jsxs)("span",{style:{color:"#ffb36c",fontWeight:700},children:["#",p]}),(0,e.jsx)("span",{children:n.locationName})]}),(0,e.jsxs)("p",{style:{fontSize:"10px",color:"#fcfcfc"},children:["Широта: ",n.lat?.toFixed(2),", Довгота: ",n.lon?.toFixed(2)]})]}),(0,e.jsxs)(ou,{style:{position:"relative"},children:[(0,e.jsx)(Un,{content:"Налаштування картки",isDarkMode:r,children:(0,e.jsx)("button",{ref:s=>{n.isMain&&w&&w("weatherGear",s)},onClick:()=>{window.dispatchEvent(new CustomEvent("domino-weather-gear-clicked")),_e?qe():Be(!0)},"aria-label":"Налаштування картки",style:{fontSize:"28px",padding:"5px",display:"inline-flex",alignItems:"center",gap:"4px"},children:(0,e.jsx)(Sd,{size:28})})}),(_e||be)&&(0,e.jsxs)(hu,{$isDarkMode:r,$isClosing:be,children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",padding:"2px 5px 0 0"},children:(0,e.jsx)(Un,{content:"Закрити меню",isDarkMode:r,children:(0,e.jsx)("button",{onClick:qe,style:{background:"transparent",border:"none",color:r?"#ffb36c":"#333",fontSize:"20px",cursor:"pointer",fontWeight:"900",padding:"4px",lineHeight:1},"aria-label":"Закрити меню",children:"✕"})})}),!O&&(0,e.jsxs)("button",{onClick:()=>{_(!0),qe()},style:{textAlign:"left",padding:"0px 0px 10px 10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Nd,{size:16})," Змінити назву"]}),(0,e.jsxs)("button",{onClick:()=>{Te(!0),qe()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(vd,{size:16})," Змінити фон"]}),(0,e.jsxs)("button",{onClick:()=>{tn(),qe()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Fl,{size:16})," ",he?"Вимкнути ШІ":"Увімкнути ШІ"]}),(0,e.jsx)("button",{onClick:()=>{vt(!0),qe()},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:"📅 Встановити дати"}),(0,e.jsxs)("button",{onClick:()=>{y(T||n.cityImage)},style:{textAlign:"left",padding:"10px",background:"transparent",color:r?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Fd,{size:16})," Детальна погода"]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px",borderBottom:"1px solid #444"},children:[(0,e.jsx)("button",{disabled:p===0,onClick:()=>{qe(),C(n.id,-1)},style:{flex:1,background:"transparent",color:p===0?"grey":r?"#fff":"#000",fontSize:"13px",cursor:p===0?"default":"pointer"},children:"Зробити вище картку"}),(0,e.jsx)("button",{disabled:p===x-1,onClick:()=>{qe(),C(n.id,1)},style:{flex:1,background:"transparent",color:p===x-1?"grey":r?"#fff":"#000",fontSize:"13px",cursor:p===x-1?"default":"pointer"},children:"Зробити нижче картку"})]}),n.isMain?(0,e.jsxs)("button",{onClick:st,style:{textAlign:"left",padding:"10px",background:"transparent",color:u?r?"#fff":"#000":"#b300ad",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Vd,{size:14})," ",u?"GPS On":"GPS Off"]}):(0,e.jsxs)("button",{onClick:()=>{g(n.id)},style:{textAlign:"left",padding:"10px",background:"transparent",color:"red",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Ji,{size:14})," Видалити"]})]})]})]}),(0,e.jsx)(Xc,{customDays:E,cardId:n.id}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",borderBottom:"1px solid rgb(0,238,255)"},children:[{key:"current",label:"Зараз"},{key:"hourly",label:"Годинна"},{key:"daily",label:"Місячна"},{key:"ai",label:"ШІ"}].map(s=>(0,e.jsx)("button",{onClick:()=>G(s.key),style:{padding:"4px 2px",border:"none",borderBottom:re===s.key?"2px solid #00eeff":"2px solid transparent",background:"transparent",color:re===s.key?"#00eeff":r?"#aaa":"#555",fontWeight:re===s.key?700:400,fontSize:"11px",cursor:"pointer",transition:"all 0.2s"},children:s.label},s.key))}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[re==="current"&&(0,e.jsx)(iu,{$image:T||n.cityImage,style:{height:"auto",minHeight:"270px",borderRadius:0},children:(0,e.jsx)(su,{style:{position:"relative",borderRadius:0,padding:"2px",background:"rgba(0,0,0,0.6)"},children:(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4px",fontSize:"13px",width:"100%",padding:"3px",boxSizing:"border-box"},children:[(0,e.jsxs)("div",{"aria-label":n.current.iconPlaceholder,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"32px",lineHeight:"1"},children:n.current.iconSymbol||"🌤️"}),(0,e.jsx)("div",{style:{marginTop:"5px",fontSize:"11px",fontWeight:"bold",textAlign:"center",lineHeight:"1.2"},children:(n.current.iconPlaceholder||"").replace(n.current.iconSymbol||"","").trim()||"Мінлива хмарність"})]}),(0,e.jsxs)("div",{"aria-label":"Температура / Відчувається як",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:parseFloat(n.current.temp)<5?"#4da6ff":parseFloat(n.current.temp)>25?"#ff4d4d":"inherit"},children:parseFloat(n.current.temp)<5?(0,e.jsx)(bd,{}):parseFloat(n.current.temp)>25?(0,e.jsx)(hd,{}):(0,e.jsx)(rd,{})}),(0,e.jsxs)("div",{style:{fontWeight:"bold",textAlign:"center"},children:[n.current.temp,(0,e.jsxs)("div",{style:{fontSize:"9px",fontWeight:"normal",opacity:.8},children:["Відчувається: ",n.current.feels_like]})]})]}),(0,e.jsxs)("div",{"aria-label":"Відносна вологість",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:parseFloat(n.current.humidity)>70?"#4da6ff":"inherit"},children:parseFloat(n.current.humidity)>70?(0,e.jsx)($l,{}):(0,e.jsx)(fd,{})}),(0,e.jsxs)("div",{style:{marginTop:"10px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:["Вологість: ",n.current.humidity??"—"]})]}),(0,e.jsxs)("div",{"aria-label":`Вітер: ${n.current.wind_speed}, Напрямок: ${n.current.wind_direction_10m}° (${gr(n.current.wind_direction_10m)}), Пориви: ${n.current.wind_gusts_10m} м/с`,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"28px"},children:(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${Math.round((n.current.wind_direction_10m||0)/45)*45%360}deg)`},children:"⬇"})}),(0,e.jsxs)("div",{style:{fontWeight:"bold",textAlign:"center",marginTop:"-15px",fontSize:"12px"},children:["Швидкість вітру: ",n.current.wind_speed,(0,e.jsxs)("div",{style:{fontSize:"10px",fontWeight:"normal",opacity:.8},children:[n.current.wind_direction_10m,"° ",gr(n.current.wind_direction_10m)]}),(0,e.jsxs)("div",{style:{fontSize:"10px",fontWeight:"bold",opacity:.9,color:d?"#ff4d4d":"inherit"},children:["Пориви: ",n.current.wind_gusts_10m,"м/с"]})]})]}),(0,e.jsx)(Un,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:r,children:(0,e.jsxs)("div",{"aria-label":"Точка роси (температура, при якій утворюється роса)",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:(0,e.jsx)(Nl,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center"},children:["Точка роси: ",n.current.dew_point_2m,"°C"]})]})}),(0,e.jsxs)("div",{"aria-label":"Атмосферний тиск",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:parseFloat(n.current.pressure)<1e3?"#4da6ff":parseFloat(n.current.pressure)>1020?"#ff4d4d":"inherit"},children:(0,e.jsx)(Ql,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"12px"},children:["Атмосферний тиск: ",n.current.pressure]})]}),(0,e.jsxs)("div",{"aria-label":"Хмарність",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:parseFloat(n.current.cloud_cover)<50?(0,e.jsx)(Kd,{}):(0,e.jsx)(Hd,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"11px"},children:["Хмарність: ",n.current.cloud_cover,"%"]})]}),(0,e.jsxs)("div",{"aria-label":"Видимість",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",opacity:Math.min(1,Math.max(.3,(n.current.visibility||1e4)/1e4)),color:(n.current.visibility||1e4)<2e3?"#ff4d4d":"inherit"},children:(0,e.jsx)(td,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"10px"},children:["Видимість:",n.current.visibility!==void 0?(n.current.visibility/1e3).toFixed(1):"—","км"]})]}),(0,e.jsxs)("div",{"aria-label":"УФ-індекс / Сонячна радіація",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px",background:"rgba(255,255,255,0.1)",borderRadius:"8px",cursor:"help"},children:[(0,e.jsx)("div",{style:{fontSize:"24px",color:(n.current.uv_index||0)>5?"#ff4d4d":(n.current.uv_index||0)>2?"#ffd700":"inherit"},children:(0,e.jsx)(Md,{})}),(0,e.jsxs)("div",{style:{marginTop:"5px",fontWeight:"bold",textAlign:"center",fontSize:"10px"},children:["УФ-індекс: ",n.current.uv_index??0]})]})]})})}),re==="hourly"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},children:(0,e.jsx)("h4",{style:{margin:0},children:"Годинний прогноз"})}),Ft.length>1&&(0,e.jsx)("div",{style:{marginTop:"8px",marginBottom:"8px"},children:(0,e.jsx)("select",{value:gt,onChange:s=>Le(Number(s.target.value)),style:{width:"100%",maxWidth:"260px",padding:"8px 10px",borderRadius:"8px",border:r?"1px solid #555":"1px solid #ccc",background:r?"#1f1f1f":"#fff",color:r?"#fff":"#000",fontSize:"13px",fontWeight:"600",cursor:"pointer"},children:Ft.map((s,m)=>(0,e.jsx)("option",{value:m,children:s.title||s.label},s.label))})}),Mt&&Mt.length>0&&(0,e.jsxs)("div",{ref:Me,style:{position:"relative",width:"100%",minHeight:ce==="hourly"?Dt?`${window.innerHeight}px`:"100vh":void 0,padding:ce==="hourly"?"16px":void 0,boxSizing:"border-box",background:ce==="hourly"?r?"#000":"#f5f5f5":"transparent"},children:[ze("hourly",Me,[{key:"day",label:"Температура",color:"#ffb36c"},{key:"wind",label:"Вітер",color:"#0099ff"}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(_o,{children:(0,e.jsx)(aa,{$width:ce==="hourly"?`max(100%, ${Ht}px)`:Ht,$height:ce==="hourly"?Dt?`${window.innerHeight-90}px`:"calc(100vh - 90px)":"150px",children:(0,e.jsx)(na,{ref:We,options:et,data:Gt},`hourly-${ce||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ce==="hourly"?"none":"block"},children:(0,e.jsx)(aa,{$width:Ht,$height:"150px",children:(0,e.jsx)(na,{options:{...et,plugins:{...et.plugins,tooltip:{enabled:!1}}},data:Gt})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ce==="hourly"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:`${Ht}px`,height:"150px"},children:(0,e.jsx)(aa,{$width:Ht,$height:"150px",children:(0,e.jsx)(na,{options:{...et,plugins:{...et.plugins,tooltip:{enabled:!1}}},data:Gt})})})})]})]})]}),re==="daily"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Прогноз на 16 днів (включаючи 2 минулі дні)"})}),(0,e.jsxs)("div",{style:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"6px 8px",background:r?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(4px)",borderBottom:"1px solid #ffb36c",zIndex:100},children:[Ge([{key:"day",label:"День",color:"#ffb36c"},{key:"night",label:"Ніч",color:"#ff1493"},{key:"wind",label:"Вітер",color:"#0099ff"}]),Re("daily",ht)]}),(0,e.jsxs)("div",{ref:ht,style:{position:"relative",width:"100%",minHeight:ce==="daily"?Dt?`${window.innerHeight}px`:"100vh":void 0,padding:ce==="daily"?"16px":void 0,boxSizing:"border-box",background:ce==="daily"?r?"#000":"#f5f5f5":"transparent"},children:[ce==="daily"&&ze("daily",ht,[{key:"day",label:"День",color:"#ffb36c"},{key:"night",label:"Ніч",color:"#ff1493"},{key:"wind",label:"Вітер",color:"#0099ff"}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(_o,{ref:Rt,children:(0,e.jsx)(aa,{$width:ce==="daily"?"max(100%, 900px)":900,$height:ce==="daily"?Dt?`${window.innerHeight-120}px`:"calc(100vh - 120px)":"190px",children:(0,e.jsx)(na,{ref:xe,options:Jt,data:dn},`daily-${ce||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ce==="daily"?"none":"block"},children:(0,e.jsx)(aa,{$width:1300,$height:"150px",children:(0,e.jsx)(na,{options:{...Jt,plugins:{...Jt.plugins,tooltip:{enabled:!1}}},data:dn})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ce==="daily"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"1300px",height:"150px"},children:(0,e.jsx)(aa,{$width:1300,$height:"150px",children:(0,e.jsx)(na,{options:{...Jt,plugins:{...Jt.plugins,tooltip:{enabled:!1}}},data:dn})})})})]})]})]}),re==="ai"&&B&&(0,e.jsxs)(uu,{$isDarkMode:r,layout:!0,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[(0,e.jsx)("span",{className:"ai-header-text",style:{fontWeight:800,color:"#faf7fd",fontSize:"11px",letterSpacing:"1px"},children:"Прогноз ШІ"}),(0,e.jsx)("button",{className:"ai-edit-btn",onClick:()=>ct(!rt),style:{background:"none",border:"none",cursor:"pointer",fontWeight:600,fontSize:"12px",color:"#ffffff",padding:0},children:rt?"Готово":"Редагувати умову промпту"})]}),rt?(0,e.jsxs)(gu,{$isDarkMode:r,children:[(0,e.jsx)("label",{style:{fontSize:"10px",fontWeight:"bold"},children:"Своя інструкція:"}),(0,e.jsx)(mu,{$isDarkMode:r,value:De,onChange:s=>Ze(s.target.value),placeholder:"Наприклад: Дай поради для рибалки на основі вітру та тиску..."}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsxs)("select",{value:me,onChange:s=>$e(s.target.value),style:{fontSize:"10px",padding:"2px",borderRadius:"4px",background:r?"#333":"#fff",color:r?"#fff":"#000"},children:[(0,e.jsx)("option",{value:"concise",children:"Стисло"}),(0,e.jsx)("option",{value:"extensive",children:"Обширно"})]}),(0,e.jsxs)("select",{value:Ce,onChange:s=>dt(s.target.value),style:{fontSize:"10px",padding:"2px",borderRadius:"4px",background:r?"#333":"#fff",color:r?"#fff":"#000"},children:[(0,e.jsx)("option",{value:"friendly",children:"Дружній"}),(0,e.jsx)("option",{value:"scientific",children:"Науковий"}),(0,e.jsx)("option",{value:"sarcastic",children:"Саркастичний"})]}),(0,e.jsx)("button",{onClick:async()=>{await c.default.setItem(`ai_custom_prompt_${n.id}`,De),await c.default.setItem(`ai_response_length_${n.id}`,me),await c.default.setItem(`ai_style_${n.id}`,Ce),ct(!1),lt()},style:{background:"#8a2be2",color:"white",border:"none",borderRadius:"4px",padding:"4px 8px",fontSize:"10px",cursor:"pointer",fontWeight:"bold"},children:"Зберегти та оновити"})]})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(sn.div,{layout:!0,transition:{duration:.3},children:(0,e.jsx)(pu,{ref:ut,$isExpanded:!1,children:B})}),ot&&(0,e.jsx)(fu,{onClick:()=>S(!0),children:"Читати далі..."})]})]}),re==="ai"&&ge&&(0,e.jsx)(Ho,{$isDarkMode:r,children:(0,e.jsx)("div",{style:{color:"#b362ff"},children:"⏳ Генерація прогнозу ШІ..."})}),re==="ai"&&!B&&!ge&&(0,e.jsx)(Ho,{$isDarkMode:r,children:(0,e.jsx)("div",{style:{color:r?"#aaa":"#555"},children:"ШІ-аналіз недоступний. Перевірте ключ Gemini API."})})]})]}),Ee&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.75)",zIndex:4e3,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>S(!1),children:(0,e.jsxs)("div",{style:{background:r?"#1a1a2e":"#fff",border:"1px solid rgba(138,43,226,0.5)",borderRadius:"12px",padding:"20px",width:"90%",maxWidth:"480px",maxHeight:"80vh",overflowY:"auto",color:r?"#efefff":"#222",fontSize:"13px",lineHeight:1.6,whiteSpace:"pre-line"},onClick:s=>s.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[(0,e.jsx)("span",{style:{fontWeight:800,color:"#b362ff",fontSize:"13px",letterSpacing:"1px"},children:"Прогноз ШІ — повний текст"}),(0,e.jsx)("button",{onClick:()=>S(!1),style:{background:"none",border:"none",color:"#b362ff",fontSize:"18px",cursor:"pointer"},children:"✕"})]}),B]})}),mt&&(0,e.jsx)(Jc,{isDarkMode:r,currentCardId:n.id,onClose:()=>vt(!1)}),V&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",zIndex:3e3,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>Q(!1),children:(0,e.jsxs)("div",{ref:s=>{n.isMain&&w&&w("weatherModal",s)},style:{background:r?"#222":"#fff",borderRadius:"10px",padding:"20px",width:"90%",maxWidth:"350px",color:r?"#fff":"#000"},onClick:s=>s.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:"0 0 15px 0"},children:"Налаштування картки"}),(0,e.jsx)("p",{style:{fontSize:"13px",color:r?"#aaa":"#555",marginBottom:"15px"},children:"Картка тепер використовує вкладки: Зараз / Годинна / Місячна / ШІ."}),(0,e.jsx)("button",{onClick:()=>Q(!1),style:{width:"100%",padding:"10px",background:"#ffb36c",color:"#000",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Закрити"})]})}),pe&&(0,e.jsx)(lu,{onClick:()=>Te(!1),children:(0,e.jsxs)(du,{onClick:s=>s.stopPropagation(),children:[(0,e.jsxs)("h2",{style:{margin:0,color:"#ffb36c"},children:["Зміна фону: ",n.locationName]}),(0,e.jsxs)(cu,{children:[(0,e.jsxs)(Vo,{$active:X==="wiki",onClick:()=>Je("wiki"),children:[(0,e.jsx)(Vr,{children:"Вікіпедія"}),(0,e.jsx)(Bo,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png"})]}),Ma.filter(s=>!s.src.endsWith(".mp4")).map((s,m)=>(0,e.jsxs)(Vo,{$active:X===s.src,onClick:()=>Je(s.src),children:[s.author&&(0,e.jsxs)(il,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:s.author}),s.source&&(0,e.jsx)("div",{children:s.source})]}),(0,e.jsx)(Vr,{children:s.name}),(0,e.jsx)(Bo,{src:s.src})]},m))]}),(0,e.jsx)("button",{onClick:()=>Te(!1),style:{padding:"8px",background:"#ffb36c",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",marginTop:"10px"},children:"Закрити"})]})})]})},bu=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${t=>t.$isDarkMode?`url(${Ra}) center/cover no-repeat, linear-gradient(135deg, #000000 0%, #000000 100%)`:`url(${Ra}) center/cover no-repeat, linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`};
  color: ${t=>t.$isDarkMode?"#ffffff":"#333333"};
  font-family: var(--font-family, "Inter", sans-serif);
  text-align: center;
  padding: 20px;
  overflow: hidden;
`,yu=i(sn.h1)`
  font-size: 8rem;
  margin: 0;
  font-weight: 900;
  background: ${t=>t.$isDarkMode?"linear-gradient(90deg, #ffb36c, #94fffa)":"linear-gradient(90deg, #ff7e5f, #feb47b)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`,wu=i(sn.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 750px;
  background: #0000009b;
  margin-bottom: 40px;
  line-height: 1.5;
`,vu=i(pd)`
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${t=>t.$isDarkMode?"#000":"#fff"};
  background: ${t=>t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid ${t=>t.$isDarkMode?"transparent":"#333"};
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${t=>t.$isDarkMode?"#ffa149":"#555"};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`,ku=({isDarkMode:t=!0})=>(0,e.jsxs)(bu,{$isDarkMode:t,children:[(0,e.jsx)(yu,{$isDarkMode:t,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:"404"}),(0,e.jsx)(wu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:"Уведіть правильну назву сторінки! Треба було Доміно поставити на фото, чи Ніцерона. А хоча воно ніби наказує що ти маєш не залишатися тут довго."}),(0,e.jsx)(sn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,e.jsx)(vu,{to:"/",$isDarkMode:t,children:"Повернутися на головну"})})]}),Su=Fe`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`,sl=Fe`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`,ju=Fe`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`,Cu=Fe`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`,Tu=i(sn.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  overflow: hidden;
  font-family: var(--font-family, "Inter", sans-serif);

  /* фон: зображення + чорний градієнт */
  background:
    url(${Ra}) center / cover no-repeat,
    linear-gradient(135deg, #000 0%, #0a0a0a 100%);

  /* скан-лінії поверх */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.15) 3px,
      rgba(0, 0, 0, 0.15) 4px
    );
    animation: ${Su} 8s linear infinite;
    pointer-events: none;
  }
`,Au=i(sn.h1)`
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 900;
  margin: 0 0 16px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${ju} 6s infinite;
`,Iu=i(sn.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 22px;
  margin-bottom: 28px;
  border-radius: 999px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  background: rgba(255, 179, 108, 0.1);
  color: #ffb36c;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);

  span.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffb36c;
    animation: ${sl} 1.2s ease-in-out infinite;
    flex-shrink: 0;
  }
`,Du=i(sn.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 36px 40px;
  max-width: 640px;
  width: 100%;
  box-shadow:
    0 0 0 1px rgba(148, 255, 250, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.6);
`,Mu=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
`,Ru=i.p`
  margin: 0;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.12em;
`,zu=i.p`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 800;
  color: #94fffa;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  text-shadow: 0 0 20px rgba(148, 255, 250, 0.5);
`,Lu=i.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
  margin: 0 0 28px;
`,Uo=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  margin-bottom: 10px;
`,Ko=i.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  box-shadow: 0 0 8px ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  animation: ${sl} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`,qo=i.span`
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
`,Eu=i.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${Cu} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,Fu=({isDarkMode:t=!0,endTime:n=null,message:r=null})=>{const[u,l]=(0,a.useState)(null),[d,b]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!n)return;const p=()=>{const f=new Date(n)-Date.now();if(f<=0){l(null),b(!0),setTimeout(()=>window.location.reload(),6e4);return}const g=Math.floor(f/36e5),F=Math.floor(f%36e5/6e4),C=Math.floor(f%6e4/1e3);l(`${g>0?`${g}год `:""}${String(F).padStart(2,"0")}хв ${String(C).padStart(2,"0")}с`)};p();const x=setInterval(p,1e3);return()=>clearInterval(x)},[n]),(0,e.jsx)(Qa,{children:(0,e.jsxs)(Tu,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},children:[(0,e.jsxs)(Iu,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.5},children:[(0,e.jsx)("span",{className:"dot"}),"Технічні роботи"]}),(0,e.jsx)(Au,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.5},children:d?"⚡ Завершено!":`⚙️ Увага!
Зараз техроботи`}),(0,e.jsxs)(Du,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:.55,type:"spring",stiffness:120},children:[(0,e.jsx)(Eu,{children:(0,e.jsx)("img",{src:Ra,alt:""})}),n&&(0,e.jsxs)(Mu,{children:[(0,e.jsx)(Ru,{children:d?"Перезавантаження через":"Залишилось часу"}),(0,e.jsx)(zu,{children:d?"~1 хв":u??"Підраховуємо…"})]}),(0,e.jsx)(Lu,{children:r??"Ми проводимо технічне обслуговування сайту. Якщо роботи завершаться раніше — ви отримаєте сповіщення і сторінка перезавантажиться автоматично. Якщо ні — очікуйте, час буде вказано вище."}),(0,e.jsxs)(Uo,{children:[(0,e.jsx)(Ko,{$ok:!1}),(0,e.jsx)(qo,{children:"Сайт тимчасово недоступний"})]}),d&&(0,e.jsxs)(Uo,{children:[(0,e.jsx)(Ko,{$ok:!0}),(0,e.jsx)(qo,{children:"Роботи завершено — перезавантаження…"})]})]})]},"maintenance-overlay")})},ll=Pd({apiKey:"AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",authDomain:"stuxia-5b535.firebaseapp.com",projectId:"stuxia-5b535",storageBucket:"stuxia-5b535.firebasestorage.app",messagingSenderId:"801101038904",appId:"1:801101038904:web:70d01ab63f631b74acadcd"}),un=ad(ll),Wo=Bd(ll),Xm=new jd;function Pu(t){const n=An(un,"config","global");return ud(n,r=>{if(!r.exists()){t({isMaintenanceMode:!1,endTime:null,message:null});return}const u=r.data();t({isMaintenanceMode:!!u.isMaintenanceMode,endTime:u.maintenanceEndTime??null,message:u.maintenanceMessage??null})},()=>{t({isMaintenanceMode:!1,endTime:null,message:null})})}var Go="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",$u="/assets/flame-D00vcfgc.webp",Br="/assets/turkeys-CKqvNzQ4.mp3",Nu="/assets/humor-DlTxVxCE.mp4",Ou="/assets/unity-F-cBWwIf.webp",Vu="/assets/monody-DBysFOWl.webp",Bu="/assets/dominos-shop-Nw1bGnL3.mp3",_u="/assets/hunger-Bja8eIKz.webp",Hu="/assets/dinofroz-Bw1EE6sM.mp3",Uu="/assets/thefatrat-monody-Bn_jMkG9.mp3",Ku="/assets/unity-Dfk4ENTo.mp3",qu="/assets/thefatrat-hunger-CL1g_1gU.mp3",Wu="/assets/dragon-CPH8-885.mp3",Gu="/assets/soloveyko-CQrENymR.mp3",Ju="/assets/harmonic-japan-Dd6wyKZa.mp3",Yu="/assets/electrodynamix-BOk9PXVN.mp3",Zu="/assets/clubstep-C7imHHYw.mp3",Xu="/assets/mdk-fingerbang-full-Blwgeg1D.mp3",Qu="/assets/theoty-of-everything-ll-C8ndIrWQ.mp3",ep="/assets/theory-of-everyting-DW0SvZ3g.mp3",tp="/assets/deadlocked-VXA-1jpn.mp3",np="/assets/mechanik-kindom-Ck3xg6-z.mp3",ap="/assets/no-no-no-Cs2QaRjF.webp",rp="/assets/thefatrat-no-no-no-BmhHAhgN.mp3",ra={faded:nl,dinofrozVideo:rl,soloveyko:Qi,harmony:es,horse:ts,theorytwo:ns,fingerdash:as,humorVideo:Nu,electrodynamix:rs,desert:os,deserttwo:is,desertthree:ss,desertfour:ls,desertone:ds,unity:Ou,mecha:cs,monody:Vu,clubstep:us,turkeys:rr,horsethree:ps,horsetwo:Dc,chess:fs,turkeytwo:gs,turkeythree:ms,turkeyfour:hs,turkeyfive:xs,turkeysix:bs,turkeysone:ys,turkeyseven:ws,asiumnine:vs,asiumone:ks,asiumtwo:Ss,asiumthree:js,asiumfour:Cs,asiumfive:Ts,asiumsix:As,asiumten:Is,asiumeleven:Ds,asiumseven:Ms,swamptwo:Rs,swampthree:zs,swampfour:Ls,swampfive:Es,swampsix:Fs,swampseven:Ps,swampeight:$s,swampnine:Ns,theory:Os,deadlocked:Vs,horrortwo:Bs,horrorthree:_s,horrorfour:Hs,horrorfive:Us,horror:Jr,horrorsix:Ks,horrorseven:qs,horroreight:Ws,dinofrozone:Yr,dinofrozthree:Gs,dinofrozfour:Js,dinofrozfive:Ys,dinofrozsix:Zs,dinofrozseven:Xs,dinofrozeight:Qs,dinofroztwo:Zr,dinofroznine:el,domino:Bu,hunger:_u,mia:al,dinofrozAudio:Hu,turkeyAudio:Br,monodyAudio:Uu,unityAudio:Ku,hungerAudio:qu,dragonoraAudio:Wu,soloveykoAudio:Gu,harmonyAudio:Ju,electrodynamixAudio:Yu,clubstepAudio:Zu,fingerbang:Xu,theorytwoAudio:Qu,theoryAudio:ep,deadlockedAudio:tp,mechaAudio:np,nonono:ap,nononoAudio:rp},Qm=tr.map(t=>({...t,image:ra[t.image]||t.image,audio:ra[t.audio]||t.audio,video:ra[t.video]||t.video,images:Array.isArray(t.images)?t.images.map(n=>ra[n]||n):t.images,filters:Array.isArray(t.filters)?t.filters.map(n=>({...n,imageUrl:ra[n.imageUrl]||n.imageUrl})):t.filters})),_r=[{id:"none",label:"Вимкнено"},{id:"grayscale",label:"Дальтонізм"},{id:"sepia",label:"Сепія"},{id:"invert",label:"Негатив"},{id:"matrix",label:"Матриця"},{id:"uv",label:"УФ-Лампа"},{id:"contrast",label:"Контраст"},{id:"saturate",label:"Насиченість"},{id:"blur",label:"Розмиття"},{id:"hue",label:"Веселка"},{id:"chaos",label:"Хаос"},{id:"ultrachaos",label:"Ультрахаос"}],dl=[{id:"cinema",label:"🎬 Кіно",config:{darkIntensity:15,filterType:"sepia",filterIntensity:20}},{id:"night",label:"🌙 Ніч",config:{darkIntensity:70,filterType:"none",filterIntensity:50}},{id:"retro",label:"📻 Ретро",config:{darkIntensity:5,filterType:"grayscale",filterIntensity:80}},{id:"acid",label:"🌈 Кислота",config:{darkIntensity:0,filterType:"hue",filterIntensity:60}}],hr={darkIntensity:0,filterType:"none",filterIntensity:50};if(typeof document<"u"){const t=document.createElement("style");t.id="visual-filters-animations",t.innerHTML=`
    @keyframes ultrachaos-anim {
      0% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(0deg); }
      50% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-max)) saturate(var(--v-saturate-max)) hue-rotate(180deg) blur(var(--v-blur-max)); }
      100% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(360deg); }
    }
    @keyframes rainbow-anim {
      0% { filter: brightness(var(--v-bright)) hue-rotate(0deg); }
      100% { filter: brightness(var(--v-bright)) hue-rotate(360deg); }
    }
  `,document.getElementById(t.id)||document.head.appendChild(t)}var Jo=t=>{if(!t)return;document.documentElement.style.transition="filter 0.4s ease-in-out";const n=100-(t.darkIntensity||0)*.6;let r=`brightness(${n}%)`;const{filterType:u,filterIntensity:l=50}=t;if(u==="ultrachaos"){const d=100+l*.6,b=100+l*2,p=100+l*1.6,x=100+l*5,f=l/50;document.documentElement.style.setProperty("--v-bright",`${n}%`),document.documentElement.style.setProperty("--v-contrast-min",`${d}%`),document.documentElement.style.setProperty("--v-contrast-max",`${b}%`),document.documentElement.style.setProperty("--v-saturate-min",`${p}%`),document.documentElement.style.setProperty("--v-saturate-max",`${x}%`),document.documentElement.style.setProperty("--v-blur-max",`${f}px`),document.documentElement.style.animation="ultrachaos-anim 4s infinite linear";return}if(u==="hue"){document.documentElement.style.setProperty("--v-bright",`${n}%`);const d=l>0?200/l:0;d>0?document.documentElement.style.animation=`rainbow-anim ${d}s infinite linear`:(document.documentElement.style.animation="none",document.documentElement.style.filter=`brightness(${n}%) hue-rotate(0deg)`);return}if(document.documentElement.style.animation="none",u==="grayscale")r+=` grayscale(${l}%)`;else if(u==="sepia")r+=` sepia(${l}%)`;else if(u==="invert"){const d=l-50;if(d>0)r+=` invert(${d*2}%)`;else if(d<0){const b=1+Math.abs(d)/50;r+=` contrast(${b*100}%) saturate(${b*100}%)`}}else u==="matrix"?r+=` hue-rotate(180deg) grayscale(${l}%)`:u==="uv"?r+=` hue-rotate(280deg) saturate(${100+l}%)`:u==="contrast"?r+=` contrast(${l*2}%)`:u==="saturate"?r+=` saturate(${l*2}%)`:u==="blur"?r+=` blur(${l/10}px)`:u==="hue"&&(r+=` hue-rotate(${l*3.6}deg)`);document.documentElement.style.filter=r},op=t=>{const[n,r]=(0,a.useState)(hr),[u,l]=(0,a.useState)([]),d=t?.account?`visualConfig_${t.account}`:"visualConfig_guest",b=t?.account?`customPresets_${t.account}`:"customPresets_guest";(0,a.useEffect)(()=>{c.default.getItem(d).then(L=>{L&&r(L)}),c.default.getItem(b).then(L=>{l(L||[])})},[d,b]),(0,a.useEffect)(()=>{let L;if(n.filterType==="chaos"){const P=()=>{const D=_r.filter(I=>!["none","chaos","ultrachaos"].includes(I.id)),v=D[Math.floor(Math.random()*D.length)],y=Math.floor(Math.random()*80)+20;Jo({...n,filterType:v.id,filterIntensity:y})};P(),L=setInterval(P,Math.floor(Math.random()*2e3)+1e3)}else Jo(n);return()=>clearInterval(L)},[n]);const p=(0,a.useCallback)(L=>{r(P=>{const D=typeof L=="function"?L(P):L;return c.default.setItem(d,D),D})},[d]),x=(0,a.useCallback)(()=>{p(hr),c.default.setItem(d,hr)},[d,p]),f=(0,a.useCallback)(L=>{if(!L.trim())return;const P={id:`custom_${Date.now()}`,label:`✨ ${L}`,config:{...n}};l(D=>{const v=[...D,P];return c.default.setItem(b,v),v})},[b,n]),g=(0,a.useCallback)(L=>{l(P=>{const D=P.filter(v=>v.id!==L);return c.default.setItem(b,D),D})},[b]),F=(0,a.useCallback)((L,P)=>{P.trim()&&l(D=>{const v=D.map(y=>y.id===L?{...y,label:`✨ ${P}`}:y);return c.default.setItem(b,v),v})},[b]),C=(0,a.useCallback)(L=>{l(L),c.default.setItem(b,L)},[b]);return{visualConfig:n,setVisualConfig:p,resetFilters:x,FILTERS:_r,PRESETS:dl,customPresets:u,saveCustomPreset:f,deleteCustomPreset:g,updateCustomPresetName:F,reorderCustomPresets:C}},cl=(0,a.createContext)(),Xr=()=>(0,a.useContext)(cl),ip=t=>{if(!t||!(t instanceof Element))return"";const n=[];let r=t;for(;r&&r.nodeType===Node.ELEMENT_NODE&&r!==document.body&&r!==document.documentElement;){let u=r.nodeName.toLowerCase();if(r.id){u+="#"+r.id,n.unshift(u);break}else{let l=r.previousSibling,d=1;for(;l;)l.nodeType===Node.ELEMENT_NODE&&l.nodeName===r.nodeName&&d++,l=l.previousSibling;u+=`:nth-of-type(${d})`}n.unshift(u),r=r.parentNode}return n.join(" > ")},sp=({children:t,isDarkMode:n})=>{const[r,u]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),[b,p]=(0,a.useState)({}),[x,f]=(0,a.useState)([]),[g,F]=(0,a.useState)(!1);(0,a.useEffect)(()=>{n?document.body.classList.add("decorator-dark-mode"):document.body.classList.remove("decorator-dark-mode")},[n]),(0,a.useEffect)(()=>{(async()=>{try{const y=await c.default.getItem("decorator_persistent");if(y!==null&&(d(y),y)){let I=await c.default.getItem("decorator_overrides");const w=await c.default.getItem("decorator_changelog");if(I){const E={};Object.keys(I).forEach(O=>{E[O]={};const _=I[O];_.light_default||_.light_hover||_.dark_default||_.dark_hover?E[O]=_:E[O].light_default={..._}}),p(E)}w&&f(w)}}catch(y){console.error("Error hydrating decorator state",y)}finally{F(!0)}})()},[]),(0,a.useEffect)(()=>{g&&(l?(c.default.setItem("decorator_overrides",b),c.default.setItem("decorator_changelog",x)):(c.default.removeItem("decorator_overrides"),c.default.removeItem("decorator_changelog")),c.default.setItem("decorator_persistent",l))},[b,x,l,g]),(0,a.useEffect)(()=>{let v=document.getElementById("decorator-styles");v||(v=document.createElement("style"),v.id="decorator-styles",document.head.appendChild(v));let y="";Object.entries(b).forEach(([I,w])=>{const E=I.includes(" > ")||I.includes("#")||I.includes(":")?I:`[data-decorator-id="${I}"]`;w.light_default&&Object.keys(w.light_default).length>0&&(y+=`body:not(.decorator-dark-mode) ${E} { `,Object.entries(w.light_default).forEach(([O,_])=>{y+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),y+=`}
`),w.light_hover&&Object.keys(w.light_hover).length>0&&(y+=`body:not(.decorator-dark-mode) ${E}:hover { `,Object.entries(w.light_hover).forEach(([O,_])=>{y+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),y+=`}
`),w.dark_default&&Object.keys(w.dark_default).length>0&&(y+=`body.decorator-dark-mode ${E} { `,Object.entries(w.dark_default).forEach(([O,_])=>{y+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),y+=`}
`),w.dark_hover&&Object.keys(w.dark_hover).length>0&&(y+=`body.decorator-dark-mode ${E}:hover { `,Object.entries(w.dark_hover).forEach(([O,_])=>{y+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),y+=`}
`)}),v.innerHTML=y},[b]);const C=(0,a.useCallback)((v,y,I,w,E,O="light_default")=>{p(_=>{const Y=_[v]||{},te=Y[O]||{};return{..._,[v]:{...Y,[O]:{...te,[I]:E}}}}),f(_=>[..._,{id:Date.now()+"-"+Math.random().toString(36).slice(2,7),elementId:v,tagName:y,property:I,originalValue:w,newValue:E,mode:O,timestamp:new Date().toLocaleTimeString("uk-UA")}])},[]),L=(0,a.useCallback)(v=>{f(y=>{const I=y.find(w=>w.id===v);return I?(p(w=>{const E={...w[I.elementId]||{}},O=I.mode||"light_default",_={...E[O]||{}},Y=y.filter(te=>te.elementId===I.elementId&&te.property===I.property&&(te.mode||"light_default")===O&&te.id!==v);if(Y.length>0?_[I.property]=Y[Y.length-1].newValue:delete _[I.property],E[O]=_,Object.keys(_).length===0&&delete E[O],Object.keys(E).length===0){const te={...w};return delete te[I.elementId],te}return{...w,[I.elementId]:E}}),y.filter(w=>w.id!==v)):y})},[]),P=(0,a.useCallback)(()=>{p({}),f([]),document.querySelectorAll("[data-decorator-id]").forEach(v=>{v.removeAttribute("data-decorator-id")})},[]),D=(0,a.useCallback)(v=>b[v]||{},[b]);return(0,e.jsx)(cl.Provider,{value:{isDecoratorMode:r,setIsDecoratorMode:u,styleOverrides:b,changeLog:x,applyStyle:C,undoChange:L,resetAll:P,getOverridesForElement:D,isPersistent:l,setIsPersistent:d,isDarkMode:n},children:t})},xr=[{key:"hero",label:"Головна",path:"hero"},{key:"weather",label:"Погода",path:"weather"},{key:"map",label:"Кліматична мапа",path:"map"},{key:"aihelp",label:"Допомога ШІ",path:"aihelp"},{key:"fanart",label:"Друкарня",path:"fanart"}],lp=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cec":"#fdff98ee"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,dp=Fe`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`,cp=Fe`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`,up=Fe`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,pp=Fe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,fp=i.div`
  display: flex;
  margin-left: -5px;
  gap: 3px;
`,gp=i.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  background: ${t=>t.$isUltra?"rgba(113, 0, 151, 0.05)":"rgba(255, 179, 108, 0.05)"};
  border: 1.5px solid ${t=>t.$isUltra?"#710097":"#ffb36c"};
  padding: 5px 4px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.5s ease;
  text-align: left;

  &:hover {
    background: ${t=>t.$isUltra?"rgba(113, 0, 151, 0.15)":"rgba(255, 179, 108, 0.15)"};
    transform: translateX(5px);
    box-shadow: 0 4px 15px
      ${t=>t.$isUltra?"rgba(113, 0, 151, 0.2)":"rgba(255, 179, 108, 0.2)"};
  }
`,mp=i.div`
  width: 32px;
  height: 32px;
  background: #1a1a1a;
  border: 1px solid ${t=>t.$isUltra?"#710097":"#ffb36c"};
  border-radius: 8px;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,hp=i.div`
  display: grid;
  align-items: center;
  flex-grow: 1;
`,Ua=i.span`
  grid-area: 1/1;
  font-weight: 800;
  transition: opacity 0.5s ease-in-out;
  opacity: ${t=>t.$show?1:0};
  font-size: ${t=>t.$isSymbol?"20px":"16px"};

  ${t=>t.$variant==="rainbow"&&Vt`
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7f00,
        #ffff00,
        #00ff00,
        #0000ff,
        #8b00ff
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}

  ${t=>t.$variant==="ultra"&&Vt`
      background: linear-gradient(
        270deg,
        #ff7eb3,
        #ff758c,
        #7afcff,
        #feffb7,
        #58e2c2
      );
      background-size: 400% 400%;
      animation: ${pp} 3s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,Yo=i.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px;
  margin-bottom: 4px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  }
      span {
      font-size: 23px;
      }
`,br=i.div`
  position: relative;
  width: 36px;
  height: 20px;
  background: ${t=>t.$active?"#ff005d":"#ccc"};
  border-radius: 20px;
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${t=>t.$active?"18px":"2px"};
    transition: 0.3s;
  }
`,xp=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: ${t=>t.$isRendered?"block":"none"};
  opacity: ${t=>t.$isOpen?1:0};
  transition: opacity 0.4s ease;
`,bp=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  background: ${t=>t.$isDarkMode?"#1a1a1a83":"#ffffff8a"};
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  z-index: 1001;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  display: ${t=>t.$isRendered?"block":"none"};
  animation: ${t=>t.$isOpen?dp:cp} 0.4s
    cubic-bezier(0.16, 1, 0.3, 1) forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${t=>t.$isDarkMode?"rgba(255, 179, 108, 0.5)":"rgba(255, 0, 93, 0.5)"};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  scrollbar-width: thin;
  scrollbar-color: ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"}
    transparent;
`,yp=i.button`
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 10px;
    @media (min-width: 768px) {
      top: 5px;
  right: 10px;
  }
`,wp=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,vp=i.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 50;
    background: ${t=>t.$isDarkMode?"#111":"#fff"};
    border-bottom: 2px solid ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"};
    margin-bottom: 3px;
  }
`,Zo=i.button`
  flex: 1;
  padding: 2px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  background: ${t=>t.$active?t.$isDarkMode?"#ffb36c":"#ff005d":"transparent"};
  color: ${t=>t.$active?t.$isDarkMode?"#1a1a1a":"#fff":t.$isDarkMode?"#ffb36c":"#ff005d"};
  border-bottom: 3px solid ${t=>t.$active?t.$isDarkMode?"#ffb36c":"#ff005d":"transparent"};
`,Xo=i.div`
  @media (max-width: 767px) {
    display: ${t=>t.$active?"block":"none"};
  }
  @media (min-width: 768px) {
    display: block;
  }
`,Qo=i.h3`
  font-size: 18px;
  margin-bottom: 5px;
  border-bottom: 2px solid #ff005d;
  padding-bottom: 5px;
  display: none;
    @media (min-width: 768px) {
    display: inline-block;
  }
`,kp=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Kn=i.button`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 5px 6px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.2s ease;
  text-align: left;

  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  }

  span.icon {
    font-size: 20px;
  }
`,Sp=i.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 8px 5px;
  margin-bottom: 8px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
`,jp=i.button`
  background: transparent;
  border: none;
  text-align: left;
  color: ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"};
  font-size: 16px;
  font-weight: 600;
  flex-grow: 1;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`,yr=i.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,Ka=i.button`
  background: ${t=>t.$isDarkMode?"#333":"#eee"};
  border: 1px solid ${t=>t.$isDarkMode?"#444":"#ccc"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  border-radius: 6px;
  padding: 0px 10px;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  opacity: ${t=>t.disabled?.3:1};
  font-size: 14px;
  font-weight: bold;

  &:hover:not(:disabled) {
    background: #ff005d;
    color: white;
    border-color: #ff005d;
  }
`,Cp=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 3px;
  margin-bottom: 5px;
`,qa=i.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#3e2723":t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`,Tp=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 5px;
`,Ap=i.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`,Ip=i.input`
  flex: 1;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border: 1px solid #ffb36c;
  border-radius: 8px;
  padding: 6px 10px;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: #888;
  }
`,Dp=i.button`
  background: #ffb36c;
  color: #3e2723;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffa04d;
  }
`,ei=i.button`
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border: 1px solid #ffb36c;
  color: ${t=>t.$isDarkMode?"#ffb36c":"#333"};
  border-radius: 8px;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ffb36c;
    color: #3e2723;
  }
`,Mp=i.div`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
  button:first-child {
    flex: 1;
  }
  animation: ${up} 0.3s ease-out forwards;
`,Rp=i.button`
  background: transparent;
  border: none;
  color: #ffb36c;
  cursor: pointer;
  font-size: 14px;
  padding: 0 5px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,zp=i.button`
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;
  &:hover {
    color: #ff1a1a;
    transform: scale(1.1);
  }
`,Lp=i.div`
  cursor: grab;
  color: #ffb36c;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
`,Ep=i.button`
  width: 100%;
  background: #8a3939;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ff1a1a;
  }
`,qn=({content:t,children:n,placement:r="bottom",isDarkMode:u=!0})=>{const[l,d]=(0,a.useState)(!1),b=(0,a.useRef)(null),{refs:p,floatingStyles:x,context:f}=ya({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:da,middleware:[wa(8),la(),va({padding:5}),fa({element:b})]}),{isMounted:g,styles:F}=ga(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),C=pa(f,{move:!1}),L=ua(f),P=ma(f),D=ha(f,{role:"tooltip"}),{getReferenceProps:v,getFloatingProps:y}=xa([C,L,P,D]);if(!t)return n;const I=u?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...v(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(ca,{children:(0,e.jsxs)(lp,{ref:p.setFloating,$isDarkMode:u,style:{...x,...F},...y(),children:[t,(0,e.jsx)(ba,{ref:b,context:f,fill:I,stroke:"#00acb9",strokeWidth:1})]})})]})},Fp=({isOpen:t,onClose:n,isDarkMode:r,siteSections:u,resetSiteSections:l,moveSiteSection:d,sectionThemes:b,hiddenSections:p,onToggleSectionVisibility:x,onToggleSectionTheme:f,onResetSectionThemes:g,onToggleTheme:F,onOpenShop:C,onOpenVip:L,onOpenSettings:P,onOpenHelp:D,onOpenOtherOptions:v,showUltra:y,onOpenInfo:I,onLogout:w,isRoutingMode:E,setIsRoutingMode:O,currentPath:_,visualConfig:Y,setVisualConfig:te,onResetFilters:de,customPresets:ae=[],onSavePreset:B,onDeletePreset:Z,onUpdatePresetName:ge,onReorderPresets:Ie,loadingStrategy:he,onSetLoadingStrategy:Ue,isStickyBgMode:De,onToggleStickyBg:Ze})=>{const{isDecoratorMode:me,setIsDecoratorMode:$e,changeLog:Ce,undoChange:dt,resetAll:rt,isPersistent:ct,setIsPersistent:Pe}=Xr(),[Ke,ot]=(0,a.useState)(!1),[wt,gt]=(0,a.useState)(""),[Le,T]=(0,a.useState)(null),[$,X]=(0,a.useState)(null),[ie,pe]=(0,a.useState)("nav"),Te=Gi(),_e=V=>{if(typeof window>"u")return"";const Q=V?`/${V}`.replace(/\/+/g,"/"):"/";return`${`${window.location.origin}${window.location.pathname}`.replace(/\/$/,"")}#${Q}`},Be=async(V,Q)=>{const re=_e(Q||V);if(re)try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(re);else{const G=document.createElement("input");G.value=re,document.body.appendChild(G),G.select(),document.execCommand("copy"),document.body.removeChild(G)}X(V),window.setTimeout(()=>X(null),1500)}catch(G){console.error("Не вдалося скопіювати посилання секції",G)}},be=(V,Q)=>{T(Q),V.dataTransfer.effectAllowed="move",V.currentTarget.style.opacity="0.5"},At=V=>{V.currentTarget.style.opacity="1",T(null)},qe=(V,Q)=>{if(V.preventDefault(),Le===null||Le===Q)return;const re=[...ae],[G]=re.splice(Le,1);re.splice(Q,0,G),Ie(re)},mt=V=>{te(Q=>({...Q,filterType:V}))},vt=V=>{te(Q=>({...Q,darkIntensity:V}))},Xe=V=>{te(Q=>({...Q,filterIntensity:V}))};(0,a.useEffect)(()=>{if(t)ot(!0);else{const V=setTimeout(()=>ot(!1),400);return()=>clearTimeout(V)}},[t]);const It=(V,Q)=>{if(n(),E)Te("/"+Q);else{const re=document.getElementById(V);re?re.scrollIntoView({behavior:"smooth",block:"start"}):V==="hero"&&window.scrollTo({top:0,behavior:"smooth"})}};return Ke?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(xp,{$isOpen:t,$isRendered:Ke,onClick:n,"data-decorator-ignore":"true"}),(0,e.jsxs)(bp,{$isOpen:t,$isRendered:Ke,$isDarkMode:r,"data-decorator-ignore":"true",children:[(0,e.jsx)(yp,{onClick:n,$isDarkMode:r,children:"✕"}),(0,e.jsxs)(vp,{$isDarkMode:r,children:[(0,e.jsx)(Zo,{$active:ie==="nav",$isDarkMode:r,onClick:()=>pe("nav"),children:"Навігація та порядок"}),(0,e.jsx)(Zo,{$active:ie==="controls",$isDarkMode:r,onClick:()=>pe("controls"),children:"Керування"})]}),(0,e.jsxs)(wp,{children:[(0,e.jsxs)(Xo,{$active:ie==="nav",children:[(0,e.jsx)(Qo,{children:"Навігація та порядок"}),u&&u.map((V,Q)=>{const re=_e(V.path||V.key);return(0,e.jsxs)(Sp,{$isDarkMode:r,children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)(jp,{$isDarkMode:r,onClick:()=>It(V.key,V.path),children:V.label}),(0,e.jsx)(yr,{children:(0,e.jsx)(qn,{content:p?.includes(V.key)?"Показати секцію":"Приховати секцію",isDarkMode:r,children:(0,e.jsx)(Ka,{style:{padding:"4px 10px"},$isDarkMode:r,onClick:()=>x?.(V.key),"aria-label":p?.includes(V.key)?"Показати секцію":"Приховати секцію",disabled:!p?.includes(V.key)&&u.length-(p?.length||0)<=2,children:p?.includes(V.key)?(0,e.jsx)(Bl,{}):(0,e.jsx)(cd,{})})})}),(0,e.jsx)(yr,{children:(0,e.jsx)(qn,{content:"Змінити тему секції",isDarkMode:r,children:(0,e.jsx)(Ka,{style:{padding:"4px 10px"},$isDarkMode:r,onClick:()=>f?.(V.key),"aria-label":"Змінити тему секції",children:b?.[V.key]??r?(0,e.jsx)(ia,{}):(0,e.jsx)(sa,{})})})}),V.key!=="hero"&&(0,e.jsxs)(yr,{children:[(0,e.jsx)(qn,{content:"Підняти секцію",isDarkMode:r,children:(0,e.jsx)(Ka,{$isDarkMode:r,disabled:Q<=1,onClick:()=>d(Q,-1),"aria-label":"Підняти секцію",children:"▲"})}),(0,e.jsx)(qn,{content:"Опустити секцію",isDarkMode:r,children:(0,e.jsx)(Ka,{$isDarkMode:r,disabled:Q===u.length-1,onClick:()=>d(Q,1),"aria-label":"Опустити секцію",children:"▼"})})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"6px",width:"100%"},children:[(0,e.jsx)("span",{style:{fontSize:"11px",color:E?"#8a8a8a":r?"#ffb36c":"#ff005d",wordBreak:"break-all",flex:1,minWidth:0},title:re,children:re}),(0,e.jsx)("button",{type:"button",onClick:()=>Be(V.key,V.path),style:{border:"none",borderRadius:"6px",padding:"4px",background:r?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)",color:r?"#fff":"#333",cursor:"pointer",fontSize:"11px",fontWeight:"600"},children:$===V.key?"✓ Скопійовано":"Копіювати посилання"})]})]},V.key)}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)("button",{onClick:g,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:r?"#333":"#eee",color:r?"#fff":"#333"},children:"Скинути теми"}),(0,e.jsx)("button",{onClick:l,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:"#990038",color:"white"},children:"Скинути порядок"})]}),p?.length>0&&(0,e.jsx)("div",{style:{marginTop:"10px",fontSize:"10px",color:r?"#fcfbfb":"#070707",fontStyle:"italic"},children:'Підказка: Приховані секції доступні через режим "Маршрутизації". Щоб залишити лише одну секцію, натисніть блок в якому зображено якір та є текст маршрутизація.'})]}),(0,e.jsxs)(Xo,{$active:ie==="controls",children:[(0,e.jsx)(Qo,{children:"Керування"}),(0,e.jsxs)(kp,{children:[(0,e.jsx)("li",{style:{display:"none"},children:(0,e.jsxs)(gp,{$isUltra:y,onClick:()=>{L(),n()},children:[(0,e.jsxs)(mp,{$isUltra:y,children:[(0,e.jsx)(Ua,{$show:!y,$variant:"rainbow",$isSymbol:!0,children:"+"}),(0,e.jsx)(Ua,{$show:y,$variant:"ultra",$isSymbol:!0,children:"♔"})]}),(0,e.jsxs)(hp,{children:[(0,e.jsx)(Ua,{$show:!y,$variant:"rainbow",children:"Стихія+"}),(0,e.jsx)(Ua,{$show:y,$variant:"ultra",children:"Стихія Ultra"})]}),(0,e.jsx)("span",{style:{fontSize:"12px",color:y?"#710097":"#ffb36c",fontWeight:"bold"},children:"➔"})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)(Yo,{$isDarkMode:r,onClick:()=>O(!E),children:[(0,e.jsx)("span",{className:"icon",children:E?(0,e.jsx)(gd,{}):(0,e.jsx)(id,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:E?"Маршрутизація":"Навігація"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:E?"Зміна URL":"Плавний скрол"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:E?"При натиску ввімкнеться ремим навігації":"При натиску ввімкнеться ремим маршрутизації"})]}),(0,e.jsx)(br,{$active:E})]})}),(0,e.jsxs)("li",{children:[(0,e.jsxs)(Yo,{$isDarkMode:r,onClick:()=>$e(!me),children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(Wi,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:"Режим Декоратора"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Редагування стилів сторінки"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Необхідні незначні знання CSS"})]}),(0,e.jsx)(br,{$active:me})]}),me&&(0,e.jsxs)("div",{style:{padding:"10px",background:r?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",borderRadius:"10px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Зберігати після перезавантаження:"}),(0,e.jsx)(br,{$active:ct,onClick:()=>Pe(!ct),style:{transform:"scale(0.8)",cursor:"pointer"}})]}),(0,e.jsxs)("div",{style:{fontSize:"12px",fontWeight:"bold",marginBottom:"10px",color:r?"#ffb36c":"#ff005d"},children:["Журнал змін (",Ce.length,")"]}),Ce.length>0?(0,e.jsx)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"5px"},children:Ce.map(V=>{let Q="";return V.mode==="light_default"?Q="☀️ ":V.mode==="light_hover"?Q="☀️👆 ":V.mode==="dark_default"?Q="🌙 ":V.mode==="dark_hover"&&(Q="🌙👆 "),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px",background:r?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.5)",padding:"5px",borderRadius:"5px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{opacity:.8,marginRight:"4px"},children:Q}),(0,e.jsx)("span",{style:{color:"#ffb36c"},children:V.tagName})," ",V.property,":"," ",(0,e.jsx)("span",{style:{opacity:.7},children:V.originalValue||"none"})," ","➔ ",(0,e.jsx)("b",{children:V.newValue})]}),(0,e.jsx)("button",{onClick:()=>dt(V.id),style:{background:"#ff4d4d",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",padding:"2px 6px",fontSize:"10px",marginLeft:"5px"},children:"Відмінити"})]},V.id)})}):(0,e.jsx)("div",{style:{fontSize:"11px",opacity:.7,fontStyle:"italic"},children:"Змін ще немає"}),Ce.length>0&&(0,e.jsx)("button",{onClick:rt,style:{width:"100%",background:"transparent",color:"#ff4d4d",border:"1px solid #ff4d4d",borderRadius:"5px",marginTop:"10px",padding:"5px",fontSize:"11px",cursor:"pointer"},children:"Скинути всі зміни"})]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d",marginBottom:"5px"},children:"Режим завантаження"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(qn,{content:"Завантажує все відразу при старті сайту",isDarkMode:r,children:(0,e.jsx)(qa,{$active:he==="eager",$isDarkMode:r,onClick:()=>Ue("eager"),"aria-label":"Завантажує все відразу при старті сайту",children:"Повний"})}),(0,e.jsx)(qn,{content:"Завантажує важкі модулі через 8 секунд",isDarkMode:r,children:(0,e.jsx)(qa,{$active:he==="delayed",$isDarkMode:r,onClick:()=>Ue("delayed"),"aria-label":"Завантажує важкі модулі через 8 секунд",children:"Оптимальний"})}),(0,e.jsx)(qn,{content:"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",isDarkMode:r,children:(0,e.jsx)(qa,{$active:he==="lazy",$isDarkMode:r,onClick:()=>Ue("lazy"),"aria-label":"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",children:"Економний"})})]})]})}),(0,e.jsxs)("li",{style:{display:"flex"},children:[(0,e.jsxs)(Kn,{$isDarkMode:r,onClick:F,children:["Змінити тему? ",(0,e.jsx)("span",{className:"icon",children:r?(0,e.jsx)(sa,{}):(0,e.jsx)(ia,{})})]}),(0,e.jsxs)(Kn,{$isDarkMode:r,onClick:Ze,style:{color:De?"#ff005d":void 0},children:[De?"Вимкнути":"Ввімкнути"," липкий фон?"]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Зменшення Яскравості"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:Y.darkIntensity||0,onChange:V=>vt(Number(V.target.value)),style:{width:"90%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[Y.darkIntensity||0,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Фільтри"}),(0,e.jsx)(Cp,{$isDarkMode:r,children:_r.map(V=>(0,e.jsx)(qa,{$active:Y.filterType===V.id,$isDarkMode:r,onClick:()=>mt(V.id),children:V.label},V.id))})]})}),Y.filterType!=="none"&&(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"⚡ Сила ефекту"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:Y.filterIntensity||50,onChange:V=>Xe(Number(V.target.value)),style:{width:"92%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[Y.filterIntensity||50,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:r?"#ffb36c":"#ff005d"},children:"Швидкі стилі"}),(0,e.jsxs)(Tp,{children:[dl.map(V=>(0,e.jsx)(ei,{$isDarkMode:r,onClick:()=>te(V.config),children:V.label},V.id)),ae.map((V,Q)=>(0,e.jsxs)(Mp,{draggable:!0,onDragStart:re=>be(re,Q),onDragEnd:At,onDragOver:re=>re.preventDefault(),onDrop:re=>qe(re,Q),children:[(0,e.jsx)(Lp,{"aria-label":"Перетягніть для сортування",children:"⠿"}),(0,e.jsx)(ei,{$isDarkMode:r,style:{borderColor:"#7afcff",color:r?"#7afcff":"#006666"},onClick:()=>te(V.config),children:V.label}),(0,e.jsx)(Rp,{onClick:()=>{const re=V.label.replace("✨ ",""),G=window.prompt("Введіть нову назву пресета:",re);G&&ge(V.id,G)},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(zp,{onClick:()=>Z(V.id),"aria-label":"Видалити пресет",children:"×"})]},V.id))]}),(0,e.jsxs)(Ap,{children:[(0,e.jsx)(Ip,{$isDarkMode:r,placeholder:"Назва пресета...",value:wt,onChange:V=>gt(V.target.value),maxLength:15}),(0,e.jsx)(Dp,{onClick:()=>{wt.trim()&&(B(wt),gt(""))},children:"Зберегти"})]})]})}),(0,e.jsx)("li",{children:(0,e.jsx)(Ep,{onClick:de,children:"Скинути всі фільтри ↺"})}),(0,e.jsxs)(fp,{children:[(0,e.jsx)("li",{children:(0,e.jsx)(Kn,{style:{display:"none"},$isDarkMode:r,onClick:()=>{C(),n()},children:"Магазин"})}),(0,e.jsx)("li",{children:(0,e.jsx)(Kn,{$isDarkMode:r,onClick:()=>{v(),n()},children:"Фонова музика"})}),(0,e.jsx)("li",{children:(0,e.jsx)(Kn,{$isDarkMode:r,onClick:()=>{P(),n()},children:"Налаштування"})}),(0,e.jsx)("li",{children:(0,e.jsx)(Kn,{$isDarkMode:r,onClick:()=>{D(),n()},children:"Навчання"})}),(0,e.jsx)("li",{children:(0,e.jsx)(Kn,{$isDarkMode:r,onClick:()=>{w(),n()},children:"Вихід"})})]})]})]})]})]})]}):null},bn="/assets/relax-Dn2PcHdb.mp3",Pp="/assets/bell-B5cBbKiy.mp3",$p="/assets/paper-CyM37wYo.mp3",Np="/assets/concierge-ItJSby-8.mp3",Op=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Vp=Fe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Bp=Fe`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`,_p=i.div`
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${t=>t.$isDarkMode?"white":"#000000"};
  position: fixed;
  background: ${t=>t.$isDarkMode?"rgba(0, 0, 0, 0.45)":"rgba(255, 255, 255, 0.86)"};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: ${t=>t.$isStickyBgMode?"blur(10px)":"none"};
  color: ${t=>t.$isDarkMode?"white":"#000000"};
  top: 0;
  left: 0;
  z-index: 1000;
  transition:
    background-color 0.4s ease,
    backdrop-filter 0.4s ease;
  box-sizing: border-box;
  animation: ${Bp} 0.8s ease-out 4.3s both;
  margin: 0;
`,Hp=i.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`,Kt=i.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  align-items: center;
  justify-content: center;
  padding: 2px;
  flex-shrink: 0;
`,Qt=i.span`
  display: inline-block;
  font-size: 21px;
`;i.span`
  font-size: 12px;
  font-weight: 900;
  max-width: 78%;
  white-space: nowrap;
  text-shadow: 
    -1px -1px 0 #080808,  
     1px -1px 0 #080808,
    -1px  1px 0 #080808,
     1px  1px 0 #080808;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 3px;
  flex-shrink: 2;

  ${t=>t.$uColor?.includes("linear")?Vt`
        background: ${t.$uColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 400% 400%;
        animation: ${Vp} 5s ease infinite;
      `:`color: ${t.$uColor||"inherit"};`}
`;var ti=i.img`
  width: 35px;
  height: 35px;
  min-width: 30px;
  margin-right: 0;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  background-image: ${t=>t.$bColor?.includes("linear-gradient")?`linear-gradient(white, white), ${t.$bColor}`:"none"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-color: ${t=>t.$bColor?.includes("linear-gradient")?"transparent":t.$bColor||"transparent"};
`,Up=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Kp=i.button`
  display: flex;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.07)":"rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"};
  color: ${t=>t.$isDarkMode?"#fff":"#111"};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
  }
`,qp=i.div`
  position: absolute;
  top: 42px;
  right: 0;
  z-index: 2001;
  min-width: 290px;
  background: ${t=>t.$isDarkMode?"rgba(14, 14, 14, 0.96)":"rgba(255, 255, 255, 0.96)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.12)"};
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 12px 14px;
  color: ${t=>t.$isDarkMode?"#fff":"#111"};
`,Wp=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Gp=i.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`,Jp=i.div`
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin-bottom: 2px;
`,ni=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  gap: 4px;
    & > * {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`,Yp=i.div`
  position: absolute;
  top: 52px;
  right: 10px;
  background: ${t=>t.$isDarkMode?"rgba(18, 18, 18, 0.95)":"rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${t=>t.$isDarkMode?"#444":"#ddd"};
  backdrop-filter: blur(5px);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,wr=i.label`
  font-size: 11px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,ai=i.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${t=>t.$isDarkMode?"#ffb36c":"#007bff"};
`,Zp=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`,Xp=i.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#3e2723":t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 6px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`,Ot=({content:t,children:n,placement:r="bottom",isDarkMode:u=!0})=>{const[l,d]=(0,a.useState)(!1),b=(0,a.useRef)(null),{refs:p,floatingStyles:x,context:f}=ya({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:da,middleware:[wa(8),la(),va({padding:5}),fa({element:b})]}),{isMounted:g,styles:F}=ga(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),C=pa(f,{move:!1}),L=ua(f),P=ma(f),D=ha(f,{role:"tooltip"}),{getReferenceProps:v,getFloatingProps:y}=xa([C,L,P,D]);if(!t)return n;const I=u?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...v(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(ca,{children:(0,e.jsxs)(Op,{ref:p.setFloating,$isDarkMode:u,style:{...x,...F},...y(),children:[t,(0,e.jsx)(ba,{ref:b,context:f,fill:I,stroke:"#00acb9",strokeWidth:1})]})})]})},Qp=({sfxVolume:t=.2,onOpenLogin:n,onOpenRegister:r,onOpenSettings:u,onOpenVip:l,onOpenShop:d,onOpenHelp:b,onOpenOtherOptions:p,onOpenInfo:x,isInfoOpen:f,isDarkMode:g,toggleTheme:F,isStickyBgMode:C,setIsStickyBgMode:L,sectionThemes:P,hiddenSections:D,onToggleSectionVisibility:v,onToggleSectionTheme:y,onResetSectionThemes:I,onOpenAchievements:w,currentAvatar:E,onLogout:O,user:_,siteSections:Y,moveSiteSection:te,resetSiteSections:de,isRoutingMode:ae,setIsRoutingMode:B,currentPath:Z,setIsFsActive:ge,loadingStrategy:Ie,onSetLoadingStrategy:he})=>{const{registerRef:Ue}=La?.()||{registerRef:()=>{}},[De,Ze]=(0,a.useState)(!1),[me,$e]=(0,a.useState)(!1),[Ce,dt]=(0,a.useState)(!1),[rt,ct]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!rt)return;const G=Ee=>{const S=document.getElementById("header-profile-modal"),M=document.getElementById("header-profile-button");S&&!S.contains(Ee.target)&&M&&!M.contains(Ee.target)&&ct(!1)};return document.addEventListener("mousedown",G),()=>document.removeEventListener("mousedown",G)},[rt]);const{visualConfig:Pe,setVisualConfig:Ke,resetFilters:ot,FILTERS:wt,PRESETS:gt,customPresets:Le,saveCustomPreset:T,deleteCustomPreset:$,updateCustomPresetName:X,reorderCustomPresets:ie}=op(_);(0,a.useEffect)(()=>{const G=setInterval(()=>Ze(Ee=>!Ee),3e3);return()=>clearInterval(G)},[]);const pe=G=>{const Ee=new Audio(G);Ee.volume=t,Ee.play().catch(()=>{})},Te=()=>{pe(Pp),F()},_e=()=>{pe($p),$e(!0)},Be=()=>{pe(Np),L(G=>!G)},be=()=>{pe(bn),dt(G=>!G)},At=()=>{pe(bn),b&&b()},qe=()=>{pe(bn),d&&d()},mt=()=>{pe(bn),p&&p()},vt=()=>{pe(bn),u&&u()},Xe=()=>{pe(bn),O&&O()},It=()=>{pe(bn),n&&n()},V=()=>{pe(bn),r&&r()},Q=G=>{pe(bn),Ke(Ee=>({...Ee,filterType:G}))},re=G=>{pe(bn),Ke(G)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(_p,{$isDarkMode:g,$isStickyBgMode:C,"data-decorator-ignore":"true",children:[(0,e.jsx)(Hp,{children:_?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(ni,{ref:G=>Ue("headerBgTheme",G),children:[(0,e.jsx)(Ot,{content:"Змінити тему",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:Te,$isDarkMode:g,"aria-label":"Змінити тему",children:(0,e.jsx)(Qt,{style:{fontSize:"19px"},children:g?(0,e.jsx)(sa,{}):(0,e.jsx)(ia,{})})})}),(0,e.jsx)(Ot,{content:"Фон на увесь сайт",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:Be,$isDarkMode:g,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(Ro,{style:{color:C?"#ff005d":"inherit"}})})})}),(0,e.jsx)(Ot,{content:"Налаштування вигляду",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:be,$isDarkMode:g,"aria-label":"Налаштування вигляду",children:(0,e.jsx)(Qt,{style:{marginTop:"2px",fontSize:"24px"},children:(0,e.jsx)(Mo,{})})})}),(0,e.jsx)(Ot,{content:"Допомога",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:At,$isDarkMode:g,"aria-label":"Допомога",children:(0,e.jsx)(Qt,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(Ot,{content:"Спонсорство",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:qe,$isDarkMode:g,"aria-label":"Спонсорство",children:(0,e.jsx)(zd,{})})}),(0,e.jsx)(Ot,{content:"Інші опції та фонова музика",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:mt,$isDarkMode:g,"aria-label":"Інші опції та фонова музика",children:(0,e.jsx)(Qt,{style:{fontSize:"19px",marginTop:"2px"},children:(0,e.jsx)(Po,{})})})}),(0,e.jsx)(Ot,{content:"Налаштування",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:vt,$isDarkMode:g,"aria-label":"Налаштування",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(qi,{})})})}),(0,e.jsx)(Ot,{content:"Вихід з акаунта",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:Xe,$isDarkMode:g,"aria-label":"Вихід з акаунта",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(Vl,{})})})}),(0,e.jsx)(Ot,{content:"Відкрити меню",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:_e,$isDarkMode:g,"aria-label":"Відкрити меню",children:(0,e.jsx)(Qt,{children:"☰"})})})]}),(0,e.jsxs)(Up,{children:[(0,e.jsx)(Ot,{content:"Ваш профіль",isDarkMode:g,children:(0,e.jsx)(Kp,{id:"header-profile-button",$isDarkMode:g,onClick:()=>ct(G=>!G),"aria-label":"Профіль користувача",children:(0,e.jsx)(ti,{src:E,$bColor:_.borderColor,style:{width:"33px",height:"33px"}})})}),rt&&(0,e.jsx)(qp,{id:"header-profile-modal",$isDarkMode:g,children:(0,e.jsxs)(Wp,{children:[(0,e.jsx)(ti,{src:E,$bColor:_.borderColor,style:{width:"42px",height:"42px"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)(Jp,{children:"Профіль"}),(0,e.jsxs)(Gp,{children:["Ваше ім'я: ",_.firstName]})]})]})})]})]}):(0,e.jsxs)(ni,{ref:G=>Ue("headerBgTheme",G),children:[(0,e.jsx)(Ot,{content:"Змінити тему",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:Te,$isDarkMode:g,"aria-label":"Змінити тему",children:(0,e.jsx)(Qt,{style:{fontSize:"18px"},children:g?(0,e.jsx)(sa,{}):(0,e.jsx)(ia,{})})})}),(0,e.jsx)(Ot,{content:"Фон на увесь сайт",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:Be,$isDarkMode:g,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(Ro,{style:{color:C?"#ff005d":"inherit"}})})})}),(0,e.jsx)(Ot,{content:"Налаштування вигляду",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:be,$isDarkMode:g,"aria-label":"Налаштування вигляду",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(Mo,{})})})}),(0,e.jsx)(Ot,{content:"Навчання",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:At,$isDarkMode:g,"aria-label":"Навчання",children:(0,e.jsx)(Qt,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(Ot,{content:"Інші опції",isDarkMode:g,children:(0,e.jsx)(Kt,{onClick:mt,$isDarkMode:g,"aria-label":"Інші опції",children:(0,e.jsx)(Qt,{children:(0,e.jsx)(Po,{})})})}),(0,e.jsx)("button",{onClick:It,style:{fontSize:"11px",cursor:"pointer",background:"none",border:"none",textDecoration:"underline",display:"none",color:g?"#fff":"#000"},children:"Вхід"}),(0,e.jsx)("button",{onClick:V,style:{fontSize:"14px",cursor:"pointer",background:"none",border:"none",marginRight:"15px",textDecoration:"underline",color:g?"#fff":"#000"},children:"Акаунт"})]})}),Ce&&(0,e.jsxs)(Yp,{$isDarkMode:g,children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)(wr,{$isDarkMode:g,children:["Яскравість ",(0,e.jsxs)("span",{children:[Pe.darkIntensity,"%"]})]}),(0,e.jsx)(ai,{type:"range",min:"0",max:"100",value:Pe.darkIntensity,onChange:G=>Ke(Ee=>({...Ee,darkIntensity:Number(G.target.value)})),$isDarkMode:g})]}),(0,e.jsx)(Zp,{children:wt.map(G=>(0,e.jsx)(Xp,{$active:Pe.filterType===G.id,$isDarkMode:g,onClick:()=>Q(G.id),children:G.label},G.id))}),Pe.filterType!=="none"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(wr,{$isDarkMode:g,children:["Сила ефекту ",(0,e.jsxs)("span",{children:[Pe.filterIntensity,"%"]})]}),(0,e.jsx)(ai,{type:"range",min:"0",max:"100",value:Pe.filterIntensity,onChange:G=>Ke(Ee=>({...Ee,filterIntensity:Number(G.target.value)})),$isDarkMode:g})]}),(0,e.jsxs)("div",{style:{marginTop:"5px"},children:[(0,e.jsx)(wr,{$isDarkMode:g,style:{marginBottom:"8px"},children:"Стилі"}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[gt.map(G=>(0,e.jsx)("button",{style:{background:"transparent",border:"1px solid #ffb36c",color:g?"#ffb36c":"#333",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer"},onClick:()=>re(G.config),children:G.label},G.id)),Le.map(G=>(0,e.jsx)("button",{style:{background:"rgba(255, 179, 108, 0.1)",border:"1px solid #7afcff",color:g?"#7afcff":"#006666",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis"},onClick:()=>re(G.config),children:G.label},G.id))]})]})]})]}),(0,e.jsx)(Fp,{isOpen:me,onClose:()=>$e(!1),isDarkMode:g,siteSections:Y,moveSiteSection:te,resetSiteSections:de,sectionThemes:P,hiddenSections:D,onToggleSectionVisibility:v,onToggleSectionTheme:y,onResetSectionThemes:I,onToggleTheme:Te,onOpenShop:qe,onOpenVip:l,onOpenAchievements:w,showUltra:De,onOpenSettings:vt,onOpenHelp:At,onOpenInfo:x,onOpenOtherOptions:mt,onLogout:Xe,isRoutingMode:ae,setIsRoutingMode:B,currentPath:Z,visualConfig:Pe,setVisualConfig:Ke,onResetFilters:ot,customPresets:Le,onSavePreset:T,onDeletePreset:$,onUpdatePresetName:X,onReorderPresets:ie,setIsFsActive:ge,loadingStrategy:Ie,onSetLoadingStrategy:he,isStickyBgMode:C,onToggleStickyBg:Be})]})},e0=za(md()),t0="/assets/slivki-CfsBtbmK.webp",n0="/assets/weather-f5yEtVi4.webp",a0="/assets/planes-jETY8OKB.webp",r0="/assets/meridian-BmSGwtRn.webp",o0="/assets/youtube-Cr-ZXZeF.webp",ul="/assets/herotext-e_tt891I.webp",ri=JSON.parse(`[{"id":1,"title":"Метеофор (Gismeteo)","url":"https://meteofor.com.ua/","snippet":"Популярний український метеосайт.\\nПримітка: Містить новини пов'язані з політикою.\\nПостачальник: Uanet / Gismeteo\\nДата випуску: Грудень 1998 року","buttonText":"Подивитись погоду","images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxYt4fP3qDMhaY8ZMuec1u8XnEAqFuykvaQlICB7TSg&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGB5skDAFaNg6EHN02ViFfN_F-YMXm8g4ZvPXQbZ15A&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6dKf83HjAemVR36Kt9EsyYOVKkz_OjpUXfj3FV6ZxA&s=10","https://telegraf.com.ua/static/storage/originals/6/db/76cff737c85487ae119c039d9ce2fdb6.png"],"tags":["погода","прогноз","україна"]},{"id":2,"title":"Sinoptik — Погода в Україні","url":"https://sinoptik.ua/","snippet":"Погода на 7 днів, 10 днів та місяць для вашого міста.\\nПостачальник: Ukr.net\\nДата випуску: квітень 2006 року","buttonText":"Подивитись погоду","tags":["погода","синоптик","тиждень"],"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFgFFBCFHEgWc0pOHX3rHIIO9CapUlNIIZa6Ve7gl4A&s=10"]},{"id":3,"title":"YouTube","url":"https://www.youtube.com/","snippet":"Слухайте улюблену музику та дивіться відео під час перегляду погоди. Підпишись на 'SlivkiShow' та 'TheTurkeyStudio', будь ласка :)\\nАвтори: Стів Чен, Чад Герлі та Джавед Карім\\nТеперішній власник: Google / Alphabet Inc.\\nДата випуску: 14 лютого 2005 року(Викуплено Google 9 жовтня 2006 року)","buttonText":"Подивишся відео?","images":["planes","youtube","weather","slivki"],"tags":["музика","відео"]},{"id":4,"title":"Aurora Hills: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk","snippet":"Ласкаво просимо до Аврора-Гіллз!\\n\\nРозташоване в глибині Аппалачів, містечко Аврора-Гіллз колись славилося своєю розвиненою промисловістю та мальовничими краєвидами. Завдяки багатим природним ресурсам регіону Аврора-Гіллз мало всі шанси стати одним із найзаможніших міст штату.\\n\\nОднак усе не так, як здається на перший погляд. Протягом останніх кількох років регіон сколихнула низка загадкових зникнень місцевих жителів і туристів, що спричинило масовий відтік населення з цього містечка. Тепер, у жовтні 1981 року, Аврора-Гіллз — лише тінь того, чим воно було колись; від колишнього процвітання майже нічого не залишилося.\\n\\nВам, як рейнджеру національного парку, належить розслідувати ці зникнення та знайти відповіді на запитання, що роками не давали спокою місцевим жителям. Чому за останні пів року кількість зникнень зросла? Чому не вдається знайти жодних слідів тих, хто зник безвісти? І, що найважливіше: хто чи що стоїть за всім цим? Саме вам доведеться вирушити вглиб національного парку, щоб розкрити таємниці Аврора-Гіллз...\\nВаші ставки: На основі реальних подій чи неймовірна уява?\\nДата випуску: 16 квітня 2024 року\\nПостачальник: NovaSoft Interactive","buttonText":"Завантажити гру","tags":["гра","горор","пригоди"],"youtubeTrailer":"https://www.youtube.com/embed/NsOV7eBWCfg","images":["https://play-lh.googleusercontent.com/JrzlwlllVs2WSAz3E0MM7fL-sym7E3bWO-c7689e-p1nqLjY6EWjE53zWfwXULleM1qxzDRjls3MNjK6Dhnkjw=w5120-h2880-rw","https://play-lh.googleusercontent.com/cndOTOCfDAHOXq87M-UEi26kPOg522GyHnqSKGnpwuUVTjkVXnBbVxWGjpSH6fAotiGJMPtD8MNwvwXxrEUjbQ=w1052-h592-rw","https://play-lh.googleusercontent.com/88Y_AW0zOqtcsL5fl5Lvv-il_0GPeG1TSk1zccYUfbpVjFvF_Q-MKZShoJohsb5Vmgu9P_V0kcq6aeiXh6hC1KA=w1052-h592-rw"]},{"id":5,"title":"Aurora Hills: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch2&hl=uk","snippet":"Ранок 6 жовтня 1981 року розпочався як і будь-який інший: пробудження від неспокійного сну, підготовка до майбутнього дня та поїздка до станції рейнджерів, де ви працювали останні 11 років. Аврора-Гіллз колись була тихою громадою, розташованою в горах Аппалачів, але серія зникнень майже зруйнувала цю безтурботну атмосферу. Лише відчуття спустошення пронизує навколишнє середовище, коли ви проїжджаєте через нині занедбане маленьке містечко.\\n\\nДжен не була на станції рейнджерів, коли ви прибули того ранку. Будучи єдиним іншим рейнджером парку, вона любить рано вставати, і до того часу, як ви прибули, вона вже поїхала до одного з численних закритих пішохідних маршрутів, щоб розпочати пошуки зниклих безвісти людей. Слідуючи її нотаткам, ви звертаєте з головної стежки, щоб зустрітися з нею та дослідити віддалені частини національного парку. Однак, коли ви знаходите її табір, ваші найгірші побоювання справджуються: місце розграбовано, її спорядження розкидано по всьому табору, її намет розірвано, а Джен ніде не видно.\\n\\nНемає часу повертатися назад, вже полудень, і сонце сідає рано в цю пору року. Єдине, що може бути гірше, ніж блукати лісом на самоті, це незважаючи на те, щоб пройти його вночі. Ви не можете покинути Джен зараз, не тоді, коли слід такий свіжий. Тепер у вас немає іншого вибору, окрім як заглибитися в незвідані частини національного парку, ті частини, які перелякані містяни перетворили на місцеві міські легенди. Вам краще піти швидше, можливо, у вас ніколи не буде кращого шансу розкрити темну історію Аврора-Гіллз...\\nДата випуску: 1 березня 2026 року\\nПостачальник: NovaSoft Interactive","buttonText":"Хто чи що викрадає людей?","youtubeTrailer":"https://www.youtube.com/embed/1ZqB0GZA_9c","tags":["гра","горор","пригоди"],"images":["https://play-lh.googleusercontent.com/lO4JOlv9mQttad-XCiiccy0egm3nJTHgxqoXyxTeN30tx3NxfOlvgSuXqY0sfimQPrh3k3aUySbKxoWsZ_NaYA=w1052-h592-rw","https://play-lh.googleusercontent.com/Aybi7U6MYW9PG314QPC2SDYkpJ5Umzr897Qwv84UygmbPGfclLy_luZxAqSWxJuwVmPSvaE5w_gN2OXIuHZVRQ=w1052-h592-rw","https://play-lh.googleusercontent.com/Evd_zcKkzaz1KOS-2rwqNlXl1k6f43OD_U-pn8amx5o1apN7SyGWa9a-D39cvrPZHfmgLRKR7Czlm4CYz4oXNw=w1052-h592-rw"]},{"id":6,"title":"Prometheus","url":"https://prometheus.org.ua/","snippet":"Найбільша українська платформа масових відкритих онлайн-курсів.\\nПостачальники: Іван Примаченко, Олексій Молчановський\\nДата випуску: 15 жовтня 2014 року","buttonText":"Записатись на курс","tags":["освіта","курси","корисно"]},{"id":7,"title":"Gemini","url":"https://gemini.google.com/","snippet":"Професійний ШІ асистент для аналізу тексту, зображень, відео та аудіо. І може їх створювати.\\nПостачальник: Google\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":8,"title":"DeepL Translator","url":"https://www.deepl.com/","snippet":"Один із найточніших онлайн-перекладачів на основі штучного інтелекту.\\nПостачальник: DeepL SE (Ярослав Кутиловський)\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":9,"title":"Coursera","url":"https://www.coursera.org/","snippet":"Онлайн-курси від найкращих університетів та компаній світу.\\nПостачальники: Ендрю Ин, Дафна Коллер\\nДата випуску: 18 квітня 2012 року","buttonText":"Записатись на курс","tags":["освіта","курси","саморозвиток"]},{"id":10,"title":"Duolingo","url":"https://www.duolingo.com/","snippet":"Опановуйте нові мови з найпопулярнішим навчальним додатком у світі! Duolingo — це безкоштовний додаток для вивчення понад 40 мов за допомогою веселих коротких уроків. Практикуйте говоріння, читання, слухання й письмо та вдосконалюйте свої лексичні й граматичні навички.\\nДодаток Duolingo, розроблений експертами з вивчення мови, люблять сотні мільйонів людей по всьому світу. Він допомагає підготуватися до живого спілкування іспанською, французькою, китайською, італійською, німецькою, англійською та багатьма іншими мовами.\\nХоч би з якою метою ви вивчали мову — для подорожей, навчання, кар’єри, спілкування з близькими чи тренування мозку, — вам неодмінно сподобається робити це з Duolingo.\\nЯкі ж переваги Duolingo?\\n• Опановувати мову з Duolingo цікаво та ефективно. Уроки в ігровій формі та веселі персонажі допоможуть вам навчитися впевнено розмовляти, читати, слухати та писати іноземною.\\n• Duolingo справді працює. Створена експертами з вивчення мови, методика Duolingo розроблена так, щоб вивчене закріплювалося в довготривалій пам’яті.\\n• У вас є змога відстежувати свій прогрес. А досягнути поставлених цілей і зробити навчання щоденною звичкою допоможуть веселі винагороди та досягнення!\\n• Ви навчаєтеся разом із понад 500 мільйонами людей з усього світу. Змагайтеся з іншими за переможні місця на дошках пошани, щоб підтримувати інтерес до навчання.\\n• Усі мовні курси безкоштовні. Вивчайте італійську, португальську, турецьку, нідерландську, ірландську, датську, шведську, українську, есперанто, польську, грецьку, угорську, норвезьку, іврит, валлійську, арабську, латинську, гавайську, шотландську ґельську, в’єтнамську, корейську, японську, англійську й навіть високу валірійську! І це не весь список!\\nОсь що кажуть у світі про Duolingo ⭐️⭐️⭐️⭐️⭐️:\\n«Вибір редакції й “найкращий серед найкращих”», — Google Play\\n«Безперечно, найкращий додаток для вивчення мов», — The Wall Street Journal\\n«Ці безкоштовні додаток і вебсайт — одні з наефективніших способів опановувати мову, які мені траплялися… уроки складаються з коротких цікавих завдань, як-от говоріння, переклад чи вибір правильної відповіді, тому я залюбки повертаюсь до них знов і знов», — The New York Times\\n«Duolingo може стати майбутнім освіти», — TIME Magazine\\n«...Duolingo — це веселий, милий і цікавий додаток», — Forbes\\nЯкщо ви любите Duolingo, спробуйте Super Duolingo протягом 14 днів безкоштовно! Опановуйте мову швидко, без реклами й отримуючи корисні бонуси, як-от необмежені серця та щомісячне відновлення відрізка.\\nНадсилайте свої відгуки на адресу android@duolingo.com\\nВебверсія доступна за адресою https://www.duolingo.com\\nПолітика конфіденційності: https://www.duolingo.com/privacy\\nДоміно: Доктор все погано, додаток чудовий, але мови індиків немає, я людей розумію, а вони мене ні... Доктор: Може це на краще, секрети замку ти не видаси :)nПостачальники: Луїс фон Ан, Северин Гакер\\nДата випуску: 29 травня 2013 року","buttonText":"Вчити мови","tags":["освіта","мови","корисно"]},{"id":11,"title":"Wikipedia (Українська)","url":"https://uk.wikipedia.org/","snippet":"Вільна енциклопедія, яку може редагувати кожен.\\nІлон Маск пропонував їм багато грошей, якщо вони перейменуються... Чомусь відмовились...\\nПостачальник: Wikimedia Foundation\\nДата випуску: 30 січня 2004 року","buttonText":"Читати і редагувати","youtubeTrailer":"https://www.youtube.com/watch?v=6UkFHYqVsbc","images":[],"tags":["енциклопедія","знання","довідник"]},{"id":12,"title":"Canva","url":"https://www.canva.com/","snippet":"Простий онлайн-інструмент для створення дизайну, презентацій та графіки.\\nЯкщо відкинути 3тю букву, буде кава :) Рифма від Кейт для пісні Полякової: Буде Кава, яку вип'є леді Гага!\\nПостачальник: Canva Pty Ltd (Мелані Перкінс, Кліфф Обрехт, Камерон Адамс)\\nДата випуску: 1 січня 2013 року","buttonText":"Створити дизайн","tags":["дизайн","інструменти","графіка"]},{"id":13,"title":"Photopea","url":"https://www.photopea.com/","snippet":"Безкоштовний онлайн-редактор зображень, аналог Photoshop.\\nМій перший дизайн: почник, з якого зникає шматок :)\\nПостачальник: Іван Куцкір\\nДата випуску: 14 вересня 2013 року","buttonText":"Редагувати фото","tags":["дизайн","фото","інструменти"]},{"id":14,"title":"Notion","url":"https://www.notion.so/","snippet":"Універсальний робочий простір для нотаток, баз даних та керування проєктами.\\nПостачальник: Notion Labs Inc. (Іван Чжао, Саймон Ласт)\\nДата випуску: березень 2016 року","buttonText":"Організувати роботу","tags":["продуктивність","нотатки","робота"]},{"id":15,"title":"Trello","url":"https://trello.com/","snippet":"Популярний інструмент для управління проєктами на основі канбан-дошок.\\nПостачальник: Atlassian (Джоел Спольскі, Майкл Прайор)\\nДата випуску: 13 вересня 2011 року","buttonText":"Керувати завданнями","tags":["продуктивність","менеджмент","робота"]},{"id":16,"title":"GitHub","url":"https://github.com/","snippet":"Найбільший вебсервіс для спільної розробки програмного забезпечення. До речі, ми теж там :)\\nПостачальник: GitHub Inc. / Microsoft\\nДата випуску: 10 квітня 2008 року","buttonText":"Програмувати","tags":["it","програмування","код"]},{"id":17,"title":"Stack Overflow","url":"https://stackoverflow.com/","snippet":"Спільнота для програмістів, де можна знайти відповіді на технічні питання.\\nПостачальник: Stack Exchange Inc. (Джоел Спольскі, Джефф Атвуд)\\nДата випуску: 15 вересня 2008 року","buttonText":"Знайти рішення","tags":["it","програмування","допомога"]},{"id":18,"title":"Wolfram Alpha","url":"https://www.wolframalpha.com/","snippet":"Обчислювальна система, що видає відповіді на складні математичні та наукові питання. Прикольний калькулятор :)\\nПостачальник: Wolfram Research (Стівен Вольфрам)\\nДата випуску: 18 травня 2009 року","buttonText":"Обчислити","tags":["наука","математика","корисно"]},{"id":19,"title":"Google Scholar","url":"https://scholar.google.com/","snippet":"Пошукова система для наукової літератури та публікацій.\\nПостачальник: Google / Alphabet Inc. (Анураг Ачар'я)\\nДата випуску: 20 листопада 2004 року","buttonText":"Шукати статті","tags":["наука","освіта","пошук"]},{"id":20,"title":"TED","url":"https://www.ted.com/","snippet":"Відеолекції від видатних людей на теми технологій, розваг та дизайну.\\nПочатковий власник: Річард Сол Вурмен та Гаррі Маркс\\nПочатковий автор: TED Conferences LLC / Sapling Foundation (Кріс Андерсон)\\nДата випуску: 23 лютого 1984 року","buttonText":"Дивитись лекції","tags":["освіта","відео","натхнення"]},{"id":21,"title":"Internet Archive","url":"https://archive.org/","snippet":"Некомерційна бібліотека мільйонів безкоштовних книг, фільмів, програм та історії вебсайтів (Wayback Machine).\\nПостачальник: Брюстер Кейл\\nДата випуску: 10 травня 1996 року","buttonText":"Шукати в архіві","tags":["історія","архів","книги"]},{"id":22,"title":"Khan Academy","url":"https://uk.khanacademy.org/","snippet":"Безкоштовні мікролекції з математики, історії, медицини тощо.\\nПостачальник: Салман Хан (Salman Khan)\\nДата випуску: вересень 2006 року","buttonText":"Навчатися","tags":["освіта","школа","корисно"]},{"id":23,"title":"W3Schools","url":"https://www.w3schools.com/","snippet":"Найбільший вебсайт для вивчення веб-технологій (HTML, CSS, JavaScript).\\nПостачальник: Refsnes Data\\nДата випуску: 1998 рік","buttonText":"Вчити код","tags":["it","програмування","навчання"]},{"id":24,"title":"Figma","url":"https://www.figma.com/","snippet":"Онлайн-редактор для створення інтерфейсів та прототипування.\\nУлюблений інструмент дизайнерів (і ні, це не те, про що ви подумали за першими трьома буквами :)\\nПостачальник: Ділан Філд та Еван Воллес (Dylan Field, Evan Wallace)\\nДата випуску: 27 вересня 2016 року","buttonText":"Створювати дизайн","tags":["дизайн","інструменти","it"]},{"id":25,"title":"Miro","url":"https://miro.com/","snippet":"Віртуальна дошка для спільної роботи команд, мозкових штурмів та схем.\\nПостачальник: Андрій Хусид та Олег Шардин\\nДата випуску: 2011 рік","buttonText":"Малювати схеми","tags":["продуктивність","робота","інструменти"]},{"id":26,"title":"Grammarly","url":"https://www.grammarly.com/","snippet":"Онлайн-сервіс для перевірки граматики та стилістики текстів (англійською).\\nПостачальник: Олексій Шевченко, Макс Литвин, Дмитро Лідер\\nДата випуску: 1 липня 2009 року","buttonText":"Перевірити текст","tags":["інструменти","письмо","англійська"]},{"id":27,"title":"Todoist","url":"https://todoist.com/","snippet":"Один із найкращих додатків для ведення списків справ (To-Do list).\\nПостачальник: Doist Ltd. (Amir Salihefendıć)\\nДата випуску: 1 січня 2007 року","buttonText":"Планувати","tags":["продуктивність","планування","корисно"]},{"id":28,"title":"Flightradar24","url":"https://www.flightradar24.com/","snippet":"Сервіс для відстеження авіаперельотів у реальному часі по всьому світу.\\nПостачальник: Мікаель Робертссон та Олов Ліндберг\\nДата випуску: 2006 рік","buttonText":"Відстежувати літаки","tags":["радар","авіація","мапа"]},{"id":29,"title":"Windy","url":"https://www.windy.com/","snippet":"Інтерактивна мапа погоди, вітру, циклонів та опадів. Ми її використовуємо на сайті, і спробуйте її з нашими інструментами у Стихії!\\nПостачальник: Іво Лукачович\\nДата випуску: листопад 2014 року","buttonText":"Дивитися погоду","tags":["погода","мапа","метеорологія"]},{"id":30,"title":"VirusTotal","url":"https://www.virustotal.com/","snippet":"Безкоштовна перевірка файлів та посилань на віруси понад 70 антивірусами.\\nЩось ковіду не зупинило :(\\nПостачальник: Chronicle / Google\\nДата випуску: червень 2004 року","buttonText":"Перевірити на віруси","tags":["безпека","інструменти","корисно"]},{"id":31,"title":"Speedtest by Ookla","url":"https://www.speedtest.net/","snippet":"Найпопулярніший сервіс для перевірки швидкості інтернет-з'єднання.\\nПостачальник: Ookla LLC / Ziff Davis\\nДата випуску: 2006 рік","buttonText":"Тест швидкості","tags":["інструменти","інтернет","тест"]},{"id":32,"title":"AlternativeTo","url":"https://alternativeto.net/","snippet":"Сайт для пошуку аналогів та альтернатив для будь-якого програмного забезпечення.\\nПостачальник: Ола та Маркус\\nДата випуску: березень 2009 року","buttonText":"Знайти альтернативу","tags":["інструменти","софт","пошук"]},{"id":33,"title":"Unsplash","url":"https://unsplash.com/","snippet":"Величезна бібліотека якісних фотографій, вільних для використання.\\nПостачальник: Unsplash / Getty Images (Мікаель Чо)\\nДата випуску: травень 2013 року","buttonText":"Шукати фото","tags":["фото","дизайн","ресурси"]},{"id":34,"title":"Pixabay","url":"https://pixabay.com/","snippet":"Безкоштовні стокові зображення, векторна графіка та відео. Використуємо їх бібліотеку на сайті!\\nПостачальник: Pixabay / Canva (Ганс Браксмайєр, Саймон Штейнбергер)\\nДата випуску: 24 листопада 2010 року","buttonText":"Знайти медіа","tags":["фото","ресурси","дизайн"]},{"id":35,"title":"Medium","url":"https://medium.com/","snippet":"Платформа для публікації статей та блогів на будь-які теми.\\nПостачальник: A Medium Corporation (Ев Вільямс)\\nДата випуску: 15 серпня 2012 року","buttonText":"Читати статті","tags":["статті","блог","читання"]},{"id":36,"title":"Pinterest","url":"https://www.pinterest.com/","snippet":"Соціальна мережа для пошуку та збереження візуальних ідей.\\nПостачальник: Бен Зільберман, Пол Скіарра, Еван Шарп\\nДата випуску: січень 2010 року","buttonText":"Шукати ідеї","tags":["візуал","натхнення","дизайн"]},{"id":37,"title":"Behance","url":"https://www.behance.net/","snippet":"Платформа від Adobe для демонстрації творчих робіт дизайнерів та ілюстраторів.\\nПостачальник: Adobe Inc. (Матіас Корреа, Скотт Бельські)\\nДата випуску: листопад 2005 року","buttonText":"Дивитися портфоліо","tags":["дизайн","портфоліо","мистецтво"]},{"id":38,"title":"Ninite","url":"https://ninite.com/","snippet":"Інструмент для швидкого та автоматичного встановлення популярних програм на Windows.\\nПостачальник: Патрік Свенсковські та Саша Кузінс\\nДата випуску: жовтень 2009 року","buttonText":"Встановити софт","tags":["інструменти","windows","софт"]},{"id":39,"title":"ProtonMail","url":"https://proton.me/mail","snippet":"Захищена електронна пошта з наскрізним шифруванням, розроблена в Швейцарії.\\nПостачальник: Proton AG (Енді Йєн)\\nДата випуску: 16 травня 2014 року","buttonText":"Створити пошту","tags":["безпека","пошта","приватність"]},{"id":40,"title":"1.1.1.1 (Cloudflare)","url":"https://1.1.1.1/","snippet":"Безпечний та швидкий DNS-сервіс для приватного серфінгу в інтернеті.\\nДоміно намагався заблокувати свій власний секретний сайт через 1.1.1.1, але забув, що цього сайту навіть не існує в природі :)\\nПостачальник: Метью Прінс, Мішель Затлін, Лі Голловей\\nДата випуску: 1 квітня 2018 року","buttonText":"Налаштувати DNS","tags":["безпека","інтернет","інструменти"]},{"id":41,"title":"Google Keep","url":"https://keep.google.com/","snippet":"Швидкий та зручний сервіс для створення коротких нотаток та списків від Google.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 20 березня 2013 року","buttonText":"Створити нотатку","tags":["продуктивність","нотатки","google"]},{"id":42,"title":"Codecademy","url":"https://www.codecademy.com/","snippet":"Інтерактивна платформа для вивчення програмування з нуля.\\nПостачальник: Codecademy / Skillsoft (Зач Сімс, Раян Бубінські)\\nДата випуску: серпень 2011 року","buttonText":"Вчити програмування","tags":["освіта","it","код"]},{"id":43,"title":"MDN Web Docs","url":"https://developer.mozilla.org/","snippet":"Найповніша документація для веброзробників від Mozilla.\\nПостачальник: Mozilla Foundation\\nДата випуску: 15 липня 2005 року","buttonText":"Читати документацію","tags":["it","довідник","web"]},{"id":44,"title":"Pocket","url":"https://getpocket.com/","snippet":"Сервіс для збереження статей, відео та сторінок, щоб прочитати їх пізніше.\\nПостачальник: Mozilla Corporation (Нейт Вайнер)\\nДата випуску: серпень 2007 року","buttonText":"Зберегти на потім","tags":["читання","продуктивність","інструменти"]},{"id":45,"title":"Feedly","url":"https://feedly.com/","snippet":"Агрегатор RSS-стрічок для зручного читання новин з улюблених сайтів.\\nПостачальник: DevHD (Ерван Гранжен)\\nДата випуску: 15 червня 2008 року","buttonText":"Читати новини","tags":["новини","інструменти","інформація"]},{"id":46,"title":"Nova Poshta (Нова Пошта)","url":"https://novaposhta.ua/","snippet":"Офіційний сайт найбільшого логістичного оператора України. Відстеження посилок.\\nПостачальник: В'ячеслав Климов, Володимир Поперешнюк\\nДата випуску: 13 лютого 2001 року","buttonText":"Відстежити посилку","tags":["доставка","сервіс","україна"]},{"id":47,"title":"Rozetka","url":"https://rozetka.com.ua/","snippet":"Найбільший онлайн-ритейлер в Україні: електроніка, одяг, товари для дому.\\nПостачальник: ТОВ «Розетка.УА» (Владислав Чечоткін)\\nДата випуску: 2005 рік","buttonText":"Купувати","tags":["магазин","покупки","україна"]},{"id":48,"title":"Ukr.net","url":"https://www.ukr.net/","snippet":"Популярний український вебпортал, стрічка новин та електронна пошта.\\nПостачальник: ТОВ «Укрнет»\\nДата випуску: 1998 рік","buttonText":"Читати новини","tags":["новини","портал","україна"]},{"id":49,"title":"Google Drive","url":"https://drive.google.com/","snippet":"Хмарне сховище для зберігання файлів та спільної роботи над документами.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 24 квітня 2012 року","buttonText":"Відкрити диск","tags":["хмара","файли","робота"]},{"id":50,"title":"ChatGPT","url":"https://chat.openai.com/","snippet":"Штучний інтелект для генерації текстів, програмування та відповідей на запитання.\\nПримітка: 13+ з дозволу батьків, 18+ самостійне використання\\nПостачальник: OpenAI\\nДата випуску: 30 листопада 2022 року","buttonText":"Спілкуватися з ШІ","tags":["ші","інструменти","технології"]},{"id":51,"title":"EdEra","url":"https://www.ed-era.com/","snippet":"Студія онлайн-освіти, що створює інтерактивні курси, підручники та спецпроєкти.\\nПостачальник: Ілля Філіпов (EdEra)\\nДата випуску: 2014 рік","buttonText":"Навчатися","tags":["освіта","курси","україна"]},{"id":52,"title":"Boto Sapiens","url":"https://botosapiens.com/","snippet":"Корисні боти та сервіси для автоматизації рутини в Telegram та не тільки.\\nПостачальник: Boto Sapiens Team\\nДата випуску: 2020 рік","buttonText":"Знайти бота","tags":["інструменти","telegram","корисно"]},{"id":53,"title":"Google Translate","url":"https://translate.google.com.ua/","snippet":"Найвідоміший сервіс машинного перекладу для сотень мов світу.\\nНа жаль як і в Дуолінго, проблему Доміно, з розумінням його мови не вирішили :)\\nПостачальник: Google / Alphabet Inc.\\nДата випуску: 28 квітня 2006 року","buttonText":"Перекласти","tags":["переклад","інструменти","мовлення"]},{"id":54,"title":"OpenStreetMap","url":"https://www.openstreetmap.org/","snippet":"Детальна вільна географічна мапа світу, яку створюють користувачі.\\nДоміно: Я впевнений, що це тактика таємних товариств, наспрвді Земля плоска, Стоїть на 3 слонах, і пливе на черепазі(Дивно, я очікував на Ніцероні, хоча якщо подумати. Ніцерон - символ поганої політики людства у мультиплікаційній формі)\\nПостачальник: OpenStreetMap Foundation (Стів Кост)\\nДата випуску: 9 серпня 2004 року","buttonText":"Відкрити мапу","tags":["мапа","географія","навігація"]},{"id":55,"title":"E-Katalog","url":"https://ek.ua/","snippet":"Каталог описів і цін на побутову і комп'ютерну техніку, допомога у виборі.\\nКейт: я хочу собі 17 айфон про макс. Доміно: давай повчишся користуватися дзьобом на нокіа 3310, через 5 років.\\nПостачальник: E-Katalog Ltd.\\nДата випуску: 2001 рік","buttonText":"Порівняти ціни","tags":["покупки","техніка","порівняння"]},{"id":56,"title":"Словко","url":"https://slovko.zaxid.net/","snippet":"Українська версія популярної гри-головоломки Wordle. Відгадайте слово з 5 літер.\\nДоміно: Я відгадав це індик!\\nПостачальник: Zaxid.net / Назарій Захарія\\nДата випуску: січень 2022 року","buttonText":"Грати","tags":["головоломка","слова","логіка"]},{"id":57,"title":"Web Sudoku","url":"https://www.websudoku.com/","snippet":"Мільярди безкоштовних головоломок Судоку різних рівнів складності онлайн.\\nПостачальник: Web Sudoku Ltd (Гідеон та Елізабет Грін)\\nДата випуску: 2005 рік","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":58,"title":"2048","url":"https://play2048.co/","snippet":"Математична головоломка: зсувайте плитки, щоб утворити число 2048.\\nПостачальник: Габріеле Чіруллі (Gabriele Cirulli)\\nДата випуску: 9 березня 2014 року","buttonText":"Грати","tags":["головоломка","математика","логіка"]},{"id":59,"title":"Lichess","url":"https://lichess.org/","snippet":"Безкоштовна платформа для гри в шахи та розв'язання шахових задач-головоломок.\\nНагадайте: Пішка переміщується по будь якій клітинці як хоче? :)\\nПостачальник: Тібо Дюплессі (Thibault Duplessis)\\nДата випуску: 20 червня 2010 року","buttonText":"Розв'язувати задачі","tags":["головоломка","шахи","логіка"]},{"id":60,"title":"Nonograms.org","url":"https://www.nonograms.org/","snippet":"Японські кросворди (нонограми) — малювання картинок за допомогою чисел.\\nПостачальник: Олег Каштелян\\nДата випуску: 2012 рік","buttonText":"Грати","tags":["головоломка","нонограми","логіка"]},{"id":61,"title":"The New York Times Crossword","url":"https://www.nytimes.com/crosswords","snippet":"Легендарні англомовні кросворди та міні-головоломки щодня.\\nПостачальник: The New York Times Company (Віл Шортс)\\nДата випуску: 15 лютого 1942 року","buttonText":"Розв'язувати","tags":["головоломка","кросворд","слова"]},{"id":62,"title":"Jigsaw Planet","url":"https://www.jigsawplanet.com/","snippet":"Збирайте класичні пазли з тисяч безкоштовних картинок онлайн.\\nПостачальник: Critical Hit Software\\nДата випуску: 2007 рік","buttonText":"Збирати пазли","tags":["головоломка","пазли","відпочинок"]},{"id":63,"title":"Monument Valley","url":"https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley","snippet":"Естетична просторова головоломка про неможливу архітектуру та оптичні ілюзії.\\nПостачальник: ustwo games\\nДата випуску: 3 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","архітектура","інді"]},{"id":64,"title":"The Room","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=h-NdQSeTPfA","snippet":"Ласкаво просимо до Кімнати, фізичної головоломки, загорнутої в таємничу гру, всередині прекрасного тактильного 3D-світу.\\n*****************\\nЯк справи, старий друже? Якщо ти це читаєш, значить, це спрацювало. Сподіваюся, ти все ще можеш мені пробачити.\\nМи ніколи не йшли точкою зору щодо моїх досліджень, але ти мусиш залишити такі речі позаду. Ти єдиний, до кого я можу звернутися. Ти мусиш прийти негайно, бо ми всі у великій небезпеці. Сподіваюся, ти пам'ятаєш будинок? Мій кабінет — найвища кімната.\\nРухайся вперед з душею. Тепер шляху назад немає.\\nЯК.\\n******\\nFireproof Games дуже пишається тим, що представляє вам наше найкраще творіння, захопливу подорож, сповнену краси, небезпеки та таємниці в рівній мірі. Перенесіть себе в унікальний простір, який поєднує захоплюючі візуальні ефекти з інтригуючими проблемами, які потрібно вирішити.\\n• Тривожно реалістична графіка: яскраві візуальні ефекти з природним виглядом, вдосконалені для мобільних дисплеїв.\\n• Моторошне керування одним пальцем: сенсорне керування настільки природне, що ви можете грати однією пальцем, щоб повністю орієнтуватися в цьому таємниче красивому 3D-світі.\\n• Фантастичний дизайн, що дозволяє швидко почати грати: легко почати, важко відірватися, таємниці Кімнати занурять вас ще до того, як ви усвідомите, що граєте.\\n• Захопливі шари таємниці: думаєте, що знаєте, на що дивитеся? Подумайте ще раз.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":65,"title":"Brain It On!","url":"https://play.google.com/store/apps/details?id=com.orbital.brainiton","snippet":"Фізичні головоломки, де треба малювати фігури для вирішення завдань.\\nПостачальник: Orbital Nine Games\\nДата випуску: 15 жовтня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","логіка"]},{"id":66,"title":"Cut the Rope","url":"https://play.google.com/store/apps/details?id=com.zeptolab.ctr.ads","snippet":"Перерізайте мотузки у правильному порядку, щоб нагодувати монстрика Ам Няма цукеркою.\\nПостачальник: ZeptoLab\\nДата випуску: 4 жовтня 2010 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","аркада"]},{"id":67,"title":"Where's My Water?","url":"https://play.google.com/store/apps/details?id=com.disney.WMW","snippet":"Прокладайте шлях воді крізь землю, щоб крокодил Свомпі зміг прийняти душ.\\nДоміно: Я тоді через страх крокодилів, на Марсі(чи куди зараз як найдалі можна) пограю в індика. (Це те саме що гра в крокодила, просто для тих хто їх боїться)\\nПостачальник: Disney Interactive\\nДата випуску: 22 вересня 2011 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","disney"]},{"id":68,"title":"Threes!","url":"https://play.google.com/store/apps/details?id=vo.threes.exclaim","snippet":"Елегантна гра-головоломка, де потрібно з'єднувати плитки, кратні трьом.\\nПостачальник: Sirvo / Asher Vollmer\\nДата випуску: 6 лютого 2014 року","buttonText":"Завантажити гру","tags":["головоломка","числа","логіка"]},{"id":69,"title":"Baba Is You","url":"https://store.steampowered.com/app/736260/Baba_Is_You/","snippet":"Геніальна гра, де ви змінюєте самі правила гри, пересуваючи блоки зі словами.\\nПостачальник: Arvi Teikari (Hempuli)\\nДата випуску: 13 березня 2019 року","buttonText":"Дивитися в Steam","tags":["головоломка","логіка","інді"]},{"id":70,"title":"Mini Metro","url":"https://play.google.com/store/apps/details?id=nz.co.codepoint.minimetro","snippet":"Головоломка-симулятор: проєктуйте лінії метро для міста, що постійно зростає.\\nПостачальник: Dinosaur Polo Club\\nДата випуску: 11 серпня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","симулятор","мінімалізм"]},{"id":71,"title":"Gorogoa","url":"https://play.google.com/store/apps/details?id=unity.Annapurna.Gorogoa","snippet":"Унікальна мальована головоломка, де ви поєднуєте панелі коміксу, щоб просувати сюжет.\\nПостачальник: Jason Roberts / Annapurna Interactive\\nДата випуску: 14 грудня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","мистецтво","сюжет"]},{"id":72,"title":"Portal 2","url":"https://store.steampowered.com/app/620/Portal_2/","snippet":"Культова просторова головоломка від першої особи з портальною гарматою.\\nПостачальник: Valve Corporation\\nДата випуску: 18 квітня 2011 року","buttonText":"Дивитися в Steam","tags":["головоломка","портали","шедевр"]},{"id":73,"title":"The Witness","url":"https://store.steampowered.com/app/210970/The_Witness/","snippet":"Досліджуйте таємничий острів і розв'язуйте сотні складних лабіринтних головоломок.\\nПостачальник: Thekla, Inc. (Jonathan Blow)\\nДата випуску: 26 січня 2016 року","buttonText":"Дивитися в Steam","tags":["головоломка","відкритий_світ","логіка"]},{"id":74,"title":"Braid","url":"https://store.steampowered.com/app/26800/Braid/","snippet":"Платформер-головоломка, де маніпуляції з часом є ключем до вирішення завдань.\\nПостачальник: Number None (Jonathan Blow)\\nДата випуску: 6 серпня 2008 року","buttonText":"Дивитися в Steam","tags":["головоломка","час","інді"]},{"id":75,"title":"Tetris","url":"https://tetris.com/play-tetris","snippet":"Офіційна онлайн-версія найвідомішої у світі гри-головоломки з падаючими блоками.\\nПостачальник: The Tetris Company (Олексій Пажитнов)\\nДата випуску: 6 червня 1984 року","buttonText":"Грати в Tetris","tags":["головоломка","тетріс","класика"]},{"id":76,"title":"Minesweeper Online","url":"https://minesweeperonline.com/","snippet":"Класичний «Сапер» — відкривайте клітинки, спираючись на логіку та числа мін довкола.\\nПостачальник: Microsoft / Роберт Доннер та Курт Джонсон\\nДата випуску: 8 жовтня 1990 року","buttonText":"Грати","tags":["головоломка","сапер","логіка"]},{"id":77,"title":"Flow Free","url":"https://play.google.com/store/apps/details?id=com.bigduckgames.flow","snippet":"З'єднайте крапки однакового кольору лініями, щоб заповнити все ігрове поле.\\nПостачальник: Big Duck Games\\nДата випуску: 7 червня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","лінії","кольори"]},{"id":78,"title":"Monument Valley 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":79,"title":"Bejeweled Classic","url":"https://play.google.com/store/apps/details?id=com.ea.gp.bej3","snippet":"Класична гра зіставлення дорогоцінних каменів, що породила жанр «три в ряд».\\nПостачальник: PopCap Games / EA (Джейсон Капалка)\\nДата випуску: 30 травня 2001 року","buttonText":"Завантажити гру","tags":["головоломка","три_в_ряд","класика"]},{"id":80,"title":"Two Dots","url":"https://play.google.com/store/apps/details?id=com.weplaydots.twodotsandroid","snippet":"Мінімалістична та стильна гра про з'єднання точок одного кольору.\\nПостачальник: Playdots, Inc. / Take-Two Interactive\\nДата випуску: 29 травня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","точки","дизайн"]},{"id":81,"title":"Monument Valley 3","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":82,"title":"Kami 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":83,"title":"Unblock Me","url":"https://play.google.com/store/apps/details?id=com.kiragames.unblockmefree","snippet":"Проста, але складна гра з блоками — виведіть червоний блок з дошки, пересуваючи інші.\\nПостачальник: Kiragames\\nДата випуску: 25 квітня 2009 року","buttonText":"Завантажити гру","tags":["головоломка","блоки","логіка"]},{"id":84,"title":"Roll the Ball","url":"https://play.google.com/store/apps/details?id=com.bitmango.go.rolltheballunrollme","snippet":"Слайд-головоломка: пересувайте блоки, щоб створити шлях для кульки до фінішу.\\nПостачальник: BitMango\\nДата випуску: 20 квітня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","труби","логіка"]},{"id":85,"title":"Infinity Loop","url":"https://play.google.com/store/apps/details?id=com.balysv.loop","snippet":"Розслаблююча гра, де ви обертаєте фрагменти, створюючи нескінченні візерунки.\\nПостачальник: Infinity Games (Balys Valentukevicius)\\nДата випуску: 17 березня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","релакс","візерунки"]},{"id":86,"title":"Water Sort Puzzle","url":"https://play.google.com/store/apps/details?id=com.gma.water.sort.puzzle","snippet":"Сортуйте кольорову воду у склянках так, щоб кожна склянка містила лише один колір.\\nПостачальник: IEC Global / GMA Games\\nДата випуску: 28 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","сортування","логіка"]},{"id":87,"title":"Happy Glass","url":"https://play.google.com/store/apps/details?id=com.game5mobile.lineandwater","snippet":"Малюйте лінії, щоб спрямувати воду і наповнити сумну склянку, зробивши її щасливою.\\nПостачальник: Lion Studios / Game5Mobile\\nДата випуску: 9 серпня 2018 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","малювання"]},{"id":88,"title":"Brain Out","url":"https://play.google.com/store/apps/details?id=com.mind.quiz.brain.out","snippet":"Гра на нестандартне мислення з купою підступних запитань і задач (trick puzzles).\\nПостачальник: Focus Apps / Eyewind\\nДата випуску: 28 серпня 2019 року","buttonText":"Завантажити гру","tags":["головоломка","хитрощі","IQ"]},{"id":89,"title":"Mekorama","url":"https://play.google.com/store/apps/details?id=com.martinmagni.mekorama","snippet":"Проведіть маленького робота через красиві механічні діорами, вирішуючи просторові загадки.\\nПостачальник: Мартин Магні (Martin Magni)\\nДата випуску: 14 лютого 2016 року","buttonText":"Завантажити гру","tags":["головоломка","роботи","3D"]},{"id":90,"title":"Lara Croft GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.lcgo","snippet":"Покрокова головоломка-пригода у світі Tomb Raider з чудовим візуалом.\\nПостачальник: Square Enix Montréal\\nДата випуску: 27 серпня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","пригоди","покрокова"]},{"id":91,"title":"Hitman GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.hitmango","snippet":"Стилізована під настільну гру покрокова стратегія-головоломка зі стелс-елементами.\\nПостачальник: Square Enix Montréal\\nДата випуску: 17 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","стелс","тактика"]},{"id":93,"title":"The Talos Principle","url":"https://store.steampowered.com/app/257510/The_Talos_Principle/","snippet":"Глибока філософська гра-головоломка від першої особи, де ви вирішуєте завдання зі світлом та лазерами.\\nПостачальник: Croteam / Devolver Digital\\nДата випуску: 11 грудня 2014 року","buttonText":"Дивитися в Steam","tags":["головоломка","філософія","sci-fi"]},{"id":95,"title":"Myst","url":"https://store.steampowered.com/app/1255560/Myst/","snippet":"Класична пригодницька головоломка, де вам потрібно розгадати таємниці загадкового острова.\\nПостачальник: Cyan Worlds (Робін та Ренд Міллер)\\nДата випуску: 24 вересня 1993 року","buttonText":"Дивитися в Steam","tags":["головоломка","квест","класика"]},{"id":96,"title":"Wordscapes","url":"https://play.google.com/store/apps/details?id=com.peoplefun.wordcross","snippet":"Головоломка зі словами, яка поєднує пошук слів та кросворд.\\nПостачальник: PeopleFun\\nДата випуску: 19 червня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","слова","кросворд"]},{"id":97,"title":"CodyCross","url":"https://play.google.com/store/apps/details?id=com.fanatee.cody","snippet":"Новий погляд на кросворди з цікавими фактами та гарним дизайном.\\nПостачальник: Fanatee Games\\nДата випуску: 8 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","кросворд","ерудиція"]},{"id":98,"title":"Darkness and Flame 3: The Dark Side","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":99,"title":"100 Doors Games: Escape from School","url":"https://play.google.com/store/apps/details?id=com.Peaksel.OneHundredDoorsGamesEscapeFromSchool","snippet":"Розв'яжіть головоломку кожної кімнати, щоб знайти прихований ключ та відкрити двері.\\nПостачальник: Peaksel\\nДата випуску: 16 березня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","втеча","двері"]},{"id":100,"title":"Tangle Master 3D","url":"https://play.google.com/store/apps/details?id=com.zynga.tangle","snippet":"Просторова головоломка, у якій потрібно розплутати вузли та мотузки.\\nПостачальник: Rollic Games / Zynga\\nДата випуску: 1 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","вузли","3D"]},{"id":101,"title":"Block Puzzle","url":"https://play.google.com/store/apps/details?id=block.puzzle.game.tetris.classic","snippet":"Класична головоломка з дерев'яними блоками в стилі тетріс, без обмежень у часі.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","блоки","релакс"]},{"id":102,"title":"Sudoku.com","url":"https://sudoku.com/uk","snippet":"Один з найпопулярніших сайтів та додатків для вирішення класичного судоку з підказками.\\nПостачальник: Uanet / Gismeteo","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":103,"title":"Mahjong Solitaire","url":"https://play.google.com/store/apps/details?id=com.mobilityware.MahjongSolitaire","snippet":"Класична головоломка на зіставлення однакових плиток маджонгу, щоб очистити дошку.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","маджонг","настільна"]},{"id":104,"title":"Darkness and Flame 4: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":105,"title":"Knotwords","url":"https://play.google.com/store/apps/details?id=com.noodlecake.knotwords","snippet":"Унікальна комбінація судоку та кросворда, де літери розташовані в блоках.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","слова","логіка"]},{"id":106,"title":"Lost Lands 1: Dark Overlord","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands1.free","snippet":"Щось потягло вашого сина в портал! Рушайте на його пошуки в повні загадок Загублені Землі!\\nЗагублені Землі. Темний Владика - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про незвичайний фентезійний світ, повний незвіданих куточків і таємничих мешканців.\\nМолода мати з сином збиралися їхати з літнього будиночка в лісі. Сьюзан всього на секунду відволіклася на телефонний дзвінок. Тим часом її син, який грав неподалік, почув дивні голоси і відправився шукати джерело звуку. Коли Сьюзан помітила що відбувається, Джиммі вже затягувало в портал. Тепер Сьюзан необхідно знайти прохід в цей дивовижний світ і відшукати сина. Все виявиться набагато складніше і небезпечніше, ніж вона могла припустити. На своєму шляху Сьюзан зіткнеться з безліччю загадок і головоломок, зустріне незвичайних мешканців Загублених Земель, також їй будуть протистояти сили зла. Щоб повернути Джиммі їй доведеться перемогти Темного Владику, який тримає в страху весь світ!\\nЧи зможе відчайдушна мати врятувати сина і звільнити цілий світ від зла?\\nПостачальник: 5bn games\\nДата випуску: 24 вер. 2018 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":107,"title":"Lost Lands 2: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":108,"title":"Darkness and Flame 1: Born of Fire","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf1.free","snippet":"Незвичайна знахідка змінює життя дівчини. З цієї миті Еліс долучається до вічної боротьби Темряви та Полум'я і повинна врятувати свій фентезійний світ від знищення.\\nТемрява та полум'я: Породжений вогнем – пригодницька гра-квест із пошуком предметів, міні-іграми й замороками, що розповідає про незвичайний фентезійний світ – Родючі землі – оазиси у нескінченних пустелях.\\nМолода дівчина Еліс знайшла дивну скриньку з яйцем, з якого з'явився вогненний птах і, ніби, вселився в дівчину, залишивши випалений малюнок на руці, сама ж дівчина при цьому посивіла. Із цієї миті Еліс стає залученою у вічну боротьбу Темряви й Полум'я. За дівчиною почалося полювання – невідомі солдати розшукували її, батько зміг уберегти Еліс від них, але це коштувало йому життя. Дівчині довелося покинути свій будинок і відправитися до єдиної рідної людини – дядька, про існування якого вона тільки що довідалася. Разом їм треба буде пройти безліч випробувань у різних куточках Родючих Земель, зустрітися з незвичайними народами й расами, уникнути небезпеки, що наближається, розв'язати безліч заморок і зіштовхнутися з великим злом, що загрожує всьому їх фентезійному світу. Чи зможе Еліс приборкати силу полум'я, даровану їй долею, і врятувати свої землі від перетворення в пустелю смерті?\\n• Пориньте в дивну пригоду у фентезійному світі\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч заморок\\n• Приборкайте силу Полум'я\\n• Врятуйте мир від нищівної для всього живого погрози\\nДосліджуйте більш за 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігр\\nВиявіть кмітливість в інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення\\nЦя гра оптимізована для планшетів та телефонів!\\n+++ Відкрийте для себе ще більше ігор від FIVE-BN GAMES! +++\\nWWW: https://fivebngames.com/\\nFACEBOOK: https://www.facebook.com/fivebn/\\nTWITTER: https://twitter.com/fivebngames\\nYOUTUBE: https://youtube.com/fivebn\\nPINTEREST: https://pinterest.com/five_bn/\\nINSTAGRAM: https://www.instagram.com/five_bn/\\nПостачальник: 5bn games\\nДата випуску:12 квіт. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":109,"title":"Darkness and Flame 2: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":110,"title":"The Legacy 1: Realm of Retribution","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl1.free","snippet":"Детективний квест-головоломка від 5BN: розгадайте таємницю старовинного майяського артефакту в музеї.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":111,"title":"The Legacy 2: Prisoner","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl2.free","snippet":"Пошук зниклого музейного експоната приводить у зовсім інший світ! Захоплююча подорож в атмосфері прадавньої цивілізації.\\n'Спадщина: Бранець' – пригодницька гра в жанрі 'Пошук предметів', з величезним числом захоплюючих міні-ігор і головоломок, яка захопить вас у незвіданий світ і закрутить у вирі подій!\\nПобачивши силует, що ховається вдалечині, охоронця, який несе найрідший бюст представника цивілізації майя, Діана, молода співробітниця історичного музею, ринулася слідом. У результаті погоні події пішли зовсім не за планом! Дівчина - уже не вперше - виявляється в іншому світі. І шлях назад закритий!.. Довідайтеся, хто допоможе Діані впоратися з усіма випробуваннями, що випали на її долю. Пройдіть із ними весь шлях до кінця! Щоб урятувати в'язня прадавнього храму й вибратися з далекого світу додому, Діані доведеться виконати ряд небезпечних завдань, дослідити храми й підземелля, провести прадавні ритуали й знайти несподіваних друзів, готових прийти їй на допомогу! Вас чекає незабутня подорож!\\nДопоможіть Діані подолати труднощі й знайти вірну дорогу додому!\\nВідкрийте для себе новий, загадковий світ і його мешканців!\\nВипробуйте себе в більш ніж 40 міні-іграх і головоломках.\\nЗберіть безліч колекцій і відшукайте десятки морфінг-об'єктів.\\nНасолоджуйтеся приголомшливими локаціями, чудовою графікою й відмінною музикою.\\nДата випуску: 20 трав. 2019 р.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":112,"title":"New York Mysteries 1: Secrets of the Mafia","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym1.free","snippet":"Смілива журналістка, Лора Джеймс, починає власне розслідування таємничих зникнень босів мафії та пропажі дітей, що послідувала за ними.\\nЗагадки Нью-Йорка. Секрети Мафії – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, що розповідає про містичне детективне розслідування, мафіозні таємниці й загадках Нью-Йорка.\\nНью-Йорк, 1955 рік. У місті стало небезпечно. Мафія намагається захопити владу. Але віднедавна з'явилася нова сила. І вона на багато страшніша. За останні дні, п'ять мафіозних босів зникли при загадкових обставинах. На місцях зникнення знаходили лише дивну рідину й метелика. Але не це налякало жителів... У місті стали зникати діти. Усі вони намалювали таких самих метеликів перед зникненням. Лора Джеймс, журналіст «Дейлі Ньюз», починає власне розслідування. Які похмурі таємниці приховують тунелі метро під містом? Чи зможе героїня здолати усі перешкоди та врятувати зниклих.\\nПостачальник: 5bn games\\nДата випуску:24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":113,"title":"New York Mysteries 2: High Voltage","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym2.free","snippet":"Розслідуйте серію дивних убивств у Нью-Йорку, пов'язаних із загадковими електричними аномаліями.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":114,"title":"New York Mysteries 3: The Lantern of Souls","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym3.free","snippet":"Журналістка Лора Джеймс залучається до розслідування чергового вбивства. Однак звичайна, на перший погляд, справа починає набирати небезпечних обертів.\\nЗагадки Нью-Йорка. Ліхтар душ – пригодницька гра-квест з пошуком предметів, міні-іграми й головоломками, що розповідає про нове, небезпечне, містичне детективне розслідування сміливого журналіста Лори Джеймс.\\nНовий епізод жахливої саги переносить вас у Нью-Йорк кінця 50-х років. У заміському маєтку відбувається жорстоке вбивство вдови впливового адвоката. За завданням таємного ордену журналіст газети «Дейлі Ньюз» Лора Джеймс їде на місце злочину. На перший погляд, все виглядає як звичайний розбійний напад. Однак, обшук у будинку загиблої дає несподіваний результат. Небезпека підстерігає героїню на кожному кроці. Хитромудрі пастки і головоломки, таємниці з минулого й містична Темрява, що охопила місто. Чи зможе героїня опанувати те, що відбувається, і врятувати не тільки Нью-Йорк, але і весь світ від катастрофи, що наближається?\\nПостачальник: 5bn games\\nДата випуску:29 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":116,"title":"New York Mysteries 5: Power of Art","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym5.free","snippet":"Викрадені картини оживають: розгадайте таємницю магічного мистецтва у новій частині серії від 5BN. (Поки що остання...)\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":117,"title":"Tricky Doors","url":"https://play.google.com/store/apps/details?id=com.fivebn.trickydoors","snippet":"Атмосферна гра-головоломка від 5BN Games у жанрі «втеча з кімнати» з різноманітними світами, захоплюючими схованками та складними міні-іграми.","buttonText":"Завантажити гру","tags":["головоломка","втеча","5bn","квест"]},{"id":118,"title":"Tiny Room Stories: Town Mystery","url":"https://play.google.com/store/apps/details?id=com.DrunkData.TinyRoom","snippet":"Чудова 3D-головоломка в стилі «втеча з кімнати»: повертайте деталізовані рівні для пошуку підказок.","buttonText":"Завантажити гру","tags":["головоломка","детектив","3d","втеча"]},{"id":120,"title":"Coolors","url":"https://coolors.co/","snippet":"Сучасний та супершвидкий генератор колірних палітр для розробників і дизайнерів з можливістю підбору гармонійних поєднань та експорту в CSS або SVG.","buttonText":"Згенерувати палітру","tags":["дизайн","інструменти","палітра","веб"]},{"id":121,"title":"Agent A: A puzzle in disguise","url":"https://play.google.com/store/apps/details?id=com.yakandco.agenta","snippet":"Шпигунська головоломка у стилі 60-х: проникніть у таємне лігво ворожого агента і знешкодьте пастки.","buttonText":"Завантажити гру","tags":["головоломка","шпигуни","квест","стиль"]},{"id":122,"title":"Adventure Escape Mysteries","url":"https://play.google.com/store/apps/details?id=com.haiku.adventure.escape.mysteries","snippet":"Збірник інтерактивних детективних історій та головоломок від Haiku Games.","buttonText":"Завантажити гру","tags":["головоломка","детектив","квест","історія"]},{"id":123,"title":"Spot the Difference: Find 5","url":"https://play.google.com/store/apps/details?id=com.easybrain.find.differences","snippet":"Класична головоломка на уважність: знайдіть усі відмінності між двома схожими картинками.","buttonText":"Завантажити гру","tags":["головоломка","уважність","пошук"]},{"id":124,"title":"Sudoku - Brain Puzzle Games","url":"https://play.google.com/store/apps/details?id=com.easybrain.sudoku.android","snippet":"Один із найзручніших мобільних додатків для вирішення класичних судоку будь-якої складності.","buttonText":"Завантажити гру","tags":["головоломка","судоку","числа"]},{"id":125,"title":"Nonogram.com - Picture Cross","url":"https://play.google.com/store/apps/details?id=com.easybrain.nonogram","snippet":"Японські кросворди: розгадуйте зашифровані картинки за допомогою логічних підказок.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","числа"]},{"id":126,"title":"Brain Test: Tricky Puzzles","url":"https://play.google.com/store/apps/details?id=com.unicostudio.braintest","snippet":"Захоплююча головоломка з хитрими завданнями та кумедними нестандартними рішеннями.","buttonText":"Завантажити гру","tags":["головоломка","гумор","iq"]},{"id":127,"title":"Rube's Lab - Physics Puzzle","url":"https://play.google.com/store/apps/details?id=com.bouland.rubeslab","snippet":"Фізична головоломка в стилі машин Руба Ґолдберга: будуйте ланцюгові реакції.","buttonText":"Завантажити гру","tags":["головоломка","фізика","механізми"]},{"id":128,"title":"Human Resource Machine","url":"https://play.google.com/store/apps/details?id=com.tomorrowcorporation.humanresourcemachine","snippet":"Весела головоломка, яка навчає базовим принципам програмування через офісну рутину.","buttonText":"Завантажити гру","tags":["головоломка","програмування","код"]},{"id":129,"title":"Bridge Constructor","url":"https://play.google.com/store/apps/details?id=com.headupgames.bridgeconstructor","snippet":"Станьте інженером: будуйте мости через прірви та перевіряйте їх на міцність.","buttonText":"Завантажити гру","tags":["головоломка","будівництво","фізика"]},{"id":130,"title":"Shadowmatic","url":"https://play.google.com/store/apps/details?id=com.triadaal.shadowmatic","snippet":"Оскароносна головоломка: повертайте абстрактні предмети в променях світла, щоб отримати тінь.","buttonText":"Завантажити гру","tags":["головоломка","3d","тіні","релакс"]},{"id":131,"title":"Unpacking","url":"https://play.google.com/store/apps/details?id=com.humblebundle.unpacking","snippet":"Затишна медитативна головоломка про розпакування коробки та облаштування будинку.","buttonText":"Завантажити гру","tags":["головоломка","затишок","релакс"]},{"id":132,"title":"Layovers: World Map Puzzle","url":"https://geoguessr.com/","snippet":"Перевірте свої географічні знання у формі візуальних загадок та інтерактивних мап.","buttonText":"Грати онлайн","tags":["головоломка","географія","знання"]},{"id":133,"title":"Worldle","url":"https://worldle.teuteuf.fr/","snippet":"Щоденна географічна головоломка: вгадайте країну за її контуром та відстанями.","buttonText":"Грати онлайн","tags":["головоломка","географія","слова"]},{"id":134,"title":"Wordle - Official NYT","url":"https://www.nytimes.com/games/wordle/index.html","snippet":"Оригінальна всесвітньо відома гра: вгадайте англійське слово з 5 літер за 6 спроб.","buttonText":"Грати онлайн","tags":["головоломка","слова","англійська"]},{"id":135,"title":"Picross LUNA","url":"https://play.google.com/store/apps/details?id=com.Floralmind.PicrossLuna","snippet":"Атмосферні та казкові японські кросворди зі зворушливою історією та чудовою музикою.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","казка"]},{"id":136,"title":"Remove.bg","url":"https://www.remove.bg/","snippet":"Безкоштовний онлайн-інструмент для автоматичного видалення фону з будь-якого фото за 5 секунд.","buttonText":"Видалити фон","tags":["інструменти","фото","дизайн"]},{"id":137,"title":"ILovePDF","url":"https://www.ilovepdf.com/uk","snippet":"Повний набір безкоштовних інструментів для роботи з PDF: об'єднання, стиснення, конвертація.","buttonText":"Працювати з PDF","tags":["інструменти","документи","pdf"]},{"id":138,"title":"TinyPNG","url":"https://tinypng.com/","snippet":"Розумне стиснення зображень форматів WEBP, PNG та JPEG без втрати якості.","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":139,"title":"FixMySpeakers","url":"https://fixmyspeakers.com/","snippet":"Відтворює спеціальний звук конкретної частоти, щоб виштовхнути воду з динаміка вашого смартфона.","buttonText":"Очистити динамік","tags":["інструменти","смартфон","звук"]},{"id":140,"title":"Radio Garden","url":"http://radio.garden/","snippet":"Інтерактивний 3D-глобус, який дозволяє слухати тисячі прямих трансляцій радіостанцій по всьому світу.","buttonText":"Слухати радіо","tags":["музика","мапа","радіо"]},{"id":141,"title":"MyRetroTVs","url":"https://www.myretrotvs.com/","snippet":"Віртуальний телевізор, який транслює справжні відеоролики, телешоу та рекламу 60-х, 70-х, 80-х чи 90-х років.","buttonText":"Ввімкнути ТВ","tags":["ностальгія","відео","історія"]},{"id":142,"title":"PDF2Go","url":"https://www.pdf2go.com/uk","snippet":"Онлайн-редактор та конвертер PDF-файлів прямо у вашому браузері.","buttonText":"Редагувати PDF","tags":["інструменти","pdf","документи"]},{"id":143,"title":"MyHeritage Deep Nostalgia","url":"https://www.myheritage.com/deep-nostalgia","snippet":"Сервіс на основі штучного інтелекту, який оживляє обличчя на старих архівних фотографіях.","buttonText":"Оживити фото","tags":["ші","фото","історія"]},{"id":144,"title":"Have I Been Pwned","url":"https://haveibeenpwned.com/","snippet":"Перевірте, чи потрапляла ваша електронна пошта або пароль у відомі бази даних витоків інформації.","buttonText":"Перевірити пошту","tags":["безпека","приватність","інструменти"]},{"id":145,"title":"Privnote","url":"https://privnote.com/","snippet":"Створюйте текстові нотатки, які самознищуються одразу після того, як їх прочитає отримувач.","buttonText":"Створити записку","tags":["безпека","приватність","текст"]},{"id":146,"title":"NaturalReaders","url":"https://www.naturalreaders.com/","snippet":"Перетворення будь-якого тексту на природне озвучення штучним інтелектом.","buttonText":"Озвучити текст","tags":["ші","звук","інструменти"]},{"id":147,"title":"Neko-City (NekoWeb)","url":"https://nekoweb.org/","snippet":"Майданчик для створення та перегляду затишних персональних веб-сайтів у дусі інтернету 2000-х.","buttonText":"Дослідити","tags":["веб","ретро","натхнення"]},{"id":148,"title":"10 Minute Mail","url":"https://10minutemail.com/","snippet":"Тимчасова електронна пошта, яка знищується через 10 хвилин. Ідеально для швидких реєстрацій.","buttonText":"Отримати пошту","tags":["безпека","пошта","інструменти"]},{"id":149,"title":"Befunky","url":"https://www.befunky.com/","snippet":"Простий онлайн-фоторедактор, графічний дизайнер та майстер створення колажів.","buttonText":"Редагувати","tags":["дизайн","фото","колаж"]},{"id":150,"title":"Gridzzly","url":"https://gridzzly.com/","snippet":"Створюйте та роздруковуйте власний сітчастий, лінійний або крапковий папір для нотаток.","buttonText":"Створити аркуш","tags":["інструменти","друк","організація"]},{"id":151,"title":"Ninite Pro & Tools","url":"https://ninite.com/","snippet":"Безпечне встановлення декількох популярних додатків одночасно без рекламного сміття.","buttonText":"Вибрати програми","tags":["софт","windows","інструменти"]},{"id":152,"title":"CleanPNG","url":"https://www.cleanpng.com/","snippet":"Безкоштовна база з мільйонів PNG-зображень із прозорим фоном для дизайну.","buttonText":"Шукати PNG","tags":["дизайн","ресурси","картинки"]},{"id":153,"title":"FutureMe","url":"https://www.futureme.org/","snippet":"Напишіть лист самому собі у майбутнє, який прийде на вашу пошту через 1, 3 або 5 років.\\nНапишеш, що це Доміно заставив тебе це зробити, майбутньому я :)","buttonText":"Написати собі","tags":["розваги","саморозвиток","листя"]},{"id":154,"title":"Asoftmurmur","url":"https://asoftmurmur.com/","snippet":"Генератор фонових звуків природи (дощ, вітер, костер) для концентрації або сну.","buttonText":"Слухати фонограму","tags":["релакс","продуктивність","звуки"]},{"id":155,"title":"Soundraw AI","url":"https://soundraw.io/","snippet":"Генератор фонової музики без авторських прав за допомогою штучного інтелекту.\\nПотап написав для нас безкоштовно пісню, але Кейт не сподобалось. Слухаймо: «Ні-на-не-ну-ла-шу, ко-ла-ві-ка-цу» — за 3 секунди шедевр!","buttonText":"Згенерувати трек","tags":["ші","музика","креатив"]},{"id":156,"title":"Стихія","url":"https://stuxia.com/","snippet":"Саморекламування на своєму сайті :) Ви ж вже на найдивнішому сайті серед усіх! Працює із видіння Доміно :)\\nПостачальник: TheTurkeyStudio (Бундюча студія)","buttonText":"Ви ж вже тут :)","tags":["погода","музика","хаос"]},{"id":157,"title":"Ніцерон (Динофроз)","url":"https://megogo.net/ua/view/1812091-dinofroz.html","snippet":"Ми не могли його впустити додаючи нашу базу даних, нашого пошуковика :)\\nЄдиний лінк не на гру і додаток(сайт)\\nПостачальник: Mondo TV","buttonText":"Ностальгія...","tags":["дракони","динозаври","Ніцерон"]},{"id":158,"title":"Dragon Village 3","url":"https://play.google.com/store/apps/details?id=com.highbrow.games.dvo&hl=uk","snippet":"Офіційне продовження Dragon Village через 12 років\\nШкода що Діма Комаров не заїхав в Корею, сувенір пов'яний з грою привіз би :)\\n\\nПостачальник: Highbrow","buttonText":"Збереш усіх драконів? :)","tags":["сюжет","стратегія","дракони"],"images":["village"]},{"id":159,"title":"Меридіан 157: Пролог","youtubeTrailer":"https://www.youtube.com/watch?v=pXW52EZI0vY","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.games.meridian157prologue&hl=uk","snippet":"Meridian 157: Розділи 1, 2 та 3 офіційно випущені! Завантажте їх зараз на Google Play! Meridian 157: Prologue – це гра-головоломка типу «вкажи та клацни», що зосереджена на захопливих головоломках, захопливій візуальній складовій та захопливому сюжеті. Це перша частина серії Meridian 157, де ви граєте за детектива Девіда Зандера, який розслідує таємничу погодну аномалію в північній частині Тихого океану. Використовуйте свою кмітливість, щоб розгадувати головоломки та долати перешкоди, щоб знайти шлях глибше на острів, щоб розкрити та знайти таємницю загубленого острова на 157-му меридіані!\\nШкола виживання для любителів закинутих об'єктів та таємничих бункерів :)\\nПостачальник: NovaSoft Interactive","buttonText":"Розгадаєш таємницю об'єкту F.L.A.R.E?","tags":["аномалії","головоломки","хоррор"]},{"id":160,"title":"Excalidraw","url":"https://excalidraw.com/","snippet":"Зручна віртуальна дошка для швидкого створення схем, діаграм та начерків у стилі малюнка від руки.\\nЯ знав, що уроки кресленння, щось від мене приховують :)\\nПостачальник: Uanet / Gismeteo","buttonText":"Малювати схему","tags":["інструменти","дизайн","схеми"]},{"id":161,"title":"Горох (Словник)","url":"https://goroh.pp.ua/","snippet":"Сучасна онлайн-бібліотека українських словників: тлумачний, етимологічний, словозміна та синоніми.\\nЯкий оригінальний по імені постачальник...\\nПостачальник: Проєкт «Горох»","buttonText":"Шукати слово","tags":["мова","словник","освіта"]},{"id":162,"title":"Lost Lands 3: The Golden Curse","url":"https://play.google.com/store/apps/details?id=com.fivebn.ll3.f2p&hl=uk","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася у фентезійному світі. Їй доведеться боротися проти демонів, які перебули у скам'янілому стані останнє тисячоріччя та й знову відродилися по незрозумілій причині.\\n«Загублені Землі. Прокляте золото» – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, розкиданими на безкрайніх просторах фентезійного світу: від долини вулканів до друїдового лісу, від глибокого підземелля до ширяючих островів.\\nПроста миловидна домогосподарка Сьюзан одного чудового дня, відвідавши музей мистецтв, натикається на стародавнє дзеркало, яке раптом невідомим образом починає вабити Сьюзан до себе. Та доторкається до дзеркала й миттєво переноситься у фентезійний казковий світ Загублених Земель. Отут за свої колишні подвиги вона вже давно відома всім, як Сьюзан-Войовниця.\\nСьюзан зустрічає маленьку дівчинку Фіору, яка відводить її в село до свого прадіда Маарону. У ньому Сьюзан впізнає свого старого знайомого друїда. Маарон розповідає, що на їхнє село напала Гарпія – крилатий демон з легенд. Але саме дивне те, що цей демон останню тисячу років стояв у вигляді кам'яної статуї в одному старому занедбаному форті.\\nРазом зі своїми друзями Сьюзан має бути відправитися в жерло вулкана, спуститися в підземелля й піднятися на ширяючі острови для того, щоб зрозуміти, чому Гарпія, Мінотавр, Нага й Солідус, один за іншим, почали звільнятися з «кам'яного полону» і вчиняти в Загублених Землях хаос. І, звичайно, усіх їх потрібно зупинити...\\nПостачальник: 5bn games\\nДата випуску: 24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":163,"title":"Lost Lands 4: The Wanderer","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":164,"title":"Lost Lands 5: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":165,"title":"Lost Lands 6: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":166,"title":"Lost Lands 7: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":167,"title":"Lost Lands 8: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":168,"title":"Meridian 157: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":169,"title":"Meridian 157: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":170,"title":"Meridian 157: Chapter 3","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":171,"title":"Lost Lands 10","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":172,"title":"Lost Lands 11: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":173,"title":"Dragon Village","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":174,"title":"Dragon Village M","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":175,"title":"Dragon Village Collection","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":176,"title":"Legacy 3: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":177,"title":"The Room 2","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=soyeCXKQ6_Q","snippet":"Ласкаво просимо до The Room Two, фізичної головоломки, загорнутої в таємничу гру, у чудовому тактильному 3D-світі.\\nДовгоочікуване продовження фільму «Кімната», який отримав премію BAFTA, нарешті з’явилося.\\nПройдіть слідом загадкових листів від загадкового вченого, відомого лише як AS, у захоплюючий світ таємниць і досліджень.\\n*******************************************************************************************************************\\n«Неймовірно захоплюючий досвід із розумними головоломками, чудовими візуальними ефектами та моторошною атмосферою; абсолютно переповнений новими ідеями». – Грань\\n«Складно сплетений художній твір, ідеально підходить для свого формату, це та гра, заради якої варто сидіти в темряві». - Кишеньковий гравець\\nЧудова гра, що пропонує великі локації з кількома інтерактивними областями та головоломками. Ідеальна гра для холодної зимової ночі. – Єврогеймер\\n«Змушує вас думати про те, як розв’язувати головоломки, навіть коли ви не граєте; ознака класної гри, якою це безперечно є». – 148 додатків\\nЧудове продовження з приголомшливими візуальними ефектами, рівень складності, який тут представлений, вражає. Друга кімната має бути на першому місці у вашому списку ігор. - GSM Арена\\n*******************************************************************************************************************\\nІНФОРМАЦІЙНИЙ ДИЗАЙН\\nЛегко розпочати, важко відірватися, захоплююче поєднання інтригуючих головоломок із простим інтерфейсом користувача\\nІННОВАЦІЙНЕ СЕНСОРНЕ УПРАВЛІННЯ\\nТактильний досвід настільки природний, що ви можете майже відчути поверхню кожного предмета\\nРЕАЛІСТИЧНІ 3D ЛОКАЦІЇ\\nПориньте в різноманітні приголомшливі середовища, які випробуватимуть вашу майстерність розгадувати головоломки.\\nДЕТАЛІЗОВАНІ 3D ОБ'ЄКТИ\\nВникайте в складні деталі десятків артефактів у пошуках їхніх прихованих секретів.\\nНЕРВУЮЧИЙ АУДІО\\nЗахоплюючий саундтрек і динамічні звукові ефекти створюють звуковий ландшафт, який реагує на вашу гру.\\nТЕПЕР ПІДТРИМУЄТЬСЯ ЗБЕРЕЖЕННЯ В ХМАРІ\\nПоділіться своїм прогресом між кількома пристроями та розблокуйте абсолютно нові досягнення.\\nПІДТРИМКА КІЛЬКОХ МОВ\\nДоступно англійською, французькою, італійською, німецькою, іспанською, бразильською та португальською мовами.\\n*******************************************************************************************************************\\nFireproof Games — це невелика незалежна студія, розташована в Гілфорді у Великобританії.\\nДізнайтеся більше на fireproofgames.com\\nСлідкуйте за нами @Fireproof_Games.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":178,"title":"The Room 3","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","youtubeTrailer":"https://www.youtube.com/watch?v=NaZ2DiDH4i0","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":179,"title":"The Room: Old Sins","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"Увійдіть у The Room: Old Sins і перенесіться в місце, де тактильне дослідження зустрічається зі складними головоломками та захоплюючою історією.\\nРаптове зникнення амбітного інженера та його світської дружини провокує полювання на дорогоцінний артефакт. Стежка веде на горище їхнього дому, де знаходять старий, незвичайний ляльковий будиночок...\\nДосліджуйте тривожні місця, дотримуйтесь незрозумілих підказок і маніпулюйте химерними пристосуваннями, розкриваючи таємниці садиби Волдегрейв.\\nВід себе: Хоч ця серія ігор і платна, але навряд її хтось переплюне...\\nПостачальник: Fireproof Games\\nДата випуску: 18 квітня 2018 рік.","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":180,"title":"Regex101","url":"https://regex101.com/","snippet":"Онлайн-інструмент для тестування, налагодження та аналізу регулярних виразів з детальними поясненнями.\\nПостачальник: Firas Dib\\nДата випуску: 2013 рік","buttonText":"Тестувати Regex","tags":["it","програмування","інструменти"]},{"id":181,"title":"DevDocs","url":"https://devdocs.io/","snippet":"Швидкий та зручний навігатор по документації десятків мов програмування та фреймворків в єдиному інтерфейсі.\\nПостачальник: FreeCodeCamp / Thibaut Courouble\\nДата випуску: 2013 рік","buttonText":"Читати документацію","tags":["it","програмування","довідник"]},{"id":182,"title":"CSS Gradient","url":"https://cssgradient.io/","snippet":"Зручний генератор градієнтів для CSS з візуальним редактором та можливістю копіювання коду в один клік.\\nПостачальник: Designmodo\\nДата випуску: 2017 рік","buttonText":"Створити градієнт","tags":["дизайн","веб","інструменти"]},{"id":183,"title":"Coolors","url":"https://coolors.co/","snippet":"Надшвидкий генератор колірних палітр для дизайнерів та розробників з можливістю збереження та експорту.\\nПостачальник: Fabrizio Bianchi\\nДата випуску: 2014 рік","buttonText":"Підібрати кольори","tags":["дизайн","палітра","інструменти"]},{"id":184,"title":"Carbon","url":"https://carbon.now.sh/","snippet":"Створюйте та поширюйте красиві зображення вашого сирцового коду для презентацій та соціальних мереж.\\nПостачальник: Dawn Labs\\nДата випуску: 2017 рік","buttonText":"Оформити код","tags":["it","дизайн","код"]},{"id":185,"title":"JSON Crack","url":"https://jsoncrack.com/","snippet":"Інструмент для візуалізації складних JSON-структур у вигляді зрозумілих та інтерактивних граф-схем.\\nПостачальник: Aykut Saraç\\nДата випуску: 2022 рік","buttonText":"Візуалізувати JSON","tags":["it","інструменти","json"]},{"id":186,"title":"SVGOMG","url":"https://jakearchibald.github.io/svgomg/","snippet":"Зручний веб-інтерфейс для оптимізації та стиснення векторних SVG-файлів без втрати якості.\\nПостачальник: Jake Archibald\\nДата випуску: 2015 рік","buttonText":"Оптимізувати SVG","tags":["веб","оптимізація","дизайн"]},{"id":187,"title":"CodePen","url":"https://codepen.io/","snippet":"Онлайн-середовище для тестування, демонстрації та обміну HTML, CSS і JavaScript кодом у реальному часі.\\nПостачальник: Alex Vazquez, Tim Sabat, Chris Coyier\\nДата випуску: 2012 рік","buttonText":"Створювати пени","tags":["it","веб","програмування"]},{"id":188,"title":"Supercook","url":"https://www.supercook.com/","snippet":"Генератор рецептів, який підбирає страви на основі списку продуктів, що вже є у вашому холодильнику.\\nПостачальник: Assaf Rozenblatt\\nДата випуску: 2010 рік","buttonText":"Знайти рецепт","tags":["кулінарія","інструменти","корисно"]},{"id":189,"title":"PrintFriendly","url":"https://www.printfriendly.com/","snippet":"Очищає веб-сторінки від реклами та зайвих елементів для зручного друку або збереження в PDF.\\nПостачальник: Taylor Robinson\\nДата випуску: 2009 рік","buttonText":"Підготувати до друку","tags":["інструменти","pdf","друк"]},{"id":190,"title":"Musicca","url":"https://www.musicca.com/uk","snippet":"Безкоштовна платформа для вивчення теорії музики, нотної грамоти та гри на віртуальних інструментах.\\nПостачальник: Musicca International\\nДата випуску: 2019 рік","buttonText":"Вчити музику","tags":["музика","освіта","навчання"]},{"id":191,"title":"Lucide Icons","url":"https://lucide.dev/","snippet":"Красивий, послідовний та відкритий набір іконок для сучасних вебдодатків та інтерфейсів.\\nПостачальник: Lucide Open Source Community\\nДата випуску: 2021 рік","buttonText":"Шукати іконки","tags":["дизайн","веб","іконки"]},{"id":192,"title":"Squoosh","url":"https://squoosh.app/","snippet":"Просунутий онлайн-компресор зображень від Google з можливістю порівняння форматів та якості в реальному часі.\\nПостачальник: Google Chrome Labs\\nДата випуску: 2018 рік","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":193,"title":"Type Lit","url":"https://www.typelit.io/","snippet":"Тренажер сліпого друку, де ви практикуєтеся у швидкості набору, передруковуючи класичні художні книги.\\nПостачальник: TypeLit Team\\nДата випуску: 2020 рік","buttonText":"Тренувати друк","tags":["навчання","тренажер","книги"]},{"id":194,"title":"Ray.so","url":"https://ray.so/","snippet":"Створюйте вражаючі та стильні скріншоти коду з градієнтним фоном для соціальних мереж та портфоліо.\\nПостачальник: Raycast\\nДата випуску: 2021 рік","buttonText":"Згенерувати картку","tags":["it","дизайн","інструменти"]},{"id":195,"title":"Coming Soon","url":"11111Coming Soon11111","snippet":"Дні - білі\\nНочі - чорні\\nСонце - жовте\\nІндичатко - горде\\nОчікуйте оновлень...","buttonText":"Очікуйте","tags":["секрет"]}]`),i0=t=>`https://uk.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(t)}&format=json&origin=*`,s0=(t="")=>t.replace(/<span class="searchmatch">/g,"").replace(/<\/span>/g,"").trim()||"Без опису",Hr=[{name:"Конотоп",fullName:"Конотоп (Сумська обл., Україна)",lat:51.24,lon:33.2,aliases:["конотоп","конотопі","конотопу","конотопом","konotop"]},{name:"Київ",fullName:"Київ (Україна)",lat:50.45,lon:30.52,aliases:["київ","києві","києва","києвом","kyiv","kiev"]},{name:"Харків",fullName:"Харків (Харківська обл., Україна)",lat:49.99,lon:36.23,aliases:["харків","харкові","харкова","харковом","kharkiv","kharkov"]},{name:"Одеса",fullName:"Одеса (Одеська обл., Україна)",lat:46.48,lon:30.72,aliases:["одеса","одесі","одеси","одесою","odesa","odessa"]},{name:"Дніпро",fullName:"Дніпро (Дніпропетровська обл., Україна)",lat:48.46,lon:35.04,aliases:["дніпро","дніпрі","дніпра","дніпром","dnipro","dnepropetrovsk"]},{name:"Львів",fullName:"Львів (Львівська обл., Україна)",lat:49.84,lon:24.03,aliases:["львів","львові","львова","львовом","lviv","lwo"]},{name:"Запоріжжя",fullName:"Запоріжжя (Запорізька обл., Україна)",lat:47.84,lon:35.14,aliases:["запоріжжя","запоріжжі","zaporizhzhia","zaporozhye"]},{name:"Кривий Ріг",fullName:"Кривий Ріг (Дніпропетровська обл., Україна)",lat:47.91,lon:33.39,aliases:["кривий ріг","кривому розі","кривого рогу","kryvyi rih"]},{name:"Миколаїв",fullName:"Миколаїв (Миколаївська обл., Україна)",lat:46.98,lon:32,aliases:["миколаїв","миколаєві","миколаєва","mykolaiv","nikolaev"]},{name:"Вінниця",fullName:"Вінниця (Вінницька обл., Україна)",lat:49.23,lon:28.48,aliases:["вінниця","вінниці","вінницею","vinnytsia","vinnitsa"]},{name:"Полтава",fullName:"Полтава (Полтавська обл., Україна)",lat:49.59,lon:34.55,aliases:["полтава","полтаві","полтави","poltava"]},{name:"Чернігів",fullName:"Чернігів (Чернігівська обл., Україна)",lat:51.49,lon:31.29,aliases:["чернігів","чернігові","чернігова","chernihiv","chernigov"]},{name:"Черкаси",fullName:"Черкаси (Черкаська обл., Україна)",lat:49.44,lon:32.06,aliases:["черкаси","черкасах","черкасів","cherkasy","cherkassy"]},{name:"Суми",fullName:"Суми (Сумська обл., Україна)",lat:50.91,lon:34.8,aliases:["суми","сумах","сум","sumy"]},{name:"Житомир",fullName:"Житомир (Житомирська обл., Україна)",lat:50.25,lon:28.66,aliases:["житомир","житомирі","житомира","zhytomyr"]},{name:"Хмельницький",fullName:"Хмельницький (Хмельницька обл., Україна)",lat:49.42,lon:27,aliases:["хмельницький","хмельницькому","khmelnytskyi"]},{name:"Рівне",fullName:"Рівне (Рівненська обл., Україна)",lat:50.62,lon:26.25,aliases:["рівне","рівному","rovno","rivne"]},{name:"Чернівці",fullName:"Чернівці (Чернівецька обл., Україна)",lat:48.29,lon:25.93,aliases:["чернівці","чернівцях","chernivtsi"]},{name:"Кременчук",fullName:"Кременчук (Полтавська обл., Україна)",lat:49.07,lon:33.42,aliases:["кременчук","кременчуці","кременчука","kremenchuk"]},{name:"Тернопіль",fullName:"Тернопіль (Тернопільська обл., Україна)",lat:49.55,lon:25.59,aliases:["тернопіль","тернополі","ternopil"]},{name:"Івано-Франківськ",fullName:"Івано-Франківськ (Івано-Франківська обл., Україна)",lat:48.92,lon:24.71,aliases:["івано-франківськ","франківськ","івано-франківську","ivano-frankivsk"]},{name:"Луцьк",fullName:"Луцьк (Волинська обл., Україна)",lat:50.75,lon:25.34,aliases:["луцьк","луцьку","lutsk"]},{name:"Біла Церква",fullName:"Біла Церква (Київська обл., Україна)",lat:49.8,lon:30.12,aliases:["біла церква","білій церкві","bila tserkva"]},{name:"Ужгород",fullName:"Ужгород (Закарпатська обл., Україна)",lat:48.62,lon:22.3,aliases:["ужгород","ужгороді","uzhhorod"]},{name:"Шостка",fullName:"Шостка (Сумська обл., Україна)",lat:51.86,lon:33.47,aliases:["шостка","шостці","shostka"]},{name:"Умань",fullName:"Умань (Черкаська обл., Україна)",lat:48.75,lon:30.22,aliases:["умань","умані","uman"]},{name:"Бердичів",fullName:"Бердичів (Житомирська обл., Україна)",lat:49.89,lon:28.58,aliases:["бердичів","бердичеві","berdychiv"]},{name:"Дрогобич",fullName:"Дрогобич (Львівська обл., Україна)",lat:49.35,lon:23.5,aliases:["дрогобич","дрогобичі","drohobych"]},{name:"Нікополь",fullName:"Нікополь (Дніпропетровська обл., Україна)",lat:47.57,lon:34.4,aliases:["нікополь","нікополі","nikopol"]},{name:"Бровари",fullName:"Бровари (Київська обл., Україна)",lat:50.51,lon:30.79,aliases:["бровари","броварах","brovary"]},{name:"Павлоград",fullName:"Павлоград (Дніпропетровська обл., Україна)",lat:48.52,lon:35.87,aliases:["павлоград","павлограді","pavlohrad"]},{name:"Сєвєродонецьк",fullName:"Сєвєродонецьк (Луганська обл., Україна)",lat:48.95,lon:38.48,aliases:["сєвєродонецьк","северодонецьк","severodonetsk"]},{name:"Бердянськ",fullName:"Бердянськ (Запорізька обл., Україна)",lat:46.76,lon:36.79,aliases:["бердянськ","бердянську","berdyansk"]},{name:"Кам'янець-Подільський",fullName:"Кам'янець-Подільський (Хмельницька обл., Україна)",lat:48.68,lon:26.58,aliases:["кам'янець-подільський","кам'янець","kamianets-podilskyi"]},{name:"Олександрія",fullName:"Олександрія (Кіровоградська обл., Україна)",lat:48.67,lon:33.11,aliases:["олександрія","олександрії","oleksandriia"]},{name:"Мукачево",fullName:"Мукачево (Закарпатська обл., Україна)",lat:48.44,lon:22.72,aliases:["мукачево","мукачеве","mukachevo"]},{name:"Кам'янське",fullName:"Кам'янське (Дніпропетровська обл., Україна)",lat:48.51,lon:34.61,aliases:["кам'янське","дніпродзержинськ","kamianske"]},{name:"Кропивницький",fullName:"Кропивницький (Кіровоградська обл., Україна)",lat:48.51,lon:32.26,aliases:["кропивницький","кіровоград","kropyvnytskyi"]},{name:"Маріуполь",fullName:"Маріуполь (Донецька обл., Україна)",lat:47.1,lon:37.54,aliases:["маріуполь","маріуполі","mariupol"]},{name:"Севастополь",fullName:"Севастополь (Крим, Україна)",lat:44.62,lon:33.53,aliases:["севастополь","севастополі","sevastopol"]},{name:"Сімферополь",fullName:"Сімферополь (Крим, Україна)",lat:44.95,lon:34.1,aliases:["сімферополь","сімферополі","simferopol"]},{name:"Херсон",fullName:"Херсон (Херсонська обл., Україна)",lat:46.64,lon:32.61,aliases:["херсон","херсоні","kherson"]}],pl=t=>{if(!t||typeof t!="string")return null;const n=t.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(!n)return null;for(const r of Hr)if(r.name.toLowerCase()===n||r.aliases.some(u=>u.toLowerCase()===n))return r;for(const r of Hr)if(r.aliases.some(u=>n.includes(u.toLowerCase())))return r;return null},fl="data:image/webp;base64,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",l0=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  backdrop-filter: blur(5px);
`,d0=i.div`
  background: ${t=>t.$isDarkMode?"#1a1a1a":"#fdfdfd"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  width: 100%;
  max-width: 600px;
  height: 85vh;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid ${t=>t.$isDarkMode?"#333":"#ddd"};
`,c0=i.div`
  padding: 15px 20px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"#333":"#eee"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
    font-size: 18px;
    color: #ffb36c;
    font-family: var(--font-family, sans-serif);
  }
`,u0=i.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff4d4d;
  }
`,p0=i.div`
  padding: 15px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: var(--font-family, sans-serif);
`,f0=i.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`,g0=i.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#000":t.$isDarkMode?"#ccc":"#444"};
  border: 1px solid
    ${t=>t.$active?"#ffb36c":t.$isDarkMode?"#444":"#ccc"};
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover:not(:disabled) {
    border-color: #ffb36c;
    color: ${t=>t.$active?"#000":"#ffb36c"};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,m0=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
`,oi=i.div`
  align-self: ${t=>t.$isBot?"flex-start":"flex-end"};
  background: ${t=>t.$isBot?t.$isDarkMode?"#2a2a2a":"#f0f0f0":"#ffb36c"};
  color: ${t=>t.$isBot&&t.$isDarkMode?"#fff":"#000"};
  padding: 10px 15px;
  border-radius: 12px;
  max-width: 90%;
  font-size: 14px;
  line-height: 1.4;
  border: 1px solid
    ${t=>t.$isBot?t.$isDarkMode?"#444":"#ddd":"#e69c55"};

  a {
    color: ${t=>t.$isBot?"#ffb36c":"#000"};
    text-decoration: underline;
  }
`,h0=i.div`
  padding: 15px;
  border-top: 1px solid ${t=>t.$isDarkMode?"#333":"#eee"};
  display: flex;
  gap: 10px;
  background: ${t=>t.$isDarkMode?"#111":"#fafafa"};
  font-family: var(--font-family, sans-serif);
`,x0=i.input`
  flex: 1;
  padding: 12px 15px;
  border-radius: 20px;
  border: 1px solid ${t=>t.$isDarkMode?"#444":"#ccc"};
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  outline: none;
  font-family: inherit;
  &:focus {
    border-color: #ffb36c;
  }
`,b0=i.button`
  background: #ffb36c;
  color: #000;
  border: none;
  padding: 0 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  &:hover:not(:disabled) {
    background: #ffa040;
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function y0({isOpen:t,onClose:n,newsItem:r,isDarkMode:u}){const[l,d]=(0,a.useState)(""),[b,p]=(0,a.useState)([]),[x,f]=(0,a.useState)(""),[g,F]=(0,a.useState)(!1),[C,L]=(0,a.useState)(""),P=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!t)return;c.default.getItem("gemini_api_key").then(w=>L(w));const I=`news_ai_chat_${r?.link||"general"}`;c.default.getItem(I).then(w=>{w?Date.now()-w.timestamp>864e5?p([]):p(w.messages||[]):p([])})},[t,r]),(0,a.useEffect)(()=>{P.current?.scrollIntoView({behavior:"smooth"})},[b]);const D=I=>{const w=I.slice(-20),E=`news_ai_chat_${r?.link||"general"}`;c.default.setItem(E,{timestamp:Date.now(),messages:w}),p(w)},v=async(I=null,w=null)=>{const E=I||x;if(!E.trim()||g)return;if(!C){alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");return}const O=w||l||"докладно";let _={text:I?`[Режим: ${w}] Зроби виклад цієї новини.`:E,isBot:!1};const Y=[...b,_];I||f(""),p(Y),F(!0);try{const te=new Wr(C).getGenerativeModel({model:"gemini-2.5-flash"});let de=`Ти - ШІ-помічник. Твоє завдання зробити виклад новини та відповідати на питання щодо неї. Режим відповіді: ${O}.`;O==="коротко"&&(de+=" Відповідай максимально стисло, виділи головне (1-2 речення)."),O==="докладно"&&(de+=" Відповідай розгорнуто, з усіма доступними деталями, структуруй текст."),O==="науково"&&(de+=" Використовуй науковий, академічний стиль та термінологію, аналітичний підхід."),O==="дружньо"&&(de+=" Будь дуже милим, дружнім, як найкращий друг, використовуй смайлики та неформальний стиль."),O==="саркастично"&&(de+=" Відповідай з легким сарказмом та іронією (але без образ та цензурно).");let ae=`${de}

Ось новина, про яку йде мова:
Заголовок: ${r.title}
Опис: ${r.description}
Посилання на сайт (якщо можеш, перейди за ним для деталей): ${r.link}

Запит: ${E}`;const B={text:(await te.generateContent(ae)).response.text(),isBot:!0};D([...Y,B])}catch(te){console.error(te);const de={text:"⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",isBot:!0};D([...Y,de])}finally{F(!1)}},y=I=>{d(I),v("Будь ласка, зроби виклад цієї новини. Якщо можеш - візьми дані безпосередньо з сайту за посиланням, якщо ні - використай наданий опис.",I)};return t?(0,e.jsx)(l0,{onClick:n,children:(0,e.jsxs)(d0,{$isDarkMode:u,onClick:I=>I.stopPropagation(),children:[(0,e.jsxs)(c0,{$isDarkMode:u,children:[(0,e.jsx)("h3",{children:"✨ ШІ Виклад Новини"}),(0,e.jsx)(u0,{onClick:n,title:"Закрити",children:"×"})]}),(0,e.jsxs)(p0,{children:[(0,e.jsx)(f0,{children:["коротко","докладно","науково","дружньо","саркастично"].map(I=>(0,e.jsx)(g0,{$active:l===I,$isDarkMode:u,onClick:()=>y(I),disabled:g,children:I.charAt(0).toUpperCase()+I.slice(1)},I))}),(0,e.jsxs)(m0,{children:[b.length===0&&!g&&(0,e.jsx)("div",{style:{textAlign:"center",marginTop:"20px",color:"gray",fontSize:"14px"},children:"Оберіть режим вище, щоб згенерувати виклад новини, або просто задайте своє питання щодо неї!"}),b.map((I,w)=>(0,e.jsx)(oi,{$isBot:I.isBot,$isDarkMode:u,children:(0,e.jsx)(Xl,{children:I.text})},w)),g&&(0,e.jsx)(oi,{$isBot:!0,$isDarkMode:u,children:"Думаю... 🤔"}),(0,e.jsx)("div",{ref:P})]})]}),(0,e.jsxs)(h0,{$isDarkMode:u,children:[(0,e.jsx)(x0,{$isDarkMode:u,value:x,onChange:I=>f(I.target.value),onKeyPress:I=>I.key==="Enter"&&v(),placeholder:"Задайте питання щодо новини...",disabled:g}),(0,e.jsx)(b0,{onClick:()=>v(),disabled:g||!x.trim(),title:"Відправити",children:"➔"})]})]})}):null}var w0=JSON.parse(`[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна! \\n  Погода, музика і безпечні новини, та купа інструментів, чекають на вас!","image":null},{"q":"Угода користувача","a":"Ця Угода є юридично обов'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"preview"},{"q":"Про клімат без цензури","a":"Друзі, я не хочу спілкуватись про цю тему. Проте важливо поговорити про це.\\n          Отже погода, є частиною політики, нечасто, але так.\\n          В Америці є станція для вивчення погоди(HARP), яка пливає на магнітне поле і погоду по всьому світу. \\n          На жаль, розвінчати чи підтвердити данну інформацію неможливо, оскільки джерело конспірологічне, але є дуже переконливі докази. \\n     Якщо є докази, що конспірологія не бреше, присилайте на пошту. Для метеоролога це дуже важливо. \\n          Такі досліди становлять загрозу для планети, і життя людей. Словами це не зупинити. Тому прошу, робіть все що можете, щоб зупинити ці досліди.\\n          Прикро що новини, постійно говорять про політику та показують рекламу. Але про погоду рідко, а тим паче про те, що треба це зупинити.","image":"texts"},{"q":"Співпраця та поради. Можливості сайту.","a":"Так! Я можу підказати через email, як отримати доступ до API сайтів та плагінів, які я використовую. А ось можливості сайту: Погода, музика, фан-арти, ШІ і т.д.","image":"might"},{"q":"Історія власників сайту...Не реальних: Кейт, Доміно, Марти...","a":"Це секрет поки.","image":"might"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок і натисніть Enter або натисніть на кнопку пошуку.\\nКрок 2. Оберіть потрібне місто зі списку підказок (якщо з'явиться кілька варіантів).\\nКрок 3. Ви побачите три блоки прогнозу:\\n  • Зараз — поточна температура, відчуття, вологість, тиск, вітер, УФ-індекс.\\n  • 24-годинний (на 7 днів) — кожна доба окремо, розбита по годинах.\\n  • 16-денний — загальний прогноз на два тижні вперед.\\nКрок 4. Зверніть увагу на кольорові мітки:\\n  🔴 Червоний (!): умови перевищують норму прямо ЗАРАЗ (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7).\\n  🟠 Оранжевий (!): небезпечні умови очікуються хоча б в один із найближчих 3 днів.\\nКрок 5. Натисніть на картку дня, щоб розгорнути погодинний прогноз.\\nКрок 6. Щоб додати кілька міст одночасно — введіть наступне місто в той самий рядок після першого.\\nПорада: якщо прогноз не оновлюється, натисніть кнопку оновлення або перезавантажте сторінку.","image":"hills"},{"q":"🌤 Погода: часті питання","a":"Чому показує не те місто? — Введіть повну назву міста або додайте країну через кому, наприклад: «Київ, Україна».\\n\\nЧому немає прогнозу? — Можливо, API-ліміт вичерпано. Зачекайте кілька хвилин і спробуйте знову.\\n\\nЩо означають значки поруч із містом? — Червоний або оранжевий знак оклику попереджає про небезпечні погодні умови (детальніше у розділі «Погода: навчання»).\\n\\nЯк прибрати місто зі списку? — Натисніть хрестик (✕) на картці міста.\\n\\nЧому УФ-індекс = 0 вночі? — Це нормально: УФ-випромінювання відсутнє без сонця.\\n\\nЯк дізнатись вологість ґрунту або атмосферний тиск? — Ці дані відображаються у розгорнутому вигляді картки «Зараз».","image":"hills"},{"q":"🌤 Погода: додаткові відомості","a":"Крім, назви міста ви можете зробити пошук по координатам.\\n Замітки: під логотипом є поле з датою, назвою(до 12символів) і кнопкою додати.\\nЯкщо ви не ввели дату(лише назву), то ви моджете встановити дату, натиснувши пару разів на дату у 16денному прогнозі.\\nДата підсвічується синім кольором у 16денному прогнозі. Для того щоб прибрати натисніть на дату і назву події в фіолетовому полі, під об'єктом встановленням дати.","image":"hills"},{"q":"Бундючий пошук","a":"Тут ми розміщуємо 200-250 цікавих, корисних сайтів та ігор... А також статті з Вікіпедії. При натиску на зірочку, ви можете перейти на сайт не вводячі символів.","image":null},{"q":"Відсутність реклами на музику","a":"Це трохи дивно, але логічно. Ми поважаємо авторське право. Заробляти на чужих піснях — це неправильно.","image":"three"},{"q":"📰 Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані безпечні RSS-джерела.\\nКрок 3. Щоб додати власне джерело:\\n  • Натисніть кнопку «+ Додати джерело».\\n  • Вставте посилання на RSS-стрічку сайту (закінчується на .xml, .rss або /feed).\\n  • Натисніть «Додати» — новини завантажаться автоматично.\\nКрок 4. У налаштуваннях новин можна:\\n  • Увімкнути автоскрол при відкритті сайту.\\n  • Приховати заголовок або опис новини.\\nКрок 5. Мітка «НОВЕ» — з'являється на 1 хвилину після того, як ви прокрутили до новини.\\nКрок 6. Для власників Google AI Key — доступна функція «ШІ-виклад»: чат-бот обговорює будь-яку новину. 1 новина = 10 останніх повідомлень. Повне очищення чату через 24 год без активності.\\nФільтрація: Новини з темами насильства, політики, 18+, криміналу, релігії (крім святкових привітань у погодних картках), казино, корупції, сект і теактів — не відображаються автоматично.","image":null},{"q":"📰 Новини: часті питання","a":"Чому деякі RSS не працюють? — Деякі сайти мають «биті» або порожні стрічки. Перевірте посилання через W3C Feed Validator або відкрийте його у браузері.\\n\\nЧи можна додати Facebook чи Twitter? — Ні. Ці платформи не мають RSS. Можна скористатись сторонніми конверторами (наприклад, RSS.app), але вони зазвичай платні.\\n\\nЧому новина не оновлюється? — RSS-стрічки оновлюються з боку самого сайту-джерела. Якщо джерело давно не публікувало — новин не буде.\\n\\nЯк поскаржитись на новину, що проскочила фільтр? — Надішліть скаргу на email: theturkeystudio@gmail.com з посиланням на новину.\\n\\nРекомендовані RSS-джерела:\\n• ScienceDaily: https://www.sciencedaily.com/rss/top/science.xml\\n• NASA: https://www.nasa.gov/rss/dyn/breaking_news.rss\\n• Суспільне: https://suspilne.media/feed/news/rss-uk.xml\\n• BBC World: https://feeds.bbci.co.uk/news/world/rss.xml\\n• TechCrunch: https://techcrunch.com/feed/\\n• The Verge: https://www.theverge.com/rss/index.xml\\n• Укрінформ: https://www.ukrinform.ua/rss\\n• IGN (ігри): https://feeds.feedburner.com/ign/news\\n• TED Talks: https://feeds.feedburner.com/TEDTalks_video","image":null},{"q":"Навчання по управлінню новинами","a":"У Стихії в розділі новини, ви можете додавати власні новинні сайти: RSS-стрічку. \\n      А у налаштуваннях, ви можете налаштувати автоскрол новин при відкритті сайту, і прибрати заголовок та опис новини\\nПримітка: Новини з елементами: війни, політики, 18+, порно, сексу, еротики, криміналу, суду, затримання, казино, корупції, релігії(виняток привітання зі святом, у погодних картках), таємних товариств(конспірологія або теорії змови), теракту, секти. Не відображаються. У разі якщо сайт показав вище перечислений елемент, ви можете(навіть мусите) надіслати скаргу на email! Ми хочемо щоб користувачі Стихії могли бачити к-ка погодних місць одночасно, ностальгувати, слухати музику без лімітів і реклами, а також щоб новини(більшість з яких погані) не псували вам день. \\nПримітка: Якість RSS: Деякі сайти мають \\"биті\\" або порожні RSS-стрічки. Якщо ви спробуєте додати таку, вам видасться помилка або нічого не покаже.\\nДля перевірки необхідно використати безкоштовні онлайн-валідатори, як-от W3C Feed Validation Service або просто відкрити посилання в браузері.\\nОбмеження, які важливо враховувати:\\nRSS-формат: Якщо сайт просто \\"новинний\\", але не має RSS (наприклад, Facebook або Twitter), ви не зможете його додати. Йому потрібно буде шукати спеціальні сервіси, що конвертують сторінки в RSS (наприклад, RSS.app), але це зазвичай платні послуги.\\nМітка Нове: Видима 1хв після скролу до новини.\\nДля тих хто має Google АІ Key, є функція ШІ виклад, чат-бот в плані новини, 1новина=10останніх повідомлень, повне очищення через 24год відсутності питань.\\n\\nНаука та технології:\\nScienceDaily (Top News): https://www.sciencedaily.com/rss/top/science.xml\\nNature (Research Highlights): https://www.nature.com/nature.rss\\nWired (Technology): https://www.wired.com/feed/category/science/feed/\\nTechCrunch: https://techcrunch.com/feed/\\nNASA (Breaking News): https://www.nasa.gov/rss/dyn/breaking_news.rss\\nThe Verge: https://www.theverge.com/rss/index.xml\\n\\nСвітові новини та аналітика:\\nBBC News (World): https://feeds.bbci.co.uk/news/world/rss.xml\\nReuters (Top News): https://feeds.reuters.com/reuters/topNews\\nAl Jazeera (English): https://www.aljazeera.com/xml/rss/all.xml\\nThe Economist (World): https://www.economist.com/world/rss.xml\\n\\nУкраїна (Українською):\\nУкраїнська правда: https://www.pravda.com.ua/rss/\\nNV.ua: https://nv.ua/rss/all.xml\\nСуспільне Новини: https://suspilne.media/feed/news/rss-uk.xml\\nУкрінформ: https://www.ukrinform.ua/rss\\n\\nБізнес та Економіка:\\nBloomberg (Technology): https://feeds.bloomberg.com/technology/news.rss\\nHarvard Business Review: https://hbr.org/rss/topics/leadership\\n\\nРозваги, Культура та Інше:\\nIGN (Games): https://feeds.feedburner.com/ign/news\\nNational Geographic: https://feeds.feedburner.com/ng/science\\nTED Talks: https://feeds.feedburner.com/TEDTalks_video\\nLifehacker: https://lifehacker.com/rss\\n\\nЯкщо ви помітили, що якась новина не оновлюється або посилання не працює — будь ласка, повідомте нам. Ми постійно оновлюємо список джерел.\\nІще дещо для соцмереж і т.д:\\n1. Telegram (Найпростіше для RSS)\\nRSSHub: Готовий публічний сервіс, який перетворює майже будь-що на RSS. Для Telegram-каналу достатньо посилання:\\n[https://rsshub.app/telegram/channel/ім_я_каналу](https://rsshub.app/telegram/channel/ім_я_каналу)\\nTGStat / Telemetr RSS: Деякі агрегатори надають готові RSS-стрічки публічних каналів.\\nTelegram Bot API (JS Wrapper): Створити безкоштовного бота, додати його в канал (або читати публічний канал через getChatHistory) і пересилати пости у свій React-додаток через REST API.\\n2. YouTube\\nУ YouTube є вбудовані безкоштовні RSS-стрічки для кожного каналу, про які мало хто знає. Всі відео та шортси каналу можна отримувати без жодних ключі API:\\nЗа ID каналу:\\n[https://www.youtube.com/feeds/videos.xml?channel_id=UC](https://www.youtube.com/feeds/videos.xml?channel_id=UC)...\\nЗа назвою каналу (через RSSHub):\\n[https://rsshub.app/youtube/user/ім_я_користувача](https://rsshub.app/youtube/user/ім_я_користувача)\\n\\n3. Facebook, Instagram, TikTok та Hive\\nЦі платформи найжорсткіше блокують прямий доступ. Щоб читати блогерів безкоштовно:\\nRSSHub (Universal Parser): Головний порятунок для фронтендера. Він має готові маршрути для TikTok, Instagram та Facebook:\\n[https://rsshub.app/tiktok/user/@username](https://rsshub.app/tiktok/user/@username)\\n[https://rsshub.app/instagram/user/username](https://rsshub.app/instagram/user/username)\\nRSS.app / Feed43: Безкоштовні веб-сервіси, які парсять HTML-сторінку блогера й видають вам готовий RSS XML/JSON (на безкоштовних тарифах є ліміти на 3-5 джерел, але для декількох затишних блогерів цього вистачає).\\nPuppeteer / Cheerio (Власний micro-scraper): Якщо задеплоїти невеличку безкоштовну Node.js функцію на Vercel чи Render, вона може раз на день заходити на сторінку та зчитувати останні пости.","image":null},{"q":"🤖 ШІ-Допомога: покроковий посібник","a":"Крок 1. Відкрийте розділ «Допомога ШІ» у меню.\\nКрок 2. Оберіть провайдера ШІ:\\n  • Gemini (Google) — потрібен Gemini API Key з aistudio.google.com\\n  Крок 3. Вставте ваш API-ключ у відповідне поле. Ключ зберігається лише на вашому пристрої.\\nКрок 4. Оберіть обсяг відповіді: Менше / Нормально / Більше.\\nКрок 5. Оберіть стиль: Дружньо / Стандартно / Науково.\\nКрок 6. Напишіть запитання у текстовому полі. Натисніть Enter або кнопку ➤.\\nКрок 7 (Gemini). Можна прикріпити: фото, відео або аудіофайл — натисніть іконку 📎. Gemini проаналізує вміст.\\nКрок 8 (Gemini). Кнопка 📸 — робить скріншот поточної сторінки і відправляє Gemini: «Поясни що бачиш» або «Що можна покращити на цій сторінці?»\\nКрок 9. Натисніть на прикріплений файл щоб переглянути його на весь екран.\\nКрок 10. Кнопка 📋 на відповіді бота — копіює текст у буфер обміну.\\nКрок 11. 🎤 — голосовий ввід запитання (підтримує українську мову).\\nКрок 12. 🧹 — очищає всю історію чату.\\nПорада: Shift+Enter = новий рядок у запиті без відправлення.","image":null},{"q":"🤖 ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key». Чи зберігаються мої ключі на сервері? — Ні. Ключі зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо.\\n\\nПомилка 503 від Gemini — що робити? — Це тимчасове перевантаження серверів Google. Зачекайте 1-2 хвилини і натисніть «Спробувати ще раз».\\n\\nЧи може ШІ аналізувати сторінку сайту? — Так! Тільки для Gemini: натисніть 📸, а потім запитайте «Що ти бачиш?» або «Що можна покращити?».\\n\\nЧи підтримує ШІ аудіофайли? — Так, Gemini 2.5 Flash аналізує аудіо (mp3, wav, ogg та ін.).\\n\\nЯк скопіювати відповідь? — Натисніть кнопку 📋 у правому верхньому куті повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":null},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Відкрийте розділ «Карта» або «Клімат» у меню.\\nКрок 2. На карті відображаються кліматичні зони, температурні аномалії або погодні дані по регіонах.\\nКрок 3. Клікніть на будь-яку точку карти — з'явиться детальна інформація про клімат цього регіону.\\nКрок 4. Використовуйте жести масштабування (колесо миші або пальці на сенсорному екрані) для наближення/віддалення.\\nКрок 5. Перемикайте шари карти (якщо доступно) для перегляду різних кліматичних параметрів.","image":"texts"},{"q":"🗺 Карта клімату: часті питання","a":"Чому карта не завантажується? — Перевірте інтернет-з'єднання. Карта потребує стабільного підключення.\\n\\nЧи можна зберегти знімок карти? — Використовуйте скріншот браузера або функцію ШІ 📸.\\n\\nЩо означають кольори на карті? — Зазвичай: синій — холодно, жовтий — тепло, червоний — спека або аномалія. Конкретне пояснення — у легенді на карті.","image":"texts"},{"q":"🎨 Фан-арти: покроковий посібник","a":"Крок 1. Відкрийте розділ «Фан-арти».\\nКрок 2. Перегляньте галерею — зображення відображаються у сітці.\\nКрок 3. Клікніть на зображення, щоб відкрити його у повноекранному режимі.\\nКрок 4. У повноекранному режимі можна:\\n  • Завантажити зображення.\\n  • Поділитися (якщо функція доступна).\\nКрок 5. Усі фан-арти намальовані вручну автором сайту. Права на власні твори залишаються за вами — деталі в Угоді користувача.","image":"two"},{"q":"🎨 Фан-арти: часті питання","a":"Чи можна завантажити фан-арт? — Так. Натисніть іконку завантаження в повноекранному режимі.\\n\\nЧи можна надіслати свій малюнок? — Напишіть на theturkeystudio@gmail.com. Можливо, вашу роботу додадуть до галереї!\\n\\nЩирість важливіша за досконалість.\\n\\nЧи можна використати фан-арти комерційно? — Тільки у роздрукованому вигляді з підписом автора. Докладніше — в Угоді користувача, пункт 3.2.","image":"two"},{"q":"🎬 Декоратор: покроковий посібник","a":"Крок 1. Відкрийте розділ «Декоратор».\\nКрок 2. Оберіть базовий шаблон або зображення.\\nКрок 3. Додавайте декоративні елементи: рамки, стікери, ефекти.\\nКрок 4. Налаштуйте положення, розмір та прозорість кожного елемента.\\nКрок 5. Завантажте готовий результат кнопкою «💾 Зберегти».","image":null},{"q":"🖥 Загальне: навігація та меню","a":"Меню ☰ (гамбургер) — відкриває бокову панель з усіма розділами сайту.\\nКожна кнопка у меню має підказку — наведіть курсор для опису функції.\\nЛого Стихії — три кнопки:\\n  • Зліва — завантажити поточний вигляд.\\n  • Вгорі — друкувати.\\n  • Справа — повноекранний режим.\\nТемна/Світла тема — перемикач у шапці (Header).\\nАдаптивність: сайт повністю адаптований для мобільних пристроїв.","image":"logofix"},{"q":"🖥 Загальне: часті питання","a":"Що таке Стихія? — Це веб-платформа «погода + музика + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити.\\n\\nЧи є мобільний додаток? — Поки що ні. Але сайт оптимізований для мобільних браузерів.\\n\\nЯк зв'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧи є підписка? — Так, деякі функції можуть бути доступні за підпискою. Ціни можуть змінюватись з попередженням за 3 тижні.\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам.","image":"one"},{"q":"За що відповідає меню?","a":"Перестановнку секцій, зміну темної теми окремо кожної секції, відображення(так ви можете вимкнути її якщо вона непотрібна) Доступ після реєстрації. Та багато чого ще...","image":"logofix"},{"q":"Навіщо реєстрація?","a":"Це необхідно для збереження карток погоди, міток на карті та впевненості, що контент використовується за призначенням.","image":"one"},{"q":"Плани і тематика","a":"Сайту з багатьма відсилками ще ніколи не було. Працюю над поліпшенням теперішнього, та додаванхням відсилок і я відкритий до ваших ідей! The strangest site of all.","image":"two"}]`),v0="/assets/logo-CeE8IWwr.webp",k0="/assets/prewiew-CkyBq-Ws.webp",S0="/assets/what-Dh9YNb09.webp",ii="/assets/myone-Dyn4Do12.webp",j0="/assets/mytwo-DY56vL7p.webp",C0="/assets/soon-Cz5fTUD_.webp",T0="/assets/mythree-BY2evDkD.webp",gl=Ki({Tooltip:()=>oa,default:()=>bl}),A0=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,I0=Fe`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,D0=Fe`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,ml=Fe`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,M0=Fe`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,hl=Vt`
  opacity: 0;
  transform-origin: left center;
  animation: ${M0} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:t})=>Vt`
    animation-delay: ${.1+(t||0)*.05}s;
  `}
`,R0=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  transition:
    opacity 0.4s ease,
    pointer-events 0.4s ease;
  opacity: ${t=>t.$isClosing?0:1};
  pointer-events: ${t=>t.$isClosing?"none":"auto"};
  backdrop-filter: blur(5px);
`,z0=i.div`
  background: ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  padding: 5px;
  border-radius: 10px;
  max-width: 1200px;
  width: 95%;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${t=>t.$isClosing?D0:I0} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,L0=i.div`
  background:  ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,E0=i.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`,F0=i.div`
  display: flex;
  justify-content: center;
`,si=i.button`
  background: ${({$active:t,$isDarkMode:n})=>t?"#8a2be2":n?"#0c0c0cbf":"#fdff98"};

  color: ${({$active:t,$isDarkMode:n})=>t?"#ffffff":"#020202"};

  border: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({$active:t,$isDarkMode:n})=>t?"#7b22cc":n?"#1a1a1ce6":"#fbff02"};
  }
`,xl=i.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border: none;
  padding-left: 5px;
  padding-bottom: 5px;
  font-weight: 700;
  padding-right: 9px;
  background: ${t=>t.$isDarkMode?"#27b5b0b1":"#6f6e22c6"};
  color: ${t=>t.$isDarkMode?"#000000b1":"#ffffff"};
  height: 36px;
  font-size: 14px;
  cursor: pointer;
`,P0=i(xl)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${ml} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,$0=i.div`
  margin-top: 3px;
`,N0=i.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${hl}
`,O0=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${({$rating:t,$isDarkMode:n})=>t===1?"#8a2be2":n?"#ffffff":"#111111"};
  opacity: ${t=>t.$rating===-1?.4:1};
  transition: all 0.3s ease;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${({$rating:t,$isDarkMode:n})=>t===-1?n?"#555555":"#cccccc":"#8a2be2"};
    margin-right: 12px;
    display: inline-block;
  }
`,V0=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`,B0=i.div`
  flex: 1;
`,li=i.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 1px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 22px;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.2);
  }
`,_0=i.div`
  display: flex;
  align-items: center;
  gap: 7px;
`,H0=i.span`
  font-size: 12px;
  transition: transform 0.3s ease;
  transform: ${t=>t.$isOpen?"rotate(180deg)":"rotate(90deg)"};
`,U0=i.div`
  max-height: ${t=>t.$isOpen?"6000px":"0"};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: ${t=>t.$isOpen?"5px":"0"};
  font-size: 14px;
  line-height: 1.6;
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"#ffffff":"#060606"};
  opacity: ${t=>t.$isOpen?"1":"0"};
  white-space: pre-line;
`,di=i.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${t=>t.$isHovered||t.$isPinned?"800px":"10px"};
  opacity: ${t=>t.$isHovered||t.$isPinned?1:.4};

  &:hover {
    transform: scale(1.01);
  }
`,K0=i.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${ml} 0.3s ease-out forwards;
`,ci=i.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`,vr=i.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  opacity: ${t=>t.$isHovered||t.$isPinned?1:0};
  pointer-events: ${t=>t.$isHovered||t.$isPinned?"auto":"none"};
`,jn=i.button`
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  &:hover {
    background: #a25be2;
  }
`,q0=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,W0=i.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,G0=i.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,J0=i.button`
  padding: 3px;
  color: white;
  border: none;
  background: rgb(11, 113, 138);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
  transition: transform 0.2s;
  ${hl}
`,ui=i.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid rgb(50, 215, 0);
  border-bottom-left-radius: 25px;
  background: rgba(2, 2, 2, 0.9);
  color: #fffefe;
  font-size: 13px;
  outline: none;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #f9f9f9;
  }
`,Y0=i.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 450px;
  overflow-y: auto;
  padding: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 4px;
  }
`,pi=i.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;
  max-width: 85%;
  position: relative;
  ${t=>t.$isUser?Vt`
          background: #8a2be2;
          color: white;
          align-self: flex-end;
        `:Vt`
          background: white;
          color: #333;
          align-self: flex-start;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        `}
`,Z0=i.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  cursor: pointer;
  margin-top: 4px;
  text-decoration: underline;
`,X0=i.div`
  display: flex;
`,Q0=i.button`
  background: #6d1a1a;
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  color: white;
    border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34px;
  border-bottom-right-radius: 25px;
  align-items: center;
  justify-content: center;
`,ef=i.button`
  background: rgb(134, 60, 60);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34.5px;
  cursor: pointer;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`,oa=({content:t,children:n,placement:r="bottom",isDarkMode:u=!0})=>{const[l,d]=(0,a.useState)(!1),b=(0,a.useRef)(null),{refs:p,floatingStyles:x,context:f}=ya({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:da,middleware:[wa(8),la(),va({padding:5}),fa({element:b})]}),{isMounted:g,styles:F}=ga(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),C=pa(f,{move:!1}),L=ua(f),P=ma(f),D=ha(f,{role:"tooltip"}),{getReferenceProps:v,getFloatingProps:y}=xa([C,L,P,D]);if(!t)return n;const I=u?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...v(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(ca,{children:(0,e.jsxs)(A0,{ref:p.setFloating,$isDarkMode:u,style:{...x,...F},...y(),children:[t,(0,e.jsx)(ba,{ref:b,context:f,fill:I,stroke:"#00acb9",strokeWidth:1})]})})]})},bl=({onClose:t,isOpen:n,initialFaqQuestion:r,isDarkMode:u})=>{const[l,d]=(0,a.useState)(!1),b=ar(T=>T.calendar?.customDays||[]),[p,x]=(0,a.useState)([]),[f,g]=(0,a.useState)({}),[F,C]=(0,a.useState)(""),[L,P]=(0,a.useState)("faq"),D=1,v=-1;(0,a.useEffect)(()=>{(async()=>{try{const $=await c.default.getItem("training_actions_pinned");$!==null&&ge($)}catch($){console.error("Error loading pinned state:",$)}})()},[]);const[y,I]=(0,a.useState)([]),[w,E]=(0,a.useState)(!1),[O,_]=(0,a.useState)(""),Y=(0,a.useRef)(null),te=(0,a.useRef)(null);(0,a.useEffect)(()=>{(async()=>{const $=await c.default.getItem("gemini_api_key"),X=await c.default.getItem("user_help_session");$&&_($),I(X||[{text:"Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",isBot:!0}])})()},[]),(0,a.useEffect)(()=>{te.current&&(te.current.scrollTop=te.current.scrollHeight)},[y,w]);const de=async T=>{await c.default.setItem("user_help_session",T.slice(-15))},[ae,B]=(0,a.useState)(null),[Z,ge]=(0,a.useState)(!1),[Ie,he]=(0,a.useState)(null),Ue=()=>{Y.current&&Y.current.abort(),E(!1)},De=async()=>{window.confirm("Очистити історію чату з асистентом?")&&(I([{text:"Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",isBot:!0}]),await c.default.removeItem("user_help_session"))},Ze=async T=>{T.stopPropagation();const $=!Z;ge($),await c.default.setItem("training_actions_pinned",$)},me=(0,a.useCallback)(()=>{if(Ie){he(null);return}he(null),d(!0),setTimeout(()=>{d(!1),t()},400)},[t,Ie]),$e=T=>{const $=document.createElement("a");$.href=T,$.download=`stykhiya_image_${Date.now()}.png`,document.body.appendChild($),$.click(),document.body.removeChild($)},Ce=T=>{const $=window.open("","_blank");$.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${T}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`),$.document.close()};(0,a.useEffect)(()=>{const T=$=>{$.key==="Escape"&&me()};if(n||l)return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[n,l,me]);const dt=(T,$)=>{const X=(f[T]||0)===$?0:$;g({...f,[T]:X})},rt=T=>{x($=>$.includes(T)?$.filter(X=>X!==T):[...$,T])},ct=a.useMemo(()=>{const T=new Date().toISOString().split("T")[0];return b.filter($=>$.date<T).sort(($,X)=>X.date.localeCompare($.date)).slice(0,5)},[b]),Pe=a.useMemo(()=>{const T={hills:Gr,texts:Yi,logofix:v0,preview:k0,info:S0,one:ii,two:j0,soon:C0,might:ii,three:T0},$=w0.map(X=>({...X,image:X.image?T[X.image]??null:null}));if(ct.length>0){const X=ct.map(ie=>`• ${ie.date}: ${ie.reason}`).join(`
`);$.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:

${X}`,image:null})}return $},[ct]);if((0,a.useEffect)(()=>{if(!n){x([]);return}const T=[];if(r){const X=Pe.findIndex(ie=>ie.q===r);X>=0&&(T.push(X),P("faq"))}const $=Pe.findIndex(X=>X.q==="Останнє оновлення");$>=0&&!T.includes($)&&(T.push($),P("faq")),x(T)},[Pe,r,n]),!n&&!l)return null;const Ke=async()=>{if(!F.trim()||w)return;if(!O){alert("Будь ласка, встановіть API-ключ Gemini у налаштуваннях ШІ для використання цієї функції.");return}const T=F;C("");const $=[...y,{text:T,isBot:!1}];I($),E(!0);try{const X=new Wr(O).getGenerativeModel({model:"gemini-2.5-flash"}),ie=Pe.map(be=>`Q: ${be.q} A: ${be.a}`).join(`
`),pe=tr.map(be=>{const At=be.duration?`${Math.floor(be.duration/60)}:${(be.duration%60).toString().padStart(2,"0")}`:"невідомо",qe=be.lyrics&&Array.isArray(be.lyrics)?be.lyrics.map(Xe=>`${Xe.time}s:${Xe.text}`).join("|").substring(0,100):"no",mt=be.filters&&Array.isArray(be.filters)?be.filters.map(Xe=>`${Xe.start}-${Xe.end}s:${Xe.type}`).join("|"):"no";let vt=`Song: ${be.author}, Category: ${be.category}, Duration: ${At}, Lyrics: ${qe}..., Filters: ${mt}, Info: ${be.text}`;if(be.schedule){const Xe=be.schedule.map(It=>`S${It.season}E${It.ep}: ${It.title} (${It.date})`).join("; ");vt+=`. Schedule: ${Xe}`}return vt}).join(`
`),Te=`Ти асистент проекту "Стихія". Тобі доступні дві бази даних:
      1. База FAQ: містить правила сайту та інструкції щодо розділу Погода. 
      2. База пісень: містить повний список треків (${tr.length} шт), авторів, тексти пісень.

      ІНСТРУКЦІЯ:
      - Якщо запит стосується температури, вітру, УФ-індексу або роботи розділу погоди — шукай у базі FAQ.
      - Якщо запит стосується конкретної пісні, її тривалості, тексту — шукай у Базі пісень.
      - Відповідай коротко, професійно та виключно українською мовою.

      КОНТЕКСТ FAQ: ${ie.substring(0,2e3)}
      КОНТЕКСТ ПІСЕНЬ: ${pe.substring(0,15e3)}

      ЗАПИТ КОРИСТУВАЧА: ${T}`,_e=(await(await X.generateContent(Te)).response).text(),Be=[...$,{text:_e,isBot:!0}];I(Be),await de(Be)}catch(X){if(X.name!=="AbortError"){const ie=[...$,{text:"Помилка зв'язку з інтелектом. Перевірте ключ.",isBot:!0}];I(ie)}}finally{E(!1)}},ot=T=>{C(y[T].text)},wt=T=>{const $=/(https?:\/\/[^\s]+)/g;return T.split($).map((X,ie)=>X.match($)?(0,e.jsx)("a",{href:X,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:X},ie):X)},gt=T=>T.content&&Array.isArray(T.content)&&T.content.length>0?T.content.map(($,X)=>{if($.type==="image"){const ie=$.src||$.image,pe=$.alt||T.q||"FAQ image";return(0,e.jsxs)("div",{style:{position:"relative",marginBottom:"10px"},children:[(0,e.jsx)(di,{src:ie,alt:pe,$isHovered:ae===ie,$isPinned:Z,onClick:()=>he(ie),onMouseEnter:()=>B(ie),onMouseLeave:()=>B(null)}),(0,e.jsxs)(vr,{$isHovered:ae===ie,$isPinned:Z,onMouseEnter:()=>B(ie),onMouseLeave:()=>B(null),children:[(0,e.jsx)(jn,{onClick:Ze,children:Z?"Відкріпити зображення":"Закріпити зображення"}),(0,e.jsx)(jn,{onClick:Te=>{Te.stopPropagation(),$e(ie)},children:"Скачати"}),(0,e.jsx)(jn,{onClick:Te=>{Te.stopPropagation(),Ce(ie)},children:"Друкувати"})]})]},`image-${X}`)}if($.type==="text"){const ie=$.value||$.text||"";return(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:String(ie).replace(/\n/g,"<br/>")}},`text-${X}`)}return null}):(0,e.jsxs)(e.Fragment,{children:[T.image&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(vr,{$isHovered:ae===T.image,$isPinned:Z,onMouseEnter:()=>B(T.image),onMouseLeave:()=>B(null),children:[(0,e.jsx)(jn,{onClick:Ze,children:Z?"Відкріпити зображення":"Прикріпити зображення"}),(0,e.jsx)(jn,{onClick:$=>{$.stopPropagation(),$e(T.image)},children:"Скачати"}),(0,e.jsx)(jn,{onClick:$=>{$.stopPropagation(),Ce(T.image)},children:"Друкувати"})]})}),(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:(T.a||"").replace(/\n/g,"<br/>")}})]}),Le=[...Pe].map((T,$)=>({...T,originalIndex:$,rating:f[$]||0})).filter(T=>{if(!F)return!0;const $=F.toLowerCase();return T.q?.toLowerCase().includes($)||T.a?.toLowerCase().includes($)}).sort((T,$)=>$.rating-T.rating);return(0,e.jsxs)(R0,{$isClosing:l,onClick:me,children:[(0,e.jsxs)(z0,{$isDarkMode:u,$isClosing:l,onClick:T=>T.stopPropagation(),children:[(0,e.jsxs)(L0,{$isDarkMode:u,children:[(0,e.jsx)(xl,{onClick:me,children:"Зрозуміло!"}),(0,e.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:u?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,e.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:u?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"}),(0,e.jsxs)(F0,{children:[(0,e.jsx)(si,{$active:L==="faq",onClick:()=>P("faq"),style:{borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px",borderRight:"1px solid rgba(0, 0, 0, 0.1)"},children:"Питання (FAQ)"}),(0,e.jsx)(si,{$active:L==="ai",onClick:()=>P("ai"),style:{borderBottomRightRadius:"20px",borderTopRightRadius:"20px"},children:"ШІ Асистент"})]})]}),(0,e.jsxs)(E0,{children:[L==="ai"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(Y0,{ref:te,children:[y.map((T,$)=>(0,e.jsxs)(pi,{$isUser:!T.isBot,children:[wt(T.text),!T.isBot&&$===y.length-1&&!w&&(0,e.jsx)(Z0,{onClick:()=>ot($),children:"редагувати"})]},$)),w&&(0,e.jsx)(pi,{$isUser:!1,children:"Думаю..."})]}),(0,e.jsxs)(X0,{children:[(0,e.jsx)(ui,{type:"text",placeholder:"Запитай ШІ або шукай у FAQ...",value:F,onChange:T=>C(T.target.value),onKeyDown:T=>T.key==="Enter"&&Ke()}),(0,e.jsx)(oa,{content:"Очистити чат",isDarkMode:u,children:(0,e.jsx)(ef,{onClick:De,"aria-label":"Очистити чат",children:(0,e.jsx)(Pl,{})})}),w?(0,e.jsx)(oa,{content:"Зупинити запит",isDarkMode:u,children:(0,e.jsx)(Q0,{onClick:Ue,"aria-label":"Зупинити запит",children:"◼"})}):(0,e.jsx)(oa,{content:"Відправити",isDarkMode:u,children:(0,e.jsx)(J0,{"aria-label":"Відправити",onClick:Ke,children:"➤"})})]})]}),L==="faq"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ui,{type:"search",placeholder:"Пошук питань...","aria-label":"Пошук питань",value:F,onChange:T=>C(T.target.value)}),(0,e.jsxs)($0,{style:{marginTop:0},children:[Le.length===0&&(0,e.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),Le.map((T,$)=>{const X=T.originalIndex,ie=f[X]||0;return(0,e.jsxs)(N0,{$index:$+1,children:[(0,e.jsx)(O0,{$isDarkMode:u,$rating:ie,onClick:()=>rt(X),children:(0,e.jsxs)(V0,{children:[(0,e.jsx)(B0,{children:T.q}),(0,e.jsxs)(_0,{children:[(0,e.jsx)(oa,{content:"Корисно",isDarkMode:u,children:(0,e.jsx)(li,{onClick:pe=>{pe.stopPropagation(),dt(X,D)},"aria-label":"Корисно",children:ie===D?(0,e.jsx)(Io,{style:{color:"blue"}}):(0,e.jsx)(Io,{})})}),(0,e.jsx)(oa,{content:"Не корисно",isDarkMode:u,children:(0,e.jsx)(li,{onClick:pe=>{pe.stopPropagation(),dt(X,v)},"aria-label":"Не корисно",children:ie===v?(0,e.jsx)(Fo,{}):(0,e.jsx)(Fo,{})})}),(0,e.jsx)(H0,{$isOpen:p.includes(X),children:"▼"})]})]})}),(0,e.jsx)(U0,{$isDarkMode:u,$isOpen:p.includes(X),children:(0,e.jsxs)(G0,{children:[T.image&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(di,{src:T.image,alt:T.q,$isHovered:ae===T.image,$isPinned:Z,onClick:()=>he(T.image),onMouseEnter:()=>B(T.image),onMouseLeave:()=>B(null)}),(0,e.jsxs)(vr,{$isHovered:ae===T.image,$isPinned:Z,onMouseEnter:()=>B(T.image),onMouseLeave:()=>B(null),children:[(0,e.jsx)(jn,{onClick:Ze,children:Z?"Відкрипити зображення":"Закріпити зображення"}),(0,e.jsx)(jn,{onClick:pe=>{pe.stopPropagation(),$e(T.image)},children:"Скачати"}),(0,e.jsx)(jn,{onClick:pe=>{pe.stopPropagation(),Ce(T.image)},children:"Друкувати"})]})]}),gt(T)]})})]},X)})]})]})]})]}),Ie&&(0,e.jsxs)(q0,{onClick:()=>he(null),children:[(0,e.jsx)(P0,{onClick:()=>he(null),children:"×"}),(0,e.jsxs)(K0,{children:[(0,e.jsx)(ci,{onClick:T=>{T.stopPropagation(),$e(Ie)},children:"Скачати"}),(0,e.jsx)(ci,{onClick:T=>{T.stopPropagation(),Ce(Ie)},children:"Друкувати"})]}),(0,e.jsx)(W0,{src:Ie,alt:"Прев'ю зображення",onClick:T=>T.stopPropagation()})]})]})},tf=[/війн(?:а|и|ою|і|нах)/iu,/бойов(?:і|их|им|ий|а|ої)/iu,/конфлікт(?:у|и|ів|ом)?/iu,new RegExp("(?<!\\p{L})фронт(?:у|і|ом)?(?!\\p{L})","iu"),/атак(?:а|и|у|ою|ам|ах|увал.*)/iu,/обстріл(?:у|и|ів|ом|ами)?/iu,new RegExp("безпілотник(?:и|ів|ами|ом)?|дрон(?:и|ів|ами)?|(?<!\\p{L})бпла(?!\\p{L})","iu"),/загибл(?:ий|их|і|им|ними)/iu,/поранен(?:ий|их|і|им|ними)/iu,/руйнуванн(?:я|ь|ям)/iu,/військов(?:ий|і|их|им|ними|е|а|ого)/iu,/армі(?:я|ї|ю|єю)/iu,/окупант(?:и|ів|ами)?|агресор(?:и|ів)?/iu,/ракет(?:а|и|ний|них|ами)/iu,/збройн(?:і|их)\s+сил(?:и|)/iu,new RegExp("(?<!\\p{L})(?:тцк|зсу|сбу|дбр|єрдр)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})рф(?!\\p{L})|росі(?:я|ї|єю|йськ.*)|(?<!\\p{L})сша(?!\\p{L})|україн(?:а|и|і|ою)","iu"),/політик(?:а|и|ою|і|ів)/iu,/корупці(?:я|ї|ю|єю)/iu,/депутат(?:и|ів|ом|а)?|президент(?:и|ів|а)?/iu,new RegExp("(?<!\\p{L})(?:трамп(?:а|у)?|путін(?:а|у)?|байден(?:а|у)?|зеленськ(?:ий|ого|ому|им))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})мит(?:о|а|ам|ами|ах)(?!\\p{L})","iu"),new RegExp("уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\\p{L})влад(?:а|и|ою)(?!\\p{L})","iu"),/санкці(?:ї|й|ям|ями)/iu,/домовленість|переговор(?:и|ів|ами)/iu,/кримінал(?:у|ом)?/iu,/поліці(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})суд(?:у|ом|ів)?(?!\\p{L})","iu"),/затриман(?:о|ий|і|а)/iu,/вбивств(?:о|а|ом|ах)/iu,/крадіжк(?:а|и|ою|ах)/iu,/вирок(?:у|и|ів|ами|ах)?/iu,/в'?язниц(?:я|і|ю|ею|ях)/iu,/арешт(?:у|и|ів|ами|ах)?/iu,/теракт(?:и|ів|ами|ах|у)?/iu,/вибух(?:и|ів|ами|ах|у)?/iu,/злочин(?:у|и|ів|ом)?/iu,/напад(?:у|і|ом)?|нападник(?:а|и|ів)?/iu,/побої|мордуванн(?:я|ь|ям)/iu,/душивши?|заламав/iu,/порно(?:графі|г| розроб| фільм.*)?/iu,/porno|pornography|\bporn\b|hentai|хентай|nsfw/iu,/еротик(?:а|и|ою|і|чн.*)?|erotic|erotica/iu,new RegExp("секс(?:у|ом|уальн.*)?(?!\\p{L})","iu"),/\bsex(?:y|ual)?\b/iu,/onlyfans|онліфанс|онлифанс|only-?fans/iu,/webcam|вебкамер.*|вебка/iu,/(?<!\d)18\+(?!\d)|18plus|adult\s+content/iu,/оголен(?:а|і|ий|о|их|ення)|роздягнен(?:а|і|ий|о)/iu,/без\s+одягу|нагот(?:а|і)|нюдс|nudes?|\bnaked\b/iu,/інтим(?:ний|ні|них|ного|у|ом)?|intimat(?:e|y)/iu,/стриптиз|топлес|topless/iu,/оргі(?:я|ї|ю|ями|й)|оргазм(?:и|ів)?/iu,/пікантн(?:і|ий|ого|е)\s+(?:фото|відео|кадри|знімки|подробиці)/iu,/гаряч(?:і|е)\s+(?:фото|відео|кадри|бікіні)/iu,/без\s+білизни|прозорому\s+вбранні|у\s+бікіні|у\s+купальнику/iu,/(?:онлайн\s*)?казино|casino/iu,/рулетк(?:а|и|у|ою|ці|ок)/iu,/слот(?:и|ів|ами|ах|ам)?|slots?/iu,/покер(?:у|ом|ний|ного)?|poker/iu,/азарт(?:у|ний|ні|них|ою|ість)?/iu,/гральн(?:ий|ого|і|их|им|ними)\s+(?:бізнес|автомат|заклад|сектор)/iu,/ігров(?:і|их|им|ними)\s+автомат/iu,/однорук(?:ий|і)\s+бандит/iu,new RegExp("(?<!\\p{L})(?:краіл|кріаіл)(?!\\p{L})","iu"),/лотере(?:я|ї|ю|єю|йний|йного|йних)/iu,/джекпот(?:и|ів|ом)?|jackpot/iu,/виграш(?:і|ів|ам)?\s+(?:в|у)\s+(?:казино|слотах|лотерею)/iu,/букмекер(?:и|ів|ського|ських|ська|ський)?/iu,/спортбетт?інг|sports?\s*betting|betting/iu,/gambl(?:e|ing|er)?/iu,/prediction\s+markets?/iu,/ставк(?:а|и|у|ами|ах)\s+(?:онлайн|на|в|у|через)/iu,/зроби(?:ти|в|ла)\s+ставку/iu,new RegExp("(?<!\\p{L})бк\\s+(?:букмекер|ставок|казино)(?!\\p{L})","iu"),/фріспін(?:и|ів)?|freespins?|бездеп(?:озит.*)?/iu,/бонус\s+за\s+реєстрацію|промокод\s+(?:казино|ставок)/iu,/халяв(?:а|и|у|ою)/iu,/favbet|фавбет|favorit|фаворит/iu,/vbet|вбет/iu,/cosmolot|космолот/iu,/slots\s*city|слотс\s*сіт(?:і|и)/iu,/supergra|супер\s*гра|супергра/iu,/first\s*casino|ферст|фірст/iu,/casino\s*ua|казино\s*юа/iu,/champion\s*(?:casino)?|чемпіон\s*(?:казино)?/iu,/ggbet|ггбет/iu,/slotoking|слотокінг|слотокинг/iu,/pin-?up|пінап|пін\s*ап/iu,/slotor|слотор/iu,/777\s*casino|казино\s*777/iu,/parimatch|париматч|паріматч/iu,/1xbet|1хбэт|1хбет|1xslots/iu,/mostbet|мостбет/iu,/vulkan|vulcan|вулкан/iu,/joycasino|джойказино/iu,/casino-x|казино\s*ікс|казино\s*икс/iu,/vavada|вавада/iu,/melbet|мелбет/iu,/betwinner|бетвіннер|бетвиннер/iu,/megapari|мегапарі|мегапари/iu,/catcasino|catbet|кетказино|кетбет/iu,/john\s*bet|джон\s*біт/iu,/ice\s*casino|verde\s*casino|hitnspin/iu,/fonbet|фонбет|marathonbet|марафонбет/iu,/bet365|бет365/iu,/unibet|унібет|унибет/iu,/william\s*hill|вільям\s*хілл/iu,/888\s*(?:casino|poker)?/iu,/pokerstars|покерстарс/iu,/betfair|бетфеір|бетфеар/iu,/bwin|бвін/iu,/stake\s*(?:casino)?|bc\.game|roobet|rollbit/iu,/крипто(?:валюта|валют|гроші|валютні)?|крипт(?:а|і)/iu,/crypto(?:currency)?|bitcoin|\bbtc\b|ethereum|\beth\b|\busdt\b|binance/iu,/аірдроп|airdrop|тапалк(?:а|и)|hamster\s*kombat|хом['’`ʼ]?як/iu,/gallup/iu,/релігі(?:я|ї|ю|єю|йн.*)/iu,new RegExp("(?<!\\p{L})(?:пцу|упц|умп)(?!\\p{L})","iu"),/церкв(?:а|и|і|ою|ами|ах)|храм(?:и|ів|ом|ах)?|собор(?:и|ів)?/iu,/патріарх|митрополит|священник|папа\s+римськ.*|ватикан/iu,/парафія|єпархія|лавра/iu,new RegExp("(?<!\\p{L})сект(?:а|и|ою|ам|ами|ах)(?!\\p{L})|саєнтолог.*|свідки\\s+єгови","iu"),new RegExp("(?<!\\p{L})культ(?:и|ів|у|ом)?(?!\\p{L})","iu"),/масон(?:и|ів|ами|ах)?/iu,/жертвопринес.*|жертвопринош.*/iu,/гороскоп(?:и|ів)?|астролог(?:ічна|ічний|ія|и)?/iu,/мольфар(?:и|ів|ами)?|екстрасенс(?:и|ів)?|ворожк(?:а|и|ам)/iu,new RegExp("карт(?:и|ах)\\s+таро|(?<!\\p{L})гаданн(?:я|ь)(?!\\p{L})|нумеролог","iu"),/пророцтв(?:о|а|ення)|передбаченн(?:я|ь)\s+(?:мольфара|астролога|ванг)/iu,/порч(?:а|і)|сглаз|приворо/iu,new RegExp("(?<!\\p{L})(?:набу|сап|бэб)(?!\\p{L})","iu"),/обшук(?:и|ів|ами|ах)?/iu,/детектив(?:и|ів|ам|ами)?/iu,/слідч(?:і|их|им|ий)\s+дії/iu,/слуг(?:а|и)\s+народу/iu,/фракці(?:я|ї|ю|єю)/iu,/міністр(?:и|ів|ам|ами|а)?/iu,/голосувати|голосуванн(?:я|ь)/iu,/підпал(?:и|ів|ам|ами)?/iu,/вербувати|завербува.*/iu,/аварі(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})(?:дзп|дтп)(?!\\p{L})","iu"),/врізавс(?:я|ь)|зіткненн(?:я|ь)/iu,/травмован(?:і|их|ий|о)/iu,/постраждал(?:і|их|и)/iu,/вибор(?:и|ів|ам|ах|чий|чої)/iu,/опозиці(?:я|ї|ю|єю)/iu,/кампані(?:я|ї|ю)/iu,/партій(?:ний|них|ні|я|ї)/iu,/незаконн(?:ий|ого|е)\s+переправленн(?:я|ь)/iu,/схем(?:а|и|ам|ами)\s+(?:виїзду|втечі|переправлення)/iu,/хабар(?:і|ів|ник.*)|хабарництво/iu,/шахрайств(?:о|а|і)|шахраї/iu,/зґвалтува.*|ґвалтівник(?:а|и)?|педофіл/iu,/скандал(?:и|ів)?|розслідуванн(?:я|ь)/iu,new RegExp("(?<!\\p{L})(?:ніцой|ларис(?:а|и|і|у)?\\s+ніцой)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:євген(?:а|у)?\\s+хмар(?:а|и|і|ою)?|хмар(?:а|и)?\\s+євген(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:гордон(?:а|у|ом)?|дмитро\\s+гордон)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})спартак(?:\\s+суббот?а|\\s+суббот?и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алх[іi]м(?:а|у)?|анн(?:а|и)\\s+алх[іi]м)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:дурнєв(?:а|у)?|кондратюк(?:а|у)?|волошин(?:а|у)?|пренткович)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:янін(?:а|и)\\s+соколов(?:а|и)|сергі(?:й|я)\\s+притул(?:а|и)|олег\\s+скрипк(?:а|и))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:єрмак(?:а|у)?|татаров(?:а|у)?|залужн(?:ий|ого|ому)|сирськ(?:ий|ого|ому)|буданов(?:а|у)?|резніков(?:а|у)?|безугл(?:а|у|ої)|арахамі(?:я|ї)|гетьманцев(?:а|у)?)(?!\\p{L})","iu"),/василь\s+малюк/iu,new RegExp("(?<!\\p{L})(?:кадиров(?:а|у)?|пригожин(?:а|у)?|герасимов(?:а|у)?|мішустін(?:а|у)?|соловйов(?:а|у)?|скабєєв(?:а|і|у)|сімоньян|дугін(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:ппо|гур|ова|кмва)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:каб(?:и|ів|ами)?|фаб(?:и|ів)?)(?!\\p{L})|шахед(?:и|ів|ами)?|геран(?:ь|і)","iu"),/повітрян(?:а|і)\s+тривог(?:а|и)|укритт(?:я|ях)|бомбосховищ(?:е|ах)|приліт(?:и|ів)?|контрнаступ/iu,/блек\s*аут|відключенн(?:я|ь)\s+(?:світла|електроенергії)|графік(?:и|ів)\s+відключень/iu,/інфляці(?:я|ї)|дефолт|подорожчанн(?:я|ь)|податк(?:и|ів)|борг(?:и|ів)|дефіцит\s+бюджету/iu,/банкрутств(?:о|а)/iu,new RegExp("(?<!\\p{L})(?:шольц(?:а|у)?|пісторіус(?:а|у)?|фіцо|мелоні|блінкен(?:а|у)?|столтенберг(?:а|у)?|рютте|гросс(?:і|і))(?!\\p{L})","iu"),/фаріон/iu,new RegExp("(?<!\\p{L})(?:порошенк|ющенк|кучм|кравчук|янукович|шмигал|гройсман|яценюк|тимошенк|кличк|садов|труханов)(?:о|а|у|ом|ові|ий|ого)?(?!\\p{L})","iu"),new RegExp("ліндсі\\s+ґ?рем|(?<!\\p{L})ґ?рем(?!\\p{L})","iu"),new RegExp("джей\\s*ді\\s*венс|(?<!\\p{L})венс(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:байден|обам|буш|стармер|сунак|джонсон|макрон)(?:а|у|ом|и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})каллас(?!\\p{L})","iu"),/урсул(?:а|и|у)|фон\s+дер\s+ляєн/iu,/лукашенк(?:о|а|у|ом)/iu,new RegExp("(?<!\\p{L})дуд(?:а|и|і|ою)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:туск|коморовськ|качинськ)(?:а|у|ом|ий|ого|им)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})санд(?:у|и|а)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:орбан|федоров|лавров|захаров|шойгу|медведєв|пєсков)(?:а|у|ом|и)?(?!\\p{L})","iu"),/хаменеї|пезешкіан|раїсі/iu,/сі\s*цзіньпін/iu,/кім\s*чен\s*ин/iu,/свастик(?:а|и|у|ою)/iu,/нацизмін?|нацист(?:и|ів|ський|ська)?/iu,/фашизмін?|фашист(?:и|ів|ський|ська)?/iu,/рашизмін?|рашист(?:и|ів|ський|ська)?/iu,/комунізмін?|комуніст(?:и|ів|ський|ська)?/iu,/ґ?геббельс(?:а|у|ом)?/iu,/ґ?гіммлер(?:а|у|ом)?/iu,/ґ?герінг(?:а|у|ом)?/iu,/ґ?гесс(?:а|у|ом)?/iu,/борман(?:а|у|ом)?/iu,/ейхман(?:а|у|ом)?|айхман(?:а|у|ом)?/iu,/ріббентроп(?:а|у|ом)?/iu,/менгеле/iu,/розенберг(?:а|у|ом)?/iu,/кальтенбруннер(?:а|у|ом)?/iu,/коновалець|коновальц(?:я|ю|ем)/iu,/бандер(?:а|и|і|у|ою|івськ.*)/iu,/шухевич(?:а|у|ем)?/iu,/андрі(?:й|я)\s+мельник/iu,/сталін(?:а|у|ом)?/iu,/ленін(?:а|у|ом)?/iu,/берій?(?:я|ї|ю|єю)/iu,/молотов(?:а|у|ом)?/iu,/гітлер(?:а|у|ом)?/iu,new RegExp("(?<!\\p{L})хер(?:а|у|ом|и)?(?!\\p{L})","iu"),/хуй|хюй|х\*+|залуп(?:а|и|у|ою)|мудак(?:и|а|ів)?/iu,/пизд|пізд|піпєц|пипец/iu,/(?:ви|за|на|під|по|пере|з)?єб(?:ати|ать|ало|аний|ані|уть|учий|ут|анутий)/iu,/(?:ви|за|на|під|по|пере|з)?еб(?:ать|ало|анный|анные|учий|учи)|йоб(?:аний|ані|ний|них)/iu,new RegExp("бляд(?:ь|і|я|ям|ство)|блять|(?<!\\p{L})бля(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})сук(?:а|и|ою|ам|ами)(?!\\p{L})","iu"),/гондон(?:и|ів)?|гандон(?:и|ів)?|курв(?:а|и|ою)/iu,/срак(?:а|и|у|ою|ах)|жоп(?:а|и|у|ою|ах)/iu,new RegExp("(?<!\\p{L})гівн(?:о|а|ом)|говно|лайно","iu"),/сцяв|засцян.*|сцяк/iu,/х[*#@$]+й|х[*#@$]+р/iu,/п[*#@$]+зд[аяiі]/iu,/б[*#@$]+т[ьi]|б[*#@$]+д[ьi]/iu,/є[*#@$]+б|е[*#@$]+б/iu,new RegExp("(?<!\\p{L})(?:арестович(?:а|у)?|шарі(?:й|я|ю)|тищенк(?:о|а|у)|дубінськ(?:ий|ого)|кив(?:а|и|у)|бойк(?:о|а|у)|мураєв(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:коломойськ(?:ий|ого)|ахметов(?:а|у)?|пінчук(?:а|у)?|фірташ(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:маск(?:а|у)?|ілон\\s*маск|ердоган(?:а|у)?|нетаньягу)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алл(?:а|и|і|у)?\\s+мазур|мосейчук|натал(?:ія|і|ією|ію)?\\s+мосейчук)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:квартал\\s*95|95\\s*квартал|95-?й?\\s*квартал|студі(?:я|ї|ю)\\s+квартал)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})дизель\\s*шоу(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:драпат(?:ий|ого|ому|им|і))(?!\\p{L})","iu"),/мобілізаці(?:я|ї|ю|єю)|мобілізува.*/iu,/призов(?:у|на|ний|ників)?|повісток|повістк(?:а|и|у|ами)/iu,new RegExp("(?<!\\p{L})(?:генштаб(?:у|ом)?|гш\\s+зсу)(?!\\p{L})","iu"),/главком(?:а|у)?|командувач(?:а|і|ів)?/iu,/катуванн(?:я|ь|ям)|катува.*/iu,/побит(?:тя|тєм|ті)/iu,/зодіак(?:у|а|и)/iu],nf={a:"а",c:"с",e:"е",i:"і",o:"о",p:"р",x:"х",y:"у",k:"к",z:"з",n:"н"},af=/[\u00AD\u200B-\u200D\u2060\uFEFF]/g,rf=/[\p{L}\p{M}]+/gu,of=/[a-z]/i,sf=/[а-яіїєґ]/iu,lf=new RegExp("(?<=\\p{L})[^\\p{L}\\s\\n\\r]{0,3}(?=\\p{L})|(?<=\\p{L})[\\s\\n\\r]+(?=\\p{L})","gu"),df=/[04513@$]/g,cf={0:"о",4:"а",5:"с",1:"і",3:"е","@":"а",$:"с"},fi=new RegExp(tf.map(({source:t})=>`(?:${t})`).join("|"),"iu"),yl=t=>t?t.normalize("NFKC").replace(af,"").toLowerCase().replace(rf,n=>!of.test(n)||!sf.test(n)?n:n.replace(/[aceiopxykzn]/g,r=>nf[r])):"",uf=t=>yl(t).replace(df,n=>cf[n]).replace(lf,""),gi=t=>fi.test(t)||fi.test(t.replace(/і/g,"и")),pf=t=>{if(!t)return!1;const n=yl(t);return gi(n)||gi(uf(t))},ff=Ki({default:()=>wl}),gf=Fe`
  from { opacity: 0; }
  to { opacity: 1; }
`,mf=i.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`,mi=[{url:"https://phys.org/rss-feed/biology-news/animals-news/",name:"Phys.org",flag:"🇬🇧",home:"https://phys.org"}],hf=i.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`,xf=i.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#010101"};
  width: 100%;
  box-sizing: border-box;
`,bf=i.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
`,yf=i.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
  overflow-x: auto;
  min-width: 0; 
  scroll-snap-type: x mandatory;
  padding: 10px 22px 10px;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 479px) {
    padding: 10px 18px 10px;
    justify-content: flex-start; 
  }
`,wf=i.div`
  position: absolute;
  top: 50%;
  left: 5px;
  right: 5px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(-50%);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    justify-content: center;
    gap: 75%;
  }
      @media (max-width: 980px) {
    gap: 55%;
  }
      @media (max-width: 767px) {
    gap: 40%;
  }
 @media (max-width: 567px) {
    gap: 20%;
  }
     @media (max-width: 425px) {
    gap: 20%;
  }
`,hi=i.button`
  width: 40px;
  height: 40px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
      font-size: 43px;
  border-radius: 50%;
  border: 2px solid rgba(255, 179, 108, 0.85);
  color: #ffb36c;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: background 0.3s, transform 0.2s ease;
  z-index: 1001;
  opacity: 1 !important;
  padding-bottom: 5px;
  padding-left: 4px;
  visibility: visible !important;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.92);
  }
`,vf=i.div`
  flex: 0 0 280px;
  width: 280px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;

  @media (max-width: 479px) {flex: 0 0 calc(100vw - 48px);
    width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    max-width: 320px;
  }

  @media (min-width: 480px) and (max-width: 899px) {
    flex: 0 0 calc(50% - 5px);
    width: calc(50% - 5px);
    min-width: calc(50% - 5px);
  }

  @media (min-width: 900px) {
    flex: 0 0 calc(33.333% - 7px);
    width: calc(33.333% - 7px);
    min-width: calc(33.333% - 7px);
  }
`,kr=i.a`
  background: #1a1a1a;
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  height: auto;
  min-height: auto;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`,kf=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;
`,Sf=i.span`
  position: absolute;
  top: 4px;
  left: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 3px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 5;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #ffb36c;
  }
  backdrop-filter: blur(4px);
`,jf=i.span`
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ddff00;
  color: #000;
  padding: 3px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  z-index: 6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${gf} 0.5s ease;
`,Cf=i.div`
  position: absolute;
  top: 3px;
  right: 42px;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 7;
`,Qr=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 25px;
  min-width: 25px;
  height: 28px;
  overflow: hidden;
  background: ${t=>t.$background};
  color: ${t=>t.$color||"white"};
  border: none;
  padding: 2px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  transition: width 0.5s ease, background 0.5s ease, transform 0.5s ease;

  svg {
    flex: 0 0 auto;
    font-size: 17px;
  }

  span {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-width 0.5s ease, opacity 0.5s ease;
  }

  &:hover,
  &:focus-visible {
    width: auto;
    transform: scale(1.05);

    span {
      max-width: 100px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`,Tf=i(Qr)`
  &:hover,
  &:focus-visible {
    background: #ffb36c;
  }
`,Af=i(Qr)`
  &:hover,
  &:focus-visible {
    background: #ff4d4d;
  }
`,If=i(Qr)`
  &:hover,
  &:focus-visible {
    background: #666;
  }
`,xi=i.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: white;
`,Df=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`,Mf=i.div`
  background: #060606;
  color: #fefcfc;
  padding: 5px;
  border-radius: 7px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #ffb36c;
  position: relative;
`,Rf=i.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`,zf=({item:t,$isDarkMode:n,showImage:r,showTitle:u,showDescription:l,onAiSummaryClick:d,onReportClick:b,onMuteClick:p,onUnmuteClick:x})=>{const f=(0,a.useRef)(null),[g,F]=(0,a.useState)(t.isNew);return(0,a.useEffect)(()=>{if(!t.isNew)return;const C=new IntersectionObserver(([L])=>{if(L.isIntersecting){const P=setTimeout(async()=>{F(!1);try{const D=await c.default.getItem("seen_news_links")||[];D.includes(t.link)||await c.default.setItem("seen_news_links",[...D,t.link])}catch{}},6e4);return C.unobserve(L.target),()=>clearTimeout(P)}},{threshold:.5});return f.current&&C.observe(f.current),()=>C.disconnect()},[t.isNew,t.link]),t.isBlocked?(0,e.jsx)(kr,{$isDarkMode:n,style:{cursor:"not-allowed",position:"relative"},as:"div",children:(0,e.jsxs)(xi,{children:[(0,e.jsx)("span",{style:{fontSize:"40px",marginBottom:"10px"},children:"🔒"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4"},children:"Дана новина була неправомірна, і ви не можете її переглянути."})]})}):t.isMuted?(0,e.jsx)(kr,{$isDarkMode:n,style:{position:"relative",minHeight:"190px"},as:"div",children:(0,e.jsxs)(xi,{style:{background:"rgba(128, 128, 128, 0.5)"},children:[(0,e.jsx)("span",{style:{fontSize:"30px",marginBottom:"10px",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"🔇"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"Новину приховано."}),(0,e.jsx)("button",{onClick:C=>{C.preventDefault(),C.stopPropagation(),x&&x(t)},style:{marginTop:"10px",padding:"5px 15px",background:"#3f5959",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"Розглушити"})]})}):(0,e.jsx)(kr,{ref:f,href:t.link,target:"_blank",rel:"noopener noreferrer",$isDarkMode:n,children:(0,e.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:r?"190px":"auto",minHeight:"auto"},children:[g&&(0,e.jsx)(jf,{children:"Нове"}),(0,e.jsxs)(Sf,{onClick:C=>{C.preventDefault(),C.stopPropagation(),window.open(t.sourceHome,"_blank")},"aria-label":`Перейти на головну сторінку ${t.sourceName}`,children:[t.sourceFlag," ",t.sourceName]}),(0,e.jsxs)(Cf,{"aria-label":"Дії з новиною",children:[(0,e.jsxs)(Tf,{"aria-label":"Отримати ШІ виклад новини",$background:"rgba(0, 248, 252, 0.9)",$color:"black",onClick:C=>{C.preventDefault(),C.stopPropagation(),d&&d(t)},children:[(0,e.jsx)(_l,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"ШІ Виклад"})]}),t.sourceName!=="Phys.org"&&(0,e.jsxs)(Af,{"aria-label":"Поскаржитися на цю новину",$background:"rgba(255, 77, 77, 0.9)",onClick:C=>{b&&b(t,C)},children:[(0,e.jsx)(Hl,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Поскаржитися"})]}),(0,e.jsxs)(If,{"aria-label":"Заглушити новину",$background:"rgba(128, 128, 128, 0.9)",onClick:C=>{C.preventDefault(),C.stopPropagation(),p&&p(t,C)},children:[(0,e.jsx)(Zl,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Заглушити"})]})]}),r&&(0,e.jsx)(kf,{src:t.displayImage,alt:"",onError:C=>{C.target.onerror=null,C.target.src="data:image/webp;base64,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"}}),(u||l)&&(0,e.jsxs)(Lf,{$isDarkMode:n,$overlay:r,children:[u&&(0,e.jsx)("h4",{style:{margin:"0 0 8px 0",fontSize:"16px",display:"-webkit-box",WebkitLineClamp:2,fontWeight:"700",WebkitBoxOrient:"vertical",overflow:"hidden",lineHeight:"1.3"},children:t.title}),l&&(0,e.jsx)("p",{style:{fontSize:"13px",opacity:.9,margin:0,lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.description})]})]})})},Lf=i.div`
  padding: 8px;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  min-height: auto;
  flex-grow: 0;

  ${t=>t.$overlay?`
    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0, 0, 0, 0.83) 80%, transparent 100%);
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    margin-top: auto;
  `:`
    color: ${t.$isDarkMode?"#ffffff":"#000000"};
  `}
`,Ef=i.div`
  display: flex;
  justify-content: center;
  gap: 1px;
  margin-bottom: 3px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  width: 320px;
  box-sizing: border-box;
  @media (min-width: 468px) {
    width: 100%;
    }
`,Fn=i.button`
  background: ${t=>t.$active?"#5a3f27":"rgb(26, 49, 56)"};
  color: #ffffff;
  border-radius: 5px;
  padding: 1px 5px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:disabled {
    opacity: 0.5;
  }
`,Ff=i.div`
  width: 300px;
  height: 8px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"};
  border: 1px solid
    ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.1)"};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`,Pf=i.div`
  height: 100%;
  background: ${t=>t.$isError?"#ff4d4d":"#ffb36c"};
  width: ${t=>t.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${t=>t.$isError?"rgba(255, 77, 77, 0.7)":"rgba(255, 179, 108, 0.5)"};
`,$f=i.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`,bi=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},Ur=t=>{if(!t)return"rss";const n=t.toLowerCase();return n.includes("youtube.com")||n.includes("youtu.be")?"youtube":n.includes("t.me/")||n.includes("telegram.org")||n.startsWith("@")?"telegram":n.includes("telegra.ph/")?"telegraph":n.includes("facebook.com")?"facebook":n.includes("withhive.com")?"hive":"rss"},Nf=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?`https://i.ytimg.com/vi/${n[2]}/hqdefault.jpg`:null},Gn=async t=>{try{const n=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(t)}`);if(!n.ok)throw new Error("AllOrigins error status: "+n.status);const r=await n.json();if(!r.contents)throw new Error("AllOrigins returned empty contents");return r.contents}catch(n){console.warn("AllOrigins failed, trying corsproxy.io fallback...",n);const r=await fetch(`https://corsproxy.io/?${encodeURIComponent(t)}`);if(!r.ok)throw new Error("corsproxy.io error status: "+r.status);return await r.text()}},Of=async t=>{const n=t.match(/(UC[a-zA-Z0-9_-]{22})/);if(n)return n[1];try{const r=await Gn(t),u=r.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i)||r.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);return u?u[1]:null}catch(r){return console.error("Error resolving YouTube channel ID:",r),null}},yi=t=>{if(!t)return"";let n=t.replace(/<br\s*\/?>/gi,`
`);n=n.replace(/<[^>]*>?/gm,"");const r=document.createElement("textarea");return r.innerHTML=n,r.value.trim()},Vf=async t=>{let n="";const r=t.url;if(r.startsWith("@"))n=r.substring(1);else{const u=r.split("/");n=u[u.length-1]||u[u.length-2]}if(n.startsWith("+")||r.includes("joinchat"))try{const u=await Gn(r),l=new DOMParser().parseFromString(u,"text/html"),d=l.querySelector(".tgme_page_title")?.textContent?.trim()||"Приватний Telegram",b=l.querySelector(".tgme_page_description")?.textContent?.trim()||"Приватний канал або група.",p=l.querySelector(".tgme_page_photo_image"),x=p?p.getAttribute("src"):"";return{status:"ok",items:[{title:d,description:`${b}

Надіслати контент / Приєднатися:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:x||"",displayImage:x||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}catch{return{status:"ok",items:[{title:"Приватний Telegram Канал",description:`Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:"",displayImage:fl,sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}try{const u=`https://t.me/s/${n}`,l=await Gn(u),d=new DOMParser().parseFromString(l,"text/html"),b=d.querySelector(".tgme_channel_info_header_title span")?.textContent||n,p=d.querySelector(".tgme_page_photo_image img")||d.querySelector(".tgme_page_photo_image"),x=p&&p.getAttribute("src")||"",f=`https://t.me/${n}`,g=d.querySelectorAll(".tgme_widget_message"),F=[];return g.forEach(C=>{const L=C.querySelector(".tgme_widget_message_text"),P=L?L.innerHTML:"",D=L?yi(P).substring(0,100):"Повідомлення",v=C.querySelector(".tgme_widget_message_date"),y=v?v.getAttribute("href"):f,I=C.querySelector("time"),w=I?I.getAttribute("datetime"):new Date().toISOString(),E=C.querySelector(".tgme_widget_message_photo_wrap");let O="";if(E){const _=E.getAttribute("style"),Y=_&&_.match(/url\(['"]?([^'"]+)['"]?\)/);Y&&(O=Y[1])}F.push({title:D||"Новий допис",description:P?yi(P):"Перегляньте допис у Telegram.",link:y,pubDate:w,thumbnail:O||x||"",displayImage:O||x||"data:image/webp;base64,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",sourceName:b,sourceFlag:"📢",sourceHome:f,sourceUrl:r})}),{status:"ok",items:F.reverse()}}catch(u){return console.error("Telegram scraping failed:",u),null}},Bf=async t=>{try{const n=await Gn(t.url),r=new DOMParser().parseFromString(n,"text/html"),u=r.querySelector("header h1")?.textContent?.trim()||r.querySelector("title")?.textContent||"Telegraph стаття",l=r.querySelector("header address a")?.textContent||"Telegraph",d=r.querySelector("article img"),b=d?d.getAttribute("src"):"",p=b?b.startsWith("http")?b:`https://telegra.ph${b}`:"",x=Array.from(r.querySelectorAll("article p")).map(f=>f.textContent).join(`

`)||"Читати повну статтю на Telegraph.";return{status:"ok",items:[{title:u,description:x.substring(0,300)+(x.length>300?"...":""),link:t.url,pubDate:new Date().toISOString(),thumbnail:p||"",displayImage:p||"data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA==",sourceName:l,sourceFlag:"📝",sourceHome:"https://telegra.ph",sourceUrl:t.url}]}}catch(n){return console.error("Telegraph load failed:",n),null}},_f=async t=>{try{const n=await Gn(t.url),r=new DOMParser().parseFromString(n,"text/html"),u=r.querySelector('meta[property="og:title"]')?.getAttribute("content")||t.name,l=r.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Переглянути сторінку у Facebook.",d=r.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:u,description:l,link:t.url,pubDate:new Date().toISOString(),thumbnail:d||"",displayImage:d||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}catch(n){return console.error("Facebook OG parsing failed, trying simple card:",n),{status:"ok",items:[{title:t.name,description:"Перегляньте оновлення сторінки у Facebook за цим посиланням.",link:t.url,pubDate:new Date().toISOString(),thumbnail:"",displayImage:fl,sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}},Hf=t=>{const n=t.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);return n?{gameCode:n[1],lang:n[2]||"en",boardIdx:n[3]}:null},Uf=async t=>{const n=t.url;if(n.match(/board\/(\d+)\/(\d+)/))try{const b=await Gn(n),p=new DOMParser().parseFromString(b,"text/html"),x=p.querySelector('meta[property="og:title"]')?.getAttribute("content")||p.querySelector(".title_wrap .title")?.textContent?.trim()||"Допис у Hive",f=p.querySelector('meta[property="og:description"]')?.getAttribute("content")||p.querySelector(".post_cont")?.textContent?.trim().substring(0,300)||"Деталі допису у спільноті Hive.",g=p.querySelector('meta[property="og:image"]')?.getAttribute("content")||p.querySelector(".post_cont img")?.getAttribute("src")||"";return{status:"ok",items:[{title:x,description:f.length>=300?f.substring(0,300)+"...":f,link:n,pubDate:new Date().toISOString(),thumbnail:g||"",displayImage:g||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:n.split("/board/")[0],sourceUrl:n}]}}catch(b){console.error("Failed to parse single Hive post:",b)}const r=Hf(n);if(!r)return null;const{gameCode:u,lang:l,boardIdx:d}=r;try{const b=`https://corsproxy.io/?https://community.withhive.com/${u}/board/list/getBoardList`,p=await(await fetch(b,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:new URLSearchParams({page:1,board_idx:d,board_type:1,board_comment:1,boardtype1_preview_image:"1",is_mobile:1,select_type:1,view_type:"list"})})).json();if(!p.list)throw new Error("No dynamic list found");const x=new DOMParser().parseFromString(p.list,"text/html").querySelectorAll("li"),f=[];return x.forEach(g=>{const F=g.querySelector("a");if(!F)return;const C=F.getAttribute("href")||"",L=C.startsWith("http")?C:`https://community.withhive.com${C}`,P=g.querySelector(".title, .subject, p, h3, h4"),D=P?P.textContent.trim():"Hive Post",v=g.querySelector("img");let y="";if(v)y=v.getAttribute("src")||v.getAttribute("data-src")||"";else{const _=g.querySelector(".thumb");if(_){const Y=_.getAttribute("style"),te=Y&&Y.match(/url\(['"]?([^'"]+)['"]?\)/);te&&(y=te[1])}}const I=g.querySelector(".t_date, .date, .time"),w=I?I.textContent.trim():new Date().toISOString(),E=g.querySelector(".desc, .text, .wordcut"),O=E?E.textContent.trim():"";f.push({title:D,description:O||"Перегляньте допис у спільноті Hive.",link:L,pubDate:w,thumbnail:y||"",displayImage:y||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${u}`,sourceUrl:n})}),{status:"ok",items:f}}catch{console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");try{const p=await Gn(n),x=new DOMParser().parseFromString(p,"text/html"),f=x.querySelector('meta[property="og:title"]')?.getAttribute("content")||x.querySelector(".board_cmm .title")?.textContent?.trim()||`Hive Board ${d}`,g=x.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Перегляньте дописи у спільноті Hive.",F=x.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:f,description:g,link:n,pubDate:new Date().toISOString(),thumbnail:F||"",displayImage:F||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${u}`,sourceUrl:n}]}}catch{return null}}},Kf=async t=>{const n=Ur(t.url);return n==="telegram"?await Vf(t):n==="telegraph"?await Bf(t):n==="hive"?await Uf(t):n==="facebook"?await _f(t):null},wl=({isDarkMode:t,isStickyBgMode:n,user:r})=>{const{registerRef:u}=La?.()||{registerRef:()=>{}},l=t,[d,b]=(0,a.useState)([]),[p,x]=(0,a.useState)(0),[f,g]=(0,a.useState)(!0),[F,C]=(0,a.useState)(0),[L,P]=(0,a.useState)(!1),[D,v]=(0,a.useState)(["all"]),y=S=>{if(S==="all"){v(["all"]);return}let M=[...D].filter(K=>K!=="all");M.includes(S)?M=M.filter(K=>K!==S):M.push(S),M.length===0&&(M=["all"]),v(M)},[I,w]=(0,a.useState)(null),[E,O]=(0,a.useState)(0),_=async S=>{if(!S||S.length<3)return S;try{const M=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(S)}`);return Le.current?(await M.json())[0].map(K=>K[0]).join(""):S}catch{return S}},[Y,te]=(0,a.useState)(!1),[de,ae]=(0,a.useState)(null),[B,Z]=(0,a.useState)(!1),[ge,Ie]=(0,a.useState)(!1),[he,Ue]=(0,a.useState)([]),[De,Ze]=(0,a.useState)(""),[me,$e]=(0,a.useState)(!1),[,Ce]=(0,a.useState)([]),[dt,rt]=(0,a.useState)([]),[ct,Pe]=(0,a.useState)(!1),[Ke,ot]=(0,a.useState)([]),[wt,gt]=(0,a.useState)(!1),Le=(0,a.useRef)(!0),T=(0,a.useRef)(null);(0,a.useEffect)(()=>(Le.current=!0,(async()=>{try{const M=await c.default.getItem("custom_news_sources");M&&Ue(M)}catch{}})(),()=>{Le.current=!1}),[]),(0,a.useEffect)(()=>{(async()=>{try{const M=await c.default.getItem("filtered_news_stats");M?.date===bi()&&Array.isArray(M.links)&&Le.current&&x(M.links.length)}catch{}})()},[]),(0,a.useEffect)(()=>{(async()=>{if(r?.syncMutedNews&&r?.mutedNews)ot(r.mutedNews);else try{const M=await c.default.getItem("muted_news_urls")||[];ot(M)}catch{}})()},[r?.syncMutedNews,r?.mutedNews]),(0,a.useEffect)(()=>{if(r?.newsAutoScroll!==!0)return;const S=window.setTimeout(()=>{T.current?.scrollIntoView({behavior:"smooth",block:"start"})},300);return()=>window.clearTimeout(S)},[r?.newsAutoScroll]),(0,a.useEffect)(()=>{const S=()=>{Ie(!0),setTimeout(()=>Ie(!1),1500)},M=setTimeout(S,2e3),K=setInterval(S,7e3);return()=>{clearTimeout(M),clearInterval(K)}},[]);const $=(0,a.useCallback)(async(S=!1)=>{const M=new AbortController().signal;S&&Le.current&&(g(!0),C(5),P(!1));try{let K=[];const ve=await c.default.getItem("custom_news_sources")||[],it=[...mi,...ve];let ut=[],Me=[];try{const oe=await zo(Lo(un,"news_reports")),Ae=await zo(Lo(un,"rss_reports")),Qe=Date.now(),St=864e5;oe.forEach(Re=>{(Re.data().reports||[]).filter(Ge=>{const ze=typeof Ge=="object"?Ge.timestamp:Ge;return Qe-ze<St}).length>=10&&ut.push(Re.id)});const ue=[];Ae.forEach(Re=>{const Ge=Re.data();(Ge.reports||[]).filter(ze=>{const Je=typeof ze=="object"?ze.timestamp:ze;return Qe-Je<St}).length>=20&&(ue.push({id:Re.id,url:decodeURIComponent(Re.id),name:Ge.name||"Джерело"}),Me.push(decodeURIComponent(Re.id)))}),Le.current&&(Ce(ut),rt(ue))}catch{}for(const oe of it)if(!Me.includes(oe.url))try{const Ae=Ur(oe.url);if(Ae!=="rss"&&Ae!=="youtube"){const Qe=await Kf(oe);Qe&&Qe.items&&Qe.items.length>0&&(K=[...K,...Qe.items])}else{const Qe=await(await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(oe.url)}`,{signal:M})).json();if(Qe.status==="ok"&&Qe.items.length>0){const St=Qe.items.map(ue=>{const Re=Nf(ue.link);return{...ue,thumbnail:Re||ue.thumbnail||"",displayImage:Re||ue.thumbnail||"data:image/webp;base64,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",sourceName:oe.name,sourceFlag:oe.flag,sourceHome:oe.home,sourceUrl:oe.url}});K=[...K,...St]}}}catch{continue}if(K.length===0){Le.current&&(P(!0),C(100),g(!1));return}S&&Le.current&&C(25),K.sort((oe,Ae)=>new Date(Ae.pubDate)-new Date(oe.pubDate));const We=K.filter(oe=>{const Ae=oe.title+" "+(oe.description||"");return!pf(Ae)}),Rt=K.filter(oe=>!We.includes(oe)).map(oe=>oe.link||`${oe.sourceUrl}:${oe.title}`),ht=bi(),xe=await c.default.getItem("filtered_news_stats"),ce=xe?.date===ht&&Array.isArray(xe.links)?xe.links:[],zt=[...new Set([...ce,...Rt])];await c.default.setItem("filtered_news_stats",{date:ht,links:zt}),Le.current&&x(zt.length);const Dt=We.slice(0,15),Bt=new Array(Dt.length),nt=[],_t=[],pn=await c.default.getItem("seen_news_links")||[];for(let oe=0;oe<Dt.length;oe++){const Ae=Dt[oe],Qe=`news_trans_${Ae.link}`,St=await c.default.getItem(Qe),ue=!pn.includes(Ae.link);if(St)Bt[oe]={...St,sourceName:Ae.sourceName,sourceFlag:Ae.sourceFlag,sourceHome:Ae.sourceHome,sourceUrl:Ae.sourceUrl,isNew:ue,isBlocked:ut.includes(encodeURIComponent(Ae.link))};else{const Re=(Ae.description||"").replace(/<[^>]*>?/gm,"").trim().substring(0,170);nt.push(oe),_t.push(Ae.title),_t.push(Re)}}if(_t.length>0){S&&Le.current&&C(40);let oe=[],Ae=[],Qe=0;const St=[];for(let ue=0;ue<nt.length;ue++){const Re=_t[ue*2],Ge=_t[ue*2+1],ze=Re.length+Ge.length+10;Qe+ze>4500&&oe.length>0&&(St.push({strings:oe,indices:Ae}),oe=[],Ae=[],Qe=0),oe.push(Re,Ge),Ae.push(nt[ue]),Qe+=ze}oe.length>0&&St.push({strings:oe,indices:Ae});for(const ue of St){const Re=ue.strings.join(" ___ "),Ge=(await _(Re)).split(/\s*___\s*/);for(let ze=0;ze<ue.indices.length;ze++){const Je=ue.indices[ze],st=Dt[Je],lt=st.enclosure&&st.enclosure.link||st.thumbnail||"data:image/webp;base64,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",qt={title:Ge[ze*2]?.trim()||st.title,description:(Ge[ze*2+1]?.trim()||"")+"...",link:st.link,displayImage:lt,sourceName:st.sourceName,sourceFlag:st.sourceFlag,sourceHome:st.sourceHome,sourceUrl:st.sourceUrl,isNew:!pn.includes(st.link),isBlocked:ut.includes(encodeURIComponent(st.link))};await c.default.setItem(`news_trans_${st.link}`,qt),Bt[Je]=qt}}}S&&Le.current&&C(100);const kt=(await c.default.keys()).filter(oe=>oe.startsWith("news_trans_")),en=Dt.map(oe=>`news_trans_${oe.link}`);for(const oe of kt)en.includes(oe)||await c.default.removeItem(oe);Le.current&&(b(Bt),w(new Date))}catch(K){if(K.name==="AbortError"||K.message?.includes("aborted")){console.log("Запит було скасовано");return}console.error("Справжня помилка завантаження:",K),Le.current&&(P(!0),C(100),S&&(g(!0),await new Promise(ve=>setTimeout(ve,2500))))}finally{Le.current&&g(!1)}},[]),X=d.filter(S=>D.includes("all")||D.includes(S.sourceName)),ie=X.slice(0,15).map(S=>({...S,isMuted:Ke.includes(S.link)})),pe=ie.length>0?[...ie,...ie,...ie]:[],Te=(0,a.useRef)(null),_e=(0,a.useRef)(!1),Be=(0,a.useRef)(null),be=S=>{if(!Te.current)return;const M=Te.current,K=(M.querySelector("[data-news-slide]")?.getBoundingClientRect().width||280)+(Number.parseFloat(getComputedStyle(M).gap)||5);_e.current=!0,M.scrollBy({left:S==="left"?-K:K,behavior:"smooth"}),setTimeout(()=>{_e.current=!1},600)},At=()=>{!Te.current||ie.length===0||_e.current||(Be.current&&clearTimeout(Be.current),Be.current=setTimeout(()=>{const S=Te.current;if(!S)return;const M=S.scrollWidth/3,K=12,ve=S.style.scrollSnapType;S.scrollLeft<=K?(_e.current=!0,S.style.scrollSnapType="none",S.scrollLeft+=M,requestAnimationFrame(()=>{S.style.scrollSnapType=ve,_e.current=!1})):S.scrollLeft>=M*2-K&&(_e.current=!0,S.style.scrollSnapType="none",S.scrollLeft-=M,requestAnimationFrame(()=>{S.style.scrollSnapType=ve,_e.current=!1}))},150))};(0,a.useEffect)(()=>{if(Te.current&&ie.length>0){const S=Te.current.scrollWidth/3;Te.current.scrollLeft=S}},[ie.length,D]),(0,a.useEffect)(()=>{(async()=>{try{const K=await c.default.getItem("news_refresh_cooldown_end");if(K){const ve=Math.ceil((K-Date.now())/1e3);ve>0&&O(ve)}}catch{}$(!0)})();const M=setInterval(()=>$(!1),36e5);return()=>{clearInterval(M)}},[]),(0,a.useEffect)(()=>{if(E>0){const S=setTimeout(()=>O(E-1),1e3);return()=>clearTimeout(S)}else c.default.removeItem("news_refresh_cooldown_end")},[E]);const qe=async()=>{let S=De.trim();if(S){if(he.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}try{let M=S,K="",ve="🌐",it="";M.startsWith("@")&&(M=`https://t.me/${M.slice(1)}`),!M.startsWith("http://")&&!M.startsWith("https://")&&(/^[a-zA-Z0-9_]+$/.test(M)?M=`https://t.me/${M}`:M=`https://${M}`);const ut=new URL(M),Me=ut.hostname.replace("www.","");K=Me,it=ut.origin;const We=Ur(M);if(We==="youtube"){alert("Здійснюється пошук ID YouTube каналу...");const xe=await Of(M);if(xe)M=`https://www.youtube.com/feeds/videos.xml?channel_id=${xe}`,K=`YouTube: ${Me}`,ve="🔴";else{alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");return}}else if(We==="telegram"){const xe=M.split("/");K=`Telegram: ${xe[xe.length-1]||xe[xe.length-2]}`,ve=M.includes("+")||M.includes("joinchat")?"🔒":"📢",it=M}else if(We==="telegraph")K="Telegraph",ve="📝",it="https://telegra.ph";else if(We==="facebook"){const xe=M.split("/"),ce=xe[xe.length-1]||xe[xe.length-2];M=`https://www.facebook.com/${ce}`,K=`Facebook: ${ce}`,ve="📘",it=M}else if(We==="hive"){const xe=M.match(/withhive\.com\/([a-zA-Z0-9_-]+)/),ce=xe?xe[1]:"Hive";K=`Hive: ${ce}`,ve="🐝",it=`https://community.withhive.com/${ce}`}else K=Me,ve="🌐";const Rt={url:M,name:K,flag:ve,home:it,type:We},ht=await c.default.getItem("custom_news_sources")||[];if(ht.find(xe=>xe.url===M))alert("Це джерело вже додано.");else{if(ht.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}const xe=[...ht,Rt];await c.default.setItem("custom_news_sources",xe),Ue(xe),Ze(""),$e(!1),$(!0)}}catch(M){console.error(M),alert("Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)")}}},mt=async(S,M)=>{if(M.preventDefault(),M.stopPropagation(),!r){alert("Тільки авторизовані користувачі можуть залишати скарги.");return}if(window.confirm("Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)"))try{const K=Wo.currentUser||(await Dd(Wo)).user,ve=r.uid||K.uid,it=encodeURIComponent(S.link),ut=encodeURIComponent(S.sourceUrl),Me=Date.now(),We={uid:ve,timestamp:Me},Rt=An(un,"news_reports",it),ht=await er(Rt);if(ht.exists()){if((ht.data().reports||[]).some(zt=>zt.uid===ve&&Me-zt.timestamp<864e5)){alert("Ви вже скаржилися на цю новину сьогодні.");return}await Ba(Rt,{reports:Eo(We)})}else await Da(Rt,{reports:[We]});const xe=An(un,"rss_reports",ut),ce=await er(xe);ce.exists()?(ce.data().reports||[]).some(zt=>zt.uid===ve&&Me-zt.timestamp<864e5)||await Ba(xe,{reports:Eo(We)}):await Da(xe,{reports:[We],name:S.sourceName}),alert("Скаргу прийнято. Дякуємо!"),$(!0)}catch(K){console.warn("Помилка відправки скарги:",K),alert("Помилка відправки скарги.")}},vt=async(S,M)=>{M&&(M.preventDefault(),M.stopPropagation());const K=[...Ke,S.link];if(ot(K),r?.syncMutedNews&&r?.uid)try{await Ba(An(un,"users",r.uid),{mutedNews:K})}catch(ve){console.warn("Помилка збереження заглушеної новини в Firebase",ve)}else try{await c.default.setItem("muted_news_urls",K)}catch{}},Xe=async S=>{const M=Ke.filter(K=>K!==S.link);if(ot(M),r?.syncMutedNews&&r?.uid)try{await Ba(An(un,"users",r.uid),{mutedNews:M})}catch(K){console.warn("Помилка розглушення новини в Firebase",K)}else try{await c.default.setItem("muted_news_urls",M)}catch{}},It=async S=>{if(window.confirm("Видалити це джерело новин?"))try{const M=await c.default.getItem("custom_news_sources")||[],K=M.filter(it=>it.url!==S);await c.default.setItem("custom_news_sources",K),Ue(K);const ve=M.find(it=>it.url===S)?.name;ve&&D.includes(ve)&&v(["all"]),$(!0)}catch(M){console.error("Localforage error:",M),alert("Помилка видалення джерела.")}},V=r?.newsLayout||[],Q=S=>V.find(M=>M.key===S)?.visible!==!1,re=!0,G=Q("title"),Ee=Q("description");return(0,e.jsxs)(hf,{ref:T,children:[(0,e.jsxs)(mf,{$isStickyBgMode:n,$isDarkMode:l,children:[(0,e.jsx)(xf,{$isDarkMode:l,children:(0,e.jsx)(Fn,{ref:S=>u("newsHeader",S),$isDarkMode:l,onClick:()=>gt(!wt),style:{marginLeft:"5px",padding:"2px",fontSize:"15px",fontWeight:"600",background:"none"},children:"Натисніть для додавання стрічки новин"})}),(0,e.jsx)(Qa,{children:wt&&(0,e.jsxs)(sn.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:[(0,e.jsxs)(Ef,{children:[(0,e.jsx)(Fn,{$isDarkMode:l,onClick:()=>Z(!0),children:"Інструкція"}),(0,e.jsxs)(Fn,{$isDarkMode:l,$active:D.includes("all"),onClick:()=>y("all"),children:[D.includes("all")?"☑":"☐"," Усі"]}),mi.map(S=>(0,e.jsxs)(Fn,{$isDarkMode:l,$active:D.includes(S.name),onClick:()=>y(S.name),children:[D.includes(S.name)?"☑":"☐"," ",S.name]},S.name)),he.map(S=>(0,e.jsxs)(Fn,{$isDarkMode:l,$active:D.includes(S.name),onClick:()=>y(S.name),children:[D.includes(S.name)?"☑":"☐"," ",S.name,(0,e.jsx)("span",{onClick:M=>{M.stopPropagation(),It(S.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},S.url)),he.length<5&&(0,e.jsx)(Fn,{$isDarkMode:l,onClick:()=>$e(!me),style:{borderStyle:"dashed"},children:me?"Скасувати":"Додати стрічку"}),(0,e.jsxs)(Fn,{$isDarkMode:l,onClick:()=>Pe(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",dt.length,")"]})]}),(0,e.jsx)(Qa,{children:me&&(0,e.jsx)(sn.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[(0,e.jsx)("input",{type:"text",value:De,onChange:S=>Ze(S.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"5px",borderRadius:"5px",border:`1px solid ${l?"rgba(0, 0, 0, 0.98)":"rgb(255, 255, 255)"}`,background:"transparent",color:l?"#000":"#fff",outline:"none",minWidth:"248px",fontFamily:"var(--font-family)",fontSize:"12px","--placeholder-color":"rgba(255, 255, 255, 0.97)"}}),(0,e.jsx)(Fn,{$isDarkMode:l,onClick:qe,style:{background:"#ffb36c",color:"#000"},children:"Зберегти"})]})})})]})})]}),f?(0,e.jsxs)("div",{style:{textAlign:"center",color:"gray",padding:"60px 20px"},children:[(0,e.jsx)("div",{style:{marginBottom:"15px",fontSize:"14px",background:"rgba(0, 0, 0, 0.71)",color:"#fff",borderRadius:"5px",padding:"10px 15px",borderRadius:"5px",display:"inline-block",fontWeight:"900"},children:L?"Помилка завантаження!":`Шукаємо цікаві новини: ${F}%`}),(0,e.jsx)(Ff,{$isDarkMode:l,children:(0,e.jsx)(Pf,{$progress:F,$isError:L})})]}):X.length>0?(0,e.jsxs)("div",{style:{position:"relative",maxWidth:"1400px",margin:"0 auto"},children:[(0,e.jsx)(Qa,{mode:"wait",children:(0,e.jsx)(sn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},style:{width:"100%"},children:(0,e.jsxs)(bf,{children:[(0,e.jsx)(yf,{ref:Te,onScroll:At,children:pe.map((S,M)=>(0,e.jsx)(vf,{"data-news-slide":!0,children:(0,e.jsx)(zf,{item:S,$isDarkMode:l,showImage:re,showTitle:G,showDescription:Ee,onAiSummaryClick:K=>{ae(K),te(!0)},onReportClick:mt,onMuteClick:vt,onUnmuteClick:Xe})},`${S.link}-${M}`))}),(0,e.jsxs)(wf,{$visible:ge,children:[(0,e.jsx)(hi,{style:{paddingRight:"10px"},onClick:()=>be("left"),children:"◂"}),(0,e.jsx)(hi,{onClick:()=>be("right"),children:"▸"})]})]})},D.join(","))}),(0,e.jsxs)($f,{$isDarkMode:l,children:["За сьогодні відфільтровано ",p," небажаних новин."]})]}):(0,e.jsx)("div",{style:{textAlign:"center",color:"white",padding:"14px",background:"#0000009c",marginTop:"20px",fontSize:"12px"},children:"Перевірте інтернет зв'язок. У випадку стабільного зв'язку це означає, що всі новини сайту мали недопустимий характер і ми їх не пропустили."}),de&&(0,e.jsx)(y0,{isOpen:Y,onClose:()=>te(!1),newsItem:de,isDarkMode:l}),B&&(0,e.jsx)(bl,{isOpen:B,onClose:()=>Z(!1),initialFaqQuestion:"Навчання по управлінню новинами"}),ct&&(0,e.jsx)(Df,{onClick:()=>Pe(!1),children:(0,e.jsxs)(Mf,{$isDarkMode:l,onClick:S=>S.stopPropagation(),children:[(0,e.jsx)(Rf,{onClick:()=>Pe(!1),children:"✕"}),(0,e.jsx)("h2",{style:{marginTop:0},children:"Чорний список (карантин 24 год)"}),(0,e.jsx)("p",{style:{fontSize:"13px"},children:"Ці RSS-джерела отримали багато скарг і відключені для всіх користувачів."}),dt.length===0?(0,e.jsx)("p",{children:"Наразі немає заблокованих джерел."}):(0,e.jsx)("ul",{style:{paddingLeft:"20px",marginTop:"15px"},children:dt.map(S=>(0,e.jsxs)("li",{style:{marginBottom:"15px"},children:[(0,e.jsx)("strong",{style:{fontSize:"16px"},children:S.name}),(0,e.jsx)("br",{}),(0,e.jsx)("a",{href:S.url,target:"_blank",rel:"noreferrer",style:{fontSize:"12px",color:"#ffb36c",wordBreak:"break-all"},children:S.url})]},S.id))})]})})]})},qf=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,wi=(t,n)=>{Rd(t,{duration:4e3,style:{backgroundColor:n?"#0c0c0cbf":"#fdff98bb",color:n?"#ffffff":"#1a1a1a",border:"2px solid #00afce",borderRadius:"6px",boxShadow:`0 4px 12px rgba(0, 0, 0, ${n?"0.5":"0.15"})`,fontSize:"13px",fontWeight:"500",zIndex:"10000",padding:"10px 16px",backdropFilter:"blur(4px)"},icon:"⚠️"})},Wf=Fe`
  from { opacity: 0; }
  to { opacity: 1; }
`,Gf=Fe`
  from { opacity: 1; }
  to { opacity: 0; }
`,Jf=Fe`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,Yf=Fe`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,Zf=Fe`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`,Xf=Fe`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,Qf=i.div`
  position: relative;
  width: 100%;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`,eg=i.div`
  display: block;
  width: 192px;
  margin-top: 45px;
  height: 71px;
  background-image: url(${t=>t.$image});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(120px) scale(1.5);
  animation: ${t=>t.$start?Vt`
          ${Zf} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `:"none"};
`,tg=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${t=>t.$start?Vt`
          ${Xf} 1s ease-out forwards
        `:"none"};
  animation-delay: ${t=>t.$start?"1.5s":"0s"};
`,ng=Fe`
  0% { background-position-x: 0%; }
  50% { background-position-x: 100%; }
  100% { background-position-x: 0%; }
`,Kr=t=>t instanceof Blob?t.type.startsWith("video/"):typeof t!="string"?!1:t.includes(".mp4")||t.startsWith("data:video/"),Wa=t=>{const n=[...t];for(let r=n.length-1;r>0;r--){const u=Math.floor(Math.random()*(r+1));[n[r],n[u]]=[n[u],n[r]]}return n},ag=(t=[],n=[])=>{const r=new Set;return[...t||[],...n||[]].filter(u=>{const l=`${u?.lat??""}-${u?.lon??""}-${u?.name??""}-${u?.country??""}`;return!u||r.has(l)?!1:(r.add(l),!0)})},rg=i.div`
  position: ${t=>t.$isStickyBgMode?"fixed":"absolute"} !important;
  width: ${t=>t.$isStickyBgMode?"100vw":"100%"} !important;
  height: ${t=>t.$isStickyBgMode?"100vh":"100%"} !important;
  top: 0;
  left: 0;
  opacity: ${t=>t.$active?1:0};
  transition:
    opacity ${t=>t.$transition}s ease-in-out,
    position 0.5s ease,
    width 0.5s ease,
    height 0.5s ease,
    z-index 0s;
  transform: scale(
      ${t=>(t.$zoom||1)*(t.$rotationScale||1)}
    )
    rotate(${t=>t.$rotation||0}deg);
  transform-origin: ${t=>t.$focalX}% ${t=>t.$focalY}%;
  filter: ${t=>t.$blurType==="pixelated"?t.$pixelation>.5?"url(#pixelate-hero)":"none":`blur(${t.$blur||0}px)`};
  z-index: ${t=>t.$isStickyBgMode?"-10":"-2"} !important;
  animation: ${t=>t.$panEnabled&&t.$zoom>1?Vt`
          ${ng} ${t.$panSpeed||6}s infinite linear
        `:"none"};
`,Ga=t=>{const{$image:n,$active:r,$focalX:u,$focalY:l,$videoStart:d,$videoEnd:b,$videoPlaybackSpeed:p}=t,[x,f]=(0,a.useState)(typeof n=="string"?n:""),g=(0,a.useRef)(null),F=t.$blurType==="pixelated";(0,a.useEffect)(()=>{let D=null;return n instanceof Blob?(D=URL.createObjectURL(n),f(D)):f(n),()=>{D&&URL.revokeObjectURL(D)}},[n]),(0,a.useEffect)(()=>{g.current&&(r?(d!=null&&g.current.currentTime<d&&(g.current.currentTime=d),g.current.playbackRate=p||1,g.current.play().catch(()=>{})):g.current.pause())},[r,d,p]);const C=Kr(n),L=d??0,P=b??null;return(0,e.jsx)(rg,{...t,children:C?(0,e.jsx)("video",{ref:g,src:x,muted:!0,loop:!0,playsInline:!0,onTimeUpdate:D=>{const v=D.target.currentTime;P!==null&&v>=P&&(D.target.currentTime=L)},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${u}% ${l}%`,imageRendering:F?"pixelated":"auto"}}):(0,e.jsx)("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${x||"/assets/fog-Cew27ml4.webp"})`,backgroundSize:"cover",backgroundPosition:`${u}% ${l}%`,backgroundRepeat:"no-repeat",imageRendering:F?"pixelated":"auto"}})})},og=i.div`
  position: ${t=>t.$isStickyBgMode?"fixed":"absolute"} !important;
  top: 0;
  left: 0;
  width: ${t=>t.$isStickyBgMode?"100vw":"100%"} !important;
  height: ${t=>t.$isStickyBgMode?"100vh":"100%"} !important;
  background: rgba(0, 0, 0, ${t=>t.$opacity});
  z-index: ${t=>t.$isStickyBgMode?"-9":"-1"} !important;
  pointer-events: none;
  transition:
    background 0.5s ease,
    width 0.5s ease,
    height 0.5s ease;
`,ig=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,sg=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 0;
  }
`,lg=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,dg=i.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  width: 300px;
  background: #00000056;
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,cg=i.button`
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease;
`,ug=i.div`
  position: fixed;
  top: 5%;
  left: 0%;
  width: 100vw;
  height: 97vh;
  background: rgba(2, 2, 2, 0.97);
  border-top: 2px solid #ffb36c;
  padding: 0;
  overflow-y: auto;
  z-index: 99999;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,pg=i.button`
  width: 100%;
  background: transparent;
  color: ${t=>t.$selected?"#ffb36c":"#fff"};
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${t=>t.$selected?"#ffb36c":"transparent"};
  padding: 5px 10px;
  cursor: pointer;
  text-align: left;
  font-size: 13px;
  transition: all 0.15s ease;
  font-weight: ${t=>t.$selected?"bold":"normal"};
  background: ${t=>t.$selected?"rgba(255,179,108,0.08)":"transparent"};

  &:hover {
    background: rgba(255, 179, 108, 0.15);
    border-left-color: #ffb36c;
    color: #ffb36c;
  }
`;i.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2000;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.1) 0%,
    transparent 70%
  );
  border: 4px solid rgba(255, 215, 0, 0.15);
  box-shadow: inset 0 0 50px rgba(255, 215, 0, 0.2);
  opacity: ${t=>t.$active?1:0};
  transition: opacity 2s ease;

  &::after {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${t=>t.$color||"gold"};
    font-size: 14px;
    font-weight: 900;
    text-shadow: 0 0 10px black;
  }
`;var fg=i.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`,Sr=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,jr=i.button`
  width: 30px;
  height: 30px;
  border-radius: 10px 0 0 0;
  border: none;
  border-right: 2px solid black;
  background: #1b4b64;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: #353988; }
`,Cr=i.div`
  position: absolute;
  top: -59px;
  left: 30px;
  background: rgba(3, 3, 3, 0.76);
  backdrop-filter: blur(12px);
  border-radius: 5px;
  overflow: hidden;
  z-index: 200;
  min-width: 180px;
`,Cn=i.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 2px;
  background: ${t=>t.$active?"rgba(108,255,228,0.15)":"transparent"};
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  color: ${t=>t.$active?"#6cffe4":"#fff"};
  font-size: 15px;
  font-weight: ${t=>t.$active?"700":"500"};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
  &:last-child { border-bottom: none; }
  &:hover { background: rgba(255,179,108,0.15); color: #ffb36c; }
`,vi=i.button`
  padding: 14px;
  background: ${t=>t.$active?"#6cffe48b":"rgba(255, 234, 0, 0.5)"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: 1px solid
    ${t=>t.$active?"#ffff00":"rgb(0, 255, 238)"};
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-family);
  font-size: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${t=>t.$active?"#98ff6ca0":"rgba(0, 255, 119, 0.59)"};
  }
`,gg=i.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`,ki=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 120px;
    height: 30px;
    padding: 5px;
    font-size: 10px;
    border-radius: 8px;
    border: 1px solid #ffb36c;
    background: ${t=>t.$isDarkMode?"white":"black"};
    color: #222;
    font-weight: 500;
    &::placeholder {
      color: #303030;
    }
  }
`,mg=i.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(2, 2, 2, 0.98);
  border-bottom: 2px solid rgba(255, 179, 108, 0.4);
  backdrop-filter: blur(6px);
`,hg=i.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`,xg=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb7a00;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background 0.2s;
`,bg=i.div`
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.3);
`,Si=i.button`
  background: ${t=>t.$active?"#ffb36c":"rgba(255, 179, 108, 0.1)"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 3px;
  padding: 8px 4px;
  font-size: 12px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background: ${t=>t.$active?"#ffb36c5d":"rgba(255, 179, 108, 0.3)"};
  }
`,ji=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Ci=i.div`
  position: relative;
  display: flex;
  width: 97%;
  justify-content: center;
`,Ti=i.input`
  width: 100%;
  height: 30px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 11px;
  color: #040404;
  padding-left: 8px;
  padding-right: 35px;
  background: #ffffff;
  border-radius: 0;
  border: none;
  border-right: 2px solid black;
  outline: none;
  box-sizing: border-box;
  @media (min-width: 768px) {
    font-size: 13px;
  }
    &::placeholder {
    color: #000000;
  }
`,yg=i.button`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border-left: 3px solid black;
  border-top: 1px solid black;
  cursor: pointer;
  font-size: 30px;
  color: rgb(2, 2, 2);
  background: rgb(183, 101, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  width: 30px;
  transition: all 0.2s;
  &:hover {
    font-weight: bold;
  }
  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`,Tr=i.button`
  position: relative;
  border-radius: 0 10px 0px 0;
  width: 30px;
  height: 30px;
  background: ${t=>t.disabled?"#ffffff":"yellow"};
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  border-left: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  font-size: 20px;
  color: black;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  &:hover {
    background: ${t=>t.disabled?"#ccc":"skyblue"};
    color: ${t=>t.disabled?"black":"transparent"};
  }
  ${t=>!t.disabled&&Vt`
      &:hover::after {
        content: "+";
        position: absolute;
        color: black;
        font-size: 22px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`,Ai=i.div`
  position: absolute;
  top: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow-y: auto;
  border: 1px solid rgb(0, 0, 0);
  @media (min-width: 768px) {
  width: 108.4%;
  }
  @media (min-width: 1200px) {
      width: 102.4%;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: skyblue;
    border-radius: 10px;
  }
`,Ii=i.button`
  width: 100%;
  text-align: left;
  padding: 2px;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: #333;
  &:hover {
    background: skyblue;
    color: white;
    transform: translateX(5px);
  }
`,wg=i.div`
  position: absolute;
  top: 100%;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: ${t=>t.$hasExpanded?"hidden":"auto"};
  border-top: 2px solid rgb(0, 0, 0);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: skyblue;
    border-radius: 10px;
  }
`,Di=i.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`,Mi=i.div`
  cursor: pointer;
  font-weight: bold;
  color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #205d6e;
  transition: background 0.2s;
  &:hover {
    background: #566fd2;
    color: white;
  }
`,Ri=i.div`
  max-height: ${t=>t.$expanded?"220px":"0"};
  overflow-y: ${t=>t.$expanded?"auto":"hidden"};
  transition:
    max-height 0.4s ease-in-out,
    padding 0.4s ease-in-out;
  padding: ${t=>t.$expanded?"3px":"0 15px"};
  background: #00eaff;
  font-size: 13px;
  color: rgb(9, 9, 9);
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,vg=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`,kg=i.span`
  background: #f6ff00;
  color: #000;
    font-weight: 900;
  padding: 1px 5px;
  border-radius: 2px;
  border: 1px solid #000;
  font-size: 12px;
`,Sg=i.div`
  display: flex;
  overflow-x: auto;
  gap: 5px;
  width: 100%;
  scroll-behavior: smooth;
  padding-bottom: 5px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 4px;
  }
`,zi=i.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.6);
  color: white;
  border: 1px solid #ffb36c;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  &:hover { background: rgba(0,0,0,0.9); }

  @media (min-width: 1025px) {
    display: none;
  }
`,Li=i.img`
  width: 290px;
  height: 135px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  flex-shrink: 0;
  &:hover {
    transform: scale(1.05);
  }
`,vl=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?n[2]:null},jg=({images:t=[],youtubeTrailer:n,setFullscreenImage:r,imageMap:u,setFullscreenVideo:l})=>{const[d,b]=(0,a.useState)(!1),p=(0,a.useRef)(null),x=F=>{p.current&&p.current.scrollBy({left:F==="left"?-310:310,behavior:"smooth"})},f=n?vl(n):null,g=f?`https://img.youtube.com/vi/${f}/mqdefault.jpg`:null;return(0,e.jsxs)("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column"},children:[(0,e.jsx)("button",{onClick:F=>{F.stopPropagation(),b(!d)},style:{alignSelf:"flex-start",marginBottom:"3px",marginTop:"3px",background:"#ecfd03",border:"1px solid #000",borderRadius:"3px",cursor:"pointer",padding:"5px",fontSize:"11px",fontWeight:"bold",color:"#000"},children:d?"Розгорнути фото і відео":"Згорнути фото і відео"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",position:"relative",width:"100%"},children:[(0,e.jsx)(zi,{style:{left:0},onClick:F=>{F.stopPropagation(),x("left")},children:"<"}),(0,e.jsxs)(Sg,{ref:p,children:[g&&(0,e.jsxs)("div",{style:{position:"relative",cursor:"pointer",flexShrink:0,width:"300px",height:d?"10px":"135px",transition:"all 0.3s ease"},onClick:F=>{F.stopPropagation(),d||l(n)},children:[(0,e.jsx)(Li,{src:g,alt:"YouTube Trailer",style:{height:d?"10px":"135px",opacity:.8,border:"2px solid red",boxSizing:"border-box"}}),!d&&(0,e.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0,0,0,0.7)",borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",color:"red",fontSize:"24px",pointerEvents:"none"},children:"▶"})]}),t.map((F,C)=>{const L=u[F]||F;return(0,e.jsx)(Li,{src:L,alt:"",style:{height:d?"10px":"135px"},onClick:P=>{P.stopPropagation(),d||r(L)}},C)})]}),(0,e.jsx)(zi,{style:{right:0},onClick:F=>{F.stopPropagation(),x("right")},children:">"})]})]})},Ei=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  cursor: pointer;
`,Cg=i.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`,Ar=i.button`
  width: 100%;
  padding: 8px;
  background: ${t=>t.disabled?"#eee":"gold"};
  color: ${t=>t.disabled?"#999":"black"};
  border: 2px solid ${t=>t.disabled?"#ccc":"#b8860b"};
  border-radius: 8px;
  font-weight: bold;
  cursor: ${t=>t.disabled?"default":"pointer"};
  font-size: 13px;
  &:hover {
    background: ${t=>t.disabled?"#eee":"#ffcc00"};
  }
`,Tg=i.button`
  position: absolute;
  top: 43px;
  gap: 9px;
  right: 7px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 110px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s;
  font-size: 18px;
  backdrop-filter: blur(5px);
  &:hover {
    background: #1d5b69;
    transform: scale(1.1);
  }
`,Ag=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: ${t=>t.$isClosing?Gf:Wf} 0.3s ease-out
    forwards;
`,Ig=i.div`
  background: #000;
  padding: 3px;
  border-radius: 5px;
  width: 95%;
  max-width: 1200px;
  position: reletive;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #ffb36c;
  color: white;
  position: relative;
  animation: ${t=>t.$isClosing?Yf:Jf} 0.4s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,Dg=i.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 10;
  &:hover {
    background: red;
  }
`,Mg=i.button`
  position: absolute;
  top: 5px;
  right: 35px;
  background: rgba(255, 179, 108, 0.8);
  color: black;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 10;
  &:hover {
    background: #ffb36c;
  }
`,kl=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 1px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`,Sl=i.div`
  position: absolute;
  bottom: ${t=>t.$hasSlots?"13px":"0"};
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  padding: 2px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 8;
`,yn=i.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px;
  border-radius: 6px;
  label {
    font-size: 12px;
    font-weight: bold;
    color: #ffb36c;
  }
`,Rg=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
  align-items: end;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;var zg=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
  }
`,Lg=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${t=>t.$active?"#ffb36c":"transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${Sl}, ${kl} {
      opacity: 1;
    }
  }
`,Eg=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
`,Fg=i.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 98px;
  z-index: 5;
`,Fi=i.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  color: "#000dff";
  font-weight: 900;
  text-shadow: 0 0 3px black;
`,Ir=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
`,Tn=i.button`
  flex: 1;
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"black":"white"};
  border: none;
  padding: 1px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
`,Pg=i.div`
  position: sticky;
  top: 0;
  border: 2px dashed #ffb36c;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  color: #ccc;

  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`,Pi=i.button`
  color: #ff7b00;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
`,$g=i.input`
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: rgba(255, 255, 255, 0.01);
  color: white;
  width: 100%;
  max-width: 300px;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: white;
  }
`,Dr=i.hr`
  border: 0;
  border-top: 1px solid rgba(255, 179, 108, 0.3);
  width: 100%;
`,Ng=i.h3`
  font-weight: bold;
  color: #ffb36c;
  margin: 5px;
  font-size: 14px;
`,Wn=({content:t,children:n,placement:r="bottom",isDarkMode:u=!0})=>{const[l,d]=(0,a.useState)(!1),b=(0,a.useRef)(null),{refs:p,floatingStyles:x,context:f}=ya({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:da,middleware:[wa(8),la(),va({padding:5}),fa({element:b})]}),{isMounted:g,styles:F}=ga(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),C=pa(f,{move:!1}),L=ua(f),P=ma(f),D=ha(f,{role:"tooltip"}),{getReferenceProps:v,getFloatingProps:y}=xa([C,L,P,D]);if(!t)return n;const I=u?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...v(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(ca,{children:(0,e.jsxs)(qf,{ref:p.setFloating,$isDarkMode:u,style:{...x,...F},...y(),children:[t,(0,e.jsx)(ba,{ref:b,context:f,fill:I,stroke:"#00acb9",strokeWidth:1})]})})]})},Mr=[{label:"UTC (Всесвітній час)",value:"UTC"},{label:"GMT (Лондон, Дублін)",value:"Europe/London"},{label:"UTC+1 (Берлін, Париж, Рим, Варшава)",value:"Europe/Berlin"},{label:"UTC+2 (Київ, Хельсінкі, Каїр, Бухарест)",value:"Europe/Kyiv"},{label:"UTC+3 (Стамбул, Ер-Ріяд, Найробі)",value:"Europe/Istanbul"},{label:"UTC+4 (Дубай, Баку, Тбілісі)",value:"Asia/Dubai"},{label:"UTC+5 (Ісламабад, Ташкент, Мальдіви)",value:"Asia/Karachi"},{label:"UTC+6 (Астана, Дакка, Алмати)",value:"Asia/Almaty"},{label:"UTC+7 (Бангкок, Джакарта, Ханой)",value:"Asia/Bangkok"},{label:"UTC+8 (Пекін, Сінгапур, Перт)",value:"Asia/Shanghai"},{label:"UTC+9 (Токіо, Сеул, Іркутськ)",value:"Asia/Tokyo"},{label:"UTC+10 (Сідней, Мельбурн, Порт-Морсбі)",value:"Australia/Sydney"},{label:"UTC+11 (Номеа, Соломонові Острови)",value:"Pacific/Noumea"},{label:"UTC+12 (Окленд, Фіджі)",value:"Pacific/Auckland"},{label:"UTC-1 (Азорські острови, Кабо-Верде)",value:"Atlantic/Azores"},{label:"UTC-2 (Південна Джорджія)",value:"Atlantic/South_Georgia"},{label:"UTC-3 (Буенос-Айрес, Бразиліа, Гренландія)",value:"America/Argentina/Buenos_Aires"},{label:"UTC-4 (Сантьяго, Галіфакс, Каракас)",value:"America/Santiago"},{label:"UTC-5 (Нью-Йорк, Торонто, Богота)",value:"America/New_York"},{label:"UTC-6 (Чикаго, Мехіко, Вінніпег)",value:"America/Chicago"},{label:"UTC-7 (Денвер, Едмонтон, Калгарі)",value:"America/Denver"},{label:"UTC-8 (Лос-Анджелес, Ванкувер, Сан-Франциско)",value:"America/Los_Angeles"},{label:"UTC-9 (Аляска, Анкоридж)",value:"America/Anchorage"},{label:"UTC-10 (Гаваї, Гонолулу)",value:"Pacific/Honolulu"},{label:"UTC-11 (Паго-Паго, Алофі)",value:"Pacific/Pago_Pago"},{label:"UTC-12 (Острів Бейкер, Острів Гоуленд)",value:"Etc/GMT+12"},{label:"EST (Північна Америка: Східний час)",value:"America/New_York"},{label:"CST (Північна Америка: Центральний час)",value:"America/Chicago"},{label:"MST (Північна Америка: Гірський час)",value:"America/Denver"},{label:"PST (Північна Америка: Тихоокеанський час)",value:"America/Los_Angeles"},{label:"CET (Центральна Європа: Прага, Мадрид)",value:"Europe/Berlin"},{label:"EET (Східна Європа: Софія, Таллінн)",value:"Europe/Kyiv"},{label:"IST (Індія, Нью-Делі)",value:"Asia/Kolkata"},{label:"JST (Японія, Токіо)",value:"Asia/Tokyo"},{label:"AEST (Східна Австралія, Брісбен)",value:"Australia/Brisbane"},{label:"Інший (ввести вручну)",value:"custom_input"}],Og={planes:a0,weather:n0,slivki:t0,village:tl,herotext:ul,meridian:r0,hills:Gr,youtube:o0},Rr=({isStickyBgMode:t,heroDateString:n,onAddCity:r,startAnimation:u,user:l,isDarkMode:d,checkWeatherDanger:b,heroBg:p,setHeroBg:x,heroBg2:f,setHeroBg2:g,heroBg3:F,setHeroBg3:C,heroBg4:L,setHeroBg4:P,customHeroBgs:D=[],setCustomHeroBgs:v,heroBgMode:y,setHeroBgMode:I,heroOverlayOpacity:w,setHeroOverlayOpacity:E,bgRatings:O,setBgRatings:_,slideshowInterval:Y,setSlideshowInterval:te,slideshowTransition:de,setSlideshowTransition:ae,filterCategory:B,setFilterCategory:Z,heroBgZoom:ge,setHeroBgZoom:Ie,heroBgRotation:he,setHeroBgRotation:Ue,heroBgBlur:De,setHeroBgBlur:Ze,heroBgPixelation:me,setHeroBgPixelation:$e,heroBgBlurType:Ce,setHeroBgBlurType:dt,heroBgFocal1:rt,setHeroBgFocal1:ct,heroBgFocal2:Pe,setHeroBgFocal2:Ke,heroBgFocal3:ot,setHeroBgFocal3:wt,heroBgFocal4:gt,setHeroBgFocal4:Le,heroBgPanEnabled:T,setHeroBgPanEnabled:$,heroBgPanSpeed:X,setHeroBgPanSpeed:ie,videoPlaybackSpeed:pe,setVideoPlaybackSpeed:Te,screenshots:_e=[],selectedTimezone:Be,setSelectedTimezone:be,customHolidayName:At,setCustomHolidayName:qe})=>{qr();const{registerRef:mt,isActive:vt}=La?.()||{registerRef:()=>{}},Xe=ar(o=>o.calendar?.customDays||[]),[It,V]=(0,a.useState)({date:"",reason:""}),[Q,re]=(0,a.useState)(""),G=(0,a.useRef)(null),[Ee,S]=(0,a.useState)(null);(0,a.useEffect)(()=>{const o=()=>{re("Конотоп"),setTimeout(()=>{r({name:"Конотоп",fullName:"Конотоп (UA)",lat:51.24,lon:33.2})},2e3)};return window.addEventListener("domino-auto-input-konotop",o),()=>window.removeEventListener("domino-auto-input-konotop",o)},[r]),(0,a.useEffect)(()=>{if(Ee!==null&&G.current){const o=G.current.querySelector(`[data-id="${Ee}"]`);o&&G.current.scrollTo({top:o.offsetTop,behavior:"smooth"})}},[Ee]);const[M,K]=(0,a.useState)([]),[ve,it]=(0,a.useState)(3),[ut,Me]=(0,a.useState)(!1),[We,Rt]=(0,a.useState)(""),[ht,xe]=(0,a.useState)(300),ce=1e3,[zt,Dt]=(0,a.useState)(0);(0,a.useEffect)(()=>{(async()=>{try{const k=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,J=await c.default.getItem(k);Dt(Number(J)||0)}catch(k){console.error("Failed to load hero uploaded count:",k)}})()},[l]);const[Bt,nt]=(0,a.useState)(!1),[_t,pn]=(0,a.useState)(!1),[kt,en]=(0,a.useState)(null);(0,a.useEffect)(()=>(Bt||kt||oe?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[Bt,kt]);const[oe,Ae]=(0,a.useState)(!1),[Qe,St]=(0,a.useState)(!0),[ue,Re]=(0,a.useState)("city"),[Ge,ze]=(0,a.useState)(!1),[Je,st]=(0,a.useState)(null),[lt,qt]=(0,a.useState)(null),[tn,Jn]=(0,a.useState)([]),[ln,fn]=(0,a.useState)([]),[Pn,nn]=(0,a.useState)(!1),[In,Wt]=(0,a.useState)(""),[$n,Ft]=(0,a.useState)(""),[Mt,Ht]=(0,a.useState)("rating"),[Gt,xt]=(0,a.useState)(1),wn=1,[$t,an]=(0,a.useState)("default"),[Lt,vn]=(0,a.useState)([]),[dn,et]=(0,a.useState)(0),[Jt,rn]=(0,a.useState)(!1),[s,m]=(0,a.useState)(""),H=o=>!Ma.some(k=>k.src===o),R=(0,a.useMemo)(()=>[...Ma,...D||[],...(_e||[]).map(o=>({src:o.image,name:`Скріншот: ${o.trackName}`,category:"Скріншоти"}))],[D,_e]),z=(0,a.useCallback)((o,k=1)=>{const J=Lt.findIndex(le=>le.src===o);if(y==="random"){(Gt===2?2:1)==2?g(o):x(o),J!==-1&&et(J);return}k===2?g(o):k===3?C(o):k===4?P(o):x(o)},[Gt,y,Lt,x,g,C,P]),N=(0,a.useCallback)(o=>{if(!o||o==="custom_input")return null;try{const k=new Date,J=new Intl.DateTimeFormat("uk",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:o}).format(k),le=parseInt(J.split(":")[0]);return{timeStr:J,isDay:le>=6&&le<20}}catch{return null}},[]),se=(0,a.useCallback)(o=>{if(o==="UTC")return 0;if(o==="custom_input")return 999;try{const k=new Date,J=k.toLocaleString("en-US",{timeZone:o}),le=new Date(J),ne=k.toLocaleString("en-US",{timeZone:"UTC"});return(le-new Date(ne))/6e4}catch{return 0}},[]),ye=(0,a.useMemo)(()=>{let o=[...Mr];return $t==="alpha"?o.sort((k,J)=>k.label.localeCompare(J.label)):$t==="offset"&&o.sort((k,J)=>se(k.value)-se(J.value)),o},[$t,se]);(0,a.useEffect)(()=>{if(y==="slideshow-2"&&p&&f){xt(1);const o=setInterval(()=>{xt(k=>k===1?2:1)},Y*1e3);return()=>clearInterval(o)}else if(y==="slideshow-3"&&p&&f&&F){xt(1);const o=setInterval(()=>{xt(k=>k===3?1:k+1)},Y*1e3);return()=>clearInterval(o)}else if(y==="slideshow-4"&&p&&f&&F&&L){xt(1);const o=setInterval(()=>{xt(k=>k===4?1:k+1)},Y*1e3);return()=>clearInterval(o)}else if(y==="random"){if(Lt.length===0&&R.length>0){const o=Wa(R);vn(o),et(0),o[0]&&x(o[0].src);return}if(Lt.length>0){const o=setInterval(()=>{et(k=>{const J=(k+1)%Lt.length;return xt(le=>{const ne=le===1?2:1;return ne===1?x(Lt[J].src):g(Lt[J].src),ne}),J})},Y*1e3);return()=>clearInterval(o)}}},[y,R,Y,Lt,x,g]),(0,a.useEffect)(()=>{if(y==="random"&&R.length>0&&Lt.length!==R.length){const o=Wa(R);vn(o),et(0),o[0]&&(z(o[0].src),xt(1))}},[R.length,y]),(0,a.useEffect)(()=>{Mr.some(o=>o.value===Be)?(m(""),rn(!1)):(m(Be),rn(!0))},[Be]);const bt=()=>{pn(!0),setTimeout(()=>{nt(!1),pn(!1)},350)},Yt=(0,a.useRef)(null),jt=[...(R||[]).filter(o=>{const k=B==="all"||(B==="custom"?H(o.src):o.category===B),J=(o.name||"").toLowerCase().includes(We.toLowerCase());return k&&J})].sort((o,k)=>{if(Mt==="az")return o.name.localeCompare(k.name);if(Mt==="za")return k.name.localeCompare(o.name);const J=O[o.src]||0,le=O[k.src]||0;return J!==le?le-J:o.name.localeCompare(k.name)}),Dn=jt.slice(0,ht),Mn=()=>{E(.3),Ie(1),Ue(0),Ze(0),ct({x:50,y:50}),Ke({x:50,y:50}),$(!1),ie(6),Te&&Te(1)},Zt=o=>{_(k=>{const J=((k[o]||0)+1)%3;return{...k,[o]:J}})},gn=(0,a.useRef)(null),Nn=async o=>{if(!o)return;const k=o.type.startsWith("image/"),J=o.type.startsWith("video/");if(!k&&!J)return;try{const ne=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`;if(Number(await c.default.getItem(ne)||0)>=ce){alert(`Ліміт досягнуто — не більше ${ce} карток на добу.`);return}}catch(ne){console.error("Failed to check hero daily limit:",ne)}if(J){if(o.size>20971520){alert("Відео занадто велике! Максимум 20мб для стабільності.");return}v(ne=>[{src:o,name:o.name,category:"Ваші відео"},...ne]),x(o);try{const ne=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,we=Number(await c.default.getItem(ne)||0)+1;await c.default.setItem(ne,we),Dt(we)}catch(ne){console.error("Failed to update hero uploaded count:",ne)}return}const le=new FileReader;le.onload=ne=>{const we=new Image;we.src=ne.target.result,we.onload=()=>{const ke=document.createElement("canvas"),pt=1200,Qn=pt/we.width;ke.width=pt,ke.height=we.height*Qn,ke.getContext("2d").drawImage(we,0,0,ke.width,ke.height),ke.toBlob(async _n=>{try{const on=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,yt=Number(await c.default.getItem(on)||0);if(yt>=ce){alert(`Ліміт досягнуто — не більше ${ce} карток на добу.`);return}const ea=yt+1;await c.default.setItem(on,ea),Dt(ea)}catch(on){console.error("Failed to update hero uploaded count:",on)}v(on=>[{src:_n,name:o.name,category:"Ваші картинки"},...on]),x(_n)},"image/jpeg",.7)}}},Rn=o=>{o.preventDefault()},Nt=o=>{o.preventDefault();const k=o.dataTransfer.files[0];Nn(k)},[ka,Xt]=(0,a.useState)([]),[Yn,Ve]=(0,a.useState)(!1),[kn,Ea]=(0,a.useState)(!1),[On,mn]=(0,a.useState)(""),[Ct,Sa]=(0,a.useState)(()=>{const o=localStorage.getItem("hero_cooldown_until");if(o){const k=parseInt(o,10),J=Date.now();return k>J?Math.ceil((k-J)/1e3):0}return 0}),ja=(0,a.useRef)(null),Vn="5104647d3e574f4a3f23c0aa092eb2b9";(0,a.useEffect)(()=>{const o=k=>{k.type==="mousedown"&&k.button!==0||k.type==="mousedown"&&(k.target===document.body||k.target===document.documentElement)||ja.current&&!ja.current.contains(k.target)&&Me(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const Fa=async(o,k,J=!1)=>{const le=k.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(le.length<2){K([]),Me(!1);return}const ne=Hr.filter(we=>we.name.toLowerCase().includes(le)||we.aliases.some(ke=>ke.toLowerCase().includes(le))).map(we=>({name:we.name,state:"Україна",country:"UA",lat:we.lat,lon:we.lon,isLocal:!0}));ne.length>0&&!J&&(K(ne),Me(!0));try{const we=await(await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(le)}&limit=${o}&appid=${Vn}`)).json(),ke=Array.isArray(we)?we:[];St(ke.length>=o),K(pt=>ag(J?pt:ne,ke)),Me(!0)}catch(we){console.error("Помилка API:",we),ne.length>0&&(K(ne),Me(!0))}};(0,a.useEffect)(()=>{c.default.getItem("pinnedLinks").then(o=>{o&&Jn(o)})},[]);const zn=o=>{Jn(k=>{let J;return k.includes(o)?J=k.filter(le=>le!==o):J=[o,...k].slice(0,5),c.default.setItem("pinnedLinks",J),J})},Zn=(0,a.useCallback)(async o=>{const k=o.trim();if(!k){fn([]);return}nn(!0);try{const J=await fetch(i0(k));if(!J.ok)throw new Error(`Wikipedia request failed: ${J.status}`);const le=((await J.json())?.query?.search||[]).map(ne=>({id:ne.pageid,title:ne.title,snippet:s0(ne.snippet),url:`https://uk.wikipedia.org/wiki/${encodeURIComponent(ne.title).replace(/%20/g,"_")}`}));fn(le)}catch(J){console.error("Wikipedia search error:",J),fn([])}finally{nn(!1)}},[]);(0,a.useEffect)(()=>{if(ue!=="links"){fn([]),nn(!1);return}const o=setTimeout(()=>{Zn(Q)},350);return()=>clearTimeout(o)},[ue,Q,Zn]),(0,a.useEffect)(()=>{it(3),St(!0);const o=setTimeout(()=>{Q&&Fa(3,Q,!1)},500);return()=>clearTimeout(o)},[Q]);const Bn=o=>{o.preventDefault(),o.stopPropagation();const k=ve+3;it(k),Fa(k,Q,!0)};(0,a.useEffect)(()=>{let o;return Ct>0&&(o=setInterval(()=>{Sa(k=>k<=1?(localStorage.removeItem("hero_cooldown_until"),0):k-1)},1e3)),()=>clearInterval(o)},[Ct]);const Ca=async()=>{if(Ct>0)return;const o=parseFloat(In),k=parseFloat($n);if(isNaN(o)||isNaN(k)){alert("Будь ласка, введіть правильні координати");return}if(o<-90||o>90){alert("Широта має бути від -90 до 90");return}if(k<-180||k>180){alert("Довгота має бути від -180 до +180");return}const J={name:"Обрана точка",state:`Широта: ${o}`,country:`Довгота: ${k}`,lat:o,lon:k,isManual:!0};try{mn("🔍 Шукаємо за вказаними координатами...");const le=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${o}&lon=${k}&limit=10&appid=${Vn}`)).json();if(le&&le.length>0){Xt([J,...le]),Ve(!0),mn("");return}Ea(!0),Ve(!0),Xt([J]),mn("Нічого не знайшли точно — шукаємо найближче...");const ne=1e4,we=Date.now();let ke=!1;e:for(let pt=1;pt<=15&&!ke;pt++){const Qn=[[o,Math.max(-180,Math.min(180,k+pt))],[o,Math.max(-180,Math.min(180,k-pt))],[Math.max(-90,Math.min(90,o+pt)),k],[Math.max(-90,Math.min(90,o-pt)),k]];for(const[_n,on]of Qn){if(Date.now()-we>=ne)break e;mn(`🔎 Перевіряємо: ±${pt}° (шир: ${_n.toFixed(1)}°, довг: ${on.toFixed(1)}°)...`);try{const yt=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${_n}&lon=${on}&limit=4&appid=${Vn}`)).json();if(yt&&yt.length>0){Xt([J,...yt]),mn(`✅ Знайдено поруч (відхилення ~${pt}°)`),ke=!0;break e}}catch{}}}if(!ke){const pt=((Date.now()-we)/1e3).toFixed(1);mn(`⚠️ Пошук завершено (${pt}с) — навколо немає населених пунктів. Можна додати точку вручну.`)}}catch(le){console.error("Помилка при пошуку за координатами:",le),Xt([J]),Ve(!0),mn("❌ Помилка запиту. Спробуйте ще раз.")}finally{Ea(!1)}},cn=o=>{Ct>0||(r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),Sa(10),localStorage.setItem("hero_cooldown_until",Date.now()+1e4),Wt(""),Ft(""),Ve(!1),Xt([]))},hn=o=>{Ct>0||(r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),Sa(9),localStorage.setItem("hero_cooldown_until",Date.now()+9e3),re(""),K([]),Me(!1))},Xn=(0,a.useMemo)(()=>{const o=new Date,k=o.toISOString().split("T")[0];if(l?.birthDate){const[,ne,we]=l.birthDate.split("-");if(o.getDate()===parseInt(we)&&o.getMonth()+1===parseInt(ne))return{active:!0,color:"#ff5252",label:"З ДНЕМ НАРОДЖЕННЯ! 🎂"}}const J=Xe.find(ne=>ne.date===k);if(J)return{active:!0,color:"#fff59d",label:J.reason.toUpperCase()+"! 🎉"};const le=o.getDay();return le===0||le===6?{active:!0,color:"#ffff00"}:{active:!1,color:"#fff59d",label:""}},[Xe,l]).active;return(0,a.useMemo)(()=>Xn?Array.from({length:25}).map((o,k)=>({id:k,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,x:`${(Math.random()-.5)*100}px`,y:`${(Math.random()-.5)*100}px`,duration:`${3+Math.random()*4}s`,delay:`${Math.random()*5}s`})):[],[Xn]),(0,e.jsxs)(Qf,{children:[(0,e.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none",visibility:"hidden"},children:(0,e.jsxs)("filter",{id:"pixelate-hero",x:"0",y:"0",width:"100%",height:"100%",children:[(0,e.jsx)("feFlood",{x:"0",y:"0",height:"1",width:"1"}),(0,e.jsx)("feComposite",{width:Math.max(1,me*2),height:Math.max(1,me*2)}),(0,e.jsx)("feTile",{result:"tiles"}),(0,e.jsx)("feComposite",{in:"SourceGraphic",in2:"tiles",operator:"in"}),(0,e.jsx)("feMorphology",{operator:"dilate",radius:me})]})}),(0,e.jsx)(Ga,{$isStickyBgMode:t,$image:p,$active:y==="static"||Gt===1,$transition:de,$zoom:ge,$rotation:he,$rotationScale:wn,$blur:De,$pixelation:me,$blurType:Ce,$focalX:rt?.x||50,$focalY:rt?.y||50,$panEnabled:T&&ge>1,$panSpeed:X,$videoStart:R.find(o=>o.src===p)?.start,$videoEnd:R.find(o=>o.src===p)?.end,$videoPlaybackSpeed:pe}),(0,e.jsx)(Ga,{$isStickyBgMode:t,$image:f,$active:(y==="slideshow-2"||y==="slideshow-3"||y==="slideshow-4"||y==="random")&&Gt===2,$transition:de,$zoom:ge,$rotation:he,$rotationScale:wn,$blur:De,$pixelation:me,$blurType:Ce,$focalX:Pe?.x||50,$focalY:Pe?.y||50,$panEnabled:T&&ge>1,$panSpeed:X,$videoStart:R.find(o=>o.src===f)?.start,$videoEnd:R.find(o=>o.src===f)?.end}),(0,e.jsx)(Ga,{$isStickyBgMode:t,$image:F,$active:(y==="slideshow-3"||y==="slideshow-4")&&Gt===3,$transition:de,$zoom:ge,$rotation:he,$rotationScale:wn,$blur:De,$pixelation:me,$blurType:Ce,$focalX:ot?.x||50,$focalY:ot?.y||50,$panEnabled:T&&ge>1,$panSpeed:X,$videoStart:R.find(o=>o.src===F)?.start,$videoEnd:R.find(o=>o.src===F)?.end}),(0,e.jsx)(Ga,{$isStickyBgMode:t,$image:L,$active:y==="slideshow-4"&&Gt===4,$transition:de,$zoom:ge,$rotation:he,$rotationScale:wn,$blur:De,$pixelation:me,$blurType:Ce,$focalX:gt?.x||50,$focalY:gt?.y||50,$panEnabled:T&&ge>1,$panSpeed:X,$videoStart:R.find(o=>o.src===L)?.start,$videoEnd:R.find(o=>o.src===L)?.end}),(0,e.jsx)(og,{$opacity:w,$isStickyBgMode:t}),(0,e.jsxs)(Tg,{ref:o=>mt("changeBgButton",o),onClick:()=>nt(!0),children:[(0,e.jsx)(Wi,{}),(0,e.jsx)("p",{style:{fontSize:"11px"},children:"Змінити фон?"})]}),(0,e.jsx)(eg,{$image:ul,$start:u}),(0,e.jsxs)(tg,{$start:u,children:[(0,e.jsx)(ig,{children:(0,e.jsx)(sg,{children:(0,e.jsx)(lg,{children:(0,e.jsxs)(dg,{ref:Yt,children:[n,(0,e.jsx)(Wn,{content:"Змінити часовий пояс",isDarkMode:d,children:(0,e.jsx)(cg,{ref:o=>mt("timezoneButton",o),onClick:()=>Ae(!oe),"aria-label":"Змінити часовий пояс",children:(0,e.jsx)(qi,{})})}),oe&&(0,e0.createPortal)((0,e.jsxs)(ug,{children:[(0,e.jsxs)(mg,{children:[(0,e.jsx)(xg,{type:"button",onClick:()=>Ae(!1),"aria-label":"Закрити список часових поясів",children:"×"}),(0,e.jsx)(hg,{children:"Часовий пояс"})]}),(0,e.jsxs)(bg,{children:[(0,e.jsx)(Si,{$active:$t==="default",onClick:()=>an("default"),children:"За замовчуванням"}),(0,e.jsx)(Si,{$active:$t==="offset",onClick:()=>an("offset"),children:"UTC +/-"})]}),(0,e.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"0 5px 10px"},children:[ye.map(o=>{const k=Be===o.value||o.value==="custom_input"&&Jt,J=N(o.value);return(0,e.jsx)(pg,{$selected:k,onClick:()=>{o.value==="custom_input"?(rn(!0),Mr.some(le=>le.value===Be)?m(""):m(Be)):(rn(!1),be(o.value),c.default.setItem("selected_timezone",o.value),Ae(!1))},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,e.jsx)("span",{children:o.label}),J&&(0,e.jsxs)("span",{style:{fontSize:"16px",opacity:.9,display:"flex",gap:"10px",whiteSpace:"nowrap",marginLeft:"12px",color:J.isDay?"#ffd54f":"#90caf9"},children:[J.isDay?(0,e.jsx)(sa,{}):(0,e.jsx)(ia,{}),(0,e.jsx)("p",{children:J.timeStr})]})]})},o.value)}),Jt&&(0,e.jsx)("div",{style:{padding:"12px 0"},children:(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)("input",{type:"text",value:s,onChange:o=>m(o.target.value),placeholder:"Наприклад: Europe/Warsaw",style:{width:"100%",padding:"10px 110px 10px 10px",borderRadius:"5px",border:"1px solid #ffb36c",background:"#111",color:"#fff",fontSize:"14px",boxSizing:"border-box"}}),(0,e.jsx)("button",{type:"button",onClick:()=>{if(s.trim())try{Intl.DateTimeFormat("en",{timeZone:s.trim()}),be(s.trim()),c.default.setItem("selected_timezone",s.trim()),Ae(!1)}catch{wi("Невірний формат часового поясу. Спробуйте, наприклад, 'Europe/Kyiv' або 'America/New_York'.",d)}else wi("Будь ласка, введіть часовий пояс.",d)},style:{position:"absolute",right:"4px",top:"4px",bottom:"4px",padding:"0 12px",background:"#ffb36c",border:"none",borderRadius:"3px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",color:"#1e1e1e"},children:"Застосувати"})]})})]})]}),document.body)]})})})}),(0,e.jsx)(fg,{ref:ja,children:ue==="city"?(0,e.jsx)(ji,{children:(0,e.jsxs)(Ci,{children:[(0,e.jsxs)(Sr,{children:[(0,e.jsx)(Wn,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(jr,{onClick:()=>ze(o=>!o),"aria-label":"Вибрати режим пошуку",children:(0,e.jsx)(Va,{})})}),Ge&&(0,e.jsxs)(Cr,{children:[(0,e.jsxs)(Cn,{$active:ue==="city",onClick:()=>{Re("city"),ze(!1),Wt(""),Ft(""),K([]),Me(!1)},children:[(0,e.jsx)(Va,{})," За назвою міста"]}),(0,e.jsxs)(Cn,{$active:ue==="coordinates",onClick:()=>{Re("coordinates"),ze(!1),re(""),K([]),Me(!1)},children:[(0,e.jsx)($a,{})," Координати"]}),(0,e.jsxs)(Cn,{$active:ue==="links",onClick:()=>{Re("links"),ze(!1),re(""),K([]),Me(!1),S(null)},children:[(0,e.jsx)(Na,{}),"  Посилання"]})]})]}),(0,e.jsx)(Ti,{ref:o=>mt("heroInput",o),value:Q,$isDarkMode:d,onChange:o=>{re(o.target.value),window.dispatchEvent(new CustomEvent("domino-hero-input-change",{detail:{value:o.target.value}}))},onFocus:()=>M.length>0&&Me(!0),placeholder:Ct>0?`Зачекайте ${Ct} сек...`:"Уведіть місто, село.",disabled:Ct>0,type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:!1,name:"hero-city-search",inputMode:"search",enterKeyHint:"search","aria-label":"Пошук міста","data-form-type":"other","data-lpignore":"true"}),ut&&M.length>0&&(0,e.jsxs)(Ai,{children:[M.map((o,k)=>(0,e.jsxs)(Ii,{onClick:()=>hn(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#666"},children:[o.lat.toFixed(2),"°, ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${k}`)),Qe?(0,e.jsx)(Ar,{onClick:Bn,children:"⬇ Завантажити ще варіанти"}):(0,e.jsx)(Ar,{disabled:!0,children:"Кінець списку"})]}),(0,e.jsx)(Tr,{onClick:()=>{Ct===0&&M[0]&&hn(M[0])},disabled:Ct>0,children:Ct>0?Ct:"⌕"})]})}):ue==="links"?(0,e.jsx)(ji,{children:(0,e.jsxs)(Ci,{children:[(0,e.jsxs)(Sr,{children:[(0,e.jsx)(Wn,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(jr,{onClick:()=>ze(o=>!o),"aria-label":"Вибрати режим пошуку",children:(0,e.jsx)(Na,{})})}),Ge&&(0,e.jsxs)(Cr,{children:[(0,e.jsxs)(Cn,{$active:ue==="city",onClick:()=>{Re("city"),ze(!1),Wt(""),Ft(""),K([]),Me(!1)},children:[(0,e.jsx)(Va,{})," За назвою міста"]}),(0,e.jsxs)(Cn,{$active:ue==="coordinates",onClick:()=>{Re("coordinates"),ze(!1),re(""),K([]),Me(!1)},children:[(0,e.jsx)($a,{})," Координати"]}),(0,e.jsxs)(Cn,{$active:ue==="links",onClick:()=>{Re("links"),ze(!1),re(""),K([]),Me(!1),S(null)},children:[(0,e.jsx)(Na,{})," Посилання"]})]})]}),(0,e.jsxs)("div",{style:{position:"relative",flex:1},children:[(0,e.jsx)(Ti,{value:Q,onChange:o=>re(o.target.value),placeholder:"Корисні сайти, ігри, статті Вікіпедії...",type:"text",autoComplete:"off"}),Q&&(0,e.jsx)(Wn,{content:"Очищення пошуковика. Його зробив Доміно!",isDarkMode:d,children:(0,e.jsx)(yg,{onClick:()=>re(""),"aria-label":"Очистити",type:"button",children:"×"})})]}),(0,e.jsx)(Tr,{onClick:()=>{Q.trim()&&window.open("https://www.google.com/search?q="+encodeURIComponent(Q),"_blank")},children:"⌕"}),Q.trim()!==""||tn.length>0?(0,e.jsxs)(wg,{ref:G,$hasExpanded:Ee!==null,children:[ri.filter(o=>{if(Q.trim()==="")return tn.includes(o.id);const k=Q.toLowerCase(),J=o.title.toLowerCase().includes(k)||o.snippet.toLowerCase().includes(k),le=o.tags&&o.tags.some(ne=>ne.toLowerCase().includes(k));return J||le}).map(o=>(0,e.jsxs)(Di,{"data-id":o.id,children:[(0,e.jsx)(Mi,{onClick:()=>S(Ee===o.id?null:o.id),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"2px",width:"100%"},children:[(0,e.jsx)("span",{style:{flex:1,fontSize:"13px"},children:o.title}),(0,e.jsx)("button",{onClick:k=>{k.stopPropagation(),window.open(o.url,"_blank")},style:{padding:"3px 10px",background:"#ffb36c",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",color:"#000",fontSize:"12px",whiteSpace:"nowrap"},children:o.buttonText||"Відкрити"}),(0,e.jsx)("button",{onClick:k=>{k.stopPropagation(),zn(o.id)},title:tn.includes(o.id)?"Відкріпити":"Закріпити",style:{padding:"0",background:"transparent",border:"none",cursor:"pointer",fontSize:"16px"},children:tn.includes(o.id)?(0,e.jsx)(ql,{}):(0,e.jsx)($d,{})}),(0,e.jsx)("span",{children:Ee===o.id?"▲":"▼"})]})}),(0,e.jsxs)(Ri,{$expanded:Ee===o.id,children:[o.tags&&(0,e.jsx)(vg,{children:o.tags.map(k=>(0,e.jsxs)(kg,{children:["#",k]},k))}),(o.images&&o.images.length>0||o.youtubeTrailer)&&(0,e.jsx)(jg,{images:o.images||[],youtubeTrailer:o.youtubeTrailer,setFullscreenImage:st,imageMap:Og,setFullscreenVideo:qt}),(0,e.jsx)("div",{children:o.snippet})]})]},o.id)),ln.map(o=>(0,e.jsxs)(Di,{"data-id":o.id,children:[(0,e.jsx)(Mi,{onClick:()=>S(Ee===o.id?null:o.id),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("span",{style:{flex:1},children:o.title}),(0,e.jsx)("button",{onClick:k=>{k.stopPropagation(),window.open(o.url,"_blank")},style:{padding:"3px 10px",background:"#00bfff",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",color:"#000",fontSize:"12px",whiteSpace:"nowrap"},children:"Вікіпедія"}),(0,e.jsx)("span",{style:{marginLeft:"10px"},children:Ee===o.id?"▲":"▼"})]})}),(0,e.jsx)(Ri,{$expanded:Ee===o.id,children:(0,e.jsx)("div",{children:o.snippet})})]},o.id)),Pn&&(0,e.jsx)("div",{style:{padding:"10px",color:"#333"},children:"Завантажую результати Вікіпедії..."}),ri.filter(o=>{const k=Q.toLowerCase(),J=o.title.toLowerCase().includes(k)||o.snippet.toLowerCase().includes(k),le=o.tags&&o.tags.some(ne=>ne.toLowerCase().includes(k));return J||le}).length===0&&Q.trim()!==""&&ln.length===0&&!Pn&&(0,e.jsxs)("div",{style:{padding:"15px",textAlign:"center",color:"#333"},children:["Нічого не знайдено в закладках та Вікіпедії. ",(0,e.jsx)("br",{}),(0,e.jsx)("button",{onClick:()=>window.open("https://www.google.com/search?q="+encodeURIComponent(Q),"_blank"),style:{marginTop:"10px",padding:"5px 10px",background:"#ffb36c",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",color:"#000"},children:"Шукати в Google"})]})]}):null]})}):(0,e.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"5px",position:"relative"},children:[(0,e.jsxs)(gg,{style:{alignItems:"flex-start"},children:[(0,e.jsxs)(Sr,{style:{alignSelf:"flex-start"},children:[(0,e.jsx)(Wn,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(jr,{onClick:()=>ze(o=>!o),"aria-label":"Вибрати режим пошуку",style:{borderRadius:"8px 0 0 8px",height:"30px"},children:(0,e.jsx)($a,{})})}),Ge&&(0,e.jsxs)(Cr,{children:[(0,e.jsxs)(Cn,{$active:ue==="city",onClick:()=>{Re("city"),ze(!1),Wt(""),Ft(""),K([]),Me(!1)},children:[(0,e.jsx)(Va,{}),"  За назвою міста"]}),(0,e.jsxs)(Cn,{$active:ue==="coordinates",onClick:()=>{Re("coordinates"),ze(!1),re(""),K([]),Me(!1)},children:[(0,e.jsx)($a,{}),"  Координати"]}),(0,e.jsxs)(Cn,{$active:ue==="links",onClick:()=>{Re("links"),ze(!1),re(""),K([]),Me(!1),S(null)},children:[(0,e.jsx)(Na,{}),"   Посилання"]})]})]}),(0,e.jsx)(ki,{children:(0,e.jsx)("input",{type:"number",value:In,onChange:o=>Wt(o.target.value),placeholder:"Широта: Від -90° до +90°",$isDarkMode:d,disabled:Ct>0||kn,min:"-90",max:"90",step:"0.01"})}),(0,e.jsx)(ki,{children:(0,e.jsx)("input",{type:"number",value:$n,onChange:o=>Ft(o.target.value),$isDarkMode:d,placeholder:"Довгота: Від -180° до +180°",disabled:Ct>0||kn,min:"-180",max:"180",step:"0.01"})}),(0,e.jsx)(Tr,{onClick:Ca,disabled:Ct>0||kn,style:{alignSelf:"flex-start"},children:Ct>0?Ct:kn?"…":"⌕"})]}),On&&(0,e.jsxs)("div",{style:{color:On.startsWith("✅")?"#00e676":On.startsWith("❌")?"#ff5252":On.startsWith("⚠️")?"#ffb36c":"#00eaff",fontSize:"11px",fontWeight:"bold",textAlign:"center",padding:"4px 10px",background:"rgba(0,0,0,0.65)",borderRadius:"6px",maxWidth:"340px",margin:"4px auto 0",backdropFilter:"blur(4px)",lineHeight:1.4},children:[kn&&(0,e.jsx)("span",{style:{marginRight:"6px"},children:"⟳"}),On]}),Yn&&(0,e.jsxs)(Ai,{style:{width:"auto",minWidth:"300px",marginTop:"6px",left:"50%",transform:"translateX(-50%)",position:"absolute"},children:[(0,e.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"6px",textAlign:"center",fontSize:"12px"},children:kn?"🔄 Шукаємо поруч…":ka.length>1?"📍 Знайдено поруч з координатами:":"📍 Лише точка за координатами (міст не знайдено)"}),ka.map((o,k)=>(0,e.jsxs)(Ii,{onClick:()=>cn(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#666"},children:[o.lat.toFixed(2),"°, ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${k}`)),(0,e.jsx)("button",{onClick:()=>{Ve(!1),Xt([]),mn("")},style:{width:"100%",padding:"8px",background:"#f0f0f0",border:"1px solid #ccc",borderRadius:"8px",cursor:"pointer",marginTop:"10px",fontSize:"12px"},children:"✕ Закрити"})]})]})}),(0,e.jsx)("div",{style:{marginTop:"250px",zIndex:90},children:(0,e.jsx)(wl,{user:l,isDarkMode:d,isStickyBgMode:t})})]}),Bt&&(0,e.jsx)(Ag,{$isClosing:_t,onClick:bt,children:(0,e.jsxs)(Ig,{$isClosing:_t,onClick:o=>o.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1px"},children:[(0,e.jsx)("h2",{style:{color:"#fff",margin:0,fontSize:"14px",color:"orange"},children:"Налаштування фону, вигляду"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"1px"},children:[(0,e.jsx)(Pi,{onClick:Mn,style:{padding:"4px 8px",fontSize:"12px",height:"auto"},children:"Скинути"}),(0,e.jsx)(Pi,{onClick:bt,style:{padding:"4px 8px",fontSize:"16px",height:"auto"},children:"✖"})]})]}),(0,e.jsxs)(Rg,{children:[(0,e.jsxs)(yn,{children:[(0,e.jsx)("label",{children:"🎞️ Режим зміни фону:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",width:"100%"},children:[(0,e.jsxs)("select",{value:y,onChange:o=>{if(I(o.target.value),o.target.value==="random"){const k=Wa(R);vn(k),et(0),k[0]&&z(k[0].src)}xt(1)},style:{background:"#000",color:"#fff",fontSize:"11px",border:"1px solid #555",borderRadius:"2px",padding:"1px",flex:1},children:[(0,e.jsx)("option",{value:"static",children:"Статичний (1 фото)"}),(0,e.jsx)("option",{value:"slideshow-2",children:"Слайд-шоу (2 фото)"}),(0,e.jsx)("option",{value:"slideshow-3",children:"Слайд-шоу (3 фото)"}),(0,e.jsx)("option",{value:"slideshow-4",children:"Слайд-шоу (4 фото)"}),(0,e.jsx)("option",{value:"random",children:"Випадковий (усі фото)"})]}),y==="random"&&(0,e.jsx)(Wn,{content:"Перемішати та скинути чергу",isDarkMode:d,children:(0,e.jsx)("button",{onClick:()=>{const o=Wa(R);vn(o),et(0),o[0]&&(z(o[0].src),xt(1))},"aria-label":"Перемішати та скинути чергу",style:{background:"#ffb36c",border:"none",borderRadius:"2px",color:"#000",padding:"1px 8px",cursor:"pointer",fontWeight:"bold",fontSize:"11px",whiteSpace:"nowrap"},children:"Скинути"})})]})]}),(0,e.jsxs)(yn,{children:[(0,e.jsxs)("label",{children:["Затемнення: ",(w*100).toFixed(0),"%"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:w,onChange:o=>E(parseFloat(o.target.value))})]}),(0,e.jsxs)(yn,{children:[(0,e.jsxs)("label",{children:["Наближення: ",ge.toFixed(2),"x"]}),(0,e.jsx)("input",{type:"range",min:"1",max:"2",step:"0.01",value:ge,onChange:o=>Ie(parseFloat(o.target.value))})]}),(0,e.jsxs)(yn,{children:[(0,e.jsx)("label",{children:"🎭 Ефект фокусу:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"3px"},children:[(0,e.jsx)(vi,{$active:Ce==="smooth",onClick:()=>{dt("smooth"),$e(0)},style:{flex:1,fontSize:"10px",padding:"2px"},children:"Плавне"}),(0,e.jsx)(vi,{$active:Ce==="pixelated",onClick:()=>dt("pixelated"),style:{flex:1,fontSize:"10px",padding:"2px"},children:"Піксельне"})]})]}),(0,e.jsxs)(yn,{children:[(0,e.jsxs)("label",{children:["🔄 Розворот: ",he,"°"]}),(0,e.jsx)("input",{type:"range",min:"-180",max:"180",step:"1",value:he,onChange:o=>Ue(parseInt(o.target.value))})]}),(0,e.jsxs)(yn,{children:[(0,e.jsxs)("label",{children:["Розмиття: ",De.toFixed(1),"px"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.5",value:De,onChange:o=>Ze(parseFloat(o.target.value))})]}),(0,e.jsxs)(yn,{style:{opacity:Ce==="pixelated"?1:.4},children:[(0,e.jsxs)("label",{children:["Пікселізація: ",me.toFixed(1)]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.2",value:me,disabled:Ce!=="pixelated",onChange:o=>$e(parseFloat(o.target.value))})]})]}),(y==="slideshow-2"||y==="slideshow-3"||y==="slideshow-4"||y==="random")&&(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsx)(Dr,{}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3px"},children:[(0,e.jsxs)(yn,{children:[(0,e.jsxs)("label",{children:["Інтервал:"," ",Y>=60?`${Math.floor(Y/60)}хв ${Y%60>0?Y%60+"с":""}`:`${Y}с`]}),(0,e.jsx)("input",{type:"range",min:"4",max:"300",step:"1",value:Y,onChange:o=>te(parseInt(o.target.value))})]}),(0,e.jsxs)(yn,{children:[(0,e.jsxs)("label",{children:["Перехід: ",de,"с"]}),(0,e.jsx)("input",{type:"range",min:"0.5",max:"1",step:"0.1",value:de,onChange:o=>ae(parseFloat(o.target.value))})]}),(0,e.jsxs)(yn,{children:[(0,e.jsxs)("label",{children:["Швидкість відео: ",pe,"x"]}),(0,e.jsx)("input",{type:"range",min:"0.25",max:"2",step:"0.25",value:pe,onChange:o=>Te(parseFloat(o.target.value))})]})]})]}),(0,e.jsx)(Dr,{}),(0,e.jsx)(Ng,{children:"Бібліотека зображень"}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"5px"},children:[(0,e.jsx)($g,{placeholder:"Пошук картин за назвою...",value:We,onChange:o=>{Rt(o.target.value),xe(300)}}),(0,e.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px"},children:"Категорія:"}),(0,e.jsxs)("select",{value:B,onChange:o=>Z(o.target.value),style:{background:"#000",fontSize:"11px",color:"#fff",border:"1px solid #555",borderRadius:"2px",padding:"1px"},children:[(0,e.jsx)("option",{value:"all",children:"Усі"}),(0,e.jsx)("option",{value:"Дракони",children:"Дракони"}),(0,e.jsx)("option",{value:"Стихія",children:"Стихія та тварини"}),(0,e.jsx)("option",{value:"Локації",children:"Локації і предмети"}),(0,e.jsx)("option",{value:"Фентезі",children:"Фентезі"}),(0,e.jsx)("option",{value:"Хоррор",children:"Хоррор"}),(0,e.jsx)("option",{value:"Майбутне",children:"Песимізм"}),(0,e.jsx)("option",{value:"Скріншоти",children:"Скріншоти"}),(0,e.jsx)("option",{value:"custom",children:"Ваші завантажені"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px"},children:"Сортувати:"}),(0,e.jsxs)("select",{value:Mt,onChange:o=>Ht(o.target.value),style:{background:"#000",color:"#fff",border:"1px solid #555",borderRadius:"2px",fontSize:"11px",padding:"1px"},children:[(0,e.jsx)("option",{value:"rating",children:"За рейтингом"}),(0,e.jsx)("option",{value:"az",children:"Назва А-Я"}),(0,e.jsx)("option",{value:"za",children:"Назва Я-А"})]})]})]})]}),(0,e.jsx)(zg,{children:Dn.map((o,k)=>{const J=O[o.src]||0,le=Lt.findIndex(ne=>ne.src===o.src);return(0,e.jsxs)(Lg,{$active:p===o.src||f===o.src,children:[(0,e.jsxs)(Fg,{children:[(0,e.jsx)(Fi,{$color:J===2?"gold":J===1?"red":"white",onClick:()=>Zt(o.src),children:J===2?"💛":J===1?"❤️":"🤍"}),o.description&&(0,e.jsx)(Wn,{content:"Детальний опис картини",isDarkMode:d,children:(0,e.jsx)(Fi,{$color:"#aef","aria-label":"Детальний опис картини",onClick:ne=>{ne.stopPropagation(),en({name:o.name,text:o.description,src:o.src,author:o.author,source:o.source})},style:{fontSize:"18px",background:"rgb(7, 7, 7)",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},children:"?"})})]}),H(o.src)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Mg,{onClick:ne=>{ne.stopPropagation();const we=window.prompt("Введіть нову назву для цих шпалер:",o.name);we&&v(ke=>ke.map(pt=>pt.src===o.src?{...pt,name:we}:pt))},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(Dg,{onClick:ne=>{ne.stopPropagation(),window.confirm(`Видалити шпалери "${o.name}"?`)&&(v(we=>we.filter(ke=>ke.src!==o.src)),_(we=>{const ke={...we};return delete ke[o.src],ke}),p===o.src&&x("/assets/fog-Cew27ml4.webp"),f===o.src&&g("/assets/fog-Cew27ml4.webp"))},"aria-label":"Видалити",children:"×"})]}),o.author&&(0,e.jsxs)(kl,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:o.author}),o.source&&(0,e.jsx)("div",{children:o.source})]}),(0,e.jsxs)(Sl,{$hasSlots:y==="slideshow-2"||y==="slideshow-3"||y==="slideshow-4",children:[y==="random"&&le!==-1&&(0,e.jsxs)("span",{style:{color:le===dn?"#6cffe4":"#ffb36c",marginRight:"6px",fontWeight:"bold",textShadow:le===dn?"0 0 8px #6cffe4":"none"},children:["#",le+1," ",le===dn&&"(Зараз)"]}),o.name]}),Kr(o.src)?(0,e.jsx)("video",{src:o.src,muted:!0,style:{width:"100%",aspectRatio:"3/2",objectFit:"cover",cursor:"pointer"},onMouseEnter:ne=>ne.target.play(),onMouseLeave:ne=>{ne.target.pause(),ne.target.currentTime=0},onClick:()=>z(o.src)}):(0,e.jsx)(Eg,{src:o.src,loading:"lazy",onClick:()=>z(o.src),title:o.name}),y==="slideshow-2"&&(0,e.jsxs)(Ir,{children:[(0,e.jsx)(Tn,{$active:p===o.src,onClick:()=>z(o.src,1),children:"Слот 1"}),(0,e.jsx)(Tn,{$active:f===o.src,onClick:()=>z(o.src,2),children:"Слот 2"})]}),y==="slideshow-3"&&(0,e.jsxs)(Ir,{children:[(0,e.jsx)(Tn,{$active:p===o.src,onClick:()=>z(o.src,1),children:"Слот 1"}),(0,e.jsx)(Tn,{$active:f===o.src,onClick:()=>z(o.src,2),children:"Слот 2"}),(0,e.jsx)(Tn,{$active:F===o.src,onClick:()=>z(o.src,3),children:"Слот 3"})]}),y==="slideshow-4"&&(0,e.jsxs)(Ir,{children:[(0,e.jsx)(Tn,{$active:p===o.src,onClick:()=>z(o.src,1),children:"Слот 1"}),(0,e.jsx)(Tn,{$active:f===o.src,onClick:()=>z(o.src,2),children:"Слот 2"}),(0,e.jsx)(Tn,{$active:F===o.src,onClick:()=>z(o.src,3),children:"Слот 3"}),(0,e.jsx)(Tn,{$active:L===o.src,onClick:()=>z(o.src,4),children:"Слот 4"})]})]},k)})}),jt.length>ht&&(0,e.jsx)(Ar,{onClick:()=>xe(o=>o+300),children:"Завантажити ще"}),(0,e.jsx)(Dr,{}),(0,e.jsxs)(Pg,{onDragOver:Rn,onDrop:Nt,onClick:()=>gn.current.click(),children:["Перетягніть сюди картинку(відео) або натисніть",(0,e.jsx)("input",{type:"file",ref:gn,hidden:!0,accept:"image/*,video/*",onChange:o=>Nn(o.target.files[0])})]})]})}),kt&&(0,e.jsx)("div",{onClick:()=>en(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"5px"},children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{background:"#111",border:"2px solid #ffb36c",borderRadius:"14px",width:"90%",maxWidth:"900px",height:"80vh",maxHeight:"650px",color:"#fff",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 50px rgba(0,0,0,0.9)"},children:[Kr(kt.src)?(0,e.jsx)("video",{src:kt.src,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}):(0,e.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${kt.src})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:1}}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",zIndex:2}}),(0,e.jsxs)("div",{style:{position:"relative",zIndex:3,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",padding:"10px",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[(0,e.jsx)("h3",{style:{color:"#ffb36c",margin:0,fontSize:"20px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.9)"},children:kt.name}),(0,e.jsx)("button",{onClick:()=>en(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"5px",width:"30px",height:"30px",color:"#fff",fontSize:"30px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:o=>{o.currentTarget.style.background="rgba(255,0,0,0.7)",o.currentTarget.style.borderColor="red"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(0,0,0,0.6)",o.currentTarget.style.borderColor="rgba(255,255,255,0.3)"},children:"×"})]}),(0,e.jsx)("div",{style:{flex:1,overflowY:"auto",margin:"5px 0",paddingRight:"5px"},children:(0,e.jsx)("p",{style:{lineHeight:1.8,whiteSpace:"pre-wrap",fontSize:"15px",margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.95)",color:"#f5f5f5",borderRadius:"8px",backdropFilter:"blur(2px)"},children:kt.text})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Автор: ",kt.author||"Невідомий"]}),kt.source&&(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Джерело: ",kt.source]})]})]})]})}),Je&&(0,e.jsx)(Ei,{onClick:()=>st(null),children:(0,e.jsx)(Cg,{src:Je,alt:"Fullscreen"})}),lt&&(0,e.jsx)(Ei,{onClick:()=>qt(null),children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{position:"relative",width:"90%",maxWidth:"800px",aspectRatio:"16/9",background:"#000",borderRadius:"8px",overflow:"hidden",boxShadow:"0 0 20px rgba(255,255,255,0.2)"},children:[(0,e.jsx)("iframe",{src:lt.includes("embed")?`${lt}?autoplay=1`:`https://www.youtube.com/embed/${vl(lt)}?autoplay=1`,"aria-label":"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}),(0,e.jsx)("button",{onClick:()=>qt(null),style:{position:"absolute",top:"10px",right:"10px",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:"30px",height:"30px",color:"#fff",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:"×"})]})})]})},Ja=t=>{if(typeof t=="string")return t;if(t&&typeof t=="object"){const n=t.type?.name||"";if(n==="FaSun")return"☀️";if(n==="BsMoonStarsFill")return"🌙";if(n==="FaCloudMoon"||n==="FaSmog")return"☁️";if(n==="IoRainy"||n==="LiaCloudSunRainSolid"||n==="FaCloudMoonRain"||n==="LiaCloudMoonRainSolid")return"🌧️";if(n==="GiSnowing")return"❄️";if(n==="IoThunderstorm")return"⛈️";if(t.props?.children){const r=t.props.children;if(typeof r=="string")return r;if(Array.isArray(r))return r.filter(Boolean).map(String).join("")}}return"☁️"},zr=t=>Array.isArray(t)?t.map(n=>{const r={...n},u=l=>{if(Array.isArray(l))return l.map(d=>u(d));if(l&&typeof l=="object"){if(l.$$typeof&&typeof l.$$typeof=="symbol")return Ja(l);const d={};return Object.entries(l).forEach(([b,p])=>{d[b]=u(p)}),d}return l};return Object.entries(r).forEach(([l,d])=>{(l==="current"||l==="hourly"||l==="daily16"||l==="seasonal")&&(r[l]=u(d))}),r.current&&(r.current.iconSymbol=Ja(r.current.iconSymbol??r.current.iconPlaceholder),r.current.iconPlaceholder=r.current.iconPlaceholder??r.current.iconSymbol??"☁️"),Array.isArray(r.hourly)&&(r.hourly=r.hourly.map(l=>({...l,iconSymbol:Ja(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.daily16)&&(r.daily16=r.daily16.map(l=>({...l,iconSymbol:Ja(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.seasonal)&&(r.seasonal=r.seasonal.map(l=>({...l}))),r}):[],Vg=Fe`
  from { opacity: 0; }
  to { opacity: 1; }
`,Bg=Fe`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`,_g=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Vg} 0.2s ease-out;
`,Hg=i.div`
  background: ${t=>t.$isStickyBgMode?"rgba(30, 30, 46, 0.85)":"#1e1e2e"};
  backdrop-filter: ${t=>t.$isStickyBgMode?"blur(10px)":"none"};
  color: #cdd6f4;
  border-radius: 16px;
  border: 2px solid #ffb36c;
  width: 90%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0;
  animation: ${Bg} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,Ug=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`,Kg=i.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,qg=i.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`,Wg=i.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`,Gg=i.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Jg=i.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`,$i=i.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 108, 0.3);
`,Ya=i.button`
  flex: 1;
  background: ${t=>t.$active?"rgba(255, 179, 108, 0.2)":"transparent"};
  color: ${t=>t.$active?"#ffb36c":"#a6adc8"};
  border: none;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 179, 108, 0.1);
  }
`,Yg=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  transition: background 0.15s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`,Zg=i.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`,Lr=i.input`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 179, 108, 0.3);
  color: #cdd6f4;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-family: monospace;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`,Ni=i.input`
  width: 36px;
  height: 30px;
  border: 2px solid rgba(255, 179, 108, 0.4);
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  background: none;
  &::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,Xg=i.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`,jl=i.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`,Qg=i(jl)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`,em=i(jl)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,Oi=Object.values({color:{label:"Колір тексту",cssProp:"color",type:"color",desc:"Змінює колір шрифту елемента"},backgroundColor:{label:"Колір фону",cssProp:"backgroundColor",type:"color",desc:"Змінює фоновий колір елемента"},border:{label:"Рамка (бордюр)",cssProp:"border",type:"border",desc:"Налаштування межі елемента"},borderRadius:{label:"Заокруглення кутів",cssProp:"borderRadius",type:"text",placeholder:"напр., 8px або 50%",desc:"Радіус заокруглення рамки"},boxShadow:{label:"Тінь елемента",cssProp:"boxShadow",type:"text",placeholder:"напр., 0 4px 10px rgba(0,0,0,0.3)",desc:"Додає ефект тіні навколо елемента"},textShadow:{label:"Тінь тексту",cssProp:"textShadow",type:"text",placeholder:"напр., 1px 1px 2px #000",desc:"Ефект тіні для тексту"},backdropFilter:{label:"Розмиття фону",cssProp:"backdropFilter",type:"text",placeholder:"напр., blur(10px)",desc:"Ефекти для фону (скляний ефект)"},filter:{label:"Фільтри",cssProp:"filter",type:"text",placeholder:"напр., grayscale(50%)",desc:"Ефекти зображення/кольору"},outline:{label:"Контур",cssProp:"outline",type:"text",placeholder:"напр., 2px solid red",desc:"Зовнішня рамка елемента"},textDecoration:{label:"Декорування тексту",cssProp:"textDecoration",type:"text",placeholder:"напр., underline або none",desc:"Підкреслення, закреслення тощо"},cursor:{label:"Курсор миші",cssProp:"cursor",type:"cursor",desc:"Вигляд курсора при наведенні"}}),Vi=t=>{if(!t||t==="transparent"||t==="rgba(0, 0, 0, 0)")return"#000000";if(t.startsWith("#"))return t;const n=t.match(/\d+/g);return!n||n.length<3?"#000000":"#"+n.slice(0,3).map(r=>parseInt(r).toString(16).padStart(2,"0")).join("")},tm=t=>{if(!t||t==="none")return{width:"0px",style:"none",color:"#000000"};const n=t.split(/\s+/);let r="1px",u="solid",l="#000000";return n.forEach(d=>{/^\d+(px|em|rem|%|pt)$/.test(d)||/^\d+$/.test(d)?r=d.includes("px")||d.includes("em")||d.includes("rem")||d.includes("%")||d.includes("pt")?d:d+"px":["solid","double","dashed","dotted","groove","ridge","inset","outset","none"].includes(d)?u=d:(d.startsWith("#")||d.startsWith("rgb")||d.startsWith("hsl")||/^[a-zA-Z]+$/.test(d))&&(l=d)}),{width:r,style:u,color:l}},Za=(t,n,r)=>n==="none"||t==="0px"?"none":`${t} ${n} ${r}`,nm=({targetElement:t,onClose:n,isStickyBgMode:r})=>{const{applyStyle:u,getOverridesForElement:l,isDarkMode:d}=Xr(),[b,p]=(0,a.useState)(d?"dark":"light"),[x,f]=(0,a.useState)("default"),g=`${b}_${x}`,F=t?.tagName?.toLowerCase()||"?",C=t?ip(t):"",[L,P]=(0,a.useState)({});(0,a.useEffect)(()=>{if(C){const E=l(C);P(JSON.parse(JSON.stringify(E)))}},[C,l]);const D=(E,O)=>{P(_=>({..._,[g]:{..._[g]||{},[E]:O}}))},v=()=>{const E=l(C);["light_default","light_hover","dark_default","dark_hover"].forEach(O=>{const _=L[O]||{},Y=E[O]||{};Oi.forEach(({cssProp:te})=>{_[te]!==Y[te]&&(_[te]?u(C,F,te,Y[te],_[te],O):Y[te]&&u(C,F,te,Y[te],"",O))})}),n()},y=()=>{n(),setTimeout(()=>{F==="input"||F==="textarea"||F==="select"?t.focus():t.click()},10)};if(!t)return null;const I=L[g]||{};let w="";if(L){const E=C.includes(" > ")||C.includes("#")||C.includes(":")?C:`[data-decorator-id="${C}"]`;L.light_default&&(w+=`body:not(.decorator-dark-mode) ${E} { `,Object.entries(L.light_default).forEach(([O,_])=>{w+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),w+=`}
`),L.light_hover&&(w+=`body:not(.decorator-dark-mode) ${E}:hover { `,Object.entries(L.light_hover).forEach(([O,_])=>{w+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),w+=`}
`),L.dark_default&&(w+=`body.decorator-dark-mode ${E} { `,Object.entries(L.dark_default).forEach(([O,_])=>{w+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),w+=`}
`),L.dark_hover&&(w+=`body.decorator-dark-mode ${E}:hover { `,Object.entries(L.dark_hover).forEach(([O,_])=>{w+=`${O.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${_} !important; `}),w+=`}
`)}return(0,e.jsxs)(_g,{onClick:E=>{E.target===E.currentTarget&&n()},"data-decorator-ignore":"true",children:[(0,e.jsx)("style",{children:w}),(0,e.jsxs)(Hg,{"data-decorator-ignore":"true",onClick:E=>E.stopPropagation(),$isStickyBgMode:r,children:[(0,e.jsxs)(Ug,{children:[(0,e.jsxs)(Kg,{children:["🎨 Декоратор ",(0,e.jsxs)(qg,{children:["<",F,">"]})]}),(0,e.jsx)(Wg,{onClick:n,"data-decorator-ignore":"true",children:"×"})]}),(0,e.jsxs)(Gg,{children:[(0,e.jsxs)(Jg,{children:[(0,e.jsxs)($i,{children:[(0,e.jsx)(Ya,{$active:b==="light",onClick:()=>p("light"),children:"🌞 Денна"}),(0,e.jsx)(Ya,{$active:b==="dark",onClick:()=>p("dark"),children:"🌙 Темна"})]}),(0,e.jsxs)($i,{children:[(0,e.jsx)(Ya,{$active:x==="default",onClick:()=>f("default"),children:"Стандарт"}),(0,e.jsx)(Ya,{$active:x==="hover",onClick:()=>f("hover"),children:":hover"})]})]}),Oi.map(({cssProp:E,label:O,type:_,placeholder:Y,desc:te})=>{const de=I[E]||"";return(0,e.jsx)(Yg,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"5px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)(Zg,{children:O}),(0,e.jsx)("span",{style:{fontSize:"10px",color:"#858da3"},children:te})]}),_==="color"&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsx)(Ni,{type:"color",value:Vi(de),onChange:ae=>D(E,ae.target.value),"data-decorator-ignore":"true"}),(0,e.jsx)(Lr,{value:de,onChange:ae=>D(E,ae.target.value),placeholder:"напр., #ffb36c або transparent","data-decorator-ignore":"true"})]}),_==="cursor"&&(0,e.jsxs)("select",{value:de,onChange:ae=>D(E,ae.target.value),"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 10px",borderRadius:"8px",fontSize:"12px",outline:"none",width:"100%"},children:[(0,e.jsx)("option",{value:"",children:"успадковується (default)"}),(0,e.jsx)("option",{value:"default",children:"стрілка (default)"}),(0,e.jsx)("option",{value:"pointer",children:"вказівник / посилання (pointer)"}),(0,e.jsx)("option",{value:"grab",children:"захоплення / рука відкрито (grab)"}),(0,e.jsx)("option",{value:"grabbing",children:"рука стиснута (grabbing)"}),(0,e.jsx)("option",{value:"zoom-in",children:"збільшення (zoom-in)"}),(0,e.jsx)("option",{value:"zoom-out",children:"зменшення (zoom-out)"}),(0,e.jsx)("option",{value:"text",children:"виділення тексту (text)"}),(0,e.jsx)("option",{value:"not-allowed",children:"заборонено (not-allowed)"}),(0,e.jsx)("option",{value:"help",children:"довідка (help)"}),(0,e.jsx)("option",{value:"wait",children:"очікування (wait)"}),(0,e.jsx)("option",{value:"move",children:"переміщення (move)"})]}),_==="border"&&(()=>{const ae=tm(de);return(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("select",{value:ae.width,onChange:B=>{const Z=Za(B.target.value,ae.style,ae.color);D(E,Z)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:1},children:[(0,e.jsx)("option",{value:"0px",children:"0px"}),(0,e.jsx)("option",{value:"1px",children:"1px"}),(0,e.jsx)("option",{value:"2px",children:"2px"}),(0,e.jsx)("option",{value:"3px",children:"3px"}),(0,e.jsx)("option",{value:"4px",children:"4px"}),(0,e.jsx)("option",{value:"5px",children:"5px"}),(0,e.jsx)("option",{value:"8px",children:"8px"}),(0,e.jsx)("option",{value:"10px",children:"10px"})]}),(0,e.jsxs)("select",{value:ae.style,onChange:B=>{const Z=Za(ae.width,B.target.value,ae.color);D(E,Z)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:2},children:[(0,e.jsx)("option",{value:"none",children:"немає (none)"}),(0,e.jsx)("option",{value:"solid",children:"суцільна (solid)"}),(0,e.jsx)("option",{value:"double",children:"подвійна (double)"}),(0,e.jsx)("option",{value:"dashed",children:"штрихова (dashed)"}),(0,e.jsx)("option",{value:"dotted",children:"пунктирна (dotted)"}),(0,e.jsx)("option",{value:"groove",children:"3D жолоб (groove)"}),(0,e.jsx)("option",{value:"ridge",children:"3D гребінь (ridge)"}),(0,e.jsx)("option",{value:"inset",children:"3D втиснута (inset)"}),(0,e.jsx)("option",{value:"outset",children:"3D витиснута (outset)"})]}),(0,e.jsx)(Ni,{type:"color",value:Vi(ae.color),onChange:B=>{const Z=Za(ae.width,ae.style,B.target.value);D(E,Z)},"data-decorator-ignore":"true"}),(0,e.jsx)(Lr,{value:ae.color,onChange:B=>{const Z=Za(ae.width,ae.style,B.target.value);D(E,Z)},placeholder:"#ffb36c","data-decorator-ignore":"true",style:{flex:2,minWidth:"70px"}})]})})(),_==="text"&&(0,e.jsx)(Lr,{value:de,onChange:ae=>D(E,ae.target.value),placeholder:Y||"успадковується","data-decorator-ignore":"true"})]})},E)})]}),(0,e.jsxs)(Xg,{children:[(0,e.jsx)(em,{onClick:y,"data-decorator-ignore":"true",children:"▶ Виконати дію"}),(0,e.jsx)(Qg,{onClick:v,"data-decorator-ignore":"true",children:"✓ Застосувати"})]})]})]})},Er={outline:"2px dashed #ffb36c",outlineOffset:"2px",cursor:"crosshair"},Fr=t=>{if(!t)return!0;let n=t;for(;n&&n!==document.body;){if(n.getAttribute?.("data-decorator-ignore")==="true"||n.tagName==="HEADER"||n.id==="decorator-overlay")return!0;n=n.parentElement}return!1},am=({isStickyBgMode:t})=>{const{isDecoratorMode:n}=Xr(),[r,u]=(0,a.useState)(null),[l,d]=(0,a.useState)(null),b=(0,a.useCallback)(f=>{!n||Fr(f.target)||(r&&r!==f.target&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor=""),f.target.style.outline=Er.outline,f.target.style.outlineOffset=Er.outlineOffset,f.target.style.cursor=Er.cursor,u(f.target))},[n,r]),p=(0,a.useCallback)(f=>{!n||Fr(f.target)||(f.target.style.outline="",f.target.style.outlineOffset="",f.target.style.cursor="",r===f.target&&u(null))},[n,r]),x=(0,a.useCallback)(f=>{n&&f.isTrusted&&(Fr(f.target)||(f.preventDefault(),f.stopPropagation(),f.target&&(f.target.style.outline="",f.target.style.outlineOffset="",f.target.style.cursor=""),d(f.target)))},[n]);return(0,a.useEffect)(()=>{if(!n){r&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor="",u(null));return}return document.addEventListener("mouseover",b,!0),document.addEventListener("mouseout",p,!0),document.addEventListener("click",x,!0),()=>{document.removeEventListener("mouseover",b,!0),document.removeEventListener("mouseout",p,!0),document.removeEventListener("click",x,!0)}},[n,b,p,x,r]),(0,a.useEffect)(()=>(n?document.body.style.cursor="crosshair":document.body.style.cursor="",()=>{document.body.style.cursor=""}),[n]),!n&&!l?null:(0,e.jsx)(e.Fragment,{children:l&&(0,e.jsx)(nm,{targetElement:l,onClose:()=>d(null),isStickyBgMode:t})})},rm=(t="",n="")=>{try{const r=new URLSearchParams(t||window.location.search);let u=r.get("q")||r.get("search")||r.get("city")||r.get("query")||r.get("pohoda")||r.get("s");if(!u&&n){const x=n.indexOf("?");if(x!==-1){const f=new URLSearchParams(n.substring(x));u=f.get("q")||f.get("search")||f.get("city")||f.get("query")||f.get("pohoda")||f.get("s")}}if(!u)return{isSearchEntry:!1,query:"",cityData:null};const l=decodeURIComponent(u).trim();if(!l)return{isSearchEntry:!1,query:"",cityData:null};const d=pl(l);if(d)return{isSearchEntry:!0,query:l,cityName:d.name,cityData:{id:`search-${d.name.toLowerCase()}`,name:d.name,fullName:d.fullName,lat:d.lat,lon:d.lon}};const b=l.replace(/^(погода\s+(в|у)?\s*)/i,"").replace(/(\s*погода)$/i,"").trim(),p=b.charAt(0).toUpperCase()+b.slice(1);return{isSearchEntry:!0,query:l,cityName:p,cityData:{id:`search-${p.toLowerCase()}`,name:p,fullName:`${p} (UA)`,lat:null,lon:null}}}catch(r){return console.error("Помилка аналізу пошукового запиту:",r),{isSearchEntry:!1,query:"",cityData:null}}},om="/assets/castle-DO6W3_-e.webp",im=Fe`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,sm=i.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`,lm=i.div`
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 24px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${om}) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;
  animation: ${im} 0.3s ease-out;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    max-width: 580px;
    padding: 40px 35px;
    border-radius: 16px;
    border-width: 3px;
  }
`,dm=i.h2`
  margin-top: 0;
  font-size: 22px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 18px;
  }
`,cm=i.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 30px;
  }
`,um=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`,Bi=i.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 20px;
  width: 100%;
  max-width: 450px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255,255,255,0.25);
    transform: translateY(-1px);
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 24px;
    border-width: 2px;
    border-radius: 8px;
  }
`,pm=i.div`
  position: fixed;
  background: #000;
  color: #fff;
  border: 2px solid #ffb36c;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  z-index: 10002;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  pointer-events: auto;
`,fm=i.button`
  margin-top: 10px;
  background: #ffb36c;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`,gm=i.button`
  margin-top: 10px;
  background: transparent;
  color: #999;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  &:hover { color: #fff; border-color: #fff; }
`,mm=i.div`
  position: fixed;
  border: 3px dashed #ffb36c;
  border-radius: 6px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.65);
`,hm=({user:t})=>{const{isActive:n,currentStep:r,showInitialModal:u,startTutorial:l,skipTutorialWeek:d,refs:b,nextStep:p,jumpToStep:x,closeTutorial:f}=La(),[g,F]=(0,a.useState)({}),[C,L]=(0,a.useState)({display:"none"}),[P,D]=(0,a.useState)(!0),[v,y]=(0,a.useState)(!1),I=(0,a.useRef)(null),w=(0,a.useRef)(null),E=(0,a.useCallback)(B=>{if(!B)return;const Z=B.getBoundingClientRect(),ge=Math.max(2,Z.top-5),Ie=Math.max(2,Z.left-5),he=Math.min(Z.width+10,window.innerWidth-Ie-2),Ue=Math.min(Z.height+10,window.innerHeight-ge-2);L({top:ge,left:Ie,width:he,height:Ue});const De=300,Ze=220;let me=Z.bottom+15,$e=Z.left;me+Ze>window.innerHeight&&(me=Z.top-Ze-10),me<5&&(me=5),$e+De>window.innerWidth&&($e=window.innerWidth-De-10),$e<5&&($e=5),F({top:me,left:$e})},[]);(0,a.useEffect)(()=>{if(!n)return;const B=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=B}},[n]),(0,a.useEffect)(()=>{if(!n)return;const B=O.find(ge=>ge.step===r);if(!B){f();return}D(!0),y(!1),B.onEnter&&B.onEnter(),B.autoAction&&B.autoAction();const Z=B.targetName?b.current[B.targetName]:null;if(w.current=Z,Z){Z.scrollIntoView({behavior:"smooth",block:"center"});const ge=setTimeout(()=>E(Z),500),Ie=()=>E(Z);return window.addEventListener("resize",Ie),()=>{clearTimeout(ge),window.removeEventListener("resize",Ie)}}else L({display:"none"}),F({top:"50%",left:"50%",transform:"translate(-50%, -50%)"})},[r,n]),(0,a.useEffect)(()=>{if(!n||r!==1)return;const B=Z=>{Z.detail&&Z.detail.value&&Z.detail.value.trim().length>0?(D(!1),clearTimeout(I.current),I.current=setTimeout(()=>D(!0),5e3)):(clearTimeout(I.current),D(!0))};return window.addEventListener("domino-hero-input-change",B),()=>{window.removeEventListener("domino-hero-input-change",B),clearTimeout(I.current)}},[n,r]),(0,a.useEffect)(()=>{if(!n)return;const B=()=>{r===1&&p()};return window.addEventListener("domino-next-step-auto",B),()=>window.removeEventListener("domino-next-step-auto",B)},[n,r,p]),(0,a.useEffect)(()=>{if(!n)return;const B=()=>{r===3&&p()};return window.addEventListener("domino-weather-gear-clicked",B),()=>window.removeEventListener("domino-weather-gear-clicked",B)},[n,r,p]);const O=[{step:1,targetName:"heroInput",text:"Привіт! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у випадаючому списку."},{step:2,targetName:null,text:"Чудово! А тепер давай спустимось нижче, щоб подивитися прогноз.",autoAction:()=>{setTimeout(()=>{document.body.style.overflow="",window.scrollTo({top:window.innerHeight,behavior:"smooth"}),setTimeout(()=>{document.body.style.overflow="hidden",p()},1500)},2e3)},noSkip:!0},{step:3,targetName:"weatherGear",text:"У цій картці показано детальний прогноз. Натисни на іконку шестерні для налаштувань."},{step:4,targetName:"weatherModal",text:`Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.

• Ліміт: до 8 карток одночасно (до 1000 створень на добу).`},{step:5,targetName:null,text:"Нижче ти знайдеш кліматичну карту Windy.com, чат із Gemini та інструменти для роботи із зображеннями (Стихії, Pixabay...).",onEnter:()=>{window.dispatchEvent(new CustomEvent("domino-close-weather-settings"))}},{step:6,targetName:"newsHeader",text:"Додавай свої джерела новин! Ми автоматично блокуємо казино, 18+, політику та кримінал. Згодом тут можна підключати YouTube, Telegram та інші канали."},{step:7,targetName:"headerBgTheme",text:"Персоналізуй сайт: обирай тематичні фони (Динофроз, природа, кіно) та налаштовуй загальну тему сайту."},{step:8,targetName:null,text:t?"Дякуємо, що ти з нами! Насолоджуйся сайтом.":"Увійди, щоб отримати повний доступ. І пам’ятай: не жартуй з Ніцероном! :)",isLast:!0}],_=(0,a.useCallback)(()=>{if(v)return;y(!0);const B=O.find(Z=>Z.step===r);if(B){if(B.isLast){f();return}if(r===1){const Z=b.current.heroInput;if(!(Z&&Z.value&&Z.value.trim().length>0))window.dispatchEvent(new CustomEvent("domino-auto-input-konotop")),setTimeout(()=>p(),2500);else{setTimeout(()=>y(!1),500);return}}else r===3&&window.dispatchEvent(new CustomEvent("domino-open-weather-settings")),p();setTimeout(()=>y(!1),2e3)}},[v,r,O,f,p,b]),Y=(0,a.useCallback)(()=>{v||(window.dispatchEvent(new CustomEvent("domino-close-weather-settings")),x(8))},[v,x]);if(u)return(0,e.jsx)(sm,{children:(0,e.jsxs)(lm,{children:[(0,e.jsx)(dm,{children:"Отримати навчання?"}),(0,e.jsx)(cm,{children:"Доміно пропонує вам безкоштовну допомогу, для швидшого опанування сайту"}),(0,e.jsxs)(um,{children:[(0,e.jsx)(Bi,{onClick:l,children:"Так, і не нагадувати про це 30 днів"}),(0,e.jsx)(Bi,{onClick:d,children:"Ні, і не нагадувати тиждень!"})]})]})});if(!n)return null;const te=O.find(B=>B.step===r);if(!te)return null;const de=C.display!=="none",ae=!te.isLast&&!te.noSkip&&r<=6;return(0,e.jsxs)(e.Fragment,{children:[de&&(0,e.jsx)(mm,{style:C}),(0,e.jsxs)(pm,{style:{...g,opacity:P?1:0,pointerEvents:P?"auto":"none",transition:"opacity 0.3s ease"},children:[(0,e.jsxs)("div",{style:{fontSize:"12px",color:"#ccc",marginBottom:"5px"},children:["Крок ",r,"/8 (Доміно)"]}),(0,e.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:te.text}),!te.noSkip&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"10px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsx)(fm,{onClick:_,disabled:v,children:te.isLast?"Завершити":"Пропустити"}),ae&&(0,e.jsx)(gm,{onClick:Y,title:"Пропустити до кроку 8",children:"До кінця →"})]})]})]})},xm=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
`,bm=({content:t,children:n,placement:r="bottom",isDarkMode:u=!0})=>{const[l,d]=(0,a.useState)(!1),b=(0,a.useRef)(null),{refs:p,floatingStyles:x,context:f}=ya({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:da,middleware:[wa(8),la(),va({padding:5}),fa({element:b})]}),{isMounted:g,styles:F}=ga(f,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),C=pa(f,{move:!1}),L=ua(f),P=ma(f),D=ha(f,{role:"tooltip"}),{getReferenceProps:v,getFloatingProps:y}=xa([C,L,P,D]);if(!t)return n;const I=u?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:p.setReference,...v(),style:{display:"inline-flex"},children:n}),g&&(0,e.jsx)(ca,{children:(0,e.jsxs)(xm,{ref:p.setFloating,$isDarkMode:u,style:{...x,...F},...y(),children:[t,(0,e.jsx)(ba,{ref:b,context:f,fill:I,stroke:"#00acb9",strokeWidth:1})]})})]})},ym=(0,a.lazy)(()=>Oe(()=>import("./Prison-B9deyfb7.js"),__vite__mapDeps([0,1,2,3]))),wm=(0,a.lazy)(()=>Oe(()=>import("./Aihelp-D1OvAQZT.js"),__vite__mapDeps([4,1,2]))),vm=(0,a.lazy)(()=>Oe(()=>import("./FanArt-CWPZDi9H.js"),__vite__mapDeps([5,1,2]))),km=(0,a.lazy)(()=>Oe(()=>import("./ShopModal-Bthlp7W_.js"),__vite__mapDeps([6,1,2]))),Sm=(0,a.lazy)(()=>Oe(()=>import("./AchivmentsModal-Bsf3ujIz.js"),__vite__mapDeps([7,1,2]))),jm=(0,a.lazy)(()=>Oe(()=>import("./ClimateMap-CcwZZbec.js"),__vite__mapDeps([8,1,2]))),Cm=(0,a.lazy)(()=>Oe(()=>import("./MusicPhoto-B35XPCu5.js"),__vite__mapDeps([9,1,2,10]))),Tm=(0,a.lazy)(()=>Oe(()=>import("./Modal-BBeOrjW-.js"),__vite__mapDeps([11,1,2,12]))),Am=(0,a.lazy)(()=>Oe(()=>import("./LoginModal-Dw3f5f5i.js"),__vite__mapDeps([13,1,2]))),Im=(0,a.lazy)(()=>Oe(()=>import("./UserSettingsModal-BacHC5NJ.js"),__vite__mapDeps([14,1,2,12]))),Dm=(0,a.lazy)(()=>Oe(()=>import("./VipModal-4eq14VNK.js"),__vite__mapDeps([15,1,2]))),Mm=(0,a.lazy)(()=>Oe(()=>import("./WeatherDetailsModal-BFDiAKYA.js"),__vite__mapDeps([16,1,2]))),Pr=(0,a.lazy)(()=>Oe(()=>Promise.resolve().then(()=>gl),void 0)),Rm=(0,a.lazy)(()=>Oe(()=>import("./OtherOptionsModal-B6TJy_Ne.js"),__vite__mapDeps([17,1,2,10]))),zm=nd`
  ${t=>t.$locked&&Vt`
      html,
      body,
      #root,
      .App {
        filter: none !important;
        backdrop-filter: none !important;
      }
    `}
`,$r=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"#ffffff"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  transition:
    background-color 0.5s ease,
    backdrop-filter 0.5s ease;
  border-radius: 20px;
  margin: 10px 0;
  display: ${t=>t.$isHidden?"none":"block"};
`,_i=[rr,Yr,Jr,Zr,$u];Ad.register(Ld,wd,_d,Td,Ud,sd,kd,qd);var Xa=(t,n=1)=>t===0?n?"☀️ Ясно":"🌙 Ясно":t>=1&&t<=3?n?"🌤️ Мінлива хмарність":"☁️ Мінлива хмарність":t>=45&&t<=48?"☁️ Туман":t>=51&&t<=55?"🌧️ Мряка":t>=56&&t<=57?"🌧️ Мряка з снігом":t>=61&&t<=65?"🌧️ Дощ":t>=66&&t<=67?"🌧️ Дощ з снігом":t>=71&&t<=75?"❄️ Снігопад":t===77?"❄️ Сніжна крупа":t>=80&&t<=82?"🌦️ Зливовий дощ":t>=85&&t<=86?"❄️ Зливовий сніг":t>=95&&t<=99?"⛈️ Гроза":"☁️ Хмарно",Lm=(t,n=1)=>t===0?n?"ясно":"ясно вночі":t>=1&&t<=3?n?"мінлива хмарність":"хмарно вночі":t>=45&&t<=48?"туман":t>=51&&t<=55?"мряка":t>=56&&t<=57?"мряка зі снігом":t>=61&&t<=65?"дощ":t>=66&&t<=67?"дощ зі снігом":t>=71&&t<=75?"сніг":t===77?"сніжна крупа":t>=80&&t<=82?"зливовий дощ":t>=85&&t<=86?"зливовий сніг":t>=95&&t<=99?"гроза":"хмарно",Nr=(t,n=1)=>t===0?n?(0,e.jsx)(sa,{}):(0,e.jsx)(ia,{}):t>=1&&t<=3?n?"🌤️":(0,e.jsx)(ld,{}):t>=45&&t<=48?(0,e.jsx)(Do,{}):t>=51&&t<=55||t>=56&&t<=57?"🌧️":t>=61&&t<=65?n?(0,e.jsx)(pr,{}):(0,e.jsx)(Ao,{}):t>=66&&t<=67?n?(0,e.jsx)(pr,{}):(0,e.jsx)(Ao,{}):t>=71&&t<=75?(0,e.jsx)(ur,{}):t===77?(0,e.jsx)(ur,{}):t>=80&&t<=82?n?(0,e.jsx)(pr,{}):(0,e.jsx)(Ol,{}):t>=85&&t<=86?(0,e.jsx)(ur,{}):t>=95&&t<=99?(0,e.jsx)(Jl,{}):(0,e.jsx)(Do,{}),Em=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"transparent"};
  color: ${t=>t.$isDarkMode?"#ffffff":"inherit"};
  min-height: 100vh;
  transition:
    background-color 0.5s ease,
    background 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
`,Fm=i.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  justify-content: flex-start;
  width: 100%;
  scroll-behavior: smooth;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: visible;
    scroll-snap-type: none;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }

  > * {
    scroll-snap-align: center;
    flex: 0 0 100%;

    @media (min-width: 769px) {
      flex: 0 1 auto;
    }
  }
`,Pm=i.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  @media (min-width: 769px) {
    display: none;
  }
`,$m=i.button`
  width: 34px;
  height: 34px;
  background: ${t=>t.$active?"#ffb36c":"#333"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  &:hover {
    background: ${t=>t.$active?"#ffd36a":"#555"};
  }
`,Nm=({children:t})=>{const n=(0,a.useRef)(null),[r,u]=(0,a.useState)(0),l=Array.isArray(t)?t.length:1,d=(0,a.useCallback)(b=>{const p=n.current;if(!p)return;const x=p.children[b];x&&p.scrollTo({left:x.offsetLeft,behavior:"smooth"})},[]);return(0,a.useEffect)(()=>{r>=l?u(Math.max(0,l-1)):d(r)},[r,l,d]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Pm,{children:Array.from({length:l},(b,p)=>(0,e.jsx)($m,{$active:p===r,onClick:()=>u(p),children:p+1},`carousel-page-${p}`))}),(0,e.jsx)(Fm,{ref:n,children:t})]})},Hi=["Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.","Доміно, власник сайту і замку!","Ти теж думаєш, що відсилками можна керувати погодою? :)","Погода така сама загадка і т/с 'Ральна містика'","Хто що любить, хто що шукає? :)","Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.","Хочете, щоб ваш трек або відсилка були на сайті? Надсилайте на пошту theturkeystudio@gmail.com","Фан-арти для роздрукування! І плоска 3D-картина краще виглядає на стіні, ніж на екрані. Примітка","0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода, музика і відсилки.","«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...","Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)","Знайди речдок у телешоу «Речдок»","Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?","Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)","Ми вас здивуємо багато чим :)","І що всіх тягне на турецькі серіали?","«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара","Морально підтримайте підпискою на ютуб, рекламою і побажаннями.","Навчання, оцінювання та коментування. І що я написав :)","Чекаю на ваші відсилки, фан-арти та побажання на пошту","Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»","У нас немає сторінки 404 :) Радіовишки, ліси, тумани, сирени...","Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.","Підтримайте, будь ласка, рекламою нас у соцмережах :)","У вас через сім днів буде хороша погода - поганої ж не існує :)","«Теорія неймовірності» (Макс Кідрук) має одну частину :(","Ох, Марта любить, коли ти не тікаєш від долі стати картиною.","Кейт — складна за характером індичка.","Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)","Хто ваш кумир? Зібров чи Винник?","Багато змін клімату, мультиплікації, моди, життя :(","Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)","Місія неможлива - ніде не помилитись","Льодовиковий період чи глобальне потепління через 24 роки.","Правило: дивіться на все під різними кутами.","Попри все, погода не буває поганою - вона буває різною.","Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик в магазині»","Оксану Самойлову з «Україна має талант» хто пам'ятає?","Страху немає, упевненим робиться рух!","Застрягли в минулому :) Але погода - це майбутнє!","Mondo TV - Thanks for legendary cartoons.","Раз, два, три. Погоду нам скажи!","Це початок початку чи початок кінця відсилкам? (Перший варіант)","Вверх - ти летиш! Вниз - ти падаєш! ","Чорний айсберг, потопив ......? ","Доміно тривожить Єллоустон","Я знаю що її звати ......","","Вам приснилися сни про погоду? Бо ви тут! :)","Вам приснився жах що ...... і ...... програли і....","Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)","Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)"],Om=Fe`
  0% { opacity: 0; transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.1)) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(1.2); }
`,Vm=i.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${t=>t.$isNew?"#94fffa":"#ffb36c"};
  font-size: 14px;
  z-index: 10001;
  animation: ${Om} 3s ease-out infinite;
  animation-delay: ${t=>t.$delay}s;
  --x: ${t=>t.$x}px;
  --y: ${t=>t.$y}px;
`,Bm=i.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: ${t=>t.$isDarkMode?"rgba(6, 123, 110, 0.75)":"rgba(98, 112, 8, 0.55)"};
  color: ${t=>t.$isDarkMode?"#00eaff":"#fbff00"};
  padding: 2px 8px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 900;
  z-index: 499;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(6px);
  border: 2px solid
    ${t=>t.$isDarkMode?"rgba(128, 0, 255, 0.99)":"rgb(255, 170, 0)"};
  pointer-events: auto;
  cursor: pointer;
   text-shadow: 
    -1px -1px 0 #080808,  
     1px -1px 0 #080808,
    -1px  1px 0 #080808,
     1px  1px 0 #080808;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.07);
    background: ${t=>t.$isDarkMode?"rgba(18, 43, 166, 0.69)":"rgba(254, 102, 0, 0.73)"};
  }
  &:active {
    transform: scale(0.95);
  }
`,_m=i.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  ${t=>t.$isNew&&Vt`
      color: #94fffa;
      text-shadow: 0 0 12px rgba(148, 255, 250, 0.9);
      font-weight: bold;
      &::before {
        content: "Нове: ";
        font-size: 0.8em;
        color: orange;
      }
    `}
`,Ui="siteSectionsOrder",Or=(0,a.memo)(({section:t,isDarkMode:n,isStickyBgMode:r,isLocationEnabled:u,handleRefreshCard:l,handleDeleteCard:d,handleRenameCard:b,moveWeatherCard:p,setIsLocationEnabled:x,user:f,handleOpenRegister:g,onUpdateUser:F,setHeroBg:C,customHeroBgs:L,setCustomHeroBgs:P,setCustomHolidayName:D,customHolidayName:v,weatherCards:y,weatherCardLayout:I,isAnyModalOpen:w,heroDateString:E,isWeatherDetailsOpen:O,setIsWeatherDetailsOpen:_,selectedWeatherCard:Y,setSelectedWeatherCard:te,setIsFsActive:de})=>t?t.key==="weather"?(0,e.jsxs)("div",{id:"weather",children:[(0,e.jsx)(nu,{$isStickyBgMode:r,$isDarkMode:n,children:"Погода"}),(0,e.jsx)(Nm,{children:y.map((ae,B)=>{const Z=ae.current.tempNum>30||ae.current.tempNum<-30,ge=ae.current.windNum>10,Ie=ae.current.uv_index>7;return(0,e.jsx)("div",{children:(0,e.jsx)(xu,{isStickyBgMode:r,user:f,card:ae,isDarkMode:n,isLocationEnabled:u,isExtremeTemp:Z,isExtremeWind:ge,isExtremeUV:Ie,index:B,totalCards:y.length,handleRefreshCard:l,handleDeleteCard:d,handleRenameCard:b,moveWeatherCard:p,setIsLocationEnabled:x,customHolidayName:v,layout:I,onOpenDetails:he=>{te({...ae,cityImage:he||ae.cityImage}),_(!0)},currentTimeString:E})},ae.id)})})]}):(0,e.jsxs)("div",{id:t.key,children:[t.key==="map"&&(0,e.jsx)(jm,{isDarkMode:n,isStickyBgMode:r}),t.key==="aihelp"&&(0,e.jsx)(wm,{isDarkMode:n,isStickyBgMode:r}),t.key==="music"&&(0,e.jsx)(Cm,{isStickyBgMode:r,user:f,onFsToggle:de,isAnyModalOpen:w,onUpdateUser:F,isDarkMode:n}),t.key==="fanart"&&(0,e.jsx)(vm,{isStickyBgMode:r,isDarkMode:n,user:f,setHeroBg:C,customHeroBgs:L,setCustomHeroBgs:P}),t.key==="prison"&&(0,e.jsx)(ym,{})]}):null),Hm=()=>{const[t,n]=(0,a.useState)(!0),[r,u]=(0,a.useState)(!1),[l,d]=(0,a.useState)({text:"",isNew:!1}),[b,p]=(0,a.useState)(new Date),[x,f]=(0,a.useState)(!0),[g,F]=(0,a.useState)(!1),[C,L]=(0,a.useState)([]),[P,D]=(0,a.useState)({}),[v,y]=(0,a.useState)(null),I=(0,a.useRef)(null);(0,a.useEffect)(()=>{I.current=v},[v]);const[w,E]=(0,a.useState)(null),[O,_]=(0,a.useState)([]),[Y,te]=(0,a.useState)(null),[de,ae]=(0,a.useState)(null),[B,Z]=(0,a.useState)(null),[ge,Ie]=(0,a.useState)("static"),[he,Ue]=(0,a.useState)(.2),[De,Ze]=(0,a.useState)({}),[me,$e]=(0,a.useState)(5),[Ce,dt]=(0,a.useState)(.8),[rt,ct]=(0,a.useState)("all"),[Pe,Ke]=(0,a.useState)(1),[ot,wt]=(0,a.useState)(0),[gt,Le]=(0,a.useState)(0),[T,$]=(0,a.useState)("smooth"),[X,ie]=(0,a.useState)(0),[pe,Te]=(0,a.useState)({x:50,y:50}),[_e,Be]=(0,a.useState)({x:50,y:50}),[be,At]=(0,a.useState)({x:50,y:50}),[qe,mt]=(0,a.useState)({x:50,y:50}),[vt,Xe]=(0,a.useState)(!1),[It,V]=(0,a.useState)(6),[Q,re]=(0,a.useState)(1),[G,Ee]=(0,a.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),[S,M]=(0,a.useState)(""),[K,ve]=(0,a.useState)(Go),[it,ut]=(0,a.useState)(!1),[Me,We]=(0,a.useState)(!1),[Rt,ht]=(0,a.useState)(!1),[xe,ce]=(0,a.useState)(!1),[zt,Dt]=(0,a.useState)(!1),[Bt,nt]=(0,a.useState)(!1),[_t,pn]=(0,a.useState)(!1),[kt,en]=(0,a.useState)(!1),[oe,Ae]=(0,a.useState)(!0),[Qe,St]=(0,a.useState)(!1),[ue,Re]=(0,a.useState)(!1),[Ge,ze]=(0,a.useState)(!0),[Je,st]=(0,a.useState)(Br),[lt,qt]=(0,a.useState)("loop"),[tn,Jn]=(0,a.useState)(!1),[ln,fn]=(0,a.useState)(23),[,Pn]=(0,a.useState)(0),[nn,In]=(0,a.useState)(.2),[Wt,$n]=(0,a.useState)(.2),[Ft,Mt]=(0,a.useState)("eager"),[Ht,Gt]=(0,a.useState)(1),[xt,wn]=(0,a.useState)([]),[$t,an]=(0,a.useState)({}),[Lt,vn]=(0,a.useState)(!1),[dn,et]=(0,a.useState)(!1),[Jt,rn]=(0,a.useState)(!1),[s,m]=(0,a.useState)(null),H=(0,a.useCallback)(()=>{const h=new Date,A=3600-(h.getMinutes()*60+h.getSeconds());return A<=0?3600:A},[]),[R,z]=(0,a.useState)(H()),N=(0,a.useRef)([]),se=(0,a.useRef)(null),ye=(0,a.useRef)(null),[bt,Yt]=(0,a.useState)(0),jt=(0,a.useRef)(!1),[Dn,Mn]=(0,a.useState)(!1),[Zt,gn]=(0,a.useState)(!1),[Nn,Rn]=(0,a.useState)(!1),[Nt,ka]=(0,a.useState)(!1),[Xt,Yn]=(0,a.useState)("UTC"),[Ve,kn]=(0,a.useState)(!1),[Ea,On]=(0,a.useState)(!1),[mn,Ct]=(0,a.useState)(null),[Sa,ja]=(0,a.useState)(null);(0,a.useEffect)(()=>Pu(({isMaintenanceMode:h,endTime:A,message:q})=>{On(h),Ct(A),ja(q)}),[]),(0,a.useEffect)(()=>{(async()=>{try{const A=await c.default.getItem("isDarkMode");A!==null&&f(A);const q=await c.default.getItem("isStickyBgMode");q!==null&&F(q);const U=await c.default.getItem("sectionThemes");U&&D(U);const W=await c.default.getItem("hiddenSections");W&&L(W);const ee=await c.default.getItem("active_user");ee&&y(ee);const Ne=await c.default.getItem("currentAvatar");Ne&&ve(Ne);const at=await c.default.getItem("isRoutingMode");at!==null&&Zn(at);const Pt=await c.default.getItem("selected_timezone");Pt&&Yn(Pt);const ft=await c.default.getItem("bg_music_enabled");ft!==null&&Re(ft);const j=await c.default.getItem("auto_mute_bg_music");j!==null&&ze(j);const Tt=await c.default.getItem("lock_filters_in_fs");Tt!==null&&vn(Tt);const xn=await c.default.getItem("bg_music_source");xn&&st(xn);const ta=await c.default.getItem("custom_bg_tracks");ta&&wn(ta);const Ln=await c.default.getItem("bg_music_volume");Ln!==null&&In(Ln);const Pa=await c.default.getItem("sfx_volume");Pa!==null&&$n(Pa);const fe=await c.default.getItem("bg_music_speed");fe!==null&&Gt(fe);const Ye=await c.default.getItem("bg_music_position");Ye!==null&&Yt(Ye);const He=await c.default.getItem("bg_music_mode");He&&qt(He);const Se=await c.default.getItem("bg_music_shuffle");Se!==null&&Jn(Se);const je=await c.default.getItem("active_bg_track_id");je&&fn(je);const tt=await c.default.getItem("library_bg_settings");tt&&an(tt);const Ut=await c.default.getItem("weather_cards");Ut&&hn(zr(Ut));const Et=await c.default.getItem("hideDeleteModalUntil");Et&&le(parseInt(Et));const En=await c.default.getItem(Ui);En&&we(En);const Hn=await c.default.getItem("hero_background");Hn&&E(Hn);const Ia=await c.default.getItem("hero_background_2");Ia&&te(Ia);const to=await c.default.getItem("hero_background_3");to&&ae(to);const no=await c.default.getItem("hero_background_4");no&&Z(no);const ao=await c.default.getItem("custom_hero_backgrounds");ao&&_(ao);const ro=await c.default.getItem("hero_bg_mode");ro&&Ie(ro);const oo=await c.default.getItem("hero_slideshow_interval");oo!==null&&$e(oo);const io=await c.default.getItem("hero_slideshow_transition");io!==null&&dt(io);const so=await c.default.getItem("hero_bg_filter_category");so&&ct(so);const lo=await c.default.getItem("hero_bg_zoom");lo!==null&&Ke(lo);const co=await c.default.getItem("hero_bg_rotation");co!==null&&ie(co);const uo=await c.default.getItem("hero_bg_blur");uo!==null&&wt(uo);const po=await c.default.getItem("hero_bg_blur_type");po&&$(po);const fo=await c.default.getItem("hero_bg_pixelation");fo!==null&&Le(fo);const go=await c.default.getItem("hero_bg_focal1");go&&Te(go);const mo=await c.default.getItem("hero_bg_focal2");mo&&Be(mo);const ho=await c.default.getItem("hero_bg_focal3");ho&&At(ho);const xo=await c.default.getItem("hero_bg_focal4");xo&&mt(xo);const bo=await c.default.getItem("hero_bg_pan_enabled");bo!==null&&Xe(bo);const yo=await c.default.getItem("hero_bg_pan_speed");yo!==null&&V(yo);const wo=await c.default.getItem("hero_video_playback_speed");wo!==null&&re(wo);const vo=await c.default.getItem("custom_holiday_name");vo&&M(vo);const ko=await c.default.getItem("dinofroz_screenshots");ko&&o(ko);const El=await c.default.getItem("last_deployed_version"),So=await c.default.getItem("weather_card_layout");So&&Ee(So);const jo=await c.default.getItem("show_update_timer");jo!==null&&Ae(jo);const Co=await c.default.getItem("modal_loading_strategy");Co&&Mt(Co);const To={}.REACT_APP_DEPLOY_ID;To&&El!==To&&gn(!0),kn(!0)}catch(A){console.error("Помилка завантаження з localforage:",A),kn(!0)}})()},[]),(0,a.useEffect)(()=>{Ve&&(c.default.setItem("isStickyBgMode",g),c.default.setItem("bg_music_enabled",ue),c.default.setItem("auto_mute_bg_music",Ge),c.default.setItem("lock_filters_in_fs",Lt),(Je instanceof Blob||typeof Je=="string")&&c.default.setItem("bg_music_source",Je),c.default.setItem("custom_bg_tracks",xt),c.default.setItem("bg_music_volume",nn),c.default.setItem("sfx_volume",Wt),c.default.setItem("bg_music_speed",Ht),c.default.setItem("bg_music_mode",lt),c.default.setItem("bg_music_shuffle",tn),c.default.setItem("active_bg_track_id",ln),c.default.setItem("library_bg_settings",$t))},[ue,Ge,Lt,Je,xt,$t,nn,Wt,Ht,lt,tn,ln,Ve]),(0,a.useEffect)(()=>{(async()=>{const A=await c.default.getItem("seen_loading_phrases")||[],q=Math.floor(Math.random()*Hi.length),U=Hi[q],W=!A.includes(U);if(W){const ee=[...A,U];await c.default.setItem("seen_loading_phrases",ee.slice(-100))}d({text:U,isNew:W})})()},[]);const Vn=(0,a.useCallback)(()=>{Oe(()=>import("./Prison-B9deyfb7.js"),__vite__mapDeps([0,1,2,3])),Oe(()=>import("./Aihelp-D1OvAQZT.js"),__vite__mapDeps([4,1,2])),Oe(()=>import("./FanArt-CWPZDi9H.js"),__vite__mapDeps([5,1,2])),Oe(()=>import("./ShopModal-Bthlp7W_.js"),__vite__mapDeps([6,1,2])),Oe(()=>Promise.resolve().then(()=>ff),void 0),Oe(()=>import("./AchivmentsModal-Bsf3ujIz.js"),__vite__mapDeps([7,1,2])),Oe(()=>import("./ClimateMap-CcwZZbec.js"),__vite__mapDeps([8,1,2])),Oe(()=>import("./MusicPhoto-B35XPCu5.js"),__vite__mapDeps([9,1,2,10])),Oe(()=>import("./Modal-BBeOrjW-.js"),__vite__mapDeps([11,1,2,12])),Oe(()=>import("./LoginModal-Dw3f5f5i.js"),__vite__mapDeps([13,1,2])),Oe(()=>import("./UserSettingsModal-BacHC5NJ.js"),__vite__mapDeps([14,1,2,12])),Oe(()=>import("./VipModal-4eq14VNK.js"),__vite__mapDeps([15,1,2])),Oe(()=>import("./WeatherDetailsModal-BFDiAKYA.js"),__vite__mapDeps([16,1,2])),Oe(()=>Promise.resolve().then(()=>gl),void 0),Oe(()=>import("./OtherOptionsModal-B6TJy_Ne.js"),__vite__mapDeps([17,1,2,10]))},[]);(0,a.useEffect)(()=>{if(Ve){if(Ft==="eager")Vn();else if(Ft==="delayed"){const h=setTimeout(Vn,8e3);return()=>clearTimeout(h)}}},[Ve,Ft,Vn]);const Fa=(0,a.useMemo)(()=>{const h=l.isNew?12:6;return Array.from({length:h}).map((A,q)=>({id:q,x:(Math.random()-.5)*220,y:(Math.random()-.5)*140,delay:Math.random()*2}))},[l]);(0,a.useEffect)(()=>{const h=setTimeout(()=>Rn(!0),8e3);return()=>clearTimeout(h)},[]),(0,a.useEffect)(()=>{if(v?.fontFamily){const h=v.fontFamily.trim().replace(/ /g,"+").replace(/['"]/g,""),A="custom-google-font";let q=document.getElementById(A);q||(q=document.createElement("link"),q.id=A,q.rel="stylesheet",document.head.appendChild(q)),q.href=`https://fonts.googleapis.com/css2?family=${h}:wght@400;700;900&display=swap`,document.documentElement.style.setProperty("--font-family",`"${v.fontFamily.replace(/['"]/g,"")}", sans-serif`)}else document.getElementById("custom-google-font")?.remove(),document.documentElement.style.removeProperty("--font-family")},[v?.fontFamily]),(0,a.useEffect)(()=>{const h=()=>{Mn(!0),window.removeEventListener("mousedown",h),window.removeEventListener("scroll",h),window.removeEventListener("touchstart",h)};return window.addEventListener("mousedown",h),window.addEventListener("scroll",h),window.addEventListener("touchstart",h),()=>{window.removeEventListener("mousedown",h),window.removeEventListener("scroll",h),window.removeEventListener("touchstart",h)}},[]);const[zn,Zn]=(0,a.useState)(!1);(0,a.useEffect)(()=>{Zt&&Nn&&Dn&&!Nt&&(en(!0),gn(!1),ka(!0),c.default.setItem("last_deployed_version",{}.REACT_APP_DEPLOY_ID))},[Zt,Nn,Dn,Nt]);const[Bn,Ca]=(0,a.useState)(!1),[cn,hn]=(0,a.useState)([]),[Xn,o]=(0,a.useState)([]),k=it||Me||Rt||xe||zt||Bt||_t||kt||Nt,[J,le]=(0,a.useState)(0);(0,a.useEffect)(()=>{const A=setTimeout(async()=>{const q=[rl,nr,nr,rr,Br];try{await Promise.all(q.map(U=>fetch(U))),console.log("KatScene assets preloaded in background")}catch(U){console.warn("Failed to preload KatScene assets:",U)}},4e3);return()=>clearTimeout(A)},[]);const[ne,we]=(0,a.useState)([...xr]);(0,a.useEffect)(()=>{if(Ve){const h=zr(cn);if(c.default.setItem("weather_cards",h).catch(A=>{console.error("weather_cards persistence failed:",A)}),I.current?.uid){const A=h.map(U=>({id:U.id,isMain:U.isMain,locationName:U.locationName,lat:U.lat,lon:U.lon})),q=An(un,"config",I.current.uid);Da(q,{savedWeatherCards:A},{merge:!0}).catch(console.error)}}},[cn,Ve]),(0,a.useEffect)(()=>{(async()=>{if(I.current?.uid&&Ve)try{const A=An(un,"config",I.current.uid),q=await er(A);if(q.exists()){const U=q.data();if(U.savedWeatherCards&&U.savedWeatherCards.filter(W=>!N.current.some(ee=>ee.id===W.id)).forEach(W=>{W.isMain?Ta():yt({id:W.id,fullName:W.locationName,lat:W.lat,lon:W.lon},!1,W.lat,W.lon)}),U.settings){const W=U.settings;W.isDarkMode!==void 0&&f(W.isDarkMode),W.hiddenSections&&L(W.hiddenSections),W.weatherCardLayout&&Ee(W.weatherCardLayout),W.isRoutingMode!==void 0&&Zn(W.isRoutingMode),W.siteSections&&we(W.siteSections),W.isStickyBgMode!==void 0&&F(W.isStickyBgMode),W.sectionThemes&&D(W.sectionThemes),W.heroBg&&E(W.heroBg),W.heroBg2&&te(W.heroBg2),W.heroBg3&&ae(W.heroBg3),W.heroBg4&&Z(W.heroBg4),W.heroBgMode&&Ie(W.heroBgMode),W.customHeroBgs&&_(W.customHeroBgs),W.heroOverlayOpacity!==void 0&&Ue(W.heroOverlayOpacity),W.bgRatings&&Ze(W.bgRatings)}}}catch(A){console.error("Error syncing from Firestore:",A)}})()},[v,Ve]),(0,a.useEffect)(()=>{Ve&&(async()=>{try{const A=await c.default.getItem("weather_cards");if(A){const q=zr(A);hn(q)}}catch(A){console.error("weather_cards hydration failed:",A)}})()},[Ve]),(0,a.useEffect)(()=>{if(Ve&&(c.default.setItem("isRoutingMode",zn),c.default.setItem(Ui,ne),c.default.setItem("hiddenSections",C),c.default.setItem("weatherCardLayout",G),c.default.setItem("isStickyBgMode",g),c.default.setItem("sectionThemes",P),c.default.setItem("isDarkMode",x),c.default.setItem("hero_video_playback_speed",Q),I.current?.uid)){const h=An(un,"config",I.current.uid);Da(h,{settings:{isDarkMode:x,hiddenSections:C,weatherCardLayout:G,isRoutingMode:zn,siteSections:ne,isStickyBgMode:g,sectionThemes:P,heroBg:w,heroBg2:Y,heroBg3:de,heroBg4:B,heroBgMode:ge,customHeroBgs:O,heroOverlayOpacity:he,bgRatings:De}},{merge:!0}).catch(console.error)}},[zn,ne,C,G,g,P,x,w,Y,de,B,ge,O,he,De,Q,Ve]);const[ke,pt]=(0,a.useState)("");(0,a.useEffect)(()=>{let h=Je;return Je instanceof Blob&&(h=URL.createObjectURL(Je)),pt(h),()=>{Je instanceof Blob&&h&&URL.revokeObjectURL(h)}},[Je]);const Qn=(0,a.useRef)(null);(0,a.useEffect)(()=>{const h=se.current,A=ye.current;if(!h||!A)return;Qn.current!==ke&&(Pn(0),Qn.current=ke);const q=ue&&(!dn||!Ge),U=q?nn:0,W=.02;let ee=h,Ne=A;h.src&&ke&&h.src.includes(ke)?(ee=h,Ne=A):A.src&&ke&&A.src.includes(ke)?(ee=A,Ne=h):(ee=h.paused||h.volume===0?h:A,Ne=ee===h?A:h),q?ee.paused||ee.src===""||!ee.src.includes(ke)?(ee.src=ke,!jt.current&&bt>0?(ee.currentTime=bt,jt.current=!0):ee.currentTime=0,ee.volume=0,ee.playbackRate=Ht,ee.play().catch(()=>{})):ee.paused&&ee.play().catch(()=>{}):q||(h.paused||h.pause(),A.paused||A.pause());const at=setInterval(()=>{ee.volume<U?ee.volume=Math.min(U,ee.volume+W):ee.volume=U,Ne.volume>0?Ne.volume=Math.max(0,Ne.volume-W):Ne.pause(),ee.volume===U&&Ne.volume===0&&clearInterval(at)},50);return()=>clearInterval(at)},[ue,dn,Ge,ke,nn,Ht,bt]),(0,a.useEffect)(()=>{const h=setInterval(()=>{const A=se.current,q=ye.current;if(!A||!q)return;const U=A&&!A.paused?A:q&&!q.paused?q:null;U&&U.currentTime>0&&c.default.setItem("bg_music_position",U.currentTime)},5e3);return()=>clearInterval(h)},[]);const _n=(0,a.useCallback)(async()=>{Yt(0),await c.default.setItem("bg_music_position",0),se.current&&(se.current.currentTime=0),ye.current&&(ye.current.currentTime=0),jt.current=!1},[]),on=(0,a.useCallback)(()=>{const h=se.current,A=ye.current;if(!h||!A)return;let q=h;if(A.src&&ke&&A.src.includes(ke)&&(q=A),lt==="loop"){q.currentTime=0,q.play().catch(()=>{});return}const U=(xt||[]).find(ee=>ee&&ee.file===Je);let W=1;U?W=U.repeats||1:ln&&(W=$t[ln]?.repeats||1),Pn(ee=>{const Ne=ee+1;if(Ne<W)return q.currentTime=0,q.play().catch(()=>{}),Ne;if(lt==="order"){const at=tr.map(j=>({id:j.id,file:ra[j.audio]||"/assets/turkeys-CKqvNzQ4.mp3",enabled:$t[j.id]?.enabled!==!1})).filter(j=>j.enabled),Pt=(xt||[]).filter(j=>j&&j.enabled!==!1),ft=[...at.map(j=>({id:j.id,file:j.file,isCustom:!1})),...Pt.map(j=>({id:j.id,file:j.file,isCustom:!0}))];if(ft.length>0){const j=ft.findIndex(Tt=>Tt.file===Je);if(tn){const Tt=ft.filter(ta=>ta.file!==Je),xn=Tt.length>0?Tt[Math.floor(Math.random()*Tt.length)]:ft[0];st(xn.file),fn(xn.isCustom?null:xn.id)}else{const Tt=ft[(j+1)%ft.length];st(Tt.file),fn(Tt.isCustom?null:Tt.id)}}}return 0})},[lt,Je,xt,tn,ln,$t,ke]);(0,a.useEffect)(()=>{ue&&(se.current&&!se.current.paused?se.current.currentTime=0:ye.current&&!ye.current.paused&&(ye.current.currentTime=0))},[lt,ue]),(0,a.useEffect)(()=>{Ve&&(c.default.setItem("isDarkMode",x),c.default.setItem("sectionThemes",P),c.default.setItem("hiddenSections",C),c.default.setItem("hero_background",w),c.default.setItem("custom_hero_backgrounds",O),c.default.setItem("hero_background_2",Y),c.default.setItem("hero_background_3",de),c.default.setItem("hero_background_4",B),c.default.setItem("hero_bg_ratings",De),c.default.setItem("hero_bg_mode",ge),c.default.setItem("hero_overlay_opacity",he),c.default.setItem("hero_slideshow_interval",me),c.default.setItem("hero_slideshow_transition",Ce),c.default.setItem("hero_bg_filter_category",rt),c.default.setItem("hero_bg_zoom",Pe),c.default.setItem("hero_bg_rotation",X),c.default.setItem("hero_bg_blur",ot),c.default.setItem("hero_bg_blur_type",T),c.default.setItem("hero_bg_pixelation",gt),c.default.setItem("hero_bg_focal1",pe),c.default.setItem("hero_bg_focal2",_e),c.default.setItem("hero_bg_focal3",be),c.default.setItem("hero_bg_focal4",qe),c.default.setItem("hero_bg_pan_enabled",vt),c.default.setItem("hero_bg_pan_speed",It),c.default.setItem("custom_holiday_name",S),c.default.setItem("selected_timezone",Xt),c.default.setItem("weather_card_layout",G),c.default.setItem("show_update_timer",oe),c.default.setItem("modal_loading_strategy",Ft))},[w,Y,de,B,O,De,ge,he,me,Ce,rt,Pe,X,ot,T,gt,pe,_e,be,qe,vt,It,Ve,x,P,C,S,Xt,G,oe,Ft]),(0,a.useEffect)(()=>{v?.fastClicks?document.body.classList.add("fast-clicks-enabled"):document.body.classList.remove("fast-clicks-enabled")},[v?.fastClicks]),(0,a.useEffect)(()=>{Ve&&(v?(c.default.setItem("active_user",v),v.avatar&&(ve(v.avatar),c.default.setItem("currentAvatar",v.avatar))):c.default.removeItem("active_user"))},[v,Ve]),(0,a.useEffect)(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),(0,a.useEffect)(()=>{N.current=cn},[cn]);const yt=(0,a.useCallback)(async(h,A,q=null,U=null,W=!1)=>{try{let ee=q,Ne=U,at=typeof h=="string"?h:h?.fullName||"Ваша локація";if(h&&typeof h=="object"&&h.lat)ee=h.lat,Ne=h.lon,at=h.fullName||at;else if(typeof h=="string"){const fe=pl(h);if(fe)ee=fe.lat,Ne=fe.lon,at=fe.fullName,h={id:`search-${fe.name.toLowerCase()}`};else{const Ye=await Oa.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(h)}&count=1&language=uk`);if(Ye.data.results&&Ye.data.results[0])ee=Ye.data.results[0].latitude,Ne=Ye.data.results[0].longitude,at=Ye.data.results[0].name,h={id:Date.now()};else{alert("Місто не знайдено в базі Open-Meteo");return}}}const Pt=A?"main-card":h?.id||Date.now();if(!A&&!N.current.find(fe=>fe.id===Pt))if(I.current)try{const fe=An(un,"config",I.current.uid),Ye=await er(fe);let He=Ye.exists()?Ye.data():{};const Se=new Date().toISOString().split("T")[0];if(He.cardAdditionsDate!==Se&&(He.cardAdditionsCount=0,He.cardAdditionsDate=Se),He.cardAdditionsCount>=10){alert("Ви досягли ліміту в 10 карток на добу.");return}He.cardAdditionsCount+=1,await Da(fe,{cardAdditionsCount:He.cardAdditionsCount,cardAdditionsDate:He.cardAdditionsDate},{merge:!0})}catch(fe){console.error("Помилка перевірки ліміту Firestore:",fe)}else{let fe=await c.default.getItem("anonCardLimit")||{};const Ye=Date.now();if((!fe.startDate||Ye-fe.startDate>6048e5)&&(fe={startDate:Ye,count:0}),fe.count>=3){alert("Незареєстровані користувачі можуть додавати лише 3 картки на тиждень. Увійдіть в акаунт, щоб збільшити ліміт!");return}fe.count+=1,await c.default.setItem("anonCardLimit",fe)}const ft=`https://api.open-meteo.com/v1/forecast?latitude=${ee}&longitude=${Ne}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,cloud_cover,visibility,dew_point_2m,temperature_80m,is_day&hourly=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant,precipitation_probability_max,rain_sum,precipitation_sum,sunrise,sunset&timezone=auto&past_days=1&forecast_days=16`;console.log("Fetching weather from URL:",ft);const j=(await Oa.get(ft)).data;if(console.log("💾 RAW API RESPONSE for",at,j),console.log("API Response raw data:",{hasResponse:!!j,currentData:j.current,hourlyData:j.hourly?{time:j.hourly.time?.slice(0,2),wind:j.hourly.wind_speed_10m?.slice(0,2)}:null,dailyData:j.daily?{time:j.daily.time?.slice(0,2),uv_index_max:j.daily.uv_index_max?.slice(0,2),wind_speed_10m_max:j.daily.wind_speed_10m_max?.slice(0,2)}:null}),(!j.current||j.current.wind_speed_10m===void 0)&&console.error("❌ Wind speed data missing from current!",{hasCurrentData:!!j.current,currentKeys:j.current?Object.keys(j.current):[],windSpeed:j.current?.wind_speed_10m}),(!j.daily?.uv_index_max||j.daily.uv_index_max.length===0)&&console.error("❌ UV index data missing from daily!",{hasDailyData:!!j.daily,dailyKeys:j.daily?Object.keys(j.daily):[],uvIndex:j.daily?.uv_index_max,uvLength:j.daily?.uv_index_max?.length}),j.hourly?.wind_speed_10m||console.error("❌ Hourly wind data missing!",{hasHourlyData:!!j.hourly,hourlyKeys:j.hourly?Object.keys(j.hourly):[],wind:j.hourly?.wind_speed_10m}),"Notification"in window&&Notification.permission==="granted"){const fe=Date.now();if(fe-Number(window.localStorage.getItem("weatherNotificationLastSentAt")||0)>=36e5){const Ye=Math.round(j.current.temperature_2m),He=Math.round(j.current.apparent_temperature),Se=j.current.wind_speed_10m??0,je=j.current.relative_humidity_2m??0,tt=Lm(j.current.weather_code,j.current.is_day),Ut=`Температура ${Ye}°C${He!==Ye?`, відчувається ${He}°C`:""}, ${tt}, вітер ${Se} м/с, вологість ${je}%.`;new Notification(`🌤️ Погода: ${at}`,{body:Ut,icon:"/favicon.ico"}),window.localStorage.setItem("weatherNotificationLastSentAt",String(fe))}}const Tt=new Date;let xn=Tt.getHours();xn>=18&&(xn=18);const ta=`${Tt.getFullYear()}-${String(Tt.getMonth()+1).padStart(2,"0")}-${String(Tt.getDate()).padStart(2,"0")}T${String(xn).padStart(2,"0")}:00`;let Ln=(j.hourly?.time||[]).findIndex(fe=>fe.startsWith(ta));Ln===-1&&(Ln=0);const Pa=168;hn(fe=>{const Ye=fe.find(Se=>Se.id===Pt);console.log(`Creating weather card for ${at}`,{windSpeedCurrent:j.current?.wind_speed_10m,windSpeedHourly:j.hourly?.wind_speed_10m?.slice(0,3),uvIndexDaily:j.daily?.uv_index_max?.slice(0,3)});const He={id:Pt,isMain:A,locationName:A&&!h?.fullName?"Ваша локація":Ye?Ye.locationName:at,lat:ee,lon:Ne,current:{temp:`${Math.round(j.current.temperature_2m)}°C`,tempNum:Math.round(j.current.temperature_2m),feels_like:`${Math.round(j.current.apparent_temperature)}°C`,humidity:`${j.current.relative_humidity_2m}%`,pressure:`${Math.round(j.current.surface_pressure)} hPa`,wind_speed:`${j.current.wind_speed_10m??0} м/с`,windNum:j.current.wind_speed_10m??0,wind_direction_10m:j.current.wind_direction_10m??0,wind_gusts_10m:j.current.wind_gusts_10m??0,uv_index:j.daily?.uv_index_max?.[0]??0,cloud_cover:j.current.cloud_cover??0,visibility:j.current.visibility??0,dew_point_2m:j.current.dew_point_2m??0,temperature_80m:j.current.temperature_80m??0,description:"За кодом: "+j.current.weather_code,iconPlaceholder:Xa(j.current.weather_code,j.current.is_day),iconSymbol:Nr(j.current.weather_code,j.current.is_day)},hourly:(j.hourly?.time||[]).slice(Ln,Ln+Pa).map((Se,je)=>{const tt=Ln+je,Ut=new Date(Se),Et=Se.slice(0,10),En=(j.daily?.time||[]).indexOf(Et);let Hn=1;if(En!==-1&&j.daily?.sunrise?.[En]&&j.daily?.sunset?.[En])Hn=Se>=j.daily.sunrise[En]&&Se<=j.daily.sunset[En]?1:0;else{const Ia=Ut.getHours();Hn=Ia>=6&&Ia<21?1:0}return{time:`${String(Ut.getHours()).padStart(2,"0")}:00`,dateLabel:Ut.toLocaleDateString("uk",{day:"2-digit",month:"2-digit"}),fullTime:Se,temp:`${Math.round(j.hourly?.temperature_2m?.[tt]??0)}°C`,tempNum:Math.round(j.hourly?.temperature_2m?.[tt]??0),feels_like:`${Math.round(j.hourly?.apparent_temperature?.[tt]??0)}°C`,windNum:j.hourly?.wind_speed_10m?.[tt]??0,wind_direction_10m:j.hourly?.wind_direction_10m?.[tt]??0,wind_gusts_10m:j.hourly?.wind_gusts_10m?.[tt]??0,relative_humidity_2m:j.hourly?.relative_humidity_2m?.[tt]??null,dew_point_2m:j.hourly?.dew_point_2m?.[tt]??0,precipitation:j.hourly?.precipitation?.[tt]??null,rain:j.hourly?.rain?.[tt]??null,pressure_msl:j.hourly?.pressure_msl?.[tt]??null,cloud_cover:j.hourly?.cloud_cover?.[tt]??null,visibility:j.hourly?.visibility?.[tt]??0,iconPlaceholder:Xa(j.hourly?.weather_code?.[tt]??0,Hn),iconSymbol:Nr(j.hourly?.weather_code?.[tt]??0,Hn)}}),daily16:(j.daily?.time||[]).map((Se,je)=>({date:new Date(Se).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),fullDate:Se,day:new Date(Se).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(j.daily.temperature_2m_max[je]??0)}°C`,temp_night:`${Math.round(j.daily.temperature_2m_min[je]??0)}°C`,uv_index:j.daily.uv_index_max?.[je]??0,wind_speed:`${j.daily.wind_speed_10m_max?.[je]??0} м/с`,wind_direction_10m:j.daily.wind_direction_10m_dominant?.[je]??0,precipitation_probability_max:j.daily.precipitation_probability_max?.[je]??0,rain_sum:j.daily.rain_sum?.[je]??0,precipitation_sum:j.daily.precipitation_sum?.[je]??0,sunrise:j.daily.sunrise?.[je]??null,sunset:j.daily.sunset?.[je]??null,iconPlaceholder:Xa(j.daily.weather_code[je]??0,1),iconSymbol:Nr(j.daily.weather_code[je]??0,1),description:Xa(j.daily.weather_code[je]??0,1)}))};return console.log(`Card data created for ${at}:`,{windSpeedStored:He.current.windNum,uvIndexStored:He.current.uv_index,hourlyWindSample:He.hourly?.slice(0,2).map(Se=>Se.windNum),dailyWindSample:He.daily16?.slice(0,2).map(Se=>Se.wind_speed)}),W?[He,...fe.filter(Se=>Se.id!==Pt)]:A?fe.some(Se=>Se.isMain)?fe.map(Se=>Se.isMain?He:Se):[He,...fe]:Ye?fe.map(Se=>Se.id===Pt?He:Se):fe.length>=8?fe:[...fe,He]});try{const fe=new Date,Ye=new Date(fe);Ye.setDate(Ye.getDate()+210);const He=tt=>tt.toISOString().split("T")[0],Se=`https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${ee}&longitude=${Ne}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&start_date=${He(fe)}&end_date=${He(Ye)}`,je=(await Oa.get(Se)).data;if(je?.daily?.time?.length){const tt=je.daily.time.map((Ut,Et)=>({fullDate:Ut,date:new Date(Ut).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),day:new Date(Ut).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(Array.isArray(je.daily.temperature_2m_max?.[0])?je.daily.temperature_2m_max[0][Et]??0:je.daily.temperature_2m_max?.[Et]??0)}°C`,temp_night:`${Math.round(Array.isArray(je.daily.temperature_2m_min?.[0])?je.daily.temperature_2m_min[0][Et]??0:je.daily.temperature_2m_min?.[Et]??0)}°C`,wind_speed:`${Math.round(Array.isArray(je.daily.wind_speed_10m_max?.[0])?je.daily.wind_speed_10m_max[0][Et]??0:je.daily.wind_speed_10m_max?.[Et]??0)} м/с`,precipitation_sum:Array.isArray(je.daily.precipitation_sum?.[0])?je.daily.precipitation_sum[0][Et]??0:je.daily.precipitation_sum?.[Et]??0,isSeasonal:!0}));hn(Ut=>Ut.map(Et=>Et.id===Pt?{...Et,seasonal:tt}:Et))}}catch(fe){console.warn("Seasonal forecast unavailable:",fe.message)}}catch(ee){console.error("Помилка завантаження погоди",ee)}},[]),ea=(0,a.useCallback)(async(h,A)=>{try{const{current:q,daily:U}=(await Oa.get(`https://api.open-meteo.com/v1/forecast?latitude=${h}&longitude=${A}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max&timezone=auto&forecast_days=3`)).data||{};if(!q||!U)return console.warn("Weather danger check: Missing data",{hasCurrent:!!q,hasDaily:!!U}),null;const W=q.wind_speed_10m??0,ee=q.temperature_2m??0,Ne=U?.uv_index_max?.[0]??0;console.log("Weather danger check data:",{windSpeed:W,currentTemp:ee,uvIndex:Ne,hasUvData:!!U.uv_index_max});const at=(Pt,ft,j,Tt)=>Pt>30||ft<-30||j>10||Tt>7;return at(U?.temperature_2m_max?.[0]??ee,U?.temperature_2m_min?.[0]??ee,W,Ne)?"red":U?.time?.some((Pt,ft)=>at(U.temperature_2m_max?.[ft],U.temperature_2m_min?.[ft],U.wind_speed_10m_max?.[ft]||0,U.uv_index_max?.[ft]||0))?"orange":null}catch(q){return console.error("Weather danger check error:",q),null}},[]),Ta=(0,a.useCallback)(()=>{if(!Bn){yt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52);return}"geolocation"in navigator?navigator.geolocation.getCurrentPosition(h=>{yt({id:"main-card"},!0,h.coords.latitude,h.coords.longitude)},()=>yt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)):yt({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)},[yt,Bn]),Sn=(0,a.useCallback)(h=>{h.isMain?Ta():yt(h,!1)},[Ta,yt]),Cl=(0,a.useCallback)(()=>{console.log("Manual bulk refresh triggered..."),N.current.length>0&&N.current.forEach(h=>Sn(h)),z(H())},[Sn,H]);(0,a.useEffect)(()=>{Ta()},[Ta]),(0,a.useEffect)(()=>{if(!Ve)return;const h=rm(window.location.search,window.location.hash);if(h.isSearchEntry&&h.cityName){const A=h.cityData;document.title=`Погода в місті ${h.cityName} — точний прогноз | Стихія`;const q=document.querySelector('meta[name="description"]');q&&q.setAttribute("content",`Точний прогноз погоди в місті ${h.cityName}: температура, вітер, вологість, тиск та графік на 16 днів.`),yt(A.lat!==null?{id:A.id,fullName:A.fullName,lat:A.lat,lon:A.lon}:A.name,!1,A.lat,A.lon,!0),setTimeout(()=>{const U=document.getElementById("weather");U&&U.scrollIntoView({behavior:"smooth"})},700)}},[Ve,yt]),(0,a.useEffect)(()=>{if(!Ve)return;const h=new Date;h.setDate(h.getDate()-1);const A=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`;cn.forEach(q=>{q.daily16?.[0]?.fullDate!==A&&Sn(q)})},[Ve,cn,Sn]),(0,a.useEffect)(()=>{if(!Ve)return;const h=setInterval(()=>{if(document.visibilityState==="visible"){const A=H();z(q=>(q<=5&&A>3590&&(console.log("Auto-updating weather cards at start of hour..."),N.current.forEach(U=>Sn(U))),A))}},1e3);return()=>clearInterval(h)},[Ve,Sn,H]);const or=(0,a.useCallback)(h=>{hn(A=>A.filter(q=>q.id!==h))},[]),ir=(0,a.useCallback)(h=>{if(N.current.length>=8){alert("Можна мати не більше 8 карток одночасно!");return}yt(h,!1)},[yt]),sr=(0,a.useCallback)((h,A)=>{hn(q=>q.map(U=>U.id===h?{...U,locationName:A}:U))},[]),lr=(0,a.useCallback)((h,A)=>{hn(q=>{const U=q.findIndex(Ne=>Ne.id===h);if(U===-1)return q;const W=U+A;if(W<0||W>=q.length)return q;const ee=[...q];return[ee[U],ee[W]]=[ee[W],ee[U]],ee})},[]);(0,a.useEffect)(()=>{const h=setTimeout(()=>u(!0),3500),A=setTimeout(()=>n(!1),5300),q=setInterval(()=>p(new Date),1e3);return()=>{clearTimeout(h),clearTimeout(A),clearInterval(q)}},[]);const Tl=()=>{y(null),ve(Go),c.default.removeItem("currentAvatar"),ht(!1)},Al=(0,a.useCallback)(()=>{f(h=>{const A=!h;return D({}),A})},[]),Il=(0,a.useCallback)(h=>{D(A=>({...A,[h]:!A[h]}))},[]),Dl=(0,a.useCallback)(()=>{D({})},[]),Ml=(0,a.useCallback)(h=>{L(A=>A.includes(h)?A.filter(q=>q!==h):xr.length-A.length<=2?A:[...A,h])},[]),Aa=(()=>{const h=v?.showSeconds!==!1,A=v?.dateDisplayMode||"both",q=v?.hour12===!0;try{const U={timeZone:Xt,hour12:q};(A==="time"||A==="both")&&(U.hour="2-digit",U.minute="2-digit",h&&(U.second="2-digit")),(A==="date"||A==="both")&&(U.weekday="long",U.day="numeric",U.month="2-digit",U.year="numeric");const W=new Intl.DateTimeFormat("uk",U).formatToParts(b),ee=Pt=>W.find(ft=>ft.type===Pt)?.value||"",Ne=A==="time"||A==="both"?`${ee("hour")}:${ee("minute")}${h?":"+ee("second"):""}${q&&ee("dayPeriod")?" "+ee("dayPeriod"):""}`:"",at=A==="date"||A==="both"?`${ee("weekday")?ee("weekday").charAt(0).toUpperCase()+ee("weekday").slice(1):""}${ee("day")?`, ${ee("day")}.${ee("month")}.${ee("year")}`:""}`:"";return A==="both"?`${Ne} ${at}`.trim():Ne||at}catch{return`${String(b.getHours()).padStart(2,"0")}:${String(b.getMinutes()).padStart(2,"0")}${v?.showSeconds!==!1?`:${String(b.getSeconds()).padStart(2,"0")}`:""} ${b.toLocaleDateString("uk")}`}})(),eo=Gi(),dr=Wl();(0,a.useEffect)(()=>{!zn&&dr.pathname!=="/"&&eo("/")},[zn,eo,dr.pathname]);const Rl=(h,A)=>{we(q=>{const U=[...q],W=h+A;return W<0||W>=U.length||([U[h],U[W]]=[U[W],U[h]]),U})},cr=(0,a.useCallback)(()=>ut(!0),[]),zl=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(Rr,{heroDateString:Aa,onAddCity:ir,startAnimation:!t,user:v,checkWeatherDanger:ea,heroBg:w,setHeroBg:E,heroBg2:Y,setHeroBg2:te,heroBg3:de,setHeroBg3:ae,heroBg4:B,setHeroBg4:Z,isDarkMode:x,customHeroBgs:O,setCustomHeroBgs:_,heroBgMode:ge,setHeroBgMode:Ie,heroOverlayOpacity:he,setHeroOverlayOpacity:Ue,bgRatings:De,setBgRatings:Ze,slideshowInterval:me,setSlideshowInterval:$e,slideshowTransition:Ce,setSlideshowTransition:dt,filterCategory:rt,setFilterCategory:ct,heroBgZoom:Pe,setHeroBgZoom:Ke,heroBgRotation:X,setHeroBgRotation:ie,heroBgBlur:ot,setHeroBgBlur:wt,heroBgBlurType:T,heroBgPixelation:gt,setHeroBgPixelation:Le,setHeroBgBlurType:$,heroBgFocal1:pe,setHeroBgFocal1:Te,heroBgFocal2:_e,setHeroBgFocal2:Be,heroBgFocal3:be,setHeroBgFocal3:At,heroBgFocal4:qe,setHeroBgFocal4:mt,heroBgPanEnabled:vt,setHeroBgPanEnabled:Xe,heroBgPanSpeed:It,setHeroBgPanSpeed:V,videoPlaybackSpeed:Q,setVideoPlaybackSpeed:re,screenshots:Xn,selectedTimezone:Xt,setSelectedTimezone:Yn,customHolidayName:S,isStickyBgMode:g,setCustomHolidayName:M})}),(0,e.jsx)($r,{$isDarkMode:P.weather??x,$isStickyBgMode:g,$isHidden:C.includes("weather"),children:(0,e.jsx)(Or,{section:ne.find(h=>h.key==="weather"),weatherCards:cn,heroDateString:Aa,isDarkMode:P.weather??x,isLocationEnabled:Bn,handleRefreshCard:Sn,handleDeleteCard:or,handleRenameCard:sr,moveWeatherCard:lr,setIsLocationEnabled:Ca,user:v,isAnyModalOpen:k,onUpdateUser:y,setHeroBg:E,customHeroBgs:O,setCustomHeroBgs:_,handleOpenRegister:cr,customHolidayName:S,isStickyBgMode:g,setCustomHolidayName:M,weatherCardLayout:G,isWeatherDetailsOpen:Jt,setIsWeatherDetailsOpen:rn,selectedWeatherCard:s,setSelectedWeatherCard:m,setIsFsActive:et,isStickyBgMode:g})})]}),Ll=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(Rr,{heroDateString:Aa,onAddCity:ir,startAnimation:!t,user:v,checkWeatherDanger:ea,heroBg:w,setHeroBg:E,heroBg2:Y,setHeroBg2:te,heroBg3:de,setHeroBg3:ae,heroBg4:B,setHeroBg4:Z,customHeroBgs:O,setCustomHeroBgs:_,heroBgMode:ge,setHeroBgMode:Ie,heroOverlayOpacity:he,setHeroOverlayOpacity:Ue,bgRatings:De,setBgRatings:Ze,slideshowInterval:me,setSlideshowInterval:$e,slideshowTransition:Ce,setSlideshowTransition:dt,filterCategory:rt,setFilterCategory:ct,heroBgZoom:Pe,setHeroBgZoom:Ke,heroBgRotation:X,setHeroBgRotation:ie,heroBgBlur:ot,setHeroBgBlur:wt,heroBgBlurType:T,heroBgPixelation:gt,setHeroBgPixelation:Le,setHeroBgBlurType:$,heroBgFocal1:pe,setHeroBgFocal1:Te,heroBgFocal2:_e,setHeroBgFocal2:Be,heroBgFocal3:be,setHeroBgFocal3:At,heroBgFocal4:qe,setHeroBgFocal4:mt,heroBgPanEnabled:vt,setHeroBgPanEnabled:Xe,heroBgPanSpeed:It,setHeroBgPanSpeed:V,videoPlaybackSpeed:Q,setVideoPlaybackSpeed:re,screenshots:Xn,selectedTimezone:Xt,setSelectedTimezone:Yn,customHolidayName:S,isStickyBgMode:g,setCustomHolidayName:M})}),(0,e.jsx)("div",{className:"container",children:ne.map(h=>h.key!=="hero"&&(0,e.jsx)($r,{$isDarkMode:P[h.key]??x,$isStickyBgMode:g,$isHidden:C.includes(h.key),children:(0,e.jsx)(Or,{section:h,weatherCards:cn,isDarkMode:P[h.key]??x,isLocationEnabled:Bn,handleRefreshCard:Sn,handleDeleteCard:or,handleRenameCard:sr,moveWeatherCard:lr,setIsLocationEnabled:Ca,user:v,isAnyModalOpen:k,onUpdateUser:y,setHeroBg:E,customHeroBgs:O,setCustomHeroBgs:_,handleOpenRegister:cr,customHolidayName:S,isStickyBgMode:g,setCustomHolidayName:M,weatherCardLayout:G,isWeatherDetailsOpen:Jt,setIsWeatherDetailsOpen:rn,selectedWeatherCard:s,setSelectedWeatherCard:m,heroDateString:Aa,setIsFsActive:et,isStickyBgMode:g})},h.key))})]});return(0,e.jsxs)(sp,{isDarkMode:x,children:[(0,e.jsx)(hm,{user:v}),(0,e.jsx)(zm,{$locked:dn&&Lt}),(0,e.jsx)(hc,{isLoading:t,isFadingOut:r,randomPhrase:l.text&&(0,e.jsxs)(_m,{$isNew:l.isNew,children:[l.text,Fa.map(h=>(0,e.jsx)(Vm,{$x:h.x,$y:h.y,$delay:h.delay,$isNew:l.isNew,children:"✧"},h.id))]})}),(0,e.jsx)(Em,{$isDarkMode:x,$isStickyBgMode:g,children:(0,e.jsxs)("div",{className:"App",children:[(0,e.jsx)("audio",{ref:se,onEnded:on,preload:"auto"}),(0,e.jsx)("audio",{ref:ye,onEnded:on,preload:"auto"}),(0,e.jsx)("div",{className:"container",children:(0,e.jsx)(Qp,{sfxVolume:Wt,onOpenRegister:()=>ut(!0),onOpenLogin:()=>We(!0),onOpenSettings:()=>ht(!0),onOpenVip:()=>ce(!0),onOpenShop:()=>Dt(!0),onOpenAchievements:()=>nt(!0),onOpenHelp:()=>pn(!0),onOpenInfo:()=>en(!0),onOpenOtherOptions:()=>St(!0),onCloseInfo:()=>en(!1),isInfoOpen:kt,user:v,isDarkMode:x,toggleTheme:Al,sectionThemes:P,hiddenSections:C,onToggleSectionVisibility:Ml,onToggleSectionTheme:Il,onResetSectionThemes:Dl,currentAvatar:K,onLogout:Tl,siteSections:ne,moveSiteSection:Rl,resetSiteSections:()=>we([...xr]),isRoutingMode:zn,setIsRoutingMode:Zn,currentPath:dr.pathname.substring(1),loadingStrategy:Ft,onSetLoadingStrategy:Mt,setIsFsActive:et,isStickyBgMode:g,setIsStickyBgMode:F})}),(0,e.jsx)("main",{children:(0,e.jsx)(a.Suspense,{fallback:null,children:(0,e.jsxs)(Ul,{children:[(0,e.jsx)(fr,{path:"/",element:Ll}),ne.map(h=>(0,e.jsx)(fr,{path:`/${h.path}`,element:h.key==="weather"?zl:(0,e.jsx)("div",{className:"container",style:{paddingTop:"40px",minHeight:"80vh"},children:h.key==="hero"?(0,e.jsx)(Rr,{heroDateString:Aa,onAddCity:ir,startAnimation:!t,user:v,isDarkMode:P.hero??x,checkWeatherDanger:ea,heroBg:w,setHeroBg:E,heroBg2:Y,setHeroBg2:te,heroBg3:de,setHeroBg3:ae,heroBg4:B,setHeroBg4:Z,customHeroBgs:O,setCustomHeroBgs:_,heroBgMode:ge,setHeroBgMode:Ie,heroOverlayOpacity:he,setHeroOverlayOpacity:Ue,bgRatings:De,setBgRatings:Ze,slideshowInterval:me,setSlideshowInterval:$e,slideshowTransition:Ce,setSlideshowTransition:dt,filterCategory:rt,setFilterCategory:ct,heroBgZoom:Pe,setHeroBgZoom:Ke,heroBgRotation:X,setHeroBgRotation:ie,heroBgBlur:ot,setHeroBgBlur:wt,heroBgBlurType:T,heroBgPixelation:gt,setHeroBgPixelation:Le,heroBgFocal1:pe,setHeroBgFocal1:Te,heroBgFocal2:_e,setHeroBgFocal2:Be,heroBgFocal3:be,setHeroBgFocal3:At,heroBgFocal4:qe,setHeroBgFocal4:mt,heroBgPanEnabled:vt,setHeroBgPanEnabled:Xe,heroBgPanSpeed:It,setHeroBgPanSpeed:V,videoPlaybackSpeed:Q,setVideoPlaybackSpeed:re,screenshots:Xn,selectedTimezone:Xt,setSelectedTimezone:Yn,customHolidayName:S,isStickyBgMode:g,setCustomHolidayName:M}):(0,e.jsx)($r,{$isDarkMode:P[h.key]??x,$isStickyBgMode:g,$isHidden:!1,children:(0,e.jsx)(Or,{section:h,weatherCards:cn,isDarkMode:P[h.key]??x,isLocationEnabled:Bn,handleRefreshCard:Sn,handleDeleteCard:or,handleRenameCard:sr,moveWeatherCard:lr,setIsLocationEnabled:Ca,user:v,isAnyModalOpen:k,onUpdateUser:y,setHeroBg:E,customHeroBgs:O,setCustomHeroBgs:_,handleOpenRegister:cr,customHolidayName:S,isStickyBgMode:g,setCustomHolidayName:M,isWeatherDetailsOpen:Jt,setIsWeatherDetailsOpen:rn,selectedWeatherCard:s,setSelectedWeatherCard:m,setIsFsActive:et,isStickyBgMode:g})})})},h.key)),(0,e.jsx)(fr,{path:"*",element:(0,e.jsx)(ku,{})})]})})}),(0,e.jsxs)(a.Suspense,{fallback:null,children:[it&&(0,e.jsx)(Tm,{onClose:()=>ut(!1),onRegister:h=>{y(h),ut(!1)},availableAvatars:_i,isDarkMode:x}),Me&&(0,e.jsx)(Am,{onClose:()=>We(!1),onLogin:h=>{y(h),We(!1)}}),Rt&&v&&(0,e.jsx)(Im,{onClose:()=>ht(!1),user:v,availableAvatars:_i,onUpdate:y,weatherCardLayout:G,onUpdateLayout:Ee,showUpdateTimer:oe,setShowUpdateTimer:Ae,isDarkMode:x}),xe&&(0,e.jsx)(Dm,{onClose:()=>ce(!1)}),zt&&(0,e.jsx)(km,{onClose:()=>Dt(!1),hasVip:!!v}),Bt&&(0,e.jsx)(Sm,{onClose:()=>nt(!1),isDarkMode:x}),_t&&(0,e.jsx)(Pr,{isDarkMode:x,isOpen:_t,onClose:()=>pn(!1)}),Nt&&(0,e.jsx)(Pr,{isOpen:Nt,onClose:()=>ka(!1)}),kt&&(0,e.jsx)(Pr,{onClose:()=>en(!1)}),(0,e.jsx)(Mm,{isOpen:Jt,onClose:()=>rn(!1),card:s,isDarkMode:x}),Qe&&(0,e.jsx)(Rm,{sfxVolume:Wt,setSfxVolume:$n,bgAudioRef:se,bgAudioRef2:ye,onClose:()=>St(!1),bgMusicEnabled:ue,setBgMusicEnabled:Re,autoMuteBgMusic:Ge,setAutoMuteBgMusic:ze,lockFiltersInFs:Lt,setLockFiltersInFs:vn,bgMusicSource:Je,setBgMusicSource:st,customBgTracks:xt,setCustomBgTracks:wn,bgMusicVolume:nn,setBgMusicVolume:In,bgMusicSpeed:Ht,setBgMusicSpeed:Gt,bgMusicMode:lt,setBgMusicMode:qt,bgMusicShuffle:tn,setBgMusicShuffle:Jn,libraryBgSettings:$t,setLibraryBgSettings:an,activeBgTrackId:ln,setActiveBgTrackId:fn,onResetBgPosition:_n,isDarkMode:x})]}),oe&&(0,e.jsx)(bm,{content:"Налаштування вигляду",isDarkMode:x,children:(0,e.jsxs)(Bm,{$isDarkMode:x,onClick:Cl,"aria-label":"Показує час оновлення картки теперішньої погоди і ШІ прогноз.",children:["Оновлення погоди через: ",Math.floor(R/60),":",(R%60).toString().padStart(2,"0")]})}),(0,e.jsx)(am,{isStickyBgMode:g})]})}),Ea&&(0,e.jsx)(Fu,{isDarkMode:x,endTime:mn,message:Sa})]})};function Um(){return(0,e.jsx)(Yc,{children:(0,e.jsx)(Hm,{})})}window.addEventListener("error",t=>{if(t.message.includes("AbortError")||t.message.includes("aborted"))return t.preventDefault(),!1});window.addEventListener("unhandledrejection",t=>{if(t.reason?.name==="AbortError"||t.reason?.message?.includes("aborted"))return t.preventDefault(),!1});Gd.createRoot(document.getElementById("root")).render((0,e.jsx)(Wd,{store:Zd,children:(0,e.jsxs)(Kl,{children:[(0,e.jsx)(Um,{}),(0,e.jsx)(ed,{position:"bottom-right",reverseOrder:!1})]})}));export{Sc as C,nr as E,rr as S,yc as T,Qs as _,Ku as a,vs as b,Br as c,un as d,Xm as f,nl as g,rl as h,Qm as i,$u as l,Ma as m,bl as n,Uu as o,gr as p,ra as r,Hu as s,pf as t,Wo as u,Ys as v,vc as w,ms as x,Yr as y};

//# sourceMappingURL=index-COMhzmak.js.map