import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '../components/PackageCard';


const TravelPackages: React.FC = () => {
    const packagesData = [
        {
            tier: 'Basic' as const,
            title: "Stardust Class",
            price: "$149K",
            features: ["Standard Cryo-Sleep Pod", "Shared Observation Deck", "Pre-packaged Nutritional Meals", "One Ky'larite Spires Tour", "Basic Emergency Cover"],
            isHighlighted: false,
            delay: 0,
        },
        {
            tier: 'Standard' as const,
            title: "Comet Class",
            price: "$399K",
            features: ["Private Zero-G Cabin", "Dedicated Viewport Access", "Gourmet Planetary Cuisine", "All Ky'laris Signature Tours", "Advanced Life Support & Insurance"],
            isHighlighted: true,
            delay: 0.2,
        },
        {
            tier: 'Premium' as const,
            title: "Nova Premier",
            price: "$999K",
            features: ["Luxurious Private Suite", "Personalized AI Guide ('ILSA')", "Unlimited Energy Harvesting Access", "Exclusive Aurora Flight Experience", "Full Galactic Concierge Service"],
            isHighlighted: false,
            delay: 0.4,
        },
    ];

    return (
        <section id="packages" className="py-24 px-6 bg-gray-950 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                >
                    KY'LARIS MISSION PACKAGES
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-kylaris-accent mb-16 max-w-3xl mx-auto"
                >
                    Choose your seat among the stars. Every journey is secured by Astra-Ilsa's Nova Fleet technology.
                </motion.p>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {packagesData.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            {...pkg}

                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TravelPackages;