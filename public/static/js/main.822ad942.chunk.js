(this.webpackJsonpapispotify=this.webpackJsonpapispotify||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(19),o=n.n(r),a=n(6),s=n(22),i=n(44),l=n(5),u="[fetch] getParams",j="[login] getUser",d="[logout] logout",b="[items] getitems",p="[ui] errorForm",m="[ui] cleanErrorForm",h={nombre:"BD Name",login:JSON.parse(localStorage.getItem("login")),token:"token",uid:"uid"},f={items:[]},O={artist:"ej",type:"ej/track,album",market:"ej/US,ES"},g={msg:!1},x="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,y=Object(s.b)({params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{artist:t.payload.artist,type:t.payload.type,market:t.payload.market});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{login:!0,nombre:t.payload.user.nombre,token:t.payload.token,uid:t.payload.user.uid});case d:return{login:!1,token:null};default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{items:t.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{msg:t.payload.msg});case m:return Object(l.a)(Object(l.a)({},e),{},{msg:!1});default:return e}}}),v=Object(s.d)(y,x(Object(s.a)(i.a))),w=n(4),k=n.n(w),S=n(9),N=n(18),C=n(7),E=n(45),T=n(0),I=["isLoged","component"],P=function(e){var t=e.isLoged,n=e.component,c=Object(E.a)(e,I);return Object(T.jsx)(C.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return t?Object(T.jsx)(n,Object(l.a)({},e)):Object(T.jsx)(C.a,{to:"/login"})}}))},L=function(e){var t=e.isLoged,n=e.component;return Object(T.jsx)(C.b,{component:function(e){return t?Object(T.jsx)(C.a,{to:"/"}):Object(T.jsx)(n,Object(l.a)({},e))}})},J=n(13),U=n(24),D=n.n(U),F=function(e){try{return fetch("http://localhost:4000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t)}},_=function(e){try{return fetch("http://localhost:4000/api/auth/loginuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t)}},A=function(e){try{return fetch("http://localhost:4000/api/auth/getuserbyid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t)}},B=function(e,t,n,c){console.log(e);var r="https://api.spotify.com/v1/search?q=".concat(t,"&type=").concat(n,"&market=").concat(c);return D.a.get(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})},H=function(e){return{type:p,payload:e}},R=function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:4000/api/auth/authorizeuser",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:t=e.sent,window.location.href=t.data,"http://localhost:4000/api/auth/usertokenauth";case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){return function(){var t=Object(S.a)(k.a.mark((function t(n){var c,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:return c=t.sent,t.next=5,c.json();case 5:r=t.sent,console.log(r),r.msg?n(H(r)):n(z(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(e){return{type:j,payload:e}},V=n(20),W=n.n(V),X=n(23),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(J.a)(t,2),r=n[0],o=n[1],a=function(){o(e)},s=function(e){var t=e.target;o(Object(l.a)(Object(l.a)({},r),{},Object(X.a)({},t.name,t.value)))};return[r,s,a]},M=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e})).auth,n=q({nombre:"",correo:"",password:"",confirmPassword:""}),c=Object(J.a)(n,2),r=c[0],o=r.nombre,s=r.correo,i=r.password,l=r.confirmPassword,u=c[1],j=function(){var n=Object(S.a)(k.a.mark((function n(c){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{console.log(o,s,i),c.preventDefault(),i!==l?W.a.fire("Error","Las contrasenas deben ser igaules","error"):o.length<=2?W.a.fire("Error","El nombre deben ser un nombe valido","error"):s.length<=7?W.a.fire("Error","El correo debe ser un correo valido","error"):(e(G({nombre:o,correo:s,password:i})),localStorage.setItem("login",JSON.stringify(t.login)))}catch(r){console.log(r)}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(T.jsx)("div",{className:"row item",children:Object(T.jsxs)("form",{type:"submit",className:"col-sm-12",children:[Object(T.jsx)("h2",{children:"Create a Account"}),Object(T.jsx)("label",{className:"form-label user",children:"Name"}),Object(T.jsx)("input",{type:"click",name:"nombre",value:o,onChange:u,className:"form-control name",placeholder:"nombre"}),Object(T.jsx)("label",{className:"form-label user",children:"Correo"}),Object(T.jsx)("input",{type:"click",name:"correo",value:s,onChange:u,className:"form-control",placeholder:"name@example.com"}),Object(T.jsx)("label",{className:"form-label user",children:"Password"}),Object(T.jsx)("input",{type:"click",name:"password",value:i,onChange:u,className:"form-control ",placeholder:"password"}),Object(T.jsx)("input",{type:"click",name:"confirmPassword",value:l,onChange:u,className:"form-control ",placeholder:"Confirm Password"}),Object(T.jsx)("button",{type:"submit",onClick:j,className:"buttom",children:"LoginUser"})]})})},K=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e})).auth,n=q({correo:"",password:""}),c=Object(J.a)(n,2),r=c[0],o=r.correo,s=r.password,i=c[1];return Object(T.jsx)("div",{className:"row item",children:Object(T.jsxs)("form",{type:"submit",className:"col-sm-10",children:[Object(T.jsx)("h2",{children:"Login"}),Object(T.jsx)("label",{className:"form-label user",children:"Correo"}),Object(T.jsx)("input",{className:"form-control name",type:"click",name:"correo",value:o,onChange:i,placeholder:"correo"}),Object(T.jsx)("label",{className:"form-label user",children:"Password"}),Object(T.jsx)("input",{className:"form-control",type:"click",name:"password",value:s,onChange:i,placeholder:"Password"}),Object(T.jsx)("button",{type:"submit",onClick:function(n){var c;n.preventDefault(),console.log(o,s),o.length<=7?W.a.fire("Error","El correo debe ser un correo valido","error"):(e((c={correo:o,password:s},function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(c);case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).msg?t(H(r)):(console.log(r),t(z(r)),t({type:m}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),localStorage.setItem("login",JSON.stringify(t.login)))},className:"buttom",children:"LoginUser"})]})})},Q=function(){var e,t=Object(a.c)((function(e){return e})).ui,n=Object(c.useState)(JSON.parse(localStorage.getItem("formvalue"))),r=Object(J.a)(n,2),o=r[0],s=r[1];return JSON.stringify(localStorage.setItem("formvalue",o)),e=JSON.parse(localStorage.getItem("formvalue")),console.log(e),Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"loginScreen",children:[e&&Object(T.jsx)(K,{}),!e&&Object(T.jsx)(M,{}),t.msg&&Object(T.jsx)("h5",{children:"Usuario o Contrasena incorrectos"}),Object(T.jsx)("div",{className:"buttom-change",children:Object(T.jsx)("button",{type:"click",className:"btn",onClick:function(){s(!o),console.log(o)},children:e?"Create a Acount ":"Login User"})}),Object(T.jsxs)("div",{className:"item",children:[Object(T.jsx)("h4",{children:"Login with Spotify"}),Object(T.jsx)("button",{type:"click",onClick:function(){R()},children:Object(T.jsx)("img",{src:"/img/spotify-logo.png",alt:""})})]})]})})},Y=function(e){var t=e.match,n=e.history,c=Object(a.c)((function(e){return e.items})).items;console.log(c);var r=t.params.id;if(0===c.length)return Object(T.jsx)(C.a,{to:"/body"});var o=c.filter((function(e){return e.id===r}));console.log(o);var s=o[0],i=s.name,l=s.images,u=s.artists,j=s.external_urls,d=s.release_date,b=s.total_tracks,p=s.type,m=j.spotify;console.log(i,l,u,j,d,b,p),console.log(l[0]);return Object(T.jsxs)("div",{className:"card item",style:{width:"20rem"},children:[Object(T.jsx)("h1",{children:" Card Review "}),Object(T.jsx)("img",{src:l[1].url,alt:"imagen de card",className:"card-img-top"}),Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsxs)("h3",{children:["type: ",p]}),Object(T.jsxs)("h3",{className:"card-title",children:["name: ",i]}),Object(T.jsxs)("h3",{className:"card-text",children:["total trakcks: ",b]}),Object(T.jsxs)("h3",{className:"card-text",children:["release date: ",d]}),Object(T.jsx)("a",{href:m,children:"Escuchar en Spotify"})]}),Object(T.jsx)("div",{children:Object(T.jsx)("h3",{})}),Object(T.jsx)("button",{type:"click",onClick:function(){n.push("/body")},children:"Return"})]})},Z=function(e,t,n){return{type:u,payload:{artist:e,type:t,market:n}}},$=function(e,t,n,c){return function(){var r=Object(S.a)(k.a.mark((function r(o){var a,s,i,l,u;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,B(e,t,n,c);case 2:return a=r.sent,r.next=5,a;case 5:s=r.sent,i=s.data,console.log(i),i.albums?(l=i.albums.items,o(ee(l))):i.tracks&&(u=i.tracks.items,console.log(u),o(ee(u)));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},ee=function(e){return{type:b,payload:e}},te=function(e){var t=e.history,n=Object(a.b)(),c=q({artist:"artist",type:"album",market:"US"}),r=Object(J.a)(c,2),o=r[0],s=o.artist,i=o.type,l=o.market,u=r[1],j=Object(a.c)((function(e){return e})),b=j.auth,p=(j.params,b.token),m=function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n(Z(s,i,l));case 3:n($(p,s,i,l));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)("h5",{children:b.nombre&&"Bienvenido ".concat(b.nombre)}),Object(T.jsxs)("form",{class:"mb-3",onSubmit:m,children:[Object(T.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Escriba su artista"}),Object(T.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"nombre de un artista",onChange:u,name:"artist"}),Object(T.jsx)("label",{children:"Seleccione un type"}),Object(T.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:u,value:i,name:"type",children:[Object(T.jsx)("option",{value:"album",selected:!0,children:"album"}),Object(T.jsx)("option",{value:"Artist",children:"artist"}),Object(T.jsx)("option",{value:"track",children:"track"})]}),Object(T.jsx)("label",{children:"Seleccione un market"}),Object(T.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:u,value:l,name:"market",children:[Object(T.jsx)("option",{value:"US",selected:!0,children:"US"}),Object(T.jsx)("option",{value:"ES",children:"ES"})]}),Object(T.jsx)("button",{type:"submit",children:"Go"})]}),Object(T.jsx)("button",{type:"click",onClick:function(){t.replace("/login"),n({type:d}),localStorage.setItem("login",JSON.stringify(!1)),localStorage.setItem("uid",JSON.stringify(!1)),localStorage.setItem("data",!1)},children:"Logout"})]})},ne=function(){return Object(T.jsx)("div",{children:Object(T.jsx)("h1",{children:"Search Spotify"})})},ce=n(46),re=n(90),oe=n(91),ae=n(92),se=n(93),ie=function(e){var t=Object(c.useState)(0),n=Object(J.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)(!1),i=Object(J.a)(s,2),l=i[0],u=i[1],j=Object(a.c)((function(e){return e.items})).items.map((function(e){return{image:window.innerWidth>=640&&e.images[0]||window.innerWidth<=640&&e.images[1],url:e.href,id:e.id,name:e.name}})).map((function(e){return{src:e.image,id:e.id,url:e.url,altText:e.name,caption:e.name}})),d=function(){if(!l){var e=r===j.length-1?0:r+1;o(e)}},b=function(){if(!l){var e=0===r?j.length-1:r-1;o(e)}},p=j.map((function(e){return Object(T.jsxs)(ce.a,{onExiting:function(){return u(!0)},onExited:function(){return u(!1)},children:[Object(T.jsx)("img",{src:e.src.url,alt:j.altText,width:"100%",height:e.src.height}),Object(T.jsx)(N.b,{to:"./body/card/".concat(e.id),className:"link",children:"Ver Detalles"}),Object(T.jsx)(re.a,{captionText:e.caption,captionHeader:e.caption})]},e.src.url)}));return Object(T.jsxs)(oe.a,{activeIndex:r,next:d,previous:b,className:"carusel-container",children:[Object(T.jsx)(ae.a,{items:j,activeIndex:r,onClickHandler:function(e){l||o(e)}}),p,Object(T.jsx)(se.a,{direction:"prev",directionText:"Previous",onClickHandler:b}),Object(T.jsx)(se.a,{direction:"next",directionText:"Next",onClickHandler:d})]})},le=function(e){var t=e.history,n=Object(a.b)(),r=Object(a.c)((function(e){return e})).auth;"uid"!==r.uid&&localStorage.setItem("uid",r.uid);var o=localStorage.getItem("uid");return Object(c.useEffect)((function(){var e;"uid"===r.uid&&n((e={uid:o},function(){var t=Object(S.a)(k.a.mark((function t(n){var c,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:return c=t.sent,t.next=5,c.json();case 5:r=t.sent,console.log(r),n(z(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),localStorage.setItem("login",JSON.stringify(r.login))}),[o]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(ne,{}),Object(T.jsx)(te,{history:t}),Object(T.jsx)(ie,{})]})},ue=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(C.d,{children:[Object(T.jsx)(C.b,{exact:!0,path:"/body",component:le}),Object(T.jsx)(C.b,{exact:!0,path:"/body/card/:id",component:Y}),Object(T.jsx)(C.a,{to:"/body"})]})})},je=function(e){if(e){e={codigo:e},console.log("se llamo");fetch("http://localhost:4000/api/auth/usertokenauth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch(console.log())}else console.log("no hay codigo")},de=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e})).auth.login,n=new URLSearchParams(window.location.search);return Object(c.useEffect)(Object(S.a)(k.a.mark((function c(){var r,o;return k.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=n.get("code"),console.log(r),c.next=4,je(r);case 4:o=c.sent,console.log(o),o&&(console.log(typeof o),console.log(o.user),console.log("pase la validacion"),e({type:j,payload:o}),console.log(t));case 7:case"end":return c.stop()}}),c)}))),[window.location.search]),Object(T.jsx)(N.a,{children:Object(T.jsxs)(C.d,{children:[Object(T.jsx)(L,{exact:!0,path:"/login",component:Q,isLoged:t}),Object(T.jsx)(P,{path:"/",component:ue,isLoged:t}),Object(T.jsx)(C.a,{to:"/login"})]})})},be=function(){return Object(T.jsx)(a.a,{store:v,children:Object(T.jsx)(de,{})})},pe=(n(87),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))});o.a.render(Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(be,{})}),document.getElementById("root")),pe()}},[[88,1,2]]]);
//# sourceMappingURL=main.822ad942.chunk.js.map