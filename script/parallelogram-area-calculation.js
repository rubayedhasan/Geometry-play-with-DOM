function calculateParallelogramArea() {
  // get base value
  const base = getInputValue("parallelogram-base");

  //   get height value
  const height = getInputValue("parallelogram-height");
  const area = base * height;

  //   display
  displayResult("parallelogram-area-display", area);
}

// get the elements value
function getInputValue(elementID) {
  const inputField = document.getElementById(elementID);
  const stringValue = inputField.value;
  const value = parseFloat(stringValue);

  return value;
}

// display hte area
function displayResult(id, calculatedArea) {
  const field = document.getElementById(id);
  field.innerText = calculatedArea;
}
