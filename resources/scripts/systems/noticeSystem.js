!function(){function e(){var e,i=$.inidb.GetKeyList("notices",""),n=0;for(e=0;e<i.length;e++)$.inidb.set("tempnotices",i[e],$.inidb.get("notices",i[e]));for($.inidb.RemoveFile("notices"),i=$.inidb.GetKeyList("tempnotices",""),e=0;e<i.length;e++)$.inidb.set("notices","message_"+n,$.inidb.get("tempnotices",i[e])),n++;$.inidb.RemoveFile("tempnotices")}function i(){var e=Packages.me.mast3rplan.phantombot.event.EventBus,i=Packages.me.mast3rplan.phantombot.event.command.CommandEvent,n=$.inidb.get("notices","message_"+r);r++,r>=a&&(r=0),n.startsWith("command:")?(n=n.substring(8),e.instance().postCommand(new i($.botName,n," "))):$.say(n)}var n=$.inidb.exists("noticeSettings","reqmessages")?parseInt($.inidb.get("noticeSettings","reqmessages")):25,t=$.inidb.exists("noticeSettings","interval")?parseInt($.inidb.get("noticeSettings","interval")):10,s=$.inidb.exists("noticeSettings","noticetoggle")?$.getIniDbBoolean("noticeSettings","noticetoggle"):!1,a=parseInt($.inidb.GetKeyList("notices","").length)?parseInt($.inidb.GetKeyList("notices","").length):0,o=0,r=0;$.bind("ircChannelMessage",function(){o++}),$.bind("command",function(i){var o=i.getSender(),r=i.getCommand(),g=i.getArguments().trim(),c=i.getArgs(),d=c[0];if(r.equalsIgnoreCase("notice")){if(!$.isAdmin(o))return void $.say($.whisperPrefix(o)+$.adminMsg);if(0==c.length)return void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-usage"));if(d.equalsIgnoreCase("get"))return c.length<2?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-get-usage",a)):$.inidb.exists("notices","message_"+c[1])?void $.say($.inidb.get("notices","message_"+c[1])):void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-error-notice-404"));if(d.equalsIgnoreCase("edit"))return c.length<3?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-edit-usage",a)):$.inidb.exists("notices","message_"+c[1])?(g=g.replace(d+"","").trim(),$.inidb.set("notices","message_"+c[1],g),void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-edit-success"))):void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-error-notice-404"));if(d.equalsIgnoreCase("remove"))return c.length<2?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-remove-usage",a)):$.inidb.exists("notices","message_"+c[1])?($.inidb.del("notices","message_"+c[1]),a--,e(),void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-remove-success"))):void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-error-notice-404"));if(d.equalsIgnoreCase("add"))return c.length<2?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-add-usage")):(g=g.replace(d+"","").trim(),$.inidb.set("notices","message_"+a,g),a++,void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-add-success")));if(d.equalsIgnoreCase("interval"))return c.length<2?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-interval-usage")):parseInt(c[1])<2?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-interval-404")):($.inidb.set("noticeSettings","interval",c[1]),t=parseInt(c[1]),void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-inteval-success")));if(d.equalsIgnoreCase("req"))return c.length<2?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-req-usage")):parseInt(c[1])<1?void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-req-404")):($.inidb.set("noticeSettings","reqmessages",c[1]),n=parseInt(c[1]),void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-req-success")));if(d.equalsIgnoreCase("config"))return void $.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-config",s,t,n,a));d.equalsIgnoreCase("toggle")&&(s?(s=!1,$.inidb.set("noticeSettings","noticetoggle","false"),$.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-disabled"))):(s=!0,$.inidb.set("noticeSettings","noticetoggle","true"),$.say($.whisperPrefix(o)+$.lang.get("noticehandler.notice-enabled")))),d.equalsIgnoreCase("reload")&&e()}}),setInterval(function(){s&&$.bot.isModuleEnabled("./systems/noticeSystem.js")&&a>0&&o>=n&&(i(),o=0)},60*t*1e3),$.bind("initReady",function(){$.bot.isModuleEnabled("./systems/noticeSystem.js")&&$.registerChatCommand("./systems/noticeSystem.js","notice")})}();
