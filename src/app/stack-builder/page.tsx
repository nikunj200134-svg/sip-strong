'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

// 1. Create product price configuration
const PRODUCT_PRICES = {
    whey: 2499,
    creatine: 999,
    electrolytes: 699,
    preworkout: 1499
};

const STACK_METADATA: Record<string, { label: string, timing: string, title: string, image: string }> = {
    whey: {
        title: 'Elite Whey Isolate',
        label: 'Muscle Recovery',
        timing: 'Post-Workout',
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop'
    },
    creatine: {
        title: 'Micronized Creatine',
        label: 'Power & ATP',
        timing: 'Anytime',
        image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop'
    },
    electrolytes: {
        title: 'Hydration Fuel',
        label: 'Fluid Balance',
        timing: 'Intra-Workout',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
    },
    preworkout: {
        title: 'Ignition Pre-Workout',
        label: 'Energy & Focus',
        timing: 'Pre-Workout',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop'
    }
};

// Configuration for assessment steps
const stepsData = [
    {
        id: 'goal',
        title: 'Select Goal',
        subtitle: 'What is your primary objective?',
        options: [
            { id: 'muscle', label: 'Muscle Gain', icon: '💪', desc: 'Maximize hypertrophy and size' },
            { id: 'fat-loss', label: 'Fat Loss', icon: '🔥', desc: 'Burn calories and preserve muscle' },
            { id: 'strength', label: 'Strength', icon: '🏋️', desc: 'Improve raw power and lifting' },
            { id: 'endurance', label: 'Endurance', icon: '🏃', desc: 'Enhance stamina and recovery' }
        ]
    },
    {
        id: 'level',
        title: 'Training Level',
        subtitle: 'How experienced are you?',
        options: [
            { id: 'beginner', label: 'Beginner', icon: '🌱', desc: '0-1 years of consistent training' },
            { id: 'intermediate', label: 'Intermediate', icon: '⚡', desc: '1-3 years of consistent training' },
            { id: 'advanced', label: 'Advanced', icon: '🏆', desc: '3+ years of elite level training' }
        ]
    },
    {
        id: 'frequency',
        title: 'Workout Frequency',
        subtitle: 'How often do you train?',
        options: [
            { id: 'low', label: '2–3 days', icon: '🗓️', desc: 'Focus on full body sessions' },
            { id: 'med', label: '4–5 days', icon: '⚡', desc: 'Optimal for muscle development' },
            { id: 'high', label: '6+ days', icon: '🚀', desc: 'Maximum intensity and recovery' }
        ]
    }
];

// Price Count Up Animation Component
const PriceCountUp = ({ value }: { value: number }) => {
    const springValue = useSpring(0, { stiffness: 40, damping: 20 });
    const roundedValue = useTransform(springValue, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        springValue.set(value);
    }, [value, springValue]);

    useEffect(() => {
        return roundedValue.onChange((v) => setDisplayValue(v));
    }, [roundedValue]);

    return <span>₹{displayValue.toLocaleString()}</span>;
};

