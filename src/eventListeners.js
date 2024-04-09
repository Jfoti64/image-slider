import { nextSlide, previousSlide, changeToPosition } from "./changeSlide";

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("right");
  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  const previousBtn = document.getElementById("left");
  previousBtn.addEventListener("click", () => {
    previousSlide();
  });

  const radioBtns = document.querySelectorAll("input[type='radio']");

  radioBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      changeToPosition(idx);
    });
  });
});
