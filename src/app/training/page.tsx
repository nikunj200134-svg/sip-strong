'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function TrainingPage() {
    return (
        <div className="bg-[#000000] min-h-screen pt-20 pb-32 border-t border-brand-orange/10">
            {/* Header */}
            <div className="py-16 text-center border-b border-white/10 bg-[#0B0B0B]">
                <h1 className="font-oswald text-5xl md:text-6xl uppercase tracking-widest text-white font-bold mb-4">
                    The Training Portal
                </h1>
                <p className="font-sans text-white/60 tracking-wide text-sm max-w-xl mx-auto px-4">
                    Exclusive access to our elite coaching programs, daily workouts, and cinematic movement guides.
                </p>
            </div>

            {/* Membership Tiers (Glassmorphism) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
                >
                    {/* Tier 1 */}
                    <motion.div variants={fadeInUp} className="bg-[#0B0B0B]/40 backdrop-blur-xl p-10 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors flex flex-col items-center text-center shadow-2xl">
                        <h2 className="font-oswald text-3xl text-white uppercase tracking-wider mb-2">SipStrong Gain</h2>
                        <div className="text-brand-orange font-bold text-2xl mb-6">£29.99<span className="text-white/50 text-sm font-sans font-normal">/mo</span></div>
                        <ul className="text-white/70 font-sans space-y-4 mb-8 flex-1 text-sm">
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 12-Week Hypertrophy Blocks</li>
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Video Exercise Library</li>
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Macronutrient Calculator</li>
                        </ul>
                        <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-white text-black font-oswald uppercase font-bold py-3 rounded-sm hover:bg-gray-200 transition-colors">Start Trial</motion.button>
                    </motion.div>

                    {/* Tier 2 (Featured) */}
                    <motion.div variants={fadeInUp} className="bg-brand-orange/10 backdrop-blur-xl p-10 border-2 border-brand-orange/50 rounded-sm relative flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,69,0,0.15)] transform md:-translate-y-4">
                        <div className="absolute -top-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Most Popular</div>
                        <h2 className="font-oswald text-3xl text-white uppercase tracking-wider mb-2 mt-4">SipStrong Train</h2>
                        <div className="text-brand-orange font-bold text-2xl mb-6">£49.99<span className="text-white/50 text-sm font-sans font-normal">/mo</span></div>
                        <ul className="text-white/70 font-sans space-y-4 mb-8 flex-1 text-sm">
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Hybrid Conditioning Protocols</li>
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Endurance & VO2 Prescriptions</li>
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Weekly Coach Q&A</li>
                        </ul>
                        <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-brand-orange text-white font-oswald uppercase font-bold py-3 rounded-sm hover:bg-brand-orange-hover transition-colors">Join Now</motion.button>
                    </motion.div>

                    {/* Tier 3 */}
                    <motion.div variants={fadeInUp} className="bg-[#0B0B0B]/40 backdrop-blur-xl p-10 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors flex flex-col items-center text-center shadow-2xl">
                        <h2 className="font-oswald text-3xl text-white uppercase tracking-wider mb-2">SipStrong Elite</h2>
                        <div className="text-brand-orange font-bold text-2xl mb-6">£149.99<span className="text-white/50 text-sm font-sans font-normal">/mo</span></div>
                        <ul className="text-white/70 font-sans space-y-4 mb-8 flex-1 text-sm">
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 1-on-1 Nutrition Coaching</li>
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Customized Programming</li>
                            <li className="flex items-center gap-2 justify-center"><svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Bloodwork Analysis</li>
                        </ul>
                        <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-white text-black font-oswald uppercase font-bold py-3 rounded-sm hover:bg-gray-200 transition-colors">Apply Now</motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Daily Workouts Video Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="font-oswald text-4xl uppercase tracking-widest text-white font-bold mb-2">Daily Workouts</h2>
                        <p className="text-white/50 font-sans text-sm tracking-wide">Cinematic guides dropping every 24 hours.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Video Thumbnail 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="group relative aspect-video bg-[#0B0B0B] border border-white/10 rounded-sm flex items-center justify-center overflow-hidden cursor-pointer"
                    >
                        <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1600&auto=format&fit=crop" alt="Workout Video" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />

                        {/* Play Icon */}
                        <div className="relative z-20 w-16 h-16 rounded-full bg-brand-orange/90 flex items-center justify-center shadow-[0_0_20px_rgba(255,69,0,0.5)] transform group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                        </div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="font-oswald text-2xl text-white uppercase tracking-wider mb-1">Lower Body Power</h3>
                            <p className="text-brand-orange text-sm font-bold">45 MINS • Coach Alex</p>
                        </div>
                    </motion.div>

                    {/* Video Thumbnail 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative aspect-video bg-[#0B0B0B] border border-white/10 rounded-sm flex items-center justify-center overflow-hidden cursor-pointer"
                    >
                        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop" alt="Workout Video" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />

                        {/* Play Icon */}
                        <div className="relative z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand-orange/90 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(255,69,0,0.5)] transform group-hover:scale-110 transition-all">
                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                        </div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="font-oswald text-2xl text-white uppercase tracking-wider mb-1">Metabolic Conditioning</h3>
                            <p className="text-white/70 text-sm font-bold">30 MINS • Coach Sarah</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
