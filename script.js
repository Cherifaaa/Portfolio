// LQIP PROPRE : retire le fond flou quand l'image nette est chargée
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lqip-img').forEach(function(img) {
        function removeLQIP() {
            img.classList.add('lqip-loaded');
        }
        if (img.complete) {
            removeLQIP();
        } else {
            img.addEventListener('load', removeLQIP);
        }
    });
});
// Flou temporaire sur les images de la section papier (corrigé pour cache et fallback)
function removeBlurOnPapierImages() {
    document.querySelectorAll('#papier img.lqip-blur').forEach(function(img) {
        function removeBlur() {
            img.classList.remove('lqip-blur');
        }
        if (img.complete) {
            removeBlur();
        } else {
            img.addEventListener('load', removeBlur);
            // Fallback : retire le flou après 2s max quoi qu'il arrive
            setTimeout(removeBlur, 2000);
        }
    });
}
if (document.readyState === 'complete') {
    removeBlurOnPapierImages();
} else {
    window.addEventListener('load', removeBlurOnPapierImages);
}
// LQIP réel : retire le fond flou quand l'image nette est chargée
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lqip-container').forEach(function(container) {
        var img = container.querySelector('.lqip-img');
        function handleLoaded() {
            container.classList.add('loaded');
        }
        if (img.complete) {
            handleLoaded();
        } else {
            img.addEventListener('load', handleLoaded);
        }
    });
});
// Flou temporaire sur les images de la section papier
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#papier img.lqip-blur').forEach(function(img) {
        function removeBlur() {
            img.classList.remove('lqip-blur');
        }
        if (img.complete) {
            removeBlur();
        } else {
            img.addEventListener('load', removeBlur);
        }
    });
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