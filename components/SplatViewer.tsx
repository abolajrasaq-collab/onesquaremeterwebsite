import { Canvas } from '@react-three/fiber';
import { OrbitControls, Splat, Center, Loader } from '@react-three/drei';
import { Suspense } from 'react';

interface SplatViewerProps {
    url: string;
}

const SplatViewer: React.FC<SplatViewerProps> = ({ url }) => {
    return (
        <div className="w-full h-[600px] relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700">
            <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
                <color attach="background" args={['#0f172a']} />
                <ambientLight intensity={0.5} />
                <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
                <Suspense fallback={null}>
                    <Center>
                        <Splat src={url} />
                    </Center>
                </Suspense>
            </Canvas>
            <Loader />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white/70">
                L: Rotate | R: Pan | Scroll: Zoom
            </div>
            <div className="absolute top-4 right-4 bg-[#FEC12C] text-[#325074] px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                Gaussian Splat
            </div>
        </div>
    );
};

export default SplatViewer;
