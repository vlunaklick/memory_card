(this.webpackJsonpmemory_card=this.webpackJsonpmemory_card||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(9),s=n.n(r),a=(n(14),n(2)),o=(n(15),n(16),n(0)),u=function(e){return Object(o.jsxs)("header",{className:"headerC",children:[Object(o.jsx)("h1",{className:"pageTit",children:"Memory HxH"}),Object(o.jsxs)("div",{className:"points",children:[Object(o.jsxs)("p",{className:"headP",children:[" ",Object(o.jsx)("strong",{children:"Points:"}),"  ",e.points]}),Object(o.jsxs)("p",{className:"headP",children:[" ",Object(o.jsx)("strong",{children:"Best Score:"})," ",e.bestscore]})]})]})},m=n(5),l=n(7),j=n(8),d=(n(18),n(19),function(e){return Object(o.jsxs)("div",{onClick:function(){return e.handleClick(e.id)},className:"marcoCar",children:[Object(o.jsx)("div",{className:"marcoPic",children:Object(o.jsx)("img",{className:"picIn",src:e.src,alt:""})}),Object(o.jsx)("h4",{children:e.name})]})});var b=function(e){var t=e.increment,n=e.reset,i=Object(c.useState)(p),r=Object(a.a)(i,2),s=r[0],u=r[1],b=Object(c.useState)(h),g=Object(a.a)(b,2),f=g[0],O=g[1];function x(e){return e.sort((function(){return Math.random()-.5}))}Object(c.useEffect)((function(){u((function(){return Object(j.a)(x(s))}))}),[]);var k=function(e){u((function(){return Object(j.a)(x(s))})),!0===f[e]?(O(h),n()):(O((function(t){return console.log(f),console.log(t[e]),Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},e,!t[e]))})),t())},v=s.map((function(e){return Object(o.jsx)(d,{handleClick:k,src:e.src,name:e.name,id:e.id},e.id)}));return Object(o.jsxs)("main",{className:"mainCont",children:[Object(o.jsx)("h2",{className:"subtitle",children:"You get a point if you select one you havent't yet"}),Object(o.jsx)("div",{className:"wrapper",children:v})]})},p=[{src:"https://pbs.twimg.com/media/E3MQRLCXoAAqhT7.jpg:large",name:"Hisoka",id:"hisoka"},{src:"https://www.tierragamer.com/wp-content/uploads/2019/08/Hunter-x-Hunter-Gon-450x300.jpg",name:"Gon",id:"gon"},{src:"https://i.pinimg.com/originals/27/ca/b9/27cab9588503c762f88e6311751ebddf.jpg",name:"Kurapika",id:"kurapika"},{src:"https://pbs.twimg.com/media/EvHYsbtWgAgjJ6S.jpg",name:"Chrollo",id:"chrollo"},{src:"https://www.radiodemente.cl/wp-content/uploads/2020/04/Leorio.jpg",name:"Leorio",id:"leorio"},{src:"https://sm.ign.com/t/ign_latam/screenshot/default/meruem2_sb8r.1280.jpg",name:"Meruem",id:"meruem"},{src:"https://i.pinimg.com/736x/33/25/b3/3325b3ab5ee08ded70e1454656467f4c.jpg",name:"Killua",id:"killua"},{src:"https://i.pinimg.com/474x/b3/46/9b/b3469b100b8c0e042ad96e34ed8f7b85.jpg",name:"illumi",id:"illumi"},{src:"https://pm1.narvii.com/6297/77de566ac5af1f2352defbb54e853324073e6dd2_hq.jpg",name:"Ging",id:"ging"},{src:"https://areajugones.sport.es/wp-content/uploads/2020/04/netero.jpg",name:"Netero",id:"netero"},{src:"https://assets.puzzlefactory.pl/puzzle/286/478/original.jpg",name:"Feitan",id:"feitan"},{src:"https://i.ytimg.com/vi/-aQ9xbVqjYw/maxresdefault.jpg",name:"Razor",id:"razor"}],h={hisoka:!1,gon:!1,kurapika:!1,chrollo:!1,leorio:!1,meruem:!1,killua:!1,illumi:!1,ging:!1,netero:!1,feitan:!1,razor:!1};var g=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(n),s=Object(a.a)(r,2),m=s[0],l=s[1];return Object(c.useEffect)((function(){i(0)}),[]),Object(c.useEffect)((function(){n>m&&l(n)}),[n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{points:n,bestscore:m}),Object(o.jsx)(b,{increment:function(){i((function(e){return e+1}))},reset:function(){i(0)}})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.5d240b37.chunk.js.map