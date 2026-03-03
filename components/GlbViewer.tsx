import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

interface GlbViewerProps {
    url: string;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
    componentDidCatch(error: Error, info: React.ErrorInfo) { console.error("GLB Load Error:", error, info); }
    render() {
        if (this.state.hasError) {
            return (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20 bg-slate-900 text-red-400">
                    <p className="font-bold mb-2">Failed to load High-Res Model</p>
                    <p className="text-xs font-mono">{this.state.error?.message || "Unknown error occurred"}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

// Preload the model structure
const Model: React.FC<{ url: string }> = ({ url }) => {
    // We pass 'true' to ensure Draco decoder is used if the model is compressed
    const { scene } = useGLTF(url, true);
    return <primitive object={scene} />;
};

const GlbViewer: React.FC<GlbViewerProps> = ({ url }) => {
    return (
        <div className="w-full h-[500px] relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-200">
            {/* Loading Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white/50 font-medium z-0">
                Loading High-Res Model...
            </div>

            <ErrorBoundary>
                <Canvas camera={{ position: [0, 5, 10], fov: 45 }} className="z-10 relative" gl={{ preserveDrawingBuffer: true }}>
                    <Suspense fallback={null}>
                        {/* Lighting */}
                        <ambientLight intensity={1.2} />
                        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
                        <directionalLight position={[-10, 10, -10]} intensity={0.8} />

                        {/* The 3D Model centered */}
                        <Center>
                            <Model url={url} />
                        </Center>

                        {/* Controls */}
                        <OrbitControls
                            autoRotate
                            autoRotateSpeed={0.5}
                            enableDamping
                            dampingFactor={0.05}
                            makeDefault
                        />
                    </Suspense>
                </Canvas>
            </ErrorBoundary>
        </div>
    );
};

export default GlbViewer;
