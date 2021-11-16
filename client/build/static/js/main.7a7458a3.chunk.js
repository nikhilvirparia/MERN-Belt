(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),l=c(26),i=c.n(l),j=(c(33),c(5)),a=(c(34),c(8)),o=c(7),r=c.n(o),b=c(0),d=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],l=c[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),d=o[0];o[1];Object(n.useEffect)((function(){r.a.get("http://localhost:8000/api/pets").then((function(e){console.log("Response getting all pets --\x3e ",e.data),l(e.data)})).catch((function(e){return console.log(e)}))}),[e.formSubmit,d]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(a.b,{to:"/pets/new",children:"Add New"}),Object(b.jsx)("h1",{children:" Pet Shelter "}),Object(b.jsx)("h3",{children:" These pets are looking for a good home "}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:" Name "}),Object(b.jsx)("th",{children:" Types "}),Object(b.jsx)("th",{children:" Actions "})]})}),Object(b.jsx)("tbody",{children:s.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("p",{to:"/api/pets/".concat(e._id),children:e.name})}),Object(b.jsx)("td",{children:Object(b.jsx)("p",{to:"/api/pets/".concat(e._id),children:e.type})}),Object(b.jsxs)("td",{children:[Object(b.jsx)(a.b,{to:"/api/pets/".concat(e._id),children:"Details"})," | ",Object(b.jsx)(a.b,{to:"/pets/edit/".concat(e._id),children:"Edit"})]})]},"".concat(e._id))}))})]})]})},h=c(9),p=c(10),O=c(2),x=function(e){var t,c,s,l,i,a,o=Object(O.f)(),d=Object(n.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),x=Object(j.a)(d,2),u=x[0],m=x[1],g=Object(n.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),v=Object(j.a)(g,2),f=v[0],k=v[1],y=function(e){console.log("changing the form"),m(Object(p.a)(Object(p.a)({},u),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" Pet Shelter "}),Object(b.jsx)("h3",{children:" Know a pet needing a home? "}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.a.post("http://localhost:8000/api/pets/make",u).then((function(e){console.log(e),e.data.errors?k(e.data.errors):o.push("/")})).catch((function(e){return console.log(e)}))},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Pet Name:"}),Object(b.jsx)("input",{onChange:y,type:"text",name:"name",value:u.name}),Object(b.jsx)("p",{children:null===(t=f.name)||void 0===t?void 0:t.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Pet Type:"}),Object(b.jsx)("input",{onChange:y,type:"text",name:"type",value:u.type}),Object(b.jsx)("p",{children:null===(c=f.type)||void 0===c?void 0:c.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Pet Description:"}),Object(b.jsx)("input",{onChange:y,type:"text",name:"description",value:u.description}),Object(b.jsx)("p",{children:null===(s=f.description)||void 0===s?void 0:s.message})]}),Object(b.jsx)("h3",{children:" Skills (optional): "}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Skill1:"}),Object(b.jsx)("input",{onChange:y,type:"text",name:"skill1",value:u.skill1}),Object(b.jsx)("p",{children:null===(l=f.skill1)||void 0===l?void 0:l.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Skill2:"}),Object(b.jsx)("input",{onChange:y,type:"text",name:"skill2",value:u.skill2}),Object(b.jsx)("p",{children:null===(i=f.skill2)||void 0===i?void 0:i.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Skill3:"}),Object(b.jsx)("input",{onChange:y,type:"text",name:"skill3",value:u.skill3}),Object(b.jsx)("p",{children:null===(a=f.skill3)||void 0===a?void 0:a.message})]}),Object(b.jsx)("input",{onChange:y,type:"submit",value:"Add Pet"})]})]})},u=function(e){var t,c,s,l,i,a,o=Object(O.g)().id,d=Object(O.f)(),x=Object(n.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),u=Object(j.a)(x,2),m=u[0],g=u[1],v=Object(n.useState)({name:"",type:"",description:""}),f=Object(j.a)(v,2),k=f[0],y=f[1],S=function(e){console.log("changing the form"),g(Object(p.a)(Object(p.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){r.a.get("http://localhost:8000/api/pets/".concat(o)).then((function(e){console.log("response from get one: ",e),g(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" Pet Shelter "}),Object(b.jsxs)("h3",{children:[" Edit ",m.name," "]}),null!=m?Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.a.put("http://localhost:8000/api/pets/".concat(o),m).then((function(e){console.log(e),e.data.errors?y(e.data.errors):d.push("/")})).catch((function(e){return console.log(e)}))},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Name:"}),Object(b.jsx)("input",{onChange:S,type:"text",name:"name",value:m.name}),Object(b.jsx)("p",{children:null===(t=k.name)||void 0===t?void 0:t.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Type:"}),Object(b.jsx)("input",{onChange:S,type:"text",name:"type",value:m.type}),Object(b.jsx)("p",{children:null===(c=k.type)||void 0===c?void 0:c.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Description:"}),Object(b.jsx)("input",{onChange:S,type:"text",name:"description",value:m.description}),Object(b.jsx)("p",{children:null===(s=k.description)||void 0===s?void 0:s.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Skill1:"}),Object(b.jsx)("input",{onChange:S,type:"text",name:"skill1",value:m.skill1}),Object(b.jsx)("p",{children:null===(l=k.skill1)||void 0===l?void 0:l.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Skill2:"}),Object(b.jsx)("input",{onChange:S,type:"text",name:"skill2",value:m.skill2}),Object(b.jsx)("p",{children:null===(i=k.skill2)||void 0===i?void 0:i.message})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Skill3:"}),Object(b.jsx)("input",{onChange:S,type:"text",name:"skill3",value:m.skill3}),Object(b.jsx)("p",{children:null===(a=k.skill3)||void 0===a?void 0:a.message})]}),Object(b.jsx)("input",{onChange:S,type:"submit",value:"Edit"})]}):Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"There is no pets"})})]})},m=function(e){var t=Object(n.useState)({}),c=Object(j.a)(t,2),s=c[0],l=c[1],i=Object(O.g)().id,a=Object(O.f)();Object(n.useEffect)((function(){r.a.get("http://localhost:8000/api/pets/".concat(i)).then((function(e){console.log("response from get one: ",e),l(e.data)})).catch((function(e){return console.log(e)}))}),[i]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:" Pet Shelter "}),Object(b.jsxs)("h2",{children:[" Details about: ",s.name," "]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[" Pet type: ",s.type," "]}),Object(b.jsxs)("p",{children:["Description: ",s.description]}),Object(b.jsxs)("p",{children:["skills: ",s.skill1,Object(b.jsx)("br",{}),s.skill2,Object(b.jsx)("br",{}),s.skill3]}),Object(b.jsxs)("button",{onClick:function(e){!function(e){r.a.delete("http://localhost:8000/api/pets/".concat(e)).then((function(e){console.log(e),a.push("/")})).catch((function(e){return console.error(e)}))}(s._id)},children:["Adopt ",s.name," "]})]})]})};var g=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)(a.a,{children:[Object(b.jsx)(a.b,{to:"/",children:"Home"}),Object(b.jsx)("br",{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",children:Object(b.jsx)(d,{formSubmit:c,setFromSubmit:s,children:" "})}),Object(b.jsx)(O.a,{exact:!0,path:"/pets/new",children:Object(b.jsx)(x,{formSubmit:c,setFormSubmit:s})}),Object(b.jsx)(O.a,{exact:!0,path:"/pets/edit/:id",children:Object(b.jsx)(u,{formSubmit:c,setFormSubmit:s})}),Object(b.jsx)(O.a,{exact:!0,path:"/api/pets/:id",children:Object(b.jsx)(m,{})})]})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),l(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.7a7458a3.chunk.js.map