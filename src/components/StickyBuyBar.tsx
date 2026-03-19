'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface StickyBuyBarProps {
    price: string;
    productName: string;
    image: string;
}

const StickyBuyBar: React.FC<StickyBuyBarProps> = ({ price, productName, image }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (window.scrollY / scrollTotal) * 100;
            const footer = document.getElementById('footer');
            const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
            const windowHeight = window.innerHeight;

            // Trigger after 40% scroll and hide as you approach the footer
            // We hide it slightly before the footer starts to avoid overlap
            const shouldBeVisible = scrollPercent > 40 && footerTop > windowHeight;
            setIsVisible(shouldBeVisible);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHapticFeedback = () => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(50);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-xl border-t border-white/10 p-3 sm:p-4 md:p-6 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
                >
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                                <Image
                                    src={image}
                                    alt={productName}
                                    fill
                                    className="rounded-sm object-cover border border-white/10 shadow-lg"
                                />
                            </div>
                            <div className="flex-1 sm:flex-none min-w-0">
                                <h4 className="text-white text-xs sm:text-base md:text-xl font-oswald font-black uppercase tracking-tight leading-none truncate max-w-[130px] sm:max-w-none">
                                    {productName}
                                </h4>
                                <div className="flex items-center gap-2 mt-1 text-[9px] sm:text-[11px] md:text-xs">
                                    <span className="font-sans font-bold text-brand-orange uppercase tracking-widest whitespace-nowrap">25g Protein</span>
                                    <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:inline-block" />
                                    <span className="font-sans font-bold text-white/40 uppercase tracking-widest">{price}</span>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                handleHapticFeedback();
                                window.dispatchEvent(new CustomEvent('add-to-cart', {
                                    detail: { id: 999123, title: productName, price, image }
                                }));
                            }}
                            className="bg-brand-orange hover:bg-brand-orange-hover text-white font-oswald uppercase text-[10px] sm:text-xs md:text-sm px-4 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-5 rounded-sm font-black tracking-[0.1em] shadow-[0_0_25px_rgba(255,69,0,0.4)] transition-all flex items-center gap-2 group w-full sm:w-auto justify-center min-h-[44px]"
                        >
                            <span>Buy Now</span>
                            <span className="hidden md:inline-block opacity-40">&mdash;</span>
                            <span className="group-hover:translate-x-1 transition-transform">{price}</span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyBuyBar;
