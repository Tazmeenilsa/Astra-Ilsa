import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const BookingCTA: React.FC = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-black relative z-10">
            <div className="max-w-4xl mx-auto text-center border-t border-b border-kylaris-accent/30 py-16">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Mail className="w-12 h-12 text-kylaris-accent mx-auto mb-4 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]" />

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                        READY TO BEGIN YOUR VOYAGE?
                    </h2>

                    <p className="text-xl text-kylaris-primary/80 mb-10 max-w-2xl mx-auto">
                        Astra-Ilsa's mission specialists are on standby. Submit your details, and we'll confirm your reservation within one solar cycle.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="flex-grow p-3 rounded-full bg-white/10 border border-kylaris-primary/50 text-white placeholder-kylaris-secondary/70 focus:ring-2 focus:ring-kylaris-accent transition-all duration-300"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full md:w-auto px-8 py-3 rounded-full bg-kylaris-accent text-black font-bold uppercase tracking-widest flex items-center justify-center transition-all duration-300 shadow-lg shadow-kylaris-accent/40"
                        >
                            <Send className="w-4 h-4 mr-2" /> Book Now
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BookingCTA;