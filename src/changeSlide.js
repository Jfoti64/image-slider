import { getCurrentSlide, setCurrentSlide } from "./currentSlide";

let pixelsRight = 0;

function nextSlide() {
  const { currentSlide } = getCurrentSlide();
  const carouselSlides = document.getElementById("carouselSlides");

  if (currentSlide >= 2) {
    pixelsRight = 0;
    setCurrentSlide(0);
  } else {
    pixelsRight += 500;
    setCurrentSlide(currentSlide + 1);
  }
  
  // Directly applying the pixelsRight value with "px" without converting to a string first
  carouselSlides.style.right = `${pixelsRight}px`;
}

export { nextSlide };
