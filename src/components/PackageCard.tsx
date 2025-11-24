import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, TrendingUp, Zap, ArrowRight } from 'lucide-react';



interface PackageCardProps {
    tier: 'Basic' | 'Standard' | 'Premium';
    title: string;
    price: string;
    features: string[];
    isHighlighted: boolean;
    delay: number;
}

export const PackageCard: React.FC<PackageCardProps> = ({ tier, title, price, features, isHighlighted, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: delay,
                ease: "easeOut" as const
            }
        }
    };

    const glowBorder = isHighlighted ?
        "border-kylaris-accent ring-4 ring-kylaris-accent/30  scale-[1.03]" :
        "border-white/10 hover:border-kylaris-primary/50";

    const buttonClass = isHighlighted ?
        "bg-kylaris-accent text-black hover:bg-kylaris-accent/80" :
        "bg-kylaris-primary/20 text-kylaris-primary hover:bg-kylaris-primary/40";

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`flex flex-col p-8 rounded-2xl bg-black/50 border ${glowBorder} transition-all duration-300 relative`}
        >
            {isHighlighted && (
                <div className="absolute top-0 right-0 bg-kylaris-accent text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    <TrendingUp className="w-3 h-3 inline mr-1" /> RECOMMENDED
                </div>
            )}

            <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-kylaris-secondary/70 uppercase text-sm mb-6">{tier} CLASS</p>

            <p className="text-5xl font-extrabold text-white mb-8 ">
                {price}
                <span className="text-xl font-normal text-kylaris-secondary/70 ml-2">/ PAX</span>
            </p>

            <ul className="flex-grow space-y-3 mb-10 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-kylaris-secondary">
                        <Star className="w-5 h-5 text-kylaris-primary flex-shrink-0 mt-1 mr-3" />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <motion.a
                href="#contact"
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.98 }}
                className={`mt-auto w-full  text-center py-3 px-0.5 rounded-full font-bold uppercase tracking-widest transition-all duration-300 ${buttonClass}`}
            >
                Book Your Starlight Seat <ArrowRight className="w-4 h-4 inline ml-1" />
            </motion.a>
        </motion.div>
    );
};
