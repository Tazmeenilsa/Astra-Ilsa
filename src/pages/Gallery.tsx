import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Image } from 'lucide-react';
import spires from '../assets/spires.png'
import ocean from '../assets/ocean.png'
import aurora from '../assets/aurora.png'
import ventenergy from '../assets/vent-energy.png'


const galleryImages = [
    {
        src: spires,
        alt: "Towering crystalline spires under a permanent twilight sky, illuminated by subtle auroras. A small futuristic craft flies past.",
        title: "Ky'larite Spires at Twilight",
        delay: 0
    },
    {
        src: ocean,
        alt: "The surface of a tranquil Luminescent Ocean, with neon blue and pink glows emanating from below the water. A distant Nova Fleet ship hovers above.",
        title: "Luminescent Ocean Surface",
        delay: 0.1
    },
    {
        src: aurora,
        alt: "An Astra-Ilsa Nova Fleet spacecraft gracefully navigating through vibrant Magnetic Auroras in Ky'laris' upper atmosphere.",
        title: "Aurora Flight Path",
        delay: 0.2
    },
    {
        src: ventenergy,
        alt: "The Heartbeat of Ky'laris. This rare view captures a pressurized Ky'larite Energy Vent surging from the planet's depths, emitting intense plumes of shimmering neon blue and magenta light.",
        title: "Ky'larite Energy Vent",
        delay: 0.3
    },
];

const GalleryItem: React.FC<{ src: string, alt: string, title: string, delay: number }> = ({ src, alt, title, delay }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: delay } }
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="overflow-hidden rounded-lg shadow-xl border border-kylaris-primary/20 hover:border-kylaris-accent/50 transition-all duration-300 group relative"
        >
           <div className="relative h-64 w-full overflow-hidden group">
                <img 
                    src={src} 
                    alt={alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                    <p className="text-kylaris-secondary text-sm">{alt}</p>
                </div>
            </div>
        </motion.div>
    );
};

const KyLarisGallery: React.FC = () => {
    return (
        <section id="gallery" className="py-24 px-6 bg-gray-950 relative z-10">
            <div className="max-w-7xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                    KY'LARIS: VIEWS FROM THE INFINITE
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-kylaris-primary/80 mb-16 max-w-3xl mx-auto"
                >
                    A curated collection of vistas captured by Nova Fleet travelers.
                </motion.p>

                {/* Gallery Grid (Adjust gap and columns as needed) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {galleryImages.map((image, index) => (
                        <GalleryItem key={index} {...image} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default KyLarisGallery;