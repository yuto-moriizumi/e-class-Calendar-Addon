!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=Object.freeze({LINK:0,CHECK:1,TEXT:2}),a=Object.freeze({class:{name:"講義",type:o.TEXT},zoom:{name:"Zoom",type:o.LINK},teams:{name:"Teams",type:o.LINK},duet:{name:"Duet",type:o.CHECK}}),r=function(){function e(e,t){this.classId=e,this.serviceId=t,this.element=document.createElement("div"),this.element.style.display="flex",this.classInfo=JSON.parse(localStorage.getItem(e)),this.button=document.createElement("button"),this.element.appendChild(this.button),null==this.classInfo[t]||null==this.classInfo[t]?this.setStateUnavailable():this.setStateAvailable()}return e.prototype.getElement=function(){return this.element},e.prototype.setStateAvailable=function(){var e=this;this.button.innerText=this.serviceId+"へ",this.button.style.backgroundColor="lightgreen",this.button.onclick=function(t){t.preventDefault();var n=document.createElement("a");n.setAttribute("target","_blank"),n.setAttribute("href",e.classInfo[e.serviceId]),n.click()},this.xButton=document.createElement("button"),this.xButton.appendChild(document.createTextNode("❌")),this.xButton.onclick=function(t){t.preventDefault(),e.setStateUnavailable(),e.xButton.remove()},this.element.appendChild(this.xButton)},e.prototype.setStateUnavailable=function(){var e=this;this.button.innerText=this.serviceId+"登録",this.button.style.backgroundColor="lightgrey",this.button.onclick=function(t){t.preventDefault();var n=prompt(e.serviceId+"のURLを入力");e.classInfo[e.serviceId]=n,localStorage.setItem(e.classId,JSON.stringify(e.classInfo)),e.setStateAvailable()}},e}(),l=function(){function e(){for(var t=document.getElementsByTagName("h4"),n=0;n<t.length;n++){var l=t[n];if("時間割表 (表示する年度/学期を選択)"==l.innerText){var i=document.createElement("a");i.setAttribute("target","_blank"),i.setAttribute("href","https://duet.doshisha.ac.jp/gakusei/html/fb/fb010/FB01001G.html"),i.appendChild(document.createTextNode("Duetへアクセス")),i.style.marginLeft="10px",l.appendChild(i)}}e.addStyleTag(e.CSS_CHECKBOX);var c=document.querySelectorAll("table.schedule-table > tbody > tr > td"),s=0;c.forEach((function(e){if("top"==e.getAttribute("valign")||"blank"==e.classList[0]){console.log(e);var t="None";t="blank"==e.classList[0]?s.toString():e.getElementsByTagName("a")[0].href.split("/")[5],s++;var n=JSON.parse(localStorage.getItem(t));null==n&&(n={}),Object.keys(a).forEach((function(e){null==n[e]&&(n[e]=null)})),console.log(n),Object.keys(a).forEach((function(l){switch(a[l].type){case o.LINK:e.appendChild(new r(t,l).getElement());break;case o.CHECK:var i=document.createElement("label");e.appendChild(i);var c=document.createElement("input");c.type="checkbox",c.checked=n[l],c.classList.add("checkbox-input"),c.onchange=function(){n[l]=c.checked,localStorage.setItem(t,JSON.stringify(n))},i.appendChild(c);var s=document.createElement("span");s.innerText=l,s.classList.add("checkbox-parts"),i.append(s);break;case o.TEXT:if("blank"!=e.classList[0])break;var u=document.createElement("p");null==n[l]||null==n[l]?(u.innerText="クリックして講義を登録",u.onclick=function(){n[l]=prompt("講義名を入力"),u.innerText=n[l],localStorage.setItem(t,JSON.stringify(n)),u.onclick=null}):u.innerText=n[l],e.appendChild(u)}})),Object.keys(n).forEach((function(e){}))}}))}return e.openTab=function(e){var t=document.createElement("a");t.setAttribute("target","_blank"),t.setAttribute("href",e),t.click()},e.createButton=function(e,t,n){var o=document.createElement("button");return o.innerText=e,o.style.backgroundColor=n,o.onclick=function(e){e.stopPropagation(),e.preventDefault(),t()},o},e.pseudo=function(e,t){e+="-pseudoStyle";var n=document.getElementById(e);if(null==n){var o=document.createElement("style");o.id=e,o.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(o)}else n.innerHTML=t},e.addStyleTag=function(e){var t=document.createElement("style");t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)},e.CSS_CHECKBOX='\n  .checkbox-input{\n    display: none;\n  }\n  .checkbox-parts{\n    padding-left: 20px;\n    position:relative;\n    margin-right: 20px;\n  }\n  .checkbox-parts::before{\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 15px;\n    height: 15px;\n    border: 1px solid #999;\n    border-radius: 4px;\n  }\n  .checkbox-input:checked + .checkbox-parts{\n    color: #d01137;\n  }\n  .checkbox-input:checked + .checkbox-parts::after{\n    content: "";\n    display: block;\n    position: absolute;\n    top: -5px;\n    left: 5px;\n    width: 7px;\n    height: 14px;\n    transform: rotate(40deg);\n    border-bottom: 3px solid #d01137;\n    border-right: 3px solid #d01137;\n  }',e}();try{new l}catch(e){console.log(e)}}]);