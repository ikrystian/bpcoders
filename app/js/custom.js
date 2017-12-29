"use strict";
$(document).ready(function () {

    var mainMenu = $('.main-menu');
    if (mainMenu.length) {
        mainMenu.superfish({
            delay: 500,
            animation: {opacity: 'show', height: 'show'},
            speed: 'fast'
        });
    }
    var mobileMenu = $('.mobile-menu');
    if (mobileMenu.length) {
        mobileMenu.navgoco({accordion: true});
    }

    var nav_with_ul = $(".mobile-menu a span");
    if (nav_with_ul.length) {
        nav_with_ul.each(function () {
            $(this).parent().attr('href', '#');
        });
    }
    $('.mobile-menu a').on('click', function () {
        $('.mobile-navi-wrapper').removeClass('active');
    });


    $('.main-nav a:not(".no-action")').on('click', function (e) {
        e.preventDefault();
        var targt = $(this).attr('href');
        $("html, body").delay(100).animate({scrollTop: $(targt).offset().top}, 500);

    });


    /*_____________ slider pro _____________*/

    if ($('.slider-pro-03').length) {
        $('.slider-pro-03').sliderPro({
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

    /*_____________ slick  _____________*/
    if ($('.slick-01.slick-content').length) {
        $('.slick-01.slick-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<div class='bpc-prev'>PREV</div>",
            nextArrow: "<div class='bpc-next'>next</div>",
            asNavFor: '.slick-01.slick-thumb',

        });
    }
    if ($('.slick-01.slick-thumb').length) {
        $('.slick-01.slick-thumb').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slick-01.slick-content',
            focusOnSelect: true,
            centerMode: true,
            arrows: false,
            centerPadding: '0',

        });
    }


    /*_____________ scroll button_____________*/

    if ($('.bpc-scroll').length) {
        $('.bpc-scroll').each(function () {
            $(this).on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    }


    /*_____________ set background image _____________*/

    if ($('.bpc-bg-image').length) {
        $(".bpc-bg-image").each(function () {
            var imageUrl = $(this).attr("src");
            $(this).parent().css({
                'background-image': 'url(' + imageUrl + ')', 'background-size': 'cover',
                'background-position': 'center'
            });
            $(this).addClass("hidden");
        });
    }

    /*_____________ match height _____________*/

    if ($('.ul-mh').length) {
        $('.ul-mh').children().matchHeight();
    }

    if ($('.carousel-mh').length) {
        $('.carousel-mh').find(".owl-item").matchHeight();
    }


    /*_____________ masonry _____________*/

    if ($('.ul-ms').length) {
        imagesLoaded($('.ul-ms'), function () {
            $('.ul-ms').masonry({
                columnWidth: 1,
                itemSelector: '.ul-ms-item',
            });
        });
    }


    /*_____________ Loadmore _____________*/

    if ($('.last40-loadmore-nm').length) {
        $('.last40-loadmore-nm').on('click', function (e) {
            e.preventDefault();
            var button = $(this);
            var data_link = button.children('a').attr("href");
            jQuery.ajax({
                url: data_link,
                beforeSend: function (xhr) {
                },
            })
                .done(function (data) {
                    var pos_ins_data = button.prev();
                    var items = $(data).find('.normal-list > li');

                    if (items.length) {
                        jQuery.each(items, function (items, index) {
                            $(pos_ins_data).append($(this));
                        });
                    }

                    // var new_data_link_a = $(data).find('.last40-loadmore').children('a');
                    // if (new_data_link_a.length) {
                    //  button.children('a').attr("href", new_data_link_a.attr("href"));
                    // } else{
                    //  button.addClass("hidden");
                    // }

                });
        });
    }

    if ($('.last40-loadmore-ms')) {

        $('.last40-loadmore-ms').on('click', function (e) {
            e.preventDefault();
            var button = $(this);
            var data_link = button.children('a').attr("href");
            jQuery.ajax({
                url: data_link,
                beforeSend: function (xhr) {
                },
            })
                .done(function (data) {
                    var pos_ins_data = button.prev();
                    var items = $(data).find('.ul-ms-item');

                    if (items.length) {
                        jQuery.each(items, function (items, index) {
                            $(pos_ins_data).append($(this)).masonry('appended', $(this));
                        });
                    }

                    // var new_data_link_a = $(data).find('.last40-loadmore').children('a');
                    // if (new_data_link_a.length) {
                    //  button.children('a').attr("href", new_data_link_a.attr("href"));
                    // } else{
                    //  button.addClass("hidden");
                    // }

                });
            button.prev().masonry('appended', $(this));

        });
    }

    if ($('.last40-loadmore-mh').length) {
        $('.last40-loadmore-mh').on('click', function (e) {
            e.preventDefault();
            var button = $(this);
            var data_link = button.children('a').attr("href");
            jQuery.ajax({
                url: data_link,
                beforeSend: function (xhr) {
                },
            })
                .done(function (data) {

                    var pos_ins_data = button.prev();
                    var items = $(data).find('.ul-mh > li');
                    if (items.length) {
                        jQuery.each(items, function (items, index) {
                            $(pos_ins_data).append($(this)).children().matchHeight();
                        });
                    }

                    // var new_data_link_a = $(data).find('.last40-loadmore').children('a');
                    // if (new_data_link_a.length) {
                    //  button.children('a').attr("href", new_data_link_a.attr("href"));
                    // } else{
                    //  button.addClass("hidden");
                    // }

                });
            button.prev().children().matchHeight();

        });
    }
    // if($(".last40-loadmore").length){
    //  $(".last40-loadmore").each(function(){
    //      if($(this).find("a").length == 0){
    //          $(this).addClass("hidden");
    //      }
    //  });
    // }

    /*_____________ tab _____________*/
    if ($(".bpc-tab-nav").length) {
        $(".bpc-tab-nav").each(function () {
            $(".bpc-tab-nav").on('click', function () {
                $(this).parent().find(".bpc-tab-nav").removeClass("active");
                $(this).addClass("active");
                $(this).parents(".widget").find(".bpc-tab-content").removeClass("show");
                var content = $(this).children("a").attr('href');
                $(content).addClass("show");

            });
        });
    }


    /*_____________ padding _____________*/

    function sj_area_space() {
        var w_w = $(window).width(),
            ct_w = $('.container').width(),
            sp_w = (w_w - ct_w) / 2,
            pl_w = $('.sj-plw'),
            pr_w = $('.sj-prw');

        pl_w.css({
            "padding-left": sp_w
        });
        pr_w.css({
            "padding-right": sp_w
        });
    }

    $(window).resize(function () {
        sj_area_space();
    });

    sj_area_space();


    /*_____________ ct-btn _____________*/
    if ($(".ct-btn-01").length) {
        $(".ct-btn-01").parent().addClass("ct-btn-01-parent")
    }


    /*_____________ dropdown btn _____________*/

    var kopa_dropdown_btn = $(".bpc-dropdown-btn");
    if (kopa_dropdown_btn.length) {
        $(kopa_dropdown_btn).each(function () {
            $(this).on('click', function () {
                $(this).next().slideToggle();

            });
        });
    }

    /*_____________ slide Up/Down/Left/Right btn _____________*/

    var kopa_slide_btn = $(".bpc-slide-btn");
    if (kopa_slide_btn.length) {
        $(kopa_slide_btn).each(function () {
            $(this).on('click', function () {
                kopa_slide_btn.next().removeClass("active");
                $(this).next().addClass("active");

            });
        });
    }


    /*_____________ bpc-close-btn _____________*/

    var kopa_close_btn = $(".bpc-close-btn");
    if (kopa_close_btn.length) {
        $(kopa_close_btn).each(function () {
            $(this).on('click', function () {
                $(this).parent().removeClass("active");

            });
        });
    }
    /*_____________ focus searchbox _____________*/
    var search_btn = $(".search-btn");
    if (search_btn.length) {
        $(search_btn).each(function () {
            $(this).on('click', function () {
                $(this).next().find(".search-input").focus();
            });
        });
    }

    /*_____________ remove product _____________*/

    var rm_item_1 = $('.rm-item');
    if (rm_item_1.length) {
        $(rm_item_1).each(function () {
            var rm_btn_1 = $(this).find('.rm-btn');
            rm_btn_1.on('click', function () {
                $(this).closest(rm_item_1).remove();
            });
        });
    }

    /*_____________ UI Slider _____________*/


    var md_woo_pf = $('.widget_price_filter');
    if (md_woo_pf.length) {

        var uislider_1 = md_woo_pf.find('.slider-range-1'),
            uimin_1 = md_woo_pf.find('.from'),
            uimax_1 = md_woo_pf.find('.to');

        uislider_1.slider({
            range: true,
            min: 0,
            max: 9000,
            values: [500, 9000],
            slide: function (event, ui) {
                uimin_1.text("$" + ui.values[0]);
                uimax_1.text("$" + ui.values[1]);
            }
        });

        uimin_1.text("$" + uislider_1.slider("values", 0));
        uimax_1.text("$" + uislider_1.slider("values", 1));
    }

    if ($('.wc-prettyphoto').length) {
        $('.wc-prettyphoto').find("a[data-rel ^='prettyPhoto']").prettyPhoto();
    }

    /*--- MAP ---*/

    if ($('.bpc-map').length > 0) {

        var id_map = $('.bpc-map').attr('id');
        var lat = parseFloat($('.bpc-map').attr('data-latitude'));
        var lng = parseFloat($('.bpc-map').attr('data-longitude'));
        var place = $('.bpc-map').attr('data-place');
        var iconBase = 'images/39/1.png';

        var map = new GMaps({
            el: '#' + id_map,
            lat: lat,
            lng: lng,
            zoom: 15,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_RIGHT'
            },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            // mousemove: false,
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#444444"}]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f2f2f2"}]
            }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"saturation": -100}, {"lightness": 45}]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}]

        });
        map.addMarker({
            lat: lat,
            lng: lng,
            title: place,
            icon: iconBase
        });

    }
    /*bonus*/
    var count = 0;
    var farmImage = 'images/cat.jpg';
    $('#particles-js').on('click', function (e) {
        e.preventDefault();
        count++;
        if (count === 10) {
            $('.count-particles, .fps').show();
            $('.sp-image-bg')
                .attr('src', farmImage)
                .attr('data-src', farmImage);
            $('#ferrette').addClass('show');
        }

    });

    var icon1 = new Vivus('web-design-svg', {type: 'delayed', duration: 100, file: 'images/design.svg'});
    var icon2 = new Vivus('web-development-svg', {type: 'delayed', duration: 100, file: 'images/web.svg'});
    var icon3 = new Vivus('wordpress-svg', {type: 'delayed', duration: 100, file: 'images/wp.svg'});
    var icon4 = new Vivus('branding-svg', {type: 'delayed', duration: 100, file: 'images/brand.svg'});


    $('.loader').fadeOut('1500', function () {
        $(this).remove();
    });

    $('#particles-js').height($('.bpc-area-slider').height());

    console.log('Just click 10 times in header image :)');

    $('#ferrette').on('click', function () {
        $(this).toggleClass('touched');
    });

    $('#ferrette').on({
        'touchstart': function (e) {
            e.preventDefault();
            $(this).toggleClass('touched');
        }
    });
    Number.prototype.round = function (places) {
        return +(Math.round(this + "e+" + places) + "e-" + places);
    }
});
