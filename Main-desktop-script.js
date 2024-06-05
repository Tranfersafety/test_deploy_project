let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
        slide.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => showSlide(currentSlide));

function toggleMobileMenu() {
    const burgerMenu = document.getElementById('burger');
    burgerMenu.classList.toggle('hidden');
}