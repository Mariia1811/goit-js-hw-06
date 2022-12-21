const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add("item");
  return ingredientsItemEl;
});

listEl.append(...liElements);
