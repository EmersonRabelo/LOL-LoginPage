const inputs = document.querySelectorAll('.input');
const btn = document.querySelector('.login__button');

inputs.forEach((input) => input.addEventListener('focus', ({ target }) => {
    const span = target.previousElementSibling;
    console.log(span);
    span.classList.add('span-active')
}));

inputs.forEach((input) => input.addEventListener('focusout', ({ target }) => {
    const span = target.previousElementSibling;
    if (target.value == '') {
        console.log(span);
        span.classList.remove('span-active')
    }
}));


inputs.forEach((input) => input.addEventListener ('input', () => {
    const [username, password] = inputs;
    if (username.value && password.value.length >= 8){
        btn.removeAttribute('disabled')
    }else {
        btn.setAttribute('disabled', 'disabled')
    }
}))