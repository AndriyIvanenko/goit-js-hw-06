const items = document.querySelectorAll(".item");
// console.log(items);
console.log(`Number of categories: ${items.length}`);
console.log("");
items.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
  console.log("");
});
