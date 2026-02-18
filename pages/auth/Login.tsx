import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, ArrowRight, Zap } from 'lucide-react';
import BrandLogo from '../../components/BrandLogo';
import SEO from '../../components/SEO';

const Login: React.FC = () => {
    const { login, demoLogin, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/portal/dashboard';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Redirect if already authenticated
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, from]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        try {
            const success = await login(email, password);
            if (success) {
                navigate(from, { replace: true });
            }
        } catch {
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDemoLogin = () => {
        demoLogin();
        navigate(from, { replace: true });
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            <SEO
                title="Login — Owner Portal | 1SQM"
                description="Access your 1SQM investor portal to manage your real estate portfolio."
            />

            {/* Left: Brand Panel */}
            <div className="hidden lg:flex lg:w-[45%] bg-[#325074] relative overflow-hidden flex-col justify-between p-16">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEC12C]/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FEC12C]/10 rounded-full blur-[100px]"></div>

                <div className="relative z-10">
                    <BrandLogo variant="dark" size="md" layout="full" />
                </div>

                <div className="relative z-10 space-y-8">
                    <h1 className="text-5xl font-black text-white tracking-tighter leading-[0.9]">
                        YOUR<br />WEALTH.<br />
                        <span className="text-[#FEC12C]">YOUR PORTAL.</span>
                    </h1>
                    <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                        Track your investments, monitor returns, and manage your fractional real estate portfolio — all in one place.
                    </p>
                    <div className="flex gap-8 pt-4">
                        {[
                            { value: '₦12B+', label: 'Assets' },
                            { value: '5,200+', label: 'Investors' },
                            { value: '12%', label: 'Avg. Yield' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl font-black text-[#FEC12C] tracking-tighter">{stat.value}</p>
                                <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="relative z-10 text-white/20 text-xs">© {new Date().getFullYear()} One Square Meter. SEC Regulated.</p>
            </div>

            {/* Right: Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md space-y-10"
                >
                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-8">
                        <BrandLogo variant="light" size="md" layout="full" />
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-4xl font-black text-[#325074] tracking-tighter">Welcome back.</h2>
                        <p className="text-slate-400 font-light">Sign in to your Owner Portal to manage your investments.</p>
                    </div>

                    {/* Demo Login */}
                    <button
                        onClick={handleDemoLogin}
                        className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#FEC12C] to-amber-400 text-[#325074] rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                    >
                        <Zap size={18} /> Instant Demo Access
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">or sign in</span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="amara@example.com"
                                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent transition-all pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#325074]"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-3 py-5 bg-[#325074] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#264060] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>Sign In <ArrowRight size={16} /></>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-slate-400 text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-[#325074] font-bold hover:text-[#FEC12C] transition-colors">
                            Create one free
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
