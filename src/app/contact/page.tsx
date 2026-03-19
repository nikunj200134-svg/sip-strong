'use client';

import React, { useState } from 'react';

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">

            {/* Hero / Brand Story Section */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Origin</span>
                        <h1 className="font-oswald text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                            THE PURSUIT OF <br />
                            <span className="text-brand-orange">POTENTIAL</span>
                        </h1>
                        <p className="font-sans text-white/60 text-lg leading-relaxed mb-6">
                            SipStrong wasn't created in a boardroom. It was forged in the trenches
                            of high-performance training where the margin between average and elite
                            is measured in milligrams.
                        </p>
                        <p className="font-sans text-white/50 text-md leading-relaxed">
                            We observed imported supplements filled with cheap fillers, proprietary blends,
                            and opaque labeling. Our objective became clear: Engineer the most potent,
                            transparent, and scientifically-validated sports nutrition specifically for the Indian athlete.
                        </p>
                    </div>

                    {/* Founder Message Section */}
                    <div className="bg-white/[0.03] border border-white/10 p-8 sm:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 space-y-12">
                            <div>
                                <h3 className="font-oswald text-2xl font-black text-white uppercase tracking-wide mb-2">Rajesh Sengar</h3>
                                <p className="text-brand-orange font-oswald text-xs uppercase tracking-widest mb-4">Founder</p>
                                <blockquote className="text-white/80 font-sans italic border-l-2 border-brand-orange pl-4 bg-white/[0.02] py-4 rounded-r-sm shadow-[inset_1px_0_0_0_rgba(255,107,0,1)]">
                                    "Built SipStrong to deliver elite sports nutrition made for Indian athletes."
                                </blockquote>
                            </div>

                            <div>
                                <h3 className="font-oswald text-2xl font-black text-white uppercase tracking-wide mb-2">Kunal Sengar</h3>
                                <p className="text-brand-orange font-oswald text-xs uppercase tracking-widest mb-4">Co-Founder</p>
                                <blockquote className="text-white/80 font-sans italic border-l-2 border-brand-orange pl-4 bg-white/[0.02] py-4 rounded-r-sm shadow-[inset_1px_0_0_0_rgba(255,107,0,1)]">
                                    "Focused on performance science, innovation, and customer transformation."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form & Direct CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/10 pt-24">

                    {/* Contact Channels */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                        <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.4em] text-xs mb-4 block">Direct Access</span>
                        <h2 className="font-oswald text-4xl font-black text-white uppercase tracking-tighter mb-10">
                            COMMUNICATION <br />CHANNELS
                        </h2>

                        <div className="space-y-6">
                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-6 p-6 border border-white/10 hover:border-brand-orange hover:bg-white/[0.02] transition-all rounded-sm"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.05c.101-.114.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-1">WhatsApp Fast Track</h4>
                                    <p className="text-white/40 font-sans text-sm">Instant responses from our performance team (9 AM - 8 PM IST)</p>
                                </div>
                            </a>

                            {/* Email CTA */}
                            <a
                                href="mailto:support@sipstrong.com"
                                className="group flex items-center gap-6 p-6 border border-white/10 hover:border-brand-orange hover:bg-white/[0.02] transition-all rounded-sm"
                            >
                                <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-1">Email Headquarters</h4>
                                    <p className="text-white/40 font-sans text-sm">Detailed inquiries: support@sipstrong.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-[#0A0A0A] border border-white/10 p-8 sm:p-12 rounded-sm shadow-2xl">
                            <h3 className="font-oswald text-2xl font-black text-white uppercase tracking-wide mb-8">Send a Transmission</h3>

                            {formStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h4 className="font-oswald text-2xl font-black text-white uppercase mb-2">Transmission Received</h4>
                                    <p className="text-white/50 text-sans">Our elite support team will analyze your request and respond shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-oswald text-white/40 uppercase tracking-widest font-black">Full Name</label>
                                            <input required type="text" className="w-full bg-white/5 border border-white/10 py-4 px-4 text-white focus:outline-none focus:border-brand-orange transition-colors rounded-sm" placeholder="Athlete Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-oswald text-white/40 uppercase tracking-widest font-black">Email Address</label>
                                            <input required type="email" className="w-full bg-white/5 border border-white/10 py-4 px-4 text-white focus:outline-none focus:border-brand-orange transition-colors rounded-sm" placeholder="athlete@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-oswald text-white/40 uppercase tracking-widest font-black">Subject</label>
                                        <select className="w-full bg-white/5 border border-white/10 py-4 px-4 text-white focus:outline-none focus:border-brand-orange transition-colors rounded-sm appearance-none">
                                            <option value="order">Order Inquiry</option>
                                            <option value="supplement">Supplement Guidance</option>
                                            <option value="partnership">Partnership/Sponsorship</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-oswald text-white/40 uppercase tracking-widest font-black">Message</label>
                                        <textarea required rows={5} className="w-full bg-white/5 border border-white/10 py-4 px-4 text-white focus:outline-none focus:border-brand-orange transition-colors rounded-sm resize-none" placeholder="Provide full details..."></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-brand-orange text-white font-oswald font-black uppercase tracking-widest py-5 hover:bg-brand-orange-hover transition-colors rounded-sm flex justify-center items-center"
                                    >
                                        {formStatus === 'submitting' ? (
                                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
