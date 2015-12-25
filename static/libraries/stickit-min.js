// Backbone stickit 0.8.0
!function(t){"function"==typeof define&&define.amd?define(["underscore","backbone","exports"],t):"object"==typeof exports?t(require("underscore"),require("backbone"),exports):t(_,Backbone,{})}(function(t,e,n){n._handlers=[],n.addHandler=function(e){e=t.map(t.flatten([e]),function(e){return t.extend({updateModel:!0,updateView:!0,updateMethod:"text"},e)}),this._handlers=this._handlers.concat(e)},n.ViewMixin={_modelBindings:null,unstickit:function(e,n){if(t.isObject(n))return void t.each(t.keys(n),function(t){this.unstickit(e,t)},this);var i=[],a=[];t.each(this._modelBindings,function(t,o){e&&t.model!==e||n&&t.config.selector!=n||(a.push(t.config._destroy),t.model.off(t.event,t.fn),i.push(t.model),delete this._modelBindings[o])},this),t.invoke(t.uniq(i),"trigger","stickit:unstuck",this.cid),t.each(t.uniq(a),function(t){t.call(this)},this),this._modelBindings=t.compact(this._modelBindings),this.$el.off(".stickit"+(e?"."+e.cid:""),n)},stickit:function(e,n){var i=e||this.model,a=n||t.result(this,"bindings")||{};this._modelBindings||(this._modelBindings=[]),this.addBinding(i,a);var o=this.remove;o.stickitWrapped||(this.remove=function(){var t=this;return this.unstickit(),o&&(t=o.apply(this,arguments)),t}),this.remove.stickitWrapped=!0},addBinding:function(e,n,i){var o,f,v,g,b,m=e||this.model,_=".stickit."+m.cid,k=i||{},y=t.uniqueId();if(!t.isString(n)){var x=n;return void t.each(x,function(t,e){this.addBinding(m,e,x[e])},this)}b=n,o=":el"===b?this.$el:this.$(b),this.unstickit(m,b),o.length&&(t.isString(k)&&(k={observe:k}),t.isFunction(k.observe)&&(k.observe=k.observe.call(this)),g=c(o,k),g.selector=b,v=g.observe,g.bindId=y,g.view=this,f=t.extend({stickitChange:g},g.setOptions),g._destroy=function(){a(this,g.destroy,o,m,g)},d(this,o,g,m,v),h(this,o,g,m,v),v&&(t.each(g.events,function(e){var n=e+_,i=function(e){var n=g.getVal.call(this,o,e,g,t.rest(arguments));r(this,g.updateModel,n,e,g)&&u(m,v,n,f,this,g)};i=t.bind(i,this),":el"===b?this.$el.on(n,i):this.$el.on(n,b,i)},this),t.each(t.flatten([v]),function(t){s(m,this,"change:"+t,g,function(t,e,n){var i=n&&n.stickitChange&&n.stickitChange.bindId||null;i!==y&&p(this,o,g,l(t,v,g,this),t)})},this),p(this,o,g,l(m,v,g,this),m,!0)),a(this,g.initialize,o,m,g))}},t.extend(e.View.prototype,n.ViewMixin);var i=function(e,n){var i=(n||"").split("."),a=t.reduce(i,function(t,e){return t[e]},e);return null==a?e:a},a=function(e,n){return n?(t.isString(n)?i(e,n):n).apply(e,t.rest(arguments,2)):void 0},o=function(t){return t.find("option").not(function(){return!this.selected})},r=function(e,n){return t.isBoolean(n)?n:t.isFunction(n)||t.isString(n)?a.apply(this,arguments):!1},s=function(t,e,n,i,a){t.on(n,a,e),e._modelBindings.push({model:t,event:n,fn:a,config:i})},u=function(e,n,i,o,r,s){var u={};s.onSet&&(i=a(r,s.onSet,i,s)),s.set?a(r,s.set,n,i,o,s):(u[n]=i,t.isArray(n)&&t.isArray(i)&&(u=t.reduce(n,function(e,n,a){return e[n]=t.has(i,a)?i[a]:null,e},{})),e.set(u,o))},l=function(e,n,i,o){var r,s=function(t){return e[i.escape?"escape":"get"](t)},u=function(t){return null==t?"":t};return r=t.isArray(n)?t.map(n,s):s(n),i.onGet&&(r=a(o,i.onGet,r,i)),t.isArray(r)?t.map(r,u):u(r)},c=n.getConfiguration=function(e,i){var a=[{updateModel:!1,updateMethod:"text",update:function(t,e,n,i){t[i.updateMethod]&&t[i.updateMethod](e)},getVal:function(t,e,n){return t[n.updateMethod]()}}];a=a.concat(t.filter(n._handlers,function(t){return e.is(t.selector)})),a.push(i);var o=t.extend.apply(t,a);return o.visible&&!t.has(o,"updateView")?o.updateView=!1:t.has(o,"updateView")||(o.updateView=!0),o},d=function(e,n,i,a,o){var r=["autofocus","autoplay","async","checked","controls","defer","disabled","hidden","indeterminate","loop","multiple","open","readonly","required","scoped","selected"];t.each(i.attributes||[],function(u){var c,d,h="";u=t.clone(u),c=u.observe||(u.observe=o),d=function(){var i=t.indexOf(r,u.name,!0)>-1?"prop":"attr",o=l(a,c,u,e);"class"===u.name?(n.removeClass(h).addClass(o),h=o):n[i](u.name,o)},t.each(t.flatten([c]),function(t){s(a,e,"change:"+t,i,d)}),d()})},h=function(e,n,i,o,r){if(null!=i.visible){var u=function(){var s=i.visible,u=i.visibleFn,c=l(o,r,i,e),d=!!c;(t.isFunction(s)||t.isString(s))&&(d=!!a(e,s,c,i)),u?a(e,u,n,d,i):n.toggle(d)};t.each(t.flatten([r]),function(t){s(o,e,"change:"+t,i,u)}),u()}},p=function(t,e,n,i,o,s){r(t,n.updateView,i,n)&&(a(t,n.update,e,i,o,n),s||a(t,n.afterUpdate,e,i,n))};return n.addHandler([{selector:'[contenteditable="true"]',updateMethod:"html",events:["input","change"]},{selector:"input",events:["propertychange","input","change"],update:function(t,e){t.val(e)},getVal:function(t){return t.val()}},{selector:"textarea",events:["propertychange","input","change"],update:function(t,e){t.val(e)},getVal:function(t){return t.val()}},{selector:'input[type="radio"]',events:["change"],update:function(t,e){t.filter('[value="'+e+'"]').prop("checked",!0)},getVal:function(t){return t.filter(":checked").val()}},{selector:'input[type="checkbox"]',events:["change"],update:function(n,i,a,o){if(n.length>1)i||(i=[]),n.each(function(n,a){var o=e.$(a),r=t.indexOf(i,o.val())>-1;o.prop("checked",r)});else{var r=t.isBoolean(i)?i:i===n.val();n.prop("checked",r)}},getVal:function(n){var i;if(n.length>1)i=t.reduce(n,function(t,n){var i=e.$(n);return i.prop("checked")&&t.push(i.val()),t},[]);else{i=n.prop("checked");var a=n.val();"on"!==a&&null!=a&&(i=i?n.val():null)}return i}},{selector:"select",events:["change"],update:function(n,o,r,s){var u,l=s.selectOptions,c=l&&l.collection||void 0,d=n.prop("multiple");if(!l){l={};var h=function(t){return t.map(function(){return{value:this.value,label:this.text}}).get()};n.find("optgroup").length?(c={opt_labels:[]},n.find("> option").length&&(c.opt_labels.push(void 0),t.each(n.find("> option"),function(t){c[void 0]=h(e.$(t))})),t.each(n.find("optgroup"),function(t){var n=e.$(t).attr("label");c.opt_labels.push(n),c[n]=h(e.$(t).find("option"))})):c=h(n.find("option"))}l.valuePath=l.valuePath||"value",l.labelPath=l.labelPath||"label";var p=function(n,a,o){t.each(n,function(n){var r=e.$("<option/>"),s=n,u=function(e,n){r.text(e),s=n,r.data("stickit_bind_val",s),t.isArray(s)||t.isObject(s)||r.val(s)};"__default__"===n?u(l.defaultOption.label,l.defaultOption.value):u(i(n,l.labelPath),i(n,l.valuePath)),!d&&null!=s&&null!=o&&s===o||t.isObject(o)&&t.isEqual(s,o)?r.prop("selected",!0):d&&t.isArray(o)&&t.each(o,function(e){t.isObject(e)&&(e=i(e,l.valuePath)),(e===s||t.isObject(e)&&t.isEqual(s,e))&&r.prop("selected",!0)}),a.append(r)})};n.find("*").remove();var f=function(t,e){var n=window;return 0===e.indexOf("this.")&&(n=t),e=e.replace(/^[a-z]*\.(.+)$/,"$1"),i(n,e)};if(u=t.isString(c)?f(this,c):t.isFunction(c)?a(this,c,n,s):c,u instanceof e.Collection&&(u=u.toJSON()),l.defaultOption&&p(["__default__"],n),t.isArray(u))p(u,n,o);else if(u.opt_labels)t.each(u.opt_labels,function(t){var i=e.$("<optgroup/>").attr("label",t);p(u[t],i,o),n.append(i)});else{var v,g=[];for(var b in u)v={},v[l.valuePath]=b,v[l.labelPath]=u[b],g.push(v);p(t.sortBy(g,l.comparator||l.labelPath),n,o)}},getVal:function(t){var n;return n=t.prop("multiple")?e.$(o(t).map(function(){return e.$(this).data("stickit_bind_val")})).get():o(t).data("stickit_bind_val")}}]),e.Stickit=n,e.Stickit});