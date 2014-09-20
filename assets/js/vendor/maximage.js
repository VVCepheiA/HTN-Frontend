!function(a){"use strict";a.fn.maximage=function(b){function c(a){window.console&&window.console.log&&window.console.log(a)}var d;("object"==typeof b||void 0===b)&&(d=a.extend(a.fn.maximage.defaults,b||{})),"string"==typeof b&&(d=a.fn.maximage.defaults),a.Body=a("body"),a.Window=a(window),a.Scroll=a("html, body"),a.Events={RESIZE:"resize"},this.each(function(){var e=a(this),f=0,g=[],h={setup:function(){if(a.Slides.length>0){var b,c=a.Slides.length;for(b=0;c>b;b++){var d=a.Slides[b];e.append('<div class="mc-image '+d.theclass+'" title="'+d.alt+'" style="background-image:url(\''+d.url+"');"+d.style+'" data-href="'+d.datahref+'">'+d.content+"</div>")}h.preload(0),h.resize()}},preload:function(b){var c=a("<img/>");c.load(function(){0==f&&(j.setup(),d.onFirstImageLoaded()),f==a.Slides.length-1?d.onImagesLoaded(e):(f++,h.preload(f))}),c[0].src=a.Slides[b].url,g.push(c[0])},resize:function(){a.Window.bind(a.Events.RESIZE,function(){a.Scroll.addClass("mc-hide-scrolls"),a.Window.data("h",l.sizes().h).data("w",l.sizes().w),e.height(a.Window.data("h")).width(a.Window.data("w")).children().height(a.Window.data("h")).width(a.Window.data("w")),e.children().each(function(){this.cycleH=a.Window.data("h"),this.cycleW=a.Window.data("w")}),a(a.Scroll).removeClass("mc-hide-scrolls")})}},i={setup:function(){var b,c,f,g=a.Slides.length;if(a.BrowserTests.msie&&!d.overrideMSIEStop&&document.execCommand("Stop",!1),e.html(""),a.Body.addClass("mc-old-browser"),a.Slides.length>0){for(a.Scroll.addClass("mc-hide-scrolls"),a.Window.data("h",l.sizes().h).data("w",l.sizes().w),a("body").append(a("<div></div>").attr("class","mc-loader").css({position:"absolute",left:"-9999px"})),f=0;g>f;f++)b=0==a.Slides[f].content.length?'<img src="'+a.Slides[f].url+'" />':a.Slides[f].content,c=a("<div>"+b+"</div>").attr("class","mc-image mc-image-n"+f+" "+a.Slides[f].theclass),e.append(c),0==a(".mc-image-n"+f).children("img").length||a("div.mc-loader").append(a(".mc-image-n"+f).children("img").first().clone().addClass("not-loaded"));i.preload(),i.windowResize()}},preload:function(){var b=setInterval(function(){a(".mc-loader").children("img").each(function(b){var c=a(this);if(c.hasClass("not-loaded")&&c.height()>0){a(this).removeClass("not-loaded");var d=a("div.mc-image-n"+b).children("img").first();d.data("h",c.height()).data("w",c.width()).data("ar",c.width()/c.height()),i.onceLoaded(b)}}),0==a(".not-loaded").length&&(a(".mc-loader").remove(),clearInterval(b))},1e3)},onceLoaded:function(b){i.maximage(b),0==b?(e.css({visibility:"visible"}),d.onFirstImageLoaded()):b==a.Slides.length-1&&(j.setup(),a(a.Scroll).removeClass("mc-hide-scrolls"),d.onImagesLoaded(e),d.debug&&(c(" - Final Maximage - "),c(e)))},maximage:function(b){a("div.mc-image-n"+b).height(a.Window.data("h")).width(a.Window.data("w")).children("img").first().each(function(){k.maxcover(a(this))})},windowResize:function(){a.Window.bind(a.Events.RESIZE,function(){clearTimeout(this.id),a(".mc-image").length>=1&&(this.id=setTimeout(i.doneResizing,200))})},doneResizing:function(){a(a.Scroll).addClass("mc-hide-scrolls"),a.Window.data("h",l.sizes().h).data("w",l.sizes().w),e.height(a.Window.data("h")).width(a.Window.data("w")),e.find(".mc-image").each(function(a){i.maximage(a)});var b=e.data("cycle.opts");void 0!=b&&(b.height=a.Window.data("h"),b.width=a.Window.data("w"),jQuery.each(b.elements,function(b,c){c.cycleW=a.Window.data("w"),c.cycleH=a.Window.data("h")})),a(a.Scroll).removeClass("mc-hide-scrolls")}},j={setup:function(){e.addClass("mc-cycle"),a.Window.data("h",l.sizes().h).data("w",l.sizes().w),jQuery.easing.easeForCSSTransition=function(a,b,c,d){return c+d};var b=a.extend({fit:1,containerResize:0,height:a.Window.data("h"),width:a.Window.data("w"),slideResize:!1,easing:a.BrowserTests.cssTransitions&&d.cssTransitions?"easeForCSSTransition":"swing"},d.cycleOptions);e.cycle(b)}},k={center:function(b){d.verticalCenter&&b.css({marginTop:(b.height()-a.Window.data("h"))/2*-1}),d.horizontalCenter&&b.css({marginLeft:(b.width()-a.Window.data("w"))/2*-1})},fill:function(b){var e=b.is("object")?b.parent().first():b;"function"==typeof d.backgroundSize?d.backgroundSize(b):"cover"==d.backgroundSize?a.Window.data("w")/a.Window.data("h")<e.data("ar")?b.height(a.Window.data("h")).width((a.Window.data("h")*e.data("ar")).toFixed(0)):b.height((a.Window.data("w")/e.data("ar")).toFixed(0)).width(a.Window.data("w")):"contain"==d.backgroundSize?a.Window.data("w")/a.Window.data("h")<e.data("ar")?b.height((a.Window.data("w")/e.data("ar")).toFixed(0)).width(a.Window.data("w")):b.height(a.Window.data("h")).width((a.Window.data("h")*e.data("ar")).toFixed(0)):c("The backgroundSize option was not recognized for older browsers.")},maxcover:function(a){k.fill(a),k.center(a)},maxcontain:function(a){k.fill(a),k.center(a)}},l={browser_tests:function(){var b=a("<div />")[0],e=["Moz","Webkit","Khtml","O","ms"],f="transition",g={cssTransitions:!1,cssBackgroundSize:"backgroundSize"in b.style&&d.cssBackgroundSize,html5Video:!1,msie:!1};if(d.cssTransitions){"string"==typeof b.style[f]&&(g.cssTransitions=!0),f=f.charAt(0).toUpperCase()+f.substr(1);for(var h=0;h<e.length;h++)e[h]+f in b.style&&(g.cssTransitions=!0)}return document.createElement("video").canPlayType&&(g.html5Video=!0),g.msie=void 0!==l.msie(),d.debug&&(c(" - Browser Test - "),c(g)),g},construct_slide_object:function(){var b=new Object,f=new Array;return e.children().each(function(){var c=a(this).is("img")?a(this).clone():a(this).find("img").first().clone();b={},b.url=c.attr("src"),b.title=void 0!=c.attr("title")?c.attr("title"):"",b.alt=void 0!=c.attr("alt")?c.attr("alt"):"",b.theclass=void 0!=c.attr("class")?c.attr("class"):"",b.styles=void 0!=c.attr("style")?c.attr("style"):"",b.orig=c.clone(),b.datahref=void 0!=c.attr("data-href")?c.attr("data-href"):"",b.content="",a(this).find("img").length>0&&(a.BrowserTests.cssBackgroundSize&&a(this).find("img").first().remove(),b.content=a(this).html()),c[0].src="",a.BrowserTests.cssBackgroundSize&&a(this).remove(),f.push(b)}),d.debug&&(c(" - Slide Object - "),c(f)),f},msie:function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a},sizes:function(){var b={h:0,w:0};if("window"==d.fillElement)b.h=a.Window.height(),b.w=a.Window.width();else{var c=e.parents(d.fillElement).first();0==c.height()||1==c.data("windowHeight")?(c.data("windowHeight",!0),b.h=a.Window.height()):b.h=c.height(),0==c.width()||1==c.data("windowWidth")?(c.data("windowWidth",!0),b.w=a.Window.width()):b.w=c.width()}return b}};if(a.BrowserTests=l.browser_tests(),"string"==typeof b){if(a.BrowserTests.html5Video||!e.is("video")){var m,n=e.is("object")?e.parent().first():e;a.Body.hasClass("mc-old-browser")||a.Body.addClass("mc-old-browser"),a.Window.data("h",l.sizes().h).data("w",l.sizes().w),n.data("h",e.height()).data("w",e.width()).data("ar",e.width()/e.height()),a.Window.bind(a.Events.RESIZE,function(){a.Window.data("h",l.sizes().h).data("w",l.sizes().w),m=e.data("resizer"),clearTimeout(m),m=setTimeout(k[b](e),200),e.data("resizer",m)}),k[b](e)}}else a.Slides=l.construct_slide_object(),a.BrowserTests.cssBackgroundSize?(d.debug&&c(" - Using Modern - "),h.setup()):(d.debug&&c(" - Using Old - "),i.setup())})},a.fn.maximage.defaults={debug:!1,cssBackgroundSize:!0,cssTransitions:!0,verticalCenter:!0,horizontalCenter:!0,scaleInterval:20,backgroundSize:"cover",fillElement:"window",overrideMSIEStop:!1,onFirstImageLoaded:function(){},onImagesLoaded:function(){}}}(jQuery);