import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import {
    User,
    Mail,
    Phone,
    Bell,
    Shield,
    Lock,
    CheckCircle2,
    Clock,
    AlertCircle,
    Save,
    Eye,
    EyeOff
} from 'lucide-react';
import SEO from '../../components/SEO';

const Settings: React.FC = () => {
    const { user, updateProfile } = useAuth();
    const [showToast, setShowToast] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security'>('profile');

    const [form, setForm] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone: user?.phone || '',
    });

    const [notifs, setNotifs] = useState({
        email: user?.notificationPrefs?.email ?? true,
        sms: user?.notificationPrefs?.sms ?? true,
        push: user?.notificationPrefs?.push ?? false,
    });

    const handleSaveProfile = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleSaveNotifications = () => {
        updateProfile({
            notificationPrefs: notifs,
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const kycStatusConfig = {
        verified: { label: 'Verified', icon: <CheckCircle2 size={16} />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        pending: { label: 'Under Review', icon: <Clock size={16} />, color: 'text-amber-500', bg: 'bg-amber-50' },
        not_started: { label: 'Not Started', icon: <AlertCircle size={16} />, color: 'text-red-500', bg: 'bg-red-50' },
    };

    const kyc = kycStatusConfig[user?.kycStatus || 'not_started'];

    const tabs = [
        { id: 'profile' as const, label: 'Profile', icon: <User size={16} /> },
        { id: 'notifications' as const, label: 'Notifications', icon: <Bell size={16} /> },
        { id: 'security' as const, label: 'Security', icon: <Lock size={16} /> },
    ];

    const inputClass = "w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent transition-all";

    return (
        <div className="space-y-8">
            <SEO title="Settings — Owner Portal | 1SQM" description="Manage your profile, notifications, and security settings." />

            <div>
                <h1 className="text-3xl font-black text-[#325074] tracking-tighter">Settings</h1>
                <p className="text-slate-400 text-sm mt-1">Manage your account preferences and security.</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 w-fit">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-[#325074] text-white' : 'text-slate-400 hover:bg-slate-50'}`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    {/* KYC Status */}
                    <div className={`${kyc.bg} rounded-2xl p-6 flex items-center gap-4`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${kyc.bg} ${kyc.color}`}>
                            <Shield size={20} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-[#325074]">Identity Verification (KYC)</p>
                            <div className="flex items-center gap-2 mt-1">
                                {kyc.icon}
                                <span className={`text-xs font-bold ${kyc.color}`}>{kyc.label}</span>
                            </div>
                        </div>
                        {user?.kycStatus !== 'verified' && (
                            <button className="px-4 py-2 bg-[#325074] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#264060] transition-all">
                                Start KYC
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleSaveProfile} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 space-y-6">
                        <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <User size={12} /> First Name
                                </label>
                                <input
                                    type="text"
                                    value={form.firstName}
                                    onChange={(e) => setForm(f => ({ ...f, firstName: e.target.value }))}
                                    className={inputClass}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <User size={12} /> Last Name
                                </label>
                                <input
                                    type="text"
                                    value={form.lastName}
                                    onChange={(e) => setForm(f => ({ ...f, lastName: e.target.value }))}
                                    className={inputClass}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <Mail size={12} /> Email Address
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                                    className={inputClass}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <Phone size={12} /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <p className="text-[10px] text-slate-400">
                                Member since {user?.joinDate ? new Date(user.joinDate).toLocaleDateString('en-NG', { month: 'long', year: 'numeric' }) : 'N/A'}
                                {' • '} Referral code: <span className="text-[#325074] font-bold">{user?.referralCode}</span>
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-[#325074] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#264060] transition-all"
                        >
                            <Save size={16} /> Save Changes
                        </button>
                    </form>
                </motion.div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 space-y-6">
                        <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest">Notification Preferences</h3>

                        <div className="space-y-4">
                            {[
                                { key: 'email' as const, label: 'Email Notifications', desc: 'Receive investment updates, payment reminders, and portfolio reports via email.' },
                                { key: 'sms' as const, label: 'SMS Notifications', desc: 'Get text alerts for payment confirmations and urgent account updates.' },
                                { key: 'push' as const, label: 'Push Notifications', desc: 'Receive real-time alerts in your browser for portfolio changes and opportunities.' },
                            ].map(item => (
                                <div key={item.key} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                                    <div className="flex-1 mr-4">
                                        <p className="text-sm font-bold text-[#325074]">{item.label}</p>
                                        <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                                    </div>
                                    <button
                                        onClick={() => setNotifs(n => ({ ...n, [item.key]: !n[item.key] }))}
                                        className={`w-12 h-7 rounded-full transition-colors relative ${notifs[item.key] ? 'bg-[#FEC12C]' : 'bg-slate-200'}`}
                                    >
                                        <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${notifs[item.key] ? 'left-6' : 'left-1'}`}></span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleSaveNotifications}
                            className="flex items-center gap-2 bg-[#325074] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#264060] transition-all"
                        >
                            <Save size={16} /> Save Preferences
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 space-y-6">
                        <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest">Change Password</h3>

                        <div className="space-y-5 max-w-md">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter current password"
                                        className={`${inputClass} pr-12`}
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">New Password</label>
                                <input type="password" placeholder="Enter new password" className={inputClass} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Confirm New Password</label>
                                <input type="password" placeholder="Repeat new password" className={inputClass} />
                            </div>
                        </div>

                        <button
                            onClick={() => { setShowToast(true); setTimeout(() => setShowToast(false), 3000); }}
                            className="flex items-center gap-2 bg-[#325074] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#264060] transition-all"
                        >
                            <Lock size={16} /> Update Password
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Toast */}
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-8 right-8 bg-[#325074] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
                >
                    <CheckCircle2 size={20} className="text-[#FEC12C]" />
                    <span className="text-sm font-bold">Changes saved successfully!</span>
                </motion.div>
            )}
        </div>
    );
};

export default Settings;
