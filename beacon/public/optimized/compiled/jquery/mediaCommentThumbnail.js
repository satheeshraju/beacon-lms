(function(){define(["i18n!media_comments","underscore","str/htmlEscape","jquery"],function(t,e,n,i){var a,m;return a={normal:{width:140,height:100},small:{width:70,height:50}},m=function(e,m,r){var l,d,o,s,c,u,_,h,p,f;return INST.kalturaSettings?(o=i(e),u=null!=(f=a[m])?f:a.normal,h=o.data("media_comment_id")||i.trim(o.find(".media_comment_id:first").text())||(p=o.attr("id"))&&p.match(/^media_comment_/)&&p.substring(14)||i.trim(o.parent().find(".media_comment_id:first").text()),h?(_="https://"+INST.kalturaSettings.resource_domain,c=""+_+"/p/"+INST.kalturaSettings.partner_id+"/thumbnail/entry_id/"+h+"/width/"+(""+u.width+"/height/"+u.height+"/bgcolor/000000/type/2/vid_sec/5"),s=i("<span                        style='background-image: url("+c+");'                        class='media_comment_thumbnail media_comment_thumbnail-"+m+"'                      >                        <span class='media_comment_thumbnail_play_button'>                          "+n(t.t("click_to_view","Click to view"))+"                        </span>                      </span>"),l=o,r?(l=o.clone().empty().removeClass("instructure_file_link"),d=o.parent(".instructure_file_link_holder"),d.length?l.appendTo(d):o.after(l)):o.empty(),l.addClass("instructure_inline_media_comment").append(s).css({backgroundImage:"",padding:0})):void 0):console.log("Kaltura has not been enabled for this account")},i.fn.mediaCommentThumbnail=function(t,n){return null==t&&(t="normal"),this.each(function(){return e.defer(m,this,t,n)})}})}).call(this);