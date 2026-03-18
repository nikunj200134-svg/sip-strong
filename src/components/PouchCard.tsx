'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface PouchCardProps {
    id: number;
    title: string;
    price: string;
    flavor: string;
    protein: string;
    color?: string;
}

const PouchCard: React.FC<PouchCardProps> = ({ id, title, price, flavor, protein, color = '#FF4500' }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-surface rounded-md border border-white/10 overflow-hidden shadow-default transition-shadow hover:shadow-glow-primary group flex flex-col h-full"
        >
            {/* Image Wrapper */}
            <div className="h-64 bg-surface-light flex items-center justify-center relative overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative z-10 w-32 h-44 rounded-[10px_10px_5px_5px] shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5),5px_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center p-4 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${color}, #1a1a1a)` }}
                >
                    <div className="absolute top-[-5px] w-6 h-3 bg-[#333] rounded-[3px_3px_0_0]" />
                    <span className="font-oswald text-4xl font-black text-white/90">S</span>
                </motion.div>

                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="font-oswald text-[10px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-sm tracking-widest uppercase">
                        {protein} PROTEIN
                    </span>
                </div>

                <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-tight mb-1">
                    {title}
                </h3>

                <p className="font-sans text-sm text-white/50 mb-4 font-medium uppercase tracking-wider">
                    {flavor}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="font-sans font-black text-white text-lg">
                        {price}
                    </span>
                    <Button
                        variant="outline"
                        onClick={() => {
                            window.dispatchEvent(new CustomEvent('add-to-cart', {
                                detail: { id: id, title: title, price: price, image: '' }
                            }));
                        }}
                        className="text-white border-white/20 hover:border-brand-orange py-2 px-4 text-xs group-hover:bg-brand-orange group-hover:border-brand-orange"
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default PouchCard;
