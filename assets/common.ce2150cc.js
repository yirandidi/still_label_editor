import{R as a,a0 as n,a1 as p,n as t,l as s,a2 as l,a3 as c,a4 as i,o as m,$ as d}from"./vendor.1fca9934.js";function x(){const r=new Array(25).fill("none"),o="rgb(101 119 134/20%) 0px 0px {px1}px,rgb(101 119 134/15%) 0px 0px {px2}px {px3}px";for(let e=1;e<25;e++)r[e]=o.replace("{px1}",`${5+e}`).replace("{px2}",`${3+e}`).replace("{px3}",`${1+e}`);return r}const h='-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',u=a.memo(({children:r})=>{const o=n("(prefers-color-scheme: dark)"),e=a.useMemo(()=>p({palette:{background:{default:o?"#121212":"#eeeef1"},mode:o?"dark":"light"},shadows:x(),typography:{fontFamily:h}}),[o]);return t(c,{theme:e,children:[s(l,{enableColorScheme:!0}),r]})}),g=a.memo(({children:r,spinning:o})=>t(d,{children:[s(m,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1,position:"absolute"},open:o,children:s(i,{color:"inherit"})}),r]}));export{g as S,u as T};