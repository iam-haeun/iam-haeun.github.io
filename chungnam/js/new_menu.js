$(document).ready(function(){
    
    // Header > Gnb
    var header = $('#new-header');
    var headerBg = $('#new-header .header-bg');
    var menuList = $('#gnb .depth1');
    var menuItem = $('#gnb .depth1 > li');

    menuList.on('mouseenter focusin', function(){
        $(this).stop().animate({"height":"385px"},300, 'easeOutExpo');
        headerBg.stop().slideDown(300, 'easeOutExpo');
    });
    menuList.on('mouseleave', function(){
        $(this).stop().animate({"height":"100%"},300, 'easeOutExpo');
        headerBg.stop().slideUp(300, 'easeOutExpo');
    });

    menuItem.on('mouseenter focusin', function(){
        $(this).addClass('on');
    });
    menuItem.on('mouseleave focusout', function(){
        $(this).removeClass('on');
    });

    $('#gnb a:last').on('focusout', function(){
        menuList.stop().animate({"height":"100%"},300, 'easeOutExpo');
        headerBg.stop().slideUp(300, 'easeOutExpo');
    });

    
    // Header > Menu All
    var body = $('body');
    var btnMenuAll = $('.btn-menu-all');
    var btnMenuAllClose = $('.btn-menu-all-close');
    var menuAll = $('#menu-all');

    btnMenuAll.on('click', function(){
        body.addClass('open-all-menu');
        header.addClass('on');
        menuAll.addClass('on');
    });
    btnMenuAllClose.on('click', function(){
        body.removeClass('open-all-menu');
        header.removeClass('on');
        menuAll.removeClass('on');
    });

    var btnMenuAll1st = $("#menu-all .depth1 > li > a");
    btnMenuAll1st.on("click", function(e) {
        e.preventDefault();

        var element = $(this).parent('li');
        if (menuAll.hasClass('pc')) {
			if (element.hasClass('open')) {
                element.removeClass('open');
            }
            else {
                element.addClass('open');
                element.siblings('li').removeClass('open');
            }
		} else if (menuAll.hasClass('mobile')) {
			if (element.hasClass('open')) {
                element.removeClass('open');
                element.children('ul').slideUp('fast');
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown('fast');
                element.siblings('li').children('ul').slideUp('fast');
                element.siblings('li').removeClass('open');
            }
		}
    });

    $(window).resize(function(){ 
        if (window.innerWidth <= 1024) {  
            btnMenuAll1st.parent('li').removeClass('open');
            menuAll.removeClass('pc');
            menuAll.addClass('mobile');
            
        } else {
            btnMenuAll1st.siblings('ul').hide();
            menuAll.removeClass('mobile');
            menuAll.addClass('pc');
        }
    }).resize();

});
