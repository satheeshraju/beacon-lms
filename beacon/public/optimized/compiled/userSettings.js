(function(){var e=[].slice;define(["underscore","jquery","jquery.instructure_misc_helpers"],function(r,t){var n,u,i,c,s,a;for(i={},n=function(){var t,n;return t=arguments[0],n=2<=arguments.length?e.call(arguments,1):[],function(e,u){var i,c,s;return s=JSON.stringify(u),i=r(n).map(function(e){return ENV[e]}).join("_"),c=localStorage[""+t+"Item"]("_"+i+"_"+e,s),c?JSON.parse(c):void 0}},a=["get","set","remove"],c=0,s=a.length;s>c;c++)u=a[c],i[u]=n(u,"current_user_id"),i["context"+t.capitalize(u)]=n(u,"current_user_id","context_asset_string");return i})}).call(this);