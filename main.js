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
  // Toggle the 'menu-open' class on the hamburger button
  mobileMenuButton.classList.toggle('menu-open');

  // Toggle the overlay visibility and pointer events
  if (mobileMenu.classList.contains('translate-x-full')) {
    // Menu is closed, hide overlay
    mobileMenuOverlay.classList.remove('opacity-50'); // Remove 50% opacity
    mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none'); // Hide and disable clicks
  } else {
    // Menu is open, show overlay
    mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none'); // Make visible and clickable
    mobileMenuOverlay.classList.add('opacity-50'); // Add 50% opacity
  }
});

// Close mobile menu when a link is clicked or overlay is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.remove('opacity-50'); // Remove 50% opacity
    mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none'); // Hide and disable clicks
    mobileMenuButton.classList.remove('menu-open'); // Close animation
  });
});

// Close menu when clicking on the overlay
mobileMenuOverlay.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.remove('opacity-50'); // Remove 50% opacity
    mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none'); // Hide and disable clicks
    mobileMenuButton.classList.remove('menu-open'); // Close animation
});


// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 500,
        once: true,
        easing: 'ease-out',
    });

    // --- Contact Form Submission Logic ---
    const contactForm = document.getElementById('contactForm'); // **Ensure your HTML form has id="contactForm"**

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(contactForm);
            // Ensure your input fields have 'name' attributes matching these keys
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');

            const submissionData = {
                name: name,
                email: email,
                phone: phone,
                message: message
            };

            try {
                const response = await fetch('https://contact-form-submission.vercel.app/real-estate-contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(submissionData)
                });

                if (response.ok) {
                    alert('Your message has been sent successfully!');
                    contactForm.reset(); // Clear the form fields
                } else {
                    const errorData = await response.json();
                    alert(`There was an error sending your message: ${errorData.detail || response.statusText}`);
                }
            } catch (error) {
                console.error('Error submitting contact form:', error);
                alert('An unexpected error occurred. Please try again later.');
            }
        });
    }
    // --- End of Contact Form Submission Logic ---
});
