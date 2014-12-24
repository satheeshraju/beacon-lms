(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};define(["jquery","underscore","i18n!calendar.edit","timezone","Backbone","jst/calendar/editCalendarEventFull","compiled/views/calendar/MissingDateDialogView","wikiSidebar","compiled/object/unflatten","compiled/util/deparam","tinymce.editor_box","compiled/tinymce"],function(t,i,r,s,o,a,l,d,c,u){var _,p;return _=function(o){function _(){return this.toggleUseSectionDates=e(this.toggleUseSectionDates,this),this.toggleUsingSectionClass=e(this.toggleUsingSectionClass,this),this.destroyModel=e(this.destroyModel,this),this.render=e(this.render,this),p=_.__super__.constructor.apply(this,arguments)}return n(_,o),_.prototype.el=t("#content"),_.prototype.template=a,_.prototype.events={"submit form":"submit","change #use_section_dates":"toggleUseSectionDates","click .delete_link":"destroyModel","click .switch_event_description_view":"toggleHtmlView"},_.prototype.initialize=function(){var e=this;return _.__super__.initialize.apply(this,arguments),this.model.fetch().done(function(){var t,n,r;return n=i.pick(u(),"start_date","start_time","end_time","title","description","location_name","location_address"),t=e.model.parse(n),t.all_day=!!(null!=(r=t.start_at)?r.equals(t.end_at):void 0)&&t.start_at.equals(t.start_at.clearTime()),e.model.set(t),e.render(),i.each(i.keys(n),function(t){var i;return i=e.$el.find("input[name='"+t+"']"),i.val(n[t]),i.change()})}),this.model.on("change:use_section_dates",this.toggleUsingSectionClass)},_.prototype.render=function(){var e;return _.__super__.render.apply(this,arguments),this.$(".date_field").date_field(),this.$(".time_field").time_field(),e=this.$("textarea").editorBox(),d.inited||d.init(),d.attachToEditor(e).show(),this},_.prototype.destroyModel=function(){var e,t=this;return e=r.t("confirm_delete_calendar_event","Are you sure you want to delete this calendar event?"),confirm(e)?this.$el.disableWhileLoading(this.model.destroy({success:function(){return t.redirectWithMessage(r.t("event_deleted","%{event_title} deleted successfully",{event_title:t.model.get("title")}))}})):void 0},_.prototype.toggleUsingSectionClass=function(){return this.$("#editCalendarEventFull").toggleClass("use_section_dates",this.model.get("use_section_dates")),t(".show_if_using_sections input").prop("disabled",!this.model.get("use_section_dates"))},_.prototype.toggleUseSectionDates=function(e){return this.model.set("use_section_dates",!this.model.get("use_section_dates")),this.updateRemoveChildEvents(e)},_.prototype.toggleHtmlView=function(e){return null!=e&&e.preventDefault(),t("textarea[name=description]").editorBox("toggle"),t(e.currentTarget).siblings("a").andSelf().toggle()},_.prototype.updateRemoveChildEvents=function(e){var n;return n=t(e.target).prop("checked")?"":"1",t("input[name=remove_child_events]").val(n)},_.prototype.redirectWithMessage=function(e){return t.flashMessage(e),this.model.get("return_to_url")?window.location=this.model.get("return_to_url"):void 0},_.prototype.submit=function(e){var n,i,s=this;return null!=e&&e.preventDefault(),i=c(this.getFormData()),i.use_section_dates="1"===i.use_section_dates,"1"===i.remove_child_events&&delete i.child_event_data,t("#use_section_dates").prop("checked")&&(n=new l({validationFn:function(){var e;return e=t("[name*=start_date]:visible").filter(function(){return""===t(this).val()}),e.length>0?e:!0},labelFn:function(e){return t(e).parents("tr").prev().find("label").text()},success:function(e){return e.dialog("close"),s.$el.disableWhileLoading(s.model.save(i,{success:function(){return s.redirectWithMessage(r.t("event_saved","Event Saved Successfully"))}})),e.remove()}}),n.render())?void 0:this.saveEvent(i)},_.prototype.saveEvent=function(e){var t=this;return this.$el.disableWhileLoading(this.model.save(e,{success:function(){return t.redirectWithMessage(r.t("event_saved","Event Saved Successfully"))}}))},_.prototype.getFormData=function(){var e,t,n=this;return e=this.$el.getFormData(),t=i.filter(i.keys(e),function(e){return/start_date/.test(e)}),i.each(t,function(t){var r,o,a,l,d,c,u,_,p;return p=t.replace(/start_date/,"start_time"),l=t.replace(/start_date/,"end_time"),c=t.replace(/start_date/,"start_at"),o=t.replace(/start_date/,"end_at"),u=n.$el.find("[name='"+t+"']").data("date"),_=n.$el.find("[name='"+p+"']").data("date"),a=n.$el.find("[name='"+l+"']").data("date"),u?(e=i.omit(e,t,p,l),d=u.toString("yyyy-MM-dd"),_&&(d+=_.toString(" HH:mm")),e[c]=s.parse(d),r=u.toString("yyyy-MM-dd"),a&&(r+=a.toString(" HH:mm")),e[o]=s.parse(r)):void 0}),e},_.type="event",_.title=function(){return _.__super__.constructor.title.call(this,"event","Event")},_}(o.View)})}).call(this);