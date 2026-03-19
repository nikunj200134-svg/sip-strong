'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        category: "Delivery & Shipping",
        questions: [
            { q: "How long does shipping take?", a: "Standard delivery takes 3-5 business days across India. Expedited tier 1 city delivery is 1-2 days." },
            { q: "Do you offer Cash on Delivery (COD)?", a: "Yes, COD is available for all pin codes across India for orders under ₹5,000." }
        ]
    },
    {
        category: "Results & Usage",
        questions: [
            { q: "When is the best time to consume SipStrong?", a: "For optimal bioavailability, consume SipStrong Whey within the 45-minute post-workout anabolic window." },
            { q: "Can I mix it with milk?", a: "While possible, our isolate is engineered for rapid absorption with water. Milk introduces slower-digesting casein which delays nutrient transport." }
        ]
    },
    {
        category: "Safety & Quality",
        questions: [
            { q: "Is SipStrong tested for banned substances?", a: "Yes. Every batch undergoes stringent WADA-compliant testing. It is 100% safe for tested competitive athletes." },
            { q: "What is the source of your Whey?", a: "We source our premium whey isolate directly from grass-fed cows, ensuring the highest biological value and amino acid profile." }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>("cat-0-q-0");

    const toggleAccordion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.4em] text-xs mb-4 block">Knowledge Base</span>
                    <h1 className="font-oswald text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                        FREQUENTLY ASKED <span className="text-brand-orange">QUESTIONS</span>
                    </h1>
                    <p className="text-white/50 text-lg font-sans max-w-2xl mx-auto">
                        Everything you need to know about our elite formulations, delivery protocols, and safety standards.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-12">
                    {faqs.map((cat, catIdx) => (
                        <div key={catIdx}>
                            <h2 className="font-oswald text-2xl font-black text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                                {cat.category}
                            </h2>
                            <div className="space-y-4">
                                {cat.questions.map((faq, qIdx) => {
                                    const id = `cat-${catIdx}-q-${qIdx}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div key={qIdx} className="bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-colors hover:border-white/20">
                                            <button
                                                onClick={() => toggleAccordion(id)}
                                                className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent"
                                            >
                                                <span className="font-sans font-bold text-white text-lg">{faq.q}</span>
                                                <motion.span
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    className="text-brand-orange"
                                                >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </motion.span>
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-6 pt-2 text-white/60 font-sans leading-relaxed border-t border-white/5">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Block */}
                <div className="mt-24 bg-white/5 border border-white/10 p-12 text-center rounded-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="font-oswald text-3xl font-black text-white uppercase tracking-tight mb-4 relative z-10">
                        Still have a question?
                    </h3>
                    <p className="text-white/50 mb-8 max-w-md mx-auto relative z-10">
                        Our sports nutrition experts are on standby to help optimize your supplement protocol.
                    </p>
                    <Link href="/contact" className="inline-block bg-brand-orange text-white font-oswald font-black uppercase tracking-widest px-8 py-4 hover:bg-brand-orange-hover transition-colors rounded-sm relative z-10">
                        Contact Performance Expert
                    </Link>
                </div>

            </div>
        </div>
    );
}
