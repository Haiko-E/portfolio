window.addEventListener('load', () => {
  fadeOutLoadingScreen();
});

function fadeOutLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  const logo = document.getElementById('logo');

  const fadeOutDuration = 2600;
  const fadeOutLogoDuration = 1900;

  loader?.classList.add('slide-out-top');
  logo?.classList.add('fade-out');

  setTimeout(function () {
    logo?.classList.add('hidden');
  }, fadeOutLogoDuration);

  setTimeout(function () {
    loader?.classList.add('hidden');
  }, fadeOutDuration);
}

export {};
