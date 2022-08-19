import throttle from 'lodash.throttle';

const feedbackEl = document.querySelector('.feedback-form');
const FEEDBACK = 'feedback-form-state';

initForm();

feedbackEl.addEventListener('submit', event => {
  event.preventDefault();
  const savedDataObj = JSON.parse(localStorage.getItem(FEEDBACK));
  console.log(savedDataObj);
  localStorage.removeItem(FEEDBACK);
    event.currentTarget.reset();
});

feedbackEl.addEventListener(
  'input',
  throttle(event => {
    let persistedStorage = localStorage.getItem(FEEDBACK);
    persistedStorage = persistedStorage ? JSON.parse(persistedStorage) : {}
    persistedStorage[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK, JSON.stringify(persistedStorage));
  }, 500)
);

function initForm() {
  let persistedStorage = localStorage.getItem(FEEDBACK);
  if (persistedStorage) {
    persistedStorage = JSON.parse(persistedStorage);
    Object.entries(persistedStorage).forEach(([name, value]) => {
      feedbackEl.elements[name].value = value;
    })
}
}