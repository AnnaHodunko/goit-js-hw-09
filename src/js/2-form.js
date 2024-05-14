'use strict';
const formData = {
  email: '',
  message: '',
};

const formLocalKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);
const email = form.elements.email;
const message = form.elements.message;

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    event.target.reset();
    localStorage.removeItem(formLocalKey);
  }
}
function handleInput(event) {
  formData.email = email.value.trim();
  formData.message = message.value.trim();
  localStorage.setItem(formLocalKey, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(formLocalKey));
  if (savedMessage) {
    email.value = savedMessage.email || '';
    message.value = savedMessage.message || '';
  }
}
