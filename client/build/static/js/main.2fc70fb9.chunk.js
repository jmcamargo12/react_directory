(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t(60)},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),l=t(22),r=t.n(l);t(31),t(32),t(33);var o=function(){return x(),i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"},i.a.createElement("input",{type:"text",id:"filterState"}),i.a.createElement("button",{onClick:C},"Search by State")),i.a.createElement("div",null,i.a.createElement("button",{onClick:T}," Ascending"),i.a.createElement("button",{onClick:R},"Descending"),i.a.createElement("button",{onClick:k},"Males"),i.a.createElement("button",{onClick:B},"Females")),i.a.createElement("div",{id:"content"})))};t(34);var c=function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"}))};t(35);var m=function(){return i.a.createElement("div",{className:"about"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row align-items-center my-5"},i.a.createElement("div",{class:"col-lg-7"},i.a.createElement("img",{class:"img-fluid rounded mb-4 mb-lg-0",src:"http://placehold.it/900x400",alt:""})),i.a.createElement("div",{class:"col-lg-5"},i.a.createElement("h1",{class:"font-weight-light"}," Your Search Results"),i.a.createElement("h2",{class:"font-weight-light"}),i.a.createElement("p",null,"Lorem Ipsum is simply dummy text o")))))};t(36);var d=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{class:"container-fluid"},i.a.createElement("div",{class:"row align-items-center my-5"},i.a.createElement("div",{class:"col-lg-5"},i.a.createElement("h1",{class:"font-weight-light"},"USER DIRECTORY"),i.a.createElement("h6",null,"Sort and Filter Employees")))))},s=t(23),u=t(1);t(37);var f=function(){return i.a.createElement("div",{className:"about"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row align-items-center my-5"},i.a.createElement("div",{class:"col-lg-7"},i.a.createElement("img",{class:"img-fluid rounded mb-4 mb-lg-0",src:"http://placehold.it/900x400",alt:""})),i.a.createElement("div",{class:"col-lg-5"},i.a.createElement("h1",{class:"font-weight-light"}," Your Saved Books"),i.a.createElement("h2",{class:"font-weight-light"}),i.a.createElement("p",null,"Lorem Ipsum is simply dummy text o")))))};var p,g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(s.a,null,i.a.createElement(c,null),i.a.createElement(d,null),i.a.createElement(u.a,{exact:!0,path:"/",component:o}),i.a.createElement(u.a,{exact:!0,path:"/search",component:o}),i.a.createElement(u.a,{exact:!0,path:"/saved",component:f}),i.a.createElement(u.a,{exact:!0,path:"/results",component:m})))},v=t(25),E=t.n(v),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t.d(n,"find",function(){return x}),t.d(n,"newEmployeeRow",function(){return N}),t.d(n,"maleEmployee",function(){return k}),t.d(n,"femaleEmployee",function(){return B}),t.d(n,"filteredMaleRow",function(){return I}),t.d(n,"filteredFemaleRow",function(){return S}),t.d(n,"filterByLocation",function(){return C}),t.d(n,"filteredByState",function(){return L}),t.d(n,"sortNameAscending",function(){return T}),t.d(n,"sortNameDescending",function(){return R}),t.d(n,"showSorted",function(){return M}),r.a.render(i.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");h?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):w(e)})}}();var y=[],b=[];function x(){return E.a.get("https://randomuser.me/api/?results=66&nat=us").then(function(e){p=e.data.results,console.log(p),N()})}function N(){for(var e=0;e<p.length;e++){var n=document.createElement("div");n.innerHTML='\n        <div id="employee-'+e+'\n        \n            <p id="name-'+e+'">Name: '+p[e].name.first+" "+p[e].name.last+'</p>\n            <p id="number-'+e+'">Phone: '+p[e].cell+'</p>\n            <p id="email-'+e+'">Email: '+p[e].email+'</p>\n            <p id="state-'+e+'">State: '+p[e].location.state+'</p>\n            <img id="image-'+e+'" src="'+p[e].picture.thumbnail+'"></div>',document.getElementById("content").appendChild(n)}}function k(){y=[];for(var e=0;e<p.length;e++)"male"===p[e].gender&&y.push(p[e]);I(),console.log(y)}function B(){y=[];for(var e=0;e<p.length;e++)"female"===p[e].gender&&y.push(p[e]);S(),console.log(y)}function I(){document.getElementById("content").innerText="";for(var e=0;e<y.length;e++){var n=document.createElement("div");n.innerHTML='\n        <div id="employee-'+e+'\n     \n            <p id="first-name-'+e+'">Name: '+y[e].name.first+" "+y[e].name.last+'</p>\n            <p id="number-'+e+'">Phone: '+y[e].cell+'</p>\n            <p id="email-'+e+'">Email: '+y[e].email+'</p>\n            <p id="state-'+e+'">State: '+y[e].location.state+'</p>\n            <img id="image-'+e+'" src="'+y[e].picture.thumbnail+'">\n        </div>\n        ',document.getElementById("content").appendChild(n)}}function S(){document.getElementById("content").innerText="";for(var e=0;e<y.length;e++){var n=document.createElement("div");n.innerHTML='\n        <div id="employee-'+e+'\n       \n            <p id="first-name-'+e+'">Name: '+y[e].name.first+" "+y[e].name.last+'</p>\n            <p id="number-'+e+'">Phone: '+y[e].cell+'</p>\n            <p id="email-'+e+'">Email: '+y[e].email+'</p>\n            <p id="state-'+e+'">State: '+y[e].location.state+'</p>\n            <img id="image-'+e+'" src="'+y[e].picture.thumbnail+'">\n        </div>\n        ',document.getElementById("content").appendChild(n)}}function C(){b=[];for(var e=document.getElementById("filterState").value,n=0;n<p.length;n++)p[n].location.state===e&&b.push(p[n]);L(),console.log(b)}function L(){document.getElementById("content").innerText="";for(var e=0;e<b.length;e++){var n=document.createElement("div");n.innerHTML='\n        <div id="employee-'+e+'\n        \n            <p id="first-name-'+e+'">Name: '+b[e].name.first+" "+b[e].name.last+'</p>\n            <p id="number-'+e+'">Phone: '+b[e].cell+'</p>\n            <p id="email-'+e+'">Email: '+b[e].email+'</p>\n            <p id="state-'+e+'">State: '+b[e].location.state+'</p>\n            <img id="image-'+e+'" src="'+b[e].picture.thumbnail+'">\n        </div>\n        ',document.getElementById("content").appendChild(n)}}function T(){p.sort(function(e,n){var t=e.name.first,a=n.name.first;return t<a?-1:t>a?1:0}),M()}function R(){p.sort(function(e,n){var t=n.name.first,a=e.name.first;return t<a?-1:t>a?1:0}),M()}function M(){document.getElementById("content").innerText="";for(var e=0;e<p.length;e++){var n=document.createElement("div");n.innerHTML='\n        <div id="employee-'+e+'>\n        \n            <p id="name-'+e+'">Name: '+p[e].name.first+" "+p[e].name.last+'</p>\n            <p id="number-'+e+'">Cell: '+p[e].cell+'</p>\n            <p id="email-'+e+'">Email: '+p[e].email+'</p>\n            <img id="image-'+e+'" src="'+p[e].picture.thumbnail+'">\n        </div>\n        ',document.getElementById("content").appendChild(n)}}}},[[26,1,2]]]);
//# sourceMappingURL=main.2fc70fb9.chunk.js.map