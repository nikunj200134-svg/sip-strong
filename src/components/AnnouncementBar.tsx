'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "FREE SHIPPING ON ORDERS OVER £50",
    "ORDER IN NEXT 2H 45M FOR SAME DAY DISPATCH",
    "JOIN 10,000+ ATHLETES FUELED BY SIPSTRONG"
];

const AnnouncementBar = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-brand-orange w-full h-10 flex items-center justify-center overflow-hidden relative z-[100]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center space-x-2"
                >
                    <span className="font-oswald text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white text-center px-4">
                        {messages[index]}
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default AnnouncementBar;
