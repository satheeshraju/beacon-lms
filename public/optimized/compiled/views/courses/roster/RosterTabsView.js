(function(){var t={}.hasOwnProperty,e=function(e,r){function o(){this.constructor=e}for(var n in r)t.call(r,n)&&(e[n]=r[n]);return o.prototype=r.prototype,e.prototype=new o,e.__super__=r.prototype,e};define(["i18n!roster","jquery","underscore","Backbone","jst/courses/roster/rosterTabs"],function(t,r,o,n,c){var i,u;return i=function(t){function r(){return u=r.__super__.constructor.apply(this,arguments)}return e(r,t),r.prototype.template=c,r.prototype.tagName="li",r.prototype.className="collectionViewItems ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",r.prototype.attach=function(){return this.collection.on("reset",this.render,this)},r.prototype.fetch=function(){return ENV.canManageCourse?this.collection.fetch():void 0},r.prototype.toJSON=function(){var t;return t={},t.collection=r.__super__.toJSON.apply(this,arguments),t.course=ENV.course,t},r}(n.View)})}).call(this);