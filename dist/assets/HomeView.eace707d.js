import{d as N,r as S,a as B,b as r,o as i,c as g,w as o,e as n,f as C,t as V,v as J,_ as D,g as w,F as $,h as O,n as I,u as m,i as p,l as K,j as T,k as H,m as P}from"./index.b5485dc8.js";import{_ as R}from"./AnimBounceInUp.a9de73c1.js";const b="indexKye",x="navBarKey",A=N("store",()=>{let t=[];for(let l of S.options.routes)if(l.meta){t=l.children;break}const e=B(new Date().getTime());let s=window.sessionStorage.getItem(b);s===null&&(s="/manager");const _=B(s),u=F();return{path:_,setSelIndex:l=>{_.value=l,window.sessionStorage.setItem(b,l),t.forEach(d=>{if(d.path===l)return u.addPath(d),!0})},menus:t,refresh:e,remove:l=>{u.remove(l)}}}),F=N("navBar",()=>{const t=B([]);let e=window.sessionStorage.getItem(x);return e!==null&&(t.value=JSON.parse(e)),{menus:t,addPath:c=>{for(let a=0;a<t.value.length;a++)if(t.value[a].path===c.path)return;t.value.push(c),window.sessionStorage.setItem(x,JSON.stringify(t.value))},remove:c=>{delete t.value.splice(c,1),window.sessionStorage.setItem(x,JSON.stringify(t.value))},removeAll:()=>{t.value=[],window.sessionStorage.setItem(x,JSON.stringify(t.value))}}}),j={__name:"VueVersion",setup(t){return(e,s)=>{const _=r("el-button"),u=r("el-link");return i(),g(u,{underline:!1,href:"https://cn.vuejs.org/",target:"_blank"},{default:o(()=>[n(_,{type:"primary",icon:"Share"},{default:o(()=>[C("Vue "+V(J))]),_:1})]),_:1})}}};const E={class:"navBar"},L=["onClick"],z={class:"routerBtn"},q=["onClick"],G={__name:"Navigation",setup(t){const e=A(),s=F(),_=()=>{s.removeAll()},u=a=>{e.path=a,e.refresh=new Date().getTime(),S.push({path:e.path})},c=(a,l)=>{e.remove(a),l===e.path&&(a>0?e.path=s.menus[a-1].path:s.menus.length!==0&&(e.path=s.menus[0].path,console.log(e.path)),S.push({path:e.path}),e.refresh=new Date().getTime())};return(a,l)=>{const d=r("DeleteFilled"),f=r("el-icon"),k=r("Close");return i(),w("div",E,[n(f,{style:{"margin-left":"16px","margin-bottom":"2px"},color:"red",class:"no-sel",onClick:_},{default:o(()=>[n(d)]),_:1}),(i(!0),w($,null,O(m(s).menus,(h,y)=>(i(),w("div",{style:{display:"flex"},class:I(m(e).path===h.path?"sel":"no-sel")},[p("div",{onClick:v=>u(h.path)},[p("span",z,V(h.name),1)],8,L),p("div",{style:{"padding-top":"2px"},onClick:v=>c(y,h.path)},[n(f,null,{default:o(()=>[n(k)]),_:1})],8,q)],2))),256))])}}},M=D(G,[["__scopeId","data-v-749c7ac1"]]);const Q={class:"header"},U={__name:"HomeView",setup(t){const e=A(),s=()=>{K(),S.push({path:"/"})};return(_,u)=>{const c=r("el-icon"),a=r("el-menu-item"),l=r("el-menu"),d=r("el-aside"),f=r("el-button"),k=r("el-link"),h=r("RouterView"),y=r("el-container");return i(),g(y,{class:"home"},{default:o(()=>[n(d,{class:I(m(T))},{default:o(()=>[n(l,{router:"","text-color":"white","background-color":"#292d3e","default-active":m(e).path,onSelect:m(e).setSelIndex},{default:o(()=>[(i(!0),w($,null,O(m(e).menus,(v,W)=>(i(),g(a,{index:v.path},{default:o(()=>[n(c,null,{default:o(()=>[(i(),g(H(v.icon)))]),_:2},1024),p("span",null,V(v.name),1)]),_:2},1032,["index"]))),256))]),_:1},8,["default-active","onSelect"])]),_:1},8,["class"]),n(y,{style:{display:"flex","flex-direction":"column"}},{default:o(()=>[p("div",Q,[p("div",{class:I(["el-card",m(P)])},[n(k,{underline:!1,href:"https://gitee.com/licheng1013/vue3-vite-admin-template",target:"_blank",style:{"margin-right":"4px"}},{default:o(()=>[n(f,{type:"primary",icon:"Share"},{default:o(()=>[C("\u9879\u76EE\u5730\u5740")]),_:1})]),_:1}),n(j),n(f,{type:"primary",onClick:s},{default:o(()=>[C("\u9000\u51FA")]),_:1})],2)]),p("div",null,[n(R,null,{default:o(()=>[n(M,{class:"el-card navBar"})]),_:1})]),(i(),g(h,{class:"main",key:m(e).refresh}))]),_:1})]),_:1})}}},Z=D(U,[["__scopeId","data-v-2c989f39"]]);export{Z as default};
