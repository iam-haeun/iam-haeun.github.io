$(document).ready(function(){
    // AOS초기화
    AOS.init({
        duration: 1000
    });


    // 슬라이드 공통
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
            type: 'bullets',
            clickable: true,
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
        }
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


    // 소식 슬라이드
    var nowSlide = new Swiper('.now-slide', {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        pagination: {
            el: '.now-control .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {	
            slideChangeTransitionStart: function(){ // 접근성 추가 - tab 포커스이동
                $('.now-slide .swiper-slide').find('a').attr('tabindex', '-1');
                $('.now-slide .swiper-slide-active, .now-slide .swiper-slide-active + li').find('a').attr('tabindex', '0');
            }
        },
        breakpoints: {
            1280: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 1,
            }
        }
    });
    
    var btnNowAutoPlay = $('.now-control .btn-stop');
    btnNowAutoPlay.on('click', function() {
        var isClicked = $(this).hasClass('on');

        if (isClicked) {
            $(this).removeClass('on');
            $(this).find('span').text('일시정지');
        } else {
            $(this).addClass('on');
            $(this).find('span').text('재생');
        }
        autoPlayToggle(nowSlide, !isClicked);
    });
    
    $('.now-slide a').on('focusin', function() {
        var $this = $(this);
        slideFocusMove($this, nowSlide, btnNowAutoPlay);
    });
    $('.now-slide a').on('focusout', function() {
        var $this = $(this);
        slideFocusOutMove($this, nowSlide, btnNowAutoPlay);
    });


    // 전시 슬라이드
    var exhibitSlide = new Swiper('.exhibit-slide', {
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
            el: '.exhibit-control .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function() {
                $('.exhibit-control .progress-ani').css({display:'none'});
            },
            slideChangeTransitionEnd: function() {
                $('.exhibit-control .progress-ani').css({display:'block'});
            },	
        }
    });

    var btnExhibitAutoPlay = $('.exhibit-control .btn-stop');
    btnExhibitAutoPlay.on('click', function() {
        var isClicked = $(this).hasClass('on');

        if (isClicked) {
            $(this).removeClass('on');
            $(this).find('span').text('일시정지');
            $('.exhibit-control .progress-ani').css({animationPlayState:'running'});
        } else {
            $(this).addClass('on');
            $(this).find('span').text('재생');
            $('.exhibit-control .progress-ani').css({animationPlayState:'paused'});
        }
        autoPlayToggle(exhibitSlide, !isClicked);
    });


    // 하단 배너존 - 독립기념관은 지금
    var bannerSlide = new Swiper('.banner-slide', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        loop: true,
        pagination: {
            el: '.banner-control .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {	
            slideChangeTransitionStart: function(){ // 접근성 추가 - tab 포커스이동
                $('.banner-slide .swiper-slide').find('a').attr('tabindex', '-1');
                $('.banner-slide .swiper-slide-active').find('a').attr('tabindex', '0');
            }
        },
    });

    $('.banner-slide a').on('focusin', function() {
        bannerSlide.autoplay.stop();
    });
    $('.banner-slide a').on('focusout', function() {
        bannerSlide.autoplay.start();
    });


    // 소식 탭
    $('.tab-menu .tab-tit').on('click focus',function(e){
        e.preventDefault();

        $('.tab-menu .tab-tit').parent().removeClass('active');
        $('.tab-menu .tab-cont').removeClass('active');

        $(this).parent().addClass('active');
        $(this).siblings('.tab-cont').addClass('active');
    });


    // 전시 탭
    $('.exhibit-tab .tab-list li a').on('click',function(e){
        e.preventDefault();
        var activeTab  = $(this).attr('data-tab');
        var activeTxt  = $(this).text();
        
        $('.exhibit-tab .tab-list li').removeClass('active');
        $('.exhibit-tab .tab-list li a').removeAttr('title');
        $('.exhibit-tab .tab-cont').removeClass('active');
        
        $(this).parent().addClass('active');
        $(this).attr('title', activeTxt + ' 선택됨');
        $("#" + activeTab).addClass('active');
    });

    var activeChk = 0;
    $('.exhibit-tab .tab-list li a').each(function(i){
        var $this = $(this);
        if($this.parent().hasClass('active')){
            $this.addClass('active');
            $this.trigger('click');
            activeChk++
        }
    });


    // 주요서비스 퀵메뉴
    $('.quick-btn').on('click',function(e){
        e.preventDefault();

        $('.quick-nav').addClass('on');
        $('.quick-inner').show(300);
        $('body').addClass('open-quick');
    });

    $('.quick-close').on({
        'click' : function(e){
            e.preventDefault();

            $('.quick-nav').removeClass('on');
            $('.quick-inner').hide(300);
            $('body').removeClass('open-quick');            
        },
        'focusout' : function(){
            $('.quick-list a:first').focus();
        }
    });

    $(document).on('mouseup',function(e){
		if($('.quick-nav').has(e.target).length == 0){
			$('.quick-nav').removeClass('on');
            $('.quick-inner').hide(300);
            $('body').removeClass('open-quick');    
		}
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