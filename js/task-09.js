function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

const bodyREF = document.querySelector('body')
const butREF = document.querySelector('.change-color');
const spanREF = document.querySelector('.color')


bodyREF.addEventListener('click', () => {
  bodyREF.style.backgroundColor = getRandomHexColor();
  spanREF.textContent = getRandomHexColor();  
})


 