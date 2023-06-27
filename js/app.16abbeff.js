(function(){"use strict";var e={305:function(e,t,n){var a=n(9242),o=n(3396);const l=(0,o._)("h1",null,"Accounting Manager",-1);function r(e,t,n,a,r,u){const i=(0,o.up)("am-board");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o.Wm)(i)],64)}var u=n(7139);const i=e=>((0,o.dD)("data-v-3688f384"),e=e(),(0,o.Cn)(),e),p={class:"board"},s={class:"wrapper"},c=i((()=>(0,o._)("h3",null,"Record Payment",-1))),d={class:"inputs"},m={for:"paymentDate",class:"row"},y=i((()=>(0,o._)("span",null," Date: ",-1))),v={class:"row"},f={for:"one"},w={for:"two"},_={for:"paymentCategory",class:"row"},g=i((()=>(0,o._)("span",null," Payment category: ",-1))),C={class:"row"},h=i((()=>(0,o._)("span",{class:"label"},"Amount:",-1))),k={class:"row"},D=i((()=>(0,o._)("span",{class:"label"},"Description:",-1))),b={class:"buttons"},A={key:0,class:"payments"},I={class:"table"},O=i((()=>(0,o._)("tr",null,[(0,o._)("th",null,"Date"),(0,o._)("th",null,"Amount"),(0,o._)("th",null,"Category"),(0,o._)("th",null,"Description")],-1))),x=["onClick"],U={style:{"font-size":"12px"}},B={class:"buttons"},S={class:"row"},T={for:"res"};function E(e,t,n,l,r,i){const E=(0,o.up)("am-button"),W=(0,o.up)("am-popup");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",s,[c,(0,o._)("div",d,[(0,o._)("label",m,[y,(0,o.wy)((0,o._)("input",{type:"date",id:"paymentDate","onUpdate:modelValue":t[0]||(t[0]=t=>e.paymentDate=t)},null,512),[[a.nr,e.paymentDate]])]),(0,o._)("div",v,[(0,o._)("label",f,[(0,o.wy)((0,o._)("input",{type:"radio",id:"one",value:"Card","onUpdate:modelValue":t[1]||(t[1]=t=>e.paymentType=t)},null,512),[[a.G2,e.paymentType]]),(0,o.Uk)(" Card ")]),(0,o._)("label",w,[(0,o.wy)((0,o._)("input",{type:"radio",id:"two",value:"Cash","onUpdate:modelValue":t[2]||(t[2]=t=>e.paymentType=t)},null,512),[[a.G2,e.paymentType]]),(0,o.Uk)(" Cash ")])]),(0,o._)("label",_,[g,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.paymentCategory=t),id:"paymentCategory"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.categories,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e},(0,u.zw)(e),1)))),128))],512),[[a.bM,e.paymentCategory]])]),(0,o._)("div",C,[h,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=t=>e.paymentAmount=t)},null,512),[[a.nr,e.paymentAmount]])]),(0,o._)("div",k,[D,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.paymentDescription=t),placeholder:"desc"},null,512),[[a.nr,e.paymentDescription]])])]),(0,o._)("div",b,[(0,o.Wm)(E,{onClick:e.handleSaveButton},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(""===e.currentId?"Save":"Update"),1)])),_:1},8,["onClick"]),""!==e.currentId?((0,o.wg)(),(0,o.j4)(E,{key:0,onClick:e.handleDeleteButton},{default:(0,o.w5)((()=>[(0,o.Uk)(" Delete ")])),_:1},8,["onClick"])):(0,o.kq)("",!0)]),e.payments.length?((0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("table",I,[O,(0,o.Wm)(a.W3,{name:"list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.payments,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",{onClick:n=>e.handleEditButton(t.paymentId),style:{"font-size":"12px","text-decoration":"underline"}},(0,u.zw)(new Date(t.paymentDate).toDateString().slice(4,10)),9,x),(0,o._)("td",null,(0,u.zw)(t.paymentAmount),1),(0,o._)("td",U,(0,u.zw)(t.paymentCategory),1),(0,o._)("td",null,(0,u.zw)(t.paymentDescription),1)])))),128))])),_:1})]),(0,o._)("div",B,[(0,o.Wm)(E,{onClick:e.handleExportButton,small:!0},{default:(0,o.w5)((()=>[(0,o.Uk)("Export")])),_:1},8,["onClick"]),(0,o.Wm)(E,{onClick:e.handleClearButton,small:!0},{default:(0,o.w5)((()=>[(0,o.Uk)("Clear")])),_:1},8,["onClick"])])])):(0,o.kq)("",!0),(0,o.Wm)(W,{"is-open":e.isPopupOpen,title:"",onClose:e.closePopup},{default:(0,o.w5)((()=>[(0,o._)("div",S,[(0,o._)("label",T,[(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.stringifyExportResult=t),id:"res",rows:"8",cols:"50"},null,512),[[a.nr,e.stringifyExportResult]])])])])),_:1},8,["is-open","onClose"])])])}n(7658);var W=n(4870);function H(e,t,n,a,l,r){return(0,o.wg)(),(0,o.iD)("button",{class:(0,u.C_)(["btn",{"btn-small":n.small}])},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],2)}var P={name:"am-button",props:{small:{type:Boolean,required:!1}}},j=n(89);const z=(0,j.Z)(P,[["render",H],["__scopeId","data-v-73b1fe86"]]);var K=z;const $=e=>((0,o.dD)("data-v-42955098"),e=e(),(0,o.Cn)(),e),Z=$((()=>(0,o._)("hr",null,null,-1))),q={class:"footer"};function V(e,t,n,l,r,i){const p=(0,o.up)("am-button");return e.isOpen?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"backdrop",onClick:t[1]||(t[1]=(...t)=>e.ok&&e.ok(...t)),onKeydown:t[2]||(t[2]=(...t)=>e.handleKeydown&&e.handleKeydown(...t))},[(0,o._)("div",{class:"popup",onClick:t[0]||(t[0]=(0,a.iM)((()=>{}),["stop"]))},[(0,o._)("h1",null,(0,u.zw)(e.title),1),Z,(0,o.WI)(e.$slots,"default",{},void 0,!0),(0,o._)("div",q,[(0,o.Wm)(p,{onClick:e.ok},{default:(0,o.w5)((()=>[(0,o.Uk)("OK")])),_:1},8,["onClick"]),(0,o.Wm)(p,{onClick:e.selectAll},{default:(0,o.w5)((()=>[(0,o.Uk)("Select All")])),_:1},8,["onClick"]),(0,o.Wm)(p,{onClick:e.copyToClipboard},{default:(0,o.w5)((()=>[(0,o.Uk)("Copy")])),_:1},8,["onClick"])])])],32)):(0,o.kq)("",!0)}var M=(0,o.aZ)({name:"am-popup",components:{AmButton:K},props:{isOpen:{type:Boolean,required:!0},title:{type:String,required:!1}},emits:{close:null},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},methods:{handleKeydown(e){this.isOpen&&"Escape"===e.key&&this.ok()},ok(){this.$emit("close")},selectAll(){document.getElementById("res")?.select()},async copyToClipboard(){const e=document.getElementById("res")?.value;try{await navigator.clipboard.writeText(e),console.log("Copied")}catch(t){console.log("Cannot copy")}}}});const R=(0,j.Z)(M,[["render",V],["__scopeId","data-v-42955098"]]);var Y=R,F=n(3029),G=(0,o.aZ)({name:"am-board",components:{AmButton:K,AmPopup:Y},setup(){const e=(0,W.iH)((new Date).toISOString().slice(0,10)),t=(0,W.iH)(""),n=(0,W.iH)("Питание/магазин"),a=(0,W.iH)(""),l=(0,W.iH)("Card"),r=(0,W.qj)(["Питание/магазин","Подарки","Здоровье/медицина","Интернет","Транспорт/такси","Мобильная связь","Шерлок","Коммунальные услуги","Путешествия","Автомобиль/бензин","Другое","Бытовые товары","Питание вне дома","Одежда","Развлечения/кино","Wildberries","Ремонт","Перевод Насте","Подписки","Парковка","Страховка","Визы","Прокат"]),u=(0,W.iH)([]),i=(0,W.iH)(""),p=(0,W.iH)(!1),s=localStorage.getItem("am_payments");s&&(u.value=JSON.parse(s)._value.map((e=>({paymentId:e.paymentId,paymentDate:e.paymentDate,paymentAmount:e.paymentAmount,paymentCategory:e.paymentCategory,paymentType:e.paymentType,paymentDescription:e.paymentDescription}))));const c=()=>{i.value="",e.value=(new Date).toISOString().slice(0,10),t.value="",n.value="Питание/магазин",a.value="",l.value="Card"},d=()=>{if(""===i.value){const o=(0,F.Z)();u.value.push({paymentId:o,paymentDate:e.value,paymentAmount:t.value.toString().replaceAll(".",","),paymentCategory:n.value,paymentType:l.value,paymentDescription:a.value})}else{const o=u.value.find((e=>e.paymentId===i.value));o&&(o.paymentDate=e.value,o.paymentAmount=t.value.toString().replaceAll(".",","),o.paymentCategory=n.value,o.paymentDescription=a.value,o.paymentType=l.value)}c()},m=()=>{const e=u.value.findIndex((e=>e.paymentId===i.value));e>-1&&u.value.splice(e,1),c()},y=o=>{const r=u.value.find((e=>e.paymentId===o));r&&(i.value=o,e.value=r?.paymentDate,t.value=r?.paymentAmount,n.value=r?.paymentCategory,a.value=r?.paymentDescription,l.value=r?.paymentType)},v=()=>{confirm("Are you sure you want to clear all data?")&&(u.value=[])},f=()=>{p.value=!0},w=()=>{p.value=!1},_=()=>{f()},g=(0,o.Fl)((()=>u.value.map((e=>{const t=`${"Cash"===e.paymentType?"(cash) ":""}${e.paymentDescription}`;return`${e.paymentDate}\t${e.paymentAmount}\t${t}\t${e.paymentCategory}`})).join("\n")));return(0,o.YP)((()=>u),(e=>{localStorage.setItem("am_payments",JSON.stringify(e))}),{deep:!0}),{currentId:i,paymentDate:e,paymentAmount:t,paymentType:l,paymentCategory:n,paymentDescription:a,categories:r,payments:u,handleSaveButton:d,handleEditButton:y,handleDeleteButton:m,handleClearButton:v,handleExportButton:_,isPopupOpen:p,closePopup:w,stringifyExportResult:g}}});const J=(0,j.Z)(G,[["render",E],["__scopeId","data-v-3688f384"]]);var L=J,N=(0,o.aZ)({name:"App",components:{AmBoard:L}});const Q=(0,j.Z)(N,[["render",r]]);var X=Q;const ee=(0,a.ri)(X);ee.directive("focus",{mounted(e){e.focus()}}),ee.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],l=e[s][2];for(var u=!0,i=0;i<a.length;i++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(u=!1,l<r&&(r=l));if(u){e.splice(s--,1);var p=o();void 0!==p&&(t=p)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,r=a[0],u=a[1],i=a[2],p=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var s=i(n)}for(t&&t(a);p<r.length;p++)l=r[p],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},a=self["webpackChunkaccounting_manager"]=self["webpackChunkaccounting_manager"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(305)}));a=n.O(a)})();
//# sourceMappingURL=app.16abbeff.js.map