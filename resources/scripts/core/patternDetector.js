(function(){var e={link:new RegExp("((?:(http|https|Http|Https|rtsp|Rtsp):\\/\\/(?:(?:[a-z0-9\\$\\-\\_\\.\\+\\!\\*\\'\\(\\)"+"\\,\\;\\?\\&\\=]|(?:\\%[a-fA-F0-9]{2})){1,64}(?:\\:(?:[a-z0-9\\$\\-\\_"+"\\.\\+\\!\\*\\'\\(\\)\\,\\;\\?\\&\\=]|(?:\\%[a-fA-F0-9]{2})){1,25})?\\@)?)?"+"((?:(?:[a-z0-9][a-z0-9\\-]{0,64}\\.)+"+"(?:"+"(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])"+"|(?:biz|b[abdefghijmnorstvwyz])"+"|(?:cat|com|coop|c[acdfghiklmnoruvxyz])"+"|d[ejkmoz]"+"|(?:edu|e[cegrstu])"+"|f[ijkmor]"+"|(?:gov|g[abdefghilmnpqrstuwy])"+"|h[kmnrtu]"+"|(?:info|int|i[delmnoqrst])"+"|(?:jobs|j[emop])"+"|k[eghimnrwyz]"+"|l[abcikrstuvy]"+"|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])"+"|(?:name|net|n[acefgilopruz])"+"|(?:org|om)"+"|(?:pro|p[aefghklmnrstwy])"+"|qa"+"|r[eouw]"+"|s[abcdeghijklmnortuvyz]"+"|(?:tel|travel|t[cdfghjklmnoprtvwz])"+"|u[agkmsyz]"+"|v[aceginu]"+"|w[fs]"+"|y[etu]"+"|z[amw]))"+"|(?:(?:25[0-5]|2[0-4]"+"[0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\\.(?:25[0-5]|2[0-4][0-9]"+"|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\\.(?:25[0-5]|2[0-4][0-9]|[0-1]"+"[0-9]{2}|[1-9][0-9]|[1-9]|0)\\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}"+"|[1-9][0-9]|[0-9])))"+"(?:\\:\\d{1,5})?)"+"(\\/(?:(?:[a-z0-9\\;\\/\\?\\:\\@\\&\\=\\#\\~"+"\\-\\.\\+\\!\\*\\'\\(\\)\\,\\_])|(?:\\%[a-fA-F0-9]{2}))*)?"+"(?:\\b|$)"+"|(magnet:|mailto:|ed2k://|irc://|ircs://|skype:|ymsgr:|xfire:|steam:|aim:|spotify:)","i"),repeatedSeq:/(.)(\1+)/g,nonAlphaSeq:/([^a-z ])(\1+)/g,nonAlphaCount:/([^a-z ])/g},t="";function r(r,a){try{var g=r.getMessage();g=n(g,a);t=e.link.exec(g)[0];$.consoleLn(">> Matched link on message from "+r.getSender()+": "+t);$.log("patternDetector","Matched link on message from "+r.getSender()+": "+t);return true}catch(c){return false}}function a(){return t}function n(e,t){e=e+"";e.replace(/"/g,"").replace(/--/g,".").replace(/\[dot]/g,".").replace(/<dot>/g,".").replace(/\{dot}/g,".").replace(/\(dot\)/g,".");if(t){e.replace(/\sdot\s/g,".").replace(/,/g,".").replace(/\|-\|/g,"h").replace(/\|_\|/g,"u").replace(/\\\//g,"v").replace(/0/g,"o").replace(/1/g,"i").replace(/3/g,"e").replace(/5/g,"s").replace(/7/g,"t").replace(/8/g,"b").replace(/\|\)/g,"d").replace(/\|\)/g,"d").replace(/\(\)/g,"o").replace(/\(/g,"c").replace(/\$/g,"s").replace(/\/-\\/g,"a").replace(/\|\\\/\|/g,"m").replace(/\|\/\|/g,"n").replace(/\|\\\|/g,"n").replace(/\s\./g,".").replace(/\.\s/g,".").replace(/\.\./g,".")}return e}function g(t){try{var r=t.getMessage()+"",a=r.match(e.repeatedSeq);a.sort(function(e,t){return e.length<t.length?1:-1});return a.slice(0,1)[0].length}catch(n){return 0}}function c(t){try{var r=t.getMessage()+"",a=r.match(e.nonAlphaSeq);a.sort(function(e,t){return e.length<t.length?1:-1});return a.slice(0,1)[0].length}catch(n){return 0}}function l(t){var r=t.getMessage()+"",a=r.match(e.nonAlphaCount);try{a.sort(function(e,t){return e.length<t.length?1:-1});return a.length}catch(n){return 0}}$.patternDetector={hasLinks:r,getLongestRepeatedSequence:g,getLongestNonLetterSequence:c,getNumberOfNonLetters:l,getLastFoundLink:a}})();