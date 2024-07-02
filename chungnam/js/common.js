var menuOpenChk = false;

$(function() {
    
    // 본문/주메뉴 바로가기 버튼
    go_skipnav_lnk();
    function go_skipnav_lnk(){
        var btn = $('#skipNav .btn_skipNav');
        
        $(btn).keyup(function(){
            var keyCode = event.keyCode;
            if(keyCode == 13){
                find_skiptar(this);
            }
        });
        
        $(btn).click(function(){
            find_skiptar(this);
        });
        
        function find_skiptar(obj){
            var this_tar = $(obj).attr('tar');
            //var focus_tar = $(this_tar).find('a:first-of-type')[0];
            
            if( $(this_tar).find('#skipFocus').length > 0 ){
            	var focus_tar = $(this_tar).find('#skipFocus');
            }else{
            	var focus_tar = $(this_tar).find('a:first-of-type')[0];
            }
            
            if($(this_tar).find('#main_page').length > 0){
                var focus_tar = $(this_tar).find('button:first-of-type')[0];
            }
//            console.log($(this_tar));
//            console.log($(focus_tar));

            var this_tar_scr = $(this_tar).offset();

            $(window).scrollTop(this_tar_scr.top);
            $(focus_tar).focus();
        }
    }
    
    
    
    
    
    //바로가기 버튼 탭키 접근시 보임
//    fn_skipNav();
    function fn_skipNav(){
        
        var skipNav = $('#skipNav').find('li');
        var skipNav_last = $('#skipNav').find('li:last-child');
        var skipNav_gnb = $(skipNav).find('a').attr('href');

        $(skipNav).keyup(function(){
            var keyCode = event.keyCode;
            if(keyCode == 9) {
                $(this).addClass('act');
                $(this).siblings('li').removeClass('act');
            }
        });
        
        $(skipNav).keydown(function(){
            var keyCode = event.keyCode;
            if(keyCode == 13){
                
                var this_href = $(this).find('a').attr('focusTarget');
                
                var this_tar = $(this_href);
                
                var tar_scr = $(this_tar).scrollTop();
                $(window).scrollTop(tar_scr);
                $(this_tar).focus();
                
            }
        });

        $(skipNav).focusout(function(){
            $(this).removeClass('act');
        });
        
    }
    
    
    // $('.dropdown-toggle').dropdown();
    // topNavWidthSetting();
    // $(window).resize(function() {
    //     topNavWidthSetting();
    // });
    
    
    
    
    
    $('header nav.main_menu ul.basic_menu>li>a').focus(function(){
        if(menuOpenChk==false) {
            $('.main_sub_menu').hide();
            
            $(this).next('.main_sub_menu').show();
            $('nav.main_menu ul.basic_menu>li').removeClass();
            $(this).parent('li').addClass('act');
        }
    });

    
    //Tab키 누를경우 메뉴활성화 / 전체메뉴일땐 비활성화
//    $('header nav.main_menu ul.basic_menu>li>a').keyup(function(){
//        if(menuOpenChk==false) {
//            var keyCode = event.keyCode;
//            $('.main_sub_menu').hide();
//            if(keyCode==9){
//                $(this).next('.main_sub_menu').show();
//                $('nav.main_menu ul.basic_menu>li').removeClass();
//                $(this).parent('li').addClass('act');
//            }
//        }
//    });
    
    // 서브메뉴에서 나갈 경우 메뉴닫힘 #3
    $('header nav.main_menu ul.basic_menu > li:last-child > a ~ ul.main_sub_menu > li:last-child > a ~ ul.main_sub_sub_menu li:last-child > a').keydown(function(){
        var keyCode = event.keyCode;
        
        if(menuOpenChk==false) {
            //해당 메뉴만 닫기
            if(keyCode==9 ){
                console.log('tab key last');
                
                $('nav.main_menu ul.basic_menu>li').removeClass();
                $('.main_sub_menu').slideUp();
            }
        } else {
            //만약 전체 메뉴가 열려 있는 상태였으면 전체메뉴를 닫기
            if(keyCode==9 ){
                $('#chngnamMenu .all_menu_open').remove();
                $('nav.main_menu ul.basic_menu ul.main_sub_menu').removeAttr('style');
                $('header').removeClass().addClass('noact');
                menuOpenChk=false;
            }
        }
    });
    
/*
    // 서브메뉴에서 나갈 경우 메뉴닫힘 #1 
    $('nav.main_menu ul.basic_menu ul.main_sub_menu>li:last-child').keydown(function(){
        if(menuOpenChk==false) {
            var subChk = $(this).children('.main_sub_sub_menu'); // 3부메뉴 있으면 검증하지않음
            var keyCode = event.keyCode;
            if(keyCode==9 && subChk==0){
                console.log('tab key 2');
                
                $('nav.main_menu ul.basic_menu>li').removeClass();
                $('.main_sub_menu').hide();
                //$(this).parents('ul.main_sub_menu').hide();
            }
        }
    });
    // 서브메뉴에서 나갈 경우 메뉴닫힘 #2
    $('nav.main_menu ul.basic_menu ul.main_sub_menu>li:last-child>.main_sub_sub_menu>li:last-child').keydown(function(){
        if(menuOpenChk==false) {
            var keyCode = event.keyCode;
            if(keyCode==9 ){
                console.log('tab key 3');
                
                $('nav.main_menu ul.basic_menu>li').removeClass();
                $('.main_sub_menu').hide();
            }
        }
    });
*/
    
    

   // 마우스 오버 메뉴활성화 / 전체메뉴일땐 비활성화
   $('header nav.main_menu ul.basic_menu>li>a').hover(function(){
        if(menuOpenChk==false) {
            $('.main_sub_menu').hide();
            $('nav.main_menu ul.basic_menu>li').removeClass();
            $(this).parent('li').addClass('act')
            $(this).next('.main_sub_menu').show();
        }
   });
   
   // 메뉴벗어나면 메뉴닫기#1
   $('header .main_sub_menu').mouseleave(function(){
        if(menuOpenChk==false) {
            $(this).hide();
            $('nav.main_menu ul.basic_menu>li').removeClass();
        }
   });
   // 메뉴벗어나면 메뉴닫기#2
   $('header .head_top').hover(function(){
        if(menuOpenChk==false) {
            $('.main_sub_menu').hide();
            $('nav.main_menu ul.basic_menu>li').removeClass();
        }
   })


   $(window).resize(function(){
    $(" .main_menu > ul.basic_menu > li ul.main_sub_menu ").hide();
        if(menuOpenChk){

            $(" .main_menu > ul.basic_menu > li ul.main_sub_menu ").removeAttr('style');
            $(" .main_menu > ul.basic_menu > li ul.main_sub_menu ").show();
            var finalHeight = returnMenuHeight();
            $('#chngnamMenu .all_menu_open').height(finalHeight);
        }
   });
   
   // 서브 탭 메뉴추가
   $(".tab_menu").on("click", function(){
		$this = $(this);
		$tab_menu_num = $this.data('tab-menu');
		
		$this.siblings().removeClass('act');
		$this.addClass('act');
		
		console.log($tab_menu_num);
		$('div[class^="tab_sub_"]').fadeOut();
		$('.tab_sub_'+$tab_menu_num).fadeIn();
	});
   
	var swiper2 = new Swiper('.mbanSlide', {
		autoplay: 5000,
		nextButton: '.nextSlide_bn',
		prevButton: '.prevSlide_bn',
		slidesPerView: 5,
		loop: true,
		spaceBetween: 8,
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			800: {
				slidesPerView: 3,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 0
			}
		},
		onSlideChangeStart: function(){ //�묎렐�� 異붽� - tab �ъ빱�ㅼ씠��
			$('.mbanSlide li').find('a').attr('tabindex', -1);
			$('.mbanSlide li.swiper-slide-active, .mbanSlide li.swiper-slide-active + li, .mbanSlide li.swiper-slide-active + li + li, .mbanSlide li.swiper-slide-active + li + li + li, .mbanSlide li.swiper-slide-active + li + li + li + li').find('a').attr('tabindex', 0);
		}
	});
	$('.mBanner').find( '.startSlide_bn' ).on( 'click', function () {
		swiper2.startAutoplay ();
		$(this).hide().prev().show().focus();
	});
	$('.mBanner').find( '.stopSlide_bn' ).on( 'click', function () {
		swiper2.stopAutoplay ();
		$(this).hide().next().show().focus();
	});
	$('.mbanSlide li' ).focusin( function () {
		swiper2.stopAutoplay ();
		$('.mBanner').find( '.stopSlide_bn' ).hide().next().show();
	});
});

