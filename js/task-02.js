const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const listItems = [];

ingredients.forEach((ingradient) => {
  let listItem = document.createElement("li");
  listItem.textContent = ingradient;
  listItem.classList.add("item");
  listItems.push(listItem);
  // ingredientsEl.append(listItem);
});

ingredientsEl.append(...listItems);
