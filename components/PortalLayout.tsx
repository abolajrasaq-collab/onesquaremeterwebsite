import * as React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
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
    ChevronRight
} from 'lucide-react';

const navItems = [
    { to: '/portal/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/portal/portfolio', icon: <Briefcase size={20} />, label: 'Portfolio' },
    { to: '/portal/wallet', icon: <Wallet size={20} />, label: 'Wallet' },
    { to: '/portal/settings', icon: <Settings size={20} />, label: 'Settings' },
];

const PortalLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const initials = user ? `${user.firstName[0]}${user.lastName[0]}` : 'U';

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar — Desktop */}
            <aside className="hidden lg:flex flex-col w-72 bg-[#325074] text-white fixed inset-y-0 left-0 z-50">
                {/* Logo */}
                <div className="p-8 border-b border-white/10">
                    <BrandLogo variant="dark" size="sm" layout="horizontal" />
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-8 px-4 space-y-2">
                    {navItems.map(item => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${isActive
                                    ? 'bg-[#FEC12C] text-[#325074]'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            {item.icon}
                            <span className="text-[11px]">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* User & Logout */}
                <div className="p-6 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FEC12C] flex items-center justify-center text-[#325074] font-black text-sm">
                            {initials}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate">{user?.firstName} {user?.lastName}</p>
                            <p className="text-[10px] text-white/40 truncate">{user?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl text-white/60 hover:text-white hover:bg-red-500/20 transition-all text-[10px] font-black uppercase tracking-widest"
                    >
                        <LogOut size={14} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
                    <div className="relative w-72 bg-[#325074] text-white flex flex-col">
                        <div className="p-6 flex justify-between items-center border-b border-white/10">
                            <BrandLogo variant="dark" size="sm" layout="horizontal" />
                            <button onClick={() => setSidebarOpen(false)} className="text-white/60 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="flex-1 py-6 px-4 space-y-2">
                            {navItems.map(item => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setSidebarOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all ${isActive
                                            ? 'bg-[#FEC12C] text-[#325074]'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {item.icon}
                                    <span className="text-[11px] uppercase tracking-widest">{item.label}</span>
                                </NavLink>
                            ))}
                        </nav>
                        <div className="p-4 border-t border-white/10">
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl text-white/60 hover:text-white hover:bg-red-500/20 transition-all text-xs font-bold"
                            >
                                <LogOut size={14} /> Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 lg:ml-72">
                {/* Top Bar */}
                <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
                    <div className="flex items-center justify-between px-6 lg:px-10 py-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
                            >
                                <Menu size={22} className="text-[#325074]" />
                            </button>
                            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
                                <span>Owner Portal</span>
                                <ChevronRight size={14} />
                                <span className="text-[#325074] font-bold">Dashboard</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="relative p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                <Bell size={20} className="text-slate-400" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-[#FEC12C] rounded-full"></span>
                            </button>
                            <div className="w-9 h-9 rounded-full bg-[#325074] flex items-center justify-center text-white text-xs font-black">
                                {initials}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6 lg:p-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default PortalLayout;
