'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md"
            >
                <div className="w-20 h-20 bg-brand-orange/10 border border-brand-orange/40 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h2 className="font-oswald text-4xl font-black uppercase tracking-tighter text-white mb-4">
                    Performance <span className="text-brand-orange">Disrupted</span>
                </h2>
                <p className="font-sans text-white/40 mb-10 leading-relaxed">
                    We encountered a synchronization error while processing your request. Our engineering team has been alerted.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="bg-brand-orange text-white px-8 py-4 rounded-sm font-oswald font-black uppercase tracking-widest text-sm hover:bg-brand-orange-hover transition-all"
                    >
                        Retry Sync
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-white/5 text-white/40 border border-white/10 px-8 py-4 rounded-sm font-oswald font-black uppercase tracking-widest text-sm hover:text-white transition-all"
                    >
                        Return Base
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
