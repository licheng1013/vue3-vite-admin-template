import{d as N,r as S,a as B,b as r,o as i,c as g,w as o,e as n,f as I,t as b,v as J,_ as D,g as w,F as A,h as $,n as C,u as d,i as p,l as K,j as T,k as H,m as L}from"./index.8ed6e493.js";import{A as P}from"./AnimBounceInUp.ca901682.js";const V="indexKye",x="navBarKey",O=N("store",()=>{let t=[];for(let l of S.options.routes)if(l.meta){t=l.children;break}const e=B(new Date().getTime());let s=window.sessionStorage.getItem(V);s===null&&(s="/manager");const _=B(s),u=F();return{path:_,setSelIndex:l=>{_.value=l,window.sessionStorage.setItem(V,l),t.forEach(m=>{if(m.path===l)return u.addPath(m),!0})},menus:t,refresh:e,remove:l=>{u.remove(l)}}}),F=N("navBar",()=>{const t=B([]);let e=window.sessionStorage.getItem(x);return e!==null&&(t.value=JSON.parse(e)),{menus:t,addPath:c=>{for(let a=0;a<t.value.length;a++)if(t.value[a].path===c.path)return;t.value.push(c),window.sessionStorage.setItem(x,JSON.stringify(t.value))},remove:c=>{delete t.value.splice(c,1),window.sessionStorage.setItem(x,JSON.stringify(t.value))},removeAll:()=>{t.value=[],window.sessionStorage.setItem(x,JSON.stringify(t.value))}}}),R={__name:"VueVersion",setup(t){return(e,s)=>{const _=r("el-button"),u=r("el-link");return i(),g(u,{underline:!1,href:"https://cn.vuejs.org/",target:"_blank"},{default:o(()=>[n(_,{type:"primary",icon:"Share"},{default:o(()=>[I("Vue "+b(J))]),_:1})]),_:1})}}};const j={class:"navBar"},E=["onClick"],z={class:"routerBtn"},U=["onClick"],q={__name:"Navigation",setup(t){const e=O(),s=F(),_=()=>{s.removeAll()},u=a=>{e.path=a,e.refresh=new Date().getTime(),S.push({path:e.path})},c=(a,l)=>{e.remove(a),l===e.path&&(a>0?e.path=s.menus[a-1].path:s.menus.length!==0&&(e.path=s.menus[0].path,console.log(e.path)),S.push({path:e.path}),e.refresh=new Date().getTime())};return(a,l)=>{const m=r("DeleteFilled"),f=r("el-icon"),k=r("Close");return i(),w("div",j,[n(f,{style:{"margin-left":"16px","margin-bottom":"2px"},color:"red",class:"no-sel",onClick:_},{default:o(()=>[n(m)]),_:1}),(i(!0),w(A,null,$(d(s).menus,(h,y)=>(i(),w("div",{style:{display:"flex"},class:C(d(e).path===h.path?"sel":"no-sel")},[p("div",{onClick:v=>u(h.path)},[p("span",z,b(h.name),1)],8,E),p("div",{style:{"padding-top":"2px"},onClick:v=>c(y,h.path)},[n(f,null,{default:o(()=>[n(k)]),_:1})],8,U)],2))),256))])}}},G=D(q,[["__scopeId","data-v-749c7ac1"]]);const M={class:"header"},Q={class:"main"},W={__name:"HomeView",setup(t){const e=O(),s=()=>{K(),S.push({path:"/"})};return(_,u)=>{const c=r("el-icon"),a=r("el-menu-item"),l=r("el-menu"),m=r("el-aside"),f=r("el-button"),k=r("el-link"),h=r("RouterView"),y=r("el-container");return i(),g(y,{class:"home"},{default:o(()=>[n(m,{class:C(d(T))},{default:o(()=>[n(l,{router:"","text-color":"white","background-color":"#292d3e","default-active":d(e).path,onSelect:d(e).setSelIndex},{default:o(()=>[(i(!0),w(A,null,$(d(e).menus,(v,X)=>(i(),g(a,{index:v.path},{default:o(()=>[n(c,null,{default:o(()=>[(i(),g(H(v.icon)))]),_:2},1024),p("span",null,b(v.name),1)]),_:2},1032,["index"]))),256))]),_:1},8,["default-active","onSelect"])]),_:1},8,["class"]),n(y,{style:{display:"flex","flex-direction":"column"}},{default:o(()=>[p("div",M,[p("div",{class:C(["el-card",d(L)])},[n(k,{underline:!1,href:"https://gitee.com/licheng1013/vue3-vite-admin-template",target:"_blank",style:{"margin-right":"4px"}},{default:o(()=>[n(f,{type:"primary",icon:"Share"},{default:o(()=>[I("\u9879\u76EE\u5730\u5740")]),_:1})]),_:1}),n(R),n(f,{type:"primary",onClick:s},{default:o(()=>[I("\u9000\u51FA")]),_:1})],2)]),p("div",null,[n(P,null,{default:o(()=>[n(G,{class:"el-card navBar"})]),_:1})]),p("div",Q,[(i(),g(h,{key:d(e).refresh}))])]),_:1})]),_:1})}}},ee=D(W,[["__scopeId","data-v-d017dba1"]]);export{ee as default};