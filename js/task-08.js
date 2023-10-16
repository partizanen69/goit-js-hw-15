const formElem = document.querySelector("form.login-form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = formElem.elements;

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  for (const value of Object.values(formData)) {
    if (!value) {
      alert(`All fields must be filled`);
      return;
    }
  }

  console.log(formData);
  formElem.reset();
});
