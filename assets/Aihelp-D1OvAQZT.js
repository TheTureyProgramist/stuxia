import{o as N}from"./rolldown-runtime-BNNRdYrd.js";import{A as er,At as rr,Fn as v,In as a,Mn as tr,N as ye,Nn as q,O as ir,Tn as ar,Zn as nr,dn as or,fn as sr,k as u}from"./vendor-react-DaUcAjuS.js";import{t as lr}from"./index-COMhzmak.js";var o=N(nr()),f=N(tr()),dr=N(sr()),t=ar(),_=q`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,cr=q`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`,pr=q`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,gr=a.div`
  display: flex;
  flex-direction: column;
  height: 570px;
  max-width: 1200px;
  width: 100%;
  margin: 10px auto 0;
  padding: 0 5px;
  gap: 6px;
  z-index: 100;
  position: relative;
  overflow-y: auto;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    border 0.4s ease,
    border-radius 0.4s ease,
    padding 0.4s ease;
  ${e=>e.$isStickyBgMode?v`
          background: ${e.$isDarkMode?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
          padding: 10px;
        `:v`
          background: transparent;
        `}
`,xr=a.div`
  font-size: 18px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 800;
  letter-spacing: 0.6px;
  color: ${e=>e.$isDarkMode?"#ffffff":"#111111"};
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 22px;
  transition: all 0.3s ease;
  z-index: 100;
  ${e=>e.$isStickyBgMode?v`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 165, 0, 0.25)":"rgba(255, 140, 0, 0.2)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        `:v`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,165,0,0.2)":"rgba(255,140,0,0.15)"};
        `}
`,ur=a.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  color: #fff;
  text-transform: uppercase;
