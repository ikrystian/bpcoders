"use strict";jQuery(document).ready(function(){function e(){var e=jQuery(window).width(),r=jQuery(".container").width(),a=(e-r)/2,t=jQuery(".sj-plw"),s=jQuery(".sj-prw");t.css({"padding-left":a}),s.css({"padding-right":a})}jQuery(".main-menu").length&&jQuery(".main-menu").superfish({delay:500,animation:{opacity:"show",height:"show"},speed:"fast"}),jQuery(".mobile-menu").length&&jQuery(".mobile-menu").navgoco({accordion:!0});var r=jQuery(".mobile-menu a span");r.length&&r.each(function(){jQuery(this).parent().attr("href","#")}),jQuery(".slider-pro-01").length&&(jQuery(".slider-pro-01").sliderPro({width:1920,height:1080,forceSize:"fullWidth",arrows:!0,buttons:!1,fadeArrows:!0,autoplay:!1,autoScaleLayers:!0,responsive:!0,slideDistance:0,autoplayDelay:5e3}),jQuery(".slider-pro-01 .sp-previous-arrow").append("<p>prev</p>"),jQuery(".slider-pro-01 .sp-next-arrow").append("<p>next</p>")),jQuery(".slider-pro-02").length&&(jQuery(".slider-pro-02").sliderPro({width:485,height:600,arrows:!0,fadeArrows:!1,buttons:!1,autoplay:!1,autoScaleLayers:!0,responsive:!0,autoplayDelay:5e3}),jQuery(".slider-pro-02 .sp-previous-arrow").append("<span class='fa fa-angle-left '></span>"),jQuery(".slider-pro-02 .sp-next-arrow").append("<span class='fa fa-angle-right'></span>")),jQuery(".slider-pro-03").length&&(jQuery(".slider-pro-03").sliderPro({width:1920,height:1080,forceSize:"fullWidth",arrows:!0,buttons:!1,fadeArrows:!0,autoplay:!1,autoScaleLayers:!0,responsive:!0,slideDistance:0,autoplayDelay:5e3}),jQuery(".slider-pro-03 .sp-previous-arrow").append("<p>prev</p>"),jQuery(".slider-pro-03 .sp-next-arrow").append("<p>next</p>")),jQuery(".slider-pro-04").length&&(jQuery(".slider-pro-04").sliderPro({width:485,height:650,arrows:!0,fadeArrows:!1,buttons:!1,autoplay:!1,autoScaleLayers:!0,responsive:!0,autoplayDelay:5e3}),jQuery(".slider-pro-04 .sp-previous-arrow").append("<span class='fa fa-angle-left '></span>"),jQuery(".slider-pro-04 .sp-next-arrow").append("<span class='fa fa-angle-right'></span>")),jQuery(".slider-pro-05").length&&jQuery(".slider-pro-05").sliderPro({width:1800,height:900,arrows:!1,buttons:!0,autoplay:!1,autoScaleLayers:!0,responsive:!0,slideDistance:0,autoplayDelay:5e3}),jQuery(".slider-pro-06").length&&jQuery(".slider-pro-06").sliderPro({width:1920,height:1080,forceSize:"fullWidth",arrows:!1,buttons:!0,fadeArrows:!0,autoplay:!1,autoScaleLayers:!0,responsive:!0,slideDistance:0,autoplayDelay:5e3});var a=jQuery(".owl-carousel-01");a.length&&a.owlCarousel({items:6,loop:!0,nav:!0,navText:["",""],dots:!1,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,slideSpeed:4e3,responsive:{1024:{items:6},768:{items:4},0:{items:2}}});var t=jQuery(".owl-carousel-02");t.length&&t.owlCarousel({items:1,loop:!0,nav:!0,navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],dots:!1,autoplay:!1,autoplayTimeout:4e3,autoplayHoverPause:!0,slideSpeed:4e3});var s=jQuery(".owl-carousel-03");s.length&&s.owlCarousel({items:1,loop:!0,nav:!1,dots:!0,autoplay:!1,autoplayTimeout:4e3,autoplayHoverPause:!0,slideSpeed:1e4});var l=jQuery(".owl-carousel-04");l.length&&l.owlCarousel({items:1,loop:!0,nav:!0,navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],dots:!1,autoplay:!1,autoplayTimeout:4e3,autoplayHoverPause:!0,slideSpeed:1e4});var i=jQuery(".owl-carousel-05");i.length&&i.owlCarousel({items:1,loop:!0,nav:!0,navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],dots:!1,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,slideSpeed:1e4}),jQuery(".slick-01.slick-content").length&&jQuery(".slick-01.slick-content").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:"<div class='bpc-prev'>PREV</div>",nextArrow:"<div class='bpc-next'>next</div>",asNavFor:".slick-01.slick-thumb"}),jQuery(".slick-01.slick-thumb").length&&jQuery(".slick-01.slick-thumb").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slick-01.slick-content",focusOnSelect:!0,centerMode:!0,arrows:!1,centerPadding:"0"}),jQuery(".slick-02").length&&jQuery(".slick-02").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:"<span class='bpc-prev fa fa-angle-left'></span>",nextArrow:"<span class='bpc-next fa fa-angle-right'></span>"}),jQuery(".bpc-scroll").length&&jQuery(".bpc-scroll").each(function(){jQuery(this).on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=jQuery(this.hash);if(e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]"),e.length)return jQuery("html, body").animate({scrollTop:e.offset().top},1e3),!1}})}),jQuery(".bpc-bg-image").length&&jQuery(".bpc-bg-image").each(function(){var e=jQuery(this).attr("src");jQuery(this).parent().css({"background-image":"url("+e+")","background-size":"cover","background-position":"center"}),jQuery(this).addClass("hidden")}),jQuery(".ul-mh").length&&jQuery(".ul-mh").children().matchHeight(),jQuery(".carousel-mh").length&&jQuery(".carousel-mh").find(".owl-item").matchHeight(),jQuery(".ul-ms").length&&imagesLoaded(jQuery(".ul-ms"),function(){jQuery(".ul-ms").masonry({columnWidth:1,itemSelector:".ul-ms-item"})}),jQuery(".last40-loadmore-nm").length&&jQuery(".last40-loadmore-nm").on("click",function(e){e.preventDefault();var r=jQuery(this),a=r.children("a").attr("href");jQuery.ajax({url:a,beforeSend:function(){}}).done(function(e){var a=r.prev(),t=jQuery(e).find(".normal-list > li");t.length&&jQuery.each(t,function(){jQuery(a).append(jQuery(this))})})}),jQuery(".last40-loadmore-ms")&&jQuery(".last40-loadmore-ms").on("click",function(e){e.preventDefault();var r=jQuery(this),a=r.children("a").attr("href");jQuery.ajax({url:a,beforeSend:function(){}}).done(function(e){var a=r.prev(),t=jQuery(e).find(".ul-ms-item");t.length&&jQuery.each(t,function(){jQuery(a).append(jQuery(this)).masonry("appended",jQuery(this))})}),r.prev().masonry("appended",jQuery(this))}),jQuery(".last40-loadmore-mh").length&&jQuery(".last40-loadmore-mh").on("click",function(e){e.preventDefault();var r=jQuery(this),a=r.children("a").attr("href");jQuery.ajax({url:a,beforeSend:function(){}}).done(function(e){var a=r.prev(),t=jQuery(e).find(".ul-mh > li");t.length&&jQuery.each(t,function(){jQuery(a).append(jQuery(this)).children().matchHeight()})}),r.prev().children().matchHeight()}),jQuery(".bpc-tab-nav").length&&jQuery(".bpc-tab-nav").each(function(){jQuery(".bpc-tab-nav").on("click",function(){jQuery(this).parent().find(".bpc-tab-nav").removeClass("active"),jQuery(this).addClass("active"),jQuery(this).parents(".widget").find(".bpc-tab-content").removeClass("show");var e=jQuery(this).children("a").attr("href");jQuery(e).addClass("show")})}),jQuery(window).resize(function(){e()}),e(),jQuery(".ct-btn-01").length&&jQuery(".ct-btn-01").parent().addClass("ct-btn-01-parent");var n=jQuery(".bpc-dropdown-btn");n.length&&jQuery(n).each(function(){jQuery(this).on("click",function(){jQuery(this).next().slideToggle()})});var o=jQuery(".bpc-slide-btn");o.length&&jQuery(o).each(function(){jQuery(this).on("click",function(){o.next().removeClass("active"),jQuery(this).next().addClass("active")})});var u=jQuery(".bpc-close-btn");u.length&&jQuery(u).each(function(){jQuery(this).on("click",function(){jQuery(this).parent().removeClass("active")})});var y=jQuery(".search-btn");y.length&&jQuery(y).each(function(){jQuery(this).on("click",function(){jQuery(this).next().find(".search-input").focus()})});var c=jQuery(".rm-item");c.length&&jQuery(c).each(function(){var e=jQuery(this).find(".rm-btn");e.on("click",function(){jQuery(this).closest(c).remove()})});var p=jQuery(".widget_price_filter");if(p.length){var h=p.find(".slider-range-1"),d=p.find(".from"),j=p.find(".to");h.slider({range:!0,min:0,max:9e3,values:[500,9e3],slide:function(e,r){d.text("$"+r.values[0]),j.text("$"+r.values[1])}}),d.text("$"+h.slider("values",0)),j.text("$"+h.slider("values",1))}if(jQuery(".wc-prettyphoto").length&&jQuery(".wc-prettyphoto").find("a[data-rel ^='prettyPhoto']").prettyPhoto(),jQuery(".bpc-map").length>0){var Q=jQuery(".bpc-map").attr("id"),f=parseFloat(jQuery(".bpc-map").attr("data-latitude")),m=parseFloat(jQuery(".bpc-map").attr("data-longitude")),v=jQuery(".bpc-map").attr("data-place"),g="images/39/1.png",w=new GMaps({el:"#"+Q,lat:f,lng:m,zoom:15,zoomControl:!0,zoomControlOpt:{style:"SMALL",position:"TOP_RIGHT"},panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,scrollwheel:!1,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}]});w.addMarker({lat:f,lng:m,title:v,icon:g})}var b=jQuery(".bpc-widget-filter-01");jQuery(b).length&&jQuery(b).each(function(){var e=jQuery(this).find(".masonry-container"),r=jQuery(this).find(".masonry-filter").children("a"),a={columnWidth:1,itemSelector:".ul-ms-item.show"};e.imagesLoaded(function(){e.masonry(a),r.on("click",function(a){a.preventDefault(),r.removeClass("active"),jQuery(this).addClass("active");var t=jQuery(this).data("val");e.find(".ul-ms-item").each(function(){var e=jQuery(this).data("val").toString().split(","),r=e.indexOf(t.toString())>-1;"*"==t?(jQuery(this).removeClass("hide"),jQuery(this).addClass("show")):1==r?(jQuery(this).removeClass("hide"),jQuery(this).addClass("show")):(jQuery(this).removeClass("show"),jQuery(this).addClass("hide"))}),e.masonry("layout")})})});var C=jQuery(".bpc-widget-filter-02");if(jQuery(C).length&&jQuery(C).each(function(){var e=jQuery(this).find(".masonry-container"),r=jQuery(this).find(".masonry-filter").children("a"),a={columnWidth:1,itemSelector:".ul-ms-item.show"};e.imagesLoaded(function(){e.masonry(a),r.on("click",function(a){a.preventDefault(),r.removeClass("active"),jQuery(this).addClass("active");var t=jQuery(this).data("val");e.find(".ul-ms-item").each(function(){var e=jQuery(this).data("val").toString().split(","),r=e.indexOf(t.toString())>-1;"*"==t?(jQuery(this).removeClass("hide"),jQuery(this).addClass("show")):1==r?(jQuery(this).removeClass("hide"),jQuery(this).addClass("show")):(jQuery(this).removeClass("show"),jQuery(this).addClass("hide"))}),e.masonry("layout")})})}),jQuery(".ct-item-03").length&&jQuery(".ct-item-02").length){var T=jQuery(".ct-item-03").height();jQuery(".ct-item-02").css("height",2*T+"px")}});