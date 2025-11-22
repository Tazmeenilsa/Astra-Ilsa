import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 ">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-linear-to-r from-kylaris-primary to-kylaris-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
                        <div className="relative bg-black rounded-full p-2 border border-white/10">
                            <Rocket className="w-6 h-6 text-kylaris-primary group-hover:text-kylaris-accent transition-colors duration-300" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-display font-bold tracking-[0.2em] text-transparent bg-clip-text bg-linear-to-r from-kylaris-primary via-white to-kylaris-accent drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] leading-none">
                            ASTRA<span className="text-kylaris-secondary">ILSA</span>
                        </span>
                        <span className="text-[10px] font-display tracking-[0.4em] text-kylaris-secondary/80 uppercase text-center">
                            Innovating the Infinite
                        </span>
                    </div>
                </motion.div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-8 p-5 border-b border-white/10 bg-black/20  rounded-full">
                    {['Home', `Ky'laris Lore`, 'Voyages', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-kylaris-secondary/80 hover:text-kylaris-primary transition-colors duration-300 text-sm uppercase tracking-widest">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-kylaris-secondary hover:text-kylaris-primary transition-colors">
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={toggleMenu}
                                    className="text-kylaris-secondary/80 hover:text-kylaris-primary text-lg uppercase tracking-widest transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
