(function(){define(["ember","../multiple_choice/correct_pie_view"],function(e,t){return t.extend({templateName:"quiz/statistics/questions/multiple_choice/correct_pie",updateChart:function(){var t;return t=this.get("controller.correctResponseRatio"),void 0!==t?e.run.schedule("render",this,function(){return this.foreground.datum({endAngle:t*this.CIRCLE}).attr("d",this.arc),this.text.text(this.FMT_PERCENT(t))}):void 0}.observes("controller.correctResponseRatio")})})}).call(this);