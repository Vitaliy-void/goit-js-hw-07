function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgcElem = document.querySelector(".color")
const btnElem = document.querySelector(".change-color")
const bodyElem = document.querySelector("body")
console.log(bgcElem, btnElem, bodyElem);

btnElem.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = `${color}`;
bgcElem.textContent = color
});
