import { getCurrentSlide, setCurrentSlide } from "./currentSlide";

function nextSlide() {
  const positions = ["0px", "500px", "1000px"];

    const currentSlide = getCurrentSlide().currentSlide;
    const carouselSlides = document.getElementById('carouselSlides');

    if (currentSlide >= positions.length - 1) {
        console.log('Last');
        setCurrentSlide(0);
        carouselSlides.style.right = positions[0];
    } else {
        carouselSlides.style.right = positions[currentSlide + 1];
        setCurrentSlide(currentSlide + 1);
    }
}

export { nextSlide };
