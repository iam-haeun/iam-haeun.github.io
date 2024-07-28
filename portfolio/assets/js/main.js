// init intro
function initIntro(){
    $('[class*="intro-bg"]').addClass('active');		
}
window.onload = function(){
    setTimeout(initIntro, 1000);
}

// init gsap
function initGsap(){
    gsap.registerPlugin(ScrollTrigger); 

    // Section About
    gsap.set('.sc-about .text + .text p', {opacity:0, y:100})
    var aboutTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-about',
            start: 'top',
            end: '+=180%',
            scrub: 2,
            pin: true,
            onLeave : aboutLeave,
            onEnterBack: aboutEnterBack,
        },
    })
    .to('#text1-1', {opacity:0, y:-100,}, 'same')
    .to('#text1-2', {opacity:0, y:-100,}, 'same')
    .to('#text2-1', {opacity:0, y:-100,}, 'same')
    .to('#text2-2', {opacity:0, y:-100}, '+=0.5')
    .to('#text3-1', {opacity:1, y:0,})
    .to('#text3-2', {opacity:1, y:0,})
    .to('#text4-1', {opacity:1, y:0,})
    .to('#text4-2', {opacity:1, y:0})

    function aboutLeave(){
        $('.sc-about .sc2').addClass('fold');
    }
    function aboutEnterBack(){
        $('.sc-about .sc2').removeClass('fold');
    }


    // Section Work
    var workTrigger1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-work',
            start: 'top 60%',
            end: 'top 60%',
            scrub: 2,
            onEnter : workEnter1,
            onLeaveBack: workLeaveBack1
        },
    })
    .to('.cube', {top:'50%', left:'50%', duration:3})

    function workEnter1(){
        $('.sc-work .sc-title').addClass('active');
        $('.message').addClass('active');
    }
    function workLeaveBack1(){
        $('.sc-work .sc-title').removeClass('active');
        $('.message').removeClass('active');
    }
    
    var workTrigger2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-work',
            start : 'bottom 90%',
            end : 'bottom 90%',
            scrub : 2,
            onEnter: workEnter2,
            onEnterBack: workEnterBack2
        },
    })
    .to('body', {background:'#262626'})
    .to('.cube .face', {opacity:0}, '-=0.3')

    function workEnter2(){
        $('body').attr('data-theme','white');
    }
    function workEnterBack2(){
        $('body').removeAttr('data-theme','white');
    }


    // Section Contact
    var contactTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-contact',
            start: 'top 60%',
            end: 'bottom bottom',
            scrub: 2,
            onEnter : contactEnter,
            onLeaveBack: contactLeaveBack,
        },
    })

    function contactEnter(){
        $('.sc-contact .sc-title').addClass('active');
    }
    function contactLeaveBack(){
        $('.sc-contact .sc-title').removeClass('active');
    }
}

$(document).ready(function(){
	initGsap();

    // scroll smooth
    class Scrooth {
        constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
            this.element = element;
            this.distance = strength;
            this.acceleration = acceleration;
            this.deceleration = deceleration;
            this.running = false;
        
            this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
            this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
            this.scroll = this.scroll.bind(this);
        }
      
        scrollHandler(e) {
            e.preventDefault();
        
            if (!this.running) {
            this.top = this.element.pageYOffset || this.element.scrollTop || 0;
            this.running = true;
            this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
            this.isDistanceAsc = true;
            this.scroll();
            } else {
            this.isDistanceAsc = false;
            this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
            }
        }
      
        scroll() {
            if (this.running) {
                this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
                Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
                Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
        
                this.top += this.currentDistance;
                this.element.scrollTo(0, this.top);
                
                requestAnimationFrame(this.scroll);
            }
        }
    }
      
    const scroll = new Scrooth({
        element: window,
        strength: 27, //스크롤 한번에 이동하는 거리
        acceleration: 1.75,
        deceleration: .875,
    });


    // 마우스 커서
    $(window).mousemove(function(e){
        e.preventDefault();
        gsap.to('.cursor',{
           x:e.clientX,
           y:e.clientY,
           duration:.2,
        })
    });


    // 마우스오버
    $('a, button, .card').hover(function(){
        $('.cursor').addClass('active');
    },function(){
        $('.cursor').removeClass('active');
    });


    // menu link 마우스오버
    $('.menu-link').hover(function(){
        $('.menu').addClass('active');
    },function(){
        $('.menu').removeClass('active');
    });


    // header scroll
    var prevScrollTop = 0;

    document.addEventListener('scroll',function(){
        var nowScrollTop = $(window).scrollTop(); 
        
        if(nowScrollTop > prevScrollTop){ 
            $('header').addClass('active'); 
        }else{ 
            $('header').removeClass('active'); 
        } 
        prevScrollTop = nowScrollTop;
    });


    // 채용 메세지
    $('.message-close').on('click',function(){
        $('.message').fadeOut();
    });
});