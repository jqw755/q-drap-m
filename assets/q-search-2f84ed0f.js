/* empty css              */import{G as a,aF as e,az as l,q as n,z as o,b7 as t,aj as r,bE as s}from"./main-5c507d8b.js";const d=a({name:"QSearch",props:{data:{type:Object,default:{}}},setup(a){const d=a,{data:p}=d,u=()=>{const a=p.eventName;a&&c[a]&&c[a]()},c=e({getList:()=>{alert(`根据${p.value}查询`)}});return(a,e)=>{const d=s;return l(),n("div",{class:r({"is-topping":t(p).topping})},[o(d,{modelValue:t(p).value,"onUpdate:modelValue":e[0]||(e[0]=a=>t(p).value=a),clearable:!1,placeholder:t(p).placeholder,"input-align":t(p).align,background:t(p).background,readonly:t(p).readonly,onSearch:u},null,8,["modelValue","placeholder","input-align","background","readonly"])],2)}}});export{d as default};
