import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, HelpCircle, Shield, Briefcase, DollarSign, RefreshCw,
    FileText, Users, Building2, Phone
} from 'lucide-react';
import SEO from '../components/SEO';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    // Getting Started
    {
        category: 'Getting Started',
        question: 'What is One Square Meter and how does it work?',
        answer: 'One Square Meter (1SQM) is a real estate investment platform by Dantata & Sawoe. We make premium property investment accessible by allowing you to invest in professionally managed real estate projects. You choose a project, select a unit, and invest — either outright or through flexible payment plans. Your investment earns rental income and appreciates in value over time.',
    },
    {
        category: 'Getting Started',
        question: 'How do I create an account?',
        answer: 'Simply click "Owner Portal" in the navigation, then select "Create Account." You\'ll complete a quick 3-step registration: personal details, contact information, and password setup. Once registered, you can start exploring investment opportunities immediately. For the fastest experience, try our demo login to explore the platform first.',
    },
    {
        category: 'Getting Started',
        question: 'What is the minimum investment amount?',
        answer: 'Minimum investments vary by project. Our most accessible properties start from ₦7 Million (Copa Cabana II), while premium projects like Metro View start from ₦10 Million. Student housing investments (Dantata Hostels) start from ₦60 Million for a full block. All projects offer flexible payment plans to spread the cost over 12–18 months.',
    },
    // Investment
    {
        category: 'Investment',
        question: 'What returns can I expect?',
        answer: 'Returns depend on the project. Our properties typically offer 6–15% annual rental yields plus 8–12% capital appreciation per year. For example, Dantata Hostels delivers approximately 12% annual rental yield with 9% appreciation, while Copa Cabana II offers about 6% yield with 8% appreciation. These are estimates based on market conditions and historical performance.',
    },
    {
        category: 'Investment',
        question: 'How are payment plans structured?',
        answer: 'Most projects offer three payment options: Outright purchase (full payment), a 12-month plan (initial deposit + monthly installments), and an 18-month plan (lower monthly payments, slightly higher total cost). Initial deposits typically range from 20–30% of the property price. All payment details are available on each project page.',
    },
    {
        category: 'Investment',
        question: 'Can I invest jointly with others?',
        answer: 'Yes! Joint investments are supported. During the inquiry process, select "Joint Investment" as your investment interest. Our team will guide you through the co-ownership structure, legal documentation, and revenue-sharing arrangements.',
    },
    {
        category: 'Investment',
        question: 'When do I start earning rental income?',
        answer: 'Rental income begins once the property is completed, tenanted, and operational. For already-built properties, yields start from the first full month of occupancy. For projects under construction, income begins once the development is completed and handed over. Yields are distributed quarterly into your One Square Meter wallet.',
    },
    // Security
    {
        category: 'Security',
        question: 'Is my investment legally protected?',
        answer: 'One Square Meter is a product of Dantata & Sawoe, one of Nigeria\'s most established real estate developers. All investments are backed by proper title documentation, registered with relevant land authorities, and comply with Nigerian property law. Each investor receives a Certificate of Ownership and legal documentation for their investment.',
    },
    {
        category: 'Security',
        question: 'What happens if a project is delayed?',
        answer: 'While rare given our track record, project delays are handled transparently. Investors are notified of any timeline changes. If a project is significantly delayed, investors may be offered alternative comparable units, a refund with interest, or an adjusted timeline with additional compensation. See our Investment Risk page for full details.',
    },
    {
        category: 'Security',
        question: 'How is KYC handled?',
        answer: 'To comply with financial regulations, all investors must complete KYC (Know Your Customer) verification. This involves uploading a valid government ID, providing proof of address, and basic biographical information. KYC can be completed through your Owner Portal settings. Verification typically takes 24–48 hours.',
    },
    // Platform
    {
        category: 'Platform',
        question: 'How do I fund my wallet?',
        answer: 'Your One Square Meter wallet can be funded via bank transfer. Simply click "Fund Wallet" in the Wallet section of your portal. You\'ll receive a dedicated virtual account number for instant transfers. Funds are typically credited within 5 minutes of receipt.',
    },
    {
        category: 'Platform',
        question: 'Can I withdraw my returns?',
        answer: 'Yes, rental income and returns credited to your wallet can be withdrawn to your bank account at any time. Withdrawals are processed within 24 hours. You can also choose to reinvest your returns into additional property units through the portal.',
    },
    {
        category: 'Platform',
        question: 'Is there a referral program?',
        answer: 'Yes! Every investor gets a unique referral code. When someone signs up and invests using your code, you earn a referral bonus (₦250,000 per successful referral). Track your referrals and earnings in your Owner Portal dashboard.',
    },
    {
        category: 'Platform',
        question: 'How do I contact support?',
        answer: 'You can reach our team through the Contact page, by email at invest@1sqm.ng, or by phone at +234 805 000 0000. Our investment team responds within 24 hours. For urgent inquiries, call during business hours (9am–5pm WAT, Monday–Friday).',
    },
];

const categories = ['Getting Started', 'Investment', 'Security', 'Platform'];

const categoryIcons: Record<string, React.ReactNode> = {
    'Getting Started': <HelpCircle size={18} />,
    'Investment': <DollarSign size={18} />,
    'Security': <Shield size={18} />,
    'Platform': <Building2 size={18} />,
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('Getting Started');

    const filteredFAQ = faqData.filter(f => f.category === activeCategory);

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO title="FAQ — One Square Meter Real Estate Investment" description="Frequently asked questions about investing with One Square Meter, payment plans, returns, and security." />

            {/* Hero */}
            <section className="bg-[#325074] py-24 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FEC12C] rounded-full blur-[200px] opacity-10" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <HelpCircle size={48} className="text-[#FEC12C] mx-auto mb-6" />
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                            How Can We <span className="text-[#FEC12C]">Help?</span>
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Everything you need to know about investing with One Square Meter. Can't find your answer? <Link to="/contact" className="text-[#FEC12C] underline">Contact us</Link>.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#325074] text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'}`}
                        >
                            {categoryIcons[cat]} {cat}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {filteredFAQ.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-[#325074] font-bold text-sm pr-4">{faq.question}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FEC12C]' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6">
                                                <div className="bg-slate-50 rounded-xl p-5">
                                                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-[#325074] rounded-3xl p-10 text-center text-white"
                >
                    <Phone size={32} className="text-[#FEC12C] mx-auto mb-4" />
                    <h3 className="text-2xl font-black tracking-tighter mb-3">Still have questions?</h3>
                    <p className="text-white/60 mb-8 max-w-md mx-auto">
                        Our investment team is ready to help you make informed decisions. Reach out anytime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#FEC12C] text-[#325074] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-amber-400 transition-all"
                        >
                            <Phone size={16} /> Contact Us
                        </Link>
                        <Link
                            to="/invest"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all border border-white/10"
                        >
                            <Briefcase size={16} /> Browse Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
