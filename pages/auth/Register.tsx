import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, ArrowRight, ArrowLeft, User, Mail, Phone, Lock, CheckCircle2 } from 'lucide-react';
import BrandLogo from '../../components/BrandLogo';
import SEO from '../../components/SEO';

const steps = ['Personal Info', 'Contact', 'Security'];

const Register: React.FC = () => {
    const { register, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/portal/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const updateField = (field: keyof typeof form, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setError('');
    };

    const validateStep = (): boolean => {
        if (step === 0) {
            if (!form.firstName.trim() || !form.lastName.trim()) {
                setError('Please provide your first and last name');
                return false;
            }
        } else if (step === 1) {
            if (!form.email.trim()) {
                setError('Please provide your email address');
                return false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
                setError('Please enter a valid email address');
                return false;
            }
            if (!form.phone.trim()) {
                setError('Please provide your phone number');
                return false;
            }
        } else if (step === 2) {
            if (form.password.length < 6) {
                setError('Password must be at least 6 characters');
                return false;
            }
            if (form.password !== form.confirmPassword) {
                setError('Passwords do not match');
                return false;
            }
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(s => Math.min(s + 1, steps.length - 1));
        }
    };

    const prevStep = () => setStep(s => Math.max(s - 1, 0));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep()) return;

        setIsLoading(true);
        try {
            const success = await register({
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone,
                password: form.password,
            });
            if (success) {
                navigate('/portal/dashboard', { replace: true });
            }
        } catch {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const inputClass = "w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C] focus:border-transparent transition-all";

    return (
        <div className="min-h-screen bg-slate-50 flex">
            <SEO
                title="Create Account | 1SQM"
                description="Join 5,000+ investors building wealth through fractional luxury real estate."
            />

            {/* Left Brand Panel */}
            <div className="hidden lg:flex lg:w-[45%] bg-[#325074] relative overflow-hidden flex-col justify-between p-16">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FEC12C]/20 rounded-full blur-[150px]"></div>

                <div className="relative z-10">
                    <BrandLogo variant="dark" size="md" layout="horizontal" />
                </div>

                <div className="relative z-10 space-y-8">
                    <h1 className="text-5xl font-black text-white tracking-tighter leading-[0.9]">
                        START<br />BUILDING<br />
                        <span className="text-[#FEC12C]">WEALTH.</span>
                    </h1>
                    <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                        Create your free investor account and unlock access to curated real estate opportunities across Abuja's premium locations.
                    </p>

                    <div className="space-y-4 pt-4">
                        {['Zero upfront fees', 'Flexible payment plans', 'SEC-regulated investments', 'Real-time portfolio tracking'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-[#FEC12C]" />
                                <p className="text-white/80 text-sm font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="relative z-10 text-white/20 text-xs">© {new Date().getFullYear()} One Square Meter. SEC Regulated.</p>
            </div>

            {/* Right: Registration Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md space-y-10"
                >
                    <div className="lg:hidden mb-8">
                        <BrandLogo variant="light" size="md" layout="horizontal" />
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-4xl font-black text-[#325074] tracking-tighter">Create account.</h2>
                        <p className="text-slate-400 font-light">Join thousands of investors building generational wealth.</p>
                    </div>

                    {/* Step Indicator */}
                    <div className="flex items-center gap-2">
                        {steps.map((s, i) => (
                            <React.Fragment key={i}>
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${i <= step ? 'bg-[#325074] text-white' : 'bg-slate-100 text-slate-300'}`}>
                                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[9px]">{i + 1}</span>
                                    <span className="hidden sm:inline">{s}</span>
                                </div>
                                {i < steps.length - 1 && <div className={`flex-1 h-0.5 ${i < step ? 'bg-[#FEC12C]' : 'bg-slate-200'} transition-colors`}></div>}
                            </React.Fragment>
                        ))}
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Step 1: Personal Info */}
                        {step === 0 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <User size={12} /> First Name
                                    </label>
                                    <input
                                        type="text"
                                        value={form.firstName}
                                        onChange={(e) => updateField('firstName', e.target.value)}
                                        placeholder="Amara"
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
                                        onChange={(e) => updateField('lastName', e.target.value)}
                                        placeholder="Ibrahim"
                                        className={inputClass}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Contact */}
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Mail size={12} /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => updateField('email', e.target.value)}
                                        placeholder="amara@example.com"
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
                                        onChange={(e) => updateField('phone', e.target.value)}
                                        placeholder="+234 805 123 4567"
                                        className={inputClass}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Security */}
                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Lock size={12} /> Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={form.password}
                                            onChange={(e) => updateField('password', e.target.value)}
                                            placeholder="Minimum 6 characters"
                                            className={`${inputClass} pr-12`}
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Lock size={12} /> Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        value={form.confirmPassword}
                                        onChange={(e) => updateField('confirmPassword', e.target.value)}
                                        placeholder="Repeat your password"
                                        className={inputClass}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 pt-4">
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all"
                                >
                                    <ArrowLeft size={16} /> Back
                                </button>
                            )}
                            {step < steps.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#325074] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#264060] transition-all"
                                >
                                    Continue <ArrowRight size={16} />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#FEC12C] text-[#325074] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-400 transition-all disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-[#325074] border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>Create Account <ArrowRight size={16} /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>

                    <p className="text-center text-slate-400 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#325074] font-bold hover:text-[#FEC12C] transition-colors">
                            Sign in
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
