import{_ as f}from"./BannerPage.vue_vue_type_script_setup_true_lang.795607c4.js";import{d as p,r,o as x,K as g,m as h,A as s,q as l,b as a,f as i,i as _,c as v,z as b,J as y,y as k,F as B,_ as $}from"./index.6f29a4b3.js";import"./AppFooter.ffaf2bc6.js";import"./Spin.e91a07b4.js";const M={"text-center":"","leading-20":"","mb-8rem":"","text-25":"","mt-10":"",lg:"text-36"},z={"text-center":""},C=p({__name:"index",setup(S){let n=r(!0),t=r({});x(()=>{g.getTags().then(o=>{t.value=o.data.list,n.value=!1})});function c(){return Math.floor(Math.random()*16)+15}function d(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}return(o,E)=>{const u=h("router-link"),m=f;return a(),s(m,{loading:n.value,title:"\u6807\u7B7E",label:"tag",card:""},{default:l(()=>[i("h2",M," \u6807\u7B7E - "+_(t.value.length),1),i("div",z,[(a(!0),v(B,null,b(t.value,e=>(a(),s(u,{key:e.id,to:`tags/${e.id}?name=${e.name}`,style:y({"font-size":`${c()}px`,color:`${d()}`}),"px-8":"","text-8xl":"","leading-45":"","inline-block":"","transition-300":"","i_hover:text-lightblue":"","hover:scale-130":""},{default:l(()=>[k(_(e.name),1)]),_:2},1032,["to","style"]))),128))])]),_:1},8,["loading"])}}});const V=$(C,[["__scopeId","data-v-c7bbfef5"]]);export{V as default};
