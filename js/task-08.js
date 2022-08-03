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

  //   const {
  //     elements: { email, password },
  //   } = event.currentTarget;

  const formFields = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  //   console.log(event.currentTarget.elements);
  console.log(formFields);

  event.currentTarget.reset();
}
