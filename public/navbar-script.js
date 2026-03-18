// ============================================
// NAVBAR DYNAMIC CONTRAST DETECTION
// ============================================

class DynamicNavbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.closeBtn = document.getElementById('close-menu');
        this.cartBtn = document.getElementById('cart-btn');
        this.loginBtn = document.getElementById('login-btn');
        
        // Track current theme to avoid unnecessary updates
        this.currentTheme = 'dark';
        
        // Debounce timer for color changes
        this.colorChangeTimeout = null;
        
        this.init();
    }

    init() {
        this.initializeCSSVariables();
        this.setupEventListeners();
        this.setupIntersectionObserver();
    }

    // ============================================
    // CSS VARIABLES INITIALIZATION
    // ============================================

    initializeCSSVariables() {
        // Set root CSS variables for dark theme (default)
        document.documentElement.style.setProperty('--nav-color', '#ffffff');
        document.documentElement.style.setProperty('--nav-bg-color', 'rgba(0, 0, 0, 0.4)');
        document.documentElement.style.setProperty('--nav-border-color', 'rgba(255, 255, 255, 0.1)');
        document.documentElement.style.setProperty('--nav-accent-color', '#ff6b35');
        console.log('✓ CSS Variables initialized');
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    setupEventListeners() {
        // Hamburger menu toggle
        this.hamburger.addEventListener('click', () => this.toggleMobileMenu());

        // Close menu button
        this.closeBtn.addEventListener('click', () => this.closeMobileMenu());

        // Close menu when clicking on a link
        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });

        // Cart button click
        this.cartBtn.addEventListener('click', () => {
            console.log('🛒 Cart clicked');
        });

        // Login button click
        this.loginBtn.addEventListener('click', () => {
            console.log('🔐 Login clicked');
        });
    }

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================

    toggleMobileMenu() {
        this.mobileMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    closeMobileMenu() {
        this.mobileMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // ============================================
    // INTERSECTION OBSERVER FOR BACKGROUND DETECTION
    // ============================================

    setupIntersectionObserver() {
        // IntersectionObserver options - optimized to prevent flickering
        const options = {
            threshold: 0.1,  // Detect when at least 10% of section is visible
            rootMargin: '0px 0px 0px 0px' // Observe from navbar (top of viewport)
        };

        // Callback function for intersection changes
        const callback = (entries) => {
            // Find the entry with the highest intersection ratio
            let dominantEntry = entries.find(entry => entry.isIntersecting && entry.intersectionRatio > 0);
            
            if (!dominantEntry) {
                // If no section in viewport, check which section is closest to top
                dominantEntry = entries.reduce((prev, current) => {
                    return (Math.abs(current.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top)) ? current : prev;
                });
            }

            if (dominantEntry) {
                this.applyColorChange(dominantEntry);
            }
        };

        // Create observer
        const observer = new IntersectionObserver(callback, options);

        // Observe all sections
        const sections = document.querySelectorAll('.dark-section, .light-section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Manually trigger detection for first visible section
        setTimeout(() => {
            const firstVisibleSection = Array.from(sections).find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom > 0;
            });
            if (firstVisibleSection) {
                this.applyColorChange({target: firstVisibleSection});
            }
        }, 100);

        console.log('✓ IntersectionObserver initialized with', sections.length, 'sections');
    }

    // ============================================
    // DEBOUNCED COLOR CHANGE
    // ============================================

    scheduleColorChange(entry) {
        // Clear existing timeout
        if (this.colorChangeTimeout) {
            clearTimeout(this.colorChangeTimeout);
        }

        // Schedule change with small delay to prevent flickering (50ms)
        this.colorChangeTimeout = setTimeout(() => {
            this.applyColorChange(entry);
        }, 50);
    }

    applyColorChange(entry) {
        // Determine if section is dark or light
        const isDarkSection = entry.target.classList.contains('dark-section');
        const isLightSection = entry.target.classList.contains('light-section');

        // Only update if theme actually changes (prevent unnecessary DOM updates)
        if (isDarkSection && this.currentTheme !== 'dark') {
            this.setNavbarToDark();
            this.currentTheme = 'dark';
        } else if (isLightSection && this.currentTheme !== 'light') {
            this.setNavbarToLight();
            this.currentTheme = 'light';
        }
    }

    // ============================================
    // NAVBAR STYLE UPDATES
    // ============================================

    setNavbarToDark() {
        // Update CSS variables
        document.documentElement.style.setProperty('--nav-color', '#ffffff');
        document.documentElement.style.setProperty('--nav-bg-color', 'rgba(0, 0, 0, 0.4)');
        document.documentElement.style.setProperty('--nav-border-color', 'rgba(255, 255, 255, 0.1)');
        
        // Update classes for compatibility
        this.navbar.classList.remove('navbar-light');
        this.navbar.classList.add('navbar-dark');

        console.log('🌙 Navbar changed to DARK mode');
    }

    setNavbarToLight() {
        // Update CSS variables
        document.documentElement.style.setProperty('--nav-color', '#000000');
        document.documentElement.style.setProperty('--nav-bg-color', 'rgba(255, 255, 255, 0.4)');
        document.documentElement.style.setProperty('--nav-border-color', 'rgba(0, 0, 0, 0.1)');
        
        // Update classes for compatibility
        this.navbar.classList.remove('navbar-dark');
        this.navbar.classList.add('navbar-light');

        console.log('☀️ Navbar changed to LIGHT mode');
    }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    new DynamicNavbar();
    console.log('✓ Dynamic Navbar Initialized');
    console.log('✓ Smooth color transitions enabled');
    console.log('✓ Flicker prevention active');
});

// ============================================
// UTILITY: Add Cart Item with Animation
// ============================================

function addToCart(itemId, itemName, itemPrice) {
    const cartCounter = document.querySelector('.cart-counter');
    const currentCount = parseInt(cartCounter.textContent);
    
    // Update count
    cartCounter.textContent = currentCount + 1;

    // Animate counter with smooth scale
    cartCounter.style.animation = 'none';
    cartCounter.offsetHeight; // Trigger reflow
    cartCounter.style.animation = 'cartBounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

    console.log(`✓ Added to cart: ${itemName} (${itemPrice})`);
}

// ============================================
// UTILITY: Update CSS Variables
// ============================================

function updateNavbarColor(colorHex) {
    document.documentElement.style.setProperty('--nav-accent-color', colorHex);
    console.log(`✓ Navbar color updated to: ${colorHex}`);
}

// ============================================
// SMOOTH SCROLL BEHAVIOR (Already set in CSS)
// ============================================

// Add smooth scroll offset for anchor links (to account for fixed navbar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Don't prevent default for back to top
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offsetTop = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
