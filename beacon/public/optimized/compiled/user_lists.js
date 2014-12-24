(function(){define(["INST","i18n!user_lists","jquery","jquery.ajaxJSON","jquery.instructure_forms","jquery.instructure_misc_helpers","jquery.instructure_misc_plugins","jquery.loadingImg","compiled/jquery.rails_flash_notifications","jquery.scrollToVisible","jquery.templateData","vendor/jquery.scrollTo"],function(e,t,s){var n,r,o,i,a,u,l,d,_;return l=s("#user_lists_processed_person_template").removeAttr("id").detach(),i=s("#user_list_no_valid_users"),a=s("#user_list_with_errors"),u=s("#user_lists_processed_people"),o=s("#user_list_duplicates_found"),r=s("#enroll_users_form"),n=s("#enrollment_blank").removeAttr("id").hide(),_=s("#user_lists_path").attr("href"),d=e.UserLists={init:function(){return d.showTextarea(),r.find(".cancel_button").click(function(){return s(".add_users_link").show(),r.hide()}).end().find(".go_back_button").click(d.showTextarea).end().find(".verify_syntax_button").click(function(e){return e.preventDefault(),d.showProcessing(),s.ajaxJSON(_,"POST",r.getFormData(),d.showResults)}).end().submit(function(e){return e.preventDefault(),e.stopPropagation(),r.find(".add_users_button").text(t.t("adding_users","Adding Users...")).attr("disabled",!0),s.ajaxJSON(r.attr("action"),"POST",r.getFormData(),d.success,d.failure)}),r.find("#enrollment_type").change(function(){return s("#limit_privileges_to_course_section_holder").showIf(null!=s(this).find(":selected").data("isAdmin"))}).change(),s(".unenroll_user_link").click(function(e){var n,r,o,i;return e.preventDefault(),e.stopPropagation(),s(this).hasClass("cant_unenroll")?alert(t.t("cant_unenroll","This user was automatically enrolled using the campus enrollment system, so they can't be manually removed.  Please contact your system administrator if you have questions.")):(i=s(this).parents(".user"),r=s(this).parents(".sections"),n=s(this).parents(".section"),o=i,r.find(".section:visible").size()>1&&(o=n),o.confirmDelete({message:t.t("delete_confirm","Are you sure you want to remove this user?"),url:s(this).attr("href"),success:function(){return s(this).fadeOut(function(){return d.updateCounts()})}}))})},success:function(e){var n,o;return r.find(".user_list").val(""),d.showTextarea(),e&&e.length?(o=0,s.each(e,function(){return o+=d.addUserToList(this.enrollment)}),n=t.t("users_added",{one:"1 user added",other:"%{count} users added"},{count:e.length-o}),o>0&&(n+=" "+t.t("users_existed",{one:"(1 user already existed)",other:"(%{count} users already existed)"},{count:o})),s.flashMessage(n)):!1},failure:function(){return s.flashError(t.t("users_adding_failed","Failed to enroll users"))},showTextarea:function(){var e;return r.find(".add_users_button, .go_back_button, #user_list_parsed").hide(),r.find(".verify_syntax_button, .cancel_button, #user_list_textarea_container").show().removeAttr("disabled"),r.find(".verify_syntax_button").attr("disabled",!1).text(t.t("buttons.continue","Continue...")),e=r.find(".user_list").removeAttr("disabled").loadingImage("remove").focus(),e.is(":visible")?e.select():void 0},showProcessing:function(){return r.find(".verify_syntax_button").attr("disabled",!0).text(t.t("messages.processing","Processing...")),r.find(".user_list").attr("disabled",!0).loadingImage()},showResults:function(e){return r.find(".add_users_button, .go_back_button, #user_list_parsed").show(),r.find(".add_users_button").attr("disabled",!1).focus().text(t.t("add_n_users",{one:"OK Looks Good, Add This 1 User",other:"OK Looks Good, Add These %{count} Users"},{count:e.users.length})),r.find(".verify_syntax_button, .cancel_button, #user_list_textarea_container").hide(),r.find(".user_list").removeAttr("disabled").loadingImage("remove"),u.html("").show(),e&&e.users&&e.users.length?(e.errored_users&&e.errored_users.length&&a.appendTo(u).find(".message_content").text(t.t("user_parsing_errors",{one:"There was 1 error parsing that list of users.",other:"There were %{count} errors parsing that list of users."},{count:e.errored_users.length})+" "+t.t("invalid_users_notice","There may be some that were invalid, and you might need to go back and fix any errors.")+" "+t.t("users_to_add",{one:"If you proceed as is, 1 user will be added.",other:"If you proceed as is, %{count} users will be added."},{count:e.users.length})),e.duplicates&&e.duplicates.length&&o.appendTo(u).find(".message_content").text(t.t("duplicate_users",{one:"1 duplicate user found, duplicates have been removed.",other:"%{count} duplicate user found, duplicates have been removed."},{count:e.duplicates.length})),s.each(e.users,function(){var e;return e=l.clone(!0).fillTemplateData({data:this}).appendTo(u),this.user_id&&e.addClass("existing-user").attr("title",t.t("titles.existing_user","Existing user")),e.show()})):(i.appendTo(u),r.find(".add_users_button").hide())},updateCounts:function(){return s.each(["student","teacher","ta","teacher_and_ta","student_and_observer","observer"],function(){return s("."+this+"_count").text(s("."+this+"_enrollments .user:visible").length)})},addUserToList:function(e){var r,o,i,a,u;return u=s.underscore(e.type),i=s(".user_list."+u+"s"),i.length||(i=s("student_enrollment"===u||"observer_enrollment"===u?".user_list.student_and_observer_enrollments":".user_list.teacher_and_ta_enrollments")),i.find(".none").remove(),e.invitation_sent_at=t.t("just_now","Just Now"),r=null,i.find(".user").each(function(){var t;return t=s(this).getTemplateData({textValues:["name"]}).name,t&&e.name&&t.toLowerCase()>e.name.toLowerCase()?(r=s(this),!1):void 0}),e.enrollment_id=e.id,a=!0,s("#enrollment_"+e.id).length||(a=!1,o=n.clone(!0).fillTemplateData({textValues:["name","membership_type","email","enrollment_id"],id:"enrollment_"+e.id,hrefValues:["id","user_id","pseudonym_id","communication_channel_id"],data:e}).addClass(u).removeClass("nil_class user_").addClass("user_"+e.user_id).toggleClass("pending","active"!==e.workflow_state)[r?"insertBefore":"appendTo"](r||i).show().animate({backgroundColor:"#FFEE88"},1e3).animate({display:"block"},2e3).animate({backgroundColor:"#FFFFFF"},2e3,function(){return s(this).css("backgroundColor","")}),o.find(".enrollment_link").removeClass("enrollment_blank").addClass("enrollment_"+e.id),o.parents(".user_list").scrollToVisible(o)),d.updateCounts(),a?1:0}},s(d.init),d})}).call(this);