const inputValidator = document.querySelector("input[type=text]");

const inputElement = document.querySelector("input[data-length]");

const validationLength = parseInt(inputElement.dataset.length);

const checkLength = function () {
  if (inputValidator.value.length === validationLength) {
    inputValidator.classList.add("valid");
  } else {
    inputValidator.classList.add("invalid");
  }
};
inputValidator.addEventListener("blur", checkLength);
inputValidator.addEventListener("focus", () => {
  inputValidator.classList = "";
});
