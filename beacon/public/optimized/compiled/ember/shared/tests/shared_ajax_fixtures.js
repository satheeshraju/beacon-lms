(function(){define(["ic-ajax","ember"],function(e,t){var s,n,i;return s=function(e){return t.copy(e,!0)},n={attachment:{file_state:"0",workflow_state:"to_be_zipped",readable_size:"73 KB"}},i=[1,2,3],{create:function(){return window.ENV={submission_zip_url:"/courses/1/assignments/1/submissions?zip=1",numbers_url:"/courses/1/numbers"},e.defineFixture(window.ENV.submission_zip_url,{response:s(n),jqXHR:{getResponseHeader:function(){return{}}},textStatus:"success"}),e.defineFixture(window.ENV.numbers_url,{response:s(i),jqXHR:{getResponseHeader:function(){return{}}},textStatus:"success"})},makeAvailable:function(){return n.attachment.file_state=100,n.attachment.workflow_state="available"}}})}).call(this);