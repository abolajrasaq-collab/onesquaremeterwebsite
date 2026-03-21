import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, CheckCircle, MapPin, Armchair, Utensils, BedDouble, Bath,
    TrendingUp, Users, Send, X, Shield,
    ChevronRight, ChevronLeft,
    ShieldCheck, Landmark, Zap, Wrench, GraduationCap, ShoppingBag, Heart, Bus, Building2, Ruler,
    Banknote, Sparkles, Smartphone, Download, Play, Target, Award, Calculator, Maximize2, Calendar
} from 'lucide-react';
import { projects } from '../data/projects';
import GlbViewer from '../components/GlbViewer';
import { useData } from '../context/DataContext';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { submitInquiry } = useData();
    const project = slug ? projects[slug] : null;

    // UI State
    const [selectedUnit, setSelectedUnit] = useState<null | any>(null);
    const [showInquiry, setShowInquiry] = useState(false);
    const [inquiryUnit, setInquiryUnit] = useState<string>('');
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const [unitGalleryIdx, setUnitGalleryIdx] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');

    // Form State
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'Outright Purchase',
        message: ''
    });

    // Investment Calculator state
    const [calcAmount, setCalcAmount] = useState(50000000);
    const [calcYears, setCalcYears] = useState(3);

    const handleInquirySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (project) {
            await submitInquiry({
                projectId: project.id,
                unit: inquiryUnit,
                userName: `${formData.firstName} ${formData.lastName}`,
                userEmail: formData.email,
                userPhone: formData.phone,
                message: `${formData.interest} - ${formData.message}`
            });
        }

        setIsSubmitting(false);
        setShowInquiry(false);
        alert('Thank you for your inquiry! Our investment team will contact you within 24 hours.');
        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: 'Outright Purchase', message: '' });
    };

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

    const yieldRate = Number(project.expectedYield) || 8;
    const appRate = Number(project.appreciationRate) || 10;
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
            <section className="relative bg-[#325074] pt-32 pb-32 px-6 lg:px-12 overflow-hidden">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-1 bg-[#FEC12C] text-[#325074] text-xs font-bold tracking-widest uppercase mb-4 rounded-md">
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
                                <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg">
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
                        {/* Tabs Navigation */}
                        <div className="flex items-center gap-6 border-b border-slate-200 mb-8 overflow-x-auto">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'virtual', label: 'Virtual Tour', icon: <Maximize2 size={16} /> },
                                { id: 'amenities', label: 'Amenities' },
                                { id: 'location', label: 'Neighborhood' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative pb-4 text-sm font-bold uppercase tracking-widest whitespace-nowrap flex items-center gap-2 transition-colors ${activeTab === tab.id ? 'text-[#325074]' : 'text-slate-400 hover:text-[#325074]'}`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#FEC12C]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content: Overview */}
                        {activeTab === 'overview' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                <div className="prose prose-lg text-slate-600 mb-12 max-w-none">
                                    <h3 className="text-2xl font-bold text-[#325074] mb-4">Project Overview</h3>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab Content: Virtual Tour */}
                        {activeTab === 'virtual' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-12">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#325074]">Interactive 3D Walkthrough</h3>
                                        <p className="text-slate-500">Explore the architecture and layout of {project.title}.</p>
                                    </div>
                                </div>
                                <GlbViewer url={project.glbUrl || "/model.glb"} />
                            </motion.div>
                        )}

                        {/* Investment Highlights */}
                        {project.expectedYield && (
                            <div className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { icon: <Banknote size={18} />, label: 'Min. Investment', value: project.minInvestment || 'Contact', color: 'text-amber-600', bg: 'bg-amber-50' },
                                    { icon: <TrendingUp size={18} />, label: 'Target Yield', value: `${project.expectedYield}%`, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                                    { icon: <Sparkles size={18} />, label: 'Appreciation', value: `${project.appreciationRate}%`, color: 'text-blue-500', bg: 'bg-blue-50' },
                                    { icon: <Users size={18} />, label: 'Investors', value: `${project.investorCount || 0}+`, color: 'text-[#325074]', bg: 'bg-slate-50' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`${item.bg} rounded-xl p-5 border border-slate-100 shadow-sm`}
                                    >
                                        <div className={`w-8 h-8 rounded-md ${item.bg} ${item.color} flex items-center justify-center mb-3`}>{item.icon}</div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                                        <p className={`text-xl font-black mt-1 ${item.color}`}>{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Funding Progress Bar */}
                         {project.fundedPercentage && (
                            <div className="mb-12 bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm">
                                <div className="flex justify-between items-center mb-3">
                                    <p className="text-sm font-bold text-[#325074]">Funding Progress</p>
                                    <p className="text-sm font-black text-emerald-500">{project.fundedPercentage}% Funded</p>
                                </div>
                                <div className="h-3 bg-slate-200 rounded-lg overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${project.fundedPercentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                        className="h-full bg-gradient-to-r from-[#FEC12C] to-emerald-500 rounded-lg"
                                    />
                                </div>
                                <p className="text-[10px] text-slate-400 mt-2">{project.investorCount} investors have contributed to this project</p>
                            </div>
                        )}

                        {/* Property Offerings */}
                        {project.offerings && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6">Property Offerings</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {project.offerings?.map((offering, idx) => {
                                        const Icon = ({
                                            living: Armchair,
                                            kitchen: Utensils,
                                            bed: BedDouble,
                                            bath: Bath
                                        } as any)[offering.icon] || CheckCircle;

                                        return (
                                            <div key={idx} className="flex flex-col items-center text-center group">
                                                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FEC12C]/10 transition-colors">
                                                    <Icon size={32} strokeWidth={1.5} className="text-[#325074] group-hover:text-[#FEC12C] transition-colors" />
                                                </div>
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
                                {project.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <CheckCircle size={20} className="text-[#FEC12C]" />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Available Units */}
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
                                            className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#FEC12C] hover:shadow-md transition-all group flex flex-col"
                                        >
                                            <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => setSelectedUnit(unit)}>
                                                <img
                                                    src={unit.image || project.heroImage || "/images/placeholders/project.jpg"}
                                                    alt={unit.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-black text-[#325074] uppercase tracking-widest shadow-md">
                                                    {project.status}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="text-xl font-bold text-[#325074]">{unit.name}</h4>
                                                        <p className="text-slate-500 text-sm">{unit.type}</p>
                                                    </div>
                                                    {unit.sqm && (
                                                        <span className="text-xs font-bold text-[#325074] bg-slate-100 px-2.5 py-1 rounded-md">{unit.sqm} m²</span>
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
                                                                    <TrendingUp size={14} /> {project.expectedYield}% p.a.
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={() => { setInquiryUnit(unit.name); setShowInquiry(true); }}
                                                            className="flex-1 flex items-center justify-center gap-2 bg-[#FEC12C] text-[#325074] py-3 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-amber-400 transition-all shadow-sm"
                                                        >
                                                            <Banknote size={14} /> Invest Now
                                                        </button>
                                                        <button
                                                            onClick={() => setSelectedUnit(unit)}
                                                            className="px-4 py-3 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
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

                        {/* Payment Plan Breakdown */}
                        {project.paymentPlans && project.paymentPlans.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6 flex items-center gap-3">
                                    <Calendar size={24} className="text-[#FEC12C]" /> Payment Plans
                                </h3>
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-[#325074] text-white text-left">
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Plan</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Duration</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Initial Deposit</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Monthly</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Total Cost</th>
                                                    <th className="px-6 py-4"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {project.paymentPlans?.map((plan, i) => (
                                                    <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                                                        <td className="px-6 py-5 text-sm font-bold text-[#325074]">{plan.name}</td>
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
                                <p className="text-[10px] text-slate-400 mt-3 italic text-center">
                                    * All payment plans are subject to terms and conditions. Contact our sales team for full details.
                                </p>
                            </div>
                        )}

                        {/* Brochures and Forms */}
                        {project.brochures && project.brochures.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#325074] mb-6 flex items-center gap-3">
                                    <Download size={24} className="text-[#FEC12C]" /> Resources & Downloads
                                </h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {project.brochures.map((brochure, idx) => (
                                        <a key={idx} href={brochure.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-[#FEC12C] hover:bg-white hover:shadow-md transition-all group">
                                            <div className="w-10 h-10 bg-[#325074]/10 text-[#325074] rounded-lg flex items-center justify-center group-hover:bg-[#FEC12C] group-hover:text-white transition-colors">
                                                <Download size={18} />
                                            </div>
                                            <span className="text-sm font-bold text-[#325074] flex-1">{brochure.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Investment Calculator Section */}
            {project.expectedYield && (
                <section className="py-24 bg-slate-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#325074] rounded-full blur-[120px] opacity-20 pointer-events-none" />
                    <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-[#FEC12C] text-[#325074] px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-4 shadow-md">
                                <Calculator size={16} /> ROI Simulator
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Calculate Your Returns</h2>
                            <p className="text-slate-400 max-w-xl mx-auto">Adjust the sliders to see how your investment in {project.title} could grow over time based on current market projections.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                            <div className="grid md:grid-cols-2 gap-12 mb-12">
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between mb-4 text-white">
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
                                        <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">
                                            <span>₦10M</span><span>₦500M</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-4 text-white">
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
                                        <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">
                                            <span>1 yr</span><span>10 yrs</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#FEC12C]/30 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-slate-400">Projected Value Appreciation</span>
                                            <span className="text-lg font-bold text-emerald-400">₦{Math.round(projectedValue - calcAmount).toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-slate-700 h-1.5 rounded-lg overflow-hidden">
                                            <div className="bg-emerald-500 h-full w-3/4" />
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#FEC12C]/30 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-slate-400">Rental Income ({calcYears}yr)</span>
                                            <span className="text-lg font-bold text-blue-400">₦{Math.round(totalRentalIncome).toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-slate-700 h-1.5 rounded-lg overflow-hidden">
                                            <div className="bg-blue-500 h-full w-1/2" />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Total ROI</p>
                                            <p className="text-4xl font-black text-[#FEC12C]">+{totalROI}%</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Final Portfolio Value</p>
                                            <p className="text-2xl font-black text-white">₦{Math.round(totalReturn + calcAmount).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="w-20 h-20 bg-[#325074] text-[#FEC12C] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3 hover:rotate-6 transition-transform">
                        <Shield size={40} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#325074] mb-8 tracking-tight">Ready to Build Wealth?</h2>
                    <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
                        Secure your portfolio in {project.title} today and start earning passive income. Limited units available.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => { setInquiryUnit(project.title); setShowInquiry(true); }}
                            className="w-full sm:w-auto px-10 py-5 bg-[#FEC12C] text-[#325074] rounded-lg font-black uppercase tracking-widest text-xs hover:bg-[#325074] hover:text-white transition-all shadow-md active:scale-95"
                        >
                            Start Investing Now
                        </button>
                        <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-slate-100 text-slate-600 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-sm">
                            <Send size={14} /> Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Modals */}
            <AnimatePresence>
                {/* Unit Details Modal */}
                {selectedUnit && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
                        onClick={() => setSelectedUnit(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <div className="flex justify-between items-center bg-[#325074] p-6 text-white shrink-0">
                                <div>
                                    <h3 className="text-2xl font-black tracking-tight">{selectedUnit.name}</h3>
                                    <p className="text-white/80">{selectedUnit.type} {selectedUnit.sqm && `• ${selectedUnit.sqm} m²`}</p>
                                </div>
                                <button onClick={() => setSelectedUnit(null)} className="text-white/60 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                                    <X size={24} />
                                </button>
                            </div>
                            
                            <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1 bg-slate-50">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-1/2 space-y-6">
                                        {/* Main Image */}
                                        <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                            <img src={selectedUnit.image || project.heroImage} alt={selectedUnit.name} className="w-full h-64 object-cover" />
                                        </div>
                                        
                                        {/* Price and Action */}
                                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Starting Price</p>
                                            <p className="text-3xl font-black text-[#325074] mb-6">{selectedUnit.price}</p>
                                            <button 
                                                onClick={() => { setSelectedUnit(null); setInquiryUnit(selectedUnit.name); setShowInquiry(true); }}
                                                className="w-full bg-[#FEC12C] text-[#325074] py-4 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-[#325074] hover:text-white transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                                            >
                                                <Banknote size={16} /> Invest in this Unit
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="md:w-1/2 space-y-8">
                                        {/* Description */}
                                        <div>
                                            <h4 className="text-sm font-black text-[#325074] uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Description</h4>
                                            <p className="text-slate-600 leading-relaxed text-sm">{selectedUnit.description}</p>
                                        </div>
                                        
                                        {/* Features */}
                                        {selectedUnit.features && selectedUnit.features.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-black text-[#325074] uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Unit Features</h4>
                                                <ul className="space-y-2">
                                                    {selectedUnit.features.map((feature: any, idx: number) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                            <CheckCircle size={16} className="text-[#FEC12C] mt-0.5 shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        
                                        {/* Floor Plans */}
                                        {selectedUnit.floorPlans && selectedUnit.floorPlans.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-black text-[#325074] uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Floor Plans</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {selectedUnit.floorPlans.map((plan: string, idx: number) => (
                                                        <div 
                                                            key={idx} 
                                                            className="bg-white p-2 rounded-xl border border-slate-200 cursor-pointer hover:border-[#FEC12C] transition-colors group"
                                                            onClick={() => setLightboxImg(plan)}
                                                        >
                                                            <div className="relative overflow-hidden rounded-lg">
                                                                <img 
                                                                    src={plan} 
                                                                    alt={`Floor Plan ${idx + 1}`} 
                                                                    className="w-full h-32 object-contain bg-slate-50 transition-transform group-hover:scale-105"
                                                                />
                                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                    <Maximize2 size={24} className="text-[#325074] drop-shadow-md" />
                                                                </div>
                                                            </div>
                                                            <p className="text-[10px] text-center mt-2 font-bold text-slate-500 uppercase tracking-widest">Plan {idx + 1}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Inquiry Modal */}
                {showInquiry && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
                        onClick={() => setShowInquiry(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
                        >
                            <div className="bg-[#325074] p-8 text-white relative">
                                <h3 className="text-2xl font-black tracking-tight">Investment Inquiry</h3>
                                <p className="text-white/60 text-sm mt-1">{project.title} {inquiryUnit ? `— ${inquiryUnit}` : ''}</p>
                                <button onClick={() => setShowInquiry(false)} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <form className="p-8 space-y-6" onSubmit={handleInquirySubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                                        <input
                                            type="text" required placeholder="John"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[#325074] font-medium focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent outline-none transition-all"
                                            value={formData.firstName}
                                            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                                        <input
                                            type="text" required placeholder="Doe"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[#325074] font-medium focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent outline-none transition-all"
                                            value={formData.lastName}
                                            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email" required placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[#325074] font-medium focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent outline-none transition-all"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                                    <input
                                        type="tel" required placeholder="+234..."
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[#325074] font-medium focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent outline-none transition-all"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investment Option</label>
                                    <select
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[#325074] font-medium focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent outline-none transition-all appearance-none"
                                        value={formData.interest}
                                        onChange={e => setFormData({ ...formData, interest: e.target.value })}
                                    >
                                        <option>Outright Purchase</option>
                                        <option>Flexible Payment Plan</option>
                                        <option>Fractional Ownership</option>
                                        <option>Schedule a Site Visit</option>
                                    </select>
                                </div>
                                <button
                                    type="submit" disabled={isSubmitting}
                                    className="w-full bg-[#325074] text-white py-4 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-[#264060] transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Processing...' : <><Send size={16} /> Submit Inquiry</>}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}

                {/* Lightbox Modal */}
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 md:p-12"
                        onClick={() => setLightboxImg(null)}
                    >
                        <button className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2" onClick={() => setLightboxImg(null)}>
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            src={lightboxImg}
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetail;
