'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './PouchCard';

const products = [
    {
        id: 1,
        title: 'Double Chocolate',
        flavor: 'Rich & Creamy',
        protein: '25G',
        price: '£34.99',
        color: '#3E2723'
    },
    {
        id: 2,
        title: 'Vanilla Bean',
        flavor: 'Smooth & Natural',
        protein: '25G',
        price: '£34.99',
        color: '#FFF8E1'
    },
    {
        id: 3,
        title: 'Strawberry Smash',
        flavor: 'Fruity & Intense',
        protein: '25G',
        price: '£34.99',
        color: '#FFCDD2'
    },
    {
        id: 4,
        title: 'Pistachio Blast',
        flavor: 'Gourmet & Nutty',
        protein: '25G',
        price: '£36.99',
        color: '#A5D6A7'
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const revealItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
};

const ProductShowcase = () => {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.span variants={revealItem} className="font-oswald text-brand-orange uppercase text-sm font-bold tracking-[0.2em] mb-4">
                        The Arsenal
                    </motion.span>
                    <motion.h2 variants={revealItem} className="font-oswald text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
                        Fuel Your Ambition
                    </motion.h2>
                    <motion.p variants={revealItem} className="font-sans text-white/50 max-w-xl text-lg lg:text-xl">
                        Precision-engineered protein pouches designed for the unrelenting athlete. No mess, no compromise.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={revealItem}>
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;
