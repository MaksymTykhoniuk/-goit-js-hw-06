function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

changeBtn.addEventListener("click", onBtnColorChange);

function onBtnColorChange() {
  outputColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = outputColor.textContent;
}
