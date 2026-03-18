"use client";

import React, { useEffect, useState } from 'react';
import styles from './IntroAnimation.module.css';

const IntroAnimation = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent scrolling while intro is visible
        document.body.style.overflow = 'hidden';

        // The animation name ends at 5.9s + 1.0s duration = 6.9s. 
        // Wait for 8 seconds before fully hiding it
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Restore scrolling after fade out
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 1000); // 1s for fadeOut transition
        }, 7500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className={`${styles.intro} ${!isVisible ? styles.fadeOut : ''}`}>
            <div className={styles.animation01}>
                <div className={styles.rhombus_small}></div>
                <div className={styles.rhombus}></div>

                <div className={styles.wave}>
                    <div className={styles.wave_wrapper}>
                        <div className={styles.wave_box}></div>
                    </div>
                </div>

                <div className={styles.animation_line_wrapper}>
                    <div className={`${styles.animation_line} ${styles.animation_line01}`}></div>
                    <div className={`${styles.animation_line_wrapper} ${styles.animation_line02_wrapper}`}>
                        <div className={`${styles.animation_line} ${styles.animation_line02}`}></div>
                    </div>
                    <div className={`${styles.animation_line} ${styles.animation_line03}`}></div>
                    <div className={`${styles.animation_line_wrapper} ${styles.animation_line04_wrapper}`}>
                        <div className={`${styles.animation_line} ${styles.animation_line04}`}></div>
                    </div>
                    <div className={`${styles.animation_line} ${styles.animation_line05}`}></div>
                    <div className={`${styles.animation_line_wrapper} ${styles.animation_line06_wrapper}`}>
                        <div className={`${styles.animation_line} ${styles.animation_line06}`}></div>
                    </div>
                    <div className={`${styles.animation_line} ${styles.animation_line07}`}></div>
                    <div className={`${styles.animation_line_wrapper} ${styles.animation_line08_wrapper}`}>
                        <div className={`${styles.animation_line} ${styles.animation_line08}`}></div>
                    </div>
                </div>

                <div className={styles.border_box}>
                    <div className={`${styles.line} ${styles.line01}`}></div>
                    <div className={`${styles.line} ${styles.line02}`}></div>
                    <div className={`${styles.line} ${styles.line03}`}></div>
                    <div className={`${styles.line} ${styles.line04}`}></div>
                    <div className={`${styles.circle} ${styles.circle01}`}></div>
                    <div className={`${styles.circle} ${styles.circle02}`}></div>
                    <div className={`${styles.circle} ${styles.circle03}`}></div>
                    <div className={`${styles.circle} ${styles.circle04}`}></div>
                </div>
            </div>

            <div className={styles.animation02}>
                <div className={styles.rhombus_box}>
                    <div className={`${styles.rhombus_item_wrapper} ${styles.rhombus_item01_wrapper}`}>
                        <div className={styles.rhombus_item}></div>
                    </div>
                    <div className={`${styles.rhombus_item_wrapper} ${styles.rhombus_item02_wrapper}`}>
                        <div className={styles.rhombus_item}></div>
                    </div>
                </div>

                <div className={styles.double_content}>
                    <div className={`${styles.double_wrapper02} ${styles.dotted02}`}>
                        <div className={styles.dotted_hide}>
                            <div className={`${styles.double_wrapper01} ${styles.dotted01}`}>
                                <div className={styles.dotted_right}></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.double_wrapper02} ${styles.white02}`}>
                        <div className={`${styles.double_wrapper01} ${styles.white01}`}></div>
                    </div>
                    <div className={`${styles.double_wrapper02} ${styles.gray02}`}>
                        <div className={`${styles.double_wrapper01} ${styles.gray01}`}></div>
                    </div>
                    <div className={`${styles.double_wrapper02} ${styles.orange02}`}>
                        <div className={`${styles.double_wrapper01} ${styles.orange01}`}></div>
                    </div>
                </div>

                <div className={styles.name}>
                    <p>SipStrong</p>
                    <span className={styles.name_circle01}></span>
                    <span className={styles.name_circle02}></span>
                </div>
            </div>
        </div>
    );
};

export default IntroAnimation;
