/**
*
* -----------------------------------------------------------------------------
*
* Template : Tekhub - Multipurpose Technology Startup HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    // Revolution Slider Js Start
    jQuery('#rev_slider_1').show().revolution({
        delay: 4000,
        sliderLayout: 'fullwidth',
        fullScreenAlignForce: 'off',
        boxshadow: 0,
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,

        responsiveLevels:[1400,1024,778,480],
        visibilityLevels:[1400,1024,778,480],
        gridwidth:[1400,1024,778,480],
        gridheight:[868,768,660,520],
        minHeight: '500px',
        
        parallax: {
            type:"scroll",
            origo:"slidercenter",
            speed:1000,
            speedbg:0,
            speedls:2000,
            levels:[8,16,24,32,-8,-16,-24,-32,36,2,4,6,50,-30,-20,55],
        },

        navigation: {
            keyboardNavigation:"on",
            keyboard_direction: "vertical",
            onHoverStop:"off",
            arrows: {
                enable: false,
                style: 'zeus',
                tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
            },
            touch:{
                touchenabled:"on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "vertical",
                drag_block_vertical: false
            },
            bullets: {
                enable:true,
                hide_onmobile:true,
                hide_under:778,
                style:"hermes",
                hide_onleave:false,
                direction:"vertical",
                h_align:"right",
                v_align:"center",
                h_offset:20,
                v_offset:0,
                space:5,
                tmp:''
            }
        },
    });

    // Readon Button js
    $(function() {  
      $('.readon')
        .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
    });

    /*----------------------------
        # swiper Screen Slider
    ------------------------------ */
    var swiper = new Swiper('.swiper-container.screnshots', {
        spaceBetween: 30,
        slidesPerGroup: 1,
        slidesPerView: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        mousewheel: false,
        direction: 'horizontal',
        grabCursor: false,
        autoplay: {
            delay: 200000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            481: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
    
    $(".swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    /*----------------------------
        # swiper Pricing Slider
    ------------------------------ */
    var swiper = new Swiper('.swiper-container.pricing', {
        spaceBetween: 0,
        slidesPerGroup: 1,
        slidesPerView: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        mousewheel: false,
        direction: 'horizontal',
        grabCursor: false,
        autoplay: {
            delay: 2000000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            481: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        }
    });

    // onepage nav
    var navclose = $('#onepage-menu');
    if(navclose.length){
        $(".nav-menu li a").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });
        
        if ($.fn.onePageNav) {
            $(".nav-menu").onePageNav({
                currentClass: "active-menu"
            });
        }
    }

    // Menu Indicator
    $(window).on('load', function() {
        var $menu = $('.menu-indicator');
        var $items = $menu.find('.indicator-item');
        new SlidingMenu({
            'menu': $menu,
            'items': $items,
            'duration': 500,
            'slidingClass': 'line-add'
        });
        function over(current, data) {
            $(data.options.items).removeClass('indicator');
            $(current).addClass('indicator');
        }
        function leave(current, data) {
            $(data.options.items).removeClass('indicator');
            $(data.itemActive).addClass('indicator');
        }
    });

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });
    
    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),

        // lg device
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        autoplay = owlCarousel.data('autoplay'),
        smartSpeed = owlCarousel.data('smart-speed'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        center= owlCarousel.data('center'),
        hoverPause = owlCarousel.data('hoverpause'),

        // md device
        itemsMd = owlCarousel.data('items-md'),
        navMd = owlCarousel.data('nav-md'),
        dotsMd = owlCarousel.data('dots-md'),
        marginMd = owlCarousel.data('margin-md'),
        centerMd = owlCarousel.data('center-md'),

        // sm device
        itemsSm = owlCarousel.data('items-sm'),
        navSm = owlCarousel.data('nav-sm'),
        dotsSm = owlCarousel.data('dots-sm'),
        marginSm = owlCarousel.data('margin-sm'),

        // xs device
        itemsXs = owlCarousel.data('items-xs'),
        navXs = owlCarousel.data('nav-xs'),
        marginXs = owlCarousel.data('margin-xs'),
        dotsXs = owlCarousel.data('dots-xs');

        owlCarousel.owlCarousel({
            
            // Default Function
            loop: (loop ? true : false),
            lazyLoad: true,
            autoplayHoverPause: (hoverPause ? true : false),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            responsive: {

                // xs device
                0: {
                    items: (itemsXs ? itemsXs : 1),
                    nav: (navXs ? true : false),
                    dots: (dotsXs ? true : false),
                    center: false,
                    margin: (marginXs ? marginXs : 0),
                },

                // sm device
                576: {
                    items: (itemsSm ? itemsSm : 3),
                    nav: (navSm ? true : false),
                    dots: (dotsSm ? true : false),
                    center: false,
                    margin: (marginSm ? marginSm : 0),
                },

                // md device
                768: {
                    items: (itemsMd ? itemsMd : 4),
                    nav: (navMd ? true : false),
                    dots: (dotsMd ? true : false),
                    center: (centerMd ? true : false),
                    margin: (marginMd ? marginMd : 0),
                },

                // lg device
                992: {
                    items: (items ? items : 4),
                    margin: (margin ? margin : 0),
                    dots: (dots ? true : false),
                    nav: (nav ? true : false),
                    center: (center ? true : false),
                }
            }
        });
    });

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // 3D Slider Carousel
    if ($('.carousel').length) { 
        $('.carousel').carousel({
            autoplay: true,
            duration: 0,
            shift: 5,
            padding: 10,
        });
    }

   //preloader
    $(window).on( 'load', function() {
        $("#tekhub-load").delay(1000).fadeOut(500);
    })

    if($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on( 'click', function(){
         $('.rs-menu').css('opacity', '1');
         $('.rs-menu').css('z-index', '1');
     });
    }

    // wow init
    new WOW().init();
    // AOS init
    AOS.init();

    // magnificPopup init
    var imagepopup = $('.image-popup');
    if(imagepopup.length) {
        $('.image-popup').magnificPopup({
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
                }
            },
            gallery: {
                enabled: true
            }
        });
    }

    // scrollTop init
    var totop = $('#scrollUp'); 
    if(totop.length){   
        win.on('scroll', function() {
            if (win.scrollTop() > 150) {
                totop.fadeIn();
            } else {
                totop.fadeOut();
            }
        });
        totop.on('click', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 500)
        });
    }

    //Videos popup jQuery 
    var popup = $('.popup-videos');
    if(popup.length) {
        $('.popup-videos').magnificPopup({
            disableOn: 10,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        }); 
    }
    
    //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if(navclose.length){
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    } 
    var offwrap  = $('.off-wrap');
    if(offwrap.length){
        $('.off-wrap').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }
    var navbodyclose = $('.nav-expanded');
    if(navbodyclose.length){
        $('.nav-expanded').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    } 

    //Toggle search

    $(".cart li.search").on('click', function(){
        $(".search-bar").slideToggle();
    });  
        
    // Isotop init
    var gridfilter = $('.grid');
        if(gridfilter.length){
        $('.grid').imagesLoaded(function() {
            $('.gridfilter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }   
        
    // Isotop Filter
    if ($('.gridfilter button').length) {
        var projectfiler = $('.gridfilter button');
            if(projectfiler.length){
            $('.gridfilter button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        }
    }

    // Testimonial Slider
    var sliderfor = $('.slider-for');
    if(sliderfor.length){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            asNavFor: '.slider-nav',
            rtl:true
        });
    }
    var slidernav = $('.slider-nav');
    if(slidernav.length){
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            vertical: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            directionNav: true,
            rtl:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }
    
	
})(jQuery);