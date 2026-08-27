import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,o as n,t as r}from"./jsx-runtime-CJi9uaNB.js";import{G as i,I as a}from"./index-CbNTxoaW.js";var o=e(n()),{PI:s,sin:c,cos:l,tan:u,asin:d,atan2:f,acos:p,sqrt:m,abs:h,round:g}=Math,_=s/180,v=864e5,y=2440588,b=2451545,x=6378.14;function S(e){return e.valueOf()/v-.5+y-b}function C(e){let t=2e3+e/365.2425,n;return t<1920?(n=t-1900,-2.79+n*(1.494119+n*(-.0598939+n*(.0061966-n*197e-6)))):t<1941?(n=t-1920,21.2+n*(.84493+n*(-.0761+n*.0020936))):t<1961?(n=t-1950,29.07+n*(.407+n*(-1/233+n/2547))):t<1986?(n=t-1975,45.45+n*(1.067+n*(-1/260-n/718))):t<2005?(n=t-2e3,63.86+n*(.3345+n*(-.060374+n*(.0017275+n*(651814e-9+n*2373599e-11))))):t<2050?(n=t-2e3,62.92+n*(.32217+n*.005589)):(n=(t-1820)/100,-20+32*n*n-.5628*(2150-t))}function w(e){return e+C(e)/86400}function T(e,t,n){return(f(c(e),l(e)*c(t)-u(n)*l(t))/_+540)%360}function E(e,t,n){return d(c(t)*c(n)+l(t)*l(n)*l(e))}function D(e,t){return _*(280.46061837+360.98564736629*e)-t}function O(e){return e<0&&(e=0),2967e-7/u(e+.00312536/(e+.08901179))}function k(e){let t=e/36525,n=_*(280.46646+t*(36000.76983+t*3032e-7)),r=_*(357.52911+t*(35999.05029-t*1537e-7)),i=c(r),a=l(r),o=_*((1.914602-t*(.004817+t*14e-6))*i+(.019993-101e-6*t)*2*i*a+289e-6*i*(3-4*i*i)),s=_*(125.04-1934.136*t),u=n+o-_*(.00569+.00478*c(s)),p=_*(23.439291-t*(.0130042+t*(16e-8-t*504e-9)))+_*.00256*l(s);return{ra:f(l(p)*c(u),l(u)),dec:d(c(p)*c(u))}}function A(e){let t=_*(125.04452-1934.136261*e),n=_*(280.4665+36000.7698*e),r=_*(218.3165+481267.8813*e),i=(-17.2*c(t)-1.32*c(2*n)-.23*c(2*r)+.21*c(2*t))/3600,a=(9.2*l(t)+.57*l(2*n)+.1*l(2*r)-.09*l(2*t))/3600;return{dpsi:i,eps:_*(23.439291-e*(.0130042+e*(16e-8-e*504e-9))+a)}}var j=new Int32Array([0,0,1,0,6288774,-20905355,2,0,-1,0,1274027,-3699111,2,0,0,0,658314,-2955968,0,0,2,0,213618,-569925,0,1,0,0,-185116,48888,0,0,0,2,-114332,-3149,2,0,-2,0,58793,246158,2,-1,-1,0,57066,-152138,2,0,1,0,53322,-170733,2,-1,0,0,45758,-204586,0,1,-1,0,-40923,-129620,1,0,0,0,-34720,108743,0,1,1,0,-30383,104755,2,0,0,-2,15327,10321,0,0,1,2,-12528,0,0,0,1,-2,10980,79661,4,0,-1,0,10675,-34782,0,0,3,0,10034,-23210,4,0,-2,0,8548,-21636,2,1,-1,0,-7888,24208,2,1,0,0,-6766,30824,1,0,-1,0,-5163,-8379,1,1,0,0,4987,-16675,2,-1,1,0,4036,-12831,2,0,2,0,3994,-10445,4,0,0,0,3861,-11650,2,0,-3,0,3665,14403,0,1,-2,0,-2689,-7003,2,0,-1,2,-2602,0,2,-1,-2,0,2390,10056,1,0,1,0,-2348,6322,2,-2,0,0,2236,-9884,0,1,2,0,-2120,5751,0,2,0,0,-2069,0,2,-2,-1,0,2048,-4950,2,0,1,-2,-1773,4130,2,0,0,2,-1595,0,4,-1,-1,0,1215,-3958,0,0,2,2,-1110,0,3,0,-1,0,-892,3258,2,1,1,0,-810,2616,4,-1,-2,0,759,-1897,0,2,-1,0,-713,-2117,2,2,-1,0,-700,2354,2,1,-2,0,691,0,2,-1,0,-2,596,0,4,0,1,0,549,-1423,0,0,4,0,537,-1117,4,-1,0,0,520,-1571,1,0,-2,0,-487,-1739,2,1,0,-2,-399,0,0,0,2,-2,-381,-4421,1,1,1,0,351,0,3,0,-2,0,-340,0,4,0,-3,0,330,0,2,-1,2,0,327,0,0,2,1,0,-323,1165,1,1,-1,0,299,0,2,0,3,0,294,0,2,0,-1,-2,0,8752]),M=new Int32Array([0,0,0,1,5128122,0,0,1,1,280602,0,0,1,-1,277693,2,0,0,-1,173237,2,0,-1,1,55413,2,0,-1,-1,46271,2,0,0,1,32573,0,0,2,1,17198,2,0,1,-1,9266,0,0,2,-1,8822,2,-1,0,-1,8216,2,0,-2,-1,4324,2,0,1,1,4200,2,1,0,-1,-3359,2,-1,-1,1,2463,2,-1,0,1,2211,2,-1,-1,-1,2065,0,1,-1,-1,-1870,4,0,-1,-1,1828,0,1,0,1,-1794,0,0,0,3,-1749,0,1,-1,1,-1565,1,0,0,1,-1491,0,1,1,1,-1475,0,1,1,-1,-1410,0,1,0,-1,-1344,1,0,0,-1,-1335,0,0,3,1,1107,4,0,0,-1,1021,4,0,-1,1,833,0,0,1,-3,777,4,0,-2,1,671,2,0,0,-3,607,2,0,2,-1,596,2,-1,1,-1,491,2,0,-2,1,-451,0,0,3,-1,439,2,0,2,1,422,2,0,-3,-1,421,2,1,-1,1,-366,2,1,0,1,-351,4,0,0,1,331,2,-1,1,1,315,2,-2,0,-1,302,0,0,1,3,-283,2,1,1,-1,-229,1,1,0,-1,223,1,1,0,1,223,0,1,-2,-1,-220,2,1,-1,-1,-220,1,0,1,1,-185,2,-1,-2,-1,181,0,1,2,1,-177,4,0,-2,-1,176,4,-1,-1,-1,166,1,0,1,-1,-164,4,0,1,-1,132,1,0,-1,-1,-119,4,-1,0,-1,115,2,-2,0,1,107]);function N(e){let t=e/36525,n=218.3164477+t*(481267.88123421+t*(-.0015786+t*(1/538841-t/65194e3))),r=297.8501921+t*(445267.1114034+t*(-.0018819+t*(1/545868-t/113065e3))),i=357.5291092+t*(35999.0502909+t*(-1536e-7+t/2449e4)),a=134.9633964+t*(477198.8675055+t*(.0087414+t*(1/69699-t/14712e3))),o=93.272095+t*(483202.0175233+t*(-.0036539+t*(-1/3526e3+t/86331e4))),s=119.75+131.849*t,p=53.09+479264.29*t,m=313.45+481266.484*t,h=1-t*(.002516+t*74e-7),g=_*r,v=_*i,y=_*a,b=_*o,x=0,S=0,C=0;for(let e=0;e<j.length;e+=6){let t=j[e+1],n=j[e]*g+t*v+j[e+2]*y+j[e+3]*b,r=t===1||t===-1?h:t===2||t===-2?h*h:1;x+=j[e+4]*r*c(n),S+=j[e+5]*r*l(n)}for(let e=0;e<M.length;e+=5){let t=M[e+1],n=M[e]*g+t*v+M[e+2]*y+M[e+3]*b,r=t===1||t===-1?h:t===2||t===-2?h*h:1;C+=M[e+4]*r*c(n)}let w=_*s,T=_*n;x+=3958*c(w)+1962*c(T-b)+318*c(_*p),C+=-2235*c(T)+382*c(_*m)+175*c(w-b)+175*c(w+b)+127*c(T-y)-115*c(T+y);let{dpsi:E,eps:D}=A(t),O=_*(n+x/1e6+E),k=C/1e6*_;return{ra:f(c(O)*l(D)-u(k)*c(D),l(O)),dec:d(c(k)*l(D)+l(k)*c(D)*c(O)),dist:385000.56+S/1e3}}function P(e,t,n){let r=_*-n,i=_*t,a=S(e),o=N(w(a)),s=D(a,r)-o.ra,p=E(s,i,o.dec),m=p-d(x/o.dist*l(p)),h=f(c(s),u(i)*l(o.dec)-c(o.dec)*l(s));return{azimuth:T(s,i,o.dec),altitude:(m+O(m))/_,distance:o.dist,parallacticAngle:h/_}}function F(e=new Date){let t=w(S(e)),n=k(t),r=N(t),i=149598e3,a=p(c(n.dec)*c(r.dec)+l(n.dec)*l(r.dec)*l(n.ra-r.ra)),o=f(i*c(a),r.dist-i*l(a)),u=f(l(n.dec)*c(n.ra-r.ra),c(n.dec)*l(r.dec)-l(n.dec)*c(r.dec)*l(n.ra-r.ra)),d=u<0;return{fraction:(1+l(o))/2,phase:.5+.5*o*(d?-1:1)/s,angle:u/_,waxing:d}}function I(e,t){return new Date(e.valueOf()+t*v/24)}function L(e,t,n){let r=P(e,t,n);return r.altitude+.2725*d(x/r.distance)/_+.09}function R(e,t,n){for(let r=0;r<2;r++){let r=L(new Date(e),t,n),i=(L(new Date(e+3e4),t,n)-L(new Date(e-3e4),t,n))/6e4;e-=r/i}return e}function z(e,t,n){let r=new Date(e);r.setUTCHours(0,0,0,0);let i=L(r,t,n),a,o,s=i;for(let e=1;e<=24;e+=2){let c=L(I(r,e),t,n),l=L(I(r,e+1),t,n);s=Math.max(s,c,l);let u=(i+l)/2-c,d=(l-i)/2,f=-d/(2*u),p=d*d-4*u*c,g=0,_=0,v=0,y=(u*f+d)*f+c;if(p>=0){let e=m(p)/(h(u)*2);_=f-e,v=f+e,h(_)<=1&&g++,h(v)<=1&&g++,_<-1&&(_=v)}if(g===1?i<0?a=e+_:o=e+_:g===2&&(a=e+(y<0?v:_),o=e+(y<0?_:v)),a!==void 0&&o!==void 0)break;i=l}let c={};return a!==void 0&&(c.rise=new Date(R(I(r,a).valueOf(),t,n))),o!==void 0&&(c.set=new Date(R(I(r,o).valueOf(),t,n))),a===void 0&&o===void 0&&(c.alwaysUp=s>0,c.alwaysDown=s<=0),c}var B=r(),V=t.div`
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
`,H=t.div`
  background: ${e=>e.$isDarkMode?`#1a1a1a`:`#f5f5f5`};
  background-image: ${e=>e.$cityImage?`linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url(${e.$cityImage})`:`none`};
  background-size: cover;
  background-position: center;
  color: ${e=>e.$isDarkMode?`#fff`:`#333`};
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  padding: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`,U=t.button`
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
`,W=t.h2`
  margin-top: 0;
  color: #ffb36c;
  border-bottom: 2px solid #ffb36c;
