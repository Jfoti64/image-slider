import { getCurrentSlide, setCurrentSlide } from "./currentSlide";
import { imageDetails } from "./images";

let pixelsRight = 0;
const numOfSlides = imageDetails.length;

function nextSlide() {
  const { currentSlide } = getCurrentSlide();
  const carouselSlides = document.getElementById("carouselSlides");

  if (currentSlide >= numOfSlides - 1) {
    pixelsRight = 0;
    setCurrentSlide(0);
  } else {
    pixelsRight += 500;
    setCurrentSlide(currentSlide + 1);
  }

  // Directly applying the pixelsRight value with "px" without converting to a string first
  carouselSlides.style.right = `${pixelsRight}px`;
}

function previousSlide() {
  const { currentSlide } = getCurrentSlide();
  const carouselSlides = document.getElementById("carouselSlides");

  if (currentSlide === 0) {
    console.log("gg");
    pixelsRight = 500 * (numOfSlides - 1);
    setCurrentSlide(numOfSlides - 1);
  } else {
    pixelsRight -= 500;
    setCurrentSlide(currentSlide - 1);
  }

  // Directly applying the pixelsRight value with "px" without converting to a string first
  carouselSlides.style.right = `${pixelsRight}px`;
}

export { nextSlide, previousSlide };
