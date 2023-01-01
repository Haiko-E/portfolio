import { z } from 'zod';

// SELECTING ELEMENTS
const nameInput = document.querySelector('#name') as HTMLInputElement;
const nameSpan = document.querySelector('#invalid-name') as HTMLSpanElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const emailSpan = document.querySelector('#invalid-email') as HTMLSpanElement;
const messageInput = document.querySelector('#message') as HTMLTextAreaElement;
const messageSpan = document.querySelector('#invalid-message') as HTMLSpanElement;
const submitButton = document.querySelector('#submit') as HTMLAnchorElement;

// CREATE VALIDATE SCHEMA
const formSchema = z.object({
  name: z.string().min(1, "Name can't be empty"),
  email: z.string().email(),
  message: z.string().min(1, "Message can't be empty"),
});

function validateForm(e: Event) {
  const element = e.target as HTMLElement;
  const Zod = formSchema.safeParse({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  });

  if (element.id === 'name') {
    const name = formSchema.shape.name.safeParse(nameInput.value);
    !name.success
      ? (nameSpan.textContent = name.error.errors[0].message)
      : (nameSpan.textContent = '');
  }
  if (element.id === 'email') {
    const email = formSchema.shape.email.safeParse(emailInput.value);
    !email.success
      ? (emailSpan.textContent = email.error.errors[0].message)
      : (emailSpan.textContent = '');
  }
  if (element.id === 'message') {
    const message = formSchema.shape.message.safeParse(messageInput.value);
    !message.success
      ? (messageSpan.textContent = message.error.errors[0].message)
      : (messageSpan.textContent = '');
  }

  if (Zod.success) {
    submitButton.classList.remove('btn-disabled');
  } else {
    submitButton.classList.add('btn-disabled');
  }
}

nameInput?.addEventListener('keyup', validateForm);
nameInput?.addEventListener('focus', validateForm);

emailInput?.addEventListener('keyup', validateForm);
emailInput?.addEventListener('focus', validateForm);

messageInput?.addEventListener('keyup', validateForm);
messageInput?.addEventListener('focus', validateForm);

export { formSchema };
