(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,r=function(e,r){function n(){this.constructor=e}for(var i in r)t.call(r,i)&&(e[i]=r[i]);return n.prototype=r.prototype,e.prototype=new n,e.__super__=r.prototype,e};define(["jquery","underscore","compiled/views/PaginatedView","compiled/views/RecentStudents/RecentStudentView"],function(t,n,i,o){var s,u;return s=function(t){function n(){return this.renderUser=e(this.renderUser,this),this.render=e(this.render,this),u=n.__super__.constructor.apply(this,arguments)}return r(n,t),n.prototype.initialize=function(){return this.collection.on("add",this.renderUser),this.collection.on("reset",this.render),this.paginationScrollContainer=this.$el,n.__super__.initialize.apply(this,arguments)},n.prototype.render=function(){var e,t=this;return e=n.__super__.render.apply(this,arguments),this.collection.each(function(e){return t.renderUser(e)}),e},n.prototype.renderUser=function(e){return e.set("course_id",this.collection.course_id,{silent:!0}),this.$el.append(new o({model:e}).render().el)},n}(i)})}).call(this);