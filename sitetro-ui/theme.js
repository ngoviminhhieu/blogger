 window.onscroll = function() {myFunction()};function myFunction(){var winScroll = document.body.scrollTop || document.documentElement.scrollTop;var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;var scrolled = (winScroll / height) * 100;document.getElementById("progBar").style.width = scrolled + "%";}
var lazyReact = false; window.addEventListener('scroll', function(){if ((document.documentElement.scrollTop != 0 && lazyReact === false) || (document.body.scrollTop != 0 && lazyReact === false)) { (function() { var ad = document.createElement('script'); ad.setAttribute('type','text/javascript'); ad.async = true; ad.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=6100ee7d3b1d5d001213a440&product=inline-reaction-buttons'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ad, sc); })(); lazyReact = true; }}, true); 
function pageReload(){var n=document.querySelector("#noInternet .popBo .popBtn svg");null!=n&&n.classList.add("r"),setTimeout(function(){window.location.reload()},500)};window.addEventListener("offline",function(){document.querySelector("#noInternet").classList.remove("hidden"),document.querySelector("#toastNotif").innerHTML="<span>No internet connection!</span>"}),window.addEventListener("online",function(){document.querySelector("#noInternet").classList.add("hidden"),document.querySelector("#toastNotif").innerHTML="<span>Internet connection restored!</span>"});

Defer.js('https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js', 'jquery@3', 0, function(){var massgEmpty="Your Bookmark is empty!",articleLabel="All articles",link_articleLabel="/search";!function($){"use strict";var objToReturn,defaultOptions,getOptions,objToReturn,getIndexOfarticle,setAllkonten,addarticle,getAllkonten,updatePoduct,setarticle,cleararticle,removearticle,getTotalQuantity,OptionManager=(objToReturn={},defaultOptions={bookmarkIcon:"bookmarkIcon",bookmarkBadge:"show-bookmark",articleQuantity:"article-quantity",affixBookmarkIcon:!0,showBookmarkModal:!0,clickOnAddToBookmark:function(a){},clickOnbookmarkIcon:function(a,b){}},getOptions=function(a){var b=$.extend({},defaultOptions);return"object"==typeof a&&$.extend(b,a),b},objToReturn.getOptions=getOptions,objToReturn),articleManager=(objToReturn={},localStorage.konten=localStorage.konten?localStorage.konten:"",getIndexOfarticle=function(c){var a=-1,b=getAllkonten();return $.each(b,function(b,d){if(d.id==c){a=b;return}}),a},setAllkonten=function(a){localStorage.konten=JSON.stringify(a)},addarticle=function(b,c,d,e,f,g){var a=getAllkonten();a.push({id:b,title:c,link:d,summary:e,quantity:f,borkimage:g}),setAllkonten(a)},getAllkonten=function(){try{return JSON.parse(localStorage.konten)}catch(a){return[]}},updatePoduct=function(d,c){var a=getIndexOfarticle(d);if(a<0)return!1;var b=getAllkonten();return b[a].quantity=void 0===c?b[a].quantity:c,setAllkonten(b),!0},setarticle=function(b,c,d,a,f,e){return void 0===b?(console.error("id required"),!1):void 0===c?(console.error("title required"),!1):void 0===d?(console.error("link required"),!1):void 0===e?(console.error("borkimage required"),!1):void(a=void 0===a?"":a,updatePoduct(b)||addarticle(b,c,d,a,f,e))},cleararticle=function(){setAllkonten([])},removearticle=function(b){var a=getAllkonten();a=$.grep(a,function(a,c){return a.id!=b}),setAllkonten(a)},getTotalQuantity=function(){var a=0,b=getAllkonten();return $.each(b,function(c,b){a+=b.quantity}),a},objToReturn.getAllkonten=getAllkonten,objToReturn.updatePoduct=updatePoduct,objToReturn.setarticle=setarticle,objToReturn.cleararticle=cleararticle,objToReturn.removearticle=removearticle,objToReturn.getTotalQuantity=getTotalQuantity,objToReturn),loadBookmarkEvent=function(d){var a=OptionManager.getOptions(d),b=$("."+a.bookmarkIcon),e=$("."+a.bookmarkBadge),f=a.articleQuantity,c="cart-modal",g="cart-table",h="cart-empty-message",i="bookmarkIcon-affix";e.text(articleManager.getTotalQuantity()),$("#"+c).length||$("body").append('<div class="pop-area" id="'+c+'"><div class="pop-html"><div class="head-pop"><b>Bookmark</b><a class="close-btn buka-tutup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="15" y1="15" x2="9" y2="9"></line></svg></a></div><div class="body-content"><span class="table-responsive" id="'+g+'"></span></div></div></div>');var j=function(){var a=$("#"+g);a.empty();var b=articleManager.getAllkonten();$.each(b,function(){a.append('<table class="table"><tbody><tr title="'+this.summary+'" data-id="'+this.id+'"><td class="item-left img-left"><img width="140px" height="60px" src="'+this.borkimage+'"/></td><td class="item-left"><a href="'+this.link+'">'+this.title+'</a></td><td class="item-left" title="Remove" class="text-center" style="width: 30px;"><a class="btn-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(3.500000, 2.000000)"><path d="M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524"></path><line x1="16.8651429" y1="4.47980952" x2="0.714666667" y2="4.47980952"></line><path d="M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952"></path></g></svg></a></td></tr></tbody></table>')}),a.append(b.length?"":'<div role="alert" id="'+h+'"><div class="text-center"><svg class="line" viewBox="0 0 24 24"><g transform="translate(4.500000, 2.500000)"><path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z"></path></g></svg><center>'+massgEmpty+'</center><a class="btn btn-outline-info m-2" href="'+link_articleLabel+'">'+articleLabel+"</a></div></div>")},k=function(){j()};if(a.affixBookmarkIcon){var l=1*b.offset().top+1*b.css("height").match(/\d+/);$(window).scroll(function(){$(window).scrollTop()>=l?b.addClass(i):b.removeClass(i)})}b.click(function(){a.showBookmarkModal?k():a.clickOnbookmarkIcon(b,articleManager.getAllkonten())}),$(document).on("keypress","."+f,function(a){38!=a.keyCode&&40!=a.keyCode&&a.preventDefault()}),$(document).on({click:function(){var a=$(this).closest("tr"),b=a.data("id");a.hide(500,function(){articleManager.removearticle(b),j(),e.text(articleManager.getTotalQuantity())})}},".btn-remove")};$(document).on({click:function(){return $(".pop-area").toggleClass("open"),!1}},".buka-tutup"),$(function(){var goTohartomyBookmark=function(a){};eval(function(d,f,a,c,b,e){if(b=function(a){return(a<f?"":b(parseInt(a/f)))+((a%=f)>35?String.fromCharCode(a+29):a.toString(36))},!"".replace(/^/,String)){for(;a--;)e[b(a)]=c[a]||b(a);c=[function(a){return e[a]}],b=function(){return"\\w+"},a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('q h=["\\B\\e\\M","\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f","\\x\\y\\f\\g\\C\\k\\y\\k\\y\\F","\\N\\z\\g\\i\\k\\e\\j\\G\\C\\x\\e\\e\\f\\j\\g\\i\\f\\C\\x\\k\\m","\\H\\z\\A\\r\\k","\\F\\y\\H\\z","\\s\\t\\s","\\s\\t\\O","\\s\\t\\P","\\z\\g\\i\\k\\e\\j\\G\\n\\e\\e\\f\\j\\g\\i\\f","\\s\\t\\Q"];q D=[h[0],h[1],h[2],h[3]];(o(b,c){q d=o(a){R(--a){b[h[5]](b[h[4]]())}};d(++c)}(D,S));q u=o(a,b){a=a-I;q c=D[a];T c};$(u(h[U]))[h[9]]({\'\\x\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':u(h[6]),\'\\g\\r\\r\\A\\t\\n\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':!I,\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)},\'\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){V[u(h[8])](u(h[7]),a)},\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)}})',58,58,"||||||||||||||x6F|x6B|x61|_0x6a0a|x72|x6D|x74|x64|x6E|x42|function|x63|var|x66|x30|x78|_0x3889|x41|x4F|x62|x75|x68|x69|x6C|x2D|_0x4117|x65|x70|x79|x73|0x0|x49|x54|goTohartomyBookmark|x67|x2E|x33|x32|x31|while|0xd6|return|10|console".split("|"),0,{}))});var MyBookmark=function(a,b){var c=$(a),d=OptionManager.getOptions(b),e=$("."+d.bookmarkBadge);c.click(function(){d.clickOnAddToBookmark(c);var a=c.data("id"),b=c.data("title"),f=c.data("link"),g=c.data("summary"),h=c.data("quantity"),i=c.data("borkimage");articleManager.setarticle(a,b,f,g,h,i),e.text(articleManager.getTotalQuantity())})};$.fn.hartomyBookmark=function(a){return loadBookmarkEvent(a),$.each(this,function(){new MyBookmark(this,a)})}}(jQuery);}, false);
