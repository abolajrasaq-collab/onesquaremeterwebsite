import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, MapPin, Download, CheckCircle, Building2, GraduationCap,
    Home, ShoppingBag, FileText, Phone, ArrowUpRight,
    TrendingUp, Users, Building, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, ProjectData, ProjectUnit } from '../data/projects';

// --- Subcomponents for specific sections ---

const HostelsSection = ({ project }: { project: ProjectData }) => {
    const [activeTab, setActiveTab] = useState(0);
    const unit = project.units[activeTab];

    return (
        <section id="hostels" className="py-24 px-6 lg:px-12 bg-[#325074] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <p className="text-[#FEC12C] uppercase tracking-[0.4em] text-xs font-semibold mb-3">Student Co-Living Investment</p>
                    <h2 className="font-black text-4xl lg:text-5xl uppercase mb-6 flex items-center gap-4">
                        <GraduationCap size={40} className="text-[#FEC12C]" /> {project.name}
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-white/60 text-sm">
                        <MapPin size={16} className="text-[#FEC12C]" /> {project.location}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Tabs */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {project.units.map((u, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`text-left px-6 py-4 rounded-xl border transition-all ${activeTab === i ? 'bg-[#FEC12C] border-[#FEC12C] text-[#325074]' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}
                            >
                                <div className="font-bold text-lg mb-1">{u.name}</div>
                                <div className={`text-xs font-semibold uppercase tracking-wider ${activeTab === i ? 'text-[#325074]/70' : 'text-[#FEC12C]'}`}>{u.type}</div>
                            </button>
                        ))}
                    </div>

                    {/* Display */}
                    <div className="lg:col-span-8 bg-white rounded-2xl p-8 lg:p-10 text-[#325074] shadow-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid md:grid-cols-2 gap-10"
                            >
                                <div className="flex flex-col h-full">
                                    <h3 className="text-3xl font-black mb-2 leading-tight">{unit.name}</h3>
                                    <p className="text-slate-500 mb-6 font-light leading-relaxed">{unit.description}</p>
                                    
                                    <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Outright Price</div>
                                        <div className="text-3xl font-black text-[#325074]">{unit.price}</div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {unit.features?.map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                                                <CheckCircle size={18} className="text-[#FEC12C] flex-shrink-0 mt-0.5" /> {feat}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <a href="/forms/747 Application Form.pdf" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-[#325074] hover:text-[#FEC12C] flex items-center gap-2 transition-colors">
                                            Download Application Form <Download size={14} />
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {unit.image && (
                                        <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50 h-[300px]">
                                            <img src={unit.image} alt={unit.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                                        </div>
                                    )}
                                    {unit.floorPlans && unit.floorPlans.length > 0 && (
                                        <div className={`grid gap-4 ${unit.floorPlans.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                            {unit.floorPlans.map((fp, idx) => (
                                                <div key={idx} className="rounded-xl overflow-hidden border border-slate-100 bg-white p-2">
                                                    <img src={fp} alt={`Floor Plan ${idx + 1}`} className="w-full h-auto" loading="lazy" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VistasSection = ({ project }: { project: ProjectData }) => {
    // Group units by their location type (Vistas 002, 106, 310, 2151)
    const locations = Array.from(new Set(project.units.map(u => u.type)));
    const [activeLocation, setActiveLocation] = useState(locations[0]);
    
    const locationUnits = project.units.filter(u => u.type === activeLocation);

    return (
        <section id="vistas" className="py-24 px-6 lg:px-12 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-[#FEC12C] uppercase tracking-[0.4em] text-xs font-semibold mb-3">Residential Development</p>
                    <h2 className="text-[#325074] font-black text-4xl lg:text-5xl uppercase mb-6 flex justify-center items-center gap-4">
                        <Home size={40} className="text-[#FEC12C]" /> {project.name}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Location Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {locations.map((loc, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveLocation(loc)}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                                activeLocation === loc 
                                ? 'bg-[#325074] text-white border-[#325074] shadow-md' 
                                : 'bg-white text-[#325074] border-slate-200 hover:border-[#325074] hover:bg-slate-50'
                            }`}
                        >
                            {loc}
                        </button>
                    ))}
                </div>

                {/* Location Units Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLocation}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {locationUnits.map((unit, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                                <div className="h-48 overflow-hidden relative bg-slate-100">
                                    <img src={unit.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'} alt={unit.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-[#325074] uppercase">
                                        {unit.sqm} SQM
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="font-bold text-lg text-[#325074] mb-2 leading-tight">{unit.name}</h4>
                                    <p className="text-sm font-light text-slate-500 mb-6 flex-1">{unit.description}</p>
                                    
                                    <div className="pt-4 border-t border-slate-100">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Starting From</div>
                                        <div className="text-2xl font-black text-[#FEC12C]">{unit.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                
                <div className="mt-16 flex justify-center">
                     <a href="/brochures/Dantata Vistas Brochure_CUSTOM 6.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#325074] font-bold uppercase tracking-wider px-8 py-4 text-sm hover:border-[#325074] hover:bg-slate-50 rounded-xl transition-all">
                        <Download size={18} /> Download Vistas Brochure
                    </a>
                </div>
            </div>
        </section>
    );
};

const ArcadeSection = ({ project }: { project: ProjectData }) => {
    return (
        <section id="arcade" className="py-24 px-6 lg:px-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/3">
                    <p className="text-[#FEC12C] uppercase tracking-[0.4em] text-xs font-semibold mb-3">Commercial Real Estate</p>
                    <h2 className="text-[#325074] font-black text-4xl lg:text-5xl uppercase mb-6 flex items-center gap-4">
                        <ShoppingBag size={40} className="text-[#FEC12C]" /> {project.name}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>
                    <div className="flex items-center gap-2 mb-8 text-slate-500 text-sm">
                        <MapPin size={16} className="text-[#FEC12C]" /> {project.location}
                    </div>
                    <a href="/brochures/EFAB BIFOLD EXT Brochure.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#325074] text-white font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-xl hover:bg-[#253e5e] transition-colors">
                        <Download size={18} /> Download Arcade Brochure
                    </a>
                </div>
                
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                    {project.units.map((unit, i) => (
                        <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#FEC12C] transition-colors group">
                            <div className="h-40 rounded-xl overflow-hidden mb-6 bg-slate-200">
                                <img src={unit.image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'} alt={unit.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-xl text-[#325074] mb-1">{unit.name}</h4>
                            <div className="text-xs font-semibold uppercase tracking-wider text-[#FEC12C] mb-4">{unit.type}</div>
                            <p className="text-sm font-light text-slate-500 mb-6">{unit.description}</p>
                            <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Price</div>
                                    <div className="text-xl font-black text-[#325074]">{unit.price}</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#325074]">
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Projects: React.FC = () => {
    // We assume these projects exist in the record
    const hostels = projects['dantata-hostels'];
    const vistas = projects['dantata-vistas'];
    const arcade = projects['dantata-arcade'];

    const stats = [
        { label: 'Property Lines', value: '3', icon: <Building2 className="text-[#FEC12C]" size={20} /> },
        { label: 'Abuja Locations', value: '6', icon: <MapPin className="text-[#FEC12C]" size={20} /> },
        { label: 'Annual Capital Growth', value: '35%+', icon: <TrendingUp className="text-[#FEC12C]" size={20} /> },
        { label: 'Target Occupancy', value: '100%', icon: <Users className="text-[#FEC12C]" size={20} /> },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-[#325074] pt-32 pb-24 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#FEC12C 0,#FEC12C 1px,transparent 0,transparent 50%)', backgroundSize: '30px 30px' }}></div>
                <div className="relative max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#FEC12C] uppercase tracking-[0.4em] text-xs font-semibold mb-4">One Square Meter · Property Portfolio</p>
                        <h1 className="text-white font-black text-5xl lg:text-7xl xl:text-8xl uppercase leading-none mb-6">
                            THE<br /><span className="text-[#FEC12C]">COMPLETE</span><br />PORTFOLIO.
                        </h1>
                        <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed font-light">
                            All properties, unit types, floor plans, pricing, and application forms — organised in one place. Explore our premium residential, student co-living, and commercial developments.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#hostels" className="bg-[#FEC12C] text-[#325074] rounded-xl font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-yellow-300 transition-colors">Dantata Hostels →</a>
                            <a href="#vistas" className="bg-white/10 backdrop-blur text-white rounded-xl font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-white/20 transition-colors">Dantata Vistas →</a>
                            <a href="#arcade" className="bg-white/10 backdrop-blur text-white rounded-xl font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-white/20 transition-colors">Dantata Arcade →</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-white py-12 px-6 lg:px-12 border-b border-gray-100 relative z-10 -mt-8 mx-auto max-w-7xl rounded-2xl shadow-sm border">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-l-4 border-[#FEC12C] pl-6 py-2"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                {stat.icon}
                                <div className="text-3xl font-black text-[#325074]">{stat.value}</div>
                            </div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Property Sections */}
            {hostels && <HostelsSection project={hostels} />}
            {vistas && <VistasSection project={vistas} />}
            {arcade && <ArcadeSection project={arcade} />}

            {/* Consolidated Pricing */}
            <section id="pricing" className="py-32 px-6 lg:px-12 bg-[#325074] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FEC12C] rounded-full blur-[250px] opacity-10 translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-[#FEC12C] rounded-full blur-[200px] opacity-5 -translate-x-1/4" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="inline-block bg-[#FEC12C] text-[#325074] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">Investment Table · 2026</span>
                            <h2 className="text-white font-black text-5xl lg:text-7xl tracking-tighter uppercase leading-none">
                                CONSOLIDATED<br />
                                <span className="text-[#FEC12C]">PRICING.</span>
                            </h2>
                        </div>
                        <div className="max-w-sm">
                            <p className="text-white/50 text-base leading-relaxed font-light">
                                Our pricing reflects the precision engineering and strategic location advantages of every square meter. Spread payments available across all projects.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Residential Pricing Table */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
                            <h3 className="text-[#FEC12C] font-black uppercase tracking-[0.3em] text-xs mb-10 flex items-center gap-4">
                                <Building size={20} /> Residential Developments
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { name: 'Vistas 2151 (Lokogoma)', price: '₦65M - ₦210M', stage: 'DPC / Shell' },
                                    { name: 'Vistas 106 (Karsana North)', price: '₦77M - ₦220M', stage: 'Adv. Shell' },
                                    { name: 'Vistas 310 (Jabi)', price: '₦83M - ₦265M', stage: 'Premium Finishing' },
                                    { name: 'The MetroView (Jabi)', price: '₦55M - ₦215M', stage: 'Complete/Ongoing' }
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center group">
                                        <div>
                                            <div className="text-white font-bold text-lg tracking-tight group-hover:text-[#FEC12C] transition-colors line-clamp-1">{row.name}</div>
                                            <div className="text-white/30 text-[10px] uppercase font-black tracking-widest mt-1">{row.stage}</div>
                                        </div>
                                        <div className="text-right border-l border-white/10 pl-6 flex-shrink-0">
                                            <div className="text-[#FEC12C] font-black text-xl md:text-2xl tracking-tighter">{row.price.split(' ')[0]}</div>
                                            <div className="text-white/20 text-[9px] uppercase font-bold tracking-widest mt-1">Starting From</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Commercial & Student Pricing Table */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
                            <h3 className="text-[#FEC12C] font-black uppercase tracking-[0.3em] text-xs mb-10 flex items-center gap-4">
                                <GraduationCap size={20} /> Specialized & Commercial
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { name: 'Dantata Hostels (Plot 747)', price: '₦50M - ₦300M', category: 'Student Co-Living' },
                                    { name: 'Dantata Arcade (EFAB)', price: '₦100M - ₦165M', category: 'Commercial Retail' },
                                    { name: 'Copa Cabana II (Wumba)', price: '₦35M - ₦60M', category: 'Lifestyle' },
                                    { name: 'Polo Vistas', price: 'TBA', category: 'Coming Soon' }
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center group">
                                        <div>
                                            <div className="text-white font-bold text-lg tracking-tight group-hover:text-[#FEC12C] transition-colors line-clamp-1">{row.name}</div>
                                            <div className="text-white/30 text-[10px] uppercase font-black tracking-widest mt-1">{row.category}</div>
                                        </div>
                                        <div className="text-right border-l border-white/10 pl-6 flex-shrink-0">
                                            <div className="text-[#FEC12C] font-black text-xl md:text-2xl tracking-tighter">{row.price.split(' ')[0]}</div>
                                            <div className="text-white/20 text-[9px] uppercase font-bold tracking-widest mt-1">Starting From</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Forms Section */}
            <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
                        <div>
                            <p className="text-[#FEC12C] uppercase tracking-[0.4em] text-xs font-semibold mb-3">Ready to Invest?</p>
                            <h2 className="text-[#325074] font-black text-4xl lg:text-6xl uppercase leading-none">APPLICATION<br />FORMS.</h2>
                        </div>
                        <div className="bg-[#325074] text-white p-8 rounded-2xl max-w-lg shadow-md border border-slate-700">
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-3">
                                <ShieldCheck className="text-[#FEC12C]" /> Secure Your Future
                            </h4>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                Download the official application form for your chosen property. Complete the details and submit to our sales office or upload via the owner portal to begin your acquisition process.
                            </p>
                            <div className="flex items-center gap-4 text-[#FEC12C] font-bold text-sm">
                                <Phone size={18} /> Call Sales: 0902 002 0077
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Dantata Hostels', desc: '747 Student Co-Living · Jabi', file: '747 Application Form.pdf', folder: 'forms' },
                            { title: 'Vistas 106', desc: "Papal's Ground, Karsana North", file: '106 FORM.pdf', folder: 'forms' },
                            { title: 'Vistas 310', desc: 'Nile University Street, Jabi', file: '310 FORM.pdf', folder: 'forms' },
                            { title: 'Vistas 2151', desc: 'By Kabusa Gardens, Lokogoma', file: '2151 FORM.pdf', folder: 'forms' },
                            { title: 'EFAB Arcade', desc: 'EFAB Queens Gate, Karsana', file: 'EFAB FORM.pdf', folder: 'forms' },
                            { title: 'Prices PDF', desc: 'Feb 2026 Selling Prices', file: 'FEB 2026 SELLING PRICES COSOLIDATED.pdf', folder: 'brochures' }
                        ].map((form, i) => (
                            <a
                                key={i}
                                href={`/${form.folder}/${form.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-slate-50 hover:bg-[#325074] rounded-2xl p-8 border border-slate-100 hover:border-[#325074] transition-all flex flex-col gap-6"
                            >
                                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-[#FEC12C] group-hover:border-[#FEC12C] transition-colors">
                                    <FileText className="text-[#325074]" size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-black text-[#325074] group-hover:text-white uppercase text-sm tracking-wider">{form.title}</div>
                                    <div className="text-gray-500 group-hover:text-white/60 text-xs mt-1 font-medium">{form.desc}</div>
                                </div>
                                <div className="text-[#325074] group-hover:text-[#FEC12C] text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-colors">
                                    Download File <ArrowRight size={14} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
