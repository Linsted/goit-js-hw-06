const formREF = document.querySelector(`.login-form`);
formREF.addEventListener('submit', validForm)
const obj = {};
function validForm(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '')
    {return alert('Dear User, please fill in all fields!') }
    
    const { elements: { email, password } } = event.currentTarget;
    obj.email = email.value;
    obj.password = password.value;
    console.log(obj);
    event.currentTarget.reset();
    
}



