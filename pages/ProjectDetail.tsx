import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft, CheckCircle, MapPin, Armchair, Utensils, BedDouble, Bath,
    Calculator, TrendingUp, Users, Calendar, Send, X, DollarSign, Shield,
    ChevronRight, Percent, ArrowUpRight, Maximize2, ChevronLeft,
    ShieldCheck, Landmark, Zap, Wrench, GraduationCap, ShoppingBag, Heart, Bus, Building2, Ruler
} from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? projects[slug] : null;
    const [selectedUnit, setSelectedUnit] = useState<null | typeof projects[string]['units'][number]>(null);
    const [showInquiry, setShowInquiry] = useState(false);
    const [inquiryUnit, setInquiryUnit] = useState<string>('');
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const [unitGalleryIdx, setUnitGalleryIdx] = useState(0);

    // Investment Calculator state
    const [calcAmount, setCalcAmount] = useState(50000000);
    const [calcYears, setCalcYears] = useState(3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h1 className="text-4xl font-bold text-[#325074] mb-4">Project Not Found</h1>
                <Link to="/#projects" className="text-[#FEC12C] underline hover:text-[#325074] transition-colors">
                    Back to Projects
                </Link>
            </div>
        );
    }

    const yieldRate = project.expectedYield || 8;
    const appRate = project.appreciationRate || 10;
    const projectedValue = calcAmount * Math.pow(1 + appRate / 100, calcYears);
    const totalRentalIncome = calcAmount * (yieldRate / 100) * calcYears;
    const totalReturn = projectedValue + totalRentalIncome - calcAmount;
    const totalROI = ((totalReturn / calcAmount) * 100).toFixed(1);

    return (
        <div className="bg-white">
            {/* Immersive Header Controls */}
            <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
                <Link to="/#projects" className="pointer-events-auto bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-[#325074] transition-all shadow-lg group">
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link to="/#projects" className="pointer-events-auto bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-[#325074] transition-all shadow-lg group">
                    <X size={24} className="group-hover:rotate-90 transition-transform" />
                </Link>
            </div>

            {/* Hero Section */}
            <section className={`relative bg-[#325074] pt-32 pb-32 px-6 lg:px-12 overflow-hidden`}>
                <div className="relative z-10 max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-1 bg-[#FEC12C] text-[#325074] text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
                            {project.category}
                        </span>
                        {project.logo ? (
                            <img
                                src={project.logo}
                                alt={project.title}
                                className="h-16 md:h-24 object-contain mb-6"
                            />
                        ) : (
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                                {project.title}
                            </h1>
                        )}
                        <div className="flex flex-wrap items-center gap-6 text-white/80 text-lg">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} className="text-[#FEC12C]" />
                                {project.location}
                            </div>
                            {project.investorCount && (
                                <div className="flex items-center gap-2 text-sm">
                                    <Users size={16} className="text-[#FEC12C]" />
                                    <span>{project.investorCount} investors</span>
                                </div>
                            )}
                            {project.fundedPercentage && (
                                <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-full">
                                    <TrendingUp size={14} className="text-emerald-400" />
                                    <span>{project.fundedPercentage}% funded</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FEC12C] rounded-full blur-[150px]" />
                </div>
                {project.heroImage && (
                    <div className="absolute inset-0 z-0">
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#325074]/90 to-[#325074]/80" />
                    </div>
                )}
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="flex flex-col gap-16">
                    {/* Main Content */}
                    <div className="w-full">
                        <div className="prose prose-lg text-slate-600 mb-12">
                            <h3 className="text-2xl font-bold text-[#325074] mb-4">Overview</h3>
                            <p className="leading-relaxed">{project.description}</p>
                        </div>

                        {/* Investment Highlights (new) */}
                        {project.expectedYield && (
                            <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { icon: <Percent size={18} />, label: 'Annual Yield', value: `${project.expectedYield}%`, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                                    { icon: <TrendingUp size={18} />, label: 'Appreciation', value: `${project.appreciationRate}%`, color: 'text-blue-500', bg: 'bg-blue-50' },
                                    { icon: <DollarSign size={18} />, label: 'Min. Investment', value: project.minInvestment || 'Contact', color: 'text-amber-600', bg: 'bg-amber-50' },
                                    { icon: <Users size={18} />, label: 'Investors', value: `${project.investorCount || 0}+`, color: 'text-[#325074]', bg: 'bg-slate-50' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`${item.bg} rounded-2xl p-5 border border-slate-100`}
                                    >
                                        <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-3`}>{item.icon}</div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                                        <p className={`text-xl font-black mt-1 ${item.color}`}>{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Funding Progress Bar (new) */}
                        {project.fundedPercentage && (
                            <div className="mb-12 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <div className="flex justify-between items-center mb-3">
                                    <p className="text-sm font-bold text-[#325074]">Funding Progress</p>
                                    <p className="text-sm font-black text-emerald-500">{project.fundedPercentage}% Funded</p>
                                </div>
                                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${project.fundedPercentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                        className="h-full bg-gradient-to-r from-[#FEC12C] to-emerald-500 rounded-full"
                                    />
                                </div>
                                <p className="text-[10px] text-slate-400 mt-2">{project.investorCount} investors have contributed to this project</p>
                            </div>
                        )}

                        {/* Property Offerings (Icons) */}
                        {project.offerings && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6">Property Offerings</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {project.offerings.map((offering, idx) => {
                                        const Icon = {
                                            living: Armchair,
                                            kitchen: Utensils,
                                            bed: BedDouble,
                                            bath: Bath
                                        }[offering.icon];

                                        return (
                                            <div key={idx} className="flex flex-col items-center text-center group">
                                                <Icon size={48} strokeWidth={1} className="text-[#325074] mb-4 group-hover:text-[#FEC12C] transition-colors" />
                                                <span className="text-[10px] font-bold text-[#325074] uppercase tracking-widest max-w-[120px] leading-tight">{offering.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Features Grid */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-[#325074] mb-6">Key Features</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <CheckCircle size={20} className="text-[#FEC12C]" />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Available Units — Enhanced with Invest Now CTA */}
                        {project.units.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6">Available Units</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {project.units.map((unit, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#FEC12C] hover:shadow-xl transition-all group flex flex-col"
                                        >
                                            <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => setSelectedUnit(unit)}>
                                                <img
                                                    src={unit.image || project.heroImage || "/images/placeholders/project.jpg"}
                                                    alt={unit.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black text-[#325074] uppercase tracking-widest shadow-lg">
                                                    {project.status}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h4 className="text-xl font-bold text-[#325074]">{unit.name}</h4>
                                                        <p className="text-slate-500 text-sm">{unit.type}</p>
                                                    </div>
                                                    {unit.sqm && (
                                                        <span className="text-xs font-bold text-[#325074] bg-slate-100 px-2.5 py-1 rounded-lg">{unit.sqm} m²</span>
                                                    )}
                                                </div>

                                                <div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
                                                    <div className="flex justify-between items-end">
                                                        <div>
                                                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Starting From</p>
                                                            <p className="text-lg font-black text-[#325074]">{unit.price}</p>
                                                        </div>
                                                        {project.expectedYield && (
                                                            <div className="text-right">
                                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Est. Yield</p>
                                                                <p className="text-sm font-black text-emerald-500 flex items-center gap-1">
                                                                    <ArrowUpRight size={14} /> {project.expectedYield}% p.a.
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={() => { setInquiryUnit(unit.name); setShowInquiry(true); }}
                                                            className="flex-1 flex items-center justify-center gap-2 bg-[#FEC12C] text-[#325074] py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-amber-400 transition-all"
                                                        >
                                                            <DollarSign size={14} /> Invest Now
                                                        </button>
                                                        <button
                                                            onClick={() => setSelectedUnit(unit)}
                                                            className="px-4 py-3 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
                                                        >
                                                            Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Payment Plan Breakdown (new) */}
                        {project.paymentPlans && project.paymentPlans.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6 flex items-center gap-3">
                                    <Calendar size={24} className="text-[#FEC12C]" /> Payment Plans
                                </h3>
                                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-[#325074] text-white">
                                                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest">Plan</th>
                                                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest">Duration</th>
                                                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest">Initial Deposit</th>
                                                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest">Monthly</th>
                                                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest">Total Cost</th>
                                                    <th className="px-6 py-4"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {project.paymentPlans.map((plan, i) => (
                                                    <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                                                        <td className="px-6 py-5">
                                                            <span className="text-sm font-bold text-[#325074]">{plan.name}</span>
                                                        </td>
                                                        <td className="px-6 py-5 text-sm text-slate-500">{plan.duration}</td>
                                                        <td className="px-6 py-5 text-sm font-bold text-[#325074]">{plan.deposit}</td>
                                                        <td className="px-6 py-5 text-sm text-slate-500">{plan.monthly}</td>
                                                        <td className="px-6 py-5 text-sm font-black text-[#325074]">{plan.total}</td>
                                                        <td className="px-6 py-5">
                                                            <button
                                                                onClick={() => { setInquiryUnit(`${project.title} — ${plan.name} Plan`); setShowInquiry(true); }}
                                                                className="text-[#FEC12C] hover:text-[#325074] transition-colors"
                                                            >
                                                                <ChevronRight size={18} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-3 italic">
                                    * All payment plans are subject to terms and conditions. Contact our sales team for full details.
                                </p>
                            </div>
                        )}

                        {/* Unit Details Modal */}
                        {selectedUnit && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => { setSelectedUnit(null); setUnitGalleryIdx(0); }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                                >
                                    <div className="relative h-64 sm:h-80">
                                        <img
                                            src={(selectedUnit.gallery && selectedUnit.gallery[unitGalleryIdx]) || selectedUnit.image || project.heroImage || "/images/placeholders/project.jpg"}
                                            alt={selectedUnit.name}
                                            className="w-full h-full object-cover cursor-pointer"
                                            onClick={() => setLightboxImg((selectedUnit.gallery && selectedUnit.gallery[unitGalleryIdx]) || selectedUnit.image || '')}
                                        />
                                        <button
                                            onClick={() => { setSelectedUnit(null); setUnitGalleryIdx(0); }}
                                            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#325074] transition-all z-10"
                                        >
                                            <X size={20} />
                                        </button>
                                        {selectedUnit.gallery && selectedUnit.gallery.length > 1 && (
                                            <>
                                                <button onClick={(e) => { e.stopPropagation(); setUnitGalleryIdx(i => (i - 1 + selectedUnit.gallery!.length) % selectedUnit.gallery!.length); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#325074] transition-all z-10">
                                                    <ChevronLeft size={18} />
                                                </button>
                                                <button onClick={(e) => { e.stopPropagation(); setUnitGalleryIdx(i => (i + 1) % selectedUnit.gallery!.length); }} className="absolute right-14 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#325074] transition-all z-10">
                                                    <ChevronRight size={18} />
                                                </button>
                                                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                                    {selectedUnit.gallery.map((_, i) => (
                                                        <button key={i} onClick={(e) => { e.stopPropagation(); setUnitGalleryIdx(i); }} className={`w-2 h-2 rounded-full transition-all ${i === unitGalleryIdx ? 'bg-[#FEC12C] w-5' : 'bg-white/50'}`} />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                        {project.logo && (
                                            <div className="absolute top-4 left-4 z-10">
                                                <img src={project.logo} alt={project.title} className="h-10 md:h-12 w-auto object-contain drop-shadow-md" />
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                            <h3 className="text-3xl font-black text-white tracking-tight">{selectedUnit.name}</h3>
                                            <p className="text-white/80 font-medium">{selectedUnit.type}</p>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        {(selectedUnit.sqm || selectedUnit.floor) && (
                                            <div className="flex gap-4">
                                                {selectedUnit.sqm && (
                                                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
                                                        <Ruler size={16} className="text-[#FEC12C]" />
                                                        <span className="text-sm font-bold text-[#325074]">{selectedUnit.sqm} m²</span>
                                                    </div>
                                                )}
                                                {selectedUnit.floor && (
                                                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
                                                        <Building2 size={16} className="text-[#FEC12C]" />
                                                        <span className="text-sm font-bold text-[#325074]">{selectedUnit.floor}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {selectedUnit.description && (
                                            <p className="text-slate-600 leading-relaxed">{selectedUnit.description}</p>
                                        )}

                                        <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                            <div>
                                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Price</p>
                                                <p className="text-3xl font-black text-[#325074]">{selectedUnit.price}</p>
                                            </div>
                                            <button
                                                onClick={() => { setInquiryUnit(selectedUnit.name); setSelectedUnit(null); setShowInquiry(true); }}
                                                className="bg-[#FEC12C] text-[#325074] px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#325074] hover:text-white transition-colors flex items-center gap-2"
                                            >
                                                <DollarSign size={14} /> Invest Now
                                            </button>
                                        </div>

                                        {project.expectedYield && (
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-emerald-50 p-4 rounded-xl">
                                                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Est. Annual Yield</p>
                                                    <p className="text-xl font-black text-emerald-600 mt-1">{project.expectedYield}%</p>
                                                </div>
                                                <div className="bg-blue-50 p-4 rounded-xl">
                                                    <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Est. Appreciation</p>
                                                    <p className="text-xl font-black text-blue-600 mt-1">{project.appreciationRate}% p.a.</p>
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-lg font-bold text-[#325074] mb-4">Unit Features</h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                {selectedUnit.features.map((feature, idx) => {
                                                    let Icon = CheckCircle;
                                                    if (feature.toLowerCase().includes('bed') || feature.toLowerCase().includes('room')) Icon = BedDouble;
                                                    if (feature.toLowerCase().includes('bath') || feature.toLowerCase().includes('toilet')) Icon = Bath;
                                                    if (feature.toLowerCase().includes('kitchen')) Icon = Utensils;
                                                    if (feature.toLowerCase().includes('living') || feature.toLowerCase().includes('bq')) Icon = Armchair;
                                                    return (
                                                        <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                                                            <Icon size={18} strokeWidth={1.5} className="text-[#FEC12C]" />
                                                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}

                        {/* Gallery Section — Enhanced */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6">Property Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <div className="col-span-2 row-span-2 aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => setLightboxImg(project.gallery![0])}>
                                        <img src={project.gallery[0]} alt={`${project.title} 1`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                            <Maximize2 size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                    {project.gallery.slice(1, 7).map((img, idx) => (
                                        <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => setLightboxImg(img)}>
                                            <img src={img} alt={`${project.title} ${idx + 2}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    ))}
                                    {project.gallery.length > 7 && (
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative cursor-pointer" onClick={() => setLightboxImg(project.gallery![7])}>
                                            <img src={project.gallery[7]} alt={`${project.title} more`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-[#325074]/70 flex items-center justify-center">
                                                <span className="text-white font-black text-lg">+{project.gallery.length - 7} more</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Amenities Grid */}
                        {project.amenities && project.amenities.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6">Amenities & Facilities</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {project.amenities.map((cat, ci) => {
                                        const catIcon = { Security: ShieldCheck, Lifestyle: Heart, Infrastructure: Wrench, Utilities: Zap }[cat.category] || CheckCircle;
                                        const CatIcon = catIcon;
                                        return (
                                            <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-xl bg-[#325074] flex items-center justify-center">
                                                        <CatIcon size={18} className="text-[#FEC12C]" />
                                                    </div>
                                                    <h4 className="text-sm font-black text-[#325074] uppercase tracking-widest">{cat.category}</h4>
                                                </div>
                                                <ul className="space-y-2.5">
                                                    {cat.items.map((item, ii) => (
                                                        <li key={ii} className="flex items-center gap-3 text-sm text-slate-600">
                                                            <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Neighborhood */}
                        {project.neighborhood && project.neighborhood.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6">Neighborhood & Proximity</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {project.neighborhood.map((place, pi) => {
                                        const typeIcon = { Education: GraduationCap, Shopping: ShoppingBag, Healthcare: Heart, Transport: Bus }[place.type] || MapPin;
                                        const TypeIcon = typeIcon;
                                        return (
                                            <div key={pi} className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                <div className="flex items-center gap-3">
                                                    <TypeIcon size={18} className="text-[#FEC12C]" />
                                                    <span className="text-sm font-medium text-[#325074]">{place.name}</span>
                                                </div>
                                                <span className="text-xs font-black text-slate-400 bg-white px-3 py-1 rounded-lg">{place.distance}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Property Specifications */}
                        {project.propertyDetails && project.propertyDetails.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6">Construction & Finishes</h3>
                                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                    {project.propertyDetails.map((detail, di) => (
                                        <div key={di} className={`flex justify-between items-start px-6 py-4 ${di % 2 === 0 ? '' : 'bg-slate-50'} border-b border-slate-100 last:border-0`}>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-1/3">{detail.label}</span>
                                            <span className="text-sm font-medium text-[#325074] text-right w-2/3">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Construction Progress */}
                        {project.constructionStatus && (
                            <div className="mb-12 bg-[#325074] rounded-2xl p-6 text-white">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-sm font-black uppercase tracking-widest">Construction Progress</h4>
                                    <span className="text-sm font-black text-[#FEC12C]">{project.constructionStatus}</span>
                                </div>
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-3">
                                    <div className="h-full bg-gradient-to-r from-[#FEC12C] to-emerald-400 rounded-full" style={{ width: project.constructionStatus.replace(/[^0-9]/g, '') + '%' }} />
                                </div>
                                <div className="flex justify-between text-xs text-white/50">
                                    {project.completionDate && <span>Est. Completion: {project.completionDate}</span>}
                                    {project.totalUnits && <span>{project.totalUnits} Total Units</span>}
                                    {project.architectStyle && <span>{project.architectStyle}</span>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Investment Calculator Section */}
            {project.expectedYield && (
                <section className="py-24 bg-slate-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#325074] rounded-full blur-[120px] opacity-50 pointer-events-none" />
                    <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-[#FEC12C] text-[#325074] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                                <Calculator size={16} /> ROI Simulator
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Calculate Your Returns</h2>
                            <p className="text-slate-400 max-w-xl mx-auto">Adjust the sliders to see how your investment in {project.title} could grow over time based on current market projections.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 mb-12">
                                {/* Inputs */}
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between mb-4">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Investment Amount</label>
                                            <span className="text-xl font-black text-[#FEC12C]">₦{calcAmount.toLocaleString()}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min={10000000}
                                            max={500000000}
                                            step={5000000}
                                            value={calcAmount}
                                            onChange={(e) => setCalcAmount(Number(e.target.value))}
                                            className="w-full accent-[#FEC12C] h-3 bg-slate-700 rounded-full appearance-none cursor-pointer"
                                        />
                                        <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                                            <span>₦10M</span><span>₦500M</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-4">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Time Horizon</label>
                                            <span className="text-xl font-black text-[#FEC12C]">{calcYears} years</span>
                                        </div>
                                        <input
                                            type="range"
                                            min={1}
                                            max={10}
                                            value={calcYears}
                                            onChange={(e) => setCalcYears(Number(e.target.value))}
                                            className="w-full accent-[#FEC12C] h-3 bg-slate-700 rounded-full appearance-none cursor-pointer"
                                        />
                                        <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                                            <span>1 yr</span><span>10 yrs</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="space-y-6">
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#FEC12C]/30 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-slate-400">Projected Appreciation</span>
                                            <span className="text-lg font-bold text-emerald-400">₦{Math.round(projectedValue - calcAmount).toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 h-full w-3/4" />
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#FEC12C]/30 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-slate-400">Rental Income ({calcYears}yr)</span>
                                            <span className="text-lg font-bold text-blue-400">₦{Math.round(totalRentalIncome).toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full w-1/2" />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Total ROI</p>
                                            <p className="text-4xl font-black text-[#FEC12C]">+{totalROI}%</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Total Value</p>
                                            <p className="text-2xl font-black text-white">₦{Math.round(totalReturn + calcAmount).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-slate-500 max-w-2xl mx-auto">
                                * Projections are estimates based on {project.appreciationRate}% annual appreciation and {project.expectedYield}% rental yield. Actual returns may vary based on market conditions.
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="w-20 h-20 bg-[#325074] text-[#FEC12C] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 hover:rotate-6 transition-transform">
                        <Shield size={40} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#325074] mb-8 tracking-tight">Ready to Build Wealth?</h2>
                    <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
                        Secure your fraction of {project.title} today and start earning passive income. Units are limited.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => { setInquiryUnit(project.title); setShowInquiry(true); }}
                            className="w-full sm:w-auto px-10 py-5 bg-[#FEC12C] text-[#325074] rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#325074] hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Start Investing
                        </button>
                        <Link to="/downloads" className="w-full sm:w-auto px-10 py-5 bg-slate-100 text-slate-600 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                            Download Brochure
                        </Link>
                    </div>
                </div>
            </section>

            {/* Inquiry Modal (new) */}
            {showInquiry && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowInquiry(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden"
                    >
                        <div className="bg-[#325074] p-8 text-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-black tracking-tighter">Investment Inquiry</h3>
                                    <p className="text-white/60 text-sm mt-1">{project.title} {inquiryUnit ? `— ${inquiryUnit}` : ''}</p>
                                </div>
                                <button onClick={() => setShowInquiry(false)} className="text-white/40 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        <form
                            className="p-8 space-y-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert('Thank you for your inquiry! Our investment team will contact you within 24 hours.');
                                setShowInquiry(false);
                            }}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                                    <input type="text" required placeholder="Amara" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                                    <input type="text" required placeholder="Ibrahim" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</label>
                                <input type="email" required placeholder="amara@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</label>
                                <input type="tel" required placeholder="+234 800 000 0000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investment Interest</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C]">
                                    <option>Outright Purchase</option>
                                    <option>Payment Plan</option>
                                    <option>Joint Investment</option>
                                    <option>Just Exploring</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message (optional)</label>
                                <textarea rows={3} placeholder="Tell us about your investment goals..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C] resize-none" />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-[#FEC12C] text-[#325074] py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-amber-400 transition-all"
                            >
                                <Send size={16} /> Submit Inquiry
                            </button>

                            <p className="text-[10px] text-slate-400 text-center">
                                Our investment team will respond within 24 hours.
                                <br />Your data is protected under our <Link to="/legal-disclosure" className="text-[#FEC12C] underline">privacy policy</Link>.
                            </p>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* Lightbox Overlay */}
            {lightboxImg && (
                <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
                    <button onClick={() => setLightboxImg(null)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#325074] transition-all z-10">
                        <X size={24} />
                    </button>
                    <img src={lightboxImg} alt="Gallery Fullscreen" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
