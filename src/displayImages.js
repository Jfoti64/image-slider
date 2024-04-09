import { imageDetails } from "./images";
import { updateRadioBtns } from "./currentSlide";

function initializeSlides() {
  // Assuming 'carouselSlides' is the container where you want to insert the slides
  const carouselSlides = document.getElementById("carouselSlides");

  imageDetails.forEach((img, index) => {
    // Create a div to act as the slide container
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("slide");
    carouselSlides.appendChild(imgDiv);

    // Create an img element
    const imgElement = document.createElement("img");
    imgElement.id = `slide${index + 1}`;
    imgElement.src = img.src; // Set the source of the image
    imgElement.alt = img.title; // It's good practice to set an alt attribute
    imgDiv.appendChild(imgElement);
  });
  updateRadioBtns();
}

export { initializeSlides };
