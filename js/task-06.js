const input = document.querySelector("#validation-input");

input.addEventListener(`input`, onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length <= 6) {
    input.classList.remove(`valid`);
    input.classList.add(`invalid`);
  } else {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  }
}
