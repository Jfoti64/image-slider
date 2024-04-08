import { getCurrentSlide, setCurrentSlide } from "./currentSlide";

function nextSlide() {
  const positions = ["0px", "500px", "1000px"];

  const { currentSlide } = getCurrentSlide();
  const carouselSlides = document.getElementById("carouselSlides");

  if (currentSlide >= positions.length - 1) {
    setCurrentSlide(0);
    // eslint-disable-next-line prefer-destructuring
    carouselSlides.style.right = positions[0];
  } else {
    carouselSlides.style.right = positions[currentSlide + 1];
    setCurrentSlide(currentSlide + 1);
  }
}

export { nextSlide };
