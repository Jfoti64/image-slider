// Define a global object to keep track of the application state
let appState = {
  currentSlide: 0, // Default project
};

function getCurrentSlide() {
  return appState;
}

// Function to set the current project
function setCurrentSlide(currentSlide) {
  appState.currentSlide = currentSlide;
  console.log(appState.currentSlide);
}

export { getCurrentSlide, setCurrentSlide };
