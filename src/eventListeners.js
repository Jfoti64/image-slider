import { nextSlide, previousSlide } from "./changeSlide";

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("right");
  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  const previousBtn = document.getElementById("left");
  previousBtn.addEventListener("click", () => {
    previousSlide();
  });
});
