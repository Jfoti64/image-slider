import "./style.css";
import { initializeSlides } from "./displayImages";
import { nextSlide } from "./changeSlide";

initializeSlides();

// Create function that takes all images imported and creates a slide in the dom for each. Also track the length of each image and move the slider that far over for each nextSlide(). 
// Could create an object for each image that is stored in an array. Each object has its length and its position in the array. Or have the array only store the lengths, since the 
// images only move one at a time. 