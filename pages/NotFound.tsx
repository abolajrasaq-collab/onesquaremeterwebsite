import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#325074] text-center px-6 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FEC12C] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#FEC12C] rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h1 className="text-[120px] md:text-[180px] font-black text-white/10 leading-none select-none">
                    404
                </h1>
                <div className="-mt-16 md:-mt-24">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        Page Not <span className="text-[#FEC12C]">Found</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-[#FEC12C] text-[#325074] px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors"
                        >
                            <Home size={18} /> Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
                        >
                            <ArrowLeft size={18} /> Go Back
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
