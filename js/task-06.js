const inputEl = document.querySelector("#validation-input");

const inputValueLength = inputEl.addEventListener("blur", onInputChange);

function onInputChange(evt) {
  if (
    evt.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
