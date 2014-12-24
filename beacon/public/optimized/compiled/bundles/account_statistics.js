define("translations/accounts.statistics",["i18nObj","jquery"],function(t,e){e.extend(!0,t,{translations:{ar:{accounts:{statistics:{heading_date:"التاريخ",heading_value:"القيمة",loading_error:"خطأ",loading_text:"جارٍ التحميل...",over_time_link:"بمرور الوقت",title_data_point_over_time:"%{data_point} بمرور الوقت"}}},de:{accounts:{statistics:{heading_date:"Datum",heading_value:"Wert",loading_error:"Fehler",loading_text:"Ladevorgang läuft...",over_time_link:"im Verlauf der Zeit",title_data_point_over_time:"%{data_point} Im Verlauf der Zeit"}}},"en-AU":{accounts:{statistics:{heading_date:"Date",heading_value:"Value",loading_error:"error",loading_text:"loading...",over_time_link:"over time",title_data_point_over_time:"%{data_point} Over Time"}}},"en-GB":{accounts:{statistics:{heading_date:"Date",heading_value:"Value",loading_error:"error",loading_text:"loading...",over_time_link:"over time",title_data_point_over_time:"%{data_point} over time"}}},es:{accounts:{statistics:{heading_date:"Fecha",heading_value:"Valor",loading_error:"error",loading_text:"cargando...",over_time_link:"sobre el tiempo",title_data_point_over_time:"%{data_point} en el tiempo"}}},"fa-IR":{accounts:{statistics:{heading_date:"تاریخ",heading_value:"مقدار",loading_error:"خطا",loading_text:"درحال بارگذاری...",over_time_link:"در طول زمان",title_data_point_over_time:"%{data_point}  در طول زمان"}}},fr:{accounts:{statistics:{heading_date:"Date",heading_value:"Valeur",loading_error:"erreur",loading_text:"chargement...",over_time_link:"sur la durée",title_data_point_over_time:"%{data_point} sur la durée"}}},ja:{accounts:{statistics:{heading_date:"日付",heading_value:"値",loading_error:"エラー",loading_text:"読み込んでいます...",over_time_link:"経時変化",title_data_point_over_time:"%{data_point} 経時変化"}}},nb:{accounts:{statistics:{heading_date:"Dato",heading_value:"Verdi",loading_error:"feil",loading_text:"laster…",over_time_link:"over tid",title_data_point_over_time:"%{data_point} Over Time"}}},nl:{accounts:{statistics:{heading_date:"Datum",heading_value:"Waarde",loading_error:"fout",loading_text:"Bezig met laden...",over_time_link:"na verloop van tijd",title_data_point_over_time:"%{data_point} Na verloop van tijd"}}},pl:{accounts:{statistics:{heading_date:"Data",heading_value:"Wartość",loading_error:"błąd",loading_text:"trwa ładowanie...",over_time_link:"z okresu",title_data_point_over_time:"%{data_point} Z okresu"}}},pt:{accounts:{statistics:{heading_date:"Data",heading_value:"Valor",loading_error:"erro",loading_text:"carregando...",over_time_link:"ao longo do tempo",title_data_point_over_time:"%{data_point} Ao longo do tempo"}}},"pt-BR":{accounts:{statistics:{heading_date:"Data",heading_value:"Valor",loading_error:"erro",loading_text:"carregando...",over_time_link:"ao longo do tempo",title_data_point_over_time:"%{data_point} Ao longo do tempo"}}},ru:{accounts:{statistics:{heading_date:"Дата",heading_value:"Значение",loading_error:"ошибка",loading_text:"загрузка...",over_time_link:"за время",title_data_point_over_time:"%{data_point} за время"}}},tr:{accounts:{statistics:{heading_date:"Tarih",heading_value:"Değer",loading_error:"hata",loading_text:"yükleniyor...",over_time_link:"zamanla",title_data_point_over_time:"Zamanla %{data_point}"}}},zh:{accounts:{statistics:{heading_date:"日期",heading_value:"值",loading_error:"错误",loading_text:"正在加载...",over_time_link:"超时",title_data_point_over_time:"%{data_point} 超时"}}},zh_Hant:{accounts:{statistics:{heading_date:"日期",heading_value:"值",loading_error:"錯誤",loading_text:"正在載入...",over_time_link:"超時",title_data_point_over_time:"%{data_point} 超時"}}}}})}),define("account_statistics",["i18n!accounts.statistics","jquery","jquery.ajaxJSON","jqueryui/dialog","jquery.instructure_misc_helpers"],function(t,e){e(document).ready(function(){function a(a,i){e("#over_time_dialog").dialog({width:630,height:330,title:t.t("title_data_point_over_time","%{data_point} Over Time",{data_point:i})});var o=new google.visualization.DataTable;o.addColumn("date",t.t("heading_date","Date")),o.addColumn("number",i||t.t("heading_value","Value")),o.addColumn("string","title1"),o.addColumn("string","text1");var n=[];e.each(a,function(){var t=new Date;t.setTime(this[0]),n.push([t,this[1],void 0,void 0])}),o.addRows(n);var _=new google.visualization.AnnotatedTimeLine(document.getElementById("over_time"));_.draw(o,{displayAnnotations:!1})}e(".over_time_link").live("click",function(i){i.preventDefault();var o=e(this).attr("data-name"),n=e.replaceTags(e(".over_time_url").attr("href"),"attribute",e(this).attr("data-key")),_=e(this);_.text(t.t("loading_text","loading...")),e.ajaxJSON(n,"GET",{},function(i){_.text(t.t("over_time_link","over time")),e("#over_time_dialog .csv_url").attr("href",n+".csv"),a(i,o)},function(){_.text(t.t("loading_error","error"))})})})}),function(){require(["account_statistics"])}.call(this),define("compiled/bundles/account_statistics",function(){});