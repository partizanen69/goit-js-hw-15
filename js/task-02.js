const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItemElems = [];
for (const ingredient of ingredients) {
  const liElem = document.createElement("li");
  liElem.innerText = ingredient;
  listItemElems.push(liElem);
}

document.querySelector("#ingredients").append(...listItemElems);
