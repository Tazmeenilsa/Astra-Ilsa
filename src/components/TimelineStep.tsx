import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';



interface TimelineStepProps {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
    totalSteps: number;
}

export const TimelineStep: React.FC<TimelineStepProps> = memo(({ icon: Icon, title, description, index, totalSteps }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const stepVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={stepVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-start w-full my-6 md:my-8 max-w-4xl mx-auto"
        >
            {/* Timeline Line & Icon (Left Side) */}
            <div className="flex flex-col items-center mr-6 md:mr-10 shrink-0 relative">
                <div className="relative p-3 rounded-full bg-kylaris-primary/20 border border-kylaris-primary/50 z-10">
                    <Icon className="w-6 h-6 text-kylaris-primary drop-shadow-[0_0_8px_rgba(0,240,255,1)]" />
                </div>
                {/* Vertical Line - connects the steps */}
                {index < totalSteps - 1 && (
                    <div className="w-0.5 h-full bg-kylaris-primary/30 absolute top-12 left-1/2 -translate-x-1/2 -z-0"></div>
                )}
            </div>

            {/* Content (Right Side) */}
            <div className="w-full p-6 rounded-xl border border-white/10 bg-black/40 hover:bg-black/50 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-kylaris-secondary/70">{description}</p>
            </div>

        </motion.div>
    );
});
