(function(){define(["jquery","underscore","i18n!validate"],function(e,r,i){return e.fn.validate=function(){var n,t;return n={},this.find("[required]").each(function(){var r,t,a,u;return r=e(this),t=r.attr("name"),a=r.val(),""===a?(null!=(u=n[t])?u:n[t]=[]).push({name:t,type:"required",message:i.t("is_required","This field is required")}):void 0}),t=r.size(n)>0,t?(this.data("errors",n),!1):(this.data("errors",null),!0)}})}).call(this);