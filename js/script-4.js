const formElem = document.querySelector(".login-form");

formElem.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const email = formElem.email.value.trim();
  const password = formElem.password.value.trim();

  if (email === "" || password === "") {
    alert('All form fields must be filled in');
    return;
  }

  const UserData = { email, password };
  console.log(UserData);

  formElem.reset();
});
