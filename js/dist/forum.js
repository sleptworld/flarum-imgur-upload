module.exports=function(t){var r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=r,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)o.d(e,n,function(r){return t[r]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=8)}([function(t,r,o){"use strict";function e(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r}o.d(r,"a",function(){return e})},function(t,r){t.exports=flarum.core.compat["helpers/icon"]},,function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat["components/TextEditor"]},function(t,r){t.exports=flarum.core.compat.Component},function(t,r){t.exports=flarum.core.compat["components/LoadingIndicator"]},,function(t,r,o){"use strict";o.r(r);var e=o(3),n=o(4),i=o.n(n),a=o(0),s=o(5),u=o.n(s),c=o(1),p=o.n(c),l=o(6),d=o.n(l),f=function(t){function r(){return t.apply(this,arguments)||this}Object(a.a)(r,t);var o=r.prototype;return o.init=function(){this.isLoading=!1,this.isSuccess=!1,this.isError=!1},o.view=function(){var t,r=this,o={className:"Button hasIcon imgur-upload-button",title:app.translator.trans("imgur-upload.forum.upload"),config:function(t){r.domElement=t,$(t).tooltip()}};t=this.isLoading?d.a.component({className:"Button-icon"}):this.isSuccess?p()("fas fa-check green",{className:"Button-icon"}):this.isError?p()("fas fa-times red",{className:"Button-icon"}):p()("far fa-image",{className:"Button-icon"});var e="";return this.isLoading?e=app.translator.trans("imgur-upload.forum.loading"):this.isSuccess?e=app.translator.trans("imgur-upload.forum.done"):this.isError&&(e=app.translator.trans("imgur-upload.forum.error")),""==e&&(o.className+=" Button--icon"),m("div",o,[t,m("span",{className:"Button-label"},e),m("form#imgur-upload-form",[m("input",{type:"file",accept:"image/*",onchange:this.upload.bind(this),disabled:this.isLoading||this.isSuccess||this.isError})])])},o.upload=function(t){var r=$(t.target)[0].files[0];$(this.domElement).tooltip("hide"),this.isLoading=!0,m.redraw();var o=new FormData;o.append("image",r),$.ajax({url:"https://api.imgur.com/3/image",headers:{Authorization:"Client-ID "+app.forum.attribute("imgur-upload.client-id")},type:"POST",data:o,cache:!1,contentType:!1,processData:!1,success:this.success.bind(this),error:this.error.bind(this)})},o.success=function(t){var r=this;$("#imgur-upload-form input").val(""),this.isLoading=!1,this.isSuccess=!0,m.redraw();var o=t.data.link,e=o;if(t.data.width>1024){var n=e.lastIndexOf(".");e=e.slice(0,n)+"h"+e.slice(n)}var i="[![]("+e+")]("+o+")\n";this.props.textArea.insertAtCursor(i),setTimeout(function(){r.isSuccess=!1,m.redraw()},2e3)},o.error=function(t){var r=this;$("#imgur-upload-form").val(""),this.isLoading=!1,this.isError=!0,m.redraw(),console.error(t),setTimeout(function(){r.isError=!1,m.redraw()},2e3)},r}(u.a);app.initializers.add("botfactoryit-imgur-upload",function(){Object(e.extend)(i.a.prototype,"controlItems",function(t){t.add("imgur-upload",m(f,{textArea:this}))})})}]);
//# sourceMappingURL=forum.js.map