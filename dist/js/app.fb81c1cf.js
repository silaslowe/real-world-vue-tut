(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],v=0,b=[];v<u.length;v++)a=u[v],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"242d":function(e,t,n){"use strict";n("e437")},"2d24":function(e,t,n){},"44ac":function(e,t,n){"use strict";n("82aa")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["f"])("Events"),a=Object(r["f"])(" | "),u=Object(r["f"])("About");function i(e,t){var n=Object(r["w"])("router-link"),i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["g"])(n,{to:{name:"EventList"}},{default:Object(r["B"])((function(){return[o]})),_:1}),a,Object(r["g"])(n,{to:{name:"About"}},{default:Object(r["B"])((function(){return[u]})),_:1})]),Object(r["g"])(i)],64)}n("44ac");const s={};s.render=i;var l=s,v=n("6c02"),b=Object(r["C"])("data-v-623fb607");Object(r["s"])("data-v-623fb607");var d={class:"events"},p=Object(r["g"])("h1",null,"Events for Good",-1);Object(r["q"])();var f=b((function(e,t,n,c,o,a){var u=Object(r["w"])("EventCard");return Object(r["p"])(),Object(r["d"])("div",d,[p,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.events,(function(e){return Object(r["p"])(),Object(r["d"])(u,{key:e.id,event:e},null,8,["event"])})),128))])})),j=Object(r["C"])("data-v-63056c16");Object(r["s"])("data-v-63056c16");var O={class:"event-card"};Object(r["q"])();var h=j((function(e,t,n,c,o,a){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:j((function(){return[Object(r["g"])("div",O,[Object(r["g"])("span",null,Object(r["y"])(n.event.time)+" on "+Object(r["y"])(n.event.date),1),Object(r["g"])("h4",null,Object(r["y"])(n.event.title),1)])]})),_:1},8,["to"])})),g={name:"EventCard",props:{event:{event:Object,required:!0}}};n("7e5e");g.render=h,g.__scopeId="data-v-63056c16";var y=g,m=n("bc3a"),w=n.n(m),E=w.a.create({baseURL:"http://my-json-server.typicode.com/silaslowe/real-world-vue-server",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),_={getEvents:function(){return E.get("/events")},getEvent:function(e){return E.get("/events/"+e)}},k={name:"EventList",components:{EventCard:y},data:function(){return{events:null}},created:function(){var e=this;_.getEvents().then((function(t){e.events=t.data})).catch((function(e){console.log(e)}))}};n("242d");k.render=f,k.__scopeId="data-v-623fb607";var C=k,P=(n("a4d3"),n("e01a"),{key:0});function x(e,t,n,c,o,a){return o.event?(Object(r["p"])(),Object(r["d"])("div",P,[Object(r["g"])("h1",null,Object(r["y"])(o.event.title),1),Object(r["g"])("p",null,Object(r["y"])(o.event.time)+" on "+Object(r["y"])(o.event.date)+" @ "+Object(r["y"])(o.event.location),1),Object(r["g"])("p",null,Object(r["y"])(o.event.description),1)])):Object(r["e"])("",!0)}var S={props:["id"],data:function(){return{event:null}},created:function(){var e=this;_.getEvent(this.id).then((function(t){return e.event=t.data})).catch((function(e){console.log(e)}))}};S.render=x;var A=S,L={class:"about"},M=Object(r["g"])("h1",null,"Events for a better world!",-1);function q(e,t){return Object(r["p"])(),Object(r["d"])("div",L,[M])}const T={};T.render=q;var B=T,D=[{path:"/",name:"EventList",component:C},{path:"/event/:id",name:"EventDetails",props:!0,component:A},{path:"/about",name:"About",component:B}],I=Object(v["a"])({history:Object(v["b"])("/"),routes:D}),J=I,G=n("5502"),R=Object(G["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(l).use(R).use(J).mount("#app")},"7e5e":function(e,t,n){"use strict";n("2d24")},"82aa":function(e,t,n){},e437:function(e,t,n){}});
//# sourceMappingURL=app.fb81c1cf.js.map