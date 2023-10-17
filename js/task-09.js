function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElem = document.querySelector("button.change-color");
const bodyElem = document.querySelector("body");
const spanElem = document.querySelector("span.color");

buttonElem.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  spanElem.innerText = color;
});
