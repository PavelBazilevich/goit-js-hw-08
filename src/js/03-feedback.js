import throttle from 'lodash.throttle';

const feedbackEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');

const FEEDBACK = 'feedback-form-state';
const storageData = JSON.parse(localStorage.getItem(FEEDBACK));

const savedDataObj = {
  email: storageData ? storageData.email : '',
  message: storageData ? storageData.message : '',
};

feedbackEl.addEventListener('input', throttle(savedData, 500));
feedbackEl.addEventListener('submit', onFormSubmit);

autocomplete();

function savedData(event) {
  savedDataObj[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(savedDataObj));
}

function autocomplete() {
  if (storageData) {
    inputEl.value = storageData.email;
    textEl.value = storageData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const storageData = JSON.parse(localStorage.getItem(FEEDBACK));
  if (storageData) {
    console.log(storageData);
  }
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK);
}
