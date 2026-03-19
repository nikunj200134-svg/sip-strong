'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import { shopProducts } from '@/data/products';

export default function WheyProteinPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return shopProducts.filter(product => {
      const matchesCategory = product.category === 'Whey Protein';
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="bg-[#050505] min-h-screen pb-24 border-t border-white/5 pt-12">
      {/* Page Header */}
      <div className="py-16 sm:py-20 text-center relative overflow-hidden mb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/5 blur-[120px] rounded-full" />
        <ScrollReveal animation="reveal">
          <h1 className="font-oswald text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white font-black mb-4 relative z-10">
            WHEY <span className="text-brand-orange">PROTEIN</span>
          </h1>
          <p className="font-sans text-white/40 tracking-wide text-sm sm:text-base max-w-2xl mx-auto px-4 leading-relaxed relative z-10">
            Premium whey protein isolate for maximum muscle recovery and growth.
          </p>
        </ScrollReveal>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-orange transition-colors"
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
