import * as React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Shield, Scale } from 'lucide-react';
import SEO from '../components/SEO';

const InvestmentRisk: React.FC = () => {
    const risks = [
        { icon: <TrendingDown />, title: "Market Fluctuations", desc: "Real estate values can be affected by economic downturns, interest rate changes, and shifts in market demand. Past performance does not guarantee future returns." },
        { icon: <AlertTriangle />, title: "Liquidity Constraints", desc: "Real estate investments are inherently illiquid. The ability to sell or exit an investment may be limited by market conditions and buyer availability." },
        { icon: <Scale />, title: "Regulatory Changes", desc: "Changes in government policies, tax laws, or building codes could impact property values, rental yields, and the overall viability of an investment." },
        { icon: <Shield />, title: "Construction Risks", desc: "Projects under development may be subject to delays, cost overruns, or changes in scope due to unforeseen circumstances such as material shortages or contractor issues." },
    ];

    return (
        <div className="bg-white">
            <SEO title="Investment Risk" description="Understand the risks involved in real estate investment with ONE SQUARE METER — market fluctuations, liquidity, regulatory, and construction risks." />
            {/* Hero Section */}
            <section className="relative bg-[#325074] py-32 px-6 lg:px-12 overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        Investment <span className="text-[#FEC12C]">Risk</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        Transparency is core to our identity. We want you to understand the risks involved.
                    </motion.p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-20 right-20 w-72 h-72 bg-[#FEC12C] rounded-full blur-[100px]" />
                </div>
            </section>

            {/* Risk Categories */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {risks.map((risk, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-[#325074]/10 text-[#325074] rounded-xl flex items-center justify-center mb-4">
                                    {risk.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#325074] mb-3">{risk.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{risk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-16 px-6 lg:px-12 bg-white">
                <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-[#325074] mb-4 flex items-center gap-3">
                        <AlertTriangle className="text-amber-500" /> Important Disclaimer
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Investing in real estate involves risks, including but not limited to market fluctuations, liquidity constraints, and regulatory changes.
                        Potential investors should carefully consider their financial situation and consult with professional advisors before making any investment decisions.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Detailed risk disclosures and terms will be provided in the official investment documentation for each project.
                        The information on this website does not constitute financial advice or a binding offer.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InvestmentRisk;
