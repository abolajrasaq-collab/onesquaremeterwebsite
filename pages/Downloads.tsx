import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, ArrowRight, Info } from 'lucide-react';
import SEO from '../components/SEO';

const Downloads: React.FC = () => {
    const [toastMsg, setToastMsg] = useState<string | null>(null);

    const brochures = [
        { title: "Dantata Hostels Investment Guide", size: "29.0 MB", type: "PDF", available: true, url: "/brochures/Dantata HOSTELS Brochure_CUSTOM_1SQM_PRINT 2.pdf" },
        { title: "Dantata Vistas Catalog", size: "26.1 MB", type: "PDF", available: true, url: "/brochures/Dantata Vistas Brochure_CUSTOM 6.pdf" },
        { title: "Dantata Arcade Brochure", size: "5.8 MB", type: "PDF", available: true, url: "/brochures/EFAB BIFOLD EXT Brochure.pdf" },
        { title: "Corporate Profile 2026", size: "4.9 MB", type: "PDF", available: true, url: "/brochures/1SQM BRAND POSITIONING DOCUMENT L.pdf" },
    ];

    const forms = [
        { title: "FEB 2026 Selling Prices (Consolidated)", size: "95 KB", type: "PDF", available: true, url: "/forms/FEB 2026 SELLING PRICES COSOLIDATED.pdf" },
        { title: "Dantata Vistas 106 Application Form", size: "5.2 MB", type: "PDF", available: true, url: "/forms/106 FORM.pdf" },
        { title: "Dantata Vistas 310 Application Form", size: "5.2 MB", type: "PDF", available: true, url: "/forms/310 FORM.pdf" },
        { title: "Dantata Vistas 2151 Application Form", size: "5.0 MB", type: "PDF", available: true, url: "/forms/2151 FORM.pdf" },
        { title: "Dantata Hostels Application Form", size: "4.7 MB", type: "PDF", available: true, url: "/forms/747 Application Form.pdf" },
        { title: "Dantata Arcade Application Form", size: "4.4 MB", type: "PDF", available: true, url: "/forms/EFAB FORM.pdf" },
    ];

    const handleDownload = (item: { title: string; available: boolean; url: string }) => {
        if (!item.available) {
            setToastMsg(`"${item.title}" will be available soon. Contact us for early access.`);
            setTimeout(() => setToastMsg(null), 4000);
            return;
        }
        
        // Trigger download
        const link = document.createElement('a');
        link.href = item.url;
        link.download = item.url.split('/').pop() || 'download.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setToastMsg(`Starting download: ${item.title}`);
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
                        Access our application forms, brochures, and investment guides.
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

            {/* Application Forms Section */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black text-[#325074] tracking-tight">Application <span className="text-[#FEC12C]">Forms</span></h2>
                        <p className="text-slate-500 font-light">Direct access to the necessary paperwork for your real estate journey.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-1 gap-4">
                        {forms.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#FEC12C] shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#325074] mb-0.5">{item.title}</h3>
                                        <p className="text-xs text-slate-500">
                                            {item.type} • {item.size}
                                            <span className="ml-2 text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Available</span>
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDownload(item)}
                                    className="flex items-center gap-2 text-[#325074] font-black uppercase tracking-widest text-[10px] hover:text-[#FEC12C] transition-colors"
                                >
                                    Download <Download size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brochures Section */}
            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black text-[#325074] tracking-tight">Project <span className="text-[#325074]/30">Brochures</span></h2>
                        <p className="text-slate-500 font-light">Comprehensive guides for each of our developments.</p>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                        {brochures.map((item, index) => (
                            <div key={index} className={`bg-white p-6 rounded-xl border border-slate-200 transition-all flex items-center justify-between ${item.available ? "hover:border-[#FEC12C] shadow-sm hover:shadow-md group" : "shadow-sm opacity-60 hover:border-slate-300"}`}>
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${item.available ? "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white" : "bg-slate-100 text-slate-400"}`}>
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold mb-0.5 ${item.available ? "text-[#325074]" : "text-slate-400"}`}>{item.title}</h3>
                                        <p className={`text-xs ${item.available ? "text-slate-500" : "text-slate-300"}`}>
                                            {item.type} • {item.size}
                                            {item.available ? (
                                                <span className="ml-2 text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Available</span>
                                            ) : (
                                                <span className="ml-2 text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Request Only</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDownload(item)}
                                    className={`flex items-center gap-2 font-black uppercase tracking-widest text-[10px] transition-colors ${item.available ? "text-[#325074] hover:text-[#FEC12C]" : "text-slate-400 hover:text-[#325074]"}`}
                                >
                                    {item.available ? (
                                        <>Download <Download size={16} /></>
                                    ) : (
                                        <>Request <Info size={16} /></>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
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
