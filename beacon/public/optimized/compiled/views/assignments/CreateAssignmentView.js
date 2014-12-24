(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,n=function(t,n){function i(){this.constructor=t}for(var s in n)e.call(n,s)&&(t[s]=n[s]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define(["underscore","compiled/models/Assignment","compiled/views/DialogFormView","jst/assignments/CreateAssignment","jst/EmptyDialogFormWrapper","i18n!assignments","jquery","jquery.instructure_date_and_time"],function(e,i,s,o,r,a,p){var u,l;return u=function(s){function u(){return this._validatePointsPossible=t(this._validatePointsPossible,this),this.getFormData=t(this.getFormData,this),this.onSaveSuccess=t(this.onSaveSuccess,this),l=u.__super__.constructor.apply(this,arguments)}return n(u,s),u.prototype.defaults={width:500,height:350},u.prototype.events=e.extend({},u.prototype.events,{"click .dialog_closer":"close","click .more_options":"moreOptions"}),u.prototype.template=o,u.prototype.wrapperTemplate=r,u.optionProperty("assignmentGroup"),u.prototype.initialize=function(){var t;return u.__super__.initialize.apply(this,arguments),null==(t=this.model)&&(this.model=this.generateNewAssignment()),this.on("close",function(){return this.$el[0].reset()})},u.prototype.onSaveSuccess=function(){return u.__super__.onSaveSuccess.apply(this,arguments),this.assignmentGroup?(this.assignmentGroup.get("assignments").add(this.model),this.model=this.generateNewAssignment()):void 0},u.prototype.getFormData=function(){var t,e;return t=u.__super__.getFormData.apply(this,arguments),e=p.unfudgeDateForProfileTimezone(t.due_at),null!=e&&(t.due_at=e.toISOString()),t},u.prototype.moreOptions=function(){var t,n,i,s;return s=["submission_types","name","due_at","points_possible","assignment_group_id"],t=this.getFormData(),this.assignmentGroup&&(t.assignment_group_id=this.assignmentGroup.get("id")),n={},e.each(t,function(t,i){return t&&e.contains(s,i)&&""!==t?n[i]=t:void 0}),i=this.assignmentGroup?this.newAssignmentUrl():this.model.htmlEditUrl(),this.redirectTo(""+i+"?"+p.param(n))},u.prototype.redirectTo=function(t){return window.location.href=t},u.prototype.generateNewAssignment=function(){var t;return t=new i,this.assignmentGroup&&t.assignmentGroupId(this.assignmentGroup.id),t},u.prototype.toJSON=function(){var t,n;return t=this.model.toView(),n=this.assignmentGroup?"ag_"+this.assignmentGroup.get("id"):"assign_"+this.model.get("id"),e.extend(t,{canChooseType:null!=this.assignmentGroup,uniqLabel:n})},u.prototype.openAgain=function(){var t;return u.__super__.openAgain.apply(this,arguments),t=this.$el.find(".datetime_field"),this.model.multipleDueDates()?t.tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content:function(){return p(p(this).data("tooltipSelector")).html()}}):t.hasClass("hasDatepicker")?void 0:t.datetime_field()},u.prototype.newAssignmentUrl=function(){return ENV.URLS.new_assignment_url},u.prototype.validateBeforeSave=function(t,e){return e=this._validateTitle(t,e),e=this._validatePointsPossible(t,e)},u.prototype._validateTitle=function(t,n){var i;return i=e.contains(this.model.frozenAttributes(),"title"),i||t.name&&0!==p.trim(t.name.toString()).length||(n.name=[{message:a.t("name_is_required","Name is required!")}]),p.trim(t.name.toString()).length>255&&(n.name=[{message:a.t("name_too_long","Name is too long")}]),n},u.prototype._validatePointsPossible=function(t,n){var i;return i=e.contains(this.model.frozenAttributes(),"points_possible"),!i&&t.points_possible&&isNaN(parseFloat(t.points_possible))&&(n.points_possible=[{message:a.t("points_possible_number","Points possible must be a number")}]),n},u}(s)})}).call(this);