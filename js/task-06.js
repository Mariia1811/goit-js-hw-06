const inputEl = document.querySelector("#validation-input");

const inputValueLength = inputEl.addEventListener("blur", onInputChange);

function onInputChange(evt) {
  evt.currentTarget.value.length === Number(inputEl.getAttribute("data-length"))
    ? addClass("valid", "invalid")
    : addClass("invalid", "valid");
}

function сhangeClass(newclass, oldclass) {
  if (
    !inputEl.classList.contains(`${newclass}`) &&
    !inputEl.classList.contains(`${oldclass}`)
  ) {
    return inputEl.classList.add(`${newclass}`);
  }
  return inputEl.classList.replace(`${oldclass}`, `${newclass}`);
}