`,fr=a.div`
  flex-shrink: 0;
  padding: 8px 10px;
  background: ${e=>e.$isStickyBgMode?e.$isDarkMode?"rgba(10, 10, 20, 0.82)":"rgba(255, 249, 235, 0.9)":e.$isDarkMode?"rgba(12, 12, 12, 0.72)":"#fffbf0"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  border: 1px solid rgba(255, 160, 0, 0.45);
  border-radius: 12px;
  z-index: 100;
  position: relative;
  color: ${e=>e.$isDarkMode?"white":"black"};
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease;
  box-shadow: 0 2px 12px rgba(255, 150, 0, 0.08);
`,br=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?"white":"black"};
  ${e=>e.$isStickyBgMode?v`
          background: ${e.$isDarkMode?"rgba(15,15,25,0.4)":"rgba(255,255,255,0.55)"};
          padding: 6px 8px;
          border-radius: 8px;
        `:""}
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    min-width: 160px;
  }
  input[type="radio"] {
    margin-right: 8px;
    accent-color: orange;
  }
  input[type="password"] {
    flex: 1;
    min-width: 200px;
    padding: 7px 12px;
    border-radius: 8px;
    border: 1px solid ${e=>e.$hasError?"#ff4d4d":"rgba(255,160,0,0.4)"};
    background: ${e=>e.$isDarkMode?"rgba(30,30,40,0.7)":"rgba(255,255,255,0.85)"};
    color: ${e=>e.$isDarkMode?"white":"black"};
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    &:focus {
      border-color: orange;
      box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.15);
    }
  }
`,hr=a.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`,mr=a.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  border-top: 1px dashed rgba(255, 160, 0, 0.25);
  padding-top: 8px;
  flex-wrap: wrap;
`,we=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
`,je=a.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ff9500;
  text-transform: uppercase;
`,Se=a.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,Me=a.button`
  border: 1px solid ${e=>e.$active?"#ff9500":"rgba(255,165,0,0.35)"};
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  cursor: pointer;
  background: ${e=>e.$active?"linear-gradient(135deg, #ff9500, #ff6b00)":"transparent"};
  color: ${e=>e.$active?"#fff":e.$isDarkMode?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.75)"};
  font-weight: ${e=>e.$active?"700":"500"};
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$active?"0 2px 8px rgba(255,149,0,0.35)":"none"};
  &:hover {
    transform: translateY(-1px);
    border-color: #ff9500;
  }
`,$r=a.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  padding: 4px 2px;
  border-radius: 10px;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
`,Y=a.div`
  align-self: ${e=>e.$isBot?"flex-start":"flex-end"};
  max-width: 82%;
  background: ${e=>e.$isBot?e.$isDarkMode?"rgba(28, 28, 42, 0.88)":"rgba(245,245,252,0.94)":"linear-gradient(135deg, rgba(30,30,30,0.92), rgba(20,20,20,0.95))"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(8px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(8px)":"none"};
  color: ${e=>e.$isBot?e.$isDarkMode?"#f0f0f0":"#111":"#fff"};
  border: 1px solid
    ${e=>e.$isBot?e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)":"rgba(255,149,0,0.3)"};
  padding: 8px 12px;
  border-radius: ${e=>e.$isBot?"4px 14px 14px 14px":"14px 4px 14px 14px"};
  position: relative;
  font-size: 13px;
  line-height: 1.55;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  animation: ${_} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`,kr=a.button`
  position: absolute;
  top: 6px;
  right: -34px;
  background: rgba(255, 149, 0, 0.12);
  border: 1px solid rgba(255, 149, 0, 0.3);
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  padding: 3px 6px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${Y}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 149, 0, 0.22);
  }
`,vr=a.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${_} 0.2s ease;
`,yr=a.button`
  padding: 5px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 107, 107, 0.5);
  background: transparent;
  color: #ff6b6b;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  &:hover { background: rgba(255, 107, 107, 0.12); }
`,wr=a.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${e=>e.$isDarkMode?"rgba(28,28,42,0.88)":"rgba(245,245,252,0.94)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 4px 14px 14px 14px;
  animation: ${_} 0.2s ease;
`,W=a.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${cr} 1.2s ease infinite;
  animation-delay: ${e=>e.$delay};
`,jr=a.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
  border-radius: 12px;
  background: ${e=>e.$isDarkMode?"rgba(10,10,18,0.88)":"rgba(255,255,255,0.9)"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  transition:
    background 0.4s ease,
    border-color 0.2s,
    box-shadow 0.2s;
  &:focus-within {
    border-color: rgba(255, 149, 0, 0.7);
    box-shadow: 0 0 0 3px rgba(255, 149, 0, 0.1);
  }
`,Sr=a.textarea`
  width: 100%;
  border: none;
  background: transparent;
  padding: 12px 14px;
  border-radius: 12px 12px 0 0;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.92)":"#111"};
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: auto;
  min-height: 46px;
  line-height: 1.5;
  &::placeholder {
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.35)"};
    font-size: 13px;
  }
`,Mr=a.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,I=a.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.65)":"rgba(0,0,0,0.55)"};
  font-size: ${e=>e.$size||"18px"};
  cursor: pointer;
  transition: all 0.2s;
  &:disabled { opacity: 0.35; cursor: not-allowed; }
  &:hover:not(:disabled) {
    background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"};
    color: ${e=>e.$isDarkMode?"#fff":"#000"};
    transform: scale(1.08);
  }
  ${e=>e.$danger&&v`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${e=>e.$listening&&v`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`,Rr=a.button`
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  border: none;
  background: ${e=>e.disabled?e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)":"linear-gradient(135deg, #ff9500, #ff6b00)"};
  color: ${e=>e.disabled?e.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)":"#fff"};
  font-size: 13px;
  font-weight: 700;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;
  box-shadow: ${e=>e.disabled?"none":"0 2px 8px rgba(255,149,0,0.35)"};
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(255, 149, 0, 0.45);
  }
  &:active:not(:disabled) { transform: translateY(0); }
`,Cr=a.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`,zr=a.div`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$isDarkMode?"rgba(40,40,55,0.9)":"#f0f0f0"};
  border-radius: 8px;
  border: 1px solid rgba(255, 149, 0, 0.45);
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
`,Br=a.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  font-size: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: transform 0.15s;
  &:hover { transform: scale(1.15); }
`,Dr=a.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${pr} 2s linear infinite;
`,Tr=a.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`,Lr=a.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: ${_} 0.2s ease;
`,Ir=a.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: scale(1.08);
  }
`,_r=a.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pr=a.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Ur=a.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Ar=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`,Er=a.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`,Fr=a.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`,Gr=a.div`
  width: 4px;
  border-radius: 2px;
  background: linear-gradient(180deg, #ff9500, #ff6b00);
  height: ${e=>e.$h}%;
  opacity: ${e=>e.$playing?1:.35};
  animation: ${e=>e.$playing?`wavePulse ${e.$dur}s ease-in-out infinite alternate`:"none"};
  @keyframes wavePulse {
    from { height: ${e=>e.$h}%; }
    to   { height: ${e=>Math.min(100,e.$h+40)}%; }
  }
`,Re=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,Ce=a.button`
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  font-size: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(255, 149, 0, 0.4);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(255, 149, 0, 0.55);
  }
`,ze=a.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`,Be=a.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`,De=a.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,Te=a.div`
  display: flex;
  gap: 6px;
`,Le=a.button`
  border: 1px solid ${e=>e.$active?"#ff9500":"rgba(255,255,255,0.15)"};
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  background: ${e=>e.$active?"linear-gradient(135deg, #ff9500, #ff6b00)":"transparent"};
  color: ${e=>e.$active?"#fff":"rgba(255,255,255,0.7)"};
  font-weight: ${e=>e.$active?"700":"400"};
  transition: all 0.2s;
  &:hover { border-color: #ff9500; }
`,Kr=a.audio`
  display: none;
`,Hr=a.button`
  padding: 7px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 149, 0, 0.5);
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 149, 0, 0.15);
    border-color: #ff9500;
    color: #fff;
  }
