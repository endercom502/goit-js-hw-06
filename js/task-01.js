const start = document.querySelector("#categories");
const categories = start.children.length;
const nameCategories = start.getElementsByTagName("h2");
const numberOfCategories = start.getElementsByTagName("ul");

console.log(`Number of categories: ${categories}`);
console.log(`Category: ${nameCategories[0].textContent}`);
console.log(`Elements: ${numberOfCategories[0].children.length}`);
console.log(`Category: ${nameCategories[1].textContent}`);
console.log(`Elements: ${numberOfCategories[1].children.length}`);
console.log(`Category: ${nameCategories[2].textContent}`);
console.log(`Elements: ${numberOfCategories[2].children.length}`);
