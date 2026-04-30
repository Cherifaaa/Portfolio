// --- Lightbox galerie thumbs ---
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    let currentImgIndex = 0;
    let currentGallery = [];

    function openLightbox(img, gallery) {
        // Si data-full existe, on l'utilise, sinon src
        const fullSrc = img.getAttribute('data-full') || img.src;
        lightbox.style.display = 'flex';
        lightboxImg.src = fullSrc;
        lightboxTitle.textContent = img.getAttribute('data-title') || '';
        currentImgIndex = gallery.indexOf(img);
        currentGallery = gallery;
    }

    document.querySelectorAll('.gallery-section img').forEach(img => {
        img.addEventListener('click', function() {
            const gallery = Array.from(this.parentNode.querySelectorAll('img'));
            openLightbox(this, gallery);
        });
    });

    document.getElementById('lightbox-close').onclick = function() {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    };

    document.getElementById('prev').onclick = function() {
        if (currentGallery.length > 0) {
            currentImgIndex = (currentImgIndex - 1 + currentGallery.length) % currentGallery.length;
            const img = currentGallery[currentImgIndex];
            const fullSrc = img.getAttribute('data-full') || img.src;
            lightboxImg.src = fullSrc;
            lightboxTitle.textContent = img.getAttribute('data-title') || '';
        }
    };

    document.getElementById('next').onclick = function() {
        if (currentGallery.length > 0) {
            currentImgIndex = (currentImgIndex + 1) % currentGallery.length;
            const img = currentGallery[currentImgIndex];
            const fullSrc = img.getAttribute('data-full') || img.src;
            lightboxImg.src = fullSrc;
            lightboxTitle.textContent = img.getAttribute('data-title') || '';
        }
    };
});
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

document.addEventListener("DOMContentLoaded", function () {
        // COEUR
        const heartBtn = document.getElementById("heart-btn");
        let isLiked = false;
        if(heartBtn){
            heartBtn.addEventListener("click", function () {
                    isLiked = !isLiked;
                    heartBtn.src = isLiked ? "Images/coeur2.png" : "Images/coeur1.png";
            });
        }

        // --- Cartes dossier galerie ---
        const cartesFolder = document.getElementById("cartes-folder");
        const cartesGallery = document.getElementById("cartes-gallery");
        const digitalSection = document.getElementById("digital");
        const cartesBack = document.getElementById("cartes-back");
        if(cartesFolder && cartesGallery && digitalSection && cartesBack){
            cartesFolder.addEventListener("click", function(){
                // Cache tout sauf la galerie cartes
                Array.from(digitalSection.children).forEach(child => {
                    if(child !== cartesGallery) child.style.display = "none";
                });
                cartesGallery.style.display = "flex";
            });
            cartesBack.addEventListener("click", function(e){
                e.stopPropagation();
                // Réaffiche tout sauf la galerie cartes
                Array.from(digitalSection.children).forEach(child => {
                    if(child !== cartesGallery) child.style.display = "";
                });
                cartesGallery.style.display = "none";
            });
        }
});