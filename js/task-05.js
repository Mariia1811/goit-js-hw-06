const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(evt) {
  nameLabel.textContent = evt.currentTarget.value || "Anonymous";
}
