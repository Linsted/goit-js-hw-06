const inputREF = document.querySelector('[type="text"]')

inputREF.addEventListener('blur',() => {
    if (inputREF.value.length !== +inputREF.dataset.length) { inputREF.setAttribute('class', 'invalid') }
    else {inputREF.setAttribute('class', 'valid')}
})

console.log(inputREF);
