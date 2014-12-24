define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES.module_edit=e.Handlebars.template(function(s,t,a,l,o){function n(e,s){var t,l,o,n="";return s.buffer.push("\n  "),l=a.t||e&&e.t,o={hash:{scope:"modules.templates.module_edit.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:e},contexts:[e,e],types:["STRING","STRING"],data:s},t=l?l.call(e,"new_module","Create new module",o):i.call(e,"t","new_module","Create new module",o),(t||0===t)&&s.buffer.push(t),s.buffer.push("\n"),n}function c(e,s){var t,l,o,n="";return s.buffer.push('\n  <div class="control-group">\n    <label class="control-label" for="new-moudle-lock-date">'),l=a.t||e&&e.t,o={hash:{scope:"modules.templates.module_edit.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:e},contexts:[e,e],types:["STRING","STRING"],data:s},t=l?l.call(e,"lock_datea","Lock date",o):i.call(e,"t","lock_datea","Lock date",o),(t||0===t)&&s.buffer.push(t),s.buffer.push('</label>\n    <div class="controls">\n      '),s.buffer.push(f((l=a["c-datepicker"]||e&&e["c-datepicker"],o={hash:{value:"unlock_at"},hashTypes:{value:"ID"},hashContexts:{value:e},contexts:[],types:[],data:s},l?l.call(e,o):i.call(e,"c-datepicker",o)))),s.buffer.push("\n    </div>\n  </div>\n"),n}function h(e,s){var t,l,o;l=a.t||e&&e.t,o={hash:{scope:"modules.templates.module_edit.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:e},contexts:[e,e],types:["STRING","STRING"],data:s},t=l?l.call(e,"cancel","Cancel",o):i.call(e,"t","cancel","Cancel",o),s.buffer.push(t||0===t?t:"")}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.Handlebars.helpers),o=o||{};var p,u,d,r="",i=a.helperMissing,f=this.escapeExpression,m=this,b="function",T=a.blockHelperMissing;return d={hash:{},hashTypes:{},hashContexts:{},inverse:m.noop,fn:m.program(1,n,o),contexts:[],types:[],data:o},(u=a["ic-modal-title"])?p=u.call(t,d):(u=t&&t["ic-modal-title"],p=typeof u===b?u.call(t,d):u),a["ic-modal-title"]||(p=T.call(t,"ic-modal-title",{hash:{},hashTypes:{},hashContexts:{},inverse:m.noop,fn:m.program(1,n,o),contexts:[],types:[],data:o})),(p||0===p)&&o.buffer.push(p),o.buffer.push('\n\n<div class="control-group">\n  <label class="control-label" for="new-module-name">'),u=a.t||t&&t.t,d={hash:{scope:"modules.templates.module_edit.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:o},p=u?u.call(t,"module_name","Module Name",d):i.call(t,"t","module_name","Module Name",d),(p||0===p)&&o.buffer.push(p),o.buffer.push('</label>\n  <div class="controls">\n    '),o.buffer.push(f((u=a.input||t&&t.input,d={hash:{type:"text",value:"name",id:"new-module-name"},hashTypes:{type:"STRING",value:"ID",id:"STRING"},hashContexts:{type:t,value:t,id:t},contexts:[],types:[],data:o},u?u.call(t,d):i.call(t,"input",d)))),o.buffer.push('\n  </div>\n</div>\n\n<div class="control-group">\n  <div class="controls">\n    \n    <label class="checkbox" for="new-module-has-unlock-date" style="display: inline-block">\n      '),o.buffer.push(f((u=a.input||t&&t.input,d={hash:{checked:"unlockAtChecked",id:"new-module-has-unlock-date",type:"checkbox"},hashTypes:{checked:"ID",id:"STRING",type:"STRING"},hashContexts:{checked:t,id:t,type:t},contexts:[],types:[],data:o},u?u.call(t,d):i.call(t,"input",d)))),o.buffer.push("\n      "),u=a.t||t&&t.t,d={hash:{scope:"modules.templates.module_edit.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:o},p=u?u.call(t,"has_unlock_date","Lock modules until a given date",d):i.call(t,"t","has_unlock_date","Lock modules until a given date",d),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n    </label>\n  </div>\n</div>\n\n"),p=a["if"].call(t,"unlockAtChecked",{hash:{},hashTypes:{},hashContexts:{},inverse:m.noop,fn:m.program(3,c,o),contexts:[t],types:["ID"],data:o}),(p||0===p)&&o.buffer.push(p),o.buffer.push('\n\n<div class="form-actions">\n  '),u=a["ic-modal-trigger"]||t&&t["ic-modal-trigger"],d={hash:{"class":"btn"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},inverse:m.noop,fn:m.program(5,h,o),contexts:[],types:[],data:o},p=u?u.call(t,d):i.call(t,"ic-modal-trigger",d),(p||0===p)&&o.buffer.push(p),o.buffer.push('\n  <button type="submit" class="btn btn-primary">'),u=a.t||t&&t.t,d={hash:{scope:"modules.templates.module_edit.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:o},p=u?u.call(t,"Create","Create",d):i.call(t,"t","Create","Create",d),(p||0===p)&&o.buffer.push(p),o.buffer.push("</button>\n</div>\n\n"),r})});