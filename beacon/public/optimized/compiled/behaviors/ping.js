(function(){define(["jquery"],function(n){var t;if(ENV.ping_url)return t=setInterval(function(){return document.hidden===!1?n.post(ENV.ping_url).fail(function(n){return 401===n.status?clearInterval(t):void 0}):void 0},18e4)})}).call(this);