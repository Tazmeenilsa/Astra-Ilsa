import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: "Ky'laris Lore", id: 'about' },
        { name: 'Voyages', id: 'services' },
        { name: 'Packages', id: 'packages' },
        { name: 'Gallery', id: 'gallery' },
        { name: 'Contact', id: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (const section of sections) {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            setIsOpen(false);

            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveSection(id);
            }, 100);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50  border-b border-white/10 bg-black/20  rounded-b-2xl backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group cursor-pointer"
                    onClick={(e) => scrollToSection(e as any, 'home')}
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-linear-to-r from-kylaris-primary to-kylaris-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
                        <div className="relative bg-black rounded-full p-2 border border-white/10">
                            <Rocket className="w-6 h-6 text-kylaris-primary group-hover:text-kylaris-accent transition-colors duration-300" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-display font-bold tracking-[0.2em] text-transparent bg-clip-text bg-linear-to-r from-kylaris-primary via-white to-kylaris-accent box-shadow-[0_0_10px_rgba(0,240,255,0.5)] leading-none">
                            ASTRA<span className="text-kylaris-secondary">ILSA</span>
                        </span>
                        <span className="text-[10px] font-display tracking-[0.4em] text-kylaris-secondary/80 uppercase text-center">
                            Innovating the Infinite
                        </span>
                    </div>
                </motion.div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-8 p-5 ">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className={`text-sm uppercase tracking-widest transition-all duration-350 relative group ${activeSection === item.id
                                ? 'text-kylaris-primary font-bold box-shadow-[0_0_8px_rgba(0,240,255,0.8)]'
                                : 'text-kylaris-secondary/70 hover:text-kylaris-secondary/90'
                                }`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-kylaris-secondary/80 transform origin-left transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`} />
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
                        className="md:hidden bg-black/90 rounded-xl border-b border-white/10 z-50 "
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        scrollToSection(e, item.id)
                                    }}
                                    className={`text-lg uppercase tracking-widest transition-colors ${activeSection === item.id
                                        ? 'text-kylaris-primary font-bold'
                                        : 'text-kylaris-secondary/80 hover:text-kylaris-primary'
                                        }`}
                                >
                                    {item.name}
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
