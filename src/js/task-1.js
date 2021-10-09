const refs = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
const { bodyEl, startBtn, stopBtn } = refs;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', startBodyColorChange);

function startBodyColorChange() {
  setInterval(changeColor, 1000);
}
function changeColor() {
  let value = randomIntegerFromInterval(0, colors.length - 1);
  bodyEl.style.backgroundColor = colors[value];
}
