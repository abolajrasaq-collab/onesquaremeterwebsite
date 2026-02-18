import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { mockInvestments } from '../../data/mockPortfolio';
import {
    TrendingUp,
    Calendar,
    FileText,
    ArrowRight,
    Download,
    CheckCircle2,
    Clock,
    AlertCircle
} from 'lucide-react';
import SEO from '../../components/SEO';

const Portfolio: React.FC = () => {
    const totalInvested = mockInvestments.reduce((sum, inv) => sum + inv.amountInvested, 0);
    const totalCurrentValue = mockInvestments.reduce((sum, inv) => sum + inv.currentValue, 0);
    const totalReturns = totalCurrentValue - totalInvested;

    return (
        <div className="space-y-8">
            <SEO title="Portfolio — Owner Portal | 1SQM" description="Track and manage your real estate investments." />

            <div>
                <h1 className="text-3xl font-black text-[#325074] tracking-tighter">Your Portfolio</h1>
                <p className="text-slate-400 text-sm mt-1">Track performance, payments, and documents for each investment.</p>
            </div>

            {/* Summary Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    { label: 'Total Invested', value: `₦${totalInvested.toLocaleString()}` },
                    { label: 'Current Value', value: `₦${totalCurrentValue.toLocaleString()}` },
                    { label: 'Total Returns', value: `₦${totalReturns.toLocaleString()}`, positive: true }
                ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                        <p className={`text-2xl font-black tracking-tighter mt-2 ${item.positive ? 'text-emerald-500' : 'text-[#325074]'}`}>{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Investment Detail Cards */}
            <div className="space-y-8">
                {mockInvestments.map((inv, i) => {
                    const paymentProgress = Math.round((inv.totalPaid / inv.totalCost) * 100);
                    const appreciation = ((inv.currentValue - inv.amountInvested) / inv.amountInvested * 100).toFixed(1);

                    return (
                        <motion.div
                            key={inv.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
                        >
                            <div className="md:flex">
                                {/* Image */}
                                <div className="md:w-72 h-48 md:h-auto bg-[#325074] relative overflow-hidden flex-shrink-0">
                                    <img src={inv.image} alt={inv.projectName} className="w-full h-full object-cover opacity-80" />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${inv.status === 'Active' ? 'bg-emerald-500 text-white' : inv.status === 'Matured' ? 'bg-[#FEC12C] text-[#325074]' : 'bg-slate-200 text-slate-500'}`}>
                                            {inv.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1 p-8 space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-black text-[#325074] tracking-tight">{inv.projectName}</h3>
                                            <p className="text-sm text-slate-400 mt-1">{inv.unitName} • Invested {new Date(inv.investmentDate).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}</p>
                                        </div>
                                        <Link
                                            to={`/projects/${inv.projectId}`}
                                            className="inline-flex items-center gap-2 text-xs text-[#FEC12C] font-bold hover:text-[#325074]"
                                        >
                                            View Project <ArrowRight size={14} />
                                        </Link>
                                    </div>

                                    {/* Performance Grid */}
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Invested</p>
                                            <p className="text-lg font-black text-[#325074] mt-1">₦{inv.amountInvested.toLocaleString()}</p>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Current Value</p>
                                            <p className="text-lg font-black text-emerald-500 mt-1">₦{inv.currentValue.toLocaleString()}</p>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <div className="flex items-center gap-1">
                                                <TrendingUp size={12} className="text-emerald-500" />
                                                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Appreciation</p>
                                            </div>
                                            <p className="text-lg font-black text-emerald-500 mt-1">+{appreciation}%</p>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Annual Yield</p>
                                            <p className="text-lg font-black text-[#FEC12C] mt-1">{inv.rentalYieldRate}%</p>
                                        </div>
                                    </div>

                                    {/* Payment Progress */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <p className="text-xs font-bold text-slate-500">Payment Progress</p>
                                            <p className="text-xs font-black text-[#325074]">{paymentProgress}% Complete</p>
                                        </div>
                                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${paymentProgress}%` }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                                className={`h-full rounded-full ${paymentProgress === 100 ? 'bg-emerald-500' : 'bg-[#FEC12C]'}`}
                                            ></motion.div>
                                        </div>
                                        <div className="flex justify-between text-[10px] text-slate-400">
                                            <span>₦{inv.totalPaid.toLocaleString()} paid</span>
                                            <span>₦{inv.totalCost.toLocaleString()} total</span>
                                        </div>
                                    </div>

                                    {/* Bottom Actions */}
                                    <div className="flex flex-wrap gap-3">
                                        {inv.nextPaymentDate && (
                                            <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl">
                                                <Calendar size={14} className="text-amber-600" />
                                                <span className="text-xs font-bold text-amber-700">
                                                    Next: ₦{inv.nextPaymentAmount?.toLocaleString()} on {new Date(inv.nextPaymentDate).toLocaleDateString('en-NG', { day: 'numeric', month: 'short' })}
                                                </span>
                                            </div>
                                        )}
                                        <button className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-200 transition-colors">
                                            <Download size={14} /> Certificate
                                        </button>
                                        <button className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-200 transition-colors">
                                            <FileText size={14} /> Statement
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Payment Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest mb-6">Upcoming Payments</h3>
                <div className="space-y-4">
                    {mockInvestments
                        .filter(inv => inv.nextPaymentDate)
                        .sort((a, b) => new Date(a.nextPaymentDate!).getTime() - new Date(b.nextPaymentDate!).getTime())
                        .map((inv, i) => {
                            const daysUntil = Math.ceil((new Date(inv.nextPaymentDate!).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
                            return (
                                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${daysUntil <= 7 ? 'bg-red-50 text-red-500' : daysUntil <= 30 ? 'bg-amber-50 text-amber-500' : 'bg-emerald-50 text-emerald-500'}`}>
                                        {daysUntil <= 7 ? <AlertCircle size={18} /> : daysUntil <= 30 ? <Clock size={18} /> : <CheckCircle2 size={18} />}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-[#325074]">{inv.projectName} — {inv.unitName}</p>
                                        <p className="text-[10px] text-slate-400 mt-0.5">
                                            Due {new Date(inv.nextPaymentDate!).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })} • {daysUntil} days away
                                        </p>
                                    </div>
                                    <p className="text-sm font-black text-[#325074]">₦{inv.nextPaymentAmount?.toLocaleString()}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
