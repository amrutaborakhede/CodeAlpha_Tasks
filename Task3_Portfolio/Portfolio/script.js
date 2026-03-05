// Function to handle the reveal animation
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Select all elements with 'reveal' class and observe them
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});