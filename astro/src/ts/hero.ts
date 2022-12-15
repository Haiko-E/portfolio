const hero = document.querySelector<HTMLElement>('.hero')!;

hero.addEventListener('mousemove', (e) => {
  const X = `-${e.pageX / 100}px`;
  const Y = `-${e.pageY / 100}px`;
  hero.style.setProperty('--positionX', X);
  hero.style.setProperty('--positionY', Y);
});

export {};
