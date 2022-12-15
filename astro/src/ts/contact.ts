// INPUT NAME
const nameInput = document.querySelector<HTMLInputElement>('#first');

//SPAN's NAME
const invalidIcon1 = document.querySelector<HTMLSpanElement>('#t-invalid1');
const invalidText1 = document.querySelector<HTMLSpanElement>('#i-invalid1');
const validIcon1 = document.querySelector<HTMLSpanElement>('#i-valid1');

// RESET NAME ICONS AND TEXT
invalidIcon1!.hidden = true;
validIcon1!.hidden = true;
invalidText1!.hidden = true;
let nameIsValid = false;

function validName(e: Event) {
  if (nameInput?.value) {
    nameIsValid = true;
    validIcon1!.hidden = false;
    invalidIcon1!.hidden = true;
    invalidText1!.hidden = true;
  } else {
    nameIsValid = false;
    validIcon1!.hidden = true;
    invalidIcon1!.hidden = false;
    invalidText1!.hidden = false;
  }
}

nameInput!.addEventListener('focus', validName);
nameInput!.addEventListener('keyup', validName);

// ---------------------------------------------------------------------------------------//

//EMAIL INPUT
const emailInput = document.querySelector<HTMLInputElement>('#email');

//SPAN's EMAIL
const invalidIcon2 = document.querySelector<HTMLSpanElement>('#t-invalid2');
const invalidText2 = document.querySelector<HTMLSpanElement>('#i-invalid2');
const validIcon2 = document.querySelector<HTMLSpanElement>('#i-valid2');

// RESET EMAIL ICONS AND TEXT
invalidIcon2!.hidden = true;
validIcon2!.hidden = true;
invalidText2!.hidden = true;
let emailIsValid = false;

function validEmail(e: Event) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (emailRegex.test(emailInput?.value!)) {
    emailIsValid = true;
    validIcon2!.hidden = false;
    invalidIcon2!.hidden = true;
    invalidText2!.hidden = true;
  } else {
    emailIsValid = false;
    validIcon2!.hidden = true;
    invalidIcon2!.hidden = false;
    invalidText2!.hidden = false;
  }
}

emailInput!.addEventListener('focus', validEmail);
emailInput!.addEventListener('keyup', validEmail);

// ---------------------------------------------------------------------------------------//

//MESSAGE INPUT
const messageInput = document.querySelector<HTMLTextAreaElement>('#message');

//SPAN's MESSAGE
const invalidIcon3 = document.querySelector<HTMLSpanElement>('#t-invalid3');
const invalidText3 = document.querySelector<HTMLSpanElement>('#i-invalid3');
const validIcon3 = document.querySelector<HTMLSpanElement>('#i-valid3');

// RESET MESSAGE ICONS AND TEXT
invalidIcon3!.hidden = true;
validIcon3!.hidden = true;
invalidText3!.hidden = true;
let messageIsValid = false;

function validMessage(e: Event) {
  if (messageInput?.value) {
    messageIsValid = true;
    validIcon3!.hidden = false;
    invalidIcon3!.hidden = true;
    invalidText3!.hidden = true;
  } else {
    messageIsValid = false;
    validIcon3!.hidden = true;
    invalidIcon3!.hidden = false;
    invalidText3!.hidden = false;
  }
}

messageInput!.addEventListener('focus', validMessage);
messageInput!.addEventListener('keyup', validMessage);

// ---------------------------------------------------------------------------------------//
// Send form with a tag

const form = document.querySelector<HTMLFormElement>('#myform')!;
const submitButton = document.querySelector<HTMLAnchorElement>('#btn-submit')!;

function validateForm(e: Event) {
  if (nameIsValid && emailIsValid && messageIsValid) {
    submitButton.classList.remove('btn-disabled');
  } else {
    submitButton.classList.add('btn-disabled');
  }
}

form.addEventListener('keyup', validateForm);
form.addEventListener('click', validateForm);

submitButton.addEventListener('click', (e) => {
  form.submit();
});

export {};
