(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,i=function(t,i){function s(){this.constructor=t}for(var o in i)e.call(i,o)&&(t[o]=i[o]);return s.prototype=i.prototype,t.prototype=new s,t.__super__=i.prototype,t};define(["i18n!assignments","jquery","underscore","compiled/class/cache","compiled/views/DraggableCollectionView","compiled/views/assignments/AssignmentListItemView","compiled/views/assignments/CreateAssignmentView","compiled/views/assignments/CreateGroupView","compiled/views/assignments/DeleteGroupView","compiled/views/MoveDialogView","compiled/fn/preventDefault","jst/assignments/AssignmentGroupListItem","compiled/views/assignments/AssignmentKeyBindingsMixin"],function(e,s,o,n,r,l,h,u,a,p,c,g,d){var m,f;return m=function(r){function m(){return this.lastVisibleGroup=t(this.lastVisibleGroup,this),this.focusOnFirstGroup=t(this.focusOnFirstGroup,this),this.focusOnAssignment=t(this.focusOnAssignment,this),this.focusOnGroup=t(this.focusOnGroup,this),this.previousGroup=t(this.previousGroup,this),this.nextGroup=t(this.nextGroup,this),this.visibleGroupsInCollection=t(this.visibleGroupsInCollection,this),this.lastAssignment=t(this.lastAssignment,this),this.firstAssignment=t(this.firstAssignment,this),this.hasVisibleAssignments=t(this.hasVisibleAssignments,this),this.visibleAssignments=t(this.visibleAssignments,this),this.deleteItem=t(this.deleteItem,this),this.editItem=t(this.editItem,this),this.addItem=t(this.addItem,this),this.goToPrevItem=t(this.goToPrevItem,this),this.goToNextItem=t(this.goToNextItem,this),this.isVisible=t(this.isVisible,this),this.hideAccessibilityWarning=t(this.hideAccessibilityWarning,this),this.showAccessibilityWarning=t(this.showAccessibilityWarning,this),this.toggleArrowWithKeyboard=t(this.toggleArrowWithKeyboard,this),this.toggleArrow=t(this.toggleArrow,this),this.collapse=t(this.collapse,this),this.expand=t(this.expand,this),this.endSort=t(this.endSort,this),this.startSort=t(this.startSort,this),this.createRulesToolTip=t(this.createRulesToolTip,this),this.render=t(this.render,this),f=m.__super__.constructor.apply(this,arguments)}return i(m,r),m.mixin(d),m.optionProperty("course"),m.prototype.tagName="li",m.prototype.className="item-group-condensed",m.prototype.itemView=l,m.prototype.template=g,m.child("createAssignmentView","[data-view=createAssignment]"),m.child("editGroupView","[data-view=editAssignmentGroup]"),m.child("deleteGroupView","[data-view=deleteAssignmentGroup]"),m.child("moveGroupView","[data-view=moveAssignmentGroup]"),m.prototype.els=o.extend({},m.prototype.els,{".add_assignment":"$addAssignmentButton",".delete_group":"$deleteGroupButton",".edit_group":"$editGroupButton",".move_group":"$moveGroupButton",".accessibility-warning":"$accessibilityWarning"}),m.prototype.events={"click .element_toggler":"toggleArrow","keypress .element_toggler":"toggleArrowWithKeyboard","click .tooltip_link":c(function(){}),"keydown .assignment_group":"handleKeys","focus .icon-drag-handle":"showAccessibilityWarning","blur .icon-drag-handle":"hideAccessibilityWarning"},m.prototype.messages={toggleMessage:e.t("toggle_message","toggle assignment visibility")},m.prototype.render=function(){return this.createAssignmentView&&this.createAssignmentView.remove(),this.editGroupView&&this.editGroupView.remove(),this.deleteGroupView&&this.deleteGroupView.remove(),this.moveGroupView&&this.moveGroupView.remove(),m.__super__.render.call(this,this.canManage()),this.model?this.model.view=this:void 0},m.prototype.afterRender=function(){return this.createAssignmentView&&(this.createAssignmentView.hide(),this.createAssignmentView.setTrigger(this.$addAssignmentButton)),this.editGroupView&&(this.editGroupView.hide(),this.editGroupView.setTrigger(this.$editGroupButton)),this.deleteGroupView&&(this.deleteGroupView.hide(),this.deleteGroupView.setTrigger(this.$deleteGroupButton)),this.moveGroupView&&(this.moveGroupView.hide(),this.moveGroupView.setTrigger(this.$moveGroupButton)),this.model.hasRules()?this.createRulesToolTip():void 0},m.prototype.createRulesToolTip=function(){var t;return t=this.$el.find(".tooltip_link"),t.tooltip({position:{my:"center top",at:"center bottom+10",collision:"fit fit"},tooltipClass:"center top vertical",content:function(){return s(t.data("tooltipSelector")).html()}})},m.prototype.initialize=function(){return this.initializeCollection(),m.__super__.initialize.apply(this,arguments),this.initializeChildViews(),this.model.groupView=this,this.initCache()},m.prototype.initializeCollection=function(){var t=this;return this.model.get("assignments").each(function(t){return t.multipleDueDates()?t.doNotParse():void 0}),this.collection=this.model.get("assignments"),this.collection.on("add",function(){return t.expand(!1)})},m.prototype.initializeChildViews=function(){return this.editGroupView=!1,this.createAssignmentView=!1,this.deleteGroupView=!1,this.moveGroupView=!1,this.canManage()?(this.editGroupView=new u({assignmentGroup:this.model}),this.createAssignmentView=new h({assignmentGroup:this.model}),this.deleteGroupView=new a({model:this.model}),this.moveGroupView=new p({model:this.model,closeTarget:this.$el.find("a[id*=manage_link]"),saveURL:function(){return ENV.URLS.sort_url}})):void 0},m.prototype.initCache=function(){var t;return s.extend(!0,this,n),this.cache.use("localStorage"),t=this.cacheKey(),null==this.cache.get(t)?this.cache.set(t,!0):void 0},m.prototype.initSort=function(){return m.__super__.initSort.apply(this,arguments),this.$list.on("sortactivate",this.startSort).on("sortdeactivate",this.endSort)},m.prototype.startSort=function(t,e){return 1===this.collection.length&&s(e.placeholder).data("group")===this.model.id?this.insertNoItemView():void 0},m.prototype.endSort=function(){return 0===this.collection.length&&this.$list.children().length<1?this.insertNoItemView():this.$list.children().length>1?this.removeNoItemView():void 0},m.prototype.toJSON=function(){var t,i,s,n,r;return s=this.model.toJSON(),n=(null!=(r=this.course)?r.get("apply_assignment_group_weights"):void 0)&&null!=s.group_weight,i=this.model.collection.length>1,t=o.extend(s,{course_home:ENV.COURSE_HOME,canMove:i,showRules:this.model.hasRules(),rulesText:e.t("rules_text","Rule",{count:this.model.countRules()}),displayableRules:this.displayableRules(),showWeight:n,groupWeight:s.group_weight,toggleMessage:this.messages.toggleMessage,hasFrozenAssignments:null!=this.model.hasFrozenAssignments&&this.model.hasFrozenAssignments(),ENV:ENV})},m.prototype.displayableRules=function(){var t,i,s=this;return i=this.model.rules()||{},t=[],null!=i.drop_lowest&&i.drop_lowest>0&&t.push(e.t("drop_lowest_rule",{one:"Drop the lowest score",other:"Drop the lowest %{count} scores"},{count:i.drop_lowest})),null!=i.drop_highest&&i.drop_highest>0&&t.push(e.t("drop_highest_rule",{one:"Drop the highest score",other:"Drop the highest %{count} scores"},{count:i.drop_highest})),null!=i.never_drop&&i.never_drop.length>0&&o.each(i.never_drop,function(i){var o,n;return o=s.model.get("assignments").findWhere({id:i}),(n=null!=o?o.get("name"):void 0)?t.push(e.t("never_drop_rule","Never drop %{assignment_name}",{assignment_name:n})):void 0}),t},m.prototype.search=function(t){var e;return this.resetBorders(),e=!1,this.collection.each(function(i){return i.search(t)?e=!0:void 0}),e?(this.show(),this.expand(!1),this.borderFix()):this.hide(),e},m.prototype.endSearch=function(){return this.resetBorders(),this.show(),this.collapseIfNeeded(),this.resetNoToggleCache(),this.collection.each(function(t){return t.endSearch()})},m.prototype.resetBorders=function(){return this.$(".first_visible").removeClass("first_visible"),this.$(".last_visible").removeClass("last_visible")},m.prototype.borderFix=function(){return this.$(".search_show").first().addClass("first_visible"),this.$(".search_show").last().addClass("last_visible")},m.prototype.shouldBeExpanded=function(){return this.cache.get(this.cacheKey())},m.prototype.collapseIfNeeded=function(){return this.shouldBeExpanded()?void 0:this.collapse(!1)},m.prototype.expand=function(t){return null==t&&(t=!0),t||this._setNoToggleCache(),this.currentlyExpanded()?void 0:this.toggleCollapse()},m.prototype.collapse=function(t){return null==t&&(t=!0),t||this._setNoToggleCache(),this.currentlyExpanded()?this.toggleCollapse():void 0},m.prototype.toggleCollapse=function(t){return null==t&&(t=!0),t||this._setNoToggleCache(),this.$el.find(".element_toggler").click()},m.prototype._setNoToggleCache=function(){return this.$el.find(".element_toggler").data("noToggleCache",!0)},m.prototype.currentlyExpanded=function(){return"false"===this.$el.find(".element_toggler").attr("aria-expanded")?!1:!0},m.prototype.cacheKey=function(){return["course",this.course.get("id"),"user",this.currentUserId(),"ag",this.model.get("id"),"expanded"]},m.prototype.toggleArrow=function(t){var e;return e=s(t.currentTarget).children("i"),e.toggleClass("icon-mini-arrow-down").toggleClass("icon-mini-arrow-right"),s(t.currentTarget).data("noToggleCache")||this.toggleCache(),this.resetNoToggleCache(t.currentTarget)},m.prototype.toggleArrowWithKeyboard=function(t){return 13===t.which||32===t.which?this.toggleArrow(t):void 0},m.prototype.showAccessibilityWarning=function(){return this.$accessibilityWarning.removeClass("screenreader-only"),this.$accessibilityWarning.focus()},m.prototype.hideAccessibilityWarning=function(){return this.$accessibilityWarning.addClass("screenreader-only")},m.prototype.resetNoToggleCache=function(t){var e;return null==t&&(t=null),e=null!=t?s(t):this.$el.find(".element_toggler"),e.data("noToggleCache",!1)},m.prototype.toggleCache=function(){var t,e;return e=this.cacheKey(),t=!this.cache.get(e),this.cache.set(e,t)},m.prototype.canManage=function(){return ENV.PERMISSIONS.manage},m.prototype.currentUserId=function(){return ENV.current_user_id},m.prototype.isVisible=function(){return s("#assignment_group_"+this.model.id).is(":visible")},m.prototype.goToNextItem=function(){return this.hasVisibleAssignments()?this.focusOnAssignment(this.firstAssignment()):null!=this.nextGroup()?this.focusOnGroup(this.nextGroup()):this.focusOnFirstGroup()},m.prototype.goToPrevItem=function(){return null!=this.previousGroup()?this.previousGroup().view.hasVisibleAssignments()?this.focusOnAssignment(this.previousGroup().view.lastAssignment()):this.focusOnGroup(this.previousGroup()):this.lastVisibleGroup().view.hasVisibleAssignments()?this.focusOnAssignment(this.lastVisibleGroup().view.lastAssignment()):this.focusOnGroup(this.lastVisibleGroup())},m.prototype.addItem=function(){return s(".add_assignment","#assignment_group_"+this.model.id).click()},m.prototype.editItem=function(){return s(".edit_group[data-focus-returns-to='ag_"+this.model.id+"_manage_link']").click()},m.prototype.deleteItem=function(){return s(".delete_group[data-focus-returns-to='ag_"+this.model.id+"_manage_link']").click()},m.prototype.visibleAssignments=function(){return this.collection.filter(function(t){return t.attributes.hidden!==!0})},m.prototype.hasVisibleAssignments=function(){return this.currentlyExpanded()&&this.visibleAssignments().length},m.prototype.firstAssignment=function(){return this.visibleAssignments()[0]},m.prototype.lastAssignment=function(){return this.visibleAssignments()[this.visibleAssignments().length-1]},m.prototype.visibleGroupsInCollection=function(){return this.model.collection.filter(function(t){return t.view.isVisible()})},m.prototype.nextGroup=function(){var t;return t=this.visibleGroupsInCollection().indexOf(this.model),this.visibleGroupsInCollection()[t+1]},m.prototype.previousGroup=function(){var t;return t=this.visibleGroupsInCollection().indexOf(this.model),this.visibleGroupsInCollection()[t-1]},m.prototype.focusOnGroup=function(t){return s("#assignment_group_"+t.attributes.id).attr("tabindex",-1).focus()},m.prototype.focusOnAssignment=function(t){return s("#assignment_"+t.id).attr("tabindex",-1).focus()},m.prototype.focusOnFirstGroup=function(){return s(".assignment_group").filter(":visible").first().attr("tabindex",-1).focus()},m.prototype.lastVisibleGroup=function(){var t;return t=this.visibleGroupsInCollection().length-1,this.visibleGroupsInCollection()[t]},m}(r)})}).call(this);