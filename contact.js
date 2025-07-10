// contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous validation messages
        const formControls = contactForm.querySelectorAll('.form-control');
        formControls.forEach(control => {
            control.classList.remove('is-invalid');
        });

        // Validate Full Name
        const fullName = document.getElementById('fullName');
        if (fullName.value.trim() === '') {
            fullName.classList.add('is-invalid');
            isValid = false;
        }

        // Validate Email Address
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        }

        // Validate Phone (optional, but ensure it's a number if entered)
        const phone = document.getElementById('phone');
        // Basic check for digits, allow optional + at start
        const phonePattern = /^\+?[0-9\s-]{7,15}$/;
        if (phone.value.trim() !== '' && !phonePattern.test(phone.value.trim())) {
            phone.classList.add('is-invalid');
            isValid = false;
        }


        // Validate Subject
        const subject = document.getElementById('subject');
        if (subject.value.trim() === '') {
            subject.classList.add('is-invalid');
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            message.classList.add('is-invalid');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            event.stopPropagation(); // Stop propagation for Bootstrap's validation display
        } else {
            // If validation passes, you would typically send the form data
            // to a server using AJAX (e.g., fetch API) here.
            // For this example, we'll just show an alert.

            event.preventDefault(); // Prevent actual submission for demo
            alert('Form submitted successfully!\n(In a real application, this data would be sent to a server.)');
            contactForm.reset(); // Clear the form after successful submission
            // Optional: Hide invalid feedback if successful
            formControls.forEach(control => {
                control.classList.remove('is-invalid');
            });
        }
    });

    // Add real-time validation feedback on input for a better user experience
    contactForm.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid'); // Optional: Add is-valid for green border
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });

        // Specific validation for email
        if (input.type === 'email') {
            input.addEventListener('input', function() {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailPattern.test(this.value.trim())) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        }

        // Specific validation for phone (if not empty)
        if (input.type === 'tel') {
            input.addEventListener('input', function() {
                const phonePattern = /^\+?[0-9\s-]{7,15}$/;
                 if (this.value.trim() === '' || phonePattern.test(this.value.trim())) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        }
    });
});