(function(){var t={}.hasOwnProperty,e=function(e,o){function r(){this.constructor=e}for(var n in o)t.call(o,n)&&(e[n]=o[n]);return r.prototype=o.prototype,e.prototype=new r,e.__super__=o.prototype,e};define(["jquery","jst/modules/ModuleCollectionView","compiled/views/modules/ModuleView","compiled/views/PaginatedCollectionView","i18n!context_modules"],function(t,o,r,n){var i,p;return i=function(t){function n(){return p=n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.template=o,n.prototype.itemView=r,n.optionProperty("editable"),n.prototype.toJSON=function(){var t;return t=n.__super__.toJSON.apply(this,arguments),t.editable=this.editable,t},n}(n)})}).call(this);