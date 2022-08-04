function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

// input.addEventListener("change", onInputChange);
createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick(event) {
  boxes.insertAdjacentHTML("afterbegin", createBoxes(input.value));
}

function onDestroyBtnClick(event) {
  destroyBoxes();
}

function createBoxes(amount) {
  let markup = "";
  let width = 30;
  let heigth = 30;
  let color = 0;
  for (let i = 1; i <= amount; i += 1) {
    color = getRandomHexColor();
    markup =
      markup +
      `<div style="width:${width}px;height:${heigth}px;background-color:${getRandomHexColor()}"></div>`;
    width += 10;
    heigth += 10;
  }
  return markup;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
