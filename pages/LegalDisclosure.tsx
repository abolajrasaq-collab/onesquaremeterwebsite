import * as React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, ShieldCheck, Info } from 'lucide-react';
import SEO from '../components/SEO';

const LegalDisclosure: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO title="Legal Disclosure" description="Important legal information regarding ONE SQUARE METER's services, intellectual property, disclaimers, and data protection policies." />
            {/* Hero Section */}
            <section className="relative bg-[#325074] py-32 px-6 lg:px-12 overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        Legal <span className="text-[#FEC12C]">Disclosure</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        Important legal information regarding our services and your rights.
                    </motion.p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute bottom-0 left-20 w-60 h-60 bg-[#FEC12C] rounded-full blur-[100px]" />
                </div>
            </section>

            {/* Legal Content */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="text-[#325074]" />
                            <h3 className="text-xl font-bold text-[#325074]">Intellectual Property</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            One Square Meter is a registered trademark of the Dantata & Sawoe Real Estate Consortium.
                            All content, designs, logos, and intellectual property on this website are protected by copyright laws and may not be reproduced without express written consent.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <Info className="text-[#325074]" />
                            <h3 className="text-xl font-bold text-[#325074]">Information Disclaimer</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            The information provided on this website is for general informational purposes only and does not constitute a legally binding offer.
                            Specific project details, prices, and availability are subject to change without notice. All renders and images are for illustrative purposes only and may not represent the final product.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="text-[#325074]" />
                            <h3 className="text-xl font-bold text-[#325074]">Governing Law</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            All transactions and agreements related to One Square Meter properties are governed by the laws of the Federal Republic of Nigeria.
                            Any disputes arising from these transactions shall be resolved through the appropriate legal channels within Nigerian jurisdiction.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="text-[#325074]" />
                            <h3 className="text-xl font-bold text-[#325074]">Data Protection</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            We are committed to protecting your personal data. Information collected through this website is used solely for the purpose of responding to inquiries and processing transactions.
                            We do not sell or share your personal information with third parties without your consent.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LegalDisclosure;
