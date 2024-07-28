$(document).ready(function(){
    // 상단 select
	$('.select-lang > a').on('click',function(e){
		var $this = $(this);

		if($this.parent().hasClass('on')){
			$this.parent().removeClass('on');
            $this.attr('title','언어 선택 열기');
			$this.siblings('.select-list').slideUp();
		}else{
			$this.parent().addClass('on');
            $this.attr('title','언어 선택 닫기');
			$this.siblings('.select-list').slideDown();
		}
	});
	$(document).on('mouseup',function(e){
		if($('.select-lang').has(e.target).length == 0){
			$('.select-lang').removeClass('on');
            $('.select-lang > a').attr('title','언어 선택 열기');
			$('.select-list').slideUp();
		}
	});
	$('.select-list li:last-child a').on('focusout',function(){
		$('.select-lang').removeClass('on');
        $('.select-lang > a').attr('title','언어 선택 열기');
		$('.select-list').slideUp();
	});


    // gnb
    $('#gnb ul li a, .sub-wrap').on('mouseover focus',function(){
        $(this).parent().siblings().children('a').removeClass('on');
        $('.sub-wrap').stop().slideDown(300);
        $('#header').addClass('on');
    });

    $('#gnb ul li a').on('keydown',function(e){
        if (e.shiftKey && e.keyCode == 9) {
            $(this).removeClass('on');
            $('.sub-wrap').stop().slideUp(100);
            $('.sub-wrap .menu-box h2').removeClass('on');
            $('#header').removeClass('on');
        }
    });

    $('#gnb, .sub-wrap').on('mouseleave',function(){
        $('.sub-wrap').stop().slideUp(100);
        $('.sub-wrap .menu-box h2').removeClass('on');
        $('#gnb ul li a').removeClass('on');
        $('#header').removeClass('on');
    });

    $('.sub-wrap .menu-box ul li a:last').on('focusout',function(){
        $('.sub-wrap').stop().slideUp(100);
        $('#header').removeClass('on');
    });

    $('.sub-wrap .menu-box [class*="menu-"]').on('mouseenter',function(){
        var idx = $('.sub-wrap .menu-box [class*="menu-"]').index($(this));
        $('.sub-wrap .menu-box [class*="menu-"]').each(function(index){
            if(idx == index){
                $(this).find('h2').addClass('on');
                $("#gnb a").eq(index).addClass('on');
            }else{
                $(this).find('h2').removeClass('on');
                $("#gnb a").eq(index).removeClass('on');
            }
        });
    });

    $('.sub-wrap .menu-box ul li a').on('focus',function(){
        $('.sub-wrap .menu-box h2').removeClass('on');
        $(this).parent().parent().siblings('h2').addClass('on');
    });


    // 전체메뉴, 모바일메뉴
    $(window).on('load resize', function(){	
        var view_w = window.innerWidth;
        var btnMenuOpen = $('.menu-btn');	
        var btnMenuClose = $('.menu-close');
        var menuModal = $('.menu-modal');
        var menuAll = $('#all-menu');
        var menuMo = $('#mo-menu');
        var gnb = $('#mo-menu .menu-wrap .depth1 li a');	
        var depthCont = $('#mo-menu .menu-wrap .depth2');
    
        //초기화
        $('body').removeClass('open-modal');
        menuModal.off().removeClass('on');
        menuAll.removeClass('on');
        menuMo.removeClass('on');
        gnb.off().removeClass('on');
        btnMenuOpen.off();
    
        // for Tab, Mobile
        if(view_w < 1201){
            //Tab, Mobile 초기화
            $('#mo-menu .menu-wrap .depth1 [class*="depth"]').css('display','none');

            if(gnb.siblings('ul').length || depthCont){
                gnb.siblings('ul').prev('a').addClass('has-sub');
                depthCont.prev('a').addClass('has-sub');
            }

            btnMenuOpen.on('click',function(e){		
                e.preventDefault();
        
                $('body').addClass('open-modal');
                menuModal.addClass('on');
                menuMo.addClass('on');
            });	        

            btnMenuClose.on('click',function(e){
                e.preventDefault();

                menuClose();
            });	

            function menuClose(){
                $('body').removeClass('open-modal');
                menuModal.removeClass('on');
                menuMo.removeClass('on');
                $('#mo-menu .menu-wrap .depth1 li a').removeClass('on');
                $('#mo-menu .menu-wrap .depth1 [class*="depth"]').css('display','none');
            }

            menuModal.on('click',function(e){
                var target = $(e.target);
                if(! target.closest('.menu-modal #mo-menu').length){
                    menuClose();
                }
            });

            gnb.on('click',function(e){
                var $this = $(this);

                if($this.hasClass('has-sub')){
                    e.preventDefault();
                }

                if($this.hasClass('on')){
                    if($this.siblings('.depth2').length){
                        $this.removeClass('on').siblings('.depth2').slideUp().find('.depth3').slideUp();
                    }else{
                        $this.removeClass('on').siblings('.depth3').slideUp();
                    }
                }else{
                    if($this.siblings('.depth2').length){
                        $this.parent().siblings('li').find('a').removeClass('on').siblings('.depth2').slideUp().find('.depth3').slideUp();
                        $this.addClass('on').siblings('.depth2').slideDown();
                    }else{
                        $this.parent().siblings('li').find('a').removeClass('on').siblings('.depth3').slideUp();
                        $this.addClass('on').siblings('.depth3').slideDown();
                    }
                }
            });
        }
    
        // for PC
        else{
            btnMenuOpen.on('click',function(e){		
                e.preventDefault();
                var content = $('#all-menu').find('.cont-body');
        
                $('body').addClass('open-modal');
                menuModal.addClass('on');
                menuAll.addClass('on');
                btnMenuClose.focus();
                content.find('a:last').focusout(function(){btnMenuClose.focus();});  
            });	           

            btnMenuClose.on('click',function(e){
                e.preventDefault();

                menuClose();
            });	

            function menuClose(){
                $('body').removeClass('open-modal');
                menuModal.removeClass('on');
                menuAll.removeClass('on');
                btnMenuOpen.focus();
            }

            menuModal.on('click',function(e){
                var target = $(e.target);
                if(! target.closest('.menu-modal #all-menu').length){
                    menuClose();
                }
            });
        }
    });
});