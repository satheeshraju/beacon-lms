(function(){var t={}.hasOwnProperty,r=function(r,o){function e(){this.constructor=r}for(var n in o)t.call(o,n)&&(r[n]=o[n]);return e.prototype=o.prototype,r.prototype=new e,r.__super__=o.prototype,r};define(["underscore","compiled/collections/PaginatedCollection","compiled/models/OutcomeGroup"],function(t,o,e){var n,p;return n=function(o){function n(){return p=n.__super__.constructor.apply(this,arguments)}return r(n,o),n.prototype.model=e,n.prototype.parse=function(r){return n.__super__.parse.apply(this,arguments),t.reject(r,function(t){return t.id===ENV.COMMON_CORE_GROUP_ID})},n}(o)})}).call(this);