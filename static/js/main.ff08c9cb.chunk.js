(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{26:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=a(6),s=a(1),m=function(){return r.a.createElement("h2",null,"Home Page perhaps")},u=a(15),p=a(14),i=a(23),f=a.n(i),b=a(11),h=a.n(b),d=a(24),E=function(){var e=Object(d.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=a(8),g=a.n(N),y=function(e){var t=e.person,a=t.id,n=t.name,c=t.sex,l=t.born,m=t.died,u=t.slug,p=t.fatherName,i=t.motherName,f=t.father,b=t.mother,h=Object(s.i)().personSlug,d={table__body:!0,male:"m"===c,female:"f"===c};return r.a.createElement("tr",{className:g()({active:h===u}),key:n},r.a.createElement("td",{className:"table__body"},a),r.a.createElement("td",{className:g()(d)},r.a.createElement(o.b,{to:"/people/".concat(u)},n)),r.a.createElement("td",{className:g()(d)},t.sex),r.a.createElement("td",{className:g()(d)},l),r.a.createElement("td",{className:g()(d)},"-"),r.a.createElement("td",{className:g()(d)},m),r.a.createElement("td",{className:"table__body female"},"object"===typeof b?r.a.createElement(o.b,{to:"/people/".concat(b.slug)},i):r.a.createElement("span",null,i||" - - - ")),r.a.createElement("td",{className:"table__body male"},"object"===typeof f?r.a.createElement(o.b,{to:"/people/".concat(f.slug)},p):r.a.createElement("span",null,p||" - - - ")))},j=["id","name","sex","born"," - ","died","mother","father"],v=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),m=o[0],i=o[1],b=Object(s.h)(),h=Object(s.g)(),d=new URLSearchParams(b.search),N=Object(n.useCallback)(f()((function(e){e?d.set("query",e):d.delete("query"),h.push({search:d.toString()})}),1e3),[]),g=d.get("query")||"",v="desc"!==d.get("sortOrder"),O=d.get("sortBy")||"";Object(n.useEffect)((function(){return i(g)}),[g]),Object(n.useEffect)((function(){E().then((function(e){var t=e.map((function(t,a){return Object(u.a)(Object(u.a)({id:a+1},t),{},{mother:e.find((function(e){return e.name===t.motherName}))||"",father:e.find((function(e){return e.name===t.fatherName}))||""})}));return c(t)}))}),[]);var _=Object(n.useMemo)((function(){var e=a.filter((function(e){var t=e.name,a=e.fatherName;return(t+e.motherName+a).toLowerCase().includes(g.toLowerCase())}));switch(O){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"born":e.sort((function(e,t){return e.born-t.born}));break;case"died":e.sort((function(e,t){return e.died-t.died}));break;case"sex":e.sort((function(e,t){return e.sex.localeCompare(t.sex)}));break;case"motherName":e.sort((function(e,t){return e.motherName.localeCompare(t.motherName)}));break;case"fatherName":e.sort((function(e,t){return e.fatherName.localeCompare(t.fatherName)}))}return v||e.reverse(),e}),[g,v,a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"People Page perhaps"),r.a.createElement("div",{className:"search-field"},r.a.createElement("input",{type:"text",className:"search-field__input",value:m,onChange:function(e){return function(e){var t=e.target;i(t.value),N(t.value)}(e)}})),0===_.length?r.a.createElement("h3",null,"No requested data, dude"):r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,j.map((function(e){return r.a.createElement("th",{className:"table__header",key:e,onClick:function(){d.set("sortOrder",v?"desc":"asc"),d.set("sortBy",e),h.push({search:d.toString()})}},e.toUpperCase()," ",e===O&&(v?r.a.createElement("span",{className:"arrow"},"\u2b06\ufe0f"):r.a.createElement("span",{className:"arrow"},"\u2b07\ufe0f")))})))),r.a.createElement("tbody",null,_.map((function(e){return r.a.createElement(y,{key:e.slug,person:e})})))))},O=(a(44),function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"People table"),r.a.createElement(o.c,{to:"/",exact:!0},"Transfer to Home"),r.a.createElement(o.c,{to:"/people"},"Transfer to People"),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:m}),r.a.createElement(s.b,{path:"/home"},r.a.createElement(s.a,{to:"/"})),r.a.createElement(s.b,{path:"/people/:personSlug?",component:v}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Requested page has not been created yet")))))});l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ff08c9cb.chunk.js.map