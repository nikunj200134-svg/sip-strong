'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const NutritionScience = () => {
    return (
        <section className="relative py-32 bg-[#0B0B0B] overflow-hidden border-t border-white/10">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h2 variants={fadeInUp} className="font-oswald text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
                        BACKED BY <span className="text-brand-orange">SCIENCE</span>.
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="font-sans text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                        We didn&apos;t just throw protein in a pouch. We engineered a precise formula utilizing high-bioavailability whey isolate, balanced electrolytes, and natural flavors.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {/* Stat 1 */}
                    <motion.div variants={fadeInUp} className="bg-black/40 backdrop-blur-md p-8 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors">
                        <div className="text-5xl font-oswald font-black text-brand-orange mb-4">25g</div>
                        <h3 className="font-oswald text-xl text-white uppercase tracking-wide mb-2">Premium Protein</h3>
                        <p className="font-sans text-white/60 text-sm">Ultra-filtered isolate for rapid absorption and maximum muscle protein synthesis.</p>
                    </motion.div>
                    {/* Stat 2 */}
                    <motion.div variants={fadeInUp} className="bg-black/40 backdrop-blur-md p-8 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors">
                        <div className="text-5xl font-oswald font-black text-brand-orange mb-4">0g</div>
                        <h3 className="font-oswald text-xl text-white uppercase tracking-wide mb-2">Added Sugar</h3>
                        <p className="font-sans text-white/60 text-sm">Naturally sweetened with stevia and monk fruit. No insulin spikes, no crashes.</p>
                    </motion.div>
                    {/* Stat 3 */}
                    <motion.div variants={fadeInUp} className="bg-black/40 backdrop-blur-md p-8 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors">
                        <div className="text-5xl font-oswald font-black text-brand-orange mb-4">500mg</div>
                        <h3 className="font-oswald text-xl text-white uppercase tracking-wide mb-2">Electrolytes</h3>
                        <p className="font-sans text-white/60 text-sm">A balanced blend of sodium, potassium, and magnesium for optimal hydration.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default NutritionScience;
