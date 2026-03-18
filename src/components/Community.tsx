'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Community = () => {
    const router = useRouter();
    return (
        <section className="relative py-32 bg-[#000000] overflow-hidden border-t border-white/10">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
            >
                <motion.h2 variants={fadeInUp} className="font-oswald text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
                    WE DON&apos;T JUST SUPPLY THE FUEL. <span className="text-brand-orange">WE GIVE YOU THE BLUEPRINT.</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="font-sans text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12">
                    Supplements won&apos;t do the work for you. Building an elite, resilient physique demands targeted stress and structured recovery. The SipStrong Training Portal gives you direct access to the exact hypertrophy, power, and conditioning protocols used by our top athletes. Stop guessing your programming—execute the blueprint.
                </motion.p>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-8 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors">
                        <h3 className="font-oswald text-2xl text-white uppercase tracking-wide mb-3">SipStrong Gain</h3>
                        <p className="text-white/60 font-sans text-sm">12-week science-based hypertrophy and mass building protocols.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-8 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors">
                        <h3 className="font-oswald text-2xl text-white uppercase tracking-wide mb-3">SipStrong Train</h3>
                        <p className="text-white/60 font-sans text-sm">Optimize your VO2 max, lactate threshold, and overall conditioning.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-8 border border-white/10 rounded-sm hover:border-brand-orange/50 transition-colors">
                        <h3 className="font-oswald text-2xl text-white uppercase tracking-wide mb-3">SipStrong Elite</h3>
                        <p className="text-white/60 font-sans text-sm">Advanced peaking blocks for powerlifters and elite hybrid athletes.</p>
                    </div>
                </motion.div>

                <motion.button
                    onClick={() => router.push('/training')}
                    variants={fadeInUp}
                    whileTap={{ scale: 0.98 }}
                    className="bg-brand-orange text-white hover:bg-brand-orange-hover px-10 py-4 rounded-sm font-oswald uppercase tracking-wider text-xl font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,69,0,0.3)]"
                >
                    UNLOCK THE PROTOCOLS
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Community;
