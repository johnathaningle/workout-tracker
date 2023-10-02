(function(){"use strict";var e={5844:function(e,t,a){var o=a(9242),l=a(3396),r=a(7139),n=a(4870),u=a(806);const i={class:"container-fluid p-3 my-5"},s={class:"row"},c={class:"col-md-4 mb-3"},d={class:"col-12 p-3 mb-3 border border-4 border-dark bg-light"},v=(0,l._)("h5",{class:"text-center mb-3"},"Workout Timer",-1),b={class:"col-12 p-3 border border-4 border-dark bg-light"},p=(0,l._)("label",{for:"length"},"Workout Time (minutes)",-1),m=(0,l._)("label",{for:"warmup"},"Warmup (minutes)",-1),f=(0,l._)("label",{for:"cooldown"},"Cooldown (minutes)",-1),y=(0,l._)("label",{for:"audioUrl"},"Youtube URL (share URL)",-1),w={class:"col-md-7 text-center"},g={class:"w-100"},h={class:"col-12 p-3 border border-4 border-dark"},k=["src"],_={class:"progress-bar border bg-light"},x=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Workout Complete!"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),O=(0,l._)("div",{class:"modal-body"}," Congrats on completing your workout. Would you like to start another one? ",-1);var C={__name:"App",setup(e){const t=(0,n.iH)(0),C=(0,n.iH)(0),H=(0,n.iH)(null),j=(0,n.iH)("paused"),S=(0,n.iH)(!1),D=(0,n.iH)(!1),T=(0,n.iH)("https://youtu.be/rKDhP1R7wy0?si=cDHpAM-1qAOoPFmS"),U=(0,l.Fl)((()=>{var e=T.value;return e=e.replace("https://youtu.be","https://youtube.com/embed"),"started"==j.value?e+"&autoplay=1&start="+C.value:e+"&start="+C.value})),q=(0,n.iH)(30),P=(0,n.iH)(1),F=(0,n.iH)(1),M=(0,l.Fl)((()=>{const e=Math.floor(t.value/60),a=t.value%60;return`${e.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`})),R=new Audio(a(8758));function W(){j.value="paused",C.value=t.value,clearInterval(H.value)}function A(){I(),Y()}function I(){t.value=0,C.value=0}const L=(0,l.Fl)((()=>!(q.value<P.value+F.value)));function V(){(t.value+4)%60==0&&(R.play(),S.value=!0,setTimeout((()=>{S.value=!1,D.value=!0,setTimeout((()=>{D.value=!1}),1e3)}),3e3))}function Y(){j.value="started",H.value=setInterval((()=>{if(t.value++,V(),t.value/60>=q.value){clearInterval(H.value),j.value="paused";var e=new u.u_(document.getElementById("workout-complete"),{keyboard:!1});e.show()}}),1e3)}return(e,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",i,[(0,l._)("div",s,[(0,l._)("div",c,[(0,l._)("div",d,[v,"paused"==j.value?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"btn btn-success w-100 mb-3",onClick:Y},(0,r.zw)(t.value>0?"Resume":"Start"),1)):(0,l.kq)("",!0),"started"==j.value?((0,l.wg)(),(0,l.iD)("button",{key:1,class:"btn btn-secondary w-100 mb-3",onClick:W},"Pause")):(0,l.kq)("",!0),"paused"==j.value&&t.value>0?((0,l.wg)(),(0,l.iD)("button",{key:2,class:"btn btn-secondary w-100 mb-3",onClick:I},"Reset")):(0,l.kq)("",!0)]),(0,l._)("div",b,[p,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),name:"length",type:"number",max:"60",min:"5",step:"1",class:"form-control"},null,512),[[o.nr,q.value]]),m,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>P.value=e),name:"warmup",type:"number",max:"15",min:"1",step:"1",class:"form-control"},null,512),[[o.nr,P.value]]),f,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>F.value=e),name:"cooldown",type:"number",max:"15",min:"1",step:"1",class:"form-control"},null,512),[[o.nr,F.value]]),y,(0,l.wy)((0,l._)("input",{name:"audioUrl",class:"form-control","onUpdate:modelValue":a[3]||(a[3]=e=>T.value=e),type:"text"},null,512),[[o.nr,T.value]])])]),(0,l._)("div",w,[(0,l._)("div",{class:(0,r.C_)(["col-12 mb-3 p-3 border border-4 border-dark",{"bg-light":!D.value&&!S.value,"bg-warning":S.value&&!D.value,"bg-danger":D.value&&!S.value}])},[(0,l._)("h2",g,(0,r.zw)(M.value),1)],2),(0,l._)("div",h,[(0,l._)("iframe",{class:"w-100",style:{"min-height":"300px"},src:U.value,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,k)])])])]),(0,l._)("div",_,[t.value>0?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"bg-dark h-100 opacity-50",style:(0,r.j5)({width:t.value/60/q.value*100+"%"})},null,4)):(0,l.kq)("",!0),L.value?((0,l.wg)(),(0,l.iD)("div",{key:1,class:"warmup bg-danger h-100 opacity-75",style:(0,r.j5)({width:P.value/q.value*100+"%"})},null,4)):(0,l.kq)("",!0),L.value?((0,l.wg)(),(0,l.iD)("div",{key:2,class:"cooldown bg-success h-100 opacity-75",style:(0,r.j5)({width:F.value/q.value*100+"%"})},null,4)):(0,l.kq)("",!0)]),(0,l._)("div",{class:"modal fade",id:"workout-complete","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[(0,l._)("div",{class:"modal-dialog"},[(0,l._)("div",{class:"modal-content"},[x,O,(0,l._)("div",{class:"modal-footer"},[(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:A},"Yes"),(0,l._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:I},"No")])])])])],64))}};const H=C;var j=H;a(5654);(0,o.ri)(j).mount("#app")},8758:function(e,t,a){e.exports=a.p+"media/timer.db676071.mp3"}},t={};function a(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,l,r){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],l=e[c][1],r=e[c][2];for(var u=!0,i=0;i<o.length;i++)(!1&r||n>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(u=!1,r<n&&(n=r));if(u){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,l,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/workout-tracker/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,r,n=o[0],u=o[1],i=o[2],s=0;if(n.some((function(t){return 0!==e[t]}))){for(l in u)a.o(u,l)&&(a.m[l]=u[l]);if(i)var c=i(a)}for(t&&t(o);s<n.length;s++)r=n[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},o=self["webpackChunkworkout_timer"]=self["webpackChunkworkout_timer"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(5844)}));o=a.O(o)})();
//# sourceMappingURL=app.0ffaa0ad.js.map