(function(){define(["i18n!lib.text_helper","str/htmlEscape"],function(t,e){var n,r,i;return n="LINK-PLACEHOLDER",r=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi,i={quoteClump:function(e){return"<div class='quoted_text_holder'>        <a href='#' class='show_quoted_text_link'>"+t.t("quoted_text_toggle","show quoted text")+"</a>        <div class='quoted_text' style='display: none;'>          "+e.join("\n")+"        </div>      </div>"},formatMessage:function(t){var l,u,a,s,o,h,p;a=[],s=[],t=t.replace(r,function(t){var r;return s.push(t===n?n:(r=t,"www."===r.slice(0,4)?r="http://"+r:void 0,r=encodeURI(r).replace(/'/g,"%27"),a.push(r),"<a href='"+e(r)+"'>"+e(t)+"</a>")),n}),t=e(t),t=t.replace(new RegExp(n,"g"),function(){return s.shift()}),t=t.replace(/\n/g,"<br />\n"),o=[],h=[],p=t.split("\n");for(l in p)u=p[l],u.match(/^(&gt;|>)/)?h.push(u):(h.length&&o.push(i.quoteClump(h)),h=[],o.push(u));return h.length&&o.push(i.quoteClump(h)),t=o.join("\n")},delimit:function(t){var e,n,r,i,l;if(isNaN(t))return String(t);if(l=0>t?"-":"",e=Math.abs(t),1/0===e)return String(t);for(n=Math.floor(e),i=e===n?"":String(e).replace(/^\d+\./,".");n>=1e3;)r=String(n).replace(/\d+(\d\d\d)$/,",$1"),n=Math.floor(n/1e3),i=r+i;return l+String(n)+i},truncateText:function(e,n){var r,i,l,u,a,s;if(null==n&&(n={}),i=null!=(s=n.max)?s:30,r=t.t("ellipsis","..."),a=t.t("word_separator"," "),e=(null!=e?e:"").replace(/\s+/g,a).trim(),!e||e.length<=i)return e;for(u=0;;){if(l=e.indexOf(a,u+1),0>l||l>i-r.length)break;u=l}return u||(u=i-r.length),e.substring(0,u)+r}}})}).call(this);