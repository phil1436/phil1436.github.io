let slideIndex = 1;

let interval = setInterval(nextSlideIntervall, 5000);

function init() {
    showSlides(1);
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function nextSlideIntervall() {
    slideIndex += 1;
    showSlides(slideIndex);
}
function nextSlide() {
    clearInterval(interval);
    slideIndex += 1;
    showSlides(slideIndex);
}
function previousSlide() {
    clearInterval(interval);
    slideIndex -= 1;
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    clearInterval(interval);
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    console.log(n);
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
