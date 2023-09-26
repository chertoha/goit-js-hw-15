const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const { email, password } = form.elements;

  if (email.value === "" || password.value === "") {
    alert("All fields have to be filled!");
    return;
  }

  const result = { email: email.value, password: password.value };
  console.log(result);

  form.reset();
});
