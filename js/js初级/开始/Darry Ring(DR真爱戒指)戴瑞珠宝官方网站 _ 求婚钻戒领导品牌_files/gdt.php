;(function(global){
    global.Ta=global.Ta||{};
    Ta.hack=function(){
        return {
            params:'',
            conf:{sid:34224265,pf:1,logo:255,hot:{}}        };
    };
})(this);

(function(g,k){function v(b){b+="";var a,c,d,e,h,f;d=b.length;c=0;for(a="";c<d;){e=b.charCodeAt(c++)&255;if(c==d){a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>2);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&3)<<4);a+="==";break}h=b.charCodeAt(c++);if(c==d){a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>2);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&3)<<4|(h&240)>>
4);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((h&15)<<2);a+="=";break}f=b.charCodeAt(c++);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>2);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&3)<<4|(h&240)>>4);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((h&15)<<2|(f&192)>>6);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f&63)}return a}function m(b){return(b=
document.cookie.match(new RegExp("(?:^|;\\s)"+b+"=(.*?)(?:;\\s|$)")))?b[1]:""}function q(b,a,c){b=b+"="+a+";path=/;domain=";a=window.location.host;var d={"com.cn":1,"net.cn":1,"gov.cn":1,"com.hk":1,"co.nz":1,"org.cn":1,"edu.cn":1},e=a.split(".");2<e.length&&(a=(d[e.slice(-2).join(".")]?e.slice(-3):e.slice(-2)).join("."));document.cookie=b+a+(c?";expires="+c:"")}function n(b){var a,c,d,e={};void 0===b?(d=window.location,b=d.host,a=d.pathname,c=d.search.substr(1),d=d.hash):(d=b.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i)||
[],b=d[1],a=d[2],c=d[3],d=d[4]);if(c)for(var h=c.split("&"),f=0,g=h.length;f<g;f++)if(-1!=h[f].indexOf("=")){var l=h[f].indexOf("="),k=h[f].slice(0,l),l=h[f].slice(l+1);e[k]=l}return{host:b,path:a,search:c,hash:d,param:e}}function r(b){return(b||"")+Math.round(2147483647*(Math.random()||.5))*+new Date%1E10}function p(b,a){var c=document.createElement("script"),d=document.getElementsByTagName("script")[0];c.src=b;c.type="text/javascript";c.onload=c.onerror=c.onreadystatechange=function(){/loaded|complete|undefined/.test(c.readyState)&&
(c.onload=c.onerror=c.onreadystatechange=null,c.parentNode.removeChild(c),c=void 0,a())};d.parentNode.insertBefore(c,d)}function w(){var b=n(),a={dm:b.host,pvi:"",si:"",url:b.path,arg:encodeURIComponent(b.search||""),ty:1};a.pvi=function(){var c=m("pgv_pvi");c||(a.ty=0,c=r(),q("pgv_pvi",c,"Sun, 18 Jan 2038 00:00:00 GMT;"));return c}();a.si=function(){var a=m("pgv_si");a||(a=r("s"),q("pgv_si",a));return a}();return a}function x(){var b=n(document.referrer),a=n();return{rdm:b.host,rurl:b.path,rarg:encodeURIComponent(b.search||
""),adt:a.param.ADTAG||a.param.adtag}}function y(){try{var b=navigator,a=screen||{width:"",height:"",colorDepth:""},c=document.body,d=a.width+"x"+a.height,e=a.colorDepth+"-bit",h=(b.language||b.userLanguage).toLowerCase(),f=b.javaEnabled()?1:0,g=(new Date).getTimezoneOffset()/60,a="";c&&c.addBehavior&&(c.addBehavior("#default#clientCaps"),a=c.connectionType);var c={fl:"",scr:d,scl:e,lg:h,jv:f,tz:g,ct:a},l,k,m,n;if((l=b.plugins)&&(k=l.length))for(b=0;b<k;b++){if(m=l[b].description.match(/Shockwave Flash ([\d\.]+) \w*/))c.fl=
m[1]}else n=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"),c.fl=n.replace(/^.*\s+(\d+)\,(\d+).*$/,"$1.$2")}catch(p){return{}}return c}function z(){var b={};if("undefined"!=typeof _taadHolders&&0<_taadHolders.length)for(var a=0,c=_taadHolders,d=c.length;a<d;a++)b[c[a]]=b[c[a]]?b[c[a]]+1:1;var a=[],e;for(e in b)b.hasOwnProperty(e)&&a.push(e+"*"+b[e]);return{ext:"adid="+a.join(":")}}function A(){var b=[],a=m(s.gdt.c_id);a&&b.push("ty="+s.gdt.key+";ck=1;id="+a);return{pf:b.join("|")}}
function t(b){b=b||{};b.conf&&function(){var a=b.conf,c;for(c in a)a.hasOwnProperty(c)&&(g[c]=a[c])}();g.sid&&(Ta[g.sid]||p("http://t.gdt.qq.com/conv/brand/"+g.sid+"/script?url="+encodeURIComponent(location.href),function(){for(var a=[],c=0,d=[w(),x(),{r2:g.sid,r3:"undefined"==typeof _speedMark?"-1":new Date-_speedMark,r4:g.pf||1},y(),z(),A(),{random:+new Date}],e=d.length;c<e;c++)for(var h in d[c])d[c].hasOwnProperty(h)&&a.push(h+"="+(d[c][h]||""));b.params&&a.push(b.params);var a=Ta.src=("https:"==
document.location.protocol?"https://pingtas":"http://pingtcss")+".qq.com/pingd?"+a.join("&"),f=new Image;Ta[g.sid]=f;f.onload=f.onerror=f.onabort=function(){f=f.onload=f.onerror=f.onabort=null;Ta[g.sid]=!0};f.src=a;(1*!g.pf||g.hot.isValid)&&B(a);g.logo&&255!=g.logo&&C(g.logo)}))}function u(b,a){var c=Ta.src.replace(/ext=[^&]*/,function(){return"ext="+("evtid"==a?"ty=0;evtid=":"adid=")+b}).replace(/r2=([^&]*)/,function(a,b){return"r2=a"+b});(new Image(1,1)).src=c}function B(b){var a=window.location,
c=a.host+a.pathname,d=a.pathname,e=function(){p(("https:"==document.location.protocol?"https://":"http://")+"tajs.qq.com/ping_hotclick_min.js",function(){window.hotclick&&(new hotclick(b)).watchClick()})};1*g.pf?(new RegExp(c)).test(g.hot.url)&&e():(a=g.sid,p("http://tcss.qq.com/heatmap/"+a%100+"/"+v(a)+".js?random="+ +new Date,function(){var a;if(window._Cnf&&(a=window._Cnf.url)){a=a.split("|");for(var b=0;b<a.length;b++)if(a[b]==d){e();break}}}))}function C(b){var a={9:"\u817e\u8baf\u5206\u6790",
10:"\u7f51\u7ad9\u7edf\u8ba1",df:'<img src="'+(("https:"==document.location.protocol?"https:":"http:")+"//tajs.qq.com/icon/toss_"+b+".gif")+'" border="0" />'};document.write(['<a href="http://ta.qq.com?ADTAG=FROUM.FOOTER.CLICK.ICON" title="\u817e\u8baf\u5206\u6790" target="_blank">',a[b]||a.df,"</a>"].join(""))}var s={afs:{key:1,id:"ssid",c_id:"pgv_afsid",fr:"hash"},afc:{key:2,id:"__tacid",c_id:"pgv_afcid",fr:"param"},gdt:{key:11,id:"qz_gdt",c_id:"pgv_gdtid",fr:"param"}};k.pgvSendClick=u;k.taClick=
u;k.Ta=k.Ta||{};Ta.pgv=t;!Ta.async&&t(Ta.hack?Ta.hack():"")})({sid:"",pf:"",hot:{url:"",isValid:!1}},this);