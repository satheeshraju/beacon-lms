(function(){define(["jquery","underscore","Backbone","compiled/models/Account","compiled/views/accounts/settings/QuotasView","compiled/views/accounts/settings/ManualQuotasView"],function(e,t,o,a,n,u){var s,i,c;return ENV.ACCOUNT?(s=new a(ENV.ACCOUNT),s.toJSON=function(){return{id:this.get("id"),account:t.pick(this.attributes,"default_storage_quota_mb","default_user_storage_quota_mb","default_group_storage_quota_mb")}},c=new n({model:s}),e("#tab-quotas").append(c.el),c.render(),i=new u,e("#tab-quotas").append(i.el),i.render()):void 0})}).call(this);