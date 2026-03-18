'use client';

import React, { useState } from 'react';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Simulated form submission handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Contact Form Section */}
                <section className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="font-oswald text-5xl md:text-6xl font-black uppercase tracking-tight">Get in Touch</h1>
                        <p className="font-sans text-xl text-white/70">
                            Have questions about SipStrong? Need support with an order? Drop us a line and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-oswald uppercase text-white/80 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-oswald uppercase text-white/80 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-oswald uppercase text-white/80 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                isLoading={isSubmitting}
                            >
                                Send Message
                            </Button>
                        </form>
                    ) : (
                        <div className="bg-white/5 border border-brand-orange/50 p-8 rounded-sm text-center space-y-4">
                            <h3 className="font-oswald text-3xl uppercase text-brand-orange">Thanks for reaching out!</h3>
                            <p className="font-sans text-white/70">We&apos;ve received your message and will be in touch shortly.</p>
                        </div>
                    )}
                </section>

                {/* FAQ Section */}
                <section className="space-y-8 bg-white/5 p-8 md:p-12 rounded-sm border border-white/10">
                    <h2 className="font-oswald text-4xl font-bold uppercase tracking-wide">Frequently Asked Questions</h2>
                    <div className="flex flex-col">
                        <Accordion title="Do I need to refrigerate SipStrong?" defaultOpen>
                            Nope! SipStrong is shelf-stable and ready to drink anywhere. However, we do recommend chilling it before drinking for the best possible experience.
                        </Accordion>
                        <Accordion title="How much protein is in each pouch?">
                            Every pouch contains a precisely measured ~25g dose of our premium high-bioavailability protein blend, formulated for maximum absorption.
                        </Accordion>
                        <Accordion title="When will my order ship?">
                            Standard orders ship within 1-2 business days. If you&apos;ve selected expedited shipping, your order will go out the same day if placed before 2 PM EST.
                        </Accordion>
                        <Accordion title="Do you ship internationally?">
                            Currently, we ship exclusively within the US and Canada. We are working hard to expand our footprint worldwide soon!
                        </Accordion>
                    </div>
                </section>

            </div>
        </div>
    );
}
