(this["webpackJsonpreact-github-profiles"]=this["webpackJsonpreact-github-profiles"]||[]).push([[0],{36:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r(1),s=r(29),n=r.n(s),i=(r(36),r(9)),l=r(2);function j(e){var t=e.title,r=e.icon;return Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{className:"navbar bg-primary",children:[Object(c.jsx)(i.b,{to:"/react-github-profiles",children:Object(c.jsxs)("h1",{children:[Object(c.jsx)("i",{className:r})," ",t]})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/react-github-profiles",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/react-github-profiles/about",children:"About"})})]})]})})}j.defaultProps={icon:"fab fa-github",title:"Github Search Engine"};var u=j;function b(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"About GitHub User Search"}),Object(c.jsx)("p",{children:"This App is build using React Technology"}),Object(c.jsxs)("p",{children:["Author: ",Object(c.jsx)("a",{href:"www.github.com/aditya278",target:"_blank",rel:"noopener",children:"Aditya Shukla"})]})]})})}var o=r(12),d=Object(a.createContext)(),h=Object(a.createContext)();var p=function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(h).showAlert,r=Object(a.useState)(""),s=Object(o.a)(r,2),n=s[0],i=s[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"form",onSubmit:function(r){r.preventDefault(),""!==n?(e.searchUsers(n),i("")):t("Please Enter a Username to search!!","danger")},children:[Object(c.jsx)("input",{type:"text",name:"text",value:n,onChange:function(e){i(e.target.value)},placeholder:"Search GitHub User.."}),Object(c.jsx)("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"}),e.users.length>0&&Object(c.jsx)("button",{className:"btn btn-dark btn-block",onClick:e.clearUsers,children:"Clear Search Results"})]})})},O=r.p+"static/media/spinner.854f07cc.gif";function x(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:O,alt:"Loading",style:{width:200,display:"block",margin:"auto"}})})}function f(e){var t=e.login,r=e.avatar_url,a=Object(l.f)();return Object(c.jsxs)("div",{className:"card text-center",style:{maxWidth:300},children:[Object(c.jsx)("img",{src:r,alt:"Avatar",className:"round-img",style:{width:140}}),Object(c.jsx)("h3",{children:t}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{onClick:function(){return a.replace("/react-github-profiles/user/".concat(t))},className:"btn btn-dark btn-sm my1",children:"GitHub Profile"})})]})}function m(){var e=Object(a.useContext)(d),t=e.users,r=e.loading,s=e.setAllUsers;return Object(a.useEffect)((function(){s()}),[]),r?Object(c.jsx)(x,{}):Object(c.jsx)("div",{id:"users",style:g,children:t.map((function(e){return Object(c.jsx)(f,{login:e.login,avatar_url:e.avatar_url},e.id)}))})}var g={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"2rem"};function v(){var e=Object(a.useContext)(h).alert;return null!==e&&Object(c.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(c.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]})}var y=function(e){var t=e.repo;return Object(c.jsx)("div",{className:"card",style:{textAlign:"center",maxWidth:300},children:Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:t.html_url,target:"_blank",rel:"noreferrer",children:t.name})})})};var N={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"2rem"},w=function(){var e=Object(a.useContext)(d).repos;return Object(c.jsx)("div",{id:"repos",style:N,children:e.map((function(e){return Object(c.jsx)(y,{repo:e},e.id)}))})};var S=function(e){var t=e.match,r=Object(a.useContext)(d),s=r.user,n=r.loading,l=r.getUser,j=r.getUserRepos;Object(a.useEffect)((function(){l(t.params.username),j(t.params.username)}),[]);var u=s.name,b=s.avatar_url,o=s.location,h=s.bio,p=s.blog,O=s.login,f=s.html_url,m=s.followers,g=s.following,v=s.public_repos,y=s.public_gists,N=s.hireable,S=s.company;return n?Object(c.jsx)(x,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.b,{to:"/react-github-profiles",className:"btn btn-light",children:"Back to Search"}),"Hireable : ",N?Object(c.jsx)("i",{className:"fas fa-check text-success"}):Object(c.jsx)("i",{className:"fas fa-times text-danger"}),Object(c.jsxs)("div",{className:"card grid-2",children:[Object(c.jsxs)("div",{className:"all-center",children:[Object(c.jsx)("img",{src:b,alt:"Display",className:"round-img",style:{maxWidth:150}}),Object(c.jsx)("h1",{children:u}),Object(c.jsxs)("p",{children:["Location : ",o]})]}),Object(c.jsxs)("div",{children:[h&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Bio"}),Object(c.jsx)("p",{children:h})]}),Object(c.jsx)("a",{href:f,className:"btn btn-dark my-1",target:"_blank",rel:"noreferrer",alt:"Profile",children:"Visit GitHub Profile"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:O&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("b",{children:" Username : "})," ",O]})}),Object(c.jsx)("li",{children:S&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("b",{children:" Company : "})," ",S]})}),Object(c.jsx)("li",{children:p&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("b",{children:" Websites: "})," ",p]})})]})]})]}),Object(c.jsxs)("div",{className:"card text-center",children:[Object(c.jsxs)("div",{className:"badge badge-primary",children:["Followers : ",m]}),Object(c.jsxs)("div",{className:"badge badge-primary",children:["Following : ",g]}),Object(c.jsxs)("div",{className:"badge badge-primary",children:["Public Repos : ",v]}),Object(c.jsxs)("div",{className:"badge badge-primary",children:["Public Gists : ",y]})]}),Object(c.jsx)(w,{})]})},k="SET_LOADING",E="SEARCH_USERS",_="CLEAR_USERS",U="GET_USER",A="SET_REPOS",C="SET_ALERT",R="REMOVE_ALERT",T="SET_ALL_USERS",G=function(e,t){switch(t.type){case C:return{alert:t.payload};case R:return{alert:null};default:return e}},P=function(e){var t=Object(a.useReducer)(G,{alert:null}),r=Object(o.a)(t,2),s=r[0],n=r[1];return Object(c.jsx)(h.Provider,{value:{alert:s.alert,showAlert:function(e,t){n({type:C,payload:{msg:e,type:t}}),setTimeout((function(){n({type:R})}),3e3)}},children:e.children})},F=r(10),H=r.n(F),L=r(14),W=r(15),B=r.n(W),D=r(7),I=function(e,t){switch(t.type){case E:return Object(D.a)(Object(D.a)({},e),{},{users:t.payload,loading:!1});case k:return Object(D.a)(Object(D.a)({},e),{},{loading:!0});case _:return Object(D.a)(Object(D.a)({},e),{},{users:[]});case U:return Object(D.a)(Object(D.a)({},e),{},{user:t.payload,loading:!1});case A:return Object(D.a)(Object(D.a)({},e),{},{repos:t.payload,loading:!1});case T:return Object(D.a)(Object(D.a)({},e),{},{users:t.payload,loading:!1});default:return e}},J=function(e){var t=Object(a.useReducer)(I,{users:[],user:{},repos:[],loading:!1}),r=Object(o.a)(t,2),s=r[0],n=r[1],i=function(){return n({type:k})},l=function(){var e=Object(L.a)(H.a.mark((function e(t){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,B.a.get("https://api.github.com/search/users?q=".concat(t));case 3:r=e.sent,n({type:E,payload:r.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(L.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,B.a.get("https://api.github.com/users");case 3:t=e.sent,n({type:T,payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(L.a)(H.a.mark((function e(t){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,B.a.get("https://api.github.com/users/".concat(t));case 3:r=e.sent,n({type:U,payload:r.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(L.a)(H.a.mark((function e(t){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,B.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc"));case 3:r=e.sent,n({type:A,payload:r.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(d.Provider,{value:{users:s.users,user:s.user,repos:s.repos,loading:s.loading,searchUsers:l,clearUsers:function(){return n({type:_})},getUser:u,getUserRepos:b,setAllUsers:j},children:e.children})};function V(){return Object(c.jsx)(J,{children:Object(c.jsx)(P,{children:Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{title:"GitHub Profile Search"}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(v,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/react-github-profiles",render:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(m,{})]})}}),Object(c.jsx)(l.a,{exact:!0,path:"/react-github-profiles/about",children:Object(c.jsx)(b,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/react-github-profiles/user/:username",component:S})]})]})]})})})})}n.a.render(Object(c.jsx)(V,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.e559b994.chunk.js.map