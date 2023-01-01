const submitButton = document.querySelector('#submit') as HTMLAnchorElement;
const contactBox = document.querySelector('.contact__box') as HTMLDivElement;
const contactSection = document.querySelector('.contact') as HTMLElement;
const messageBox = document.querySelector('#message') as HTMLTextAreaElement;
const form = document.querySelector('#myform') as HTMLFormElement;

// MESSAGEBOX RESIZING WHEN TYPING
const reg = /(\r\n|\r|\n)/g;
let rows = 1;

messageBox.addEventListener('keyup', (e) => {
  const element = e.target as HTMLTextAreaElement;
  const enterCount = [...element.value.matchAll(reg)].length;

  if (enterCount === 0) {
    rows = 1;
    element.rows = rows;
  }
  if (enterCount < rows) {
    rows = rows - 1;
    element.rows = rows;
  }
  if (enterCount >= rows) {
    rows = rows + 1;
    element.rows = rows;
  }

  return;
});

// ANIMATION FUNCTION
function playAnimation() {
  setTimeout(() => {
    contactBox.classList.remove('play-animation');
  }, 7900);

  contactBox.classList.add('play-animation');
}

// OBSERVER
const options = {
  threshold: 0.8,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contactBox.classList.add('reverse-animation');
      observer.disconnect();
      contactBox.style.opacity = '1';
      setTimeout(() => {
        contactBox.classList.remove('reverse-animation');
      }, 2700);
    }
  });
}, options);

observer.observe(contactSection);

// SUBMITTING
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  playAnimation();
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData.toString()),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch((error) => alert(error));
});

export {};
