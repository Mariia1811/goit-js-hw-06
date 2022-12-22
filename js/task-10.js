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

function onbtnCreateClick() {
  createBoxes(ref.inputEl.value);
}

function onbtnDestroyClick() {
  ref.inputEl.value = "";
  destroyBoxes();
}

function createBoxes(amount) {
  let width = 20;
  let height = 20;
  let divsEl = "";
  for (let i = 0; i < amount; i++) {
    width += 10;
    height += 10;
    divsEl += `
  <div style="width:${width}px; height:${height}px; background-color:${getRandomHexColor()}"> 
  </div>
  `;
  }
  const divColection = ref.divBoxesEl.insertAdjacentHTML("afterbegin", divsEl);
  return divColection;
}

function destroyBoxes() {
  ref.divBoxesEl.innerHTML = "";
}
