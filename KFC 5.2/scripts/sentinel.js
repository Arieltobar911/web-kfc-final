let currentIndex = 0;
const slides = document.querySelectorAll('.devastator');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function changeSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);
