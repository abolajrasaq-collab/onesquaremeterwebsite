import * as React from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import BrandLogo from './BrandLogo';
import { 
    LayoutDashboard, 
    Briefcase, 
    Wallet, 
    Settings, 
    LogOut, 
    Bell, 
    Menu, 
    X, 
    ChevronRight,
    Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { to: '/portal/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/portal/portfolio', icon: <Briefcase size={20} />, label: 'Portfolio' },
    { to: '/portal/wallet', icon: <Wallet size={20} />, label: 'Wallet' },
    { to: '/portal/settings', icon: <Settings size={20} />, label: 'Settings' },
];

const PortalLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const initials = user?.name
        ? user.name.split(' ').map(n => n[0]).join('').toUpperCase()
        : 'JD';

    const activeItem = navItems.find(item => location.pathname === item.to) || navItems[0];

    return (
        <div className="min-h-screen bg-[#f8fafc] flex font-outfit selection:bg-[#325074]/10 selection:text-[#325074]">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200/60
                transform transition-all duration-500 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col
                ${sidebarOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full shadow-none'}
            `}>
                {/* Logo Section */}
                <div className="p-8 pb-10">
                    <BrandLogo variant="light" size="sm" layout="horizontal" />
                    <div className="mt-8 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#325074] flex items-center justify-center text-white font-black shadow-md">
                            {initials}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-[#325074] font-black text-sm truncate uppercase tracking-tight">{user?.name || 'Investor Portal'}</p>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{user?.role || 'Verified Member'}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.to;
                        return (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setSidebarOpen(false)}
                                className={`
                                    flex items-center gap-4 px-5 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300
                                    ${isActive 
                                        ? 'bg-[#325074] text-white shadow-md scale-[1.02]' 
                                        : 'text-slate-400 hover:text-[#325074] hover:bg-slate-50'
                                    }
                                `}
                            >
                                <span className={isActive ? 'text-[#FEC12C]' : ''}>{item.icon}</span>
                                <span>{item.label}</span>
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeIndicator"
                                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FEC12C]" 
                                    />
                                )}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Bottom Actions */}
                <div className="p-6 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-5 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] text-red-400 hover:text-red-500 hover:bg-red-50 transition-all group"
                    >
                        <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#f8fafc]">
                {/* Header */}
                <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 h-20 flex items-center px-6 lg:px-10 justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 hover:bg-slate-50 rounded-lg transition-colors text-[#325074]"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="hidden sm:flex items-center gap-3">
                            <span className="text-[#325074] font-black text-xs uppercase tracking-[0.2em]">{activeItem.label}</span>
                            <ChevronRight size={14} className="text-slate-300" />
                            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Overview</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 lg:gap-6">
                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex items-center bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg border-transparent focus-within:border-[#325074]/20 focus-within:bg-white transition-all w-64 lg:w-80 group">
                            <Search size={18} className="text-slate-400 group-focus-within:text-[#325074]" />
                            <input 
                                type="text"
                                placeholder="Search everything..."
                                className="bg-transparent border-none focus:ring-0 text-xs font-medium w-full ml-3 text-[#325074] placeholder-slate-400"
                            />
                        </div>

                        {/* Notifications */}
                        <button className="relative p-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all group border border-slate-100">
                            <Bell size={20} className="text-slate-400 group-hover:text-[#325074] group-hover:rotate-12 transition-all" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#FEC12C] rounded-full border-2 border-white"></span>
                        </button>

                        <div className="w-px h-8 bg-slate-200 mx-1 hidden sm:block"></div>

                        {/* Profile Link */}
                        <button className="flex items-center gap-3 p-1 hover:bg-slate-50 rounded-lg transition-all">
                            <div className="w-9 h-9 rounded bg-slate-900 flex items-center justify-center text-white text-[10px] font-black shadow-sm">
                                {initials}
                            </div>
                            <div className="hidden xl:block text-left">
                                <p className="text-[#325074] font-black text-[10px] uppercase tracking-wider leading-none">{user?.name?.split(' ')[1] || 'User'}</p>
                                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1">Acct · 72412</p>
                            </div>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6 lg:p-10 flex-1 overflow-x-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default PortalLayout;
