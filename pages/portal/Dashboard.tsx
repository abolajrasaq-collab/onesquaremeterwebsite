import * as React from 'react';
import { motion } from 'framer-motion';
import { 
    TrendingUp, 
    Users, 
    ArrowUpRight, 
    ArrowDownRight, 
    PieChart, 
    Activity,
    CreditCard,
    Briefcase,
    Zap,
    Clock,
    DollarSign,
    MoreHorizontal
} from 'lucide-react';
import SEO from '../../components/SEO';

const Dashboard: React.FC = () => {
    const stats = [
        { 
            label: 'Total Asset Value', 
            value: '₦145.2M', 
            change: '+12.5%', 
            isPositive: true, 
            icon: <Briefcase className="text-[#325074]" size={24} />,
            color: 'bg-emerald-50'
        },
        { 
            label: 'Total Real Yield', 
            value: '₦12.8M', 
            change: '+8.2%', 
            isPositive: true, 
            icon: <TrendingUp className="text-[#325074]" size={24} />,
            color: 'bg-emerald-50'
        },
        { 
            label: 'Properties Owned', 
            value: '12', 
            change: '0%', 
            isPositive: true, 
            icon: <PieChart className="text-[#325074]" size={24} />,
            color: 'bg-slate-50'
        },
        { 
            label: 'Active Co-investors', 
            value: '1,280', 
            change: '+45', 
            isPositive: true, 
            icon: <Users className="text-[#325074]" size={24} />,
            color: 'bg-emerald-50'
        },
    ];

    const recentAcquisitions = [
        { name: 'The MetroView', type: 'Residential', units: 3, value: '₦50M', status: 'Active', yield: '8.5%' },
        { name: 'Dantata Hostels', type: 'Co-Living', units: 5, value: '₦35M', status: 'Pending', yield: '12%' },
        { name: 'Copa Cabana II', type: 'Estate', units: 2, value: '₦45M', status: 'Active', yield: '7.2%' },
    ];

    return (
        <div className="space-y-10 pb-20">
            <SEO 
                title="Dashboard | 1SQM Investor Portal" 
                description="Monitor your real estate performance and total yields."
            />

            {/* Welcome Banner */}
            <section className="relative overflow-hidden bg-[#325074] rounded-xl p-8 lg:p-12 text-white">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="relative z-10 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-[#FEC12C] text-[#325074] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Premium Member</span>
                            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">ID · 007241</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black mb-6 uppercase leading-tight tracking-tight">
                            Your Portfolio <br />Is <span className="text-[#FEC12C]">Ascending.</span>
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
                            Track your real estate yields and monitor the performance of your fractional assets in real-time.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#FEC12C] text-[#325074] px-10 py-5 rounded-lg font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-white">
                                Invest More →
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-lg font-black text-xs uppercase tracking-[0.2em] transition-all">
                                Download Report
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:border-[#FEC12C] transition-colors group"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className="p-4 bg-slate-50 rounded-lg group-hover:bg-[#325074] group-hover:text-white transition-colors duration-500">
                                {React.cloneElement(stat.icon as React.ReactElement<any>, { className: 'group-hover:text-white transition-colors' })}
                            </div>
                            <div className={`flex items-center gap-1 ${stat.isPositive ? 'text-emerald-500' : 'text-rose-500'} font-black text-xs`}>
                                {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.change}
                            </div>
                        </div>
                        <h3 className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2">{stat.label}</h3>
                        <p className="text-3xl font-black text-[#325074] tracking-tight">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Performance Chart Placeholder */}
                <div className="lg:col-span-2 bg-white rounded-xl p-8 border border-slate-200">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-[#325074] font-black text-2xl uppercase tracking-tight">Portfolio Growth</h2>
                            <p className="text-slate-400 text-xs font-medium mt-1 uppercase tracking-widest">Yield Performance over 12 months</p>
                        </div>
                        <div className="flex bg-slate-50 p-1 rounded-lg border border-slate-100">
                            {['1W', '1M', '3M', '6M', '1Y', 'ALL'].map((time) => (
                                <button key={time} className={`px-4 py-2 rounded text-[10px] font-black transition-all ${time === '1Y' ? 'bg-[#325074] text-white shadow-md' : 'text-slate-400 hover:text-[#325074]'}`}>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="h-[350px] w-full flex items-end gap-3 justify-between group">
                        {[40, 65, 45, 80, 55, 95, 70, 85, 60, 40, 75, 90].map((height, i) => (
                            <div key={i} className="flex-1 group/bar flex flex-col items-center">
                                <div 
                                    className="w-full bg-slate-100 rounded-t-xl group-hover:bg-slate-200 transition-all duration-500 relative overflow-hidden"
                                    style={{ height: `${height}%` }}
                                >
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        animate={{ height: '100%' }}
                                        transition={{ duration: 1, delay: i * 0.05 }}
                                        className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#325074] to-[#325074]/80 opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <span className="text-[9px] font-black text-slate-300 mt-4 uppercase group-focus:text-[#325074]">{['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info sidebar */}
                <div className="space-y-8">
                    {/* Wallet Card */}
                    <div className="bg-[#325074] rounded-xl p-8 text-white relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full border border-white/10 blur-xl"></div>
                        <CreditCard className="mb-8 text-[#FEC12C]" size={36} />
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-glow">Wallet Balance</p>
                        <h3 className="text-4xl font-black mb-8 tracking-tight">₦1,245,670.32</h3>
                        <button className="w-full bg-[#FEC12C] text-[#325074] py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white">
                            Withdraw Yields
                        </button>
                    </div>

                    {/* Timeline Activity */}
                    <div className="bg-white rounded-xl p-8 border border-slate-200 h-[calc(100%-14.5rem)]">
                        <h2 className="text-[#325074] font-black text-xl uppercase tracking-tight mb-8">Asset Updates</h2>
                        <div className="space-y-8">
                            {[
                                { icon: <Activity className="text-emerald-500" />, title: 'Yield Distributed', time: '2 hours ago', desc: '₦14,250.00' },
                                { icon: <CreditCard className="text-blue-500" />, title: 'Asset Revaluation', time: '1 day ago', desc: 'MetroView +4.2%' },
                                { icon: <Clock className="text-amber-500" />, title: 'Project Update', time: '3 days ago', desc: 'Hostels Milestone 4' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 relative group">
                                    {i !== 2 && <div className="absolute left-[1.15rem] top-10 bottom-[-2rem] w-px bg-slate-100"></div>}
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-[#325074]/30 transition-all">
                                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                                    </div>
                                    <div>
                                        <p className="text-[#325074] font-black text-xs uppercase tracking-tight">{item.title}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-slate-400 text-[10px] font-bold">{item.desc}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                                            <span className="text-slate-400 text-[10px] font-bold uppercase">{item.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <section className="bg-white rounded-xl p-8 border border-slate-200 overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-[#325074] font-black text-2xl uppercase tracking-tight">Active Holdings</h2>
                    <button className="text-[#325074] text-xs font-black uppercase tracking-widest hover:underline decoration-[#FEC12C] underline-offset-8 decoration-2">View Portfolio →</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="text-left pb-6 text-slate-400 text-[10px] font-black uppercase tracking-widest px-4">Property</th>
                                <th className="text-left pb-6 text-slate-400 text-[10px] font-black uppercase tracking-widest px-4">Type</th>
                                <th className="text-left pb-6 text-slate-400 text-[10px] font-black uppercase tracking-widest px-4 text-center">Units</th>
                                <th className="text-left pb-6 text-slate-400 text-[10px] font-black uppercase tracking-widest px-4">Yield</th>
                                <th className="text-left pb-6 text-slate-400 text-[10px] font-black uppercase tracking-widest px-4">Market Value</th>
                                <th className="text-left pb-6 text-slate-400 text-[10px] font-black uppercase tracking-widest px-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {recentAcquisitions.map((item, i) => (
                                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="py-6 px-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden shadow-sm">
                                                <div className="w-full h-full bg-[#325074]/10 animate-pulse"></div>
                                            </div>
                                            <span className="text-[#325074] font-black text-sm uppercase tracking-tight">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4">
                                        <span className="bg-slate-100 text-[#325074] px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest">{item.type}</span>
                                    </td>
                                    <td className="py-6 px-4 text-center">
                                        <span className="text-[#325074] font-bold text-sm tracking-tighter">{item.units}</span>
                                    </td>
                                    <td className="py-6 px-4 focus:outline-none">
                                        <div className="flex items-center gap-2">
                                            <Zap size={14} className="text-[#FEC12C]" />
                                            <span className="text-emerald-500 font-black text-xs">{item.yield}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4">
                                        <span className="text-[#325074] font-black text-sm tracking-tight">{item.value}</span>
                                    </td>
                                    <td className="py-6 px-4 text-center">
                                        <button className="p-2.5 hover:bg-white hover:shadow-md rounded-lg transition-all text-[#325074] border border-transparent hover:border-slate-100">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
