(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=a(6),m=a(1),s=function(){return r.a.createElement("h2",null,"Home Page perhaps")},u=a(15),p=a(14),i=a(11),f=a.n(i),d=a(19),E=function(){var e=Object(d.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=a(8),h=a.n(b),N=function(e){var t=e.person,a=t.id,n=t.name,l=t.sex,c=t.born,s=t.died,u=t.slug,p=t.fatherName,i=t.motherName,f=t.father,d=t.mother,E=Object(m.g)().personSlug,b={table__body:!0,male:"m"===l,female:"f"===l};return r.a.createElement("tr",{className:h()({active:E===u}),key:n},r.a.createElement("td",{className:"table__body"},a),r.a.createElement("td",{className:h()(b)},r.a.createElement(o.b,{to:"/people/".concat(u)},n)),r.a.createElement("td",{className:h()(b)},t.sex),r.a.createElement("td",{className:h()(b)},c),r.a.createElement("td",{className:h()(b)},"-"),r.a.createElement("td",{className:h()(b)},s),r.a.createElement("td",{className:"table__body female"},"object"===typeof d?r.a.createElement(o.b,{to:"/people/".concat(d.slug)},i):r.a.createElement("span",null,i||" - - - ")),r.a.createElement("td",{className:"table__body male"},"object"===typeof f?r.a.createElement(o.b,{to:"/people/".concat(f.slug)},p):r.a.createElement("span",null,p||" - - - ")))},g=["id","name","sex","born"," - ","died","mother","father"],v=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(p.a)(c,2),m=o[0],s=o[1];Object(n.useEffect)((function(){E().then((function(e){var t=e.map((function(t,a){return Object(u.a)(Object(u.a)({id:a+1},t),{},{mother:e.find((function(e){return e.name===t.motherName}))||"",father:e.find((function(e){return e.name===t.fatherName}))||""})}));return l(t)}))}),[]);var i=a.filter((function(e){var t=e.name,a=e.fatherName;return(t+e.motherName+a).toLowerCase().includes(m.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"People Page perhaps"),r.a.createElement("div",{className:"search-field"},r.a.createElement("input",{type:"text",className:"search-field__input",value:m,onChange:function(e){return function(e){var t=e.target;s(t.value)}(e)}})),0===i.length?r.a.createElement("div",null,"No requested data, dude"):r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,g.map((function(e){return r.a.createElement("th",{className:"table__header",key:e},e.toUpperCase())})))),r.a.createElement("tbody",null,i.map((function(e){return r.a.createElement(N,{key:e.slug,person:e})})))))},y=(a(32),function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"People table"),r.a.createElement(o.c,{to:"/",exact:!0},"Transfer to Home"),r.a.createElement(o.c,{to:"/people"},"Transfer to People"),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:s}),r.a.createElement(m.b,{path:"/home"},r.a.createElement(m.a,{to:"/"})),r.a.createElement(m.b,{path:"/people/:personSlug?",component:v}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Requested page has not been created yet")))))});c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.de36b04d.chunk.js.map