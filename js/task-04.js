let counterValue = 0;
const valueSpan = document.getElementById("value");

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue--;
    valueSpan.innerText = counterValue;
  });

document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue++;
    valueSpan.innerText = counterValue;
  });
