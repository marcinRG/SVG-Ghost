!function o(s,u,a){function l(t,e){if(!u[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=u[t]={exports:{}};s[t][0].call(i.exports,function(e){return l(s[t][1][e]||e)},i,i.exports,o,s,u,a)}return u[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,t,n){"use strict";var r=e("./model/MainUIMessages"),i=e("./model/MousePosition"),o=e("./model/Ghost"),s=e("./settings/app.settings"),u=new i(s.mousePosition);u.run();var a=new r(s.mainUI);a.run();var l=new o(s.ghost8bit);l.run();var c=new o(s.ghostHD);c.run(),a.addObserver(l),a.addObserver(c),a.addObserver(a),u.addObserver(l),u.addObserver(c)},{"./model/Ghost":2,"./model/MainUIMessages":3,"./model/MousePosition":4,"./settings/app.settings":5}],2:[function(e,t,n){"use strict";var v=e("./../utils/PositionTransformation.utils"),x=e("./../utils/Misc.utils");t.exports=function(e){var t,n=!1,u=e.parentElement,r=e.body,i=e.leftEye,o=e.leftEyeBall,s=e.rightEye,a=e.rightEyeBall,l=e.messageToShow,c=e.eyesSettings,m=e.fullScreenMove,f=35;function d(e){n&&(y(e.x,e.y,i,c.leftEye,t.leftEye),y(e.x,e.y,o,c.leftEyeball,t.leftEye),y(e.x,e.y,s,c.rightEye,t.rightEye),y(e.x,e.y,a,c.rightEyeball,t.rightEye))}function y(e,t,n,r,i){var o,s,u,a,l,c,m,f,d=(o=e,s=t,u=i,a=r,l=v.returnValue(o,u.maxX,u.minX),c=v.returnValue(s,u.maxY,u.minY),m=v.transform(l,u.minX,u.maxX,a.minX,a.maxX),f=v.transform(c,u.minY,u.maxY,a.minY,a.maxY),{x:m,y:f});n.setAttribute("x",d.x),n.setAttribute("y",d.y)}function h(e){e.message===l?(n=!0,r.style.display="block"):g()}function g(){n=!1,r.style.display="none"}function b(){var e,t,n,r,i,o=u.getBoundingClientRect(),s=(e=o,t=m,i=Math.round(e.width/2),r=t?(n=e.width-f,f):n=i,{leftMax:n,rightMin:r});return{leftEye:{minY:f,maxY:o.height-f,minX:f,maxX:s.leftMax},rightEye:{minY:f,maxY:o.height-f,minX:s.rightMin,maxX:o.width-f}}}return{run:function(){g(),t=b(),window.addEventListener("resize",function(){t=b(),d({x:0,y:0})})},update:function(e){x.isUIMessage(e)&&h(e),x.isMousePositionChange(e)&&d(e)}}}},{"./../utils/Misc.utils":6,"./../utils/PositionTransformation.utils":8}],3:[function(e,t,n){"use strict";var a=e("./../utils/Observable.utils"),l=e("./../utils/Misc.utils");function c(){return{message:""}}function m(e,t){e.style.visibility=t?"visible":"hidden"}function f(e,t,n){(e||e.addEventListener)&&e.addEventListener("click",function(){t.message=n})}t.exports=function(e){var t=new a.ObservableWrapper(new c),n=e.lowRezButton,r=e.highRezButton,i=e.goBackButton,o=e.messages,s=e.menuPanel,u=e.ghostsPanel;return{run:function(){f(n,t,o[0]),f(r,t,o[1]),f(i,t,o[2]),m(s,!0),m(u,!1)},update:function(e){l.isUIMessage(e)&&(e.message===o[2]?(m(u,!1),m(s,!0)):(m(u,!0),m(s,!1)))},addObserver:function(e){t.addObserver(t.observers,e)}}}},{"./../utils/Misc.utils":6,"./../utils/Observable.utils":7}],4:[function(e,t,n){"use strict";var r=e("./../utils/Observable.utils");function i(e){return{x:0,y:0,delta:e,isPositionChanged:o}}function o(e,t,n){return Math.abs(e-t)>n}t.exports=function(e){var t=new r.ObservableWrapper(new i(e.delta)),n=e.element;return{run:function(){n.addEventListener("mousemove",function(e){t.isPositionChanged(e.clientX,t.x,t.delta)&&(t.x=e.clientX),t.isPositionChanged(e.clientY,t.y,t.delta)&&(t.y=e.clientY)})},addObserver:function(e){t.addObserver(t.observers,e)}}}},{"./../utils/Observable.utils":7}],5:[function(e,t,n){"use strict";var r=["8-bit resolution","hd resolution","go back"],i={element:document.querySelector(".ghost-section"),delta:2},o={lowRezButton:document.querySelector(".low-rez-btn"),highRezButton:document.querySelector(".high-rez-btn"),goBackButton:document.querySelector(".back-btn"),menuPanel:document.querySelector(".title-section"),ghostsPanel:document.querySelector(".ghost-section"),messages:r},s={leftEye:{minY:220,maxY:320,minX:50,maxX:130},leftEyeball:{minY:260,maxY:400,minX:50,maxX:210},rightEye:{minY:220,maxY:320,minX:300,maxX:380},rightEyeball:{minY:260,maxY:400,minX:300,maxX:460}},u={parentElement:document.querySelector(".ghost-section"),body:document.querySelector(".ghost-8bit"),leftEye:document.querySelector(".ghost-8bit .left-eye"),leftEyeBall:document.querySelector(".ghost-8bit .left-eyeball"),rightEye:document.querySelector(".ghost-8bit .right-eye"),rightEyeBall:document.querySelector(".ghost-8bit .right-eyeball"),eyesSettings:s,fullScreenMove:!0,messageToShow:r[0]},a={leftEye:{minX:95,maxX:155,minY:105,maxY:190},leftEyeball:{minY:150,maxY:310,minX:130,maxX:230},rightEye:{minX:285,maxX:345,minY:105,maxY:190},rightEyeball:{minY:150,maxY:310,minX:320,maxX:420}},l={parentElement:document.querySelector(".ghost-section"),body:document.querySelector(".ghost-hd"),leftEye:document.querySelector(".ghost-hd .left-eye"),leftEyeBall:document.querySelector(".ghost-hd .left-eyeball"),rightEye:document.querySelector(".ghost-hd .right-eye"),rightEyeBall:document.querySelector(".ghost-hd .right-eyeball"),eyesSettings:a,fullScreenMove:!1,messageToShow:r[1]};t.exports={messages:r,mousePosition:i,ghost8bit:u,ghostHD:l,mainUI:o}},{}],6:[function(e,t,n){"use strict";t.exports={isUIMessage:function(e){return e&&e.message},isMousePositionChange:function(e){return e&&e.x&&e.y}}},{}],7:[function(e,t,n){"use strict";function r(){this.observers=[]}function a(t,n,e,r){Object.defineProperty(e,t,{get:function(){return n[t]},set:function(e){n[t]=e,r.notify(n)}})}function i(e){this.originObject=e,this.observers=new r,this.observeAllProperties(this.originObject,this,this.observers)}r.prototype.add=function(e){(function(e){if(e&&e.update&&e.update instanceof Function)return!0;return!1})(e)&&this.observers.push(e)},r.prototype.notify=function(t){this.observers.forEach(function(e){e.update(t)})},i.prototype.observeAllProperties=function(e,t,n){for(var r in e)e.hasOwnProperty(r)&&((u=e[r])&&"[object Function]"==={}.toString.call(u)?(i=r,s=t,(o=e).hasOwnProperty(i)&&(s[i]=o[i])):a(r,e,t,n));var i,o,s,u},i.prototype.addObserver=function(e,t){e.add(t)},t.exports={ObservableWrapper:i,ObserverList:r}},{}],8:[function(e,t,n){"use strict";t.exports={transform:function(e,t,n,r,i){return r+Math.round((i-r)*(e-t)/(n-t))},returnValue:function(e,t,n){return e<n?n:t<e?t:e}}},{}]},{},[1]);