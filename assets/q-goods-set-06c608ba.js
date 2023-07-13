import{b as e,d as t,u as a,q as s,r as l,s as o,t as n,v as r,E as i,_ as u,w as d,m as c,x as p,y as f,z as m,A as v,B as y,D as g,F as h}from"./base-08fe9ac4.js";import{c as b,t as k,i as w,d as x,E as $,b as F,a as _}from"./el-popper-9202855f.js";import E from"./q-icon-72343d34.js";import{i as R,E as S,a as T}from"./el-select-aaf67317.js";import{E as L}from"./el-tooltip-6aa1d629.js";import{G as U,m as C,bA as j,bz as P,az as V,q as B,aj as D,b7 as N,r as O,al as q,aL as A,a_ as z,p as H,o as W,bs as M,aO as I,bE as K,aH as X,F as G,aK as J,bv as Q,bx as Y,z as Z,e as ee,bF as te,a5 as ae,aW as se,bG as le,bn as oe,bd as ne,ao as re,aB as ie,b2 as ue,w as de,ah as ce}from"./main-dae0909e.js";import"./index-9f7f807c.js";import"./index-3046e463.js";import"./validator-4df8a5b9.js";function pe(e){return b(e,5)}const fe=e({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:t(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:t([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:t(Function),default:e=>`${e}%`}}),me=["aria-valuenow"],ve={viewBox:"0 0 100 100"},ye=["d","stroke","stroke-width"],ge=["d","stroke","opacity","stroke-linecap","stroke-width"],he={key:0},be=U({name:"ElProgress"});const ke=d(u(U({...be,props:fe,setup(e){const t=e,u={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},d=a("progress"),c=C((()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:F(t.percentage)}))),p=C((()=>(t.strokeWidth/t.width*100).toFixed(1))),f=C((()=>["circle","dashboard"].includes(t.type)?Number.parseInt(""+(50-Number.parseFloat(p.value)/2),10):0)),m=C((()=>{const e=f.value,a="dashboard"===t.type;return`\n          M 50 50\n          m 0 ${a?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${a?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${a?"":"-"}${2*e}\n          `})),v=C((()=>2*Math.PI*f.value)),y=C((()=>"dashboard"===t.type?.75:1)),g=C((()=>`${-1*v.value*(1-y.value)/2}px`)),h=C((()=>({strokeDasharray:`${v.value*y.value}px, ${v.value}px`,strokeDashoffset:g.value}))),b=C((()=>({strokeDasharray:`${v.value*y.value*(t.percentage/100)}px, ${v.value}px`,strokeDashoffset:g.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),k=C((()=>{let e;return e=t.color?F(t.percentage):u[t.status]||u.default,e})),w=C((()=>"warning"===t.status?s:"line"===t.type?"success"===t.status?l:o:"success"===t.status?n:r)),x=C((()=>"line"===t.type?12+.4*t.strokeWidth:.111111*t.width+2)),$=C((()=>t.format(t.percentage)));const F=e=>{var a;const{color:s}=t;if(j(s))return s(e);if(P(s))return s;{const t=function(e){const t=100/e.length;return e.map(((e,a)=>P(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(s);for(const a of t)if(a.percentage>e)return a.color;return null==(a=t[t.length-1])?void 0:a.color}};return(e,t)=>(V(),B("div",{class:D([N(d).b(),N(d).m(e.type),N(d).is(e.status),{[N(d).m("without-text")]:!e.showText,[N(d).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(V(),B("div",{key:0,class:D(N(d).b("bar"))},[O("div",{class:D(N(d).be("bar","outer")),style:q({height:`${e.strokeWidth}px`})},[O("div",{class:D([N(d).be("bar","inner"),{[N(d).bem("bar","inner","indeterminate")]:e.indeterminate},{[N(d).bem("bar","inner","striped")]:e.striped},{[N(d).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:q(N(c))},[(e.showText||e.$slots.default)&&e.textInside?(V(),B("div",{key:0,class:D(N(d).be("bar","innerText"))},[A(e.$slots,"default",{percentage:e.percentage},(()=>[O("span",null,z(N($)),1)]))],2)):H("v-if",!0)],6)],6)],2)):(V(),B("div",{key:1,class:D(N(d).b("circle")),style:q({height:`${e.width}px`,width:`${e.width}px`})},[(V(),B("svg",ve,[O("path",{class:D(N(d).be("circle","track")),d:N(m),stroke:`var(${N(d).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":N(p),fill:"none",style:q(N(h))},null,14,ye),O("path",{class:D(N(d).be("circle","path")),d:N(m),stroke:N(k),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":N(p),style:q(N(b))},null,14,ge)]))],6)),!e.showText&&!e.$slots.default||e.textInside?H("v-if",!0):(V(),B("div",{key:2,class:D(N(d).e("text")),style:q({fontSize:`${N(x)}px`})},[A(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(V(),W(N(i),{key:1},{default:M((()=>[(V(),W(I(N(w))))])),_:1})):(V(),B("span",he,z(N($)),1))]))],6))],10,me))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]])),we=Symbol("uploadContextKey");class xe extends Error{constructor(e,t,a,s){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=s}}function $e(e,t,a){let s;return s=a.response?`${a.response.error||a.response}`:a.responseText?`${a.responseText}`:`fail to ${t.method} ${e} ${a.status}`,new xe(s,a.status,t.method,e)}const Fe=["text","picture","picture-card"];let _e=1;const Ee=()=>Date.now()+_e++,Re=e({action:{type:String,default:"#"},headers:{type:t(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>c({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:t(Array),default:()=>c([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:Fe,default:"text"},httpRequest:{type:t(Function),default:e=>{"undefined"==typeof XMLHttpRequest&&k("ElUpload","XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=e.action;t.upload&&t.upload.addEventListener("progress",(t=>{const a=t;a.percent=t.total>0?t.loaded/t.total*100:0,e.onProgress(a)}));const s=new FormData;if(e.data)for(const[o,n]of Object.entries(e.data))Array.isArray(n)?s.append(o,...n):s.append(o,n);s.append(e.filename,e.file,e.file.name),t.addEventListener("error",(()=>{e.onError($e(a,e,t))})),t.addEventListener("load",(()=>{if(t.status<200||t.status>=300)return e.onError($e(a,e,t));e.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(a){return t}}(t))})),t.open(e.method,a,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const l=e.headers||{};if(l instanceof Headers)l.forEach(((e,a)=>t.setRequestHeader(a,e)));else for(const[o,n]of Object.entries(l))w(n)||t.setRequestHeader(o,String(n));return t.send(s),t}},disabled:Boolean,limit:Number}),Se=e({...Re,beforeUpload:{type:t(Function),default:K},beforeRemove:{type:t(Function)},onRemove:{type:t(Function),default:K},onChange:{type:t(Function),default:K},onPreview:{type:t(Function),default:K},onSuccess:{type:t(Function),default:K},onProgress:{type:t(Function),default:K},onError:{type:t(Function),default:K},onExceed:{type:t(Function),default:K}}),Te=e({files:{type:t(Array),default:()=>c([])},disabled:{type:Boolean,default:!1},handlePreview:{type:t(Function),default:K},listType:{type:String,values:Fe,default:"text"}}),Le=["onKeydown"],Ue=["src"],Ce=["onClick"],je=["onClick"],Pe=["onClick"],Ve=U({name:"ElUploadList"});var Be=u(U({...Ve,props:Te,emits:{remove:e=>!!e},setup(e,{emit:t}){const{t:s}=p(),o=a("upload"),u=a("icon"),d=a("list"),c=f(),g=X(!1),h=e=>{t("remove",e)};return(e,t)=>(V(),W(ee,{tag:"ul",class:D([N(o).b("list"),N(o).bm("list",e.listType),N(o).is("disabled",N(c))]),name:N(d).b()},{default:M((()=>[(V(!0),B(G,null,J(e.files,(a=>(V(),B("li",{key:a.uid||a.name,class:D([N(o).be("list","item"),N(o).is(a.status),{focusing:g.value}]),tabindex:"0",onKeydown:Q((e=>!N(c)&&h(a)),["delete"]),onFocus:t[0]||(t[0]=e=>g.value=!0),onBlur:t[1]||(t[1]=e=>g.value=!1),onClick:t[2]||(t[2]=e=>g.value=!1)},[A(e.$slots,"default",{file:a},(()=>["picture"===e.listType||"uploading"!==a.status&&"picture-card"===e.listType?(V(),B("img",{key:0,class:D(N(o).be("list","item-thumbnail")),src:a.url,alt:""},null,10,Ue)):H("v-if",!0),"uploading"===a.status||"picture-card"!==e.listType?(V(),B("div",{key:1,class:D(N(o).be("list","item-info"))},[O("a",{class:D(N(o).be("list","item-name")),onClick:Y((t=>e.handlePreview(a)),["prevent"])},[Z(N(i),{class:D(N(u).m("document"))},{default:M((()=>[Z(N(m))])),_:1},8,["class"]),O("span",{class:D(N(o).be("list","item-file-name"))},z(a.name),3)],10,Ce),"uploading"===a.status?(V(),W(N(ke),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(a.percentage),style:q("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):H("v-if",!0)],2)):H("v-if",!0),O("label",{class:D(N(o).be("list","item-status-label"))},["text"===e.listType?(V(),W(N(i),{key:0,class:D([N(u).m("upload-success"),N(u).m("circle-check")])},{default:M((()=>[Z(N(l))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?(V(),W(N(i),{key:1,class:D([N(u).m("upload-success"),N(u).m("check")])},{default:M((()=>[Z(N(n))])),_:1},8,["class"])):H("v-if",!0)],2),N(c)?H("v-if",!0):(V(),W(N(i),{key:2,class:D(N(u).m("close")),onClick:e=>h(a)},{default:M((()=>[Z(N(r))])),_:2},1032,["class","onClick"])),H(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),H(" This is a bug which needs to be fixed "),H(" TODO: Fix the incorrect navigation interaction "),N(c)?H("v-if",!0):(V(),B("i",{key:3,class:D(N(u).m("close-tip"))},z(N(s)("el.upload.deleteTip")),3)),"picture-card"===e.listType?(V(),B("span",{key:4,class:D(N(o).be("list","item-actions"))},[O("span",{class:D(N(o).be("list","item-preview")),onClick:t=>e.handlePreview(a)},[Z(N(i),{class:D(N(u).m("zoom-in"))},{default:M((()=>[Z(N(v))])),_:1},8,["class"])],10,je),N(c)?H("v-if",!0):(V(),B("span",{key:0,class:D(N(o).be("list","item-delete")),onClick:e=>h(a)},[Z(N(i),{class:D(N(u).m("delete"))},{default:M((()=>[Z(N(y))])),_:1},8,["class"])],10,Pe))],2)):H("v-if",!0)]))],42,Le)))),128)),A(e.$slots,"append")])),_:3},8,["class","name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const De=e({disabled:{type:Boolean,default:!1}}),Ne={file:e=>te(e)},Oe=["onDrop","onDragover"],qe="ElUploadDrag",Ae=U({name:qe});var ze=u(U({...Ae,props:De,emits:Ne,setup(e,{emit:t}){const s=ae(we);s||k(qe,"usage: <el-upload><el-upload-dragger /></el-upload>");const l=a("upload"),o=X(!1),n=f(),r=e=>{if(n.value)return;o.value=!1,e.stopPropagation();const a=Array.from(e.dataTransfer.files),l=s.accept.value;if(!l)return void t("file",a);const r=a.filter((e=>{const{type:t,name:a}=e,s=a.includes(".")?`.${a.split(".").pop()}`:"",o=t.replace(/\/.*$/,"");return l.split(",").map((e=>e.trim())).filter((e=>e)).some((e=>e.startsWith(".")?s===e:/\/\*$/.test(e)?o===e.replace(/\/\*$/,""):!!/^[^/]+\/[^/]+$/.test(e)&&t===e))}));t("file",r)},i=()=>{n.value||(o.value=!0)};return(e,t)=>(V(),B("div",{class:D([N(l).b("dragger"),N(l).is("dragover",o.value)]),onDrop:Y(r,["prevent"]),onDragover:Y(i,["prevent"]),onDragleave:t[0]||(t[0]=Y((e=>o.value=!1),["prevent"]))},[A(e.$slots,"default")],42,Oe))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const He=e({...Re,beforeUpload:{type:t(Function),default:K},onRemove:{type:t(Function),default:K},onStart:{type:t(Function),default:K},onSuccess:{type:t(Function),default:K},onProgress:{type:t(Function),default:K},onError:{type:t(Function),default:K},onExceed:{type:t(Function),default:K}}),We=["onKeydown"],Me=["name","multiple","accept"],Ie=U({name:"ElUploadContent",inheritAttrs:!1});var Ke=u(U({...Ie,props:He,setup(e,{expose:t}){const s=e,l=a("upload"),o=f(),n=se({}),r=se(),i=e=>{if(0===e.length)return;const{autoUpload:t,limit:a,fileList:l,multiple:o,onStart:n,onExceed:r}=s;if(a&&l.length+e.length>a)r(e,l);else{o||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=Ee(),n(e),t&&u(e)}}},u=async e=>{if(r.value.value="",!s.beforeUpload)return d(e);let t,a={};try{const l=s.data,o=s.beforeUpload(e);a=le(s.data)?pe(s.data):s.data,t=await o,le(s.data)&&R(l,a)&&(a=pe(s.data))}catch(o){t=!1}if(!1===t)return void s.onRemove(e);let l=e;t instanceof Blob&&(l=t instanceof File?t:new File([t],e.name,{type:e.type})),d(Object.assign(l,{uid:e.uid}),a)},d=(e,t)=>{const{headers:a,data:l,method:o,withCredentials:r,name:i,action:u,onProgress:d,onSuccess:c,onError:p,httpRequest:f}=s,{uid:m}=e,v={headers:a||{},withCredentials:r,file:e,data:null!=t?t:l,method:o,filename:i,action:u,onProgress:t=>{d(t,e)},onSuccess:t=>{c(t,e),delete n.value[m]},onError:t=>{p(t,e),delete n.value[m]}},y=f(v);n.value[m]=y,y instanceof Promise&&y.then(v.onSuccess,v.onError)},c=e=>{const t=e.target.files;t&&i(Array.from(t))},p=()=>{o.value||(r.value.value="",r.value.click())},m=()=>{p()};return t({abort:e=>{g(n.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete n.value[e]}))},upload:u}),(e,t)=>(V(),B("div",{class:D([N(l).b(),N(l).m(e.listType),N(l).is("drag",e.drag)]),tabindex:"0",onClick:p,onKeydown:Q(Y(m,["self"]),["enter","space"])},[e.drag?(V(),W(ze,{key:0,disabled:N(o),onFile:i},{default:M((()=>[A(e.$slots,"default")])),_:3},8,["disabled"])):A(e.$slots,"default",{key:1}),O("input",{ref_key:"inputRef",ref:r,class:D(N(l).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:c,onClick:t[0]||(t[0]=Y((()=>{}),["stop"]))},null,42,Me)],42,We))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const Xe="ElUpload",Ge=(e,t)=>{const a=h(e,"fileList",void 0,{passive:!0}),s=e=>a.value.find((t=>t.uid===e.uid));function l(e){var a;null==(a=t.value)||a.abort(e)}return oe((()=>e.listType),(t=>{"picture-card"!==t&&"picture"!==t||(a.value=a.value.map((t=>{const{raw:s,url:l}=t;if(!l&&s)try{t.url=URL.createObjectURL(s)}catch(o){e.onError(o,t,a.value)}return t})))})),oe(a,(e=>{for(const t of e)t.uid||(t.uid=Ee()),t.status||(t.status="success")}),{immediate:!0,deep:!0}),{uploadFiles:a,abort:l,clearFiles:function(e=["ready","uploading","success","fail"]){a.value=a.value.filter((t=>!e.includes(t.status)))},handleError:(t,l)=>{const o=s(l);o&&(o.status="fail",a.value.splice(a.value.indexOf(o),1),e.onError(t,o,a.value),e.onChange(o,a.value))},handleProgress:(t,l)=>{const o=s(l);o&&(e.onProgress(t,o,a.value),o.status="uploading",o.percentage=Math.round(t.percent))},handleStart:t=>{w(t.uid)&&(t.uid=Ee());const s={name:t.name,percentage:0,status:"ready",size:t.size,raw:t,uid:t.uid};if("picture-card"===e.listType||"picture"===e.listType)try{s.url=URL.createObjectURL(t)}catch(l){x(Xe,l.message),e.onError(l,s,a.value)}a.value=[...a.value,s],e.onChange(s,a.value)},handleSuccess:(t,l)=>{const o=s(l);o&&(o.status="success",o.response=t,e.onSuccess(t,o,a.value),e.onChange(o,a.value))},handleRemove:async t=>{const o=t instanceof File?s(t):t;o||k(Xe,"file to be removed not found");const n=t=>{l(t);const s=a.value;s.splice(s.indexOf(t),1),e.onRemove(t,s),(e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)})(t)};if(e.beforeRemove){!1!==await e.beforeRemove(o,a.value)&&n(o)}else n(o)},submit:function(){a.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var a;return e&&(null==(a=t.value)?void 0:a.upload(e))}))}}},Je=U({name:"ElUpload"});const Qe=d(u(U({...Je,props:Se,setup(e,{expose:t}){const a=e,s=ne(),l=f(),o=se(),{abort:n,submit:r,clearFiles:i,uploadFiles:u,handleStart:d,handleError:c,handleRemove:p,handleSuccess:m,handleProgress:v}=Ge(a,o),y=C((()=>"picture-card"===a.listType)),g=C((()=>({...a,fileList:u.value,onStart:d,onProgress:v,onSuccess:m,onError:c,onRemove:p})));return re((()=>{u.value.forEach((({url:e})=>{(null==e?void 0:e.startsWith("blob:"))&&URL.revokeObjectURL(e)}))})),ie(we,{accept:ue(a,"accept")}),t({abort:n,submit:r,clearFiles:i,handleStart:d,handleRemove:p}),(e,t)=>(V(),B("div",null,[N(y)&&e.showFileList?(V(),W(Be,{key:0,disabled:N(l),"list-type":e.listType,files:N(u),"handle-preview":e.onPreview,onRemove:N(p)},de({append:M((()=>[Z(Ke,ce({ref_key:"uploadRef",ref:o},N(g)),{default:M((()=>[N(s).trigger?A(e.$slots,"trigger",{key:0}):H("v-if",!0),!N(s).trigger&&N(s).default?A(e.$slots,"default",{key:1}):H("v-if",!0)])),_:3},16)])),_:2},[e.$slots.file?{name:"default",fn:M((({file:t})=>[A(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):H("v-if",!0),!N(y)||N(y)&&!e.showFileList?(V(),W(Ke,ce({key:1,ref_key:"uploadRef",ref:o},N(g)),{default:M((()=>[N(s).trigger?A(e.$slots,"trigger",{key:0}):H("v-if",!0),!N(s).trigger&&N(s).default?A(e.$slots,"default",{key:1}):H("v-if",!0)])),_:3},16)):H("v-if",!0),e.$slots.trigger?A(e.$slots,"default",{key:2}):H("v-if",!0),A(e.$slots,"tip"),!N(y)&&e.showFileList?(V(),W(Be,{key:3,disabled:N(l),"list-type":e.listType,files:N(u),"handle-preview":e.onPreview,onRemove:N(p)},de({_:2},[e.$slots.file?{name:"default",fn:M((({file:t})=>[A(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):H("v-if",!0)]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]])),Ye={class:"w-214"},Ze={class:"w-214"},et={class:"w-214"},tt=["src"],at={key:1,class:"goods-img-upload"},st=U({__name:"q-goods-set",props:{data:{type:Object,default:{}}},setup(e){const t=e,a=X([]),s=X([{id:1,tagName:"促销"},{id:2,tagName:"新品"}]);return oe(a.value,(e=>{e&&(t.data.thumb=e[0]&&e[0].url)}),{deep:!0}),(t,l)=>{const o=F,n=_,r=L,i=S,u=T,d=E,c=Qe,p=$;return V(),B("div",null,[Z(p,{model:e.data,"label-position":"right","label-width":"80px"},{default:M((()=>[Z(n,{label:"商品名称"},{default:M((()=>[Z(o,{class:"w-214",modelValue:e.data.goodsName,"onUpdate:modelValue":l[0]||(l[0]=t=>e.data.goodsName=t),clearable:"",maxlength:"200"},null,8,["modelValue"])])),_:1}),Z(n,{label:"商品描述"},{default:M((()=>[Z(o,{class:"w-214",modelValue:e.data.desc,"onUpdate:modelValue":l[1]||(l[1]=t=>e.data.desc=t),clearable:"",maxlength:"200"},null,8,["modelValue"])])),_:1}),Z(n,{label:"库存"},{default:M((()=>[O("div",Ye,[Z(r,{modelValue:e.data.num,"onUpdate:modelValue":l[2]||(l[2]=t=>e.data.num=t),min:0,max:9999,step:1},null,8,["modelValue"])])])),_:1}),Z(n,{label:"现价"},{default:M((()=>[O("div",Ze,[Z(o,{class:"w-214",modelValue:e.data.price,"onUpdate:modelValue":l[3]||(l[3]=t=>e.data.price=t),clearable:"",maxlength:"200"},null,8,["modelValue"])])])),_:1}),Z(n,{label:"原价"},{default:M((()=>[O("div",et,[Z(o,{class:"w-214",modelValue:e.data.originPrice,"onUpdate:modelValue":l[4]||(l[4]=t=>e.data.originPrice=t),clearable:"",maxlength:"200"},null,8,["modelValue"])])])),_:1}),Z(n,{label:"商品标签"},{default:M((()=>[Z(u,{modelValue:e.data.tags,"onUpdate:modelValue":l[5]||(l[5]=t=>e.data.tags=t),multiple:"",placeholder:"商品标签"},{default:M((()=>[(V(!0),B(G,null,J(s.value,(e=>(V(),W(i,{label:e.tagName,value:e.tagName,key:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),Z(n,{label:"商品图片"},{default:M((()=>[Z(c,{"file-list":a.value,"onUpdate:fileList":l[6]||(l[6]=e=>a.value=e),action:"#",limit:1,"show-file-list":!1},{default:M((()=>[e.data.thumb?(V(),B("img",{key:0,src:e.data.thumb,class:"goods-img-preview"},null,8,tt)):(V(),B("div",at,[Z(d,{name:"q-drag-yunduanshangchuan",size:"40",color:"#939393"})]))])),_:1},8,["file-list"])])),_:1})])),_:1},8,["model"])])}}});export{st as default};
