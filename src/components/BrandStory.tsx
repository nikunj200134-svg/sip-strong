/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BrandStory = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                        className="relative group"
                    >
                        <div className="aspect-[4/5] relative rounded-sm overflow-hidden bg-neutral-100">
                            <Image
                                src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop"
                                alt="The evolution of protein"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 bg-black/5" />
                            <div className="absolute top-8 left-8 border-l-2 border-t-2 border-brand-orange w-16 h-16" />
                            <div className="absolute bottom-8 right-8 border-r-2 border-b-2 border-brand-orange w-16 h-16" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/10 -z-10" />
                    </motion.div>

                    {/* Copy Side */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.3em] text-sm block mb-4">Our Origin</span>
                            <h2 className="font-oswald text-4xl md:text-6xl font-black text-black uppercase tracking-tight leading-none mb-8">
                                THE END OF THE <span className="text-brand-orange">SHAKER BOTTLE</span> ERA.
                            </h2>
                            <div className="w-20 h-1 bg-black mb-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="font-oswald text-xl font-bold uppercase text-black tracking-wide">The Problem with Status Quo</h3>
                            <p className="font-sans text-black/70 leading-relaxed text-lg italic">
                                &quot;Traditional protein is stuck in the past. Bulky tubs. Messy powders. The clumpy, stale reality of a shaker bottle you forgot to wash. It&apos;s friction that slows you down.&quot;
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6 border-l-4 border-brand-orange pl-8 bg-neutral-50 py-8 pr-8"
                        >
                            <h3 className="font-oswald text-xl font-bold uppercase text-black tracking-wide">The Idea</h3>
                            <p className="font-sans text-black/70 leading-relaxed text-lg">
                                We imagined a world where protein was as agile as the athletes who need it. No prep. No mess. Just elite-grade nutrition in a pocket-sized pouch, engineered to be consumed whenever, wherever—at peak intensity.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-4 pt-4"
                        >
                            <h3 className="font-oswald text-xl font-bold uppercase text-black tracking-wide">Our Mission</h3>
                            <p className="font-sans text-black/90 font-bold text-xl uppercase tracking-tight">
                                To fuel human potential by removing the barriers between you and your peak performance. One pouch. Zero excuses.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
