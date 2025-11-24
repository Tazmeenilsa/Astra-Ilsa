import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
    // Hook to trigger animation when the component enters the viewport
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center p-6 space-y-4 rounded-xl border border-kylaris-primary/20 bg-black/30 box-shadow-[0_0_25px_rgba(217,70,239,0.5)] transition-all duration-500 hover:border-kylaris-accent/50 hover:box-shadow-[0_0_25px_rgba(217,70,239,0.3)]"
        >
            <div className="p-3 rounded-full bg-kylaris-accent/20 border border-kylaris-accent/50">
                <Icon className="w-8 h-8 text-kylaris-accent box-shadow-[0_0_8px_rgba(217,70,239,1)]" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
            <p className="text-kylaris-secondary/70">{description}</p>
        </motion.div>
    );
};

export default FeatureCard;
