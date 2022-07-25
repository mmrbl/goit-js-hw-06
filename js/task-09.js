function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const hexColor = document.querySelector('.color');

const changeColor = () => {
  const newColor = getRandomHexColor();
  hexColor.textContent = newColor;
  body.style.backgroundColor = newColor;
};

btn.addEventListener('click', changeColor);
