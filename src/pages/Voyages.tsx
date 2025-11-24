import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Plane, Zap, Satellite, Globe2, CheckCircle } from 'lucide-react';
import { TimelineStep } from '../components/TimelineStep';
import galaxyImg from '../assets/kylaris.png';

// Main Section Component
const Voyages = () => {
    const steps = [
        {
            icon: Zap,
            title: "Phase I: Sub-Warp Departure (Earth)",
            description: "Aboard the 'Nova Fleet', we utilize harnessed Ky'larite energy for a swift, stabilized departure from Earth's orbit, bypassing traditional thrust limitations.",
        },
        {
            icon: Satellite,
            title: "Phase II: Deep Cosmos Transit",
            description: "Enter autonomous deep-space cruise. Our advanced shielding protects against cosmic radiation while travelers enjoy zero-gravity luxury suites and stellar views.",
        },
        {
            icon: Globe2,
            title: "Phase III: Planetary Stabilization",
            description: "We navigate Ky'laris' dense magnetic fields, using unique frequency stabilizers to achieve a smooth, controlled descent into the crystalline atmosphere.",
        },
        {
            icon: Plane,
            title: "Phase IV: Lumina Landing",
            description: "Landing procedures initiated at the Sky-Port. The final descent offers breathtaking views of the Luminescent Oceans below.",
        },
        {
            icon: CheckCircle,
            title: "Destination Reached: Ky'laris",
            description: "Your journey is complete. Welcome to the Crystalline Heart of the Cosmos. Astra-Ilsa wishes you a transformative experience.",
        },
    ];

    return (
        <section id="services" className="py-24 px-6 bg-gray-950 relative z-10 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={galaxyImg}
                    alt="Galaxy Background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gray-950/80"></div> {/* Overlay for better text contrast */}
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 text-white text-shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                >
                    THE ASTRA-ILSA VOYAGE
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-kylaris-accent mb-16 max-w-3xl mx-auto"
                >
                    Innovating the Infinite: Your 30-Day Transit to the Crystalline Heart.
                </motion.p>
            </div>

            {/* Timeline Container */}
            <div className="max-w-6xl mx-auto relative flex flex-col items-start md:items-center z-10">

                {steps.map((step, index) => (
                    <TimelineStep
                        key={index}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                        index={index}
                        totalSteps={steps.length}
                    />
                ))}
            </div>

        </section>
    );
};

export default Voyages;