const inputREF = document.querySelector('#name-input');
const outputREF = document.querySelector('#name-output')

inputREF.addEventListener('input', (event) => {
    if (!event.currentTarget.value) { outputREF.textContent = 'Anonymous' }
    else { outputREF.textContent = event.currentTarget.value; }
})