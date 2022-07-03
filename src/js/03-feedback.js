// import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const formInputObj = {};

feedbackForm.addEventListener('input', onFormInput);

function onFormInput(e) {
    formInputObj.email = feedbackForm.elements.email.value;
    formInputObj.message = feedbackForm.elements.message.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInputObj));

    console.dir(formInputObj);
}
    