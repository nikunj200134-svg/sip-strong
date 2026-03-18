'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import StickyBuyBar from '@/components/StickyBuyBar';
import ComparisonSection from '@/components/ComparisonSection';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState('nutrition');
    const [selectedSize, setSelectedSize] = useState('single');

    // In a real app, you'd fetch this based on the ID
    const product = {
        id: params.id,
        title: 'Premium Whey Isolate Pouch',
        category: 'Whey Protein',
        price: '£55.00',
        rating: 4.8,
        reviewsCount: 1240,
        description: 'Engineered for elite athletes, our 100% Whey Protein Isolate delivers 25g of pure, fast-absorbing protein with zero fillers. Designed for maximum bioavailability and recovery.',
        images: [
            'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1622329606827-0c036d66e76d?q=80&w=1000&auto=format&fit=crop'
        ],
        nutrition: {
            protein: '25g',
            carbs: '1g',
            fat: '0.5g',
            calories: '110',
            bcaa: '5.5g'
        },
        ingredients: 'Cold-Filtered Whey Protein Isolate, Natural Flavors, Sunflower Lecithin, Stevia, Sea Salt.'
    };

    return (
        <div className="bg-[#050505] min-h-screen pt-24 pb-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Breadcrumb */}
                <nav className="flex text-[10px] font-oswald font-black uppercase tracking-widest gap-2 mb-12">
                    <Link href="/shop" className="text-white/20 hover:text-white transition-colors">Shop</Link>
                    <span className="text-white/10">/</span>
                    <Link href={`/shop/${product.category.toLowerCase().replace(' ', '-')}`} className="text-white/20 hover:text-white transition-colors">{product.category}</Link>
                    <span className="text-white/10">/</span>
                    <span className="text-brand-orange">{product.title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Premium Gallery */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-[4/5] relative bg-[#0D0000] border border-white/10 rounded-sm overflow-hidden group cursor-zoom-in"
                        >
                            <Image
                                src={product.images[0]}
                                alt={product.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute top-6 left-6">
                                <span className="bg-brand-orange text-white text-[10px] font-oswald font-black px-4 py-1 tracking-widest uppercase">Elite Quality</span>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-3 gap-4">
                            {product.images.map((img, i) => (
                                <div key={i} className="aspect-square relative bg-white/5 border border-white/10 rounded-sm overflow-hidden cursor-pointer hover:border-brand-orange transition-colors">
                                    <Image src={img} alt={`Angle ${i + 1}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Details & Conversion */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-1 text-brand-orange mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-[10px] font-oswald font-black tracking-widest text-white/40 ml-2 uppercase">
                                    {product.rating} / 5 ({product.reviewsCount} Verified Reviews)
                                </span>
                            </div>

                            <h1 className="font-oswald text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                                {product.title}
                            </h1>

                            <p className="font-sans text-white/50 text-lg leading-relaxed mb-8 max-w-xl">
                                {product.description}
                            </p>

                            <div className="flex items-end gap-4 mb-12">
                                <span className="text-4xl font-oswald font-black text-white tracking-tight">{product.price}</span>
                                <span className="text-sm font-sans text-brand-orange font-bold uppercase tracking-widest mb-2 pb-1 underline decoration-2 underline-offset-4">Free Shipping</span>
                            </div>

                            {/* Options Selector */}
                            <div className="space-y-8 mb-12">
                                <div>
                                    <h4 className="text-[10px] font-oswald font-black text-white/40 uppercase tracking-[0.2em] mb-4">Pack Size</h4>
                                    <div className="flex gap-4">
                                        {[
                                            { id: 'single', label: 'Single Pouch', price: '£55.00' },
                                            { id: 'bundle', label: '3-Pack (Save 15%)', price: '£140.25' }
                                        ].map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => setSelectedSize(option.id)}
                                                className={`flex-1 border p-4 rounded-sm text-center transition-all ${selectedSize === option.id
                                                        ? 'border-brand-orange bg-brand-orange/5'
                                                        : 'border-white/10 bg-white/5 hover:border-white/30'
                                                    }`}
                                            >
                                                <p className="text-xs font-oswald font-black text-white uppercase tracking-wider mb-1">{option.label}</p>
                                                <p className="text-lg font-oswald font-black text-brand-orange">{option.price}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: '#FF5722' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(50);
                                    window.dispatchEvent(new CustomEvent('open-cart'));
                                }}
                                className="w-full bg-brand-orange text-white font-oswald uppercase tracking-widest text-lg font-black py-6 rounded-sm transition-all shadow-[0_20px_40px_rgba(255,69,0,0.3)] flex items-center justify-center gap-4 group"
                            >
                                <span>Add to Cart</span>
                                <span className="opacity-40 group-hover:opacity-100 transition-opacity">&rarr;</span>
                            </motion.button>
                        </motion.div>

                        {/* Product Tabs (Nutrition, Ingredients) */}
                        <div className="mt-16 border-t border-white/10 pt-12">
                            <div className="flex gap-8 border-b border-white/10 mb-8 pb-4">
                                {['nutrition', 'ingredients'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`font-oswald text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-brand-orange' : 'text-white/40 hover:text-white'
                                            }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <motion.div layoutId="tab-underline" className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-brand-orange" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                {activeTab === 'nutrition' ? (
                                    <motion.div
                                        key="nutrition"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                                    >
                                        {Object.entries(product.nutrition).map(([key, val]) => (
                                            <div key={key} className="p-4 bg-white/5 border border-white/10 rounded-sm text-center">
                                                <p className="text-[10px] font-oswald font-black text-white/20 uppercase tracking-widest mb-1">{key}</p>
                                                <p className="text-xl font-oswald font-black text-white uppercase">{val}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="ingredients"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="font-sans text-white/50 text-sm leading-relaxed"
                                    >
                                        {product.ingredients}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Section */}
            <ScrollReveal animation="reveal" delay={100}>
                <ComparisonSection />
            </ScrollReveal>

            {/* Sticky Mobile Buy Bar */}
            <StickyBuyBar
                productName={product.title}
                price={selectedSize === 'single' ? product.price : '£140.25'}
                image={product.images[0]}
            />

            <div id="footer-trigger" className="h-2" />
        </div>
    );
}
