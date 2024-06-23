function calculateRectangleArea() {
  //   get rectangle width value
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthValue = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthValue);

  // get rectangle length value
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthValue = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthValue);

  //   calculate the area
  const area = width * length;

  //   display the area
  const displayBox = document.getElementById("rectangle-area-display");
  displayBox.innerText = area;
}
