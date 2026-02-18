import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Building, Key, Shield, TrendingUp, Users } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO title="Services" description="Explore our real estate services — property development, fractional ownership, investment advisory, property management, and bespoke projects." />
            {/* Hero Section */}
            <section className="relative bg-[#325074] py-32 px-6 lg:px-12 overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        Our <span className="text-[#FEC12C]">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        Comprehensive real estate solutions designed for wealth creation and legacy building.
                    </motion.p>
                </div>
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-20 -left-20 w-80 h-80 bg-[#FEC12C] rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#000000] to-transparent" />
                </div>

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
                        alt="Services"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#325074]/90 to-[#325074]/80" />
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1: Property Development */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-[#325074]/10 text-[#325074] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#325074] group-hover:text-white transition-colors">
                            <Building size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#325074] mb-4">Property Development</h3>
                        <p className="text-slate-600 mb-6">
                            From conceptualization to construction, we deliver premium residential and commercial projects that redefine the skyline. Our focus is on "One Square Meter" perfection.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Luxury Residential Estates</li>
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Commercial Hubs</li>
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Urban Regeneration</li>
                        </ul>
                    </div>

                    {/* Service 2: Investment Advisory */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-[#325074]/10 text-[#325074] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#325074] group-hover:text-white transition-colors">
                            <TrendingUp size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#325074] mb-4">Investment Advisory</h3>
                        <p className="text-slate-600 mb-6">
                            We guide clients through the complexities of the real estate market, identifying high-yield opportunities like our Student Hostels and self-complete housing units.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Portfolio Management</li>
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Market Analysis</li>
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> ROI Optimization</li>
                        </ul>
                    </div>

                    {/* Service 3: Facility Management */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-[#325074]/10 text-[#325074] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#325074] group-hover:text-white transition-colors">
                            <Shield size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#325074] mb-4">Facility Management</h3>
                        <p className="text-slate-600 mb-6">
                            Our commitment doesn't end at handover. We provide best-in-class post-sale management to ensure your asset retains its value and functionality over time.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Maintenance & Repairs</li>
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Security Services</li>
                            <li className="flex items-center gap-2"><Key size={14} className="text-[#FEC12C]" /> Utility Management</li>
                        </ul>
                    </div>

                    {/* Service 4: Project Management */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-[#325074]/10 text-[#325074] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#325074] group-hover:text-white transition-colors">
                            <Briefcase size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#325074] mb-4">Project Management</h3>
                        <p className="text-slate-600 mb-6">
                            Detailed oversight of construction projects to ensure they are delivered on time, within budget, and to the highest quality standards.
                        </p>
                    </div>

                    {/* Service 5: Joint Ventures */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-[#325074]/10 text-[#325074] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#325074] group-hover:text-white transition-colors">
                            <Users size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#325074] mb-4">Joint Ventures</h3>
                        <p className="text-slate-600 mb-6">
                            Partnering with landowners and investors to unlock the potential of prime real estate assets through mutually beneficial agreements.
                        </p>
                    </div>

                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-6 lg:px-12 bg-[#325074] text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Let's Discuss Your Project</h2>
                    <p className="text-white/70 text-lg mb-10">Whether you're looking to invest, build, or manage an asset, our team is ready to assist you.</p>
                    <Link to="/contact" className="inline-block bg-[#FEC12C] text-[#325074] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
