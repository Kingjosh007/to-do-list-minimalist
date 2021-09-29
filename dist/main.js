(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>d});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f7f5f7;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nmain {\r\n  margin-top: 4em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#toDoContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #fff;\r\n  width: auto;\r\n  padding-inline: 0;\r\n  min-width: 40%;\r\n  max-width: 80%;\r\n  border: 1px solid gray;\r\n  box-shadow: 5px 10px 8px #888;\r\n}\r\n\r\n#toDoContainer > * {\r\n  padding-block: 5px;\r\n}\r\n\r\n.toDoHeader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-inline: 10px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: 1px solid #8d8c8d;\r\n}\r\n\r\n.toDoHeader .toDoTitle {\r\n  color: #504f43;\r\n  font-weight: bold;\r\n  padding-block: 10px;\r\n}\r\n\r\n.toDoHeader .refreshIcon {\r\n  color: #8d8c8d;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.toDoAdd {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 7px;\r\n  border-bottom: 1px solid #eae8ea;\r\n}\r\n\r\n.toDoAdd input {\r\n  border: none transparent;\r\n  background: transparent;\r\n  outline: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  padding-block: 10px;\r\n}\r\n\r\n.toDoAdd input:placeholder-shown {\r\n  font-style: italic;\r\n  font-weight: normal;\r\n}\r\n\r\n.toDoAdd .enterIcon {\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  font-size: 10px;\r\n  color: #8d8c8d;\r\n}\r\n\r\n.toDoBody {\r\n  width: 100%;\r\n  padding-block: 0;\r\n  padding-inline: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n.toDoTask {\r\n  padding-inline: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-block: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.toDoTask.bordered-btm {\r\n  border-bottom: 1px solid #eae8ea;\r\n}\r\n\r\n.toDoTask .leftSide {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.toDoTask .leftSide .markTaskCheckbox {\r\n  cursor: pointer;\r\n}\r\n\r\n.striken {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.toDoTask .threeDots {\r\n  margin-right: 7px;\r\n  font-size: 10px;\r\n  color: #8d8c8d;\r\n  cursor: move;\r\n}\r\n\r\n.toDoFooter {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  margin-inline: 0;\r\n  padding-inline: 0;\r\n  background: #eeecee;\r\n  border: 1px solid #8d8c8d;\r\n  text-align: center;\r\n}\r\n\r\n.toDoFooter .clearBtn {\r\n  display: block;\r\n  color: #5a5555;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.toDoFooter:hover {\r\n  background: #ddd;\r\n}\r\n",""]);const d=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],d=0;d<n.length;d++){var s=n[d],c=t.base?s[0]+t.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var x=o(f,t);t.byIndex=d,r.splice(d,0,{identifier:p,updater:x,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=e(i[a]);r[d].references--}for(var s=t(n,o),c=0;c<i.length;c++){var l=e(i[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{const n=(n,r)=>localStorage.setItem(n,JSON.stringify(r)),r=n=>JSON.parse(localStorage.getItem(n)),t=(n,r)=>{const e=r.find((r=>r.index===Number(n)));e.completed=!e.completed;const t=r.filter((r=>r.index!==n));return t.push(e),t};var o=e(379),i=e.n(o),a=e(795),d=e.n(a),s=e(569),c=e.n(s),l=e(565),p=e.n(l),u=e(216),f=e.n(u),x=e(589),m=e.n(x),h=e(426),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=f(),i()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const v=[{index:1,description:"Wash dishes",completed:!0},{index:2,description:"Complete To-Do List project",completed:!1},{index:3,description:"Play game",completed:!1}];n("tasks",v);let b=r("tasks")||v;!function e(){const o=b.sort(((n,r)=>n.index-r.index)).map(((n,r,e)=>((n,r,e)=>{const t=r!==e.length-1?"bordered-btm":"",o=n.completed?"checked":"",i=n.completed?"striken":"";return`<li class="toDoTask ${t}" data-index="${n.index}">\n                <div class="leftSide" data-index="${n.index}">\n                <input type="checkbox" class="markTaskCheckbox" data-index="${n.index}" ${o} />\n                <div class="taskName ${i}" data-index="${n.index}">${n.description}</div>\n                </div>\n                <div class="threeDots" data-index="${n.index}"><i class="fas fa-ellipsis-v" data-index="${n.index}"></i></div>\n            </li>`})(n,r,e)));document.querySelector(".toDoBody").innerHTML=o.join(""),function(){const o=document.querySelectorAll(".markTaskCheckbox");for(let i=0;i<o.length;i+=1)o[i].addEventListener("change",(o=>{const i=o.target.getAttribute("data-index"),a=t(i,b);n("tasks",a),b=r("tasks"),e()}))}()}()})()})();