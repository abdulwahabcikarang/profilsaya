// script.js
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("project-img");
    let dots = document.getElementsByClassName("dot");
    let carouselImages = document.querySelector('.carousel-images');

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // Menggeser gambar
    carouselImages.style.transform = 'translateX(' + (- (slideIndex - 1) * 100) + '%)';

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
}