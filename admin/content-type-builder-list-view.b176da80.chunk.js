"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5905],{8317:(_,j,a)=>{a.r(j),a.d(j,{default:()=>ln});var e=a(67294),d=a(68547),m=a(96315),M=a(67109),P=a(85018),$=a(4585),I=a(29728),k=a(46273),f=a(7681),s=a(35961),v=a(67838),J=a(49066),ee=a(27361),Z=a.n(ee),te=a(18721),Q=a.n(te),de=a(18446),ne=a.n(de),pe=a(11700),H=a.n(pe),z=a(97132),F=a(49656),i=a(45697),r=a.n(i),l=a(72735),g=a(38939),L=a(8060),D=a(79031),A=a(37909),oe=a(49386),re=a(26478),U=a(13588),b=a(27821),E=a(5002),Ye=a(70968),qe=a(70982);const Ce=(0,b.default)(qe.G)`
  width: ${(0,d.pxToRem)(32)} !important;
  height: ${(0,d.pxToRem)(32)} !important;
  padding: ${(0,d.pxToRem)(9)};
  border-radius: ${(0,d.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.neutral150};
  path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,we=b.default.div`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,d.pxToRem)(8)};

  svg {
    width: ${(0,d.pxToRem)(10)};
    height: ${(0,d.pxToRem)(10)};
    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,_e=(0,b.default)(s.x)`
  flex-shrink: 0;
  width: ${(0,d.pxToRem)(140)};
  height: ${(0,d.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${we} {
      display: block;
    }

    ${Ce} {
      background: ${({theme:t})=>t.colors.primary200};
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }

    ${l.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,et=(0,b.default)(f.K)`
  align-items: center;
`;function ue({component:t,dzName:n,index:o,isActive:c,isInDevelopmentMode:y,onClick:u}){const{modifiedData:T,removeComponentFromDynamicZone:R}=(0,U.Z)(),{schema:{icon:h,displayName:x}}=Z()(T,["components",t],{schema:{icon:null}}),C=p=>{p.stopPropagation(),R(n,o)};return e.createElement("button",{type:"button",onClick:u},e.createElement(_e,{className:c?"active":"",borderRadius:"borderRadius",paddingLeft:4,paddingRight:4},e.createElement(et,{spacing:1},e.createElement(Ce,{icon:h||"dice-d6"}),e.createElement(s.x,{maxWidth:`calc(${(0,d.pxToRem)(140)} - 32px)`},e.createElement(l.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},x))),y&&e.createElement(we,{role:"button",tabIndex:0,onKeyDown:p=>(p.key==="Enter"||p.key===" ")&&C(p),onClick:C},e.createElement(Ye.default,null))))}ue.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},ue.propTypes={component:r().string,dzName:r().string.isRequired,index:r().number.isRequired,isActive:r().bool,isInDevelopmentMode:r().bool,onClick:r().func};const tt=ue,xe=b.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,d.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,d.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:t?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function me({customRowComponent:t,component:n,isFromDynamicZone:o,isNestedInDZComponent:c,firstLoopComponentUid:y}){const{modifiedData:u}=(0,U.Z)(),{schema:{attributes:T}}=Z()(u,["components",n],{schema:{attributes:[]}});return e.createElement(xe,{isChildOfDynamicZone:o,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Ie,{customRowComponent:t,items:T,targetUid:n,firstLoopComponentUid:y||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:c,isSub:!0,secondLoopComponentUid:y?n:null})))}me.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},me.propTypes={component:r().string,customRowComponent:r().func,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool};const Oe=me;var nt=Object.defineProperty,ot=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Re=(t,n,o)=>n in t?nt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,it=(t,n)=>{for(var o in n||(n={}))at.call(n,o)&&Re(t,o,n[o]);if(Pe)for(var o of Pe(n))lt.call(n,o)&&Re(t,o,n[o]);return t},st=(t,n)=>ot(t,rt(n));const ct=(0,b.default)(m.default)`
  width: ${(0,d.pxToRem)(32)};
  height: ${(0,d.pxToRem)(32)};
  padding: ${(0,d.pxToRem)(9)};
  border-radius: ${(0,d.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,dt=(0,b.default)(s.x)`
  height: ${(0,d.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,pt=(0,b.default)(f.K)`
  width: 100%;
  overflow-x: auto;
`,ut=(0,b.default)(s.x)`
  padding-top: ${(0,d.pxToRem)(90)};
`,mt=(0,b.default)(f.K)`
  flex-shrink: 0;
  width: ${(0,d.pxToRem)(140)};
  height: ${(0,d.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function fe({customRowComponent:t,components:n,addComponent:o,name:c,targetUid:y}){const{isInDevelopmentMode:u}=(0,U.Z)(),[T,R]=(0,e.useState)(0),{formatMessage:h}=(0,z.useIntl)(),x=p=>{T!==p&&R(p)},C=()=>{o(c)};return e.createElement(xe,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(dt,{paddingLeft:8},e.createElement(pt,{horizontal:!0,spacing:2},u&&e.createElement("button",{type:"button",onClick:C},e.createElement(mt,{spacing:1},e.createElement(ct,null),e.createElement(l.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},h({id:(0,E.Z)("button.component.add"),formatMessage:"Add a component"})))),n.map((p,w)=>e.createElement(tt,{key:p,dzName:c,index:w,component:p,isActive:T===w,isInDevelopmentMode:u,onClick:()=>x(w)})))),e.createElement(ut,null,n.map((p,w)=>{const O={customRowComponent:t,component:p};return e.createElement(s.x,{tabId:`${w}`,key:p,style:{display:T===w?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Oe,st(it({},O),{isFromDynamicZone:!0,targetUid:y,key:p})))))}))))}fe.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},fe.propTypes={addComponent:r().func,components:r().instanceOf(Array),customRowComponent:r().func,name:r().string,targetUid:r().string.isRequired};const ft=fe,gt=(0,b.default)(s.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;var yt=Object.defineProperty,ae=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Ze=(t,n,o)=>n in t?yt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,vt=(t,n)=>{for(var o in n||(n={}))Le.call(n,o)&&Ze(t,o,n[o]);if(ae)for(var o of ae(n))$e.call(n,o)&&Ze(t,o,n[o]);return t},ht=(t,n)=>{var o={};for(var c in t)Le.call(t,c)&&n.indexOf(c)<0&&(o[c]=t[c]);if(t!=null&&ae)for(var c of ae(t))n.indexOf(c)<0&&$e.call(t,c)&&(o[c]=t[c]);return o};const bt=(0,b.default)(s.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:n})=>t.colors[`${n}600`]};
  }
`,Et=(0,b.default)(s.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Me=t=>{var n=t,{children:o,icon:c,color:y}=n,u=ht(n,["children","icon","color"]);return e.createElement(Et,vt({paddingBottom:4,paddingTop:4,as:"button",type:"button"},u),e.createElement(k.k,null,e.createElement(bt,{color:y,"aria-hidden":!0,background:`${y}200`},c),e.createElement(s.x,{paddingLeft:3},e.createElement(l.Z,{variant:"pi",fontWeight:"bold",textColor:`${y}600`},o))))};Me.propTypes={color:r().string.isRequired,children:r().string.isRequired,icon:r().node.isRequired};const Tt=Me;var Ct=Object.defineProperty,wt=Object.defineProperties,xt=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,Ot=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,De=(t,n,o)=>n in t?Ct(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,le=(t,n)=>{for(var o in n||(n={}))Ot.call(n,o)&&De(t,o,n[o]);if(Ae)for(var o of Ae(n))Pt.call(n,o)&&De(t,o,n[o]);return t},ge=(t,n)=>wt(t,xt(n));function ye({addComponentToDZ:t,customRowComponent:n,editTarget:o,firstLoopComponentUid:c,isFromDynamicZone:y,isMain:u,isNestedInDZComponent:T,isSub:R,items:h,secondLoopComponentUid:x,targetUid:C}){const{formatMessage:p}=(0,z.useIntl)(),{trackUsage:w}=(0,d.useTracking)(),{isInDevelopmentMode:O,modifiedData:G,isInContentTypeView:N}=(0,U.Z)(),{onOpenModalAddField:W}=(0,re.Z)(),B=()=>{w("hasClickedCTBAddFieldBanner"),W({forTarget:o,targetUid:C})};return C?h.length===0&&u?e.createElement(g.i,{colCount:2,rowCount:2},e.createElement(L.h,null,e.createElement(D.Tr,null,e.createElement(A.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),e.createElement(A.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.type",defaultMessage:"Type"}))))),e.createElement(d.EmptyBodyTable,{action:e.createElement(I.z,{onClick:B,size:"L",startIcon:e.createElement(m.default,null),variant:"secondary"},p({id:(0,E.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:N?{id:(0,E.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,E.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(gt,null,e.createElement(s.x,le({paddingLeft:6,paddingRight:u?6:0},u&&{style:{overflowX:"auto"}}),e.createElement("table",null,u&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,h.map(V=>{const{type:X}=V,Y=n;return e.createElement(e.Fragment,{key:V.name},e.createElement(Y,ge(le({},V),{isNestedInDZComponent:T,targetUid:C,editTarget:o,firstLoopComponentUid:c,isFromDynamicZone:y,secondLoopComponentUid:x})),X==="component"&&e.createElement(Oe,ge(le({},V),{customRowComponent:n,targetUid:C,isNestedInDZComponent:y,editTarget:o,firstLoopComponentUid:c})),X==="dynamiczone"&&e.createElement(ft,ge(le({},V),{customRowComponent:n,addComponent:t,targetUid:C})))})))),u&&O&&e.createElement(oe.c,{icon:e.createElement(m.default,null),onClick:B},p({id:(0,E.Z)(`form.button.add.field.to.${G.contentType?G.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})),R&&O&&e.createElement(Tt,{icon:e.createElement(m.default,null),onClick:B,color:y?"primary":"neutral"},p({id:(0,E.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(g.i,{colCount:2,rowCount:2},e.createElement(L.h,null,e.createElement(D.Tr,null,e.createElement(A.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),e.createElement(A.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.type",defaultMessage:"Type"}))))),e.createElement(d.EmptyBodyTable,{colSpan:2,content:{id:(0,E.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}ye.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},ye.propTypes={addComponentToDZ:r().func,customRowComponent:r().func,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool,isMain:r().bool,items:r().instanceOf(Array),secondLoopComponentUid:r().string,targetUid:r().string,isSub:r().bool};const Ie=ye;var je=a(12028),Rt=Object.defineProperty,Be=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,Se=(t,n,o)=>n in t?Rt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Zt=(t,n)=>{for(var o in n||(n={}))Lt.call(n,o)&&Se(t,o,n[o]);if(Be)for(var o of Be(n))$t.call(n,o)&&Se(t,o,n[o]);return t};function Mt(t){return e.createElement("svg",Zt({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",fill:"#8E8EA9"}))}var At=a(20022),Dt=Object.defineProperty,ke=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,Fe=(t,n,o)=>n in t?Dt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Bt=(t,n)=>{for(var o in n||(n={}))It.call(n,o)&&Fe(t,o,n[o]);if(ke)for(var o of ke(n))jt.call(n,o)&&Fe(t,o,n[o]);return t};const St=(0,b.default)(s.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:n})=>t.colors[n]};
    display: block;
  }
`,kt=b.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ne=t=>e.createElement(St,null,e.createElement(kt,Bt({width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ne.propTypes={color:r().string.isRequired};const Ft=Ne,ve=({content:t})=>H()(t);ve.defaultProps={content:null},ve.propTypes={content:r().string};const Nt=ve,Vt=(0,b.default)(s.x)`
  position: relative;
`;var zt=a(66848);const he=({type:t,customField:n,repeatable:o})=>{const{formatMessage:c}=(0,z.useIntl)();let y=t;return["integer","biginteger","float","decimal"].includes(t)?y="number":["string"].includes(t)&&(y="text"),n?e.createElement(l.Z,null,c({id:(0,E.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(l.Z,null,c({id:(0,E.Z)(`attribute.${y}`),defaultMessage:t}),"\xA0",o&&c({id:(0,E.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};he.defaultProps={customField:null,repeatable:!1},he.propTypes={type:r().string.isRequired,customField:r().string,repeatable:r().bool};const Ut=he;var Wt=Object.defineProperty,Ve=Object.getOwnPropertySymbols,Kt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,ze=(t,n,o)=>n in t?Wt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Ue=(t,n)=>{for(var o in n||(n={}))Kt.call(n,o)&&ze(t,o,n[o]);if(Ve)for(var o of Ve(n))Ht.call(n,o)&&ze(t,o,n[o]);return t};function be({configurable:t,customField:n,editTarget:o,firstLoopComponentUid:c,isFromDynamicZone:y,name:u,onClick:T,relation:R,repeatable:h,secondLoopComponentUid:x,target:C,targetUid:p,type:w}){const{contentTypes:O,isInDevelopmentMode:G,removeAttribute:N}=(0,U.Z)(),{formatMessage:W}=(0,z.useIntl)(),B=w==="relation"&&R.includes("morph"),V=["integer","biginteger","float","decimal"].includes(w)?"number":w,X=Z()(O,[C],{}),Y=Z()(X,["schema","displayName"],""),q=Z()(X,"plugin"),Te=C?"relation":V,ie=()=>{B||t!==!1&&T(o,x||c||p,u,w,n)};let K;return x&&c?K=2:c?K=1:K=0,e.createElement(Vt,Ue({as:"tr"},(0,d.onRowClick)({fn:ie,condition:G&&t&&!B})),e.createElement("td",{style:{position:"relative"}},K!==0&&e.createElement(Ft,{color:y?"primary200":"neutral150"}),e.createElement(f.K,{paddingLeft:2,spacing:4,horizontal:!0},e.createElement(zt.Z,{type:Te,customField:n}),e.createElement(l.Z,{fontWeight:"bold"},u))),e.createElement("td",null,C?e.createElement(l.Z,null,W({id:(0,E.Z)(`modelPage.attribute.${B?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(Nt,{content:Y}),"\xA0",q&&`(${W({id:(0,E.Z)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(Ut,{type:w,customField:n,repeatable:h})),e.createElement("td",null,G?e.createElement(k.k,Ue({justifyContent:"flex-end"},d.stopPropagation),t?e.createElement(f.K,{horizontal:!0,spacing:1},!B&&e.createElement(je.h,{onClick:ie,label:`${W({id:"app.utils.edit",defaultMessage:"Edit"})} ${u}`,noBorder:!0,icon:e.createElement($.Z,null)}),e.createElement(je.h,{onClick:se=>{se.stopPropagation(),N(o,u,x||c||"")},label:`${W({id:"global.delete",defaultMessage:"Delete"})} ${u}`,noBorder:!0,icon:e.createElement(At.default,null)})):e.createElement(Mt,null)):e.createElement(s.x,{height:(0,d.pxToRem)(32)})))}be.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},be.propTypes={configurable:r().bool,customField:r().string,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,name:r().string.isRequired,onClick:r().func,relation:r().string,repeatable:r().bool,secondLoopComponentUid:r().string,target:r().string,targetUid:r().string,type:r().string};const Gt=(0,e.memo)(be),Xt=t=>{let n;switch(t){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=t}return n};var Jt=a(98432);const Qt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Ee=({disabled:t,isTemporary:n,isInContentTypeView:o,contentTypeKind:c,targetUid:y})=>{const{formatMessage:u}=(0,z.useIntl)(),{push:T}=(0,F.useHistory)(),{collectionTypesConfigurations:R,componentsConfigurations:h,singleTypesConfigurations:x}=Qt,C=u({id:"content-type-builder.form.button.configure-view"});let p=R;const w=()=>(n||T(o?`/content-manager/collectionType/${y}/configurations/edit`:`/content-manager/components/${y}/configurations/edit`),!1);return o&&c==="singleType"&&(p=x),o||(p=h),e.createElement(d.CheckPermissions,{permissions:p},e.createElement(I.z,{startIcon:e.createElement(Jt.Z,null),variant:"tertiary",onClick:w,disabled:n||t},C))};Ee.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},Ee.propTypes={disabled:r().bool.isRequired,contentTypeKind:r().string,isInContentTypeView:r().bool,isTemporary:r().bool,targetUid:r().string};const Yt=(0,e.memo)(Ee);var qt=Object.defineProperty,_t=Object.defineProperties,en=Object.getOwnPropertyDescriptors,We=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,Ke=(t,n,o)=>n in t?qt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,on=(t,n)=>{for(var o in n||(n={}))tn.call(n,o)&&Ke(t,o,n[o]);if(We)for(var o of We(n))nn.call(n,o)&&Ke(t,o,n[o]);return t},rn=(t,n)=>_t(t,en(n)),an=(t,n,o)=>new Promise((c,y)=>{var u=h=>{try{R(o.next(h))}catch(x){y(x)}},T=h=>{try{R(o.throw(h))}catch(x){y(x)}},R=h=>h.done?c(h.value):Promise.resolve(h.value).then(u,T);R((o=o.apply(t,n)).next())});const ln=()=>{const{initialData:t,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:c,submitData:y}=(0,U.Z)(),{formatMessage:u}=(0,z.useIntl)(),{trackUsage:T}=(0,d.useTracking)(),R=(0,F.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:h,onOpenModalAddField:x,onOpenModalEditField:C,onOpenModalEditSchema:p,onOpenModalEditCustomField:w}=(0,re.Z)(),O=c?"contentType":"component",G=[O,"schema","attributes"],N=Z()(n,[O,"uid"]),W=Z()(n,[O,"isTemporary"],!1),B=Z()(n,[O,"schema","kind"],null),V=Z()(n,G,[]),X=Q()(t,[O,"plugin"]),Y=!ne()(n,t),q=c?"contentType":"component",Te=S=>{h({dynamicZoneTarget:S,targetUid:N})},ie=(S,He,Ge,Xe,Je)=>an(void 0,null,function*(){const Qe=Xt(Xe);Je?w({forTarget:S,targetUid:He,attributeName:Ge,attributeType:Qe,customFieldUid:Je}):C({forTarget:S,targetUid:He,attributeName:Ge,attributeType:Qe,step:Xe==="component"?"2":null})});let K=Z()(n,[O,"schema","displayName"],"");const se=Z()(n,[O,"schema","kind"],""),ce=(R==null?void 0:R.params.currentUID)==="create-content-type";!K&&ce&&(K=u({id:(0,E.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const sn=()=>{const S=se||O;S==="collectionType"&&T("willEditNameOfContentType"),S==="singleType"&&T("willEditNameOfSingleType"),p({modalType:O,forTarget:O,targetUid:N,kind:S})};return e.createElement(e.Fragment,null,e.createElement(F.Prompt,{message:u({id:(0,E.Z)("prompt.unsaved")}),when:Y}),e.createElement(v.T,{id:"title",primaryAction:o&&e.createElement(f.K,{horizontal:!0,spacing:2},!ce&&e.createElement(I.z,{startIcon:e.createElement(m.default,null),variant:"secondary",onClick:()=>{x({forTarget:q,targetUid:N})}},u({id:(0,E.Z)("button.attributes.add.another")})),e.createElement(I.z,{startIcon:e.createElement(P.Z,null),onClick:()=>y(),type:"submit",disabled:ne()(n,t)},u({id:"global.save",defaultMessage:"Save"}))),secondaryAction:o&&!X&&!ce&&e.createElement(I.z,{startIcon:e.createElement($.Z,null),variant:"tertiary",onClick:sn},u({id:"app.utils.edit",defaultMessage:"Edit"})),title:H()(K),subtitle:u({id:(0,E.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(d.Link,{startIcon:e.createElement(M.Z,null),to:"/plugins/content-type-builder/"},u({id:"global.back",defaultMessage:"Back"}))}),e.createElement(J.D,null,e.createElement(f.K,{spacing:4},e.createElement(k.k,{justifyContent:"flex-end"},e.createElement(f.K,{horizontal:!0,spacing:2},e.createElement(Yt,{key:"link-to-cm-settings-view",targetUid:N,isTemporary:W,isInContentTypeView:c,contentTypeKind:B,disabled:ce}))),e.createElement(s.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Ie,{items:V,customRowComponent:S=>e.createElement(Gt,rn(on({},S),{onClick:ie})),addComponentToDZ:Te,targetUid:N,editTarget:q,isMain:!0})))))}},49066:(_,j,a)=>{a.d(j,{D:()=>M});var e=a(67294),d=a(45697),m=a(35961);const M=({children:P})=>e.createElement(m.x,{paddingLeft:10,paddingRight:10},P);M.propTypes={children:d.node.isRequired}},67838:(_,j,a)=>{a.d(j,{T:()=>H});var e=a(67294),d=a(27821),m=a(45697),M=a(72735),P=a(35961),$=a(46273);const I=i=>{const r=(0,e.useRef)(null),[l,g]=(0,e.useState)(!0),L=([D])=>{g(D.isIntersecting)};return(0,e.useEffect)(()=>{const D=r.current,A=new IntersectionObserver(L,i);return D&&A.observe(r.current),()=>{D&&A.disconnect()}},[r,i]),[r,l]},k=(i,r)=>{(0,e.useLayoutEffect)(()=>{const l=new ResizeObserver(r);return Array.isArray(i)?i.map(g=>{g.current&&l.observe(g.current)}):i.current&&l.observe(i.current),()=>{l.disconnect()}},[])};var f=Object.defineProperty,s=Object.defineProperties,v=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,te=(i,r,l)=>r in i?f(i,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[r]=l,Q=(i,r)=>{for(var l in r||(r={}))ee.call(r,l)&&te(i,l,r[l]);if(J)for(var l of J(r))Z.call(r,l)&&te(i,l,r[l]);return i},de=(i,r)=>s(i,v(r)),ne=(i,r)=>{var l={};for(var g in i)ee.call(i,g)&&r.indexOf(g)<0&&(l[g]=i[g]);if(i!=null&&J)for(var g of J(i))r.indexOf(g)<0&&Z.call(i,g)&&(l[g]=i[g]);return l};const pe=()=>{const i=(0,e.useRef)(null),[r,l]=(0,e.useState)(null),[g,L]=I({root:null,rootMargin:"0px",threshold:0});return k(g,()=>{g.current&&l(g.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{i.current&&l(i.current.getBoundingClientRect())},[i]),{containerRef:g,isVisible:L,baseHeaderLayoutRef:i,headerSize:r}},H=i=>{const{containerRef:r,isVisible:l,baseHeaderLayoutRef:g,headerSize:L}=pe();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:L==null?void 0:L.height},ref:r},l&&e.createElement(F,Q({ref:g},i))),!l&&e.createElement(F,de(Q({},i),{sticky:!0,width:L==null?void 0:L.width})))};H.displayName="HeaderLayout";const z=(0,d.default)(P.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${i=>i.width}px;
  z-index: 4;
  box-shadow: ${({theme:i})=>i.shadows.tableShadow};
`,F=e.forwardRef((i,r)=>{var l=i,{navigationAction:g,primaryAction:L,secondaryAction:D,subtitle:A,title:oe,sticky:re,width:U}=l,b=ne(l,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const E=typeof A=="string";return re?e.createElement(z,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:U,"data-strapi-header-sticky":!0},e.createElement($.k,{justifyContent:"space-between"},e.createElement($.k,null,g&&e.createElement(P.x,{paddingRight:3},g),e.createElement(P.x,null,e.createElement(M.Z,Q({variant:"beta",as:"h1"},b),oe),E?e.createElement(M.Z,{variant:"pi",textColor:"neutral600"},A):A),D?e.createElement(P.x,{paddingLeft:4},D):null),e.createElement($.k,null,L?e.createElement(P.x,{paddingLeft:2},L):void 0))):e.createElement(P.x,{ref:r,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0},g?e.createElement(P.x,{paddingBottom:2},g):null,e.createElement($.k,{justifyContent:"space-between"},e.createElement($.k,null,e.createElement(M.Z,Q({as:"h1",variant:"alpha"},b),oe),D?e.createElement(P.x,{paddingLeft:4},D):null),L),E?e.createElement(M.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},A):A)});F.displayName="BaseHeaderLayout",F.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},F.propTypes={navigationAction:m.node,primaryAction:m.node,secondaryAction:m.node,sticky:m.bool,subtitle:m.oneOfType([m.string,m.node]),title:m.string.isRequired,width:m.number},H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},H.propTypes={navigationAction:m.node,primaryAction:m.node,secondaryAction:m.node,subtitle:m.oneOfType([m.string,m.node]),title:m.string.isRequired}},67109:(_,j,a)=>{a.d(j,{Z:()=>k});var e=a(67294),d=Object.defineProperty,m=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,$=(f,s,v)=>s in f?d(f,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):f[s]=v,I=(f,s)=>{for(var v in s||(s={}))M.call(s,v)&&$(f,v,s[v]);if(m)for(var v of m(s))P.call(s,v)&&$(f,v,s[v]);return f};function k(f){return e.createElement("svg",I({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}},98432:(_,j,a)=>{a.d(j,{Z:()=>k});var e=a(67294),d=Object.defineProperty,m=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,$=(f,s,v)=>s in f?d(f,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):f[s]=v,I=(f,s)=>{for(var v in s||(s={}))M.call(s,v)&&$(f,v,s[v]);if(m)for(var v of m(s))P.call(s,v)&&$(f,v,s[v]);return f};function k(f){return e.createElement("svg",I({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),e.createElement("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",fill:"#212134"}))}}}]);
