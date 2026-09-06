import{o as F}from"./rolldown-runtime-BNNRdYrd.js";import{Ct as H,D as R,E as B,In as s,Kt as L,St as W,Tn as E,Zn as P,kt as q,n as G,r as K}from"./vendor-react-DaUcAjuS.js";import{T as O,p as A}from"./index-COMhzmak.js";var $=F(P()),e=E(),Z=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 10px;
`,J=s.div`
  background: ${r=>r.$isDarkMode?"#1a1a1a":"#f5f5f5"};
  background-image: ${r=>r.$cityImage?`linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url(${r.$cityImage})`:"none"};
  background-size: cover;
  background-position: center;
  color: ${r=>r.$isDarkMode?"#fff":"#333"};
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  padding: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`,Q=s.button`
  float: right;
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 3px 6px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background: #ff5252;
  }
`,U=s.h2`
  margin-top: 0;
  color: #ffb36c;
  border-bottom: 2px solid #ffb36c;
`,w=s.div`
  background: ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
  border-left: 4px solid #00bfff;
  border-radius: 8px;

  h3 {
    margin-top: 0;
    color: #00bfff;
    font-size: 16px;
  }
`;s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;s.div`
  padding: 3px;
  background: ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 6px;
  font-size: 13px;
`;s.span`
  font-weight: bold;
  color: #ffb36c;
`;s.span`
  color: ${r=>r.$isDarkMode?"#ccc":"#333"};
  margin-left: 8px;
`;var u=s.span`
  color: ${r=>r.$color||"#ff6b6b"};
  font-weight: bold;
  background: ${r=>r.$color||"#ff6b6b"}33;
  padding: 2px 6px;
  border-radius: 4px;
