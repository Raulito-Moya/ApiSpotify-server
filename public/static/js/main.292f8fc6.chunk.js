(this.webpackJsonpapispotify=this.webpackJsonpapispotify||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(19),a=n.n(c),o=n(6),s=n(22),i=n(44),l=n(5),u="[fetch] getParams",j="[login] getUser",d="[logout] logout",b="[items] getitems",p="[ui] errorForm",m="[ui] cleanErrorForm",h={nombre:"BD Name",login:JSON.parse(localStorage.getItem("login")),token:"token",uid:"uid"},f={items:[]},O={artist:"ej",type:"ej/track,album",market:"ej/US,ES"},g={msg:!1},x="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,y=Object(s.b)({params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{artist:t.payload.artist,type:t.payload.type,market:t.payload.market});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{login:!0,nombre:t.payload.user.nombre,token:t.payload.token,uid:t.payload.user.uid});case d:return{login:!1,token:null};default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{items:t.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{msg:t.payload.msg});case m:return Object(l.a)(Object(l.a)({},e),{},{msg:!1});default:return e}}}),v=Object(s.d)(y,x(Object(s.a)(i.a))),w=n(4),S=n.n(w),k=n(9),N=n(18),C=n(7),E=n(45),I=n(0),T=["isLoged","component"],J=function(e){var t=e.isLoged,n=e.component,r=Object(E.a)(e,T);return Object(I.jsx)(C.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(I.jsx)(n,Object(l.a)({},e)):Object(I.jsx)(C.a,{to:"/login"})}}))},P=function(e){var t=e.isLoged,n=e.component;return Object(I.jsx)(C.b,{component:function(e){return t?Object(I.jsx)(C.a,{to:"/"}):Object(I.jsx)(n,Object(l.a)({},e))}})},L=n(13),U=n(24),D=n.n(U),F=function(e){try{return fetch("http://localhost:4000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t)}},_=function(e){try{return fetch("http://localhost:4000/api/auth/loginuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t)}},A=function(e){try{return fetch("http://localhost:4000/api/auth/getuserbyid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t)}},B=function(e,t,n,r){console.log(e);var c="https://api.spotify.com/v1/search?q=".concat(t,"&type=").concat(n,"&market=").concat(r);return D.a.get(c,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})},H=function(e){return{type:p,payload:e}},R=function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:4000/api/auth/authorizeuser",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:t=e.sent,window.location.href=t.data,"http://localhost:4000/api/auth/usertokenauth";case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){return function(){var t=Object(k.a)(S.a.mark((function t(n){var r,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,console.log(c),c.msg?n(H(c)):n(z(c));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(e){return{type:j,payload:e}},V=n(20),W=n.n(V),X=n(23),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(L.a)(t,2),c=n[0],a=n[1],o=function(){a(e)},s=function(e){var t=e.target;a(Object(l.a)(Object(l.a)({},c),{},Object(X.a)({},t.name,t.value)))};return[c,s,o]},M=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})).auth,n=q({nombre:"",correo:"",password:"",confirmPassword:""}),r=Object(L.a)(n,2),c=r[0],a=c.nombre,s=c.correo,i=c.password,l=c.confirmPassword,u=r[1],j=function(){var n=Object(k.a)(S.a.mark((function n(r){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{console.log(a,s,i),r.preventDefault(),i!==l?W.a.fire("Error","Las contrasenas deben ser igaules","error"):a.length<=2?W.a.fire("Error","El nombre deben ser un nombe valido","error"):s.length<=7?W.a.fire("Error","El correo debe ser un correo valido","error"):(e(G({nombre:a,correo:s,password:i})),localStorage.setItem("login",JSON.stringify(t.login)))}catch(c){console.log(c)}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(I.jsx)("div",{className:"row item",children:Object(I.jsxs)("form",{type:"submit",className:"col-sm-12",children:[Object(I.jsx)("h2",{children:"Create a Account"}),Object(I.jsx)("label",{className:"form-label user",children:"Name"}),Object(I.jsx)("input",{type:"click",name:"nombre",value:a,onChange:u,className:"form-control name",placeholder:"nombre"}),Object(I.jsx)("label",{className:"form-label user",children:"Correo"}),Object(I.jsx)("input",{type:"click",name:"correo",value:s,onChange:u,className:"form-control",placeholder:"name@example.com"}),Object(I.jsx)("label",{className:"form-label user",children:"Password"}),Object(I.jsx)("input",{type:"click",name:"password",value:i,onChange:u,className:"form-control ",placeholder:"password"}),Object(I.jsx)("input",{type:"click",name:"confirmPassword",value:l,onChange:u,className:"form-control ",placeholder:"Confirm Password"}),Object(I.jsx)("button",{type:"submit",onClick:j,className:"buttom",children:"LoginUser"})]})})},K=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})).auth,n=q({correo:"",password:""}),r=Object(L.a)(n,2),c=r[0],a=c.correo,s=c.password,i=r[1];return Object(I.jsx)("div",{className:"row item",children:Object(I.jsxs)("form",{type:"submit",className:"col-sm-10",children:[Object(I.jsx)("h2",{children:"Login"}),Object(I.jsx)("label",{className:"form-label user",children:"Correo"}),Object(I.jsx)("input",{className:"form-control name",type:"click",name:"correo",value:a,onChange:i,placeholder:"correo"}),Object(I.jsx)("label",{className:"form-label user",children:"Password"}),Object(I.jsx)("input",{className:"form-control",type:"click",name:"password",value:s,onChange:i,placeholder:"Password"}),Object(I.jsx)("button",{type:"submit",onClick:function(n){var r;n.preventDefault(),console.log(a,s),a.length<=7?W.a.fire("Error","El correo debe ser un correo valido","error"):(e((r={correo:a,password:s},function(){var e=Object(k.a)(S.a.mark((function e(t){var n,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r);case 2:return n=e.sent,e.next=5,n.json();case 5:(c=e.sent).msg?t(H(c)):(console.log(c),t(z(c)),t({type:m}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),localStorage.setItem("login",JSON.stringify(t.login)))},className:"buttom",children:"LoginUser"})]})})},Q=function(){var e,t=Object(o.c)((function(e){return e})).ui,n=Object(r.useState)(JSON.parse(localStorage.getItem("formvalue"))),c=Object(L.a)(n,2),a=c[0],s=c[1];return JSON.stringify(localStorage.setItem("formvalue",a)),e=JSON.parse(localStorage.getItem("formvalue")),console.log(e),Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)("div",{className:"loginScreen",children:[e&&Object(I.jsx)(K,{}),!e&&Object(I.jsx)(M,{}),t.msg&&Object(I.jsx)("h5",{children:"Usuario o Contrasena incorrectos"}),Object(I.jsx)("div",{className:"buttom-change",children:Object(I.jsx)("button",{type:"click",className:"btn",onClick:function(){s(!a),console.log(a)},children:e?"Create a Acount ":"Login User"})}),Object(I.jsxs)("div",{className:"item",children:[Object(I.jsx)("h4",{children:"Login with Spotify"}),Object(I.jsx)("button",{type:"click",onClick:function(){R()},children:Object(I.jsx)("img",{src:"/img/spotify-logo.png",alt:""})})]})]})})},Y=function(e){var t=e.match,n=e.history,r=Object(o.c)((function(e){return e.items})).items;console.log(r);var c=t.params.id;if(0===r.length)return Object(I.jsx)(C.a,{to:"/body"});var a=r.filter((function(e){return e.id===c}));console.log(a);var s=a[0],i=s.name,l=s.images,u=s.artists,j=s.external_urls,d=s.release_date,b=s.total_tracks,p=s.type,m=j.spotify;console.log(i,l,u,j,d,b,p),console.log(l[0]);return Object(I.jsxs)("div",{className:"card item",style:{width:"20rem"},children:[Object(I.jsx)("h1",{children:" Card Review "}),Object(I.jsx)("img",{src:l[1].url,alt:"imagen de card",className:"card-img-top"}),Object(I.jsxs)("div",{className:"card-body",children:[Object(I.jsxs)("h3",{children:["type: ",p]}),Object(I.jsxs)("h3",{className:"card-title",children:["name: ",i]}),Object(I.jsxs)("h3",{className:"card-text",children:["total trakcks: ",b]}),Object(I.jsxs)("h3",{className:"card-text",children:["release date: ",d]}),Object(I.jsx)("a",{href:m,children:"Escuchar en Spotify"})]}),Object(I.jsx)("div",{children:Object(I.jsx)("h3",{})}),Object(I.jsx)("button",{type:"click",onClick:function(){n.push("/body")},children:"Return"})]})},Z=function(e,t,n){return{type:u,payload:{artist:e,type:t,market:n}}},$=function(e,t,n,r){return function(){var c=Object(k.a)(S.a.mark((function c(a){var o,s,i,l,u;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,B(e,t,n,r);case 2:return o=c.sent,c.next=5,o;case 5:s=c.sent,i=s.data,console.log(i),i.albums?(l=i.albums.items,a(ee(l))):i.tracks&&(u=i.tracks.items,console.log(u),a(ee(u)));case 9:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},ee=function(e){return{type:b,payload:e}},te=function(e){var t=e.history,n=Object(o.b)(),r=q({artist:"artist",type:"album",market:"US"}),c=Object(L.a)(r,2),a=c[0],s=a.artist,i=a.type,l=a.market,u=c[1],j=Object(o.c)((function(e){return e})),b=j.auth,p=(j.params,b.token),m=function(){var e=Object(k.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n(Z(s,i,l));case 3:n($(p,s,i,l));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{children:[Object(I.jsx)("h5",{children:b.nombre&&"Bienvenido ".concat(b.nombre)}),Object(I.jsxs)("form",{class:"mb-3",onSubmit:m,children:[Object(I.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Escriba su artista"}),Object(I.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"nombre de un artista",onChange:u,name:"artist"}),Object(I.jsx)("label",{children:"Seleccione un type"}),Object(I.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:u,value:i,name:"type",children:[Object(I.jsx)("option",{value:"album",selected:!0,children:"album"}),Object(I.jsx)("option",{value:"Artist",children:"artist"}),Object(I.jsx)("option",{value:"track",children:"track"})]}),Object(I.jsx)("label",{children:"Seleccione un market"}),Object(I.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:u,value:l,name:"market",children:[Object(I.jsx)("option",{value:"US",selected:!0,children:"US"}),Object(I.jsx)("option",{value:"ES",children:"ES"})]}),Object(I.jsx)("button",{type:"submit",children:"Go"})]}),Object(I.jsx)("button",{type:"click",onClick:function(){t.replace("/login"),n({type:d}),localStorage.setItem("login",JSON.stringify(!1)),localStorage.setItem("uid",JSON.stringify(!1)),localStorage.setItem("data",!1)},children:"Logout"})]})},ne=function(){return Object(I.jsx)("div",{children:Object(I.jsx)("h1",{children:"Search Spotify"})})},re=n(46),ce=n(90),ae=n(91),oe=n(92),se=n(93),ie=function(e){var t=Object(r.useState)(0),n=Object(L.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(!1),i=Object(L.a)(s,2),l=i[0],u=i[1],j=Object(o.c)((function(e){return e.items})).items.map((function(e){return{image:window.innerWidth>=640&&e.images[0]||window.innerWidth<=640&&e.images[1],url:e.href,id:e.id,name:e.name}})).map((function(e){return{src:e.image,id:e.id,url:e.url,altText:e.name,caption:e.name}})),d=function(){if(!l){var e=c===j.length-1?0:c+1;a(e)}},b=function(){if(!l){var e=0===c?j.length-1:c-1;a(e)}},p=j.map((function(e){return Object(I.jsxs)(re.a,{onExiting:function(){return u(!0)},onExited:function(){return u(!1)},children:[Object(I.jsx)("img",{src:e.src.url,alt:j.altText,width:"100%",height:e.src.height}),Object(I.jsx)(N.b,{to:"./body/card/".concat(e.id),className:"link",children:"Ver Detalles"}),Object(I.jsx)(ce.a,{captionText:e.caption,captionHeader:e.caption})]},e.src.url)}));return Object(I.jsxs)(ae.a,{activeIndex:c,next:d,previous:b,className:"carusel-container",children:[Object(I.jsx)(oe.a,{items:j,activeIndex:c,onClickHandler:function(e){l||a(e)}}),p,Object(I.jsx)(se.a,{direction:"prev",directionText:"Previous",onClickHandler:b}),Object(I.jsx)(se.a,{direction:"next",directionText:"Next",onClickHandler:d})]})},le=function(e){var t=e.history,n=Object(o.b)(),c=Object(o.c)((function(e){return e})).auth;"uid"!==c.uid&&localStorage.setItem("uid",c.uid);var a=localStorage.getItem("uid");return Object(r.useEffect)((function(){var e;"uid"===c.uid&&n((e={uid:a},function(){var t=Object(k.a)(S.a.mark((function t(n){var r,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,console.log(c),n(z(c));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),localStorage.setItem("login",JSON.stringify(c.login))}),[a]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ne,{}),Object(I.jsx)(te,{history:t}),Object(I.jsx)(ie,{})]})},ue=function(){return Object(I.jsx)("div",{children:Object(I.jsxs)(C.d,{children:[Object(I.jsx)(C.b,{exact:!0,path:"/body",component:le}),Object(I.jsx)(C.b,{exact:!0,path:"/body/card/:id",component:Y}),Object(I.jsx)(C.a,{to:"/body"})]})})},je=function(){var e=Object(k.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new URLSearchParams(window.location.search),n=t.get("code"),"http://localhost:4000/api/auth/usertokenauth",n?(n={codigo:n},fetch("http://localhost:4000/api/auth/usertokenauth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("data",JSON.stringify(e)),localStorage.setItem("login",JSON.stringify(!0))})).catch(console.log())):console.log("no hay codigo");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();je();var de=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})).auth.login;t=JSON.parse(localStorage.getItem("login"));var n=!1;return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:n=JSON.parse(localStorage.getItem("data"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(n),n&&(console.log(typeof n),console.log(n.user),console.log("pase la validacion"),e({type:j,payload:n}),console.log(t))}),[n]),Object(I.jsx)(N.a,{children:Object(I.jsxs)(C.d,{children:[Object(I.jsx)(P,{exact:!0,path:"/login",component:Q,isLoged:t}),Object(I.jsx)(J,{path:"/",component:ue,isLoged:t}),Object(I.jsx)(C.a,{to:"/login"})]})})},be=function(){return Object(I.jsx)(o.a,{store:v,children:Object(I.jsx)(de,{})})},pe=(n(87),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))});a.a.render(Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(be,{})}),document.getElementById("root")),pe()}},[[88,1,2]]]);
//# sourceMappingURL=main.292f8fc6.chunk.js.map