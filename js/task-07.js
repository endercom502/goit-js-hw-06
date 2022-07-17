const input = document.querySelector("#font-size-control");

const changer = function (event) {
  document.getElementById("text").style.fontSize = `${Number(
    event.currentTarget.value
  )}px`;
};
input.addEventListener("change", changer);
