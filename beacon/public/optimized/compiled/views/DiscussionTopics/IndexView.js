(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,i=function(t,i){function n(){this.constructor=t}for(var s in i)e.call(i,s)&&(t[s]=i[s]);return n.prototype=i.prototype,t.prototype=new n,t.__super__=i.prototype,t};define(["jquery","underscore","Backbone","jst/DiscussionTopics/IndexView","compiled/views/DiscussionTopics/DiscussionsSettingsView","compiled/views/DiscussionTopics/UserSettingsView"],function(e,n,s,o,r,c){var l,u,a;return u=s.View,l=function(s){function l(){return this.filterResults=t(this.filterResults,this),this.filter=t(this.filter,this),a=l.__super__.constructor.apply(this,arguments)}return i(l,s),l.prototype.template=o,l.prototype.el="#content",l.child("openDiscussionView",".open.discussion-list"),l.child("lockedDiscussionView",".locked.discussion-list"),l.child("pinnedDiscussionView",".pinned.discussion-list"),l.prototype.events={"click .ig-header .element_toggler":"toggleDiscussionList","focus .accessibility-warning":"handleAccessibilityWarningFocus","blur .accessibility-warning":"handleAccessibilityWarningBlur","keydown .ig-header .element_toggler":"toggleDiscussionList","click .discussion-list":"toggleDiscussionListWithVo","click #edit_discussions_settings":"toggleSettingsView","change #onlyUnread, #onlyGraded":"filterResults","keyup #searchTerm":"filterResults"},l.prototype.filters={onlyGraded:{active:!1,fn:function(t){return t.get("assignment_id")}},onlyUnread:{active:!1,fn:function(t){return t.get("unread_count")>0||"unread"===t.get("read_state")}},searchTerm:{active:!1,fn:function(t,e){var i,n;if(e)return i=new RegExp(e,"ig"),t.get("title").match(i)||(null!=(n=t.get("user_name"))?n.match(i):void 0)||t.summary().match(i)}}},l.prototype.collections=function(){return[this.options.openDiscussionView.collection,this.options.lockedDiscussionView.collection,this.options.pinnedDiscussionView.collection]},l.prototype.initialize=function(){return l.__super__.initialize.apply(this,arguments),this.listenTo(this.options.pinnedDiscussionView.collection,"add remove",this.handleAddRemovePinnedDiscussion)},l.prototype.afterRender=function(){return this.$("#discussionsFilter").buttonset(),this.setAccessibilityWarningState()},l.prototype.activeFilters=function(){return n.select(this.filters,function(t){return t.active})},l.prototype.filter=function(t,e){return n.all(this.activeFilters(),function(i){return i.fn.call(t,t,e)})},l.prototype.filterResults=function(t){var i,s=this;return"checkbox"===t.target.type?(this.filters[t.target.id].active=e(t.target).prop("checked"),e("#searchTerm").val().length>0&&(i=e("#searchTerm").val())):(this.filters[t.target.id].active=e(t.target).val().length>0,i=e(t.target).val()),n.each(this.collections(),function(t){return t.each(function(t){return s.activeFilters().length>0?t.set("hidden",!s.filter(t,i)):t.set("hidden",!1)})})},l.prototype.toggleSettingsView=function(){return this.settingsView().toggle()},l.prototype.toggleDiscussionList=function(t){var i,n,s;if(i=e(t.currentTarget),"keydown"===t.type)return void((13===(s=t.keyCode)||32===s)&&(t.preventDefault(),i.click()));for(n=i.find("i");i.length&&0===n.length;)i=i.parent(),n=i.find("i");return n.length?n.toggleClass("icon-mini-arrow-down").toggleClass("icon-mini-arrow-right"):void 0},l.prototype.setAccessibilityWarningState=function(){return this.options.pinnedDiscussionView.collection.length>1?e(".accessibility-warning").show():e(".accessibility-warning").hide()},l.prototype.handleAddRemovePinnedDiscussion=function(){return this.setAccessibilityWarningState()},l.prototype.handleAccessibilityWarningFocus=function(t){var i;return this.options.pinnedDiscussionView.collection.length>1?(i=e(t.currentTarget),i.removeClass("screenreader-only")):void 0},l.prototype.handleAccessibilityWarningBlur=function(t){var i;return this.options.pinnedDiscussionView.collection.length>1?(i=e(t.currentTarget),i.addClass("screenreader-only")):void 0},l.prototype.toggleDiscussionListWithVo=function(t){var i;if(t.target===t.delegateTarget||("function"==typeof(i=t.target).isSameNode?i.isSameNode(t.delegateTarget):0))return e(t.target).find(".ig-header .element_toggler").first().click(),!1},l.prototype.settingsView=function(){return this._settingsView||(this._settingsView=this.options.permissions.change_settings?new r:new c),this._settingsView},l.prototype.toJSON=function(){return n.extend({},{options:this.options,length:1,atLeastOnePageFetched:!0,new_topic_url:ENV.newTopicURL})},l}(u)})}).call(this);