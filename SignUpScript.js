const  form = document.getElementById('form1');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const number = document.getElementById('number');
const birthdate = document.getElementById('birthdate');
const upload = document.getElementById('upload');
const check = document.getElementById('check');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.add('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const ageValue = age.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const numberValue = number.value.trim();
    const birthdateValue = birthdate.value.trim();
    const uploadValue =upload.value.trim();
    const checkValue = upload.value.trim();

    if(firstnameValue === ''){
        setError(firstname, 'First name is required');
    }
    else{
        setSuccess(firstname);
    }

    if(lastnameValue === ''){
        setError(lastname, 'Last name is required');
    }
    else{
        setSuccess(lastname);
    }

    if(ageValue === ''){
        setError(age, 'Age is required');
    }
    else{
        setSuccess(age);
    }

    if(emailValue === ''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }
    else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character.');
    }
    else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Please confirm your password');
    }
    else if(password2Value !== passwordValue)
    {
        setError(password2, "Password doesn't match");
    }
    else{
        setSuccess(password2);
    }

    if(numberValue === '')
    {
        setError(number, 'Phone Number is required');
    }
    else if(numberValue.length<10){
        setError(number, 'Phone number must have 10 digits.');
    }
    else{
        setSuccess(number);
    }

    if(birthdateValue === ''){
        setError(birthdate, 'Birth Date is required');
    }
    else{
        setSuccess(birthdate);
    }
    if(uploadValue === ''){
        setError(upload, 'File is required');
    }
    else{
        setSuccess(upload);
    }
    if(checkValue === ''){
        setError(check, 'Please mark check box');
    }
    else{
        setSuccess(check);
    }
    
    
};