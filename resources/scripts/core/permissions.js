!function(){function e(e){return $.list.contains(O,e,0)}function s(e){return e.equalsIgnoreCase($.botName)}function r(e){return e.equalsIgnoreCase($.ownerName)}function o(e){return 0==$.getUserGroupId(e)||$.isOwner(e)||$.isBot(e)}function n(e){return $.getUserGroupId(e)<=1||$.isOwner(e)||$.isBot(e)}function t(e){return $.getUserGroupId(e)<=2||$.isOwner(e)||$.isBot(e)}function u(e,s){return $.isAdmin(e)||null!=s&&"{}"!=s&&s.get("user-type").equalsIgnoreCase("mod")||$.isMod(e)}function a(e){var s;for(s in S)if(S[s][0].equalsIgnoreCase(e))return!0;return!1}function p(e,s){return null!=s&&"{}"!=s&&s.get("subscriber").equalsIgnoreCase("1")||$.isSub(e)}function g(e){return null!=e&&"{}"!=e&&e.get("turbo").equalsIgnoreCase("1")||!1}function d(e){return 4==$.getUserGroupId(e)}function f(e){return 5==$.getUserGroupId(e)}function l(e){return $.getUserGroupId(e)<=6||$.isOwner(e)||$.isBot(e)}function b(e){return $.list.contains(q,e.toLowerCase(),0)}function m(e){return $.list.contains(B,e.toLowerCase())}function c(e){return e=e.toLowerCase(),$.inidb.exists("group",e)?parseInt($.inidb.get("group",e)):7}function C(e){return $.getGroupNameById($.getUserGroupId(e))}function w(e){return e=parseInt(e),$.inidb.exists("groups",e)?$.inidb.get("groups",e):P[7]}function h(e){var s;for(s=0;s<P.length;s++)if(P[s].equalsIgnoreCase(e.toLowerCase()))return s;return 7}function I(e){return parseInt($.inidb.get("grouppoints",$.getUserGroupName(e)))}function y(e,s){$.userExists(e.toLowerCase())&&$.inidb.set("group",e.toLowerCase(),s)}function v(e,s){$.setUserGroupById(e,$.getGroupIdByName(s))}function x(){var e,s=$.inidb.GetKeyList("groups","");P=[];for(e in s)P[parseInt(s[e])]=$.inidb.get("groups",s[e])}function L(e){var s,i=[];for(s in O)e?$.getUserGroupId(O[s][0])<=e&&i.push(O[s][0]):i.push(O[s][0]);return i}function G(e){e=(e+"").toLowerCase();for(i in S)if(S[i][0].equalsIgnoreCase(e))return;S.push([e,$.systemTime()+1e4])}function M(e){var s;e=(e+"").toLowerCase();for(i in S)S[i][0].equalsIgnoreCase(e)||s.push([S[i][0],S[i][1]]);S=s}function U(e){e=(e+"").toLowerCase(),$.bot.isModuleEnabled("./handlers/subscribeHandler.js")&&($.getIniDbBoolean("subscribed",e,!1)&&!a(e)?($.setIniDbBoolean("subscribed",e,!1),$.inidb.exists("preSubGroup",e)&&!$.isMod(e)?($.inidb.set("group",e,$.inidb.get("preSubGroup",e)),$.inidb.del("preSubGroup",e)):$.inidb.set("group",e,7)):!getIniDbBoolean("subscribed",e,!1)&&a(e)&&($.setIniDbBoolean("subscribed",e,!0),t(e)||($.inidb.set("preSubGroup",e,c(e)),v(e,"Subscriber"))))}function N(){P[0]&&"Caster"==P[0]||(P[0]="Caster",$.inidb.set("grouppoints","Caster","-1"),$.inidb.set("grouppointsoffline","Caster","-1"),$.inidb.set("groups","0","Caster")),P[1]&&"Administrator"==P[1]||(P[1]="Administrator",$.inidb.set("grouppoints","Administrator","-1"),$.inidb.set("grouppointsoffline","Administrator","-1"),$.inidb.set("groups","1","Administrator")),P[2]&&"Moderator"==P[2]||(P[2]="Moderator",$.inidb.set("grouppoints","Moderator","-1"),$.inidb.set("grouppointsoffline","Moderator","-1"),$.inidb.set("groups","2","Moderator")),P[3]&&"Subscriber"==P[3]||(P[3]="Subscriber",$.inidb.set("grouppoints","Subscriber","-1"),$.inidb.set("grouppointsoffline","Subscriber","-1"),$.inidb.set("groups","3","Subscriber")),P[4]&&"Donator"==P[4]||(P[4]="Donator",$.inidb.set("grouppoints","Donator","-1"),$.inidb.set("grouppointsoffline","Donator","-1"),$.inidb.set("groups","4","Donator")),P[5]&&"Hoster"==P[5]||(P[5]="Hoster",$.inidb.set("grouppoints","Hoster","-1"),$.inidb.set("grouppointsoffline","Hoster","-1"),$.inidb.set("groups","5","Hoster")),P[6]&&"Regular"==P[6]||(P[6]="Regular",$.inidb.set("grouppoints","Regular","-1"),$.inidb.set("grouppointsoffline","Regular","-1"),$.inidb.set("groups","6","Regular")),P[7]&&"Viewer"==P[7]||(P[7]="Viewer",$.inidb.set("grouppoints","Viewer","-1"),$.inidb.set("grouppointsoffline","Viewer","-1"),$.inidb.set("groups","7","Viewer"))}var P=[],q=[],S=[],B=[],O=[],A=$.systemTime();$.bind("ircJoinComplete",function(e){var s,i=e.getChannel().getNicks().iterator();for(A=$.systemTime();i.hasNext();)s=i.next().toLowerCase(),$.userExists(s)||O.push([s,$.systemTime()])}),$.bind("ircChannelJoin",function(e){var s=e.getUser().toLowerCase();$.user.isKnown(s)||$.setIniDbBoolean("visited",s,!0),A=$.systemTime(),$.userExists(s)||O.push([s,$.systemTime()])}),$.bind("ircChannelLeave",function(e){var s,i=e.getUser().toLowerCase();for(s in O)O[s][0].equalsIgnoreCase(i)&&(O.splice(s,1),U(i));for(s in q)q[s][0].equalsIgnoreCase(i)&&(q.splice(s,1),U(i))}),$.bind("ircChannelUserMode",function(e){var s,i=e.getUser().toLowerCase();if(e.getMode().equalsIgnoreCase("o"))if(e.getAdd())$.hasModeO(i)||($.isOwner(i)?(q.push([i,0]),$.inidb.set("group",i,0)):$.isAdmin(i)?(q.push([i,1]),$.inidb.set("group",i,1)):(q.push([i,2]),$.inidb.set("group",i,2)));else for(s in q)q[s][0].equalsIgnoreCase(i)&&(q.splice(s,1),U(i))}),$.bind("ircPrivateMessage",function(e){var s,i,r=e.getSender().toLowerCase(),o=e.getMessage().toLowerCase().trim(),n="the moderators of this room are: ",t=[];if(r.equalsIgnoreCase("jtv")){if(o.indexOf(n)>-1){s=o.replace(n,"").split(", "),B=[];for(i in s)B.push(s[i]);$.saveArray(B,"addons/mods.txt",!1)}if(o.indexOf("specialuser")>-1&&(s=o.split(" "),s[2].equalsIgnoreCase("subscriber"))){for(i in S)if(S[i][0].equalsIgnoreCase(s[1]))return void(S[i][1]=$.systemTime()+1e4);S.push([s[1],$.systemTime()+1e4]);for(i in S)t.push(S[i][0]);$.saveArray(t,"addons/subs.txt",!1)}}}),$.bind("command",function(e){var s=e.getSender().toLowerCase(),i=e.getCommand(),r=e.getArgs();if(i.equalsIgnoreCase("users")&&(O.length>20?$.say($.whisperPrefix(s)+$.lang.get("permissions.current.listtoolong",O.length)):$.say($.whisperPrefix(s)+$.lang.get("permissions.current.users",L().join(", ")))),i.equalsIgnoreCase("mods")){var o=L(2);o.length>20?$.say($.whisperPrefix(s)+$.lang.get("permissions.current.listtoolong",o.length)):$.say($.whisperPrefix(s)+$.lang.get("permissions.current.mods",o.join(", ")))}if(i.equalsIgnoreCase("group")){if(!$.isModv3(s,e.getTags())||!r[0])return void $.say($.whisperPrefix(s)+$.lang.get("permissions.group.self.current",$.getUserGroupName(s)));var n=r[0],t=parseInt(r[1]);if(r.length<2||isNaN(t)||$.outOfRange(t,0,P.length-1))return void $.say($.whisperPrefix(s)+$.lang.get("permissions.group.usage"));if(t<$.getUserGroupId(s))return void $.say($.whisperPrefix(s)+$.lang.get("permissions.group.set.error.abovegroup"));if(t==$.getUserGroupId(s))return void $.say($.whisperPrefix(s)+$.lang.get("permissions.group.set.error.samegroup"));$.inidb.set("group",n.toLowerCase(),t),$.say($.whisperPrefix(s)+$.lang.get("permissions.group.set.success",$.username.resolve(n),w(t)+" ("+t+")"))}if(i.equalsIgnoreCase("grouppoints")){var t,u,a;if(!r[0])return void $.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.usage"));if(t=parseInt(r[0]),isNaN(t)||$.outOfRange(t,0,P.length-1))return void $.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.usage"));if(!r[1])return void $.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.showgroup",t,$.inidb.exists("grouppoints",w(t))?$.inidb.get("grouppoints",w(t)):"(undefined)",$.pointNameMultiple,$.inidb.exists("grouppointsoffline",w(t))?$.inidb.get("grouppointsoffline",w(t)):"(undefined)",$.pointNameMultiple));if(u=r[1],"online"!=u.toLowerCase()&&"offline"!=u.toLowerCase())return void $.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.usage"));if(!r[2])return void("online"==u.toLowerCase()?$.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.showgroup.online",t,$.inidb.exists("grouppoints",w(t))?$.inidb.get("grouppoints",w(t)):"(undefined)",$.pointNameMultiple)):"offline"==u.toLowerCase()&&$.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.showgroup.offline",t,$.inidb.exists("grouppointsoffline",w(t))?$.inidb.get("grouppointsoffline",w(t)):"(undefined)",$.pointNameMultiple)));if(a=parseInt(r[2]),isNaN(a))return void $.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.usage"));0>a&&(a=-1),"online"==u.toLowerCase()?($.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.set.online",t,a,$.pointNameMultiple)),$.inidb.set("grouppoints",w(t),a)):"offline"==u.toLowerCase()&&($.say($.whisperPrefix(s)+$.lang.get("permissions.grouppoints.set.offline",t,a,$.pointNameMultiple)),$.inidb.set("grouppointsoffline",w(t),a))}}),x(),N(),$.bind("initReady",function(){$.registerChatCommand("./core/permissions.js","group",7),$.registerChatCommand("./core/permissions.js","grouppoints",1),$.registerChatCommand("./core/permissions.js","users",7),$.registerChatCommand("./core/permissions.js","mods",7)}),$.casterMsg=$.lang.get("cmd.casteronly"),$.adminMsg=$.lang.get("cmd.adminonly"),$.modMsg=$.lang.get("cmd.modonly"),$.userGroups=P,$.modeOUsers=q,$.subUsers=S,$.modListUsers=B,$.users=O,$.lastJoinPart=A,$.userExists=e,$.isBot=s,$.isOwner=r,$.isCaster=o,$.isAdmin=n,$.isMod=t,$.isModv3=u,$.isOwner=r,$.isSub=a,$.isSubv3=p,$.isTurbo=g,$.isDonator=d,$.isHoster=f,$.isReg=l,$.hasModeO=b,$.hasModList=m,$.getUserGroupId=c,$.getUserGroupName=C,$.getGroupNameById=w,$.getGroupIdByName=h,$.getGroupPointMultiplier=I,$.setUserGroupById=y,$.setUserGroupByName=v,$.addSubUsersList=G,$.delSubUsersList=M,$.restoreSubscriberStatus=U}();