`,Ie=e=>e==="detailed"?{label:"Більше",instruction:"Докладно."}:e==="normal"?{label:"Нормально",instruction:"Нормально."}:{label:"Менше",instruction:"Коротко."},_e=e=>e==="scientific"?{label:"Науково",instruction:"Використовуй науковий стиль, чітко, з термінами і логікою."}:e==="friendly"?{label:"Дружньо",instruction:"Використовуй дружній, теплий і простий стиль."}:{label:"Стандартно",instruction:"Використовуй нейтральний стиль."},Or=`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
КОНЦЕПЦІЯ ПЛАТФОРМИ:
«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:
• 🌤 Погода — поточний прогноз, 24-годинний (на 7 днів), 16-денний. Кольорові попередження (🔴 зараз, 🟠 найближчі 3 дні) при екстремальних умовах (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7). Можна переглядати кілька міст одночасно.
• 🎵 Музика — плейлисти без реклами та лімітів.
• 📰 Новини — RSS-стрічки з автоматичним фільтром: відсіює насильство, політику, 18+, кримінал, релігію (крім святкових днів), казино, корупцію, секти. Можна додавати власні RSS-джерела.
• 🎨 Фан-арти — галерея різних жанрів(більшість не належить автору). Користувачі можуть завантажувати, друкувати 2д і 3д принтером роботи.
• 🗺 Карта клімату — інтерактивна кліматична карта.
• 🤖 Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.

АВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com
Вікові обмеження: 13+. Деякий контент — 14+.
Конфіденційність: платформа не збирає персональні дані.
Авторські права: пісні використовуються лише в ознайомчих цілях.

