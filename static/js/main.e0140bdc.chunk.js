(this.webpackJsonpfilter=this.webpackJsonpfilter||[]).push([[0],{20:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var c,a,i=t(0),o=t.n(i),r=t(11),l=t.n(r),s=(t(20),t(3)),d=t(2),u=t(12),j=(new Date).getFullYear(),h=function(){var n=(new Date).getMonth()+1;return n<10?"0".concat(n):n}(),b=function(){var n=(new Date).getDate();return n<10?"0".concat(n):n}(),f="".concat(j,"-").concat(h,"-").concat(b),g="".concat(j,"-").concat(h,"-").concat(b-1),p="".concat(j,"-").concat(h,"-").concat(b-7),x="".concat(j,"-").concat(h-1,"-").concat(b),O="".concat(j-1,"-").concat(h,"-").concat(b),m=t(4),v=t(1),w=function(n){var e=n.title,t=n.date,c=n.notes;return Object(v.jsx)(y.Wrapper,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"title",children:Object(v.jsx)("h2",{children:e})}),Object(v.jsxs)("div",{className:"date",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsxs)("p",{children:["note: ",c]})]})]})})},y={Wrapper:m.a.div(c||(c=Object(s.a)(["\n    margin: 0.5rem;\n    height: 14rem;\n    width: 15rem;\n    background: rgba(255, 255, 255, 0.329);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 20px;\n    padding: 4px;\n    box-shadow: 2px 2px 6px 2px rgba(87, 87, 87, 0.075);\n\n    .container {\n      height: 13rem;\n      width: 14rem;\n      display: flex;\n      justify-content: space-between;\n      background: white;\n      box-shadow: 2px 0px 6px 4px rgba(175, 100, 251, 0.22);\n      border-radius: 19px;\n      flex-direction: column;\n      .title {\n        margin: 0.8rem;\n        h2 {\n          margin: 0;\n          font-size: 1rem;\n        }\n      }\n      .date {\n        margin: 0.8rem;\n        height: 70%;\n        border-radius: 20px;\n        background: rgba(134, 102, 255, 1);\n        color: white;\n        padding: 0.5rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: flex-start;\n        h2 {\n          margin: 0.8rem;\n        }\n        p {\n          margin: 0.5rem;\n          font-weight: bold;\n        }\n      }\n    }\n  "])))},k={Container:m.a.div(a||(a=Object(s.a)(["\n    .list {\n      min-height: 100vh;\n      width: 90vw;\n      padding: 5vh;\n      display: grid;\n\n      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n    }\n  "])))},C=function(){var n=Object(i.useState)({england:[],scotland:[],ireland:[]}),e=Object(d.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)([]),o=Object(d.a)(a,2),r=o[0],l=o[1],s=Object(i.useState)("england"),j=Object(d.a)(s,2),h=j[0],b=j[1],m=Object(i.useState)("all"),y=Object(d.a)(m,2),C=y[0],S=y[1],D=Object(i.useState)([]),F=Object(d.a)(D,2),N=F[0],E=F[1],T=Object(i.useState)(),B=Object(d.a)(T,2),I=B[0],J=B[1],L=Object(i.useState)(f),M=Object(d.a)(L,2),P=M[0],W=M[1],z=t.england,A=t.scotland,G=t.ireland;Object(i.useEffect)((function(){fetch("https://www.gov.uk/bank-holidays.json",{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return console.log(n)})).then((function(n){c({england:n["england-and-wales"].events,scotland:n.scotland.events,ireland:n["northern-ireland"].events}),l(n["england-and-wales"].events),E(n["england-and-wales"].events)}))}),[]),Object(i.useEffect)((function(){S("all"),E(r)}),[r]);var H=function(n){return r.filter((function(e){return e.date>=n&&e.date<=f}))},Y=H(g),q=H(p),K=H(x),Q=H(O),R=function(n,e){return r.filter((function(t){return t.date>=n&&t.date<=e}))};return Object(v.jsxs)(k.Container,{children:[Object(v.jsxs)("select",{onChange:function(n){return b(n.target.value)},placeholder:"country",children:[Object(v.jsx)("option",{onClick:function(){return l(z)},value:"england",children:"england"}),Object(v.jsx)("option",{onClick:function(){return l(A)},value:"scotland",children:"scotland"}),Object(v.jsx)("option",{onClick:function(){return l(G)},value:"ireland",children:"ireland"})]}),Object(v.jsxs)("select",{children:[Object(v.jsx)("option",{onClick:function(){E(r),S("all")},value:C,selected:"all"===C,children:"Show All"}),Object(v.jsx)("option",{onClick:function(){E(Y),S("yesterday")},value:C,children:"yesterday"}),Object(v.jsx)("option",{onClick:function(){E(q),S("lastweek")},value:C,children:"last week"}),Object(v.jsx)("option",{onClick:function(){E(K),S("lastmonth")},value:C,children:"last month"})," ",Object(v.jsx)("option",{onClick:function(){E(Q),S("lastyear")},value:C,children:"last year"})," ",Object(v.jsx)("option",{onClick:function(){S("custom"),E([]),E(R(I,P))},value:C,children:"custom Date"})]}),"custom"===C&&Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("input",{type:"date",onChange:function(n){J(n.target.value),E(R(n.target.value,P))},value:I}),Object(v.jsx)("input",{type:"date",onChange:function(n){W(n.target.value),E(R(I,n.target.value))},value:P})]}),Object(v.jsxs)("h1",{children:["showing result for ",h]}),Object(v.jsx)("div",{className:"list",children:0===N.length?Object(v.jsx)("h2",{children:"No Holidays Found"}):N.map((function(n){return Object(v.jsx)(w,{title:n.title,date:n.date,notes:n.notes},Object(u.v4)())}))})]})},S=function(){return Object(v.jsx)(C,{})},D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),a(n),i(n),o(n)}))};l.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),D()}},[[26,1,2]]]);
//# sourceMappingURL=main.e0140bdc.chunk.js.map