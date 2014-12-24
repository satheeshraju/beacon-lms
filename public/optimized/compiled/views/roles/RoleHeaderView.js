(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,o=function(e,o){function r(){this.constructor=e}for(var n in o)t.call(o,n)&&(e[n]=o[n]);return r.prototype=o.prototype,e.prototype=new r,e.__super__=o.prototype,e};define(["i18n!editor","jquery","underscore","Backbone","jst/roles/roleHeader"],function(t,r,n,i,a){var l,s;return l=function(r){function i(){return this.addLoadingHeader=e(this.addLoadingHeader,this),s=i.__super__.constructor.apply(this,arguments)}return o(i,r),i.prototype.template=a,i.prototype.tagName="th",i.prototype.className="roleHeader",i.prototype.staticRoles=["AccountAdmin","AccountMembership","StudentEnrollment","TeacherEnrollment","TaEnrollment","ObserverEnrollment","DesignerEnrollment"],i.prototype.events={"click a":"removeRole"},i.prototype.initialize=function(){return i.__super__.initialize.apply(this,arguments),this.model.on("destroying",this.addLoadingHeader)},i.prototype.addLoadingHeader=function(){return this.$el.find("a").replaceWith('<img class="loading-icon" src="/images/ajax-reload-animated.gif">')},i.prototype.deletable=function(){return!n.contains(this.staticRoles,this.model.get("role"))},i.prototype.toJSON=function(){var e;return e=i.__super__.toJSON.apply(this,arguments),e.deletable=this.deletable(),this.showBaseRoleType()&&(e.baseRoleTip=t.t("based_on_type","Based on %{base_type}",{base_type:this.model.get("base_role_type_label")})),e},i.prototype.removeRole=function(e){var o=this;return e.preventDefault(),confirm(t.t("role.remove_role_confirmation","If there are any users with this role, they will keep the current permissions but you will not be able to create new users with this role. Click ok to continue deleting this role."))?this.model.destroy({error:function(e){return alert(""+e.role+" could not be remove, contact your site admin if this continues."),o.removeLoadingIcon()},wait:!0}):void 0},i.prototype.showBaseRoleType=function(){return!n.contains(this.staticRoles,this.model.get("role"))&&null!=this.model.get("base_role_type_label")},i.prototype.afterRender=function(){return this.$el.attr("role","columnheader")},i.prototype.removeLoadingIcon=function(){return this.$el.find(".loading-icon").remove()},i}(i.View)})}).call(this);