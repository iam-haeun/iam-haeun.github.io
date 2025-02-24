// AOS 초기화
AOS.init({
    duration: 1000
});

window.addEventListener('load', setAOS);
window.addEventListener('resize', setAOS);

function setAOS() {
    const view_w = window.innerWidth;
    const workItems = document.querySelectorAll('.work-item');
    const cardItems = document.querySelectorAll('.card-item');
    const delays = [100, 200, 300];

    // 초기화
    cardItems[0].setAttribute('data-aos', 'fade-right');
    cardItems[1].setAttribute('data-aos', 'fade-left');

    // for Mobile
    if (view_w < 768) {
        workItems.forEach(item => {
            item.removeAttribute('data-aos-delay');
        });
        cardItems.forEach(item => {
            item.setAttribute('data-aos', 'fade-up');
        });
    }
    // for Tab
    else if (view_w < 1025) {
        workItems.forEach((item, index) => {
            item.setAttribute('data-aos-delay', delays[index % 2]);
        });
    }
    // for PC
    else {
        workItems.forEach((item, index) => {
            item.setAttribute('data-aos-delay', delays[index % delays.length]);
        });
    }
}


// 마우스 커서 
const cursor = document.querySelector('.cursor'); 

document.addEventListener('mousemove',(e) => { 
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
});

const links = document.querySelectorAll('a');

links.forEach(i => {
    i.addEventListener('mouseover',() => { 
        cursor.classList.add('active'); 
    });
    i.addEventListener('mouseout',() => { 
        cursor.classList.remove('active'); 
    });
})


// header, top-btn 스크롤 이벤트
window.addEventListener('scroll', scrollEvent);

function scrollEvent() {
    if (window.scrollY > 100) {
        document.querySelector('.header').classList.add('on');
        document.querySelector('.top-btn').classList.add('on');
    } else {
        document.querySelector('.header').classList.remove('on');
        document.querySelector('.top-btn').classList.remove('on');
    }
}


// 모바일 메뉴
window.addEventListener('load', toggleMenu);
window.addEventListener('resize', toggleMenu);

let isMenuClicked = false;

const toggleHeader = () => {
    if (!header.classList.contains('open')) {
        header.classList.add('open');
    } else {
        header.classList.remove('open');
    }
};

const closeHeader = (e) => {
    const target = e.target;
    if (!target.closest('.local-nav ul')) {
        header.classList.remove('open');
    }
};

function toggleMenu() {
    const view_w = window.innerWidth;
    header = document.querySelector('.header');
    localNav = document.querySelector('.local-nav');
    menuBtn = document.querySelector('.menu-btn');

    // for Tab, Mobile
    if (view_w < 1025) {
        if (!isMenuClicked) {
            menuBtn.addEventListener('click', toggleHeader);
            isMenuClicked = true; 
        }
        localNav.addEventListener('click', closeHeader);
    }
    // for PC
    else {
        // 초기화
        header.classList.remove('open');
        
        if (isMenuClicked) {
            menuBtn.removeEventListener('click', toggleHeader);
            isMenuClicked = false; 
        }
        localNav.removeEventListener('click', closeHeader);
    }
}


// ABOUT 텍스트 애니메이션
let index = 0;
const txtBoxes = document.querySelectorAll('.sec-about .txt-box');
const totalBoxes = txtBoxes.length;

// 텍스트 박스 활성화
function showTextBox() {
    txtBoxes.forEach(function(txtBox, i) {
        const txts = txtBox.querySelectorAll('.txt'); 

        txts.forEach((txt, j) => {
            if (i === index) {
                txt.style.opacity = 1;
                txt.style.transform = 'translateY(0)';  
            } else {
                txt.style.opacity = 0;  
                txt.style.transform = 'translateY(30px)';  
            }
        });
    });
}

// 텍스트 박스 전환
function switchTextBox() {
    const currentTxtBox = txtBoxes[index];
    const currentTxts = currentTxtBox.querySelectorAll('.txt');

    currentTxts.forEach(txt => {
        txt.style.opacity = 0;
    });

    setTimeout(() => {
        index = (index + 1) % totalBoxes;
        showTextBox();
    }, 1000);  
}

setInterval(switchTextBox, 5000);
showTextBox();  