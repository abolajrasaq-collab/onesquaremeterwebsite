import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, Building2, Landmark, Users } from 'lucide-react';
import SEO from '../components/SEO';

const ARTICLES = [
    {
        id: 1,
        category: 'Market Insights',
        title: 'Why Abuja Real Estate Is Outperforming Every Other Asset Class in 2026',
        excerpt: 'While Nigerian equities and fixed-income instruments have delivered single-digit returns, premium Abuja real estate continues to appreciate at 15–22% annually. Here\'s the data behind the trend.',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
        date: '12 March 2026',
        readTime: '5 min read',
        icon: <TrendingUp size={16} />,
        featured: true,
    },
    {
        id: 2,
        category: 'Project Updates',
        title: 'Dantata Vistas Katampe: Construction Reaches Advanced Shell Stage',
        excerpt: 'We are pleased to announce that Dantata Vistas Katampe has reached Advanced Shell stage ahead of schedule. Here\'s a full update on progress, timelines, and what this means for investors.',
        image: 'https://images.unsplash.com/photo-1590673152538-6b33ea8e4849?auto=format&fit=crop&q=80&w=800',
        date: '5 March 2026',
        readTime: '3 min read',
        icon: <Building2 size={16} />,
        featured: false,
    },
    {
        id: 3,
        category: 'Investment Guide',
        title: 'Fractional Real Estate vs. REITs: Which Is Right for Nigerian Investors?',
        excerpt: 'Both offer exposure to real estate without full ownership. But the differences in liquidity, returns, and control are significant. A detailed comparison for the discerning Nigerian investor.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
        date: '24 February 2026',
        readTime: '7 min read',
        icon: <Landmark size={16} />,
        featured: false,
    },
    {
        id: 4,
        category: 'Market Insights',
        title: 'The FCT Housing Deficit: A Crisis That Creates Opportunity for Smart Investors',
        excerpt: 'Abuja\'s population is growing at 8% per year while new housing supply lags far behind. This structural imbalance is the single most powerful tailwind behind 1SQM\'s investment thesis.',
        image: 'https://images.unsplash.com/photo-1599202860130-f600f4948364?auto=format&fit=crop&q=80&w=800',
        date: '14 February 2026',
        readTime: '6 min read',
        icon: <TrendingUp size={16} />,
        featured: false,
    },
    {
        id: 5,
        category: 'Investor Stories',
        title: '\"I Started with ₦15M — Now I Own Three Units\": Amara\'s Investment Journey',
        excerpt: 'Lagos-based tech executive Amara Okafor shares how she grew her 1SQM portfolio over 18 months, the mistakes she avoided, and her advice for first-time property investors.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        date: '3 February 2026',
        readTime: '4 min read',
        icon: <Users size={16} />,
        featured: false,
    },
    {
        id: 6,
        category: 'Project Updates',
        title: 'Introducing Dantata Arcade: Abuja\'s Premier Commercial Investment Opportunity',
        excerpt: 'Purpose-built retail and commercial units within EFAB Queens Gate — the newest addition to the 1SQM portfolio offers a 13% projected yield for commercial investors.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
        date: '20 January 2026',
        readTime: '4 min read',
        icon: <Building2 size={16} />,
        featured: false,
    },
];

const CATEGORIES = ['All', 'Market Insights', 'Project Updates', 'Investment Guide', 'Investor Stories'];

const CATEGORY_COLORS: Record<string, string> = {
    'Market Insights': 'bg-emerald-50 text-emerald-700',
    'Project Updates': 'bg-blue-50 text-blue-700',
    'Investment Guide': 'bg-purple-50 text-purple-700',
    'Investor Stories': 'bg-amber-50 text-amber-700',
};

