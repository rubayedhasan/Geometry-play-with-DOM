function calculateEllipsesArea() {
  // get major radius value
  const a = getInputValue("ellipses-major-radius");

  // get minor radius value
  const b = getInputValue("ellipses-minor-radius");
  const area = Math.PI * a * b;

  //   display area
  displayResult("ellipses-area-display", area);
}
