'use client';

import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    {
        title: 'Fuel Anywhere',
        description: 'Elite nutrition in your pocket. Tear, sip, and dominate your session without messy shakers or bulky tubs.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        )
    },
    {
        title: 'Rapid Recovery',
        description: 'Engineered for near-instant nutrient delivery. Shuttles amino acids to your muscles exactly when they need them.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="m9.01 10.5-1.5 1.5" /><path d="m15 15.5 1.5 1.5" /><path d="m10.5 9-1.5-1.5" /><path d="m14.5 14.5-5-5" />
            </svg>
        )
    },
    {
        title: 'Zero Friction',
        description: 'No cleanup, no clumps. Pure, ultra-filtered whey isolate ready to consume in seconds. Optimize your time.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /><path d="M18 10V6" /><path d="M14 6h4" />
            </svg>
        )
    },
    {
        title: 'Raw Power',
        description: '25g of high-performance protein. Optimized for maximal hypertrophy and strength gains. Zero fillers.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 2h10" /><path d="M5 2c0 1 1 3 1 8l1.5 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5L18 10c0-5 1-7 1-8" /><path d="M6 10h12" />
            </svg>
        )
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const revealItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
};

const BenefitsSection = () => {
    return (
        <section className="py-24 px-4 bg-[#0B0B0B] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={revealItem}
                            className="group flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
                        >
                            {/* Icon Container with Hover Animation */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5, color: '#FF4500' }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                className="w-16 h-16 rounded-sm bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors duration-300"
                            >
                                {benefit.icon}
                            </motion.div>

                            <div className="space-y-3">
                                <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-tight">
                                    {benefit.title}
                                </h3>
                                <p className="font-sans text-white/50 leading-relaxed text-sm md:text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;
