function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

const bodyREF = document.querySelector('body')
// console.log(bodyREF);
const butREF = document.querySelector('.change-color');
const spanREF = document.querySelector('.color')
const img = document.querySelector('.random__img')

bodyREF.addEventListener('click', () => {
  bodyREF.style.backgroundColor = getRandomHexColor();
  spanREF.textContent = getRandomHexColor();  
  
})


 