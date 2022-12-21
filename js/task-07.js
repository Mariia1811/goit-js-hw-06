const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
 
inputEl.addEventListener("input", onInputChange);

function onInputChange(evt) {
  textEl.style.fontSize = evt
}



// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
// rangeInput.addEventListener(
//   "input",
//   (e) => (output.textContent = e.target.value)
// );