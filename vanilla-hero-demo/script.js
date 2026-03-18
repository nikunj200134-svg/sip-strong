/**
 * SipStrong Hero Animations Script
 * 
 * Triggers the entry text reveals and handles minor interactive polish.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Trigger Initial Page Load Animations
    // We use a slight delay to ensure fonts have painted and the screen is ready
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 2. Interactive Parallax Effect on Mouse Move
    // This gives the hero section a slight 3D depth feel as the user moves their mouse
    const heroSection = document.getElementById('hero');
    const pouch = document.querySelector('.product-wrapper');
    const backgroundGrid = document.querySelector('.hero-grid');

    if (heroSection && pouch && backgroundGrid) {
        heroSection.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to center of screen (-1 to 1)
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

            // Move the pouch slightly in the opposite direction of the mouse
            pouch.style.transform = `translate(${xAxis}px, ${yAxis}px)`;

            // Move the background grid slightly in the same direction for depth
            backgroundGrid.style.transform = `perspective(500px) rotateX(20deg) scale(1.5) translate(${xAxis * -0.5}px, ${yAxis * -0.5}px)`;
        });

        // Reset positions when mouse leaves the hero section
        heroSection.addEventListener('mouseleave', () => {
            pouch.style.transform = `translate(0px, 0px)`;
            backgroundGrid.style.transform = `perspective(500px) rotateX(20deg) scale(1.5) translate(0px, 0px)`;

            // Re-apply smooth transitions for the snap-back
            pouch.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            backgroundGrid.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });

        // Remove transitions during active mouse move so it perfectly tracks the cursor
        heroSection.addEventListener('mouseenter', () => {
            pouch.style.transition = 'none';
            backgroundGrid.style.transition = 'none';
        });
    }

});
