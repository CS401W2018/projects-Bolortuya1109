document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Prevents the form from actually submitting

        // Simulate form processing
        formMessage.classList.remove('hidden');
        form.reset();  // Clear the form after submission
    });
});