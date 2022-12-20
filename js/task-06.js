const inputEl = document.querySelector("#validation-input");

const inputValueLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onInputChange);

function onInputChange(evt) {
  evt.currentTarget.value.length === inputValueLength
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}
