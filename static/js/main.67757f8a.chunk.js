(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{29:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=a(6),s=a(1),m=function(){return r.a.createElement("h2",null,"Home Page perhaps")},u=a(16),p=a(18),i=a(17),f=a(26),b=a.n(f),h=a(13),d=a.n(h),E=a(27),N=function(){var e=Object(E.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=a(8),j=a.n(g),y=function(e){var t=e.person,a=t.id,n=t.name,c=t.sex,l=t.born,m=t.died,u=t.slug,p=t.fatherName,i=t.motherName,f=t.father,b=t.mother,h=Object(s.i)().personSlug,d={table__body:!0,male:"m"===c,female:"f"===c};return r.a.createElement("tr",{className:j()({active:h===u}),key:n},r.a.createElement("td",{className:"table__body"},a),r.a.createElement("td",{className:j()(d)},r.a.createElement(o.b,{to:"/people/".concat(u)},n)),r.a.createElement("td",{className:j()(d)},t.sex),r.a.createElement("td",{className:j()(d)},l),r.a.createElement("td",{className:j()(d)},"-"),r.a.createElement("td",{className:j()(d)},m),r.a.createElement("td",{className:"table__body female"},"object"===typeof b?r.a.createElement(o.b,{to:"/people/".concat(b.slug)},i):r.a.createElement("span",null,i||" - - - ")),r.a.createElement("td",{className:"table__body male"},"object"===typeof f?r.a.createElement(o.b,{to:"/people/".concat(f.slug)},p):r.a.createElement("span",null,p||" - - - ")))},v=["id","name","sex","born"," - ","died","mother","father"],O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),m=o[0],f=o[1],h=Object(s.h)(),d=Object(s.g)(),E=new URLSearchParams(h.search),g=Object(n.useCallback)(b()((function(e){e?E.set("query",e):E.delete("query"),d.push({search:E.toString()})}),1e3),[]),j=E.get("query")||"",O="desc"!==E.get("sortOrder"),_=E.get("sortBy")||"";Object(n.useEffect)((function(){return f(j)}),[j]),Object(n.useEffect)((function(){N().then((function(e){var t=e.map((function(t,a){return Object(p.a)(Object(p.a)({id:a+1},t),{},{mother:e.find((function(e){return e.name===t.motherName}))||"",father:e.find((function(e){return e.name===t.fatherName}))||""})}));return c(t)}))}),[]);var k=Object(n.useCallback)((function(e){E.set("sortOrder",O?"desc":"asc"),E.set("sortBy",e),d.push({search:E.toString()})}),[O,d,E]),x=Object(n.useMemo)((function(){var e=Object(u.a)(a).filter((function(e){var t=e.name,a=e.fatherName;return(t+e.motherName+a).toLowerCase().includes(j.toLowerCase())}));return e=function(){var e=Object(u.a)(a);switch(_){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"born":e.sort((function(e,t){return e.born-t.born}));break;case"died":e.sort((function(e,t){return e.died-t.died}));break;case"sex":e.sort((function(e,t){return e.sex.localeCompare(t.sex)}));break;case"motherName":e.sort((function(e,t){return e.motherName.localeCompare(t.motherName)}));break;case"fatherName":e.sort((function(e,t){return e.fatherName.localeCompare(t.fatherName)}))}return e}(),O||e.reverse(),e}),[j,O,a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"People Page perhaps"),r.a.createElement("div",{className:"search-field"},r.a.createElement("input",{type:"text",className:"search-field__input",value:m,onChange:function(e){var t=e.target;f(t.value),g(t.value)}})),0===x.length?r.a.createElement("h3",null,"No requested data, dude"):r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,v.map((function(e){return r.a.createElement("th",{className:"table__header",key:e,onClick:function(){return k(e)}},e.toUpperCase()," ",e===_&&(O?r.a.createElement("span",{className:"arrow"},"\u2b06\ufe0f"):r.a.createElement("span",{className:"arrow"},"\u2b07\ufe0f")))})))),r.a.createElement("tbody",null,x.map((function(e){return r.a.createElement(y,{key:e.slug,person:e})})))))},_=(a(47),function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"People table"),r.a.createElement(o.c,{to:"/",exact:!0},"Transfer to Home"),r.a.createElement(o.c,{to:"/people"},"Transfer to People"),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:m}),r.a.createElement(s.b,{path:"/home"},r.a.createElement(s.a,{to:"/"})),r.a.createElement(s.b,{path:"/people/:personSlug?",component:O}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Requested page has not been created yet")))))});l.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.67757f8a.chunk.js.map