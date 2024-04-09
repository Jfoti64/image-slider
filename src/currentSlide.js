// Define a global object to keep track of the application state
const appState = {
  currentSlide: 0, // Default project
};

function getCurrentSlide() {
  return appState;
}

function updateRadioBtns() {
  const radioBtns = document.querySelectorAll("input[type='radio']");

  radioBtns[appState.currentSlide].checked = true;
}

// Function to set the current project
function setCurrentSlide(currentSlide) {
  appState.currentSlide = currentSlide;
  updateRadioBtns(currentSlide);
}

export { getCurrentSlide, setCurrentSlide, updateRadioBtns };
