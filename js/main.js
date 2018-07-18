document.body.onload = function () {
    setTimeout(function () {
        let preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
};
$(function (){
    let listImg = $('.entry');
    let phoneImg = $('.phone-img');
    let defImg = 'http://theme.crumina.net/omni/wp-content/uploads/2015/11/phone-icons-image-def-256x538_c.jpg';

    listImg.mouseover(function (){
        let dataLink = $(this).data('phone');
        phoneImg.attr('src', dataLink);
    });
    listImg.mouseout(function (){
        phoneImg.attr('src', defImg);
    });

    let swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: -40,
            stretch: -100,
            depth: 200,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    let menu_selector = ".top-menu";
    function onScroll(){
        let scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            let hash = $(this).attr("href");
            let target = $(hash);
            if (target.position().top -70 <= scroll_top && target.position().top - 70 + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active-link").removeClass("active-link");
                $(this).addClass("active-link");
            } else {
                $(this).removeClass("active-link");
            }
        });
    }
    $(document).on("scroll", onScroll);
    $('.top-menu ul li a').click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active-link").removeClass("active-link");
        $(this).addClass("active-link");
        let hash = $(this).attr("href");
        let target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });

    //Map
    ymaps.ready(init);
    let myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [50.47431308, 30.52445025],
            zoom: 11
        });
        myPlacemark = new ymaps.Placemark([50.45678219, 30.51895709]);
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable(["scrollZoom","dblClickZoom"]);
        myMap.controls.remove('default');
    }

    //Back to top
    $('.back-to-top').on('click',function (){
        $('html, body').animate({scrollTop: 0},500);
    });

    //animated
    $('.third-section-capt').css({'visibility': 'hidden'});
    $('#benefits .wpb_wrapper').css({'visibility': 'hidden'});
    $('.section-phone').css({'visibility': 'hidden'});

    $('#gallery .fourth-section-capt').css({'visibility': 'hidden'});
    $('#gallery .wpb_wrapper').css({'visibility': 'hidden'});
    $('#gallery .swiper-container').css({'visibility': 'hidden'});

    $('#why .fifth-section-capt').css({'visibility': 'hidden'});
    $('#why .wpb_wrapper').css({'visibility': 'hidden'});

    $('#how_it_works .anim-6-0').css({'visibility': 'hidden'});
    $('#how_it_works .anim-6-1').css({'visibility': 'hidden'});
    $('#how_it_works .anim-6-2').css({'visibility': 'hidden'});
    $('#how_it_works .anim-6-c .sixth-section-capt').css({'visibility': 'hidden'});
    $('#how_it_works .anim-6-c .wpb_wrapper').css({'visibility': 'hidden'});
    $('#how_it_works .anim-6-c .icon-text-description-entry').css({'visibility': 'hidden'});

    $('#team .seven-section-capt').css({'visibility': 'hidden'});
    $('#team .wpb_wrapper').css({'visibility': 'hidden'});
    $('#team .team_anim').css({'visibility': 'hidden'});

    $('#contact .eight-section-capt').css({'visibility': 'hidden'});
    $('#contact .wpb_wrapper').css({'visibility': 'hidden'});
    $('#contact .vc_text').css({'visibility': 'hidden'});
    $('#contact form').css({'visibility': 'hidden'});

    $(window).scroll(() => {
        let scrollTop = window.pageYOffset;
        if (scrollTop >= $('#benefits').position().top - 500) {
            $('.third-section-capt').css({'visibility': 'visible'}).addClass('animated flipInY');
            $('#benefits .wpb_wrapper').css({'visibility': 'visible'}).addClass('animated flipInY');
            $('.section-phone').css({'visibility': 'visible'});
            $('.section-phone .phone-icons-descriptions').addClass('animated flipInY');
            $('.section-phone .block-phone').addClass('animated flipInY');
        }

        if (scrollTop >= $('#gallery').position().top - 500){
            $('#gallery .fourth-section-capt').css({'visibility': 'visible'}).addClass('animated flipInX');
            $('#gallery .wpb_wrapper').css({'visibility': 'visible'}).addClass('animated flipInX');
            $('#gallery .swiper-container').css({'visibility': 'visible'}).addClass('animated fadeInUp');
        }

        if (scrollTop >= $('#why').position().top - 500) {
            $('#why .fifth-section-capt').css({'visibility': 'visible'}).addClass('animated flipInX');
            $('#why .wpb_wrapper').css({'visibility': 'visible'}).addClass('animated flipInX');
        }

        if (scrollTop >= $('#how_it_works').position().top - 500){
            $('#how_it_works .anim-6-0').css({'visibility': 'visible'}).addClass('animated fadeInLeft');
            $('#how_it_works .anim-6-1').css({'visibility': 'visible'}).addClass('animated fadeInRight');
        }
        if (scrollTop >= $('#how_it_works').position().top + 400) {
            $('#how_it_works .anim-6-2').css({'visibility': 'visible'}).addClass('animated fadeInRight');
            $('#how_it_works .anim-6-c .sixth-section-capt').css({'visibility': 'visible'}).addClass('animated fadeInLeft');
            $('#how_it_works .anim-6-c .wpb_wrapper').css({'visibility': 'visible'}).addClass('animated fadeInLeft');
            $('#how_it_works .anim-6-c .icon-text-description-entry').css({'visibility': 'visible'}).addClass('animated flipInY');
        }

        if (scrollTop >= $('#team').position().top - 500) {
            $('#team .seven-section-capt').css({'visibility': 'visible'}).addClass('animated flipInX');
            $('#team .wpb_wrapper').css({'visibility': 'visible'}).addClass('animated flipInX');
            $('#team .team_anim').css({'visibility': 'visible'});
            $('#team .team_anim').eq(0,3).addClass('animated fadeInLeft');
            $('#team .team_anim').eq(1,4).addClass('animated fadeInUp');
            $('#team .team_anim').eq(2,5).addClass('animated fadeInRight');
        }
        if (scrollTop >= $('#contact').position().top - 500) {
            $('#contact .eight-section-capt').css({'visibility': 'visible'}).addClass('animated flipInX');
            $('#contact .wpb_wrapper').css({'visibility': 'visible'}).addClass('animated flipInX');
            $('#contact .vc_text').css({'visibility': 'visible'}).addClass('animated fadeInLeft');
            $('#contact form').css({'visibility': 'visible'}).addClass('animated fadeInRight');
        }
    });

    if ($(window).width() <= 992){
        $('.top-menu ul').slideUp();
    } else {
        $('.top-menu ul').slideDown();
    }

    let bool = true;
    $(window).resize(function (){
        $('.drop-menu span:nth-child(1)').css({'transform': 'translateY(-10px)'});
        $('.drop-menu span:nth-child(3)').css({'transform': 'translateY(10px)'});
        bool = true;
        if ($(window).width() <= 992){
            $('.top-menu ul').slideUp();
        } else {
            $('.top-menu ul').slideDown();
        }
    });

    $('.drop-menu').click(function (){
       $('.top-menu ul').slideToggle('slow');
       if (bool) {
           $('.drop-menu span:nth-child(1)').css({'transform': 'translateY(-2px)'});
           $('.drop-menu span:nth-child(3)').css({'transform': 'translateY(2px)'});
           bool = !bool;
       } else {
           $('.drop-menu span:nth-child(1)').css({'transform': 'translateY(-10px)'});
           $('.drop-menu span:nth-child(3)').css({'transform': 'translateY(10px)'});
           bool = !bool;
       }
    });
});