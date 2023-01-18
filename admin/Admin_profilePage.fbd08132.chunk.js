"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9497],{50166:(pe,j,t)=>{t.r(j),t.d(j,{default:()=>Ze});var e=t(67294),p=t(27821),u=t(68547),K=t(97132),V=t(80831),D=t(11700),z=t.n(D),M=t(23724),Z=t(78718),N=t.n(Z),R=t(15482),b=t(185),L=t(72735),O=t(35961),W=t(67838),F=t(49066),Q=t(29728),S=t(11276),v=t(74571),E=t(7681),X=t(14087),H=t(91216),A=t(82562),U=t(25752),Y=t(16364),B=t(8934),I=t(94123),d=t(85018),n=t(50592),i=t(78143),fe=t(57557),ge=t.n(fe),ee=t(23998),ve=Object.defineProperty,Pe=Object.defineProperties,he=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,ae=(r,s,a)=>s in r?ve(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,Ee=(r,s)=>{for(var a in s||(s={}))we.call(s,a)&&ae(r,a,s[a]);if(te)for(var a of te(s))ye.call(s,a)&&ae(r,a,s[a]);return r},Oe=(r,s)=>Pe(r,he(s)),re=(r,s,a)=>new Promise((T,w)=>{var x=m=>{try{P(a.next(m))}catch(y){w(y)}},C=m=>{try{P(a.throw(m))}catch(y){w(y)}},P=m=>m.done?T(m.value):Promise.resolve(m.value).then(x,C);P((a=a.apply(r,s)).next())});const Se=()=>re(void 0,null,function*(){const{data:r}=yield ee.be.get("/admin/users/me");return r.data}),Me=r=>re(void 0,null,function*(){const s=ge()(r,["confirmPassword","currentTheme"]),{data:a}=yield ee.be.put("/admin/users/me",s);return Oe(Ee({},a.data),{currentTheme:r.currentTheme})});var be=t(53209),Le=t(52435);const Ae=be.Ry().shape(Le.Rw);var se=t(8610),Ie=Object.defineProperty,Te=Object.defineProperties,xe=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,oe=(r,s,a)=>s in r?Ie(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,le=(r,s)=>{for(var a in s||(s={}))Ce.call(s,a)&&oe(r,a,s[a]);if(ne)for(var a of ne(s))je.call(s,a)&&oe(r,a,s[a]);return r},ie=(r,s)=>Te(r,xe(s)),de=(r,s,a)=>new Promise((T,w)=>{var x=m=>{try{P(a.next(m))}catch(y){w(y)}},C=m=>{try{P(a.throw(m))}catch(y){w(y)}},P=m=>m.done?T(m.value):Promise.resolve(m.value).then(x,C);P((a=a.apply(r,s)).next())});const De=p.default.a`
  color: ${({theme:r})=>r.colors.primary600};
`,$=(0,p.default)(Y.o)`
  ::-ms-reveal {
    display: none;
  }
