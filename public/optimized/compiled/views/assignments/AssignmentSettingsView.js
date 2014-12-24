(function(){var t={}.hasOwnProperty,e=function(e,i){function s(){this.constructor=e}for(var o in i)t.call(i,o)&&(e[o]=i[o]);return s.prototype=i.prototype,e.prototype=new s,e.__super__=i.prototype,e};define(["compiled/util/round","underscore","compiled/views/DialogFormView","jst/EmptyDialogFormWrapper","jst/assignments/AssignmentSettings"],function(t,i,s,o,r){var n,p;return n=function(s){function n(){return p=n.__super__.constructor.apply(this,arguments)}return e(n,s),n.prototype.template=r,n.prototype.wrapperTemplate=o,n.prototype.defaults={width:450,height:500,collapsedHeight:175},n.prototype.events=i.extend({},n.prototype.events,{"click .dialog_closer":"close","change #apply_assignment_group_weights":"toggleTableByClick","keyup .group_weight_value":"updateTotalWeight"}),n.optionProperty("assignmentGroups"),n.optionProperty("weightsView"),n.prototype.initialize=function(){return n.__super__.initialize.apply(this,arguments),this.weights=[]},n.prototype.openAgain=function(){return n.__super__.openAgain.apply(this,arguments),this.toggleTableByModel(),this.addAssignmentGroups()},n.prototype.saveFormData=function(t){var e,i,s,o,r;for(null==t&&(t=null),r=this.weights,s=0,o=r.length;o>s;s++)i=r[s],e=i.findWeight(),i.model.set("group_weight",e),i.model.save();return n.__super__.saveFormData.call(this,t)},n.prototype.onSaveSuccess=function(){return n.__super__.onSaveSuccess.apply(this,arguments),this.assignmentGroups.trigger("change:groupWeights")},n.prototype.toggleTableByModel=function(){var t;return t=this.model.get("apply_assignment_group_weights"),this.toggleWeightsTable(t)},n.prototype.toggleTableByClick=function(t){var e;return e=$(t.currentTarget).is(":checked"),this.toggleWeightsTable(e)},n.prototype.toggleWeightsTable=function(t){return t?(this.$("#ag_weights_wrapper").show(),this.$("#apply_assignment_group_weights").prop("checked",!0),this.setDimensions(null,this.defaults.height)):(this.$("#ag_weights_wrapper").hide(),this.$("#apply_assignment_group_weights").prop("checked",!1),this.setDimensions(null,this.defaults.collapsedHeight))},n.prototype.addAssignmentGroups=function(){var e,i,s,o,r,n;for(this.clearWeights(),i=0,n=this.assignmentGroups.models,o=0,r=n.length;r>o;o++)e=n[o],s=new this.weightsView({model:e}),s.render(),this.$el.find("#assignment_groups_weights tbody").append(s.el),this.weights.push(s),i+=s.findWeight()||0;return i=t(i,2),this.$el.find("#percent_total").html(i+"%")},n.prototype.clearWeights=function(){return this.weights=[],this.$el.find("#assignment_groups_weights tbody").empty()},n.prototype.updateTotalWeight=function(){var e,i,s,o,r;for(e=0,r=this.weights,s=0,o=r.length;o>s;s++)i=r[s],e+=i.findWeight()||0;return e=t(e,2),this.$el.find("#percent_total").html(e+"%")},n.prototype.toJSON=function(){var t;return t=n.__super__.toJSON.apply(this,arguments),t.course},n}(s)})}).call(this);