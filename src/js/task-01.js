const categoryElems = document.querySelectorAll("ul#categories > .item");
console.log(`Number of categories: ${categoryElems.length}`);

categoryElems.forEach((categoryElem) => {
  console.log(`Category: ${categoryElem.querySelector("h2").innerText}`);
  console.log(`Elements: ${categoryElem.querySelectorAll("li").length}`);
});
