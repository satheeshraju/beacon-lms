(function(){define(function(){var e,n,t,r,i,u;return n=window.document,i={},t=function(e,n){return i[e]=n,r()},t.clear=function(){return i={},r()},r=function(){var t,r,u,a,c;u=[];for(c in i)r=i[c],u.push("/* From: "+c+" */"),u.push(r);return t=u.join("\n"),a=e(),"cssText"in a?a.cssText=t:a.appendChild(n.createTextNode(t))},u=null,e=function(){var e,t;if(u){for(;e=u.firstChild;)u.removeChild(e);return u}return n.createStyleSheet?u=n.createStyleSheet():(t=n.head||n.getElementsByTagName("head")[0],u=n.createElement("style"),t.appendChild(u))},t})}).call(this);