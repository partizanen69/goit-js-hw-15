function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElem = document.querySelector("button.change-color");
const bodyElem = document.querySelector("body");

buttonElem.addEventListener("click", () => {
  bodyElem.style.backgroundColor = getRandomHexColor();
});
