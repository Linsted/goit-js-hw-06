function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyREF = document.querySelector('body')
const spanREF = document.querySelector('.color')

bodyREF.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  bodyREF.style.backgroundColor = randomColor;
  spanREF.textContent = randomColor;  
})


 