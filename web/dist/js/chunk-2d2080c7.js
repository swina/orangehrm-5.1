(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2080c7"],{a2aa:function(e,t,s){"use strict";s.r(t),s.d(t,"scopeCss",(function(){return P}));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const r=e=>{const t=[];let s=0;e=e.replace(/(\[[^\]]*\])/g,(e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c});const r=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,r,c)=>{const n=`__ph-${s}__`;return t.push(c),s++,r+n}),c={content:r,placeholders:t};return c},c=(e,t)=>t.replace(/__ph-(\d+)__/g,(t,s)=>e[+s]),n="-shadowcsshost",o="-shadowcssslotted",l="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+n+i,"gim"),p=new RegExp("("+l+i,"gim"),h=new RegExp("("+o+i,"gim"),u=n+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,d=[/::shadow/g,/::content/g],m="([>\\s~+[.,{:][\\s\\S]*)?$",f=/-shadowcsshost/gim,x=/:host/gim,w=/::slotted/gim,$=/:host-context/gim,_=/\/\*\s*[\s\S]*?\*\//g,b=e=>e.replace(_,""),S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,W=e=>e.match(S)||[],O=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,k=/([{}])/g,j=/(^.*?[^\\])??((:+)(.*)|$)/,E="{",R="}",T="%BLOCK%",C=(e,t)=>{const s=L(e);let r=0;return s.escapedString.replace(O,(...e)=>{const c=e[2];let n="",o=e[4],l="";o&&o.startsWith("{"+T)&&(n=s.blocks[r++],o=o.substring(T.length+1),l="{");const i={selector:c,content:n},a=t(i);return`${e[1]}${a.selector}${e[3]}${l}${a.content}${o}`})},L=e=>{const t=e.split(k),s=[],r=[];let c=0,n=[];for(let l=0;l<t.length;l++){const e=t[l];e===R&&c--,c>0?n.push(e):(n.length>0&&(r.push(n.join("")),s.push(T),n=[]),s.push(e)),e===E&&c++}n.length>0&&(r.push(n.join("")),s.push(T));const o={escapedString:s.join(""),blocks:r};return o},B=e=>(e=e.replace($,l).replace(x,n).replace(w,o),e),I=(e,t,s)=>e.replace(t,(...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const n=t[c].trim();if(!n)break;r.push(s(u,n,e[3]))}return r.join(",")}return u+e[3]}),J=(e,t,s)=>e+t.replace(n,"")+s,K=e=>I(e,a,J),M=(e,t,s)=>t.indexOf(n)>-1?J(e,t,s):e+t+s+", "+t+" "+e+s,U=(e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(h,(...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],n=s+t+c;let o="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;o=t+o}const l=o+n,i=`${o.trimRight()}${n.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return n}return u+e[3]}),{selectors:r,cssText:e}},q=e=>I(e,p,M),v=e=>d.reduce((e,t)=>e.replace(t," "),e),y=e=>{const t=/\[/g,s=/\]/g;return e=e.replace(t,"\\[").replace(s,"\\]"),new RegExp("^("+e+")"+m,"m")},z=(e,t)=>{const s=y(t);return!s.test(e)},A=(e,t)=>e.replace(j,(e,s="",r,c="",n="")=>s+t+c+n),D=(e,t,s)=>{if(f.lastIndex=0,f.test(e)){const t="."+s;return e.replace(g,(e,s)=>A(s,t)).replace(f,t+" ")}return t+" "+e},F=(e,t,s)=>{const n=/\[is=([^\]]*)\]/g;t=t.replace(n,(e,...t)=>t[0]);const o="."+t,l=e=>{let r=e.trim();if(!r)return"";if(e.indexOf(u)>-1)r=D(e,t,s);else{const t=e.replace(f,"");t.length>0&&(r=A(t,o))}return r},i=r(e);e=i.content;let a,p="",h=0;const g=/( |>|\+|~(?!=))\s*/g,d=e.indexOf(u)>-1;let m=!d;while(null!==(a=g.exec(e))){const t=a[1],s=e.slice(h,a.index).trim();m=m||s.indexOf(u)>-1;const r=m?l(s):s;p+=`${r} ${t} `,h=g.lastIndex}const x=e.substring(h);return m=m||x.indexOf(u)>-1,p+=m?l(x):x,c(i.placeholders,p)},G=(e,t,s,r)=>e.split(",").map(e=>r&&e.indexOf("."+r)>-1?e.trim():z(e,t)?F(e,t,s).trim():e.trim()).join(", "),H=(e,t,s,r,c)=>C(e,e=>{let c=e.selector,n=e.content;"@"!==e.selector[0]?c=G(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(n=H(e.content,t,s,r));const o={selector:c.replace(/\s{2,}/g," ").trim(),content:n};return o}),N=(e,t,s,r,c)=>{e=B(e),e=K(e),e=q(e);const n=U(e,r);return e=n.cssText,e=v(e),t&&(e=H(e,t,s,r)),e=e.replace(/-shadowcsshost-no-combinator/g,"."+s),e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:e.trim(),slottedSelectors:n.selectors}},P=(e,t,s)=>{const r=t+"-h",c=t+"-s",n=W(e);e=b(e);const o=[];if(s){const t=e=>{const t=`/*!@___${o.length}___*/`,s=`/*!@${e.selector}*/`;return o.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=C(e,e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=C(e.content,t),e):e)}const l=N(e,t,r,c);return e=[l.cssText,...n].join("\n"),s&&o.forEach(({placeholder:t,comment:s})=>{e=e.replace(t,s)}),l.slottedSelectors.forEach(t=>{e=e.replace(t.orgSelector,t.updatedSelector)}),e}}}]);
//# sourceMappingURL=chunk-2d2080c7.js.map