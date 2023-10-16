const inputElem = document.getElementById("validation-input");
const validLength = Number(inputElem.getAttribute("data-length"));

inputElem.addEventListener("blur", (e) => {
  if (e.target.value.length === validLength) {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  } else {
    inputElem.classList.remove("valid");
    inputElem.classList.add("invalid");
  }
});
