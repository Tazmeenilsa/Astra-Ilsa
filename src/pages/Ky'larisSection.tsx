import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Waves, Globe } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const KyLarisFeatures: React.FC = () => {
    const features = [
        {
            icon: Sparkles,
            title: "Ky'larite Spires",
            description: "Towering crystal formations that draw raw power from the cosmos. The source of all light and life on Ky'laris.",
            delay: 0,
        },
        {
            icon: Waves,
            title: "Luminescent Oceans",
            description: "Vast seas that pulse with a soft, neon glow. Experience deep-sea exploration in waters that are constantly illuminated.",
            delay: 0.2,
        },
        {
            icon: Globe,
            title: "Magnetic Auroras",
            description: "Continuous, slow-moving light shows in the atmosphere, creating an ever-changing spectacle that defies Earthly physics.",
            delay: 0.4,
        },
    ];

    return (
        <section id="about" className="py-24 px-6 bg-gray-950 relative z-10">
            <div className="max-w-7xl mx-auto text-center">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 text-white box-shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                    KY'LARIS : THE CRYSTALLINE HEART
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-kylaris-primary mb-16 max-w-3xl mx-auto"
                >
                    Discover the phenomena that redefine existence on the Crystalline Heart.
                </motion.p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={feature.delay}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default KyLarisFeatures;