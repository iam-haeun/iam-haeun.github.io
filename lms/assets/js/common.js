$(document).ready(function(){
    // ie css 변수적용
    cssVars();
    // select custom
    $('select').niceSelect();

    setGnb();
    setAllMenu();
});

// gnb
function setGnb(){
    var header = $('#header');
    var gnb = $('#gnb');
	var depth1 = $('#gnb .depth1 > li > a');
    var tablet = 1280;
	var mobile = 767; 

    depth1.on({
        'mouseenter focus' : function(){
            if(tablet < $(window).outerWidth()){
                gnb.addClass('on');
                depth1.removeClass('on');
                $(this).addClass('on');
            }
        },
        'click' : function(e){
            if(tablet >= $(window).outerWidth()){
                e.preventDefault();
                e.stopPropagation();

                gnb.addClass('on');
                if(!$(this).hasClass('on')){
                    depth1.removeClass('on');
                    $(this).addClass('on');
                }else{
                    if(mobile >= $(window).outerWidth()){
                        gnb.removeClass('on');
                        $(this).removeClass('on');
                    }
                }
            }
        }
    });

    gnb.on('mouseleave',function(){
        if(tablet < $(window).outerWidth()){
            gnb.removeClass('on');
			depth1.removeClass('on');
		}
    });

    $('*:not("#gnb a")').on('click focus',function(){
        gnb.removeClass('on');
		depth1.removeClass('on');
    });

	$('#header .mo-btn').on('click',function(){
        if(header.hasClass('on')){
            header.removeClass('on');
            $('body').removeClass('no-scroll');
        }else{
            header.addClass('on');
            $('body').addClass('no-scroll');
        }
	});

    $(window).on('resize',function(){
        if($(window).outerWidth() >= mobile){
            header.removeClass('on');
            $('body').removeClass('no-scroll');
        }else{
            $('.menu-btn').removeClass('on');
            $('#all-menu').removeClass('on');
        }
    });
}

// 전체메뉴
function setAllMenu(){
    var target = '#menu-all';

    $('a[href="'+target+'"]').on('click',function(e){
        e.preventDefault();
        
        var $this = $(this);
        if($this.hasClass('on')){
            $this.removeClass('on');
            $(target).removeClass('on');
        }else{
            $this.addClass('on');
            $(target).addClass('on');
        }
    });

    $(target).find('a:last').on('keydown',function(e){
        if(!e.shiftKey && e.keyCode == 9){
            e.preventDefault();
            $('a[href="'+target+'"]').removeClass('on').focus();
            $(target).removeClass('on');
        }
    });
}