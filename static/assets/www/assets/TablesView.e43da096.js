import{r as p,w as Y,o as r,c as E,a as i,b as a,d as W,v as X,e as Z,f as y,t as N,g as _,h as n,F as T,i as D,u as s,j as f,k as P,l as U,m as B,_ as ee,n as le,p as V,q as ae,s as te,x as ne,y as oe,z as S,C as se,A as ue,B as re,D as ie,E as de,G as ce,H as me,I as fe,J as _e,K as pe,L as ve,M as he,N as ke,O as be,P as ye,Q as ge}from"./index.62c2fd96.js";import{_ as R}from"./CardBoxModal.413b2fd1.js";import{_ as Ce}from"./FormCheckRadioGroup.08e3f5e4.js";import{_ as M}from"./FormField.28284586.js";import{_ as j}from"./FormControl.0b40f631.js";import"./FormCheckRadio.602e6d51.js";const Ve={class:"checkbox"},$e=a("span",{class:"check"},null,-1),we={__name:"TableCheckboxCell",props:{type:{type:String,default:"td"}},emits:["checked"],setup(g,{emit:C}){const v=p(!1);return Y(v,h=>{C("checked",h)}),(h,d)=>(r(),E(Z(g.type),{class:"lg:w-1"},{default:i(()=>[a("label",Ve,[W(a("input",{"onUpdate:modelValue":d[0]||(d[0]=k=>v.value=k),type:"checkbox"},null,512),[[X,v.value]]),$e])]),_:1}))}},xe={style:{"margin-right":"10px"}},Te=a("p",{style:{color:"red"}},"\u53EF\u4EE5\u53C2\u8003\u8FD9\u4E9B\u5B57\u6BB5,\u624B\u52A8\u5728config.json\u4E2D\u4FEE\u6539\u6570\u636E",-1),Be={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},Ee={key:0},De=a("th",null,null,-1),Pe=a("th",null,"\u540D\u79F0",-1),Ue=a("th",null,"\u4EFB\u52A1\u7C7B\u578B",-1),Re=a("th",null,"\u65F6\u95F4\u8868\u8FBE\u5F0F",-1),Ae=a("th",null,"\u8DDF\u968F\u6267\u884C",-1),Me=a("th",null,"\u521B\u5EFA\u65F6\u95F4",-1),Le=a("th",null,null,-1),Ne={key:0},Se={class:"border-b-0 lg:w-6 before:hidden"},je={"data-label":"\u540D\u79F0"},qe={"data-label":"\u4EFB\u52A1\u7C7B\u578B",class:"lg:w-32"},Oe={"data-label":"\u65F6\u95F4\u8868\u8FBE\u5F0F",class:"lg:w-32"},ze={"data-label":"\u521B\u5EFA\u65F6\u95F4",class:"lg:w-52 text-center"},Fe={class:"before:hidden lg:w-1 whitespace-nowrap"},He={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Ge={__name:"TableSampleClients",props:{checkable:Boolean,data:{type:Array,required:!0,default:[]}},emits:["Refresh","EditClick"],setup(g,{emit:C}){const v=g;let h=y(()=>o=>N().find(l=>l.type==o).label),d=y(()=>o=>N().find(l=>l.type==o).avatar);const k=y(()=>v.data),$=p(!1),w=p(!1),b=p(!1),u=p(10),c=p(0),x=p([]),A=y(()=>k.value.slice(u.value*c.value,u.value*(c.value+1))),L=y(()=>Math.ceil(k.value.length/u.value)),q=y(()=>c.value+1),O=y(()=>{const o=[];for(let l=0;l<L.value;l++)o.push(l);return o}),z=(o,l)=>{const e=[];return o.forEach(m=>{l(m)||e.push(m)}),e},F=(o,l)=>{o?x.value.push(l):x.value=z(x.value,e=>e.id===l.id)};let t=p({});function H(o){$.value=!0,t.value=o}function G(o){console.log(t),w.value=!0,t.value=o}function I(o){console.log(t),b.value=!0,t.value=o}function J(o){C("EditClick",o)}function K(o){console.log(t),re(t.value.name).then(l=>{C("Refresh")}),t.value={}}function Q(o){ie(t.value.name).then(l=>{}),t.value={}}return(o,l)=>(r(),_(T,null,[n(R,{modelValue:$.value,"onUpdate:modelValue":l[0]||(l[0]=e=>$.value=e),title:"\u4EFB\u52A1\u4FE1\u606F",onConfirm:l[1]||(l[1]=e=>U(t)?t.value={}:t={}),onCancel:l[2]||(l[2]=e=>U(t)?t.value={}:t={})},{default:i(()=>[(r(!0),_(T,null,D(s(t),(e,m)=>(r(),_("p",{key:m},[a("b",xe,f(m)+":",1),P(f(e),1)]))),128)),Te]),_:1},8,["modelValue"]),n(R,{modelValue:w.value,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value=e),title:"\u5220\u9664",button:"danger","has-cancel":"",onCancel:l[4]||(l[4]=e=>U(t)?t.value={}:t={}),onConfirm:K},{default:i(()=>[a("p",null,[P("\u786E\u5B9A\u5220\u9664\u4EFB\u52A1 "),a("b",null,f(s(t).name)+"?",1)])]),_:1},8,["modelValue"]),n(R,{modelValue:b.value,"onUpdate:modelValue":l[5]||(l[5]=e=>b.value=e),title:"\u8FD0\u884C",button:"success","has-cancel":"",onCancel:l[6]||(l[6]=e=>U(t)?t.value={}:t={}),onConfirm:Q},{default:i(()=>[a("p",null,[P("\u8FD0\u884C\u4EFB\u52A1 "),a("b",null,f(s(t).name),1)])]),_:1},8,["modelValue"]),x.value.length?(r(),_("div",Be,[(r(!0),_(T,null,D(x.value,e=>(r(),_("span",{key:e.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},f(e.name),1))),128))])):B("",!0),a("table",null,[a("thead",null,[a("tr",null,[g.checkable?(r(),_("th",Ee)):B("",!0),De,Pe,Ue,Re,Ae,Me,Le])]),s(A).length>0?(r(),_("tbody",Ne,[(r(!0),_(T,null,D(s(A),e=>(r(),_("tr",{key:e.id},[g.checkable?(r(),E(we,{key:0,onChecked:m=>F(m,e)},null,8,["onChecked"])):B("",!0),a("td",Se,[n(ee,{avatar:s(d)(e.type),username:e.name,class:"w-24 h-24 mx-auto lg:w-8 lg:h-6"},null,8,["avatar","username"])]),a("td",je,f(e.name),1),a("td",qe,f(s(h)(e.type)),1),a("td",Oe,f(e.time),1),a("td",{"data-label":"\u8DDF\u968F\u6267\u884C",class:le(["lg:w-24 whitespace-nowrap",e.isrun=="2"?"text-emerald-500":"text-yellow-500"])},f(e.isrun=="2"?"\u6267\u884C":"\u4E0D\u6267\u884C"),3),a("td",ze,f(e.createtime),1),a("td",Fe,[n(S,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[n(V,{color:"text-emerald-500",icon:s(ae),small:"",onClick:m=>I(e)},null,8,["icon","onClick"]),n(V,{color:"text-blue-500",icon:s(te),small:"",onClick:m=>H(e)},null,8,["icon","onClick"]),n(V,{color:"text-blue-500",icon:s(ne),small:"",onClick:m=>J(e)},null,8,["icon","onClick"]),n(V,{color:"text-red-500",icon:s(oe),small:"",onClick:m=>G(e)},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])):B("",!0)]),s(A).length<=0?(r(),E(se,{key:1},{default:i(()=>[P("\u6CA1\u6709\u4EFB\u52A1")]),_:1})):B("",!0),a("div",He,[n(ue,null,{default:i(()=>[n(S,null,{default:i(()=>[(r(!0),_(T,null,D(s(O),e=>(r(),E(V,{key:e,active:e===c.value,label:e+1,color:e===c.value?"lightDark":"whiteDark",small:"",onClick:m=>c.value=e},null,8,["active","label","color","onClick"]))),128))]),_:1}),a("small",null,"Page "+f(s(q))+" of "+f(s(L)),1)]),_:1})])],64))}},Xe={__name:"TablesView",setup(g){const C=ye();let v=p([]);de(()=>{h()});async function h(){v.value=await ce()}const d=me({name:"",time:"",isrun:"1"}),k=p(!1);function $(b){console.log(b);for(let u in d)d[u]=b[u];k.value=!0}function w(){console.log(d),ge(d).then(b=>{h()})}return(b,u)=>(r(),E(fe,null,{default:i(()=>[n(be,null,{default:i(()=>[n(_e,{icon:s(pe),title:"\u5168\u90E8\u4EFB\u52A1",main:""},{default:i(()=>[n(V,{icon:s(ve),label:"\u6DFB\u52A0\u4EFB\u52A1","rounded-full":"",color:"info",small:"",onClick:u[0]||(u[0]=c=>s(C).replace({path:"/forms"}))},null,8,["icon"])]),_:1},8,["icon"]),n(he,{class:"mb-6","has-table":""},{default:i(()=>[n(Ge,{data:s(v),onRefresh:h,onEditClick:$,checkable:""},null,8,["data"])]),_:1}),n(R,{modelValue:k.value,"onUpdate:modelValue":u[4]||(u[4]=c=>k.value=c),title:"\u4FEE\u6539\u4EFB\u52A1","button-label":"\u4FEE\u6539","has-cancel":"",onConfirm:w},{default:i(()=>[n(M,{label:"\u4EFB\u52A1\u540D\u79F0",help:"\u4EFB\u52A1\u540D\u79F0\u4E0D\u53EF\u4FEE\u6539"},{default:i(()=>[n(j,{modelValue:d.name,"onUpdate:modelValue":u[1]||(u[1]=c=>d.name=c),disabled:!0,type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]),_:1}),n(M,{label:"\u6267\u884C\u65F6\u95F4",help:"\u9075\u5FAAcron\u89C4\u8303\u7684\u65F6\u95F4\u683C\u5F0F"},{default:i(()=>[n(j,{modelValue:d.time,"onUpdate:modelValue":u[2]||(u[2]=c=>d.time=c),type:"tel",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u6267\u884C\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),n(ke),n(M,{label:"\u542F\u52A8\u662F\u5426\u6267\u884C"},{default:i(()=>[n(Ce,{modelValue:d.isrun,"onUpdate:modelValue":u[3]||(u[3]=c=>d.isrun=c),name:"time-radio",type:"radio",options:{1:"\u542F\u52A8\u65F6\u4E0D\u6267\u884C",2:"\u542F\u52A8\u65F6\u6267\u884C"}},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};export{Xe as default};