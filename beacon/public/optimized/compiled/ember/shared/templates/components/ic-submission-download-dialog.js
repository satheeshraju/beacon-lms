define(["ember","compiled/ember/shared/helpers/common"],function(s){s.TEMPLATES["components/ic-submission-download-dialog"]=s.Handlebars.template(function(e,a,t,o,n){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,s.Handlebars.helpers),n=n||{};var i,l,h,d="",c=this.escapeExpression,u=t.helperMissing;return n.buffer.push('<button class="btn" id="submissions_download_button" '),n.buffer.push(c(t.action.call(a,"openDialog",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["STRING"],data:n}))),n.buffer.push(">\n  "),l=t.t||a&&a.t,h={hash:{scope:"shared.templates.components.ic_submission_download_dialog.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:a},contexts:[a,a],types:["STRING","STRING"],data:n},i=l?l.call(a,"download_submissions","Download all submissions",h):u.call(a,"t","download_submissions","Download all submissions",h),(i||0===i)&&n.buffer.push(i),n.buffer.push('\n</button>\n<div id="submissions_download_dialog" '),n.buffer.push(c(t["bind-attr"].call(a,{hash:{"class":"isOpened::hidden"},hashTypes:{"class":"STRING"},hashContexts:{"class":a},contexts:[],types:[],data:n}))),n.buffer.push(' >\n  <div class="ui-dialog ui-widget ui-widget-content ui-corner-all" role="dialog" tabindex="-1" style="position: fixed; z-index: 1002; height: 260px;">\n    <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">\n      <span class="ui-dialog-title" role="heading">Download Assignment Submissions</span>\n      <a href="#" class="ui-dialog-titlebar-close ui-corner-all" role="button" tabindex="0" '),n.buffer.push(c(t.action.call(a,"closeDialog",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["STRING"],data:n}))),n.buffer.push('>\n        <span class="ui-icon ui-icon-closethick">close</span>\n      </a>\n    </div>\n    <form class="ui-dialog-content ui-widget-content">\n      <p>\n        <a class="icon-download"></a>\n        <strong>'),l=t.t||a&&a.t,h={hash:{scope:"shared.templates.components.ic_submission_download_dialog.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:a},contexts:[a,a],types:["STRING","STRING"],data:n},i=l?l.call(a,"download_message_intro","Your student submissions are being gathered.",h):u.call(a,"t","download_message_intro","Your student submissions are being gathered.",h),(i||0===i)&&n.buffer.push(i),n.buffer.push("</strong>\n      </p>\n      <p>"),l=t.t||a&&a.t,h={hash:{scope:"shared.templates.components.ic_submission_download_dialog.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:a},contexts:[a,a],types:["STRING","STRING"],data:n},i=l?l.call(a,"download_message","The submissions will be compressed into a zip file for download. This may take some time, depending on the size and number of submission files.",h):u.call(a,"t","download_message","The submissions will be compressed into a zip file for download. This may take some time, depending on the size and number of submission files.",h),(i||0===i)&&n.buffer.push(i),n.buffer.push('</p>\n      <div id="progressbar" '),n.buffer.push(c(t["bind-attr"].call(a,{hash:{"class":"showFileLink:hidden"},hashTypes:{"class":"STRING"},hashContexts:{"class":a},contexts:[],types:[],data:n}))),n.buffer.push(' style="width: 100%;"></div>\n      <div '),n.buffer.push(c(t["bind-attr"].call(a,{hash:{"class":":text-center :status_box showFileLink:pad-box"},hashTypes:{"class":"STRING"},hashContexts:{"class":a},contexts:[],types:[],data:n}))),n.buffer.push(' >\n        <div class="status">\n          <div>'),i=t._triageMustache.call(a,"statusText",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:n}),(i||0===i)&&n.buffer.push(i),n.buffer.push("</div>\n          <a "),n.buffer.push(c(t["bind-attr"].call(a,{hash:{href:"url","class":"showFileLink::hidden"},hashTypes:{href:"STRING","class":"STRING"},hashContexts:{href:a,"class":a},contexts:[],types:[],data:n}))),n.buffer.push(" ><strong>"),l=t.t||a&&a.t,h={hash:{scope:"shared.templates.components.ic_submission_download_dialog.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:a},contexts:[a,a],types:["STRING","STRING"],data:n},i=l?l.call(a,"click_to_download","Click here to download",h):u.call(a,"t","click_to_download","Click here to download",h),(i||0===i)&&n.buffer.push(i),n.buffer.push(" "),i=t._triageMustache.call(a,"sizeOfFile",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:n}),(i||0===i)&&n.buffer.push(i),n.buffer.push("</strong></a>\n        </div>\n        <div "),n.buffer.push(c(t["bind-attr"].call(a,{hash:{"class":":loadingIndicator hideIndicator:hidden"},hashTypes:{"class":"STRING"},hashContexts:{"class":a},contexts:[],types:[],data:n}))),n.buffer.push(' ></div>\n      </div>\n    </form>\n  </div>\n  <div class="ui-widget-overlay" style="position: fixed; z-index: 1001;"></div>\n</div>'),d})});