ТВОЇ ПРАВИЛА:
1. Ти знаєш усі розділи Стихії і можеш допомогти користувачу розібратись у будь-якому з них.
2. Якщо питання стосується платформи — відповідай конкретно і по суті, посилаючись на розділи та функції.
3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.
4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.
5. Відповідай українською мовою, якщо запит не на іншій мові.
6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.`,Nr=({isDarkMode:e,isStickyBgMode:m})=>{const[P,U]=(0,o.useState)(""),[X,y]=(0,o.useState)([]),[z,A]=(0,o.useState)(""),[Pe,Ue]=(0,o.useState)("gemini-2.5-flash-lite"),[Z,Ae]=(0,o.useState)("normal"),[J,Ee]=(0,o.useState)("friendly"),[$,B]=(0,o.useState)([]),[w,Q]=(0,o.useState)(!1),[ee,p]=(0,o.useState)(""),[j,D]=(0,o.useState)(""),re=(0,o.useRef)(""),[Fe,S]=(0,o.useState)(0),[te,ie]=(0,o.useState)(null),[T,E]=(0,o.useState)(!1),M=(0,o.useRef)(null),[F,ae]=(0,o.useState)(!1),[g,ne]=(0,o.useState)(null),[G,b]=(0,o.useState)(!1),[oe,se]=(0,o.useState)(0),[le,de]=(0,o.useState)(0),[ce,pe]=(0,o.useState)(0),[K,ge]=(0,o.useState)(1),x=(0,o.useRef)([]),k=(0,o.useRef)(null),Ge=(0,o.useRef)(null),H=(0,o.useRef)(null),s=(0,o.useRef)(null),L=r=>!r||isNaN(r)?"0:00":`${Math.floor(r/60)}:${Math.floor(r%60).toString().padStart(2,"0")}`,Ke=r=>{ne(r),b(!1),se(0),pe(0),de(0),ge(1)},xe=()=>{s.current&&s.current.pause(),ne(null),b(!1)},ue=()=>{s.current&&(s.current.paused?s.current.play():s.current.pause())},fe=()=>{if(!s.current)return;const{currentTime:r,duration:i}=s.current;pe(r),se(i?r/i:0)},be=()=>{s.current&&(de(s.current.duration),s.current.playbackRate=K)},he=r=>{const i=r.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(r.clientX-i.left)/i.width));s.current&&s.current.duration&&(s.current.currentTime=n*s.current.duration)},me=r=>{ge(r),s.current&&(s.current.playbackRate=r)},He=r=>{U(r.target.value),k.current&&(k.current.style.height="auto",k.current.style.height=`${k.current.scrollHeight}px`)};(0,o.useEffect)(()=>{const r=H.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[X]),(0,o.useEffect)(()=>{if(!j)return;const r=H.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[j]);const Oe=async()=>{if(!(F||w)){ae(!0),p("Роблю скріншот...");try{(await(0,dr.default)(document.body,{useCORS:!0,allowTaint:!0,scale:.8,logging:!1})).toBlob(r=>{if(!r)return;const i=new File([r],"screenshot.png",{type:"image/png"}),n=URL.createObjectURL(i);x.current.push(n),B(l=>[...l,{file:i,objectURL:n}]),S(l=>l+r.size),p("Скріншот додано — запитайте Gemini!"),setTimeout(()=>p(""),2e3)},"image/png")}catch{p("Помилка скріншоту"),setTimeout(()=>p(""),2e3)}finally{ae(!1)}}},Ve=()=>{const r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r){u.error("Ваш браузер не підтримує розпізнавання голосу.");return}if(T&&M.current){M.current.stop();return}const i=new r;M.current=i,i.lang="uk-UA",i.interimResults=!1,i.onstart=()=>{E(!0),p("Слухаю вас...")},i.onresult=n=>{const l=n.results[0][0].transcript;U(d=>(d?d+" ":"")+l)},i.onerror=()=>{E(!1),p(""),M.current=null},i.onend=()=>{E(!1),p(""),M.current=null},i.start()};(0,o.useEffect)(()=>{(async()=>{const n=await f.default.getItem("gemini_api_key"),l=await f.default.getItem("gemini_model"),d=await f.default.getItem("ai_help_history");n&&A(n),l&&Ue(l),d&&y(d)})();const i=n=>A(n.detail);return window.addEventListener("geminiKeyChanged",i),()=>window.removeEventListener("geminiKeyChanged",i)},[]),(0,o.useEffect)(()=>()=>{x.current.forEach(r=>URL.revokeObjectURL(r)),x.current=[]},[]);const We=async r=>({inlineData:{data:await new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result.split(",")[1]),n.readAsDataURL(r)}),mimeType:r.type}}),$e=()=>{x.current.forEach(r=>URL.revokeObjectURL(r)),x.current=[],B([]),S(0)},Ye=async r=>{A(r),await f.default.setItem("gemini_api_key",r),window.dispatchEvent(new CustomEvent("geminiKeyChanged",{detail:r}))},ke=r=>{const i=Array.from(r),n=15,l=104857600;if($.length+i.length>n){u.error(`Максимум ${n} файлів.`);return}const d=$.reduce((c,h)=>c+h.file.size,0),R=i.reduce((c,h)=>c+h.size,0);if(d+R>l){u.error("Загальний розмір перевищує 100 МБ.");return}const V=i.map(c=>{const h=URL.createObjectURL(c);return x.current.push(h),{file:c,objectURL:h}});S(d+R),B(c=>[...c,...V])},Ne=r=>{B(i=>{const n=i[r];return n?.objectURL&&(URL.revokeObjectURL(n.objectURL),S(l=>Math.max(0,l-n.file.size)),x.current=x.current.filter(l=>l!==n.objectURL)),i.filter((l,d)=>d!==r)})},qe=async r=>{try{const i=r.objectURL||r.file&&URL.createObjectURL(r.file);if(!i)return;const n=await f.default.getItem("custom_hero_backgrounds")||[],l=[{src:i,name:r.file?.name||"ai-image",author:"AiHelp"},...n.filter(d=>d.src!==i)];await f.default.setItem("custom_hero_backgrounds",l),await f.default.setItem("hero_background",i);try{window.dispatchEvent(new CustomEvent("heroBackgroundChanged",{detail:{src:i}}))}catch{}u.success("Картину встановлено як фон!")}catch(i){console.error(i),u.error("Не вдалося встановити фон.")}},Xe=r=>{navigator.clipboard.writeText(r).then(()=>{u.success("Скопійовано!",{duration:1500})})},Ze=()=>{u(r=>(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13},children:["Очистити всю історію?",(0,t.jsx)("button",{onClick:async()=>{u.dismiss(r.id),x.current.forEach(i=>URL.revokeObjectURL(i)),x.current=[],y([]),S(0),await f.default.removeItem("ai_help_history")},style:{background:"#e53e3e",color:"#fff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12,fontWeight:600},children:"Очистити"}),(0,t.jsx)("button",{onClick:()=>u.dismiss(r.id),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"inherit",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:"Скасувати"})]}),{duration:6e3})},Je=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),O())},O=async(r=null)=>{const i=typeof r=="string"?r:P.trim();if(!(!i&&$.length===0||w)){if(!z){y(n=>[...n,{text:"⚠️ Будь ласка, введіть Gemini API-ключ у панелі налаштувань.",isBot:!0}]);return}if(i&&lr(i)){y(n=>[...n,{text:"Запит містить заборонені слова або теми.",isBot:!0}]);return}re.current=i,ie(null),Q(!0),D(""),y(n=>[...n,{text:i,isBot:!1}]),U(""),k.current&&(k.current.style.height="auto");try{p("З'єднання з Google Gemini...");const n=new or(z).getGenerativeModel({model:Pe,systemInstruction:Or}),{instruction:l}=Ie(Z),{instruction:d}=_e(J),R=[{text:`${l} ${d}
${i}`}];for(const C of $)R.push(await We(C.file));const V=await n.generateContentStream(R);let c="";for await(const C of V.stream)c+=C.text(),D(c);const h={text:c,isBot:!0};y(C=>{const ve=[...C,h];return f.default.setItem("ai_help_history",ve.slice(-25)),ve}),D(""),$e()}catch(n){D(""),ie(n.message),$e()}finally{Q(!1),p("")}}},Qe=!w&&(!!P.trim()||$.length>0);return(0,t.jsxs)(gr,{$isStickyBgMode:m,$isDarkMode:e,children:[(0,t.jsx)(ir,{position:"top-center",toastOptions:{style:{background:e?"#1e1e2a":"#fff",color:e?"#f0f0f0":"#111",border:"1px solid rgba(255,149,0,0.35)",fontSize:13}}}),(0,t.jsxs)(xr,{$isDarkMode:e,$isStickyBgMode:m,children:["Допомога ШІ",(0,t.jsx)(ur,{children:"Gemini"})]}),(0,t.jsxs)(fr,{$isDarkMode:e,$isStickyBgMode:m,children:[(0,t.jsxs)(br,{$isDarkMode:e,$isStickyBgMode:m,children:[(0,t.jsx)("label",{style:{minWidth:"unset",fontWeight:700,fontSize:13},children:"Gemini API Key"}),(0,t.jsx)("input",{type:"password",placeholder:"Вставте ваш Gemini API Key...",value:z,onChange:r=>Ye(r.target.value),name:"ai-help-gemini-key",autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),!z&&(0,t.jsx)(hr,{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noreferrer",children:"🔗 Отримати ключ"})]}),(0,t.jsxs)(mr,{children:[(0,t.jsxs)(we,{children:[(0,t.jsx)(je,{children:"Обсяг"}),(0,t.jsx)(Se,{children:["concise","normal","detailed"].map(r=>(0,t.jsx)(Me,{type:"button",$active:Z===r,$isDarkMode:e,onClick:()=>Ae(r),children:Ie(r).label},r))})]}),(0,t.jsxs)(we,{children:[(0,t.jsx)(je,{children:"Стиль"}),(0,t.jsx)(Se,{children:["friendly","standard","scientific"].map(r=>(0,t.jsx)(Me,{type:"button",$active:J===r,$isDarkMode:e,onClick:()=>Ee(r),children:_e(r).label},r))})]})]})]}),(0,t.jsxs)($r,{ref:H,children:[X.map((r,i)=>(0,t.jsxs)(Y,{$isBot:r.isBot,$isDarkMode:e,$isStickyBgMode:m,children:[r.isBot&&(0,t.jsx)(kr,{onClick:()=>Xe(r.text),children:"📋"}),(0,t.jsx)(ye,{children:r.text})]},i)),j&&(0,t.jsx)(Y,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:m,children:(0,t.jsx)(ye,{children:j})}),w&&!j&&(0,t.jsxs)(wr,{$isDarkMode:e,children:[(0,t.jsx)(W,{$delay:"0s"}),(0,t.jsx)(W,{$delay:"0.2s"}),(0,t.jsx)(W,{$delay:"0.4s"})]}),te&&(0,t.jsxs)(vr,{children:["⚠️ ",te,(0,t.jsx)(yr,{onClick:()=>O(re.current),children:"Повторити"})]}),(0,t.jsx)("div",{ref:Ge})]}),ee&&(0,t.jsx)(Dr,{children:ee}),$.length>0&&(0,t.jsxs)(Cr,{children:[(0,t.jsxs)(Tr,{children:["Розмір: ",(Fe/1048576).toFixed(2)," MB / 100 MB"]}),$.map((r,i)=>(0,t.jsxs)(zr,{$isDarkMode:e,children:[(0,t.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-in"},onClick:()=>Ke(r),children:r.file.type.startsWith("video/")?(0,t.jsx)("video",{src:r.objectURL}):r.file.type.startsWith("audio/")?(0,t.jsx)("span",{style:{fontSize:"26px"},children:"🎵"}):(0,t.jsx)("img",{src:r.objectURL,alt:"preview"})}),(0,t.jsx)(Br,{onClick:()=>Ne(i),children:"✕"})]},i))]}),(0,t.jsxs)(jr,{$isDarkMode:e,$isStickyBgMode:m,onDragOver:r=>r.preventDefault(),onDrop:r=>{r.preventDefault(),ke(r.dataTransfer.files)},children:[(0,t.jsx)(Sr,{ref:k,placeholder:"Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)",value:P,onChange:He,onKeyDown:Je,rows:1,$isDarkMode:e}),(0,t.jsxs)(Mr,{$isDarkMode:e,children:[(0,t.jsxs)("label",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[(0,t.jsx)(I,{as:"span",$isDarkMode:e,$size:"20px",title:"Додати фото, відео, аудіо",children:(0,t.jsx)(rr,{})}),(0,t.jsx)("input",{type:"file",accept:"image/*, video/*, audio/*",multiple:!0,hidden:!0,onChange:r=>ke(r.target.files)})]}),(0,t.jsx)(I,{$isDarkMode:e,onClick:Oe,title:"Зробити скріншот",disabled:w||F,children:F?"⏳":"📸"}),(0,t.jsx)(I,{$isDarkMode:e,onClick:Ve,title:T?"Зупинити запис":"Голосовий ввід",$listening:T,children:T?"🛑":"🎙️"}),(0,t.jsx)(I,{$isDarkMode:e,$danger:!0,onClick:Ze,title:"Видалити всі повідомлення",$size:"20px",children:(0,t.jsx)(er,{})}),(0,t.jsx)(Rr,{disabled:!Qe,$isDarkMode:e,onClick:O,title:"Надіслати",children:w?"⏳":"Надіслати ➤"})]})]}),g&&(0,t.jsxs)(Lr,{onClick:xe,children:[(0,t.jsx)(Ir,{onClick:xe,children:"✕"}),(0,t.jsx)(_r,{children:g.file.name}),(0,t.jsx)("div",{onClick:r=>r.stopPropagation(),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:g.file.type.startsWith("image/")?(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[(0,t.jsx)(Pr,{src:g.objectURL,alt:g.file.name}),(0,t.jsx)(Hr,{onClick:()=>qe(g),children:"🖼 Зробити фоном"})]}):g.file.type.startsWith("video/")?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ur,{ref:s,src:g.objectURL,onTimeUpdate:fe,onLoadedMetadata:be,onPlay:()=>b(!0),onPause:()=>b(!1),onEnded:()=>b(!1)}),(0,t.jsxs)(Re,{children:[(0,t.jsx)(ze,{onClick:he,children:(0,t.jsx)(Be,{style:{width:`${oe*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(Ce,{onClick:ue,children:G?"⏸":"▶"}),(0,t.jsxs)(De,{children:[L(ce)," / ",L(le)]})]}),(0,t.jsx)(Te,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(Le,{$active:K===r,onClick:()=>me(r),children:[r,"x"]},r))})]})]}):g.file.type.startsWith("audio/")?(0,t.jsxs)(Ar,{children:[(0,t.jsx)(Er,{children:"🎵"}),(0,t.jsx)(Fr,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((r,i)=>(0,t.jsx)(Gr,{$h:r,$playing:G,$dur:(.3+i*.07).toFixed(2)},i))}),(0,t.jsx)(Kr,{ref:s,src:g.objectURL,onTimeUpdate:fe,onLoadedMetadata:be,onPlay:()=>b(!0),onPause:()=>b(!1),onEnded:()=>b(!1)}),(0,t.jsxs)(Re,{children:[(0,t.jsx)(ze,{onClick:he,children:(0,t.jsx)(Be,{style:{width:`${oe*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(Ce,{onClick:ue,children:G?"⏸":"▶"}),(0,t.jsxs)(De,{children:[L(ce)," / ",L(le)]})]}),(0,t.jsx)(Te,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(Le,{$active:K===r,onClick:()=>me(r),children:[r,"x"]},r))})]})]}):null})]})]})};export{Nr as default,Ie as getResponseLengthInstruction,_e as getResponseStyleInstruction};

//# sourceMappingURL=Aihelp-D1OvAQZT.js.map