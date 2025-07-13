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
const contentWrapper = document.getElementById('content-wrapper'); // Get the content wrapper

mobileMenuButton.addEventListener('click', () => {
  // Toggle the 'translate-x-full' class on the mobile menu to slide it in/out
  mobileMenu.classList.toggle('translate-x-full');
  // Toggle the 'menu-open-right' class on the content wrapper to push content left/right
  contentWrapper.classList.toggle('menu-open-right');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    // Add 'translate-x-full' to hide the menu
    mobileMenu.classList.add('translate-x-full');
    // Remove 'menu-open-right' to restore content position
    contentWrapper.classList.remove('menu-open-right');
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
