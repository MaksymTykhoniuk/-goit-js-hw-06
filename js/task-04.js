const btnIncr = document.querySelector(`[data-action ="increment"]`);
const btnDecr = document.querySelector(`[data-action ="decrement"]`);
const value = document.querySelector("#value");

let counterValue = 0;

btnIncr.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

btnDecr.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
