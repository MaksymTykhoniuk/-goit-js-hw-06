const input = document.querySelector("#name-input");

const output = document.querySelector(`#name-output`);

output.textContent = `Anonymous`;

input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value) {
    output.textContent = `Anonymous`;
  }
  output.textContent = event.currentTarget.value;
}
