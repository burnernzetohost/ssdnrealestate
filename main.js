const header = document.getElementById('site-header');
// Header background change on scroll
const heroSection = document.getElementById('home');
// Already defined, but keeping for clarity

window.addEventListener('scroll', () => {
  if (heroSection) {
    const heroHeight = heroSection.offsetHeight;
    if (window.scrollY > heroHeight - header.offsetHeight) { // When top of header reaches past hero
      header.classList.add('header-scrolled');
      header.classList.remove('bg-transparent'); // Remove transparent background
    } else {
      header.classList.remove('header-scrolled');
      header.classList.add('bg-transparent'); // Add transparent background
    }
  }
});


// Mobile menu toggle (Hamburger)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
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
