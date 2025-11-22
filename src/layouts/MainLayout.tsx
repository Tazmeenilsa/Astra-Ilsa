import React, { type ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Aurora from '../components/Aurora';
import Particles from '../components/Particles';
import Galaxy from '../components/Galaxy';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
            {/* Aurora Background - 50% height */}
            <div className="absolute top-0 left-0 w-full h-[30vh] z-1">
                <Aurora
                    colorStops={["#00f0ff", "#e0f2fe", "#d946ef"]}
                    blend={0.3}
                    amplitude={1.0}
                    speed={0.5}
                    className="w-full h-full"
                />
            </div>



            {/* <div className='absolute top-0 left-0 w-full h-[600px] z-0 pointer-events-none'>
                <Galaxy
                    mouseRepulsion={false}
                    mouseInteraction={false}
                    density={1.2}
                    glowIntensity={0.3}
                    saturation={0.6}
                    hueShift={150}
                    starSpeed={0.5}
                />
            </div> */}

            {/* Content */}
            <div className="relative z-1">
                <Navbar />
                {/* <main className="pt-20"> */}
                {children}
                {/* </main> */}
            </div>
        </div>
    );
};

export default MainLayout;
