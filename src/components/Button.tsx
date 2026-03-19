'use client';

import React from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'ref'> {
    isLoading?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    isLoading = false,
    variant = 'primary',
    fullWidth = false,
    className = '',
    disabled,
    ...props
}, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        mouseX.set(x * 0.35);
        mouseY.set(y * 0.35);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const springConfig = { damping: 15, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const baseStyles = "relative inline-flex items-center justify-center font-oswald uppercase tracking-wider font-bold transition-all rounded-sm overflow-hidden min-h-[44px]";
    const variants = {
        primary: "bg-brand-orange text-white hover:bg-brand-orange-hover",
        secondary: "bg-black text-white hover:bg-black/80",
        outline: "bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
    };

    const widthClass = fullWidth ? "w-full" : "";
    const sizeClass = "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-[clamp(0.75rem,2vw,1rem)]";
    const disabledClass = isLoading || disabled ? "opacity-70 cursor-not-allowed" : "";

    return (
        <motion.button
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={!(isLoading || disabled) ? { scale: 0.98 } : {}}
            disabled={isLoading || disabled}
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${sizeClass} ${disabledClass} ${className}`}
            {...props}
        >
            <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
                {/* Loading Spinner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isLoading ? 1 : 0, scale: isLoading ? 1 : 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {isLoading && (
                        <svg className="animate-spin h-6 w-6 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    )}
                </motion.div>

                {/* Button Content */}
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 10 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
