import * as React from 'react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects, ProjectData } from '../data/projects';
import {
    Search, SlidersHorizontal, TrendingUp, MapPin, Users, ArrowUpRight,
    ChevronDown, X, DollarSign, Filter, Building2, GraduationCap, Home, Star
} from 'lucide-react';
import SEO from '../components/SEO';

type SortOption = 'price-asc' | 'price-desc' | 'yield' | 'appreciation' | 'funded';
type StatusFilter = 'all' | 'Selling' | 'Coming Soon' | 'Sold Out';
type CategoryFilter = 'all' | 'Premium Residential' | 'Lifestyle Estate' | 'Student Co-Living' | 'Self-Complete Housing Units';

const sortLabels: Record<SortOption, string> = {
    'price-asc': 'Price: Low → High',
    'price-desc': 'Price: High → Low',
    'yield': 'Highest Yield',
    'appreciation': 'Highest Appreciation',
    'funded': 'Most Funded',
};

const categoryIcons: Record<string, React.ReactNode> = {
    'Premium Residential': <Building2 size={14} />,
    'Lifestyle Estate': <Home size={14} />,
    'Student Co-Living': <GraduationCap size={14} />,
    'Self-Complete Housing Units': <SlidersHorizontal size={14} />,
};

function parsePrice(priceStr: string): number {
    const match = priceStr.replace(/,/g, '').match(/[\d.]+/);
    if (!match) return 0;
    const num = parseFloat(match[0]);
    if (priceStr.toLowerCase().includes('million') || priceStr.includes('M')) return num * 1_000_000;
    if (priceStr.toLowerCase().includes('billion') || priceStr.includes('B')) return num * 1_000_000_000;
    return num * 1_000_000; // default assume millions
}

