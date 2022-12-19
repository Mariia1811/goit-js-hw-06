const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.textContent = ingredient;
    ingredientsItemEl.classList.add("item");
    return ingredientsItemEl;
  });
};

const liElements = makeIngredientsList(ingredients);

document.querySelector("#ingredients").append(...liElements);

