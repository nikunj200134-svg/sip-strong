"use client";

import React from 'react';
import styles from './HeroAnimation.module.scss';
import { motion } from 'framer-motion';

const HeroAnimation = () => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.stage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles['ground-line']}>
                    <div>
                        <span className={styles.line1}></span>
                        <span className={styles.line2}></span>
                        <span className={styles.line3}></span>
                    </div>
                </div>

                <div className={styles['tree-wrap']}>
                    <div className={styles.tree}>
                        <div className={styles.stem}>
                            <div className={`${styles.branch} ${styles.branch1}`}></div>
                            <div className={`${styles.branch} ${styles.branch2}`}></div>
                            <div className={`${styles.branch} ${styles.branch3}`}></div>
                        </div>
                        <div className={`${styles.leef} ${styles.leef1}`}></div>
                        <div className={`${styles.leef} ${styles.leef2}`}></div>
                    </div>
                </div>

                <div className={styles['vehicle-body']}>
                    <div className={styles['wrap-body']}>
                        <div className={styles['body-cover']}>
                            <div className={styles['top-roof']}></div>
                            <div className={`${styles.rooftop} ${styles.back}`}></div>
                            <div className={`${styles.rooftop} ${styles.front}`}></div>

                            <div className={styles['side-guard']}>
                                <div className={styles.shade}></div>
                                <div className={`${styles.bumper} ${styles.back}`}></div>
                                <div className={`${styles.bumper} ${styles.front}`}></div>
                                <div className={styles['front-indicator']}></div>
                            </div>

                            <div className={`${styles.indi} ${styles['back-top-indicator']}`}></div>
                            <div className={`${styles.indi} ${styles['back-bottom-indicator']}`}></div>

                            <div className={styles['back-window']}>
                                <div className={`${styles['window-base']} ${styles.top}`}></div>
                                <div className={styles['sun-shade']}></div>
                                <div className={styles.curtain}>
                                    {[...Array(8)].map((_, i) => <span key={`curtain-b-${i}`}></span>)}
                                </div>
                                <div className={styles['windows-glass-wrap']}>
                                    <div className={styles.glass}>
                                        <div className={styles.light}>
                                            <span className={styles.light1}></span>
                                            <span className={styles.light2}></span>
                                            <span className={styles.light3}></span>
                                        </div>
                                    </div>
                                    <div className={styles.glass}>
                                        <div className={styles.light}>
                                            <span className={styles.light1}></span>
                                            <span className={styles.light2}></span>
                                            <span className={styles.light3}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles['window-base']} ${styles.bottom}`}></div>
                            </div>

                            <div className={styles['main-door']}>
                                <div className={styles.glass}>
                                    <div className={styles.light}>
                                        <span className={styles.light1}></span>
                                        <span className={styles.light2}></span>
                                    </div>
                                </div>
                                <div className={styles['door-handle']}></div>
                            </div>

                            <div className={styles['front-window']}>
                                <div className={styles['window-base']}></div>
                                <div className={styles['sun-shade']}></div>
                                <div className={styles.curtain}>
                                    {[...Array(3)].map((_, i) => <span key={`curtain-f-${i}`}></span>)}
                                </div>
                                <div className={styles['windows-glass-wrap']}>
                                    <div className={styles.light}>
                                        <span className={styles.light1}></span>
                                        <span className={styles.light2}></span>
                                        <span className={styles.light3}></span>
                                    </div>
                                </div>
                                <div className={styles['air-hole']}>
                                    {[...Array(5)].map((_, i) => <span key={`airhole-${i}`}></span>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['wheel-wrap']} ${styles.back}`}>
                        <div className={styles['wheel-shadow']}></div>
                        <div className={styles.wheel}>
                            <div className={styles['wheel-outer']}></div>
                            <div className={styles['wheel-cup']}>
                                {[...Array(4)].map((_, i) => <span key={`cup-b-${i}`}></span>)}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['wheel-wrap']} ${styles.front}`}>
                        <div className={styles['wheel-shadow']}></div>
                        <div className={styles.wheel}>
                            <div className={styles['wheel-outer']}></div>
                            <div className={styles['wheel-cup']}>
                                {[...Array(4)].map((_, i) => <span key={`cup-f-${i}`}></span>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles['love-front']}>
                    {[...Array(12)].map((_, i) => (
                        <div key={`love-f-${i}`} className={styles['love-container']}>
                            <div className={styles['love-wrap']}>
                                <div className={styles.love}>
                                    <div className={`${styles.circle} ${styles.circle1}`}></div>
                                    <div className={`${styles.circle} ${styles.circle2}`}></div>
                                    <div className={styles.square}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles['love-back']}>
                    {[...Array(8)].map((_, i) => (
                        <div key={`love-b-${i}`} className={styles['love-container']}>
                            <div className={styles['love-wrap']}>
                                <div className={styles.love}>
                                    <div className={`${styles.circle} ${styles.circle1}`}></div>
                                    <div className={`${styles.circle} ${styles.circle2}`}></div>
                                    <div className={styles.square}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default HeroAnimation;
