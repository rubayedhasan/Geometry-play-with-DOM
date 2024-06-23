// get element value
function getValues(idOfElement) {
  const element = document.getElementById(idOfElement);
  const elementStringValue = element.value;
  const value = parseFloat(elementStringValue);

  return value;
}

// display value
function displayRhombusArea(id, area) {
  const element = document.getElementById(id);
  element.innerText = area;
}

function calculateRhombusArea() {
  // get 1st dimension value
  const d1 = getValues("rhombus-first-dimension");

  // get 1st dimension value
  const d2 = getValues("rhombus-second-dimension");

  const area = 0.5 * d1 * d2;

  //   display
  displayRhombusArea("rhombus-area-display", area);
}
