import React, { lazy, Suspense, type ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Aurora from '../components/Aurora';

const LazyGalaxy = lazy(() => import('../components/Galaxy'));


interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
            {/* Aurora Background*/}
            <div className="absolute  top-0 left-0 w-full h-[40vh] z-1">
                <Aurora
                    colorStops={["#00f0ff", "#e0f2fe", "#d946ef"]}
                    blend={0.3}
                    amplitude={1.0}
                    speed={0.5}
                    className="w-full h-full"
                />
            </div>
            <div className="absolute top-80 left-0 w-full h-[40vh] z-1">

                <Suspense fallback={
                    <div className="w-full h-full bg-black/50" />
                }>
                    <LazyGalaxy
                        mouseRepulsion={false}
                        mouseInteraction={false}
                        density={0.3}
                        glowIntensity={0.2}
                        twinkleIntensity={0.2}
                        saturation={0.2}
                        starSpeed={0.2}
                    />
                </Suspense>
            </div>

            {/* Content */}
            <div className="relative z-1">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
