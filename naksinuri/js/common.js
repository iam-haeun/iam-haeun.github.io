$(document).ready(function(){
    // skip - 웹접근성 컨텐츠 이동 시 헤더 높이 잘림 수정
    $('#skip a').on('click',function(){
        var headerHeight = $('#header').outerHeight();
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'body' : href);
        var position = target.offset().top - headerHeight;
        $('html, body').animate({ scrollTop: position }, 100, 'swing');
    });
    

    // gnb
    $(window).on('load resize', function(){	
        var view_w = window.innerWidth;
        var btnMenuOpen = $('.menu-btn');	
        var btnMenuClose = $('.menu-close');
        var gnbWrap = $('.gnb-wrap');
    
        //초기화
        $('#gnb ul li a').off();
        $('#gnb').off();
        $('.depth1 > li').off();
        btnMenuOpen.off();
    
        // for Tab, Mobile
        if(view_w < 1201){
            //Tab, Mobile 초기화
            $('#gnb ul ul').removeAttr('style');

            if(!$('.depth1 > li').hasClass('on')){
                $('.depth1 > li:first').addClass('on');
            }

            btnMenuOpen.on('click',function(e){
                e.preventDefault();
    
                $('body').addClass('open-menu');
                gnbWrap.addClass('on');
            });
    
            btnMenuClose.on('click',function(e){
                e.preventDefault();
    
                menuClose();
            });
    
            function menuClose(){
                $('body').removeClass('open-menu');
                gnbWrap.removeClass('on');
                $('.depth1 > li').removeClass('on');
                $('.depth1 > li:first').addClass('on');
            }

            $('.gnb-wrap').on('click',function(e){
                var target = $(e.target);
                if(! target.closest('.gnb-wrap .gnb-cont').length){
                    menuClose();
                }
            });

            $('.depth1 > li > a').on('click',function(){
                $('.depth1 > li').removeClass('on');
                $(this).parent().addClass('on');
            });
        }
    
        // for PC
        else{
            //PC 초기화
            $('body').removeClass('open-menu');
            gnbWrap.removeClass('on');
            $('.depth1 > li').removeClass('on');

            $('#gnb ul li a').on('mouseover focus',function(){
                $('.depth2, .gnb-bg').stop().slideDown(300);
            });
        
            $('#gnb').on('mouseleave',function(){
                $('.depth2, .gnb-bg').stop().slideUp(100);
            });

            $('.depth1 > li').on('mouseenter focusin',function(){
                $(this).addClass('on');
            });
            $('.depth1 > li').on('mouseleave focusout',function(){
                $(this).removeClass('on');
            });
        
            $('*:not("#gnb a")').on('focus',function(){
                $('.depth2, .gnb-bg').stop().slideUp(100);
            });
        }
    });
});