const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulId = document.querySelector("#ingredients");
const newUl = document.createElement("li");

for (const ing of ingredients) {

  newUl.innerText = `${ing}`
  
}

console.log(newUl);


// const heading = document.createElement("li");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />








// function addElement() {
//     start = document.createElement("li");
//     start.innerHTML = "<h2>twu</h2>";


// }

// const ula = start.innerHTML(ingredients);
// // const newLi = start.createElement("li");
// // newLi.textContent = ingredients;
// // for (const ingredient of ingredients) {
      

// // }
// console.log(ingredients);