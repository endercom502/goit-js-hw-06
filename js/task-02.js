const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function insertList(id, array) {
  const ulId = document.querySelector(id);

  for (const el of array) {
    const newLI = document.createElement("li");
    newLI.textContent = el;

    ulId.appendChild(newLI);
  }
}

insertList("#ingredients", ingredients);
