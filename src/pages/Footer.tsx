import React from 'react';
import { ShieldCheck, Zap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-kylaris-primary/20 pt-10 pb-4 relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Safety Information */}
                <div className="flex items-center justify-center gap-3 text-kylaris-secondary/70 mb-8">

                    <p className="flex gap-2 justify-center text-sm font-semibold">
                        <span><ShieldCheck className="w-5 h-5 text-kylaris-accent" /> </span>  Astra-Ilsa: All voyages are secured by redundant
                        <span className='font-bold text-kylaris-primary'>Ky'larite Shielding </span>
                        and  supervised by
                        <span className='font-bold text-kylaris-primary'> AI Flight Commander ILSA</span>.
                        Your safety is paramount.
                    </p>
                </div>

                {/* Copyright */}
                <p className="text-xs text-kylaris-secondary/50 mt-4">
                    &copy; 2475 Astra-Ilsa Corp. | Destination: Ky'laris.
                </p>
            </div>
        </footer>
    );
};

export default Footer;