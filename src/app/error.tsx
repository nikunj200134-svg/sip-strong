'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[80vh] bg-[#050505] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full text-center border border-white/10 bg-black p-8 rounded-sm shadow-2xl"
            >
                <span className="text-brand-orange font-oswald font-black uppercase tracking-[0.3em] text-xs mb-4 block">System Error</span>
                <h2 className="font-oswald text-4xl font-black text-white uppercase tracking-tight mb-6 mt-2">
                    CRITICAL <span className="text-brand-orange">FAILURE</span>
                </h2>
                <p className="text-white/60 font-sans mb-8">
                    We encountered an unexpected anomaly while processing your request. Our engineers have been notified.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="bg-brand-orange text-white font-oswald font-black uppercase tracking-widest px-6 py-3 hover:bg-brand-orange-hover transition-colors rounded-sm"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="bg-white/5 text-white border border-white/10 font-oswald font-black uppercase tracking-widest px-6 py-3 hover:bg-white/10 transition-colors rounded-sm"
                    >
                        Return to Base
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
