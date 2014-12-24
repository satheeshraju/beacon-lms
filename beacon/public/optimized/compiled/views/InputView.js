(function(){var t={}.hasOwnProperty,e=function(e,n){function o(){this.constructor=e}for(var i in n)t.call(n,i)&&(e[i]=n[i]);return o.prototype=n.prototype,e.prototype=new o,e.__super__=n.prototype,e};define(["Backbone"],function(t){var n,o,i;return o=t.View,n=function(t){function n(){return i=n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.tagName="input",n.prototype.defaults={modelAttribute:"unnamed"},n.prototype.initialize=function(){return n.__super__.initialize.apply(this,arguments),this.setupElement()},n.prototype.setElement=function(){return n.__super__.setElement.apply(this,arguments),this.setupElement()},n.prototype.setupElement=function(){var t,e;return this.lastValue=null!=(t=this.el)?t.value:void 0,this.modelAttribute=this.$el.attr("name")||(null!=(e=this.options)?e.modelAttribute:void 0)},n.prototype.attach=function(){var t=this;if(this.collection)return this.collection.on("beforeFetch",function(){return t.$el.addClass("loading")}),this.collection.on("fetch",function(){return t.$el.removeClass("loading")}),this.collection.on("fetch:fail",function(){return t.$el.removeClass("loading")})},n.prototype.updateModel=function(){var t;if(t=this.el.value,t&&t.length<this.options.minLength&&!(this.options.allowSmallerNumbers&&t>0)){if(!this.options.setParamOnInvalid)return;t=!1}return this.setParam(t)},n.prototype.setParam=function(t){var e,n,o;return null!=(e=this.model)&&e.set(this.modelAttribute,t),""===t?null!=(n=this.collection)?n.deleteParam(this.modelAttribute):void 0:null!=(o=this.collection)?o.setParam(this.modelAttribute,t):void 0},n}(o)})}).call(this);