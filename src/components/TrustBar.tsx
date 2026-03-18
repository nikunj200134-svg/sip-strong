'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#0B0B0B] border-y border-white/5 py-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    {/* Trust Item 1: Social Proof */}
                    <div className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full border border-black bg-brand-orange/20 overflow-hidden flex items-center justify-center text-[8px] font-bold text-brand-orange">
                                    {i === 3 ? "24k+" : ""}
                                </div>
                            ))}
                        </div>
                        <span className="font-oswald uppercase tracking-wider text-xs sm:text-sm font-semibold">10,000+ ELITE ATHLETES FUELED</span>
                    </div>

                    {/* Trust Item 2 */}
                    <div className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange group-hover:rotate-12 transition-transform"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                        <span className="font-oswald uppercase tracking-wider text-xs sm:text-sm font-semibold">Informed Sport Certified</span>
                    </div>

                    {/* Trust Item 3 */}
                    <div className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange group-hover:scale-110 transition-transform"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                        <span className="font-oswald uppercase tracking-wider text-xs sm:text-sm font-semibold">Engineered in India</span>
                    </div>

                    {/* Trust Item 4 */}
                    <div className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange group-hover:translate-x-1 transition-transform"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
                        <span className="font-oswald uppercase tracking-wider text-xs sm:text-sm font-semibold">Express Delivery</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default TrustBar;
