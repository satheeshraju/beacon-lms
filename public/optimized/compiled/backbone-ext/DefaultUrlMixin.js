(function(){define(["compiled/str/splitAssetString"],function(t){return{_contextPath:function(){var e,r,o,n;return e=this.contextAssetString||ENV.context_asset_string,n=t(e),o=n[0],r=n[1],""+o+"/"+r},_defaultUrl:function(){var t;if(t=this.resourceName||this.model.prototype.resourceName,!t)throw new Error("Must define a `resourceName` property on collection or model prototype to use defaultUrl");return"/api/v1/"+this._contextPath()+"/"+t}}})}).call(this);