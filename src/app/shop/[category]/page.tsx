'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { shopProducts, Product } from '@/data/products';
import CompareModal from '@/components/CompareModal';

const CategoryPage = () => {
    const params = useParams();
    const categorySlug = params.category as string;

    // Decode slug to match category names
    const categoryName = categorySlug
        ? categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : '';

    const [sortBy, setSortBy] = useState('best-selling');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
    const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
    const [proteinFilter, setProteinFilter] = useState<number>(0);
    const [showFilters, setShowFilters] = useState(false);
    const [compareItems, setCompareItems] = useState<Product[]>([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    const flavors = Array.from(new Set(shopProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase()).map(p => p.flavor)));

    const filteredProducts = useMemo(() => {
        let products = shopProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

        // Price Filter
        products = products.filter(p => p.priceValue >= priceRange[0] && p.priceValue <= priceRange[1]);

        // Flavor Filter
        if (selectedFlavors.length > 0) {
            products = products.filter(p => selectedFlavors.includes(p.flavor));
        }

        // Protein Filter
        products = products.filter(p => p.proteinValue >= proteinFilter);

        // Sorting
        if (sortBy === 'price-low') products.sort((a, b) => a.priceValue - b.priceValue);
        if (sortBy === 'price-high') products.sort((a, b) => b.priceValue - a.priceValue);
        if (sortBy === 'newest') products.sort((a, b) => (a.isNew ? -1 : 1));
        if (sortBy === 'best-selling') products.sort((a, b) => (a.isBestSeller ? -1 : 1));

        return products;
    }, [categoryName, priceRange, selectedFlavors, proteinFilter, sortBy]);

    const handleCompare = (product: Product) => {
        if (compareItems.find(p => p.id === product.id)) {
            setCompareItems(prev => prev.filter(p => p.id !== product.id));
        } else if (compareItems.length < 3) {
            setCompareItems(prev => [...prev, product]);
        }
    };

    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">

            {/* Category Hero Banner */}
            <div className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2000&auto=format&fit=crop"
                        alt={categoryName}
                        className="w-full h-full object-cover grayscale opacity-40 scale-105"
                    />
                </div>

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                    <ScrollReveal animation="reveal">
                        <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Elite Series</span>
                        <h1 className="font-oswald text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            {categoryName}
                        </h1>
                        <p className="font-sans text-white/40 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                            Engineered for high-performing athletes. Our {categoryName.toLowerCase()} formulations
                            are pure, potent, and proven to deliver physiological results.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-white font-oswald font-black text-3xl">2000+</span>
                                <span className="text-white/20 text-[10px] font-oswald font-black uppercase tracking-widest">Athletes Fueled</span>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-white font-oswald font-black text-3xl">4.9/5</span>
                                <span className="text-white/20 text-[10px] font-oswald font-black uppercase tracking-widest">Average Rating</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Sticky Controls Bar */}
            <div className="sticky top-20 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-4">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-4 px-8 py-3 rounded-sm font-oswald text-[10px] font-black uppercase tracking-widest transition-all border ${showFilters ? 'bg-brand-orange border-brand-orange text-white' : 'bg-white/5 border-white/10 text-white/40 hover:text-white'}`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        Filters
                    </button>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-3">
                            <span className="text-white/20 text-[10px] font-oswald font-black uppercase tracking-widest">Sort By</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent text-white font-oswald text-[10px] font-black uppercase tracking-widest outline-none border-b border-white/10 pb-1 cursor-pointer focus:border-brand-orange transition-colors"
                            >
                                <option value="best-selling" className="bg-neutral-900">Best Selling</option>
                                <option value="newest" className="bg-neutral-900">Newest First</option>
                                <option value="price-low" className="bg-neutral-900">Price: Low to High</option>
                                <option value="price-high" className="bg-neutral-900">Price: High to Low</option>
                            </select>
                        </div>
                        <span className="text-white font-oswald text-[10px] font-black uppercase tracking-widest px-4 border-l border-white/10">
                            {filteredProducts.length} Results
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex gap-12 relative">

                {/* Desktop Filters Sidebar */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.aside
                            initial={{ opacity: 0, x: -20, width: 0 }}
                            animate={{ opacity: 1, x: 0, width: 280 }}
                            exit={{ opacity: 0, x: -20, width: 0 }}
                            className="hidden lg:block space-y-12 overflow-hidden sticky top-48 h-fit"
                        >
                            {/* Price Filter */}
                            <div>
                                <h4 className="text-white font-oswald text-xs font-black uppercase tracking-[0.2em] mb-6">Price Range</h4>
                                <div className="space-y-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                        className="w-full accent-brand-orange h-1 bg-white/10 rounded-full appearance-none outline-none"
                                    />
                                    <div className="flex justify-between text-[10px] font-oswald font-black text-white/40 uppercase">
                                        <span>£0</span>
                                        <span className="text-brand-orange">Up to £{priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Flavor Filter */}
                            <div>
                                <h4 className="text-white font-oswald text-xs font-black uppercase tracking-[0.2em] mb-6">Flavor</h4>
                                <div className="flex flex-col gap-3">
                                    {flavors.map(f => (
                                        <label key={f} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedFlavors.includes(f)}
                                                onChange={() => {
                                                    setSelectedFlavors(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
                                                }}
                                                className="hidden"
                                            />
                                            <div className={`w-4 h-4 rounded-sm border transition-all ${selectedFlavors.includes(f) ? 'bg-brand-orange border-brand-orange' : 'border-white/20 group-hover:border-white/40'}`} />
                                            <span className={`text-[10px] font-oswald font-black uppercase tracking-widest transition-colors ${selectedFlavors.includes(f) ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>{f}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Protein Filter */}
                            <div>
                                <h4 className="text-white font-oswald text-xs font-black uppercase tracking-[0.2em] mb-6">Protein Content</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[0, 10, 20, 25].map(p => (
                                        <button
                                            key={p}
                                            onClick={() => setProteinFilter(p)}
                                            className={`px-4 py-2 rounded-sm font-oswald text-[10px] font-black uppercase transition-all border ${proteinFilter === p ? 'bg-brand-orange border-brand-orange text-white' : 'border-white/10 text-white/40 hover:text-white'}`}
                                        >
                                            {p === 0 ? 'Any' : `${p}g+`}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="relative group">
                                <ProductCard {...product} />
                                <button
                                    onClick={() => handleCompare(product)}
                                    className={`absolute top-4 right-4 z-40 w-10 h-10 rounded-full flex items-center justify-center border transition-all ${compareItems.find(p => p.id === product.id) ? 'bg-brand-orange border-brand-orange text-white' : 'bg-black/60 border-white/20 text-white/40 opacity-0 group-hover:opacity-100 hover:border-white'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-40 border border-white/5 bg-white/[0.02] rounded-sm">
                            <h3 className="font-oswald text-4xl font-black text-white uppercase mb-4 tracking-tighter">Mission Critical: No Formulations Found</h3>
                            <p className="text-white/20 font-sans mb-10 max-w-sm mx-auto">Our current intel shows no products matching your specific elite criteria. Try broadening your parameters.</p>
                            <button
                                onClick={() => { setSelectedFlavors([]); setPriceRange([0, 100]); setProteinFilter(0); }}
                                className="bg-brand-orange text-white font-oswald font-black uppercase text-xs tracking-[0.2em] px-12 py-5 hover:bg-brand-orange-hover transition-all"
                            >
                                Reset Intel
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Compare Bar */}
            <AnimatePresence>
                {compareItems.length > 0 && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 right-0 z-[60] bg-black/95 backdrop-blur-2xl border-t border-brand-orange/30 py-6 px-4"
                    >
                        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-8">
                                <div className="flex flex-col">
                                    <span className="text-brand-orange font-oswald text-[10px] font-black uppercase tracking-widest">Compare Arsenal</span>
                                    <span className="text-white font-oswald text-lg font-black uppercase">{compareItems.length} Formulations Selected</span>
                                </div>
                                <div className="flex gap-3">
                                    {compareItems.map(item => (
                                        <div key={item.id} className="w-12 h-12 relative bg-white/5 border border-white/10 rounded-sm overflow-hidden group">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => handleCompare(item)}
                                                className="absolute inset-0 bg-brand-orange/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                                            >
                                                <span className="text-white text-lg">&times;</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 w-full md:w-auto">
                                <button
                                    onClick={() => setCompareItems([])}
                                    className="px-8 py-4 rounded-sm font-oswald text-xs font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                                >
                                    Clear
                                </button>
                                <button
                                    onClick={() => setIsCompareModalOpen(true)}
                                    className="flex-1 md:flex-none bg-white text-black font-oswald text-xs font-black uppercase tracking-widest px-12 py-4 hover:bg-brand-orange hover:text-white transition-all"
                                >
                                    Compare Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CompareModal
                isOpen={isCompareModalOpen}
                onClose={() => setIsCompareModalOpen(false)}
                products={compareItems}
            />

        </div>
    );
};

export default CategoryPage;
