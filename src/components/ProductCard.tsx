'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id: number;
    title: string;
    category: string;
    price: string;
    image: string;
    badge?: string;
    lifestyleImage?: string;
    theme?: 'light' | 'dark';
    stockCount?: number;
    isBestSeller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    category,
    price,
    image,
    badge,
    lifestyleImage,
    theme = 'dark',
    stockCount,
    isBestSeller
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 150 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    const isLight = theme === 'light';

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="group relative"
        >
            <Link href={`/product/${id}`} className="block">
                <div className={`relative overflow-hidden rounded-sm transition-all duration-500 ease-out border ${isLight ? 'border-black/10' : 'border-white/10'}`}>
                    {/* Shine Effect Overlay */}
                    <motion.div
                        style={{
                            background: useTransform(
                                [mouseX, mouseY],
                                ([xVal, yVal]: any[]) => `radial-gradient(circle at ${(xVal + 0.5) * 100}% ${(yVal + 0.5) * 100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                            ),
                        }}
                        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                        {badge && (
                            <span className="bg-brand-orange text-white text-[10px] font-oswald font-black uppercase tracking-widest px-3 py-1">
                                {badge}
                            </span>
                        )}
                        {isBestSeller && (
                            <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-white text-black text-[10px] font-oswald font-black uppercase tracking-widest px-3 py-1"
                            >
                                Best Seller
                            </motion.span>
                        )}
                    </div>

                    {/* Image Container */}
                    <div className="aspect-[4/5] relative bg-neutral-900 group-hover:cursor-pointer overflow-hidden">
                        {/* Primary Product Image */}
                        <motion.div
                            animate={{
                                scale: isHovered ? 1.05 : 1,
                                opacity: isHovered && lifestyleImage ? 0 : 1
                            }}
                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as any }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>

                        {/* Lifestyle Secondary Image on Hover */}
                        {lifestyleImage && (
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        key="lifestyle"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute inset-0 z-0"
                                    >
                                        <Image
                                            src={lifestyleImage}
                                            alt={`${title} Lifestyle`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}

                        {/* Overlay Gradient (Always present but intensifies on hover) */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'bg-black/20 opacity-100' : 'bg-black/5 opacity-50'}`} />

                        {/* Quick Add Button / Drawer Effect */}
                        <motion.button
                            initial={{ y: '100%' }}
                            animate={{ y: isHovered ? '0%' : '100%' }}
                            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
                            onClick={() => {
                                window.dispatchEvent(new CustomEvent('add-to-cart', {
                                    detail: { id: Math.random(), title, price, image }
                                }));
                            }}
                            className="absolute bottom-0 left-0 right-0 bg-white text-black font-oswald font-black uppercase text-sm py-4 tracking-widest hover:bg-brand-orange hover:text-white transition-colors z-30"
                        >
                            Quick Add +
                        </motion.button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="mt-6 space-y-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className={`text-[10px] font-black uppercase tracking-widest ${isLight ? 'text-black/50' : 'text-white/40'}`}>
                                {category}
                            </p>
                            <h3 className={`font-oswald text-lg font-bold uppercase tracking-tight leading-tight group-hover:text-brand-orange transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
                                {title}
                            </h3>
                        </div>
                        <p className={`font-oswald font-bold text-lg ${isLight ? 'text-black' : 'text-white'}`}>
                            {price}
                        </p>
                    </div>

                    {stockCount && stockCount < 20 && (
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(stockCount / 20) * 100}%` }}
                                    className="h-full bg-brand-orange"
                                />
                            </div>
                            <span className="text-[10px] font-oswald font-bold text-brand-orange uppercase">
                                Selling Fast: Only {stockCount} Left
                            </span>
                        </div>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
