$(document).ready(function(){

    // 뉴스 & 갤러리 탭
    var tabList = $('.main-cont .tab-list');
    tabList.find('li .item').hide();
    tabList.find('li.active .item').show();
    
    function listTabMenuToggle(event){
        var $this = $(this);
        $this.next('.item').show().parent('li').addClass('active').siblings('li').removeClass('active').find('.item').hide();
        return false;
    }
    tabList.find('> li > a').click(listTabMenuToggle).focus(listTabMenuToggle);


    // 비주얼 슬라이드
    var visualSlide = new Swiper('.visual-slide', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        pagination: {
            el: '.visual-slide .control-box .swiper-pagination',
            type: 'custom',
            clickable: false,
            renderCustom: function(swiper, current, total) {
                return (
                    '<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + 0 + (total) + '</span>'
                );
            }
        },
        on: {
            slideChangeTransitionStart: function() {
                $('.visual-slide .control-box .progress-bar .progress-ani').css({display:'none'});
            },
            slideChangeTransitionEnd: function() {
                $('.visual-slide .control-box .progress-bar .progress-ani').css({display:'block'});
            },	
        }
    });
    $('.visual-slide .control-box .btn-stop').on('click', function() {
        visualSlide.autoplay.stop();
        $(this).hide().next().show().focus();
        $('.visual-slide .control-box .progress-bar .progress-ani').css({animationPlayState:'paused'});
    });
    $('.visual-slide .control-box .btn-play').on('click', function() {
        visualSlide.autoplay.start();
        $(this).hide().prev().show().focus();
        $('.visual-slide .control-box .progress-bar .progress-ani').css({animationPlayState:'running'});
    });


    // 체험마을 슬라이드
    var villageSlide = new Swiper('.village-slide', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        touchRatio: 0,
        allowTouchMove : false,
        pagination: {
            el: '.village-slide .control-box .swiper-pagination',
            type: 'custom',
            clickable: false,
            renderCustom: function(swiper, current, total) {
                if (current < 10 & total > 10) {
                    return '<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + (total) + '</span>'
                } else if (current >= 10 & total > 10) {
                    return '<span class="current">' + (current) + '</span>' + '<span class="total">' + (total) + '</span>'
                } 
            }
        },
        navigation: {
            nextEl: '.village-slide .control-box .btn-next',
            prevEl: '.village-slide .control-box .btn-prev'
        },  
        on: {
            slideChangeTransitionStart: function() {
                $('.village-slide .swiper-slide').find('a').attr('tabindex', '-1');
                $('.village-slide .swiper-slide-active').find('a').attr('tabindex', '0');
                $('.village-slide .control-box .progress-bar .progress-ani').css({display:'none'});
            },
            slideChangeTransitionEnd: function() {
                $('.village-slide .control-box .progress-bar .progress-ani').css({display:'block'});
            },	
        },
        breakpoints: {
            1024: {
                touchRatio: 1,
                allowTouchMove : true,
            }
        }
    });
    $('.village-slide .control-box .btn-stop').on('click', function() {
        villageSlide.autoplay.stop();
        villageThumb.autoplay.stop();
        $(this).hide().next().show().focus();
        $('.village-slide .control-box .progress-bar .progress-ani').css({animationPlayState:'paused'});
    });
    $('.village-slide .control-box .btn-play').on('click', function() {
        villageSlide.autoplay.start();
        villageThumb.autoplay.start();
        $(this).hide().prev().show().focus();
        $('.village-slide .control-box .progress-bar .progress-ani').css({animationPlayState:'running'});
    });
    $('.village-area .swiper-slide a').on('focusin', function(){
        villageSlide.autoplay.stop();
        villageThumb.autoplay.stop();
        $('.village-slide .control-box .progress-bar .progress-ani').css({animationPlayState:'paused'});
    });
    $('.village-area .swiper-slide a').on('focusout', function(){
        villageSlide.autoplay.start();
        villageThumb.autoplay.start();
        $('.village-slide .control-box .progress-bar .progress-ani').css({animationPlayState:'running'});
    });


    // 체험마을 썸네일
    var villageThumb = new Swiper('.village-thumb', {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        touchRatio: 0,
        allowTouchMove : false,
        navigation: {
            nextEl: '.village-slide .control-box .btn-next',
            prevEl: '.village-slide .control-box .btn-prev'
        },      
        on: {	
            slideChangeTransitionStart: function(){ // 접근성 추가 - tab 포커스이동
                $('.village-thumb .swiper-slide').find('a').attr('tabindex', '-1');
                $('.village-thumb .swiper-slide-active, .village-thumb .swiper-slide-active + li, .village-thumb .swiper-slide-active + li + li').find('a').attr('tabindex', '0');
            }
        },
    });


    // 사이트 배너 슬라이드
    var siteBanner = new Swiper('.site-banner', {
        slidesPerView: 5,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: '.banner-area .control-box .btn-next',
            prevEl: '.banner-area .control-box .btn-prev'
        },      
        on: {	
            slideChangeTransitionStart: function(){ // 접근성 추가 - tab 포커스이동
                $('.site-banner .swiper-slide').find('a').attr('tabindex', '-1');
                $('.site-banner .swiper-slide-active, .site-banner .swiper-slide-active + li, .site-banner .swiper-slide-active + li + li, .site-banner .swiper-slide-active + li + li + li, .site-banner .swiper-slide-active + li + li + li + li').find('a').attr('tabindex', '0');
            }
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 1,
            }
        }
    });
    $('.banner-area .control-box .btn-stop').on('click', function() {
        siteBanner.autoplay.stop();
        $(this).hide().next().show().focus();
    });
    $('.banner-area .control-box .btn-play').on('click', function() {
        siteBanner.autoplay.start();
        $(this).hide().prev().show().focus();
    });
    $('.site-banner .swiper-slide a').on('focusin', function(){
        siteBanner.autoplay.stop();
    });
    $('.site-banner .swiper-slide a').on('focusout', function(){
        siteBanner.autoplay.start();
    });	
    
});