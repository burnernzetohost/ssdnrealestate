const header = document.getElementById('site-header');
let lastScrollY = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;
  if (currentScrollY > lastScrollY) {
    // Scrolling down, hide header
    header.classList.add('hidden');
  } else {
    // Scrolling up, show header
    header.classList.remove('hidden');
  }
  lastScrollY = currentScrollY;
});

// Mobile menu toggle (Hamburger)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 500, // Animation duration in milliseconds
        once: true,
        easing: 'ease-out',     // Whether animation should happen only once - default
    });
});

