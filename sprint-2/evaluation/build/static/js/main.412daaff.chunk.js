(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{120:function(e,t,c){},121:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(29),a=c(7),j=c(3),s=c(4),o=c(9),i=c(2),b=Object(n.createContext)(),d={name:"",data:[]},l=function(e,t){switch(t.type){case"store_data":return Object(o.a)(Object(o.a)({},e),{},{data:t.payload});case"store_name":return Object(o.a)(Object(o.a)({},e),{},{name:t.payload});default:return e}},u=function(e){var t=e.children,c=Object(n.useReducer)(l,d),r=Object(s.a)(c,2),a=r[0],j=r[1];return Object(i.jsx)(b.Provider,{value:[a,j],children:t})},O=function(){var e=Object(n.useContext)(b),t=Object(s.a)(e,2),c=t[0];t[1];return console.log(c),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:["Name :",c.name.firstName]}),Object(i.jsxs)("div",{children:["Phone: ",c.data.phone]}),Object(i.jsxs)("div",{children:["Address :",c.data.address]})]})},x=function(){return Object(i.jsx)("div",{children:"Home"})},h=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(a.b,{to:"/",children:"Home"}),Object(i.jsx)(a.b,{to:"/register/one",children:"register one"}),Object(i.jsx)(a.b,{to:"/Register/two",children:"register/two"})]})},v=Object(n.createContext)(),p=function(e){var t=e.children,c=Object(n.useState)(!1),r=Object(s.a)(c,2),a=r[0],j=r[1];return Object(i.jsx)(v.Provider,{value:[a,function(){j(!1===a)}],children:t})},m=function(e){var t=e.children,c=Object(n.useContext)(v);return Object(s.a)(c,1)[0]?t:Object(i.jsx)(j.a,{to:"/register/one"})},g=c(30),f=c.n(g),C=function(){var e=Object(n.useContext)(v),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useContext)(b),o=Object(s.a)(a,2),d=o[0],l=o[1];console.log(d),console.log(c);var u=Object(n.useState)(""),O=Object(s.a)(u,2),x=O[0],h=O[1],p=Object(n.useState)(!1),m=Object(s.a)(p,2),g=m[0],C=m[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),w=S[0],E=S[1];console.log(w,"name");var k=Object(j.g)();return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{value:w,onChange:function(e){return E(e.target.value)},type:"text",placeholder:"enter name",required:!0}),Object(i.jsx)("input",{type:"text",id:"userEmail",onChange:function(e){return function(e){var t=e.target.value;f.a.isEmail(t)?(h("Valid Email"),C(!0)):h("Enter valid Email!")}(e)}})," ",Object(i.jsx)("br",{}),Object(i.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:x}),Object(i.jsx)("button",{onClick:function(){g&&(r(),l({type:"store_name",payload:{firstName:w}}),k("/register/two",{replace:!0}))},children:"Next"})]})},y=function(){var e=Object(n.useContext)(v),t=Object(s.a)(e,2),c=t[0],r=(t[1],Object(n.useContext)(b)),a=Object(s.a)(r,2),o=(a[0],a[1]),d=Object(n.useState)(""),l=Object(s.a)(d,2),u=l[0],O=l[1],x=Object(n.useState)(""),h=Object(s.a)(x,2),p=h[0],m=h[1];console.log(c);var g=Object(j.g)();return Object(i.jsxs)("div",{children:["   ",Object(i.jsx)("input",{value:u,onChange:function(e){return O(e.target.value)},type:"number",placeholder:"enter mobile no",id:"number"}),Object(i.jsx)("input",{value:p,onChange:function(e){return m(e.target.value)},type:"text",placeholder:"enter address",id:"address"}),Object(i.jsx)("button",{onClick:function(){g("/register/one")},children:"Prev"}),Object(i.jsx)("button",{onClick:function(){o({type:"store_data",payload:{phone:u,address:p}}),g("/dashboard")},children:"Submit"})]})},S=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{}),Object(i.jsxs)(j.d,{children:[Object(i.jsx)(j.b,{path:"/",element:Object(i.jsx)(x,{})}),Object(i.jsx)(j.b,{path:"/register/one",element:Object(i.jsx)(C,{})}),Object(i.jsx)(j.b,{path:"/register/two",element:Object(i.jsx)(y,{})}),Object(i.jsx)(j.b,{path:"/dashboard",element:Object(i.jsx)(m,{children:Object(i.jsx)(O,{})})})]})]})};c(120);function w(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(S,{})})}var E=document.getElementById("root");Object(r.createRoot)(E).render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(a.a,{children:Object(i.jsx)(p,{children:Object(i.jsx)(u,{children:Object(i.jsx)(w,{})})})})}))}},[[121,1,2]]]);
//# sourceMappingURL=main.412daaff.chunk.js.map