document.addEventListener('DOMContentLoaded', () => {

    // 1. Setup IntersectionObserver for Scroll Reveals
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before the item enters fully
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the CSS transition
                entry.target.classList.add('is-visible');

                // Optional: Stop observing once revealed if you want it to only animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Observe the Header
    const headerElement = document.querySelector('.reveal-item');
    if (headerElement) {
        observer.observe(headerElement);
    }

    // 3. Observe the Cards and apply staggered delays visually
    const cards = document.querySelectorAll('.reveal-card');
    cards.forEach((card, index) => {
        // Apply a staggered transition delay based on the index
        // This makes them reveal one-by-one from left to right
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });

});
