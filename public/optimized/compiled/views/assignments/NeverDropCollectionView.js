(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,r=function(e,r){function n(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return n.prototype=r.prototype,e.prototype=new n,e.__super__=r.prototype,e};define(["underscore","compiled/views/CollectionView","compiled/views/assignments/NeverDropView","jst/assignments/NeverDropCollection"],function(t,n,o,i){var s,l;return s=function(n){function s(){return this.triggerRender=e(this.triggerRender,this),l=s.__super__.constructor.apply(this,arguments)}return r(s,n),s.prototype.itemView=o,s.prototype.template=i,s.prototype.events={"click .add_never_drop":"addNeverDrop"},s.prototype.initialize=function(){return this.on("should-render",t.debounce(this.render,100)),s.__super__.initialize.apply(this,arguments)},s.prototype.attachCollection=function(){return this.collection.availableValues.on("add",this.triggerRender),this.collection.takenValues.on("add",this.triggerRender),this.collection.on("add",this.triggerRender),this.collection.on("remove",this.triggerRender),this.collection.on("reset",this.triggerRender)},s.prototype.toJSON=function(){var e;return e={hasAssignments:this.collection.availableValues.length>0,hasNeverDrops:this.collection.takenValues.length>0}},s.prototype.triggerRender=function(){return this.trigger("should-render")},s.prototype.addNeverDrop=function(e){var t;return e.preventDefault(),t={label_id:this.collection.ag_id,focus:!0},this.collection.add(t)},s}(n)})}).call(this);