define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES["components/c-modal-form"]=e.Handlebars.template(function(a,s,r,n,t){function l(e,a){var s,n,t,l="";return a.buffer.push("\n  <ic-modal-main>\n    "),n=r["ic-modal-trigger"]||e&&e["ic-modal-trigger"],t={hash:{"class":"ic-modal-close","aria-label":"closeText"},hashTypes:{"class":"STRING","aria-label":"ID"},hashContexts:{"class":e,"aria-label":e},inverse:c.noop,fn:c.program(2,h,a),contexts:[],types:[],data:a},s=n?n.call(e,t):f.call(e,"ic-modal-trigger",t),(s||0===s)&&a.buffer.push(s),a.buffer.push("\n    "),s=r._triageMustache.call(e,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:a}),(s||0===s)&&a.buffer.push(s),a.buffer.push("\n  </ic-modal-main>\n"),l}function h(e,a){a.buffer.push("×")}this.compilerInfo=[4,">= 1.0.0"],r=this.merge(r,e.Handlebars.helpers),t=t||{};var o,i="",c=this,f=r.helperMissing;return o=r["if"].call(s,"isOpen",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(1,l,t),contexts:[s],types:["ID"],data:t}),(o||0===o)&&t.buffer.push(o),t.buffer.push("\n\n"),i})});