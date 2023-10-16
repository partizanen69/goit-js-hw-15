const rangeInputElem = document.getElementById("font-size-control");
const textElem = document.getElementById("text");

rangeInputElem.addEventListener("input", (e) => {
  const value = e.target.value;
  textElem.style.fontSize = `${value}px`;
});
