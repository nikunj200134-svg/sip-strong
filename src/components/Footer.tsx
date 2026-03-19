'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const footerLinks = {
        shop: [
            { name: 'Whey Protein', href: '/shop?category=whey-protein' },
            { name: 'Electrolytes', href: '/shop?category=electrolytes' },
            { name: 'Creatine', href: '/shop?category=creatine' },
            { name: 'Bundles', href: '/shop?category=bundles' }
        ],
        support: [
            { name: 'FAQ', href: '/faq' },
            { name: 'Shipping & Returns', href: '/shipping-returns' },
            { name: 'Contact Us', href: '/contact' }
        ]
    };

    return (
        <footer id="footer" className="bg-black border-t border-white/10 pt-16 pb-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Trust & Guarantee Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 pb-16 border-b border-white/5">
                    {[
                        { title: '30-Day Guarantee', desc: 'Love it or your money back.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /> },
                        { title: 'Secure Checkout', desc: 'SSL Encrypted Transactions.', icon: <rect width="20" height="14" x="2" y="5" rx="2" /> },
                        { title: 'Free Over £50', desc: 'Fast & Tracked Shipping.', icon: <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h2" /> }
                    ].map((trust, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:border-brand-orange transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {trust.icon}
                                </svg>
                            </motion.div>
                            <div>
                                <h4 className="font-oswald text-sm font-bold uppercase text-white leading-tight group-hover:text-brand-orange transition-colors">{trust.title}</h4>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{trust.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <h3 className="font-oswald text-2xl font-bold tracking-widest text-white uppercase mb-4">SipStrong</h3>
                        <p className="text-xs text-brand-orange font-bold uppercase tracking-widest mb-6">Made in India</p>
                        <p className="text-white/60 mb-8 max-w-sm text-sm leading-relaxed">
                            Scientifically backed supplements for the modern athlete. Fuel your potential with our elite performance nutrition.
                        </p>

                        <div className="flex space-x-4">
                            {[
                                { name: 'Instagram', icon: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />, href: 'https://instagram.com/sipstrong' },
                                { name: 'Twitter', icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />, href: 'https://twitter.com/sipstrong' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all duration-300 text-white group"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" />{social.icon}</svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop Links Column - Desktop & Mobile Accordion */}
                    <div className="border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0">
                        <button
                            onClick={() => toggleSection('shop')}
                            className="w-full flex justify-between items-center lg:cursor-default"
                        >
                            <h4 className="font-oswald text-lg font-bold uppercase tracking-wide text-white">Shop</h4>
                            <svg className={`w-5 h-5 text-brand-orange lg:hidden transition-transform ${openSection === 'shop' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        <AnimatePresence>
                            {(openSection === 'shop' || (typeof window !== 'undefined' && window.innerWidth >= 1024) || true) && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className={`space-y-4 mt-6 lg:block ${openSection === 'shop' ? 'block' : 'hidden'}`}
                                >
                                    {footerLinks.shop.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-white/60 hover:text-brand-orange transition-colors text-sm font-medium flex items-center group py-2 lg:py-0">
                                                <span className="relative overflow-hidden">
                                                    {link.name}
                                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                                                </span>
                                                <svg className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Support Links Column - Desktop & Mobile Accordion */}
                    <div className="border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0">
                        <button
                            onClick={() => toggleSection('support')}
                            className="w-full flex justify-between items-center lg:cursor-default"
                        >
                            <h4 className="font-oswald text-lg font-bold uppercase tracking-wide text-white">Support</h4>
                            <svg className={`w-5 h-5 text-brand-orange lg:hidden transition-transform ${openSection === 'support' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        <AnimatePresence>
                            {(openSection === 'support' || (typeof window !== 'undefined' && window.innerWidth >= 1024) || true) && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className={`space-y-4 mt-6 lg:block ${openSection === 'support' ? 'block' : 'hidden'}`}
                                >
                                    {footerLinks.support.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-white/60 hover:text-brand-orange transition-colors text-sm font-medium flex items-center group py-2 lg:py-0">
                                                <span className="relative overflow-hidden">
                                                    {link.name}
                                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                                                </span>
                                                <svg className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} SipStrong. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center space-x-8 text-sm">
                        <Link href="/privacy" className="text-white/40 hover:text-white transition-colors relative group">
                            Privacy Policy
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                        <Link href="/terms" className="text-white/40 hover:text-white transition-colors relative group">
                            Terms of Service
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sticky Mobile Enquiry CTA */}
            <div className="fixed bottom-0 left-0 w-full p-4 lg:hidden z-50 pointer-events-none">
                <Link
                    href="/contact"
                    className="pointer-events-auto bg-brand-orange text-white font-oswald font-black uppercase tracking-widest text-center py-4 rounded-sm shadow-2xl flex items-center justify-center gap-3 w-full"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Contact Expert
                </Link>
            </div>
            {/* Pad the bottom for mobile to allow scrolling past the sticky CTA */}
            <div className="h-20 lg:hidden" />
        </footer>
    );
};

export default Footer;
