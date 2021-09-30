(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f7f5f7;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nmain {\r\n  margin-top: 4em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#toDoContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #fff;\r\n  width: auto;\r\n  padding-inline: 0;\r\n  min-width: 45%;\r\n  max-width: 80%;\r\n  border: 1px solid gray;\r\n  box-shadow: 5px 10px 8px #888;\r\n}\r\n\r\n#toDoContainer > * {\r\n  padding-block: 5px;\r\n}\r\n\r\n.toDoHeader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-inline: 10px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: 1px solid #8d8c8d;\r\n}\r\n\r\n.toDoHeader .toDoTitle {\r\n  color: #504f43;\r\n  font-weight: bold;\r\n  padding-block: 10px;\r\n}\r\n\r\n.toDoHeader .refreshIcon {\r\n  color: #8d8c8d;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.toDoAdd {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 7px;\r\n  border-bottom: 1px solid #eae8ea;\r\n}\r\n\r\n.toDoAdd input {\r\n  border: none transparent;\r\n  background: transparent;\r\n  outline: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  padding-block: 10px;\r\n}\r\n\r\n.toDoAdd input:placeholder-shown {\r\n  font-style: italic;\r\n  font-weight: normal;\r\n}\r\n\r\n.toDoAdd .enterIcon {\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  font-size: 10px;\r\n  color: #8d8c8d;\r\n}\r\n\r\n.toDoBody {\r\n  width: 100%;\r\n  padding-block: 0;\r\n  padding-inline: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n.toDoTask {\r\n  padding-inline: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-block: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.toDoTask.bordered-btm {\r\n  border-bottom: 1px solid #eae8ea;\r\n}\r\n\r\n.toDoTask .leftSide {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.toDoTask .leftSide .markTaskCheckbox {\r\n  cursor: pointer;\r\n}\r\n\r\n.draggable.dragging {\r\n  border: 2px solid blue;\r\n  opacity: 0.7;\r\n}\r\n\r\n.striken {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.toDoTask .threeDots {\r\n  margin-right: 7px;\r\n  font-size: 10px;\r\n  color: #8d8c8d;\r\n}\r\n\r\n.toDoFooter {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  margin-inline: 0;\r\n  padding-inline: 0;\r\n  background: #eeecee;\r\n  border: 1px solid #8d8c8d;\r\n  text-align: center;\r\n}\r\n\r\n.toDoFooter .clearBtn {\r\n  display: block;\r\n  color: #5a5555;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.toDoFooter:hover {\r\n  background: #ddd;\r\n}\r\n",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],d=0;d<n.length;d++){var s=n[d],c=t.base?s[0]+t.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,t);t.byIndex=d,e.splice(d,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=r(i[a]);e[d].references--}for(var s=t(n,o),c=0;c<i.length;c++){var l=r(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{const n=(n,e)=>localStorage.setItem(n,JSON.stringify(e)),e=n=>JSON.parse(localStorage.getItem(n)),t=(n,e)=>{const r=e.find((e=>e.index===Number(n)));r.completed=!r.completed;const t=e.filter((e=>e.index!==Number(n)));return t.push(r),t};var o=r(379),i=r.n(o),a=r(795),d=r.n(a),s=r(569),c=r.n(s),l=r(565),p=r.n(l),u=r(216),f=r.n(u),g=r(589),m=r.n(g),x=r(426),h={};h.styleTagTransform=m(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=f(),i()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals;e("tasks")||n("tasks",[{index:1,description:"Wash dishes",completed:!0},{index:2,description:"Complete To-Do List project",completed:!1},{index:3,description:"Play game",completed:!1}]),function r(o=e("tasks")||[]){const i=o.sort(((n,e)=>n.index-e.index)).map(((n,e,r)=>((n,e,r)=>{const t=e!==r.length-1?"bordered-btm":"",o=n.completed?"checked":"",i=n.completed?"striken":"";return`<li class="toDoTask ${t} draggable" data-index="${n.index}" draggable="true">\n                  <div class="leftSide" data-index="${n.index}">\n                  <input type="checkbox" class="markTaskCheckbox" data-index="${n.index}" ${o} />\n                  <div class="taskName ${i}" data-index="${n.index}">${n.description}</div>\n                  </div>\n                  <div class="threeDots" data-index="${n.index}"><i class="fas fa-ellipsis-v" data-index="${n.index}"></i></div>\n              </li>`})(n,e,r)));document.querySelector(".toDoBody").innerHTML=i.join(""),function(){const o=document.querySelectorAll(".markTaskCheckbox");for(let i=0;i<o.length;i+=1)o[i].addEventListener("change",(o=>{const i=o.target.getAttribute("data-index"),a=t(i,e("tasks"));n("tasks",a),r(e("tasks"))}))}(),((r=(()=>1))=>{const t=document.querySelectorAll(".draggable"),o=document.querySelector(".toDoBody");t.forEach((n=>{n.addEventListener("dragstart",(()=>{n.classList.add("dragging")})),n.addEventListener("dragend",(()=>{n.classList.remove("dragging")}))})),o.addEventListener("dragover",(t=>{t.preventDefault();const i=(a=o,d=t.clientY,[...a.querySelectorAll(".draggable:not(.dragging)")].reduce(((n,e)=>{const r=e.getBoundingClientRect(),t=d-r.top-r.height/2;return t<0&&t>n.offset?{offset:t,element:e}:n}),{offset:Number.NEGATIVE_INFINITY}).element);var a,d;const s=document.querySelector(".dragging");let c=e("tasks")||[];if(null==i){o.appendChild(s);const n=c.find((n=>n.index===Number(s.getAttribute("data-index"))));c=c.filter((e=>e.index!==n.index)),n.index=c.length+1,c.push(n)}else{o.insertBefore(s,i);const n=[...document.querySelector(".toDoBody").querySelectorAll(".draggable")].map((n=>Number(n.getAttribute("data-index"))));c=n.map((n=>c.find((e=>e.index===n))))}c=c.map(((n,e)=>{const r=n;return r.index=e+1,r})),n("tasks",c),r()}))})()}(e("tasks"))})()})();