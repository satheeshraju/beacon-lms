(function(){define(["jquery","INST"],function(n,e){var i,o;return i=null,o=function(e){var o;return i&&i.remove(),o="development"===e?"/favicon-green.ico":"test"===e?"/favicon-yellow.ico":"/favicon.ico",i=n("<link />").attr({rel:"icon",type:"image/x-icon",href:o}),n(document.head).append(i)},o(null!=e?e.environment:void 0),o})}).call(this);