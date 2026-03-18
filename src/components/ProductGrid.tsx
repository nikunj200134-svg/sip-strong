'use client';

import { useRouter } from 'next/navigation';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const dummyProducts = [
    {
        id: 1,
        title: 'Premium Whey Isolate',
        category: 'Recovery',
        price: '£45.00',
        badge: 'Best Seller',
        image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000&auto=format&fit=crop',
        lifestyleImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
        isBestSeller: true,
        stockCount: 12
    },
    {
        id: 2,
        title: 'Performance Hydration',
        category: 'Intra-Workout',
        price: '£30.00',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1579246849885-3bc55642d997?q=80&w=1000&auto=format&fit=crop',
        lifestyleImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop',
        stockCount: 8
    },
    {
        id: 3,
        title: 'Creapure® Creatine Monohydrate',
        category: 'Strength Building',
        price: '£25.00',
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
        lifestyleImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
        stockCount: 45
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProductGrid = () => {
    const router = useRouter();

    return (
        <section className="py-24 bg-[#000000]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#000000]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-end mb-16 border-b border-white/10 pb-6"
                >
                    <div className="bg-[#000000]">
                        <h2 className="font-oswald text-4xl md:text-5xl uppercase tracking-widest text-white font-bold mb-2">
                            AMMO FOR THE WORK
                        </h2>
                        <ul className="text-white/70 font-sans space-y-2 mt-4 max-w-2xl text-sm">
                            <li className="flex items-start gap-2"><svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> <span className="font-bold text-white uppercase">Clinical Dosing:</span> No proprietary blends. Dosed at the exact scientific threshold to trigger hypertrophy.</li>
                            <li className="flex items-start gap-2"><svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> <span className="font-bold text-white uppercase">Uncompromising Purity:</span> Banned-substance tested, perfectly soluble, and stripped of artificial junk.</li>
                            <li className="flex items-start gap-2"><svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> <span className="font-bold text-white uppercase">Maximum Recovery:</span> Formulated to mitigate systemic fatigue and spike muscle protein synthesis.</li>
                        </ul>
                    </div>
                    <button onClick={() => router.push('/shop')} className="hidden sm:block text-brand-orange hover:text-white font-oswald uppercase tracking-widest font-semibold transition-colors">
                        Acquire The Arsenal →
                    </button>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16"
                >
                    {dummyProducts.map((product) => (
                        <motion.div key={product.id} variants={fadeInUp}>
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile 'Shop All' Button */}
                <div className="mt-12 text-center sm:hidden">
                    <button onClick={() => router.push('/shop')} className="bg-brand-orange text-white px-8 py-3 rounded-sm font-oswald uppercase tracking-wider text-sm font-bold shadow-lg">
                        DEPLOY NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
