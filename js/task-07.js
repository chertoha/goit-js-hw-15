const rangeSlider = document.querySelector("#font-size-control");
const textField = document.querySelector("#text");

rangeSlider.addEventListener("input", (e) => {
  const size = e.target.value;
  textField.style.fontSize = `${size}px`;
});
