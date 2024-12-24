'use strict'

//======================burger==============

const iconMenu = document.querySelector('.nav-icon');
const icons = iconMenu.querySelectorAll('span');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu__body');


iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');//forbidden scrool while burger is open
    icons.forEach(icon => {
        icon.classList.toggle('_hidden');
    });//change burger icon
    menu.classList.toggle('_active');
    header.classList.toggle('_active');
})


//================ scroll to anchor ==================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // if anchor called from burger, close menu, change menu icon, behavior auto
        if (menu.classList.contains('_active')) {
            document.body.classList.toggle('_lock');
            menu.classList.remove('_active');
            header.classList.remove('_active');
            icons.forEach(icon => {
                icon.classList.toggle('_hidden');
            });
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'auto'
            });
        }
        else {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
        }

    });
});

//================ slaider ====================


const img1 = document.querySelector(".slider__image");
const img2 = document.querySelector('[data-slider="2"]');
const img3 = document.querySelector('[data-slider="3"]');

let srcNew1;
let srcNew2;
let srcNew3;

const imgList1 = ['img/delivery1.jpg', 'img/delivery2.jpg', 'img/delivery3.jpg'];
const imgList2 = ['img/capitalmarket1.jpg', 'img/capitalmarket2.jpg', 'img/capitalmarket3.jpg'];
const imgList3 = ['img/investconsult1.jpg', 'img/investconsult2.jpg', 'img/investconsult3.jpg'];

const dots1 = Array.from(document.querySelectorAll('[data-dot="1"]'));
const dots2 = Array.from(document.querySelectorAll('[data-dot="2"]'));
const dots3 = Array.from(document.querySelectorAll('[data-dot="3"]'));

let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;


const back_btn1 = document.querySelector('[data-btn="back1"]');
const forward_btn1 = document.querySelector('[data-btn="forward1"]');

const back_btn2 = document.querySelector('[data-btn="back2"]');
const forward_btn2 = document.querySelector('[data-btn="forward2"]');

const back_btn3 = document.querySelector('[data-btn="back3"]');
const forward_btn3 = document.querySelector('[data-btn="forward3"]');

console.log(dots1)
console.log(dots2)
console.log(dots3)
console.log(back_btn1)
console.log(back_btn2)
console.log(back_btn3)

/*
передаем новый индекс при нажатии кнопок вправо-влево и меняем активный класс кружкам
*/

forward_btn1.addEventListener('click', () => {
    dots1[currentIndex1].classList.remove('active');
    currentIndex1 = (currentIndex1 + 1) % imgList1.length;
    dots1[currentIndex1].classList.add('active');
    showSlide(1);
})

back_btn1.addEventListener('click', () => {
    dots1[currentIndex1].classList.remove('active');
    currentIndex1 = (currentIndex1 - 1 + imgList1.length) % imgList1.length;
    dots1[currentIndex1].classList.add('active');
    showSlide(1);
})

forward_btn2.addEventListener('click', () => {
    dots2[currentIndex2].classList.remove('active');
    currentIndex2 = (currentIndex2 + 1) % imgList2.length;
    dots2[currentIndex2].classList.add('active');
    showSlide(2);
})

back_btn2.addEventListener('click', () => {
    dots2[currentIndex2].classList.remove('active');
    currentIndex2 = (currentIndex2 - 1 + imgList2.length) % imgList2.length;
    dots2[currentIndex2].classList.add('active');
    showSlide(2);
})

forward_btn3.addEventListener('click', () => {
    dots3[currentIndex3].classList.remove('active');
    currentIndex3 = (currentIndex3 + 1) % imgList3.length;
    dots3[currentIndex3].classList.add('active');
    showSlide(3);
})

back_btn3.addEventListener('click', () => {
    dots3[currentIndex3].classList.remove('active');
    currentIndex3 = (currentIndex3 - 1 + imgList3.length) % imgList1.length;
    dots3[currentIndex3].classList.add('active');
    showSlide(3);
})

/*
на точки вешаем ф-цию, кот. по клику передает индекс нажатой точки в списке в ф-цию checkSlide 
// */
dots1.forEach((dot, index) => {
    dot.onclick = () => {
        checkSlide(index, 1)
    }
})

dots2.forEach((dot, index) => {
    dot.onclick = () => {
        checkSlide(index, 2)
    }
})
dots3.forEach((dot, index) => {
    dot.onclick = () => {
        checkSlide(index, 3)
    }
})
/* смена активного класса точкам при нажатии на точку */
function checkSlide(index, n) {
    if (n == 1) {
        dots1[currentIndex1].classList.remove('active');
        currentIndex1 = index;
        dots1[currentIndex1].classList.add('active');

    }
    else if (n == 2) {
        dots2[currentIndex2].classList.remove('active');
        currentIndex2 = index;
        dots2[currentIndex2].classList.add('active');

    }
    else if (n == 3) {
        dots3[currentIndex3].classList.remove('active');
        currentIndex3 = index;
        dots3[currentIndex3].classList.add('active');

    }
    showSlide(n);
}


/* ф-ция для смены слайда */
function showSlide(n) {
    if (n == 1) {

        srcNew1 = imgList1[currentIndex1];
        img1.style.display = "none";
        setTimeout(() => {
            img1.style.display = 'block'
        }, 0);
        img1.setAttribute('src', srcNew1);
    }

    if (n == 2) {

        srcNew2 = imgList2[currentIndex2];
        img2.style.display = "none";
        setTimeout(() => {
            img2.style.display = 'block'
        }, 0);
        img2.setAttribute('src', srcNew2);
    }
    if (n == 3) {

        srcNew3 = imgList3[currentIndex3];
        img3.style.display = "none";
        setTimeout(() => {
            img3.style.display = 'block'
        }, 0);
        img3.setAttribute('src', srcNew3);
    }



}

function showNextSlide() {
    dots1[currentIndex1].classList.remove('active');
    currentIndex1 = (currentIndex1 + 1) % imgList1.length;
    dots1[currentIndex1].classList.add('active');
    showSlide(1);
    dots2[currentIndex2].classList.remove('active');
    currentIndex2 = (currentIndex2 + 1) % imgList2.length;
    dots2[currentIndex1].classList.add('active');
    showSlide(2);
    dots3[currentIndex3].classList.remove('active');
    currentIndex3 = (currentIndex3 + 1) % imgList3.length;
    dots3[currentIndex3].classList.add('active');
    showSlide(3);

}

setInterval(showNextSlide, 3000);