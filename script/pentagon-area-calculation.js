function calculatePentagonArea() {
  // get perimeter value
  const perimeterInputField = document.getElementById("pentagon-perimeter");
  const perimeterStringValue = perimeterInputField.value;
  const perimeter = parseFloat(perimeterStringValue);

  //   get apothem value
  const apothem = parseFloat(document.getElementById("pentagon-apothem").value);

  const area = 0.5 * perimeter * apothem;

  //   display area
  document.getElementById("pentagon-area-display").innerText = area;
}
