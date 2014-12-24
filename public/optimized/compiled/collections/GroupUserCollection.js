(function(){var r=function(r,t){return function(){return r.apply(t,arguments)}},t={}.hasOwnProperty,e=function(r,e){function o(){this.constructor=r}for(var n in e)t.call(e,n)&&(r[n]=e[n]);return o.prototype=e.prototype,r.prototype=new o,r.__super__=e.prototype,r};define(["i18n!GroupUserCollection","jquery","compiled/collections/PaginatedCollection","compiled/models/GroupUser","str/htmlEscape"],function(t,o,n,i,u){var s,p;return s=function(n){function s(){return this.onChangeGroup=r(this.onChangeGroup,this),p=s.__super__.constructor.apply(this,arguments)}return e(s,n),s.prototype.comparator=function(r){return r.get("sortable_name").toLowerCase()},s.optionProperty("group"),s.optionProperty("category"),s.prototype.url=function(){return this.url="/api/v1/groups/"+this.group.id+"/users?per_page=50"},s.prototype.initialize=function(r){return s.__super__.initialize.apply(this,arguments),this.loaded=this.loadedAll=null!=r,this.on("change:group",this.onChangeGroup),this.model=i.extend({defaults:{group:this.group,category:this.category}})},s.prototype.load=function(r){return null==r&&(r="all"),this.loadAll="all"===r,this.loaded=!0,"none"!==r&&this.fetch(),this.load=function(){}},s.prototype.onChangeGroup=function(r,t){var e;return this.removeUser(r),null!=(e=this.groupUsersFor(t))?e.addUser(r):void 0},s.prototype.membershipsLocked=function(){return!1},s.prototype.addUser=function(r){var t,e=this;return this.membershipsLocked()?void(null!=(t=this.get(r))&&t.moved()):this.loaded?(this.get(r)?this.flashAlreadyInGroupError(r):(this.add(r),this.increment(1)),r.moved()):(r.once("ajaxJoinGroupSuccess",function(t){return t.just_created?void 0:(e.increment(-1),e.flashAlreadyInGroupError(r))}),this.increment(1))},s.prototype.flashAlreadyInGroupError=function(r){return o.flashError(t.t("flash.userAlreadyInGroup","WARNING: %{user} is already a member of %{group}",{user:u(r.get("name")),group:u(this.group.get("name"))}))},s.prototype.removeUser=function(r){var t,e;if(!this.membershipsLocked())return this.increment(-1),(null!=(t=this.group)&&null!=(e=t.get("leader"))?e.id:void 0)===r.id&&this.group.set("leader",null),this.loaded?this.remove(r):void 0},s.prototype.increment=function(r){return this.group.increment("members_count",r)},s.prototype.groupUsersFor=function(r){var t;return null!=(t=this.category)?t.groupUsersFor(r):void 0},s}(n)})}).call(this);