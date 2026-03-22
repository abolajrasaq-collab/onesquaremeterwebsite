import * as React from 'react';
import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import {
    ArrowLeft, TrendingUp, MapPin, Users, Percent, DollarSign,
    CheckCircle, XCircle, ChevronRight, Building2
} from 'lucide-react';
import SEO from '../components/SEO';

const Compare: React.FC = () => {
    const [searchParams] = useSearchParams();
    const ids = searchParams.get('ids')?.split(',').filter(Boolean) || [];

    const compared = useMemo(() =>
        ids.map(id => projects[id]).filter(Boolean),
        [ids]
    );

    if (compared.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h1 className="text-3xl font-black text-[#325074] tracking-tighter mb-4">No Projects to Compare</h1>
                <p className="text-slate-400 mb-6">Select projects from the Invest page to compare them side-by-side.</p>
                <Link to="/invest" className="bg-[#FEC12C] text-[#325074] px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-amber-400">
                    Browse Projects
                </Link>
            </div>
        );
    }

    const rows = [
        { label: 'Category', key: 'category' },
        { label: 'Location', key: 'location' },
        { label: 'Starting Price', key: 'priceStart' },
        { label: 'Min. Investment', key: 'minInvestment', fallback: '—' },
        { label: 'Expected Yield', key: 'expectedYield', suffix: '%', fallback: '—' },
        { label: 'Appreciation Rate', key: 'appreciationRate', suffix: '% p.a.', fallback: '—' },
        { label: 'Investors', key: 'investorCount', suffix: '+', fallback: '—' },
        { label: 'Funded', key: 'fundedPercentage', suffix: '%', fallback: '—' },
        { label: 'Status', key: 'status' },
        { label: 'Units Available', key: 'units', transform: (v: any) => v?.length || 0 },
    ];

    const featureSet = useMemo(() => {
        const all = new Set<string>();
        compared.forEach(p => p.features.forEach(f => all.add(f)));
        return Array.from(all);
    }, [compared]);

    // Find best values for highlighting
    const bestYield = Math.max(...compared.map(p => p.expectedYield || 0));
    const bestAppreciation = Math.max(...compared.map(p => p.appreciationRate || 0));
    const bestFunded = Math.max(...compared.map(p => p.fundedPercentage || 0));

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO title="Compare Projects — 1SQM" description="Side-by-side comparison of real estate investment projects." />

            {/* Header */}
            <section className="bg-[#325074] py-16 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <Link to="/invest" className="inline-flex items-center gap-2 text-white/60 hover:text-[#FEC12C] mb-6 transition-colors text-sm">
                        <ArrowLeft size={18} /> Back to Invest
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        Compare <span className="text-[#FEC12C]">{compared.length} Projects</span>
                    </h1>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
                {/* Project Headers */}
                <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden mb-8">
                    <div className={`grid grid-cols-${compared.length + 1}`} style={{ gridTemplateColumns: `200px repeat(${compared.length}, 1fr)` }}>
                        {/* Empty top-left cell */}
                        <div className="p-6 bg-slate-50 border-b border-r border-slate-100" />

                        {/* Project header cards */}
                        {compared.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 border-b border-slate-100 text-center"
                            >
                                <div className="h-32 rounded-xl overflow-hidden mb-4 relative">
                                    <img
                                        src={project.heroImage || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400'}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-3 left-3 right-3">
                                        {project.logo ? (
                                            <img src={project.logo} alt={project.title} className="h-6 object-contain drop-shadow-lg" />
                                        ) : (
                                            <p className="text-white text-sm font-black tracking-tight text-left">{project.title}</p>
                                        )}
                                    </div>
                                </div>
                                <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${project.status === 'Selling' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                    {project.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Data Rows */}
                    {rows.map((row, rowIdx) => (
                        <div
                            key={row.key}
                            className="border-b border-slate-50 last:border-0"
                            style={{ display: 'grid', gridTemplateColumns: `200px repeat(${compared.length}, 1fr)` }}
                        >
                            <div className="p-4 px-6 bg-slate-50 border-r border-slate-100 flex items-center">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{row.label}</span>
                            </div>
                            {compared.map((project, i) => {
                                let value: any = (project as any)[row.key];
                                if (row.transform) value = row.transform(value);
                                if (value === undefined || value === null) value = row.fallback || '—';
                                else if (row.suffix) value = `${value}${row.suffix}`;

                                // Highlight best
                                let isBest = false;
                                if (row.key === 'expectedYield' && (project.expectedYield || 0) === bestYield && bestYield > 0) isBest = true;
                                if (row.key === 'appreciationRate' && (project.appreciationRate || 0) === bestAppreciation && bestAppreciation > 0) isBest = true;
                                if (row.key === 'fundedPercentage' && (project.fundedPercentage || 0) === bestFunded && bestFunded > 0) isBest = true;

                                return (
                                    <div key={i} className={`p-4 px-6 flex items-center justify-center ${rowIdx % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                                        <span className={`text-sm font-bold ${isBest ? 'text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg' : 'text-[#325074]'}`}>
                                            {String(value)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Feature Comparison */}
                <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden mb-8">
                    <div className="p-6 border-b border-slate-100 bg-slate-50">
                        <h3 className="text-sm font-black text-[#325074] uppercase tracking-widest">Feature Comparison</h3>
                    </div>
                    {featureSet.map((feature, idx) => (
                        <div
                            key={idx}
                            className="border-b border-slate-50 last:border-0"
                            style={{ display: 'grid', gridTemplateColumns: `200px repeat(${compared.length}, 1fr)` }}
                        >
                            <div className="p-4 px-6 border-r border-slate-100 flex items-center">
                                <span className="text-xs text-slate-500">{feature}</span>
                            </div>
                            {compared.map((project, i) => (
                                <div key={i} className={`p-4 flex items-center justify-center ${idx % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                                    {project.features.includes(feature) ? (
                                        <CheckCircle size={18} className="text-emerald-500" />
                                    ) : (
                                        <XCircle size={18} className="text-slate-200" />
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Action Row */}
                <div
                    className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden"
                    style={{ display: 'grid', gridTemplateColumns: `200px repeat(${compared.length}, 1fr)` }}
                >
                    <div className="p-6 bg-slate-50 border-r border-slate-100 flex items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</span>
                    </div>
                    {compared.map((project, i) => (
                        <div key={i} className="p-6 flex items-center justify-center">
                            <Link
                                to={`/projects/${project.id}`}
                                className="inline-flex items-center gap-2 bg-[#FEC12C] text-[#325074] px-6 py-3 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-amber-400 transition-all"
                            >
                                Invest <ChevronRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Compare;
