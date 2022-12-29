const nav = document.querySelector<HTMLElement>('.nav')!;
const aboutSection = document.querySelector('.about')!;

// Intersection observer to check if navbar needs blur when 90% of section is visible
let options = {
  threshold: 0.9,
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
      nav.classList.add('nav-background');
    } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
      nav.classList.remove('nav-background');
    } else {
      return;
    }
    console.log(entry);
  });
}, options);

observer.observe(aboutSection);

// Second option for the intersection observer

// window.addEventListener('scroll', (e) => {
//   if (window.scrollY > 850) {
//     nav.classList.add('nav-background');
//   } else {
//     nav.classList.remove('nav-background');
//   }
// });

const hamburger = document.querySelector<HTMLElement>('.menu')!;
const navLinks = document.querySelector<HTMLElement>('.nav-links')!;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('show');
  nav.classList.toggle('nav-height');
});

navLinks.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('show');
  nav.classList.toggle('nav-height');
});

export {};
