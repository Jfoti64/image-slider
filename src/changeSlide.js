import { getCurrentSlide, setCurrentSlide } from "./currentSlide";
import { imageDetails } from "./images";

const positions = [];

const numOfSlides = imageDetails.length;

function changeToPosition(position) {
  const newPosition = positions[position];
  const carouselSlides = document.getElementById("carouselSlides");

  setCurrentSlide(position);

  carouselSlides.style.right = `${newPosition}px`;
}

function nextSlide() {
  const { currentSlide } = getCurrentSlide();

  if (currentSlide >= numOfSlides - 1) {
    changeToPosition(0);
  } else {
    changeToPosition(currentSlide + 1);
  }
}

function previousSlide() {
  const { currentSlide } = getCurrentSlide();

  if (currentSlide === 0) {
    setCurrentSlide(numOfSlides - 1);
    changeToPosition(numOfSlides - 1);
  } else {
    setCurrentSlide(currentSlide - 1);
    changeToPosition(currentSlide - 1)
  }
}

(function populatePositions() {
  let firstPixelOfImage = 0;
  for (let i = 0; i < numOfSlides; i += 1) {
    positions.push(firstPixelOfImage);
    firstPixelOfImage += 500;
  }
})();

export { nextSlide, previousSlide, changeToPosition };
