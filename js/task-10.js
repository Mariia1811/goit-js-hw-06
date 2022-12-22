function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  inputEl: document.querySelector("input"),
  btnCreateEl: document.querySelector("button[data-create]"),
  btnDestroyEl: document.querySelector("button[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
};

ref.btnCreateEl.addEventListener("click", onbtnCreateClick);
ref.btnDestroyEl.addEventListener("click", onbtnDestroyClick);
ref.inputEl.addEventListener("input", () => ref.inputEl.value);
let width = 20;
let height = 20;

function onbtnCreateClick() {
  createBoxes(ref.inputEl.value);
}

function onbtnDestroyClick() {
  ref.inputEl.value = "";
  width = 20;
  height = 20;
  destroyBoxes();
}

function createBoxes(amount) {
  let divsEl = "";
  for (let i = 0; i < amount; i++) {
    divsEl += `
  <div style="width:${(width += 10)}px; height:${(height += 10)}px; background-color:${getRandomHexColor()}"> 
  </div>
  `;
  }
  const divColection = ref.divBoxesEl.insertAdjacentHTML("beforeend", divsEl);
  return divColection;
}

function destroyBoxes() {
  ref.divBoxesEl.innerHTML = "";
}
