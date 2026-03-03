import React, { useState, Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface Project3DViewerProps {
    sceneUrl?: string;
}

const Project3DViewer: React.FC<Project3DViewerProps> = ({ sceneUrl = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode' }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full h-[600px] bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200 shadow-inner">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
                    <div className="text-center space-y-4">
                        <div className="w-12 h-12 border-4 border-[#FEC12C] border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-[#325074] font-bold text-xs uppercase tracking-widest animate-pulse">Loading Virtual Experience...</p>
                    </div>
                </div>
            )}

            <Suspense fallback={null}>
                <Spline
                    scene={sceneUrl}
                    onLoad={() => setIsLoading(false)}
                    className="w-full h-full"
                />
            </Suspense>

            {/* Overlay Instructions */}
            <div className={`absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold text-[#325074] uppercase tracking-widest shadow-lg">
                    Interactive 3D View
                </div>
                <div className="bg-[#325074]/80 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold text-white uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FEC12C] rounded-full animate-pulse"></span>
                    Rotate & Zoom to Explore
                </div>
            </div>
        </div>
    );
};

export default Project3DViewer;
