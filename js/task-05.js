const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

input.addEventListener("input", onInputHandler);

function onInputHandler(event) {
  //   console.log(event);
  //   console.log(input.value);
  if (event.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = event.currentTarget.value;
  }
}
