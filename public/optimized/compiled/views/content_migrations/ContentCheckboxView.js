(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,o=function(e,o){function s(){this.constructor=e}for(var i in o)t.call(o,i)&&(e[i]=o[i]);return s.prototype=o.prototype,e.prototype=new s,e.__super__=o.prototype,e};define(["jquery","Backbone","jst/content_migrations/ContentCheckbox","jst/content_migrations/ContentCheckboxCollection","compiled/collections/content_migrations/ContentCheckboxCollection","compiled/views/CollectionView","compiled/str/TextHelper"],function(t,s,i,n,l,r){var c,u;return c=function(s){function c(){return this.fetchCheckboxes=e(this.fetchCheckboxes,this),u=c.__super__.constructor.apply(this,arguments)}return o(c,s),c.prototype.template=i,c.prototype.tagName="li",c.prototype.attributes=function(){var e,t,o;return e={},e.role="treeitem",e.id="treeitem-"+this.cid,e["data-type"]=this.model.get("type"),e["aria-checked"]=!1,e["aria-level"]=null!=(t=this.model.collection)?t.options.ariaLevel:void 0,e["class"]=(null!=(o=this.model.collection)?o.isTopLevel:void 0)?"top-level-treeitem":"normal-treeitem",e},c.prototype.els={"[data-content=sublevelCheckboxes]":"$sublevelCheckboxes"},c.prototype.initialize=function(){return c.__super__.initialize.apply(this,arguments),this.hasSubItemsUrl=!!this.model.get("sub_items_url"),this.hasSubItems=!!this.model.get("sub_items"),this.hasSubItemsUrl||this.hasSubItems?this.$el.on("fetchCheckboxes",this.fetchCheckboxes):void 0},c.prototype.toJSON=function(){var e,t;return e=c.__super__.toJSON.apply(this,arguments),e.hasSubCheckboxes=this.hasSubItems||this.hasSubItemsUrl,e.isTopLevel=null!=(t=this.model.collection)?t.isTopLevel:void 0,e.iconClass=this.getIconClass(),e.count=this.model.get("count"),e.screenreaderType={assignment_groups:"group",folders:"folders"}[this.model.get("type")],e},c.prototype.iconClasses={course_settings:"icon-settings",syllabus_body:"icon-syllabus",context_modules:"icon-module",assignments:"icon-assignment",quizzes:"icon-quiz",assessment_question_banks:"icon-collection",discussion_topics:"icon-discussion",wiki_pages:"icon-note-light",context_external_tools:"icon-lti",announcements:"icon-announcement",calendar_events:"icon-calendar-days",rubrics:"icon-rubric",groups:"icon-group",learning_outcomes:"icon-standards",attachments:"icon-document",assignment_groups:"icon-folder",folders:"icon-folder"},c.prototype.getIconClass=function(){return this.iconClasses[this.model.get("type")]},c.prototype.afterRender=function(){var e;return(this.hasSubItemsUrl||this.hasSubItems)&&this.$el.attr("aria-expanded",!1),this.hasSubItems&&(this.sublevelCheckboxes=new l(this.model.get("sub_items"),{ariaLevel:(null!=(e=this.model.collection)?e.ariaLevel:void 0)+1}),this.renderSublevelCheckboxes()),this.model.get("linked_resource")?this.attachLinkedResource():void 0},c.prototype.fetchCheckboxes=function(e,o){var s;return null==o&&(o={}),e.preventDefault(),e.stopPropagation(),this.hasSubItemsUrl?(s=t(e.currentTarget),this.sublevelCheckboxes?void 0:(this.fetchSublevelCheckboxes(o.silent),this.renderSublevelCheckboxes())):void 0},c.prototype.fetchSublevelCheckboxes=function(e){var t,o,s=this;return this.sublevelCheckboxes=new l(null,{ariaLevel:(null!=(o=this.model.collection)?o.ariaLevel:void 0)+1}),this.sublevelCheckboxes.url=this.model.get("sub_items_url"),t=this.sublevelCheckboxes.fetch(),t.done(function(){return s.$el.trigger("doneFetchingCheckboxes",s.$el.find("#checkbox-"+s.cid))}),e||this.$el.disableWhileLoading(t),t},c.prototype.renderSublevelCheckboxes=function(){var e;return e=new r({collection:this.sublevelCheckboxes,itemView:c,el:this.$sublevelCheckboxes,template:n}),e.render()},c.prototype.attachLinkedResource=function(){var e,t;return e=this.model.get("linked_resource"),t="copy["+e.type+"][id_"+e.migration_id+"]",this.$el.find("#checkbox-"+this.cid).data("linkedResourceProperty",t)},c}(s.View)})}).call(this);