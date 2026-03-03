import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import {
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    Briefcase,
    Plus,
    ArrowRight,
    Clock
} from 'lucide-react';
import SEO from '../../components/SEO';

const Dashboard: React.FC = () => {
    const { user } = useAuth();
    const { investments, transactions, walletBalance, isLoading } = useData();

    if (isLoading) {
        return (
            <div className="h-96 flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-[#FEC12C] rounded-full animate-spin" />
                <p className="text-slate-400 font-medium animate-pulse">Loading portfolio...</p>
            </div>
        );
    }

    const totalInvested = investments.reduce((sum, inv) => sum + inv.amountInvested, 0);
    const totalCurrentValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
    const totalROI = totalInvested > 0 ? ((totalCurrentValue - totalInvested) / totalInvested * 100).toFixed(1) : '0.0';
    const activeInvestments = investments.filter(inv => inv.status === 'Active').length;
    const recentTransactions = transactions.slice(0, 5);

    const portfolioAllocation = investments.map((inv, index) => ({
        name: inv.projectName,
        value: inv.currentValue,
        percentage: totalCurrentValue > 0 ? ((inv.currentValue / totalCurrentValue) * 100).toFixed(0) : '0',
        color: ['#325074', '#FEC12C', '#34d399'][index % 3] || '#94a3b8',
    }));

    return (
        <div className="space-y-8">
            <SEO title="Dashboard — Owner Portal | 1SQM" description="Overview of your investment portfolio." />

            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#325074] tracking-tighter">
                        Welcome back, {user?.firstName}.
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Here's an overview of your investment portfolio.</p>
                </div>
                <Link
                    to="/invest"
                    className="inline-flex items-center gap-2 bg-[#FEC12C] text-[#325074] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-amber-400 transition-all shadow-lg"
                >
                    <Plus size={16} /> New Investment
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        label: 'Portfolio Value',
                        value: `₦${totalCurrentValue.toLocaleString()}`,
                        change: `+${totalROI}%`,
                        positive: true,
                        icon: <Briefcase size={20} />,
                        bg: 'bg-[#325074]',
                        text: 'text-white',
                    },
                    {
                        label: 'Total Invested',
                        value: `₦${totalInvested.toLocaleString()}`,
                        change: `${activeInvestments} active`,
                        positive: true,
                        icon: <TrendingUp size={20} />,
                        bg: 'bg-white',
                        text: 'text-[#325074]',
                    },
                    {
                        label: 'Wallet Balance',
                        value: `₦${walletBalance.toLocaleString()}`,
                        change: 'Available',
                        positive: true,
                        icon: <Wallet size={20} />,
                        bg: 'bg-white',
                        text: 'text-[#325074]',
                    },
                    {
                        label: 'Total Returns',
                        value: `₦${(totalCurrentValue - totalInvested).toLocaleString()}`,
                        change: `+${totalROI}% ROI`,
                        positive: true,
                        icon: <TrendingUp size={20} />,
                        bg: 'bg-emerald-500',
                        text: 'text-white',
                    },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`${stat.bg} ${stat.text} rounded-2xl p-6 shadow-lg border ${stat.bg === 'bg-white' ? 'border-slate-100' : 'border-transparent'}`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <p className={`text-[10px] font-black uppercase tracking-widest ${stat.bg === 'bg-white' ? 'text-slate-400' : 'text-white/60'}`}>{stat.label}</p>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg === 'bg-white' ? 'bg-slate-50' : 'bg-white/10'}`}>
                                {stat.icon}
                            </div>
                        </div>
                        <p className="text-2xl font-black tracking-tighter">{stat.value}</p>
                        <div className="flex items-center gap-1 mt-2">
                            {stat.positive ? <ArrowUpRight size={14} className="text-emerald-400" /> : <ArrowDownRight size={14} className="text-red-400" />}
                            <span className={`text-xs font-bold ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>{stat.change}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Portfolio Allocation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
                >
                    <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest mb-6">Portfolio Allocation</h3>
                    <div className="space-y-4">
                        {portfolioAllocation.map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-slate-600">{item.name}</span>
                                    <span className="text-xs font-black text-[#325074]">{item.percentage}%</span>
                                </div>
                                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.percentage}%` }}
                                        transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    ></motion.div>
                                </div>
                                <p className="text-[10px] text-slate-400">₦{item.value.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest">Recent Activity</h3>
                        <Link to="/portal/wallet" className="text-xs text-[#FEC12C] font-bold hover:text-[#325074] flex items-center gap-1">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {recentTransactions.map((txn, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${txn.amount > 0 ? 'bg-emerald-50 text-emerald-500' : 'bg-orange-50 text-orange-500'}`}>
                                    {txn.amount > 0 ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-[#325074] truncate">{txn.description}</p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <Clock size={12} className="text-slate-300" />
                                        <span className="text-[10px] text-slate-400">{new Date(txn.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                    </div>
                                </div>
                                <p className={`text-sm font-black tracking-tighter ${txn.amount > 0 ? 'text-emerald-500' : 'text-slate-600'}`}>
                                    {txn.amount > 0 ? '+' : ''}₦{Math.abs(txn.amount).toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Investment Cards */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest">Your Investments</h3>
                    <Link to="/portal/portfolio" className="text-xs text-[#FEC12C] font-bold hover:text-[#325074] flex items-center gap-1">
                        View Details <ArrowRight size={14} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {investments.map((inv, i) => (
                        <motion.div
                            key={inv.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group hover:shadow-xl transition-all"
                        >
                            <div className="h-36 bg-[#325074] relative overflow-hidden">
                                <img src={inv.image} alt={inv.projectName} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${inv.status === 'Active' ? 'bg-emerald-500 text-white' : inv.status === 'Matured' ? 'bg-[#FEC12C] text-[#325074]' : 'bg-slate-200 text-slate-500'}`}>
                                        {inv.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <h4 className="text-lg font-black text-[#325074] tracking-tight">{inv.projectName}</h4>
                                    <p className="text-xs text-slate-400">{inv.unitName}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Current Value</p>
                                        <p className="text-sm font-black text-[#325074]">₦{inv.currentValue.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">ROI</p>
                                        <p className="text-sm font-black text-emerald-500">+{inv.appreciationRate}%</p>
                                    </div>
                                </div>
                                {inv.nextPaymentDate && (
                                    <div className="bg-amber-50 px-4 py-3 rounded-xl">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] text-amber-600 font-bold uppercase tracking-widest">Next Payment</span>
                                            <span className="text-xs font-black text-amber-700">{new Date(inv.nextPaymentDate).toLocaleDateString('en-NG', { day: 'numeric', month: 'short' })}</span>
                                        </div>
                                        <p className="text-sm font-black text-amber-700 mt-1">₦{inv.nextPaymentAmount?.toLocaleString()}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
