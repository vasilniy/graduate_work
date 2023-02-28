const formAuthorizationEl = document.querySelector('.form__authorization');

const password1El = formAuthorizationEl.querySelector('#password1');
const password2El = formAuthorizationEl.querySelector('#password2');
const formAuthBtnEl = formAuthorizationEl.querySelector('.form__auth-btn');

formAuthBtnEl.addEventListener('click', e => {
    if (!password1El.value || !password2El.value) {
        alert('Поля ввода паролей не могут быть пустыми');
        e.preventDefault();
    }

    else if (password1El.value == password2El.value) {
        console.log('Все хорошо');
    }
    else {
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        alert('Пароли не совпдают');        
        e.preventDefault();
    }

});

password2El.addEventListener('input', e => {    
    if (e.target.value == password1El.value) {
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }
    else {
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
    }
});