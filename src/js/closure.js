function y(){function m(a,c){var d=a.filter(function(a){return(new RegExp("\\b"+c+"\\b")).test(a)})[0];return d?d.split(":"):-1}function v(a){0!==a&&(a=32-Math.ceil(Math.log(a)/Math.log(2)));return a}function w(){var a=r[0].split("."),c=r[1].split(".");return a.slice(0,-1).join(".")+"."+(parseInt(a[3],10)+1)+" - "+c.slice(0,-1).join(".")+"."+(parseInt(c[3],10)-1)}var s="0.0.0.0:0 128.0.0.0:1 192.0.0.0:2 224.0.0.0:3 240.0.0.0:4 248.0.0.0:5 252.0.0.0:6 254.0.0.0:7 255.0.0.0:8 255.128.0.0:9 255.192.0.0:10 255.224.0.0:11 255.240.0.0:12 255.248.0.0:13 255.252.0.0:14 255.254.0.0:15 255.255.0.0:16 255.255.128.0:17 255.255.192.0:18 255.255.224.0:19 255.255.240.0:20 255.255.248.0:21 255.255.252.0:22 255.255.254.0:23 255.255.255.0:24 255.255.255.128:25 255.255.255.192:26 255.255.255.224:27 255.255.255.240:28 255.255.255.248:29 255.255.255.252:30 255.255.255.254:31 255.255.255.255:32".split(" "), g=document.form.submask.value,n=document.form.ip.value.split("."),x=document.form.numhost.value,b,h,f,r,e,t,u,k,l,p,q;b=m(s,g);""===g?(b=v(x),g=m(s,b)[0]):(g=b[0],b=b[1]);h=g.split(".");submaskSplitLength=h.length;for(e=0;e<submaskSplitLength;e++)if("255"!==h[e]){f=e;break}e=function(a){a=a||0;2<=a&&(a=Math.pow(2,32-a));return a}(b);t=~~Math.pow(2,b-(f?3>f?Math.pow(2,f+2):24:0))+" subnets";u=function(a){if(!a||0>a)return"No IP Entered";if(128>a)return"Class A";if(192>a)return"Class B";if(224>a)return"Class C"; if(240>a)return"Class D";if(256>a)return"Class E"}(n[0]);k=function(a){var c;(c=a%8)?(c=Math.pow(2,8-c),a=Math.floor(n[f]/c)*c,c=a+(c-1)):32===a||31===a?c=a="N/A":(c=128,a=Math.floor(n[f]/c)*c,c="255");return[a,c]}(parseInt(b,10));l=function(a,c){var d,b;b=d="";for(var e=0;e<f;e++)d+=n[e]+".",b+=n[e]+".";d+=a;b+=c;0===f&&(d+=".0.0.0",b+=".255.255.255");1===f&&(d+=".0.0",b+=".255.255");2===f&&(d+=".0",b+=".255");return r=[d,b]}(k[0],k[1]);k=l[0];l=l[1];h=h.map(function(a){return 255-a}).join("."); p=document.getElementById("tablecidr");p.innerHTML=b;q=document.getElementById("tablenumhosts");q.innerHTML=e+" hosts ("+(e-2)+" usable)";tablebinary=document.getElementById("tablebinary");tablebinary.innerHTML=function(a){for(var b="";b.length<a;)b+="1";for(var d="";d.length<32-a;)d+="0";return b+d}(b);document.getElementById("tablesubmask").innerHTML=g;document.getElementById("tableipclass").innerHTML=u;document.getElementById("tablenetworkid").innerHTML=k;document.getElementById("tablebroadcastaddress").innerHTML= l;document.getElementById("tablenumsubnets").innerHTML=t;document.getElementById("tablewildcardmask").innerHTML=h;document.getElementById("tablenetworkrange").innerHTML=w();document.getElementById("hidden").innerHTML="cidr number: "+b+" submask: "+g+" class: "+u+" hosts: "+e+" usable hosts: "+(e-2)+" network id "+k+" broadcast address: "+l+" subnets: "+t+" wildcard: "+h+" network range: "+w();cfh=v(x);smfh=m(s,cfh)[0];document.getElementById("tablesubmaskforhosts").innerHTML=cfh+" / "+smfh;p.innerHTML= "/"+p.innerHTML;q.innerHTML=q.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g,",");tablebinary.innerHTML=tablebinary.innerHTML.replace(/\B(?=(\d{8})+(?!\d))/g,".")}window.onload=function(){document.getElementsByTagName("form")[0].onsubmit=function(m){m.preventDefault();y()}};function scrollIntoView(){document.getElementById("info").scrollIntoView(alignToTop)};