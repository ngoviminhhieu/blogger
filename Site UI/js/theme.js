
    var e, s = "https://anewplus.blogspot.com/";
    function o() {
        window.alert("Invalid License Key"), document.body.innerHTML = "", window.location.href = s
    }
    try {
        e = atob(licensekey)
    } catch (e) {
        try {
            o()
        } catch (e) {
            window.location.href = s
        }
    }
    var n = e.split("-"),
        l = n[0];
    if (void 0 === (n = n[1])) try {
        o()
    } catch (e) {
        window.location.href = s
    }
    str = [n], getAJ({
        url: "https://script.google.com/macros/s/AKfycbwMYHy3bwYLyP-UoLmfI_oIJmyMqzZYR7dB1QiOjAHnmZuDnrGD89GuwoPGsoXC8CF0/exec",
        async: !0,
        success: function (e) {
            var n = JSON.parse(e).user[str];
            if (void 0 === n) try {
                o()
            } catch (e) {
                window.location.href = s
            }
            var u = n.id,
                d = n.code,
                a = n.url;
            try {
                if (blogID + l === u + d && 0 != function (e) {
                        if (-1 == window.location.pathname.indexOf("/b/preview") && -1 == window.location.pathname.indexOf("/b/blog-preview")) return e == window.location.hostname
                    }(a)) return void console.log('Licensed to: ' + n.name + ', Licensed for: ' + n.url);
                try {
                    o()
                } catch (e) {
                    window.location.href = s
                }
            } catch (e) {
                try {
                    o()
                } catch (e) {
                    window.location.href = s
                }
            }
        }
    })
    function getAJ(e) {
        var r = new XMLHttpRequest;
        try {
            r = new XMLHttpRequest
        } catch (t) {
            try {
                r = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {
                try {
                    r = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                    return console.warn("Something went wrong!"), !1
                }
            }
        }
        r.onreadystatechange = function () {
            var n;
            4 == r.readyState && (200 == r.status ? (n = r.responseText, e.success(n)) : "function" == typeof e.error && e.error(r))
        }, r.open("GET", e.url, e.async), r.send()
    }

var progressPath=document.querySelector(".scrollProgress"),pathLength=progressPath.getTotalLength();progressPath.style.transition=progressPath.style.WebkitTransition="none",progressPath.style.strokeDasharray=pathLength+" "+pathLength,progressPath.style.strokeDashoffset=pathLength,progressPath.getBoundingClientRect(),progressPath.style.transition=progressPath.style.WebkitTransition="stroke-dashoffset 10ms linear";var updateProgress=function(){var a=document.documentElement.scrollTop,b=document.documentElement.scrollHeight-window.innerHeight;progressPath.style.strokeDashoffset=pathLength-a*pathLength/b};updateProgress(),window.addEventListener("scroll",updateProgress);var offset=0,duration=550;window.onscroll=function(){document.documentElement.scrollTop>offset?document.querySelector(".tTpB").classList.add("vbl"):document.querySelector(".tTpB").classList.remove("vbl")},document.querySelector(".tTpB").onclick=function(){return document.querySelector("html, body").animate(window.scroll({top:["8px","280px"]},{duration:2500,easing:"ease-in-out",iterations:1})),!1}

// source code : https://www.hartomy.com/2020/09/cara-membuat-tombol-bookmark-di-blogger.html
var massgEmpty="Danh sách bài viết yêu thích không có sẵn",articleLabel="Tất cả nội dung",link_articleLabel="/search";!function($){"use strict";var OptionManager=(objToReturn={},defaultOptions={bookmarkIcon:"bookmarkIcon",bookmarkBadge:"show-bookmark",articleQuantity:"article-quantity",affixBookmarkIcon:!0,showBookmarkModal:!0,clickOnAddToBookmark:function(t){},clickOnbookmarkIcon:function(t,e){}},objToReturn.getOptions=function(t){var e=$.extend({},defaultOptions);return"object"==typeof t&&$.extend(e,t),e},objToReturn),objToReturn,defaultOptions,articleManager=function(){var t={};localStorage.konten=localStorage.konten?localStorage.konten:"";var e=function(t){localStorage.konten=JSON.stringify(t)},a=function(){try{return JSON.parse(localStorage.konten)}catch(t){return[]}},o=function(t,o){var n=function(t){var e=-1,o=a();return $.each(o,function(a,o){o.id!=t||(e=a)}),e}(t);if(n<0)return!1;var r=a();return r[n].quantity=void 0===o?r[n].quantity:o,e(r),!0};return t.getAllkonten=a,t.updatePoduct=o,t.setarticle=function(t,n,r,i,c,l){return void 0===t?(console.error("id required"),!1):void 0===n?(console.error("title required"),!1):void 0===r?(console.error("link required"),!1):void 0===l?(console.error("borkimage required"),!1):(i=void 0===i?"":i,void(o(t)||function(t,o,n,r,i,c){var l=a();l.push({id:t,title:o,link:n,summary:r,quantity:i,borkimage:c}),e(l)}(t,n,r,i,c,l)))},t.cleararticle=function(){e([])},t.removearticle=function(t){var o=a();o=$.grep(o,function(e,a){return e.id!=t}),e(o)},t.getTotalQuantity=function(){var t=0,e=a();return $.each(e,function(e,a){t+=a.quantity}),t},t}(),loadBookmarkEvent=function(t){var e=OptionManager.getOptions(t),a=$("."+e.bookmarkIcon),o=$("."+e.bookmarkBadge),n=e.articleQuantity;o.text(articleManager.getTotalQuantity()),$("#cart-modal").length||$("body").append('<div class="pop-area" id="cart-modal"><div class="pop-html"><div class="head-pop"><a class="close-btn buka-tutup">X</a></div><div class="body-content"><span class="table-responsive" id="cart-table"></span></div></div></div>');var r=function(){var t=$("#cart-table");t.empty();var e=articleManager.getAllkonten();$.each(e,function(){t.append('<table class="table"><tbody><tr title="'+this.summary+'" data-id="'+this.id+'"><td class="item-left img-left"><img width="60px" height="60px" src="'+this.borkimage+'"/></td><td class="item-left"><a href="'+this.link+'">'+this.title+'</a></td><td class="item-left" title="Remove favorit" class="text-center" style="width: 30px;"><a class="btn-remove"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(3.500000, 2.000000)"><path d="M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524"></path><line x1="16.8651429" y1="4.47980952" x2="0.714666667" y2="4.47980952"></line><path d="M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952"></path></g></svg></a></td></tr></tbody></table>')}),t.append(e.length?"":'<div role="alert" id="cart-empty-message"><div class="text-center"><svg width="80" height="80" viewBox="0 0 24 24"><path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z" fill="#f89000"/></svg><center>'+massgEmpty+'</center><a class="btn btn-outline-info m-2" href="'+link_articleLabel+'">'+articleLabel+"</a></div></div>")};if(e.affixBookmarkIcon){var i=1*a.offset().top+1*a.css("height").match(/\d+/);$(window).scroll(function(){$(window).scrollTop()>=i?a.addClass("bookmarkIcon-affix"):a.removeClass("bookmarkIcon-affix")})}a.click(function(){e.showBookmarkModal?r():e.clickOnbookmarkIcon(a,articleManager.getAllkonten())}),$(document).on("keypress","."+n,function(t){38!=t.keyCode&&40!=t.keyCode&&t.preventDefault()}),$(document).on({click:function(){var t=$(this).closest("tr"),e=t.data("id");t.hide(500,function(){articleManager.removearticle(e),r(),o.text(articleManager.getTotalQuantity())})}},".btn-remove")};$(document).on({click:function(){return $(".pop-area").toggleClass("open"),!1}},".buka-tutup"),$(function(){var goTohartomyBookmark=function(t){};eval(function(t,e,a,o,n,r){if(n=function(t){return(t<58?"":n(parseInt(t/58)))+((t%=58)>35?String.fromCharCode(t+29):t.toString(36))},!"".replace(/^/,String)){for(;a--;)r[n(a)]=o[a]||n(a);o=[function(t){return r[t]}],n=function(){return"\\w+"},a=1}for(;a--;)o[a]&&(t=t.replace(new RegExp("\\b"+n(a)+"\\b","g"),o[a]));return t}('q h=["\\B\\e\\M","\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f","\\x\\y\\f\\g\\C\\k\\y\\k\\y\\F","\\N\\z\\g\\i\\k\\e\\j\\G\\C\\x\\e\\e\\f\\j\\g\\i\\f\\C\\x\\k\\m","\\H\\z\\A\\r\\k","\\F\\y\\H\\z","\\s\\t\\s","\\s\\t\\O","\\s\\t\\P","\\z\\g\\i\\k\\e\\j\\G\\n\\e\\e\\f\\j\\g\\i\\f","\\s\\t\\Q"];q D=[h[0],h[1],h[2],h[3]];(o(b,c){q d=o(a){R(--a){b[h[5]](b[h[4]]())}};d(++c)}(D,S));q u=o(a,b){a=a-I;q c=D[a];T c};$(u(h[U]))[h[9]]({\'\\x\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':u(h[6]),\'\\g\\r\\r\\A\\t\\n\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':!I,\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)},\'\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){V[u(h[8])](u(h[7]),a)},\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)}})',0,58,"||||||||||||||x6F|x6B|x61|_0x6a0a|x72|x6D|x74|x64|x6E|x42|function|x63|var|x66|x30|x78|_0x3889|x41|x4F|x62|x75|x68|x69|x6C|x2D|_0x4117|x65|x70|x79|x73|0x0|x49|x54|goTohartomyBookmark|x67|x2E|x33|x32|x31|while|0xd6|return|10|console".split("|"),0,{}))});var MyBookmark=function(t,e){var a=$(t),o=OptionManager.getOptions(e),n=$("."+o.bookmarkBadge);a.click(function(){o.clickOnAddToBookmark(a);var t=a.data("id"),e=a.data("title"),r=a.data("link"),i=a.data("summary"),c=a.data("quantity"),l=a.data("borkimage");articleManager.setarticle(t,e,r,i,c,l),n.text(articleManager.getTotalQuantity())})};$.fn.hartomyBookmark=function(t){return loadBookmarkEvent(t),$.each(this,function(){new MyBookmark(this,t)})}}(jQuery);
  function totalComments(json) {
    document.addEventListener("DOMContentLoaded", () => {
      var commentsCount = json.feed.openSearch$totalResults.$t
      document.getElementById('totalComments_bottom').innerHTML = commentsCount > 20 ? `Xem thêm ${commentsCount - 20} bình luận` : `Xem tất cả bình luận` 
      document.querySelector('.codepro-commentStart .more > *').title = `Xem ${commentsCount} bình luận`
      document.querySelector('.popup-comments').dataset.text = commentsCount
    });
  };
  document.write('<script type=\"text/javascript\" src=\"/feeds/comments/default?alt=json-in-script&max-results=0&callback=totalComments\"><\/script>');
