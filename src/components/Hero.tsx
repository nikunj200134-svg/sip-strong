/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

const Hero = () => {
    const router = useRouter();
    const { scrollY } = useScroll();

    // Parallax effects for background
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse movement parallax for pouch - using MotionValues to avoid re-renders
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX - window.innerWidth / 2) / 25;
        const y = (clientY - window.innerHeight / 2) / 25;
        mouseX.set(x);
        mouseY.set(y);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const pouchX = useSpring(mouseX, springConfig);
    const pouchY = useSpring(mouseY, springConfig);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const revealText = {
        hidden: { y: '110%' },
        visible: {
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: 0.4
            }
        }
    };

    const backgroundText = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: {
            opacity: 0.05,
            scale: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeOut" as any }
        }
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-[100svh] w-full bg-black overflow-hidden flex items-center pt-16 sm:pt-20 md:pt-0"
        >
            {/* Background Elements */}
            <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-brand-orange/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
                <motion.div
                    variants={backgroundText}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 flex items-center justify-center -z-10 select-none overflow-hidden"
                >
                    <motion.h1
                        style={{ y: y1 }}
                        className="font-oswald text-[clamp(6rem,18vw,20vw)] font-black text-white whitespace-nowrap opacity-10"
                    >
                        STRENGTH
                    </motion.h1>
                </motion.div>
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2 }}
                >
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                            transform: 'perspective(500px) rotateX(20deg) scale(1.5)'
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-3 sm:px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col space-y-6 lg:order-1 order-2 text-center lg:text-left items-center lg:items-start"
                    >
                        {/* Tagline Reveal */}
                        <div className="overflow-hidden">
                            <motion.span variants={revealText} className="block font-oswald text-brand-orange uppercase text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.2em] font-bold">
                                Next-Gen Nutrition
                            </motion.span>
                        </div>

                        {/* Giant Headline */}
                        <h1 className="font-oswald text-[clamp(2rem,7vw,6.5rem)] font-black uppercase leading-[0.95] tracking-tighter sm:tracking-tight text-white">
                            <div className="overflow-hidden">
                                <motion.span variants={revealText} className="block">FUEL YOUR</motion.span>
                            </div>
                            <div className="overflow-hidden relative group cursor-default">
                                <motion.span variants={revealText} className="block text-transparent [-webkit-text-stroke:1px_white] relative z-20 transition-all duration-500 group-hover:text-white">
                                    STRENGTH
                                </motion.span>
                                <span className="absolute inset-0 text-brand-orange opacity-0 group-hover:opacity-50 blur-[8px] transition-opacity duration-500 z-10">
                                    STRENGTH
                                </span>
                            </div>
                            <div className="overflow-hidden">
                                <motion.span variants={revealText} className="block">ANYWHERE.</motion.span>
                            </div>
                        </h1>

                        <motion.p variants={fadeUp} className="font-sans text-[clamp(0.875rem,2vw,1.125rem)] text-white/70 max-w-[90vw] sm:max-w-[500px] leading-relaxed">
                            A portable protein pouch delivering 25g protein whenever your body needs it. Zero fillers. Zero compromises.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col space-y-3 sm:space-y-4 pt-4 w-full sm:w-auto">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Button
                                    variant="primary"
                                    onClick={() => router.push('/shop')}
                                    className="w-full sm:w-auto shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.6)] group px-6 sm:px-8 py-3 sm:py-4 lg:py-5 text-xs sm:text-sm lg:text-base min-h-[44px] sm:min-h-[48px]"
                                >
                                    Shop Now
                                    <motion.svg
                                        className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </motion.svg>
                                </Button>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => router.push('/science')}
                                    className="w-full sm:w-auto font-oswald text-[9px] sm:text-[11px] lg:text-xs font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300 px-6 sm:px-8 py-3 sm:py-4 lg:py-5 border border-white/10 hover:border-white/30 rounded-sm min-h-[44px] sm:min-h-[48px]"
                                >
                                    Learn More
                                </motion.button>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    <span className="text-[10px] font-oswald uppercase tracking-widest text-white/40">No Subscription</span>
                                </div>
                                <div className="w-[1px] h-3 bg-white/10" />
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span className="text-[10px] font-oswald uppercase tracking-widest text-white/40">30-Day Guarantee</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Product Visual */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center items-center lg:order-2 order-1 relative h-[280px] sm:h-[380px] md:h-[500px]"
                    >
                        <motion.div style={{ x: pouchX, y: pouchY }} className="relative w-[180px] h-[300px] sm:w-[240px] sm:h-[380px] md:w-[300px] md:h-[450px] flex justify-center items-center">
                            {/* Floating Pouch Mock */}
                            <motion.div
                                animate={{ y: [-15, 10, -15], rotate: [0, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative z-10 w-[160px] h-[280px] sm:w-[200px] sm:h-[350px] md:w-[220px] md:h-[380px] rounded-[16px_16px_8px_8px] sm:rounded-[20px_20px_10px_10px] border border-white/10 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] shadow-[15px_15px_30px_rgba(0,0,0,0.8)] sm:shadow-[20px_20px_40px_rgba(0,0,0,0.8)]"
                            >
                                <div className="absolute top-0 w-full h-[45px] sm:h-[60px] bg-gradient-to-b from-white/5 to-transparent rounded-t-[16px] sm:rounded-t-[20px]" />
                                <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl font-black text-brand-orange leading-none mb-0.5 sm:mb-1">SIP</h1>
                                <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none">STRONG</h1>
                                <div className="mt-4 sm:mt-8 px-3 sm:px-4 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full">
                                    <span className="font-oswald text-[8px] sm:text-[10px] font-bold text-brand-orange uppercase tracking-widest">25g Protein</span>
                                </div>
                            </motion.div>

                            {/* Floating Shadow Sync */}
                            <motion.div
                                animate={{ scale: [1, 0.8, 1], opacity: [0.8, 0.4, 0.8] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute bottom-2 w-[100px] sm:w-[120px] md:w-[150px] h-[16px] sm:h-[20px] bg-black/80 rounded-full blur-[8px] sm:blur-[10px] z-0"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none hidden sm:flex"
            >
                <span className="text-white/50 text-[8px] sm:text-[10px] font-oswald uppercase tracking-[0.2em] mb-2">Discover</span>
                <motion.div
                    animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                    className="w-[2px] h-[40px] sm:h-[50px] bg-gradient-to-b from-brand-orange to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
