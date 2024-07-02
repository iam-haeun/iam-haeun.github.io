$(document).ready(function(){
    setDataSlide();
	setNewsTab();
});

// 추천 데이터 슬라이드
function setDataSlide(){
    var dataSlide = new Swiper('.data-slide', {
        slidesPerView: 'auto',
        centeredSlides: true,
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: '.sc-data .btn-next',
            prevEl: '.sc-data .btn-prev'
        },  
    });
}

// 소식 탭
function setNewsTab(){
    $('.tab-menu .tab-tit').on('click focus',function(e){
        e.preventDefault();

        $('.tab-menu .tab-tit').parent().removeClass('active');
        $('.tab-menu .tab-cont').removeClass('active');

        $(this).parent().addClass('active');
        $(this).siblings('.tab-cont').addClass('active');
    });
}