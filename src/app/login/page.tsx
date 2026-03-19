/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// --- 1. Environment Setup & Initialization ---
// Firebase Config loaded from environment variables (Vercel)
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Validate Firebase config - all fields must be present for production
const isFirebaseConfigured = Object.values(firebaseConfig).every(value => value && typeof value === 'string' && value !== '');

// Initialize Firebase safely
let app: any;
let auth: any;

if (isFirebaseConfigured) {
    try {
        app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
        auth = getAuth(app);
    } catch (error) {
        console.error('Failed to initialize Firebase:', error);
    }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function LoginPage() {
    const router = useRouter();

    // Login State
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Register State
    const [regFirstName, setRegFirstName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [regError, setRegError] = useState('');

    // --- 4. Session Management ---
    useEffect(() => {
        if (!isFirebaseConfigured || !auth) {
            console.warn('Firebase not properly configured');
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // If a user is already logged in, redirect them immediately to the shop
                router.push('/shop');
            }
        });
        return () => unsubscribe();
    }, [router]);

    // --- 3. Login Logic (The 'Member Login' Form) ---
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');

        if (!isFirebaseConfigured || !auth) {
            setLoginError('Authentication service is not configured. Please try again later.');
            return;
        }

        setIsLoggingIn(true);

        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            router.push('/shop');
        } catch (error: unknown) {
            console.error(error);
            const firebaseError = error as { code?: string };
            // Provide clean error feedback based on common Firebase codes
            if (firebaseError.code === 'auth/wrong-password' || firebaseError.code === 'auth/user-not-found' || firebaseError.code === 'auth/invalid-credential') {
                setLoginError('Incorrect email or password. Please try again.');
            } else {
                setLoginError('Failed to login. Please ensure your credentials are correct.');
            }
        } finally {
            setIsLoggingIn(false);
        }
    };

    // --- 2. Registration Logic (The 'Join Us' Form) ---
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setRegError('');

        if (!isFirebaseConfigured || !auth) {
            setRegError('Authentication service is not configured. Please try again later.');
            return;
        }

        setIsRegistering(true);

        try {
            await createUserWithEmailAndPassword(auth, regEmail, regPassword);

            // Set the Discount Flag in localStorage as requested!
            if (typeof window !== 'undefined') {
                localStorage.setItem('sipstrong_discount_eligible', 'true');
            }

            // Redirect to shop
            router.push('/shop');
        } catch (error: unknown) {
            console.error(error);
            const firebaseError = error as { code?: string };
            if (firebaseError.code === 'auth/email-already-in-use') {
                setRegError('This email is already in use. Try logging in.');
            } else if (firebaseError.code === 'auth/weak-password') {
                setRegError('Password must be at least 6 characters.');
            } else {
                setRegError('Failed to create account. Please try again.');
            }
        } finally {
            setIsRegistering(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0B0B0B] flex flex-col md:flex-row w-full font-sans text-white">

            {/* LEFT COLUMN: The 'Login' Portal */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32 border-b md:border-b-0 md:border-r border-white/10 relative"
            >
                <motion.div variants={fadeInUp} className="max-w-md w-full mx-auto">
                    <h1 className="font-oswald text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">MEMBER LOGIN</h1>
                    <p className="text-xs text-brand-orange/80 mt-2">Made in India</p>

                    {loginError && (
                        <div className="mb-6 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm font-medium rounded-sm">
                            {loginError}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider text-xs">Email Address</label>
                            <input
                                type="email"
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                className="w-full bg-[#1A1A1A] border border-transparent focus:border-brand-orange text-white rounded-sm px-4 py-3 transition-colors outline-none font-sans"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-white/70 uppercase tracking-wider text-xs">Password</label>
                                <a href="#" className="text-xs text-brand-orange hover:text-white transition-colors">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                className="w-full bg-[#1A1A1A] border border-transparent focus:border-brand-orange text-white rounded-sm px-4 py-3 transition-colors outline-none font-sans"
                            />
                        </div>

                        <motion.button
                            whileTap={!isLoggingIn ? { scale: 0.98 } : {}}
                            disabled={isLoggingIn}
                            type="submit"
                            className={`w-full bg-white hover:bg-gray-200 text-black border border-white/10 font-oswald uppercase tracking-widest text-lg font-bold py-4 rounded-sm transition-colors mt-8 ${isLoggingIn ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isLoggingIn ? 'LOGGING IN...' : 'LOGIN'}
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: The 'Join Us' Offer */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32 bg-[#000000] relative overflow-hidden"
            >
                {/* Subtle Orange Glow Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

                <motion.div variants={fadeInUp} className="max-w-md w-full mx-auto relative z-10">
                    <h1 className="font-oswald text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-brand-orange">
                        JOIN THE SIPSTRONG ELITE
                    </h1>
                    <p className="text-xs text-brand-orange/80 mt-2">Made in India</p>
                    <ul className="mb-8 space-y-4 text-white/80 font-sans">
                        <li className="flex items-start gap-3">
                            <span className="text-xl">🔓</span>
                            <span>Unlock <strong>15% off</strong> your first order today.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-xl">🏋️‍♂️</span>
                            <span>Free access to the <strong>SipStrong Training Blueprint</strong>.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-xl">🚀</span>
                            <span>Early access to new flavor drops and apparel.</span>
                        </li>
                    </ul>

                    {regError && (
                        <div className="mb-6 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm font-medium rounded-sm">
                            {regError}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleRegister}>
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider text-xs">First Name</label>
                            <input
                                type="text"
                                required
                                value={regFirstName}
                                onChange={(e) => setRegFirstName(e.target.value)}
                                className="w-full bg-[#1A1A1A] border border-transparent focus:border-brand-orange text-white rounded-sm px-4 py-3 transition-colors outline-none font-sans"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider text-xs">Email Address</label>
                            <input
                                type="email"
                                required
                                value={regEmail}
                                onChange={(e) => setRegEmail(e.target.value)}
                                className="w-full bg-[#1A1A1A] border border-transparent focus:border-brand-orange text-white rounded-sm px-4 py-3 transition-colors outline-none font-sans"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider text-xs">Password</label>
                            <input
                                type="password"
                                required
                                value={regPassword}
                                onChange={(e) => setRegPassword(e.target.value)}
                                className="w-full bg-[#1A1A1A] border border-transparent focus:border-brand-orange text-white rounded-sm px-4 py-3 transition-colors outline-none font-sans"
                            />
                        </div>

                        <motion.button
                            whileHover={!isRegistering ? { scale: 1.05 } : {}}
                            whileTap={!isRegistering ? { scale: 0.98 } : {}}
                            disabled={isRegistering}
                            type="submit"
                            className={`w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-oswald uppercase tracking-widest text-lg font-bold py-4 rounded-sm transition-transform shadow-[0_0_20px_rgba(255,69,0,0.4)] mt-8 ${isRegistering ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isRegistering ? 'CREATING...' : 'CREATE ACCOUNT & CLAIM 15% OFF'}
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}
