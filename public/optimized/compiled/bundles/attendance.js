define("datagrid",["INST","jquery","ajax_errors","jquery.instructure_misc_plugins","jquery.keycodes","jquery.scrollToVisible","vendor/jquery.scrollTo","jqueryui/position"],function(e,t){var a={columns:[],rows:[],dataRows:[],dataFragment:document.createDocumentFragment(),cells:{},divs:{},init:function(n,s){var i=s.onReady,r=s.tick,l=s.maxWidth||150;a.borderSize=s.borderSize||1,a.paddingBottom=s.paddingBottom||0,s.scroll&&t.isFunction(s.scroll)&&(a.scrollCallback=s.scroll),a.table=n,a.toggleCallback=s.toggle;var o=n.find("tr:first td"),d=n.find("tr"),c=0;o.each(function(e){var n=a.columns[e]=t(this);n.metrics={width:Math.min(n.width(),l),outerWidth:Math.min(n.outerWidth(),l+1)},c+=n.metrics.outerWidth});var u=0;d.each(function(e){var n=a.rows[e]=t(this);n.metrics={outerHeight:n.find("td:first").outerHeight(),height:n.find("td:first").height()},u+=n.metrics.height}),r&&t.isFunction(r)&&r(),a.divs.all=t(".datagrid"),a.divs.topleft=t("#datagrid_topleft"),a.divs.left=t("#datagrid_left"),a.divs.top=t("#datagrid_top"),a.divs.data=t("#datagrid_data"),a.divs.filler=t("#datagrid_filler"),a.divs.topleft.width(a.columns[0].metrics.width+a.borderSize),a.divs.left.width(a.columns[0].metrics.width+a.borderSize),a.divs.filler.width(c-a.columns[0].metrics.width),a.divs.top.height(a.rows[0].metrics.height+a.borderSize),a.divs.topleft.height(a.rows[0].metrics.height+a.borderSize),a.divs.filler.height(u-a.rows[0].metrics.height),a._initializeListeners(),a._templateCellHTML=s.templateCellHTML,a.sizeToWindow(),t(window).resize(a.sizeToWindow);var _=a._createRow(0,!0);_.append(a._createCell(0,0,n.find("tr:first td:first"))),a.divs.topleft.children(".content:first").append(_),_=a._createRow(0),_.width(c-a.columns[0].metrics.outerWidth),n.find("tr:first").children("td:not(:first)").each(function(e){_.append(a._createCell(0,e+1,t(this)))}),a.divs.top.children(".content:first").append(_),r&&t.isFunction(r)&&r();var m=!1,g=function(e){m||(_=a._createRow(e+1,!0),_.append(a._createCell(e+1,0,t(this).find("td:first"))),a.divs.left.children(".content:first").append(_)),_=a._createRow(e+1),t(this).children("td:not(:first)").each(function(n){a._createCell(e+1,n+1,t(this)),a._placeDataCell(e+1,n+1)}),a._placeDataRow(e+1)},f=[],h=0;n.find("tr:not(:first)").each(function(e){var n=0;_=a._createRow(e+1,!0),_.append(a._createCell(e+1,0,t(this).find("td:first"))),a.divs.left.children(".content:first").append(_),_=a._createRow(e+1),_.width(c-a.columns[0].metrics.outerWidth),t(this).children("td:not(:first)").each(function(e){n+=a.columns[e+1].metrics.width}),a._placeDataRow(e+1),h+=a.rows[e+1].metrics.height,f.push(t(this))}),m=!0,a._placeDataFragment(),s&&s.onViewable&&t.isFunction(s.onViewable)&&s.onViewable.call(this);var p=0,v=function(s){function l(){var e=d.width();d.width(99999999),c.css({position:"relative",width:""});var t=c.width()+1;d.width(e),c.css("position",""),u.width(t)}try{if(r&&t.isFunction(r)&&s&&r(),p<f.length){var o=p;p++,g.call(f[o],o),setTimeout(function(){v(!0)},1)}else if(s&&!v.finished&&(v.finished=!0,a.initialized=!0,n.hide(),a.ready&&t.isFunction(a.ready)&&a.ready(),i&&t.isFunction(i)&&i(),e.browser.ff)){var d=t("#datagrid_top"),c=d.find(".row"),u=c.add("#datagrid_data .row");l();var _;t(window).resize(function(){clearTimeout(_),_=setTimeout(l,100)})}}catch(m){e.log_error({message:m.toString()})}};setTimeout(function(){v(!0)},5),setTimeout(function(){v(!1)},5),setTimeout(function(){v(!1)},5),setTimeout(function(){v(!1)},5);var w=a.divs.top.children(".content:first"),b=a.divs.left.children(".content:first"),k=!1;setInterval(function(){k&&(0===w.length&&(w=a.divs.top.children(".content:first")),0===b.length&&(b=a.divs.left.children(".content:first")),w.css("left",0-a.divs.data.scrollLeft()),b.css("top",0-a.divs.data.scrollTop()),a.scrollCallback&&a.scrollCallback(),k=!1)},100),a.divs.data.bind("scroll",function(){k=!0}),a.mouseHasMoved=!0,t(document).mousemove(function(){a.mouseHasMoved=!0}),t(document).keycodes("up down left right tab shift+tab",function(e){t(e.target).closest(".ui-dialog").length>0||(e.preventDefault(),e.stopPropagation(),"right"==e.keyString||"tab"==e.keyString?a.moveRight():"down"==e.keyString?a.moveDown():"up"==e.keyString?a.moveUp():("left"==e.keyString||"shift+tab"==e.keyString)&&a.moveLeft())})},_initializeListeners:function(){a.divs.all.delegate(".cell","mousemove",a._cellMove).delegate(".cell","mouseover",a._cellOver).delegate(".cell","mouseout",a._cellOut).delegate(".cell","click",a._cellClick)},titles:function(e){var t=[];for(var n in e){var s=a.cells["0,"+e[n]];t.push(s.find(".assignment_title").text()||"--")}},reorderColumns:function(e){for(var t={},n=[],s=[],i=0;i<e.length;i++)s[i]=i;for(var r=0;r<e.length;r++){for(var l=e[r],o=0;o<a.rows.length;o++){{var d=a.cells[o+","+l];a.cells[o+","+s[r]]}s[r]==l||(s[r]<l?a.cells[o+","+s[r]].before(d):a.cells[o+","+s[r]].after(d)),t[o+","+r]=a.cells[o+","+l],t[o+","+r].column=r,t[o+","+r].data("datagrid_position",{row:o,column:r}),t[o+","+r].data("column",r),n[r]=a.columns[l]}for(var c=-1,i=0;i<s.length;i++)s[i]==l&&(c=i);r==c||(c>r?(s.splice(r,0,l),s.splice(c+1,1)):(s.splice(r,0,l),s.splice(c,1)))}a.cells=t,a.columns=n},reorderRows:function(e){for(var t={},n=[],s=[],i=0;i<e.length;i++)s[i]=i;for(var r=0,l=0;l<e.length;l++){var o=e[l],d=a.cells[o+",0"].parents(".row"),c=a.cells[o+",1"].parents(".row");c.css("top",r),d.css("top",r),l>0&&(r=r+a.rows[o].metrics.height+1),s[l]==o||(s[l]<o?(a.cells[s[l]+",0"].parents(".row").before(d),a.cells[s[l]+",1"].parents(".row").before(c)):(a.cells[s[l]+",0"].parents(".row").after(d),a.cells[s[l]+",1"].parents(".row").after(c))),n[l]=a.rows[o];for(var u=0;u<a.columns.length;u++){{a.cells[o+","+u]}t[l+","+u]=a.cells[o+","+u],t[l+","+u].row=l,t[l+","+u].data("datagrid_position",{row:l,column:u}),t[l+","+u].data("row",l),n[l]=a.rows[o]}for(var _=-1,i=0;i<s.length;i++)s[i]==o&&(_=i);l==_||(_>l?(s.splice(l,0,o),s.splice(_+1,1)):(s.splice(l,0,o),s.splice(_,1)))}a.cells=t,a.rows=n},moveColumn:function(e,t){if(new_order=[],0!=e&&0!=t&&e!=t){for(var n=0;n<a.columns.length;n++)new_order.push(n==t?e:n>=t&&e>=n||t>=n&&n>=e?e>t?n-1:n+1:n);a.reorderColumns(new_order)}},_placeDataCell:function(e,t){if(!(1>e||1>t)){var n=a.cells[e+","+t];if(!n||!n.placed){var s=a.dataRows[e];s&&(s.append(n),n.placed=!0)}}},_initializeCell:function(e,n){if(!a.cells[e+","+n]){var s=["cell"];0===e&&s.push("column_header"),0===n&&s.push("row_header"),0!==n&&0!==e&&s.push("data_cell");var i=t(["<div class='",s.join(" "),"' style='visibility: hidden; height:",a.rows[e].metrics.height,"px; width:",a.columns[n].metrics.width,"px;' data-row='",e,"' data-column='",n,"'/>"].join("")).data({row:e,column:n});i.row=e,i.column=n,a.cells[e+","+n]=i}return a.cells[e+","+n]},_createCell:function(e,t,n){var s=a._initializeCell(e,t);return s.transferred?s:(s.append(0!=e&&0!=t&&a._templateCellHTML?a._templateCellHTML(e,t):n.children()),s.attr("id",n.attr("id")),n.attr("id","original_"+s.attr("id")),s.originalTD=n,s.addClass(n.attr("class")),s.css("visibility",""),s.transferred=!0,s)},_trigger:function(e,n,s){var i=t.Event(e);i.originalEvent=n,i.originalTarget=s,a.table.trigger(i,{cell:s,trueEvent:n&&n.originalEvent})},_cellClick:function(e){var n=a.position(t(this)),s=a.cells[n.row+","+n.column];return a.columns[s.column].hidden?void a.toggleColumn(s.column):void a._trigger("entry_click",e,s)},_cellMove:function(){if(!a.disableHighlights){var e=a.position(t(this)),n=a.cells[e.row+","+e.column];a.table.trigger("entry_move",n),-1==t(this).index(a.currentHover)&&n.trigger("mouseover")}},_cellOver:function(e){if(!a.disableHighlights&&(!e.originalEvent||a.mouseHasMoved)){a.mouseHasMoved=!1;var n=a.position(t(this)),s=a.cells[n.row+","+n.column];if(s.addClass("selected"),a.currentHover&&-1==s.index(a.currentHover)&&t(a.currentHover).trigger("mouseout"),a.currentHover=s,0==s.row)for(var i=1;i<a.rows.length;i++)a.cells[i+","+s.column].addClass("related");else if(0==s.column)for(var i=1;i<a.columns.length;i++)a.cells[s.row+","+i].addClass("related");else a.cells[s.row+",0"].addClass("related"),a.cells["0,"+s.column].addClass("related");a._trigger("entry_over",e,s)}},_cellOut:function(e){if(!a.disableHighlights&&-1==t(e.target).parents("div").index(this)){var n=a.position(t(this)),s=a.cells[n.row+","+n.column];if(s.removeClass("selected"),0==s.row)for(var i=1;i<a.rows.length;i++)a.cells[i+","+s.column].removeClass("related");else if(0==s.column)for(var i=1;i<a.columns.length;i++)a.cells[s.row+","+i].removeClass("related");else a.cells[s.row+",0"].removeClass("related"),a.cells["0,"+s.column].removeClass("related");a._trigger("entry_out",e,s)}},_placeDataFragment:function(){a.dataFragment&&(a.divs.data.find(".content:first")[0].appendChild(a.dataFragment),a.dataFragment=null)},_placeDataRow:function(e){if(!(1>e)){var t=a.dataRows[e]||a._createRow(e);t.placed||(a.dataFragment?a.dataFragment.appendChild(t[0]):a.divs.data.find(".content:first").append(t),t.placed=!0)}},_createRow:function(e,n){if(a.dataRows[e])return a.dataRows[e];var s=document.createDocumentFragment(),i=t(document.createElement("div")).addClass("row");s.appendChild(i[0]),i.height(a.rows[e].metrics.height);for(var r=0,l=1;e>l;l++)r+=a.rows[l].metrics.height+1;var o=0;return i.css({top:r,left:o}),e>0&&!n&&(a.dataRows[e]=i),i},toggleColumn:function(e,n,s){var i=!a.columns[e].hidden,r=!!a.columns[e].hidden;if(n?r=!0:n===!1&&(r=!1),s&&s.callback===!1||!t.isFunction(a.toggleCallback)||a.toggleCallback(e,!!r),i!=r){for(var l=0;l<a.rows.length;l++)a.cells[l+","+e].width(r?a.columns[e].metrics.width:10).children().showIf(r).toggleClass("hidden_column",!r);return a.columns[e].hidden=!r,s&&s.skipSizeGrid||a.sizeGrid(),r}},sizeGrid:function(){for(var e=0,t=1;t<a.columns.length;t++)e+=a.columns[t].hidden?10:a.columns[t].metrics.width;a.divs.filler.width(e-a.columns[0].metrics.width);for(var t=0;t<a.rows.length;t++)a.cells[t+",1"].parent(".row").width(e+a.columns.length+3)},focus:function(e,t){var n=a.cells[e+","+t];a.currentFocus&&-1!=n.index(a.currentFocus||[])||(a.currentFocus&&a.blur(),n.addClass("focus"),a.currentFocus=n,a._trigger("entry_focus",null,n))},blur:function(){a.currentFocus&&(a.currentFocus.removeClass("focus"),a._trigger("entry_blur",null,a.currentFocus),a.currentFocus=null)},scrollTo:function(e,t){a.disableHighlights=!0,0==e&&(e=1),0==t&&(t=1);var n=a.cells[e+","+t];return a.divs.data.scrollToVisible(n).triggerHandler("scroll"),a.disableHighlights=!1,n&&n.filter(":visible").length>0?(n.attr("tabindex",0),!0):void 0},sizeToWindow:function(){t("html,body").css("overflow","hidden");var n=t("#content,#wide_content");(!n.length||n.width()<100)&&(n=t(window));var s=e.browser.ff?1:0,i=t(window).height()-s-a.divs.top.offset().top,r=n.width()-s,l=Math.floor(r-a.columns[0].metrics.outerWidth),o=Math.floor(i-a.rows[0].metrics.height-a.borderSize-a.paddingBottom);a.divs.top.width(l),a.divs.data.width(l),a.divs.left.height(o),a.divs.data.height(o),a.divs.data.metrics={width:l,height:o}},_selectFirstCell:function(){var e=a.cells["1,1"];e.trigger("mouseover"),a.currentHover=e,a.scrollTo(1,1)},position:function(e){if(e.hasClass("cell")||(e=e.closest(".cell")),e.data("datagrid_position"))return e.data("datagrid_position");if(0==e.length)return{};var t={row:parseInt(e.attr("data-row"),10),column:parseInt(e.attr("data-column"),10)};return e.data("datagrid_position",t),t},moveLeft:function(){var e=a.currentHover;if(!a.currentHover)return void a._selectFirstCell();for(var t=e.column-1,n=a.cells[e.row+","+t];n&&n.hidden;)t--,n=a.cells[e.row+","+t];n&&0!==n.length||(n=e),n.trigger("mouseover").focus(),a.currentHover=n,a.scrollTo(n.row,n.column)},moveRight:function(){var e=a.currentHover;if(!a.currentHover)return void a._selectFirstCell();for(var t=e.column+1,n=a.cells[e.row+","+t];n&&n.hidden;)t++,n=a.cells[e.row+","+t];n&&0!==n.length||(n=e),n.trigger("mouseover").focus(),a.currentHover=n,a.scrollTo(n.row,n.column)},moveUp:function(){var e=a.currentHover;if(!a.currentHover)return void a._selectFirstCell();for(var t=e.row-1,n=a.cells[t+","+e.column];n&&n.hidden;)t--,n=a.cells[t+","+e.column];n&&0!==n.length||(n=e),n.trigger("mouseover").focus(),a.currentHover=n,a.scrollTo(n.row,n.column)},moveDown:function(){var e=a.currentHover;if(!a.currentHover)return void a._selectFirstCell();for(var t=e.row+1,n=a.cells[t+","+e.column];n&&n.hidden;)t++,n=a.cells[t+","+e.column];n&&0!==n.length||(n=e),n.trigger("mouseover").focus(),a.currentHover=n,a.scrollTo(n.row,n.column)}};return a}),define("translations/attendance",["i18nObj","jquery"],function(e,t){t.extend(!0,e,{translations:{ar:{attendance:{default_attendance_title:"الحضور %{date}",errors:{could_not_add_assignment:"فشل إضافة مهمة"},options:{clear_attendance_marks:"مسح علامات الحضور",edit_assignment:"تحرير المهمة",mark_all_as_absent:"وضع علامة أمام كل شخص غائب",mark_all_as_present:"وضع علامة أمام كل شخص حاضر"},status:{added_assignment:"تمت إضافة المهمة",adding_assignment:"جارٍ إضافة المهمة..."},titles:{attendance_help:"تعليمات الحضور",new_attendance_column:"العمود الجديد للحضور"}}},de:{attendance:{default_attendance_title:"Anwesenheit am %{date}",errors:{could_not_add_assignment:"Hinzufügen der Aufgabe fehlgeschlagen"},options:{clear_attendance_marks:"Teilnahmemarkierungen löschen",edit_assignment:"Aufgabe bearbeiten",mark_all_as_absent:"Alle Teilnehmer als abwesend markieren",mark_all_as_present:"Alle Teilnehmer als anwesend markieren"},status:{added_assignment:"Aufgabe hinzugefügt",adding_assignment:"Aufgabe wird hinzugefügt..."},titles:{attendance_help:"Teilnahmehilfe",new_attendance_column:"Neue Anwesenheitsspalte"}}},"en-AU":{attendance:{default_attendance_title:"Attendance %{date}",errors:{could_not_add_assignment:"Add Assignment Failed"},options:{clear_attendance_marks:"Clear Attendance Marks",edit_assignment:"Edit Assignment",mark_all_as_absent:"Mark Everyone Absent",mark_all_as_present:"Mark Everyone Present"},status:{added_assignment:"Added Assignment",adding_assignment:"Adding Assignment..."},titles:{attendance_help:"Attendance Help",new_attendance_column:"New Attendance Column"}}},"en-GB":{attendance:{default_attendance_title:"Attendance %{date}",errors:{could_not_add_assignment:"Add assignment failed"},options:{clear_attendance_marks:"Clear attendance marks",edit_assignment:"Edit assignment",mark_all_as_absent:"Mark everyone absent",mark_all_as_present:"Mark everyone present"},status:{added_assignment:"Added assignment",adding_assignment:"Adding assignment..."},titles:{attendance_help:"Attendance help",new_attendance_column:"New attendance column"}}},es:{attendance:{default_attendance_title:"Asistencia %{date}",errors:{could_not_add_assignment:"No se pudo agregar la Tarea"},options:{clear_attendance_marks:"Despejar las Marcas de Asistencia",edit_assignment:"Editar la Tarea",mark_all_as_absent:"Marcar a todos como Ausentes",mark_all_as_present:"Marcar a todos como Presentes"},status:{added_assignment:"Se agregó la Tarea",adding_assignment:"Agregando la Tarea..."},titles:{attendance_help:"Ayuda de Asistencia",new_attendance_column:"Columna Nueva de Asistencia"}}},"fa-IR":{attendance:{default_attendance_title:"حضور %{date}",errors:{could_not_add_assignment:"افزودن تکلیف انجام نشد"},options:{clear_attendance_marks:"پاک کردن علامت های حضور",edit_assignment:"ویرایش تکلیف",mark_all_as_absent:"علامتگذاری همه به عنوان غایب",mark_all_as_present:"علامت گذاری همه به عنوان حاضر"},status:{added_assignment:"تکلیف افزوده شده",adding_assignment:"در حال افزودن تکلیف..."},titles:{attendance_help:"راهنمای حضور",new_attendance_column:"ستون جدید حضور"}}},fr:{attendance:{default_attendance_title:"Participation le %{date}",errors:{could_not_add_assignment:"L’ajout de la tâche a échoué"},options:{clear_attendance_marks:"Effacer les marques de participation",edit_assignment:"Modifier la tâche",mark_all_as_absent:"Marquer tout le mode absent",mark_all_as_present:"Marquer tout le monde présent"},status:{added_assignment:"Tâche ajoutée",adding_assignment:"Ajout d’une tâche"},titles:{attendance_help:"Aide sur la participation",new_attendance_column:"Colonne Nouvelle participation"}}},ja:{attendance:{default_attendance_title:"出欠 %{date}",errors:{could_not_add_assignment:"課題の追加に失敗しました"},options:{clear_attendance_marks:"出欠マークのクリア",edit_assignment:"課題の編集",mark_all_as_absent:"全員に欠席のマークを付ける",mark_all_as_present:"全員に出席のマークを付ける"},status:{added_assignment:"追加された課題",adding_assignment:"課題を追加しています..."},titles:{attendance_help:"出欠についてのヘルプ",new_attendance_column:"新しい出席者列"}}},nb:{attendance:{default_attendance_title:"Oppmøte %{date}",errors:{could_not_add_assignment:"Legg til oppgave feilet"},options:{clear_attendance_marks:"Fjern innhold om oppmøte",edit_assignment:"Rediger oppgave",mark_all_as_absent:"Marker samtlige som fraværende",mark_all_as_present:"Marker samtlige som tilstede"},status:{added_assignment:"Oppgave lagt til",adding_assignment:"Oppgave lagt til..."},titles:{attendance_help:"For hjelp om oppmøte",new_attendance_column:"Ny kolonne for oppmøte"}}},nl:{attendance:{default_attendance_title:"Aanwezigheid %{date}",errors:{could_not_add_assignment:"Toevoegen van opdracht mislukt"},options:{clear_attendance_marks:"Aanwezigheidsmarkeringen verduidelijken",edit_assignment:"Opdracht bewerken",mark_all_as_absent:"Iedereen als afwezig markeren",mark_all_as_present:"Iedereen als aanwezig markeren"},status:{added_assignment:"Toegevoegde opdracht",adding_assignment:"Bezig met het toevoegen van opdracht..."},titles:{attendance_help:"Presentielijst",new_attendance_column:"Nieuwe aanwezigheidskolom"}}},pl:{attendance:{default_attendance_title:"Obecność %{date}",errors:{could_not_add_assignment:"Dodawanie zadania nie powiodło się"},options:{clear_attendance_marks:"Wyczyść wyniki obecności",edit_assignment:"Edytuj zadanie",mark_all_as_absent:"Oznacz wszystkich uczestników jako nieobecnych",mark_all_as_present:"Oznacz wszystkich uczestników jako obecnych"},status:{added_assignment:"Dodane zadanie",adding_assignment:"Trwa dodawanie zadania..."},titles:{attendance_help:"Obecność — pomoc",new_attendance_column:"Nowa kolumna obecności"}}},pt:{attendance:{default_attendance_title:"Comparecimento %{date}",errors:{could_not_add_assignment:"Falha ao adicionar a tarefa"},options:{clear_attendance_marks:"Limpar marcas de presença",edit_assignment:"Editar tarefa",mark_all_as_absent:"Marcar todos ausentes",mark_all_as_present:"Marcar todos presentes"},status:{added_assignment:"Tarefa adicionada",adding_assignment:"Adicionando tarefa..."},titles:{attendance_help:"Ajuda com presença",new_attendance_column:"Nova coluna de presença"}}},"pt-BR":{attendance:{default_attendance_title:"Comparecimento %{date}",errors:{could_not_add_assignment:"Falha ao adicionar a tarefa"},options:{clear_attendance_marks:"Limpar marcas de presença",edit_assignment:"Editar tarefa",mark_all_as_absent:"Marcar todos ausentes",mark_all_as_present:"Marcar todos presentes"},status:{added_assignment:"Tarefa adicionada",adding_assignment:"Adicionando tarefa..."},titles:{attendance_help:"Ajuda com presença",new_attendance_column:"Nova coluna de presença"}}},ru:{attendance:{default_attendance_title:"Посещение %{date}",errors:{could_not_add_assignment:"Ошибка добавления задания"},options:{clear_attendance_marks:"Снять метки посещения",edit_assignment:"Редактировать задание",mark_all_as_absent:"Отметить всех отсутствующих",mark_all_as_present:"Отметить всех присутствующих"},status:{added_assignment:"Добавленное задание",adding_assignment:"Добавление задания..."},titles:{attendance_help:"Справка по посещению",new_attendance_column:"Новый столбец посещения"}}},tr:{attendance:{default_attendance_title:"Katılım %{date}",errors:{could_not_add_assignment:"Ödev Ekleme Başarısız"},options:{clear_attendance_marks:"Katılım İşaretlerini Temizle",edit_assignment:"Ödevi Düzenle",mark_all_as_absent:"Herkesi Yok Olarak İşaretle",mark_all_as_present:"Herkesi Mevcut Olarak İşaretle"},status:{added_assignment:"Eklenen Ödev",adding_assignment:"Ödev Ekleniyor..."},titles:{attendance_help:"Katılım Yardımı",new_attendance_column:"Yeni Katılım Sütunu"}}},zh:{attendance:{default_attendance_title:"参与 %{date}",errors:{could_not_add_assignment:"添加作业失败"},options:{clear_attendance_marks:"清除参与标记",edit_assignment:"编辑作业",mark_all_as_absent:"标记所有人缺席",mark_all_as_present:"标记所有人出席"},status:{added_assignment:"添加的作业",adding_assignment:"正在添加作业..."},titles:{attendance_help:"参与帮助",new_attendance_column:"新参与列"}}},zh_Hant:{attendance:{default_attendance_title:"考勤 %{date}",errors:{could_not_add_assignment:"新增任務失敗"},options:{clear_attendance_marks:"清除考勤標記",edit_assignment:"編輯任務",mark_all_as_absent:"標記每個缺勤者",mark_all_as_present:"標記每個出勤者"},status:{added_assignment:"新增任務",adding_assignment:"正在新增任務..."},titles:{attendance_help:"考勤說明",new_attendance_column:"新考勤欄"}}}}})}),define("attendance",["i18n!attendance","jquery","datagrid","str/htmlEscape","jquery.ajaxJSON","jquery.dropdownList","jquery.instructure_date_and_time","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_helpers","jquery.instructure_misc_plugins","jquery.keycodes","vendor/jquery.scrollTo","jqueryui/position"],function(e,t,a,n){var s,i={saveKeyIndex:0,toggleState:function(e,a,n){if(!e.hasClass("false_submission")){var s=e.attr("id").split("_"),r=s[1],l=s[2];e.addClass("saving");var o="";a?"fail"==a?(e.removeClass("pass").addClass("fail"),o="fail"):"pass"==a?(e.removeClass("fail").addClass("pass"),o="pass"):(e.removeClass("fail").removeClass("pass"),o=""):e.hasClass("pass")?(e.removeClass("pass").addClass("fail"),o="fail"):e.hasClass("fail")?(e.removeClass("fail").removeClass("pass"),o=""):(e.removeClass("fail").addClass("pass"),o="pass");var d=i.saveKeyIndex++;return n||setTimeout(function(){if(e.data("save_key")==d){var a=t.replaceTags(t.replaceTags(t(".grade_submission_url").attr("href"),"user_id",r),"assignment_id",l),n={"submission[assignment_id]":l,"submission[user_id]":r,"submission[grade]":o};t.ajaxJSON(a,"POST",n,function(a){e.removeClass("saving");for(var n in a){var s=a[n].submission,r=t("#submission_"+s.user_id+"_"+s.assignment_id),l=i.toggleState(r,s.grade||"clear",!0);i.clearSavingState(r,l)}},function(){e.removeClass("saving")})}},1e3),e.data("save_key",d),d}},clearSavingState:function(e,t){e.data("save_key")==t&&(e.removeClass("saving"),e.data("save_key",null))},toggleColumnState:function(e,n){for(var s=a.cells["0,"+e].attr("id").split("_")[1],r={},l=1;l<a.rows.length;l++){var o=i.toggleState(a.cells[l+","+e],n,!0);r[l]=o}var d=function(){for(var t=1;t<a.rows.length;t++){{r[t]}i.clearSavingState(a.cells[t+","+e],r[t])}},c=t.replaceTags(t(".set_default_grade_url").attr("href"),"assignment_id",s),u=n;"pass"!=u&&"fail"!=u&&(u="");var _={"assignment[default_grade]":u,"assignment[overwrite_existing_grades]":"1"};t.ajaxJSON(c,"PUT",_,function(){d()},function(){d()})}};t(document).ready(function(){function r(){var a=t("#new_assignment_dialog .datetime_field").data("date");return a?e.t("default_attendance_title","Attendance %{date}",{date:e.l("#date.formats.default",a)}):""}var l=(t(".blank_attendance:first"),t(".pass_attendance:first"),t(".fail_attendance:first"),0);s&&s(t("#new_assignment_dialog select.assignment_group_select")),t(".add_assignment_link").click(function(a){a.preventDefault(),t("#new_assignment_dialog :text:not(.points_possible)").each(function(){t(this).val("")}),t("#new_assignment_dialog").dialog({title:e.t("titles.new_attendance_column","New Attendance Column")})}),t("#new_assignment_dialog .cancel_button").click(function(){t("#new_assignment_dialog").dialog("close")}),t("#add_assignment_form").formSubmit({beforeSubmit:function(){t(this).find(".submit_button").text(e.t("status.adding_assignment","Adding Assignment...")),t(this).find("button").attr("disabled",!0)},success:function(a){t(this).find(".submit_button").text(e.t("status.added_assignment","Added Assignment")),t(this).find("button").attr("disabled",!1);var n=a.assignment;location.href="#assignment_"+n.id,location.reload()},error:function(a){t(this).formErrors(a),t(this).find(".submit_button").text(e.t("errors.could_not_add_assignment","Add Assignment Failed")),t(this).find("button").attr("disabled",!1)}}),t("#new_assignment_dialog .title").change(function(){var e=t(this).val();e&&e!=r()?t(this).attr("edited",!0):t(this).removeAttr("edited")}),t("#new_assignment_dialog .datetime_field").change(function(){var e=t("#new_assignment_dialog .title").val(),a=t("#new_assignment_dialog .title").attr("edited");if(!e||!a){var n=t(this).data("date");n&&t("#new_assignment_dialog .title").val(r())}}),t(".datetime_field").datetime_field(),t(".help_link").click(function(a){a.preventDefault(),t("#attendance_how_to_dialog").dialog({width:400,title:e.t("titles.attendance_help","Attendance Help")})}),t(".submission").addClass("loading");var o=function(e,a,n){t.ajaxJSON(e,"GET",{},function(e){for(var s in a)for(var r in n)t("#submission_"+n[r]+"_"+a[s]).removeClass("loading");for(var s in e)if(e[s]&&e[s].submission){var l=e[s].submission.grade,o=t("#submission_"+e[s].submission.user_id+"_"+e[s].submission.assignment_id);o.removeClass("loading"),"pass"!=l&&"fail"!=l&&(l="clear");var d=i.toggleState(o,l,!0);i.clearSavingState(o,d)}},function(){5>l&&(l++,o(e))})},d=Math.round(200/(t("#attendance .student").length||1)),c=[],u=t(".gradebook_url").attr("href");setTimeout(function(){var e=[];t("#attendance .assignment").each(function(){var a=(t(this).attr("id")||"").split("_").pop();e.push(a)}),t("#attendance .student").each(function(){var a=(t(this).attr("id")||"").split("_").pop();a&&c.push(a),c.length>d&&(o(u+"?init=1&submissions=1&user_ids="+c.join(",")+"&assignment_ids="+e.join(","),e,c),c=[])}),c.length>0&&o(u+"?init=1&submissions=1&user_ids="+c.join(",")+"&assignment_ids="+e.join(","),e,c)},500),t("#comment_link").click(function(e){e.preventDefault(),e.stopPropagation()}),t(".options_dropdown").click(function(e){e.preventDefault()}),t("#attendance").bind("entry_over",function(e,t){{var a=t.cell.attr("id").split("_");a[1],a[2]}}).bind("entry_out",function(){}).bind("entry_click",function(e,t){t.trueEvent.preventDefault(),a.focus(t.cell.row,t.cell.column)}).bind("entry_focus",function(t,s){if(0==s.cell.row){var r={};r['<span class="ui-icon ui-icon-pencil">&nbsp;</span> '+n(e.t("options.edit_assignment","Edit Assignment"))]=function(){location.href="/"},r['<span class="ui-icon ui-icon-check">&nbsp;</span> '+n(e.t("options.mark_all_as_present","Mark Everyone Present"))]=function(){i.toggleColumnState(s.cell.column,"pass")},r['<span class="ui-icon ui-icon-close">&nbsp;</span> '+n(e.t("options.mark_all_as_absent","Mark Everyone Absent"))]=function(){i.toggleColumnState(s.cell.column,"fail")},r['<span class="ui-icon ui-icon-minus">&nbsp;</span> '+n(e.t("options.clear_attendance_marks","Clear Attendance Marks"))]=function(){i.toggleColumnState(s.cell.column,"clear")},s.cell.find(".options_dropdown").dropdownList({options:r})}else i.toggleState(s.cell);a.blur()}).bind("entry_blur",function(){}),t(document).keycodes("return p f del",function(e){if(!a.currentFocus&&a.currentHover&&!(t(e.target).closest(".ui-dialog").length>0)){var n=a.currentHover;"return"==e.keyString?n.hasClass("submission")&&a.focus(n.row,n.column):"p"==e.keyString||"f"==e.keyString||"del"==e.keyString}}),a.init(t("#attendance"),{borderSize:2,onViewable:function(){t("#attendance_loading_message").hide(),t(document).fragmentChange(function(e,n){if(n.length>1&&(n=n.substring(1)),n=n.replace(/\/|%2F/g,"_"),0==n.indexOf("student")||0==n.indexOf("assignment")||0==n.indexOf("submission")){var s=t("#"+n),i=a.position(s),r=i.row,l=i.column;a.scrollTo(r,l),s.trigger("mouseover")}})},onReady:function(){}})})}),function(){require(["datagrid","attendance"])}.call(this),define("compiled/bundles/attendance",function(){});