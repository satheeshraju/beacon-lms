(function(){var t=function(t,n){return function(){return t.apply(n,arguments)}},n={}.hasOwnProperty,r=function(t,r){function e(){this.constructor=t}for(var o in r)n.call(r,o)&&(t[o]=r[o]);return e.prototype=r.prototype,t.prototype=new e,t.__super__=r.prototype,t};define(["Backbone","underscore"],function(n,e){var o,i;return o=function(n){function o(){return this.validateBeforeSave=t(this.validateBeforeSave,this),i=o.__super__.constructor.apply(this,arguments)}return r(o,n),o.prototype.validateBeforeSave=function(){var t;return t={},e.each(this.children,function(n){return n.validations?e.extend(t,n.validations()):void 0}),t},o}(n.View)})}).call(this);