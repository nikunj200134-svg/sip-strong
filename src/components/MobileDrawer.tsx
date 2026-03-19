/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isLight?: boolean;
    isDarkBackground?: boolean;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, isLight = false }) => {

    const menuItems = [
        { label: 'Shop All', href: '/shop?category=all' },
        {
            label: 'Categories',
            subItems: [
                { label: 'Whey Protein', href: '/shop?category=whey-protein' },
                { label: 'Electrolytes', href: '/shop?category=electrolytes' },
                { label: 'Creatine', href: '/shop?category=creatine' },
                { label: 'Bundles', href: '/shop?category=bundles' },
            ]
        },
        {
            label: 'Support',
            subItems: [
                { label: 'FAQ', href: '/faq' },
                { label: 'Shipping & Returns', href: '/shipping-returns' },
                { label: 'Contact Us', href: '/contact' },
            ]
        },
        { label: 'Learn', href: '/learn' },
        { label: 'Our Story', href: '/about' },
    ];

    const bgColor = isLight ? 'bg-white' : 'bg-black';
    const textColor = isLight ? 'text-black' : 'text-white';
    const subTextColor = isLight ? 'text-black/60' : 'text-white/70';
    const borderColor = isLight ? 'border-black/5' : 'border-white/5';

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay with Blur Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] backdrop-blur-md bg-black/60"
                        onClick={onClose}
                    />

                    {/* Slide Menu */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] z-[101] flex flex-col ${bgColor} shadow-[-20px_0_50px_rgba(0,0,0,0.5)] safe-area-inset-right`}
                    >
                        {/* Header with Close Button */}
                        <div className={`flex justify-between items-center px-10 py-10 border-b ${borderColor}`}>
                            <div className="flex items-center gap-2">
                                <span className={`font-oswald text-2xl font-black tracking-widest uppercase ${textColor}`}>
                                    SIP<span className="text-brand-orange">STRONG</span>
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border ${borderColor} hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300`}
                                aria-label="Close Menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Brand / Intro Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="px-10 py-12"
                        >
                            <p className="text-xs font-oswald font-bold uppercase tracking-[0.3em] mb-4 text-brand-orange">
                                Pure Performance
                            </p>
                            <p className={`text-lg font-sans leading-relaxed ${subTextColor} max-w-[320px]`}>
                                The next generation of athletic nutrition. Designed for the elite. Delivered anywhere.
                            </p>
                        </motion.div>

                        {/* Navigation Links with Stagger Animation */}
                        <nav className="flex-1 px-10 overflow-y-auto" data-lenis-prevent="true" style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>
                            <div className="flex flex-col space-y-2">
                                {menuItems.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                                    >
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className={`group flex items-center justify-between py-6 px-0 border-b ${borderColor} transition-all duration-300`}
                                            >
                                                <span className={`font-oswald text-3xl font-black tracking-tight uppercase transition-colors duration-300 group-hover:text-brand-orange ${textColor}`}>
                                                    {item.label}
                                                </span>
                                                <svg
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                                    className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-brand-orange"
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        ) : (
                                            <div className="py-6 border-b border-white/5">
                                                <span className={`font-oswald text-xs font-black tracking-[0.3em] uppercase mb-6 block text-brand-orange`}>
                                                    {item.label}
                                                </span>
                                                <div className="flex flex-col space-y-4 pl-4">
                                                    {item.subItems?.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            onClick={onClose}
                                                            className={`font-oswald text-2xl font-black uppercase tracking-tight ${textColor} hover:text-brand-orange transition-colors`}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </nav>

                        {/* Footer Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="px-10 py-12 space-y-8"
                        >
                            <button
                                onClick={onClose}
                                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-6 rounded-sm font-oswald uppercase tracking-[0.2em] text-sm font-black transition-all duration-300 shadow-[0_10px_40px_rgba(255,69,0,0.3)]"
                            >
                                Access Account
                            </button>
                            <div className="flex justify-center gap-12">
                                {['IG', 'TW', 'FB'].map(social => (
                                    <span key={social} className={`text-xs font-black font-oswald uppercase tracking-widest ${subTextColor} hover:text-brand-orange cursor-pointer transition-colors`}>
                                        {social}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileDrawer;
