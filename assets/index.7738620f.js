import{r as s,l as e,o as l,a4 as d,s as c,a5 as u,R as a,a6 as h,a7 as m,n,a8 as o,Z as g,P as p,a9 as x,aa as b,ab as f,ac as _,ad as y,ae as v,af as B,ag as L,ah as w,ai as I,aj as R,ak as S,al as k,am as z,an as E}from"./vendor.1fca9934.js";import{T as j}from"./common.ce2150cc.js";function J(){import("data:text/javascript,")}function A(t){const i=s.exports.lazy(t);return e(s.exports.Suspense,{fallback:e(l,{sx:{color:"#fff",zIndex:r=>r.zIndex.drawer+1},open:!0,invisible:!0,children:e(d,{color:"inherit"})}),children:e(i,{})})}const T="/still_label_editor/assets/logo.17a34286.png",C=c(u)(({theme:t})=>({display:"inline-block",flex:"none",height:"100%",padding:"0 16px",img:{height:"100%"}})),P=a.memo(()=>e(C,{to:"/dashboard",children:e("img",{src:T,alt:"Still"})})),O=a.memo(()=>e(m,{sx:{bgcolor:"primary.dark",width:30,height:30,cursor:"pointer"},children:e(h,{sx:{fontSize:22,color:"common.white"}})})),M=a.memo(()=>n(o,{sx:{width:1,height:"50px",bgcolor:"grey.900",color:"common.white",flex:"none",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e(P,{}),e("div",{style:{display:"flex",alignItems:"center",paddingRight:16},children:e(O,{})})]})),N=a.memo(()=>{const{t}=g();return e(o,{sx:{width:280,height:1,flex:"none",padding:2,boxSizing:"border-box",borderRight:"1px solid",borderColor:"divider"},children:e(p,{sx:{width:1},children:e(x,{component:"nav","aria-label":"main mailbox folders",sx:{paddingTop:"1px",paddingBottom:"1px"},children:n(y,{selected:!0,sx:{margin:2,borderRadius:1,"&.Mui-selected":{".MuiListItemIcon-root,.MuiTypography-root":{color:"primary.main",fontWeight:"bold"}}},children:[e(b,{sx:{minWidth:30},children:e(f,{})}),e(_,{primary:t("BasicSider.AllLabel")})]})})})})}),W=a.memo(()=>n(o,{sx:{width:1,height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[e(M,{}),n(o,{sx:{flex:1,minHeight:"1px",minWidth:"1px",width:1,display:"flex",justifyContent:"center"},children:[e(N,{}),e(o,{sx:{flex:1,minHeight:"1px",minWidth:"1px",width:1,height:1,padding:2},children:e(v,{})})]})]})),D=a.memo(t=>e(B,{...t,replace:!0})),H=[{path:"/",element:e(W,{}),children:[{index:!0,element:e(D,{to:"/dashboard"})},{path:"/dashboard",element:A(()=>L(()=>import("./Dashboard.11ce57fa.js"),["assets/Dashboard.11ce57fa.js","assets/vendor.1fca9934.js","assets/common.ce2150cc.js"]))}]}],U=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),V=a.memo(()=>{const t=Object.assign({"./libs/dashboard.tsx":U}),i=[];for(const r in t)i.push(...t[r].default);return w(i)}),F=()=>e(j,{children:e(V,{})}),Z={"BasicSider.AllLabel":"\u5168\u90E8\u6807\u7B7E"},$={"BasicSider.AllLabel":"\u6240\u6709\u6807\u7B7E","Dashboard.CreateLabel":"\u521B\u5EFA\u6807\u7B7E"};function q(){I.use(R).use(S).use(k).init({resources:{en:{translation:Z},zh:{translation:$}},lng:navigator.language,preload:navigator.languages,fallbackLng:"en_US",debug:!1,interpolation:{escapeValue:!1}})}const G=z.createRoot(document.getElementById("root"));q();G.render(e(E,{basename:"/still_label_editor",children:e(F,{})}));export{J as __vite_legacy_guard};