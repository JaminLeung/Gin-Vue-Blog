import{ad as j,J as T,K as y,ae as _,Q as u,R as B,O as m,a6 as g,v as a,N as h,a4 as S,U as R,aV as w,bQ as I,I as P,ap as f,a0 as C,M as N,bU as $,r as U,av as V,bV as F,bz as K,ac as E,bW as M,V as x}from"./index-f53dfd2d.js";import{u as b}from"./Input-d1b207b8.js";const z=j("n-popconfirm"),O={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},k=I(O),W=T({name:"NPopconfirmPanel",props:O,setup(e){const{localeRef:t}=b("Popconfirm"),{inlineThemeDisabled:s}=y(),{mergedClsPrefixRef:n,mergedThemeRef:p,props:l}=_(z),d=u(()=>{const{common:{cubicBezierEaseInOut:i},self:{fontSize:c,iconSize:v,iconColor:r}}=p.value;return{"--n-bezier":i,"--n-font-size":c,"--n-icon-size":v,"--n-icon-color":r}}),o=s?B("popconfirm-panel",void 0,d,l):void 0;return Object.assign(Object.assign({},b("Popconfirm")),{mergedClsPrefix:n,cssVars:s?void 0:d,localizedPositiveText:u(()=>e.positiveText||t.value.positiveText),localizedNegativeText:u(()=>e.negativeText||t.value.negativeText),positiveButtonProps:m(l,"positiveButtonProps"),negativeButtonProps:m(l,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:s,$slots:n}=this,p=g(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(h,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(h,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},S(n.default,l=>s||l?a("div",{class:`${t}-popconfirm__body`},s?a("div",{class:`${t}-popconfirm__icon`},g(n.icon,()=>[a(R,{clsPrefix:t},{default:()=>a(w,null)})])):null,l):null),p?a("div",{class:[`${t}-popconfirm__action`]},p):null)}}),q=P("popconfirm",[f("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[f("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),f("action",`
 display: flex;
 justify-content: flex-end;
 `,[C("&:not(:first-child)","margin-top: 8px"),P("button",[C("&:not(:last-child)","margin-right: 8px;")])])]),L=Object.assign(Object.assign(Object.assign({},N.props),M),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),H=T({name:"Popconfirm",props:L,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=y(),s=N("Popconfirm","-popconfirm",q,$,e,t),n=U(null);function p(o){const{onPositiveClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&x(c,!1))})}function l(o){const{onNegativeClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&x(c,!1))})}return V(z,{mergedThemeRef:s,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(o){var i;(i=n.value)===null||i===void 0||i.setShow(o)},syncPosition(){var o;(o=n.value)===null||o===void 0||o.syncPosition()}}),{mergedTheme:s,popoverInstRef:n,handlePositiveClick:p,handleNegativeClick:l})},render(){const{$slots:e,$props:t,mergedTheme:s}=this;return a(E,K(t,k,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=F(t,k);return a(W,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{H as N};