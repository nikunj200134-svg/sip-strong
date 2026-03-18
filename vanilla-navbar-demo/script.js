document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    // =========================================
    // 1. MENU INTERACTION (Slide-in & Blur)
    // =========================================

    const toggleMenu = () => {
        const isActive = sideMenu.classList.contains('active');

        if (isActive) {
            // Close Menu
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
            // Reset hamburger icon if we were animating it inside nav
            hamburgerBtn.classList.remove('active');
        } else {
            // Open Menu
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            // Animate hamburger to X
            hamburgerBtn.classList.add('active');
        }
    };

    // Event Listeners
    hamburgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu); // Closes menu when clicking outside

    // =========================================
    // 2. DYNAMIC NAVBAR COLOR (IntersectionObserver)
    // =========================================

    // We observe all sections that have a data-theme attribute
    const sections = document.querySelectorAll('section[data-theme]');

    const observerOptions = {
        root: null,
        // The trigger point is when the section hits the top 80px (height of navbar)
        rootMargin: '-80px 0px 0px 0px',
        threshold: 0 // Trigger as soon as the boundary is crossed
    };

    // Keep track of which sections are intersecting near the top
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the section is currently intersecting the top boundary area
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute('data-theme');

                if (theme === 'light') {
                    // Light section -> Dark icons/text
                    navbar.classList.add('theme-light');
                } else {
                    // Dark section -> White icons/text
                    navbar.classList.remove('theme-light');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Optional: Add a subtle background to navbar when scrolling down regardless of section
    // if you don't want it to always be fully transparent.
    /*
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = navbar.classList.contains('theme-light') ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
    });
    */
});
