const controler = document.querySelector(`#font-size-control`);
const output = document.querySelector(`#text`);
controler.addEventListener(`input`, onContolerChange);

function onContolerChange(event) {
  output.style.fontSize = event.currentTarget.value + "px";
}
