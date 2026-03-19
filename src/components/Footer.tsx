import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id="footer" className="bg-black border-t border-white/10 pt-12 sm:pt-16 pb-6 sm:pb-8">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                {/* Trust & Guarantee Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-white/5">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-oswald text-xs sm:text-sm font-bold uppercase text-white leading-tight">30-Day Guarantee</h4>
                            <p className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest">Love it or your money back.</p>
                        </div>
                    </div>
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-oswald text-xs sm:text-sm font-bold uppercase text-white leading-tight">Secure Checkout</h4>
                            <p className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest">SSL Encrypted Transactions.</p>
                        </div>
                    </div>
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-oswald text-xs sm:text-sm font-bold uppercase text-white leading-tight">Free Over £50</h4>
                            <p className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest">Fast & Tracked Shipping.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 mb-12">
                    <div className="col-span-2 sm:col-span-2">
                        <h3 className="font-oswald text-lg sm:text-2xl font-bold tracking-widest text-white uppercase mb-3 sm:mb-4">SipStrong</h3>
                        <p className="text-[8px] sm:text-xs text-brand-orange/80 mb-3 sm:mb-4">Made in India</p>
                        <p className="text-white/60 mb-4 sm:mb-6 max-w-sm text-xs sm:text-sm leading-relaxed">
                            Scientifically backed supplements for the modern athlete. Fuel your potential with our elite performance nutrition.
                        </p>
                        <div className="flex space-x-3">
                            {/* Social Icons - Instagram */}
                            <a href="https://instagram.com/sipstrong" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all text-white/80 min-h-[44px] group">
                                <span className="sr-only">Instagram</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            {/* Social Icons - Twitter */}
                            <a href="https://twitter.com/sipstrong" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all text-white/80 min-h-[44px] group">
                                <span className="sr-only">Twitter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-oswald text-sm sm:text-lg font-bold uppercase tracking-wide mb-3 sm:mb-4 text-white">Shop</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                            <li><Link href="/shop/whey-protein" className="text-white/60 hover:text-brand-orange transition-colors">Whey Protein</Link></li>
                            <li><Link href="/shop/hydration" className="text-white/60 hover:text-brand-orange transition-colors">Electrolytes</Link></li>
                            <li><Link href="/shop/creatine" className="text-white/60 hover:text-brand-orange transition-colors">Creatine</Link></li>
                            <li><Link href="/shop" className="text-white/60 hover:text-brand-orange transition-colors">Bundles</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-oswald text-sm sm:text-lg font-bold uppercase tracking-wide mb-3 sm:mb-4 text-white">Support</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                            <li><Link href="/learn" className="text-white/60 hover:text-brand-orange transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-brand-orange transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-brand-orange transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white/40 gap-4">
                    <p>&copy; {new Date().getFullYear()} SipStrong. All rights reserved.</p>
                    <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
                        <Link href="/privacy" className="text-white/40 hover:text-brand-orange transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/40 hover:text-brand-orange transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
