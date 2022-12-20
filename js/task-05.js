const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(evt) {
  if (evt.currentTarget.value) {
    nameLabel.textContent = evt.currentTarget.value;
  } else {
    nameLabel.textContent = "Anonymous";
  }
}
