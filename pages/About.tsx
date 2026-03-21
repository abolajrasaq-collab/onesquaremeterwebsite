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
                        Crafting Legacies, One <span className="text-[#FEC12C]">Square Meter</span> at a Time.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        Redefining Abuja’s skyline with precision and audacity for the discerning elite and visionary investor.
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
                            <div className="inline-block px-4 py-1.5 bg-[#325074]/10 text-[#325074] text-sm font-bold tracking-widest uppercase mb-6 rounded-md">
                                2022 - 2024
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#325074] mb-8 leading-tight">
                                Real Estate <span className="text-[#FEC12C]">Reimagined</span>
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Welcome to One Square Meter by Dantata. Redefining Abuja’s skyline with precision and audacity for the discerning elite and visionary investor, One Square Meter delivers more than homes, we curate appreciating assets and uncompromising luxury.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                From elite enclaves to self-complete intentional communities, our projects blend avant-garde design with relentless ROI. Backed by industry trust and tested by economic storms, we thrive where others falter.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                This is real estate reimagined: bold, resilient, and crafted to transcend generations.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-slate-200 rounded-xl overflow-hidden relative z-10 shadow-lg border border-slate-100">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#325074] mb-12">Our Mission & Vision</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-[#325074] mb-4 flex items-center gap-3">
                                <Building2 className="text-[#FEC12C]" />
                                Mission
                            </h3>
                            <p className="text-slate-600 font-light leading-relaxed">
                                To redefine urban excellence through precision-engineered developments that empower the visionary investor. We curate uncompromising luxury, rooted in integrity and relentless ROI, to craft enduring legacies one square meter at a time.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-[#325074] mb-4 flex items-center gap-3">
                                <ShieldCheck className="text-[#FEC12C]" />
                                Vision
                            </h3>
                            <p className="text-slate-600 font-light leading-relaxed">
                                To be Africa’s most trusted architect of high-yield properties, setting the global gold standard for resilient design, transparent governance, and generational wealth creation.
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

            {/* Expertise Section */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#325074] mb-4">Our Expertise</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Where Vision, Craftsmanship, and Governance Redefine Excellence.</p>
                    </div>

                    <div className="bg-white p-10 md:p-16 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEC12C]/5 rounded-bl-[200px] -z-0" />
                        <div className="relative z-10 space-y-8">
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                At One Square Meter by Dantata, we merge visionary conceptualization, rooted in data-driven foresight and avant-garde design, with masterful craftsmanship to transform Abuja’s urban potential into enduring legacies.
                            </p>
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                Our elite consortium of architects and skilled workers delivers precision in every detail, from luxury enclaves to self-complete intentional communities. Powering this is our robust governance—a framework of fiscal discipline and operational transparency that de-risks investments and ensures that every square meter is built with resilient integrity.
                            </p>
                            <div className="pt-6 border-t border-slate-100">
                                <p className="text-2xl font-black text-[#325074]">
                                    With One Square Meter by Dantata, excellence isn't just a promise; it's a <span className="text-[#FEC12C]">legacy well-delivered</span>.
                                </p>
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
                                name: 'Alhassan A. DANTATA',
                                title: 'Board Chairman, Non Executive Director',
                                bio: 'He was the pioneer Production Manager, Nigeria Industrial Group, the first Nail and BRC factory in Northern Nigeria before becoming the Director of Finance of ASADA GROUP LIMITED an indigenous group with interest in Farming, Quarrying and Building Construction. He later became the Managing Director FARHAN OIL LIMITED, a company operating in down-stream sector with fleet of trucks and substantial number of filling stations across Nigeria. The Executive Chairman of Dantata Town Developers the developers of Dantata Town, Dantata District, Dantata Gardens and Dantata Cuty among many others. AlHassan is also the Executive Chairman, Dantata Plastics, Kano. A Non Executive Director and Board Chairman, One Square Meter, AlHassan delivers with clear focus on the development of bespoke real estates products and services.',
                                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                            {
                                name: 'Bolaji A. Oluwatosin',
                                title: 'Managing Director, Chief Executive Officer',
                                bio: 'Oluwatosin is a seasoned architect and investment strategist with over two decades of experience in structuring novel, value-added real estate investments. He holds a Bachelor of Technology in Architecture from Ladoke Akintola University of Technology and an MBA from the prestigious Lagos Business School, Pan-Atlantic University. He has served as Executive Director of Wortheplus Limited and later co-founded One Square Meter by Dantata, an organisation structured as a value-added investment platform that uses real estate as its primary investment instrument. Under his leadership, the Company has developed a portfolio of distinctive, corporate-grade projects that are recognised by leading financial institutions as operating in a category distinct from conventional real estate development. Oluwatosin is known for his strategic vision, his ability to harness diverse capital and human resources, and his commitment to motivating cross-sectional teams of young professionals. As Managing Director and Chief Executive Officer, Oluwatosin drives the Company’s mission to deliver exceptional, investment-grade opportunities that combine financial returns with lasting asset value.',
                                image: '/images/board/olutosin-bolaji.jpg',
                            },
                            {
                                name: 'Engr. Nasiru A. Dantata',
                                title: 'Non-Executive Director',
                                bio: 'Engr. Nasiru Dantata is a civil engineer and construction industry leader with decades of experience managing large-scale infrastructure and real estate projects across Nigeria. He holds a Master of Science in Civil Engineering from Northeastern University, Boston, and is a registered engineer with the Council for the Regulation of Engineering in Nigeria (COREN). He is also a member of the Nigerian Society of Engineers, the Golden Key National Honours Society, and Tau Beta Pi Engineering Society in the United States. He has served as President of the Federation of Construction Industry (FOCI), the umbrella body representing Nigeria’s largest construction companies, where he championed skills development, artisan training, and the use of Sukuk financing to accelerate infrastructure delivery. Under his leadership, FOCI established training programmes in partnership with UNESCO and the Nigerian Institute of Building to address the shortage of skilled artisans in the industry. As Executive Director of Dantata & Sawoe Construction Company Limited, Nasiru has overseen the planning and execution of major highways, city infrastructure, and industrial projects across Nigeria, including the Abuja-Abaji and Kano-Maiduguri roads, the 10-lane Kubwa-Zuba expressway, and the Guzape District infrastructure in Abuja. His portfolio also includes landmark private developments such as the Asokoro Island project, a $900 million mixed-use development. Nasiru brings to the One Square Meter board deep expertise in project execution, infrastructure development, and construction industry governance, ensuring that the Company’s novel investment projects are delivered to the highest standards.',
                                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500',
                            },
                            {
                                name: 'Bolanle Alabi-Sami',
                                title: 'Non-Executive Director',
                                bio: 'Bolanle Alabi-Sami is a Certified General Accountant (CGA, USA) with over fifteen years of experience spanning banking, finance, and corporate risk management. She holds a Master of Science in Agricultural Economics from the University of Ibadan, a Postgraduate Diploma in Finance and Risk Management from Westford School of Management (Pearson UK), and a Master of Business Administration from the University of Gloucestershire. She is also a member of the Chartered Institute of Certified Public Accountants (CICPA, USA). Her career began at First Bank of Nigeria, progressing to relationship management at Dunia Finance PLC in Dubai. She later joined INDEVCO Group in Dubai, managing credit control, collections, and HR functions, before taking on her current role as Human Resources Coordinator at Napco National Dubai, where she oversees staffing, HR policy implementation, and performance management across business units. A Non-Executive Director at One Square Meter, Bolanle brings deep financial discipline and operational insight to the board, ensuring the Company’s ambitious real estate projects are grounded in sound governance and sustainable growth.',
                                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
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
                    <Link to="/contact" className="inline-block bg-[#FEC12C] text-[#325074] px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
