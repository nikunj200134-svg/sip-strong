'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center p-4">
            <div className="relative w-24 h-24 mb-8">
                {/* Rhombus element */}
                <motion.div
                    className="absolute inset-0 border-2 border-brand-orange transform rotate-45"
                    animate={{ rotate: [45, 135, 225, 315, 405] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                {/* Pulse inner circle */}
                <motion.div
                    className="absolute inset-4 bg-brand-orange/20 rounded-full border border-brand-orange/40"
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="font-oswald text-xl font-black uppercase tracking-[0.5em] text-white mb-2">
                    SipStrong
                </h2>
                <p className="font-oswald text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Syncing Performance Data...
                </p>
            </motion.div>
        </div>
    );
}
