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

function onbtnCreateClick() {}

function onbtnDestroyClick() {
  
}

function createBoxes(amount) {}

function destroyBoxes() {}
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// Напиши скрипт створення і очищення колекції елементів.
