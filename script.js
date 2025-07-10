

document.addEventListener('DOMContentLoaded', function() {
    // --- Sticky Navigation Bar Logic ---
    const header = document.querySelector('.header-main');
    const heroSection = document.querySelector('.hero-section'); 
    const navHeight = header.offsetHeight; // Get the height of the fixed navbar

    // Function to add/remove 'sticky' class
    function handleScroll() {
        // If there's a hero section, make the navbar sticky after scrolling past it
        // Otherwise, make it sticky immediately after initial navbar height
        if (heroSection) {
            if (window.scrollY > heroSection.offsetHeight - navHeight) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        } else {
            // For pages without a hero section (e.g., About Us, Products)
            if (window.scrollY > 0) { // Make sticky as soon as user scrolls
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user loads the page already scrolled
    handleScroll();

    // --- Bootstrap Carousel Initialization (if not auto-initialized by data-bs-ride) ---
    // For the homepage promo carousel:
    const promoCarousel = document.getElementById('promoCarousel');
    if (promoCarousel) {
        new bootstrap.Carousel(promoCarousel, {
            interval: 5000, // Slides change every 5 seconds
            pause: 'hover' // Pause on mouse hover
        });
    }

    // For the partners/clients testimonials carousel (if you make it a carousel later):
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 7000, // Slightly longer interval
            pause: 'hover'
        });
    }

    // --- Placeholder for Contact Form Validation ---
    function setupContactFormValidation() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                // Prevent default form submission for client-side validation
                event.preventDefault();

                // Basic validation checks (placeholders)
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const message = document.getElementById('message').value.trim();

                let isValid = true;

                // Simple non-empty check for required fields
                if (name === '') {
                    alert('Please enter your name.');
                    isValid = false;
                } else if (email === '') {
                    alert('Please enter your email.');
                    isValid = false;
                } else if (!isValidEmail(email)) {
                    alert('Please enter a valid email address.');
                    isValid = false;
                } else if (message === '') {
                    alert('Please enter your message.');
                    isValid = false;
                }

                // If all checks pass, you would typically submit the form via AJAX or allow default submission
                if (isValid) {
                    alert('Form submitted successfully! (This is a demo. No actual submission.)');
                    contactForm.reset(); // Clear the form
                    // In a real application, send data to your backend here
                }
            });
        }
    }

    // Basic email format validation (can be more robust)
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Placeholder for Google Maps Initialization
    window.initMap = function() {
        const primeTradersLocation = { lat: 19.0760, lng: 72.8777 }; // Mumbai coordinates for Bandra Kurla Complex
        const map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 15,
            center: primeTradersLocation,
            mapId: 'YOUR_MAP_ID_HERE' // Recommended for customized maps, otherwise omit or use 'DEMO_MAP_ID'
        });

        new google.maps.Marker({
            position: primeTradersLocation,
            map: map,
            title: 'Prime Traders Office'
        });
    };

  
    setupContactFormValidation(); // Will only run if contactForm exists
  
});
