const nav = document.querySelector<HTMLElement>('.nav')!;

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 850) {
    nav.classList.add('nav-background');
  } else {
    nav.classList.remove('nav-background');
  }
});

const hamburger = document.querySelector<HTMLElement>('.menu')!;
const navPrim = document.querySelector<HTMLElement>('.nav-links')!;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navPrim.classList.toggle('show');
  nav.classList.toggle('nav-height');
});

export {};
