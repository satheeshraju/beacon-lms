(function(){define(["ember","../start_app","i18n!quizzes","../environment_setup"],function(n,t){var e,r,u,i;return r=n.run,e=null,u=null,i=null,module("Quiz",{setup:function(){var n;return e=t(),n=e.__container__,i=n.lookup("store:main"),r(function(){return u=i.createRecord("quiz_statistics",{id:"1"})})},teardown:function(){return r(e,"destroy")}})})}).call(this);