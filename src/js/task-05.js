const inputElem = document.getElementById("name-input");
const outputSpanElem = document.getElementById("name-output");

inputElem.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  outputSpanElem.innerText = value ? event.target.value : "Anonymous";
});
