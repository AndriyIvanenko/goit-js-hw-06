const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmitHandler);

function onFormSubmitHandler(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("всі поля мають бути заповнені");
  }

  console.log();
  const {
    elements: { email, password },
  } = event.currentTarget;

  console.log(event.currentTarget.elements);
  //   console.log(formFields);

  // event.currentTarget.reset();
}
// alert("test");
