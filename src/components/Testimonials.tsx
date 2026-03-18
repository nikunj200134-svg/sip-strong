'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const professionalEndorsements = [
    {
        name: "Dr. Marcus Chen",
        role: "Sports Nutritionist & Coach",
        quote: "The nutrient bioavailability in SipStrong is what sets it apart. It handles post-training catabolism faster than any tub-based protein I've tested.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b1f8?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Coach Sarah J.",
        role: "Olympic Lifting Trainer",
        quote: "I recommend SipStrong to all my athletes because of the pure isolate quality and the zero-friction portability. It removes the 'I forgot my shaker' excuse.",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop"
    }
];

const customerReviews = [
    {
        name: "Alex M.",
        category: "Taste",
        quote: "The first protein that actually tastes like a treat, not chalk. Double Chocolate is a game changer.",
        stars: 5
    },
    {
        name: "Jason V.",
        category: "Convenience",
        quote: "No shaker? No problem. It's in my gym bag and ready to go. Saves me 15 minutes every morning.",
        stars: 5
    },
    {
        name: "Elena R.",
        category: "Performance",
        quote: "Consistent energy without the bloating I usually get from whey. My recovery times have definitely dropped.",
        stars: 5
    },
    {
        name: "Mike D.",
        category: "Portability",
        quote: "Keep a few pouches in my laptop bag. Perfect for hitting protein goals between meetings.",
        stars: 5
    }
];

const ugcImages = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop"
];

const trustBadges = [
    { label: "Lab Tested", desc: "Verified Purity" },
    { label: "High Protein", desc: "25g Whey Isolate" },
    { label: "Athlete Approved", desc: "Engineered for Elite" },
    { label: "India Made", desc: "Premium Engineering" }
];

const Testimonials = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. Trust Header & Rating */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-20"
                >
                    <div className="flex justify-center items-center gap-1 text-brand-orange mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <svg key={s} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <h2 className="font-oswald text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
                        PROVEN BY <span className="text-brand-orange">24,000+</span> ATHLETES
                    </h2>
                    <p className="font-sans text-lg text-white/50 max-w-2xl mx-auto">
                        4.8/5 average rating among pro cricketers, MMA fighters, and endurance runners.
                    </p>
                </motion.div>

                {/* 2. Professional Endorsements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    {professionalEndorsements.map((pro, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white/5 p-8 rounded-sm border border-white/10 flex flex-col md:flex-row gap-8 items-center"
                        >
                            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                                <Image
                                    src={pro.image}
                                    alt={pro.name}
                                    fill
                                    className="object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div>
                                <p className="font-sans text-white/80 italic text-lg mb-4">"{pro.quote}"</p>
                                <h4 className="font-oswald text-xl font-bold text-white uppercase">{pro.name}</h4>
                                <p className="font-sans text-xs text-brand-orange uppercase tracking-widest font-bold">{pro.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Performance Testimonials Ticker */}
                <div className="relative mb-24 overflow-hidden">
                    {/* Gradient Masks for Ticker */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex gap-6 py-4"
                    >
                        <motion.div
                            animate={{
                                x: [0, -100 * customerReviews.length],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear"
                                }
                            }}
                            className="flex gap-6 flex-nowrap"
                        >
                            {[...customerReviews, ...customerReviews, ...customerReviews].map((rev, index) => (
                                <div
                                    key={index}
                                    className="bg-[#0D0D0D] p-6 rounded-sm border border-white/5 hover:border-brand-orange/30 transition-all duration-500 group min-w-[320px] max-w-[320px]"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-oswald font-bold text-brand-orange uppercase tracking-[0.2em]">{rev.category}</span>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 rounded-full bg-brand-orange" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="font-sans text-white/70 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"{rev.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-oswald font-bold text-white text-xs">
                                            {rev.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-oswald text-xs font-bold text-white uppercase">{rev.name}</h4>
                                            <span className="text-[8px] text-green-500 uppercase font-black tracking-widest">Verified Athlete</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* 4. UGC Mosaic */}
                <div className="mb-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h3 className="font-oswald text-2xl font-black text-white uppercase tracking-widest">FUELED BY YOU</h3>
                        <p className="text-white/40 text-sm font-sans">Tag @SipStrong to be featured</p>
                    </motion.div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {ugcImages.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 0.98 }}
                                className="aspect-square relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 group"
                            >
                                <Image src={img} alt="User drinking SipStrong" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 5. Trust Badge Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-between gap-8 py-12 border-y border-white/5"
                >
                    {trustBadges.map((badge, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <span className="font-oswald text-lg font-black text-white uppercase tracking-wider">{badge.label}</span>
                            <span className="text-[10px] font-sans text-brand-orange uppercase tracking-[0.3em] font-bold">{badge.desc}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;
