const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${input.value.toString()}px`;

input.addEventListener("input", onInputHandler);

function onInputHandler(event) {
  //   console.log(input.value);
  text.style.fontSize = `${input.value.toString()}px`;
}
