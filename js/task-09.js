function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(".widget");
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onChangeColorBtnHandler);

function onChangeColorBtnHandler(event) {
  widget.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
