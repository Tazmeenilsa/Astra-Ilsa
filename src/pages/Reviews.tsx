import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, MessageSquare } from 'lucide-react';

const reviewsData = [
    { 
        name: "Jaxen R. (Comet Class)", 
        text: "The Luminescent Oceans were beyond expectation. Astra-Ilsa's crew was impeccable. True five-star cosmic travel.", 
        stars: 5, 
        delay: 0 
    },
    { 
        name: "Lyra V. (Nova Premier)", 
        text: "ILSA, the AI Guide, was revolutionary. Unlimited energy access and the Aurora Flight were worth every credit. Highly recommend the Premier tier.", 
        stars: 5, 
        delay: 0.2 
    },
    { 
        name: "Kael T. (Stardust Class)", 
        text: "An affordable yet transformative experience. The Spires Tour felt like stepping into another dimension. A mission successfully completed.", 
        stars: 4, 
        delay: 0.4 
    },
];

const ReviewCard: React.FC<{ name: string, text: string, stars: number, delay: number }> = ({ name, text, stars, delay }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay } }
    };
    
    const starArray = Array(stars).fill(0);

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-6 rounded-xl border border-kylaris-accent/20 bg-black/40 backdrop-blur-sm shadow-2xl space-y-3"
        >
            <div className="flex justify-start space-x-1 mb-2">
                {starArray.map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-kylaris-accent fill-kylaris-accent" />
                ))}
            </div>
            <p className="italic text-white/90">"{text}"</p>
            <p className="text-sm font-bold text-kylaris-primary/80 pt-2 border-t border-white/10">{name}</p>
        </motion.div>
    );
};

const TravelerReviews: React.FC = () => {
    return (
        <section id="reviews" className="py-24 px-6 bg-gray-950 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
                
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                >
                    VOYAGER ENDORSEMENTS
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-kylaris-accent mb-16 max-w-3xl mx-auto"
                >
                    Hear what previous space travelers had to say about their mission to Ky'laris aboard the Nova Fleet. 
                </motion.p>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviewsData.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default TravelerReviews;