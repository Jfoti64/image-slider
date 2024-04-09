import "./style.css";
import { initializeSlides } from "./displayImages";
import { nextSlide, previousSlide } from "./changeSlide";

initializeSlides();

const nextBtn = document.getElementById('right');

nextBtn.addEventListener('click', () => {
    nextSlide();
});

const previousBtn = document.getElementById('left');

previousBtn.addEventListener('click', () => {
    previousSlide();
});