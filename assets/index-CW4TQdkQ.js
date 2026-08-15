const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminPage-CITAdk-i.js","assets/react-vendor-D6aYhTOB.js","assets/firebase-vendor-CNo--3BI.js","assets/date-fns-vendor-CC18eP49.js"])))=>i.map(i=>d[i]);
import{r as b,a as dr,H as ur,R as hr,b as rt,c as mr}from"./react-vendor-D6aYhTOB.js";import{b as it,a as _e,c as ke,d as fr,f as pt,p as pr,i as gr,s as Tt,e as xr,g as gt,h as br,j as vr,k as wr,l as hn,m as V,n as X,o as jt,q as yr,r as fe,t as $e,u as Q}from"./date-fns-vendor-CC18eP49.js";import{L as _r,g as mn,i as kr,a as Ir,_ as Pt,C as At,r as Ct,b as Er,S as Pe,E as xt,c as B,d as D,e as Sr,f as fn,h as C,F as bt,j as Nr,q as Ae,k as pn,l as Tr,m as jr,n as Pr,o as Ar,p as Cr,s as Ee,t as Se,u as Rr,v as Mr,w as Or,x as ct,y as Ne,z as gn,A as oe,B as Rt,D as lt,G as xn,H as bn}from"./firebase-vendor-CNo--3BI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var vn={exports:{}},Ze={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=b,Lr=Symbol.for("react.element"),Ur=Symbol.for("react.fragment"),Fr=Object.prototype.hasOwnProperty,Wr=Dr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zr={key:!0,ref:!0,__self:!0,__source:!0};function wn(n,e,t){var r,i={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fr.call(e,r)&&!zr.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Lr,type:n,key:a,ref:o,props:i,_owner:Wr.current}}Ze.Fragment=Ur;Ze.jsx=wn;Ze.jsxs=wn;vn.exports=Ze;var s=vn.exports,dt={},Mt=dr;dt.createRoot=Mt.createRoot,dt.hydrateRoot=Mt.hydrateRoot;const Hr="modulepreload",Vr=function(n){return"/ferienwohnung/"+n},Ot={},Br=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=Vr(c),c in Ot)return;Ot[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Hr,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((w,v)=>{h.addEventListener("load",w),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return e().catch(a)})};function yn({className:n="w-4 h-4"}){return s.jsx("svg",{className:`${n} shrink-0`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"})})}const st=[{src:"./images/hero.jpg",alt:"Blick auf den Strand von Egmond aan Zee",position:"center 75%"},{src:"./images/exterior-1.jpg",alt:"Balkon mit Meerblick",position:"center 50%"},{src:"./images/exterior-8.jpg",alt:"Umgebung Egmond aan Zee",position:"center 50%"},{src:"./images/interior-3.jpg",alt:"Schlafzimmer",position:"center 75%"}];function $r({onInfoClick:n}){const[e,t]=b.useState(0);return b.useEffect(()=>{const r=setInterval(()=>{t(i=>(i+1)%st.length)},5e3);return()=>clearInterval(r)},[]),s.jsxs("header",{className:"relative w-full h-[42vh] min-h-[220px] overflow-hidden",children:[st.map((r,i)=>s.jsx("img",{src:r.src,alt:r.alt,loading:i===0?"eager":"lazy",className:"absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",style:{objectPosition:r.position,opacity:i===e?1:0}},r.src)),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-anthracite/75 via-anthracite/20 to-transparent"}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-12",children:[s.jsx("h1",{className:"font-serif text-3xl md:text-5xl text-white drop-shadow-lg",children:"Egmond aan Zee"}),s.jsx("p",{className:"text-white/75 text-sm md:text-base mt-2 drop-shadow",children:"Ferienwohnung direkt am Meer"})]}),s.jsxs("div",{className:"absolute bottom-4 right-6 z-10 flex flex-col items-end gap-2",children:[n&&s.jsxs("button",{onClick:n,"aria-label":"Informationen & Anreise",className:"w-full flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-black/25 hover:bg-black/40 backdrop-blur-sm text-white/90 text-xs transition-colors",children:[s.jsx(yn,{className:"w-3.5 h-3.5"}),"Info"]}),s.jsx("div",{className:"flex gap-0.5",children:st.map((r,i)=>s.jsx("button",{onClick:()=>t(i),"aria-label":`Bild ${i+1}`,className:"p-1.5 flex items-center justify-center",children:s.jsx("span",{className:`block h-2 rounded-full transition-all duration-300 ${i===e?"w-5 bg-white":"w-2 bg-white/40 hover:bg-white/70"}`})},i))})]})]})}const Dt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},qr=(n,e,t)=>{let r;const i=t!=null&&t.addSuffix?Dt[n].withPreposition:Dt[n].standalone;return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:"vor "+r:r},Kr={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Gr={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Jr={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Yr={date:it({formats:Kr,defaultWidth:"full"}),time:it({formats:Gr,defaultWidth:"full"}),dateTime:it({formats:Jr,defaultWidth:"full"})},Zr={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Xr=(n,e,t,r)=>Zr[n],Qr={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},ei={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ut={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ti={narrow:ut.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ut.wide},ni={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},ri={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},ii={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},si=n=>Number(n)+".",ai={ordinalNumber:si,era:_e({values:Qr,defaultWidth:"wide"}),quarter:_e({values:ei,defaultWidth:"wide",argumentCallback:n=>n-1}),month:_e({values:ut,formattingValues:ti,defaultWidth:"wide"}),day:_e({values:ni,defaultWidth:"wide"}),dayPeriod:_e({values:ri,defaultWidth:"wide",formattingValues:ii,defaultFormattingWidth:"wide"})},oi=/^(\d+)(\.)?/i,ci=/\d+/i,li={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},di={any:[/^v/i,/^n/i]},ui={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},hi={any:[/1/i,/2/i,/3/i,/4/i]},mi={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},fi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pi={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},gi={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},xi={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},bi={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},vi={ordinalNumber:fr({matchPattern:oi,parsePattern:ci,valueCallback:n=>parseInt(n)}),era:ke({matchPatterns:li,defaultMatchWidth:"wide",parsePatterns:di,defaultParseWidth:"any"}),quarter:ke({matchPatterns:ui,defaultMatchWidth:"wide",parsePatterns:hi,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ke({matchPatterns:mi,defaultMatchWidth:"wide",parsePatterns:fi,defaultParseWidth:"any"}),day:ke({matchPatterns:pi,defaultMatchWidth:"wide",parsePatterns:gi,defaultParseWidth:"any"}),dayPeriod:ke({matchPatterns:xi,defaultMatchWidth:"wide",parsePatterns:bi,defaultParseWidth:"any"})},_n={code:"de",formatDistance:qr,formatLong:Yr,formatRelative:Xr,localize:ai,match:vi,options:{weekStartsOn:1,firstWeekContainsDate:4}},kn="dd.MM.yyyy";function ie(n){return pr(n,kn,new Date)}function Lt(n){return pt(n,kn)}function ae(n){return pt(n,"d. MMMM yyyy",{locale:_n})}function co(n){return pt(n,"d. MMM",{locale:_n})}function In(n,e,t){const r=typeof e=="string"?ie(e):e,i=typeof t=="string"?ie(t):t;return xr(n,{start:r,end:i})}function Ut(n){return gr(Tt(n),Tt(new Date))}const wi=["Mo","Di","Mi","Do","Fr","Sa","So"],yi=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Ft="https://EgmondApp.github.io/ferienwohnung/",_i=()=>s.jsx("svg",{className:"w-3.5 h-3.5 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"1.8",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"})}),ki=()=>s.jsx("svg",{className:"w-3.5 h-3.5 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})});function En(){const[n,e]=b.useState(!1);async function t(){if(navigator.share)try{await navigator.share({title:"Ferienwohnung Egmond aan Zee",text:"Ferienwohnung direkt am Meer — Egmond aan Zee, Niederlande",url:Ft})}catch{}else try{await navigator.clipboard.writeText(Ft),e(!0),setTimeout(()=>e(!1),2e3)}catch{}}return s.jsxs("button",{onClick:t,className:`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors
        ${n?"border-gold/40 bg-offwhite text-gold":"border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite"}`,"aria-label":"Seite teilen",children:[n?s.jsx(ki,{}):s.jsx(_i,{}),n?"Link kopiert!":"Teilen"]})}const Wt=()=>s.jsx("svg",{className:"w-4 h-4 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"})}),zt=()=>{const n=[[0,0,2,0,0,1,1,0,0,0],[0,1,1,1,0,0,0,2,0,0],[0,0,0,1,1,0,0,0,0,2],[0,0,2,0,1,1,1,0,0,0]],e={0:"#DED6CA",1:"#A70605",2:"#C4A94D"},t={0:.25,1:.55,2:.6};return s.jsx("svg",{width:"36",height:"30",viewBox:"0 0 36 30",fill:"none",children:n.map((r,i)=>{const o=i%2*19,l=Math.floor(i/2)*15;return s.jsxs("g",{children:[s.jsx("rect",{x:o,y:l,width:"17",height:"2.5",rx:"0.5",fill:"#131313",opacity:"0.12"}),r.map((c,d)=>s.jsx("rect",{x:o+d%5*3.4,y:l+4+Math.floor(d/5)*4,width:"2.5",height:"2.5",rx:"0.4",fill:e[c],opacity:t[c]},d))]},i)})})};function Ii({arrival:n,departure:e,onOpenDatePicker:t,onOpenCalendar:r}){const i=n&&e?gt(e,n):null,a=n&&e;return s.jsxs("section",{className:"px-6 pt-8 pb-3 md:px-12 lg:px-20 max-w-7xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("h2",{className:"font-serif text-xl text-anthracite/70",children:"Verfügbarkeit prüfen"}),s.jsx(En,{})]}),s.jsx("div",{className:"bg-offwhite border border-border rounded-xl overflow-hidden shadow-sm",children:s.jsxs("div",{className:"flex flex-col sm:flex-row",children:[s.jsxs("button",{onClick:t,className:"flex-1 px-5 py-3.5 text-left hover:bg-warm transition-colors flex items-center gap-3",children:[s.jsx("span",{className:n?"text-primary":"text-primary/40",children:s.jsx(Wt,{})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-[11px] text-anthracite/45 mb-0.5 uppercase tracking-wide",children:"Anreise"}),s.jsx("div",{className:`text-sm font-medium ${n?"text-anthracite":"text-primary/50 italic"}`,children:n?ae(n):"Datum wählen"})]})]}),s.jsx("div",{className:"hidden sm:block w-px bg-border my-3"}),s.jsx("div",{className:"sm:hidden h-px bg-border mx-5"}),s.jsxs("button",{onClick:t,className:"flex-1 px-5 py-3.5 text-left hover:bg-warm transition-colors flex items-center gap-3",children:[s.jsx("span",{className:e?"text-primary":"text-primary/40",children:s.jsx(Wt,{})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-[11px] text-anthracite/45 mb-0.5 uppercase tracking-wide",children:"Abreise"}),s.jsx("div",{className:`text-sm font-medium ${e?"text-anthracite":"text-primary/50 italic"}`,children:e?ae(e):"Datum wählen"})]})]}),a&&s.jsx("div",{className:"p-3 sm:pl-0 sm:pr-3 sm:py-3 flex items-center",children:s.jsxs("button",{onClick:t,className:"w-full sm:w-auto px-4 py-2 text-sm text-anthracite/60 hover:text-anthracite border border-border bg-offwhite hover:bg-warm rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5",children:[s.jsx("span",{className:"text-anthracite/40",children:"🌙"}),s.jsx("span",{className:"font-medium text-anthracite",children:i}),s.jsx("span",{children:"Nächte"})]})}),s.jsx("div",{className:"hidden sm:block w-px bg-border my-3"}),s.jsxs("button",{onClick:r,className:"hidden sm:flex flex-col items-center justify-center gap-1.5 px-5 py-3 hover:bg-warm transition-colors group",children:[s.jsx("span",{className:"opacity-60 group-hover:opacity-90 transition-opacity",children:s.jsx(zt,{})}),s.jsx("span",{className:"text-[11px] text-anthracite/45 group-hover:text-anthracite/70 transition-colors whitespace-nowrap",children:"Jahresübersicht"})]}),s.jsx("div",{className:"sm:hidden h-px bg-border mx-5"}),s.jsxs("button",{onClick:r,className:"sm:hidden flex items-center gap-3 px-5 py-3 hover:bg-warm transition-colors group","aria-label":"Jahresübersicht öffnen",children:[s.jsx("span",{className:"opacity-60 group-hover:opacity-90 transition-opacity",children:s.jsx(zt,{})}),s.jsx("span",{className:"text-sm text-anthracite/50 group-hover:text-anthracite/75 transition-colors",children:"Jahresübersicht"})]})]})})]})}const Ei={2025:[{date:"01.01.2025",name:"Neujahr"},{date:"18.04.2025",name:"Karfreitag"},{date:"21.04.2025",name:"Ostermontag"},{date:"01.05.2025",name:"Tag der Arbeit"},{date:"29.05.2025",name:"Christi Himmelfahrt"},{date:"09.06.2025",name:"Pfingstmontag"},{date:"19.06.2025",name:"Fronleichnam"},{date:"03.10.2025",name:"Tag der Deutschen Einheit"},{date:"01.11.2025",name:"Allerheiligen"},{date:"25.12.2025",name:"1. Weihnachtsfeiertag"},{date:"26.12.2025",name:"2. Weihnachtsfeiertag"}],2026:[{date:"01.01.2026",name:"Neujahr"},{date:"03.04.2026",name:"Karfreitag"},{date:"06.04.2026",name:"Ostermontag"},{date:"01.05.2026",name:"Tag der Arbeit"},{date:"14.05.2026",name:"Christi Himmelfahrt"},{date:"25.05.2026",name:"Pfingstmontag"},{date:"04.06.2026",name:"Fronleichnam"},{date:"03.10.2026",name:"Tag der Deutschen Einheit"},{date:"01.11.2026",name:"Allerheiligen"},{date:"25.12.2026",name:"1. Weihnachtsfeiertag"},{date:"26.12.2026",name:"2. Weihnachtsfeiertag"}],2027:[{date:"01.01.2027",name:"Neujahr"},{date:"26.03.2027",name:"Karfreitag"},{date:"29.03.2027",name:"Ostermontag"},{date:"01.05.2027",name:"Tag der Arbeit"},{date:"06.05.2027",name:"Christi Himmelfahrt"},{date:"17.05.2027",name:"Pfingstmontag"},{date:"27.05.2027",name:"Fronleichnam"},{date:"03.10.2027",name:"Tag der Deutschen Einheit"},{date:"01.11.2027",name:"Allerheiligen"},{date:"25.12.2027",name:"1. Weihnachtsfeiertag"},{date:"26.12.2027",name:"2. Weihnachtsfeiertag"}],2028:[{date:"01.01.2028",name:"Neujahr"},{date:"14.04.2028",name:"Karfreitag"},{date:"17.04.2028",name:"Ostermontag"},{date:"01.05.2028",name:"Tag der Arbeit"},{date:"25.05.2028",name:"Christi Himmelfahrt"},{date:"05.06.2028",name:"Pfingstmontag"},{date:"15.06.2028",name:"Fronleichnam"},{date:"03.10.2028",name:"Tag der Deutschen Einheit"},{date:"01.11.2028",name:"Allerheiligen"},{date:"25.12.2028",name:"1. Weihnachtsfeiertag"},{date:"26.12.2028",name:"2. Weihnachtsfeiertag"}]},Si={2025:[{start:"23.12.2024",end:"06.01.2025",name:"Weihnachtsferien"},{start:"14.04.2025",end:"26.04.2025",name:"Osterferien"},{start:"10.06.2025",end:"10.06.2025",name:"Pfingstferien"},{start:"14.07.2025",end:"26.08.2025",name:"Sommerferien"},{start:"13.10.2025",end:"25.10.2025",name:"Herbstferien"},{start:"22.12.2025",end:"06.01.2026",name:"Weihnachtsferien"}],2026:[{start:"22.12.2025",end:"06.01.2026",name:"Weihnachtsferien"},{start:"30.03.2026",end:"11.04.2026",name:"Osterferien"},{start:"26.05.2026",end:"26.05.2026",name:"Pfingstferien"},{start:"20.07.2026",end:"01.09.2026",name:"Sommerferien"},{start:"17.10.2026",end:"31.10.2026",name:"Herbstferien"},{start:"23.12.2026",end:"06.01.2027",name:"Weihnachtsferien"}],2027:[{start:"01.01.2027",end:"06.01.2027",name:"Weihnachtsferien"},{start:"22.03.2027",end:"03.04.2027",name:"Osterferien"},{start:"18.05.2027",end:"18.05.2027",name:"Pfingstferien"},{start:"19.07.2027",end:"31.08.2027",name:"Sommerferien"},{start:"23.10.2027",end:"06.11.2027",name:"Herbstferien"},{start:"24.12.2027",end:"08.01.2028",name:"Weihnachtsferien"}],2028:[{start:"10.04.2028",end:"22.04.2028",name:"Osterferien"},{start:"06.06.2028",end:"06.06.2028",name:"Pfingstferien"},{start:"10.07.2028",end:"22.08.2028",name:"Sommerferien"},{start:"23.10.2028",end:"04.11.2028",name:"Herbstferien"},{start:"21.12.2028",end:"05.01.2029",name:"Weihnachtsferien"}]},Ni={2025:[{date:"02.05.2025",name:"Brückentag (Tag der Arbeit)"},{date:"30.05.2025",name:"Brückentag (Christi Himmelfahrt)"},{date:"20.06.2025",name:"Brückentag (Fronleichnam)"}],2026:[{date:"02.01.2026",name:"Brückentag (Neujahr)"},{date:"15.05.2026",name:"Brückentag (Christi Himmelfahrt)"},{date:"05.06.2026",name:"Brückentag (Fronleichnam)"}],2027:[{date:"07.05.2027",name:"Brückentag (Christi Himmelfahrt)"},{date:"28.05.2027",name:"Brückentag (Fronleichnam)"}],2028:[{date:"26.05.2028",name:"Brückentag (Christi Himmelfahrt)"},{date:"16.06.2028",name:"Brückentag (Fronleichnam)"}]};function Ti(n,e){const t=br(new Date(n,e)),r=vr(new Date(n,e)),i=wr({start:t,end:r}),a=[];let o=new Array(7).fill(null);for(const l of i){const c=(hn(l)+6)%7;o[c]=l,c===6&&(a.push(o),o=new Array(7).fill(null))}return o.some(l=>l!==null)&&a.push(o),a}function Ht(n){const e=V(n),t=Ei[e]||[];for(const a of t)if(X(n,ie(a.date)))return{isSpecial:!0,name:a.name};const r=Ni[e]||[];for(const a of r)if(X(n,ie(a.date)))return{isSpecial:!0,name:a.name};const i=Si[e]||[];for(const a of i)if(In(n,a.start,a.end))return{isSpecial:!0,name:a.name};return{isSpecial:!1,name:null}}function We(n,e){for(const t of e)if(In(n,t.startDate,t.endDate))return t;return null}function Sn(n,e){return We(n,e)!==null}function ji(n,e,t){for(let i=new Date(n.getTime()+864e5);i<e;i=new Date(i.getTime()+864e5))if(Sn(i,t))return!0;return!1}function Nn(n,e,t,r){return!n||n&&e?{newArrival:t,newDeparture:null,conflict:!1}:t>n?ji(n,t,r)?{newArrival:t,newDeparture:null,conflict:!0}:{newArrival:n,newDeparture:t,conflict:!1}:{newArrival:t,newDeparture:null,conflict:!1}}function ce({year:n,month:e,occupancy:t=[],selectedRange:r={start:null,end:null},onDayClick:i,onOccupiedClick:a,compact:o=!1,showGuestName:l=!1,occupiedLabel:c=null,showHeading:d=!0}){const f=Ti(n,e);function h(m){const g=t.some(N=>X(m,ie(N.startDate))),p=t.some(N=>X(m,ie(N.endDate))),S=Sn(m,t),I=We(m,t);return{occupied:S,entry:I,isArrival:g&&!p,isDeparture:p&&!g,isSplit:g&&p}}function w(m){const g=hn(m);return g===0||g===6}function v(m){if(!m)return"";const g=["cal-day"],p=Ut(m),S=yr(m),I=Ht(m),{start:N,end:P}=r,{occupied:T,isArrival:R,isDeparture:A,isSplit:L}=h(m),Oe=N&&X(m,N),nt=P&&X(m,P),H=N&&P&&m>N&&m<P,ue=Oe||nt||H;return p&&g.push("cal-day--past"),S&&g.push("cal-day--today"),w(m)&&!T&&!ue&&g.push("cal-day--weekend"),Oe?A||L?g.push("cal-day--departure-occ-arrival-user"):g.push(I.isSpecial?"cal-day--arrival-special":"cal-day--arrival"):nt?R||L?g.push("cal-day--arrival-occ-departure-user"):g.push(I.isSpecial?"cal-day--departure-special":"cal-day--departure"):H?g.push("cal-day--selected"):T?L?g.push(I.isSpecial?"cal-day--occ-split-special":"cal-day--occ-split"):R?g.push(I.isSpecial?"cal-day--occ-arrival-special":"cal-day--occ-arrival"):A?g.push(I.isSpecial?"cal-day--occ-departure-special":"cal-day--occ-departure"):g.push("cal-day--occupied"):p||g.push("cal-day--free"),I.isSpecial&&!ue&&!T&&g.push("cal-day--special"),I.isSpecial&&!ue&&g.push("cal-day--special-indicator"),!p&&T?(R||A||L)&&i?g.push("cursor-pointer hover:opacity-80"):a?g.push("cursor-pointer hover:opacity-70"):g.push("cal-day--disabled"):!p&&!T&&i?g.push("cursor-pointer hover:bg-blue/10"):p&&g.push("cal-day--disabled"),g.join(" ")}function _(m){if(!m)return"";const g=Ht(m);return g.isSpecial?g.name:""}function k(m){if(!m||Ut(m))return;const{occupied:g,isArrival:p,isDeparture:S,isSplit:I}=h(m);g?(p||S||I)&&i?i(m):a&&a(m):i&&i(m)}function y(){if(!l&&!c)return new Set;const m=new Set;return f.forEach(g=>{let p=null,S=null,I=null;function N(){var P,T,R;if(p!==null&&S!==null){const A=Math.floor((p+S)/2);m.add(`${(P=g[A])==null?void 0:P.getFullYear()}-${(T=g[A])==null?void 0:T.getMonth()}-${(R=g[A])==null?void 0:R.getDate()}`)}p=null,S=null,I=null}g.forEach((P,T)=>{if(!P){N();return}const{occupied:R,isArrival:A,isDeparture:L,isSplit:Oe}=h(P);if(R&&!A&&!L&&!Oe){const H=We(P,t),ue=(H==null?void 0:H.id)??(H==null?void 0:H.note)??"occ";I===ue?S=T:(N(),p=T,S=T,I=ue)}else N()}),N()}),m}function u(m){var S,I,N,P,T;const{isSplit:g}=h(m);if(g){const R=(I=(S=t.find(L=>X(m,ie(L.endDate))))==null?void 0:S.note)==null?void 0:I.split(" ")[0],A=(P=(N=t.find(L=>X(m,ie(L.startDate))))==null?void 0:N.note)==null?void 0:P.split(" ")[0];return R&&A?`${R}/${A}`:R||A||null}const p=We(m,t);return((T=p==null?void 0:p.note)==null?void 0:T.split(" ")[0])??null}const E=y(),j=o?"text-xs":"text-sm",z=o?"text-sm":"text-base";return s.jsxs("div",{children:[d&&s.jsxs("h3",{className:`font-serif ${z} mb-2 text-anthracite`,children:[yi[e]," ",n]}),s.jsx("div",{className:"grid grid-cols-7 gap-px mb-1",children:wi.map(m=>s.jsx("div",{className:`text-center ${o?"text-[10px]":"text-xs"} text-anthracite/40 font-medium`,children:m},m))}),s.jsx("div",{className:"grid grid-cols-7 gap-x-0 gap-y-px",children:f.flat().map((m,g)=>{const p=m?`${m.getFullYear()}-${m.getMonth()}-${m.getDate()}`:null,I=p&&E.has(p)?c??u(m):null;return s.jsx("div",{className:m?v(m):"cal-day",title:m?_(m):"",onClick:()=>k(m),children:m?I?s.jsxs("div",{className:"flex flex-col items-center leading-tight",children:[s.jsx("span",{className:j,children:jt(m)}),s.jsx("span",{className:"text-[7px] leading-none opacity-80 truncate max-w-full px-0.5",children:I})]}):s.jsx("span",{className:j,children:jt(m)}):null},p??`e${g}`)})})]})}function Tn({showSelection:n=!0,className:e=""}){return s.jsxs("div",{className:`flex flex-wrap gap-x-4 gap-y-1 text-xs text-anthracite/50 ${e}`,children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-3 h-3 rounded-sm bg-primary/15 border border-primary/20"}),"Belegt"]}),n&&s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-3 h-3 rounded-sm bg-blue/15 border border-blue/20"}),"Auswahl"]}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-3 h-3 rounded-sm bg-gold/25",style:{borderBottom:"2px solid rgba(196,169,77,0.7)"}}),"Ferien | Feier- und Brückentage (NRW)"]})]})}function Pi({occupancy:n,isOpen:e,onClose:t,onSelect:r}){const i=new Date().getFullYear(),[a,o]=b.useState(i),[l,c]=b.useState(null),[d,f]=b.useState(null),[h,w]=b.useState(null),[v,_]=b.useState(!1),k=Array.from({length:12},(p,S)=>S);b.useEffect(()=>{if(!e)return;document.body.style.overflow="hidden";function p(S){S.key==="Escape"&&y()}return window.addEventListener("keydown",p),()=>{document.body.style.overflow="",window.removeEventListener("keydown",p)}},[e]);function y(){t(),c(null),f(null),w(null)}const u=b.useCallback(p=>{const{newArrival:S,newDeparture:I,conflict:N}=Nn(d,h,p,n);f(S),w(I),_(N)},[d,h,n]);function E(){var p;d&&h&&(r({arrival:d,departure:h}),t(),c(null),f(null),w(null),(p=document.getElementById("anfrage"))==null||p.scrollIntoView({behavior:"smooth"}))}function j(){f(null),w(null)}const z=b.useMemo(()=>({start:d,end:h}),[d,h]),m=d||h,g=l?fe(l,1):null;return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"fixed inset-0 z-50 bg-anthracite/60 flex items-center justify-center p-4 animate-fade-in",onClick:y,children:s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col animate-modal-in",role:"dialog","aria-label":"Jahresübersicht",onClick:p=>p.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[l!==null&&s.jsx("button",{onClick:()=>c(null),className:"text-sm text-anthracite/60 hover:text-anthracite transition-colors",children:"← Übersicht"}),l===null&&s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>o(p=>p-1),disabled:a<=i,className:"px-2 py-1 text-sm border border-border rounded hover:bg-offwhite disabled:opacity-30 transition-colors","aria-label":"Vorjahr",children:"←"}),s.jsx("span",{className:"font-serif text-xl text-anthracite w-16 text-center",children:a}),s.jsx("button",{onClick:()=>o(p=>p+1),className:"px-2 py-1 text-sm border border-border rounded hover:bg-offwhite transition-colors","aria-label":"Nächstes Jahr",children:"→"})]})]}),s.jsx("button",{onClick:y,className:"text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center","aria-label":"Schließen",children:"×"})]}),m&&s.jsxs("div",{className:"flex items-center gap-6 px-6 py-2.5 text-sm bg-warm/60 border-b border-border shrink-0",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-anthracite/50",children:"Anreise: "}),s.jsx("span",{className:"font-medium text-anthracite",children:d?ae(d):"–"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-anthracite/50",children:"Abreise: "}),s.jsx("span",{className:"font-medium text-anthracite",children:h?ae(h):"–"})]})]}),s.jsxs("div",{className:"overflow-auto p-6 flex-1",children:[s.jsx(Tn,{className:"mb-4"}),l===null?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"text-xs text-anthracite/40 mb-4",children:"Monat antippen zum Vergrößern — Zeitraum direkt im Kalender wählen"}),s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2",children:k.map(p=>s.jsx("button",{onClick:()=>c(new Date(a,p,1)),className:"bg-offwhite rounded-lg p-4 text-left hover:bg-warm hover:border-anthracite/20 border border-border transition-colors",children:s.jsx(ce,{year:a,month:p,occupancy:n,selectedRange:z,compact:!0})},p))})]}):s.jsxs("div",{children:[s.jsxs("div",{className:"md:hidden",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>c(p=>$e(p)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("span",{className:"text-xs text-anthracite/50 font-medium",children:l.toLocaleDateString("de-DE",{month:"long",year:"numeric"})}),s.jsx("button",{onClick:()=>c(p=>fe(p,1)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"})]}),s.jsx(ce,{year:V(l),month:Q(l),occupancy:n,selectedRange:z,onDayClick:u,showHeading:!1})]}),s.jsxs("div",{className:"hidden md:block relative",children:[s.jsx("button",{onClick:()=>c(p=>$e(p)),className:"absolute left-0 top-0 p-1 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("button",{onClick:()=>c(p=>fe(p,1)),className:"absolute right-0 top-0 p-1 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"}),s.jsxs("div",{className:"grid grid-cols-2 gap-8 px-8",children:[s.jsx(ce,{year:V(l),month:Q(l),occupancy:n,selectedRange:z,onDayClick:u}),s.jsx(ce,{year:V(g),month:Q(g),occupancy:n,selectedRange:z,onDayClick:u})]})]})]})]}),s.jsxs("div",{className:"flex items-center justify-between px-6 py-3 border-t border-border shrink-0",children:[m?s.jsx("button",{onClick:j,className:"px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:"Zurücksetzen"}):s.jsx("span",{className:`text-xs ${v?"text-primary font-medium":"text-anthracite/40"}`,children:v?"Zeitraum enthält belegte Tage — neuen Anreisetag wählen":l!==null?d?"Abreisetag wählen":"Anreisetag wählen":"Monat antippen und Zeitraum wählen"}),s.jsx("button",{onClick:E,disabled:!d||!h,className:"px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed",children:"Zeitraum übernehmen"})]})]})})})}function Ai({isOpen:n,onClose:e}){if(b.useEffect(()=>{if(!n)return;document.body.style.overflow="hidden";function r(i){i.key==="Escape"&&e()}return window.addEventListener("keydown",r),()=>{document.body.style.overflow="",window.removeEventListener("keydown",r)}},[n,e]),!n)return null;const t=window.location.href.split("#")[0];return s.jsx("div",{className:"fixed inset-0 z-50 bg-anthracite/60 flex items-center justify-center p-4 animate-fade-in",onClick:e,children:s.jsxs("div",{className:"bg-warm rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col animate-modal-in",role:"dialog","aria-label":"Informationen",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border shrink-0",children:[s.jsx("span",{className:"font-serif text-lg text-anthracite",children:"Zu Wohnung und Anreise"}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("a",{href:`${t}#/info`,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:"Drucken / Vollansicht ↗"}),s.jsx("button",{onClick:e,className:"text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center","aria-label":"Schließen",children:"×"})]})]}),s.jsxs("div",{className:"overflow-auto px-6 py-5 space-y-4 flex-1",children:[s.jsxs(Ie,{icon:"📍",title:"Adresse",action:s.jsx(En,{}),children:[s.jsx("p",{className:"font-medium",children:"Kennedyboulevard 604"}),s.jsx("p",{children:"1931 XM Egmond aan Zee"}),s.jsx("a",{href:"https://maps.google.com/?q=Kennedyboulevard+604,+1931+XM+Egmond+aan+Zee",target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-2 text-sm text-primary hover:underline",children:"🗺️ In Google Maps öffnen"})]}),s.jsxs(Ie,{icon:"🚗",title:"Anreise & Eingang",children:[s.jsx(Y,{icon:"🅿️",label:"Parken",children:"Am Südende des Innenhofs. Vorletzte Garage rechts – Nummer 21."}),s.jsx(Y,{icon:"🚪",label:"Eingang",children:'Eingangstür links nahe der Garage. Dann 2. Etage links – Türschild „Kimmeskamp".'})]}),s.jsxs(Ie,{icon:"🏠",title:"Zur Wohnung",children:[s.jsx(Y,{icon:"🔄",label:"Check-in / Check-out",children:"Wechsel ab 12 Uhr (oder nach Absprache). Abreise bis 12 Uhr, Anreise ab 12 Uhr."}),s.jsx(Y,{icon:"🧺",label:"Bettzeug",children:"Bettzeug und Handtücher nicht vergessen."}),s.jsx(Y,{icon:"🛋️",label:"Betten",children:"Ausziehbetten unter der Sitzlandschaft. Decken & Kissen in den Bettkästen im Schlafzimmer."}),s.jsx(Y,{icon:"☀️",label:"Markise",children:"Elektrisch – Stecker an der Balkontür anschalten. Fernbedienung im Regal ganz links. Bei Windgefahr unbedingt einfahren!"}),s.jsx(Y,{icon:"🗑️",label:"Müll",children:"Abfallpass im Flurregal. 30L-Sack ca. 0,55 € · 60L-Sack ca. 1,10 €. Papier, Glas, PMD kostenfrei. Die Kosten werden nicht weiterberechnet – wir freuen uns trotzdem, wenn ihr sparsam damit umgeht."}),s.jsx(Y,{icon:"🧹",label:"Endreinigung",children:"Gereinigt übergeben oder ca. 70 € über die Hausmeister buchen (Stand 2025)."})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[s.jsx(Ie,{icon:"✅",title:"Bei Ankunft",children:s.jsx(Vt,{items:[{icon:"🔌",text:"Kühlschränke einstecken"},{icon:"🔥",text:"Gas aufdrehen – rechts neben dem Herd"},{icon:"🌡️",text:"Heizung auf Temperatur"},{icon:"💧",text:"Wasserhahn Spülmaschine aufdrehen"}]})}),s.jsx(Ie,{icon:"🚪",title:"Bei Abfahrt",children:s.jsx(Vt,{items:[{icon:"🔌",text:"Kühlschränke ausstecken & öffnen"},{icon:"💧",text:"Wasserhahn Spülmaschine zudrehen"},{icon:"❄️",text:"Heizung auf Schneeflocke"},{icon:"🔥",text:"Gas ausschalten"},{icon:"🚪",text:"Zwischentür zuziehen"},{icon:"🚿",text:"Bad & WC offen lassen"}]})})]})]})]})})}function Ie({icon:n,title:e,children:t,action:r}){return s.jsxs("div",{className:"bg-offwhite border border-border rounded-xl p-4",children:[s.jsxs("h3",{className:"font-serif text-base text-anthracite mb-2 flex items-center gap-2",children:[s.jsx("span",{children:n}),s.jsx("span",{className:"flex-1",children:e}),r]}),s.jsx("div",{className:"space-y-2 text-sm text-anthracite/80 leading-relaxed",children:t})]})}function Y({icon:n,label:e,children:t}){return s.jsxs("div",{className:"flex gap-2",children:[s.jsx("span",{className:"shrink-0 mt-0.5",children:n}),s.jsxs("div",{children:[s.jsxs("span",{className:"font-medium text-anthracite",children:[e,": "]}),t]})]})}function Vt({items:n}){return s.jsx("ul",{className:"space-y-1.5",children:n.map(e=>s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"shrink-0",children:e.icon}),s.jsx("span",{children:e.text})]},e.text))})}const Ci=[{id:"innen",label:"Innen",images:[{src:"./images/interior-1.jpg",alt:"Wohnbereich"},{src:"./images/interior-2.jpg",alt:"Schlafzimmer"},{src:"./images/interior-3.jpg",alt:"Küche"},{src:"./images/interior-4.jpg",alt:"Badezimmer"},{src:"./images/interior-5.jpg",alt:"Essbereich"},{src:"./images/interior-6.jpg",alt:"Sitzlandschaft"},{src:"./images/interior-7.jpg",alt:"Schlafzimmer 2"},{src:"./images/interior-8.jpg",alt:"Detail"}]},{id:"aussen",label:"Außen",images:[{src:"./images/exterior-1.jpg",alt:"Balkon"},{src:"./images/exterior-2.jpg",alt:"Terrasse"},{src:"./images/exterior-3.jpg",alt:"Strand"},{src:"./images/exterior-4.jpg",alt:"Dünen"},{src:"./images/exterior-5.jpg",alt:"Meer"},{src:"./images/exterior-6.jpg",alt:"Sonnenuntergang"},{src:"./images/exterior-7.jpg",alt:"Dorf"},{src:"./images/exterior-8.jpg",alt:"Umgebung"}]}];function Ri(){const[n,e]=b.useState(null),t=b.useRef(null);b.useEffect(()=>{if(!n)return;document.body.style.overflow="hidden";function a(o){const l=n.gallery.images;o.key==="Escape"&&e(null),o.key==="ArrowRight"&&e(c=>c?{...c,index:(c.index+1)%l.length}:null),o.key==="ArrowLeft"&&e(c=>c?{...c,index:(c.index-1+l.length)%l.length}:null)}return window.addEventListener("keydown",a),()=>{document.body.style.overflow="",window.removeEventListener("keydown",a)}},[n]);function r(a){t.current=a.touches[0].clientX}function i(a){if(t.current===null||!n)return;const o=t.current-a.changedTouches[0].clientX;if(Math.abs(o)<40)return;const l=n.gallery.images;o>0?e(c=>c?{...c,index:(c.index+1)%l.length}:null):e(c=>c?{...c,index:(c.index-1+l.length)%l.length}:null),t.current=null}return s.jsxs("section",{id:"galerie",className:"px-6 pt-2 pb-4 md:px-12 lg:px-20 max-w-7xl mx-auto",children:[s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Ci.map(a=>s.jsx(Mi,{gallery:a,onOpen:o=>e({gallery:a,index:o})},a.id))}),n&&s.jsxs("div",{className:"lightbox-overlay animate-fade-in",role:"dialog","aria-label":`${n.gallery.label} Galerie`,onClick:()=>e(null),onTouchStart:r,onTouchEnd:i,children:[s.jsx("button",{onClick:()=>e(null),className:"absolute top-5 right-5 text-white/80 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors","aria-label":"Schließen",children:"×"}),s.jsx("button",{onClick:a=>{a.stopPropagation(),e(o=>o?{...o,index:(o.index-1+o.gallery.images.length)%o.gallery.images.length}:null)},className:"absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors","aria-label":"Vorheriges Bild",children:"‹"}),s.jsx("img",{src:n.gallery.images[n.index].src,alt:n.gallery.images[n.index].alt,className:"max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl animate-fade-in",onClick:a=>a.stopPropagation()},n.index),s.jsx("button",{onClick:a=>{a.stopPropagation(),e(o=>o?{...o,index:(o.index+1)%o.gallery.images.length}:null)},className:"absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors","aria-label":"Nächstes Bild",children:"›"}),s.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm",children:[n.gallery.label," · ",n.index+1," / ",n.gallery.images.length]})]})]})}function Mi({gallery:n,onOpen:e}){const[t,...r]=n.images,i=r.slice(0,4);return s.jsxs("div",{className:"flex flex-col gap-1.5",children:[s.jsx("div",{className:"flex items-center justify-between px-0.5",children:s.jsx("span",{className:"text-xs font-medium text-anthracite/70 uppercase tracking-widest",children:n.label})}),s.jsxs("button",{onClick:()=>e(0),className:"group relative rounded-xl overflow-hidden bg-offwhite border border-border hover:border-anthracite/20 transition-colors shadow-sm active:scale-[0.99]","aria-label":`${n.label} Galerie öffnen — ${n.images.length} Fotos`,children:[s.jsxs("div",{className:"grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-0.5 h-48 sm:h-56",children:[s.jsx("div",{className:"row-span-2 overflow-hidden bg-stone/20",children:s.jsx("img",{src:t.src,alt:t.alt,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",loading:"lazy"})}),i.map((a,o)=>s.jsx("div",{className:"overflow-hidden bg-stone/20",children:s.jsx("img",{src:a.src,alt:a.alt,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",loading:"lazy"})},a.src))]}),s.jsx("div",{className:"absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/30 transition-colors"}),s.jsxs("div",{className:"absolute bottom-2.5 right-2.5 bg-white/90 text-anthracite text-xs font-medium px-2.5 py-1 rounded-full shadow-sm pointer-events-none",children:["Alle ",n.images.length," Fotos"]})]})]})}function Oi({isOpen:n,onClose:e,occupancy:t,initialDate:r,onSelect:i}){const[a,o]=b.useState(()=>{const u=r||new Date;return new Date(V(u),Q(u),1)}),[l,c]=b.useState(null),[d,f]=b.useState(null);b.useEffect(()=>{if(n){const u=r||new Date;return o(new Date(V(u),Q(u),1)),c(null),f(null),document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}}},[n,r]),b.useEffect(()=>{if(!n)return;function u(E){E.key==="Escape"&&e()}return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[n,e]);const h=b.useMemo(()=>({start:l,end:d}),[l,d]),w=b.useCallback(u=>{const{newArrival:E,newDeparture:j}=Nn(l,d,u,t);c(E),f(j)},[l,d,t]);if(!n)return null;const v=fe(a,1),_=l&&d?gt(d,l):null;function k(){var u;l&&d&&(i({arrival:l,departure:d}),e(),(u=document.getElementById("anfrage"))==null||u.scrollIntoView({behavior:"smooth"}))}function y(){c(null),f(null)}return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-anthracite/60 px-4 animate-fade-in",onClick:e,children:s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col animate-modal-in",role:"dialog","aria-label":"Reisezeitraum wählen",onClick:u=>u.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border shrink-0",children:[s.jsxs("div",{children:[l||d?s.jsxs("div",{className:"flex items-center gap-2.5 text-sm",children:[s.jsx("span",{className:`font-medium ${l?"text-anthracite":"text-anthracite/35"}`,children:l?ae(l):"Anreise"}),s.jsx("span",{className:"text-anthracite/25",children:"→"}),s.jsx("span",{className:`font-medium ${d?"text-anthracite":"text-anthracite/35"}`,children:d?ae(d):"Abreise"}),_&&s.jsxs("span",{className:"ml-1 px-2 py-0.5 text-[11px] bg-offwhite border border-border rounded-full text-anthracite/50",children:[_," Nächte"]})]}):s.jsx("span",{className:"font-serif text-lg text-anthracite",children:"Reisezeitraum wählen"}),s.jsx("p",{className:"text-xs text-anthracite/35 mt-0.5",children:l?d?"Zeitraum bestätigen":"Abreisetag wählen":"Anreisetag wählen"})]}),s.jsx("button",{onClick:e,className:"text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center","aria-label":"Schließen",children:"×"})]}),s.jsx(Tn,{showSelection:!0,className:"px-6 py-2 border-b border-border bg-warm/30 shrink-0"}),s.jsxs("div",{className:"px-6 py-4 overflow-auto flex-1",children:[s.jsxs("div",{className:"md:hidden",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>o(u=>$e(u)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("span",{className:"text-xs text-anthracite/50 font-medium",children:a.toLocaleDateString("de-DE",{month:"long",year:"numeric"})}),s.jsx("button",{onClick:()=>o(u=>fe(u,1)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"})]}),s.jsx(ce,{year:V(a),month:Q(a),occupancy:t,selectedRange:h,onDayClick:w,showHeading:!1})]}),s.jsxs("div",{className:"hidden md:block relative",children:[s.jsx("button",{onClick:()=>o(u=>$e(u)),className:"absolute left-0 top-0 p-2 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("button",{onClick:()=>o(u=>fe(u,1)),className:"absolute right-0 top-0 p-2 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"}),s.jsxs("div",{className:"grid grid-cols-2 gap-8 px-7",children:[s.jsx(ce,{year:V(a),month:Q(a),occupancy:t,selectedRange:h,onDayClick:w}),s.jsx(ce,{year:V(v),month:Q(v),occupancy:t,selectedRange:h,onDayClick:w})]})]})]}),s.jsxs("div",{className:"flex items-center justify-between px-6 pb-4 pt-3 border-t border-border shrink-0",children:[l||d?s.jsx("button",{onClick:y,className:"px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:"Zurücksetzen"}):s.jsx("span",{}),s.jsx("button",{onClick:k,disabled:!l||!d,className:"px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed",children:"Zeitraum übernehmen"})]})]})})}function Di({arrival:n,departure:e,onOpenDatePicker:t,onSubmit:r}){const i=n&&e?gt(e,n):null,[a,o]=b.useState({name:"",email:"",phone:"",guests:2,message:""}),[l,c]=b.useState(!1),[d,f]=b.useState(!1),[h,w]=b.useState(null);function v(u,E){o(j=>({...j,[u]:E}))}const _=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;async function k(u){if(u.preventDefault(),!n||!e){w("Bitte wählen Sie zuerst einen Reisezeitraum.");return}if(a.name.trim().length<2){w("Bitte geben Sie Ihren vollständigen Namen ein.");return}if(!_.test(a.email.trim())){w("Bitte geben Sie eine gültige E-Mail-Adresse ein.");return}c(!0),w(null);try{await r({...a,arrival:Lt(n),departure:Lt(e)}),f(!0),o({name:"",email:"",phone:"",guests:2,message:""})}catch{w("Fehler beim Senden. Bitte versuchen Sie es erneut.")}finally{c(!1)}}const y="w-full px-4 py-2.5 bg-white border border-border rounded text-sm text-anthracite placeholder:text-anthracite/40 focus:outline-none focus:border-anthracite/40 focus:ring-2 focus:ring-anthracite/10 transition-colors";return s.jsx("section",{id:"anfrage",className:"px-6 pt-5 pb-8 md:px-12 lg:px-20 max-w-7xl mx-auto",children:s.jsx("div",{className:"bg-white rounded-xl border border-border p-6 md:p-8",children:d?s.jsxs("div",{className:"bg-offwhite border border-gold/40 rounded-lg p-8 text-center",children:[s.jsx("p",{className:"text-anthracite font-medium text-lg",children:"Danke für die Anfrage — wir melden uns persönlich."}),s.jsx("p",{className:"text-anthracite/50 text-sm mt-2",children:"Sie erhalten in Kürze eine Antwort per E-Mail."}),s.jsx("button",{type:"button",onClick:()=>f(!1),className:"mt-5 px-5 py-2 text-sm font-medium rounded-lg border border-gold/40 text-anthracite/70 hover:bg-warm transition-colors",children:"Neue Anfrage stellen"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h2",{className:"font-serif text-base text-anthracite/50 mb-4",children:"Anfrageformular"}),s.jsxs("div",{className:"flex items-center gap-4 mb-6 pb-5 border-b border-border text-sm flex-wrap",children:[s.jsxs("div",{className:"whitespace-nowrap",children:[s.jsx("span",{className:"text-anthracite/40",children:"Anreise: "}),s.jsx("span",{className:`font-medium ${n?"text-anthracite":"text-anthracite/40"}`,children:n?ae(n):"–"})]}),s.jsx("span",{className:"text-anthracite/20",children:"·"}),s.jsxs("div",{className:"whitespace-nowrap",children:[s.jsx("span",{className:"text-anthracite/40",children:"Abreise: "}),s.jsx("span",{className:`font-medium ${e?"text-anthracite":"text-anthracite/40"}`,children:e?ae(e):"–"})]}),i&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-anthracite/20",children:"·"}),s.jsxs("span",{className:"whitespace-nowrap text-anthracite/60 flex items-center gap-1",children:[s.jsx("span",{children:"🌙"}),s.jsxs("span",{className:"font-medium text-anthracite",children:[i," Nächte"]})]})]}),s.jsx("button",{type:"button",onClick:t,className:"ml-auto px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:n?"Ändern":"Zeitraum wählen"})]}),s.jsxs("form",{onSubmit:k,className:"space-y-4",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-name",className:"block text-xs text-anthracite/50 mb-1.5",children:"Name *"}),s.jsx("input",{id:"inq-name",name:"name",type:"text",value:a.name,onChange:u=>v("name",u.target.value),className:y,placeholder:"Max Mustermann",required:!0,autoComplete:"name"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-email",className:"block text-xs text-anthracite/50 mb-1.5",children:"E-Mail *"}),s.jsx("input",{id:"inq-email",name:"email",type:"email",value:a.email,onChange:u=>v("email",u.target.value),className:y,placeholder:"max@beispiel.de",required:!0,autoComplete:"email"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-phone",className:"block text-xs text-anthracite/50 mb-1.5",children:"Telefon (optional)"}),s.jsx("input",{id:"inq-phone",name:"phone",type:"tel",value:a.phone,onChange:u=>v("phone",u.target.value),className:y,placeholder:"0170 1234567",autoComplete:"tel"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-guests",className:"block text-xs text-anthracite/50 mb-1.5",children:"Personen"}),s.jsx("select",{id:"inq-guests",name:"guests",value:a.guests,onChange:u=>v("guests",Number(u.target.value)),className:y,children:[1,2,3,4].map(u=>s.jsxs("option",{value:u,children:[u," ",u===1?"Person":"Personen"]},u))})]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between mb-1.5",children:[s.jsx("label",{htmlFor:"inq-message",className:"text-xs text-anthracite/50",children:"Nachricht (optional)"}),s.jsxs("span",{className:`text-xs ${a.message.length>1800?"text-primary":"text-anthracite/30"}`,children:[a.message.length,"/2000"]})]}),s.jsx("textarea",{id:"inq-message",name:"message",value:a.message,onChange:u=>v("message",u.target.value.slice(0,2e3)),className:`${y} h-28 resize-none`,placeholder:"Haben Sie besondere Wünsche oder Fragen?"})]}),h&&s.jsx("p",{className:"text-primary text-sm border border-primary/20 bg-primary/5 rounded px-3 py-2",children:h}),s.jsx("button",{type:"submit",disabled:l,className:"w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-40",children:l?"Wird gesendet…":"Anfrage senden"})]})]})})})}function Li(){const n=new Date().getFullYear();return s.jsx("footer",{className:"border-t border-border bg-offwhite mt-4",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-5 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-anthracite/50",children:[s.jsx("span",{className:"font-serif text-anthracite/70",children:"Egmond aan Zee"}),s.jsx("a",{href:"mailto:kilian.kimmeskamp@outlook.com",className:"hover:text-anthracite transition-colors","aria-label":"E-Mail Kontakt",children:"Kontakt"}),s.jsxs("span",{children:["© ",n]}),s.jsx("a",{href:"#/admin",className:"text-anthracite/20 hover:text-anthracite/50 transition-colors text-xs",children:"Admin"})]})})}function vt(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function jn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ui=jn,Pn=new xt("auth","Firebase",jn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new _r("@firebase/auth");function Fi(n,...e){qe.logLevel<=fn.WARN&&qe.warn(`Auth (${Pe}): ${n}`,...e)}function ze(n,...e){qe.logLevel<=fn.ERROR&&qe.error(`Auth (${Pe}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n,...e){throw wt(n,...e)}function F(n,...e){return wt(n,...e)}function An(n,e,t){const r=Object.assign(Object.assign({},Ui()),{[e]:t});return new xt("auth","Firebase",r).create(e,{appName:n.name})}function se(n){return An(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wt(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Pn.create(n,...e)}function x(n,e,...t){if(!n)throw wt(e,...t)}function $(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ze(e),new Error(e)}function G(n,e){n||$(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Wi(){return Bt()==="http:"||Bt()==="https:"}function Bt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wi()||Er()||"connection"in navigator)?navigator.onLine:!0}function Hi(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.shortDelay=e,this.longDelay=t,G(t>e,"Short delay should be less than long delay!"),this.isMobile=kr()||Ir()}get(){return zi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,e){G(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Ce(3e4,6e4);function de(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function J(n,e,t,r,i={}){return Rn(n,i,async()=>{let a={},o={};r&&(e==="GET"?o=r:a={body:JSON.stringify(r)});const l=Ae(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},a);return Rr()||(d.referrerPolicy="no-referrer"),Cn.fetch()(Mn(n,n.config.apiHost,t,l),d)})}async function Rn(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vi),e);try{const i=new qi(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw De(n,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const l=a.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw De(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw De(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw De(n,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw An(n,f,d);O(n,f)}}catch(i){if(i instanceof bt)throw i;O(n,"network-request-failed",{message:String(i)})}}async function Xe(n,e,t,r,i={}){const a=await J(n,e,t,r,i);return"mfaPendingCredential"in a&&O(n,"multi-factor-auth-required",{_serverResponse:a}),a}function Mn(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?yt(n.config,i):`${n.config.apiScheme}://${i}`}function $i(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qi{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(F(this.auth,"network-request-failed")),Bi.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function De(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=F(n,e,r);return i.customData._tokenResponse=t,i}function $t(n){return n!==void 0&&n.enterprise!==void 0}class Ki{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $i(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gi(n,e){return J(n,"GET","/v2/recaptchaConfig",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(n,e){return J(n,"POST","/v1/accounts:delete",e)}async function On(n,e){return J(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yi(n,e=!1){const t=D(n),r=await t.getIdToken(e),i=_t(r);x(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Te(at(i.auth_time)),issuedAtTime:Te(at(i.iat)),expirationTime:Te(at(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function at(n){return Number(n)*1e3}function _t(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ze("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nr(t);return i?JSON.parse(i):(ze("Failed to decode base64 JWT payload"),null)}catch(i){return ze("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qt(n){const e=_t(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bt&&Zi(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zi({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Te(this.lastLoginAt),this.creationTime=Te(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(n){var e;const t=n.auth,r=await n.getIdToken(),i=await be(n,On(t,{idToken:r}));x(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const o=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Dn(a.providerUserInfo):[],l=es(n.providerData,o),c=n.isAnonymous,d=!(n.email&&a.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new mt(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(n,h)}async function Qi(n){const e=D(n);await Ke(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function es(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dn(n){return n.map(e=>{var{providerId:t}=e,r=vt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n,e){const t=await Rn(n,{},async()=>{const r=Ae({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,o=Mn(n,i,"/v1/token",`key=${a}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cn.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ns(n,e){return J(n,"POST","/v2/accounts:revokeToken",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=qt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await ts(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,o=new pe;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),a&&(x(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return $("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class q{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=vt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new mt(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await be(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yi(this,e)}reload(){return Qi(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ke(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(B(this.auth.app))return Promise.reject(se(this.auth));const e=await this.getIdToken();return await be(this,Ji(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,o,l,c,d,f;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(i=t.email)!==null&&i!==void 0?i:void 0,v=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,y=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,u=(d=t.createdAt)!==null&&d!==void 0?d:void 0,E=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:m,providerData:g,stsTokenManager:p}=t;x(j&&p,e,"internal-error");const S=pe.fromJSON(this.name,p);x(typeof j=="string",e,"internal-error"),Z(h,e.name),Z(w,e.name),x(typeof z=="boolean",e,"internal-error"),x(typeof m=="boolean",e,"internal-error"),Z(v,e.name),Z(_,e.name),Z(k,e.name),Z(y,e.name),Z(u,e.name),Z(E,e.name);const I=new q({uid:j,auth:e,email:w,emailVerified:z,displayName:h,isAnonymous:m,photoURL:_,phoneNumber:v,tenantId:k,stsTokenManager:S,createdAt:u,lastLoginAt:E});return g&&Array.isArray(g)&&(I.providerData=g.map(N=>Object.assign({},N))),y&&(I._redirectEventId=y),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new pe;i.updateFromServerResponse(t);const a=new q({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ke(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];x(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Dn(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),l=new pe;l.updateFromIdToken(r);const c=new q({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Map;function K(n){G(n instanceof Function,"Expected a class definition");let e=Kt.get(n);return e?(G(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kt.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ln.type="NONE";const Gt=Ln;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e,t){return`firebase:${n}:${e}:${t}`}class ge{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=He(this.userKey,i.apiKey,a),this.fullPersistenceKey=He("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ge(K(Gt),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=i[0]||K(Gt);const o=He(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(o);if(f){const h=q._fromJSON(e,f);d!==a&&(l=h),a=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new ge(a,e,r):(a=c[0],l&&await a._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new ge(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Un(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vn(e))return"Blackberry";if(Bn(e))return"Webos";if(Fn(e))return"Safari";if((e.includes("chrome/")||Wn(e))&&!e.includes("edge/"))return"Chrome";if(Hn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Un(n=C()){return/firefox\//i.test(n)}function Fn(n=C()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wn(n=C()){return/crios\//i.test(n)}function zn(n=C()){return/iemobile/i.test(n)}function Hn(n=C()){return/android/i.test(n)}function Vn(n=C()){return/blackberry/i.test(n)}function Bn(n=C()){return/webos/i.test(n)}function kt(n=C()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rs(n=C()){var e;return kt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function is(){return Ar()&&document.documentMode===10}function $n(n=C()){return kt(n)||Hn(n)||Bn(n)||Vn(n)||/windows phone/i.test(n)||zn(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,e=[]){let t;switch(n){case"Browser":t=Jt(C());break;case"Worker":t=`${Jt(C())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pe}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((o,l)=>{try{const c=e(a);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n,e={}){return J(n,"GET","/v2/passwordPolicy",de(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=6;class cs{constructor(e){var t,r,i,a;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:os,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsUppercaseLetter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yt(this),this.idTokenSubscription=new Yt(this),this.beforeStateQueue=new ss(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=K(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await On(this,{idToken:e}),r=await q._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(B(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ke(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(B(this.app))return Promise.reject(se(this));const t=e?D(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return B(this.app)?Promise.reject(se(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return B(this.app)?Promise.reject(se(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(K(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await as(this),t=new cs(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ns(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&K(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[K(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(l,this,"internal-error"),l.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fi(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function we(n){return D(n)}class Yt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sr(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ds(n){Qe=n}function Kn(n){return Qe.loadJS(n)}function us(){return Qe.recaptchaEnterpriseScript}function hs(){return Qe.gapiScript}function ms(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fs="recaptcha-enterprise",ps="NO_RECAPTCHA";class gs{constructor(e){this.type=fs,this.auth=we(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,l)=>{Gi(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ki(c);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function i(a,o,l){const c=window.grecaptcha;$t(c)?c.enterprise.ready(()=>{c.enterprise.execute(a,{action:e}).then(d=>{o(d)}).catch(()=>{o(ps)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(l=>{if(!t&&$t(window.grecaptcha))i(l,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=us();c.length!==0&&(c+=l),Kn(c).then(()=>{i(l,a,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Zt(n,e,t,r=!1){const i=new gs(n);let a;try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Xt(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zt(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zt(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n,e){const t=pn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Pr(a,e??{}))return i;O(i,"already-initialized")}return t.initialize({options:e})}function bs(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(K);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vs(n,e,t){const r=we(n);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Gn(e),{host:o,port:l}=ws(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${a}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),ys()}function Gn(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ws(n){const e=Gn(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Qt(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:Qt(o)}}}function Qt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ys(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $("not implemented")}_getIdTokenResponse(e){return $("not implemented")}_linkToIdToken(e,t){return $("not implemented")}_getReauthenticationResolver(e){return $("not implemented")}}async function _s(n,e){return J(n,"POST","/v1/accounts:update",e)}async function ks(n,e){return J(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(n,e){return Xe(n,"POST","/v1/accounts:signInWithPassword",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n,e){return Xe(n,"POST","/v1/accounts:signInWithEmailLink",de(n,e))}async function Ss(n,e){return Xe(n,"POST","/v1/accounts:signInWithEmailLink",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends It{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new je(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new je(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xt(e,t,"signInWithPassword",Is);case"emailLink":return Es(e,{email:this._email,oobCode:this._password});default:O(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xt(e,r,"signUpPassword",ks);case"emailLink":return Ss(e,{idToken:t,email:this._email,oobCode:this._password});default:O(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(n,e){return Xe(n,"POST","/v1/accounts:signInWithIdp",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="http://localhost";class le extends It{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):O("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=vt(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new le(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return xe(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xe(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}buildRequest(){const e={requestUri:Ns,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ae(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function js(n){const e=Ee(Se(n)).link,t=e?Ee(Se(e)).deep_link_id:null,r=Ee(Se(n)).deep_link_id;return(r?Ee(Se(r)).link:null)||r||t||e||n}class Et{constructor(e){var t,r,i,a,o,l;const c=Ee(Se(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ts((i=c.mode)!==null&&i!==void 0?i:null);x(d&&f&&h,"argument-error"),this.apiKey=d,this.operation=h,this.code=f,this.continueUrl=(a=c.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=js(e);try{return new Et(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.providerId=ye.PROVIDER_ID}static credential(e,t){return je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Et.parseLink(t);return x(r,"argument-error"),je._fromEmailAndCode(e,r.code,r.tenantId)}}ye.PROVIDER_ID="password";ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Re{constructor(){super("facebook.com")}static credential(e){return le._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ee.credential(e.oauthAccessToken)}catch{return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";ee.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Re{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return le._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return te.credential(t,r)}catch{return null}}}te.GOOGLE_SIGN_IN_METHOD="google.com";te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Re{constructor(){super("github.com")}static credential(e){return le._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com";ne.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Re{constructor(){super("twitter.com")}static credential(e,t){return le._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return re.credential(t,r)}catch{return null}}}re.TWITTER_SIGN_IN_METHOD="twitter.com";re.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await q._fromIdTokenResponse(e,r,i),o=en(r);return new ve({user:a,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=en(r);return new ve({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function en(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends bt{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ge.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ge(e,t,r,i)}}function Yn(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ge._fromErrorAndOperation(n,a,e,r):a})}async function Ps(n,e,t=!1){const r=await be(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ve._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n,e,t=!1){const{auth:r}=n;if(B(r.app))return Promise.reject(se(r));const i="reauthenticate";try{const a=await be(n,Yn(r,i,e,n),t);x(a.idToken,r,"internal-error");const o=_t(a.idToken);x(o,r,"internal-error");const{sub:l}=o;return x(n.uid===l,r,"user-mismatch"),ve._forOperation(n,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&O(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e,t=!1){if(B(n.app))return Promise.reject(se(n));const r="signIn",i=await Yn(n,r,e),a=await ve._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function As(n,e){return Xn(we(n),e)}async function lo(n,e){return Zn(D(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(n){const e=we(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uo(n,e,t){return B(n.app)?Promise.reject(se(n)):As(D(n),ye.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cs(n),r})}function ho(n,e){return Rs(D(n),null,e)}async function Rs(n,e,t){const{auth:r}=n,a={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(a.password=t);const o=await be(n,_s(r,a));await n._updateTokensIfNecessary(o,!0)}function Ms(n,e,t,r){return D(n).onIdTokenChanged(e,t,r)}function Os(n,e,t){return D(n).beforeAuthStateChanged(e,t)}function mo(n,e,t,r){return D(n).onAuthStateChanged(e,t,r)}function fo(n){return D(n).signOut()}const Je="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Je,"1"),this.storage.removeItem(Je),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1e3,Ls=10;class er extends Qn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$n(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);is()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ls):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ds)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}er.type="LOCAL";const Us=er;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Qn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tr.type="SESSION";const nr=tr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new et(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(t.origin,a)),c=await Fs(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}et.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((l,c)=>{const d=St("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const w=h;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(w.data.response);break;default:clearTimeout(f),clearTimeout(a),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(){return window}function zs(n){W().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return typeof W().WorkerGlobalScope<"u"&&typeof W().importScripts=="function"}async function Hs(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vs(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Bs(){return rr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="firebaseLocalStorageDb",$s=1,Ye="firebaseLocalStorage",sr="fbase_key";class Me{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tt(n,e){return n.transaction([Ye],e?"readwrite":"readonly").objectStore(Ye)}function qs(){const n=indexedDB.deleteDatabase(ir);return new Me(n).toPromise()}function ft(){const n=indexedDB.open(ir,$s);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ye,{keyPath:sr})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ye)?e(r):(r.close(),await qs(),e(await ft()))})})}async function tn(n,e,t){const r=tt(n,!0).put({[sr]:e,value:t});return new Me(r).toPromise()}async function Ks(n,e){const t=tt(n,!1).get(e),r=await new Me(t).toPromise();return r===void 0?null:r.value}function nn(n,e){const t=tt(n,!0).delete(e);return new Me(t).toPromise()}const Gs=800,Js=3;class ar{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ft(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Js)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=et._getInstance(Bs()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hs(),!this.activeServiceWorker)return;this.sender=new Ws(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vs()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ft();return await tn(e,Je,"1"),await nn(e,Je),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ks(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=tt(i,!1).getAll();return new Me(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ar.type="LOCAL";const Ys=ar;new Ce(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n,e){return e?K(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends It{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xs(n){return Xn(n.auth,new Nt(n),n.bypassAuthState)}function Qs(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),Zn(t,new Nt(n),n.bypassAuthState)}async function ea(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),Ps(t,new Nt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xs;case"linkViaPopup":case"linkViaRedirect":return ea;case"reauthViaPopup":case"reauthViaRedirect":return Qs;default:O(this.auth,"internal-error")}}resolve(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Ce(2e3,1e4);class me extends or{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,me.currentPopupAction&&me.currentPopupAction.cancel(),me.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){G(this.filter.length===1,"Popup operations only handle one event");const e=St();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(F(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(F(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,me.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(F(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ta.get())};e()}}me.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="pendingRedirect",Ve=new Map;class ra extends or{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ve.get(this.auth._key());if(!e){try{const r=await ia(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ve.set(this.auth._key(),e)}return this.bypassAuthState||Ve.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ia(n,e){const t=oa(e),r=aa(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function sa(n,e){Ve.set(n._key(),e)}function aa(n){return K(n._redirectPersistence)}function oa(n){return He(na,n.config.apiKey,n.name)}async function ca(n,e,t=!1){if(B(n.app))return Promise.reject(se(n));const r=we(n),i=Zs(r,e),o=await new ra(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=10*60*1e3;class da{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ua(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!cr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(F(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=la&&this.cachedEventUids.clear(),this.cachedEventUids.has(rn(e))}saveEventToCache(e){this.cachedEventUids.add(rn(e)),this.lastProcessedEventTime=Date.now()}}function rn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ua(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(n,e={}){return J(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fa=/^https?/;async function pa(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ha(n);for(const t of e)try{if(ga(t))return}catch{}O(n,"unauthorized-domain")}function ga(n){const e=ht(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fa.test(t))return!1;if(ma.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Ce(3e4,6e4);function sn(){const n=W().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ba(n){return new Promise((e,t)=>{var r,i,a;function o(){sn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sn(),t(F(n,"network-request-failed"))},timeout:xa.get()})}if(!((i=(r=W().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=W().gapi)===null||a===void 0)&&a.load)o();else{const l=ms("iframefcb");return W()[l]=()=>{gapi.load?o():t(F(n,"network-request-failed"))},Kn(`${hs()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Be=null,e})}let Be=null;function va(n){return Be=Be||ba(n),Be}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Ce(5e3,15e3),ya="__/auth/iframe",_a="emulator/auth/iframe",ka={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ia=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ea(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yt(e,_a):`https://${n.config.authDomain}/${ya}`,r={apiKey:e.apiKey,appName:n.name,v:Pe},i=Ia.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ae(r).slice(1)}`}async function Sa(n){const e=await va(n),t=W().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:Ea(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ka,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=F(n,"network-request-failed"),l=W().setTimeout(()=>{a(o)},wa.get());function c(){W().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ta=500,ja=600,Pa="_blank",Aa="http://localhost";class an{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ca(n,e,t,r=Ta,i=ja){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Na),{width:r.toString(),height:i.toString(),top:a,left:o}),d=C().toLowerCase();t&&(l=Wn(d)?Pa:t),Un(d)&&(e=e||Aa,c.scrollbars="yes");const f=Object.entries(c).reduce((w,[v,_])=>`${w}${v}=${_},`,"");if(rs(d)&&l!=="_self")return Ra(e||"",l),new an(null);const h=window.open(e||"",l,f);x(h,n,"popup-blocked");try{h.focus()}catch{}return new an(h)}function Ra(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="__/auth/handler",Oa="emulator/auth/handler",Da=encodeURIComponent("fac");async function on(n,e,t,r,i,a){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pe,eventId:i};if(e instanceof Jn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Cr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Re){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),d=c?`#${Da}=${encodeURIComponent(c)}`:"";return`${La(n)}?${Ae(l).slice(1)}${d}`}function La({config:n}){return n.emulator?yt(n,Oa):`https://${n.authDomain}/${Ma}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="webStorageSupport";class Ua{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nr,this._completeRedirectFn=ca,this._overrideRedirectResult=sa}async _openPopup(e,t,r,i){var a;G((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await on(e,t,r,ht(),i);return Ca(e,o,St())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await on(e,t,r,ht(),i);return zs(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(G(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Sa(e),r=new da(e);return t.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ot,{type:ot},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[ot];o!==void 0&&t(!!o),O(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $n()||Fn()||kt()}}const Fa=Ua;var cn="@firebase/auth",ln="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ha(n){Pt(new At("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qn(n)},d=new ls(r,i,a,c);return bs(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pt(new At("auth-internal",e=>{const t=we(e.getProvider("auth").getImmediate());return(r=>new Wa(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(cn,ln,za(n)),Ct(cn,ln,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=5*60,Ba=mn("authIdTokenMaxAge")||Va;let dn=null;const $a=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ba)return;const i=t==null?void 0:t.token;dn!==i&&(dn=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qa(n=jr()){const e=pn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xs(n,{popupRedirectResolver:Fa,persistence:[Ys,Us,nr]}),r=mn("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const o=$a(a.toString());Os(t,o,()=>o(t.currentUser)),Ms(t,l=>o(l))}}const i=Tr("auth");return i&&vs(t,`http://${i}`),t}function Ka(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ds({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=F("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Ka().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ha("Browser");const Ga={apiKey:"AIzaSyCVuLt773djuu5QVt4epbzUFN57Bo8M9Fg",authDomain:"egmondbelegung.firebaseapp.com",projectId:"egmondbelegung",storageBucket:"egmondbelegung.firebasestorage.app",messagingSenderId:"874294620175",appId:"1:874294620175:web:443b7d6d6db0313eed337a"},lr=Mr(Ga),M=Or(lr),po=qa(lr),Le="occupancy",Ue="bookingDetails",Ja=["note","email","phone","message"];function Ya(n,e){const[t,r,i]=n.startDate.split(".").map(Number),[a,o,l]=e.startDate.split(".").map(Number);return new Date(i,r-1,t)-new Date(l,o-1,a)}function Za(n=!1){const[e,t]=b.useState([]),[r,i]=b.useState(null),[a,o]=b.useState(!0),[l,c]=b.useState(null);b.useEffect(()=>ct(Ne(M,Le),_=>{const k=_.docs.map(y=>({id:y.id,...y.data()}));k.sort(Ya),t(k),o(!1),c(null)},_=>{console.error("useOccupancy:",_.message),o(!1),c("Belegungsdaten konnten nicht geladen werden.")}),[]),b.useEffect(()=>n?ct(Ne(M,Ue),_=>{const k={};_.docs.forEach(y=>{k[y.id]=y.data()}),i(k)},_=>{console.error("useOccupancy details:",_.message),i({})}):void 0,[n]);const d=b.useMemo(()=>r?e.map(v=>r[v.id]?{...v,...r[v.id]}:v):e,[e,r]);async function f(v,_,k="",y="",u="",E=""){const j=await xn(Ne(M,Le),{startDate:v,endDate:_,createdAt:bn()});(k||y||u||E)&&await Rt(oe(M,Ue,j.id),{note:k,email:y,phone:u,message:E})}async function h(v){await lt(oe(M,Le,v)),await lt(oe(M,Ue,v))}async function w(v,_){const k={},y={};for(const[u,E]of Object.entries(_))(Ja.includes(u)?y:k)[u]=E;Object.keys(k).length&&await gn(oe(M,Le,v),k),Object.keys(y).length&&await Rt(oe(M,Ue,v),y,{merge:!0})}return{occupancy:d,loading:a,error:l,addOccupancy:f,removeOccupancy:h,updateOccupancyEntry:w}}const Fe="inquiries";function Xa(n=!1){const[e,t]=b.useState([]),[r,i]=b.useState(n),[a,o]=b.useState(null);b.useEffect(()=>n?ct(Ne(M,Fe),h=>{const w=h.docs.map(v=>({id:v.id,...v.data()}));w.sort((v,_)=>{var u,E;const k=((u=v.createdAt)==null?void 0:u.seconds)||0;return(((E=_.createdAt)==null?void 0:E.seconds)||0)-k}),t(w),i(!1),o(null)},h=>{console.error("useInquiries:",h.message),i(!1),o("Anfragen konnten nicht geladen werden.")}):void 0,[n]);async function l(f){await xn(Ne(M,Fe),{...f,status:"neu",createdAt:bn()})}async function c(f,h){await gn(oe(M,Fe,f),{status:h})}async function d(f){await lt(oe(M,Fe,f))}return{inquiries:e,loading:r,error:a,addInquiry:l,updateInquiryStatus:c,deleteInquiry:d}}function Qa(){const{occupancy:n,error:e}=Za(),{addInquiry:t}=Xa(),[r,i]=b.useState(!1),[a,o]=b.useState(!1),[l,c]=b.useState(!1),[d,f]=b.useState(null),[h,w]=b.useState(null),[v,_]=b.useState(null);function k(){f(h||new Date),i(!0)}function y({arrival:u,departure:E}){w(u),_(E)}return s.jsxs("div",{className:"min-h-screen bg-warm",children:[s.jsx($r,{onInfoClick:()=>c(!0)}),e&&s.jsx("div",{className:"px-6 py-2 bg-primary/10 border-b border-primary/20 text-center text-sm text-primary",children:"Belegungsdaten konnten nicht geladen werden. Bitte Seite neu laden."}),s.jsx(Ii,{arrival:h,departure:v,onOpenDatePicker:k,onOpenCalendar:()=>o(!0)}),s.jsx(Pi,{occupancy:n,isOpen:a,onClose:()=>o(!1),onSelect:y}),s.jsxs("section",{className:"px-6 pt-4 pb-3 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border mt-1",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:[{icon:"🛏️",label:"4 Betten"},{icon:"🚪",label:"1 Schlafzimmer"},{icon:"☀️",label:"Südbalkon · Dünenblick"},{icon:"🌊",label:"Westbalkon · Meerblick"}].map(({icon:u,label:E})=>s.jsxs("span",{className:"flex items-center gap-1.5 px-2.5 py-1 bg-offwhite border border-border rounded-full text-xs text-anthracite/60 whitespace-nowrap",children:[s.jsx("span",{children:u}),E]},E))}),s.jsx("p",{className:"text-anthracite/70 text-sm md:text-base leading-relaxed max-w-3xl",children:"Zwei Balkone, zwei Aussichten: nach Süden der unverbaute Blick in die Dünen, nach Westen das offene Meer. Die Wohnung in der zweiten Etage bietet Platz für bis zu vier Personen — mit einem eigenen Schlafzimmer und zwei komfortablen Ausziehbetten im Wohnzimmer."})]}),s.jsx(Ri,{}),s.jsx("div",{className:"px-6 pt-2 pb-2 md:px-12 lg:px-20 max-w-7xl mx-auto",children:s.jsxs("button",{onClick:()=>c(!0),className:"group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-gold/30 bg-offwhite hover:border-gold/50 hover:shadow-sm transition-all text-anthracite/50 hover:text-anthracite/70 text-sm font-medium",children:[s.jsx(yn,{className:"w-5 h-5 text-gold group-hover:scale-110 transition-transform"}),"Informationen zur Wohnung und Anreise"]})}),s.jsx(Di,{arrival:h,departure:v,onOpenDatePicker:k,onSubmit:t}),s.jsx(Li,{}),s.jsx(Ai,{isOpen:l,onClose:()=>c(!1)}),s.jsx(Oi,{isOpen:r,onClose:()=>i(!1),occupancy:n,initialDate:d,onSelect:y})]})}function eo(){return s.jsxs("div",{className:"min-h-screen bg-warm print:bg-white",children:[s.jsx("div",{className:"bg-anthracite text-white px-6 py-5 no-print",children:s.jsxs("div",{className:"max-w-2xl mx-auto flex items-center justify-between",children:[s.jsx("span",{className:"font-serif text-lg",children:"Egmond aan Zee — Informationen"}),s.jsxs("div",{className:"flex gap-4 text-sm text-white/60",children:[s.jsx("button",{onClick:()=>window.print(),className:"hover:text-white transition-colors",children:"Drucken"}),s.jsx("a",{href:"#/",className:"hover:text-white transition-colors",children:"← Zur Startseite"})]})]})}),s.jsxs("div",{className:"max-w-2xl mx-auto px-6 py-10 space-y-6 print:py-4 print:space-y-4",children:[s.jsxs("div",{className:"print:mb-6",children:[s.jsx("h1",{className:"font-serif text-3xl text-anthracite",children:"Zu Wohnung und Anreise"}),s.jsx("p",{className:"text-anthracite/60 mt-2 text-sm leading-relaxed",children:"Alle Infos für Euren Aufenthalt auf einen Blick."})]}),s.jsxs(he,{icon:"🏡",title:"Die Wohnung",children:[s.jsxs("p",{children:["Die Ferienwohnung liegt in der ",s.jsx("strong",{children:"2. Etage"})," des Hauses am Kennedyboulevard und bietet Platz für bis zu ",s.jsx("strong",{children:"4 Personen"}),"."]}),s.jsxs(U,{icon:"🛏️",label:"Schlafzimmer",children:["1 Schlafzimmer mit 2 Einzelbetten. Im großen Wohnzimmer befinden sich zwei weitere ",s.jsx("strong",{children:"Ausziehbetten"})," unter der Sitzlandschaft — Decken & Kissen in den Bettkästen."]}),s.jsxs(U,{icon:"☀️",label:"Balkon",children:["Der ",s.jsx("strong",{children:"Südbalkon"})," bietet einen unverbauten Blick in die Dünen. Nach Westen geht der Blick direkt aufs Meer. Die elektrische Markise lässt sich mit der Fernbedienung (Regal links) ausfahren — Stecker an der Balkontür anschalten."]}),s.jsx(U,{icon:"📐",label:"Lage",children:'2. Etage, Eingang links nahe der Garage — Türschild „Kimmeskamp".'})]}),s.jsxs(he,{icon:"📍",title:"Adresse",children:[s.jsx("p",{className:"font-medium",children:"Kennedyboulevard 604"}),s.jsx("p",{children:"1931 XM Egmond aan Zee"}),s.jsx("a",{href:"https://maps.google.com/?q=Kennedyboulevard+604,+1931+XM+Egmond+aan+Zee",target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-2 text-sm text-primary hover:underline no-print",children:"🗺️ In Google Maps öffnen"}),s.jsx("p",{className:"print-only hidden text-xs mt-1 text-anthracite/60",children:"maps.google.com → Kennedyboulevard 604, Egmond aan Zee"})]}),s.jsxs(he,{icon:"🚗",title:"Anreise & Eingang",children:[s.jsx(U,{icon:"🅿️",label:"Parken",children:"Am Südende des Innenhofs. Vorletzte Garage rechts – Nummer 21."}),s.jsx(U,{icon:"🚪",label:"Eingang",children:'Eingangstür links nahe der Garage. Dann 2. Etage links – Türschild „Kimmeskamp".'})]}),s.jsxs(he,{icon:"🏠",title:"Zur Wohnung",children:[s.jsx(U,{icon:"🔄",label:"Check-in / Check-out",children:"Wechsel ab 12 Uhr (oder nach Absprache). Abreise bis 12 Uhr, Anreise ab 12 Uhr – so ist ein Mieterwechsel am selben Tag möglich."}),s.jsx(U,{icon:"🧺",label:"Bettzeug",children:"Bettzeug und Handtücher nicht vergessen."}),s.jsx(U,{icon:"☀️",label:"Markise",children:"Elektrisch – Stecker an der Balkontür anschalten. Fernbedienung im Regal der Sitzlandschaft ganz links. Bei Windgefahr unbedingt einfahren!"}),s.jsx(U,{icon:"🗑️",label:"Müll",children:"Für den Restmüll den Abfallpass im Flurregal nutzen. Die Gebühren übernehmen wir – achtet bitte dennoch auf die Kosten pro Einwurf: 30L-Sack ca. 0,55 € · 60L-Sack ca. 1,10 €. Papier, Glas und Plastik (PMD) an den Sammelstellen kostenfrei."}),s.jsx(U,{icon:"🧹",label:"Endreinigung",children:"Bitte die Wohnung gereinigt übergeben – so wie Ihr sie gerne vorfinden würdet. Eine Endreinigung kann für ca. 70 € (Stand 2025) über die Hausmeister dazu gebucht werden."})]}),s.jsx(he,{icon:"✅",title:"Bei Ankunft",children:s.jsx(un,{items:[{icon:"🔌",text:"Kühlschränke einstecken"},{icon:"🔥",text:"Gas aufdrehen – rechts neben dem Herd"},{icon:"🌡️",text:"Heizung auf Temperatur"},{icon:"💧",text:"Wasserhahn für Spülmaschine aufdrehen – hinter dem Kühlschrank"}]})}),s.jsx(he,{icon:"🚪",title:"Bei Abfahrt",children:s.jsx(un,{items:[{icon:"🔌",text:"Kühlschränke ausstecken & öffnen"},{icon:"💧",text:"Wasserhahn für Spülmaschine zudrehen"},{icon:"❄️",text:"Heizung auf Schneeflocke"},{icon:"🔥",text:"Gas ausschalten"},{icon:"🚪",text:"Zwischentür zuziehen"},{icon:"🚿",text:"Bad & WC offen lassen"}]})}),s.jsx("p",{className:"text-center text-xs text-anthracite/40 pt-4 no-print",children:"Fragen? Einfach melden — wir helfen gerne."})]})]})}function he({icon:n,title:e,children:t}){return s.jsxs("div",{className:"bg-offwhite border border-border rounded-xl p-5 print:border-anthracite/20 print:rounded-none print:border print:p-3",children:[s.jsxs("h2",{className:"font-serif text-lg text-anthracite mb-3 flex items-center gap-2",children:[s.jsx("span",{children:n})," ",e]}),s.jsx("div",{className:"space-y-3 text-sm text-anthracite/80 leading-relaxed",children:t})]})}function U({icon:n,label:e,children:t}){return s.jsxs("div",{className:"flex gap-3",children:[s.jsx("span",{className:"text-base shrink-0 mt-0.5",children:n}),s.jsxs("div",{children:[s.jsxs("span",{className:"font-medium text-anthracite",children:[e,": "]}),t]})]})}function un({items:n}){return s.jsx("ul",{className:"space-y-2",children:n.map((e,t)=>s.jsxs("li",{className:"flex items-start gap-3",children:[s.jsx("span",{className:"text-base shrink-0",children:e.icon}),s.jsx("span",{children:e.text})]},t))})}class to extends b.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught:",e,t.componentStack)}render(){return this.state.hasError?s.jsx("div",{className:"min-h-screen bg-warm flex items-center justify-center p-6",children:s.jsxs("div",{className:"bg-white rounded-xl border border-border p-8 max-w-md text-center",children:[s.jsx("p",{className:"font-serif text-lg text-anthracite mb-2",children:"Etwas ist schiefgelaufen"}),s.jsx("p",{className:"text-sm text-anthracite/60 mb-5",children:"Bitte laden Sie die Seite neu."}),s.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors",children:"Seite neu laden"})]})}):this.props.children}}const no=b.lazy(()=>Br(()=>import("./AdminPage-CITAdk-i.js"),__vite__mapDeps([0,1,2,3])));function ro(){return s.jsx(to,{children:s.jsx(ur,{children:s.jsxs(hr,{children:[s.jsx(rt,{path:"/",element:s.jsx(Qa,{})}),s.jsx(rt,{path:"/info",element:s.jsx(eo,{})}),s.jsx(rt,{path:"/admin/*",element:s.jsx(b.Suspense,{fallback:s.jsx("div",{className:"min-h-screen bg-warm flex items-center justify-center text-anthracite/50 text-sm",children:"Laden..."}),children:s.jsx(no,{})})})]})})})}dt.createRoot(document.getElementById("root")).render(s.jsx(mr.StrictMode,{children:s.jsx(ro,{})}));export{Tn as C,ye as E,ce as M,po as a,fo as b,co as c,Lt as d,yi as e,ae as f,We as g,Nn as h,Ht as i,s as j,Za as k,Xa as l,mo as o,ie as p,lo as r,uo as s,ho as u};
