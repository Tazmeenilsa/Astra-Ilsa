import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Waves, Globe } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import galaxyImg from '../assets/galaxy.png';

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
            {/* background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={galaxyImg}
                    alt="Galaxy Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gray-950/80"></div>
            </div>
            <div className="max-w-7xl mx-auto text-center relative z-10">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 text-white text-shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                    KY'LARIS : THE CRYSTALLINE HEART
                </motion.h2>

                {/* Subtitle */}
                {/* Subtitle - UPDATED to cover Environment and Climate */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl text-kylaris-primary mb-16 max-w-3xl mx-auto"
                >
                    Experience the <span className='font-bold '>permanent twilight environment</span> and <span className='font-bold'>stable, mild climate</span>.
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