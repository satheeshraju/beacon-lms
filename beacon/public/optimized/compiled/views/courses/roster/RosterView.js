(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,r=function(e,r){function s(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return s.prototype=r.prototype,e.prototype=new s,e.__super__=r.prototype,e};define(["i18n!roster","jquery","Backbone","jst/courses/roster/index","compiled/views/ValidatedMixin","compiled/models/GroupCategory"],function(t,s,o,i,n){var a,c;return a=function(o){function a(){return this.onFail=e(this.onFail,this),this.fetch=e(this.fetch,this),this.fetchOnCreateUsersClose=e(this.fetchOnCreateUsersClose,this),c=a.__super__.constructor.apply(this,arguments)}return r(a,o),a.mixin(n),a.child("usersView","[data-view=users]"),a.child("inputFilterView","[data-view=inputFilter]"),a.child("roleSelectView","[data-view=roleSelect]"),a.child("createUsersView","[data-view=createUsers]"),a.child("resendInvitationsView","[data-view=resendInvitations]"),a.child("rosterTabsView","[data-view=rosterTabs]"),a.optionProperty("roles"),a.optionProperty("permissions"),a.optionProperty("course"),a.prototype.template=i,a.prototype.els={"#addUsers":"$addUsersButton"},a.prototype.afterRender=function(){return this.createUsersView.hide(),this.createUsersView.setTrigger(this.$addUsersButton)},a.prototype.attach=function(){return this.collection.on("setParam deleteParam",this.fetch),this.createUsersView.on("close",this.fetchOnCreateUsersClose)},a.prototype.fetchOnCreateUsersClose=function(){return this.createUsersView.hasUsers()?this.collection.fetch():void 0},a.prototype.fetch=function(){var e;return null!=(e=this.lastRequest)&&e.abort(),this.lastRequest=this.collection.fetch().fail(this.onFail)},a.prototype.course_id=function(){return ENV.context_asset_string.split("_")[1]},a.prototype.canAddCategories=function(){return ENV.canManageCourse},a.prototype.toJSON=function(){return this},a.prototype.onFail=function(e){var r,o,i;if("abort"!==e.statusText)return o=s.parseJSON(e.responseText),r="3 or more characters is required"===(null!=o&&null!=(i=o.errors)?i[0].message:void 0)?t.t("greater_than_three","Please enter a search term with three or more characters"):t.t("unknown_error","Something went wrong with your search, please try again."),this.showErrors({search_term:[{message:r}]})},a}(o.View)})}).call(this);