function menuAllOpen(){
    if(menuOpenChk==false) {
        //210205
        $('.menu_open').attr('title', '전체 메뉴 닫기');
        $('.menu_open').find('.blind').html('전체 메뉴 닫기 버튼');
        
        $('nav.main_menu ul.basic_menu ul.main_sub_menu').show();       // 모든 메뉴 활성화
        var finalHeight = returnMenuHeight();
        $('#chngnamMenu').prepend("<div class='all_menu_open' style='height:"+finalHeight+"px'></div>");
        $('header').removeClass().addClass('act');
        menuOpenChk=true;

        setTimeout(function(){
            $(" .main_menu > ul.basic_menu > li ul.main_sub_menu ").removeAttr('style');
            $(" .main_menu > ul.basic_menu > li ul.main_sub_menu ").show();
            var finalHeight = returnMenuHeight();
            $('#chngnamMenu .all_menu_open').height(finalHeight);
        },100)
    } else {
        //210205
        $('.menu_open').attr('title', '전체 메뉴 열기');
        $('.menu_open').find('.blind').html('전체 메뉴 열기 버튼');
        
        $('#chngnamMenu .all_menu_open').remove();
        $('nav.main_menu ul.basic_menu ul.main_sub_menu').removeAttr('style');
        $('header').removeClass().addClass('noact');
        menuOpenChk=false;
    }
}


