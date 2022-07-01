import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

feedbackForm.addEventListener('input', onFormInput);

function onFormInput(e) {
    const formInput = e.target;
    const {name, message} = formInputObj;
    console.log(formInput);
    console.log(formInput.value);
}