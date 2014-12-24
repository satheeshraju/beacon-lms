define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES["quiz/message_students"]=e.Handlebars.template(function(s,t,a,h,n){function i(e,s){var t,h,n,i="";return s.buffer.push('\n<div class="message-students-who-dialog">\n  <div class="field">\n    <label for="select-recipient-group">\n      '),h=a.t||e&&e.t,n={hash:{scope:"quizzes.templates.quiz.message_students.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:e},contexts:[e,e],types:["STRING","STRING"],data:s},t=h?h.call(e,"recipients","Recipients",n):b.call(e,"t","recipients","Recipients",n),(t||0===t)&&s.buffer.push(t),s.buffer.push("\n    </label>\n    "),s.buffer.push(m((h=a["fast-select"]||e&&e["fast-select"],n={hash:{items:"recipientGroups",value:"selectedRecipientGroup","class":"input-xlarge",valuePath:"id",labelPath:"name",id:"select-recipient-group"},hashTypes:{items:"ID",value:"ID","class":"STRING",valuePath:"STRING",labelPath:"STRING",id:"STRING"},hashContexts:{items:e,value:e,"class":e,valuePath:e,labelPath:e,id:e},contexts:[],types:[],data:s},h?h.call(e,n):b.call(e,"fast-select",n)))),s.buffer.push('\n  </div>\n\n  <div class="recipients">\n    '),t=a["if"].call(e,"recipients.isFulfilled",{hash:{},hashTypes:{},hashContexts:{},inverse:d.program(5,p,s),fn:d.program(2,l,s),contexts:[e],types:["ID"],data:s}),(t||0===t)&&s.buffer.push(t),s.buffer.push('\n  </div>\n\n  <label for="message-body">\n    '),h=a.t||e&&e.t,n={hash:{scope:"quizzes.templates.quiz.message_students.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:e},contexts:[e,e],types:["STRING","STRING"],data:s},t=h?h.call(e,"message","Message",n):b.call(e,"t","message","Message",n),(t||0===t)&&s.buffer.push(t),s.buffer.push("\n  </label>\n  "),s.buffer.push(m((h=a.textarea||e&&e.textarea,n={hash:{value:"messageBody",id:"message-body"},hashTypes:{value:"ID",id:"STRING"},hashContexts:{value:e,id:e},contexts:[],types:[],data:s},h?h.call(e,n):b.call(e,"textarea",n)))),s.buffer.push("\n</div>\n"),i}function l(e,s){var t,h="";return s.buffer.push("\n      "),t=a.each.call(e,"recipients",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(3,u,s),contexts:[e],types:["ID"],data:s}),(t||0===t)&&s.buffer.push(t),s.buffer.push('\n      <span class="more-label">\n        '),t=a._triageMustache.call(e,"moreRecipientsLabel",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:s}),(t||0===t)&&s.buffer.push(t),s.buffer.push("\n      </span>\n    "),h}function u(e,s){var t,h="";return s.buffer.push('\n        <span class="label">'),t=a._triageMustache.call(e,"shortName",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:s}),(t||0===t)&&s.buffer.push(t),s.buffer.push("</span>\n      "),h}function p(e,s){var t,h,n,i="";return s.buffer.push("\n      <img src='/images/ajax-loader-medium-444.gif'/>\n      "),h=a.t||e&&e.t,n={hash:{scope:"quizzes.templates.quiz.message_students.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:e},contexts:[e,e],types:["STRING","STRING"],data:s},t=h?h.call(e,"loading","Loading",n):b.call(e,"t","loading","Loading",n),(t||0===t)&&s.buffer.push(t),s.buffer.push("\n    "),i}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.Handlebars.helpers),n=n||{};var r,o,c,f="",d=this,b=a.helperMissing,m=this.escapeExpression;return o=a["form-dialog"]||t&&t["form-dialog"],c={hash:{title:"title","on-submit":"submit","submit-disabled":"noRecipients",height:"modalHeight",width:500,"fix-dialog-buttons":!1},hashTypes:{title:"ID","on-submit":"STRING","submit-disabled":"ID",height:"ID",width:"INTEGER","fix-dialog-buttons":"BOOLEAN"},hashContexts:{title:t,"on-submit":t,"submit-disabled":t,height:t,width:t,"fix-dialog-buttons":t},inverse:d.noop,fn:d.program(1,i,n),contexts:[],types:[],data:n},r=o?o.call(t,c):b.call(t,"form-dialog",c),(r||0===r)&&n.buffer.push(r),n.buffer.push("\n"),f})});