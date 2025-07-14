const header = document.getElementById('site-header');
const heroSection = document.getElementById('home');

// Header background change on scroll
window.addEventListener('scroll', () => {
  if (heroSection) {
    const heroHeight = heroSection.offsetHeight;
    if (window.scrollY > heroHeight - header.offsetHeight) {
      header.classList.add('header-scrolled');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('header-scrolled');
      header.classList.add('bg-transparent');
    }
  }
});

// Mobile menu toggle (Hamburger)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay'); // Get the new overlay element

mobileMenuButton.addEventListener('click', () => {
  // Toggle the 'translate-x-full' class on the mobile menu to slide it in/out
  mobileMenu.classList.toggle('translate-x-full');

  // Toggle the overlay visibility and pointer events
  if (mobileMenu.classList.contains('translate-x-full')) {
    // Menu is closed, hide overlay
    mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
    mobileMenuOverlay.classList.remove('opacity-50'); // Adjust opacity as desired, e.g., 50%
  } else {
    // Menu is open, show overlay
    mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
    mobileMenuOverlay.classList.add('opacity-0'); // Adjust opacity as desired
  }
});

// Close mobile menu when a link is clicked or overlay is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
    mobileMenuOverlay.classList.remove('opacity-50');
  });
});

// Close menu when clicking on the overlay
mobileMenuOverlay.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
    mobileMenuOverlay.classList.remove('opacity-50');
});


// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 500,
        once: true,
        easing: 'ease-out',
    });
});
