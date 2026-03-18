'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';
import Image from 'next/image';

interface CompareModalProps {
    isOpen: boolean;
    onClose: () => void;
    products: Product[];
}

const CompareModal: React.FC<CompareModalProps> = ({ isOpen, onClose, products }) => {
    if (products.length === 0) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-6xl bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-8 border-b border-white/10 bg-white/[0.02]">
                            <div>
                                <h2 className="font-oswald text-3xl font-black text-white uppercase tracking-tighter">Compare Arsenal</h2>
                                <p className="text-white/40 text-[10px] font-oswald font-black uppercase tracking-widest mt-1">Side-by-side performance analysis</p>
                            </div>
                            <button onClick={onClose} className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-brand-orange hover:border-brand-orange transition-all group">
                                <span className="text-white group-hover:scale-110 transition-transform">✕</span>
                            </button>
                        </div>

                        {/* Comparison Table */}
                        <div className="flex-1 overflow-auto p-8">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-6 px-4 border-b border-white/5 bg-white/[0.01] w-1/4">
                                            <span className="text-white/20 font-oswald text-[10px] font-black uppercase tracking-widest">Specifications</span>
                                        </th>
                                        {products.map(p => (
                                            <th key={p.id} className="py-6 px-6 border-b border-white/5 min-w-[200px]">
                                                <div className="flex flex-col gap-4">
                                                    <div className="aspect-square relative bg-white/5 border border-white/10 rounded-sm overflow-hidden w-24">
                                                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                                                    </div>
                                                    <h3 className="font-oswald text-lg font-black text-white uppercase leading-tight line-clamp-2">{p.title}</h3>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { label: 'Category', key: 'category' },
                                        { label: 'Price', key: 'price' },
                                        { label: 'Protein Content', key: 'protein' },
                                        { label: 'Flavor profile', key: 'flavor' },
                                        { label: 'User Rating', key: 'rating', suffix: '/ 5.0' }
                                    ].map((row, idx) => (
                                        <tr key={row.label} className={idx % 2 === 0 ? 'bg-white/[0.01]' : ''}>
                                            <td className="py-6 px-4 border-b border-white/5">
                                                <span className="text-white/40 font-oswald text-[10px] font-black uppercase tracking-widest">{row.label}</span>
                                            </td>
                                            {products.map(p => (
                                                <td key={p.id} className="py-6 px-6 border-b border-white/5">
                                                    <span className="font-oswald text-sm font-bold text-white uppercase tracking-tight">
                                                        {(p as any)[row.key]} {row.suffix}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="py-8 px-4"></td>
                                        {products.map(p => (
                                            <td key={p.id} className="py-8 px-6">
                                                <button
                                                    onClick={() => {
                                                        window.dispatchEvent(new CustomEvent('add-to-cart', { detail: p }));
                                                        onClose();
                                                    }}
                                                    className="w-full bg-brand-orange text-white font-oswald font-black uppercase text-[10px] tracking-widest py-4 hover:bg-brand-orange-hover transition-all"
                                                >
                                                    Select Item
                                                </button>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CompareModal;
