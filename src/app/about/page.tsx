'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const AboutPage = () => {
    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">

            {/* Hero / Vision Section */}
            <div className="relative py-32 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <ScrollReveal animation="reveal">
                        <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Manifesto</span>
                        <h1 className="font-oswald text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                            BORN FROM <br /> <span className="text-brand-orange">FRICTION</span>
                        </h1>
                        <p className="font-sans text-white/40 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                            SipStrong wasn&apos;t created in a boardroom. It was created in gym lockers,
                            airport terminals, and office cubicles where traditional shaker bottles failed.
                        </p>
                    </ScrollReveal>
                </div>
                {/* Background decorative text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-[30vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
                    ELITE PERFORMANCE
                </div>
            </div>

            {/* The Founders Story / Problem Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <ScrollReveal animation="reveal">
                        <div className="aspect-square relative bg-white/5 border border-white/10 rounded-sm overflow-hidden grayscale">
                            <Image
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                                alt="Founder Story"
                                fill
                                className="object-cover opacity-60"
                            />
                        </div>
                    </ScrollReveal>
                    <div>
                        <ScrollReveal animation="reveal" delay={100}>
                            <h2 className="font-oswald text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
                                THE PROBLEM WITH <br /> <span className="text-brand-orange">TRADITION</span>
                            </h2>
                            <div className="space-y-6 text-white/50 font-sans text-lg leading-relaxed">
                                <p>
                                    For too long, athletic nutrition has been tethered to the kitchen.
                                    Bulk tubs, measuring scoops, and foul-smelling shaker bottles became the standard &quot;tax&quot; for recovery.
                                </p>
                                <p>
                                    We saw elite athletes skipping critical post-workout windows because they couldn&apos;t carry a mini-chemistry set in their gym bags.
                                    We saw professionals compromise their goals during busy 12-hour shifts.
                                </p>
                                <p className="text-white font-bold italic border-l-2 border-brand-orange pl-6">
                                    &quot;We knew there had to be a way to deliver zero-compromise nutrition with zero-friction portability.&quot;
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Mission Statement Banner */}
            <div className="bg-brand-orange py-24 my-24 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal animation="fade">
                        <h3 className="font-oswald text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                            OUR MISSION
                        </h3>
                        <p className="font-oswald text-white/90 text-2xl md:text-4xl uppercase font-bold max-w-4xl mx-auto">
                            To bridge the gap between human potential and elite nutrition,
                            removing every barrier between an athlete and their next goal.
                        </p>
                    </ScrollReveal>
                </div>
                {/* Background animation texture */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            {/* Engineered for Elite Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col items-center text-center">
                    <ScrollReveal animation="reveal">
                        <h2 className="font-oswald text-5xl md:text-7xl font-black text-white uppercase mb-12">
                            PREMIUM <span className="text-brand-orange">ENGINEERING</span>
                        </h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: 'Cold-Filtered', desc: 'Preserving natural peptide structures for maximum bioavailability.' },
                            { title: 'Lab Verified', desc: 'Every batch stringently tested for purity and ban-substance safety.' },
                            { title: 'Elite Sourced', desc: 'Only the highest-grade ingredients from sustainable, proven origins.' }
                        ].map((item, i) => (
                            <ScrollReveal key={i} animation="scale" delay={i * 100}>
                                <div className="p-10 bg-white/5 border border-white/10 rounded-sm">
                                    <h4 className="font-oswald text-2xl font-black text-white uppercase mb-4">{item.title}</h4>
                                    <p className="text-white/40 font-sans">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
