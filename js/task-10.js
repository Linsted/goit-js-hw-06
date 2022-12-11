function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDivREF = document.querySelector('#boxes')
const inputREF = document.querySelector('[type="number"]')
const createButREF = document.querySelector('[data-create]')
const destroyButREF = document.querySelector('[data-destroy]')


// Змінні////
let divWidth = 30;
let divHeight = 30;
const arr = []
let string = '';


//Eventlestener
createButREF.addEventListener('click', () => {

  string = string.padStart(inputREF.value)



  for (const el of string) {
    if (string === '') { alert('ERROR') }
    else {
      const divREF = document.createElement(`div`)
      divREF.classList.add('color__boxes')
      divREF.style.width = `${divWidth}px`
      divREF.style.height = `${divHeight}px`
      divREF.style.backgroundColor = getRandomHexColor()
      divWidth += 10
      divHeight += 10


      mainDivREF.append(divREF);
    

      destroyButREF.addEventListener('click', () => {
        divREF.remove();
        inputREF.value = ''
      })
    
    }
  }
})


 