`,G=t.div`
  background: ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.05)`};
  border-left: 4px solid #00bfff;
  border-radius: 8px;

  h3 {
    margin-top: 0;
    color: #00bfff;
    font-size: 16px;
  }
`;t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`,t.div`
  padding: 3px;
  background: ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.1)`:`rgba(0, 0, 0, 0.1)`};
  border-radius: 6px;
  font-size: 13px;
`,t.span`
  font-weight: bold;
  color: #ffb36c;
`,t.span`
  color: ${e=>e.$isDarkMode?`#ccc`:`#333`};
  margin-left: 8px;
`;var K=t.span`
  color: ${e=>e.$color||`#ff6b6b`};
  font-weight: bold;
  background: ${e=>e.$color||`#ff6b6b`}33;
  padding: 2px 6px;
  border-radius: 4px;
`,q=t.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    th,
    td {
      padding: 4px;
      text-align: center;
      border: 1px solid ${e=>e.$isDarkMode?`#444`:`#ddd`};
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
      background: ${e=>e.$isDarkMode?`rgba(255, 255, 255, 0.03)`:`rgba(0, 0, 0, 0.03)`};
    }
  }
`,J=({isOpen:e,onClose:n,card:r,isDarkMode:s})=>{let[c,l]=(0,o.useState)(`hourly`),[u,d]=(0,o.useState)(0);if(!e||!r)return null;let f=r.current||{},p=r.hourly||[],m=r.daily16||[],h=i(p),g=h[u]?.items||[],_=m.find(e=>e.date===h[u]?.label)||m[0],v=e=>{try{let t=new Date(e||Date.now()),n=F(t),i=z(t,r.lat,r.lon),a=n.phase,o=``;o=a===0?`Молодик`:a<.25?`Зростаючий серп`:a===.25?`Перша чверть`:a<.5?`Зростаючий місяць`:a===.5?`Повня`:a<.75?`Спадаючий місяць`:a===.75?`Остання чверть`:`🌘 Спадаючий серп`;let s=i.rise?`${String(i.rise.getHours()).padStart(2,`0`)}:${String(i.rise.getMinutes()).padStart(2,`0`)}`:`Не сходить`,c=i.set?`${String(i.set.getHours()).padStart(2,`0`)}:${String(i.set.getMinutes()).padStart(2,`0`)}`:`Не заходить`;return{phaseText:o,rise:s,set:c}}catch{return{phaseText:`—`,rise:`—`,set:`—`}}},y=(e,t)=>{if(!e||!t)return`—`;let n=new Date(e),r=new Date(t)-n;return r<0?`—`:`${Math.floor(r/36e5)}г ${Math.floor(r%36e5/6e4)}хв`},b=v(_?.fullDate),x=y(_?.sunrise,_?.sunset),S=e=>{if(!e)return`—`;let t=new Date(e);return`${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`};console.log(`WeatherDetailsModal card data:`,{currentKeys:Object.keys(f),hourlyLength:p.length,hourlyFirst:p[0],dailyLength:m.length});let C=t.div`
    display: flex;
    font-size: 13px;
    margin-bottom: 10px;
    flex-wrap: wrap;

    button {
      background: ${e=>e.$isDarkMode?`#333`:`rgba(0, 0, 0, 0.1)`};
      color: ${e=>e.$isDarkMode?`#fff`:`#333`};
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
  `;return(0,B.jsx)(V,{onClick:n,children:(0,B.jsxs)(H,{$isDarkMode:s,$cityImage:r.cityImage,onClick:e=>e.stopPropagation(),children:[r.cityImage&&(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,width:`100%`},children:[(0,B.jsx)(`button`,{onClick:e=>{e.stopPropagation();let t=document.createElement(`a`);t.href=r.cityImage,t.download=`${r.locationName}_фото.jpg`,t.target=`_blank`,t.click()},style:{background:`rgba(0,0,0,0.5)`,color:`white`,border:`1px solid rgba(255,255,255,0.2)`,padding:`4px 8px`,borderRadius:`5px`,cursor:`pointer`,fontSize:`12px`,zIndex:10},children:`⬇ Завантажити зображення`}),(0,B.jsx)(`button`,{onClick:e=>{e.stopPropagation();let t=window.open(``);t.document.write(`<img src="${r.cityImage}" style="width:100%"/>`),t.setTimeout(()=>t.print(),500)},style:{background:`rgba(0,0,0,0.5)`,color:`white`,border:`1px solid rgba(255,255,255,0.2)`,padding:`4px 8px`,borderRadius:`5px`,cursor:`pointer`,fontSize:`12px`,zIndex:10},children:`🖨️ Друкувати`}),(0,B.jsx)(U,{onClick:n,children:`Закрити`})]}),(0,B.jsxs)(W,{children:[`Детальний прогноз: `,r.locationName]}),(0,B.jsxs)(C,{$isDarkMode:s,children:[(0,B.jsxs)(`button`,{className:c===`hourly`?`active`:``,onClick:()=>l(`hourly`),children:[`По годинам (`,p.length,`г)`]}),(0,B.jsx)(`button`,{className:c===`daily`?`active`:``,onClick:()=>l(`daily`),children:`По днях (16д)`})]}),c===`hourly`&&p.length>0&&(0,B.jsxs)(G,{$isDarkMode:s,children:[(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`10px`,flexWrap:`wrap`,gap:`5px`},children:(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`6px`,flexWrap:`wrap`,marginBottom:`8px`},children:h.length>1&&(0,B.jsx)(`div`,{style:{display:`flex`,gap:`5px`,flexWrap:`wrap`},children:h.map((e,t)=>(0,B.jsx)(`button`,{onClick:()=>d(t),style:{background:u===t?`#00bfff`:s?`#333`:`#ddd`,color:u===t?`#000`:s?`#fff`:`#000`,border:`none`,padding:`2px 8px`,borderRadius:`4px`,cursor:`pointer`,fontSize:`12px`,fontWeight:`bold`},children:e.title||e.label},e.label))})})}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,fontSize:`12px`,background:`rgba(0,0,0,0.2)`,padding:`10px`,borderRadius:`8px`,marginBottom:`10px`},children:[(0,B.jsxs)(`div`,{children:[`Схід сонця: `,(0,B.jsx)(`b`,{children:S(_?.sunrise)})]}),(0,B.jsxs)(`div`,{children:[`Захід сонця: `,(0,B.jsx)(`b`,{children:S(_?.sunset)})]}),(0,B.jsxs)(`div`,{children:[`Тривалість дня: `,(0,B.jsx)(`b`,{children:x})]}),(0,B.jsxs)(`div`,{children:[`Фаза місяця: `,(0,B.jsx)(`b`,{children:b.phaseText})]}),(0,B.jsxs)(`div`,{children:[`Схід місяця: `,(0,B.jsx)(`b`,{children:S(b.rise)})]}),(0,B.jsxs)(`div`,{children:[`Захід місяця: `,(0,B.jsx)(`b`,{children:S(b.set)})]})]}),(0,B.jsx)(q,{$isDarkMode:s,children:(0,B.jsxs)(`table`,{children:[(0,B.jsx)(`thead`,{children:(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(`th`,{children:`Час`}),(0,B.jsxs)(`th`,{children:[`Температура`,(0,B.jsx)(`br`,{}),`(Відчувається)`]}),(0,B.jsxs)(`th`,{children:[`Вітер (м/с)`,(0,B.jsx)(`br`,{}),`Напрям`]}),(0,B.jsxs)(`th`,{children:[`Вологість`,(0,B.jsx)(`br`,{}),`Точка роси`]}),(0,B.jsx)(`th`,{children:`Опади / Дощ`}),(0,B.jsx)(`th`,{children:`Тиск (гПа)`}),(0,B.jsx)(`th`,{children:`Хмарність`})]})}),(0,B.jsx)(`tbody`,{children:g.map((e,t)=>(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(`td`,{children:e.time}),(0,B.jsxs)(`td`,{children:[e.tempNum!==void 0&&(e.tempNum>30||e.tempNum<-30)?(0,B.jsxs)(K,{$color:e.tempNum>30?`#ff6b6b`:e.tempNum<-30?`#4169e1`:`#ffb36c`,children:[e.tempNum,`°C`]}):`${e.tempNum===void 0?`—`:e.tempNum}°C`,(0,B.jsx)(`br`,{}),(0,B.jsxs)(`span`,{style:{fontSize:`10px`,color:s?`#aaa`:`#555`},children:[`(`,e.feels_like===void 0?`—`:e.feels_like,`)`]})]}),(0,B.jsxs)(`td`,{children:[e.windNum!==void 0&&e.windNum>10?(0,B.jsxs)(K,{$color:`#ff9800`,children:[e.windNum.toFixed(1),` м/с`]}):`${e.windNum===void 0?`—`:e.windNum.toFixed(1)}`,e.wind_gusts_10m?` (${e.wind_gusts_10m.toFixed(1)})`:``,(0,B.jsx)(`br`,{}),(0,B.jsx)(`span`,{style:{fontSize:`10px`},children:a(e.wind_direction_10m)})]}),(0,B.jsxs)(`td`,{children:[e.relative_humidity_2m??`—`,`%`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`span`,{style:{fontSize:`10px`,color:s?`#aaa`:`#555`},children:e.dew_point_2m===void 0?`—`:`${e.dew_point_2m}°C`})]}),(0,B.jsxs)(`td`,{children:[e.precipitation===void 0?`—`:e.precipitation.toFixed(1),` мм`,(0,B.jsx)(`br`,{}),(0,B.jsxs)(`span`,{style:{fontSize:`10px`,color:s?`#aaa`:`#555`},children:[`(`,e.rain===void 0?`—`:e.rain.toFixed(1),` мм)`]})]}),(0,B.jsx)(`td`,{children:e.pressure_msl?Math.round(e.pressure_msl):`—`}),(0,B.jsxs)(`td`,{children:[e.cloud_cover??`—`,`%`]})]},t))})]})})]}),c===`daily`&&m.length>0&&(0,B.jsx)(G,{$isDarkMode:s,children:(0,B.jsx)(q,{$isDarkMode:s,children:(0,B.jsxs)(`table`,{children:[(0,B.jsx)(`thead`,{children:(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(`th`,{children:`Дата`}),(0,B.jsx)(`th`,{children:`День`}),(0,B.jsx)(`th`,{children:`Ніч`}),(0,B.jsx)(`th`,{children:`Вітер`}),(0,B.jsx)(`th`,{children:`УФ`}),(0,B.jsx)(`th`,{children:`Опади %`}),(0,B.jsx)(`th`,{children:`Дощ (мм)`}),(0,B.jsx)(`th`,{children:`Всього (мм)`})]})}),(0,B.jsx)(`tbody`,{children:m.map((e,t)=>(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(`td`,{children:e.date}),(0,B.jsx)(`td`,{children:parseInt(e.temp_day)>30||parseInt(e.temp_day)<-30?(0,B.jsx)(K,{$color:parseInt(e.temp_day)>30?`#ff6b6b`:`#4169e1`,children:e.temp_day}):e.temp_day}),(0,B.jsx)(`td`,{children:e.temp_night}),(0,B.jsx)(`td`,{children:parseFloat(e.wind_speed)>10?(0,B.jsx)(K,{$color:`#ff9800`,children:e.wind_speed}):e.wind_speed}),(0,B.jsx)(`td`,{children:e.uv_index>7?(0,B.jsx)(K,{$color:`#ff6b6b`,children:e.uv_index}):e.uv_index}),(0,B.jsxs)(`td`,{children:[e.precipitation_probability_max??`—`,`%`]}),(0,B.jsx)(`td`,{children:e.rain_sum===void 0?`—`:e.rain_sum.toFixed(1)}),(0,B.jsx)(`td`,{children:e.precipitation_sum===void 0?`—`:e.precipitation_sum.toFixed(1)})]},t))})]})})})]})})};export{J as default};