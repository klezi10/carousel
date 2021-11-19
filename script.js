// create array - grab the carousel-item classes - variable slides
// set default slide position to 0
// set the totalSlides variable slides.length
// add eventlisteners to buttons
// create functions of buttons - start working with the next slide btn
// create if/else statements for clicking the button, which slide to show - which slides to hide
// create function for hiding all slides - for of loop

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
document
  .getElementById('carousel-button-next')
  .addEventListener('click', moveToNextSlide);

document
  .getElementById('carousel-button-prev')
  .addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}

function moveToNextSlide() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
}
