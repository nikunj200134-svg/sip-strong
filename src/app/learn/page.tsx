'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const articles = [
    {
        id: 1,
        category: 'Supplement Guides',
        title: 'When is the best time to take Whey Isolate?',
        excerpt: 'Maximize your recovery window by understanding the science of protein timing.',
        image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1000&auto=format&fit=crop',
        readTime: '5 min read'
    },
    {
        id: 2,
        category: 'Nutrition Education',
        title: 'Creatine Monohydrate: Myths vs. Reality',
        excerpt: 'The most researched supplement in history, explained for the elite athlete.',
        image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1000&auto=format&fit=crop',
        readTime: '8 min read'
    },
    {
        id: 3,
        category: 'Fitness Blog',
        title: 'Hydration Strategies for Endurance Runners',
        excerpt: 'Beyond water: why electrolytes are the backbone of long-distance performance.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
        readTime: '6 min read'
    },
    {
        id: 4,
        category: 'Supplement Guides',
        title: 'The Pre-Workout Checklist',
        excerpt: 'How to avoid the crash and get the most out of your training session.',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1000&auto=format&fit=crop',
        readTime: '4 min read'
    }
];

const LearnPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Supplement Guides', 'Nutrition Education', 'Fitness Blog'];

    const filteredArticles = articles.filter(a => selectedCategory === 'All' || a.category === selectedCategory);

    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">

            {/* Header */}
            <div className="py-24 px-4 text-center relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollReveal animation="reveal">
                        <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Lab</span>
                        <h1 className="font-oswald text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                            KNOWLEDGE IS <span className="text-brand-orange">POWER</span>
                        </h1>
                        <p className="font-sans text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Science-backed insights to help you optimize your training,
                            nutrition, and recovery. Engineered for truth.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Filter Controls */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-8 py-3 rounded-sm font-oswald text-xs font-black uppercase tracking-widest transition-all border ${selectedCategory === cat
                                    ? 'bg-brand-orange border-brand-orange text-white'
                                    : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Article Grid */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredArticles.map((article, i) => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/9] relative bg-white/5 border border-white/10 rounded-sm overflow-hidden mb-6">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white text-black text-[10px] font-oswald font-black px-4 py-1 tracking-widest uppercase">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-brand-orange text-[10px] font-oswald font-black uppercase tracking-[0.2em]">Verified Science</span>
                                    <div className="w-1 h-1 bg-white/20 rounded-full" />
                                    <span className="text-white/20 text-[10px] font-oswald font-black uppercase tracking-[0.2em]">{article.readTime}</span>
                                </div>
                                <h3 className="font-oswald text-3xl font-black text-white uppercase tracking-tight leading-none mb-4 group-hover:text-brand-orange transition-colors">
                                    {article.title}
                                </h3>
                                <p className="font-sans text-white/40 text-base leading-relaxed line-clamp-2">
                                    {article.excerpt}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Lead Gen Box */}
            <div className="max-w-4xl mx-auto px-4 mt-32">
                <div className="p-16 bg-brand-orange/10 border border-brand-orange/20 rounded-sm text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ScrollReveal animation="scale">
                        <h4 className="font-oswald text-3xl font-black text-white uppercase mb-4 tracking-tighter">GET THE ELITE PROTOCOL</h4>
                        <p className="text-white/60 font-sans mb-8">Join 50,000+ athletes receiving weekly scientific nutrition breakdowns.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-black/50 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-all"
                            />
                            <button className="bg-brand-orange text-white font-oswald font-black uppercase text-xs tracking-widest px-10 py-4 hover:bg-brand-orange-hover transition-all">
                                Subscribe
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

        </div>
    );
};

export default LearnPage;
