'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import { CartItem } from '@/types/cart';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isLight?: boolean;
    isDarkBackground?: boolean;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isLight: boolean;
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const MobileDrawer = dynamic<MobileDrawerProps>(() => import('./MobileDrawer'), { ssr: false });
const CartDrawer = dynamic<CartDrawerProps>(() => import('./CartDrawer'), { ssr: false });

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartBounce, setCartBounce] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    const pathname = usePathname();
    const router = useRouter();
    const isShopRoute = pathname === '/shop' || pathname.startsWith('/shop/');

    // Local state for authentication
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // IntersectionObserver for Dynamic Contrast Detection
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Check if section is dark or light
                        const isDark = entry.target.classList.contains('dark-section');
                        const isLight = entry.target.classList.contains('light-section');

                        if (isDark) {
                            setIsDarkBackground(true);
                        } else if (isLight) {
                            setIsDarkBackground(false);
                        }
                    }
                });
            },
            {
                threshold: 0, // Trigger when section enters navbar area
                rootMargin: '0px 0px -90% 0px', // Observe only top portion (navbar height)
            }
        );

        // Observe all dark-section and light-section elements
        const sections = document.querySelectorAll('.dark-section, .light-section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // Load Cart from LocalStorage & Listen to Auth State on Mount
    React.useEffect(() => {
        // Load initial cart
        const savedCart = localStorage.getItem('sipstrong_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }

        // Safe Firebase initialization
        const initFirebase = async () => {
            try {
                const { initializeApp, getApps, getApp } = await import('firebase/app');
                const { getAuth, onAuthStateChanged } = await import('firebase/auth');

                const firebaseConfig = {
                    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
                };

                // Validate that all Firebase config values are present
                const isConfigValid = Object.values(firebaseConfig).every(value => value && typeof value === 'string' && value !== '');

                if (!isConfigValid) {
                    console.warn('Firebase configuration is incomplete - some environment variables are missing');
                    return undefined;
                }

                const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
                const auth = getAuth(app);

                return onAuthStateChanged(auth, (user) => {
                    setIsAuthenticated(!!user);
                });
            } catch (error: unknown) {
                console.error("Firebase Auth initialization failed:", error);
                return undefined;
            }
        };

        let unsubscribe: (() => void) | undefined;
        initFirebase().then(unsub => {
            if (unsub) unsubscribe = unsub;
        });

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    // Save Cart to LocalStorage whenever it changes
    React.useEffect(() => {
        // Prevent clearing the cart on the very first render before we load from localStorage
        try {
            if (typeof window !== 'undefined' && (cartItems.length > 0 || localStorage.getItem('sipstrong_cart'))) {
                localStorage.setItem('sipstrong_cart', JSON.stringify(cartItems));
            }
        } catch (error) {
            console.warn('Failed to save cart to localStorage:', error);
        }
    }, [cartItems]);

    // Subscribe to add-to-cart events across the site
    React.useEffect(() => {
        const handleAddToCart = (e: Event) => {
            const customEvent = e as CustomEvent;
            const newItem = customEvent.detail;

            if (!newItem || !newItem.id) return;

            setCartItems((prev) => {
                const existing = prev.find(item => item.id === newItem.id);
                if (existing) {
                    return prev.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item);
                }
                return [...prev, { ...newItem, quantity: 1 }];
            });
            setIsCartOpen(true);
            setCartBounce(true);
            setTimeout(() => setCartBounce(false), 300);
        };

        window.addEventListener('add-to-cart', handleAddToCart);
        return () => window.removeEventListener('add-to-cart', handleAddToCart);
    }, []);

    // Simulate bouncing cart
    const triggerCartBounce = () => {
        setCartBounce(true);
        setTimeout(() => setCartBounce(false), 300);
    };

    // Determine colors based on background section or route
    const usePathSpecific = isShopRoute;
    const isDark = !usePathSpecific ? isDarkBackground : !isShopRoute;

    const headerBgClass = usePathSpecific
        ? 'bg-white/95 border-black/10'
        : isDark
            ? 'bg-black/40 border-white/10'
            : 'bg-white/40 border-black/10';

    const textClass = isDark
        ? 'text-white hover:text-brand-orange'
        : 'text-black hover:text-black/70';

    const navTextClass = isDark
        ? 'text-white/80 hover:text-white'
        : 'text-black/70 hover:text-black';

    const buttonClass = isDark
        ? 'bg-brand-orange hover:bg-brand-orange-hover text-white'
        : 'bg-black hover:bg-gray-800 text-white';

    return (
        <>
            <header className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out backdrop-blur-md border-b ${headerBgClass}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20 relative">

                        {/* Left: Navigation & Login */}
                        <div className="flex-1 flex items-center justify-start space-x-2 sm:space-x-8">
                            <nav className="hidden md:flex items-center gap-8 h-full">
                                {/* SHOP ITEM */}
                                <div className="group h-full relative flex items-center">
                                    <Link href="/shop" className={`${navTextClass} transition-colors font-semibold tracking-wide uppercase text-sm h-full flex items-center gap-1.5`}>
                                        Shop
                                        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Link>

                                    {/* Shop Megamenu */}
                                    <div className="absolute top-full -left-6 w-56 bg-[#0a0a0a] backdrop-blur-2xl border border-white/10 p-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 shadow-2xl rounded-sm z-50">
                                        <div className="flex flex-col gap-4">
                                            {[
                                                { name: 'Whey Protein', path: '/shop?category=whey-protein' },
                                                { name: 'Electrolytes', path: '/shop?category=electrolytes' },
                                                { name: 'Creatine', path: '/shop?category=creatine' },
                                                { name: 'Bundles', path: '/shop?category=bundles' }
                                            ].map((cat) => (
                                                <button
                                                    key={cat.name}
                                                    onClick={() => {
                                                        router.push(cat.path);
                                                    }}
                                                    className="text-white/60 hover:text-brand-orange font-oswald text-xs font-black uppercase tracking-widest transition-colors block text-left"
                                                >
                                                    {cat.name}
                                                </button>
                                            ))}
                                            <div className="h-[1px] bg-white/10 my-1" />
                                            <button
                                                onClick={() => router.push('/shop?category=all')}
                                                className="text-white font-oswald text-xs font-black uppercase tracking-widest hover:text-brand-orange block text-left"
                                            >
                                                All Supplements
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* SUPPORT ITEM */}
                                <div className="group h-full relative flex items-center">
                                    <Link href="/faq" className={`${navTextClass} transition-colors font-semibold tracking-wide uppercase text-sm h-full flex items-center gap-1.5`}>
                                        Support
                                        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Link>

                                    {/* Support Megamenu */}
                                    <div className="absolute top-full -left-6 w-56 bg-[#0a0a0a] backdrop-blur-2xl border border-white/10 p-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 shadow-2xl rounded-sm z-50">
                                        <div className="flex flex-col gap-4">
                                            {[
                                                { name: 'FAQ', path: '/faq' },
                                                { name: 'Shipping & Returns', path: '/shipping-returns' },
                                                { name: 'Contact Us', path: '/contact' }
                                            ].map((link) => (
                                                <button
                                                    key={link.name}
                                                    onClick={() => {
                                                        router.push(link.path);
                                                    }}
                                                    className="text-white/60 hover:text-brand-orange font-oswald text-xs font-black uppercase tracking-widest transition-colors block text-left"
                                                >
                                                    {link.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link href="/stack-builder" className={`${navTextClass} transition-colors font-semibold tracking-wide uppercase text-sm h-full flex items-center`}>
                                    Stack Builder
                                </Link>

                                <Link href="/learn" className={`${navTextClass} transition-colors font-semibold tracking-wide uppercase text-sm h-full flex items-center`}>
                                    Learn
                                </Link>

                                <Link href="/about" className={`${navTextClass} transition-colors font-semibold tracking-wide uppercase text-sm h-full flex items-center`}>
                                    About
                                </Link>
                            </nav>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                onClick={() => router.push(isAuthenticated ? '/shop' : '/login')}
                                className={`hidden lg:flex items-center justify-center px-5 py-2.5 rounded-sm font-oswald uppercase tracking-wide text-sm font-semibold transition-all ${buttonClass}`}
                            >
                                {isAuthenticated ? 'My Account' : 'Login'}
                            </motion.button>

                            {/* Mobile Hamburger - Left side for ergonomics if center centered */}
                            <button
                                className={`${textClass} w-11 h-11 relative focus:outline-none flex flex-col justify-center items-center md:hidden -ml-2`}
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Open Menu"
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span className={`block w-full h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300`} />
                                    <span className={`block w-full h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300`} />
                                    <span className={`block w-full h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300`} />
                                </div>
                            </button>
                        </div>

                        {/* Center: Logo */}
                        <div className="flex-1 flex justify-center items-center">
                            <Link href="/" className="flex flex-col items-center min-h-[44px] justify-center group">
                                <span className={`font-oswald text-[clamp(1.25rem,4vw,1.875rem)] font-black tracking-widest uppercase transition-colors duration-300 ${isDark ? 'text-white group-hover:text-brand-orange' : 'text-black group-hover:text-brand-orange'}`}>SIPSTRONG</span>
                                <span className="text-[10px] font-oswald font-bold tracking-[0.3em] uppercase text-brand-orange leading-none mt-1">Made in India</span>
                            </Link>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                            <motion.button
                                animate={cartBounce ? { y: [0, -10, 0] } : {}}
                                onClick={() => setIsCartOpen(true)}
                                className={`${textClass} transition-colors relative flex items-center justify-center w-11 h-11`}
                                aria-label="Cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                                <span className={`absolute top-1 right-1 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${isDark ? 'bg-brand-orange' : 'bg-black'}`}>
                                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                                </span>
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push(isAuthenticated ? '/shop' : '/login')}
                                className={`${textClass} w-11 h-11 md:hidden flex items-center justify-center`}
                                aria-label="Account"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </header>

            <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isLight={isShopRoute} isDarkBackground={isDarkBackground} />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} isLight={isShopRoute} cartItems={cartItems} setCartItems={setCartItems} />
        </>
    );
};

export default Header;
