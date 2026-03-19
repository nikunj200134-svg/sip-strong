'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import { shopProducts } from '@/data/products';

const categories = [
    'All Supplements',
    'Whey Protein',
    'Pre-workout',
    'Creatine',
    'Glutamine',
    'Energy Drinks',
    'Hydration',
    'Recovery'
];

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState('All Supplements');
    const [searchQuery, setSearchQuery] = useState('');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const sliderRef = useRef<HTMLDivElement>(null);

    const filteredProducts = useMemo(() => {
        return shopProducts.filter(product => {
            const matchesCategory = selectedCategory === 'All Supplements' || product.category === selectedCategory;
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Check scroll position to show/hide arrows
    const checkScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 200;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">

            {/* Page Header */}
            <div className="py-8 sm:py-12 md:py-16 lg:py-20 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/5 blur-[120px] rounded-full" />
                <ScrollReveal animation="reveal">
                    <h1 className="font-oswald text-3xl sm:text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter text-white font-black mb-4 sm:mb-6">
                        THE <span className="text-brand-orange">ARSENAL</span>
                    </h1>
                    <p className="font-sans text-white/40 tracking-wide text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
                        Precision-engineered supplements for the unrelenting athlete.
                        Every batch verified. Every outcome guaranteed.
                    </p>
                </ScrollReveal>
            </div>

            {/* Filter & Search Controls - Sticky on Scroll */}
            <div className="sticky top-16 sm:top-20 z-40 bg-gradient-to-b from-black/95 via-black/85 to-transparent backdrop-blur-md border-b border-white/10 py-4 sm:py-5 px-4 mb-8 shadow-lg shadow-black/50">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-4 sm:gap-5">

                    {/* Categories Section Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between"
                    >
                        <h3 className="font-oswald text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-brand-orange font-black">
                            Categories
                        </h3>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%', marginLeft: '1rem' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[1px] bg-gradient-to-r from-brand-orange to-transparent"
                        />
                    </motion.div>

                    {/* Category Scroll with Navigation */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Left Arrow */}
                        <motion.button
                            onClick={() => scroll('left')}
                            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${canScrollLeft
                                ? 'bg-white/10 hover:bg-white/20 hover:border-brand-orange text-white/60 hover:text-brand-orange'
                                : 'bg-white/5 border-white/10 text-white/20 cursor-not-allowed'
                                }`}
                            disabled={!canScrollLeft}
                            whileHover={canScrollLeft ? { scale: 1.05 } : {}}
                            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        {/* Categories Scroll Container */}
                        <div
                            ref={sliderRef}
                            onScroll={checkScroll}
                            className="flex items-center gap-2 sm:gap-3 overflow-x-auto flex-1 scrollbar-hide mask-fade-horizontal pb-2"
                            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
                        >
                            {categories.map((cat, idx) => (
                                <motion.button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full font-oswald text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider transition-all whitespace-normal flex items-center justify-center border text-center p-1.5 sm:p-2 leading-tight relative group ${selectedCategory === cat
                                        ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/50'
                                        : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white hover:bg-white/10'
                                        }`}
                                    title={cat}
                                >
                                    {cat}
                                    {selectedCategory === cat && (
                                        <motion.div
                                            layoutId="activePulse"
                                            className="absolute inset-0 rounded-full border-2 border-white/20"
                                            animate={{ scale: [1, 1.15] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <motion.button
                            onClick={() => scroll('right')}
                            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${canScrollRight
                                ? 'bg-white/10 hover:bg-white/20 hover:border-brand-orange text-white/60 hover:text-brand-orange'
                                : 'bg-white/5 border-white/10 text-white/20 cursor-not-allowed'
                                }`}
                            disabled={!canScrollRight}
                            whileHover={canScrollRight ? { scale: 1.05 } : {}}
                            whileTap={canScrollRight ? { scale: 0.95 } : {}}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Selected Category Display */}
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-8 sm:h-10 flex items-center"
                    >
                        <span className="font-oswald text-sm sm:text-base md:text-lg uppercase font-black text-white tracking-tight">
                            {selectedCategory}
                        </span>
                        <motion.div
                            layoutId="activeIndicator"
                            className="ml-3 h-1 w-12 sm:w-16 bg-gradient-to-r from-brand-orange to-transparent rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '3rem' }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-full group"
                    >
                        <input
                            type="text"
                            placeholder="Search supplements..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 sm:py-3 px-10 sm:px-12 font-sans text-white text-sm focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all placeholder:text-white/20"
                        />
                        <motion.svg
                            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-orange transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: 0 }}
                            whileFocus={{ rotate: 15 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </motion.svg>
                    </motion.div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 scroll-mt-[150px]">
                <AnimatePresence mode="wait">
                    {filteredProducts.length > 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 gap-y-8 sm:gap-y-12"
                        >
                            {filteredProducts.map((product, idx) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    layout
                                >
                                    <ProductCard {...product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-32 text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                                <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-oswald text-2xl font-black text-white uppercase mb-2">No results found</h3>
                            <p className="text-white/40 font-sans">Try adjusting your filters or search query.</p>
                            <button
                                onClick={() => { setSelectedCategory('All Supplements'); setSearchQuery(''); }}
                                className="mt-8 text-brand-orange font-oswald text-xs font-black uppercase tracking-widest hover:underline"
                            >
                                Clear All Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Support Section */}
            <div className="max-w-4xl mx-auto px-4 mt-32 text-center">
                <ScrollReveal animation="fade">
                    <div className="p-12 bg-white/5 border border-white/10 rounded-sm">
                        <h3 className="font-oswald text-2xl font-black text-white uppercase mb-4">NOT SURE WHAT YOU NEED?</h3>
                        <p className="text-white/50 mb-8 max-w-md mx-auto">
                            Our fitness consultants are ready to help you build the perfect supplement stack for your specific goals.
                        </p>
                        <button className="bg-white text-black font-oswald font-black uppercase text-xs tracking-widest px-10 py-5 hover:bg-brand-orange hover:text-white transition-all">
                            Speak to a Pro
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
