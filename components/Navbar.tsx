import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setIsProjectsOpen(false);
    }, [location]);


    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        {
            label: 'Projects',
            path: '/projects',
            dropdown: [
                { label: 'The MetroView', path: '/projects/metro-view' },
                { label: 'Dantata Vistas', path: '/projects/dantata-vistas' },
                { label: 'Dantata Hostels', path: '/projects/dantata-hostels' },
                { label: 'Dantata Arcade', path: '/projects/dantata-arcade' },
            ]
        },
        { label: 'Downloads', path: '/downloads' },
        { label: 'Contact', path: '/contact' },
        { label: 'Invest', path: '/invest' },
        { label: 'FAQ', path: '/faq' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 lg:px-12 py-6 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-xl translate-y-0' : 'bg-transparent translate-y-0'}`}>
                <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                    <Link to="/" className="hover:scale-105 transition-transform z-50 relative">
                        <BrandLogo variant={scrolled || isMenuOpen ? 'dark' : 'light'} size="sm" layout="horizontal" />
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                {link.dropdown ? (
                                    <button
                                        className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${scrolled ? 'text-[#325074] hover:text-[#FEC12C]' : 'text-white hover:text-[#FEC12C]'}`}
                                    >
                                        {link.label} <ChevronDown size={14} />
                                    </button>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${scrolled ? 'text-[#325074] hover:text-[#FEC12C]' : 'text-white hover:text-[#FEC12C]'}`}
                                    >
                                        {link.label}
                                    </Link>
                                )}

                                {/* DROPDOWN MENU */}
                                {link.dropdown && (
                                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-white shadow-xl rounded-xl py-4 min-w-[200px] flex flex-col gap-2 border border-slate-100">
                                            {link.dropdown.map((dropItem) => (
                                                <Link
                                                    key={dropItem.label}
                                                    to={dropItem.path}
                                                    className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-[#325074] hover:bg-slate-50 hover:text-[#FEC12C] transition-colors text-left"
                                                >
                                                    {dropItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link
                            to={isAuthenticated ? '/portal/dashboard' : '/login'}
                            className={`flex items-center gap-2 px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${scrolled ? 'bg-[#325074] text-white hover:bg-[#FEC12C] hover:text-[#325074]' : 'bg-[#FEC12C] text-[#325074] hover:bg-white'}`}
                        >
                            {isAuthenticated ? 'My Portal' : <><LogIn size={14} /> Owner Portal</>}
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button className="lg:hidden z-50 relative text-[#325074]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={32} className="text-[#325074]" /> : <Menu size={32} className={scrolled ? 'text-[#325074]' : 'text-white'} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 bg-[#325074] z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} overflow-y-auto py-20`}>
                {navLinks.map((link) => (
                    <div key={link.label} className="w-full text-center">
                        {link.dropdown ? (
                            <div className="flex flex-col items-center">
                                <button
                                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                                    className="text-white text-3xl font-black uppercase tracking-tighter hover:text-[#FEC12C] transition-colors flex items-center gap-2"
                                >
                                    {link.label} <ChevronDown size={24} className={`transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {/* MOBILE DROPDOWN */}
                                <div className={`overflow-hidden transition-all duration-500 ${isProjectsOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex flex-col gap-4">
                                        {link.dropdown.map((dropItem) => (
                                            <Link
                                                key={dropItem.label}
                                                to={dropItem.path}
                                                className="text-white/70 text-lg font-bold uppercase tracking-widest hover:text-[#FEC12C]"
                                            >
                                                {dropItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                to={link.path}
                                className="text-white text-3xl font-black uppercase tracking-tighter hover:text-[#FEC12C] transition-colors"
                            >
                                {link.label}
                            </Link>
                        )}
                    </div>
                ))}
                <Link to={isAuthenticated ? '/portal/dashboard' : '/login'} className="mt-8 px-10 py-4 rounded-lg bg-[#FEC12C] text-[#325074] font-black uppercase tracking-widest hover:bg-white transition-all" onClick={() => setIsMenuOpen(false)}>
                    {isAuthenticated ? 'My Portal' : 'Owner Portal'}
                </Link>
            </div>
        </>
    );
};

export default Navbar;
