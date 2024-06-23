function calculateTriangleArea() {
  //   get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseValue = triangleBaseInput.value;
  const base = parseFloat(triangleBaseValue);

  // get triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightValue = triangleHeightInput.value;
  const height = parseFloat(triangleHeightValue);

  // calculate the area
  const area = 0.5 * base * height;

  // display triangle area
  const triangleAreaBox = document.getElementById("triangle-area-display");
  triangleAreaBox.innerText = area;
}
