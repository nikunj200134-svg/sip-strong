'use client';

import React from 'react';
import Link from 'next/link';

export default function ShippingReturnsPage() {
    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.4em] text-xs mb-4 block">Logistics</span>
                    <h1 className="font-oswald text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                        SHIPPING & <span className="text-brand-orange">RETURNS</span>
                    </h1>
                </div>

                {/* Trust Icons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 border-b border-white/10 pb-16">
                    {[
                        { title: "Pan-India Delivery", desc: "Coverage across 19,000+ pin codes", icon: <><path d="M5 12h14M12 5l7 7-7-7" /></> },
                        { title: "Free Shipping", desc: "On all orders above ₹999", icon: <><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M12 8v-3" /><path d="M8 5h8" /></> },
                        { title: "COD Available", desc: "Pay at your doorstep", icon: <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></> },
                        { title: "Easy Returns", desc: "7-day hassle-free process", icon: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></> }
                    ].map((perk, i) => (
                        <div key={i} className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-brand-orange mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{perk.icon}</svg>
                            </div>
                            <h4 className="font-oswald font-bold text-white uppercase tracking-wider mb-2">{perk.title}</h4>
                            <p className="font-sans text-xs text-white/50">{perk.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Policy Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Shipping Policy */}
                    <div>
                        <h3 className="font-oswald text-3xl font-black text-white uppercase tracking-tight mb-8">
                            Shipping <span className="text-brand-orange">Timeline</span>
                        </h3>
                        <div className="space-y-6 text-white/70 font-sans leading-relaxed">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                                <h4 className="text-white font-bold uppercase tracking-wider mb-2">Metro Cities (Tier 1)</h4>
                                <p className="text-white/50 text-sm mb-2">Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad</p>
                                <span className="text-brand-orange font-black font-oswald text-xl">1 - 2 Business Days</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                                <h4 className="text-white font-bold uppercase tracking-wider mb-2">Tier 2 & 3 Cities</h4>
                                <p className="text-white/50 text-sm mb-2">Rest of India</p>
                                <span className="text-brand-orange font-black font-oswald text-xl">3 - 5 Business Days</span>
                            </div>
                            <p className="text-sm">
                                All orders placed before 2 PM IST are dispatched the same day. You will receive a tracking link via WhatsApp and Email the moment your package leaves our fulfillment center.
                            </p>
                        </div>
                    </div>

                    {/* Return Policy */}
                    <div>
                        <h3 className="font-oswald text-3xl font-black text-white uppercase tracking-tight mb-8">
                            Returns <span className="text-brand-orange">Policy</span>
                        </h3>
                        <div className="space-y-6 text-white/70 font-sans leading-relaxed">
                            <p>
                                We stand behind our elite pharmaceutical-grade formulations. However, if you receive a damaged or incorrect item, our return process is completely frictionless.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Products can be returned within <strong>7 days</strong> of delivery.</span>
                                </li>
                                <li className="flex gap-4">
                                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>The seal must remain unbroken. For health and safety protocols, we cannot accept returns on opened supplements.</span>
                                </li>
                                <li className="flex gap-4">
                                    <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Refunds are processed within 48 hours of return inspection.</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <Link
                                    href="/contact"
                                    className="text-white hover:text-brand-orange font-oswald font-black uppercase tracking-widest text-sm inline-flex items-center gap-2 transition-colors"
                                >
                                    Initiate a Return
                                    <span className="text-brand-orange">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
