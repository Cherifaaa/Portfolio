// TYPED JS 

//var typed =  new Typed('#text',{
//    strings: ['NFTs', 'Arts', 'Music'],
//    typeSpeed: 50,
//    backSpeed: 50,
//    loop:true,
//});//

// BRANDS SWIPER 

var swiper = new Swiper('.brandSwiper',{
    slidesPerView: 5,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView: 4,
        },
        900:{
            slidesPerView: 4,
        },
        500:{
            slidesPerView: 3,
        },
    },
});

// COLLECTIONS SWIPER 

var swiper = new Swiper('.collectionSwiper',{
    slidesPerView: 4,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView: 4,
        },
        900:{
            slidesPerView: 2,
        },
        500:{
            slidesPerView: 1,
        },
    },
});

// OUR TEAMS SWIPER 

var swiper = new Swiper('.TeamSwiper',{
    slidesPerView: 4,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView: 4,
        },
        900:{
            slidesPerView: 2,
        },
        500:{
            slidesPerView: 1,
        },
    },
});

// TESTIMONIALS SWIPER 

var swiper = new Swiper('.testSwiper',{
    slidesPerView:1,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
});

// SHOW MENU 

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () =>{
    menu.classList.toggle('show_menu');
});