`,J=(0,p.default)(U.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:r})=>r.colors.neutral600};
    }
  }
`,Ze=()=>{const[r,s]=(0,e.useState)(!1),[a,T]=(0,e.useState)(!1),[w,x]=(0,e.useState)(!1),{changeLocale:C,localeNames:P}=(0,n.Z)(),{setUserDisplayName:m}=(0,u.useAppInfos)(),y=(0,M.useQueryClient)(),{formatMessage:o}=(0,K.useIntl)(),{trackUsage:Ne}=(0,u.useTracking)(),k=(0,u.useNotification)(),{lockApp:Re,unlockApp:Fe}=(0,u.useOverlayBlocker)(),{notifyStatus:He}=(0,X.G)(),{currentTheme:Ue,themes:ce,onChangeTheme:Be}=(0,i.M1)();(0,u.useFocusWhenNavigate)();const{status:Ge,data:G}=(0,M.useQuery)("user",()=>Se(),{onSuccess(){He(o({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ke=Ge!=="success",me=(0,M.useMutation)(l=>Me(l),{onSuccess(l){return de(this,null,function*(){yield y.invalidateQueries("user"),u.auth.setUserInfo(N()(l,["email","firstname","lastname","username","preferedLanguage"]));const f=l.username||(0,se.Pp)(l.firstname,l.lastname);m(f),C(l.preferedLanguage),Be(l.currentTheme),Ne("didChangeMode",{newMode:l.currentTheme}),k({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})})},onSettled(){Fe()},refetchActive:!0}),{isLoading:Ve}=me,ze=(l,f)=>de(void 0,[l,f],function*(g,{setErrors:q}){Re();const c=g.username||null;me.mutate(ie(le({},g),{username:c}),{onError(h){var ue;const _=(ue=h==null?void 0:h.response)==null?void 0:ue.data;return _!=null&&_.data?q(_.data):k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})}),We=["currentTheme","email","firstname","lastname","username","preferedLanguage"],Qe=N()(ie(le({},G),{currentTheme:Ue}),We);if(Ke)return e.createElement(b.o,{"aria-busy":"true"},e.createElement(R.Helmet,{title:o({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(W.T,{title:o({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(F.D,null,e.createElement(u.LoadingIndicatorPage,null)));const Xe=Object.keys(ce).filter(l=>ce[l]);return e.createElement(b.o,{"aria-busy":Ve},e.createElement(R.Helmet,{title:o({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(V.Formik,{onSubmit:ze,initialValues:Qe,validateOnChange:!1,validationSchema:Ae,enableReinitialize:!0},({errors:l,values:f,handleChange:g,isSubmitting:q})=>e.createElement(u.Form,null,e.createElement(W.T,{title:G.username||(0,se.Pp)(G.firstname,G.lastname),primaryAction:e.createElement(Q.z,{startIcon:e.createElement(d.Z,null),loading:q,type:"submit"},o({id:"global.save",defaultMessage:"Save"}))}),e.createElement(O.x,{paddingBottom:10},e.createElement(F.D,null,e.createElement(E.K,{spacing:6},e.createElement(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(E.K,{spacing:4},e.createElement(L.Z,{variant:"delta",as:"h2"},o({id:"global.profile",defaultMessage:"Profile"})),e.createElement(S.r,{gap:5},e.createElement(v.P,{s:12,col:6},e.createElement(u.GenericInput,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:l.firstname,onChange:g,value:f.firstname||"",type:"text",name:"firstname",required:!0})),e.createElement(v.P,{s:12,col:6},e.createElement(u.GenericInput,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:l.lastname,onChange:g,value:f.lastname||"",type:"text",name:"lastname"})),e.createElement(v.P,{s:12,col:6},e.createElement(u.GenericInput,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:l.email,onChange:g,value:f.email||"",type:"email",name:"email",required:!0})),e.createElement(v.P,{s:12,col:6},e.createElement(u.GenericInput,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:l.username,onChange:g,value:f.username||"",type:"text",name:"username"}))))),e.createElement(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(E.K,{spacing:4},e.createElement(L.Z,{variant:"delta",as:"h2"},o({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(S.r,{gap:5},e.createElement(v.P,{s:12,col:6},e.createElement($,{error:l.currentPassword?o({id:l.currentPassword,defaultMessage:l.currentPassword}):"",onChange:g,value:f.currentPassword||"",label:o({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:w?"text":"password",endAction:e.createElement(J,{onClick:c=>{c.stopPropagation(),x(h=>!h)},label:o(w?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},w?e.createElement(B.default,null):e.createElement(I.default,null))}))),e.createElement(S.r,{gap:5},e.createElement(v.P,{s:12,col:6},e.createElement($,{error:l.password?o({id:l.password,defaultMessage:l.password}):"",onChange:g,value:f.password||"",label:o({id:"global.password",defaultMessage:"Password"}),name:"password",type:r?"text":"password",autoComplete:"new-password",endAction:e.createElement(J,{onClick:c=>{c.stopPropagation(),s(h=>!h)},label:o(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?e.createElement(B.default,null):e.createElement(I.default,null))})),e.createElement(v.P,{s:12,col:6},e.createElement($,{error:l.confirmPassword?o({id:l.confirmPassword,defaultMessage:l.confirmPassword}):"",onChange:g,value:f.confirmPassword||"",label:o({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:a?"text":"password",autoComplete:"new-password",endAction:e.createElement(J,{onClick:c=>{c.stopPropagation(),T(h=>!h)},label:o(a?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},a?e.createElement(B.default,null):e.createElement(I.default,null))}))))),e.createElement(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(E.K,{spacing:4},e.createElement(E.K,{spacing:1},e.createElement(L.Z,{variant:"delta",as:"h2"},o({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(L.Z,null,o({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(De,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},o({id:"Settings.profile.form.section.experience.documentation",defaultMessage:"here"}))}))),e.createElement(S.r,{gap:5},e.createElement(v.P,{s:12,col:6},e.createElement(H.P,{label:o({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:o({id:"global.select",defaultMessage:"Select"}),hint:o({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{g({target:{name:"preferedLanguage",value:null}})},clearLabel:o({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:f.preferedLanguage,onChange:c=>{g({target:{name:"preferedLanguage",value:c}})}},Object.keys(P).map(c=>{const h=P[c];return e.createElement(A.W,{value:c,key:c},h)}))),e.createElement(v.P,{s:12,col:6},e.createElement(H.P,{label:o({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:o({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:o({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:f.currentTheme,onChange:c=>{g({target:{name:"currentTheme",value:c}})}},Xe.map(c=>e.createElement(A.W,{value:c,key:c},o({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:o({id:c,defaultMessage:z()(c)})}))))))))))))))}},52435:(pe,j,t)=>{t.d(j,{YM:()=>I,Rw:()=>O});var e=t(53209),p=t(68547),u=Object.defineProperty,K=Object.defineProperties,V=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,Z=(d,n,i)=>n in d?u(d,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[n]=i,N=(d,n)=>{for(var i in n||(n={}))z.call(n,i)&&Z(d,i,n[i]);if(D)for(var i of D(n))M.call(n,i)&&Z(d,i,n[i]);return d},R=(d,n)=>K(d,V(n));const b={firstname:e.Z_().trim().required(p.translatedErrors.required),lastname:e.Z_(),email:e.Z_().email(p.translatedErrors.email).lowercase().required(p.translatedErrors.required),username:e.Z_().nullable(),password:e.Z_().min(8,p.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,p.translatedErrors.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(d,n)=>d?n.required(p.translatedErrors.required):n)},O=R(N({},b),{currentPassword:e.Z_().when(["password","confirmPassword"],(d,n,i)=>d||n?i.required(p.translatedErrors.required):i),preferedLanguage:e.Z_().nullable()}),F={roles:e.IX().min(1,p.translatedErrors.required).required(p.translatedErrors.required)};var Q=Object.defineProperty,S=Object.defineProperties,v=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,A=(d,n,i)=>n in d?Q(d,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[n]=i,U=(d,n)=>{for(var i in n||(n={}))X.call(n,i)&&A(d,i,n[i]);if(E)for(var i of E(n))H.call(n,i)&&A(d,i,n[i]);return d},Y=(d,n)=>S(d,v(n));const I=e.Ry().shape(U(Y(U({},b),{isActive:e.Xg()}),F))}}]);
