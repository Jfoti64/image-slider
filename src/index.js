import "./style.css";
import "./eventListeners";
import initializeSlides from "./displayImages";
import { nextSlide } from "./changeSlide";


initializeSlides();

const intervalId = setInterval(nextSlide, 5000);