const Blog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? ARTICLES
        : ARTICLES.filter(a => a.category === activeCategory);

    const featured = ARTICLES.find(a => a.featured);
    const rest = filtered.filter(a => !a.featured || activeCategory !== 'All');

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO
                title="Market Insights & News"
                description="Stay informed with the latest real estate market insights, project updates, and investment guides from ONE SQUARE METER by Dantata."
                url="/blog"
            />

            {/* Premium Hero Section */}
            <section className="relative bg-[#325074] py-32 md:py-48 px-6 lg:px-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FEC12C] rounded-full blur-[300px] opacity-10 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#FEC12C 0,#FEC12C 1px,transparent 0,transparent 50%)', backgroundSize: '60px 60px' }} />
                
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2000"
                        alt="Market Insights"
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#325074] to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-[#FEC12C] text-[#325074] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-xl shadow-[#FEC12C]/20">The Intelligence Desk</span>
                        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                            MARKET<br /><span className="text-[#FEC12C]">INSIGHTS.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                            Institutional real estate market analysis, precise project updates, and tactical investment guides for the sophisticated investor.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Container (Negative Margin Pull-Up) */}
            <div className="relative z-20 -mt-16 pb-32">
                {/* Featured Article */}
                {featured && activeCategory === 'All' && (
                    <section className="px-6 lg:px-12 mb-16">
                        <div className="max-w-[1400px] mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100"
                            >
                                <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                                </div>
                                <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
                                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-8 ${CATEGORY_COLORS[featured.category]}`}>
                                        {featured.icon} {featured.category}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black text-[#325074] tracking-tight mb-6 leading-[1.1] uppercase">
                                        {featured.title}
                                    </h2>
                                    <p className="text-slate-500 leading-relaxed mb-10 text-lg font-light">
                                        {featured.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#325074]/40">
                                            <span className="flex items-center gap-2"><Calendar size={14} /> {featured.date}</span>
                                            <span className="flex items-center gap-2"><Clock size={14} /> {featured.readTime}</span>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="flex items-center gap-3 bg-[#FEC12C] text-[#325074] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#325074] hover:text-white transition-all group"
                                        >
                                            Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Category Filter + Articles */}
                <section className="px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto">
                        
                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-3 mb-16 justify-center">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                        activeCategory === cat
                                            ? 'bg-[#325074] text-white shadow-lg shadow-[#325074]/10'
                                            : 'bg-white text-slate-400 border border-slate-200 hover:border-[#FEC12C] hover:text-[#325074]'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Article Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {rest.map((article, i) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#FEC12C] hover:shadow-lg hover:shadow-slate-200/30 transition-all duration-500 group flex flex-col"
                                >
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                        <div className="absolute bottom-6 left-6">
                                            <span className={`inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${CATEGORY_COLORS[article.category]}`}>
                                                {article.icon} {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-black text-[#325074] uppercase tracking-tight mb-4 leading-snug group-hover:text-[#FEC12C] transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed flex-grow line-clamp-3 font-light">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#325074]/40">
                                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                                            </div>
                                            <Link
                                                to="/contact"
                                                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#325074] group-hover:bg-[#FEC12C] transition-colors"
                                            >
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Premium Newsletter CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-32 max-w-5xl mx-auto bg-[#325074] rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-xl shadow-[#325074]/20 text-center"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FEC12C] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#FEC12C 0,#FEC12C 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }} />
                            
                            <div className="relative z-10">
                                <span className="inline-block bg-[#FEC12C] text-[#325074] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl shadow-[#FEC12C]/20">Global Intel</span>
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Never Miss A Paradigm Shift</h3>
                                <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">
                                    Receive institutional market updates, investment analyses, and exclusive asset release news directly to your encrypted inbox.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                    <input
                                        type="email"
                                        placeholder="institutional.email@protocol.com"
                                        className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/40 px-6 py-5 rounded-xl focus:outline-none focus:border-[#FEC12C] transition-colors font-medium text-center sm:text-left"
                                    />
                                    <button className="bg-[#FEC12C] text-[#325074] font-black px-8 py-5 rounded-xl hover:bg-white transition-all uppercase tracking-widest text-[10px] flex-shrink-0 shadow-lg shadow-[#FEC12C]/10">
                                        Initialize Subscription
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;
