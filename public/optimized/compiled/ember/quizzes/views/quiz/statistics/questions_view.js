(function(){define(["ember"],function(e){return e.View.extend({classNames:["question-statistics"],toggleDetails:function(){return e.run.schedule("afterRender",this,function(){var e;return e=this.get("controller.detailsVisible"),this.$().toggleClass("with-details",!!e)})}.observes("controller.detailsVisible")})})}).call(this);