`,_=s.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    th,
    td {
      padding: 4px;
      text-align: center;
      border: 1px solid ${r=>r.$isDarkMode?"#444":"#ddd"};
    }

    th {
      background: #00bfff;
      color: #000;
      font-weight: bold;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    tbody tr:nth-child(odd) {
      background: ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.03)":"rgba(0, 0, 0, 0.03)"};
    }
  }
`,ee=({isOpen:r,onClose:y,card:n,isDarkMode:o})=>{const[f,v]=(0,$.useState)("hourly"),[b,k]=(0,$.useState)(0);if(!r||!n)return null;const S=n.current||{},c=n.hourly||[],x=n.daily16||[],g=O(c),D=g[b]?.items||[],p=x.find(t=>t.date===g[b]?.label)||x[0],M=t=>{try{const i=new Date(t||Date.now()),j=G(i),l=K(i,n.lat,n.lon),d=j.phase;let a="";d===0?a="Молодик":d<.25?a="Зростаючий серп":d===.25?a="Перша чверть":d<.5?a="Зростаючий місяць":d===.5?a="Повня":d<.75?a="Спадаючий місяць":d===.75?a="Остання чверть":a="🌘 Спадаючий серп";const N=l.rise?`${String(l.rise.getHours()).padStart(2,"0")}:${String(l.rise.getMinutes()).padStart(2,"0")}`:"Не сходить",T=l.set?`${String(l.set.getHours()).padStart(2,"0")}:${String(l.set.getMinutes()).padStart(2,"0")}`:"Не заходить";return{phaseText:a,rise:N,set:T}}catch{return{phaseText:"—",rise:"—",set:"—"}}},I=(t,i)=>{if(!t||!i)return"—";const j=new Date(t),l=new Date(i)-j;return l<0?"—":`${Math.floor(l/36e5)}г ${Math.floor(l%36e5/6e4)}хв`},m=M(p?.fullDate),C=I(p?.sunrise,p?.sunset),h=t=>{if(!t)return"—";const i=new Date(t);return`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`};console.log("WeatherDetailsModal card data:",{currentKeys:Object.keys(S),hourlyLength:c.length,hourlyFirst:c[0],dailyLength:x.length});const z=s.div`
    display: flex;
    font-size: 13px;
    margin-bottom: 10px;
    flex-wrap: wrap;

    button {
      background: ${t=>t.$isDarkMode?"#333":"rgba(0, 0, 0, 0.1)"};
      color: ${t=>t.$isDarkMode?"#fff":"#333"};
      padding: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s;

      &.active {
        background: #ffb36c;
        color: #000;
      }

      &:hover {
        background: #01fdf5;
                color: #000;
      }
    }
  `;return(0,e.jsx)(Z,{onClick:y,children:(0,e.jsxs)(J,{$isDarkMode:o,$cityImage:n.cityImage,onClick:t=>t.stopPropagation(),children:[n.cityImage&&(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:[(0,e.jsx)("button",{onClick:t=>{t.stopPropagation();const i=document.createElement("a");i.href=n.cityImage,i.download=`${n.locationName}_фото.jpg`,i.target="_blank",i.click()},style:{background:"rgba(0,0,0,0.5)",color:"white",border:"1px solid rgba(255,255,255,0.2)",padding:"4px 8px",borderRadius:"5px",cursor:"pointer",fontSize:"12px",zIndex:10},children:"⬇ Завантажити зображення"}),(0,e.jsx)("button",{onClick:t=>{t.stopPropagation();const i=window.open("");i.document.write(`<img src="${n.cityImage}" style="width:100%"/>`),i.setTimeout(()=>i.print(),500)},style:{background:"rgba(0,0,0,0.5)",color:"white",border:"1px solid rgba(255,255,255,0.2)",padding:"4px 8px",borderRadius:"5px",cursor:"pointer",fontSize:"12px",zIndex:10},children:"🖨️ Друкувати"}),(0,e.jsx)(Q,{onClick:y,children:"Закрити"})]}),(0,e.jsxs)(U,{children:["Детальний прогноз: ",n.locationName]}),(0,e.jsxs)(z,{$isDarkMode:o,children:[(0,e.jsxs)("button",{className:f==="hourly"?"active":"",onClick:()=>v("hourly"),children:["По годинам (",c.length,"г)"]}),(0,e.jsx)("button",{className:f==="daily"?"active":"",onClick:()=>v("daily"),children:"По днях (16д)"})]}),f==="hourly"&&c.length>0&&(0,e.jsxs)(w,{$isDarkMode:o,children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",flexWrap:"wrap",gap:"5px"},children:(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"8px"},children:g.length>1&&(0,e.jsx)("select",{value:b,onChange:t=>k(Number(t.target.value)),style:{background:o?"#333":"#fff",color:o?"#fff":"#000",border:"1px solid #00bfff",padding:"4px 8px",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"bold",outline:"none"},children:g.map((t,i)=>(0,e.jsx)("option",{value:i,children:t.title||t.label},t.label))})})}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",fontSize:"12px",background:"rgba(0,0,0,0.2)",padding:"10px",borderRadius:"8px",marginBottom:"10px",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(q,{style:{color:"#ffd700"}})," Схід сонця: ",(0,e.jsx)("b",{children:h(p?.sunrise)})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(L,{style:{color:"#f1c40f"}})," Захід сонця: ",(0,e.jsx)("b",{children:h(p?.sunset)})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(R,{style:{color:"#3498db"}})," Тривалість дня: ",(0,e.jsx)("b",{children:C})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(H,{style:{color:"#9b59b6"}})," Фаза місяця: ",(0,e.jsx)("b",{children:m.phaseText})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(W,{style:{color:"#ecf0f1"}})," Схід місяця: ",(0,e.jsx)("b",{children:h(m.rise)})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(B,{style:{color:"#34495e"}})," Захід місяця: ",(0,e.jsx)("b",{children:h(m.set)})]})]}),(0,e.jsx)(_,{$isDarkMode:o,children:(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Час"}),(0,e.jsxs)("th",{children:["Температура",(0,e.jsx)("br",{}),"(Відчувається)"]}),(0,e.jsxs)("th",{children:["Вітер (м/с)",(0,e.jsx)("br",{}),"Напрям"]}),(0,e.jsxs)("th",{children:["Вологість",(0,e.jsx)("br",{}),"Точка роси"]}),(0,e.jsx)("th",{children:"Опади / Дощ"}),(0,e.jsx)("th",{children:"Тиск (гПа)"}),(0,e.jsx)("th",{children:"Хмарність"})]})}),(0,e.jsx)("tbody",{children:D.map((t,i)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t.time}),(0,e.jsxs)("td",{children:[t.tempNum!==void 0&&(t.tempNum>30||t.tempNum<-30)?(0,e.jsxs)(u,{$color:t.tempNum>30?"#ff6b6b":t.tempNum<-30?"#4169e1":"#ffb36c",children:[t.tempNum,"°C"]}):`${t.tempNum!==void 0?t.tempNum:"—"}°C`,(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"10px",color:o?"#aaa":"#555"},children:["(",t.feels_like!==void 0?t.feels_like:"—",")"]})]}),(0,e.jsxs)("td",{children:[t.windNum!==void 0&&t.windNum>10?(0,e.jsxs)(u,{$color:"#ff9800",children:[t.windNum.toFixed(1)," м/с"]}):`${t.windNum!==void 0?t.windNum.toFixed(1):"—"}`,t.wind_gusts_10m?` (${t.wind_gusts_10m.toFixed(1)})`:"",(0,e.jsx)("br",{}),(0,e.jsx)("span",{style:{fontSize:"10px"},children:A(t.wind_direction_10m)})]}),(0,e.jsxs)("td",{children:[t.relative_humidity_2m??"—","%",(0,e.jsx)("br",{}),(0,e.jsx)("span",{style:{fontSize:"10px",color:o?"#aaa":"#555"},children:t.dew_point_2m!==void 0?`${t.dew_point_2m}°C`:"—"})]}),(0,e.jsxs)("td",{children:[t.precipitation!==void 0?t.precipitation.toFixed(1):"—"," мм",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"10px",color:o?"#aaa":"#555"},children:["(",t.rain!==void 0?t.rain.toFixed(1):"—"," мм)"]})]}),(0,e.jsx)("td",{children:t.pressure_msl?Math.round(t.pressure_msl):"—"}),(0,e.jsxs)("td",{children:[t.cloud_cover??"—","%"]})]},i))})]})})]}),f==="daily"&&x.length>0&&(0,e.jsx)(w,{$isDarkMode:o,children:(0,e.jsx)(_,{$isDarkMode:o,children:(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Дата"}),(0,e.jsx)("th",{children:"День"}),(0,e.jsx)("th",{children:"Ніч"}),(0,e.jsx)("th",{children:"Вітер"}),(0,e.jsx)("th",{children:"УФ"}),(0,e.jsx)("th",{children:"Опади %"}),(0,e.jsx)("th",{children:"Дощ (мм)"}),(0,e.jsx)("th",{children:"Всього (мм)"})]})}),(0,e.jsx)("tbody",{children:x.map((t,i)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t.date}),(0,e.jsx)("td",{children:parseInt(t.temp_day)>30||parseInt(t.temp_day)<-30?(0,e.jsx)(u,{$color:parseInt(t.temp_day)>30?"#ff6b6b":"#4169e1",children:t.temp_day}):t.temp_day}),(0,e.jsx)("td",{children:t.temp_night}),(0,e.jsx)("td",{children:parseFloat(t.wind_speed)>10?(0,e.jsx)(u,{$color:"#ff9800",children:t.wind_speed}):t.wind_speed}),(0,e.jsx)("td",{children:t.uv_index>7?(0,e.jsx)(u,{$color:"#ff6b6b",children:t.uv_index}):t.uv_index}),(0,e.jsxs)("td",{children:[t.precipitation_probability_max??"—","%"]}),(0,e.jsx)("td",{children:t.rain_sum!==void 0?t.rain_sum.toFixed(1):"—"}),(0,e.jsx)("td",{children:t.precipitation_sum!==void 0?t.precipitation_sum.toFixed(1):"—"})]},i))})]})})})]})})};export{ee as default};

//# sourceMappingURL=WeatherDetailsModal-BFDiAKYA.js.map