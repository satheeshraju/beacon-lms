(function(){var t=function(t,i){return function(){return t.apply(i,arguments)}},i={}.hasOwnProperty,n=function(t,n){function e(){this.constructor=t}for(var a in n)i.call(n,a)&&(t[a]=n[a]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t};define(["jquery","underscore","Backbone","i18n!calendar.edit","jst/calendar/missingDueDateDialog","jqueryui/dialog","compiled/jquery/fixDialogButtons"],function(i,e,a,s,o){var l,r,c;return r=a.View,l=function(a){function l(){return this.cancel=t(this.cancel,this),this.onAction=t(this.onAction,this),c=l.__super__.constructor.apply(this,arguments)}return n(l,a),l.prototype.dialogTitle='<span>\n  <i class="icon-warning"></i>\n  '+s.t("titles.warning","Warning")+"\n</span>",l.prototype.initialize=function(t){return l.__super__.initialize.apply(this,arguments),this.validationFn=t.validationFn,this.labelFn=t.labelFn||this.defaultLabelFn,this.success=t.success,this.da_enabled=t.da_enabled},l.prototype.defaultLabelFn=function(t){return i("label[for="+i(t).attr("id")+"]").text()},l.prototype.render=function(){return this.invalidFields=this.validationFn(),this.invalidFields===!0?!1:(this.invalidSectionNames=e.map(this.invalidFields,this.labelFn),this.showDialog(),this)},l.prototype.getInvalidFields=function(){var t,n;return t=e.select(this.$dateFields,function(t){return""===i(t).val()}),n=e.map(t,this.labelFn),n.length>0?[t,n]:!1},l.prototype.showDialog=function(){var t,n;return t=s.t("missingDueDate",{one:"%{sections} does not have a due date assigned.",other:"%{sections} do not have a due date assigned."},{sections:"",count:this.invalidSectionNames.length}),n=o({description:t,da_enabled:this.da_enabled,sections:this.invalidSectionNames}),this.$dialog=i(n).dialog({dialogClass:"dialog-warning",draggable:!1,modal:!0,resizable:!1,title:i(this.dialogTitle)}).fixDialogButtons().on("click",".btn",this.onAction),this.$dialog.parents(".ui-dialog:first").focus()},l.prototype.onAction=function(t){return i(t.currentTarget).hasClass("btn-primary")?this.success(this.$dialog):this.cancel(this.invalidFields,this.sectionNames)},l.prototype.cancel=function(){return this.$dialog.dialog("close").remove(),this.invalidFields[0].focus()},l}(r)})}).call(this);