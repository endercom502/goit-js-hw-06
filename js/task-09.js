function getColor() {
  const randomHex = Math.floor(Math.random() * 16777216);
  return `#${randomHex.toString(16)}`;
  //   console.log(randomHex);
}
const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
console.log(colorName);
console.log(changeColorBtn);
const changeColor = function () {
  colorName.textContent = getColor();
  document.body.style.backgroundColor = getColor();
};
changeColorBtn.addEventListener("click", changeColor);