// 로고,메뉴바, 열린 메뉴바 높이 구하기
function returnMenuHeight(){
    var topHeight = $('.head_top').innerHeight() + $('nav.main_menu').innerHeight(); // 로고랑 서브메뉴 높이
        
    var liCnt = $('.basic_menu>li').length; // 메뉴갯수
    var longSubMenuHeight=0;                // 서브메뉴가 제일 긴 실제 높이 가져오기
    var longSubDivHeight=0;              // 서브메뉴가 제일 긴 DIV 순 높이 가져오기
    for (i=1; i<liCnt+1; i++) {
        var heighet = $(" .main_menu > ul.basic_menu > li:nth-child("+i+") ul.main_sub_menu ").innerHeight();
        if(longSubMenuHeight < heighet) {
            longSubMenuHeight = heighet;
            longSubDivHeight = $(" .main_menu > ul.basic_menu > li:nth-child("+i+") ul.main_sub_menu ").height();
        }
    }
    for (i=1; i<liCnt+1; i++) {
        $(" .main_menu > ul.basic_menu > li:nth-child("+i+") ul.main_sub_menu ").height(longSubDivHeight);
    }

	console.log(longSubMenuHeight + ' / ' + topHeight);
    return longSubMenuHeight + topHeight + 9;
}



function menuEnterOpen(obj) {
    var keyCode = event.keyCode || event.which; 
    console.log("keyCode : " + keyCode)
    if (keyCode == 13) { 
        $(obj).next('.dropdown-menu').show();
    }
}


// 탑 Nav메뉴 Width설정
function topNavWidthSetting() {
    var topNavItem = $('#top').find('.nav-item');
    var topNavItemWidth = topNavItem.innerWidth() - 5.5;
    var dropdownFrame = $('#top').find('.dropdown-menu');
    var dropdownItem = dropdownFrame.find('.dropdown-item');

    dropdownFrame.width(topNavItemWidth);

    if(dropdownFrame.width(topNavItemWidth) < dropdownItem.width()) {
        dropdownFrame.width(dropdownItem.width());
    }
}

function menuOpen() {
    if($('#top_menu').hasClass('menu')) {
        $('#top_menu').removeClass('menu');
        $('#top_menu').addClass('close');
        $('.whole_menu_frame').css('display','table');
    } else {
        $('#top_menu').removeClass('close');
        $('#top_menu').addClass('menu');
        $('.whole_menu_frame').hide();
    }
}

function isEmpty(value){ 
	if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ 
		return true 
	}else{ 
		return false 
	} 
}

function replaceTag(test_str) {
	
	test_str = test_str.toLowerCase();
	test_str = test_str.replace('<script>', '');
	test_str = test_str.replace('<\/script>', '');
	test_str = test_str.replace('<img>', '');
	test_str = test_str.replace('<\/img>', '');
	test_str = test_str.replace('<body>', '');
	test_str = test_str.replace('<\/body>', '');
	test_str = test_str.replace('<iframe>', '');
	test_str = test_str.replace('<\/iframe>', '');
	
    test_str = test_str.replace(">", "&gt;");
	test_str = test_str.replace("<", "&lt;");
	
	return test_str;
}

