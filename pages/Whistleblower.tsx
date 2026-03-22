import * as React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Lock, Mail, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Whistleblower: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO title="Whistleblower Policy" description="ONE SQUARE METER's whistleblower policy — how to report concerns confidentially while being protected from retaliation." />
            {/* Hero Section */}
            <section className="relative bg-[#325074] py-32 px-6 lg:px-12 overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        Whistleblower <span className="text-[#FEC12C]">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        We are committed to the highest standards of integrity and ethical conduct.
                    </motion.p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 -right-10 w-64 h-64 bg-[#FEC12C] rounded-full blur-[100px]" />
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldAlert className="text-[#325074]" />
                            <h3 className="text-xl font-bold text-[#325074]">Our Commitment</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Our whistleblower policy provides a confidential and secure channel for employees, partners, contractors, and stakeholders to report any suspected misconduct, fraud, corruption, or unethical behavior without fear of retaliation.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <Lock className="text-[#325074]" />
                            <h3 className="text-xl font-bold text-[#325074]">Confidentiality Guarantee</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            All reports are treated with the strictest confidentiality. The identity of the whistleblower will be protected to the fullest extent permitted by law.
                            We have zero tolerance for retaliation against anyone who raises concerns in good faith.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="text-[#325074]" />
                            <h3 className="text-xl font-bold text-[#325074]">What Can Be Reported</h3>
                        </div>
                        <ul className="text-slate-600 space-y-3">
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full mt-2 shrink-0" />Financial misconduct, fraud, or embezzlement</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full mt-2 shrink-0" />Bribery, corruption, or conflicts of interest</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full mt-2 shrink-0" />Safety violations or environmental concerns</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full mt-2 shrink-0" />Harassment, discrimination, or workplace misconduct</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full mt-2 shrink-0" />Any violation of company policies or applicable laws</li>
                        </ul>
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-[#325074] p-8 rounded-xl text-center">
                        <Mail className="text-[#FEC12C] mx-auto mb-4" size={32} />
                        <h3 className="text-2xl font-bold text-white mb-3">Submit a Report</h3>
                        <p className="text-white/70 mb-6">All reports are investigated thoroughly by our compliance team.</p>
                        <a
                            href="mailto:compliance@onesquaremeter.com"
                            className="inline-block bg-[#FEC12C] text-[#325074] px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors"
                        >
                            compliance@onesquaremeter.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Whistleblower;
