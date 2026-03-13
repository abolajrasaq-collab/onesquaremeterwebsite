import * as React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#325074] py-12 border-t border-[#FEC12C]/10 mt-auto">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left: Brand Identity */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="/" className="hover:scale-105 transition-transform mb-2">
                            <BrandLogo variant="light" size="sm" layout="horizontal" />
                        </Link>
                    </div>

                    {/* Right: Brand Positioning */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <p className="text-[#FEC12C] font-black italic text-lg tracking-wide">"Redefining Luxury Living"</p>
                        <p className="text-white/50 text-[9px] uppercase tracking-widest mt-1">Built with precision. Designed for legacy.</p>
                    </div>
                </div>

                {/* Bottom: Links & Copyright */}
                <div className="mt-10 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-white/40 font-medium tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} One Square Meter.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/invest" className="hover:text-[#FEC12C] transition-colors font-bold text-white">Invest</Link>
                        <Link to="/compare" className="hover:text-[#FEC12C] transition-colors font-bold text-white">Compare</Link>
                        <Link to="/faq" className="hover:text-[#FEC12C] transition-colors font-bold text-white">FAQ</Link>
                        <span className="text-white/20 hidden md:inline">|</span>
                        <Link to="/investment-risk" className="hover:text-[#FEC12C] transition-colors">Investment Risk</Link>
                        <Link to="/legal-disclosure" className="hover:text-[#FEC12C] transition-colors">Legal Disclosure</Link>
                        <Link to="/whistleblower" className="hover:text-[#FEC12C] transition-colors">Whistleblower</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
