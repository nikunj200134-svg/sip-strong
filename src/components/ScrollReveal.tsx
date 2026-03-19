/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'reveal' | 'fade' | 'scale' | 'none';
    delay?: number;
    threshold?: number;
    once?: boolean;
    className?: string;
    duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'reveal',
    delay = 0,
    threshold = 0.1,
    once = true,
    className = '',
    duration = 0.8
}) => {

    const variants = {
        reveal: {
            hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
            visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] as any }
            }
        },
        fade: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { duration, delay: delay / 1000, ease: "easeOut" as any }
            }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.95, y: 10 },
            visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] as any }
            }
        },
        none: {
            hidden: {},
            visible: {}
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
