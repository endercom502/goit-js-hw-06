const source = document.querySelector(".login-form");
source.addEventListener("submit", submitAll);

const database = {};

const empty = function () {
  if (source.email.value === "" || source.password.value === "") {
    alert("Fill all fields");
  }
  return;
};

const inputReset = function () {
  source.reset();
};

function submitAll(e) {
  e.preventDefault();
  const formE = e.currentTarget.elements;
  const email = formE.email.value;
  const password = formE.password.value;
  const formD = { email, password };

  console.log(formD);
  empty();
  inputReset();
}
