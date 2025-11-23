import React from 'react';
import { ShieldCheck, Zap, Heart } from 'lucide-react';



const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-kylaris-primary/20 pt-10 pb-4 relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Safety Information */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-kylaris-secondary/70 mb-8 px-4">
                    <ShieldCheck className="w-5 h-5 text-kylaris-accent flex-shrink-0" />
                    <p className="text-sm font-medium text-center md:text-left">
                        <span className="font-semibold">Astra-Ilsa:</span> All voyages are secured by redundant{' '}
                        <span className="font-bold text-kylaris-primary">Ky'larite Shielding</span> and supervised by{' '}
                        <span className="font-bold text-kylaris-primary">AI Flight Commander ILSA</span>.
                        <span className="block sm:inline"> Your safety is paramount.</span>
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