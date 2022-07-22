const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


ingredients.forEach(item => {
const createLi = document.createElement("li");
const ulId = document.querySelector("#ingredients");
const children = ulId.appendChild(createLi);
let sum = 0;  
sum += children.textContent = item;

});


// function insertList(id, array) {
//   const ulId = document.querySelector(id);

//   for (const el of array) {
//     const newLI = document.createElement("li");
//     newLI.textContent = el;

//     ulId.appendChild(newLI);
//   }
// }

// insertList("#ingredients", ingredients);
