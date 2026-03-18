'use client';

import React, { useState, useMemo } from 'react';
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

    const filteredProducts = useMemo(() => {
        return shopProducts.filter(product => {
            const matchesCategory = selectedCategory === 'All Supplements' || product.category === selectedCategory;
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">

            {/* Page Header */}
            <div className="py-20 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/5 blur-[120px] rounded-full" />
                <ScrollReveal animation="reveal">
                    <h1 className="font-oswald text-6xl md:text-8xl uppercase tracking-tighter text-white font-black mb-6">
                        THE <span className="text-brand-orange">ARSENAL</span>
                    </h1>
                    <p className="font-sans text-white/40 tracking-wide text-lg max-w-2xl mx-auto px-4 leading-relaxed">
                        Precision-engineered supplements for the unrelenting athlete.
                        Every batch verified. Every outcome guaranteed.
                    </p>
                </ScrollReveal>
            </div>

            {/* Filter & Search Controls */}
            <div className="sticky top-20 z-30 bg-black/80 backdrop-blur-xl border-y border-white/10 py-6 px-4 mb-12">
                <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">

                    {/* Category Scroll */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide w-full lg:w-auto mask-fade-right">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full font-oswald text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border ${selectedCategory === cat
                                    ? 'bg-brand-orange border-brand-orange text-white'
                                    : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full lg:w-96 group">
                        <input
                            type="text"
                            placeholder="Search supplements..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-12 font-sans text-white text-sm focus:outline-none focus:border-brand-orange transition-all placeholder:text-white/20"
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="popLayout">
                    {filteredProducts.length > 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
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
