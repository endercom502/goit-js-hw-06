// class Counter {
//   constructor({
//     incrementBtnSelector,
//     decrementBtnSelector,
//     valueContainerSelector,
//   }) {
//     this.incrementBtn = document.querySelector(incrementBtnSelector);
//     this.decrementBtn = document.querySelector(decrementBtnSelector);
//     this.valueContainer = document.querySelector(valueContainerSelector);
//     this.value = 0;

//     this.setEventListeners(this.decrementBtn, this.changeValue.bind(this));
//     this.setEventListeners(this.incrementBtn, this.changeValue.bind(this));
//   }

//   setEventListeners(el, func) {
//     el.addEventListener("click", func);
//   }

//   changeValue(e) {
//     const { action } = e.target.dataset;
//     switch (action) {
//       case "increment":
//         this.value = Number(this.value) + 1;
//         break;
//       case "decrement":
//         this.value = Number(this.value) - 1;
//         break;
//       default:
//         return;
//     }
//     this.valueContainer.textContent = this.value;
//   }
// }

// const cont = document.querySelector("#counter");
// const plugin = new Counter({
//   incrementBtnSelector: "[data-action=increment]",
//   decrementBtnSelector: "[data-action=decrement]",
//   valueContainerSelector: "#value",
// });
const refs = {
  decrementBTN: document.querySelector("[data-action=decrement]"),
  incrementBTN: document.querySelector("[data-action=increment]"),
  value: document.querySelector("#value"),
};

let count = 0;
const plus = () => {
  count += 1;
  refs.value.textContent = count;
  console.log(count);
};
const minus = () => {
  count -= 1;
  refs.value.textContent = count;
};

refs.decrementBTN.addEventListener("click", minus);
refs.incrementBTN.addEventListener("click", plus);
