(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function _(){}const mt=t=>t;function T(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function H(){return Object.create(null)}function k(t){t.forEach(U)}function V(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return _;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function L(t,e,n){t.$$.on_destroy.push(gt(e,n))}function pt(t,e,n,r){if(t){const o=W(t,e,n,r);return t[0](o)}}function W(t,e,n,r){return t[1]&&r?T(n.ctx.slice(),t[1](r(e))):n.ctx}function _t(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],u=Math.max(e.dirty.length,o.length);for(let l=0;l<u;l+=1)i[l]=e.dirty[l]|o[l];return i}return e.dirty|o}return e.dirty}function yt(t,e,n,r,o,i){if(o){const u=W(e,n,r,i);t.p(u,o)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function y(t,e,n){return t.set(n),e}const tt=typeof window<"u";let wt=tt?()=>window.performance.now():()=>Date.now(),et=tt?t=>requestAnimationFrame(t):_;const x=new Set;function nt(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&et(nt)}function xt(t){let e;return x.size===0&&et(nt),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}function N(t,e){t.appendChild(e)}function rt(t,e,n){t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function M(t){return document.createElement(t)}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function $(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let j;function O(t){j=t}function At(){if(!j)throw new Error("Function called outside component initialization");return j}function Ct(t){At().$$.on_mount.push(t)}const C=[],Y=[],I=[],J=[],Mt=Promise.resolve();let q=!1;function Ot(){q||(q=!0,Mt.then(ot))}function B(t){I.push(t)}const P=new Set;let z=0;function ot(){const t=j;do{for(;z<C.length;){const e=C[z];z++,O(e),jt(e.$$)}for(O(null),C.length=0,z=0;Y.length;)Y.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];P.has(n)||(P.add(n),n())}I.length=0}while(C.length);for(;J.length;)J.pop()();q=!1,P.clear(),O(t)}function jt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const v=new Set;let kt;function K(t,e){t&&t.i&&(v.delete(t),t.i(e))}function it(t,e,n,r){if(t&&t.o){if(v.has(t))return;v.add(t),kt.c.push(()=>{v.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function $t(t){t&&t.c()}function st(t,e,n,r){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),r||B(()=>{const u=t.$$.on_mount.map(U).filter(V);t.$$.on_destroy?t.$$.on_destroy.push(...u):k(u),t.$$.on_mount=[]}),i.forEach(B)}function ut(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(C.push(t),Ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(t,e,n,r,o,i,u,l=[-1]){const f=j;O(t);const s=t.$$={fragment:null,ctx:[],props:i,update:_,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};u&&u(s.root);let d=!1;if(s.ctx=n?n(t,e.props||{},(c,m,...p)=>{const h=p.length?p[0]:m;return s.ctx&&o(s.ctx[c],s.ctx[c]=h)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](h),d&&zt(t,c)),m}):[],s.update(),d=!0,k(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const c=Et(e.target);s.fragment&&s.fragment.l(c),c.forEach(Z)}else s.fragment&&s.fragment.c();e.intro&&K(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),ot()}O(f)}class lt{$destroy(){ut(this,1),this.$destroy=_}$on(e,n){if(!V(n))return _;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function It(t,e=_){let n;const r=new Set;function o(l){if(R(t,l)&&(t=l,n)){const f=!w.length;for(const s of r)s[1](),w.push(s,t);if(f){for(let s=0;s<w.length;s+=2)w[s][0](w[s+1]);w.length=0}}}function i(l){o(l(t))}function u(l,f=_){const s=[l,f];return r.add(s),r.size===1&&(n=e(o)||_),l(t),()=>{r.delete(s),r.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:u}}function D(t){const e=t-1;return e*e*e+1}function Q(t){return Object.prototype.toString.call(t)==="[object Date]"}function F(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((o,i)=>F(t[i],o));return o=>r.map(i=>i(o))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Q(t)&&Q(e)){t=t.getTime(),e=e.getTime();const i=e-t;return u=>new Date(t+u*i)}const r=Object.keys(e),o={};return r.forEach(i=>{o[i]=F(t[i],e[i])}),i=>{const u={};return r.forEach(l=>{u[l]=o[l](i)}),u}}if(n==="number"){const r=e-t;return o=>t+o*r}throw new Error(`Cannot interpolate ${n} values`)}function S(t,e={}){const n=It(t);let r,o=t;function i(u,l){if(t==null)return n.set(t=u),Promise.resolve();o=u;let f=r,s=!1,{delay:d=0,duration:c=400,easing:m=mt,interpolate:p=F}=T(T({},e),l);if(c===0)return f&&(f.abort(),f=null),n.set(t=o),Promise.resolve();const h=wt()+d;let g;return r=xt(E=>{if(E<h)return!0;s||(g=p(t,u),typeof c=="function"&&(c=c(t,u)),s=!0),f&&(f.abort(),f=null);const A=E-h;return A>c?(n.set(t=u),!1):(n.set(t=g(m(A/c))),!0)}),r.promise}return{set:i,update:(u,l)=>i(u(o,t),l),subscribe:n.subscribe}}function vt(t){let e,n,r,o,i,u;const l=t[13].default,f=pt(l,t,t[12],null);return{c(){e=M("main"),n=M("div"),r=M("div"),f&&f.c(),X(r,"class","mBox svelte-c77d7w"),$(r,"background-image","url("+t[0]+")"),$(r,"transform","translateZ("+-t[3]+"px) rotateX("+t[4]+"deg) rotateY("+t[5]+"deg)"),X(n,"class","super svelte-c77d7w")},m(s,d){rt(s,e,d),N(e,n),N(n,r),f&&f.m(r,null),t[14](r),o=!0,i||(u=[b(window,"scroll",t[9]),b(window,"resize",t[9]),b(n,"mousemove",t[10]),b(n,"mousedown",t[15]),b(n,"mouseup",t[16]),b(n,"mouseleave",t[11])],i=!0)},p(s,[d]){f&&f.p&&(!o||d&4096)&&yt(f,l,s,s[12],o?_t(l,s[12],d,null):bt(s[12]),null),(!o||d&1)&&$(r,"background-image","url("+s[0]+")"),(!o||d&56)&&$(r,"transform","translateZ("+-s[3]+"px) rotateX("+s[4]+"deg) rotateY("+s[5]+"deg)")},i(s){o||(K(f,s),o=!0)},o(s){it(f,s),o=!1},d(s){s&&Z(e),f&&f.d(s),t[14](null),i=!1,k(u)}}}function Lt(t,e,n){let r,o,i,{$$slots:u={},$$scope:l}=e,f=!1,{backgroundImage:s=""}=e,d,c=S(0,{duration:300,easing:D});L(t,c,a=>n(3,r=a));let m=!1;const p=S(0,{duration:500,easing:D});L(t,p,a=>n(5,i=a));const h=S(0,{duration:500,easing:D});L(t,h,a=>n(4,o=a));let g;function E(){f===!0&&(g=d.getBoundingClientRect(),g.x,g.y)}Ct(()=>{f=!0,E()});function A(a){m&&(y(p,i=Math.min(Math.max((a.clientX-g.x-Math.round(g.width/2))/7,-45),45),i),y(h,o=Math.min(Math.max(-(a.clientY-g.y-Math.round(g.height/2))/10,-45),45),o))}function G(){y(p,i=0,i),y(h,o=0,o),n(2,m=!1),y(c,r=0,r)}function ct(a){Y[a?"unshift":"push"](()=>{d=a,n(1,d)})}const at=a=>{y(c,r=60,r),n(2,m=!0),A(a)},dt=()=>{y(c,r=0,r),n(2,m=!1),G()};return t.$$set=a=>{"backgroundImage"in a&&n(0,s=a.backgroundImage),"$$scope"in a&&n(12,l=a.$$scope)},[s,d,m,r,o,i,c,p,h,E,A,G,l,u,ct,at,dt]}class Pt extends lt{constructor(e){super(),ft(this,e,Lt,vt,R,{backgroundImage:0})}}function Dt(t){let e,n,r,o;return r=new Pt({}),{c(){e=M("main"),n=M("div"),$t(r.$$.fragment),X(n,"class","testI svelte-4pmg69")},m(i,u){rt(i,e,u),N(e,n),st(r,n,null),o=!0},p:_,i(i){o||(K(r.$$.fragment,i),o=!0)},o(i){it(r.$$.fragment,i),o=!1},d(i){i&&Z(e),ut(r)}}}class St extends lt{constructor(e){super(),ft(this,e,null,Dt,R,{})}}new St({target:document.getElementById("app")});
