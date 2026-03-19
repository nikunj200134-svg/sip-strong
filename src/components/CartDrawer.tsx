'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { CartItem } from '@/types/cart';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isLight: boolean;
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, isLight, cartItems, setCartItems }) => {
    // Calculate Total manually using simple string replacement (assumes £ format)
    const cartTotal = cartItems.reduce((total, item) => {
        const numericPrice = parseFloat(item.price.replace('£', ''));
        return total + (numericPrice * item.quantity);
    }, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className={`fixed top-0 right-0 h-full w-full max-w-md border-l z-[70] flex flex-col ${isLight ? 'bg-white border-black/10' : 'bg-[#0B0B0B] border-white/10'}`}
                    >
                        <div className={`flex items-center justify-between p-6 border-b ${isLight ? 'border-black/10 text-black' : 'border-white/10 text-white'}`}>
                            <h2 className="font-oswald text-2xl uppercase tracking-widest">Your Cart</h2>
                            <button onClick={onClose} className={`transition-colors ${isLight ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-brand-orange'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-6" data-lenis-prevent="true" style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>
                            {cartItems.length === 0 ? (
                                <div className="flex-1 flex items-center justify-center">
                                    <p className={`text-center font-sans ${isLight ? 'text-black/50' : 'text-white/50'}`}>Your cart is currently empty.</p>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <div className="relative w-20 h-20 flex-shrink-0">
                                            <Image src={item.image} alt={item.title} fill className="object-cover border border-white/10 rounded-sm bg-black" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`font-sans font-bold text-sm uppercase ${isLight ? 'text-black' : 'text-white'}`}>{item.title}</h3>
                                            <p className="text-brand-orange font-bold text-sm">{item.price}</p>
                                        </div>
                                        <div className={`flex items-center border rounded-sm ${isLight ? 'border-black/20 text-black' : 'border-white/20 text-white'}`}>
                                            <button
                                                onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i).filter(i => i.quantity > 0))}
                                                className="px-2 py-1 opacity-70 hover:opacity-100"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 text-sm font-bold font-sans">{item.quantity}</span>
                                            <button
                                                onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))}
                                                className="px-2 py-1 opacity-70 hover:opacity-100"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className={`p-6 border-t ${isLight ? 'border-black/10 bg-gray-50' : 'border-white/10 bg-black'}`}>
                            {cartItems.length > 0 && (
                                <div className={`flex justify-between items-center mb-4 ${isLight ? 'text-black' : 'text-white'}`}>
                                    <span className="font-oswald uppercase tracking-widest text-sm">Subtotal</span>
                                    <span className="font-sans font-bold">£{cartTotal.toFixed(2)}</span>
                                </div>
                            )}
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    if (cartItems.length > 0) {
                                        window.open('https://rzp.io/l/placeholder', '_blank');
                                    }
                                }}
                                className={`w-full py-4 font-oswald uppercase tracking-wider text-lg font-bold transition-colors ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed bg-gray-600 text-white' : (isLight ? 'bg-black text-white hover:bg-black/80' : 'bg-brand-orange hover:bg-brand-orange-hover text-white')}`}
                            >
                                {cartItems.length === 0 ? 'Checkout' : 'Checkout via Direct Link'}
                            </motion.button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
