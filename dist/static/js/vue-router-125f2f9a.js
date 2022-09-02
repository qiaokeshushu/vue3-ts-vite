import{Q as tt,u as F,k as N,I as je,n as nt,m as qe,l as j,R as ze,p as ae,r as rt,w as st}from"./@vue-31ce2c27.js";/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const z=typeof window<"u";function ot(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const s=t[r];n[r]=I(s)?s.map(e):e(s)}return n}const W=()=>{},I=Array.isArray,it=/\/$/,ct=e=>e.replace(it,"");function ue(e,t,n="/"){let r,s={},l="",d="";const g=t.indexOf("#");let c=t.indexOf("?");return g<c&&g>=0&&(c=-1),c>-1&&(r=t.slice(0,c),l=t.slice(c+1,g>-1?g:t.length),s=e(l)),g>-1&&(r=r||t.slice(0,g),d=t.slice(g,t.length)),r=ft(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function at(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&G(t.matched[r],n.matched[s])&&Ge(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ge(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ut(e[n],t[n]))return!1;return!0}function ut(e,t){return I(e)?ke(e,t):I(t)?ke(t,e):e===t}function ke(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],d!==".")if(d==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Y;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Y||(Y={}));function ht(e){if(!e)if(z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ct(e)}const dt=/^[^#]+#/;function pt(e,t){return e.replace(dt,"#")+t}function mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function gt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function vt(e,t){he.set(e,t)}function yt(e){const t=he.get(e);return he.delete(e),t}let Rt=()=>location.protocol+"//"+location.host;function Ke(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let g=s.includes(e.slice(l))?e.slice(l).length:1,c=s.slice(g);return c[0]!=="/"&&(c="/"+c),Se(c,"")}return Se(n,e)+r+s}function Et(e,t,n,r){let s=[],l=[],d=null;const g=({state:u})=>{const m=Ke(e,location),R=n.value,b=t.value;let C=0;if(u){if(n.value=m,t.value=u,d&&d===R){d=null;return}C=b?u.position-b.position:0}else r(m);s.forEach(w=>{w(n.value,R,{delta:C,type:X.pop,direction:C?C>0?Y.forward:Y.back:Y.unknown})})};function c(){d=n.value}function f(u){s.push(u);const m=()=>{const R=s.indexOf(u);R>-1&&s.splice(R,1)};return l.push(m),m}function o(){const{history:u}=window;!u.state||u.replaceState(S({},u.state,{scroll:ee()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",o),{pauseListeners:c,listen:f,destroy:a}}function be(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Pt(e){const{history:t,location:n}=window,r={value:Ke(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,f,o){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+c:Rt()+e+c;try{t[o?"replaceState":"pushState"](f,"",u),s.value=f}catch(m){console.error(m),n[o?"replace":"assign"](u)}}function d(c,f){const o=S({},t.state,be(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});l(c,o,!0),r.value=c}function g(c,f){const o=S({},s.value,t.state,{forward:c,scroll:ee()});l(o.current,o,!0);const a=S({},be(r.value,c,null),{position:o.position+1},f);l(c,a,!1),r.value=c}return{location:r,state:s,push:g,replace:d}}function wt(e){e=ht(e);const t=Pt(e),n=Et(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=S({location:"",base:e,go:r,createHref:pt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ln(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wt(e)}function St(e){return typeof e=="string"||e&&typeof e=="object"}function Ve(e){return typeof e=="string"||typeof e=="symbol"}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ue=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function K(e,t){return S(new Error,{type:e,[Ue]:!0},t)}function $(e,t){return e instanceof Error&&Ue in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",kt={sensitive:!1,strict:!1,start:!0,end:!0},Ct=/[.+*?^${}()[\]/\\]/g;function bt(e,t){const n=S({},kt,t),r=[];let s=n.start?"^":"";const l=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let a=0;a<f.length;a++){const u=f[a];let m=40+(n.sensitive?.25:0);if(u.type===0)a||(s+="/"),s+=u.value.replace(Ct,"\\$&"),m+=40;else if(u.type===1){const{value:R,repeatable:b,optional:C,regexp:w}=u;l.push({name:R,repeatable:b,optional:C});const P=w||_e;if(P!==_e){m+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let O=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(O=C&&f.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),s+=O,m+=20,C&&(m+=-8),b&&(m+=-20),P===".*"&&(m+=-50)}o.push(m)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function g(f){const o=f.match(d),a={};if(!o)return null;for(let u=1;u<o.length;u++){const m=o[u]||"",R=l[u-1];a[R.name]=m&&R.repeatable?m.split("/"):m}return a}function c(f){let o="",a=!1;for(const u of e){(!a||!o.endsWith("/"))&&(o+="/"),a=!1;for(const m of u)if(m.type===0)o+=m.value;else if(m.type===1){const{value:R,repeatable:b,optional:C}=m,w=R in f?f[R]:"";if(I(w)&&!b)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=I(w)?w.join("/"):w;if(!P)if(C)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);o+=P}}return o||"/"}return{re:d,score:r,keys:l,parse:g,stringify:c}}function At(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _t(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=At(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(Oe(r))return 1;if(Oe(s))return-1}return s.length-r.length}function Oe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ot={type:0,value:""},xt=/[a-zA-Z0-9_]/;function Mt(e){if(!e)return[[]];if(e==="/")return[[Ot]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let g=0,c,f="",o="";function a(){!f||(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:o,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=c}for(;g<e.length;){if(c=e[g++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&a(),d()):c===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:c==="("?n=2:xt.test(c)?u():(a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--);break;case 2:c===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+c:n=3:o+=c;break;case 3:a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),s}function Nt(e,t,n){const r=bt(Mt(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function It(e,t){const n=[],r=new Map;t=Ne({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function l(o,a,u){const m=!u,R=Lt(o);R.aliasOf=u&&u.record;const b=Ne(t,o),C=[R];if("alias"in o){const O=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of O)C.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let w,P;for(const O of C){const{path:M}=O;if(a&&M[0]!=="/"){const B=a.record.path,L=B[B.length-1]==="/"?"":"/";O.path=a.record.path+(M&&L+M)}if(w=Nt(O,a,b),u?u.alias.push(w):(P=P||w,P!==w&&P.alias.push(w),m&&o.name&&!Me(w)&&d(o.name)),R.children){const B=R.children;for(let L=0;L<B.length;L++)l(B[L],w,u&&u.children[L])}u=u||w,c(w)}return P?()=>{d(P)}:W}function d(o){if(Ve(o)){const a=r.get(o);a&&(r.delete(o),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(o);a>-1&&(n.splice(a,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function g(){return n}function c(o){let a=0;for(;a<n.length&&_t(o,n[a])>=0&&(o.record.path!==n[a].record.path||!De(o,n[a]));)a++;n.splice(a,0,o),o.record.name&&!Me(o)&&r.set(o.record.name,o)}function f(o,a){let u,m={},R,b;if("name"in o&&o.name){if(u=r.get(o.name),!u)throw K(1,{location:o});b=u.record.name,m=S(xe(a.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),o.params&&xe(o.params,u.keys.map(P=>P.name))),R=u.stringify(m)}else if("path"in o)R=o.path,u=n.find(P=>P.re.test(R)),u&&(m=u.parse(R),b=u.record.name);else{if(u=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!u)throw K(1,{location:o,currentLocation:a});b=u.record.name,m=S({},a.params,o.params),R=u.stringify(m)}const C=[];let w=u;for(;w;)C.unshift(w.record),w=w.parent;return{name:b,path:R,params:m,matched:C,meta:Ht(C)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:g,getRecordMatcher:s}}function xe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$t(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $t(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ht(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function De(e,t){return t.children.some(n=>n===e||De(e,n))}const Qe=/#/g,Tt=/&/g,Bt=/\//g,jt=/=/g,qt=/\?/g,Fe=/\+/g,zt=/%5B/g,Gt=/%5D/g,We=/%5E/g,Kt=/%60/g,Ye=/%7B/g,Vt=/%7C/g,Xe=/%7D/g,Ut=/%20/g;function me(e){return encodeURI(""+e).replace(Vt,"|").replace(zt,"[").replace(Gt,"]")}function Dt(e){return me(e).replace(Ye,"{").replace(Xe,"}").replace(We,"^")}function de(e){return me(e).replace(Fe,"%2B").replace(Ut,"+").replace(Qe,"%23").replace(Tt,"%26").replace(Kt,"`").replace(Ye,"{").replace(Xe,"}").replace(We,"^")}function Qt(e){return de(e).replace(jt,"%3D")}function Ft(e){return me(e).replace(Qe,"%23").replace(qt,"%3F")}function Wt(e){return e==null?"":Ft(e).replace(Bt,"%2F")}function J(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Fe," "),d=l.indexOf("="),g=J(d<0?l:l.slice(0,d)),c=d<0?null:J(l.slice(d+1));if(g in t){let f=t[g];I(f)||(f=t[g]=[f]),f.push(c)}else t[g]=c}return t}function Ie(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(l=>l&&de(l)):[r&&de(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Xt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Zt=Symbol(""),Le=Symbol(""),te=Symbol(""),ge=Symbol(""),pe=Symbol("");function Q(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function T(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,g)=>{const c=a=>{a===!1?g(K(4,{from:n,to:t})):a instanceof Error?g(a):St(a)?g(K(2,{from:t,to:a})):(l&&r.enterCallbacks[s]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[s],t,n,c);let o=Promise.resolve(f);e.length<3&&(o=o.then(c)),o.catch(a=>g(a))})}function fe(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let g=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Jt(g)){const f=(g.__vccOpts||g)[t];f&&s.push(T(f,n,r,l,d))}else{let c=g();s.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const o=ot(f)?f.default:f;l.components[d]=o;const u=(o.__vccOpts||o)[t];return u&&T(u,n,r,l,d)()}))}}return s}function Jt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=j(te),n=j(ge),r=N(()=>t.resolve(F(e.to))),s=N(()=>{const{matched:c}=r.value,{length:f}=c,o=c[f-1],a=n.matched;if(!o||!a.length)return-1;const u=a.findIndex(G.bind(null,o));if(u>-1)return u;const m=He(c[f-2]);return f>1&&He(o)===m&&a[a.length-1].path!==m?a.findIndex(G.bind(null,c[f-2])):u}),l=N(()=>s.value>-1&&rn(n.params,r.value.params)),d=N(()=>s.value>-1&&s.value===n.matched.length-1&&Ge(n.params,r.value.params));function g(c={}){return nn(c)?t[F(e.replace)?"replace":"push"](F(e.to)).catch(W):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:g}}const en=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=je($e(e)),{options:r}=j(te),s=N(()=>({[Te(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Te(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),tn=en;function nn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!I(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Te=(e,t,n)=>e!=null?e:t!=null?t:n,sn=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=j(pe),s=N(()=>e.route||r.value),l=j(Le,0),d=N(()=>{let f=F(l);const{matched:o}=s.value;let a;for(;(a=o[f])&&!a.components;)f++;return f}),g=N(()=>s.value.matched[d.value]);ae(Le,N(()=>d.value+1)),ae(Zt,g),ae(pe,s);const c=rt();return st(()=>[c.value,g.value,e.name],([f,o,a],[u,m,R])=>{o&&(o.instances[a]=f,m&&m!==o&&f&&f===u&&(o.leaveGuards.size||(o.leaveGuards=m.leaveGuards),o.updateGuards.size||(o.updateGuards=m.updateGuards))),f&&o&&(!m||!G(o,m)||!u)&&(o.enterCallbacks[a]||[]).forEach(b=>b(f))},{flush:"post"}),()=>{const f=s.value,o=e.name,a=g.value,u=a&&a.components[o];if(!u)return Be(n.default,{Component:u,route:f});const m=a.props[o],R=m?m===!0?f.params:typeof m=="function"?m(f):m:null,C=ze(u,S({},R,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(a.instances[o]=null)},ref:c}));return Be(n.default,{Component:C,route:f})||C}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const on=sn;function un(e){const t=It(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Ie,s=e.history,l=Q(),d=Q(),g=Q(),c=tt(H);let f=H;z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=le.bind(null,i=>""+i),a=le.bind(null,Wt),u=le.bind(null,J);function m(i,p){let h,v;return Ve(i)?(h=t.getRecordMatcher(i),v=p):v=i,t.addRoute(v,h)}function R(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function b(){return t.getRoutes().map(i=>i.record)}function C(i){return!!t.getRecordMatcher(i)}function w(i,p){if(p=S({},p||c.value),typeof i=="string"){const y=ue(n,i,p.path),_=t.resolve({path:y.path},p),D=s.createHref(y.fullPath);return S(y,_,{params:u(_.params),hash:J(y.hash),redirectedFrom:void 0,href:D})}let h;if("path"in i)h=S({},i,{path:ue(n,i.path,p.path).path});else{const y=S({},i.params);for(const _ in y)y[_]==null&&delete y[_];h=S({},i,{params:a(i.params)}),p.params=a(p.params)}const v=t.resolve(h,p),k=i.hash||"";v.params=o(u(v.params));const A=at(r,S({},i,{hash:Dt(k),path:v.path})),E=s.createHref(A);return S({fullPath:A,hash:k,query:r===Ie?Xt(i.query):i.query||{}},v,{redirectedFrom:void 0,href:E})}function P(i){return typeof i=="string"?ue(n,i,c.value.path):S({},i)}function O(i,p){if(f!==i)return K(8,{from:p,to:i})}function M(i){return V(i)}function B(i){return M(S(P(i),{replace:!0}))}function L(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function V(i,p){const h=f=w(i),v=c.value,k=i.state,A=i.force,E=i.replace===!0,y=L(h);if(y)return V(S(P(y),{state:typeof y=="object"?S({},k,y.state):k,force:A,replace:E}),p||h);const _=h;_.redirectedFrom=p;let D;return!A&&lt(r,v,h)&&(D=K(16,{to:_,from:v}),Pe(v,v,!0,!1)),(D?Promise.resolve(D):ve(_,v)).catch(x=>$(x)?$(x,2)?x:se(x):re(x,_,v)).then(x=>{if(x){if($(x,2))return V(S({replace:E},P(x.to),{state:typeof x.to=="object"?S({},k,x.to.state):k,force:A}),p||_)}else x=Re(_,v,!0,E,k);return ye(_,v,x),x})}function Ze(i,p){const h=O(i,p);return h?Promise.reject(h):Promise.resolve()}function ve(i,p){let h;const[v,k,A]=cn(i,p);h=fe(v.reverse(),"beforeRouteLeave",i,p);for(const y of v)y.leaveGuards.forEach(_=>{h.push(T(_,i,p))});const E=Ze.bind(null,i,p);return h.push(E),q(h).then(()=>{h=[];for(const y of l.list())h.push(T(y,i,p));return h.push(E),q(h)}).then(()=>{h=fe(k,"beforeRouteUpdate",i,p);for(const y of k)y.updateGuards.forEach(_=>{h.push(T(_,i,p))});return h.push(E),q(h)}).then(()=>{h=[];for(const y of i.matched)if(y.beforeEnter&&!p.matched.includes(y))if(I(y.beforeEnter))for(const _ of y.beforeEnter)h.push(T(_,i,p));else h.push(T(y.beforeEnter,i,p));return h.push(E),q(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=fe(A,"beforeRouteEnter",i,p),h.push(E),q(h))).then(()=>{h=[];for(const y of d.list())h.push(T(y,i,p));return h.push(E),q(h)}).catch(y=>$(y,8)?y:Promise.reject(y))}function ye(i,p,h){for(const v of g.list())v(i,p,h)}function Re(i,p,h,v,k){const A=O(i,p);if(A)return A;const E=p===H,y=z?history.state:{};h&&(v||E?s.replace(i.fullPath,S({scroll:E&&y&&y.scroll},k)):s.push(i.fullPath,k)),c.value=i,Pe(i,p,h,E),se()}let U;function Je(){U||(U=s.listen((i,p,h)=>{if(!we.listening)return;const v=w(i),k=L(v);if(k){V(S(k,{replace:!0}),v).catch(W);return}f=v;const A=c.value;z&&vt(Ce(A.fullPath,h.delta),ee()),ve(v,A).catch(E=>$(E,12)?E:$(E,2)?(V(E.to,v).then(y=>{$(y,20)&&!h.delta&&h.type===X.pop&&s.go(-1,!1)}).catch(W),Promise.reject()):(h.delta&&s.go(-h.delta,!1),re(E,v,A))).then(E=>{E=E||Re(v,A,!1),E&&(h.delta&&!$(E,8)?s.go(-h.delta,!1):h.type===X.pop&&$(E,20)&&s.go(-1,!1)),ye(v,A,E)}).catch(W)}))}let ne=Q(),Ee=Q(),Z;function re(i,p,h){se(i);const v=Ee.list();return v.length?v.forEach(k=>k(i,p,h)):console.error(i),Promise.reject(i)}function et(){return Z&&c.value!==H?Promise.resolve():new Promise((i,p)=>{ne.add([i,p])})}function se(i){return Z||(Z=!i,Je(),ne.list().forEach(([p,h])=>i?h(i):p()),ne.reset()),i}function Pe(i,p,h,v){const{scrollBehavior:k}=e;if(!z||!k)return Promise.resolve();const A=!h&&yt(Ce(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return nt().then(()=>k(i,p,A)).then(E=>E&&gt(E)).catch(E=>re(E,i,p))}const oe=i=>s.go(i);let ie;const ce=new Set,we={currentRoute:c,listening:!0,addRoute:m,removeRoute:R,hasRoute:C,getRoutes:b,resolve:w,options:e,push:M,replace:B,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:l.add,beforeResolve:d.add,afterEach:g.add,onError:Ee.add,isReady:et,install(i){const p=this;i.component("RouterLink",tn),i.component("RouterView",on),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>F(c)}),z&&!ie&&c.value===H&&(ie=!0,M(s.location).catch(k=>{}));const h={};for(const k in H)h[k]=N(()=>c.value[k]);i.provide(te,p),i.provide(ge,je(h)),i.provide(pe,c);const v=i.unmount;ce.add(i),i.unmount=function(){ce.delete(i),ce.size<1&&(f=H,U&&U(),U=null,c.value=H,ie=!1,Z=!1),v()}}};return we}function q(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function cn(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const g=t.matched[d];g&&(e.matched.find(f=>G(f,g))?r.push(g):n.push(g));const c=e.matched[d];c&&(t.matched.find(f=>G(f,c))||s.push(c))}return[n,r,s]}function fn(){return j(te)}function hn(){return j(ge)}export{ln as a,hn as b,un as c,fn as u};