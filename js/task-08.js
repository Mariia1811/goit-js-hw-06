const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (!(email && password)) {
    return alert("Всі поля повинні бути заповнені");
  } else {
    const formData = new FormData(e.currentTarget);
    const result = {};

    for (let [key, value] of formData.entries()) {
      result[key] = value;
    }
    console.log(result);
    e.currentTarget.reset(result);
  }
}
