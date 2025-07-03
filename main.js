const header = document.getElementById('site-header');
let lastScrollY = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;
  if (currentScrollY > lastScrollY) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScrollY = currentScrollY;
});
