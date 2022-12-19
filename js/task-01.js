const categoriesItemEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesItemEl.length}`);

for (const elements of categoriesItemEl) {
    console.log(`Category: ${elements.firstElementChild.textContent}`);
    console.log(`Elements: ${elements.lastElementChild.children.length}`)
}
