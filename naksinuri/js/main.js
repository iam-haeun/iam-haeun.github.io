$(document).ready(function(){
    //자동재생 컨트롤
    function autoPlayToggle(slide, chck){
        if (chck == true) {
            slide.autoplay.stop();
        } else {
            slide.autoplay.start();
        }
    }
    //슬라이드 포커스
    function slideFocusMove(el, slide, $pause){
        var $this = el;
        var $slide = slide;
        if($slide.autoplay.running == true) {
            $slide.autoplay.stop();
            $pause.addClass('on');
        }
    }
    //슬라이드 포커스
    function slideFocusOutMove(el, slide, $pause){
        var $this = el;
        var $slide = slide;
        if($slide.autoplay.running == false) {
            $slide.autoplay.start();
            $pause.removeClass('on');
        }
    }


    // 비주얼 슬라이드
    var visualSlide = new Swiper('.visual-slide', {
        effect: 'fade',
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        pagination: {
            el: '.visual-control .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.visual-control .btn-next',
            prevEl: '.visual-control .btn-prev'
        },  
        on: {
            slideChangeTransitionStart: function() {
                $('.visual-control .progress-ani').css({display:'none'});
            },
            slideChangeTransitionEnd: function() {
                $('.visual-control .progress-ani').css({display:'block'});
            },	
        },
    });

    var btnVisualAutoPlay = $('.visual-control .btn-stop');
    btnVisualAutoPlay.on('click', function() {
        var isClicked = $(this).hasClass('on');

        if (isClicked) {
            $(this).removeClass('on');
            $(this).find('span').text('일시정지');
            $('.visual-control .progress-ani').css({animationPlayState:'running'});
        } else {
            $(this).addClass('on');
            $(this).find('span').text('재생');
            $('.visual-control .progress-ani').css({animationPlayState:'paused'});
        }
        autoPlayToggle(visualSlide, !isClicked);
    });


    // 낚시전문 교육 프로그램 슬라이드
    var eduSlide = new Swiper('.edu-slide', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        pagination: {
            el: '.edu-control .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.edu-control .btn-next',
            prevEl: '.edu-control .btn-prev'
        },  
        on: {	
            slideChangeTransitionStart: function(){ // 접근성 추가 - tab 포커스이동
                $('.edu-slide .swiper-slide').find('a').attr('tabindex', '-1');
                $('.edu-slide .swiper-slide-active').find('a').attr('tabindex', '0');
            }
        },
    });

    var btnEduAutoPlay = $('.edu-control .btn-stop');
    btnEduAutoPlay.on('click', function() {
        var isClicked = $(this).hasClass('on');

        if (isClicked) {
            $(this).removeClass('on');
            $(this).find('span').text('일시정지');
        } else {
            $(this).addClass('on');
            $(this).find('span').text('재생');
        }
        autoPlayToggle(eduSlide, !isClicked);
    });
    
    $('.edu-slide a').on('focusin', function() {
        var $this = $(this);
        slideFocusMove($this, eduSlide, btnEduAutoPlay);
    });
    $('.edu-slide a').on('focusout', function() {
        var $this = $(this);
        slideFocusOutMove($this, eduSlide, btnEduAutoPlay);
    });


    // 낚시의 품격 슬라이드
    var fishingSlide = new Swiper('.fishing-slide', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        pagination: {
            el: '.fishing-control .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.fishing-control .btn-next',
            prevEl: '.fishing-control .btn-prev'
        },  
        on: {	
            slideChangeTransitionStart: function(){ // 접근성 추가 - tab 포커스이동
                $('.fishing-slide .swiper-slide').find('a').attr('tabindex', '-1');
                $('.fishing-slide .swiper-slide-active').find('a').attr('tabindex', '0');
            }
        },
    });

    var btnFishingAutoPlay = $('.fishing-control .btn-stop');
    btnFishingAutoPlay.on('click', function() {
        var isClicked = $(this).hasClass('on');

        if (isClicked) {
            $(this).removeClass('on');
            $(this).find('span').text('일시정지');
        } else {
            $(this).addClass('on');
            $(this).find('span').text('재생');
        }
        autoPlayToggle(fishingSlide, !isClicked);
    });
    
    $('.fishing-slide a').on('focusin', function() {
        var $this = $(this);
        slideFocusMove($this, fishingSlide, btnFishingAutoPlay);
    });
    $('.fishing-slide a').on('focusout', function() {
        var $this = $(this);
        slideFocusOutMove($this, fishingSlide, btnFishingAutoPlay);
    });


    // 배너모음 슬라이드
    var bannerSlide = new Swiper('.banner-slide', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: '.banner-control .btn-next',
            prevEl: '.banner-control .btn-prev'
        },  
        on: {	
            slideChangeTransitionStart: function(){ // 접근성 추가 - tab 포커스이동
                $('.banner-slide .swiper-slide').find('a').attr('tabindex', '-1');
                $('.banner-slide .swiper-slide-active, .banner-slide .swiper-slide-active + li, .banner-slide .swiper-slide-active + li + li, .banner-slide .swiper-slide-active + li + li + li').find('a').attr('tabindex', '0');
            }
        },
        breakpoints: {
            767: {
                spaceBetween: 10,
            }
        }
    });

    var btnBannerAutoPlay = $('.banner-control .btn-stop');
    btnBannerAutoPlay.on('click', function() {
        var isClicked = $(this).hasClass('on');

        if (isClicked) {
            $(this).removeClass('on');
            $(this).find('span').text('정지');
        } else {
            $(this).addClass('on');
            $(this).find('span').text('재생');
        }
        autoPlayToggle(bannerSlide, !isClicked);
    });

    $('.banner-slide a').on('focusin', function() {
        var $this = $(this);
        slideFocusMove($this, bannerSlide, btnBannerAutoPlay);
    });
    $('.banner-slide a').on('focusout', function() {
        var $this = $(this);
        slideFocusOutMove($this, bannerSlide, btnBannerAutoPlay);
    });


    // 소식 탭
    $('.tab-menu .tab-tit').on('click focus',function(e){
        e.preventDefault();

        $('.tab-menu .tab-tit').parent().removeClass('active');
        $('.tab-menu .tab-cont').removeClass('active');

        $(this).parent().addClass('active');
        $(this).siblings('.tab-cont').addClass('active');
    });


    // 상단 이동 버튼
    $('#top-btn').on('click',function(){
		$('html, body').animate({scrollTop:0}, 400);
	});

	$(window).on('scroll resize', function(){
        if($(window).scrollTop() > 100){
            $('#top-btn').addClass('on');
        }else{
            $('#top-btn').removeClass('on');
        }
	});
});