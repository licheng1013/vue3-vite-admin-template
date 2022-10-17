import{_ as z,s as $,b as c,o as f,g as C,e as t,w as s,x as U,n as B,u as k,q as F,a as v,y as D,k as w,f as O,F as A,h as S,z as N,E as P,c as T}from"./index.b58e57cd.js";const E={class:"page"},I={__name:"Pagination",props:{total:Number},emits:["onChange"],setup(n,{emit:u}){const d=$({page:1,size:10}),e=()=>{u("onChange",d)};return e(),(b,i)=>{const _=c("el-pagination"),a=c("el-card");return f(),C("div",E,[t(a,{class:B(k(F))},{default:s(()=>[t(_,{currentPage:d.page,"onUpdate:currentPage":i[0]||(i[0]=l=>d.page=l),"page-size":d.size,"onUpdate:page-size":i[1]||(i[1]=l=>d.size=l),total:n.total,"onUpdate:total":i[2]||(i[2]=l=>U(total)?total.value=l:null),"page-sizes":[10,20,30,50],background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:e,onCurrentChange:e},null,8,["currentPage","page-size","total"])]),_:1},8,["class"])])}}},j=z(I,[["__scopeId","data-v-055210b4"]]);const q={__name:"Table",props:{model:{},data:{type:Array}},emits:["onDelete","onAdd","onUpdate"],setup(n,{emit:u}){const d=v(0);D(()=>{let _=document.querySelector(".table");d.value=_.clientHeight});const e=v([]),b=_=>{e.value=_},i=()=>{P.confirm("\u662F\u5426\u5220\u9664\u6240\u9009\u5143\u7D20\uFF01","\u5220\u9664\u64CD\u4F5C",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"error",center:!0}).then(()=>{u("onDelete",e.value)}).catch()};return(_,a)=>{const l=c("el-button"),y=c("el-card"),r=c("el-table-column"),g=c("el-table");return f(),C("div",{class:B(["table",k(N)])},[w("div",null,[t(y,{class:"edit"},{default:s(()=>[t(l,{type:"primary",onClick:a[0]||(a[0]=x=>{u("onAdd",n.model)})},{default:s(()=>[O("\u6DFB\u52A0")]),_:1}),t(l,{type:"success",onClick:a[1]||(a[1]=x=>{u("onUpdate",e.value[0])}),disabled:e.value.length!==1},{default:s(()=>[O("\u4FEE\u6539 ")]),_:1},8,["disabled"]),t(l,{type:"danger",onClick:i,disabled:e.value.length<1},{default:s(()=>[O("\u5220\u9664")]),_:1},8,["disabled"])]),_:1}),t(y,{class:"body",ref:"body"},{default:s(()=>[t(g,{data:n.data,style:{width:"100%"},onSelectionChange:b,height:d.value-100},{default:s(()=>[t(r,{type:"selection",width:"55"}),(f(!0),C(A,null,S(n.model,(x,p,h)=>(f(),T(r,{label:x,prop:p},null,8,["label","prop"]))),256))]),_:1},8,["data","height"])]),_:1},512)])],2)}}},J=z(q,[["__scopeId","data-v-42664c19"]]),L={class:"edit"},M={class:"dialog-footer"},H={__name:"Edit",props:{editFlag:Boolean,model:{},body:{},title:String},emits:["onClose","onOk"],setup(n,{emit:u}){const d=n,e=v(null),b=()=>{u("onClose")},i=()=>{u("onOk",d.body)};return(_,a)=>{const l=c("el-input"),y=c("el-form-item"),r=c("el-form"),g=c("el-button"),x=c("el-dialog");return f(),C("div",L,[t(x,{ref:e.value,modelValue:n.editFlag,"onUpdate:modelValue":a[1]||(a[1]=p=>U(editFlag)?editFlag.value=p:null),title:n.title,width:"30%","before-close":b},{footer:s(()=>[w("span",M,[t(g,{onClick:b},{default:s(()=>[O("\u53D6\u6D88")]),_:1}),t(g,{type:"primary",onClick:i},{default:s(()=>[O("\u786E\u8BA4")]),_:1})])]),default:s(()=>[t(r,{modelValue:n.body,"onUpdate:modelValue":a[0]||(a[0]=p=>U(body)?body.value=p:null),"label-width":"120px"},{default:s(()=>[(f(!0),C(A,null,S(n.model,(p,h,o)=>(f(),T(y,{label:p},{default:s(()=>[t(l,{modelValue:n.body[h],"onUpdate:modelValue":m=>n.body[h]=m},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),256))]),_:1},8,["modelValue"])]),_:1},8,["modelValue","title"])])}}};const R={class:"app"},G={__name:"AppView",setup(n){const u={index:"\u7D22\u5F15",name:"\u59D3\u540D",sex:"\u6027\u522B",addr:"\u5730\u5740",status:"\u72B6\u6001",createTime:"\u521B\u5EFA\u65F6\u95F4"};let d={index:0,name:"\u5C0F\u84DD",sex:"\u7537",addr:"\u5317\u4EAC\u5E02",status:"\u5173\u95ED",createTime:"2022/10/7"},e=v([]),b=v(50);const i=()=>{for(let o=0;o<30;o++){let m=JSON.parse(JSON.stringify(d));m.index=o,e.value.push(m)}},_=o=>{console.log(o),i()},a=o=>{for(let m in o)for(let V=0;V<e.value.length;V++)if(e.value[V].index===o[m].index){e.value.splice(V,1);break}};let l=v(""),y=["\u6DFB\u52A0","\u4FEE\u6539"];const r=v(!1),g=v({}),x=()=>{l.value=y[0],r.value=!0,g.value={}},p=o=>{l.value=y[1],r.value=!0,g.value=o},h=o=>{console.log(o),r.value=!1};return(o,m)=>(f(),C("div",R,[t(J,{model:u,data:k(e),onOnDelete:a,onOnAdd:x,onOnUpdate:p},null,8,["data"]),t(j,{onOnChange:_,total:k(b)},null,8,["total"]),t(H,{title:k(l),"edit-flag":r.value,model:u,body:g.value,onOnOk:h,onOnClose:m[0]||(m[0]=V=>r.value=!1)},null,8,["title","edit-flag","body"])]))}},Q=z(G,[["__scopeId","data-v-434b65e0"]]);export{Q as default};