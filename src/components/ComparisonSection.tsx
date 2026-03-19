'use client';

import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
    {
        category: "Portability",
        sipstrong: "Pocket-sized Pouch",
        traditional: "Bulky Tub + Shaker Bottle",
        winner: "sipstrong"
    },
    {
        category: "Preparation",
        sipstrong: "0 Seconds (Rip & Sip)",
        traditional: "2-5 Minutes (Scoop & Mix)",
        winner: "sipstrong"
    },
    {
        category: "Protein Quality",
        sipstrong: "25g Pure Whey Isolate",
        traditional: "Standard Whey Blend",
        winner: "sipstrong"
    },
    {
        category: "Convenience",
        sipstrong: "Anywhere, Anytime",
        traditional: "Kitchen/Gym Limited",
        winner: "sipstrong"
    },
    {
        category: "Cleanup",
        sipstrong: "Zero Cleanup Required",
        traditional: "Messy Spills & Dirty Shakers",
        winner: "sipstrong"
    }
];

const ComparisonSection = () => {
    return (
        <section className="relative py-16 sm:py-24 bg-[#050505] overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.3em] text-xs sm:text-sm block mb-3 sm:mb-4">The Evolution</span>
                    <h2 className="font-oswald text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                        UPGRADE YOUR <span className="text-brand-orange">PROTOCOL</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-sm overflow-x-auto bg-black/50 backdrop-blur-sm">
                    {/* Header Row */}
                    <div className="hidden md:flex bg-white/5 p-4 sm:p-8 border-b border-white/10 items-center justify-center">
                        <span className="font-oswald text-sm sm:text-lg font-bold text-white/40 uppercase tracking-widest">Category</span>
                    </div>
                    <div className="bg-brand-orange/10 p-4 sm:p-8 border-b border-brand-orange/20 items-center justify-center flex flex-col">
                        <span className="font-oswald text-lg sm:text-2xl font-black text-white uppercase tracking-tight">SIPSTRONG</span>
                        <span className="text-[8px] sm:text-[10px] font-sans font-bold text-brand-orange uppercase tracking-[0.2em] mt-1 sm:mt-2">The New Standard</span>
                    </div>
                    <div className="bg-white/5 p-4 sm:p-8 border-b border-white/10 items-center justify-center flex flex-col">
                        <span className="font-oswald text-base sm:text-xl font-bold text-white/40 uppercase tracking-tight">TRADITIONAL</span>
                        <span className="text-[8px] sm:text-[10px] font-sans font-bold text-white/20 uppercase tracking-[0.2em] mt-1 sm:mt-2">Old Method</span>
                    </div>

                    {/* Comparison Rows */}
                    {comparisonData.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Category Label Mobile */}
                            <div className="md:hidden bg-white/5 px-4 sm:px-8 pt-4 sm:pt-8 text-center text-[9px] sm:text-xs font-oswald font-bold text-white/40 uppercase tracking-widest">
                                {item.category}
                            </div>

                            {/* Category Label Desktop */}
                            <div className="hidden md:flex p-4 sm:p-8 items-center justify-center border-b border-white/10">
                                <span className="font-oswald text-xs sm:text-sm font-bold text-white/60 uppercase tracking-wider">{item.category}</span>
                            </div>

                            {/* SipStrong Column */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-3 sm:p-8 flex items-center justify-center border-b border-white/10 relative group"
                            >
                                <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-center gap-2 sm:gap-3">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-sans text-white text-xs sm:text-lg font-medium">{item.sipstrong}</span>
                                </div>
                            </motion.div>

                            {/* Traditional Column */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-3 sm:p-8 flex items-center justify-center border-b border-white/10 opacity-40 grayscale"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-sans text-white/60 text-xs sm:text-base">{item.traditional}</span>
                                </div>
                            </motion.div>
                        </React.Fragment>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <p className="font-sans text-white/50 text-xs sm:text-base italic mb-6 sm:mb-8 max-w-2xl mx-auto px-3">
                        &quot;Stop living in the age of shaker bottles. Reclaim your time and hit your protein goals with 100% efficiency.&quot;
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-orange text-white font-oswald font-black uppercase tracking-widest px-6 sm:px-12 py-3 sm:py-5 rounded-sm shadow-[0_10px_30px_rgba(255,69,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,69,0,0.5)] transition-all text-xs sm:text-base min-h-[44px]"
                    >
                        Switch to SipStrong
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default ComparisonSection;
