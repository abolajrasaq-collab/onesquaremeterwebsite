import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Briefcase, 
    PieChart, 
    ArrowUpRight, 
    Zap, 
    Filter, 
    LayoutGrid, 
    LayoutList,
    Search,
    MapPin,
    Calendar,
    ChevronRight,
    TrendingUp,
    ShieldCheck,
    Download
} from 'lucide-react';
import SEO from '../../components/SEO';

const Portfolio: React.FC = () => {
    const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
    const [filter, setFilter] = React.useState('All');

    const holdings = [
        { 
            id: 'PROP-001', 
            name: 'The MetroView', 
            units: 5, 
            invested: '₦10,500,000', 
            current: '₦11,400,000', 
            yield: '8.5%', 
            status: 'Selling',
            location: 'Jabi, Abuja',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800'
        },
        { 
            id: 'PROP-002', 
            name: 'Dantata Hostels', 
            units: 12, 
            invested: '₦25,000,000', 
            current: '₦26,850,000', 
            yield: '12.2%', 
            status: 'Sold Out',
            location: 'Nile District, Abuja',
            image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800'
        },
        { 
            id: 'PROP-003', 
            name: 'Copa Cabana II', 
            units: 3, 
            invested: '₦15,000,000', 
            current: '₦15,200,000', 
            yield: '7.8%', 
            status: 'Selling',
            location: 'Wumba District, Abuja',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
        },
    ];

    const stats = [
        { label: 'Total Invested', value: '₦50.5M', icon: <Briefcase size={20} />, trend: '+4.2%' },
        { label: 'Portfolio Value', value: '₦53.4M', icon: <TrendingUp size={20} />, trend: '+12.5%' },
        { label: 'Avg Rental Yield', value: '9.4%', icon: <Zap size={20} />, trend: 'Target: 10%' },
        { label: 'Total Properties', value: '12 Assets', icon: <ShieldCheck size={20} />, trend: 'Verified' },
    ];

    return (
        <div className="space-y-12 pb-20 selection:bg-[#325074]/10 selection:text-[#325074] font-outfit">
            <SEO 
                title="Portfolio · Asset Management | 1SQM"
                description="Overview of your fractional real estate holdings."
            />

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group"
                    >
                        <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-[#325074] border border-slate-100 group-hover:bg-[#325074] group-hover:text-white transition-all duration-500 mb-6">
                            {stat.icon}
                        </div>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
                        <h3 className="text-3xl font-black text-[#325074] tracking-tight mb-2">{stat.value}</h3>
                        <p className={`text-[10px] font-black uppercase tracking-widest ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-slate-400'}`}>
                            {stat.trend}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Filter & Search Bar */}
            <section className="bg-white rounded-xl p-10 border border-slate-200/60 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                            {['All', 'Residential', 'Hostels', 'Commercial'].map(tab => (
                                <button 
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={`px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filter === tab ? 'bg-[#325074] text-white shadow-md' : 'text-slate-400 hover:text-[#325074]'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="w-px h-10 bg-slate-100 hidden md:block"></div>
                        <div className="flex bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-[#325074] text-white shadow-md' : 'text-slate-400 hover:text-[#325074]'}`}
                            >
                                <LayoutGrid size={18} />
                            </button>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-[#325074] text-white shadow-md' : 'text-slate-400 hover:text-[#325074]'}`}
                            >
                                <LayoutList size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-72 group">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#325074] transition-colors" />
                            <input 
                                type="text"
                                placeholder="Search by Project Name..."
                                className="w-full bg-slate-50 border border-slate-100 pl-11 pr-4 py-4 rounded-lg text-xs font-black uppercase tracking-widest focus:bg-white focus:border-[#325074]/30 transition-all outline-none"
                            />
                        </div>
                        <button className="flex items-center gap-3 bg-[#325074] text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-md shadow-indigo-900/10 active:scale-95 transition-all">
                            <Download size={18} /> Export List
                        </button>
                    </div>
                </div>
            </section>

            {/* Assets Display */}
            <AnimatePresence mode="wait">
                {viewMode === 'grid' ? (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                        {holdings.map((asset, i) => (
                            <motion.div
                                key={asset.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500"
                            >
                                <div className="relative px-6 pt-6 mb-8">
                                    <div className="relative h-64 rounded-xl overflow-hidden">
                                        <img src={asset.image} alt={asset.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#325074] to-transparent">
                                            <div className="flex items-center gap-2 mb-2">
                                                <MapPin size={12} className="text-[#FEC12C]" />
                                                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">{asset.location}</span>
                                            </div>
                                            <h3 className="text-white font-black text-xl uppercase tracking-tight">{asset.name}</h3>
                                        </div>
                                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                                            <span className="bg-white/90 backdrop-blur-md text-[#325074] px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/20 shadow-md">
                                                {asset.units} Units
                                            </span>
                                            <span className="bg-[#325074]/90 backdrop-blur-md text-[#FEC12C] px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-md">
                                                {asset.yield} Yield
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-10 pb-10">
                                    <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b border-slate-50 relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bottom-0 w-px bg-slate-50"></div>
                                        <div>
                                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Initial Cost</p>
                                            <p className="text-xl font-black text-[#325074] tracking-tight">{asset.invested}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Market Val</p>
                                            <p className="text-xl font-black text-[#325074] tracking-tight">{asset.current}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
                                                <ArrowUpRight size={16} />
                                            </div>
                                            <span className="text-emerald-500 font-black text-xs uppercase tracking-tight">+8.5% Incr.</span>
                                        </div>
                                        <button className="flex items-center gap-3 bg-[#325074] text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-md shadow-indigo-900/10 active:scale-95 transition-all">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-sm"
                    >
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="text-left py-8 px-10 text-slate-400 text-[10px] font-black uppercase tracking-widest">Asset Details</th>
                                    <th className="text-left py-8 px-10 text-slate-400 text-[10px] font-black uppercase tracking-widest text-center">Owned</th>
                                    <th className="text-left py-8 px-10 text-slate-400 text-[10px] font-black uppercase tracking-widest">Growth</th>
                                    <th className="text-left py-8 px-10 text-slate-400 text-[10px] font-black uppercase tracking-widest">Market Value</th>
                                    <th className="text-right py-8 px-10 text-slate-400 text-[10px] font-black uppercase tracking-widest">Yield</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {holdings.map((asset, i) => (
                                    <tr key={i} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                                        <td className="py-8 px-10">
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-12 bg-slate-100 rounded-xl overflow-hidden shadow-sm">
                                                    <img src={asset.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                </div>
                                                <div>
                                                    <p className="text-[#325074] font-black text-sm uppercase tracking-tight">{asset.name}</p>
                                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">{asset.location}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-8 px-10 text-center">
                                            <span className="bg-slate-100 text-[#325074] px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200/60">
                                                {asset.units} Meters
                                            </span>
                                        </td>
                                        <td className="py-8 px-10">
                                            <div className="flex items-center gap-2 text-emerald-500 font-black text-xs">
                                                <ArrowUpRight size={14} />
                                                <span>+12.4%</span>
                                            </div>
                                        </td>
                                        <td className="py-8 px-10">
                                            <span className="text-[#325074] font-black text-sm tracking-tight">{asset.current}</span>
                                        </td>
                                        <td className="py-8 px-10 text-right">
                                            <span className="text-emerald-500 font-black text-sm">{asset.yield} APY</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
