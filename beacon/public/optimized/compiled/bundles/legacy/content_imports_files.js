(function(){require(["jquery","i18n!content_imports.files"],function(t,n){return t(function(){return t("#zip_file_import_form .cancel_button").attr("href",ENV.return_or_context_url).text(ENV.return_to?n.t("buttons.cancel","Cancel"):n.t("buttons.skip","Skip this Step"))})})}).call(this);