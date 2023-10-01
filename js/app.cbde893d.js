(function(){"use strict";var e={9114:function(e,t,o){var a=o(9242),n=o(3396),l=o(7139),r=o(4870),u=o(806);const i={class:"container-fluid p-3 my-5"},s={class:"row"},c={class:"col-md-4 mb-3"},d={class:"col-12 p-3 mb-3 border border-4 border-dark bg-light"},b=(0,n._)("h5",{class:"text-center mb-3"},"Workout Timer",-1),v={class:"col-12 p-3 border border-4 border-dark bg-light"},m=(0,n._)("label",{for:"length"},"Workout Time (minutes)",-1),p=(0,n._)("label",{for:"warmup"},"Warmup (minutes)",-1),f=(0,n._)("label",{for:"cooldown"},"Cooldown (minutes)",-1),y={class:"col-md-7 text-center"},w={class:"col-12 p-3 border border-4 border-dark bg-light"},g={class:"w-100"},k={class:"progress-bar border bg-light"},h=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Workout Complete!"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),_=(0,n._)("div",{class:"modal-body"}," Congrats on completing your workout. Would you like to start another one? ",-1);var O={__name:"App",setup(e){const t=(0,r.iH)(0),o=(0,r.iH)(null),O=(0,r.iH)("paused"),j=(0,r.iH)(30),x=(0,r.iH)(1),C=(0,r.iH)(1),S=(0,n.Fl)((()=>{const e=Math.floor(t.value/60),o=t.value%60;return`${e.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`}));function D(){O.value="paused",clearInterval(o.value)}function H(){q(),P()}function q(){t.value=0}const T=(0,n.Fl)((()=>!(j.value<x.value+C.value)));function P(){O.value="started",o.value=setInterval((()=>{if(t.value++,t.value/60>=j.value){clearInterval(o.value),O.value="paused";var e=new u.u_(document.getElementById("workout-complete"),{keyboard:!1});e.show()}}),1e3)}return(e,o)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",i,[(0,n._)("div",s,[(0,n._)("div",c,[(0,n._)("div",d,[b,"paused"==O.value?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn-success w-100 mb-3",onClick:P},"Start")):(0,n.kq)("",!0),"started"==O.value?((0,n.wg)(),(0,n.iD)("button",{key:1,class:"btn btn-secondary w-100 mb-3",onClick:D},"Pause")):(0,n.kq)("",!0),"paused"==O.value&&t.value>0?((0,n.wg)(),(0,n.iD)("button",{key:2,class:"btn btn-secondary w-100 mb-3",onClick:q},"Reset")):(0,n.kq)("",!0)]),(0,n._)("div",v,[m,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>j.value=e),name:"length",type:"number",max:"60",min:"5",step:"1",class:"form-control"},null,512),[[a.nr,j.value]]),p,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>x.value=e),name:"warmup",type:"number",max:"15",min:"1",step:"1",class:"form-control"},null,512),[[a.nr,x.value]]),f,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>C.value=e),name:"cooldown",type:"number",max:"15",min:"1",step:"1",class:"form-control"},null,512),[[a.nr,C.value]])])]),(0,n._)("div",y,[(0,n._)("div",w,[(0,n._)("h2",g,(0,l.zw)(S.value),1)])])])]),(0,n._)("div",k,[t.value>0?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"bg-dark h-100 opacity-50",style:(0,l.j5)({width:t.value/60/j.value*100+"%"})},null,4)):(0,n.kq)("",!0),T.value?((0,n.wg)(),(0,n.iD)("div",{key:1,class:"warmup bg-danger h-100 opacity-75",style:(0,l.j5)({width:x.value/j.value*100+"%"})},null,4)):(0,n.kq)("",!0),T.value?((0,n.wg)(),(0,n.iD)("div",{key:2,class:"cooldown bg-success h-100 opacity-75",style:(0,l.j5)({width:C.value/j.value*100+"%"})},null,4)):(0,n.kq)("",!0)]),(0,n._)("div",{class:"modal fade",id:"workout-complete","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[(0,n._)("div",{class:"modal-dialog"},[(0,n._)("div",{class:"modal-content"},[h,_,(0,n._)("div",{class:"modal-footer"},[(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:H},"Yes"),(0,n._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:q},"No")])])])])],64))}};const j=O;var x=j;o(5654);(0,a.ri)(x).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,l){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],l=e[c][2];for(var u=!0,i=0;i<a.length;i++)(!1&l||r>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(u=!1,l<r&&(r=l));if(u){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,n,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,r=a[0],u=a[1],i=a[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(n in u)o.o(u,n)&&(o.m[n]=u[n]);if(i)var c=i(o)}for(t&&t(a);s<r.length;s++)l=r[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(c)},a=self["webpackChunkworkout_timer"]=self["webpackChunkworkout_timer"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(9114)}));a=o.O(a)})();
//# sourceMappingURL=app.cbde893d.js.map