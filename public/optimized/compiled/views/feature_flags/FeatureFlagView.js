(function(){var e={}.hasOwnProperty,t=function(t,o){function r(){this.constructor=t}for(var n in o)e.call(o,n)&&(t[n]=o[n]);return r.prototype=o.prototype,t.prototype=new r,t.__super__=o.prototype,t};define(["jquery","Backbone","compiled/views/feature_flags/FeatureFlagDialog","jst/feature_flags/featureFlag"],function(e,o,r,n){var a,l;return a=function(o){function a(){return l=a.__super__.constructor.apply(this,arguments)}return t(a,o),a.prototype.tagName="li",a.prototype.className="feature-flag",a.prototype.template=n,a.prototype.els={".element_toggler i":"$detailToggle"},a.prototype.events={"click button":"onToggleValue","click .element_toggler":"onToggleDetails","keyclick .element_toggler":"onToggleDetails"},a.prototype.onToggleValue=function(t){return this.toggleValue(e(t.currentTarget))},a.prototype.onToggleDetails=function(){return this.toggleDetailsArrow()},a.prototype.toggleDetailsArrow=function(){return this.$detailToggle.toggleClass("icon-mini-arrow-right"),this.$detailToggle.toggleClass("icon-mini-arrow-down")},a.prototype.shouldDelete=function(e){var t;return(null!=(t=ENV.ACCOUNT)?t.site_admin:void 0)&&this.model.get("hidden")&&"off"===e},a.prototype.toggleValue=function(t){var o,r=this;return o=t.data("action"),e.when(this.canUpdate(o)).then(function(){return t.siblings().removeClass("active").attr("aria-checked",!1),t.addClass("active").attr("aria-checked",!0),r.shouldDelete(o)?r.deleteFlag():r.updateFlag(o)})},a.prototype.canUpdate=function(t){var o,n,a;return o=e.Deferred(),(a=this.model.warningFor(t))?(n=new r({deferred:o,message:a.message,title:this.model.get("display_name"),hasCancelButton:!a.locked}),n.render(),n.show(),o):o.resolve()},a.prototype.deleteFlag=function(){return this.model.destroy({silent:!0})},a.prototype.updateFlag=function(e){return this.model.save({state:e}).then(this.model.updateTransitions)},a}(o.View)})}).call(this);