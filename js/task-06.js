const inputREF = document.querySelector('[type="text"]')

inputREF.addEventListener('blur',() => {
    if (inputREF.value.length !== 6) { inputREF.setAttribute('class', 'invalid') }
    else {inputREF.setAttribute('class', 'valid')}
})

console.log(inputREF);
