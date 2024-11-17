const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor(); // Генеруємо випадковий колір
  body.style.backgroundColor = newColor; // Змінюємо колір фону body
  colorSpan.textContent = newColor; // Виводимо значення кольору в span
});
