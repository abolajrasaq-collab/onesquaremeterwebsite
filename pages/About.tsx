import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, TrendingUp, UserCheck, Heart, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO title="About Us" description="Learn about ONE SQUARE METER by Dantata — our mission, values, leadership team, and commitment to premium real estate development in Nigeria." />
            {/* Hero Section */}
            <section className="relative bg-[#325074] py-32 px-6 lg:px-12 overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        The Architecture of <span className="text-[#FEC12C]">Possibility</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        Redefining the semiotics of luxury and the ethics of delivery in the Nigerian real estate market.
                    </motion.p>
                </div>
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FEC12C] rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#000000] to-transparent" />
                </div>

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="Architecture"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#325074]/90 to-[#325074]/80" />
                </div>
            </section>

            {/* Strategic Pause Section */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 bg-[#325074]/10 text-[#325074] text-sm font-bold tracking-widest uppercase mb-6 rounded-full">
                                2022 - 2024
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#325074] mb-8 leading-tight">
                                The Art of <br />Pressing <span className="text-[#FEC12C]">Pause</span>
                            </h2>
                            <blockquote className="text-xl text-slate-600 italic border-l-4 border-[#FEC12C] pl-6 mb-8">
                                “Imagine pausing a symphony mid-performance, not because the musicians faltered, but to let the audience hear the silence before the crescendo.”
                            </blockquote>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Post-2022, 1SQmeter by Dantata made a bold strategic move: we pressed pause on sales and slowed down construction. This was not a retreat, but a rebellion against inflation and compromised quality.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Amidst post-COVID chaos and skyrocketing building costs, we refused to let market volatility dictate the quality of our homes. Today, with settlements reached and project assets audited to far exceed liabilities, we are back—stronger, more resilient, and ready to deliver.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative z-10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
                                    alt="Construction Resilience"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#325074]/20"></div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FEC12C]/20 rounded-full blur-[50px] -z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#325074] mb-12">The Semiotics of the "Square Meter"</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-[#325074] mb-4 flex items-center gap-3">
                                <Building2 className="text-[#FEC12C]" />
                                Radical Transparency
                            </h3>
                            <p className="text-slate-600">
                                The choice of ONE SQUARE METER is a commitment to precision. It signals a shift from the macro-promises of "estates" to the micro-perfection of the "square meter". Every unit of space is accounted for and engineered to international standards.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-[#325074] mb-4 flex items-center gap-3">
                                <ShieldCheck className="text-[#FEC12C]" />
                                The 1SQM Creed
                            </h3>
                            <p className="text-slate-600">
                                "We exist to transform lives by building more than spaces—we build possibilities. Rooted in courage and guided by vision, we champion the bold dreamers... Where others see limits, we see potential."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="py-24 px-6 lg:px-12 bg-[#325074] text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Pillars</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">The four corners that anchor our identity and differentiate us in the market.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Zap />, title: "Innovative Design", desc: "Timeless elegance meets cutting-edge functionality." },
                            { icon: <ShieldCheck />, title: "Ethical Excellence", desc: "Integrity and transparency, proven by our resilience." },
                            { icon: <TrendingUp />, title: "Smart Investment", desc: "Future-proof assets built for substantial growth." },
                            { icon: <UserCheck />, title: "Personal Empowerment", desc: "Environments that reflect your ambition and taste." }
                        ].map((pillar, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="text-[#FEC12C] mb-4">{pillar.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Archetypes */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#325074] mb-4">Psychological Architecture</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We adopt a sophisticated dual-archetype framework to fulfill the emotional desire for security and transformation.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#325074]/5 rounded-bl-[100px] -z-0 transition-all group-hover:scale-110" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-[#325074] text-white rounded-lg flex items-center justify-center mb-6">
                                    <ShieldCheck />
                                </div>
                                <h3 className="text-2xl font-black text-[#325074] mb-2">The Hero</h3>
                                <p className="text-[#FEC12C] font-bold text-sm tracking-widest uppercase mb-4">Protector of Value</p>
                                <ul className="text-slate-600 space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#325074] rounded-full" />Addresses the "trust deficit"</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#325074] rounded-full" />Reliable, Confident, Resilient</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#325074] rounded-full" />Slays the dragons of shady deals</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEC12C]/10 rounded-bl-[100px] -z-0 transition-all group-hover:scale-110" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-[#FEC12C] text-[#325074] rounded-lg flex items-center justify-center mb-6">
                                    <Heart />
                                </div>
                                <h3 className="text-2xl font-black text-[#325074] mb-2">The Magician</h3>
                                <p className="text-[#FEC12C] font-bold text-sm tracking-widest uppercase mb-4">Visionary of Transformation</p>
                                <ul className="text-slate-600 space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full" />Turns vision into structures</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full" />Charming and Visionary</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FEC12C] rounded-full" />Provides innovation & elegance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-[#FEC12C]/10 text-[#325074] text-xs font-black tracking-widest uppercase mb-4 rounded-full">Leadership</span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#325074] mb-4">Board of Directors</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">The visionary leaders steering ONE SQUARE METER towards a new era of excellence in Nigerian real estate.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Alhaji Tajudeen Dantata',
                                title: 'Chairman',
                                bio: 'A visionary business magnate with over four decades of experience in infrastructure, energy, and real estate development across West Africa.',
                                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                            {
                                name: 'Engr. Mohammed Dantata',
                                title: 'Managing Director / CEO',
                                bio: 'An accomplished engineer and strategist leading the operational vision of 1SQM, overseeing all project delivery and strategic partnerships.',
                                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                            {
                                name: 'Barrister Amina Dikko',
                                title: 'Director, Legal & Compliance',
                                bio: 'A seasoned corporate lawyer ensuring regulatory compliance, investor protection, and legal integrity across all projects and transactions.',
                                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                            {
                                name: 'Arc. Yusuf Abdullahi',
                                title: 'Director, Design & Architecture',
                                bio: 'Award-winning architect blending contemporary aesthetics with functional innovation to create iconic residential spaces.',
                                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                            {
                                name: 'Dr. Fatima Bello',
                                title: 'Director, Finance & Investments',
                                bio: 'A finance expert specializing in real estate asset structuring, investment modeling, and sustainable growth strategies.',
                                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                            {
                                name: 'Mallam Ibrahim Sani',
                                title: 'Director, Construction & Projects',
                                bio: 'Civil engineering veteran with 25+ years leading large-scale construction, ensuring quality, safety, and timely delivery.',
                                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#325074]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-black text-[#325074] tracking-tight">{member.name}</h3>
                                <p className="text-sm font-medium text-[#FEC12C] uppercase tracking-widest mt-1">{member.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-6 lg:px-12 bg-[#325074] text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Build Your Legacy?</h2>
                    <p className="text-white/70 text-lg mb-10">Join the bold dreamers and believers in better. Invest in a future built with precision.</p>
                    <Link to="/contact" className="inline-block bg-[#FEC12C] text-[#325074] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
