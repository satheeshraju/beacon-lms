(function(){require(["jquery","jquery.instructure_misc_plugins"],function(e){return e(document).ready(function(){return e(".sections_list_hover").mouseover(function(){return e("#section_list .section:first").indicate()}),e(".pages_list_hover").mouseover(function(){return e("#section_pages").indicate()}),e(".organize_sections_hover").mouseover(function(){return e(".manage_sections_link").indicate()}),e(".organize_pages_hover").mouseover(function(){return e(".manage_pages_link").indicate()}),e(".eportfolio_settings_hover").mouseover(function(){return e(".portfolio_settings_link").indicate()}),e(".edit_content_hover").mouseover(function(){return e(".edit_content_link").indicate()}),e(".page_settings_hover").mouseover(function(){return e("#edit_page_form .form_content").indicate()}),e(".page_buttons_hover").mouseover(function(){return e("#edit_page_sidebar .form_content:last").indicate()}),e(".page_add_subsection_hover").mouseover(function(){return e("#edit_page_sidebar ul").indicate()}),e("#wizard_box").bind("wizard_opened",function(){return e(this).find(".option.information_step").click()}),e(document).bind("submission_dialog_opened",function(){return e(".wizard_options .option.adding_submissions").hasClass("selected")?e(".wizard_options .option.adding_submissions_dialog").click():void 0}),e(document).bind("editing_page",function(){return e(".wizard_options .option.edit_step").hasClass("selected")?e(".wizard_options .option.editing_mode").click():void 0})})})}).call(this);