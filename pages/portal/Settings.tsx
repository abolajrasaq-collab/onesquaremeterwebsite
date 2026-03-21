import * as React from 'react';
import { motion } from 'framer-motion';
import { 
    User, 
    Shield, 
    Bell, 
    Lock, 
    Smartphone, 
    Globe, 
    ChevronRight,
    Camera,
    CheckCircle2
} from 'lucide-react';
import SEO from '../../components/SEO';
import { useAuth } from '../../context/AuthContext';

const Settings: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab ] = React.useState('Profile');

    const tabs = [
        { name: 'Profile', icon: <User size={18} /> },
        { name: 'Security', icon: <Shield size={18} /> },
        { name: 'Notifications', icon: <Bell size={18} /> },
        { name: 'Devices', icon: <Smartphone size={18} /> },
    ];

    return (
        <div className="space-y-10 pb-20 font-outfit">
            <SEO 
                title="Settings · Investor Portal | 1SQM"
                description="Manage your account preferences and security."
            />

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Fixed sidebar for settings */}
                <aside className="lg:w-80 shrink-0">
                    <div className="bg-white rounded-xl p-8 border border-slate-200/60 shadow-sm sticky top-32">
                        <div className="flex flex-col gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`
                                        flex items-center gap-4 px-6 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all
                                        ${activeTab === tab.name 
                                            ? 'bg-[#325074] text-white shadow-md' 
                                            : 'text-slate-400 hover:text-[#325074] hover:bg-slate-50'}
                                    `}
                                >
                                    {tab.icon}
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 space-y-8">
                    {activeTab === 'Profile' && (
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            {/* Profile Information */}
                            <section className="bg-white rounded-xl p-10 border border-slate-200/60 shadow-sm">
                                <div className="flex items-center justify-between mb-12">
                                    <h2 className="text-[#325074] font-black text-2xl uppercase tracking-tight">Account Profile</h2>
                                    <button className="bg-slate-50 text-[#325074] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-100">Edit Details</button>
                                </div>

                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    <div className="relative group">
                                        <div className="w-32 h-32 rounded-2xl bg-slate-100 flex items-center justify-center text-[#325074] border-4 border-white shadow-sm overflow-hidden">
                                            {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : <User size={48} />}
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 p-3 bg-[#FEC12C] text-[#325074] rounded-xl shadow-md hover:scale-105 transition-all outline-none border border-amber-300">
                                            <Camera size={18} />
                                        </button>
                                    </div>

                                    <div className="flex-1 grid md:grid-cols-2 gap-8 w-full">
                                        {[
                                            { label: 'Full Name', value: user?.name || 'Amara Ibrahim' },
                                            { label: 'Email Address', value: user?.email || 'amara.ibrahim@example.com' },
                                            { label: 'Role', value: user?.role || 'Investor' },
                                            { label: 'Member Since', value: 'June 2024' },
                                        ].map((field, i) => (
                                            <div key={i} className="pb-6 border-b border-slate-50">
                                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{field.label}</p>
                                                <p className="text-sm font-black text-[#325074] uppercase tracking-tight">{field.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* KYC Status */}
                            <section className="bg-emerald-50 rounded-xl p-10 border border-emerald-100 relative overflow-hidden">
                                <CheckCircle2 className="absolute top-[-20px] right-[-20px] w-48 h-48 text-emerald-500/5 rotate-12 pointer-events-none" />
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-100">
                                        <Shield size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-emerald-900 font-black text-xl uppercase tracking-tight">KYC Verified</h3>
                                        <p className="text-emerald-700/60 text-xs font-black uppercase tracking-widest mt-1">Tier 2 Access · N50M Limit reached</p>
                                    </div>
                                    <button className="ml-auto bg-white text-emerald-600 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-sm hover:shadow-md transition-all">View Certificate</button>
                                </div>
                            </section>

                            {/* Regional Settings */}
                            <section className="bg-white rounded-xl p-10 border border-slate-200/60 shadow-sm">
                                <h2 className="text-[#325074] font-black text-xl uppercase tracking-tight mb-10">Preferences</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between py-6 border-b border-slate-50">
                                        <div className="flex items-center gap-5">
                                            <div className="p-3 bg-slate-50 rounded-xl text-[#325074]"><Globe size={20} /></div>
                                            <div>
                                                <p className="text-sm font-black text-[#325074] uppercase tracking-tight">Interface Language</p>
                                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">English (Nigeria)</p>
                                            </div>
                                        </div>
                                        <button className="text-[#325074] font-black text-[10px] uppercase tracking-[0.2em]">Change</button>
                                    </div>
                                    <div className="flex items-center justify-between py-6">
                                        <div className="flex items-center gap-5">
                                            <div className="p-3 bg-slate-50 rounded-xl text-[#325074]"><Lock size={20} /></div>
                                            <div>
                                                <p className="text-sm font-black text-[#325074] uppercase tracking-tight">Two-factor Auth</p>
                                                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mt-1">Enabled · SMS + App</p>
                                            </div>
                                        </div>
                                        <button className="text-red-400 font-black text-[10px] uppercase tracking-[0.2em]">Manage</button>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
