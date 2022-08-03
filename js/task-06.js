const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurInputHandler);

function onBlurInputHandler(event) {
  //   console.log(event.currentTarget.value.length);
  //   console.log(input.dataset);
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}
