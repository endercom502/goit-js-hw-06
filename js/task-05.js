const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const greeting = (e) => {
  console.log(e.target.value);
  const string = "Anonymous";
  if (e.target.value === "") {
    output.textContent = string;
  } else {
    output.textContent = e.target.value;
  }
};
input.addEventListener("input", greeting);
