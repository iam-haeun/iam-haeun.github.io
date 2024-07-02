
// init loading
function initMain(){
    $('.bg1').addClass('active');
    $('.bg2').addClass('active');
    $('#wrap').addClass('active');		
}
window.onload = function(){
    setTimeout(initMain , 1000);
}
$(document).ready(function(){
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // 스크롤 트리거 등록

    // gsap.timeline({  
    //     scrollTrigger: {
    //       trigger: ".sc-intro", // 객체기준범위
    //       pin: true, // 고정
    //       start: "top top", // 시작점
    //       end: "bottom bottom", // 끝점
    //       scrub: 0.5, // 모션바운스
    //       //markers: true, // 개발가이드선
    //     }
    //   })

    //var reveal = gsap.utils.toArray('.reveal');
    gsap.set('.txt1 + .txt1 p', {opacity:0, y:100})
    // gsap.set('.sc-work', {yPercent:-70})
    var textTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-work",
            start: "top",
            //end:"+=180%",
            //end:"bottom",
            scrub: 2,
            pin:true,
            //pinSpacing : false,
            onEnterBack: introEnter,
            onLeave : introEnterBack
        },
    })

    // same 동시 시작하는 addlabel (라벨링)
    .to('#Text1-1', {opacity:0, y:-100,},"same")
    .to('#Text1-2', {opacity:0, y:-100,},"same")
    .to('#Text2-1', {opacity:0, y:-100,},"same")
    .to('#Text2-2', {opacity:0, y:-100},"+=0.5")
    .to('#Text3-1', {opacity:1, y:0,})
    .to('#Text3-2', {opacity:1, y:0,})
    .to('#Text4-1', {opacity:1, y:0,})
    .to('#Text4-2', {opacity:1, y:0,})
    .to('#Text4-1', {opacity:0, y:-100,})
    .to('#Text4-2', {opacity:0, y:-100,})
    .to('#Text3-1', {opacity:0, y:-100,})
    .to('#Text3-2', {opacity:0, y:-100,})
    // .to('.sc-intro', {opacity:0})

    //.to('.sc-work', {opacity:1, duration:5})

    function introEnter(){
        $('.sc-intro').removeClass('fold');
    }
    function introEnterBack(){
        $('.sc-intro').addClass('fold');
    }





    // .to('.sc-intro .change-bg', {opacity:1, duration:2},'-=1.5')
    // .to('.sc-intro .change-bg', {width:'100%', duration:10},"<")
    // .to('.sc-intro', {opacity:0},'-=1.5')
    // .to('.sc-work', {opacity:1})


    // .to('.sc-intro .change-bg', {opacity:1, duration:2},'-=1.5')
    // .to('.sc-intro .change-bg', {width:'66.666%', duration:10},"<")
    // .to('.sc-intro sc3', {opacity:0, duration:5})
    // .to('.sc-work', {opacity:1})



    // .to('.sc-intro .change-bg', {opacity:1, duration:2},'-=1.5')
    // .to('.sc-intro .change-bg', {width:'100%', duration:10},"<")

    // .to('.sc-work', {opacity:1, y:-200, duration:16},'-=7')
    
    //.to('.sc-intro', {opacity:'0'})


    // .to('.sc-work', {opacity:1},'+=5')

    // .to('.sc-intro .sc3', {scale:5, duration:2})
    // .to('.sc-work', {opacity:1})

    // .to('.sc-intro .change-bg', {opacity:1, duration:2},'-=1.5')
    // .to('.sc-intro .change-bg', {width:'100%', duration:3},"<")
    // .to('.sc-intro [class*="sc"]', {opacity:0})
    // .to('.sc-intro .change-bg', {opacity:0})


    // work
    // var workTrigger = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".sc-work",
    //         start: "top",
    //         // end:"+=180%",
    //         //end:"bottom",
    //         scrub: 2,
    //         pin:true,
    //     },
    // })
    // .to('.sc-work', {opacity:1, duration:10},'+=5')



    // gsap.set('.txt1 + .txt1 p', {opacity:0, y:100})
    // let panels = gsap.utils.toArray(".section");

    // panels.forEach((panel, i) => {
    //     // ScrollTrigger.create({
    //     //     trigger: panel,
    //     //     // start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    //     //     start: 'top top',
    //     //     pin: true, 
    //     //     pinSpacing: false 
    //     // })
    //     var textTrigger = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: panel,
    //             start: "top top",
    //             // end:"+=180%",
    //             //end:"+=180%",
    //             scrub: 2,
    //             pin:true,
    //             //pinSpacing: false
    //         },
    //     })
    //     .to('#Text1-1', {opacity:0, y:-100,},"same")
    //     .to('#Text1-2', {opacity:0, y:-100,},"same")
    //     .to('#Text2-1', {opacity:0, y:-100,},"same")
    //     .to('#Text2-2', {opacity:0, y:-100},"+=0.5")
    //     .to('#Text3-1', {opacity:1, y:0,})
    //     .to('#Text3-2', {opacity:1, y:0,})
    //     .to('#Text4-1', {opacity:1, y:0,})
    //     .to('#Text4-2', {opacity:1, y:0,})
    //     .to('#Text4-1', {opacity:0, y:-100,})
    //     .to('#Text4-2', {opacity:0, y:-100,})
    //     .to('#Text3-1', {opacity:0, y:-100,})
    //     .to('#Text3-2', {opacity:0, y:-100,})

    //     .to('.sc-intro .change-bg', {opacity:1})
    //     .to('.sc-intro .change-bg', {width:'100%'})


    //     .to('.sc-work', {opacity:1},'-=1.5')
    // });

    // ScrollTrigger.create({
    //     snap: {
    //         snapTo: (progress, self) => {
    //             let panelStarts = tops.map(st => st.start), 
    //             snapScroll = gsap.utils.snap(panelStarts, self.scroll()); 
    //             return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); 
    //         },
    //         duration: 0.5
    //     }
    // });


    // gsap.utils.toArray(".section").forEach((panel,i) => {
    //     // ScrollTrigger.timeline({
    //     //     trigger : panel,
    //     //     start : "top top",
    //     //     pin : true,
    //     //     //pinSpacing : false
    //     // })

    //     gsap.set('.txt1 + .txt1 p', {opacity:0, y:100})
    //     var textTrigger = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: panel,
    //             start: "top",
    //             // end:"+=180%",
    //             //end:"bottom",
    //             scrub: 2,
    //             pin:true,
    //             //pinSpacing : false
    //         },
    //     })

    //     .to('#Text1-1', {opacity:0, y:-100,},"same")
    //     .to('#Text1-2', {opacity:0, y:-100,},"same")
    //     .to('#Text2-1', {opacity:0, y:-100,},"same")
    //     .to('#Text2-2', {opacity:0, y:-100},"+=0.5")
    //     .to('#Text3-1', {opacity:1, y:0,})
    //     .to('#Text3-2', {opacity:1, y:0,})
    //     .to('#Text4-1', {opacity:1, y:0,})
    //     .to('#Text4-2', {opacity:1, y:0,})
    //     .to('#Text4-1', {opacity:0, y:-100,})
    //     .to('#Text4-2', {opacity:0, y:-100,})
    //     .to('#Text3-1', {opacity:0, y:-100,})
    //     .to('#Text3-2', {opacity:0, y:-100,})


    //     .to('.sc-intro .change-bg', {opacity:1, duration:2},'-=1.5')
    //     .to('.sc-intro .change-bg', {width:'100%', duration:3},"<")


    //     .to('.sc-work', {opacity:1},'+=5')
    // })





    //.to('.sc-intro .sc3 .txt-box', {opacity:0})
    // .to('.sc-intro .sc2', {opacity:0, display:'none', duration:1})
    // .to('.sc-intro .sc1', {opacity:0, display:'none', duration:1})
    // .to('.sc-intro .bg', {opacity:1, xPercent:100, duration:5})
    // .to('#Text3-1', {opacity:0,y:-100,})
    // .to('#Text3-2', {opacity:0,y:-100,})
    // .to('#Text4-1', {opacity:0,y:-100,})
    // .to('#Text4-2', {opacity:0,y:-100,})
    // .to('#Text5-1', {opacity:1,y:0,})
    // .to('#Text5-2', {opacity:1,y:0,})
    // .to('#Text6-1', {opacity:1,y:0,})
    // .to('#Text6-2', {opacity:1,y:0,})

