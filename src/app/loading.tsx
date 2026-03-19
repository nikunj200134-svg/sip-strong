import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-[80vh] bg-[#050505] flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Animated Loading Ring */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-t-2 border-brand-orange rounded-full animate-spin" />
                    <div className="absolute inset-2 border-r-2 border-white/20 rounded-full animate-spin direction-reverse" />
                    <div className="absolute inset-4 bg-brand-orange animate-pulse rounded-full opacity-20" />
                </div>

                <div className="flex flex-col items-center gap-2">
                    <h3 className="font-oswald text-2xl font-black text-white uppercase tracking-widest animate-pulse">
                        LOADING
                    </h3>
                    <span className="text-brand-orange font-oswald text-[10px] font-black uppercase tracking-[0.4em]">
                        OPTIMIZING PROTOCOLS
                    </span>
                </div>
            </div>
        </div>
    );
}
