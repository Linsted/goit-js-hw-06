const inputREF = document.querySelector('#font-size-control');
const spanREF = document.querySelector('#text');

inputREF.addEventListener('input', () => {
 spanREF.style.fontSize = `${inputREF.value}px`
})