import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import {
    BRAND_PILLARS
} from '../constants';
import {
    Quote,
    TrendingUpIcon,
    ShieldCheck,
    MapPinIcon,
    ArrowRight,
    Users,
    Search,
    FileCheck,
    Wallet,
    BarChart3,
    Building2,
    Award,
    BadgeCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as projectsData } from '../data/projects';


const Home: React.FC = () => {

    // Portfolio Simulator state
    const [simAmount, setSimAmount] = useState(50); // in millions
    const [simYears, setSimYears] = useState(3);

    // Simulator calculations
    const appreciationRate = 0.09; // 9% annual appreciation
    const rentalYieldRate = 0.08; // 8% annual rental yield
    const investmentNaira = simAmount * 1000000;
    const projectedValue = Math.round(investmentNaira * Math.pow(1 + appreciationRate, simYears));
    const annualRentalYield = Math.round(investmentNaira * rentalYieldRate);
    const totalROI = Math.round(((projectedValue - investmentNaira + (annualRentalYield * simYears)) / investmentNaira) * 100);

    // Select featured projects
    const featuredProjects = ['metro-view', 'dantata-hostels', 'copa-cabana-ii'];
    const displayProjects = featuredProjects.map(id => {
        const p = projectsData[id];
        // Extract specs for display
        const getSpec = (label: string) => p.specs.find(s => s.label.includes(label))?.value || 'N/A';

        return {
            id: p.id,
            name: p.title,
            location: p.location,
            price: p.priceStart,
            yield: p.specs.find(s => s.label.includes('Yield'))?.value || "Contact Us",
            img: p.heroImage || "/images/placeholders/project.jpg",
            tag: p.category,
            beds: p.units[0]?.features[0] || "Varies", // First unit's first feature often has beds
            baths: p.units[1]?.features[1] || "Varies",
            sqm: "VARIES",
            features: p.features.slice(0, 4),
            completion: p.status === 'Selling' ? '2025/26' : 'TBA',
            totalUnits: p.units.length > 0 ? "Limited" : "TBA",
            description: p.description
        };
    });


    return (
        <>
            <SEO
                title="Luxury Fractional Real Estate Investment"
                description="ONE SQUARE METER by Dantata — invest in premium real estate developments in Abuja, Nigeria. Fractional ownership starting from affordable entry points."
                keywords="fractional real estate, luxury investment, Abuja property, Dantata real estate, Nigeria real estate"
            />
            {/* 01. HERO: THE AMBITION */}
            <section id="home" className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#325074]">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/images/hero/main-background.jpg"
                        className="w-full h-full object-cover"
                        alt="ONE SQUARE METER Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#325074] via-[#325074]/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
                        >
                            <span className="w-2 h-2 bg-[#FEC12C] rounded-full animate-pulse"></span>
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">The New Currency of Ownership</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter"
                        >
                            CRAFTING<br />
                            <span className="text-[#FEC12C]">LEGACIES</span><br />
                            IN SQM.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="text-xl text-white/70 font-light max-w-xl leading-relaxed"
                        >
                            Welcome to One Square Meter by Dantata. Crafting Legacies, One Square Meter at a Time. Redefining Abuja’s skyline with precision and audacity for the discerning elite and visionary investor, One Square Meter delivers more than homes, we curate appreciating assets and uncompromising luxury.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="flex flex-wrap gap-6 pt-8"
                        >
                            <Link to="/projects/metro-view" className="group flex items-center gap-4 bg-[#FEC12C] text-[#325074] px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white transition-all">
                                Explore Portfolio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link to="/about" className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                                The Heritage Story
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Stat Bars */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 right-0 hidden lg:flex gap-px bg-white/10 border-t border-l border-white/10"
                >
                    {[
                        { label: 'Legacy Partner', value: 'Dantata & Sawoe' },
                        { label: 'Active SQM', value: '12,450+' },
                        { label: 'Est. Annual Yield', value: '8.5% - 12%' }
                    ].map((stat, i) => (
                        <div key={i} className="px-12 py-10 bg-[#325074]/60 backdrop-blur-3xl space-y-2 hover:bg-[#325074]/80 transition-colors">
                            <p className="text-[#FEC12C] text-[9px] font-black uppercase tracking-widest">{stat.label}</p>
                            <p className="text-white text-2xl font-black tracking-tighter uppercase">{stat.value}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* 02. HERITAGE: THE MASTER BUILDER */}
            <section id="strategy" className="py-32 bg-white relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-6 lg:px-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-6 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Heritage" />
                                <div className="absolute inset-0 bg-[#325074]/20 hover:bg-transparent transition-all duration-700"></div>
                            </div>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#FEC12C] rounded-3xl p-10 flex flex-col justify-center shadow-2xl"
                            >
                                <h4 className="text-5xl font-black text-[#325074] leading-none mb-2">1976</h4>
                                <p className="text-[#325074] font-bold text-[10px] uppercase tracking-widest">Foundation of the Legacy</p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-6 space-y-12">
                            <div className="space-y-4">
                                <span className="text-[#FEC12C] font-black tracking-[0.4em] uppercase text-xs">A DANTATA & SAWOE CONSORTIUM</span>
                                <h2 className="text-6xl md:text-8xl font-black text-[#325074] tracking-tighter leading-[0.85]">
                                    THE MASTER<br />BUILDER<br />MINDSET.
                                </h2>
                            </div>

                            <div className="space-y-6 text-xl text-slate-500 font-light leading-relaxed">
                                <p>
                                    Welcome to One Square Meter by Dantata. Crafting Legacies, One Square Meter at a Time.
                                </p>
                                <p>
                                    Redefining Abuja’s skyline with precision and audacity for the discerning elite and visionary investor, One Square Meter delivers more than homes, we curate appreciating assets and uncompromising luxury.
                                </p>
                                <p>
                                    From elite enclaves to self-complete intentional communities, our projects blend avant-garde design with relentless ROI. Backed by industry trust and tested by economic storms, we thrive where others falter.
                                </p>
                                <p>
                                    This is real estate reimagined: bold, resilient, and crafted to transcend generations.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-6">
                                {BRAND_PILLARS.slice(0, 2).map((pillar, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#FEC12C]">
                                            {pillar.icon}
                                        </div>
                                        <h5 className="font-black text-[#325074] text-sm uppercase tracking-widest">{pillar.title}</h5>
                                        <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 02B. BOARD OF DIRECTORS */}
            <section id="leadership" className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 text-center space-y-6"
                    >
                        <span className="text-[#FEC12C] font-black tracking-[0.4em] uppercase text-xs">THE ARCHITECTS OF LEGACY</span>
                        <h2 className="text-6xl md:text-8xl font-black text-[#325074] tracking-tighter">BOARD OF DIRECTORS.</h2>
                        <p className="max-w-2xl mx-auto text-slate-500 font-light">
                            Decades of combined expertise converging to build Nigeria's most trusted real estate platform.
                        </p>
                    </motion.header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Olutosin BOLAJI",
                                title: "Chief Executive Officer",
                                image: "/images/board/olutosin-bolaji.jpg",
                                bio: "Visionary leader driving innovation in fractional real estate ownership"
                            },
                            {
                                name: "Eng. Ibrahim Dantata",
                                title: "Executive Chairman",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
                                bio: "50+ years pioneering Nigeria's infrastructure landscape"
                            },
                            {
                                name: "Barr. Amina Sawoe",
                                title: "Managing Director",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
                                bio: "Real estate law expert with international certifications"
                            },
                            {
                                name: "Arch. Chidi Okonkwo",
                                title: "Chief Design Officer",
                                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
                                bio: "Award-winning architect, RIBA Fellow, 30+ landmark projects"
                            },

                        ].map((director, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-2xl">
                                    <img
                                        src={director.image}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                        alt={director.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#325074] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                                    {/* Name overlay on image */}
                                    <div className="absolute bottom-8 left-8 right-8 space-y-2 text-white">
                                        <h4 className="text-2xl font-black uppercase tracking-tight leading-tight">{director.name}</h4>
                                        <p className="text-[#FEC12C] text-[10px] font-black uppercase tracking-widest">{director.title}</p>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-500 leading-relaxed italic text-center px-4">
                                    {director.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Supporting statement */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-24 max-w-4xl mx-auto text-center"
                    >
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
                            <Quote className="w-12 h-12 text-[#FEC12C] mx-auto mb-6" />
                            <p className="text-xl md:text-2xl text-[#325074] font-light italic leading-relaxed mb-4">
                                "We don't just develop properties; we engineer ecosystems of prosperity where every square meter is a calculated step toward generational wealth."
                            </p>
                            <p className="text-sm font-black text-[#FEC12C] uppercase tracking-widest">
                                — Eng. Ibrahim Dantata, Executive Chairman
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 02C. HOW IT WORKS: THE INVESTOR JOURNEY */}
            <section id="how-it-works" className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20 space-y-6"
                    >
                        <span className="text-[#FEC12C] font-black tracking-[0.4em] uppercase text-xs">YOUR PATH TO OWNERSHIP</span>
                        <h2 className="text-6xl md:text-8xl font-black text-[#325074] tracking-tighter">HOW IT WORKS.</h2>
                        <p className="max-w-2xl mx-auto text-slate-500 font-light">
                            From first click to first yield — your ownership journey in four simple steps.
                        </p>
                    </motion.header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                icon: <Search size={28} />,
                                title: 'Browse Projects',
                                desc: 'Explore our curated collection of institutional-grade properties across prime Abuja locations.',
                                color: 'bg-blue-50'
                            },
                            {
                                step: '02',
                                icon: <FileCheck size={28} />,
                                title: 'Select & Reserve',
                                desc: 'Choose your preferred unit and payment plan. Reserve your stake with a secure initial deposit.',
                                color: 'bg-amber-50'
                            },
                            {
                                step: '03',
                                icon: <Wallet size={28} />,
                                title: 'Invest & Own',
                                desc: 'Complete your investment through flexible payment plans. Receive your digital ownership certificate.',
                                color: 'bg-emerald-50'
                            },
                            {
                                step: '04',
                                icon: <BarChart3 size={28} />,
                                title: 'Earn Returns',
                                desc: 'Track your portfolio value in real-time. Receive rental yields and benefit from capital appreciation.',
                                color: 'bg-purple-50'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="relative group"
                            >
                                <div className={`${item.color} rounded-3xl p-10 h-full border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}>
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-6xl font-black text-[#325074]/10 tracking-tighter">{item.step}</span>
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#325074] shadow-lg group-hover:bg-[#FEC12C] group-hover:text-[#325074] transition-colors">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-black text-[#325074] mb-3 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                                {i < 3 && (
                                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                        <ArrowRight size={20} className="text-[#FEC12C]" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-center mt-16"
                    >
                        <Link to="/invest" className="inline-flex items-center gap-4 bg-[#325074] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#FEC12C] hover:text-[#325074] transition-all">
                            Start Investing <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 03. PORTFOLIO: THE COLLECTION */}
            <section id="portfolio" className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                    >
                        <div className="space-y-4">
                            <span className="text-[#FEC12C] font-black tracking-[0.4em] uppercase text-xs">OUR ASSET COLLECTION</span>
                            <h2 className="text-6xl font-black text-[#325074] tracking-tighter">FRACTIONAL LUXURY.</h2>
                        </div>
                        <p className="max-w-md text-slate-500 font-light italic">
                            Owning luxury real estate is no longer a privilege of the few. Discover assets curated for high-yield returns.
                        </p>
                    </motion.header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {displayProjects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-4 transition-all duration-500"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={p.name} />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-[#325074]/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                                        {p.tag}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#325074] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                        <Link to={`/projects/${p.id}`} className="block w-full py-4 bg-[#FEC12C] text-[#325074] rounded-xl font-black uppercase tracking-widest text-[10px] text-center hover:bg-white transition-colors">View Analytics</Link>
                                    </div>
                                </div>
                                <div className="p-10 space-y-6">
                                    <div>
                                        <h4 className="text-2xl font-black text-[#325074] tracking-tight">{p.name}</h4>
                                        <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                                            <MapPinIcon size={14} /> {p.location}
                                        </div>
                                        <p className="text-xs text-slate-500 mt-3 leading-relaxed">{p.description}</p>
                                    </div>

                                    {/* Property Specs */}
                                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                                        <div className="text-center">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Beds</p>
                                            <p className="text-sm font-black text-[#325074]">{p.beds}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Baths</p>
                                            <p className="text-sm font-black text-[#325074]">{p.baths}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Size (SQM)</p>
                                            <p className="text-sm font-black text-[#325074]">{p.sqm}</p>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {p.features.map((feature, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-50 text-[#325074] text-[9px] font-bold rounded-lg uppercase tracking-widest">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Completion & Units */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Completion</p>
                                            <p className="font-black text-[#325074]">{p.completion}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Units</p>
                                            <p className="font-black text-[#325074]">{p.totalUnits}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Entry Point</p>
                                            <p className="text-lg font-black text-[#325074]">
                                                {p.price.includes('Contact') ? (
                                                    <Link to="/contact" className="hover:text-[#FEC12C] transition-colors underline decoration-dotted underline-offset-4">
                                                        {p.price}
                                                    </Link>
                                                ) : p.price}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Yield</p>
                                            <p className="text-lg font-black text-emerald-500">
                                                {p.yield.includes('Contact') ? (
                                                    <Link to="/contact" className="hover:text-[#325074] transition-colors underline decoration-dotted underline-offset-4">
                                                        {p.yield}
                                                    </Link>
                                                ) : p.yield}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 04. INVESTMENT: INTERACTIVE SIMULATOR */}
            <section id="investment" className="py-32 bg-[#325074] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <span className="text-[#FEC12C] font-black tracking-[0.4em] uppercase text-xs">THE ONE SQUARE METER PROTOCOL</span>
                                <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
                                    MODULAR<br />WEALTH.
                                </h2>
                            </div>
                            <p className="text-xl text-white/60 font-light leading-relaxed">
                                Our co-ownership protocol allows you to purchase institutional-grade assets in 1 Square Meter increments. No middlemen, no management headaches—just pure asset appreciation.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <TrendingUpIcon />, text: "Appreciation backed by physical asset audits." },
                                    { icon: <ShieldCheck />, text: "SPV legal structure ensures individual title rights." },
                                    { icon: <Users />, text: "Join a community of 5,000+ Nigerian visionary owners." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-center">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#FEC12C] border border-white/10">{item.icon}</div>
                                        <p className="text-white/80 font-medium text-sm tracking-wide">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 p-12 shadow-2xl space-y-10"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs">Portfolio Simulator</h4>
                                <BrandLogo variant="dark" size="xs" layout="icon" />
                            </div>

                            <div className="space-y-8">
                                {/* Investment Amount Slider */}
                                <div className="space-y-4">
                                    <div className="flex justify-between text-white/60 text-[10px] font-black uppercase tracking-widest">
                                        <span>Investment Amount</span>
                                        <span className="text-[#FEC12C]">₦{(simAmount * 1000000).toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={5}
                                        max={300}
                                        step={5}
                                        value={simAmount}
                                        onChange={(e) => setSimAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#FEC12C]"
                                    />
                                    <div className="flex justify-between text-white/30 text-[9px] font-bold">
                                        <span>₦5M</span>
                                        <span>₦300M</span>
                                    </div>
                                </div>

                                {/* Time Horizon Selector */}
                                <div className="space-y-4">
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Investment Horizon</p>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[1, 3, 5, 10].map(yr => (
                                            <button
                                                key={yr}
                                                onClick={() => setSimYears(yr)}
                                                className={`py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${simYears === yr ? 'bg-[#FEC12C] text-[#325074]' : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'}`}
                                            >
                                                {yr}Y
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest mb-2">Initial Investment</p>
                                        <p className="text-xl font-black text-white tracking-tighter">₦{(simAmount * 1000000).toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest mb-2">Projected Value</p>
                                        <p className="text-xl font-black text-emerald-400 tracking-tighter">₦{projectedValue.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest mb-2">Est. Rental Yield</p>
                                        <p className="text-xl font-black text-[#FEC12C] tracking-tighter">₦{annualRentalYield.toLocaleString()}<span className="text-xs text-white/40">/yr</span></p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest mb-2">Total ROI</p>
                                        <p className="text-xl font-black text-emerald-400 tracking-tighter">+{totalROI}%</p>
                                    </div>
                                </div>

                                <Link to="/invest" className="block w-full py-6 bg-[#FEC12C] text-[#325074] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform text-center">
                                    Start Investing Now
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 05. SOCIAL PROOF & TRUST */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Stats Counter */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {[
                            { value: '₦12B+', label: 'Total Assets Under Development', icon: <Building2 size={24} /> },
                            { value: '5,200+', label: 'Active Investors', icon: <Users size={24} /> },
                            { value: '12%', label: 'Avg. Annual Yield', icon: <TrendingUpIcon size={24} /> },
                            { value: '50+', label: 'Years of Legacy', icon: <Award size={24} /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
                            >
                                <div className="w-12 h-12 bg-[#FEC12C]/10 rounded-2xl flex items-center justify-center text-[#FEC12C] mx-auto mb-4">{stat.icon}</div>
                                <p className="text-3xl md:text-4xl font-black text-[#325074] tracking-tighter mb-2">{stat.value}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <BadgeCheck size={32} className="text-emerald-500" />
                                <div>
                                    <p className="font-black text-[#325074] text-sm uppercase tracking-widest">Regulated & Compliant</p>
                                    <p className="text-xs text-slate-400">SEC-registered • CBN compliant • FIRS certified</p>
                                </div>
                            </div>
                            <div className="h-px md:h-12 w-full md:w-px bg-slate-200"></div>
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={32} className="text-blue-500" />
                                <div>
                                    <p className="font-black text-[#325074] text-sm uppercase tracking-widest">Asset-Backed</p>
                                    <p className="text-xs text-slate-400">Every investment is backed by physical, titled real estate</p>
                                </div>
                            </div>
                            <div className="h-px md:h-12 w-full md:w-px bg-slate-200"></div>
                            <div className="flex items-center gap-4">
                                <Building2 size={32} className="text-[#FEC12C]" />
                                <div>
                                    <p className="font-black text-[#325074] text-sm uppercase tracking-widest">Dantata & Sawoe</p>
                                    <p className="text-xs text-slate-400">Backed by Nigeria's premier construction conglomerate</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 06. INVESTMENT CTA BANNER */}
            <section className="py-32 bg-[#325074] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FEC12C]/20 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FEC12C]/10 rounded-full blur-[150px]"></div>
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto space-y-8"
                    >
                        <span className="text-[#FEC12C] font-black tracking-[0.4em] uppercase text-xs">YOUR LEGACY STARTS HERE</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85]">
                            READY TO OWN<br />YOUR FUTURE?
                        </h2>
                        <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl mx-auto">
                            Join thousands of visionary investors building generational wealth through premium Abuja real estate.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <Link to="/register" className="group flex items-center justify-center gap-4 bg-[#FEC12C] text-[#325074] px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white transition-all">
                                Create Free Account <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link to="/invest" className="flex items-center justify-center gap-4 bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                                Explore Properties
                            </Link>
                        </div>
                        <p className="text-white/30 text-xs">No minimum investment • Exit anytime • SEC regulated</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
