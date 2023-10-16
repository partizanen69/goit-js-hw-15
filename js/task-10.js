function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesElem = document.getElementById("boxes");

const createBoxes = (num) => {
  const divs = [];
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    Object.assign(div.style, {
      width: `${30 + i * 10}px`,
      height: `${30 + i * 10}px`,
      backgroundColor: getRandomHexColor(),
    });
    divs.push(div);
  }

  boxesElem.append(...divs);
};

const destroyBoxes = () => {
  boxesElem.innerHTML = "";
};

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const numInput = document.querySelector("#controls input[type='number']");

createBtn.addEventListener("click", () => {
  const numOfDivs = Number(numInput.value);
  if (!numOfDivs) {
    return;
  }

  // тут із завдання не зрозуміло чи треба видаляти
  // ті елементи які вже можуть бути в #boxes
  createBoxes(numOfDivs);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
