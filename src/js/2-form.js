'use strict';
const formData = {
  email: '',
  massage: '',
};

const formLocalKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
form.addEventListener('submit', handleSubmit);
textarea.addEventListener('input', handleInput);
populateTextarea();

function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = event.target.elements;
  const emailValue = email.value;
  const messageValue = message.value;
  console.log({
    email: email.value,
    massage: message.value,
  });
  event.target.reset();
  localStorage.removeItem(formLocalKey);
}

function handleInput(event) {
  const email = event.target.value;
  const message = event.target.value;
  const formLocalKey = 'feedback-form-state';
  localStorage.setItem(formLocalKey, email, message);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem());
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
