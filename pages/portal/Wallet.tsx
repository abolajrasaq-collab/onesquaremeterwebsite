import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockTransactions, mockWalletBalance } from '../../data/mockPortfolio';
import {
    ArrowUpRight,
    ArrowDownRight,
    Plus,
    Download,
    Clock,
    Filter,
    Wallet as WalletIcon,
    TrendingUp,
    Gift
} from 'lucide-react';
import SEO from '../../components/SEO';

type FilterType = 'all' | 'deposit' | 'withdrawal' | 'investment' | 'rental_yield' | 'referral_bonus';

const filterLabels: Record<FilterType, string> = {
    all: 'All',
    deposit: 'Deposits',
    withdrawal: 'Withdrawals',
    investment: 'Investments',
    rental_yield: 'Yields',
    referral_bonus: 'Bonuses',
};

const txnIcons: Record<string, React.ReactNode> = {
    deposit: <ArrowUpRight size={16} />,
    withdrawal: <ArrowDownRight size={16} />,
    investment: <ArrowDownRight size={16} />,
    rental_yield: <TrendingUp size={16} />,
    referral_bonus: <Gift size={16} />,
};

const txnColors: Record<string, { bg: string; text: string }> = {
    deposit: { bg: 'bg-emerald-50', text: 'text-emerald-500' },
    withdrawal: { bg: 'bg-red-50', text: 'text-red-500' },
    investment: { bg: 'bg-blue-50', text: 'text-[#325074]' },
    rental_yield: { bg: 'bg-amber-50', text: 'text-amber-500' },
    referral_bonus: { bg: 'bg-purple-50', text: 'text-purple-500' },
};

const WalletPage: React.FC = () => {
    const [filter, setFilter] = useState<FilterType>('all');
    const [showFundModal, setShowFundModal] = useState(false);

    const totalDeposits = mockTransactions.filter(t => t.type === 'deposit').reduce((s, t) => s + t.amount, 0);
    const totalYields = mockTransactions.filter(t => t.type === 'rental_yield').reduce((s, t) => s + t.amount, 0);

    const filteredTransactions = filter === 'all'
        ? mockTransactions
        : mockTransactions.filter(t => t.type === filter);

    return (
        <div className="space-y-8">
            <SEO title="Wallet — Owner Portal | 1SQM" description="Manage your wallet balance and transaction history." />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#325074] tracking-tighter">Wallet</h1>
                    <p className="text-slate-400 text-sm mt-1">Manage your funds and view transaction history.</p>
                </div>
                <button
                    onClick={() => setShowFundModal(true)}
                    className="inline-flex items-center gap-2 bg-[#FEC12C] text-[#325074] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-amber-400 transition-all shadow-lg"
                >
                    <Plus size={16} /> Fund Wallet
                </button>
            </div>

            {/* Balance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#325074] text-white rounded-2xl p-8 shadow-lg"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <WalletIcon size={20} className="text-[#FEC12C]" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Available Balance</p>
                    </div>
                    <p className="text-3xl font-black tracking-tighter">₦{mockWalletBalance.toLocaleString()}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
                >
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Total Deposits</p>
                    <p className="text-3xl font-black text-[#325074] tracking-tighter">₦{totalDeposits.toLocaleString()}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
                >
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Total Yields Earned</p>
                    <p className="text-3xl font-black text-emerald-500 tracking-tighter">₦{totalYields.toLocaleString()}</p>
                </motion.div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest flex items-center gap-2">
                        <Clock size={16} /> Transaction History
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                        <Filter size={14} className="text-slate-400" />
                        {(Object.keys(filterLabels) as FilterType[]).map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-[#325074] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                            >
                                {filterLabels[f]}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    {filteredTransactions.map((txn, i) => {
                        const colors = txnColors[txn.type] || { bg: 'bg-slate-50', text: 'text-slate-500' };
                        return (
                            <motion.div
                                key={txn.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.bg} ${colors.text}`}>
                                    {txnIcons[txn.type]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-[#325074] truncate">{txn.description}</p>
                                    <div className="flex items-center gap-3 mt-0.5">
                                        <span className="text-[10px] text-slate-400">{new Date(txn.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        <span className="text-[10px] text-slate-300">•</span>
                                        <span className="text-[10px] text-slate-300">{txn.reference}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`text-sm font-black tracking-tighter ${txn.amount > 0 ? 'text-emerald-500' : 'text-slate-600'}`}>
                                        {txn.amount > 0 ? '+' : ''}₦{Math.abs(txn.amount).toLocaleString()}
                                    </p>
                                    <span className={`text-[9px] font-bold uppercase tracking-widest ${txn.status === 'completed' ? 'text-emerald-400' : txn.status === 'pending' ? 'text-amber-400' : 'text-red-400'}`}>
                                        {txn.status}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {filteredTransactions.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-300 text-sm">No transactions found for this filter.</p>
                    </div>
                )}
            </div>

            {/* Fund Wallet Modal */}
            {showFundModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-black text-[#325074] tracking-tighter">Fund Your Wallet</h3>
                            <p className="text-slate-400 text-sm mt-1">Transfer funds to your 1SQM wallet to invest in properties.</p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bank Transfer Details</p>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Bank</span>
                                    <span className="text-sm font-bold text-[#325074]">Providus Bank</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Account Number</span>
                                    <span className="text-sm font-bold text-[#325074]">1234567890</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Account Name</span>
                                    <span className="text-sm font-bold text-[#325074]">1SQM / {`${mockTransactions[0]?.reference || 'User'}`}</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed">
                            Transfer any amount to the account above. Your wallet will be credited automatically within 5 minutes.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowFundModal(false)}
                                className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setShowFundModal(false)}
                                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#325074] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#264060] transition-all"
                            >
                                <Download size={14} /> Copy Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default WalletPage;