//     marquee
//     .addLabel('a')
//     .from(".sc-about .marquee1 .wrap",{xPercent:-90},'a')
//     .to(".sc-about .marquee2 .wrap",{xPercent:-50},'a')
//     .from(".sc-about .marquee3 .wrap",{xPercent:-70},'a')
// ScrollTrigger.create({
//     animation: marquee,
//     trigger: ".sc-about",
//     start: "top 80%",
//     end: "150% 60%",
//     scrub: true,
//     pin: false,
//     markers: false
// });
//     var marqueeTrigger = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".sc-intro",
//             start: "top",
//             end:"+=180%",
//             scrub: true,
//             pin:true,
//         },
//     })

    // var bgTrigger = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".sc-about",
    //         start : 'top',
    //         end : "bottom",
    //         //toggleClass: {targets: "body", className: "bg-black"},
    //         scrub : 1,
    //     },
    // })

    // .to('.sc-about .change-bg', {opacity:1, xPercent:100, duration:5})
    //bgTrigger.to('body', {'background':'#000'})

    // textTrigger.to('.sc-about',{
    //     scrollTrigger : {
    //         trigger : ".sc-about",
    //         start : 'top',
    //         end : "bottom",
    //         toggleClass: {targets: "body", className: "bg-black"},
    //         scrub : 1,
    //     }
    // })

    // var sc3Trigger = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".sc-work",
    //         start : 'top',
    //         end : "bottom",
    //         scrub : 1,
    //     },
    // })

    // .to('.sc-work', {yPercent:-100})




    // work
    // var workkTrigger = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".sc-work",
    //         start: "top top",
    //         scrub: 2,
    //         pin:true,
    //     },
    // })
    // .to('.sc-work', {opacity:1, duration:2},'+=2')

    var workTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-work",
            start : 'bottom 90%',
            end : "bottom 90%",
            scrub : 1,
            onEnter: workEnter,
            onEnterBack: workEnterBack
        },
    })

    .to('body', {background:'#000'})

    function workEnter(){
        $('.work-list').addClass('theme-white');
    }
    function workEnterBack(){
        $('.work-list').removeClass('theme-white');
    }


    // .to('.work-list > *', {color:'#fff'})
    // .to('.work-item a', {borderColor:'#fff'})
    //.to('.work-list', {toggleClass:'theme-white'})
    //.to('body', {className:'bg-black'})

    // var contactTrigger = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".sc-contact",
    //         start : 'top',
    //         end : "top",
    //         scrub : 1,
    //     },
    // })

    // .to('body', {className:'bg-black'})



    // 마우스 커서
    // const cursor = document.querySelector('.cursor'); 

    // // 커서 좌표값 할당
    // window.addEventListener("mousemove", e => {
    //     // gsap
    //     gsap.to(cursor, {duration: 0.3, left: e.clientX, top: e.clientY});

    //     // forEach
    //     // document.querySelectorAll(".mouse__text span").forEach(span => {
    //     //     span.addEventListener("mouseenter", () => {
    //     //         cursor.classList.add("active");
    //     //     });
    //     //     span.addEventListener("mouseleave", () => {
    //     //         cursor.classList.remove("active");
    //     //     });
    //     // });
    // });

    // 마우스 커서
    $(window).mousemove(function(e){
        e.preventDefault();
        gsap.to('.cursor',{
           x:e.clientX,
           y:e.clientY,
           duration:.2,
         })
    });

    // $('.work-item a').hover(function(){
    //     $(this).find('.img-box').addClass('active');
    //   },function(){
    //     $(this).find('.img-box').removeClass('active');
    // });

    // contact card 마우스 효과
    // $(document).on("mousemove", function(event) {
    //     var window_height = $(this).height();
    //     var window_width = $(this).width();
    //     var mouseXpos = event.clientX;
    //     var mouseYpos = event.clientY;
    //     var YrotateDeg = (window_width / 2 - mouseXpos) * -0.03;
    //     var XrotateDeg = (window_height / 2 - mouseYpos) * -0.03;
    //     $(".card").css(
    //       "transform",
    //       "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)"
    //     );
    // });
    

    // $('.card').hover(function(event){
    //     var window_height = $(this).height();
    //     var window_width = $(this).width();
    //     var mouseXpos = event.clientX;
    //     var mouseYpos = event.clientY;
    //     var YrotateDeg = (window_width / 2 - mouseXpos) * 0.05;
    //     var XrotateDeg = (window_height / 2 - mouseYpos) * -0.05;
    //     $(".card").css(
    //       "transform",
    //       "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)"
    //     );
    // });




    // 나타날 요소들(.fade-in) 찾기.
    const fadeinEls = document.querySelectorAll('.skill-icon')
    // 나타날 요소들을 하나씩 반복해서 처리!
    //반복되는 횟수를 인덱스라는이름으로 받아서 사용
    fadeinEls.forEach(function (fadein,index) {
        // 각 요소들을 순서대로(delay) 보여지게 함!
        // gsap 라는 라이브러리의 .to속성으로 fadein을 1초동안 투명도를 1로 만들고 0.7초 간격으로 나타나게함.
        gsap.to(fadein, 1, {
            delay: (index + 1) * .3, //index는 0부터 시작하기 때문에 1을 더해주지 않으면 0*0.7로 delay가 적용되지 않음
            opacity: 1
        })
    })




    $('.menu-item:nth-child(1)').on('click',function(){
        //$('.sc-intro').removeClass('fold');
    });
    $('.menu-item:nth-child(2)').on('click',function(){
        //$('.sc-intro').addClass('fold');

        // $('html, body').animate({
        //     scrollTop: ($(window).scrollTop(1000))
        // }, 500);  
    
        //$('.window').animate( { scrollTop() > vh(100) }, 500 );

        // var vheight = $(window).height();
        // $('html, body').animate({
        //     scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
        // }, 500);  



        // function vh(v) {
        //     var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        //     return (v * h) / 100;
        // }

        // $(window).on("scroll", function() {
        //     if($(window).scrollTop() > vh(100)) {
        //         $(".header_wrap").addClass("active");
        //     } else {
        //         //remove the background property so it comes transparent again (defined in your css)
        //        $(".header_wrap").removeClass("active");
        //     }
        // });
    });


    // 정확한 스크롤 위치를 잡기 위한 코드
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         gsap.to(window, {duration: 1, scrollTo: targetId});
    //     });
    // });

    // #work 클릭 시 .sc-work로 부드럽게 스크롤 이동하는 함수
    // function scrollToWork() {
    //     var workSection = document.querySelector('#work');
    //     gsap.to(window, { duration: 1, scrollTo: { y: workSection.offsetTop } });
    // }


    function resize() {
        var vheight = $(window).height();
        $('.fullsize-background').css({
          'height': vheight,
        });
      };

      resize();

    //상단에 fixed 메뉴영역이 있다면, 메뉴때문에 메뉴의 높이만큼 스크롤이 가려질 수 있다.
    //var menuHeight = document.querySelector(".menu").offsetHeight; // 메뉴의 높이
    



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



});



//   .to('.sec2_tit1', {duration: 0.3, opacity: 0, y: -30})
  
//   .to('.sec2_tit2', {duration: 0.3, opacity: 1, y: 0, onComplete: function(){
//     console.log('두번째 문구등장!');
//   }})
//   .to('.sec2_tit2', {duration: 0, delay: 1})
//   .to('.sec2_tit2', {duration: 0.3, opacity: 0, y: -30})
  
//   .to('.sec2_tit3', {duration: 0.3, opacity: 1, y: 0}) 
//   .to('.sec2_tit3', {duration: 0, delay: 1})