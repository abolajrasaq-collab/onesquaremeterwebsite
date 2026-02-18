import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, ArrowRight, Info } from 'lucide-react';
import SEO from '../components/SEO';

const Downloads: React.FC = () => {
    const [toastMsg, setToastMsg] = useState<string | null>(null);

    const brochures = [
        { title: "MetroView Estate Brochure", size: "4.2 MB", type: "PDF", available: false },
        { title: "Dantata Hostels Investment Guide", size: "2.8 MB", type: "PDF", available: false },
        { title: "Dantata Vistas Catalog", size: "5.1 MB", type: "PDF", available: false },
        { title: "Copa Cabana II Fact Sheet", size: "1.5 MB", type: "PDF", available: false },
        { title: "Corporate Profile 2026", size: "3.2 MB", type: "PDF", available: false },
    ];

    const handleDownload = (title: string) => {
        setToastMsg(`"${title}" will be available soon. Contact us for early access.`);
        setTimeout(() => setToastMsg(null), 4000);
    };

    return (
        <div className="bg-white">
            <SEO title="Downloads & Resources" description="Access brochures, investment guides, and property specifications for ONE SQUARE METER developments." />
            {/* Hero Section */}
            <section className="relative bg-[#325074] py-32 px-6 lg:px-12 overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        Downloads & <span className="text-[#FEC12C]">Resources</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        Access our brochures, investment guides, and property specifications.
                    </motion.p>
                </div>
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#FEC12C]/20 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FEC12C]/20 rounded-full" />
                </div>

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000"
                        alt="Downloads"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#325074]/90 to-[#325074]/80" />
                </div>
            </section>

            {/* Toast Notification */}
            <AnimatePresence>
                {toastMsg && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#325074] text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-lg"
                    >
                        <Info size={18} className="text-[#FEC12C] shrink-0" />
                        <span className="text-sm font-medium">{toastMsg}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Downloads Grid */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-6">
                    {brochures.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#FEC12C] shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-[#325074] group-hover:text-white transition-colors">
                                    <FileText size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#325074] mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-500">
                                        {item.type} • {item.size}
                                        {!item.available && <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Coming Soon</span>}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDownload(item.title)}
                                className="hidden sm:flex items-center gap-2 text-[#325074] font-bold hover:text-[#FEC12C] transition-colors"
                            >
                                Request <Download size={18} />
                            </button>
                            <button
                                onClick={() => handleDownload(item.title)}
                                className="sm:hidden text-[#325074]"
                            >
                                <Download size={24} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-24 px-6 lg:px-12 bg-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#325074] mb-4">Stay Updated</h2>
                    <p className="text-slate-600 mb-8">Sign up for our newsletter to receive the latest updates on new projects and investment opportunities.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#325074]" />
                        <button className="bg-[#325074] text-white px-8 py-4 rounded-full font-bold hover:bg-[#203650] transition-colors flex items-center justify-center gap-2">
                            Subscribe <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Downloads;
