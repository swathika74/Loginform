const form = document.getElementById("form");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");

formLogin.addEventListener('submit', function (e) {
    if (!checkInputLogin()) {
        e.preventDefault();
    }
});

//form.addEventListener('submit', function (e) {
    //if (!checkInputRegister()) {
        //e.preventDefault();
    //}
//});

function checkInputLogin() {
    const Emailvalue = Email.value.trim();
    const Passwordvalue = Password.value.trim();
    let success = true;
    if (Emailvalue === '') {
        success = false;
        setError(Email, 'Email cannot be blank');
    } else if (!isEmail(Emailvalue)) {
        setError(Email, 'Not a valid Email');
        success = false;
    } else {
        setSuccess(Email);
    }
    if (Passwordvalue === '') {
        success = false;
        setError(Password, 'Password cannot be blank');
    } else {
        setSuccess(Password);
    }
    return success;
}

function checkInputRegister() {

    const emailvalue = Email.value.trim();
    const passwordvalue = Password.value.trim();
    let success = true;

   

    if (emailvalue === '') {
        success = false;
        setError(Email, 'Email cannot be blank');
    } else if (!isEmail(emailvalue)) {
        setError(Email, 'Not a valid Email');
        success = false;
    } else {
        setSuccess(Email);
    }

    if (passwordvalue === '') {
        success = false;
        setError(Password, 'Password cannot be blank');
    } else {
        setSuccess(Password);
    }
    

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = '';
}

function isEmail(email) {
   
 } return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
