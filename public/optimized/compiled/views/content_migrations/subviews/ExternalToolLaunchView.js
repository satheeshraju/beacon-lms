(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,n=function(t,n){function r(){this.constructor=t}for(var o in n)e.call(n,o)&&(t[o]=n[o]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t};define(["Backbone","jst/content_migrations/subviews/ExternalToolLaunch","jquery"],function(e,r){var o,i;return o=function(e){function o(){return this.setUrl=t(this.setUrl,this),i=o.__super__.constructor.apply(this,arguments)}return n(o,e),o.prototype.template=r,o.prototype.events={"click #externalToolLaunch":"launchExternalTool"},o.prototype.els={".file_name":"$fileName"},o.optionProperty("contentReturnView"),o.prototype.initialize=function(t){return o.__super__.initialize.call(this,t),this.contentReturnView.on("ready",this.setUrl)},o.prototype.launchExternalTool=function(t){return t.preventDefault(),this.contentReturnView.render()},o.prototype.setUrl=function(t){return this.$fileName.html(t.text),this.model.set("settings",{file_url:t.url})},o}(e.View)})}).call(this);