export default function StackBuilderPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState({
        goal: '',
        level: '',
        frequency: ''
    });
    const [isComplete, setIsComplete] = useState(false);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const assessmentRef = useRef<HTMLDivElement>(null);

    // Recommendation Logic based on Goal
    const recommendedStack = useMemo(() => {
        if (!isComplete) return [];
        switch (selections.goal) {
            case 'muscle': return ['whey', 'creatine', 'preworkout'];
            case 'fat-loss': return ['whey', 'electrolytes'];
            case 'strength': return ['whey', 'creatine', 'preworkout', 'electrolytes'];
            case 'endurance': return ['electrolytes', 'preworkout', 'whey'];
            default: return ['whey'];
        }
    }, [isComplete, selections.goal]);

    // 2. Calculate stack pricing
    const pricing = useMemo(() => {
        if (recommendedStack.length === 0) return { totalOriginal: 0, finalPrice: 0, savings: 0, discount: 0 };
        const totalOriginal = recommendedStack.reduce((sum, id) => sum + (PRODUCT_PRICES[id as keyof typeof PRODUCT_PRICES] || 0), 0);

        let discountPct = 0;
        if (recommendedStack.length === 2) discountPct = 0.05;
        else if (recommendedStack.length === 3) discountPct = 0.10;
        else if (recommendedStack.length >= 4) discountPct = 0.15;

        const finalPrice = Math.round(totalOriginal * (1 - discountPct));
        const savings = totalOriginal - finalPrice;

        return { totalOriginal, finalPrice, savings, discount: discountPct * 100 };
    }, [recommendedStack]);

    useEffect(() => {
        if (currentStep > 0 && assessmentRef.current) {
            const yOffset = -120;
            const element = assessmentRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [currentStep]);

    const handleStart = () => {
        assessmentRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSelect = (optionId: string) => {
        const stepKey = stepsData[currentStep].id as keyof typeof selections;
        setSelections(prev => ({ ...prev, [stepKey]: optionId }));

        if (currentStep < stepsData.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 500);
        } else {
            setTimeout(() => setIsComplete(true), 800);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(prev => prev - 1);
    };

    const handleContinue = () => {
        if (currentStep < stepsData.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setIsComplete(true);
        }
    };

    // 5. Add-Entire-Stack-To-Cart flow
    const handleAddStackToCart = () => {
        setIsAddingToCart(true);
        recommendedStack.forEach((id) => {
            const product = STACK_METADATA[id];
            const event = new CustomEvent('add-to-cart', {
                detail: {
                    id,
                    title: product.title,
                    price: `₹${PRODUCT_PRICES[id as keyof typeof PRODUCT_PRICES]}`,
                    image: product.image
                }
            });
            window.dispatchEvent(event);
        });

        setTimeout(() => setIsAddingToCart(false), 2000);
    };

    const currentStepKey = stepsData[currentStep]?.id as keyof typeof selections;
    const isOptionSelected = selections[currentStepKey] !== '';

    return (
        <main className="bg-[#050505] min-h-screen text-white pt-24 pb-32">
            {/* ELITE HERO SECTION */}
            <section className="relative h-[85vh] flex items-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-[#050505] z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-orange/5 blur-[150px] rounded-full opacity-40 animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
                    <ScrollReveal animation="reveal">
                        <span className="inline-block px-5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-[10px] font-oswald font-black uppercase tracking-[0.4em] mb-8">
                            Performance Assessment
                        </span>
                        <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Build Your <span className="text-brand-orange">Elite</span> <br />
                            Performance Stack
                        </h1>
                        <p className="font-sans text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                            Precision nutrition engineered for your training goal.
                            Our algorithms analyze your profile to prescribe the ultimate supplement arsenal.
                        </p>
                        <button
                            onClick={handleStart}
                            className="group relative inline-flex items-center gap-6 bg-brand-orange hover:bg-brand-orange-hover text-white px-12 py-6 rounded-sm font-oswald font-black uppercase tracking-widest text-sm transition-all duration-500 shadow-[0_20px_60px_rgba(255,69,0,0.25)] hover:shadow-[0_20px_80px_rgba(255,69,0,0.4)]"
                        >
                            Start Assessment
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </ScrollReveal>
                </div>
            </section>

            {/* ASSESSMENT SECTION */}
            <section ref={assessmentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 scroll-mt-32">
                {!isComplete ? (
                    <div className="relative">
                        <div className="mb-24 max-w-3xl mx-auto">
                            <div className="flex justify-between items-end mb-6 font-oswald text-[11px] font-black uppercase tracking-[0.3em]">
                                <span className="text-white/20">Phase Intelligence</span>
                                <span className="text-brand-orange">Phase {currentStep + 1} <span className="text-white/20">/</span> {stepsData.length}</span>
                            </div>
                            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-brand-orange shadow-[0_0_15px_#ff4500]"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${((currentStep + 1) / stepsData.length) * 100}%` }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="max-w-4xl mx-auto"
                            >
                                <div className="text-center mb-16">
                                    <h2 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tight mb-4">
                                        {stepsData[currentStep].title}
                                    </h2>
                                    <p className="font-sans text-white/30 text-lg md:text-xl">
                                        {stepsData[currentStep].subtitle}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    {stepsData[currentStep].options.map((option, idx) => {
                                        const isSelected = selections[currentStepKey] === option.id;

                                        return (
                                            <motion.button
                                                key={option.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                onClick={() => handleSelect(option.id)}
                                                className={`group relative p-10 text-left rounded-sm border transition-all duration-500 overflow-hidden
                                                    ${isSelected
                                                        ? 'bg-brand-orange border-brand-orange scale-[1.03] shadow-[0_30px_60px_rgba(255,69,0,0.25)]'
                                                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                                                    }`}
                                            >
                                                <div className="flex items-start justify-between mb-8 relative z-10">
                                                    <span className={`text-5xl transition-transform duration-500 group-hover:scale-110 ${isSelected ? 'scale-110' : ''}`}>
                                                        {option.icon}
                                                    </span>

                                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500
                                                        ${isSelected
                                                            ? 'bg-white border-white'
                                                            : 'border-white/20 group-hover:border-white/40'
                                                        }`}
                                                    >
                                                        {isSelected && (
                                                            <motion.svg
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="w-5 h-5 text-brand-orange"
                                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                                            </motion.svg>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="relative z-10">
                                                    <h3 className={`font-oswald text-2xl font-black uppercase tracking-wide mb-3 transition-colors duration-500 ${isSelected ? 'text-white' : 'text-white/90'}`}>
                                                        {option.label}
                                                    </h3>
                                                    <p className={`font-sans text-sm leading-relaxed transition-colors duration-500 ${isSelected ? 'text-white/80' : 'text-white/30'}`}>
                                                        {option.desc}
                                                    </p>
                                                </div>

                                                <div className={`absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 pointer-events-none ${isSelected ? 'opacity-10' : 'group-hover:opacity-100'}`} />
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {currentStep > 0 && (
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onClick={handleBack}
                                        className="mt-16 flex items-center gap-3 text-white/30 hover:text-brand-orange font-oswald text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 group"
                                    >
                                        <span className="transition-transform group-hover:-translate-x-2">&larr;</span> Return To Previous Phase
                                    </motion.button>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ) : (
                    /* 3. Build Bundle Pricing UI */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center py-20"
                    >
                        <div className="mb-20">
                            <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.5em] text-[12px] mb-8 block">Analysis Optimized</span>
                            <h2 className="font-oswald text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none">
                                Your <span className="text-brand-orange italic">Prescribed</span> <br /> Arsenal
                            </h2>
                            <div className="flex flex-col items-center justify-center gap-2 mb-10">
                                <span className="px-4 py-1 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-oswald text-[10px] uppercase font-black tracking-widest rounded-sm">
                                    Elite Stack Bundle Offer
                                </span>
                                <p className="font-sans text-white/30 text-xl max-w-2xl mx-auto leading-relaxed">
                                    Physiological goal matched to <span className="text-white font-black uppercase tracking-widest">{selections.goal}</span>.
                                    Custom formulations prescribed below.
                                </p>
                            </div>

                            {/* Pricing Display */}
                            <div className="mb-16">
                                <div className="flex items-center justify-center gap-4 mb-2">
                                    <span className="text-white/40 line-through font-oswald text-2xl">₹{pricing.totalOriginal.toLocaleString()}</span>
                                    <span className="text-white font-oswald text-7xl font-black tracking-tighter">
                                        <PriceCountUp value={pricing.finalPrice} />
                                    </span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="text-brand-orange font-oswald font-black uppercase tracking-widest text-sm bg-brand-orange/10 px-4 py-1.5 rounded-sm shadow-[0_0_20px_rgba(255,69,0,0.15)] animate-pulse">
                                        You save ₹{pricing.savings.toLocaleString()} ({pricing.discount}%)
                                    </span>
                                </div>
                                {/* 4. Urgency micro-elements */}
                                <p className="mt-6 text-white/20 font-oswald text-[10px] uppercase font-black tracking-[0.2em]">
                                    Stack pricing reserved for limited time • Performance coach recommended
                                </p>
                            </div>
                        </div>

                        {/* Product Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20 text-left">
                            {recommendedStack.map((id, i) => {
                                const meta = STACK_METADATA[id];
                                return (
                                    <motion.div
                                        key={id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        // 6. Card hover lift effect
                                        className="bg-white/[0.03] border border-white/10 p-6 rounded-sm hover:-translate-y-2 hover:border-brand-orange/40 hover:bg-white/[0.05] transition-all duration-500 group"
                                    >
                                        <div className="aspect-square bg-white/[0.02] rounded-sm mb-6 relative overflow-hidden">
                                            <img src={meta.image} alt={meta.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-sm">
                                                <span className="text-[10px] font-oswald font-black uppercase tracking-widest text-brand-orange">{meta.timing}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-brand-orange font-oswald text-[10px] font-black uppercase tracking-widest mb-2 block">{meta.label}</span>
                                            <h4 className="text-white font-oswald text-xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-orange transition-colors">{meta.title}</h4>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-white/40 font-oswald font-black uppercase">₹{PRODUCT_PRICES[id as keyof typeof PRODUCT_PRICES]}</span>
                                                <svg className="w-5 h-5 text-white/20 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                            <motion.button
                                onClick={handleAddStackToCart}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative bg-brand-orange text-white font-oswald font-black uppercase tracking-[0.3em] px-16 py-7 text-sm rounded-sm overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-4">
                                    {isAddingToCart ? 'Syncing Arsenal...' : 'Unlock My Elite Stack'}
                                    {!isAddingToCart && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>}
                                </span>
                                {/* Pulse Glow around CTA */}
                                <div className="absolute inset-0 bg-brand-orange shadow-[0_0_50px_rgba(255,69,0,0.5)] animate-pulse" />
                            </motion.button>
                            <button
                                onClick={() => { setIsComplete(false); setCurrentStep(0); setSelections({ goal: '', level: '', frequency: '' }); }}
                                className="bg-transparent text-white/30 border border-white/10 font-oswald font-black uppercase tracking-[0.2em] px-14 py-7 text-sm hover:text-white hover:bg-white/5 transition-all duration-500 rounded-sm"
                            >
                                Re-calibrate Assessment
                            </button>
                        </div>

                        {/* 8. Prepare next step placeholders */}
                        <div className="mt-32 max-w-4xl mx-auto border-t border-white/5 pt-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                <div>
                                    <h5 className="text-white font-oswald text-xs font-black uppercase tracking-[0.2em] mb-4">Stack Upgrade Suggestion</h5>
                                    <p className="text-white/20 text-sm leading-relaxed">Consider adding our Omega-3 Elite series to enhance neurological recovery and maximize the efficiency of your {selections.goal} focus.</p>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                        <span className="text-red-500 font-oswald text-[10px] font-black uppercase tracking-widest">Limited Stock Available</span>
                                    </div>
                                    <p className="text-white/20 text-sm italic leading-relaxed">High demand detected for this combination based on current regional performance trends.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </section>

            {/* Sticky bottom bar (Mobile + Desktop logic) */}
            <AnimatePresence>
                {!isComplete ? (
                    <motion.div
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        exit={{ y: 150 }}
                        className="fixed bottom-0 left-0 right-0 p-8 bg-black/95 backdrop-blur-3xl border-t border-white/5 z-50 flex justify-center"
                    >
                        <div className="max-w-4xl w-full flex items-center justify-between gap-12">
                            <div className="hidden md:flex flex-col">
                                <span className="text-white/20 font-oswald text-[10px] font-black uppercase tracking-[0.4em] mb-1">State Selection</span>
                                <span className="text-white font-oswald text-lg font-black uppercase tracking-wider">
                                    {selections[currentStepKey] ? stepsData[currentStep].options.find(o => o.id === selections[currentStepKey])?.label : 'Awaiting Input...'}
                                </span>
                            </div>

                            <button
                                disabled={!isOptionSelected}
                                onClick={handleContinue}
                                className={`flex-1 md:flex-none md:min-w-[280px] py-6 px-12 rounded-sm font-oswald font-black uppercase tracking-[0.3em] text-xs transition-all duration-500
                                    ${isOptionSelected
                                        ? 'bg-brand-orange text-white shadow-[0_0_40px_rgba(255,69,0,0.4)]'
                                        : 'bg-white/5 text-white/10 cursor-not-allowed border border-white/5'
                                    }`}
                            >
                                {currentStep === stepsData.length - 1 ? 'Compute Results' : 'Confirm Phase'}
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    /* 7. Mobile conversion UX: sticky bottom bar */
                    <motion.div
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        className="fixed bottom-0 left-0 right-0 p-6 bg-black/95 backdrop-blur-3xl border-t border-brand-orange/20 z-50 md:hidden"
                    >
                        <div className="flex items-center justify-between gap-6">
                            <div className="flex flex-col">
                                <span className="text-brand-orange font-oswald text-[10px] font-black uppercase tracking-widest">Bundle Offer</span>
                                <span className="text-white font-oswald text-2xl font-black">₹{pricing.finalPrice.toLocaleString()}</span>
                            </div>
                            <button
                                onClick={handleAddStackToCart}
                                className="flex-1 bg-brand-orange text-white py-5 rounded-sm font-oswald font-black uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(255,69,0,0.3)]"
                            >
                                Unlock Elite Stack
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </main>
    );
}
