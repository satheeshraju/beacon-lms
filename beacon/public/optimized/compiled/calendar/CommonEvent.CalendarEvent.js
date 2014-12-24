(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,a=function(t,a){function n(){this.constructor=t}for(var i in a)e.call(a,i)&&(t[i]=a[i]);return n.prototype=a.prototype,t.prototype=new n,t.__super__=a.prototype,t};define(["i18n!calendar","jquery","compiled/util/semanticDateRange","compiled/calendar/CommonEvent","jquery.instructure_date_and_time","jquery.instructure_misc_helpers"],function(e,n,i,r){var s,o;return o=e.t("prompts.delete_event","Are you sure you want to delete this event?"),s=function(e){function r(e,a,n){this.saveDates=t(this.saveDates,this),this.copyDataFromObject=t(this.copyDataFromObject,this),r.__super__.constructor.call(this,e,a,n),this.eventType="calendar_event",this.deleteConfirmation=o,this.deleteURL=a.calendar_event_url}return a(r,e),r.prototype.copyDataFromObject=function(t){return t.calendar_event&&(t=t.calendar_event),this.object=this.calendarEvent=t,t.id&&(this.id="calendar_event_"+t.id),this.title=t.title||"Untitled",this.location_name=t.location_name,this.location_address=t.location_address,this.start=this.parseStartDate(),this.end=this.parseEndDate(),this.end&&(this.originalEndDate=new Date(this.end)),this.allDay=t.all_day,this.editable=!0,this.lockedTitle=null!=this.object.parent_event_id,this.description=t.description,this.addClass("group_"+this.contextCode()),this.isAppointmentGroupEvent()&&(this.addClass("scheduler-event"),this.object.reserved&&this.addClass("scheduler-reserved"),0===this.object.available_slots&&this.addClass("scheduler-full"),(void 0===this.object.available_slots||this.object.available_slots>0)&&this.addClass("scheduler-available"),this.editable=!1),r.__super__.copyDataFromObject.apply(this,arguments)},r.prototype.endDate=function(){return this.originalEndDate},r.prototype.parseStartDate=function(){return this.calendarEvent.start_at?n.fudgeDateForProfileTimezone(this.calendarEvent.start_at):null},r.prototype.parseEndDate=function(){return this.calendarEvent.end_at?n.fudgeDateForProfileTimezone(this.calendarEvent.end_at):null},r.prototype.fullDetailsURL=function(){var t;return this.isAppointmentGroupEvent()?"/appointment_groups/"+this.object.appointment_group_id:n.replaceTags(this.contextInfo.calendar_event_url,"id",null!=(t=this.calendarEvent.parent_event_id)?t:this.calendarEvent.id)},r.prototype.displayTimeString=function(){var t;return this.calendarEvent.all_day?(t=n.unfudgeDateForProfileTimezone(this.startDate()),"<time datetime='"+t.toISOString()+"'>"+n.dateString(t)+"</time>"):i(this.calendarEvent.start_at,this.calendarEvent.end_at)},r.prototype.readableType=function(){return this.readableTypes.event},r.prototype.saveDates=function(t,e){return this.save({"calendar_event[start_at]":this.start?n.unfudgeDateForProfileTimezone(this.start).toISOString():"","calendar_event[end_at]":this.end?n.unfudgeDateForProfileTimezone(this.end).toISOString():"","calendar_event[all_day]":this.allDay},t,e)},r.prototype.methodAndURLForSave=function(){var t,e;return this.isNewEvent()?(t="POST",e="/api/v1/calendar_events"):(t="PUT",e=this.calendarEvent.url),[t,e]},r}(r)})}).call(this);