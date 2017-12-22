"use strict";

jQuery(document).ready(function() {

    /*_____________ menu _____________*/
    if (jQuery('.main-menu').length) {
        jQuery('.main-menu').superfish({
            delay:       500,                            // one second delay on mouseout
            animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
            speed:       'fast',                          // faster animation speed
        });
    }
    if (jQuery('.mobile-menu').length) {
        jQuery('.mobile-menu').navgoco({accordion: true});
    }

    var nav_with_ul = jQuery(".mobile-menu a span");
    if(nav_with_ul.length){
        nav_with_ul.each(function(){
            jQuery(this).parent().attr('href', '#');
        });
    }
    jQuery('.mobile-menu a').on('click', function() {
        jQuery('.mobile-navi-wrapper').removeClass('active');
    });


jQuery('.main-nav a').on('click', function(e){
    e.preventDefault();
    var targt = $(this).attr('href');
    console.log(targt);
    $("html, body").delay(100).animate({ scrollTop: $(targt).offset().top }, 500);

});


    /*_____________ slider pro _____________*/

    if (jQuery( '.slider-pro-03' ).length) {
        jQuery( '.slider-pro-03' ).sliderPro({
            width: 1920,
            height: 1080,
            forceSize: 'fullWidth',
            arrows: false,
            buttons: false,
            fadeArrows: false,
            autoplay: false,
            autoScaleLayers: true,
            responsive: true,
            slideDistance: 0,
            autoplayDelay: 5000,
            touchSwipe: false
        });
    }

    var owl_2 = jQuery('.owl-carousel-02');
    if(owl_2.length){
        owl_2.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            slideSpeed: 4000,
        });
    }

    var owl_3 = jQuery('.owl-carousel-03');
    if(owl_3.length){
        owl_3.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            slideSpeed: 10000,
        });
    }

    var owl_4 = jQuery('.owl-carousel-04');
    if(owl_4.length){
        owl_4.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            slideSpeed: 10000,
        });
    }
    var owl_5 = jQuery('.owl-carousel-05');
    if(owl_5.length){
        owl_5.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            slideSpeed: 10000,
        });
    }
    /*_____________ slick  _____________*/
    if (jQuery('.slick-01.slick-content').length) {
        jQuery('.slick-01.slick-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<div class='bpc-prev'>PREV</div>",
            nextArrow: "<div class='bpc-next'>next</div>",
            asNavFor: '.slick-01.slick-thumb',

        });
    }
    if (jQuery('.slick-01.slick-thumb').length) {
        jQuery('.slick-01.slick-thumb').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slick-01.slick-content',
            focusOnSelect: true,
            centerMode: true,
            arrows: false,
            centerPadding: '0',

        });
    }

    if (jQuery('.slick-02').length) {
        jQuery('.slick-02').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<span class='bpc-prev fa fa-angle-left'></span>",
            nextArrow: "<span class='bpc-next fa fa-angle-right'></span>",
        });
    }



    /*_____________ scroll button_____________*/

    if (jQuery('.bpc-scroll').length) {
        jQuery('.bpc-scroll').each(function(){
            jQuery(this).on('click',function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        jQuery('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    }




    /*_____________ set background image _____________*/

    if(jQuery('.bpc-bg-image').length){
        jQuery(".bpc-bg-image").each(function(){
            var imageUrl = jQuery(this).attr("src");
            jQuery(this).parent().css({'background-image': 'url(' + imageUrl + ')', 'background-size':'cover',
                'background-position': 'center'
            });
            jQuery(this).addClass("hidden");
        });
    }

    /*_____________ match height _____________*/

    if(jQuery('.ul-mh').length){
        jQuery('.ul-mh').children().matchHeight();
    }

    if(jQuery('.carousel-mh').length){
        jQuery('.carousel-mh').find(".owl-item").matchHeight();
    }


    /*_____________ masonry _____________*/

    if(jQuery('.ul-ms').length){
        imagesLoaded(jQuery('.ul-ms'), function(){
            jQuery('.ul-ms').masonry({
                columnWidth: 1,
                itemSelector: '.ul-ms-item',
            });
        });
    }


    /*_____________ Loadmore _____________*/

    if (jQuery('.last40-loadmore-nm').length) {
        jQuery('.last40-loadmore-nm').on('click',function(e){
            e.preventDefault();
            var button = jQuery(this);
            var data_link = button.children('a').attr("href");
            jQuery.ajax({
                url:data_link,
                beforeSend: function( xhr ) {
                },
            })
            .done(function(data) {
                var pos_ins_data =  button.prev();
                var items = jQuery(data).find('.normal-list > li');

                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(pos_ins_data).append(jQuery(this));
                    });
                }

                // var new_data_link_a = jQuery(data).find('.last40-loadmore').children('a');
                // if (new_data_link_a.length) {
                //  button.children('a').attr("href", new_data_link_a.attr("href"));
                // } else{
                //  button.addClass("hidden");
                // }

            });
        });
    }

    if (jQuery('.last40-loadmore-ms')) {

        jQuery('.last40-loadmore-ms').on('click',function(e){
            e.preventDefault();
            var button = jQuery(this);
            var data_link = button.children('a').attr("href");
            jQuery.ajax({
                url:data_link,
                beforeSend: function( xhr ) {
                },
            })
            .done(function(data) {
                var pos_ins_data =  button.prev();
                var items = jQuery(data).find('.ul-ms-item');

                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(pos_ins_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                }

                // var new_data_link_a = jQuery(data).find('.last40-loadmore').children('a');
                // if (new_data_link_a.length) {
                //  button.children('a').attr("href", new_data_link_a.attr("href"));
                // } else{
                //  button.addClass("hidden");
                // }

            });
            button.prev().masonry( 'appended', jQuery(this));

        });
    }

    if (jQuery('.last40-loadmore-mh').length) {
        jQuery('.last40-loadmore-mh').on('click',function(e){
            e.preventDefault();
            var button = jQuery(this);
            var data_link = button.children('a').attr("href");
            jQuery.ajax({
                url:data_link,
                beforeSend: function( xhr ) {
                },
            })
            .done(function(data) {

                var pos_ins_data =  button.prev();
                var items = jQuery(data).find('.ul-mh > li');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(pos_ins_data).append(jQuery(this)).children().matchHeight();
                    });
                }

                // var new_data_link_a = jQuery(data).find('.last40-loadmore').children('a');
                // if (new_data_link_a.length) {
                //  button.children('a').attr("href", new_data_link_a.attr("href"));
                // } else{
                //  button.addClass("hidden");
                // }

            });
            button.prev().children().matchHeight();

        });
    }
    // if(jQuery(".last40-loadmore").length){
    //  jQuery(".last40-loadmore").each(function(){
    //      if(jQuery(this).find("a").length == 0){
    //          jQuery(this).addClass("hidden");
    //      }
    //  });
    // }

    /*_____________ tab _____________*/
    if (jQuery(".bpc-tab-nav").length) {
        jQuery(".bpc-tab-nav").each(function(){
            jQuery(".bpc-tab-nav").on('click',function(){
                jQuery(this).parent().find(".bpc-tab-nav").removeClass("active");
                jQuery(this).addClass("active");
                jQuery(this).parents(".widget").find(".bpc-tab-content").removeClass("show");
                var content = jQuery(this).children("a").attr('href');
                jQuery(content).addClass("show");

            });
        });
    }



    /*_____________ padding _____________*/

    function sj_area_space(){
        var w_w  = jQuery(window).width(),
        ct_w = jQuery('.container').width(),
        sp_w = (w_w - ct_w)/2,
        pl_w = jQuery('.sj-plw'),
        pr_w = jQuery('.sj-prw');

        pl_w.css({
            "padding-left": sp_w
        });
        pr_w.css({
            "padding-right": sp_w
        });
    }

    jQuery(window).resize(function(){
        sj_area_space();
    });

    sj_area_space();


    /*_____________ ct-btn _____________*/
    if (jQuery(".ct-btn-01").length) {
        jQuery(".ct-btn-01").parent().addClass("ct-btn-01-parent")
    }



    /*_____________ dropdown btn _____________*/

    var kopa_dropdown_btn = jQuery(".bpc-dropdown-btn");
    if(kopa_dropdown_btn.length) {
        jQuery(kopa_dropdown_btn).each(function() {
            jQuery(this).on('click', function(){
                jQuery(this).next().slideToggle();

            });
        });
    }

    /*_____________ slide Up/Down/Left/Right btn _____________*/

    var kopa_slide_btn = jQuery(".bpc-slide-btn");
    if(kopa_slide_btn.length) {
        jQuery(kopa_slide_btn).each(function() {
            jQuery(this).on('click', function(){
                kopa_slide_btn.next().removeClass("active");
                jQuery(this).next().addClass("active");

            });
        });
    }


    /*_____________ bpc-close-btn _____________*/

    var kopa_close_btn = jQuery(".bpc-close-btn");
    if(kopa_close_btn.length) {
        jQuery(kopa_close_btn).each(function() {
            jQuery(this).on('click', function(){
                jQuery(this).parent().removeClass("active");

            });
        });
    }
    /*_____________ focus searchbox _____________*/
    var search_btn = jQuery(".search-btn");
    if(search_btn.length) {
        jQuery(search_btn).each(function() {
            jQuery(this).on('click', function(){
                jQuery(this).next().find(".search-input").focus();
            });
        });
    }

    /*_____________ remove product _____________*/

    var rm_item_1 = jQuery('.rm-item');
    if(rm_item_1.length) {
        jQuery(rm_item_1).each(function() {
            var rm_btn_1 = jQuery(this).find('.rm-btn');
            rm_btn_1.on('click', function(){
                jQuery(this).closest(rm_item_1).remove();
            });
        });
    }

    /*_____________ UI Slider _____________*/


    var md_woo_pf = jQuery('.widget_price_filter');
    if(md_woo_pf.length){

        var uislider_1 = md_woo_pf.find('.slider-range-1'),
        uimin_1    = md_woo_pf.find('.from'),
        uimax_1    = md_woo_pf.find('.to');

        uislider_1.slider({
            range: true,
            min: 0,
            max: 9000,
            values: [ 500, 9000 ],
            slide: function( event, ui ) {
                uimin_1.text("$" + ui.values[ 0 ]);
                uimax_1.text("$" + ui.values[ 1 ]);
            }
        });

        uimin_1.text( "$" + uislider_1.slider( "values", 0 ));
        uimax_1.text( "$" + uislider_1.slider( "values", 1 ));
    }

    if(jQuery('.wc-prettyphoto').length){
        jQuery('.wc-prettyphoto').find("a[data-rel ^='prettyPhoto']").prettyPhoto();
    }

    /*--- MAP ---*/

    if (jQuery('.bpc-map').length > 0) {

        var id_map = jQuery('.bpc-map').attr('id');
        var lat = parseFloat(jQuery('.bpc-map').attr('data-latitude'));
        var lng = parseFloat(jQuery('.bpc-map').attr('data-longitude'));
        var place = jQuery('.bpc-map').attr('data-place');
        var iconBase = 'images/39/1.png';

        var map = new GMaps({
            el: '#'+id_map,
            lat: lat,
            lng: lng,
            zoom: 15,
            zoomControl : true,
            zoomControlOpt: {
                style : 'SMALL',
                position: 'TOP_RIGHT'
            },
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            // mousemove: false,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]

        });
        map.addMarker({
            lat: lat,
            lng: lng,
            title: place,
            icon: iconBase
        });

    }


    /*_____________ filter _____________*/

    var filter_1 = jQuery('.bpc-widget-filter-01');

    if (jQuery(filter_1).length) {

        jQuery(filter_1).each(function(){

            var container_1 = jQuery(this).find('.masonry-container'),
            m_filters_1 = jQuery(this).find('.masonry-filter').children('a');
            var masonryOptions = {
                columnWidth: 1,
                itemSelector : '.ul-ms-item.show'
            };
            container_1.imagesLoaded(function(){

                var m_grid = container_1.masonry( masonryOptions);

                m_filters_1.on('click',function(event){
                    event.preventDefault();
                    m_filters_1.removeClass('active');
                    jQuery(this).addClass('active');
                    var m_filter_val = jQuery(this).data('val');

                    container_1.find('.ul-ms-item').each(function(){
                        var m_item_val = jQuery(this).data('val').toString().split(',');
                        var a = m_item_val.indexOf(m_filter_val.toString()) > -1;

                        if (m_filter_val == "*") {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');
                        } else {
                            if ( a == true) {
                                jQuery(this).removeClass('hide');
                                jQuery(this).addClass('show');
                            } else {
                                jQuery(this).removeClass('show');
                                jQuery(this).addClass('hide');
                            }
                        }
                    });
                    container_1.masonry('layout');

                });

            });

        });
    }


    var filter_2 = jQuery('.bpc-widget-filter-02');

    if (jQuery(filter_2).length) {

        jQuery(filter_2).each(function(){

            var container_1 = jQuery(this).find('.masonry-container'),
            m_filters_1 = jQuery(this).find('.masonry-filter').children('a');
            var masonryOptions = {
                columnWidth: 1,
                itemSelector : '.ul-ms-item.show'
            };
            container_1.imagesLoaded(function(){

                var m_grid = container_1.masonry( masonryOptions);
                m_filters_1.on('click',function(event){
                    event.preventDefault();
                    m_filters_1.removeClass('active');
                    jQuery(this).addClass('active');
                    var m_filter_val = jQuery(this).data('val');

                    container_1.find('.ul-ms-item').each(function(){
                        var m_item_val = jQuery(this).data('val').toString().split(',');
                        var a = m_item_val.indexOf(m_filter_val.toString()) > -1;

                        if (m_filter_val == "*") {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');
                        } else {
                            if ( a == true) {
                                jQuery(this).removeClass('hide');
                                jQuery(this).addClass('show');
                            } else {
                                jQuery(this).removeClass('show');
                                jQuery(this).addClass('hide');
                            }
                        }
                    });
                    container_1.masonry('layout');

                });

            });

        });
    }

    /*bonus*/
    var count = 0;
    var farmImage = 'images/cat.jpg';
    $('#particles-js').on('click', function(e){
        e.preventDefault();
        count ++;
        if(count === 10){
            $('.count-particles, .fps').show();
            $('.sp-image-bg')
                .attr('src', farmImage)
                .attr('data-src', farmImage);
                $('#ferrette').addClass('show');
        }

    });


    /*_____________  _____________*/
    if (jQuery(".ct-item-03").length && jQuery(".ct-item-02").length) {
        var item_height = jQuery(".ct-item-03").height();
        jQuery(".ct-item-02").css("height", 2*item_height + 'px');
    }
		new Vivus('web-design-svg', {type: 'oneByOne', duration: 300, file: 'images/design.svg'});
		new Vivus('web-development-svg', {type: 'oneByOne', duration: 300, file: 'images/web.svg'});
		new Vivus('wordpress-svg', {type: 'oneByOne', duration: 300, file: 'images/wp.svg'});
		new Vivus('branding-svg', {type: 'oneByOne', duration: 300, file: 'images/brand.svg'});

    $('.loader').fadeOut('1500', function(){
        $(this).remove();
    });

    $('#particles-js').height($('.bpc-area-slider').height());

    console.log('Just click 10 times in header image :)');

    /* ---- particles.js config ---- */

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 331,
                "density": {
                    "enable": true,
                    "value_area": 1578.2952832645453
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 11.83721462448409,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 100,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    jQuery('#ferrette').on('click', function(){
        jQuery(this).toggleClass('touched');
    })
    $('#ferrette').on({ 'touchstart' : function(e){ 
        e.preventDefault();
        jQuery(this).toggleClass('touched');
     } });




});
