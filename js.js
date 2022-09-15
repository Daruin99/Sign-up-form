const firstName= document.querySelector('#firstName')
const lastName= document.querySelector('#lastName')
const email= document.querySelector('#email')
const phone= document.querySelector('#phone')
const password= document.querySelector('#password')
const password2= document.querySelector('#confirmPassword')
const form=document.querySelector('form');

firstName.addEventListener('input',checkFirst)
lastName.addEventListener('input',checkSecond)
email.addEventListener('input',checkEmail)
phone.addEventListener('input',checkTel)
password.addEventListener('input',checkPass)
password2.addEventListener('input',checkPass2)


function checkFirst() {
    if (firstName.checkValidity()) {
        const formControl= firstName.parentElement;
        formControl.className='form-control success';
    }
else {
    const formControl= firstName.parentElement;
    formControl.className='form-control error';
    const small= formControl.querySelector('small')
    small.style.bottom='20px';
    small.innerText="First name can't be blank!"
}

}
function checkSecond() {
    if (lastName.checkValidity()) {
        const formControl= lastName.parentElement;
        formControl.className='form-control success';
    }
else {
    const formControl= lastName.parentElement;
    formControl.className='form-control error';
    const small= formControl.querySelector('small')
    small.style.bottom='20px';
    small.innerText="Last name can't be blank!"
}

}
function checkEmail() {
    if (email.checkValidity()) {
        const formControl= email.parentElement;
        formControl.className='form-control success';
    }
else {
    const formControl= email.parentElement;
    formControl.className='form-control error';
    const small= formControl.querySelector('small')
    small.style.bottom='20px';
    small.innerText="Email is invalid!"
}

}
function checkTel() {
    if (phone.checkValidity()) {
        const formControl= phone.parentElement;
        formControl.className='form-control success';
    }
else {
    const formControl= phone.parentElement;
    formControl.className='form-control error';
    const small= formControl.querySelector('small')
    small.innerText="Please follow the USA phone format (123-456-7890)"
}

}

function checkPass() {
    if (password.checkValidity()) {
        const formControl= password.parentElement;
        formControl.className='form-control success';
    }
else {
    const formControl= password.parentElement;
    formControl.className='form-control error';
}

}
function checkPass2() {
    if (password2.value.trim()=='') {
        const formControl= password2.parentElement;
        formControl.className='form-control error';
        const small= formControl.querySelector('small')
        small.style.bottom='20px';
        small.innerText="Password can't be blank"   
     }
 else if (password2.value.trim()!== password.value.trim()) {
    password2.setCustomValidity('Please match passwords!')
    const formControl= password2.parentElement;
    formControl.className='form-control error';
    const small= formControl.querySelector('small')
    small.style.bottom='20px';
    small.innerText="Passwords don't match"
  
}
else {
    password2.setCustomValidity("")
    const formControl= password2.parentElement;
    formControl.className='form-control success';
}

}
