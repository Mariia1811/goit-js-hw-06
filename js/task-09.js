function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  const colorRandom = getRandomHexColor();
 
  textEl.textContent = `${colorRandom}`;
  bodyEl.style.backgroundColor = `${colorRandom}`;
}