const Invest: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('funded');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
    const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
    const [showFilters, setShowFilters] = useState(false);
    const [compareList, setCompareList] = useState<string[]>([]);

    const allProjects = useMemo(() => Object.values(projects), []);

    const filtered = useMemo(() => {
        let list = allProjects;

        // Search
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            list = list.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.location.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q)
            );
        }

        // Status
        if (statusFilter !== 'all') {
            list = list.filter(p => p.status === statusFilter);
        }

        // Category
        if (categoryFilter !== 'all') {
            list = list.filter(p => p.category === categoryFilter);
        }

        // Sort
        list = [...list].sort((a, b) => {
            switch (sortBy) {
                case 'price-asc': return parsePrice(a.minInvestment) - parsePrice(b.minInvestment);
                case 'price-desc': return parsePrice(b.minInvestment) - parsePrice(a.minInvestment);
                case 'yield': return (b.expectedYield || 0) - (a.expectedYield || 0);
                case 'appreciation': return (b.appreciationRate || 0) - (a.appreciationRate || 0);
                case 'funded': return (b.fundedPercentage || 0) - (a.fundedPercentage || 0);
                default: return 0;
            }
        });

        return list;
    }, [allProjects, searchQuery, sortBy, statusFilter, categoryFilter]);

    const toggleCompare = (id: string) => {
        setCompareList(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 3 ? [...prev, id] : prev
        );
    };

    const categories = useMemo(() => {
        const cats = new Set(allProjects.map(p => p.category));
        return Array.from(cats);
    }, [allProjects]);

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO title="Invest — 1SQM Real Estate Investment" description="Browse investment-grade real estate projects. Filter by yield, appreciation, and category." />

            {/* Hero */}
            <section className="bg-[#325074] py-24 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FEC12C] rounded-full blur-[200px] opacity-10" />
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-1 bg-[#FEC12C] text-[#325074] text-[10px] font-black tracking-widest uppercase mb-6 rounded-full">
                            Investment Opportunities
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                            Find Your <span className="text-[#FEC12C]">Investment</span>
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Browse curated real estate projects with proven yields. Filter, compare, and invest with confidence.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                {/* Search & Filter Bar */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input
                                type="text"
                                placeholder="Search projects by name, location, or category..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-medium focus:outline-none focus:ring-2 focus:ring-[#FEC12C] text-sm"
                            />
                        </div>

                        {/* Sort */}
                        <div className="relative min-w-[200px]">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[#325074] font-bold text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#FEC12C] cursor-pointer"
                            >
                                {Object.entries(sortLabels).map(([key, label]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>

                        {/* Filter toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${showFilters ? 'bg-[#325074] text-white' : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'}`}
                        >
                            <Filter size={16} /> Filters
                        </button>
                    </div>

                    {/* Expanded Filters */}
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="flex flex-wrap gap-3 pt-4 border-t border-slate-100"
                        >
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                                <div className="flex gap-2">
                                    {(['all', 'Selling', 'Coming Soon', 'Sold Out'] as StatusFilter[]).map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setStatusFilter(s)}
                                            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === s ? 'bg-[#325074] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                        >
                                            {s === 'all' ? 'All' : s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Category</p>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setCategoryFilter('all')}
                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${categoryFilter === 'all' ? 'bg-[#325074] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                    >
                                        All
                                    </button>
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setCategoryFilter(cat as CategoryFilter)}
                                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${categoryFilter === cat ? 'bg-[#325074] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                        >
                                            {categoryIcons[cat]} {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Results count */}
                <div className="flex justify-between items-center mb-6">
                    <p className="text-sm text-slate-400">
                        <span className="font-bold text-[#325074]">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''} found
                    </p>
                    {compareList.length > 0 && (
                        <Link
                            to={`/compare?ids=${compareList.join(',')}`}
                            className="inline-flex items-center gap-2 bg-[#FEC12C] text-[#325074] px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-400 transition-all"
                        >
                            <Star size={14} /> Compare ({compareList.length})
                        </Link>
                    )}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all group flex flex-col"
                        >
                            {/* Image */}
                            <Link to={`/projects/${project.id}`} className="block relative h-52 overflow-hidden">
                                <img
                                    src={project.heroImage || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${project.status === 'Selling' ? 'bg-emerald-500 text-white' : project.status === 'Coming Soon' ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    {project.logo ? (
                                        <img src={project.logo} alt={project.title} className="h-8 object-contain drop-shadow-lg" />
                                    ) : (
                                        <h3 className="text-xl font-black text-white tracking-tight drop-shadow-lg">{project.title}</h3>
                                    )}
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#FEC12C]" />
                                    <span className="truncate">{project.location}</span>
                                </div>

                                <p className="text-slate-500 text-sm line-clamp-2 flex-grow">{project.description}</p>

                                {/* Investment Stats */}
                                {project.expectedYield && (
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-emerald-50 p-3 rounded-xl text-center">
                                            <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Yield</p>
                                            <p className="text-sm font-black text-emerald-600">{project.expectedYield}%</p>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-xl text-center">
                                            <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Growth</p>
                                            <p className="text-sm font-black text-blue-600">{project.appreciationRate}%</p>
                                        </div>
                                        <div className="bg-amber-50 p-3 rounded-xl text-center">
                                            <p className="text-[8px] font-black text-amber-600 uppercase tracking-widest">Investors</p>
                                            <p className="text-sm font-black text-amber-700">{project.investorCount}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Funding bar */}
                                {project.fundedPercentage && (
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[9px] font-bold text-slate-400">{project.fundedPercentage}% funded</span>
                                            <span className="text-[9px] font-bold text-slate-400">{project.investorCount} investors</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-[#FEC12C] to-emerald-500 rounded-full" style={{ width: `${project.fundedPercentage}%` }} />
                                        </div>
                                    </div>
                                )}

                                {/* Price + Actions */}
                                <div className="pt-4 border-t border-slate-100 space-y-3">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Starting From</p>
                                            <p className="text-lg font-black text-[#325074]">
                                                {project.minInvestment.includes('Contact') ? (
                                                    <Link to="/contact" className="hover:text-[#FEC12C] transition-colors underline decoration-dotted underline-offset-4">
                                                        {project.minInvestment}
                                                    </Link>
                                                ) : project.minInvestment}
                                            </p>
                                        </div>
                                        {project.expectedYield && (
                                            <div className="flex items-center gap-1 text-emerald-500">
                                                <ArrowUpRight size={14} />
                                                <span className="text-xs font-black">{project.expectedYield}% p.a.</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-3">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="flex-1 flex items-center justify-center gap-2 bg-[#FEC12C] text-[#325074] py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-amber-400 transition-all"
                                        >
                                            <DollarSign size={14} /> View Project
                                        </Link>
                                        <button
                                            onClick={() => toggleCompare(project.id)}
                                            className={`px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${compareList.includes(project.id) ? 'bg-[#325074] text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                            title="Add to compare"
                                        >
                                            {compareList.includes(project.id) ? <X size={14} /> : <Star size={14} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <Search size={48} className="text-slate-200 mx-auto mb-4" />
                        <h3 className="text-2xl font-black text-[#325074] tracking-tighter mb-2">No projects found</h3>
                        <p className="text-slate-400 text-sm">Try adjusting your filters or search terms.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Invest;
