(function(){require(["i18n!rubrics.index","jquery","find_outcome","jquery.instructure_misc_plugins"],function(e,r){return r(document).ready(function(){return r("#rubrics ul .delete_rubric_link").click(function(t){var u;return t.preventDefault(),u=r(this).parents("li"),u.confirmDelete({url:r(this).attr("href"),message:e.t("are_you_sure_prompt","Are you sure you want to delete this rubric? Any course currently associated with this rubric will still have access to it, but, no new courses will be able to use it."),success:function(){return r(this).slideUp(function(){return r(this).remove()})}})})})})}).call(this);