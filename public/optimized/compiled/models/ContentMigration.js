(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,n=function(t,n){function r(){this.constructor=t}for(var s in n)e.call(n,s)&&(t[s]=n[s]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t};define(["underscore","jquery","Backbone","jquery.instructure_forms"],function(e,r,s){var a,i;return a=function(a){function o(){return this.translateDateAdjustmentParams=t(this.translateDateAdjustmentParams,this),this.addDaySubsitutions=t(this.addDaySubsitutions,this),this.save=t(this.save,this),this.urlRoot=t(this.urlRoot,this),i=o.__super__.constructor.apply(this,arguments)}return n(o,a),o.prototype.urlRoot=function(){return"/api/v1/courses/"+this.get("course_id")+"/content_migrations"},o.dynamicDefaults={},o.prototype.initialize=function(t){return o.__super__.initialize.apply(this,arguments),this.dynamicDefaults=t},o.prototype.resetModel=function(){return this.clear(),this.resetDynamicDefaultCollections(),this.set(this.dynamicDefaults)},o.prototype.resetDynamicDefaultCollections=function(){return e.each(this.dynamicDefaults,function(t){var n,r;return t instanceof s.Collection?(n=t,r=n.map(function(t){return t}),e.each(r,function(t){return n.remove(t)})):void 0})},o.prototype.save=function(){var t,n,a=this;return this.get("pre_attachment")?(t=r.Deferred(),n=this.get("pre_attachment").fileElement,delete this.get("pre_attachment").fileElement,o.__super__.save.call(this,e.omit(arguments[0],"file"),{error:function(e){return t.rejectWith(a,e.responseText)},success:function(){var e;return e=new s.Model(a.get("pre_attachment").upload_params),e.url=function(){return a.get("pre_attachment").upload_url},e.set("attachment",n),e.save(null,{multipart:n,success:function(e,n){return n.message?t.rejectWith(a,n.message):a.fetch({success:function(){return t.resolve()}})},error:function(e){return t.rejectWith(a,e)}})}}),t):o.__super__.save.apply(this,arguments)},o.prototype.toJSON=function(){var t;return t=o.__super__.toJSON.apply(this,arguments),this.addDaySubsitutions(t),this.translateDateAdjustmentParams(t),t},o.prototype.addDaySubsitutions=function(t){var e;return e=this.daySubCollection,t.date_shift_options||(t.date_shift_options={}),e?t.date_shift_options.day_substitutions=e.toJSON():void 0},o.prototype.translateDateAdjustmentParams=function(t){return t.adjust_dates?("1"===t.adjust_dates.enabled&&(t.date_shift_options[t.adjust_dates.operation]="1"),delete t.adjust_dates):void 0},o}(s.Model)})}).call(this);