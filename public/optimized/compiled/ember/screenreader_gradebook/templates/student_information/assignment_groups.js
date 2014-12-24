define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES["student_information/assignment_groups"]=e.Handlebars.template(function(s,t,a,n,r){function h(e,s){var t,n,r="";return s.buffer.push("\n      "),s.buffer.push(i((t=a["assignment-group-grades"]||e&&e["assignment-group-grades"],n={hash:{ag:"assignment_group",student:"selectedStudent",weightingScheme:"weightingScheme",gradingStandard:"ENV.GRADEBOOK_OPTIONS.grading_standard"},hashTypes:{ag:"ID",student:"ID",weightingScheme:"ID",gradingStandard:"ID"},hashContexts:{ag:e,student:e,weightingScheme:e,gradingStandard:e},contexts:[],types:[],data:s},t?t.call(e,n):d.call(e,"assignment-group-grades",n)))),s.buffer.push("\n    "),r}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.Handlebars.helpers),r=r||{};var o,g,p,u="",d=a.helperMissing,i=this.escapeExpression,c=this;return r.buffer.push('<table class="table left-first">\n  <thead>\n    <tr>\n      <th>'),g=a.t||t&&t.t,p={hash:{scope:"screenreader_gradebook.templates.student_information.assignment_groups.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:r},o=g?g.call(t,"ag_group_name","Assignment Group",p):d.call(t,"t","ag_group_name","Assignment Group",p),(o||0===o)&&r.buffer.push(o),r.buffer.push("</th>\n      <th>"),g=a.t||t&&t.t,p={hash:{scope:"screenreader_gradebook.templates.student_information.assignment_groups.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:r},o=g?g.call(t,"ag_group_grade","Grade",p):d.call(t,"t","ag_group_grade","Grade",p),(o||0===o)&&r.buffer.push(o),r.buffer.push("</th>\n      <th>"),g=a.t||t&&t.t,p={hash:{scope:"screenreader_gradebook.templates.student_information.assignment_groups.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:r},o=g?g.call(t,"ag_letter_grade","Letter Grade",p):d.call(t,"t","ag_letter_grade","Letter Grade",p),(o||0===o)&&r.buffer.push(o),r.buffer.push("</th>\n      <th>"),g=a.t||t&&t.t,p={hash:{scope:"screenreader_gradebook.templates.student_information.assignment_groups.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:r},o=g?g.call(t,"ag_group_percent_grade","% of Grade",p):d.call(t,"t","ag_group_percent_grade","% of Grade",p),(o||0===o)&&r.buffer.push(o),r.buffer.push("</th>\n    </tr>\n  </thead>\n  <tbody>\n    "),o=a.each.call(t,"assignment_group","in","assignment_groups",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(1,h,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n  </tbody>\n</table>"),u})});