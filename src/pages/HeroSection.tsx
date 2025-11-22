import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from '../components/Galaxy';

const HeroSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const welcomeVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" as const }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" as const }
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-5 relative overflow-hidden text-center z-10">
            <div className='absolute bottom-0 left-0 w-full h-[70vh] z-0 pointer-events-none'>
                <Galaxy
                    mouseRepulsion={false}
                    mouseInteraction={false}
                    density={0.3}
                    glowIntensity={0.2}
                    saturation={0.4}
                    hueShift={150}
                    starSpeed={0.2}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto flex flex-col items-center gap-2"
            >
                {/* Welcome Text - Left to Right Animation */}
                <motion.h2

                    variants={welcomeVariants}
                    className="text-kylaris-primary tracking-[0.5em] text-lg md:text-3xl uppercase font-bold mb-4"
                >
                    Welcome to
                </motion.h2>

                {/* Company Name - Huge */}
                <motion.h1
                    variants={titleVariants}
                    className="text-7xl md:text-8xl font-bold text-white leading-none font-display box-shadow-[0_0_40px_rgba(0,240,255,0.4)]"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-kylaris-primary via-white to-kylaris-accent">
                        ASTRA ILSA
                    </span>
                </motion.h1>

                {/* Slogan - Smaller */}
                <motion.h3
                    variants={itemVariants}
                    className="text-xl md:text-3xl font-light text-kylaris-secondary/90 tracking-widest mt-2"
                >
                    The Journey to Ky'laris
                </motion.h3>

                {/* Intro Text */}
                <motion.p
                    variants={itemVariants}
                    className="text-kylaris-secondary/70 text-base md:text-lg max-w-2xl leading-relaxed mt-8"
                >
                    Step into a universe where technology meets magic. Explore the crystalline landscapes, harness the energy of the cosmos, and redefine what is possible.
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 0.95, boxShadow: "0 0 30px rgba(217, 70, 239, 0.5)" }}
                    // whileTap={{ scale: 0.95 }}
                    className="mt-10 px-10 py-4 bg-transparent border border-kylaris-primary/50 text-kylaris-primary font-bold tracking-widest uppercase hover:will-change-transform hover:bg-kylaris-primary hover:text-black transition-all duration-300 rounded-full"
                >
                    Discover Ky'laris
                </motion.button>
            </motion.div>


        </section>
    );
};

export default HeroSection;
