import{aM as o}from"./vendor.1e34d539.js";var g=typeof o=="object"&&o&&o.Object===Object&&o,d=g,T=d,S=typeof self=="object"&&self&&self.Object===Object&&self,O=T||S||Function("return this")(),l=O,p=/\s/;function v(r){for(var t=r.length;t--&&p.test(r.charAt(t)););return t}var $=v,_=$,u=/^\s+/;function I(r){return r&&r.slice(0,_(r)+1).replace(u,"")}var w=I;function x(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var G=x,h=l,N=h.Symbol,f=N,a=f,m=Object.prototype,P=m.hasOwnProperty,k=m.toString,e=a?a.toStringTag:void 0;function B(r){var t=P.call(r,e),n=r[e];try{r[e]=void 0;var y=!0}catch{}var j=k.call(r);return y&&(t?r[e]=n:delete r[e]),j}var E=B,L=Object.prototype,R=L.toString;function A(r){return R.call(r)}var F=A,i=f,H=E,M=F,U="[object Null]",W="[object Undefined]",b=i?i.toStringTag:void 0;function q(r){return r==null?r===void 0?W:U:b&&b in Object(r)?H(r):M(r)}var z=q;function C(r){return r!=null&&typeof r=="object"}var D=C,J=z,K=D,Q="[object Symbol]";function V(r){return typeof r=="symbol"||K(r)&&J(r)==Q}var X=V,Y=w,c=G,Z=X,s=0/0,rr=/^[-+]0x[0-9a-f]+$/i,tr=/^0b[01]+$/i,er=/^0o[0-7]+$/i,nr=parseInt;function or(r){if(typeof r=="number")return r;if(Z(r))return s;if(c(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=c(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Y(r);var n=tr.test(r);return n||er.test(r)?nr(r.slice(2),n?2:8):rr.test(r)?s:+r}var br=or;export{f as _,l as a,X as i,br as t};