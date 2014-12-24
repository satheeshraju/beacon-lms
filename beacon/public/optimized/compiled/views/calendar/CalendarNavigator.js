(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,i=function(t,i){function r(){this.constructor=t}for(var n in i)e.call(i,n)&&(t[n]=i[n]);return r.prototype=i.prototype,t.prototype=new r,t.__super__=i.prototype,t};define(["i18n!calendar","jquery","underscore","Backbone","jst/calendar/calendarNavigator"],function(e,r,n,s,o){var a,h;return a=function(s){function a(){return this._onPickerClose=t(this._onPickerClose,this),this._onPickerSelect=t(this._onPickerSelect,this),this._flashDateSuggestion=t(this._flashDateSuggestion,this),this._onDateFieldKey=t(this._onDateFieldKey,this),this.setTitle=t(this.setTitle,this),this.hide=t(this.hide,this),this.show=t(this.show,this),h=a.__super__.constructor.apply(this,arguments)}return i(a,s),a.prototype.template=o,a.prototype.els={".navigation_title":"$title",".navigation_buttons":"$buttons",".date_field":"$dateField",".date_field_wrapper":"$dateWrapper"},a.prototype.events={"click .navigate_prev":"_triggerPrev","click .navigate_today":"_triggerToday","click .navigate_next":"_triggerNext","click .navigation_title":"_onTitleClick","keyclick .navigation_title":"_onTitleClick"},a.prototype.messages={invalid_date:e.t("input_is_invalid_date","Input is not a valid date."),screenreader_date_suggestion:function(t){return e.t("screenreader_date_suggestion","%{date}. Press enter to accept.",{date:t})}},a.prototype.initialize=function(){return a.__super__.initialize.apply(this,arguments),this.render(),this._flashDateSuggestion=n.debounce(this._flashDateSuggestion,1500),this.$buttons.buttonset(),this.$dateField.keydown(this._onDateFieldKey),this.$dateField.date_field({datepicker:{onClose:this._onPickerClose,onSelect:this._onPickerSelect,showOn:"both"}}),this.$dateSuggestion=this.$(".datetime_suggest"),this.hidePicker(),this.options.hide?this.hide():void 0},a.prototype.show=function(t){return null==t&&(t=!0),this.$el.toggle(t)},a.prototype.hide=function(){return this.show(!1)},a.prototype.setTitle=function(t){return this.$title.html(t)},a.prototype.showPicker=function(t){return null==t&&(t=!0),this._pickerShowing=t,this.$title.toggle(!t),this.$dateWrapper.toggle(t),t?(this._resetPicker(),this.$dateField.focus()):(this.$dateField.realDatepicker("hide"),this.$title.focus())},a.prototype.hidePicker=function(){return this.showPicker(!1)},a.prototype.showPrevNext=function(){return this.$buttons.show()},a.prototype.hidePrevNext=function(){return this.$buttons.hide()},a.prototype._resetPicker=function(){return this._enterKeyPressed=!1,this._enterKeyValue="",this._previousDateFieldValue="",this.$dateField.removeAttr("aria-invalid"),this.$dateField.val("")},a.prototype._titleActivated=function(){return this.showPicker()},a.prototype._dateFieldSelect=function(t){var e;return this._enterKeyPressed&&(t=this._enterKeyValue),t?(e=Date.parse(t),this._triggerDate(e),this.hidePicker()):this._dateFieldEscape()},a.prototype._dateFieldEscape=function(){return this.hidePicker()},a.prototype._triggerPrev=function(){return this.trigger("navigatePrev")},a.prototype._triggerToday=function(){return this.trigger("navigateToday")},a.prototype._triggerNext=function(){return this.trigger("navigateNext")},a.prototype._triggerDate=function(t){return this.trigger("navigateDate",t)},a.prototype._onTitleClick=function(t){return t.preventDefault(),this._titleActivated()},a.prototype._onDateFieldKey=function(t){return 13===t.keyCode?(this._enterKeyPressed=!0,this._enterKeyValue=this._getDateText()):this._flashDateSuggestion()},a.prototype._flashDateSuggestion=function(){var t,e,i;if(this._pickerShowing&&this._previousDateFieldValue!==this.$dateField.val())return this._previousDateFieldValue=this.$dateField.val(),t=this._getDateText(),i=!t,e=i?this.messages.invalid_date:this.messages.screenreader_date_suggestion(t),r.screenReaderFlashMessage(e),this.$dateField.attr("aria-invalid",i?"true":"false")},a.prototype._onPickerSelect=function(t){return this._dateFieldSelect(t)},a.prototype._onPickerClose=function(){return this._dateFieldEscape()},a.prototype._getDateText=function(){var t;return t=this.$dateSuggestion.text(),this.$dateSuggestion.is(".invalid_datetime")&&(t=""),t},a}(s.View)})}).call(this);