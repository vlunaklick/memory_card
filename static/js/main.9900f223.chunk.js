(this.webpackJsonpmemory_card=this.webpackJsonpmemory_card||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),s=n.n(i),r=(n(14),n(2)),o=(n(15),n(0)),m=function(e){return Object(o.jsxs)("header",{className:"headerC",children:[Object(o.jsx)("h1",{className:"pageTit",children:"Memory HxH"}),Object(o.jsxs)("div",{className:"points",children:[Object(o.jsxs)("p",{className:"headP",children:[" ",Object(o.jsx)("strong",{children:"Points:"}),"  ",e.points]}),Object(o.jsxs)("p",{className:"headP",children:[" ",Object(o.jsx)("strong",{children:"Best Score:"})," ",e.bestscore]})]})]})},l=n(5),u=n(7),j=n(8),d=(n(17),n(18),function(e){var t={backgroundImage:'url("'.concat(e.src,'")')};return Object(o.jsxs)("div",{onClick:function(){return e.handleClick(e.id)},className:"marcoCar",children:[Object(o.jsx)("div",{className:"marcoPic",children:Object(o.jsx)("div",{className:"picIn",style:t,alt:""})}),Object(o.jsx)("h4",{className:"fLM",children:e.name})]})});var b=function(e){var t=e.increment,n=e.reset,a=Object(c.useState)(p),i=Object(r.a)(a,2),s=i[0],m=i[1],b=Object(c.useState)(h),g=Object(r.a)(b,2),f=g[0],O=g[1];function x(e){return e.sort((function(){return Math.random()-.5}))}Object(c.useEffect)((function(){m((function(){return Object(j.a)(x(s))}))}),[]);var v=function(e){m((function(){return Object(j.a)(x(s))})),!0===f[e]?(O(h),n()):(O((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(l.a)({},e,!t[e]))})),t())},k=s.map((function(e){return Object(o.jsx)(d,{handleClick:v,src:e.src,name:e.name,id:e.id},e.id)}));return Object(o.jsxs)("main",{className:"mainCont",children:[Object(o.jsx)("h2",{className:"subtitle",children:"You get a point if you select one you havent't yet"}),Object(o.jsx)("div",{className:"wrapper",children:k})]})},p=[{src:"https://pbs.twimg.com/media/E3MQRLCXoAAqhT7.jpg:large",name:"Hisoka",id:"hisoka"},{src:"https://www.giantbomb.com/a/uploads/scale_small/2/27436/2722697-gon_freecss_2617.jpg",name:"Gon",id:"gon"},{src:"https://i.pinimg.com/originals/27/ca/b9/27cab9588503c762f88e6311751ebddf.jpg",name:"Kurapika",id:"kurapika"},{src:"https://pbs.twimg.com/media/EvHYsbtWgAgjJ6S.jpg",name:"Chrollo",id:"chrollo"},{src:"https://www.radiodemente.cl/wp-content/uploads/2020/04/Leorio.jpg",name:"Leorio",id:"leorio"},{src:"https://sm.ign.com/t/ign_latam/screenshot/default/meruem2_sb8r.1280.jpg",name:"Meruem",id:"meruem"},{src:"https://i.pinimg.com/736x/33/25/b3/3325b3ab5ee08ded70e1454656467f4c.jpg",name:"Killua",id:"killua"},{src:"https://i.pinimg.com/474x/b3/46/9b/b3469b100b8c0e042ad96e34ed8f7b85.jpg",name:"illumi",id:"illumi"},{src:"https://pm1.narvii.com/6297/77de566ac5af1f2352defbb54e853324073e6dd2_hq.jpg",name:"Ging",id:"ging"},{src:"https://areajugones.sport.es/wp-content/uploads/2020/04/netero.jpg",name:"Netero",id:"netero"},{src:"https://assets.puzzlefactory.pl/puzzle/286/478/original.jpg",name:"Feitan",id:"feitan"},{src:"https://i.ytimg.com/vi/-aQ9xbVqjYw/maxresdefault.jpg",name:"Razor",id:"razor"}],h={hisoka:!1,gon:!1,kurapika:!1,chrollo:!1,leorio:!1,meruem:!1,killua:!1,illumi:!1,ging:!1,netero:!1,feitan:!1,razor:!1};var g=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(n),s=Object(r.a)(i,2),l=s[0],u=s[1];return Object(c.useEffect)((function(){a(0)}),[]),Object(c.useEffect)((function(){n>l&&u(n),12===n&&alert("You have won!")}),[n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{points:n,bestscore:l}),Object(o.jsx)(b,{increment:function(){a((function(e){return e+1}))},reset:function(){a(0)}})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.9900f223.chunk.js.map