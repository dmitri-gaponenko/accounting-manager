(function(){"use strict";var t={4129:function(t,e,n){var a=n(9242),o=n(3396);const r=(0,o._)("h1",null,"Accounting Manager",-1);function l(t,e,n,a,l,u){const p=(0,o.up)("am-board");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r,(0,o.Wm)(p)],64)}var u=n(7139);const p=t=>((0,o.dD)("data-v-0d9f01ce"),t=t(),(0,o.Cn)(),t),i={class:"board"},c={class:"wrapper"},s=p((()=>(0,o._)("h3",null,"Record Payment",-1))),y={class:"inputs"},m={for:"paymentDate",class:"row"},d=p((()=>(0,o._)("span",null," Date: ",-1))),f={class:"row"},v={for:"one"},_={for:"two"},g={for:"paymentCategory",class:"row"},w=p((()=>(0,o._)("span",null," Payment category: ",-1))),b={class:"row"},D=p((()=>(0,o._)("span",{class:"label"},"Amount:",-1))),h={class:"row"},C=p((()=>(0,o._)("span",{class:"label"},"Description:",-1))),k={class:"buttons"},O={key:0,class:"payments"},A={class:"table"},T=p((()=>(0,o._)("tr",null,[(0,o._)("th",null,"Date"),(0,o._)("th",null,"Amount"),(0,o._)("th",null,"Category"),(0,o._)("th",null,"Type"),(0,o._)("th",null,"Description")],-1)));function H(t,e,n,r,l,p){const H=(0,o.up)("am-button"),S=(0,o.Q2)("focus");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",c,[s,(0,o._)("div",y,[(0,o._)("label",m,[d,(0,o.wy)((0,o._)("input",{type:"date",id:"paymentDate","onUpdate:modelValue":e[0]||(e[0]=e=>t.paymentDate=e)},null,512),[[a.nr,t.paymentDate]])]),(0,o._)("div",f,[(0,o._)("label",v,[(0,o.wy)((0,o._)("input",{type:"radio",id:"one",value:"Card","onUpdate:modelValue":e[1]||(e[1]=e=>t.paymentType=e)},null,512),[[a.G2,t.paymentType]]),(0,o.Uk)(" Card ")]),(0,o._)("label",_,[(0,o.wy)((0,o._)("input",{type:"radio",id:"two",value:"Cash","onUpdate:modelValue":e[2]||(e[2]=e=>t.paymentType=e)},null,512),[[a.G2,t.paymentType]]),(0,o.Uk)(" Cash ")])]),(0,o._)("label",g,[w,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[3]||(e[3]=e=>t.paymentCategory=e),id:"paymentCategory"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.categories,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t},(0,u.zw)(t),1)))),128))],512),[[a.bM,t.paymentCategory]])]),(0,o._)("div",b,[D,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[4]||(e[4]=e=>t.paymentAmount=e)},null,512),[[a.nr,t.paymentAmount],[S]])]),(0,o._)("div",h,[C,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":e[5]||(e[5]=e=>t.paymentDescription=e),placeholder:"desc"},null,512),[[a.nr,t.paymentDescription]])])]),(0,o._)("div",k,[(0,o.Wm)(H,{onClick:t.handleSaveButton},{default:(0,o.w5)((()=>[(0,o.Uk)("Save")])),_:1},8,["onClick"])]),t.payments.length?((0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("table",A,[T,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.payments,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,u.zw)(t.paymentDate),1),(0,o._)("td",null,(0,u.zw)(t.paymentAmount),1),(0,o._)("td",null,(0,u.zw)(t.paymentCategory),1),(0,o._)("td",null,(0,u.zw)(t.paymentType),1),(0,o._)("td",null,(0,u.zw)(t.paymentDescription),1)])))),128))])])):(0,o.kq)("",!0)])])}n(7658);var S=n(4870);const U={class:"btn"};function j(t,e,n,a,r,l){return(0,o.wg)(),(0,o.iD)("button",U,[(0,o.WI)(t.$slots,"default",{},void 0,!0)])}var x={name:"am-button"},z=n(89);const I=(0,z.Z)(x,[["render",j],["__scopeId","data-v-28a15c58"]]);var V=I,P=(0,o.aZ)({name:"am-board",components:{AmButton:V},setup(){const t=(0,S.iH)((new Date).toISOString().slice(0,10)),e=(0,S.iH)(""),n=(0,S.iH)("Питание/магазин"),a=(0,S.iH)(""),r=(0,S.iH)("Card"),l=(0,S.qj)(["Питание/магазин","Подарки","Здоровье/медицина","Интернет","Транспорт/такси","Мобильная связь","Шерлок","Коммунальные услуги","Путешествия","Автомобиль/бензин","Другое","Бытовые товары","Питание вне дома","Одежда","Развлечения/кино","Благотворительность","Ремонт","Перевод Насте","Подписки","Парковка","Страховка","Визы","Прокат"]),u=(0,S.iH)([]),p=localStorage.getItem("am_payments");p&&(u.value=JSON.parse(p)._value.map((t=>({paymentDate:t.paymentDate,paymentAmount:t.paymentAmount,paymentCategory:t.paymentCategory,paymentType:t.paymentType,paymentDescription:t.paymentDescription}))));const i=()=>{u.value.push({paymentDate:t.value,paymentAmount:e.value,paymentCategory:n.value,paymentType:r.value,paymentDescription:a.value})};return(0,o.YP)((()=>u),(t=>{localStorage.setItem("am_payments",JSON.stringify(t))}),{deep:!0}),{paymentDate:t,paymentAmount:e,paymentType:r,paymentCategory:n,paymentDescription:a,categories:l,payments:u,handleSaveButton:i}}});const Z=(0,z.Z)(P,[["render",H],["__scopeId","data-v-0d9f01ce"]]);var B=Z,Y=(0,o.aZ)({name:"App",components:{AmBoard:B}});const M=(0,z.Z)(Y,[["render",l]]);var W=M;const q=(0,a.ri)(W);q.directive("focus",{mounted(t){t.focus()}}),q.mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var l=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],r=t[c][2];for(var u=!0,p=0;p<a.length;p++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[p])}))?a.splice(p--,1):(u=!1,r<l&&(l=r));if(u){t.splice(c--,1);var i=o();void 0!==i&&(e=i)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,l=a[0],u=a[1],p=a[2],i=0;if(l.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(p)var c=p(n)}for(e&&e(a);i<l.length;i++)r=l[i],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunkaccounting_manager"]=self["webpackChunkaccounting_manager"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4129)}));a=n.O(a)})();
//# sourceMappingURL=app.a70b9126.js.map